const parallelConfig = {
    user: 'nadimmahmud2',
    key: 'qKLfLEW6HwJFQrGize6K',
    hostname: 'hub.browserstack.com',
    capabilities: [
      {
        browserName: 'Chrome',
        'bstack:options': {
          browserVersion: '103.0',
          os: 'Windows',
          osVersion: '11'
        }
      },
      {
        browserName: 'Firefox',
        'bstack:options': {
          browserVersion: '102.0',
          os: 'Windows',
          osVersion: '10'
        }
      },
      {
        browserName: 'Safari',
        'bstack:options': {
          browserVersion: '14.1',
          os: 'OS X',
          osVersion: 'Big Sur'
        }
      }
    ],
    commonCapabilities: {
      'bstack:options': {
        buildName: 'webdriverio-build-1'
      }
    },
    maxInstances: 5
  };
  const { config: baseConfig } = require('./wdio.conf');
  exports.config = { ...baseConfig, ...parallelConfig };
  // Code to support common capabilities
  exports.config.capabilities.forEach(function(caps) {
    for (var i in exports.config.commonCapabilities)
      caps[i] = { ...caps[i], ...exports.config.commonCapabilities[i] };
  });