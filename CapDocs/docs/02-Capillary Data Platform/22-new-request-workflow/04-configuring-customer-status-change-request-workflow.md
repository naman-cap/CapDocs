---
title: Configuring Request Workflow for Customer Status Change
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
This request is mapped to a standard workflow and allows you to submit requests to change the customer status.

### Customer status change standard workflow

As part of the standard workflow, the Capillary platform provides a two-step approval process involving a Maker and Checker-based workflow. 

1. Users with “CanMakeRequest” access can submit a request to change the customer status.
2. Users with “CanCheckRequest” access can approve or reject the request. 

Once a Checker approves a request, the system executes it, changing the status of the customer.

### Configurations

You can enable **Auto-approval** configuration to enable auto-approval of certain user requests.

To configure, from the Request Workflows list, navigate to **Customer\_status\_change** > **Edit request workflow mapping**, turn on the **Auto-approval flag** toggle and click **Save**.

![](https://files.readme.io/e21a0aa-customer_status.gif)

### APIs to create, approve and retrieve request details

**Create request** - [https://docs.capillarytech.com/reference/change-customer-status](https://docs.capillarytech.com/reference/change-customer-status)

**Approve or reject a request** - [https://docs.capillarytech.com/reference/approve-or-reject-a-request](https://docs.capillarytech.com/reference/approve-or-reject-a-request)

**Retrieve details of a request** - [https://docs.capillarytech.com/reference/get-request-info](https://docs.capillarytech.com/reference/get-request-info)
