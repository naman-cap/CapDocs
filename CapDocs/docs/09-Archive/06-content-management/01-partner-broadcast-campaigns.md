---
title: Partner broadcast campaigns
excerpt: ''
deprecated: false
hidden: true
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
With Partner Broadcast Campaigns, you can issue only coupons or points without sending a communication. Further, there is a provision to export incentivesaudience and audience-related information along with incentive details to an FTP location.\
You can use this for orgs that want to use Capillary Engage+ to create audience lists and incentives (points or coupons) but use an external tool to send messages.

The following are the different types of partner broadcast campaigns.

* Incentives only campaign
* No communication message campaign 

## Incentives only campaign

You can assign offers and points to customers without sending any communication. For example, you can create an offer with a static coupon and assign it to an audience list. You can then send a communication to the selected audience using some external tool.

To create an incentives only campaign:

1. Create a Campaign and navigate to the **New Message** creation page.

![8d96cf2 yizT9HC29aJHn5D9hBwm7gSVjUD xhDHjw](https://files.readme.io/8d96cf2-yizT9HC29aJHn5D9hBwm7gSVjUD-xhDHjw.png)

2. In **Audience**, add your preferred audience lists to the campaign and navigate to the Content section. You can create an audience list in the following ways - [using filters](https://docs.capillarytech.com/docs/audience-management#using-audience-filters), [uploading CSV](https://docs.capillarytech.com/docs/audience-management#upload-csv-file), [combining existing lists](https://docs.capillarytech.com/docs/audience-management#combine-existing-lists). 
3. In **Content**, enable the **Incentives only** toggle button

![77a1436 EujxL96kjH56iJ 2sv BhNdNR5xSepgdhQ](https://files.readme.io/77a1436-EujxL96kjH56iJ_2sv_BhNdNR5xSepgdhQ.png)

4. Click on **Add incentives** and choose your desired incentive.

* Select **Add offers** to add coupon series and claim the desired offer. To create a new offer, see [Create offers](https://docs.capillarytech.com/docs/create-offers).
* Select **Add points** to add a points strategy and select the desired points allocation and points expiry strategies. To create a new points strategy, see [Points strategy](https://docs.capillarytech.com/docs/points-strategy). 

![2c37191 7PgcprvkK8BZr8 0dJlIcRcaymtNU1pykQ](https://files.readme.io/2c37191-7PgcprvkK8BZr8_0dJlIcRcaymtNU1pykQ.png)

> 📘 * You can add both points strategy and offer in the message content. To add another incentive type, click **ADD INCENTIVES** and select the other option. 

5. Click **Continue** to proceed.

## No communication message campaign

For FTP-enabled orgs, the *No Communication FTP Campaign* allows configuring only incentives (coupons/points) without any communications and exporting the data to an FTP server. The org can get the campaign details from the FTP server and can use the data to send communications using a third-party application.\
To create a No communication message campaign:

1. Create a Campaign and navigate to the *New Message* creation page

![3d705db yizT9HC29aJHn5D9hBwm7gSVjUD xhDHjw 2](https://files.readme.io/3d705db-yizT9HC29aJHn5D9hBwm7gSVjUD-xhDHjw_2.png)

2. In **Audience**, add your preferred audience lists to the campaign and navigate to the **Content** section. You can create an audience list in the following ways - [using filters](https://docs.capillarytech.com/docs/audience-management#using-audience-filters), [uploading CSV](https://docs.capillarytech.com/docs/audience-management#upload-csv-file), [combining existing lists](https://docs.capillarytech.com/docs/audience-management#combine-existing-lists). 
3. In **Content**, enable the **No communication message** toggle button

![786070c Ivq03rsditF8su8 qZ3sdyx5lN4iCRSUGA 1](https://files.readme.io/786070c-Ivq03rsditF8su8-qZ3sdyx5lN4iCRSUGA_1.png)

4. Click **Add FTP location** and select the FTP to which you want to export the campaign details.

![45a271c JlMZnoPF1hNBxfYl0daOr4JACU5kysrpug 1](https://files.readme.io/45a271c-JlMZnoPF1hNBxfYl0daOr4JACU5kysrpug_1.png)

5. Using **+ Add column**, add the columns that you want to export. By default, the Customer ID is selected. For example, offer name, offer expiry, customer name.
6. To export message content, define the message in the **Message** box. You need to have all the tags used in the message as CSV columns. So, ensure that you add the tags that you use in the message as columns.\
   The message will be exported as the last column.

![e5df840 C1iDrfavyAp4CcI28ouvcRoWajfOwlDziQ 1](https://files.readme.io/e5df840-C1iDrfavyAp4CcI28ouvcRoWajfOwlDziQ_1.png)

7. Click **Done** to continue.

![071ac04 3ZF7jcyISsc8ZSLV XP63vdQrTGP2XagTA](https://files.readme.io/071ac04-3ZF7jcyISsc8ZSLV-XP63vdQrTGP2XagTA.png)

8. Click **Add Incentives** to attach a point strategy/offer.

* Select **Add offers** to add coupon series and claim the desired offer. To create a new offer, see [Create offers](https://docs.capillarytech.com/docs/create-offers).
* Select **Add points** to add a points strategy and select the desired points allocation and points expiry strategies. To create a new points strategy, see [Points strategy](https://docs.capillarytech.com/docs/points-strategy).

9. Click **Continue** to proceed to schedule the campaign.

> 📘 * When the message is executed, the customer ID along with the selected labels are exported to the configured FTP location as a CSV file. The last column will have the message content replacing the tags used in the message with dynamic values of the respective customer.