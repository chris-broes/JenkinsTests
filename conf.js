// conf.js
// This configuration tells Protractor where your test files (specs) are, and where to talk to your Selenium Server (seleniumAddress). 
// It will use the defaults for all other configuration. Chrome is the default browser.

// You can run the test by executing the folliwng line on your terminal:
// >protractor conf.js

exports.config = {
  sauceUser: 'popa',
  sauceKey: 'd6394c3f-ee5d-42ea-a4ad-1a5ada1fbf43',

 //Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName':'firefox',
    'name':'Angular Test with Protractor from Jenkins',
    'platform': 'Windows 8.1',
 	'version': '33'},

  specs: ['spec.js']
}