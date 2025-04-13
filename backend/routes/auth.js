const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../db');

const router = express.Router();
const SECRET = 'your_jwt_secret';

// Signup
router.post('/signup', (req, res) => {
  const { email, password } = req.body;
  const hashed = bcrypt.hashSync(password, 10);

  db.run(`INSERT INTO users (email, password) VALUES (?, ?)`, [email, hashed], function (err) {
    if (err) return res.status(500).json({ message: 'User exists or DB error' });
    res.json({ message: 'User created' });
  });
});

// Login
router.post('/login', (req, res) => {
  const { email, password } = req.body;

  db.get(`SELECT * FROM users WHERE email = ?`, [email], (err, user) => {
    if (err || !user) return res.status(401).json({ message: 'User not found' });

    const valid = bcrypt.compareSync(password, user.password);
    if (!valid) return res.status(403).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ id: user.id }, SECRET, { expiresIn: '1h' });
    res.json({ token });
  });
});

module.exports = router;