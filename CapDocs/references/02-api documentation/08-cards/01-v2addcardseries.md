---
title: Add Card Series
api:
  file: Create Card Series.yaml
  operationId: postV2cardseries
hidden: false
---
Lets you create a new card series for the org. With this API, you can do the following:

* Create auto-generated physical/digital cards for a series.
* Create physical/digital card series with auto card generation disabled.

# Prerequisites

*   Authentication: Basic or OAuth authentication details
*   Access group resource - NA

# Resource information

|               |                  |
| :------------ | :--------------- |
| URI           | /v2/card/series/ |
| HTTP method   | POST             |
| Pagination    | NA               |
| Rate limit    | NA               |
| Batch support | NA               |

# Sample API cURL

```
curl --location 'https://eu.api.capillarytech.com/v2/card/series/' \
--header 'Content-Type: application/json' \
--header 'Authorization: Basic YTYyZTZm' \
--header 'Cookie: _cfuvid=Y0f3VfLqD8GzrSkhY4oAJF2sdcs4f0RvoHYzuwlgCKM-1751618877635-0.0.1.1-604800000' \
--data '{
  "code":"TestCardSeries123",
  "name":"TestCardSeries123",
  "type":"DIGITAL",
  "expiryDays":1000,
  "maxActiveCardsPerCustomer":1,
  "cardGenerationConfiguration":{
    "prefix":"M2",
    "suffix":"C0",
    "offset":1,
    "length":10,
    "method": "RANDOM_MOD7"
  },
  "cardGenerationEnabled":true,
  "isActive":true,
  "trigger":"SERIES_ID"
}'
```

<br />

# Request body parameters

<Table align={["left","left","left"]}>
  <thead>
    <tr>
      <th>
        Parameter (Parameters marked with \* are mandatory)
      </th>

      <th>
        Data Type
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        code\*
      </td>

      <td>
        String
      </td>

      <td>
        Unique identifier for the card series.
      </td>
    </tr>

    <tr>
      <td>
        name
      </td>

      <td>
        String
      </td>

      <td>
        Display name for the card series.
      </td>
    </tr>

    <tr>
      <td>
        type\*
      </td>

      <td>
        String
      </td>

      <td>
        Type of card. **Supported values**: `DIGITAL`, `PHYSICAL`.
      </td>
    </tr>

    <tr>
      <td>
        expiryDays
      </td>

      <td>
        Integer
      </td>

      <td>
        Number of days after issuance when the card expires.
      </td>
    </tr>

    <tr>
      <td>
        maxActiveCardsPerCustomer
      </td>

      <td>
        Integer
      </td>

      <td>
        Maximum number of active cards allowed per customer.
      </td>
    </tr>

    <tr>
      <td>
        cardGenerationConfiguration
      </td>

      <td>
        Object
      </td>

      <td>
        Configuration for generating card numbers.
      </td>
    </tr>

    <tr>
      <td>
        -prefix
      </td>

      <td>
        String
      </td>

      <td>
        Starting characters of the card number.
        Maximum 50 characters are allowed
        Special characters are not allowed.
      </td>
    </tr>

    <tr>
      <td>
        -suffix
      </td>

      <td>
        String
      </td>

      <td>
        Ending characters of the card number.
        Maximum 50 characters are allowed.
        Special characters are not allowed.
      </td>
    </tr>

    <tr>
      <td>
        -offset
      </td>

      <td>
        Integer
      </td>

      <td>
        Starting index or position for card number generation.
      </td>
    </tr>

    <tr>
      <td>
        -length
      </td>

      <td>
        Integer
      </td>

      <td>
        Total length of the card number including prefix and suffix.

        Minimum 5 characters are required.
        Maximum 150 characters are allowed.
      </td>
    </tr>

    <tr>
      <td>
        -method
      </td>

      <td>
        Enum
      </td>

      <td>
        Algorithm used for card number generation.  Supported values:  `DEFAULT`, `LUHNALGO`, `MOD7_ALGO`, `RANDOM`, `RANDOM_LUHN`, `RANDOM_MOD7`.\
        **Default value**: `DEFAULT`
      </td>
    </tr>

    <tr>
      <td>
        cardGenerationEnabled
      </td>

      <td>
        Boolean
      </td>

      <td>
        If true, card generation is enabled for this series.
      </td>
    </tr>

    <tr>
      <td>
        isActive
      </td>

      <td>
        Boolean
      </td>

      <td>
        If true, the card series is active.
      </td>
    </tr>

    <tr>
      <td>
        trigger
      </td>

      <td>
        Enum
      </td>

      <td>
        Specifies the event that triggers card generation. **Supported values**:  `SERIES_ID`, `OU_ID`, `REGISTRATION`.
      </td>
    </tr>
  </tbody>
</Table>

<br />

# Response parameters

| Parameter | Data Type | Description                                                           |
| --------- | --------- | --------------------------------------------------------------------- |
| entity    | Long      | Unique ID of the newly created card series.                           |
| warnings  | Array     | List of warnings, if any, generated during processing. Empty if none. |

# Sample response

```json Sample response
{
    "entity": 182,
    "warnings": []
}
```

# Error codes

| Code | Description                                                                   |
| :--- | :---------------------------------------------------------------------------- |
| 3001 | Series code empty                                                             |
| 3002 | Series already exists                                                         |
| 3003 | Series type empty                                                             |
| 3005 | Card length invalid                                                           |
| 3006 | Card configuration already exists with the same prefix, suffix and cardlength |
| 3007 | Card generation config not passed                                             |
| 3022 | Card prefix is not a standard string                                          |
| 3023 | Card suffix is not a standard string                                          |
| 3024 | Card number total length should not be more than 150                          |
| 3026 | Card count exceeds 100000                                                     |
| 3028 | Card length should not be less than                                           |