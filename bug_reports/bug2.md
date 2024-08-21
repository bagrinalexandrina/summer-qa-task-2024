
## Title: Task Importance Sorting Incorrect in Descending Order

**Prerequisites:**
1. Have the application up and running.
2. Have at least one task with Low importance.
3. Have at least one task with Medium importance.
4. Have at least one task with High importance.


**Observe:**
Tasks are not sorted correctly by importance in descending order. The sort order is inconsistent and does not match the expected behavior.

**Environment:**

- Version - First deployment
- Browser - Google Chrome Version 127.0.6533.120 
- OS - Windows 11 Enterprise

**Steps to reproduce:**

1. Navigate to list of tasks
2. Ensure the label is set to "All."
3. Select "Sort by Importance (Descending)"

**Observed Behavior:**

After selecting descending importance, tasks with Medium importance appear first, followed by Low importance tasks, and then High importance tasks. The order is not descending.

**Expected Behavior:**

The order of tasks should be High -> Medium -> Low, as sorting is set to descending importance.

![](/bug_reports/screenshot-2.png)



