const parallelConfig = {
  user: 'nadimmahmud2' || process.env.BROWSERSTACK_USERNAME,
  key: 'qKLfLEW6HwJFQrGize6K' || process.env.BROWSERSTACK_ACCESS_KEY,
  hostname: 'hub.browserstack.com',
  capabilities: [
    {
      browserName: 'Chrome',
      'bstack:options': {
        browserVersion: '104.0',
        os: 'Windows',
        osVersion: '10',
      },
    },
    {
      browserName: 'Firefox',
      'bstack:options': {
        browserVersion: '104.0',
        os: 'Windows',
        osVersion: '10',
      },
    },
    {
      browserName: 'Safari',
      'bstack:options': {
        browserVersion: '15.6',
        os: 'OS X',
        osVersion: 'Monterey',
      },
    },
  ],
  commonCapabilities: {
    'bstack:options': {
      buildName: 'webdriverio-build-1',
    },
  },
  maxInstances: 10,
}
const { config: baseConfig } = require('./wdio.conf')
exports.config = { ...baseConfig, ...parallelConfig }
// Code to support common capabilities
exports.config.capabilities.forEach(function (caps) {
  for (var i in exports.config.commonCapabilities)
    caps[i] = { ...caps[i], ...exports.config.commonCapabilities[i] }
})
