const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'g4wji6',
  defaultCommandTimeout: 8000,
  pageLoadTimeout: 30000,
  env: {
    url: 'https://rahulshettyacademy.com',
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/integration/examples/*.js'
  },
});
