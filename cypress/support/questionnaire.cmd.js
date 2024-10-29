Cypress.Commands.add('createQuestionnaire', () => {
    const apiUrl = Cypress.env('apiUrl')
    const link = 'https://github.com/gabeqa1207/hai-assessment'
    const authToken = JSON.parse(window.localStorage.getItem('loggedUser')).headers.Authorization
    const randomQuestionnaire = `AI Security Questionnaire ${Math.random().toString().slice(2, 11)}`

    cy.request({
        url: `${apiUrl}/questionnaire`,
        method: 'POST',
        headers: {
            authorization: authToken
        },
        body: {
            article: {
                title: randomQuestionnaire,
                description: link,
                body: `This article is created with Cypress. See code here: ${link}`,
                tagList: ['cypress', 'simple', 'test-automation']
            }
        }
    })
        .then((response) => {
            expect(response.status).to.eq(201)
            return {
                slug: response.body.article.slug,
                title: response.body.article.title
            }
        })
})
