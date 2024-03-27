describe('Test textbox', () => {
  beforeEach(() => {
    cy.visit('/text-box')
  })

  it('input all fields and submit', () => {
    cy.get('#userName').type('Lien Pham')
    cy.get('#userEmail').type('lien@gmail.com')
    cy.get('#currentAddress').type('250 HT')
    cy.get('#permanentAddress').type('978 TC')
    cy.get('#submit').click()
  })
})