---
title: Points deductions
excerpt: ''
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
## Bill Promotion Expiry

This profile lets you expire promotion points issued (Bill Points Promotion) for a specific transaction.

* Mobile/Email/External ID*

* TILL IUN*

* Transaction Number*

* Date Of Transaction

* Points*

* loyalty_log_id*

**CSV Sample**:

Mobile,Til IUN,Transaction Number,Date Of Transaction,Points,loyalty_log_id
9900111111,mal1,Tran122591,10/10/2015,20,32626215

**Template Configuration**

![](https://files.readme.io/c8b08ba-nNQKL6xViSuwPTBObTOohHbiepRcdGw8GQ.png "nNQKL6xViSuwPTBObTOohHbiepRcdGw8GQ.png")

| Option                                                 | Description                                                                                                                          |
| :----------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------- |
| Denote stores by external ids                          | Check this box if the stores of the organization use store external ids as store codes                                               |
| Replace invalid store names with                       | Choose the store that you want to replace with wherever invalid stores are identified                                                |
| Append country code to the mobile number automatically | Check this box to prefix the base country code of the org's base country wherever mobile numbers without country code are identified |
| Identification of Bill (Transaction)                   | Choose whether the transaction is identified from the loyalty log or standard fields                                                 |
| Choose promotion name                                  | Choose the promotion for which you want to set the points expiry                                                                     |
| Deduct points because                                  | Specify a proper reason for deducting loyalty points of customers                                                                    |

## Customer Promotion Expiry

his profile lets you expire points issued through Customer Promotion.

* Mobile/Email/External ID*
* TILL IUN Or Store External ID (Store Code)
* Points to be reduced

**Note**: To make this work, the customer should be a part of the promotion in which you want to expire. So run the customer promotion first and then choose that name in the promotion name drop-down.

**CSV Sample:
**
Mobile,Till IUN Or Store Ext Id(Store Code),Points to be reduced
9900810026,mal1,20

**Template Configuration**

![](https://files.readme.io/9d53978-UKKrc45kgtKIDz4tb4kj38W3ic017EgiIA.png "UKKrc45kgtKIDz4tb4kj38W3ic017EgiIA.png")

| OPTION                                                     | DESCRIPTION                                                                                                                          |
| :--------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------- |
| Denote stores by external ids                              | Check this box if the stores of the organization use store external ids as store codes                                               |
| Replace invalid store names with                           | Choose the store that you want to replace with wherever invalid stores are identified                                                |
| Append the country code to the mobile number automatically | Check this box to prefix the base country code of the org's base country wherever mobile numbers without country code are identified |
| Choose promotion name                                      | Choose the promotion for which you want to set the points expiry                                                                     |
| Deduct points because                                      | Specify a proper reason for deducting loyalty points of customers                                                                    |

## Transactions Bills Deduction

This profile lets you deduct points awarded for a specific transaction. Use this profile to deduct extra points issued to a customer for a specific transaction or in transaction returns.

* Till IUN Or Store Ext Id(Store Code)
* Points To Be Reduced(Points)
* Transaction Number(Bill Number)
* Transaction Date(Bill Date)

**CSV Sample:
**
Mobile,Till IUN Or Store Ext Id(Store Code), Points To Be Reduced(Points),Transaction Number(Bill Number),Transaction Date(Bill Date)
9900810026,mal1,20,Trans013,11/17/2018

**Template Configuration
**If you import multiple files using a specific template, all will have the same promotion identifier assigned to them.

* The identifier is retained as long as no changes are made to the template.
* When you make a change in the template and save, a new identifier is generated.

![](https://files.readme.io/1520cad-YfJT1TmMlyxTgOkskIcK_7rY2MIWmLOuMA.png "YfJT1TmMlyxTgOkskIcK_7rY2MIWmLOuMA.png")

<Table align={["left","left"]}>
  <thead>
    <tr>
      <th>
        Option
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Denote stores by external ids
      </td>

      <td>
        Check this box if the stores of the organization use store external ids as store codes
      </td>
    </tr>

    <tr>
      <td>
        Replace invalid store names with
      </td>

      <td>
        Choose the store that you want to replace with wherever invalid stores are identified
      </td>
    </tr>

    <tr>
      <td>
        Append country code to the mobile number automatically
      </td>

      <td>
        Check this box to prefix the base country code of the org's base country, wherever mobile numbers without country code are identified
      </td>
    </tr>

    <tr>
      <td>
        Identification of Bill (Transaction)
      </td>

      <td>
        Choose whether the transaction is identified from the loyalty log or standard fields
      </td>
    </tr>

    <tr>
      <td>
        Choose promotion name
      </td>

      <td>
        Choose the promotion for which you want to set the points expiry
      </td>
    </tr>

    <tr>
      <td>
        Deduct points because
      </td>

      <td>
        Specify a proper reason for deducting loyalty points of customers
      </td>
    </tr>

    <tr>
      <td>
        Promotion name
      </td>

      <td>
        Enter the name of the promotion.

        _Note: The name you specify will store in the backend directly. Hence, when you fetch details, the system no longer appends the timestamp to promotion name (as earlier), but retains the name that you specified._
      </td>
    </tr>

    <tr>
      <td>
        Import on group primary identifier
      </td>

      <td>
        Set this option to Yes for user group import and use the identifier of the primary member of the group to identify the group.
      </td>
    </tr>

    <tr>
      <td>
        Set user defined promotion identifier
      </td>

      <td>
        Check this if you want to use an external identifier for the promotion and enter the identifier in the text box that appears.

        * When you provide a  new identifier, a new promotion is created with the given identifier and name.
        * When you provide an existing identifier, points will be awarded under the existing promotion.
        * NOTE:  Ensure you provide the same promotion name when using an existing promotion identifier. If there is a mismatch, the system will throw an error.
        * <br />
      </td>
    </tr>
  </tbody>
</Table>

<Callout icon="📘" theme="info">
  * It is very important to understand how the issued and expired points will be affected by this import.
    For example, if you want to deduct 300 points from a transaction for which 500 points are issued, you will pass points to be deducted as 300. What will happen to the points issued for that customer?

    * As per the transaction, we cannot expire partial points, the entire points of the transaction (500) will be expired first and 200 points (500-300) will be issued again. In this, the total issued points will be 700 (500+200). However, points for individual line items will be deducted according to the expiry dates.
</Callout>

## Manual Points Adjustment

This profile lets you deduct points from customers accounts manually. There can be erroneous scenarios where brands want to deduct some points from customers.

For example : A transaction was done and the brand imported the points with the bill_id. Now when a customer returns the bill via a credit card of let's say HDFC, HDFC doesn’t know what was the original bill. And hence there is no way to link the original and the return bill. In such cases, HDFC would want to create a new PA entry with all points as returned. This will be similar to negative PA entry but only the return value will be -ve. Thus overall the points will be reduced for the customer.

Today in our system, points can be deducted in three ways : Redeemed, expired and returned.
**In this case, the points will be considered as returned.**

* User identifiers like mobile , userId, externalId etc,
* Reason for manual adjustment
* Points to deduct

Optional fields can be program_id, promotion_id, promotion_external_identifier and points awarded_id

![01787aa Screenshot 2023 06 07 at 11](https://files.readme.io/01787aa-Screenshot_2023-06-07_at_11.07.40_AM.png)

| Option                              | Description                                                                                                                                                                                                                                                                                                                             |
| :---------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Choose customers' unique identifier | Customer for whom points need to be deducted. User identifiers like mobile , userId, externalId etc                                                                                                                                                                                                                                     |
| Identification of source            | Choose whether the                                                                                                                                                                                                                                                                                                                      |
| All programs of the org             | In case of MLP, this is the list of programs. Choose the program in which points need to be deducted.                                                                                                                                                                                                                                   |
| Reference id for points adjustment  | Choose from points awarded_id, promotion_id or promotion_identifier. The points will be deducted as returned against that pa_id, the points which are getting expired will be checked and deducted in case of promotion_id & the points getting expired will be deducted in case of promotion identifier(here program id is mandatory). |
| User Group2 Enabled                 | Check this, if points are to be deducted from a group. Pass the unique identifier for points deduction.                                                                                                                                                                                                                                 |
| Denote stores by external ids       | Check this box if the stores of the organization use store external ids as store codes                                                                                                                                                                                                                                                  |
| Replace invalid store names with    | Choose the store that you want to replace with wherever invalid stores are identified                                                                                                                                                                                                                                                   |

Refer here for more details - [Technical document](https://capillarytech.atlassian.net/wiki/spaces/LOYAL/pages/3554739167/CAP-78987+Negative+Points+Adjustments)

<Callout icon="📘" theme="info">
  **Note**

  Capillary does not support converting already allocated redeemable points to non-redeemable points. If you need to remove or suppress redeemable points after allocation (for example, due to double allocation or error), you can use the Manual Points Adjustment [UI](https://docs.capillarytech.com/docs/points-deductions#manual-points-adjustment)/[API](https://docs.capillarytech.com/reference/deduct-points-and-alternatecurrencies-from-user#/).
</Callout>

<br />
