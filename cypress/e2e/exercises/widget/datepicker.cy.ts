describe('Test date picker', () => {
  beforeEach(() => {
    cy.visit('/date-picker')
  })

  it('test date picker', () => {
    cy.get('#datePickerMonthYearInput').click()
    cy.get('.react-datepicker__year-select').select('2000')
    cy.get('.react-datepicker__month-select').select('August')
    cy.get('.react-datepicker__day').contains('8').click()
    cy.get('#datePickerMonthYearInput').should('have.value', '08/08/2000')
  })
})