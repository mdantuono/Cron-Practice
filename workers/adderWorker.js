const CronJob = require('cron').CronJob;

const adderWorker = new CronJob(
  "* * * * * *",
  function() {
    this.stop(); // including stop here tells it to only run once
    let total = 0;
    for (var i = 0; i < 15; i++) {
      total += Math.floor(Math.random() * (101))
    }
    console.log(`total is ${total}`);
  },
  null,
  false,
  "America/New_York"
)

// add up 15 random numbers between 10 and 100 console.log the total

module.exports = adderWorker;


// however, job does not run asyncronously as of now
