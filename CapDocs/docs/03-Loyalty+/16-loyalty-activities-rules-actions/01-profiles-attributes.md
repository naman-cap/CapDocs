---
title: Profiles & attributes
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

This topic provides the list of attributes supported for each profile.

## Current Customer (currentCustomer)

This profile consists of attributes related to fetching customers' profile information and loyalty details as listed in the table below. Use this profile to execute actions based on loyalty information and profile details of customers when they make transactions. 

| ATTRIBUTE | DESCRIPTION | SUB ATTRIBUTES |
|-----------|-------------|----------------|
| name | Customer's full name | NA |
| firstname | Customer's first name | NA |
| lastname | Customer's last name | NA |
| avgBasketSize | The ratio of total items purchased to the number of transactions of a customer | NA |
| avgSpendPerVisit | Average purchases amount of a customer per visit | NA |
| clusterValueIncludes() | To check customers of a particular cluster (segment) | clusterValueIncludes(String clusterName, String clusterValue) |
| clusterValueExcludes() | To check customers who are not part of a particular cluster | clusterValueExcludes(String clusterName, String clusterValue) |
| currentPoints | Available loyalty points of the customer | NA |
| customFieldValueExcludes() | Customer custom field excludes the given value | customFieldValueExcludes("Field","Value") |
| customFieldValueIncludes() | Customer custom field includes the given value | customFieldValueIncludes("Field","Value") |
| email | Customer's email id | NA |
| externalId | Customer's external id | NA |
| initialCurrentPoints | Active points of a customer before evaluating the event | NA |
| initialLifetimePoints | Total loyalty points earned by a customer before evaluating the event | NA |
| initialSlabName | Customer's tier name before evaluating the event | NA |
| initialSlabNumber | Customer's tier number before evaluating the event | NA |
| joinDate | Registration date of a customer | dateDiff, day, dayOfMonth, daysDiff, daysDiffFromString, isAfter, isHourBetween, isTimeBetween, isValid, isWeekday, isWeekend, month, and year<br/>For examples on using date formats, see the Date Format section on Using Operators in Rule Expressions |
| lifetimePoints | Total points earned by a customer from the date of registration | NA |
| lifetimePurchases | Total purchases amount of a loyalty customer from the date of registration | NA |
| mobile | Mobile number of a customer | NA |
| numberOfTxns | Total number of transactions made by a customer from the date of registration | NA |
| numberOfTxnsToday | Number of transactions made by a customer the current day | NA |
| numberOfVisits | Total number of times a loyalty customer visited your stores (made transactions in different days) | NA |
| SlabName | Name of the current loyalty tier of a customer | NA |
| SlabNumber | Serial number of the current tier | NA |
| isLoyal | Checks if the current customer is registered in the brand's loyalty program | Example: currentCustomer.isLoyal==true |
| hasInstoreProfile | Checks if the current customer has InStore profile | Example: currentCustomer.hasInstoreProfile==true |
| hasWeChatProfile | Checks if the current customer has WeChat profile | Example: currentCustomer.hasWeChatProfile==true |
| doesProfileExists | Checks if a specific profile | |

## Current Transaction (currentTxn)

The currentTxn profile returns the details of a transaction. Use this profile to write rules on transactions, basket size, custom fields, and so on. Refer to the table below for all the supported attributes of customerTxn.

<Note title="Note">
* Value = Gross amount (rate\*quantity)
* Rate = Gross price of a line item 
* Amount = Value-discount 
</Note>

| ATTRIBUTE | DESCRIPTION | SUB ATTRIBUTES |
|-----------|-------------|----------------|
| number | Transaction number of the current transaction | contains, exists, isEmpty, isNotNull, isNull, isValidDate, matches, and notExists |
| basketSum() | Sum of value of the items matching the inventory attribute | currentTxn.basketSum("Attribute Name","Inventory Value") |
| basketSumRegex() | Sum of value of the items matching the inventory attribute - regular expression | currentTxn.basketSumRegex("Attribute Name","Attribute Regex") |
| basketQty() | Total quantity of items in the bill matching the inventory. For instance, if 2 items of a given line-item are bought, then the basket quantity is 2. | currentTxn.basketQty("Attribute Name","Attribute Value") |
| basketQtyRegex() | Quantity of items in the bill matching the regular expression | currentTxn.basketIncludes("Jeans","Levis002") |
| basketCount() | Number of products in the transaction of the given inventory type - irrespective of quantity | Either pass just value or attribute and value pair.<br/>Example: currentTxn.basketCount("Dvs\_flag","DVS\_Flag")&gt;1 |
| basketCountRegex() | Number of products whose item attribute matches the given regular expression | Pass attribute and regex of the attribute that you want to validate<br/>currentTxn.basketSum("Inventory Attribute","Regex") |
| basketIncludes() | Products contained in the transaction. | Pass attribute and value pair.<br/>currentTxn.basketIncludes("Attribute Name","Attribute Value")<br/>Example:<br/>currentTxn.basketIncludes("Jeans","Levis002") |
| basketExcludes() | Products not contained in the transaction | Pass attribute and value pair.<br/>currentTxn.basketExcludes("Attribute Name","Attribute Value")<br/>Example:<br/>currentTxn.basketExcludes("Jeans","Levis002") |
| basketIncludesRegex() | If the bill includes products whose item attribute does not match the given regular expression | Pass attribute and value pair.<br/>currentTxn.basketIncludesRegex("Attribute Name","Attribute Regex")<br/>Example:<br/>currentTxn.basketIncludes("Jeans","XXX") |
| basketExcludesRegex() | If the bill does not include products whose item attribute does not match the given regular expression | Pass attribute and value pair.<br/>currentTxn.basketExcludesRegex("Attribute Name","Attribute Regex")<br/>Example:<br/>currentTxn.basketExcludes("Jeans","XXX") |
| basketSumIf | Returns the sum of amount of line items (in basket) that satisfies a specific condition. You can define conditions based on the amount, discount, quantity, rate, or value of line items in the basket.<br/>For example, sum of line items amount in the basket whose quantity is more than 2. | Standard expression:<br/>basketSumIf("\{parameter}", "\{expression}","\{value}")[operator]\{value})<br/>Example:<br/>currentTxn.basketSumIf("QUANTITY","GREATER\_THAN\_EQUAL\_TO","3")&gt;100<br/>The preceding expression says: From the basket items, calculate the total amount of line items whose quantity is greater than or equal to 3. If this value is greater than 100, then execute a specific action.<br/>Supported parameters:<br/>AMOUNT, DISCOUNT, QUANTITY, RATE, and VALUE<br/>Supported Operators:<br/>GREATER\_THAN, LESS\_THAN, LESS\_THAN\_EQUALS\_TO, GREATER\_THAN\_EQUALS\_TO, EQUALS\_TO, NOT\_EQUALS\_TO |
| basketCountIf | Returns the count of line items of the basket that satisfies a specific condition. You can define condition based on the amount, discount, quantity, rate, or value of line items in the basket. | Standard expression:<br/>basketSumIf("\{parameter}", "\{expression}","\{value}")[operator]\{value})<br/>Example:<br/>currentTxn.basketCountf("AMOUNT","LESS\_THAN","50")&gt;3<br/>Count of line items from the basket whose amount is less than 50. If this count exceeds 3, then execute an action.<br/>Supported parameters:<br/>AMOUNT, DISCOUNT, QUANTITY, RATE, and VALUE<br/>Supported Operators:<br/>GREATER\_THAN, LESS\_THAN, LESS\_THAN\_EQUALS\_TO, GREATER\_THAN\_EQUALS\_TO, EQUALS\_TO, and NOT\_EQUALS\_TO |
| basketQtyIf | Return the sum of quantities of qualifying line items in the basket. The qualifying condition could be on the amount, discount, quantity, rate, or value of the line item.<br/>For example, quantity of all line items in the basket whose discount is less or equals to $10. | Standard expression:<br/>basketSumIf("\{attribute}", "\{expression}","\{value}")[operator]\{value})<br/>Example :<br/>currentTxn.basketQtyIf("DISCOUNT","LESS\_THAN\_EQUALS\_TO","10")&gt;20<br/>Calculate the sum of the quantity of all line items in the basket whose discount value is $10 or above. If the quantity of those line items is more than 20, execute an action.<br/>Supported parameters:<br/>AMOUNT, DISCOUNT, QUANTITY, RATE, and VALUE<br/>Supported Operators:<br/>GREATER\_THAN, LESS\_THAN, LESS\_THAN\_EQUALS\_TO, GREATER\_THAN\_EQUALS\_TO, EQUALS\_TO, NOT\_EQUALS\_TO |
| basketSize | Total number of items in the bill - irrespective of quantity of each item | NA |
| basketSumGross | Returns the sum of the gross amount of each line items in a basket whose attribute name matches with a specific value. Supported attribute names: product name, short description, SKU number, category, and subcategory. | Standard expression:<br/>currentTxn.basketSumGross\{("[Attribute Name]","[Inventory Value]")[Operator][Value]}<br/>Sample expression:<br/>currentTxn.basketSumGross("name","demoname")&gt;2000<br/>The expression implies: If the total gross amount of line items in the basket with attribute name value is "demoname", exceeds 2000, then execute a specific action. |
| basketSumRegexGross | Returns the sum of gross amount of each line item in the basket<br/>whose product attribute values match the given regular expression. | Standard expression:<br/>currentTxn.basketSumRegexGross\{("[Attribute Name]","[Attribute Regex]")[Operator][Value]}<br/>Sample expression:<br/>currentTxn.basketSumRegexGross("brand","^purple")&gt;5000<br/>It implies: If the sum of gross amount of line items of the basket, whose attribute name (brand) starts with purple, exceeds 5000 execute a specific action. |
| basketSumRegexBrandGross | Returns the sum of the gross amount of each line item in the basket whose brand name matches with the given the regular expression.<br/>Calculates the total gross amount of basket items whose brand name contains xyz. | Standard expression:<br/>currentTxn.basketSumRegexCategoryGross\{("[Regex]")[Operator][Value]}<br/>Sample expression:<br/>currentTxn.basketSumRegexCategoryGross("demo\*")&gt;1000<br/>It implies: If the sum of gross amount of line items of the basket with brand names containing 'demo', exceeds 1000 execute a specific action. |
| basketSumRegexCategoryGross | Returns the total gross amount of line items in the basket whose category names matches with the given regular expression. | Standard expression:<br/>currentTxn.basketSumRegexCategoryGross\{("[Regex]")[Operator][Value]}<br/>Sample expression:<br/>currentTxn.basketSumRegexCategoryGross("^shirt")&gt;1000<br/>It implies: If the sum of gross amount of line items of the basket whose category names that start with shirt, exceeds 1000 execute a specific action. |
| customFieldValueExcludes | Transaction custom field excludes the given value | Mention the custom field value that you want to validate as shown below<br/>currentCustomer.customFieldValueExcludes("a\_customertype","Loyalty") |
| customFieldValueIncludes() | Check if customer's transaction level custom field value includes the given value | Mention the custom field value that you want to validate as shown below<br/>customFieldValueIncludes("Field","Value")<br/>Example:<br/>currentCustomer.customFieldValueIncludes("a\_customertype","Loyalty") |
| date | Date of transaction | dateDiff, day, dayOfMonth, daysDiff, daysDiffFromString, isAfter, isHourBetween, isTimeBetween, isValid, isWeekday, isWeekend, month, and year |
| discount | Discount availed for a transaction | NA |
| points | Total points issued for a transaction | NA |
| totalQty | Total quantity of all items in a transaction. For instance, if 2 items of a given line item are bought, then the 2 is added to the basket quantity. | NA |
| value | Total value of the transaction | interval |
| notes | Transaction level notes specified by the cashier during transaction | contains, exists, isEmpty, isNotNull, isNull, isValidDate, matches, and notExists |

## Current Event (currentEvent)

The current event profile returns the event that is triggered by the event listener, i.e., the event on which the rule is created. The following table consists of the descriptions of all the attributes of currentEvent.

| ATTRIBUTE | DESCRIPTION | SUB ATTRIBUTES |
|-----------|-------------|----------------|
| eventType | Name of the event | NA<br/>Example:<br/>currentEvent.eventType=="TransactionAdd" |
| previousCustomFieldValue() | Value of custom field before updating | currentEvent.previousCustomFieldValue("Custom Field Name","Field Value")<br/>Example:<br/>currentEvent.previousCustomFieldValue("age\_group","value") |
| currentCustomFieldValue() | Value of custom field after updating | currentEvent.currentCustomFieldValue("Custom Field Name","Field Value")<br/>Example:<br/>currentEvent.currentCustomFieldValue("age\_group","value") |
| previousMobile | Customer's mobile number before updating | NA |
| previousEmail | Customer's email ID before updating | NA |
| previousExternalID | Customer's external ID before updating | NA |
| previousName | Customer's full name before updating | NA |
| previousFirstName | Customer's first name before updating | NA |
| previousLastName | Customer's last name before updating | NA |
| currentMobile | Customer's mobile number after updating | NA |
| currentEmail | Customer's email id after updating | NA |
| currentExternalID | Customer's external id after updating | NA |
| currentName | Customer's first name after updating | NA |
| currentFirstName | Customer's first name after updating | NA |
| currentLastName | Customer's last name after updating | NA |
| previousLoyaltyType | Checks the loyalty status of the customer before the current event. Supported only for CustomerUpdate event | Values: LOYALTY/NON\_LOYALTY<br/>Example:<br/>currentEvent.previousLoyaltyType=="LOYALTY" or currentEvent.previousLoyaltyType=="NON\_LOYALTY" |
| previousLoyaltyType | Checks the current loyalty status of the customer. Supported only for CustomerUpdate event | Values: LOYALTY/NON\_LOYALTY |
| targetAchieved | Provides the numeric value of the actual achievement of the customer for the given target. | currentEvent.targetAchieved("Target Name") |
| targetDefined | Provides the numeric value of the target set by the marketing/org user for that customer. | currentEvent.targetDefined("Target Name") |
| targetExists | Checks if a target value exists or set by the marketing user for that customer. | currentEvent.targetExists("Target Name") |
| targetGroup | Returns the name of the target group for which the current event is being executed. This is used to target customers in different groups. | currentEvent.targetGroup |
| targetPeriod | Returns the name of the target period for which the current event is being executed. This is used to target customers across different groups. | currentEvent.targetPeriod |
| isTargetAchievedEvent | Verifies whether a customer has completed the allotted target before the target period ends.<br/>Applicable only to Target period elapses event. | currentEvent.isTargetAchievedEvent |

## Current Line Item (currentLineItem)

The currentLineItem profile returns line-items of a current transaction. You can use this profile only on forward cases and when transaction unroll is enabled. Use this profile to check line-item level details of the current transaction as provided in the table below.

| ATTRIBUTE | DESCRIPTION | SUB ATTRIBUTE |
|-----------|-------------|---------------|
| code | Item code of the line-item as assigned in the inventory | NA |
| description | The description specified for the of the line-item in the inventory | currentLineItem.description=="&lt;Item Description&gt;" |
| discountPercentage | Discount percentage at line-item level | NA |
| doesItemMatch() | Check if an item code matches with the given code | doesItemMatch("&lt;Attribute Name&gt;","&lt;Value&gt;") |
| qty | Quantity of a line-item purchased | NA |
| rate | Actual price of a line-item | NA |
| value | Selling price of a line-item | NA |

## Return Bill (returnBill)

The returnBill profile is used to return the bill amount of a current transaction. You can use this profile only on forward cases and when transaction unroll is enabled. Use this profile to check line-item level details of the current transaction as provided in the table below.

| ATTRIBUTE | DESCRIPTION | SUB ATTRIBUTES |
|-----------|-------------|----------------|
| basketCount | Number of products in the transaction of the given inventory type - irrespective of quantity | NA |
| basketCountRegex() | Number of products whose item attribute matches the given regular expression | returnBill.basketCountRegex("Inventory Attribute","Regex") |
| basketCountRegexBrand | Number of products whose brand name matches the given regular expression | returnBill.basketCountRegexBrand("Brand Name","Regex") |
| basketCountRegexCategory | Number of products whose category name matches the given regular expression | returnBill.basketCountRegexCategory("Category Name","Regex") |
| basketExcludes() | Products not contained in the transaction | Example:<br/>returnBill.basketExcludes("MkmMakeCode","M0081") |
| basketIncludes() | Products contained in the transaction | Example:<br/>returnBill.basketIncludes("MkmMakeCode","M0081") |
| basketExcludesRegex() | To check if the transaction includes products whose item attribute does not match the given regular expression | Example:<br/>returnBill.basketExcludesRegex("MC","KI\_AC.\*") |
| basketIncludesRegex() | To check if the transaction includes products whose item attribute matches the given regular expression | Example:<br/>returnBill.basketIncludesRegex("MC","KI\_AP.\*") |
| basketIncludesRegexBrand() | To check whether the transaction contains items of a specific brand | returnBill.basketIncludesRegexBrand("Brand Regex")<br/>returnBill.basketIncludesRegexBrand("LS") |
| basketIncludesRegexCategory() | To check whether the transaction contains items of a specific category | returnBill.basketIncludesRegexCategory("Category Regex") |
| basketQty() | To check number of items in a transaction | returnBill.basketQty("Attribute Name","Attribute Value") |
| basketQtyRegex() | Quantity of items in the bill matching the regular expression | returnBill.basketQty("Attribute Name","Attribute Value") |
| basketQtyRegexBrand() | Number of quantities of a specific item whose brand name matches the given regular expression | returnBill.basketQtyRegexBrand("Brand Name","Regex") |
| basketQtyRegexCategory() | Number of quantities of a specific item whose category name matches the given regular expression | returnBill.basketQtyRegexCategory("Category Name","Regex") |
| basketSize | Total number of items in the bill - irrespective of quantity of each item | NA |
| basketSum() | Sum of value of the items matching the inventory attribute | Example:<br/>returnBill.basketSum("Product","Shirt") |
| basketSumRegex() | Sum of value of the items matching the inventory attribute - regular expression | Example:<br/>returnBill.basketSum("Product","Regex") |
| customFieldValueExcludes() | Transaction custom field excludes the given value | Pass the custom field value that you want to validate as shown below<br/>customFieldValueExcludes("Field","Value")<br/>Example:<br/>returnBill.customFieldValueExcludes("a\_customertype","Loyalty") |
| customFieldValueIncludes() | Check if customer's transaction level custom field value includes the given value | Pass the custom field value that you want to validate as shown below<br/>customFieldValueIncludes("Field","Value")<br/>Example:<br/>returnBill.customFieldValueIncludes("a\_customertype","Loyalty") |
| date | Date of transaction | dateDiff, day, dayOfMonth, daysDiff, daysDiffFromString, isAfter, isHourBetween, isTimeBetween, isValid, isWeekday, isWeekend, month, and year<br/>For examples on using date formats, see the Date Format section on Using Operators in Rule Expressions |
| discount | Discount availed for a transaction | NA |
| notes | Transaction level notes specified by the cashier during transaction | contains, exists, isEmpty, isNotNull , isNull , isValidDate, matches, and notExists |
| number | Transaction number of the current transaction | contains, exists, isEmpty, isNotNull, isNull, isValidDate, matches, and notExists |
| points | Total points issued for a transaction | NA |
| totalQty | Date of transaction | NA |

## Current Store (currentStore)

The currentStore profile is used to check store level details. You can write rules based on the attributes provided in the table below. 

| ATTRIBUTE | DESCRIPTION | SUB ATTRIBUTES |
|-----------|-------------|----------------|
| code | Unique code of the store | NA |
| name | Name of the store | NA |

## Tender Profile (tenderProfile)

This tenderProfile is used to write rules based on the payment mode combinations.

| ATTRIBUTE | DESCRIPTION | SUB ATTRIBUTES |
|-----------|-------------|----------------|
| amount | The amount paid for a transaction using the payment mode | NA |
| code | Returns code or name of the combination created in loyalty for the payment mode | contains, exists, isEmpty, isNotNull, isNull, isValidDate, matches and notExists |
| notes | Returns notes described for the tender | contains, exists, isEmpty, isNotNull, isNull, isValidDate, matches and notExists |

## Current Customer Partner (currentCustomerPartner)

This currentCustomerPartner consists of attributes related to fetching customer partner's profile information and loyalty details as listed in the table below.

| ATTRIBUTE | DESCRIPTION | SUB ATTRIBUTES |
|-----------|-------------|----------------|
| additionalBenefitsInMembershipCycle | Additional benefits available during the membership life cycle | NA |
| benefitsAvailedInActiveMembership | Benefits that are available with the active membership | NA |
| benefitsAvailedInEventCycle | Benefits available during the event cycle | NA |
| benefitsLimit | The maximum or minimum limit of benefit that can be availed | NA |
| countBillsCurrentCycle | Calculate the number of bills generated during the current cycle | NA |
| countPromotionPointsIssuedCurrentCycle | Calculate the number of points issued during the current cycle | NA |
| daysElapsedInCurrentCycle | Number of days elasped in current cycle for customer partner | NA |
| isLinkedOnSpecificDate | Checks if the current cutomer partner is linked on a specific date or not. | NA |
| isLinkedTo | Checks if the current cutomer partner is linked to a loyalty program or not | NA |
| sumPurchaseValueCurrentCycle | Sum of all purchase value during current cycle | NA |

## Current Tracker (currentTracker)

This currentTracker is used to write rules based on the recent tracker details.

## Current Tracker Condition (currentTrackerCondition)

This currentTrackerCondition is used to write rules based on the recent tracker condition.

| ATTRIBUTE | DESCRIPTION | SUB ATTRIBUTES |
|-----------|-------------|----------------|
| numberOfVisits | Number of visits | isNotNull and isNull |
| trackedValue |  | interval, isNotNull and isNull |
| trackerConditionName | Name of the tracker condition | contains, exists, isEmpty, isNotNull, isNull, isValidDate, matches and notExists |
| trackerConditionPeriod | Duration of the tracker condition | isNotNull and isNull |
| trackerCurrAggr |  | interval, isNotNull and isNull |
| trackerInitialPrevAggr |  | interval, isNotNull and isNull |
| trackerName | Name of the tracker | contains, exists, isEmpty, isNotNull, isNull, isValidDate, matches and notExists |
| trackerPrevAggr |  | interval, isNotNull and isNull |

## Group Primary Customer (groupPrimaryCustomer)

This groupPrimaryCustomer is used to write rules for the primary customer.

| ATTRIBUTE | DESCRIPTION | SUB ATTRIBUTES |
|-----------|-------------|----------------|
| avgBasketSize | Lets you evaluate conditions on the average basket size of the primary customer.<br/>(The ratio of the total quantities of line items purchased to the total number of transactions made). | isNotNull and isNull |
| avgSpendPerVisit | Lets you evaluate conditions on the average spend per visit by the primary customer.<br/>(Total purchases amount)/ (Total number of transactions made). | interval, isNotNull and isNull |
| clusterValueExcludes |  | NA |
| clusterValueIncludes |  | NA |
| countActiveCouponsInCouponSeries | Lets you evaluate conditions on the count of active coupons of the primary customer. | NA |
| currentAllPoints |  | interval, isNotNull and isNull |
| currentNonRedeemablePoints | Lets you evaluate conditions on the current points that are not redeemable by the primary customer. | interval, isNotNull and isNull |
| currentPoints | Lets you evaluate conditions on the active points of the primary customer. | interval, isNotNull and isNull |
| customFieldValueExcludes | Lets you evaluate conditions on a custom field value of the customer. (Any value other than the value you mention here). | NA |
| customFieldValueExists | Lets you evaluate conditions on a custom field value of the primary member ( if a specific custom field value exists for the member). | NA |
| customFieldValueIncludes | Lets you evaluate conditions on a custom field value of the primary member (if a specific custom field value exists for the member). | NA |
| doesProfileExists | Lets you evaluate conditions on the availability of the primary member's profile/account. | NA |
| email | Lets you evaluate conditions on email of the primary customer. | contains, exists, isEmpty, isNotNull, isNull, isValidDate, matches and notExists |
| extField |  | NA |
| externalId | Lets you evaluate conditions on the external ID values of the primary member. | contains, exists, isEmpty, isNotNull, isNull, isValidDate, matches and notExists |
| firstname | Lets you evaluate conditions on the first name of the primary customer. | contains, exists, isEmpty, isNotNull, isNull, isValidDate, matches and notExists |
| hasInstoreProfile | Lets you evaluate conditions based on the primary customer's Instore profile. | isNotNull and isNull |
| hasWeChatProfile | Lets you evaluate conditions based on the primary customer's WeChat profile. | isNotNull and isNull |
| includesLabelRegex |  | NA |
| initialCurrentAllPoints |  | interval, isNotNull and isNull |
| initialCurrentPoints |  | interval, isNotNull and isNull |
| initialLifetimePoints |  | interval, isNotNull and isNull |
| initialLifetimePurchase |  | interval, isNotNull and isNull |
| initialSlabName |  | contains, exists, isEmpty, isNotNull, isNull, isValidDate, matches and notExists |
| initialSlabNumber |  | isNotNull and isNull |
| isControl |  | isNotNull and isNull |
| isGroupMember |  | isNotNull and isNull |
| isLoyal |  | isNotNull and isNull |
| isPrimary |  | isNotNull and isNull |
| isRegisteredOn |  | NA |
| isSecondary |  | isNotNull and isNull |
| isTest |  | isNotNull and isNull |
| joinDate | Lets you evaluate conditions based on the registration date of the primary customer. | dateDiff, day dayOfMonth, daysDiff, daysDiffFromString, isAfter, isHourBetween, isNotNull, isNull, isTimeBetween, isValid, isWeekday, isWeekend, minutesDiff, month, year |
| lastname | Lets you evaluate conditions based on the last name of the primary customer. | contains, exists, isEmpty, isNotNull, isNull, isValidDate, matches and notExists |
| lifetimeAllPoints |  | interval, isNotNull and isNull |
| lifetimeNonRedeemablePoints |  | interval, isNotNull and isNull |
| lifetimePoints | Lets you evaluate conditions on lifetime points of the primary customer. | interval, isNotNull and isNull |
| lifetimePurchase | Lets you evaluate conditions on lifetime purchases of the primary customer. | interval, isNotNull and isNull |
| mobile | Lets you evaluate conditions on the mobile number of the primary customer. | contains, exists, isEmpty, isNotNull, isNull, isValidDate, matches and notExists |
| name | Lets you evaluate conditions based on the name of the primary customer. | contains, exists, isEmpty, isNotNull, isNull, isValidDate, matches and notExists |
| numberOfRedemptionsInCalendarMonth | Lets you evaluate conditions based on the number of times points are redeemed in the current calendar month. | isNotNull and isNull |
| numberOfRedemptionsInCalendarWeek | Lets you evaluate conditions based on the number of times points are redeemed in the current calendar week. (Monday to Sunday) | isNotNull and isNull |
| numberOfRedemptionsInPastDays | Lets you evaluate conditions based on the number of times points are redeemed in the last x days. | NA |
| numberOfRedemptionsToday | Lets you evaluate conditions based on the number of times points are redeemed on the present day. | isNotNull and isNull |
| numberOfTxns | Lets you evaluate conditions on the total number of transactions by a primary customer. | isNotNull and isNull |
| numberOfTxnsToday | Lets you evaluate conditions on the number of transactions made by the primary customer on the current day. | isNotNull and isNull |
| numberOfVisits | Lets you evaluate conditions on the number of visit primary customer. | isNotNull and isNull |
| pointsRedeemedInCalendarMonth | Lets you evaluate conditions on points redeemable by a primary customer in the calendar month. | interval, isNotNull and isNull |
| pointsRedeemedInCalendarWeek | Lets you evaluate conditions on points redeemable by a primary customer in the current calendar week. | interval, isNotNull and isNull |
| pointsRedeemedInPastDays | Lets you evaluate conditions on points redeemable by a primary customer in the last x days. | NA |
| pointsRedeemedToday | Lets you evaluate conditions on points redeemable by a primary customer on the present day. | interval, isNotNull and isNull |
| slabChangeDate | Lets you evaluate conditions based on the tier change date by the primary customer. | dateDiff, day dayOfMonth, daysDiff, daysDiffFromString, isAfter, isHourBetween, isNotNull, isNull, isTimeBetween, isValid, isWeekday, isWeekend, minutesDiff, month, year |
| slabExpiryDate | Lets you evaluate conditions based on the tier expiry date of the primary customer. | dateDiff, day dayOfMonth, daysDiff, daysDiffFromString, isAfter, isHourBetween, isNotNull, isNull, isTimeBetween, isValid, isWeekday, isWeekend, minutesDiff, month, year |
| slabName | Lets you evaluate conditions on the tier name of a primary customer. | contains, exists, isEmpty, isNotNull, isNull, isValidDate, matches and notExists |
| slabNumber | Lets you evaluate conditions on the tier number of the primary customer. | isNotNull and isNull |
| trackerValueBeforeEvent |  | NA |

## Organization (organization)

This organization is used to write rules based on the organization's details.

## Program (program)

This program is used to write rules based on the loyalty program details.

## Referrer Code (referrerCode)

This referrerCode is used to write rules based on the referrer code details.

| ATTRIBUTE | DESCRIPTION | SUB ATTRIBUTES |
|-----------|-------------|----------------|
| refereeRegCount | Total number of registered referee | isNotNull and isNull |
| refereeTxnCount | Number of transactions done by the referee | isNotNull and isNull |