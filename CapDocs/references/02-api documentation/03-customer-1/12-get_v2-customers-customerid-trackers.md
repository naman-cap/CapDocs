---
title: Get Customer Tracker Details
excerpt: Fetches tracker details for a specific customer.
api:
  file: customer-tracker-api.json
  operationId: get_v2-customers-customerid-trackers
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
This API retrieves tracker details of a customer. For more information on trackers, refer to the [Tracker documentation](https://docs.capillarytech.com/docs/trackers).

> 👍 Note
>
> For detailed information about our APIs and for hands-on testing, refer documentation in [API overview](https://docs.capillarytech.com/reference/apioverview) and  step-by-step guide on making your first API call in [Make your first API call](https://docs.capillarytech.com/reference/make-your-first-api-call) .

# Prerequisites

*   Authentication - Basic or OAuth authentication details
*   Access group resource - Read access to customer group resource
*   Customer ID

# Resource information

|               |                                     |
| :------------ | :---------------------------------- |
| URL           | /customers`\{customerId\}`/trackers |
| HTTP method   | GET                                 |
| Pagination    | No                                  |
| Rate limit    | NA                                  |
| Batch support | NA                                  |

# API endpoint example

`https://eu.api.capillarytech.com/v2/customers/98662653/trackers`

# Request path parameters

\| Parameter

| (Parameters marked with \* are mandatory) | Data Type | Description                                         |
| ----------------------------------------- | --------- | --------------------------------------------------- |
| customerId\*                              | Integer   | Unique ID of the customer to fetch tracker details. |

```bash
curl --location 'https://eu.api.capillarytech.com/v2/customers/98662653/trackers' \
--header 'Authorization: Basic dGVzdF9kaXZ5YTEymY2OWZmZmRkYg==' \
--header 'Cookie: _cfuvid=PoDtDQ1VoNKSRCHB28EvVnQtadvWLBEsH2CBKuDvxHo-1733484248070-0.0.1.1-604800000'
```

# Response parameters

| Parameter        | Description                                                                                                                                                                                                                        |
| :--------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| pagination       | Pagination is not supported.                                                                                                                                                                                                       |
| data             | Contains the details of the tracker.                                                                                                                                                                                               |
| -id              | Unique identifier for the tracker.                                                                                                                                                                                                 |
| -name            | Name of the tracker.                                                                                                                                                                                                               |
| -conditionId     | Identifier (integer) for the tracker condition. Condition ID is generated when you add the condition to be met for a tracker. For example, a tracker condition could be if the sum of transactions in 365 days are equal to $1000. |
| -type            | Specifies what the tracker monitors. **Example:** `BILL_AMOUNT`, `CUSTOMER_VISITS`, `POINTS`, `LINEITEM_AMOUNT`, `LINEITEM_QTY`, `LINEITEM_COUNT`, or `ALTERNATE_CURRENCIES`.                                                      |
| -value           | Current value of the tracker based on the `type<code>. **Example:**  For </code>type<code>- </code>CUSTOMER_VISITS`, the value signifies the number of times a customer visited the store.                                         |
| -updatedOn       | Date and time the tracker was last updated, in ISO `YYYY-MM-DD HH:MM:SS.s` format.                                                                                                                                                 |
| -conditionName   | Name of the tracker condition.                                                                                                                                                                                                     |
| -periodStartDate | Start date of the period for which the tracker is valid, in ISO `YYYY-MM-DD HH:MM:SS.s` format.                                                                                                                                    |
| -periodEndDate   | End date of the period for which the tracker is valid, in ISO `YYYY-MM-DD HH:MM:SS.s` format.                                                                                                                                      |
| warnings         | Warnings, if any.                                                                                                                                                                                                                  |
| errors           | Errors, if any.                                                                                                                                                                                                                    |

<br />

```json Sample Response
{
    "pagination": {
        "limit": 0,
        "offset": 0,
        "total": 0
    },
    "data": [
        {
            "id": 9737,
            "name": "Transaction Amount tracker",
            "conditionId": 479,
            "type": "BILL_AMOUNT",
            "value": 0,
            "updatedOn": "2023-12-07T00:00:00Z",
            "conditionName": "tracker",
            "periodStartDate": "2023-12-07T00:00:00Z",
            "periodEndDate": "2024-12-31T23:59:59Z"
        },
        {
            "id": 9231,
            "name": "Test karo",
            "conditionId": 383,
            "type": "POINTS",
            "value": 0,
            "updatedOn": "2024-11-13T00:00:00Z",
            "conditionName": "case 1",
            "periodStartDate": "2024-11-13T00:00:00Z",
            "periodEndDate": "2025-01-05T16:59:39Z"
        },
        {
            "id": 5392,
            "name": "Tier Upgrade",
            "conditionId": 265,
            "type": "CUSTOMER_VISITS",
            "value": 0,
            "updatedOn": "2023-12-07T00:00:00Z",
            "conditionName": "TrackerCase_1",
            "periodStartDate": "2023-12-07T00:00:00Z",
            "periodEndDate": "2024-12-31T23:59:59Z"
        },
        {
            "id": 9874,
            "name": "Issue points",
            "conditionId": 490,
            "type": "BILL_AMOUNT",
            "value": 0,
            "updatedOn": "2023-12-07T00:00:00Z",
            "conditionName": "points issue",
            "periodStartDate": "2023-12-07T00:00:00Z",
            "periodEndDate": "2024-12-31T23:59:59Z"
        },
        {
            "id": 10899,
            "name": "Number of transcations",
            "conditionId": 559,
            "type": "BILL_AMOUNT",
            "value": 0,
            "updatedOn": "2024-06-09T00:00:00Z",
            "conditionName": "Number of transcations",
            "periodStartDate": "2024-06-09T00:00:00Z",
            "periodEndDate": "2024-12-31T23:59:59Z"
        },
        {
            "id": 5779,
            "name": "Points Tracker",
            "conditionId": 311,
            "type": "LINEITEM_AMOUNT",
            "value": 0,
            "updatedOn": "2024-12-06T00:00:00Z",
            "conditionName": "Points Cap",
            "periodStartDate": "2024-12-06T00:00:00Z",
            "periodEndDate": "2024-12-06T16:59:39Z"
        },
        {
            "id": 9495,
            "name": "IKEA - Purchases Gamification ",
            "conditionId": 449,
            "type": "BILL_AMOUNT",
            "value": 0,
            "updatedOn": "2024-12-06T00:00:00Z",
            "conditionName": "1000 KW Purchases/6 months ",
            "periodStartDate": "2024-12-06T00:00:00Z",
            "periodEndDate": "2025-04-05T16:59:39Z"
        },
        {
            "id": 9240,
            "name": "Abnormal spend - Maximum Limit of $50,000",
            "conditionId": 384,
            "type": "BILL_AMOUNT",
            "value": 0,
            "updatedOn": "2024-11-28T00:00:00Z",
            "conditionName": "50000 in 7 day",
            "periodStartDate": "2024-11-28T00:00:00Z",
            "periodEndDate": "2024-12-14T11:29:39Z"
        },
        {
            "id": 9241,
            "name": "Last 3 months purchases",
            "conditionId": 385,
            "type": "CUSTOMER_VISITS",
            "value": 0,
            "updatedOn": "2024-11-29T00:00:00Z",
            "conditionName": "Count of transactions",
            "periodStartDate": "2024-11-29T00:00:00Z",
            "periodEndDate": "2024-12-13T11:29:39Z"
        },
        {
            "id": 9242,
            "name": "Abnormal transaction count - 50 in 7 days",
            "conditionId": 386,
            "type": "BILL_AMOUNT",
            "value": 0,
            "updatedOn": "2024-11-29T00:00:00Z",
            "conditionName": "50 in 7 days",
            "periodStartDate": "2024-11-29T00:00:00Z",
            "periodEndDate": "2024-12-13T11:29:39Z"
        },
        {
            "id": 9243,
            "name": "ZZAbnormal booking count in a day (10)",
            "conditionId": 387,
            "type": "BILL_AMOUNT",
            "value": 0,
            "updatedOn": "2024-12-05T00:00:00Z",
            "conditionName": "10 bookings per day",
            "periodStartDate": "2024-12-05T00:00:00Z",
            "periodEndDate": "2024-12-07T11:29:39Z"
        },
        {
            "id": 9629,
            "name": "Luxury Escapes- Status Tier Tracker",
            "conditionId": 463,
            "type": "BILL_AMOUNT",
            "value": 0,
            "updatedOn": "2024-12-06T00:00:00Z",
            "conditionName": "Luxury Escapes- Status Tracker",
            "periodStartDate": "2024-12-06T00:00:00Z",
            "periodEndDate": "2025-12-06T16:59:39Z"
        },
        {
            "id": 10525,
            "name": "Warburg retailers with 50000",
            "conditionId": 537,
            "type": "BILL_AMOUNT",
            "value": 0,
            "updatedOn": "2023-12-07T00:00:00Z",
            "conditionName": "Warburg retailers with 50000",
            "periodStartDate": "2023-12-07T00:00:00Z",
            "periodEndDate": "2024-12-31T23:59:59Z"
        },
        {
            "id": 5406,
            "name": "FAHSilverToGold",
            "conditionId": 266,
            "type": "BILL_AMOUNT",
            "value": 0,
            "updatedOn": "2023-12-07T00:00:00Z",
            "conditionName": "TrackerCase_1",
            "periodStartDate": "2023-12-07T00:00:00Z",
            "periodEndDate": "2024-12-31T23:59:59Z"
        },
        {
            "id": 5534,
            "name": "Stamp Tracker",
            "conditionId": 283,
            "type": "LINEITEM_QTY",
            "value": 0,
            "updatedOn": "2024-12-01T00:00:00Z",
            "conditionName": "TrackerCase_1",
            "periodStartDate": "2024-12-01T00:00:00Z",
            "periodEndDate": "2025-01-01T00:00:00Z"
        },
        {
            "id": 9247,
            "name": "12 month Spending",
            "conditionId": 391,
            "type": "BILL_AMOUNT",
            "value": 0,
            "updatedOn": "2023-12-07T00:00:00Z",
            "conditionName": "12M Spending",
            "periodStartDate": "2023-12-07T00:00:00Z",
            "periodEndDate": "2024-12-31T23:59:59Z"
        },
        {
            "id": 5407,
            "name": "FAHGoldToPlatinum",
            "conditionId": 267,
            "type": "BILL_AMOUNT",
            "value": 0,
            "updatedOn": "2023-12-07T00:00:00Z",
            "conditionName": "TrackerCase_1",
            "periodStartDate": "2023-12-07T00:00:00Z",
            "periodEndDate": "2024-12-31T23:59:59Z"
        },
        {
            "id": 5028,
            "name": "Visits Tracker",
            "conditionId": 181,
            "type": "CUSTOMER_VISITS",
            "value": 0,
            "updatedOn": "2023-12-07T00:00:00Z",
            "conditionName": "TrackerCase_Visits",
            "periodStartDate": "2023-12-07T00:00:00Z",
            "periodEndDate": "2024-12-31T23:59:59Z"
        },
        {
            "id": 5029,
            "name": "Annual Bill Tracker",
            "conditionId": 182,
            "type": "BILL_AMOUNT",
            "value": 0,
            "updatedOn": "2023-12-07T00:00:00Z",
            "conditionName": "TrackerCase_Annual",
            "periodStartDate": "2023-12-07T00:00:00Z",
            "periodEndDate": "2024-12-31T23:59:59Z"
        },
        {
            "id": 11431,
            "name": "Spend",
            "conditionId": 580,
            "type": "BILL_AMOUNT",
            "value": 0,
            "updatedOn": "2023-12-07T00:00:00Z",
            "conditionName": "Avg spend",
            "periodStartDate": "2023-12-07T00:00:00Z",
            "periodEndDate": "2024-12-31T23:59:59Z"
        },
        {
            "id": 10025,
            "name": "123",
            "conditionId": 496,
            "type": "CUSTOMER_VISITS",
            "value": 0,
            "updatedOn": "2024-09-07T00:00:00Z",
            "conditionName": "123 visits ",
            "periodStartDate": "2024-09-07T00:00:00Z",
            "periodEndDate": "2024-12-31T23:59:59Z"
        },
        {
            "id": 10026,
            "name": "TrackSVVPR",
            "conditionId": 497,
            "type": "LINEITEM_QTY",
            "value": 0,
            "updatedOn": "2024-04-25T00:00:00Z",
            "conditionName": "Cycle1",
            "periodStartDate": "2024-04-25T00:00:00Z",
            "periodEndDate": "2024-05-25T00:00:00Z"
        },
        {
            "id": 10028,
            "name": "SVVPTracker",
            "conditionId": 498,
            "type": "LINEITEM_QTY",
            "value": 0,
            "updatedOn": "2023-12-07T00:00:00Z",
            "conditionName": "Cycle1",
            "periodStartDate": "2023-12-07T00:00:00Z",
            "periodEndDate": "2024-12-31T23:59:59Z"
        },
        {
            "id": 9645,
            "name": " Complete 1 theme park & 1 Entertainment  & 1 F&B  get 500 pts on everything valid for 6 months ",
            "conditionId": 468,
            "type": "LINEITEM_COUNT",
            "value": 0,
            "updatedOn": "2023-12-07T00:00:00Z",
            "conditionName": "case1",
            "periodStartDate": "2023-12-07T00:00:00Z",
            "periodEndDate": "2024-12-31T23:59:59Z"
        },
        {
            "id": 9645,
            "name": " Complete 1 theme park & 1 Entertainment  & 1 F&B  get 500 pts on everything valid for 6 months ",
            "conditionId": 475,
            "type": "LINEITEM_COUNT",
            "value": 0,
            "updatedOn": "2024-11-24T00:00:00Z",
            "conditionName": "uks1",
            "periodStartDate": "2024-11-24T00:00:00Z",
            "periodEndDate": "2024-12-18T11:29:39Z"
        },
        {
            "id": 9645,
            "name": " Complete 1 theme park & 1 Entertainment  & 1 F&B  get 500 pts on everything valid for 6 months ",
            "conditionId": 476,
            "type": "LINEITEM_COUNT",
            "value": 0,
            "updatedOn": "2024-11-02T00:00:00Z",
            "conditionName": "uks 2",
            "periodStartDate": "2024-11-02T00:00:00Z",
            "periodEndDate": "2024-12-31T23:59:59Z"
        },
        {
            "id": 5550,
            "name": "First tracker",
            "conditionId": 286,
            "type": "BILL_AMOUNT",
            "value": 0,
            "updatedOn": "2024-12-06T00:00:00Z",
            "conditionName": "First case",
            "periodStartDate": "2024-12-06T00:00:00Z",
            "periodEndDate": "2025-01-05T16:59:39Z"
        },
        {
            "id": 5423,
            "name": "FAHSilverToGoldNew",
            "conditionId": 268,
            "type": "POINTS",
            "value": 2400.000,
            "updatedOn": "2024-11-04T00:00:00Z",
            "conditionName": "TrackerCase_1",
            "periodStartDate": "2023-12-07T00:00:00Z",
            "periodEndDate": "2024-12-31T23:59:59Z"
        },
        {
            "id": 9647,
            "name": "Milestone 1 Seven",
            "conditionId": 469,
            "type": "BILL_AMOUNT",
            "value": 0,
            "updatedOn": "2024-12-06T00:00:00Z",
            "conditionName": "case1",
            "periodStartDate": "2024-12-06T00:00:00Z",
            "periodEndDate": "2025-01-05T16:59:39Z"
        },
        {
            "id": 10031,
            "name": "RCG Points Tracker",
            "conditionId": 499,
            "type": "POINTS",
            "value": 2100.000,
            "updatedOn": "2024-07-31T00:00:00Z",
            "conditionName": "200 Points",
            "periodStartDate": "2023-12-07T00:00:00Z",
            "periodEndDate": "2024-12-31T23:59:59Z"
        },
        {
            "id": 10543,
            "name": "RCG Spend 10000",
            "conditionId": 538,
            "type": "BILL_AMOUNT",
            "value": 0,
            "updatedOn": "2024-06-09T00:00:00Z",
            "conditionName": "Spend 10000",
            "periodStartDate": "2024-06-09T00:00:00Z",
            "periodEndDate": "2024-12-31T23:59:59Z"
        },
        {
            "id": 9519,
            "name": "Test123",
            "conditionId": 451,
            "type": "BILL_AMOUNT",
            "value": 0,
            "updatedOn": "2024-09-07T00:00:00Z",
            "conditionName": "1000",
            "periodStartDate": "2024-09-07T00:00:00Z",
            "periodEndDate": "2024-12-31T23:59:59Z"
        },
        {
            "id": 5040,
            "name": "Bill Tracker for Upgrade",
            "conditionId": 186,
            "type": "BILL_AMOUNT",
            "value": 0,
            "updatedOn": "2024-06-09T00:00:00Z",
            "conditionName": "TrackerCase_6_Months",
            "periodStartDate": "2024-06-09T00:00:00Z",
            "periodEndDate": "2024-12-31T23:59:59Z"
        },
        {
            "id": 5040,
            "name": "Bill Tracker for Upgrade",
            "conditionId": 187,
            "type": "BILL_AMOUNT",
            "value": 0,
            "updatedOn": "2023-12-07T00:00:00Z",
            "conditionName": "TrackerCase_12_Months",
            "periodStartDate": "2023-12-07T00:00:00Z",
            "periodEndDate": "2024-12-31T23:59:59Z"
        },
        {
            "id": 5040,
            "name": "Bill Tracker for Upgrade",
            "conditionId": 188,
            "type": "BILL_AMOUNT",
            "value": 0,
            "updatedOn": "2024-06-09T00:00:00Z",
            "conditionName": "TrackerCase_6_MonthsCount",
            "periodStartDate": "2024-06-09T00:00:00Z",
            "periodEndDate": "2024-12-31T23:59:59Z"
        },
        {
            "id": 5680,
            "name": "ColorBar - Annual Bill ",
            "conditionId": 298,
            "type": "BILL_AMOUNT",
            "value": 0,
            "updatedOn": "2023-12-07T00:00:00Z",
            "conditionName": "Milestone",
            "periodStartDate": "2023-12-07T00:00:00Z",
            "periodEndDate": "2024-12-31T23:59:59Z"
        },
        {
            "id": 5424,
            "name": "FAHGoldToPlatinumNew",
            "conditionId": 269,
            "type": "POINTS",
            "value": 2400.000,
            "updatedOn": "2024-11-04T00:00:00Z",
            "conditionName": "TrackerCase_1",
            "periodStartDate": "2023-12-07T00:00:00Z",
            "periodEndDate": "2024-12-31T23:59:59Z"
        },
        {
            "id": 9648,
            "name": "Milestone 2 Seven",
            "conditionId": 470,
            "type": "LINEITEM_COUNT",
            "value": 0,
            "updatedOn": "2024-12-06T00:00:00Z",
            "conditionName": "case1",
            "periodStartDate": "2024-12-06T00:00:00Z",
            "periodEndDate": "2025-01-05T16:59:39Z"
        },
        {
            "id": 5425,
            "name": "FAHSilverToGoldTracker",
            "conditionId": 270,
            "type": "POINTS",
            "value": 2400.000,
            "updatedOn": "2024-11-04T00:00:00Z",
            "conditionName": "TrackerCase_1",
            "periodStartDate": "2023-12-07T00:00:00Z",
            "periodEndDate": "2024-12-31T23:59:59Z"
        },
        {
            "id": 5041,
            "name": "Night",
            "conditionId": 246,
            "type": "LINEITEM_QTY",
            "value": 0,
            "updatedOn": "2023-12-07T00:00:00Z",
            "conditionName": "TrackerCase_2",
            "periodStartDate": "2023-12-07T00:00:00Z",
            "periodEndDate": "2024-12-31T23:59:59Z"
        },
        {
            "id": 5041,
            "name": "Night",
            "conditionId": 189,
            "type": "LINEITEM_QTY",
            "value": 0,
            "updatedOn": "2023-12-07T00:00:00Z",
            "conditionName": "Night",
            "periodStartDate": "2023-12-07T00:00:00Z",
            "periodEndDate": "2024-12-31T23:59:59Z"
        },
        {
            "id": 5553,
            "name": "Visits exceeeds 250",
            "conditionId": 287,
            "type": "BILL_AMOUNT",
            "value": 0,
            "updatedOn": "2023-12-07T00:00:00Z",
            "conditionName": "Customer Visits Milestone 250",
            "periodStartDate": "2023-12-07T00:00:00Z",
            "periodEndDate": "2024-12-31T23:59:59Z"
        },
        {
            "id": 5554,
            "name": "Cx visits",
            "conditionId": 288,
            "type": "CUSTOMER_VISITS",
            "value": 0,
            "updatedOn": "2023-12-07T00:00:00Z",
            "conditionName": "Tier eligiblity ",
            "periodStartDate": "2023-12-07T00:00:00Z",
            "periodEndDate": "2024-12-31T23:59:59Z"
        },
        {
            "id": 9651,
            "name": "first5transaction",
            "conditionId": 471,
            "type": "BILL_AMOUNT",
            "value": 0,
            "updatedOn": "2024-11-12T00:00:00Z",
            "conditionName": "case_1",
            "periodStartDate": "2024-11-12T00:00:00Z",
            "periodEndDate": "2024-12-12T00:00:00Z"
        },
        {
            "id": 9652,
            "name": "top5transaction",
            "conditionId": 472,
            "type": "LINEITEM_AMOUNT",
            "value": 0,
            "updatedOn": "2024-11-12T00:00:00Z",
            "conditionName": "case_1",
            "periodStartDate": "2024-11-12T00:00:00Z",
            "periodEndDate": "2024-12-12T00:00:00Z"
        },
        {
            "id": 9653,
            "name": "bigbuyer",
            "conditionId": 473,
            "type": "BILL_AMOUNT",
            "value": 0,
            "updatedOn": "2024-11-12T00:00:00Z",
            "conditionName": "case_1",
            "periodStartDate": "2024-11-12T00:00:00Z",
            "periodEndDate": "2024-12-12T00:00:00Z"
        },
        {
            "id": 5692,
            "name": "GMG_No. of Visits",
            "conditionId": 300,
            "type": "CUSTOMER_VISITS",
            "value": 0,
            "updatedOn": "2024-09-07T00:00:00Z",
            "conditionName": "No. of Visits/Purchase",
            "periodStartDate": "2024-09-07T00:00:00Z",
            "periodEndDate": "2024-12-31T23:59:59Z"
        },
        {
            "id": 10046,
            "name": "Coins AC_Tracker",
            "conditionId": 501,
            "type": "ALTERNATE_CURRENCIES",
            "value": 0,
            "updatedOn": "2024-12-04T00:00:00Z",
            "conditionName": "test_AC_1",
            "periodStartDate": "2024-12-04T00:00:00Z",
            "periodEndDate": "2024-12-08T11:29:39Z"
        },
        {
            "id": 6206,
            "name": "Test tracker creation 1",
            "conditionId": 365,
            "type": "BILL_AMOUNT",
            "value": 0,
            "updatedOn": "2024-11-06T00:00:00Z",
            "conditionName": "Test1",
            "periodStartDate": "2024-11-06T00:00:00Z",
            "periodEndDate": "2024-12-31T23:59:59Z"
        },
        {
            "id": 6209,
            "name": "Fuel tracker",
            "conditionId": 366,
            "type": "LINEITEM_QTY",
            "value": 0,
            "updatedOn": "2024-09-07T00:00:00Z",
            "conditionName": "90 days",
            "periodStartDate": "2024-09-07T00:00:00Z",
            "periodEndDate": "2024-12-31T23:59:59Z"
        },
        {
            "id": 6210,
            "name": "ZZ - 90 days fuel tracker",
            "conditionId": 367,
            "type": "LINEITEM_QTY",
            "value": 0,
            "updatedOn": "2024-09-07T00:00:00Z",
            "conditionName": "90 Days",
            "periodStartDate": "2024-09-07T00:00:00Z",
            "periodEndDate": "2024-12-31T23:59:59Z"
        },
        {
            "id": 6211,
            "name": "Visit3Times",
            "conditionId": 368,
            "type": "BILL_EXTENDED_FIELD",
            "value": 0,
            "updatedOn": "2024-11-29T00:00:00Z",
            "conditionName": "Visits",
            "periodStartDate": "2024-11-29T00:00:00Z",
            "periodEndDate": "2024-12-13T11:29:39Z"
        },
        {
            "id": 6212,
            "name": "David's Tracker",
            "conditionId": 369,
            "type": "CUSTOMER_VISITS",
            "value": 0,
            "updatedOn": "2024-11-22T00:00:00Z",
            "conditionName": "David's tracker - Visit Five Guys Factory",
            "periodStartDate": "2024-11-22T00:00:00Z",
            "periodEndDate": "2024-12-20T11:29:39Z"
        },
        {
            "id": 6212,
            "name": "David's Tracker",
            "conditionId": 370,
            "type": "CUSTOMER_VISITS",
            "value": 0,
            "updatedOn": "2024-11-22T00:00:00Z",
            "conditionName": "David's tracker - Visit Cheesecake Factory",
            "periodStartDate": "2024-11-22T00:00:00Z",
            "periodEndDate": "2024-12-20T11:29:39Z"
        },
        {
            "id": 10823,
            "name": "Fuel & Oil Tracker",
            "conditionId": 548,
            "type": "LINEITEM_QTY",
            "value": 0,
            "updatedOn": "2024-09-07T00:00:00Z",
            "conditionName": "Oil Tracker",
            "periodStartDate": "2024-09-07T00:00:00Z",
            "periodEndDate": "2024-12-31T23:59:59Z"
        },
        {
            "id": 4938,
            "name": "EOSS Tracker",
            "conditionId": 173,
            "type": "BILL_AMOUNT",
            "value": 0,
            "updatedOn": "2023-12-07T00:00:00Z",
            "conditionName": "TrackerCase_1",
            "periodStartDate": "2023-12-07T00:00:00Z",
            "periodEndDate": "2024-12-31T23:59:59Z"
        },
        {
            "id": 4938,
            "name": "EOSS Tracker",
            "conditionId": 174,
            "type": "BILL_AMOUNT",
            "value": 0,
            "updatedOn": "2023-12-07T00:00:00Z",
            "conditionName": "TrackerCase_2",
            "periodStartDate": "2023-12-07T00:00:00Z",
            "periodEndDate": "2024-12-31T23:59:59Z"
        },
        {
            "id": 5962,
            "name": "Salient Demo Tracker",
            "conditionId": 333,
            "type": "BILL_AMOUNT",
            "value": 0,
            "updatedOn": "2023-12-07T00:00:00Z",
            "conditionName": "Year",
            "periodStartDate": "2023-12-07T00:00:00Z",
            "periodEndDate": "2024-12-31T23:59:59Z"
        },
        {
            "id": 5323,
            "name": "visits",
            "conditionId": 257,
            "type": "CUSTOMER_VISITS",
            "value": 0,
            "updatedOn": "2023-12-07T00:00:00Z",
            "conditionName": "TrackerCase_1",
            "periodStartDate": "2023-12-07T00:00:00Z",
            "periodEndDate": "2024-12-31T23:59:59Z"
        },
        {
            "id": 6095,
            "name": "Footwear Segment",
            "conditionId": 349,
            "type": "LINEITEM_EXTENDED_FIELD",
            "value": 0,
            "updatedOn": "2024-11-29T00:00:00Z",
            "conditionName": "Footwear",
            "periodStartDate": "2024-11-29T00:00:00Z",
            "periodEndDate": "2024-12-13T11:29:39Z"
        },
        {
            "id": 11343,
            "name": "Number of Nights",
            "conditionId": 578,
            "type": "BILL_TOTAL_QTY",
            "value": 0,
            "updatedOn": "2023-12-07T00:00:00Z",
            "conditionName": "Number of Nights",
            "periodStartDate": "2023-12-07T00:00:00Z",
            "periodEndDate": "2024-12-31T23:59:59Z"
        },
        {
            "id": 6096,
            "name": "Sports",
            "conditionId": 350,
            "type": "BILL_EXTENDED_FIELD",
            "value": 0,
            "updatedOn": "2023-12-07T00:00:00Z",
            "conditionName": "Sports",
            "periodStartDate": "2023-12-07T00:00:00Z",
            "periodEndDate": "2024-12-31T23:59:59Z"
        },
        {
            "id": 6097,
            "name": "Visits us twice in a week",
            "conditionId": 351,
            "type": "BILL_EXTENDED_FIELD",
            "value": 0,
            "updatedOn": "2024-06-09T00:00:00Z",
            "conditionName": "Have not seen in three months",
            "periodStartDate": "2024-06-09T00:00:00Z",
            "periodEndDate": "2024-12-31T23:59:59Z"
        },
        {
            "id": 5844,
            "name": "Croma Tracker",
            "conditionId": 320,
            "type": "BILL_AMOUNT",
            "value": 0,
            "updatedOn": "2024-11-21T00:00:00Z",
            "conditionName": "500K Spend",
            "periodStartDate": "2024-11-21T00:00:00Z",
            "periodEndDate": "2025-02-04T16:59:39Z"
        },
        {
            "id": 5974,
            "name": "New tracker",
            "conditionId": 335,
            "type": "CUSTOMER_VISITS",
            "value": 0,
            "updatedOn": "2024-11-06T00:00:00Z",
            "conditionName": "Visit",
            "periodStartDate": "2024-11-06T00:00:00Z",
            "periodEndDate": "2024-12-31T23:59:59Z"
        },
        {
            "id": 5975,
            "name": "Spend 250 within a day",
            "conditionId": 336,
            "type": "BILL_AMOUNT",
            "value": 0,
            "updatedOn": "2024-12-05T00:00:00Z",
            "conditionName": "Spend 250 within a day",
            "periodStartDate": "2024-12-05T00:00:00Z",
            "periodEndDate": "2024-12-07T11:29:39Z"
        },
        {
            "id": 9815,
            "name": "stores",
            "conditionId": 482,
            "type": "BILL_AMOUNT",
            "value": 0,
            "updatedOn": "2023-12-07T00:00:00Z",
            "conditionName": "storereward",
            "periodStartDate": "2023-12-07T00:00:00Z",
            "periodEndDate": "2024-12-31T23:59:59Z"
        },
        {
            "id": 5981,
            "name": "Diwali Promo VMM",
            "conditionId": 338,
            "type": "BILL_AMOUNT",
            "value": 0,
            "updatedOn": "2024-11-06T00:00:00Z",
            "conditionName": "Bill amount",
            "periodStartDate": "2024-11-06T00:00:00Z",
            "periodEndDate": "2024-12-31T23:59:59Z"
        },
        {
            "id": 5470,
            "name": "Fashion Tracker",
            "conditionId": 278,
            "type": "LINEITEM_QTY",
            "value": 0,
            "updatedOn": "2024-12-01T00:00:00Z",
            "conditionName": "TrackerCase_1",
            "periodStartDate": "2024-12-01T00:00:00Z",
            "periodEndDate": "2025-01-01T00:00:00Z"
        },
        {
            "id": 5856,
            "name": "SMDAC-Transaction Tracker",
            "conditionId": 321,
            "type": "BILL_AMOUNT",
            "value": 0,
            "updatedOn": "2024-12-06T00:00:00Z",
            "conditionName": "Spend 10000",
            "periodStartDate": "2024-12-06T00:00:00Z",
            "periodEndDate": "2025-12-06T16:59:39Z"
        },
        {
            "id": 5858,
            "name": "Segi Fresh Eligibility",
            "conditionId": 322,
            "type": "CUSTOMER_VISITS",
            "value": 0,
            "updatedOn": "2024-12-06T00:00:00Z",
            "conditionName": "Spend",
            "periodStartDate": "2024-12-06T00:00:00Z",
            "periodEndDate": "2025-01-05T16:59:39Z"
        },
        {
            "id": 10597,
            "name": "Tier tracker Blue",
            "conditionId": 540,
            "type": "ALTERNATE_CURRENCIES",
            "value": 0,
            "updatedOn": "2024-01-01T00:00:00Z",
            "conditionName": "Annual reset tracker",
            "periodStartDate": "2024-01-01T00:00:00Z",
            "periodEndDate": "2024-02-01T00:00:00Z"
        },
        {
            "id": 5480,
            "name": "Buy5ButterMilk",
            "conditionId": 279,
            "type": "LINEITEM_QTY",
            "value": 0,
            "updatedOn": "2023-12-07T00:00:00Z",
            "conditionName": "TrackerCase_1",
            "periodStartDate": "2023-12-07T00:00:00Z",
            "periodEndDate": "2024-12-31T23:59:59Z"
        },
        {
            "id": 5736,
            "name": "Test",
            "conditionId": 303,
            "type": "POINTS",
            "value": 12900.000,
            "updatedOn": "2024-07-31T00:00:00Z",
            "conditionName": "Test",
            "periodStartDate": "2022-07-05T00:00:00Z",
            "periodEndDate": "2022-08-05T00:00:00Z"
        },
        {
            "id": 5101,
            "name": "Regular Points Tracker for Upgrade",
            "conditionId": 208,
            "type": "POINTS",
            "value": 2100.000,
            "updatedOn": "2024-07-31T00:00:00Z",
            "conditionName": "RegularPoints_365",
            "periodStartDate": "2023-12-07T00:00:00Z",
            "periodEndDate": "2024-12-31T23:59:59Z"
        },
        {
            "id": 9199,
            "name": "Sales for a certain",
            "conditionId": 375,
            "type": "BILL_AMOUNT",
            "value": 0,
            "updatedOn": "2024-09-07T00:00:00Z",
            "conditionName": "case2",
            "periodStartDate": "2024-09-07T00:00:00Z",
            "periodEndDate": "2024-12-31T23:59:59Z"
        },
        {
            "id": 9199,
            "name": "Sales for a certain",
            "conditionId": 376,
            "type": "BILL_AMOUNT",
            "value": 0,
            "updatedOn": "2024-11-06T00:00:00Z",
            "conditionName": "case1",
            "periodStartDate": "2024-11-06T00:00:00Z",
            "periodEndDate": "2024-12-31T23:59:59Z"
        },
        {
            "id": 6128,
            "name": "Dominos Trackers ",
            "conditionId": 352,
            "type": "BILL_EXTENDED_FIELD",
            "value": 0,
            "updatedOn": "2024-11-29T00:00:00Z",
            "conditionName": "Store Visits",
            "periodStartDate": "2024-11-29T00:00:00Z",
            "periodEndDate": "2024-12-13T11:29:39Z"
        },
        {
            "id": 9200,
            "name": "Slab renew tracker",
            "conditionId": 377,
            "type": "CUSTOMER_VISITS",
            "value": 0,
            "updatedOn": "2024-01-01T02:30:03Z",
            "conditionName": "Case 1",
            "periodStartDate": "2024-01-01T02:30:03Z",
            "periodEndDate": "2024-12-31T23:59:59Z"
        },
        {
            "id": 9840,
            "name": "transaction_bill",
            "conditionId": 488,
            "type": "BILL_AMOUNT",
            "value": 0,
            "updatedOn": "2024-12-06T00:00:00Z",
            "conditionName": "case_1",
            "periodStartDate": "2024-12-06T00:00:00Z",
            "periodEndDate": "2024-12-06T16:59:39Z"
        },
        {
            "id": 5361,
            "name": "Bill Amount Tracker",
            "conditionId": 262,
            "type": "BILL_AMOUNT",
            "value": 0,
            "updatedOn": "2023-12-07T00:00:00Z",
            "conditionName": "TrackerCase_1",
            "periodStartDate": "2023-12-07T00:00:00Z",
            "periodEndDate": "2024-12-31T23:59:59Z"
        },
        {
            "id": 5362,
            "name": "ZZ - 6monthTracker1",
            "conditionId": 263,
            "type": "BILL_AMOUNT",
            "value": 0,
            "updatedOn": "2024-06-06T00:00:00Z",
            "conditionName": "TrackerCase_1",
            "periodStartDate": "2024-06-06T00:00:00Z",
            "periodEndDate": "2024-12-31T23:59:59Z"
        },
        {
            "id": 5362,
            "name": "ZZ - 6monthTracker1",
            "conditionId": 264,
            "type": "BILL_AMOUNT",
            "value": 0,
            "updatedOn": "2023-12-07T00:00:00Z",
            "conditionName": "TrackerCase_2",
            "periodStartDate": "2023-12-07T00:00:00Z",
            "periodEndDate": "2024-12-31T23:59:59Z"
        },
        {
            "id": 6004,
            "name": "Lube Visits",
            "conditionId": 342,
            "type": "CUSTOMER_VISITS",
            "value": 0,
            "updatedOn": "2024-11-06T00:00:00Z",
            "conditionName": "3 Visits",
            "periodStartDate": "2024-11-06T00:00:00Z",
            "periodEndDate": "2024-12-31T23:59:59Z"
        },
        {
            "id": 6134,
            "name": "Yara Vita",
            "conditionId": 354,
            "type": "LINEITEM_QTY",
            "value": 0,
            "updatedOn": "2024-11-06T00:00:00Z",
            "conditionName": "No. of Yara Vita",
            "periodStartDate": "2024-11-06T00:00:00Z",
            "periodEndDate": "2024-12-31T23:59:59Z"
        },
        {
            "id": 9208,
            "name": "gg",
            "conditionId": 381,
            "type": "BILL_EXTENDED_FIELD",
            "value": 0,
            "updatedOn": "2024-11-06T00:00:00Z",
            "conditionName": "jh",
            "periodStartDate": "2024-11-06T00:00:00Z",
            "periodEndDate": "2024-12-31T23:59:59Z"
        },
        {
            "id": 9209,
            "name": "Revenue",
            "conditionId": 382,
            "type": "BILL_AMOUNT",
            "value": 0,
            "updatedOn": "2023-12-07T00:00:00Z",
            "conditionName": "txn amount",
            "periodStartDate": "2023-12-07T00:00:00Z",
            "periodEndDate": "2024-12-31T23:59:59Z"
        },
        {
            "id": 5780,
            "name": "3 visits",
            "conditionId": 312,
            "type": "CUSTOMER_VISITS",
            "value": 0,
            "updatedOn": "2024-12-06T00:00:00Z",
            "conditionName": "3Visits",
            "periodStartDate": "2024-12-06T00:00:00Z",
            "periodEndDate": "2025-12-06T16:59:39Z"
        },
        {
            "id": 5781,
            "name": "Annual Spend",
            "conditionId": 313,
            "type": "BILL_AMOUNT",
            "value": 0,
            "updatedOn": "2023-01-01T00:00:00Z",
            "conditionName": "Annual Spend",
            "periodStartDate": "2023-01-01T00:00:00Z",
            "periodEndDate": "2023-02-01T00:00:00Z"
        },
        {
            "id": 5951,
            "name": "Points_Tracker_test",
            "conditionId": 332,
            "type": "POINTS",
            "value": 0,
            "updatedOn": "2024-10-07T00:00:00Z",
            "conditionName": "1000 rs. get 10% dis",
            "periodStartDate": "2024-10-07T00:00:00Z",
            "periodEndDate": "2023-02-25T23:59:59Z"
        },
        {
            "id": 9315,
            "name": "Test_trackers_1",
            "conditionId": 402,
            "type": "BILL_AMOUNT",
            "value": 0,
            "updatedOn": "2024-12-04T00:00:00Z",
            "conditionName": "Cycle_1",
            "periodStartDate": "2024-12-04T00:00:00Z",
            "periodEndDate": "2024-09-30T23:59:59Z"
        },
        {
            "id": 9244,
            "name": "Abnormal spend - Maximum Limit of $50,000",
            "conditionId": 404,
            "type": "BILL_AMOUNT",
            "value": 0,
            "updatedOn": "2024-11-29T00:00:00Z",
            "conditionName": "Case_1",
            "periodStartDate": "2024-11-29T00:00:00Z",
            "periodEndDate": "2024-09-30T23:59:59Z"
        },
        {
            "id": 9246,
            "name": "Abnormal spend - 50000$",
            "conditionId": 390,
            "type": "BILL_AMOUNT",
            "value": 0,
            "updatedOn": "2024-11-29T00:00:00Z",
            "conditionName": "Abnormal spend - 50000$",
            "periodStartDate": "2024-11-29T00:00:00Z",
            "periodEndDate": "2024-09-30T23:59:59Z"
        },
        {
            "id": 10017,
            "name": "Lineitem Quantity",
            "conditionId": 495,
            "type": "LINEITEM_QTY",
            "value": 0,
            "updatedOn": "2024-12-05T00:00:00Z",
            "conditionName": "Quantity",
            "periodStartDate": "2024-12-05T00:00:00Z",
            "periodEndDate": "2024-12-07T11:29:39Z"
        },
        {
            "id": 10605,
            "name": "DSG Spend Cycle",
            "conditionId": 541,
            "type": "BILL_AMOUNT",
            "value": 0,
            "updatedOn": "2024-01-01T00:00:00Z",
            "conditionName": "Spend cycle",
            "periodStartDate": "2024-01-01T00:00:00Z",
            "periodEndDate": "2024-02-01T00:00:00Z"
        },
        {
            "id": 9469,
            "name": "Spend_per_year",
            "conditionId": 443,
            "type": "BILL_GROSS_AMOUNT",
            "value": 0,
            "updatedOn": "2024-01-01T00:00:00Z",
            "conditionName": "Spend_per_year",
            "periodStartDate": "2024-01-01T00:00:00Z",
            "periodEndDate": "2024-02-01T00:00:00Z"
        },
        {
            "id": 10015,
            "name": "Track Amount",
            "conditionId": 494,
            "type": "BILL_AMOUNT",
            "value": 0,
            "updatedOn": "2024-12-05T00:00:00Z",
            "conditionName": "Amount",
            "periodStartDate": "2024-12-05T00:00:00Z",
            "periodEndDate": "2024-12-07T11:29:39Z"
        }
    ],
    "warnings": [],
    "errors": []
}
```
```json Invalid customerId
{
  "pagination": {
    "limit": 0,
    "offset": 0,
    "total": 0
  },
  "warnings": [],
  "errors": [
    {
      "status": false,
      "code": 8015,
      "message": "Customer not found for the given identifiers"
    }
  ]
}
```

<br />

# API error codes

| Error Code | Message                                      | Description         |
| :--------- | :------------------------------------------- | :------------------ |
| 8015       | Customer not found for the given identifiers | Invalid customerId. |