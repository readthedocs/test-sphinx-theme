const happoTask = require('happo-cypress/task');

module.exports = (on, config) => {
  on('task', happoTask);
  on('after:screenshot', happoTask.handleAfterScreenshot);
};
