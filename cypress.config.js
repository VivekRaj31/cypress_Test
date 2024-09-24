const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
      animationDistanceThreshold: 5,
      arch: 'x64',
      baseUrl: 'https://selectorshub.com//xpath-practice-page//',
      blockHosts: "",
      browsers: [
      {
      name: 'chrome',
      family: 'chromium',
      channel: 'stable',
      displayName: 'Chrome',
      version: '128.0.6613.138',
      path: 'C:\Program Files (x86)\Google\Chrome\Application\chrome.exe',
      minSupportedVersion: 64,
      majorVersion: '128',
      },
      {
      name: 'edge',
      family: 'chromium',
      channel: 'stable',
      displayName: 'Edge',
      version: '129.0.2792.52',
      path: 'C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe',
      minSupportedVersion: 79,
      majorVersion: '129',
      },
      {
      name: 'electron',
      channel: 'stable',
      family: 'chromium',
      displayName: 'Electron',
      version: '118.0.5993.159',
      path: '',
      majorVersion: 118,
      },
      ],
      chromeWebSecurity: true,
      clientCertificates: [],
      defaultCommandTimeout: 4000,
      downloadsFolder: 'cypress/downloads',
      env: {
        useremail: "vk123@gmail.com",
        password: "Dfgryu@123"
      },
      excludeSpecPattern: '*.hot-update.js',
      execTimeout: 60000,
      fileServerFolder: '',
      fixturesFolder: 'cypress/fixtures',
      hosts: null,
      includeShadowDom: false,
      isInteractive: true,
      keystrokeDelay: 0,
      modifyObstructiveCode: true,
      numTestsKeptInMemory: 50,
      pageLoadTimeout: 60000,
      platform: 'win32',
      port: null,
      projectId: null,
      redirectionLimit: 20,
      reporter: 'spec',
      reporterOptions: null,
      requestTimeout: 5000,
      resolvedNodePath: null,
      resolvedNodeVersion: null,
      responseTimeout: 30000,
      retries: {
      runMode: 0,
      openMode: 0,
      },
      screenshotOnRunFailure: true,
      screenshotsFolder: 'cypress/screenshots',
      scrollBehavior: 'top',
      slowTestThreshold: 10000,
      specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
      supportFile: 'cypress/support/e2e.{js,jsx,ts,tsx}',
      supportFolder: false,
      taskTimeout: 60000,
      testIsolation: true,
      trashAssetsBeforeRuns: true,
      userAgent: null,
      video: false,
      videoCompression: false,
      videosFolder: 'cypress/videos',
      viewportHeight: 660,
      viewportWidth: 1000,
      waitForAnimations: true,
      watchForFileChanges: true,
    },
      reporter: "mochawesome",
      reporterOptions: {
        reportDir: "cypress/reports/html",
        overwrite: false,
        html: true,
        json: true
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
});
