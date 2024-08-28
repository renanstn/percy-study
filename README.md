# percy-study

## Steps

* Create account
* Create a project
* Integrate following: https://www.browserstack.com/docs/percy/integrate/cypress
* Export token
* In your `cypress/support/e2e.js` file, add: `import '@percy/cypress';`
* Add `percySnapshot()` calls to our tests
* `npx percy exec -- cypress run`
* App must be running!
* Cypress must be running!
* Fix app default port on cypress.config.js file
