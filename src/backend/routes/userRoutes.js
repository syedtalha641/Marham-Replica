const express = require('express');
const router = express.Router();
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { v4 } = require('uuid');

router.post('/validate', async (req, res) => {
  try {
    let token = req.headers.authorization.split(' ')[1];
    console.log(token)
    if (token) {
      const decoded = jwt.verify(token, 'your-secret-key');
      console.log(decoded)
      let email = decoded.email;
      let user = await User.findOne({ email });
      if (!user) {
        res.status(401).json({ error: 'Token is invalid' });
        return;
      }
      token = jwt.sign({ userId: user.userId }, 'your-secret-key', {
        expiresIn: '1h',
      });
      res.json({ token, user });
    } else {
      res.status(401).json({ error: 'Token not provided' });
    }
  } catch (error) {
    console.log(error)
    res.status(401).json({ error: 'Token is invalid' });
  }

});

router.post('/signup', async (req, res) => {
  console.log(req.body)
  const { firstName, lastName, email, password, role, sso } = req.body;
  try {
    if (!email || !password || !firstName || !lastName) {
      res.status(500).json({ error: 'Registration failed1' });
      return
    }
    let user = await User.findOne({ email, sso: false }); // fid non sso user
    let users = await User.toString();
    console.log(users);

    if (user) {
      res.status(401).json({ error: 'User is already registered' });
      return;
    }

    user = new User({ userId: v4(), firstName, lastName, email, password, role, sso });
    await user.save();
    res.json({ message: 'User registered successfully' });
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Registration failed2' });
  }
});

router.post('/sso/login', async (req, res) => {
  let { firstName, lastName, email, role } = req.body
  try {
    if (!firstName || !lastName || !email) {
      res.status(500).json({ error: 'Registration failed1' });
      return
    }
    let user = await User.findOne({ email });
    if (!user) {
      user = new User({ userId: v4(), firstName, lastName, email, role, sso: true });
      await user.save();
    }
    const token = jwt.sign({ userId: user.userId, email: user.email }, 'your-secret-key', {
      expiresIn: '1h',
    });
    res.json({ token, user });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Authentication failed' });
  }
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: 'Authentication failed' });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Authentication failed' });
    }
    const token = jwt.sign({ userId: user.userId, email: user.email }, 'your-secret-key', {
      expiresIn: '1h',
    });
    res.json({ token, user });
  } catch (error) {
    res.status(500).json({ error: 'Authentication failed' });
  }
});

module.exports = router;