describe('Test dynamic properties', () => {
  beforeEach(() => {
    cy.visit('/dynamic-properties')
  })

  it('test text has random id', () => {
    cy.contains('This text has random Id').should('be.exist')
    cy.get('#enableAfter').should('be.exist').and('be.disabled')
    cy.get('#colorChange').should('be.exist').and('be.visible')
    cy.get('#visibleAfter').should('not.exist')
    cy.wait(5000)
    cy.get('#enableAfter').should('be.enabled')
    cy.get('#colorChange').should('have.css', 'color','rgb(220, 53, 69)')
    cy.get('#visibleAfter').should('be.visible')
  })
})