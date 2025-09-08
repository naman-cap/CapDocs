---
title: Custom Fields
deprecated: false
hidden: true
metadata:
  robots: index
---
## Introduction

Custom fields are user-defined attributes used to capture information not covered by standard or extended fields. They offer flexibility to store specialized data across entities such as customers, transactions, transaction line items, and coupons.

While custom fields are useful for capturing non-standard information, they can pose challenges in maintaining data consistency, generating accurate reports, and conducting reliable analysis.

### Scope of custom fields

You can create custom fields for the following scopes:

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

### Key limitations

* **Uncontrolled field values**\
  Custom fields often lack strict data entry rules, resulting in inconsistent or unclear data. For example, a gender field might have entries such as "M," "F," "Male," "Female," or "MF." These differences make it more challenging to filter, search, or report on the data, and often require manual effort to clean and standardize the values.
* **Limited reporting and analytics support**\
  Custom fields are less suitable for reporting and analytics than extended fields.
  * Custom fields cannot be used as dimensions in reports, which are essential for grouping and analyzing data.
  * Custom fields support only simple filtering, such as exact matches (regular expressions). They do not support advanced options, such as filtering by range or partial values. This limits their effectiveness in complex data searches.
* **Implications for CDP integration and data governance**\
  In Loyalty, custom and extended fields are often used interchangeably, such as in rule definitions. However,  Customer Data Platforms (CDPs) enforce stricter standards to ensure data consistency and quality.

  The uncontrolled nature of custom field values can hinder their direct use in CDP-driven use cases like personalization, segmentation, and automated workflows unless rigorous validation and standardization practices are applied.

## Creating a new custom field

To create a new custom field, perform the following:

1. On InTouch, navigate to  **Organization Settings** > **Master Data Management** > **Data Model** > **Custom Fields**.

![b432bc0 image](https://files.readme.io/b432bc0-image.png)

2. Click **Add New Custom Field.**

![f03eea1 image](https://files.readme.io/f03eea1-image.png)

3. Configure the new custom field.

   ![b14da53 Create custom field](https://files.readme.io/b14da53-Create_custom_field.gif)

<Note title="Note">
Custom field names have a 20-character limit, and custom field values can contain up to 250 values.
</Note>

The table shows the fields with their descriptions.

| Field                               | Description                                                                                                                                                       |
| :---------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Disabled ?                          | Select the **Disabled?** checkbox to hide the custom field from the UI.                                                                                           |
| Is Compulsory?                      | Select the **Is Compulsory?** checkbox to make the custom field mandatory.                                                                                        |
| Is Updatable?                       | Select this checkbox to allow updating the custom field values once entered.                                                                                      |
| Disable Custom Field ?              | Select this checkbox to delete the custom field.                                                                                                                  |
| Field Name                          | Enter the custom field name.                                                                                                                                      |
| Field Type                          | Select the type of custom field from the dropdown.                                                                                                                |
| Data Type                           | Select the data type of custom field from the dropdown.                                                                                                           |
| Field Scope                         | Select the type of field scope of the custom field from the dropdown.                                                                                             |
| Label                               | Enter the field name to appear on the UI                                                                                                                          |
| Default Value(s) (CSV)              | Enter a default value to the custom field.                                                                                                                        |
| Phase                               | Select the phase for the custom field from the dropdown.                                                                                                          |
| Position                            | Enter the position of the custom field on the InTouch UI. 1 for the top, 2 for the second.                                                                        |
| Rule (Infix form)                   | Configure regex for the field value in the case of the free text field.                                                                                           |
| Server Rule (Infix form)            | Enter the error message to show in case of regex failure.                                                                                                         |
| Regular Expression for verification | Enter the regular expression of the custom field.                                                                                                                 |
| Error message for Regex Failure     | Enter the error message to be displayed.                                                                                                                          |
| Help Text For The Field             | Enter the help text you want to show for the field.                                                                                                               |
| Enable Audit Trail ?                | Select the checkbox if you want to enable audit logging of the custom field. You can add up to 5 custom fields for audit logging.                                 |
| Is this pii data ?                  | Select the checkbox if you want to classify the custom field as [PII data](https://docs.capillarytech.com/docs/pii-configuration#/).                              |
| Is this psi data ?                  | Select the checkbox if you want to classify the custom field as [PSI data](https://docs.capillarytech.com/docs/classify-potentially-sensitive-information-psi#/). |

5. Click **Submit**.

The custom field is created.

## Viewing a custom field

1. To view the new custom field, navigate to **Organization Settings** > **Master Data Management** > **Data Model** > **Custom Fields**.
2. Click the scope of the custom field .\
   All custom fields within the scope are visible.

   ![1e9c2015c08a2f954caafdbdfa7577aa6c1c1f67fb1baf96542b95a091099869 scope of cf](https://files.readme.io/1e9c2015c08a2f954caafdbdfa7577aa6c1c1f67fb1baf96542b95a091099869-scope_of_cf.png)
3. Click the custom field to view.

![627aa87 image](https://files.readme.io/627aa87-image.png)

## Updating a custom field

To create a custom field, perform the following:

1. On InTouch, navigate to  **Organization Settings** > **Master Data Management** > **Data Model** > **Custom Fields**.

![9495020 image](https://files.readme.io/9495020-image.png)

2. Select the field you want to modify.
3. Click **Edit**.

![](https://files.readme.io/405f028-image.png)

4. Update the custom field according to your requirements.
5. Click **Submit**.

## Deleting a custom field

To delete a custom field, perform the following:

1. On InTouch, navigate to  **Organization Settings** > **Master Data Management** > **Data Model** > **Custom Fields.**
2. Click the field you want to delete.
3. Click **Edit**.
4. Select the **Disable Custom Field**.

![71c30ed image](https://files.readme.io/71c30ed-image.png)

5. Click **Submit**.

After you make changes in a custom field:

* For Store Server, perform a complete sync from Settings or wait till the next auto-sync completes.
* For Thin Client, restart your thin client and check if you are able to view the changes.

## Converting custom field to extended field

To convert a custom field to an extended field, raise a ticket to the Platforms team requesting the conversion. The converted extended field is be used in reports and campaigns.

<Note title="Note">
* The platforms team verifies whether the conversion is necessary; otherwise, the request is rejected.
* The platforms team carries out the mapping of custom field to extended field.
</Note>