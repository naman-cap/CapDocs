---
title: SFTP to SFTP transfer dataflow
excerpt: >-
  This template allows you to transfer a file from one SFTP location to the
  other with encryption/decryption.
deprecated: false
hidden: true
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
Perform the following actions/steps:

1. In the **Connect to source** section, enter the source server details. See [Connect to source](https://docs.capillarytech.com/docs/connect-to-source).
2. If required, in the **Encrypt data** section, enter the required details to encrypt data. See [Encrypt data](https://docs.capillarytech.com/docs/encrypt-data).
3. If required, in the **Decrypt data** section, enter the required details. See [Decrypt data](https://docs.capillarytech.com/docs/decrypt-data).
4. In the **Connect to destination** section, enter the destination details. See the Connect to destination details below.
5. In the **Trigger frequency** section, set the trigger frequency. See [Trigger frequency](https://docs.capillarytech.com/docs/trigger).

# Connect to destination

Enter the destination SFTP details where you want to transfer the data.

* **Host name**: Enter the URL (address) of the SFTP server where you want to transfer the data.
* **Username and Password:** Enter the credentials to access this SFTP server. This provides read/write access to the files on the server.
* **Remote Path**: Enter the destination path. If the URL is */APAC2Cluster/A\_Connect*, enter only the path \_APAC2Cluster/A\_Connect\_in the **Remote** text box.
* **Create Remote Directory**: Select the checkbox, if you want to create a folder in the destination path for saving the file.
* **Conflict Resolution**: From the drop-down, select the desired action to perform if a file with the same name exists at the destination location.
* **Zip Files**: Select the check box, if you want to zip the file.
* **Port**: Enter the destination SFTP server port number. Generally, 22.
* **Output File Name**: Enter the output file name.

![f2620ca Screenshot 2023 04 19 at 7](https://files.readme.io/f2620ca-Screenshot_2023-04-19_at_7.26.14_PM.png)

Click **Continue**.
