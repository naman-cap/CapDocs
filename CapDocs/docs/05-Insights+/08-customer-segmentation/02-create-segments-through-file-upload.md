---
title: Create segments through file upload
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
There are two ways of uploading a file -  

1. Upload a file directly, 
2. Upload the file through an FTP server.  

![395bb5af6530719d8ed6f866f647eb054db692eff75450c2877948b99be58884 Segmentation file upload flowchart](https://files.readme.io/395bb5af6530719d8ed6f866f647eb054db692eff75450c2877948b99be58884-Segmentation_file_upload_flowchart.drawio_1.png)

The segments created through upload are static as the customers/values in a partition do not change automatically. However, you can edit a segment to update details manually, i.e., you can add new customers or update existing segment values  (partition name) of customers. 

Your CSV file should have the following headers:

1st column header: user\_id, mobile, email or external\_id\
2nd column header: value

You can also track customer activities manually by making the respective segment SCD and specifying the date of the tracked values every time you update the segment.

### To create a segment through file upload:

1. On the EI navigation pane, click **User Segments**.

![170bff3 iAOxImIbcJCxdR19mFnrv1DAXGIPol0dJA](https://files.readme.io/170bff3-iAOxImIbcJCxdR19mFnrv1DAXGIPol0dJA.png)

2. Click **Create Segment**.

![13aacdb H6GXkzJgSXYXcL6l8OX5i9R9Ahr KjPOcQ](https://files.readme.io/13aacdb-H6GXkzJgSXYXcL6l8OX5i9R9Ahr-KjPOcQ.png)

3. In **Segment Name**, specify a name for the group.
4. In **Description**, specify a short description of the segment.
5. In **Type**, select **SCD** to keep a track of customer behavior for the current segment. Select **Non-SCD** to save only the current snapshot.
6. In **Method**, choose Upload for list creation through file upload.
7. Click **Next** to continue.

![2e523ac mzKe0PB182l8A0aWn uxHuglZ dGdr3sEQ](https://files.readme.io/2e523ac-mzKe0PB182l8A0aWn_uxHuglZ-dGdr3sEQ.png)

<Table align={["left","left"]}>
  <thead>
    <tr>
      <th>
        OPTION
      </th>

      <th>
        DESCRIPTION
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Valid from
      </td>

      <td>
        You need to manually specify the date when the events specified in the CSV file have happened (for SCD). Hence, whenever you upload a new file, it is required to specify the date on which the values are tracked
      </td>
    </tr>

    <tr>
      <td>
        Upload Type - Upload
      </td>

      <td>
        Select **Upload** to directly upload the CSV file and click Choose File to upload the fil  

        Sample contents of a .csv file with customer id and loyalty value: mobile,value44700900000,High 44700915020,Low\
        44700911011,High
      </td>
    </tr>

    <tr>
      <td>
        Upload Type - FTP
      </td>

      <td>
        Select **FTP** to upload through an FTP server >specify the path in the FTP server where the file is available and > click **Upload**  

        * \*Note:\*\* Enter a valid FTP path. FTP path must be relative to the configured root folder. For example, root\_folder/FTP path such as ftp\://demo\_apac/demo\_master/demo\_path/demo\*\*points.csv. Here, demo\_apac/demo\_master/ is the root folder and /demo\_path/ is the FTP path.  

        To use FTP, you should have configured the FTP  address and access credentials as explained below  

        1. Navigate to **Segments** > **Settings**.

        2. Specify **Server Address** (FTP server URL), **Username**, and **Password**.**Notes:**  

        3. The file name should adhere to the following format: "*segment name\_\_suffix*\*\*"\
           For instance, take 'demo\_\_points.csv' as an example. Here, 'demo' represents the segment name, separated by a double underscore from the 'points' suffix.

        4. The FTP path must point to the correct CSV file.

        5. The first row of the CSV sheet must be a column header.

        6. The first column header must be a user identifier such as user id, mobile, email, and external\_ID.\
           If the identifier is mobile(mobile number), country code is mandatory (without the "+" sign). For example, 919972752991.

        7. The second column header must have a partition value. For example, If the first column header is the user\_id(1,2,3, and so on) then the second column header must hold the partition value( high, medium, or low).
      </td>
    </tr>
  </tbody>
</Table>

8. Click **Upload & Proceed**. You will see the segment with the list of partitions as shown below

* **Partitions**: Partitions are different values of a segment. For example, if a segment has high loyal, low loyal, and medium loyal as segment values, then three partitions will be created (one for each value) 

![1169896 0Q6zvkGQanticR3gM EQM3JcsOSUGo44Vg](https://files.readme.io/1169896-0Q6zvkGQanticR3gM_EQM3JcsOSUGo44Vg.png)

9. Once the processing is completed, review the details and click **Create** 

![c598a33 BddAi 6RbjcbweODdxEQhmCE utHlUvO0g](https://files.readme.io/c598a33-BddAi_6RbjcbweODdxEQhmCE-utHlUvO0g.jpg)

The segment will be in Inprogress status initially and once processed, the status label will disappear automatically. 

* Inprogress: The segment creation is being processed
* Draft: Signifies draft state where the recent changes were not saved. If you open the segment, you will see Draft available: Save changes to see the partition values. You can save or Deactivate draft segments 

## Editing an existing upload-based segment

You can modify a segment to add or modify existing details. During editing the upload-based segment, the existing segment details will be completely replaced with the new details that you upload. So, make sure you create a new file accordingly.

<Note title="Note">
Each time you upload or import a file using the upload-based segmentation, the data from the new file replaces the existing data.
</Note>

### To edit a segment

1. On the Segments summary page, click on the segment that you want to edit.  You can filter the summary list by Type (SCD, Non-SCD, or All) and Method (Conditions, Upload, or All) and also search for a specific filter in the **Search** box.
2. Click **Edit Segment**.

![f89bc7f 9X2i2p7N5DztcxW2Zg216Zyp s UKVO Ng](https://files.readme.io/f89bc7f-9X2i2p7N5DztcxW2Zg216Zyp_s-UKVO_Ng.png)

3. Choose your preferred **Upload Type** and upload the new file
4. Click **Upload & Proceed**. Wait until the file is processed successfully
5. Click **Update**.
