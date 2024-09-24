/// <reference types="cypress" />

describe("Test_Suite1",()=>
{
    beforeEach(()=>
    {
        cy.visit(Cypress.config('baseUrl'))
    })

    it("Testcase_1",{browser:"Chrome"},()=>
    {
        cy.get("[name='email']").type(Cypress.env('useremail'),{delay: 1000})
        cy.get('#pass').type(Cypress.env('password'))
    })

    it("Testcase_2",{browser:"electron"},()=>
    {
            cy.get("[name='email']").type(Cypress.env('useremail'),{delay: 1000})
            cy.get('#pass').type(Cypress.env('password'))
    })
})