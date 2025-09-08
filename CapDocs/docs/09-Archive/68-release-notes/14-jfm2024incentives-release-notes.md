---
title: JFM 2024 | Incentives Release Notes
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
# Coupons

## Coupon Redemption Just Got Better!

Now, you can update important details like txn number, txn amount, txn id and custom fields post coupon is redeemed. Yup, you read that right! 

This upgrade means more flexibility and accuracy when tracking coupon redemptions. Whether you're keeping tabs on reward fulfillment or giving customers real-time updates on their mobile apps, this enhancement has you covered! 📈

**Use Cases:**

1. **Track coupons fulfillment in rewards catalog:** Update custom fields to monitor the fulfillment status of coupons within the rewards catalog. This enables real-time tracking of coupon status and facilitates accurate reporting.
2. **Sync the coupon redemption and txn number:** Pass transaction numbers easily post the Redeem Coupon API and Transaction Add API, straight from your POS system. This integration keeps coupon redemption and transaction records in sync, giving customers the latest information for audit and reporting.

**Refer to the API documentation[here](https://docs.capillarytech.com/reference/update-coupon-redeem-field).**

# Badges

## Presenting Badges UI: Your Gateway to Effortless Badge Management!

The UI enables you to

1. Create a badge

2. Edit a badge

3. Duplicate a badge

With just a few clicks, brands can now streamline their badge journeys, crafting badges that resonate with their audience and objectives. It's time to take your badge game to the next level with our production-ready Badges UI.

![796591b image1](https://files.readme.io/796591b-image1.gif)

**Refer to the documentation[here](https://docs.capillarytech.com/docs/enabling-creating-a-badge).**

## Issue Badges from Campaigns

Now you can seamlessly enrol specific audiences into badges based on particular criteria, and effortlessly issue badges to target audiences, enhancing engagement, and recognition. For example

1. Issue VIP badge to high-value customers or top spenders, providing a sense of exclusivity and recognition.
2. Issue the badge to a specific audience who attended an offline event organized by the brand.

![8fefd1b image1](https://files.readme.io/8fefd1b-image1.gif)

Refer to the documentation [here](https://docs.capillarytech.com/docs/enrolling-and-issuing-badges-from-campaigns).

Brands who don’t use Engage product and want to issue the badges directly to a specific audience from external sources can use the bulk issual API for Badges.

Refer to the documentation [here](https://docs.capillarytech.com/reference/issue-badge-to-multiple-customers).

## Enrich badges view with the newly introduced custom fields

Now you can add custom metadata to badges. This feature will give brands the flexibility to show custom/personalized data in app/web and add metadata for audit and reporting purposes.

![89055c3 Screenshot 2024 03 27 at 12](https://files.readme.io/89055c3-Screenshot_2024-03-27_at_12.14.40_PM.png)

**Refer to the documentation[here](https://docs.capillarytech.com/docs/customer_badges#enrich-customer-views-for-badges-with-the-newly-introduced-custom-fields).**

## Elevate Customer Engagement with Enhanced Customer Badge’s APIs!

Revolutionize badge management and get greater flexibility and insight into customer badge interactions. With the 2 new APIs, you can now seamlessly access comprehensive details of individual badges for specific customers, as well as efficiently retrieve lists of badges for various customer interactions.

**🏅Detailed Badge Information API:** Gain in-depth insights into individual badges for specific customers. With this enhanced API, you can effortlessly track customer badge achievements with unparalleled precision.

**Refer to the documentation[here](https://docs.capillarytech.com/reference/get-individual-badge-details-of-a-customer)**

🔍**Streamlined Badge Listings:** Easily retrieve lists of badges available for enrollment, available for issual, earned, and expired badges for a particular customer

**Refer to the documentation[here](https://docs.capillarytech.com/reference/get-all-customer-badges)**

## Fixed window based Limits for issual of Badges

Introducing a dynamic feature designed to empower marketers with enhanced flexibility and control over badge earning restrictions. With this update, you can effortlessly define fixed window limits, catering to brands with retroactive flows and enabling tailored restrictions aligned with their objectives.

![47ec2f9 image3](https://files.readme.io/47ec2f9-image3.gif)

*The UI for this feature will come in future sprints.*

Refer to the documentation [here](https://docs.capillarytech.com/reference/fixed-window-use-case).

# Rewards Catalog

## Enhanced Visual Experience: Support for more Images and Videos in Rewards Catalog

Bringing a new feature in rewards catalog which will elevate user engagement and captivate audiences like never before.

* **Multiple Images:** Now add up to 10 captivating images for each reward in the catalog, with flexibility to customize naming.
* **Video Support:** Introduce up to 2 videos per reward, allowing seamless integration of multimedia content and enhancing the customer experience.

**Refer to the documentation here,[create reward](https://docs.capillarytech.com/reference/post-create-reward) and [update reward.](https://docs.capillarytech.com/reference/put-update-reward)**

## Elevate Customer Experiences with Groups and Rankings in Rewards Catalog

Now, marketers can effortlessly organize and showcase rewards exactly as they envision. With customizable groups and rankings, you have the power to curate a visually stunning catalog that captivates your audience.

Elevate your customers' experience by defining groups and rankings for each reward, allowing for seamless sorting and segmentation. Now, you have the flexibility to tailor the catalog to your brand's unique style and preferences.

![47e9942 image2](https://files.readme.io/47e9942-image2.png)

**Refer to the documentation[here](https://docs.capillarytech.com/docs/rewards-catalog#elevate-customer-experiences-with-groups-and-rankings-in-rewards-catalog).**

## Introducing Multilingual Custom Fields for Enhanced Brand Personalization!

Now, you can tailor the experience for your customers by providing custom field data in their preferred language, enhancing engagement and satisfaction. This feature will allow you to define custom fields in different languages for each reward in the catalog.

With English as the default language and fallback option, you have the flexibility to create custom fields in multiple languages. This update will empower the brands to effortlessly localize their rewards catalog, providing a seamless experience for customers worldwide.

**Refer to the documentation here,[create reward](https://docs.capillarytech.com/reference/post-create-reward) and [update reward.](https://docs.capillarytech.com/reference/put-update-reward)**

## Introducing Point Redemption Controls for the Catalog

Initially brands were facing the issue where they couldn’t control the points that customers redeem on the catalog which led to over redemption of points on the catalog thereby decreasing new business. But now, marketing managers can effortlessly

* Control the points that can be spent on the catalog
* Prevent over redemption in the catalog
* Encourage customers to use points during transactions, ultimately driving more business.

Refer to the documentation [here](https://docs.capillarytech.com/docs/rewards-catalog#introducing-point-redemption-controls-for-the-catalog).

## Implement Points+Cash journeys in Rewards Catalog

Brands can now expand their catalog to include rewards purchased with cash or a combination of points and cash, offering customers greater flexibility and incentive to engage with the loyalty program. Brands gain enhanced flexibility and control over reward issuance with options including

* FREE
* POINTS
* CASH
* POINTS + CASH

![b154f01 image2](https://files.readme.io/b154f01-image2.png)

Refer to the documentation [here](https://docs.capillarytech.com/docs/rewards-catalog#implement-pointscash-journeys-in-rewards-catalog).
