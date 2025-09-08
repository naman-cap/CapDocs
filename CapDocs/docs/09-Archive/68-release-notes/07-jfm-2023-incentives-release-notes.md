---
title: JFM 2023 | Incentives Release notes
excerpt: >-
  Please find release notes for the incentives module. The changes span across 3
  incentives in the following order,  Rewards Catalog Cart promotions Coupons. 
  Please note that for some features UI is pending but can be fully consumed
  with APIs. Hence we have included them in the release notes. These notes are
  only for internal use. We will share another update once UIs are available.
deprecated: false
hidden: true
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
# Incentives Release notes JFM'23

Please find release notes for the incentives module. The changes span across 3 incentives in the following order,

1. Rewards Catalog
2. Cart promotions
3. Coupons

Please note that for some features UI is pending but can be fully consumed with APIs. Hence we have included them in the release notes. These notes are only for internal use. We will share another update once UIs are available.

## Rewards catalog

### Optimize your rewards budget & catalog inventory

This new update allows for more equal opportunities for customers to avail benefits while also optimizing spending at the reward level.

A marketing manager can now define the following limits at a reward level:

* Max number of quantities that can be bought in a single transaction
* Max times a customer can purchase the reward in the reward duration
* Max time the reward can be purchased across all customers
* In the fetchRewardInfo call, inventory consumption status is returned

Users cannot update the above KPIs once the reward goes live, but they can enable or disable the KPI itself.

![Above images are mere samples to indicate possible customer views and not product view](https://files.readme.io/4d66269-Screenshot_2023-02-14_at_6.14.54_PM.png)

**To get started,**

You can refer to the detailed documentation here [Reward Purchase Limits](https://docs.capillarytech.com/docs/marve#optimize-your-rewards-budget--catalog-inventory)

**Please note that the corresponding UI changes for this enhancement will be available in future sprints. For now the document attached has details on API based implementation**

### Enrich your rewards catalog view with the newly introduced custom fields

Now the users can add custom fields to rewards in our marketplace. This feature will give brands the flexibility to show custom/personalized data in app/web and add metadata for accounting or partner reconciliations.

**Enhancement done**

As a marketing manager, you can now create and store custom fields while creating and editing rewards. These custom fields can be used to customize the UI views and for reporting and reconciliation purposes.

![Above image is indicative and final product views can be completely different](https://files.readme.io/31bae74-Screenshot_2023-02-14_at_6.42.32_PM.png)

**Please note that the corresponding UI changes for this enhancement will be available in future sprints. For now the document attached has details on API based implementation**

For more information, refer to the documentation here, [custom fields in Marvel](https://docs.google.com/document/d/18vBKhU19acEzD0qLHPE3Kq7bnJKj2Lg1YjZwjX6W-7Q/edit)

### Now run attractive discounts on your rewards catalog

This feature will allow brands to create, edit, and fetch promotions on their reward catalogs. The currency for all rewards is in the form of points owned by the customer.

With this update, Brands can run promotions on their reward catalog by offering discounts on the points value and showing additional promotions metadata. For example, during a festive season or clearance sale, they can offer a reward at 300 points instead of the normal 500 points. The reward will revert back to its original points value after the promotion period ends.

![Above images are mere samples to indicate possible customer views and not product view](https://files.readme.io/e448499-Screenshot_2023-02-14_at_6.46.36_PM.png)

**Please note that the corresponding UI changes for this enhancement will be available in future sprints. For now the document attached has details on API based implementation**

For more information, refer to the document here, [Catalog promotions in Marvel rewards](https://docs.capillarytech.com/docs/marve#now-run-attractive-discounts-on-your-rewards-catalog)

### Rewards catalog now supports point redemption for unified multiple loyalty programs

This is an extension of the unified MLP where a multi program brand keeps a single wallet for the customer. This feature allows customers to use their points across multiple programs and redeem them while making a purchase from the reward catalog.

Previously, Rewards catalog did not support consolidated points redemption from multiple programs, but now, with this release, we have added this functionality to the system.

**Getting started**

* Just enable group\_redemption=true in your emf configuration page. It would be already enabled if you're having a unified MLP setup.
* Once group redemption is enabled for an organization, Marvel will pass "group redemption" as true by default in the redemption workflow.

For more information, refer to the documentation here, [point redemption for unified MLPs](https://docs.capillarytech.com/docs/marve#rewards-catalog-now-supports-point-redemption-for-unified-multiple-loyalty-programs)

### New Rewards Catalog Update Enhances Member Care and Customer Satisfaction

Previously, there was no view of Rewards Catalog in Member Care because of which the brands were not able to see the details of points, rewards and transactions for any reward redeemed by a customer and they were not able to take any action against those rewards.

With this enhancement, brands can now view the transaction, reward, point details against a reward in Reward Catalog in Member care. This will provide brands with more visibility and control over their rewards and transactions.

![a9cc18f image1](https://files.readme.io/a9cc18f-image1.png)

Refer to the detailed documentation here [Rewards Catalog Events in Membercare](https://docs.capillarytech.com/docs/marve#now-brands-can-see-rewards-catalog-events-in-membercare)

### Reduce reward checkout failures and improve customer experience

When the customer buys any reward from the brands catalog, and if the call fails due to an error thrown by downstream systems like coupon engine or reward partner then customer would only see something went wrong since our product will return that message.

With the recent enhancement, error messages from partners can now be retrieved and included in the response. This will allow brands to display accurate error messages to the end-users in case of reward issuance failures.

For eg. In case of a third party reward,

* Let’s say the call failed because the customer token expired or inventory was not available
* We will exactly pass the error given by the third party system to the mobile app.
* Mobile app can re-generate the token and re-trigger the issue reward call for reward issuance
* Customer will be issued the reward in the same request and will not have a broken experience

Refer to the detailed documentation here [Error handling in rewards catalog](https://docs.capillarytech.com/docs/marve#reduce-reward-checkout-failures-and-improve-customer-experience)

### Finally one of the most awaited reports!! Rewards Catalog 🙂

Brands that are actively using rewards catalog, we have enabled the below standard report

KPIs included

![](https://files.readme.io/3d0e126-Screenshot_2023-03-21_at_12.26.33_PM.png)

Top 10 rewards based on decreasing order of currency redeemed

![](https://files.readme.io/4093e5c-image2.png)

Top 10 rewards based on decreasing order of number of rewards purchased

![](https://files.readme.io/5803148-image4.png)

[Link to the report for SG cluster](https://sgcrm.cc.capillarytech.com/analytics/v2/report/6409968450a5a59fc3476365#:~:text=Rewards_catalogue_reporting)\
[Link to the report for IN cluster](https://incrm.cc.capillarytech.com/analytics/v2/report/6409968450a5a59fc3476365#:~:text=Rewards_catalogue_reporting)
[Link to the report for EU cluster](https://eucrm.cc.capillarytech.com/analytics/v2/report/6409968450a5a59fc3476365#:~:text=Rewards_catalogue_reporting)

*To help you quickly get started we have enabled these reports for below orgs that are using Rewards Catalog*

Abbott - 1980, 2131, 2062, 151193, 151194\
Avian - 1893
Boustead Ikano - 1935
Jaspal - 2095, 1996
Petron - 1963
Purina - 2094
Shell - 151195, 151181, 151197, 151219, 151199, 151196

*We have enabled it for the orgs currently using Marvel. In case your org id is not there in the above list please raise a task ticket to enable it for your organization.*

## Cart promotions

### Prevent redemptions limit breach in cart promotions

In cart promotions, when an offer is applied by the cashier on a cart and processed for payment, the customer has received the benefit but the promotion has not yet been redeemed into the system.\
At the same time if another cashier applies the same promotion to another cart, the capillary system proceeds ahead as it cannot reject any redemption. This led to customers getting benefits beyond the allowed number of redemptions.

To prevent this, we have built a temporary lock/unlock system,

* If the promotion is already applied in a cart, it will be in a temporary redemption state
* If a promotion is in transient redemption state, the app will keep the offers screen locked
* On reversal of transient lock, the app will reactivate the offers screen
* Customers will not be able to lock/disable applied/all promotions unless the transaction is canceled or completed

![Image 1: Evaluation log of the cart, option to release the cart](https://files.readme.io/9b10b5f-Screenshot_2023-02-14_at_6.54.37_PM.png)

![Image 2: Cart discarded/released](https://files.readme.io/2ccee30-Screenshot_2023-02-14_at_6.54.43_PM.png)

Click here to read more, [Preventing Fraudulent redemptions in Promotion engine](https://docs.capillarytech.com/docs/cart-catalog-promotions#preventing-fraudulent-redemptions-in-cart-promotions)

### Enhanced best offer logic in cart promotions

This is an extension of the promotion ranking strategy in cart promotions. Previously, brands were able to rank their strategies based on the following three options:

* Loyalty promotions
* Reward-based promotions
* Code-linked promotions

However, under Cart promotions, there was no option to rank the three types of promotions (POS, Loyalty, and Loyalty Earning Promotions). To address this, a functionality to include this option is added. The default order, in case the configuration is enabled, will be: POS, Loyalty, and Loyalty Earning.

Ex: a POS promotion can be ranked above loyalty or loyalty earning promotion. This ranking applies to both gift voucher (payment voucher) and cart promotions (discount).

For the orgs already using cart promotions stacking order, a confirmation message is added, post accepting, all types of promotions will be listed and **this action can't be reversed**

![98c399e Screenshot 2023 04 10 at 8](https://files.readme.io/98c399e-Screenshot_2023-04-10_at_8.20.23_PM.png)

![](https://files.readme.io/f81c124-Screenshot_2023-04-10_at_8.22.45_PM.png)

For orgs that are not using promotion stacking order, all types of promotions will be available for stacking.

![](https://files.readme.io/048f5a6-Screenshot_2023-04-10_at_8.43.01_PM.png)

Click here to read more [Enhancements in promotion Stacking order ](https://docs.capillarytech.com/docs/cart-promotions#enable-ranking-based-on-promotion-type)

## Coupons

### Now track the reversal status of a coupon

Earlier, customers couldn't see if coupon redemption was reversed due to a return. They wouldn't remember the code that was originally redeemed leading to trust issues on return of transactions. This lack of transparency resulted in increased support inquiries with support itself not able to track these reversals

Hence, brands want to indicate in their mobile UIs as to which coupon was reversed and then reinstated.

**To get started**

* In the GetCustomerCoupons and GetCouponDetails API we have added a new field titled “isReversed”.
* These fields will be returned as “yes” against the coupon code along with “last reversed timestamp” if the coupon was reversed.

Users can check the status of their coupon reversal on the app, including the time of reversal if the reversal has been completed.

![Above images are mere samples to indicate possible customer views and not product view](https://files.readme.io/07c971a-Screenshot_2023-02-14_at_7.06.42_PM.png)

Refer to the detailed documentation here, [Track the reversal status of a coupon](https://docs.capillarytech.com/docs/offer-advanced-settings#track-the-reversal-status-of-a-coupon)

### Now brands can show all the offers to guest users by region or country

Brands with multiple countries, zones or stores can now show the available offers/coupons to the respective guest customers. This will help the brands to nudge the customers to sign in and avail the offer. Offers can be filtered on concept, zone, store or till.

Brands will also be able to select & upload store names while creating a coupon series to restrict the coupon redemption to those stores.

![](https://files.readme.io/700e6a1-Screenshot_2023-04-10_at_7.31.35_PM.png)

![](https://files.readme.io/3a74b95-Screenshot_2023-04-10_at_7.31.55_PM.png)

**To get started**

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

      <td>
        {`  
                [https://\{host}/v2/coupon/series?orgEntityType=](https://\{host}/v2/coupon/series?orgEntityType=)<orgEntityType>\&orgEntityIds=<orgEntityId1>\&orgEntityIds=<orgEntityId2>
              `}
      </td>
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

You can refer to the detailed documentation here [API to fetch all coupons](https://docs.capillarytech.com/docs/offers#api-to-fetch-all-coupons)

### Now, Product Codes are supported while creating offers via API

Previously, API for creating coupons only supported product IDs, brand and category codes could not be used when applying restrictions to offers. This was difficult for the users creating the offers as they wouldn’t know the product IDs.

Now the API is updated to support product codes for brand, category, and SKU, allowing users to create offers more efficiently. Product codes will be validated and an error will be thrown if codes are incorrect. Brands should use either product IDs or product codes, but not both.

This update will now improve the efficiency and help the users to create offers with much ease via coupon creation API.

You can refer to the detailed documentation `[here]`([https://docs.capillarytech.com/docs/offer-advanced-settings#now-product-codes-are-supported-while-creating-offers-via-api](https://docs.capillarytech.com/docs/offer-advanced-settings#now-product-codes-are-supported-while-creating-offers-via-api))