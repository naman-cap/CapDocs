---
title: Behavioral Events
excerpt: >-
  Behavioral events help capture customer activities such as registration,
  forgot password, and cart abandonment. 


  There are standard events that are predefined with name, id, and attributes. 


  The events resource lets you create custom events and Webhook account, enable
  standard events for an org, and map event fields.
deprecated: false
hidden: true
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
**Note**: Behavioral events ingestion is asynchronous and you won't receive an immediate response. When you send data to a webhook, it acknowledges and places the data in a queue for processing, unlike synchronous APIs. To check the status of your events after ingestion, use the [Get Events Log](https://docs.capillarytech.com/reference/get-events-logs) API or the [Search Events](https://docs.capillarytech.com/reference/search-events) API.

## Status Codes


### Success Codes


| Code | Description             |
| ---- | ----------------------- |
| 7300 | Feed added successfully |

### Error Codes


| Code | Description                                             |
| ---- | ------------------------------------------------------- |
| 7301 | Unable to add feed.                                     |
| 7302 | Source is not specified.                                |
| 7303 | Invalid source passed.                                  |
| 7304 | Event is not passed.                                    |
| 7305 | Invalid event passed.                                   |
| 7306 | UUID is not passed.                                     |
| 7307 | Customer ID is not passed.                              |
| 7308 | Invalid customer ID passed.                             |
| 7309 | Invalid SKU passed.                                     |
| 7310 | Invalid store code passed.                              |
| 7311 | Invalid customer details passed. <br  />Scan event failed. |