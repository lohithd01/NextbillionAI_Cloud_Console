describe('Login page with username and password', () => {
  it('Open NCC Portal', () => {
    cy.visit('https://iam.nextbillion.ai/login?clientID=7a503418-532d-4f66-ad08-02cb5342e042')
    cy.get('input[class="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputAdornedStart css-1ixds2g"]').type('login_id')
    cy.get('input[class="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputAdornedStart MuiInputBase-inputAdornedEnd css-1gnht4k"]').type('password')
    cy.get('[class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeLarge MuiButton-containedSizeLarge MuiButton-fullWidth MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeLarge MuiButton-containedSizeLarge MuiButton-fullWidth css-1fvwnf3"]').click()
    
    cy.wait(2000)
    
    //hamburger click
    cy.get('.MuiToolbar-root > .MuiButtonBase-root').click()
  })
})