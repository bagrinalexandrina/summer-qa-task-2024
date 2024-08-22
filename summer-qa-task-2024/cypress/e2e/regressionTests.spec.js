/// <reference types="cypress" />

describe('Regression test suite', () =>{
    
    it('Importance changed after task edited', () => {
        cy.visit('/')

        // Add a task with title and description
        cy.get('[placeholder="Task Title"]').type("Clean my room")
        cy.get('[placeholder="Task Description"]').type("Really clean the room")
        cy.get('[type="submit"]').click()

        // Verify the task title, description, label, and importance   
        cy.get('[class="text-lg font-semibold"]').should('have.text', 'Clean my room')
        cy.get('[class="text-sm"]').contains('Really clean the room').should('exist')
        cy.get('[class="text-xs text-gray-500"]').contains('Medium').should('exist')
        cy.get('[class="text-xs text-gray-500"]').contains('Work').should('exist')

         // Click the edit button to open the edit modal
        cy.get('[class="py-1 px-2 text-xs bg-yellow-500 hover:bg-yellow-600 text-white rounded-md cursor-wait"]').click()

        // Change the task title
        cy.get('[placeholder="Title"]').clear().type("Organize my closet")

        // Save the changes
         cy.get('[class="py-1 px-2 bg-blue-500 text-white rounded-md"]').click()

        //  Verify the updated task details
        cy.get('[class="text-lg font-semibold"]').should('have.text', 'Organize my closet')

       // Here test is expected to fail because the "importance" value changes
        cy.get('[class="text-xs text-gray-500"]').contains('Medium').should('exist')
        cy.get('[class="text-xs text-gray-500"]').contains('Work').should('exist')

    })

    it('Description persistance', () => {
         cy.visit('/')

         // Add a task with title and description
        cy.get('[placeholder="Task Title"]').type("Water the plants")
        cy.get('[placeholder="Task Description"]').type("and give them a bath")
        cy.get('[type="submit"]').click()

        // Verify the task title and description 
        cy.get('[class="text-lg font-semibold"]').should('have.text', 'Water the plants')
        cy.get('[class="text-sm"]').contains('and give them a bath').should('exist')

         // Click the edit button to open the edit modal
         cy.get('[class="py-1 px-2 text-xs bg-yellow-500 hover:bg-yellow-600 text-white rounded-md cursor-wait"]').click()

         // Change the task title
         cy.get('[placeholder="Title"]').clear().type('Change of plans')

         // Save the changes
         cy.get('[class="py-1 px-2 bg-blue-500 text-white rounded-md"]').click()

        // Verify the updated task details
        cy.get('[class="text-lg font-semibold"]').should('have.text', 'Change of plans')

        // Here test is expected to fail because the description does not persist after editing
        cy.get('[class="text-sm"]').contains('and give them a bath').should('exist')
        
    })

    it('Task reapearence after refresh', () => {
        cy.visit('/')

        // Add a task with title and description
       cy.get('[placeholder="Task Title"]').type("Water the plants")
       cy.get('[placeholder="Task Description"]').type("and give them a bath")
       cy.get('[type="submit"]').click()

       // Verify the task title and description 
       cy.get('[class="text-lg font-semibold"]').should('have.text', 'Water the plants')
       cy.get('[class="text-sm"]').contains('and give them a bath').should('exist')

        // Click the delete button to delete the task 
        cy.get('[class="py-1 px-2 text-xs bg-red-500 hover:bg-red-600 text-white rounded-md"]').click()

        // Verify that the task is not present on the screen
        cy.get('[class="text-lg font-semibold"]').should('not.exist')

        cy.wait(1500)

        cy.reload()

        cy.wait(1500)

         // Here test is expected to fail because the task reappears, indicating a bug in data persistence

         // Verify that the task is still not present after the refresh
        cy.get('[class="text-lg font-semibold"]').should('not.exist')
        
    })


})