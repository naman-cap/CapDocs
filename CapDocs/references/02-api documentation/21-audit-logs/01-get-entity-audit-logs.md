---
title: Get audit logs of entities
excerpt: This page provides you with information on entity audit log API.
api:
  file: v1.json
  operationId: get-entity-audit-logs
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
This API allows users to retrieve audit logs for specific entities. The API provides detailed records of actions and events associated with the chosen entity. At present, CUSTOMER and CARD entities are supported.

<Callout icon="👍" theme="okay">
  For an overview on our APIs and for hands-on testing, refer to [API overview ](https://docs.capillarytech.com/reference/apioverview)and [Make your first API call](https://docs.capillarytech.com/reference/make-your-first-api-call) documentation.
</Callout>

# Prerequisites

*   Basic or OAuth credentials
*   For Custom and  Extended fields, make sure that the audit log trial for the entity is enabled. For more information, refer to the documentation on [Setting up Entities and Fields](https://docs.capillarytech.com/docs/data-fields).
*   Access to the Behavioural events access group. For information on access groups, refer to the [access group documentation](https://docs.capillarytech.com/docs/access-group).

# API features

| Feature    | Availability/Info                                                                         |
| :--------- | :---------------------------------------------------------------------------------------- |
| Pagination | Yes                                                                                       |
| Rate limit | Refer to [rate limit documentation](https://docs.capillarytech.com/reference/rate-limits) |

# API endpoint example

`https://eu.api.capillarytech.com/api_gateway/v2/audits?entityType=CUSTOMER&entityId=98662653&source=INSTORE`

# Request query parameters

<Table align={["left","left","left"]}>
  <thead>
    <tr>
      <th>
        Parameter

        (Parameters marked with

        * <br />

        are mandatory)
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
        entityType\*
      </td>

      <td>
        enum
      </td>

      <td>
        The type of entity for which you want to fetch audit logs. Supported values: CUSTOMER, CARD.
      </td>
    </tr>

    <tr>
      <td>
        entityId\*
      </td>

      <td>
        Long
      </td>

      <td>
        The unique identifier corresponding to the entity.
      </td>
    </tr>

    <tr>
      <td>
        source
      </td>

      <td>
        String
      </td>

      <td>
        The source of the entity. For example, INSTORE, FACEBOOK, etc.
      </td>
    </tr>

    <tr>
      <td>
        limit
      </td>

      <td>
        int
      </td>

      <td>
        The number of results you wish to retrieve. Default value: 10.
      </td>
    </tr>

    <tr>
      <td>
        pageNo
      </td>

      <td>
        int
      </td>

      <td>
        The page number, indicating which page of results to retrieve. Default value: 0.
      </td>
    </tr>

    <tr>
      <td>
        sortBy
      </td>

      <td>
        String
      </td>

      <td>
        The field by which results should be sorted. Default value: autoUpdateTime.
      </td>
    </tr>

    <tr>
      <td>
        sortOrder
      </td>

      <td>
        enum
      </td>

      <td>
        The order in which results should be sorted. Supported values: ASC, DESC.
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
        The start date of the date range. Example: 2022-08-18 12:00:00.
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
        The end date of the date range. Example: 2022-08-18 12:00:00.
      </td>
    </tr>

    <tr>
      <td>
        referenceType
      </td>

      <td>
        Enum
      </td>

      <td>
        Reference type. The supported values are Identifier, StandardField, ExtendedField, CustomField, CustomerStatus, CardStatus, SubscriptionStatus, CustomerMerge, CardCustomField, CommChannel, CardExtendedField.  For Extended fields and Custom fields, audit logging is allowed for a maximum of 5 fields each.
      </td>
    </tr>

    <tr>
      <td>
        referenceValue
      </td>

      <td>
        String
      </td>

      <td>
        Value for the selected reference type.
      </td>
    </tr>

    <tr>
      <td>
        includeUserContext
      </td>

      <td>
        Boolean
      </td>

      <td>
        Enter true to retrieve user context details such as entity type, entity ID, entity source and entity source ID. These context details are added when an entity is created or updated, providing information about the user who made the changes.
      </td>
    </tr>
  </tbody>
</Table>

# Adding user context details

User Context refers to the entity information of the user who is performing actions such as adding or updating the data. This context includes attributes that help identify and provide details about the user and help track the user who made the changes.

The user context header information is supported in the below APIs:

* [V1](https://docs.capillarytech.com/reference/add-customer) and [V2](https://docs.capillarytech.com/reference/v2-add-customer) Customer Add APIs
* [V1](https://docs.capillarytech.com/reference/update-customer-detail) and [V2](https://docs.capillarytech.com/reference/update-customer-details_v1api) Customer Update APIs

Further to view the user context details in the audit log, you need to enable the query parameter `includeUserContext=true`.

<Table align={["left","left"]}>
  <thead>
    <tr>
      <th>
        Header value
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        USER-CONTEXT-ENTITY-TYPE
      </td>

      <td>
        Refers to the classification of the user. This field does not have predefined validations, and you can define any values according to your specific requirements. For example, you could classify a user as an "Intouch Admin User". This field is not displayed in Member Care.
      </td>
    </tr>

    <tr>
      <td>
        USER-CONTEXT-ENTITY-ID
      </td>

      <td>
        Refers to a unique identifier associated with the user entity type. For instance, it could be an Intouch admin user ID such as 3124587. This field does not have predefined validations, and you can define any values according to your specific requirements. This field is not displayed in Member Care.
      </td>
    </tr>

    <tr>
      <td>
        USER-CONTEXT-ENTITY-SOURCE
      </td>

      <td>
        Refers to the source through which changes are made. The standard values for this field are:

        * API
        * IMPORT
        * CONNECT\_PLUS
        * MEMBER\_CARE
        * REQUEST\_WORKFLOW
          * \*Note: \*\*You can raise a JIRA request to the sustenance team and add more values, as per your requirement.
      </td>
    </tr>

    <tr>
      <td>
        USER-CONTEXT-ENTITY-SOURCE-ID
      </td>

      <td>
        Refers to ID if associated with the user source. This field does not have any validations.
      </td>
    </tr>
  </tbody>
</Table>

# Response parameters

```json entityType=CUSTOMER
{
    "data": [
        {
            "updatedByUser": null,
            "updatedBy": 75083604,
            "orgId": 100458,
            "entityType": "CUSTOMER",
            "entityId": 98662653,
            "createdOn": 1700733054030,
            "requestId": "25b7780ed479ce80cd95326bcd2a3d91",
            "till": null,
            "store": null,
            "userContextDetails": null,
            "victimUserDetails": null,
            "survivorUserDetails": null,
            "source": "INSTORE",
            "updatedByMode": "API",
            "autoUpdateTime": 1700733053872,
            "events": [
                {
                    "eventType": "Identifiers",
                    "updatedField": "cardnumber",
                    "additionalFields": {
                        "previousValue": "NA",
                        "currentValue": "DIWALI000000001620232"
                    },
                    "associateEntities": null
                }
            ]
        },
        {
            "updatedByUser": null,
            "updatedBy": 75070896,
            "orgId": 100458,
            "entityType": "CUSTOMER",
            "entityId": 98662653,
            "createdOn": 1695899825615,
            "requestId": "2b47b859fa4e0d692b0cac7a200ef9cc",
            "till": null,
            "store": null,
            "userContextDetails": null,
            "victimUserDetails": null,
            "survivorUserDetails": null,
            "source": "INSTORE",
            "updatedByMode": "API",
            "autoUpdateTime": 1695899825494,
            "events": [
                {
                    "eventType": "Identifiers",
                    "updatedField": "mobile",
                    "additionalFields": {
                        "previousValue": "9876543210",
                        "currentValue": "9976543210"
                    },
                    "associateEntities": null
                }
            ]
        },
        {
            "updatedByUser": null,
            "updatedBy": 75083604,
            "orgId": 100458,
            "entityType": "CUSTOMER",
            "entityId": 98662653,
            "createdOn": 1689238507261,
            "requestId": "a272b65e26901f2d2959068543cfb509",
            "till": null,
            "store": null,
            "userContextDetails": null,
            "victimUserDetails": null,
            "survivorUserDetails": null,
            "source": "INSTORE",
            "updatedByMode": "API",
            "autoUpdateTime": 1689238507163,
            "events": [
                {
                    "eventType": "Identifiers",
                    "updatedField": "mobile",
                    "additionalFields": {
                        "previousValue": "9353995212",
                        "currentValue": "9988771155"
                    },
                    "associateEntities": null
                }
            ]
        },
        {
            "updatedByUser": null,
            "updatedBy": 75083604,
            "orgId": 100458,
            "entityType": "CUSTOMER",
            "entityId": 98662653,
            "createdOn": 1689238436465,
            "requestId": "020cf7e0f9827af77f22f6e7833dd0e4",
            "till": null,
            "store": null,
            "userContextDetails": null,
            "victimUserDetails": null,
            "survivorUserDetails": null,
            "source": "INSTORE",
            "updatedByMode": "API",
            "autoUpdateTime": 1689238436360,
            "events": [
                {
                    "eventType": "Identifiers",
                    "updatedField": "mobile",
                    "additionalFields": {
                        "previousValue": "9988776655",
                        "currentValue": "9988776652"
                    },
                    "associateEntities": null
                }
            ]
        },
        {
            "updatedByUser": null,
            "updatedBy": 75083604,
            "orgId": 100458,
            "entityType": "CUSTOMER",
            "entityId": 98662653,
            "createdOn": 1688374431078,
            "requestId": "4bfddb9d-8f0f-4535-8c9e-d72a1922a2f2",
            "till": null,
            "store": null,
            "userContextDetails": null,
            "victimUserDetails": null,
            "survivorUserDetails": null,
            "source": "INSTORE",
            "updatedByMode": "API",
            "autoUpdateTime": 1688374430917,
            "events": [
                {
                    "eventType": "Identifiers",
                    "updatedField": "cardnumber",
                    "additionalFields": {
                        "previousValue": "NA",
                        "currentValue": "GOLD400000000000011162020"
                    },
                    "associateEntities": null
                }
            ]
        },
        {
            "updatedByUser": null,
            "updatedBy": 75083604,
            "orgId": 100458,
            "entityType": "CUSTOMER",
            "entityId": 98662653,
            "createdOn": 1687954900362,
            "requestId": "91a3cfc4b2bbcb9426bbfb51966b6549",
            "till": null,
            "store": null,
            "userContextDetails": null,
            "victimUserDetails": null,
            "survivorUserDetails": null,
            "source": "INSTORE",
            "updatedByMode": "API",
            "autoUpdateTime": 1687954900155,
            "events": [
                {
                    "eventType": "Identifiers",
                    "updatedField": "cardnumber",
                    "additionalFields": {
                        "previousValue": "NA",
                        "currentValue": "BUK0000044849PR"
                    },
                    "associateEntities": null
                }
            ]
        },
        {
            "updatedByUser": null,
            "updatedBy": 75036445,
            "orgId": 100458,
            "entityType": "CUSTOMER",
            "entityId": 98662653,
            "createdOn": 1670992526580,
            "requestId": "2e8a8897bc351889b17d45b6d10feec5",
            "till": null,
            "store": null,
            "userContextDetails": null,
            "victimUserDetails": null,
            "survivorUserDetails": null,
            "source": "INSTORE",
            "updatedByMode": "API",
            "autoUpdateTime": 1670992526552,
            "events": [
                {
                    "eventType": "Identifiers",
                    "updatedField": "email",
                    "additionalFields": {
                        "previousValue": "NA",
                        "currentValue": "tomsawyer@capillarytech.com"
                    },
                    "associateEntities": null
                }
            ]
        }
    ],
    "pagination": {
        "totalElements": 7,
        "totalPages": 1,
        "numberOfElements": 7,
        "number": 0
    }
}
```
```json entityType=CARD
{
    "data": [
        {
            "updatedByUser": null,
            "updatedBy": 75083604,
            "orgId": 100458,
            "entityType": "CARD",
            "entityId": 648089,
            "createdOn": 1687954900309,
            "requestId": "91a3cfc4b2bbcb9426bbfb51966b6549",
            "till": null,
            "store": null,
            "userContextDetails": null,
            "victimUserDetails": null,
            "survivorUserDetails": null,
            "source": null,
            "updatedByMode": "API",
            "autoUpdateTime": 1687954900305,
            "events": [
                {
                    "eventType": "Card Status",
                    "updatedField": "CardStatus",
                    "additionalFields": {
                        "previousLabelId": "26",
                        "previousValue": "NOT_ISSUED",
                        "currentValue": "ACTIVE",
                        "currentLabelId": "15"
                    },
                    "associateEntities": [
                        {
                            "entityType": "CUSTOMER",
                            "entityId": 98662653
                        }
                    ]
                }
            ]
        },
        {
            "updatedByUser": null,
            "updatedBy": 75083604,
            "orgId": 100458,
            "entityType": "CARD",
            "entityId": 648089,
            "createdOn": 1687954899985,
            "requestId": "91a3cfc4b2bbcb9426bbfb51966b6549",
            "till": null,
            "store": null,
            "userContextDetails": null,
            "victimUserDetails": null,
            "survivorUserDetails": null,
            "source": null,
            "updatedByMode": "API",
            "autoUpdateTime": 1687954899980,
            "events": [
                {
                    "eventType": "Card Status",
                    "updatedField": "CardStatus",
                    "additionalFields": {
                        "labelId": "26",
                        "value": "NOT_ISSUED"
                    },
                    "associateEntities": [
                        {
                            "entityType": null,
                            "entityId": null
                        }
                    ]
                }
            ]
        }
    ],
    "pagination": {
        "totalElements": 2,
        "totalPages": 1,
        "numberOfElements": 2,
        "number": 0
    }
}
```
```Text includeUserContext=true
{
    "data": [
        
        {
            "updatedByUser": null,
            "updatedBy": 75015489,
            "orgId": 100458,
            "entityType": "CUSTOMER",
            "entityId": 98662653,
            "createdOn": 1712905980709,
            "requestId": "c6d0e3f2c8f0fe7d661bbd8725bd6511",
            "till": null,
            "store": null,
            "userContextDetails": {
                "entityType": "INTOUCH_ADMIN_USER",
                "entityId": "75015489",
                "entitySource": "MEMBER_CARE",
                "entitySourceId": "Achyuthanandan S"
            },
            "victimUserDetails": null,
            "survivorUserDetails": null,
            "source": null,
            "updatedByMode": "MEMBER_CARE",
            "autoUpdateTime": 1712905980699,
            "events": [
                {
                    "eventType": "Customer Status",
                    "updatedField": "CustomerStatus",
                    "additionalFields": {
                        "previousLabelId": "54",
                        "previousValue": "ACTIVE",
                        "currentValue": "ACTIVE",
                        "currentLabelId": "55"
                    },
                    "associateEntities": null
                }
            ]
        },
        {
            "updatedByUser": null,
            "updatedBy": 75015489,
            "orgId": 100458,
            "entityType": "CUSTOMER",
            "entityId": 98662653,
            "createdOn": 1710786713416,
            "requestId": "98b57fd658b0f809a9d73dbc5fb2f6d8",
            "till": null,
            "store": null,
            "userContextDetails": {
                "entityType": "INTOUCH_ADMIN_USER",
                "entityId": "75015489",
                "entitySource": "MEMBER_CARE",
                "entitySourceId": "Achyuthanandan S"
            },
            "victimUserDetails": null,
            "survivorUserDetails": null,
            "source": null,
            "updatedByMode": "MEMBER_CARE",
            "autoUpdateTime": 1710786713406,
            "events": [
                {
                    "eventType": "Customer Status",
                    "updatedField": "CustomerStatus",
                    "additionalFields": {
                        "previousLabelId": "53",
                        "previousValue": "ACTIVE",
                        "currentValue": "ACTIVE",
                        "currentLabelId": "54"
                    },
                    "associateEntities": null
                }
            ]
        },
        {
            "updatedByUser": null,
            "updatedBy": -1,
            "orgId": 100458,
            "entityType": "CUSTOMER",
            "entityId": 98662653,
            "createdOn": 1707818830968,
            "requestId": "066f3c2dff93088391f8bdbb79c181c3",
            "till": null,
            "store": null,
            "userContextDetails": {
                "entityType": "INTOUCH_ADMIN_USER",
                "entityId": "75051426",
                "entitySource": "MEMBER_CARE",
                "entitySourceId": "Manjunath Muniraju"
            },
            "victimUserDetails": null,
            "survivorUserDetails": null,
            "source": null,
            "updatedByMode": "MEMBER_CARE",
            "autoUpdateTime": 1707818830961,
            "events": [
                {
                    "eventType": "Subscription Status",
                    "updatedField": "SubscriptionStatus",
                    "additionalFields": {
                        "org_source_id": "399",
                        "communication_channel_type": "EMAIL",
                        "ou_id": "-1",
                        "communication_channel_id": "2",
                        "priority": "TRANS",
                        "org_source": "WEB_ENGAGE",
                        "previousValue": "NA",
                        "currentValue": "OPTIN"
                    },
                    "associateEntities": null
                }
            ]
        },
        {
            "updatedByUser": null,
            "updatedBy": -1,
            "orgId": 100458,
            "entityType": "CUSTOMER",
            "entityId": 98662653,
            "createdOn": 1707818753870,
            "requestId": "6ea830a9020f6a2b6eb587094cac0a98",
            "till": null,
            "store": null,
            "userContextDetails": {
                "entityType": "INTOUCH_ADMIN_USER",
                "entityId": "75051426",
                "entitySource": "MEMBER_CARE",
                "entitySourceId": "Manjunath Muniraju"
            },
            "victimUserDetails": null,
            "survivorUserDetails": null,
            "source": null,
            "updatedByMode": "MEMBER_CARE",
            "autoUpdateTime": 1707818753850,
            "events": [
                {
                    "eventType": "Subscription Status",
                    "updatedField": "SubscriptionStatus",
                    "additionalFields": {
                        "org_source_id": "399",
                        "communication_channel_type": "ANDROID",
                        "ou_id": "-1",
                        "communication_channel_id": "5",
                        "priority": "BULK",
                        "org_source": "WEB_ENGAGE",
                        "previousValue": "NA",
                        "currentValue": "OPTIN"
                    },
                    "associateEntities": null
                },
                {
                    "eventType": "Subscription Status",
                    "updatedField": "SubscriptionStatus",
                    "additionalFields": {
                        "org_source_id": "399",
                        "communication_channel_type": "ANDROID",
                        "ou_id": "-1",
                        "communication_channel_id": "5",
                        "priority": "TRANS",
                        "org_source": "WEB_ENGAGE",
                        "previousValue": "NA",
                        "currentValue": "OPTIN"
                    },
                    "associateEntities": null
                }
            ]
        },
        {
            "updatedByUser": null,
            "updatedBy": -1,
            "orgId": 100458,
            "entityType": "CUSTOMER",
            "entityId": 98662653,
            "createdOn": 1707154694475,
            "requestId": "39cdcea9b27c26fc3990729f880e0565",
            "till": null,
            "store": null,
            "userContextDetails": {
                "entityType": null,
                "entityId": null,
                "entitySource": null,
                "entitySourceId": null
            },
            "victimUserDetails": null,
            "survivorUserDetails": null,
            "source": null,
            "updatedByMode": "API",
            "autoUpdateTime": 1707154694464,
            "events": [
                {
                    "eventType": "Subscription Status",
                    "updatedField": "SubscriptionStatus",
                    "additionalFields": {
                        "org_source_id": "-1",
                        "communication_channel_type": "EMAIL",
                        "ou_id": "-1",
                        "communication_channel_id": "2",
                        "priority": "TRANS",
                        "org_source": "INSTORE",
                        "previousValue": "OPTIN",
                        "currentValue": "OPTOUT"
                    },
                    "associateEntities": null
                }
            ]
        },
        {
            "updatedByUser": null,
            "updatedBy": 75015489,
            "orgId": 100458,
            "entityType": "CUSTOMER",
            "entityId": 98662653,
            "createdOn": 1703169765680,
            "requestId": "6aee6bf96d98c776591acb7c2d7d8a57",
            "till": null,
            "store": null,
            "userContextDetails": {
                "entityType": null,
                "entityId": null,
                "entitySource": null,
                "entitySourceId": null
            },
            "victimUserDetails": null,
            "survivorUserDetails": null,
            "source": "MOBILE_APP",
            "updatedByMode": "API",
            "autoUpdateTime": 1703169765526,
            "events": [
                {
                    "eventType": "Identifiers",
                    "updatedField": "cardnumber",
                    "additionalFields": {
                        "previousValue": "NA",
                        "currentValue": "DIWALI000000009020232"
                    },
                    "associateEntities": null
                }
            ]
        },
        {
            "updatedByUser": null,
            "updatedBy": 75046492,
            "orgId": 100458,
            "entityType": "CUSTOMER",
            "entityId": 98662653,
            "createdOn": 1701771489122,
            "requestId": "e250a1bc0543b223f69005df7d335841",
            "till": null,
            "store": null,
            "userContextDetails": {
                "entityType": null,
                "entityId": null,
                "entitySource": null,
                "entitySourceId": null
            },
            "victimUserDetails": null,
            "survivorUserDetails": null,
            "source": "MAPP_SDK",
            "updatedByMode": "API",
            "autoUpdateTime": 1701771489120,
            "events": [
                {
                    "eventType": "Communication Channels",
                    "updatedField": "ios",
                    "additionalFields": {
                        "previousValue": "flzH44TBxkXLn3YOCInTIn:APA91bF5GOoTKTWMqyNH0m68rTefMOkMPPhuZtP0VjIYIVb-t6NndsTS6_7eUU-reXC_ra23mBjSxlt6jAlQw6paC2-am51WP8c2zSlLzaboZwtcR5CUP39Fa747m4U_aaq4hVebSLrc",
                        "currentValue": "dsjHnA-CjUqtj_UxKTLuXT:APA91bHSLlqOMzQel3OGpgOdLpu49G_7iN-5mIgWg9U2h4Wt2IY11qhY9iRNilH1j1jIANshMBneJdXriiO-1QRMBOLKglcl8hcis0xITXjH7tkYhdC-FzQzEk9wYG7O-sIcf3aFSLqo"
                    },
                    "associateEntities": null
                }
            ]
        }
    ],
    "pagination": {
        "totalElements": 52,
        "totalPages": 6,
        "numberOfElements": 10,
        "number": 0
    }
}
```
```json entityType=CUSTOMER&referenceType=StandardField
{
    "data": [
        {
            "updatedByUser": null,
            "updatedBy": 75036445,
            "orgId": 100458,
            "entityType": "CUSTOMER",
            "entityId": 98662653,
            "createdOn": 1680783476574,
            "requestId": "c325afad-d4d5-48b3-a7a5-3658a88a0e1e",
            "till": null,
            "store": null,
            "userContextDetails": null,
            "victimUserDetails": null,
            "survivorUserDetails": null,
            "source": "instore",
            "updatedByMode": "API",
            "autoUpdateTime": 1680783476566,
            "events": [
                {
                    "eventType": "Standard Fields",
                    "updatedField": "LastName",
                    "additionalFields": {
                        "previousValue": "V",
                        "currentValue": "Vatsal"
                    },
                    "associateEntities": null
                }
            ]
        }
    ],
    "pagination": {
        "totalElements": 1,
        "totalPages": 1,
        "numberOfElements": 1,
        "number": 0
    }
}
```
```json entityType=CUSTOMER&referenceType=CustomerStatus
{
    "data": [
        {
            "updatedByUser": null,
            "updatedBy": 75015489,
            "orgId": 100458,
            "entityType": "CUSTOMER",
            "entityId": 98662653,
            "createdOn": 1712905980709,
            "requestId": "c6d0e3f2c8f0fe7d661bbd8725bd6511",
            "till": null,
            "store": null,
            "userContextDetails": null,
            "victimUserDetails": null,
            "survivorUserDetails": null,
            "source": null,
            "updatedByMode": "MEMBER_CARE",
            "autoUpdateTime": 1712905980699,
            "events": [
                {
                    "eventType": "Customer Status",
                    "updatedField": "CustomerStatus",
                    "additionalFields": {
                        "previousLabelId": "54",
                        "previousValue": "ACTIVE",
                        "currentValue": "ACTIVE",
                        "currentLabelId": "55"
                    },
                    "associateEntities": null
                }
            ]
        },
        {
            "updatedByUser": null,
            "updatedBy": 75015489,
            "orgId": 100458,
            "entityType": "CUSTOMER",
            "entityId": 98662653,
            "createdOn": 1710786713416,
            "requestId": "98b57fd658b0f809a9d73dbc5fb2f6d8",
            "till": null,
            "store": null,
            "userContextDetails": null,
            "victimUserDetails": null,
            "survivorUserDetails": null,
            "source": null,
            "updatedByMode": "MEMBER_CARE",
            "autoUpdateTime": 1710786713406,
            "events": [
                {
                    "eventType": "Customer Status",
                    "updatedField": "CustomerStatus",
                    "additionalFields": {
                        "previousLabelId": "53",
                        "previousValue": "ACTIVE",
                        "currentValue": "ACTIVE",
                        "currentLabelId": "54"
                    },
                    "associateEntities": null
                }
            ]
        },
        {
            "updatedByUser": null,
            "updatedBy": 75083604,
            "orgId": 100458,
            "entityType": "CUSTOMER",
            "entityId": 98662653,
            "createdOn": 1687952300164,
            "requestId": "64e98c3a29bd9ea009eaed876d5919bb",
            "till": null,
            "store": null,
            "userContextDetails": null,
            "victimUserDetails": null,
            "survivorUserDetails": null,
            "source": null,
            "updatedByMode": "API",
            "autoUpdateTime": 1687952300161,
            "events": [
                {
                    "eventType": "Customer Status",
                    "updatedField": "CustomerStatus",
                    "additionalFields": {
                        "previousLabelId": "55",
                        "previousValue": "ACTIVE",
                        "currentValue": "ACTIVE",
                        "currentLabelId": "53"
                    },
                    "associateEntities": null
                }
            ]
        }
    ],
    "pagination": {
        "totalElements": 3,
        "totalPages": 1,
        "numberOfElements": 3,
        "number": 0
    }
}
```
```json entityType=CUSTOMER&pageNo=1&limit=10
{
    "data": [
        {
            "updatedByUser": null,
            "updatedBy": 75046492,
            "orgId": 100458,
            "entityType": "CUSTOMER",
            "entityId": 98662653,
            "createdOn": 1701770457703,
            "requestId": "af0fae760c6d1496c4d52a42bd9c8bd8",
            "till": null,
            "store": null,
            "userContextDetails": null,
            "victimUserDetails": null,
            "survivorUserDetails": null,
            "source": "MAPP_SDK",
            "updatedByMode": "API",
            "autoUpdateTime": 1701770457700,
            "events": [
                {
                    "eventType": "Communication Channels",
                    "updatedField": "ios",
                    "additionalFields": {
                        "previousValue": "eurX_VU-AE1WgdyjjfsggR:APA91bGgwRs8VJXLNJgEPclGgjqgYERH1MClEzdZn9sdayr9rJSfWi8rs_7ptoNp4C-jz7gjGAw6HPQof5yRxXnJevEAdZryauwRfmwdE8s-5XELwa9dXT8lvXyWpa_1JCI_rJqUH4cQ",
                        "currentValue": "fCyvtyp0MkXjl_Rv4XUZ2F:APA91bGR32O5Bia8L15AM_EoHbsT5pQ_4y8w2AbX6tHX1Rtf94sS7AnsAz28ZZDwdLxf3urtAuWe9vfpVnjdOzoBMdRPb41wxNBvHz_PPpQ7fwmul8rDSRuCcyziPunb6EnFU1mQYRKB"
                    },
                    "associateEntities": null
                }
            ]
        },
        {
            "updatedByUser": null,
            "updatedBy": 75046492,
            "orgId": 100458,
            "entityType": "CUSTOMER",
            "entityId": 98662653,
            "createdOn": 1701673121331,
            "requestId": "b64087c754d0abb5b03a1e848c6f10c8",
            "till": null,
            "store": null,
            "userContextDetails": null,
            "victimUserDetails": null,
            "survivorUserDetails": null,
            "source": "MAPP_SDK",
            "updatedByMode": "API",
            "autoUpdateTime": 1701673121328,
            "events": [
                {
                    "eventType": "Communication Channels",
                    "updatedField": "ios",
                    "additionalFields": {
                        "previousValue": "fCyvtyp0MkXjl_Rv4XUZ2F:APA91bGR32O5Bia8L15AM_EoHbsT5pQ_4y8w2AbX6tHX1Rtf94sS7AnsAz28ZZDwdLxf3urtAuWe9vfpVnjdOzoBMdRPb41wxNBvHz_PPpQ7fwmul8rDSRuCcyziPunb6EnFU1mQYRKB",
                        "currentValue": "eurX_VU-AE1WgdyjjfsggR:APA91bGgwRs8VJXLNJgEPclGgjqgYERH1MClEzdZn9sdayr9rJSfWi8rs_7ptoNp4C-jz7gjGAw6HPQof5yRxXnJevEAdZryauwRfmwdE8s-5XELwa9dXT8lvXyWpa_1JCI_rJqUH4cQ"
                    },
                    "associateEntities": null
                }
            ]
        },
        {
            "updatedByUser": null,
            "updatedBy": 75046492,
            "orgId": 100458,
            "entityType": "CUSTOMER",
            "entityId": 98662653,
            "createdOn": 1701414173380,
            "requestId": "f7a51fac14582d55909d4d4f54bd480b",
            "till": null,
            "store": null,
            "userContextDetails": null,
            "victimUserDetails": null,
            "survivorUserDetails": null,
            "source": "MAPP_SDK",
            "updatedByMode": "API",
            "autoUpdateTime": 1701414173378,
            "events": [
                {
                    "eventType": "Communication Channels",
                    "updatedField": "ios",
                    "additionalFields": {
                        "previousValue": "cAUd0gSoqkkXocw_2XG03H:APA91bGwRB_46-ntvROLlGM9RV3dHHQpUlnMY37RwLyQEokJJYzLEx3m1UyavMzNbO-wBPbnk8eZHY1nsbTY_UrgfB9AvhljqU29k9XHWckpxm8kJ6vhmClEq8fosGTMt6LjbU3bf6zw",
                        "currentValue": "fCyvtyp0MkXjl_Rv4XUZ2F:APA91bGR32O5Bia8L15AM_EoHbsT5pQ_4y8w2AbX6tHX1Rtf94sS7AnsAz28ZZDwdLxf3urtAuWe9vfpVnjdOzoBMdRPb41wxNBvHz_PPpQ7fwmul8rDSRuCcyziPunb6EnFU1mQYRKB"
                    },
                    "associateEntities": null
                }
            ]
        },
        {
            "updatedByUser": null,
            "updatedBy": 75046492,
            "orgId": 100458,
            "entityType": "CUSTOMER",
            "entityId": 98662653,
            "createdOn": 1701337852961,
            "requestId": "92b69462ce4541317284466d6c740bb3",
            "till": null,
            "store": null,
            "userContextDetails": null,
            "victimUserDetails": null,
            "survivorUserDetails": null,
            "source": "MAPP_SDK",
            "updatedByMode": "API",
            "autoUpdateTime": 1701337852959,
            "events": [
                {
                    "eventType": "Communication Channels",
                    "updatedField": "ios",
                    "additionalFields": {
                        "previousValue": "cpFx8lEHZ06Ylq_SrRwjU9:APA91bH4gZguDTS1NSI5IoWy4DxylMZRJy4GDLsnCpeFgay1yCOBH7Y4cJJdMJcHBgPHGslncacqQ-tLffuZ6_5Vn2krW4Jmq17R-rkYZRaubVzPmMm34efNeIREZ9nyhIVJfRX5Bt3G",
                        "currentValue": "cAUd0gSoqkkXocw_2XG03H:APA91bGwRB_46-ntvROLlGM9RV3dHHQpUlnMY37RwLyQEokJJYzLEx3m1UyavMzNbO-wBPbnk8eZHY1nsbTY_UrgfB9AvhljqU29k9XHWckpxm8kJ6vhmClEq8fosGTMt6LjbU3bf6zw"
                    },
                    "associateEntities": null
                }
            ]
        },
        {
            "updatedByUser": null,
            "updatedBy": 75046492,
            "orgId": 100458,
            "entityType": "CUSTOMER",
            "entityId": 98662653,
            "createdOn": 1701337437781,
            "requestId": "6358df97d37c57f1d9f4477bd3209be0",
            "till": null,
            "store": null,
            "userContextDetails": null,
            "victimUserDetails": null,
            "survivorUserDetails": null,
            "source": "MAPP_SDK",
            "updatedByMode": "API",
            "autoUpdateTime": 1701337437778,
            "events": [
                {
                    "eventType": "Communication Channels",
                    "updatedField": "ios",
                    "additionalFields": {
                        "previousValue": "fCyvtyp0MkXjl_Rv4XUZ2F:APA91bGR32O5Bia8L15AM_EoHbsT5pQ_4y8w2AbX6tHX1Rtf94sS7AnsAz28ZZDwdLxf3urtAuWe9vfpVnjdOzoBMdRPb41wxNBvHz_PPpQ7fwmul8rDSRuCcyziPunb6EnFU1mQYRKB",
                        "currentValue": "cpFx8lEHZ06Ylq_SrRwjU9:APA91bH4gZguDTS1NSI5IoWy4DxylMZRJy4GDLsnCpeFgay1yCOBH7Y4cJJdMJcHBgPHGslncacqQ-tLffuZ6_5Vn2krW4Jmq17R-rkYZRaubVzPmMm34efNeIREZ9nyhIVJfRX5Bt3G"
                    },
                    "associateEntities": null
                }
            ]
        },
        {
            "updatedByUser": null,
            "updatedBy": 75046492,
            "orgId": 100458,
            "entityType": "CUSTOMER",
            "entityId": 98662653,
            "createdOn": 1701150531857,
            "requestId": "8196d7eb19a27abeded436a85ea47628",
            "till": null,
            "store": null,
            "userContextDetails": null,
            "victimUserDetails": null,
            "survivorUserDetails": null,
            "source": "MAPP_SDK",
            "updatedByMode": "API",
            "autoUpdateTime": 1701150531854,
            "events": [
                {
                    "eventType": "Communication Channels",
                    "updatedField": "ios",
                    "additionalFields": {
                        "previousValue": "eurX_VU-AE1WgdyjjfsggR:APA91bGgwRs8VJXLNJgEPclGgjqgYERH1MClEzdZn9sdayr9rJSfWi8rs_7ptoNp4C-jz7gjGAw6HPQof5yRxXnJevEAdZryauwRfmwdE8s-5XELwa9dXT8lvXyWpa_1JCI_rJqUH4cQ",
                        "currentValue": "fCyvtyp0MkXjl_Rv4XUZ2F:APA91bGR32O5Bia8L15AM_EoHbsT5pQ_4y8w2AbX6tHX1Rtf94sS7AnsAz28ZZDwdLxf3urtAuWe9vfpVnjdOzoBMdRPb41wxNBvHz_PPpQ7fwmul8rDSRuCcyziPunb6EnFU1mQYRKB"
                    },
                    "associateEntities": null
                }
            ]
        },
        {
            "updatedByUser": null,
            "updatedBy": 75046492,
            "orgId": 100458,
            "entityType": "CUSTOMER",
            "entityId": 98662653,
            "createdOn": 1701149029363,
            "requestId": "37f37c616ff0a466019a46aef9ceeb14",
            "till": null,
            "store": null,
            "userContextDetails": null,
            "victimUserDetails": null,
            "survivorUserDetails": null,
            "source": "MAPP_SDK",
            "updatedByMode": "API",
            "autoUpdateTime": 1701149029360,
            "events": [
                {
                    "eventType": "Communication Channels",
                    "updatedField": "ios",
                    "additionalFields": {
                        "previousValue": "f3NaT7O-oks8u_s8KRni1F:APA91bHtmOxl-SlBKIkXcKutcotFyPd7-qJDdoVHty_PrhEshVukh5PubKAVWKRfgL_dwCDuSQ8tvDmHAG2TFvQQIzlz25WQCsZn4Rw_HpO-rNQz9mdjVkbMrdHQ6rhT7olPk65xSO_A",
                        "currentValue": "eurX_VU-AE1WgdyjjfsggR:APA91bGgwRs8VJXLNJgEPclGgjqgYERH1MClEzdZn9sdayr9rJSfWi8rs_7ptoNp4C-jz7gjGAw6HPQof5yRxXnJevEAdZryauwRfmwdE8s-5XELwa9dXT8lvXyWpa_1JCI_rJqUH4cQ"
                    },
                    "associateEntities": null
                }
            ]
        },
        {
            "updatedByUser": null,
            "updatedBy": 75046492,
            "orgId": 100458,
            "entityType": "CUSTOMER",
            "entityId": 98662653,
            "createdOn": 1700734124146,
            "requestId": "a157ac7ea8ef7b94ce13749f90d7f810",
            "till": null,
            "store": null,
            "userContextDetails": null,
            "victimUserDetails": null,
            "survivorUserDetails": null,
            "source": "MAPP_SDK",
            "updatedByMode": "API",
            "autoUpdateTime": 1700734124144,
            "events": [
                {
                    "eventType": "Communication Channels",
                    "updatedField": "ios",
                    "additionalFields": {
                        "previousValue": "cf_rAAwNY0Qdu9jQV_9XlY:APA91bEXMAvhlUbhLbQscJV2j5A6p-_Sd5sdiAjgp4waBkTXI5rW3nvVPsCv1SbJ2TPQtxZnv_b5r23FOgMU-ouMHAS4Vx-3BhNyUkZEik_fdg0-7MnVsuW06PWWt2fr8-LjzLMo4MAB",
                        "currentValue": "f3NaT7O-oks8u_s8KRni1F:APA91bHtmOxl-SlBKIkXcKutcotFyPd7-qJDdoVHty_PrhEshVukh5PubKAVWKRfgL_dwCDuSQ8tvDmHAG2TFvQQIzlz25WQCsZn4Rw_HpO-rNQz9mdjVkbMrdHQ6rhT7olPk65xSO_A"
                    },
                    "associateEntities": null
                }
            ]
        },
        {
            "updatedByUser": null,
            "updatedBy": 75083604,
            "orgId": 100458,
            "entityType": "CUSTOMER",
            "entityId": 98662653,
            "createdOn": 1700733054030,
            "requestId": "25b7780ed479ce80cd95326bcd2a3d91",
            "till": null,
            "store": null,
            "userContextDetails": null,
            "victimUserDetails": null,
            "survivorUserDetails": null,
            "source": "INSTORE",
            "updatedByMode": "API",
            "autoUpdateTime": 1700733053872,
            "events": [
                {
                    "eventType": "Identifiers",
                    "updatedField": "cardnumber",
                    "additionalFields": {
                        "previousValue": "NA",
                        "currentValue": "DIWALI000000001620232"
                    },
                    "associateEntities": null
                }
            ]
        },
        {
            "updatedByUser": null,
            "updatedBy": 75046492,
            "orgId": 100458,
            "entityType": "CUSTOMER",
            "entityId": 98662653,
            "createdOn": 1700726023943,
            "requestId": "28d3cc7165d6173369ddd5fa23cb6621",
            "till": null,
            "store": null,
            "userContextDetails": null,
            "victimUserDetails": null,
            "survivorUserDetails": null,
            "source": "MAPP_SDK",
            "updatedByMode": "API",
            "autoUpdateTime": 1700726023938,
            "events": [
                {
                    "eventType": "Communication Channels",
                    "updatedField": "ios",
                    "additionalFields": {
                        "previousValue": "cpFx8lEHZ06Ylq_SrRwjU9:APA91bH4gZguDTS1NSI5IoWy4DxylMZRJy4GDLsnCpeFgay1yCOBH7Y4cJJdMJcHBgPHGslncacqQ-tLffuZ6_5Vn2krW4Jmq17R-rkYZRaubVzPmMm34efNeIREZ9nyhIVJfRX5Bt3G",
                        "currentValue": "cf_rAAwNY0Qdu9jQV_9XlY:APA91bEXMAvhlUbhLbQscJV2j5A6p-_Sd5sdiAjgp4waBkTXI5rW3nvVPsCv1SbJ2TPQtxZnv_b5r23FOgMU-ouMHAS4Vx-3BhNyUkZEik_fdg0-7MnVsuW06PWWt2fr8-LjzLMo4MAB"
                    },
                    "associateEntities": null
                }
            ]
        }
    ],
    "pagination": {
        "totalElements": 51,
        "totalPages": 6,
        "numberOfElements": 10,
        "number": 1
    }
}
```
```json entityType=CUSTOMER&startDate=2023-12-05&endDate=2023-12-06
{
    "data": [
        {
            "updatedByUser": null,
            "updatedBy": 75046492,
            "orgId": 100458,
            "entityType": "CUSTOMER",
            "entityId": 98662653,
            "createdOn": 1701771489122,
            "requestId": "e250a1bc0543b223f69005df7d335841",
            "till": null,
            "store": null,
            "userContextDetails": null,
            "victimUserDetails": null,
            "survivorUserDetails": null,
            "source": "MAPP_SDK",
            "updatedByMode": "API",
            "autoUpdateTime": 1701771489120,
            "events": [
                {
                    "eventType": "Communication Channels",
                    "updatedField": "ios",
                    "additionalFields": {
                        "previousValue": "flzH44TBxkXLn3YOCInTIn:APA91bF5GOoTKTWMqyNH0m68rTefMOkMPPhuZtP0VjIYIVb-t6NndsTS6_7eUU-reXC_ra23mBjSxlt6jAlQw6paC2-am51WP8c2zSlLzaboZwtcR5CUP39Fa747m4U_aaq4hVebSLrc",
                        "currentValue": "dsjHnA-CjUqtj_UxKTLuXT:APA91bHSLlqOMzQel3OGpgOdLpu49G_7iN-5mIgWg9U2h4Wt2IY11qhY9iRNilH1j1jIANshMBneJdXriiO-1QRMBOLKglcl8hcis0xITXjH7tkYhdC-FzQzEk9wYG7O-sIcf3aFSLqo"
                    },
                    "associateEntities": null
                }
            ]
        },
        {
            "updatedByUser": null,
            "updatedBy": 75046492,
            "orgId": 100458,
            "entityType": "CUSTOMER",
            "entityId": 98662653,
            "createdOn": 1701771060123,
            "requestId": "25d715b71c24ac5f936391bdaded969b",
            "till": null,
            "store": null,
            "userContextDetails": null,
            "victimUserDetails": null,
            "survivorUserDetails": null,
            "source": "MAPP_SDK",
            "updatedByMode": "API",
            "autoUpdateTime": 1701771060120,
            "events": [
                {
                    "eventType": "Communication Channels",
                    "updatedField": "ios",
                    "additionalFields": {
                        "previousValue": "fCyvtyp0MkXjl_Rv4XUZ2F:APA91bGR32O5Bia8L15AM_EoHbsT5pQ_4y8w2AbX6tHX1Rtf94sS7AnsAz28ZZDwdLxf3urtAuWe9vfpVnjdOzoBMdRPb41wxNBvHz_PPpQ7fwmul8rDSRuCcyziPunb6EnFU1mQYRKB",
                        "currentValue": "flzH44TBxkXLn3YOCInTIn:APA91bF5GOoTKTWMqyNH0m68rTefMOkMPPhuZtP0VjIYIVb-t6NndsTS6_7eUU-reXC_ra23mBjSxlt6jAlQw6paC2-am51WP8c2zSlLzaboZwtcR5CUP39Fa747m4U_aaq4hVebSLrc"
                    },
                    "associateEntities": null
                }
            ]
        },
        {
            "updatedByUser": null,
            "updatedBy": 75046492,
            "orgId": 100458,
            "entityType": "CUSTOMER",
            "entityId": 98662653,
            "createdOn": 1701770457703,
            "requestId": "af0fae760c6d1496c4d52a42bd9c8bd8",
            "till": null,
            "store": null,
            "userContextDetails": null,
            "victimUserDetails": null,
            "survivorUserDetails": null,
            "source": "MAPP_SDK",
            "updatedByMode": "API",
            "autoUpdateTime": 1701770457700,
            "events": [
                {
                    "eventType": "Communication Channels",
                    "updatedField": "ios",
                    "additionalFields": {
                        "previousValue": "eurX_VU-AE1WgdyjjfsggR:APA91bGgwRs8VJXLNJgEPclGgjqgYERH1MClEzdZn9sdayr9rJSfWi8rs_7ptoNp4C-jz7gjGAw6HPQof5yRxXnJevEAdZryauwRfmwdE8s-5XELwa9dXT8lvXyWpa_1JCI_rJqUH4cQ",
                        "currentValue": "fCyvtyp0MkXjl_Rv4XUZ2F:APA91bGR32O5Bia8L15AM_EoHbsT5pQ_4y8w2AbX6tHX1Rtf94sS7AnsAz28ZZDwdLxf3urtAuWe9vfpVnjdOzoBMdRPb41wxNBvHz_PPpQ7fwmul8rDSRuCcyziPunb6EnFU1mQYRKB"
                    },
                    "associateEntities": null
                }
            ]
        }
    ],
    "pagination": {
        "totalElements": 3,
        "totalPages": 1,
        "numberOfElements": 3,
        "number": 0
    }
}
```
```json with victim and survivor details
{
    "data": [
        {
            "updatedByUser": null,
            "updatedBy": 75036445,
            "orgId": 100458,
            "entityType": "CUSTOMER",
            "entityId": 134094571,
            "createdOn": 1705560543018,
            "requestId": "7aeb16bd25b0412c4f86a5863255d74f",
            "till": null,
            "store": null,
            "userContextDetails": null,
            "victimUserDetails": 
{"firstName": "JAK",
"lastName": "GHI"
"email": "917288599612@gmail.com", "mobile": "917288599612",
"externalId": "917288599612externalId"}
            "survivorUserDetails": 
{
"firstName": "JAK",
"lastName": "GHI",
"email": "917288599611@gmail.com", "mobile": "917288599611",
"externalId": “917288599611externalId"},
            "source": "instore",
            "updatedByMode": "API",
            "autoUpdateTime": 1705560543014,
            "events": [
                {
                    "eventType": "Identifiers",
                    "updatedField": "externalId",
                    "additionalFields": {
                        "previousValue": null,
                        "currentValue": "917799889933"
                    },
                    "associateEntities": null
                }
            ]
        },
        {
            "updatedByUser": null,
            "updatedBy": 75070896,
            "orgId": 100458,
            "entityType": "CUSTOMER",
            "entityId": 134094571,
            "createdOn": 1692621110019,
            "requestId": "c2ba063e12bbbe2b4bfca322ed6f09d8",
            "till": null,
            "store": null,
            "userContextDetails": null,
            "victimUserDetails": null,
            "survivorUserDetails": null,
            "source": "INSTORE",
            "updatedByMode": "API",
            "autoUpdateTime": 1692621109828,
            "events": [
                {
                    "eventType": "Identifiers",
                    "updatedField": "cardnumber",
                    "additionalFields": {
                        "previousValue": "NA",
                        "currentValue": "ESL000000000110"
                    },
                    "associateEntities": null
                }
            ]
        }
    ],
    "pagination": {
        "totalElements": 2,
        "totalPages": 1,
        "numberOfElements": 2,
        "number": 0
    }
}
```

<Table>
  <thead>
    <tr>
      <th>
        Parameter
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        data
      </td>

      <td>
        A list containing details of each data entry.
      </td>
    </tr>

    <tr>
      <td>
        updatedByUser
      </td>

      <td>
        The username of the user who performed the update.
      </td>
    </tr>

    <tr>
      <td>
        updatedBy
      </td>

      <td>
        The unique identifier of the user who performed the update.
      </td>
    </tr>

    <tr>
      <td>
        orgId
      </td>

      <td>
        The organization ID to which the entity belongs.
      </td>
    </tr>

    <tr>
      <td>
        entityType
      </td>

      <td>
        The type of entity being updated (e.g., CUSTOMER, Standard Field, CardExtendedField).
      </td>
    </tr>

    <tr>
      <td>
        entityId
      </td>

      <td>
        The unique identifier of the entity being updated.
      </td>
    </tr>

    <tr>
      <td>
        createdOn
      </td>

      <td>
        The timestamp when the update was created.
      </td>
    </tr>

    <tr>
      <td>
        requestId
      </td>

      <td>
        A unique identifier for the request associated with the update.
      </td>
    </tr>

    <tr>
      <td>
        till
      </td>

      <td>
        Details about the till, including its code and name.
      </td>
    </tr>

    <tr>
      <td>
        store
      </td>

      <td>
        Details about the store, including its code, name, and external IDs.
      </td>
    </tr>

    <tr>
      <td>
        userContextDetails
      </td>

      <td>
        Additional user context details, if available. This is available if the user context details are added during the addition or update of the entity.
      </td>
    </tr>

    <tr>
      <td>
        victimUserDetails
      </td>

      <td>
        Information of the deactivated account whose data is merged into the surviving account. Includes the victim's first name, last name, mobile, email and external ID.
      </td>
    </tr>

    <tr>
      <td>
        survivorUserDetails
      </td>

      <td>
        Information of the active account that retains its data and incorporates details from the victim account. Includes the survivor's first name, last name, mobile, email and external ID.
      </td>
    </tr>

    <tr>
      <td>
        source
      </td>

      <td>
        The source of the update, e.g., "INSTORE".
      </td>
    </tr>

    <tr>
      <td>
        updatedByMode
      </td>

      <td>
        The mode by which the update was made, e.g., "API".
      </td>
    </tr>

    <tr>
      <td>
        autoUpdateTime
      </td>

      <td>
        The timestamp when the update occurred automatically.
      </td>
    </tr>

    <tr>
      <td>
        events
      </td>

      <td>
        An array of events associated with the update.
      </td>
    </tr>

    <tr>
      <td>
        * eventType
      </td>

      <td>
        The type of event (e.g., ExtendedField).
      </td>
    </tr>

    <tr>
      <td>
        * updatedField
      </td>

      <td>
        The field that was updated. (e.g., vehicle\_type).
      </td>
    </tr>

    <tr>
      <td>
        * additionalFields
      </td>

      <td>
        Additional fields associated with the event, including the current and previous values.
      </td>
    </tr>

    <tr>
      <td>
        \-- previousValue
      </td>

      <td>
        The previous value of the updated field.
      </td>
    </tr>

    <tr>
      <td>
        \-- currentValue
      </td>

      <td>
        The current value of the updated field.
      </td>
    </tr>

    <tr>
      <td>
        * associateEntities
      </td>

      <td>
        Details of the associated entities.
      </td>
    </tr>

    <tr>
      <td>
        pagination
      </td>

      <td>
        An object containing pagination details.
      </td>
    </tr>

    <tr>
      <td>
        totalElements
      </td>

      <td>
        The total number of elements.
      </td>
    </tr>

    <tr>
      <td>
        totalPages
      </td>

      <td>
        The total number of pages.
      </td>
    </tr>

    <tr>
      <td>
        numberOfElements
      </td>

      <td>
        The number of elements on the current page.
      </td>
    </tr>

    <tr>
      <td>
        number
      </td>

      <td>
        The current page number.
      </td>
    </tr>

    <tr>
      <td>
        additionalFields
      </td>

      <td>
        Applicable for events where the Organizational Unit (OU) is involved, such as a subscription status event. This object includes information such as the organization source ID (org ID), OU code, and OU ID.
      </td>
    </tr>
  </tbody>
</Table>