---
title: AMJ 2023 | Incentives Release Notes
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
# Incentives

## Rewards Catalog

### Update the reward restrictions post it is live

Now users can update reward restrictions on a daily basis once a reward is live. With this new feature, brands will have greater control over their rewards restrictions including maximum quantities per transaction, customer purchase limits within the reward duration, overall purchase limits across all customers, and a No Time Limit option.

To provide more flexibility, we have also added the option for users to input "0" in the above restrictions, enabling specific limitations or exclusions as desired.

**To get started,**

You can refer to the detailed documentation here [Update Reward Restrictions](https://docs.capillarytech.com/docs/rewards-catalog-2#update-the-reward-restrictions-post-it-is-live)

### Personalize the catalog with program & tier scope

You can now tailor rewards catalog based on customer loyalty program memberships, tiers, and supplementary programs. By mapping rewards to specific program IDs, brands

* Can provide a more personalized and relevant experience for their customers
* Can offer exclusive rewards to higher-tier members

<Image alt="Sample rewards catalog for Member tier" align="center" width="300px" src="https://files.readme.io/5f524ba-member_tier.gif">
  Sample rewards catalog for Member tier
</Image>

<Image alt="Sample rewards catalog for Ambassador tier" align="center" width="300px" src="https://files.readme.io/9f59a19-ambassador_tier.gif">
  Sample rewards catalog for Ambassador tier
</Image>

 You can refer to the detailed documentation here [Mapping rewards with loyalty programs](https://docs.capillarytech.com/docs/rewards-catalog-2#personalize-the-catalog-with-program--tier-scope)

### Rewards catalog now supports points redemption from user groups

With this new update, now the end customers can use the points from their group wallet along with the individual wallet to purchase the rewards from the rewards catalog. This will allow the customers to have more flexibility in redeeming their points and enjoy the benefits associated.

![5a840bb screen capture 4](https://files.readme.io/5a840bb-screen-capture_4.gif)

**To get started,**

You can refer to the detailed documentation here [Use group points to purchase the reward](https://docs.capillarytech.com/docs/rewards-catalog-2#rewards-catalog-now-supports-points-redemption-from-user-groups)

### Now users can pass notes in isRedeem and RedeemPoints API

In the issue Reward and issue bulk reward call, users can now pass “notes” field and it will be evaluated i.e. notes are being passed to loyalty from these API calls.

**Sample request body for issue Reward call:**

```
{
  "mobile": "mobile_number",  
  "brand": "brand",  
  "transactionNumber": "2344s4",  
   "notes": "This is a sample note"  
}
```

## Cart Promotions

### Re-use the Expired or Disabled Promotion names

With this new update, now users can use the expired or disabled promotion names in cart promotions. This update eliminates the need to create new names for promotions with similar offers, saving valuable time and effort for marketing teams. 

Read more : [Re-use the Promotion names](https://docs.capillarytech.com/docs/cart-catalog-promotions#re-use-the-expired-or-disabled-promotion-names)

### Now cart promotions and gift vouchers can be claimed in different orchestrators

With this new update, cart promotions and gift vouchers can now be claimed in different orchestrators and issued to the end customers, Journeys module is the first in line. This will allow the users to have more flexibility in using the promo engine module.

> 📘 Please note that it will be available on Journeys side by the end of August'23 and UI for this feature will come in future sprints. In the meantime, you can start leveraging this capability via the APIs.

**To get started,**

You can refer to the detailed documentation here [Issue cart promotions and gift vouchers from Journeys](https://docs.capillarytech.com/docs/cart-catalog-promotions#claim-cart-promotions-and-gift-vouchers)
