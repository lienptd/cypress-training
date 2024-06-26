describe('Test web table', () => {
  beforeEach(() => {
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

  it('edit user', () => {
    cy.get('div[role="row"]').contains('Cierra').parent().find('span[title="Edit"]').click()
    cy.get('input#firstName').clear().type('Eva')
    cy.get('button#submit').click()
    cy.get('div[role="row"]').contains('Eva').should('be.visible')
  })

  it('delete user', () => {
    cy.get('div[role="row"]').contains('Cierra').parent().find('span[title="Delete"]').click()
    cy.get('div[role="row"]').contains('Cierra').should('not.exist')
  })

  it('search user', () => {
    cy.get('#searchBox').type('Alden')
    cy.get('div[role="row"]').contains('Alden').should('be.visible')
    cy.get('div[role="row"]').contains('Cierra').should('not.exist')
    cy.get('div[role="row"]').contains('Kierra').should('not.exist')
  })
})


