---
title: Attributes - Customer status & label
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
## customerStatus

When one wants to write rules based on "customer status", this rule can help. 

**Syntax:** currentCustomer.customerStatus(“Active”)

Here, "Active" is the customer status. 

## customerStatusLabel

When one wants to write rules based on "customer label", this rule can help.

**Syntax:**&#x63;urrentCustomer.customerStatusLabel(“Active”, “Moderate”)

Here, "Active" is the status, and "Moderate" is one of the labels present in this customer status.

**Note:**

Please refer to "user configurations" from organization settings to know the customer status & labels present in your org. Creation of new status & labels can be configured from there.
