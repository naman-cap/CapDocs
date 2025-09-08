---
title: Configure Email Template & Content
deprecated: false
hidden: false
metadata:
  robots: index
---
You can create a Email template from scratch or by using an existing template.

# Creating a new email template from scratch

1. Navigate to **Creatives**, section >  **Email tab**, click **Create New**.
2. In the **Creative name**, enter the name for the Email template.
3. Select the mode for creating the template. You can either upload a ZIP file containing the HTML and images for the template, upload an HTML/HTM file, or start configuring the template using the editor. You can upload a file with a size limit of up to 5MB.
4. Select **Start from Scratch**.
5. Enter the subject and [configure the Email body](https://docs.capillarytech.com/docs/configure-email-content#/configuring-the-email-body-content).
6. Click **Create**. To see a preview, select **[Preview and Test](https://docs.capillarytech.com/docs/configure-email-content#/preview-and-test-mode)**.

# Creating a new email template using existing template

To create a new email template using existing template follow the given steps:

1. Navigate to **Creatives**, section >  **Email tab**, and from the list of existing templates, choose the desired template and click on **Edit**.
2. Update the **subject** and modify the email body as per needed.
3. Click **update**. To see a preview, select **[Preview and Test](https://docs.capillarytech.com/docs/configure-email-content#/preview-and-test-mode)**.

The email template is edited successfully.

## Configuring the Email body content

1. In the editor, Drag and drop the required blocks from the **Content** tab and the **Row** tab and add the content as required. You can perform the following:

   * Edit text with [labels](https://docs.capillarytech.com/docs/supported-labels-for-engagement-channels#/) and tags and apply formatting. Unsubscribe tag is mandatory for all the Email content. You can also customize the Unsubscribe message's landing page using [Vulcan](https://docs.capillarytech.com/docs/creating-a-microsite-using-vulcan#/).
     **Note:** Make sure that all tags contain data. Inconsistency in the tags will result in a validation error.

     ![](https://files.readme.io/1e07acaa4d47d453f485ada70b498cf9f87a175622160e0bc868a66fd209f853-image.png)
   * Add images
   * Personalize the message using [Liquid language](https://docs.capillarytech.com/docs/add-dynamic-content-using-liquid#/).Add dynamic headers and footers. You can also use the organization custom field to use dynamic header, footer etc according to the organization. This can help in a connected org set-up. Refer to the documentation [here](https://docs.capillarytech.com/docs/add-dynamic-content-using-custom-fields).
   * Add [Barcode](https://docs.capillarytech.com/docs/configure-email-content#/barcode-in-email) which will have the customer's loyalty identification information. This can be included in the email during a customer registration email or any other updates or campaigns in the email. For more information on barcodes, refer to the [barcode documentation](https://docs.capillarytech.com/docs/barcode-generation).
2. Click the **Settings** tab and adjust the content area, color, alignment etc.
3. Click **Create**. To preview the content, click **[Preview and Test](https://docs.capillarytech.com/docs/configure-email-content#/preview-and-test-mode)**.

### Rows tab

To design the layout, click the Rows tab on the right panel, drag, and drop it to your preferred position on the mail body. Similarly, you can add more rows as required. There are various rows available each with a different dimension.

![9ad26b090387a9797b4f67fdf300eef31f6464fd2011914b3ccf10d44233147b image](https://files.readme.io/9ad26b090387a9797b4f67fdf300eef31f6464fd2011914b3ccf10d44233147b-image.png)

### Content tab

Use the Content tab to add text, images, buttons, divider, social network links, HTML code, videos, and more to the email body (each row). Drag and drop the required content block to the desired position in the body.

![d7b4606f0125490d8be6b8f733c6a02b4719001561053b04953884b2d299bb7e image](https://files.readme.io/d7b4606f0125490d8be6b8f733c6a02b4719001561053b04953884b2d299bb7e-image.png)

#### Content Blocks

| **Block**     | **Description**                                                                                                                                                                                             |
| ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Title**     | To include a title.                                                                                                                                                                                         |
| **Paragraph** | To add text. This is similar to the text block.                                                                                                                                                             |
| **List**      | To add a list.                                                                                                                                                                                              |
| **Text**      | To include a text message.                                                                                                                                                                                  |
| **Image**     | To add images from the library or your local system.                                                                                                                                                        |
| **Button**    | To add action buttons such as Click here, Submit.                                                                                                                                                           |
| **Divider**   | To add columns to a row (divide a row into columns).                                                                                                                                                        |
| **Social**    | Include Social Channel icons to navigate recipients to the organization's social platforms. You need to link the respective URLs for each social channel icon (Facebook, Twitter, Instagram, and LinkedIn). |
| **HTML**      | To insert HTML code blocks in the template. For example, HTML tags, headers, hyperlinks, and more.                                                                                                          |
| **Video**     | To embed a video in the email. Add a video embed link in the input box. For example, you can embed a video representing specific information about the brand or product or brand ad.                        |
| **Icon**      | To add an image icon in the email body. An icon, a small image, or a symbol is usually used for the brand or product logos. `\<br>`\ Add an icon from the library and modify it as required.                |
| **Menu**      | To insert a menu bar in the email body. A menu is a navigation bar with links to each menu option. You can configure multiple menu items if required.                                                       |
| **Stickers**  | To include stickers from the library.                                                                                                                                                                       |
| **GIFS**      | To add animated images or GIFS from the library.                                                                                                                                                            |

### Block Options

| **Content Properties** | **Description**                                                                                                                            |
| :--------------------- | :----------------------------------------------------------------------------------------------------------------------------------------- |
| **Padding**            | Use to add an additional margin to the content on all sides (Overall) or each side of a box - Right, Left, Top, and Bottom.                |
| **Hide on**            | Hide on feature enables you to show the content on your preferred form factor. You can choose to hide content either on desktop or mobile. |

* Toggle between code view and normal view
  To switch to the code or editor mode, hover the mouse and click Switch editor.

<Note title="Note">
In code mode, you can only see editor design email using HTML code. Repeat the previous step to switch back to Drag-N-Drop editor mode.
</Note>

![695e0e70e96c8404af59760988b23b98046340c5223089b1303cce0baef5bf4f image](https://files.readme.io/695e0e70e96c8404af59760988b23b98046340c5223089b1303cce0baef5bf4f-image.png)

<Note title="Note">
After selecting the content block, you can view all the content properties and block options to modify the content.
For example, Font style, Font color, Bold, Italics, Alignment, Add bullets, etc.
</Note>

### Settings

| Block                            | Description                                                  |
| :------------------------------- | :----------------------------------------------------------- |
| **Content area width**           | Sets the width of the main content section in the email.     |
| **Content area alignment**       | Aligns the content area to the left and center.              |
| **Background color**             | Sets the overall background color of the email.              |
| **Content are background color** | Sets the background color specifically for the content area. |
| **Default font**                 | Sets the font of the text.                                   |
| **Link color**                   | Sets the color of all hyperlinks in the email.               |

# Barcode in Email

This feature enables you to create a barcode that contains customer identifier information and can be used by customers for identification purposes.  Customers can use this barcode at the POS to identify themselves and earn/claim loyalty benefits.

<Note title="Note">
* Barcode feature is not enabled by default. Create a [JIRA ticket](https://capillarytech.atlassian.net/browse/CAP-113627) to the sustenance team to enable the feature.
* Barcode feature can be used both in Loyalty programs and on Engage+.
</Note>

## Prerequisites to enable barcode

1. To enable barcode generation, the following configurations must be enabled:

   1. **CONF_REGISTRATION_BARCODE_GEN_ENABLED**: Set the value to 0 or 1. Default value: 0- False
   2. **CONF_BARCODE_VALUE_IDENTIFIER**: Set the value to 0,1 or 2 to set the barcode identifier. You can set the identifier according to the information to embed in the barcode.

| **Value** | **Description**                  |
| :-------: | :------------------------------- |
|     0     | Mobile number of the customer.   |
|     1     | Email ID of the customer.        |
|     2     | The external ID of the customer. |

2. Raise a [Jira ticket](https://capillarytech.atlassian.net/browse/CAP-114872) assigned to the Foundation team and enable bucket, namespace, and CDN URL support for the barcode service on the respective cluster where the organization is located.

## Configuring barcode

Capillary supports six types of barcodes, given below:

* ITF
* PDF417
* EAN 13
* UPC A
* QR code
* CODE 128

## Default barcode configuration

<Table>
  <thead>
    <tr>
      <th>
        **Field**
      </th>

      <th>
        **Value**
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Default barcode type
      </td>

      <td>
        CODE_128
      </td>
    </tr>

    <tr>
      <td>
        Image type
      </td>

      <td>
        PNG
      </td>
    </tr>

    <tr>
      <td>
        Default barcode styles`<br>`according to the barcode type:
      </td>

      <td>

      </td>
    </tr>

    <tr>
      <td>
        -ITF
      </td>

      <td>
        * Barcode text: Disabled[`<br>`-Image height: 200`<br>`- Image width: 400
      </td>
    </tr>

    <tr>
      <td>
        -QR_CODE
      </td>

      <td>
        * Barcode text: Disabled`\<br>`- Image height: 200`\<br>`- Image width: 300\<br>- Image width padding: Enabled\<br>- Image height padding: Enabled
      </td>
    </tr>

    <tr>
      <td>
        -PDF_417
      </td>

      <td>
        * Barcode text: Disabled`<br>`- Image height: 200 `<br>`- Image width: 300`<br>`- Image width padding: Enabled`<br>`- Image height padding: Enabled`<br>`- Font size: 5
      </td>
    </tr>

    <tr>
      <td>
        -EAN_13
      </td>

      <td>
        * Barcode text: Disabled`<br>`- Image height: 200`<br>`- Image width: 300`<br>`- Image width padding: Enabled`<br>`- Image height padding: Enabled`<br>`- Font size: 5
      </td>
    </tr>

    <tr>
      <td>
        -UPC_A
      </td>

      <td>
        * Barcode text: Enabled`<br>`- Image height: 200`<br>`- Image width: 300`<br>`- Image width padding: Enabled`<br>`- Image height padding: Enabled`<br>`- Font size: 5`<br>`- Font name: Arial
      </td>
    </tr>

    <tr>
      <td>
        -CODE_128
      </td>

      <td>
        * Barcode text: Disabled`<br>`- Image height: 200`<br>`- Image width: 300`<br>`- Image width padding: Enabled`<br>`- Image height padding: Enabled`<br>`- Font size: 5`<br>`- Font name: Arial
      </td>
    </tr>
  </tbody>
</Table>

| **Field**              | **Data Type** | **Description**                                                                                                                                    |
| ---------------------- | ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| **default_barcode**    | String        | Default barcode type that will be used if no barcode type is mentioned in the barcode service API.                                                 |
| **showBarcodeText**    | Boolean       | If set to true, the text will be displayed with config.                                                                                            |
| **imageHeight**        | Integer       | Height of the image in pixels.                                                                                                                     |
| **imageWidth**         | Integer       | Width of the image in pixels.                                                                                                                      |
| **imageWidthPadding**  | Integer       | Padding around the width of the barcode image. This property is applicable when `showBarcodeText` is set to true. Not applicable for ITF barcode.  |
| **imageHeightPadding** | Integer       | Padding around the length of the barcode image. This property is applicable when `showBarcodeText` is set to true. Not applicable for ITF barcode. |
| **fontName**           | String        | Name of the font. Not applicable for EAN 13, PDF417, QR Code, ITF barcode.                                                                         |
| **fontSize**           | String        | Size of the font. Not applicable for ITF and QR code.                                                                                              |

To edit the default barcode configuration, create a [JIRA ticket ](https://capillarytech.atlassian.net/browse/CAP-113628)to the Capillary sustenance team.

## Generating barcode

According to the configuration, during customer registration, the [Customer Add API ](https://docs.capillarytech.com/reference/add_customer)calls the barcode service and the barcode image is stored in the images table in the backend. If the identifier provided in the configuration is changed using [customer identifier change API](https://docs.capillarytech.com/reference/update-identifiersissue-card), a new barcode image is created and saved. You can retrieve the barcode image details using the [GET customer](https://docs.capillarytech.com/reference/get-customer-details-) details API.

<Note title="Note">
If you want to create a barcode for an existing user or regenerate a barcode, create a ticket to the Sustenance team.
</Note>

To embed the barcode in the email creative, perform the following:

1. Navigate to the Engage+ homepage, and select the campaign to send the email creative.

![4be352ad4081d8ee246e92b04d8da99838ef1623910c37cdf2a7f8c59bd84aad image](https://files.readme.io/4be352ad4081d8ee246e92b04d8da99838ef1623910c37cdf2a7f8c59bd84aad-image.png)

2. Click **New message** to create a new email creative.

![e9a055806609f4c5a60615ca0b42f10afb358cd8fc171529c14b2704391c1072 image](https://files.readme.io/e9a055806609f4c5a60615ca0b42f10afb358cd8fc171529c14b2704391c1072-image.png)

3. In the **Content block**, click **Add creative**.

![1c6aca9720da6cb3c144ddf35ffcb714d0da588c67c2322083149af6b4e18c66 image](https://files.readme.io/1c6aca9720da6cb3c144ddf35ffcb714d0da588c67c2322083149af6b4e18c66-image.png)

4. Navigate to the **Email** tab and click **Create new**.

![d020a7a68091d72b4d3a7e6b7b7d175c2d2e09634a088917040867aac7f02c75 image](https://files.readme.io/d020a7a68091d72b4d3a7e6b7b7d175c2d2e09634a088917040867aac7f02c75-image.png)

5. Click **Create using editor** and click **Continue**.

![f797fce98fd1ee10faeb51c71b5e369bbce82013b219ee595935c8a6bbdd864d image](https://files.readme.io/f797fce98fd1ee10faeb51c71b5e369bbce82013b219ee595935c8a6bbdd864d-image.png)

6. Select a template of your choice.

![119d0e479581826e793ba63ec8ca75b7f664b85d7b3b26dfb449ea78a13cf4ff image](https://files.readme.io/119d0e479581826e793ba63ec8ca75b7f664b85d7b3b26dfb449ea78a13cf4ff-image.png)

7. In the email body, click **Add label** and select Customer barcode label.

![e27bfb305a72cf402cee340009f737704e5214eac6cef3c17fa2eac2870ce370 image](https://files.readme.io/e27bfb305a72cf402cee340009f737704e5214eac6cef3c17fa2eac2870ce370-image.png)

8. Embed the `{{customer_barcode}}` tag in your email template.

![01a62dc4c0ff74986957539fedd107858d038c798caf338be4c144309fd11a52 image](https://files.readme.io/01a62dc4c0ff74986957539fedd107858d038c798caf338be4c144309fd11a52-image.png)

A barcode has been generated for the customer. A broken image is sent to the customer if a barcode fails to generate.

# Preview and test Email

You can use the preview and test options to verify the email content and design before sending it to your audience.

* **Preview**: View the email content and design before saving.
* **Test message**: Send test messages from the email test message section to selected test customers or test groups to review the content and design before sending to the audience.

### Previewing and testing an email message

To preview and test an email message, follow the steps below.

1. Create a new email template and add all the required tags to the template.
2. Select **Preview and test**. The application lists all tags in the template.
3. You can also  include the custom tags in the preview. To include custom tags, perform the following:
   1. Select **Enter custom value for tags**. An input form appears with input boxes for all the tags in the template content. The tags for which the values are static are mandatory. For example, tags such as `voucher_expiry_date`, `store name`, are mandatory and are marked with an asterisk (*) where as the static fields such as  `first name`, `registered_store_name` are always not mandatory.
   2. Add the values for the tags. You can add the values automatically or manually.
      1. To fetch the values automatically, navigate to the customer search box and search for a customer by using mobile number, email, or external ID. Once a customer is selected, all user-specific tags are automatically filled with that customer's data. The customer should have the values defined in their profile for the fields to populate the values automatically. Else, an error message will appear.
      2. To add the values manually, add the values against each tags. You can also select **Show JSON** Enter values for these tags in the JSON.
4. Select **Update preview**. The email content appears on the right with all tag values filled.
5. To discard, select **Discard custom values**. You can click either of the two layouts to view the email in desktop or mobile views.

![0ebd53d79f38d967d4074d68528c9ca07b3453a812122c3d855d149ff88a78ad  Gif 2](https://files.readme.io/0ebd53d79f38d967d4074d68528c9ca07b3453a812122c3d855d149ff88a78ad-_Gif_2.gif)

6. After updating the preview, select **Send test messages**. You can select individual test customers, test groups or select multiple test groups to send messages. The available test users are retrieved from the test customer configurations defined at the organization level. For more information about test messages, refer to [Test Customers](https://docs.capillarytech.com/docs/configure-campaign-level-settings#/test-customers) documentation.
7. Click **Send test message**. The message will be sent to the selected users.

![f734cfbb50223c36fc35a86e60bed3ca73aeaf91b5324fca56cc603d0b906300  Gif 3](https://files.readme.io/f734cfbb50223c36fc35a86e60bed3ca73aeaf91b5324fca56cc603d0b906300-_Gif_3.gif)

# Customize Unsubscribe landing page

You can customize the default unsubscribe landing page using [Vulcan](https://docs.capillarytech.com/docs/creating-a-microsite-using-vulcan#/). To request customization, connect with your Customer success executive.

You can customize the following elements:

* Brand logos
* Custom text or messaging
* Language-specific versions

![09002de767ba7d045df072b1c1e7a23f19017c2f89d6e1c59414511ac32d8e21 image 4](https://files.readme.io/09002de767ba7d045df072b1c1e7a23f19017c2f89d6e1c59414511ac32d8e21-image_4.png)

# Troubleshooting email image quality issues

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
