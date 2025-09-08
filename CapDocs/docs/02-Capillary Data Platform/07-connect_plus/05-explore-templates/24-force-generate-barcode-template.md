---
title: Force generate barcode template
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
The force-generate barcode template allows you to generate barcodes for an existing customer. For more information on barcodes, refer to the documentation [here](https://docs.capillarytech.com/docs/barcode-generation).

# Configuring force generate barcode dataflow

To configure force generate barcode dataflow, perform the below steps/actions:

1. In the **Connect-to-source section** <Glossary>Block</Glossary> enter the source server details where the source\
   data is present and the location for saving the processed file. For the information on configuring this block, refer to [Connect to source](https://docs.capillarytech.com/docs/configure-actions#connect-to-source) documentation.
2. In the **Decrypt data** block, if the files are encrypted, enter the details to decrypt the data. For the information on configuring this block, refer to [Decrypt data](https://docs.capillarytech.com/docs/configure-actions#decrypt-data) documentation.
3. In the **Transform Data** block, map the API fields with the source file. For information on how to map the fields, see [Transform data](https://docs.capillarytech.com/docs/configure-actions#transform-data).
4. In the **Connect-to-destination** block, enter the API endpoint details.\
   For this template an internal API `/v2/customers/barcode/forceGenerate`, is used.  For the information on configuring this block, refer to [Connect to destination](https://docs.capillarytech.com/docs/configure-actions#connect-to-destination) documentation.
5. In the **Trigger** block, enter the details to schedule the trigger. For the information on configuring this block, refer to[Trigger](https://docs.capillarytech.com/docs/configure-actions#schedule-trigger) documentation.

For troubleshooting information, refer to the [troubleshooting section](https://docs.capillarytech.com/docs/troubleshooting-guide-connectplus) of the documentation.
