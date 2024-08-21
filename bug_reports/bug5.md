## Title: Importance Level Changes Automatically on Task Edit

**Prerequisites:**
1. Have the application up and running
2. Have a task with a title, description, label, and importance level set to "High".


**Observe:**
 When the user clicks "Save" after modifying the task's name, the importance level, originally set to "High," is automatically changed to "Low" upon saving, even though the importance level was not modified.

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

The importance level, originally set to "High," automatically changes to "Low" upon saving the task, despite no modification to the importance field. This indicates a potential issue with how the importance level is handled during the save process.

**Expected Behavior:**

The importance level should remain "High" if the user has not changed it in the edit modal.


<video src="/bug_reports/bug_reports/edit-modal.mp4" width="560" height="310" controls></video>