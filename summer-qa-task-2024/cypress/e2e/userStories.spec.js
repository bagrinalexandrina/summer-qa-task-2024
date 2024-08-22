/// <reference types="cypress" />

describe('5 user stories', () =>{
    
    it('Create task', () => {
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

    it('Delete task', () => {
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

    it('Edit task', () => {
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

    it('Complete task', () => {
        //As a user, I want to be able to mark a task as complete.

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

        // Array of task 
        const tasks = [
            { title: 'Task 1', description: 'do task 1', importance: 'Low', label: 'Social' },
            { title: 'Task 2', description: 'do task 2', importance: 'High', label: 'Work' },
            { title: 'Task 3', description: 'do task 3', importance: 'Low', label: 'Home' },
            { title: 'Task 4', description: 'do task 4', importance: 'Medium', label: 'Social' },
            { title: 'Task 5', description: 'do task 5', importance: 'Low', label: 'Work' },
            { title: 'Task 6', description: 'do task 6', importance: 'Low', label: 'Home' },
        ]

        // Adding tasks
        tasks.forEach(task => {
            cy.get('[placeholder="Task Title"]').type(task.title)
            cy.get('[placeholder="Task Description"]').type(task.description)
            cy.get('select.p-2.border.rounded-md').eq(0).select(task.importance)
            cy.get('select.p-2.border.rounded-md').eq(1).select(task.label)
            cy.get('[type="submit"]').click()
        })

        // Filter tasks by label and check if only the correct tasks are displayed
        const filterAndCheckTasks = (label, expectedTasks) => {
            
            // Select the label
            cy.get('[class="p-2 border rounded-md"]').select(label) // Assuming the filter dropdown is the 3rd select

            // Verify that only tasks with the selected label are visible
            cy.get('[class="text-lg font-semibold"]').each((task, index) => {
                cy.wrap(task).should('have.text', expectedTasks[index].title)
            })
        }

        // Filter by "Social" and verify the task
        filterAndCheckTasks('Social', [{ title: 'Task 1'},{ title: 'Task 4' }])

        // Filter by "Work" and verify the task
        filterAndCheckTasks('Work', [{ title: 'Task 2'}, { title: 'Task 5' }])

        // Filter by "Home" and verify the task
        filterAndCheckTasks('Home', [{ title: 'Task 3'}, { title: 'Task 6' }])

    })

})