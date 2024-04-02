describe('Test upload & download', () => {
  beforeEach(() => {
    cy.visit('/upload-download')
  })

  it('upload file', () => {
    cy.get('#uploadFile').should('be.visible')
    cy.get('#uploadFile').selectFile('cypress/fixtures/may.png')
    cy.get('#uploadedFilePath').should('contains.text', 'may.png')
  })

  it('download file', () => {
    cy.get('#downloadButton').should('be.visible').click()
    cy.readFile('cypress/downloads/sampleFile.jpeg').should('exist')
  });
})
