const CronJob = require('cron').CronJob;

const mainWorker = new CronJob(
  "* * * * * *",
  () => console.log("Oi"),
  null,
  false,
  "America/New_York"
);

module.exports = mainWorker;
