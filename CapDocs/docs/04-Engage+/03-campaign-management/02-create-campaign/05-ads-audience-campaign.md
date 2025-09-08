---
title: Ads Audience Campaign
deprecated: false
hidden: false
metadata:
  robots: index
---
The Ads Audience campaign helps you sync your customer audience group in Engage+ with advertising platforms like Meta, Google, and TikTok. This campaign type lets you automatically export and sync audience segments from Engage+ to your chosen advertising platform. The audience data is synced to the Ad platform using a third-party service provider.

<Note title="Note">
By default, the Ads Audience campaign is not enabled. Create a JIRA ticket for the Capillary Product Support Team to enable this feature.
</Note>

**Key Benefits**

* Automated workflow saves time and reduce errors by replacing manual list uploads with fully automated and scheduled audience syncs.
* Precision targeting ensures your audiences are always accurate and updated. This allows you to deliver relevant ads to the right customers at the right time, improving campaign effectiveness and return on investment (ROI).

![5d955ec4f9a369ec7e229f5ba73f88cc57c2f99494f1785a18539bd047be92cf Time Management 2 circle venn diagram 1](https://files.readme.io/5d955ec4f9a369ec7e229f5ba73f88cc57c2f99494f1785a18539bd047be92cf-Time_Management_2-circle_venn_diagram_1.gif)

# Creating an Ads audience campaign to sync the audience data with advertising platforms

To create an Ads audience campaign and sync the audience data with the advertising platforms, follow these steps:

1. From the **Engage** dashboard, click **create New Campaign**.
2. Enter **Campaign name** and set the **Campaign duration**.
3. Under Campaign Type, select **Ad Audience**.
4. Select **save campaign**.

![8b9f4d5457b1b443019ea17e664b69c8102e3236afb6e96aab6b9a8d2e8aba8e Connected Orgs 2](https://files.readme.io/8b9f4d5457b1b443019ea17e664b69c8102e3236afb6e96aab6b9a8d2e8aba8e-Connected_Orgs_2.gif)

5. Click **New Ads Campaign**.
6. On the Message creation page, the **Ads campaign name** is auto-filled. You can edit the name if needed. Click **Next**.
7. In the **Segment name** field, enter a name that meets the following requirements:
   * Must be at least three characters long.
   * Do not use capital letters, special characters, or numbers.
   <br />
   > If you want to retarget the same users in future campaigns, be sure to use the exact same segment name as in the previous campaign. For more information, refer to the <Anchor label="Segment name guidelines" target="_blank" href="https://docs.capillarytech.com/docs/ads-audience-campaign#/segment-name-guidelines-for-ad-sync">Segment name guidelines</Anchor>.
8. Select **Add audience group**, and then choose one of the following:
   * Select an existing audience list, or
   * Select\*\*<Anchor label="Create new audience group" target="_blank" href="https://docs.capillarytech.com/docs/create-audience-group#/">Create new audience group</Anchor>\*\* to define a new audience.
9. Set the **<Anchor label="Schedule" target="_blank" href="https://docs.capillarytech.com/docs/schedule-message#/">Schedule</Anchor>** for your campaign.

<Note title="Note">
Campaigns should approved before 7 PM for the third-party provider to receive the data. The data will be available in Meta by 1 AM the following day.
</Note>

10. Select **Send for approval** to submit the campaign for execution.

![c59de102f7266b903c502d82110eb7fd7b48d2ad175d3038a2eda1d43142473a Connected Orgs 3](https://files.readme.io/c59de102f7266b903c502d82110eb7fd7b48d2ad175d3038a2eda1d43142473a-Connected_Orgs_3.gif)

Once the message is approved, the Summary page displays a progress bar showing the\
number of messages sent, in progress, and pending.

![10cade2b8a0d0991f349270409e90a1411327516168e004db1ed0b7c2ffd0545 Screenshot 2025 07 28 at 6](https://files.readme.io/10cade2b8a0d0991f349270409e90a1411327516168e004db1ed0b7c2ffd0545-Screenshot_2025-07-28_at_6.10.42_PM.png)

## Segment Name Guidelines for Advertising Sync

When running multiple ad campaigns over time, how you manage the **Segment name** affects how audiences are synced with advertising platforms.

**a. Use a new segment name** when your goal is to target a new or updated audience list.

  **Why:** This creates a new audience group on the advertising platform, preventing overlap with users already targeted.

  **Example:**\
  On Day 1, you create a segment named `Inactive_Users_July_Week1` with Audience Group A.
  On Day 5, create a new segment like `Inactive_Users_July_Week2` with Audience Group B that exclude
users already targeted in the first campaign.

**b. Reuse the same segment name** when your goal is to **retarget** the same audience.

  **Why:** This avoids duplication of audience groups on the advertising platform or third-party service provider. Reusing the same name ensures the platform updates the existing audience group instead of creating a new one.

  **Example:**\
  On Day 1, you create a campaign with segment name `Abandoned_Cart_Users` using Audience Group A.
  On Day 5, to retarget the same users, create a new campaign with Audience Group A and reuse the same
segment name `Abandoned_Cart_Users`.

  If you use a different segment name with the same audience group, a **new audience group** will be created on the advertising platform, leading to duplication.