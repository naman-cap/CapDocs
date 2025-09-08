---
title: SFTP to SFTP with Headers Definition
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
Use this template to download a single file from the SFTP server, unzip, remap the headers, zip and push to the FTP server.

# Use case

**Scenario 1**

Consider that you are transferring a file named `abc.csv` from the Capillary server to a brand's server. The file `abc.csv` columns have headers named `Transaction_value` and` Bill_ID`. However, the brand requests Capillary to send the file abc.csv with column header names` TAmount` and `Bill_No` respectively.

With the SFTP to SFTP with Headers Definition template, you can change the column header name in the file during file transfer from one location to another.

**Scenario 2**

Consider you are transferring a file named `abc.csv` from the Capillary server to a brand's server. The columns in the file `abc.csv` do not have header names. However, the brand requests Capillary to send the file `abc.csv` with column header names.

With the SFTP to SFTP with Headers Definition template, you can add header names in the file during file transfer from one location to another.

# Configuring SFTP to SFTP with Headers Definition

Below is the screenshot of the template showing the different steps.

![7aab0a8 template main](https://files.readme.io/7aab0a8-template_main.png)

To configure SFTP to SFTP with Headers Definition dataflow, the following are the steps:

1. In the **Connect-to-source** <Glossary>block</Glossary>, enter the source server details where the source data is present and the location for saving the processed file. See [Connect to source](https://docs.capillarytech.com/docs/configure-actions#connect-to-source).
2. In the **Connect-to-destination** block, enter the destination SFTP server details. See [Connect to destination](https://docs.capillarytech.com/docs/sftp-to-sftp-with-headers-definition#connect-to-destination).
3. In the **Define-headers-and-transform-data** block, enter header mapping. See [Rebuild headers / Define headers and transform data](https://docs.capillarytech.com/docs/configure-blocks-connectplus#rebuild-headers--define-headers-and-transform-data).
4. If the files are encrypted, enter the details to decrypt the data. For information on configuring this block, refer to [Decrypt data](https://docs.capillarytech.com/docs/configure-actions#decrypt-data) .
5. In the Encrypt-data block, enter the encryption details to encrypt the file. See [ Encrypt data](https://docs.capillarytech.com/docs/configure-actions#encrypt-data)
6. In the **Trigger-block**, enter the details to schedule the trigger. See [Trigger](https://docs.capillarytech.com/docs/configure-actions#schedule-trigger).

# Connect to destination

This block enables you to define the destination server details. Below is the screenshot showing the fields in the Connect to destination step.

![7d5d99dc71e1c777b823a5ab860483abb279c0a36e438c6579039623aad97710 Screenshot 2025 09 03 at 1](https://files.readme.io/7d5d99dc71e1c777b823a5ab860483abb279c0a36e438c6579039623aad97710-Screenshot_2025-09-03_at_1.00.55_PM.png)

Below are the fields in the block.

<Table align={["left","left"]}>
  <thead>
    <tr>
      <th>
        Field Name
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Hostname
      </td>

      <td>
        URL (address) of the SFTP server from where the source file is available. For example, data.capillarydata.com.
      </td>
    </tr>

    <tr>
      <td>
        Username and Password
      </td>

      <td>
        Credentials to access this SFT server. This provides read/write access to the files on the server.
      </td>
    </tr>

    <tr>
      <td>
        Remote Path
      </td>

      <td>
        Directory path in the destination server where the file is transferred. For example, /APAC2Cluster/A_Connect
      </td>
    </tr>

    <tr>
      <td>
        Create Remote Directory
      </td>

      <td>
        Choose this option to create a directory at the destination if it does not already exist.
      </td>
    </tr>

    <tr>
      <td>
        Zip Files
      </td>

      <td>
        Choose this option to zip the output file.
      </td>
    </tr>

    <tr>
      <td>
        Output File Name
      </td>

      <td>
        Name of the output file with extension. Extensions allowed: .txt, .csv
      </td>
    </tr>

    <tr>
      <td>
        Conflict Resolution
      </td>

      <td>
        Specifies how to manage conflicts when a file with the same name exists in the destination path.
        Replace - Replace the old file with the new file.
        Rename - Rename the old file.
        Ignore - Retain the new file name. A new file with the same name is created.
        Fail - Fails the file transfer.
        None - System decides to either Fail or Ignore.
      </td>
    </tr>

    <tr>
      <td>
        Port
      </td>

      <td>
        The destination SFTP port number. Generally, 22 for SFTP.
      </td>
    </tr>

    <tr>
      <td>
        Private key
      </td>

      <td>
        Private key used to authenticate an SFTP connection [using SSH](https://docs.capillarytech.com/docs/connect-to-source#/ssh-authentication).
      </td>
    </tr>

    <tr>
      <td>
        Key passphrase
      </td>

      <td>
        An optional passphrase associated with the SSH key. Provide the passphrase only if the passphrase was set during the key generation. If the private key does not have a passphrase, set the field to `null`.
      </td>
    </tr>
  </tbody>
</Table>

# Example use case

**Requirement:**
Transfer a file named `transactions.csv` from the Capillary server to Brand X's server. The file should be encrypted, the delimiter should be changed from a comma (`,`) to a pipe (`|`), and header mapping needs to be done.

**Steps:**

1. **Connect-to-source:**
   * **Hostname:** capillary.server.com
   * **Username:** cap_user
   * **Password:** cap_password
   * **Remote Path:** /source_path/transactions.csv

2. **Connect-to-destination:**
   * **Hostname:** brandx.server.com
   * **Username:** brandx_user
   * **Password:** brandx_password
   * **Remote Path:** /destination_path/
   * **Create Remote Directory:** Yes
   * **Zip Files:** Yes
   * **Output File Name:** transactions.csv
   * **Conflict Resolution:** Replace
   * **Port:** 22

3. **Define-headers-and-transform-data:**
   * **Headers Mapping:**
     ```json
     {
       "TransAmount": "Transaction_value",
       "BillNumber": "Bill_ID"
     }
     ```
   * **Output Headers Order:**
   ```
   TransAmount,BillNumber
   ```
   * **Input File Delimiter:**
     ```
     ,
     ```
   * **Output File Delimiter:**
     ```
     |
     ```
   * **Output Filename:**
     ```
     transactions.csv
     ```
   * **Is the file headerless?:**
     ```
     No
     ```

4. **Encrypt-data:**
   * **Encryption Method:** AES-256
   * **Encryption Key:** brandx_encryption_key

5. **Trigger:**
   * **Schedule:** Daily at 12:00 AM
   * **Trigger Condition:** File presence in the source directory

### Example Configuration

1. **Connect-to-source block:**
   ```yaml
   Hostname: capillary.server.com
   Username: cap_user
   Password: cap_password
   Remote Path: /source_path/transactions.csv
   ```

2. **Connect-to-destination block:**
   ```yaml
   Hostname: brandx.server.com
   Username: brandx_user
   Password: brandx_password
   Remote Path: /destination_path/
   Create Remote Directory: Yes
   Zip Files: Yes
   Output File Name: transactions.csv
   Conflict Resolution: Replace
   Port: 22
   ```

3. **Define-headers-and-transform-data block:**
   ```yaml
   Headers Mapping: {"TransAmount": "Transaction_value", "BillNumber": "Bill_ID"}
   Expressions: {"TransAmount": "exp{hdr'Transaction_value'+1}"}
   Output Headers Order: TransAmount,BillNumber
   Input File Delimiter: ,
   Output File Delimiter: |
   Output Filename: transactions.csv
   Is the file headerless?: No
   ```

4. **Encrypt-data block:**
   ```yaml
   Encryption Method: AES-256
   Encryption Key: brandx_encryption_key
   ```

5. **Trigger block:**
   ```yaml
   Schedule: Daily at 12:00 AM
   Trigger Condition: File presence in the source directory
   ```

### Detailed Explanation:

* **Connect-to-source:** This block configures the details of the source SFTP server where the file is located.
* **Connect-to-destination:** This block configures the details of the destination SFTP server where the file will be transferred. It includes options for creating directories, zipping files, and handling file conflicts.
* **Define-headers-and-transform-data:** This block handles the header mapping and data transformation. It changes column headers, modifies data using expressions, and sets the file delimiters.
* **Encrypt-data:** This block encrypts the file using the specified encryption method and key.
* **Trigger:** This block schedules the file transfer to occur daily and checks for the file's presence in the source directory.

This configuration ensures that the file is transferred securely, with the specified header mappings and delimiter changes, meeting Brand X's requirements.
