---
title: Feed (Scan Event)
excerpt: Captures details of an events based on qrcodes ,menuclick, and getpromotion.
api:
  file: organization-1.json
  operationId: feed-scan-event
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
## Request Body Parameters

| Parameter                    | Description                                                                              |
| ---------------------------- | ---------------------------------------------------------------------------------------- |
| eventName\*                  | Pass the name of the scan event to capture - Value: GetPromotion (for scan event)        |
| eventTime                    | Time of the event                                                                        |
| scanId                       | ID of the scanned code                                                                   |
| sku                          | SKU of the scanned item                                                                  |
| promotionCode                | The coupon code of the promotion (Place holder for future use case. Not implemented yet) |
| details                      | Details of the event item                                                                |
| id/mobile/email/externalId\* | Any one of the unique identifiers of the customer.                                       |
