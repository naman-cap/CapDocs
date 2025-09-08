---
title: Search events
excerpt: ''
api:
  file: v2.json
  operationId: search-events
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
This API provides advanced search functionality for behavioural events, allowing you to filter, sort, and paginate through events.

> ❗️ Attention
>
> The API retrieves event details from January 2024 onwards and does not fetch details of events that occurred before this date.

# Features

1. **Filters:**
   * Filter events based on various criteria:
   * Date range
   * Event name.
   * Events of a customer or groups. You can combine this with other search criteria. For example, events of a customer in a particular date range.
   * Events performed by a particular member in a user group event
   * Event ID. The event ID is an internally generated ID during the creation of the event.
   * Behavioural event attributes.
   * Duplicate events.

2. **Sorting:** Sort events based on event date-time in ascending or descending order.

3. **Pagination:** Limit the number of page results and setting offset (number of pages to skip from the beginning)

4. This API provides more flexibility and search options than the [GET Customer event API](https://docs.capillarytech.com/reference/get-customer-events).

# Use cases

* You can use different combinations to search for events. For example, suppose you want to find an event named "Offerscan" performed by a particular user. In that case, you can filter the event search using the eventName parameter and by providing the identifier type and value of the customer.

* Similarly, to retrieve details of a particular event between certain dates, you can define`fromDate`, `tillDate`, `eventName` and filter the events.\
  `https://eu.api.capillarytech.com/v2/events/search?fromDate=2024-03-19T15:31:28&tillDate=2024-04-19T16:31:28`

* Searching for an event using behavioural event attribute - For example, as a hotel chain brand, if you want to search for reservation events of a particular hotel, you can search by defining the attribute name and value. If the behavioural event attribute name is `hotel_name` and the hotel name is `PalaceABC`, you can search using the attribute name `hotel_name` and the value `PalaceABC`.\
  `https://eu.api.capillarytech.com/v2/events/search?fromDate=2024-03-19T15:31:28&tillDate=2024-04-19T16:31:28&hotel_name=PalaceABC`

* Searching for duplicate events of a user

  `https://eu.api.capillarytech.com/v2/events/search?userIdentifierType=userId&userIdentifierValue=555734097&isDuplicate=true`

* Searching for an event with details of outcomes triggered by the occurrence of a specific event

  `https://eu.api.capillarytech.com/v2/events/search?userIdentifierType=mobile&userIdentifierValue=918105886351&includeSideEffects=true`

* Searching for an event performed by a member in a group event\
  `https://eu.api.capillarytech.com/v2/events/search?userIdentifierType=userId&userIdentifierValue=176875087&userGroupIdentifierType=groupExternalId&userGroupIdentifierValue=bukl123`

<br />

> 👍 Note
>
> For detailed information about our APIs and for hands-on testing, refer documentation in [API overview](https://docs.capillarytech.com/reference/apioverview) and step-by-step guide on making your first API call in [Make your first API call](https://docs.capillarytech.com/reference/make-your-first-api-call) .

# Prerequisites

*   Authentication; Basic or OAuth authentication details
*   Access group resource - Read access to Customer access group resource

# Resource information

|                       |                                                                                                |
| :-------------------- | :--------------------------------------------------------------------------------------------- |
| URI                   | v2/events/search                                                                               |
| HTTP method           | GET                                                                                            |
| Pagination supported? | Yes                                                                                            |
| Rate limit            | [Refer to the Rate limits documentation](https://docs.capillarytech.com/reference/rate-limits) |
| Batch support         | NA                                                                                             |

# Request query parameters

<Table align={["left","left","left"]}>
  <thead>
    <tr>
      <th>
        Parameter
      </th>

      <th>
        Type
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        eventId
      </td>

      <td>
        string
      </td>

      <td>
        Primary ID of the event. This ID is internally generated during the creation of the event. Refer to [Create Event](https://docs.capillarytech.com/reference/create-event-custom) to know about event creation.
      </td>
    </tr>

    <tr>
      <td>
        eventName
      </td>

      <td>
        string
      </td>

      <td>
        Name of the event.
      </td>
    </tr>

    <tr>
      <td>
        userIdentifierType
      </td>

      <td>
        Enum
      </td>

      <td>
        Type of user identifier: Supported values: mobile, email, and userId.
      </td>
    </tr>

    <tr>
      <td>
        userIdentifierValue
      </td>

      <td>
        string
      </td>

      <td>
        Value of the user identifier.
      </td>
    </tr>

    <tr>
      <td>
        userIdentifierSource
      </td>

      <td>
        string
      </td>

      <td>
        Source to search user profile. The default value is INSTORE.
      </td>
    </tr>

    <tr>
      <td>
        userIdentifierAccountId
      </td>

      <td>
        string
      </td>

      <td>
        Account ID of the user profile source. Not required for INSTORE profiles.
      </td>
    </tr>

    <tr>
      <td>
        userGroupIdentifierType
      </td>

      <td>
        Enum
      </td>

      <td>
        Type of user group identifier. Supported values: groupId, groupExternalId, mobile, email, and userId.
      </td>
    </tr>

    <tr>
      <td>
        userGroupIdentifierValue
      </td>

      <td>
        string
      </td>

      <td>
        Value of the user group identifier.
      </td>
    </tr>

    <tr>
      <td>
        userGroupIdentifierSource
      </td>

      <td>
        string
      </td>

      <td>
        Source to search user profile. The default value is INSTORE. Required if searching by mobile or email.
      </td>
    </tr>

    <tr>
      <td>
        userGroupIdentifierAccountId
      </td>

      <td>
        string
      </td>

      <td>
        Account ID of the user profile source. Not required for INSTORE profiles. Required for mobile or email search.
      </td>
    </tr>

    <tr>
      <td>
        fromDate
      </td>

      <td>
        string
      </td>

      <td>
        Start date in ISO format (e.g., 2024-03-19T15:31:28).
      </td>
    </tr>

    <tr>
      <td>
        tillDate
      </td>

      <td>
        string
      </td>

      <td>
        End date in ISO Format (e.g., 2024-03-19T16:31:28).
      </td>
    </tr>

    <tr>
      <td>
        limit
      </td>

      <td>
        integer
      </td>

      <td>
        Number of records to fetch. The default value is 10.
      </td>
    </tr>

    <tr>
      <td>
        offset
      </td>

      <td>
        integer
      </td>

      <td>
        Number of records to skip from the beginning. The default value is 0.
      </td>
    </tr>

    <tr>
      <td>
        sortOrder
      </td>

      <td>
        string
      </td>

      <td>
        Sorts by event date-time in ascending or descending order. The default value is desc.
      </td>
    </tr>

    <tr>
      <td>
        includeSideEffects
      </td>

      <td>
        boolean
      </td>

      <td>
        Indicates whether to include loyalty side effects. The Default value is false. This parameter provides details of the outcomes triggered by the occurrence of a specific event.
      </td>
    </tr>

    <tr>
      <td>
        isDuplicate
      </td>

      <td>
        boolean
      </td>

      <td>
        Indicates whether to include [duplicate events](https://docs.capillarytech.com/docs/creat-behavioral-events#enabling-uniqueness-check). The `isDuplicate` field indicates whether an event is considered a duplicate or an original event. If true, it indicates that the event is a duplicate, meaning it's a repetition or a copy of a previously recorded event. Acceptable values - true or false.
      </td>
    </tr>

    <tr>
      <td>
        allowExactMatch
      </td>

      <td>
        boolean
      </td>

      <td>
        Controls how the [event attributes](https://docs.capillarytech.com/docs/setup-test-behavioral-events#/custom-attributes) filters are matched in the search. Use this parameter to choose between exact matching and partial matching for your search. By default, the value is set to false.

        Set `allowExactMatch=true` to return only events where the attribute value matches the full string exactly as entered. This is helpful when filtering values that include special characters like underscores (`_`) or hyphens (`-`).
        **Example**: `/v2/events/search?address=colaba-mumbai&allowExactMatch=true`
        Returns only events where the `address` exactly matches `"colaba-mumbai"`.

        Set `allowExactMatch=false` (or omit the parameter) to perform a partial match. The API splits the input into parts and matches each part independently. This allows for more flexible, forgiving searches. **Example**: `/v2/events/search?address=colaba`\\
        Returns events where similar parts appear in the address, such as:
        `"colaba east"`, `colaba market"`, or `"colaba-mumbai"`.

        **Note**: This parameter applies **only to event attribute filters**.
      </td>
    </tr>

    <tr>
      <td>
        attribute
      </td>

      <td>
        Based on the attribute
      </td>

      <td>
        Parameter used to search behavioural events by attribute name and its corresponding value.

        **Scenario 1:**\
        The event includes a [standard attribute](https://docs.capillarytech.com/docs/setup-test-behavioral-events#/standard-attributes) named `eventDateTime` with the value `1746694617000`, you can retrieve it by searching on that field:
        **Example**: v2/events/search?eventDateTime=1746694617000

        **Scenario 2:**\
        If an event includes a [custom attribute](https://docs.capillarytech.com/docs/setup-test-behavioral-events#/custom-attributes) named `hotel_name` with the value `Hilton-Kensington`, you can use the same approach to search by that attribute:
        **Example**: v2/events/search?hotel\_name=Hilton-Kensington
      </td>
    </tr>
  </tbody>
</Table>

# Response parameters

| Parameter             | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| :-------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| orgId                 | The organization ID associated with the event.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| userId                | The user identifier of the customer.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| date                  | The date and time when the event was processed in epoch time format.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| eventName             | The name of the event.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| eventId               | The unique identifier for the event. This is internally generated during creation of the event.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| source                | Customer registration source profile (e.g., INSTORE).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| tillCode              | The code associated with the till where the event occurred.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| displayName           | The display name of the event.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| additionalAttributes  | Additional attributes related to the event, such as review content, account ID, and event metadata. <br />- The `isDuplicate` field indicates whether an event is considered a duplicate or an original event. If true, it indicates that the event is a duplicate, meaning it's a repetition or a copy of a previously recorded event.<br />- The `eventDateTime` is a [standard attribute](https://docs.capillarytech.com/docs/creat-behavioral-events#standard-attributes) in the behavioural event system. This field captures the date and time when the event is processed. If you define a value for this parameter while sending the event, it displays that specific date and time in epoch format. Otherwise, it displays the event processing time, sharing the same value as the `date` parameter above. |
| clickEventSideEffects | Additional actions or consequences triggered by events, such as awarding points or other actions.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| requestId             | The unique identifier for the request associated with the event.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| psiAttributes         | Includes attributes that are marked as potentially sensitive data. Refer to the PSI data documentation for more [information on classifying PSI data](https://docs.capillarytech.com/docs/classify-potentially-sensitive-information-psi)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| sideEffects           | An array containing details of any side effects triggered by the event.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |

# API Specific Error Code

| **Error Code** | **Description**                                         | **When It Occurs**                                                                                                                                       |
| :------------- | :------------------------------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1850           | Invalid search request parameters `userIdentifierValue` | When an invalid or malformed value is passed in the `userIdentifierValue` parameter of the search request (e.g., "77448764sd" instead of a valid value). |