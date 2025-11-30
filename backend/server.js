const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const axios = require('axios'); //Jason added this lets see if it breaks :)

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
  const user = await User.findOne({email});
  if(!User) return res.status(401).json({error: "Incorrect Email"})
  
  const passwordMatch = await bcrypt.compare(password, user.password)
  if(!passwordMatch) return res.status(401).json({error: "Incorrect Password"})

  const token = jwt.sign({id: User._id}, 'secretKey', {expiresIn: '1h'})
  res.json({token})
})

// Test
app.get('/', (req, res) => {
  res.send('Backend is running');
});

// Start server
app.listen(3000, () => {
  console.log('Backend running at http://localhost:3000');
});

//Helper function to call Fingerprint API its all beneath so i know what to delete if i break everything
async function getFingerprintEvent(eventId) {
  const baseUrl = process.env.FPJS_BASE_URL || 'https://api.fpjs.io'
  const secretKey = process.env.FPJS_SECRET_KEY

  if (!secretKey) {
    throw new Error('Missing FPJS_SECRET_KEY in .env')
  }

  const url = `${baseUrl}/v4/events/${encodeURIComponent(eventId)}`

  const res = await axios.get(url, {
    headers: {
      Authorization: `Bearer ${secretKey}`,
    },
  })

  return res.data
}

app.post('/fp-event', async (req, res) => {
  const { requestId } = req.body

  if (!requestId) {
    return res.status(400).json({ error: 'requestId is required' })
  }

  try {
    const event = await getFingerprintEvent(requestId)

    return res.json(event)
  } catch (err) {
    console.error('Error fetching Fingerprint event:', err.message)
    return res.status(500).json({ error: 'Failed to fetch Fingerprint event' })
  }
})

const PORT = 3000
app.listen(PORT, () => {
  console.log(`Backend listening on port ${PORT}`)
})

//everything between jason comments are what i added lets see how it goes