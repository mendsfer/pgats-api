const express = require('express');
const router = express.Router();
const userService = require('../service/userService');

// Login
router.post('/login', (req, res) => {
  const result = userService.loginUser(req.body);
  if (result.error) return res.status(400).json({ error: result.error });
  res.json(result.user);
});

module.exports = router;
