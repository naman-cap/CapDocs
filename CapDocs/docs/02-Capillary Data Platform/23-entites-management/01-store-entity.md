---
title: Store entity
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
# Store entities


The store entity holds information about an organization's stores and hierarchy. This entity provides APIs to manage stores. This entity contains APIs to manage and fetch store details such as retrieve store information, upload log files to the server, get store report, and fetch store tasks.

# Store Hierarchy


The segregation of the organization into different Concepts and Zones, Stores, and Tills is called Store Hierarchy.

![ ](https://files.readme.io/4cd0562-Sitemap_Whiteboard_in_Green_Purple_Basic_Style.png)

# Concept


Concept is a grouping of stores for a single brand such as groceries, electronics, and apparel. In the case of multiple brand organizations, it is separated on the basis of brands for instance, an org ABC can have different verticles, and each brand can have an account using Concepts.

## Creating a concept


To create a concept, follow the steps below:

1. Navigate to the **Organization Settings** page, and click **Master Data Management.**

![ ](https://files.readme.io/677c786-image.png)

2. Expand the **Stores Masters** dropdown, and click **Concepts**.

![ ](https://files.readme.io/b92ca93-image.png)

3. Click **Add New Concept**.

![ ](https://files.readme.io/ec69a98-image.png)

4. Enter the details for the concept.

![ 395px](https://files.readme.io/29abddb-image.png)

| Field             | Description                                                    |
| :---------------- | :------------------------------------------------------------- |
| Code              | Enter the code for the concept                                 |
| Name              | Enter the name of the concept                                  |
| Description       | Enter the description for the concept.                         |
| Parent Concept    | Select the parent concept from the dropdown.                   |
| Default Language  | Enter the default language for the concept.                    |
| Default Currency  | Select the default currency for the concept from the dropdown. |
| Email Sender Name | Enter the sender's email ID.                                   |
| Email Sender Id   | Enter the sender’s ID.                                         |
| SMS Sender GSM    | Enter the GSM sender ID                                        |
| SMS Sender CDMA   | Enter the CDMA sender ID                                       |

You have successfully created a Concept.

![ ](https://files.readme.io/c03da19-image.png)

## Updating a Concept


To update a Concept, perform the following

1. Click on the concept you wish to update.

![ ](https://files.readme.io/84310ef-image.png)

2. Click **Edit**.

![ ](https://files.readme.io/2584a8f-image.png)

3. Enter the details for the fields you wish to edit.

![ 400px](https://files.readme.io/d7cd355-image.png)

4. Click **Update Concept Manager** to assign a concept manager.

![ ](https://files.readme.io/5504f9f-image.png)

5. Click **Submit**.

## Deleting a concept


To delete a Concept, perform the following

1. Click on the concept you wish to delete.

![ ](https://files.readme.io/84310ef-image.png)

2. Click **Mark this CONCEPT As inactive**.

![ ](https://files.readme.io/573124d-image.png)

3. Toggle the **Please Confirm Entity Marking** slider to **YES**.

![ ](https://files.readme.io/07bd6c3-image.png)

4. Click **Submit**.

![ ](https://files.readme.io/c483dbc-image.png)

You have successfully marked the concept as inactive.

# Zones


Zones are groups of stores based on a geographical location. For example, North zone, South zone, East and West zone.

## Creating a zone


To create a new zone, perform the following:

1. Navigate to the **Organization Settings** page, and click **Master Data Management.**

![ ](https://files.readme.io/677c786-image.png)

2. Expand the **Stores Masters** dropdown, and click **Zones**.

![ ](https://files.readme.io/84598d4-image.png)

3. Click **Add New Zone**

![ ](https://files.readme.io/8ce7538-image.png)

4. Enter the details.

![ 400px](https://files.readme.io/a5cfc5d-image.png)

| Field             | Description                                                 |
| :---------------- | :---------------------------------------------------------- |
| Code              | Enter the code for the zone                                 |
| Name              | Enter the name of the zone                                  |
| Description       | Enter the description for the zone                          |
| Parent Zone       | Select the parent concept from the dropdown.                |
| Default Language  | Enter the default language for the zone.                    |
| Default Currency  | Select the default currency for the zone from the dropdown. |
| Default Time Zone | Select the timezone from the dropdown.                      |
| Payment Method    |                                                             |
| Geo Location      |                                                             |

![ ](https://files.readme.io/0be3c23-image.png)

Zone created successfully.

## Updating a zone


To update a zone, perform the following

1. Click on the zone you wish to update.

![ ](https://files.readme.io/dbe2207-image.png)

2. Click **Edit**.

![ ](https://files.readme.io/0bf5ba0-image.png)

3. Enter the details you wish to update.

![ 400px](https://files.readme.io/610f109-image.png)

4. Click **Update Zone Managers** to assign a zone manager.

![ ](https://files.readme.io/38ef836-image.png)

5. Click **Submit**.

Zone updated successfully.

## Deleting a zone


To delete a zone, perform the following

1. Click on the zone you wish to delete.

![ ](https://files.readme.io/dbe2207-image.png)

2. Click **Mark this ZONE As inactive**.

![ ](https://files.readme.io/c10fe5f-image.png)

3. Toggle the **Please Confirm Entity Marking** slider to **YES**.

![ ](https://files.readme.io/07bd6c3-image.png)

> 🚧 **Warning**
> 
> **Warning**
> 
> Deactivating a zone will deactivate all the sub zones and stores associated with it.

![ ](https://files.readme.io/93cbd56-image.png)

Zone deleted successfully.

# Store


Stores are branches or outlets of the brand.

## Creating a store


To create a new store, perform the following:

1. Navigate to the **Organization Settings** page, and click **Master Data Management.**

![ ](https://files.readme.io/677c786-image.png)

2. Click **Stores**.

![ ](https://files.readme.io/94454a3-image.png)

3. Click **Add New Store**.

![ ](https://files.readme.io/bdffc8a-image.png)

4. Enter the following details

![ ](https://files.readme.io/243583a-image.png)

| Fields | Description |
| --- | --- |
| Store Code | Enter the store code in \ format |
| Store Name | Enter the name of the store. |
| Access Group  | Expand the dropdown to select the access group to which the store has access.  
  
All the tills under the store inherit the access group of the store and will have access to the APIs accordingly. You can also assign a default access group for all the stores under your organization. |
| Store Code Representation For The Org | Enter the unique external ID for your brand. |

5. Click **Submit**.

![ ](https://files.readme.io/59c3119-image.png)

Store created successfully.

## Updating a store


To update a store, perform the following:

1. Click on the store you wish to update

![ ](https://files.readme.io/6db100f-image.png)

2. Click **Edit**

![ ](https://files.readme.io/7ae46f0-image.png)

3. Enter the details you wish to edit.

![ ](https://files.readme.io/6d9b0a7-image.png)

4. Click **Submit**.
5. Enter the fields to update the store information.

![ ](https://files.readme.io/1e1588f-image.png)

| Field          | Description                                            |
| :------------- | :----------------------------------------------------- |
| Store Mobile   | Enter the store mobile number.                         |
| Store Email    | Enter the store email ID.                              |
| Store Landline | Enter the store landline number.                       |
| Country        | Expand the **Country** dropdown to select the country. |
| State          | Expand the **State** dropdown to select the state.     |
| City           | Expand the **City** dropdown to select the city.       |
| Area           | Expand the **Area** dropdown to select the area.       |

## Deleting a store


To delete a store, perform the following:

1. Click on the store you wish to delete.

![ ](https://files.readme.io/606a194-image.png)

2. Click **Mark this STORE As Inactive**.

![ ](https://files.readme.io/e87a599-image.png)

3. Toggle the **Please Confirm Entity Marking** slider to **YES**.

![ ](https://files.readme.io/a693b41-image.png)

4. Click **Submit**.

The store has been deleted successfully.

# Till


Till is a POS machine used for billing items. A store can have one or more tills and is connected to a store server through a LAN connection.  
Data sync between the store server and a till does not require an internet connection, however internet connection is required to communicate with the main server. Store servers are not required for tills with an internet connection.

A store server is a local server for a store. The data captured by InStore is saved in the store server and then synced to the main server.

## Creating a till


To create a new till, perform the following:

1. Navigate to the **Organization Settings** page, and click **Master Data Management.**

![ ](https://files.readme.io/677c786-image.png)

2. Click **Store tills**.

![ ](https://files.readme.io/529e64a-image.png)

3. Click **Add New Till**.

![ ](https://files.readme.io/0037abd-image.png)

4. Enter the till details.

![ ](https://files.readme.io/4c209a2-image.png)

| Fields               | Description                                                                                                   |
| :------------------- | :------------------------------------------------------------------------------------------------------------ |
| Store                | Expand the dropdown to select the store to assign the till.                                                   |
| Store Server         | Expand the dropdown to select the Store Server for the till. This acts as a local server for the POS machine. |
| Till UserName        | Enter the username of the In-Store application for that till.                                                 |
| Till Password        | Enter the password of the In-Store application for that till.                                                 |
| Confirm The Password | Reenter the password of the In-Store.                                                                         |
| Is Billable          | Check **Is Billable**                                                                                         |

5. Click **Save**.

![ ](https://files.readme.io/dec6ae7-image.png)

Store till created successfully. 

## Updating a till


To update the store till perform the following:

1. Click on a store till you wish to update.

![ ](https://files.readme.io/ca2e25f-image.png)

2. Click **Edit**.

![ ](https://files.readme.io/6823a8d-image.png)

3. Update the fields.

![ ](https://files.readme.io/9825e73-image.png)

4. Click **Manage Store Terminal Deployment Files**, **Store Investigative Report**, **Device details** and **Post Installation QC List** to update extra information about the store till.

![ ](https://files.readme.io/9225a62-image.png)

5. Click **Submit**.

Store till updated successfully.

## Deleting a till


To delete a store, perform the following:

1. Click on the till you wish to delete.

![ ](https://files.readme.io/7267fe8-How_to_Access_and_Use_the_Store_Tills_Feature_-_Step_5.png)

2. Click **Mark this STORE As Inactive**.

![ ](https://files.readme.io/920627a-How_to_Access_and_Use_the_Store_Tills_Feature_-_Step_6.png)

3. Toggle the **Please Confirm Entity Marking** slider to **YES**.

![ ](https://files.readme.io/8e2874f-How_to_Access_and_Use_the_Store_Tills_Feature_-_Step_7.png)

4. Click **Submit**

![ ](https://files.readme.io/8603e6a-How_to_Access_and_Use_the_Store_Tills_Feature_-_Step_8.png)

Store till deleted successfully

![ ](https://files.readme.io/56bc984-image.png)

# Store server


A Store server connects all the POS machines to the store server through LAN. A store server is used when POS machines do not have access to the internet.

## Creating a store server


To create a new till, perform the following:

1. Navigate to the **Organization Settings** page, and click **Master Data Management.**

![ ](https://files.readme.io/677c786-image.png)

2. Click **Store Server**.

![ ](https://files.readme.io/f528d73-image.png)

3. Click **Add New Store server**.

![ ](https://files.readme.io/d042af0-image.png)

4. Enter the store server details.

![ ](https://files.readme.io/48f7b5f-image.png)

| Field                 | Description                              |
| :-------------------- | :--------------------------------------- |
| Store                 | Expand the dropdown to select the store. |
| Store Server UserName | Enter the username for the store server. |
| Store server password | Enter the password for the store server. |
| Confirm the password  | Reenter the store server password        |
| IsBillable            |                                          |

5. Click **Submit**.

![ ](https://files.readme.io/2bc5bfa-image.png)

Store server created successfully.

## Updating store server


To update the store server perform the following:

1. Click on a store server you wish to update.

![ ](https://files.readme.io/94e4ab8-image.png)

2. Click **Edit**.

![ ](https://files.readme.io/e68a14e-image.png)

3. Enter the details you wish to edit.

![ ](https://files.readme.io/782e69d-image.png)

4. Click **Manage Store Server Deployment Files** to update the file information.

![ ](https://files.readme.io/b60554b-image.png)

5. Click **Submit**

![ ](https://files.readme.io/540edec-image.png)

Store server updated successfully.

# Deleting a store server


To delete the store server perform the following:

1. Click on a store server you wish to delete.

![ ](https://files.readme.io/94e4ab8-image.png)

2. Click **Mark STORE SERVER As inactive**.

![ ](https://files.readme.io/30ebb64-image.png)

3. Toggle the **Please Confirm Entity Marking** slider to **YES**.

![ ](https://files.readme.io/9033e48-image.png)

4. Click **Submit**.

![ ](https://files.readme.io/48d8a24-image.png)

Store server deleted successfully.

![ ](https://files.readme.io/ed26076-image.png)

# Store associate


A store associate allows adding new associates to a store. 

## Creating new store associate


To create a new store associate, perform the following:

1. Navigate to the **Organization Settings** page, and click **Master Data Management.**

![ ](https://files.readme.io/677c786-image.png)

2. Click **Associate User**.

![ ](https://files.readme.io/45f8e0b-image.png)

3. Click **Create Associate**.

![ ](https://files.readme.io/9f37792-image.png)

4. Enter the details of the store associate.

![ ](https://files.readme.io/5e8a692-image.png)