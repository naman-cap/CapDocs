---
title: Getting Started
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
# Create offers

To create a new offer with coupons, refer to the following :

1. Navigate to **Engage**, select the **Incentive tab**, and then click **Create Offer**.
2. Define the **Offer name & configure the expiry** details.
3. Configure the **Discount details.**
4. Configure the **Coupon details.**
5. Configure the **Issual & Reminder and the coupon Redemption settings.**
6. Select **Preview & Save**.

## Defining Offer Name & Configuring the Expiry details

To define a name for the offer and configure the expiry details, perform the following:

1. In the **Offer name** text box, enter a name for the offer.
2. In the **Offer Expires** field, define the offer's expiration date. You can either set it to expire **Along with campaign/system**to expire along with the service that consumes this offer. For example, if the service, say Outbound Campaign, expires on 31st Dec, the offer also expires on the same date and time or a **Fixed date** to expire the offer on a specific day. Click the calendar icon to set the expiry date. If 31st Dec is set as the fixed offer expiry date, irrespective of the expiry of the service consuming the offer, the offer expires on 31st Dec.
3. In the **Point-of-sale identifier**(POS) text box, define a code that the cashier will use on the point-of-sale(POS) machine.
4. You can enter the values for your coupon in the **custom metadata fields** like **Tracker ID, Offer type** etc...

<Note title="Note">
You can add additional custom field (metadata) in [Configuring the Offer Settings at the Organisation Level](https://docs.capillarytech.com/docs/create-offer-1#configuring-the-offer-settings-at-the-organisation-level)
</Note>

![3f61dec8f3e93f040f4fddb9cb2b0805b47357f603beebdc7a735086c5a258c2 Screenshot 2024 09 06 151221](https://files.readme.io/3f61dec8f3e93f040f4fddb9cb2b0805b47357f603beebdc7a735086c5a258c2-Screenshot_2024-09-06_151221.png)

## Configuring the Discount Details

To Define the discount value of each coupon and the products on which they can be redeemed follow these steps.

1. In the **Discount value**for each coupon, you can set the discount as either a **fixed amount** or a **percentage based.**
   1. **Fixed Amount** for flat amount discount Specifies the amount in the respective field ($20).
   2. **Percentage based** on % (of the transaction amount) discount and the percentage is specified in the respective fields (10%).
2. Enable the **"Max Discount"** option to set a maximum limit on the discount amount.
3. In the "**Valid On**" field, you can choose the coupon's applicability.
   1. select "**All Products**" for the coupon to apply to every product, or select **Selected Products** for the coupon to apply only to selected items.
      * Click on the **selected product.**
      * From the drop-down choose **Category** (to select products by category) or **Item Code** (to select products by item code).
      * By category: Select preferred categories from the drop-down -> Click **Select** -> Click **Add Product**to add more products.
   2. In **select products**, we can choose multiple Product Entities such as Brands, categories, and attributes and upload the SKU codes option.
   3. select the relevant categories.
4. Enable **"Applicable on Sale Items"** to allow the coupon to be used on items already on sale.\
   Note: If you enable the ‘**Applicable on sale items**’ option, the offer will be applicable on both (All products/ selected products and on sale products).

![8e48e5ea756627801ac4fd21398488a4dc7d8fc88eb15a93a400357e3f17fd14 Screenshot 2024 09 06 151824](https://files.readme.io/8e48e5ea756627801ac4fd21398488a4dc7d8fc88eb15a93a400357e3f17fd14-Screenshot_2024-09-06_151824.png)

<br />

# View Offers

You can view offer details whenever required on the Incentives page, refer to the following to view offers.

1. Navigate to **Engage**, and select the **Incentive tab.**
2. From the list of offers, click on the preferred offer to view.

![ee6ed29caaa4c16ca8e480588d1903b6962fcc11d8e385234d42d2d8fc152061 Screenshot 2024 09 06 113550](https://files.readme.io/ee6ed29caaa4c16ca8e480588d1903b6962fcc11d8e385234d42d2d8fc152061-Screenshot_2024-09-06_113550.png)

3. choose the **configuration** to view the **offer name & expiry, discount details** and **coupon details.**
4. Navigate to the **Information** tab to view the **created date, modified date, last issued date, last redeemed information, redemption rate, claimed details, offer ID,** and **offer code.**

![e3e4ee448aea169524929be85ec26cc27877d655baeac7f656c1b81b33ca8049 Screenshot 2024 09 30 141503](https://files.readme.io/e3e4ee448aea169524929be85ec26cc27877d655baeac7f656c1b81b33ca8049-Screenshot_2024-09-30_141503.png)

* If an **outbound campaign** claims the offer, then you will see the name of the campaign that claimed the offer in the **campaign using this offer.**

![44d78295e0c5b72e3a57ea42d9c59ebc2488cd3a62343d9ebc4d1ad40df2ced2 Screenshot 2024 10 02 221441](https://files.readme.io/44d78295e0c5b72e3a57ea42d9c59ebc2488cd3a62343d9ebc4d1ad40df2ced2-Screenshot_2024-10-02_221441.png)

* If the offer is **claimed by Loyalty,** you will see the name of the program that claimed the offer in the **program using this offer**.

![1a5899655bccc3775ee1265e0da2b7419b205f396660de0891b877a5b9637719 Screenshot 2024 10 02 221338](https://files.readme.io/1a5899655bccc3775ee1265e0da2b7419b205f396660de0891b877a5b9637719-Screenshot_2024-10-02_221338.png)

![7936a76500ff6444e7dadb409e79866fc4e278bf9c02905fc6b0e66201f50cad Screenshot 2024 10 02 221338](https://files.readme.io/7936a76500ff6444e7dadb409e79866fc4e278bf9c02905fc6b0e66201f50cad-Screenshot_2024-10-02_221338.png)

# Modify Offer Details

You can edit offers to modify settings like the **name, offer details, allocation, redemption, and reminder** options. Additionally, you'll find a field for the Offer Code (Series Code). The offer code is generated by default, but you can change it if needed.\
Refer to the following to modify the offer.

1. Navigate to **Engage** and select the **Incentive tab**.
2. In the **Offers** dashboard, click on the preferred offer you want to modify or click on the three dots.
3. Click **Edit**.

![50e0461d6fc21251b2ae033a2d768befb5caec5b80c47cca5e7fe522043484ed Screenshot 2024 10 09 105625](https://files.readme.io/50e0461d6fc21251b2ae033a2d768befb5caec5b80c47cca5e7fe522043484ed-Screenshot_2024-10-09_105625.png)

4. You can modify the **name, offer code, issual, expiry**, and **reminder configurations**. However, you cannot change the **offer expiry type, coupon code creation option, or offer ID.**
5. Click **Preview and update.**
6. Click **Update**.

![1c79e0e85cacb6da41f2a7b5dd197d9aa91a95a40c1aeb29150ec24a9418f028 Screenshot 2024 09 30 144655](https://files.readme.io/1c79e0e85cacb6da41f2a7b5dd197d9aa91a95a40c1aeb29150ec24a9418f028-Screenshot_2024-09-30_144655.png)

> 📘 You cannot modify the Offer expiry type, way of coupon code creation and offer id.

# Configuring the Offer Settings at the Organisation Level

You can configure the Offer settings at the Organisation level from the Incentives settings page. To navigate to the Incentive settings page follow these steps :

1. Navigate to  **Engage**, click the **Setting** icon and select **Incentives**.
2. configure the settings that need to be modified.
3. Select **save change.**

 To configure each Incentive setting like default resend message, sync offers with stores etc ...  follow these steps :

1. In **Default resend message** you can Configure the default message to be sent to customers when a coupon is reissued. You can also Preview the message to confirm whether the message is looking as desired and make necessary changes if required.

![11c9854c6093bffba797a63b887cd3b2db2180fb974d5d5bf5d901709385f27c Screenshot 2024 09 12 152643](https://files.readme.io/11c9854c6093bffba797a63b887cd3b2db2180fb974d5d5bf5d901709385f27c-Screenshot_2024-09-12_152643.png)

2. Enable **Sync offers to Capillary InStore client?** To sync offers or incentives that are created or added on Engage+, enable Sync offers to the Capillary InStore client toggle button.
3. For auto-generated coupon codes In **Settings for automatically generated coupons**you can set the **default code length**. In this, you can set the length of the coupon code Recommended length: 5-7 characters and set code type you can select your preferred character type in the coupon code. Select **Numeric Codes** to set the **coupon codes** only in numeric characters. For example, 12345678 or select  **Alphanumeric Codes** to set the coupon codes in alpha-numeric characters. For example, ABCD1234.
4. In the Settings for automatically generated coupons, you can configure the default code length and character type.

   * **Code Length**: Set the desired length for coupon codes. The recommended length is 5-7 characters.
   * **Code Type:** Choose the type of characters for your coupon codes.
   * **Numeric Codes**: Generates coupon codes using only numbers (e.g., 12345678).
   * **Alphanumeric Codes:** Generates codes with a combination of letters and numbers (e.g., ABCD1234).

   ![18d6cd2dd6d1e85f9aa6be1d9bfc7320a63096c555d0f4dc9cd36a6cd57e1950 Screenshot 2024 09 12 152849](https://files.readme.io/18d6cd2dd6d1e85f9aa6be1d9bfc7320a63096c555d0f4dc9cd36a6cd57e1950-Screenshot_2024-09-12_152849.png)
5. Enable the "**Send offer expiry reminder**" to schedule reminder emails for offer expirations to the POCs. These emails will be sent at 10 a.m. on the days leading up to the chosen offer expiry date.
   * Click “**Send reminder**” to view the list of configured POCs and select the ones you want to notify.
   * In the "**Days prior to offer expiry**" field, specify the number of days before the expiry date when the reminder should be sent.

![eb29db7bf3bd6db93175f34968b0fdcf28d6dad2d9ad370d4af6a1c922f5a5ed Screenshot 2024 09 12 153022](https://files.readme.io/eb29db7bf3bd6db93175f34968b0fdcf28d6dad2d9ad370d4af6a1c922f5a5ed-Screenshot_2024-09-12_153022.png)

6. Enable the "**Send coupon issuance exhaustion reminder"** to schedule a reminder email when coupon issuance is approaching exhaustion before the coupon limit is reached.

   1. Click “**Send reminder to**" view the list of configured POCs. Select each POC you want to notify.

   ![9c7dc635f8e04896f0931f0a4e09c37521861f19be2a7c78fcb40ba3a6f60f4b Screenshot 2024 09 12 153114](https://files.readme.io/9c7dc635f8e04896f0931f0a4e09c37521861f19be2a7c78fcb40ba3a6f60f4b-Screenshot_2024-09-12_153114.png)
7. In **Extended fields** Select the fields that you want to include with the incentive. You need to enable each field you want to include as a coupon-level extended field (metadata fields) in the Incentives section of Product Settings.\
   You can select the following fields:
   * **Description**: Include the offer description in the incentives.
   * **Terms and conditions:** Include terms and conditions of the offer in incentives. The maximum number of characters accepted in terms and conditions is 500 characters.
   * **Images**: Includes images in incentives, You can add images from the creative gallery or upload them from your local system. You can add up to three images.
8. In **Add custom metadata** you can add any custom metadata, click **+Add custom metadata**, enter the metadata name, and click **Save**. You can add up to five custom metadata and a maximum of 20 custom extended fields.

![2657cb0ea0515f764955be8ec7bd021d6ab613a650479e20166db9397b2bfde6 Screenshot 2024 09 12 153509](https://files.readme.io/2657cb0ea0515f764955be8ec7bd021d6ab613a650479e20166db9397b2bfde6-Screenshot_2024-09-12_153509.png)

9. In **Comma separated list of purpose for which you need to create coupons** you can include the  Possible purposes for coupon creation separated by a comma (displayed as a drop-down list in the coupon creation UI).
10. In **Delivery settings**, you can add **SMS Sender Details** to ensure that GSM and CDMA customers see the SMS coming from their respective sender IDs and Email Sender Details  to ensure the email address or domain from which customers will receive emails\
    To set up the delivery settings, follow these steps.

* In **SMS Sender Details,** you can add the **SMS Domain**, which is the backend address used by the SMS provider to manage messages (not visible to users). Additionally, set the **SMS GSM Sender ID**, which determines the phone number or name that appears on your phone for SMS from GSM networks, and the **SMS CDMA Sender ID,** which sets the phone number or name that appears for SMS from CDMA networks.

![5df8aababe0d47d1b59c501b3c63219008a717024cd8ce05375d2914f3ba8258 Screenshot 2024 09 12 154728](https://files.readme.io/5df8aababe0d47d1b59c501b3c63219008a717024cd8ce05375d2914f3ba8258-Screenshot_2024-09-12_154728.png)

* In **Email Sender Details,** you can configure the **Email Domain,**&#x77;hich shows the email provider, the **Sender ID,** which is the specific email address used to send the email, and the **Sender Name,** which is the name displayed alongside the email address.

![0276a8facbb8d19d999349358b8ca48dd231ac49ba9223104b2ec7a7d9dca93f Screenshot 2024 09 17 141323](https://files.readme.io/0276a8facbb8d19d999349358b8ca48dd231ac49ba9223104b2ec7a7d9dca93f-Screenshot_2024-09-17_141323.png)

* Click on **done**.
