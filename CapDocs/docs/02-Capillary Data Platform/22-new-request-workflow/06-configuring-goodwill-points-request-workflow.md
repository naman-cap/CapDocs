---
title: Configuring Goodwill Points Request Workflow
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
This request is mapped to a standard workflow, allowing you to submit requests to issue goodwill points.

### Points redemption standard workflow

As part of the standard workflow, the Capillary platform provides a two-step approval process involving a Maker and Checker-based workflow. 

1. Users with “CanMakeRequest” access can submit a request to issue goodwill points.
2. Users with “CanCheckRequest” access can approve or reject the request. 

Once a Checker approves a request, the system executes it, allowing the issue of the goodwill points.

### Configurations

* Auto approval - You can enable **Auto-approval** configuration to enable auto-approval of certain user requests.
* Goodwill points upper cap - You can set an upper cap to restrict the issue of goodwill points.

To configure, perform the following:

1. From the Request Workflows list, navigate to **Goodwill\_points** > **Edit request workflow mapping**.
2. To set auto-approval, turn on the **Auto-approval flag** toggle.
3. To set an upper cap for goodwill point issue, in **Goodwill points upper cap**, enter the goodwill points upper cap value.
4. For sending e-mail notifications on the request status, enter the customer's e-mail ID.
5. Click **Save**.

![](https://files.readme.io/c67849f-goodwill_points3.gif)

### APIs to create, approve and retrieve request details

**Create request** - [https://docs.capillarytech.com/reference/issue-goodwill-points](https://docs.capillarytech.com/reference/issue-goodwill-points)

**Approve or reject a request** - [https://docs.capillarytech.com/reference/approve-or-reject-a-request](https://docs.capillarytech.com/reference/approve-or-reject-a-request)

**Retrieve details of a request** - [https://docs.capillarytech.com/reference/get-request-info](https://docs.capillarytech.com/reference/get-request-info)
