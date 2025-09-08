---
title: Add Customer Image
excerpt: Sets profile image for a customer.
api:
  file: v2.json
  operationId: add-customer-image
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
## Request Body Parameter

| Parameter | Type | Description                                 |
| :-------- | :--- | :------------------------------------------ |
| FILE      | File | Image file to be uploaded for the customer. |

<Note title="Note">
*   Use `form-data` in the request body and upload the image file under the key `FILE`.
*   This API accepts files up to 49 MB, regardless of file format.
</Note>

## Response Parameters

| Parameter       | Type    | Description                                   |
| :-------------- | :------ | :-------------------------------------------- |
| file            | Object  | File related information                      |
| \-acl           | String  | Access control level                          |
| \-Size          | String  | File size in bytes                            |
| \-Handle        | String  | Unique file identifier                        |
| \-lastModified  | String  | Last modified timestamp (YYYY-MM-DD HH:mm:ss) |
| \-latestVersion | Integer | Latest version indicator                      |
| \-name          | String  | Internal file path                            |
| \-namespace     | String  | File namespace                                |
| \-s3Token       | String  | S3 storage path                               |
| \-version       | Integer | File version                                  |

```
{
    "data": [
        {
            "code": 200,
            "file": {
                "acl": "PRIVATE",
                "fileSize": "18039",
                "fileHandle": "01a24b35-f1fa-4dc3-bbce-ab9bc5094e2c",
                "lastModified": "2025-04-21 03:01:43",
                "latestVersion": -1,
                "name": "100737/565039505/0",
                "namespace": "customerImage",
                "s3Token": "customerImage/100737/565039505/389fff57-1ed3-4bbb-96e0-6a541c8d20d1",
                "version": -1
            },
            "message": "Successfully uploaded file",
            "status": "true"
        }
    ],
    "warnings": [],
    "errors": []
}
```

# API specific error code

| Error code | Description             | Reason                                              |
| :--------- | :---------------------- | :-------------------------------------------------- |
| 8083       | Image size is too small | Uploaded image size is below minimum required size. |