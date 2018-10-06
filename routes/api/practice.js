const express = require('express');
const router = express.Router();
const barkWorker =  require('../../workers/barkWorker');

router.get('/', (req, res) => {
  res.json({ status: "The /practice endpoint exists" })
});

router.get('/start/:num', (req, res) => {
  barkWorker(parseInt(req.params.num, 10));
  console.log(`Barking to the console every ${req.params.num} second(s)`);
  res.json({ status: "Bark worker started"})
});

router.get('/stop', (req, res) => {
  if (!barkWorker.running) {
    return res.json({ status: "worker not running" });
  }
  barkWorker.stop();
  res.json({ status: "worker stopped" });
});

module.exports = router;
