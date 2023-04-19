describe('Login page with username and password', () => {
  it('Open NCC Portal', () => {
    cy.visit('https://iam.nextbillion.ai/login?clientID=7a503418-532d-4f66-ad08-02cb5342e042')
    cy.get('input[class="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputAdornedStart css-1ixds2g"]').type('autotesting@nextbillion.ai')
    cy.get('input[class="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputAdornedStart MuiInputBase-inputAdornedEnd css-1gnht4k"]').type('Test@123#@!')
    cy.get('[class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeLarge MuiButton-containedSizeLarge MuiButton-fullWidth MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeLarge MuiButton-containedSizeLarge MuiButton-fullWidth css-1fvwnf3"]').click()

    cy.wait(2000)
    // Select dates
    cy.get('button[id="index-date-range-button-Last 24 hours"]').click()
    cy.wait(2000)
    cy.get('button[id="index-date-range-button-Last 7 days"]').click()
    cy.wait(2000)
    cy.get('button[id="index-date-range-button-Last\ Month"]').click()
    cy.wait(2000)
    cy.get('button[id="index-date-range-button-This\ Month"]').click()
    cy.wait(2000)
    cy.get('button[id="index-date-range-button-Custom\ Date"]').click()
    cy.wait(2000)
  })
})