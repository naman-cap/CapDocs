---
title: Save Extension Configurations
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
The Extension Configuration, also known as **Secret Manager** or the Configuration Manager, securely manages organization-specific configurations. This is primarily applicable to the Neo extension. It stores sensitive information such as API keys, passwords, and other configuration details and helps to eliminate the need to hardcode these values in Neo dataflows.

# Key Benefits and Features

* **Centralized Configuration Management**\
  Provides a single location to view, request, and manage configurations for each organization.

* **Enhanced Security**\
  Stores sensitive values securely to prevent exposure in dataflows. Values marked as secret remain masked for additional protection.

* **Request-Approval Workflow**\
  Requires all modifications—adding, updating, or rejecting configurations—to follow a secure request-approval process, ensuring controlled and auditable updates.

* **Org-Specific Configurations**\
  Manages configurations specific to the selected organization in DevConsole.

* **Real-Time Integration with Neo Workflows**\
  Dynamically accesses and utilizes approved configurations within Neo workflows.

* **Access via DAO**\
  Uses Data Access Object (DAO) functions such as `getValueByKey()` and `getParentValueByKey()` to fetch stored values in dataflows.

* **Config Request Management Section**\
  Allows you to track the status of their submitted configuration requests.

# How to Use the Secret Manager

1. Navigate to  **Logs and Metrics** > **Extensions Configurations** from the left pane of the Dev Console.

   ![b634beb3c47a93fb32c1514c6b45049b09abc05414e0035c4c8f7dcfe61eff40 secret manager dev console](https://files.readme.io/b634beb3c47a93fb32c1514c6b45049b09abc05414e0035c4c8f7dcfe61eff40-secret_manager_dev_console.png)

   <br />

2. From the dropdown in the top-right corner, choose the organization whose configurations you want to manage.

3. To submit new configurations,

   1. On the **Extensions Configuration** page, click **Add Config**.
   2. Enter the configuration name under **Config Name** and its value under **Config Value**.
   3. If needed, enable the **isSecret** option to mask sensitive information. Once masked, the value can't be unmasked. When used in Neo, these values are [retrieved using Data Access Object (DAO) functions](https://docs.capillarytech.com/docs/configuration-manager#/).
   4. Click **Submit** to complete the request.

4. To edit an existing configuration, enter the configuration name under **Config Name** and the new value under **Config Value**.

![Adding a config](https://files.readme.io/40969790f2885588d28c0afb8fdfa5c8bc4fd9f495d423afc73d7e3b1b9ed1d4-dev_console_add_config.gif)

5. To monitor the status of your submitted requests, click  **Config Requests**. Requests remain in a `Pending` state until approved.

![Config Requests](https://files.readme.io/43a80c0d97f23db1507fe578e9bf8b45e9765919a033a9c20e3239a7230b9689-dev_console_config_request.png)

# Configuration Approval Process

All newly added configurations require approval before use. You can also edit the value of an existing configuration, but any changes must go through the approval process. An approver with the necessary permissions reviews and approves configuration requests.

**Overview of the Approval Flow**

1. Submit Request – After you add a configuration, the request is automatically send for approval.
2. Reviewal and approval – The requests are sent to admins for approval.  If approved, the configuration is stored and becomes available for use in dataflows.

To approve,

1. From the DevConsole, navigate to the **Extensions Configurations** section.

   ![736cc9ff5a7ce610c60ac2f07cfe80b4616bd23e08281f28c3c12a2ead74ad6d secret manager dev console](https://files.readme.io/736cc9ff5a7ce610c60ac2f07cfe80b4616bd23e08281f28c3c12a2ead74ad6d-secret_manager_dev_console.png)
2. From the dropdown in the top-right corner, choose the organization whose configurations you want to manage.
3. Click  **Config Requests**.\
   The configuration details are displayed.

   ![43a80c0d97f23db1507fe578e9bf8b45e9765919a033a9c20e3239a7230b9689 dev console config request](https://files.readme.io/43a80c0d97f23db1507fe578e9bf8b45e9765919a033a9c20e3239a7230b9689-dev_console_config_request.png)
4. In the configuration modal, click **Approve**.

   ![247808f1924fa7438042fcdb3063e07bc716b54c34561213fca7cfdef491c95a approve config secret manager](https://files.readme.io/247808f1924fa7438042fcdb3063e07bc716b54c34561213fca7cfdef491c95a-approve_config_secret_manager.png)

Once approved, the configuration request becomes available for use.