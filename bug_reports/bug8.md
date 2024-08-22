## Title: Deleted Tasks Reappear After Page Refresh

**Prerequisites:**
1. Have the application up and running
2. Have a task with a title, description, label, and importance level assigned.


**Observe:**
When deleting a task, the task appears to be successfully removed from the user interface. However, after refreshing the webpage, the task reappears.

**Environment:**

- Version - First deployment
- Browser - Google Chrome Version 127.0.6533.120 
- OS - Windows 11 Enterprise

**Steps to reproduce:**

1. Navigate to the task.
2. Click the "Delete" button.
3. Verify that the task is no longer visible on the screen.
4. Refresh the page.
5. Observe that the task reappears in the list of tasks.

**Observed Behavior:**

The task, which was deleted, reappears on the screen after a page refresh, suggesting that the deletion is not being persisted.

**Expected Behavior:**

The task should remain deleted and not reappear after refreshing the page.

<video src="/bug_reports/bug_reports/edit-delete-bug.mp4" width="560" height="310" controls></video>