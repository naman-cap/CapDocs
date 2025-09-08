---
title: Get Status of Redeemed Coupons (COPY)
excerpt: Retrieves the status of the uploaded coupon redeem job a coupon series.
api:
  file: v1.json
  operationId: get-status-of-redeemed-coupons-copy-1
deprecated: false
hidden: true
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
# API endpoint example

&lt;https://eu.api.capillarytech.com//coupon/api/v1/upload/getUploadRedeemedCouponStatus/535512&gt;

# Prerequisites

-   Authentication - OAuth authentication details
-   Access group resource - NA

# Resource information

|                       |                                                               |
| :-------------------- | :------------------------------------------------------------ |
| URI                   | /api/v1/upload/getUploadRedeemedCouponStatus/`{couponSeriesId}` |
| HTTP method           | GET                                                           |
| Pagination supported? | No                                                            |
| Rate limit            | NA                                                            |
| Batch support         | NA                                                            |

# Query parameter

| Parameter        | Description                                                                 |
| :--------------- | :-------------------------------------------------------------------------- |
| couponSeriesId\* | The ID of coupon series for which the user wants to know the redeem status. |

# Response parameter

| Parameter                  | Description                                                   |
| -------------------------- | ------------------------------------------------------------- |
| orgId                      | Organization ID associated with the result.                   |
| couponSeriesId             | ID of the coupon series.                                      |
| jobId                      | Job ID for the upload status.                                 |
| uploadRedeemedCouponStatus | Status of the upload (e.g., COMPLETED).                       |
| createdOn                  | Timestamp when the upload job was created.                    |
| updatedOn                  | Timestamp when the upload job was last updated.               |
| errorFileUrl               | URL for the error file, if any errors occurred during upload. |
| successFileUrl             | URL for the success file, if the upload was successful.       |
| uploadedFileUrl            | URL of the uploaded file.                                     |
| totalUploadedCount         | Total number of uploaded rows.                                |
| actualRowCount             | Actual number of rows in the uploaded file.                   |
| errorCount                 | Number of errors encountered during upload.                   |
| uploadTableName            | Name of the table where uploaded data is stored.              |
| uploadedFileName           | Name of the uploaded file.                                    |