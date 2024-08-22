## Title: Dropdown Menu for Label Unresponsive During Task Editing

**Prerequisites:**
1. Have the application up and running
2. Have a task with a title, description, label, and importance level assigned.


**Observe:**
When editing a task and attempting to modify its label, the dropdown menu is unresponsive. Users cannot select any options from this menu.

**Environment:**

- Version - First deployment
- Browser - Google Chrome Version 127.0.6533.120 
- OS - Windows 11 Enterprise

**Steps to reproduce:**

1. Navigate to the task.
2. Click the "Edit" button.
3. The edit modal appears.
4. Click on the label field to open the dropdown menu.
5. Attempt to select an option from the dropdown menu.
6. Note that no options can be selected.

**Observed Behavior:**

The dropdown menu for the label is unresponsive during task editing. Users are unable to select any options, preventing them from changing the task’s label. This issue disrupts the task editing functionality.

**Expected Behavior:**

Users should be able to select an label from the dropdown menu in the edit modal, allowing them to modify the task’s importance level as needed.

<video src="/bug_reports/edit-importance-label-bug.mp4" width="560" height="310" controls></video>