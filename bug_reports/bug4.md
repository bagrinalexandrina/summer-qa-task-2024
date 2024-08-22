## Title: Description Field Not Populated

**Prerequisites:**
1. Have the application up and running
2. Have a task with title and description.


**Observe:**
 When the edit modal appears, the description field is empty even though the task had a description previously.

**Environment:**

- Version - First deployment
- Browser - Google Chrome Version 127.0.6533.120 
- OS - Windows 11 Enterprise

**Steps to reproduce:**

1. Navigate to a task with title and description. 
2. Click the "Edit" button.
3. The edit modal appears.

**Observed Behavior:**

When the edit modal appears, the description field is empty even though the task had a description previously. This suggests that the description is not being properly fetched or displayed in the edit modal.

**Expected Behavior:**

The description field should display the original task description when the edit modal opens.


<video src="/bug_reports/bug_reports/edit-modal.mp4" width="560" height="310" controls></video>