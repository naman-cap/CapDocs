---
title: Hidden as this has been shared as a google doc. This is an internal doc.
deprecated: false
hidden: true
metadata:
  robots: index
---
> 🚧 Note
>
> This page can be accessed only by org admins or owners.

# Connecting Power BI dashboards with Insights

When an organization uses Power BI dashboards for the first time, the Capillary Product Support Team is responsible for enabling and configuring the integration. To initiate this process, raise a ticket with the team. To connect the Power BI integration settings, perform the following:

1. Go to the **Insights+** page.

2. Select **Settings > Power BI**.\
   The **Power BI Integration** page opens.

3. Define the following fields:
   * **Tenant ID**: A unique identifier for your Microsoft Entra ID. It is required to establish and authenticate the connection between Databricks and Power BI.
   * **Client ID**: A unique identifier used to authenticate Power BI when accessing Databricks resources.
   * **Client Secret**: A confidential key used alongside the client ID to authenticate Power BI when connecting to Databricks.
   * **Scope**: A parameter that defines the level of access requested during authentication. It is used to securely manage credentials and API keys.
   * **Workspace ID**: A unique identifier for the Databricks workspace that Power BI connects to.
   * **Username**: The user account used to authenticate access to the Databricks workspace.
   * **Password**: The password associated with the username for authenticating access to the Databricks workspace.

4. Select **Save**.\
   The system validates the credentials and updates the configuration.

   ![d679582fd5cfa0a005639c20924c2f12a88411cb66ccebc7ffb94af5029a2321 PowerBI Settings](https://files.readme.io/d679582fd5cfa0a005639c20924c2f12a88411cb66ccebc7ffb94af5029a2321-PowerBI_Settings.png)

## Editing Power BI dashboard settings in Insights+

The Organization owner or admin can edit the settings. To edit, perform the following:

5. Go to the **Insights+** page.

6. Select **Settings > Power BI**.\
   The **Power BI Integration** page opens.

7. Update  any of the following fields as required:
   * Tenant ID

   * Client ID

   * Client secret

   * Scope

   * Workspace ID

   * Username

   * Password

8. Select **Save**.\
   The system validates the credentials and updates the configuration.