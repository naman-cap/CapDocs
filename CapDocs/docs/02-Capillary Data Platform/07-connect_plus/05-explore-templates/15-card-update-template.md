---
title: Card update template
excerpt: ''
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
The card update template allows you to update the card details.

# Configuring card update dataflow

To configure coupon redeem dataflow, perform the below steps/actions:

1. In the **Connect-to-source section** <Glossary>Block</Glossary> enter the source server details where the source\
   data is present and the location for saving the processed file. See [Connect to source](https://docs.capillarytech.com/docs/configure-actions#connect-to-source).
2. In the **Decrypt data** block, if the files are encrypted, enter the details to decrypt the data. See [Decrypt data](https://docs.capillarytech.com/docs/configure-actions#decrypt-data).
3. In the **Transform Data** block, map the API fields with the source file. For information on how to map the fields, see [Transform data](https://docs.capillarytech.com/docs/configure-actions#transform-data).

   It is mandatory to map the statusLabel and the cardNumber fields with the file.

![27e665f image](https://files.readme.io/27e665f-image.png)

<br />

4. In the **Connect-to-destination** block, enter the API endpoint details.\
   For this template the API `/v2/card`, is used. See [Connect to destination](https://docs.capillarytech.com/docs/configure-actions#connect-to-destination).
5. In the **Trigger** block, enter the details to schedule the trigger. See [Trigger](https://docs.capillarytech.com/docs/configure-actions#schedule-trigger).