---
title: Handling of rejected transactions
excerpt: >-
  In this page, information of how Capillary handled rejected transactions will
  be available.
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
Basically, whenever a transaction happens, the bill comes to the capillary system and will be processed. However, sometimes, in those transactions, we might get:

1. Line item that is not present in the master list
2. Payment method that is not registered in the system
3. Stores whose details are not yet added in the capillary system
4. Missing transaction extended field
5. Missing customer extended field

Whenever these situations occur, those transactions will be stopped from processing (rejected), and will be moved to a centralised sanity queue instead based on below.

**After this enhancement, the handling will be as below:**

1. If they are of 1st, 2nd, 3rd type, they will be moved to the sanity queue.
2. If they are of 4rth, 5th type:
   1. If they are of enum (basically a bunch of options), they will be moved to the sanity queue.
   2. For all the other types, they will be marked as failed permanently. 

Remember, all these transactions will be marked either as “pending” or “failed” as per above flow. All these configurations need to be enabled by the brands, otherwise the system will default to current behavior.

Once these transitions are moved to the sanity queue, an event notification will be sent to the respective brands notifying them that we have received these types of transactions. Brands can fetch these transactions from APIs too to check about them as per their policies (daily, weekly, etc..)

In the event notification that will be sent to brands, it contains following information:

1. Event name
2. Event datetime
3. Bill number
4. Customer identifier
5. Rejection type, .i.e., can be reprocessed or not
6. Reason of the rejection
7. Source details of the bill

Brands can get these transactions from API  based on:

1. Rejection type
2. All pending transactions for a customer

Then brands need to provide the new data points (new line items, new payment methods, new store, new extended field values) that can be considered for transactions to Capillary. Once they are updated in the Capillary system, all these transactions in the sanity queue will be re-processed once again by our capillary system.

During the reprocessing, the process will happen based on the processed date not the original bill date. The APIs involved in this entire sanity queue are following:

1. getRejectedTransactions: Fetches all the rejected transactions for the org, based on the input query params.
2. retriggerTransactionAdd: Checks and updates the status of rejected Transaction. Retriggers the transaction add for  the rejected transaction  which are completely fixed.
3. markFailed: Updates the rejected transaction status to PERMANENT\_FAILED
4. getReTriggerStatus: Gives the status of retriggered rejected transactions for the given retrigger Id

**API links will be available here:**

[https://docs.capillarytech.com/reference/getrejectedtransactions](https://docs.capillarytech.com/reference/getrejectedtransactions)
