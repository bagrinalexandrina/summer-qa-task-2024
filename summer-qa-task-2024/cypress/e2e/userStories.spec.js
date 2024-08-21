/// <reference types="cypress" />

describe('5 user stories', () =>{
    
    it('first user story', () => {
      //As a user, I want to be able to add a task.
        
        cy.visit('/')
        cy.get('[placeholder="Task Title"]').type('Task 1')
        cy.get('[placeholder="Task Description"]').type('do task 1')
        cy.get('select.p-2.border.rounded-md').eq(0).select('Low')
        cy.get('select.p-2.border.rounded-md').eq(1).select('Social')
        cy.get('[type="submit"]').click()

        // Verify the task title, description, label, and importance   
        cy.get('[class="text-lg font-semibold"]').should('have.text', 'Task 1')
        cy.get('[class="text-sm"]').contains('do task 1').should('exist')
        cy.get('[class="text-xs text-gray-500"]').contains('Low').should('exist')
        cy.get('[class="text-xs text-gray-500"]').contains('Social').should('exist')

    })

    it('second user story', () => {
        // As a user, I want to be able to delete a task.
  
        cy.visit('/')
        cy.get('[placeholder="Task Title"]').type('Task 1')
        cy.get('[placeholder="Task Description"]').type('do task 1')
        cy.get('select.p-2.border.rounded-md').eq(0).select('Low')
        cy.get('select.p-2.border.rounded-md').eq(1).select('Social')
        cy.get('[type="submit"]').click()

        // Verify the task title, description, label, and importance   
        cy.get('[class="text-lg font-semibold"]').should('have.text', 'Task 1')
        cy.get('[class="text-sm"]').contains('do task 1').should('exist')
        cy.get('[class="text-xs text-gray-500"]').contains('Low').should('exist')
        cy.get('[class="text-xs text-gray-500"]').contains('Social').should('exist')

        // Click delete button
        cy.get('[class="py-1 px-2 text-xs bg-red-500 hover:bg-red-600 text-white rounded-md"]').click()
        
        //Check for task
        cy.get('[class="text-lg font-semibold"]').should('not.exist')
  
      })

    it('third user story', () => {
        //As a user, I want to be able to edit a task.

        cy.visit('/')
        cy.get('[placeholder="Task Title"]').type('Task 1')
        cy.get('[placeholder="Task Description"]').type('do task 1')
        cy.get('select.p-2.border.rounded-md').eq(0).select('Low')
        cy.get('select.p-2.border.rounded-md').eq(1).select('Social')
        cy.get('[type="submit"]').click()

        // Verify the task title, description, label, and importance   
        cy.get('[class="text-lg font-semibold"]').should('have.text', 'Task 1')
        cy.get('[class="text-sm"]').contains('do task 1').should('exist')
        cy.get('[class="text-xs text-gray-500"]').contains('Low').should('exist')
        cy.get('[class="text-xs text-gray-500"]').contains('Social').should('exist')

        // Click the edit button to open the edit modal
        cy.get('[class="py-1 px-2 text-xs bg-yellow-500 hover:bg-yellow-600 text-white rounded-md cursor-wait"]').click()

        //  Change the task title and description
        cy.get('[placeholder="Title"]').clear().type('Task 2')
        cy.get('[placeholder="Description"]').clear().type('do task 2, really')

        // Save the changes
        cy.get('[class="py-1 px-2 bg-blue-500 text-white rounded-md"]').click()

        // check modification that were made
        cy.get('[class="text-lg font-semibold"]').should('have.text', 'Task 2')
        cy.get('[class="text-sm"]').contains('do task 2, really').should('exist')

    })

    it('Fourth user story', () => {
        //As a user, I want to be able to mark a task as complete / incomplete.

        cy.visit('/')
        cy.get('[placeholder="Task Title"]').type('Task 1')
        cy.get('[placeholder="Task Description"]').type('do task 1')
        cy.get('select.p-2.border.rounded-md').eq(0).select('Low')
        cy.get('select.p-2.border.rounded-md').eq(1).select('Social')
        cy.get('[type="submit"]').click()

        // Verify the task title, description, label, and importance   
        cy.get('[class="text-lg font-semibold"]').should('have.text', 'Task 1')
        cy.get('[class="text-sm"]').contains('do task 1').should('exist')
        cy.get('[class="text-xs text-gray-500"]').contains('Low').should('exist')
        cy.get('[class="text-xs text-gray-500"]').contains('Social').should('exist')

       // Verify the button initially shows "Complete"
        cy.get('[class="py-1 px-2 text-xs rounded-md text-white bg-green-500 hover:bg-green-600"]').should('have.text', 'Complete')

        // Click the "Complete" button
        cy.get('[class="py-1 px-2 text-xs rounded-md text-white bg-green-500 hover:bg-green-600"]').click()
    

        // Verify the button text has changed to "Uncomplete"
        cy.get('[class="py-1 px-2 text-xs rounded-md text-white bg-fuchsia-500"]').should('have.text', 'Uncomplete')

    })

    it.only('Fifth user story', () => {
        // As a user, I want to be able to filter tasks by label

        cy.visit('/')

    })

})