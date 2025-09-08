---
title: 2021 Releases | CDP
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
## October/November 2021 Releases


### Support for Card Custom Fields


By default, we support several standard and extended fields for cards. However, your brand requires storing additional information like card delivery address, chip information, state, or PIN code. Most of such additional fields are of type string and unsupported by default extended fields. 

With this release, you can add new field types and custom data to make them align with your requirement.

Use Case

Card information which needs to be captured but does not fit into the available card extended fields can now be captured with card custom fields. Some examples can be card delivery address, city, state, pin code etc.

While adding a new custom field for card, field scope should be selected as “customer\_card”

![1036](https://files.readme.io/2e9f236-StefLpmOeLqa73ATQWTZAOeJ36vZJ2h9oQ.gif "StefLpmOeLqa73ATQWTZAOeJ36vZJ2h9oQ.gif")

The following APIs now support adding or fetching card custom field details.

GET v2/customers  
POST v2/customers  
POST v2/card  
PUT v2/card  
GET v2/card  
PUT v2/card/bulk  
Card update event in Event Notification  
Card Update Event added to the list of available events in Event notifications. You can now receive events whenever a card is updated via Card Update APIs - PUT v2/card and PUT v2/card/bulk. 

**Use Case**

 A notification needs to be sent to the customer once the physical card is dispatched for delivery. Card status label and card custom fields like address are updated via card update API and a notification is triggered.

### Support to fetch Card details on Sharingan


Sharingan now supports fetching card details of a customer. You can access all card details like card number, series code, card status, label, extended fields etc. 

**Use Case**

Show card details of a customer in a microsite.

### Authentication for Behavioral Events


Earlier, the Webhook API requests did not require even a basic authentication. Anyone could just copy the schema and send requests to Capillary.

You can now secure your Webhook API requests with authentication. The added layer of authentication is extremely helpful in preventing fraud or abuse of data. The ideal case where authentication is effective is when your brand uses behavioral events to reward customers with points or coupons.

To avail added security, you need to get the authentication enabled for the brand by raising a ticket with the platform team. You are good to go and you can use till credentials for authenticating requests from Webhook API. You can either use Basic Auth or OAuth.

**Use Case**

Brands using Behavioral events for rewarding customers by issuing points/coupons which have monetary value can use authentication to prevent abuse/fraud.

## August 2021 Releases


### Retry Failed Loyalty Events


On the customer profile page on Member Care, you can now view the list of loyalty events that have failed or are in the queue. In addition, you can also re-trigger failed events from the same page. 

This release helps the support personnel whenever they receive calls/tickets from customers regarding loyalty event failures. 

For more details, see View Loyalty Pending Events.

![1119](https://files.readme.io/9f5d0d1-HZyw07L3jWNDESevN4Xoi08pFo39mOIhvQ.gif "HZyw07L3jWNDESevN4Xoi08pFo39mOIhvQ.gif")

### Cart Promotions


On the customer profile page on Member Care, a separate tab to view Cart Promotions has been introduced, where you can see all cart promotions issued to a customer and cart promotions redeemed by a customer. For more details, see View Cart Promotions. 

![1106](https://files.readme.io/e7e8290-d4JakmY1L88tpFzSReaTAzNDj0QQ9xCQDA.png "d4JakmY1L88tpFzSReaTAzNDj0QQ9xCQDA.png")

### OTP Validation for Changing Customer Status


With this release, you can validate a customer's status change to Deleted status by entering the OTP that is sent to the customer on Member Care. For more details, see OTP Validation for Changing Customer Status.

![1122](https://files.readme.io/e3feaca-V_lezJ4obdqE9uHSvSyjZtr8ntYhSHK0_w.gif "V_lezJ4obdqE9uHSvSyjZtr8ntYhSHK0_w.gif")

## June 2021 Releases


### 1. AIRA models dashboard


AIRA models dashboard is Capillary’s end-to-end observability platform to view, initiate, train, and manage Capillary’s machine learning propensity models.

**Problem statement**  
Capillary has built several propensity models over the last two years in order to help clients to run personalized marketing campaigns. For example, Engage+ has a lapsation propensity filter to empower orgs to target customers who are going to leave in the next 30 days. This filter is driven by the lapsation propensity model and built by Capillary’s customer intelligence (CI) team. Similarly, there are other models and corresponding audience group filters for running campaigns based on offer propensity, transaction propensity, product propensity, campaign propensity, and other inferred customer behavior patterns.

* Until now, there was no visibility into the list of models available for usage by an org. Customer success managers (CSMs) had to discuss with the product team or the customer intelligence team to understand available models and select the suitable model for their business objectives.
* After model selection and initiation, there was a lot of effort involved to ensure sufficient data to train the model and get desired results. 
* After training, when the model is in production, the customer intelligence team had to manually check accuracy parameters and take decisions on whether models need to be re-trained. All of these tasks led to productivity losses and delivery delays. 

**Solution**  
Capillary’s AIRA models dashboard overcomes the above issues by automating the entire machine learning model lifecycle. It allows users (CSMs, Data Analysts, and Customer Intelligence team members) to view, initiate, validate, train, and manage the entire gamut of machine learning models built by the customer intelligence team in a single place. 

The following are few sample images.

Landing page

![1111](https://files.readme.io/ef518eb-0k7t6-JPUAm2FdW1H-aOrQ9s4YTiWlb3Wg.png "0k7t6-JPUAm2FdW1H-aOrQ9s4YTiWlb3Wg.png")

New model page

![1216](https://files.readme.io/6f8220e-bzCPiHBoVjT69JXk_SAJ9CrRIbDGYL_2VA.png "bzCPiHBoVjT69JXk_SAJ9CrRIbDGYL_2VA.png")

Model details page

![1081](https://files.readme.io/949c0f3-THhWdxq8svKd0h9PQNNb9GqvID246-B20g.png "THhWdxq8svKd0h9PQNNb9GqvID246-B20g.png")

**Key Highlights\&#xA;**&#x54;he following are the key highlights of AIRA.

* Capillary’s machine learning operations (ML-Ops) platform gets models into production quickly and effortlessly.

* The centralized dashboard helps preview and leverage Capillary’s out-of-the-box AI solutions available for an organization.

* The entire machine learning model lifecycle is automated and handled on the platform - No more follow-ups through tickets and meetings.

* Complete visibility on the status of models initiated – Identify and take action on models that are falling below accuracy thresholds.

* Propensity models are available on Engage+ filters that are already available for initiation. There are more than 25 models in the pipeline for upcoming releases. 

### 2. User group-based loyalty: Build business engagements


For any brand to achieve the ultimate aim of benefiting its customers, it is important to motivate or encourage the contributors involved in this process. With the addition of this feature, the businesses also can launch B2B loyalty programs conveniently and systematically benefiting various levels of hierarchy.

Currently, the usability of Loyalty+ for any business or a brand is limited to benefit its end customers. The current addition facilitates orgs to create personalized loyalty programs not just to the end customer group, but also to the contributors in the supply chain. 

Use Cases  
  **\* Fleet Loyalty**: Fleet Drivers can earn points by purchasing fuel at retail outlets but points redemption can happen by fleet owners in the same group.  
  **\* Affiliate Marketing programs**: The affiliate enrolled in the program can make customers buy products. With a product purchased by the customer, the rewards are accrued to the affiliate's account.  
  **\* Multi-Level Marketing Programs**: A sales structure where existing distributors can recruit new distributors to sell the products. Distributors make money through a percentage of their recruits' sales and also direct sales of products to customers.

* **Corporate Loyalty Programs**: Employees making transactions and rewards are awarded and redeemed at a company level.

**About User Group Loyalty**  
Group Loyalty programs are customer retention solutions with custom group structures and loyalty mechanisms designed to help brands establish brand loyalty. These programs typically treat and incentivize individuals who are part of the same account (as a single group of users). The end-customers benefit from these programs because it allows them to have accelerated rewards as a group. For example, if a B2B account is a “Platinum” account then all members of the group enjoy better benefits, although to attain the “Platinum” account status the previous members might have done loyalty related activities to achieve that status. Orgs benefit from programs like this because it allows them to capture a larger share of mind by involving the community rather than individuals and drive collective behaviour in the desired manner.

**Difference between B2B and B2C loyalty groups**  
Existing user groups are primarily aimed at B2C member groups. In the B2C model, with the help of the Engage+ platform, orgs are able to directly benefit the end customer, ignoring the various levels involved in the chain. 

B2C model has only one primary member with multiple secondary associated. Due to the lack of flexibility in the B2C model, several use cases such as accessing points earned lie mainly with the primary user. 

Whereas, in the B2B model the user can effectively incentivize various groups in the hierarchy. By studying the industry landscape and the B2C user groups requirements, we are targeting to make new user group entities that can cater to a wider variety of use cases, eventually fulfilling the B2B requirement.

**Features of B2B User Groups**

1. Segmentation of groups in a hierarchical manner.
2. Customizable hierarchy and user role depending on the org structure.
3. Ability to have a user in multiple groups.
4. Distinct loyalty actions depending on the user role.
5. Hierarchy Definition to capture client company’s organisational structure.
6. Ability to capture a customer’s association with other customers.
7. Auto creation of groups and addition of members based on user roles.
8. Loyalty permissions in a group based on user role.
9. Granular control of rewards to the group and individual accounts.

**Terminologies**  
The following are the new terminologies of user group loyalty.

* Client: A business entity that is enrolled in the org’s User Group Loyalty. A client can have sub-clients under it (smaller business entities).
* Role: Part (function) played by an individual associated with the business. For example, a company enrolled in a fleet loyalty program can have various user roles such as fleet driver, fleet owner and group fleet owner.
* Customer Hierarchy: It is the ranking of members of org/clients according to the relative status, or position. Hierarchy helps define the association between two customer roles. In the previous example, a fleet driver can report to a fleet owner, whereas a fleet owner can report to a group fleet owner. In this, the customer hierarchy captures each role and their reporting role.

![610](https://files.readme.io/c3769e3-rF-K1c1zQhMf2y6uVIHPJzPWmREAQhiSIw.png "rF-K1c1zQhMf2y6uVIHPJzPWmREAQhiSIw.png")

* Hierarchy definition stores attribute required to create a hierarchy (such as customer roles), validation rules for each role, group automation and role-based loyalty permissions.

1. You can define multiple hierarchy definitions for an org and the default hierarchy definition.
2. Each client can have only 1 hierarchy. Once the hierarchy is set up, all the attributes and configurations created in the hierarchy will apply to the customers associated with the company.

* Validation rules: Used to define the parent-child relationship with other roles. You can limit the max. no. of child roles for each role. Configs for skip-level parent-child mapping available.
* Group Automations: Groups can be implicitly created when a user is associated with a specific role. The user becomes the owner of the group and other users can be added to the group based on the association with the owner.
* Group Permissions: Allows setting up Loyalty permissions such as points redemption and points transfer for each member of the group based on the role.  
  Front end APIs, see User Group Loyalty APIs

### 3. Customer status: Make statuses more meaningful with custom labels


As a starting point for brands to develop and launch impactful marketing campaigns it is really important to categorize their customers according to their engagement with the brand. You can now create different status labels against each standard status making it more meaningful. An active customer is not just an antonym to inactive, you can have meaningful labels that make sense to your brand like registered, transacted, regular. You can restrict specific status from redeeming points or coupons.

![970](https://files.readme.io/ca8fc10-8T3-C6R84jthxcs3BWy-wpMV079PX9auLA.png "8T3-C6R84jthxcs3BWy-wpMV079PX9auLA.png")

## April 2021 Releases


### 1. Enable event mapping for custom events (Behavioral Events)


In the behavioral events module, event mapping for custom events is now enabled. This is used in cases where you want to change the event name or attributes coming from other sources. The source event name and attributes can be mapped to a custom event name stored in our system. 

**Use Case**  
The events coming from WebEngage are having space in their names and are not supported by our system. For example, an event named Promotion Viewed is coming from WebEngage. Since the system does not support event names with space, we create a custom event named promotionViewed. Now you can map the custom event’s name to the original event’s name coming from WebEngage. 

For details, see [Map Custom Event to Source Event](doc:map-custom-event-to-source-event) Custom Event to Source Event]\([http:/google.com](http:/google.com)).

### 2. Get parent bill number for return transactions


In a Return transaction type, the parent\_bill\_number is the unique transaction number of the original bill. This parent\_bill\_number can be added using Add Transaction API to link the return transaction with its original transaction. Now, parent\_bill\_number is enabled in the GET Transaction APIs. So, when a return type transaction is retrieved, we also get the parent\_bill\_number associated with that transaction. 

The following are APIs that can help you to retrieve parent\_bill\_number.

v1.1 GET customer/transactions ([https://docs.capillarytech.com/reference/get-customer-transactions](https://docs.capillarytech.com/reference/get-customer-transactions))  
[v1.1 GET transaction/get](https://docs.capillarytech.com/reference/get-transaction-details-1)  
v2 GET transactions\{id\}[v2 GET transactions\{id\}] ([https://docs.capillarytech.com/reference/get-transaction-details](https://docs.capillarytech.com/reference/get-transaction-details))

### 3. Customer registration and profile update (Member Care)


Now Member Care can be used to register new customers and edit profile details of existing customers. Service desk executives familiar with Member Care can use the platform directly for performing any profile updates or customer registrations. For details, see customer registration and profile update.

### 4. Merge line and bill-level files (Connect+)


Connect+ is a no-code data integration tool. Now it comes with support for joining line-level and bill-level data files and ingesting the joined file using Add Transaction API(v2) in one go/single template. In many orgs, line-level data and bill-level data come in separate files. The new Transaction LineItem Merge template on Connect+ will make transaction data ingestion seamless in such cases. 

To set up the Transaction LineItem Merge template, follow these steps.

1. In Connect+, click Add dataflow to create a new dataflow on Connect+.
2. Click +Select Template and choose the Transaction LineItem Merge template.
3. In the Connect-to-Source stage, fill in the required FTP-related information - FTP location where the source line-level and bill-level files will be placed for ingestion.

![1169](https://files.readme.io/cd6d353-saog3qsJ-mG1s5QoHcjlXNwhuJ_XFK8G_A.png "saog3qsJ-mG1s5QoHcjlXNwhuJ_XFK8G_A.png")

4. In the Join-data stage, enter details pertaining to the bill- and line-level files that need to be joined.

![1175](https://files.readme.io/64daf61-zmCo2sEm2fBMFjxNZjqmhwy_ehYNqNXvhA.png "zmCo2sEm2fBMFjxNZjqmhwy_ehYNqNXvhA.png")

The following are the fields to join the line-level and bill-level. 

* File 1 Regex: Enter the file name pattern for File 1. The pattern specified for the bill-level file is bill\*.csv.
* File 2 Regex:  Enter the file name pattern for File 2. The pattern specified for the line-level file is line\*.csv.
* File 1-2 Join Type: Choose the method for joining the two files - INNER JOIN, LEFT\_OUTER\_JOIN, and FULL\_OUTER\_JOIN. 
* File 1 Headers and File 2 Headers: Enter the headers on which bill-level and line-level files need to be joined.
* File Join Use Case: Select TRANSACTION\_LINE\_ITEM.

5. After completing the above actions, the next steps are the same as setting up Transaction v2 add on Connect+. For details, see Configure Field Mapping & Data Transformation.

### 5. File size limits (Connect+)


Now we have added restrictions on the file size ingested via Connect+ to prevent the platform from overload. 

The following are the restrictions.

A file waiting for ingestion on Connect+ should not exceed 200 MB.  
Connect+ cannot allow more than 2 million records in a file.  
If a file exceeds any of the above conditions, an error message will appear on Connect+. 

<Note title="Note">
**Note**

Soon we will add notes for these restrictions on the user interface.
</Note>

## March 2021 Releases


Card Linked Loyalty Program enables creating multiple loyalty cards within an Organization and linking card series with loyalty programs. Card Loyalty helps define different types of physical or digital cards based on pre-configured logic.:

The following functionalities are supported in Loyalty+ for Card Loyalty.

* Issue cards to customers during or post-registration, where card numbers are added as customer identifiers. 
* Points allocation and redemption using card numbers (Loyalty Program). 
* Search customers by card numbers.
* Delete or deactivate cards issued to customers.

#### Use Cases

1. **Card linked program based on the target audience**

* Create different cards and loyalty programs on the values of customer segments. For example, value card, premium card, and family card.

2. **Card linked program based on distribution mode**

* Create physical cards or digital cards based on customer preference and link them to one or more loyalty programs.

**3. Card linked program based on Organization Units**

* Create card-linked loyalty programs for each organization unit.

#### Key Features of Card Loyalty


The following are the key features of Card Loyalty 

1. Create card linked loyalty program

* Create a card series from InTouch Organization Settings.
* Create a card series using APIs.
* Create a card series using import. For details, see card series import.
* Link card series with an existing loyalty program. 

2. Import existing card data

* Import historical data of customer’s card details. 

3. Generate physical cards

* Generate cards from InTouch Organization Settings.
* Generate card series using APIs.
* Generate card series using import. 

4. Manage card requests using Member Care

* Configure settings to issue card from Member Care 
* Issue a new card to a customer. For details, see issue card to a customer. 
* View card details of a customer 
* Search a customer using a card number 
* Update status of a card 
* View card status audit log

5. Integrate with POS or front-end using APIs 

* Register a customer with a card number. 
* Search customer by card number. 
* Issue card to an existing customer.  
* Issue a card number generated in Capillary \[v2].  
* Issue a card number not generated in Capillary.
* First, add a card number using v2/card API. 
* Then link the card number to the customer using v2/change identifier API.
* Issue an instantly generated card number with a card series.
* First, generate a card number using v2/card/generate API. 
* Then link the card number to the customer using v2/change identifier API.
* Get card details of a customer. 
* Get card details using card number \[v2].
* Get card details using other identifiers \[v2] and \[v1.1].
* Update card status \[v2]. 
* Deactivate a card.
* Reactivate a card.
* Expire a card.
* Delete a card.
* Add a transaction with a card number \[v2] and \[v1.1].
* Redeem points and coupons with a card number. 
* Check if points are redeemable \[v1.1].
* Redeem points \[v1.1].
* Check if the coupon is redeemable \[v1.1].
* Redeem coupon \[v1.1].