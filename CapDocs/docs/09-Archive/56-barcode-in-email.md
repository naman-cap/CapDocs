---
title: Barcode in Email
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
This feature enables you to create a barcode that contains customer identifier information and can be used by customers for identification purposes.  Customers can use this barcode at the POS to identify themselves and earn/claim loyalty benefits.

<Note title="Note">
* Barcode feature is not enabled by default. Create a [JIRA ticket](https://capillarytech.atlassian.net/browse/CAP-113627) to the sustenance team to enable the feature.
* Barcode feature can be used both in Loyalty programs and on Engage+.
</Note>

# Prerequisties to enable barcode

1. To enable barcode generation, the following configurations must be enabled:

   1. **CONF\_REGISTRATION\_BARCODE\_GEN\_ENABLED**: Set the value to 0 or 1. Default value: 0- False
   2. **CONF\_BARCODE\_VALUE\_IDENTIFIER**: Set the value to 0,1 or 2 to set the barcode identifier. You can set the identifier according to the information to embed in the barcode.

      | Value | Description                      |
      | :---- | :------------------------------- |
      | 0     | Mobile number of the customer.   |
      | 1     | Email ID of the customer.        |
      | 2     | The external ID of the customer. |
2. Raise a [Jira ticket](https://capillarytech.atlassian.net/browse/CAP-114872) assigned to the Foundation team and enable bucket, namespace, and CDN URL support for the barcode service on the respective cluster where the organization is located.

# Configuring barcode

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
        Field
      </th>

      <th>
        Value
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Default barcode type
      </td>

      <td>
        CODE\_128
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
        Default barcode styles\
        according to the barcode type:
      </td>

      <td>

      </td>
    </tr>

    <tr>
      <td>
        * ITF
      </td>

      <td>
        * Barcode text: Disabled
        * Image height: 200
        * Image width: 400
      </td>
    </tr>

    <tr>
      <td>
        * QR\_CODE
      </td>

      <td>
        * Barcode text: Disabled
        * Image height: 200
        * Image width: 300
        * Image width padding - Enabled
        * Image height padding - Enabled
      </td>
    </tr>

    <tr>
      <td>
        * PDF\_417
      </td>

      <td>
        * Barcode text: Disabled
        * Image height: 200
        * Image width: 300
        * Image width padding:  Enabled
        * Image height padding: Enabled
        * Font size: 5
      </td>
    </tr>

    <tr>
      <td>
        * EAN\_13
      </td>

      <td>
        * Barcode text: Disabled
        * Image height: 200
        * Image width: 300
        * Image width padding:  Enabled
        * Image height padding: Enabled
        * Font size: 5
      </td>
    </tr>

    <tr>
      <td>
        * UPC\_A
      </td>

      <td>
        * Barcode text: Enabled
        * Image height: 200
        * Image width: 300
        * Image width padding:  Enabled
        * Image height padding: Enabled
        * Font size: 5
        * Font name: Arial
      </td>
    </tr>

    <tr>
      <td>
        * CODE\_128
      </td>

      <td>
        * Barcode text: Disabled
        * Image height: 200
        * Image width: 300
        * Image width padding:  Enabled
        * Image height padding: Enabled
        * Font size: 5
        * Font name: Arial
      </td>
    </tr>
  </tbody>
</Table>

| Field              | Data Type | Description                                                                                                                                      |
| :----------------- | :-------- | :----------------------------------------------------------------------------------------------------------------------------------------------- |
| default\_barcode   | String    | Default barcode type that will be used if no barcode type is mentioned in the barcode service API.                                               |
| showBarcodeText    | Boolean   | If set to true, the text will be displayed with config                                                                                           |
| imageHeight        | Integer   | Height of the image in pixels.                                                                                                                   |
| imageWidth         | Integer   | Width of the image in pixels.                                                                                                                    |
| imageWidthPadding  | Integer   | Padding around the width of the barcode image. This property is applicable when showBarcodeText is set to true. Not applicable for ITF barcode.  |
| imageHeightPadding | Integer   | padding around the length of the barcode image. This property is applicable when showBarcodeText is set to true. Not applicable for ITF barcode. |
| fontName           | String    | Name of the font. Not applicable for EAN 13, PDF417, QR Code, ITF barcode.                                                                       |
| fontSize           | String    | Size of the font. Not applicable for ITF and QR code.                                                                                            |

To edit the default barcode configuration, create a [JIRA ticket ](https://capillarytech.atlassian.net/browse/CAP-113628)to the Capillary sustenance team.

# Generating barcode

According to the configuration, during customer registration, the [Customer Add API ](https://docs.capillarytech.com/reference/add_customer)calls the barcode service and the barcode image is stored in the images table in the backend. If the identifier provided in the configuration is changed using [customer identifier change API](https://docs.capillarytech.com/reference/update-identifiersissue-card), a new barcode image is created and saved. You can retrieve the barcode image details using the [GET customer](https://docs.capillarytech.com/reference/get-customer-details-) details API.

<Note title="Note">
If you want to create a barcode for an existing user or regenerate a barcode, create a ticket to the Sustenance team.
</Note>

To embed the barcode in the email creative, perform the following:

1. Navigate to the Engage+ homepage, and select the campaign to send the email creative. 

![623cc4d image](https://files.readme.io/623cc4d-image.png)

2. Click **New message** to create a new email creative.

![4721516 image](https://files.readme.io/4721516-image.png)

3. In the **Content block**, click **Add creative**.

![a4468a5 image](https://files.readme.io/a4468a5-image.png)

4. Navigate to the **Email** tab and click **Create new**.

![f40d846 image](https://files.readme.io/f40d846-image.png)

5. Click **Create using editor** and click **Continue**.

   ![d38b3b4 image](https://files.readme.io/d38b3b4-image.png)
6. Select a template of your choice.

![9ca84df image](https://files.readme.io/9ca84df-image.png)

7. In the email body, click **Add label** and select Customer barcode label. 

   ![e12a5b1 Select label barcode](https://files.readme.io/e12a5b1-Select_label_barcode.png)
8. Embed the` {{customer_barcode}}` tag in your email template.

![444cae4 image](https://files.readme.io/444cae4-image.png)

A barcode has been generated for the customer. A broken image is sent to the customer if a barcode fails to generate.
