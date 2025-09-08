---
title: AMJ 2022 | Insights+ Releases
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
# June Releases

## Making text search case insensitive in Insights

### Problem Statement -

While searching for the filter value in the filter search option, the API returned only case-sensitive results. If the case is not matching despite the value match, the search won't return the asked value.

### Use Case -

* User wants to make a case insensitive search for the value

### Solution -

* Case insensitive search has been enabled in "Filters".

![](https://files.readme.io/54e0902-45c080b-4.png "45c080b-4.png")

## Data export - Fetch data for points at the line item level

### Problem statement -

Brands have point allocation rules at the line item level. The points allocation data at the line item level is used on a regular basis for audit and reconciliation purposes. But this data could not be fetched via exports in our system.

### Solution/Enhancement made -

 Following changes have been made to resolve this - 

* bill\_lineitem\_id column has been  onboarded to points fact so that data can directly be exported using the export templates
* The details of the line item against that particular line item ID can be obtained from Transaction Fact (which is also available on EI).
* Now bill\_lineitem\_id  of  Points fact can be tied with the transaction fact lineitem\_Id to check for points at the line item level.

## Return\_bill details(New export template)

### Problem Statement:

As part of handback data flow the information to tie any return transaction flows via three files:

1. **Return Transaction Fact** –This includes details about the return transaction
2. **Transaction Fact** –This helps to tie return transaction with original transaction
3. **Points Fact** –This file gives details of points returned against the transaction

There is no common identifier to map the points  return entry to the return transaction entry. Only cumulative return points can be reported as part of reporting. 

![](https://files.readme.io/3b6f37a-image_8.png "image (8).png")

### Use Case:

User wants to export points data defining which return points entry corresponds to which return transaction entry

### Solution:

To resolve this, we have created a new Export Template which will have the Return Transaction Id of Return Transaction Fact and Points Event Id  of Points Fact. This way the user will be able to map the return points entry to the return transactions. This is more clearly depicted in the image below.

![](https://files.readme.io/6cb5a84-image_9.png "image (9).png")

### Steps to use the template :

Under the Export Template section , user can view the template returned\_bill\_details as shown in the screenshot below - 

![](https://files.readme.io/3d09851-e598bae-returnbill.png "e598bae-returnbill.png")

## Introducing Capillary's Mobile View in Insights+ Reports

Now access Capillary's insightful reports - "anytime and anywhere on your mobiles''. The release of Mobile view for Insight+ reports marks the entry of Capillary's Core Products in the mobile UI world.

With the release of Mobile View of these reports, users can be more efficient in accessing the insights via Insights+ reports.

You can access Reports via Mobile by opening the Intouch module directly on the mobile browser or by clicking on View Report on Scheduled Reports email in your mobile.

On the mobile view on the browser, following capabilities are provided:

* Filter by Date Range and Compare across time Period

![18e6b11 lg4YorpEVq2PxtgWQ5r2itzvMQH3SkQF8Q](https://files.readme.io/18e6b11-lg4YorpEVq2PxtgWQ5r2itzvMQH3SkQF8Q.png)

* Search for reports by report name
* Mark reports as Favorites

![b66f97a i3tUNSnko yHcHrBRsDjqqy0HhYlOuJYqw](https://files.readme.io/b66f97a-i3tUNSnko_yHcHrBRsDjqqy0HhYlOuJYqw.jpeg)

* Filter reports by category tags

![674cff1 GC2kUqnE9ZNe0tVbmCszSHJpLeSRdHn4xg](https://files.readme.io/674cff1-GC2kUqnE9ZNe0tVbmCszSHJpLeSRdHn4xg.png)

* View Details of the charts - KPIs and Filters

![9272d48 opEL3Ej5L3IitEkakGr5mRHjRjI SLhE5A](https://files.readme.io/9272d48-opEL3Ej5L3IitEkakGr5mRHjRjI-SLhE5A.jpeg)

* Save reports as image

![aeb8a04 4rGXW5pXs9ebaqkIGxYynJ76ld0IudKjBg](https://files.readme.io/aeb8a04-4rGXW5pXs9ebaqkIGxYynJ76ld0IudKjBg.jpeg)
