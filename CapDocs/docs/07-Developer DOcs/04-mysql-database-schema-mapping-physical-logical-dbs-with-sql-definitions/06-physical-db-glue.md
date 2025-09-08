---
title: 'Physical DB: glue'
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
| Logical DB | Tables                       | Path for query                     |
| ---------- | ---------------------------- | ---------------------------------- |
| glue       | report\_terminology.sql      | glue.glue.report\_terminology      |
| glue       | workspace\_organisations.sql | glue.glue.workspace\_organisations |
| glue       | users.sql                    | glue.glue.users                    |
| glue       | clusters.sql                 | glue.glue.clusters                 |
| glue       | nifi\_entity.sql             | glue.glue.nifi\_entity             |
| glue       | user\_roles.sql              | glue.glue.user\_roles              |
| glue       | dashboard\_terminology.sql   | glue.glue.dashboard\_terminology   |
| glue       | cpSimData.sql                | glue.glue.cpSimData                |
| glue       | nifi\_connections.sql        | glue.glue.nifi\_connections        |
| glue       | nifi\_template\_data.sql     | glue.glue.nifi\_template\_data     |
| glue       | workspaces.sql               | glue.glue.workspaces               |
| glue       | organisations.sql            | glue.glue.organisations            |
| glue       | ui\_entity.sql               | glue.glue.ui\_entity               |
| glue       | fields.sql                   | glue.glue.fields                   |
| glue       | roles.sql                    | glue.glue.roles                    |
| glue       | cluster\_configs.sql         | glue.glue.cluster\_configs         |
| glue       | nifi\_custom\_message.sql    | glue.glue.nifi\_custom\_message    |
| glue       | reports.sql                  | glue.glue.reports                  |
| glue       | nifi\_fields.sql             | glue.glue.nifi\_fields             |
| glue       | connections.sql              | glue.glue.connections              |
| glue       | event\_records.sql           | glue.glue.event\_records           |
| glue       | events.sql                   | glue.glue.events                   |
| glue       | user\_workspaces.sql         | glue.glue.user\_workspaces         |
| emigran    | versions.sql                 | glue.emigran.versions              |

<br />

## Table: `IF`

| Column Name            | Data Type    | Index                    |
| ---------------------- | ------------ | ------------------------ |
| id                     | int(11)      | Part of PRIMARY KEY (id) |
| name                   | varchar(100) | None                     |
| type                   | varchar(100) | None                     |
| aggregation\_type      | varchar(100) | None                     |
| aggregation\_variables | varchar(100) | None                     |
| event\_type            | varchar(100) | None                     |
| is\_reported           | tinyint(1)   | None                     |

## Table: `workspace_organisations`

| Column Name      | Data Type   | Index                                  |
| ---------------- | ----------- | -------------------------------------- |
| organisation\_id | bigint(20)  | Part of PRIMARY KEY (organisation\_id) |
| workspace\_id    | bigint(20)  | Part of PRIMARY KEY (workspace\_id)    |
| source           | varchar(50) | Part of PRIMARY KEY (source)           |

## Table: `users`

| Column Name | Data Type   | Index                         |
| ----------- | ----------- | ----------------------------- |
| id          | bigint(20)  | Part of PRIMARY KEY (id)      |
| is\_enabled | bit(1)      | None                          |
| username    | varchar(50) | Part of UNIQUE KEY (username) |
| name        | varchar(50) | None                          |

## Table: `clusters`

| Column Name        | Data Type    | Index                      |
| ------------------ | ------------ | -------------------------- |
| name               | varchar(10)  | Part of PRIMARY KEY (name) |
| enabled            | bit(1)       | None                       |
| intouch\_base\_url | varchar(255) | None                       |

## Table: `nifi_entity`

| Column Name     | Data Type                                                                                                             | Index                    |
| --------------- | --------------------------------------------------------------------------------------------------------------------- | ------------------------ |
| id              | bigint(20)                                                                                                            | Part of PRIMARY KEY (id) |
| enabled         | bit(1)                                                                                                                | None                     |
| parent\_id      | bigint(20)                                                                                                            | None                     |
| payload         | varchar(8192)                                                                                                         | None                     |
| uri             | varchar(255)                                                                                                          | None                     |
| entity\_type    | enum('PROCESSOR','CONNECTION','PROCESS\_GROUP','CONTROLLER\_SERVICES','PROCESS\_GROUP\_STATE','FUNNEL','INPUT\_PORT') | None                     |
| is\_destination | bit(1)                                                                                                                | None                     |
| is\_source      | bit(1)                                                                                                                | None                     |

## Table: `user_roles`

| Column Name | Data Type  | Index                          |
| ----------- | ---------- | ------------------------------ |
| user\_id    | bigint(20) | Part of KEY (user\_id)         |
| role\_id    | bigint(20) | Part of PRIMARY KEY (role\_id) |
| is\_enabled | bit(1)     | None                           |

## Table: `dashboard_terminology`

| Column Name                    | Data Type    | Index                    |
| ------------------------------ | ------------ | ------------------------ |
| id                             | int(11)      | Part of PRIMARY KEY (id) |
| block\_id                      | int(11)      | None                     |
| input\_entity\_id              | varchar(255) | None                     |
| output\_entity\_id             | varchar(255) | None                     |
| input\_event\_type             | varchar(255) | None                     |
| output\_event\_type            | varchar(255) | None                     |
| input\_unit                    | varchar(255) | None                     |
| output\_unit                   | varchar(255) | None                     |
| custom\_action                 | varchar(255) | None                     |
| is\_input\_overall\_candidate  | tinyint(1)   | None                     |
| is\_output\_overall\_candidate | tinyint(1)   | None                     |
| is\_active                     | tinyint(1)   | None                     |

## Table: `nifi_connections`

| Column Name             | Data Type    | Index                    |
| ----------------------- | ------------ | ------------------------ |
| id                      | bigint(20)   | Part of PRIMARY KEY (id) |
| destination\_id         | bigint(20)   | None                     |
| enabled                 | bit(1)       | None                     |
| relationship            | varchar(255) | None                     |
| source\_id              | bigint(20)   | None                     |
| block\_id               | bigint(20)   | None                     |
| flow\_file\_expiration  | varchar(255) | None                     |
| load\_balance\_strategy | varchar(255) | None                     |

## Table: `nifi_template_data`

| Column Name   | Data Type    | Index                      |
| ------------- | ------------ | -------------------------- |
| name          | varchar(200) | Part of PRIMARY KEY (name) |
| description   | longtext     | None                       |
| payload       | json         | None                       |
| is\_validated | tinyint(1)   | None                       |
| is\_changed   | tinyint(1)   | None                       |

## Table: `workspaces`

| Column Name        | Data Type    | Index                    |
| ------------------ | ------------ | ------------------------ |
| id                 | bigint(20)   | Part of PRIMARY KEY (id) |
| enabled            | bit(1)       | None                     |
| name               | varchar(30)  | Part of KEY (name)       |
| process\_group\_id | varchar(255) | None                     |
| is\_locked         | bit(1)       | None                     |
| source             | varchar(50)  | None                     |

## Table: `organisations`

| Column Name   | Data Type    | Index                    |
| ------------- | ------------ | ------------------------ |
| id            | bigint(20)   | Part of PRIMARY KEY (id) |
| cluster\_name | varchar(255) | None                     |
| name          | varchar(255) | None                     |

## Table: `ui_entity`

| Column Name           | Data Type    | Index                    |
| --------------------- | ------------ | ------------------------ |
| id                    | bigint(20)   | Part of PRIMARY KEY (id) |
| description           | varchar(255) | None                     |
| enabled               | bit(1)       | None                     |
| name                  | varchar(255) | None                     |
| is\_source            | bit(1)       | None                     |
| is\_org\_aware        | bit(1)       | None                     |
| org\_aware\_context   | varchar(255) | None                     |
| is\_visible           | bit(1)       | None                     |
| dummy\_field\_checked | bit(1)       | None                     |
| dummy\_field\_content | varchar(255) | None                     |
| visible               | bit(1)       | None                     |

## Table: `fields`

| Column Name          | Data Type     | Index                    |
| -------------------- | ------------- | ------------------------ |
| id                   | bigint(20)    | Part of PRIMARY KEY (id) |
| default\_value       | varchar(255)  | None                     |
| display\_name        | varchar(255)  | None                     |
| enabled              | bit(1)        | None                     |
| html\_type           | varchar(255)  | None                     |
| name                 | varchar(255)  | None                     |
| parent\_id           | bigint(20)    | None                     |
| possible\_values     | varchar(2096) | None                     |
| required             | bit(1)        | None                     |
| children             | text          | None                     |
| validation\_rules    | text          | None                     |
| tool\_tip            | text          | None                     |
| is\_advanced         | bit(1)        | None                     |
| dynamic\_field\_type | varchar(255)  | None                     |

## Table: `roles`

| Column Name | Data Type    | Index                    |
| ----------- | ------------ | ------------------------ |
| id          | bigint(20)   | Part of PRIMARY KEY (id) |
| name        | varchar(255) | None                     |

## Table: `cluster_configs`

| Column Name    | Data Type     | Index                    |
| -------------- | ------------- | ------------------------ |
| id             | bigint(20)    | Part of PRIMARY KEY (id) |
| cluster\_name  | varchar(255)  | None                     |
| cluster\_key   | varchar(255)  | None                     |
| cluster\_value | varchar(2096) | None                     |

## Table: `nifi_custom_message`

| Column Name     | Data Type     | Index                    |
| --------------- | ------------- | ------------------------ |
| id              | bigint(20)    | Part of PRIMARY KEY (id) |
| is\_enabled     | bit(1)        | None                     |
| error\_message  | VARCHAR(2000) | None                     |
| custom\_message | VARCHAR(2000) | None                     |

## Table: `IF`

| Column Name             | Data Type         | Index                       |
| ----------------------- | ----------------- | --------------------------- |
| id                      | int(11)           | Part of PRIMARY KEY (id)    |
| name                    | varchar(100)      | None                        |
| workspace\_id           | int(11)           | Part of KEY (workspace\_id) |
| level                   | enum('WORKSPACE', | None                        |
| level\_entity\_id       | varchar(50)       | None                        |
| cron                    | varchar(50)       | None                        |
| time\_period            | int(11)           | None                        |
| current\_day\_included  | tinyint(1)        | None                        |
| recipients              | varchar(500)      | None                        |
| is\_active              | tinyint(1)        | None                        |
| is\_auto\_mail\_enabled | tinyint(1)        | None                        |

## Table: `nifi_fields`

| Column Name    | Data Type    | Index                    |
| -------------- | ------------ | ------------------------ |
| id             | bigint(20)   | Part of PRIMARY KEY (id) |
| default\_value | text         | None                     |
| enabled        | bit(1)       | None                     |
| field\_id      | bigint(20)   | None                     |
| nifi\_key      | varchar(255) | None                     |
| parent\_id     | bigint(20)   | None                     |

## Table: `connections`

| Column Name               | Data Type    | Index                    |
| ------------------------- | ------------ | ------------------------ |
| id                        | bigint(20)   | Part of PRIMARY KEY (id) |
| block\_id                 | bigint(20)   | None                     |
| block\_relationship\_name | varchar(255) | None                     |
| nifi\_id                  | bigint(20)   | None                     |
| nifi\_relationship\_name  | varchar(255) | None                     |
| flow\_file\_expiration    | varchar(255) | None                     |
| load\_balance\_strategy   | varchar(255) | None                     |

## Table: `event_records`

| Column Name        | Data Type    | Index                    |
| ------------------ | ------------ | ------------------------ |
| id                 | bigint(20)   | Part of PRIMARY KEY (id) |
| component\_id      | varchar(255) | None                     |
| component\_type    | varchar(255) | None                     |
| event\_date        | datetime     | None                     |
| event\_id          | varchar(255) | None                     |
| event\_type        | varchar(255) | None                     |
| file\_size         | bigint(20)   | None                     |
| file\_uuid         | varchar(255) | None                     |
| file\_name         | varchar(255) | None                     |
| input\_count       | int(11)      | None                     |
| output\_count      | int(11)      | None                     |
| process\_group\_id | varchar(255) | None                     |
| processing\_time   | bigint(20)   | None                     |
| status\_code       | int(11)      | None                     |
| level              | int(11)      | None                     |
| org\_id            | bigint(20)   | None                     |

## Table: `events`

| Column Name        | Data Type    | Index                    |
| ------------------ | ------------ | ------------------------ |
| id                 | bigint(20)   | Part of PRIMARY KEY (id) |
| child\_uuid        | varchar(255) | None                     |
| component\_id      | varchar(255) | None                     |
| component\_type    | varchar(255) | None                     |
| content\_uri       | varchar(255) | None                     |
| event\_date        | datetime     | None                     |
| event\_id          | varchar(255) | None                     |
| event\_type        | varchar(255) | None                     |
| file\_uuid         | varchar(255) | None                     |
| filename           | varchar(255) | None                     |
| parent\_uuid       | varchar(255) | None                     |
| process\_group\_id | varchar(255) | None                     |
| processing\_time   | bigint(20)   | None                     |
| size               | bigint(20)   | None                     |
| level              | int(11)      | None                     |
| org\_id            | bigint(20)   | None                     |

## Table: `user_workspaces`

| Column Name   | Data Type   | Index                               |
| ------------- | ----------- | ----------------------------------- |
| user\_id      | bigint(20)  | Part of KEY (user\_id)              |
| workspace\_id | bigint(20)  | Part of PRIMARY KEY (workspace\_id) |
| is\_enabled   | bit(1)      | None                                |
| permission    | varchar(10) | Part of PRIMARY KEY (permission)    |

## Table: `IF`

| Column Name | Data Type    | Index                     |
| ----------- | ------------ | ------------------------- |
| id          | int(11)      | Part of UNIQUE KEY (id)   |
| uuId        | varchar(250) | Part of UNIQUE KEY (uuId) |
| is\_active  | int(1)       | None                      |
