/// <reference types="Cypress" />

import { register } from "./pageObjects/registerObject";
Cypress.on("uncaught:exception", (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false;
});
describe("POM register", () => {
  it("Register using POM", () => {
    cy.visit("/");
    register.myAccount.click();
    register.registerButton.click();
    register.register(
      "danijela",
      "dani",
      "+38166666666",
      "danijeladanije729la1@gmail.com",
      "123456789",
      "123456789"
    );
  });
});
