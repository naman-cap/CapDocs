---
title: Rule Writing
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
The Rules Engine in RTIM allows users to set up conditional responses to customer activities. Rules are written using a standard “Expression Editor” which works with a pseudo-code format that allows powerful combinations of conditions. Rules engine has a large library of supported conditions and expressions out of the box for a wide range of use cases. RTIM and rules engine are used across various products and modules e.g. Loyalty+, Loyalty Promotions, Cart Promotions, Target Loyalty.

## Anatomy of a rule

A rule consists of a profile, attribute, operator, and value.

![25d9fc2 Screenshot 203](https://files.readme.io/25d9fc2-Screenshot_203.png)

## Profiles in rules

currentCustomer (Customer Profile) - Allows you to write conditions based on the properties of the customer who is currently performing the activity

currentTxn (Transaction Profile) - In Transaction related events this profile allows you to write conditions based on the properties of the transaction (e.g. net amount, category of items present in the txn, etc.)

currentLineItem (Line Item Profile) - In Transaction related events this profile allows you to specify conditions relating to properties of individual items (note: This only works with line item unrolling)

tenderProfile (Payment Method Profile) - In Txn related events this profile allows you to specify conditions relating to individual payment methods used (note: This only works with payment method unrolling)

currentEvent (The “Event” Profile) - This is a dynamic profile that allows you to write conditions pertaining to that particular customer activity. Its properties are different across the different customer activities

currentTrackerCondition (Tracker Profile) - Inside the Tracker set, this profile allows you to write conditions based on the properties of that particular tracker case

To read in detail about profiles and attributes [click here](https://docs.capillarytech.com/docs/profiles)  

## Completing a valid expression

An expression is considered valid as long as it resolves into a true or a false condition. This can be achieved, by as simple a condition as simply ”true”. Or by completing the appropriate operator and value for the data type. Or even by combining multiple attributes of similar data types together.

## Data Types in Expression Editor

1. Numbers - These can be integer or double (i.e. decimal values), for example, avgBasketSize, grossAmount, rate, etc.
2. String - These are a string of alphanumeric charactersfor example, firstname, email, notes, etc.
3. Date - These are date and time values, for example, joinDate, slabExpiryDate, etc.
4. Boolean - These are true/false values and won’t need further operators, for example, isControl, isUserGroupInfoPresent, etc.

## Numerical operations

The basic range of supported operations on numbers allow us to resolve the number to a boolean outcome through comparison with another value, and these include:

* equal to (=)
* not equal to (!=)
* greater than (>)
* greater than or equal to (>=)
* lesser than (\<)
* lesser than or equal to (\<=)

Outside of these, users can also perform mathematical operations to transform the value of the numerical attribute, the supported operations for transformation are:

* Addition (+)
* Subtraction (-)
* Multiplication (\*)
* Division (/)
* Mod operation - this provides the remainder after division (%)

## String operations

The basic range of string operations serve to resolve the string attribute into a boolean outcome.

These operators are inserted after the string attribute using the . notation e.g. currentCustomer.email.contains(".com")

The following are the string operators:

Contains - used to see if the string contains the defined value\
Matches - this is used to perform regular expression based matching on the string\
isValidDate - used to check if the string is a proper date field\
Exists - Some proper value exists for this string (i.e. source passed a value that was not an empty string)\
notExists - The string is either Null or Empty\
isEmpty - Similar to notExists\
isNull - checks if the string is Null i.e. it was not passed from the source.\
isNotNull - checks if the the string is NOT Null i.e. some value was passed from the source (even an empty string counts)

A regular expression is a sequence of characters that forms a search pattern. When you search for data in a text, you can use this search pattern to describe what you are searching for. A regular expression can be a single character, or a more complicated pattern.\
You can use Regular Expressions for all string attributes using the .matches operator

There are also some attributes that support regular expressions as part of its arguments, e.g. currentTxn.basketIncludesRegexCategory(".SW")

Some common useful expressions include:

. - allows you to match with any character e.g. .SW matches with CSW, VSW, eSW, etc.

\[] - allows you to match from a set of characters e.g. CVSW matches with CSW or VSW

\| - acts like an or and allows you to search for different possibilities within the same attribute e.g. currentTxn.basketIncludesRegexCategory("shoes|sneakers")

^ - matches characters at the start of the entire string e.g. currentTxn.basketIncludesRegexCategory("^[Pp]remium")

$ - matches characters at the end of the entire string e.g. currentTxn.basketIncludesRegexCategory("[Ff]uel$")

\\w \\s \\d - allows you to see if there’s any alphabet, any space or any digit/number respectively e.g. currentCustomer.firstname.matches("\\s")

## Date operations

The basic range of date operations serves to resolve the date attribute into a boolean outcome. You will commonly be combining multiple attributes in date operations since you will be comparing dates

isValid - simply checks if a valid date is present in that field e.g. currentCustomer.joinDate.isValid( )\
dateDiff - absolute difference between 2 dates e.g. currentCustomer.joinDate.dateDiff(currentTxn.date)==0\
daysDiff - same as dateDiff, but ignores the year. Useful for anniversary type promotions e.g. currentCustomer.extField\_dob\_date.daysDiff(currentTxn.date)==0\
daysDiffFromString - same as daysDiff, but when you want to use an attribute that could be saved as a string\
minutesDiff - absolute difference similar to dateDiff, but looks at minutes\
day - day of the week, week starts on Sunday as 1 e.g. Terrific Tuesdays would be currentTxn.date.day( )==3\
dayOfMonth - date of the month e.g. For offers on the first 5 days of each month currentTxn.date.dayOfMonth( )\<=5\
month - month number is returned e.g. currentCustomer.extField\_dob\_date.month( )==currentTxn.date.month( )\
year - returns the year from the date e.g. currentCustomer.extField\_dob\_date.year( )>=1981&¤tCustomer.extField\_dob\_date.year( )\<=1996\
isAfter - checks if the attribute occurs after a defined date-time e.g. currentTxn.date.isAfter(YYYY,MM,DD,HH,MM,SS)\
isHourBetween - scenarios like happy hours. hour in 24 hour format e.g. currentTxn.date.isHourBetween(HH,HH)\
isTimeBetween - similar to happy hours, but when minutes also matter e.g. currentTxn.date.isTimeBetween(HH,MM,HH,MM)\
isWeekday - checks if the date is a weekday e.g. currentTxn.date.isWeekday( )\
isWeekend - checks if the date is a weekend e.g. currentTxn.date.isWeekend( )\
isNull - checks if the the date is Null i.e. it was not passed from source\
isNotNull - checks if the the date is NOT Null i.e. some value was passed from source

## Adding multiple expressions and using brackets

You can chain together multiple valid expressions using AND (&&) or an OR (||) condition between them

You can use brackets to combine various parts of the expression to control the order in which the expression is checked, particularly to combine AND and OR type expressions as per the use case

e.g. to check if a customer has either bought for $100 or more in a completely non-discounted transaction, or for $300 or more then you can say ((currentTxn.value>=100)&&(currentTxn.basketSumIf("DISCOUNT","NOT\_EQUAL\_TO","0")==0))||(currentTxn.value>=300)

## Some tips for efficient rule writing and handling common issues

* Use scope early on and wherever possible to restrict the events being processed by conditions unnecessarily
* Reduce redundancies in rule writing through efficient use of the forward to set action - this action is not just for unrolling, it provides an efficient of setting up “global filters”\
  E.g. if you have a program construct where only certain concepts qualify for “earning” and only customers in tier ‘Silver’ and above can earn points, create these as scope and conditions in Set 1 itself and forward from there for all other conditions and actions
* Use regular expressions to reduce the need for multiple OR conditions and repeating the same expression
* Ensure expressions match the unrolling status of the ruleset and ensure that the rulesets don’t have nested unrolling actions inside
* Check for mathematical operations that might lead to irrational numbers e.g. dividing by zero
* String matches can be case sensitive, and might fail because of input errors, as far as possible use the system suggested values or use regular expressions to adjust for those kinds of situations if needed
* Using combinations of expressions with ==true or ==false along with the “when expression is false” to specify the action can get confusing, so try to avoid double negatives

## Sample Scenarios

### Incentivizing on High Spending Customers

Issuing Coupons for current transaction amounts exceeding a certain value\
Consider that you want to issue coupons for customers whose current transaction amount is greater than 5000, then use the following condition:

currentTxn.value>5000

For transaction amounts equal to a certain value, use currentTxn.value==5000

Issuing Coupons for the current transaction amount between two defined values\
Consider that you want to issue coupons for customers whose current transaction amount is greater than 1000, but less than 5000, then use the following condition:

currentTxn.value>1000&&(currentTxn.value\<5000) 

To learn more about current Transaction profile, and value profile [click here](https://docs.capillarytech.com/docs/attribute-transaction-value)

### Incentivizing on Customer Name and Transaction Amount

Suppose that your store founder’s name is “John Smith” and you want to issue coupons to customers whose name matches that of the founder. But you also have a rider that the transaction must exceed a certain value (say 5000).

Issuing coupons depending on the full name and the transaction amount\
Suppose you want to issue coupons to customers whose full name matches “John Smith” and whose transaction amount exceeds 5000. Then use the following condition:

(currentTxn.value>1000&&(currentTxn.value\<5000)&&(currentCustomer.name.matches("John Smith"))

Issuing coupons depending on the first name and the transaction amount\
Suppose you want to issue coupons to customers whose first name matches “John” and whose transaction amount exceeds 5000. Then use the following condition:

currentTxn.value==5000&&(currentCustomer.firstname.matches("John"))

Issuing coupons depending on the last name and the transaction amount\
Consider that you want to issue coupons for certain customers whose current transaction amount is greater than 5000 and their last name matches Smith. Then use the following condition:

currentTxn.value==5000&&(currentCustomer.lastname.matches("Smith"))

To learn more about how to write a rule on customer name and other identity related attributes [click here](https://docs.capillarytech.com/docs/attributes-namefirst-namelast-name#name)

### Incentivizing on Current Points

Suppose you want to issue coupons for customers whose current points is greater than 500, then use the following condition:

currentCustomer.currentPoints>500

To issue coupons to those customers whose current points fall in the third interval of 600 (the first interval being 1 to 100, the second interval being 101 to 400, the third interval being 401 to 600), then use the following condition:

currentTxn.points.interval("100,400,600")==3

To learn more about attributes based on points [click here](https://docs.capillarytech.com/docs/attributes-current-customer-points)

### Issuing Coupons based on lifetime purchases (Faithful Customers)

Suppose you want to issue coupons to those customers whose lifetime purchase is greater than 5000. Then use the following condition:

currentCustomer.lifetimePurchase>5000

To issue coupons to customers whose lifetime purchase falls between a specified interval of 3000 (with first interval being 0 to 999, second interval being 1000 to 2999, third interval being 3000 to 5999, fourth interval being 6000 and above), use the following condition:

currentCustomer.lifetimePurchase.interval("1000,3000,6000")==2

Let's take a deep dive to know more about the attributes based on Purchase by [clicking here](https://docs.capillarytech.com/docs/attributes-kpis#6-lifetimepurchase)

### Issuing Coupons based on Customer Tier

Suppose you want to issue coupons to those customers who fall under the Gold slab, then use the following condition:

currentCustomer.slabName.matches("Gold")

You can also use the following condition to match a set of characters (here Sil could mean Silver)

currentCustomer.slabName.contains("Sil")

To learn more about the attributes based on slab [click here](https://docs.capillarytech.com/docs/attribute-slab-information)

### Issuing Coupons based on Customer Registration on a Weekday

To boost your loyalty program registration, suppose you have offered discounts for customers who register over a weekday. To issue coupons to those customers who have registered on a weekday, use the following condition:

currentCustomer.joinDate.isWeekday( )

### Issuing Coupons based on Customer Registration Time

To boost your loyalty program registration, suppose you have offered discounts for customers who register at a specific time (say 5 pm to 6 pm). Then use the following condition:

currentCustomer.joinDate.isHourBetween(18,19)

### Issuing Coupons based on Weekend Registrations

Suppose you want to issue coupons to those customers who have registered on a weekend. Then use the following condition:

currentCustomer.joinDate.isWeekend( )

The Versatile Customer - Issuing Coupons based on the variety of products bought

To encourage sales of different brands in your store, suppose you want to issue coupons to those customers who have bought a variety of products (say 10). Then use the following condition:

currentCustomer.avgBasketSize==10

Note: Average basket size is the number of different products bought (line items) and not the quantity.

### Issuing Coupons based on Email ID

Suppose you want to target office-goers working in a particular company (say “company X”) which is near your store. And you want to issue discounts to those office-goers who have registered using their office email ID. To issue coupons to those customers whose email ID matches that of company X, use the following condition:

currentCustomer.email.contains("@companyX.com")

Learn more about email as an attribute and all the operators by [clicking here](https://docs.capillarytech.com/docs/attributes-namefirst-namelast-name#email)

### Issuing Coupons based on External ID

To issue coupons to customers whose external ID contains a certain serial number (say 1234), use the following condition:

currentCustomer.externalId.contains("1234")\
To know more about externalId attribute, [click here](https://docs.capillarytech.com/docs/attributes-namefirst-namelast-name#external-id-externalid)

### Issuing Coupons based on the Number of Visits to the Store

Scenario 1:\
Suppose you want to reward customers who have been visiting your store frequently (say 5 times). Then use the following condition:

currentCustomer.numberOfVisits==5

Scenario 2:\
Suppose you want to reward customers who have visiting your store for the fifth time and their average spending per visit is 5000. Then use the following condition:

currentCustomer.numberOfVisits==2&&(currentCustomer.avgSpendPerVisit==4750)

[click here](https://docs.capillarytech.com/docs/attributes-kpis#5-numberofvisits), to know more about "numberOfVisits" attribute.

### Issuing coupons based on the Average Spending Value - Loyal and High Spending Customers

Suppose you want to reward customers whose spending per visit to your store is 5000. To issue coupons based on the average spending of 5000, use the following condition:

currentCustomer.avgSpendPerVisit==5000

To know more avgSpendPerVisit, [click here](https://docs.capillarytech.com/docs/attributes-kpis#2-avgspendpervisit)

### Issuing Coupons based on Clusters

Suppose you want to reward customers who belong to a specific cluster. To issue coupons for customers belonging to gold slab, use the following condition:

currentCustomer.clusterValueIncludes("xyz","Gold")

To issue coupons for customers not belonging to the Silver slab, use the following condition:

currentCustomer.clusterValueExcludes("xyz","silver")

### Issuing Coupons based on Custom Fields

Scenario 1:\
Suppose one of your custom fields includes the name of the bank issuing the credit card and you have a tie-up with the bank for offering discounts. To issue coupons to customers using a credit card from BankX for the current transaction, use the following condition:

currentTxn.customFieldValueIncludes("Credit\_Card\_Type","BankX")

If the value returned is BankX, then the coupon is issued.

Scenario 2:\
Suppose the college team in your city has won a major championship and you want to celebrate the event by offering discounts to customers who had included that sport as their favorite. To issue coupons to customers who had included SportX as their favorite, use the following condition:

currentCustomer.customFieldValueIncludes("Favorite\_Sport","SportX")

If the value returned is SportX, then the coupon is issued.

### Incentivizing in Happy Hours

Suppose you want to offer discounts to customers shopping during happy hours (defined from 4 pm to 8 pm). Then use the following condition:

currentTxn.date.isHourBetween(16,20)

Weekday or Weekend Discounts

Scenario 1: Weekday\
Suppose you want to offer discounts to customers shopping during weekdays (Monday - Friday). Then use the following condition:

currentTxn.date.isWeekday( )

If the value returned is between Monday and Friday, the coupon is issued.

Scenario 2: Weekend\
Suppose you want to offer discounts to customers shopping during weekends (Saturday or Sunday). Then use the following condition:

currentTxn.date.isWeekend( )

If the value returned is Saturday or Sunday, the coupon is issued.

### The Brand Loyalist

You can use the following rules to issue coupons for customers buying products of any brands.

Scenario 1: Buying Products of a Particular Brand\
Suppose you want to issue coupons to customers who purchase products of a specific brand exceeding a certain transaction amount.

To issue coupons for customers purchasing items of the Puma brand for more than 2000, use the following condition:

currentTxn.basketSum("BrandName","Puma")>2000

Scenario 2: Buying Products of a Brand starting with certain characters\
To issue coupons for customers purchasing items of the brand that starts with “pu” for more than 3000, use the following condition:

currentTxn.basketSumRegex("BrandName","pu.\*")>3000

Scenario 3: Buying Products of any Brand\
To issue coupons for customers purchasing products of any brand exceeding a transaction amount of 3000, use the following condition:

currentTxn.basketSumRegex("BrandName","[A-Za-z]+")>3000

Scenario 4: Buying a certain number of products of a brand\
Suppose you want to issue coupons to customers who purchase 3 products of the brand ‘Puma’ (irrespective of the quantity of the product), use the following condition:

currentTxn.basketCount("BrandName","Puma")>2

Note: In this scenario, a customer who has bought 3 pair of shoes would not be eligible for the coupon. The customer must have bought 3 different products (For example Shoes, Watch, and Sun Glasses) to be eligible for the coupon.

Scenario 5: Buying atleast one Product of a Brand\
Suppose you want to issue coupons to customers who purchase atleast 1 product of a brand such as Puma, use the following condition:

currentTxn.basketIncludes("BrandName","Puma")

Scenario 6: Buying Specific Quantities of Products of a Brand\
Suppose you want to issue coupons to customers who purchases a specific quantity of products of a brand (say 3 pairs of Puma shoes), you can use the following condition:

currentTxn.basketQty("BrandName","Puma")==3

In this scenario, a customer does not have to buy three different products of the brand to be eligible for coupons. The customer only has to buy 3 pairs of shoes or 3 sunglasses to be eligible.

Scenario 7: Buying Specific Quantities of Products of a Brand Starting with a set of characters\
Suppose you want to issue coupons to customers who purchase a specific quantity (say 3) of products of a brand that starts with “Pu”, you can use the following condition:

currentTxn.basketQtyRegex("BrandName","Pu.\*")==3

In this scenario, a customer does not have to buy three different products of the brand to be eligible for coupons. The customer only has to buy 3 pairs of shoes or 3 sunglasses to be eligible.

To know more about all Profile and respective attributes in detail [click here](https://dash.readme.com/project/capillary-documentation/v1.0/docs/profiles)
