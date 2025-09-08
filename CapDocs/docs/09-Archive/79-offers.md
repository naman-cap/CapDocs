---
title: Offers
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

The Offer Management System (CMS) is a central repository that lets you manage global level coupons meaning create coupons in one place and use them wherever required - either by an internal service (such as campaigns and loyalty programs) or external service (third party integration). An offer once consumed by a service is not available for any other service. This tool only creates offers with coupon codes. You need to use the respective service for sending out the coupon codes to customers.

#### Following are the Key features of CMS:

* Design personalized coupons
* Set coupon expiry on a fixed date or as per the validity of the target campaign
* Associate coupon to a specific product or Organization unit (OU)
* Provision to generate coupon codes automatically or upload manually
* Associate coupons to a particular set of customers 
* Create percentage discount or flat discount coupons
* Limit the coupon issual count per customer/promotion
* Restrict coupon redemption by different parameters such as transaction amount, date, and time
* Automate coupon expiry reminders and expiry notifications
* Dashboard to track coupon details such as created by/on, expires on, consumed by (example: Loyalty, Outbound, Timeline), and count
* Track coupon performance (redemption) and improve marketing efforts 

![c91e085 offers](https://files.readme.io/c91e085-offers.png)

The summary table shows the name, type of offer, discount, expiry date, service that is using the series, number of coupons redeemed made from the offer, and more options.

You can search an offer by name, see only active offers, and sort the list by last modified date or created date.

## Create offer


To create a new offer (incentive), refer to the following.

![ad716a9 K99CoLCMewloL5cRtFjF3Iw2MmB3ugB1Sw](https://files.readme.io/ad716a9-K99CoLCMewloL5cRtFjF3Iw2MmB3ugB1Sw.png)

1. On the Dashboard, click the **Incentive** tab and then click **Create Offer**. Offer creation includes 3 major subsections of it.

* Offer name and expiry
* Discount details
* Coupon details

2. Click Offer name & expiry, and enter an offer name, and expiry date.
3. Click Discount detail, and enter discount value and validity.
4. Click Coupon details, and enter/select coupon details. 
5. Click **Preview and Save**, preview the offer details, and then click **Create offers**.

Note:

* You can also modify the offer advanced settings. To know more, click [Offer advanced settings](https://docs.capillarytech.com/docs/offer-advanced-settings).
* To know more about offer name & expiry, see [Offer name and expiry](https://docs.capillarytech.com/docs/create-offers#offer-name-and-expiry).
* To know more discount details, see [Discount details](https://docs.capillarytech.com/docs/create-offers#discount-details).
* To create a new coupon creation, see [Create Coupon](https://docs.capillarytech.com/docs/create-coupons) 

![5edf1aa Hf9guV2HcGpjJtSIr5 7RGGTNT2AibVxZg](https://files.readme.io/5edf1aa-Hf9guV2HcGpjJtSIr5-7RGGTNT2AibVxZg.png)

### Set offer name and expiry

1. Enter an offer name.
2. Select an offer expiry date.

* Along with campaign system: The offer expires, once the campaign ends.
* Fixed date. The offer expires on the mentioned date.

3. Enter a point-of-sale identifier code.

![a08472c k8h6yQg7datvdKYcthlNVWqZVMm0TrlgyQ](https://files.readme.io/a08472c-k8h6yQg7datvdKYcthlNVWqZVMm0TrlgyQ.png)

4. In the custom metadata fields, enter the values for your coupon. 

![f30c608 Screenshot 2024 06 10 125151](https://files.readme.io/f30c608-Screenshot_2024-06-10_125151.png)

<Note title="Note">

</Note>
<Note title="Note">
You can add additional custom field (metadata) in the [incentive settings](https://docs.capillarytech.com/docs/incentive-related-settings#auto-generated-coupon-settings).
</Note>

### Set discount details

1. Select a discount value option for each coupon.

* **Fixed amount**: Enter an amount in INR. This will allow the user to avail mentioned discount amount on any selected product.
* **Percentage based**: Enter a percentage. This will allow the user to avail mentioned discount percentage on any selected product.

2. Enable  **Max Discount** option to set a maximum limit on the discount amount.
3. In the **Valid On** field, you can choose the coupon's applicability select  **All Products** for the coupon to apply to every product, or select **Selected products** for the coupon to be applicable only to selected items select the relevant categories and brands.
4. Enable **Applicable on Sale Items** it allows you to use the coupons on items that are already on sale.  
   Note: If you enable the ‘Applicable on sale items’ option, the offer will be applicable on both (All products/ selected products and on sale products)
   1. **All products**: The coupon is applicable to all products.
   2. **Select products**: The coupon is applicable only to selected products. If you choose the "Select Products" option, you will need to specify the products by selecting from Category, Brand, Attributes, or by uploading SKU codes.

![359cd176a648a0a3237e63fa6fd3eddb5768f8f0b911d5939046b7695f8c1f03 image2](https://files.readme.io/359cd176a648a0a3237e63fa6fd3eddb5768f8f0b911d5939046b7695f8c1f03-image2.gif)

5. Applicable on sale items: If this option is enabled the coupon will be applicable on items that are on sale. Use the toggle button to enable this option.  
   **Note**: If you enable the ‘Applicable on sale items’ option, the offer will be applicable on both (All products/ selected products and on sale products).

![4dbcf4e 5N39oxUQnxEobmRQF0UMQ wSVNW1rxiDNQ](https://files.readme.io/4dbcf4e-5N39oxUQnxEobmRQF0UMQ_wSVNW1rxiDNQ.png)

### Offer Advanced settings


Navigate to **Dashboard** > **Incentive** > **Create offer** > **Modify advanced settings**.

![](https://files.readme.io/1852276-AdvancedSettings1.png "AdvancedSettings1.png")

#### Issual & Reminder Settings

* **Restrict based on past issuals**: Enable this option to restrict customers to receive the selected coupons. Search or browse coupons and select. The selected coupons will not be sent to the customers who have received these coupons in the past 6 months.
* **Max issuals per customer**: Set the maximum number of coupons to be issued to each customer. You can also select the minimum gap (number of days) between two consecutive coupon issues.
* **Limit total issual from the offer**: Enable this option to restrict the maximum coupon to be issued in an offer.
* **SMS content for resending the coupon**: Enable this option to allow resending the coupons if a customer missed them. Example: If a customer missed a coupon and request an executive to resend it. The executive can resend the coupon if this option is enabled.
* **Send expiry reminders** : Enable this option to send a coupon expiry reminder to customers through SMS/Email. You can create multiple reminders with different timing, message channel, and content for each reminder. 

![](https://files.readme.io/9af419c-AdvancedSettings2.png "AdvancedSettings2.png")

### Redemption settings

* **Allow anyone to redeem it**: Enable this option to allow redemption of a coupon by a non-recipient.
* **Redemption can start**: Set the redemption start time. The coupon can be redeemed can be set in three ways.

1. right after issual: The coupon redemption can start just after receiving.
2. days after issual:  Enter number of days. The coupon redemption can start after the specified number of days.
3. from a specific date: Set a specific date. The coupon redemption can start from that day.

* **Redemption limit**
* **Allow a coupon to be redeemed more than once**: Enable this option to allow a customer to redeem the coupon more than once. After enabling this option, *Limit the maximum times a customer can redeem a coupon option* that appears in a disable mode. 

![5f82f0d RedemptionSettings](https://files.readme.io/5f82f0d-RedemptionSettings.png)

* **Limit the maximum times a customer can redeem a coupon**: Enable this option to set the maximum number of times the coupon can be redeemed by a customer. You will see the *Limit* option. 

* In **Limit to**, set the maximum number of times the coupon can be redeemed by a customer. 

* **Stores allowing redemption**: By default, an offer can be redeemed at any store. You can also set an offer to be redeemed at only particular stores. Using this option you can select the stores or upload a list of stores.

* **Bill Amount that can redeem the coupon**: You can restrict the minimum and maximum bill amount criteria for offer eligibility. The coupon can be redeemed only if your bill amount is under the limitation.

* **Days & time when the coupon can be redeemed**: You can choose to set the coupon to be redeemed on a particular day, date, and time slot.

* **Require gap between the redemption of a customer**: Enable this option to set a minimum gap (number of days) between two consecutive redemptions. This option is not applicable if the coupon is restricted to redeemed only once.

* **Limit total redemption in the offer**: Enable this option to limit the maximum number of coupon redemption in an offer. You can set the maximum allowed coupon redemption number. 

![2a324b1 LimitTotalRedemption](https://files.readme.io/2a324b1-LimitTotalRedemption.png)

## Create Coupon


Coupons can only be created under an offer. To create a coupon, click the **Incentive tab**, and then click **Create Offer**. Refer to the Create offer flow. 

To create an offer, refer to the following. 

![9a27e97 coupon2](https://files.readme.io/9a27e97-coupon2.png)

1. Click **Coupon details** under Create an offer.
2. Select a coupon delivery method. **How would you issue these coupons to customers?**

* **Through Capillary**: The coupon is sent to the customers from Capillary.
* **Through a third party**: The coupon is sent to the customers from a third party. 

3. Select a coupon generation method. **How to create the coupon codes**?

* **Automatically create unique codes**: A unique offer code will be auto-generated based on the configuration. Click Edit to change the configuration (number of digits and/ or the alphanumeric characters). You can also select the unique audience for the added coupon code. Use the toggle button to enable the Issue to specific customers only button. Click View/ Add, to view or upload the specific customers' list. Select a CSV file, and then click Proceed to upload.
* **Give a common code to all coupons**: Enter a code, which is common, for all the audience. You can also select the unique audience for the added coupon code. Use the toggle button to enable the Issue to specific customers only button. Click View/ Add, to view or upload the specific customers' list. Select a CSV file, and then click Proceed to upload.
* **Upload existing coupon codes**: Upload the existing coupon codes. To upload the coupon code, click View/ Add, select an upload option, browse a CSV file, and then click Proceed to upload . You can use this option to upload existing coupon codes, tag them to a customer and view them on Member Care. This is useful when migrating customers who already have coupon codes from a third party.  
  Note: You can upload only coupons or coupons with customer details.

4. Select a coupon expiry date. **When would a coupon expire?**

* **Along with the offer**: The coupon will expire, once the campaign ends. Note: If the offer is used in Loyalty and you select this option then coupons will not expire.
* **Day from the issual**: The coupon will expire, after the entered number of days from the issue or the campaign end date which is earlier.
* **The month ends from the issual**: The coupon will expire, after the entered number of months ends from the issue either the campaign end date which one is earlier.

## Revoke coupons


For a coupon series or offer, you have the following options for expiring coupons.

* All coupons that are not redeemed - from both issued and unissued.
* Only unissued coupons.
* All active coupons of a customer(s) 

<Note title="Note">


* You cannot revoke redeemed coupons.
  * If a customer has multiple active coupons from the same series, then all active coupons are revoked.
</Note>

To expire active coupons, follow these steps. 

1. On the Engage+ home page, click **Incentives**.
2. Navigate to the incentive that you want to revoke, hover the pointer over the more options (…) symbol.

![2cdd061 RevokeCoupons1](https://files.readme.io/2cdd061-RevokeCoupons1.png)

3. Click **Revoke Coupons**.
4. Select your desired revoking option.

* **All unredeemed coupons (Issued and unissued)**: To expire all coupons that are either not redeemed or issued.
* **Only unissued coupons**: To expire only coupons that are not issued.
* **For specific customers**: To expire all active coupons of particular customers. Create a CSV file with identifiers of customers whose coupons you want to expire, and upload the file using **Upload customer**. 

![a029d99 Revoke UploadCustomer](https://files.readme.io/a029d99-Revoke_UploadCustomer.png)

5. Check **I understand that revoking coupons will make them unredeemable**. Expired coupons cannot be redeemed or reversed.
6. Click **Revoke**.

![10c72fb RevokeCoupons](https://files.readme.io/10c72fb-RevokeCoupons.png)

<Note title="Note">


* A message is shown that the customer data is successfully uploaded. All the coupons issued to the selected customer are revoked and ready for use.
</Note>

## Send offer expiry reminders


You can schedule a reminder email on offer expirations to Capillary or Org POCs. The emails are sent at 10 am on the day you choose. 

#### To send an offer expiry reminder, follow these steps -

1. Enable **Send offer expiry reminder**.
2. Click in the **Send reminder** box, you will see the list of POCs configured. Choose each POC that you want to notify.
3. In **\_\_day/s prior to the offer expiry** , enter the number of days before which an offer expiry reminder has to be sent. 

<Note title="Note">


* If you enter 4, the remainder will be sent at 10:00 AM to the respective email IDs 4 days before the offer expires.
</Note>

![8131e9a OfferExpiryReminder](https://files.readme.io/8131e9a-OfferExpiryReminder.png)

## Consume offers in campaigns/loyalty


You can use the offers created in Offer Management in other services such as Campaigns, Loyalty, or any third-party service. This article explains how to consume the available offers in Loyalty and Campaigns.

<Note title="Note">


The offer once consumed by a service is not available to use for any other service.
</Note>

### Use offers in DVS (Bounce back) campaign


You can claim multiple offers in a DVS campaign and use whatever is required based on the context. Offers that are claimed for a campaign are associated only with that campaign and are not available even for other outbound campaigns.

In Actions configuration, when defining rules and actions you will see **Add New Coupon Series** and **Claim New Coupon Series** as shown below - 

![4cf5cf6 offerinDVS](https://files.readme.io/4cf5cf6-offerinDVS.jpg)

To create a new offer within the Campaign module, click **Create Offer** and follow the steps specified in [Create Offer](https://docs.capillarytech.com/docs/create-offer). These offers will be visible within the Campaign module.       

To use existing offers, click **Claim Offer**. Select offers that you want to use for DVS Campaigns and click **Claim** 

![a5f56c6 Claimoffers1](https://files.readme.io/a5f56c6-Claimoffers1.jpg)

You can see all the offers claimed for DVS in the drop-down as shown below.

![a43ee4e Claimoffers2](https://files.readme.io/a43ee4e-Claimoffers2.jpg)

Choose the desired offer for each condition and click **Submit**.

### Use offers in Outbound Campaign


You can claim only a single offer in an outbound campaign. An offer that is claimed by an outbound campaign is associated only with that campaign and not available even for other outbound campaigns.

In Incentives, you will see **Create Offer** and **Claim Offer**. 

![718f643 Claimoffers3](https://files.readme.io/718f643-Claimoffers3.jpg)

**To create a new offer within a campaign module** - 

* Click **Create Offer** and follow the steps specified in [Create Offer](doc:create-offer). These offers will be visible within the Campaign module. 

To use existing offers, click **Claim Offer**. Select the offer that you want to use and click **Claim**.

![f1b7c04 Claimoffers4](https://files.readme.io/f1b7c04-Claimoffers4.jpg)

### Use offers in Timeline Campaign


You can claim multiple offers and use whatever is required based on the context. Offers that are claimed for a campaign are associated only with that campaign and are not available even for other outbound campaigns.

In Incentives, you will see **Create Offer** and **Claim Offer**. 

### Use offers in Loyalty Program


You can claim multiple offers in a Loyalty Program and use whatever is required based on the context. Offers that are claimed for a Loyalty Program are associated only with that loyalty program and are not available to any other services. 

In Incentives, you will see **Create Offer** and **Claim Offer**.

![6e1d95b Claimoffers5](https://files.readme.io/6e1d95b-Claimoffers5.jpg)

To create a new offer within the Loyalty Program, click **Create Offer** and follow the steps specified in [Create Offer](doc:create-offer). These offers will be visible only within the Loyalty module.       

To use existing offers, click **Claim Offer**. Select the offer that you want to use and click **Claim**.

![3ad71bb Claimoffers6](https://files.readme.io/3ad71bb-Claimoffers6.jpg)

You should be able to see your claimed offers in the Offers Summary. You can choose the preferred offer rule when configuring rule sets.

## View offer details


You can view offer details whenever required on the Incentives page. You will now see which module has claimed the offer along with the respective campaign or program.

To see offer information:

On Engage+, navigate to the **Incentive** tab.

![2a2b77d ViewOffer1](https://files.readme.io/2a2b77d-ViewOffer1.png)

From the list of offers, click on the preferred offer to view.

You will see the offer configuration details by default.

![b68eb04 ViewOffer2](https://files.readme.io/b68eb04-ViewOffer2.png)

Navigate to the **Information** tab to see more details.

You will see more details including created date, modified date, last issued date, last redeemed information, redemption rate, claimed details, offer ID, and offer code.

* If the offer is claimed by an outbound campaign, then you will see the name of the campaign that claimed the offer. 

![3b633fd ViewOffer3](https://files.readme.io/3b633fd-ViewOffer3.png)

* If the offer is claimed by Loyalty, you will see the name of the program that claimed the offer. 

![3661f3b ViewOffer4](https://files.readme.io/3661f3b-ViewOffer4.png)

## Edit offer details


You can edit offers to change any settings such as name, offer, allocation, redemption, and reminder settings. You will also see an additional field, Offer Code (Series Code).  \**Offer Code is generated by default and you can modify it if required.* 

#### Limitations:


You cannot modify the Offer expiry type, way of coupon code creation, and offer id.

To modify existing offers, follow the steps.

1. Navigate to the **Incentive**.
2. In the **Offers** dashboard, **click** on the preferred offer you want to modify or hover on more option (…) symbol, and click **Edit**.

![dcbe79f EditOffer1](https://files.readme.io/dcbe79f-EditOffer1.png)

3. In the **Configuration** tab, see the summary of the offer configurations. In the **Information** tab, see the Offer id and Offer code that is generated automatically.

![f87a6bc EditOffer2](https://files.readme.io/f87a6bc-EditOffer2.png)

4. Click **Edit Offer** and modify the required settings. For descriptions of all the fields, see [create offer](https://docs.capillarytech.com/docs/create-offer)

You can modify the **name**, **offer code**; **issual**, **expiry**, and **reminder** configurations. However, you cannot modify the **offer expiry type**, **coupon code creation** option, and **offer id**.

![608e96a EditOffer3](https://files.readme.io/608e96a-EditOffer3.png)

5. Click **Preview and update** to preview the coupon series configuration.
6. Click **Update**.

## API to fetch all coupons


**Background**

With evolving omni channel use cases, brands want to show all available coupons/running offers for an organization and filter them on concept, zone, store or till.

Enterprise brands with multiple programs or geos will now be able to show offers for which redemption is restricted only to the set scope i.e till, store, zone or concept

**Fetch all coupon series for an organization**

Help brands to show the offers to the guest user based on their region to nudge them to sign in and make the purchase

**Enhancement:**

Coupon series tagged to a till(s), store(s), zone(s) & concept(s) can now be fetched

* Till -> fetches the series for the till IDs
* Store -> fetches for that individual store
* Zone -> fetch the series mapped to zone
* Concept -> fetch for the series mapped to concept

**API details to getAllCouponConfigurations**

<Table align={["left","left"]}>
  <thead>
    <tr>
      <th>

      </th>

      <th>

      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Request type
      </td>

      <td>
        GET
      </td>
    </tr>

    <tr>
      <td>
        Request URI
      </td>

      <td>{`
        [https://\{host}/v2/coupon/series?orgEntityType=](https://\{host}/v2/coupon/series?orgEntityType=)<orgEntityType>\&orgEntityIds=<orgEntityId1>\&orgEntityIds=<orgEntityId2>
      `}</td>
    </tr>

    <tr>
      <td>
        orgEntityType
      </td>

      <td>
        Single select with below options  

        1. Till
        2. Zone
        3. Concept
        4. Stores
      </td>
    </tr>
  </tbody>
</Table>

**Note:**

* If a zone is passed, the API will only return offers that were directly tagged to that zone. It will not return offers tagged to the underlying stores.
  * For instance, if a brand has stores A, B, and C in zone 1, passing zone1 in the getCoupons call will only return offers tagged with "zone 1" and not for the specific stores A, B, and C.
  * To retrieve offers for those stores, the corresponding store IDs must be passed through the API.
* orgEntityIds given will not be validated i.e if id given which is not a proper store/zone/concept id then no error will be thrown instead no result will be given for that ID.
* filter can be done only for one type orgEntityType in a single request.

**Now brands can directly add store & zone level redemption restrictions**

Help brands to select & upload store names while creating a coupon series to restrict the coupon redemption to those stores

Previously, from UI you could only add the below scopes:

* Select Tills
* Upload tills
* Select concept

However brands generally run scope restrictions based on store name.

**Enhancement:**

Redemption restriction against a coupon series based on store names via selection or upload can be added.

![e59e43a Screenshot 2023 04 10 at 7](https://files.readme.io/e59e43a-Screenshot_2023-04-10_at_7.31.35_PM.png)

![](https://files.readme.io/44edc28-Screenshot_2023-04-10_at_7.31.55_PM.png)

**The document attached has details on API based implementation**

**To get started,**

To add store ids for coupon series via Thrift,

Structure :

```
SaveCouponConfigRequest:  
          CouponConfiguration:  
                      redemptionOrgEntityDetails:  
                                <orgEntityId
                                redemptionOrgEntityType>,  
                                <orgEntityId
                                redemptionOrgEntityType>,
```

* redemptionOrgEntityDetails  is a list of redemptionOrgEntityType and orgEntityId
* Add redemptionOrgEntityType as STORE,ZONE or CONCEPT
* Add orgEntityId as  store or zone or concept id
* This is to be added in thrift SaveCouponConfigRequest to make a thrift call for saveCouponConfiguration

To filter store ids for coupon series via Thrift.

* Add orgEntityType as STORE,ZONE or CONCEPT
* Add orgEntityIds as with list of store or zone or concept ids
* This is to be added in thrift GetAllCouponConfigsRequest to make a thrift call for getAllCouponConfigurations

For Tech detailing, refer to this `[doc]`(https://capillarytech.atlassian.net/wiki/spaces/LOYAL/pages/3625222521/API+to+fetch+all+coupons)

## Personalization of coupon at scale


**Personalization of coupon at scale (audience of 20M+)**

This is a limited release and enabled as an add-on. Not part of any standard package. Please reach out to your CSM to enable this feature. 

**Current challenge**

Some brands are against using generic coupon codes for their mass campaigns due to fraud or unintended redemptions like the cashier’s tend to remember the generic code and apply that code in all the transactions which will result in -

* The user who might have been issued the coupon code but has forgotten about it or does not want to take the effort of finding the coupon code and asking the cashier to apply will also get the discount, therefore a loss to the company.
* Unique coupon codes help to reduce the redemption of the coupon by 1-3%. The normal audience group for the unique coupon code is 1.3 Cr-1.6 Cr with avg duration of 3-5 days. The redemption % of bonus points & coupon-based campaigns is 12%-18%. Hence brand ends up having unnecessary liability 

With unique codes our system has the capability to generate the required number of 20-40 million codes however the generation process takes a couple of hours.

The challenge here is that the brand has daily product focussed offers for its loyalty base of 20-40 million customers. These offers are only valid for the day. The brand intends to send the offer early in the morning around 9AM. However since the generation process takes time, the offers reach customers by noon. This results in customers missing out on the benefits and eventually reflects bad on the brand.

**Current numbers**

* Time to issue 3M coupons via campaigns flow : 3 hours

Let's say a brand wants to create unique coupons for 2-3 Cr audience. To achieve this in a short period of time and communicate it to the customers, we can use randomization of generic codes here.

For example, the brand wants to create a coupon series with alphanumeric characters and a length of 9. To achieve this, follow these steps:

1. Head to the Engage + module and click on Incentives.
2. Click on create offer  
   ![](https://files.readme.io/d2dc782-image8.png)
3. Enter the basic details of the coupon series like offer name, offer expiry, discount value for each coupon(fixed/percentage), products applicable etc
4. While selecting how to generate coupon codes for the series, choose the options as shown below:

*Through capillary >> Generate common codes(s) >> Generate randomized common code(s)*

![ea4469f image4](https://files.readme.io/ea4469f-image4.png)

5. Enter the sample common code, it could be numeric or alphanumeric.

![b763dd3 image2](https://files.readme.io/b763dd3-image2.png)

* Here, in this case TEST12345 is just a sample code to generate the randomized codes from this reference.
* The system will take the length of the sample code provided and if it is numeric or alphanumeric and then generate the random codes based on this input.
* The resulting codes will be of the same length and will have 50% of the code as fixed for all the codes, i.e. in this case, let’s say TEST will be fixed and the remaining 5 digits will be randomly generated.
* The fixed part will be unique in the backend for an org 

6. Min 5 characters should be there in the sample code and Max. 10 characters are supported.

   ![](https://files.readme.io/82e68dd-image5.png)

   ![](https://files.readme.io/1ddbbd8-image7.png)
7. Once the offer is created, the sample code provided at the time of creation can’t be changed and in the UI, in edit flow, it won’t be the same code which was provided at the time of offer creation.  
   ![](https://files.readme.io/8addad6-image3.png)

**Please note**

* That this option is only available when offers are created from the incentives section but can be claimed in any module
* This type of series can only be created via UI and not via coupons APIs.
* The feature of uploading customers won’t be available for this type of coupon series.
* This option is not available for offers created via campaigns flow or loyalty flow:

  ![](https://files.readme.io/1d8965f-image6.png)

  ![](https://files.readme.io/3c544e3-image1.png)

**Performance after this**

* Time to issue 30M coupons via campaigns flow : 3 hours
* With this feature, we can issue max 60 million unique coupons when 10 digits alphanumeric characters are used to create a coupon series

<Note title="Note">


The system allows for coupons to have multiple currencies and it is important to note that the coupon value will be converted to the store default currency at the time of transaction.
</Note>

## FAQs

1. **Are there any ways to ingest coupon code automatically if coupon code is generated from POS?**

We offer integration via APIs if the series is already created. You can refer to the below documentation links

[https://capillary.github.io/api-documentation/#issue-coupon-to-customer-single](https://capillary.github.io/api-documentation/#issue-coupon-to-customer-single)  
[https://capillary.github.io/api-documentation/#issue-coupons-to-customer-bulk](https://capillary.github.io/api-documentation/#issue-coupons-to-customer-bulk)  
[https://capillary.github.io/api-documentation/#upload-coupons-batch](https://capillary.github.io/api-documentation/#upload-coupons-batch)