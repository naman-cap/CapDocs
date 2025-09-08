---
title: POS Integration Guide
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
A point of sale, or POS, is the system where customers make payments for products or services at the store. In simple terms, a transaction made by a customer at an org's store is a point of sale transaction.

## Overview

### Types of point of Sales

There are two types of POS available for the retailer’s operations. 

1. **On-Premise POS** - This is a licensed POS procured and managed by the org through its internal and external IT members within the intranet. 
   1. **Standalone POS** - This is a dedicated POS terminal having its application, internet, and database within the system. Generally found in the small retail units. 
   2. **Client-server POS** - This is usually found in big retail units, where multiple POS terminals communicate with a central system using a back-office machine. 

2. **Cloud-based POS** - This is cloud-based (hosted) and sold as self or managed services and is configuration driven based on the license details. 
   1. **Client-based POS** - This is a thin client installed in the POS terminal and syncs its operations to the cloud on a timely basis through APIs. 
   2. **Web-based POS** - This is completely browser-based and requires login every time the operation starts. This is completely API dependent.

## POS Events

Most of the POS machines are designed based on the sequence of synchronous events which allows a user to perform multiple actions while performing a retail or financial transaction. A few of such basic events are mentioned below in a sequential order. 

1. **Item Scan**  - Scanning the line items a customer needs to purchase while standing in a queue.
2. **Customer Search** - Asking a customer's primary information to check if he/she is an existing member. 
3. **Customer Enrollment** - Enrolling a customer in the loyalty program using primary, demographic information to make him/her a member of CRM.
4. **Customer Update** - Updating the demographic information of existing customers.
5. **Coupon Redemption** - Redeeming a customer's coupon on a transaction considering either discount or tender. 
6. **Points Redemption** - Redeeming a customer’s points on a transaction considering either discount or tender.
7. **Transaction Complete** - Completing a transaction and generating the invoice to print.

Capillary provides an easy process to integrate with any retail environment based on the sequences of events designed for the POS system. However, the touchpoint for the integration depends completely on the business and operational needs.\
During the integration process, Capillary provides a list of APIs which can be consumed based on the tailor-made sequences and approaches decided/agreed by the business and operation of any organization.\
The Capillary APIs are completely designed based on the sequential events of the POS system which make it easier to integrate with no or minimal time.

## Integration Process Flow

### Customer

This section guides you on how to integrate your customer data with Capillary using APIs.  Capillary provides various APIs around processing customer data such as search customer, enroll in the loyalty program, and update details. A developer can consume these APIs based on the events provided at the POS.

The processes for basic search and customer enrollment are provided in the following.

#### 1. **Customer Fetch**

This event lets you fetch details of a customer that exists in the CRM database with the relevant demographic and purchase history.

Use Cases:

<Table align={["left","left"]}>
  <thead>
    <tr>
      <th>

      </th>

      <th>

      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        UC1.1
      </td>

      <td>
        A user wanted to fetch the details of the customer including history, loyalty points, and coupons, etc. to show into the POS screen.
      </td>
    </tr>

    <tr>
      <td>
        UC1.2
      </td>

      <td>
        A user wanted to fetch a few recent transactions of customers to show into the POS screen.
      </td>
    </tr>

    <tr>
      <td>
        UC1.3
      </td>

      <td>
        A user wanted to fetch the customer points summary to display the points earned, redeemed, and expired in the PoS screen.
      </td>
    </tr>

    <tr>
      <td>
        UC1.4
      </td>

      <td>
        A user wanted to display the basic details of the customer along with cumulative loyalty information into the POS Screen.
      </td>
    </tr>
  </tbody>
</Table>

![523](https://files.readme.io/939c50a-Capture.PNG "Capture.PNG")

**Steps to follow:**

1. Insert the primary identifier of a customer (mobile no., email ID, card number, etc. ) on the POS UI. 
2. Consume customer/get API with provided keys.
3. If the customer exists, display all the necessary information on the POS UI. 
4. Else, display a message stating the customer does not exist and prompt for enrollment. 

**For Best results**

* It is recommended that any one of the customer identifiers shall be used to fetch the customer details, i.e. a user can either use mobile or email or external id.
* It is recommended to fetch customer details using a mobile number with country code
* Display the recent interaction of the customer using this API.
* The right parameters mentioned in the API document shall be used to get the specific and optimal results based on the requirement.

#### 2. **Customer Add(Enroll)**

This event lets you enroll a user in the CRM database with the primary identifier and other demographic information (from the POS). 

Use Cases-

<Table align={["left","left"]}>
  <thead>
    <tr>
      <th>

      </th>

      <th>

      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        UC1.1
      </td>

      <td>
        A user wanted to enroll a customer into the brands' loyalty with all their consents
      </td>
    </tr>

    <tr>
      <td>
        UC1.2
      </td>

      <td>
        A user wanted to enroll a customer into the brad without the loyalty consents
      </td>
    </tr>
  </tbody>
</Table>

The following flow chart shows how to add a customer.

![507](https://files.readme.io/2ba91f5-Capture.PNG "Capture.PNG")

**Steps to follow:** 

1. On the POS UI, insert the primary identifier of the customer (mobile no., email ID, card number, etc. ) along with demographic details. 
2. Consume customer/add API with provided keys.
3. If the customer already exists, the customer details need to be updated and display the confirmation on the POS UI. 
4. Else, display a success message display along with the customer information. 

**For Best results** 

* Enroll customers with mobile numbers along with country codes. 
* Capture as many details supported while enrolling.
* In case of API failure, retry for 2 more times with a sleep time of 5 seconds between each call.

### Transaction

This section guides you on how to integrate transactional data with Capillary using APIs. There are various types of transactions. Hence while consuming APIs, you need to pass appropriate payloads and parameter types.  

A transaction validation depends on the following configs on InTouch Profile > **Organization Settings >Systems & Deployment > !ntouch POS Configuration > Billing.** 

* **CONF\_LOYALTY\_IS\_BILL\_NUMBER\_REQUIRED**: To make bill number mandatory to capture transaction details.
* **CONF\_CLIENT\_BILL\_NO\_REGEX**: Regular expression of the transaction number.
* **CONF\_LOYALTY\_IS\_BILL\_NUMBER\_UNIQUE**: To set transaction numbers uniqueness across the organization. You also need to set the number of days in which you want the bill number unique.
* **CONF\_LOYALTY\_BILL\_NUMBER\_UNIQUE\_ONLY\_STORE**: To set transaction number uniqueness only at the store level. You also need to set the number of days in which you want the bill number unique.
* **CONF\_LOYALTY\_BILL\_NUMBER\_UNIQUE\_ONLY\_TILL**: To set transaction number uniques at the Till level. You also need to set the number of days in which you want the bill number unique.
* **CONF\_LOYALTY\_BILL\_NUMBER\_UNIQUE\_IN\_DAYS**: Number of days for which the transaction number uniqueness has to be applicable.
* **CONF\_LOYALTY\_MAX\_BILL\_AMOUNT**:  Maximum amount allowed per transaction. Any transaction amount beyond the minimum and maximum limit set will be ignored.
* **CONF\_LOYALTY\_MIN\_BILL\_AMOUNT**: Minimum transaction amount required in a transaction. Any bill amount beyond the minimum and maximum limit set will not be accepted.
* **CONF\_RETRO\_TRANSACTION\_ENABLE**: To allow conversion of not-interested transactions to loyalty transactions.
* **CONF\_CLIENT\_RETRO\_MAX\_ALLOWED\_AGE\_DAYS**: Maximum timeframe (between transaction and tagging customer) allowed for customer tagging to a not-interested transaction.

#### Return bill Validations

#### Transaction Add

This event allows you to add a transaction submitted in the POS including details such as customer, transaction (billing), and line items. Make sure transactions of loyalty events are added with valid customer identifications, else it will be posted as “not\_intrested” transaction type. 

The following is the flow chart of the transaction add.

![411](https://files.readme.io/168bafa-Capture.PNG "Capture.PNG")

**Steps to follow:**

1. Complete the transaction at the POS. 
2. Consume transaction/add API to post the transaction with relevant parameters and payloads. 
3. If a transaction already exists, the relevant needs to display on the POS UI. 
4. Else, it should add the transaction in the CRM DB and display a success message on the POS UI.

#### Points

This section guides you on how to consume loyalty points at the POS and apply it on a transaction before the check-out process. It is a two-step process - first, you need to validate the authenticity and eligibility of redemption; second, you need to process points of redemption. Mentioned would be the flow for Points to be redeemed. 

The following is the flow chart of points redemption.

![588](https://files.readme.io/a1aa47a-Capture.PNG "Capture.PNG")

**Steps to follow:** 

1. Enter the points to be redeemed by a customer.
2. Consume points/Isredeemable API to validate if the specified points can be redeemed. 
3. If not validated, display the relevant error message on the POS UI, ignore the redemption process, and commit the transaction into the POS. 
4. Else, apply the redeeming value on the transaction and commit the transaction into the POS. 
5. Consume transaction/add API and on success consume point/redeem API.

#### Coupons

This section guides you on how to consume a loyalty coupon at the POS and apply it on a transaction before check out. It is a two-step process - first, you need to validate the authenticity and eligibility of the redemption; second, you need to redeem the coupon. 

The following is the flow chart of coupon redemption.

![592](https://files.readme.io/3ce5388-Capture.PNG "Capture.PNG")

**Steps to follow:**

1. Enter the coupon code that needs to be redeemed.
2. Consume coupon/Isredeemable API to validate if the coupon is redeemable. 
3. If not validated, display the relevant error message on the POS UI, ignore the redemption process and proceed with the transaction. 
4. Else, apply the redemption value to the transaction and commit the transaction into the POS. 
5. After committing the transaction, consume transaction/add API and on success consume coupon/redeem API.
