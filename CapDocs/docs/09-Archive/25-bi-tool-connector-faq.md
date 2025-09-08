---
title: FAQ
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
FAQs

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