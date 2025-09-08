---
title: Quickstart for Neo Extension
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
# Step One - Enable Neo & Get Access

* [Enable Neo for your organisation](https://docs.capillarytech.com/docs/access-management-neo)
* [Get access permission to use Neo](https://docs.capillarytech.com/docs/access-management-neo#enabling-neo-extension-access--user-roles)

# Step Two - Access Neo Portal

You can use the url \{host}/extensions/neo/ui to access Neo. For example, [https://eu.intouch.capillarytech.com/extensions/neo/ui](https://eu.intouch.capillarytech.com/extensions/neo/ui).

# Step Three - Create a Dataflow

With Neo, you can create workflows for the entire development process using drag-and-drop blocks called [building blocks](https://docs.capillarytech.com/docs/dataflows#/building-blocks-of-neo). The workflows built using the drag-and-drop blocks are called [dataflows in Neo](https://docs.capillarytech.com/docs/dataflows#/dataflows-in-neo). Every data flow starts with a Trigger block, and by default, this block is added automatically. Further, as per your requirement, you can click on the nod in each block, select the next block.

<Embed url="https://player.vimeo.com/video/1071296714?h=6bfcb643fa&badge=0&autopause=0&player_id=0&app_id=58479" href="https://player.vimeo.com/video/1071296714?h=6bfcb643fa&badge=0&autopause=0&player_id=0&app_id=58479" typeOfEmbed="iframe" height="300px" width="100%" iframe="true" />

# Step Four - Send for Approval

After creating the dataflow, send the [dataflow for approval](https://docs.capillarytech.com/docs/approval-flow#/). A Neo user with Admin access can approve the dataflow.

# Step Five - Execute the Dataflow

You can either [execute the dataflow](https://docs.capillarytech.com/docs/execution-monitoring) from a service directly such as Connect+, Event Notification, etc or copy the cUrl and then use it as required in any integration.

# Step Five - Observability and Monitoring

You can monitor the performance of the Neo API and the APIs used in the Neo API using [Dev Console](https://docs.capillarytech.com/docs/dev-console#/). The Dev Console also provides you with error information and list of logs.