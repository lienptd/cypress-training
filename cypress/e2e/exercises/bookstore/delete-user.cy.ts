describe("Delete user", () => {
  const userName = 'lienpham3'
  const password = 'Abc@1234'
  beforeEach(() => {
    cy.request("POST", "https://demoqa.com/Account/v1/User", {
      userName,
      password,
    }).then((response) => {
      expect(response.body).to.have.property("username", "lienpham3");
    });
  });
  
  it("test delete my account", () => {
    cy.visit('/login');
    cy.get("#userName").type(userName);
    cy.get("#password").type(password);
    cy.get("#login").should('be.visible').click();
    cy.contains('Delete Account').should('be.visible').click();
    cy.get('#closeSmallModal-ok').should('be.visible').click();
  });
});
