---
title: Earned badges for customer template
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
The earned badges for customer template allows you to issue badges for customers in bulk. The badges can be also issued for a past (retro) transaction.

# Use Case 1: Weekly Behavioral Events Data Import

**Scenario:**\
A brand receives weekly data from its third-party vendor who manages their mobile app and websites. This data contains behavioural events from users' interactions with the app and website.

The third-party vendor provides the brand with weekly behavioural event data and on adding these data to the Capillary platform, the loyalty promotions on the Capillary platform are triggered. Accordingly, based on the loyalty programs, badges also may need to be provided to the customers in bulk. This template can be used to achieve the same.

# Use Case 2: Offline Event Badge Issuance

**Scenario:**\
A brand organizes offline events, where customers participate and interact with the brand physically. As part of these events, some badges are issued to the customers. This template can be used to assign the badges to the existing customers.

# Configuring earned badges for customer dataflow

To configure earned badges for customer dataflow, perform the below steps/actions:

1. In the **Connect-to-source section** <Glossary>Block</Glossary> enter the source server details where the source\
   data is present and the location for saving the processed file. For the information on configuring this block, refer to [Connect to source](https://docs.capillarytech.com/docs/configure-actions#connect-to-source) documentation.
2. In the **Decrypt data** block, if the files are encrypted, enter the details to decrypt the data. For the information on configuring this block, refer to [Decrypt data](https://docs.capillarytech.com/docs/configure-actions#decrypt-data) documentation.
3. In the **Transform Data** block, map the API fields with the source file. For information on how to map the fields, see [Transform data](https://docs.capillarytech.com/docs/configure-actions#transform-data).

   It is mandatory to map the `earnExpiresOn`, `earnEventDate`, `badgeMetaId` and `customerId` fields with the file.

   ![53547ef image](https://files.readme.io/53547ef-image.png)
4. In the **Connect-to-destination** block, enter the API endpoint details.\
   For this template the API `[/api_gateway/v1/badges/import/customerBadges](https://docs.capillarytech.com/reference/import-earned-badges-of-customer)`, is used.  For the information on configuring this block, refer to [Connect to destination](https://docs.capillarytech.com/docs/configure-actions#connect-to-destination) documentation.
5. In the **Trigger** block, enter the details to schedule the trigger. For the information on configuring this block, refer to [Trigger](https://docs.capillarytech.com/docs/configure-actions#schedule-trigger) documentation.

For troubleshooting information, refer to the [troubleshooting section](https://docs.capillarytech.com/docs/troubleshooting-guide-connectplus) of the documentation.
