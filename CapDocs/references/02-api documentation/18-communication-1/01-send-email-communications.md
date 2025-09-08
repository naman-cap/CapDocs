---
title: Send email communications (not required)
excerpt: >-
  Lets you send an email to a customer. You can schedule the date and time you
  wish to send the message.
api:
  file: v2.json
  operationId: send-email-communications
deprecated: false
hidden: true
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
> ❗️ Make sure you have the appropriate access control configured. For more information, see [access group documentation](https://docs.capillarytech.com/docs/access-group).

# API endpoint

https\://\{host}/v2/communications/email

# Body parameters

| Parameter        | Datatype  | Description                                                                                        |
| ---------------- | --------- | -------------------------------------------------------------------------------------------------- |
| email            | array-obj | Complete details of the email to send.                                                             |
| to               | string    | Recipient’s email ID.                                                                              |
| cc               | string    | Email ID to be included in CC                                                                      |
| bcc              | string    | Email IDs to included in BCC.                                                                      |
| from             | string    | Email ID of the sender.                                                                            |
| subject          | string    | Subject of the email.                                                                              |
| body             | string    | Body of the email.                                                                                 |
| attachments      | obj       | Details of the attachment used in the email.                                                       |
| attachment       | array-obj | Details of each attachment in email.                                                               |
| fileName         | string    | Name of the attached file.                                                                         |
| fileType         | string    | Type of the file (file format).                                                                    |
| fileData         | strig     | Encoded data of the attachment. (Note: There's a typo in "strig". Assuming it should be "string".) |
| fileEncodingType | string    | Encoding type of the image attachment to upload images in the right format.                        |
| scheduledTime    | date-time | ISO standard date and time of scheduling the email.                                                |

# Response parameters

| Parameter                    | Description                                                                      |
| ---------------------------- | -------------------------------------------------------------------------------- |
| response.status.success      | Indicates if the request was successful (true/false).                            |
| response.status.code         | HTTP response code.                                                              |
| response.status.message      | A message indicating the status of the response.                                 |
| response.email.id            | The unique identifier of the email.                                              |
| response.email.to            | The primary recipient of the email.                                              |
| response.email.cc            | The email addresses included in CC.                                              |
| response.email.bcc           | The email addresses included in BCC.                                             |
| response.email.status        | The current status of the email.                                                 |
| response.email.subject       | The subject line of the email.                                                   |
| response.email.description   | The body/content of the email.                                                   |
| response.email.scheduledTime | The scheduled time for the email, in the format "YYYY-MM-DD HH:MM:SS::Timezone". |