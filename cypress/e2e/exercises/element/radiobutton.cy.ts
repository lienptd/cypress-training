describe('Test  radio button', () => {
  beforeEach(() => {
    cy.visit('/radio-button')
  })

  it('test radio button', () => {
    cy.get('.custom-control-label').each(($el) => {
      if (!$el.hasClass('disabled')) {
        cy.wrap($el).click()
      }
    })  
  })
})


