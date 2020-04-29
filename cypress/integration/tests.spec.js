describe('The Home Page', function() {
  it('successfully loads', function() {
    cy.visit('/')
})
    it('X win test', function() {

        cy.get('button#0')
        .click()

        cy.get('button#1')
        .click()

        cy.get('button#3')
        .click()

        cy.get('button#4')
        .click()

        cy.get('button#6')
        .click()

        cy.get('h1#status')
        .should('have.text','Победил X!')
        cy.wait(2500)
})

    it('O win test', function() {
        cy.get('button#1')
          .click()

        cy.get('button#0')
          .click()

        cy.get('button#4')
          .click()

        cy.get('button#3')
          .click()

        cy.get('button#2')
          .click()

        cy.get('button#6')
          .click()

        cy.get('h1#status')
          .should('have.text','Победил O!')
          cy.wait(2500)
})

    it('Draw test', function() {
        cy.get('button#0')
          .click()

        cy.get('button#3')
          .click()

        cy.get('button#1')
          .click()

        cy.get('button#2')
          .click()

        cy.get('button#5')
          .click()

        cy.get('button#4')
          .click()

        cy.get('button#8')
          .click()

        cy.get('button#7')
          .click()

        cy.get('button#6')
          .click()

        cy.get('h1#status')
        .should('have.text','Ничья!')
        cy.wait(2500)
  })
    it("First is X test",function(){
        cy.get('h1#status')
          .should('have.text','Кто сейчас играет: X')

        cy.get('button#0')
          .click()

        cy.get('h1#status')
          .should('have.text','Кто сейчас играет: O')

        cy.get('button#1')
          .click()

        cy.get('h1#status')
          .should('have.text','Кто сейчас играет: X')

    })
})
