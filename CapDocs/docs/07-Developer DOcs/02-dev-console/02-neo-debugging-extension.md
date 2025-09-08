---
title: Neo Debugging Extension
excerpt: >-
  The Neo Debugging Extension is a browser extension designed to help you with
  the debugging process for Neo dataflow executions within Capillary. It offers
  multiple monitoring tools for Neo dataflow's.
deprecated: false
hidden: false
metadata:
  robots: index
---
# Key benefits and features:

* **Real-time Request Inspection**: Monitor dataflow executions with detailed timelines and request/response logs.
* **Block-Level Input/Output Visibility**: Gain clear visibility into the data flowing into and out of each block within your Neo data flows.
* **cURL Import Support**: Easily share and reuse API calls across development teams.
* **JavaScript Engine**: Execute basic JavaScript functions directly within the extension to inspect response structures.
* **Log Management**: Clear, preserve, and search logs for efficient debugging.
* **Data flow Navigation Support**: Easily navigate to open dataflow's by clicking the neo debugger extension icon in your browser's taskbar, revealing a list of active Neo dataflow tabs for direct access.
* **Theme**: Change the theme of your extension by clicking the toggle button between dark and light

## Supported browsers

The Neo Debugger Extension is supported in all Chromium-based browsers.

| Browser         | Supported    |
| :-------------- | :----------- |
| Chrome          | Yes          |
| Edge (Chromium) | Yes          |
| Brave           | Yes          |
| Firefox         | No (Planned) |

# Using the debugging extension

To use the Neo Debugging Extension, perform the following:

* Step 1: Install the Extension
* Step 2: Set Up Authentication for the API
* Step 3: Run the Debugger
* Step 4: Review Logs and Inspect Data

# Step 1: Installing the extension

To install the Neo Debugging Extension, do one of the following:

1. For Chrome users:

   * Navigate to \*\*Chrome Extension [Direct Link](https://chromewebstore.google.com/detail/neo-debugger/keagpdkcdebpdccfjmjcnlihkbohnhio).

   * Click **Add to Chrome**.

   * Confirm the installation when prompted.

   <br />

   ![e6e0f8404f75bf599627f289aa475071849d50db2089b358aa697cfc878020b6 image4](https://files.readme.io/e6e0f8404f75bf599627f289aa475071849d50db2089b358aa697cfc878020b6-image4.gif)

   <br />

2. For other Chromium-based browsers:

   * Open the [link](https://chromewebstore.google.com/detail/neo-debugger/keagpdkcdebpdccfjmjcnlihkbohnhio) in a Chromium-based browser (Chrome, Edge, Brave).

   * Click **Add extension**.

   * Confirm the installation when prompted.

3. Install from Dev Console:

   * Navigate to **Dev Console > Neo Debugger** (from the left navigation pane).

   <br />

   ![a7b8f53b7d089d3867c84284961a3d57ae49bbd6ed335595fd3454d58a47a2bf image12](https://files.readme.io/a7b8f53b7d089d3867c84284961a3d57ae49bbd6ed335595fd3454d58a47a2bf-image12.png)

   <br />

   * Click the **Install Neo Debugger Extension** icon.

   <br />

   ![d2fcbc6e7b7e2057b906159b5bddac0df04204518c1554c313f8ed990c60d258 image9](https://files.readme.io/d2fcbc6e7b7e2057b906159b5bddac0df04204518c1554c313f8ed990c60d258-image9.png)

   <br />

   * Click **Add extension**.

   <br />

   ![c35cdeaa12f42e921270fc2ac482db04955c2fc5039e62e39eed0c8205a62563 image4](https://files.readme.io/c35cdeaa12f42e921270fc2ac482db04955c2fc5039e62e39eed0c8205a62563-image4.gif)

   <br />

   * Confirm the installation when prompted.

**Note:** This extension is unlisted and is specifically designed for Capillary users. If you add the extension again, multiple Neo Debugger tabs will appear in the Developer Tools section of your browser.

# Step 2: Set up authentication for the API

To set up the authentication, perform the following:

* Navigate to **Neo Debugger > Settings icon > Authentication Preferences**.
* Choose an authentication method.
  * Basic Auth: Enter your [basic authentication token](https://docs.capillarytech.com/docs/api-client#enabling-basic-authentication).
  * OAuth: [Generate a client and key](https://docs.capillarytech.com/docs/api-client#oauth-authentication), then enter the required OAuth details.

All values are synchronized with the [Secret Manager](https://docs.capillarytech.com/docs/extension-configuration#how-to-use-the-secret-manager). Once approved, the configuration is saved.

* Click **Save Settings**.

<br />

![b0bc330bd117866a3e67d7dbaf93a84b62c8d6ceb4238457ae0fafcee8dffa62 image5](https://files.readme.io/b0bc330bd117866a3e67d7dbaf93a84b62c8d6ceb4238457ae0fafcee8dffa62-image5.png)

<br />

# Step 3: Running the debugger

The debugger starts automatically when you test the dataflow. To do this, click the **Test Dataflow** icon in the Neo Debugger tab.

![21855678b60c99fa5331bbe4b0c0304a05bc28fb5bb98eb45338dde928de9983 image1](https://files.readme.io/21855678b60c99fa5331bbe4b0c0304a05bc28fb5bb98eb45338dde928de9983-image1.gif)

# Step 4: Review logs and inspect data

After running the debugger, you can review logs and troubleshoot issues. This section explains the purpose of each tab and how to use them during your debugging process.

### Log Insights Tab

This tab provides summary details, block execution flow type and status, and a time-stamped timeline of the execution events.

![db2d5d06efca2b70dd607d74bc74c30c2deb4a23f873db953de727aad97734c1 image7](https://files.readme.io/db2d5d06efca2b70dd607d74bc74c30c2deb4a23f873db953de727aad97734c1-image7.png)

### Block I/O Tab

This tab provides detailed information on input and output data for each block in your dataflow execution.

![6f8c8f80168efda7953a6b03cb9b703e8b8a99057fa79b0a8e75f9eb1d767d3f image8](https://files.readme.io/6f8c8f80168efda7953a6b03cb9b703e8b8a99057fa79b0a8e75f9eb1d767d3f-image8.png)

### Block Inspector

This tab allows you to run basic JavaScript operations, such as `getBody()`, directly on the response data of any block. For example, you can run `dao.getBody()` to view a block's body content within the response.

![232bbc9e2648ea8d82a954d7fc7f1f9fdfdcba00c26be9b124e39bb8a48711f4 image2](https://files.readme.io/232bbc9e2648ea8d82a954d7fc7f1f9fdfdcba00c26be9b124e39bb8a48711f4-image2.gif)

# Manage logs

You can use the options below to preserve, search, and clear the dataflow execution log.

* **Preserve Log**: Toggle this option to retain logs across executions. When disabled, the log clears with each new run.

<br />

![1c7a3b953f7f6b3d90d04f0ff8cf09470f79078b9fa085ec479511779a130efe image3](https://files.readme.io/1c7a3b953f7f6b3d90d04f0ff8cf09470f79078b9fa085ec479511779a130efe-image3.png)

<br />

* **Search and Highlight**: Enables you to search and highlight specific entries within the logs for quick analysis. For example.

![eb39fb77c1ecf40a5212473470725142ae4cd42c313fc2864de69a8441571d93 image10](https://files.readme.io/eb39fb77c1ecf40a5212473470725142ae4cd42c313fc2864de69a8441571d93-image10.png)

<br />

* **Clear Log**: Enables you to clear all previous log entries. To proceed, click the **Clear Log** icon. Once these entries are cleared, they cannot be recovered.

![40cd777abb1ffb83d15a7bb6d0e30ddf764313a1208f3ee3fda6df3f96e0a3ea image11](https://files.readme.io/40cd777abb1ffb83d15a7bb6d0e30ddf764313a1208f3ee3fda6df3f96e0a3ea-image11.png)

# Import calls

This feature allows you to import a cURL and test the dataflow. This is useful when multiple developers are working on the same dataflow. The cURL shared by one developer can be imported by another and tested. To import a cURL, perform the following:

* Navigate to the **Import cURL** icon within the Neo Debugger Extension.

<br />

![8e0708e5817a86126f2ac530c4ab529da3e3854cd67bbfb3b86e95acf282acd3 image6](https://files.readme.io/8e0708e5817a86126f2ac530c4ab529da3e3854cd67bbfb3b86e95acf282acd3-image6.png)

<br />

* Paste the cURL command in the input text box.

![4a20e0b519c9abdda5019f12179c05333545e7ff030c1461c09677e54779f68c image14](https://files.readme.io/4a20e0b519c9abdda5019f12179c05333545e7ff030c1461c09677e54779f68c-image14.png)

<br />

* Click **Import**.

# Additional Header, Body, and Query Parameters

If required, you can add headers, body, and parameters. Use the key-value input fields to set custom headers for your requests. Path and query parameters will automatically be populated if present in the URL.

![7eb7b7752de8deaf157b33c7413a1e1d4356d0457dfdd90eab42cd10c055a896 image13](https://files.readme.io/7eb7b7752de8deaf157b33c7413a1e1d4356d0457dfdd90eab42cd10c055a896-image13.png)

<br />

# Troubleshooting

| Issue                      | Solution                                                                              |
| :------------------------- | :------------------------------------------------------------------------------------ |
| Extension not visible      | Ensure you are on a Neo DAG page within Capillary.                                    |
| Authentication not working | Check the token format, regenerate credentials if necessary, or verify OAuth details. |
| Logs not retained          | Enable the "**Preserve Log**" option.                                                 |
| Import not working         | Verify that the Postman cURL call format is correct and valid.                        |