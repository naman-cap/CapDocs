---
title: Get Active Tills
excerpt: >-
  Retrieves the details of a specific ill based on the Till code or till ID
  passed.
api:
  file: v2.json
  operationId: get-active-tills
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
> 📘 
> 
> Either `code` or `tillId` is mandatory.

# Response parameter

| Parameter Name | Description                                                     |
| :------------- | :-------------------------------------------------------------- |
| id             | Internal Till ID generated while creation of the till           |
| code           | The till user name that is provided while creation of the till. |
|                |                                                                 |