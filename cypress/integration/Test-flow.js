describe("flow", () => {
  it("should go throw the app", () => {
    cy.visit("/");
    cy.contains("2020");
    cy.findByText("2020").click();
    cy.contains("2020");
    cy.findByPlaceholderText("Search for brand").type("audi");
    cy.contains("Audi");
    cy.findByText("Audi").click();
    cy.contains("2020 - Audi");
    cy.findByPlaceholderText("Search for model").type("a1");
    cy.contains("A1");
    cy.findByText("A1").click();
    cy.contains("2020 - Audi - A1");
    cy.findByPlaceholderText("Search for model versions").type("ego");
    cy.contains("Ego");
    cy.findByText("HB Ego").click();
    cy.contains("2020 - Audi - A1 - HB Ego");
    cy.findByPlaceholderText("First Name").type("Someone");
    cy.findByPlaceholderText("Email").type("example@gmail.com");
    cy.findByPlaceholderText("Phone Number").type("0123456789");
    cy.findByText("Submit").click();
    cy.contains("Audi");
    cy.contains("2020");
    cy.contains("A1");
    cy.contains("Someone");
    cy.contains("example@gmail.com");
    cy.contains("0123456789");
    cy.contains("Confirm and Close");
    cy.findByText("Confirm and Close").click();
    cy.contains("Thank You");
  });
});