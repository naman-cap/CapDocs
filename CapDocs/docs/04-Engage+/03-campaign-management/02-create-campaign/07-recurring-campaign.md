---
title: Recurring Campaign
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
> 👍 Important
>
> Recurring Campaign can be created from the new UI only.

To create a recurring campaign, perform the following:

# Step 1. Create Audience filter

* Navigate to the **Audience** page and <Anchor label="create an audience group using the Import via FTP Connector" target="_blank" href="https://docs.capillarytech.com/docs/create-audience-group#/create-audience-group-using-import-via-ftp-connector-option">create an audience group using the Import via FTP Connector</Anchor> option.
* Save and share the name with the user who adds the file to the FTP. The file name should match the CSV file name in the FTP location.

# Step 2. Create Connect+ dataflow

* Navigate to Connect+ and create a Connect+ template using the [Audience Reload from FTP template](https://docs.capillarytech.com/docs/audience-reload-from-ftp).
* Engage updates the audience group within 15 minutes after the Connect+ dataflow runs.

# Step 3. Create campaign

* Navigate to Engage and create a Broadcast Campaign.
* Select the audience group created for this recurring campaign.
* In the **Schedule** option, select **Repeat Periodically**. Define the following:
  * Campaign repeat schedule
  * Duration of recurring campaign message
  * Time to send the message. Schedule the message for at least four hours after the Connect+ dataflow updates the audience group.
  > 📘 Note
  >
  > In cases where data sync is delayed or faces issues you can adjust the campaign start time accordingly. For example, if sync completes by 10:30 AM, scheduling the campaign at 10:30 AM instead of 10:00 AM will ensure accurate audience targeting. To enable this feature raise a JIRA ticket to the Product Support Team.

![e59a4539f849f48341482b375ecd2f093c8f92e321c904a7c0e22db6d4a33824 image](https://files.readme.io/e59a4539f849f48341482b375ecd2f093c8f92e321c904a7c0e22db6d4a33824-image.png)

For more information refer to [schedule message](https://docs.capillarytech.com/docs/schedule-message#repeats-periodically) documentation.

# Step 4. Monitor and troubleshoot

* **Data flow logs:** check processed count and errors.
* **Campaign dashboard:** verify send counts and engagement.
* For FTP issues, review the **error** folder.
* If you see “Waiting for file,” confirm the file name and path.

<Note title="Note">
If the audience list on a particular day is the same as the previous day, the campaign execution is automatically skipped for that day and will be notified via alert.

For example, if user IDs 1 to 100 are targeted on Day 1 and the same user IDs are included again on Day 2 (whether through**audience filters** or **FTP**uploads), the system will skip execution on Day 2 to avoid duplication.

On Day 3, if a new user base is detected, the campaign will run automatically. No manual action is required from the Customer Success Manager (CSM) or any user.
</Note>

### Best practices

* Always use matching names for filters, files, data flows, and campaigns.
* Build in a buffer (e.g., upload file 4 hours before campaign runtime).
* Test with a small CSV of known user IDs before full launch.
* Document all credentials and paths in a shared, secure location.

***

# Managing a recurring campaign

Managing a recurring campaign refers to tracking its performance and making updates when necessary. You can edit the campaign message, deactivate or activate it later provided the changes stay within the campaign’s defined duration.

## Editing a recurring campaign

To edit a recurring campaign follow the given steps below:

1. Navigate to the Campaigns listing page and select the desired campaign.

![0af9d0044bce7fe63ac441e845331eec4dc72be7d577764fae0cbc0ac1ef3366 Screenshot 2025 08 06 at 12](https://files.readme.io/0af9d0044bce7fe63ac441e845331eec4dc72be7d577764fae0cbc0ac1ef3366-Screenshot_2025-08-06_at_12.21.40_PM.png)

2. On the Messages listing page, select the campaign recurring message you want to edit.

![838e3c73679ea5eec9a140993ca32a3f9a810d7f92389f14b92adf7f571478b4 Screenshot 2025 08 06 at 12](https://files.readme.io/838e3c73679ea5eec9a140993ca32a3f9a810d7f92389f14b92adf7f571478b4-Screenshot_2025-08-06_at_12.23.05_PM.png)

3. On the Summary page, click **Edit**.

* You can update the message content.
* You can also change the delivery time frame, provided it is within the campaign's defined duration.

4. After making the changes, click **Send for Approval**.

![10926895cd04113e7caf271557f2d8e5511dea1e3143b3cc4e37986c51a70b11 Connected Orgs 4](https://files.readme.io/10926895cd04113e7caf271557f2d8e5511dea1e3143b3cc4e37986c51a70b11-Connected_Orgs_4.gif)

Once approved, the updated message will be sent to users as scheduled.

## Deactivating or activating a recurring campaign

To deactivate or activate a recurring campaign follow these steps.

### Deactivating a recurring campaign

To deactivate a recurring campaign follow the given steps below:

1. Navigate to the Campaigns listing page and select the desired campaign.
2. On the Messages listing page, select the campaign recurring message you want to deactivate.
3. On the Summary page, click **stop** .

![fdfff3b9ab7aa960942863210031d1d03a12a1862fb62cf081d45885251de5d8 Connected Orgs 5](https://files.readme.io/fdfff3b9ab7aa960942863210031d1d03a12a1862fb62cf081d45885251de5d8-Connected_Orgs_5.gif)

The message will be deactivated and will no longer be sent to users.

### Activating a recurring campaign

1. Navigate to the Campaigns listing page and select the desired campaign.
2. On the Messages listing page, select the campaign recurring message which is deactivated.
3. On the Summary page, click **edit**.
   * You can update the message content.
   * You can also change the delivery time frame, provided it is within the campaign's defined duration.
4. After making the changes, click **Send for Approval**.

The campaign message is activated. Once approved, it will be sent to users as per the updated schedule.

![bcf6047bd1c626560eb1d8559dc57d9c840b7de32bb3d6fde5fa09d822805ad5 Connected Orgs 6](https://files.readme.io/bcf6047bd1c626560eb1d8559dc57d9c840b7de32bb3d6fde5fa09d822805ad5-Connected_Orgs_6.gif)