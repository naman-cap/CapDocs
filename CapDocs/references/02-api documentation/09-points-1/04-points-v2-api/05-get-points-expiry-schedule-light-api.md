---
title: Get Points Expiry Schedule (Light API)
excerpt: ''
api:
  file: v2.json
  operationId: get-points-expiry-schedule-light-api
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
<Callout icon="👍" theme="okay">
  For an overview on our APIs and for hands-on testing, refer to [API overview](https://docs.capillarytech.com/reference/apioverview) and  [Make your first API call](https://docs.capillarytech.com/reference/make-your-first-api-call) documentation.
</Callout>

This API retrieves the history of points expiry schedules for a specific duration. The expiry schedules are sorted by date in the ascending order. This is a light API and hence the data retrieval is faster as it shows only the key information of the API.

## Prerequisites

*   Basic or OAuth credentials
*   Read access to Points access group resource
*   If the dual eligibility configuration is set to true, the  API will not work.

## API endpoint example

`https://eu.api.capillarytech.com/v2/customers/565039505/pointsExpirySchedule`

```curl
curl --location 'https://eu.api.capillarytech.com/v2/customers/565039505/pointsExpirySchedule' \
--header 'Authorization: Basic c2FudC5wXzEyMzpiMmVhMGFhYWI1ZThmODg5ZTAzNGE2NjA5NTIwM2FlNw==' \
--header 'Cookie: _cfuvid=uEUwrBAfGGgkRhH8C6wGyc6ShByhFRsEdpQj1e8WSGU-1750831646379-0.0.1.1-604800000'
```

## Resource Information

| URI                | v2/customers/565039505/pointsExpirySchedule |
| :----------------- | :------------------------------------------ |
| HTTP method        | GET                                         |
| Authentication     | Basic                                       |
| Pagination support | No                                          |
| Rate limit         | Yes                                         |
| Batch Support      | No                                          |

## Query parameters

<Table align={["left","left","left","left"]}>
  <thead>
    <tr>
      <th>
        Field
      </th>

      <th>
        Type
      </th>

      <th>
        Required
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        source*
      </td>

      <td>
        Enum
      </td>

      <td>
        Yes
      </td>

      <td>
        Source on which the identifier is available.
        The supported values are FACEBOOK,WEB_ENGAGE,WECHAT,
        INSTORE,MARTJACK,TMALL,TAOBAO,JD,ECOMMERCE,WEBSITE,LINE, and ALL.
      </td>
    </tr>

    <tr>
      <td>
        accountId
      </td>

      <td>
        String
      </td>

      <td>
        Optional
      </td>

      <td>
        Account ID of a specific source if the source has multiple accounts.
      </td>
    </tr>

    <tr>
      <td>
        identifierName*
      </td>

      <td>
        Enum
      </td>

      <td>
        Yes
      </td>

      <td>
        Identifier type used to fetch the customer's expiry schedule details.
        The supported values are mobile,email,externalId,cardnumber,cardExternalId.
      </td>
    </tr>

    <tr>
      <td>
        identifierValue*
      </td>

      <td>
        String
      </td>

      <td>
        Yes
      </td>

      <td>
        Identifier of the customer specific to the identifierName.
      </td>
    </tr>

    <tr>
      <td>
        fetchDataForAllPrograms
      </td>

      <td>
        Boolean
      </td>

      <td>
        Optional
      </td>

      <td>
        If `true` Returns expiry schedules for all loyalty programs the customer is enrolled in. If `false` Returns expiry schedules only for the specified programId (or the default program if programId is omitted).
      </td>
    </tr>

    <tr>
      <td>
        fetchEarliestExpiryOnly
      </td>

      <td>
        Boolean
      </td>

      <td>
        Optional
      </td>

      <td>
        When set to true, the API returns the soonest expiry for each unique (programId + pointsType + expiryType) group. When false (default), it returns all expiry schedules for the customer.
      </td>
    </tr>

    <tr>
      <td>
        startDate
      </td>

      <td>
        String
      </td>

      <td>
        Optional
      </td>

      <td>
        Start date (YYYY-MM-DD) for fetching points expiry schedules. Must be future dated (current date + 1 day minimum). Time components not supported. Example: If today is 2023-10-25, earliest allowed is 2023-10-26
      </td>
    </tr>

    <tr>
      <td>
        endDate
      </td>

      <td>
        String
      </td>

      <td>
        Optional
      </td>

      <td>
        End date (YYYY-MM-DD) for the expiry schedule range. Defaults to startDate + 100 years if omitted. Maximum range: 100 years from current date. Time components not supported. Example: With startDate=2023-10-26, maximum endDate is 2123-10-26
      </td>
    </tr>

    <tr>
      <td>
        programId
      </td>

      <td>
        integer
      </td>

      <td>
        Optional
      </td>

      <td>
        Unique ID of the program. Filter by a specific loyalty program; if omitted, uses the default program.
      </td>
    </tr>
  </tbody>
</Table>

# Response parameter

| **Parameter**                | Type    | **Description**                                                                     |
| ---------------------------- | :------ | ----------------------------------------------------------------------------------- |
| id                           | integer | Unique identifier.                                                                  |
| profiles                     | array   | List containing profile details.                                                    |
| loyaltyInfo                  | object  | Object containing information about loyalty.                                        |
| loyaltyInfo.loyaltyType      | string  | Type of loyalty, in this instance, "loyalty".                                       |
| segments                     | object  | Object containing segment details.                                                  |
| extendedFields               | object  | Object containing extended field details (currently empty).                         |
| expirySchedules              | array   | List containing details of points expiry schedules.                                 |
| expirySchedules[].points     | decimal | Number of points in each expiry schedule.                                           |
| expirySchedules[].expiryDate | string  | Date on which the points in each expiry schedule will expire.                       |
| expirySchedules[].programId  | integer | Identifier for the program associated with the points in each expiry schedule.      |
| expirySchedules[].pointsType | string  | Type of points in each expiry schedule (e.g., "line_item_regular", "bill_regular"). |
| expirySchedules[].expiryType | string  | Type of expiry for the points in each expiry schedule (in this case, "fixed").      |
| warnings                     | array   | List containing warnings related to the entity (currently empty).                   |

## Examples

**with fetchDataForAllPrograms=false and fetchEarliestExpiryOnly=false**

`http://{{url}}/v2/customers/lookup/pointsExpirySchedule?identifierName=mobile&identifierValue=919116112960&source=INSTORE&fetchDataForAllPrograms=false&fetchEarliestExpiryOnly=false&programId=1357`

```json
{
    "id": 421098436,
    "profiles": [],
    "loyaltyInfo": {
        "loyaltyType": "loyalty"
    },
    "segments": {},
    "extendedFields": {},
    "expirySchedules": [
        {
            "points": 200.0,
            "expiryDate": "2022-05-19",
            "programId": 1357,
            "pointsType": "line_item_regular",
            "expiryType": "fixed"
        },
        {
            "points": 100.0,
            "expiryDate": "2022-05-20",
            "programId": 1357,
            "pointsType": "line_item_regular",
            "expiryType": "fixed"
        }
    ],
    "warnings": []
}
```

**when fetchDataForAllPrograms=true and fetchEarliestExpiryOnly=false**

`http://{{url}}/v2/customers/lookup/pointsExpirySchedule?identifierName=mobile&identifierValue=919116112960&source=INSTORE&fetchDataForAllPrograms=true&fetchEarliestExpiryOnly=false&programId=1357`

```json
{
    "id": 421098436,
    "profiles": [],
    "loyaltyInfo": {
        "loyaltyType": "loyalty"
    },
    "segments": {},
    "extendedFields": {},
    "expirySchedules": [
        {
            "points": 100.0,
            "expiryDate": "2122-03-20",
            "programId": 1356,
            "pointsType": "line_item_regular",
            "expiryType": "fixed"
        },
        {
            "points": 20.0,
            "expiryDate": "2122-03-20",
            "programId": 1356,
            "pointsType": "bill_regular",
            "expiryType": "fixed"
        },
        {
            "points": 200.0,
            "expiryDate": "2022-05-19",
            "programId": 1357,
            "pointsType": "line_item_regular",
            "expiryType": "fixed"
        },
        {
            "points": 100.0,
            "expiryDate": "2022-05-20",
            "programId": 1357,
            "pointsType": "line_item_regular",
            "expiryType": "fixed"
        }
    ],
    "warnings": []
}
```

**when fetchDataForAllPrograms=false and fetchEarliestExpiryOnly=true**

`http://{{url}}/v2/customers/lookup/pointsExpirySchedule?identifierName=mobile&identifierValue=919116112960&source=INSTORE&fetchDataForAllPrograms=false&fetchEarliestExpiryOnly=true&programId=1357`

```
{
    "id": 421098436,
    "profiles": [],
    "loyaltyInfo": {
        "loyaltyType": "loyalty"
    },
    "segments": {},
    "extendedFields": {},
    "expirySchedules": [
        {
            "points": 200.0,
            "expiryDate": "2022-05-19",
            "programId": 1357,
            "pointsType": "line_item_regular",
            "expiryType": "fixed"
        }
    ],
    "warnings": []
}
```

**when fetchDataForAllPrograms=true and fetchEarliestExpiryOnly=true**

`http://{{url}}/v2/customers/lookup/pointsExpirySchedule?identifierName=mobile&identifierValue=919116112960&source=INSTORE&fetchDataForAllPrograms=true&fetchEarliestExpiryOnly=true&programId=1357`

```json
{
    "id": 421098436,
    "profiles": [],
    "loyaltyInfo": {
        "loyaltyType": "loyalty"
    },
    "segments": {},
    "extendedFields": {},
    "expirySchedules": [
        {
            "points": 100.0,
            "expiryDate": "2122-03-20",
            "programId": 1356,
            "pointsType": "line_item_regular",
            "expiryType": "fixed"
        },
        {
            "points": 20.0,
            "expiryDate": "2122-03-20",
            "programId": 1356,
            "pointsType": "bill_regular",
            "expiryType": "fixed"
        },
        {
            "points": 200.0,
            "expiryDate": "2022-05-19",
            "programId": 1357,
            "pointsType": "line_item_regular",
            "expiryType": "fixed"
        }
    ],
    "warnings": []
}
```

**with startDate and endDate**

`http://{{url}}/v2/customers/lookup/pointsExpirySchedule?identifierName=mobile&identifierValue=919116112960&source=INSTORE&startDate=2020-01-01&endDate=2040-03-01&programId=1357&fetchEarliestExpiryOnly=false&fetchDataForAllPrograms=true`

```json
{
    "id": 421098436,
    "profiles": [],
    "loyaltyInfo": {
        "loyaltyType": "loyalty"
    },
    "segments": {},
    "extendedFields": {},
    "expirySchedules": [
        {
            "points": 200.0,
            "expiryDate": "2022-05-19",
            "programId": 1357,
            "pointsType": "line_item_regular",
            "expiryType": "fixed"
        },
        {
            "points": 100.0,
            "expiryDate": "2022-05-20",
            "programId": 1357,
            "pointsType": "line_item_regular",
            "expiryType": "fixed"
        }
    ],
    "warnings": []
}
```

## API specific error code

<Table align={["left","left","left"]}>
  <thead>
    <tr>
      <th>
        Error Code
      </th>

      <th>
        Description
      </th>

      <th>
        Reason
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        8015
      </td>

      <td>
        Customer not found for the given identifiers
      </td>

      <td>
        Invalid or missing customer identifier passed
      </td>
    </tr>

    <tr>
      <td>
        8003
      </td>

      <td>
        Invalid source
      </td>

      <td>
        Unsupported source parameter passed
      </td>
    </tr>

    <tr>
      <td>
        8130
      </td>

      <td>
        Lookup,Invalid Params passed
      </td>

      <td>
        Unsupported query parameter passed
      </td>
    </tr>

    <tr>
      <td>
        1216
      </td>

      <td>
        The date format used for startDate is not supported. Enter the date in (yyyy-MM-dd) format
        The date format used for endDate is not supported. Enter the date in (yyyy-MM-dd) format
      </td>

      <td>
        Incorrect format given for `startDate` and `endDate` parameter
      </td>
    </tr>

    <tr>
      <td>
        1215
      </td>

      <td>
        startDate cannot be in past
      </td>

      <td>
        Past date given for `startDate` parameter
      </td>
    </tr>

    <tr>
      <td>
        1214
      </td>

      <td>
        startDate is after endDate
      </td>

      <td>
        Date provided in `startDate` parameter is beyond the end date
      </td>
    </tr>

    <tr>
      <td>
        1217
      </td>

      <td>
        endDate cannot be after 100 years from now
      </td>

      <td>
        Date provided for `endDate` is beyond 100 years
      </td>
    </tr>

    <tr>
      <td>
        885
      </td>

      <td>
        Invalid program id passed
      </td>

      <td>
        Unsupported program Id
      </td>
    </tr>
  </tbody>
</Table>
