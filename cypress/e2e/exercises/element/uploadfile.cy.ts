describe('Test upload & download', () => {
  beforeEach(() => {
    cy.visit('/upload-download')
  })

  it('upload file', () => {
    cy.get('#uploadFile').selectFile('cypress/fixtures/may.png')
  })

})
