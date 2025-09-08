---
title: Create Audience Group
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
Audience filters help you create specific audience groups based on customer behavior, purchase history, preferences, and other attributes. By using these filters, you can segment your audience more accurately and deliver personalized communication that drives better results.

There are three ways of creating audience groups -

1. Apply filter conditions (using audience filters)
2. Upload CSV file
3. Use existing groups.
4. Import via FTP connector

## Create audience group using audience filters

Filters facilitate the effectiveness of a campaign by targeting the right customers in the right context. You can build an audience group based on specific information in a certain period. The information could be on behavior, interests, demographic details, transactions, and more. For example, you can get high spending customers that did not visit your stores for the last three months.

**With filters you can**:

* Create  audience groups using various predefined filters such as transactions, customer details, demographics, custom field details, and loyalty informatio. For more information audience filters refer to **[About audience group filters](https://docs.capillarytech.com/docs/about-audience-group-filters)** documentation.
* Optimize a group using multiple filters to get a specific intended customer list. For example, you can build an audience group that purchased during Dec 1, 2021 - Jan 31, 2022 with marital status married.
* You can either use and/or operators between two filters.
* You can reuse an audience list in other campaigns.

This section focuses only on creating an audience list through filters (Apply filter condition).

To create an audience group through filters:

1. When creating campaigns, after creating the message type and click **Next**

![2c8899c r1odQX5RTgq0JLAaxzgzWpuYYmnv0GfUjg](https://files.readme.io/2c8899c-r1odQX5RTgq0JLAaxzgzWpuYYmnv0GfUjg.png)

2. Click **Add audience group**  > Create **audience group**
3. Specify a name for the filter group.

![04ffe27 JDoZtWdE Gb1577VW0wFcFRcsRy4pPbwcw](https://files.readme.io/04ffe27-JDoZtWdE-Gb1577VW0wFcFRcsRy4pPbwcw.png)

4. In **Loyalty program/Card** series, choose the scope of the audience from the list of loyalty programs or card series. You will see this option only for MLP-enbaled orgs.
5. Select the **Apply filter condition** and click **Next**

![728b758 PdyJt06PNkKPYB8l8s R3K5Ny8RkIkPFsg](https://files.readme.io/728b758-PdyJt06PNkKPYB8l8s-R3K5Ny8RkIkPFsg.png)

All customers will be selected by default.  You will see the count of customers on the right as highlighted in the screenshot above

5. **Define your Customer Base**: You need to define your customer base on which you want to apply filters. You can select all customers or customers of your preferred segments. You can do another round of filtering on the basis of loyalty status. Any filter that you apply will be on the selected customer base

* **Across Org or Specific Org Unit**: You can choose customers at the org level or filter customers of a specific org unit. To select org unit, on the header, click on the OU drop-down and select the desired OU. All is for the entire org

* **All Customers or Select segments**: You can either select all customers which is a default option or select customers from specific segments. Click on the respective edit option to select the desired option. For more information, see Select customers of Specific Segments.

* **Loyalty Status**:  You can also include or exclude customers of a specific loyalty status - loyalty customers, non-loyalty customers, and non-registered customers using the Loyalty Status field. For more information, see Select Customers of a Specific Loyalty status.

6. **Write Filter Conditions**: Once you have selected the required customer base, you can apply filters to get a very specific list that is needed. Use multiple filters to get your required customers from the combination of multiple filters or customers that satisfy any of the configured conditions. For example, you can get all customers who are in gold slab and their lifetime purchase value is more than $10000 using AND operator. For more information, see Using Multiple Filters

<Table align={["left","left"]}>
  <thead>
    <tr>
      <th>
        Category
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Loyalty
      </td>

      <td>
        Lets you build audience groups with loyalty behavior such as active points, expired points, redeemed points, current tier, registered store, registered date, demographic details, and tier migration.
      </td>
    </tr>

    <tr>
      <td>
        Transaction
      </td>

      <td>
        Lets you build an audience group based on purchases, returns, and recently purchased products or categories.

        For more information, see [Transaction based filters](doc:transaction-based-filters).
      </td>
    </tr>

    <tr>
      <td>
        Campaigns & Coupons
      </td>

      <td>
        Lets you build an audience group based on the count of redeemed coupons, about to expire coupons, and the number of messages received, and more.

        For more information, see the [Campaigns & Coupons based filters](doc:campaigns-coupons-based-filters) coupons based filters.
      </td>
    </tr>

    <tr>
      <td>
        User Profile
      </td>

      <td>
        Lets you build an audience group based on their demographic details, custom field details, subscription status, NDNC status, available communication channels, and more.

        * \*For more information, see [User Profile based filters](doc:user-profile-based-filters)
      </td>
    </tr>

    <tr>
      <td>
        Purchase pattern
      </td>

      <td>
        Lets you build an audience group based on their purchase behavior such as preferred shopping time, average transaction value, average basket value, top n customers, favorite products, and more.

        For more information, see [Purchase Pattern](https://docs.capillarytech.com/docs/purchase-patternbehavior-based-filters)
      </td>
    </tr>

    <tr>
      <td>
        Zero power filters
      </td>

      <td>
        Lets you build an audience group with a specific prediction. When you combine zero-powered filters with standard filters, the chances are high to achieve a better hit rate, better incremental sales by offering relevant products to customers at the right time.
      </td>
    </tr>

    <tr>
      <td>
        Behavioural event
      </td>

      <td>
        Lets you build an audience based on the behavioural vent of customers. For example, if you want to target users who has reviewed a product, you can filter the audience by adding the related  behavioural event filter (eg: User review event)
      </td>
    </tr>
  </tbody>
</Table>

7. To add more customers, click **Add more customers**.
8. Once you finish configuring the required conditions, click **Save Group** to save the group.

<Note title="Note">
s
* A filtered audience list gets refreshed everyday, during EI sync. You can enable "Execute message only after audience sync completion" in the campaign message delivery setting and ensure that the campaign proceeds only after confirming the EI sync completion and verifying the audience refresh's up-to-date status. For more information, refer to the [documentation on the same](https://docs.capillarytech.com/docs/options-to-schedule-messages#scheduling-messages-post-audience-sync-confirmation).
* By default, the system tries to sync the required data about two hours before the campaign run time. If the sync is delayed or fails, data from two days ago may be used instead, and a banner appears in Insights indicating that syncing is still in progress.
</Note>

## Create audience group using csv file

If you have the customer list with you offline that you want to use to send campaigns, you can do it by creating and uploading the CSV file. Ensure that you upload the right identifiers according the target channel. For example, if you want to send SMS campaign, you need to have the CSV file with mobile numbers, for email campaign it should be email IDs and so on.

<Note title="Note">
While uploading audience lists, if [dual eligibility ](https://docs.capillarytech.com/docs/customer_entity#dual-eligibility)is enabled for your organization, avoid using email addresses or mobile numbers, as these identifiers may not be unique. This is because multiple customers can share the same email or mobile number, which means the audience list may not work as expected.

To ensure accurate audience creation, use unique identifiers such as `customer_external_id` or `user_id`.
</Note>

To create a new Audience Group, refer to the following:

On Dashboard, click the **Audience** tab.

1. Create New.
2. Enter an **Audience Group name**.
3. Click **Upload a file**, and then click **Next**.

![2d5a33c 5dc9a64 N6XnEj jZ 4YDNYbqiyNsGLm8bOHgKEg3w](https://files.readme.io/2d5a33c-5dc9a64-N6XnEj-jZ_4YDNYbqiyNsGLm8bOHgKEg3w.png)

4. Refer to the following CSV upload instructions and upload a CSV file.

* Download a sample CSV file.
* Remove the headers from the CSV file.
* The file size can be up to 20 MB.
* All the duplicate entries will be merged

![d3bf1d7 9cc02f3 ey8og89 ORn3TKyDF5kyKk sWphsRRG7VQ](https://files.readme.io/d3bf1d7-9cc02f3-ey8og89_ORn3TKyDF5kyKk-sWphsRRG7VQ.png)

5. Select an appropriate tag for each column, and then click Confirm and Upload.

![6a72379 eb607c8 6nsPSLIJIczER1efjPaJPnxiMmtFzbw3PQ](https://files.readme.io/6a72379-eb607c8-6nsPSLIJIczER1efjPaJPnxiMmtFzbw3PQ.png)

6. Preview the reachability of the audience in the group, and then click **Done**.

![c24b837 9b0036a TGG3vFPib54EpZ0UC6ofzW2nHSXt6KQ1dw](https://files.readme.io/c24b837-9b0036a-TGG3vFPib54EpZ0UC6ofzW2nHSXt6KQ1dw.png)

<Note title="Note">
s
* While uploading a CSV, an identifier tag is compulsory to include. Mobile, email, external id, and user id. The tags should be present in continuation. You can add a maximum of 5 custom tags.
* After clicking Confirm and upload, if the upload is taking a longer time, you may close it. The upload process will still continue in the background.
* If an audience group is created using an uploaded CSV, the list will be static and not get refreshed.
</Note>

## Create audience group by combining existing lists

You can create an audience group by merging two audience groups. However, this is available only while creating a message.

![c0bd21c Q4 6QCNM027KpdGqUljAyhy9ec01A8Jc1Q](https://files.readme.io/c0bd21c-Q4_6QCNM027KpdGqUljAyhy9ec01A8Jc1Q.png)

To merge two audience groups in the message creation flow, refer to the following:

1. On the create a message flow, enter the new message details and then go to the Audience section.
2. Click on the **Add audience group**.

![8bbe696 sP6no9vDKHtlFEK 7GVafMldVXmKGsg2Qg](https://files.readme.io/8bbe696-sP6no9vDKHtlFEK-7GVafMldVXmKGsg2Qg.png)

3. Select the audience groups by selecting the checkbox next to it, and then click **Done**.
4. Edit the combined audience list name by clicking on the edit icon.

![6b5b94d 6LLUCtn8YPtiWGRW0nG2JWIbZlSNIn85sw](https://files.readme.io/6b5b94d-6LLUCtn8YPtiWGRW0nG2JWIbZlSNIn85sw.png)

* You can add more audience groups by clicking on **+Add audience groups**.
* You can remove an audience group by clicking on the cross icon "X" next to it.
* **Exclude audience**: You can also exclude audiences from the combined list. To exclude an audience group from the selected audience, enable the Exclude audiences option using the toggle button. Click +Add audience group and create or select an audience group. The selected audience will be excluded from the campaign.

The combined list will appear on the audience page with the title 'combined list' below the audience group name.

![da1f4b9 3xF3I5ufleAJv4D5QylpP4MHG3CCI sJkQ](https://files.readme.io/da1f4b9-3xF3I5ufleAJv4D5QylpP4MHG3CCI_sJkQ.png)

<Note title="Note">
**Combined audience lists remain static**

When you create an audience filter by combining two existing groups, the resulting dataset remains static. This means that any changes made to the two parent groups afterwards will not be reflected in this new dataset.

For instance, let's consider audience lists A and B. A includes elements 1, 2, and 3, while B includes elements 1, 2, 4, 5, and 6. If you create a new audience list C by selecting common elements from A and B, C will contain 1 and 2.

However, even if you later update A to include elements 1, 2, 3, and 5, the changes will not impact C. C will continue to include only elements 1 and 2.
</Note>

## Create audience group using import via FTP connector option

This option enables you to create the audience list using the imported audience file available on the FTP server, thus allowing you to fetch customer lists from an external source daily. This external source could be other than the Capillary database. By default, the system tries to sync the required data about two hours before the campaign run time. If the sync is delayed or fails, data from two days ago may be used instead, and a banner appears in Insights indicating that syncing is still in progress.

This avoids the need to use the [Segments capability on Insights+ ](https://docs.capillarytech.com/docs/introduction-to-customer-segmentation)to create audience groups containing customers from a source other than the Capillary database, such as a client FTP or a third-party FTP.

<Note title="Note">
This feature is not available for all the orgs. Contact your CSR or create a JIRA ticket to sustenance team  to enable this feature.
</Note>

### Prerequisite

* File from the Databricks must be available in the FTP.
* **Audience Reload from FTP** template in Connect+ must be configured.

> 🚧 Warning
>
> If you are changing the audience group name, make sure that you change the same in the linked Connect+ dataflow. Otherwise, the Connect+ dataflow gets detached and the list will not be refreshed.

### Procedure

To import the audience using FTP, perform the following:

1. Navigate to the Audience manager page and click  **Create new**.
2. Enter the **Audience group name**.

<Note title="Note">
Do not include spaces when entering the audience name. Adding spaces may result in an error.

![d132b650a7b2c9c91277a2ac3de08af893ae71351b499f047d1a71356b4c6942 Screenshot 2025 06 24 at 2](https://files.readme.io/d132b650a7b2c9c91277a2ac3de08af893ae71351b499f047d1a71356b4c6942-Screenshot_2025-06-24_at_2.16.28_PM.png)
</Note>

3. Select **Import via FTP connector** and click **Next**.

![fb3367b Select Import via FTP](https://files.readme.io/fb3367b-Select_Import_via_FTP.png)

1. From the **Unique identifier** drop-down, select the unique identifier. This should be the unique identifier available in the Databricks file.
2. In the Map fields section, map the fields to the FTP file.  For example, if column 1 in the file contains a user ID, select USER\_ID from the drop-down and map it against column 1.\
   You must define the mapping for at least one column and you can map up to a maximum of 3 columns.
3. Make sure that the **Audience Reload from FTP** dataflow on Connect+ is configured. This is required to update the audience list as per a defined schedule. For information on this template, refer to the [Connect+ documentation](https://docs.capillarytech.com/docs/audience-reload-from-ftp).
4. Click Done.

   ![8a41d6f Mapping FTP file](https://files.readme.io/8a41d6f-Mapping_FTP_file.png)
5. To check the details, click on the Audience group name. If the dataflow in Connect+ is not configured, an error message will be displayed in the details.

![96369e9 Status](https://files.readme.io/96369e9-Status.png)

For more information on configuring**Audience Reload via FTP** in Connect+, refer to the <Anchor label="Audience Reload from FTP" target="_blank" href="https://docs.capillarytech.com/docs/audience-reload-from-ftp#/">Audience Reload from FTP</Anchor> documentation.