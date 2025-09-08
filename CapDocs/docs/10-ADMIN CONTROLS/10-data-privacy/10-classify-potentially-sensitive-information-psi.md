---
title: Classify Potentially Sensitive Information (PSI)
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
Potentially Sensitive Data (PSI) data refers to any information that could be considered sensitive and requires careful handling to protect the privacy and security of individuals. You can mark the [custom fields](https://docs.capillarytech.com/docs/data-fields#custom-fields), [extended fields](https://docs.capillarytech.com/docs/data-fields#view-and-configure-extended-fields-for-the-org) and certain information in the [behavioural events](https://docs.capillarytech.com/docs/setup-test-behavioral-events) as PSI data and mask it accordingly in the Member Care User Interface.

# Use case

A healthcare organization uses Capillary's platform to manage patient data, including sensitive health information. As part of their data security and privacy policies, they need to ensure that certain health parameters such as Blood group, Alcohol consumption habit, and smoking habit-specific health-related data points are protected and only accessible to authorized personnel.

**Solution:** Ensure that health parameters such as Blood group, Alcohol consumption habit, and Smoking habit are available as custom fields or extended fields for your organization. If these fields are unavailable, add them and designate them as PSI data. Similarly, if these fields are included in any Behavioral events, update them to be marked as PSI data.
