---
title: Setup Behavioral events
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
# Behavioral Events Overview

Events are activities of a customer either on an online store or at a physical store. Behavioural Event is a platform that lets you create standard and custom events to capture customer activities across channels. After you create an event, whenever it is triggered, the payload containing the defined attribute information is sent to the webhook. The Behavioral Event framework listens to this event, validates it, and sends it to the corresponding destination such as loyalty, journey, etc.

## Objective

The Behavioral Events data collected across sources can be used to develop personalized content, segment customers, or even incentivize customers.

This product solves different use cases for different verticals. 

For example:

1. In an offline retail or brick-and-mortar store, you can send coupons to customers for different events such as scanning a QR code of a particular product category, or showing interest in a particular item.  This increases conversion without customers visiting the store again.

2. In an e-commerce platform (website or app), customers can be engaged through games or quizzes.

3. In the healthcare domain, customers can be rewarded for completing health-related activities to drive better engagement and loyalty of the customers.

4. In Consumer Packaged Goods (CPG), customers can be rewarded for participating in sales promotion events.

5. In the case of hospitality, you can send tailored messages to customers based on the stage of their purchase cycles such as inquiry, booking, check-in, and checkout.

## Modules that consume Behavioral Events

Currently, events data can be consumed by Insights+ and Loyalty+. By default, Insights+ consumes any event that you create on Behavioral Events. However, you need to manually set if you want to consume by Loyalty+.

1. **Loyalty+**: This includes both loyalty and DVS (Dynamic Voucher System).

* Consumed by **Loyalty Manager** to send messages to customers or incentivize them based on events data. For example, you could send a message when a product a customer is looking for is of limited stock.
* Consumed by **Bounceback Campaign** to run engagement programs based on the events data. For example, you could send discount coupons on product abandonment or product add-to-cart events.

2. Insights+ (upcoming feature) to analyze events data. For example, most searched products frequently searched products during a festival season.

## Types of Behavioral Events

The following are two types of Behavioral Events available.

* **Standard Events**: These are predefined events with all the required attributes and values. The following is the list of standard events. Administrators can enable events that are required for an organization.\
  Product Removed From Cart, Customer Logged Out, App Installed, Product Added To Cart, Customer Registered, Category Viewed, Product Viewed, Customer Logged In, Coupon Applied, Product Searched, Coupon Denied, and App Uninstalled.

* **Custom Events**: If you wanted to capture a specific customer activity other than in Standard Events, you can create custom events with the event names, attributes, and values.

The following table provides an understanding of choosing between standard and custom events.

| SCENARIO                                                             | STANDARD EVENTS | CUSTOM EVENTS |
| :------------------------------------------------------------------- | :-------------- | :------------ |
| Add standard attributes (such as SKU and Till) before publishing     | No              | Yes           |
| Edit standard attributes before publish                              | No              | Yes           |
| Delete standard attributes before publishing                         | No              | Yes           |
| Add standard attributes (such as SKU and Till) after publishing      | No              | No            |
| Edit standard attributes after publishing                            | No              | No            |
| Delete standard attributes after publishing                          | No              | No            |
| Add custom attributes (string, enum, double, date) before publishing | Yes             | Yes           |
| Edit custom attributes before publishing                             | Yes             | Yes           |
| Delete custom attributes before publishing                           | Yes             | Yes           |
| Edit custom attributes after publishing                              | No              | No            |
| Delete custom attributes after publishing                            | No              | No            |
| Add custom attributes (string, enum, double, date) before publishing | Yes             | Yes           |

## New terminologies

### Webhook

Enables syncing and relaying data between third-party applications and the Capillary Server facilitating automated calls and real-time updates.

### WebEngage

Multi-channel user engagement platform that lets you automate communications.

### Transformer

Used to convert the payload sent by the third-party app to a payload understood by Capillary. In simple terms, it is a field mapping.

### Webhook Adapter

Used to track real-time events data that consists of payload understandable by the Capillary system.

### Integration

Automates pushing event data from a third-party app or website to the Capillary system. There are two types of integrations-

1. WebEngage to integrate Capillary Behavioural Events platform with WebEngage. 
2. Custom integration to integrate Capillary Behavioural Events platform to any other third-party apps.

#### Source Account

Source in which a customer is registered. Example: Facebook, WebEngage, WeChat, InStore, Martjack, TMall, Taobao, JD, Ecommerce, Website, and Line.

### Event and Attribute

Event is customer activity such as logging out, adding items to cart, and so on. Whereas, attributes are entries of an event that needs to be captured by our system. For example, for the event product review, you could have attributes like title and review message body.

### Standard Event

A predefined event with a defined set of attributes.

### Custom Event

A user-defined event that lets you define your own attributes that you want to capture. 

### Standard Attributes

The standard attribute in a behavioural event system is a default attribute that will be applicable for all the events. There are two standard attributes,  `eventDateTime` and `storeUnitID`. These attributes need not be defined during the creation of an event and are applicable for all events by default. 

* `storeUnitID` - This attribute is used only for internal usage.
* `eventDateTime` - This is a standard attribute that captures the event processing time. If a value is sent for the `eventDateTime `attribute, such as 2024-03-24 12:00:00, it serves as the timestamp for the event. However, if no value is sent or the attribute is missing in the payload, the time of event processing becomes the event timestamp.

The formats that are acceptable for the eventDateTime attribute are given below:

* yyyy-MM-dd'T'HH:mm:ssXXX
* yyyy-MM-dd'T'HH:mm:s.S
* yyyy-MM-dd HH:mm:ss
* yyyy-MM-dd
* dd-MM-yyyy HH:mm:ss
* MM/dd/yyyy HH:mm:ss
* yyyy/MM/dd HH:mm:ss
* yyyy/MM/dd
* dd-MM-yyyy
* MM/dd/yyyy
* yyyyMMdd HH:mm:ss
* dd-MMM-yy
* yyyy-MM-dd'T'HH:mm:ss
* EEE MMM dd HH:mm:ss z yyyy
* MMMM,dd,yyyy
* MMMM,dd
* yyyy-dd-MM HH:mm:ss

<Note title="Note">
The Behavioural event system saves the value for the eventDateTime attribute in the system as is, without any timezone offset. If there is no value provided for the attribute, it processes the time according to the GMT timezone and saves the datetime value without the timezone offset.
</Note>

### Custom Attributes

The custom attributes are user-defined attributes for each event. These attributes can be of any of the following types:

* Enum
* Group ID
* Till Code
* Coupon Code
* Customer ID
* Date
* Product SKU
* Product Brand
* Currency Code
* Product Category
* String
* Double

You can define attributes such as customer ID, product code, booking ID, product category, etc., and map the fields to capture the corresponding information. For example, you can create an attribute named `CustomerMobileNumber` and map it to Customer ID > Mobile number. 

![8916128 Custom attribute](https://files.readme.io/8916128-Custom_attribute.png)

### Mapping

Also called attribute mapping that lets you map attributes of a behavioural event with the attributes of a third-party application.

## Limitations of Behavioral Events

The following are the limitations of Behavioral Events.

1. No support for standard entities such as SKU, and category in filters and KPIs for custom events.
2. No support for anonymous events, customer identifier is required.
3. Data is captured only from predefined integrations (such as WebEngage or Webhook), and not directly from sources (such as eCommerce websites, apps, and WeChat).
4. The platform registers customers from the registered user profiles data shared in the S3 bucket. If there is no WebEngage integration, customer registration needs to handle through API Integration.
5. Limitations for Custom Events:

* A maximum of 10 active events are allowed in an org.
* A maximum of 20 attributes are allowed in an event.
* Custom attribute names can have only up to 50 characters.
* Custom attributes can have only enum, date, Boolean, integer, double, and string as data types.

## Steps to configure and publish an event

1. Create a Webhook integration for a WebEngage platform or any other third-party apps or platforms.
2. Create a new custom event or add a standard event.
3. Create attribute mapping.
4. Run a sample test to validate whether the data is flowing correctly as desired.
5. Publish the event.

## Add Webhook Integration

Webhook facilitates pushing real-time data from a third-party application or website to the Capillary database through a web callback or HTTP push API. A Webhook integration is a combination of a third-party app and Till code. For every Webhook integration you create, a unique URL is generated. The respective third-party apps need to make a POST call to the URL passing events data.

There are two types of integrations

* **WebEngage integration** to capture events data from the WebEngage platform.
* **Custom integration** to capture events data from other platforms or apps other than WebEngage.

To create a Webhook integration, follow these steps.

1. Click **Create Webhook**.
2. Choose WebEngage for WebEngage integration, else choose Custom for integration with other apps.
3. In **Select till code**, choose the Till code that you want to associate with the selected source. If an event has the attribute **Till Code**, then the Till Code that is captured for the event will be considered as a default one.
4. Click **Done** 

You need to use the integration URL to POST event data to Webhook through an API call.

> 📘
>
> * If an event has the Till Code attribute, then the till code tagged in the Webhook or any other integration will not be considered.

## Add & map custom event

Create custom events if you want to capture specific details that are not available in standard events. You can use both standard and custom attributes to create custom events.

The following are the steps involved in publishing a custom event.

To create a custom event, follow these steps.

1. Log on to InTouch
2. Go to > **Organization Settings** > **Master Data Management** > **Data Model** > **Behavioral Events**.
3. Click + **Add Events.** 
4. Click **Create New Event** and follow these steps

* In **Event Name**, specify a name for the event without any space or special characters. For example, DemoEvent
* In **Display Name**, specify a name that you want to see at the event.
* In **Description**, specify a short description of the event.

5. Click + **Add Attribute** to add event attributes and follow these steps.

* In **Name**, specify an appropriate name for the attribute. **Customer Identifier is a mandatory attribute for a custom event**.
* In **Data Type**, choose the type of the attribute.

<Table align={["left","left"]}>
  <thead>
    <tr>
      <th>
        TYPE
      </th>

      <th>
        DESCRIPTION
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        CUSTOMER IDENTIFIER\*
        (MANDATORY)
      </td>

      <td>
        This is a mandatory attribute for an event and is used to identify an existing customer and also to register a new customer if required.  

        You need to configure identifier type, source, and associated source account.  

        * **Customer Identifier**: Choose the identifier type from the available options - Mobile number, email ID, external id, WeChat ID, userId, Martjack ID.  
        * **Source**: Choose the source from which you want to identify customers. Facebook, WebEngage, WeChat, Instore, Martjack, TMall, Taobao, JD, e-Commerce, Website, Line, and other sources.  
        * **Source Account**: For sources with multiple accounts, such as WeChat or Facebook, choose the desired account to identify registered customers from that source account.  
        * **Add customer if not available**: Enable this option to automatically register new customers (in the loyalty program) that are captured through the event.  

        For example, if you set customer identifier as email ID, and Source as InStore,  

        * when an email id that is already registered on InStore is identified, the data is tagged to the customer and saved in the Capillary system  

        * when a new email id identified, the customer will be first registered **if Add customer id not already present** is enabled. The event details are tagged to the customer before saving the data.
      </td>
    </tr>

    <tr>
      <td>
        Enum
      </td>

      <td>
        Choose this to capture the predefined values for the attribute. In POSSIBLE VALUES enter the supported values for the field separating each by a comma (do not leave space after a comma). For example, if Name is Hobby, you could have the values Music, Sports, Fishing, Archery, Gardening, Others.  

        *Enum is a data type consisting of a set of predefined values.* 
      </td>
    </tr>

    <tr>
      <td>
        Till Code
      </td>

      <td>
        Choose this to capture Till codes.
      </td>
    </tr>

    <tr>
      <td>
        Coupon Code
      </td>

      <td>
        Choose this to capture coupon codes and configure the Regex (regular expression) for coupon codes accordingly.
      </td>
    </tr>

    <tr>
      <td>

      </td>

      <td>
        A customer identifier attribute is required for any custom event.  

        Choose this to capture customer identifiers, associated sources, and source accounts from which the event is triggered.  

        * \*NOTE\*\*: Customer Identifier capturing is mandatory for custom events. You cannot save an event without this attribute.  
        * \*CUSTOMER IDENTIFIER\*\*: Mobile number, email ID, external id, WeChat ID, Martjack ID.  
        * \*SOURCE\*\*: Facebook, WebEngage, WeChat, Instore, Martjack, TMall, Taobao, JD, e-Commerce, Website, Line, and other sources.  
        * \*SOURCE ACCOUNT\*\*: For sources with multiple accounts such as WeChat and Facebook, choose the account that you want to associate with the attribute.  
        * \*ADD CUSTOMER IF NOT AVAILABLE\*\*: Enable this option to automatically register new customers (in the loyalty program) that are captured through the event.
      </td>
    </tr>

    <tr>
      <td>
        Date
      </td>

      <td>
        Choose this to capture date values. The following are the different date formats supported.  

        yyyy-MM-dd'T'HH:mm:ssXXX, yyyy-MM-dd'T'HH:mm:s.S, yyyy-MM-dd HH:mm:ss, yyyy-MM-dd, dd-MM-yyyy HH:mm:ss,\
        MM/dd/yyyy HH:mm:ss, yyyy/MM/dd HH:mm:ss, yyyy/MM/dd, dd-MM-yyyy, MM/dd/yyyy, yyyyMMdd HH:mm:ss, dd-MMM-yy, yyyy-MM-dd'T'HH:mm:ss, EEE MMM dd HH:mm:ss z yyyy, MMMM,dd,yyyy, MMMM,dd, and yyyy-dd-MM HH:mm:ss.
      </td>
    </tr>

    <tr>
      <td>
        Product SKU
      </td>

      <td>
        Choose this to capture product SKUs or item codes.
      </td>
    </tr>

    <tr>
      <td>
        Product Brand
      </td>

      <td>
        Choose this to capture product brands.
      </td>
    </tr>

    <tr>
      <td>
        Product Category
      </td>

      <td>
        Choose this to capture product categories.
      </td>
    </tr>

    <tr>
      <td>
        String
      </td>

      <td>
        Choose this to capture free-flowing text that could contain alphabets, numbers, and spaces.
      </td>
    </tr>

    <tr>
      <td>
        Double
      </td>

      <td>
        Choose this to capture a double data type.  

        * Double is a 64-bit floating value with precision up to 15 decimal places\_.
      </td>
    </tr>
  </tbody>
</Table>

* Enable Required if the attribute is a required field for the event.
* Enable **Is part of unique key**, if you want the attribute to be a part of unique key. For information on uniqueness check, see [Event uniqueness check](https://docs.capillarytech.com/docs/behavioral-events-2#enabling-uniqueness-check). Any attribute that is made as part of the unique key, cannot be reverted to a non-unique field.
* Enable **Is PSI data**, if you want to classify the attribute as sensitive data. This is applicable for attributes that are of type Enum, String, and Double. Refer to the PSI data documentation for more [information on classifying PSI data](https://docs.capillarytech.com/docs/classify-potentially-sensitive-information-psi).
* Similarly, click **+ Add Attribute** to create more attributes for the event.

6. Click **Next** to continue
7. Check **EMF Consumer** to show the event in Loyalty Manager, and Bounceback Campaign to reward points, coupons, or just send messages. By default, these events are consumed by Essential Insights.
8. In the **Add destination** page, select the **Loyalty** check box to send the event to Loyalty and process it. If it is not selected, the event is not sent to Loyalty and will not be considered for any points, rewards or any other loyalty program. By default, the **Loyalty check box** is not selected. You must manually select this option to send the event to Loyalty.
9. Click **Done** to save the event.
10. Test the event to see whether data is flowing to the system as expected. For example, for the Add to Cart event, open the WebEngage portal, and try adding items to the cart. The system will automatically validate the data and complete the testing process. For detailed instructions, see Test & Publish Event.

> 📘
>
> * The Publish button will be active only once the page is refreshed after pushing the event's data to the system. You need to refresh the page manually.

10. Click Publish to publish the event.

> 📘
>
> * Once the event is published, you cannot edit or delete either standard or custom attributes.
> * After creating, testing, or publishing the custom event successfully you can map it with the source event. For details, refer to mapping custom events to source events.

### Enabling uniqueness check

In behavioural events, you can enable uniqueness checks and avoid issuing reward points for duplicate events. After the uniqueness check, duplicate events are not deleted. This ensures that points are not provided for the duplicate events.

 **Use case**

A behavioural event comes to Capillary from WebEngage and the timeout set for this request is 5 seconds at WebEngage. If Capillary fails to respond within 5 secs, WebEngage triggers the same request again. The uniqueness check enables to identify the duplicate events and avoids issuing reward points for duplicate events.

To enable uniqueness-check in the behavioural events, perform the following:

1. Enable the uniqueness check configuration in the webhook. There is no UI to enable uniqueness check configuration in the webhook and this must be performed using the webhook API call. 
   1. For new orgs, use the POST call and create a webhook with uniqueness check configuration or create a webhook using UI and use PUT API call to update the webhook. For more information, see [Add webhook](https://docs.capillarytech.com/reference/add-webhook) and [Update webhook](https://docs.capillarytech.com/reference/update-webhook). 
   2. For existing orgs, use PUT API call and update the webhook to enable the uniqueness check.
      > 📘 Notes:
      >
      > * Once enabled, you cannot disable the unique check configuration.
      > * Once uniqueness check is configured for the webhook, all the events in the org should have uniqueness check enabled.
2. In the events page, use the toggle switch and add the desired attributes to unique key. You can do this using API or from the UI.  To add it from the UI, 
   1. Enable the **Is part of unique key** switch.\
      By default, the event name and customer identifier are part of the unique key and the enabled attribute is added as a part of the unique key along with the event name and customer identifier.\
      The unique key follows the format EventName*Customerid\_Attribute1\_Attribute2*...., such as Event1\_9123456789\_Till1. In this example, Event1 represents the event name, 9123456789 is the customer identifier, and Till1 represents the till code.\
      ![](https://files.readme.io/3a84974-Uniqueness_check.png)
   2. Make sure that the **Required** switch gets enabled. The unique key attributes are marked automatically when we enable the unique key switch.
      > 📘 Once the attribute is enabled as part of the unique key, it cannot be disabled.
      >
      > By default, the event name and customer identifier are part of the unique key and the enabled attribute is added as a part of the unique key along with the event name and customer identifier.

### Map custom event to source event

There are some instances where events that come to Capillary's system are not in a format supported by Capillary. For example, the Capillary does not support an event name with a blank space. Suppose an event named Promotion Viewed is coming from WebEngage (source). You need to create a custom useevent - promotionViewed (custom event name) and map it to Promotion Viewed (source event name) using the event mapping process. 

Behavioral Events lets you map a custom event to a source event.  You can do it at any phase - after creating, testing, or publishing a custom event. You can map the source event name and attributes to a custom event name and attributes stored in Capillary's system.

The following are the different stages of event publishing when you can map a custom event to a source event.

#### Create custom event

To create a custom event, follow these steps. 

1. Navigate to **Organization Settings** > **Master Data Management** > **Data Model** > **Behavioral Events.**
2. In the **All Events** tab, click + Add Event
3. On the **Add Events** page, click + *Create New Event* to create, test, and publish a custom event with attributes.

#### Map custom events and their attributes

To map a custom event to a source event, follow these steps. 

1. Navigate to **Organization Settings** > **Master Data Management** > **Data Model** > **Behavioral Events.**
2. In the **All Events** tab, search the existing or newly created custom event using the event name.
3. Click +**Add Mapping** to map the custom event with the source event. 
4. On the **Add Mapping** page, choose the source (For example, WebEngage or Custom). Once you save mapping details, you cannot change the source.
5. In **Event Name**, enter the event name of the source to map to the custom event name.
6. Enter the source's event attribute to map the custom event and the source event attributes.
7. Click **Save**.

#### View and modify a custom event

To view and edit mapping, follow these steps. 

1. Navigate to **Organization Settings** > **Master Data Management** > **Data Model** > **Behavioral Events.**
2. In the **All Events** tab, search your preferred custom event using the event name.
3. Click on the mapped custom event and navigate to the **Mappings** tab to view the event mapping.
4. Navigate to the **Mappings** tab, click the **Edit** icon.
5. Modify the mapping as You can modify the event name and event attributes - the event name and source attributes. The system does not allow to change the source.
6. Click **Save**.

## Add a Standard Event

A standard event is a predefined event that has a defined set of attributes. The following illustration shows different steps involved in adding and publishing a standard event.  

To configure and publish an event, follow these steps.

1. On the Behavioural Events home page, click **Add Event.** 
2. Navigate to the event that you want to add, click the respective **Add** option, click **Next**, and click **Done**
3. Create attribute mapping if required. Attribute mapping is a way that lets our Capillary system understand the attributes that are created in an event. This is optional and is required only if the attribute names for the event are different in the third-party source account and Behavioural Events platform.

   1. To do attribute mapping, navigate to the event and click **Add Mapping**.

{/*-*/}

2. In **Source**, select the source of the event. For now, only WebEngage is supported.
3. In **Event Name,** specify your preferred name for the event.
4. In Attributes, enter the name of each attribute as in the Source(WebEngage). The attributes on the left refer to the names as in the Capillary system.

{/*-*/}

4. Test the event to see whether data is flowing to the system or not. For example, for the Add to Cart event, open the WebEngage portal, and try adding items to the cart. The system will automatically validate the data and complete the testing process.

> 📘
>
> The Publish button will be active only once the page is refreshed after pushing the event's data to the system. You need to refresh the page manually.

5. Click **Publish** to publish the event

## Test & Publish Event

By default, an event that is created will be in draft mode. Once the event is tested successfully and if the data is flowing as desired, you can publish the event to make it live.

**To test event data, you will need the following**:

For testing an event, you need to either pass the data in the supported format or in the code from where you want to implement or through API.

1. Get the Webhook URL of the respective integration.
2. Get the JSON payload of the event that contains all the necessary and optional parameters as configured.
3. POST event data to the Webhook URL.
4. Publish the event (If the data is pushed to Webhook successfully).

The detailed instructions on each step are provided in the following.

1. **Copy the JSON payload of the event. This will contain the parameters to pass for the event**.

To get the JSON payload, follow these steps.

```
1. Click on the event that you want to test and navigate to the { }**Code** tab.
```

2. Copy the JSON and paste it on a Notepad.

2\.**Copy the Webhook or custom URL to which you want to post the data.**

1. On the Behavioral Events home page, navigate to the Webhook tab.

```
2. Copy the Webhook URL for which you want to test and past it on a Notepad.
```

![ee6d461 Webhook](https://files.readme.io/ee6d461-Webhook.png)

3. **Send sample data**

   1. Using the Webhook URL, and the JSON, involve POST API call with some valid parameter details (No authentication required). 

> 📘
>
> The response does not mean that the event has passed the validation successfully. You need to check the Dashboard page if the Testing is successful.

2. Refresh the Behavioral Events page to see the changes.
3. If the validation is successful, you will see the status change from Testing Pending to Publish.
4. Click **Publish** to publish the event.
