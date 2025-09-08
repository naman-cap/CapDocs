---
title: Upload Coupons (Batch)
excerpt: ''
api:
  file: v1.json
  operationId: upload-coupons-batch-copy
deprecated: false
hidden: true
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
# Path parameter

| Parameter      | Description                                                          |
| :------------- | :------------------------------------------------------------------- |
| couponSeriedId | Unique ID of the coupon series for which you need to upload coupons. |

# Body parameter

| Parameter                | Description                                                                                                   |
| :----------------------- | :------------------------------------------------------------------------------------------------------------ |
| file                     | Name of the CSV file with customer and coupon details.                                                        |
| customerIdentifier       | Customer identifier type used in the CSV file. Use NOT\_TAGGED as the identifier to upload only coupon codes. |
| customerIdentifierColumn | Column ID of the customer identifier in the uploaded CSV file.                                                |

# Header Required

| Header                | Description                    |
| --------------------- | ------------------------------ |
| Content-Type\*        | multipart/form-data            |
| x-cap-api-oauth-token | Generated authentication token |

# Response parameter

| Parameter                                | Description                                                  |
| ---------------------------------------- | ------------------------------------------------------------ |
| orgId                                    | Organization ID associated with the result.                  |
| couponSeriesId                           | ID of the coupon series.                                     |
| uploadJobStatuses.jobId                  | Job ID for the upload status.                                |
| uploadJobStatuses.uploadStatus           | Status of the upload (e.g., STARTED).                        |
| uploadJobStatuses.createdOn              | Timestamp when the upload job was created.                   |
| uploadJobStatuses.updatedOn              | Timestamp when the upload job was last updated.              |
| uploadJobStatuses.errorFileUrl           | URL for the error file if any errors occurred during upload. |
| uploadJobStatuses.successFileUrl         | URL for the success file if the upload was successful.       |
| uploadJobStatuses.uploadedFileUrl        | URL of the uploaded file.                                    |
| uploadJobStatuses.totalUploadedCount     | Total number of uploaded rows.                               |
| uploadJobStatuses.actualRowCount         | Actual number of rows in the uploaded file.                  |
| uploadJobStatuses.errorCount             | Number of errors encountered during upload.                  |
| uploadJobStatuses.uploadTableName        | Name of the table where uploaded data is stored.             |
| uploadJobStatuses.uploadedFileName       | Name of the uploaded file.                                   |
| uploadJobStatuses.audienceGroupId        | ID of the audience group.                                    |
| uploadJobStatuses.audienceGroupVersionId | Version ID of the audience group.                            |
| fileName                                 | Name of the file associated with the result.                 |