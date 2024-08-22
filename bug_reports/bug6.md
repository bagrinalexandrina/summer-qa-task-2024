## Title: Label Changes Automatically on Task Edit

**Prerequisites:**
1. Have the application up and running
2. Have a task with a title, description, label set to "Home," and an importance level assigned.


**Observe:**
When the user clicks "Save" after modifying the task's name, the label, originally set to "Home," is automatically changed to "Hobby" upon saving, even though the label was not modified.

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

**Observed Behavior:**

The label, originally set to "Home," changes to "Hobby" after saving, despite no modification to the label field. This suggests that the label data may not be correctly preserved during the save process.

**Expected Behavior:**

The label should remain "Home" if the user has not changed it in the edit modal.

<video src="/bug_reports/bug_reports/edit-modal.mp4" width="560" height="310" controls></video>