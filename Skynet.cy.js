describe('Skynet', () => {
    it('Skynet_Dashboard', () => {
    //Login
    cy.visit('https://iam.nextbillion.ai/login?clientID=7a503418-532d-4f66-ad08-02cb5342e042')
    cy.get('[class="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputAdornedStart css-1ixds2g"]').type('autotesting@nextbillion.ai')
    cy.get('[class="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputAdornedStart MuiInputBase-inputAdornedEnd css-1gnht4k"]').type('Test@123#@!')
    cy.get('.MuiButton-contained').click()
    cy.url().should('include', '/login?clientID=7a503418-532d-4f66-ad08-02cb5342e042')
    
    cy.wait(2000)
    //Skynet
    cy.get('.MuiToolbar-root > .MuiButtonBase-root').click()
    cy.get('.MuiList-root > :nth-child(3) > a > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root').click()
    })      
    })