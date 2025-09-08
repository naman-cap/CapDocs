---
title: Test Journey
excerpt: ''
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
The Test Journey feature within the journey framework enables users to simulate and validate journey workflows before deploying them to customers. It provides a real-time view of how a journey will behave, without having to wait for configured delays.

You can execute the journey for a set of [Test customers](https://docs.capillarytech.com/docs/configure-campaign-level-settings#/test-customers), triggering events to observe exactly how they progress through the journey. When testing, you can bypass any configured wait times for quicker results. Testing is limited to draft journeys, ensuring no impact on live workflows

**Key features & benefits**:

| Features                | Benefits                                                                       |
| :---------------------- | :----------------------------------------------------------------------------- |
| Real time validation    | Understand journey behavior before launch                                      |
| Skip wait time          | Speed up testing cycles by bypassing delays                                    |
| Persistent test mode    | Continue testing across sessions without needing to reset or re-enter the flow |
| Sale for live workflows | Testing is limited to draft journeys, ensuring no impact on live workflows     |
| Version testing support | Easily test updates or new journey versions with separate entry criteria       |

# Prerequisite

* Only journeys in draft state can be tested. Once a journey is live, the test mode becomes unavailable.
* If **Test customers** are removed from the group, either during setup or testing, they will not enter the journey.

## Testing journey

To test a journey, perform the following:

1. Navigate to the journey that you want to test.
2. Click **Test journey** and confirm by selecting **Yes, switch to test**.

   ![0731aff1c24fd0c349730c1fb13006f3feb4fd4d60402904cc057d01800f3f3e Untitled design 2](https://files.readme.io/0731aff1c24fd0c349730c1fb13006f3feb4fd4d60402904cc057d01800f3f3e-Untitled_design_2.gif)
3. Once the journey switched to **TEST Mode**, trigger events via API to satisfy the journey’s entry criteria.
   For example, simulate a transaction of $500.

<Note title="Note">
If the journey is complicated it may take some time to enter test mode, displaying a Processing to run test status until ready.
</Note>

![fdb8b88 Processing to run test](https://files.readme.io/fdb8b88-Processing_to_run_test.png)

![3d745de Test mode](https://files.readme.io/3d745de-Test_mode.png)

4. To track customer progress, enter the customer ID (mobile number with country code or user ID). A green line indicates a completed event; blue means an event is pending or processing.

![226af04 Skip wait and Search customer](https://files.readme.io/226af04-Skip_wait_and_Search_customer.gif)

5. If a customer reaches a wait block, use **Skip wait** to skip the configured wait time and proceed to the next block immediately.

![255a796 Skip wait ](https://files.readme.io/255a796-Skip_wait_.gif)

6. For event-based waits, you may simulate the trigger (for example, a transaction) to skip the waiting period and move the customer to the next block.
7. Once you've validated the desired paths, stop the test to revert the journey to draft. From there, proceed with your standard approval process to make it live.

   ![0f838f6 Stop test](https://files.readme.io/0f838f6-Stop_test.gif)

<Note title="Note">
s
* Test mode persists indefinitely, so you can pause and resume testing across sessions. Your journey remains in test mode until you stop it and you can always find it on the listing page of Journeys.
* If you create a new version of a Live journey by editing it, you can test it similarly, provided **Test customers** meet the new entry criteria. Avoid duplicating incentives. For example, reusing reward IDs results in errors.
* Journeys in draft can be tested repeatedly by adding relevant users to the **[Test customers](https://docs.capillarytech.com/docs/configure-campaign-level-settings#/test-customers)** group.
</Note>
