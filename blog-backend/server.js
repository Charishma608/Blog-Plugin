const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcrypt');


const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose
  .connect('mongodb://127.0.0.1:27017/blog', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

// User Schema and Model
const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isAdmin: { type: Boolean, default: false }
});

userSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

const User = mongoose.model('User', userSchema);

// Registration Route
app.post('/register', async (req, res) => {
  const { username, email, password } = req.body;

  // Validation
  if (!username || !email || !password) {
    return res.status(400).json({ success: false, message: 'All fields are required.' });
  }

  try {
 
    const hashedPassword = await bcrypt.hash(password, 10);

    
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();
    res.json({ success: true, message: 'User registered successfully.' });
  } catch (error) {
    if (error.code === 11000) {
      res.status(400).json({ success: false, message: 'Email already exists.' });
    } else {
      res.status(500).json({ success: false, message: 'Server error. Please try again.' });
    }
  }
});

// Login Route 
app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  // Validation
  if (!username || !password) {
    return res.status(400).json({ success: false, message: 'Both fields are required.' });
  }

  try {
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(401).json({ success: false, message: 'Invalid username or password.' });
    }

    
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(401).json({ success: false, message: 'Invalid username or password.' });
    }

    res.json({ success: true, message: 'Login successful.' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error. Please try again.' });
  }
});

// Admin Login Route
app.post('/admin-login', async (req, res) => {
  const { username, password } = req.body;

  // Validation
  if (!username || !password) {
    return res.status(400).json({ success: false, message: 'Both fields are required.' });
  }

  try {
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(401).json({ success: false, message: 'Invalid username or password.' });
    }

  
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(401).json({ success: false, message: 'Invalid username or password.' });
    }

    
    if (user.isAdmin) {
      res.json({ success: true, message: 'Admin login successful.' });
    } else {
      res.status(403).json({ success: false, message: 'Not an admin.' });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error. Please try again.' });
  }
});


// Default Route
app.get('/', (req, res) => {
  res.send('Server is running. Use /register or /login to interact.');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
