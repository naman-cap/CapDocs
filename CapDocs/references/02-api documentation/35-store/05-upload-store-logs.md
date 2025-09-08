---
title: Upload Store Logs
excerpt: >-
  Uploads the log files of InStore as per the headers provided - supports
  activity logs and performance logs.
api:
  file: customer-v11.json
  operationId: upload-store-logs
deprecated: true
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
Uploading Activity Log Files to the Server

* Use the headers mentioned.
* Uploading Performance Log Files

<br />

<br />

***

## Headers

| Parameter Name              | Data Type | Description                                          |
| :-------------------------- | :-------- | :--------------------------------------------------- |
| Content-Type                | String    | multipart/form-data                                  |
| X-CAP-CLIENT-LOGFILENAME    | String    | Name of the file on the client's machine.            |
| X-CAP-CLIENT-LOGFILESIZE    | Long      | The size of the file in bytes in the client machine. |
| X-CAP-CLIENT-FILE-SIGNATURE | String    | Hash of file on client.                              |

<br />

## Request Query Parameters

| Parameter Name | Data Type | Description                                                                         |
| :------------- | :-------- | :---------------------------------------------------------------------------------- |
| uploaded\_time | DateTime  | Time at which the log file is uploaded in the database. Format: YYYY-MM-DD HH:MM:SS |
| logged\_time   | DateTime  | Time at which the log file is created in the database. Format: YYYY-MM-DD HH:MM:SS  |