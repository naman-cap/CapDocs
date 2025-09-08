---
title: 'Physical DB: billdump'
excerpt: ''
deprecated: false
hidden: true
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
| Logical Database name    | Tables                                   | Path for query                                                         |
| ------------------------ | ---------------------------------------- | ---------------------------------------------------------------------- |
| Temp                     | bill\_test\_temp\_table.sql              | billdump.Temp.bill\_test\_temp\_table                                  |
| emf\_replay              | emf\_event\_logs.sql                     | billdump.emf\_replay.emf\_event\_logs                                  |
| emf\_replay              | emf\_event\_logs\_new\.sql               | billdump.emf\_replay.emf\_event\_logs\_new                             |
| emf\_replay              | emf\_replay\_logs.sql                    | billdump.emf\_replay.emf\_replay\_logs                                 |
| subscription\_management | merge\_customer\_summary.sql             | billdump.subscription\_management.merge\_customer\_summary             |
| subscription\_management | subscription\_import\_files\_history.sql | billdump.subscription\_management.subscription\_import\_files\_history |
| subscription\_management | supported\_tags.sql                      | billdump.subscription\_management.supported\_tags                      |
| subscription\_management | users\_govt\_status\_log.sql             | billdump.subscription\_management.users\_govt\_status\_log             |
| subscription\_management | gateway\_param\_values.sql               | billdump.subscription\_management.gateway\_param\_values               |
| subscription\_management | nsadmin\_skipped\_logs.sql               | billdump.subscription\_management.nsadmin\_skipped\_logs               |
| subscription\_management | email\_params.sql                        | billdump.subscription\_management.email\_params                        |
| subscription\_management | merge\_status\_log.sql                   | billdump.subscription\_management.merge\_status\_log                   |
| subscription\_management | user\_feedback.sql                       | billdump.subscription\_management.user\_feedback                       |
| subscription\_management | users\_external\_status.sql              | billdump.subscription\_management.users\_external\_status              |
| subscription\_management | users\_govt\_status.sql                  | billdump.subscription\_management.users\_govt\_status                  |
| subscription\_management | nsadmin\_communication\_logs.sql         | billdump.subscription\_management.nsadmin\_communication\_logs         |
| subscription\_management | rule\_param\_mappings.sql                | billdump.subscription\_management.rule\_param\_mappings                |
| subscription\_management | subscription\_services.sql               | billdump.subscription\_management.subscription\_services               |
| subscription\_management | campaign\_veneno\_tracker.sql            | billdump.subscription\_management.campaign\_veneno\_tracker            |
| subscription\_management | subscription\_rules\_history.sql         | billdump.subscription\_management.subscription\_rules\_history         |
| subscription\_management | sms\_params.sql                          | billdump.subscription\_management.sms\_params                          |
| subscription\_management | sms\_params\_logs.sql                    | billdump.subscription\_management.sms\_params\_logs                    |
| subscription\_management | user\_subscription\_status\_log.sql      | billdump.subscription\_management.user\_subscription\_status\_log      |
| subscription\_management | user\_subscription\_status.sql           | billdump.subscription\_management.user\_subscription\_status           |
| subscription\_management | user\_campaign\_subscriptions.sql        | billdump.subscription\_management.user\_campaign\_subscriptions        |
| subscription\_management | supported\_channels.sql                  | billdump.subscription\_management.supported\_channels                  |
| subscription\_management | org\_param\_values.sql                   | billdump.subscription\_management.org\_param\_values                   |
| subscription\_management | subscription\_scopes.sql                 | billdump.subscription\_management.subscription\_scopes                 |
| subscription\_management | default\_content.sql                     | billdump.subscription\_management.default\_content                     |
| subscription\_management | org\_gateways\_mapping.sql               | billdump.subscription\_management.org\_gateways\_mapping               |
| subscription\_management | subscription\_rules.sql                  | billdump.subscription\_management.subscription\_rules                  |
| subscription\_management | email\_params\_logs.sql                  | billdump.subscription\_management.email\_params\_logs                  |
| product\_management      | inventory\_item\_attributes.sql          | billdump.product\_management.inventory\_item\_attributes               |
| product\_management      | org\_colors.sql                          | billdump.product\_management.org\_colors                               |
| product\_management      | inventory\_masters.sql                   | billdump.product\_management.inventory\_masters                        |
| product\_management      | categories.sql                           | billdump.product\_management.categories                                |
| product\_management      | sizes.sql                                | billdump.product\_management.sizes                                     |
| product\_management      | inventory\_returnable.sql                | billdump.product\_management.inventory\_returnable                     |
| product\_management      | brands.sql                               | billdump.product\_management.brands                                    |
| product\_management      | colors.sql                               | billdump.product\_management.colors                                    |
| product\_management      | meta\_sizes.sql                          | billdump.product\_management.meta\_sizes                               |
| product\_management      | styles.sql                               | billdump.product\_management.styles                                    |
| points\_checker          | pa\_tree\_imbalance.sql                  | billdump.points\_checker.pa\_tree\_imbalance                           |
| emigran                  | versions.sql                             | billdump.emigran.versions                                              |
| file\_services           | namespaces.sql                           | billdump.file\_services.namespaces                                     |
| file\_services           | files\_tags\_map.sql                     | billdump.file\_services.files\_tags\_map                               |
| file\_services           | tags.sql                                 | billdump.file\_services.tags                                           |
| file\_services           | audit\_logs.sql                          | billdump.file\_services.audit\_logs                                    |
| file\_services           | files\_delete\_log.sql                   | billdump.file\_services.files\_delete\_log                             |
| file\_services           | versions.sql                             | billdump.file\_services.versions                                       |
| file\_services           | files.sql                                | billdump.file\_services.files                                          |
| file\_services           | tag\_values.sql                          | billdump.file\_services.tag\_values                                    |
| performance\_logs        | intouch\_ke\_api\_logs.sql               | billdump.performance\_logs.intouch\_ke\_api\_logs                      |
| performance\_logs        | store\_server\_till\_reports.sql         | billdump.performance\_logs.store\_server\_till\_reports                |
| performance\_logs        | store\_server\_bulk\_upload.sql          | billdump.performance\_logs.store\_server\_bulk\_upload                 |
| performance\_logs        | async\_message\_api\_requests.sql        | billdump.performance\_logs.async\_message\_api\_requests               |
| performance\_logs        | api\_hit\_table.sql                      | billdump.performance\_logs.api\_hit\_table                             |
| performance\_logs        | store\_server\_wcf\_report.sql           | billdump.performance\_logs.store\_server\_wcf\_report                  |
| performance\_logs        | till\_diagnostics\_system\_info.sql      | billdump.performance\_logs.till\_diagnostics\_system\_info             |
| performance\_logs        | till\_diagnostics\_sync\_report.sql      | billdump.performance\_logs.till\_diagnostics\_sync\_report             |
| performance\_logs        | store\_server\_health.sql                | billdump.performance\_logs.store\_server\_health                       |
| performance\_logs        | store\_server\_sync\_logs.sql            | billdump.performance\_logs.store\_server\_sync\_logs                   |
| performance\_logs        | store\_server\_sql\_svr\_health.sql      | billdump.performance\_logs.store\_server\_sql\_svr\_health             |
| performance\_logs        | api\_summary\_table.sql                  | billdump.performance\_logs.api\_summary\_table                         |
| performance\_logs        | till\_error\_report.sql                  | billdump.performance\_logs.till\_error\_report                         |
| performance\_logs        | till\_diagnostics\_bulk\_upload.sql      | billdump.performance\_logs.till\_diagnostics\_bulk\_upload             |
| performance\_logs        | till\_diagnostics.sql                    | billdump.performance\_logs.till\_diagnostics                           |
| performance\_logs        | extended\_properties.sql                 | billdump.performance\_logs.extended\_properties                        |
| performance\_logs        | api\_user\_agents.sql                    | billdump.performance\_logs.api\_user\_agents                           |

<br />

## Table: `bill_test_temp_table`

| Column Name | Data Type    | Index            |
| ----------- | ------------ | ---------------- |
| id          | INT(11)      | PRIMARY KEY (id) |
| name        | VARCHAR(255) | None             |
| created\_at | DATETIME     | None             |

## Table: `emf_event_logs`

| Column Name | Data Type    | Index                   |
| ----------- | ------------ | ----------------------- |
| event\_id   | BIGINT(20)   | PRIMARY KEY (event\_id) |
| event\_name | VARCHAR(255) | None                    |
| event\_time | TIMESTAMP    | None                    |

## Table: `emf_event_logs_new`

| Column Name | Data Type    | Index                   |
| ----------- | ------------ | ----------------------- |
| event\_id   | BIGINT(20)   | PRIMARY KEY (event\_id) |
| user\_id    | BIGINT(20)   | None                    |
| event\_type | VARCHAR(255) | None                    |
| created\_at | DATETIME     | None                    |

## Table: `emf_replay_logs`

| Column Name | Data Type   | Index                    |
| ----------- | ----------- | ------------------------ |
| replay\_id  | BIGINT(20)  | PRIMARY KEY (replay\_id) |
| status      | VARCHAR(50) | None                     |
| timestamp   | TIMESTAMP   | None                     |

## Table: `merge_customer_summary`

| Column Name   | Data Type  | Index                      |
| ------------- | ---------- | -------------------------- |
| customer\_id  | BIGINT(20) | PRIMARY KEY (customer\_id) |
| summary\_data | TEXT       | None                       |
| updated\_at   | DATETIME   | None                       |

<br />

## Table: `subscription_import_files_history`

| Column Name  | Data Type    | Index                  |
| ------------ | ------------ | ---------------------- |
| file\_id     | BIGINT(20)   | PRIMARY KEY (file\_id) |
| file\_name   | VARCHAR(255) | None                   |
| imported\_at | DATETIME     | None                   |

## Table: `supported_tags`

| Column Name | Data Type    | Index                 |
| ----------- | ------------ | --------------------- |
| tag\_id     | INT(11)      | PRIMARY KEY (tag\_id) |
| tag\_name   | VARCHAR(100) | None                  |

## Table: `users_govt_status_log`

| Column Name | Data Type   | Index                 |
| ----------- | ----------- | --------------------- |
| log\_id     | BIGINT(20)  | PRIMARY KEY (log\_id) |
| user\_id    | BIGINT(20)  | None                  |
| status      | VARCHAR(50) | None                  |
| updated\_on | TIMESTAMP   | None                  |

## Table: `gateway_param_values`

| Column Name   | Data Type    | Index                   |
| ------------- | ------------ | ----------------------- |
| param\_id     | INT(11)      | PRIMARY KEY (param\_id) |
| gateway\_name | VARCHAR(255) | None                    |
| param\_value  | TEXT         | None                    |

## Table: `nsadmin_skipped_logs`

| Column Name | Data Type    | Index                     |
| ----------- | ------------ | ------------------------- |
| skipped\_id | BIGINT(20)   | PRIMARY KEY (skipped\_id) |
| reason      | VARCHAR(255) | None                      |
| created\_at | DATETIME     | None                      |

## Table: `email_params`

| Column Name | Data Type    | Index                   |
| ----------- | ------------ | ----------------------- |
| param\_id   | INT(11)      | PRIMARY KEY (param\_id) |
| email\_type | VARCHAR(100) | None                    |
| template    | TEXT         | None                    |

## Table: `merge_status_log`

| Column Name | Data Type   | Index                 |
| ----------- | ----------- | --------------------- |
| log\_id     | BIGINT(20)  | PRIMARY KEY (log\_id) |
| status      | VARCHAR(50) | None                  |
| updated\_at | TIMESTAMP   | None                  |

## Table: `user_feedback`

| Column Name    | Data Type  | Index                      |
| -------------- | ---------- | -------------------------- |
| feedback\_id   | BIGINT(20) | PRIMARY KEY (feedback\_id) |
| user\_id       | BIGINT(20) | None                       |
| feedback\_text | TEXT       | None                       |
| submitted\_on  | DATETIME   | None                       |

## Table: `users_external_status`

| Column Name      | Data Type    | Index                      |
| ---------------- | ------------ | -------------------------- |
| external\_id     | BIGINT(20)   | PRIMARY KEY (external\_id) |
| user\_id         | BIGINT(20)   | None                       |
| external\_status | VARCHAR(100) | None                       |

## Table: `users_govt_status`

| Column Name  | Data Type    | Index                  |
| ------------ | ------------ | ---------------------- |
| user\_id     | BIGINT(20)   | PRIMARY KEY (user\_id) |
| govt\_status | VARCHAR(100) | None                   |
| verified\_on | TIMESTAMP    | None                   |

## Table: `nsadmin_communication_logs`

| Column Name | Data Type  | Index                  |
| ----------- | ---------- | ---------------------- |
| comm\_id    | BIGINT(20) | PRIMARY KEY (comm\_id) |
| message     | TEXT       | None                   |
| sent\_on    | TIMESTAMP  | None                   |

<br />

## Table: `rule_param_mappings`

| Column Name  | Data Type    | Index                     |
| ------------ | ------------ | ------------------------- |
| mapping\_id  | BIGINT(20)   | PRIMARY KEY (mapping\_id) |
| rule\_id     | BIGINT(20)   | None                      |
| param\_key   | VARCHAR(255) | None                      |
| param\_value | TEXT         | None                      |

## Table: `subscription_services`

| Column Name   | Data Type    | Index                     |
| ------------- | ------------ | ------------------------- |
| service\_id   | BIGINT(20)   | PRIMARY KEY (service\_id) |
| service\_name | VARCHAR(255) | None                      |
| active        | TINYINT(1)   | None                      |

## Table: `campaign_veneno_tracker`

| Column Name       | Data Type  | Index                     |
| ----------------- | ---------- | ------------------------- |
| tracker\_id       | BIGINT(20) | PRIMARY KEY (tracker\_id) |
| campaign\_id      | BIGINT(20) | None                      |
| event\_logged\_at | DATETIME   | None                      |

## Table: `subscription_rules_history`

| Column Name | Data Type  | Index                     |
| ----------- | ---------- | ------------------------- |
| history\_id | BIGINT(20) | PRIMARY KEY (history\_id) |
| rule\_id    | BIGINT(20) | None                      |
| changed\_at | DATETIME   | None                      |

## Table: `sms_params`

| Column Name | Data Type    | Index                   |
| ----------- | ------------ | ----------------------- |
| param\_id   | INT(11)      | PRIMARY KEY (param\_id) |
| sms\_type   | VARCHAR(100) | None                    |
| template    | TEXT         | None                    |

## Table: `sms_params_logs`

| Column Name        | Data Type    | Index                 |
| ------------------ | ------------ | --------------------- |
| log\_id            | BIGINT(20)   | PRIMARY KEY (log\_id) |
| sms\_type          | VARCHAR(100) | None                  |
| template\_snapshot | TEXT         | None                  |
| logged\_on         | TIMESTAMP    | None                  |

## Table: `user_subscription_status_log`

| Column Name | Data Type   | Index                 |
| ----------- | ----------- | --------------------- |
| log\_id     | BIGINT(20)  | PRIMARY KEY (log\_id) |
| user\_id    | BIGINT(20)  | None                  |
| status      | VARCHAR(50) | None                  |
| updated\_at | TIMESTAMP   | None                  |

## Table: `user_subscription_status`

| Column Name          | Data Type   | Index                  |
| -------------------- | ----------- | ---------------------- |
| user\_id             | BIGINT(20)  | PRIMARY KEY (user\_id) |
| subscription\_status | VARCHAR(50) | None                   |
| last\_updated        | TIMESTAMP   | None                   |

## Table: `user_campaign_subscriptions`

| Column Name      | Data Type  | Index                          |
| ---------------- | ---------- | ------------------------------ |
| subscription\_id | BIGINT(20) | PRIMARY KEY (subscription\_id) |
| user\_id         | BIGINT(20) | None                           |
| campaign\_id     | BIGINT(20) | None                           |

## Table: `supported_channels`

| Column Name   | Data Type    | Index                     |
| ------------- | ------------ | ------------------------- |
| channel\_id   | INT(11)      | PRIMARY KEY (channel\_id) |
| channel\_name | VARCHAR(100) | None                      |

## Table: `org_param_values`

| Column Name  | Data Type    | Index                   |
| ------------ | ------------ | ----------------------- |
| param\_id    | INT(11)      | PRIMARY KEY (param\_id) |
| org\_id      | BIGINT(20)   | None                    |
| param\_key   | VARCHAR(255) | None                    |
| param\_value | TEXT         | None                    |

## Table: `subscription_scopes`

| Column Name | Data Type    | Index                   |
| ----------- | ------------ | ----------------------- |
| scope\_id   | INT(11)      | PRIMARY KEY (scope\_id) |
| scope\_name | VARCHAR(100) | None                    |

## Table: `default_content`

| Column Name    | Data Type    | Index                     |
| -------------- | ------------ | ------------------------- |
| content\_id    | INT(11)      | PRIMARY KEY (content\_id) |
| content\_key   | VARCHAR(255) | None                      |
| content\_value | TEXT         | None                      |

## Table: `org_gateways_mapping`

| Column Name   | Data Type    | Index                     |
| ------------- | ------------ | ------------------------- |
| mapping\_id   | INT(11)      | PRIMARY KEY (mapping\_id) |
| org\_id       | BIGINT(20)   | None                      |
| gateway\_name | VARCHAR(255) | None                      |

<br />

## Table: `inventory_item_attributes`

| Column Name      | Data Type    | Index                       |
| ---------------- | ------------ | --------------------------- |
| attribute\_id    | INT(11)      | PRIMARY KEY (attribute\_id) |
| item\_id         | BIGINT(20)   | None                        |
| attribute\_name  | VARCHAR(255) | None                        |
| attribute\_value | VARCHAR(255) | None                        |

## Table: `org_colors`

| Column Name | Data Type    | Index                   |
| ----------- | ------------ | ----------------------- |
| color\_id   | INT(11)      | PRIMARY KEY (color\_id) |
| org\_id     | BIGINT(20)   | None                    |
| color\_name | VARCHAR(100) | None                    |

## Table: `inventory_masters`

| Column Name       | Data Type    | Index                       |
| ----------------- | ------------ | --------------------------- |
| inventory\_id     | BIGINT(20)   | PRIMARY KEY (inventory\_id) |
| item\_code        | VARCHAR(255) | None                        |
| item\_description | TEXT         | None                        |

## Table: `categories`

| Column Name    | Data Type    | Index                      |
| -------------- | ------------ | -------------------------- |
| category\_id   | INT(11)      | PRIMARY KEY (category\_id) |
| category\_name | VARCHAR(100) | None                       |

## Table: `sizes`

| Column Name | Data Type    | Index                  |
| ----------- | ------------ | ---------------------- |
| size\_id    | INT(11)      | PRIMARY KEY (size\_id) |
| size\_name  | VARCHAR(100) | None                   |

## Table: `inventory_returnable`

| Column Name    | Data Type  | Index                        |
| -------------- | ---------- | ---------------------------- |
| returnable\_id | INT(11)    | PRIMARY KEY (returnable\_id) |
| inventory\_id  | BIGINT(20) | None                         |
| is\_returnable | TINYINT(1) | None                         |

## Table: `brands`

| Column Name | Data Type    | Index                   |
| ----------- | ------------ | ----------------------- |
| brand\_id   | INT(11)      | PRIMARY KEY (brand\_id) |
| brand\_name | VARCHAR(100) | None                    |

## Table: `colors`

| Column Name | Data Type    | Index                   |
| ----------- | ------------ | ----------------------- |
| color\_id   | INT(11)      | PRIMARY KEY (color\_id) |
| color\_name | VARCHAR(100) | None                    |

## Table: `meta_sizes`

| Column Name    | Data Type    | Index                        |
| -------------- | ------------ | ---------------------------- |
| meta\_size\_id | INT(11)      | PRIMARY KEY (meta\_size\_id) |
| size\_name     | VARCHAR(100) | None                         |

## Table: `styles`

| Column Name | Data Type    | Index                   |
| ----------- | ------------ | ----------------------- |
| style\_id   | INT(11)      | PRIMARY KEY (style\_id) |
| style\_name | VARCHAR(255) | None                    |

## Table: `pa_tree_imbalance`

| Column Name      | Data Type  | Index                  |
| ---------------- | ---------- | ---------------------- |
| tree\_id         | BIGINT(20) | PRIMARY KEY (tree\_id) |
| imbalance\_score | INT(11)    | None                   |

## Table: `versions` (from emigran)

| Column Name | Data Type    | Index                            |
| ----------- | ------------ | -------------------------------- |
| id          | INT(11)      | Part of UNIQUE KEY (country\_id) |
| uuId        | VARCHAR(250) | Part of UNIQUE KEY (country\_id) |
| is\_active  | INT(1)       | None                             |

## Table: `namespaces`

| Column Name     | Data Type    | Index                       |
| --------------- | ------------ | --------------------------- |
| namespace\_id   | INT(11)      | PRIMARY KEY (namespace\_id) |
| namespace\_name | VARCHAR(255) | None                        |

## Table: `files_tags_map`

| Column Name | Data Type  | Index                 |
| ----------- | ---------- | --------------------- |
| map\_id     | BIGINT(20) | PRIMARY KEY (map\_id) |
| file\_id    | BIGINT(20) | None                  |
| tag\_id     | INT(11)    | None                  |

## Table: `tags`

| Column Name | Data Type    | Index                 |
| ----------- | ------------ | --------------------- |
| tag\_id     | INT(11)      | PRIMARY KEY (tag\_id) |
| tag\_name   | VARCHAR(100) | None                  |

## Table: `audit_logs`

| Column Name | Data Type    | Index                 |
| ----------- | ------------ | --------------------- |
| log\_id     | BIGINT(20)   | PRIMARY KEY (log\_id) |
| action      | VARCHAR(255) | None                  |
| timestamp   | DATETIME     | None                  |

## Table: `files_delete_log`

| Column Name | Data Type  | Index                    |
| ----------- | ---------- | ------------------------ |
| delete\_id  | BIGINT(20) | PRIMARY KEY (delete\_id) |
| file\_id    | BIGINT(20) | None                     |
| deleted\_at | DATETIME   | None                     |

## Table: `versions` (from file\_services)

| Column Name | Data Type  | Index                     |
| ----------- | ---------- | ------------------------- |
| version\_id | INT(11)    | PRIMARY KEY (version\_id) |
| file\_id    | BIGINT(20) | None                      |
| created\_at | TIMESTAMP  | None                      |

<br />

## Table: `intouch_ke_api_logs`

| Column Name    | Data Type    | Index                 |
| -------------- | ------------ | --------------------- |
| log\_id        | BIGINT(20)   | PRIMARY KEY (log\_id) |
| request\_url   | VARCHAR(255) | None                  |
| response\_code | INT(11)      | None                  |
| request\_time  | TIMESTAMP    | None                  |

## Table: `store_server_till_reports`

| Column Name   | Data Type  | Index                    |
| ------------- | ---------- | ------------------------ |
| report\_id    | BIGINT(20) | PRIMARY KEY (report\_id) |
| till\_id      | BIGINT(20) | None                     |
| generated\_on | TIMESTAMP  | None                     |

## Table: `store_server_bulk_upload`

| Column Name  | Data Type    | Index                    |
| ------------ | ------------ | ------------------------ |
| upload\_id   | BIGINT(20)   | PRIMARY KEY (upload\_id) |
| file\_name   | VARCHAR(255) | None                     |
| uploaded\_on | TIMESTAMP    | None                     |

## Table: `async_message_api_requests`

| Column Name   | Data Type    | Index                     |
| ------------- | ------------ | ------------------------- |
| request\_id   | BIGINT(20)   | PRIMARY KEY (request\_id) |
| message\_type | VARCHAR(255) | None                      |
| requested\_at | TIMESTAMP    | None                      |

## Table: `api_hit_table`

| Column Name    | Data Type    | Index                 |
| -------------- | ------------ | --------------------- |
| hit\_id        | BIGINT(20)   | PRIMARY KEY (hit\_id) |
| api\_name      | VARCHAR(255) | None                  |
| hit\_timestamp | TIMESTAMP    | None                  |

## Table: `store_server_wcf_report`

| Column Name  | Data Type  | Index                    |
| ------------ | ---------- | ------------------------ |
| report\_id   | BIGINT(20) | PRIMARY KEY (report\_id) |
| store\_id    | BIGINT(20) | None                     |
| report\_date | DATE       | None                     |

## Table: `till_diagnostics_system_info`

| Column Name   | Data Type  | Index                  |
| ------------- | ---------- | ---------------------- |
| diag\_id      | BIGINT(20) | PRIMARY KEY (diag\_id) |
| system\_info  | TEXT       | None                   |
| collected\_on | TIMESTAMP  | None                   |

## Table: `till_diagnostics_sync_report`

| Column Name  | Data Type   | Index                  |
| ------------ | ----------- | ---------------------- |
| sync\_id     | BIGINT(20)  | PRIMARY KEY (sync\_id) |
| till\_id     | BIGINT(20)  | None                   |
| sync\_status | VARCHAR(50) | None                   |
| sync\_time   | TIMESTAMP   | None                   |

## Table: `store_server_health`

| Column Name | Data Type   | Index                    |
| ----------- | ----------- | ------------------------ |
| health\_id  | BIGINT(20)  | PRIMARY KEY (health\_id) |
| till\_id    | BIGINT(20)  | None                     |
| status      | VARCHAR(50) | None                     |
| checked\_on | TIMESTAMP   | None                     |

## Table: `store_server_sync_logs`

| Column Name    | Data Type  | Index                       |
| -------------- | ---------- | --------------------------- |
| sync\_log\_id  | BIGINT(20) | PRIMARY KEY (sync\_log\_id) |
| till\_id       | BIGINT(20) | None                        |
| log\_timestamp | TIMESTAMP  | None                        |

## Table: `store_server_sql_svr_health`

| Column Name     | Data Type    | Index                         |
| --------------- | ------------ | ----------------------------- |
| sql\_health\_id | BIGINT(20)   | PRIMARY KEY (sql\_health\_id) |
| server\_name    | VARCHAR(255) | None                          |
| health\_status  | VARCHAR(50)  | None                          |

## Table: `api_summary_table`

| Column Name   | Data Type    | Index                     |
| ------------- | ------------ | ------------------------- |
| summary\_id   | BIGINT(20)   | PRIMARY KEY (summary\_id) |
| api\_name     | VARCHAR(255) | None                      |
| total\_hits   | INT(11)      | None                      |
| summary\_date | DATE         | None                      |

## Table: `till_error_report`

| Column Name    | Data Type  | Index                   |
| -------------- | ---------- | ----------------------- |
| error\_id      | BIGINT(20) | PRIMARY KEY (error\_id) |
| till\_id       | BIGINT(20) | None                    |
| error\_message | TEXT       | None                    |
| error\_time    | TIMESTAMP  | None                    |

## Table: `till_diagnostics_bulk_upload`

| Column Name       | Data Type    | Index                    |
| ----------------- | ------------ | ------------------------ |
| upload\_id        | BIGINT(20)   | PRIMARY KEY (upload\_id) |
| file\_name        | VARCHAR(255) | None                     |
| upload\_timestamp | TIMESTAMP    | None                     |

## Table: `till_diagnostics`

| Column Name     | Data Type   | Index                         |
| --------------- | ----------- | ----------------------------- |
| diagnostics\_id | BIGINT(20)  | PRIMARY KEY (diagnostics\_id) |
| till\_id        | BIGINT(20)  | None                          |
| status          | VARCHAR(50) | None                          |
| created\_at     | TIMESTAMP   | None                          |

## Table: `extended_properties`

| Column Name     | Data Type    | Index                      |
| --------------- | ------------ | -------------------------- |
| property\_id    | BIGINT(20)   | PRIMARY KEY (property\_id) |
| property\_key   | VARCHAR(255) | None                       |
| property\_value | TEXT         | None                       |

## Table: `api_user_agents`

| Column Name         | Data Type    | Index                   |
| ------------------- | ------------ | ----------------------- |
| agent\_id           | BIGINT(20)   | PRIMARY KEY (agent\_id) |
| user\_agent\_string | TEXT         | None                    |
| api\_name           | VARCHAR(255) | None                    |
