import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    screenshotsFolder: "cypress/results/screenshots",
    videosFolder: "cypress/results/videos",
  },
});
