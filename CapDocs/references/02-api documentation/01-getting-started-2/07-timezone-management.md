---
title: Timezone Management
excerpt: >-
  This page provides you with information on how system handles the timezone
  during a API request.
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
# Timezone in Redemptions

This section provides information on how the system handles timezones when customers redeem coupons or points, and when you retrieve redemption data through the API.

| Redemption Time          | Stored in DB/Time in API |
| :----------------------- | :----------------------- |
| 2021-10-22T14:04:23+7:00 | 2021-10-22 00:00:00      |
| 2021-11-10T16:27:09Z     | 2021-11-10 21:57:09      |

**Notes:**

1. When redemption time includes a specific timezone offset (e.g., +7:00):
   * The system stores only the date
   * Time is set to 00:00:00
   * Original time information is not preserved

2. When redemption time is in UTC (indicated by 'Z'):
   * The system converts UTC time to cluster timezone. For example, if the cluster is India, it converts to IST/UTC+5:30.
   * Both date and time are preserved
   * Example: 16:27:09 UTC → 21:57:09 IST

# Timezone in a Transaction API response

This section provides you with information on how the system handles the timezone during a transaction request. The time in the API load can differ from the billing time based on the API (V1 or V2) used and the billing time itself.

The below table explains how the transactions are handled in different time zones. The behaviour is the same for extended fields.

| Billing time                          | V2 POST (Time in the V2 API request payload)                                                                                                                                                                                                                            | V2 GET (V2 API response)                                                                                                                     | V1 POST (Time in the V1 API request payload)                                                                                                                                       | V1 GET (V1 API response)                                                                                                            |
| ------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| 10:00:00+07:00 (Time with UTC offset) | With the UTC offset in the billing time, the system identifies the timezone and converts it into the cluster timezone to which the org belongs.  <br />**India/SG cluster** – 08:30:00+05:30 (converts to IST)  <br />**EU cluster** – 03:00:00+00:00 (converts to UTC) | Returns the time stored in the database with UTC offset.  <br />**India/SG** – 08:30:00+05:30  <br />**EU** – 03:00:00+00:00                 | The system ignores the UTC offset in the billing time and assumes the billing time is in the cluster timezone.  <br />**India/SG** – 10:00:00+05:30  <br />**EU** – 10:00:00+00:00 | Returns the time stored in the database without UTC offset.  <br />**India/SG** – 10:00:00  <br />**EU** – 10:00:00                 |
| 10:00:00 AM (No timezone offset)      | The system assumes the time is in UTC and converts accordingly.  <br />**India/SG cluster** – 15:30:00+05:30  <br />**EU** – 10:00:00+00:00                                                                                                                             | Returns the time stored in the database with UTC offset.  <br />**India/SG cluster** – 15:30:00+05:30  <br />**EU cluster** – 10:00:00+00:00 | The system assumes the time is in the cluster timezone and applies the respective offset.  <br />**India/SG cluster** – 10:00:00+05:30  <br />**EU cluster** – 10:00:00+00:00      | Returns the time stored in the database without UTC offset.  <br />**India/SG cluster** – 10:00:00  <br />**EU cluster** – 10:00:00 |

<Note title="Note">
* The response of the API will be similar to that of the V1 API response of the above table if you make a **POST** call using V2 API and **GET** details using a V1 API.
* For system related events such as service unavailable, errors etc, the system displays the respective cluster timezone.
</Note>

## Configuration to Ignore conversion of timezone in transaction

To avoid any confusion related to timezone conversion, you can raise a ticket and enable the `CONF_ORG_DISABLE_MACHINE_TIME_CONV` configuration. When the configuration is enabled, the time from the payload, without the UTC offset, is stored in the database for all clusters. This is applicable only for V2 APIs.

See the below table for an example.

| Billing time   | V2 POST (Time in the V2 API request payload) | V2 GET (V2 API response)    |
| -------------- | -------------------------------------------- | --------------------------- |
| 17:49:41+07:00 | 17:49:41 (for all clusters)                  | 17:49:41 (for all clusters) |