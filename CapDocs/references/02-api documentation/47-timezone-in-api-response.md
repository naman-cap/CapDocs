---
title: Timezone in Transaction API response
excerpt: >-
  This section provides you with information on how system handles the timezone
  during a transaction request.
deprecated: false
hidden: true
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---

<Note title="Note">
This time zone management applies specifically to Transaction APIs.
</Note>

The time in the API load can differ from the billing time based on the API (V1 or V2) used and the billing time itself.

See the below table for an example that explains how the system handles the timezone. The behaviour is the same for extended fields.  
**Example:**

| Billing time | V2 POST (Time in the V2 API request payload) | V2 GET (V2 API response) | V1 POST  (Time in the V1 API request payload) | V1 GET (V1 API response) |
| --- | --- | --- | --- | --- |
| 10:00:00+07:00<br/>(Time with UTC offset) | With the UTC offset in the billing time, the system identifies the timezone and converts it into the cluster timezone to which the org belongs)<br/><br/>India/SG cluster - 08:30:00+05:30 (converts it to IST)<br/><br/>EU cluster- 03:00:00+00:00 (converts it to UTC) | Returns the time  stored in the database with UTC offset<br/><br/>India/SG  - 08:30:00+05:30<br/><br/>EU - 03:00:00+00:00 | The system ignores the UTC offset in the billing time and assumes that the billing time is the same as the cluster timezone to which the org belongs)<br/><br/>India/SG - 10:00:00+05:30<br/>(Assumes that the time in the billing time is in IST and applies a UTC offset of +05:30)<br/><br/>EU - 10:00:00+00:00<br/>(Assumes that the  time in the billing time is in UTC and applies a UTC offset of +00:00 ) | Returns the time stored in the database without UTC offset.<br/><br/>India/SG  - 10:00:00<br/><br/>EU - 10:00:00 |
| 10:00:00 AM<br/>(Time without any timezone offset) | India/SG  cluster - 15:30:00+05:30<br/>(The system assumes that the time in the payload is UTC time and converts it to IST)<br/><br/>EU - 10:00:00+00:00<br/>(The system assumes that the time in the payload is UTC time and uses the same time) | Returns the time  stored in the database with UTC offset<br/><br/>India/SG cluster  - 15:30:00+05:30<br/><br/>EU cluster - 10:00:00+00:00 | India/SG cluster - 10:00:00+5:30<br/>(The system assumes that the time in the payload is in IST and applies a UTC offset of +05:30)<br/><br/>EU cluster - 10:00:00+0:00<br/>(The system assumes that the  time in the payload is in IST and applies a UTC offset of +00:00 ) | Returns the time stored in the database without UTC offset.<br/><br/>India/SG cluster- 10:00:00<br/><br/>EU cluster- 10:00:00 |

<Note title="Note">
- If you make an API POST call using V2 API and then retrieve the details using V1 API, the response of the API will be similar to the V1 API response in the above table.
- For system-related events such as service unavailable, errors etc, the system displays the respective cluster timezone.
</Note>

# Configuration to Ignore conversion of timezone in transaction

To avoid any confusion related to timezone conversion, you can raise a ticket and enable the `CONF_ORG_DISABLE_MACHINE_TIME_CONV` configuration. When the configuration is enabled, the time from the payload, without the UTC offset, is stored in the database for all clusters.  
See the below table for an example.

| Billing time   | V2 POST (Time in the V2 API request payload) | V2 GET (V2 API response)    | V1 POST  (Time in the V1 API request payload) | V1 GET (V1 API response)    |
| :------------- | :------------------------------------------- | :-------------------------- | :-------------------------------------------- | :-------------------------- |
| 17:49:41+07:00 | 17:49:41 (for all clusters)                  | 17:49:41 (for all clusters) | 17:49:41 (for all clusters)                   | 17:49:41 (for all clusters) |
|                |                                              |                             |                                               |                             |