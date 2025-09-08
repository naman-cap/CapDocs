---
title: Get Events Meta
excerpt: Retrieves the specified event's metadata.
api:
  file: v2.json
  operationId: get-events-meta
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
Metadata refers to information about data. This API retrieves metadata for a specified event by using the event name. It fetches the details of the event's schema or structure as defined during its creation, detailing the various fields and their attributes.

# API endpoint example

`<https://eu.api.capillarytech.com/v2/events/meta?event_name=be_reserved>`

# Prerequisites

*   Authentication: Basic or OAuth credentials
*   Access group resource: Read access on Behavioural Events resource

# Resource information

|                       |              |
| :-------------------- | :----------- |
| URI                   | /events/meta |
| HTTP method           | GET          |
| Pagination supported? | NA           |
| Rate limit            | NA           |
| Batch support         | NA           |

# Query parameter

| Parameter (Parameters marked with \* are mandatory) | Description                                            |
| :-------------------------------------------------- | :----------------------------------------------------- |
| event\_name\*                                       | Name of the event for which the metadata is retrieved. |

```json Sample request
curl --location 'https://eu.api.capillarytech.com/v2/events/meta?event_name=be_reserved' \
--header 'Authorization: Basic mY2OWZmZmRkYg==' \
--header 'Cookie: _cfuvid=RY6QOmEmXhlkpkYzUT5aGlkDXWcSpLGwMXEa7suetWY-1719207183918-0.0.1.1-604800000'
```

# Response parameters

<Table align={["left","left","left"]}>
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
        clickEventsMeta
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
        -eventId
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
        -eventName
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
        -eventType
      </td>

      <td>
        String
      </td>

      <td>
        Specifies what the event is related to. Values: `USEREVENT`, `PRODUCTEVENT`, `COUPONEVENT`
      </td>
    </tr>

    <tr>
      <td>
        -actions
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
        -fields
      </td>

      <td>
        Object
      </td>

      <td>
        Object containing the details of the fields of the event.
      </td>
    </tr>

    <tr>
      <td>
        \-- name
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
        \-- type
      </td>

      <td>
        String
      </td>

      <td>
        Data type or data related to the field. Example: `STRING`, `DOUBLE`, `CUSTOMER`
      </td>
    </tr>

    <tr>
      <td>
        \-- attributes
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
        \--- accountId
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
        \---- valueType
      </td>

      <td>
        String
      </td>

      <td>
        Data type of the accountId field value. For example, `Boolean`, `Enum`, `String`.
      </td>
    </tr>

    <tr>
      <td>
        \--- addCustomerIfNotExists
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
        \---- value
      </td>

      <td>
        Boolean
      </td>

      <td>
        Specifies if customers should be added if they do not exist. Values: `True` - If customers do not exist, they are created.
        `False` - If customers do not exist, they are not created.
      </td>
    </tr>

    <tr>
      <td>
        \---- valueType
      </td>

      <td>
        String
      </td>

      <td>
        Data type of the `addCustomerIfNotExists` field value. For example, `Boolean`, `Enum`, `String`.
      </td>
    </tr>

    <tr>
      <td>
        \--- identifierType
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
        \---- value
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
        \---- valueType
      </td>

      <td>
        String
      </td>

      <td>
        Data type of the `identifierType` field value. For example, `Boolean`, `Enum`, `String`.
      </td>
    </tr>

    <tr>
      <td>
        \--- isRequired
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
        \---- value
      </td>

      <td>
        Boolean
      </td>

      <td>
        Indicates if the field is mandatory. Values: `True` - Required, `False` - Not required.
      </td>
    </tr>

    <tr>
      <td>
        \---- valueType
      </td>

      <td>
        String
      </td>

      <td>
        Data type of the `isRequired` field value. For example, `Boolean`, `Enum`, `String`.
      </td>
    </tr>

    <tr>
      <td>
        \--- source
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
        \---- value
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
        \---- valueType
      </td>

      <td>
        String
      </td>

      <td>
        Data type of the source field value. For example, `Boolean`, `Enum`, `String`.
      </td>
    </tr>

    <tr>
      <td>
        \--- isPsiData
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
        \---- value
      </td>

      <td>
        Boolean
      </td>

      <td>
        Indicates if PSI is present. Values: `True` - PSI present, `False` - No PSI.
      </td>
    </tr>

    <tr>
      <td>
        \---- valueType
      </td>

      <td>
        String
      </td>

      <td>
        Value indicating if Protected Sensitive Information is present. Values: `True` - PSI present, `False` - No PSI.
      </td>
    </tr>

    <tr>
      <td>
        \--- isUniqueKeyField
      </td>

      <td>
        Object
      </td>

      <td>
        Object containing information on isUniqueKeyField attribute. Enable to make the attribute a part of a unique key. By default, the event name and customer identifier are included in the unique key. When the isuniquekeyfield attribute is enabled, it is added to the unique key with the event name and customer identifier. This ensures that the combination of these elements remains unique and consistent. Refer [Enabling uniqueness check](https://docs.capillarytech.com/docs/setup-test-behavioral-events#/enabling-uniqueness-check) for more details.
      </td>
    </tr>

    <tr>
      <td>
        \---- value
      </td>

      <td>
        Boolean
      </td>

      <td>
        Value indicating if the field is a unique key field. Values: `True` - Part of unique key, `False` - Not part of unique key.
      </td>
    </tr>

    <tr>
      <td>
        \---- valueType
      </td>

      <td>
        String
      </td>

      <td>
        Data type of the isUniqueKeyField field value. For example, `Boolean`, `Enum`, `String`.
      </td>
    </tr>

    <tr>
      <td>
        \--- regex
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
        \---- valueType
      </td>

      <td>
        String
      </td>

      <td>
        Data type of the regex field value. For example, `Boolean`, `Enum`, `String`.
      </td>
    </tr>

    <tr>
      <td>
        \--- possibleValues
      </td>

      <td>
        Object
      </td>

      <td>
        Object containing the possible values for the field.
      </td>
    </tr>

    <tr>
      <td>
        \---- valueType
      </td>

      <td>
        String
      </td>

      <td>
        Data type of the possibleValues field value. For example, `Boolean`, `Enum`, `String`.
      </td>
    </tr>

    <tr>
      <td>
        \---- values
      </td>

      <td>
        Enum
      </td>

      <td>
        List of possible values.
      </td>
    </tr>

    <tr>
      <td>
        -orgId
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
        -status
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
        -testStatus
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
        -label
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
        -description
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
        -date
      </td>

      <td>
        Long
      </td>

      <td>
        Timestamp for the event in UNIX epoch format.
      </td>
    </tr>

    <tr>
      <td>
        -standardEvent
      </td>

      <td>
        Boolean
      </td>

      <td>
        Indicates if the event is standard or custom. `True` - Standard event,
        `False` - Custom event. For more information refer, [Types of Behavioral Events](https://docs.capillarytech.com/docs/setup-test-behavioral-events#/types-of-behavioral-events)
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
        Object containing information on field mapping. For more information, refer to [Transformer](https://docs.capillarytech.com/docs/setup-test-behavioral-events#/transformer)
      </td>
    </tr>

    <tr>
      <td>
        -defaultTransformerMapping
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
        -webEngageTransformerMapping
      </td>

      <td>
        Object
      </td>

      <td>
        Object containing information on mapping for WebEngage. For more information see, [WebEngage](https://docs.capillarytech.com/docs/setup-test-behavioral-events#/webengage).
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
  </tbody>
</Table>

```json Sample response
{
    "clickEventsMeta": {
        "eventId": "96d266fc6323a296701425011343c544",
        "eventName": "be_reserved",
        "eventType": "USEREVENT",
        "actions": [
            "EMFConsumer",
            "EIConsumer"
        ],
        "fields": [
            {
                "name": "customer_id",
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
                "name": "hotel_name",
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
            },
            {
                "name": "external_event_id",
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
            },
            {
                "name": "room_nights",
                "type": "ENUM",
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
                    "possibleValues": {
                        "valueType": "LIST",
                        "values": [
                            "1",
                            "2",
                            "3",
                            "4",
                            "5",
                            "6",
                            "7",
                            "8",
                            "9",
                            "10",
                            "11",
                            "12",
                            "13",
                            "14",
                            "15"
                        ]
                    }
                }
            },
            {
                "name": "age",
                "type": "DOUBLE",
                "attributes": {
                    "isPsiData": {
                        "value": "true",
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
            }
        ],
        "orgId": 100458,
        "status": "PUBLISHED",
        "testStatus": "VERIFIED",
        "label": "be_reserved",
        "description": "be_reserved",
        "date": 1719227213866,
        "standardEvent": false
    },
    "transformerMappings": {
        "defaultTransformerMapping": null,
        "webEngageTransformerMapping": null
    },
    "warnings": []
}
```