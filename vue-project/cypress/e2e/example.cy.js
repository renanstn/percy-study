// https://on.cypress.io/api

describe("My First Test", () => {
  it("visits the app root url", () => {
    cy.visit("/");
    cy.contains("h2", "Welcome to app");
  });
});

describe('Integration test with visual testing', function() {
  it('Loads the homepage', function() {
    cy.visit("/");
    // Take a snapshot for visual diffing
    cy.percySnapshot('snap A');
    cy.visit("/about")
    cy.percySnapshot('snap B');
  });
});
