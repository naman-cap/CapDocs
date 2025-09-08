---
title: Organization Settings
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
## Introduction

Capillary InTouch is a cloud-based application that handles all the back-end operations such as organization configuration, language setup, the configuration of capillary applications such as InTouch, Campaign Manager, Loyalty Manager, and Customer Intelligence, managing loyalty customers,  communications (SMSs/emails) configuration and organizations' data management.

Capillary admin users will set up an organization and create admin user accounts for that organization. These admin users have access to modify their organization details, configure stores and store tills, and create other user accounts (admin users or general users) for accessing their organization's InTouch. Admin users can also choose their preferred language in InTouch to see all the modules of Capillary in the language they choose.

### Set up an organization in InTouch

To set up an organization in InTouch, you need to understand the following concepts:

1. **Organization structure**: An organization will have a hierarchy that contains zones, concepts, store-servers, stores, and store tills. Understand the purpose of each hierarchy and how it is used in the organization before starting with the organization setup.

* **Concept**: The logical grouping of stores. For example, concepts can be groceries, electronics, apparel, home appliances, and so on. 
* **Zone**: The geographical grouping of stores. For example, zones can be north, south, east, south-east Asia, and so on. 
* **Store Server**: It is a local server and is present in every physical store. The data captured by In-Store is first saved in the store server and then get synced to the main server. Hence, store servers should always be connected to the internet. 
* **Store**: A branch or outlet of your organization. 
* **Till / Store-Till**: The POS machine where billings take place. Every store can have one or more Tills. All the tills should be connected to the store-server through LAN and hence no internet is required at the till level to sync data to the store-server. However, the store server communicates with the main server over the internet.

> 📘 - The hierarchy of the organization is as follows: Zones > Stores (Stores can be grouped independently by zones and/or concepts) > Store Servers > Store Tills. A Store is geographically grouped using zones and logically grouped using concepts. Hence a store can be in a zone, in a concept or in both zone and concept.

2. **User Roles**: An organization can be accessed by authenticated Capillary admin users and the respective organization users. There can be admin users and general users at the organization level users. The access level for an organization's admin users and general users can be defined when creating user accounts.
