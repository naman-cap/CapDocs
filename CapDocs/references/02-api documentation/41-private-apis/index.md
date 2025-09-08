---
title: Private APIs
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
Private APIs are lightweight GET APIs created to fetch specific data that’s not available through standard APIs and can be used through Neo dataflow. These APIs help to address custom requirements without modifying existing standard APIs. Neo acts as the orchestration layer to call these private APIs. Additionally, you can expose a private API as a public endpoint through Neo and make it a Public API, allowing external systems to access it directly. The Private APIs that are exposed only for specific organisations are called **Local APIs**, and the ones that can be used across organisations are called **Global APIs**.

## Key Features

* Execute queries against internal data services without exposing them publicly and by maintaining data privacy
* Create complex business processes by combining multiple private APIs
* Flexible exposure options (Local, Global, and Public APIs)

> 🚧 Note
>
> Private APIs can be used only to retrieve data (GET APIs).

# Example use case - Using private APIs and displaying specific ledger info

### Scenario

A retail brand wants to show only selected ledger details on its customer-facing UI. However, the existing `Get Customer Ledger Info` API returns a large response where each ledger entry maps to a specific event log ID. The API internally calls the `Get Customer Ledger Explode` API, which processes only 10 event log IDs at a time. As a result, processing the entire response becomes inefficient and unsustainable.

### Challenge

* Large payload from the default API slows down the UI.
* The Explode API is rate-limited.
* Direct transformation of this data isn't scalable.

### Solution

Use Neo to orchestrate multiple **private APIs**, each focused on retrieving only specific attributes based on query parameters and event types.

### Step-by-step Flow

1. **Start Neo dataflow**\
   Trigger the dataflow on request.

2. **Check for alternate currency**\
   Use a script block to evaluate if the query parameter contains `alternateCurrencyNames`.

3. **Invoke ledger entry API**

   * If no alternate currency is present, call `getLedgerEntriesWithEventId`.
   * If alternate currency is present, call `getACLedgerEntriesWithEventId`.

4. **Group eventLogIds**\
   Use a script block to group the returned `eventLogIds` by `eventName`. This prepares the payload for downstream event-specific API requests.

5. **Prepare request payloads**\
   Construct payloads dynamically based on the grouped event types (e.g., `TransactionAdd`, `Redemption`, etc.).

6. **Invoke event-specific private APIs**\
   Call only the necessary APIs based on event types using API request blocks. Examples:

   * `getTransactionAddExplodeLedger`
   * `getPointsRedemptionExplodeLedger`
   * `getTargetCompletedExplodeLedger`
   * `getManualPointsAdjustmentExplodeLedger`

7. **Assemble final response**\
   Use a final script block to consolidate outputs from all invoked private APIs and prepare a clean response with only the necessary data.

### Private APIs Used

| **Private API**                          | **Purpose**                                                                      |
| ---------------------------------------- | -------------------------------------------------------------------------------- |
| `getLedgerEntriesWithEventId`            | Fetches event log IDs for Credit/Debit transactions.                             |
| `getACLedgerEntriesWithEventId`          | Fetches event log IDs for alternate currency transactions.                       |
| `getTransactionAddExplodeLedger`         | Fetches custom field values for `TransactionAdd` events.                         |
| `getPointsRedemptionExplodeLedger`       | Fetches `notes` field from `redemptionDetails` in redemption events.             |
| `getTargetCompletedExplodeLedger`        | Fetches `targetDescription` and `targetGroupName` from `TargetCompletedDetails`. |
| `getManualPointsAdjustmentExplodeLedger` | Fetches `reason` field from `manualPointsAdjustmentDetails`.                     |

# Example use case - Exposing private API as public API

**Scenario**\
An airline customer wants to view coupon redemption details, including the redemption date, source, and the PNR against which the redemption occurred.

**Challenge**\
The source, PNR, and redemption date are stored as custom fields, and no standard APIs are available to retrieve the custom field details associated with a coupon redemption.

**Solution**

* Create a private API to retrieve the custom fields associated with coupon redemption using the coupon redemption ID.

* Integrate the private API into a Neo dataflow and expose it so that external systems can access it using the organisation's Intouch authentication.

* Use an API to display the redemption details along with the custom field information (PNR, source, and date of redemption) in the customer-facing UI.

# List of private APIs

| API Endpoint                                                                                                                                            | Purpose                                                                                                   |
| :------------------------------------------------------------------------------------------------------------------------------------------------------ | :-------------------------------------------------------------------------------------------------------- |
| [getCouponRedemptionCustomFieldsData](https://docs.capillarytech.com/reference/private-api-get-custom-fields-associated-with-coupon-redemption#/)       | Retrieve the custom fields associated with coupon redemption                                              |
| [getPaDetailsByEventId](https://docs.capillarytech.com/reference/private-api-get-point-allocation-details-by-event-id#/)                                | Retrieve the point allocation details using the event ID.                                                 |
| [getPAIdsForProvidedDateRange](https://docs.capillarytech.com/reference/private-api-get-allocated-points-details-with-expiry-in-specified-date-range#/) | Retrieves information about points allocated to customers that will expire within a specified date range. |
| [getExpiredPointsByCustomerIdAndYear](https://docs.capillarytech.com/reference/private-api-get-customers-earned-and-expired-points-by-year#/)           | Retrieve the points that expired for a customer, grouped by year.                                         |
| [getLedgerEntriesWithEventId](https://docs.capillarytech.com/reference/private-api-get-event-log-ids-with-credit-or-debit-for-points#/)                 | Retrieves event log IDs for Credit or Debit point transactions.                                           |
| [getACLedgerEntriesWithEventId](https://docs.capillarytech.com/reference/private-api-get-event-log-ids-with-credit-or-debit-for-alternate-currency#/)   | Retrieves event log IDs for Credit or Debit transactions of the specified alternate currencies.           |
| [getTransactionAddExplodeLedger](https://docs.capillarytech.com/reference/private-api-get-custom-field-values-for-transactionadd-event#/)               | Retrieves custom field values for the event log IDs related to `TransactionAdd` events.                   |
| [getPointsRedemptionExplodeLedger](https://docs.capillarytech.com/reference/private-api-get-point-redemption-details-for-redemption-events#/)           | Retrieves points redemption details for the event log IDs related to redemption events.                   |
| [getTargetCompletedExplodeLedger](https://docs.capillarytech.com/reference/private-api-get-target-completion-details#/)                                 | Retrieves target completion details for the event log IDs related to `TargetCompleted` events.            |
| [getManualPointsAdjustmentExplodeLedger](https://docs.capillarytech.com/reference/private-api-get-manual-points-adjustment-details#/)                   | Retrieves the manual points adjustment details for event log IDs for `manualPointsAdjustment` events.     |