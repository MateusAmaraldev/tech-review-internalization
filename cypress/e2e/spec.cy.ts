describe("empty spec", () => {
  it("passes", () => {
    //arrange

    //act
    cy.visit("http://localhost:5173/");
    cy.contains("welcome friend");
    cy.get('button[name="change-to-pt"]').click();
    cy.contains("bem vindo amigo").should("be.visible");
    cy.get('button[name="change-to-en"]').click();
    cy.contains("bem vindo amigo").should("not.exist");

    //assert
    cy.contains("welcome friend").should("be.visible");
  });
});
