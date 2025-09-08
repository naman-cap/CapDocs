---
title: Getting started
excerpt: This page provides you with information on geting started with Connect+.
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
# Prerequisites

*   **Know about terminologies used in Connect+** -  Refer to documentation on [Connect+ terminologies](https://docs.capillarytech.com/docs/connectplus_overview#terminologies-in-connect---understanding-key-concepts).
*   **OAuth credentials, API client secret and key** - Connect+ supports only OAuth authentication. For information on how to create a client secret and key, refer to the documentation [Creating an API client key and secret](https://docs.capillarytech.com/docs/api-client#creating-an-api-client-key-and-secret).
*   **Access to the relevant access groups** - If you do not have sufficient access group permission, the API will not run successfully. For more information on setting access group permissions, refer to our documentation on [access groups](https://docs.capillarytech.com/docs/access-group).
*   **Intouch access to organization** - To access Connect+ for an organization, you must gain Intouch access to that organization. To request Intouch access, submit a Jira ticket with the Access Control Team.
*   **FTP server for file transfer with appropriate access** - Move access is required for uninterrupted movement of the files between folders.

# Accessing Connect+

To access Connect+ from the Intouch home page,

1. Select the organization to open Connect+.
2. Click **Home** and select **Connect+**.

![39b36a5 Connect](https://files.readme.io/39b36a5-Connect.png)

The system redirects you to Connect+ without needing to log in again.

# Creating dataflow

Dataflow is a defined sequence of steps or operations that you set up to collect data from a defined source, transform, or process data, and transfer it to a defined location.

To create a dataflow, follow the steps below:

1. On the Connect+ homepage, from the drop-down, select the workspace to add your dataflow.

![c9677f9 Select workspace](https://files.readme.io/c9677f9-Select_workspace.gif)

1. Click on **Add dataflow**.

![51f4ecb add](https://files.readme.io/51f4ecb-add.gif)

3. In the **Dataflow name** text box, enter the name for the dataflow.

![9da1fae dataflow new](https://files.readme.io/9da1fae-dataflow_new.gif)

3. In the **Template** section, click **Select template** and from the **Dataflow templates** window, select your preferred template.

![71b1087 save](https://files.readme.io/71b1087-save.gif)

4. Click **Done**.
5. Click **Continue**.

![2188740 Click continue](https://files.readme.io/2188740-Click_continue.gif)

The blocks to configure the template appear.

> 🚧 Note
>
> These are based on the template selected and can differ from template to template.

6. Refer to the documentation of the respective block and enter the details:

* [Connect to Source](https://docs.capillarytech.com/docs/configure-actions#connect-to-source)  - Data source information action block
* [Decrypt-data](https://docs.capillarytech.com/docs/configure-actions#decrypt-data) - Encryption details action block
* [Transform-data](https://docs.capillarytech.com/docs/configure-actions#transform-data) - Mapping header action block.
* [Connect to Destination](https://docs.capillarytech.com/docs/configure-actions#connect-to-destination) - API details action block
* [Trigger ](https://docs.capillarytech.com/docs/configure-actions#schedule-trigger) - Schedule trigger action block

![964e6e0 Action block](https://files.readme.io/964e6e0-Action_block.png)

7. Click **Save and continue**

If all the inputs are valid, Connect + will successfully create the data flow. For monitoring the performance of dataflow, navigate to the **Performance** page. For more information, refer to the [documentation](https://docs.capillarytech.com/docs/analyse-dataflow-performance) on analysing dataflow.

![5329393 success](https://files.readme.io/5329393-success.png)

# Viewing dataflow configuration

To view the configured dataflow details, perform the following:

1. From the home page, click on the dataflow you want to view.
2. Click the **Configuration** tab.\
   The tab displays the configuration details.

![16c05a3 Configuration tab](https://files.readme.io/16c05a3-Configuration_tab.png)

# Editing dataflow

At any point in time, you can navigate to the Connect+ home page, search for the dataflow and edit it. You cannot edit a live data flow. To edit a dataflow, follow the steps below:

1. Navigate to the home and search for the dataflow. Click on the kebab menu and select **Edit**.

![6cfcde4 Search](https://files.readme.io/6cfcde4-Search.png)

2. Click on any of the action blocks you wish to edit.

![0332c42 image](https://files.readme.io/0332c42-image.png)

3. Make the required changes.
4. Click **Save and continue**.

![97fa140 image](https://files.readme.io/97fa140-image.png)

![20fcf8f image](https://files.readme.io/20fcf8f-image.png)

# Stop and restart dataflow

## Stop dataflow

To stop a dataflow, perform the following steps:

1. On the Connect+ homepage, click on the kebab menu corresponding to the dataflow you wish to stop.

![2be9ddc image](https://files.readme.io/2be9ddc-image.png)

2. Click **Stop**.

![9ca3288 image](https://files.readme.io/9ca3288-image.png)

3. Click **Yes, stop** to stop the dataflow.

![ec300b9 image](https://files.readme.io/ec300b9-image.png)

4. From the **Status** dropdown, click on **Stopped** to view the stopped dataflow.

![6a85107 image](https://files.readme.io/6a85107-image.png)

The dataflow stops and the status changes to **Stopped.**

## Restart dataflow

To start a stopped workflow, perform the following steps:

1. On the Connect+ homepage, click on the kebab menu corresponding to the template you wish to start.

![76f46ae image](https://files.readme.io/76f46ae-image.png)

2. Click **Start**.

![e8e96b2 image](https://files.readme.io/e8e96b2-image.png)

The dataflow starts and the status changes to **Live**.

# Deleting dataflow

To delete a dataflow, perform the following steps:

1. On the Connect+ homepage, choose the dataflow you wish to delete and click on the corresponding kebab menu.

![2be9ddc image](https://files.readme.io/2be9ddc-image.png)

2. Click **Delete**.

![06e094c image](https://files.readme.io/06e094c-image.png)

3. Click **Yes, delete**.

![03a98a4 image](https://files.readme.io/03a98a4-image.png)

The dataflow is deleted and the status is changed to **Deleted**.

# Analyze dataflow performance

The Connect+ home page displays the list of dataflows running along with their performance status for the last 24 hours.

![0f44001 Home page Connectplus](https://files.readme.io/0f44001-Home_page_Connectplus.png)

For a detailed dataflow analysis, click on the respective dataflow to view the detailed performance and error data.  Refer to the [Analyse dataflow](https://docs.capillarytech.com/docs/analyse-dataflow-performance)  for documentation and dataflow analysis and refer to [Troubleshooting guide](https://docs.capillarytech.com/docs/troubleshooting-guide-connectplus) for troubleshooting steps.