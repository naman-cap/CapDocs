---
title: 'Physical DB: campaigns'
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
| Logical DB                   | Tables                                       | Path for query                                                          |
| ---------------------------- | -------------------------------------------- | ----------------------------------------------------------------------- |
| Temp                         | dummy\_table.sql                             | campaigns.Temp.dummy\_table                                             |
| veneno\_data\_details        | inbox\_drafts.sql                            | campaigns.veneno\_data\_details.inbox\_drafts                           |
| veneno\_data\_details        | control\_group\_users\_history.sql           | campaigns.veneno\_data\_details.control\_group\_users\_history          |
| temporal\_engine\_bootstrap  | simple\_property\_meta.sql                   | campaigns.temporal\_engine\_bootstrap.simple\_property\_meta            |
| temporal\_engine\_bootstrap  | sharding\_config.sql                         | campaigns.temporal\_engine\_bootstrap.sharding\_config                  |
| temporal\_engine\_bootstrap  | rule\_action\_info.sql                       | campaigns.temporal\_engine\_bootstrap.rule\_action\_info                |
| temporal\_engine\_bootstrap  | rule\_case\_action\_list.sql                 | campaigns.temporal\_engine\_bootstrap.rule\_case\_action\_list          |
| temporal\_engine\_bootstrap  | rule\_info.sql                               | campaigns.temporal\_engine\_bootstrap.rule\_info                        |
| temporal\_engine\_bootstrap  | simple\_property\_info.sql                   | campaigns.temporal\_engine\_bootstrap.simple\_property\_info            |
| temporal\_engine\_bootstrap  | org\_config\_ruleset\_mapping.sql            | campaigns.temporal\_engine\_bootstrap.org\_config\_ruleset\_mapping     |
| temporal\_engine\_bootstrap  | ruleset\_info.sql                            | campaigns.temporal\_engine\_bootstrap.ruleset\_info                     |
| temporal\_engine\_bootstrap  | action\_meta.sql                             | campaigns.temporal\_engine\_bootstrap.action\_meta                      |
| veneno\_meta\_info           | shard\_details.sql                           | campaigns.veneno\_meta\_info.shard\_details                             |
| veneno\_meta\_info           | bucket\_details.sql                          | campaigns.veneno\_meta\_info.bucket\_details                            |
| emigran                      | versions.sql                                 | campaigns.emigran.versions                                              |
| temporal\_engine\_2000000\_1 | timelines.sql                                | campaigns.temporal\_engine\_2000000\_1.timelines                        |
| temporal\_engine\_2000000\_1 | event\_milestone\_mapping.sql                | campaigns.temporal\_engine\_2000000\_1.event\_milestone\_mapping        |
| temporal\_engine\_2000000\_1 | current\_milestone\_contexts.sql             | campaigns.temporal\_engine\_2000000\_1.current\_milestone\_contexts     |
| temporal\_engine\_2000000\_1 | user\_activity\_skip\_criteria.sql           | campaigns.temporal\_engine\_2000000\_1.user\_activity\_skip\_criteria   |
| temporal\_engine\_2000000\_1 | current\_message\_context.sql                | campaigns.temporal\_engine\_2000000\_1.current\_message\_context        |
| temporal\_engine\_2000000\_1 | phases.sql                                   | campaigns.temporal\_engine\_2000000\_1.phases                           |
| temporal\_engine\_2000000\_1 | activity\_context\_history.sql               | campaigns.temporal\_engine\_2000000\_1.activity\_context\_history       |
| temporal\_engine\_2000000\_1 | org\_config\_time\_prefs.sql                 | campaigns.temporal\_engine\_2000000\_1.org\_config\_time\_prefs         |
| temporal\_engine\_2000000\_1 | org\_config.sql                              | campaigns.temporal\_engine\_2000000\_1.org\_config                      |
| temporal\_engine\_2000000\_1 | offers.sql                                   | campaigns.temporal\_engine\_2000000\_1.offers                           |
| temporal\_engine\_2000000\_1 | activity\_context\_attrs.sql                 | campaigns.temporal\_engine\_2000000\_1.activity\_context\_attrs         |
| temporal\_engine\_2000000\_1 | skip\_levels.sql                             | campaigns.temporal\_engine\_2000000\_1.skip\_levels                     |
| temporal\_engine\_2000000\_1 | offer\_sms\_templates.sql                    | campaigns.temporal\_engine\_2000000\_1.offer\_sms\_templates            |
| temporal\_engine\_2000000\_1 | offer\_filters.sql                           | campaigns.temporal\_engine\_2000000\_1.offer\_filters                   |
| temporal\_engine\_2000000\_1 | event\_categories.sql                        | campaigns.temporal\_engine\_2000000\_1.event\_categories                |
| temporal\_engine\_2000000\_1 | milestones.sql                               | campaigns.temporal\_engine\_2000000\_1.milestones                       |
| temporal\_engine\_2000000\_1 | milestone\_context\_history.sql              | campaigns.temporal\_engine\_2000000\_1.milestone\_context\_history      |
| temporal\_engine\_2000000\_1 | category\_attrs.sql                          | campaigns.temporal\_engine\_2000000\_1.category\_attrs                  |
| temporal\_engine\_2000000\_1 | offer\_email\_templates.sql                  | campaigns.temporal\_engine\_2000000\_1.offer\_email\_templates          |
| temporal\_engine\_2000000\_1 | events.sql                                   | campaigns.temporal\_engine\_2000000\_1.events                           |
| temporal\_engine\_2000000\_1 | org\_config\_properties.sql                  | campaigns.temporal\_engine\_2000000\_1.org\_config\_properties          |
| temporal\_engine\_2000000\_1 | timeline\_properties.sql                     | campaigns.temporal\_engine\_2000000\_1.timeline\_properties             |
| temporal\_engine\_2000000\_1 | temp\_activity\_context\_history.sql         | campaigns.temporal\_engine\_2000000\_1.temp\_activity\_context\_history |
| temporal\_engine\_2000000\_1 | user\_initialization\_history.sql            | campaigns.temporal\_engine\_2000000\_1.user\_initialization\_history    |
| campaign\_data\_details      | dummy\_data\_details.sql                     | campaigns.campaign\_data\_details.dummy\_data\_details                  |
| veneno                       | recipient\_social\_list\_map.sql             | campaigns.veneno.recipient\_social\_list\_map                           |
| veneno                       | veneno\_service\_monitor\_status.sql         | campaigns.veneno.veneno\_service\_monitor\_status                       |
| veneno                       | variant\_execution\_status.sql               | campaigns.veneno.variant\_execution\_status                             |
| veneno                       | precheck\_errors\_types.sql                  | campaigns.veneno.precheck\_errors\_types                                |
| veneno                       | veneno\_monitor\_status.sql                  | campaigns.veneno.veneno\_monitor\_status                                |
| veneno                       | skipped\_error\_types.sql                    | campaigns.veneno.skipped\_error\_types                                  |
| veneno                       | notification\_context.sql                    | campaigns.veneno.notification\_context                                  |
| veneno                       | replay\_skipped\_batches.sql                 | campaigns.veneno.replay\_skipped\_batches                               |
| veneno                       | rate\_limiting\_strategy.sql                 | campaigns.veneno.rate\_limiting\_strategy                               |
| veneno                       | legend\_label\_category\_mapping.sql         | campaigns.veneno.legend\_label\_category\_mapping                       |
| veneno                       | social\_adset\_info.sql                      | campaigns.veneno.social\_adset\_info                                    |
| veneno                       | delivery\_status\_priority.sql               | campaigns.veneno.delivery\_status\_priority                             |
| veneno                       | aggregated\_summary\_report\_nsadmin.sql     | campaigns.veneno.aggregated\_summary\_report\_nsadmin                   |
| veneno                       | social\_coupon\_upload\_info.sql             | campaigns.veneno.social\_coupon\_upload\_info                           |
| veneno                       | reload\_sync\_details.sql                    | campaigns.veneno.reload\_sync\_details                                  |
| veneno                       | summary\_report\_veneno.sql                  | campaigns.veneno.summary\_report\_veneno                                |
| veneno                       | campaign\_config\_keys.sql                   | campaigns.veneno.campaign\_config\_keys                                 |
| veneno                       | rate\_limiting\_stats.sql                    | campaigns.veneno.rate\_limiting\_stats                                  |
| veneno                       | legend\_labels.sql                           | campaigns.veneno.legend\_labels                                         |
| veneno                       | aggregation\_details.sql                     | campaigns.veneno.aggregation\_details                                   |
| veneno                       | veneno\_service\_configs.sql                 | campaigns.veneno.veneno\_service\_configs                               |
| veneno                       | summary\_report\_nsadmin.sql                 | campaigns.veneno.summary\_report\_nsadmin                               |
| veneno                       | pre\_execution\_job\_status.sql              | campaigns.veneno.pre\_execution\_job\_status                            |
| veneno                       | delivery\_status.sql                         | campaigns.veneno.delivery\_status                                       |
| veneno                       | status\_type\_legends.sql                    | campaigns.veneno.status\_type\_legends                                  |
| veneno                       | service\_details.sql                         | campaigns.veneno.service\_details                                       |
| veneno                       | veneno\_batch\_details.sql                   | campaigns.veneno.veneno\_batch\_details                                 |
| veneno                       | campaign\_replay\_stats.sql                  | campaigns.veneno.campaign\_replay\_stats                                |
| veneno                       | user\_actions\_run.sql                       | campaigns.veneno.user\_actions\_run                                     |
| veneno                       | communication\_details\_dlr\_update\_log.sql | campaigns.veneno.communication\_details\_dlr\_update\_log               |
| veneno                       | sms\_link\_track\_org\_status.sql            | campaigns.veneno.sms\_link\_track\_org\_status                          |
| veneno                       | pre\_execution\_msg\_status.sql              | campaigns.veneno.pre\_execution\_msg\_status                            |
| veneno                       | campaign\_config\_values.sql                 | campaigns.veneno.campaign\_config\_values                               |
| veneno                       | social\_audience\_list.sql                   | campaigns.veneno.social\_audience\_list                                 |
| veneno                       | xengage\_adchannels\_delivery\_details.sql   | campaigns.veneno.xengage\_adchannels\_delivery\_details                 |
| veneno                       | social\_message\_info.sql                    | campaigns.veneno.social\_message\_info                                  |
| veneno                       | social\_offer\_info.sql                      | campaigns.veneno.social\_offer\_info                                    |
| veneno                       | communication\_details.sql                   | campaigns.veneno.communication\_details                                 |
| migration                    | migration\_run.sql                           | campaigns.migration.migration\_run                                      |
| migration                    | migration\_run\_statistics.sql               | campaigns.migration.migration\_run\_statistics                          |
| campaign\_meta\_details      | reachability\_channel\_types.sql             | campaigns.campaign\_meta\_details.reachability\_channel\_types          |
| campaign\_meta\_details      | group\_custom\_tags.sql                      | campaigns.campaign\_meta\_details.group\_custom\_tags                   |
| campaign\_meta\_details      | reloadable\_group.sql                        | campaigns.campaign\_meta\_details.reloadable\_group                     |
| campaign\_meta\_details      | reachability\_job\_details.sql               | campaigns.campaign\_meta\_details.reachability\_job\_details            |
| campaign\_meta\_details      | group\_details.sql                           | campaigns.campaign\_meta\_details.group\_details                        |
| campaign\_meta\_details      | reachability\_batch\_details.sql             | campaigns.campaign\_meta\_details.reachability\_batch\_details          |
| campaign\_meta\_details      | shard\_details.sql                           | campaigns.campaign\_meta\_details.shard\_details                        |
| campaign\_meta\_details      | reload\_sync\_details.sql                    | campaigns.campaign\_meta\_details.reload\_sync\_details                 |
| campaign\_meta\_details      | group\_reload\_log.sql                       | campaigns.campaign\_meta\_details.group\_reload\_log                    |
| campaign\_meta\_details      | reachability\_status\_mapping.sql            | campaigns.campaign\_meta\_details.reachability\_status\_mapping         |
| campaign\_meta\_details      | audience\_v2\_org\_status.sql                | campaigns.campaign\_meta\_details.audience\_v2\_org\_status             |
| campaign\_meta\_details      | bucket\_details.sql                          | campaigns.campaign\_meta\_details.bucket\_details                       |
| campaign\_meta\_details      | group\_version\_details.sql                  | campaigns.campaign\_meta\_details.group\_version\_details               |
| campaign\_meta\_details      | campaign\_audience\_export\_job.sql          | campaigns.campaign\_meta\_details.campaign\_audience\_export\_job       |
| campaign\_meta\_details      | create\_audience\_job\_logs.sql              | campaigns.campaign\_meta\_details.create\_audience\_job\_logs           |
| campaign\_meta\_details      | reachability\_summary\_report.sql            | campaigns.campaign\_meta\_details.reachability\_summary\_report         |
| campaign\_meta\_details      | create\_audience\_job.sql                    | campaigns.campaign\_meta\_details.create\_audience\_job                 |
| campaign\_meta\_details      | reachability\_category\_labels.sql           | campaigns.campaign\_meta\_details.reachability\_category\_labels        |
| campaign\_meta\_details      | campaign\_hash\_lookup.sql                   | campaigns.campaign\_meta\_details.campaign\_hash\_lookup                |
| campaign\_meta\_details      | group\_event\_subscription.sql               | campaigns.campaign\_meta\_details.group\_event\_subscription            |

<br />

## Table: `dummy_table`

| Column Name | Data Type | Index |
| ----------- | --------- | ----- |
| id          | int(11)   | None  |

## Table: `inbox_drafts`

| Column Name     | Data Type                           | Index                              |
| --------------- | ----------------------------------- | ---------------------------------- |
| id              | int(11)                             | Part of PRIMARY KEY (id)           |
| org\_id         | int(11)                             | None                               |
| msg\_state      | enum('OPENED','PICKED','DELIVERED') | Part of UNIQUE KEY (msg\_state)    |
| message\_id     | int(11)                             | Part of UNIQUE KEY (message\_id)   |
| recipient\_id   | int(11)                             | Part of UNIQUE KEY (recipient\_id) |
| created\_time   | datetime                            | None                               |
| retrieved\_time | datetime                            | None                               |
| resolved\_tags  | mediumtext                          | None                               |
| target\_value   | varchar(255)                        | None                               |
| is\_deleted     | tinyint(4)                          | None                               |

## Table: `control_group_users_history`

| Column Name         | Data Type  | Index                             |
| ------------------- | ---------- | --------------------------------- |
| id                  | bigint(20) | Part of PRIMARY KEY (id)          |
| user\_id            | int(11)    | Part of UNIQUE KEY (user\_id)     |
| org\_id             | int(11)    | Part of KEY (org\_id)             |
| group\_id           | int(11)    | None                              |
| campaign\_id        | int(11)    | Part of KEY (campaign\_id)        |
| message\_id         | int(11)    | Part of KEY (message\_id)         |
| created\_time       | timestamp  | None                              |
| last\_updated\_time | timestamp  | Part of KEY (last\_updated\_time) |

## Table: `simple_property_meta`

| Column Name        | Data Type                                               | Index                            |
| ------------------ | ------------------------------------------------------- | -------------------------------- |
| id                 | int(11)                                                 | Part of PRIMARY KEY (id)         |
| property\_name     | mediumtext                                              | None                             |
| data\_type         | enum('STRING','BOOLEAN','INTEGER','DATE','REAL','ENUM') | None                             |
| is\_mandatory      | tinyint(1)                                              | None                             |
| default\_value     | mediumtext                                              | None                             |
| allowed\_values    | mediumtext                                              | None                             |
| is\_multi\_select  | tinyint(1)                                              | None                             |
| action\_meta\_id   | int(11)                                                 | None                             |
| auto\_update\_time | timestamp                                               | Part of KEY (auto\_update\_time) |

## Table: `sharding_config`

| Column Name        | Data Type                          | Index                                  |
| ------------------ | ---------------------------------- | -------------------------------------- |
| id                 | int(11)                            | Part of PRIMARY KEY (id)               |
| org\_id            | int(11)                            | Part of UNIQUE KEY (org\_id)           |
| org\_config\_id    | int(11)                            | Part of UNIQUE KEY (org\_config\_id)   |
| org\_config\_name  | varchar(100)                       | Part of UNIQUE KEY (org\_config\_name) |
| campaign\_id       | int(11)                            | None                                   |
| status             | enum('ACTIVE','INACTIVE','PAUSED') | Part of KEY (status)                   |
| database\_name     | varchar(100)                       | None                                   |
| shard\_id          | int(11)                            | None                                   |
| auto\_update\_time | timestamp                          | Part of KEY (auto\_update\_time)       |

## Table: `rule_action_info`

| Column Name            | Data Type  | Index                                |
| ---------------------- | ---------- | ------------------------------------ |
| id                     | int(11)    | Part of PRIMARY KEY (id)             |
| name                   | mediumtext | None                                 |
| class                  | mediumtext | None                                 |
| description            | mediumtext | None                                 |
| case\_action\_list\_id | int(11)    | Part of KEY (case\_action\_list\_id) |
| auto\_update\_time     | timestamp  | Part of KEY (auto\_update\_time)     |

## Table: `rule_case_action_list`

| Column Name        | Data Type  | Index                            |
| ------------------ | ---------- | -------------------------------- |
| id                 | int(11)    | Part of PRIMARY KEY (id)         |
| org\_id            | int(11)    | Part of KEY (org\_id)            |
| rule\_id           | int(11)    | Part of KEY (rule\_id)           |
| case\_id           | int(11)    | None                             |
| value              | mediumtext | None                             |
| auto\_update\_time | timestamp  | Part of KEY (auto\_update\_time) |

## Table: `rule_info`

| Column Name        | Data Type    | Index                            |
| ------------------ | ------------ | -------------------------------- |
| id                 | int(11)      | Part of PRIMARY KEY (id)         |
| org\_id            | int(11)      | Part of KEY (org\_id)            |
| ruleset\_id        | int(11)      | Part of KEY (ruleset\_id)        |
| name               | varchar(100) | None                             |
| description        | mediumtext   | None                             |
| expression         | mediumtext   | None                             |
| expression\_json   | longtext     | None                             |
| sequence\_id       | int(11)      | None                             |
| is\_active         | tinyint(1)   | None                             |
| start\_date        | datetime     | None                             |
| end\_date          | datetime     | None                             |
| created\_by        | int(11)      | None                             |
| created\_on        | datetime     | None                             |
| last\_modified     | datetime     | None                             |
| last\_modified\_by | int(11)      | None                             |
| auto\_update\_time | timestamp    | Part of KEY (auto\_update\_time) |

## Table: `simple_property_info`

| Column Name        | Data Type  | Index                            |
| ------------------ | ---------- | -------------------------------- |
| id                 | int(11)    | Part of PRIMARY KEY (id)         |
| action\_info\_id   | int(11)    | Part of KEY (action\_info\_id)   |
| property\_key      | mediumtext | None                             |
| property\_value    | mediumtext | None                             |
| initialized        | tinyint(1) | None                             |
| auto\_update\_time | timestamp  | Part of KEY (auto\_update\_time) |

## Table: `org_config_ruleset_mapping`

| Column Name        | Data Type | Index                            |
| ------------------ | --------- | -------------------------------- |
| id                 | int(11)   | Part of PRIMARY KEY (id)         |
| org\_id            | int(11)   | Part of KEY (org\_id)            |
| org\_config\_id    | int(11)   | Part of KEY (org\_config\_id)    |
| ruleset\_info\_id  | int(11)   | None                             |
| last\_modified\_on | datetime  | None                             |
| auto\_update\_time | timestamp | Part of KEY (auto\_update\_time) |

## Table: `ruleset_info`

| Column Name        | Data Type    | Index                            |
| ------------------ | ------------ | -------------------------------- |
| id                 | int(11)      | Part of PRIMARY KEY (id)         |
| org\_id            | int(11)      | Part of KEY (org\_id)            |
| context\_id        | bigint(20)   | None                             |
| context\_type      | varchar(50)  | None                             |
| name               | varchar(256) | None                             |
| description        | mediumtext   | None                             |
| start\_date        | datetime     | None                             |
| end\_date          | datetime     | None                             |
| is\_active         | tinyint(1)   | None                             |
| created\_by        | int(11)      | None                             |
| created\_on        | datetime     | None                             |
| last\_modified     | datetime     | None                             |
| last\_modified\_by | int(11)      | None                             |
| auto\_update\_time | timestamp    | Part of KEY (auto\_update\_time) |

## Table: `action_meta`

| Column Name        | Data Type    | Index                            |
| ------------------ | ------------ | -------------------------------- |
| id                 | int(11)      | Part of PRIMARY KEY (id)         |
| name               | varchar(20)  | None                             |
| action\_class      | varchar(100) | None                             |
| auto\_update\_time | timestamp    | Part of KEY (auto\_update\_time) |

## Table: `shard_details`

| Column Name    | Data Type            | Index                    |
| -------------- | -------------------- | ------------------------ |
| id             | int(11)              | Part of PRIMARY KEY (id) |
| permission     | enum('READ','WRITE') | None                     |
| database\_name | varchar(255)         | None                     |
| description    | varchar(255)         | None                     |
| service\_name  | varchar(255)         | None                     |
| created\_on    | datetime             | None                     |

## Table: `bucket_details`

| Column Name                | Data Type    | Index                    |
| -------------------------- | ------------ | ------------------------ |
| id                         | int(11)      | Part of PRIMARY KEY (id) |
| shard\_id                  | int(11)      | None                     |
| bucket\_name               | varchar(100) | None                     |
| hit\_rate                  | int(11)      | None                     |
| rows\_count                | int(11)      | None                     |
| last\_visited\_on          | date         | None                     |
| has\_sub\_delivery\_status | tinyint(1)   | None                     |

## Table: `IF`

| Column Name | Data Type    | Index                     |
| ----------- | ------------ | ------------------------- |
| id          | int(11)      | Part of UNIQUE KEY (id)   |
| uuId        | varchar(250) | Part of UNIQUE KEY (uuId) |
| is\_active  | int(1)       | None                      |

## Table: `IF`

| Column Name         | Data Type    | Index                            |
| ------------------- | ------------ | -------------------------------- |
| id                  | int(11)      | Part of PRIMARY KEY (id)         |
| name                | varchar(100) | Part of KEY (name)               |
| user\_defined\_name | varchar(100) | None                             |
| description         | varchar(255) | None                             |
| org\_id             | int(11)      | Part of KEY (org\_id)            |
| org\_config\_id     | int(11)      | Part of KEY (org\_config\_id)    |
| auto\_update\_time  | timestamp    | Part of KEY (auto\_update\_time) |

## Table: `IF`

| Column Name        | Data Type | Index                            |
| ------------------ | --------- | -------------------------------- |
| id                 | int(11)   | Part of PRIMARY KEY (id)         |
| scope\_id          | int(11)   | Part of KEY (scope\_id)          |
| event\_id          | int(11)   | Part of KEY (event\_id)          |
| milestone\_id      | int(11)   | Part of KEY (milestone\_id)      |
| org\_id            | int(11)   | Part of KEY (org\_id)            |
| org\_config\_id    | int(11)   | Part of KEY (org\_config\_id)    |
| auto\_update\_time | timestamp | Part of KEY (auto\_update\_time) |

## Table: `IF`

| Column Name        | Data Type    | Index                            |
| ------------------ | ------------ | -------------------------------- |
| id                 | int(11)      | Part of PRIMARY KEY (id)         |
| source             | varchar(25)  | Part of KEY (source)             |
| status             | varchar(50)  | Part of KEY (status)             |
| state              | varchar(255) | None                             |
| execution\_time    | datetime     | Part of KEY (execution\_time)    |
| milestone\_id      | int(11)      | Part of KEY (milestone\_id)      |
| phase\_id          | int(11)      | Part of KEY (phase\_id)          |
| timeline\_id       | int(11)      | Part of KEY (timeline\_id)       |
| user\_id           | int(11)      | Part of KEY (user\_id)           |
| org\_id            | int(11)      | Part of KEY (org\_id)            |
| org\_config\_id    | int(11)      | Part of KEY (org\_config\_id)    |
| auto\_update\_time | timestamp    | Part of KEY (auto\_update\_time) |

## Table: `IF`

| Column Name        | Data Type   | Index                                |
| ------------------ | ----------- | ------------------------------------ |
| id                 | int(11)     | Part of PRIMARY KEY (id)             |
| skip\_level\_id    | int(11)     | Part of UNIQUE KEY (skip\_level\_id) |
| skip\_level\_type  | varchar(50) | Part of KEY (skip\_level\_type)      |
| org\_id            | int(11)     | Part of KEY (org\_id)                |
| org\_config\_id    | int(11)     | Part of KEY (org\_config\_id)        |
| auto\_update\_time | timestamp   | Part of KEY (auto\_update\_time)     |

## Table: `IF`

| Column Name                     | Data Type    | Index                            |
| ------------------------------- | ------------ | -------------------------------- |
| id                              | bigint(20)   | Part of PRIMARY KEY (id)         |
| msg\_id                         | int(11)      | Part of KEY (msg\_id)            |
| msg\_type                       | varchar(10)  | None                             |
| batch\_id                       | varchar(100) | None                             |
| group\_id                       | bigint(20)   | Part of KEY (group\_id)          |
| org\_id                         | int(11)      | None                             |
| org\_config\_id                 | int(11)      | None                             |
| user\_id                        | bigint(20)   | Part of KEY (user\_id)           |
| status                          | varchar(50)  | Part of KEY (status)             |
| activity\_context\_history\_id  | bigint(20)   | None                             |
| current\_milestone\_context\_id | bigint(20)   | None                             |
| auto\_update\_time              | timestamp    | Part of KEY (auto\_update\_time) |

## Table: `IF`

| Column Name              | Data Type    | Index                            |
| ------------------------ | ------------ | -------------------------------- |
| id                       | int(11)      | Part of PRIMARY KEY (id)         |
| name                     | varchar(100) | Part of UNIQUE KEY (name)        |
| user\_defined\_name      | varchar(100) | None                             |
| description              | varchar(255) | None                             |
| idx                      | int(11)      | None                             |
| phase\_changer\_ruleset  | varchar(100) | None                             |
| state\_analyzer\_ruleset | varchar(100) | None                             |
| org\_id                  | int(11)      | Part of KEY (org\_id)            |
| org\_config\_id          | int(11)      | Part of KEY (org\_config\_id)    |
| timeline\_id             | int(11)      | Part of KEY (timeline\_id)       |
| auto\_update\_time       | timestamp    | Part of KEY (auto\_update\_time) |

## Table: `IF`

| Column Name                     | Data Type    | Index                                         |
| ------------------------------- | ------------ | --------------------------------------------- |
| id                              | bigint(20)   | Part of PRIMARY KEY (id)                      |
| name                            | varchar(100) | Part of KEY (name)                            |
| status\_context                 | varchar(255) | None                                          |
| activity\_type                  | varchar(25)  | Part of KEY (activity\_type)                  |
| status                          | varchar(50)  | Part of KEY (status)                          |
| execution\_time                 | datetime     | None                                          |
| milestone\_id                   | int(11)      | Part of KEY (milestone\_id)                   |
| phase\_id                       | int(11)      | Part of KEY (phase\_id)                       |
| timeline\_id                    | int(11)      | Part of KEY (timeline\_id)                    |
| user\_id                        | int(11)      | Part of KEY (user\_id)                        |
| org\_id                         | int(11)      | Part of KEY (org\_id)                         |
| org\_config\_id                 | int(11)      | Part of KEY (org\_config\_id)                 |
| milestone\_context\_history\_id | bigint(20)   | Part of KEY (milestone\_context\_history\_id) |
| auto\_update\_time              | timestamp    | Part of KEY (auto\_update\_time)              |

## Table: `IF`

| Column Name        | Data Type    | Index                              |
| ------------------ | ------------ | ---------------------------------- |
| id                 | int(11)      | Part of PRIMARY KEY (id)           |
| org\_id            | int(11)      | Part of KEY (org\_id)              |
| org\_config\_id    | int(11)      | Part of KEY (org\_config\_id)      |
| start\_minute      | int(4)       | Part of UNIQUE KEY (start\_minute) |
| end\_minute        | int(4)       | Part of UNIQUE KEY (end\_minute)   |
| scope              | varchar(100) | Part of KEY (scope)                |
| weight             | int(3)       | None                               |
| auto\_update\_time | timestamp    | Part of KEY (auto\_update\_time)   |

## Table: `IF`

| Column Name              | Data Type    | Index                            |
| ------------------------ | ------------ | -------------------------------- |
| id                       | int(11)      | Part of PRIMARY KEY (id)         |
| name                     | varchar(100) | Part of KEY (name)               |
| user\_defined\_name      | varchar(100) | None                             |
| state\_timeline\_mapping | longtext     | None                             |
| user\_init\_ruleset      | varchar(100) | None                             |
| org\_id                  | int(11)      | Part of KEY (org\_id)            |
| auto\_update\_time       | timestamp    | Part of KEY (auto\_update\_time) |

## Table: `IF`

| Column Name        | Data Type                       | Index                                |
| ------------------ | ------------------------------- | ------------------------------------ |
| id                 | int(11)                         | Part of PRIMARY KEY (id)             |
| name               | varchar(255)                    | Part of KEY (name)                   |
| send\_pref         | enum('SEND\_FIRST','SEND\_ALL') | None                                 |
| org\_id            | int(11)                         | Part of UNIQUE KEY (org\_id)         |
| org\_config\_id    | int(11)                         | Part of UNIQUE KEY (org\_config\_id) |
| auto\_update\_time | timestamp                       | Part of KEY (auto\_update\_time)     |

## Table: `IF`

| Column Name                    | Data Type    | Index                                        |
| ------------------------------ | ------------ | -------------------------------------------- |
| id                             | bigint(20)   | Part of PRIMARY KEY (id)                     |
| name                           | varchar(100) | Part of KEY (name)                           |
| val                            | longtext     | None                                         |
| org\_id                        | int(11)      | Part of KEY (org\_id)                        |
| org\_config\_id                | int(11)      | Part of KEY (org\_config\_id)                |
| activity\_context\_history\_id | bigint(20)   | Part of KEY (activity\_context\_history\_id) |
| auto\_update\_time             | timestamp    | Part of KEY (auto\_update\_time)             |

## Table: `IF`

| Column Name        | Data Type    | Index                            |
| ------------------ | ------------ | -------------------------------- |
| type               | varchar(100) | Part of PRIMARY KEY (type)       |
| description        | varchar(250) | None                             |
| auto\_update\_time | timestamp    | Part of KEY (auto\_update\_time) |

## Table: `IF`

| Column Name        | Data Type    | Index                                |
| ------------------ | ------------ | ------------------------------------ |
| id                 | int(11)      | Part of PRIMARY KEY (id)             |
| idx                | int(11)      | None                                 |
| template           | varchar(255) | None                                 |
| filter\_id         | int(11)      | Part of KEY (filter\_id)             |
| offer\_id          | int(11)      | Part of KEY (offer\_id)              |
| org\_id            | int(11)      | Part of UNIQUE KEY (org\_id)         |
| org\_config\_id    | int(11)      | Part of UNIQUE KEY (org\_config\_id) |
| auto\_update\_time | timestamp    | Part of KEY (auto\_update\_time)     |

## Table: `IF`

| Column Name        | Data Type    | Index                                |
| ------------------ | ------------ | ------------------------------------ |
| id                 | int(11)      | Part of PRIMARY KEY (id)             |
| name               | varchar(255) | Part of KEY (name)                   |
| type               | varchar(50)  | None                                 |
| value              | longtext     | None                                 |
| org\_id            | int(11)      | Part of UNIQUE KEY (org\_id)         |
| org\_config\_id    | int(11)      | Part of UNIQUE KEY (org\_config\_id) |
| auto\_update\_time | timestamp    | Part of KEY (auto\_update\_time)     |

## Table: `IF`

| Column Name        | Data Type    | Index                            |
| ------------------ | ------------ | -------------------------------- |
| id                 | int(11)      | Part of PRIMARY KEY (id)         |
| name               | varchar(100) | Part of KEY (name)               |
| org\_id            | int(11)      | Part of KEY (org\_id)            |
| org\_config\_id    | int(11)      | Part of KEY (org\_config\_id)    |
| auto\_update\_time | timestamp    | Part of KEY (auto\_update\_time) |

## Table: `IF`

| Column Name         | Data Type    | Index                            |
| ------------------- | ------------ | -------------------------------- |
| id                  | int(11)      | Part of PRIMARY KEY (id)         |
| name                | varchar(100) | Part of KEY (name)               |
| user\_defined\_name | varchar(100) | None                             |
| description         | varchar(255) | None                             |
| idx                 | int(11)      | None                             |
| starting\_ruleset   | varchar(100) | None                             |
| org\_id             | int(11)      | Part of KEY (org\_id)            |
| org\_config\_id     | int(11)      | Part of KEY (org\_config\_id)    |
| phase\_id           | int(11)      | Part of KEY (phase\_id)          |
| auto\_update\_time  | timestamp    | Part of KEY (auto\_update\_time) |

## Table: `IF`

| Column Name        | Data Type    | Index                            |
| ------------------ | ------------ | -------------------------------- |
| id                 | bigint(20)   | Part of PRIMARY KEY (id)         |
| source             | varchar(25)  | Part of KEY (source)             |
| status             | varchar(50)  | Part of KEY (status)             |
| state              | varchar(255) | None                             |
| execution\_time    | datetime     | None                             |
| milestone\_id      | int(11)      | Part of KEY (milestone\_id)      |
| phase\_id          | int(11)      | Part of KEY (phase\_id)          |
| timeline\_id       | int(11)      | Part of KEY (timeline\_id)       |
| user\_id           | int(11)      | Part of KEY (user\_id)           |
| org\_id            | int(11)      | Part of KEY (org\_id)            |
| org\_config\_id    | int(11)      | Part of KEY (org\_config\_id)    |
| auto\_update\_time | timestamp    | Part of KEY (auto\_update\_time) |

## Table: `IF`

| Column Name        | Data Type    | Index                            |
| ------------------ | ------------ | -------------------------------- |
| id                 | int(11)      | Part of PRIMARY KEY (id)         |
| name               | varchar(100) | Part of KEY (name)               |
| description        | varchar(255) | None                             |
| org\_id            | int(11)      | Part of KEY (org\_id)            |
| org\_config\_id    | int(11)      | Part of KEY (org\_config\_id)    |
| auto\_update\_time | timestamp    | Part of KEY (auto\_update\_time) |

## Table: `IF`

| Column Name        | Data Type    | Index                                |
| ------------------ | ------------ | ------------------------------------ |
| id                 | int(11)      | Part of PRIMARY KEY (id)             |
| idx                | int(11)      | None                                 |
| sub\_template      | varchar(255) | None                                 |
| body\_template     | longtext     | None                                 |
| filter\_id         | int(11)      | Part of KEY (filter\_id)             |
| offer\_id          | int(11)      | Part of KEY (offer\_id)              |
| org\_id            | int(11)      | Part of UNIQUE KEY (org\_id)         |
| org\_config\_id    | int(11)      | Part of UNIQUE KEY (org\_config\_id) |
| auto\_update\_time | timestamp    | Part of KEY (auto\_update\_time)     |

## Table: `IF`

| Column Name        | Data Type    | Index                            |
| ------------------ | ------------ | -------------------------------- |
| id                 | int(11)      | Part of PRIMARY KEY (id)         |
| name               | varchar(100) | Part of KEY (name)               |
| description        | varchar(255) | None                             |
| grp                | varchar(50)  | None                             |
| scope\_type        | varchar(25)  | Part of KEY (scope\_type)        |
| category\_id       | int(11)      | Part of KEY (category\_id)       |
| org\_id            | int(11)      | Part of KEY (org\_id)            |
| org\_config\_id    | int(11)      | Part of KEY (org\_config\_id)    |
| auto\_update\_time | timestamp    | Part of KEY (auto\_update\_time) |

## Table: `IF`

| Column Name        | Data Type    | Index                            |
| ------------------ | ------------ | -------------------------------- |
| id                 | int(11)      | Part of PRIMARY KEY (id)         |
| org\_id            | int(11)      | Part of UNIQUE KEY (org\_id)     |
| org\_config\_id    | int(11)      | Part of KEY (org\_config\_id)    |
| prop\_name         | varchar(100) | Part of UNIQUE KEY (prop\_name)  |
| prop\_value        | text         | None                             |
| auto\_update\_time | timestamp    | Part of KEY (auto\_update\_time) |

## Table: `IF`

| Column Name        | Data Type    | Index                            |
| ------------------ | ------------ | -------------------------------- |
| id                 | int(11)      | Part of PRIMARY KEY (id)         |
| prop\_name         | varchar(100) | Part of UNIQUE KEY (prop\_name)  |
| prop\_value        | varchar(255) | None                             |
| org\_id            | int(11)      | Part of KEY (org\_id)            |
| org\_config\_id    | int(11)      | Part of KEY (org\_config\_id)    |
| timeline\_id       | int(11)      | Part of KEY (timeline\_id)       |
| auto\_update\_time | timestamp    | Part of KEY (auto\_update\_time) |

## Table: `IF`

| Column Name           | Data Type    | Index                                      |
| --------------------- | ------------ | ------------------------------------------ |
| activity\_context\_id | bigint(20)   | Part of UNIQUE KEY (activity\_context\_id) |
| status\_context       | varchar(100) | None                                       |
| status                | varchar(10)  | None                                       |
| auto\_update\_time    | timestamp    | Part of KEY (auto\_update\_time)           |

## Table: `IF`

| Column Name        | Data Type    | Index                            |
| ------------------ | ------------ | -------------------------------- |
| id                 | int(11)      | Part of PRIMARY KEY (id)         |
| user\_id           | int(11)      | Part of KEY (user\_id)           |
| user\_init\_time   | datetime     | None                             |
| timeline\_id       | int(11)      | Part of KEY (timeline\_id)       |
| state              | varchar(255) | None                             |
| org\_id            | int(11)      | None                             |
| org\_config\_id    | int(11)      | None                             |
| auto\_update\_time | timestamp    | Part of KEY (auto\_update\_time) |

## Table: `dummy_data_details`

| Column Name | Data Type | Index |
| ----------- | --------- | ----- |
| id          | int(11)   | None  |

## Table: `recipient_social_list_map`

| Column Name                | Data Type | Index                                           |
| -------------------------- | --------- | ----------------------------------------------- |
| id                         | int(11)   | Part of PRIMARY KEY (id)                        |
| recipient\_list\_id        | int(11)   | Part of UNIQUE KEY (recipient\_list\_id)        |
| social\_audience\_list\_id | int(11)   | Part of UNIQUE KEY (social\_audience\_list\_id) |

## Table: `veneno_service_monitor_status`

| Column Name      | Data Type                                                                                                                | Index                                 |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------- |
| message\_id      | int(11)                                                                                                                  | Part of UNIQUE KEY (message\_id)      |
| message\_version | int(11)                                                                                                                  | Part of UNIQUE KEY (message\_version) |
| status           | enum('STUCK\_AT\_VENENO','STUCK\_AT\_NSADMIN','SKIPPED\_AT\_VENENO','FAILED\_AT\_NSADMIN','FAILED\_AT\_SOCIAL\_GATEWAY') | Part of UNIQUE KEY (status)           |
| org\_id          | int(11)                                                                                                                  | None                                  |
| auto\_updated    | timestamp                                                                                                                | None                                  |

## Table: `variant_execution_status`

| Column Name          | Data Type                                                                                 | Index                              |
| -------------------- | ----------------------------------------------------------------------------------------- | ---------------------------------- |
| id                   | int(11)                                                                                   | Part of PRIMARY KEY (id)           |
| org\_id              | int(11)                                                                                   | Part of KEY (org\_id)              |
| campaign\_id         | int(11)                                                                                   | Part of KEY (campaign\_id)         |
| message\_id          | varchar(30)                                                                               | None                               |
| message\_variant\_id | varchar(30)                                                                               | Part of KEY (message\_variant\_id) |
| message\_queue\_id   | int(11)                                                                                   | None                               |
| status               | enum('OPEN','PROCESSING','SUBMITTED','TEMPORARY\_FAILURE','SUCCESS','PERMANENT\_FAILURE') | None                               |
| start\_date          | datetime                                                                                  | None                               |
| end\_date            | datetime                                                                                  | None                               |
| auto\_update\_time   | timestamp                                                                                 | None                               |

## Table: `precheck_errors_types`

| Column Name     | Data Type                  | Index                    |
| --------------- | -------------------------- | ------------------------ |
| id              | int(11)                    | Part of PRIMARY KEY (id) |
| error\_code     | varchar(250)               | None                     |
| error\_type     | enum('PERMANENT\_FAILURE', | None                     |
| error\_message  | varchar(250)               | None                     |
| action\_message | varchar(250)               | None                     |

## Table: `veneno_monitor_status`

| Column Name       | Data Type  | Index                                 |
| ----------------- | ---------- | ------------------------------------- |
| message\_id       | int(11)    | Part of UNIQUE KEY (message\_id)      |
| message\_version  | int(11)    | Part of UNIQUE KEY (message\_version) |
| processed\_status | tinyint(1) | None                                  |
| service\_status   | tinyint(1) | None                                  |
| last\_updated     | datetime   | None                                  |

## Table: `skipped_error_types`

| Column Name    | Data Type    | Index                    |
| -------------- | ------------ | ------------------------ |
| id             | int(11)      | Part of PRIMARY KEY (id) |
| error\_type    | varchar(100) | None                     |
| description    | varchar(250) | None                     |
| actionMessage  | varchar(250) | None                     |
| is\_replayable | tinyint(1)   | None                     |

## Table: `notification_context`

| Column Name                | Data Type                                                                                                                                | Index                      |
| -------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| id                         | int(11)                                                                                                                                  | Part of PRIMARY KEY (id)   |
| org\_id                    | int(11)                                                                                                                                  | Part of KEY (org\_id)      |
| campaign\_id               | int(11)                                                                                                                                  | Part of KEY (campaign\_id) |
| message\_id                | varchar(30)                                                                                                                              | Part of KEY (message\_id)  |
| message\_variant\_id       | varchar(30)                                                                                                                              | None                       |
| communication\_details\_id | int(11)                                                                                                                                  | None                       |
| notification\_type         | enum('PRECHECK','POSTPONE','FAILURE','SUCCESS','MESSAGE\_APPROVAL','MESSAGE\_PROCESSING\_ERROR','MESSAGE\_APPROVED','MESSAGE\_DELIVERY') | None                       |
| execution\_stage           | enum('REMIND','EXECUTE','POST\_EXECUTE','PRE\_REMIND')                                                                                   | None                       |
| status                     | enum('OPEN','PROCESSING','CLOSED','ERROR')                                                                                               | None                       |
| created\_date              | datetime                                                                                                                                 | None                       |
| auto\_update\_time         | timestamp                                                                                                                                | None                       |

## Table: `replay_skipped_batches`

| Column Name        | Data Type    | Index                          |
| ------------------ | ------------ | ------------------------------ |
| id                 | int(11)      | Part of PRIMARY KEY (id)       |
| org\_id            | int(11)      | Part of KEY (org\_id)          |
| message\_id        | int(11)      | Part of KEY (message\_id)      |
| message\_version   | int(11)      | Part of KEY (message\_version) |
| batch\_id          | varchar(250) | Part of KEY (batch\_id)        |
| s3\_key            | varchar(250) | None                           |
| auto\_update\_time | timestamp    | None                           |

## Table: `rate_limiting_strategy`

| Column Name        | Data Type                        | Index                        |
| ------------------ | -------------------------------- | ---------------------------- |
| id                 | int(11)                          | Part of PRIMARY KEY (id)     |
| org\_id            | int(11)                          | Part of UNIQUE KEY (org\_id) |
| window             | enum('DAILY','WEEKLY','MONTHLY') | Part of UNIQUE KEY (window)  |
| channel            | varchar(20)                      | Part of UNIQUE KEY (channel) |
| limit              | int(11)                          | None                         |
| is\_active         | tinyint(1)                       | None                         |
| last\_updated\_by  | int(11)                          | None                         |
| auto\_update\_time | timestamp                        | None                         |

## Table: `legend_label_category_mapping`

| Column Name            | Data Type | Index                    |
| ---------------------- | --------- | ------------------------ |
| id                     | int(11)   | Part of PRIMARY KEY (id) |
| legend\_label\_id      | int(11)   | None                     |
| sub\_legend\_label\_id | int(11)   | None                     |

## Table: `social_adset_info`

| Column Name          | Data Type    | Index                                 |
| -------------------- | ------------ | ------------------------------------- |
| id                   | int(11)      | Part of PRIMARY KEY (id)              |
| org\_id              | int(11)      | Part of UNIQUE KEY (org\_id)          |
| name                 | varchar(250) | None                                  |
| message\_id          | int(11)      | Part of UNIQUE KEY (message\_id)      |
| message\_version     | int(11)      | Part of UNIQUE KEY (message\_version) |
| remote\_adset\_id    | varchar(32)  | None                                  |
| remote\_campaign\_id | varchar(32)  | None                                  |
| remote\_offer\_id    | varchar(32)  | None                                  |
| custom\_audience\_id | varchar(32)  | None                                  |
| remote\_ad\_id       | varchar(32)  | None                                  |
| ad\_name             | varchar(250) | None                                  |
| auto\_update\_time   | timestamp    | Part of KEY (auto\_update\_time)      |

## Table: `delivery_status_priority`

| Column Name          | Data Type | Index                                     |
| -------------------- | --------- | ----------------------------------------- |
| id                   | int(11)   | Part of PRIMARY KEY (id)                  |
| delivery\_status\_id | int(11)   | Part of UNIQUE KEY (delivery\_status\_id) |
| priority             | int(11)   | None                                      |
| created\_on          | timestamp | None                                      |
| last\_updated\_on    | timestamp | None                                      |

## Table: `aggregated_summary_report_nsadmin`

| Column Name          | Data Type | Index                                     |
| -------------------- | --------- | ----------------------------------------- |
| id                   | int(11)   | Part of PRIMARY KEY (id)                  |
| org\_id              | int(11)   | Part of UNIQUE KEY (org\_id)              |
| msg\_id              | int(11)   | Part of UNIQUE KEY (msg\_id)              |
| delivery\_status\_id | int(11)   | Part of UNIQUE KEY (delivery\_status\_id) |
| count                | int(11)   | None                                      |
| last\_updated\_on    | timestamp | None                                      |

## Table: `social_coupon_upload_info`

| Column Name        | Data Type    | Index                                 |
| ------------------ | ------------ | ------------------------------------- |
| id                 | int(11)      | Part of PRIMARY KEY (id)              |
| org\_id            | int(11)      | Part of UNIQUE KEY (org\_id)          |
| message\_id        | int(11)      | Part of UNIQUE KEY (message\_id)      |
| message\_version   | int(11)      | Part of UNIQUE KEY (message\_version) |
| s3\_key            | varchar(250) | None                                  |
| auto\_update\_time | timestamp    | Part of KEY (auto\_update\_time)      |

## Table: `reload_sync_details`

| Column Name        | Data Type | Index                    |
| ------------------ | --------- | ------------------------ |
| id                 | int(11)   | Part of PRIMARY KEY (id) |
| org\_id            | int(11)   | Part of KEY (org\_id)    |
| sync\_time         | datetime  | None                     |
| reload\_time       | datetime  | None                     |
| created\_date      | datetime  | None                     |
| auto\_update\_time | timestamp | None                     |

## Table: `summary_report_veneno`

| Column Name       | Data Type    | Index                                 |
| ----------------- | ------------ | ------------------------------------- |
| id                | int(11)      | Part of PRIMARY KEY (id)              |
| org\_id           | int(11)      | Part of UNIQUE KEY (org\_id)          |
| msg\_id           | int(11)      | Part of UNIQUE KEY (msg\_id)          |
| message\_version  | int(11)      | Part of UNIQUE KEY (message\_version) |
| report\_type      | varchar(255) | Part of UNIQUE KEY (report\_type)     |
| sub\_type         | varchar(255) | Part of UNIQUE KEY (sub\_type)        |
| count             | int(11)      | None                                  |
| last\_updated\_on | timestamp    | None                                  |

## Table: `campaign_config_keys`

| Column Name        | Data Type    | Index                    |
| ------------------ | ------------ | ------------------------ |
| id                 | int(11)      | Part of PRIMARY KEY (id) |
| key                | varchar(20)  | None                     |
| default\_value     | varchar(256) | None                     |
| auto\_update\_time | timestamp    | None                     |

## Table: `rate_limiting_stats`

| Column Name        | Data Type | Index                             |
| ------------------ | --------- | --------------------------------- |
| id                 | int(11)   | Part of PRIMARY KEY (id)          |
| org\_id            | int(11)   | Part of UNIQUE KEY (org\_id)      |
| user\_id           | int(11)   | Part of UNIQUE KEY (user\_id)     |
| strategy\_id       | int(11)   | Part of UNIQUE KEY (strategy\_id) |
| window\_value      | int(11)   | None                              |
| no\_of\_attempts   | int(11)   | None                              |
| auto\_update\_time | timestamp | None                              |

## Table: `legend_labels`

| Column Name                     | Data Type    | Index                    |
| ------------------------------- | ------------ | ------------------------ |
| id                              | int(11)      | Part of PRIMARY KEY (id) |
| legend\_label                   | varchar(50)  | None                     |
| parent\_legend\_label\_ids\_csv | varchar(100) | None                     |
| last\_updated\_on               | timestamp    | None                     |

## Table: `aggregation_details`

| Column Name        | Data Type                                                                                                               | Index                            |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------- | -------------------------------- |
| id                 | int(11)                                                                                                                 | Part of PRIMARY KEY (id)         |
| org\_id            | int(11)                                                                                                                 | None                             |
| message\_id        | bigint(20)                                                                                                              | Part of UNIQUE KEY (message\_id) |
| batch\_start\_id   | int(11)                                                                                                                 | None                             |
| job\_type          | enum('COUPON\_REVOKE','LIST\_DELETE','COUPON\_ISSUED','LIST\_PUBLISHED','POST\_PROCESS','SOCIAL\_ADSET','AD\_CREATION') | Part of UNIQUE KEY (job\_type)   |
| job\_status        | enum('PROCESSING','DONE','ERROR')                                                                                       | None                             |
| retrial\_count     | int(11)                                                                                                                 | None                             |
| start\_time        | datetime                                                                                                                | None                             |
| auto\_update\_time | timestamp                                                                                                               | None                             |

## Table: `veneno_service_configs`

| Column Name        | Data Type   | Index                    |
| ------------------ | ----------- | ------------------------ |
| id                 | int(11)     | Part of PRIMARY KEY (id) |
| key                | varchar(20) | None                     |
| value              | int(11)     | None                     |
| is\_active         | tinyint(1)  | None                     |
| auto\_update\_time | timestamp   | None                     |

## Table: `summary_report_nsadmin`

| Column Name          | Data Type | Index                                     |
| -------------------- | --------- | ----------------------------------------- |
| id                   | int(11)   | Part of PRIMARY KEY (id)                  |
| org\_id              | int(11)   | None                                      |
| msg\_id              | int(11)   | Part of UNIQUE KEY (msg\_id)              |
| delivery\_status\_id | int(11)   | Part of UNIQUE KEY (delivery\_status\_id) |
| count                | int(11)   | None                                      |
| last\_updated\_on    | timestamp | None                                      |

## Table: `pre_execution_job_status`

| Column Name          | Data Type                                                                                                                                                                                                                                                                                | Index                              |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------- |
| id                   | int(11)                                                                                                                                                                                                                                                                                  | Part of PRIMARY KEY (id)           |
| org\_id              | int(11)                                                                                                                                                                                                                                                                                  | Part of KEY (org\_id)              |
| campaign\_id         | int(11)                                                                                                                                                                                                                                                                                  | Part of KEY (campaign\_id)         |
| message\_id          | varchar(30)                                                                                                                                                                                                                                                                              | Part of KEY (message\_id)          |
| message\_variant\_id | varchar(30)                                                                                                                                                                                                                                                                              | Part of KEY (message\_variant\_id) |
| job\_type            | enum('GROUP\_RELOAD\_NFS','GROUP\_RELOAD\_CREATE\_AUDIENCE','PRECHECK','COMMUNICATION\_DETAIL\_CREATION','BASIC\_REMIND\_CHECKS','RECURRING\_CHECKS','BASIC\_EXECUTE\_CHECKS','AUDIENCE\_LIST\_EXPORT','EXTERNAL\_TAGS\_CREATE\_JOB','EXTERNAL\_TAGS\_EXPORT','AUDIENCE\_GROUP\_RELOAD') | Part of KEY (job\_type)            |
| job\_status          | enum('OPEN','PROCESSING','SUBMITTED','TEMPORARY\_FAILURE','SUCCESS','PERMANENT\_FAILURE')                                                                                                                                                                                                | Part of KEY (job\_status)          |
| event\_type          | enum('REMIND','EXECUTE')                                                                                                                                                                                                                                                                 | Part of KEY (event\_type)          |
| error\_description   | varchar(512)                                                                                                                                                                                                                                                                             | None                               |
| params               | varchar(500)                                                                                                                                                                                                                                                                             | None                               |
| start\_date          | datetime                                                                                                                                                                                                                                                                                 | Part of KEY (start\_date)          |
| end\_date            | datetime                                                                                                                                                                                                                                                                                 | None                               |
| auto\_update\_time   | timestamp                                                                                                                                                                                                                                                                                | None                               |
| is\_valid            | tinyint(1)                                                                                                                                                                                                                                                                               | Part of KEY (is\_valid)            |

## Table: `delivery_status`

| Column Name | Data Type    | Index                    |
| ----------- | ------------ | ------------------------ |
| id          | int(11)      | Part of PRIMARY KEY (id) |
| status      | varchar(50)  | None                     |
| description | varchar(250) | None                     |

## Table: `status_type_legends`

| Column Name       | Data Type    | Index                    |
| ----------------- | ------------ | ------------------------ |
| id                | int(11)      | Part of PRIMARY KEY (id) |
| status\_type      | varchar(100) | None                     |
| status\_id        | int(11)      | None                     |
| status\_label     | varchar(100) | None                     |
| legend\_label     | int(11)      | None                     |
| category          | varchar(100) | None                     |
| last\_updated\_on | timestamp    | None                     |

## Table: `service_details`

| Column Name                | Data Type    | Index                                           |
| -------------------------- | ------------ | ----------------------------------------------- |
| id                         | int(11)      | Part of PRIMARY KEY (id)                        |
| org\_id                    | int(11)      | Part of UNIQUE KEY (org\_id)                    |
| communication\_message\_id | int(11)      | Part of UNIQUE KEY (communication\_message\_id) |
| message\_version           | int(11)      | Part of UNIQUE KEY (message\_version)           |
| batch\_type                | varchar(200) | Part of UNIQUE KEY (batch\_type)                |
| picked\_time               | datetime     | None                                            |
| processed\_count           | int(11)      | None                                            |
| batches\_processed         | int(11)      | None                                            |
| last\_updated\_on          | datetime     | None                                            |

## Table: `veneno_batch_details`

| Column Name       | Data Type                                                                                           | Index                            |
| ----------------- | --------------------------------------------------------------------------------------------------- | -------------------------------- |
| id                | int(11)                                                                                             | Part of PRIMARY KEY (id)         |
| batch\_type       | enum('FEEDER','TAG\_RESOLVER','DELIVERY\_SERVER','INBOX\_CONSUMER','NSADMIN\_SERVER','FB\_GATEWAY') | Part of UNIQUE KEY (batch\_type) |
| status            | enum('PROCESSING','CLOSED','ERROR','FAILED',                                                        | None                             |
| message\_id       | int(11)                                                                                             | Part of UNIQUE KEY (message\_id) |
| message\_version  | int(11)                                                                                             | None                             |
| batch\_id         | varchar(250)                                                                                        | Part of UNIQUE KEY (batch\_id)   |
| start\_time       | datetime                                                                                            | None                             |
| end\_time         | datetime                                                                                            | None                             |
| error\_report     | longtext                                                                                            | None                             |
| last\_updated\_on | datetime                                                                                            | None                             |
| batch\_start\_id  | int(11)                                                                                             | None                             |

## Table: `campaign_replay_stats`

| Column Name         | Data Type    | Index                    |
| ------------------- | ------------ | ------------------------ |
| id                  | int(11)      | Part of PRIMARY KEY (id) |
| message\_id         | int(11)      | None                     |
| message\_version    | int(11)      | None                     |
| received\_time      | datetime     | None                     |
| picked\_time        | datetime     | None                     |
| skipped\_count      | int(11)      | None                     |
| skipped\_error\_csv | varchar(200) | None                     |
| auto\_update\_time  | timestamp    | None                     |

## Table: `user_actions_run`

| Column Name        | Data Type                            | Index                    |
| ------------------ | ------------------------------------ | ------------------------ |
| id                 | int(11)                              | Part of PRIMARY KEY (id) |
| status             | enum('STARTED','PROCESSING','ENDED') | Part of KEY (status)     |
| type               | enum('OPENED','CLICKED')             | Part of KEY (type)       |
| processed\_count   | int(11)                              | None                     |
| start\_date        | timestamp                            | None                     |
| end\_date          | timestamp                            | None                     |
| last\_run          | timestamp                            | None                     |
| auto\_update\_time | timestamp                            | None                     |

## Table: `communication_details_dlr_update_log`

| Column Name       | Data Type | Index                           |
| ----------------- | --------- | ------------------------------- |
| id                | int(11)   | Part of PRIMARY KEY (id)        |
| msg\_id           | int(11)   | Part of UNIQUE KEY (msg\_id)    |
| created\_on       | timestamp | None                            |
| last\_updated\_on | timestamp | Part of KEY (last\_updated\_on) |

## Table: `sms_link_track_org_status`

| Column Name        | Data Type  | Index                         |
| ------------------ | ---------- | ----------------------------- |
| org\_id            | int(11)    | Part of PRIMARY KEY (org\_id) |
| status             | tinyint(1) | None                          |
| auto\_update\_time | timestamp  | None                          |

## Table: `pre_execution_msg_status`

| Column Name          | Data Type                                                                                 | Index                              |
| -------------------- | ----------------------------------------------------------------------------------------- | ---------------------------------- |
| id                   | int(11)                                                                                   | Part of PRIMARY KEY (id)           |
| org\_id              | int(11)                                                                                   | Part of KEY (org\_id)              |
| campaign\_id         | int(11)                                                                                   | Part of KEY (campaign\_id)         |
| message\_id          | varchar(30)                                                                               | Part of KEY (message\_id)          |
| message\_variant\_id | varchar(30)                                                                               | Part of KEY (message\_variant\_id) |
| event\_type          | enum('REMIND','EXECUTE')                                                                  | Part of KEY (event\_type)          |
| status               | enum('OPEN','PROCESSING','SUBMITTED','TEMPORARY\_FAILURE','SUCCESS','PERMANENT\_FAILURE') | Part of KEY (status)               |
| start\_date          | datetime                                                                                  | Part of KEY (start\_date)          |
| end\_date            | datetime                                                                                  | None                               |
| auto\_update\_time   | timestamp                                                                                 | None                               |
| is\_valid            | tinyint(1)                                                                                | Part of KEY (is\_valid)            |

## Table: `campaign_config_values`

| Column Name        | Data Type    | Index                    |
| ------------------ | ------------ | ------------------------ |
| id                 | int(11)      | Part of PRIMARY KEY (id) |
| key\_id            | int(11)      | None                     |
| org\_id            | int(11)      | None                     |
| value              | varchar(256) | None                     |
| is\_active         | tinyint(1)   | None                     |
| created\_by        | int(11)      | None                     |
| auto\_update\_time | timestamp    | None                     |

## Table: `social_audience_list`

| Column Name         | Data Type                           | Index                                 |
| ------------------- | ----------------------------------- | ------------------------------------- |
| id                  | int(11)                             | Part of PRIMARY KEY (id)              |
| org\_id             | int(11)                             | Part of KEY (org\_id)                 |
| message\_id         | int(11)                             | Part of KEY (message\_id)             |
| type                | enum('FACEBOOK','GOOGLE','TWITTER') | Part of KEY (type)                    |
| recipient\_list\_id | int(11)                             | None                                  |
| account\_id         | varchar(32)                         | Part of UNIQUE KEY (account\_id)      |
| remote\_list\_id    | varchar(32)                         | Part of UNIQUE KEY (remote\_list\_id) |
| name                | mediumtext                          | None                                  |
| description         | mediumtext                          | None                                  |
| approximate\_count  | int(64)                             | None                                  |
| created\_on         | timestamp                           | None                                  |
| remote\_updated\_on | timestamp                           | None                                  |
| cached\_on          | timestamp                           | None                                  |
| auto\_update\_time  | timestamp                           | Part of KEY (auto\_update\_time)      |

## Table: `xengage_adchannels_delivery_details`

| Column Name        | Data Type        | Index                             |
| ------------------ | ---------------- | --------------------------------- |
| message\_id        | int(11)          | Part of PRIMARY KEY (message\_id) |
| org\_id            | int(11)          | Part of PRIMARY KEY (org\_id)     |
| sub\_channel       | enum('FACEBOOK', | None                              |
| ftp\_link          | varchar(255)     | None                              |
| fresh\_service\_id | int(11)          | None                              |
| created\_time      | datetime         | None                              |

## Table: `social_message_info`

| Column Name         | Data Type                           | Index                                 |
| ------------------- | ----------------------------------- | ------------------------------------- |
| id                  | int(11)                             | Part of PRIMARY KEY (id)              |
| org\_id             | int(11)                             | Part of UNIQUE KEY (org\_id)          |
| campaign\_id        | int(11)                             | None                                  |
| message\_id         | varchar(300)                        | None                                  |
| type                | enum('FACEBOOK','GOOGLE','TWITTER') | Part of UNIQUE KEY (type)             |
| recipient\_list\_id | int(11)                             | None                                  |
| account\_id         | varchar(32)                         | Part of UNIQUE KEY (account\_id)      |
| remote\_list\_id    | varchar(32)                         | Part of UNIQUE KEY (remote\_list\_id) |
| remote\_adset\_id   | varchar(32)                         | None                                  |
| remote\_ad\_id      | varchar(32)                         | None                                  |
| created\_on         | timestamp                           | None                                  |
| auto\_update\_time  | timestamp                           | Part of KEY (auto\_update\_time)      |

## Table: `social_offer_info`

| Column Name         | Data Type   | Index                             |
| ------------------- | ----------- | --------------------------------- |
| id                  | int(11)     | Part of PRIMARY KEY (id)          |
| org\_id             | int(11)     | Part of KEY (org\_id)             |
| message\_id         | int(11)     | Part of KEY (message\_id)         |
| message\_version    | int(11)     | Part of KEY (message\_version)    |
| voucher\_series\_id | int(11)     | Part of KEY (voucher\_series\_id) |
| remote\_offer\_id   | varchar(32) | None                              |
| auto\_update\_time  | timestamp   | Part of KEY (auto\_update\_time)  |

## Table: `communication_details`

| Column Name               | Data Type                                                                                                                           | Index                            |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- |
| id                        | int(11)                                                                                                                             | Part of PRIMARY KEY (id)         |
| guid                      | varchar(100)                                                                                                                        | Part of KEY (guid)               |
| message\_queue\_id        | int(11)                                                                                                                             | Part of KEY (message\_queue\_id) |
| message\_id               | varchar(30)                                                                                                                         | Part of KEY (message\_id)        |
| org\_id                   | int(11)                                                                                                                             | Part of KEY (org\_id)            |
| bucket\_id                | int(11)                                                                                                                             | None                             |
| campaign\_id              | int(11)                                                                                                                             | Part of KEY (campaign\_id)       |
| recipient\_list\_id       | int(11)                                                                                                                             | None                             |
| attribution\_id           | int(11)                                                                                                                             | None                             |
| recipient\_list\_name     | varchar(500)                                                                                                                        | None                             |
| target\_type              | enum('GROUPED','TIMELINE','EXPIRY\_REMINDER','SOCIAL','PROMOTION\_EARNED','PROMOTION\_EXPIRY',                                      | Part of KEY (target\_type)       |
| communication\_type       | enum('SMS','EMAIL','CALL\_TASK','WECHAT','PUSH','ANDROID','IOS','FACEBOOK','GOOGLE','TWITTER','LINE','XENGAGE','NO\_COMMUNICATION', | None                             |
| sub\_communication\_type  | enum('SMS','EMAIL','CALL\_TASK','WECHAT','PUSH','ANDROID','IOS','FACEBOOK','GOOGLE','TWITTER','LINE','NONE','NO\_COMMUNICATION',    | None                             |
| expected\_delivery\_count | int(11)                                                                                                                             | None                             |
| overall\_recipient\_count | int(10)                                                                                                                             | None                             |
| subject                   | mediumtext                                                                                                                          | None                             |
| message\_body             | longtext                                                                                                                            | None                             |
| priority                  | int(11)                                                                                                                             | None                             |
| state                     | enum('OPENED','PROCESSING','PAUSED','CLOSED','ERROR','REPLAY','REPLAYING','REPLAYED','RETRY')                                       | Part of KEY (state)              |
| is\_legacy\_table         | tinyint(4)                                                                                                                          | None                             |
| recieved\_time            | datetime                                                                                                                            | None                             |
| picked\_time              | datetime                                                                                                                            | Part of KEY (picked\_time)       |
| resume\_from\_id          | int(11)                                                                                                                             | None                             |
| default\_arguments        | mediumtext                                                                                                                          | None                             |
| message\_properties       | mediumtext                                                                                                                          | None                             |
| queued\_by                | int(11)                                                                                                                             | None                             |
| last\_updated\_on         | timestamp                                                                                                                           | Part of KEY (last\_updated\_on)  |
| last\_updated\_by         | int(11)                                                                                                                             | None                             |

## Table: `migration_run`

| Column Name           | Data Type                                  | Index                               |
| --------------------- | ------------------------------------------ | ----------------------------------- |
| id                    | int(11)                                    | Part of PRIMARY KEY (id)            |
| org\_id               | int(11)                                    | Part of KEY (org\_id)               |
| status                | enum('OPEN','PROCESSING','CLOSED','ERROR') | None                                |
| last\_migration\_time | datetime                                   | Part of KEY (last\_migration\_time) |
| type                  | enum('MIGRATE','REVERT')                   | None                                |
| last\_updated         | timestamp                                  | None                                |

## Table: `migration_run_statistics`

| Column Name                       | Data Type    | Index                        |
| --------------------------------- | ------------ | ---------------------------- |
| id                                | int(11)      | Part of PRIMARY KEY (id)     |
| run\_id                           | int(11)      | Part of UNIQUE KEY (run\_id) |
| org\_id                           | int(11)      | Part of UNIQUE KEY (org\_id) |
| campaign\_count                   | int(11)      | None                         |
| message\_count                    | int(11)      | None                         |
| no\_of\_affected\_only\_scheduler | int(11)      | None                         |
| not\_migrated\_msg\_q\_ids        | varchar(255) | None                         |

## Table: `reachability_channel_types`

| Column Name       | Data Type                                                      | Index                    |
| ----------------- | -------------------------------------------------------------- | ------------------------ |
| id                | int(11)                                                        | Part of PRIMARY KEY (id) |
| channel           | enum('MOBILE','EMAIL','WECHAT','ANDROID','IOS','LINE','VIBER') | None                     |
| last\_updated\_on | timestamp                                                      | None                     |

## Table: `group_custom_tags`

| Column Name        | Data Type  | Index |
| ------------------ | ---------- | ----- |
| org\_id            | int(11)    | None  |
| group\_version\_id | int(10)    | None  |
| group\_id          | int(1)     | None  |
| custom\_tag\_count | varchar(1) | None  |

## Table: `reloadable_group`

| Column Name          | Data Type  | Index                            |
| -------------------- | ---------- | -------------------------------- |
| id                   | int(11)    | Part of UNIQUE KEY (id)          |
| org\_id              | int(11)    | Part of UNIQUE KEY (org\_id)     |
| campaign\_id         | int(11)    | None                             |
| group\_id            | int(11)    | None                             |
| message\_id          | int(11)    | Part of UNIQUE KEY (message\_id) |
| is\_campaign\_active | tinyint(1) | None                             |
| is\_message\_active  | tinyint(1) | None                             |
| auto\_update\_time   | timestamp  | None                             |

## Table: `reachability_job_details`

| Column Name                   | Data Type                                  | Index                        |
| ----------------------------- | ------------------------------------------ | ---------------------------- |
| id                            | int(11)                                    | Part of PRIMARY KEY (id)     |
| org\_id                       | int(11)                                    | None                         |
| group\_id                     | int(11)                                    | Part of KEY (group\_id)      |
| bucket\_id                    | int(11)                                    | None                         |
| campaign\_id                  | int(11)                                    | None                         |
| status                        | enum('OPEN','PROCESSING','CLOSED','ERROR') | None                         |
| recieved\_time                | datetime                                   | Part of KEY (recieved\_time) |
| start\_time                   | datetime                                   | None                         |
| end\_time                     | datetime                                   | Part of KEY (end\_time)      |
| expected\_count               | int(11)                                    | None                         |
| processed\_count              | int(11)                                    | None                         |
| submit\_un\_processed\_to\_wl | tinyint(1)                                 | None                         |
| last\_updated                 | timestamp                                  | None                         |

## Table: `group_details`

| Column Name             | Data Type                                                                                                                                            | Index                            |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- |
| id                      | int(11)                                                                                                                                              | Part of PRIMARY KEY (id)         |
| campaign\_id            | int(11)                                                                                                                                              | Part of KEY (campaign\_id)       |
| uuid                    | varchar(255)                                                                                                                                         | None                             |
| group\_label            | varchar(255)                                                                                                                                         | None                             |
| description             | text                                                                                                                                                 | None                             |
| created\_date           | datetime                                                                                                                                             | None                             |
| org\_id                 | int(11)                                                                                                                                              | Part of KEY (org\_id)            |
| type                    | enum('CAMPAIGN\_USERS','STICKY\_GROUP','LOYALTY','TEST\_GROUP','NON\_LOYALTY','ALL','UPLOAD','FILTER\_BASED','DERIVED','ORG\_USERS','SPLIT','MERGE') | None                             |
| bucket\_id              | int(11)                                                                                                                                              | None                             |
| group\_tags             | longtext                                                                                                                                             | None                             |
| is\_favourite           | tinyint(4)                                                                                                                                           | None                             |
| is\_reloading           | tinyint(1)                                                                                                                                           | None                             |
| is\_visible             | tinyint(1)                                                                                                                                           | Part of KEY (is\_visible)        |
| is\_migrated            | tinyint(1)                                                                                                                                           | None                             |
| created\_by             | int(11)                                                                                                                                              | None                             |
| auto\_update\_time      | timestamp                                                                                                                                            | Part of KEY (auto\_update\_time) |
| custom\_tag\_count      | tinyint(1)                                                                                                                                           | None                             |
| group\_relation\_params | text                                                                                                                                                 | None                             |

## Table: `reachability_batch_details`

| Column Name       | Data Type                                           | Index                     |
| ----------------- | --------------------------------------------------- | ------------------------- |
| id                | int(11)                                             | Part of PRIMARY KEY (id)  |
| job\_id           | int(11)                                             | Part of KEY (job\_id)     |
| status            | enum('OPEN','QUEUED','PROCESSING','CLOSED','ERROR') | Part of KEY (status)      |
| start\_index      | int(11)                                             | None                      |
| end\_index        | int(11)                                             | None                      |
| start\_time       | datetime                                            | None                      |
| end\_time         | datetime                                            | None                      |
| expected\_count   | int(11)                                             | None                      |
| processed\_count  | int(11)                                             | None                      |
| wl\_job\_id       | int(11)                                             | Part of KEY (wl\_job\_id) |
| last\_updated\_on | timestamp                                           | None                      |

## Table: `shard_details`

| Column Name        | Data Type    | Index                    |
| ------------------ | ------------ | ------------------------ |
| id                 | int(11)      | Part of PRIMARY KEY (id) |
| database\_name     | varchar(100) | None                     |
| shard\_discription | varchar(100) | None                     |
| created\_on        | date         | None                     |
| service\_name      | varchar(255) | None                     |

## Table: `reload_sync_details`

| Column Name        | Data Type | Index                    |
| ------------------ | --------- | ------------------------ |
| id                 | int(11)   | Part of PRIMARY KEY (id) |
| org\_id            | int(11)   | Part of KEY (org\_id)    |
| sync\_time         | datetime  | None                     |
| reload\_time       | datetime  | None                     |
| created\_date      | datetime  | None                     |
| auto\_update\_time | timestamp | None                     |

## Table: `group_reload_log`

| Column Name    | Data Type                           | Index                         |
| -------------- | ----------------------------------- | ----------------------------- |
| id             | int(11)                             | Part of PRIMARY KEY (id)      |
| org\_id        | int(11)                             | Part of PRIMARY KEY (org\_id) |
| group\_id      | int(11)                             | None                          |
| start\_date    | datetime                            | None                          |
| end\_date      | datetime                            | None                          |
| status         | enum('PROCESSING','CLOSED','ERROR') | None                          |
| error\_message | text                                | None                          |

## Table: `reachability_status_mapping`

| Column Name       | Data Type    | Index                    |
| ----------------- | ------------ | ------------------------ |
| id                | int(11)      | Part of PRIMARY KEY (id) |
| label\_id         | int(11)      | Part of KEY (label\_id)  |
| channel\_id       | int(11)      | None                     |
| wl\_status        | varchar(100) | None                     |
| ss\_status        | varchar(100) | None                     |
| last\_updated\_on | timestamp    | None                     |

## Table: `audience_v2_org_status`

| Column Name        | Data Type  | Index                         |
| ------------------ | ---------- | ----------------------------- |
| org\_id            | int(11)    | Part of PRIMARY KEY (org\_id) |
| status             | tinyint(1) | None                          |
| auto\_update\_time | timestamp  | None                          |

## Table: `bucket_details`

| Column Name       | Data Type    | Index                    |
| ----------------- | ------------ | ------------------------ |
| id                | int(11)      | Part of PRIMARY KEY (id) |
| shard\_id         | int(11)      | None                     |
| bucket\_name      | varchar(100) | None                     |
| hit\_rate         | int(11)      | None                     |
| rows\_count       | int(11)      | None                     |
| last\_visited\_on | date         | None                     |

## Table: `group_version_details`

| Column Name            | Data Type                                     | Index                            |
| ---------------------- | --------------------------------------------- | -------------------------------- |
| id                     | int(11)                                       | Part of PRIMARY KEY (id)         |
| org\_id                | int(11)                                       | Part of KEY (org\_id)            |
| campaign\_id           | int(11)                                       | Part of KEY (campaign\_id)       |
| group\_id              | int(11)                                       | Part of KEY (group\_id)          |
| bucket\_id             | int(11)                                       | None                             |
| params                 | varchar(250)                                  | None                             |
| target\_type           | enum('ALL','TEST','CONTROL','EXPERIMENT')     | None                             |
| customer\_count        | int(11)                                       | None                             |
| version\_number        | int(11)                                       | None                             |
| status                 | enum('PREPARE','PROCESSING','ACTIVE','ERROR') | None                             |
| error\_description     | varchar(512)                                  | None                             |
| is\_active             | tinyint(1)                                    | Part of KEY (is\_active)         |
| test\_control          | enum('ORG','CUSTOM','SKIP')                   | Part of KEY (test\_control)      |
| test\_percentage       | int(11)                                       | Part of KEY (test\_percentage)   |
| is\_migrated           | tinyint(1)                                    | None                             |
| data\_schema           | varchar(250)                                  | None                             |
| created\_date          | datetime                                      | None                             |
| last\_updated\_by      | int(11)                                       | None                             |
| auto\_update\_time     | timestamp                                     | Part of KEY (auto\_update\_time) |
| group\_users\_s3\_path | varchar(255)                                  | None                             |

## Table: `campaign_audience_export_job`

| Column Name        | Data Type                                                                                 | Index                                   |
| ------------------ | ----------------------------------------------------------------------------------------- | --------------------------------------- |
| id                 | int(11)                                                                                   | Part of PRIMARY KEY (id)                |
| org\_id            | int(11)                                                                                   | Part of PRIMARY KEY (org\_id)           |
| group\_id          | int(11)                                                                                   | None                                    |
| group\_version\_id | int(11)                                                                                   | Part of UNIQUE KEY (group\_version\_id) |
| channel            | enum('MOBILE','EMAIL','WECHAT','ANDROID','IOS','LINE','FACEBOOK','GOOGLE','VIBER','NONE') | Part of UNIQUE KEY (channel)            |
| account\_id        | varchar(150)                                                                              | Part of UNIQUE KEY (account\_id)        |
| status             | enum('OPEN','VALIDATING','PROCESSING','ERROR','CLOSED')                                   | None                                    |
| file\_url          | varchar(1024)                                                                             | None                                    |
| params             | varchar(1024)                                                                             | None                                    |
| created\_on        | datetime                                                                                  | None                                    |
| auto\_update\_time | timestamp                                                                                 | None                                    |

## Table: `create_audience_job_logs`

| Column Name        | Data Type                            | Index                            |
| ------------------ | ------------------------------------ | -------------------------------- |
| id                 | int(11)                              | Part of PRIMARY KEY (id)         |
| org\_id            | int(11)                              | Part of KEY (org\_id)            |
| job\_id            | int(11)                              | Part of KEY (job\_id)            |
| description        | varchar(250)                         | None                             |
| status             | enum('PROCESSING','SUCCESS','ERROR') | Part of KEY (status)             |
| start\_time        | datetime                             | None                             |
| end\_time          | datetime                             | None                             |
| auto\_update\_time | timestamp                            | Part of KEY (auto\_update\_time) |

## Table: `reachability_summary_report`

| Column Name             | Data Type | Index                    |
| ----------------------- | --------- | ------------------------ |
| id                      | int(11)   | Part of PRIMARY KEY (id) |
| group\_id               | int(11)   | Part of KEY (group\_id)  |
| job\_id                 | int(11)   | Part of KEY (job\_id)    |
| channel\_id             | int(11)   | None                     |
| reachability\_label\_id | int(11)   | None                     |
| count                   | int(11)   | None                     |
| last\_updated           | timestamp | None                     |

## Table: `create_audience_job`

| Column Name          | Data Type                                               | Index                            |
| -------------------- | ------------------------------------------------------- | -------------------------------- |
| id                   | int(11)                                                 | Part of PRIMARY KEY (id)         |
| org\_id              | int(11)                                                 | Part of KEY (org\_id)            |
| group\_version\_id   | int(11)                                                 | Part of KEY (group\_version\_id) |
| uploaded\_file\_name | varchar(255)                                            | None                             |
| status               | enum('OPEN','VALIDATING','PROCESSING','ERROR','CLOSED') | None                             |
| total\_upload\_count | int(11)                                                 | None                             |
| error\_count         | int(11)                                                 | None                             |
| error\_file\_url     | varchar(1024)                                           | None                             |
| file\_url            | varchar(1024)                                           | None                             |
| params               | varchar(1024)                                           | None                             |
| created\_by          | int(11)                                                 | None                             |
| created\_on          | datetime                                                | None                             |
| auto\_update\_time   | timestamp                                               | None                             |

## Table: `reachability_category_labels`

| Column Name             | Data Type                                                                                                      | Index                         |
| ----------------------- | -------------------------------------------------------------------------------------------------------------- | ----------------------------- |
| id                      | int(11)                                                                                                        | Part of PRIMARY KEY (id)      |
| category                | enum('VALID','INVALID','UNSUBSCRIBED','HARDBOUNCED','SOFTBOUNCED','CONTACT\_UNAVAILABLE','UNABLE\_TO\_VERIFY') | Part of UNIQUE KEY (category) |
| label                   | varchar(400)                                                                                                   | None                          |
| reach\_status\_ids\_csv | varchar(100)                                                                                                   | None                          |
| last\_updated\_on       | timestamp                                                                                                      | None                          |

## Table: `campaign_hash_lookup`

| Column Name        | Data Type    | Index                               |
| ------------------ | ------------ | ----------------------------------- |
| id                 | int(11)      | Part of PRIMARY KEY (id)            |
| org\_id            | int(11)      | Part of UNIQUE KEY (org\_id)        |
| lookup\_string     | varchar(190) | Part of UNIQUE KEY (lookup\_string) |
| auto\_update\_time | timestamp    | None                                |

## Table: `group_event_subscription`

| Column Name        | Data Type             | Index                            |
| ------------------ | --------------------- | -------------------------------- |
| id                 | int(11)               | Part of PRIMARY KEY (id)         |
| org\_id            | int(11)               | Part of UNIQUE KEY (org\_id)     |
| group\_id          | int(11)               | Part of UNIQUE KEY (group\_id)   |
| event\_type        | enum('GROUP\_RELOAD') | Part of UNIQUE KEY (event\_type) |
| entity             | varchar(64)           | Part of UNIQUE KEY (entity)      |
| entity\_id         | varchar(64)           | Part of UNIQUE KEY (entity\_id)  |
| subscribed         | tinyint(1)            | None                             |
| params\_json       | varchar(500)          | None                             |
| created\_by        | int(11)               | None                             |
| created\_date      | datetime              | None                             |
| last\_updated\_by  | int(11)               | None                             |
| auto\_update\_time | timestamp             | None                             |
