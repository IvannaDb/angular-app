import {defineConfig} from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:4200',
    specPattern: 'cypress/e2e/**/*.{spec,test}.{js,jsx}',
    viewportWidth: 1920,
    viewportHeight: 1080,
    defaultCommandTimeout: 3000,
    retries: { runMode: 1, openMode: 1 },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
import {defineConfig} from 'cypress';
