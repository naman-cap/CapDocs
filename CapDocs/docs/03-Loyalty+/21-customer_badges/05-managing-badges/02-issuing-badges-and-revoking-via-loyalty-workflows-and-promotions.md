---
title: Issuing Badges and Revoking via Loyalty Workflows and Promotions
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
```mdx
# Issuing badges

You can issue badges from loyalty workflows and loyalty promotions. The implementation of badges in transactional and non-transactional activities can enhance customer behavior and contribute to increased engagement with the brand.\
Issue badge action has been added in the below events in loyalty workflows and loyalty promotions:

1. VoucherRedemption
2. TransactionAdd
3. ReturnBill
4. PointsRedemption
5. DelayedAccrual
6. CustomerUpdate
7. CustomerRegistration
8. Behavioral events
9. Target Period Elapses

Perform the following:

1. In the workflows, after writing the qualifying conditions, click **When**> **Add action** >  **Issue badge** and click **Save**.\
   All the Loyalty-owned live and activated badges are displayed.
2. You can hover over the info tooltip to view information related to the badges such as images, Issual Duration, Status, Benefits Linked, and Issual Expiry. Click **View badge for configuration** to view more details related to the badge.

![932d77c image23](https://files.readme.io/932d77c-image23.png)

4. If required, enable the **Setup communication** toggle switch and [set up the communication channels](https://docs.capillarytech.com/docs/actions#configure-communication-channels-2).

![7c497d0 Enable comm channel](https://files.readme.io/7c497d0-Enable_comm_channel.png)

5. In the communication channel creative, add the badge tags as required.

![73de350 Screenshot 2024 01 25 at 10](https://files.readme.io/73de350-Screenshot_2024-01-25_at_10.23.09_PM.png)

<br />

5. Click Claim. A confirmation dialogue box appears.
6. Click **Yes, claim** to confirm the claim. Once a badge is claimed by any module, it cannot be unclaimed, but other modules can still claim it.

![2d5d7d6 image37](https://files.readme.io/2d5d7d6-image37.png)

The badge is claimed and added to the workflows.

![921a350 image6](https://files.readme.io/921a350-image6.png)

7. Click **Save & Continue** to save the changes and publish the program.

![437d65c image25](https://files.readme.io/437d65c-image25.png)

<Note title="Note">
If the brand has enabled the below configuration from UI (EMFConfiguration page), then the badges will be revoked on returnBil and ReturnTargetCompletedEvent. Make sure that the program is reconfigured after enabling this option to make changes in return events.
</Note>

# Revoking badges

Badges are revoked on return and target completed events, the return event can be returnLineItem or returnAmount. In return bills, badges are revoked on the whole bill return and not on partial return.
```