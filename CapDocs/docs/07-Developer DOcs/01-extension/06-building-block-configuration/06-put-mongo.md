---
title: PUT Mongo Block
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
The Put block lets you perform data operations such as INSERT, UPDATE, or UPSERT directly to the database based on a specified query and query key. This block is essential for modifying or adding new data entries within MongoDB during dataflow execution in Neo UI.

**Note:** You cannot delete any data entries from the MongoDB. This avoids unintentional deletion of that data. If you want to delete, you update the data entry and change the status to Inactive or Close. You can achieve this by using the [upsert command](https://docs.capillarytech.com/docs/bulk-upsert-mongo).

# Example Scenario

**Requirement**

An airline brand allows customers to redeem loyalty points to book flight tickets for their dependants. However, before redeeming points, the dependants must be added as nominees. The system stores nominee details in a separate MongoDB table, with a maximum limit of five nominees per customer. The system must allow customers to add nominees while ensuring the limit is not exceeded.

**Solution**

To add nominees, create a dataflow that inserts information into the MongoDB table. Use a **PutMongo** block.

Refer to this example [dataflow](https://eu.intouch.capillarytech.com/extensions/neo/ui/rule/95200b0d-e270-496a-a203-01cd2f33bc9f/version/d2b9f02b-9a56-4b01-baae-28b870b667f2?ruleType=org)  to understand how it is configured for the given use case. Make sure that you have access to DocDemo org (100737) and [access to Neo](https://docs.capillarytech.com/docs/access-management-neo#enabling-neo-extension-access--user-roles).

In this dataflow, the **GET Mongo** block initially fetches the available nominees. Subsequently, the **PUT Mongo** block is utilized to update the nominee. If the number of nominees is fewer than the maximum limit of five, the system permits the addition of a nominee.

# Configuring the Put Mongo Block

To configure the Put Mongo block,

1. From the dataflow canvas, click on the node and select the **PUT Mongo** block.
2. In the **Block name** field, enter the block name.\
   **Note:** Block names cannot contain spaces or special characters, except for underscores (\_). Use camelCase or snake\_case formatting.
3. In the **Collection Name** field, enter the name of the MongoDB collection you want to query.
4. In the **Mode** field, choose the mode. The available modes are Insert, Update, and Upsert.
5. In the **Query** field, enter the data you want to inject into MongoDB using JavaScript.
6. (Optional) In the **Query Key** field, specify the key used to perform the update. The key identifies the specific record in the database that needs to be updated.
7. (Optional) In the **Options** field, specify any additional options for the query. These options modify query behavior and how results are returned.\
   **Note**: For information on available options, refer to the [MongoDB documentation on options](https://www.mongodb.com/docs/manual/reference/method/db.collection.update/).
8. Configure the [input execution logic](https://docs.capillarytech.com/docs/configuring-conditions),[ cachable feature](https://docs.capillarytech.com/docs/configuring-caching), and [define the execution path](https://docs.capillarytech.com/docs/configuring-relations) as per the requirement.
9. Click **Done**.

![Configuring the Put Mongo block](https://files.readme.io/45fa9390ba92b582424645f3f644b94cc6249ed0a260e54d0dfc74ab63e46acc-17.02.2025_10.42.29_REC_Configuring_PUT_Mongo.gif)