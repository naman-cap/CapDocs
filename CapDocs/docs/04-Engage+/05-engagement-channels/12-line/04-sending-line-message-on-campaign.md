---
title: Send LINE Message on Campaign
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
Once you have configured and integrated LINE with Capillary. You can manage and execute LINE campaigns.

<Note title="Note">
Sending campaign messages through LINE is currently supported on Engage+.
</Note>

The process for sending campaign messages involves the following steps:

*   [Creating an Audience Group](https://docs.capillarytech.com/docs/line-sending-campaign-messages#creating-an-audience-group)
*   [Checking the LINE Channel Subscription Status](https://docs.capillarytech.com/docs/line-sending-campaign-messages#checking-line-channel-subscription-status)
*   [Creating a LINE Message Template](https://docs.capillarytech.com/docs/line-sending-campaign-messages#creating-a-line-message-template)
*   [Creating a LINE Campaign](https://docs.capillarytech.com/docs/line-sending-campaign-messages#creating-a-line-campaign)

## Creating an audience group

To create an audience group for a LINE campaign, follow these steps:

1. [Create the audience group](https://docs.capillarytech.com/docs/audience-group-filters) for the campaign.

<Note title="Note">
New LINE users will appear in the Audience list with a 1-day delay due to the audience synchronization (ETL Sync) process.

You must wait for the synchronization to complete and the LINE reachability status to update before triggering the campaign.
</Note>

2. Click on the audience group to view the reachability status and confirm that it has synced.

![c629ec4 image14](https://files.readme.io/c629ec4-image14.png)

## Checking line channel subscription status

To check the LINE channel subscription status of a member, follow these steps:

1. Login to InTouch and click on [Member Care](https://docs.capillarytech.com/docs/member-care).
2. In the Customer Search box, type the customer's mobile, email, or external ID. The auto-suggestion list appears after the fourth character.
3. Click the desired customer from the list.
4. In the customer profile page, locate **Subscription Status** and navigate to the LINE tab.
5. Verify that the customer has **Promotional** and **Transactional** turned on.

![1521d1c image](https://files.readme.io/1521d1c-image.png)

## Creating a line message template

A LINE message template allows you to design and organize templates and use them for your campaigns. By having pre-made templates, you can quickly deploy consistent and effective campaigns on LINE.

For information on creating a LINE message template, refer to the [template creation documentation](https://docs.capillarytech.com/docs/create-line-template).

![aa80443 image2](https://files.readme.io/aa80443-image2.png)

## Creating a line campaign

To create a LINE campaign, follow these steps:

1. [Create a new campaign](https://docs.capillarytech.com/docs/create-a-campaign) or [edit an existing one](https://docs.capillarytech.com/docs/modify-a-campaign).

   ![b3da494 image6](https://files.readme.io/b3da494-image6.png)

   <br />
2. In the **Content** section of your campaign, click on **Add Creative** and choose Line from the options.
3. Choose the LINE Account to send the content.
4. [Create a new template](https://docs.capillarytech.com/docs/create-line-template) or choose from existing templates.

   ![d912468 image5](https://files.readme.io/d912468-image5.png)

   <br />
5. View the message preview on the right side.
6. Click on **Done** to save the changes.