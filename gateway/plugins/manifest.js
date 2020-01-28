// const path = require('path')

module.exports = {
  version: '0.0.1',
  init: function (pluginContext) {
    const policy = require('./policies/index.js');
    pluginContext.registerPolicy(policy);

    const condition = require('./conditions/index.js');
    pluginContext.registerCondition(condition);
  }
}