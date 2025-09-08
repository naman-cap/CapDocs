---
title: Send Email (not required)
excerpt: >-
  This API allows you to send email to a specific email id. You can schedule the
  date and time you wish to send the message.
api:
  file: customer-v11.json
  operationId: send-email
deprecated: false
hidden: true
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
## Request Body Parameters

| Parameter            | Datatype  | Description                                                                                                                                                                                                                    |
| -------------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| email\*              | array-obj | Complete details of the email to send.                                                                                                                                                                                         |
| to\*                 | string    | Recipient’s email ID.                                                                                                                                                                                                          |
| cc                   | string    | Email ID to be included in CC                                                                                                                                                                                                  |
| bcc                  | string    | Email IDs to included in BCC.                                                                                                                                                                                                  |
| from\*               | string    | Email ID of the sender.                                                                                                                                                                                                        |
| subject\*            | string    | Subject of the email.                                                                                                                                                                                                          |
| body\*               | string    | Body of the email.                                                                                                                                                                                                             |
| attachments          | obj       | Details of the attachment used in the email.                                                                                                                                                                                   |
| attachment           | array-obj | Details of each attachment in email.                                                                                                                                                                                           |
| file\_name           | string    | Name of the attached file.                                                                                                                                                                                                     |
| file\_type           | string    | Type of the file (file format).                                                                                                                                                                                                |
| file\_data           | string    | Encoded data of the attachment.                                                                                                                                                                                                |
| file\_encoding\_type | string    | Encoding type of the attachment provided in fileData. Required for all base64 encoded image formats such as JPG, PNG, JPEG, and GIF. This is not required for other file types like TXT, and PDF which are not base64 encoded. |
| scheduled\_time      | date-time | ISO standard date and time of scheduling the email.                                                                                                                                                                            |

# Example JSON

```json
{
    "root": {
        "email": [
            {
                "to": "email3@gmail.com",
                "cc": "",
                "bcc": "",
              "from":"automation@gmail.com",
              "subject":"Testingemail",
              
              "scheduledTime":2024-02-22T09:25:06+05:30
            }
            
        ]
    }
}
```