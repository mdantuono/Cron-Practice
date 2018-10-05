const CronJob = require('cron').CronJob;

const mainWorker = new CronJob(
  "*/5 * * * * *",
  () => console.log("You will see this message every 5 seconds"),
  null,
  false,
  "America/New_York"
);

module.exports = mainWorker;
