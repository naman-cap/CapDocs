---
title: JFM 2022 | Insights+ Releases
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
## February Releases

### Work Flow Management for Onboarding Requests

NOTE: This PAAS feature is for "Capillary Internal Users" only 

#### Problem Statement

To view the data in the reports on the  Insights + platform,organizational data /orgs need to be onboarded on EI. For any new org, vertical,facts or OU data to be viewed in reports , onboarding is performed as an initial step post which data can be visualized in the reports.

Earlier there was no proper channel to record these requests or to track them. These onboarding requests come in the form of JIRA tickets.\
No proper format to take input data for onboarding.The details of the required onboarding were mentioned in the JIRA tickets itself.\
No centralized view of all the onboarding requests created or their status.\
There are a series of steps which need to be executed for a successful onboarding.There is no step-wise task view of these executions which could tell the status on the whole.

#### Use Cases

**Use Cases to Raise request:**

* **Hierarchy Onboarding** -User wants to raise a request for onboarding a product hierarchy for a given org by mentioning the product names, their hierarchical orders and the org to which they belong.
* **OU Onboarding** - User wants to raise a request for onboarding multiple OUs within an org by mentioning the details such as  Org Id and OU Ids
* **Vertical Onboarding** - User wants to raise a request for onboarding multiple orgs to a specific vertical by mentioning the org Id / name and vertical name.

**Use Cases to track the requests:**

* Users want to filter out the requests raised for a particular org by entering the org Id
* Users want to filter out the requests raised for a particular type of Onboarding such as Hierarchical,Vertical or OU onboarding.
* Users want to filter out the requests raised by their status.
* Users want to see the current status of the request such as new,processing, tagged to version, version enabled, processed, failed, ,canceled or released.
* Users want to see all the actions taken(including past actions) as part of the request.
* Users want to see the ‘created date’ and ‘created by’ details for the requests raised.

#### Solution:

To address the problems faced by internal teams (Product and Engg groups) for handling the Org Onboarding requests, Insights team has developed this product capability for internal Product Engg groups to conduct the Org onboarding task easily.

Below are features of the WFM Onboarding Rizer UI which covers the above use cases.

* Through the Rizer UI onboarding requests can easily be created and tracked for each type of onboarding.
* The new UI streamlines the process of request creation, tracking the actions on the requests and the statuses of these requests.
* It also has a centralized view of all the WFM requests such as Vertical , Hierarchy or OU Onboarding).
* Pre - defined input format for each type of request raised reduces the scope of error and rework.
* For each of the requests raised the user can view the series of tasks executed.The execution flow is as follows .

1. New 
2. Processing(includes input validation)
3. Tagged to version
4. Version enabled
5. Processed
6. Released

* If at any stage the onboarding process fails or is canceled, the status will change to  failed/canceled accordingly

**Steps to raise requests**\
WFM onboarding through Rizer UI allows us to create  onboarding requests for the below 3 items:

1. Hierarchy Onboarding
2. OU Onboarding
3. Vertical Onboarding

Process to be followed to create Onboarding Request on Rizer UI 

1. Hierarchy Onboarding:

* Requirement comes in the form of a JIRA ticket 
* Click on “Add New Request” to open the below window.

![664](https://files.readme.io/a148b4a-UTWEt82Kdq_qfoL5wGiZWBWSnX3WaagDvg.png "UTWEt82Kdq_qfoL5wGiZWBWSnX3WaagDvg.png")

* For hierarchy onboarding two options are available:\
  -**Zone tills**
* Upto four levels of Zone till hierarchy is allowed to be created.
* Addition of the Levels to be done in the order Child to Parent which essentially means that the child Zone to be added first and then the subsequent Parent Zone should be added.
* Example of such a hierarchy is shown in the screenshot below.\
  -I**nventory Items**
* Upto five levels of Inventory hierarchy is allowed to be created.
* Addition of the Levels to be done in the order Child to Parent which essentially means that the child Inventory to be added first and then the subsequent Parent Inventory should be added.

![675](https://files.readme.io/8c0fcbb-ClOBlgpk9EzXzv4hjHsRPRFi9obKH3x6DA.png "ClOBlgpk9EzXzv4hjHsRPRFi9obKH3x6DA.png")

2.OU Onboarding

* Requirement comes in the form of a JIRA ticket where OU ids are mentioned.
* Click on “**Add New Request**” to open the below window.

![671](https://files.readme.io/acd88c6-YWfqkHIC3u2BgeAUhDYV1j6xgLqdOq0yBA.png "YWfqkHIC3u2BgeAUhDYV1j6xgLqdOq0yBA.png")

* Select the org from the list for which OU needs to  be onboarded.
* Add the context ids of the OU  to be added.
* Next, in the comments add the JIRA ticket which has the details mentioned.

3. Vertical Onboarding 

* Select the org from the list for which Vertical needs to  be onboarded.
* From the list select the verticals to be onboarded for that particular org.
* Next , in the comments add the JIRA ticket which has the details mentioned.
* Click on ‘**Submit**’ to confirm the request creation.

![661](https://files.readme.io/ae78381-4Bq1iH6DkanRhns1-gNNmuA9ZnzFZ9KAfQ.png "4Bq1iH6DkanRhns1-gNNmuA9ZnzFZ9KAfQ.png")

#### Steps to view the tasks executed on the actions:

* Against each of the requests , there is a button named ‘info’. 

![1329](https://files.readme.io/fa0cf6b-ReYddlhRErOhkVfMPE7tZiAHGpszFJ80Kw.png "ReYddlhRErOhkVfMPE7tZiAHGpszFJ80Kw.png")

* Click on the button to view the task details.

![1266](https://files.readme.io/3bb554a-_uFESb3v0JskVERd_tC5q5RBHPkADbeDSg.png "_uFESb3v0JskVERd_tC5q5RBHPkADbeDSg.png")

### Core Onboarding 

NOTE: This PAAS feature is for "Capillary Internal Users" only 

#### Problem Statement

 To view the data in the reports on the  Insights + platform,organizational data /orgs need to be onboarded on EI. For any new org, vertical,facts or OU data to be viewed in reports , onboarding is performed as an initial step post which data can be visualized in the reports.Core Table onboarding can have three sublevels:Source onboarding, Fact onboarding and Dimension onboarding.

* Earlier complex query had to be written manually for onboarding core tables or for making any changes to the existing ones.
* There was no proper channel to record these requests or to track them. These onboarding requests come in the form of JIRA tickets. 
* No centralized view of all the onboarding requests created or their status.
* There are a series of steps which need to be executed for a successful onboarding.There is no step-wise task view of these executions which could tell the status on the whole.

#### Use Cases

**Use Cases to Raise request:**

  **\* Source Table Onboarding**-User wants to raise a request for onboarding a source table to EI.

* **Fact Table Onboarding** - User wants to raise a request for onboarding a Fact Table by mentioning the details such as Fact Name and column details\
  **\* Dimension Onboarding** - User wants to raise a request for onboarding a dimension to a Fact on EI by mentioning the required details.

**Use Cases to track the requests:**

* Users want to filter out the requests raised for a particular type of Onboarding such as Source , Fact or Dimension.

* Users want to filter out the requests raised by their status.

* Users want to see the current status of the request such as -\
  new,processing,input\_validation,workflow\_validation,version\_cut,validation\_done,processed,failed,canceled,reverted or released.

* Users want to see all the actions taken(including past actions) as part of the request.

* Users want to see the ‘created date’ and ‘created by’ details for the requests raised.

#### Solution

To address the problems faced by internal teams (Product and Engg groups) for executing the table  Onboarding requests, Insights team has developed this product capability for internal Product Engg groups to conduct the Core Table onboarding task easily. 

Below are features of the Core Onboarding Rizer UI which covers the above use cases.

* Instead for writing complex queries now user can give JSON input  with the data points which is  picked up automatically into the query
* JSON input  for each type of request raised reduces the scope of error and manual work
* Through the Rizer UI, onboarding requests can easily be created and tracked for each type of table  onboarding.
* The new UI streamlines the process of request creation, tracking the actions on the requests and the statuses of these requests.
* It also has a centralized view of all the table onboarding requests such as Source , Fact or Dimension)..
* For each of the requests raised the user can view the series of tasks executed.The execution flow is as follows .

1. New 
2. Processing
3. Input Validation
4. Workflow Validation
5. Validation Done
6. Version cut
7. Processed
8. Released

* If at any stage the onboarding process fails or is canceled, the status will change to failed/canceled accordingly.

#### Steps to raise Request

1. **Source table Onboarding**\
   Click on “Add New Request” to open the below window.

![310](https://files.readme.io/ffdf531-xIDEPyqLigywmnVLBivN0HqXBg4CMuZr4g.png "xIDEPyqLigywmnVLBivN0HqXBg4CMuZr4g.png")

* Under the  **SQL Source** option for below actions could be selected\
  -CREATE SQL SOURCE TABLE\
  -ADD COLUMN\
  -DISABLE COLUMN\
  -DISABLE TABLE

2. **Dimension Onboarding**

* Click on “Add New Request” to open the below window

![680](https://files.readme.io/a22b826-dvKj1W5EfGhwxs9KBAYmhWg-Ku-bwdZt0g_1.png "dvKj1W5EfGhwxs9KBAYmhWg-Ku-bwdZt0g (1).png")

* Under the **Dimension** option, below actions could be selected\
  -CREATE STANDARD DIMENSION\
  -CREATE FLAT DIMENSION TABLE\
  -ADD DIMENSION VALUES STD\
  -ADD DIMENSION COLUMNS\
  -UPDATE DIM COLUMNS\
  -DISABLE DIM COLUMNS\
  -DISABLE DIM TABLE

3. **Fact Onboarding**

* Click on “**Add New Request**” to open the below window.

![661](https://files.readme.io/d41e4c6-b0vNGI9nUusWcvSd0ew-Tggb81-tUCV-ug.png "b0vNGI9nUusWcvSd0ew-Tggb81-tUCV-ug.png")

Under the Fact option, below actions could be selected\
-CREATE FACT TABLE\
-ADD FACT TABLE COLUMN\
-UPDATE FACT TABLE COLUMN\
-DISABLE FACT COLUMNS\
-DISABLE FACT

4. Sample **JSON** for Tax Onboarding\
   curl -XPOST http\://ei-meta-api-v3:8080/v3/activity/fact/create\_fact\_table 

-H "Content-Type: application/json" -H "X-CAP-CLIENT-TYPE:WRITE" -d '\{

```
"name": "tax_entity_fact",

"definition": "Tax Entity Fact",

"scope": "Cart Promotion",

"columns": [{

        "name": "event_id",

        "dataType": "BIGINT",

        "columnType": "PK",

        "dimLinkingInfo": null,

        "mappedTo": [{

            "sourceTableName": "transaction_tax_entity",

            "sourceColumnName": "id"

        }],

        "sourceTableFilterExp": "",

        "kpi": null

    },

    {

        "name": "dim_event_user_id",

        "dataType": "BIGINT",

        "columnType": "DIMENSION",

        "dimLinkingInfo": {

            "dimTableName": "users",

            "joinDimColumn": null,

            "selectDimColumn": null

        },

        "mappedTo": [{

            "sourceTableName": "transaction_tax_entity",

            "sourceColumnName": "user_id"

        }],

        "sourceTableFilterExp": "",

        "kpi": null

    },

    {

        "name": "dim_event_date_id",

        "dataType": "BIGINT",

        "columnType": "DIMENSION",

        "dimLinkingInfo": {

            "dimTableName": "date",

            "joinDimColumn": "date",

            "selectDimColumn": "date_id"

        },

        "mappedTo": [{

            "sourceTableName": "transaction_tax_entity",

            "sourceColumnName": "created_on"

        }],

        "sourceTableFilterExp": "",

        "kpi": null

    },

    {

        "name": "dim_cart_promotion_id",

        "dataType": "TEXT",

        "columnType": "DIM_PK",

        "dimLinkingInfo": null,

        "mappedTo": [{

            "sourceTableName": "transaction_tax_entity",

            "sourceColumnName": "promotion_id"

        }],

        "sourceTableFilterExp": "",

        "kpi": null

    },

    {

        "name": "transaction_id",

        "dataType": "BIGINT",

        "columnType": "SRC_MEASURE",

        "dimLinkingInfo": null,

        "mappedTo": [{

            "sourceTableName": "transaction_tax_entity",

            "sourceColumnName": "transaction_id"

        }],

        "sourceTableFilterExp": "",

        "kpi": null

    },

    {

        "name": "line_item_id",

        "dataType": "BIGINT",

        "columnType": "SRC_MEASURE",

        "dimLinkingInfo": null,

        "mappedTo": [{

            "sourceTableName": "transaction_tax_entity",

            "sourceColumnName": "line_item_id"

        }],

        "sourceTableFilterExp": "",

        "kpi": null

    },

    {

        "name": "tax_external_id",

        "dataType": "TEXT",

        "columnType": "SRC_MEASURE",

        "dimLinkingInfo": null,

        "mappedTo": [{

            "sourceTableName": "transaction_tax_entity",

            "sourceColumnName": "tax_external_id"

        }],

        "sourceTableFilterExp": "",

        "kpi": null

    },

    {

        "name": "tax_name",

        "dataType": "TEXT",

        "columnType": "SRC_MEASURE",

        "dimLinkingInfo": null,

        "mappedTo": [{

            "sourceTableName": "transaction_tax_entity",

            "sourceColumnName": "tax_name"

        }],

        "sourceTableFilterExp": "",

        "kpi": null

    },

    {

        "name": "tax_amount",

        "dataType": "DOUBLE",

        "columnType": "SRC_MEASURE",

        "dimLinkingInfo": null,

        "mappedTo": [{

            "sourceTableName": "transaction_tax_entity",

            "sourceColumnName": "tax_amount"

        }],

        "sourceTableFilterExp": "",

        "kpi": null

    },

    {

        "name": "tax_additional_amount",

        "dataType": "DOUBLE",

        "columnType": "SRC_MEASURE",

        "dimLinkingInfo": null,

        "mappedTo": [{

            "sourceTableName": "transaction_tax_entity",

            "sourceColumnName": "tax_additional_amount"

        }],

        "sourceTableFilterExp": "",

        "kpi": null

    },

    {

        "name": "tax_rate",

        "dataType": "DOUBLE",

        "columnType": "SRC_MEASURE",

        "dimLinkingInfo": null,

        "mappedTo": [{

            "sourceTableName": "transaction_tax_entity",

            "sourceColumnName": "tax_rate"

        }],

        "sourceTableFilterExp": "",

        "kpi": null

    },

    {

        "name": "auto_update_time",

        "dataType": "BIGINT",

        "columnType": "FACT_REFERENCE",

        "dimLinkingInfo": null,

        "mappedTo": [{

            "sourceTableName": "transaction_tax_entity",

            "sourceColumnName": "auto_update_time"

        }],

        "sourceTableFilterExp": "",

        "kpi": null

    }

]
```

}'
