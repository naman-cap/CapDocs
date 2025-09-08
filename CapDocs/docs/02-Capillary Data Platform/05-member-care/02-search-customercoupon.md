---
title: Search customer/coupon
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
This page will guide you to search for various customers and coupons using different parameters.

## Search customers

The following are steps to fetch customer details.

1. Log on to InTouch and click Member Care tab.

2. On the left navigation bar, click Search > Customer

3. In the Customer Search box, type either the mobile number, email id, or external id of the customer to fetch details. You will see the auto-suggestion list as you type (after the 4th character).

<Note title="Note">
You cannot fetch customer details by user id.
</Note>

4. Click the desired customer from the list.

![](https://files.readme.io/9df10d4-ZvPirjhV7X6SHu7HT0iAYkemOcQhRyDofQ.png "ZvPirjhV7X6SHu7HT0iAYkemOcQhRyDofQ.png")

You will see the customer information available in each source as shown below. The identifiers and communication channels might differ for each source.

<Note title="Note">
If the customer account is merged into another, then you see a message (under the search box) "The customer you are trying to view is a Merge Victim, click here, to navigate to the Survivor Customer.
</Note>

5. Click on each source account tab to see the respective source information of the customer.

![4ec70a6 ZFmbTFxjASFoxKVsk j4lMxJBPRi3VOQrQ](https://files.readme.io/4ec70a6-ZFmbTFxjASFoxKVsk_j4lMxJBPRi3VOQrQ.png)

6. Click **Show more** to see registration information on that particular source.

### Other Information

#### Card Information

This section displays card details issued to the customer. You can use the Select Card Number drop-down box to see the details of other cards available for the customer.

![5ebf2d4 sBgxkEgmLOkpPr44vrXfL6rch3ztVqHm6Q](https://files.readme.io/5ebf2d4-sBgxkEgmLOkpPr44vrXfL6rch3ztVqHm6Q.png)

The following is the card information.

* **Issued on**: Card issued date and time.\
  **\*Issued by** : Unique ID of the card issuer.
* **Card series name**: Name of the card series.
* **Card series code**: Unique code of the card series.
* **Status**: Displays the current status of the card (NOT\_ISSUED, ACTIVE, SUSPENDED, DELETED, or EXPIRED).
* **Expiry on**: Expiry date of the card.\
   **Update card status**\
  To update card status, follow these steps.

1. In **Select Card Number**, choose the card number that requires update using drop-down options.
2. In **Status**, click the edit icon. 
3. Select the card status from drop-down options -  *NOT\_ISSUED, ACTIVE, SUSPENDED, DELETED, or EXPIRED*.
4. Click **Proceed**.

<Note title="Note">
The system does not allow updating EXPIRED  and DELETED card status.
</Note>

**View card status logs**\
Navigate to More Information > Audit Trails > Card Status. You can also download the card status log in CSV format.

![3a69ea8 64a6mDRBo03 QUNoiqzgAb34j ftSdFn w](https://files.readme.io/3a69ea8-64a6mDRBo03_QUNoiqzgAb34j_ftSdFn-w.png)

> 📘 Time zone representation
>
> The time zone for interaction events in **More Information > Interactions** aligns with the organisation's local time zone. Any interaction sent through the gateway or systems is displayed in this time zone.
>
> For example, if an organisation and its customer support team using Member Care is based in Singapore, the timestamps for customer interaction events will be in Singapore time, even if the organisation is part of the India cluster.

#### Loyalty Information

Scroll down to Loyalty Information to see Test & Control status of the customer, loyalty type (loyalty or non-loyalty), and preferred store along with other details mentioned below.

*Note*-

Change customer group (Test/Control)\
The Test and Control groups are used to analyze customer behavior for different campaigns. A customer of Test group will receive campaign messages, whereas a customer in Control group will not receive campaign messages even if targeted for a campaign. 

The following are the steps to update the current customer group.

* In the **Loyalty Information** section, click the **Edit** icon of the **Test and Control Status field** > In **To be changed** select the new group > Click **Proceed**.

![9578670 T9 e0DFg77McJ74xwkn lir3u ehtiFvfg](https://files.readme.io/9578670-T9_e0DFg77McJ74xwkn-lir3u_ehtiFvfg.png)

Update preferred store\
 In the **Loyalty Information** section, click the **Edit** icon of **Preferred Store** > In **To be changed** select the store > Click **Proceed**.

![bc14012  M6f2OihuU8O7ZyfZ7myDLDKU1F0qi7Ciw](https://files.readme.io/bc14012--M6f2OihuU8O7ZyfZ7myDLDKU1F0qi7Ciw.png)

To see the customer's loyalty information from a different loyalty program, click the Select Loyalty Program drop-down and select the program that you want to see. This is applicable only for MLP enabled orgs.

![](https://files.readme.io/d2975cc-zRiMWO4N-OQI-KcFHze9bUz3lCuN_VU6Vw.png "zRiMWO4N-OQI-KcFHze9bUz3lCuN_VU6Vw.png")

* **Lifetime purchases**: Total purchases made to date (from the loyalty registration date). This also includes Retro transactions (transactions that are tagged to the customer after registering).
* **Current points**: Active points of the customer that are not redeemed or expired.
* **Lifetime points**: Total points earned to date (from the loyalty registration date). This also includes points earned through Retro transactions.
* **Redeemed points**: Points that are redeemed by the customer.
* **Promised points**: In case of delayed accrual, points that will be initially issued to the customer are then converted as loyalty points. That is, points for a transaction are initially issued as promised points. If the customer does not return the transaction within the delayed accrual period, these will be converted as loyalty points. 
* **Expired points**: Points that are not redeemed and got expired as per the points expiry strategy.
* **Returned points**: Points that are reverted due to transaction returns.
* **Tier expiry date**: Date on which a particular expires.
* **Adjusted points**: Points that are added to the customer account or removed from the backend. The value will be positive for added points and negative for deducted points. For example, if 50 extra points are issued for a transaction for some issue, and then removed those 50 from the back-end, you will see Adjusted points as -50.

**Org Level Subscription Details**\
To see subscription details and NDNC status of the customer, scroll down to the **Org Level Subscription** field.\
You can also update SMS and email subscription statuses using the respective **Edit** icon. 

![](https://files.readme.io/9bf790b-sQo-sH44y09rFcJuprv_IJRP-gfPpP12Yg.png "sQo-sH44y09rFcJuprv_IJRP-gfPpP12Yg.png")

<Note title="Note">
Update subscription status\
To update the mobile or email subscription status of the customer, click the respective EDIT icon > Enable TRANS to subscribe to transactional or personalized messages; enable BULK to subscribe to campaign/promotion messages. >

Click PROCEED.
</Note>

#### Fraud Information

To see the fraud status of the customer, scroll down to the **Fraud Information** field. You can also update the current fraud status - Click the respective **Edit** icon > Choose the fraud status > Click **Proceed**.

![84e6692 eYHCAQm2KkGGYZhSNiWTyhQWExP298pgcA](https://files.readme.io/84e6692-eYHCAQm2KkGGYZhSNiWTyhQWExP298pgcA.png)

![5c9c287  pkBXE3SDvCRzVPntivf5C8NVQz5FetnRA](https://files.readme.io/5c9c287--pkBXE3SDvCRzVPntivf5C8NVQz5FetnRA.png)

The following are the different fraud statuses available.

* **Marked**: A customer who has shown fraudulent behavior, but yet to confirm by our team.
* **Confirmed**:  A customer who has been confirmed as a fraud (from the status "marked") by our team.
* **Reconfirmed**: A confirmed fraud customer who has shown fraudulent behavior again.
* **Not\_Fraud**: A customer who has shown fraudulent behavior, but later our team has confirmed as not fraud.
* **Internal**: Internal Capillary users that make transactions and other activities for testing purposes.

<Note title="Note">
**Update fraud status**\
To update the Fraud status of the customer, click the EDIT icon next to Fraud Status. > In TO BE CHANGED TO, choose the desired status and click PROCEED.
</Note>

## Search coupons

Coupon details consist of the following information:

* Basic details such as coupon code, series code, series id, created date, expiry date, and the status of the coupon.
* The customer who received the coupon.
* The campaign for which the coupon was created.
* The store that issued the coupon.
* If the coupon had been redeemed, then the information such as the redemption date, the store where the redemption was done, the discount issued for the coupon, and the customer who redeemed it.

To fetch details of a specific coupon, follow these steps.

1. Log on to **InTouch** and click **Member Care**.
2. Navigate to **Search** > **Coupon**.

![f530e6f h1C14R2 7syecrBdGTC2m0jAAbAaoChBbA](https://files.readme.io/f530e6f-h1C14R2_7syecrBdGTC2m0jAAbAaoChBbA.png)

3. In **Coupon Search**, enter the coupon code that you want to search and press **Enter**.

<Note title="Note">
* Autosuggestion does not work for coupon search. You need to type the complete coupon code.
</Note>

![1b7eb8d  p eWyzOdVjZsS5DhPHwpEFg0ioukvJTeA](https://files.readme.io/1b7eb8d--p_eWyzOdVjZsS5DhPHwpEFg0ioukvJTeA.png)
