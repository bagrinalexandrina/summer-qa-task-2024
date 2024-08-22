## Title: Task Edits Do Not Persist After Page Refresh

**Prerequisites:**
1. Have the application up and running
2. Have a task with a title, description, label, and importance level assigned.


**Observe:**
When editing a task, the changes appear to be successfully applied on the user interface. However, after refreshing the webpage, the changes are lost and the task reverts to its previous state.

**Environment:**

- Version - First deployment
- Browser - Google Chrome Version 127.0.6533.120 
- OS - Windows 11 Enterprise

**Steps to reproduce:**

1. Navigate to the task. 
2. Click the "Edit" button.
3. The edit modal appears.
4. Change task name.
5. Click "Save" button.
6. Verify that the modifications are displayed on the screen.
7. Refresh the page.
8. Observe that the task returns to its previous state before the changes.


**Observed Behavior:**

The edits made to the task are not saved and revert to their previous state after a page refresh.

**Expected Behavior:**

The task should retain the new edited values even after refreshing the page.

<video src="/bug_reports/bug_reports/edit-delete-bug.mp4" width="560" height="310" controls></video>