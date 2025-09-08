---
title: Configure Gateway
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
The Capillary Gateway configuration involves collaboration between the Mobile Capillary App Team, Gateway team, and the Sustenance Team.

The App Team generates the client token and project ID details, which are then incorporated into the Data Pipeline Management Gateway (DPMG) by the Sustenance Team. Additionally, credit files (data related to credit transactions such as points and rewards based on defined criteria) in JSON format for various platforms (android-trans, android-bulk, iOS-trans, iOS-bulk) are processed.

1. The App Team provides client token and project ID details required for Capillary Gateway setup, to the Sustenance team.
2. Verification of Existing Entries:
   1. The Sustenance Team checks if corresponding entries exist for the root organization (`orgId=0`) in the DPMG.
   2. If entries do not exist, proceed to step 3. Otherwise, use the existing IDs.
3. Adding New Entries to DPMG:
   1. Utilize the provided client token and project ID details to create new entries in the DPMG.
   2. Review and confirm configuration details such as host names, service URLs, authentication credentials, and message settings, as per the information provided in the [table](https://docs.capillarytech.com/reference/configure-gateway#capillary-gateway-configuration-details).
   3. Follow the insert statement provided in the hotswap link for inserting new entries.
   4. Ensure that the IDs in `gateway_org_configs` match with the `gateway_id` in the DPMG.
4. Server Restart Request:
   1. After completing the setup and configuration process, request a server restart from the Engage side.
   2. This ensures that any changes made to the Capillary Gateway configurations take effect.

## Capillary Gateway Configuration Details


| id   | org_id | short_name       | host_name  | full_name | username | password | connection_properties | service_ip | service_url                           | status_check_url | message_class | message_priority | channel_count | status | is_private | status_check_type | properties                                               | start_time          | end_time            | auto_update_time    |
| ---- | ------ | ---------------- | ---------- | --------- | -------- | -------- | --------------------- | ---------- | ------------------------------------- | ---------------- | ------------- | ---------------- | ------------- | ------ | ---------- | ----------------- | -------------------------------------------------------- | ------------------- | ------------------- | ------------------- |
| 2066 | 0      | fcmios_bulk      | fcmios     | fcm       | test     | test     | {}                    | 127.0.0.1  |  |                  | IOS           | BULK             | 5             | ACTIVE | 0          | PUSH              | `{"scopes":["campaign"]}`                                  | 1970-01-01 00:00:00 | 2100-01-01 00:00:00 | 2020-09-29 14:40:15 |
| 2067 | 0      | fcmios_trans     | fcmios     | fcm       | test     | test     | {}                    | 127.0.0.1  |  |                  | IOS           | HIGH             | 5             | ACTIVE | 0          | PUSH              | `{"scopes":["optout","otp","highvoltrans","transaction"]}` | 1970-01-01 00:00:00 | 2100-01-01 00:00:00 | 2020-09-29 14:40:15 |
| 2068 | 0      | fcmandroid_bulk  | fcmandroid | fcm       | test     | test     | {}                    | 127.0.0.1  |  |                  | ANDROID       | BULK             | 5             | ACTIVE | 0          | PUSH              | `{"scopes":["campaign"]}`                                  | 1970-01-01 00:00:00 | 2100-01-01 00:00:00 | 2022-07-11 11:56:34 |
| 2069 | 0      | fcmandroid_trans | fcmandroid | fcm       | test     | test     | {}                    | 127.0.0.1  |  |                  | ANDROID       | HIGH             | 5             | ACTIVE | 0          | PUSH              | `{"scopes":["optout","otp","highvoltrans","transaction"]}` | 1970-01-01 00:00:00 | 2100-01-01 00:00:00 | 2020-09-29 14:40:15 |