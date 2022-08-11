it("throws a cross origin error", () => {
  cy.visit("http://localhost:3000");
  cy.get("#qsLoginBtn").click();
  
  cy.origin("https://myusername.auth0.com/", () => {
  cy.get("#1-email").type(Cypress.env("EMAIL"));
  cy.get("input[type='password']")
    .type(Cypress.env("PASSWORD"));
  cy.get("button[type='submit']").click()
},

cy.get("h1").should("contain", "React.js Sample Project"))
});
