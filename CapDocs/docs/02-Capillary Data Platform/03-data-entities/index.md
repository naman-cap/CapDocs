---
title: Entities Management
excerpt: >-
  An entity refers to a specific object, like a customer, product, or
  transaction, that has its own unique details in a system or situation.
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
The different types of entities in Capillary platform are:

1. **Customer**: A customer is an individual who either buys goods/services or subscribes to the organization’s newsletters. An organization refers to a store, business firm, hospital, or restaurant. See [v2 customer APIs](https://docs.capillarytech.com/reference/customer-1) and [v1.1 customer APIs](https://docs.capillarytech.com/reference/customer).
2. **Transactions**: A transaction represents a purchase or return event. The parameters for transaction APIs are configuration dependent. See more details [v2 transaction APIs](https://docs.capillarytech.com/reference/transaction-1) and [v1.1 transaction APIs](https://docs.capillarytech.com/reference/transaction).
3. **Store**: The store entity holds information about an organization's stores and hierarchy. This entity provides APIs to manage stores. To know more, see [Store APIs](https://docs.capillarytech.com/reference/store).
4. **Product**: The product entity holds all products of an org and product-related information such as size, color, type, and brand. Product APIs allow you to fetch details of a specific product, modify existing details, change a product's brand name, and create new attributes for a product. See [Product APIs](https://docs.capillarytech.com/reference/product).
5. **Behavioral Events**: Behavioral events help capture customer activities such as registration, forgot passwords, and cart abandonment. You can create custom events, fetch event data, configure event fields, and do more with [Events APIs](https://docs.capillarytech.com/reference/behavioral-events-1).
6. **Card**: Cards are loyalty identifiers and enable orgs t o run card-based memberships. Cards are associated with a card series and each customer can have multiple cards. A card number or an card external ID is a unique identifier of a customer and is used in fetching customer details. See more about [Cards APIs.](https://docs.capillarytech.com/reference/loyalty-cards)
7. **User Group**: The new user group (v2) solves the use cases of both B2B loyalty and B2C loyalty unlike the previous version which was designed for B2C cases. This entity contains APIs to manage user groups. See more about [User Group.](https://docs.capillarytech.com/reference/user-group-v2)
8. **Leads**: A lead is a purchase an individual is interested in, especially for offline stores. Leads can be created for both loyalty and non-loyalty customers. This entity provides you the APIs to create, manage and fetch leads. See more about [Leads APIs.](https://docs.capillarytech.com/reference/leads).

## Extended Fields

Extended Fields are proposed fields to standardize input values and keys across organizations. These fields make it easier for the Development and Analytics teams to get rid of the complex data that flows into the database, through existing custom fields. Developers control the field names, data types, enum values, and scopes for the extended fields and can capture values based on rules (logical or regex expressions). 

An extended field is a predefined field with an id, name, entity type, label name, and data type.  Example: GUID, IMEI, making changes, and so on. Extended fields are used in customer registration, profile update, transaction, and transaction line item.

> 📘
>
> Extended fields are created in the backend. You can just use whatever is required for you. to show or hide it on the UI.

The following are the topics discussed in this article.

#### Entity Types

* Supported Entity Types: customer, regular\_transaction, return\_transaction, not\_interested\_transaction, not\_interested\_return\_transaction, regular\_lineitem, return\_lineitem, not\_interested\_lineitem, not\_interested\_return\_lineitem. 

![63975ea NGP9ApbSolqFPXoYY3ZOwlUneaAG2HI61Q 1](https://files.readme.io/63975ea-NGP9ApbSolqFPXoYY3ZOwlUneaAG2HI61Q_1.png)

#### Data Type

* Supported Data types:  integer, string, double, date-time, standard\_enum, custom\_enum

  i. Standard Enum: Consists of predefined values that are common for any org. In the DB table, an extended field with the type standard\_enum is mapped to one or more values.\
  ii. Custom Enum: Consists of predefined values for each field and each value is mapped to a specific org. A value can be mapped to different orgs.

The following example shows the values of an extended field are mapped to different orgs (scope\_ids). 

```json
id: 1

      ef_id: 9

   scope_id: 797

      value: 他他他他

 created_by: -1

 created_on: 2017-03-23 15:18:16

modified_by: -1

modified_on: 2017-03-23 15:18:16

*************************** 2. row ***************************

         id: 2

      ef_id: 9

   scope_id: 1115

      value: 他他他

 created_by: -1

 created_on: 2017-03-23 15:22:39

modified_by: -1

modified_on: 2017-03-23 15:22:39
```

#### Properties of Extended Fields

Following are the properties of extended fields.

* The combination of name and entity type for extended fields should be unique
* Extended fields are not case-sensitive 

#### Mapping of Extended Fields

On a broader view, extended fields are mapped to vertical ids, and vertical ids are mapped to org ids as shown in the following diagram.

![36f8462 ZWDw6OuJQNhrsbLCLQt7UY4EBgvDDsWNkg](https://files.readme.io/36f8462-ZWDw6OuJQNhrsbLCLQt7UY4EBgvDDsWNkg.png)

#### Verticals and Vertical IDs

A vertical is a group that defines the nature of the business. An org can have multiple verticals mapped to it. 

For example, if an org ABC sells fitness items and apparel, and another org XYZ sells stationery and sports items, both orgs have one common vertical – sports.

Following are the properties of verticals:

* Each vertical is mapped to the relevant set of extended fields
* The vertical name should be unique across the table 

#### Mapping Extended Fields and Vertical Ids

Following are the properties of extended fields and vertical ids mapping:

* Each extended field can only be mapped to one vertical id
* One vertical id can be mapped to multiple extended fields
* An extended field with vertical id ‘-1’ is available for all the orgs. These are global fields and can be used by any org 

#### Mapping Vertical IDs and Org

Following are the properties of vertical ids and org ids mapping table

* Org and verticals have a many-to-many mapping 
* An org cannot use an extended field that is not within the verticals associated with it. 
* Any org can use extended fields with the vertical id ‘-1’ ( fields) 

#### Validation Rules

A validation rule can contain a logical or regex expression that evaluates the extended field values. Validation rules verify whether a field value meets the defined standards before saving it to the Mongo DB. 

That is, If a rule is applied on an extended field, a validation check is performed whenever the field value is received. Once the field value is validated successfully, it will be saved to the Mongo DB.

Examples for logical rules: >, \<, >=, \<=, = 

We first create rules (>, \<) and then map each rule to the extended fields. Following are the properties of validation rules:

* Multiple rules can be applied to an extended field 
* One rule can be applied to different fields 

#### Other Validations

Apart from the rules validation, scope validation is also performed which is defined in the DB tables

* Extended fields with custom enum values can be used only by orgs that are mapped to it
* An org can use only extended fields that are mapped to it through vertical ids
* Extended fields with vertical id mapping as -1 can be used by any org

# Data fields

1. **Standard Fields**: These are fields created for a specific module to capture basic details. This could be fields at customer level, transaction level, line-item level, coupon level and so on. Standard fields are created by Capillary and are available by default for each module.
2. **Extended Fields**: Extended Fields are proposed fields to standardize input values and keys across organizations. These fields make it easier for the Development and Analytics teams to get rid of the complex data that flows into the database, through existing custom fields. Developers control the field names, data types, enum values, and scopes for the extended fields and can capture values based on rules (logical or regex expressions). See more about [Extended fields](https://docs.capillarytech.com/docs/data-fields#extended-fields).
3. **Custom Fields**: As the name suggests there are custom fields that orgs need to capture for a specific module. It could be of any datatype and value. Reporting is not possible on custom field values. See more about [Custom fields.](https://docs.capillarytech.com/docs/data-fields#custom-fields)

# Extended Fields

Extended Fields are proposed fields to standardize input values and keys across organizations. These fields make it easier for the Development and Analytics teams to get rid of the complex data that flows into the database, through existing custom fields. Developers control the field names, data types, enum values, and scopes for the extended fields and can capture values based on rules (logical or regex expressions). 

An extended field is a predefined field with an id, name, entity type, label name, and data type.  Example: GUID, IMEI, making changes, and so on. Extended fields are used in customer registration, profile update, transaction, and transaction line item.

When an extended field is added to collect additional information, it starts accumulating data within our system. However, this data isn’t immediately visible in the user interface for audience creation.\
If you want to build an audience using filters based on the information stored in these extended fields, you need to raise a request to the Customer Success Team to create these filters. Once implemented, you can use these filters to create audiences. For more information refer [audience creation using filters](https://docs.capillarytech.com/docs/audience-management#using-audience-filters).

> 📘 Extended fields are created at the backend. You can select the fields to be displayed on the UI.

The following are the topics discussed in this article.

#### Entity Types

* Supported Entity Types: customer, regular\_transaction, return\_transaction, not\_interested\_transaction, not\_interested\_return\_transaction, regular\_lineitem, return\_lineitem, not\_interested\_lineitem, not\_interested\_return\_lineitem. 

![63975ea NGP9ApbSolqFPXoYY3ZOwlUneaAG2HI61Q 1](https://files.readme.io/63975ea-NGP9ApbSolqFPXoYY3ZOwlUneaAG2HI61Q_1.png)

#### Data Type

* Supported Data types:  integer, string, double, date-time, standard\_enum, custom\_enum

  i. Standard Enum: Consists of predefined values that are common for any org. In the DB table, an extended field with the type standard\_enum is mapped to one or more values.\
  ii. Custom Enum: Consists of predefined values for each field and each value is mapped to a specific org. A value can be mapped to different orgs.

The following example shows the values of an extended field are mapped to different orgs (scope\_ids). 

```json
id: 1

      ef_id: 9

   scope_id: 797

      value: 他他他他

 created_by: -1

 created_on: 2017-03-23 15:18:16

modified_by: -1

modified_on: 2017-03-23 15:18:16

*************************** 2. row ***************************

         id: 2

      ef_id: 9

   scope_id: 1115

      value: 他他他

 created_by: -1

 created_on: 2017-03-23 15:22:39

modified_by: -1

modified_on: 2017-03-23 15:22:39
```

#### Properties of Extended Fields

Following are the properties of extended fields.

* The combination of name and entity type for extended fields should be unique
* Extended fields are not case-sensitive 

#### Mapping of Extended Fields

On a broader view, extended fields are mapped to vertical ids, and vertical ids are mapped to org ids as shown in the following diagram.

![36f8462 ZWDw6OuJQNhrsbLCLQt7UY4EBgvDDsWNkg](https://files.readme.io/36f8462-ZWDw6OuJQNhrsbLCLQt7UY4EBgvDDsWNkg.png)

#### Verticals and Vertical IDs

A vertical is a group that defines the nature of the business. An org can have multiple verticals mapped to it. 

For example, if an org ABC sells fitness items and apparel, and another org XYZ sells stationery and sports items, both orgs have one common vertical – sports.

Following are the properties of verticals:

* Each vertical is mapped to the relevant set of extended fields
* The vertical name should be unique across the table 

#### Mapping Extended Fields and Vertical Ids

Following are the properties of extended fields and vertical ids mapping:

* Each extended field can only be mapped to one vertical id
* One vertical id can be mapped to multiple extended fields
* An extended field with vertical id ‘-1’ is available for all the orgs. These are global fields and can be used by any org 

#### Mapping Vertical IDs and Org

Following are the properties of vertical ids and org ids mapping table

* Org and verticals have a many-to-many mapping 
* An org cannot use an extended field that is not within the verticals associated with it. 
* Any org can use extended fields with the vertical id ‘-1’ ( fields) 

#### Validation Rules

A validation rule can contain a logical or regex expression that evaluates the extended field values. Validation rules verify whether a field value meets the defined standards before saving it to the Mongo DB. 

That is, If a rule is applied on an extended field, a validation check is performed whenever the field value is received. Once the field value is validated successfully, it will be saved to the Mongo DB.

Examples for logical rules: >, \<, >=, \<=, = 

We first create rules (>, \<) and then map each rule to the extended fields. Following are the properties of validation rules:

* Multiple rules can be applied to an extended field 
* One rule can be applied to different fields 

#### Other Validations

Apart from the rules validation, scope validation is also performed which is defined in the DB tables

* Extended fields with custom enum values can be used only by orgs that are mapped to it
* An org can use only extended fields that are mapped to it through vertical ids
* Extended fields with vertical id mapping as -1 can be used by any or
