---
title: JAS 2023 | Incentives Release Notes
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
# Badges

We're super excited to announce the launch of a new incentive : **BADGES**!

Think of them as the secret sauce to spice up your brand's loyalty program. These digital badges are more than just eye-catching icons; they're powerful tools to reward your customers, boost engagement, and influence behaviors. They make your loyalty program feel like an adventure, with customers collecting badges for various achievements. Whether it's about being a Premium member, a referral master, or an all-around superstar shopper, these badges bring a new level of excitement to your loyalty program and make the customers feel proud and tap into their emotional side. So, get ready to unlock a world of loyalty possibilities with Badges.

![12ac47f Badges Landing page copy](https://files.readme.io/12ac47f-Badges_Landing_page_copy.jpg)

## Refer to this Badges [user documentation](https://docs.capillarytech.com/docs/badges-1) and[ API documentation](https://docs.capillarytech.com/reference/badges)

![1507907 Badges Landing page copy 2](https://files.readme.io/1507907-Badges_Landing_page_copy_2.jpg)

## Timeline of developments for Badges:

**What can you do today ?**

* Badges creation and update via APIs
* Badges listing page, view mode and upload images on UI
* Issual of badges from loyalty workflows and loyalty promotions

**What will be available in Jan’24 (Post OND’23 releases) ?**

* Badges creation and update via connect+ templates
* Retro support for badges
* Advanced get API for full control on view customizations (ranking and grouping in displaying badges)
* Reporting
* Filters in Engage
* Enrolment in badges via campaigns

**What will be available in Apr’24 (Post JFM’24 releases) ?**

* Create, edit, duplicate badges via UI
* Upload based creation with native support in UI
* Issual of badges from Journeys
* Membercare view of badges
* Direct enrolment, issual and revoke of badges from Membercare
* Support for fixed window issual restrictions in badges

![1710151 Badges Landing page copy 3](https://files.readme.io/1710151-Badges_Landing_page_copy_3.jpg)

# Rewards Catalog

## Enhancements in getUserRewards API for enhanced clarity and user experience

**Changes in Existing API:**

We've heard you! In the past, users couldn't peek at the points spent when purchasing rewards from the rewards catalog. Now, with the new enhancement, we're pulling back the curtain. You and your customers can see the exact number of points spent on each reward. No more mysteries, just clarity.

Refer to the detailed API documentation [here](https://docs.capillarytech.com/reference/get-rewards-for-user).

**Introduction of New API:**

We're rolling out a shiny new API. It's like giving you a fresh pair of glasses to see your rewards even more clearly. Say goodbye to those confusing aggregated views. Now, when you want to check your last 5 purchased rewards, the new API will give you just that - the last 5 vouchers, no extra fluff.

For example, Imagine you have 10 vouchers from one reward and 3 vouchers from another. If you want to see your last 2 purchases, the old API would show you a total of 13 purchases (10 from the first reward and 3 from the second). It's like mixing apples and oranges.

Now, with the new API, it's crystal clear. When you check for your last 2 purchases, you'll only see the most recent 2 vouchers you've received. It's like organizing your closet so you can find your favorite shirt right away.

Refer to the detailed API documentation [here](https://docs.capillarytech.com/reference/get-rewards-for-user-new-api).

<Note title="Note">
There are no changes in response structure of the existing API, we have just built the new API for a more clear view of the rewards purchased by the customer.
</Note>

## Optimize your rewards budget & catalog inventory

With recent changes in reward restrictions, our marketing maestros can now lay down the below laws for their rewards:

🛍️ Maximum quantities of a reward that a single customer can snag during the reward bonanza.

🎁 Maximum quantities of a reward that can be snatched up by all your amazing customers combined.

This new update allows for more equal opportunities for customers to avail benefits while also optimizing spending at the reward level.

But wait, there's more! You can tweak these restrictions daily once a reward goes live. That's right, control is now at your fingertips. We've even thrown in the option to input a big fat "0" for those moments when you want things ultra-exclusive enabling specific limitations, exclusions as desired or out of stock scenarios.

*Below images are mere samples to indicate possible customer views and not product view*

![cedb668 image1](https://files.readme.io/cedb668-image1.jpg)

![9dd69e9 image2](https://files.readme.io/9dd69e9-image2.jpg)

So, go ahead, start optimizing like a pro! For all the details on this, check out our in-depth documentation [here](https://docs.capillarytech.com/docs/rewards-catalog-2#optimize-your-rewards-budget--catalog-inventory)

*Please note that the corresponding UI changes for this fantastic feature will be arriving in future sprints. For now, dive into the world of API-based implementation.*

## Check the reward restrictions on Membercare and answer customer queries faster

Now you've got a front-row seat to your rewards catalog purchases and restrictions right in Membercare! 🚀 This means you'll have eyes on your rewards catalog events, making it easier to handle customer questions like a pro.

![ea9c8f1 image3](https://files.readme.io/ea9c8f1-image3.png)

For all the nitty-gritty details, head over to our documentation [here](https://docs.capillarytech.com/docs/rewards-catalog-2#now-brands-can-see-rewards-catalog-events-in-membercare).

Happy Redeeming:)
