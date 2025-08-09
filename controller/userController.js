const express = require('express');
const router = express.Router();
const userService = require('../service/userService');

router.post('/register', (req, res) => {
  const result = userService.registerUser(req.body);
  if (result.error) return res.status(400).json({ error: result.error });
  res.status(201).json(result.user);
});


router.get('/', (req, res) => {
  res.json(userService.getAllUsers());
});

module.exports = router;
