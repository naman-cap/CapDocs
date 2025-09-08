---
title: Upload Redeemed Coupons
excerpt: >-
  Lets you upload coupons that are redeemed for a coupon series in bulk. 


  You can also import coupons (Capillary CRM) that are redeemed externally using
  an endpoint.
api:
  file: v1.json
  operationId: upload-redeemed-coupons-copy
deprecated: false
hidden: true
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
# Body Parameter

| Parameter          | Datatype | Description                                                            |
| ------------------ | -------- | ---------------------------------------------------------------------- |
| customerIdentifier | enum     | Unique identifier of the customer to update redeemed coupons.          |
| couponIdentifier   | enum     | Coupon identifier used.                                                |
| file               | file     | The CSV file contains information on redeemed coupons.                 |
| uploadHeaders      | int      | The sequence (starts from 0) of the columns in the attached CSV file.  |
| Details            | string   | Any additional details or notes to capture for redeemed coupon upload. |

# Response parameter

| Parameter                  | Description                                                         |
| -------------------------- | ------------------------------------------------------------------- |
| orgId                      | Organization ID associated with the result.                         |
| couponSeriesId             | ID of the coupon series.                                            |
| jobId                      | Job ID for the redeem upload status.                                |
| uploadRedeemedCouponStatus | Status of the redeem upload.                                        |
| createdOn                  | Timestamp when the redeem upload job was created.                   |
| updatedOn                  | Timestamp when the redeem upload job was last updated.              |
| errorFileUrl               | URL for the error file if any errors occurred during redeem upload. |
| successFileUrl             | URL for the success file if the redeem upload was successful.       |
| uploadedFileUrl            | URL of the uploaded file for redeem.                                |
| totalUploadedCount         | Total number of uploaded rows for redeem.                           |
| actualRowCount             | Actual number of rows in the uploaded redeem file.                  |
| errorCount                 | Number of errors encountered during redeem upload.                  |
| uploadTableName            | Name of the table where uploaded redeem data is stored.             |
| uploadedFileName           | Name of the uploaded redeem file.                                   |
| fileName                   | Name of the file associated with the result.                        |