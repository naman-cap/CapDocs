---
title: Custom Fields
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
Custom fields are columns that store special or custom information related to customers, transactions, transaction line-items, coupons, and so on. As there is no control over the field values, it is difficult to run reports on custom fields. For example, if the custom field Gender has values M, F, and MF,  it becomes difficult for an analyst to work directly on such data.

### Create new custom fields, or see existing custom fields of the org.

On InTouch, navigate to **Profile** > **Organization Settings** > **Master Data Management** > **Data Model** > **Custom Fields**.

![c1988e8 KhizBuomOEMzTo6etQ D6jatvalsXsdMdQ](https://files.readme.io/c1988e8-KhizBuomOEMzTo6etQ_D6jatvalsXsdMdQ.png)

The following are different entries for which you can create custom fields.

* Loyalty registration
* Loyalty transaction
* Customer feedback
* Zone custom fields
* Store custom fields
* Points redemption
* Voucher redemption (coupon redemption)
* Customer advanced feedback
* Customer preferences
* Customer Card

To see the custom fields of an entry, click the respective + icon.

![8ea8cd1 RcmqQV8WpzPvELa2wtXJdUQKFgOdM0ENEw](https://files.readme.io/8ea8cd1-RcmqQV8WpzPvELa2wtXJdUQKFgOdM0ENEw.png)

To create a new custom field, click **Add new custom field**.

![817f6cc rpaUJ31qBbBHz9tYYDNN3FLwZvaURuoxIg](https://files.readme.io/817f6cc-rpaUJ31qBbBHz9tYYDNN3FLwZvaURuoxIg.png)

Fill in the fields and click **Submit**.

<Table align={["left","left"]}>
  <thead>
    <tr>
      <th>
        OPTION
      </th>

      <th>
        DESCRIPTION
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Disabled
      </td>

      <td>
        Check this to hide the custom field on the UI.
      </td>
    </tr>

    <tr>
      <td>
        Is Compulsory
      </td>

      <td>
        Check this to make the field mandatory,
      </td>
    </tr>

    <tr>
      <td>
        Is Updatable
      </td>

      <td>
        Check this to make the field value modifiable - once entered can be updated again when needed.
      </td>
    </tr>

    <tr>
      <td>
        Disable Custom Field
      </td>

      <td>
        Check this to inactivate the custom field.
      </td>
    </tr>

    <tr>
      <td>
        Field Name
      </td>

      <td>
        Name of the field.
      </td>
    </tr>

    <tr>
      <td>
        Field Type
      </td>

      <td>
        Choose the input type - text, text area, select box, checkbox, radio button, button, email body, feedback, and so on.\
        Based on the option you choose, you will see relevant configuration fields. For example, if it is a select box, you need to enter the supported values to select.
      </td>
    </tr>

    <tr>
      <td>
        Field Scope
      </td>

      <td>
        Choose the entry of the custom field from the options available.

        * Loyalty registration
        * Loyalty transaction
        * Customer feedback
        * Zone custom fields
        * Store custom fields
        * Points redemption
        * Voucher redemption (coupon redemption)
        * Customer advanced feedback
        * Customer preferences
      </td>
    </tr>

    <tr>
      <td>
        Label
      </td>

      <td>
        Enter the field name to appear on the UI
      </td>
    </tr>

    <tr>
      <td>
        Default Values
      </td>

      <td>
        Enter the values of the field in case of a selection field such as radio button, checkbox, select box, and so on.
      </td>
    </tr>

    <tr>
      <td>
        Position
      </td>

      <td>
        Specify the sequence order of the custom field. For example, 1 to appear in the first position of the form.
      </td>
    </tr>

    <tr>
      <td>
        Regular Expression for verification
      </td>

      <td>
        Configure regex for the field value in the case of the free text field.
      </td>
    </tr>

    <tr>
      <td>
        Error message for Regex Failure
      </td>

      <td>
        Enter the error message to show in case of regex failure.
      </td>
    </tr>

    <tr>
      <td>
        Help Text For The Field
      </td>

      <td>
        Enter the help text(more information) you want to show for the field. This appears on the right of the field
      </td>
    </tr>

    <tr>
      <td>
        Attributes (Format = Label:Value)
      </td>

      <td>

      </td>
    </tr>
  </tbody>
</Table>

> 📘 When you make changes in a custom field
>
> * For Store Server, do a complete sync from Settings or wait until the next auto-sync completes (usually every one hour).
> * For Thin Client, please restart your thin client and check whether you are able to see the changes.
