---
title: Test and control template
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
The Test and Control template allows you to compare and change the customer test and control status in the Capillary platform according to the data provided by the brand.   This helps to reduce the number of API calls that are required to change the status in bulk.

# Use case

Brands send customer data to Capillary to change their test and control status.\
Using the Test and Control template, you can compare your existing customer data with the customer test and control data provided by the brand to make changes in the customer role in bulk rather than changing the data for each customer.

# Configuring test and control dataflow

> 🚧 Make sure that there are no unwanted spaces in the csv file. You can convert the csv file to JSON to cehck for unwanted spaces.

To configure test and control dataflow, perform the below steps/actions:

1. In the **Connect-to-source section** <Glossary>Block</Glossary> enter the source server details where the source\
   data is present and the location for saving the processed file. See [Connect to source](https://docs.capillarytech.com/docs/configure-actions#connect-to-source).
2. In the **Decrypt data** block, if the files are encrypted, enter the details to decrypt the data. See [Decrypt data](https://docs.capillarytech.com/docs/configure-actions#decrypt-data). 
3. In the **Transform Data** block, map the API fields with the source file. For information on how to map the fields, see [Transform data](https://docs.capillarytech.com/docs/configure-actions#transform-data).
4. In the **Map-fields-for-reconcile** block, enter the reconciliation data details. 

   | Fields                               | Description                                                               |
   | :----------------------------------- | :------------------------------------------------------------------------ |
   | **Mobile**                           | Enter the column header that contains the mobile number of the customers. |
   | **Email**                            | Enter the column header that contains the email of the customers.         |
   | **Test and Control**                 | Enter the column header that contains the test and control status.        |
   | **External ID**                      | Enter the column header that contains the external ID.                    |
   | **Reconciliation Results Directory** | Specify the file path to store the data reconciliation result.            |
5. In the **Connect-to-destination** block, enter the API endpoint details.\
   For this template, the API `/v2/tnc/change/bulk/customers` is used. See [Connect to destination](https://docs.capillarytech.com/docs/configure-actions#connect-to-destination).
6. In the **Trigger** block, enter the details to schedule the trigger. See [Trigger](https://docs.capillarytech.com/docs/configure-actions#schedule-trigger).
