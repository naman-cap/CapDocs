---
title: Entites management
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
# Introduction

An entity is a distinct and identifiable object or concept, such as a customer, product, or transaction. Each entity is characterized by fields or attributes that provide detailed information about it. These fields capture the properties or characteristics associated with the entity. For example, an entity named "Customer" has fields such as Customer ID, first name, and last name.

# Advantages

Entities allow standardized and consistent data handling across various applications and services, promoting efficient data classification and analysis.

Standardized entities provide the following benefits:

* Enhance communication and interoperability by sharing information between different parts of the system.
* Simplify data integration and enhance data analysis, enabling businesses to gain better insights into customer behavior.

This information enables targeted marketing, personalized customer interactions, and better decision-making that leads to improved customer experiences.

# Supported entity types

The different types of entities in Capillary platform are:

1. **Customer**: A customer is an individual who either buys goods/services or subscribes to the organization’s newsletters. An organization refers to a store, business firm, hospital, or restaurant. See [v2 customer APIs](https://docs.capillarytech.com/reference/customer-1) and [v1.1 customer APIs](https://docs.capillarytech.com/reference/customer).
2. **Transactions**: A transaction represents a purchase or return event. The parameters for transaction APIs are configuration-dependent. See more details [v2 transaction APIs](https://docs.capillarytech.com/reference/transaction-1) and [v1.1 transaction APIs](https://docs.capillarytech.com/reference/transaction).
3. **Store**: The store entity holds information about an organization's stores and hierarchy. This entity provides APIs to manage stores. To know more, see [Store APIs](https://docs.capillarytech.com/reference/store).
4. **Product**: The product entity holds all products of an org and product-related information such as size, color, type, and brand. Product APIs allow you to fetch details of a specific product, modify existing details, change a product's brand name, and create new attributes for a product. See [Product APIs](https://docs.capillarytech.com/reference/product).
5. **Behavioral Events**: Behavioral events help capture customer activities such as registration, forgot passwords, and cart abandonment. You can create custom events, fetch event data, configure event fields, and do more with [Events APIs](https://docs.capillarytech.com/reference/behavioral-events-1).
6. **Card**: Cards are loyalty identifiers and enable orgs t o run card-based memberships. Cards are associated with a card series and each customer can have multiple cards. A card number or an card external ID is a unique identifier of a customer and is used in fetching customer details. See more about [Cards APIs.](https://docs.capillarytech.com/reference/loyalty-cards)
7. **User Group**: The new user group (v2) solves the use cases of both B2B loyalty and B2C loyalty unlike the previous version which was designed for B2C cases. This entity contains APIs to manage user groups. See more about [User Group.](https://docs.capillarytech.com/reference/user-group-v2)
8. **Request**: The requests entity enables solving use-cases where an approval workflow is required for the data ingestion, modification or deletion. For example, a user deletion workflow or a transaction addition workflow where approval is required.

# Entity structure

Entities represent structured information and are composed of objects or collections of objects. These objects organize information using key-value pairs.\
Object: An object is a structured format that stores information as key-value pairs.

* Each key is called a field
* Each value can be a string, number, boolean, array, or another object.

Fields: A field is a key within an object that defines a specific attribute. Fields determine the structure and meaning of the information stored.

There are three types of fields:

* **Standard fields** : Built-in fields provided by the system.
* **Extended fields**: Proposed fields to standardize input values and keys across organizations.
* **Custom fields**: User-defined fields used to store additional attributes not covered by standard or extended fields.

# Supported data types

The entities support data types such as integer, string, double, date-time, standard enum, and custom enum.

* **Standard enum**: Consists of predefined values that are common for any organization. In the database table, an extended field with the type standard enum is mapped to one or more values.
* **Custom enum**: Consists of predefined values for each field and each value is mapped to a specific organization. A value can be mapped to different organizations.

![9b515757d6b8ca25f30dcab16fbce8e8d5b4054ce1615f129cc47556cff5e668 entity main page](https://files.readme.io/9b515757d6b8ca25f30dcab16fbce8e8d5b4054ce1615f129cc47556cff5e668-entity_main_page.png)