---
title: Behavioral Events
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
## Behavioral Events Overview

Events are activities of a customer either on an online store or at a physical store. Behavioral Events is a platform that lets you create standard and custom events to capture customer activities across channels.

## Objective

The Behavioral Events data collected across sources can be used to develop personalized content, segment customers, or even incentivize customers.

This product solves different use cases for different verticals. 

For example:

1. In an offline retail or brick-and-mortar store, you can send coupons to customers for different events such as scanning a QR code of a particular product category, or show interest on a particular item.  This increases conversion without customers visiting the store again.

2. In an e-commerce platform (website or app), customers can be engaged through games or quizzes.

3. In a healthcare domain, customers can be rewarded on completing health related activities to drive better engagement and loyalty of the customers.

4. In Consumer Packaged Goods (CPG), customers can be rewarded on participating in sales promotion events.

5. In case of hospitality, you can send tailored messages to customers based on the stage of their purchase cycle such as inquiry, booking, check-in and checkout.

## Modules that consume Behavioral Events

Currently, events data can be consumed by Insights+ and Loyalty+ . By default, Insights+ consumes any event that you create on Behavioral Events. However, you need to manually set if you want to consume by Loyalty+.

* Loyalty+: This includes both loyalty and DVS (Dynamic Voucher System).

  * Consumed by Loyalty Manager to send messages to customers or incentivize then based on events data. For example, you could send a message when a product a customer is looking for is of limited stock.
  * Consumed by Bounceback Campaign to run engagement programs based on the events data. For example, you could send discount coupons on product abandonment or product add to cart events.

* Insights+ (upcoming feature) to analyse events data. For example, most searched products, frequently searched products during a festival season.

## Types of Behavioral Events

The following are two types of Behavioral Events available.

* Standard Events: These are predefined events with all the required attributes and values. The following are the list of standard events. Administrators can enable events that are required for an organization.\
  Product Removed From Cart, Customer Logged Out, App Installed, Product Added To Cart, Customer Registered, Category Viewed, Product Viewed, Customer Logged In, Coupon Applied, Product Searched, Coupon Denied, and App Uninstalled.

* Custom Events: If you wanted to capture a specific customer activity other than in Standard Events, you can create custom events with event name, attributes, and values.

The following table provides an understanding of choosing between standard and custom events.\* 

<Table align={["left","left","left"]}>
  <thead>
    <tr>
      <th>
        SCENARIO
      </th>

      <th>
        STANDARD EVENTS
      </th>

      <th>
        CUSTOM EVENTS
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Add standard attributes (such as SKU and Till) before publishing
      </td>

      <td>
        No
      </td>

      <td>
        Yes
      </td>
    </tr>

    <tr>
      <td>
        Edit standard attributes before publish
      </td>

      <td>
        No
      </td>

      <td>
        Yes
      </td>
    </tr>

    <tr>
      <td>
        Delete standard attributes before publishing
      </td>

      <td>
        No
      </td>

      <td>
        Yes
      </td>
    </tr>

    <tr>
      <td>
        Add standard attributes (such as SKU and Till) after publishing
      </td>

      <td>
        No
      </td>

      <td>
        No
      </td>
    </tr>

    <tr>
      <td>
        Edit standard attributes after publishing
      </td>

      <td>
        No
      </td>

      <td>
        No
      </td>
    </tr>

    <tr>
      <td>
        Delete standard attributes after publishing
      </td>

      <td>
        No
      </td>

      <td>
        No
      </td>
    </tr>

    <tr>
      <td>
        Add custom attributes (string, enum, double, date) before publishing
      </td>

      <td>
        Yes
      </td>

      <td>
        Yes
      </td>
    </tr>

    <tr>
      <td>
        Edit custom attributes before publishing
      </td>

      <td>
        Yes
      </td>

      <td>
        Yes
      </td>
    </tr>

    <tr>
      <td>
        Delete custom attributes before publishing
      </td>

      <td>
        Yes
      </td>

      <td>
        Yes
      </td>
    </tr>

    <tr>
      <td>
        Edit custom attributes after publishing
      </td>

      <td>
        No
      </td>

      <td>
        No
      </td>
    </tr>

    <tr>
      <td>
        Delete custom attributes after publishing
      </td>

      <td>
        No
      </td>

      <td>
        No
      </td>
    </tr>

    <tr>
      <td>
        Add custom attributes (string, enum, double, date) before publishing
      </td>

      <td>
        Yes
      </td>

      <td>
        Yes
      </td>
    </tr>
  </tbody>
</Table>

## Steps involved in configuring and publishing an event

1. [Create a Webhook integration](https://docs.capillarytech.com/docs/add-webhook-integration) for a WebEngage platform or any other third-party apps or platforms.
2. [Create a new custom event](https://docs.capillarytech.com/docs/add-a-custom-event) or [add a standard event](https://docs.capillarytech.com/docs/add-a-standard-event).
3. Create attribute mapping.
4. Run a sample test to validate whether the data is flowing correctly as desired.
5. Publish the event.

## Limitations of Behavioral Events

The following are the limitations of Behavioral Events.

* No support for standard entities such as SKU, and category in filters and KPIs for custom events.
* No support for anonymous events, customer identifier is required.
* Data is captured only from predefined integrations (such as WebEngage or Webhook), and not directly from sources (such as Ecommerce website, app, and WeChat).
* The platform registers customers from the registered user profiles data shared in S3 bucket. If there is no WebEngage integration, customer registration needs to handle through API Integration.
* Limitations for Custom Events:
  * A maximum of 10 active events are allowed in an org.
  * A maximum of 20 attributes are allowed in an event.
  * Custom attribute names can have only up to 50 characters.
  * Custom attributes can have only enum, date, boolean, integer, double, and string as data types.
