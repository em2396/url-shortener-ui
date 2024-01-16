describe('URL shortener', () => {
  beforeEach(() => {
    cy.intercept("GET", 'http://localhost:3001/api/v1/urls', {
      statusCode: 200,
      fixture: 'urlSample.json'
    })

    cy.intercept("POST", 'http://localhost:3001/api/v1/urls',  {
      statusCode: 201,
      body: {
        title: "Twitter",
        long_url: "Twitter.com/?DSFGsdfsd",
        short_url: "http://localhost:3001/useshorturl/4",
        id: "4"
      },
    })
    cy.visit('http://localhost:3000')
  })

  it('should view the title', () => {
    cy.get('.title').should('exist')
      .get('.title').contains('URL Shortener')
  })

  it('should view the form', () => {
    cy.get('.url-form').should('exist')
  })

  it('should see the URLs on page load', () => {
    cy.get('.url-container').children().should('have.length', 3)

    cy.get('.url-container').first().contains('Awesome photo')
    cy.get('.url-container').first().contains('https://images.unsplash.com/photo-1531898418865-480b7090470f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80')
    cy.get('.url-container').first().contains('http://localhost:3001/useshorturl/1')
    cy.get('.url-container').first().contains('1')

    cy.get('.url-container').last().contains('Facebook')
    cy.get('.url-container').last().contains('http://www.facebook.com/dfsdfdgfhwersdf')
    cy.get('.url-container').last().contains('http://localhost:3001/useshorturl/3')
    cy.get('.url-container').last().contains('3')
  })


  it('should fill out the form', () => {
    cy.get('input[name="title"]').type('Twitter').should('have.value', 'Twitter')
    cy.get('input[name="urlToShorten"]').type('Twitter.com/?DSFGsdfsd').should('have.value', 'Twitter.com/?DSFGsdfsd')
  })

  it('should POST the inputted data', () => {

    cy.get('input[name="title"]').type('Twitter').should('have.value', 'Twitter')
    cy.get('input[name="urlToShorten"]').type('Twitter.com/?DSFGsdfsd').should('have.value', 'Twitter.com/?DSFGsdfsd')
    cy.get('button').click()

    cy.get('.url-container').last().contains('Twitter')
    cy.get('.url-container').last().contains('Twitter.com/?DSFGsdfsd')
    cy.get('.url-container').last().contains('4')
    cy.get('.url-container').last().contains('http://localhost:3001/useshorturl/4')

  })


})