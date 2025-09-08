---
title: Simulation transaction add
excerpt: Lets you perform the simulation of the Transaction Add.
api:
  file: v2.json
  operationId: simulate_transactionadd
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
This API enables the workflow simulation of a transaction and helps to demonstrate the benefits that the customers will receive with the transaction. It functions as a wrapper for the existing transaction add v2 API, allowing this process without performing any database writes. For more information on workflow simulation, refer to the [workflow simulation documentation](https://docs.capillarytech.com/docs/cart-event-simulation).

<Callout icon="👍" theme="okay">
  For detailed information about our APIs and for hands-on testing, refer documentation in [API overview](https://docs.capillarytech.com/reference/apioverview) and  step-by-step guide on making your first API call in [Make your first API call](https://docs.capillarytech.com/reference/make-your-first-api-call) .
</Callout>

# Prerequisites

*   Enable config `CONF_ENABLE_SIMULATION_API_MODE`
*   Write access to the Event simulation access group. For information on access groups, refer to the [access group documentation](https://docs.capillarytech.com/docs/access-group).

# Rate limit

Refer to [rate limit documentation](https://docs.capillarytech.com/reference/rate-limits).

# API endpoint example

`https://eu.api.capillarytech.com/v2/simulation/transactions?identifierName=email&identifierValue=johnhill@gmail.com`

# Request body parameters

<Table align={["left","left","left"]}>
  <thead>
    <tr>
      <th>
        Parameter

        (Parameters marked with

        *

        sign are mandatory)
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
        type\*
      </td>

      <td>
        Enum
      </td>

      <td>
        Type of transactions - REGULAR
      </td>
    </tr>

    <tr>
      <td>
        billAmount\*
      </td>

      <td>
        string
      </td>

      <td>
        Total bill amount
      </td>
    </tr>

    <tr>
      <td>
        billNumber\*
      </td>

      <td>
        string
      </td>

      <td>
        Bill number
      </td>
    </tr>

    <tr>
      <td>
        addWithLocalCurrency
      </td>

      <td>
        boolean
      </td>

      <td>
        Indicates local currency usage
      </td>
    </tr>

    <tr>
      <td>
        lineItemsV2
      </td>

      <td>
        array
      </td>

      <td>
        An array containing item-level parameters
      </td>
    </tr>

    <tr>
      <td>
        customFields
      </td>

      <td>
        object
      </td>

      <td>
        An object containing custom field parameters.

        * *Note:*\* The custom fields are not taken into consideration for simulation.
      </td>
    </tr>

    <tr>
      <td>
        extendedFields
      </td>

      <td>
        object
      </td>

      <td>
        An object containing extended field parameters
      </td>
    </tr>
  </tbody>
</Table>

<Note title="Note">
You can include all the body parameters permitted in the[ regular transaction add API](https://docs.capillarytech.com/reference/add-transaction-single) except rawSideEffects  and use\_async query param. Please note that the list provided above is not exhaustive and does not include all allowable body parameters.
</Note>

# Request query parameters

<Table align={["left","left","left"]}>
  <thead>
    <tr>
      <th>
        Parameter

        (Parameters marked with

        *

        sign are mandatory)
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
        identifierName\*
      </td>

      <td>
        Enum
      </td>

      <td>
        Pass any of the registered identifier name of the customer.\
        Values: `mobile`, `email`, `externalId`, `id`, `wechat`, `martjackId`, `fbId` (Facebook ID), `cardnumber`, `cardExternalId`.
      </td>
    </tr>

    <tr>
      <td>
        identifierValue\*
      </td>

      <td>
        string
      </td>

      <td>
        Pass the respective identifier value. For example if identifierType is mobile, identifierValue is mobile number.
      </td>
    </tr>

    <tr>
      <td>
        source
      </td>

      <td>
        Enum
      </td>

      <td>
        Pass the source from which the transaction is made. Values: `INSTORE`(for InStore), `WECHAT` (WeChat), `MARTJACK`(AnywhereCommerce), `WEB_ENGAGE` (Web-engage integration), `ECOMMERCE` (ECOMMERCE), `JD` (JD), `TAOBAO` (Taobao), `TMALL` (TMall), `FACEBOOK` (Facebook), `WEBSITE` (other website), `OTHERS` (any other source).
      </td>
    </tr>

    <tr>
      <td>
        accountId
      </td>

      <td>
        string
      </td>

      <td>
        For sources with multiple accounts (such as MARTJACK, WECHAT), pass the respective account ID. Not applicable for INSTORE source.
      </td>
    </tr>
  </tbody>
</Table>

# Response parameters

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
        warnings
      </td>

      <td>
        Array
      </td>

      <td>
        An array containing any warnings related to the simulation.
      </td>
    </tr>

    <tr>
      <td>
        errors
      </td>

      <td>
        Array
      </td>

      <td>
        An array containing any errors encountered during the simulation.
      </td>
    </tr>

    <tr>
      <td>
        simulatedPointsBreakup
      </td>

      <td>
        Object
      </td>

      <td>
        An object providing a breakdown of points earned from the simulation event.
      </td>
    </tr>

    <tr>
      <td>
        sideEffects
      </td>

      <td>
        Array
      </td>

      <td>
        An array of any side effects triggered by the simulation
      </td>
    </tr>

    <tr>
      <td>
        simulatedPointsBreakup
      </td>

      <td>
        Object
      </td>

      <td>
        An object providing a breakdown of points earned from the simulation event.
      </td>
    </tr>

    <tr>
      <td>
        * eventLogId
      </td>

      <td>
        Number
      </td>

      <td>
        Unique identifier for the simulation event log
      </td>
    </tr>

    <tr>
      <td>
        * eventName
      </td>

      <td>
        String
      </td>

      <td>
        Name of the event (e.g., "TransactionAdd")
      </td>
    </tr>

    <tr>
      <td>
        eventDetails
      </td>

      <td>
        Object
      </td>

      <td>
        Details about the simulation event, such as max conversion date, event time, and till ID.
      </td>
    </tr>

    <tr>
      <td>
        * eventTime
      </td>

      <td>
        String
      </td>

      <td>
        Timestamp of the event (format: "YYYY-MM-DD HH:mm:ss.S").
      </td>
    </tr>

    <tr>
      <td>
        * tillId
      </td>

      <td>
        Number
      </td>

      <td>
        Identifier of the till where transaction occurred.
      </td>
    </tr>

    <tr>
      <td>
        billDetails
      </td>

      <td>
        Object
      </td>

      <td>
        Details about the bill associated with the simulation, including bill type, number, and amount.
      </td>
    </tr>

    <tr>
      <td>
        * type
      </td>

      <td>
        String
      </td>

      <td>
        Type of bill (e.g., "loyalty")
      </td>
    </tr>

    <tr>
      <td>
        * billNumber
      </td>

      <td>
        String
      </td>

      <td>
        Unique identifier for the bill
      </td>
    </tr>

    <tr>
      <td>
        * grossAmount
      </td>

      <td>
        Number
      </td>

      <td>
        Total amount before discounts
      </td>
    </tr>

    <tr>
      <td>
        * discount
      </td>

      <td>
        Number
      </td>

      <td>
        Total discount applied
      </td>
    </tr>

    <tr>
      <td>
        * billAmount
      </td>

      <td>
        Number
      </td>

      <td>
        Final amount after discounts
      </td>
    </tr>

    <tr>
      <td>
        * note
      </td>

      <td>
        String
      </td>

      <td>
        Additional notes about the transaction
      </td>
    </tr>

    <tr>
      <td>
        * billDate
      </td>

      <td>
        String
      </td>

      <td>
        Date/time of the bill (format: "YYYY-MM-DD HH:mm:ss.S")
      </td>
    </tr>

    <tr>
      <td>
        * regular
      </td>

      <td>
        Array
      </td>

      <td>
        Regular points earned
      </td>
    </tr>

    <tr>
      <td>
        * * value
      </td>

      <td>
        Number
      </td>

      <td>
        Points value
      </td>
    </tr>

    <tr>
      <td>
        * * expiresOn
      </td>

      <td>
        String
      </td>

      <td>
        Expiration date (format: "YYYY-MM-DD HH:mm:ss.S")
      </td>
    </tr>

    <tr>
      <td>
        * * programId
      </td>

      <td>
        Number
      </td>

      <td>
        ID of the loyalty program
      </td>
    </tr>

    <tr>
      <td>
        * * programName
      </td>

      <td>
        String
      </td>

      <td>
        Name of the loyalty program
      </td>
    </tr>

    <tr>
      <td>
        * * expiryType
      </td>

      <td>
        String
      </td>

      <td>
        Type of expiry
      </td>
    </tr>

    <tr>
      <td>
        * promo
      </td>

      <td>
        Array
      </td>

      <td>
        Promotional points earned
      </td>
    </tr>

    <tr>
      <td>
        pointsEarned
      </td>

      <td>
        Object
      </td>

      <td>
        Information about the points earned during the simulation.
      </td>
    </tr>

    <tr>
      <td>
        promised
      </td>

      <td>
        Array
      </td>

      <td>
        An array of promised points, including their value, conversion date, program ID, and name.
      </td>
    </tr>

    <tr>
      <td>
        lineItems
      </td>

      <td>
        Array
      </td>

      <td>
        An array of line items associated with the bill, each containing details and earned points.
      </td>
    </tr>

    <tr>
      <td>
        regular
      </td>

      <td>
        Array
      </td>

      <td>
        An array of regular points earned, including their value, expiration date, program ID, and name.
      </td>
    </tr>

    <tr>
      <td>
        customFields
      </td>

      <td>
        Array
      </td>

      <td>
        An array of custom fields associated with the simulation event.

        * *Note:*\* The custom fields are not taken into consideration for simulation.
      </td>
    </tr>

    <tr>
      <td>
        extendedFields
      </td>

      <td>
        Array
      </td>

      <td>
        An array of extended fields, such as "room\_nights\_count," with their respective values.
      </td>
    </tr>

    <tr>
      <td>
        paymentModes
      </td>

      <td>
        Array
      </td>

      <td>
        An array containing information about payment modes used in the simulation.
      </td>
    </tr>

    <tr>
      <td>
        pointInTimeSlabs
      </td>

      <td>
        Array
      </td>

      <td>
        An array of point-in-time slabs, including slab number, name, program ID, and default status.
      </td>
    </tr>
  </tbody>
</Table>