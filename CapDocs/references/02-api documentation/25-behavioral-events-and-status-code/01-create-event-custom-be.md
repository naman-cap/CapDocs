---
title: Create Event (Custom)
excerpt: Lets you create a new behavioral event.
api:
  file: v2.json
  operationId: create-event-custom
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
## Authentication

* Valid OAuth 2.0 authentication token must be included in the request header.
* Use the X-CAP-API-OAUTH-TOKEN header to pass the token.

## Request Body Parameters

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
        eventName\*
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
        actions\*
      </td>

      <td>
        enum
      </td>

      <td>
        Destination of the event. Values: `EMFConsumer` for EMF related events: Loyalty, DVS, and Communication, EIConsumer for Essential Insights.
      </td>
    </tr>

    <tr>
      <td>
        description
      </td>

      <td>
        string
      </td>

      <td>
        Short description for the event.
      </td>
    </tr>

    <tr>
      <td>
        fields
      </td>

      <td>
        obj
      </td>

      <td>
        Configure fields for the current event with attributes: `name`, `type`, and `value`. The various attributes available are:
        -`addCustomerIfNotExists` - Adds the customer if the customer does not exist.
        -`isRequired` - Marks the attribute as mandatory
        -`isUniqueKeyField `- Includes the attribute, to the unique key. Once defined as a unique key field, this attribute becomes mandatory and needs to be marked as `isRequired`. By default, customer identifier and event name are already part of the unique key.
        -`isPsiData` - Mark the field as Protected Sensitive Information. For more information refer to, [Classify Potentially Sensitive Information (PSI)](https://docs.capillarytech.com/docs/classify-potentially-sensitive-information-psi) . **Note** - You cannot enable `isPsiData` for the mandatory customer identifier field.
      </td>
    </tr>

    <tr>
      <td>
        name
      </td>

      <td>
        string
      </td>

      <td>
        Specify the name of the field.
      </td>
    </tr>

    <tr>
      <td>
        type
      </td>

      <td>
        enum
      </td>

      <td>
        Specify the type of the attribute. Values: `tillCode`, `couponCode`, `customer`, `productSku`, `productBrand`, `productCategory`, `string`, `double`.
      </td>
    </tr>

    <tr>
      <td>
        addCustomerIfNotExists
      </td>

      <td>
        obj
      </td>

      <td>
        Set this value to `true` to allow registering new customers into the loyalty program automatically
      </td>
    </tr>

    <tr>
      <td>
        valueType
      </td>

      <td>
        enum
      </td>

      <td>
        Data-type of the attribute. For example, `Boolean`, `Enum`, `String`.
      </td>
    </tr>

    <tr>
      <td>
        value
      </td>

      <td>
        string
      </td>

      <td>
        Value of the attribute based on its `valueType`.For example, if `valueType` is Boolean, value could be either `true` or `false`.
      </td>
    </tr>

    <tr>
      <td>
        identifierType
      </td>

      <td>
        Object
      </td>

      <td>
        Specify the identifier type and its value
      </td>
    </tr>

    <tr>
      <td>
        value
      </td>

      <td>
        String
      </td>

      <td>
        Supported values: userId, mobile, email, externalId, wechat, martjackId, cuid, fbid, unionId, fcmToken, line, cardnumber, cardExternalId
      </td>
    </tr>

    <tr>
      <td>
        valueType
      </td>

      <td>
        String
      </td>

      <td>
        Value for the identifier type
      </td>
    </tr>
  </tbody>
</Table>

<aside class="notice">All parameters marked by \* are mandatory. </aside>

For information on event uniqueness check, see [Event uniqueness check](https://docs.capillarytech.com/docs/setup-test-behavioral-events#enabling-uniqueness-check).

## API specific Error codes

| Error Code | Description                                                 | Reason                                  |
| :--------- | :---------------------------------------------------------- | :-------------------------------------- |
| 1806       | Event\_`name` event already exists                          | Already existing event name             |
| 1810       | Event\_`name` event actions invalid                         | Invalid or unsupported event actions    |
| 1811       | event name invalid                                          | Invalid or unsupported event name       |
| 1823       | tillCod invalid event field type                            | Invalid or unsupported event field type |
| 1802       | field attribute value  fails for validation type isRequired | Invalid/null field attribute value      |