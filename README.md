# percy-study

## Steps

* Create account at https://percy.io/
* Create a project
* Integrate following: https://www.browserstack.com/docs/percy/integrate/cypress
* Export token
* In your `cypress/support/e2e.js` file, add: `import '@percy/cypress';`
* Add `percySnapshot()` calls to our tests
* `PERCY_TOKEN=<token> npx percy exec -- cypress run`
* App must be running!
* Cypress must be running!
* Fix app default port on cypress.config.js file
* Always give names to your snapshots!

## Github actions integration

- In your GitHub project’s settings, go to Settings > Secrets and variables > Actions > New repository secret
- Set `PERCY_TOKEN`