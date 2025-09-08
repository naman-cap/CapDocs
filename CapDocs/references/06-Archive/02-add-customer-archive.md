---
title: Add Customer
excerpt: >-
  Registers customers in the org’s loyalty program with the primary identifier
  (mobile number/email id/external id).
api:
  file: customer-v11.json
  operationId: post_new-endpoint
deprecated: false
hidden: true
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
> ❗️ Make sure you have the appropriate access control configured. For more information, see [access group documentation](https://docs.capillarytech.com/docs/access-group).

# API Behaviour

* If `CONFIG_SKIP_SECONDARY_ID_ON_PRIMARY_MISMATCH` is enabled, if the primary identifier is different but any of the secondary identifiers exist, a new customer is registered with the primary identifier ignoring the secondary identifier. The config is available on the Registration Page of InTouch **Profile** > **Organization Settings** > **Miscellaneous**.
  * Also, this config overrides `CONF_PRIMARY_IDENTIFIER_STRICT_CHECK`.
* Adds **custom field** details.
* Adds **extended field** values.

# API endpoint

`https://eucrm.cc.capillarytech.com/v1.1/customer/add`

# Header information

You can define certain attributes in the API header section and define the user context details. For more information, refer to the user context section in the [Audit Details documentation](https://docs.capillarytech.com/reference/get-entity-audit-logs#adding-user-context-details).

# Body Parameters

The mandatory attributes for customer registration depend on the configurations set on InTouch **Settings** > **Registration Configuration**. You need to know your org configurations before using this API.

<Table align={[null,"left",null]}>
  <thead>
    <tr>
      <th>
        Parameter
      </th>

      <th>
        Datatype
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        mobile\*\*
      </td>

      <td>
        String
      </td>

      <td>
        The mobile number of the customer. **Note:** For mobile numbers, add the mobile number with the country code.  Only numeric characters are supported (0-9)
      </td>
    </tr>

    <tr>
      <td>
        email\*\*
      </td>

      <td>
        String
      </td>

      <td>
        The email address of the customer. **Note** Supported characters: `a-z` ` A-Z`  `0-9`  `-`  `_` `+` `.` and `@`
      </td>
    </tr>

    <tr>
      <td>
        external\_id\*\*
      </td>

      <td>
        String
      </td>

      <td>
        An external identifier for the customer.
        **Note** There are no character restrictions but special characters are not recommended. Maximum length is 250 characters.
      </td>
    </tr>

    <tr>
      <td>
        firstname
      </td>

      <td>
        String
      </td>

      <td>
        The first name of the customer.
        **Note** Alphanumeric, spaces, hyphens, apostrophes supported. Maximum length is 100 characters.
      </td>
    </tr>

    <tr>
      <td>
        lastname
      </td>

      <td>
        String
      </td>

      <td>
        The last name of the customer.
        **Note** Alphanumeric, spaces, hyphens, apostrophes supported. Maximum length is 100 characters.
      </td>
    </tr>

    <tr>
      <td>
        updated\_on
      </td>

      <td>
        Datetime
      </td>

      <td>
        The date and time the customer was last updated.
        **Format**: YYYY-MM-DD HH:MM:SS
        **Example**: 2025-02-26 09:10:00
      </td>
    </tr>

    <tr>
      <td>
        referral\_code
      </td>

      <td>
        String
      </td>

      <td>
        Unique code generated from a referral campaign.
      </td>
    </tr>

    <tr>
      <td>
        registered\_till
      </td>

      <td>
        String
      </td>

      <td>
        The till name with whom the customer is going to be registered. Maximum length is 50 characters.
      </td>
    </tr>

    <tr>
      <td>
        associated\_with
      </td>

      <td>
        String
      </td>

      <td>
        The till name with whom the customer is going to be associated with. Maximum length is 50 characters.
      </td>
    </tr>

    <tr>
      <td>
        type
      </td>

      <td>
        Enum
      </td>

      <td>
        The type of customer.
        Values allowed: loyalty, non\_loyalty
      </td>
    </tr>

    <tr>
      <td>
        fraud\_status
      </td>

      <td>
        Enum
      </td>

      <td>
        The fraud status of the customer.
        Values allowed: NORMAL, OUTLIER, FRAUD, INTERNAL, INVALID
      </td>
    </tr>

    <tr>
      <td>
        City\_name (custom field)
      </td>

      <td>
        String
      </td>

      <td>
        The city where the customer resides. Maximum length is 100 characters.
      </td>
    </tr>

    <tr>
      <td>
        address (custom field)
      </td>

      <td>
        String
      </td>

      <td>
        The address of the customer. Maximum length is 250 characters.
      </td>
    </tr>

    <tr>
      <td>
        bde\_mobile\_number (custom field)
      </td>

      <td>
        String
      </td>

      <td>
        The mobile number of the BDE associated with the customer. Maximum length is 255 characters.
      </td>
    </tr>

    <tr>
      <td>
        bde\_name (custom field)
      </td>

      <td>
        String
      </td>

      <td>
        The name of the BDE associated with the customer. Maximum length is 100 characters.
      </td>
    </tr>

    <tr>
      <td>
        firm\_name (custom field)
      </td>

      <td>
        String
      </td>

      <td>
        The name of the firm associated with the customer. Maximum length is 100 characters.
      </td>
    </tr>

    <tr>
      <td>
        club (custom field)
      </td>

      <td>
        String
      </td>

      <td>
        The club associated with the customer. Maximum length is 100 characters.
      </td>
    </tr>

    <tr>
      <td>
        pincode (custom field)
      </td>

      <td>
        String
      </td>

      <td>
        The pin code of the customer's address. Maximum length is 20 characters.
      </td>
    </tr>

    <tr>
      <td>
        pwgConsumption (custom field)
      </td>

      <td>
        Double
      </td>

      <td>
        The PWG consumption status of the customer.
      </td>
    </tr>

    <tr>
      <td>
        state (custom field)
      </td>

      <td>
        String
      </td>

      <td>
        The state where the customer resides. Maximum length is 100 characters.
      </td>
    </tr>

    <tr>
      <td>
        profile\_image\_name (custom field)
      </td>

      <td>
        String
      </td>

      <td>
        The name of the customer's profile image file. Maximum length is 255 characters.
      </td>
    </tr>
  </tbody>
</Table>

```json Sample Request: With Mobile and Email
{
    "root": {
        "customer": [
            {
                "mobile": 917755876888,
                "email": "testNee113@gmail.com",
                "external_id": "12on",
                "firstname": "Neeraj",
                "lastname": "loyal",
                "updated_on": "2025-05-29 09:10:00",
                "registered_till": "rutuja_capillary",
                "associated_with": "rutuja_capillary",
                "type": "NON_LOYALTY",
                "source": "WEB_ENGAGE",
                "accountId": "123456",
                "fraud_status": {
                    "status": "Fraus_Suspected"
                },
                "commChannels": [
                {
                    "type": "mobile",
                    "value": "917755876888",
                    "primary": "true",
                    "verified": "true",
                    "meta": {
                        "residence": "true"
                    }
                }
                ],
                "custom_fields": {
                    "field": [
                        {
                            "name": "City_name",
                            "value": "Bangalore"
                        },
                        {
                            "name": "address",
                            "value": "BTM"
                        }
                    ]
                },
                "extended_fields": {
                    "field": [
                        {
                                "name": "age",
                                "value": "25"
                        }
                    ]
                }
            }
        ]
    }
}
```
```json Sample Request: With External ID
{
    "root": {
        "customer": [
            {
                "external_id": "123445901"
                "registered_on": "2024-07-29 11:11:11",
                "registered_till": "till_name",
                "associated_with": "till_name"
            }
        ]
    }
}
```

> 📘 \*\*
>
> To add a customer, you must provide at least one of the parameters marked with \*\*

# Response Parameters

<br />

| Parameter                               | Description                                                                                                                                                                                                                    |
| :-------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **status.success**                      | Indicates the success of the operation                                                                                                                                                                                         |
| **status.code**                         | The code representing the status of the operation                                                                                                                                                                              |
| **status.message**                      | The message describing the status of the operation                                                                                                                                                                             |
| **status.total**                        | The total count in the response                                                                                                                                                                                                |
| **status.success\_count**               | The count of successful operations                                                                                                                                                                                             |
| **customer.user\_id**                   | The unique identifier for the customer                                                                                                                                                                                         |
| **customer.firstname**                  | The first name of the customer                                                                                                                                                                                                 |
| **customer.lastname**                   | The last name of the customer                                                                                                                                                                                                  |
| **customer.mobile**                     | The mobile number of the customer                                                                                                                                                                                              |
| **customer.email**                      | The email address of the customer                                                                                                                                                                                              |
| **customer.external\_id**               | An external identifier for the customer                                                                                                                                                                                        |
| **customer.lifetime\_points**           | The total lifetime points accumulated by the customer                                                                                                                                                                          |
| **customer.loyalty\_points**            | The current loyalty points of the customer                                                                                                                                                                                     |
| **customer.current\_slab**              | The current slab of the customer in the loyalty program                                                                                                                                                                        |
| **customer.tier\_expiry\_date**         | The expiry date of the customer's current tier                                                                                                                                                                                 |
| **points\_summary.programId**           | The ID of the program associated with the points summary                                                                                                                                                                       |
| **points\_summary.redeemed**            | The number of points redeemed                                                                                                                                                                                                  |
| **points\_summary.expired**             | The number of points expired                                                                                                                                                                                                   |
| **points\_summary.returned**            | The number of points returned                                                                                                                                                                                                  |
| **points\_summary.adjusted**            | The number of points adjusted                                                                                                                                                                                                  |
| **points\_summary.lifetimePoints**      | The lifetime points in the summary                                                                                                                                                                                             |
| **points\_summary.loyaltyPoints**       | The loyalty points in the summary                                                                                                                                                                                              |
| **points\_summary.cumulativePurchases** | The cumulative purchases in the summary                                                                                                                                                                                        |
| **points\_summary.currentSlab**         | The current slab in the points summary                                                                                                                                                                                         |
| **points\_summary.slabSNo**             | The serial number of the slab                                                                                                                                                                                                  |
| **points\_summary.slabExpiryDate**      | The expiry date of the slab                                                                                                                                                                                                    |
| **customer.lifetime\_purchases**        | The total lifetime purchases made by the customer                                                                                                                                                                              |
| **customer.registered\_on**             | The date and time when the customer registered                                                                                                                                                                                 |
| **customer.updated\_on**                | The date and time when the customer's information was last updated                                                                                                                                                             |
| **customer.type**                       | The type of customer                                                                                                                                                                                                           |
| **customer.source**                     | The source through which the customer was acquired                                                                                                                                                                             |
| **customer.fraud\_status**              | The fraud status of the customer                                                                                                                                                                                               |
| **customer.reason**                     | The reason field (not populated in this response)                                                                                                                                                                              |
| **sideEffects**                         | Object containing side effects (additional information) for the customer creation, if any.                                                                                                                                     |
| **sideEffects.entityType**              | Entity which receives points. Possible values: `USER`, `USERGROUP2`, `GROUP2`                                                                                                                                                  |
| **sideEffects.rawAwardedPoints**        | Total number of points awarded without any rounding applied.                                                                                                                                                                   |
| **sideEffects.customerId**              | Unique ID of the customer who is awarded points                                                                                                                                                                                |
| **sideEffects.awardedPoints**           | Total number of points awarded with rounding applied.                                                                                                                                                                          |
| **sideEffects.type**                    | Type of award rewarded to the customer.                                                                                                                                                                                        |
| **sideEffects.isReferrer**              | Indicates if the customer is a referrer. `true`: Customer is the referrer. `false`: Customer is not the referrer. This field is visible when a referrer (customer who is referring another customer) is awarded an incentives. |
| **item\_status.success**                | Indicates the success of the customer item operation                                                                                                                                                                           |
| **item\_status.code**                   | The code representing the status of the customer item operation                                                                                                                                                                |
| **item\_status.message**                | The message describing the status of the customer item operation                                                                                                                                                               |
| **item\_status.warnings.warning**       | Warning codes associated with the operation                                                                                                                                                                                    |

```json Sample Response: With Mobile and Email
{
    "response": {
        "status": {
            "success": "true",
            "code": 200,
            "message": "Success",
            "total": "1",
            "success_count": "1"
        },
        "customers": {
            "customer": [
                {
                    "user_id": 557408687,
                    "firstname": "testuwser",
                    "lastname": "promo54",
                    "mobile": "919876532218",
                    "email": "demopromo412@gmail.com",
                    "external_id": "000003880203",
                    "lifetime_points": 0,
                    "loyalty_points": 0,
                    "current_slab": "Base",
                    "tier_expiry_date": "2124-08-01 23:59:59",
                    "points_summaries": {
                        "points_summary": [
                            {
                                "programId": "469",
                                "redeemed": "0",
                                "expired": "0",
                                "returned": "0",
                                "adjusted": "0",
                                "lifetimePoints": "0",
                                "loyaltyPoints": "0",
                                "cumulativePurchases": "0",
                                "currentSlab": "Base",
                                "nextSlab": "Bronze",
                                "nextSlabSerialNumber": "2",
                                "nextSlabDescription": "Tier 2",
                                "slabSNo": "1",
                                "slabExpiryDate": "2124-08-01 23:59:59",
                                "totalPoints": ""
                            }
                        ]
                    },
                    "lifetime_purchases": 0,
                    "registered_on": "2024-08-01 07:28:32",
                    "updated_on": "2023-07-11 10:12:00",
                    "type": "LOYALTY",
                    "source": "instore",
                    "fraud_status": "NONE",
                    "reason": "",
                    "custom_fields": {
                        "field": [
                            {
                                "name": "address",
                                "value": "Bangalore1234"
                            },
                            {
                                "name": "pincode",
                                "value": "54321"
                            }
                        ]
                    },
                    "extended_fields": {
                        "field": []
                    },
                    "subscriptions": {
                        "subscription": []
                    },
                    "side_effects": {
                        "effect": [
                            {
                                "awarded_points": 100,
                                "total_points": 100,
                                "customer_id": "424133043",
                                "type": "points"
                            },
                            {
                                "awarded_points": 100,                               
                                "customer_id": "424133021",
                                "is_referrer": "true",
                                "type": "points"
                            }
                        ]
                    },
                    "item_status": {
                        "success": "true",
                        "code": "1000",
                        "message": "Customer registration successful, Provided Custom Field is invalid",
                        "warnings": {
                            "warning": [
                                "1017"
                            ]
                        }
                    }
                }
            ]
        }
    }
}
```
```json Sample Response: With External ID
{
    "response": {
        "status": {
            "success": "true",
            "code": 200,
            "message": "Success",
            "total": "1",
            "success_count": "1"
        },
        "customers": {
            "customer": [
                {
                    "user_id": 84230513,
                    "firstname": "",
                    "lastname": "",
                    "mobile": null,
                    "email": null,
                    "external_id": "123445901",
                    "lifetime_points": 100,
                    "loyalty_points": 100,
                    "current_slab": "Base",
                    "tier_expiry_date": "2124-08-01 23:59:59",
                    "points_summaries": {
                        "points_summary": [
                            {
                                "programId": "1204",
                                "redeemed": "0",
                                "expired": "0",
                                "returned": "0",
                                "adjusted": "0",
                                "lifetimePoints": "100",
                                "loyaltyPoints": "100",
                                "cumulativePurchases": "0",
                                "currentSlab": "Base",
                                "nextSlab": "Milestone 1",
                                "nextSlabSerialNumber": "2",
                                "nextSlabDescription": "Milestone 1",
                                "slabSNo": "1",
                                "slabExpiryDate": "2124-08-01 23:59:59",
                                "totalPoints": ""
                            }
                        ]
                    },
                    "lifetime_purchases": 0,
                    "registered_on": "2024-08-01 02:31:17",
                    "updated_on": "2024-08-01 02:31:17",
                    "type": "LOYALTY",
                    "source": "instore",
                    "custom_fields": {
                        "field": []
                    },
                    "extended_fields": {
                        "field": []
                    },
                    "subscriptions": {
                        "subscription": []
                    },
                    "side_effects": {
                        "effect": [
                            {
                                "awarded_points": 100,
                                "total_points": 100,
                                "type": "points"
                            }
                        ]
                    },
                    "item_status": {
                        "success": "true",
                        "code": "1000",
                        "message": "Customer registration successful",
                        "warnings": {
                            "warning": []
                        }
                    }
                }
            ]
        }
    }
}
```
```json With Alternate Currencies as side effect
{
    "response": {
        "status": {
            "success": "true",
            "code": 200,
            "message": "Success",
            "total": "1",
            "success_count": "1"
        },
        "customers": {
            "customer": [
                {
                    "user_id": 553639618,
                    "firstname": "testuser",
                    "lastname": "promo4",
                    "mobile": "919876543218",
                    "email": "demopromo4@gmail.com",
                    "external_id": null,
                    "lifetime_points": 0,
                    "loyalty_points": 0,
                    "current_slab": "NONE",
                    "tier_expiry_date": "2123-09-12 23:59:59",
                    "points_summaries": {
                        "points_summary": [
                            {
                                "programId": "2088",
                                "redeemed": "0",
                                "expired": "0",
                                "returned": "0",
                                "adjusted": "0",
                                "lifetimePoints": "0",
                                "loyaltyPoints": "0",
                                "cumulativePurchases": "0",
                                "currentSlab": "NONE",
                                "nextSlab": "",
                                "nextSlabSerialNumber": "-1",
                                "nextSlabDescription": "",
                                "slabSNo": "1",
                                "slabExpiryDate": "2123-09-12 23:59:59",
                                "totalPoints": ""
                            }
                        ]
                    },
                    "lifetime_purchases": 0,
                    "registered_on": "2023-09-12 16:05:01",
                    "updated_on": "2023-07-11 10:12:00",
                    "type": "LOYALTY",
                    "source": "instore",
                    "fraud_status": "NONE",
                    "reason": "",
                    "custom_fields": {
                        "field": []
                    },
                    "extended_fields": {
                        "field": []
                    },
                    "subscriptions": {
                        "subscription": []
                    },
                    "side_effects": {
                        "effect": [
                            {
                                "alternate_currency_identifier": "rgpws7",
                                "alternate_currency_name": "ac1",
                                "awarded_value": "110",
                                "type": "alternate_currency"
                            }
                        ]
                    },
                    "item_status": {
                        "success": "true",
                        "code": "1000",
                        "message": "Customer registration successful, Provided Custom Field is invalid",
                        "warnings": {
                            "warning": [
                                "1017"
                            ]
                        }
                    }
                }
            ]
        }
    }
}
```
```Text 500 Error
{
    "response": {
        "status": {
            "success": "false",
            "code": 500,
            "message": "All requests have failed due to errors",
            "total": "1",
            "success_count": "0"
        },
        "customers": {
            "customer": [
                {
                }
          ]
         }
       }
 }
```

# API specific error code

| Error Code | Description                                                                                                        | Reason                                                 |
| :--------- | :----------------------------------------------------------------------------------------------------------------- | :----------------------------------------------------- |
| 500        | All requests have failed due to errors                                                                             | Invalid or unsupported inputs passed                   |
| 1007       | Error in customer registration: No Valid Mobile Number or External ID or Email provided. Required for registration | No valid mobile number, external ID, or email provided |