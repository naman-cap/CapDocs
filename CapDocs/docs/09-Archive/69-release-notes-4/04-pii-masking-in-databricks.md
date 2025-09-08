---
title: PII Masking in databricks
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
### What is data masking?

Data masking is a technique used to protect sensitive data from unauthorized access. It involves replacing confidential information with an unreadable format and blocking its visibility from unauthorized users.

### What is being changed in databricks?

1. For Databricks users who have access to the user-level table for an organization, the following columns are masked: last\_name, first\_name, customer\_external\_id, mobile, and email.

2. If you need to view PII data for any use case in Databricks, you must obtain email approval from the **customer Information Security Head/CISO/Risk Head**. The approval should state that they are aware the PII is unmasked and can be exported to the specified "FTP/SFTP name" location for the following use case: "use case details." They need to provide email approval for unmasking and exporting PII data.

3. If the PII is masked in Databricks, the same would be applicable for writing to FTP in Databricks. If you need to view PII, once it is unmasked, the data would remain unmasked in write to FTP (exports using Databricks) as well.

### How to raise a request to view PII data for a particular org?

1. CSMs or the brand's point of contact from Capillary will require proper approval from the customer Information Security Head/CISO/Risk Head for data transfer of PII, mentioning the following:
   1. The location where the PII will be shared.
   2. The use case for why PII is required.
   3. Consent for sharing PII.

2. Once the approval is received from the brand, CSMs need to raise a request with the access control team at [access@capillarytech.com](mailto:access@capillarytech.com) by emailing all the information and attaching email approval from the brand as evidence. The access control team will verify that all the information is provided, and they will work with Guardians for the second stage of approval.

3. The approval/consent from the brand will be reviewed by the Guardians team at [guardians@capillarytech.com.](mailto:guardians@capillarytech.com.) Once all the approvals are received, the access control team will unmask the PII for the organization.

![01b31cb small Screenshot 2023 05 02 at 12](https://files.readme.io/01b31cb-small-Screenshot_2023-05-02_at_12.59.04_PM.png)
