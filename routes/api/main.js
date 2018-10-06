const express = require('express');
const router = express.Router();
const mainWorker = require('../../workers/mainWorker');
const addRandomNumbers = require('../../workers/adderWorker');

router.get('/', (req, res) => res.json({ status: "success" }));

router.get('/start', (req, res) => {
  if (mainWorker.running) {
    return res.json({ status: "already running" });
  }
  mainWorker.start();
  res.json({ status: "started worker" });
});

router.get('/stop', (req, res) => {
  if (!mainWorker.running) {
    return res.json({ status: "worker not running" });
  }
  mainWorker.stop();
  res.json({ status: "worker stopped" });
});

router.get('/adder/:num', (req, res) => {
  addRandomNumbers(parseInt(req.params.num, 10));
  res.json({ status: "total logged to console"});
});

module.exports = router;
