---
title: Platform Entities
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
### Customer entities -

**1. Customer:** A customer is an individual who either buys goods/services, or subscribes to the organization’s newsletters. An organization refers to a store, business firm, hospital or restaurant. See [v2 customer APIs](ref:customer-1)  and [v1.1 customer APIs](https://docs.capillarytech.com/reference/customer).

**2. Transactions:** A transaction represents a purchase or return event. The parameters for transaction APIs are configuration dependent. See more details [v2 transaction APIs](ref:transaction-apis) and [v1.1 transaction APIs](https://docs.capillarytech.com/reference/transaction).

**3. Store:** The store entity holds information about an organization's stores and its hierarchy. This entity provides APIs manage stores. To know more, see [Store APIs](ref:store)  

**4. Product:** The product entity holds all products of an org and product related information such as size, color, type, and brand. Product APIs allow you to fetch details of a specific product, modify existing details, change brand name for a product and create new attributes for a product. See [Product APIs](ref:product) 

**5. Behavioral Events:** Behavioral events help capture customer activities such as registration, forgot password, and cart abandonment. Create custom events, fetch events data, configure event fields, and do more with [events APIs](ref:behavioral-events-1) 

**6. Card:** Cards are loyalty identifiers and enables orgs to run card based memberships. Cards are associated with a card series and each customer can have multiple cards. A card number or an card external ID is an unique identifier of a customer and used in fetching customer details. See more about [Cards APIs](ref:loyalty-cards) 

**7. User Group:** The new user group (v2) solves the use cases of both B2B loyalty and B2C loyalty unlike the previous version which was designed for B2C cases. This entity contains APIs to manage user groups. See more about [User Group](ref:user-group-v2) 

**8. Leads:** A lead is a purchase an individual is interested in, especially for offline stores. Leads can be created for both loyalty and non-loyalty customers. This entity provides you the APIs to create, manage and fetch leads. See more about [Leads APIs](ref:leads) 

### Data fields -

**1. Standard Fields:** These are fields created for a specific module to capture basic details. This could be fields at customer level, transaction level, line-item level, coupon level and so on. Standard fields are created by Capillary and are available by default for each module.

**2. Extended Fields:** Extended Fields are proposed fields to standardize input values and keys across organizations. These fields make it easier for the Development and Analytics teams to get rid of the complex data that flows into the database, through existing custom fields. Developers control the field names, data types, enum values, and scopes for the extended fields and can capture values based on rules (logical or regex expressions). See more about [extended fields](https://docs.capillarytech.com/docs/extended-fields).

**3. Custom Fields:** As the name suggests there are custom fields that orgs need to capture for a specific module. It could be of any datatype and value. Reporting is not possible on custom field values. See more about [Custom fields](https://docs.capillarytech.com/docs/extended-fields#custom-fields).
