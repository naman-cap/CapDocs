---
title: Configure SFTP Server for Data Export
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
Brands are required to have their own Secure FTP (SFTP) infrastructure for exporting data. Currently, Capillary supports data exports only via SFTP.

You can configure up to five SFTP servers. After the data is exported to the SFTP server, you can download it to your local machine.

<Note title="Note">
An SFTP once added, cannot be deleted or renamed. However, you can change server details and the path within that SFTP.
</Note>

# Prerequisites

* Destination SFTP server for data storage
* Source Host server IP for data retrieval
* FTP Configuration Details:
  * Hostname
  * Port number
  * Username and Password
  * Path to the folder

# Configuring SFTP

To configure the SFTP server, follow these steps:

1. Whitelist the below Capillary's IP addresses to allow connections to the brand's SFTP server.

   <Table align={["left","left"]}>
     <thead>
       <tr>
         <th style={{ textAlign: "left" }}>
           Cluster
         </th>

         <th style={{ textAlign: "left" }}>
           IPs
         </th>
       </tr>
     </thead>

     <tbody>
       <tr>
         <td style={{ textAlign: "left" }}>
           APAC1/INCRM
         </td>

         <td style={{ textAlign: "left" }}>
           54.235.251.85
           3.227.110.70
         </td>
       </tr>

       <tr>
         <td style={{ textAlign: "left" }}>
           APAC2/SGCRM
         </td>

         <td style={{ textAlign: "left" }}>
           3.0.242.134
           3.1.68.245
         </td>
       </tr>

       <tr>
         <td style={{ textAlign: "left" }}>
           EUCRM
         </td>

         <td style={{ textAlign: "left" }}>
           54.247.60.162
           52.214.98.25
         </td>
       </tr>

       <tr>
         <td style={{ textAlign: "left" }}>
           USCRM
         </td>

         <td style={{ textAlign: "left" }}>
           18.224.36.121
           18.189.151.155
         </td>
       </tr>
     </tbody>
   </Table>
2. On Insights+ navigate to **Settings** > **FTP** and click **Add FTP Server**.

![1ef2a10 561QTm2H7KBGG3xmQCq3paXYogNxh9D7WQ](https://files.readme.io/1ef2a10-561QTm2H7KBGG3xmQCq3paXYogNxh9D7WQ.png)

3. Enter the following details:

![2b5fc46 Sample config](https://files.readme.io/2b5fc46-Sample_config.png)

1. **Ftp name** - Specify a name for the SFTP Server. The name will be displayed when configuring an export job (in Select FTP).
2. **Server Address** - enter the URL of the SFTP. If the default port (22) is being used, then enter the URL of the client SFTP server. For example, `abc.def.com`.  If custom port 82 is used, then enter the URL with the port number of the client SFTP server.  For example, `abc.def.com:82`
3. **Username** - Enter the username of the SFTP server.
4. **Password** - Enter the password of the SFTP server.
5. **Default Target Folder box** - Specify the path in the SFTP server to which you want the data to be saved. For example, '/export'. If the path is not specified, data will be saved in the root directory of the SFTP server.
6. **Enable Password Protection**  - Select **Yes** to enable password protection for the files that will be exported to the current server.
7. Click **Submit**.

> 🚧 Note
>
> * If the specified folder is not identified in the Target Path of the SFTP server, the configuration fails.
> * The exported file follows this naming convention.
>   * schedulename**templateName\_timestamp. For example, DailySlabChange**SlabChangeLog**2019-10-29-12-30-02**1572356331802.

# Testing SFTP Configuration

You can either export a test file from Insights and test if the file is exported successfully or you can also check the connection using Wetty.

To check the connection using Wetty,

1. Run the command `nmap <hostname>` to check the open port for a host.

![bb8deed check port](https://files.readme.io/bb8deed-check_port.png)

2. Run the command `telnet <hostname> <port>`.

<br />

![827c7c6 check whitelist](https://files.readme.io/827c7c6-check_whitelist.png)