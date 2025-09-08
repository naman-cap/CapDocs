---
title: Release Notes | AMJ'23
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
# Masking PII Data on the Databricks

**Version:** NA\
**Date:** July 18, 2023

## Overview

 Currently, internal capillary users and brand users can fetch the user information from the Capillary system in bulk via two places - with one of them being Databricks. Since this information contains critical PII information, this poses a serious security risk on the platform.\
This enhancement enables an Admin user to start or stop masking PII fields in the Analytics database at an Org level.

## How does it work?

Once data masking for a brand is enabled, fields marked as PII data (for now, First name, Last name, Mobile number, Email Id & External ID) would start getting masked in the Analytics database (that is, read\_api tables).\
All the PII fields would start showing up as a string of asterisks  “**\***”.

Admin users would be able to stop masking or pause the masking after getting the necessary approvals from the brands.

Any jobs created on the database to fetch the above-mentioned PII information will have to be run on admin\_read\_api tables which selected Databricks users would have access to.\
Roll out process

## Future enhancements

We are currently in the process of finalizing the process to start/stop PII data masking on Databricks and will get back with the process by Aug'23.

## Documentation

Link: [https://docs.capillarytech.com/docs/mask-pii-data-in-databricks](https://docs.capillarytech.com/docs/mask-pii-data-in-databricks)
