describe('Test checkbox', () => {
  beforeEach(() => {
    cy.visit('/checkbox')
  })

  it('select React checkbox only', () => {
    cy.get('button.rct-collapse.rct-collapse-btn').click()
    cy.get('button.rct-collapse.rct-collapse-btn').eq(2).click()
    cy.get('button.rct-collapse.rct-collapse-btn').eq(3).click()
    cy.get('span.rct-checkbox').eq(4).click()
    cy.get('span.rct-checkbox').eq(4).get('svg.rct-icon-check').should('be.visible')
  })
})


