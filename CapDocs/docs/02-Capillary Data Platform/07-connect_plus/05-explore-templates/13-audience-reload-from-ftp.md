---
title: Audience Reload from FTP
excerpt: >-
  This page provides you with information on the Audience Reload from FTP
  template.
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
This template allows the refreshing of files in the defined FTP location at specified intervals and enables automatic updating of the audience list on Engage+.

# Prerequisites:

* The audience CSV file from the Databricks should be available in the FTP location.
* An audience list must be created in the Engage+ Audience Manager. The same name should be used when configuring the template. The audience name should not contain any 'whitespace.' For example, FTP Test is an invalid name, instead you should use FTP\_Test.

# Configuring the template

1. In the **Connect-to-source** <Glossary>Block</Glossary>, enter the FTP location where the file is present and the location for saving the processed file. For information on this block. refer to the the  [Connect to source](https://docs.capillarytech.com/docs/configure-actions#connect-to-source) documentation.

   > 📘 Notes
   >
   > * The source directory should be different for each audience list.
   > * It is recommended to keep the source FTP location name similar to the audience list name. For example, if the audience list name is INxyz, name the FTP file directory IN\_xyz.
   > * If the audience list is large, it is recommended to compress the file and upload. Make sure that you enable the **Unzip files** option.

![2424000 Concect to to source](https://files.readme.io/2424000-Concect_to_to_source.png)

2. In the **Push-To-S3**, enter the S3 block details. For more information, refer to [Push to S3 ](https://docs.capillarytech.com/docs/configure-actions#push-to-s3).

![fcafedb Push S3](https://files.readme.io/fcafedb-Push_S3.png)

**S3 Object name/Filename** - For this template, enter the object name in the format `<audience_Group_Name>/${filename}`, where audience\_Group\_Name is the audience name used in the Engage+.

**S3 Bucket Name** - Use the appropriate bucket name depending on the cluster region.

| Region          | Bucket name                 |
| :-------------- | :-------------------------- |
| INCRM / APAC    | campaignsindia              |
| USCRM           | uscrm-campaignst949oay82p   |
| EUCRM           | campaignseu                 |
| SEACRM          | seacrm-campaignstpdieqyipk  |
| ASIACRM / APAC2 | asiacrm-campaignspgxdbptutk |

<Note title="Note">
The access key and secret key are provided by the product team. Please reach out to them to obtain this information.
</Note>

3. In the **Destination-Iris-Audience** block, enter the API endpoint details. This API enables refreshing and updating the audience list as per the updated file in the FTP. The API used is `iris/v2/audience/ftp/reload`. Enter the details. as follows:

* API Method - POST
* Remote API URL - `{host_url}/iris/v2/audience/ftp/reload`. The host URL is cluster-based. For example, `https://eu.api.capillarytech.com/iris/v2/audience/ftp/reload`. Refer to the appropriate URL based on your cluster:

  | Cluster         | Remote API URL                                                   |
  | :-------------- | :--------------------------------------------------------------- |
  | EUCRM / APAC    | `https://eucrm.cc.capillarytech.com/iris/v2/audience/ftp/reload` |
  | INCRM / APAC    | `https://incrm.cc.capillarytech.com/iris/v2/audience/ftp/reload` |
  | ASIACRM / APAC2 | `https://sgcrm.cc.capillarytech.com/iris/v2/audience/ftp/reload` |
  | USCRM           | `https://uscrm.cc.capillarytech.com/iris/v2/audience/ftp/reload` |
* X\_CAP\_ORG - Organisation ID
* X\_CAP\_CT - Capilary API authentication token. The token is not mandatory and you can enter any random string in this field if you do not have token.

![e4b2fc9 API details](https://files.readme.io/e4b2fc9-API_details.png)

2. In the **Trigger section** block, define the duration at which the system should check the FTP location for the new file and update the audience list. For information on how to define the dataflow trigger duration, refer to the documentation on scheduling [Trigger](https://docs.capillarytech.com/docs/configure-actions#schedule-trigger).