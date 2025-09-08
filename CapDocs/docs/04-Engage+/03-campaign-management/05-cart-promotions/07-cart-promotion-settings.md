---
title: Cart Promotion Settings
deprecated: false
hidden: false
metadata:
  robots: index
---
In this section, you can set up how cart promotions are applied, define discount calculation rules, and set promotion ranking order. You can also add extra information to promotions by creating Custom Fields.

1. Go to **settings**

   ![ 50%](https://files.readme.io/af77ae5b71f30a338806e099f2ebb8811d5631039a0d1412eb889b53b36a1b9b-image.png)

   2. Select **Cart promotion**

   ![](https://files.readme.io/94450a270c335d72286ac3efd824630aa99d7739ba7d173bdadb52adf5aaf1d3-image.png)

<Table align={["left","left","left"]}>
  <thead>
    <tr>
      <th style={{ textAlign: "left" }}>
        Item
      </th>

      <th style={{ textAlign: "left" }}>
        Description
      </th>

      <th style={{ textAlign: "left" }}>
        Example
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td style={{ textAlign: "left" }}>
        Lineitem then cart
      </td>

      <td style={{ textAlign: "left" }}>
        Promotions are applied to individual items first. After that, cart-level promotions are applied on the new subtotal.
      </td>

      <td style={{ textAlign: "left" }}>
        Cart contains shoes ($100) and towels ($20). With "Line-item with cart" evaluation, promotions apply in order: (1) 10% off shoes = $90, (2) Buy 1 towel get 1 free = $10, creating a new subtotal of $100. Then (3) 10% off cart for purchases above $99 applies to this $100 subtotal, demonstrating how cart-level promotions calculate on the reduced amount after line-item promotions are processed first.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Cart or lineitem with cart first
      </td>

      <td style={{ textAlign: "left" }}>
        Cart-level promotions are applied first. Promotions on individual items are only applied if no cart-level promotions are present.
      </td>

      <td style={{ textAlign: "left" }}>
        Cart promotions apply first; if unavailable, then line-item promotions apply. Using the previous example (shoes $100, towels $20, total $120), only the cart promotion (#3: 10% off purchases above $99) would apply to the $120 total, resulting in $108 final amount. Line-item promotions (#1 and #2) are skipped since a cart promotion was available.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Multiple promotion for single lineitem
      </td>

      <td style={{ textAlign: "left" }}>
        Only one promotion can be applied to each quantity of a product. If enabled, different promotions could apply to different quantities of the same product, based on a ranking system.
      </td>

      <td style={{ textAlign: "left" }}>
        Cart contains 2 cokes, 3 biscuits, and 1 chai. With multiple promotions enabled for single line items, both coke promotions can apply simultaneously: "$10 off on one coke" affects the first coke while "10% off on coke" applies to the remaining coke quantity, allowing different promotions to target different quantities of the same product.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Multiple promotion for cart level
      </td>

      <td style={{ textAlign: "left" }}>
        More than one promotion can be applied to the whole cart. Useful for combining various cart-level offers.
      </td>

      <td style={{ textAlign: "left" }}>
        Cart total is $150. With multiple cart-level promotions enabled, you can combine: "Free shipping on orders over $100" + "5% off entire cart" + "$10 off orders above $120". All three cart-level promotions apply simultaneously, resulting in free shipping, 5% discount on the $150 total, and an additional $10 reduction, maximizing customer savings through stacked cart offers.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        * Calculate percentage discount on
      </td>

      <td style={{ textAlign: "left" }}>
        **Gross**: Discounts are calculated based on the total amount before tax and any additional charges.\
        **Note**: Discounts would be calculated on the final amount after tax and charges.
      </td>

      <td style={{ textAlign: "left" }}>
        —
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        * Promotion ranking order
      </td>

      <td style={{ textAlign: "left" }}>
        This section defines the order in which promotions are applied when multiple are valid. Promotions are prioritized and applied accordingly to ensure the correct one is used first.
      </td>

      <td style={{ textAlign: "left" }}>
        —
      </td>
    </tr>
  </tbody>
</Table>

![6aa1d2d8219e878762ae859a6fcfe9642c196b48064066e7966e2d25f2c0c106 image](https://files.readme.io/6aa1d2d8219e878762ae859a6fcfe9642c196b48064066e7966e2d25f2c0c106-image.png)

## Promotion ranking order

When multiple promotions are applicable for cart items (cart or catalog discount), you can define the ranking of promotions before applying them. Segmented promotions are categorised into three base types during creation:

* Loyalty promotion
* POS (Point of Sale) promotion
* Loyalty earning promotion

You can click **Update** to modify or adjust how promotions are grouped or prioritized based on this change.\
It is a permanent change.

![68bc0142c23593bb0e21f95da598e55fe3f334ea291969fd43d9d0174f2cb553 image](https://files.readme.io/68bc0142c23593bb0e21f95da598e55fe3f334ea291969fd43d9d0174f2cb553-image.png)

Promotion Types in Ranking Order: Each box represents a type of promotion, which can be reordered (drag and drop) to set their priority:

|                     |                                                                                |
| :------------------ | :----------------------------------------------------------------------------- |
| Promotion           | This indicates the promotion is active or enabled.                             |
| Segmented promotion | Promotions targeting specific customer segments.                               |
| Reward              | Promotions that offer a benefit or bonus (e.g., buy one get one, cashback).    |
| Code linked         | Promotions that are only activated by entering a specific promo code.          |
| Earliest expiry     | Preference will be given to the promotion that expires first.                  |
| Maximum discount    | The system will choose the promotion that provides the highest discount amount |

Under **Discount rounding logic** : This section controls how the system handles rounding when calculating discounts.

**Select the Rounding type**. Refer to the table below:

| Option    | Description                                                                    |
| :-------- | :----------------------------------------------------------------------------- |
| UP        | Always rounds the value up, away from zero.                                    |
| DOWN      | Always rounds the value down, toward zero.                                     |
| CEILING   | Rounds up toward positive infinity.                                            |
| FLOOR     | Rounds down toward negative infinity.                                          |
| HALF UP   | Rounds to nearest value; if exactly halfway, rounds up.                        |
| HALF DOWN | Rounds to nearest value; if exactly halfway, rounds down.                      |
| HALF EVEN | Rounds to nearest value; if exactly halfway, rounds to the nearest even number |

Select **Decimal precision** : This setting determines how many decimal places are kept in the discount amount

![619faee16f9f4b56079e5ee37c863ccca7219aa1d31ef769250fd69abfa4cbd2 image](https://files.readme.io/619faee16f9f4b56079e5ee37c863ccca7219aa1d31ef769250fd69abfa4cbd2-image.png)

In **Custom fields** are used to add metadata fields for your promotion by clicking on **create new field**

![ ](https://files.readme.io/e4a6664d8c2efca8cc7e8fc50b1b7da52fec95f654ac14587c57741af2d8a047-image.png)

Custom field option will now start showing in additional information

![e4ce02d0debcde4d0e178ec23fedd5d9b2f35646a4d156483c74a255a12d607b image](https://files.readme.io/e4ce02d0debcde4d0e178ec23fedd5d9b2f35646a4d156483c74a255a12d607b-image.png)

Click on "save" and get confirmation

![6365791ef891bc033abd02fceb2206def9748cf8dd513516164946a5267431eb image](https://files.readme.io/6365791ef891bc033abd02fceb2206def9748cf8dd513516164946a5267431eb-image.png)