describe('Test book store application', () => {
  beforeEach(() => {
    cy.visit('/login')
  })

  it('test login', () => {
    cy.get('#userName').type(Cypress.env('userName'))
    cy.get('#password').type(Cypress.env('password'))
    cy.get('#login').should('be.visible').click()
  })
})


