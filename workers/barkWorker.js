const CronJob = require('cron').CronJob;

let startBarkWorker = num => {
  const barkWorker = new CronJob(
    `*/${num} * * * * *`,
    () => console.log("bark"),
    null,
    false,
    "America/New_York"
  );
  barkWorker.start();
}

module.exports = startBarkWorker;
