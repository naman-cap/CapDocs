---
title: Data export
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
# Introduction

Data Exports is a feature that allows us to share data that is stored in Capillary's system with the brand via a secure FTP location. The brand can use this data for:

* Conducting detailed analysis on customer behaviour, transactions, or campaigns;
* Integrating the exported data into external tools for analysis, or
* Retrieving comprehensive member data.

<Note title="Note">
Brands are required to have their own Secure FTP (SFTP) infrastructure to utilize this feature. Currently, Capillary supports data exports only via SFTP.
</Note>

# Templates in data export

You can set up an export job using predefined **[Standard templates](https://docs.capillarytech.com/docs/standard_templates)** or **[Custom templates](https://docs.capillarytech.com/docs/custom-templates)**.

Standard templates allow us to share data as is stored in the system in the form of facts, and dimensions.

Whereas custom templates are used to share aggregated metrics, built using KPIs, and dimensions. Custom templates give more flexibility in exporting data at a granular level.

For example, you can use a standard template to export transaction-level data as it is stored in our system. However, if you need KPIs at the customer level, you need to use custom templates.

# Use cases

A few scenarios where data exports help us are:

* Create custom templates for data export, according to your requirement, such as:
  * Export data of customers who received messages of a specific campaign.
  * Export the dataset of loyalty points scheduled for expiration on a specified date.
* Export custom fields, extended fields, and Profile V2 (profiles other than Instore, such as WebEngage and WhatsApp) data.
* Retrieve data based on either the most recent update or the original event date.
* Export IDs for stores, users, and products.
* Export a specific audience list.
* Automatically sync data based on the latest table updates.

# Limitations

* Supports a maximum of one year's data. The maximum file size that can be exported is 20GB. If the exported file exceeds this limit, a validation error is triggered.
* Always work with incremental datasets, which include only the updates or changes since the last export or processing. This approach optimizes resource utilisation and efficiency, particularly with large data volumes.
* You can select a maximum of five dimensions in a custom template for an export job.
* Includes events only from the past two years, based on the event date. Records linked to events older than two years are excluded, even if they were updated within the last two years.