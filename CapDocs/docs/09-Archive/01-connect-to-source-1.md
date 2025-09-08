---
title: Connect to Source
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
This block enables you to define the source location of the data that needs to be ingested. The connect to source block has the following fields:

| Field name                   | Description                                                                                                                                                                                                                                                                              |
| :--------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Hostname                     | URL (address) of the SFTP/FTP server from where the source file is available. For example, _data.capillarydata.com_.                                                                                                                                                                     |
| Username and Password        | Credentials to access this SFTP/FTP server. This provides read/write access to the files on the server.                                                                                                                                                                                  |
| Source Directory             | The directory path where the source file is available. For example, _/APAC2Cluster/A_Connect_ Connect+ usually supports any text-based files with a delimiter, irrespective of extensions such as .txt, .csv, or .dat etc. In addition, _.ok _file format is also supported.             |
| Filename Pattern             | File names in the regex pattern. If you give a filename pattern _file_.*.csv _, the application takes any file that starts with the file name **file**.                                                                                                                                  |
| Processed Directory          | The path to save the file to be processed. The data to process is captured from the processed file. Processing is the operation of formatting and transforming a given set of data to extract the required information in the appropriate format. For example,  _/APAC2Cluster/Process_. |
| Unzip Files                  | If the files are compressed, you can select this option to unzip the file and then select the original file.                                                                                                                                                                             |
| API Error Filepath           | The SFTP/FTP path where you want to save the API error file. This file includes the error details that occurred during the  API calls. This field is applicable only where API endpoints are required (data ingestion).                                                                  |
| Search Directory Recursively | Select the checkbox, if you want to search for the defined file anywhere in the root folder of the server. For example, if there are multiple folders inside _/APAC2-Cluster/A_Connect_, it looks for files matching the pattern inside each folder under _/APAC2-Cluster/A_Connect_.    |
| Port                         | The source SFTP/FTP port number. Generally, 22 for SFTP and 21 for FTP.                                                                                                                                                                                                                  |
| Private key                  | Private key used to authenticate an SFTP connection [using SSH](https://docs.capillarytech.com/docs/connect-to-source#/ssh-authentication).                                                                                                                                              |
| Key passphrase               | An optional passphrase associated with the SSH key. Provide the passphrase only if the passphrase was set during the key generation. If the private key does not have a passphrase, set the field to `null`.                                                                             |

![Source directory file path](https://files.readme.io/59c3232-Source_file_location.png)

![82562e5eeb70594dd0fabfcad408be6066df45b26cc9207a462807ca8bd217e9 ConnectToSource](https://files.readme.io/82562e5eeb70594dd0fabfcad408be6066df45b26cc9207a462807ca8bd217e9-ConnectToSource.png)

## Defining column header for transform block

### Adding the source file header information using a CSV file with the column headers

You can upload a CSV file with the column headers of the input source file or define the header data manually. This makes mapping fields in the [transformation block](https://docs.capillarytech.com/docs/configure-actions#transform-data) easier. Once you define the headings, they are automatically retrieved in the transformation blocks and you can map corresponding API fields against them.

The maximum supported size of a CSV file is 5 MB. After attaching the file, you can delete it by clicking the delete icon. The system allows you to switch to the manual option after uploading the CSV file. The values should be separated by a comma only. Watch the video below for more information on uploading the CSV file and mapping the API fields.

![9ee491917f4e5e0861a94931859549433dbee10f480df8fc9b3980ac7e045b93 with header1](https://files.readme.io/9ee491917f4e5e0861a94931859549433dbee10f480df8fc9b3980ac7e045b93-with_header1.gif)

### Adding the header information manually

If you do not have a CSV file for mapping, you can select the **Add manually** option and define the headings manually in the transformation block. Watch the video below for more information.

![5383a4ecb74029e97fc1e8b6f1a36b3de26c6acc06981039cfc2fd750d314761 manualy header filling](https://files.readme.io/5383a4ecb74029e97fc1e8b6f1a36b3de26c6acc06981039cfc2fd750d314761-manualy_header_filling.gif)

If you do not have a CSV file for mapping and the source file is headerless you can select the **Add manually** option and choose the **Is file headerless** option to define the headings separated by a comma. These headings are retrieved in the Transformation block, and you can also add additional headings in the [transformation block](https://docs.capillarytech.com/docs/configure-actions#transform-data) itself. Watch the video below for more information.

![8177e2b331f7806f7017c2dd85c21d4eb0e284c9519291c33286265f58e464dd add manually](https://files.readme.io/8177e2b331f7806f7017c2dd85c21d4eb0e284c9519291c33286265f58e464dd-add_manually.gif)

## S3 File Service Location as a Source

| **Field Name**               | **Description**                                                                                                                                                                                                                                                                                                                    |
| ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Bucket Name                  | The name of your S3 bucket. Provided by the access team.                                                                                                                                                                                                                                                                           |
| Region                       | Region in which your bucket is located. Provided by the access team.                                                                                                                                                                                                                                                               |
| Access Key and Secret        | These credentials are required to access the S3 bucket. Provided by the access team.                                                                                                                                                                                                                                               |
| Input Path                   | The location within the S3 bucket is where the input data resides.                                                                                                                                                                                                                                                                 |
| Output Path (Processed Path) | Defines where the processed data will be placed in the S3 bucket. The output path cannot be the same as the input path or a sub-path of the input path (e.g., you cannot have "input/" and "input/processed/"). Additionally, the output path cannot be the root ("/"); a folder must be created within the root for this purpose. |
| Error Path                   | Designates the location for storing error files.                                                                                                                                                                                                                                                                                   |

## SSH Authentication

SSH (Secure Shell Protocol) is a secure method of connecting to your SFTP (SSH File Transfer Protocol) servers for data transfer. Instead of passwords, SSH authentication relies on a key pair: a public key and a private key.

* **Private key**: Stored on your device and used when you connect to the server.
* **Public key**: Shared with the access team, who link it to your username on the SFTP server to enable SSH-based authentication.

Optionally, you can add a passphrase when creating your key for additional security.

### Steps to Enable SSH Authentication for SFTP

To use SSH for SFTP connections in the **Connect to Source** block, complete the following steps:

1. **Generate an SSH key pair**
   i. Open your terminal (macOS or Windows) and run:

   ```bash
   ssh-keygen -t rsa -b 4096 -C "tom.sawyer@capillarytech.com"
   ```

   * `-t`: Specifies the key algorithm. RSA is recommended.
   * `-b`: Specifies the key length in bits. A higher value indicates stronger encryption.
   * `-C`: Adds a comment, typically your email address, for identification.

   ii. When prompted, choose a location to save the keys.

   * macOS: `/Users/user_name/.ssh/`
   * Windows: `C:\Users\user_name\.ssh\`

   Two files are generated:

   * `id_rsa` → Private key
   * `id_rsa.pub` → Public key

   _(Optional)_ When prompted, add a passphrase to secure the key. Press **Enter** to skip if you do not want one.

   ![72d7add3f3386adad4df42fb074ae4a5f214a6c3d96c920c594d2f1e5f762c93 ssh keygen](https://files.readme.io/72d7add3f3386adad4df42fb074ae4a5f214a6c3d96c920c594d2f1e5f762c93-ssh_keygen.png)

2. **Share the public key**

   1. Locate the `.pub` file (public key) on your device.
   2. Create a Jira ticket for the access team, and include:

* Public key
* User email ID
* Folder path for error and processed files
* Required permissions

For details, refer to the [sample Jira ticket](https://capillarytech.atlassian.net/browse/ACM-6356) for instructions.

3. **Prepare your private key for Connect+**
   1. Locate your private key file (e.g., `id_rsa`).
   2. Encode the private key in Base64 format. You can use a terminal command or an online Base64 encoding tool.

      The encoded key must include the BEGIN/END tags:

      ```
      -----BEGIN OPENSSH PRIVATE KEY-----  
      Base64 content  
      -----END OPENSSH PRIVATE KEY-----  
      ```

      Keys without these tags are invalid.

### Authentication Rules

* If a private key is used, set the **Password** field to `null`.
* You cannot provide both a password and a private key.
* If you switch from password-based authentication to key-based, replace the password with `null` and configure the private key.

<br />