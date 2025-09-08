---
title: Approval Flow & Versioning
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
A data flow has the following states: `Draft`, `Awaiting Approval`, `Approved`, and `Live`. By default, a data flow starts in the `Draft` state. When sent for Neo admin approval, it moves to `Awaiting Approval`. After the Neo admin approves it, the state changes to `Approved`.

You can make an `Approved` version `Live`, but only one approved version of an API can be `Live` at a time.

# Approval Process for a Dataflow Version

A dataflow in the `Live` version is automatically triggered when invoked without including a variant ID in the headers. A dataflow version must be `Approved` before you can make it `Live`. Any user with Neo Edit access can create a dataflow and send it for approval.

## Sending for Approval

To send a dataflow version for approval, click **Send for approval** after composing and testing the dataflow.\
The dataflow moves to the `Waiting Approval` state.

<Image alt="Send for approval" align="center" border={true} src="https://files.readme.io/c18e825ddf39890c8d2f008883b7d5048cbfea4698ce2bd0f61a15bebbc453b0-send_for_approval.png">
  Send for approval
</Image>

## Approving a Dataflow Version

The Neo Admin can approve the dataflow version. To approve,

1. From the **Dataflow** page, open the dataflow sent for approval.  

2. From the version listing page for the dataflow, click on the version in `Awaiting approval` state.\
   The dataflow composing page opens.

3. Click **Review and approve**.\
   The version comparison opens.  

4. Review the changes in the version.\
   **Note**:  If multiple versions of the dataflow exist, you can select the versions to compare from the drop-down.

5. Click **Approve**.\
   A confirmation message appears.  

6. In the confirmation message, enter a reason for approval and click **Yes**.

**Note**: Once a data flow is `Approved`, you cannot modify it. 

![2924e1f49efcbf12e116d40c521b0cd20cb000cf386682ce5f099fa2ff3e7f4e Approve and Make Live 1 online video cutter](https://files.readme.io/2924e1f49efcbf12e116d40c521b0cd20cb000cf386682ce5f099fa2ff3e7f4e-Approve_and_Make_Live_1_online-video-cutter.com.gif)

<br />

## Making a Version Live

To make a dataflow version `Live`,

1. Open the **Dataflow** page and select the dataflow you want to make `Live`.  

2. On the Version Listing page, click the approved version you want to make Live.\
   The dataflow composing page opens.  

3. Click **Make Live**.\
   A confirmation message appears.

4. Click **Yes** on the confirmation message.

**Note**:

* It takes around 10 minutes for a version to become `Live`.  
* only one approved version of a dataflow can be Live at any time.  
* You can roll back one version and make another version Live. 

![7d050eba4f3aa75868f65202bb2d4e49d33f9d4d5ad8425b85fe5780fbdede0c Make Live](https://files.readme.io/7d050eba4f3aa75868f65202bb2d4e49d33f9d4d5ad8425b85fe5780fbdede0c-Make_Live.png)

<br />

# Versioning of a Dataflow

Neo dataflows are version-controlled. By default, a dataflow, when created, is in version `v1
` and in the `Draft` state, allowing users with edit access to compose the dataflow.

When a Neo Admin approves a version under review, the system automatically creates a new version with the next consecutive number. This new version starts in the Draft state and is a copy of the recently approved version, allowing further modifications.

## Compare Versions

You can compare code changes between different versions of a dataflow. 

To compare versions,

1. In the dataflow composing page, click on version compare icon.\
   The compare versions window open.  
2. In the compare versions window, use the drop-down to select any two versions to compare. 

**Note**:  The icon is available only for dataflows in the `Draft` state.

![7f38477da66fea0f2e7df6e0748cddd09721cabbcc923f2069a78f68c8c105bf compare versions](https://files.readme.io/7f38477da66fea0f2e7df6e0748cddd09721cabbcc923f2069a78f68c8c105bf-compare_versions.gif)

## Restore a Version

You can revert the current version of the dataflow to the most recently approved version.

To restore a version,

1. In the dataflow composing page, click on restore version icon.\
   A Revert Rule modal appears.  
2. Enter the dataflow name.  
3. Click **Yes.**

The version is retored to the most recently approved version.

![fc801ff47ed0e88360d3aa5ef960ddbb007fed2f29691f4e9c8a6b010f677bcd restore version](https://files.readme.io/fc801ff47ed0e88360d3aa5ef960ddbb007fed2f29691f4e9c8a6b010f677bcd-restore_version.gif)

## Version Listing Page

The version listing page lists the different versions of a dataflow.

To access the version listing page, on the **Dataflows** page, click on the intended dataflow. 

![fc592b2e13abea3620c60abd54f770ac36a2a4ade91362d5c180f1fea8449ad9 version listing page](https://files.readme.io/fc592b2e13abea3620c60abd54f770ac36a2a4ade91362d5c180f1fea8449ad9-version_listing_page.png)
