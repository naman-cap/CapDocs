---
title: Create Email Template
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
To create email template, follow these steps.

1. On the dashboard, click the\*\* Creatives\*\* tab.

![f4c296901bb4e4adab1f0d4fe134a904a23898392255cfd9108f9415040d4e3a image](https://files.readme.io/f4c296901bb4e4adab1f0d4fe134a904a23898392255cfd9108f9415040d4e3a-image.png)

2. In the Creatives section, select **Email**.

![26bc65e8c257dc19cbe83a9092f3f16ccf35f83cbce9731fa323a15f902732e9 image](https://files.readme.io/26bc65e8c257dc19cbe83a9092f3f16ccf35f83cbce9731fa323a15f902732e9-image.png)

3. Click **Create new**.

![32d265c21070070174de451ffd5ec4fa02f27d5ea488121c16bbc5439199c9ab image](https://files.readme.io/32d265c21070070174de451ffd5ec4fa02f27d5ea488121c16bbc5439199c9ab-image.png)

3. Enter a **Creative name**.
4. Select a create option from the following options-

* **Upload zip file** - Upload compressed file (Zip) containing HTML & images
* **Create using editor**- Create using in-built template

![40c79690ef6eb74ed19110bc5352f1dddb41f57f8119355d4b4bb3b0ec104fce image](https://files.readme.io/40c79690ef6eb74ed19110bc5352f1dddb41f57f8119355d4b4bb3b0ec104fce-image.png)

## Upload zip file

You can create an email template by uploading a ZIP file, follow the given steps below:

1. Click **Upload zip file**, then click **Upload**.
2. Browse a file (format: .zip, .html, .htm), and then click **Continue**.
3. In the email body; modify the text and formatting, add images and labels, and then click **Create**.

![e8fc74c3865e7b5fa4d011057183dcfbd3f9d0630ce8fa265d80d0b60a6c17ba image](https://files.readme.io/e8fc74c3865e7b5fa4d011057183dcfbd3f9d0630ce8fa265d80d0b60a6c17ba-image.png)

## Create using the editor

You can create an email template by You can either start from scratch or select an existing template, follow the given steps below:

1. Click **Create** using editor, then click **Continue**.
2. You can either **start from scratch** or select an existing template.
3. Click **Select** on the appropriate template.
4. In the email body; modify the text and formatting, add images and labels, and then click **Create**.

![93584a2ec2dc5a805e92b6b31af02b19fcbf97109bf2a8de0b349fda0cfddc83 image](https://files.readme.io/93584a2ec2dc5a805e92b6b31af02b19fcbf97109bf2a8de0b349fda0cfddc83-image.png)

<Note title="Note">
s
* You can also create email content from Create message section.
* Unsubscribe tag is compulsory to include. To know more about each tag, see [Message content section](https://docs.capillarytech.com/docs/create-email-template).
* You can upload a file with a size limit of up to 5MB.
</Note>

## Troubleshooting email image quality issues

> 👍 Notes
>
> *   Do not forcefully enlarge images.
> *   Use actual images or image URLs in zip files without enlarging them.

| **Issue**                                       | **Resolution**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ----------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **File size is getting reduced**                | Expected behavior. File size reduction due to image transformations does not affect user experience. Specify image dimensions to maintain quality.  \<br>For example, if the email specifies a height and width of 200 x 300, images are transformed to match these dimensions instead of saving the original image, which might have very high dimensions. Consequently, the file size is reduced. This reduction could also occur due to dynamic image quality adjustments based on file sizes. |
| **Image getting compressed excessively**        | Compression varies with file size. Smaller images have less compression; larger images undergo higher compression. This makes sure that irrespective of the file size, similar quality of images is achieved after compression. Do not artificially enlarge images to increase the file size.                                                                                                                                                                                                     |
| **Images saved in avif format instead of jpeg** | Images are saved in their actual format except when the device supports avif format. avif format enables saving the images in smaller file sizes without impacting image quality.                                                                                                                                                                                                                                                                                                                 |

For information on Generate OTP APIs, refer to the [API documentation](https://docs.capillarytech.com/reference/otp).