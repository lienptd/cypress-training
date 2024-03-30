describe('Test web table', () => {
  beforeEach(() => {
    cy.intercept('https://pagead2.googlesyndication.com/*', {})
    cy.intercept('https://www.google-analytics.com/*', {})
    cy.intercept('https://securepubads.g.doubleclick.net/*', {})
    cy.intercept('https://stats.g.doubleclick.net/*', {})
    cy.intercept('https://oajs.openx.net/*', {})
    cy.intercept('https://id5-sync.com/*', {})
    cy.intercept('https://mug.criteo.com/*', {})
    cy.intercept('https://id.geistm.com/*', {})
    cy.visit('/webtables')
  })

  it('create new user', () => {
    cy.get('button#addNewRecordButton').click()
    cy.get('input#firstName').type('Lien')
    cy.get('input#lastName').type('Pham')
    cy.get('input#userEmail').type('lienp@gmail.com')
    cy.get('input#age').type('18')
    cy.get('input#salary').type('20000000')
    cy.get('input#department').type('Nha HT')
    cy.get('button#submit').click()
    cy.get('div.rt-resizable-header-content').contains('First Name').click()
    cy.get('div[role="row"]').should((row) => {
      expect(row).to.have.length(11)
      expect(row.eq(1)).to.contain('Alden')
      expect(row.eq(2)).to.contain('Cierra')
      expect(row.eq(3)).to.contain('Kierra')
      expect(row.eq(4)).to.contain('Lien')
    })
  })
})


