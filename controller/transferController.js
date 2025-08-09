const express = require('express');
const router = express.Router();
const transferService = require('../service/transferService');

router.post('/', (req, res) => {
  const result = transferService.transfer(req.body);
  if (result.error) return res.status(400).json({ error: result.error });
  res.status(201).json(result.transfer);
});

router.get('/', (req, res) => {
  res.json(transferService.getAllTransfers());
});

module.exports = router;
