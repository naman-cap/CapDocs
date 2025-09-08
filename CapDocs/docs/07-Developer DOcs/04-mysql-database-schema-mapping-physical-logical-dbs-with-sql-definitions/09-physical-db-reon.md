---
title: 'Physical DB: reon'
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
| Logical DB                        | Tables                                                | Path for query                                                                 |
| :-------------------------------- | :---------------------------------------------------- | :----------------------------------------------------------------------------- |
| ams                               | released\_offset.sql                                  | reon.ams.released\_offset                                                      |
| ams                               | activity\_log.sql                                     | reon.ams.activity\_log                                                         |
| ams                               | released\_candidate.sql                               | reon.ams.released\_candidate                                                   |
| ams                               | activity\_batch.sql                                   | reon.ams.activity\_batch                                                       |
| ams                               | test\_sql.sql                                         | reon.ams.test\_sql                                                             |
| reon\_metadata\_control\_info     | etl\_persisted\_run\_version.sql                      | reon.reon\_metadata\_control\_info.etl\_persisted\_run\_version                |
| reon\_metadata\_control\_info     | metadata\_version.sql                                 | reon.reon\_metadata\_control\_info.metadata\_version                           |
| reon\_metadata\_control\_info     | version\_creation\_log.sql                            | reon.reon\_metadata\_control\_info.version\_creation\_log                      |
| reon\_metadata\_control\_info     | region\_info.sql                                      | reon.reon\_metadata\_control\_info.region\_info                                |
| reon\_metadata\_control\_info     | org\_specific\_etl\_run\_version.sql                  | reon.reon\_metadata\_control\_info.org\_specific\_etl\_run\_version            |
| reon\_metadata\_control\_info     | etl\_run\_version.sql                                 | reon.reon\_metadata\_control\_info.etl\_run\_version                           |
| reon\_metadata\_control\_info     | org\_specific\_metadata\_version.sql                  | reon.reon\_metadata\_control\_info.org\_specific\_metadata\_version            |
| dimension\_grouping               | dimension\_grouping\_run\_details.sql                 | reon.dimension\_grouping.dimension\_grouping\_run\_details                     |
| reon\_workflow\_manager           | org\_schedules.sql                                    | reon.reon\_workflow\_manager.org\_schedules                                    |
| reon\_workflow\_manager           | block\_validation\_stats.sql                          | reon.reon\_workflow\_manager.block\_validation\_stats                          |
| reon\_workflow\_manager           | task\_dimensions.sql                                  | reon.reon\_workflow\_manager.task\_dimensions                                  |
| reon\_workflow\_manager           | sqoop\_run\_details.sql                               | reon.reon\_workflow\_manager.sqoop\_run\_details                               |
| reon\_workflow\_manager           | emr\_template\_log.sql                                | reon.reon\_workflow\_manager.emr\_template\_log                                |
| reon\_workflow\_manager           | dag\_triggers.sql                                     | reon.reon\_workflow\_manager.dag\_triggers                                     |
| reon\_workflow\_manager           | execution\_properties.sql                             | reon.reon\_workflow\_manager.execution\_properties                             |
| reon\_workflow\_manager           | hdfs\_allocation\_audit\_log.sql                      | reon.reon\_workflow\_manager.hdfs\_allocation\_audit\_log                      |
| reon\_workflow\_manager           | dag\_trigger\_overrides.sql                           | reon.reon\_workflow\_manager.dag\_trigger\_overrides                           |
| reon\_workflow\_manager           | hdfs\_scaling\_parameter.sql                          | reon.reon\_workflow\_manager.hdfs\_scaling\_parameter                          |
| reon\_workflow\_manager           | dim\_compute\_details.sql                             | reon.reon\_workflow\_manager.dim\_compute\_details                             |
| reon\_workflow\_manager           | execution\_phases.sql                                 | reon.reon\_workflow\_manager.execution\_phases                                 |
| reon\_workflow\_manager           | launch\_cluster\_details.sql                          | reon.reon\_workflow\_manager.launch\_cluster\_details                          |
| reon\_workflow\_manager           | dbs\_job\_workflow\.sql                               | reon.reon\_workflow\_manager.dbs\_job\_workflow                                |
| reon\_workflow\_manager           | enabled\_orgs.sql                                     | reon.reon\_workflow\_manager.enabled\_orgs                                     |
| reon\_workflow\_manager           | context\_values.sql                                   | reon.reon\_workflow\_manager.context\_values                                   |
| reon\_workflow\_manager           | phases.sql                                            | reon.reon\_workflow\_manager.phases                                            |
| reon\_workflow\_manager           | org\_size.sql                                         | reon.reon\_workflow\_manager.org\_size                                         |
| reon\_workflow\_manager           | execution\_date.sql                                   | reon.reon\_workflow\_manager.execution\_date                                   |
| reon\_workflow\_manager           | dim\_compute\_queries.sql                             | reon.reon\_workflow\_manager.dim\_compute\_queries                             |
| reon\_workflow\_manager           | tasks\_dependencies.sql                               | reon.reon\_workflow\_manager.tasks\_dependencies                               |
| reon\_workflow\_manager           | cdc\_source\_table\_info.sql                          | reon.reon\_workflow\_manager.cdc\_source\_table\_info                          |
| reon\_workflow\_manager           | executions.sql                                        | reon.reon\_workflow\_manager.executions                                        |
| reon\_workflow\_manager           | dbs\_org\_group\_mapping.sql                          | reon.reon\_workflow\_manager.dbs\_org\_group\_mapping                          |
| reon\_workflow\_manager           | task\_status\_log.sql                                 | reon.reon\_workflow\_manager.task\_status\_log                                 |
| reon\_workflow\_manager           | workflows.sql                                         | reon.reon\_workflow\_manager.workflows                                         |
| reon\_workflow\_manager           | qsi\_source\_table\_sync\_time.sql                    | reon.reon\_workflow\_manager.qsi\_source\_table\_sync\_time                    |
| reon\_workflow\_manager           | phase\_dependencies.sql                               | reon.reon\_workflow\_manager.phase\_dependencies                               |
| reon\_workflow\_manager           | dbs\_workspace.sql                                    | reon.reon\_workflow\_manager.dbs\_workspace                                    |
| reon\_workflow\_manager           | tasks.sql                                             | reon.reon\_workflow\_manager.tasks                                             |
| reon\_workflow\_manager           | org\_sync\_check\_log.sql                             | reon.reon\_workflow\_manager.org\_sync\_check\_log                             |
| dimension\_group\_values          | temp\_table.sql                                       | reon.dimension\_group\_values.temp\_table                                      |
| reon\_meta\_api\_stats            | total\_attempt.sql                                    | reon.reon\_meta\_api\_stats.total\_attempt                                     |
| reon\_meta\_api\_stats            | response\_time.sql                                    | reon.reon\_meta\_api\_stats.response\_time                                     |
| reon\_tag\_resolver               | jobs.sql                                              | reon.reon\_tag\_resolver.jobs                                                  |
| reon\_tag\_resolver               | kpi\_tags.sql                                         | reon.reon\_tag\_resolver.kpi\_tags                                             |
| reon\_tag\_resolver               | tag\_variables.sql                                    | reon.reon\_tag\_resolver.tag\_variables                                        |
| reon\_tag\_resolver               | query\_tags.sql                                       | reon.reon\_tag\_resolver.query\_tags                                           |
| reon\_tag\_resolver               | executions.sql                                        | reon.reon\_tag\_resolver.executions                                            |
| rbs                               | organization\_status.sql                              | reon.rbs.organization\_status                                                  |
| rbs                               | rule\_info.sql                                        | reon.rbs.rule\_info                                                            |
| rbs                               | rule\_mapping.sql                                     | reon.rbs.rule\_mapping                                                         |
| rbs                               | rule\_execution\_log.sql                              | reon.rbs.rule\_execution\_log                                                  |
| rbs                               | rule\_execution.sql                                   | reon.rbs.rule\_execution                                                       |
| Logical DB                        | Tables                                                | Path for query                                                                 |
| :------------------------         | :------------------------------------                 | :-----------------------------------------------                               |
| reon\_metadata                    | fact\_context.sql                                     | reon.reon\_metadata.fact\_context                                              |
| reon\_metadata                    | source\_tables.sql                                    | reon.reon\_metadata.source\_tables                                             |
| reon\_metadata                    | fact\_block\_config.sql                               | reon.reon\_metadata.fact\_block\_config                                        |
| reon\_metadata                    | mongo\_source\_tables.sql                             | reon.reon\_metadata.mongo\_source\_tables                                      |
| reon\_metadata                    | summary\_table\_column\_definition.sql                | reon.reon\_metadata.summary\_table\_column\_definition                         |
| reon\_metadata                    | state\_input\_table.sql                               | reon.reon\_metadata.state\_input\_table                                        |
| reon\_metadata                    | source\_target\_dimension\_mapping.sql                | reon.reon\_metadata.source\_target\_dimension\_mapping                         |
| reon\_metadata                    | summary\_groupBy.sql                                  | reon.reon\_metadata.summary\_groupBy                                           |
| reon\_metadata                    | stateful\_transformations.sql                         | reon.reon\_metadata.stateful\_transformations                                  |
| reon\_metadata                    | mongo\_collections.sql                                | reon.reon\_metadata.mongo\_collections                                         |
| reon\_metadata                    | summary\_table\_column.sql                            | reon.reon\_metadata.summary\_table\_column                                     |
| reon\_metadata                    | temp\_strategy.sql                                    | reon.reon\_metadata.temp\_strategy                                             |
| reon\_metadata                    | transpose\_columns.sql                                | reon.reon\_metadata.transpose\_columns                                         |
| reon\_metadata                    | logical\_view\.sql                                    | reon.reon\_metadata.logical\_view                                              |
| reon\_metadata                    | transformations.sql                                   | reon.reon\_metadata.transformations                                            |
| reon\_metadata                    | logical\_summary\_table.sql                           | reon.reon\_metadata.logical\_summary\_table                                    |
| reon\_metadata                    | source\_shard\_table\_info.sql                        | reon.reon\_metadata.source\_shard\_table\_info                                 |
| reon\_metadata                    | providers.sql                                         | reon.reon\_metadata.providers                                                  |
| reon\_metadata                    | attribution\_strategy.sql                             | reon.reon\_metadata.attribution\_strategy                                      |
| reon\_metadata                    | source\_target\_column\_mapping.sql                   | reon.reon\_metadata.source\_target\_column\_mapping                            |
| reon\_metadata                    | hierarchical\_dimension\_columns.sql                  | reon.reon\_metadata.hierarchical\_dimension\_columns                           |
| reon\_metadata                    | summary\_condition.sql                                | reon.reon\_metadata.summary\_condition                                         |
| reon\_metadata                    | source\_target\_table\_mapping.sql                    | reon.reon\_metadata.source\_target\_table\_mapping                             |
| reon\_metadata                    | scope\_dimension\_mapping.sql                         | reon.reon\_metadata.scope\_dimension\_mapping                                  |
| reon\_metadata                    | source\_target\_dimension\_column\_mapping.sql        | reon.reon\_metadata.source\_target\_dimension\_column\_mapping                 |
| reon\_metadata                    | fact\_dimension\_overlap.sql                          | reon.reon\_metadata.fact\_dimension\_overlap                                   |
| reon\_metadata                    | source\_table\_column.sql                             | reon.reon\_metadata.source\_table\_column                                      |
| reon\_metadata                    | fact\_table\_run\_type.sql                            | reon.reon\_metadata.fact\_table\_run\_type                                     |
| reon\_metadata                    | dimension\_etl\_data\_status.sql                      | reon.reon\_metadata.dimension\_etl\_data\_status                               |
| reon\_metadata                    | block\_column.sql                                     | reon.reon\_metadata.block\_column                                              |
| reon\_metadata                    | compute\_block.sql                                    | reon.reon\_metadata.compute\_block                                             |
| reon\_metadata                    | fact\_kpis.sql                                        | reon.reon\_metadata.fact\_kpis                                                 |
| reon\_metadata                    | fact\_fk\_constraints.sql                             | reon.reon\_metadata.fact\_fk\_constraints                                      |
| reon\_metadata                    | summary\_table.sql                                    | reon.reon\_metadata.summary\_table                                             |
| reon\_metadata                    | flat\_dimension\_columns.sql                          | reon.reon\_metadata.flat\_dimension\_columns                                   |
| reon\_metadata                    | org\_context.sql                                      | reon.reon\_metadata.org\_context                                               |
| reon\_metadata                    | union\_mapping.sql                                    | reon.reon\_metadata.union\_mapping                                             |
| reon\_metadata                    | source\_table\_fk\_constraints.sql                    | reon.reon\_metadata.source\_table\_fk\_constraints                             |
| reon\_metadata                    | dimension\_attribute\_value\_tables.sql               | reon.reon\_metadata.dimension\_attribute\_value\_tables                        |
| reon\_metadata                    | config\_key\_values.sql                               | reon.reon\_metadata.config\_key\_values                                        |
| reon\_metadata                    | transpose\_tables.sql                                 | reon.reon\_metadata.transpose\_tables                                          |
| reon\_metadata                    | fact\_table\_column.sql                               | reon.reon\_metadata.fact\_table\_column                                        |
| reon\_metadata                    | attribution\_strategy\_mapping.sql                    | reon.reon\_metadata.attribution\_strategy\_mapping                             |
| reon\_metadata                    | org\_dimension\_provider\_mapping.sql                 | reon.reon\_metadata.org\_dimension\_provider\_mapping                          |
| reon\_metadata                    | provider\_dimension\_mapping.sql                      | reon.reon\_metadata.provider\_dimension\_mapping                               |
| reon\_metadata                    | block\_input\_table.sql                               | reon.reon\_metadata.block\_input\_table                                        |
| reon\_metadata                    | mongo\_structs.sql                                    | reon.reon\_metadata.mongo\_structs                                             |
| reon\_metadata                    | provider\_tables.sql                                  | reon.reon\_metadata.provider\_tables                                           |
| reon\_metadata                    | mongo\_source\_columns.sql                            | reon.reon\_metadata.mongo\_source\_columns                                     |
| reon\_metadata                    | scd\_dimension\_columns.sql                           | reon.reon\_metadata.scd\_dimension\_columns                                    |
| reon\_metadata                    | stateless\_kpis.sql                                   | reon.reon\_metadata.stateless\_kpis                                            |
| reon\_metadata                    | scopes.sql                                            | reon.reon\_metadata.scopes                                                     |
| reon\_metadata                    | fact\_table\_standard\_condition.sql                  | reon.reon\_metadata.fact\_table\_standard\_condition                           |
| reon\_metadata                    | logical\_view\_column\_definition.sql                 | reon.reon\_metadata.logical\_view\_column\_definition                          |
| reon\_metadata                    | organization\_scopes.sql                              | reon.reon\_metadata.organization\_scopes                                       |
| reon\_metadata                    | dimension.sql                                         | reon.reon\_metadata.dimension                                                  |
| reon\_metadata                    | fact\_table.sql                                       | reon.reon\_metadata.fact\_table                                                |
| reon\_metadata                    | dimension\_table.sql                                  | reon.reon\_metadata.dimension\_table                                           |
| reon\_metadata                    | source\_schema\_end\_point\_mapping.sql               | reon.reon\_metadata.source\_schema\_end\_point\_mapping                        |
| Logical DB                        | Tables                                                | Path for query                                                                 |
| :-----------------------------    | :------------------------------------------------     | :---------------------------------------------------                           |
| reon\_metadata\_dynamic           | fact\_context.sql                                     | reon.reon\_metadata\_dynamic.fact\_context                                     |
| reon\_metadata\_dynamic           | source\_tables.sql                                    | reon.reon\_metadata\_dynamic.source\_tables                                    |
| reon\_metadata\_dynamic           | fact\_block\_config.sql                               | reon.reon\_metadata\_dynamic.fact\_block\_config                               |
| reon\_metadata\_dynamic           | mongo\_source\_tables.sql                             | reon.reon\_metadata\_dynamic.mongo\_source\_tables                             |
| reon\_metadata\_dynamic           | summary\_table\_column\_definition.sql                | reon.reon\_metadata\_dynamic.summary\_table\_column\_definition                |
| reon\_metadata\_dynamic           | source\_target\_dimension\_mapping.sql                | reon.reon\_metadata\_dynamic.source\_target\_dimension\_mapping                |
| reon\_metadata\_dynamic           | summary\_groupBy.sql                                  | reon.reon\_metadata\_dynamic.summary\_groupBy                                  |
| reon\_metadata\_dynamic           | mongo\_collections.sql                                | reon.reon\_metadata\_dynamic.mongo\_collections                                |
| reon\_metadata\_dynamic           | summary\_table\_column.sql                            | reon.reon\_metadata\_dynamic.summary\_table\_column                            |
| reon\_metadata\_dynamic           | temp\_strategy.sql                                    | reon.reon\_metadata\_dynamic.temp\_strategy                                    |
| reon\_metadata\_dynamic           | transpose\_columns.sql                                | reon.reon\_metadata\_dynamic.transpose\_columns                                |
| reon\_metadata\_dynamic           | external\_source\_table\_org\_mapping.sql             | reon.reon\_metadata\_dynamic.external\_source\_table\_org\_mapping             |
| reon\_metadata\_dynamic           | fact\_partitioner.sql                                 | reon.reon\_metadata\_dynamic.fact\_partitioner                                 |
| reon\_metadata\_dynamic           | logical\_view\.sql                                    | reon.reon\_metadata\_dynamic.logical\_view                                     |
| reon\_metadata\_dynamic           | transformations.sql                                   | reon.reon\_metadata\_dynamic.transformations                                   |
| reon\_metadata\_dynamic           | logical\_summary\_table.sql                           | reon.reon\_metadata\_dynamic.logical\_summary\_table                           |
| reon\_metadata\_dynamic           | source\_shard\_table\_info.sql                        | reon.reon\_metadata\_dynamic.source\_shard\_table\_info                        |
| reon\_metadata\_dynamic           | custom\_dimension\_transformation.sql                 | reon.reon\_metadata\_dynamic.custom\_dimension\_transformation                 |
| reon\_metadata\_dynamic           | providers.sql                                         | reon.reon\_metadata\_dynamic.providers                                         |
| reon\_metadata\_dynamic           | attribution\_strategy.sql                             | reon.reon\_metadata\_dynamic.attribution\_strategy                             |
| reon\_metadata\_dynamic           | source\_target\_column\_mapping.sql                   | reon.reon\_metadata\_dynamic.source\_target\_column\_mapping                   |
| reon\_metadata\_dynamic           | hierarchical\_dimension\_columns.sql                  | reon.reon\_metadata\_dynamic.hierarchical\_dimension\_columns                  |
| reon\_metadata\_dynamic           | summary\_condition.sql                                | reon.reon\_metadata\_dynamic.summary\_condition                                |
| reon\_metadata\_dynamic           | source\_target\_table\_mapping.sql                    | reon.reon\_metadata\_dynamic.source\_target\_table\_mapping                    |
| reon\_metadata\_dynamic           | scope\_dimension\_mapping.sql                         | reon.reon\_metadata\_dynamic.scope\_dimension\_mapping                         |
| reon\_metadata\_dynamic           | source\_target\_dimension\_column\_mapping.sql        | reon.reon\_metadata\_dynamic.source\_target\_dimension\_column\_mapping        |
| reon\_metadata\_dynamic           | fact\_dimension\_overlap.sql                          | reon.reon\_metadata\_dynamic.fact\_dimension\_overlap                          |
| reon\_metadata\_dynamic           | source\_table\_column.sql                             | reon.reon\_metadata\_dynamic.source\_table\_column                             |
| reon\_metadata\_dynamic           | fact\_table\_run\_type.sql                            | reon.reon\_metadata\_dynamic.fact\_table\_run\_type                            |
| reon\_metadata\_dynamic           | dimension\_etl\_data\_status.sql                      | reon.reon\_metadata\_dynamic.dimension\_etl\_data\_status                      |
| reon\_metadata\_dynamic           | fact\_kpis.sql                                        | reon.reon\_metadata\_dynamic.fact\_kpis                                        |
| reon\_metadata\_dynamic           | fact\_fk\_constraints.sql                             | reon.reon\_metadata\_dynamic.fact\_fk\_constraints                             |
| reon\_metadata\_dynamic           | summary\_table.sql                                    | reon.reon\_metadata\_dynamic.summary\_table                                    |
| reon\_metadata\_dynamic           | flat\_dimension\_columns.sql                          | reon.reon\_metadata\_dynamic.flat\_dimension\_columns                          |
| reon\_metadata\_dynamic           | org\_context.sql                                      | reon.reon\_metadata\_dynamic.org\_context                                      |
| reon\_metadata\_dynamic           | union\_mapping.sql                                    | reon.reon\_metadata\_dynamic.union\_mapping                                    |
| reon\_metadata\_dynamic           | source\_table\_fk\_constraints.sql                    | reon.reon\_metadata\_dynamic.source\_table\_fk\_constraints                    |
| reon\_metadata\_dynamic           | dimension\_attribute\_value\_tables.sql               | reon.reon\_metadata\_dynamic.dimension\_attribute\_value\_tables               |
| reon\_metadata\_dynamic           | config\_key\_values.sql                               | reon.reon\_metadata\_dynamic.config\_key\_values                               |
| reon\_metadata\_dynamic           | transpose\_tables.sql                                 | reon.reon\_metadata\_dynamic.transpose\_tables                                 |
| reon\_metadata\_dynamic           | fact\_table\_column.sql                               | reon.reon\_metadata\_dynamic.fact\_table\_column                               |
| reon\_metadata\_dynamic           | attribution\_strategy\_mapping.sql                    | reon.reon\_metadata\_dynamic.attribution\_strategy\_mapping                    |
| reon\_metadata\_dynamic           | org\_dimension\_provider\_mapping.sql                 | reon.reon\_metadata\_dynamic.org\_dimension\_provider\_mapping                 |
| reon\_metadata\_dynamic           | provider\_dimension\_mapping.sql                      | reon.reon\_metadata\_dynamic.provider\_dimension\_mapping                      |
| reon\_metadata\_dynamic           | mongo\_structs.sql                                    | reon.reon\_metadata\_dynamic.mongo\_structs                                    |
| reon\_metadata\_dynamic           | custom\_dimension\_transformation\_output\_column.sql | reon.reon\_metadata\_dynamic.custom\_dimension\_transformation\_output\_column |
| reon\_metadata\_dynamic           | provider\_tables.sql                                  | reon.reon\_metadata\_dynamic.provider\_tables                                  |
| reon\_metadata\_dynamic           | mongo\_source\_columns.sql                            | reon.reon\_metadata\_dynamic.mongo\_source\_columns                            |
| reon\_metadata\_dynamic           | custom\_dimension\_transformation\_input\_table.sql   | reon.reon\_metadata\_dynamic.custom\_dimension\_transformation\_input\_table   |
| reon\_metadata\_dynamic           | scd\_dimension\_columns.sql                           | reon.reon\_metadata\_dynamic.scd\_dimension\_columns                           |
| reon\_metadata\_dynamic           | scopes.sql                                            | reon.reon\_metadata\_dynamic.scopes                                            |
| reon\_metadata\_dynamic           | fact\_table\_standard\_condition.sql                  | reon.reon\_metadata\_dynamic.fact\_table\_standard\_condition                  |
| reon\_metadata\_dynamic           | logical\_view\_column\_definition.sql                 | reon.reon\_metadata\_dynamic.logical\_view\_column\_definition                 |
| reon\_metadata\_dynamic           | organization\_scopes.sql                              | reon.reon\_metadata\_dynamic.organization\_scopes                              |
| reon\_metadata\_dynamic           | dimension.sql                                         | reon.reon\_metadata\_dynamic.dimension                                         |
| reon\_metadata\_dynamic           | fact\_table.sql                                       | reon.reon\_metadata\_dynamic.fact\_table                                       |
| reon\_metadata\_dynamic           | dimension\_table.sql                                  | reon.reon\_metadata\_dynamic.dimension\_table                                  |
| reon\_metadata\_dynamic           | source\_schema\_end\_point\_mapping.sql               | reon.reon\_metadata\_dynamic.source\_schema\_end\_point\_mapping               |
| Logical DB                        | Tables                                                | Path for query                                                                 |
| :---------------------------      | :--------------------------------------------         | :--------------------------------------------------                            |
| reon\_source\_data                | shard\_id\_reon\_keyname\_mapping.sql                 | reon.reon\_source\_data.shard\_id\_reon\_keyname\_mapping                      |
| reon\_source\_data                | shard\_idr\_mapping.sql                               | reon.reon\_source\_data.shard\_idr\_mapping                                    |
| reon\_source\_data                | resource\_sdendpoint\_mapping.sql                     | reon.reon\_source\_data.resource\_sdendpoint\_mapping                          |
| reon\_source\_data                | source\_table.sql                                     | reon.reon\_source\_data.source\_table                                          |
| reon\_source\_data                | incr\_cdm\_table\_master\_time.sql                    | reon.reon\_source\_data.incr\_cdm\_table\_master\_time                         |
| reon\_source\_data                | source\_shard\_info.sql                               | reon.reon\_source\_data.source\_shard\_info                                    |
| reon\_source\_data                | hourly\_table\_master\_time.sql                       | reon.reon\_source\_data.hourly\_table\_master\_time                            |
| reon\_source\_data                | full\_table\_master\_time.sql                         | reon.reon\_source\_data.full\_table\_master\_time                              |
| wfm\_notifications                | email\_templates.sql                                  | reon.wfm\_notifications.email\_templates                                       |
| wfm\_notifications                | alert\_tag\_mapping.sql                               | reon.wfm\_notifications.alert\_tag\_mapping                                    |
| wfm\_notifications                | dag\_timing\_notification\_config.sql                 | reon.wfm\_notifications.dag\_timing\_notification\_config                      |
| wfm\_notifications                | alert\_action\_mapping.sql                            | reon.wfm\_notifications.alert\_action\_mapping                                 |
| wfm\_notifications                | event\_types.sql                                      | reon.wfm\_notifications.event\_types                                           |
| wfm\_notifications                | event\_tags.sql                                       | reon.wfm\_notifications.event\_tags                                            |
| wfm\_notifications                | alerts.sql                                            | reon.wfm\_notifications.alerts                                                 |
| recommender                       | org\_configs.sql                                      | reon.recommender.org\_configs                                                  |
| recommender                       | db\_configs.sql                                       | reon.recommender.db\_configs                                                   |
| reon\_export                      | encryption\_details.sql                               | reon.reon\_export.encryption\_details                                          |
| reon\_export                      | cron.sql                                              | reon.reon\_export.cron                                                         |
| reon\_export                      | partition\_identifiers.sql                            | reon.reon\_export.partition\_identifiers                                       |
| reon\_export                      | job\_filters.sql                                      | reon.reon\_export.job\_filters                                                 |
| reon\_export                      | fraud\_templates.sql                                  | reon.reon\_export.fraud\_templates                                             |
| reon\_export                      | template\_filters.sql                                 | reon.reon\_export.template\_filters                                            |
| reon\_export                      | jobs.sql                                              | reon.reon\_export.jobs                                                         |
| reon\_export                      | job\_measure\_alias.sql                               | reon.reon\_export.job\_measure\_alias                                          |
| reon\_export                      | job\_retriggers.sql                                   | reon.reon\_export.job\_retriggers                                              |
| reon\_export                      | job\_base\_dimension\_alias.sql                       | reon.reon\_export.job\_base\_dimension\_alias                                  |
| reon\_export                      | job\_kpi\_alias.sql                                   | reon.reon\_export.job\_kpi\_alias                                              |
| reon\_export                      | org\_export\_encryption\_register.sql                 | reon.reon\_export.org\_export\_encryption\_register                            |
| reon\_export                      | column\_value\_mapping.sql                            | reon.reon\_export.column\_value\_mapping                                       |
| reon\_export                      | job\_dimension\_alias.sql                             | reon.reon\_export.job\_dimension\_alias                                        |
| reon\_export                      | default\_export\_value.sql                            | reon.reon\_export.default\_export\_value                                       |
| reon\_export                      | job\_executions.sql                                   | reon.reon\_export.job\_executions                                              |
| reon\_export                      | job\_fraud\_alias.sql                                 | reon.reon\_export.job\_fraud\_alias                                            |
| reon\_export                      | fraud\_kpis.sql                                       | reon.reon\_export.fraud\_kpis                                                  |
| reon\_export                      | base\_name.sql                                        | reon.reon\_export.base\_name                                                   |
| reon\_export                      | templates.sql                                         | reon.reon\_export.templates                                                    |
| reon\_export                      | dimensions.sql                                        | reon.reon\_export.dimensions                                                   |
| reon\_export                      | job\_groups.sql                                       | reon.reon\_export.job\_groups                                                  |
| reon\_export                      | kpis.sql                                              | reon.reon\_export.kpis                                                         |
| reon\_metadata\_external          | entity\_checkpoint\_tracker.sql                       | reon.reon\_metadata\_external.entity\_checkpoint\_tracker                      |
| reon\_metadata\_external          | multi\_org\_relations.sql                             | reon.reon\_metadata\_external.multi\_org\_relations                            |
| reon\_metadata\_external          | pii\_masked\_column.sql                               | reon.reon\_metadata\_external.pii\_masked\_column                              |
| reon\_metadata\_external          | source\_data\_dump.sql                                | reon.reon\_metadata\_external.source\_data\_dump                               |
| reon\_metadata\_external          | entity\_attributes.sql                                | reon.reon\_metadata\_external.entity\_attributes                               |
| reon\_metadata\_external          | dimension\_groups.sql                                 | reon.reon\_metadata\_external.dimension\_groups                                |
| reon\_metadata\_external          | custom\_table\_fk.sql                                 | reon.reon\_metadata\_external.custom\_table\_fk                                |
| reon\_metadata\_external          | core\_onboarding\_run\_details.sql                    | reon.reon\_metadata\_external.core\_onboarding\_run\_details                   |
| reon\_metadata\_external          | external\_flat\_dimension\_columns.sql                | reon.reon\_metadata\_external.external\_flat\_dimension\_columns               |
| reon\_metadata\_external          | onboarding\_run\_details.sql                          | reon.reon\_metadata\_external.onboarding\_run\_details                         |
| reon\_metadata\_external          | onboarding\_audit\_log.sql                            | reon.reon\_metadata\_external.onboarding\_audit\_log                           |
| reon\_metadata\_external          | kpi\_target.sql                                       | reon.reon\_metadata\_external.kpi\_target                                      |
| reon\_metadata\_external          | banding\_range.sql                                    | reon.reon\_metadata\_external.banding\_range                                   |
| reon\_metadata\_external          | kpi.sql                                               | reon.reon\_metadata\_external.kpi                                              |
| reon\_metadata\_external          | custom\_table.sql                                     | reon.reon\_metadata\_external.custom\_table                                    |
| reon\_metadata\_external          | config\_key\_values.sql                               | reon.reon\_metadata\_external.config\_key\_values                              |
| Logical DB                        | Tables                                                | Path for query                                                                 |
| :---------------------------      | :--------------------------------------------         | :--------------------------------------------------                            |
| reon\_metadata\_external          | custom\_field\_transformation.sql                     | reon.reon\_metadata\_external.custom\_field\_transformation                    |
| reon\_metadata\_external          | core\_onboarding\_audit\_log.sql                      | reon.reon\_metadata\_external.core\_onboarding\_audit\_log                     |
| reon\_metadata\_external          | kpi\_merged\_data\_location.sql                       | reon.reon\_metadata\_external.kpi\_merged\_data\_location                      |
| reon\_metadata\_external          | temp\_confs.sql                                       | reon.reon\_metadata\_external.temp\_confs                                      |
| reon\_metadata\_external          | external\_dimension\_groups.sql                       | reon.reon\_metadata\_external.external\_dimension\_groups                      |
| reon\_metadata\_external          | banding.sql                                           | reon.reon\_metadata\_external.banding                                          |
| reon\_metadata\_external          | pii\_request\_log.sql                                 | reon.reon\_metadata\_external.pii\_request\_log                                |
| reon\_metadata\_external          | kpi\_group\_dimension.sql                             | reon.reon\_metadata\_external.kpi\_group\_dimension                            |
| reon\_metadata\_external          | config\_keys.sql                                      | reon.reon\_metadata\_external.config\_keys                                     |
| reon\_metadata\_external          | hierarchical\_dim\_level\_updates.sql                 | reon.reon\_metadata\_external.hierarchical\_dim\_level\_updates                |
| reon\_metadata\_external          | custom\_table\_column.sql                             | reon.reon\_metadata\_external.custom\_table\_column                            |
| reon\_metadata\_external          | kpi\_target\_data\_location.sql                       | reon.reon\_metadata\_external.kpi\_target\_data\_location                      |
| external\_fact\_meta              | external\_dimension\_columns.sql                      | reon.external\_fact\_meta.external\_dimension\_columns                         |
| external\_fact\_meta              | ftp\_config.sql                                       | reon.external\_fact\_meta.ftp\_config                                          |
| external\_fact\_meta              | behavioural\_event\_meta.sql                          | reon.external\_fact\_meta.behavioural\_event\_meta                             |
| external\_fact\_meta              | org\_details.sql                                      | reon.external\_fact\_meta.org\_details                                         |
| external\_fact\_meta              | external\_dimension.sql                               | reon.external\_fact\_meta.external\_dimension                                  |
| external\_fact\_meta              | fact\_export.sql                                      | reon.external\_fact\_meta.fact\_export                                         |
| external\_fact\_meta              | external\_dimension\_data\_location.sql               | reon.external\_fact\_meta.external\_dimension\_data\_location                  |
| external\_fact\_meta              | behavioural\_event\_field.sql                         | reon.external\_fact\_meta.behavioural\_event\_field                            |
| external\_fact\_meta              | fact\_ftp\_config.sql                                 | reon.external\_fact\_meta.fact\_ftp\_config                                    |
| external\_fact\_meta              | external\_fact\_columns.sql                           | reon.external\_fact\_meta.external\_fact\_columns                              |
| external\_fact\_meta              | fact\_version\_vs\_run\_time.sql                      | reon.external\_fact\_meta.fact\_version\_vs\_run\_time                         |
| external\_fact\_meta              | external\_measure\_source\_column\_mapping.sql        | reon.external\_fact\_meta.external\_measure\_source\_column\_mapping           |
| external\_fact\_meta              | external\_dim\_link.sql                               | reon.external\_fact\_meta.external\_dim\_link                                  |
| external\_fact\_meta              | external\_fact\_data\_location.sql                    | reon.external\_fact\_meta.external\_fact\_data\_location                       |
| external\_fact\_meta              | external\_fact\_source\_detail.sql                    | reon.external\_fact\_meta.external\_fact\_source\_detail                       |
| external\_fact\_meta              | external\_fact\_audit\_log.sql                        | reon.external\_fact\_meta.external\_fact\_audit\_log                           |
| external\_fact\_meta              | file\_template\_details.sql                           | reon.external\_fact\_meta.file\_template\_details                              |
| external\_fact\_meta              | external\_fact.sql                                    | reon.external\_fact\_meta.external\_fact                                       |
| external\_fact\_meta              | external\_dimension\_source\_column\_mapping.sql      | reon.external\_fact\_meta.external\_dimension\_source\_column\_mapping         |
| reon\_data\_validation            | dim\_pk\_details.sql                                  | reon.reon\_data\_validation.dim\_pk\_details                                   |
| reon\_data\_validation            | kpi\_failure\_details.sql                             | reon.reon\_data\_validation.kpi\_failure\_details                              |
| reon\_data\_validation            | cdm\_failure\_details.sql                             | reon.reon\_data\_validation.cdm\_failure\_details                              |
| reon\_data\_validation            | fact\_pk\_details.sql                                 | reon.reon\_data\_validation.fact\_pk\_details                                  |
| reon\_data\_validation            | kpi\_failure\_counts.sql                              | reon.reon\_data\_validation.kpi\_failure\_counts                               |
| reon\_data\_validation            | pk\_validation.sql                                    | reon.reon\_data\_validation.pk\_validation                                     |
| emigran                           | versions.sql                                          | reon.emigran.versions                                                          |
| dimension\_values\_external\_src  | temp\_table.sql                                       | reon.dimension\_values\_external\_src.temp\_table                              |
| external\_dim\_val\_std           | temp\_table.sql                                       | reon.external\_dim\_val\_std.temp\_table                                       |
| Logical DB                        | Tables                                                | Path for query                                                                 |
| :---------------------------      | :--------------------------------------------         | :--------------------------------------------------                            |
| dimension\_values\_std            | nps\_score\_64\_val.sql                               | reon.dimension\_values\_std.nps\_score\_64\_val                                |
| dimension\_values\_std            | source\_val.sql                                       | reon.dimension\_values\_std.source\_val                                        |
| dimension\_values\_std            | slab\_change\_action\_314\_val.sql                    | reon.dimension\_values\_std.slab\_change\_action\_314\_val                     |
| dimension\_values\_std            | credit\_usage\_val.sql                                | reon.dimension\_values\_std.credit\_usage\_val                                 |
| dimension\_values\_std            | nps\_score\_val.sql                                   | reon.dimension\_values\_std.nps\_score\_val                                    |
| dimension\_values\_std            | bill\_type\_89\_val.sql                               | reon.dimension\_values\_std.bill\_type\_89\_val                                |
| dimension\_values\_std            | points\_event\_type\_val.sql                          | reon.dimension\_values\_std.points\_event\_type\_val                           |
| dimension\_values\_std            | nsadmin\_priority\_36\_val.sql                        | reon.dimension\_values\_std.nsadmin\_priority\_36\_val                         |
| dimension\_values\_std            | cvp\_v2\_upper\_clothes\_texture\_208\_val.sql        | reon.dimension\_values\_std.cvp\_v2\_upper\_clothes\_texture\_208\_val         |
| dimension\_values\_std            | communication\_channel\_31\_val.sql                   | reon.dimension\_values\_std.communication\_channel\_31\_val                    |
| dimension\_values\_std            | found\_product\_207\_val.sql                          | reon.dimension\_values\_std.found\_product\_207\_val                           |
| dimension\_values\_std            | fraud\_status\_val.sql                                | reon.dimension\_values\_std.fraud\_status\_val                                 |
| dimension\_values\_std            | mongo\_event\_name\_58\_val.sql                       | reon.dimension\_values\_std.mongo\_event\_name\_58\_val                        |
| dimension\_values\_std            | credit\_usage\_245\_val.sql                           | reon.dimension\_values\_std.credit\_usage\_245\_val                            |
| dimension\_values\_std            | cvp\_v2\_upper\_clothes\_primary\_color\_val.sql      | reon.dimension\_values\_std.cvp\_v2\_upper\_clothes\_primary\_color\_val       |
| dimension\_values\_std            | group\_type\_34\_val.sql                              | reon.dimension\_values\_std.group\_type\_34\_val                               |
| dimension\_values\_std            | source\_type\_val.sql                                 | reon.dimension\_values\_std.source\_type\_val                                  |
| dimension\_values\_std            | entity\_type\_val.sql                                 | reon.dimension\_values\_std.entity\_type\_val                                  |
| dimension\_values\_std            | redeemed\_status\_22\_val.sql                         | reon.dimension\_values\_std.redeemed\_status\_22\_val                          |
| dimension\_values\_std            | lead\_event\_type\_val.sql                            | reon.dimension\_values\_std.lead\_event\_type\_val                             |
| dimension\_values\_std            | cvp\_v2\_lower\_clothes\_class\_val.sql               | reon.dimension\_values\_std.cvp\_v2\_lower\_clothes\_class\_val                |
| dimension\_values\_std            | campaign\_attribution\_status\_val.sql                | reon.dimension\_values\_std.campaign\_attribution\_status\_val                 |
| dimension\_values\_std            | active\_status\_103\_val.sql                          | reon.dimension\_values\_std.active\_status\_103\_val                           |
| dimension\_values\_std            | lead\_type\_val.sql                                   | reon.dimension\_values\_std.lead\_type\_val                                    |
| dimension\_values\_std            | communication\_type\_30\_val.sql                      | reon.dimension\_values\_std.communication\_type\_30\_val                       |
| dimension\_values\_std            | points\_event\_type\_16\_val.sql                      | reon.dimension\_values\_std.points\_event\_type\_16\_val                       |
| dimension\_values\_std            | optin\_strategy\_257\_val.sql                         | reon.dimension\_values\_std.optin\_strategy\_257\_val                          |
| dimension\_values\_std            | entry\_type\_111\_val.sql                             | reon.dimension\_values\_std.entry\_type\_111\_val                              |
| dimension\_values\_std            | reported\_by\_val.sql                                 | reon.dimension\_values\_std.reported\_by\_val                                  |
| dimension\_values\_std            | mongo\_event\_name\_val.sql                           | reon.dimension\_values\_std.mongo\_event\_name\_val                            |
| dimension\_values\_std            | cvp\_v2\_lower\_clothes\_texture\_val.sql             | reon.dimension\_values\_std.cvp\_v2\_lower\_clothes\_texture\_val              |
| dimension\_values\_std            | ota\_issuer\_bank\_val.sql                            | reon.dimension\_values\_std.ota\_issuer\_bank\_val                             |
| dimension\_values\_std            | deduction\_type\_val.sql                              | reon.dimension\_values\_std.deduction\_type\_val                               |
| dimension\_values\_std            | source\_profile\_type\_193\_val.sql                   | reon.dimension\_values\_std.source\_profile\_type\_193\_val                    |
| dimension\_values\_std            | campaign\_delivery\_sub\_status\_val.sql              | reon.dimension\_values\_std.campaign\_delivery\_sub\_status\_val               |
| dimension\_values\_std            | cart\_promotion\_redemption\_type\_val.sql            | reon.dimension\_values\_std.cart\_promotion\_redemption\_type\_val             |
| dimension\_values\_std            | ndnc\_status\_29\_val.sql                             | reon.dimension\_values\_std.ndnc\_status\_29\_val                              |
| dimension\_values\_std            | upgrade\_event\_type\_val.sql                         | reon.dimension\_values\_std.upgrade\_event\_type\_val                          |
| dimension\_values\_std            | deduction\_type\_20\_val.sql                          | reon.dimension\_values\_std.deduction\_type\_20\_val                           |
| dimension\_values\_std            | day\_type\_val.sql                                    | reon.dimension\_values\_std.day\_type\_val                                     |
| dimension\_values\_std            | profile\_event\_val.sql                               | reon.dimension\_values\_std.profile\_event\_val                                |
| dimension\_values\_std            | mongo\_event\_link\_type\_61\_val.sql                 | reon.dimension\_values\_std.mongo\_event\_link\_type\_61\_val                  |
| dimension\_values\_std            | campaign\_delivery\_sub\_status\_252\_val.sql         | reon.dimension\_values\_std.campaign\_delivery\_sub\_status\_252\_val          |
| Logical DB                        | Tables                                                | Path for query                                                                 |
| :---------------------------      | :--------------------------------------------         | :--------------------------------------------------                            |
| dimension\_values\_std            | cart\_promotion\_activity\_type\_val.sql              | reon.dimension\_values\_std.cart\_promotion\_activity\_type\_val               |
| dimension\_values\_std            | entity\_type\_44\_val.sql                             | reon.dimension\_values\_std.entity\_type\_44\_val                              |
| dimension\_values\_std            | date\_1\_val.sql                                      | reon.dimension\_values\_std.date\_1\_val                                       |
| dimension\_values\_std            | lead\_event\_type\_121\_val.sql                       | reon.dimension\_values\_std.lead\_event\_type\_121\_val                        |
| dimension\_values\_std            | communication\_channel\_val.sql                       | reon.dimension\_values\_std.communication\_channel\_val                        |
| dimension\_values\_std            | leads\_status\_val.sql                                | reon.dimension\_values\_std.leads\_status\_val                                 |
| dimension\_values\_std            | lapse\_status\_val.sql                                | reon.dimension\_values\_std.lapse\_status\_val                                 |
| dimension\_values\_std            | ota\_active\_status\_val.sql                          | reon.dimension\_values\_std.ota\_active\_status\_val                           |
| dimension\_values\_std            | direction\_46\_val.sql                                | reon.dimension\_values\_std.direction\_46\_val                                 |
| dimension\_values\_std            | time\_2\_val.sql                                      | reon.dimension\_values\_std.time\_2\_val                                       |
| dimension\_values\_std            | walkin\_type\_val.sql                                 | reon.dimension\_values\_std.walkin\_type\_val                                  |
| dimension\_values\_std            | lapse\_status\_26\_val.sql                            | reon.dimension\_values\_std.lapse\_status\_26\_val                             |
| dimension\_values\_std            | loyalty\_type\_val.sql                                | reon.dimension\_values\_std.loyalty\_type\_val                                 |
| dimension\_values\_std            | credit\_type\_162\_val.sql                            | reon.dimension\_values\_std.credit\_type\_162\_val                             |
| dimension\_values\_std            | cvp\_v2\_gender\_val.sql                              | reon.dimension\_values\_std.cvp\_v2\_gender\_val                               |
| dimension\_values\_std            | outlier\_status\_val.sql                              | reon.dimension\_values\_std.outlier\_status\_val                               |
| dimension\_values\_std            | membership\_history\_action\_313\_val.sql             | reon.dimension\_values\_std.membership\_history\_action\_313\_val              |
| dimension\_values\_std            | delivery\_status\_32\_val.sql                         | reon.dimension\_values\_std.delivery\_status\_32\_val                          |
| dimension\_values\_std            | last\_slab\_action\_val.sql                           | reon.dimension\_values\_std.last\_slab\_action\_val                            |
| dimension\_values\_std            | fraud\_status\_23\_val.sql                            | reon.dimension\_values\_std.fraud\_status\_23\_val                             |
| dimension\_values\_std            | cart\_promotion\_activity\_type\_305\_val.sql         | reon.dimension\_values\_std.cart\_promotion\_activity\_type\_305\_val          |
| dimension\_values\_std            | return\_type\_val.sql                                 | reon.dimension\_values\_std.return\_type\_val                                  |
| dimension\_values\_std            | coupon\_redemption\_active\_val.sql                   | reon.dimension\_values\_std.coupon\_redemption\_active\_val                    |
| dimension\_values\_std            | mongo\_event\_button\_type\_val.sql                   | reon.dimension\_values\_std.mongo\_event\_button\_type\_val                    |
| dimension\_values\_std            | booking\_type\_49\_val.sql                            | reon.dimension\_values\_std.booking\_type\_49\_val                             |
| dimension\_values\_std            | nsadmin\_priority\_val.sql                            | reon.dimension\_values\_std.nsadmin\_priority\_val                             |
| dimension\_values\_std            | cvp\_v2\_event\_type\_val.sql                         | reon.dimension\_values\_std.cvp\_v2\_event\_type\_val                          |
| dimension\_values\_std            | internal\_status\_val.sql                             | reon.dimension\_values\_std.internal\_status\_val                              |
| dimension\_values\_std            | campaign\_delivery\_status\_val.sql                   | reon.dimension\_values\_std.campaign\_delivery\_status\_val                    |
| dimension\_values\_std            | event\_message\_direction\_val.sql                    | reon.dimension\_values\_std.event\_message\_direction\_val                     |
| dimension\_values\_std            | repeat\_status\_val.sql                               | reon.dimension\_values\_std.repeat\_status\_val                                |
| dimension\_values\_std            | mongo\_event\_button\_state\_62\_val.sql              | reon.dimension\_values\_std.mongo\_event\_button\_state\_62\_val               |
| dimension\_values\_std            | leads\_status\_171\_val.sql                           | reon.dimension\_values\_std.leads\_status\_171\_val                            |
| dimension\_values\_std            | points\_awarded\_type\_17\_val.sql                    | reon.dimension\_values\_std.points\_awarded\_type\_17\_val                     |
| dimension\_values\_std            | merge\_status\_val.sql                                | reon.dimension\_values\_std.merge\_status\_val                                 |
| dimension\_values\_std            | reported\_by\_102\_val.sql                            | reon.dimension\_values\_std.reported\_by\_102\_val                             |
| dimension\_values\_std            | time\_preference\_50\_val.sql                         | reon.dimension\_values\_std.time\_preference\_50\_val                          |
| dimension\_values\_std            | coupon\_issual\_type\_val.sql                         | reon.dimension\_values\_std.coupon\_issual\_type\_val                          |
| dimension\_values\_std            | mongo\_event\_source\_59\_val.sql                     | reon.dimension\_values\_std.mongo\_event\_source\_59\_val                      |
| dimension\_values\_std            | event\_message\_direction\_70\_val.sql                | reon.dimension\_values\_std.event\_message\_direction\_70\_val                 |
| dimension\_values\_std            | registration\_state\_73\_val.sql                      | reon.dimension\_values\_std.registration\_state\_73\_val                       |
| dimension\_values\_std            | cart\_promotion\_activation\_status\_val.sql          | reon.dimension\_values\_std.cart\_promotion\_activation\_status\_val           |
| dimension\_values\_std            | cvp\_v2\_gender\_195\_val.sql                         | reon.dimension\_values\_std.cvp\_v2\_gender\_195\_val                          |
| dimension\_values\_std            | group\_type\_val.sql                                  | reon.dimension\_values\_std.group\_type\_val                                   |
| dimension\_values\_std            | cvp\_v2\_lower\_clothes\_texture\_209\_val.sql        | reon.dimension\_values\_std.cvp\_v2\_lower\_clothes\_texture\_209\_val         |
| dimension\_values\_std            | cvp\_v2\_lower\_clothes\_primary\_color\_val.sql      | reon.dimension\_values\_std.cvp\_v2\_lower\_clothes\_primary\_color\_val       |
| dimension\_values\_std            | mongo\_event\_button\_type\_60\_val.sql               | reon.dimension\_values\_std.mongo\_event\_button\_type\_60\_val                |
| Logical DB                        | Tables                                                | Path for query                                                                 |
| :---------------------------      | :--------------------------------------------         | :--------------------------------------------------                            |
| dimension\_values\_std            | loyalty\_eligibility\_val.sql                         | reon.dimension\_values\_std.loyalty\_eligibility\_val                          |
| dimension\_values\_std            | day\_type\_51\_val.sql                                | reon.dimension\_values\_std.day\_type\_51\_val                                 |
| dimension\_values\_std            | ota\_payment\_card\_type\_val.sql                     | reon.dimension\_values\_std.ota\_payment\_card\_type\_val                      |
| dimension\_values\_std            | cart\_promotion\_activation\_status\_306\_val.sql     | reon.dimension\_values\_std.cart\_promotion\_activation\_status\_306\_val      |
| dimension\_values\_std            | unsubscription\_status\_41\_val.sql                   | reon.dimension\_values\_std.unsubscription\_status\_41\_val                    |
| dimension\_values\_std            | line\_item\_type\_val.sql                             | reon.dimension\_values\_std.line\_item\_type\_val                              |
| dimension\_values\_std            | found\_product\_val.sql                               | reon.dimension\_values\_std.found\_product\_val                                |
| dimension\_values\_std            | outlier\_status\_6\_val.sql                           | reon.dimension\_values\_std.outlier\_status\_6\_val                            |
| dimension\_values\_std            | points\_awarded\_type\_val.sql                        | reon.dimension\_values\_std.points\_awarded\_type\_val                         |
| dimension\_values\_std            | redeemable\_type\_69\_val.sql                         | reon.dimension\_values\_std.redeemable\_type\_69\_val                          |
| dimension\_values\_std            | serial\_number\_val.sql                               | reon.dimension\_values\_std.serial\_number\_val                                |
| dimension\_values\_std            | slab\_change\_source\_val.sql                         | reon.dimension\_values\_std.slab\_change\_source\_val                          |
| dimension\_values\_std            | time\_val.sql                                         | reon.dimension\_values\_std.time\_val                                          |
| dimension\_values\_std            | return\_type\_12\_val.sql                             | reon.dimension\_values\_std.return\_type\_12\_val                              |
| dimension\_values\_std            | issue\_type\_100\_val.sql                             | reon.dimension\_values\_std.issue\_type\_100\_val                              |
| dimension\_values\_std            | source\_profile\_type\_val.sql                        | reon.dimension\_values\_std.source\_profile\_type\_val                         |
| dimension\_values\_std            | redemption\_type\_300\_val.sql                        | reon.dimension\_values\_std.redemption\_type\_300\_val                         |
| dimension\_values\_std            | priority\_val.sql                                     | reon.dimension\_values\_std.priority\_val                                      |
| dimension\_values\_std            | cvp\_v2\_visitor\_type\_199\_val.sql                  | reon.dimension\_values\_std.cvp\_v2\_visitor\_type\_199\_val                   |
| dimension\_values\_std            | mongo\_event\_link\_type\_val.sql                     | reon.dimension\_values\_std.mongo\_event\_link\_type\_val                      |
| dimension\_values\_std            | redeemable\_type\_val.sql                             | reon.dimension\_values\_std.redeemable\_type\_val                              |
| dimension\_values\_std            | communication\_client\_249\_val.sql                   | reon.dimension\_values\_std.communication\_client\_249\_val                    |
| dimension\_values\_std            | experience\_val.sql                                   | reon.dimension\_values\_std.experience\_val                                    |
| dimension\_values\_std            | active\_status\_val.sql                               | reon.dimension\_values\_std.active\_status\_val                                |
| dimension\_values\_std            | priority\_258\_val.sql                                | reon.dimension\_values\_std.priority\_258\_val                                 |
| dimension\_values\_std            | time\_preference\_val.sql                             | reon.dimension\_values\_std.time\_preference\_val                              |
| dimension\_values\_std            | credit\_type\_val.sql                                 | reon.dimension\_values\_std.credit\_type\_val                                  |
| dimension\_values\_std            | membership\_history\_action\_val.sql                  | reon.dimension\_values\_std.membership\_history\_action\_val                   |
| dimension\_values\_std            | optin\_status\_val.sql                                | reon.dimension\_values\_std.optin\_status\_val                                 |
| dimension\_values\_std            | loyalty\_type\_11\_val.sql                            | reon.dimension\_values\_std.loyalty\_type\_11\_val                             |
| dimension\_values\_std            | delayed\_delivery\_val.sql                            | reon.dimension\_values\_std.delayed\_delivery\_val                             |
| dimension\_values\_std            | upgrade\_event\_type\_113\_val.sql                    | reon.dimension\_values\_std.upgrade\_event\_type\_113\_val                     |
| dimension\_values\_std            | registration\_entity\_type\_val.sql                   | reon.dimension\_values\_std.registration\_entity\_type\_val                    |
| dimension\_values\_std            | communication\_type\_val.sql                          | reon.dimension\_values\_std.communication\_type\_val                           |
| dimension\_values\_std            | redeemed\_status\_val.sql                             | reon.dimension\_values\_std.redeemed\_status\_val                              |
| dimension\_values\_std            | cvp\_v2\_upper\_clothes\_class\_val.sql               | reon.dimension\_values\_std.cvp\_v2\_upper\_clothes\_class\_val                |
| dimension\_values\_std            | cvp\_v2\_upper\_clothes\_primary\_color\_210\_val.sql | reon.dimension\_values\_std.cvp\_v2\_upper\_clothes\_primary\_color\_210\_val  |
| dimension\_values\_std            | source\_312\_val.sql                                  | reon.dimension\_values\_std.source\_312\_val                                   |
| dimension\_values\_std            | campaign\_delivery\_status\_112\_val.sql              | reon.dimension\_values\_std.campaign\_delivery\_status\_112\_val               |
| dimension\_values\_std            | unsubscription\_status\_val.sql                       | reon.dimension\_values\_std.unsubscription\_status\_val                        |
| dimension\_values\_std            | optin\_strategy\_val.sql                              | reon.dimension\_values\_std.optin\_strategy\_val                               |
| dimension\_values\_std            | ndnc\_status\_val.sql                                 | reon.dimension\_values\_std.ndnc\_status\_val                                  |
| dimension\_values\_std            | mongo\_event\_button\_state\_val.sql                  | reon.dimension\_values\_std.mongo\_event\_button\_state\_val                   |
| dimension\_values\_std            | credit\_event\_type\_242\_val.sql                     | reon.dimension\_values\_std.credit\_event\_type\_242\_val                      |
| dimension\_values\_std            | delivery\_channel\_259\_val.sql                       | reon.dimension\_values\_std.delivery\_channel\_259\_val                        |
| dimension\_values\_std            | coupon\_issual\_type\_13\_val.sql                     | reon.dimension\_values\_std.coupon\_issual\_type\_13\_val                      |
| dimension\_values\_std            | scd\_type\_val.sql                                    | reon.dimension\_values\_std.scd\_type\_val                                     |
| dimension\_values\_std            | order\_channel\_val.sql                               | reon.dimension\_values\_std.order\_channel\_val                                |
| dimension\_values\_std            | walkin\_type\_43\_val.sql                             | reon.dimension\_values\_std.walkin\_type\_43\_val                              |
| Logical DB                        | Tables                                                | Path for query                                                                 |
| :---------------------------      | :--------------------------------------------         | :--------------------------------------------------                            |
| dimension\_values\_std            | repeat\_status\_7\_val.sql                            | reon.dimension\_values\_std.repeat\_status\_7\_val                             |
| dimension\_values\_std            | lead\_type\_123\_val.sql                              | reon.dimension\_values\_std.lead\_type\_123\_val                               |
| dimension\_values\_std            | slab\_change\_action\_val.sql                         | reon.dimension\_values\_std.slab\_change\_action\_val                          |
| dimension\_values\_std            | line\_item\_type\_48\_val.sql                         | reon.dimension\_values\_std.line\_item\_type\_48\_val                          |
| dimension\_values\_std            | delivery\_status\_val.sql                             | reon.dimension\_values\_std.delivery\_status\_val                              |
| dimension\_values\_std            | direction\_val.sql                                    | reon.dimension\_values\_std.direction\_val                                     |
| dimension\_values\_std            | last\_slab\_action\_311\_val.sql                      | reon.dimension\_values\_std.last\_slab\_action\_311\_val                       |
| dimension\_values\_std            | cvp\_v2\_lower\_clothes\_class\_196\_val.sql          | reon.dimension\_values\_std.cvp\_v2\_lower\_clothes\_class\_196\_val           |
| dimension\_values\_std            | booking\_type\_val.sql                                | reon.dimension\_values\_std.booking\_type\_val                                 |
| dimension\_values\_std            | optin\_status\_28\_val.sql                            | reon.dimension\_values\_std.optin\_status\_28\_val                             |
| dimension\_values\_std            | cvp\_v2\_lower\_clothes\_primary\_color\_211\_val.sql | reon.dimension\_values\_std.cvp\_v2\_lower\_clothes\_primary\_color\_211\_val  |
| dimension\_values\_std            | merge\_status\_24\_val.sql                            | reon.dimension\_values\_std.merge\_status\_24\_val                             |
| dimension\_values\_std            | cvp\_v2\_event\_type\_198\_val.sql                    | reon.dimension\_values\_std.cvp\_v2\_event\_type\_198\_val                     |
| dimension\_values\_std            | cvp\_v2\_upper\_clothes\_class\_197\_val.sql          | reon.dimension\_values\_std.cvp\_v2\_upper\_clothes\_class\_197\_val           |
| dimension\_values\_std            | bill\_type\_val.sql                                   | reon.dimension\_values\_std.bill\_type\_val                                    |
| dimension\_values\_std            | internal\_status\_38\_val.sql                         | reon.dimension\_values\_std.internal\_status\_38\_val                          |
| dimension\_values\_std            | delayed\_delivery\_212\_val.sql                       | reon.dimension\_values\_std.delayed\_delivery\_212\_val                        |
| dimension\_values\_std            | date\_val.sql                                         | reon.dimension\_values\_std.date\_val                                          |
| dimension\_values\_std            | entry\_type\_val.sql                                  | reon.dimension\_values\_std.entry\_type\_val                                   |
| dimension\_values\_std            | credit\_event\_type\_val.sql                          | reon.dimension\_values\_std.credit\_event\_type\_val                           |
| dimension\_values\_std            | registration\_state\_val.sql                          | reon.dimension\_values\_std.registration\_state\_val                           |
| dimension\_values\_std            | redemption\_type\_val.sql                             | reon.dimension\_values\_std.redemption\_type\_val                              |
| dimension\_values\_std            | group\_size\_val.sql                                  | reon.dimension\_values\_std.group\_size\_val                                   |
| dimension\_values\_std            | order\_channel\_52\_val.sql                           | reon.dimension\_values\_std.order\_channel\_52\_val                            |
| dimension\_values\_std            | registration\_entity\_type\_72\_val.sql               | reon.dimension\_values\_std.registration\_entity\_type\_72\_val                |
| dimension\_values\_std            | membership\_type\_val.sql                             | reon.dimension\_values\_std.membership\_type\_val                              |
| dimension\_values\_std            | membership\_type\_21\_val.sql                         | reon.dimension\_values\_std.membership\_type\_21\_val                          |
| dimension\_values\_std            | delivery\_channel\_val.sql                            | reon.dimension\_values\_std.delivery\_channel\_val                             |
| dimension\_values\_std            | cvp\_v2\_upper\_clothes\_texture\_val.sql             | reon.dimension\_values\_std.cvp\_v2\_upper\_clothes\_texture\_val              |
| dimension\_values\_std            | mongo\_event\_source\_val.sql                         | reon.dimension\_values\_std.mongo\_event\_source\_val                          |
| dimension\_values\_std            | slab\_change\_source\_315\_val.sql                    | reon.dimension\_values\_std.slab\_change\_source\_315\_val                     |
| dimension\_values\_std            | cart\_promotion\_redemption\_type\_307\_val.sql       | reon.dimension\_values\_std.cart\_promotion\_redemption\_type\_307\_val        |
| dimension\_values\_std            | source\_type\_25\_val.sql                             | reon.dimension\_values\_std.source\_type\_25\_val                              |
| dimension\_values\_std            | profile\_event\_53\_val.sql                           | reon.dimension\_values\_std.profile\_event\_53\_val                            |
| dimension\_values\_std            | experience\_206\_val.sql                              | reon.dimension\_values\_std.experience\_206\_val                               |
| dimension\_values\_std            | issue\_type\_val.sql                                  | reon.dimension\_values\_std.issue\_type\_val                                   |
| dimension\_values\_std            | communication\_client\_val.sql                        | reon.dimension\_values\_std.communication\_client\_val                         |
| dimension\_values\_std            | cvp\_v2\_visitor\_type\_val.sql                       | reon.dimension\_values\_std.cvp\_v2\_visitor\_type\_val                        |
| dimension\_values\_std            | scd\_type\_55\_val.sql                                | reon.dimension\_values\_std.scd\_type\_55\_val                                 |
| dimension\_values\_std            | ota\_txn\_status\_val.sql                             | reon.dimension\_values\_std.ota\_txn\_status\_val                              |
| dimension\_values\_std            | group\_size\_47\_val.sql                              | reon.dimension\_values\_std.group\_size\_47\_val                               |
| reon\_data\_stats                 | fact\_etl\_data\_stats.sql                            | reon.reon\_data\_stats.fact\_etl\_data\_stats                                  |
| export                            | job\_logs.sql                                         | reon.export.job\_logs                                                          |
| export                            | export\_profiles.sql                                  | reon.export.export\_profiles                                                   |
| export                            | temp\_clean.sql                                       | reon.export.temp\_clean                                                        |
| export                            | jobs.sql                                              | reon.export.jobs                                                               |
| export                            | job\_status\_logs.sql                                 | reon.export.job\_status\_logs                                                  |
| export                            | export\_profile\_fields.sql                           | reon.export.export\_profile\_fields                                            |
| export                            | group\_export\_mapping.sql                            | reon.export.group\_export\_mapping                                             |
| export                            | filter\_export\_mapping.sql                           | reon.export.filter\_export\_mapping                                            |
| export                            | scheduler\_tasks.sql                                  | reon.export.scheduler\_tasks                                                   |
| export                            | templates.sql                                         | reon.export.templates                                                          |
| export                            | queued\_jobs.sql                                      | reon.export.queued\_jobs                                                       |
| export                            | export\_configs.sql                                   | reon.export.export\_configs                                                    |
| export                            | selection\_filter.sql                                 | reon.export.selection\_filter                                                  |
| export                            | template\_scheduler\_mapping.sql                      | reon.export.template\_scheduler\_mapping                                       |
| export                            | export\_requests.sql                                  | reon.export.export\_requests                                                   |
| Logical DB                        | Tables                                                | Path for query                                                                 |
| :-------------------------------- | :--------------------------------------------         | :-----------------------------------------------------                         |
| compute\_engine\_recommender      | test\_control\_config.sql                             | reon.compute\_engine\_recommender.test\_control\_config                        |
| compute\_engine\_recommender      | channel\_category\_mapping.sql                        | reon.compute\_engine\_recommender.channel\_category\_mapping                   |
| compute\_engine\_recommender      | category.sql                                          | reon.compute\_engine\_recommender.category                                     |
| compute\_engine\_recommender      | model\_type\_intent\_mapping.sql                      | reon.compute\_engine\_recommender.model\_type\_intent\_mapping                 |
| compute\_engine\_recommender      | channels.sql                                          | reon.compute\_engine\_recommender.channels                                     |
| compute\_engine\_recommender      | intent.sql                                            | reon.compute\_engine\_recommender.intent                                       |
| dimension\_attribute\_values      | temp\_table.sql                                       | reon.dimension\_attribute\_values.temp\_table                                  |
| aira                              | insightTest.sql                                       | reon.aira.insightTest                                                          |
| aira                              | user\_permissions.sql                                 | reon.aira.user\_permissions                                                    |
| dimension\_values\_src\_defined   | temp\_table.sql                                       | reon.dimension\_values\_src\_defined.temp\_table                               |
| reon\_pii\_config                 | dbs\_cluster\_config.sql                              | reon.reon\_pii\_config.dbs\_cluster\_config                                    |
| reon\_pii\_config                 | pii\_enabled\_org.sql                                 | reon.reon\_pii\_config.pii\_enabled\_org                                       |
| reon\_pii\_config                 | global\_pii\_column\_config.sql                       | reon.reon\_pii\_config.global\_pii\_column\_config                             |
| reon\_pii\_config                 | org\_pii\_column\_config.sql                          | reon.reon\_pii\_config.org\_pii\_column\_config                                |
| reon\_pii\_config                 | pii\_disable\_override.sql                            | reon.reon\_pii\_config.pii\_disable\_override                                  |
| reon\_data\_location\_info        | archiver\_namespace.sql                               | reon.reon\_data\_location\_info.archiver\_namespace                            |
| reon\_data\_location\_info        | data\_location\_source.sql                            | reon.reon\_data\_location\_info.data\_location\_source                         |
| reon\_data\_location\_info        | data\_location\_custom\_table.sql                     | reon.reon\_data\_location\_info.data\_location\_custom\_table                  |
| reon\_data\_location\_info        | data\_location\_dimension\_attr.sql                   | reon.reon\_data\_location\_info.data\_location\_dimension\_attr                |
| reon\_data\_location\_info        | s3archiver\_audit\_log.sql                            | reon.reon\_data\_location\_info.s3archiver\_audit\_log                         |
| reon\_data\_location\_info        | block\_table\_delta\_location.sql                     | reon.reon\_data\_location\_info.block\_table\_delta\_location                  |
| reon\_data\_location\_info        | data\_location\_intermediate.sql                      | reon.reon\_data\_location\_info.data\_location\_intermediate                   |
| reon\_data\_location\_info        | fact\_etl\_delta\_location.sql                        | reon.reon\_data\_location\_info.fact\_etl\_delta\_location                     |
| reon\_data\_location\_info        | archiver\_config\_key\_values.sql                     | reon.reon\_data\_location\_info.archiver\_config\_key\_values                  |
| reon\_data\_location\_info        | archiver\_location\_info.sql                          | reon.reon\_data\_location\_info.archiver\_location\_info                       |
| reon\_data\_location\_info        | scd\_data\_locations.sql                              | reon.reon\_data\_location\_info.scd\_data\_locations                           |
| reon\_data\_location\_info        | data\_schema\_storage.sql                             | reon.reon\_data\_location\_info.data\_schema\_storage                          |
| reon\_data\_location\_info        | archiver\_location\_config.sql                        | reon.reon\_data\_location\_info.archiver\_location\_config                     |
| reon\_data\_location\_info        | data\_location\_summary\_fact.sql                     | reon.reon\_data\_location\_info.data\_location\_summary\_fact                  |
| reon\_data\_location\_info        | state\_table\_delta\_location.sql                     | reon.reon\_data\_location\_info.state\_table\_delta\_location                  |
| reon\_data\_location\_info        | data\_location\_dimension.sql                         | reon.reon\_data\_location\_info.data\_location\_dimension                      |
| reon\_data\_location\_info        | data\_location\_fact.sql                              | reon.reon\_data\_location\_info.data\_location\_fact                           |
| compute\_engine                   | inference\_meta\_table.sql                            | reon.compute\_engine.inference\_meta\_table                                    |
| compute\_engine                   | model\_enabled\_status.sql                            | reon.compute\_engine.model\_enabled\_status                                    |
| compute\_engine                   | model\_training\_logs.sql                             | reon.compute\_engine.model\_training\_logs                                     |
| compute\_engine                   | model\_type\_properties.sql                           | reon.compute\_engine.model\_type\_properties                                   |
| compute\_engine                   | model\_results.sql                                    | reon.compute\_engine.model\_results                                            |
| compute\_engine                   | model\_experiments\_table.sql                         | reon.compute\_engine.model\_experiments\_table                                 |
| compute\_engine                   | org\_configs.sql                                      | reon.compute\_engine.org\_configs                                              |
| compute\_engine                   | model\_evaluation\_metrics.sql                        | reon.compute\_engine.model\_evaluation\_metrics                                |
| compute\_engine                   | model\_config.sql                                     | reon.compute\_engine.model\_config                                             |
| compute\_engine                   | model\_scheduler.sql                                  | reon.compute\_engine.model\_scheduler                                          |
| compute\_engine                   | data\_validation\_result.sql                          | reon.compute\_engine.data\_validation\_result                                  |
| compute\_engine                   | org\_till\_mapping.sql                                | reon.compute\_engine.org\_till\_mapping                                        |
| compute\_engine                   | runtime\_analysis.sql                                 | reon.compute\_engine.runtime\_analysis                                         |
| compute\_engine                   | db\_configs.sql                                       | reon.compute\_engine.db\_configs                                               |
| compute\_engine                   | modeltype\_sparkconfig\_mapping.sql                   | reon.compute\_engine.modeltype\_sparkconfig\_mapping                           |
| compute\_engine                   | data\_generation\_for\_ml.sql                         | reon.compute\_engine.data\_generation\_for\_ml                                 |
| compute\_engine                   | model.sql                                             | reon.compute\_engine.model                                                     |
| compute\_engine                   | score\_table\_status.sql                              | reon.compute\_engine.score\_table\_status                                      |
| compute\_engine                   | reload\_config\_request.sql                           | reon.compute\_engine.reload\_config\_request                                   |

<br  />

## Table: `released_offset`


| Column Name | Data Type | Index                    |
| ----------- | --------- | ------------------------ |
| id          | int       | Part of PRIMARY KEY (id) |
| offset      | int       | None                     |
| created\_on | timestamp | None                     |

## Table: `activity_log`


| Column Name                | Data Type    | Index                                           |
| -------------------------- | ------------ | ----------------------------------------------- |
| id                         | int          | Part of PRIMARY KEY (id)                        |
| batch\_id                  | bigint       | None                                            |
| activity\_audit\_token\_id | varchar(50)  | Part of UNIQUE KEY (activity\_audit\_token\_id) |
| activity\_type             | varchar(100) | Part of UNIQUE KEY (activity\_type)             |
| activity\_payload          | text         | None                                            |
| created\_on                | timestamp    | None                                            |
| created\_by                | varchar(100) | None                                            |

## Table: `released_candidate`


| Column Name | Data Type | Index                    |
| ----------- | --------- | ------------------------ |
| id          | int       | Part of PRIMARY KEY (id) |
| offset      | int       | None                     |
| created\_on | timestamp | None                     |

## Table: `activity_batch`


| Column Name       | Data Type    | Index                           |
| ----------------- | ------------ | ------------------------------- |
| batch\_id         | bigint(20)   | Part of PRIMARY KEY (batch\_id) |
| jira\_ticket      | text         | None                            |
| description       | text         | None                            |
| status            | varchar(20)  | None                            |
| run\_id           | int          | None                            |
| activity\_ids     | text         | None                            |
| created\_on       | timestamp    | None                            |
| updated\_on       | timestamp    | None                            |
| metadata\_version | varchar(100) | None                            |

## Table: `test_sql`


| Column Name | Data Type | Index                    |
| ----------- | --------- | ------------------------ |
| id          | int(11)   | Part of PRIMARY KEY (id) |
| value       | int(11)   | None                     |
| created\_on | timestamp | None                     |

## Table: `etl_persisted_run_version`


| Column Name    | Data Type  | Index                    |
| -------------- | ---------- | ------------------------ |
| id             | int(11)    | Part of PRIMARY KEY (id) |
| run\_id        | int(11)    | Part of KEY (run\_id)    |
| version\_id    | int(11)    | None                     |
| run\_date      | datetime   | None                     |
| org\_id        | int(11)    | Part of KEY (org\_id)    |
| is\_valid      | tinyint(1) | None                     |
| last\_modified | timestamp  | None                     |

## Table: `metadata_version`


| Column Name | Data Type   | Index                        |
| ----------- | ----------- | ---------------------------- |
| id          | int(11)     | Part of PRIMARY KEY (id)     |
| version     | varchar(20) | Part of UNIQUE KEY (version) |
| is\_valid   | tinyint(1)  | None                         |
| added\_on   | timestamp   | None                         |
| updated\_on | timestamp   | None                         |

## Table: `version_creation_log`


| Column Name   | Data Type  | Index                    |
| ------------- | ---------- | ------------------------ |
| id            | int(11)    | Part of PRIMARY KEY (id) |
| version\_id   | int(11)    | None                     |
| activity\_ids | text       | None                     |
| is\_released  | tinyint(1) | None                     |
| created\_at   | timestamp  | None                     |
| updated\_at   | timestamp  | None                     |

## Table: `region_info`


| Column Name | Data Type   | Index                     |
| ----------- | ----------- | ------------------------- |
| name        | varchar(20) | Part of UNIQUE KEY (name) |

## Table: `org_specific_etl_run_version`


| Column Name | Data Type  | Index                    |
| ----------- | ---------- | ------------------------ |
| id          | int(11)    | Part of PRIMARY KEY (id) |
| version\_id | int(11)    | None                     |
| run\_id     | int(11)    | Part of KEY (run\_id)    |
| run\_date   | datetime   | None                     |
| org\_id     | int(11)    | Part of KEY (org\_id)    |
| is\_valid   | tinyint(1) | None                     |
| updated\_on | timestamp  | None                     |

## Table: `etl_run_version`


| Column Name | Data Type  | Index                    |
| ----------- | ---------- | ------------------------ |
| id          | int(11)    | Part of PRIMARY KEY (id) |
| version\_id | int(11)    | None                     |
| run\_id     | int(11)    | Part of KEY (run\_id)    |
| run\_date   | datetime   | None                     |
| org\_id     | int(11)    | Part of KEY (org\_id)    |
| is\_valid   | tinyint(1) | None                     |
| updated\_on | timestamp  | None                     |

## Table: `org_specific_metadata_version`


| Column Name | Data Type   | Index                        |
| ----------- | ----------- | ---------------------------- |
| id          | int(11)     | Part of PRIMARY KEY (id)     |
| version     | varchar(20) | Part of UNIQUE KEY (version) |
| is\_valid   | tinyint(1)  | None                         |
| added\_on   | timestamp   | None                         |
| updated\_on | timestamp   | None                         |

## Table: `dimension_grouping_run_details`


| Column Name            | Data Type                                                                                                                                                                                                                                                                    | Index                                     |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------- |
| id                     | int                                                                                                                                                                                                                                                                          | Part of UNIQUE KEY (id)                   |
| org\_id                | bigint                                                                                                                                                                                                                                                                       | Part of KEY (org\_id)                     |
| scope\_id              | bigint                                                                                                                                                                                                                                                                       | Part of KEY (scope\_id)                   |
| group\_name            | varchar(100)                                                                                                                                                                                                                                                                 | None                                      |
| group\_id              | int                                                                                                                                                                                                                                                                          | Part of KEY (group\_id)                   |
| group\_display\_name   | varchar(100)                                                                                                                                                                                                                                                                 | None                                      |
| input\_params          | text                                                                                                                                                                                                                                                                         | None                                      |
| dimension\_id          | bigint                                                                                                                                                                                                                                                                       | Part of UNIQUE KEY (dimension\_id)        |
| dimension\_name        | varchar(50)                                                                                                                                                                                                                                                                  | None                                      |
| dimension\_table\_name | varchar(40)                                                                                                                                                                                                                                                                  | None                                      |
| dimension\_attribute   | varchar(40)                                                                                                                                                                                                                                                                  | Part of UNIQUE KEY (dimension\_attribute) |
| status                 | enum('UPLOADED','WORKFLOW\_QUEUED','WORKFLOW\_EXECUTING','SUCCESS','WORKFLOW\_ERROR','META\_FAIL','RELOAD\_FAIL','COLUMNS\_NOT\_TWO','COLUMN\_NAME\_MISMATCH','INVALID\_ATTRIBUTE\_VALUES','MISSING\_ATTRIBUTE\_VALUES','DUPLICATE\_ATTRIBUTE\_VALUES','S3\_READ\_ERROR','') | None                                      |
| s3\_path               | text                                                                                                                                                                                                                                                                         | None                                      |
| last\_updated\_by      | bigint                                                                                                                                                                                                                                                                       | None                                      |
| added\_on              | timestamp                                                                                                                                                                                                                                                                    | None                                      |
| last\_updated\_on      | timestamp                                                                                                                                                                                                                                                                    | None                                      |
| dimension\_id\_str     | varchar(200)                                                                                                                                                                                                                                                                 | None                                      |

## Table: `block_validation_stats`


| Column Name          | Data Type    | Index                              |
| -------------------- | ------------ | ---------------------------------- |
| id                   | int(11)      | Part of PRIMARY KEY (id)           |
| org\_id              | int(11)      | Part of UNIQUE KEY (org\_id)       |
| execution\_id        | bigint(20)   | Part of UNIQUE KEY (execution\_id) |
| fact\_name           | varchar(100) | Part of UNIQUE KEY (fact\_name)    |
| column\_name         | varchar(100) | Part of UNIQUE KEY (column\_name)  |
| mismatch\_count      | bigint(20)   | None                               |
| percentage\_mismatch | decimal(6,3) | None                               |
| event\_date          | timestamp    | None                               |

## Table: `task_dimensions`


| Column Name              | Data Type    | Index                          |
| ------------------------ | ------------ | ------------------------------ |
| task\_id                 | int(11)      | Part of PRIMARY KEY (task\_id) |
| org\_id                  | int(11)      | None                           |
| primary\_fact            | varchar(300) | None                           |
| secondary\_fact          | varchar(300) | None                           |
| kpi\_type                | varchar(32)  | None                           |
| fact\_type               | varchar(32)  | None                           |
| table\_type              | varchar(32)  | None                           |
| dimensions               | varchar(32)  | None                           |
| primary\_history\_fact   | varchar(32)  | None                           |
| secondary\_history\_fact | varchar(32)  | None                           |
| function\_type           | varchar(32)  | None                           |
| end\_point               | varchar(32)  | None                           |
| info                     | text         | None                           |

## Table: `sqoop_run_details`


| Column Name   | Data Type                                                                             | Index                    |
| ------------- | ------------------------------------------------------------------------------------- | ------------------------ |
| id            | int(10)                                                                               | Part of PRIMARY KEY (id) |
| run\_type     | enum('FULL','INCREMENTAL')                                                            | None                     |
| master\_time  | datetime                                                                              | None                     |
| execution\_id | int(10)                                                                               | None                     |
| status        | enum('COMPLETED','INPROGRESS','FAILED','SQOOP\_COMPLETED','HOURLY\_SQOOP\_COMPLETED') | None                     |
| is\_active    | tinyint(1)                                                                            | None                     |
| updated\_on   | timestamp                                                                             | None                     |

## Table: `emr_template_log`


| Column Name    | Data Type   | Index                               |
| -------------- | ----------- | ----------------------------------- |
| id             | int(11)     | Part of PRIMARY KEY (id)            |
| template\_type | varchar(20) | Part of UNIQUE KEY (template\_type) |
| template\_tag  | varchar(30) | Part of UNIQUE KEY (template\_tag)  |
| s3\_path       | TEXT        | None                                |
| template\_hash | varchar(50) | Part of UNIQUE KEY (template\_hash) |
| is\_active     | tinyint(4)  | None                                |

## Table: `dag_triggers`


| Column Name                       | Data Type    | Index                    |
| --------------------------------- | ------------ | ------------------------ |
| id                                | int(11)      | Part of PRIMARY KEY (id) |
| class\_name                       | varchar(255) | None                     |
| cron                              | varchar(64)  | None                     |
| is\_active                        | tinyint(4)   | None                     |
| is\_composite                     | tinyint(4)   | None                     |
| is\_guarded                       | tinyint(4)   | None                     |
| attributes                        | text         | None                     |
| composite\_attributes             | text         | None                     |
| label                             | varchar(200) | None                     |
| created\_at                       | timestamp    | None                     |
| updated\_at                       | timestamp    | None                     |
| daily\_generation\_expected\_time | varchar(64)  | None                     |
| daily\_execution\_expected\_time  | varchar(64)  | None                     |

## Table: `execution_properties`


| Column Name   | Data Type   | Index                              |
| ------------- | ----------- | ---------------------------------- |
| id            | int(11)     | Part of PRIMARY KEY (id)           |
| execution\_id | int(11)     | Part of UNIQUE KEY (execution\_id) |
| task\_id      | int(11)     | None                               |
| key\_name     | varchar(50) | Part of UNIQUE KEY (key\_name)     |
| value         | text        | None                               |
| added\_on     | timestamp   | None                               |

## Table: `hdfs_allocation_audit_log`


| Column Name                  | Data Type   | Index                             |
| ---------------------------- | ----------- | --------------------------------- |
| cluster\_id                  | varchar(30) | Part of PRIMARY KEY (cluster\_id) |
| full\_run\_org\_size\_in\_GB | int(11)     | None                              |
| hdfs\_allocated\_in\_GB      | int(11)     | None                              |
| hdfs\_utilised\_in\_GB       | int(11)     | None                              |
| event\_date                  | timestamp   | None                              |

## Table: `dag_trigger_overrides`


| Column Name                     | Data Type   | Index                                |
| ------------------------------- | ----------- | ------------------------------------ |
| id                              | int(11)     | Part of PRIMARY KEY (id)             |
| trigger\_id                     | int(11)     | Part of UNIQUE KEY (trigger\_id)     |
| dag\_execution\_expected\_time  | varchar(64) | None                                 |
| dag\_generation\_expected\_time | varchar(64) | None                                 |
| dag\_gen\_delay\_in\_hours      | int(11)     | None                                 |
| dag\_exec\_delay\_in\_hours     | int(11)     | None                                 |
| scheduled\_date                 | date        | Part of UNIQUE KEY (scheduled\_date) |

## Table: `hdfs_scaling_parameter`


| Column Name     | Data Type  | Index                    |
| --------------- | ---------- | ------------------------ |
| id              | int(11)    | Part of PRIMARY KEY (id) |
| hdfs\_parameter | int(11)    | None                     |
| is\_active      | tinyint(1) | None                     |

## Table: `dim_compute_details`


| Column Name             | Data Type                                                                                                 | Index                         |
| ----------------------- | --------------------------------------------------------------------------------------------------------- | ----------------------------- |
| id                      | int(11)                                                                                                   | Part of PRIMARY KEY (id)      |
| run\_id                 | int(11)                                                                                                   | None                          |
| org\_id                 | int(11)                                                                                                   | Part of PRIMARY KEY (org\_id) |
| dimension\_name         | varchar(100)                                                                                              | None                          |
| auto\_update\_timestamp | timestamp                                                                                                 | None                          |
| is\_recomputed          | boolean                                                                                                   | None                          |
| reason\_for\_recompute  | enum('TABLE\_CHANGED','QUERY\_CHANGED','BOTH\_CHANGED','FULL\_RUN','CONDITIONAL\_DIM\_COMPUTE\_DISABLED') | None                          |
| additional\_info        | text                                                                                                      | None                          |

## Table: `execution_phases`


| Column Name   | Data Type    | Index                              |
| ------------- | ------------ | ---------------------------------- |
| id            | int(11)      | Part of PRIMARY KEY (id)           |
| execution\_id | int(11)      | Part of UNIQUE KEY (execution\_id) |
| phase\_id     | int(11)      | Part of UNIQUE KEY (phase\_id)     |
| name          | varchar(64)  | None                               |
| is\_active    | tinyint(4)   | None                               |
| context\_keys | varchar(64)  | None                               |
| class\_name   | varchar(255) | None                               |
| properties    | text         | None                               |

## Table: `launch_cluster_details`


| Column Name       | Data Type    | Index                          |
| ----------------- | ------------ | ------------------------------ |
| id                | INT          | Part of PRIMARY KEY (id)       |
| stack\_name       | VARCHAR(255) | None                           |
| stack\_id         | VARCHAR(255) | Part of UNIQUE KEY (stack\_id) |
| execution\_id     | INT          | None                           |
| is\_active        | tinyint(1)   | None                           |
| last\_updated\_on | timestamp    | None                           |
| created\_on       | timestamp    | None                           |

## Table: `enabled_orgs`


| Column Name                     | Data Type   | Index                         |
| ------------------------------- | ----------- | ----------------------------- |
| org\_id                         | int(11)     | Part of PRIMARY KEY (org\_id) |
| is\_enabled                     | tinyint(3)  | None                          |
| auto\_update\_timestamp         | timestamp   | None                          |
| size                            | int(11)     | None                          |
| priority                        | tinyint(3)  | None                          |
| batch\_no                       | int(10)     | None                          |
| incremental\_enabled            | tinyint(1)  | None                          |
| dimension\_incremental\_enabled | tinyint(1)  | None                          |
| solr\_job\_incremental\_enabled | tinyint(1)  | None                          |
| last\_sync\_time                | datetime    | None                          |
| morning\_file\_sync\_required   | tinyint(1)  | None                          |
| alap\_time                      | varchar(50) | None                          |

## Table: `context_values`


| Column Name   | Data Type    | Index                              |
| ------------- | ------------ | ---------------------------------- |
| id            | int(10)      | Part of PRIMARY KEY (id)           |
| name          | varchar(128) | Part of UNIQUE KEY (name)          |
| execution\_id | int(11)      | Part of UNIQUE KEY (execution\_id) |
| phase\_id     | int(11)      | Part of UNIQUE KEY (phase\_id)     |
| identifiers   | text         | None                               |
| properties    | text         | None                               |

## Table: `phases`


| Column Name   | Data Type    | Index                     |
| ------------- | ------------ | ------------------------- |
| id            | int(11)      | Part of PRIMARY KEY (id)  |
| name          | varchar(64)  | Part of UNIQUE KEY (name) |
| workflow      | varchar(64)  | None                      |
| is\_active    | tinyint(4)   | None                      |
| context\_keys | varchar(64)  | None                      |
| class\_name   | varchar(255) | None                      |
| dev\_owner    | varchar(32)  | None                      |

## Table: `org_size`


| Column Name  | Data Type  | Index                         |
| ------------ | ---------- | ----------------------------- |
| org\_id      | int(11)    | Part of PRIMARY KEY (org\_id) |
| size\_in\_mb | BIGINT(11) | None                          |

## Table: `execution_date`


| Column Name   | Data Type | Index |
| ------------- | --------- | ----- |
| execution\_id | int(10)   | None  |
| run\_date     | datetime  | None  |

## Table: `dim_compute_queries`


| Column Name             | Data Type    | Index                         |
| ----------------------- | ------------ | ----------------------------- |
| id                      | int(11)      | Part of PRIMARY KEY (id)      |
| org\_id                 | int(11)      | Part of PRIMARY KEY (org\_id) |
| dimension\_name         | varchar(100) | None                          |
| auto\_update\_timestamp | timestamp    | None                          |
| completed\_timestamp    | timestamp    | None                          |
| dim\_compute\_query     | MEDIUMTEXT   | None                          |
| is\_valid               | boolean      | None                          |
| run\_id                 | int(11)      | None                          |

## Table: `tasks_dependencies`


| Column Name   | Data Type | Index                            |
| ------------- | --------- | -------------------------------- |
| parent\_id    | int(11)   | Part of PRIMARY KEY (parent\_id) |
| child\_id     | int(11)   | Part of KEY (child\_id)          |
| execution\_id | int(11)   | Part of KEY (execution\_id)      |

## Table: `cdc_source_table_info`


| Column Name           | Data Type                       | Index                     |
| --------------------- | ------------------------------- | ------------------------- |
| id                    | int(10)                         | Part of PRIMARY KEY (id)  |
| db\_name              | varchar(64)                     | Part of KEY (db\_name)    |
| table\_name           | varchar(99)                     | Part of KEY (table\_name) |
| range\_partition\_col | varchar(64)                     | None                      |
| end\_point\_type      | enum('MYSQL','MONGO','ES','S3') | None                      |
| is\_valid             | tinyint(1)                      | None                      |
| updated\_on           | timestamp                       | None                      |

## Table: `executions`


| Column Name  | Data Type                                                                | Index                    |
| ------------ | ------------------------------------------------------------------------ | ------------------------ |
| id           | int(10)                                                                  | Part of PRIMARY KEY (id) |
| name         | varchar(64)                                                              | None                     |
| client\_uuid | varchar(64)                                                              | None                     |
| workflow     | varchar(64)                                                              | None                     |
| template\_id | int(11)                                                                  | None                     |
| status       | enum('READY','STARTING','RUNNING','SUCCESS','FAILED','PAUSED','STOPPED') | None                     |
| start\_time  | timestamp                                                                | None                     |
| end\_time    | timestamp                                                                | None                     |
| properties   | longtext                                                                 | None                     |

## Table: `task_status_log`


| Column Name   | Data Type   | Index                       |
| ------------- | ----------- | --------------------------- |
| id            | int(11)     | Part of PRIMARY KEY (id)    |
| execution\_id | int(11)     | Part of KEY (execution\_id) |
| task\_id      | int(11)     | Part of KEY (task\_id)      |
| status        | varchar(20) | None                        |
| added\_time   | timestamp   | Part of KEY (added\_time)   |

## Table: `workflows`


| Column Name        | Data Type    | Index                     |
| ------------------ | ------------ | ------------------------- |
| id                 | int(11)      | Part of PRIMARY KEY (id)  |
| name               | varchar(32)  | Part of UNIQUE KEY (name) |
| max\_conncurrency  | int(11)      | None                      |
| notify\_email\_ids | varchar(100) | None                      |

## Table: `qsi_source_table_sync_time`


| Column Name           | Data Type    | Index                                      |
| --------------------- | ------------ | ------------------------------------------ |
| id                    | int(11)      | Part of PRIMARY KEY (id)                   |
| org\_id               | int(11)      | Part of UNIQUE KEY (org\_id)               |
| last\_sync\_time      | bigint(20)   | None                                       |
| qsi\_collection\_name | varchar(150) | Part of UNIQUE KEY (qsi\_collection\_name) |
| added\_on             | datetime     | None                                       |
| last\_updated\_on     | timestamp    | None                                       |

## Table: `phase_dependencies`


| Column Name | Data Type  | Index                           |
| ----------- | ---------- | ------------------------------- |
| parent\_id  | int(11)    | Part of UNIQUE KEY (parent\_id) |
| child\_id   | int(11)    | Part of UNIQUE KEY (child\_id)  |
| is\_valid   | tinyint(4) | None                            |

## Table: `tasks`


| Column Name        | Data Type                                                                                                                           | Index                               |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- |
| id                 | int(11)                                                                                                                             | Part of PRIMARY KEY (id)            |
| execution\_id      | int(11)                                                                                                                             | Part of UNIQUE KEY (execution\_id)  |
| name               | varchar(255)                                                                                                                        | Part of UNIQUE KEY (name)           |
| class\_name        | varchar(255)                                                                                                                        | None                                |
| status             | enum('NOT\_READY','READY','RUNNING','SUCCESS','FAILED','SKIPPED','ERROR','PERMANENT\_FAILURE','DEPENDENCY\_FAILURE')                | None                                |
| created\_time      | timestamp                                                                                                                           | None                                |
| type               | enum('BASH','GROUP','SCALA','PHASE','VIRTUAL','SPARK','MYSQL','NOP','CUSTOM','SPARK\_SHELL','SPARK\_SESSION\_CLOSE','LIVY\_CUSTOM') | None                                |
| attempt\_count     | smallint(3)                                                                                                                         | Part of UNIQUE KEY (attempt\_count) |
| ignore\_failure    | tinyint(1)                                                                                                                          | None                                |
| group\_id          | int(11)                                                                                                                             | None                                |
| ready\_time        | timestamp                                                                                                                           | None                                |
| start\_time        | timestamp                                                                                                                           | None                                |
| end\_time          | timestamp                                                                                                                           | None                                |
| error\_details     | text                                                                                                                                | None                                |
| phase\_id          | int(11)                                                                                                                             | Part of UNIQUE KEY (phase\_id)      |
| context\_id        | int(11)                                                                                                                             | Part of UNIQUE KEY (context\_id)    |
| properties         | longtext                                                                                                                            | None                                |
| max\_retries       | tinyint(4)                                                                                                                          | None                                |
| priority           | tinyint(4)                                                                                                                          | None                                |
| save\_result\_as   | text                                                                                                                                | None                                |
| first\_attempt\_id | int(11)                                                                                                                             | None                                |

## Table: `org_sync_check_log`


| Column Name        | Data Type                                      | Index                                   |
| ------------------ | ---------------------------------------------- | --------------------------------------- |
| id                 | bigint(20)                                     | Part of PRIMARY KEY (id)                |
| org\_id            | int(11)                                        | Part of UNIQUE KEY (org\_id)            |
| status             | enum('OPEN','IN\_PROGRESS','SUCCESS','FAILED') | None                                    |
| added\_on          | datetime                                       | None                                    |
| started\_at        | datetime                                       | None                                    |
| last\_updated\_on  | timestamp                                      | None                                    |
| caller\_unique\_id | varchar(50)                                    | Part of UNIQUE KEY (caller\_unique\_id) |
| retry\_count       | int                                            | None                                    |
| last\_sync\_time   | datetime                                       | None                                    |
| reload\_time       | datetime                                       | None                                    |

## Table: `total_attempt`


| Column Name    | Data Type | Index                     |
| -------------- | --------- | ------------------------- |
| id             | int(11)   | Part of PRIMARY KEY (id)  |
| day            | date      | Part of UNIQUE KEY (day)  |
| hour           | int(11)   | Part of UNIQUE KEY (hour) |
| attempt\_count | int(11)   | None                      |
| hit\_count     | int(11)   | None                      |

## Table: `response_time`


| Column Name           | Data Type    | Index                          |
| --------------------- | ------------ | ------------------------------ |
| id                    | int(11)      | Part of PRIMARY KEY (id)       |
| day                   | date         | Part of UNIQUE KEY (day)       |
| hour                  | int(11)      | Part of UNIQUE KEY (hour)      |
| client                | varchar(20)  | Part of UNIQUE KEY (client)    |
| api\_name             | varchar(100) | Part of UNIQUE KEY (api\_name) |
| hit\_count            | int(11)      | None                           |
| time\_in\_miliseconds | int(11)      | None                           |

## Table: `jobs`


| Column Name                    | Data Type  | Index                         |
| ------------------------------ | ---------- | ----------------------------- |
| id                             | bigint(20) | Part of PRIMARY KEY (id)      |
| org\_id                        | int(11)    | Part of PRIMARY KEY (org\_id) |
| customers\_group\_s3\_location | text       | None                          |
| customers\_group\_s3\_headers  | text       | None                          |
| last\_updated\_on              | timestamp  | None                          |

## Table: `kpi_tags`


| Column Name | Data Type    | Index                         |
| ----------- | ------------ | ----------------------------- |
| id          | bigint(20)   | Part of PRIMARY KEY (id)      |
| org\_id     | int(11)      | Part of PRIMARY KEY (org\_id) |
| job\_id     | bigint(20)   | None                          |
| kpi\_id     | varchar(100) | None                          |
| alias\_name | varchar(100) | None                          |

## Table: `tag_variables`


| Column Name     | Data Type           | Index                         |
| --------------- | ------------------- | ----------------------------- |
| id              | bigint(20)          | Part of PRIMARY KEY (id)      |
| org\_id         | int(11)             | Part of PRIMARY KEY (org\_id) |
| tag\_id         | bigint(20)          | None                          |
| tag\_type       | enum('KPI','QUERY') | None                          |
| variable\_key   | varchar(100)        | None                          |
| variable\_value | varchar(100)        | None                          |

## Table: `query_tags`


| Column Name | Data Type    | Index                         |
| ----------- | ------------ | ----------------------------- |
| id          | bigint(20)   | Part of PRIMARY KEY (id)      |
| org\_id     | int(11)      | Part of PRIMARY KEY (org\_id) |
| job\_id     | bigint(20)   | None                          |
| query       | text         | None                          |
| alias\_name | varchar(100) | None                          |

## Table: `executions`


| Column Name          | Data Type                               | Index                         |
| -------------------- | --------------------------------------- | ----------------------------- |
| id                   | bigint(20)                              | Part of PRIMARY KEY (id)      |
| org\_id              | int(11)                                 | Part of PRIMARY KEY (org\_id) |
| job\_id              | bigint(20)                              | None                          |
| query                | text                                    | None                          |
| status               | enum('SUCCESS','IN\_PROGRESS','FAILED') | None                          |
| target\_s3\_location | text                                    | None                          |
| trigger\_time        | datetime                                | None                          |
| last\_updated\_on    | timestamp                               | None                          |

## Table: `organization_status`


| Column Name       | Data Type  | Index                        |
| ----------------- | ---------- | ---------------------------- |
| id                | int(11)    | Part of PRIMARY KEY (id)     |
| org\_id           | int(11)    | Part of UNIQUE KEY (org\_id) |
| is\_active        | tinyint(1) | None                         |
| created\_on       | timestamp  | None                         |
| last\_updated\_on | timestamp  | None                         |

## Table: `rule_info`


| Column Name          | Data Type                  | Index                           |
| -------------------- | -------------------------- | ------------------------------- |
| id                   | int(11)                    | Part of PRIMARY KEY (id)        |
| org\_id              | int(11)                    | Part of KEY (org\_id)           |
| rule\_json           | mediumtext                 | None                            |
| rule\_hash           | varchar(100)               | None                            |
| status               | enum('READY','NOT\_READY') | None                            |
| last\_sync\_time     | datetime(3)                | None                            |
| data\_table          | varchar(100)               | None                            |
| created\_on          | timestamp                  | None                            |
| last\_updated\_on    | timestamp                  | Part of KEY (last\_updated\_on) |
| filter\_instance\_id | varchar(100)               | None                            |

## Table: `rule_mapping`


| Column Name       | Data Type    | Index                        |
| ----------------- | ------------ | ---------------------------- |
| id                | int(11)      | Part of PRIMARY KEY (id)     |
| org\_id           | int(11)      | Part of KEY (org\_id)        |
| rule\_info\_id    | int(11)      | Part of KEY (rule\_info\_id) |
| client            | varchar(100) | None                         |
| external\_id      | varchar(100) | None                         |
| is\_active        | tinyint(1)   | Part of KEY (is\_active)     |
| created\_on       | timestamp    | Part of KEY (created\_on)    |
| last\_updated\_on | timestamp    | None                         |

## Table: `rule_execution_log`


| Column Name         | Data Type   | Index                             |
| ------------------- | ----------- | --------------------------------- |
| id                  | int(11)     | Part of PRIMARY KEY (id)          |
| org\_id             | int(11)     | Part of KEY (org\_id)             |
| rule\_execution\_id | int(11)     | Part of KEY (rule\_execution\_id) |
| service\_name       | varchar(50) | None                              |
| status              | varchar(50) | None                              |
| created\_on         | timestamp   | Part of KEY (created\_on)         |
| error\_details      | mediumtext  | None                              |

## Table: `rule_execution`


| Column Name       | Data Type    | Index                           |
| ----------------- | ------------ | ------------------------------- |
| id                | int(11)      | Part of PRIMARY KEY (id)        |
| org\_id           | int(11)      | Part of KEY (org\_id)           |
| rule\_info\_id    | int(11)      | Part of KEY (rule\_info\_id)    |
| sync\_id          | varchar(50)  | Part of KEY (sync\_id)          |
| data\_table       | varchar(100) | None                            |
| status            | enum('OPEN', | Part of KEY (status)            |
| created\_on       | timestamp    | Part of KEY (created\_on)       |
| last\_updated\_on | timestamp    | Part of KEY (last\_updated\_on) |

## Table: `fact_context`


| Column Name          | Data Type    | Index                                     |
| -------------------- | ------------ | ----------------------------------------- |
| id                   | int          | Part of PRIMARY KEY (id)                  |
| fact\_table\_id      | int          | None                                      |
| context\_key         | varchar(100) | Part of UNIQUE KEY (context\_key)         |
| is\_active           | tinyint(1)   | None                                      |
| derive\_expresion    | varchar(500) | None                                      |
| id\_str              | varchar(200) | None                                      |
| fact\_table\_id\_str | varchar(200) | Part of UNIQUE KEY (fact\_table\_id\_str) |

## Table: `source_tables`


| Column Name                 | Data Type    | Index                                    |
| --------------------------- | ------------ | ---------------------------------------- |
| id                          | int          | Part of PRIMARY KEY (id)                 |
| name                        | varchar(55)  | Part of UNIQUE KEY (name)                |
| scope\_id                   | int          | None                                     |
| end\_point\_id              | int          | None                                     |
| is\_sharded                 | tinyint(1)   | None                                     |
| is\_active                  | tinyint(1)   | None                                     |
| added\_on                   | timestamp    | None                                     |
| partition\_key\_column      | int          | None                                     |
| timestamp\_column           | int          | None                                     |
| pkey\_columns               | varchar(45)  | None                                     |
| filter\_expression          | text         | None                                     |
| is\_hive\_table\_enabled    | tinyint      | None                                     |
| has\_dynamic\_schema        | tinyint(1)   | None                                     |
| id\_str                     | varchar(200) | Part of UNIQUE KEY (id\_str)             |
| end\_point\_id\_str         | varchar(200) | Part of UNIQUE KEY (end\_point\_id\_str) |
| partition\_key\_column\_str | varchar(200) | None                                     |
| timestamp\_column\_str      | varchar(200) | None                                     |
| pkey\_columns\_str          | text         | None                                     |

## Table: `fact_block_config`


| Column Name        | Data Type   | Index                    |
| ------------------ | ----------- | ------------------------ |
| id                 | INT         | Part of PRIMARY KEY (id) |
| scope\_id          | INT(11)     | None                     |
| fact\_name         | VARCHAR(55) | None                     |
| num\_blocks        | INT(11)     | None                     |
| partition\_unit    | ENUM('DAY', | None                     |
| auto\_update\_time | TIMESTAMP   | None                     |

## Table: `mongo_source_tables`


| Column Name                | Data Type    | Index                                       |
| -------------------------- | ------------ | ------------------------------------------- |
| source\_table\_id          | int          | None                                        |
| mongo\_collection\_id      | int          | None                                        |
| lateral\_view\_info        | text         | None                                        |
| is\_active                 | tinyint(1)   | None                                        |
| scope\_id                  | int          | None                                        |
| added\_on                  | timestamp    | None                                        |
| source\_table\_id\_str     | varchar(200) | Part of UNIQUE KEY (source\_table\_id\_str) |
| mongo\_collection\_id\_str | varchar(200) | None                                        |

## Table: `summary_table_column_definition`


| Column Name                      | Data Type              | Index                                |
| -------------------------------- | ---------------------- | ------------------------------------ |
| id                               | int                    | Part of PRIMARY KEY (id)             |
| column\_id                       | int                    | None                                 |
| logical\_summary\_table\_id      | int                    | None                                 |
| scope\_id                        | int                    | Part of UNIQUE KEY (scope\_id)       |
| src\_table\_type                 | enum('FACT','SUMMARY') | None                                 |
| select\_table\_id                | int                    | None                                 |
| select\_col\_id                  | int                    | None                                 |
| udaf                             | text                   | None                                 |
| filters                          | text                   | None                                 |
| is\_active                       | tinyint(1)             | None                                 |
| id\_str                          | varchar(200)           | Part of UNIQUE KEY (id\_str)         |
| column\_id\_str                  | varchar(200)           | Part of UNIQUE KEY (column\_id\_str) |
| logical\_summary\_table\_id\_str | varchar(200)           | None                                 |
| select\_table\_id\_str           | varchar(200)           | None                                 |
| select\_col\_id\_str             | varchar(200)           | None                                 |
| filters\_str                     | varchar(200)           | None                                 |

## Table: `state_input_table`


| Column Name             | Data Type                   | Index                                        |
| ----------------------- | --------------------------- | -------------------------------------------- |
| compute\_block\_id\_str | varchar(200)                | Part of UNIQUE KEY (compute\_block\_id\_str) |
| table\_name             | varchar(50)                 | None                                         |
| table\_alias            | varchar(50)                 | Part of UNIQUE KEY (table\_alias)            |
| state\_info             | enum('BEFORE\_START\_DATE', | None                                         |
| is\_active              | TINYINT                     | None                                         |

## Table: `source_target_dimension_mapping`


| Column Name            | Data Type    | Index                                       |
| ---------------------- | ------------ | ------------------------------------------- |
| id                     | int          | Part of PRIMARY KEY (id)                    |
| source\_table\_id      | int          | None                                        |
| fact\_table\_id        | int          | None                                        |
| is\_active             | tinyint(1)   | None                                        |
| scope\_id              | int          | None                                        |
| added\_on              | timestamp    | None                                        |
| id\_str                | varchar(200) | Part of UNIQUE KEY (id\_str)                |
| source\_table\_id\_str | varchar(200) | Part of UNIQUE KEY (source\_table\_id\_str) |
| fact\_table\_id\_str   | varchar(200) | Part of UNIQUE KEY (fact\_table\_id\_str)   |

## Table: `summary_groupBy`


| Column Name     | Data Type                | Index                        |
| --------------- | ------------------------ | ---------------------------- |
| id              | int                      | Part of PRIMARY KEY (id)     |
| tableType       | enum('FACT','DIMENSION') | None                         |
| refTableId      | int                      | None                         |
| column\_id      | int                      | None                         |
| is\_active      | tinyint(1)               | None                         |
| scope\_id       | int                      | None                         |
| id\_str         | varchar(200)             | Part of UNIQUE KEY (id\_str) |
| refTableId\_str | varchar(200)             | None                         |
| column\_id\_str | varchar(200)             | None                         |

## Table: `stateful_transformations`


| Column Name | Data Type    | Index                         |
| ----------- | ------------ | ----------------------------- |
| id\_str     | VARCHAR(255) | Part of PRIMARY KEY (id\_str) |
| name        | VARCHAR(255) | None                          |
| json        | TEXT         | None                          |
| scope\_id   | INT          | None                          |
| is\_active  | TINYINT      | None                          |
| added\_on   | DATETIME     | None                          |
| updated\_on | TIMESTAMP    | None                          |

## Table: `mongo_collections`


| Column Name                     | Data Type    | Index                        |
| ------------------------------- | ------------ | ---------------------------- |
| id                              | int          | Part of PRIMARY KEY (id)     |
| name                            | varchar(50)  | None                         |
| end\_point\_id                  | int          | None                         |
| is\_sharded                     | tinyint(1)   | None                         |
| is\_active                      | tinyint(1)   | None                         |
| scope\_id                       | int          | None                         |
| added\_on                       | timestamp    | None                         |
| timestamp\_column               | varchar(64)  | None                         |
| pkey\_columns                   | varchar(45)  | None                         |
| primary\_mongo\_struct\_id      | int          | None                         |
| dependent\_struct\_ids          | varchar(100) | None                         |
| id\_str                         | varchar(200) | Part of UNIQUE KEY (id\_str) |
| end\_point\_id\_str             | varchar(200) | None                         |
| pkey\_columns\_str              | varchar(200) | None                         |
| primary\_mongo\_struct\_id\_str | varchar(200) | None                         |
| dependent\_struct\_ids\_str     | varchar(200) | None                         |

## Table: `summary_table_column`


| Column Name                      | Data Type                                                                   | Index                        |
| -------------------------------- | --------------------------------------------------------------------------- | ---------------------------- |
| id                               | int                                                                         | Part of PRIMARY KEY (id)     |
| name                             | varchar(100)                                                                | None                         |
| logical\_summary\_table\_id      | int                                                                         | None                         |
| scope\_id                        | int                                                                         | None                         |
| data\_type                       | enum('INT','BIGINT','DOUBLE','TEXT')                                        | None                         |
| col\_type                        | enum('MEASURE','DIMENSION','FACT\_REFERENCE','PARTITION\_KEY','DUMP\_DATA') | None                         |
| is\_active                       | tinyint(1)                                                                  | None                         |
| id\_str                          | varchar(200)                                                                | Part of UNIQUE KEY (id\_str) |
| logical\_summary\_table\_id\_str | varchar(200)                                                                | None                         |

## Table: `temp_strategy`


| Column Name | Data Type   | Index |
| ----------- | ----------- | ----- |
| id          | int(10)     | None  |
| name        | varchar(50) | None  |
| json        | text        | None  |
| table\_id   | int(11)     | None  |
| scope\_id   | int(11)     | None  |

## Table: `transpose_columns`


| Column Name                 | Data Type                          | Index                                            |
| --------------------------- | ---------------------------------- | ------------------------------------------------ |
| transposed\_column\_id      | int                                | None                                             |
| transpose\_table\_id        | int                                | None                                             |
| source\_column\_id          | int                                | None                                             |
| scope\_id                   | int                                | Part of UNIQUE KEY (scope\_id)                   |
| is\_active                  | int                                | None                                             |
| column\_type                | enum('GROUPING','MAP','TRANSPOSE') | None                                             |
| conditions                  | text                               | None                                             |
| transposed\_column\_id\_str | varchar(200)                       | Part of UNIQUE KEY (transposed\_column\_id\_str) |
| transpose\_table\_id\_str   | varchar(200)                       | None                                             |
| source\_column\_id\_str     | varchar(200)                       | None                                             |
| conditions\_str             | text                               | None                                             |

## Table: `logical_view`


| Column Name            | Data Type                | Index                    |
| ---------------------- | ------------------------ | ------------------------ |
| id                     | int                      | Part of PRIMARY KEY (id) |
| name                   | varchar(100)             | None                     |
| src\_table\_type       | enum('FACT','DIMENSION') | None                     |
| select\_table\_id      | int                      | None                     |
| view\_pk\_cols         | varchar(20)              | None                     |
| is\_active             | tinyint(1)               | None                     |
| scope\_id              | int                      | None                     |
| id\_str                | varchar(200)             | None                     |
| select\_table\_id\_str | varchar(200)             | None                     |
| view\_pk\_cols\_str    | varchar(200)             | None                     |

## Table: `transformations`


| Column Name              | Data Type    | Index                                         |
| ------------------------ | ------------ | --------------------------------------------- |
| id                       | int          | Part of PRIMARY KEY (id)                      |
| template                 | text         | None                                          |
| provider\_id             | int          | None                                          |
| scope\_id                | int          | Part of UNIQUE KEY (scope\_id)                |
| provider\_table\_id      | int          | None                                          |
| sql\_query               | text         | None                                          |
| is\_verified             | tinyint      | None                                          |
| id\_str                  | varchar(200) | Part of UNIQUE KEY (id\_str)                  |
| template\_str            | text         | None                                          |
| provider\_id\_str        | varchar(200) | None                                          |
| provider\_table\_id\_str | varchar(200) | Part of UNIQUE KEY (provider\_table\_id\_str) |

## Table: `logical_summary_table`


| Column Name              | Data Type    | Index                        |
| ------------------------ | ------------ | ---------------------------- |
| id                       | int          | Part of PRIMARY KEY (id)     |
| summary\_table\_id       | int          | None                         |
| name                     | varchar(100) | None                         |
| group\_by\_cols          | text         | None                         |
| is\_active               | tinyint(1)   | None                         |
| scope\_id                | int          | None                         |
| primary\_date\_key       | varchar(100) | None                         |
| partition\_keys          | varchar(200) | None                         |
| apply\_standard\_filters | tinyint(1)   | None                         |
| id\_str                  | varchar(200) | Part of UNIQUE KEY (id\_str) |
| summary\_table\_id\_str  | varchar(200) | None                         |
| group\_by\_cols\_str     | text         | None                         |

## Table: `source_shard_table_info`


| Column Name         | Data Type    | Index                               |
| ------------------- | ------------ | ----------------------------------- |
| table\_id           | int          | None                                |
| end\_point\_id      | int          | None                                |
| from\_table         | varchar(100) | None                                |
| select\_column      | varchar(100) | None                                |
| is\_table\_sharded  | tinyint(1)   | None                                |
| is\_active          | tinyint(1)   | None                                |
| added\_on           | timestamp    | None                                |
| table\_id\_str      | varchar(200) | Part of UNIQUE KEY (table\_id\_str) |
| end\_point\_id\_str | varchar(200) | None                                |

## Table: `providers`


| Column Name | Data Type    | Index                     |
| ----------- | ------------ | ------------------------- |
| id          | int          | Part of PRIMARY KEY (id)  |
| name        | varchar(45)  | Part of UNIQUE KEY (name) |
| id\_str     | varchar(200) | None                      |

## Table: `attribution_strategy`


| Column Name       | Data Type    | Index                                  |
| ----------------- | ------------ | -------------------------------------- |
| strategy\_id      | int          | Part of PRIMARY KEY (strategy\_id)     |
| strategy\_name    | varchar(11)  | None                                   |
| strategy\_json    | text         | None                                   |
| is\_active        | tinyint(1)   | None                                   |
| updated\_on       | timestamp    | None                                   |
| strategy\_id\_str | varchar(200) | Part of UNIQUE KEY (strategy\_id\_str) |
| scope\_id         | int          | Part of UNIQUE KEY (scope\_id)         |

## Table: `source_target_column_mapping`


| Column Name             | Data Type    | Index                                        |
| ----------------------- | ------------ | -------------------------------------------- |
| id                      | int          | Part of PRIMARY KEY (id)                     |
| table\_mapping\_id      | int          | None                                         |
| source\_column\_id      | int          | None                                         |
| target\_column\_id      | int          | None                                         |
| is\_active              | tinyint(1)   | None                                         |
| scope\_id               | int          | Part of UNIQUE KEY (scope\_id)               |
| added\_on               | timestamp    | None                                         |
| id\_str                 | varchar(254) | None                                         |
| table\_mapping\_id\_str | varchar(200) | Part of UNIQUE KEY (table\_mapping\_id\_str) |
| source\_column\_id\_str | varchar(200) | None                                         |
| target\_column\_id\_str | varchar(200) | Part of UNIQUE KEY (target\_column\_id\_str) |

## Table: `hierarchical_dimension_columns`


| Column Name                           | Data Type                                                                                 | Index                                |
| ------------------------------------- | ----------------------------------------------------------------------------------------- | ------------------------------------ |
| column\_id                            | int                                                                                       | Part of PRIMARY KEY (column\_id)     |
| dim\_table\_id                        | int                                                                                       | None                                 |
| column\_name                          | varchar(100)                                                                              | None                                 |
| column\_type                          | enum('PK','VALUE','LEVEL','DATE\_ATTRIBUTE','TIME\_ATTRIBUTE','ATTRIBUTE','ALIAS','NONE') | None                                 |
| scope\_id                             | int                                                                                       | None                                 |
| is\_active                            | tinyint(1)                                                                                | None                                 |
| level\_num                            | int                                                                                       | None                                 |
| data\_type                            | enum('TEXT','NUMBER','BIGNUMBER','BOOLEAN','DATE','TIME')                                 | None                                 |
| value\_col\_scope                     | enum('CAP','ORG')                                                                         | None                                 |
| display\_name                         | text                                                                                      | None                                 |
| level\_num\_ref                       | int                                                                                       | None                                 |
| usability\_type                       | enum('DUMP\_ONLY','PARTIAL\_KEY','SELECT','FILTER','GROUP','BANDING')                     | None                                 |
| functional\_dependency\_column        | int                                                                                       | None                                 |
| unique\_value\_dependent\_column      | int                                                                                       | None                                 |
| attr\_table\_name                     | varchar(100)                                                                              | None                                 |
| is\_attr\_value\_table\_present       | tinyint(1)                                                                                | None                                 |
| computation\_type                     | enum('ETL','VIEW')                                                                        | None                                 |
| location\_table\_type                 | enum('FACT','DIMENSION','VIEW','ATTR')                                                    | None                                 |
| location\_type\_entity\_id            | int                                                                                       | None                                 |
| column\_id\_str                       | varchar(200)                                                                              | Part of UNIQUE KEY (column\_id\_str) |
| dim\_table\_id\_str                   | varchar(200)                                                                              | None                                 |
| functional\_dependency\_column\_str   | varchar(200)                                                                              | None                                 |
| unique\_value\_dependent\_column\_str | varchar(200)                                                                              | None                                 |
| location\_type\_entity\_id\_str       | varchar(200)                                                                              | None                                 |

## Table: `summary_condition`


| Column Name      | Data Type                          | Index                        |
| ---------------- | ---------------------------------- | ---------------------------- |
| id               | int                                | Part of PRIMARY KEY (id)     |
| name             | varchar(200)                       | None                         |
| tableType        | enum('FACT','DIMENSION','SUMMARY') | None                         |
| refTableId       | int                                | None                         |
| column\_id       | int                                | None                         |
| operator         | varchar(10)                        | None                         |
| condition\_value | text                               | None                         |
| is\_active       | tinyint(1)                         | None                         |
| scope\_id        | int                                | None                         |
| id\_str          | varchar(200)                       | Part of UNIQUE KEY (id\_str) |
| refTableId\_str  | varchar(200)                       | None                         |
| column\_id\_str  | varchar(200)                       | None                         |

## Table: `source_target_table_mapping`


| Column Name                 | Data Type                                                                      | Index                                       |
| --------------------------- | ------------------------------------------------------------------------------ | ------------------------------------------- |
| id                          | int                                                                            | Part of PRIMARY KEY (id)                    |
| fact\_table\_id             | int                                                                            | None                                        |
| source\_table\_id           | int                                                                            | None                                        |
| source\_table\_type         | enum('SOURCE','LOGICAL')                                                       | None                                        |
| target\_table\_id           | int                                                                            | None                                        |
| target\_table\_type         | enum('TARGET','LOGICAL')                                                       | None                                        |
| mapping\_type               | enum('ONE\_TO\_ONE','UNION\_MAPPING','DENORM\_MAPPING','POLYMORPHIC\_MAPPING') | None                                        |
| is\_active                  | tinyint(1)                                                                     | None                                        |
| scope\_id                   | int                                                                            | Part of UNIQUE KEY (scope\_id)              |
| added\_on                   | timestamp                                                                      | None                                        |
| source\_table\_filter\_expr | text                                                                           | None                                        |
| id\_str                     | varchar(200)                                                                   | Part of UNIQUE KEY (id\_str)                |
| fact\_table\_id\_str        | varchar(200)                                                                   | Part of UNIQUE KEY (fact\_table\_id\_str)   |
| source\_table\_id\_str      | varchar(200)                                                                   | Part of UNIQUE KEY (source\_table\_id\_str) |
| target\_table\_id\_str      | varchar(200)                                                                   | Part of UNIQUE KEY (target\_table\_id\_str) |

## Table: `scope_dimension_mapping`


| Column Name    | Data Type | Index                               |
| -------------- | --------- | ----------------------------------- |
| id             | int(11)   | Part of PRIMARY KEY (id)            |
| dim\_table\_id | int(11)   | Part of UNIQUE KEY (dim\_table\_id) |
| scope\_id      | int(11)   | None                                |

## Table: `source_target_dimension_column_mapping`


| Column Name             | Data Type    | Index                                        |
| ----------------------- | ------------ | -------------------------------------------- |
| table\_mapping\_id      | int          | None                                         |
| source\_column\_id      | int          | None                                         |
| dimension\_id           | int          | None                                         |
| is\_active              | tinyint(1)   | None                                         |
| scope\_id               | int          | Part of UNIQUE KEY (scope\_id)               |
| added\_on               | timestamp    | None                                         |
| is\_joining\_required   | tinyint(1)   | None                                         |
| dim\_table\_id          | int          | None                                         |
| join\_col\_id           | int          | None                                         |
| select\_col\_id         | int          | None                                         |
| value\_mappings         | text         | None                                         |
| id\_str                 | varchar(254) | Part of UNIQUE KEY (id\_str)                 |
| table\_mapping\_id\_str | varchar(200) | Part of UNIQUE KEY (table\_mapping\_id\_str) |
| source\_column\_id\_str | varchar(200) | None                                         |
| dimension\_id\_str      | varchar(200) | Part of UNIQUE KEY (dimension\_id\_str)      |
| dim\_table\_id\_str     | varchar(200) | None                                         |
| join\_col\_id\_str      | varchar(200) | None                                         |
| select\_col\_id\_str    | varchar(200) | None                                         |

## Table: `fact_dimension_overlap`


| Column Name          | Data Type              | Index                                     |
| -------------------- | ---------------------- | ----------------------------------------- |
| id                   | int                    | Part of PRIMARY KEY (id)                  |
| name                 | varchar(200)           | None                                      |
| fact\_table\_id      | int                    | None                                      |
| dim\_id              | int                    | None                                      |
| overlap\_on\_id      | int                    | Part of UNIQUE KEY (overlap\_on\_id)      |
| overlap\_on\_type    | enum('PK','DIMENSION') | Part of UNIQUE KEY (overlap\_on\_type)    |
| dim\_col\_id         | int                    | None                                      |
| is\_active           | tinyint(1)             | None                                      |
| scope\_id            | int                    | None                                      |
| fact\_table\_id\_str | varchar(200)           | Part of UNIQUE KEY (fact\_table\_id\_str) |
| dim\_id\_str         | varchar(200)           | Part of UNIQUE KEY (dim\_id\_str)         |
| overlap\_on\_id\_str | varchar(200)           | None                                      |
| dim\_col\_id\_str    | varchar(200)           | None                                      |

## Table: `source_table_column`


| Column Name          | Data Type    | Index                               |
| -------------------- | ------------ | ----------------------------------- |
| id                   | int          | Part of PRIMARY KEY (id)            |
| name                 | varchar(99)  | Part of UNIQUE KEY (name)           |
| data\_type           | varchar(64)  | None                                |
| type\_metadata       | longtext     | None                                |
| table\_id            | int          | None                                |
| is\_active           | tinyint(1)   | None                                |
| added\_on            | timestamp    | None                                |
| scope\_id            | int          | None                                |
| default\_value       | varchar(99)  | None                                |
| is\_optional\_column | tinyint(1)   | None                                |
| id\_str              | varchar(200) | Part of UNIQUE KEY (id\_str)        |
| table\_id\_str       | varchar(200) | Part of UNIQUE KEY (table\_id\_str) |

## Table: `fact_table_run_type`


| Column Name    | Data Type              | Index                    |
| -------------- | ---------------------- | ------------------------ |
| id             | int                    | Part of PRIMARY KEY (id) |
| table\_id      | int                    | None                     |
| table\_type    | enum('FACT','SUMMARY') | None                     |
| is\_full\_run  | tinyint(1)             | None                     |
| is\_active     | tinyint(1)             | None                     |
| id\_str        | varchar(200)           | None                     |
| table\_id\_str | varchar(200)           | None                     |

## Table: `dimension_etl_data_status`


| Column Name         | Data Type    | Index                    |
| ------------------- | ------------ | ------------------------ |
| id                  | int          | Part of PRIMARY KEY (id) |
| scope\_id           | int          | None                     |
| dim\_table\_id      | int          | None                     |
| value\_id           | int          | None                     |
| value\_name         | varchar(100) | None                     |
| is\_active          | tinyint(1)   | None                     |
| updated\_on         | timestamp    | None                     |
| dim\_table\_id\_str | varchar(200) | None                     |

## Table: `block_column`


| Column Name             | Data Type      | Index                                        |
| ----------------------- | -------------- | -------------------------------------------- |
| compute\_block\_id\_str | varchar(200)   | Part of UNIQUE KEY (compute\_block\_id\_str) |
| name                    | varchar(50)    | Part of UNIQUE KEY (name)                    |
| data\_type              | enum('BIGINT', | None                                         |
| scope\_id               | INT            | Part of KEY (scope\_id)                      |
| column\_type            | enum('PK',     | Part of UNIQUE KEY (column\_type)            |
| is\_active              | TINYINT        | None                                         |

## Table: `compute_block`


| Column Name          | Data Type                             | Index                                     |
| -------------------- | ------------------------------------- | ----------------------------------------- |
| id\_str              | varchar(200)                          | Part of PRIMARY KEY (id\_str)             |
| block\_name          | varchar(100)                          | Part of UNIQUE KEY (block\_name)          |
| fact\_table\_id\_str | varchar(200)                          | Part of UNIQUE KEY (fact\_table\_id\_str) |
| transform\_sql       | text                                  | None                                      |
| rank                 | int(11)                               | None                                      |
| client               | ENUM('BLOCK','CAMPAIGN\_ATTRIBUTION') | None                                      |

## Table: `fact_kpis`


| Column Name         | Data Type                                                               | Index                        |
| ------------------- | ----------------------------------------------------------------------- | ---------------------------- |
| column\_id          | int                                                                     | None                         |
| table\_id           | int                                                                     | None                         |
| expression          | text                                                                    | None                         |
| type                | enum('MAP','INC\_REDUCE','NON\_INC\_REDUCE','NON\_INC\_RANK','SUMMARY') | None                         |
| is\_reversible      | tinyint(1)                                                              | None                         |
| primary\_key\_level | int                                                                     | None                         |
| is\_active          | tinyint(1)                                                              | None                         |
| scope\_id           | int                                                                     | None                         |
| last\_computed\_on  | timestamp                                                               | None                         |
| added\_on           | timestamp                                                               | None                         |
| updated\_on         | timestamp                                                               | None                         |
| id\_str             | varchar(254)                                                            | Part of UNIQUE KEY (id\_str) |
| column\_id\_str     | varchar(200)                                                            | None                         |
| table\_id\_str      | varchar(200)                                                            | None                         |

## Table: `fact_fk_constraints`


| Column Name         | Data Type                                                             | Index                                    |
| ------------------- | --------------------------------------------------------------------- | ---------------------------------------- |
| id                  | int                                                                   | Part of PRIMARY KEY (id)                 |
| column\_id          | int                                                                   | None                                     |
| table\_id           | int                                                                   | None                                     |
| ordinal\_position   | int                                                                   | Part of UNIQUE KEY (ordinal\_position)   |
| ref\_col\_id        | int                                                                   | None                                     |
| ref\_table\_id      | int                                                                   | None                                     |
| mapping\_type       | enum('ONE\_TO\_ONE','ONE\_TO\_MANY','MANY\_TO\_ONE','MANY\_TO\_MANY') | None                                     |
| relattion\_type     | enum('IS','BELONGS')                                                  | None                                     |
| is\_active          | tinyint(1)                                                            | None                                     |
| scope\_id           | int                                                                   | None                                     |
| added\_on           | timestamp                                                             | None                                     |
| id\_str             | varchar(200)                                                          | Part of UNIQUE KEY (id\_str)             |
| column\_id\_str     | varchar(200)                                                          | None                                     |
| table\_id\_str      | varchar(200)                                                          | Part of UNIQUE KEY (table\_id\_str)      |
| ref\_col\_id\_str   | varchar(200)                                                          | None                                     |
| ref\_table\_id\_str | varchar(200)                                                          | Part of UNIQUE KEY (ref\_table\_id\_str) |

## Table: `summary_table`


| Column Name             | Data Type    | Index                        |
| ----------------------- | ------------ | ---------------------------- |
| id                      | int          | Part of PRIMARY KEY (id)     |
| scope\_id               | int          | None                         |
| name                    | varchar(100) | None                         |
| primary\_date\_key      | int          | None                         |
| is\_active              | tinyint(1)   | None                         |
| id\_str                 | varchar(200) | Part of UNIQUE KEY (id\_str) |
| primary\_date\_key\_str | varchar(200) | None                         |

## Table: `flat_dimension_columns`


| Column Name                           | Data Type                                                                         | Index                                    |
| ------------------------------------- | --------------------------------------------------------------------------------- | ---------------------------------------- |
| column\_id                            | int                                                                               | Part of PRIMARY KEY (column\_id)         |
| dim\_table\_id                        | int                                                                               | None                                     |
| column\_name                          | varchar(100)                                                                      | Part of UNIQUE KEY (column\_name)        |
| column\_type                          | enum('PK','VALUE','ATTRIBUTE','DATE\_ATTRIBUTE','TIME\_ATTRIBUTE','ALIAS','NONE') | None                                     |
| scope\_id                             | int                                                                               | Part of UNIQUE KEY (scope\_id)           |
| is\_active                            | tinyint(1)                                                                        | None                                     |
| data\_type                            | enum('TEXT','NUMBER','BIGNUMBER','BOOLEAN','DATE','TIME','MAP')                   | None                                     |
| value\_col\_scope                     | enum('CAP','ORG')                                                                 | None                                     |
| display\_name                         | text                                                                              | None                                     |
| usability\_type                       | enum('DUMP\_ONLY','PARTIAL\_KEY','SELECT','FILTER','GROUP','BANDING')             | None                                     |
| functional\_dependency\_column        | int                                                                               | None                                     |
| unique\_value\_dependent\_column      | int                                                                               | None                                     |
| attr\_table\_name                     | varchar(100)                                                                      | None                                     |
| is\_attr\_value\_table\_present       | tinyint(1)                                                                        | None                                     |
| scd\_dimension\_table\_id             | int                                                                               | None                                     |
| computation\_type                     | enum('ETL','VIEW')                                                                | None                                     |
| location\_table\_type                 | enum('FACT','DIMENSION','VIEW','ATTR')                                            | None                                     |
| location\_type\_entity\_id            | int                                                                               | None                                     |
| scd\_type                             | enum('NONE','SOURCE\_GENERATED','ETL\_GENERATED','VERSIONED\_PARTITIONS')         | None                                     |
| scd\_table\_name                      | varchar(100)                                                                      | None                                     |
| key\_set\_resolver                    | varchar(255)                                                                      | None                                     |
| map\_key\_data\_type                  | enum('TEXT','NUMBER','BIGNUMBER','BOOLEAN','DATE','TIME')                         | None                                     |
| map\_value\_data\_type                | enum('TEXT','NUMBER','BIGNUMBER','BOOLEAN','DATE','TIME')                         | None                                     |
| column\_id\_str                       | varchar(200)                                                                      | Part of UNIQUE KEY (column\_id\_str)     |
| dim\_table\_id\_str                   | varchar(200)                                                                      | Part of UNIQUE KEY (dim\_table\_id\_str) |
| functional\_dependency\_column\_str   | varchar(200)                                                                      | None                                     |
| unique\_value\_dependent\_column\_str | varchar(200)                                                                      | None                                     |
| scd\_dimension\_table\_id\_str        | varchar(200)                                                                      | None                                     |
| location\_type\_entity\_id\_str       | varchar(200)                                                                      | None                                     |

## Table: `org_context`


| Column Name    | Data Type    | Index                    |
| -------------- | ------------ | ------------------------ |
| id             | int          | Part of PRIMARY KEY (id) |
| org\_id        | int          | None                     |
| context\_key   | varchar(100) | None                     |
| is\_active     | tinyint(1)   | None                     |
| context\_value | int          | None                     |
| id\_str        | varchar(200) | None                     |

## Table: `union_mapping`


| Column Name                   | Data Type    | Index                        |
| ----------------------------- | ------------ | ---------------------------- |
| table\_mapping\_id            | int          | None                         |
| target\_diff\_column\_id      | int          | None                         |
| diff\_column\_value           | varchar(99)  | None                         |
| is\_active                    | tinyint(1)   | None                         |
| scope\_id                     | int          | None                         |
| added\_on                     | timestamp    | None                         |
| is\_dynamic\_partition        | tinyint(1)   | None                         |
| id\_str                       | varchar(254) | Part of UNIQUE KEY (id\_str) |
| table\_mapping\_id\_str       | varchar(200) | None                         |
| target\_diff\_column\_id\_str | varchar(200) | None                         |

## Table: `source_table_fk_constraints`


| Column Name       | Data Type    | Index                                  |
| ----------------- | ------------ | -------------------------------------- |
| id                | int          | Part of PRIMARY KEY (id)               |
| constraint\_name  | varchar(99)  | None                                   |
| column\_id        | int          | None                                   |
| ordinal\_position | int          | None                                   |
| ref\_col\_id      | int          | None                                   |
| is\_active        | tinyint(1)   | None                                   |
| scope\_id         | int          | None                                   |
| added\_on         | timestamp    | None                                   |
| id\_str           | varchar(200) | Part of UNIQUE KEY (id\_str)           |
| column\_id\_str   | varchar(200) | Part of UNIQUE KEY (column\_id\_str)   |
| ref\_col\_id\_str | varchar(200) | Part of UNIQUE KEY (ref\_col\_id\_str) |

## Table: `dimension_attribute_value_tables`


| Column Name   | Data Type                    | Index                              |
| ------------- | ---------------------------- | ---------------------------------- |
| id            | int                          | Part of PRIMARY KEY (id)           |
| table\_prefix | varchar(32)                  | Part of UNIQUE KEY (table\_prefix) |
| scope         | enum('CAP','VERTICAL','ORG') | Part of UNIQUE KEY (scope)         |
| id\_str       | varchar(200)                 | Part of UNIQUE KEY (id\_str)       |

## Table: `config_key_values`


| Column Name       | Data Type    | Index                          |
| ----------------- | ------------ | ------------------------------ |
| id                | int          | Part of PRIMARY KEY (id)       |
| scope\_id         | int          | Part of UNIQUE KEY (scope\_id) |
| key               | varchar(100) | Part of UNIQUE KEY (key)       |
| value             | varchar(100) | None                           |
| is\_valid         | tinyint(1)   | None                           |
| last\_updated\_on | timestamp    | None                           |
| id\_str           | varchar(200) | Part of UNIQUE KEY (id\_str)   |

## Table: `transpose_tables`


| Column Name                | Data Type    | Index                                           |
| -------------------------- | ------------ | ----------------------------------------------- |
| transposed\_table\_id      | int          | None                                            |
| source\_table\_id          | int          | None                                            |
| scope\_id                  | int          | None                                            |
| is\_active                 | int          | None                                            |
| transposed\_table\_id\_str | varchar(200) | Part of UNIQUE KEY (transposed\_table\_id\_str) |
| source\_table\_id\_str     | varchar(200) | None                                            |

## Table: `fact_table_column`


| Column Name                       | Data Type                                                                                                                                                                       | Index                        |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- |
| id                                | int                                                                                                                                                                             | Part of PRIMARY KEY (id)     |
| fact\_table\_id                   | int                                                                                                                                                                             | None                         |
| name                              | varchar(99)                                                                                                                                                                     | None                         |
| data\_type                        | enum('INT','BIGINT','DOUBLE','TEXT')                                                                                                                                            | None                         |
| ordinal\_position                 | int                                                                                                                                                                             | None                         |
| column\_type                      | enum('PK','CONSTANT\_PK','SRC\_MEASURE','COMPUTED\_MEASURE','DIMENSION','COMPUTED\_DIMENSION','FACT\_REFERENCE','PARTITION\_KEY','DUMP\_DATA','ETL\_ONLY\_DIMENSION','DIM\_PK') | None                         |
| meta                              | varchar(99)                                                                                                                                                                     | None                         |
| is\_active                        | tinyint(1)                                                                                                                                                                      | None                         |
| is\_visible                       | tinyint(1)                                                                                                                                                                      | None                         |
| scope\_id                         | int                                                                                                                                                                             | None                         |
| functional\_dependency\_keys      | varchar(100)                                                                                                                                                                    | None                         |
| added\_on                         | timestamp                                                                                                                                                                       | None                         |
| updated\_on                       | timestamp                                                                                                                                                                       | None                         |
| id\_str                           | varchar(200)                                                                                                                                                                    | Part of UNIQUE KEY (id\_str) |
| fact\_table\_id\_str              | varchar(200)                                                                                                                                                                    | None                         |
| functional\_dependency\_keys\_str | text                                                                                                                                                                            | None                         |

## Table: `attribution_strategy_mapping`


| Column Name             | Data Type    | Index                                      |
| ----------------------- | ------------ | ------------------------------------------ |
| strategy\_id            | int          | None                                       |
| fact\_table\_id         | int          | None                                       |
| fact\_column\_id        | int          | None                                       |
| source\_table\_id       | int          | None                                       |
| source\_column\_id      | int          | None                                       |
| scope\_id               | int          | Part of UNIQUE KEY (scope\_id)             |
| is\_active              | tinyint(1)   | None                                       |
| updated\_on             | timestamp    | None                                       |
| strategy\_id\_str       | varchar(200) | Part of UNIQUE KEY (strategy\_id\_str)     |
| fact\_table\_id\_str    | varchar(200) | Part of UNIQUE KEY (fact\_table\_id\_str)  |
| fact\_column\_id\_str   | varchar(200) | Part of UNIQUE KEY (fact\_column\_id\_str) |
| source\_table\_id\_str  | varchar(200) | None                                       |
| source\_column\_id\_str | varchar(200) | None                                       |

## Table: `org_dimension_provider_mapping`


| Column Name    | Data Type | Index                               |
| -------------- | --------- | ----------------------------------- |
| id             | int(11)   | Part of PRIMARY KEY (id)            |
| org\_id        | int(11)   | Part of UNIQUE KEY (org\_id)        |
| dim\_table\_id | int(11)   | Part of UNIQUE KEY (dim\_table\_id) |
| provider\_id   | int(11)   | Part of UNIQUE KEY (provider\_id)   |

## Table: `provider_dimension_mapping`


| Column Name                | Data Type    | Index                        |
| -------------------------- | ------------ | ---------------------------- |
| id                         | int          | Part of PRIMARY KEY (id)     |
| provider\_table\_id        | int          | None                         |
| provider\_col\_name        | varchar(100) | None                         |
| dim\_table\_id             | int          | None                         |
| dimension\_column\_id      | int          | None                         |
| scope\_id                  | int          | None                         |
| null\_value                | varchar(100) | None                         |
| not\_null\_value           | varchar(100) | None                         |
| value\_mappings            | text         | None                         |
| capture\_default\_value    | tinyint(1)   | None                         |
| is\_valid                  | tinyint(1)   | None                         |
| id\_str                    | varchar(254) | Part of UNIQUE KEY (id\_str) |
| provider\_table\_id\_str   | varchar(200) | None                         |
| provider\_col\_name\_str   | text         | None                         |
| dim\_table\_id\_str        | varchar(200) | None                         |
| dimension\_column\_id\_str | text         | None                         |

## Table: `block_input_table`


| Column Name             | Data Type    | Index                                        |
| ----------------------- | ------------ | -------------------------------------------- |
| compute\_block\_id\_str | varchar(200) | Part of UNIQUE KEY (compute\_block\_id\_str) |
| table\_name             | varchar(50)  | None                                         |
| table\_alias            | varchar(50)  | Part of UNIQUE KEY (table\_alias)            |
| water\_mark\_days       | INT          | None                                         |
| is\_active              | TINYINT      | None                                         |

## Table: `mongo_structs`


| Column Name | Data Type    | Index                        |
| ----------- | ------------ | ---------------------------- |
| id          | int          | Part of PRIMARY KEY (id)     |
| name        | varchar(50)  | Part of UNIQUE KEY (name)    |
| info        | text         | None                         |
| is\_active  | tinyint(1)   | None                         |
| scope\_id   | int          | None                         |
| added\_on   | timestamp    | None                         |
| id\_str     | varchar(200) | Part of UNIQUE KEY (id\_str) |

## Table: `provider_tables`


| Column Name       | Data Type    | Index                        |
| ----------------- | ------------ | ---------------------------- |
| id                | int          | Part of PRIMARY KEY (id)     |
| provider\_id      | int          | None                         |
| name              | varchar(100) | None                         |
| id\_str           | varchar(200) | Part of UNIQUE KEY (id\_str) |
| provider\_id\_str | varchar(200) | None                         |

## Table: `mongo_source_columns`


| Column Name             | Data Type    | Index                                        |
| ----------------------- | ------------ | -------------------------------------------- |
| source\_column\_id      | int          | None                                         |
| source\_table\_id       | int          | None                                         |
| expression              | text         | None                                         |
| scope\_id               | int          | None                                         |
| source\_column\_id\_str | varchar(200) | Part of UNIQUE KEY (source\_column\_id\_str) |
| source\_table\_id\_str  | varchar(200) | None                                         |

## Table: `scd_dimension_columns`


| Column Name                           | Data Type                                                                                                         | Index                                    |
| ------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ---------------------------------------- |
| column\_id                            | int                                                                                                               | Part of PRIMARY KEY (column\_id)         |
| dim\_table\_id                        | int                                                                                                               | None                                     |
| column\_name                          | varchar(100)                                                                                                      | Part of UNIQUE KEY (column\_name)        |
| column\_type                          | enum('PK','ATTRIBUTE','DATE\_ATTRIBUTE','TIME\_ATTRIBUTE','START\_DATE','END\_DATE','NONE','CHANGING\_ATTRIBUTE') | None                                     |
| scope\_id                             | int                                                                                                               | Part of UNIQUE KEY (scope\_id)           |
| is\_active                            | tinyint(1)                                                                                                        | None                                     |
| data\_type                            | enum('TEXT','NUMBER','BIGNUMBER','BOOLEAN','DATE','TIME')                                                         | None                                     |
| value\_col\_scope                     | enum('CAP','ORG')                                                                                                 | None                                     |
| display\_name                         | text                                                                                                              | None                                     |
| usability\_type                       | enum('DUMP\_ONLY','PARTIAL\_KEY','SELECT','FILTER','GROUP','BANDING')                                             | None                                     |
| functional\_dependency\_column        | int                                                                                                               | None                                     |
| unique\_value\_dependent\_column      | int                                                                                                               | None                                     |
| attr\_table\_name                     | varchar(100)                                                                                                      | None                                     |
| is\_attr\_value\_table\_present       | tinyint(1)                                                                                                        | None                                     |
| computation\_type                     | enum('ETL','VIEW')                                                                                                | None                                     |
| location\_table\_type                 | enum('FACT','DIMENSION','VIEW','ATTR')                                                                            | None                                     |
| location\_type\_entity\_id            | int                                                                                                               | None                                     |
| column\_id\_str                       | varchar(200)                                                                                                      | Part of UNIQUE KEY (column\_id\_str)     |
| dim\_table\_id\_str                   | varchar(200)                                                                                                      | Part of UNIQUE KEY (dim\_table\_id\_str) |
| functional\_dependency\_column\_str   | varchar(200)                                                                                                      | None                                     |
| unique\_value\_dependent\_column\_str | varchar(200)                                                                                                      | None                                     |
| location\_type\_entity\_id\_str       | varchar(200)                                                                                                      | None                                     |

## Table: `stateless_kpis`


| Column Name | Data Type                             | Index                         |
| ----------- | ------------------------------------- | ----------------------------- |
| id\_str     | VARCHAR(255)                          | Part of PRIMARY KEY (id\_str) |
| name        | VARCHAR(255)                          | None                          |
| json        | TEXT                                  | None                          |
| scope\_id   | INT                                   | None                          |
| is\_active  | TINYINT                               | None                          |
| added\_on   | DATETIME                              | None                          |
| updated\_on | TIMESTAMP                             | None                          |
| client      | ENUM('BLOCK','CAMPAIGN\_ATTRIBUTION') | None                          |

## Table: `scopes`


| Column Name | Data Type                    | Index                           |
| ----------- | ---------------------------- | ------------------------------- |
| scope\_id   | int(11)                      | Part of PRIMARY KEY (scope\_id) |
| name        | varchar(45)                  | None                            |
| scope       | enum('CAP','VERTICAL','ORG') | None                            |

## Table: `fact_table_standard_condition`


| Column Name          | Data Type                          | Index                                     |
| -------------------- | ---------------------------------- | ----------------------------------------- |
| id                   | int                                | Part of PRIMARY KEY (id)                  |
| name                 | varchar(200)                       | None                                      |
| fact\_table\_id      | int                                | None                                      |
| tableType            | enum('FACT','DIMENSION','SUMMARY') | Part of UNIQUE KEY (tableType)            |
| refTableId           | int                                | None                                      |
| column\_id           | int                                | None                                      |
| operator             | varchar(10)                        | None                                      |
| condition\_value     | text                               | None                                      |
| is\_active           | tinyint(1)                         | None                                      |
| scope\_id            | int                                | Part of UNIQUE KEY (scope\_id)            |
| id\_str              | varchar(200)                       | None                                      |
| fact\_table\_id\_str | varchar(200)                       | Part of UNIQUE KEY (fact\_table\_id\_str) |
| refTableId\_str      | varchar(200)                       | Part of UNIQUE KEY (refTableId\_str)      |
| column\_id\_str      | varchar(200)                       | Part of UNIQUE KEY (column\_id\_str)      |

## Table: `logical_view_column_definition`


| Column Name          | Data Type    | Index                                |
| -------------------- | ------------ | ------------------------------------ |
| column\_id           | int          | Part of PRIMARY KEY (column\_id)     |
| view\_id             | int          | None                                 |
| scope\_id            | int          | None                                 |
| select\_col\_id      | int          | None                                 |
| alias                | varchar(100) | None                                 |
| dim\_table\_id       | int          | None                                 |
| dim\_col\_id         | int          | None                                 |
| is\_active           | tinyint(1)   | None                                 |
| column\_id\_str      | varchar(200) | Part of UNIQUE KEY (column\_id\_str) |
| view\_id\_str        | varchar(200) | None                                 |
| select\_col\_id\_str | varchar(200) | None                                 |
| dim\_table\_id\_str  | varchar(200) | None                                 |
| dim\_col\_id\_str    | varchar(200) | None                                 |

## Table: `organization_scopes`


| Column Name | Data Type    | Index                    |
| ----------- | ------------ | ------------------------ |
| id          | int          | Part of PRIMARY KEY (id) |
| org\_id     | int          | None                     |
| scope\_id   | int          | None                     |
| id\_str     | varchar(200) | None                     |

## Table: `dimension`


| Column Name              | Data Type               | Index                             |
| ------------------------ | ----------------------- | --------------------------------- |
| dim\_id                  | int                     | Part of PRIMARY KEY (dim\_id)     |
| fact\_column\_link       | varchar(100)            | None                              |
| name                     | varchar(100)            | Part of UNIQUE KEY (name)         |
| dim\_table\_id           | int                     | None                              |
| scope\_id                | int                     | None                              |
| is\_active               | tinyint(1)              | None                              |
| added\_on                | timestamp               | None                              |
| updated\_on              | timestamp               | None                              |
| display\_name            | text                    | None                              |
| description              | varchar(250)            | None                              |
| link\_type               | enum('DIRECT','BRIDGE') | None                              |
| bridge\_table\_src\_type | enum('DIM','FACT')      | None                              |
| bridge\_table\_id        | int                     | None                              |
| fact\_pk                 | int                     | None                              |
| dim\_fk                  | int                     | None                              |
| dim\_id\_str             | varchar(200)            | Part of UNIQUE KEY (dim\_id\_str) |
| dim\_table\_id\_str      | varchar(200)            | None                              |
| bridge\_table\_id\_str   | varchar(200)            | None                              |
| fact\_pk\_str            | varchar(200)            | None                              |
| dim\_fk\_str             | varchar(200)            | None                              |

## Table: `fact_table`


| Column Name                            | Data Type                                              | Index                        |
| -------------------------------------- | ------------------------------------------------------ | ---------------------------- |
| id                                     | int                                                    | Part of PRIMARY KEY (id)     |
| scope                                  | enum('CAP','VERTICAL','ORG')                           | None                         |
| scope\_id                              | int                                                    | None                         |
| name                                   | varchar(55)                                            | Part of UNIQUE KEY (name)    |
| definition                             | text                                                   | None                         |
| is\_active                             | tinyint(1)                                             | None                         |
| primary\_date\_key\_dimension          | int                                                    | None                         |
| primary\_date\_key\_dimension\_id      | int                                                    | None                         |
| parent\_src\_tables                    | varchar(100)                                           | None                         |
| partition\_keys                        | varchar(500)                                           | None                         |
| context\_keys                          | varchar(500)                                           | None                         |
| added\_on                              | timestamp                                              | None                         |
| updated\_on                            | timestamp                                              | None                         |
| incremental\_period\_in\_year          | int                                                    | None                         |
| type                                   | enum('BASE','ETL\_ONLY','EXPORT\_ONLY','SCD\_HISTORY') | None                         |
| id\_str                                | varchar(200)                                           | Part of UNIQUE KEY (id\_str) |
| primary\_date\_key\_dimension\_str     | varchar(200)                                           | None                         |
| primary\_date\_key\_dimension\_id\_str | varchar(200)                                           | None                         |
| parent\_src\_tables\_str               | text                                                   | None                         |

## Table: `dimension_table`


| Column Name             | Data Type                                                                            | Index                        |
| ----------------------- | ------------------------------------------------------------------------------------ | ---------------------------- |
| id                      | int                                                                                  | Part of PRIMARY KEY (id)     |
| name                    | varchar(100)                                                                         | Part of UNIQUE KEY (name)    |
| scope                   | enum('CAP','VERTICAL','ORG')                                                         | None                         |
| scope\_id               | int                                                                                  | None                         |
| dim\_type               | enum('STANDARD\_CONSTANT','STANDARD','USER\_DEFINED','SRC\_DEFINED','EXTERNAL\_SRC') | None                         |
| structure\_type         | enum('FLAT','HIERARCHICAL','SCD')                                                    | None                         |
| is\_active              | tinyint(1)                                                                           | None                         |
| is\_large               | tinyint(1)                                                                           | None                         |
| is\_elastic\_indexed    | tinyint                                                                              | None                         |
| is\_storage\_fragmented | tinyint(1)                                                                           | None                         |
| added\_on               | timestamp                                                                            | None                         |
| updated\_on             | timestamp                                                                            | None                         |
| auto\_update\_cols      | varchar(100)                                                                         | None                         |
| id\_str                 | varchar(200)                                                                         | Part of UNIQUE KEY (id\_str) |
| auto\_update\_cols\_str | text                                                                                 | None                         |

## Table: `source_schema_end_point_mapping`


| Column Name      | Data Type                                    | Index                                 |
| ---------------- | -------------------------------------------- | ------------------------------------- |
| id               | int                                          | Part of PRIMARY KEY (id)              |
| db\_name         | varchar(99)                                  | Part of UNIQUE KEY (db\_name)         |
| end\_point\_name | varchar(99)                                  | Part of UNIQUE KEY (end\_point\_name) |
| dialect          | enum('MYSQL','SPARK','MONGO','ES','DERIVED') | None                                  |
| is\_active       | tinyint(1)                                   | None                                  |
| added\_on        | timestamp                                    | None                                  |
| id\_str          | varchar(200)                                 | Part of UNIQUE KEY (id\_str)          |

## Table: `validation_workflow_run_details`


| Column Name           | Data Type    | Index                    |
| --------------------- | ------------ | ------------------------ |
| id                    | int(11)      | Part of PRIMARY KEY (id) |
| validation\_result    | varchar(255) | None                     |
| nse\_workflow\_status | varchar(255) | None                     |
| nse\_message          | text         | None                     |
| start\_time           | timestamp    | None                     |
| end\_time             | timestamp    | None                     |
| auto\_update\_time    | timestamp    | None                     |

## Table: `inference_meta_table`


| Column Name         | Data Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Index                                    |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- |
| id                  | int(11)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Part of PRIMARY KEY (id)                 |
| org\_id             | int(11)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Part of UNIQUE KEY (org\_id)             |
| business\_objective | enum('EI','personalized\_campaigns')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Part of UNIQUE KEY (business\_objective) |
| objective           | enum('transaction\_propensity','lapsation\_propensity','response\_propensity','product\_propensity','store\_propensity','time\_slot\_propensity','product\_personalization','time\_personalization','store\_personalization','offer\_propensity','repurchase\_propensity','ramzan\_transaction\_propensity','customer\_life\_time\_value\_fact','similar\_items\_attribute\_based\_fact','frequently\_bought\_together\_fact','bought\_together\_also\_bought\_fact','overall\_popular\_items\_fact','trending\_items\_fact','upsell\_propensity\_fact','cross\_sell\_propensity\_fact','promotional\_product\_propensity','channel\_propensity', | Part of UNIQUE KEY (objective)           |
| creation\_time      | timestamp                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | None                                     |
| req\_id             | int(11)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | None                                     |

## Table: `ei_score_results`


| Column Name                    | Data Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Index                    |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------ |
| id                             | int(11)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Part of PRIMARY KEY (id) |
| org\_id                        | int(15)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | None                     |
| objective                      | enum('lapsation\_propensity','response\_propensity','upsell\_propensity','store\_propensity','time\_slot\_propensity','product\_propensity','transaction\_propensity','ramzan\_transaction\_propensity','offer\_propensity','customer\_life\_time\_value\_fact','repurchase\_propensity','similar\_items\_attribute\_based\_fact','frequently\_bought\_together\_fact','bought\_together\_also\_bought\_fact','overall\_popular\_items\_fact','trending\_items\_fact','upsell\_propensity\_fact','cross\_sell\_propensity\_fact','promotional\_product\_propensity','channel\_propensity', | None                     |
| req\_id                        | int(11)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | None                     |
| ei\_score\_generated\_datetime | timestamp                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | None                     |
| ei\_score\_generation\_status  | enum('SUCCEEDED','FAILED','QUEUED')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | None                     |
| ei\_score\_params              | varchar(1500)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | None                     |
| result\_path                   | varchar(150)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | None                     |
| fact\_upload\_datetime         | datetime                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | None                     |
| failed\_message                | varchar(4095)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | None                     |
| upload\_meta\_data             | varchar(500)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | None                     |
| upload\_result\_path           | varchar(500)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | None                     |
| upload\_status                 | enum('EI\_VALIDATION\_FAILED','EI\_UPLOADED','EI\_SUCCEEDED','EI\_FAILED')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | None                     |

## Table: `org_profiler`


| Column Name             | Data Type    | Index                    |
| ----------------------- | ------------ | ------------------------ |
| id                      | int(15)      | Part of PRIMARY KEY (id) |
| org\_id                 | int(20)      | None                     |
| profile\_type           | varchar(100) | None                     |
| path                    | varchar(200) | None                     |
| last\_updated\_datetime | timestamp    | None                     |
| start\_date             | varchar(50)  | None                     |
| end\_date               | varchar(50)  | None                     |

## Table: `scheduled_orgs_runs`


| Column Name         | Data Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Index                    |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------ |
| id                  | int(11)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Part of PRIMARY KEY (id) |
| org\_id             | int(11)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | None                     |
| objective           | enum('transaction\_propensity','lapsation\_propensity','response\_propensity','product\_propensity','store\_propensity','time\_slot\_propensity','product\_personalization','time\_personalization','store\_personalization','offer\_personalization','repurchase\_propensity','ramzan\_transaction\_propensity','customer\_life\_time\_value\_fact','similar\_items\_attribute\_based\_fact','frequently\_bought\_together\_fact','bought\_together\_also\_bought\_fact','overall\_popular\_items\_fact','trending\_items\_fact','upsell\_propensity\_fact','cross\_sell\_propensity\_fact','promotional\_product\_propensity','trending\_categories','channel\_propensity','segmented\_trending', | None                     |
| global\_dag\_params | text                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | None                     |
| last\_updated       | timestamp                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | None                     |
| status              | enum('QUEUED','SUCCEEDED','EXECUTING','FAILED')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | None                     |
| error\_msg          | VARCHAR(512)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | None                     |
| start\_time         | timestamp                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | None                     |
| end\_time           | timestamp                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | None                     |

## Table: `incremental`


| Column Name             | Data Type           | Index                    |
| ----------------------- | ------------------- | ------------------------ |
| id                      | int(11)             | Part of PRIMARY KEY (id) |
| org\_id                 | int(20)             | None                     |
| model                   | enum(               | None                     |
| algo                    | varchar(100)        | None                     |
| snapshot\_date          | timestamp           | None                     |
| updated\_datetime       | timestamp           | None                     |
| featuregen\_start\_date | timestamp           | None                     |
| featuregen\_end\_date   | timestamp           | None                     |
| metadata                | varchar(1000)       | None                     |
| attrib\_json            | varchar(1500)       | None                     |
| type                    | enum('incremental', | None                     |

## Table: `model_enabled_status`


| Column Name         | Data Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Index                                    |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- |
| uid                 | int(11)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | None                                     |
| org\_id             | int(11)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Part of KEY (org\_id)                    |
| business\_objective | enum('EI','personalized\_campaigns')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Part of UNIQUE KEY (business\_objective) |
| models              | varchar(64)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Part of UNIQUE KEY (models)              |
| objective           | enum('transaction\_propensity','lapsation\_propensity','response\_propensity','product\_propensity','store\_propensity','time\_slot\_propensity','product\_personalization','time\_personalization','store\_personalization','offer\_propensity','repurchase\_propensity','ramzan\_transaction\_propensity','customer\_life\_time\_value\_fact','similar\_items\_attribute\_based\_fact','frequently\_bought\_together\_fact','bought\_together\_also\_bought\_fact','overall\_popular\_items\_fact','trending\_items\_fact','upsell\_propensity\_fact','cross\_sell\_propensity\_fact','promotional\_product\_propensity','channel\_propensity', | Part of UNIQUE KEY (objective)           |
| is\_enabled         | enum('0','1')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Part of UNIQUE KEY (is\_enabled)         |
| last\_updated\_time | timestamp                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | None                                     |
| creation\_time      | timestamp                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | None                                     |
| emailids            | varchar(1024)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | None                                     |
| emailenabled        | enum('0','1')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | None                                     |
| campaignEnabled     | varchar(1)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | None                                     |
| custom\_objectives  | varchar(2048)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | None                                     |

## Table: `dvf_request_table`


| Column Name         | Data Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Index                              |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------- |
| creation\_time      | timestamp                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | None                               |
| dvf\_req\_id        | int(11)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Part of PRIMARY KEY (dvf\_req\_id) |
| org\_id             | int(11)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | None                               |
| status              | enum('In\_progress','Success','Failure')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | None                               |
| last\_updated\_time | timestamp                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | None                               |
| objective           | enum('transaction\_propensity','lapsation\_propensity','response\_propensity','product\_propensity','store\_propensity','time\_slot\_propensity','product\_personalization','time\_personalization','store\_personalization','offer\_propensity','repurchase\_propensity','ramzan\_transaction\_propensity','customer\_life\_time\_value\_fact','similar\_items\_attribute\_based\_fact','frequently\_bought\_together\_fact','bought\_together\_also\_bought\_fact','overall\_popular\_items\_fact','trending\_items\_fact','upsell\_propensity\_fact','cross\_sell\_propensity\_fact','promotional\_product\_propensity','trending\_categories','channel\_propensity','segmented\_trending', | None                               |

## Table: `model_training_logs`


| Column Name                   | Data Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Index                    |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------ |
| id                            | int(11)                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Part of PRIMARY KEY (id) |
| org\_id                       | int(11)                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Part of KEY (org\_id)    |
| objective                     | enum('product\_personalization','time\_personalization','offer\_personalization','propensity\_modelling','store\_personalization')                                                                                                                                                                                                                                                                                                                                              | None                     |
| snapshot\_date                | datetime                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | None                     |
| model\_location               | varchar(256)                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | None                     |
| attrb\_json                   | varchar(2048)                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | None                     |
| resultJson                    | varchar(2048)                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | None                     |
| last\_updated                 | timestamp                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | None                     |
| start\_time                   | timestamp                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | None                     |
| end\_time                     | timestamp                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | None                     |
| status                        | enum('QUEUED','SUBMITTED','EXECUTING','FAILED','SUCCEEDED')                                                                                                                                                                                                                                                                                                                                                                                                                     | None                     |
| latest\_available\_data\_date | timestamp                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | None                     |
| model\_name                   | enum('implicit\_als\_user\_item','implicit\_als\_user\_category','popular','upsell\_propensity','campaign\_propensity','lapsation\_propensity','repurchase\_recommendation','bm25','segmented\_popular','fir\_and\_proxmity\_model','time\_personalization\_rule\_based','time\_slot\_propensity','category\_sequence\_predictor','model\_provisioning','time\_personalization','response\_propensity','transaction\_propensity','offer\_personalizaton','channel\_propensity', | None                     |
| cat\_hierarchy                | longtext                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | None                     |
| datagen\_id                   | int(11)                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | None                     |

## Table: `model_experiments_table`


| Column Name                | Data Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Index                           |
| -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------- |
| req\_id                    | int(11)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Part of PRIMARY KEY (req\_id)   |
| org\_id                    | int(11)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | None                            |
| business\_objective        | enum('EI','personalized\_campaigns','Reco','RecoEI')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | None                            |
| objective                  | enum('transaction\_propensity','lapsation\_propensity','response\_propensity','product\_propensity','store\_propensity','time\_slot\_propensity','product\_personalization','time\_personalization','store\_personalization','offer\_personalization','repurchase\_propensity','ramzan\_transaction\_propensity','customer\_life\_time\_value\_fact','similar\_items\_attribute\_based\_fact','frequently\_bought\_together\_fact','bought\_together\_also\_bought\_fact','overall\_popular\_items\_fact','trending\_items\_fact','upsell\_propensity\_fact','cross\_sell\_propensity\_fact','promotional\_product\_propensity','trending\_categories','channel\_propensity','segmented\_trending', | None                            |
| tuning\_params             | varchar(4096)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | None                            |
| evaluation\_metrics        | varchar(4096)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | None                            |
| creation\_time             | timestamp                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | None                            |
| status                     | enum('QUEUED','SUCCEEDED','EXECUTING','FAILED')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | None                            |
| data\_generation\_params   | varchar(4096)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | None                            |
| logs\_path                 | varchar(256)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | None                            |
| training\_req\_id          | int(11)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Part of KEY (training\_req\_id) |
| time\_taken\_for\_training | varchar(100)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | None                            |

## Table: `ei_enabled_orgs`


| Column Name  | Data Type | Index                    |
| ------------ | --------- | ------------------------ |
| id           | int(11)   | Part of PRIMARY KEY (id) |
| org\_id      | int(11)   | None                     |
| dso\_enabled | enum('1') | None                     |

## Table: `scheduled_orgs`


| Column Name       | Data Type                                                                                                                                                                                                                                                                         | Index                    |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------ |
| id                | int(11)                                                                                                                                                                                                                                                                           | Part of PRIMARY KEY (id) |
| org\_id           | int(11)                                                                                                                                                                                                                                                                           | None                     |
| objective         | enum('transaction\_propensity','lapsation\_propensity','response\_propensity','product\_propensity','store\_propensity','time\_slot\_propensity','repurchase\_propensity','customer\_life\_time\_value\_fact','trending\_categories','channel\_propensity','segmented\_trending', | None                     |
| last\_updated     | timestamp                                                                                                                                                                                                                                                                         | None                     |
| interval          | int(11)                                                                                                                                                                                                                                                                           | None                     |
| uid               | int(15)                                                                                                                                                                                                                                                                           | None                     |
| campaign\_enabled | varchar(1)                                                                                                                                                                                                                                                                        | None                     |

## Table: `model_list_table`


| Column Name   | Data Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Index |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----- |
| id            | int(11)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | None  |
| objective     | enum('transaction\_propensity','lapsation\_propensity','response\_propensity','product\_propensity','store\_propensity','time\_slot\_propensity','product\_personalization','time\_personalization','store\_personalization','offer\_propensity','repurchase\_propensity','ramzan\_transaction\_propensity','customer\_life\_time\_value\_fact','similar\_items\_attribute\_based\_fact','frequently\_bought\_together\_fact','bought\_together\_also\_bought\_fact','overall\_popular\_items\_fact','trending\_items\_fact','upsell\_propensity\_fact','cross\_sell\_propensity\_fact','promotional\_product\_propensity','trending\_categories','channel\_propensity','segmented\_trending', | None  |
| default\_algo | varchar(128)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | None  |

## Table: `ei_score_testing_tuning`


| Column Name                    | Data Type                                                                                                                                                                                                                                                                                                        | Index            |
| ------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------- |
| id                             | int(11)                                                                                                                                                                                                                                                                                                          | Part of KEY (id) |
| org\_id                        | int(15)                                                                                                                                                                                                                                                                                                          | None             |
| objective                      | enum('lapsation\_propensity','campaign\_propensity','cluster\_generation','upsell','cluster\_labelling','store\_personalization','time\_personalization\_rule\_based','response\_propensity','store\_propensity','time\_slot\_propensity','product\_propensity','transaction\_propensity','channel\_propensity', | None             |
| ei\_score\_generated\_datetime | timestamp                                                                                                                                                                                                                                                                                                        | None             |
| ei\_score\_generation\_status  | varchar(20)                                                                                                                                                                                                                                                                                                      | None             |
| ei\_score\_params              | varchar(1500)                                                                                                                                                                                                                                                                                                    | None             |
| ei\_score\_tuning\_results     | varchar(4095)                                                                                                                                                                                                                                                                                                    | None             |
| result\_path                   | varchar(150)                                                                                                                                                                                                                                                                                                     | None             |
| segment\_id                    | int(11)                                                                                                                                                                                                                                                                                                          | None             |
| segment\_name                  | enum('Cluster                                                                                                                                                                                                                                                                                                    | None             |
| segment\_upload\_datetime      | datetime                                                                                                                                                                                                                                                                                                         | None             |
| segment\_description           | varchar(4095)                                                                                                                                                                                                                                                                                                    | None             |
| segment\_result\_path          | varchar(500)                                                                                                                                                                                                                                                                                                     | None             |
| upload\_status                 | varchar(10)                                                                                                                                                                                                                                                                                                      | None             |

## Table: `ei_factnames`


| Column Name | Data Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Index                    |
| ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------ |
| id          | int(11)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Part of PRIMARY KEY (id) |
| factname    | enum('lapsation\_propensity','response\_propensity','store\_propensity','time\_slot\_propensity','product\_propensity','transaction\_propensity','ramzan\_transaction\_propensity','customer\_life\_time\_value\_fact','offer\_propensity','repurchase\_propensity','similar\_items\_attribute\_based\_fact','frequently\_bought\_together\_fact','bought\_together\_also\_bought\_fact','overall\_popular\_items\_fact','trending\_items\_fact','upsell\_propensity\_fact','cross\_sell\_propensity\_fact','promotional\_product\_propensity','channel\_propensity','rfm\_segmentation', | None                     |

## Table: `model_evaluation_metrics`


| Column Name                 | Data Type     | Index                    |
| --------------------------- | ------------- | ------------------------ |
| id                          | int(11)       | Part of PRIMARY KEY (id) |
| model\_experiment\_logs\_id | int(11)       | None                     |
| transactions\_count         | bigint(20)    | None                     |
| user\_count                 | bigint(20)    | None                     |
| item\_count                 | bigint(20)    | None                     |
| leafCategorycount           | bigint(20)    | None                     |
| Evaluation\_Map             | varchar(2048) | None                     |

## Table: `data_validation_logs`


| Column Name       | Data Type                                       | Index                    |
| ----------------- | ----------------------------------------------- | ------------------------ |
| id                | int(11)                                         | Part of PRIMARY KEY (id) |
| org\_id           | int(20)                                         | None                     |
| updated\_datetime | timestamp                                       | None                     |
| attrib\_json      | varchar(1000)                                   | None                     |
| result\_json      | varchar(1000)                                   | None                     |
| status            | enum('QUEUED','EXECUTING','SUCCEEDED','FAILED') | None                     |
| s3PathforPDF      | varchar(150)                                    | None                     |

## Table: `enabled_orgs`


| Column Name   | Data Type    | Index                         |
| ------------- | ------------ | ----------------------------- |
| org\_id       | int(11)      | Part of PRIMARY KEY (org\_id) |
| org\_name     | varchar(128) | None                          |
| is\_enabled   | tinyint(1)   | None                          |
| last\_updated | timestamp    | None                          |
| is\_on\_reon  | tinyint(1)   | None                          |

## Table: `dvf_logs`


| Column Name                 | Data Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Index                      |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| id                          | int(11)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Part of PRIMARY KEY (id)   |
| org\_id                     | int(20)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | None                       |
| updated\_datetime           | timestamp                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | None                       |
| attrib\_json                | varchar(1000)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | None                       |
| dag\_status                 | enum('QUEUED','EXECUTING','SUCCEEDED','FAILED')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | None                       |
| s3\_path\_for\_html\_report | varchar(1024)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | None                       |
| status\_code                | varchar(2048)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | None                       |
| dvf\_req\_id                | int(11)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Part of KEY (dvf\_req\_id) |
| processed\_data             | varchar(1024)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | None                       |
| objective                   | enum('generic','transaction\_propensity','lapsation\_propensity','response\_propensity','product\_propensity','store\_propensity','time\_slot\_propensity','product\_personalization','time\_personalization','store\_personalization','offer\_personalization','repurchase\_propensity','ramzan\_transaction\_propensity','customer\_life\_time\_value\_fact','similar\_items\_attribute\_based\_fact','frequently\_bought\_together\_fact','bought\_together\_also\_bought\_fact','overall\_popular\_items\_fact','trending\_items\_fact','upsell\_propensity\_fact','cross\_sell\_propensity\_fact','promotional\_product\_propensity','trending\_categories','channel\_propensity','segmented\_trending', | None                       |

## Table: `custom_metrics_data`


| Column Name             | Data Type                                                                                                                                                                                                   | Index                    |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------ |
| id                      | int(11)                                                                                                                                                                                                     | Part of PRIMARY KEY (id) |
| org\_id                 | int(20)                                                                                                                                                                                                     | None                     |
| objective               | enum('transaction\_propensity','lapsation\_propensity','response\_propensity','product\_propensity','time\_slot\_propensity','customer\_life\_time\_value\_fact','channel\_propensity','rfm\_segmentation') | None                     |
| infer\_date             | varchar(2048)                                                                                                                                                                                               | None                     |
| train\_date             | varchar(2048)                                                                                                                                                                                               | None                     |
| result\_path            | varchar(2048)                                                                                                                                                                                               | None                     |
| month                   | varchar(2048)                                                                                                                                                                                               | None                     |
| predicted               | int(11)                                                                                                                                                                                                     | None                     |
| overlap                 | int(11)                                                                                                                                                                                                     | None                     |
| over\_prediction\_ratio | decimal(8,4)                                                                                                                                                                                                | None                     |
| repeat\_predictions\_1Y | int(11)                                                                                                                                                                                                     | None                     |
| repeat\_shoppers\_1Y    | int(11)                                                                                                                                                                                                     | None                     |

## Table: `optimal_hyperparams`


| Column Name         | Data Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Index                     |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------- |
| id                  | int(11)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Part of PRIMARY KEY (id)  |
| org\_id             | int(11)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Part of KEY (org\_id)     |
| snapshot\_date      | datetime                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | None                      |
| golden\_params      | varchar(2048)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | None                      |
| golden\_weights     | varchar(2048)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | None                      |
| last\_updated\_date | timestamp                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | None                      |
| start\_time         | timestamp                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | None                      |
| strategy            | enum('bayesian','random')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | None                      |
| end\_time           | timestamp                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | None                      |
| model\_version      | varchar(2048)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | None                      |
| model\_name         | enum('implicit\_als\_user\_item','implicit\_als\_user\_category','popular','upsell\_propensity','warm\_user\_response\_classifier','warm\_user\_lapsation\_propensity\_classification','warm\_user\_lapsation\_propensity\_regression','cold\_user\_lapsation\_propensity\_classification','rpc\_repurchase\_recommendation','pg\_repurchase\_recommendation','bm25','segmented\_popular','model\_provisioning\_cp','model\_provisioning\_reco','seasonality','segmentedEI','sequence\_predictor','segmented\_store\_model','time\_personalization\_rule\_based','up\_sell','time\_personalisation\_lstm','sequence\_repurchase','reco\_popular','favourite','content\_based','fbt','trending','CFII','similar') | Part of KEY (model\_name) |

## Table: `dvf_status_codes`


| Column Name  | Data Type     | Index                              |
| ------------ | ------------- | ---------------------------------- |
| status\_code | smallint(6)   | Part of PRIMARY KEY (status\_code) |
| observations | varchar(2048) | None                               |

## Table: `run_time_logs`


| Column Name        | Data Type    | Index                    |
| ------------------ | ------------ | ------------------------ |
| id                 | int(11)      | Part of PRIMARY KEY (id) |
| org\_id            | int(10)      | None                     |
| req\_id            | int(11)      | None                     |
| line\_items\_count | bigint(11)   | None                     |
| user\_count        | bigint(11)   | None                     |
| items\_count       | bigint(11)   | None                     |
| train\_start\_date | varchar(15)  | None                     |
| num\_executors     | smallint(6)  | None                     |
| executor\_memory   | varchar(5)   | None                     |
| rank               | smallint(6)  | None                     |
| max\_iterations    | smallint(6)  | None                     |
| hit\_rate          | mediumtext   | None                     |
| als\_run\_time     | double(10,3) | None                     |
| total\_run\_time   | double(10,3) | None                     |
| process\_type      | varchar(50)  | None                     |
| row\_created\_on   | timestamp    | None                     |

## Table: `config_values`


| Column Name | Data Type    | Index                    |
| ----------- | ------------ | ------------------------ |
| id          | int(11)      | Part of PRIMARY KEY (id) |
| orgId       | int(30)      | Part of KEY (orgId)      |
| confId      | int(20)      | Part of KEY (confId)     |
| confValue   | varchar(200) | None                     |

## Table: `xengage_requests`


| Column Name                | Data Type                                | Index                    |
| -------------------------- | ---------------------------------------- | ------------------------ |
| id                         | int(11)                                  | Part of PRIMARY KEY (id) |
| org\_id                    | int(11)                                  | None                     |
| req\_type                  | enum('XENGAGESUCCESS','XENGAGERESPONSE') | None                     |
| param\_json                | text                                     | None                     |
| success\_api\_status       | enum('EXECUTING','FAILED','SUCCEEDED')   | None                     |
| result\_json               | mediumtext                               | None                     |
| submission\_time           | timestamp                                | None                     |
| failure\_cause             | varchar(512)                             | None                     |
| last\_updated\_time        | timestamp                                | None                     |
| message\_start\_time       | timestamp                                | None                     |
| message\_end\_time         | timestamp                                | None                     |
| campaign\_id               | int(20)                                  | None                     |
| message\_id                | varchar(256)                             | None                     |
| response\_api\_status      | enum('EXECUTING','FAILED','SUCCEEDED')   | None                     |
| extIdentifier              | varchar(256)                             | None                     |
| uuid                       | varchar(128)                             | None                     |
| response\_api\_start\_time | timestamp                                | None                     |
| response\_api\_end\_time   | timestamp                                | None                     |

## Table: `inference_request_table`


| Column Name         | Data Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Index |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----- |
| inference\_req\_id  | int(11)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | None  |
| org\_id             | int(11)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | None  |
| objective           | enum('transaction\_propensity','lapsation\_propensity','response\_propensity','product\_propensity','store\_propensity','time\_slot\_propensity','product\_personalization','time\_personalization','store\_personalization','offer\_propensity','repurchase\_propensity','ramzan\_transaction\_propensity','customer\_life\_time\_value\_fact','similar\_items\_attribute\_based\_fact','frequently\_bought\_together\_fact','bought\_together\_also\_bought\_fact','overall\_popular\_items\_fact','trending\_items\_fact','upsell\_propensity\_fact','cross\_sell\_propensity\_fact','promotional\_product\_propensity','trending\_categories','channel\_propensity','segmented\_trending', | None  |
| business\_metrics   | varchar(256)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | None  |
| creation\_time      | timestamp                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | None  |
| status              | enum('In\_progress','Success','Failure')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | None  |
| last\_updated\_time | timestamp                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | None  |

## Table: `ai_suggestion_payload`


| Column Name     | Data Type | Index                    |
| --------------- | --------- | ------------------------ |
| id              | INT       | Part of PRIMARY KEY (id) |
| orgId           | INT       | None                     |
| system\_content | TEXT      | None                     |
| user\_content   | TEXT      | None                     |

## Table: `product_description_meta_table`


| Column Name                     | Data Type     | Index                    |
| ------------------------------- | ------------- | ------------------------ |
| id                              | int(11)       | Part of PRIMARY KEY (id) |
| org\_id                         | int(15)       | None                     |
| vertical                        | enum("movie", | None                     |
| custom\_fileds\_col             | varchar(512)  | None                     |
| rootCat\_inventory\_col         | varchar(256)  | None                     |
| leafCat\_inventory\_col         | varchar(256)  | None                     |
| rootCat\_custom\_inventory\_col | varchar(256)  | None                     |
| leafCat\_custom\_inventory\_col | varchar(256)  | None                     |

## Table: `scoring_requests`


| Column Name              | Data Type                                                                      | Index                    |
| ------------------------ | ------------------------------------------------------------------------------ | ------------------------ |
| id                       | int(11)                                                                        | Part of PRIMARY KEY (id) |
| org\_id                  | int(11)                                                                        | None                     |
| req\_type                | enum('PERSONALIZE                                                              | None                     |
| param\_json              | longtext                                                                       | None                     |
| status                   | enum('QUEUED','SUBMITTED','EXECUTING','POST\_PROCESSING','FAILED','SUCCEEDED') | None                     |
| result\_json             | mediumtext                                                                     | None                     |
| submission\_time         | datetime                                                                       | None                     |
| submitted\_by            | int(11)                                                                        | None                     |
| execution\_log\_location | varchar(256)                                                                   | None                     |
| failure\_cause           | varchar(512)                                                                   | None                     |
| last\_updated\_time      | timestamp                                                                      | None                     |
| start\_time              | timestamp                                                                      | None                     |
| end\_time                | timestamp                                                                      | None                     |
| request\_tag             | varchar(128)                                                                   | None                     |
| message\_id              | varchar(256)                                                                   | None                     |
| extIdentifier            | varchar(256)                                                                   | None                     |

## Table: `model_threshold`


| Column Name         | Data Type      | Index                    |
| ------------------- | -------------- | ------------------------ |
| id                  | int(11)        | None                     |
| org\_id             | int(11)        | None                     |
| uid                 | int(11)        | Part of UNIQUE KEY (uid) |
| precisionVal        | DECIMAL(11,10) | None                     |
| recall              | DECIMAL(11,10) | None                     |
| accuracy            | DECIMAL(4,2)   | None                     |
| retrainDuration     | int(10)        | None                     |
| f1\_score           | DECIMAL(11,10) | None                     |
| meanroc             | DECIMAL(11,10) | None                     |
| hitrate             | DECIMAL(11,10) | None                     |
| map\_score          | DECIMAL(11,10) | None                     |
| creation\_time      | timestamp      | None                     |
| last\_updated\_time | timestamp      | None                     |
| WCSS\_avg           | DECIMAL(11,10) | None                     |

## Table: `optimal_model_metrics`


| Column Name      | Data Type     | Index            |
| ---------------- | ------------- | ---------------- |
| id               | int(11)       | Part of KEY (id) |
| hyper\_param\_id | int(11)       | None             |
| metric\_key      | varchar(2048) | None             |
| metric\_value    | varchar(2048) | None             |

## Table: `model_ab_configs`


| Column Name | Data Type                                                                                                        | Index                    |
| ----------- | ---------------------------------------------------------------------------------------------------------------- | ------------------------ |
| id          | int(11)                                                                                                          | Part of PRIMARY KEY (id) |
| org\_id     | int(11)                                                                                                          | Part of KEY (org\_id)    |
| objective   | enum('product\_personalization','time\_personalization','store\_personalization')                                | None                     |
| conf\_name  | enum('model\_1\_id','model\_2\_id','model\_1\_user\_percentage','model\_2\_user\_percentage','is\_org\_enabled') | None                     |
| conf\_value | int(11)                                                                                                          | None                     |

## Table: `custom_objectives`


| Column Name       | Data Type     | Index                    |
| ----------------- | ------------- | ------------------------ |
| id                | int(20)       | Part of PRIMARY KEY (id) |
| org\_id           | int(20)       | None                     |
| objective         | ENUM(         | None                     |
| custom\_objective | varchar(2048) | None                     |
| custom\_params    | varchar(2048) | None                     |

## Table: `audit_ci_org_runs`


| Column Name    | Data Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Index                    |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------ |
| id             | int(11)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Part of PRIMARY KEY (id) |
| org\_id        | int(11)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | None                     |
| objective      | enum('transaction\_propensity','lapsation\_propensity','response\_propensity','product\_propensity','store\_propensity','time\_slot\_propensity','product\_personalization','time\_personalization','store\_personalization','offer\_propensity','repurchase\_propensity','ramzan\_transaction\_propensity','customer\_life\_time\_value\_fact','similar\_items\_attribute\_based\_fact','frequently\_bought\_together\_fact','bought\_together\_also\_bought\_fact','overall\_popular\_items\_fact','trending\_items\_fact','upsell\_propensity\_fact','cross\_sell\_propensity\_fact','promotional\_product\_propensity','channel\_propensity', | None                     |
| creation\_time | timestamp                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | None                     |

## Table: `airflow_state`


| Column Name            | Data Type    | Index                    |
| ---------------------- | ------------ | ------------------------ |
| id                     | int(11)      | Part of PRIMARY KEY (id) |
| org\_id                | int(11)      | None                     |
| onboard\_execution     | varchar(256) | None                     |
| global\_dag\_execution | varchar(256) | None                     |
| sub\_dag\_execution    | varchar(256) | None                     |
| start\_time            | varchar(256) | None                     |

## Table: `request_status_table`


| Column Name         | Data Type | Index             |
| ------------------- | --------- | ----------------- |
| id                  | int(11)   | None              |
| uid                 | int(11)   | Part of KEY (uid) |
| creation\_time      | timestamp | None              |
| dvf\_req\_id        | int(11)   | None              |
| training\_req\_id   | int(11)   | None              |
| inference\_req\_id  | int(11)   | None              |
| last\_updated\_time | timestamp | None              |

## Table: `custom_flow_status`


| Column Name       | Data Type                  | Index                         |
| ----------------- | -------------------------- | ----------------------------- |
| req\_id           | INT                        | Part of PRIMARY KEY (req\_id) |
| org\_id           | INT                        | None                          |
| uid               | INT                        | None                          |
| objective         | ENUM(                      | None                          |
| flow\_type        | ENUM('validation\_submit', | None                          |
| custom\_execution | VARCHAR(2048)              | None                          |
| status            | ENUM('In\_progress',       | None                          |
| creation\_time    | TIMESTAMP                  | None                          |

## Table: `custom_request_table`


| Column Name         | Data Type                                | Index                    |
| ------------------- | ---------------------------------------- | ------------------------ |
| id                  | int(20)                                  | Part of PRIMARY KEY (id) |
| req\_id             | int(20)                                  | None                     |
| custom\_objective   | varchar(2048)                            | None                     |
| status              | enum('In\_progress','Success','Failure') | None                     |
| error\_details      | varchar(2048)                            | None                     |
| custom\_params      | varchar(2048)                            | None                     |
| last\_updated\_time | timestamp                                | None                     |

## Table: `data_generation_for_ml`


| Column Name       | Data Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Index                    |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------ |
| id                | int(11)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Part of PRIMARY KEY (id) |
| org\_id           | int(20)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | None                     |
| model             | enum('lapsation\_propensity','campaign\_propensity','segmented\_popular','bm25','time\_personalization\_rule\_based','time\_slot\_propensity','repurchase\_propensity','category\_sequence\_predictor','store\_enrichment','store\_personalization','implicit\_als\_buffalo','time\_personalization','time\_personalization\_ensemble','message\_roi\_prediction','response\_propensity','transaction\_propensity','transaction\_propensity\_gbm','customer\_life\_time\_value\_fact','ramzan\_transaction\_propensity','similar\_items\_attribute\_based\_fact','frequently\_bought\_together\_fact','bought\_together\_also\_bought\_fact','overall\_popular\_items\_fact','trending\_items\_fact','upsell\_propensity\_fact','cross\_sell\_propensity\_fact','promotional\_product\_propensity','channel\_propensity', | None                     |
| updated\_datetime | timestamp                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | None                     |
| attrib\_json      | varchar(1000)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | None                     |
| start\_time       | timestamp                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | None                     |
| end\_time         | timestamp                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | None                     |
| path              | varchar(4096)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | None                     |
| status            | enum('QUEUED','EXECUTING','SUCCEEDED','FAILED')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | None                     |

## Table: `flintrock_clusters`


| Column Name             | Data Type                   | Index                             |
| ----------------------- | --------------------------- | --------------------------------- |
| cluster\_id             | int(11)                     | Part of PRIMARY KEY (cluster\_id) |
| cluster\_name           | varchar(255)                | None                              |
| cluster\_start\_time    | datetime                    | None                              |
| cluster\_end\_time      | datetime                    | None                              |
| launch\_duration        | int(11)                     | None                              |
| instances               | varchar(500)                | None                              |
| security\_groups        | varchar(500)                | None                              |
| security\_group\_status | varchar(20)                 | None                              |
| running\_hours          | double                      | None                              |
| num\_instances          | int(11)                     | None                              |
| node\_type              | varchar(50)                 | None                              |
| region                  | varchar(20)                 | None                              |
| cost                    | double                      | None                              |
| status                  | enum('RUNNING','DESTROYED') | None                              |
| launch\_status          | varchar(255)                | None                              |

## Table: `modelling_experimentation_table`


| Column Name                   | Data Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Index                     |
| ----------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------- |
| id                            | int(11)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Part of PRIMARY KEY (id)  |
| org\_id                       | int(11)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Part of KEY (org\_id)     |
| objective                     | enum('product\_personalization','time\_personalization','offer\_personalization','propensity\_modelling','store\_personalization')                                                                                                                                                                                                                                                                                                                                                                                            | None                      |
| snapshot\_date                | datetime                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | None                      |
| model\_location               | varchar(256)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | None                      |
| latest\_available\_data\_date | timestamp                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | None                      |
| attrb\_json                   | varchar(2048)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | None                      |
| resultJson                    | varchar(2048)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | None                      |
| last\_updated                 | timestamp                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | None                      |
| start\_time                   | timestamp                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | None                      |
| end\_time                     | timestamp                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | None                      |
| status                        | enum('QUEUED','SUBMITTED','EXECUTING','FAILED','SUCCEEDED')                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | None                      |
| model\_name                   | enum('implicit\_als\_user\_item','implicit\_als\_user\_category','popular','upsell\_propensity','campaign\_propensity','lapsation\_propensity','repurchase\_recommendation','bm25','segmented\_popular','fir\_and\_proxmity\_model','time\_personalization\_rule\_based','time\_personalization\_sequence\_predictor','category\_sequence\_predictor','model\_provisioning','message\_segmentation','response\_propensity','time\_personalization','offer\_personalization','message\_roi\_prediction','channel\_propensity') | Part of KEY (model\_name) |
| datagen\_id                   | int(11)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | None                      |
| datagen\_params               | varchar(2048)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | None                      |

## Table: `model_notifications`


| Column Name | Data Type     | Index                         |
| ----------- | ------------- | ----------------------------- |
| org\_id     | int(11)       | Part of PRIMARY KEY (org\_id) |
| emailids    | varchar(1024) | None                          |
| isActive    | enum('0','1') | None                          |

## Table: `dvf_details`


| Column Name   | Data Type                                                                                                                                                                                                   | Index                    |
| ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------ |
| id            | int(11)                                                                                                                                                                                                     | Part of PRIMARY KEY (id) |
| org\_id       | int(20)                                                                                                                                                                                                     | None                     |
| objective     | enum('transaction\_propensity','lapsation\_propensity','response\_propensity','product\_propensity','time\_slot\_propensity','customer\_life\_time\_value\_fact','channel\_propensity','rfm\_segmentation') | None                     |
| last\_update  | timestamp                                                                                                                                                                                                   | None                     |
| status\_codes | varchar(2048)                                                                                                                                                                                               | None                     |
| notebook\_url | varchar(2048)                                                                                                                                                                                               | None                     |

## Table: `product_filtering_table`


| Column Name                    | Data Type     | Index                    |
| ------------------------------ | ------------- | ------------------------ |
| id                             | int(11)       | Part of PRIMARY KEY (id) |
| org\_id                        | int(11)       | None                     |
| vertical                       | enum("movie", | None                     |
| max\_price                     | int(11)       | None                     |
| min\_price                     | int(11)       | None                     |
| excluded\_item\_id             | text          | None                     |
| transasaction\_duration        | int(11)       | None                     |
| release\_before\_current\_date | int(11)       | None                     |
| release\_after\_current\_date  | int(11)       | None                     |
| categories                     | varchar(1023) | None                     |
| excluded\_categories           | varchar(1023) | None                     |
| stores                         | text          | None                     |
| excluded\_stores               | text          | None                     |
| transaction\_start\_date       | varchar(256)  | None                     |
| transaction\_end\_date         | varchar(256)  | None                     |
| excluded\_attributes           | text          | None                     |
| custom\_attribute\_columns     | varchar(1023) | None                     |

## Table: `default_configs`


| Column Name          | Data Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Index                    |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------ |
| id                   | int(20)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Part of PRIMARY KEY (id) |
| conf\_name           | varchar(100)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | None                     |
| conf\_type           | enum('spark\_personalization\_train','spark\_personalization\_train\_validate','spark\_personalization\_scoring','spark\_personalization\_time\_train','spark\_personalization\_time\_scoring','personalization\_train\_params','personalization\_train\_validate\_params','personalization\_time\_train\_params','propensity\_train\_params','propensity\_train\_validate\_params','spark\_kpi','spark\_full\_munging','spark\_propensity\_train','spark\_propensity\_train\_validate','spark\_propensity\_scoring') | Part of KEY (conf\_type) |
| default\_conf\_value | varchar(200)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | None                     |

## Table: `default_training_params`


| Column Name      | Data Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Index                    |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------ |
| id               | int(11)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Part of PRIMARY KEY (id) |
| org\_id          | int(20)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | None                     |
| objective        | enum('transaction\_propensity','lapsation\_propensity','response\_propensity','product\_propensity','store\_propensity','time\_slot\_propensity','product\_personalization','time\_personalization','store\_personalization','offer\_personalization','repurchase\_propensity','ramzan\_transaction\_propensity','customer\_life\_time\_value\_fact','similar\_items\_attribute\_based\_fact','frequently\_bought\_together\_fact','bought\_together\_also\_bought\_fact','overall\_popular\_items\_fact','trending\_items\_fact','upsell\_propensity\_fact','cross\_sell\_propensity\_fact','promotional\_product\_propensity','trending\_categories','channel\_propensity','segmented\_trending','rfm\_segmentation') | None                     |
| training\_params | varchar(2048)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | None                     |
| datagen\_params  | varchar(2048)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | None                     |

## Table: `training_request_table`


| Column Name         | Data Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Index |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----- |
| training\_req\_id   | int(11)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | None  |
| org\_id             | int(11)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | None  |
| objective           | enum('transaction\_propensity','lapsation\_propensity','response\_propensity','product\_propensity','store\_propensity','time\_slot\_propensity','product\_personalization','time\_personalization','store\_personalization','offer\_propensity','repurchase\_propensity','ramzan\_transaction\_propensity','customer\_life\_time\_value\_fact','similar\_items\_attribute\_based\_fact','frequently\_bought\_together\_fact','bought\_together\_also\_bought\_fact','overall\_popular\_items\_fact','trending\_items\_fact','upsell\_propensity\_fact','cross\_sell\_propensity\_fact','promotional\_product\_propensity','trending\_categories','channel\_propensity','segmented\_trending','rfm\_segmentation') | None  |
| creation\_time      | timestamp                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | None  |
| status              | enum('In\_progress','Success','Failure')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | None  |
| last\_updated\_time | timestamp                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | None  |

## Table: `AMLists`


| Column Name | Data Type    | Index                    |
| ----------- | ------------ | ------------------------ |
| id          | int(11)      | Part of PRIMARY KEY (id) |
| orgId       | int(11)      | None                     |
| listId      | int(11)      | None                     |
| versionId   | int(11)      | None                     |
| tableName   | varchar(255) | None                     |
| createdOn   | timestamp    | None                     |
| isActive    | tinyint(1)   | None                     |

## Table: `dbs_sr_requests`


| Column Name        | Data Type                                                                          | Index                    |
| ------------------ | ---------------------------------------------------------------------------------- | ------------------------ |
| id                 | int(11)                                                                            | Part of PRIMARY KEY (id) |
| org\_id            | int(11)                                                                            | Part of KEY (org\_id)    |
| start\_time        | timestamp                                                                          | None                     |
| end\_time          | timestamp                                                                          | None                     |
| status             | enum('QUEUED','CLUSTER\_DONE','SUCCESS','RUNNING','FAILED','KILLED','NONE','OPEN') | Part of KEY (status)     |
| updated\_on        | timestamp                                                                          | None                     |
| master\_sync\_time | varchar(255)                                                                       | None                     |

## Table: `sr_requests`


| Column Name        | Data Type                                                                          | Index                    |
| ------------------ | ---------------------------------------------------------------------------------- | ------------------------ |
| id                 | int(11)                                                                            | Part of PRIMARY KEY (id) |
| org\_id            | int(11)                                                                            | Part of KEY (org\_id)    |
| start\_time        | timestamp                                                                          | None                     |
| end\_time          | timestamp                                                                          | None                     |
| status             | enum('QUEUED','CLUSTER\_DONE','SUCCESS','RUNNING','FAILED','KILLED','NONE','OPEN') | Part of KEY (status)     |
| updated\_on        | timestamp                                                                          | None                     |
| master\_sync\_time | varchar(255)                                                                       | None                     |

## Table: `profile_configs`


| Column Name | Data Type    | Index                            |
| ----------- | ------------ | -------------------------------- |
| id          | int(11)      | Part of PRIMARY KEY (id)         |
| profile\_id | int(11)      | Part of UNIQUE KEY (profile\_id) |
| key         | varchar(100) | Part of UNIQUE KEY (key)         |
| value       | varchar(200) | None                             |
| is\_valid   | tinyint(1)   | None                             |
| updated\_on | timestamp    | None                             |

## Table: `dbs_ws_mapping`


| Column Name | Data Type    | Index                    |
| ----------- | ------------ | ------------------------ |
| id          | int(11)      | Part of PRIMARY KEY (id) |
| dbs\_ws\_id | int(11)      | None                     |
| rule        | varchar(255) | None                     |
| weightage   | int(11)      | None                     |
| is\_active  | tinyint(1)   | None                     |

## Table: `etrigan_metrics`


| Column Name | Data Type  | Index                    |
| ----------- | ---------- | ------------------------ |
| id          | int(11)    | Part of PRIMARY KEY (id) |
| metrics     | mediumtext | None                     |

## Table: `org_profile_map`


| Column Name | Data Type | Index                        |
| ----------- | --------- | ---------------------------- |
| id          | int(11)   | Part of PRIMARY KEY (id)     |
| org\_id     | int(11)   | Part of UNIQUE KEY (org\_id) |
| profile\_id | int(11)   | None                         |
| updated\_on | timestamp | None                         |

## Table: `profiles`


| Column Name | Data Type    | Index                        |
| ----------- | ------------ | ---------------------------- |
| id          | int(11)      | Part of PRIMARY KEY (id)     |
| profile     | varchar(100) | Part of UNIQUE KEY (profile) |

## Table: `resolving_stats`


| Column Name     | Data Type                        | Index                    |
| --------------- | -------------------------------- | ------------------------ |
| id              | int(11)                          | Part of PRIMARY KEY (id) |
| org\_id         | int(11)                          | None                     |
| req\_id         | varchar(100)                     | None                     |
| fact\_name      | varchar(100)                     | None                     |
| summary\_name   | varchar(100)                     | None                     |
| query           | mediumtext                       | None                     |
| resolved\_query | mediumtext                       | None                     |
| status          | enum('RESOLVED','NOT\_RESOLVED') | None                     |
| updated\_on     | timestamp                        | None                     |

## Table: `query_stats`


| Column Name     | Data Type                                          | Index                    |
| --------------- | -------------------------------------------------- | ------------------------ |
| id              | int(11)                                            | Part of PRIMARY KEY (id) |
| org\_id         | int(11)                                            | None                     |
| req\_id         | varchar(100)                                       | None                     |
| facts           | varchar(200)                                       | None                     |
| group\_by\_dims | varchar(200)                                       | None                     |
| start\_time     | timestamp                                          | None                     |
| end\_time       | timestamp                                          | None                     |
| status          | enum('SUCCESS','RUNNING','FAILED','KILLED','NONE') | None                     |
| updated\_on     | timestamp                                          | None                     |

## Table: `clustered_tables`


| Column Name       | Data Type                          | Index                    |
| ----------------- | ---------------------------------- | ------------------------ |
| id                | int(11)                            | Part of PRIMARY KEY (id) |
| name              | varchar(99)                        | None                     |
| table\_type       | enum('FACT','DIMENSION','SUMMARY') | None                     |
| clustered\_column | varchar(99)                        | None                     |
| buckets           | int(11)                            | None                     |
| is\_valid         | tinyint(1)                         | None                     |
| scope\_id         | int(11)                            | None                     |

## Table: `dbs_ws`


| Column Name    | Data Type                           | Index                    |
| -------------- | ----------------------------------- | ------------------------ |
| id             | int(11)                             | Part of PRIMARY KEY (id) |
| cluster\_id    | varchar(99)                         | None                     |
| workspace\_url | VARCHAR(255)                        | None                     |
| max\_requests  | int                                 | None                     |
| cluster\_type  | enum('HIGH\_CONCURRECY','STANDARD') | None                     |
| access\_tokens | TEXT                                | None                     |
| is\_active     | tinyint(1)                          | None                     |

## Table: `fact_context`


| Column Name       | Data Type    | Index                                |
| ----------------- | ------------ | ------------------------------------ |
| id                | int(11)      | Part of PRIMARY KEY (id)             |
| fact\_table\_id   | int(11)      | Part of UNIQUE KEY (fact\_table\_id) |
| context\_key      | varchar(100) | Part of UNIQUE KEY (context\_key)    |
| is\_active        | tinyint(1)   | None                                 |
| derive\_expresion | varchar(500) | None                                 |

## Table: `source_tables`


| Column Name                 | Data Type    | Index                                    |
| --------------------------- | ------------ | ---------------------------------------- |
| id                          | int          | Part of PRIMARY KEY (id)                 |
| name                        | varchar(55)  | Part of UNIQUE KEY (name)                |
| scope\_id                   | int          | None                                     |
| end\_point\_id              | int          | None                                     |
| is\_sharded                 | tinyint(1)   | None                                     |
| is\_active                  | tinyint(1)   | None                                     |
| added\_on                   | timestamp    | None                                     |
| partition\_key\_column      | int          | None                                     |
| timestamp\_column           | int          | None                                     |
| pkey\_columns               | varchar(45)  | None                                     |
| filter\_expression          | text         | None                                     |
| is\_hive\_table\_enabled    | tinyint      | None                                     |
| has\_dynamic\_schema        | tinyint(1)   | None                                     |
| id\_str                     | varchar(200) | Part of UNIQUE KEY (id\_str)             |
| end\_point\_id\_str         | varchar(200) | Part of UNIQUE KEY (end\_point\_id\_str) |
| partition\_key\_column\_str | varchar(200) | None                                     |
| timestamp\_column\_str      | varchar(200) | None                                     |
| pkey\_columns\_str          | text         | None                                     |

## Table: `fact_block_config`


| Column Name        | Data Type   | Index                    |
| ------------------ | ----------- | ------------------------ |
| id                 | INT         | Part of PRIMARY KEY (id) |
| org\_id            | INT(11)     | None                     |
| scope\_id          | INT(11)     | None                     |
| fact\_name         | VARCHAR(55) | None                     |
| num\_blocks        | INT(11)     | None                     |
| partition\_unit    | ENUM('DAY', | None                     |
| auto\_update\_time | TIMESTAMP   | None                     |

## Table: `mongo_source_tables`


| Column Name                | Data Type    | Index                                       |
| -------------------------- | ------------ | ------------------------------------------- |
| source\_table\_id          | int          | None                                        |
| mongo\_collection\_id      | int          | None                                        |
| lateral\_view\_info        | text         | None                                        |
| is\_active                 | tinyint(1)   | None                                        |
| scope\_id                  | int          | None                                        |
| added\_on                  | timestamp    | None                                        |
| source\_table\_id\_str     | varchar(200) | Part of UNIQUE KEY (source\_table\_id\_str) |
| mongo\_collection\_id\_str | varchar(200) | None                                        |

## Table: `summary_table_column_definition`


| Column Name                 | Data Type              | Index                           |
| --------------------------- | ---------------------- | ------------------------------- |
| id                          | int(11)                | Part of PRIMARY KEY (id)        |
| column\_id                  | int(11)                | Part of UNIQUE KEY (column\_id) |
| logical\_summary\_table\_id | int(11)                | None                            |
| scope\_id                   | int(11)                | Part of UNIQUE KEY (scope\_id)  |
| src\_table\_type            | enum('FACT','SUMMARY') | None                            |
| select\_table\_id           | int(11)                | None                            |
| select\_col\_id             | int(11)                | None                            |
| udaf                        | text                   | None                            |
| filters                     | text                   | None                            |
| is\_active                  | tinyint(1)             | None                            |

## Table: `source_target_dimension_mapping`


| Column Name       | Data Type  | Index                                  |
| ----------------- | ---------- | -------------------------------------- |
| id                | int(11)    | Part of PRIMARY KEY (id)               |
| source\_table\_id | int(11)    | Part of UNIQUE KEY (source\_table\_id) |
| fact\_table\_id   | int(11)    | Part of UNIQUE KEY (fact\_table\_id)   |
| is\_active        | tinyint(1) | None                                   |
| scope\_id         | int(11)    | None                                   |
| added\_on         | timestamp  | None                                   |

## Table: `summary_groupBy`


| Column Name | Data Type                | Index                    |
| ----------- | ------------------------ | ------------------------ |
| id          | int(11)                  | Part of PRIMARY KEY (id) |
| tableType   | enum('FACT','DIMENSION') | None                     |
| refTableId  | int(11)                  | None                     |
| column\_id  | int(11)                  | None                     |
| is\_active  | tinyint(1)               | None                     |
| scope\_id   | int(11)                  | None                     |

## Table: `mongo_collections`


| Column Name                     | Data Type    | Index                        |
| ------------------------------- | ------------ | ---------------------------- |
| id                              | int          | Part of PRIMARY KEY (id)     |
| name                            | varchar(50)  | None                         |
| end\_point\_id                  | int          | None                         |
| is\_sharded                     | tinyint(1)   | None                         |
| is\_active                      | tinyint(1)   | None                         |
| scope\_id                       | int          | None                         |
| added\_on                       | timestamp    | None                         |
| timestamp\_column               | varchar(64)  | None                         |
| pkey\_columns                   | varchar(45)  | None                         |
| primary\_mongo\_struct\_id      | int          | None                         |
| dependent\_struct\_ids          | varchar(100) | None                         |
| id\_str                         | varchar(200) | Part of UNIQUE KEY (id\_str) |
| end\_point\_id\_str             | varchar(200) | None                         |
| pkey\_columns\_str              | varchar(200) | None                         |
| primary\_mongo\_struct\_id\_str | varchar(200) | None                         |
| dependent\_struct\_ids\_str     | varchar(200) | None                         |

## Table: `summary_table_column`


| Column Name                 | Data Type                                                                   | Index                    |
| --------------------------- | --------------------------------------------------------------------------- | ------------------------ |
| id                          | int(11)                                                                     | Part of PRIMARY KEY (id) |
| name                        | varchar(100)                                                                | None                     |
| logical\_summary\_table\_id | int(11)                                                                     | None                     |
| scope\_id                   | int(11)                                                                     | None                     |
| data\_type                  | enum('INT','BIGINT','DOUBLE','TEXT')                                        | None                     |
| col\_type                   | enum('MEASURE','DIMENSION','FACT\_REFERENCE','PARTITION\_KEY','DUMP\_DATA') | None                     |
| is\_active                  | tinyint(1)                                                                  | None                     |

## Table: `temp_strategy`


| Column Name | Data Type   | Index |
| ----------- | ----------- | ----- |
| id          | int(10)     | None  |
| name        | varchar(50) | None  |
| json        | text        | None  |
| table\_id   | int(11)     | None  |
| scope\_id   | int(11)     | None  |

## Table: `transpose_columns`


| Column Name            | Data Type                          | Index                                        |
| ---------------------- | ---------------------------------- | -------------------------------------------- |
| transposed\_column\_id | int(11)                            | Part of PRIMARY KEY (transposed\_column\_id) |
| transpose\_table\_id   | int(11)                            | None                                         |
| source\_column\_id     | int(11)                            | None                                         |
| scope\_id              | int(11)                            | Part of PRIMARY KEY (scope\_id)              |
| is\_active             | int(11)                            | None                                         |
| column\_type           | enum('GROUPING','MAP','TRANSPOSE') | None                                         |
| conditions             | text                               | None                                         |

## Table: `external_source_table_org_mapping`


| Column Name            | Data Type    | Index                                       |
| ---------------------- | ------------ | ------------------------------------------- |
| id                     | INT          | Part of PRIMARY KEY (id)                    |
| source\_table\_id\_str | varchar(250) | Part of UNIQUE KEY (source\_table\_id\_str) |
| org\_id                | int          | Part of UNIQUE KEY (org\_id)                |
| is\_active             | TINYINT      | None                                        |
| db\_name               | varchar(100) | None                                        |
| table\_name            | varchar(100) | None                                        |

## Table: `fact_partitioner`


| Column Name        | Data Type   | Index                         |
| ------------------ | ----------- | ----------------------------- |
| id                 | INT         | Part of PRIMARY KEY (id)      |
| org\_id            | INT         | Part of PRIMARY KEY (org\_id) |
| partition\_unit    | ENUM('DAY', | None                          |
| is\_kappa\_enabled | tinyint(1)  | None                          |

## Table: `logical_view`


| Column Name       | Data Type                | Index                    |
| ----------------- | ------------------------ | ------------------------ |
| id                | int(11)                  | Part of PRIMARY KEY (id) |
| name              | varchar(100)             | None                     |
| src\_table\_type  | enum('FACT','DIMENSION') | None                     |
| select\_table\_id | int(11)                  | None                     |
| view\_pk\_cols    | varchar(20)              | None                     |
| is\_active        | tinyint(1)               | None                     |
| scope\_id         | int(11)                  | None                     |

## Table: `transformations`


| Column Name              | Data Type    | Index                                    |
| ------------------------ | ------------ | ---------------------------------------- |
| id                       | int          | Part of PRIMARY KEY (id)                 |
| template                 | text         | None                                     |
| provider\_id             | int          | None                                     |
| scope\_id                | int          | Part of UNIQUE KEY (scope\_id)           |
| provider\_table\_id      | int          | Part of UNIQUE KEY (provider\_table\_id) |
| sql\_query               | text         | None                                     |
| is\_verified             | tinyint      | None                                     |
| id\_str                  | varchar(200) | None                                     |
| template\_str            | text         | None                                     |
| provider\_id\_str        | varchar(200) | None                                     |
| provider\_table\_id\_str | varchar(200) | None                                     |

## Table: `logical_summary_table`


| Column Name              | Data Type    | Index                    |
| ------------------------ | ------------ | ------------------------ |
| id                       | int(11)      | Part of PRIMARY KEY (id) |
| summary\_table\_id       | int(11)      | None                     |
| name                     | varchar(100) | None                     |
| group\_by\_cols          | text         | None                     |
| is\_active               | tinyint(1)   | None                     |
| scope\_id                | int(11)      | None                     |
| primary\_date\_key       | varchar(100) | None                     |
| partition\_keys          | varchar(200) | None                     |
| apply\_standard\_filters | tinyint(1)   | None                     |

## Table: `source_shard_table_info`


| Column Name         | Data Type    | Index                               |
| ------------------- | ------------ | ----------------------------------- |
| table\_id           | int          | None                                |
| end\_point\_id      | int          | None                                |
| from\_table         | varchar(100) | None                                |
| select\_column      | varchar(100) | None                                |
| is\_table\_sharded  | tinyint(1)   | None                                |
| is\_active          | tinyint(1)   | None                                |
| added\_on           | timestamp    | None                                |
| table\_id\_str      | varchar(200) | Part of UNIQUE KEY (table\_id\_str) |
| end\_point\_id\_str | varchar(200) | None                                |

## Table: `custom_dimension_transformation`


| Column Name            | Data Type    | Index                           |
| ---------------------- | ------------ | ------------------------------- |
| id\_str                | varchar(200) | Part of PRIMARY KEY (id\_str)   |
| name                   | varchar(100) | Part of UNIQUE KEY (name)       |
| dimension\_table\_name | varchar(100) | None                            |
| transformation         | text         | None                            |
| transform\_type        | varchar(30)  | None                            |
| scope\_id              | int(11)      | Part of UNIQUE KEY (scope\_id)  |
| is\_active             | tinyint(1)   | Part of UNIQUE KEY (is\_active) |

## Table: `providers`


| Column Name | Data Type   | Index                     |
| ----------- | ----------- | ------------------------- |
| id          | int(11)     | Part of PRIMARY KEY (id)  |
| name        | varchar(45) | Part of UNIQUE KEY (name) |

## Table: `attribution_strategy`


| Column Name    | Data Type   | Index                              |
| -------------- | ----------- | ---------------------------------- |
| strategy\_id   | int(11)     | Part of PRIMARY KEY (strategy\_id) |
| strategy\_name | varchar(11) | None                               |
| strategy\_json | text        | None                               |
| is\_active     | tinyint(1)  | None                               |
| updated\_on    | timestamp   | None                               |

## Table: `source_target_column_mapping`


| Column Name        | Data Type  | Index                                   |
| ------------------ | ---------- | --------------------------------------- |
| id                 | int(11)    | Part of PRIMARY KEY (id)                |
| table\_mapping\_id | int(11)    | Part of UNIQUE KEY (table\_mapping\_id) |
| source\_column\_id | int(11)    | None                                    |
| target\_column\_id | int(11)    | Part of UNIQUE KEY (target\_column\_id) |
| is\_active         | tinyint(1) | None                                    |
| scope\_id          | int(11)    | Part of UNIQUE KEY (scope\_id)          |
| added\_on          | timestamp  | None                                    |

## Table: `hierarchical_dimension_columns`


| Column Name                           | Data Type                                                                                 | Index                            |
| ------------------------------------- | ----------------------------------------------------------------------------------------- | -------------------------------- |
| column\_id                            | int                                                                                       | Part of PRIMARY KEY (column\_id) |
| dim\_table\_id                        | int                                                                                       | None                             |
| column\_name                          | varchar(100)                                                                              | None                             |
| column\_type                          | enum('PK','VALUE','LEVEL','DATE\_ATTRIBUTE','TIME\_ATTRIBUTE','ATTRIBUTE','ALIAS','NONE') | None                             |
| scope\_id                             | int                                                                                       | Part of PRIMARY KEY (scope\_id)  |
| is\_active                            | tinyint(1)                                                                                | None                             |
| level\_num                            | int                                                                                       | None                             |
| data\_type                            | enum('TEXT','NUMBER','BIGNUMBER','BOOLEAN','DATE','TIME')                                 | None                             |
| value\_col\_scope                     | enum('CAP','ORG')                                                                         | None                             |
| display\_name                         | text                                                                                      | None                             |
| level\_num\_ref                       | int                                                                                       | None                             |
| usability\_type                       | enum('DUMP\_ONLY','PARTIAL\_KEY','SELECT','FILTER','GROUP','BANDING')                     | None                             |
| functional\_dependency\_column        | int                                                                                       | None                             |
| unique\_value\_dependent\_column      | int                                                                                       | None                             |
| attr\_table\_name                     | varchar(100)                                                                              | None                             |
| is\_attr\_value\_table\_present       | tinyint(1)                                                                                | None                             |
| computation\_type                     | enum('ETL','VIEW')                                                                        | None                             |
| location\_table\_type                 | enum('FACT','DIMENSION','VIEW','ATTR')                                                    | None                             |
| location\_type\_entity\_id            | int                                                                                       | None                             |
| column\_id\_str                       | varchar(200)                                                                              | None                             |
| dim\_table\_id\_str                   | varchar(200)                                                                              | None                             |
| functional\_dependency\_column\_str   | varchar(200)                                                                              | None                             |
| unique\_value\_dependent\_column\_str | varchar(200)                                                                              | None                             |
| location\_type\_entity\_id\_str       | varchar(200)                                                                              | None                             |

## Table: `summary_condition`


| Column Name      | Data Type                          | Index                    |
| ---------------- | ---------------------------------- | ------------------------ |
| id               | int(11)                            | Part of PRIMARY KEY (id) |
| name             | varchar(200)                       | None                     |
| tableType        | enum('FACT','DIMENSION','SUMMARY') | None                     |
| refTableId       | int(11)                            | None                     |
| column\_id       | int(11)                            | None                     |
| operator         | varchar(10)                        | None                     |
| condition\_value | text                               | None                     |
| is\_active       | tinyint(1)                         | None                     |
| scope\_id        | int(11)                            | None                     |

## Table: `source_target_table_mapping`


| Column Name                 | Data Type                                                                      | Index                                  |
| --------------------------- | ------------------------------------------------------------------------------ | -------------------------------------- |
| id                          | int(11)                                                                        | Part of PRIMARY KEY (id)               |
| fact\_table\_id             | int(11)                                                                        | Part of UNIQUE KEY (fact\_table\_id)   |
| source\_table\_id           | int(11)                                                                        | Part of UNIQUE KEY (source\_table\_id) |
| source\_table\_type         | enum('SOURCE','LOGICAL')                                                       | None                                   |
| target\_table\_id           | int(11)                                                                        | Part of UNIQUE KEY (target\_table\_id) |
| target\_table\_type         | enum('TARGET','LOGICAL')                                                       | None                                   |
| mapping\_type               | enum('ONE\_TO\_ONE','UNION\_MAPPING','DENORM\_MAPPING','POLYMORPHIC\_MAPPING') | None                                   |
| is\_active                  | tinyint(1)                                                                     | None                                   |
| scope\_id                   | int(11)                                                                        | Part of UNIQUE KEY (scope\_id)         |
| added\_on                   | timestamp                                                                      | None                                   |
| source\_table\_filter\_expr | text                                                                           | None                                   |

## Table: `scope_dimension_mapping`


| Column Name    | Data Type | Index                               |
| -------------- | --------- | ----------------------------------- |
| id             | int(11)   | Part of PRIMARY KEY (id)            |
| dim\_table\_id | int(11)   | Part of UNIQUE KEY (dim\_table\_id) |
| scope\_id      | int(11)   | None                                |

## Table: `source_target_dimension_column_mapping`


| Column Name           | Data Type  | Index                                    |
| --------------------- | ---------- | ---------------------------------------- |
| table\_mapping\_id    | int(11)    | Part of PRIMARY KEY (table\_mapping\_id) |
| source\_column\_id    | int(11)    | None                                     |
| dimension\_id         | int(11)    | Part of PRIMARY KEY (dimension\_id)      |
| is\_active            | tinyint(1) | None                                     |
| scope\_id             | int(11)    | Part of PRIMARY KEY (scope\_id)          |
| added\_on             | timestamp  | None                                     |
| is\_joining\_required | tinyint(1) | None                                     |
| dim\_table\_id        | int(11)    | None                                     |
| join\_col\_id         | int(11)    | None                                     |
| select\_col\_id       | int(11)    | None                                     |
| value\_mappings       | text       | None                                     |

## Table: `fact_dimension_overlap`


| Column Name       | Data Type              | Index                                  |
| ----------------- | ---------------------- | -------------------------------------- |
| id                | int(11)                | Part of PRIMARY KEY (id)               |
| name              | varchar(200)           | None                                   |
| fact\_table\_id   | int(11)                | Part of UNIQUE KEY (fact\_table\_id)   |
| dim\_id           | int(11)                | Part of UNIQUE KEY (dim\_id)           |
| overlap\_on\_id   | int(11)                | Part of UNIQUE KEY (overlap\_on\_id)   |
| overlap\_on\_type | enum('PK','DIMENSION') | Part of UNIQUE KEY (overlap\_on\_type) |
| dim\_col\_id      | int(11)                | None                                   |
| is\_active        | tinyint(1)             | None                                   |
| scope\_id         | int(11)                | None                                   |

## Table: `source_table_column`


| Column Name          | Data Type    | Index                               |
| -------------------- | ------------ | ----------------------------------- |
| id                   | int          | Part of PRIMARY KEY (id)            |
| name                 | varchar(99)  | Part of UNIQUE KEY (name)           |
| data\_type           | varchar(64)  | None                                |
| type\_metadata       | longtext     | None                                |
| table\_id            | int          | None                                |
| is\_active           | tinyint(1)   | None                                |
| added\_on            | timestamp    | None                                |
| scope\_id            | int          | None                                |
| default\_value       | varchar(99)  | None                                |
| is\_optional\_column | tinyint(1)   | None                                |
| id\_str              | varchar(200) | Part of UNIQUE KEY (id\_str)        |
| table\_id\_str       | varchar(200) | Part of UNIQUE KEY (table\_id\_str) |

## Table: `fact_table_run_type`


| Column Name   | Data Type              | Index                    |
| ------------- | ---------------------- | ------------------------ |
| id            | int(11)                | Part of PRIMARY KEY (id) |
| table\_id     | int(11)                | None                     |
| table\_type   | enum('FACT','SUMMARY') | None                     |
| is\_full\_run | tinyint(1)             | None                     |
| is\_active    | tinyint(1)             | None                     |

## Table: `dimension_etl_data_status`


| Column Name    | Data Type    | Index                    |
| -------------- | ------------ | ------------------------ |
| id             | int(11)      | Part of PRIMARY KEY (id) |
| scope\_id      | int(11)      | None                     |
| dim\_table\_id | int(11)      | None                     |
| value\_id      | int(11)      | None                     |
| value\_name    | varchar(100) | None                     |
| is\_active     | tinyint(1)   | None                     |
| updated\_on    | timestamp    | None                     |

## Table: `fact_kpis`


| Column Name         | Data Type                                                               | Index                            |
| ------------------- | ----------------------------------------------------------------------- | -------------------------------- |
| column\_id          | int(11)                                                                 | Part of PRIMARY KEY (column\_id) |
| table\_id           | int(11)                                                                 | Part of PRIMARY KEY (table\_id)  |
| expression          | text                                                                    | None                             |
| type                | enum('MAP','INC\_REDUCE','NON\_INC\_REDUCE','NON\_INC\_RANK','SUMMARY') | None                             |
| is\_reversible      | tinyint(1)                                                              | None                             |
| primary\_key\_level | int(1)                                                                  | None                             |
| is\_active          | tinyint(1)                                                              | None                             |
| scope\_id           | int(11)                                                                 | Part of PRIMARY KEY (scope\_id)  |
| last\_computed\_on  | timestamp                                                               | None                             |
| added\_on           | timestamp                                                               | None                             |
| updated\_on         | timestamp                                                               | None                             |

## Table: `fact_fk_constraints`


| Column Name       | Data Type                                                             | Index                                  |
| ----------------- | --------------------------------------------------------------------- | -------------------------------------- |
| id                | int(11)                                                               | Part of PRIMARY KEY (id)               |
| column\_id        | int(11)                                                               | None                                   |
| table\_id         | int(11)                                                               | Part of UNIQUE KEY (table\_id)         |
| ordinal\_position | int(11)                                                               | Part of UNIQUE KEY (ordinal\_position) |
| ref\_col\_id      | int(11)                                                               | None                                   |
| ref\_table\_id    | int(11)                                                               | Part of UNIQUE KEY (ref\_table\_id)    |
| mapping\_type     | enum('ONE\_TO\_ONE','ONE\_TO\_MANY','MANY\_TO\_ONE','MANY\_TO\_MANY') | None                                   |
| relattion\_type   | enum('IS','BELONGS')                                                  | None                                   |
| is\_active        | tinyint(1)                                                            | None                                   |
| scope\_id         | int(11)                                                               | None                                   |
| added\_on         | timestamp                                                             | None                                   |

## Table: `summary_table`


| Column Name        | Data Type    | Index                    |
| ------------------ | ------------ | ------------------------ |
| id                 | int(11)      | Part of PRIMARY KEY (id) |
| scope\_id          | int(11)      | None                     |
| name               | varchar(100) | None                     |
| primary\_date\_key | int(11)      | None                     |
| is\_active         | tinyint(1)   | None                     |

## Table: `flat_dimension_columns`


| Column Name                           | Data Type                                                                         | Index                               |
| ------------------------------------- | --------------------------------------------------------------------------------- | ----------------------------------- |
| column\_id                            | int                                                                               | Part of PRIMARY KEY (column\_id)    |
| dim\_table\_id                        | int                                                                               | Part of UNIQUE KEY (dim\_table\_id) |
| column\_name                          | varchar(100)                                                                      | Part of UNIQUE KEY (column\_name)   |
| column\_type                          | enum('PK','VALUE','ATTRIBUTE','DATE\_ATTRIBUTE','TIME\_ATTRIBUTE','ALIAS','NONE') | None                                |
| scope\_id                             | int                                                                               | Part of UNIQUE KEY (scope\_id)      |
| is\_active                            | tinyint(1)                                                                        | None                                |
| data\_type                            | enum('TEXT','NUMBER','BIGNUMBER','BOOLEAN','DATE','TIME','MAP')                   | None                                |
| value\_col\_scope                     | enum('CAP','ORG')                                                                 | None                                |
| display\_name                         | text                                                                              | None                                |
| usability\_type                       | enum('DUMP\_ONLY','PARTIAL\_KEY','SELECT','FILTER','GROUP','BANDING')             | None                                |
| functional\_dependency\_column        | int                                                                               | None                                |
| unique\_value\_dependent\_column      | int                                                                               | None                                |
| attr\_table\_name                     | varchar(100)                                                                      | None                                |
| is\_attr\_value\_table\_present       | tinyint(1)                                                                        | None                                |
| scd\_dimension\_table\_id             | int                                                                               | None                                |
| computation\_type                     | enum('ETL','VIEW')                                                                | None                                |
| location\_table\_type                 | enum('FACT','DIMENSION','VIEW','ATTR')                                            | None                                |
| location\_type\_entity\_id            | int                                                                               | None                                |
| scd\_type                             | enum('NONE','SOURCE\_GENERATED','ETL\_GENERATED','VERSIONED\_PARTITIONS')         | None                                |
| scd\_table\_name                      | varchar(100)                                                                      | None                                |
| key\_set\_resolver                    | varchar(255)                                                                      | None                                |
| map\_key\_data\_type                  | enum('TEXT','NUMBER','BIGNUMBER','BOOLEAN','DATE','TIME')                         | None                                |
| map\_value\_data\_type                | enum('TEXT','NUMBER','BIGNUMBER','BOOLEAN','DATE','TIME')                         | None                                |
| column\_id\_str                       | varchar(200)                                                                      | None                                |
| dim\_table\_id\_str                   | varchar(200)                                                                      | None                                |
| functional\_dependency\_column\_str   | varchar(200)                                                                      | None                                |
| unique\_value\_dependent\_column\_str | varchar(200)                                                                      | None                                |
| scd\_dimension\_table\_id\_str        | varchar(200)                                                                      | None                                |
| location\_type\_entity\_id\_str       | varchar(200)                                                                      | None                                |

## Table: `org_context`


| Column Name    | Data Type    | Index                         |
| -------------- | ------------ | ----------------------------- |
| id             | int          | Part of PRIMARY KEY (id)      |
| org\_id        | int          | Part of PRIMARY KEY (org\_id) |
| context\_key   | varchar(100) | None                          |
| is\_active     | tinyint(1)   | None                          |
| context\_value | int          | None                          |
| id\_str        | varchar(200) | None                          |

## Table: `union_mapping`


| Column Name              | Data Type   | Index                                    |
| ------------------------ | ----------- | ---------------------------------------- |
| table\_mapping\_id       | int(11)     | Part of PRIMARY KEY (table\_mapping\_id) |
| target\_diff\_column\_id | int(11)     | None                                     |
| diff\_column\_value      | varchar(99) | None                                     |
| is\_active               | tinyint(1)  | None                                     |
| scope\_id                | int(11)     | None                                     |
| added\_on                | timestamp   | None                                     |
| is\_dynamic\_partition   | tinyint(1)  | None                                     |

## Table: `source_table_fk_constraints`


| Column Name       | Data Type    | Index                                  |
| ----------------- | ------------ | -------------------------------------- |
| id                | int          | Part of PRIMARY KEY (id)               |
| constraint\_name  | varchar(99)  | None                                   |
| column\_id        | int          | None                                   |
| ordinal\_position | int          | None                                   |
| ref\_col\_id      | int          | None                                   |
| is\_active        | tinyint(1)   | None                                   |
| scope\_id         | int          | None                                   |
| added\_on         | timestamp    | None                                   |
| id\_str           | varchar(200) | Part of UNIQUE KEY (id\_str)           |
| column\_id\_str   | varchar(200) | Part of UNIQUE KEY (column\_id\_str)   |
| ref\_col\_id\_str | varchar(200) | Part of UNIQUE KEY (ref\_col\_id\_str) |

## Table: `dimension_attribute_value_tables`


| Column Name   | Data Type                    | Index                              |
| ------------- | ---------------------------- | ---------------------------------- |
| id            | int(11)                      | Part of PRIMARY KEY (id)           |
| table\_prefix | varchar(32)                  | Part of UNIQUE KEY (table\_prefix) |
| scope         | enum('CAP','VERTICAL','ORG') | Part of UNIQUE KEY (scope)         |

## Table: `config_key_values`


| Column Name       | Data Type    | Index                          |
| ----------------- | ------------ | ------------------------------ |
| id                | int(11)      | Part of PRIMARY KEY (id)       |
| scope\_id         | int(11)      | Part of UNIQUE KEY (scope\_id) |
| key               | varchar(100) | Part of UNIQUE KEY (key)       |
| value             | varchar(100) | None                           |
| is\_valid         | tinyint(1)   | None                           |
| last\_updated\_on | timestamp    | None                           |

## Table: `transpose_tables`


| Column Name           | Data Type | Index                                       |
| --------------------- | --------- | ------------------------------------------- |
| transposed\_table\_id | int(11)   | Part of PRIMARY KEY (transposed\_table\_id) |
| source\_table\_id     | int(11)   | None                                        |
| scope\_id             | int(11)   | None                                        |
| is\_active            | int(11)   | None                                        |

## Table: `fact_table_column`


| Column Name                  | Data Type                                                                                                                                                                       | Index                                |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ |
| id                           | int(11)                                                                                                                                                                         | Part of PRIMARY KEY (id)             |
| fact\_table\_id              | int(11)                                                                                                                                                                         | Part of UNIQUE KEY (fact\_table\_id) |
| name                         | varchar(99)                                                                                                                                                                     | Part of UNIQUE KEY (name)            |
| data\_type                   | enum('INT','BIGINT','DOUBLE','TEXT')                                                                                                                                            | None                                 |
| ordinal\_position            | int(11)                                                                                                                                                                         | None                                 |
| column\_type                 | enum('PK','CONSTANT\_PK','SRC\_MEASURE','COMPUTED\_MEASURE','DIMENSION','COMPUTED\_DIMENSION','FACT\_REFERENCE','PARTITION\_KEY','DUMP\_DATA','ETL\_ONLY\_DIMENSION','DIM\_PK') | None                                 |
| meta                         | varchar(99)                                                                                                                                                                     | None                                 |
| is\_active                   | tinyint(1)                                                                                                                                                                      | None                                 |
| is\_visible                  | tinyint(1)                                                                                                                                                                      | None                                 |
| scope\_id                    | int(11)                                                                                                                                                                         | None                                 |
| functional\_dependency\_keys | varchar(100)                                                                                                                                                                    | None                                 |
| added\_on                    | timestamp                                                                                                                                                                       | None                                 |
| updated\_on                  | timestamp                                                                                                                                                                       | None                                 |

## Table: `attribution_strategy_mapping`


| Column Name        | Data Type  | Index                                 |
| ------------------ | ---------- | ------------------------------------- |
| strategy\_id       | int(11)    | Part of UNIQUE KEY (strategy\_id)     |
| fact\_table\_id    | int(11)    | Part of UNIQUE KEY (fact\_table\_id)  |
| fact\_column\_id   | int(11)    | Part of UNIQUE KEY (fact\_column\_id) |
| source\_table\_id  | int(11)    | None                                  |
| source\_column\_id | int(11)    | None                                  |
| scope\_id          | int(11)    | Part of UNIQUE KEY (scope\_id)        |
| is\_active         | tinyint(1) | None                                  |
| updated\_on        | timestamp  | None                                  |

## Table: `org_dimension_provider_mapping`


| Column Name    | Data Type | Index                               |
| -------------- | --------- | ----------------------------------- |
| id             | int(11)   | Part of PRIMARY KEY (id)            |
| org\_id        | int(11)   | Part of UNIQUE KEY (org\_id)        |
| dim\_table\_id | int(11)   | Part of UNIQUE KEY (dim\_table\_id) |
| provider\_id   | int(11)   | Part of UNIQUE KEY (provider\_id)   |

## Table: `provider_dimension_mapping`


| Column Name                | Data Type    | Index                           |
| -------------------------- | ------------ | ------------------------------- |
| id                         | int          | Part of PRIMARY KEY (id)        |
| provider\_table\_id        | int          | None                            |
| provider\_col\_name        | varchar(100) | None                            |
| dim\_table\_id             | int          | None                            |
| dimension\_column\_id      | int          | None                            |
| scope\_id                  | int          | Part of PRIMARY KEY (scope\_id) |
| null\_value                | varchar(100) | None                            |
| not\_null\_value           | varchar(100) | None                            |
| value\_mappings            | text         | None                            |
| capture\_default\_value    | tinyint(1)   | None                            |
| is\_valid                  | tinyint(1)   | None                            |
| id\_str                    | text         | None                            |
| provider\_table\_id\_str   | varchar(200) | None                            |
| provider\_col\_name\_str   | text         | None                            |
| dim\_table\_id\_str        | varchar(200) | None                            |
| dimension\_column\_id\_str | text         | None                            |

## Table: `mongo_structs`


| Column Name | Data Type    | Index                        |
| ----------- | ------------ | ---------------------------- |
| id          | int          | Part of PRIMARY KEY (id)     |
| name        | varchar(50)  | Part of UNIQUE KEY (name)    |
| info        | text         | None                         |
| is\_active  | tinyint(1)   | None                         |
| scope\_id   | int          | None                         |
| added\_on   | timestamp    | None                         |
| id\_str     | varchar(200) | Part of UNIQUE KEY (id\_str) |

## Table: `custom_dimension_transformation_output_column`


| Column Name             | Data Type    | Index                                        |
| ----------------------- | ------------ | -------------------------------------------- |
| transformation\_id\_str | varchar(200) | Part of UNIQUE KEY (transformation\_id\_str) |
| name                    | varchar(50)  | Part of UNIQUE KEY (name)                    |
| display\_name           | varchar(50)  | None                                         |
| column\_type            | varchar(20)  | None                                         |
| data\_type              | varchar(20)  | None                                         |
| scope\_id               | int(11)      | Part of KEY (scope\_id)                      |
| usability\_type         | varchar(20)  | None                                         |
| is\_active              | tinyint(1)   | Part of UNIQUE KEY (is\_active)              |

## Table: `provider_tables`


| Column Name  | Data Type    | Index                             |
| ------------ | ------------ | --------------------------------- |
| id           | int(11)      | Part of PRIMARY KEY (id)          |
| provider\_id | int(11)      | Part of UNIQUE KEY (provider\_id) |
| name         | varchar(100) | Part of UNIQUE KEY (name)         |

## Table: `mongo_source_columns`


| Column Name             | Data Type    | Index                                        |
| ----------------------- | ------------ | -------------------------------------------- |
| source\_column\_id      | int          | None                                         |
| source\_table\_id       | int          | None                                         |
| expression              | text         | None                                         |
| scope\_id               | int          | None                                         |
| source\_column\_id\_str | varchar(200) | Part of UNIQUE KEY (source\_column\_id\_str) |
| source\_table\_id\_str  | varchar(200) | None                                         |

## Table: `custom_dimension_transformation_input_table`


| Column Name               | Data Type    | Index                                        |
| ------------------------- | ------------ | -------------------------------------------- |
| transformation\_id\_str   | varchar(200) | Part of UNIQUE KEY (transformation\_id\_str) |
| scope\_id                 | int(11)      | Part of KEY (scope\_id)                      |
| entity\_name              | varchar(50)  | None                                         |
| entity\_type              | varchar(50)  | None                                         |
| table\_alias              | varchar(100) | Part of UNIQUE KEY (table\_alias)            |
| computation\_window       | int(11)      | None                                         |
| computation\_window\_unit | varchar(50)  | None                                         |
| is\_active                | tinyint(1)   | Part of UNIQUE KEY (is\_active)              |

## Table: `scd_dimension_columns`


| Column Name                           | Data Type                                                                                                         | Index                               |
| ------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------- |
| column\_id                            | int                                                                                                               | Part of PRIMARY KEY (column\_id)    |
| dim\_table\_id                        | int                                                                                                               | Part of UNIQUE KEY (dim\_table\_id) |
| column\_name                          | varchar(100)                                                                                                      | Part of UNIQUE KEY (column\_name)   |
| column\_type                          | enum('PK','ATTRIBUTE','DATE\_ATTRIBUTE','TIME\_ATTRIBUTE','START\_DATE','END\_DATE','NONE','CHANGING\_ATTRIBUTE') | None                                |
| scope\_id                             | int                                                                                                               | Part of UNIQUE KEY (scope\_id)      |
| is\_active                            | tinyint(1)                                                                                                        | None                                |
| data\_type                            | enum('TEXT','NUMBER','BIGNUMBER','BOOLEAN','DATE','TIME')                                                         | None                                |
| value\_col\_scope                     | enum('CAP','ORG')                                                                                                 | None                                |
| display\_name                         | text                                                                                                              | None                                |
| usability\_type                       | enum('DUMP\_ONLY','PARTIAL\_KEY','SELECT','FILTER','GROUP','BANDING')                                             | None                                |
| functional\_dependency\_column        | int                                                                                                               | None                                |
| unique\_value\_dependent\_column      | int                                                                                                               | None                                |
| attr\_table\_name                     | varchar(100)                                                                                                      | None                                |
| is\_attr\_value\_table\_present       | tinyint(1)                                                                                                        | None                                |
| computation\_type                     | enum('ETL','VIEW')                                                                                                | None                                |
| location\_table\_type                 | enum('FACT','DIMENSION','VIEW','ATTR')                                                                            | None                                |
| location\_type\_entity\_id            | int                                                                                                               | None                                |
| column\_id\_str                       | varchar(200)                                                                                                      | None                                |
| dim\_table\_id\_str                   | varchar(200)                                                                                                      | None                                |
| functional\_dependency\_column\_str   | varchar(200)                                                                                                      | None                                |
| unique\_value\_dependent\_column\_str | varchar(200)                                                                                                      | None                                |
| location\_type\_entity\_id\_str       | varchar(200)                                                                                                      | None                                |

## Table: `scopes`


| Column Name | Data Type                    | Index                           |
| ----------- | ---------------------------- | ------------------------------- |
| scope\_id   | int(11)                      | Part of PRIMARY KEY (scope\_id) |
| name        | varchar(45)                  | None                            |
| scope       | enum('CAP','VERTICAL','ORG') | None                            |

## Table: `fact_table_standard_condition`


| Column Name      | Data Type                          | Index                                |
| ---------------- | ---------------------------------- | ------------------------------------ |
| id               | int(11)                            | Part of PRIMARY KEY (id)             |
| name             | varchar(200)                       | None                                 |
| fact\_table\_id  | int(11)                            | Part of UNIQUE KEY (fact\_table\_id) |
| tableType        | enum('FACT','DIMENSION','SUMMARY') | Part of UNIQUE KEY (tableType)       |
| refTableId       | int(11)                            | Part of UNIQUE KEY (refTableId)      |
| column\_id       | int(11)                            | Part of UNIQUE KEY (column\_id)      |
| operator         | varchar(10)                        | None                                 |
| condition\_value | text                               | None                                 |
| is\_active       | tinyint(1)                         | None                                 |
| scope\_id        | int(11)                            | Part of UNIQUE KEY (scope\_id)       |

## Table: `logical_view_column_definition`


| Column Name     | Data Type    | Index                            |
| --------------- | ------------ | -------------------------------- |
| column\_id      | int(11)      | Part of PRIMARY KEY (column\_id) |
| view\_id        | int(11)      | None                             |
| scope\_id       | int(11)      | None                             |
| select\_col\_id | int(11)      | None                             |
| alias           | varchar(100) | None                             |
| dim\_table\_id  | int(11)      | None                             |
| dim\_col\_id    | int(11)      | None                             |
| is\_active      | tinyint(1)   | None                             |

## Table: `organization_scopes`


| Column Name | Data Type    | Index                         |
| ----------- | ------------ | ----------------------------- |
| id          | int          | Part of PRIMARY KEY (id)      |
| org\_id     | int          | Part of PRIMARY KEY (org\_id) |
| scope\_id   | int          | None                          |
| id\_str     | varchar(200) | None                          |

## Table: `dimension`


| Column Name              | Data Type               | Index                         |
| ------------------------ | ----------------------- | ----------------------------- |
| dim\_id                  | int(11)                 | Part of PRIMARY KEY (dim\_id) |
| fact\_column\_link       | varchar(100)            | None                          |
| name                     | varchar(100)            | Part of UNIQUE KEY (name)     |
| dim\_table\_id           | int(11)                 | None                          |
| scope\_id                | int(11)                 | None                          |
| is\_active               | tinyint(1)              | None                          |
| added\_on                | timestamp               | None                          |
| updated\_on              | timestamp               | None                          |
| display\_name            | text                    | None                          |
| description              | varchar(250)            | None                          |
| link\_type               | enum('DIRECT','BRIDGE') | None                          |
| bridge\_table\_src\_type | enum('DIM','FACT')      | None                          |
| bridge\_table\_id        | int(11)                 | None                          |
| fact\_pk                 | int(11)                 | None                          |
| dim\_fk                  | int(11)                 | None                          |

## Table: `fact_table`


| Column Name                       | Data Type                                              | Index                     |
| --------------------------------- | ------------------------------------------------------ | ------------------------- |
| id                                | int(11)                                                | Part of PRIMARY KEY (id)  |
| scope                             | enum('CAP','VERTICAL','ORG')                           | None                      |
| scope\_id                         | int(11)                                                | None                      |
| name                              | varchar(55)                                            | Part of UNIQUE KEY (name) |
| definition                        | text                                                   | None                      |
| is\_active                        | tinyint(1)                                             | None                      |
| primary\_date\_key\_dimension     | int(11)                                                | None                      |
| primary\_date\_key\_dimension\_id | int(11)                                                | None                      |
| parent\_src\_tables               | varchar(100)                                           | None                      |
| partition\_keys                   | varchar(500)                                           | None                      |
| context\_keys                     | varchar(500)                                           | None                      |
| added\_on                         | timestamp                                              | None                      |
| updated\_on                       | timestamp                                              | None                      |
| incremental\_period\_in\_year     | int(11)                                                | None                      |
| type                              | enum('BASE','ETL\_ONLY','EXPORT\_ONLY','SCD\_HISTORY') | None                      |

## Table: `dimension_table`


| Column Name             | Data Type                                                                            | Index                     |
| ----------------------- | ------------------------------------------------------------------------------------ | ------------------------- |
| id                      | int(11)                                                                              | Part of PRIMARY KEY (id)  |
| name                    | varchar(100)                                                                         | Part of UNIQUE KEY (name) |
| scope                   | enum('CAP','VERTICAL','ORG')                                                         | None                      |
| scope\_id               | int(11)                                                                              | None                      |
| dim\_type               | enum('STANDARD\_CONSTANT','STANDARD','USER\_DEFINED','SRC\_DEFINED','EXTERNAL\_SRC') | None                      |
| structure\_type         | enum('FLAT','HIERARCHICAL','SCD')                                                    | None                      |
| is\_active              | tinyint(1)                                                                           | None                      |
| is\_large               | tinyint(1)                                                                           | None                      |
| is\_elastic\_indexed    | tinyint(4)                                                                           | None                      |
| is\_storage\_fragmented | tinyint(1)                                                                           | None                      |
| added\_on               | timestamp                                                                            | None                      |
| updated\_on             | timestamp                                                                            | None                      |
| auto\_update\_cols      | varchar(100)                                                                         | None                      |

## Table: `source_schema_end_point_mapping`


| Column Name      | Data Type                                    | Index                                 |
| ---------------- | -------------------------------------------- | ------------------------------------- |
| id               | int                                          | Part of PRIMARY KEY (id)              |
| db\_name         | varchar(99)                                  | Part of UNIQUE KEY (db\_name)         |
| end\_point\_name | varchar(99)                                  | Part of UNIQUE KEY (end\_point\_name) |
| dialect          | enum('MYSQL','SPARK','MONGO','ES','DERIVED') | None                                  |
| is\_active       | tinyint(1)                                   | None                                  |
| added\_on        | timestamp                                    | None                                  |
| id\_str          | varchar(200)                                 | Part of UNIQUE KEY (id\_str)          |

## Table: `shard_id_reon_keyname_mapping`


| Column Name            | Data Type    | Index                                       |
| ---------------------- | ------------ | ------------------------------------------- |
| shard\_id\_str         | VARCHAR(100) | Part of UNIQUE KEY (shard\_id\_str)         |
| source\_table\_id\_str | VARCHAR(200) | Part of UNIQUE KEY (source\_table\_id\_str) |
| split\_shard\_name     | VARCHAR(100) | Part of UNIQUE KEY (split\_shard\_name)     |
| reon\_shard\_key       | VARCHAR(100) | Part of UNIQUE KEY (reon\_shard\_key)       |
| is\_valid              | TINYINT(1)   | None                                        |
| last\_modified         | TIMESTAMP    | None                                        |

## Table: `shard_idr_mapping`


| Column Name                | Data Type    | Index                                           |
| -------------------------- | ------------ | ----------------------------------------------- |
| id\_str                    | VARCHAR(100) | None                                            |
| resource\_mapping\_id\_str | VARCHAR(200) | Part of UNIQUE KEY (resource\_mapping\_id\_str) |
| shard\_identifier          | VARCHAR(100) | Part of UNIQUE KEY (shard\_identifier)          |
| is\_valid                  | TINYINT(1)   | None                                            |
| last\_modified             | TIMESTAMP    | None                                            |

## Table: `resource_sdendpoint_mapping`


| Column Name      | Data Type                          | Index                                 |
| ---------------- | ---------------------------------- | ------------------------------------- |
| mapping\_id\_str | VARCHAR(200)                       | None                                  |
| end\_point\_name | VARCHAR(100)                       | Part of UNIQUE KEY (end\_point\_name) |
| resource\_type   | enum('MYSQL','MONGO','SPARK','ES') | None                                  |
| sharding\_policy | enum('NONE','ORG')                 | None                                  |
| is\_valid        | TINYINT(1)                         | None                                  |
| last\_modified   | TIMESTAMP                          | None                                  |

## Table: `source_table`


| Column Name            | Data Type    | Index                               |
| ---------------------- | ------------ | ----------------------------------- |
| id                     | int(11)      | Part of PRIMARY KEY (id)            |
| db\_name               | VARCHAR(100) | Part of UNIQUE KEY (db\_name)       |
| table\_name            | VARCHAR(100) | Part of UNIQUE KEY (table\_name)    |
| endpoint\_name         | VARCHAR(100) | Part of UNIQUE KEY (endpoint\_name) |
| source\_table\_id\_str | VARCHAR(300) | None                                |
| is\_valid              | TINYINT(1)   | None                                |
| last\_modified         | TIMESTAMP    | None                                |

## Table: `incr_cdm_table_master_time`


| Column Name        | Data Type  | Index                                  |
| ------------------ | ---------- | -------------------------------------- |
| source\_table\_id  | INT(11)    | Part of UNIQUE KEY (source\_table\_id) |
| shard\_id          | INT(11)    | Part of UNIQUE KEY (shard\_id)         |
| from\_master\_time | datetime   | None                                   |
| to\_master\_time   | datetime   | None                                   |
| is\_valid          | TINYINT(1) | None                                   |
| last\_modified     | TIMESTAMP  | None                                   |

## Table: `source_shard_info`


| Column Name       | Data Type    | Index                                  |
| ----------------- | ------------ | -------------------------------------- |
| id                | int(11)      | Part of PRIMARY KEY (id)               |
| shard\_name       | VARCHAR(100) | Part of UNIQUE KEY (shard\_name)       |
| source\_table\_id | int(11)      | Part of UNIQUE KEY (source\_table\_id) |
| is\_valid         | TINYINT(1)   | None                                   |
| last\_modified    | TIMESTAMP    | None                                   |

## Table: `hourly_table_master_time`


| Column Name        | Data Type  | Index                                  |
| ------------------ | ---------- | -------------------------------------- |
| source\_table\_id  | int        | Part of UNIQUE KEY (source\_table\_id) |
| from\_master\_time | datetime   | None                                   |
| is\_valid          | tinyint(1) | None                                   |
| last\_modified     | timestamp  | None                                   |

## Table: `full_table_master_time`


| Column Name       | Data Type  | Index                                  |
| ----------------- | ---------- | -------------------------------------- |
| source\_table\_id | INT(11)    | Part of UNIQUE KEY (source\_table\_id) |
| shard\_id         | INT(11)    | Part of UNIQUE KEY (shard\_id)         |
| master\_time      | datetime   | None                                   |
| is\_valid         | TINYINT(1) | None                                   |
| last\_modified    | TIMESTAMP  | None                                   |

## Table: `email_templates`


| Column Name | Data Type    | Index                     |
| ----------- | ------------ | ------------------------- |
| id          | int(11)      | Part of PRIMARY KEY (id)  |
| event\_type | varchar(500) | Part of KEY (event\_type) |
| subject     | text         | None                      |
| message     | text         | None                      |

## Table: `alert_tag_mapping`


| Column Name | Data Type                                                            | Index                    |
| ----------- | -------------------------------------------------------------------- | ------------------------ |
| id          | int(11)                                                              | Part of PRIMARY KEY (id) |
| alert\_id   | int(11)                                                              | Part of KEY (alert\_id)  |
| key\_id     | varchar(500)                                                         | Part of KEY (key\_id)    |
| operator    | enum('EQUALS','NOT\_EQUALS','GREATER\_THAN','LESS\_THAN','CONTAINS') | None                     |
| value       | varchar(500)                                                         | None                     |

## Table: `dag_timing_notification_config`


| Column Name       | Data Type   | Index                    |
| ----------------- | ----------- | ------------------------ |
| id                | INT(11)     | Part of PRIMARY KEY (id) |
| dag\_type         | varchar(50) | Part of KEY (dag\_type)  |
| base\_minutes     | INT(11)     | None                     |
| buffer\_minutes   | INT(11)     | None                     |
| is\_active        | TINYINT(1)  | None                     |
| last\_updated\_on | timestamp   | None                     |
| created\_on       | timestamp   | None                     |

## Table: `alert_action_mapping`


| Column Name  | Data Type                                 | Index                    |
| ------------ | ----------------------------------------- | ------------------------ |
| id           | int(11)                                   | Part of PRIMARY KEY (id) |
| alert\_id    | int(11)                                   | Part of KEY (alert\_id)  |
| action\_type | enum('EMAIL','SMS','FLOCK','LOG','SLACK') | None                     |
| recipients   | text                                      | None                     |

## Table: `event_types`


| Column Name | Data Type    | Index                    |
| ----------- | ------------ | ------------------------ |
| id          | int(11)      | Part of PRIMARY KEY (id) |
| type        | varchar(500) | None                     |

## Table: `event_tags`


| Column Name | Data Type                       | Index                     |
| ----------- | ------------------------------- | ------------------------- |
| id          | int(11)                         | Part of PRIMARY KEY (id)  |
| event\_type | varchar(500)                    | Part of KEY (event\_type) |
| key\_name   | varchar(500)                    | None                      |
| data\_type  | enum('STRING','DATETIME','INT') | None                      |

## Table: `alerts`


| Column Name  | Data Type    | Index                     |
| ------------ | ------------ | ------------------------- |
| id           | int(11)      | Part of PRIMARY KEY (id)  |
| name         | varchar(100) | Part of UNIQUE KEY (name) |
| description  | text         | None                      |
| event\_type  | varchar(500) | None                      |
| dag\_type    | varchar(500) | None                      |
| active       | tinyint(1)   | None                      |
| is\_critical | tinyint(1)   | None                      |

## Table: `org_configs`


| Column Name         | Data Type                   | Index                         |
| ------------------- | --------------------------- | ----------------------------- |
| org\_id             | int(11)                     | Part of PRIMARY KEY (org\_id) |
| is\_active          | tinyint(4)                  | None                          |
| added\_on           | timestamp                   | None                          |
| is\_location\_aware | tinyint(1)                  | None                          |
| location\_type      | enum('ZONE','STORE','NONE') | None                          |
| is\_mj              | int(11)                     | None                          |

## Table: `db_configs`


| Column Name    | Data Type    | Index                        |
| -------------- | ------------ | ---------------------------- |
| id             | int(11)      | Part of PRIMARY KEY (id)     |
| org\_id        | int(11)      | Part of UNIQUE KEY (org\_id) |
| shard\_service | varchar(100) | None                         |
| dbase          | varchar(100) | None                         |

## Table: `encryption_details`


| Column Name       | Data Type   | Index                                |
| ----------------- | ----------- | ------------------------------------ |
| id                | bigint(20)  | Part of PRIMARY KEY (id)             |
| org\_id           | int(11)     | Part of UNIQUE KEY (org\_id)         |
| encryption\_tag   | varchar(50) | Part of UNIQUE KEY (encryption\_tag) |
| algorithm         | varchar(50) | None                                 |
| public\_user      | text        | None                                 |
| public\_key       | text        | None                                 |
| added\_by         | int(11)     | None                                 |
| added\_on         | timestamp   | None                                 |
| last\_updated\_by | int(11)     | None                                 |
| last\_updated\_on | timestamp   | None                                 |

## Table: `cron`


| Column Name          | Data Type                                    | Index                               |
| -------------------- | -------------------------------------------- | ----------------------------------- |
| id                   | bigint(20)                                   | Part of PRIMARY KEY (id)            |
| org\_id              | int(11)                                      | Part of UNIQUE KEY (org\_id)        |
| job\_group\_id       | bigint(20)                                   | Part of UNIQUE KEY (job\_group\_id) |
| pattern              | varchar(100)                                 | None                                |
| schedule\_type       | enum('DAILY','WEEKLY','MONTHLY','ONE\_TIME') | None                                |
| schedule\_value      | varchar(50)                                  | None                                |
| data\_to\_select     | enum('LD','LM','LW','ONE\_TIME')             | None                                |
| data\_period         | varchar(100)                                 | None                                |
| start\_validity      | date                                         | None                                |
| end\_validity        | date                                         | None                                |
| is\_active           | tinyint(1)                                   | None                                |
| real\_time\_schedule | tinyint(1)                                   | None                                |
| created\_by          | bigint(20)                                   | None                                |
| last\_updated\_by    | bigint(20)                                   | None                                |
| last\_updated\_on    | timestamp                                    | None                                |

## Table: `partition_identifiers`


| Column Name     | Data Type    | Index                                |
| --------------- | ------------ | ------------------------------------ |
| id              | bigint(20)   | Part of PRIMARY KEY (id)             |
| org\_id         | int(11)      | Part of KEY (org\_id)                |
| template\_id    | bigint(20)   | Part of KEY (template\_id)           |
| dimension\_name | varchar(100) | Part of UNIQUE KEY (dimension\_name) |
| created\_on     | timestamp    | None                                 |

## Table: `job_filters`


| Column Name     | Data Type                                                                                                                                                                  | Index                                |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ |
| id              | bigint(20)                                                                                                                                                                 | Part of UNIQUE KEY (id)              |
| org\_id         | int(11)                                                                                                                                                                    | Part of KEY (org\_id)                |
| job\_id         | bigint(20)                                                                                                                                                                 | Part of KEY (job\_id)                |
| dimension\_name | varchar(100)                                                                                                                                                               | Part of UNIQUE KEY (dimension\_name) |
| attribute\_name | varchar(100)                                                                                                                                                               | Part of UNIQUE KEY (attribute\_name) |
| operator        | enum('EQUALS','LESS','IN','GREATER\_THAN','LESS\_THAN','GREATER\_THAN\_EQUALS','LESS\_THAN\_EQUALS','NOT\_EQUALS','NOT\_IN','BETWEEN','IS','IS\_NOT','LIKE','ANNUAL\_DAY') | None                                 |
| fields          | text                                                                                                                                                                       | None                                 |
| created\_on     | timestamp                                                                                                                                                                  | None                                 |

## Table: `fraud_templates`


| Column Name    | Data Type    | Index                        |
| -------------- | ------------ | ---------------------------- |
| id             | bigint(20)   | Part of PRIMARY KEY (id)     |
| org\_id        | int(11)      | Part of KEY (org\_id)        |
| params         | text         | None                         |
| fact\_name     | varchar(100) | None                         |
| template\_name | varchar(50)  | Part of KEY (template\_name) |
| created\_on    | timestamp    | None                         |

## Table: `template_filters`


| Column Name     | Data Type                                                                                                                                                                  | Index                                |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ |
| id              | bigint(20)                                                                                                                                                                 | Part of PRIMARY KEY (id)             |
| org\_id         | int(11)                                                                                                                                                                    | Part of KEY (org\_id)                |
| template\_name  | varchar(50)                                                                                                                                                                | Part of KEY (template\_name)         |
| dimension\_name | varchar(100)                                                                                                                                                               | Part of UNIQUE KEY (dimension\_name) |
| attribute\_name | varchar(100)                                                                                                                                                               | Part of UNIQUE KEY (attribute\_name) |
| operator        | enum('EQUALS','LESS','IN','GREATER\_THAN','LESS\_THAN','GREATER\_THAN\_EQUALS','LESS\_THAN\_EQUALS','NOT\_EQUALS','NOT\_IN','BETWEEN','IS','IS\_NOT','LIKE','ANNUAL\_DAY') | None                                 |
| fields          | text                                                                                                                                                                       | None                                 |
| created\_on     | timestamp                                                                                                                                                                  | None                                 |

## Table: `jobs`


| Column Name            | Data Type    | Index                               |
| ---------------------- | ------------ | ----------------------------------- |
| id                     | bigint(20)   | Part of PRIMARY KEY (id)            |
| org\_id                | int(11)      | Part of UNIQUE KEY (org\_id)        |
| job\_group\_id         | bigint(20)   | Part of UNIQUE KEY (job\_group\_id) |
| template\_id           | bigint(20)   | Part of UNIQUE KEY (template\_id)   |
| customers\_group\_id   | bigint(20)   | None                                |
| customers\_group\_name | text         | None                                |
| alias                  | text         | None                                |
| primary\_date\_column  | varchar(100) | None                                |
| primary\_time\_column  | varchar(100) | None                                |
| ftp\_folder\_path      | text         | None                                |
| created\_by            | bigint(20)   | None                                |
| created\_on            | timestamp    | None                                |

## Table: `job_measure_alias`


| Column Name   | Data Type    | Index                    |
| ------------- | ------------ | ------------------------ |
| id            | bigint(20)   | Part of PRIMARY KEY (id) |
| org\_id       | int(11)      | Part of KEY (org\_id)    |
| job\_id       | bigint(20)   | Part of KEY (job\_id)    |
| fact\_name    | varchar(50)  | None                     |
| measure\_name | varchar(100) | None                     |
| alias\_name   | varchar(100) | None                     |
| created\_on   | timestamp    | None                     |

## Table: `job_retriggers`


| Column Name                  | Data Type                                      | Index                        |
| ---------------------------- | ---------------------------------------------- | ---------------------------- |
| id                           | bigint(20)                                     | Part of PRIMARY KEY (id)     |
| org\_id                      | int(11)                                        | Part of KEY (org\_id)        |
| job\_group\_id               | bigint(20)                                     | Part of KEY (job\_group\_id) |
| status                       | enum('OPEN','IN\_PROGRESS','SUCCESS','FAILED', | Part of KEY (status)         |
| added\_on                    | datetime                                       | None                         |
| started\_at                  | datetime                                       | None                         |
| last\_updated\_on            | timestamp                                      | None                         |
| priority                     | tinyint(3)                                     | None                         |
| org\_sync\_check\_unique\_id | varchar(50)                                    | None                         |
| failure\_reason              | TEXT                                           | None                         |

## Table: `job_base_dimension_alias`


| Column Name | Data Type    | Index                    |
| ----------- | ------------ | ------------------------ |
| id          | bigint(20)   | Part of PRIMARY KEY (id) |
| org\_id     | int(11)      | Part of KEY (org\_id)    |
| job\_id     | bigint(20)   | Part of KEY (job\_id)    |
| dim\_name   | varchar(50)  | None                     |
| attr\_name  | varchar(100) | None                     |
| alias\_name | varchar(100) | None                     |
| created\_on | timestamp    | None                     |

## Table: `job_kpi_alias`


| Column Name | Data Type    | Index                         |
| ----------- | ------------ | ----------------------------- |
| id          | bigint(20)   | Part of PRIMARY KEY (id)      |
| org\_id     | int(11)      | Part of PRIMARY KEY (org\_id) |
| job\_id     | bigint(20)   | None                          |
| kpi\_id     | varchar(100) | None                          |
| alias\_name | varchar(100) | None                          |
| created\_on | timestamp    | None                          |

## Table: `org_export_encryption_register`


| Column Name                           | Data Type  | Index                         |
| ------------------------------------- | ---------- | ----------------------------- |
| id                                    | bigint(20) | Part of PRIMARY KEY (id)      |
| org\_id                               | int(11)    | Part of PRIMARY KEY (org\_id) |
| is\_encryption\_for\_exports\_enabled | tinyint(1) | None                          |
| added\_on                             | timestamp  | None                          |
| last\_updated\_on                     | timestamp  | None                          |

## Table: `column_value_mapping`


| Column Name            | Data Type    | Index                    |
| ---------------------- | ------------ | ------------------------ |
| id                     | bigint(20)   | Part of PRIMARY KEY (id) |
| org\_id                | INT(11)      | None                     |
| columns\_actual\_value | VARCHAR(100) | None                     |
| columns\_export\_value | VARCHAR(100) | None                     |
| is\_valid              | TINYINT(1)   | None                     |
| added\_on              | DATETIME     | None                     |
| last\_updated\_on      | DATETIME     | None                     |

## Table: `job_dimension_alias`


| Column Name     | Data Type    | Index                    |
| --------------- | ------------ | ------------------------ |
| id              | bigint(20)   | Part of PRIMARY KEY (id) |
| org\_id         | int(11)      | Part of KEY (org\_id)    |
| job\_id         | bigint(20)   | Part of KEY (job\_id)    |
| dimension\_name | varchar(100) | None                     |
| attribute\_name | varchar(100) | None                     |
| alias\_name     | varchar(100) | None                     |
| created\_on     | timestamp    | None                     |

## Table: `default_export_value`


| Column Name            | Data Type    | Index                    |
| ---------------------- | ------------ | ------------------------ |
| id                     | bigint(20)   | Part of PRIMARY KEY (id) |
| org\_id                | INT(11)      | None                     |
| default\_string\_value | VARCHAR(100) | None                     |
| default\_int\_value    | VARCHAR(100) | None                     |
| is\_valid              | TINYINT(1)   | None                     |
| added\_on              | DATETIME     | None                     |
| last\_updated\_on      | DATETIME     | None                     |

## Table: `job_executions`


| Column Name                    | Data Type                                                                                                                                                                                                                                                                                                                                                                  | Index                           |
| ------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------- |
| id                             | bigint(20)                                                                                                                                                                                                                                                                                                                                                                 | Part of PRIMARY KEY (id)        |
| org\_id                        | int(11)                                                                                                                                                                                                                                                                                                                                                                    | Part of KEY (org\_id)           |
| job\_group\_id                 | bigint(20)                                                                                                                                                                                                                                                                                                                                                                 | Part of KEY (job\_group\_id)    |
| job\_id                        | bigint(20)                                                                                                                                                                                                                                                                                                                                                                 | Part of KEY (job\_id)           |
| template\_id                   | int(11)                                                                                                                                                                                                                                                                                                                                                                    | None                            |
| template\_name                 | varchar(100)                                                                                                                                                                                                                                                                                                                                                               | None                            |
| data\_period                   | varchar(100)                                                                                                                                                                                                                                                                                                                                                               | None                            |
| query\_sql                     | longtext                                                                                                                                                                                                                                                                                                                                                                   | None                            |
| internal\_s3\_location         | text                                                                                                                                                                                                                                                                                                                                                                       | None                            |
| internal\_s3\_done\_time       | datetime                                                                                                                                                                                                                                                                                                                                                                   | None                            |
| file\_location                 | text                                                                                                                                                                                                                                                                                                                                                                       | None                            |
| file\_password                 | varchar(100)                                                                                                                                                                                                                                                                                                                                                               | None                            |
| static\_password\_enabled      | tinyint(4)                                                                                                                                                                                                                                                                                                                                                                 | None                            |
| customers\_group\_s3\_location | text                                                                                                                                                                                                                                                                                                                                                                       | None                            |
| status                         | enum('IN\_PROGRESS','SUCCESS','FAILED','FTP\_FAILURE')                                                                                                                                                                                                                                                                                                                     | Part of KEY (status)            |
| substatus                      | enum('IN\_PROGRESS','SUCCESS','FTP\_CREDENTIAL\_ISSUE','INTERNAL\_S3\_DONE','INTERNAL\_S3\_FAILED','META\_DATA\_ISSUE','QUERY\_GENERATION\_ISSUE','DUMP\_FAILED','TRIGGER\_FAILED','FAILED','PERMANENT\_META\_DATA\_ISSUE','PERMANENT\_FTP\_FAILURE','FTP\_ACCESS\_ISSUE','FTP\_FAILURE','FILE\_SIZE\_LIMIT\_EXCEEDED','CONNECT\_PLUS\_S3\_DONE','CONNECT\_PLUS\_FAILURE') | Part of KEY (substatus)         |
| last\_updated\_by              | bigint(20)                                                                                                                                                                                                                                                                                                                                                                 | None                            |
| last\_updated\_on              | timestamp                                                                                                                                                                                                                                                                                                                                                                  | Part of KEY (last\_updated\_on) |
| export\_data\_start\_time      | datetime                                                                                                                                                                                                                                                                                                                                                                   | None                            |
| export\_data\_end\_time        | datetime                                                                                                                                                                                                                                                                                                                                                                   | None                            |
| trigger\_time                  | datetime                                                                                                                                                                                                                                                                                                                                                                   | None                            |
| execution\_id                  | bigint(20)                                                                                                                                                                                                                                                                                                                                                                 | None                            |
| external\_target\_file\_path   | text                                                                                                                                                                                                                                                                                                                                                                       | None                            |
| priority                       | tinyint(3)                                                                                                                                                                                                                                                                                                                                                                 | None                            |

## Table: `job_fraud_alias`


| Column Name | Data Type    | Index                         |
| ----------- | ------------ | ----------------------------- |
| id          | bigint(20)   | Part of PRIMARY KEY (id)      |
| org\_id     | int(11)      | Part of PRIMARY KEY (org\_id) |
| job\_id     | bigint(20)   | None                          |
| fraud\_kpi  | text         | None                          |
| alias\_name | varchar(100) | None                          |
| created\_on | timestamp    | None                          |

## Table: `fraud_kpis`


| Column Name   | Data Type    | Index                 |
| ------------- | ------------ | --------------------- |
| id            | bigint(20)   | Part of KEY (id)      |
| org\_id       | bigint(20)   | Part of KEY (org\_id) |
| fact\_name    | varchar(100) | None                  |
| measure\_name | varchar(100) | None                  |
| display\_name | varchar(100) | None                  |

## Table: `base_name`


| Column Name    | Data Type                | Index                        |
| -------------- | ------------------------ | ---------------------------- |
| id             | bigint(20)               | Part of PRIMARY KEY (id)     |
| org\_id        | int(11)                  | Part of KEY (org\_id)        |
| name           | varchar(100)             | Part of UNIQUE KEY (name)    |
| template\_name | varchar(50)              | Part of KEY (template\_name) |
| type           | enum('FACT','DIMENSION') | None                         |
| created\_on    | timestamp                | None                         |

## Table: `templates`


| Column Name    | Data Type                                                 | Index                        |
| -------------- | --------------------------------------------------------- | ---------------------------- |
| id             | bigint(20)                                                | Part of PRIMARY KEY (id)     |
| org\_id        | int(11)                                                   | Part of UNIQUE KEY (org\_id) |
| name           | varchar(100)                                              | Part of UNIQUE KEY (name)    |
| description    | varchar(100)                                              | None                         |
| template\_type | enum('BASE','KPI','BASE\_FACT','BASE\_DIMENSION','FRAUD') | None                         |
| created\_by    | bigint(20)                                                | None                         |
| created\_on    | timestamp                                                 | None                         |

## Table: `dimensions`


| Column Name  | Data Type    | Index                      |
| ------------ | ------------ | -------------------------- |
| id           | bigint(20)   | Part of PRIMARY KEY (id)   |
| org\_id      | int(11)      | Part of KEY (org\_id)      |
| name         | varchar(100) | Part of UNIQUE KEY (name)  |
| template\_id | bigint(20)   | Part of KEY (template\_id) |
| created\_on  | timestamp    | None                       |

## Table: `job_groups`


| Column Name       | Data Type                                       | Index                        |
| ----------------- | ----------------------------------------------- | ---------------------------- |
| id                | bigint(20)                                      | Part of PRIMARY KEY (id)     |
| org\_id           | int(11)                                         | Part of UNIQUE KEY (org\_id) |
| name              | varchar(60)                                     | Part of UNIQUE KEY (name)    |
| description       | varchar(250)                                    | None                         |
| dump\_type        | enum('FTP','S3')                                | None                         |
| ftp\_tag          | varchar(50)                                     | None                         |
| file\_path        | text                                            | None                         |
| recipients        | text                                            | None                         |
| is\_active        | tinyint(1)                                      | None                         |
| source            | enum('DATA\_EXPORT','AUDIENCE\_GROUP\_MANAGER') | None                         |
| source\_id        | int(11)                                         | None                         |
| created\_by       | bigint(20)                                      | None                         |
| last\_updated\_by | bigint(20)                                      | None                         |
| last\_updated\_on | timestamp                                       | None                         |
| encryption\_tag   | varchar(50)                                     | None                         |

## Table: `kpis`


| Column Name  | Data Type    | Index                             |
| ------------ | ------------ | --------------------------------- |
| id           | bigint(20)   | Part of PRIMARY KEY (id)          |
| org\_id      | int(11)      | Part of KEY (org\_id)             |
| kpi\_ref\_id | varchar(100) | Part of UNIQUE KEY (kpi\_ref\_id) |
| template\_id | bigint(20)   | Part of KEY (template\_id)        |
| created\_on  | timestamp    | None                              |

## Table: `entity_checkpoints`


| Column Name       | Data Type    | Index                    |
| ----------------- | ------------ | ------------------------ |
| id                | int          | Part of PRIMARY KEY (id) |
| namespace         | varchar(100) | Part of KEY (namespace)  |
| tracked\_value    | varchar(100) | None                     |
| is\_valid         | tinyint(1)   | Part of KEY (is\_valid)  |
| added\_on         | timestamp    | None                     |
| last\_updated\_on | timestamp    | None                     |

## Table: `multi_org_relations`


| Column Name        | Data Type              | Index                            |
| ------------------ | ---------------------- | -------------------------------- |
| id                 | int                    | Part of PRIMARY KEY (id)         |
| org\_id            | int                    | Part of KEY (org\_id)            |
| connected\_org\_id | int                    | None                             |
| relationship\_type | enum('PARENT\_CHILD')  | Part of KEY (relationship\_type) |
| org\_type          | enum('PARENT','CHILD') | None                             |
| is\_valid          | tinyint(1)             | None                             |
| created\_on        | timestamp              | None                             |
| last\_updated\_on  | timestamp              | None                             |

## Table: `pii_masked_column`


| Column Name     | Data Type                                         | Index                           |
| --------------- | ------------------------------------------------- | ------------------------------- |
| id              | int                                               | Part of PRIMARY KEY (id)        |
| column\_type    | enum('FLAT','HIERARCHICAL','FACT','CUSTOM','SCD') | None                            |
| column\_id      | int                                               | None                            |
| column\_name    | varchar(250)                                      | None                            |
| scope\_id       | int                                               | Part of PRIMARY KEY (scope\_id) |
| masking\_type   | enum('SHOW\_LAST\_THREE','COMPLETE\_MASK','NONE') | None                            |
| is\_active      | tinyint(1)                                        | None                            |
| column\_id\_str | varchar(200)                                      | None                            |

## Table: `source_data_dump`


| Column Name    | Data Type    | Index                         |
| -------------- | ------------ | ----------------------------- |
| id             | int          | Part of PRIMARY KEY (id)      |
| table\_id      | int          | None                          |
| org\_id        | int          | Part of PRIMARY KEY (org\_id) |
| is\_active     | tinyint(1)   | None                          |
| table\_id\_str | varchar(200) | None                          |

## Table: `dimension_groups`


| Column Name                                 | Data Type                                                                                 | Index                                  |
| ------------------------------------------- | ----------------------------------------------------------------------------------------- | -------------------------------------- |
| column\_id                                  | int                                                                                       | Part of PRIMARY KEY (column\_id)       |
| dim\_table\_id                              | int                                                                                       | Part of KEY (dim\_table\_id)           |
| dim\_id                                     | int                                                                                       | None                                   |
| dimension\_name                             | varchar(100)                                                                              | None                                   |
| parent\_attribute                           | varchar(50)                                                                               | Part of UNIQUE KEY (parent\_attribute) |
| parent\_attribute\_type                     | enum('HIERARCHICAL','FLAT')                                                               | None                                   |
| parent\_attribute\_column\_id               | int                                                                                       | None                                   |
| column\_name                                | varchar(100)                                                                              | Part of UNIQUE KEY (column\_name)      |
| display\_name                               | varchar(100)                                                                              | None                                   |
| column\_type                                | enum('PK','VALUE','LEVEL','DATE\_ATTRIBUTE','TIME\_ATTRIBUTE','ATTRIBUTE','ALIAS','NONE') | None                                   |
| level\_num                                  | int                                                                                       | None                                   |
| level\_num\_ref                             | int                                                                                       | None                                   |
| scope\_id                                   | int                                                                                       | Part of KEY (scope\_id)                |
| is\_active                                  | tinyint(1)                                                                                | Part of KEY (is\_active)               |
| is\_deleted                                 | tinyint(1)                                                                                | None                                   |
| data\_type                                  | enum('TEXT','NUMBER','BIGNUMBER','BOOLEAN','DATE','TIME')                                 | None                                   |
| value\_col\_scope                           | enum('CAP','ORG')                                                                         | None                                   |
| usability\_type                             | enum('SELECT','FILTER','GROUP')                                                           | None                                   |
| parent\_functional\_dependency\_column      | int                                                                                       | None                                   |
| computation\_type                           | enum('ETL','VIEW','WORKFLOW')                                                             | None                                   |
| last\_updated\_on                           | timestamp                                                                                 | None                                   |
| dim\_table\_id\_str                         | varchar(200)                                                                              | None                                   |
| dim\_id\_str                                | varchar(200)                                                                              | None                                   |
| parent\_attribute\_column\_id\_str          | varchar(200)                                                                              | None                                   |
| parent\_functional\_dependency\_column\_str | varchar(200)                                                                              | None                                   |
| parent\_column\_type                        | varchar(50)                                                                               | None                                   |

## Table: `custom_table_fk`


| Column Name              | Data Type          | Index                                   |
| ------------------------ | ------------------ | --------------------------------------- |
| custom\_table\_id        | int                | Part of PRIMARY KEY (custom\_table\_id) |
| name                     | varchar(100)       | None                                    |
| scope\_id                | int                | None                                    |
| link\_table\_type        | enum('DIM','FACT') | Part of PRIMARY KEY (link\_table\_type) |
| link\_table\_id          | int                | Part of PRIMARY KEY (link\_table\_id)   |
| link\_table\_cols        | varchar(100)       | None                                    |
| link\_table\_filter      | text               | None                                    |
| is\_active               | tinyint(1)         | None                                    |
| added\_on                | timestamp          | None                                    |
| updated\_on              | timestamp          | None                                    |
| link\_table\_id\_str     | varchar(200)       | None                                    |
| link\_table\_cols\_str   | varchar(200)       | None                                    |
| link\_table\_filter\_str | varchar(200)       | None                                    |

## Table: `core_onboarding_run_details`


| Column Name          | Data Type            | Index                              |
| -------------------- | -------------------- | ---------------------------------- |
| id                   | int(11)              | Part of PRIMARY KEY (id)           |
| core\_audit\_log\_id | int(11)              | Part of KEY (core\_audit\_log\_id) |
| type                 | varchar(30)          | None                               |
| status               | enum('IN\_PROGRESS', | None                               |
| details              | text                 | None                               |
| created\_at          | timestamp            | None                               |
| updated\_at          | timestamp            | None                               |

## Table: `external_flat_dimension_columns`


| Column Name                           | Data Type                                                                         | Index                               |
| ------------------------------------- | --------------------------------------------------------------------------------- | ----------------------------------- |
| column\_id                            | int                                                                               | Part of PRIMARY KEY (column\_id)    |
| dim\_table\_id                        | int                                                                               | Part of UNIQUE KEY (dim\_table\_id) |
| column\_name                          | varchar(100)                                                                      | Part of KEY (column\_name)          |
| column\_type                          | enum('PK','VALUE','ATTRIBUTE','DATE\_ATTRIBUTE','TIME\_ATTRIBUTE','ALIAS','NONE') | None                                |
| scope\_id                             | int                                                                               | Part of KEY (scope\_id)             |
| is\_active                            | tinyint(1)                                                                        | Part of KEY (is\_active)            |
| data\_type                            | enum('TEXT','NUMBER','BIGNUMBER','BOOLEAN','DATE','TIME')                         | None                                |
| value\_col\_scope                     | enum('CAP','ORG')                                                                 | None                                |
| display\_name                         | text                                                                              | None                                |
| usability\_type                       | enum('DUMP\_ONLY','PARTIAL\_KEY','SELECT','FILTER','GROUP')                       | None                                |
| functional\_dependency\_column        | int                                                                               | None                                |
| unique\_value\_dependent\_column      | int                                                                               | None                                |
| attr\_table\_name                     | varchar(100)                                                                      | None                                |
| is\_attr\_value\_table\_present       | tinyint(1)                                                                        | None                                |
| computation\_type                     | enum('ETL','VIEW')                                                                | None                                |
| location\_table\_type                 | enum('FACT','DIMENSION','VIEW','ATTR')                                            | None                                |
| location\_type\_entity\_id            | int                                                                               | None                                |
| scd\_type                             | enum('NONE','SOURCE\_GENERATED','ETL\_GENERATED','VERSIONED\_PARTITIONS')         | None                                |
| scd\_table\_name                      | varchar(100)                                                                      | None                                |
| column\_id\_str                       | varchar(200)                                                                      | Part of KEY (column\_id\_str)       |
| dim\_table\_id\_str                   | varchar(200)                                                                      | Part of KEY (dim\_table\_id\_str)   |
| functional\_dependency\_column\_str   | varchar(200)                                                                      | None                                |
| unique\_value\_dependent\_column\_str | varchar(200)                                                                      | None                                |
| location\_type\_entity\_id\_str       | varchar(200)                                                                      | None                                |

## Table: `onboarding_run_details`


| Column Name    | Data Type                 | Index                        |
| -------------- | ------------------------- | ---------------------------- |
| id             | int(11)                   | Part of PRIMARY KEY (id)     |
| org\_id        | int(11)                   | Part of KEY (org\_id)        |
| audit\_log\_id | int(11)                   | Part of KEY (audit\_log\_id) |
| type           | enum('INPUT\_VALIDATION', | None                         |
| status         | enum('IN\_PROGRESS',      | None                         |
| details        | text                      | None                         |
| created\_at    | timestamp                 | None                         |
| updated\_at    | timestamp                 | None                         |

## Table: `onboarding_audit_log`


| Column Name       | Data Type                                                                                                                                     | Index                        |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- |
| id                | int(11)                                                                                                                                       | Part of PRIMARY KEY (id)     |
| activity\_details | text                                                                                                                                          | None                         |
| activity\_type    | varchar(200)                                                                                                                                  | Part of KEY (activity\_type) |
| status            | enum('NEW','PROCESSED','VALIDATION\_FAILED','FAILED','PROCESSING','RELEASED','REVERTED','CANCELLED','TAGGED\_TO\_VERSION','VERSION\_ENABLED') | Part of KEY (status)         |
| comment           | text                                                                                                                                          | None                         |
| is\_valid         | tinyint(1)                                                                                                                                    | None                         |
| org\_id           | int(11)                                                                                                                                       | Part of KEY (org\_id)        |
| version\_id       | int                                                                                                                                           | None                         |
| created\_by       | varchar(200)                                                                                                                                  | None                         |
| created\_at       | timestamp                                                                                                                                     | Part of KEY (created\_at)    |
| updated\_at       | timestamp                                                                                                                                     | None                         |

## Table: `kpi_target`


| Column Name           | Data Type    | Index                                      |
| --------------------- | ------------ | ------------------------------------------ |
| id                    | int(11)      | Part of PRIMARY KEY (id)                   |
| name                  | varchar(100) | None                                       |
| description           | text         | None                                       |
| org\_id               | int(11)      | Part of UNIQUE KEY (org\_id)               |
| is\_active            | tinyint(1)   | None                                       |
| kpis                  | varchar(100) | Part of UNIQUE KEY (kpis)                  |
| group\_by\_dimensions | varchar(100) | Part of UNIQUE KEY (group\_by\_dimensions) |
| added\_on             | timestamp    | None                                       |
| updated\_on           | timestamp    | None                                       |
| db\_name              | varchar(100) | None                                       |
| table\_name           | varchar(100) | None                                       |
| is\_target\_set       | tinyint(1)   | None                                       |

## Table: `banding_range`


| Column Name      | Data Type    | Index                           |
| ---------------- | ------------ | ------------------------------- |
| id               | int(11)      | Part of PRIMARY KEY (id)        |
| band\_id         | int(11)      | None                            |
| ordinal\_numbuer | int(11)      | None                            |
| name             | varchar(100) | None                            |
| value            | double       | None                            |
| scope\_id        | int(11)      | Part of PRIMARY KEY (scope\_id) |
| is\_active       | tinyint(1)   | None                            |

## Table: `kpi`


| Column Name  | Data Type    | Index                          |
| ------------ | ------------ | ------------------------------ |
| id           | int(11)      | Part of PRIMARY KEY (id)       |
| kpi\_id      | varchar(100) | Part of UNIQUE KEY (kpi\_id)   |
| name         | varchar(100) | None                           |
| scope\_id    | int(11)      | Part of UNIQUE KEY (scope\_id) |
| added\_on    | timestamp    | None                           |
| is\_additive | tinyint(1)   | None                           |
| updated\_on  | timestamp    | None                           |

## Table: `custom_table`


| Column Name                     | Data Type                                          | Index                    |
| ------------------------------- | -------------------------------------------------- | ------------------------ |
| id                              | int                                                | Part of PRIMARY KEY (id) |
| name                            | varchar(100)                                       | None                     |
| scope\_id                       | int                                                | None                     |
| table\_type                     | enum('CUSTOM\_FIELDS','DIM\_ATTR','FACT\_MEASURE') | None                     |
| sync\_type                      | enum('ETL','EXTERNAL\_SRC')                        | None                     |
| column\_prefix                  | varchar(100)                                       | None                     |
| provider\_table\_id             | int                                                | None                     |
| linked\_table\_id               | int                                                | None                     |
| is\_attr\_table\_required       | tinyint(1)                                         | None                     |
| is\_active                      | tinyint(1)                                         | None                     |
| is\_linked\_table               | tinyint(1)                                         | None                     |
| added\_on                       | timestamp                                          | None                     |
| updated\_on                     | timestamp                                          | None                     |
| provider\_table\_id\_str        | varchar(200)                                       | None                     |
| linked\_table\_id\_str          | varchar(200)                                       | None                     |
| is\_pii\_enabled                | tinyint(1)                                         | None                     |
| derived\_source\_table\_id\_str | VARCHAR(100)                                       | None                     |
| columns\_map\_str               | VARCHAR(50)                                        | None                     |

## Table: `config_key_values`


| Column Name       | Data Type    | Index                            |
| ----------------- | ------------ | -------------------------------- |
| id                | int(11)      | Part of PRIMARY KEY (id)         |
| scope\_id         | int(11)      | Part of UNIQUE KEY (scope\_id)   |
| config\_key       | varchar(100) | Part of UNIQUE KEY (config\_key) |
| config\_value     | varchar(250) | None                             |
| is\_valid         | tinyint(1)   | None                             |
| last\_updated\_on | timestamp    | None                             |

## Table: `custom_field_transformation`


| Column Name                                 | Data Type                | Index                                   |
| ------------------------------------------- | ------------------------ | --------------------------------------- |
| custom\_table\_id                           | int                      | Part of PRIMARY KEY (custom\_table\_id) |
| meta\_src\_table\_id                        | int                      | None                                    |
| meta\_source\_table\_filter\_expr           | text                     | None                                    |
| meta\_src\_join\_tables                     | text                     | None                                    |
| column\_select\_col\_id                     | int                      | None                                    |
| column\_name\_col\_id                       | int                      | None                                    |
| column\_data\_type\_col\_id                 | int                      | None                                    |
| data\_src\_table\_id                        | int                      | None                                    |
| data\_src\_table\_filter\_expr              | text                     | None                                    |
| data\_src\_join\_tables                     | text                     | None                                    |
| data\_src\_table\_primay\_dim\_src\_fk      | int                      | None                                    |
| data\_src\_table\_instance\_id              | int                      | None                                    |
| group\_by\_col                              | int                      | None                                    |
| value\_col\_id                              | int                      | None                                    |
| condition\_col\_id                          | int                      | None                                    |
| is\_condition\_col\_id\_based               | tinyint(1)               | None                                    |
| is\_disabled\_src\_col\_id                  | int                      | None                                    |
| active\_status                              | enum('ACTIVE','DISABLE') | None                                    |
| scope\_id                                   | int                      | None                                    |
| is\_active                                  | tinyint(1)               | None                                    |
| added\_on                                   | timestamp                | None                                    |
| updated\_on                                 | timestamp                | None                                    |
| is\_scope\_filter\_enabled                  | tinyint(1)               | None                                    |
| scope\_filter\_meta\_info                   | text                     | None                                    |
| meta\_src\_table\_id\_str                   | varchar(200)             | None                                    |
| meta\_source\_table\_filter\_expr\_str      | text                     | None                                    |
| meta\_src\_join\_tables\_str                | varchar(200)             | None                                    |
| column\_select\_col\_id\_str                | varchar(200)             | None                                    |
| column\_name\_col\_id\_str                  | varchar(200)             | None                                    |
| column\_data\_type\_col\_id\_str            | varchar(200)             | None                                    |
| data\_src\_table\_id\_str                   | varchar(200)             | None                                    |
| data\_src\_table\_filter\_expr\_str         | varchar(200)             | None                                    |
| data\_src\_join\_tables\_str                | text                     | None                                    |
| data\_src\_table\_primay\_dim\_src\_fk\_str | varchar(200)             | None                                    |
| data\_src\_table\_instance\_id\_str         | varchar(200)             | None                                    |
| group\_by\_col\_str                         | varchar(200)             | None                                    |
| value\_col\_id\_str                         | varchar(200)             | None                                    |
| condition\_col\_id\_str                     | varchar(200)             | None                                    |
| is\_disabled\_src\_col\_id\_str             | varchar(200)             | None                                    |
| scope\_filter\_meta\_info\_str              | text                     | None                                    |

## Table: `core_onboarding_audit_log`


| Column Name            | Data Type                                                                                                                                                                                                                                                                                                                                           | Index                          |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------ |
| id                     | int(11)                                                                                                                                                                                                                                                                                                                                             | Part of PRIMARY KEY (id)       |
| activity\_json         | text                                                                                                                                                                                                                                                                                                                                                | None                           |
| activity\_type         | varchar(200)                                                                                                                                                                                                                                                                                                                                        | Part of KEY (activity\_type)   |
| activity\_status       | enum('NEW','INPUT\_VALIDATION','WORKFLOW\_VALIDATION','VALIDATION\_DONE','PROCESSING','PROCESSED','REVERTED','CANCELLED','RELEASED','VERSION\_CUT','FAILED','TEST\_RELEASE\_STARTED','TEST\_RELEASE\_DONE','TEST\_RELEASE\_FAILED','PROMOTION\_STARTED','PROMOTION\_DONE','PROMOTION\_FAILED','RELEASE\_STARTED','RELEASE\_DONE','RELEASE\_FAILED') | Part of KEY (activity\_status) |
| comment                | text                                                                                                                                                                                                                                                                                                                                                | None                           |
| created\_by            | varchar(200)                                                                                                                                                                                                                                                                                                                                        | Part of KEY (created\_by)      |
| created\_at            | timestamp                                                                                                                                                                                                                                                                                                                                           | None                           |
| updated\_at            | timestamp                                                                                                                                                                                                                                                                                                                                           | None                           |
| version\_id\`int       | NOT                                                                                                                                                                                                                                                                                                                                                 | None                           |
| token\_id\`varchar(40) | DEFAULT                                                                                                                                                                                                                                                                                                                                             | None                           |

## Table: `kpi_merged_data_location`


| Column Name           | Data Type    | Index                                      |
| --------------------- | ------------ | ------------------------------------------ |
| id                    | int(11)      | Part of PRIMARY KEY (id)                   |
| kpi\_id               | int(11)      | Part of UNIQUE KEY (kpi\_id)               |
| group\_by\_dimensions | varchar(100) | Part of UNIQUE KEY (group\_by\_dimensions) |
| location              | tinytext     | None                                       |
| org\_id               | int(11)      | Part of PRIMARY KEY (org\_id)              |
| is\_active            | tinyint(1)   | None                                       |
| updated\_on           | timestamp    | None                                       |

## Table: `temp_confs`


| Column Name | Data Type  | Index                         |
| ----------- | ---------- | ----------------------------- |
| org\_id     | bigint(20) | Part of PRIMARY KEY (org\_id) |
| value       | bigint(20) | None                          |

## Table: `external_dimension_groups`


| Column Name                                 | Data Type                                                                                 | Index                                  |
| ------------------------------------------- | ----------------------------------------------------------------------------------------- | -------------------------------------- |
| column\_id                                  | int(11)                                                                                   | Part of PRIMARY KEY (column\_id)       |
| dim\_table\_id                              | varchar(100)                                                                              | Part of KEY (dim\_table\_id)           |
| dim\_id                                     | varchar(100)                                                                              | None                                   |
| dimension\_name                             | varchar(100)                                                                              | None                                   |
| parent\_attribute                           | varchar(50)                                                                               | Part of UNIQUE KEY (parent\_attribute) |
| parent\_attribute\_type                     | enum('HIERARCHICAL','FLAT')                                                               | None                                   |
| parent\_attribute\_column\_id               | varchar(100)                                                                              | None                                   |
| column\_name                                | varchar(100)                                                                              | Part of UNIQUE KEY (column\_name)      |
| display\_name                               | varchar(100)                                                                              | None                                   |
| column\_type                                | enum('PK','VALUE','LEVEL','DATE\_ATTRIBUTE','TIME\_ATTRIBUTE','ATTRIBUTE','ALIAS','NONE') | None                                   |
| scope\_id                                   | int(11)                                                                                   | Part of KEY (scope\_id)                |
| is\_active                                  | tinyint(1)                                                                                | Part of KEY (is\_active)               |
| is\_deleted                                 | tinyint(1)                                                                                | None                                   |
| data\_type                                  | enum('TEXT','NUMBER','BIGNUMBER','BOOLEAN','DATE','TIME')                                 | None                                   |
| value\_col\_scope                           | enum('CAP','ORG')                                                                         | None                                   |
| usability\_type                             | enum('SELECT','FILTER','GROUP')                                                           | None                                   |
| parent\_functional\_dependency\_column      | int(11)                                                                                   | None                                   |
| last\_updated\_on                           | timestamp                                                                                 | None                                   |
| parent\_functional\_dependency\_column\_str | varchar(200)                                                                              | None                                   |

## Table: `banding`


| Column Name            | Data Type                          | Index                        |
| ---------------------- | ---------------------------------- | ---------------------------- |
| id                     | int                                | Part of PRIMARY KEY (id)     |
| name                   | varchar(100)                       | Part of UNIQUE KEY (name)    |
| dim\_table\_id         | int                                | Part of KEY (dim\_table\_id) |
| column\_id             | int                                | None                         |
| type                   | enum('VALUE','DATE')               | None                         |
| is\_active             | tinyint(1)                         | Part of KEY (is\_active)     |
| scope\_id              | int                                | Part of KEY (scope\_id)      |
| display\_name          | varchar(100)                       | None                         |
| description            | varchar(200)                       | None                         |
| column\_type           | enum('STANDARD','EXTENDED\_FIELD') | None                         |
| custom\_table\_id      | int                                | None                         |
| column\_id\_str        | varchar(200)                       | None                         |
| dim\_table\_id\_str    | varchar(200)                       | None                         |
| custom\_table\_id\_str | varchar(200)                       | None                         |

## Table: `pii_request_log`


| Column Name    | Data Type    | Index                    |
| -------------- | ------------ | ------------------------ |
| id             | INT          | Part of PRIMARY KEY (id) |
| user           | VARCHAR(100) | None                     |
| end\_point     | TEXT         | None                     |
| request\_body  | TEXT         | None                     |
| request\_type  | VARCHAR(20)  | None                     |
| added\_on      | TIMESTAMP    | None                     |
| last\_modified | TIMESTAMP    | None                     |

## Table: `kpi_group_dimension`


| Column Name        | Data Type    | Index                                |
| ------------------ | ------------ | ------------------------------------ |
| id                 | int          | Part of PRIMARY KEY (id)             |
| dimension\_id      | int          | Part of UNIQUE KEY (dimension\_id)   |
| dim\_name          | varchar(100) | None                                 |
| dim\_attr\_name    | varchar(100) | Part of UNIQUE KEY (dim\_attr\_name) |
| scope\_id          | int          | Part of UNIQUE KEY (scope\_id)       |
| added\_on          | timestamp    | None                                 |
| updated\_on        | timestamp    | None                                 |
| dimension\_id\_str | varchar(200) | None                                 |

## Table: `config_keys`


| Column Name                 | Data Type    | Index                    |
| --------------------------- | ------------ | ------------------------ |
| id                          | int          | Part of PRIMARY KEY (id) |
| name                        | varchar(100) | None                     |
| join\_tables                | text         | None                     |
| default\_value              | int          | None                     |
| is\_valid                   | tinyint      | None                     |
| value\_src\_table\_id       | int          | None                     |
| value\_select\_col\_id      | int          | None                     |
| filters                     | text         | None                     |
| join\_tables\_str           | text         | None                     |
| value\_src\_table\_id\_str  | varchar(200) | None                     |
| value\_select\_col\_id\_str | varchar(200) | None                     |
| filters\_str                | text         | None                     |

## Table: `hierarchical_dim_level_updates`


| Column Name      | Data Type                                                                                                                                             | Index                            |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- |
| id               | int(11)                                                                                                                                               | Part of PRIMARY KEY (id)         |
| request\_id      | varchar(100)                                                                                                                                          | Part of UNIQUE KEY (request\_id) |
| dim\_table\_id   | int(11)                                                                                                                                               | None                             |
| dim\_table\_name | varchar(100)                                                                                                                                          | None                             |
| region           | varchar(20)                                                                                                                                           | Part of UNIQUE KEY (region)      |
| levels           | text                                                                                                                                                  | None                             |
| is\_active       | tinyint(1)                                                                                                                                            | None                             |
| status           | enum('PENDING','PROCESSED','ERROR','CANCELLED','RESP\_UPLOADED\_TO\_S3','RESP\_UPLOADED\_FROM\_S3','REQ\_UPLOADED\_TO\_S3','REQ\_UPLOADED\_FROM\_S3') | None                             |
| error            | text                                                                                                                                                  | None                             |
| scope\_id        | int(11)                                                                                                                                               | Part of PRIMARY KEY (scope\_id)  |
| added\_on        | timestamp                                                                                                                                             | None                             |
| updated\_on      | timestamp                                                                                                                                             | None                             |

## Table: `custom_table_column`


| Column Name              | Data Type                                                             | Index                                  |
| ------------------------ | --------------------------------------------------------------------- | -------------------------------------- |
| id                       | int(11)                                                               | Part of PRIMARY KEY (id)               |
| asset\_id                | int(11)                                                               | Part of UNIQUE KEY (asset\_id)         |
| custom\_table\_id        | int(11)                                                               | Part of UNIQUE KEY (custom\_table\_id) |
| column\_name             | varchar(100)                                                          | None                                   |
| display\_name            | varchar(100)                                                          | None                                   |
| transpose\_type          | enum('GROUPING','MAP','TRANSPOSE')                                    | None                                   |
| column\_type             | enum('ATTRIBUTE','MEASURE','PK')                                      | None                                   |
| usability\_type          | enum('DUMP\_ONLY','PARTIAL\_KEY','SELECT','FILTER','GROUP','BANDING') | None                                   |
| ordinal\_position        | int(11)                                                               | None                                   |
| data\_type               | enum('TEXT','NUMBER','BIGNUMBER','BOOLEAN','DATE','TIME')             | None                                   |
| scope\_id                | int(11)                                                               | Part of KEY (scope\_id)                |
| is\_active               | tinyint(1)                                                            | None                                   |
| is\_attr\_table\_present | tinyint(1)                                                            | None                                   |
| attr\_table\_name        | varchar(100)                                                          | None                                   |
| is\_data\_synced         | tinyint(1)                                                            | Part of KEY (is\_data\_synced)         |
| added\_on                | timestamp                                                             | None                                   |
| last\_synced\_on         | timestamp                                                             | None                                   |
| updated\_on              | timestamp                                                             | None                                   |

## Table: `kpi_target_data_location`


| Column Name           | Data Type                                                                    | Index                         |
| --------------------- | ---------------------------------------------------------------------------- | ----------------------------- |
| id                    | int(11)                                                                      | Part of PRIMARY KEY (id)      |
| target\_id            | int(11)                                                                      | None                          |
| location              | varchar(100)                                                                 | None                          |
| uploaded\_by          | varchar(100)                                                                 | None                          |
| range\_operand\_dim   | int(11)                                                                      | None                          |
| range\_start\_value   | varchar(30)                                                                  | None                          |
| range\_end\_value     | varchar(30)                                                                  | None                          |
| upload\_status        | enum('UPLOADED','VALIDATED','REJECTED','SUCCESS','INVALID','MERGED','ERROR') | None                          |
| org\_id               | int(11)                                                                      | Part of PRIMARY KEY (org\_id) |
| is\_active            | tinyint(1)                                                                   | None                          |
| period\_unit\_dim     | int(11)                                                                      | None                          |
| added\_on             | timestamp                                                                    | None                          |
| error\_file\_location | varchar(255)                                                                 | None                          |
| updated\_on           | timestamp                                                                    | None                          |

## Table: `external_dimension_columns`


| Column Name                    | Data Type                                                                         | Index                             |
| ------------------------------ | --------------------------------------------------------------------------------- | --------------------------------- |
| id                             | varchar(200)                                                                      | Part of PRIMARY KEY (id)          |
| dim\_id                        | varchar(100)                                                                      | Part of KEY (dim\_id)             |
| column\_name                   | varchar(100)                                                                      | Part of UNIQUE KEY (column\_name) |
| column\_type                   | enum('PK','VALUE','ATTRIBUTE','DATE\_ATTRIBUTE','TIME\_ATTRIBUTE','ALIAS','NONE') | None                              |
| scope\_id                      | int(11)                                                                           | Part of KEY (scope\_id)           |
| is\_active                     | tinyint(1)                                                                        | Part of KEY (is\_active)          |
| version                        | bigint(20)                                                                        | Part of KEY (version)             |
| data\_type                     | enum('TEXT','NUMBER','BIGNUMBER','BOOLEAN','DATE','TIME')                         | None                              |
| display\_name                  | text                                                                              | None                              |
| usability\_type                | enum('DUMP\_ONLY','PARTIAL\_KEY','SELECT','FILTER','GROUP','BANDING')             | None                              |
| functional\_dependency\_column | varchar(200)                                                                      | None                              |
| added\_on                      | timestamp                                                                         | None                              |

## Table: `ftp_config`


| Column Name   | Data Type    | Index                            |
| ------------- | ------------ | -------------------------------- |
| id            | varchar(120) | Part of PRIMARY KEY (id)         |
| ftp\_server   | varchar(100) | Part of UNIQUE KEY (ftp\_server) |
| ftp\_user     | varchar(20)  | Part of UNIQUE KEY (ftp\_user)   |
| ftp\_password | text         | None                             |
| default\_path | varchar(100) | None                             |
| is\_active    | tinyint(1)   | None                             |
| scope\_id     | int(11)      | Part of UNIQUE KEY (scope\_id)   |
| created\_at   | timestamp    | None                             |
| updated\_at   | timestamp    | None                             |

## Table: `behavioural_event_meta`


| Column Name          | Data Type         | Index                          |
| -------------------- | ----------------- | ------------------------------ |
| id                   | int(11)           | Part of PRIMARY KEY (id)       |
| org\_id              | int(11)           | Part of UNIQUE KEY (org\_id)   |
| event\_id            | varchar(100)      | Part of UNIQUE KEY (event\_id) |
| event\_name          | varchar(200)      | None                           |
| status               | enum('PUBLISHED') | None                           |
| label                | varchar(200)      | None                           |
| description          | text              | None                           |
| date                 | timestamp         | None                           |
| actions              | text              | None                           |
| added\_on            | timestamp         | None                           |
| last\_updated\_on    | timestamp         | None                           |
| event\_catalog\_name | varchar(100)      | None                           |

## Table: `org_details`


| Column Name | Data Type  | Index                         |
| ----------- | ---------- | ----------------------------- |
| org\_id     | int(11)    | Part of PRIMARY KEY (org\_id) |
| be\_enabled | tinyint(1) | None                          |
| added\_on   | timestamp  | None                          |

## Table: `external_dimension`


| Column Name          | Data Type                                                                            | Index                    |
| -------------------- | ------------------------------------------------------------------------------------ | ------------------------ |
| id                   | varchar(100)                                                                         | Part of PRIMARY KEY (id) |
| name                 | varchar(100)                                                                         | Part of KEY (name)       |
| scope\_id            | int(11)                                                                              | Part of KEY (scope\_id)  |
| dim\_type            | enum('STANDARD\_CONSTANT','STANDARD','USER\_DEFINED','SRC\_DEFINED','EXTERNAL\_SRC') | None                     |
| is\_active           | tinyint(1)                                                                           | Part of KEY (is\_active) |
| version              | bigint(20)                                                                           | Part of KEY (version)    |
| is\_large            | tinyint(1)                                                                           | None                     |
| is\_elastic\_indexed | tinyint(4)                                                                           | None                     |
| added\_on            | timestamp                                                                            | None                     |

## Table: `fact_export`


| Column Name  | Data Type    | Index                         |
| ------------ | ------------ | ----------------------------- |
| id           | int(11)      | Part of PRIMARY KEY (id)      |
| org\_id      | int(11)      | Part of PRIMARY KEY (org\_id) |
| fact\_name   | varchar(100) | None                          |
| template\_id | int(11)      | None                          |
| is\_active   | tinyint(1)   | None                          |
| created\_on  | timestamp    | None                          |

## Table: `external_dimension_data_location`


| Column Name           | Data Type    | Index                                 |
| --------------------- | ------------ | ------------------------------------- |
| id                    | varchar(200) | None                                  |
| dimension\_name       | varchar(100) | Part of PRIMARY KEY (dimension\_name) |
| scope\_id             | int(11)      | Part of PRIMARY KEY (scope\_id)       |
| run\_id               | int(11)      | Part of PRIMARY KEY (run\_id)         |
| s3\_path              | text         | None                                  |
| create\_table\_schema | text         | None                                  |
| is\_valid             | tinyint(1)   | None                                  |
| added\_on             | timestamp    | None                                  |

## Table: `behavioural_event_field`


| Column Name       | Data Type    | Index                            |
| ----------------- | ------------ | -------------------------------- |
| id                | int(11)      | Part of PRIMARY KEY (id)         |
| org\_id           | int(11)      | Part of UNIQUE KEY (org\_id)     |
| event\_id         | varchar(100) | Part of UNIQUE KEY (event\_id)   |
| field\_name       | varchar(100) | Part of UNIQUE KEY (field\_name) |
| type              | varchar(100) | None                             |
| attributes\_json  | text         | None                             |
| added\_on         | timestamp    | None                             |
| last\_updated\_on | timestamp    | None                             |

## Table: `fact_ftp_config`


| Column Name     | Data Type    | Index                                |
| --------------- | ------------ | ------------------------------------ |
| id              | varchar(150) | Part of PRIMARY KEY (id)             |
| ftp\_config\_id | varchar(150) | Part of UNIQUE KEY (ftp\_config\_id) |
| fact\_name      | varchar(100) | Part of UNIQUE KEY (fact\_name)      |
| is\_active      | tinyint(1)   | None                                 |
| scope\_id       | int(11)      | Part of UNIQUE KEY (scope\_id)       |
| created\_at     | timestamp    | None                                 |
| updated\_at     | timestamp    | None                                 |

## Table: `external_fact_columns`


| Column Name                  | Data Type                                                                                                                                                                       | Index                           |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------- |
| id                           | varchar(200)                                                                                                                                                                    | Part of PRIMARY KEY (id)        |
| fact\_id                     | varchar(100)                                                                                                                                                                    | Part of UNIQUE KEY (fact\_id)   |
| name                         | varchar(100)                                                                                                                                                                    | Part of UNIQUE KEY (name)       |
| data\_type                   | enum('INT','BIGINT','DOUBLE','TEXT')                                                                                                                                            | None                            |
| ordinal\_position            | int(11)                                                                                                                                                                         | None                            |
| column\_type                 | enum('PK','CONSTANT\_PK','SRC\_MEASURE','COMPUTED\_MEASURE','DIMENSION','COMPUTED\_DIMENSION','FACT\_REFERENCE','PARTITION\_KEY','DUMP\_DATA','ETL\_ONLY\_DIMENSION','DIM\_PK') | None                            |
| is\_active                   | tinyint(1)                                                                                                                                                                      | None                            |
| version                      | bigint(20)                                                                                                                                                                      | None                            |
| scope\_id                    | int(11)                                                                                                                                                                         | Part of PRIMARY KEY (scope\_id) |
| functional\_dependency\_keys | varchar(100)                                                                                                                                                                    | None                            |
| added\_on                    | timestamp                                                                                                                                                                       | None                            |

## Table: `fact_version_vs_run_time`


| Column Name | Data Type    | Index                           |
| ----------- | ------------ | ------------------------------- |
| id          | int(11)      | Part of PRIMARY KEY (id)        |
| fact\_name  | varchar(100) | None                            |
| version     | bigint(20)   | None                            |
| run\_id     | int(11)      | None                            |
| run\_time   | timestamp    | None                            |
| scope\_id   | int(11)      | Part of PRIMARY KEY (scope\_id) |
| is\_valid   | tinyint(1)   | None                            |
| added\_on   | timestamp    | None                            |

## Table: `external_measure_source_column_mapping`


| Column Name          | Data Type    | Index                                     |
| -------------------- | ------------ | ----------------------------------------- |
| id                   | varchar(200) | Part of PRIMARY KEY (id)                  |
| fact\_name           | varchar(100) | Part of KEY (fact\_name)                  |
| fact\_column\_id     | varchar(200) | Part of UNIQUE KEY (fact\_column\_id)     |
| source\_column\_name | varchar(200) | Part of UNIQUE KEY (source\_column\_name) |
| is\_active           | tinyint(1)   | Part of KEY (is\_active)                  |
| version              | bigint(20)   | Part of KEY (version)                     |
| scope\_id            | int(11)      | Part of KEY (scope\_id)                   |
| added\_on            | timestamp    | None                                      |

## Table: `external_dim_link`


| Column Name      | Data Type    | Index                          |
| ---------------- | ------------ | ------------------------------ |
| id               | varchar(200) | Part of UNIQUE KEY (id)        |
| dim\_link\_id    | varchar(100) | None                           |
| name             | varchar(100) | None                           |
| display\_name    | text         | None                           |
| dim\_table\_name | varchar(100) | Part of KEY (dim\_table\_name) |
| scope\_id        | int(11)      | Part of KEY (scope\_id)        |
| is\_active       | tinyint(1)   | Part of KEY (is\_active)       |
| version          | bigint(20)   | None                           |
| added\_on        | timestamp    | None                           |
| description      | varchar(250) | None                           |

## Table: `external_fact_data_location`


| Column Name           | Data Type    | Index                                  |
| --------------------- | ------------ | -------------------------------------- |
| id                    | varchar(200) | None                                   |
| fact\_name            | varchar(100) | Part of PRIMARY KEY (fact\_name)       |
| scope\_id             | int(11)      | Part of PRIMARY KEY (scope\_id)        |
| run\_id               | int(11)      | Part of PRIMARY KEY (run\_id)          |
| s3\_path              | text         | None                                   |
| create\_table\_schema | text         | None                                   |
| is\_valid             | tinyint(1)   | None                                   |
| added\_on             | timestamp    | None                                   |
| is\_full\_run         | tinyint(1)   | None                                   |
| partition\_value      | varchar(150) | Part of PRIMARY KEY (partition\_value) |

## Table: `external_fact_source_detail`


| Column Name         | Data Type    | Index                    |
| ------------------- | ------------ | ------------------------ |
| id                  | int(11)      | Part of PRIMARY KEY (id) |
| fact\_name          | varchar(100) | None                     |
| source\_db\_name    | varchar(255) | None                     |
| source\_table\_name | varchar(255) | None                     |
| scope\_id           | int(11)      | None                     |
| added\_on           | timestamp    | None                     |
| updated\_on         | timestamp    | None                     |

## Table: `external_fact_audit_log`


| Column Name | Data Type                                      | Index                           |
| ----------- | ---------------------------------------------- | ------------------------------- |
| id          | int(11)                                        | Part of PRIMARY KEY (id)        |
| file\_id    | varchar(200)                                   | None                            |
| fact\_name  | varchar(100)                                   | None                            |
| file\_name  | varchar(200)                                   | None                            |
| s3\_path    | text                                           | None                            |
| status      | enum('NEW','PROCESSED','UPDATED','PROCESSING') | None                            |
| created\_by | varchar(200)                                   | None                            |
| is\_valid   | tinyint(1)                                     | None                            |
| scope\_id   | int(11)                                        | Part of PRIMARY KEY (scope\_id) |
| added\_on   | timestamp                                      | None                            |

## Table: `file_template_details`


| Column Name  | Data Type    | Index                             |
| ------------ | ------------ | --------------------------------- |
| template\_id | varchar(200) | Part of UNIQUE KEY (template\_id) |
| file\_name   | varchar(100) | None                              |
| fact\_name   | varchar(100) | None                              |
| template     | text         | None                              |
| added\_on    | timestamp    | None                              |
| scope\_id    | int(11)      | Part of PRIMARY KEY (scope\_id)   |

## Table: `external_fact`


| Column Name           | Data Type                      | Index                        |
| --------------------- | ------------------------------ | ---------------------------- |
| id                    | varchar(100)                   | Part of PRIMARY KEY (id)     |
| scope\_id             | int(11)                        | Part of KEY (scope\_id)      |
| name                  | varchar(100)                   | Part of UNIQUE KEY (name)    |
| definition            | text                           | None                         |
| type                  | enum('INCREMENTAL','SNAPSHOT') | None                         |
| is\_active            | tinyint(1)                     | Part of KEY (is\_active)     |
| version               | bigint(20)                     | Part of UNIQUE KEY (version) |
| primary\_date\_column | varchar(200)                   | None                         |
| source\_type          | enum('HIVE','EXTERNAL')        | None                         |
| added\_on             | timestamp                      | None                         |
| is\_export\_enabled   | tinyint(1)                     | None                         |

## Table: `external_dimension_source_column_mapping`


| Column Name             | Data Type    | Index                    |
| ----------------------- | ------------ | ------------------------ |
| id                      | varchar(200) | Part of PRIMARY KEY (id) |
| fact\_name              | varchar(100) | Part of KEY (fact\_name) |
| dimension\_column\_link | varchar(200) | None                     |
| source\_column\_name    | varchar(200) | None                     |
| is\_active              | tinyint(1)   | Part of KEY (is\_active) |
| version                 | bigint(20)   | Part of KEY (version)    |
| scope\_id               | int(11)      | Part of KEY (scope\_id)  |
| added\_on               | timestamp    | None                     |
| is\_joining\_required   | tinyint(1)   | None                     |
| dim\_table\_name        | varchar(100) | None                     |
| join\_col\_name         | varchar(100) | None                     |
| select\_col\_name       | varchar(100) | None                     |
| formatter\_info         | varchar(200) | None                     |

## Table: `dim_pk_details`


| Column Name     | Data Type   | Index                  |
| --------------- | ----------- | ---------------------- |
| org\_id         | int(11)     | Part of KEY (org\_id)  |
| dim\_table      | varchar(50) | None                   |
| pk\_col         | text        | None                   |
| status          | text        | None                   |
| mismatch        | text        | None                   |
| failure\_values | text        | None                   |
| exec\_id        | int(11)     | Part of KEY (exec\_id) |

## Table: `kpi_failure_details`


| Column Name      | Data Type    | Index |
| ---------------- | ------------ | ----- |
| org\_id          | int(11)      | None  |
| table\_name      | varchar(50)  | None  |
| test\_case\_name | varchar(255) | None  |
| status           | varchar(10)  | None  |
| mismatch         | text         | None  |
| exec\_id         | int(11)      | None  |

## Table: `cdm_failure_details`


| Column Name      | Data Type    | Index |
| ---------------- | ------------ | ----- |
| org\_id          | int(11)      | None  |
| table\_name      | varchar(50)  | None  |
| test\_case\_name | varchar(255) | None  |
| status           | varchar(10)  | None  |
| mismatch         | text         | None  |
| exec\_id         | int(11)      | None  |

## Table: `fact_pk_details`


| Column Name     | Data Type   | Index                  |
| --------------- | ----------- | ---------------------- |
| org\_id         | int(11)     | Part of KEY (org\_id)  |
| fact\_table     | varchar(50) | None                   |
| pk\_col         | text        | None                   |
| status          | text        | None                   |
| mismatch        | text        | None                   |
| failure\_values | text        | None                   |
| exec\_id        | int(11)     | Part of KEY (exec\_id) |

## Table: `kpi_failure_counts`


| Column Name      | Data Type    | Index |
| ---------------- | ------------ | ----- |
| org\_id          | int(11)      | None  |
| test\_case\_name | varchar(255) | None  |
| count            | int(11)      | None  |
| exec\_id         | int(11)      | None  |

## Table: `pk_validation`


| Column Name | Data Type    | Index |
| ----------- | ------------ | ----- |
| db\_name    | varchar(50)  | None  |
| table\_name | varchar(255) | None  |
| status      | text         | None  |
| mismatch    | text         | None  |
| pk\_col     | text         | None  |
| exec\_id    | int(11)      | None  |

## Table: `IF`


| Column Name | Data Type    | Index                     |
| ----------- | ------------ | ------------------------- |
| id          | int(11)      | Part of UNIQUE KEY (id)   |
| uuId        | varchar(250) | Part of UNIQUE KEY (uuId) |
| is\_active  | int(1)       | None                      |

## Table: `nps_score_64_val`


| Column Name | Data Type   | Index                    |
| ----------- | ----------- | ------------------------ |
| id          | bigint(20)  | Part of PRIMARY KEY (id) |
| score       | varchar(20) | None                     |

## Table: `source_val`


| Column Name | Data Type   | Index                    |
| ----------- | ----------- | ------------------------ |
| id          | bigint(20)  | Part of PRIMARY KEY (id) |
| source      | varchar(50) | None                     |

## Table: `slab_change_action_314_val`


| Column Name          | Data Type   | Index                    |
| -------------------- | ----------- | ------------------------ |
| id                   | bigint(20)  | Part of PRIMARY KEY (id) |
| slab\_change\_action | varchar(50) | None                     |

## Table: `credit_usage_val`


| Column Name | Data Type   | Index                    |
| ----------- | ----------- | ------------------------ |
| id          | bigint(20)  | Part of PRIMARY KEY (id) |
| value       | varchar(50) | None                     |

## Table: `nps_score_val`


| Column Name | Data Type   | Index                    |
| ----------- | ----------- | ------------------------ |
| id          | bigint(20)  | Part of PRIMARY KEY (id) |
| score       | varchar(20) | None                     |

## Table: `bill_type_89_val`


| Column Name | Data Type   | Index                    |
| ----------- | ----------- | ------------------------ |
| id          | bigint(20)  | Part of PRIMARY KEY (id) |
| value       | varchar(50) | None                     |

## Table: `points_event_type_val`


| Column Name | Data Type   | Index                    |
| ----------- | ----------- | ------------------------ |
| id          | bigint(20)  | Part of PRIMARY KEY (id) |
| type        | varchar(50) | None                     |

## Table: `nsadmin_priority_36_val`


| Column Name | Data Type   | Index                    |
| ----------- | ----------- | ------------------------ |
| id          | int(11)     | Part of PRIMARY KEY (id) |
| priority    | varchar(50) | None                     |

## Table: `cvp_v2_upper_clothes_texture_208_val`


| Column Name | Data Type   | Index                    |
| ----------- | ----------- | ------------------------ |
| id          | bigint(20)  | Part of PRIMARY KEY (id) |
| value       | varchar(50) | None                     |

## Table: `communication_channel_31_val`


| Column Name    | Data Type    | Index                    |
| -------------- | ------------ | ------------------------ |
| id             | int(11)      | Part of PRIMARY KEY (id) |
| channel        | varchar(50)  | None                     |
| activity\_name | varchar(255) | None                     |

## Table: `found_product_207_val`


| Column Name | Data Type   | Index                    |
| ----------- | ----------- | ------------------------ |
| id          | bigint(20)  | Part of PRIMARY KEY (id) |
| value       | varchar(50) | None                     |

## Table: `fraud_status_val`


| Column Name | Data Type   | Index                    |
| ----------- | ----------- | ------------------------ |
| id          | bigint(20)  | Part of PRIMARY KEY (id) |
| status      | varchar(50) | None                     |

## Table: `mongo_event_name_58_val`


| Column Name | Data Type   | Index                    |
| ----------- | ----------- | ------------------------ |
| id          | bigint(20)  | Part of PRIMARY KEY (id) |
| name        | varchar(50) | None                     |

## Table: `credit_usage_245_val`


| Column Name | Data Type   | Index                    |
| ----------- | ----------- | ------------------------ |
| id          | bigint(20)  | Part of PRIMARY KEY (id) |
| value       | varchar(50) | None                     |

## Table: `cvp_v2_upper_clothes_primary_color_val`


| Column Name | Data Type   | Index                    |
| ----------- | ----------- | ------------------------ |
| id          | bigint(20)  | Part of PRIMARY KEY (id) |
| value       | varchar(50) | None                     |

## Table: `group_type_34_val`


| Column Name | Data Type    | Index                    |
| ----------- | ------------ | ------------------------ |
| id          | int(11)      | Part of PRIMARY KEY (id) |
| type        | varchar(150) | None                     |

## Table: `source_type_val`


| Column Name | Data Type   | Index                    |
| ----------- | ----------- | ------------------------ |
| id          | bigint(20)  | Part of PRIMARY KEY (id) |
| type        | varchar(50) | None                     |

## Table: `entity_type_val`


| Column Name | Data Type   | Index                    |
| ----------- | ----------- | ------------------------ |
| id          | bigint(20)  | Part of PRIMARY KEY (id) |
| type        | varchar(50) | None                     |

## Table: `redeemed_status_22_val`


| Column Name | Data Type   | Index                    |
| ----------- | ----------- | ------------------------ |
| id          | bigint(20)  | Part of PRIMARY KEY (id) |
| status      | varchar(50) | None                     |

## Table: `lead_event_type_val`


| Column Name       | Data Type   | Index                    |
| ----------------- | ----------- | ------------------------ |
| id                | bigint(20)  | Part of PRIMARY KEY (id) |
| lead\_event\_type | varchar(50) | None                     |

## Table: `cvp_v2_lower_clothes_class_val`


| Column Name | Data Type   | Index                    |
| ----------- | ----------- | ------------------------ |
| id          | bigint(20)  | Part of PRIMARY KEY (id) |
| value       | varchar(50) | None                     |

## Table: `campaign_attribution_status_val`


| Column Name | Data Type   | Index                    |
| ----------- | ----------- | ------------------------ |
| id          | int(11)     | Part of PRIMARY KEY (id) |
| value       | varchar(20) | None                     |

## Table: `active_status_103_val`


| Column Name | Data Type   | Index                    |
| ----------- | ----------- | ------------------------ |
| id          | bigint(20)  | Part of PRIMARY KEY (id) |
| value       | varchar(50) | None                     |

## Table: `lead_type_val`


| Column Name | Data Type   | Index                    |
| ----------- | ----------- | ------------------------ |
| id          | bigint(20)  | Part of PRIMARY KEY (id) |
| type        | varchar(50) | None                     |

## Table: `communication_type_30_val`


| Column Name | Data Type   | Index                    |
| ----------- | ----------- | ------------------------ |
| id          | int(11)     | Part of PRIMARY KEY (id) |
| type        | varchar(50) | None                     |

## Table: `points_event_type_16_val`


| Column Name | Data Type   | Index                    |
| ----------- | ----------- | ------------------------ |
| id          | bigint(20)  | Part of PRIMARY KEY (id) |
| type        | varchar(50) | None                     |

## Table: `optin_strategy_257_val`


| Column Name | Data Type   | Index                    |
| ----------- | ----------- | ------------------------ |
| id          | bigint(20)  | Part of PRIMARY KEY (id) |
| value       | varchar(50) | None                     |

## Table: `entry_type_111_val`


| Column Name | Data Type   | Index                    |
| ----------- | ----------- | ------------------------ |
| id          | bigint(20)  | Part of PRIMARY KEY (id) |
| value       | varchar(50) | None                     |

## Table: `reported_by_val`


| Column Name | Data Type   | Index                    |
| ----------- | ----------- | ------------------------ |
| id          | bigint(20)  | Part of PRIMARY KEY (id) |
| value       | varchar(50) | None                     |

## Table: `mongo_event_name_val`


| Column Name | Data Type   | Index                    |
| ----------- | ----------- | ------------------------ |
| id          | bigint(20)  | Part of PRIMARY KEY (id) |
| name        | varchar(50) | None                     |

## Table: `cvp_v2_lower_clothes_texture_val`


| Column Name | Data Type   | Index                    |
| ----------- | ----------- | ------------------------ |
| id          | bigint(20)  | Part of PRIMARY KEY (id) |
| value       | varchar(50) | None                     |

## Table: `ota_issuer_bank_val`


| Column Name | Data Type   | Index                    |
| ----------- | ----------- | ------------------------ |
| id          | int(11)     | Part of PRIMARY KEY (id) |
| value       | varchar(20) | None                     |

## Table: `deduction_type_val`


| Column Name | Data Type   | Index                    |
| ----------- | ----------- | ------------------------ |
| id          | bigint(20)  | Part of PRIMARY KEY (id) |
| type        | varchar(50) | None                     |

## Table: `source_profile_type_193_val`


| Column Name | Data Type   | Index                    |
| ----------- | ----------- | ------------------------ |
| id          | bigint(20)  | Part of PRIMARY KEY (id) |
| type        | varchar(50) | None                     |

## Table: `campaign_delivery_sub_status_val`


| Column Name                       | Data Type    | Index                                 |
| --------------------------------- | ------------ | ------------------------------------- |
| sub\_status\_id                   | bigint(20)   | Part of PRIMARY KEY (sub\_status\_id) |
| veneno\_sub\_status\_label        | varchar(100) | None                                  |
| campaign\_legend\_sub\_status\_id | int(11)      | None                                  |
| campaign\_legend\_sub\_label      | varchar(100) | None                                  |

## Table: `cart_promotion_redemption_type_val`


| Column Name | Data Type   | Index                    |
| ----------- | ----------- | ------------------------ |
| id          | bigint(20)  | Part of PRIMARY KEY (id) |
| type        | varchar(50) | None                     |

## Table: `ndnc_status_29_val`


| Column Name | Data Type   | Index                    |
| ----------- | ----------- | ------------------------ |
| id          | bigint(20)  | Part of PRIMARY KEY (id) |
| status      | varchar(50) | None                     |

## Table: `upgrade_event_type_val`


| Column Name | Data Type    | Index                    |
| ----------- | ------------ | ------------------------ |
| id          | int(11)      | Part of PRIMARY KEY (id) |
| category    | varchar(255) | None                     |
| name        | varchar(255) | None                     |

## Table: `deduction_type_20_val`


| Column Name | Data Type   | Index                    |
| ----------- | ----------- | ------------------------ |
| id          | bigint(20)  | Part of PRIMARY KEY (id) |
| type        | varchar(50) | None                     |

## Table: `day_type_val`


| Column Name | Data Type   | Index                    |
| ----------- | ----------- | ------------------------ |
| id          | int(11)     | Part of PRIMARY KEY (id) |
| type        | varchar(50) | None                     |

## Table: `profile_event_val`


| Column Name | Data Type   | Index                    |
| ----------- | ----------- | ------------------------ |
| id          | bigint(20)  | Part of PRIMARY KEY (id) |
| type        | varchar(50) | None                     |

## Table: `mongo_event_link_type_61_val`


| Column Name | Data Type   | Index                    |
| ----------- | ----------- | ------------------------ |
| id          | bigint(20)  | Part of PRIMARY KEY (id) |
| type        | varchar(50) | None                     |

## Table: `campaign_delivery_sub_status_252_val`


| Column Name                       | Data Type    | Index                                 |
| --------------------------------- | ------------ | ------------------------------------- |
| sub\_status\_id                   | bigint(20)   | Part of PRIMARY KEY (sub\_status\_id) |
| veneno\_sub\_status\_label        | varchar(100) | None                                  |
| campaign\_legend\_sub\_status\_id | int(11)      | None                                  |
| campaign\_legend\_sub\_label      | varchar(100) | None                                  |

## Table: `cart_promotion_activity_type_val`


| Column Name | Data Type   | Index                    |
| ----------- | ----------- | ------------------------ |
| id          | bigint(20)  | Part of PRIMARY KEY (id) |
| type        | varchar(50) | None                     |

## Table: `entity_type_44_val`


| Column Name | Data Type   | Index                    |
| ----------- | ----------- | ------------------------ |
| id          | bigint(20)  | Part of PRIMARY KEY (id) |
| type        | varchar(50) | None                     |

## Table: `date_1_val`


| Column Name         | Data Type   | Index                          |
| ------------------- | ----------- | ------------------------------ |
| date\_id            | bigint(20)  | Part of PRIMARY KEY (date\_id) |
| date                | varchar(63) | Part of UNIQUE KEY (date)      |
| day\_of\_month      | int(11)     | None                           |
| week\_of\_year      | int(11)     | None                           |
| month\_no\_of\_year | int(11)     | None                           |
| month\_of\_year     | varchar(63) | None                           |
| month\_no           | int(11)     | None                           |
| month               | varchar(20) | None                           |
| quarter             | varchar(63) | None                           |
| yearly\_quarter\_no | int(11)     | None                           |
| quarter\_no         | int(11)     | None                           |
| year                | int(11)     | None                           |
| week\_number        | int(11)     | None                           |
| week\_start\_date   | varchar(63) | None                           |
| week\_end\_date     | varchar(63) | None                           |
| day\_of\_week\_no   | int(11)     | None                           |
| day\_of\_week       | varchar(63) | None                           |

## Table: `lead_event_type_121_val`


| Column Name       | Data Type   | Index                    |
| ----------------- | ----------- | ------------------------ |
| id                | bigint(20)  | Part of PRIMARY KEY (id) |
| lead\_event\_type | varchar(50) | None                     |

## Table: `communication_channel_val`


| Column Name    | Data Type    | Index                    |
| -------------- | ------------ | ------------------------ |
| id             | int(11)      | Part of PRIMARY KEY (id) |
| channel        | varchar(50)  | None                     |
| activity\_name | varchar(255) | None                     |

## Table: `leads_status_val`


| Column Name  | Data Type   | Index                    |
| ------------ | ----------- | ------------------------ |
| id           | bigint(20)  | Part of PRIMARY KEY (id) |
| lead\_status | varchar(50) | None                     |

## Table: `lapse_status_val`


| Column Name | Data Type   | Index                    |
| ----------- | ----------- | ------------------------ |
| id          | bigint(20)  | Part of PRIMARY KEY (id) |
| status      | varchar(50) | None                     |

## Table: `ota_active_status_val`


| Column Name | Data Type   | Index                    |
| ----------- | ----------- | ------------------------ |
| id          | int(11)     | Part of PRIMARY KEY (id) |
| value       | varchar(20) | None                     |

## Table: `direction_46_val`


| Column Name | Data Type   | Index                    |
| ----------- | ----------- | ------------------------ |
| id          | bigint(20)  | Part of PRIMARY KEY (id) |
| direction   | varchar(50) | None                     |

## Table: `time_2_val`


| Column Name     | Data Type   | Index                          |
| --------------- | ----------- | ------------------------------ |
| time\_id        | bigint(20)  | Part of PRIMARY KEY (time\_id) |
| time            | varchar(15) | Part of UNIQUE KEY (time)      |
| hour\_of\_day   | int(11)     | None                           |
| minute\_of\_day | int(11)     | None                           |
| day\_shift\_no  | int(11)     | None                           |
| day\_shift      | varchar(20) | None                           |
| hour\_range     | varchar(5)  | None                           |

## Table: `walkin_type_val`


| Column Name | Data Type   | Index                    |
| ----------- | ----------- | ------------------------ |
| id          | bigint(20)  | Part of PRIMARY KEY (id) |
| type        | varchar(50) | None                     |

## Table: `lapse_status_26_val`


| Column Name | Data Type   | Index                    |
| ----------- | ----------- | ------------------------ |
| id          | bigint(20)  | Part of PRIMARY KEY (id) |
| status      | varchar(50) | None                     |

## Table: `loyalty_type_val`


| Column Name | Data Type   | Index                    |
| ----------- | ----------- | ------------------------ |
| id          | bigint(20)  | Part of PRIMARY KEY (id) |
| type        | varchar(50) | None                     |

## Table: `credit_type_162_val`


| Column Name | Data Type   | Index                    |
| ----------- | ----------- | ------------------------ |
| id          | int(11)     | Part of PRIMARY KEY (id) |
| type        | varchar(20) | None                     |

## Table: `cvp_v2_gender_val`


| Column Name | Data Type   | Index                    |
| ----------- | ----------- | ------------------------ |
| id          | bigint(20)  | Part of PRIMARY KEY (id) |
| value       | varchar(50) | None                     |

## Table: `outlier_status_val`


| Column Name | Data Type    | Index                       |
| ----------- | ------------ | --------------------------- |
| id          | bigint(20)   | Part of PRIMARY KEY (id)    |
| status      | varchar(100) | Part of UNIQUE KEY (status) |

## Table: `membership_history_action_313_val`


| Column Name                 | Data Type   | Index                    |
| --------------------------- | ----------- | ------------------------ |
| id                          | bigint(20)  | Part of PRIMARY KEY (id) |
| membership\_history\_action | varchar(50) | None                     |

## Table: `delivery_status_32_val`


| Column Name                | Data Type    | Index                    |
| -------------------------- | ------------ | ------------------------ |
| id                         | bigint(20)   | Part of PRIMARY KEY (id) |
| nsadmin\_delivery\_status  | varchar(100) | None                     |
| campaign\_delivery\_status | varchar(100) | None                     |

## Table: `last_slab_action_val`


| Column Name        | Data Type   | Index                    |
| ------------------ | ----------- | ------------------------ |
| id                 | bigint(20)  | Part of PRIMARY KEY (id) |
| last\_slab\_action | varchar(50) | None                     |

## Table: `fraud_status_23_val`


| Column Name | Data Type   | Index                    |
| ----------- | ----------- | ------------------------ |
| id          | bigint(20)  | Part of PRIMARY KEY (id) |
| status      | varchar(50) | None                     |

## Table: `cart_promotion_activity_type_305_val`


| Column Name | Data Type   | Index                    |
| ----------- | ----------- | ------------------------ |
| id          | bigint(20)  | Part of PRIMARY KEY (id) |
| type        | varchar(50) | None                     |

## Table: `return_type_val`


| Column Name | Data Type   | Index                    |
| ----------- | ----------- | ------------------------ |
| id          | bigint(20)  | Part of PRIMARY KEY (id) |
| type        | varchar(50) | None                     |

## Table: `coupon_redemption_active_val`


| Column Name | Data Type   | Index                    |
| ----------- | ----------- | ------------------------ |
| id          | int(11)     | Part of PRIMARY KEY (id) |
| value       | varchar(20) | None                     |

## Table: `mongo_event_button_type_val`


| Column Name | Data Type   | Index                    |
| ----------- | ----------- | ------------------------ |
| id          | bigint(20)  | Part of PRIMARY KEY (id) |
| type        | varchar(50) | None                     |

## Table: `booking_type_49_val`


| Column Name   | Data Type   | Index                    |
| ------------- | ----------- | ------------------------ |
| id            | bigint(20)  | Part of PRIMARY KEY (id) |
| booking\_type | varchar(50) | None                     |

## Table: `nsadmin_priority_val`


| Column Name | Data Type   | Index                    |
| ----------- | ----------- | ------------------------ |
| id          | int(11)     | Part of PRIMARY KEY (id) |
| priority    | varchar(50) | None                     |

## Table: `cvp_v2_event_type_val`


| Column Name | Data Type   | Index                    |
| ----------- | ----------- | ------------------------ |
| id          | bigint(20)  | Part of PRIMARY KEY (id) |
| value       | varchar(50) | None                     |

## Table: `internal_status_val`


| Column Name | Data Type   | Index                    |
| ----------- | ----------- | ------------------------ |
| id          | bigint(20)  | Part of PRIMARY KEY (id) |
| status      | varchar(50) | None                     |

## Table: `campaign_delivery_status_val`


| Column Name                  | Data Type    | Index                            |
| ---------------------------- | ------------ | -------------------------------- |
| status\_id                   | bigint(20)   | Part of PRIMARY KEY (status\_id) |
| veneno\_status\_label        | varchar(100) | None                             |
| campaign\_legend\_status\_id | int(11)      | None                             |
| campaign\_legend\_lebel      | varchar(100) | None                             |

## Table: `event_message_direction_val`


| Column Name | Data Type   | Index                    |
| ----------- | ----------- | ------------------------ |
| id          | bigint(20)  | Part of PRIMARY KEY (id) |
| type        | varchar(50) | None                     |

## Table: `repeat_status_val`


| Column Name | Data Type    | Index                       |
| ----------- | ------------ | --------------------------- |
| id          | bigint(20)   | Part of PRIMARY KEY (id)    |
| status      | varchar(100) | Part of UNIQUE KEY (status) |

## Table: `mongo_event_button_state_62_val`


| Column Name | Data Type   | Index                    |
| ----------- | ----------- | ------------------------ |
| id          | bigint(20)  | Part of PRIMARY KEY (id) |
| state       | varchar(50) | None                     |

## Table: `leads_status_171_val`


| Column Name  | Data Type   | Index                    |
| ------------ | ----------- | ------------------------ |
| id           | bigint(20)  | Part of PRIMARY KEY (id) |
| lead\_status | varchar(50) | None                     |

## Table: `points_awarded_type_17_val`


| Column Name | Data Type   | Index                    |
| ----------- | ----------- | ------------------------ |
| id          | bigint(20)  | Part of PRIMARY KEY (id) |
| type        | varchar(50) | None                     |

## Table: `merge_status_val`


| Column Name | Data Type   | Index                    |
| ----------- | ----------- | ------------------------ |
| id          | bigint(20)  | Part of PRIMARY KEY (id) |
| status      | varchar(50) | None                     |

## Table: `reported_by_102_val`


| Column Name | Data Type   | Index                    |
| ----------- | ----------- | ------------------------ |
| id          | bigint(20)  | Part of PRIMARY KEY (id) |
| value       | varchar(50) | None                     |

## Table: `time_preference_50_val`


| Column Name | Data Type   | Index                    |
| ----------- | ----------- | ------------------------ |
| id          | int(11)     | Part of PRIMARY KEY (id) |
| type        | varchar(50) | None                     |

## Table: `coupon_issual_type_val`


| Column Name | Data Type   | Index                    |
| ----------- | ----------- | ------------------------ |
| id          | bigint(20)  | Part of PRIMARY KEY (id) |
| type        | varchar(50) | None                     |

## Table: `mongo_event_source_59_val`


| Column Name | Data Type   | Index                    |
| ----------- | ----------- | ------------------------ |
| id          | bigint(20)  | Part of PRIMARY KEY (id) |
| type        | varchar(50) | None                     |

## Table: `event_message_direction_70_val`


| Column Name | Data Type   | Index                    |
| ----------- | ----------- | ------------------------ |
| id          | bigint(20)  | Part of PRIMARY KEY (id) |
| type        | varchar(50) | None                     |

## Table: `registration_state_73_val`


| Column Name | Data Type   | Index                    |
| ----------- | ----------- | ------------------------ |
| id          | bigint(20)  | Part of PRIMARY KEY (id) |
| type        | varchar(50) | None                     |

## Table: `cart_promotion_activation_status_val`


| Column Name | Data Type   | Index                    |
| ----------- | ----------- | ------------------------ |
| id          | bigint(20)  | Part of PRIMARY KEY (id) |
| type        | varchar(50) | None                     |

## Table: `cvp_v2_gender_195_val`


| Column Name | Data Type   | Index                    |
| ----------- | ----------- | ------------------------ |
| id          | bigint(20)  | Part of PRIMARY KEY (id) |
| value       | varchar(50) | None                     |

## Table: `group_type_val`


| Column Name | Data Type    | Index                    |
| ----------- | ------------ | ------------------------ |
| id          | int(11)      | Part of PRIMARY KEY (id) |
| type        | varchar(150) | None                     |

## Table: `cvp_v2_lower_clothes_texture_209_val`


| Column Name | Data Type   | Index                    |
| ----------- | ----------- | ------------------------ |
| id          | bigint(20)  | Part of PRIMARY KEY (id) |
| value       | varchar(50) | None                     |

## Table: `cvp_v2_lower_clothes_primary_color_val`


| Column Name | Data Type   | Index                    |
| ----------- | ----------- | ------------------------ |
| id          | bigint(20)  | Part of PRIMARY KEY (id) |
| value       | varchar(50) | None                     |

## Table: `mongo_event_button_type_60_val`


| Column Name | Data Type   | Index                    |
| ----------- | ----------- | ------------------------ |
| id          | bigint(20)  | Part of PRIMARY KEY (id) |
| type        | varchar(50) | None                     |

## Table: `loyalty_eligibility_val`


| Column Name | Data Type   | Index                    |
| ----------- | ----------- | ------------------------ |
| id          | int(11)     | Part of PRIMARY KEY (id) |
| value       | varchar(20) | None                     |

## Table: `day_type_51_val`


| Column Name | Data Type   | Index                    |
| ----------- | ----------- | ------------------------ |
| id          | int(11)     | Part of PRIMARY KEY (id) |
| type        | varchar(50) | None                     |

## Table: `ota_payment_card_type_val`


| Column Name | Data Type   | Index                    |
| ----------- | ----------- | ------------------------ |
| id          | int(11)     | Part of PRIMARY KEY (id) |
| value       | varchar(20) | None                     |

## Table: `cart_promotion_activation_status_306_val`


| Column Name | Data Type   | Index                    |
| ----------- | ----------- | ------------------------ |
| id          | bigint(20)  | Part of PRIMARY KEY (id) |
| type        | varchar(50) | None                     |

## Table: `unsubscription_status_41_val`


| Column Name | Data Type   | Index                    |
| ----------- | ----------- | ------------------------ |
| id          | int(11)     | Part of PRIMARY KEY (id) |
| status      | varchar(50) | None                     |

## Table: `line_item_type_val`


| Column Name | Data Type   | Index                    |
| ----------- | ----------- | ------------------------ |
| id          | bigint(20)  | Part of PRIMARY KEY (id) |
| type        | varchar(50) | None                     |

## Table: `found_product_val`


| Column Name | Data Type   | Index                    |
| ----------- | ----------- | ------------------------ |
| id          | bigint(20)  | Part of PRIMARY KEY (id) |
| value       | varchar(50) | None                     |

## Table: `outlier_status_6_val`


| Column Name | Data Type    | Index                       |
| ----------- | ------------ | --------------------------- |
| id          | bigint(20)   | Part of PRIMARY KEY (id)    |
| status      | varchar(100) | Part of UNIQUE KEY (status) |

## Table: `points_awarded_type_val`


| Column Name | Data Type   | Index                    |
| ----------- | ----------- | ------------------------ |
| id          | bigint(20)  | Part of PRIMARY KEY (id) |
| type        | varchar(50) | None                     |

## Table: `redeemable_type_69_val`


| Column Name | Data Type   | Index                    |
| ----------- | ----------- | ------------------------ |
| id          | bigint(20)  | Part of PRIMARY KEY (id) |
| type        | varchar(50) | None                     |

## Table: `serial_number_val`


| Column Name | Data Type   | Index                    |
| ----------- | ----------- | ------------------------ |
| id          | int(11)     | Part of PRIMARY KEY (id) |
| value       | varchar(20) | None                     |

## Table: `slab_change_source_val`


| Column Name          | Data Type   | Index                    |
| -------------------- | ----------- | ------------------------ |
| id                   | bigint(20)  | Part of PRIMARY KEY (id) |
| slab\_change\_source | varchar(50) | None                     |

## Table: `time_val`


| Column Name     | Data Type   | Index                          |
| --------------- | ----------- | ------------------------------ |
| time\_id        | bigint(20)  | Part of PRIMARY KEY (time\_id) |
| time            | varchar(15) | Part of UNIQUE KEY (time)      |
| hour\_of\_day   | int(11)     | None                           |
| minute\_of\_day | int(11)     | None                           |
| day\_shift\_no  | int(11)     | None                           |
| day\_shift      | varchar(20) | None                           |
| hour\_range     | varchar(5)  | None                           |

## Table: `return_type_12_val`


| Column Name | Data Type   | Index                    |
| ----------- | ----------- | ------------------------ |
| id          | bigint(20)  | Part of PRIMARY KEY (id) |
| type        | varchar(50) | None                     |

## Table: `issue_type_100_val`


| Column Name | Data Type   | Index                    |
| ----------- | ----------- | ------------------------ |
| id          | bigint(20)  | Part of PRIMARY KEY (id) |
| type        | varchar(50) | None                     |

## Table: `source_profile_type_val`


| Column Name | Data Type   | Index                    |
| ----------- | ----------- | ------------------------ |
| id          | bigint(20)  | Part of PRIMARY KEY (id) |
| type        | varchar(50) | None                     |

## Table: `redemption_type_300_val`


| Column Name      | Data Type   | Index                    |
| ---------------- | ----------- | ------------------------ |
| id               | bigint(20)  | Part of PRIMARY KEY (id) |
| redemption\_type | varchar(50) | None                     |

## Table: `priority_val`


| Column Name | Data Type   | Index                    |
| ----------- | ----------- | ------------------------ |
| id          | bigint(20)  | Part of PRIMARY KEY (id) |
| value       | varchar(50) | None                     |

## Table: `cvp_v2_visitor_type_199_val`


| Column Name | Data Type    | Index                    |
| ----------- | ------------ | ------------------------ |
| id          | bigint(20)   | Part of PRIMARY KEY (id) |
| value       | varchar(50)  | None                     |
| isStaff     | varchar(255) | None                     |

## Table: `mongo_event_link_type_val`


| Column Name | Data Type   | Index                    |
| ----------- | ----------- | ------------------------ |
| id          | bigint(20)  | Part of PRIMARY KEY (id) |
| type        | varchar(50) | None                     |

## Table: `redeemable_type_val`


| Column Name | Data Type   | Index                    |
| ----------- | ----------- | ------------------------ |
| id          | bigint(20)  | Part of PRIMARY KEY (id) |
| type        | varchar(50) | None                     |

## Table: `communication_client_249_val`


| Column Name | Data Type    | Index |
| ----------- | ------------ | ----- |
| name        | varchar(100) | None  |
| description | varchar(250) | None  |

## Table: `experience_val`


| Column Name | Data Type   | Index                    |
| ----------- | ----------- | ------------------------ |
| id          | bigint(20)  | Part of PRIMARY KEY (id) |
| value       | varchar(50) | None                     |

## Table: `active_status_val`


| Column Name | Data Type   | Index                    |
| ----------- | ----------- | ------------------------ |
| id          | bigint(20)  | Part of PRIMARY KEY (id) |
| value       | varchar(50) | None                     |

## Table: `priority_258_val`


| Column Name | Data Type   | Index                    |
| ----------- | ----------- | ------------------------ |
| id          | bigint(20)  | Part of PRIMARY KEY (id) |
| value       | varchar(50) | None                     |

## Table: `time_preference_val`


| Column Name | Data Type   | Index                    |
| ----------- | ----------- | ------------------------ |
| id          | int(11)     | Part of PRIMARY KEY (id) |
| type        | varchar(50) | None                     |

## Table: `credit_type_val`


| Column Name | Data Type   | Index                    |
| ----------- | ----------- | ------------------------ |
| id          | int(11)     | Part of PRIMARY KEY (id) |
| type        | varchar(20) | None                     |

## Table: `membership_history_action_val`


| Column Name                 | Data Type   | Index                    |
| --------------------------- | ----------- | ------------------------ |
| id                          | bigint(20)  | Part of PRIMARY KEY (id) |
| membership\_history\_action | varchar(50) | None                     |

## Table: `optin_status_val`


| Column Name | Data Type   | Index                    |
| ----------- | ----------- | ------------------------ |
| id          | bigint(20)  | Part of PRIMARY KEY (id) |
| status      | varchar(50) | None                     |

## Table: `loyalty_type_11_val`


| Column Name | Data Type   | Index                    |
| ----------- | ----------- | ------------------------ |
| id          | bigint(20)  | Part of PRIMARY KEY (id) |
| type        | varchar(50) | None                     |

## Table: `delayed_delivery_val`


| Column Name | Data Type   | Index                    |
| ----------- | ----------- | ------------------------ |
| id          | bigint(20)  | Part of PRIMARY KEY (id) |
| value       | varchar(50) | None                     |

## Table: `upgrade_event_type_113_val`


| Column Name | Data Type    | Index                    |
| ----------- | ------------ | ------------------------ |
| id          | int(11)      | Part of PRIMARY KEY (id) |
| category    | varchar(255) | None                     |
| name        | varchar(255) | None                     |

## Table: `registration_entity_type_val`


| Column Name | Data Type   | Index                    |
| ----------- | ----------- | ------------------------ |
| id          | bigint(20)  | Part of PRIMARY KEY (id) |
| type        | varchar(50) | None                     |

## Table: `communication_type_val`


| Column Name | Data Type   | Index                    |
| ----------- | ----------- | ------------------------ |
| id          | int(11)     | Part of PRIMARY KEY (id) |
| type        | varchar(50) | None                     |

## Table: `redeemed_status_val`


| Column Name | Data Type   | Index                    |
| ----------- | ----------- | ------------------------ |
| id          | bigint(20)  | Part of PRIMARY KEY (id) |
| status      | varchar(50) | None                     |

## Table: `cvp_v2_upper_clothes_class_val`


| Column Name | Data Type   | Index                    |
| ----------- | ----------- | ------------------------ |
| id          | bigint(20)  | Part of PRIMARY KEY (id) |
| value       | varchar(50) | None                     |

## Table: `cvp_v2_upper_clothes_primary_color_210_val`


| Column Name | Data Type   | Index                    |
| ----------- | ----------- | ------------------------ |
| id          | bigint(20)  | Part of PRIMARY KEY (id) |
| value       | varchar(50) | None                     |

## Table: `source_312_val`


| Column Name | Data Type   | Index                    |
| ----------- | ----------- | ------------------------ |
| id          | bigint(20)  | Part of PRIMARY KEY (id) |
| source      | varchar(50) | None                     |

## Table: `campaign_delivery_status_112_val`


| Column Name                  | Data Type    | Index                            |
| ---------------------------- | ------------ | -------------------------------- |
| status\_id                   | bigint(20)   | Part of PRIMARY KEY (status\_id) |
| veneno\_status\_label        | varchar(100) | None                             |
| campaign\_legend\_status\_id | int(11)      | None                             |
| campaign\_legend\_lebel      | varchar(100) | None                             |

## Table: `unsubscription_status_val`


| Column Name | Data Type   | Index                    |
| ----------- | ----------- | ------------------------ |
| id          | int(11)     | Part of PRIMARY KEY (id) |
| status      | varchar(50) | None                     |

## Table: `optin_strategy_val`


| Column Name | Data Type   | Index                    |
| ----------- | ----------- | ------------------------ |
| id          | bigint(20)  | Part of PRIMARY KEY (id) |
| value       | varchar(50) | None                     |

## Table: `ndnc_status_val`


| Column Name | Data Type   | Index                    |
| ----------- | ----------- | ------------------------ |
| id          | bigint(20)  | Part of PRIMARY KEY (id) |
| status      | varchar(50) | None                     |

## Table: `mongo_event_button_state_val`


| Column Name | Data Type   | Index                    |
| ----------- | ----------- | ------------------------ |
| id          | bigint(20)  | Part of PRIMARY KEY (id) |
| state       | varchar(50) | None                     |

## Table: `credit_event_type_242_val`


| Column Name | Data Type   | Index                    |
| ----------- | ----------- | ------------------------ |
| id          | bigint(20)  | Part of PRIMARY KEY (id) |
| type        | varchar(50) | None                     |

## Table: `delivery_channel_259_val`


| Column Name    | Data Type    | Index                    |
| -------------- | ------------ | ------------------------ |
| id             | int(11)      | Part of PRIMARY KEY (id) |
| channel        | varchar(50)  | None                     |
| activity\_name | varchar(255) | None                     |

## Table: `coupon_issual_type_13_val`


| Column Name | Data Type   | Index                    |
| ----------- | ----------- | ------------------------ |
| id          | bigint(20)  | Part of PRIMARY KEY (id) |
| type        | varchar(50) | None                     |

## Table: `scd_type_val`


| Column Name | Data Type   | Index                    |
| ----------- | ----------- | ------------------------ |
| id          | bigint(20)  | Part of PRIMARY KEY (id) |
| type        | varchar(50) | None                     |

## Table: `order_channel_val`


| Column Name    | Data Type   | Index                    |
| -------------- | ----------- | ------------------------ |
| id             | int(11)     | Part of PRIMARY KEY (id) |
| order\_channel | varchar(50) | None                     |

## Table: `walkin_type_43_val`


| Column Name | Data Type   | Index                    |
| ----------- | ----------- | ------------------------ |
| id          | bigint(20)  | Part of PRIMARY KEY (id) |
| type        | varchar(50) | None                     |

## Table: `repeat_status_7_val`


| Column Name | Data Type    | Index                       |
| ----------- | ------------ | --------------------------- |
| id          | bigint(20)   | Part of PRIMARY KEY (id)    |
| status      | varchar(100) | Part of UNIQUE KEY (status) |

## Table: `lead_type_123_val`


| Column Name | Data Type   | Index                    |
| ----------- | ----------- | ------------------------ |
| id          | bigint(20)  | Part of PRIMARY KEY (id) |
| type        | varchar(50) | None                     |

## Table: `slab_change_action_val`


| Column Name          | Data Type   | Index                    |
| -------------------- | ----------- | ------------------------ |
| id                   | bigint(20)  | Part of PRIMARY KEY (id) |
| slab\_change\_action | varchar(50) | None                     |

## Table: `line_item_type_48_val`


| Column Name | Data Type   | Index                    |
| ----------- | ----------- | ------------------------ |
| id          | bigint(20)  | Part of PRIMARY KEY (id) |
| type        | varchar(50) | None                     |

## Table: `delivery_status_val`


| Column Name                | Data Type    | Index                    |
| -------------------------- | ------------ | ------------------------ |
| id                         | bigint(20)   | Part of PRIMARY KEY (id) |
| nsadmin\_delivery\_status  | varchar(100) | None                     |
| campaign\_delivery\_status | varchar(100) | None                     |

## Table: `direction_val`


| Column Name | Data Type   | Index                    |
| ----------- | ----------- | ------------------------ |
| id          | bigint(20)  | Part of PRIMARY KEY (id) |
| direction   | varchar(50) | None                     |

## Table: `last_slab_action_311_val`


| Column Name        | Data Type   | Index                    |
| ------------------ | ----------- | ------------------------ |
| id                 | bigint(20)  | Part of PRIMARY KEY (id) |
| last\_slab\_action | varchar(50) | None                     |

## Table: `cvp_v2_lower_clothes_class_196_val`


| Column Name | Data Type   | Index                    |
| ----------- | ----------- | ------------------------ |
| id          | bigint(20)  | Part of PRIMARY KEY (id) |
| value       | varchar(50) | None                     |

## Table: `booking_type_val`


| Column Name   | Data Type   | Index                    |
| ------------- | ----------- | ------------------------ |
| id            | bigint(20)  | Part of PRIMARY KEY (id) |
| booking\_type | varchar(50) | None                     |

## Table: `optin_status_28_val`


| Column Name | Data Type   | Index                    |
| ----------- | ----------- | ------------------------ |
| id          | bigint(20)  | Part of PRIMARY KEY (id) |
| status      | varchar(50) | None                     |

## Table: `cvp_v2_lower_clothes_primary_color_211_val`


| Column Name | Data Type   | Index                    |
| ----------- | ----------- | ------------------------ |
| id          | bigint(20)  | Part of PRIMARY KEY (id) |
| value       | varchar(50) | None                     |

## Table: `merge_status_24_val`


| Column Name | Data Type   | Index                    |
| ----------- | ----------- | ------------------------ |
| id          | bigint(20)  | Part of PRIMARY KEY (id) |
| status      | varchar(50) | None                     |

## Table: `cvp_v2_event_type_198_val`


| Column Name | Data Type   | Index                    |
| ----------- | ----------- | ------------------------ |
| id          | bigint(20)  | Part of PRIMARY KEY (id) |
| value       | varchar(50) | None                     |

## Table: `cvp_v2_upper_clothes_class_197_val`


| Column Name | Data Type   | Index                    |
| ----------- | ----------- | ------------------------ |
| id          | bigint(20)  | Part of PRIMARY KEY (id) |
| value       | varchar(50) | None                     |

## Table: `bill_type_val`


| Column Name | Data Type   | Index                    |
| ----------- | ----------- | ------------------------ |
| id          | bigint(20)  | Part of PRIMARY KEY (id) |
| value       | varchar(50) | None                     |

## Table: `internal_status_38_val`


| Column Name | Data Type   | Index                    |
| ----------- | ----------- | ------------------------ |
| id          | bigint(20)  | Part of PRIMARY KEY (id) |
| status      | varchar(50) | None                     |

## Table: `delayed_delivery_212_val`


| Column Name | Data Type   | Index                    |
| ----------- | ----------- | ------------------------ |
| id          | bigint(20)  | Part of PRIMARY KEY (id) |
| value       | varchar(50) | None                     |

## Table: `date_val`


| Column Name         | Data Type   | Index                          |
| ------------------- | ----------- | ------------------------------ |
| date\_id            | bigint(20)  | Part of PRIMARY KEY (date\_id) |
| date                | varchar(63) | Part of UNIQUE KEY (date)      |
| day\_of\_month      | int(11)     | None                           |
| week\_of\_year      | int(11)     | None                           |
| month\_no\_of\_year | int(11)     | None                           |
| month\_of\_year     | varchar(63) | None                           |
| month\_no           | int(11)     | None                           |
| month               | varchar(20) | None                           |
| quarter             | varchar(63) | None                           |
| yearly\_quarter\_no | int(11)     | None                           |
| quarter\_no         | int(11)     | None                           |
| year                | int(11)     | None                           |
| week\_number        | int(11)     | None                           |
| week\_start\_date   | varchar(63) | None                           |
| week\_end\_date     | varchar(63) | None                           |
| day\_of\_week\_no   | int(11)     | None                           |
| day\_of\_week       | varchar(63) | None                           |

## Table: `entry_type_val`


| Column Name | Data Type   | Index                    |
| ----------- | ----------- | ------------------------ |
| id          | bigint(20)  | Part of PRIMARY KEY (id) |
| value       | varchar(50) | None                     |

## Table: `credit_event_type_val`


| Column Name | Data Type   | Index                    |
| ----------- | ----------- | ------------------------ |
| id          | bigint(20)  | Part of PRIMARY KEY (id) |
| type        | varchar(50) | None                     |

## Table: `registration_state_val`


| Column Name | Data Type   | Index                    |
| ----------- | ----------- | ------------------------ |
| id          | bigint(20)  | Part of PRIMARY KEY (id) |
| type        | varchar(50) | None                     |

## Table: `redemption_type_val`


| Column Name      | Data Type   | Index                    |
| ---------------- | ----------- | ------------------------ |
| id               | bigint(20)  | Part of PRIMARY KEY (id) |
| redemption\_type | varchar(50) | None                     |

## Table: `group_size_val`


| Column Name | Data Type   | Index                    |
| ----------- | ----------- | ------------------------ |
| id          | bigint(20)  | Part of PRIMARY KEY (id) |
| value       | varchar(50) | None                     |

## Table: `order_channel_52_val`


| Column Name    | Data Type   | Index                    |
| -------------- | ----------- | ------------------------ |
| id             | int(11)     | Part of PRIMARY KEY (id) |
| order\_channel | varchar(50) | None                     |

## Table: `registration_entity_type_72_val`


| Column Name | Data Type   | Index                    |
| ----------- | ----------- | ------------------------ |
| id          | bigint(20)  | Part of PRIMARY KEY (id) |
| type        | varchar(50) | None                     |

## Table: `membership_type_val`


| Column Name | Data Type   | Index                    |
| ----------- | ----------- | ------------------------ |
| id          | bigint(20)  | Part of PRIMARY KEY (id) |
| type        | varchar(50) | None                     |

## Table: `membership_type_21_val`


| Column Name | Data Type   | Index                    |
| ----------- | ----------- | ------------------------ |
| id          | bigint(20)  | Part of PRIMARY KEY (id) |
| type        | varchar(50) | None                     |

## Table: `delivery_channel_val`


| Column Name    | Data Type    | Index                    |
| -------------- | ------------ | ------------------------ |
| id             | int(11)      | Part of PRIMARY KEY (id) |
| channel        | varchar(50)  | None                     |
| activity\_name | varchar(255) | None                     |

## Table: `cvp_v2_upper_clothes_texture_val`


| Column Name | Data Type   | Index                    |
| ----------- | ----------- | ------------------------ |
| id          | bigint(20)  | Part of PRIMARY KEY (id) |
| value       | varchar(50) | None                     |

## Table: `mongo_event_source_val`


| Column Name | Data Type   | Index                    |
| ----------- | ----------- | ------------------------ |
| id          | bigint(20)  | Part of PRIMARY KEY (id) |
| type        | varchar(50) | None                     |

## Table: `slab_change_source_315_val`


| Column Name          | Data Type   | Index                    |
| -------------------- | ----------- | ------------------------ |
| id                   | bigint(20)  | Part of PRIMARY KEY (id) |
| slab\_change\_source | varchar(50) | None                     |

## Table: `cart_promotion_redemption_type_307_val`


| Column Name | Data Type   | Index                    |
| ----------- | ----------- | ------------------------ |
| id          | bigint(20)  | Part of PRIMARY KEY (id) |
| type        | varchar(50) | None                     |

## Table: `source_type_25_val`


| Column Name | Data Type   | Index                    |
| ----------- | ----------- | ------------------------ |
| id          | bigint(20)  | Part of PRIMARY KEY (id) |
| type        | varchar(50) | None                     |

## Table: `profile_event_53_val`


| Column Name | Data Type   | Index                    |
| ----------- | ----------- | ------------------------ |
| id          | bigint(20)  | Part of PRIMARY KEY (id) |
| type        | varchar(50) | None                     |

## Table: `experience_206_val`


| Column Name | Data Type   | Index                    |
| ----------- | ----------- | ------------------------ |
| id          | bigint(20)  | Part of PRIMARY KEY (id) |
| value       | varchar(50) | None                     |

## Table: `issue_type_val`


| Column Name | Data Type   | Index                    |
| ----------- | ----------- | ------------------------ |
| id          | bigint(20)  | Part of PRIMARY KEY (id) |
| type        | varchar(50) | None                     |

## Table: `communication_client_val`


| Column Name | Data Type    | Index |
| ----------- | ------------ | ----- |
| name        | varchar(100) | None  |
| description | varchar(250) | None  |

## Table: `cvp_v2_visitor_type_val`


| Column Name | Data Type    | Index                    |
| ----------- | ------------ | ------------------------ |
| id          | bigint(20)   | Part of PRIMARY KEY (id) |
| value       | varchar(50)  | None                     |
| isStaff     | varchar(255) | None                     |

## Table: `scd_type_55_val`


| Column Name | Data Type   | Index                    |
| ----------- | ----------- | ------------------------ |
| id          | bigint(20)  | Part of PRIMARY KEY (id) |
| type        | varchar(50) | None                     |

## Table: `ota_txn_status_val`


| Column Name | Data Type   | Index                    |
| ----------- | ----------- | ------------------------ |
| id          | int(11)     | Part of PRIMARY KEY (id) |
| value       | varchar(20) | None                     |

## Table: `group_size_47_val`


| Column Name | Data Type   | Index                    |
| ----------- | ----------- | ------------------------ |
| id          | bigint(20)  | Part of PRIMARY KEY (id) |
| value       | varchar(50) | None                     |

## Table: `fact_etl_data_stats`


| Column Name               | Data Type    | Index                         |
| ------------------------- | ------------ | ----------------------------- |
| id                        | int(11)      | Part of PRIMARY KEY (id)      |
| org\_id                   | int(11)      | Part of PRIMARY KEY (org\_id) |
| fact\_name                | varchar(100) | None                          |
| run\_date                 | date         | None                          |
| min\_event\_date          | date         | None                          |
| assumed\_min\_event\_date | date         | None                          |
| created\_on               | timestamp    | None                          |

## Table: `job_logs`


| Column Name        | Data Type    | Index                    |
| ------------------ | ------------ | ------------------------ |
| id                 | bigint(20)   | Part of PRIMARY KEY (id) |
| job\_id            | bigint(20)   | None                     |
| context            | varchar(100) | None                     |
| context\_begin\_id | bigint(20)   | None                     |
| context\_end\_id   | bigint(20)   | None                     |
| row\_count         | int(11)      | None                     |
| time               | datetime     | None                     |

## Table: `export_profiles`


| Column Name | Data Type    | Index                     |
| ----------- | ------------ | ------------------------- |
| id          | int(11)      | Part of PRIMARY KEY (id)  |
| name        | varchar(100) | Part of UNIQUE KEY (name) |
| type        | varchar(100) | None                      |

## Table: `temp_clean`


| Column Name | Data Type | Index |
| ----------- | --------- | ----- |
| id          | int(11)   | None  |
| org\_id     | int(11)   | None  |

## Table: `jobs`


| Column Name           | Data Type    | Index                         |
| --------------------- | ------------ | ----------------------------- |
| id                    | bigint(20)   | Part of PRIMARY KEY (id)      |
| org\_id               | int(11)      | Part of KEY (org\_id)         |
| name                  | varchar(100) | None                          |
| description           | mediumtext   | None                          |
| request\_details      | longtext     | None                          |
| profile               | varchar(100) | Part of KEY (profile)         |
| source\_type          | varchar(100) | Part of KEY (source\_type)    |
| source\_ref\_id       | int(11)      | Part of KEY (source\_ref\_id) |
| started\_by           | bigint(11)   | None                          |
| status                | varchar(25)  | Part of KEY (status)          |
| start\_time           | datetime     | None                          |
| end\_time             | datetime     | None                          |
| file\_name            | varchar(200) | None                          |
| file\_password        | varchar(100) | None                          |
| file\_service\_handle | varchar(100) | None                          |
| file\_version         | int(11)      | None                          |
| error\_message        | mediumtext   | None                          |
| error\_detail         | longtext     | None                          |
| export\_request\_id   | bigint(20)   | None                          |

## Table: `job_status_logs`


| Column Name           | Data Type    | Index                    |
| --------------------- | ------------ | ------------------------ |
| id                    | bigint(20)   | Part of PRIMARY KEY (id) |
| job\_id               | bigint(20)   | Part of KEY (job\_id)    |
| org\_id               | int(11)      | None                     |
| session\_id           | varchar(100) | None                     |
| source\_ref\_id       | int(11)      | None                     |
| profile\_type         | varchar(100) | None                     |
| event\_type           | varchar(100) | None                     |
| event\_time           | datetime     | None                     |
| current\_used\_memory | bigint(20)   | None                     |
| active\_jobs          | int(10)      | None                     |
| additional\_details   | longtext     | None                     |

## Table: `export_profile_fields`


| Column Name         | Data Type    | Index                             |
| ------------------- | ------------ | --------------------------------- |
| id                  | int(11)      | Part of PRIMARY KEY (id)          |
| export\_profile\_id | int(11)      | Part of KEY (export\_profile\_id) |
| name                | varchar(100) | None                              |
| datatype            | varchar(50)  | None                              |
| datasize            | smallint(6)  | None                              |
| label               | varchar(512) | None                              |
| is\_mandatory       | tinyint(1)   | None                              |
| is\_internal        | tinyint(4)   | None                              |

## Table: `group_export_mapping`


| Column Name         | Data Type  | Index                             |
| ------------------- | ---------- | --------------------------------- |
| id                  | bigint(11) | Part of PRIMARY KEY (id)          |
| org\_id             | bigint(11) | Part of KEY (org\_id)             |
| export\_mapping\_id | bigint(11) | Part of KEY (export\_mapping\_id) |
| campaign\_id        | bigint(11) | None                              |
| group\_id           | bigint(20) | None                              |
| peer\_group\_id     | bigint(20) | None                              |
| count               | bigint(20) | None                              |

## Table: `filter_export_mapping`


| Column Name       | Data Type | Index                      |
| ----------------- | --------- | -------------------------- |
| id                | int(11)   | Part of PRIMARY KEY (id)   |
| org\_id           | int(11)   | Part of KEY (org\_id)      |
| template\_id      | int(11)   | Part of KEY (template\_id) |
| reminder\_id      | int(11)   | None                       |
| last\_updated\_by | int(11)   | None                       |
| last\_updated\_on | datetime  | None                       |

## Table: `scheduler_tasks`


| Column Name       | Data Type                                                          | Index                           |
| ----------------- | ------------------------------------------------------------------ | ------------------------------- |
| id                | int(11)                                                            | Part of PRIMARY KEY (id)        |
| name              | varchar(100)                                                       | None                            |
| org\_id           | int(11)                                                            | Part of KEY (org\_id)           |
| reminder\_id      | varchar(50)                                                        | None                            |
| start\_date       | timestamp                                                          | None                            |
| end\_date         | timestamp                                                          | None                            |
| status            | varchar(20)                                                        | None                            |
| filters           | mediumtext                                                         | None                            |
| created\_by       | int(11)                                                            | None                            |
| last\_updated\_on | timestamp                                                          | Part of KEY (last\_updated\_on) |
| period            | enum('DAILY','WEEKLY','MONTHLY','TILL\_DATE','ONETIME','S3\_SYNC') | None                            |
| additional\_info  | mediumtext                                                         | None                            |

## Table: `templates`


| Column Name       | Data Type    | Index                           |
| ----------------- | ------------ | ------------------------------- |
| id                | int(11)      | Part of PRIMARY KEY (id)        |
| name              | varchar(100) | None                            |
| org\_id           | int(11)      | Part of KEY (org\_id)           |
| profile           | smallint(3)  | Part of KEY (profile)           |
| added\_by         | int(11)      | None                            |
| last\_updated\_on | timestamp    | Part of KEY (last\_updated\_on) |
| filters           | longtext     | None                            |
| columns           | mediumtext   | None                            |
| file\_format      | mediumtext   | None                            |
| is\_valid         | tinyint(1)   | None                            |

## Table: `queued_jobs`


| Column Name          | Data Type                  | Index                             |
| -------------------- | -------------------------- | --------------------------------- |
| id                   | int(11)                    | Part of PRIMARY KEY (id)          |
| org\_id              | int(11)                    | Part of KEY (org\_id)             |
| ref\_id              | int(11)                    | Part of KEY (ref\_id)             |
| scheduler\_task\_id  | int(11)                    | Part of KEY (scheduler\_task\_id) |
| template\_id         | int(11)                    | Part of KEY (template\_id)        |
| profile              | smallint(3)                | None                              |
| queued\_on           | timestamp                  | Part of KEY (queued\_on)          |
| filename             | varchar(200)               | Part of KEY (filename)            |
| execution\_status    | varchar(20)                | None                              |
| fileservice\_handle  | varchar(100)               | None                              |
| fileservice\_version | tinyint(3)                 | None                              |
| ftp\_server\_config  | mediumtext                 | None                              |
| scp\_server\_config  | mediumtext                 | None                              |
| mailing\_list        | mediumtext                 | None                              |
| export\_job\_id      | varchar(50)                | Part of KEY (export\_job\_id)     |
| filters              | longtext                   | None                              |
| columns              | mediumtext                 | None                              |
| file\_format         | mediumtext                 | None                              |
| additional\_details  | mediumtext                 | None                              |
| export\_to           | enum('FTP','EXTERNAL\_S3') | None                              |

## Table: `export_configs`


| Column Name       | Data Type                                                                                                               | Index                     |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------- | ------------------------- |
| id                | int(11)                                                                                                                 | Part of PRIMARY KEY (id)  |
| org\_id           | int(11)                                                                                                                 | Part of KEY (org\_id)     |
| config\_key       | enum('FTP\_SETUP','SCP\_SETUP','EMAIL\_RECEPIENTS','FILE\_NAME\_FORMAT','FILE\_PASSWORD\_PROTECTED','STATIC\_PASSWORD') | Part of KEY (config\_key) |
| ftp\_tag          | varchar(50)                                                                                                             | None                      |
| config\_value     | mediumtext                                                                                                              | None                      |
| added\_by         | int(11)                                                                                                                 | None                      |
| added\_on         | timestamp                                                                                                               | None                      |
| is\_valid         | tinyint(1)                                                                                                              | Part of KEY (is\_valid)   |
| last\_updated\_on | timestamp                                                                                                               | None                      |

## Table: `selection_filter`


| Column Name         | Data Type    | Index                    |
| ------------------- | ------------ | ------------------------ |
| id                  | int(11)      | Part of PRIMARY KEY (id) |
| org\_id             | int(11)      | Part of KEY (org\_id)    |
| filter\_id          | int(11)      | Part of KEY (filter\_id) |
| params              | longtext     | None                     |
| filter\_type        | varchar(100) | None                     |
| filter\_explanation | longtext     | None                     |
| no\_of\_customers   | int(11)      | None                     |
| custom\_ids         | varchar(200) | None                     |

## Table: `template_scheduler_mapping`


| Column Name         | Data Type   | Index                             |
| ------------------- | ----------- | --------------------------------- |
| id                  | int(11)     | Part of PRIMARY KEY (id)          |
| org\_id             | int(11)     | Part of KEY (org\_id)             |
| scheduler\_task\_id | int(11)     | Part of KEY (scheduler\_task\_id) |
| template\_id        | int(11)     | Part of KEY (template\_id)        |
| filters             | longtext    | None                              |
| columns             | mediumtext  | None                              |
| file\_format        | mediumtext  | None                              |
| profile             | smallint(3) | Part of UNIQUE KEY (profile)      |
| is\_active          | tinyint(1)  | None                              |
| updated\_by         | int(11)     | None                              |
| last\_updated\_on   | timestamp   | None                              |

## Table: `export_requests`


| Column Name      | Data Type                  | Index                          |
| ---------------- | -------------------------- | ------------------------------ |
| id               | bigint(20)                 | Part of PRIMARY KEY (id)       |
| org\_id          | int(11)                    | Part of KEY (org\_id)          |
| profile          | varchar(100)               | Part of KEY (profile)          |
| request\_ref\_id | int(11)                    | Part of KEY (request\_ref\_id) |
| source\_type     | varchar(100)               | None                           |
| source\_ref\_id  | int(11)                    | None                           |
| priority         | enum('NORMAL','IMMEDIATE') | None                           |
| fields           | longtext                   | None                           |
| filters          | longtext                   | None                           |
| file\_name       | varchar(200)               | None                           |
| file\_format     | longtext                   | None                           |
| ftp\_config      | longtext                   | None                           |
| scp\_config      | longtext                   | None                           |
| mailing\_list    | mediumtext                 | None                           |

## Table: `test_control_config`


| Column Name        | Data Type    | Index                    |
| ------------------ | ------------ | ------------------------ |
| id                 | int(11)      | Part of PRIMARY KEY (id) |
| org\_id            | int(11)      | None                     |
| name               | varchar(100) | None                     |
| value              | varchar(100) | None                     |
| is\_active         | tinyint(4)   | None                     |
| created\_by        | int(11)      | None                     |
| created\_on        | datetime     | None                     |
| last\_modified\_by | int(11)      | None                     |
| last\_modified\_on | timestamp    | None                     |

## Table: `channel_category_mapping`


| Column Name  | Data Type | Index                     |
| ------------ | --------- | ------------------------- |
| id           | int(11)   | Part of PRIMARY KEY (id)  |
| channel\_id  | int(11)   | Part of KEY (channel\_id) |
| category\_id | int(11)   | None                      |
| created\_by  | int(11)   | None                      |
| updated\_on  | timestamp | None                      |

## Table: `category`


| Column Name | Data Type                                                         | Index                    |
| ----------- | ----------------------------------------------------------------- | ------------------------ |
| id          | int(11)                                                           | Part of PRIMARY KEY (id) |
| type        | enum('SMS','PHONE','EMAIL','WECHAT','HOME\_PAGE','PRODUCT\_PAGE') | None                     |

## Table: `model_type_intent_mapping`


| Column Name     | Data Type | Index                    |
| --------------- | --------- | ------------------------ |
| id              | int(11)   | Part of PRIMARY KEY (id) |
| model\_type\_id | int(11)   | None                     |
| intent\_id      | int(11)   | None                     |
| created\_by     | int(11)   | None                     |
| updated\_on     | timestamp | None                     |

## Table: `channels`


| Column Name | Data Type                               | Index                    |
| ----------- | --------------------------------------- | ------------------------ |
| id          | int(11)                                 | Part of PRIMARY KEY (id) |
| type        | enum('CAMPAIGN','ECOM','INSTORE','EMF') | None                     |

## Table: `intent`


| Column Name | Data Type                     | Index                    |
| ----------- | ----------------------------- | ------------------------ |
| id          | int(11)                       | Part of PRIMARY KEY (id) |
| type        | enum('RECOMMENDED             | None                     |
| test\_type  | enum('USER','ITEM','GENERIC') | None                     |

## Table: `insightTest`


| Column Name             | Data Type                  | Index                    |
| ----------------------- | -------------------------- | ------------------------ |
| id                      | int(11)                    | Part of PRIMARY KEY (id) |
| orgId                   | int(10)                    | None                     |
| level                   | enum('1','2','3')          | None                     |
| level\_name             | enum('Org','Zone','Store') | None                     |
| level\_value            | text                       | None                     |
| zone                    | text                       | None                     |
| KPI                     | text                       | None                     |
| storeId                 | int(10)                    | None                     |
| colourCode              | enum('GREEN','RED')        | None                     |
| insights                | text                       | None                     |
| expectedImpact          | text                       | None                     |
| impactValue             | int(30)                    | None                     |
| based\_on               | text                       | None                     |
| insights\_period        | date                       | None                     |
| last\_updated\_datetime | timestamp                  | None                     |

## Table: `user_permissions`


| Column Name      | Data Type                  | Index                    |
| ---------------- | -------------------------- | ------------------------ |
| id               | int(11)                    | Part of PRIMARY KEY (id) |
| userId           | int(30)                    | None                     |
| userType         | enum('ORG','ZONE','STORE') | None                     |
| zoneRestrictions | text                       | None                     |
| userRestrictions | text                       | None                     |

## Table: `dbs_cluster_config`


| Column Name              | Data Type   | Index                    |
| ------------------------ | ----------- | ------------------------ |
| id                       | int         | Part of PRIMARY KEY (id) |
| cluster\_name            | varchar(50) | None                     |
| scope                    | int         | None                     |
| cluster\_url\_host       | TEXT        | None                     |
| cluster\_url\_port       | int         | None                     |
| encrypted\_access\_token | text        | None                     |
| is\_masking\_cluster     | boolean     | None                     |
| snapshot\_job\_id        | bigint      | None                     |
| aws\_region              | varchar(50) | None                     |
| is\_active               | bool        | None                     |
| added\_on                | TIMESTAMP   | None                     |
| last\_updated\_on        | TIMESTAMP   | None                     |

## Table: `pii_enabled_org`


| Column Name          | Data Type  | Index                        |
| -------------------- | ---------- | ---------------------------- |
| id                   | INT        | Part of PRIMARY KEY (id)     |
| org\_id              | INT        | Part of UNIQUE KEY (org\_id) |
| is\_masking\_enabled | TINYINT(1) | None                         |
| added\_on            | TIMESTAMP  | None                         |
| last\_updated\_on    | TIMESTAMP  | None                         |

## Table: `global_pii_column_config`


| Column Name       | Data Type         | Index                             |
| ----------------- | ----------------- | --------------------------------- |
| id                | INT               | Part of PRIMARY KEY (id)          |
| entity\_type      | ENUM('DIMENSION') | Part of UNIQUE KEY (entity\_type) |
| entity\_name      | VARCHAR(30)       | Part of UNIQUE KEY (entity\_name) |
| column\_name      | VARCHAR(50)       | Part of UNIQUE KEY (column\_name) |
| is\_active        | TINYINT(1)        | None                              |
| is\_masked        | TINYINT(1)        | None                              |
| column\_id\_str   | TEXT              | None                              |
| added\_on         | TIMESTAMP         | None                              |
| last\_updated\_on | TIMESTAMP         | None                              |

## Table: `org_pii_column_config`


| Column Name       | Data Type         | Index                                |
| ----------------- | ----------------- | ------------------------------------ |
| id                | INT               | Part of PRIMARY KEY (id)             |
| scope             | INT               | Part of UNIQUE KEY (scope)           |
| entity\_type      | ENUM('DIMENSION') | Part of UNIQUE KEY (entity\_type)    |
| entity\_name      | VARCHAR(30)       | Part of UNIQUE KEY (entity\_name)    |
| column\_name      | VARCHAR(50)       | Part of UNIQUE KEY (column\_name)    |
| is\_active        | TINYINT(1)        | None                                 |
| is\_masked        | TINYINT(1)        | None                                 |
| column\_id\_str   | VARCHAR(100)      | Part of UNIQUE KEY (column\_id\_str) |
| added\_on         | TIMESTAMP         | None                                 |
| last\_updated\_on | TIMESTAMP         | None                                 |

## Table: `pii_disable_override`


| Column Name       | Data Type  | Index                            |
| ----------------- | ---------- | -------------------------------- |
| id                | INT        | Part of PRIMARY KEY (id)         |
| org\_id           | INT        | Part of UNIQUE KEY (org\_id)     |
| is\_active        | TINYINT(1) | None                             |
| start\_date       | DATE       | Part of UNIQUE KEY (start\_date) |
| end\_date         | DATE       | Part of UNIQUE KEY (end\_date)   |
| added\_on         | TIMESTAMP  | None                             |
| last\_updated\_on | TIMESTAMP  | None                             |

## Table: `archiver_namespace`


| Column Name       | Data Type    | Index                            |
| ----------------- | ------------ | -------------------------------- |
| id                | bigint(20)   | Part of PRIMARY KEY (id)         |
| name\_space       | varchar(120) | Part of UNIQUE KEY (name\_space) |
| added\_on         | timestamp    | None                             |
| last\_updated\_on | timestamp    | None                             |

## Table: `data_location_source`


| Column Name           | Data Type    | Index                    |
| --------------------- | ------------ | ------------------------ |
| id                    | int          | Part of PRIMARY KEY (id) |
| run\_id               | int          | Part of KEY (run\_id)    |
| run\_date             | datetime     | None                     |
| org\_id               | int          | Part of KEY (org\_id)    |
| table\_id             | int          | Part of KEY (table\_id)  |
| table\_name           | varchar(100) | None                     |
| db\_name              | varchar(100) | None                     |
| endpoint\_id          | int          | None                     |
| create\_table\_schema | text         | None                     |
| path                  | text         | None                     |
| is\_valid             | tinyint(1)   | None                     |
| last\_modified        | timestamp    | None                     |
| table\_id\_str        | varchar(200) | None                     |
| end\_point\_id\_str   | varchar(200) | None                     |

## Table: `data_location_custom_table`


| Column Name           | Data Type    | Index                    |
| --------------------- | ------------ | ------------------------ |
| id                    | int(11)      | Part of PRIMARY KEY (id) |
| run\_id               | int(11)      | Part of KEY (run\_id)    |
| version\_id           | int(11)      | None                     |
| run\_date             | datetime     | None                     |
| org\_id               | int(11)      | Part of KEY (org\_id)    |
| table\_id             | int(11)      | Part of KEY (table\_id)  |
| table\_name           | varchar(100) | None                     |
| create\_table\_schema | text         | None                     |
| path                  | text         | None                     |
| is\_valid             | tinyint(1)   | None                     |
| last\_modified        | timestamp    | None                     |

## Table: `data_location_dimension_attr`


| Column Name           | Data Type    | Index                    |
| --------------------- | ------------ | ------------------------ |
| id                    | int          | Part of PRIMARY KEY (id) |
| run\_id               | int          | Part of KEY (run\_id)    |
| run\_date             | datetime     | None                     |
| org\_id               | int          | Part of KEY (org\_id)    |
| table\_id             | int          | Part of KEY (table\_id)  |
| column\_id            | int          | Part of KEY (column\_id) |
| table\_name           | varchar(100) | None                     |
| create\_table\_schema | text         | None                     |
| path                  | text         | None                     |
| is\_valid             | tinyint(1)   | None                     |
| last\_modified        | timestamp    | None                     |
| table\_id\_str        | varchar(200) | None                     |
| column\_id\_str       | varchar(200) | None                     |

## Table: `s3archiver_audit_log`


| Column Name         | Data Type                                               | Index                 |
| ------------------- | ------------------------------------------------------- | --------------------- |
| id                  | int                                                     | Part of KEY (id)      |
| org\_id             | int                                                     | Part of KEY (org\_id) |
| type                | varchar(255)                                            | None                  |
| name                | varchar(255)                                            | None                  |
| status              | ENUM('NEW','SKIPPED','IN\_PROGRESS','SUCCESS','FAILED') | None                  |
| objects\_moved\_cnt | int                                                     | None                  |
| details             | MEDIUMTEXT                                              | None                  |
| created\_on         | datetime                                                | None                  |
| created\_by         | varchar(255)                                            | None                  |
| updated\_on         | datetime                                                | None                  |
| updated\_by         | varchar(255)                                            | None                  |

## Table: `block_table_delta_location`


| Column Name    | Data Type    | Index                    |
| -------------- | ------------ | ------------------------ |
| id             | INT          | Part of PRIMARY KEY (id) |
| org\_id        | INT(11)      | None                     |
| table\_name    | VARCHAR(100) | None                     |
| path           | TEXT         | None                     |
| run\_id        | INT(11)      | None                     |
| is\_full\_run  | TINYINT(1)   | None                     |
| run\_date      | DATETIME     | None                     |
| is\_valid      | TINYINT(1)   | None                     |
| last\_modified | TIMESTAMP    | None                     |

## Table: `data_location_intermediate`


| Column Name           | Data Type    | Index                     |
| --------------------- | ------------ | ------------------------- |
| id                    | int(11)      | Part of PRIMARY KEY (id)  |
| run\_id               | int(11)      | Part of KEY (run\_id)     |
| run\_date             | datetime     | None                      |
| org\_id               | int(11)      | Part of KEY (org\_id)     |
| db\_name              | varchar(60)  | Part of KEY (db\_name)    |
| table\_name           | varchar(100) | Part of KEY (table\_name) |
| create\_table\_schema | blob         | None                      |
| path                  | text         | None                      |
| is\_valid             | tinyint(1)   | None                      |
| last\_modified        | timestamp    | None                      |

## Table: `fact_etl_delta_location`


| Column Name    | Data Type    | Index                    |
| -------------- | ------------ | ------------------------ |
| id             | INT          | Part of PRIMARY KEY (id) |
| org\_id        | INT(11)      | None                     |
| table\_name    | VARCHAR(100) | None                     |
| path           | TEXT         | None                     |
| run\_id        | INT(11)      | None                     |
| is\_full\_run  | TINYINT(1)   | None                     |
| run\_date      | DATETIME     | None                     |
| is\_valid      | TINYINT(1)   | None                     |
| last\_modified | TIMESTAMP    | None                     |

## Table: `archiver_config_key_values`


| Column Name       | Data Type   | Index                     |
| ----------------- | ----------- | ------------------------- |
| id                | int(11)     | Part of PRIMARY KEY (id)  |
| config\_id        | int(20)     | Part of KEY (config\_id)  |
| config\_key       | varchar(30) | Part of KEY (config\_key) |
| config\_value     | varchar(30) | None                      |
| added\_on         | timestamp   | None                      |
| last\_updated\_on | timestamp   | None                      |
| is\_active        | tinyint(1)  | Part of KEY (is\_active)  |

## Table: `archiver_location_info`


| Column Name       | Data Type                                                             | Index                          |
| ----------------- | --------------------------------------------------------------------- | ------------------------------ |
| id                | bigint(20)                                                            | Part of PRIMARY KEY (id)       |
| name\_space\_id   | int(11)                                                               | Part of KEY (name\_space\_id)  |
| file\_identifier  | varchar(150)                                                          | Part of KEY (file\_identifier) |
| s3\_path          | varchar(200)                                                          | Part of KEY (s3\_path)         |
| s3\_bucket        | varchar(50)                                                           | None                           |
| status            | enum('ACTIVE','DELETED','TO\_DELETE','NEW','DELETE\_FAILED','BACKUP') | Part of KEY (status)           |
| added\_on         | timestamp                                                             | None                           |
| last\_updated\_on | timestamp                                                             | None                           |
| invalidated\_on   | timestamp                                                             | None                           |
| deleted\_on       | timestamp                                                             | None                           |
| delete\_run\_id   | varchar(100)                                                          | None                           |
| additional\_info  | text                                                                  | None                           |

## Table: `scd_data_locations`


| Column Name           | Data Type                   | Index                         |
| --------------------- | --------------------------- | ----------------------------- |
| id                    | int                         | Part of PRIMARY KEY (id)      |
| added\_on             | timestamp                   | None                          |
| org\_id               | int                         | Part of KEY (org\_id)         |
| dim\_column\_id       | int                         | Part of KEY (dim\_column\_id) |
| dim\_table\_id        | int                         | Part of KEY (dim\_table\_id)  |
| table\_name           | varchar(100)                | Part of KEY (table\_name)     |
| create\_table\_schema | text                        | None                          |
| path                  | text                        | None                          |
| type                  | enum('VERSION','COMPACTED') | None                          |
| is\_valid             | tinyint(1)                  | Part of KEY (is\_valid)       |
| last\_modified        | timestamp                   | None                          |
| dim\_column\_id\_str  | varchar(200)                | None                          |
| dim\_table\_id\_str   | varchar(200)                | None                          |

## Table: `data_schema_storage`


| Column Name    | Data Type    | Index                           |
| -------------- | ------------ | ------------------------------- |
| id             | int(11)      | Part of PRIMARY KEY (id)        |
| added\_date    | datetime     | None                            |
| name\_space    | varchar(100) | Part of KEY (name\_space)       |
| scope\_id      | int(20)      | Part of PRIMARY KEY (scope\_id) |
| create\_schema | text         | None                            |
| properties     | text         | None                            |
| is\_valid      | tinyint(1)   | None                            |
| updated\_date  | timestamp    | None                            |

## Table: `archiver_location_config`


| Column Name     | Data Type   | Index                                |
| --------------- | ----------- | ------------------------------------ |
| id              | bigint(20)  | Part of PRIMARY KEY (id)             |
| name\_space\_id | bigint(20)  | Part of UNIQUE KEY (name\_space\_id) |
| handler         | varchar(25) | None                                 |
| is\_active      | tinyint(1)  | None                                 |

## Table: `data_location_summary_fact`


| Column Name             | Data Type    | Index                          |
| ----------------------- | ------------ | ------------------------------ |
| id                      | int          | Part of PRIMARY KEY (id)       |
| run\_id                 | int          | None                           |
| is\_full\_run           | tinyint(1)   | None                           |
| run\_date               | datetime     | None                           |
| org\_id                 | int          | Part of KEY (org\_id)          |
| table\_id               | int          | Part of KEY (table\_id)        |
| table\_name             | varchar(100) | None                           |
| partition\_value        | varchar(150) | Part of KEY (partition\_value) |
| type\_partitions\_value | varchar(255) | None                           |
| create\_table\_schema   | text         | None                           |
| path                    | text         | None                           |
| is\_valid               | tinyint(1)   | Part of KEY (is\_valid)        |
| last\_modified          | timestamp    | Part of KEY (last\_modified)   |
| table\_id\_str          | varchar(200) | Part of KEY (table\_id\_str)   |

## Table: `state_table_delta_location`


| Column Name    | Data Type    | Index                    |
| -------------- | ------------ | ------------------------ |
| id             | INT          | Part of PRIMARY KEY (id) |
| org\_id        | INT(11)      | None                     |
| table\_name    | VARCHAR(100) | None                     |
| path           | TEXT         | None                     |
| run\_id        | INT(11)      | None                     |
| is\_full\_run  | TINYINT(1)   | None                     |
| run\_date      | DATETIME     | None                     |
| is\_valid      | TINYINT(1)   | None                     |
| last\_modified | TIMESTAMP    | None                     |

## Table: `data_location_dimension`


| Column Name           | Data Type    | Index                        |
| --------------------- | ------------ | ---------------------------- |
| id                    | int          | Part of PRIMARY KEY (id)     |
| run\_id               | int          | Part of KEY (run\_id)        |
| version\_id           | int          | None                         |
| run\_date             | datetime     | None                         |
| org\_id               | int          | Part of KEY (org\_id)        |
| table\_id             | int          | Part of KEY (table\_id)      |
| table\_name           | varchar(100) | None                         |
| create\_table\_schema | text         | None                         |
| path                  | text         | None                         |
| is\_valid             | tinyint(1)   | Part of KEY (is\_valid)      |
| last\_modified        | timestamp    | Part of KEY (last\_modified) |
| table\_id\_str        | varchar(200) | Part of KEY (table\_id\_str) |

## Table: `data_location_fact`


| Column Name             | Data Type    | Index                          |
| ----------------------- | ------------ | ------------------------------ |
| id                      | int          | Part of PRIMARY KEY (id)       |
| run\_id                 | int          | None                           |
| is\_full\_run           | tinyint(1)   | None                           |
| run\_date               | datetime     | None                           |
| org\_id                 | int          | Part of KEY (org\_id)          |
| table\_id               | int          | Part of KEY (table\_id)        |
| table\_name             | varchar(100) | None                           |
| partition\_value        | varchar(150) | Part of KEY (partition\_value) |
| type\_partitions\_value | varchar(255) | None                           |
| create\_table\_schema   | text         | None                           |
| path                    | text         | None                           |
| is\_valid               | tinyint(1)   | Part of KEY (is\_valid)        |
| last\_modified          | timestamp    | Part of KEY (last\_modified)   |
| table\_id\_str          | varchar(200) | Part of KEY (table\_id\_str)   |

## Table: `inference_meta_table`


| Column Name         | Data Type                                                                                                                                          | Index                    |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------ |
| id                  | int(11)                                                                                                                                            | Part of PRIMARY KEY (id) |
| org\_id             | int(11)                                                                                                                                            | None                     |
| business\_objective | enum('Recommendation')                                                                                                                             | None                     |
| objective           | enum('popular','content\_based','favourite','fbt','trending','cfii','similar','attribute\_based','lightFM','repurchase','product\_recommendation') | None                     |
| creation\_time      | timestamp                                                                                                                                          | None                     |
| req\_id             | int(11)                                                                                                                                            | None                     |

## Table: `model_enabled_status`


| Column Name         | Data Type                                                                                                                                          | Index |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | ----- |
| org\_id             | int(11)                                                                                                                                            | None  |
| models              | varchar(64)                                                                                                                                        | None  |
| business\_objective | enum('Recommendation')                                                                                                                             | None  |
| objective           | enum('popular','content\_based','favourite','fbt','trending','cfii','similar','attribute\_based','lightFM','repurchase','product\_recommendation') | None  |
| is\_enabled         | enum('0','1')                                                                                                                                      | None  |
| last\_updated\_time | timestamp                                                                                                                                          | None  |

## Table: `model_training_logs`


| Column Name                   | Data Type                                                                                                                                          | Index                    |
| ----------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------ |
| id                            | int(11)                                                                                                                                            | Part of PRIMARY KEY (id) |
| org\_id                       | int(11)                                                                                                                                            | Part of KEY (org\_id)    |
| objective                     | enum('popular','content\_based','favourite','fbt','trending','cfii','similar','attribute\_based','lightFM','repurchase','product\_recommendation') | None                     |
| snapshot\_date                | datetime                                                                                                                                           | None                     |
| model\_location               | varchar(256)                                                                                                                                       | None                     |
| attrb\_json                   | varchar(2048)                                                                                                                                      | None                     |
| resultJson                    | varchar(2048)                                                                                                                                      | None                     |
| last\_updated                 | timestamp                                                                                                                                          | None                     |
| start\_time                   | timestamp                                                                                                                                          | None                     |
| end\_time                     | timestamp                                                                                                                                          | None                     |
| status                        | enum('QUEUED','SUBMITTED','EXECUTING','FAILED','SUCCEEDED')                                                                                        | None                     |
| latest\_available\_data\_date | timestamp                                                                                                                                          | None                     |
| model\_name                   | enum('popular','content\_based','favourite','fbt','trending','cfii','similar','attribute\_based','lightFM','repurchase','product\_recommendation') | None                     |
| datagen\_id                   | int(11)                                                                                                                                            | None                     |

## Table: `model_type_properties`


| Column Name  | Data Type   | Index                    |
| ------------ | ----------- | ------------------------ |
| id           | int(11)     | Part of PRIMARY KEY (id) |
| type         | varchar(50) | None                     |
| short\_form  | varchar(50) | None                     |
| acronym      | varchar(50) | None                     |
| label        | varchar(50) | None                     |
| config\_json | text        | None                     |

## Table: `model_results`


| Column Name | Data Type    | Index                    |
| ----------- | ------------ | ------------------------ |
| id          | int(11)      | Part of PRIMARY KEY (id) |
| model\_id   | int(11)      | None                     |
| name        | varchar(100) | None                     |
| value       | varchar(100) | None                     |
| is\_active  | tinyint(1)   | None                     |
| created\_by | int(11)      | None                     |
| created\_on | timestamp    | None                     |

## Table: `model_experiments_table`


| Column Name         | Data Type                                                                                                                                          | Index                         |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------- |
| req\_id             | int(11)                                                                                                                                            | Part of PRIMARY KEY (req\_id) |
| org\_id             | int(11)                                                                                                                                            | None                          |
| business\_objective | enum('Recommendation')                                                                                                                             | None                          |
| objective           | enum('popular','content\_based','favourite','fbt','trending','cfii','similar','attribute\_based','lightFM','repurchase','product\_recommendation') | None                          |
| tuning\_params      | varchar(2048)                                                                                                                                      | None                          |
| model\_weights      | varchar(512)                                                                                                                                       | None                          |
| evaluation\_metrics | varchar(256)                                                                                                                                       | None                          |
| creation\_time      | timestamp                                                                                                                                          | None                          |
| last\_updated\_time | timestamp                                                                                                                                          | None                          |
| start\_time         | timestamp                                                                                                                                          | None                          |
| end\_time           | timestamp                                                                                                                                          | None                          |
| status              | enum('QUEUED','SUCCEEDED','EXECUTING','FAILED')                                                                                                    | None                          |

## Table: `org_configs`


| Column Name         | Data Type                   | Index                         |
| ------------------- | --------------------------- | ----------------------------- |
| org\_id             | int(11)                     | Part of PRIMARY KEY (org\_id) |
| is\_location\_aware | tinyint(1)                  | None                          |
| location\_type      | enum('ZONE','STORE','NONE') | None                          |
| is\_mj              | int(11)                     | None                          |
| data\_source        | varchar(30)                 | None                          |
| is\_active          | tinyint(4)                  | None                          |
| added\_on           | timestamp                   | None                          |

## Table: `model_evaluation_metrics`


| Column Name                 | Data Type     | Index                    |
| --------------------------- | ------------- | ------------------------ |
| id                          | int(11)       | Part of PRIMARY KEY (id) |
| model\_experiment\_logs\_id | int(11)       | None                     |
| transactions\_count         | bigint(20)    | None                     |
| user\_count                 | bigint(20)    | None                     |
| item\_count                 | bigint(20)    | None                     |
| Evaluation\_Map             | varchar(2048) | None                     |

## Table: `model_config`


| Column Name | Data Type    | Index                    |
| ----------- | ------------ | ------------------------ |
| id          | int(11)      | Part of PRIMARY KEY (id) |
| model\_id   | int(11)      | None                     |
| name        | varchar(100) | None                     |
| value       | mediumtext   | None                     |
| is\_active  | tinyint(1)   | None                     |
| created\_by | int(11)      | None                     |
| created\_on | datetime     | None                     |

## Table: `model_scheduler`


| Column Name         | Data Type                  | Index                    |
| ------------------- | -------------------------- | ------------------------ |
| id                  | int(11)                    | Part of PRIMARY KEY (id) |
| org\_id             | int(11)                    | Part of KEY (org\_id)    |
| model\_id           | int(11)                    | None                     |
| action              | enum('PROCESS','ACTIVATE') | None                     |
| repeat\_frequency   | int(11)                    | None                     |
| scheduled\_time     | timestamp                  | None                     |
| last\_processed     | timestamp                  | None                     |
| created\_by         | int(11)                    | None                     |
| created\_on         | datetime                   | None                     |
| is\_active          | int(11)                    | None                     |
| spark\_config\_json | mediumtext                 | None                     |
| model\_type\_id     | int(11)                    | None                     |

## Table: `data_validation_result`


| Column Name | Data Type                       | Index                    |
| ----------- | ------------------------------- | ------------------------ |
| id          | int(11)                         | Part of PRIMARY KEY (id) |
| org\_id     | int(11)                         | None                     |
| model\_id   | int(11)                         | None                     |
| type        | enum('INVENTORY','TRANSACTION') | None                     |
| value       | mediumtext                      | None                     |
| threshold   | double                          | None                     |
| created\_by | int(11)                         | None                     |
| created\_on | timestamp                       | None                     |

## Table: `org_till_mapping`


| Column Name  | Data Type                    | Index                    |
| ------------ | ---------------------------- | ------------------------ |
| id           | int(11)                      | Part of PRIMARY KEY (id) |
| org\_id      | int(11)                      | None                     |
| org\_type    | enum('ECOM','INSTORE','PWA') | None                     |
| till\_filter | enum('ENABLED','DISABLED')   | None                     |
| till\_id     | varchar(200)                 | None                     |

## Table: `runtime_analysis`


| Column Name                    | Data Type   | Index                    |
| ------------------------------ | ----------- | ------------------------ |
| id                             | int(11)     | Part of PRIMARY KEY (id) |
| org\_id                        | int(11)     | None                     |
| model\_id                      | int(11)     | None                     |
| user\_count                    | bigint(20)  | None                     |
| line\_item\_transaction\_count | bigint(20)  | None                     |
| inventory\_count               | bigint(20)  | None                     |
| time\_taken\_in\_mins          | int(11)     | None                     |
| spark\_config\_json            | text        | None                     |
| action                         | varchar(50) | None                     |
| created\_on                    | timestamp   | None                     |

## Table: `db_configs`


| Column Name | Data Type    | Index                        |
| ----------- | ------------ | ---------------------------- |
| id          | int(11)      | Part of PRIMARY KEY (id)     |
| org\_id     | int(11)      | Part of UNIQUE KEY (org\_id) |
| shard\_name | varchar(3)   | None                         |
| dbase       | varchar(100) | None                         |

## Table: `modeltype_sparkconfig_mapping`


| Column Name     | Data Type    | Index                    |
| --------------- | ------------ | ------------------------ |
| id              | int(11)      | Part of PRIMARY KEY (id) |
| model\_type\_id | int(11)      | None                     |
| name            | varchar(100) | None                     |
| value           | varchar(100) | None                     |
| is\_active      | tinyint(1)   | None                     |
| created\_on     | datetime     | None                     |
| modified\_on    | timestamp    | None                     |

## Table: `data_generation_for_ml`


| Column Name       | Data Type                                       | Index                    |
| ----------------- | ----------------------------------------------- | ------------------------ |
| id                | int(11)                                         | Part of PRIMARY KEY (id) |
| org\_id           | int(20)                                         | None                     |
| model             | enum('Transactions','TransactionsNProducts')    | None                     |
| updated\_datetime | timestamp                                       | None                     |
| attrib\_json      | varchar(1000)                                   | None                     |
| start\_time       | timestamp                                       | None                     |
| end\_time         | timestamp                                       | None                     |
| path              | varchar(1024)                                   | None                     |
| status            | enum('QUEUED','EXECUTING','SUCCEEDED','FAILED') | None                     |

## Table: `model`


| Column Name        | Data Type           | Index                     |
| ------------------ | ------------------- | ------------------------- |
| id                 | int(11)             | Part of PRIMARY KEY (id)  |
| guid               | varchar(50)         | Part of UNIQUE KEY (guid) |
| entity\_id         | varchar(50)         | None                      |
| model\_group       | varchar(50)         | None                      |
| org\_id            | int(11)             | None                      |
| name               | varchar(255)        | None                      |
| description        | varchar(255)        | None                      |
| model\_type\_id    | int(11)             | None                      |
| score\_table\_name | varchar(500)        | None                      |
| model\_path        | varchar(500)        | None                      |
| active\_db         | enum('RED','BLACK') | None                      |
| is\_processed      | tinyint(1)          | None                      |
| is\_active         | tinyint(1)          | None                      |
| is\_deleted        | tinyint(4)          | None                      |
| parent\_id         | int(11)             | None                      |
| created\_by        | int(11)             | None                      |
| created\_on        | datetime            | None                      |
| last\_modified\_on | timestamp           | None                      |
| last\_modified\_by | int(11)             | None                      |

## Table: `score_table_status`


| Column Name        | Data Type                                   | Index                    |
| ------------------ | ------------------------------------------- | ------------------------ |
| id                 | int(11)                                     | Part of PRIMARY KEY (id) |
| org\_id            | int(11)                                     | None                     |
| model\_id          | int(11)                                     | None                     |
| model\_type\_id    | int(11)                                     | None                     |
| score\_table       | varchar(100)                                | None                     |
| approved\_status   | enum('NOT\_APPROVED','APPROVED','RELEASED') | None                     |
| year\_month        | varchar(20)                                 | None                     |
| created\_by        | int(11)                                     | None                     |
| created\_on        | datetime                                    | None                     |
| last\_modified\_by | int(11)                                     | None                     |
| last\_modified\_on | timestamp                                   | None                     |

## Table: `reload_config_request`


| Column Name   | Data Type  | Index                    |
| ------------- | ---------- | ------------------------ |
| id            | int(11)    | Part of PRIMARY KEY (id) |
| org\_id       | int(11)    | None                     |
| is\_active    | tinyint(1) | None                     |
| is\_processed | tinyint(1) | None                     |
| is\_forced    | tinyint(1) | None                     |
| created\_on   | timestamp  | None                     |
| created\_by   | int(11)    | None                     |