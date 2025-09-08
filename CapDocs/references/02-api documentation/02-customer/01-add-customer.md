---
title: Add Customer
api:
  file: AddCustomer-spec.yaml
  operationId: postV11customeradd
hidden: false
---
This API registers customers in the organization with the primary identifiers being either the mobile number, email ID, or external ID. To add a customer, you must provide at least one of these parameters.

## Example request

```json Sample request with Mobile and email
curl --location 'https://eu.api.capillarytech.com/v1.1/customer/add?format=json' \
--header 'Content-Type: application/json' \
--header 'Authorization: ••••••' \
--data-raw '{
    "root": {
        "customer": [
            {
                "mobile": 9177xx811213,
                "email": "testing1Nee113@gmail.com",
                "external_id": "12on123",
                "firstname": "Raj",
                "lastname": "loyal",
                "updated_on": "2025-05-29 09:10:00",
                "registered_till": "rutuja_capillary",
                "associated_with": "rutuja_capillary",
                "type": "NON_LOYALTY",
                "source": "INSTORE",
                "accountId": "123456",
                "fraud_status": 
{
                    "status": "Fraud_Suspected"
                },
                "commChannels": [
                {
                    "type": "mobile",
                    "value": "9177xx811213",
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
```json Sample request with External ID
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

## Prerequisites

Make sure you have the right authentication and appropriate access control configured.

* **Access group resource:** Write access to customer group resource. For more information on access control, see the [access group documentation](https://docs.capillarytech.com/docs/access-group).
* **Authentication:** Basic authentication details. For more information on authentication, see the [Authentication documentation](https://docs.capillarytech.com/docs/api-client).
* Define all the necessary configurations. The mandatory attributes for customer registration depend on the configurations set on _**InTouch Settings > Registration Configuration**_.
* Define custom and extended fields according to your requirements, if you need to use them during registration.

## Rate limit

* **Demo and Testing Clusters:** 1,000 requests per minute per API key
* **Other Organizations:** The rate limit is brand-specific.

To modify the limit, create a ticket with the Capillary Product support team.

## Header information

You can define certain attributes in the API header section, and also specify the [Audit-](https://docs.capillarytech.com/reference/get-entity-audit-logs#adding-user-context-details)related user context details.

| Header Name                       | Description                                                                                                                                                                                                                                                                                                 |
| :-------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Authentication/Authorization Type | Basic Auth                                                                                                                                                                                                                                                                                                  |
| Request / Content Type            | application/json                                                                                                                                                                                                                                                                                            |
| Response Type                     | application/json                                                                                                                                                                                                                                                                                            |
| USER-CONTEXT-ENTITY-TYPE          | Refers to the classification of the user. This field does not have predefined validations, and you can define any values according to your specific requirements. For example, you could classify a user as an "Intouch Admin User". This field is not displayed in Member Care.                            |
| USER-CONTEXT-ENTITY-ID            | Refers to a unique identifier associated with the user entity type. For instance, it could be an Intouch admin user ID such as 3124587. This field does not have predefined validations, and you can define any values according to your specific requirements. This field is not displayed in Member Care. |
| USER-CONTEXT-ENTITY-SOURCE        | Refers to the source through which changes are made. The standard values for this field are: API IMPORT CONNECT_PLUS MEMBER_CARE REQUEST_WORKFLOW. **Note**: You can raise a JIRA request to the sustenance team and add more values, as per your requirement.                                              |
| USER-CONTEXT-ENTITY-SOURCE-ID     | Refers to ID if associated with the user source. This field does not have any validations.                                                                                                                                                                                                                  |

## Body parameters

| Field              | Type     | Required    | Description                                                                                                                                                                                                                                                                      |
| :----------------- | :------- | :---------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| .root              | Object   | Yes         | The root is a container for all the data that is being sent back from the API.                                                                                                                                                                                                   |
| ..customer         | Array    | Yes         | An array of customer objects. At least one customer identifier is required.                                                                                                                                                                                                      |
| ...mobile          | string   | Conditional | The customer’s mobile number. Add a mobile number with the country code. Only numeric characters are supported (0-9).                                                                                                                                                            |
| ...email           | string   | Conditional | The customer’s valid email address. Supported characters: a-z A-Z 0-9 - _ + . and @                                                                                                                                                                                              |
| ...external_id     | string   | Conditional | The customer’s external identifier. Special characters are not recommended. Maximum length is 250 characters.                                                                                                                                                                    |
| ...firstname       | string   | Optional    | The customer’s first name. Alphanumeric, spaces, hyphens, apostrophes are supported. The maximum length is 100 characters.                                                                                                                                                       |
| ...lastname        | string   | Optional    | The customer’s last name.  Alphanumeric, spaces, hyphens, apostrophes are supported. The maximum length is 100 characters.                                                                                                                                                       |
| ...updated_on      | datetime | Optional    | The date and time when the customer was last updated. Format: YYYY-MM-DD HH:MM:SS Example: 2025-02-26 09:10:00                                                                                                                                                                   |
| ...registered_till | string   | Optional    | The till name registered  with the customer. Maximum length is 50 characters.                                                                                                                                                                                                    |
| ...associated_with | string   | Optional    | The till name associated with the customer. Maximum length is 50 characters.                                                                                                                                                                                                     |
| ...type            | enum     | Optional    | The customer type.  Values allowed are loyalty, non_loyalty.                                                                                                                                                                                                                     |
| ...source          | string   | Optional    | The source from where the customer's data is collected or registered from. Example: an in-store system. Values allowed are InStore, Facebook, WebEngage, WeChat, E-commerce, Website, Line, Mobile App, and more.                                                                |
| ...accountId       | string   | Optional    | A unique identifier associated with the specific source or channel through which the customer's profile was created or registered.                                                                                                                                               |
| ...fraud_status    | Array    | Optional    | The customer’s fraud status. Values allowed are NORMAL, OUTLIER, FRAUD, INTERNAL, INVALID.                                                                                                                                                                                       |
| ....status         | enum     | Optional    | The customer's fraud status.                                                                                                                                                                                                                                                     |
| ...commChannels    | Array    | Yes         | The medium through which a customer can receive messages or notifications from the brand. Values allowed are SMS, email, mobile push notifications, WeChat, LINE, WhatsApp, and others.                                                                                          |
| .....type          | string   | Optional    | Modes of communication with the customer.  Values allowed are  mobile, email, card number.                                                                                                                                                                                       |
| .....value         | string   | Optional    | Value of the type of communication.                                                                                                                                                                                                                                              |
| .....primary       | boolean  | Optional    | Indicates if the communication type is the primary contact.                                                                                                                                                                                                                      |
| .....verified      | string   | Optional    | Indicates if this communication type is verified.                                                                                                                                                                                                                                |
| .....meta          | Array    | Optional    | Contains meta information of the customer.                                                                                                                                                                                                                                       |
| ......residence    | boolean  | Optional    | Meta information.                                                                                                                                                                                                                                                                |
| ...custom_fields   | Object   | Optional    | [Custom fields](https://docs.capillarytech.com/docs/data-fields#custom-fields) are used to store information specific to a brand's needs, such as customer preferences or product attributes. To use these fields during registration, you must define them beforehand.          |
| ....field          | Array    | Optional    | Array of custom fields.                                                                                                                                                                                                                                                          |
| ......name         | string   | Optional    | Name of the custom field.                                                                                                                                                                                                                                                        |
| ......value        | string   | Optional    | Value for the custom field.                                                                                                                                                                                                                                                      |
| ...extended_fields | Object   | Optional    | [Extended fields](https://docs.capillarytech.com/docs/data-entities#extended-fields) are predefined, standardized fields that capture additional information for various entities, such as customers or transactions. To use them during registration, they must be pre-defined. |
| ....field          | Array    | Optional    | Array of extended fields.                                                                                                                                                                                                                                                        |
| ......name         | string   | Optional    | Name of the extended field.                                                                                                                                                                                                                                                      |
| ......value        | string   | Optional    | Value of the extended field.                                                                                                                                                                                                                                                     |

## Example response

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
```json 500 Error
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

## Response parameters

| Field                  | Type     | Description                                                                                                                                                                                                                                                                      |
| :--------------------- | :------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| .response              | Object   | Indicates the response of the operation.                                                                                                                                                                                                                                         |
| ..status               | Object   | Indicates the status of the operation.                                                                                                                                                                                                                                           |
| ..success              | string   | Indicates the success of the operation.                                                                                                                                                                                                                                          |
| ...code                | integer  | The code representing the status of the operation.                                                                                                                                                                                                                               |
| ...message             | string   | The message describing the status of the operation.                                                                                                                                                                                                                              |
| ...total               | string   | The total count in the response.                                                                                                                                                                                                                                                 |
| ...success_count       | string   | The count of successful operations.                                                                                                                                                                                                                                              |
| ..customers            | Object   | The customer entity is the focal point around which all the data revolves.                                                                                                                                                                                                       |
| ...customer            | Array    | Array of customer objects.                                                                                                                                                                                                                                                       |
| ....user_id            | integer  | The unique identifier for the customer.                                                                                                                                                                                                                                          |
| ....firstname          | string   | The customer’s first name.                                                                                                                                                                                                                                                       |
| ....lastname           | string   | The customer’s last name.                                                                                                                                                                                                                                                        |
| ....mobile             | string   | The customer’s mobile number.                                                                                                                                                                                                                                                    |
| ....email              | string   | The customer’s valid email address.                                                                                                                                                                                                                                              |
| ....external_id        | string   | The customer’s external identifier.                                                                                                                                                                                                                                              |
| ....lifetime_points    | integer  | Customer’s total lifetime points accumulated.                                                                                                                                                                                                                                    |
| ....loyalty_points     | integer  | Customer’s current loyalty points.                                                                                                                                                                                                                                               |
| ....current_slab       | string   | Customer’s current slab in the loyalty program.                                                                                                                                                                                                                                  |
| ....tier_expiry_date   | datetime | Customer's current tier expiry date.                                                                                                                                                                                                                                             |
| ....points_summaries   | Object   | An overview of the customer's points.                                                                                                                                                                                                                                            |
| .....points_summary    | Array    | A summary of customers points.                                                                                                                                                                                                                                                   |
| ....lifetime_purchases | integer  | Customer’s total lifetime purchases made.                                                                                                                                                                                                                                        |
| ....registered_on      | string   | The date and time when the customer registered.                                                                                                                                                                                                                                  |
| ....updated_on         | string   | The date and time when the customer's information was last updated.                                                                                                                                                                                                              |
| ....type               | string   | The type of customer.                                                                                                                                                                                                                                                            |
| ....source             | string   | The source through which the customer was acquired.                                                                                                                                                                                                                              |
| ....fraud_status       | string   | The fraud status of the customer.                                                                                                                                                                                                                                                |
| ....reason             | string   | The reason field (not populated in this response).                                                                                                                                                                                                                               |
| ....custom_fields      | Object   | [Custom fields](https://docs.capillarytech.com/docs/data-fields#custom-fields) are used to store information specific to a brand's needs, such as customer preferences or product attributes.                                                                                    |
| .....field             | Array    | Array of custom fields.                                                                                                                                                                                                                                                          |
| ......name             | string   | Name of the custom field.                                                                                                                                                                                                                                                        |
| ......value            | string   | Value for the custom field.                                                                                                                                                                                                                                                      |
| ....extended_fields    | Object   | [Extended fields](https://docs.capillarytech.com/docs/data-entities#extended-fields) are predefined, standardized fields that capture additional information for various entities, such as customers or transactions. To use them during registration, they must be pre-defined. |
| .....field             | Array    | Array of extended fields.                                                                                                                                                                                                                                                        |
| ......name             | string   | Name of the extended field.                                                                                                                                                                                                                                                      |
| ......value            | string   | Value of the extended field.                                                                                                                                                                                                                                                     |
| ....subscription       | Object   | Customer Subscription determines whether a customer has opted or not opted, receiving promotional or transactional communications from specific sources.                                                                                                                         |
| ....side_effects       | Object   | Object containing side effects (additional information) for the customer creation, if any.                                                                                                                                                                                       |
| .....effect            | Array    | Array containing details of side effects.                                                                                                                                                                                                                                        |
| ....item_status        | Object   | Object containing details of item status.                                                                                                                                                                                                                                        |
| .....success           | string   | Indicates the success of the customer item operation.                                                                                                                                                                                                                            |
| .....code              | string   | The code representing the status of the customer item operation.                                                                                                                                                                                                                 |
| .....message           | string   | The message describing the status of the customer item operation.                                                                                                                                                                                                                |
| .....warnings          | Object   | Warning codes associated with the operation.                                                                                                                                                                                                                                     |
| ......warning          | Array    | Array containing the warnings.                                                                                                                                                                                                                                                   |

## Error codes

| Code | Description                                                                                                                                                                |
| :--- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 500  | All requests have failed due to errors. Invalid or unsupported inputs passed.                                                                                              |
| 1007 | Error in customer registration: No Valid Mobile Number or External ID or Email provided required for registration. No valid mobile number, external ID, or email provided. |

## **Additional notes**

**API behavior**

* If `CONFIG_SKIP_SECONDARY_ID_ON_PRIMARY_MISMATCH` is enabled, if the primary identifier is different but any of the secondary identifiers exist, a new customer is registered with the primary identifier ignoring the secondary identifier. The config is available on the Registration Page of InTouch **Profile** > **Organization Settings** > **Miscellaneous**.
* Also, this config overrides `CONF_PRIMARY_IDENTIFIER_STRICT_CHECK`.

<br />
