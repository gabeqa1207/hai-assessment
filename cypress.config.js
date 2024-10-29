/* eslint-disable global-require */
// eslint-disable-next-line import/no-extraneous-dependencies
const { defineConfig } = require('cypress')

module.exports = defineConfig({
   reporter: 'cypress-mochawesome-reporter',
   reporterOptions: {
      charts: true,
      reportPageTitle: 'HAI Assessment Test Summary',
      embeddedScreenshots: true,
      inlineAssets: true,
      saveAllAttempts: false,
    },
    numTestsKeptInMemory: 10,
    defaultCommandTimeout: 15000,
    env: {
        device: 'desktop',
        email: 'test@test.com',
        password: '********'
    },
    retries: {
        runMode: 1,
        openMode: 0
    },
    userAgent:
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.190 Safari/537.36',
    viewportHeight: 768,
    viewportWidth: 1266,
    e2e: {
        // We've imported your old cypress plugins here.
        // You may want to clean this up later by importing these.
        setupNodeEvents: function (on, config) {
            require('cypress-mochawesome-reporter/plugin')(on);
            return require('./cypress/plugins/index.js')(on, config)
        }
    }
})
