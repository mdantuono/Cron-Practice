const CronJob = require('cron').CronJob;

let addRandomNumbers = num => {
  const adderWorker = new CronJob(
    "* * * * * *",
    () => {
      this.stop(); // including stop here tells it to only run once
      let total = 0;
      for (let i = 0; i < num; i++) {
        total += Math.floor(Math.random() * (101)) // Random number function
      }
      console.log(`total is ${total}`);
    },
    null,
    false,
    "America/New_York"
  );
  adderWorker.start();
}

// add up 15 random numbers between 10 and 100 console.log the total

module.exports = addRandomNumbers;


// however, job does not run asyncronously as of now
