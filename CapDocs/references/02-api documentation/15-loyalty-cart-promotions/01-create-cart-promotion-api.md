---
title: Create Cart Promotion (Internal)
excerpt: Lets you create any type of cart promotion.
api:
  file: v1.json
  operationId: create-cart-promotion-api
deprecated: false
hidden: true
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
<HTMLBlock>{`
<style>
  .InputGroupe2EvBGz2cnqy {
   display: flex;
   gap: 2px;
   position: relative;
}

.Button.APIRequest-example-button1DGMsfaOTVNW {
   position: relative;
   width: 140px;
   white-space: nowrap;
   overflow: hidden;
   text-overflow: ellipsis;
   padding: 6px 12px;
   text-align: left;
   transition: width 0.2s ease-out;
   z-index: 1;
   display: block;
   direction: ltr;
   unicode-bidi: embed;
   padding-right: 20px;
   background: #1e2329;
   border: none;
   border-radius: 6px;
   color: #94a3b8;
   font-size: 13px;
}

.Button.APIRequest-example-button1DGMsfaOTVNW span,
.Button.APIRequest-example-button1DGMsfaOTVNW div {
   text-align: left;
   direction: ltr;
}

.Button.APIRequest-example-button1DGMsfaOTVNW:hover {
   width: auto;
   z-index: 10;
   background: #262b33;
}

.Button.APIRequest-example-button1DGMsfaOTVNW.APIRequest-example-button_activeXJeukHyaHZXB {
   z-index: 20;
   background: #2c333d;
   color: #ffffff;
}
</style>
`}</HTMLBlock>

<br />

<br />

## Notes

* Mandatory fields are indicated with an asterisk

1. The condition and action parameters exist in nested structures in the JSON:
   * Cart condition parameters are nested under `condition.cartCondition`
   * Product condition parameters are nested under `condition.productCondition`
   * Combo product condition parameters are nested under `condition.comboProductCondition`
   * Tender condition parameters are nested under `condition.tenderCondition`
   * Cart-based action parameters are nested under `action.cartBasedAction`
   * Product-based action parameters are nested under `action.productBasedAction`
   * Product-based condition parameters are nested under `action.productBasedAction.productBasedCondition`
   * Tender-based action parameters are nested under `action.tenderBasedAction`

2. Tender condition must be paired with a tender action for consistency.

3. Default value for `maxIssuancePerCustomer` is 1, with valid range from -1 to 50.

4. Default value for `isStackable` is false.

5. Default value for `priority` is 0.

6. Priority values should be unique within a campaign for deterministic behavior.

7. All datetime values are in milliseconds since epoch in UTC timezone.

8. When stacking is enabled, the stacking strategy at the organization level determines how multiple promotions are applied.

9. Read-only fields cannot be set in requests but are included in responses.

10. For tender conditions, CARD type requires an identifier specifying the card network or bank.

11. The combo product condition is satisfied when ALL individual product conditions in the array are met, creating a bundle or meal-deal type of promotion.

12. **This API is not currently exposed externally.**

13. Validation Rules:
    * Percentage values must be between 0 and 100
    * Amount values must be positive and have up to 2 decimal places
    * Dates must be valid future timestamps
    * Priority values must be unique within a campaign
    * Product quantities must be positive integers

14. Error Handling:
    * Invalid combinations of conditions and actions will return a 400 Bad Request
    * Missing required fields will return a 400 Bad Request
    * Invalid parameter values will return a 400 Bad Request
    * System errors will return a 500 Internal Server Error

# Request body Parameters

| Parameter                                                                 | Data Type | Description                                                                                         |
| ------------------------------------------------------------------------- | --------- | --------------------------------------------------------------------------------------------------- |
| **name***                                                                 | string    | Unique name for this cart promotion (max 50 characters).                                            |
| **orgId***                                                                | long      | Your organization’s ID.                                                                             |
| **priority**                                                              | int       | Determines apply order within a campaign (higher = higher). Must be unique per campaign. Default 0. |
| **active***                                                               | boolean   | `true` = enabled; `false` = disabled (won’t apply even if conditions match).                        |
| **messageLabel***                                                         | string    | Customer‑facing message when promotion applies (e.g. “Holiday Sale 25% Off”).                       |
| **type***                                                                 | enum      | Promotion context: `POS`, `CODE`, `CUSTOMER`, `EARNING`, or `REWARD`.                               |
| **startDate***                                                            | long      | Start time (ms since epoch UTC).                                                                    |
| **endDate***                                                              | long      | End time (ms since epoch UTC).                                                                      |
| **campaignId**                                                            | long      | (Optional) Marketing campaign linkage.                                                              |
| **createdBy**                                                             | long      | Read‑only ID of creator.                                                                            |
| **createdOn**                                                             | long      | Read‑only creation timestamp.                                                                       |
| **lastUpdatedBy**                                                         | long      | Read‑only ID of last editor.                                                                        |
| **lastUpdatedOn**                                                         | long      | Read‑only last‑update timestamp.                                                                    |
| **customerActivationRequired**                                            | boolean   | If `true`, customer must manually enable this promotion. Default `false`.                           |
| **isLoyaltyOnly***                                                        | boolean   | If `true`, only loyalty‑program members can use.                                                    |
| **mode***                                                                 | enum      | `DISCOUNT` (reduce price) or `REWARD` (grant reward).                                               |
| **maxIssuancePerCustomer***                                               | int       | Times each customer may use (–1 = unlimited; max 50). Default 1.                                    |
| **isStackable***                                                          | boolean   | If `true`, can combine with other promotions on same item. Default `false`.                         |
| **expiryDateChangeJobList**                                               | array     | Scheduled tasks updating end dates.                                                                 |
| **customFieldValues**                                                     | object    | Business‑specific key/value pairs.                                                                  |
| **condition.cartCondition.kpi**                                           | enum      | What to measure: `SUBTOTAL` (cart value) or `ITEMCOUNT` (number of items).                          |
| **condition.cartCondition.operator**                                      | enum      | Comparison: `EQUALS`, `GREATER_THAN`, `GREATER_THAN_OR_EQUAL`, `LESS_THAN`, `LESS_THAN_OR_EQUAL`.   |
| **condition.cartCondition.value**                                         | decimal   | Target amount or item count (positive, up to 2 decimals).                                           |
| **condition.productCondition.kpi**                                        | enum      | `AMOUNT`, `QUANTITY`, or `NONE` (just presence).                                                    |
| **condition.productCondition.operator**                                   | enum      | Same operator list as cartCondition.                                                                |
| **condition.productCondition.value**                                      | decimal   | Target amount/count.                                                                                |
| **condition.productCondition.criteriaList**                               | array     | List of filters (by SKU/CATEGORY/BRAND/TAG/ATTRIBUTE).                                              |
| **condition.comboProductCondition.productConditions**                     | array     | Array of objects—each requires its own criteriaList, kpi, operator, value.                          |
| **condition.comboProductCondition.productConditions[].criteriaList**      | array     | Filters for that bundle piece.                                                                      |
| **condition.comboProductCondition.productConditions[].kpi**               | enum      | `QUANTITY` or `AMOUNT`.                                                                             |
| **condition.comboProductCondition.productConditions[].operator**          | enum      | `EQUALS` or `GREATER_THAN_OR_EQUAL`.                                                                |
| **condition.comboProductCondition.productConditions[].value**             | decimal   | Required count or total.                                                                            |
| **condition.tenderCondition.type**                                        | enum      | `CARD`, `CASH`, or `PAYMENT_VOUCHER`.                                                               |
| **condition.tenderCondition.identifier**                                  | string    | For `CARD` only: card network/bank code (e.g. “VISA”).                                              |
| **action.cartBasedAction.type**                                           | enum      | Discount type: `PERCENTAGE` or `ABSOLUTE`.                                                          |
| **action.cartBasedAction.value**                                          | decimal   | Percent (0–100) or fixed amount.                                                                    |
| **action.productBasedAction.type**                                        | enum      | Same as cartBasedAction.type.                                                                       |
| **action.productBasedAction.value**                                       | decimal   | Discount percent or amount.                                                                         |
| **action.productBasedAction.includeItemsFromConditionSet**                | boolean   | If `true`, applies to trigger items. Default `false` = can target other items.                      |
| **action.productBasedAction.productBasedCondition.type**                  | enum      | Condition for which items get discounted: `PRODUCT`, `CART`, or `COMBO_PRODUCT`.                    |
| **action.productBasedAction.productBasedCondition.productCondition**      | object    | Nested productCondition (see above).                                                                |
| **action.productBasedAction.productBasedCondition.cartCondition**         | object    | Nested cartCondition.                                                                               |
| **action.productBasedAction.productBasedCondition.comboProductCondition** | object    | Nested comboProductCondition.                                                                       |
| **action.tenderBasedAction.type**                                         | enum      | Same as cartBasedAction.type.                                                                       |
| **action.tenderBasedAction.value**                                        | decimal   | Percent or amount for tender‑based discount.                                                        |
| **loyaltyEarningExpiryDays**                                              | int       | Days until earned points expire (0 = never).                                                        |
| **maxEarningPerCustomer**                                                 | int       | Maximum points one customer can earn.                                                               |
| **earningCriteria**                                                       | object    | Rules for calculating loyalty points.                                                               |
| **promotionRestrictions**                                                 | object    | Extra limits on promotion usage.                                                                    |
| **earnLimitedToSpecificAudience**                                         | boolean   | If `true`, restrict earning to certain groups.                                                      |
| **timeCriteria**                                                          | object    | Days of week, hours, holidays when promo is valid.                                                  |
| **storeCriteria**                                                         | object    | Stores where this promo applies.                                                                    |
| **supplementaryCriteria**                                                 | object    | Extra loyalty‑program conditions.                                                                   |
| **redeemableFromCriteria**                                                | object    | Rules for when earned promo can be redeemed.                                                        |
| **ownershipCriteria**                                                     | object    | Who may edit this promotion.                                                                        |
| **onEarnCommunicationChannels**                                           | object    | Channels (SMS/email/app) to notify when earned.                                                     |
| **languagesConfigured**                                                   | array     | Supported languages list.                                                                           |
| **fixedPriceAction.value**                                                | decimal   | If `type` = FIXED_PRICE: price to charge instead of regular.                                        |
| **freeProductAction.productCriteria**                                     | object    | Filter rules for “free” items.                                                                      |
| **freeProductAction.quantity**                                            | decimal   | How many free items to give.                                                                        |
| **perUnitAction.type**                                                    | enum      | Per‑unit discount: `PERCENTAGE` or `ABSOLUTE`.                                                      |
| **perUnitAction.value**                                                   | decimal   | Discount per unit (%, fixed).                                                                       |
| **perUnitAction.unitType**                                                | enum      | Unit type (e.g. `EACH`, `LITER`, `GALLON`).                                                         |

<br />
