---
title: Get Org Events
excerpt: >-
  Retrieves all events configured for the org. This includes both standard and
  custom events.


  You can also use the query parameter to fetch details of a specific event.
api:
  file: v2.json
  operationId: get-event-details
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
# API endpoint example

`<http://eu.api.capillarytech.com/v2/events>`

# Prerequisites

*   Authentication: Basic or OAuth credentials
*   Access group resource: Read access on Behavioural Events resource

# Resource information

|                        |            |
| :--------------------- | :--------- |
| URI                    | /v2/events |
| HTTP Method            | GET        |
| Pagination             | No         |
| Batch support          | No         |
| Rate limit information | NA         |

# Request payload

```json Sample request
curl --location 'http://eu.api.capillarytech.com/v2/events' \
--header 'Authorization: Basic VzdWNlRkYg==' \
--header 'Cookie: _cfuvid=cVUZ35z5krdCM26evqA.B0plrMHwkF57TihY2N7Cp0k-1718948790910-0.0.1.1-604800000'
```

# Response parameters

<Table>
  <thead>
    <tr>
      <th>
        Parameter
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
        data
      </td>

      <td>
        Array of Objects
      </td>

      <td>
        Object containing event metadata and field mapping information.
      </td>
    </tr>

    <tr>
      <td>
        -clickEventsMeta
      </td>

      <td>
        Object
      </td>

      <td>
        Object containing metadata related to the event.
      </td>
    </tr>

    <tr>
      <td>
        \-- eventId
      </td>

      <td>
        String
      </td>

      <td>
        Unique identifier generated for the event at the time of its creation.
      </td>
    </tr>

    <tr>
      <td>
        \-- eventName
      </td>

      <td>
        String
      </td>

      <td>
        Name of the event.
      </td>
    </tr>

    <tr>
      <td>
        \-- actions
      </td>

      <td>
        Object
      </td>

      <td>
        Object containing a list of event handlers that process the event.
      </td>
    </tr>

    <tr>
      <td>
        \-- fields
      </td>

      <td>
        Array of Objects
      </td>

      <td>
        Object containing the details of the fields of the event.
      </td>
    </tr>

    <tr>
      <td>
        \--- name
      </td>

      <td>
        String
      </td>

      <td>
        Name of the field.
      </td>
    </tr>

    <tr>
      <td>
        \--- type
      </td>

      <td>
        String
      </td>

      <td>
        Data type or data related to the field. Example: STRING, DOUBLE, CUSTOMER
      </td>
    </tr>

    <tr>
      <td>
        \--- attributes
      </td>

      <td>
        Object
      </td>

      <td>
        Attributes associated with the field.
      </td>
    </tr>

    <tr>
      <td>
        \---- accountId
      </td>

      <td>
        Object
      </td>

      <td>
        Object containing customer account-related information for the field.
      </td>
    </tr>

    <tr>
      <td>
        \----- valueType
      </td>

      <td>
        String
      </td>

      <td>
        Data type of the value of accountId.
      </td>
    </tr>

    <tr>
      <td>
        \---- addCustomerIfNotExists
      </td>

      <td>
        Object
      </td>

      <td>
        Object containing information for adding customers if they do not exist.
      </td>
    </tr>

    <tr>
      <td>
        \----- value
      </td>

      <td>
        Boolean
      </td>

      <td>
        Specifies if customers should be added if they do not exist. Values: `True` - If customers do not exist, they should be created.
        `False` - If customers do not exist, they should not be created.
      </td>
    </tr>

    <tr>
      <td>
        \----- valueType
      </td>

      <td>
        String
      </td>

      <td>
        Indicates the data type of the value of `addCustomerIfNotExists`.
      </td>
    </tr>

    <tr>
      <td>
        \---- identifierType
      </td>

      <td>
        Object
      </td>

      <td>
        Contains information on customer identifier type.
      </td>
    </tr>

    <tr>
      <td>
        \----- value
      </td>

      <td>
        String
      </td>

      <td>
        Customer identifier name.
      </td>
    </tr>

    <tr>
      <td>
        \----- valueType
      </td>

      <td>
        String
      </td>

      <td>
        Data type of the value of `identifierType`.
      </td>
    </tr>

    <tr>
      <td>
        \---- isRequired
      </td>

      <td>
        Object
      </td>

      <td>
        Object containing information on whether the field is mandatory.
      </td>
    </tr>

    <tr>
      <td>
        \----- value
      </td>

      <td>
        Boolean
      </td>

      <td>
        Value indicating if the field is mandatory. Values: `True` - mandatory, `False` - not mandatory.
      </td>
    </tr>

    <tr>
      <td>
        \----- valueType
      </td>

      <td>
        String
      </td>

      <td>
        Data type of the value of `isRequired`.
      </td>
    </tr>

    <tr>
      <td>
        \---- source
      </td>

      <td>
        Object
      </td>

      <td>
        Contains information on the source of customer creation.
      </td>
    </tr>

    <tr>
      <td>
        \----- value
      </td>

      <td>
        String
      </td>

      <td>
        Source of customer creation.
      </td>
    </tr>

    <tr>
      <td>
        \----- valueType
      </td>

      <td>
        String
      </td>

      <td>
        Datatype of the value of `source`.
      </td>
    </tr>

    <tr>
      <td>
        \---- isPsiData
      </td>

      <td>
        Object
      </td>

      <td>
        Object indicating if the field contains Protected Sensitive Information. For more information refer, [Classify Potentially Sensitive Information (PSI)](https://docs.capillarytech.com/docs/classify-potentially-sensitive-information-psi#/)
      </td>
    </tr>

    <tr>
      <td>
        \----- value
      </td>

      <td>
        Boolean
      </td>

      <td>
        Value indicating if PSI is present. Values: `True` - PSI present, `False` - No PSI.
      </td>
    </tr>

    <tr>
      <td>
        \----- valueType
      </td>

      <td>
        String
      </td>

      <td>
        Datatype of the value of `isPsiData`.
      </td>
    </tr>

    <tr>
      <td>
        \---- regex
      </td>

      <td>
        Object
      </td>

      <td>
        Object containing information for regex.
      </td>
    </tr>

    <tr>
      <td>
        \----- valueType
      </td>

      <td>
        String
      </td>

      <td>
        Datatype of the value of regex.
      </td>
    </tr>

    <tr>
      <td>
        \-- orgId
      </td>

      <td>
        Integer
      </td>

      <td>
        Organisation ID for which the events are created.
      </td>
    </tr>

    <tr>
      <td>
        \-- status
      </td>

      <td>
        String
      </td>

      <td>
        Indicates if the event is published.
      </td>
    </tr>

    <tr>
      <td>
        \-- testStatus
      </td>

      <td>
        String
      </td>

      <td>
        Indicates if the event is verified for data flow.
      </td>
    </tr>

    <tr>
      <td>
        \-- label
      </td>

      <td>
        String
      </td>

      <td>
        Display name of the event.
      </td>
    </tr>

    <tr>
      <td>
        \-- description
      </td>

      <td>
        String
      </td>

      <td>
        Description of the event.
      </td>
    </tr>

    <tr>
      <td>
        \-- date
      </td>

      <td>
        Integer
      </td>

      <td>
        Timestamp for the event in UNIX epoch format.
      </td>
    </tr>

    <tr>
      <td>
        \-- standardEvent
      </td>

      <td>
        Boolean
      </td>

      <td>
        Indicates if the event is standard or custom. A value of `true` indicates it is a standard event, while `false` indicates it is a custom event.
      </td>
    </tr>

    <tr>
      <td>
        transformerMappings
      </td>

      <td>
        Object
      </td>

      <td>
        Object containing information on field mapping. For more information see, [Transformer](https://docs.capillarytech.com/docs/setup-test-behavioral-events#/transformer).
      </td>
    </tr>

    <tr>
      <td>
        \-- defaultTransformerMapping
      </td>

      <td>
        Object
      </td>

      <td>
        Object containing information on default field mapping.
      </td>
    </tr>

    <tr>
      <td>
        \--- eventNameMapping
      </td>

      <td>
        Object
      </td>

      <td>
        Object containing information on mapping the event name.
      </td>
    </tr>

    <tr>
      <td>
        \---- valueMap
      </td>

      <td>
        Object
      </td>

      <td>
        Object containing the event name for mapping.
      </td>
    </tr>

    <tr>
      <td>
        \--- eventFieldMappings
      </td>

      <td>
        Array of Objects
      </td>

      <td>
        Object containing information on the mapping of the event's fields.
      </td>
    </tr>

    <tr>
      <td>
        \---- eventFieldName
      </td>

      <td>
        String
      </td>

      <td>
        Name of the field for the event.
      </td>
    </tr>

    <tr>
      <td>
        \---- fieldName
      </td>

      <td>
        String
      </td>

      <td>
        Value the field is mapped to.
      </td>
    </tr>

    <tr>
      <td>
        \-- webEngageTransformerMapping
      </td>

      <td>
        Object
      </td>

      <td>
        Object containing information on mapping for [WebEngage](https://docs.capillarytech.com/docs/setup-test-behavioral-events#/webengage).
      </td>
    </tr>

    <tr>
      <td>
        \--- eventNameMapping
      </td>

      <td>
        Object
      </td>

      <td>
        Object containing information on mapping the event name.
      </td>
    </tr>

    <tr>
      <td>
        \---- valueMap
      </td>

      <td>
        Object
      </td>

      <td>
        Object containing the event name for mapping.
      </td>
    </tr>

    <tr>
      <td>
        \--- eventFieldMappings
      </td>

      <td>
        Array of Objects
      </td>

      <td>
        Object containing information on the mapping of the event's fields.
      </td>
    </tr>

    <tr>
      <td>
        \---- eventFieldName
      </td>

      <td>
        String
      </td>

      <td>
        Name of the field for the event.
      </td>
    </tr>

    <tr>
      <td>
        \---- fieldName
      </td>

      <td>
        String
      </td>

      <td>
        Value the field is mapped to.
      </td>
    </tr>

    <tr>
      <td>
        warnings
      </td>

      <td>
        Object
      </td>

      <td>
        Object containing a list of warning messages, if any.
      </td>
    </tr>

    <tr>
      <td>
        errors
      </td>

      <td>
        Object
      </td>

      <td>
        Object containing a list of error messages, if any.
      </td>
    </tr>
  </tbody>
</Table>

<br />

```json Sample response
{
    "data": [
        {
            "clickEventsMeta": {
                "eventId": "e5e99bc08aa62321978661fea1d750c4",
                "eventName": "Testing_3",
                "eventType": "USEREVENT",
                "actions": [
                    "EIConsumer"
                ],
                "fields": [
                    {
                        "name": "userId",
                        "type": "CUSTOMER",
                        "attributes": {
                            "accountId": {
                                "valueType": "ENUM"
                            },
                            "addCustomerIfNotExists": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "identifierType": {
                                "value": "userId",
                                "valueType": "ENUM"
                            },
                            "isRequired": {
                                "value": "true",
                                "valueType": "BOOLEAN"
                            },
                            "source": {
                                "value": "INSTORE",
                                "valueType": "ENUM"
                            }
                        }
                    },
                    {
                        "name": "deviceId",
                        "type": "STRING",
                        "attributes": {
                            "isPsiData": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "isRequired": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "isUniqueKeyField": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "regex": {
                                "valueType": "STRING"
                            }
                        }
                    },
                    {
                        "name": "Testing_3",
                        "type": "STRING",
                        "attributes": {
                            "isPsiData": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "isRequired": {
                                "value": "true",
                                "valueType": "BOOLEAN"
                            },
                            "isUniqueKeyField": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "regex": {
                                "valueType": "STRING"
                            }
                        }
                    }
                ],
                "orgId": 100737,
                "status": "UNPUBLISHED",
                "testStatus": "NOT_VERIFIED",
                "connectedOrgContext": {
                    "orgType": "STANDARD_ORG"
                },
                "label": "Testing_3",
                "description": "subscribe a Channel",
                "date": 1747636361544,
                "standardEvent": false
            },
            "transformerMappings": {
                "defaultTransformerMapping": null,
                "webEngageTransformerMapping": null
            }
        },
        {
            "clickEventsMeta": {
                "eventId": "a927234bff097b96f55d76af894d9268",
                "eventName": "TestEventWithDate",
                "eventType": "USEREVENT",
                "actions": [
                    "EMFConsumer",
                    "EIConsumer"
                ],
                "fields": [
                    {
                        "name": "CustomerId",
                        "type": "CUSTOMER",
                        "attributes": {
                            "accountId": {
                                "valueType": "ENUM"
                            },
                            "addCustomerIfNotExists": {
                                "value": "true",
                                "valueType": "BOOLEAN"
                            },
                            "identifierType": {
                                "value": "mobile",
                                "valueType": "ENUM"
                            },
                            "isRequired": {
                                "value": "true",
                                "valueType": "BOOLEAN"
                            },
                            "source": {
                                "value": "INSTORE",
                                "valueType": "ENUM"
                            }
                        }
                    },
                    {
                        "name": "createdDate",
                        "type": "DATE",
                        "attributes": {
                            "isRequired": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "isUniqueKeyField": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            }
                        }
                    }
                ],
                "orgId": 100737,
                "status": "PUBLISHED",
                "testStatus": "VERIFIED",
                "connectedOrgContext": {
                    "orgType": "STANDARD_ORG"
                },
                "label": "Date Event",
                "date": 1747636361544,
                "standardEvent": false
            },
            "transformerMappings": {
                "defaultTransformerMapping": null,
                "webEngageTransformerMapping": null
            }
        },
        {
            "clickEventsMeta": {
                "eventId": "98ed645f4af37c8e78f730ff05693de8",
                "eventName": "Testing_2",
                "eventType": "USEREVENT",
                "actions": [
                    "EIConsumer"
                ],
                "fields": [
                    {
                        "name": "userId",
                        "type": "CUSTOMER",
                        "attributes": {
                            "accountId": {
                                "valueType": "ENUM"
                            },
                            "addCustomerIfNotExists": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "identifierType": {
                                "value": "userId",
                                "valueType": "ENUM"
                            },
                            "isRequired": {
                                "value": "true",
                                "valueType": "BOOLEAN"
                            },
                            "source": {
                                "value": "INSTORE",
                                "valueType": "ENUM"
                            }
                        }
                    },
                    {
                        "name": "deviceId",
                        "type": "STRING",
                        "attributes": {
                            "isPsiData": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "isRequired": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "isUniqueKeyField": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "regex": {
                                "valueType": "STRING"
                            }
                        }
                    },
                    {
                        "name": "Testing_2",
                        "type": "STRING",
                        "attributes": {
                            "isPsiData": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "isRequired": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "isUniqueKeyField": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "regex": {
                                "valueType": "STRING"
                            }
                        }
                    }
                ],
                "orgId": 100737,
                "status": "UNPUBLISHED",
                "testStatus": "NOT_VERIFIED",
                "connectedOrgContext": {
                    "orgType": "STANDARD_ORG"
                },
                "label": "Testing_1",
                "description": "Unsubscribe a Channel",
                "date": 1747636361544,
                "standardEvent": false
            },
            "transformerMappings": {
                "defaultTransformerMapping": null,
                "webEngageTransformerMapping": null
            }
        },
        {
            "clickEventsMeta": {
                "eventId": "eeecd8aa478ec24f5477fdadbaa20c1b",
                "eventName": "UCCtesttarget3",
                "eventType": "USEREVENT",
                "actions": [
                    "EMFConsumer",
                    "EIConsumer"
                ],
                "fields": [
                    {
                        "name": "userID",
                        "type": "CUSTOMER",
                        "attributes": {
                            "accountId": {
                                "valueType": "ENUM"
                            },
                            "addCustomerIfNotExists": {
                                "value": "true",
                                "valueType": "BOOLEAN"
                            },
                            "identifierType": {
                                "value": "mobile",
                                "valueType": "ENUM"
                            },
                            "isRequired": {
                                "value": "true",
                                "valueType": "BOOLEAN"
                            },
                            "source": {
                                "value": "INSTORE",
                                "valueType": "ENUM"
                            }
                        }
                    },
                    {
                        "name": "points",
                        "type": "DOUBLE",
                        "attributes": {
                            "isPsiData": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "isRequired": {
                                "value": "true",
                                "valueType": "BOOLEAN"
                            },
                            "isUniqueKeyField": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            }
                        }
                    }
                ],
                "orgId": 100737,
                "status": "PUBLISHED",
                "testStatus": "VERIFIED",
                "connectedOrgContext": {
                    "orgType": "STANDARD_ORG"
                },
                "label": "UCCtesttarget3",
                "date": 1747636361544,
                "standardEvent": false
            },
            "transformerMappings": {
                "defaultTransformerMapping": null,
                "webEngageTransformerMapping": null
            }
        },
        {
            "clickEventsMeta": {
                "eventId": "cda868ab8e45f92627424685fc9aa419",
                "eventName": "UCCtesttarget2",
                "actions": [
                    "EIConsumer",
                    "EMFConsumer"
                ],
                "fields": [
                    {
                        "name": "userId",
                        "type": "CUSTOMER",
                        "attributes": {
                            "accountId": {
                                "valueType": "ENUM"
                            },
                            "addCustomerIfNotExists": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "identifierType": {
                                "value": "userId",
                                "valueType": "ENUM"
                            },
                            "isRequired": {
                                "value": "true",
                                "valueType": "BOOLEAN"
                            },
                            "source": {
                                "value": "INSTORE",
                                "valueType": "ENUM"
                            }
                        }
                    },
                    {
                        "name": "deviceId",
                        "type": "STRING",
                        "attributes": {
                            "isPsiData": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "isRequired": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "isUniqueKeyField": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "regex": {
                                "valueType": "STRING"
                            }
                        }
                    },
                    {
                        "name": "UCCtesttarget2",
                        "type": "STRING",
                        "attributes": {
                            "isPsiData": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "isRequired": {
                                "value": "true",
                                "valueType": "BOOLEAN"
                            },
                            "isUniqueKeyField": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "regex": {
                                "valueType": "STRING"
                            }
                        }
                    },
                    {
                        "name": "points",
                        "type": "DOUBLE",
                        "attributes": {
                            "isPsiData": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "isRequired": {
                                "value": "true",
                                "valueType": "BOOLEAN"
                            },
                            "isUniqueKeyField": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            }
                        }
                    }
                ],
                "orgId": 100737,
                "status": "UNPUBLISHED",
                "testStatus": "NOT_VERIFIED",
                "connectedOrgContext": {
                    "orgType": "STANDARD_ORG"
                },
                "label": "UCCtesttarget2",
                "description": "un/subscribe a Channel",
                "date": 1747636361544,
                "standardEvent": false
            },
            "transformerMappings": {
                "defaultTransformerMapping": null,
                "webEngageTransformerMapping": null
            }
        },
        {
            "clickEventsMeta": {
                "eventId": "516f327076e55fcc52afb9592e3c8ffd",
                "eventName": "Testing_1",
                "actions": [
                    "EIConsumer",
                    "EMFConsumer"
                ],
                "fields": [
                    {
                        "name": "userId",
                        "type": "CUSTOMER",
                        "attributes": {
                            "accountId": {
                                "valueType": "ENUM"
                            },
                            "addCustomerIfNotExists": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "identifierType": {
                                "value": "userId",
                                "valueType": "ENUM"
                            },
                            "isRequired": {
                                "value": "true",
                                "valueType": "BOOLEAN"
                            },
                            "source": {
                                "value": "INSTORE",
                                "valueType": "ENUM"
                            }
                        }
                    },
                    {
                        "name": "deviceId",
                        "type": "STRING",
                        "attributes": {
                            "isPsiData": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "isRequired": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "isUniqueKeyField": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "regex": {
                                "valueType": "STRING"
                            }
                        }
                    },
                    {
                        "name": "eventTime",
                        "type": "STRING",
                        "attributes": {
                            "isPsiData": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "isRequired": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "isUniqueKeyField": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "regex": {
                                "valueType": "STRING"
                            }
                        }
                    }
                ],
                "orgId": 100737,
                "status": "UNPUBLISHED",
                "testStatus": "NOT_VERIFIED",
                "connectedOrgContext": {
                    "orgType": "STANDARD_ORG"
                },
                "label": "Testing_1",
                "description": "Unsubscribe a Channel",
                "date": 1747636361544,
                "standardEvent": false
            },
            "transformerMappings": {
                "defaultTransformerMapping": null,
                "webEngageTransformerMapping": null
            }
        },
        {
            "clickEventsMeta": {
                "eventId": "6cb354c56da0d8fd555ea7296a173f69",
                "eventName": "TestBE-Rutuja",
                "actions": [
                    "EIConsumer",
                    "EMFConsumer"
                ],
                "fields": [
                    {
                        "name": "customer",
                        "type": "CUSTOMER",
                        "attributes": {
                            "accountId": {
                                "valueType": "ENUM"
                            },
                            "addCustomerIfNotExists": {
                                "value": "false",
                                "valueType": "Boolean"
                            },
                            "identifierType": {
                                "value": "mobile",
                                "valueType": "ENUM"
                            },
                            "isRequired": {
                                "value": "true",
                                "valueType": "BOOLEAN"
                            },
                            "source": {
                                "value": "INSTORE",
                                "valueType": "ENUM"
                            }
                        }
                    },
                    {
                        "name": "String",
                        "type": "TILLCODE",
                        "attributes": {
                            "isRequired": {
                                "value": "false",
                                "valueType": "Boolean"
                            },
                            "isUniqueKeyField": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            }
                        }
                    }
                ],
                "orgId": 100737,
                "status": "PUBLISHED",
                "testStatus": "VERIFIED",
                "connectedOrgContext": {
                    "orgType": "STANDARD_ORG"
                },
                "description": "This is a demo event created && updated by Rutuja Hatwar",
                "date": 1747636361544,
                "standardEvent": false
            },
            "transformerMappings": {
                "defaultTransformerMapping": null,
                "webEngageTransformerMapping": null
            }
        },
        {
            "clickEventsMeta": {
                "eventId": "f7d31950cc2ef1fbb3c03af1b00207a1",
                "eventName": "Group_User_Event",
                "eventType": "USEREVENT",
                "actions": [
                    "EMFConsumer"
                ],
                "fields": [
                    {
                        "name": "customer",
                        "type": "CUSTOMER",
                        "attributes": {
                            "accountId": {
                                "valueType": "ENUM"
                            },
                            "addCustomerIfNotExists": {
                                "value": "true",
                                "valueType": "Boolean"
                            },
                            "identifierType": {
                                "value": "mobile",
                                "valueType": "ENUM"
                            },
                            "isRequired": {
                                "value": "true",
                                "valueType": "BOOLEAN"
                            },
                            "source": {
                                "value": "INSTORE",
                                "valueType": "ENUM"
                            }
                        }
                    },
                    {
                        "name": "String",
                        "type": "TILLCODE",
                        "attributes": {
                            "isRequired": {
                                "value": "false",
                                "valueType": "Boolean"
                            },
                            "isUniqueKeyField": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            }
                        }
                    },
                    {
                        "name": "enum",
                        "type": "GROUPID",
                        "attributes": {
                            "accountId": {
                                "valueType": "ENUM"
                            },
                            "groupIdentifierType": {
                                "value": "GroupExternalId",
                                "valueType": "ENUM"
                            },
                            "identifierType": {
                                "value": "userId",
                                "valueType": "ENUM"
                            },
                            "isRequired": {
                                "value": "false",
                                "valueType": "Boolean"
                            },
                            "isUniqueKeyField": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "source": {
                                "value": "INSTORE",
                                "valueType": "ENUM"
                            }
                        }
                    }
                ],
                "orgId": 100737,
                "status": "PUBLISHED",
                "testStatus": "VERIFIED",
                "connectedOrgContext": {
                    "orgType": "STANDARD_ORG"
                },
                "date": 1747636361544,
                "standardEvent": false
            },
            "transformerMappings": {
                "defaultTransformerMapping": null,
                "webEngageTransformerMapping": null
            }
        },
        {
            "clickEventsMeta": {
                "eventId": "8dc87bcc1a938e5196f0f69b3a6f4ba4",
                "eventName": "DemoTest20250428",
                "eventType": "PRODUCTEVENT",
                "actions": [
                    "EMFConsumer"
                ],
                "fields": [
                    {
                        "name": "customer",
                        "type": "CUSTOMER",
                        "attributes": {
                            "accountId": {
                                "valueType": "ENUM"
                            },
                            "addCustomerIfNotExists": {
                                "value": "true",
                                "valueType": "Boolean"
                            },
                            "identifierType": {
                                "value": "mobile",
                                "valueType": "ENUM"
                            },
                            "isRequired": {
                                "value": "true",
                                "valueType": "BOOLEAN"
                            },
                            "source": {
                                "value": "INSTORE",
                                "valueType": "ENUM"
                            }
                        }
                    },
                    {
                        "name": "rutuja_capillary",
                        "type": "TILLCODE",
                        "attributes": {
                            "isRequired": {
                                "value": "true",
                                "valueType": "Boolean"
                            },
                            "isUniqueKeyField": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            }
                        }
                    },
                    {
                        "name": "sku",
                        "type": "PRODUCTSKU",
                        "attributes": {
                            "isRequired": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "isUniqueKeyField": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            }
                        }
                    },
                    {
                        "name": "Sparkles",
                        "type": "DOUBLE",
                        "attributes": {
                            "isPsiData": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "isRequired": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "isUniqueKeyField": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            }
                        }
                    },
                    {
                        "name": "Bricks",
                        "type": "DOUBLE",
                        "attributes": {
                            "isPsiData": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "isRequired": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "isUniqueKeyField": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            }
                        }
                    },
                    {
                        "name": "Cement",
                        "type": "DOUBLE",
                        "attributes": {
                            "isPsiData": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "isRequired": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "isUniqueKeyField": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            }
                        }
                    },
                    {
                        "name": "Names",
                        "type": "STRING",
                        "attributes": {
                            "isPsiData": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "isRequired": {
                                "value": "true",
                                "valueType": "BOOLEAN"
                            },
                            "isUniqueKeyField": {
                                "value": "true",
                                "valueType": "BOOLEAN"
                            },
                            "regex": {
                                "valueType": "STRING"
                            }
                        }
                    }
                ],
                "orgId": 100737,
                "status": "UNPUBLISHED",
                "testStatus": "NOT_VERIFIED",
                "connectedOrgContext": {
                    "orgType": "STANDARD_ORG"
                },
                "date": 1747636361544,
                "standardEvent": false
            },
            "transformerMappings": {
                "defaultTransformerMapping": null,
                "webEngageTransformerMapping": null
            }
        },
        {
            "clickEventsMeta": {
                "eventId": "ae7d505b4e3288168a234c5e9f472b00",
                "eventName": "categoryViewed",
                "actions": [
                    "EIConsumer",
                    "EMFConsumer"
                ],
                "fields": [
                    {
                        "name": "customerId",
                        "type": "CUSTOMER",
                        "attributes": {
                            "accountId": {
                                "valueType": "ENUM"
                            },
                            "addCustomerIfNotExists": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "identifierType": {
                                "value": "MOBILE",
                                "valueType": "ENUM"
                            },
                            "isRequired": {
                                "value": "true",
                                "valueType": "BOOLEAN"
                            },
                            "source": {
                                "value": "INSTORE",
                                "valueType": "ENUM"
                            }
                        }
                    },
                    {
                        "name": "categoryCode",
                        "type": "PRODUCTCATEGORY",
                        "attributes": {
                            "isRequired": {
                                "value": "true",
                                "valueType": "BOOLEAN"
                            },
                            "isUniqueKeyField": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            }
                        }
                    }
                ],
                "orgId": 100737,
                "status": "PUBLISHED",
                "testStatus": "VERIFIED",
                "connectedOrgContext": {
                    "orgType": "STANDARD_ORG"
                },
                "label": "Category Viewed",
                "date": 1747636361544,
                "standardEvent": false
            },
            "transformerMappings": {
                "defaultTransformerMapping": null,
                "webEngageTransformerMapping": null
            }
        },
        {
            "clickEventsMeta": {
                "eventId": "3631d781a9ac9fee518bf6910d77a271",
                "eventName": "TestEvent1",
                "eventType": "PRODUCTEVENT",
                "actions": [
                    "EMFConsumer"
                ],
                "fields": [
                    {
                        "name": "customer",
                        "type": "CUSTOMER",
                        "attributes": {
                            "accountId": {
                                "valueType": "ENUM"
                            },
                            "addCustomerIfNotExists": {
                                "value": "true",
                                "valueType": "Boolean"
                            },
                            "identifierType": {
                                "value": "mobile",
                                "valueType": "ENUM"
                            },
                            "isRequired": {
                                "value": "true",
                                "valueType": "BOOLEAN"
                            },
                            "source": {
                                "value": "INSTORE",
                                "valueType": "ENUM"
                            }
                        }
                    },
                    {
                        "name": "till",
                        "type": "TILLCODE",
                        "attributes": {
                            "isRequired": {
                                "value": "true",
                                "valueType": "Boolean"
                            },
                            "isUniqueKeyField": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            }
                        }
                    },
                    {
                        "name": "sku",
                        "type": "PRODUCTSKU",
                        "attributes": {
                            "isRequired": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "isUniqueKeyField": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            }
                        }
                    },
                    {
                        "name": "Sparkles",
                        "type": "DOUBLE",
                        "attributes": {
                            "isPsiData": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "isRequired": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "isUniqueKeyField": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            }
                        }
                    },
                    {
                        "name": "Bricks",
                        "type": "DOUBLE",
                        "attributes": {
                            "isPsiData": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "isRequired": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "isUniqueKeyField": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            }
                        }
                    },
                    {
                        "name": "Cement",
                        "type": "DOUBLE",
                        "attributes": {
                            "isPsiData": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "isRequired": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "isUniqueKeyField": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            }
                        }
                    },
                    {
                        "name": "Names",
                        "type": "STRING",
                        "attributes": {
                            "isPsiData": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "isRequired": {
                                "value": "true",
                                "valueType": "BOOLEAN"
                            },
                            "isUniqueKeyField": {
                                "value": "true",
                                "valueType": "BOOLEAN"
                            },
                            "regex": {
                                "valueType": "STRING"
                            }
                        }
                    }
                ],
                "orgId": 100737,
                "status": "UNPUBLISHED",
                "testStatus": "NOT_VERIFIED",
                "connectedOrgContext": {
                    "orgType": "STANDARD_ORG"
                },
                "date": 1747636361544,
                "standardEvent": false
            },
            "transformerMappings": {
                "defaultTransformerMapping": null,
                "webEngageTransformerMapping": null
            }
        },
        {
            "clickEventsMeta": {
                "eventId": "1390fd606e560de05dd45a6bd6555b7f",
                "eventName": "addedToCart",
                "eventType": "PRODUCTEVENT",
                "actions": [
                    "EIConsumer",
                    "EMFConsumer"
                ],
                "fields": [
                    {
                        "name": "customerId",
                        "type": "CUSTOMER",
                        "attributes": {
                            "accountId": {
                                "valueType": "ENUM"
                            },
                            "addCustomerIfNotExists": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "identifierType": {
                                "value": "MOBILE",
                                "valueType": "ENUM"
                            },
                            "isRequired": {
                                "value": "true",
                                "valueType": "BOOLEAN"
                            },
                            "source": {
                                "value": "INSTORE",
                                "valueType": "ENUM"
                            }
                        },
                        "standardField": true
                    },
                    {
                        "name": "cartId",
                        "type": "STRING",
                        "attributes": {
                            "isPsiData": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "isRequired": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "isUniqueKeyField": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "regex": {
                                "valueType": "STRING"
                            }
                        },
                        "standardField": true
                    },
                    {
                        "name": "skuCode",
                        "type": "PRODUCTSKU",
                        "attributes": {
                            "isRequired": {
                                "value": "true",
                                "valueType": "BOOLEAN"
                            },
                            "isUniqueKeyField": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            }
                        },
                        "standardField": true
                    },
                    {
                        "name": "brandCode",
                        "type": "PRODUCTBRAND",
                        "attributes": {
                            "isRequired": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "isUniqueKeyField": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            }
                        },
                        "standardField": true
                    },
                    {
                        "name": "categoryCode",
                        "type": "PRODUCTCATEGORY",
                        "attributes": {
                            "isRequired": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "isUniqueKeyField": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            }
                        },
                        "standardField": true
                    },
                    {
                        "name": "quantity",
                        "type": "DOUBLE",
                        "attributes": {
                            "isPsiData": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "isRequired": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "isUniqueKeyField": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            }
                        },
                        "standardField": true
                    },
                    {
                        "name": "price",
                        "type": "DOUBLE",
                        "attributes": {
                            "isPsiData": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "isRequired": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "isUniqueKeyField": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            }
                        },
                        "standardField": true
                    },
                    {
                        "name": "productName",
                        "type": "STRING",
                        "attributes": {
                            "isPsiData": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "isRequired": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "isUniqueKeyField": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "regex": {
                                "valueType": "STRING"
                            }
                        },
                        "standardField": true
                    },
                    {
                        "name": "productType",
                        "type": "STRING",
                        "attributes": {
                            "isPsiData": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "isRequired": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "isUniqueKeyField": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "regex": {
                                "valueType": "STRING"
                            }
                        },
                        "standardField": true
                    }
                ],
                "orgId": 100737,
                "status": "UNPUBLISHED",
                "testStatus": "NOT_VERIFIED",
                "connectedOrgContext": {
                    "orgType": "STANDARD_ORG"
                },
                "label": "Added To Cart",
                "description": "Added To Cart",
                "date": 1747636361544,
                "standardEvent": true
            },
            "transformerMappings": {
                "defaultTransformerMapping": null,
                "webEngageTransformerMapping": null
            }
        },
        {
            "clickEventsMeta": {
                "eventId": "2fedcc95da465d06504b8fe9e36917b4",
                "eventName": "TestingEvent_FE",
                "eventType": "USEREVENT",
                "actions": [
                    "EMFConsumer",
                    "EIConsumer"
                ],
                "fields": [
                    {
                        "name": "Customer",
                        "type": "CUSTOMER",
                        "attributes": {
                            "accountId": {
                                "valueType": "ENUM"
                            },
                            "addCustomerIfNotExists": {
                                "value": "true",
                                "valueType": "BOOLEAN"
                            },
                            "identifierType": {
                                "value": "mobile",
                                "valueType": "ENUM"
                            },
                            "isRequired": {
                                "value": "true",
                                "valueType": "BOOLEAN"
                            },
                            "source": {
                                "value": "INSTORE",
                                "valueType": "ENUM"
                            }
                        }
                    }
                ],
                "orgId": 100737,
                "status": "PUBLISHED",
                "testStatus": "VERIFIED",
                "connectedOrgContext": {
                    "orgType": "STANDARD_ORG"
                },
                "label": "TestingEvent_FE",
                "date": 1747636361545,
                "standardEvent": false
            },
            "transformerMappings": {
                "defaultTransformerMapping": null,
                "webEngageTransformerMapping": null
            }
        },
        {
            "clickEventsMeta": {
                "eventId": "45319f76a7d8d9a8c108ecc75bd85767",
                "eventName": "promotionViewed",
                "actions": [
                    "EIConsumer",
                    "EMFConsumer"
                ],
                "fields": [
                    {
                        "name": "customerId",
                        "type": "CUSTOMER",
                        "attributes": {
                            "accountId": {
                                "valueType": "ENUM"
                            },
                            "addCustomerIfNotExists": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "identifierType": {
                                "value": "MOBILE",
                                "valueType": "ENUM"
                            },
                            "isRequired": {
                                "value": "true",
                                "valueType": "BOOLEAN"
                            },
                            "source": {
                                "value": "INSTORE",
                                "valueType": "ENUM"
                            }
                        }
                    },
                    {
                        "name": "promotionId",
                        "type": "STRING",
                        "attributes": {
                            "isPsiData": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "isRequired": {
                                "value": "true",
                                "valueType": "BOOLEAN"
                            },
                            "isUniqueKeyField": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "regex": {
                                "valueType": "STRING"
                            }
                        }
                    },
                    {
                        "name": "promotionName",
                        "type": "STRING",
                        "attributes": {
                            "isPsiData": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "isRequired": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "isUniqueKeyField": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "regex": {
                                "valueType": "STRING"
                            }
                        }
                    }
                ],
                "orgId": 100737,
                "status": "PUBLISHED",
                "testStatus": "VERIFIED",
                "connectedOrgContext": {
                    "orgType": "STANDARD_ORG"
                },
                "label": "Promotion Viewed",
                "date": 1747636361552,
                "standardEvent": false
            },
            "transformerMappings": {
                "defaultTransformerMapping": {
                    "eventNameMapping": {
                        "valueMap": {
                            "promotionViewed": "promotionViewed"
                        }
                    },
                    "eventFieldMappings": [
                        {
                            "eventFieldName": "customerId"
                        },
                        {
                            "eventFieldName": "promotionId"
                        },
                        {
                            "eventFieldName": "promotionName"
                        }
                    ]
                },
                "webEngageTransformerMapping": null
            }
        },
        {
            "clickEventsMeta": {
                "eventId": "dbfca3b86bd501fa6fa92b0c682b8f58",
                "eventName": "Event_Rutuja",
                "actions": [
                    "EIConsumer"
                ],
                "fields": [
                    {
                        "name": "customer",
                        "type": "CUSTOMER",
                        "attributes": {
                            "accountId": {
                                "valueType": "ENUM"
                            },
                            "addCustomerIfNotExists": {
                                "value": "false",
                                "valueType": "Boolean"
                            },
                            "identifierType": {
                                "value": "mobile",
                                "valueType": "ENUM"
                            },
                            "isRequired": {
                                "value": "true",
                                "valueType": "BOOLEAN"
                            },
                            "source": {
                                "value": "INSTORE",
                                "valueType": "ENUM"
                            }
                        }
                    },
                    {
                        "name": "String",
                        "type": "TILLCODE",
                        "attributes": {
                            "isRequired": {
                                "value": "false",
                                "valueType": "Boolean"
                            },
                            "isUniqueKeyField": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            }
                        }
                    }
                ],
                "orgId": 100737,
                "status": "PUBLISHED",
                "testStatus": "VERIFIED",
                "connectedOrgContext": {
                    "orgType": "STANDARD_ORG"
                },
                "date": 1747636361552,
                "standardEvent": false
            },
            "transformerMappings": {
                "defaultTransformerMapping": null,
                "webEngageTransformerMapping": null
            }
        },
        {
            "clickEventsMeta": {
                "eventId": "f51e85918c4496c0fefad7859cffb430",
                "eventName": "testing_event",
                "eventType": "USEREVENT",
                "actions": [
                    "EIConsumer"
                ],
                "fields": [
                    {
                        "name": "userId",
                        "type": "CUSTOMER",
                        "attributes": {
                            "accountId": {
                                "valueType": "ENUM"
                            },
                            "addCustomerIfNotExists": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "identifierType": {
                                "value": "userId",
                                "valueType": "ENUM"
                            },
                            "isRequired": {
                                "value": "true",
                                "valueType": "BOOLEAN"
                            },
                            "source": {
                                "value": "INSTORE",
                                "valueType": "ENUM"
                            }
                        }
                    },
                    {
                        "name": "deviceId",
                        "type": "STRING",
                        "attributes": {
                            "isPsiData": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "isRequired": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "isUniqueKeyField": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "regex": {
                                "valueType": "STRING"
                            }
                        }
                    },
                    {
                        "name": "testing_event",
                        "type": "STRING",
                        "attributes": {
                            "isPsiData": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "isRequired": {
                                "value": "true",
                                "valueType": "BOOLEAN"
                            },
                            "isUniqueKeyField": {
                                "value": "false",
                                "valueType": "BOOLEAN"
                            },
                            "regex": {
                                "valueType": "STRING"
                            }
                        }
                    }
                ],
                "orgId": 100737,
                "status": "UNPUBLISHED",
                "testStatus": "NOT_VERIFIED",
                "connectedOrgContext": {
                    "orgType": "STANDARD_ORG"
                },
                "label": "testing_event",
                "description": "un/subscribe a Channel",
                "date": 1747636361552,
                "standardEvent": false
            },
            "transformerMappings": {
                "defaultTransformerMapping": null,
                "webEngageTransformerMapping": null
            }
        },
        {
            "clickEventsMeta": {
                "eventId": "92b06dd34906b983474a3414b72bb635",
                "eventName": "TestingEvent_FE_Rutuja",
                "eventType": "USEREVENT",
                "actions": [
                    "EMFConsumer",
                    "EIConsumer"
                ],
                "fields": [
                    {
                        "name": "CustomerId",
                        "type": "CUSTOMER",
                        "attributes": {
                            "accountId": {
                                "valueType": "ENUM"
                            },
                            "addCustomerIfNotExists": {
                                "value": "true",
                                "valueType": "BOOLEAN"
                            },
                            "identifierType": {
                                "value": "mobile",
                                "valueType": "ENUM"
                            },
                            "isRequired": {
                                "value": "true",
                                "valueType": "BOOLEAN"
                            },
                            "source": {
                                "value": "INSTORE",
                                "valueType": "ENUM"
                            }
                        }
                    }
                ],
                "orgId": 100737,
                "status": "PUBLISHED",
                "testStatus": "VERIFIED",
                "connectedOrgContext": {
                    "orgType": "STANDARD_ORG"
                },
                "label": "TestingEvent_FE",
                "date": 1747636361552,
                "standardEvent": false
            },
            "transformerMappings": {
                "defaultTransformerMapping": null,
                "webEngageTransformerMapping": null
            }
        }
    ],
    "warnings": [],
    "errors": []
}
```