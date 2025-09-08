---
title: Add Customer
excerpt: >-
  Lets you register customers in the org’s loyalty program or just register
  their identifiers across sources such as InStore, Facebook,Webengage, WeChat,
  Martjack, TMall, Taobao, JD, ecommerce, Line, Website, and Mobile app. You can
  also add customer-level extended and custom field details.


  You can also issue loyalty card to the customer using this API.
api:
  file: v2.json
  operationId: add_customer
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
The API functions as follows -

* If you try registering an identifier that exists in a different source, a new source account is added to the existing account. Details of each source account will be maintained separately.

* In a source account, identifiers should be unique - no two customers can have the same identifier.

* You cannot update existing customer details with this API. To update customer details, use the customer update API; to update identifiers, use the Update Identifier API.

**Notes:**

* Hovering over the profile picture on the Member Care home page shows the customer's account ID.

* The last part of the URL containing numbers represents the customer ID, or ID. The system generates this internal ID when it registers the customer. For example, the URL https\://\{host}/member-care/ui/customer/177217505, 177217505 is the ID or the customer ID.

* The mandatory attributes for customer registration are determined by the configurations set in **Organization Settings** > \*\*Miscellaneous \*\*> **Registration Configuration**. Be sure to check your organization's configurations before using this API. For more details, refer to [Setup Customer](https://docs.capillarytech.com/docs/setup_customer).

* [Extended fields](https://docs.capillarytech.com/docs/data-entities#extended-fields-1) are mapped to vertical IDs, which are then mapped to organization IDs.

### Rate Limit

| Region               | Default Limit (RPM) |
| :------------------- | :------------------ |
| Asia-2 (Singapore)   | 100                 |
| Asia-1 (N. Virginia) | 600                 |
| EMEA (Ireland)       | 100                 |

# API endpoint example

`<https://eucrm.cc.capillarytech.com/v2/customers>`

# Prerequisites

*   Authentication: Basic or OAuth authentication details
*   Access group resource: Write access to customer group resource
*   Different sources (FACEBOOK, WEB\_ENGAGE, WECHAT, INSTORE, MARTJACK, TMALL, TAOBAO, JD, ECOMMERCE, WEBSITE, LINE) as supported by your organisation
*   Account IDs in which you want to register customers (for sources with multiple accounts such as WeChat, Line and Facebook)
*   [Set default customer status ](https://docs.capillarytech.com/docs/setup_customer#managing-customer-lifecycle-with-customer-status)label for your organisation

> 📘 Additional Info
>
> Extended Fields are proposed fields used to standardize input values and keys across organisations (unlike custom fields that have no control in input values). Platforms back-end team controls the field names, data-types, enum values, and scopes of extended fields. Extended Fields are created at customer level, transaction level, and transaction line-item level. Examples of customer level extended fields are age\_group, preferred\_store, gender, and nationality. Extended fields are either associated with verticals or a generic category (available for all orgs). To know the list of extended fields enabled for an org, use GET v2/extendedFields API.

# Header information

| Header                        | Description                                                                             |
| :---------------------------- | :-------------------------------------------------------------------------------------- |
| USER-CONTEXT-ENTITY-TYPE      | If required, add entity information of the user who is adding or updating this info.    |
| USER-CONTEXT-ENTITY-ID        | If required, add entity ID information of the user who is adding or updating this info. |
| USER-CONTEXT-ENTITY-SOURCE    | If required, add source information of the user who is adding or updating this info.    |
| USER-CONTEXT-ENTITY-SOURCE-ID | If required, add source ID information of the user who is adding or updating this info. |

For more information, refer to the user context section in the [Audit Details documentation](https://docs.capillarytech.com/reference/get-entity-audit-logs#adding-user-context-details).

# Resource information

|                       |           |
| :-------------------- | :-------- |
| URI                   | customers |
| HTTP method           | POST      |
| Pagination supported? | NA        |
| Rate limit            | NA        |
| Batch support         | NA        |

# Request Body Parameters

<Table align={["left","left","left"]}>
  <thead>
    <tr>
      <th>
        Parameter Name
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
        associatedWith
      </td>

      <td>
        String
      </td>

      <td>
        Till code associated with the customer.
        To use this parameter, you must enable the `USE_CRM_REGISTRATION_INFO_FROM_BASE_STORE` configuration. Create a JIRA ticket with the Capillary Product Support Team to enable the configuration.
      </td>
    </tr>

    <tr>
      <td>
        profiles
      </td>

      <td>
        Object
      </td>

      <td>
        Object that contains details about the customer information, identifiers, and communication channels.
      </td>
    </tr>

    <tr>
      <td>
        -firstName
      </td>

      <td>
        String
      </td>

      <td>
        First name of the customer. \*\*Note: \*\*The character limit for first names is 100. Characters exceeding this limit is ignored by the system.
      </td>
    </tr>

    <tr>
      <td>
        -lastName
      </td>

      <td>
        String
      </td>

      <td>
        Last name of the customer. \*\*Note: \*\*The character limit for last names is 100. Characters exceeding this limit is ignored by the system.
      </td>
    </tr>

    <tr>
      <td>
        -identifiers\*
      </td>

      <td>
        Object
      </td>

      <td>
        Object containing the identifier type and its value. Values: `mobile`, `email`, `externalId`.
      </td>
    </tr>

    <tr>
      <td>
        \-- type\*
      </td>

      <td>
        String
      </td>

      <td>
        Mode of communication with the customer. Values: `mobile, email`. **Note** Mobile: Only numeric values are supported `0-9`. Email: Supported characters: `a-z` `A-Z` `0-9` `-` `_` `+` `.` and `@` External ID: No character restrictions, but special characters are not recommended. First Name: Alphanumeric, spaces, hyphens, and apostrophes supported. Last Name: Alphanumeric, spaces, hyphens, and apostrophes supported.
      </td>
    </tr>

    <tr>
      <td>
        \-- value\*
      </td>

      <td>
        String
      </td>

      <td>
        Value of the identifier. **Note:** Enter the mobile number with the country code for mobile. The character limit for an email can go up to 255 characters. Characters exceeding this limit is ignored by the system.
      </td>
    </tr>

    <tr>
      <td>
        \-- seriesId
      </td>

      <td>
        Number
      </td>

      <td>
        Series to which the loyalty card belongs.
      </td>
    </tr>

    <tr>
      <td>
        \-- statusLabel
      </td>

      <td>
        String
      </td>

      <td>
        The status of the loyalty card. Example: ACTIVE, INACTIVE, EXPIRED
      </td>
    </tr>

    <tr>
      <td>
        -commChannels
      </td>

      <td>
        Object
      </td>

      <td>
        Object containing the details of the mode of communication with the customer.
      </td>
    </tr>

    <tr>
      <td>
        \-- type
      </td>

      <td>
        String
      </td>

      <td>
        Mode of communication with customer. The values: `mobile`, `email, cardnumber`.
      </td>
    </tr>

    <tr>
      <td>
        \-- value
      </td>

      <td>
        String
      </td>

      <td>
        Value of the type of communication.
      </td>
    </tr>

    <tr>
      <td>
        \-- primary
      </td>

      <td>
        String
      </td>

      <td>
        Indicates if the communication type is the primary contact.
      </td>
    </tr>

    <tr>
      <td>
        \-- verified
      </td>

      <td>
        String
      </td>

      <td>
        Indicates if this communication type is verified.
      </td>
    </tr>

    <tr>
      <td>
        \-- meta
      </td>

      <td>
        Object
      </td>

      <td>
        Contains meta information of the customer.
      </td>
    </tr>

    <tr>
      <td>
        \--- residence
      </td>

      <td>
        String
      </td>

      <td>
        Indicates if the communication channel is for residence.
      </td>
    </tr>

    <tr>
      <td>
        -fields
      </td>

      <td>
        Object
      </td>

      <td>
        [Custom fields](https://docs.capillarytech.com/docs/data-fields#custom-fields) related to the customer and supported by your org.
      </td>
    </tr>

    <tr>
      <td>
        \-- employee
      </td>

      <td>
        String
      </td>

      <td>
        Indicates whether the customer is an employee.
      </td>
    </tr>

    <tr>
      <td>
        \-- dateofbirth
      </td>

      <td>
        String
      </td>

      <td>
        Date of birth of the customer.
      </td>
    </tr>

    <tr>
      <td>
        -source\*
      </td>

      <td>
        String
      </td>

      <td>
        Source from where the customer was created. Values: `FACEBOOK`, `WEB_ENGAGE`, `WECHAT`, `INSTORE`, `MARTJACK`, `TMALL`, `TAOBAO`, `JD`, `ECOMMERCE`, `WEBSITE`, `LINE`, `MOBILE_APP`.
      </td>
    </tr>

    <tr>
      <td>
        -accountId
      </td>

      <td>
        String
      </td>

      <td>
        Unique account ID of the customer.
      </td>
    </tr>

    <tr>
      <td>
        extendedFields
      </td>

      <td>
        Object
      </td>

      <td>
        Object containing the [extended field](https://docs.capillarytech.com/docs/data-entities#extended-fields-1) information.
      </td>
    </tr>

    <tr>
      <td>
        \-- gender
      </td>

      <td>
        String
      </td>

      <td>
        Gender of the customer.
      </td>
    </tr>

    <tr>
      <td>
        \-- city
      </td>

      <td>
        String
      </td>

      <td>
        City where the customer resides.
      </td>
    </tr>

    <tr>
      <td>
        \-- state
      </td>

      <td>
        String
      </td>

      <td>
        State where the customer resides.
      </td>
    </tr>

    <tr>
      <td>
        \-- area
      </td>

      <td>
        String
      </td>

      <td>
        Area where the customer resides.
      </td>
    </tr>

    <tr>
      <td>
        \-- zip
      </td>

      <td>
        String
      </td>

      <td>
        ZIP code of the customer's location.
      </td>
    </tr>

    <tr>
      <td>
        loyaltyProgramEnrollments
      </td>

      <td>
        Object
      </td>

      <td>
        Object containing the details of the loyalty program into which the customer is enrolled.
      </td>
    </tr>

    <tr>
      <td>
        \-- programId
      </td>

      <td>
        Number
      </td>

      <td>
        Unique ID for the program into which the customer is enrolled.
      </td>
    </tr>

    <tr>
      <td>
        \-- tierNumber
      </td>

      <td>
        Number
      </td>

      <td>
        Tier in the loyalty program to which the customer belongs. For example, `1` for the lowest tier, `2` for the subsequent tier, and so on.
      </td>
    </tr>

    <tr>
      <td>
        \-- loyaltyPoints
      </td>

      <td>
        Number
      </td>

      <td>
        Loyalty points to be added to the customer's account.
      </td>
    </tr>

    <tr>
      <td>
        \-- tierExpiryDate
      </td>

      <td>
        String
      </td>

      <td>
        Expiry date of the customer's tier in the loyalty program. Supported format:`YYYY-MM-DDTHH:MM:SS+/-(time-zone)`.
      </td>
    </tr>

    <tr>
      <td>
        \-- pointsExpiryDate
      </td>

      <td>
        String
      </td>

      <td>
        Expiry date of the customer's loyalty points. Supported format`:YYYY-MM-DDTHH:MM:SS+/-(time-zone)`.
      </td>
    </tr>

    <tr>
      <td>
        referralCode
      </td>

      <td>
        String
      </td>

      <td>
        Unique code generated for the referrer for a specific campaign.
      </td>
    </tr>

    <tr>
      <td>
        statusLabel
      </td>

      <td>
        String
      </td>

      <td>
        Specifies a custom name [ftom.sawyer@capillarytech.comor](mailto:ftom.sawyer@capillarytech.comor) the customer status. A customer status defines the relationship between a brand and a customer, with options such as `Active`, `Suspended`, `Deleted`, `Fraud suspected`, `Fraud confirmed`, `Internal`, and `Pending deletion`. You can assign a custom name to any customer status. For more details, [Custom label and customer status](https://docs.capillarytech.com/docs/setup_customer#managing-customer-lifecycle-with-customer-status).
      </td>
    </tr>
  </tbody>
</Table>

```json Sample request - Source: INSTORE
{
    "profiles": [
        {
            "firstName": "Customer_add_1",
            "lastName": "Test123",
            "identifiers": [
                {
                    "type": "mobile",
                    "value": "919988221100"
                },
                {
                    "type": "email",
                    "value": "tom.sawyer@capillarytech.com"
                }
            ],
            "commChannels": [
                {
                    "type": "mobile",
                    "value": "919988221100",
                    "primary": "true",
                    "verified": "true",
                    "meta": {
                        "residence": "true"
                    }
                },
                {
                    "type": "email",
                    "value": "tom.sawyer@capillarytech.com",
                    "primary": "true",
                    "verified": "true",
                    "meta": {
                        "residence": "true"
                    }
                }
            ],
            "fields": {},
            "source": "INSTORE"
        }
    ],
    "extendedFields": {},
    "loyaltyProgramEnrollments": [
        {
            "programId": 469,
            "tierNumber": 1,
            "loyaltyPoints": 0,
            "tierExpiryDate": "2024-05-11T16:36:17+05:30",
            "pointsExpiryDate": "2024-05-11T16:36:17+05:30"
        }
    ],
    "referralCode": ""
}
```
```json Sample request - Source: MOBILE_APP
{
  "loyaltyInfo": {
    "loyaltyType": "loyalty"
  },
  "associatedWith": "bukl.till",
  "profiles": [
    {
      "firstName": "Mark12",
      "lastName": "Twain",
      "identifiers": [
        {
          "type": "mobile",
          "value": "919988221100"
        },
        {
          "type": "cuid",
          "value": "cuid_919804542631"
        },
        {
          "type": "unionId",
          "value": "unionId_919804542631"
        }
      ],
      "commChannels": [
        {
          "type": "mobilePush",
          "meta": {
            "lastViewedDate": "2019-10-10T22:04:38+05:30",
            "residence": false,
            "office": false
          },
          "verified": "true",
          "primary": "true",
          "value": "abc123456"
        },
        {
          "type": "mobile",
          "value": "919988221100",
          "primary": true,
          "verified": true,
          "meta": {
            "lastViewedDate": "",
            "residence": true,
            "office": false
          }
        }
      ],
      "source": "MOBILE_APP",
      "accountId":"testmobilepush1",
      "fields": {
        "employee": "true",
        "dateofbirth": "22-10-2000"
      }
    }
  ],
  "extendedFields": {
    "gender": "Male",
    "city": "Bangalore"
  },
  "loyaltyProgramEnrollments": [
    {
      "programId": 469,
      "tierNumber": 1,
      "loyaltyPoints": 75,
      "tierExpiryDate": "2025-02-11T16:36:17+05:30",
      "pointsExpiryDate": "2025-02-11T16:36:17+05:30"
    }
  ]
}
```
```json Sample request - Source: LINE
{
    "profiles": [
        {
            "firstName": "Mark",
            "lastName": "Twain",
            "identifiers": [
                {
                    "type": "email",
                    "value": "tom.sawyer@capillarytech.com"
                },
                {
                    "type": "line",
                    "value": "Ud7b7ec422d4914011f9c14b51ff48519"
                }
            ],
            "commChannels": [
                {
                    "type": "line",
                    "value": "Ud7b7ec422dd34914011f9c14b51ff48519",
                    "primary": "true",
                    "verified": "true",
                    "meta": {
                        "residence": "true"
                    }
                }
            ],
            "fields": {
                "gender": "",
                "city": ""
            },
            "source": "LINE",
            "accountId": "2001914141242"
        }
    ],
    "extendedFields": {},
    "referralCode": ""
}
```
```json With card information
{
    "profiles": [
        {
            "firstName": "Tom",
            "lastName": "Sawyer",
            "identifiers": [
                {
                    "type": "email",
                    "value": "tom.sawyer@capillarytech.com"
                },
                {
                    "type": "mobile",
                    "value": "4567890"
                },
                {
                    "type": "cardnumber",
                    "value": "12345678",
                    "seriesId": 73,
                    "statusLabel": "ACTIVE",
                    "extendedFields": {
                        "custom_card_name": "Mystays"
                    }
                }
            ],
            "fields": {
                "kanjifirstname": "Tom",
                "kanjilastname": "Sawyer",
                "email2": "tom.sawyer@capillarytech.com",
                "mobile2": "919988221100",
                "fax": "12345678",
                "customer_address": "abc123"
            },
            "source": "INSTORE",
            "commChannels": [
                {
                    "type": "email",
                    "value": "tom.sawyer@capillarytech.com",
                    "primary": true,
                    "verified": true,
                    "subscribed": true,
                    "meta": {}
                }
            ]
        }
    ],
    "extendedFields": {
        "zip": "123456",
        "area": "Test1",
        "city": "Test2",
        "state": "Test3",
        "country_of_residence": "Japan",
        "gender": "Male",
        "dob": "1988/05/10",
        "acquisition_channel": "Microsite",
        "preferred_language": "Japanese"
    }
}
```
```json With external ID only
{
    "profiles": [
        {
            "identifiers": [
                {
                    "type": "externalId",
                    "value": "879577211225"
                }
            ],
            "source": "INSTORE"
        }
    ]
}
```
```json With customer status
{
    "profiles": [
        {
            "firstName": "Customer_add_23",
            "lastName": "Test123",
             "identifiers": [
                {
                    "type": "mobile",
                    "value": "919988221100"
                },
                {
                    "type": "email",
                    "value": "tom.sawyer@capillarytech.com"
                },
                {
                    "type": "cardnumber",
                    "value": "12345678",
                    "seriesId": 73,
                    "statusLabel": "ACTIVE",
                    "extendedFields": {
                        "custom_card_name": "Mystays"
                    }
                }
            ],
            "commChannels": [
                {
                    "type": "mobile",
                    "value": "8795772141",
                    "primary": "true",
                    "verified": "true",
                    "meta": {
                        "residence": "true"
                    }
                },
                {
                    "type": "email",
                    "value": "tom.sawyer@capillarytech.com",
                    "primary": "true",
                    "verified": "true",
                    "meta": {
                        "residence": "true"
                    }
                }
            ],
            "fields": {
                
                "employee": "true",
        "dateofbirth": "22-10-2000"
            },
            "source": "INSTORE"
        }
    ],
    "extendedFields": {
        "acquisition_channel": "Facebook"
        
    },     
    
    "referralCode": "",
    "statusLabel":"active-1"
}
```

# Response parameters

| Parameter         | Data Type  | Description                                                                                                                                                                                                                    |
| :---------------- | :--------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| createdId         | Long       | Internally generated customer ID after successful creation of the customer.                                                                                                                                                    |
| warnings          | Object     | An object containing warning details, if any.                                                                                                                                                                                  |
| -status           | Boolean    | Indicates if the warning status is true or false.                                                                                                                                                                              |
| -code             | Number     | The code associated with the warning.                                                                                                                                                                                          |
| -message          | String     | The message describing the warning.                                                                                                                                                                                            |
| sideEffects       | Object     | Object containing side effects (additional information) for the customer creation, if any.                                                                                                                                     |
| -entityType       | Enum       | Entity which receives points. Possible values: `USER`, `USERGROUP2`, `GROUP2`                                                                                                                                                  |
| -rawAwardedPoints | BigDecimal | Total number of points awarded without any rounding applied.                                                                                                                                                                   |
| -customerId       | Integer    | Unique ID of the customer who is awarded points                                                                                                                                                                                |
| -awardedPoints    | BigDecimal | Total number of points awarded with rounding applied.                                                                                                                                                                          |
| -type             | Enum       | Type of award rewarded to the customer.                                                                                                                                                                                        |
| -isReferrer       | Boolean    | Indicates if the customer is a referrer. `true`: Customer is the referrer. `false`: Customer is not the referrer. This field is visible when a referrer (customer who is referring another customer) is awarded an incentives. |

```json Sample response with source = INSTORE
{
    "createdId": 556844761,
    "warnings": [
        {
            "status": false,
            "code": 8107,
            "message": "Default customer status label not set"
        }
    ],
    "sideEffects": []
}
```
```json Sample response with source = MOBILE_APP
{
    "createdId": 555594290,
    "warnings": [
        {
            "status": false,
            "message": "Default customer status label not set",
            "code": 8107
        }
    ],
    "sideEffects": [
        {
            "entityType": "USER",
            "rawAwardedPoints": 75.000,
            "awardedPoints": 75,
            "type": "points"
        }
    ]
}
```
```json Sample response with source = LINE
{
    "createdId": 578697565,
    "warnings": [],
    "sideEffects": []
}
```
```json Sample response with Alternate Currencies
{
    "createdId": 423799201,
    "warnings": [],
    "sideEffects": [
        {
            "entityType": "USER",
            "rawAwardedValue": 110.000,
            "alternateCurrencyIdentifier": "rgpws7",
            "alternateCurrencyName": "ac1",
            "awardedValue": 110,
            "type": "alternate_currency"
        }
    ]
}
```
```json Sample response with External ID only
{
    "createdId": 84230125,
    "warnings": [],
    "sideEffects": [
        {
            "entityType": "USER",
            "rawAwardedPoints": 100.000,
            "awardedPoints": 100,
            "type": "points"
        }
    ]
}
```
```json With customer status
{
    "createdId": 557669379,
    "warnings": [
        {
            "message": "supplementary program expiry is before membership expiry",
            "code": 1302,
            "status": false
        }
    ],
    "sideEffects": [
        {
            "entityType": "USER",
            "rawAwardedPoints": 200,
            "awardedPoints": 200,
            "type": "points"
        },
        {
            "id": 1239575031,
            "entityType": "USER",
            "couponType": "PE",
            "couponCode": "JQI7S8P8",
            "validTill": "2025-07-29T23:59:59Z",
            "description": "Welcome Offer - 10% flat discount",
            "discountCode": "NO_VALUE",
            "trimmedCouponCode": "JQI7S8P8",
            "type": "coupon"
        },
        {
            "id": 1239575032,
            "entityType": "USER",
            "couponType": "PE",
            "couponCode": "2742942949",
            "validTill": "2024-09-27T23:59:59Z",
            "description": "DSG - $5 Coupon",
            "discountCode": "NO_VALUE",
            "trimmedCouponCode": "2742942949",
            "type": "coupon"
        }
    ]
}
```
```json Sample Response with Side Effects
{
    "createdId": 424133028,
    "warnings": [],
    "sideEffects": [
        {
            "entityType": "USER",
            "rawAwardedPoints": 100.000,
            "customerId": 424133028,
            "awardedPoints": 100,
            "type": "points"
        },
        {
            "entityType": "USER",
            "rawAwardedPoints": 100.000,
            "customerId": 424133021,
            "awardedPoints": 100,
            "type": "points",
            "isReferrer": true
        }
    ]
}
```

# API-specific error codes

| Error code | Description                             | Reason                                        |
| :--------- | :-------------------------------------- | :-------------------------------------------- |
| 3217       | Source is invalid.                      | The source provided is invalid or unsupported |
| 8006       | Customer already exists for same source | Customer already exists for same source       |
| 8014       | Error in customer registration          | The provided mobile number is invalid         |