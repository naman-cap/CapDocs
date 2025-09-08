---
title: Common Filter Options (in filters)
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
As mentioned in the previous articles, there are different ways of creating an audience group. One way is to generate using filters, second way is by directly uploading customer identifiers, and the third way is to merge two existing groups. The last two ways are very straight forward.

As filters provide a more efficient way of targeting and is also powered by AI, you can create a more specific audience group with numerous options that are available in each filter .

This article provides detailed information on common options available in most of the filters

## Date filter

Considers activity of a customer during a specified duration. Activity refers to transactions, registration, coupon redemption or any other interaction of the customer with the brand.\
You can choose duration either by specific dates or relative days. To not apply any date filter, you can use Lifetime.

### Lifetime

Considers activities from the time the customer enrolled in the loyalty program.

### Specific dates

Considers activities during a specific date range. The following sub-options are available for specific dates:

* **Before**: To consider the activities recorded before a specific date.
* **After**: To consider the activities from a specific date.
* **Between dates**: To consider the activities during a specific date range (X to Y).

### Relative days

Considers activities based on the relative days, weeks (Mon-Sun) or months.(1-30/31)\
You can set the duration relative to the current date. For example, last 9 days, next 2 weeks.

The following options are available for relative days:

* **In the last x**:  Fetches customers who interacted with your brand in the last x days, weeks or months. For example, if you set 10 in the last x calendar week, you will get customers who interacted in the last ten weeks.
* **In the next x**: Fetches customers who will interact with your brand in the next x days, weeks or months. For example, if you set 1 in the next x calendar week,  you will get customers who purchased a specific product(s) in the upcoming calendar week.
* **In the current x**: Fetches customers who interacted with your brand on the current day, week or month.
* **Between days**:  Fetches customers who  interacted with your brand between 'the last x days’ and 'the next y days'. For example, last 30 days until the next 15 days.
* **Exactly x days ago**: Fetches customers who  interacted with your brand x days ago. For example, you can get the customers who made registration 10 days ago.
* **Exactly after x days**: Fetches customers who will interact with your brand after x days from the current day. For example, you can get the customers who will purchase men's trousers on the 10th day from now. 1 is for tomorrow, 2 for the day after tomorrow and so on or you can get customers who will redeem coupons on the 4th day from now.

## Store hierarchy

This option lets you filter customers by store(s) at which the activity is done. You can also select stores by zones and concepts. The activity could be customer registration, points/coupon redemption, profile update, etc.

### Store

You can filter customers by store(s) at which they performed a specific activity and select them using any of the following options:

* **Upload list**: Lets you upload store IDs using a CSV file. Select the upload list from the drop-down list. If you do not have the CSV file, then download the sample CSV file, add store IDs, and upload it.
* **Enter values**: Let's you search for stores manually. On the search box, enter a store name, and select the store name from the suggested list. You can add multiple stores.
* **Based on attributes**: Let you select store(s) based on attributes. You can select stores by attributes such as store name, type, store external ID, area, and more. You can select multiple attributes.\
  Once you select store attributes, select the values of each attribute from the available list. For example, to filter stores by city, select the store city from the attributes list, and in the store city list, select your preferred city name.

### Zone/ Concept

A zone is a geographical cluster of stores. A concept is a logical grouping of stores.You can filter customers by zones/concepts in which the customer performed a specific activity.  You can select stores of one or more zones/concepts using the following options:

* **Any store**: Selects all the stores of a selected zone(s)/ concept(s).
* **Stores with attributes**: Use this to select stores by store attributes of the specified zone(s) concept(s). Store attributes could be store channel, store type, external ID, store area, store name, and more.\
  Once you choose a store attribute, select the values for each shop attribute from the recommended list. For example, to filter stores of a concept by city, choose the store city from the list of attributes, then choose your preferred city name from the store city list.

## Points

### Active points

Points that are available for a customer for redemption are active points.\
You can use points range to get customers that have current points in a particular range. You can either include or exclude customers for a given condition.

* **Greater than equal**: Get customers that have current points greater than or equal to the value specified here
* **Less than equal**: Get customers that have current points less than or equal to the value  specified here
* **Equals**: Get customers that have a specific number of current points\
  In range of:  Get customers whose current points are between a specific range (including minimum points to maximum points). For example, 200-500 includes customers that have active points greater than equal to 200 and less than equal to 500.

### Expired points:

Points that are no longer available for redemption are expired points.

The following are the basic or mandatory options available for expired points.

* **Greater than equal**: Include/exclude customers whose number of points getting expired are more than the number specified herein.
* **Less than equal**: Include/exclude customers whose number of points getting expired are less than the number specified herein.
* **Equals**: Include/exclude customers with the exact number of points getting expired\
  In the range of:  Include/exclude customers whose expiring points are in a specific range (Min points to Max points).

The advanced options available for expired points are Date, Promotion Name, Promotion Type, Points awarded type.

### Lifetime points

The total number of points issued to a customer over the time he/she got associated with your brand till date.

* **Greater than equal**: Include or exclude customers whose lifetime points are greater than or equal to the value you specify here.
* **Less than equal**: Include or exclude customers whose lifetime points are less than or equal to the value you specify here.
* **Equals**: Include or exclude customers who have a specific lifetime points.
* **In range**: Include or exclude customers whose lifetime points are in a specific range including the specified points (minimum points to maximum points).

## Lead status

### Current lead status

Get customers by current lead status. You can select multiple statuses. For example, customers whose leads are currently Open or On hold.

![04711e7 uezwvIfP 4WNZhVXPUAbzU6t6nE EASipw](https://files.readme.io/04711e7-uezwvIfP_4WNZhVXPUAbzU6t6nE_EASipw.png)

The following are the standard statuses for leads. However, an org can create custom statuses as required.

* **Open**: This is usually used for new leads that are not processed.
* **Won**: This is used for leads that are successfully converted.
* **Lost**: This is used for leads that are not converted in a specific period. There is a config, **CONF\_LEAD\_AUTO\_CLOSURE\_TIME\_PERIOD**, in InTouch **Settings** > **Miscellaneous** > **Lead Configuration**. If a lead is not converted within that duration, the status is marked as Lost automatically.
* **On hold**: This is used when the item the customer has given a timeline to decide on or the item is not available in the store currently.
* **Deleted**: This is usually used for unqualified or invalid leads.

## Channel

Let you build an audience group based on their mobile number and email subscription status - Opt-in or Opt-out.

![5d18098 HXLB6hNS5rzjWhVI9OABTMtEhWfG2Q4Zjw 1](https://files.readme.io/5d18098-HXLB6hNS5rzjWhVI9OABTMtEhWfG2Q4Zjw_1.png)

* **Email**: Use this to get customers that registered their email id
* **Mobile**: Use this to get customers that registered their mobile number
* **Web Engage**: Use this to get customers that are subscribed to mobile push notifications
* **Line**: You can get customers that are registered in the brand's Line account
* **Ecommerce**: Use this to get customers that are on the e-commerce platform of the brand
* **WeChat**: You can get customers that are registered in the brand's official WeChat account. WeChat is a communication channel like WhatsApp used in countries like China

## NDNC status

Let you build an audience group based on **NDNC** (National Do Not Disturb) status, **NDNC**, **Invalid**, **DND**, and **Unknown**. You can select more than one option.

![2e83c43 JpT1S66CXBNrQBIAKR7LwWiVZW GFtLK4A 1](https://files.readme.io/2e83c43-JpT1S66CXBNrQBIAKR7LwWiVZW_GFtLK4A_1.png)

### Status

* **NDNC**: The abbreviation of the National Do Not Call Registry is the NDNC Registry that controls unsolicited communications. Might not be applicable to all countries
* **DND**: Customers that do not want to receive any unsolicited SMS or calls will register in Do Not Disturb (DND). You can get customers who registered their mobile numbers in DND. Might not be applicable to all countries.
* **Invalid**: Customers with invalid mobile numbers.
* **Unknown**: Customers whose status is currently unknown.
* **Not captured**: Customers whose status data are not captured.

## Fraud

* **Marked**: A customer who has shown fraudulent behavior, but has yet to confirm by our team.
* **Confirmed**:  A customer was confirmed as a fraud (from the status "marked") by our team.
* **Reconfirmed**: A confirmed fraud customer that has shown the fraudulent behavior again
* **Not fraud**: A customer that has shown a fraudulent behavior, but later our team has confirmed as not fraud
* **Internal**: Internal Capillary users that make transactions and other activities for testing purposes.
* **Not applicable**: The standard field is applicable for all the organizations; whenever the organization does not pass information collected from the customers, the system considers it not applicable. For example,  let us take the first name field in the user table. This is a standard field and most brands capture the first name of customers who are registered and passed into the Capillary system. However, if a brand does not capture and pass the customer's first name into the Capillary system (if there is no first name-value present in the customer's first name field in source data), the value in the first name field of the user table will show not applicable.
* **Invalid**: The source dimension attribute values are predefined in the system; whenever any value other than the predefined values is passed to the Capillary system, the system considers it invalid. For example, a specific brand has source dimension attributes with fixed values - Instore, Web\_engage, App, and WeChat. Here, Facebook is not a pre-configured source dimension attribute. Therefore, if any customer gets registered via Facebook, and this source value is passed into the system, the system will not recognize it (Facebook). And the value for this dimension is invalid.

<Note title="Note">
**Source** dimension refers to the channel via which a customer registered with the brand.
</Note>

* **Not captured**: The information that the brand collects from the customer during a transaction is entered into the Capillary system; whenever the brand passes null instead of this transaction information, the system considers it not captured. Let's take the same example mentioned in invalid status. If the client system fails to capture the channel (INSTORE, Web\_Engage, App, or WeChat) where a customer is registered and passes a null value, the Capillary system saves the source dimension attribute value as not captured.

For more details on fraud tagging, fraud detection methodologies, fraud detection report execution in Essential Insights, and other fraud-related details refer to the attached PDF document.

## Product filter

This lets you filter customers by products purchased. The following are the different options available for this filter.

* **Category**: Fetches customers who purchase products from specific category(s). You can further filter the results using the following options:

  * **any product**: Filter any product from the selected category(s).
  * **products with these attributes**:    Filter products based on attributes such as brand name, image URL, price, style, and more.

    ![](https://files.readme.io/c37e41f5b2c91dbb0501883bb921a68e650520d5da406b55357411d3942627c8-image.png]\(https://files.readme.io/c37e41f5b2c91dbb0501883bb921a68e650520d5da406b55357411d3942627c8-image.png)

![c37e41f5b2c91dbb0501883bb921a68e650520d5da406b55357411d3942627c8 image](https://files.readme.io/c37e41f5b2c91dbb0501883bb921a68e650520d5da406b55357411d3942627c8-image.png)

* **Sub-Category**: Fetches customers who shopped products of a specific sub-category(s). You can further filter the results using the following options:
  * **any product**: Filter any product from the selected category(s).
  * **products with these attributes**:    Filter products based on attributes such as brand name, image URL, price, style, and more.

![59775a6b76893994b35f68f088aa404f486227a5c5c8d63b58501b1289415992 image](https://files.readme.io/59775a6b76893994b35f68f088aa404f486227a5c5c8d63b58501b1289415992-image.png)

* **Item Code**: Fetches customers who purchased a specific item.  You can choose the item codes through one of the following methods:

![339c9246b02578ed0012381b8cd4f81d67b371a190298a12f0c23ba7d8d21c8f image](https://files.readme.io/339c9246b02578ed0012381b8cd4f81d67b371a190298a12f0c23ba7d8d21c8f-image.png)

* **upload list**: Use this option to upload a CSV file containing the item codes for filtering. Click **Choose File** to upload the CSV.

![1f26308edc3a7796721311a029dc59bbcbaf1208a873b59a0d2feb9ed16fdd9a image](https://files.readme.io/1f26308edc3a7796721311a029dc59bbcbaf1208a873b59a0d2feb9ed16fdd9a-image.png)

* **enter values**: Use this option to fetch the item codes manually.
* **based on attributes**: Use this option to filter customers by product attributes such as brand name, image URL, price, style, and so on.