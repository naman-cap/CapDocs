---
title: Profiles & attributes
excerpt: This page provides the list of attributes supported for each profile.
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
## Expressions on customer profile (currentCustomer)

This profile consists of attributes related to fetching customers' profile information and loyalty details as listed in the table below. Use this profile to execute actions based on loyalty information and profile details of customers when they make transactions.

| ATTRIBUTE | DESCRIPTION | SUB ATTRIBUTES | DESCRIPTION | SYNTAX AND EXAMPLE | DETAILED DOCUMENTATION |
|-----------|-------------|----------------|-------------|-------------------|----------------------|
| name | **Customer's full name**<br/>Data Type : String<br/>Meaning : Customer's full name<br/>name = firstName + " " + lastName | NA | NA | Syntax: **[currentCustomer.name == "customer full name"]**<br/>Example: currentCustomer.name == "Shreya Badia"<br/>currentCustomer.name.contains("santhosh kumar") | [Learn More](https://docs.capillarytech.com/docs/currentcustomer-namefirst-namelast-name-expressions#attribute-name) |
| firstname | **Customer's first name**<br/>Data Type : String<br/>Customer's first name<br/>name = firstName | NA | NA | Syntax: currentCustomer.firstname == "customer first name"<br/>Example: currentCustomer.firstname=="prakhar"<br/>currentCustomer.firstname=="Raj"<br/>currentCustomer.firstname.matches("santhosh") | [Learn More](https://docs.capillarytech.com/docs/currentcustomer-namefirst-namelast-name-expressions#attribute-name) |
| lastname | **Customer's last name**<br/>Data Type : String<br/>Customer's last name<br/>name = " " + lastName | NA | NA | Syntax: currentCustomer.lastname == "customer Last name"<br/>currentCustomer.lastname=="verma"<br/>currentCustomer.lastname.matches("kumar") | [Learn More](https://docs.capillarytech.com/docs/currentcustomer-namefirst-namelast-name-expressions#attribute-name) |
| avgBasketSize | Data type : Int (Integer)<br/>The ratio of total items purchased to the number of transactions of a customer basically on an average how many items are there in a customer's Cart. **avgBasketSize = (Sum of total lineitems)/Number of Transaction (aka Count of transaction) or sum of (number of lineitems) in all bills / number of bill** | NA | NA | Syntax: currentCustomer.avgBasketSize (operators like &lt;.&gt;,==,&gt;=,&lt;=) Value<br/>Example: currentCustomer.avgBasketSize&gt;1 | [Learn More](https://docs.capillarytech.com/docs/attributes-kpis#1-avgbasketsize) |
| avgSpendPerVisit | Return Data Type: BigDecimal<br/>Attribute Label: Avg. Spend per Visit<br/>**Meaning: Average purchases amount of a customer per visit.<br/>AvgSpendPerVisit = lifetimePurchase / numberOfVisits** | NA | NA | Syntax: currentCustomer.avgSpendPerVisit(operators like &lt;.&gt;,==,&gt;=,&lt;=) Value <br/>Example: currentCustomer.avgBasketSize==10&&(currentCustomer.avgSpendPerVisit==10) | [Learn More](https://docs.capillarytech.com/docs/attributes-kpis#2-avgspendpervisit) |
| clusterValueIncludes() | return data type: Boolean<br/>Attribute Label: User Segment (cluster name)and sub-segments<br/>**Meaning: To check customers of a particular cluster (segment) aka checks If customer belongs to particular segment** | clusterValueIncludes(String clusterName, String clusterValue) | cluster Name: Name of the cluster and Sub Segment/cluster Value of the cluster where the current customer might belongs to. | Syntax: currentCustomer.clusterValueIncludes("cluster name","cluster sub components")<br/>Example : currentCustomer.clusterValueIncludes("Behavioral Segment","Adventure-seeker") | [Learn More](https://docs.capillarytech.com/docs/user-segment-ei-attributes) |
| clusterValueExcludes() | return data type: Boolean<br/>Attribute Label: User Segment<br/>**Meaning: To check customers who are not part of a particular cluster or returns False If the current customer is not a part of the cluster passed in the attribute and sub-attribute.** | clusterValueExcludes(String clusterName, String clusterValue) | cluster Name: Name of the cluster and Sub Segment/cluster Value of the cluster where the current customer might belongs to. | Syntax: currentCustomer.clusterValueExcludes("cluster name","cluster sub components")<br/>Example: currentCustomer.clusterValueExcludes("Behavioral Segment","Adventure-seeker") | [Learn More](https://docs.capillarytech.com/docs/user-segment-ei-attributes) |
| currentPoints | Data type: BigDecimal<br/>Meaning: customer's current redeemable points**.<br/>current points = overall earned points - overall returned points - overall redeemed points - overall expired points** | &lt;Selection Drop Down&gt; Values like isNull, isNotNull, Interval . | isNull - checks if the value is Null i.e. the value was not passed from source isNotNull - checks if the the Value is NOT Null. | Syntax: currentCustomer.currentPoints (Operators like &gt;,&lt;, ==, &gt;=, &lt;= VALUE)<br/>Example : currentCustomer.currentPoints&gt;500 | [Learn More](https://docs.capillarytech.com/docs/attributes-on-points#attribute-currentpoints) |
| currentNonRedeemablePoints | Data type: BigDecimal<br/>customer's current promised points<br/>**current promised points = overall earned points - overall returned points - overall expired points ** | &lt;Selection Drop Down&gt; Values like isNull, isNotNull, Interval . | isNull - checks if the value is Null i.e. the value was not passed from source isNotNull - checks if the the Value is NOT Null. | | |
| customFieldValueExcludes() | Data Type: Boolean<br/>**Meaning: Returns False If customer has some custom field present with particular value.**<br/>Example: currentCustomer.customFieldValueExcludes("area","XYZ"), where area is a custom field and XYZ id one of the value of the Custom Field. | customFieldValueExcludes("Field","Value")<br/>Sub-Attributes: Custom field name and Custom field value. | Custom Field Name: The name of the custom Field generated.<br/>Custom Field Value: The value of the custom field passed as a sub-attribute. | currentCustomer.customFieldValueExcludes(String clusterName, String clusterValue)<br/>Example: currentCustomer.customFieldValueExcludes("gender","Male") | [Learn More](https://docs.capillarytech.com/docs/custom-field#customfieldvalueexcludes) |
| customFieldValueIncludes() | Data Type: Boolean<br/>**Meaning: checks If customer has some custom field present with particular value.**<br/>Example:currentCustomer.customFieldValueIncludes("area","XYZ"), where area is a custom field and XYZ id one of the value of the Custom Field. | customFieldValueIncludes("Field","Value")<br/>Sub-Attributes: Custom field name and Custom field value. | Custom Field Name: The name of the custom Field generated.<br/>Custom Field Value: The value of the custom field passed as a sub-attribute. | currentCustomer.customFieldValueIncludes(String clusterName, String clusterValue)<br/>Example: currentCustomer.customFieldValueIncludes("gender","Male") | [Learn More](https://docs.capillarytech.com/docs/custom-field) |
| email | Data type: String<br/>**Meaning: Customer's email ID or checks which organization is in the email of Customer.** | NA | NA | Syntax: currentCustomer.email.matched("customer email id") Or currentCustomer.email.contains("@companyX.com")<br/>Example: currentCustomer.email.matches("sant@capillarytech.com") | [Learn More](https://docs.capillarytech.com/docs/currentcustomer-attributes#email) |
| externalId | Data type: String<br/>Customer's external id : Let's say to issue coupons to customers whose external ID contains a certain serial number (say 1234), use the following condition: customerCustomer.externalId.contains("1234") | NA | NA | Syntax: currentCustomer.externalId.matches("....", currentCustomer.externalId.contains(".....")<br/>Example: customerCustomer.externalId.contains("1234") | [Learn More](https://docs.capillarytech.com/docs/currentcustomer-attributes#external-id-externalid) |
| initialCurrentPoints | Data Type: BigDecimal<br/>**Meaning: customer's current redeemable points before current event or Active points of a customer before evaluating the event<br/>initial current points = overall earned points (before evaluating a event) - overall returned points(before evaluating a event) - overall redeemed points(before evaluating a event) - overall expired points(before evaluating a event)** | NA | NA | Syntax: currentCustomer.initialCurrentPoints (Operators like &gt;,&lt;,==,&gt;=,&lt;=,!=) Value<br/>Example: currentCustomer.initialCurrentPoints &gt; 500 or<br/>Example -&gt; currentCustomer.initialCurrentPoints != currentCustomer.currentPoints | [Learn More](https://docs.capillarytech.com/docs/attributes-on-points#attribute-initialcurrentpoints) |
| initialLifetimePoints | Data Type: BigDecimal<br/>**Meaning: customer's lifetime redeemable points before current event<br/>initialLifetimePoints = customer lifetime earned redeemable points - returned points since start(before evaluating an event)** | NA | NA | Syntax: currentCustomer.initialLifetimePoints (Operators like &gt;,&lt;,==,&gt;=,&lt;=,!=) Value<br/>Example : Suppose you want to issue coupons to those customers whose lifetime purchase is greater than 5000. Then use the following condition: currentCustomer.lifetimePurchase&gt;5000 | [Learn More](https://docs.capillarytech.com/docs/attributes-on-points#intiallifetimepoints) |
| initialSlabName | Return type: Boolean<br/>data type: string<br/>Customer's tier name before evaluating the event or before current event | NA | NA | Syntax: currentCustomer.initialSlabName("SLAB NAME")<br/>Example -&gt;(currentCustomer.initialSlabName=="Normal"\\|\\|currentCustomer.initialSlabName=="Silver"<br/>\\|\\|currentCustomer.initialSlabName=="Bronze"\\|\\|currentCustomer.initialSlabName=="Gold") | [Learn More](https://docs.capillarytech.com/docs/slab-attributes-for-currentcustomer-profile#5-attributes-based-on-slab-information) |
| initialSlabNumber | Data type: Int<br/>Customer's tier number before evaluating the event | NA | NA | Syntax: currentCustomer.initialSlabNumber(Operators like &gt;,&lt;,==,&gt;=,&lt;=,!=) Value <br/>Example :- lets say you want to give reward points only when current slab number is greater than initial slab number and current Slab Number is equals 3 then  ==&gt; ((currentCustomer.slabNumber &gt; currentCustomer.initialSlabNumber) && (currentCustomer.slabNumber == 3)) | [Learn More](https://docs.capillarytech.com/docs/slab-attributes-for-currentcustomer-profile#5-attributes-based-on-slab-information) |
| joinDate | Data Type: Date<br/>Registration date of a customer | dateDiff, day, dayOfMonth, daysDiff, daysDiffFromString, isAfter, isHourBetween, isTimeBetween, isValid, isWeekday, isWeekend, month, and year<br/>For examples on using date formats, see the Date Format section on Using Operators in Rule Expressions | | Example :currentTxn.date.dateDiff(currentCustomer.joinDate)&lt;=7&&(currentTxn.value&gt;=250) | [Learn More](https://docs.capillarytech.com/docs/currentcustomer-attributes#joindate) |
| lifetimePoints | Data Type: BigDecimal<br/>Total points earned by a customer from the date of registration<br/>lifetime points = overall redeemable points earned - overall returned points | NA | NA | Syntax: currentCustomer.lifetimePoints(Operators like &gt;,&lt;,==,&gt;=,&lt;=,!=) Value<br/>Example :- currentCustomer.initialLifetimePoints&lt;500&&(currentCustomer.lifetimePoints&gt;=500<br/>Example:- currentCustomer.lifetimePoints&gt;30 | [Learn More](https://docs.capillarytech.com/docs/attributes-on-points#lifetimepoints) |
| lifetimeNonRedeemablePoints | Data Type: BigDecimal<br/>customer earned promised points - returned points since start<br/>lifetime non redeemable points = overall non redeemable  points earned - overall non redeemable returned points | NA | NA | Syntax: currentCustomer.lifetimeNonRedeemablePoints.(Operators like &gt;,&lt;,==,&gt;=,&lt;=,!=) Value<br/>Example:- currentCustomer.lifetimeNonRedeemablePoints&gt;30 | [Learn More](https://docs.capillarytech.com/docs/attributes-on-points#lifetimenonredeemablepoints) |
| lifetimePurchases | data type: BigDecimal<br/>customer's purchase since start including current transaction's purchase<br/>lifetime purchase = sum of all purchase - sum of refund amount | NA | NA | Syntax: currentCustomer.lifetimePurchase[Operators][value]<br/>Example: currentCustomer.lifetimePurchase&lt;=1000 | [Learn More](https://docs.capillarytech.com/docs/lifetime-purchase) |
| mobile | Data Type : IntegeMobile number of a customer(Passed in the request Payload) | NA | NA | | [Learn More](https://docs.capillarytech.com/docs/currentcustomer-attributes#mobile) |
| numberOfTxns | Data type: int<br/>Total number of transactions made by a customer from the date of registration | NA | NA | | [Learn More](https://docs.capillarytech.com/docs/attributes-kpis#3-numberoftxns) |
| numberOfTxnsToday | Data type : int<br/>Number of transactions made by a customer the current day | NA | NA | Syntax: currentCustomer.numberofTxnsToday (Operators like &gt;,&lt;,&gt;=,&lt;=,==) Value<br/>Example: (currentCustomer.numberOfTxnsToday == 1)<br/>Example: currentCustomer.slabNumber==5&&(currentCustomer.numberOfVisits==1)&&(currentCustomer.numberOfTxnsToday==1) | [Learn More](https://docs.capillarytech.com/docs/attributes-kpis#4-numberoftxnstoday) |
| numberOfVisits | Data type : int<br/>number of unique days when customer made transaction<br/>Total number of times a loyalty customer visited your stores (made transactions in different days lets say customer visited the store 7 times in a week but made a transaction in 5 days so total visits == 5) | NA | NA | Syntax: currentCustomer.numberOfVisits (Operators like &gt;,&lt;,&gt;=,&lt;=,==) Value<br/>(Example: currentTxn.basketIncludes("RetekClass","T Shirt")&&(currentTxn.value&gt;3000)&&(currentCustomer.numberOfVisits==1) | [Learn More](https://docs.capillarytech.com/docs/attributes-kpis#5-numberofvisits) |
| SlabName | Data type: String<br/>Name of the current loyalty tier of a customer | NA | NA | Syntax: currentCustomer.SlabName (Operators like ==, matches, contains)"SLAB NAME"<br/>Example : currentTxn.value&gt;100&&(currentCustomer.slabName.matches("SILVER))<br/>currentCustomer.slabName=="Priviledged" | [Learn More](https://docs.capillarytech.com/docs/attribute-slab-information#slabname) |
| SlabNumber | Data Type: Integer<br/>Serial number of the current tier | NA | NA | Syntax: currentCustomer.SlabNumber(Operators =,&gt;,&lt;,&gt;=,&lt;=)Value<br/>Example : currentCustomer.SlabNumber &gt;4 | [Learn More](https://docs.capillarytech.com/docs/attribute-slab-information#slabnumber) |
| isLoyal | Output type: Boolean<br/>Checks if the current customer is registered in the brand's loyalty program | NA | NA | Example: currentCustomer.isLoyal==true | [Learn More](https://docs.capillarytech.com/docs/currentcustomer-attributes#isloyal) |
| hasInstoreProfile | Output type: Boolean<br/>Checks if the current customer has InStore profile | NA | NA | Example: currentCustomer.hasInstoreProfile==true | [Learn More](https://docs.capillarytech.com/docs/currentcustomer-attributes#hasinstoreprofile) |
| hasWeChatProfile | Output type: Boolean<br/>Checks if the current customer has WeChat profile | NA | NA | Example: currentCustomer.hasWeChatProfile==true | [Learn More](https://docs.capillarytech.com/docs/currentcustomer-attributes#haswechatprofile) |
| doesProfileExists | Output type: Boolean<br/>Checks if a specific profile | NA | NA | Example: currentCustomer.doesProfileExists==true | Learn More |

## Expressions on current transaction profile (currentTxn)

The currentTxn profile returns the details of a transaction. Use this profile to write rules on transactions, basket size, custom fields, and so on. Refer to the table below for all the supported attributes of customerTxn. [Learn More](https://docs.capillarytech.com/docs/profile-current-transactioncurrenttxn)

> 📘
>
> * Value = Gross amount (rate\*quantity)
> * Rate = Gross price of a line item
> * Amount = Value-discoun

| ATTRIBUTE | DESCRIPTION OF ATTRIBUTE | SUB ATTRIBUTES | DESCRIPTION OF SUB-ATTRIBUTE | SYNTAX AND EXAMPLE | DETAILED DOCUMENTATION |
|-----------|-------------------------|----------------|------------------------------|-------------------|----------------------|
| number | Transaction number of the current transaction | NA | NA | | [Learn More](https://docs.capillarytech.com/docs/attributes-based-on-customer-identity) |
| basketSum() | Type: BigDecimal<br/>**Meaning: sum of amount of all lineitems which are matching input inventory attribute and their inventory attribute value matches exactly with input attribute value** | currentTxn.basketSum("Attribute Name","Inventory Value") | Attribute Name : The custom Field Name<br/>Attribute Value: Custom Field Value | Example currentTxn.basketSum("company_code","PETRON"), this will give the sum of amount of all the petron products of company_code inventory. | [Learn More](https://docs.capillarytech.com/docs/a#basketsum) |
| basketSumRegex() | Data type : BigDecimal<br/>**Meaning:- sum of amount of all lineitems which are matching input inventory attribute and their inventory attribute value matches with input regex.**<br/>example :- currentTxn.basketSumRegex("company_code","PET.*") | currentTxn.basketSumRegex("Attribute Name","Attribute  Regex") | 1.Attribute Name : The custom Field Name.<br/>2. Sub Attribute Value Regex: Regex to check the match with the Value. | currentTxn.basketSumRegex("company_code","PET.*") | [Learn More](https://docs.capillarytech.com/docs/a#basketsumregex) |
| basketQtyRegex() | Type : BigDecimal<br/>**Meaning:- sum of quantity of all lineitems which are matching input inventory attribute and their inventory attribute value matches with input regex**<br/>Example :- currentTxn.basketQtyRegex("company_code","PET.*") | currentTxn.basketQtyRegex("Attribute Name","Attribute Field Value Regex") | 1. Sub Attribute Name : The custom Field Name.<br/>2. Sub Attribute Value Regex: Regex to check the match with the Value. | Syntax: currentTxn.basketQtyRegex("Attribute Name","Attribute Field Value Regex")<br/>Example: currentTxn.basketQtyRegex("company_code","PET.*") | [Learn More](https://docs.capillarytech.com/docs/profile-current-transactioncurrenttxn#basketqtyregex) |
| basketCount() | Type :- int<br/>**Meaning :- count of lineitems from request payload which are matching input inventory attribute and their inventory attribute value matches exactly with input attribute value.**<br/>Example :- currentTxn.basketCount("company_code","PETRON") | currentTxn.basketCount("Attribute Name","Attribute Field Value") | 1. Sub Attribute Name : The custom Field Name<br/>2. Sub Attribute Value: Value of the sub-Attribute. | Example: currentTxn.basketCount("Dvs","DVS_Flag")&gt;1 | [Learn More](https://docs.capillarytech.com/docs/a#basketcount) |
| basketCountRegex() | Type:- int<br/>**Meaning:- count of lineitems from request payload which are matching input inventory attribute and their inventory attribute value matches with input regex**<br/>currentTxn.basketCountRegex("company_code","PET.*") | Pass attribute and regex of the attribute that you want to validate<br/>currentTxn.basketCountRegex("Inventory Attribute","Regex") | 1. Sub Attribute Name : The Inventory Attribute name.<br/>2. Sub Attribute Value Regex: Regex to check the value match. | Syntax: currentTxn.basketCountRegex("Inventory Attribute","Regex")<br/>Example: currentTxn.basketCountRegex("company_code","PET.*") | |
| basketIncludes() | Type :- Boolean<br/>**Meaning: return true if any lineitem matches input inventory attribute and their inventory attribute value matches exactly with input attribute value** | Pass attribute and value pair.<br/>currentTxn.basketIncludes("Attribute Name","Attribute Value") | 1. Sub Attribute Name : The Inventory Attribute name.<br/>2. Sub Attribute Value: Inventory attribute value | Syntax: currentTxn.basketIncludes("Attribute Name","Attribute Value")<br/>Example : currentTxn.basketIncludes("company_code","PETRON") | [Learn More](https://docs.capillarytech.com/docs/a#basketincludes) |
| basketExcludes() | Type :- Boolean<br/>**Meaning:- return false if any lineitem matches input inventory attribute and their inventory attribute value matches exactly with input attribute value** | Pass attribute and value pair.<br/>currentTxn.basketExcludes("Attribute Name","Attribute Value") | 1. Sub Attribute Name : The Inventory Attribute name.<br/>2. Sub Attribute Value: Inventory attribute value | Syntax: currentTxn.basketExcludes("Attribute Name","Attribute Value")<br/>Example: currentTxn.basketExcludes("company_code","PETRON") | [Learn More](https://docs.capillarytech.com/docs/a#basketexcludes) |
| basketIncludesRegex() | Type:- Boolean<br/>**Meaning:- return true if any lineitem matches input inventory attribute and their inventory attribute value matches with input regex.** | Pass attribute and value pair.<br/>currentTxn.basketIncludesRegex("Attribute Name","Attribute Regex") | 1. Sub Attribute Name : The Inventory Attribute name.<br/>2. Sub Attribute Value Regex: Regex to check the value match. | Syntax: currentTxn.basketIncludesRegex("Attribute Name","Attribute Regex")<br/>Example:- currentTxn.basketIncludesRegex("company_code","PET.*") | |
| basketExcludesRegex() | Type:- Boolean<br/>Meaning:- **return false if any lineitem matches input inventory attribute and their inventory attribute value matches with input regex or the bill does not include products whose item attribute does not match the given regular expression it returns False** | Pass attribute and value pair.<br/>currentTxn.basketExcludesRegex("Inventory Attribute Name","Inventory Attribute value regex") | 1. Sub Attribute Name : The Inventory Attribute name.<br/>2. Sub Attribute Value Regex: Regex to check the value match. | Syntax: currentTxn.basketExcludesRegex("Inventory Attribute Name","Inventory Attribute value regex")<br/>Example: currentTxn.basketExcludes("Jeans","XXX") | |
| basketSumIf | Type : Boolean<br/>Meaning:- **Returns the sum of amount of line items (in basket) that satisfies a specific condition. You can define conditions based on the amount, discount, quantity, rate, or value of line items in the basket. For example, sum of line items amount in the basket whose quantity is more than 2.**<br/>Example : currentTxn.basketSumIf("DISCOUNT","GREATER_THAN","10")<br/>currentTxn.basketSumIf("RATE","GREATER_THAN_EQUAL_TO","60") | Supported Sub-Attribute:<br/>AMOUNT, DISCOUNT, QUANTITY, RATE, and VALUE | Supported parameters:<br/>AMOUNT, DISCOUNT, QUANTITY, RATE, and VALUE<br/>Supported Operators:<br/>GREATER_THAN, LESS_THAN, LESS_THAN_EQUALS_TO, GREATER_THAN_EQUALS_TO, EQUALS_TO, NOT_EQUALS_TO | Standard expression:<br/>**basketSumIf("parameter", "expression","value")[operator]value)**<br/>Example: From the basket items, calculate the total amount of line items whose quantity is greater than or equal to 3. If this value is greater than 100, then execute a specific action.<br/>currentTxn.basketSumIf("QUANTITY","GREATER_THAN_EQUAL_TO","3")&gt;100 | [Learn More](https://docs.capillarytech.com/docs/a#basketsumif) |
| basketCountIf | type:- BigDecimal<br/>Meaning :- **Returns the count of line items of the basket that satisfies a specific condition. You can define condition based on the amount, discount, quantity, rate, or value of line items in the basket.**<br/>Example :- currentTxn.basketCountIf("DISCOUNT","GREATER_THAN","10") | Supported Sub-Attribute:<br/>AMOUNT, DISCOUNT, QUANTITY, RATE, and VALUE | Supported parameters:<br/>AMOUNT, DISCOUNT, QUANTITY, RATE, and VALUE<br/>Supported Operators:<br/>GREATER_THAN, LESS_THAN, LESS_THAN_EQUALS_TO, GREATER_THAN_EQUALS_TO, EQUALS_TO, NOT_EQUALS_TO | expression:<br/>**basketCountIf("parameter", "expression","value")[operator]value)**<br/>Example: Count of line items from the basket whose amount is less than 50. If this count exceeds 3, then execute an action.<br/>currentTxn.basketCountf("AMOUNT","LESS_THAN","50")&gt;3 | [Learn More](https://docs.capillarytech.com/docs/a#basketqtyif) |
| basketQtyIf | type:- BigDecimal<br/>Meaning:- **Total number of items in the bill - irrespective of quantity of each item or we can say that its a number of lineitems passed in payload**<br/>currentTxn.basketQtyIf("DISCOUNT", "LESS_THAN", "10") | Supported Sub-Attribute:<br/>AMOUNT, DISCOUNT, QUANTITY, RATE, and VALUE | Supported parameters:<br/>AMOUNT, DISCOUNT, QUANTITY, RATE, and VALUE<br/>Supported Operators:<br/>GREATER_THAN, LESS_THAN, LESS_THAN_EQUALS_TO, GREATER_THAN_EQUALS_TO, EQUALS_TO, NOT_EQUALS_TO | Standard expression:<br/>**basketQtyIf("attribute", "expression","value")[operator]value)**<br/>Example : Calculate the sum of the quantity of all line items in the basket whose discount value is $10 or above. If the quantity of those line items is more than 20, execute an  action.<br/>currentTxn.basketQtyIf("DISCOUNT","LESS_THAN_EQUALS_TO","10")&gt;20 | [Learn More](https://docs.capillarytech.com/docs/a#basketqtyif) |
| basketSize | Type: Int<br/>Meaning: **number of lineitems passed in payload or Total number of items in the bill - irrespective of quantity of each item** | NA | NA | currentTxn.basketSize&lt;10 | [Learn More](https://docs.capillarytech.com/docs/a#basketsize) |
| basketSumGross | Type:- BigDecimal<br/>Meaning:- **sum of gross amount(value) of all lineitems which are matching input inventory attribute and their inventory attribute value matches exactly with input attribute value  Supported attribute names: product name, short description, SKU number, category, and subcategory.**<br/>Example :- currentTxn.basketSumGross("company_code","PETRON") | Sub Attributes: Inventory Attribute Name and Inventory Attribute Value. | 1. Sub Attribute Name : The Inventory Attribute name.<br/>2. Sub Attribute Value: Inventory attribute value | Standard expression:<br/>**currentTxn.basketSumGross("Attribute Name","Inventory Value")[Operator][Value]**<br/>Sample expression: If the total gross amount of line items in the basket with attribute name value is "demoname", exceeds 2000, then execute a specific action.<br/>**currentTxn.basketSumGross("name","demoname")&gt;2000** | [Learn More](https://docs.capillarytech.com/docs/a#basketsumgross) |
| basketSumRegexGross | Type:- BigDecimal<br/>Meaning:- **sum of gross amount(value) of all lineitems which are matching input inventory attribute and their inventory attribute value matches exactly with input attribute value or Returns the sum of gross amount of each line item in the basket whose product attribute values match the given regular expression.**<br/>Example :- currentTxn.basketSumGross("company_code","PETRON") | | 1. Sub Attribute Name : The Inventory Attribute name.<br/>2. Sub Attribute Value Regex: Regex to check the value match. | Standard expression:<br/>**currentTxn.basketSumRegexGross("Attribute Name","Attribute Regex")[Operator][Value]**<br/>Sample expression: If the sum of gross amount of line items of the basket, whose attribute name (brand) starts with purple, exceeds 5000 execute a specific action.<br/>**currentTxn.basketSumRegexGross("brand","^purple")&gt;5000** | [Learn More](https://docs.capillarytech.com/docs/a#basketsumregexgross) |
| basketSumRegexBrandGross | **Returns the sum of the gross amount of each line item in the basket whose brand name matches with the given the regular expression. Calculates the total gross amount of basket items whose brand name contains xyz.**<br/>Example: currentTxn.basketSumGrossRegex("company_code","PET.*") | Only one sub-Attribute i.e the Regex. | Regex: Brand name Regex. | Standard expression:<br/>**currentTxn.basketSumRegexCategoryGross("Regex")[Operator][Value]**<br/>Sample expression: If the sum of gross amount of line items of the basket with brand names containing 'demo', exceeds 1000 execute a specific action.<br/>**currentTxn.basketSumRegexCategoryGross("demo*")&gt;1000** | [Learn More](https://docs.capillarytech.com/docs/profile-current-transactioncurrenttxn#basketsumregexbrandgross) |
| basketSumRegexCategoryGross | **Returns the total gross amount of line items in the basket whose category names matches with the given regular expression.**<br/>currentTxn.basketSumRegex CategoryGross("Regex")[Operator][Value]<br/>Example expression: currentTxn.basketSumRegexCategoryGross("^shirt")&gt;1000 If the sum of gross amount of line items of the basket whose category names that start with shirt, exceeds 1000 execute a specific action | Only one sub-Attribute i.e the Regex. | Regex: Product Category Regex | Standard expression:<br/>**currentTxn.basketSumRegexCategoryGross("Regex")[Operator][Value]**<br/>Sample expression:  If the sum of gross amount of line items of the basket whose category names that start with shirt, exceeds 1000 execute a specific action.<br/>**currentTxn.basketSumRegexCategoryGross("^shirt")&gt;1000** | |
| customFieldValueExcludes | Type: Boolean<br/>Meaning: **returns False if input custom field value matches with bill's custom fields**<br/>Example Expression : currentTxn.customFieldValueExcludes("bank","SBI") | customFieldValueExcludes("Field","Value")<br/>Sub-Attribute: Custom-Field Name and Custom Field Value | Sub-Attribute: Custom-Field NAME and Custom Field Value | Expression: currentTxn.customFieldValueExcludes("Brand","Puma") | [Learn More](https://docs.capillarytech.com/docs/profile-current-transactioncurrenttxn#customfieldvalueexcludes) |
| customFieldValueIncludes() | Type: Boolean<br/>Meaning: **returns true if input custom field value matches with bill's custom fields or Check if customer's transaction level custom field value includes the given value**<br/>Example Expression : currentTxn.customFieldValueIncludes("bank","SBI") | customFieldValueIncludes("Field","Value")<br/>Sub-Attribute: Custom-Field NAME and Custom Field Value | Sub-Attribute: Custom-Field NAME and Custom Field Value | Expression: currentTxn.customFieldValueIncludes("Brand","Puma") | [Learn More](https://docs.capillarytech.com/docs/profile-current-transactioncurrenttxn#customfieldvalueincludes) |
| discount | Type: BigDecimal<br/>**Discount availed for a transaction** | NA | NA | currentTxn.discount&gt;200 | [Learn More](https://docs.capillarytech.com/docs/profile-current-transactioncurrenttxn#discount) |
| date | Data Type : Date<br/>Meaning: **Date of current transaction under evaluation ** | dateDiff, day, dayOfMonth, daysDiff, daysDiffFromString, isAfter, isHourBetween, isTimeBetween, isValid, isWeekday, isWeekend, month, and year | [Link](https://docs.capillarytech.com/docs/rule-writing#date-operations) | Example of year Attribute :returns the year from the date e.g. **currentTxn.date.year( )&gt;=1981** | [Learn More](https://docs.capillarytech.com/docs/attribute-date-transactionpurchase-date) |
| points | Type: BigDecimal<br/>**Meaning :Total points issued for a transaction. Points include only regular points earned on transactions made as part of a loyalty program.** | Sub-Attributes: pointsForUser, pointsForUserGroup | pointsForUser: Total points issued for a transaction for an individual user.<br/>pointsForUserGroup: Total points issued for a transaction for a specific user group. | Example:  Issue coupons if the total regular redeemable points for the current transaction exceed 100:<br/>**currentTxn.points &gt; 100** | [Learn More](https://docs.capillarytech.com/docs/attribute-transaction-points) |
| promisedPoints | Type: BigDecimal<br/>**Meaning :Total promised points issued for a transaction. Refer to the [glossary section](https://docs.capillarytech.com/docs/glossary-1#delayed-accrual-and-promised-points) for more information on promised points and delayed accrual.** | Sub-Attributes: promisedPointsForUser,<br/>promisedPointsForUserGroup | promisedPointsForUser: Total promised points issued for a transaction for an individual user.<br/>promisedPointsForUserGroup: Total promised points issued for a transaction for a specific user group. | Example: Trigger a message if the promised (non-redeemable) points for this transaction are at least 300.<br/>**currentTxn.promisedPoints &gt;= 300** | [Learn More](https://docs.capillarytech.com/docs/attribute-transaction-points) |
| totalQty | Type: Integer<br/>**Total quantity of all items in a transaction. For instance, if 2 items of a given line item are bought, then the 2 is added to the basket quantity.** | NA | NA | Syntax: currentTxn.totalQty[Operator][Value]<br/>CcurrentTxn.totalQty&gt;4 | |
| value | **Total value of the transaction** | interval | NA | Syntax: currentTxn[Operator][value]<br/>currentTxn.value&gt;8000 | [Learn More](https://docs.capillarytech.com/docs/attribute-transaction-value) |
| notes | **Transaction level notes specified by the cashier during transaction** | contains, exists, isEmpty, isNotNull, isNull, isValidDate, matches, and notExists | NA | currentTxn.notes.exists("Special discount") | [Learn More](https://docs.capillarytech.com/docs/profile-current-transactioncurrenttxn#attribute--note) |

## Current Line Item (currentLineItem)

The currentLineItem profile returns line-items of a current transaction. You can use this profile only on forward cases and when transaction unroll is enabled. Use this profile to check line-item level details of the current transaction as provided in the table below. [Learn More](https://docs.capillarytech.com/docs/profile-current-line-item)

| ATTRIBUTE | DESCRIPTION OF ATTRIBUTE | SUB ATTRIBUTE | DESCRIPTION OF SUB-ATTRIBUTE | SYNTAX AND EXAMPLE | DETAILED DOCUMENTATION |
|-----------|-------------------------|---------------|------------------------------|-------------------|----------------------|
| code | Item code of the line-item as assigned in the inventory | NA | NA | **Syntax: currentLineItem.code[Operator][Value]**<br/>currentLineItem.code!="2"<br/>currentLineItem.code.contains("8907411447726") | [Learn More](https://docs.capillarytech.com/docs/profile-current-line-item#1attribute-code) |
| description | The description specified for the of the line-item in the inventory | NA | NA | **Syntax: currentLineItem.description[Operator][Value]**<br/>Rule: currentLineItem.description.isNotNull() | [Learn More](https://docs.capillarytech.com/docs/profile-current-line-item#2attribute-description) |
| discountPercentage | **lineitem discount % = (discount/amount * 100)**<br/>Meaning: Discount value needs to be passed in api request payloadThe description specified for the line-item in the inventory, passed in the payloads. | NA | NA | **Syntax: currentLineItem.discountPercentage[OPERATORS][VALUE]**<br/>Example : currentLineitem.discPercentage&gt;15 | [Learn More](https://docs.capillarytech.com/docs/profile-current-line-item#3-attribute-discpercentage-line-item-level-discount-percentage) |
| doesItemMatch() | Check if an item code matches with the given code | doesItemMatch("Attribute Name","Value") | 1. Attribute Name<br/>2. Attribute Value | **Syntax: currentLineItem.doesItemMatch("custom field Name","custom field Value")**<br/>currentLineItem.doesItemMatch("BarcodeExclusionNew2020","No")<br/>currentLineItem.doesItemMatch("H2_new","DIS-DISCONTINUE") | [Learn More](https://docs.capillarytech.com/docs/profile-current-line-item#4attribute-doesitemmatch) |
| qty | Quantity of a line-item purchased | NA | NA | Syntax: currentLineItem.qty Operators[VALUE]<br/>currentLineItem.qty&lt;6 | [Learn More](https://docs.capillarytech.com/docs/profile-current-line-item#5-attribute-qty) |
| rate | Actual price of a line-item | NA | NA | Syntax: currentLineItem.rate &gt;1000<br/>currentLineItem.rate&lt;100000&&(currentLineItem.discount==0) | |
| value | Selling price of a line-item | NA | NA | Syntax: currentLineItem.value[operator][Value]<br/>currentLineItem.value&lt;100000&&(currentLineItem.discount==0) | [Learn More](https://docs.capillarytech.com/docs/profile-current-line-item#7-attribute-value) |

## Current Tracker Condition (currentTrackerCondition)

This currentTrackerCondition is used to write rules based on the recent tracker condition. [Learn More](https://docs.capillarytech.com/docs/profile-currenttracker)

| ATTRIBUTE | DESCRIPTION | SUB ATTRIBUTES | EXAMPLE | Detailed Documentation |
|-----------|-------------|----------------|---------|----------------------|
| numberOfVisits | returns number of visits tracked by current tracker. works only for customer visit tracker. | NA | currentTrackerCondition.numberOfVisits&gt;5 | [Learn More](https://docs.capillarytech.com/docs/profile-currenttracker#attribute-numberofvisits) |
| trackedValue | returns tracked value in the tracker for current event. | NA | currentTrackerCondition.trackedValue&gt;5000 | [Learn More](https://docs.capillarytech.com/docs/profile-currenttracker#attribute-trackedvalue-tracked-value) |
| trackerConditionName | returns current tracker condition name | NA | currentTrackerCondition.trackerConditionName=="Cond1" | [Learn More](https://docs.capillarytech.com/docs/profile-currenttracker#attribute-trackerconditionname) |
| trackerConditionPeriod | returns tracking period value | NA | currentTrackerCondition.trackerConditionPeriod&gt;15 | [Learn More](https://docs.capillarytech.com/docs/profile-currenttracker#attribute-trackerconditionperiod) |
| trackerCurrAggr | returns aggregate tracked value in current tracking period for all events including current event | NA | currentTrackerCondition.trackerCurrAggr&gt;5000 | [Learn More](https://docs.capillarytech.com/docs/profile-currenttracker#attribute-trackercurraggr) |
| trackerInitialPrevAggr | returns aggregate tracked value in current tracking period for all events excluding current event | NA | currentTrackerCondition.trackerInitialPrevAggr&gt;4000 | [Learn More](https://docs.capillarytech.com/docs/profile-currenttracker#attribute-trackerinitialprevaggr) |
| trackerName | returns tracker name | NA | currentTrackerCondition.trackerName=="Tracker1" | [Learn More](https://docs.capillarytech.com/docs/profile-currenttracker#attribute-trackername) |
| trackerPrevAggr | returns aggregate tracked value in current tracking period for all events excluding current event | NA | currentTrackerCondition.trackerPrevAggr&gt;4000 | |

## Current Event (currentEvent)

The current event profile returns the event that is triggered by the event listener, i.e., the event on which the rule is created. The following table consists of the descriptions of all the attributes of currentEvent.

| ATTRIBUTE | DESCRIPTION OF ATTRIBUTE | SUB ATTRIBUTES | Detailed Documentation |
|-----------|-------------------------|----------------|----------------------|
| eventType | Name of the event | NA<br/>Example:<br/>currentEvent.eventType=="TransactionAdd" | |
| previousCustomFieldValue() | Value of custom field before updating | currentEvent.previousCustomFieldValue("Custom Field Name","Field Value")<br/>Example:<br/>currentEvent.previousCustomFieldValue("age_group","value") | [Learn More](https://docs.capillarytech.com/docs/current-event#attribute-previouscustomfieldvalue) |
| currentCustomFieldValue() | Value of custom field after updating | currentEvent.currentCustomFieldValue("Custom Field Name","Field Value")<br/>Example:<br/>currentEvent.currentCustomFieldValue("age_group","value") | [Learn More](https://docs.capillarytech.com/docs/current-event#attribute-currenteventcurrentcustomfieldvalue) |
| previousMobile | Customer's mobile number before updating | NA | |
| previousEmail | Customer's email ID before updating | NA | |
| previousExternalID | Customer's external ID before updating | NA | |
| previousName | Customer's full name before updating | NA | |
| previousFirstName | Customer's first name before updating | NA | |
| previousLastName | Customer's last name before updating | NA | |
| currentMobile | Customer's mobile number after updating | NA | |
| currentEmail | Customer's email id after updating | NA | |
| currentExternalID | Customer's external id after updating | NA | |
| currentName | Customer's first name after updating | NA | |
| currentFirstName | Customer's first name after updating | NA | |
| currentLastName | Customer's last name after updating | NA | |
| previousLoyaltyType | Checks the loyalty status of the customer before the current event. Supported only for CustomerUpdate event | Values: LOYALTY/NON_LOYALTY<br/>Example:<br/>currentEvent.previousLoyaltyType=="LOYALTY" or currentEvent.previousLoyaltyType=="NON_LOYALTY" | [Learn More](https://docs.capillarytech.com/docs/current-event#attribute-previousloyaltytype) |
| currentLoyaltyType | Checks the current loyalty status of the customer. Supported only for CustomerUpdate event | Values: LOYALTY/NON_LOYALTY | [Learn More](https://docs.capillarytech.com/docs/current-event#attribute-previousloyaltytype) |
| targetAchieved | Provides the numeric value of the actual achievement of the customer for the given target. | currentEvent.targetAchieved("Target Name") | [Learn More](https://docs.capillarytech.com/docs/current-event#attribute-targetachieved) |
| targetDefined | Provides the numeric value of the target set by the marketing/org user for that customer. | currentEvent.targetDefined("Target Name") | |
| targetExists | Checks if a target value exists or set by the marketing user for that customer. | currentEvent.targetExists("Target Name") | |
| targetGroup | Returns the name of the target group for which the current event is being executed. This is used to target customers in different groups. | currentEvent.targetGroup | |
| targetPeriod | Returns the name of the target period for which the current event is being executed. This is used to target customers across different groups. | currentEvent.targetPeriod | |
| isTargetAchievedEvent | Verifies whether a customer has completed the allotted target before the target period ends.<br/>Applicable only to Target period elapses event. | currentEvent.isTargetAchievedEvent | |
| isUnifiedTargetAchievedEvent | Verifies whether the event that arrived to loyalty promotions is a unified target achieved event.<br/>Applicable only for target-period elapsed event | currentEvent.isUnifiedTargetAchievedEvent | |
| isStreakAchievedEvent | Verifies whether the event that arrived at loyalty promotions is a streak-level achieved event.<br/>Applicable only for target-period elapsed event | currentEvent.isStreakAchievedEvent | |
| isSubTargetAchievedEvent | Verifies whether the event that arrived at loyalty promotions is a sub-target achievement by a user.<br/>Applicable only for target-periods elapsed event | currentEvent.isSubTargetAchievedEvent | |

## Current Store (currentStore)

The currentStore profile is used to check store level details. You can write rules based on the attributes provided in the table below.

| ATTRIBUTE | DESCRIPTION | SUB ATTRIBUTES | Detailed Document |
|-----------|-------------|----------------|------------------|
| code | Unique code of the store | NA | [Learn More](https://docs.capillarytech.com/docs/profile-current-store) |
| name | Name of the store | NA | |

## Tender Profile (tenderProfile)

This tenderProfile is used to write rules based on the payment mode combinations.

| ATTRIBUTE | DESCRIPTION | SUB ATTRIBUTES | DESCRIPTION OF SUB-ATTRIBUTE | OPERATORS | SYNTAX AND EXAMPLE |
|-----------|-------------|----------------|------------------------------|-----------|-------------------|
| amount | Data Type: BigDecimal<br/>The amount paid for a transaction using the payment mode | NA | NA | &gt;,&lt;,&gt;=,&lt;=,== | Syntax: tenderProfile.amount[Operator][Value] |
| code | Data Type: String<br/>Returns code or name of the combination created in loyalty for the payment mode | NA | NA | contains, exists, isEmpty, isNotNull, isNull, isValidDate, matches and notExists | tenderProfile.code[Operator][Value] |
| notes | Data Type: String<br/>Returns notes described for the tender | NA | NA | contains, exists, isEmpty, isNotNull, isNull, isValidDate, matches and notExists | tenderProfile.notes[Operator][Value] |

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
| basketExcludesRegex() | To check if the transaction includes products whose item attribute does not match the given regular expression | Example:<br/>returnBill.basketExcludesRegex("MC","KI_AC.*") |
| basketIncludesRegex() | To check if the transaction includes products whose item attribute matches the given regular expression | Example:<br/>returnBill.basketIncludesRegex("MC","KI_AP.*") |
| basketIncludesRegexBrand() | To check whether the transaction contains items of a specific brand | returnBill.basketIncludesRegexBrand("Brand Regex")<br/>returnBill.basketIncludesRegexBrand("LS") |
| basketIncludesRegexCategory() | To check whether the transaction contains items of a specific category | returnBill.basketIncludesRegexCategory("Category Regex") |
| basketQty() | To check number of items in a transaction | returnBill.basketQty("Attribute Name","Attribute Value") |
| basketQtyRegex() | Quantity of items in the bill matching the regular expression | returnBill.basketQty("Attribute Name","Attribute Value") |
| basketQtyRegexBrand() | Number of quantities of a specific item whose brand name matches the given regular expression | returnBill.basketQtyRegexBrand("Brand Name","Regex") |
| basketQtyRegexCategory() | Number of quantities of a specific item whose category name matches the given regular expression | returnBill.basketQtyRegexCategory("Category Name","Regex") |
| basketSize | Total number of items in the bill - irrespective of quantity of each item | NA |
| basketSum() | Sum of value of the items matching the inventory attribute | Example:<br/>returnBill.basketSum("Product","Shirt") |
| basketSumRegex() | Sum of value of the items matching the inventory attribute - regular expression | Example:<br/>returnBill.basketSum("Product","Regex") |
| customFieldValueExcludes() | Transaction custom field excludes the given value | Pass the custom field value that you want to validate as shown below<br/>customFieldValueExcludes("Field","Value")<br/>Example:<br/>returnBill.customFieldValueExcludes("a_customertype","Loyalty") |
| customFieldValueIncludes() | Check if customer's transaction level custom field value includes the given value | Pass the custom field value that you want to validate as shown below<br/>customFieldValueIncludes("Field","Value")<br/>Example:<br/>returnBill.customFieldValueIncludes("a_customertype","Loyalty") |
| date | Date of transaction | dateDiff, day, dayOfMonth, daysDiff, daysDiffFromString, isAfter, isHourBetween, isTimeBetween, isValid, isWeekday, isWeekend, month, and year<br/>For examples on using date formats, see the Date Format section on Using Operators in Rule Expressions |
| discount | Discount availed for a transaction | NA |
| notes | Transaction level notes specified by the cashier during transaction | contains, exists, isEmpty, isNotNull , isNull , isValidDate, matches, and notExists |
| number | Transaction number of the current transaction | contains, exists, isEmpty, isNotNull, isNull, isValidDate, matches, and notExists |
| points | Total points issued for a transaction | NA |
| totalQty | Date of transaction | NA |

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

## Group Primary Customer (groupPrimaryCustomer)

This groupPrimaryCustomer is used to write rules for the primary customer.

| ATTRIBUTE | DESCRIPTION | SUB ATTRIBUTES |
|-----------|-------------|----------------|
| avgBasketSize | Lets you evaluate conditions on the average basket size of the primary customer.<br/>(The ratio of the total quantities of line items purchased to the total number of transactions made). | isNotNull and isNull |
| avgSpendPerVisit | Lets you evaluate conditions on the average spend per visit by the primary customer.<br/>(Total purchases amount)/ (Total number of transactions made). | interval, isNotNull and isNull |
| clusterValueExcludes | | NA |
| clusterValueIncludes | | NA |
| countActiveCouponsInCouponSeries | Lets you evaluate conditions on the count of active coupons of the primary customer. | NA |
| currentAllPoints | | interval, isNotNull and isNull |
| currentNonRedeemablePoints | Lets you evaluate conditions on the current points that are not redeemable by the primary customer. | interval, isNotNull and isNull |
| currentPoints | Lets you evaluate conditions on the active points of the primary customer. | interval, isNotNull and isNull |
| customFieldValueExcludes | Lets you evaluate conditions on a custom field value of the customer. (Any value other than the value you mention here). | NA |
| customFieldValueExists | Lets you evaluate conditions on a custom field value of the primary member ( if a specific custom field value exists for the member). | NA |
| customFieldValueIncludes | Lets you evaluate conditions on a custom field value of the primary member (if a specific custom field value exists for the member). | NA |
| doesProfileExists | Lets you evaluate conditions on the availability of the primary member's profile/account. | NA |
| email | Lets you evaluate conditions on email of the primary customer. | contains, exists, isEmpty, isNotNull, isNull, isValidDate, matches and notExists |
| extField | | NA |
| externalId | Lets you evaluate conditions on the external ID values of the primary member. | contains, exists, isEmpty, isNotNull, isNull, isValidDate, matches and notExists |
| firstname | Lets you evaluate conditions on the first name of the primary customer. | contains, exists, isEmpty, isNotNull, isNull, isValidDate, matches and notExists |
| hasInstoreProfile | Lets you evaluate conditions based on the primary customer's Instore profile. | isNotNull and isNull |
| hasWeChatProfile | Lets you evaluate conditions based on the primary customer's WeChat profile. | isNotNull and isNull |
| includesLabelRegex | | NA |
| initialCurrentAllPoints | | interval, isNotNull and isNull |
| initialCurrentPoints | | interval, isNotNull and isNull |
| initialLifetimePoints | | interval, isNotNull and isNull |
| initialLifetimePurchase | | interval, isNotNull and isNull |
| initialSlabName | | contains, exists, isEmpty, isNotNull, isNull, isValidDate, matches and notExists |
| initialSlabNumber | | isNotNull and isNull |
| isControl | | isNotNull and isNull |
| isGroupMember | | isNotNull and isNull |
| isLoyal | | isNotNull and isNull |
| isPrimary | | isNotNull and isNull |
| isRegisteredOn | | NA |
| isSecondary | | isNotNull and isNull |
| isTest | | isNotNull and isNull |
| joinDate | Lets you evaluate conditions based on the registration date of the primary customer. | dateDiff, day dayOfMonth, daysDiff, daysDiffFromString, isAfter, isHourBetween, isNotNull, isNull, isTimeBetween, isValid, isWeekday, isWeekend, minutesDiff, month, year |
| lastname | Lets you evaluate conditions based on the last name of the primary customer. | contains, exists, isEmpty, isNotNull, isNull, isValidDate, matches and notExists |
| lifetimeAllPoints | | interval, isNotNull and isNull |
| lifetimeNonRedeemablePoints | | interval, isNotNull and isNull |
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

## Referrer Code (referrerCode)

This referrerCode is used to write rules based on the referrer code details.

| ATTRIBUTE | DESCRIPTION | SUB ATTRIBUTES |
|-----------|-------------|----------------|
| refereeRegCount | Total number of registered referee | isNotNull and isNull |
| refereeTxnCount | Number of transactions done by the referee | isNotNull and isNull |