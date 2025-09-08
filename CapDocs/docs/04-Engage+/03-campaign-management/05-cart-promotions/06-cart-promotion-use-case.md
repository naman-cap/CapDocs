---
title: Cart Promotion Example and Use Case
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
# Example

1. Fuel distributors can use the Promotion Engine to incentivize partners and individuals on purchases beyond fuel products. It offers fleet owners rewards. For example, when drivers make purchases they get promotions like free refreshments such as tea, coffee, biscuits, and other similar items on their regular fueling.

The following are examples of some live promotions.

* **Segment-based**: Four-wheeler owners can get free filter coffee ($4/-) or mini cappuccino ($5/-) when customers fuel for $100. Avail once in 7 days and max 5 times.
* **Quantity or Unit level**: Avail a discount of $1/gallon when you purchase fuel over 2 gallons. Offer capped to 10 gallons/day and a maximum of 100 gallons in a month.
* **Wallet points can mean much more**: Redeem 2000 points and get Main Grade fuel worth $50. Offer valid till July 31, 2021, on select stations on specific fuel categories.

2. Fashion retail brands can go beyond popular small ticket items and think more about driving experience to build loyalty:

* **Know customers better and engage more**: Customers increasingly recognize the value of their data. Offer rewards and better experience as motivation to share their data. For example, unlock 10% off Denim products up to $20 on date of birth update or email address update.
* **Milestone-based**: Get 10% off on the next five transactions with a minimum cart amount of $100 for customers who complete $1000 in an annual purchase.
* **Experiential hooks**: Gift matching accessories or products to create that experiential hook and gratification. Shop for clothing products worth $200 and get a free Duffle Bag or anti-theft bag.

3. Grocery or supermarket chains can incentivize frequent shoppers with seasonal promotions and upsell long-tail products or bundle them with their regular purchases.

* **Day & Time-based**: Get an additional 5% off on your grocery purchases over $100 when you shop on Wednesdays between 11 AM - 1 AM. Avail a maximum discount of $50 in a single transaction and $200 annually.
* **Restrictions**:- Buy 3 milk packets and get 50% off on custard flavors. Can be availed twice in a single transaction, 5 times in a month, and max 10 times per customer on selected stores
* **Catalog/SKU**:  With every purchase of frozen products get 20% off on bacon. Offer applicable on category purchases above $100.\
  To start with creating a promotion see [Create Promotions (Cart/Catalog Promotions).](https://docs.capillarytech.com/docs/create-cart-or-catalog-promotions)

<Note title="Note">
* Applicable to all promotion types.
</Note>

You can add any relevant information to a promotion using the promotion custom fields. It could be to store any promotion-related information such as T\&C, Image URL, and offer URL.

See how to create custom fields in [Cart Promotion Settings](https://docs.capillarytech.com/docs/cart-promotions).

There are five different types of cart/catalog promotions. The configuration flow and options might vary for each promotion type.

# Use case

## Requirements

Glo Cosmetics aims to increase online sales, build customer loyalty, and promote new product lines by using cart promotions. These promotions will offer instant gratification during product search or checkout and can be integrated into ongoing campaigns.

1. Glo Cosmetics will set up a Loyalty Cart Promotion to target specific customer segments.
2. The promotion will apply when specific cart conditions are met.
3. A percentage-based discount of 20% on any product.
4. The total cart value must be >= $50 before the discount is applied.
5. Each customer will be issued the cart promotion once, and it can be redeemed only once.
6. The maximum discount a customer can avail will be $10.
7. Only first 1000 customers can avail this cart promotion.
8. Enable Set Expiry Reminder to send an SMS 10 days before the promotion’s expiry, reminding customers to use their discount.

## Solution

To set up the Cart Promotion according to the above requirements by the brand, follow these steps:

1. [Create the Cart Promotion](https://docs.capillarytech.com/docs/create-cart-promotion).

   1. Enter cart promotion name, description and duration.
   2. Select the cart promotion type as Loyalty Cart Promotion.

      ![](https://files.readme.io/3605ed624a3f06c75a989e8790f27176bc3d86ad91310de656bb72e8cc977704-image.png)
2. [Configure the Availing Conditions and Benefits](https://docs.capillarytech.com/docs/availing-conditions-and-benefits#define-the-benefits-and-cartproduct-conditions-to-avail-the-cart-promotion)

   1. Define the qualifying conditions by selecting **Percentage based** and entering the value.

      ![](https://files.readme.io/85743249aa58daf75a24b9c6c0cdffff2d16a24fe3a4a80b5f33519cc980e8a5-image.png)
3. [Configure the Scope, Restriction and Expiry of the cart promotion.](https://docs.capillarytech.com/docs/availing-conditions-and-benefits#define-scope-and-restriction)

   1. Define the scope.
   2. Enter the Issual restriction.

      ![](https://files.readme.io/1593bb28d3fb4bc0392e24098d81cad7116127ceb4c9bed632507561a8b816f4-image.png)
   3. Configure the following in Redemption Restriction.

      ![](https://files.readme.io/6dd14ed53b46e943b4859a057efcb550a03c92b5f62c13ce091b2639c2f10d98-image.png)
   4. Set expiry of the promotion.
4. [Configure Communication](https://docs.capillarytech.com/docs/cart-promotion-communication)

   1. Select \*\*Add creative expiry reminder \*\*under **Set expiry reminder** choose the message.
   2. Configure the reminder period.

      ![](https://files.readme.io/a9743cbc5b76e4a68ff970871383924afd98d998792704b1e0854a45b5fc1d8e-image.png)
5. Select **Create Promotion**.