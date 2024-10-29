import home from '../selectors/questionnaire.css'

describe('Conditional Navigation and Validation Test', () => { 
    beforeEach(() => { 
        cy.fixture('testData.json').as('testData'); 
    }); 

    it('should navigate based on the sensitive data response', function () { 
        this.testData.forEach((data) => { 
            cy.visit(home.appUrl); 
            
            // Fill in the General Information screen 
            //cy.get('input[aria-label="AI Deployment Name"]').type(data.name); 
            //cy.get('input[aria-label="Organization Name"]').type(data.organization); 
            //cy.get('input[type="email"]').type(data.email); 
            //cy.contains('Next').click(); 

            // Navigate based on Sensitive Data response 
            //cy.contains('Does your AI system handle sensitive data?').click(); 
            //cy.contains(data.sensitiveData).click(); 
            //cy.contains('Next').click(); 

            //if (data.sensitiveData === 'Yes') { 
            //    cy.url().should('include', '/data-security-section'); 

                // Check Data Security screen URL or content 
            //    cy.contains('Describe the security measures').should('exist');
            //} else { 
            //    cy.url().should('include', '/compliance-measures-section'); 

                // Check Compliance Measures screen URL or content 
            //    cy.contains('Have you conducted a formal risk assessment').should('exist'); 
            //} 
        }); 
    }); 
});