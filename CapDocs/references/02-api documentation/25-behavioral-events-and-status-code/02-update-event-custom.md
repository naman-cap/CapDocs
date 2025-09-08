---
title: Update Event (Custom)
excerpt: >-
  Lets you add or remove fields and customers for an event. You need to pass the
  entire payload of the event.
api:
  file: v2.json
  operationId: update-event-custom
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
### Request Body Parameters

<Table>
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
        A short description for the event.
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
        Configure fields for the current event with attributes: `name`, `type`, and `value`.\
        -`addCustomerIfNotExists` - Adds the customer if the customer does not exist.\
        -`isRequired` - Marks the attribute as mandatory\
        -`isUniqueKeyField `- Includes the attribute, to the unique key. Once defined as a unique key field, this attribute becomes mandatory and needs to be marked as `isRequired`. By default, customer identifier and event name are already part of the unique key.
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
        Name of the field.
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
        Set this value to `true` to allow registering new customers in to the loyalty program automatically
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
  </tbody>
</Table>

<aside class="notice">All parameters marked by * are mandatory. </aside>
For information on event uniqueness check, see Uniqueness check.