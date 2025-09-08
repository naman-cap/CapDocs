---
title: Connect Power BI and Tableau Desktop to Databricks
excerpt: ''
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: Insights+ OND'22 Release Notes
  pages:
    - type: link
      title: Insights+ OND'22 Release Notes
      url: https://docs.capillarytech.com/changelog/insights-ond22
    - type: basic
      slug: bi-tool-connector-faq
      title: FAQ
---
# Introduction

You can integrate Databricks with Power BI and Tableau to visualize and analyze data. Create a JIRA ticket with the Product Support Team to connect Databricks to Power BI and Tableau Desktop.

## Prerequisites

* **Databricks license** for the organization, contact your Databricks admin for more information.
  * Contact the Access Control Team if you need to create an account.
  * **Access to or a license for** a client's third-party visualization tool.

# Connecting Power BI to Databricks

To connect a Databricks cluster with Power BI Desktop,

1. Get the **Server Hostname** and **HTTP Path** from Databricks.
   * To get **Server Hostname** and **HTTP Path**, go to **Compute** > **Select Cluster** > **Advanced Settings** > **JDBC/ODBC**.
2. Start Power BI Desktop.
3. Click **Get data** or **File** > **Get data**.
4. Click **Get data** to get started.
5. Search for Databricks, choose the **Azure Databricks** connector and click **Connect**.
6. Enter the **Server Hostname** and **HTTP Path**.
7. Optionally, enter the default **database** and **catalog** to use for the connection.
8. Select your **Data Connectivity mode**.
   * **Import**: A copy of the data from the selected tables and columns is imported into Power BI Desktop. As you create or interact with visualizations, Power BI Desktop uses the imported data. To see underlying data changes after the initial import or the most recent refresh, you must reimport the full dataset.
     * **Direct Query**: As you create or interact with visualizations, Power BI Desktop queries the underlying data source, so you're always viewing current data.
9. Click **OK**.
10. Enter your authentication credentials:
    * **Personal Access Token**: Enter your Databricks personal access token from the Prerequisites.
      * **Username or Password**: Enter your Databricks username (typically your email address) and password from the Prerequisites. Username and password authentication may be disabled if your Databricks workspace is enabled for single sign-on (SSO). If you cannot log in using your Databricks username and password, try using the **Personal Access Token** option instead.
        * **Azure Active Directory**: Not applicable.
11. Click **Connect**.
12. Select the Databricks data to query from the **Power BI Navigator**.

# Connecting to Tableau Desktop

To connect to a cluster or SQL warehouse with Tableau Desktop.

1. Get the **Server Hostname** and **HTTP Path**.
2. Start Tableau Desktop.
3. Click **File** > **New**.
4. On the **Data** tab, click **Connect to Data**.
5. In the list of connectors, click **Databricks**.
6. Enter the **Server Hostname** and **HTTP Path**.
7. For **Authentication**, choose your authentication method and enter your authentication credentials.
8. Click **Sign In**:
   * To use a Databricks username and password from the Prerequisites, select **Username or Password** and enter your username and password.

You are connected with the Tableau Desktop.

# FAQs

1. **What is BI Tool Connector?**\
   Answer - BI Tool connector is a solution that enables connectivity between the Data Analytics tool to a data source. Data Connectors enable you to connect your data sources to the Visulatisation tools securely without expensive re-engineering, testing, or retraining.

2. **What are the benefits of BI Tool Connector?**\
   Answer -
   1. Challenges faced by visualization tools to read and analyze data through export framework can be minimized.
   2. Transformed and processed data can now be easily visualized on BI tools in a structured format as available in databricks.
   3. Seamless flow of information and easy integration with BI tools that also improve the data management process.
   4. No more data migration issues, now you can easily plug and play data in any third-party visualization tool.
   5. Enable reporting which is not currently available in Insights+ due to technical or feature limitations.
   6. It reduces the team's learning effort because the business expects SaaS vendors to integrate with their BI tools.

3. **How can I access databricks Connector?**\
   Answer - To access databricks connector, brand must have a databricks license. This is an add-on on existing databricks license.
   1. Please raise a new request with databricks admin team to create a private cluster in databricks. You can drop an email to [Access Control](mailto:access@capillarytech.com) with the details.
   2. The databricks admins will further create the cluster.
   3. Once, the cluster is launched you can get the connector details under JDBC/ODBC tab.

4. **What can these connectors connect to?**\
   Answer - We use the databricks connector to connect with any visualisation tool available in the market that has compatibility with databricks.

5. **What is a 'private' cluster?**\
   Answer - A Databricks cluster is a set of computation resources and configurations on which you run data engineering, data science, and data analytics workloads. A 'private' cluster is a dedicated group of virtual machines launched for the brand. These machines are selected after analysis and this private cluster can only be accessed by admins and the customer POCs. The machines can be upgraded for improved performance.

6. **What are the advantages of the private cluster?**\
   Answer -
   1. Better data security.
   2. Limited access to users.
   3. Better increased productivity and faster query results.

7. **Can I track usage of the infra on a monthly basis?**\
   Answer - Yes, these can be requested by the databricks admin. The request will be reviewed and then processed by the databricks admin.

8. **How to request access to brand's private cluster?**\
   Answer - A new access request needs to raised with [Access Control](mailto:access@capillarytech.com), once the request is received it has to be approved by the customer POC and databricks admin will grant the request.

9. **What is the cost of the Databricks connector?**\
   Answer - The databricks connector is bundled with the Databricks license, please contact the sales team for databricks license pricing.

10. **Are the KPIs and charts from Insights+ available with the databricks connector?**\
    Answer - No, the brand's data analyst needs to create and visualize data in their BI tool. KPIs are required to be recalculated in the BI tool.

11. **Who will have access to the brand private cluster?**\
    Answer - The brand has to provide the list of users that need access to their cluster, Capillary users must have the brand's consent and approval if they need access to the cluster.

12. **Is table-level access control possible at Databricks?**\
    Answer - Yes, table-level access customisation is possible at Databricks. You can read more here - [Access control | Databricks on AWS](https://docs.databricks.com/security/access-control/index.html)

13. **Will the data be encrypted?**\
    Answer - PII will be encrypted in databricks however, any data transfer medium or channel other than the Capillary SFTP service, will require the approval of the customer Information Security Head / CISO / Risk Head. Once the connection using the databricks connector is established, customer needs to control their data access in BI tools.

14. **What is the process to request a new cluster?**

![acb16f1 image](https://files.readme.io/acb16f1-image.png)