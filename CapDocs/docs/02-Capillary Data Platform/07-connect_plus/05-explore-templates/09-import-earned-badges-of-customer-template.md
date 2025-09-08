---
title: Import Earned Badges of Customer in Bulk
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
This template enables you to import earned badges of customers, for historical migration. It can be used to migrate customers with badges:

* that have expired or
* were assigned in the past but are still active.

# Use Case

Consider Brand X, which has been running a successful loyalty program for several years, where customers earn badges for purchases, engagement, and specific achievements on their existing loyalty platform.

When Brand X decides to switch to the Capillary loyalty platform to take advantage of advanced features and better system integration, it can transfer all historical badges awarded to customers using the Historical Migration and Creation of Badges template. This ensures a smooth transition without losing any customer achievements.

# Configuring the template

Below is the screenshot of the template showing the different steps.

![fe4c9dc8856773195629b4a28e8cbf0bad7cb3f3a8e5dad05707fed715af8b11 Import Earned Badges](https://files.readme.io/fe4c9dc8856773195629b4a28e8cbf0bad7cb3f3a8e5dad05707fed715af8b11-Import_Earned_Badges.png)

To configure the Badges template, perform the below steps/actions:

1. In the **Connect-to-source** <Glossary>Block</Glossary>, enter the source server details where the source\
   data is present and the location for saving the processed file. See [Connect to source](https://docs.capillarytech.com/docs/configure-actions#connect-to-source).\
   **Sample CSV file:**\
   `badgeMetaId,customerId,earnEventDate,earnExpiresOn
   663df210d4e8ad163b1bfaaa,382442802,1674292011,1705828011`

   | **badgeMetaId**          | **customerId** | **earnEventDate** | **earnExpiresOn** |
   | ------------------------ | -------------- | ----------------- | ----------------- |
   | 663df210d4e8ad163b1bfaaa | 382442802      | 1674292011        | 1705828011        |

2. In the **Decrypt data** block, if the files are encrypted, enter the details to decrypt the data. See [Decrypt data](https://docs.capillarytech.com/docs/configure-actions#decrypt-data).

   1. In the **Transform Data** block, map the API fields with the source file. For information on how to map the fields, see [Transform data](https://docs.capillarytech.com/docs/configure-actions#transform-data).

      The below fields are mandatory: 

      | Field Name    | Data Type | Description                                                                                                              |
      | :------------ | :-------- | :----------------------------------------------------------------------------------------------------------------------- |
      | badgeMetaId   | String    | Unique identifier for the badge.                                                                                         |
      | customerId    | Integer   | Unique identifier for the customer.                                                                                      |
      | earnEventDate | Date      | Timestamp of when the earning event occurred. Timestamp in the ISO 8601 standard format format YYYY-MM-DDTHH:MM:SS.SSSZ. |
      | earnExpiresOn | Date      | Timestamp of when the earned item expires. Timestamp in the ISO 8601 standard format format YYYY-MM-DDTHH:MM:SS.SSSZ.    |

      For details on the API fields, refer to the [Import earned (issued) badges of customer](https://docs.capillarytech.com/reference/import-earned-badges-of-customer) API.

3. In the **Connect-to-destination** block, enter the API endpoint details. The API fields are configured by default and is not recommended to make changes. See [Connect to destination](https://docs.capillarytech.com/docs/configure-actions#connect-to-destination).

4. In the **Trigger section** block, enter the details to schedule the trigger. Refer to the documentation on scheduling[Trigger](https://docs.capillarytech.com/docs/configure-actions#schedule-trigger).
