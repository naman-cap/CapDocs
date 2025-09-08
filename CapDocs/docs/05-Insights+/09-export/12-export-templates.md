---
title: Export Templates
excerpt: ''
deprecated: false
hidden: true
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
## Payment mode template

The Payment Mode template is based on the fact payment\_details fact. This template lets you export the payment mode details of a transaction. You can make payment for a transaction through cash, credit card, gift card, points/coupon redemption or some other means either fully or partially.

* With this template you can export the data of payment made and the modes of Payment made\
  Granularity is at bill id level.
* You will get only the detailed break up of payment made but not the summarized one.
* You can export transaction level dump with a split of payment modes.

### Measures in payment mode template

<Table align={["left","left"]}>
  <thead>
    <tr>
      <th>
        Measure
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Central Gst
      </td>

      <td>
        Total GST amount on the transaction for which payment has been done.
      </td>
    </tr>

    <tr>
      <td>
        State Gst
      </td>

      <td>
        Total State gst that has been applied on the payment
      </td>
    </tr>

    <tr>
      <td>
        Quantity
      </td>

      <td>
        Total number of quantity in transaction for which payment has been done
      </td>
    </tr>

    <tr>
      <td>
        Bill Amount
      </td>

      <td>
        The total amount of the transaction for which the payment has been done
      </td>
    </tr>

    <tr>
      <td>
        Bill Discount
      </td>

      <td>
        Total discount given on transaction for which payment has been done
      </td>
    </tr>

    <tr>
      <td>
        Tax Amount
      </td>

      <td>
        Total tax amount that has been applied on the payment
      </td>
    </tr>

    <tr>
      <td>
        Integrated Gst
      </td>

      <td>
        Captures the GST levied by the central government for inter-state supplies and imports.
      </td>
    </tr>

    <tr>
      <td>
        Payment Mode Amount
      </td>

      <td>
        Total amount of the payment made
      </td>
    </tr>

    <tr>
      <td>
        Bill Number
      </td>

      <td>
        A unique number for a transaction that is either auto-generated at the POS machine or provided manually.
      </td>
    </tr>

    <tr>
      <td>
        Bill Id
      </td>

      <td>
        The unique id generated for a particular bill internally in the capillary system for which payment has been done.
      </td>
    </tr>
  </tbody>
</Table>

1. Sample step
   1. nested step

![b4339b9 referrer2](https://files.readme.io/b4339b9-referrer2.png)

2. Next step

* Bulleted list
  * Nested bulleted list

**Sample**test 

## Heading2

### Heading3

#### Heading4
