---
title: Extended Fields
deprecated: false
hidden: true
metadata:
  robots: index
---
## Introduction

Extended fields are configurable, system-recognized fields designed to capture structured information specific to certain business verticals, such as food and beverage, hospitality, aviation, and retail. Unlike free-form custom fields, extended fields enforce data consistency through controlled inputs, making them ideal for operational and analytical use.

Each extended field is predefined with attributes such as:

* Field ID
* Name
* Entity type (Example: customer, transaction, transaction line item)
* Label name
* Data type (Example: integer, double, enum, string)

### Key characteristics

* **Standardization**: Extended fields help standardize data capture across brands or organizations, reducing inconsistency often seen with custom fields.
* **Controlled input**: Developers define field names, data types, enum values, and applicable scopes. Validation rules help maintain clean, usable data.
* **Rule-based value capture**: Values for extended fields can be captured and validated based on predefined rules. These rules include:
  * **Logical expressions**: Simple boolean conditions that dictate value acceptance.
  * **Regular expressions (regex)**: Sophisticated patterns that validate data format and content (For example, ensuring an IMEI or a Global Unique Identifier (GUID) adheres to a specific structure). This ensures data conforms to exact specifications from the point of entry.
* **Vertical-specific data capture**: Extended fields are created for specific business verticals like food and beverage, hospitality, aviation, or jewelry. This allows businesses to capture unique attributes relevant to their industry.
* **Reporting-friendly**: Since the values are consistent and structured, extended fields are readily available for reporting, filtering, and analytics.

### Entity types

Entity types define the specific categories of objects or records to which an extended field can be attached. The supported entity types are:

* customer
* regular\_transaction
* return\_transaction
* not\_interested\_transaction
* not\_interested\_return\_transaction
* regular\_lineitem
* return\_lineitem
* not\_interested\_lineitem
* not\_interested\_return\_lineitem

![ee369e03ea03f931204d9ff05a05e0d703ac82a8ca2848bed153e7226eb8a875 entity sub final](https://files.readme.io/ee369e03ea03f931204d9ff05a05e0d703ac82a8ca2848bed153e7226eb8a875-entity_sub_final.png)

### Properties of extended fields

* Combination of name and entity type for extended fields must be unique.
* Extended fields are not case-sensitive.

### Mapping of extended fields

Extended fields are mapped to vertical IDs that represent business domains. These vertical IDs are further linked to organization IDs, enabling standardized field usage across organizations within the same vertical.

The following diagram illustrates the mapping.

![36f8462 ZWDw6OuJQNhrsbLCLQt7UY4EBgvDDsWNkg](https://files.readme.io/36f8462-ZWDw6OuJQNhrsbLCLQt7UY4EBgvDDsWNkg.png)

### Verticals and vertical IDs

A vertical is a group that defines the nature of the business. An organization can have multiple verticals mapped to it.

For example, if an organization ABC sells fitness items and apparel, and another organization XYZ sells stationery and sports items, both organizations have one common vertical—sports.

Verticals have the following properties:

* Each vertical is mapped to the relevant set of extended fields.
* The vertical name should be unique across the table.

### Mapping extended fields and vertical IDs

The following properties apply to mapping extended fields and vertical IDs:

* Each extended field can be mapped to only one vertical ID.
* One vertical ID can be mapped to multiple extended fields.
* An extended field with vertical ID `-1` is available for all organizations. These are global fields and can be used by any organization.

### Mapping vertical IDs and organizations

Here are the properties of vertical ID and organization ID mapping:

* Organizations and Verticals have a many-to-many mapping.
* An organization cannot use an extended field that is not within the Verticals associated with it.
* Any organization can use extended fields with the Vertical ID `-1`.

### Validation rules

A validation rule can contain a logical or regex expression that evaluates the extended field values. Validation rules verify whether a field value meets the defined standards before saving it to MongoDB.

That is, if a rule is applied on an extended field, a validation check is performed whenever the field value is received. Once the field value is validated successfully, it will be saved to MongoDB.

Examples of logical rules: >, \<, >=, \<=, =

You first create rules (>, \<) and then map each rule to the extended fields. Following are the properties of validation rules:

* Multiple rules can be applied to an extended field
* One rule can be applied to different fields

### Other validations

In addition to rule validation, we also perform scope validation that is defined in the database tables.

* Only organizations mapped to them can use extended fields with custom enumeration values.
* An organization can use only extended fields that are mapped to it through vertical identifiers.
* Any organization can use extended fields with vertical identifier mapping of `-1`.

## Creating extended fields

To create an extended field, contact the Capillary support team. Extended fields are available in your organization by default. You can hide unused extended fields in the user interface (UI).

## Viewing extended fields

To view the default extended fields for your organization, do the following:

1. In InTouch, navigate to **Settings** > **Master Data Management** > **Data Model** > **Extended Fields**.

![90345f2 image](https://files.readme.io/90345f2-image.png)

2. To view all extended fields, click **All Extended Fields**. Expand the verticals to see the extended fields available for your organization.

![aabb2dc image](https://files.readme.io/aabb2dc-image.png)

## Updating extended fields

You can update an extended field to show or hide it, set the position in the UI, choose whether it is mandatory or optional, and add or remove enumeration values, mark as PII or PSI.

To update,

1. Click the extended field to edit in the **Enabled Extended Fields** tab.

![c2d3113 image](https://files.readme.io/c2d3113-image.png)

2. Update the extended field as required.\
   The screenshot shows the editable values for extended fields.

![14951f8abbb679b18a229acbdef10463b659933f5dcf8932f87ddf8e4bec4549 Update extended fields](https://files.readme.io/14951f8abbb679b18a229acbdef10463b659933f5dcf8932f87ddf8e4bec4549-Update_extended_fields.png)

The table shows the editable values with their descriptions.

| Field                                                            | Description                                                                                                                                                             |
| :--------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Insert Enum Values (applicable for fields with  `enum` datatype) | Enter each supported value for the field and click **Add**.                                                                                                             |
| New Enum Values (applicable for fields with `enum` datatype)     | Click the value to select and click **Remove**, to remove any value from the list.                                                                                      |
| Hide Display                                                     | Select the **Hide Display** checkbox to hide the extended field from InTouch.                                                                                           |
| Is Mandatory                                                     | Select the **Is Mandatory** checkbox to make the extended field mandatory.                                                                                              |
| Is Updatable                                                     | Select the **Is Updatable** checkbox to allow updating the extended field values once entered.                                                                          |
| Position                                                         | Enter the position of the extended field on the InStore UI. Use `1` for the top, `2` for the second, and so on.                                                         |
| Default Value                                                    | Enter the default value for the extended field.                                                                                                                         |
| Enable audit trail                                               | Select the checkbox to enable audit logging of the extended field. You can add up to 5 extended fields for audit logging.                                               |
| Is it PII data                                                   | Select the **Is it PII data** to classify the extended field as [PII data](https://docs.capillarytech.com/docs/pii-configuration#/).                                    |
| Reject txn on invalid value                                      | Select **Reject txn on invalid value** checkbox to reject the transaction if the values are invalid.                                                                    |
| Is it PSI data                                                   | Select the **Is PSI Data** checkbox to classify the extended field as [PSI data](https://docs.capillarytech.com/docs/classify-potentially-sensitive-information-psi#/). |

4. Click **Submit**.

The system updates the extended field.

## Enabling and disabling extended fields for a vertical

You can add or remove extended fields for a vertical. Do this from the **Extended Fields Vertical Mapping** tab. The **Disabled Verticals** section lists verticals that are available to your organization. The **Enabled Verticals** section lists verticals that are enabled for your organization.

![cfc82df97295921011906a4e2206ff9965efe6f0e47093cd75beabe82547750d Screenshot 2025 07 31 at 12](https://files.readme.io/cfc82df97295921011906a4e2206ff9965efe6f0e47093cd75beabe82547750d-Screenshot_2025-07-31_at_12.24.46_PM.png)

To enable a vertical,

1. From the **Extended Fields Vertical Mapping** tab, from the list of verticals under **Disabled Verticals**, select a vertical to enable to your organization.
2. Click **add >>**.
3. Click **Submit**.

The extended fields for the vertical are enabled for your organization.

To disable a vertical,

1. From the **Extended Fields Vertical Mapping** tab, from the list of verticals under **Enabled Verticals**, select a vertical to disable to your organization.
2. Click  **\<\< remove**.
3. Click **Submit**.

The extended fields for the vertical are disabled for your organization.

## Transformation Stats

This feature is no longer in use and is marked as deprecated.

![ccdecfaaeb51683f02c21f0a710076eb5ed95a6710418a469321f42ac8c97e1a Screenshot 2025 07 31 at 11](https://files.readme.io/ccdecfaaeb51683f02c21f0a710076eb5ed95a6710418a469321f42ac8c97e1a-Screenshot_2025-07-31_at_11.06.08_AM.png)

## Supported date formats in extended fields

Extended fields support the following date formats:

* yyyy-MM-dd
* yyyy-MM-ddTHH:mm:ssZ (ISO 8601 with Z for UTC timezone)
* yyyy-MM-ddTHH:mm:ss+hh:mm (ISO 8601 with offset)

The table below explains the behaviour using an example specific to the India cluster.

| **Input Format**            | **Example Value**             | **Interpretation**             | **Saved in DB (UTC)**           | **Shown in Member Care**    |
| --------------------------- | ----------------------------- | ------------------------------ | ------------------------------- | --------------------------- |
| `yyyy-MM-dd`                | `"1986-07-15"`                | Time assumed as `00:00:00` UTC | `1986-07-15T00:00:00.000+00:00` | `1986-07-15T05:30:00+05:30` |
| `yyyy-MM-ddTHH:mm:ssZ`      | `"1986-07-15T00:00:00Z"`      | Exact UTC timestamp            | `1986-07-15T00:00:00.000+00:00` | `1986-07-15T05:30:00+05:30` |
| `yyyy-MM-ddTHH:mm:ssZ`      | `"1986-07-15T14:30:00Z"`      | Exact UTC timestamp            | `1986-07-15T14:30:00.000+00:00` | `1986-07-15T20:00:00+05:30` |
| `yyyy-MM-ddTHH:mm:ss+05:30` | `"1986-07-15T14:30:00+05:30"` | Local time with offset         | `1986-07-15T09:00:00.000+00:00` | `1986-07-15T14:30:00+05:30` |

## Creating reports using extended fields

To display the extended fields on Insights and use this data to create reports, perform the following:

* Create a JIRA ticket to the Sustenance team and create a vertical-level field on the Capillary platform.
* Create a JIRA ticket to the Insights team and create an audience filter for the extended field.

## Configuring org extended fields through API

You can configure extended fields for your organization through the Configure organization extended fields API. See the [API documentation](https://docs.capillarytech.com/reference/configure-org-extended-field).