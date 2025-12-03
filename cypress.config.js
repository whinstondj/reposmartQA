const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1280,
  viewportHeight: 720,
  retries: {
    runMode: 1,
    openMode: 0,
  },
  e2e: {
    baseUrl: "https://winstoncastillo.com/robot-selenium",
    projectId: "wqnqbq",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
