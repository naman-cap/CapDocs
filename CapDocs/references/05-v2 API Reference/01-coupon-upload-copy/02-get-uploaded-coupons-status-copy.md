---
title: Get Uploaded Coupons' Status
excerpt: Retrieves the status of a coupon upload job.
api:
  file: v1.json
  operationId: get-uploaded-coupons-status-copy
deprecated: false
hidden: true
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
# Query parameter

| Parameter      | Description                                           |
| :------------- | :---------------------------------------------------- |
| couponSeriesId | The unique ID of the coupon series to get the status. |

# Response parameter

| Parameter              | Description                                                      |
| ---------------------- | ---------------------------------------------------------------- |
| orgId                  | Organization ID associated with the result.                      |
| couponSeriesId         | ID of the coupon series.                                         |
| jobId                  | Job ID for the upload status.                                    |
| uploadStatus           | Status of the upload.                                            |
| createdOn              | Timestamp when the upload job was created.                       |
| updatedOn              | Timestamp when the upload job was last updated.                  |
| errorFileUrl           | URL for the error file if any errors occurred during upload.     |
| successFileUrl         | URL for the success file if the upload was successful.           |
| uploadedFileUrl        | URL of the uploaded file.                                        |
| totalUploadedCount     | Total number of uploaded rows.                                   |
| actualRowCount         | Actual number of rows in the uploaded file.                      |
| errorCount             | Number of errors encountered during upload.                      |
| uploadTableName        | Name of the table where uploaded data is stored.                 |
| uploadedFileName       | Name of the uploaded file.                                       |
| audienceGroupId        | Audience group ID associated with the upload job.                |
| audienceGroupVersionId | Version ID of the audience group associated with the upload job. |