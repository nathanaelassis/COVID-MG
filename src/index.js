const settings = require('../config/settings');
const Scheduler = require('./functions/Scheduler');
const S3Listener = require('./functions/S3Listener');

const scheduler = new Scheduler(settings);
const s3listener = new S3Listener(settings);

module.exports = {
  scheduler: scheduler.main.bind(scheduler),
  s3listener: s3listener.main.bind(s3listener),
}
