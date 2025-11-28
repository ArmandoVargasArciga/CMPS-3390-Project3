const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

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
  res.json(items);
});

app.post('/User', async (req, res) => {
  const newUser = new User(req.body);
  await newUser.save();
  res.json(newUser);
});

// Test
app.get('/', (req, res) => {
  res.send('Backend is running');
});

// Start server
app.listen(3000, () => {
  console.log('Backend running at http://localhost:3000');
});