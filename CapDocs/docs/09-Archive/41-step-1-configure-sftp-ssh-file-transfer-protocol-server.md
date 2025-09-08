---
title: 'Step 1: Configure SFTP (SSH file transfer protocol) server'
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
This is the source from which you want to capture data. You need to provide read access to the live SFTP server as explained in the following.  

![1d2e546 ih7xoCK wMxPpLxKSCo5SMU7x2j2Mpi5lg](https://files.readme.io/1d2e546-ih7xoCK-wMxPpLxKSCo5SMU7x2j2Mpi5lg.png)

1. In **Hostname**, enter the URL (address) of the SFTP server.
2. In **Username** and **Password** to access the SFTP server. This enables read/write access to the server to capture data.
3. In **Source Directory**, specify the path in the server where the data files (CSV) are available. You cannot use the same path of an FTP server in two different dataflows (only one dataflow will execute in that case). 
4. In **Filename Pattern** , select the fine extension, currently, we support only \*.csv (only CSV file).
5. In **Processed Directory**, specify the path to save the processed file. The data is captured from the processed file. 
   * Processing is an operation of formatting and transforming a given set of data to extract the required information in an appropriate form.
6. Click **Continue**.
7. Proceed to **Step 2** to configure data mapping and transformation according to the API (currently, Customer Add and Transaction Add APIs are supported).
