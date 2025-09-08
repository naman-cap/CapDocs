---
title: Setup Entities and Fields
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
# Extended fields

## View Extended fields on InTouch

To view extended fields of your organization:

1. On InTouch navigate to **Settings** > **Master Data Management** > **Data Model** > **Extended Fields**.

You will see extended fields of each vertical as shown below.

![2436ad5 iCqnsovk8iYCGrvOmGDPRPrB5eBhMvwVMw](https://files.readme.io/2436ad5-iCqnsovk8iYCGrvOmGDPRPrB5eBhMvwVMw.png)

Click on each vertical to see the extended fields enabled for your org.

![d30c293 T3O4kDeYFdpD4OLV9KSnRSg1UlsmCWxLSg](https://files.readme.io/d30c293-T3O4kDeYFdpD4OLV9KSnRSg1UlsmCWxLSg.png)

## Edit extended fields & Add enum values using InTouch

You can update an extended field to show/hide it, set the position on the UI, choose whether mandatory or optional, and add enum values. The extended field format is `longtext`, which supports up to 4GB of text.

To add custom enum values to an extended field, click on the extended field

![dec6404 Is Extended field](https://files.readme.io/dec6404-Is_Extended_field.png)

| Field                                                         | Description                                                                                                                                                                                                                                   |
| :------------------------------------------------------------ | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Insert Enum Values (applicable for fields with datatype enum) | Enter each supported value for the field and click **Add**.                                                                                                                                                                                   |
| New Enum Values (applicable for fields with datatype enum)    | You will see the list of values added for the extended field. To remove any value from the list, click on the value to select and click **Remove**.                                                                                           |
| Hide Display                                                  | Check this hide the entended field. This field applies to client-side applications like Instore and does not undergo any server-side validation.                                                                                              |
| Is Mandatory                                                  | Check this to make the extended field mandatory. This field applies to client-side applications like Instore and does not undergo any server-side validation.                                                                                 |
| Is Updatable                                                  | Chis this to allow updating the extended field values once entered. This field applies to client-side applications like Instore and does not undergo any server-side validation.                                                              |
| Position                                                      | Set the position of the extended field on the client application. 1 for the top, 2 for the second, and so on. This field applies to client-side applications like Instore and does not undergo any server-side validation.                    |
| Default Value                                                 | Default value for the extended field. This field applies to client-side applications like Instore and does not undergo any server-side validation.                                                                                            |
| Enable audit trail                                            | Select the checkbox to enable audit logging of the extended field. You can add up to 5 extended fields for audit logging.                                                                                                                     |
| Is it PII data                                                | Select the checkbox to classify the extended field as PII data.                                                                                                                                                                               |
| Is this psi data                                              | Select the checkbox to classify the extended field as sensitive data. Refer to the PSI data documentation for more [information on classifying PSI data](https://docs.capillarytech.com/docs/classify-potentially-sensitive-information-psi). |
| Reject txn on invalid value                                   | Select the checkbox to reject the transaction if the values are invalid.                                                                                                                                                                      |

1. To see extended fields of a vertical, click the respective + **icon**.

![082f850 Extended field overview](https://files.readme.io/082f850-Extended_field_overview.png)

| FIELD                  | Description                                                                                                                                                                                                                        |
| :--------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Name                   | Name of the extended field as created in the DB                                                                                                                                                                                    |
| Entity Type            | Type of the field                                                                                                                                                                                                                  |
| Label                  | Name of the field as it appears on the UI                                                                                                                                                                                          |
| Data Type              | The data type of the field                                                                                                                                                                                                         |
| Enum Values            | Supported values of the field (if applicable)                                                                                                                                                                                      |
| Is Mandatory           | Indicates if the extended field is mandatory. This field applies to client-side applications like Instore and does not undergo any server-side validation.                                                                         |
| Is Updatable           | Indicates if the extended field is updatable. This field applies to client-side applications like Instore and does not undergo any server-side validation.                                                                         |
| Hide Display           | Indicates if extended field is configured to hide from the client application. This field applies to client-side applications like Instore and does not undergo any server-side validation.                                        |
| Position               | Displays the position set for the extended field. This field applies to client-side applications like Instore and does not undergo any server-side validation.                                                                     |
| Default value          | Displays the default value of the extended field. This field applies to client-side applications like Instore and does not undergo any server-side validation.                                                                     |
| Is Audit trial enabled | Indicates if audit logging of extended field is enabled.                                                                                                                                                                           |
| Is PII data            | Indicates if the extended field is classified as PII data.                                                                                                                                                                         |
| Is PSI data            | Indicates if the extended field is classified as PSI data. Refer to the PSI data documentation for more [information on classifying PSI data](https://docs.capillarytech.com/docs/classify-potentially-sensitive-information-psi). |

## Configure org extended fields and enum values through API

You can view the list of extended fields enabled for an organization through a V2 API.

Request: https\://\{host}/v2/extendedFields

Method: GET

Sample Request: [https://newapi.nightly.capillary.in/v2/extendedFields](https://newapi.nightly.capillary.in/v2/extendedFields)

Sample Response:

```json
{
"entity": {
"CUSTOMER": [
{
"name": "gender",
"createdBy": -1,
"createdOn": "2017-04-12",
"modifiedBy": -1,
"modifiedOn": "2017-04-12",
"label": "Gender",
"entityType": "CUSTOMER",
"dataType": "STANDARD_ENUM"
},
{
"name": "marital_status",
"createdBy": -1,
"createdOn": "2017-05-18",
"modifiedBy": -1,
"modifiedOn": "2017-05-18",
"label": "Marital Status",
"entityType": "CUSTOMER",
"dataType": "STANDARD_ENUM"
},
{
"name": "Age",
"createdBy": -1,
"createdOn": "2017-05-18",
"modifiedBy": -1,
"modifiedOn": "2017-05-18",
"label": "amount",
"entityType": "CUSTOMER",
"dataType": "INTEGER"
},
{
"name": "Region",
"createdBy": -1,
"createdOn": "2017-05-18",
"modifiedBy": -1,
"modifiedOn": "2017-05-18",
"label": "Region",
"entityType": "CUSTOMER",
"dataType": "CUSTOM_ENUM"
},
{
"name": "dob",
"createdBy": -1,
"createdOn": "2017-06-13",
"modifiedBy": -1,
"modifiedOn": "2017-06-13",
"label": "Date of Birth",
"entityType": "CUSTOMER",
"dataType": "DATETIME"
},
{
"name": "ssnNumber",
"createdBy": -1,
"createdOn": "2017-06-13",
"modifiedBy": -1,
"modifiedOn": "2017-06-13",
"label": "SSN Number",
"entityType": "CUSTOMER",
"dataType": "STRING"
},
{
"name": "nationality",
"createdBy": -1,
"createdOn": "2017-06-13",
"modifiedBy": -1,
"modifiedOn": "2017-06-13",
"label": "Nationality",
"entityType": "CUSTOMER",
"dataType": "STRING"
},
{
"name": "language",
"createdBy": -1,
"createdOn": "2017-06-13",
"modifiedBy": -1,
"modifiedOn": "2017-06-13",
"label": "Preferred Language",
"entityType": "CUSTOMER",
"dataType": "STRING"
},
{
"name": "ethnicity",
"createdBy": -1,
"createdOn": "2017-07-20",
"modifiedBy": -1,
"modifiedOn": "2017-07-20",
"label": "Ethnicity",
"entityType": "CUSTOMER",
"dataType": "STRING"
},
{
"name": "zip",
"createdBy": -1,
"createdOn": "2017-07-20",
"modifiedBy": -1,
"modifiedOn": "2017-07-20",
"label": "Zip Code",
"entityType": "CUSTOMER",
"dataType": "STRING"
}
],
"REGULAR_LINEITEM": [
{
"name": "associate",
"createdBy": -1,
"createdOn": "2017-04-12",
"modifiedBy": -1,
"modifiedOn": "2017-04-12",
"label": "Associate",
"entityType": "REGULAR_LINEITEM",
"dataType": "CUSTOM_ENUM"
},
{
"name": "uuid",
"createdBy": -1,
"createdOn": "2017-04-12",
"modifiedBy": -1,
"modifiedOn": "2017-04-12",
"label": "UUID",
"entityType": "REGULAR_LINEITEM",
"dataType": "STRING"
      },

"warnings": [],
"errors": [],
"success": true
}
```

<br />

Creating reports using extended fields\
To display the extended fields on Insights and use this data to create reports, perform the following:
------------------------------------------------------------------------------------------------------

Create a JIRA ticket to the Sustenance team and create a vertical-level field on the Capillary platform.\
Create a JIRA ticket to the Insights team and create an audience filter for the extended field.

## Convert custom field to extended field

Once you have the custom field created, raise a ticket to the Platforms team requesting the conversion to the extended field. Once it is created, you can use the field in reports and campaigns.

However, the team verifies the request and decides whether to convert to the extended field.

> 📘
>
> * The team might reject the request if the custom field is too specific and does not make general sense.
> * The platform team takes care of mapping custom field values to extended fields.

## Supported date formats in extended fields

The extended fields support following date formats:

* yyyy-MM-dd
* yyyy-MM-ddTHH:mm:ssZ (ISO 8601 with Z for UTC timezone)
* yyyy-MM-ddTHH:mm:ss+hh:mm (ISO 8601 with offset)

### Supported date formats and behaviour

The table below explains the behaviour using an example specific to the India cluster.

| **Input Format**            | **Example Value**             | **Interpretation**             | **Saved in DB (UTC)**           | **Shown in Member Care**    |
| --------------------------- | ----------------------------- | ------------------------------ | ------------------------------- | --------------------------- |
| `yyyy-MM-dd`                | `"1986-07-15"`                | Time assumed as `00:00:00` UTC | `1986-07-15T00:00:00.000+00:00` | `1986-07-15T05:30:00+05:30` |
| `yyyy-MM-ddTHH:mm:ssZ`      | `"1986-07-15T00:00:00Z"`      | Exact UTC timestamp            | `1986-07-15T00:00:00.000+00:00` | `1986-07-15T05:30:00+05:30` |
| `yyyy-MM-ddTHH:mm:ssZ`      | `"1986-07-15T14:30:00Z"`      | Exact UTC timestamp            | `1986-07-15T14:30:00.000+00:00` | `1986-07-15T20:00:00+05:30` |
| `yyyy-MM-ddTHH:mm:ss+05:30` | `"1986-07-15T14:30:00+05:30"` | Local time with offset         | `1986-07-15T09:00:00.000+00:00` | `1986-07-15T14:30:00+05:30` |

# Custom Fields

Custom fields are columns that store special or custom information related to customers, transactions, transaction line-items, coupons, and so on. As there is no control over the field values, it is difficult to run reports on custom fields. For example, if the custom field Gender has values M, F, and MF,  it becomes difficult for an analyst to work directly on such data.

## Create new custom fields

On InTouch, navigate to **Profile** > **Organization Settings** > **Master Data Management** > **Data Model** > **Custom Fields**.

![f4779df c1988e8 KhizBuomOEMzTo6etQ D6jatvalsXsdMdQ](https://files.readme.io/f4779df-c1988e8-KhizBuomOEMzTo6etQ_D6jatvalsXsdMdQ.png)

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

![7aa0226 Custom field overview](https://files.readme.io/7aa0226-Custom_field_overview.png)

To create a new custom field, click **Add new custom field**. The maximum number of characters supported for a custom field name is 20, and the maximum number of supported values for the custom field value is 250.

![b14da53 Create custom field](https://files.readme.io/b14da53-Create_custom_field.gif)

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
        Check this to make the field mandatory. This field applies to client-side applications like Instore and does not undergo any server-side validation.
      </td>
    </tr>

    <tr>
      <td>
        Is Updatable
      </td>

      <td>
        Check this to make the field value modifiable - once entered can be updated again when needed. This field applies to client-side applications like Instore and does not undergo any server-side validation.
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
        Choose the input type - text, text area, select box, checkbox, radio button, button, email body, feedback, and so on.
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
        Specify the sequence order of the custom field. For example, 1 to appear in the first position of the form. This field applies to client-side applications like Instore and does not undergo any server-side validation.
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

    <tr>
      <td>
        Enable Audit Trail
      </td>

      <td>
        Select the checkbox if you want to enable audit logging of the custom field. You can add up to 5 custom fields for audit logging.
      </td>
    </tr>

    <tr>
      <td>
        Is this pii data ?
      </td>

      <td>
        Select the checkbox if you want to classify the custom field as PII data.
      </td>
    </tr>

    <tr>
      <td>
        Is this psi data
      </td>

      <td>
        Select the checkbox to classify the extended field as sensitive data. Refer to the PSI data documentation for more [information on classifying PSI data](https://docs.capillarytech.com/docs/classify-potentially-sensitive-information-psi) .
      </td>
    </tr>
  </tbody>
</Table>

> 📘
>
> When you make changes in a custom field
>
> * For Store Server, do a complete sync from Settings or wait until the next auto-sync completes (usually every one hour).
> * For Thin Client, please restart your thin client and check whether you are able to see the changes.