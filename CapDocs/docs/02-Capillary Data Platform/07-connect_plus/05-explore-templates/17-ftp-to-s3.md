---
title: FTP to S3
excerpt: This template enables you to transfer files from a FTP server to S3 server.
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
Perform the following:

1. In the **Connect-to-source** <Glossary>Block</Glossary>, enter the FTP location where the file is present and the location for saving the processed file. For information on this block. refer to the the  [Connect to source](https://docs.capillarytech.com/docs/configure-actions#connect-to-source) documentation.

2. In the **Connect to destination**, enter the S3 block details. For information on the fields, refer to [Push to S3 ](https://docs.capillarytech.com/docs/configure-actions#push-to-s3).

3. In the **Trigger section** block, define the duration at which the system should check the FTP location for the new file and update the audience list. For information on how to define the dataflow trigger duration, refer to the documentation on scheduling [Trigger](https://docs.capillarytech.com/docs/configure-actions#schedule-trigger).
