describe("Gallery", () => {
  beforeEach(() => {
    cy.server();
    cy.visit(`http://localhost:3000/`);
  });

  it("has the default language as english", () => {
    cy.get(".gallery__input")
      .find("label")
      .contains("Or choose your own!");
  });

  // TODO investigate if hooks are causing this logic to fail
  // where it otherwise has worked in the past
  it("Changes the language on click", () => {
    cy.get("option")
      .eq(1)
      .click({ force: true });
    cy.get(".gallery__input")
      .find("label")
      .contains("O elige el tuyo!");
  });
});
