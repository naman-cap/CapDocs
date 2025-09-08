---
title: Integration
deprecated: false
hidden: false
metadata:
  robots: index
---
To begin the integration, create a Jira ticket for the Capillary Customer Success team. The configuration activities are handled by the Capillary Customer Success team.

The integration involves:

* **[Migrating existing data from Capillary to Adobe](https://docs.capillarytech.com/docs/integration-adobe#/migrating-historical-data-from-capillary-to-adobe)**, and
* **[Configuring the continuous syncing of data from Capillary to Adobe](https://docs.capillarytech.com/docs/integration-adobe#/configuring-capillary--adobe-sync)**

## Prerequisites

| Category                           | Requirement                                                                                                                                                                                                                                                                                                                                 |
| ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Access and Accounts**            | Active Capillary organisation account with Connect+ access  <br />  Active Adobe Experience Platform (AEP) account with access to Schemas, Datasets, Sources, and Destinations  <br />  Valid Adobe Org ID and Sandbox name (Provided by the brand)                                                                                         |
| **Authentication and Credentials** | Adobe API credentials: API Key, Client ID, Client Secret, Scope, Grant Type, Auth URL  <br />  SFTP credentials for historical data migration: Hostname, Port, Username, Private key or password                                                                                                                                            |
| **Configuration Setup**            | JSON payload samples from Capillary (Profiles and Events)  <br /> - Adobe schemas: one for Profiles (with IdentityMap) and one for Events (XDM-compliant)  <br />  Datasets mapped to each schema in AEP  <br />  Field mapping reference (see [sample mappings](https://drive.google.com/drive/folders/1Ftf5wAvuqbKQncJLpESHNfivsf-N_7Ui)) |

## Migrating historical data from Capillary to Adobe

If you already use Adobe and need to align your existing Capillary data with customer profiles in Adobe Experience Platform (AEP), you can perform a one-time historical data migration. This process ensures continuity from day one by syncing past data with Adobe profiles.

Capillary uses the [Data Connectors framework in the Insights+](https://docs.capillarytech.com/docs/export#/) application to export data, which is then securely transferred to Adobe Experience Platform (AEP) over an SFTP connection configured on the Adobe source connector. The exported data is provided in CSV format and delivered as compressed `.zip` files to ensure both efficiency and security.

#### **Steps to perform migration**

1. Launch your SFTP server (for example, SFTP Cloud) and locate connection details such as username, port, and host.

   ![afae6960a76d0f680891936368cc6e7587ecfdc02cb6f65d7eabff7e3d8ebeb7 image22](https://files.readme.io/afae6960a76d0f680891936368cc6e7587ecfdc02cb6f65d7eabff7e3d8ebeb7-image22.png)

   ![01108d0c9cceb49891a73f66881cbaade33359e37e9ebda687921f36ef564d49 image1](https://files.readme.io/01108d0c9cceb49891a73f66881cbaade33359e37e9ebda687921f36ef564d49-image1.png)
2. Enter the SFTP connection details in Capillary’s Insights+ Data Connectors. You can also schedule exports. Data is sent as CSV files in compressed `.zip` format.using data connectors. Refer to [Insights+ documentation](https://docs.capillarytech.com/docs/export#/) for more information.
3. Check the status of your export schedule. The application displays if a transfer is completed. Review logs to verify the file path and details. Exported data arrives as a ZIP file.

   ![509e55877750a6eb95c34d18b13ede24ca405fbffbee82e88caf37f9eec989f2 image16](https://files.readme.io/509e55877750a6eb95c34d18b13ede24ca405fbffbee82e88caf37f9eec989f2-image16.png)
4. In AEP, go to **Sources** and add or select your SFTP account. Specify the repository and folder containing the exported files.

   ![977ac4f0f6823a5d49f015270b4cdbadfa805e9536ff2005e9880b7185735089 image20](https://files.readme.io/977ac4f0f6823a5d49f015270b4cdbadfa805e9536ff2005e9880b7185735089-image20.png)
5. Choose the target datasets, select **Delimited** as the file format, and set compression type to **zipdeplet**.

   ![f803162fc98af1e28071c6af39bafadb13c727c89320320687a0d5dbbccbc38a image19](https://files.readme.io/f803162fc98af1e28071c6af39bafadb13c727c89320320687a0d5dbbccbc38a-image19.png)
6. Select or create a dataset in AEP and map source fields (e.g., username → customer ID).

   ![0360837a92444880755633251df64128d2ec88d97aaa08a7a05e8a44146b8d89 image8](https://files.readme.io/0360837a92444880755633251df64128d2ec88d97aaa08a7a05e8a44146b8d89-image8.png)
7. Review and activate data flow. Review your setup, schedule the data flow, and start the import.
8. Monitor data flow status, confirm records in the target dataset, and preview profiles to ensure attributes were updated correctly.

   ![d470ba027650fe97fd3f7a6023afef773d91225a2b0728a7c77550286983e82e image6](https://files.readme.io/d470ba027650fe97fd3f7a6023afef773d91225a2b0728a7c77550286983e82e-image6.png)

![86cb3563da95bf1399270a73f467c8043ee4700a8b5dfd7fbb144a17d56f0d44 image18](https://files.readme.io/86cb3563da95bf1399270a73f467c8043ee4700a8b5dfd7fbb144a17d56f0d44-image18.png)

![97b73b2b6ef821a6274b2088cdd71f0ed9362ded8fe58d5ab7411594a51b1fb9 image12](https://files.readme.io/97b73b2b6ef821a6274b2088cdd71f0ed9362ded8fe58d5ab7411594a51b1fb9-image12.png)

![767fec2ae71fb7ec9f465635d6edca53f4420bda8f3eacdc255da97207f20dc5 image17](https://files.readme.io/767fec2ae71fb7ec9f465635d6edca53f4420bda8f3eacdc255da97207f20dc5-image17.png)

This process exports data from Capillary to SFTP and then imports it into Adobe Experience Platform, making customer profiles up to date with the latest data. You can also watch the video below for a walkthrough of the process.

<Embed typeOfEmbed="iframe" url="https://player.vimeo.com/video/1112896890?h=8b1a9ae0a6&badge=0&autopause=0&player_id=0&app_id=58479" href="https://player.vimeo.com/video/1112896890?h=8b1a9ae0a6&badge=0&autopause=0&player_id=0&app_id=58479" html="false" iframe="true" />

<br />

## Configuring Capillary → Adobe sync

To configure the Capillary - Adobe data sync, perform the following in the Adobe Experience Platform:

1. **Create schemas**

   1. Create one schema for **Profiles** and another for **Events**.
   2. Define both standard fields and client-specific custom fields.
   3. Add **IdentityMap** as the identifier. You can use email, phone number, or external ID as the key without changing the configuration.
   4. Ensure both schemas are XDM-compatible with enhancements for standard fields. 

   ![f537df0b51bae7be31b438455c703283639813d34656e368f69bb073689dcf0e image2](https://files.readme.io/f537df0b51bae7be31b438455c703283639813d34656e368f69bb073689dcf0e-image2.jpg)
2. **Create datasets**

   1. Create one dataset for Profiles and one for Events.

   2. Associate each dataset with the correct schema.

   ![d841b38aa8ef999eb1b38ed06b7ca07e3bdf8cb69e0c440d1389740a4ca76f6b image10](https://files.readme.io/d841b38aa8ef999eb1b38ed06b7ca07e3bdf8cb69e0c440d1389740a4ca76f6b-image10.png)
3. **Create a connection account**

   1. In Adobe Experience Platform, go to **Sources > Accounts**.

   2. Create a connection account between Capillary and Adobe using the **Streaming HTTP API** option.

   3. Use this account for secure, real-time data transfer.
4. ### **Create data flows and field mappings**

   1. Create one data flow for Profiles and one for Events.
   2. Upload a JSON payload in the Capillary format.
   3. Map the Capillary fields (for example, `customerId`, `points`, `tier`) to the related Adobe fields (for example, `userID`, `loyaltyPoints`, `loyaltyTier`).
   4. Select the appropriate dataset as the target for each data flow.

**Note:** Refer to the provided sample mappings for guidance.

<br />

<br />

![91b27abe5900cf1229f261b2e20fe33a7612e546fe6a0ec1f063f945ed3e2bff image21](https://files.readme.io/91b27abe5900cf1229f261b2e20fe33a7612e546fe6a0ec1f063f945ed3e2bff-image21.jpg)

![462d394a27c1212ebe6d022f881b113d0b677fa0e65f86600b91a5ea03cd7354 image11](https://files.readme.io/462d394a27c1212ebe6d022f881b113d0b677fa0e65f86600b91a5ea03cd7354-image11.jpg)

![8f3ffd4f00d66a9bdcb57474aaf0cf0d25a0a1ed12bf1671f86e0d42c922267e image9](https://files.readme.io/8f3ffd4f00d66a9bdcb57474aaf0cf0d25a0a1ed12bf1671f86e0d42c922267e-image9.jpg)

You can view the sample mappings, Postman collection, and profile schema samples in the [linked folder](https://drive.google.com/drive/folders/1Ftf5wAvuqbKQncJLpESHNfivsf-N_7Ui).

5. Step Perform One-time Setup in Capillary Connect+

After the Adobe setup, configure the integration in Capillary Connect+. This step is performed once per organisation.

1. Open **[Connect+](https://docs.capillarytech.com/update/docs/connect_plus#/)** > **Adobe Integration** template section and in the **API Configuration** section, enter the required Adobe API configuration details.

   * **Org ID**
   * **Sandbox Name**
   * **API Key**
   * **Client ID**
   * **Client Secret**
   * **Scope**
   * **Grant Type**
   * **Auth URL**

2. Click "Save Configuration".

Once this setup is complete, profile and transaction data will begin to flow from Capillary to Adobe.

<Embed typeOfEmbed="iframe" url="https://capillary.clueso.io/embed/f9f0becd-e220-47ed-a21c-4eb921a456d9?badge=0&autopause=0&player_id=0&app_id=58479" href="https://capillary.clueso.io/embed/f9f0becd-e220-47ed-a21c-4eb921a456d9?badge=0&autopause=0&player_id=0&app_id=58479" html="false" iframe="true" width="701px" height="300px" />

<br />
