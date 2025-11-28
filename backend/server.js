const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcript');
const jtw = require('jsonwebtoken');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/mydb');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

const UserSchema = new mongoose.Schema({ firstName: String,
                                         lastName: String,
                                         userName: String,
                                         email: String,
                                         password: String });
const User = mongoose.model('Users', UserSchema);

app.get('/User', async (req, res) => {
  const Users = await User.find();
  res.json(Users);
});

// Signup Page
app.post('/User', async (req, res) => {
  try {
    const { firstName, lastName, userName, email, password} = req.body
    const hashPassword = await bcrypt.hash(password, 10)

    const newUser = new User({
      firstName,
      lastName,
      userName,
      email,
      password: hashPassword
    });
    await newUser.save();
    res.status(201).json({message: "User was created"});
  } catch(e){
    res.status(400).json({error: e.message})
  }
});

// Login Page
app.post('/login', async (req, res) => {
  const {email, password} = req.body;
  const User = await User.findOne({email});
  if(!User) return res.status(401).json({error: "Incorrect Email"})
  
})

// Test
app.get('/', (req, res) => {
  res.send('Backend is running');
});

// Start server
app.listen(3000, () => {
  console.log('Backend running at http://localhost:3000');
});