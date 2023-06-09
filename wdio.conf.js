const path = require("path");
const pathToDownload = path.resolve("e2eTests/audio");
global.downloadDir = path.join(__dirname, '/e2eTests/audio');


//const pathToDownload = path.resolve("//Users//runner//runners//2.165.2//work//cast-smoke-suite//cast-smoke-suite//e2eTests//audio");

exports.config = {
  //
  // ==================
  // Specify Test Files
  // ==================
  // Define which test specs should run. The pattern is relative to the directory
  // from which `wdio` was called. Notice that, if you are calling `wdio` from an
  // NPM script (see https://docs.npmjs.com/cli/run-script) then the current working
  // directory is where your package.json resides, so `wdio` will be called from there.
  //
  specs: ["./e2eTests/specs/**/*.spec.js"],

  suites: {
    //Suite which does not involve Jenkins Build for KBs
    smoke: [
      "./e2eTests/specs/smoke.spec.js"
    ],
  
    sanity: [
      //"./e2eTests/specs/sanity.spec.js"
    ],
    all: [
      //"./e2eTests/specs/smoke.spec.js",
       "./e2eTests/specs/regression.spec.js",
      // "./e2eTests/specs/paypal.spec.js",
      // "./e2eTests/specs/sanity.spec.js",
      //"./e2eTests/specs/regression.spec.js",
      // "./e2eTests/specs/header.spec.js",
      //"./e2eTests/specs/footer.spec.js"
    ],    //Suite which contains test involving Jenkins Build for KBs
    builds: [
      // './e2eTests/specs/sanity.spec.js'
    ]
  },

  // Patterns to exclude.
  exclude: [
    // 'path/to/excluded/files'
  ],
  //
  // ============
  // Capabilities
  // ============
  // Define your capabilities here. WebdriverIO can run multiple capabilities at the same
  // time. Depending on the number of capabilities, WebdriverIO launches several test
  // sessions. Within your capabilities you can overwrite the spec and exclude options in
  // order to group specific specs to a specific capability.
  //
  // First, you can define how many instances should be started at the same time. Let's
  // say you have 3 different capabilities (Chrome, Firefox, and Safari) and you have
  // set maxInstances to 1; wdio will spawn 3 processes. Therefore, if you have 10 spec
  // files and you set maxInstances to 10, all spec files will get tested at the same time
  // and 30 processes will get spawned. The property handles how many capabilities
  // from the same test should run tests.
  //
  maxInstances: 1,
  //
  // If you have trouble getting all important capabilities together, check out the
  // Sauce Labs platform configurator - a great tool to configure your capabilities:
  // https://docs.saucelabs.com/reference/platforms-configurator
  //
  capabilities: [
    {
      maxInstances: 1,
      browserName: "chrome",
      chromeOptions: {
        args : [
          "--disable-extensions",
          "--headless",
           "--no-sandbox", 
          "--disable-gpu", 
          "--window-size=1600,1000"
          ],
        prefs: {
          'directory_upgrade': true,
          'prompt_for_download': false,
          "download.default_directory": pathToDownload
        }
      }
    }
  ], 
  //
  // ===================
  // Test Configurations
  // ===================
  // Define all options that are relevant for the WebdriverIO instance here
  //
  // By default WebdriverIO commands are executed in a synchronous way using
  // the wdio-sync package. If you still want to run your tests in an async way
  // e.g. using promises you can set the sync option to false.
  sync: true,
  //
  // Level of logging verbosity: silent | verbose | command | data | result | error
  logLevel: "silent",
  //
  // Enables colors for log output.
  coloredLogs: true,
  //
  // If you only want to run your tests until a specific amount of tests have failed use
  // bail (default is 0 - don't bail, run all tests).
  bail: 0,
  //
  // Saves a screenshot to a given path if a command fails.
  screenshotPath: "./errorShots/",
  //
  // Set a base URL in order to shorten url command calls. If your url parameter starts
  // with "/", then the base url gets prepended.
  // baseUrl: process.env.E2E_TEST_FRONTEND_URL,
  baseUrl: process.env.NATURE_MADE_PRE_URL,
  //
  // Default timeout for all waitFor* commands.
  waitforTimeout: 20000,
  //
  // Default timeout in milliseconds for request
  // if Selenium Grid doesn't send response
  connectionRetryTimeout: 60000,
  //
  // Default request retries count
  connectionRetryCount: 3,
  //
  // Initialize the browser instance with a WebdriverIO plugin. The object should have the
  // plugin name as key and the desired plugin options as properties. Make sure you have
  // the plugin installed before running any tests. The following plugins are currently
  // available:
  // WebdriverCSS: https://github.com/webdriverio/webdrivercss
  // WebdriverRTC: https://github.com/webdriverio/webdriverrtc
  // Browserevent: https://github.com/webdriverio/browserevent
  // plugins: {
  //     webdrivercss: {
  //         screenshotRoot: 'my-shots',
  //         failedComparisonsRoot: 'diffs',
  //         misMatchTolerance: 0.05,
  //         screenWidth: [320,480,640,1024]
  //     },
  //     webdriverrtc: {},
  //     browserevent: {}
  // },
  services: ["selenium-standalone"],
  // port: ports,
  // seleniumArgs: {
  //   seleniumArgs: ["-port", ports],
  // },

  multiCapabilities: [
    {
      browserName: "chrome",
      maxInstances: 5,
      shardTestFiles: true
    }
  ],

  // seleniumArgs: {
  //   port: portnum,
  //   seleniumArgs: ["-port", portnum],
  //   javaArgs: ["-Xmx1024m"]
  // },

  seleniumInstallArgs: {
    version: "3.141.5",
    baseUrl: process.env.NATURE_MADE_PRE_URL,
    drivers: {
       chrome: {
         version: "113.0.5672.63",
         arch: process.arch,
         baseUrl: process.env.NATURE_MADE_PRE_URL,
       }
     }

    // seleniumArgs: {
    //   drivers: {
    //     chrome: { version: "79.0.3945.130" }
    //   }
  },
  // Test runner services
  // Services take over a specific job you don't want to take care of. They enhance
  // your test setup with almost no effort. Unlike plugins, they don't add new
  // commands. Instead, they hook themselves up into the test process.
  services: ["selenium-standalone"],
  //
  // Framework you want to run your specs with.
  // The following are supported: Mocha, Jasmine, and Cucumber
  // see also: http://webdriver.io/guide/testrunner/frameworks.html
  //
  // Make sure you have the wdio adapter package for the specific framework installed
  // before running any tests.
  framework: "mocha",
  //
  // Test reporter for stdout.
  // The only one supported by default is 'dot'
  // see also: http://webdriver.io/guide/testrunner/reporters.html
  //reporters: ['dot'],
  reporters: ["dot", "allure", "slack"],
  reporterOptions: {
    allure: {
      outputDir: "allure-results"
    }
  },
  seleniumInstallArgs: {
    drivers: {
      chrome: { version: '113.0.5672.63' },
      firefox: { version: '0.25.0' },
    }
  },
  seleniumArgs: {
    drivers: {
      chrome: { version: '113.0.5672.63' },
      firefox: { version: '0.25.0' },
    }
  },
 
  //
  // Options to be passed to Mocha.
  // See the full list at http://mochajs.org/
  mochaOpts: {
    ui: "bdd",
    compilers: ["js:babel-register"],
    timeout: 300000 
    // timeout: 24 * 60 * 60 * 10000 //TODO browser.debug()
  },
  //
  // =====
  // Hooks
  // =====
  // WebdriverIO provides several hooks you can use to interfere with the test process in order to enhance
  // it and to build services around it. You can either apply a single function or an array of
  // methods to it. If one of them returns with a promise, WebdriverIO will wait until that promise got
  // resolved to continue.
  /**
   * Gets executed once before all workers get launched.
   * @param {Object} config wdio configuration object
   * @param {Array.<Object>} capabilities list of capabilities details
   */
  // onPrepare: function (config, capabilities) {
  // },
  /**
   * Gets executed just before initialising the webdriver session and test framework. It allows you
   * to manipulate configurations depending on the capability or spec.
   * @param {Object} config wdio configuration object
   * @param {Array.<Object>} capabilities list of capabilities details
   * @param {Array.<String>} specs List of spec file paths that are to be run
   */
  // beforeSession: function (config, capabilities, specs) {
  // },
  /**
   * Gets executed before test execution begins. At this point you can access to all global
   * variables like `browser`. It is the perfect place to define custom commands.
   * @param {Array.<Object>} capabilities list of capabilities details
   * @param {Array.<String>} specs List of spec file paths that are to be run
   */
    // before: function (capabilities, specs) {
    //  browser.sendCommand('Page.setDownloadBehavior', {'behavior': 'allow', 'downloadPath': downloadDir})
    //  let session = browser.getSession();

    // },
  //
  /**
   * Hook that gets executed before the suite starts
   * @param {Object} suite suite details
   */
  // beforeSuite: function (suite) {
  // },
  /**
   * Hook that gets executed _before_ a hook within the suite starts (e.g. runs before calling
   * beforeEach in Mocha)
   */
  // beforeHook: function () {
  // },
  /**
   * Hook that gets executed _after_ a hook within the suite starts (e.g. runs after calling
   * afterEach in Mocha)
   */
  // afterHook: function () {
  // },
  /**
   * Function to be executed before a test (in Mocha/Jasmine) or a step (in Cucumber) starts.
   * @param {Object} test test details
   */
  // beforeTest: function (test) {
  // },
  /**
   * Runs before a WebdriverIO command gets executed.
   * @param {String} commandName hook command name
   * @param {Array} args arguments that command would receive
   */
  // beforeCommand: function (commandName, args) {
  // },
  /**
   * Runs after a WebdriverIO command gets executed
   * @param {String} commandName hook command name
   * @param {Array} args arguments that command would receive
   * @param {Number} result 0 - command success, 1 - command error
   * @param {Object} error error object if any
   */
  // afterCommand: function (commandName, args, result, error) {
  // },
  /**
   * Function to be executed after a test (in Mocha/Jasmine) or a step (in Cucumber) starts.
   * @param {Object} test test details
   */
  // afterTest: function (test) {
  // },
  afterTest: function (test) {
    // if test passed, ignore, else take and save screenshot.
    if (test.passed) {
        return;
    }
    // get current test title and clean it, to use it as file name
    var filename = encodeURIComponent(test.title.replace(/\s+/g, '-'));
    // build file path
    var filePath = this.screenshotPath + filename + '.png';
    // save screenshot
    browser.saveScreenshot(filePath);
    console.log('\n\tScreenshot location:', filePath, '\n');
  },
  /**
   * Hook that gets executed after the suite has ended
   * @param {Object} suite suite details
   */
  // afterSuite: function (suite) {
  // },
  /**
   * Gets executed after all tests are done. You still have access to all global variables from
   * the test.
   * @param {Number} result 0 - test pass, 1 - test fail
   * @param {Array.<Object>} capabilities list of capabilities details
   * @param {Array.<String>} specs List of spec file paths that ran
   */
  // after: function (result, capabilities, specs) {
  // },
  /**
   * Gets executed right after terminating the webdriver session.
   * @param {Object} config wdio configuration object
   * @param {Array.<Object>} capabilities list of capabilities details
   * @param {Array.<String>} specs List of spec file paths that ran
   */
  // afterSession: function (config, capabilities, specs) {
  // },
  /**
   * Gets executed after all workers got shut down and the process is about to exit. It is not
   * possible to defer the end of the process using a promise.
   * @param {Object} exitCode 0 - success, 1 - fail
   */
  // onComplete: function(exitCode) {
  // }
};