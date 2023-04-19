describe('Auto Login Test', () => {
    it('Logs in successfully', () => {
    cy.visit('https://iam.nextbillion.ai/login?clientID=7a503418-532d-4f66-ad08-02cb5342e042')
    cy.get('[class="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputAdornedStart css-1ixds2g"]').type('autotesting@nextbillion.ai')
    cy.get('[class="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputAdornedStart MuiInputBase-inputAdornedEnd css-1gnht4k"]').type('Test@123#@!')
    cy.get('.MuiButton-contained').click()
    cy.url().should('include', '/login?clientID=7a503418-532d-4f66-ad08-02cb5342e042')

    cy.wait(2000)
    //Geofense 
    cy.get('.MuiToolbar-root > .MuiButtonBase-root').click()
    cy.get(':nth-child(4) > a > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root').click()
    })    
    })