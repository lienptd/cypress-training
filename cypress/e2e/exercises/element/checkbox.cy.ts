describe('Test checkbox', () => {
  beforeEach(() => {
    cy.intercept('https://pagead2.googlesyndication.com/*', {})
    cy.intercept('https://www.google-analytics.com/*', {})
    cy.intercept('https://securepubads.g.doubleclick.net/*', {})
    cy.intercept('https://stats.g.doubleclick.net/*', {})
    cy.intercept('https://oajs.openx.net/*', {})
    cy.intercept('https://id5-sync.com/*', {})
    cy.intercept('https://mug.criteo.com/*', {})
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


