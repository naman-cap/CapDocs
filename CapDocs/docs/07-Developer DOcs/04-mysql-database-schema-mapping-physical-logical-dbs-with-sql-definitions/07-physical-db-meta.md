---
title: 'Physical DB: meta'
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
| Logical DB                     | Tables                                                     | Path for query                                                                  |
| ------------------------------ | ---------------------------------------------------------- | ------------------------------------------------------------------------------- |
| api\_gateway\_webhooks         | org\_endpoint\_details.sql                                 | meta.api\_gateway\_webhooks.org\_endpoint\_details                              |
| api\_gateway\_webhooks         | hmac\_auth\_details.sql                                    | meta.api\_gateway\_webhooks.hmac\_auth\_details                                 |
| filters                        | spark\_org\_status\_mapping.sql                            | meta.filters.spark\_org\_status\_mapping                                        |
| filters                        | spark\_org\_voucher\_status\_mapping.sql                   | meta.filters.spark\_org\_voucher\_status\_mapping                               |
| filters                        | filter\_queries.sql                                        | meta.filters.filter\_queries                                                    |
| filters                        | spark\_org\_segment\_status\_mapping.sql                   | meta.filters.spark\_org\_segment\_status\_mapping                               |
| extended\_fields\_custom\_data | extended\_fields\_values.sql                               | meta.extended\_fields\_custom\_data.extended\_fields\_values                    |
| extended\_fields\_custom\_data | language\_support\_ef\_values.sql                          | meta.extended\_fields\_custom\_data.language\_support\_ef\_values               |
| api\_gateway\_extensions       | client\_credentials.sql                                    | meta.api\_gateway\_extensions.client\_credentials                               |
| api\_gateway\_extensions       | header\_overrides.sql                                      | meta.api\_gateway\_extensions.header\_overrides                                 |
| api\_gateway\_extensions       | prefix\_service\_mapping.sql                               | meta.api\_gateway\_extensions.prefix\_service\_mapping                          |
| Temp                           | meta\_test\_temp\_table.sql                                | meta.Temp.meta\_test\_temp\_table                                               |
| api\_testing                   | tenant.sql                                                 | meta.api\_testing.tenant                                                        |
| api\_testing                   | django\_content\_type.sql                                  | meta.api\_testing.django\_content\_type                                         |
| api\_testing                   | social\_auth\_partial.sql                                  | meta.api\_testing.social\_auth\_partial                                         |
| api\_testing                   | auth\_user.sql                                             | meta.api\_testing.auth\_user                                                    |
| api\_testing                   | apitest\_app\_gatewaytest.sql                              | meta.api\_testing.apitest\_app\_gatewaytest                                     |
| api\_testing                   | social\_auth\_code.sql                                     | meta.api\_testing.social\_auth\_code                                            |
| api\_testing                   | django\_session.sql                                        | meta.api\_testing.django\_session                                               |
| api\_testing                   | social\_auth\_association.sql                              | meta.api\_testing.social\_auth\_association                                     |
| api\_testing                   | extensions\_deployment\_metadata.sql                       | meta.api\_testing.extensions\_deployment\_metadata                              |
| api\_testing                   | apitest\_app\_errorcodes.sql                               | meta.api\_testing.apitest\_app\_errorcodes                                      |
| api\_testing                   | django\_migrations.sql                                     | meta.api\_testing.django\_migrations                                            |
| api\_testing                   | extensions\_deployment.sql                                 | meta.api\_testing.extensions\_deployment                                        |
| api\_testing                   | extensions\_metrics\_org\_dashboards.sql                   | meta.api\_testing.extensions\_metrics\_org\_dashboards                          |
| api\_testing                   | apitest\_app\_import.sql                                   | meta.api\_testing.apitest\_app\_import                                          |
| api\_testing                   | apitest\_app\_testdata.sql                                 | meta.api\_testing.apitest\_app\_testdata                                        |
| api\_testing                   | mongo\_audit\_logs.sql                                     | meta.api\_testing.mongo\_audit\_logs                                            |
| api\_testing                   | countries.sql                                              | meta.api\_testing.countries                                                     |
| api\_testing                   | webhook\_data.sql                                          | meta.api\_testing.webhook\_data                                                 |
| api\_testing                   | apitest\_app\_mappingstatus.sql                            | meta.api\_testing.apitest\_app\_mappingstatus                                   |
| api\_testing                   | apitest\_app\_report.sql                                   | meta.api\_testing.apitest\_app\_report                                          |
| api\_testing                   | apitest\_app\_session.sql                                  | meta.api\_testing.apitest\_app\_session                                         |
| api\_testing                   | auth\_group.sql                                            | meta.api\_testing.auth\_group                                                   |
| api\_testing                   | config\_requests.sql                                       | meta.api\_testing.config\_requests                                              |
| api\_testing                   | apitest\_app\_customerdata.sql                             | meta.api\_testing.apitest\_app\_customerdata                                    |
| api\_testing                   | extensions\_metrics.sql                                    | meta.api\_testing.extensions\_metrics                                           |
| api\_testing                   | apitest\_app\_testcase.sql                                 | meta.api\_testing.apitest\_app\_testcase                                        |
| api\_testing                   | apitest\_app\_autoorgdetails.sql                           | meta.api\_testing.apitest\_app\_autoorgdetails                                  |
| api\_testing                   | social\_auth\_nonce.sql                                    | meta.api\_testing.social\_auth\_nonce                                           |
| api\_testing                   | config.sql                                                 | meta.api\_testing.config                                                        |
| client\_metadetails            | client\_versions.sql                                       | meta.client\_metadetails.client\_versions                                       |
| client\_metadetails            | thin\_client\_version\_mapping.sql                         | meta.client\_metadetails.thin\_client\_version\_mapping                         |
| client\_metadetails            | client\_version\_mapping.sql                               | meta.client\_metadetails.client\_version\_mapping                               |
| instore\_ai\_devices           | device\_details.sql                                        | meta.instore\_ai\_devices.device\_details                                       |
| instore\_ai\_devices           | accessories\_details.sql                                   | meta.instore\_ai\_devices.accessories\_details                                  |
| instore\_ai\_devices           | installation\_details.sql                                  | meta.instore\_ai\_devices.installation\_details                                 |
| instore\_ai\_devices           | post\_installation\_details.sql                            | meta.instore\_ai\_devices.post\_installation\_details                           |
| instore\_ai\_devices           | device\_registration\_meta.sql                             | meta.instore\_ai\_devices.device\_registration\_meta                            |
| instore\_ai\_devices           | entrance\_details.sql                                      | meta.instore\_ai\_devices.entrance\_details                                     |
| instore\_ai\_devices           | whitelisted\_network.sql                                   | meta.instore\_ai\_devices.whitelisted\_network                                  |
| internationalization           | multi\_language\_fields.sql                                | meta.internationalization.multi\_language\_fields                               |
| internationalization           | multi\_language\_modules.sql                               | meta.internationalization.multi\_language\_modules                              |
| internationalization           | multi\_language\_entities.sql                              | meta.internationalization.multi\_language\_entities                             |
| internationalization           | multi\_language\_custom\_fields.sql                        | meta.internationalization.multi\_language\_custom\_fields                       |
| Logical DB                     | Tables                                                     | Path for query                                                                  |
| oauth                          | scope\_entities.sql                                        | meta.oauth.scope\_entities                                                      |
| oauth                          | integration\_client\_scope\_mapping.sql                    | meta.oauth.integration\_client\_scope\_mapping                                  |
| oauth                          | integration\_clients.sql                                   | meta.oauth.integration\_clients                                                 |
| oauth                          | scope\_entity\_resource\_mapping.sql                       | meta.oauth.scope\_entity\_resource\_mapping                                     |
| oauth                          | config\_key\_values.sql                                    | meta.oauth.config\_key\_values                                                  |
| oauth                          | jwk\_keys.sql                                              | meta.oauth.jwk\_keys                                                            |
| oauth                          | config\_keys.sql                                           | meta.oauth.config\_keys                                                         |
| facebook\_meta                 | org\_blocks.sql                                            | meta.facebook\_meta.org\_blocks                                                 |
| facebook\_meta                 | display\_images.sql                                        | meta.facebook\_meta.display\_images                                             |
| facebook\_meta                 | org\_actions.sql                                           | meta.facebook\_meta.org\_actions                                                |
| facebook\_meta                 | button\_types.sql                                          | meta.facebook\_meta.button\_types                                               |
| facebook\_meta                 | actions.sql                                                | meta.facebook\_meta.actions                                                     |
| facebook\_meta                 | default\_messages.sql                                      | meta.facebook\_meta.default\_messages                                           |
| facebook\_meta                 | template\_types.sql                                        | meta.facebook\_meta.template\_types                                             |
| retail\_insights               | custom\_dimension\_values.sql                              | meta.retail\_insights.custom\_dimension\_values                                 |
| retail\_insights               | date.sql                                                   | meta.retail\_insights.date                                                      |
| retail\_insights               | custom\_dimension\_insights\_hierarchy.sql                 | meta.retail\_insights.custom\_dimension\_insights\_hierarchy                    |
| retail\_insights               | custom\_dimensions.sql                                     | meta.retail\_insights.custom\_dimensions                                        |
| retail\_insights               | target\_data.sql                                           | meta.retail\_insights.target\_data                                              |
| filters\_automation            | filter.sql                                                 | meta.filters\_automation.filter                                                 |
| filters\_automation            | filter\_info.sql                                           | meta.filters\_automation.filter\_info                                           |
| filters\_automation            | field\_properties.sql                                      | meta.filters\_automation.field\_properties                                      |
| filters\_automation            | form\_parts.sql                                            | meta.filters\_automation.form\_parts                                            |
| filters\_automation            | filter\_properties.sql                                     | meta.filters\_automation.filter\_properties                                     |
| filters\_automation            | filter\_execution.sql                                      | meta.filters\_automation.filter\_execution                                      |
| segmentation\_engine           | org\_configs.sql                                           | meta.segmentation\_engine.org\_configs                                          |
| validation\_suite              | vs\_kpis\_sqls.sql                                         | meta.validation\_suite.vs\_kpis\_sqls                                           |
| registrar                      | org\_migration\_info.sql                                   | meta.registrar.org\_migration\_info                                             |
| registrar                      | organizations.sql                                          | meta.registrar.organizations                                                    |
| registrar                      | membercare\_requests.sql                                   | meta.registrar.membercare\_requests                                             |
| registrar                      | campaigns.sql                                              | meta.registrar.campaigns                                                        |
| registrar                      | associates.sql                                             | meta.registrar.associates                                                       |
| registrar                      | programs.sql                                               | meta.registrar.programs                                                         |
| registrar                      | entities.sql                                               | meta.registrar.entities                                                         |
| registrar                      | audience\_groups.sql                                       | meta.registrar.audience\_groups                                                 |
| api\_gateway                   | whitelist\_apis.sql                                        | meta.api\_gateway.whitelist\_apis                                               |
| api\_gateway                   | header\_overrides.sql                                      | meta.api\_gateway.header\_overrides                                             |
| api\_gateway                   | prefix\_service\_mapping.sql                               | meta.api\_gateway.prefix\_service\_mapping                                      |
| Logical DB                     | Tables                                                     | Path for query                                                                  |
| subscription\_management       | merge\_customer\_summary.sql                               | meta.subscription\_management.merge\_customer\_summary                          |
| subscription\_management       | subscription\_import\_files\_history.sql                   | meta.subscription\_management.subscription\_import\_files\_history              |
| subscription\_management       | supported\_tags.sql                                        | meta.subscription\_management.supported\_tags                                   |
| subscription\_management       | users\_govt\_status\_log.sql                               | meta.subscription\_management.users\_govt\_status\_log                          |
| subscription\_management       | gateway\_param\_values.sql                                 | meta.subscription\_management.gateway\_param\_values                            |
| subscription\_management       | nsadmin\_skipped\_logs.sql                                 | meta.subscription\_management.nsadmin\_skipped\_logs                            |
| subscription\_management       | email\_params.sql                                          | meta.subscription\_management.email\_params                                     |
| subscription\_management       | merge\_status\_log.sql                                     | meta.subscription\_management.merge\_status\_log                                |
| subscription\_management       | user\_feedback.sql                                         | meta.subscription\_management.user\_feedback                                    |
| subscription\_management       | users\_external\_status.sql                                | meta.subscription\_management.users\_external\_status                           |
| subscription\_management       | users\_govt\_status.sql                                    | meta.subscription\_management.users\_govt\_status                               |
| subscription\_management       | nsadmin\_communication\_logs.sql                           | meta.subscription\_management.nsadmin\_communication\_logs                      |
| subscription\_management       | rule\_param\_mappings.sql                                  | meta.subscription\_management.rule\_param\_mappings                             |
| subscription\_management       | subscription\_services.sql                                 | meta.subscription\_management.subscription\_services                            |
| subscription\_management       | campaign\_veneno\_tracker.sql                              | meta.subscription\_management.campaign\_veneno\_tracker                         |
| subscription\_management       | subscription\_rules\_history.sql                           | meta.subscription\_management.subscription\_rules\_history                      |
| subscription\_management       | sms\_params.sql                                            | meta.subscription\_management.sms\_params                                       |
| subscription\_management       | sms\_params\_logs.sql                                      | meta.subscription\_management.sms\_params\_logs                                 |
| subscription\_management       | user\_subscription\_status\_log.sql                        | meta.subscription\_management.user\_subscription\_status\_log                   |
| subscription\_management       | user\_subscription\_status.sql                             | meta.subscription\_management.user\_subscription\_status                        |
| subscription\_management       | user\_campaign\_subscriptions.sql                          | meta.subscription\_management.user\_campaign\_subscriptions                     |
| subscription\_management       | supported\_channels.sql                                    | meta.subscription\_management.supported\_channels                               |
| subscription\_management       | org\_param\_values.sql                                     | meta.subscription\_management.org\_param\_values                                |
| subscription\_management       | subscription\_scopes.sql                                   | meta.subscription\_management.subscription\_scopes                              |
| subscription\_management       | default\_content.sql                                       | meta.subscription\_management.default\_content                                  |
| subscription\_management       | org\_gateways\_mapping.sql                                 | meta.subscription\_management.org\_gateways\_mapping                            |
| subscription\_management       | subscription\_rules.sql                                    | meta.subscription\_management.subscription\_rules                               |
| subscription\_management       | email\_params\_logs.sql                                    | meta.subscription\_management.email\_params\_logs                               |
| scheduler                      | notifications.sql                                          | meta.scheduler.notifications                                                    |
| scheduler                      | cron\_migration\_details.sql                               | meta.scheduler.cron\_migration\_details                                         |
| scheduler                      | cron\_task\_logs.sql                                       | meta.scheduler.cron\_task\_logs                                                 |
| scheduler                      | notification\_parts.sql                                    | meta.scheduler.notification\_parts                                              |
| scheduler                      | cron\_tasks.sql                                            | meta.scheduler.cron\_tasks                                                      |
| scheduler                      | communications.sql                                         | meta.scheduler.communications                                                   |
| shard\_manager                 | stats.sql                                                  | meta.shard\_manager.stats                                                       |
| shard\_manager                 | org\_shard\_mapping.sql                                    | meta.shard\_manager.org\_shard\_mapping                                         |
| shard\_manager                 | service\_type.sql                                          | meta.shard\_manager.service\_type                                               |
| shard\_manager                 | shard.sql                                                  | meta.shard\_manager.shard                                                       |
| shard\_manager                 | service\_instance.sql                                      | meta.shard\_manager.service\_instance                                           |
| shard\_manager                 | stats\_data.sql                                            | meta.shard\_manager.stats\_data                                                 |
| shard\_manager                 | service.sql                                                | meta.shard\_manager.service                                                     |
| shard\_manager                 | shard\_policy.sql                                          | meta.shard\_manager.shard\_policy                                               |
| Logical DB                     | Tables                                                     | Path for query                                                                  |
| bill\_import\_local            | bill\_dump\_import\_attributes\_temp.sql                   | meta.bill\_import\_local.bill\_dump\_import\_attributes\_temp                   |
| bill\_import\_local            | bill\_dump\_import\_bills.sql                              | meta.bill\_import\_local.bill\_dump\_import\_bills                              |
| bill\_import\_local            | bill\_dump\_import\_bill\_lineitems.sql                    | meta.bill\_import\_local.bill\_dump\_import\_bill\_lineitems                    |
| bill\_import\_local            | bill\_dump\_import\_attributes.sql                         | meta.bill\_import\_local.bill\_dump\_import\_attributes                         |
| bill\_import\_local            | bill\_dump\_import\_bill\_lineitems\_attribute\_values.sql | meta.bill\_import\_local.bill\_dump\_import\_bill\_lineitems\_attribute\_values |
| ratelimit                      | event\_token\_config.sql                                   | meta.ratelimit.event\_token\_config                                             |
| ratelimit                      | token\_summary.sql                                         | meta.ratelimit.token\_summary                                                   |
| ratelimit                      | token\_allottment\_log.sql                                 | meta.ratelimit.token\_allottment\_log                                           |
| ratelimit                      | token\_consumption\_log.sql                                | meta.ratelimit.token\_consumption\_log                                          |
| ratelimit                      | rate\_limiting\_config.sql                                 | meta.ratelimit.rate\_limiting\_config                                           |
| ratelimit                      | rules.sql                                                  | meta.ratelimit.rules                                                            |
| ratelimit                      | rate\_limit\_hit.sql                                       | meta.ratelimit.rate\_limit\_hit                                                 |
| emigran                        | versions.sql                                               | meta.emigran.versions                                                           |
| test\_utf8                     | test\_data.sql                                             | meta.test\_utf8.test\_data                                                      |
| hotswap                        | dummy.sql                                                  | meta.hotswap.dummy                                                              |
| masters                        | org\_channel\_accounts.sql                                 | meta.masters.org\_channel\_accounts                                             |
| masters                        | org\_base\_tiny\_url.sql                                   | meta.masters.org\_base\_tiny\_url                                               |
| masters                        | cf\_transformer\_error\_logs.sql                           | meta.masters.cf\_transformer\_error\_logs                                       |
| masters                        | channel\_config\_keys.sql                                  | meta.masters.channel\_config\_keys                                              |
| masters                        | extended\_fields.sql                                       | meta.masters.extended\_fields                                                   |
| masters                        | currency\_ratio\_inr.sql                                   | meta.masters.currency\_ratio\_inr                                               |
| masters                        | cf\_transformer\_stats.sql                                 | meta.masters.cf\_transformer\_stats                                             |
| masters                        | cf\_transform\_scheduler.sql                               | meta.masters.cf\_transform\_scheduler                                           |
| masters                        | cf\_transform\_scheduler\_stats.sql                        | meta.masters.cf\_transform\_scheduler\_stats                                    |
| masters                        | verticals.sql                                              | meta.masters.verticals                                                          |
| masters                        | extended\_fields\_standard\_enum\_values.sql               | meta.masters.extended\_fields\_standard\_enum\_values                           |
| masters                        | extended\_field\_config.sql                                | meta.masters.extended\_field\_config                                            |
| masters                        | campaign\_v2\_org\_status.sql                              | meta.masters.campaign\_v2\_org\_status                                          |
| masters                        | bulk\_job\_status.sql                                      | meta.masters.bulk\_job\_status                                                  |
| masters                        | extended\_field\_function\_template\_fields.sql            | meta.masters.extended\_field\_function\_template\_fields                        |
| masters                        | file\_processing\_status.sql                               | meta.masters.file\_processing\_status                                           |
| masters                        | org\_meta\_data.sql                                        | meta.masters.org\_meta\_data                                                    |
| masters                        | product\_config\_key\_values.sql                           | meta.masters.product\_config\_key\_values                                       |
| masters                        | shipping\_address\_type.sql                                | meta.masters.shipping\_address\_type                                            |
| masters                        | extended\_field\_functions.sql                             | meta.masters.extended\_field\_functions                                         |
| masters                        | extended\_fields\_possible\_enum\_values.sql               | meta.masters.extended\_fields\_possible\_enum\_values                           |
| masters                        | comm\_channel\_type.sql                                    | meta.masters.comm\_channel\_type                                                |
| masters                        | org\_source\_attribute\_priority.sql                       | meta.masters.org\_source\_attribute\_priority                                   |
| masters                        | channel\_config\_key\_values.sql                           | meta.masters.channel\_config\_key\_values                                       |
| masters                        | org\_shipment\_types.sql                                   | meta.masters.org\_shipment\_types                                               |
| masters                        | ota\_bank\_enum\_values.sql                                | meta.masters.ota\_bank\_enum\_values                                            |
| masters                        | tinyurls.sql                                               | meta.masters.tinyurls                                                           |
| masters                        | extended\_field\_functions\_meta\_fields.sql               | meta.masters.extended\_field\_functions\_meta\_fields                           |
| masters                        | product\_config\_keys.sql                                  | meta.masters.product\_config\_keys                                              |
| masters                        | channels.sql                                               | meta.masters.channels                                                           |
| masters                        | vertical\_to\_org\_mapping.sql                             | meta.masters.vertical\_to\_org\_mapping                                         |
| masters                        | org\_delivery\_modes.sql                                   | meta.masters.org\_delivery\_modes                                               |
| masters                        | source\_comm\_channel\_type.sql                            | meta.masters.source\_comm\_channel\_type                                        |
| Logical DB                     | Tables                                                     | Path for query                                                                  |
| whatsapp\_notifier             | template\_event\_mappings.sql                              | meta.whatsapp\_notifier.template\_event\_mappings                               |
| whatsapp\_notifier             | communication\_event\_statuses.sql                         | meta.whatsapp\_notifier.communication\_event\_statuses                          |
| whatsapp\_notifier             | tags.sql                                                   | meta.whatsapp\_notifier.tags                                                    |
| whatsapp\_notifier             | org\_config\_keys.sql                                      | meta.whatsapp\_notifier.org\_config\_keys                                       |
| whatsapp\_notifier             | whatsapp\_accounts.sql                                     | meta.whatsapp\_notifier.whatsapp\_accounts                                      |
| whatsapp\_notifier             | orgs.sql                                                   | meta.whatsapp\_notifier.orgs                                                    |
| whatsapp\_notifier             | communication\_tags.sql                                    | meta.whatsapp\_notifier.communication\_tags                                     |
| whatsapp\_notifier             | whatsapp\_config\_keys.sql                                 | meta.whatsapp\_notifier.whatsapp\_config\_keys                                  |
| whatsapp\_notifier             | org\_config\_values.sql                                    | meta.whatsapp\_notifier.org\_config\_values                                     |
| whatsapp\_notifier             | templates.sql                                              | meta.whatsapp\_notifier.templates                                               |
| whatsapp\_notifier             | whatsapp\_config\_values.sql                               | meta.whatsapp\_notifier.whatsapp\_config\_values                                |
| whatsapp\_notifier             | events.sql                                                 | meta.whatsapp\_notifier.events                                                  |
| whatsapp\_notifier             | event\_statuses.sql                                        | meta.whatsapp\_notifier.event\_statuses                                         |
| rate\_limiter                  | rate\_limit\_criteria.sql                                  | meta.rate\_limiter.rate\_limit\_criteria                                        |
| rate\_limiter                  | redirection.sql                                            | meta.rate\_limiter.redirection                                                  |
| rate\_limiter                  | default\_rate\_limit\_criteria.sql                         | meta.rate\_limiter.default\_rate\_limit\_criteria                               |
| rate\_limiter                  | limits.sql                                                 | meta.rate\_limiter.limits                                                       |
| rate\_limiter                  | default\_rate\_limits.sql                                  | meta.rate\_limiter.default\_rate\_limits                                        |
| rate\_limiter                  | redirection\_criteria.sql                                  | meta.rate\_limiter.redirection\_criteria                                        |
| authorization                  | azn\_ag\_resource\_perms.sql                               | meta.authorization.azn\_ag\_resource\_perms                                     |
| authorization                  | group\_permissions.sql                                     | meta.authorization.group\_permissions                                           |
| authorization                  | azn\_resources.sql                                         | meta.authorization.azn\_resources                                               |
| authorization                  | user\_app\_features.sql                                    | meta.authorization.user\_app\_features                                          |
| authorization                  | modules.sql                                                | meta.authorization.modules                                                      |
| authorization                  | resources.sql                                              | meta.authorization.resources                                                    |
| authorization                  | org\_app\_features.sql                                     | meta.authorization.org\_app\_features                                           |
| authorization                  | group\_templates\_permissions.sql                          | meta.authorization.group\_templates\_permissions                                |
| authorization                  | resources\_mapping.sql                                     | meta.authorization.resources\_mapping                                           |
| authorization                  | permission\_hierarchy.sql                                  | meta.authorization.permission\_hierarchy                                        |
| authorization                  | approver\_logs.sql                                         | meta.authorization.approver\_logs                                               |
| authorization                  | membership\_change\_log.sql                                | meta.authorization.membership\_change\_log                                      |
| authorization                  | modules\_help\_url.sql                                     | meta.authorization.modules\_help\_url                                           |
| authorization                  | tab\_based\_actions.sql                                    | meta.authorization.tab\_based\_actions                                          |
| authorization                  | workflow\_hierarchy.sql                                    | meta.authorization.workflow\_hierarchy                                          |
| authorization                  | groups.sql                                                 | meta.authorization.groups                                                       |
| authorization                  | group\_templates.sql                                       | meta.authorization.group\_templates                                             |
| authorization                  | user\_proxy\_orgs.sql                                      | meta.authorization.user\_proxy\_orgs                                            |
| authorization                  | app\_features.sql                                          | meta.authorization.app\_features                                                |
| authorization                  | features.sql                                               | meta.authorization.features                                                     |
| authorization                  | workflows.sql                                              | meta.authorization.workflows                                                    |
| authorization                  | actions.sql                                                | meta.authorization.actions                                                      |
| authorization                  | active\_modules.sql                                        | meta.authorization.active\_modules                                              |
| authorization                  | azn\_ag\_assignments.sql                                   | meta.authorization.azn\_ag\_assignments                                         |
| authorization                  | memberships.sql                                            | meta.authorization.memberships                                                  |
| authorization                  | access\_exceptions.sql                                     | meta.authorization.access\_exceptions                                           |
| authorization                  | permissions.sql                                            | meta.authorization.permissions                                                  |
| authorization                  | vulcan\_actions.sql                                        | meta.authorization.vulcan\_actions                                              |
| authorization                  | vulcan\_action\_permissions.sql                            | meta.authorization.vulcan\_action\_permissions                                  |
| authorization                  | azn\_resource\_endpoints.sql                               | meta.authorization.azn\_resource\_endpoints                                     |
| authorization                  | org\_namespaces.sql                                        | meta.authorization.org\_namespaces                                              |
| authorization                  | org\_features.sql                                          | meta.authorization.org\_features                                                |
| authorization                  | access\_logs.sql                                           | meta.authorization.access\_logs                                                 |
| authorization                  | action\_permissions.sql                                    | meta.authorization.action\_permissions                                          |
| authorization                  | azn\_access\_groups.sql                                    | meta.authorization.azn\_access\_groups                                          |
| Logical DB                     | Tables                                                     | Path for query                                                                  |
| import                         | import\_error\_logs.sql                                    | meta.import.import\_error\_logs                                                 |
| import                         | ftp\_data\_dump.sql                                        | meta.import.ftp\_data\_dump                                                     |
| import                         | ftp\_sources\_templates\_audit.sql                         | meta.import.ftp\_sources\_templates\_audit                                      |
| import                         | import\_templates\_mappings.sql                            | meta.import.import\_templates\_mappings                                         |
| import                         | import\_running\_status.sql                                | meta.import.import\_running\_status                                             |
| import                         | import\_conf\_keys.sql                                     | meta.import.import\_conf\_keys                                                  |
| import                         | import\_ftp\_sources.sql                                   | meta.import.import\_ftp\_sources                                                |
| import                         | ftp\_background\_import.sql                                | meta.import.ftp\_background\_import                                             |
| import                         | import\_point\_engine\_status.sql                          | meta.import.import\_point\_engine\_status                                       |
| import                         | import\_additional\_details.sql                            | meta.import.import\_additional\_details                                         |
| import                         | import\_templates\_mappings\_bkp.sql                       | meta.import.import\_templates\_mappings\_bkp                                    |
| import                         | import\_subscriptions.sql                                  | meta.import.import\_subscriptions                                               |
| import                         | import\_logs.sql                                           | meta.import.import\_logs                                                        |
| import                         | import\_conf\_keys\_values.sql                             | meta.import.import\_conf\_keys\_values                                          |
| import                         | import\_files\_history.sql                                 | meta.import.import\_files\_history                                              |
| import                         | import\_templates.sql                                      | meta.import.import\_templates                                                   |
| import                         | import\_profiles.sql                                       | meta.import.import\_profiles                                                    |
| import                         | import\_subscribed\_profile\_stages.sql                    | meta.import.import\_subscribed\_profile\_stages                                 |
| import                         | ftp\_template\_mapping.sql                                 | meta.import.ftp\_template\_mapping                                              |
| import                         | import\_points\_engine\_configs.sql                        | meta.import.import\_points\_engine\_configs                                     |
| import                         | import\_subscribed\_emails.sql                             | meta.import.import\_subscribed\_emails                                          |
| import                         | import\_profiles\_fields.sql                               | meta.import.import\_profiles\_fields                                            |
| import                         | import\_subscribed\_mobiles.sql                            | meta.import.import\_subscribed\_mobiles                                         |
| import                         | import\_system\_configs.sql                                | meta.import.import\_system\_configs                                             |
| downloads                      | campaign\_audience\_downloads.sql                          | meta.downloads.campaign\_audience\_downloads                                    |
| downloads                      | download.sql                                               | meta.downloads.download                                                         |
| authentication                 | active\_logins.sql                                         | meta.authentication.active\_logins                                              |
| authentication                 | user\_cookies.sql                                          | meta.authentication.user\_cookies                                               |
| authentication                 | otp\_history.sql                                           | meta.authentication.otp\_history                                                |
| authentication                 | verification\_log.sql                                      | meta.authentication.verification\_log                                           |
| authentication                 | user\_login\_history\_success\_stories.sql                 | meta.authentication.user\_login\_history\_success\_stories                      |
| authentication                 | federated\_sso\_settings.sql                               | meta.authentication.federated\_sso\_settings                                    |
| authentication                 | username\_cart.sql                                         | meta.authentication.username\_cart                                              |
| authentication                 | user\_login\_history.sql                                   | meta.authentication.user\_login\_history                                        |
| authentication                 | loggable\_users.sql                                        | meta.authentication.loggable\_users                                             |
| authentication                 | user\_deleted\_log.sql                                     | meta.authentication.user\_deleted\_log                                          |
| authentication                 | password\_history.sql                                      | meta.authentication.password\_history                                           |
| authentication                 | user\_activity\_log.sql                                    | meta.authentication.user\_activity\_log                                         |
| authentication                 | user\_attributes.sql                                       | meta.authentication.user\_attributes                                            |
| authentication                 | duo\_factor\_settings.sql                                  | meta.authentication.duo\_factor\_settings                                       |
| authentication                 | verification\_body\_template.sql                           | meta.authentication.verification\_body\_template                                |
| instoreai\_vlp                 | visitors.sql                                               | meta.instoreai\_vlp.visitors                                                    |
| instoreai\_vlp                 | associates.sql                                             | meta.instoreai\_vlp.associates                                                  |

<br />

## Table: `spark_org_status_mapping`

| Column Name              | Data Type  | Index |
| ------------------------ | ---------- | ----- |
| org\_id                  | int(11)    | None  |
| is\_spark\_enabled       | tinyint(4) | None  |
| is\_old\_filter\_enabled | tinyint(1) | None  |

## Table: `spark_org_voucher_status_mapping`

| Column Name        | Data Type  | Index |
| ------------------ | ---------- | ----- |
| org\_id            | int(11)    | None  |
| is\_spark\_enabled | tinyint(4) | None  |

## Table: `filter_queries`

| Column Name       | Data Type     | Index                           |
| ----------------- | ------------- | ------------------------------- |
| id                | int(11)       | Part of PRIMARY KEY (id)        |
| org\_id           | int(11)       | Part of KEY (org\_id)           |
| session\_id       | int(11)       | Part of KEY (session\_id)       |
| filter\_name      | varchar(50)   | None                            |
| filter\_type      | varchar(20)   | None                            |
| query             | text          | None                            |
| sql\_explain      | varchar(5000) | None                            |
| time\_taken\_secs | int(11)       | Part of KEY (time\_taken\_secs) |
| start\_time       | timestamp     | None                            |

## Table: `spark_org_segment_status_mapping`

| Column Name        | Data Type  | Index |
| ------------------ | ---------- | ----- |
| org\_id            | int(11)    | None  |
| is\_spark\_enabled | tinyint(1) | None  |

## Table: `extended_fields_values`

| Column Name        | Data Type    | Index                            |
| ------------------ | ------------ | -------------------------------- |
| id                 | int(11)      | Part of KEY (id)                 |
| org\_id            | int(11)      | Part of KEY (org\_id)            |
| value              | varchar(100) | Part of UNIQUE KEY (value)       |
| created\_on        | datetime     | None                             |
| ef\_id             | int(11)      | Part of KEY (ef\_id)             |
| auto\_update\_time | timestamp    | Part of KEY (auto\_update\_time) |

## Table: `language_support_ef_values`

| Column Name   | Data Type    | Index                       |
| ------------- | ------------ | --------------------------- |
| id            | int(11)      | Part of PRIMARY KEY (id)    |
| lang\_id      | int(11)      | Part of KEY (lang\_id)      |
| ef\_value\_id | int(11)      | Part of KEY (ef\_value\_id) |
| label         | varchar(250) | None                        |

## Table: `client_credentials`

| Column Name    | Data Type     | Index                    |
| -------------- | ------------- | ------------------------ |
| id             | bigint(20)    | Part of PRIMARY KEY (id) |
| org\_id        | bigint(20)    | None                     |
| client\_key    | varchar(255)  | None                     |
| client\_secret | varchar(2048) | None                     |
| is\_active     | tinyint(1)    | None                     |

## Table: `header_overrides`

| Column Name   | Data Type     | Index                     |
| ------------- | ------------- | ------------------------- |
| id            | bigint(20)    | Part of PRIMARY KEY (id)  |
| mapping\_id   | bigint(20)    | Part of KEY (mapping\_id) |
| header\_name  | varchar(255)  | None                      |
| header\_value | varchar(2048) | None                      |
| is\_valid     | tinyint(1)    | None                      |

## Table: `prefix_service_mapping`

| Column Name   | Data Type    | Index                    |
| ------------- | ------------ | ------------------------ |
| id            | bigint(20)   | Part of PRIMARY KEY (id) |
| prefix        | varchar(100) | None                     |
| service\_name | varchar(100) | None                     |
| service\_port | varchar(5)   | None                     |
| strip\_prefix | tinyint(1)   | None                     |
| is\_valid     | tinyint(1)   | None                     |
| is\_external  | tinyint(1)   | None                     |
| timeout       | int(11)      | None                     |

## Table: `meta_test_temp_table`

| Column Name        | Data Type  | Index                    |
| ------------------ | ---------- | ------------------------ |
| id                 | bigint(20) | Part of PRIMARY KEY (id) |
| auto\_update\_time | timestamp  | None                     |

## Table: `IF`

| Column Name        | Data Type     | Index                    |
| ------------------ | ------------- | ------------------------ |
| id                 | INT           | Part of PRIMARY KEY (id) |
| name               | VARCHAR(40)   | None                     |
| git\_repo          | VARCHAR(200)  | None                     |
| token              | VARCHAR(100)  | None                     |
| Isactive           | TINYINT(1)    | None                     |
| UpdatedBy          | VARCHAR(128)  | None                     |
| CreatedBy          | VARCHAR(128)  | None                     |
| extensions         | VARCHAR(200)  | None                     |
| clusters           | VARCHAR(200)  | None                     |
| org\_ids           | VARCHAR(200)  | None                     |
| auto\_update\_time | TIMESTAMP     | None                     |
| gitrepoName        | VARCHAR(128)  | None                     |
| frameworkType      | ENUM('robot', | None                     |
| slackURL           | VARCHAR(200)  | None                     |
| extensionName      | VARCHAR(200)  | None                     |

## Table: `IF`

| Column Name | Data Type    | Index                           |
| ----------- | ------------ | ------------------------------- |
| id          | int(11)      | Part of PRIMARY KEY (id)        |
| name        | varchar(100) | None                            |
| app\_label  | varchar(100) | Part of UNIQUE KEY (app\_label) |
| model       | varchar(100) | Part of UNIQUE KEY (model)      |

## Table: `IF`

| Column Name | Data Type   | Index                    |
| ----------- | ----------- | ------------------------ |
| id          | BIGINT      | Part of PRIMARY KEY (id) |
| token       | VARCHAR(32) | Part of KEY (token)      |
| next\_step  | SMALLINT    | None                     |
| backend     | VARCHAR(32) | None                     |
| data        | LONGTEXT    | None                     |
| timestamp   | DATETIME(6) | Part of KEY (timestamp)  |

## Table: `IF`

| Column Name   | Data Type     | Index                         |
| ------------- | ------------- | ----------------------------- |
| id            | int(11)       | Part of PRIMARY KEY (id)      |
| password      | varchar(1000) | None                          |
| last\_login   | datetime      | None                          |
| is\_superuser | tinyint(1)    | None                          |
| username      | varchar(100)  | Part of UNIQUE KEY (username) |
| first\_name   | varchar(100)  | None                          |
| last\_name    | varchar(100)  | None                          |
| email         | varchar(500)  | None                          |
| is\_staff     | tinyint(1)    | None                          |
| is\_active    | tinyint(1)    | None                          |
| date\_joined  | datetime      | None                          |

## Table: `IF`

| Column Name  | Data Type     | Index                    |
| ------------ | ------------- | ------------------------ |
| id           | int(11)       | Part of PRIMARY KEY (id) |
| clientId     | varchar(30)   | None                     |
| count        | bigint(20)    | None                     |
| sendingOrgId | bigint(20)    | None                     |
| cluster      | varchar(30)   | None                     |
| gateway      | varchar(30)   | None                     |
| triggeredOn  | varchar(50)   | None                     |
| triggeredBy  | varchar(100)  | None                     |
| status       | varchar(1000) | None                     |

## Table: `IF`

| Column Name | Data Type    | Index                      |
| ----------- | ------------ | -------------------------- |
| id          | BIGINT       | Part of PRIMARY KEY (id)   |
| email       | VARCHAR(254) | Part of UNIQUE KEY (email) |
| code        | VARCHAR(32)  | Part of KEY (code)         |
| verified    | TINYINT(1)   | None                       |
| timestamp   | DATETIME(6)  | Part of KEY (timestamp)    |

## Table: `IF`

| Column Name   | Data Type   | Index                              |
| ------------- | ----------- | ---------------------------------- |
| session\_key  | varchar(40) | Part of PRIMARY KEY (session\_key) |
| session\_data | longtext    | None                               |
| expire\_date  | datetime    | Part of KEY (expire\_date)         |

## Table: `IF`

| Column Name | Data Type    | Index                            |
| ----------- | ------------ | -------------------------------- |
| id          | BIGINT       | Part of PRIMARY KEY (id)         |
| server\_url | VARCHAR(255) | Part of UNIQUE KEY (server\_url) |
| handle      | VARCHAR(255) | Part of UNIQUE KEY (handle)      |
| secret      | VARCHAR(255) | None                             |
| issued      | INT          | None                             |
| lifetime    | INT          | None                             |
| assoc\_type | VARCHAR(64)  | None                             |

## Table: `IF`

| Column Name        | Data Type    | Index |
| ------------------ | ------------ | ----- |
| id                 | int          | None  |
| triggeredBy        | varchar(200) | None  |
| extensionName      | varchar(200) | None  |
| git\_repo          | varchar(200) | None  |
| jobName            | varchar(200) | None  |
| auto\_update\_time | timestamp    | None  |
| clusters           | varchar(200) | None  |

## Table: `IF`

| Column Name | Data Type    | Index                    |
| ----------- | ------------ | ------------------------ |
| id          | int(11)      | Part of PRIMARY KEY (id) |
| error\_code | int(11)      | None                     |
| description | varchar(255) | None                     |
| resource    | varchar(20)  | None                     |
| success     | tinyint(1)   | None                     |

## Table: `IF`

| Column Name | Data Type    | Index                    |
| ----------- | ------------ | ------------------------ |
| id          | int(11)      | Part of PRIMARY KEY (id) |
| app         | varchar(255) | None                     |
| name        | varchar(255) | None                     |
| applied     | datetime(6)  | None                     |

## Table: `IF`

| Column Name        | Data Type     | Index |
| ------------------ | ------------- | ----- |
| id                 | int           | None  |
| triggeredBy        | varchar(200)  | None  |
| description        | varchar(400)  | None  |
| auto\_update\_time | timestamp     | None  |
| status             | varchar(1000) | None  |
| extensionName      | varchar(200)  | None  |
| orgId              | int           | None  |
| depId              | int           | None  |
| git\_repo          | varchar(200)  | None  |
| jobName            | varchar(200)  | None  |
| branchOrTag        | varchar(200)  | None  |
| version            | varchar(200)  | None  |

## Table: `IF`

| Column Name   | Data Type                  | Index |
| ------------- | -------------------------- | ----- |
| id            | INT                        | None  |
| dashboard     | VARCHAR(255)               | None  |
| org\_include  | VARCHAR(255)               | None  |
| org\_exclude  | VARCHAR(255)               | None  |
| dashboardType | ENUM('NEWRELIC','GRAFANA') | None  |
| isEnabled     | TINYINT                    | None  |
| story         | VARCHAR(255)               | None  |

## Table: `IF`

| Column Name   | Data Type    | Index                    |
| ------------- | ------------ | ------------------------ |
| id            | int(11)      | Part of PRIMARY KEY (id) |
| start\_number | bigint(20)   | None                     |
| orgId         | bigint(20)   | None                     |
| countryCode   | int(11)      | None                     |
| url           | varchar(200) | None                     |
| lastUpdatedBy | varchar(128) | None                     |

## Table: `IF`

| Column Name  | Data Type    | Index                    |
| ------------ | ------------ | ------------------------ |
| id           | int(11)      | Part of PRIMARY KEY (id) |
| orgId        | bigint(20)   | None                     |
| module       | varchar(300) | None                     |
| cluster      | varchar(30)  | None                     |
| value        | mediumtext   | None                     |
| isActive     | smallint(6)  | None                     |
| lastModified | date         | None                     |

## Table: `IF`

| Column Name            | Data Type                                                              | Index |
| ---------------------- | ---------------------------------------------------------------------- | ----- |
| id                     | INT                                                                    | None  |
| query                  | VARCHAR(400)                                                           | None  |
| created\_by            | VARCHAR(40)                                                            | None  |
| created\_at            | TIMESTAMP                                                              | None  |
| query\_execution\_time | DECIMAL(10,4)                                                          | None  |
| status                 | ENUM('SUCCESS','FAILED','PENDING\_APPROVAL','REJECTED','IN\_PROGRESS') | None  |
| no\_of\_records        | INT                                                                    | None  |
| updated\_at            | TIMESTAMP                                                              | None  |
| mongo\_database        | VARCHAR(80)                                                            | None  |
| collection             | VARCHAR(80)                                                            | None  |
| tenant\_id             | INT                                                                    | None  |
| hotswap\_id            | INT                                                                    | None  |
| approved\_by           | VARCHAR(40)                                                            | None  |

## Table: `IF`

| Column Name           | Data Type    | Index                    |
| --------------------- | ------------ | ------------------------ |
| id                    | int(11)      | Part of PRIMARY KEY (id) |
| name                  | varchar(100) | None                     |
| capital               | varchar(100) | None                     |
| code                  | varchar(2)   | None                     |
| short\_name           | varchar(3)   | None                     |
| numeric\_code         | int(11)      | None                     |
| iso\_name             | varchar(100) | None                     |
| mobile\_country\_code | varchar(5)   | None                     |
| mobile\_regex         | varchar(250) | None                     |
| mobile\_length\_csv   | varchar(255) | None                     |
| last\_updated\_by     | int(11)      | None                     |
| last\_updated         | datetime     | None                     |

## Table: `IF`

| Column Name         | Data Type    | Index                                 |
| ------------------- | ------------ | ------------------------------------- |
| id                  | INT(11)      | Part of PRIMARY KEY (id)              |
| org\_id             | VARCHAR(255) | Part of UNIQUE KEY (org\_id)          |
| ref\_id             | VARCHAR(255) | Part of UNIQUE KEY (ref\_id)          |
| api\_request\_id    | VARCHAR(255) | Part of UNIQUE KEY (api\_request\_id) |
| event\_name         | VARCHAR(255) | Part of UNIQUE KEY (event\_name)      |
| json\_body          | MEDIUMTEXT   | None                                  |
| auto\_updated\_date | DATETIME     | None                                  |

## Table: `IF`

| Column Name   | Data Type     | Index                    |
| ------------- | ------------- | ------------------------ |
| id            | int(11)       | Part of PRIMARY KEY (id) |
| mjUrl         | varchar(200)  | None                     |
| esbUrl        | varchar(200)  | None                     |
| checkedOn     | varchar(50)   | None                     |
| mappingStatus | varchar(1000) | None                     |

## Table: `IF`

| Column Name | Data Type     | Index                    |
| ----------- | ------------- | ------------------------ |
| id          | int(11)       | Part of PRIMARY KEY (id) |
| run\_id     | varchar(100)  | None                     |
| status      | varchar(1500) | None                     |
| result      | mediumtext    | None                     |
| isVisible   | tinyint(1)    | None                     |
| invokedBy   | varchar(100)  | None                     |

## Table: `IF`

| Column Name          | Data Type     | Index                    |
| -------------------- | ------------- | ------------------------ |
| id                   | int(11)       | Part of PRIMARY KEY (id) |
| session\_name        | varchar(200)  | None                     |
| session\_summary     | varchar(2000) | None                     |
| session\_details     | mediumtext    | None                     |
| session\_description | varchar(200)  | None                     |
| createdBy            | varchar(100)  | None                     |

## Table: `IF`

| Column Name | Data Type   | Index                     |
| ----------- | ----------- | ------------------------- |
| id          | int(11)     | Part of PRIMARY KEY (id)  |
| name        | varchar(80) | Part of UNIQUE KEY (name) |

## Table: `IF`

| Column Name        | Data Type                 | Index                    |
| ------------------ | ------------------------- | ------------------------ |
| id                 | INT                       | Part of PRIMARY KEY (id) |
| request            | VARCHAR(255)              | None                     |
| orgId              | VARCHAR(20)               | None                     |
| cluster            | VARCHAR(20)               | None                     |
| configName         | VARCHAR(30)               | None                     |
| configValue        | TEXT                      | None                     |
| defaultValue       | VARCHAR(30)               | None                     |
| isSecret           | SMALLINT                  | None                     |
| tags               | VARCHAR(100)              | None                     |
| user               | VARCHAR(30)               | None                     |
| response           | MEDIUMTEXT                | None                     |
| auto\_update\_time | TIMESTAMP                 | None                     |
| created\_at        | TIMESTAMP                 | None                     |
| approver           | VARCHAR(30)               | None                     |
| status             | ENUM('PENDING\_APPROVAL', | None                     |

## Table: `IF`

| Column Name     | Data Type    | Index                    |
| --------------- | ------------ | ------------------------ |
| id              | int(11)      | Part of PRIMARY KEY (id) |
| url             | varchar(255) | None                     |
| tillUsername    | varchar(50)  | None                     |
| firstName       | varchar(50)  | None                     |
| lastName        | varchar(50)  | None                     |
| mobile          | varchar(50)  | None                     |
| email           | varchar(50)  | None                     |
| gender          | varchar(50)  | None                     |
| externalId      | varchar(50)  | None                     |
| number          | varchar(50)  | None                     |
| storeName       | varchar(50)  | None                     |
| storeCode       | varchar(50)  | None                     |
| tillId          | varchar(50)  | None                     |
| storeId         | varchar(50)  | None                     |
| zoneId          | varchar(50)  | None                     |
| tillName        | varchar(50)  | None                     |
| tillCode        | varchar(50)  | None                     |
| storeExternalId | varchar(50)  | None                     |
| zoneName        | varchar(50)  | None                     |
| zoneCode        | varchar(50)  | None                     |

## Table: `IF`

| Column Name     | Data Type                | Index                    |
| --------------- | ------------------------ | ------------------------ |
| id              | int                      | Part of PRIMARY KEY (id) |
| org\_id         | int                      | None                     |
| extension\_type | int                      | None                     |
| dashboard       | varchar(255)             | Part of KEY (dashboard)  |
| chart\_id       | int                      | None                     |
| nrql\_query     | text                     | None                     |
| isEnabled       | tinyint                  | None                     |
| query\_type     | enum('FILTER','METRICS') | None                     |

## Table: `IF`

| Column Name    | Data Type    | Index                    |
| -------------- | ------------ | ------------------------ |
| id             | int(11)      | Part of PRIMARY KEY (id) |
| project\_name  | varchar(200) | None                     |
| module\_name   | varchar(200) | None                     |
| testsuite      | varchar(200) | None                     |
| STR            | mediumtext   | None                     |
| resource\_name | varchar(200) | None                     |
| lastModified   | datetime     | None                     |
| lastUpdatedBy  | varchar(100) | None                     |

## Table: `IF`

| Column Name   | Data Type    | Index                    |
| ------------- | ------------ | ------------------------ |
| id            | int(11)      | Part of PRIMARY KEY (id) |
| orgId         | bigint(20)   | None                     |
| url           | varchar(255) | None                     |
| orgName       | varchar(50)  | None                     |
| zones         | varchar(100) | None                     |
| stores        | varchar(100) | None                     |
| storeTills    | varchar(100) | None                     |
| shard         | varchar(50)  | None                     |
| tierCount     | int(11)      | None                     |
| isActive      | smallint(6)  | None                     |
| inUseLastTime | datetime     | None                     |
| inUse         | smallint(6)  | None                     |

## Table: `IF`

| Column Name | Data Type    | Index                            |
| ----------- | ------------ | -------------------------------- |
| id          | BIGINT       | Part of PRIMARY KEY (id)         |
| server\_url | VARCHAR(255) | Part of UNIQUE KEY (server\_url) |
| timestamp   | INT          | Part of UNIQUE KEY (timestamp)   |
| salt        | VARCHAR(65)  | Part of UNIQUE KEY (salt)        |

## Table: `IF`

| Column Name | Data Type      | Index                    |
| ----------- | -------------- | ------------------------ |
| id          | int(11)        | Part of PRIMARY KEY (id) |
| name        | varchar(20)    | None                     |
| value       | varchar(10000) | None                     |

## Table: `client_versions`

| Column Name        | Data Type                                      | Index                    |
| ------------------ | ---------------------------------------------- | ------------------------ |
| id                 | int(11)                                        | Part of PRIMARY KEY (id) |
| client\_type       | enum('INTOUCH','STORE\_CENTER','THIN\_CLIENT') | None                     |
| version            | varchar(255)                                   | None                     |
| framework\_version | varchar(50)                                    | None                     |
| change\_log        | mediumtext                                     | None                     |
| created\_on        | datetime                                       | None                     |
| version\_added\_by | int(11)                                        | None                     |
| is\_active         | tinyint(4)                                     | None                     |

## Table: `thin_client_version_mapping`

| Column Name      | Data Type  | Index                    |
| ---------------- | ---------- | ------------------------ |
| id               | int(11)    | Part of PRIMARY KEY (id) |
| org\_id          | int(11)    | Part of KEY (org\_id)    |
| store\_id        | int(11)    | Part of KEY (store\_id)  |
| version\_id      | int(11)    | None                     |
| version\_set\_on | datetime   | None                     |
| is\_active       | tinyint(1) | Part of KEY (is\_active) |
| version\_set\_by | int(11)    | None                     |

## Table: `client_version_mapping`

| Column Name      | Data Type  | Index                    |
| ---------------- | ---------- | ------------------------ |
| id               | int(11)    | Part of PRIMARY KEY (id) |
| org\_id          | int(11)    | Part of KEY (org\_id)    |
| store\_id        | int(11)    | Part of KEY (store\_id)  |
| version\_id      | int(11)    | None                     |
| version\_set\_on | datetime   | None                     |
| is\_active       | tinyint(1) | Part of KEY (is\_active) |
| version\_set\_by | int(11)    | None                     |

## Table: `device_details`

| Column Name        | Data Type   | Index                           |
| ------------------ | ----------- | ------------------------------- |
| id                 | bigint(20)  | Part of PRIMARY KEY (id)        |
| device\_id         | bigint(20)  | Part of UNIQUE KEY (device\_id) |
| lan\_mac\_id       | varchar(50) | None                            |
| wifi\_mac\_id      | varchar(50) | None                            |
| po                 | varchar(50) | None                            |
| processor          | varchar(15) | None                            |
| auto\_update\_time | timestamp   | None                            |

## Table: `accessories_details`

| Column Name         | Data Type   | Index                    |
| ------------------- | ----------- | ------------------------ |
| id                  | int(11)     | Part of PRIMARY KEY (id) |
| device\_id          | bigint(20)  | Part of KEY (device\_id) |
| with\_rf\_switch    | tinyint(1)  | None                     |
| device\_id\_desc    | char(2)     | None                     |
| hardware\_extension | varchar(10) | None                     |
| camera              | varchar(10) | None                     |
| case\_color         | char(5)     | None                     |
| case\_size          | char(5)     | None                     |
| microphone          | char(3)     | None                     |
| auto\_update\_time  | timestamp   | None                     |

## Table: `installation_details`

| Column Name        | Data Type   | Index                            |
| ------------------ | ----------- | -------------------------------- |
| id                 | int(11)     | Part of PRIMARY KEY (id)         |
| device\_id         | bigint(20)  | None                             |
| org\_id            | bigint(11)  | Part of KEY (org\_id)            |
| store\_id          | bigint(20)  | None                             |
| engagement\_type   | varchar(7)  | None                             |
| date\_dispatched   | datetime    | None                             |
| date\_installed    | datetime    | None                             |
| date\_callback     | datetime    | None                             |
| device\_name       | varchar(50) | None                             |
| dispatch\_type     | varchar(15) | None                             |
| auto\_update\_time | timestamp   | Part of KEY (auto\_update\_time) |
| is\_active         | tinyint(1)  | None                             |
| store\_name        | varchar(50) | None                             |

## Table: `post_installation_details`

| Column Name                 | Data Type   | Index                         |
| --------------------------- | ----------- | ----------------------------- |
| id                          | int(10)     | Part of PRIMARY KEY (id)      |
| org\_id                     | bigint(11)  | Part of PRIMARY KEY (org\_id) |
| store\_id                   | bigint(20)  | None                          |
| till\_id                    | bigint(20)  | None                          |
| request                     | text        | None                          |
| install\_correctly          | tinyint(1)  | None                          |
| device\_image               | blob        | None                          |
| device\_color\_request      | tinyint(1)  | None                          |
| with\_rf\_switch            | tinyint(1)  | None                          |
| with\_network               | tinyint(1)  | None                          |
| network\_username           | varchar(30) | None                          |
| network\_password           | varchar(30) | None                          |
| instore\_version\_update    | tinyint(1)  | None                          |
| install\_permission         | tinyint(1)  | None                          |
| walkins\_\_count\_config    | tinyint(1)  | None                          |
| damages\_install            | text        | None                          |
| walkins\_demo               | tinyint(1)  | None                          |
| issues\_install             | text        | None                          |
| mn\_sy\_count\_record       | tinyint(1)  | None                          |
| mn\_count\_process\_explain | tinyint(1)  | None                          |
| visitor\_staff\_count\_sync | tinyint(1)  | None                          |
| cap\_escalation\_matrix     | tinyint(1)  | None                          |
| received\_signed\_copy      | tinyint(1)  | None                          |
| signed\_copy                | blob        | None                          |
| updated\_on                 | timestamp   | None                          |

## Table: `device_registration_meta`

| Column Name         | Data Type                                  | Index                    |
| ------------------- | ------------------------------------------ | ------------------------ |
| id                  | bigint(20)                                 | Part of PRIMARY KEY (id) |
| device\_id          | bigint(20)                                 | None                     |
| device\_type        | enum('VM','CE','FFC','HeatMap')            | None                     |
| wifi\_mac\_id       | varchar(50)                                | None                     |
| lan\_mac\_id        | varchar(50)                                | None                     |
| till\_id            | bigint(20)                                 | None                     |
| store\_id           | bigint(20)                                 | None                     |
| org\_id             | bigint(20)                                 | None                     |
| device\_name        | varchar(50)                                | None                     |
| processor           | enum('RaspberryPi\_3B','RaspberryPi\_3B+') | None                     |
| lens                | varchar(50)                                | None                     |
| with\_staff\_switch | tinyint(1)                                 | None                     |
| case\_version       | enum('Acrylic                              | None                     |
| case\_color         | enum('black','white','blue')               | None                     |
| is\_active          | smallint(6)                                | None                     |
| auto\_update\_time  | timestamp                                  | None                     |
| notes               | varchar(50)                                | None                     |

## Table: `entrance_details`

| Column Name                | Data Type   | Index                         |
| -------------------------- | ----------- | ----------------------------- |
| id                         | int(10)     | Part of PRIMARY KEY (id)      |
| org\_id                    | bigint(11)  | Part of PRIMARY KEY (org\_id) |
| store\_id                  | bigint(20)  | None                          |
| till\_id                   | bigint(20)  | None                          |
| device\_id                 | bigint(20)  | None                          |
| store\_address             | text        | None                          |
| width\_entrance            | varchar(20) | None                          |
| height\_entrance           | varchar(20) | None                          |
| height\_9ft\_entrance      | varchar(20) | None                          |
| area\_covered              | varchar(20) | None                          |
| router\_entrance\_distance | varchar(20) | None                          |
| network\_type              | varchar(20) | None                          |
| network\_username          | varchar(30) | None                          |
| network\_password          | varchar(30) | None                          |
| updated\_on                | timestamp   | None                          |
| entrance\_image            | longblob    | None                          |

## Table: `whitelisted_network`

| Column Name                 | Data Type   | Index                         |
| --------------------------- | ----------- | ----------------------------- |
| id                          | int(11)     | Part of PRIMARY KEY (id)      |
| org\_id                     | bigint(11)  | Part of PRIMARY KEY (org\_id) |
| store\_id                   | bigint(20)  | None                          |
| till\_id                    | bigint(20)  | None                          |
| type                        | varchar(20) | None                          |
| api\_base\_url              | tinyint(1)  | None                          |
| api\_url                    | tinyint(1)  | None                          |
| intouch\_base\_url          | tinyint(1)  | None                          |
| storecare\_base\_url        | tinyint(1)  | None                          |
| storecenter\_base\_url      | tinyint(1)  | None                          |
| cap\_apps\_antivirus\_block | tinyint(1)  | None                          |
| cap\_apps\_firewall\_block  | tinyint(1)  | None                          |
| updated\_on                 | timestamp   | None                          |

## Table: `multi_language_fields`

| Column Name        | Data Type    | Index                            |
| ------------------ | ------------ | -------------------------------- |
| id                 | int(11)      | Part of PRIMARY KEY (id)         |
| entity\_id         | int(11)      | Part of UNIQUE KEY (entity\_id)  |
| field\_name        | varchar(100) | Part of UNIQUE KEY (field\_name) |
| description        | varchar(250) | None                             |
| required           | tinyint(1)   | None                             |
| auto\_update\_time | timestamp    | None                             |

## Table: `multi_language_modules`

| Column Name        | Data Type    | Index                             |
| ------------------ | ------------ | --------------------------------- |
| id                 | int(11)      | Part of PRIMARY KEY (id)          |
| module\_name       | varchar(100) | Part of UNIQUE KEY (module\_name) |
| description        | varchar(250) | None                              |
| auto\_update\_time | timestamp    | None                              |

## Table: `multi_language_entities`

| Column Name        | Data Type    | Index                             |
| ------------------ | ------------ | --------------------------------- |
| id                 | int(11)      | Part of PRIMARY KEY (id)          |
| module\_id         | int(11)      | None                              |
| entity\_name       | varchar(100) | Part of UNIQUE KEY (entity\_name) |
| description        | varchar(250) | None                              |
| auto\_update\_time | timestamp    | None                              |

## Table: `multi_language_custom_fields`

| Column Name        | Data Type    | Index                            |
| ------------------ | ------------ | -------------------------------- |
| id                 | int(11)      | Part of PRIMARY KEY (id)         |
| org\_id            | int(11)      | Part of UNIQUE KEY (org\_id)     |
| entity\_id         | int(11)      | Part of UNIQUE KEY (entity\_id)  |
| field\_name        | varchar(100) | Part of UNIQUE KEY (field\_name) |
| description        | varchar(250) | None                             |
| required           | tinyint(1)   | None                             |
| auto\_update\_time | timestamp    | None                             |

## Table: `scope_entities`

| Column Name        | Data Type    | Index                    |
| ------------------ | ------------ | ------------------------ |
| id                 | bigint(20)   | Part of PRIMARY KEY (id) |
| entity             | varchar(100) | None                     |
| auto\_update\_time | timestamp    | None                     |

## Table: `integration_client_scope_mapping`

| Column Name        | Data Type                        | Index                    |
| ------------------ | -------------------------------- | ------------------------ |
| id                 | bigint(20)                       | Part of PRIMARY KEY (id) |
| client\_id         | bigint(20)                       | Part of KEY (client\_id) |
| org\_id            | bigint(20)                       | Part of KEY (org\_id)    |
| permission         | enum('READ','WRITE','READWRITE') | None                     |
| entity\_id         | bigint(20)                       | None                     |
| is\_valid          | tinyint(1)                       | None                     |
| auto\_update\_time | timestamp                        | None                     |

## Table: `integration_clients`

| Column Name             | Data Type    | Index                             |
| ----------------------- | ------------ | --------------------------------- |
| id                      | bigint(20)   | Part of PRIMARY KEY (id)          |
| client\_name            | varchar(100) | Part of UNIQUE KEY (client\_name) |
| description             | varchar(100) | None                              |
| client\_key             | varchar(100) | Part of UNIQUE KEY (client\_key)  |
| client\_secret          | varchar(100) | None                              |
| org\_id                 | bigint(20)   | Part of KEY (org\_id)             |
| default\_till\_id       | bigint(20)   | None                              |
| access\_group\_id       | int(11)      | Part of KEY (access\_group\_id)   |
| created\_on             | timestamp    | None                              |
| created\_by             | bigint(20)   | None                              |
| last\_updated\_on       | timestamp    | None                              |
| last\_updated\_by       | bigint(20)   | None                              |
| is\_valid               | tinyint(1)   | None                              |
| expiration\_token\_time | bigint(20)   | None                              |
| auto\_update\_time      | timestamp    | Part of KEY (auto\_update\_time)  |

## Table: `scope_entity_resource_mapping`

| Column Name        | Data Type    | Index                    |
| ------------------ | ------------ | ------------------------ |
| id                 | bigint(20)   | Part of PRIMARY KEY (id) |
| entity\_id         | bigint(20)   | None                     |
| resource           | varchar(300) | None                     |
| is\_valid          | tinyint(1)   | None                     |
| auto\_update\_time | timestamp    | None                     |

## Table: `config_key_values`

| Column Name        | Data Type    | Index                            |
| ------------------ | ------------ | -------------------------------- |
| id                 | bigint(20)   | Part of PRIMARY KEY (id)         |
| org\_id            | bigint       | Part of KEY (org\_id)            |
| client\_id         | bigint       | Part of KEY (client\_id)         |
| key\_id            | bigint       | Part of KEY (key\_id)            |
| value              | varchar(255) | None                             |
| updated\_by        | bigint       | None                             |
| is\_active         | boolean      | None                             |
| updated\_on        | timestamp    | None                             |
| auto\_update\_time | timestamp    | Part of KEY (auto\_update\_time) |

## Table: `jwk_keys`

| Column Name        | Data Type   | Index                    |
| ------------------ | ----------- | ------------------------ |
| id                 | bigint(20)  | Part of PRIMARY KEY (id) |
| jwk\_json          | mediumtext  | None                     |
| is\_valid          | tinyint(1)  | None                     |
| auto\_update\_time | timestamp   | None                     |
| key\_id            | varchar(10) | None                     |

## Table: `config_keys`

| Column Name        | Data Type    | Index                            |
| ------------------ | ------------ | -------------------------------- |
| id                 | bigint(20)   | Part of PRIMARY KEY (id)         |
| name               | varchar(100) | Part of KEY (name)               |
| default\_value     | varchar(255) | None                             |
| is\_active         | boolean      | None                             |
| created\_on        | datetime     | None                             |
| auto\_update\_time | timestamp    | Part of KEY (auto\_update\_time) |

## Table: `org_blocks`

| Column Name        | Data Type    | Index                    |
| ------------------ | ------------ | ------------------------ |
| id                 | int(11)      | Part of PRIMARY KEY (id) |
| org\_id            | int(11)      | None                     |
| name               | varchar(255) | None                     |
| json\_content      | mediumtext   | None                     |
| template\_type\_id | int(11)      | None                     |
| created\_by        | int(11)      | None                     |
| created\_on        | datetime     | None                     |
| next\_block\_id    | int(11)      | None                     |

## Table: `display_images`

| Column Name | Data Type     | Index                    |
| ----------- | ------------- | ------------------------ |
| id          | int(11)       | Part of PRIMARY KEY (id) |
| type        | varchar(255)  | None                     |
| image\_url  | varchar(1024) | None                     |

## Table: `org_actions`

| Column Name | Data Type  | Index                    |
| ----------- | ---------- | ------------------------ |
| id          | int(11)    | Part of PRIMARY KEY (id) |
| org\_id     | int(11)    | None                     |
| action\_id  | int(11)    | None                     |
| is\_active  | tinyint(1) | None                     |
| created\_by | int(11)    | None                     |
| created\_on | datetime   | None                     |

## Table: `button_types`

| Column Name   | Data Type    | Index                    |
| ------------- | ------------ | ------------------------ |
| id            | int(11)      | Part of PRIMARY KEY (id) |
| name          | varchar(255) | None                     |
| default\_json | varchar(512) | None                     |
| created\_by   | int(11)      | None                     |
| created\_on   | datetime     | None                     |

## Table: `actions`

| Column Name | Data Type    | Index                    |
| ----------- | ------------ | ------------------------ |
| id          | int(11)      | Part of PRIMARY KEY (id) |
| name        | varchar(255) | None                     |
| label       | varchar(255) | None                     |
| params      | mediumtext   | None                     |
| created\_by | int(11)      | None                     |
| created\_on | datetime     | None                     |

## Table: `default_messages`

| Column Name | Data Type    | Index                    |
| ----------- | ------------ | ------------------------ |
| id          | int(11)      | Part of PRIMARY KEY (id) |
| org\_id     | bigint(20)   | None                     |
| message     | varchar(300) | None                     |

## Table: `template_types`

| Column Name   | Data Type        | Index                    |
| ------------- | ---------------- | ------------------------ |
| id            | int(11)          | Part of PRIMARY KEY (id) |
| name          | varchar(255)     | None                     |
| channel       | enum('FACEBOOK') | None                     |
| default\_json | mediumtext       | None                     |
| created\_by   | int(11)          | None                     |
| created\_on   | datetime         | None                     |

## Table: `custom_dimension_values`

| Column Name   | Data Type    | Index                    |
| ------------- | ------------ | ------------------------ |
| id            | int(11)      | Part of PRIMARY KEY (id) |
| org\_id       | int(11)      | None                     |
| dimension\_id | int(11)      | None                     |
| label         | varchar(250) | None                     |
| value\_id     | varchar(250) | None                     |

## Table: `date`

| Column Name    | Data Type | Index                    |
| -------------- | --------- | ------------------------ |
| id             | int(11)   | Part of PRIMARY KEY (id) |
| day\_of\_month | int(11)   | None                     |
| month          | int(11)   | None                     |
| year           | int(11)   | None                     |
| day\_of\_week  | int(11)   | None                     |
| week\_number   | int(11)   | None                     |
| date           | date      | None                     |

## Table: `custom_dimension_insights_hierarchy`

| Column Name     | Data Type    | Index                    |
| --------------- | ------------ | ------------------------ |
| id              | int(11)      | Part of PRIMARY KEY (id) |
| org\_id         | int(11)      | Part of KEY (org\_id)    |
| dimension\_id   | int(11)      | None                     |
| priority        | tinyint(4)   | None                     |
| base\_dimension | varchar(100) | None                     |

## Table: `custom_dimensions`

| Column Name     | Data Type    | Index                    |
| --------------- | ------------ | ------------------------ |
| id              | int(11)      | Part of PRIMARY KEY (id) |
| org\_id         | int(11)      | None                     |
| name            | varchar(250) | None                     |
| type            | varchar(250) | None                     |
| base\_dimension | varchar(100) | None                     |
| is\_valid       | tinyint(1)   | None                     |
| data            | varchar(250) | None                     |

## Table: `target_data`

| Column Name | Data Type | Index                          |
| ----------- | --------- | ------------------------------ |
| id          | int(11)   | Part of PRIMARY KEY (id)       |
| date\_id    | int(11)   | Part of UNIQUE KEY (date\_id)  |
| org\_id     | int(11)   | Part of UNIQUE KEY (org\_id)   |
| store\_id   | int(11)   | Part of UNIQUE KEY (store\_id) |
| target      | int(11)   | None                           |
| date        | date      | None                           |

## Table: `filter`

| Column Name       | Data Type                            | Index                            |
| ----------------- | ------------------------------------ | -------------------------------- |
| id                | int(11)                              | Part of PRIMARY KEY (id)         |
| description       | varchar(191)                         | Part of UNIQUE KEY (description) |
| resource\_name    | varchar(255)                         | None                             |
| type              | enum('LOYALTY','NON\_LOYALTY','ALL') | None                             |
| is\_active        | tinyint(1)                           | None                             |
| supported\_orgs   | varchar(255)                         | None                             |
| last\_updated\_on | datetime                             | None                             |
| last\_updated\_by | int(11)                              | None                             |

## Table: `filter_info`

| Column Name       | Data Type    | Index                    |
| ----------------- | ------------ | ------------------------ |
| id                | int(11)      | Part of PRIMARY KEY (id) |
| filter\_id        | int(11)      | None                     |
| display\_name     | varchar(255) | None                     |
| description       | varchar(255) | None                     |
| is\_exact\_check  | tinyint(1)   | None                     |
| extra\_params     | varchar(255) | None                     |
| last\_updated\_on | datetime     | None                     |

## Table: `field_properties`

| Column Name        | Data Type    | Index                               |
| ------------------ | ------------ | ----------------------------------- |
| id                 | int(11)      | Part of PRIMARY KEY (id)            |
| form\_part\_id     | int(11)      | Part of UNIQUE KEY (form\_part\_id) |
| field\_type        | varchar(255) | Part of UNIQUE KEY (field\_type)    |
| field\_value       | longtext     | None                                |
| is\_mapping\_field | tinyint(1)   | None                                |
| last\_updated\_on  | datetime     | None                                |

## Table: `form_parts`

| Column Name       | Data Type    | Index                    |
| ----------------- | ------------ | ------------------------ |
| id                | int(11)      | Part of PRIMARY KEY (id) |
| filter\_id        | int(11)      | None                     |
| base\_type        | varchar(255) | None                     |
| is\_collection    | tinyint(1)   | None                     |
| last\_updated\_on | datetime     | None                     |

## Table: `filter_properties`

| Column Name       | Data Type    | Index                               |
| ----------------- | ------------ | ----------------------------------- |
| id                | int(11)      | Part of PRIMARY KEY (id)            |
| filter\_id        | int(11)      | Part of UNIQUE KEY (filter\_id)     |
| property\_type    | varchar(255) | Part of UNIQUE KEY (property\_type) |
| property\_value   | mediumtext   | None                                |
| last\_updated\_on | datetime     | None                                |

## Table: `filter_execution`

| Column Name             | Data Type    | Index                                        |
| ----------------------- | ------------ | -------------------------------------------- |
| id                      | int(11)      | Part of PRIMARY KEY (id)                     |
| filter\_id              | int(11)      | Part of UNIQUE KEY (filter\_id)              |
| execution\_step\_number | int(11)      | Part of UNIQUE KEY (execution\_step\_number) |
| execution\_type         | varchar(255) | Part of UNIQUE KEY (execution\_type)         |
| execution\_value        | longtext     | None                                         |
| last\_updated\_on       | datetime     | None                                         |

## Table: `org_configs`

| Column Name | Data Type | Index                         |
| ----------- | --------- | ----------------------------- |
| org\_id     | int(11)   | Part of PRIMARY KEY (org\_id) |

## Table: `vs_kpis_sqls`

| Column Name        | Data Type    | Index                              |
| ------------------ | ------------ | ---------------------------------- |
| id                 | int(11)      | Part of PRIMARY KEY (id)           |
| org\_id            | int(11)      | None                               |
| file\_name         | varchar(100) | None                               |
| file\_handler      | varchar(100) | Part of UNIQUE KEY (file\_handler) |
| download\_link     | varchar(100) | None                               |
| priority           | int(11)      | None                               |
| is\_active         | tinyint(1)   | None                               |
| is\_deleted        | tinyint(1)   | None                               |
| created\_on        | datetime     | None                               |
| created\_by        | int(11)      | None                               |
| modified\_by       | int(11)      | None                               |
| auto\_update\_time | timestamp    | None                               |

## Table: `org_migration_info`

| Column Name          | Data Type       | Index                         |
| -------------------- | --------------- | ----------------------------- |
| org\_id              | int(11)         | Part of PRIMARY KEY (org\_id) |
| destination\_cluster | enum('nightly', | None                          |

## Table: `organizations`

| Column Name        | Data Type    | Index                    |
| ------------------ | ------------ | ------------------------ |
| id                 | int(11)      | Part of PRIMARY KEY (id) |
| name               | varchar(255) | None                     |
| added\_on          | timestamp    | None                     |
| added\_by          | int(11)      | None                     |
| is\_active         | tinyint(1)   | None                     |
| cluster            | varchar(100) | None                     |
| auto\_update\_time | timestamp    | None                     |

## Table: `membercare_requests`

| Column Name        | Data Type    | Index                            |
| ------------------ | ------------ | -------------------------------- |
| id                 | int(11)      | Part of PRIMARY KEY (id)         |
| org\_id            | int(11)      | Part of KEY (org\_id)            |
| cluster            | varchar(100) | None                             |
| added\_on          | timestamp    | None                             |
| added\_by          | int(11)      | None                             |
| is\_active         | tinyint(1)   | None                             |
| auto\_update\_time | timestamp    | Part of KEY (auto\_update\_time) |

## Table: `campaigns`

| Column Name        | Data Type    | Index                            |
| ------------------ | ------------ | -------------------------------- |
| id                 | int(11)      | Part of PRIMARY KEY (id)         |
| org\_id            | int(11)      | Part of KEY (org\_id)            |
| name               | varchar(50)  | None                             |
| type               | varchar(20)  | None                             |
| cluster            | varchar(100) | None                             |
| added\_on          | timestamp    | None                             |
| added\_by          | int(11)      | None                             |
| is\_active         | tinyint(1)   | None                             |
| auto\_update\_time | timestamp    | Part of KEY (auto\_update\_time) |

## Table: `associates`

| Column Name        | Data Type    | Index                            |
| ------------------ | ------------ | -------------------------------- |
| id                 | int(11)      | Part of PRIMARY KEY (id)         |
| org\_id            | int(11)      | Part of KEY (org\_id)            |
| cluster            | varchar(100) | None                             |
| added\_on          | timestamp    | None                             |
| added\_by          | int(11)      | None                             |
| is\_active         | tinyint(1)   | None                             |
| auto\_update\_time | timestamp    | Part of KEY (auto\_update\_time) |

## Table: `programs`

| Column Name        | Data Type    | Index                         |
| ------------------ | ------------ | ----------------------------- |
| id                 | int(11)      | Part of PRIMARY KEY (id)      |
| org\_id            | int(11)      | Part of PRIMARY KEY (org\_id) |
| cluster            | varchar(100) | None                          |
| added\_on          | timestamp    | None                          |
| added\_by          | int(11)      | None                          |
| is\_active         | tinyint(1)   | None                          |
| auto\_update\_time | timestamp    | None                          |

## Table: `entities`

| Column Name        | Data Type                                                                     | Index                 |
| ------------------ | ----------------------------------------------------------------------------- | --------------------- |
| id                 | int(11)                                                                       | Part of KEY (id)      |
| org\_id            | int(11)                                                                       | Part of KEY (org\_id) |
| type               | enum('TILL','STORE','ZONE','CONCEPT','STR\_SERVER','ADMIN\_USER','ASSOCIATE') | Part of KEY (type)    |
| guid               | varchar(255)                                                                  | None                  |
| added\_on          | timestamp                                                                     | None                  |
| added\_by          | int(11)                                                                       | None                  |
| cluster            | varchar(100)                                                                  | None                  |
| is\_active         | tinyint(1)                                                                    | None                  |
| auto\_update\_time | timestamp                                                                     | None                  |

## Table: `audience_groups`

| Column Name        | Data Type    | Index                            |
| ------------------ | ------------ | -------------------------------- |
| id                 | int(11)      | Part of PRIMARY KEY (id)         |
| org\_id            | int(11)      | Part of KEY (org\_id)            |
| cluster            | varchar(100) | None                             |
| added\_on          | timestamp    | None                             |
| added\_by          | int(11)      | None                             |
| is\_active         | tinyint(1)   | None                             |
| auto\_update\_time | timestamp    | Part of KEY (auto\_update\_time) |

## Table: `whitelist_apis`

| Column Name  | Data Type    | Index                    |
| ------------ | ------------ | ------------------------ |
| id           | bigint(20)   | Part of PRIMARY KEY (id) |
| request\_url | varchar(100) | None                     |
| is\_valid    | tinyint(1)   | None                     |

## Table: `header_overrides`

| Column Name   | Data Type     | Index                     |
| ------------- | ------------- | ------------------------- |
| id            | bigint(20)    | Part of PRIMARY KEY (id)  |
| mapping\_id   | bigint(20)    | Part of KEY (mapping\_id) |
| header\_name  | varchar(255)  | None                      |
| header\_value | varchar(2048) | None                      |
| is\_valid     | tinyint(1)    | None                      |

## Table: `prefix_service_mapping`

| Column Name   | Data Type    | Index                    |
| ------------- | ------------ | ------------------------ |
| id            | bigint(20)   | Part of PRIMARY KEY (id) |
| prefix        | varchar(100) | None                     |
| service\_name | varchar(100) | None                     |
| service\_port | varchar(5)   | None                     |
| strip\_prefix | tinyint(1)   | None                     |
| is\_valid     | tinyint(1)   | None                     |
| is\_external  | tinyint(1)   | None                     |
| timeout       | int(11)      | None                     |

## Table: `merge_customer_summary`

| Column Name        | Data Type              | Index                            |
| ------------------ | ---------------------- | -------------------------------- |
| id                 | int(11)                | Part of PRIMARY KEY (id)         |
| org\_id            | int(11)                | Part of KEY (org\_id)            |
| from\_customer\_id | int(11)                | Part of KEY (from\_customer\_id) |
| to\_customer\_id   | int(11)                | Part of KEY (to\_customer\_id)   |
| merge\_request\_id | int(11)                | Part of KEY (merge\_request\_id) |
| merged\_by         | int(11)                | None                             |
| status             | enum('SUCCESS','FAIL') | None                             |
| error\_message     | mediumtext             | None                             |
| notes              | mediumtext             | None                             |

## Table: `subscription_import_files_history`

| Column Name            | Data Type           | Index                         |
| ---------------------- | ------------------- | ----------------------------- |
| id                     | int(11)             | Part of PRIMARY KEY (id)      |
| org\_id                | int(11)             | Part of PRIMARY KEY (org\_id) |
| import\_type           | enum('PDPA','NDNC') | None                          |
| params                 | mediumtext          | None                          |
| token                  | varchar(20)         | None                          |
| uploaded\_file\_handle | varchar(200)        | None                          |
| error\_file\_handle    | varchar(200)        | None                          |
| imported\_file\_handle | varchar(200)        | None                          |
| temp\_table\_name      | varchar(100)        | None                          |
| uploaded\_by           | int(11)             | None                          |
| uploaded\_on           | timestamp           | None                          |

## Table: `supported_tags`

| Column Name | Data Type              | Index                    |
| ----------- | ---------------------- | ------------------------ |
| id          | int(11)                | Part of PRIMARY KEY (id) |
| type        | enum('OPTIN','OPTOUT') | None                     |
| channel\_id | int(11)                | None                     |
| tag         | varchar(255)           | None                     |

## Table: `users_govt_status_log`

| Column Name        | Data Type            | Index                    |
| ------------------ | -------------------- | ------------------------ |
| id                 | bigint(20)           | Part of PRIMARY KEY (id) |
| target\_value      | varchar(100)         | None                     |
| target\_type       | enum('SMS','EMAIL')  | None                     |
| priority           | enum('TRANS','BULK') | None                     |
| scope\_id          | int(11)              | None                     |
| status             | tinyint(1)           | None                     |
| added\_by\_id      | int(11)              | None                     |
| source\_id         | int(11)              | None                     |
| source\_type       | varchar(100)         | None                     |
| added\_on          | datetime             | None                     |
| updated\_on        | datetime             | None                     |
| auto\_update\_time | timestamp            | None                     |

## Table: `gateway_param_values`

| Column Name        | Data Type   | Index                                  |
| ------------------ | ----------- | -------------------------------------- |
| id                 | int(11)     | Part of PRIMARY KEY (id)               |
| org\_id            | int(11)     | Part of KEY (org\_id)                  |
| org\_gateways\_id  | int(11)     | Part of UNIQUE KEY (org\_gateways\_id) |
| param\_key         | varchar(50) | Part of UNIQUE KEY (param\_key)        |
| param\_value       | varchar(50) | None                                   |
| auto\_update\_time | timestamp   | Part of KEY (auto\_update\_time)       |

## Table: `nsadmin_skipped_logs`

| Column Name       | Data Type  | Index                         |
| ----------------- | ---------- | ----------------------------- |
| id                | int(11)    | Part of PRIMARY KEY (id)      |
| user\_id          | int(11)    | None                          |
| org\_id           | int(11)    | Part of PRIMARY KEY (org\_id) |
| resolved\_tags    | mediumtext | None                          |
| last\_updated\_on | datetime   | None                          |

## Table: `email_params`

| Column Name         | Data Type                     | Index                    |
| ------------------- | ----------------------------- | ------------------------ |
| id                  | int(11)                       | Part of PRIMARY KEY (id) |
| subject             | varchar(255)                  | None                     |
| body                | mediumtext                    | None                     |
| email\_step\_number | varchar(100)                  | None                     |
| email\_unsub\_type  | enum('SIMPLE','PREFERENTIAL') | None                     |
| sender\_label       | varchar(255)                  | None                     |
| sender\_email       | varchar(255)                  | None                     |
| file\_service\_url  | varchar(255)                  | None                     |
| last\_updated\_on   | datetime                      | None                     |

## Table: `merge_status_log`

| Column Name                    | Data Type                      | Index                                      |
| ------------------------------ | ------------------------------ | ------------------------------------------ |
| id                             | int(11)                        | Part of PRIMARY KEY (id)                   |
| org\_id                        | int(11)                        | Part of KEY (org\_id)                      |
| user\_subscription\_status\_id | int(11)                        | None                                       |
| merge\_customer\_summary\_id   | int(11)                        | Part of KEY (merge\_customer\_summary\_id) |
| changed                        | enum('USERID','EXTERNALREFID') | None                                       |
| from                           | int(11)                        | None                                       |
| to                             | int(11)                        | None                                       |

## Table: `user_feedback`

| Column Name       | Data Type    | Index                         |
| ----------------- | ------------ | ----------------------------- |
| id                | int(11)      | Part of PRIMARY KEY (id)      |
| user\_id          | int(11)      | None                          |
| org\_id           | int(11)      | Part of PRIMARY KEY (org\_id) |
| reason            | varchar(255) | None                          |
| last\_updated\_on | datetime     | None                          |

## Table: `users_external_status`

| Column Name        | Data Type                                    | Index                              |
| ------------------ | -------------------------------------------- | ---------------------------------- |
| id                 | bigint(20)                                   | Part of PRIMARY KEY (id)           |
| target\_value      | varchar(100)                                 | Part of UNIQUE KEY (target\_value) |
| target\_type       | enum('SMS','EMAIL','WECHAT','ANDROID','IOS') | Part of UNIQUE KEY (target\_type)  |
| scope\_id          | int(11)                                      | Part of UNIQUE KEY (scope\_id)     |
| added\_on          | datetime                                     | None                               |
| updated\_on        | datetime                                     | None                               |
| auto\_update\_time | timestamp                                    | Part of KEY (auto\_update\_time)   |
| account\_id        | varchar(100)                                 | Part of UNIQUE KEY (account\_id)   |

## Table: `users_govt_status`

| Column Name             | Data Type            | Index                                        |
| ----------------------- | -------------------- | -------------------------------------------- |
| id                      | bigint(20)           | Part of PRIMARY KEY (id)                     |
| external\_reference\_id | bigint(20)           | Part of UNIQUE KEY (external\_reference\_id) |
| priority                | enum('TRANS','BULK') | Part of UNIQUE KEY (priority)                |
| status                  | tinyint(1)           | None                                         |
| added\_by\_id           | int(11)              | None                                         |
| added\_on               | datetime             | None                                         |
| auto\_update\_time      | timestamp            | None                                         |

## Table: `nsadmin_communication_logs`

| Column Name            | Data Type    | Index                         |
| ---------------------- | ------------ | ----------------------------- |
| id                     | int(11)      | Part of PRIMARY KEY (id)      |
| org\_id                | int(11)      | Part of PRIMARY KEY (org\_id) |
| user\_id               | int(11)      | None                          |
| subscription\_rule\_id | int(11)      | None                          |
| nsadmin\_id            | varchar(255) | None                          |
| resolved\_tags         | mediumtext   | None                          |
| last\_updated\_on      | datetime     | None                          |

## Table: `rule_param_mappings`

| Column Name | Data Type | Index                    |
| ----------- | --------- | ------------------------ |
| id          | int(11)   | Part of PRIMARY KEY (id) |
| rule\_id    | int(11)   | None                     |
| param\_id   | int(11)   | None                     |

## Table: `subscription_services`

| Column Name   | Data Type    | Index                    |
| ------------- | ------------ | ------------------------ |
| id            | int(11)      | Part of PRIMARY KEY (id) |
| service\_name | varchar(255) | None                     |

## Table: `campaign_veneno_tracker`

| Column Name        | Data Type | Index                    |
| ------------------ | --------- | ------------------------ |
| id                 | int(11)   | Part of PRIMARY KEY (id) |
| last\_inserted\_id | int(11)   | None                     |
| auto\_update\_time | timestamp | None                     |

## Table: `subscription_rules_history`

| Column Name            | Data Type                           | Index                         |
| ---------------------- | ----------------------------------- | ----------------------------- |
| id                     | int(11)                             | Part of PRIMARY KEY (id)      |
| subscription\_rule\_id | int(11)                             | None                          |
| org\_id                | int(11)                             | Part of PRIMARY KEY (org\_id) |
| channel\_id            | int(11)                             | None                          |
| type                   | enum('OPTIN','OPTOUT')              | None                          |
| subscription\_type     | enum('SINGLE','DOUBLE','CONFIRMED') | None                          |
| channel\_params\_types | varchar(255)                        | None                          |
| last\_updated\_on      | datetime                            | None                          |
| last\_updated\_by      | int(11)                             | None                          |

## Table: `sms_params`

| Column Name       | Data Type                  | Index                               |
| ----------------- | -------------------------- | ----------------------------------- |
| id                | int(11)                    | Part of PRIMARY KEY (id)            |
| body              | mediumtext                 | None                                |
| sms\_unsub\_type  | enum('MISSED\_CALL','SMS') | None                                |
| sms\_step\_number | varchar(100)               | None                                |
| optout\_number    | varchar(255)               | Part of UNIQUE KEY (optout\_number) |
| unsub\_text       | varchar(255)               | Part of UNIQUE KEY (unsub\_text)    |
| last\_updated\_on | datetime                   | None                                |

## Table: `sms_params_logs`

| Column Name       | Data Type                  | Index                    |
| ----------------- | -------------------------- | ------------------------ |
| id                | int(11)                    | Part of PRIMARY KEY (id) |
| sms\_params\_id   | int(11)                    | None                     |
| body              | mediumtext                 | None                     |
| sms\_unsub\_type  | enum('MISSED\_CALL','SMS') | None                     |
| sms\_step\_number | varchar(100)               | None                     |
| optout\_number    | varchar(255)               | None                     |
| unsub\_text       | varchar(255)               | None                     |
| last\_updated\_on | datetime                   | None                     |

## Table: `user_subscription_status_log`

| Column Name               | Data Type                  | Index                         |
| ------------------------- | -------------------------- | ----------------------------- |
| id                        | int(11)                    | Part of PRIMARY KEY (id)      |
| user\_subscription\_id    | int(11)                    | None                          |
| org\_id                   | int(11)                    | Part of PRIMARY KEY (org\_id) |
| user\_id                  | int(11)                    | None                          |
| type                      | enum('OPTIN','OPTOUT')     | None                          |
| channel\_id               | int(11)                    | None                          |
| priority                  | enum('BULK','TRANS','ALL') | None                          |
| subscription\_service\_id | int(11)                    | None                          |
| scope\_id                 | int(11)                    | None                          |
| external\_reference\_id   | int(11)                    | None                          |
| added\_ip                 | varchar(255)               | None                          |
| added\_by\_user\_source   | varchar(255)               | None                          |
| added\_by\_id             | int(11)                    | None                          |
| last\_updated\_on         | datetime                   | None                          |
| auto\_update\_time        | timestamp                  | None                          |

## Table: `user_subscription_status`

| Column Name               | Data Type                  | Index                                 |
| ------------------------- | -------------------------- | ------------------------------------- |
| id                        | int(11)                    | Part of PRIMARY KEY (id)              |
| org\_id                   | int(11)                    | Part of KEY (org\_id)                 |
| user\_id                  | int(11)                    | Part of UNIQUE KEY (user\_id)         |
| type                      | enum('OPTIN','OPTOUT')     | None                                  |
| channel\_id               | int(11)                    | Part of UNIQUE KEY (channel\_id)      |
| priority                  | enum('BULK','TRANS','ALL') | Part of UNIQUE KEY (priority)         |
| subscription\_service\_id | int(11)                    | None                                  |
| scope\_id                 | int(11)                    | None                                  |
| external\_reference\_id   | int(11)                    | Part of KEY (external\_reference\_id) |
| added\_ip                 | varchar(255)               | None                                  |
| added\_by\_user\_source   | varchar(255)               | None                                  |
| added\_by\_id             | int(11)                    | None                                  |
| last\_updated\_on         | datetime                   | None                                  |
| auto\_update\_time        | timestamp                  | Part of KEY (auto\_update\_time)      |

## Table: `user_campaign_subscriptions`

| Column Name        | Data Type              | Index                            |
| ------------------ | ---------------------- | -------------------------------- |
| id                 | int(11)                | Part of PRIMARY KEY (id)         |
| org\_id            | int(11)                | Part of KEY (org\_id)            |
| user\_id           | int(11)                | Part of UNIQUE KEY (user\_id)    |
| type               | enum('OPTIN','OPTOUT') | None                             |
| campaign\_id       | int(11)                | Part of KEY (campaign\_id)       |
| communication\_id  | int(11)                | Part of KEY (communication\_id)  |
| last\_updated\_on  | datetime               | None                             |
| auto\_update\_time | timestamp              | Part of KEY (auto\_update\_time) |

## Table: `supported_channels`

| Column Name | Data Type    | Index                    |
| ----------- | ------------ | ------------------------ |
| id          | int(11)      | Part of PRIMARY KEY (id) |
| channel     | varchar(255) | None                     |

## Table: `org_param_values`

| Column Name        | Data Type   | Index                            |
| ------------------ | ----------- | -------------------------------- |
| id                 | int(11)     | Part of PRIMARY KEY (id)         |
| org\_id            | int(11)     | Part of KEY (org\_id)            |
| param\_key         | varchar(50) | Part of UNIQUE KEY (param\_key)  |
| param\_value       | varchar(50) | None                             |
| auto\_update\_time | timestamp   | Part of KEY (auto\_update\_time) |

## Table: `subscription_scopes`

| Column Name   | Data Type                            | Index                    |
| ------------- | ------------------------------------ | ------------------------ |
| id            | int(11)                              | Part of PRIMARY KEY (id) |
| scope         | enum('USER','SYSTEM','GOVT')         | None                     |
| sub\_scope    | enum('NONE','NDNC','BOUNCED','PDPA') | None                     |
| priority      | int(11)                              | None                     |
| created\_time | datetime                             | None                     |

## Table: `default_content`

| Column Name        | Data Type                           | Index                    |
| ------------------ | ----------------------------------- | ------------------------ |
| id                 | int(11)                             | Part of PRIMARY KEY (id) |
| channel\_id        | int(11)                             | None                     |
| type               | enum('OPTIN','OPTOUT')              | None                     |
| subscription\_type | enum('SINGLE','DOUBLE','CONFIRMED') | None                     |
| file\_service\_url | varchar(255)                        | None                     |

## Table: `org_gateways_mapping`

| Column Name        | Data Type   | Index                              |
| ------------------ | ----------- | ---------------------------------- |
| id                 | int(11)     | Part of PRIMARY KEY (id)           |
| org\_id            | int(11)     | Part of KEY (org\_id)              |
| gateway\_name      | varchar(50) | Part of UNIQUE KEY (gateway\_name) |
| auto\_update\_time | timestamp   | Part of KEY (auto\_update\_time)   |

## Table: `subscription_rules`

| Column Name            | Data Type                           | Index                          |
| ---------------------- | ----------------------------------- | ------------------------------ |
| rule\_id               | int(11)                             | Part of PRIMARY KEY (rule\_id) |
| org\_id                | int(11)                             | Part of KEY (org\_id)          |
| channel\_id            | int(11)                             | None                           |
| type                   | enum('OPTIN','OPTOUT')              | None                           |
| subscription\_type     | enum('SINGLE','DOUBLE','CONFIRMED') | None                           |
| channel\_params\_types | varchar(255)                        | None                           |
| org\_external\_status  | enum('NDNC','PDPA','NOT\_SET')      | None                           |
| last\_updated\_on      | datetime                            | None                           |
| last\_updated\_by      | int(11)                             | None                           |

## Table: `email_params_logs`

| Column Name         | Data Type                     | Index                    |
| ------------------- | ----------------------------- | ------------------------ |
| id                  | int(11)                       | Part of PRIMARY KEY (id) |
| email\_params\_id   | int(11)                       | None                     |
| subject             | varchar(255)                  | None                     |
| body                | mediumtext                    | None                     |
| email\_step\_number | varchar(100)                  | None                     |
| email\_unsub\_type  | enum('SIMPLE','PREFERENTIAL') | None                     |
| sender\_label       | varchar(255)                  | None                     |
| sender\_email       | varchar(255)                  | None                     |
| file\_service\_url  | varchar(255)                  | None                     |
| last\_updated\_on   | datetime                      | None                     |

## Table: `notifications`

| Column Name         | Data Type                                              | Index                    |
| ------------------- | ------------------------------------------------------ | ------------------------ |
| id                  | int(11)                                                | Part of PRIMARY KEY (id) |
| org\_id             | int(11)                                                | None                     |
| entity\_id          | mediumtext                                             | None                     |
| entity\_type        | varchar(50)                                            | None                     |
| communication\_type | enum('SMS','EMAIL')                                    | None                     |
| subject             | varchar(50)                                            | None                     |
| message             | mediumtext                                             | None                     |
| params              | varchar(250)                                           | None                     |
| status              | enum('OPEN','RUNNING','EXECUTING','EXECUTED','CLOSED') | None                     |
| last\_updated\_by   | int(11)                                                | None                     |
| last\_updated\_on   | datetime                                               | None                     |

## Table: `cron_migration_details`

| Column Name            | Data Type | Index                         |
| ---------------------- | --------- | ----------------------------- |
| id                     | int(11)   | Part of PRIMARY KEY (id)      |
| org\_id                | int(11)   | Part of PRIMARY KEY (org\_id) |
| v1\_campaign\_cron\_id | int(11)   | None                          |
| v1\_health\_cron\_id   | int(11)   | None                          |
| v2\_cron\_id           | int(11)   | None                          |
| last\_updated          | timestamp | None                          |

## Table: `cron_task_logs`

| Column Name         | Data Type               | Index                             |
| ------------------- | ----------------------- | --------------------------------- |
| id                  | int(11)                 | Part of PRIMARY KEY (id)          |
| ref\_id             | int(11)                 | Part of KEY (ref\_id)             |
| description         | varchar(250)            | None                              |
| status              | enum('SUCCESS','ERROR') | Part of KEY (status)              |
| scheduled\_time     | datetime                | Part of KEY (scheduled\_time)     |
| last\_updated\_time | datetime                | Part of KEY (last\_updated\_time) |
| org\_id             | int(11)                 | Part of PRIMARY KEY (org\_id)     |

## Table: `notification_parts`

| Column Name       | Data Type    | Index                    |
| ----------------- | ------------ | ------------------------ |
| id                | int(11)      | Part of PRIMARY KEY (id) |
| code              | varchar(50)  | None                     |
| name              | varchar(255) | None                     |
| supported\_type   | varchar(20)  | None                     |
| last\_updated\_by | int(11)      | None                     |
| last\_updated\_on | datetime     | None                     |

## Table: `communications`

| Column Name       | Data Type                                   | Index                          |
| ----------------- | ------------------------------------------- | ------------------------------ |
| id                | int(11)                                     | Part of KEY (id)               |
| type              | enum('EMAIL','SMS')                         | None                           |
| subject           | varchar(50)                                 | None                           |
| message           | longtext                                    | None                           |
| file\_id          | int(11)                                     | None                           |
| admin\_user\_id   | int(11)                                     | None                           |
| mobile            | varchar(15)                                 | None                           |
| email             | varchar(50)                                 | None                           |
| org\_id           | int(11)                                     | Part of KEY (org\_id)          |
| notification\_id  | int(11)                                     | Part of KEY (notification\_id) |
| status            | enum('OPEN','RUNNING','EXECUTED','BOUNCED') | Part of KEY (status)           |
| nsadmin\_id       | int(11)                                     | None                           |
| last\_updated\_by | int(11)                                     | None                           |
| last\_updated\_on | datetime                                    | None                           |

## Table: `stats`

| Column Name | Data Type                     | Index                    |
| ----------- | ----------------------------- | ------------------------ |
| id          | int(11)                       | Part of PRIMARY KEY (id) |
| name        | varchar(255)                  | None                     |
| type        | enum('SHARD','ORG','GENERAL') | None                     |
| is\_active  | tinyint(1)                    | None                     |
| added\_on   | timestamp                     | None                     |

## Table: `org_shard_mapping`

| Column Name        | Data Type  | Index                           |
| ------------------ | ---------- | ------------------------------- |
| id                 | int(11)    | Part of PRIMARY KEY (id)        |
| org\_id            | int(11)    | Part of UNIQUE KEY (org\_id)    |
| policy\_id         | int(11)    | Part of UNIQUE KEY (policy\_id) |
| shard\_id          | int(11)    | None                            |
| is\_active         | tinyint(1) | Part of UNIQUE KEY (is\_active) |
| added\_on          | timestamp  | None                            |
| auto\_update\_time | timestamp  | None                            |

## Table: `service_type`

| Column Name        | Data Type    | Index                     |
| ------------------ | ------------ | ------------------------- |
| id                 | int(11)      | Part of PRIMARY KEY (id)  |
| name               | varchar(255) | Part of UNIQUE KEY (name) |
| added\_on          | timestamp    | None                      |
| is\_active         | tinyint(1)   | None                      |
| auto\_update\_time | timestamp    | None                      |

## Table: `shard`

| Column Name        | Data Type    | Index                           |
| ------------------ | ------------ | ------------------------------- |
| id                 | int(11)      | Part of PRIMARY KEY (id)        |
| policy\_id         | int(11)      | Part of UNIQUE KEY (policy\_id) |
| name               | varchar(100) | Part of UNIQUE KEY (name)       |
| added\_on          | timestamp    | None                            |
| is\_active         | tinyint(1)   | None                            |
| is\_dedicated      | tinyint(1)   | None                            |
| auto\_update\_time | timestamp    | None                            |

## Table: `service_instance`

| Column Name | Data Type    | Index                    |
| ----------- | ------------ | ------------------------ |
| id          | int(11)      | Part of PRIMARY KEY (id) |
| service\_id | int(11)      | None                     |
| label       | varchar(255) | None                     |

## Table: `stats_data`

| Column Name | Data Type           | Index                    |
| ----------- | ------------------- | ------------------------ |
| id          | int(11)             | Part of PRIMARY KEY (id) |
| stat\_id    | int(11)             | None                     |
| service\_id | int(11)             | None                     |
| type        | enum('SHARD','ORG') | None                     |
| ref\_id     | int(11)             | None                     |
| value       | double              | None                     |
| added\_on   | timestamp           | None                     |

## Table: `service`

| Column Name        | Data Type            | Index                     |
| ------------------ | -------------------- | ------------------------- |
| id                 | int(11)              | Part of PRIMARY KEY (id)  |
| name               | varchar(255)         | Part of UNIQUE KEY (name) |
| description        | varchar(255)         | None                      |
| meta\_type         | enum('SERVICE','DB') | None                      |
| type\_id           | int(11)              | None                      |
| added\_on          | timestamp            | None                      |
| is\_sharded        | tinyint(1)           | None                      |
| shard\_count       | int(11)              | None                      |
| is\_multiple       | tinyint(1)           | None                      |
| instance\_count    | int(11)              | None                      |
| policy\_id         | int(11)              | None                      |
| is\_active         | tinyint(1)           | None                      |
| auto\_update\_time | timestamp            | None                      |

## Table: `shard_policy`

| Column Name  | Data Type    | Index                     |
| ------------ | ------------ | ------------------------- |
| id           | int(11)      | Part of PRIMARY KEY (id)  |
| name         | varchar(255) | Part of UNIQUE KEY (name) |
| added\_on    | timestamp    | None                      |
| is\_active   | tinyint(1)   | None                      |
| is\_sharded  | tinyint(1)   | None                      |
| shard\_count | int(11)      | None                      |

## Table: `bill_dump_import_attributes_temp`

| Column Name        | Data Type                               | Index                        |
| ------------------ | --------------------------------------- | ---------------------------- |
| id                 | int(11)                                 | Part of PRIMARY KEY (id)     |
| org\_id            | int(11)                                 | Part of UNIQUE KEY (org\_id) |
| name               | varchar(50)                             | Part of UNIQUE KEY (name)    |
| extraction\_type   | enum('UPLOAD','POS','REGEX','USERDEF')  | None                         |
| extraction\_params | mediumtext                              | None                         |
| data\_type         | enum('String','Int','Boolean','Double') | None                         |

## Table: `bill_dump_import_bills`

| Column Name           | Data Type                                 | Index                            |
| --------------------- | ----------------------------------------- | -------------------------------- |
| id                    | bigint(20)                                | Part of PRIMARY KEY (id)         |
| org\_id               | bigint(20)                                | Part of KEY (org\_id)            |
| bill\_number          | varchar(50)                               | Part of KEY (bill\_number)       |
| date                  | datetime                                  | Part of KEY (date)               |
| bill\_amount          | float                                     | None                             |
| entered\_by           | bigint(20)                                | Part of KEY (entered\_by)        |
| processed             | datetime                                  | None                             |
| loyalty\_log\_id\_ref | bigint(20)                                | None                             |
| external\_id\_used    | mediumtext                                | None                             |
| customer\_int         | bigint(20)                                | None                             |
| customer\_varchar     | varchar(50)                               | None                             |
| customer\_flag        | enum('VALID','INVALID','OUTLIER','FRAUD') | None                             |
| auto\_update\_time    | timestamp                                 | Part of KEY (auto\_update\_time) |

## Table: `bill_dump_import_bill_lineitems`

| Column Name                       | Data Type   | Index                                              |
| --------------------------------- | ----------- | -------------------------------------------------- |
| id                                | bigint(20)  | Part of PRIMARY KEY (id)                           |
| org\_id                           | bigint(20)  | Part of KEY (org\_id)                              |
| bill\_dump\_import\_bills\_id     | bigint(20)  | Part of UNIQUE KEY (bill\_dump\_import\_bills\_id) |
| serial                            | int(11)     | None                                               |
| item\_code                        | varchar(20) | None                                               |
| description                       | mediumtext  | None                                               |
| mrp                               | double      | None                                               |
| discount\_value                   | double      | None                                               |
| amount                            | double      | None                                               |
| qty                               | int(11)     | None                                               |
| entered\_by                       | bigint(20)  | Part of UNIQUE KEY (entered\_by)                   |
| processed                         | datetime    | None                                               |
| loyalty\_bill\_lineitems\_id\_ref | bigint(20)  | None                                               |
| unique\_id                        | bigint(20)  | Part of UNIQUE KEY (unique\_id)                    |
| auto\_update\_time                | timestamp   | Part of KEY (auto\_update\_time)                   |

## Table: `bill_dump_import_attributes`

| Column Name        | Data Type                               | Index                        |
| ------------------ | --------------------------------------- | ---------------------------- |
| id                 | int(11)                                 | Part of PRIMARY KEY (id)     |
| org\_id            | int(11)                                 | Part of UNIQUE KEY (org\_id) |
| name               | varchar(50)                             | Part of UNIQUE KEY (name)    |
| extraction\_type   | enum('UPLOAD','POS','REGEX','USERDEF')  | None                         |
| extraction\_params | mediumtext                              | None                         |
| data\_type         | enum('String','Int','Boolean','Double') | None                         |

## Table: `bill_dump_import_bill_lineitems_attribute_values`

| Column Name                            | Data Type   | Index                                                       |
| -------------------------------------- | ----------- | ----------------------------------------------------------- |
| id                                     | bigint(20)  | Part of PRIMARY KEY (id)                                    |
| org\_id                                | int(11)     | Part of KEY (org\_id)                                       |
| bill\_dump\_import\_bill\_lineitem\_id | bigint(20)  | Part of UNIQUE KEY (bill\_dump\_import\_bill\_lineitem\_id) |
| bill\_dump\_import\_attribute\_id      | int(11)     | Part of KEY (bill\_dump\_import\_attribute\_id)             |
| bill\_dump\_import\_attribute\_value   | longtext    | None                                                        |
| bill\_dump\_import\_attribute\_name    | varchar(40) | None                                                        |
| auto\_update\_time                     | timestamp   | Part of KEY (auto\_update\_time)                            |

## Table: `event_token_config`

| Column Name         | Data Type    | Index                    |
| ------------------- | ------------ | ------------------------ |
| id                  | int(11)      | Part of PRIMARY KEY (id) |
| resource            | varchar(100) | None                     |
| method              | varchar(100) | None                     |
| http\_method        | varchar(11)  | None                     |
| version             | varchar(100) | None                     |
| module              | varchar(100) | None                     |
| details             | varchar(255) | None                     |
| token\_value        | int(11)      | None                     |
| last\_changed\_date | datetime     | None                     |
| is\_active          | tinyint(1)   | None                     |

## Table: `token_summary`

| Column Name | Data Type  | Index                        |
| ----------- | ---------- | ---------------------------- |
| id          | int(11)    | Part of PRIMARY KEY (id)     |
| org\_id     | int(11)    | Part of UNIQUE KEY (org\_id) |
| allotted    | int(11)    | None                         |
| consumed    | int(11)    | None                         |
| expired     | int(11)    | None                         |
| is\_active  | tinyint(1) | None                         |

## Table: `token_allottment_log`

| Column Name        | Data Type | Index                    |
| ------------------ | --------- | ------------------------ |
| id                 | int(11)   | Part of PRIMARY KEY (id) |
| org\_id            | int(11)   | None                     |
| allocated\_date    | datetime  | None                     |
| expiry\_date       | datetime  | None                     |
| value              | int(11)   | None                     |
| created\_on        | datetime  | None                     |
| created\_by        | int(11)   | None                     |
| last\_modified\_on | datetime  | None                     |
| last\_modified\_by | int(11)   | None                     |

## Table: `token_consumption_log`

| Column Name | Data Type | Index                    |
| ----------- | --------- | ------------------------ |
| id          | int(11)   | Part of PRIMARY KEY (id) |
| org\_id     | int(11)   | Part of KEY (org\_id)    |
| user\_id    | int(11)   | None                     |
| start\_date | datetime  | None                     |
| end\_date   | datetime  | None                     |
| value       | int(11)   | None                     |

## Table: `rate_limiting_config`

| Column Name        | Data Type                                                                              | Index                    |
| ------------------ | -------------------------------------------------------------------------------------- | ------------------------ |
| id                 | int(11)                                                                                | Part of PRIMARY KEY (id) |
| org\_id            | int(11)                                                                                | None                     |
| module             | enum('API')                                                                            | None                     |
| context\_type      | enum('TILL','ADMIN\_USER','STR\_SERVER','ASSOCIATE','STORE','ZONE','CLIENT\_IP','ORG') | None                     |
| context\_value     | varchar(100)                                                                           | None                     |
| unit               | enum('DAILY','HOURLY','MINUTE')                                                        | None                     |
| value              | int(11)                                                                                | None                     |
| is\_active         | tinyint(1)                                                                             | None                     |
| created\_on        | datetime                                                                               | None                     |
| created\_by        | int(11)                                                                                | None                     |
| last\_modified\_on | datetime                                                                               | None                     |
| last\_modified\_by | int(11)                                                                                | None                     |
| auto\_update\_time | timestamp                                                                              | None                     |

## Table: `rules`

| Column Name        | Data Type   | Index                    |
| ------------------ | ----------- | ------------------------ |
| id                 | int(11)     | Part of PRIMARY KEY (id) |
| type               | varchar(45) | Part of KEY (type)       |
| value              | varchar(45) | None                     |
| api\_request\_type | varchar(45) | None                     |
| is\_active         | tinyint(1)  | Part of KEY (is\_active) |

## Table: `rate_limit_hit`

| Column Name        | Data Type                                | Index                            |
| ------------------ | ---------------------------------------- | -------------------------------- |
| id                 | int(11)                                  | Part of PRIMARY KEY (id)         |
| org\_id            | bigint(20)                               | Part of KEY (org\_id)            |
| loggable\_user\_id | int(11)                                  | Part of KEY (loggable\_user\_id) |
| resource           | varchar(100)                             | None                             |
| method             | varchar(100)                             | None                             |
| start\_time        | datetime                                 | None                             |
| end\_time          | datetime                                 | None                             |
| client\_ip         | bigint(20)                               | None                             |
| api\_version       | varchar(10)                              | None                             |
| query\_params      | longtext                                 | None                             |
| http\_method       | enum('GET','POST','HEAD','PUT','DELETE') | None                             |
| user\_agent\_id    | int(11)                                  | None                             |
| status\_codes      | mediumtext                               | None                             |
| request\_id        | mediumtext                               | None                             |
| server\_ip         | bigint(20)                               | None                             |
| error\_message     | text                                     | None                             |

## Table: `IF`

| Column Name | Data Type    | Index                     |
| ----------- | ------------ | ------------------------- |
| id          | int(11)      | Part of UNIQUE KEY (id)   |
| uuId        | varchar(250) | Part of UNIQUE KEY (uuId) |
| is\_active  | int(1)       | None                      |

## Table: `IF`

| Column Name | Data Type | Index |
| ----------- | --------- | ----- |
| id          | int(11)   | None  |
| operation   | text      | None  |

## Table: `org_channel_accounts`

| Column Name         | Data Type    | Index                                    |
| ------------------- | ------------ | ---------------------------------------- |
| id                  | int(11)      | Part of PRIMARY KEY (id)                 |
| channel\_id         | int(11)      | Part of UNIQUE KEY (channel\_id)         |
| account\_name       | varchar(100) | Part of UNIQUE KEY (account\_name)       |
| org\_id             | int(11)      | Part of UNIQUE KEY (org\_id)             |
| added\_by           | int(11)      | None                                     |
| added\_on           | datetime     | None                                     |
| updated\_by         | int(11)      | None                                     |
| updated\_on         | datetime     | None                                     |
| uuid                | varchar(100) | Part of UNIQUE KEY (uuid)                |
| to\_mirror          | tinyint(1)   | None                                     |
| source\_account\_id | varchar(100) | Part of UNIQUE KEY (source\_account\_id) |
| auto\_update\_time  | timestamp    | None                                     |
| is\_active          | tinyint(1)   | None                                     |

## Table: `org_base_tiny_url`

| Column Name       | Data Type    | Index                         |
| ----------------- | ------------ | ----------------------------- |
| id                | int(20)      | Part of PRIMARY KEY (id)      |
| org\_id           | int(20)      | Part of PRIMARY KEY (org\_id) |
| base\_tiny\_url   | varchar(500) | None                          |
| last\_updated\_by | int(11)      | None                          |
| last\_updated\_on | timestamp    | None                          |

## Table: `cf_transformer_error_logs`

| Column Name        | Data Type   | Index                            |
| ------------------ | ----------- | -------------------------------- |
| id                 | bigint(20)  | Part of PRIMARY KEY (id)         |
| org\_id            | bigint(20)  | Part of KEY (org\_id)            |
| cf\_id             | varchar(50) | Part of KEY (cf\_id)             |
| assoc\_id          | bigint(20)  | None                             |
| error\_log         | mediumtext  | None                             |
| auto\_update\_time | timestamp   | Part of KEY (auto\_update\_time) |

## Table: `channel_config_keys`

| Column Name        | Data Type                             | Index                    |
| ------------------ | ------------------------------------- | ------------------------ |
| id                 | int(11)                               | Part of PRIMARY KEY (id) |
| channel\_id        | int(11)                               | None                     |
| key                | varchar(255)                          | None                     |
| label              | varchar(255)                          | None                     |
| key\_type          | enum('string','bool','list','number') | None                     |
| default\_value     | varchar(400)                          | None                     |
| display\_order     | int(3)                                | None                     |
| added\_by          | int(11)                               | None                     |
| added\_on          | datetime                              | None                     |
| updated\_by        | int(11)                               | None                     |
| updated\_on        | datetime                              | None                     |
| auto\_update\_time | timestamp                             | None                     |

## Table: `extended_fields`

| Column Name        | Data Type                                                                                                                                                       | Index                             |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------- |
| id                 | int(11)                                                                                                                                                         | Part of PRIMARY KEY (id)          |
| name               | varchar(100)                                                                                                                                                    | Part of UNIQUE KEY (name)         |
| entity\_type       | enum('customer','transaction','lineitem','profile','lead','company','card','usergroup2')                                                                        | Part of UNIQUE KEY (entity\_type) |
| label              | varchar(100)                                                                                                                                                    | None                              |
| datatype           | enum('integer','string','standard\_string','double','datetime','standard\_enum','custom\_enum','associate\_user','country','currency','language','org\_entity', | None                              |
| created\_on        | datetime                                                                                                                                                        | None                              |
| created\_by        | int(11)                                                                                                                                                         | None                              |
| modified\_on       | datetime                                                                                                                                                        | None                              |
| modified\_by       | int(11)                                                                                                                                                         | None                              |
| vertical\_id       | int(11)                                                                                                                                                         | None                              |
| auto\_update\_time | timestamp                                                                                                                                                       | None                              |
| parent\_id         | tinyint(1)                                                                                                                                                      | None                              |

## Table: `currency_ratio_inr`

| Column Name        | Data Type     | Index                            |
| ------------------ | ------------- | -------------------------------- |
| id                 | int(11)       | Part of PRIMARY KEY (id)         |
| currency\_id       | int(10)       | Part of KEY (currency\_id)       |
| ratio              | decimal(12,3) | None                             |
| start\_date        | date          | None                             |
| end\_date          | date          | None                             |
| is\_active         | tinyint(1)    | Part of KEY (is\_active)         |
| auto\_update\_time | timestamp     | Part of KEY (auto\_update\_time) |

## Table: `cf_transformer_stats`

| Column Name        | Data Type   | Index                        |
| ------------------ | ----------- | ---------------------------- |
| id                 | bigint(20)  | Part of PRIMARY KEY (id)     |
| date               | date        | Part of UNIQUE KEY (date)    |
| org\_id            | bigint(20)  | Part of UNIQUE KEY (org\_id) |
| cf\_id             | varchar(50) | Part of UNIQUE KEY (cf\_id)  |
| count\_picked      | bigint(20)  | None                         |
| count\_transformed | bigint(20)  | None                         |
| count\_saved       | bigint(20)  | None                         |

## Table: `cf_transform_scheduler`

| Column Name                | Data Type                                | Index                    |
| -------------------------- | ---------------------------------------- | ------------------------ |
| id                         | int(11)                                  | Part of PRIMARY KEY (id) |
| cf\_Id                     | int(11)                                  | None                     |
| status                     | enum('COMPLETE','IN\_PROGRESS','FAILED') | None                     |
| start\_time                | datetime                                 | None                     |
| end\_time                  | datetime                                 | None                     |
| total\_count               | int(11)                                  | None                     |
| org\_id                    | int(11)                                  | None                     |
| processed\_count           | int(11)                                  | None                     |
| latest\_cfv\_id\_processed | bigint(20)                               | None                     |
| auto\_update\_time         | timestamp                                | None                     |

## Table: `cf_transform_scheduler_stats`

| Column Name        | Data Type  | Index                    |
| ------------------ | ---------- | ------------------------ |
| id                 | bigint(20) | Part of PRIMARY KEY (id) |
| org\_id            | int(11)    | None                     |
| cf\_id             | int(11)    | None                     |
| time               | datetime   | Part of KEY (time)       |
| count\_picked      | bigint(20) | None                     |
| count\_transformed | bigint(20) | None                     |
| count\_processed   | bigint(20) | None                     |

## Table: `verticals`

| Column Name | Data Type    | Index                    |
| ----------- | ------------ | ------------------------ |
| id          | int(11)      | Part of PRIMARY KEY (id) |
| name        | varchar(100) | None                     |

## Table: `extended_fields_standard_enum_values`

| Column Name        | Data Type    | Index                       |
| ------------------ | ------------ | --------------------------- |
| id                 | int(11)      | Part of PRIMARY KEY (id)    |
| ef\_id             | int(11)      | Part of UNIQUE KEY (ef\_id) |
| value              | varchar(100) | Part of UNIQUE KEY (value)  |
| created\_by        | int(11)      | None                        |
| created\_on        | datetime     | None                        |
| modified\_by       | int(11)      | None                        |
| modified\_on       | datetime     | None                        |
| auto\_update\_time | timestamp    | None                        |

## Table: `extended_field_config`

| Column Name                     | Data Type    | Index                         |
| ------------------------------- | ------------ | ----------------------------- |
| id                              | int(11)      | Part of PRIMARY KEY (id)      |
| org\_id                         | int(11)      | Part of PRIMARY KEY (org\_id) |
| extended\_field\_id             | int(11)      | None                          |
| created\_on                     | datetime     | None                          |
| created\_by                     | int(11)      | None                          |
| modified\_on                    | datetime     | None                          |
| modified\_by                    | int(11)      | None                          |
| auto\_update\_time              | timestamp    | None                          |
| hide\_display                   | tinyint(1)   | None                          |
| is\_mandatory                   | tinyint(1)   | None                          |
| is\_updatable                   | tinyint(1)   | None                          |
| position                        | int(11)      | None                          |
| default\_value                  | varchar(200) | None                          |
| is\_compute\_enabled            | tinyint(1)   | None                          |
| function\_id                    | int(11)      | None                          |
| is\_audit\_trail\_enabled       | tinyint(1)   | None                          |
| is\_pii\_data                   | tinyint(1)   | None                          |
| is\_psi\_data                   | tinyint(1)   | None                          |
| reject\_txn\_on\_invalid\_value | tinyint(1)   | None                          |

## Table: `campaign_v2_org_status`

| Column Name        | Data Type  | Index                         |
| ------------------ | ---------- | ----------------------------- |
| org\_id            | int(11)    | Part of PRIMARY KEY (org\_id) |
| status             | tinyint(1) | None                          |
| auto\_update\_time | timestamp  | None                          |

## Table: `bulk_job_status`

| Column Name        | Data Type    | Index                               |
| ------------------ | ------------ | ----------------------------------- |
| id                 | int(11)      | Part of PRIMARY KEY (id)            |
| activity\_name     | varchar(255) | Part of UNIQUE KEY (activity\_name) |
| last\_run\_time    | datetime     | None                                |
| auto\_update\_time | timestamp    | None                                |

## Table: `extended_field_function_template_fields`

| Column Name         | Data Type    | Index                             |
| ------------------- | ------------ | --------------------------------- |
| id                  | int(11)      | Part of PRIMARY KEY (id)          |
| field\_id           | int(11)      | Part of UNIQUE KEY (field\_id)    |
| template\_id        | int(11)      | None                              |
| field\_value        | varchar(255) | None                              |
| is\_active          | tinyint(1)   | None                              |
| entity\_type        | varchar(50)  | None                              |
| function\_id        | int(11)      | Part of UNIQUE KEY (function\_id) |
| org\_id             | int(11)      | Part of UNIQUE KEY (org\_id)      |
| auto\_update\_time  | timestamp    | None                              |
| extended\_field\_id | int(11)      | None                              |

## Table: `file_processing_status`

| Column Name   | Data Type                                    | Index                    |
| ------------- | -------------------------------------------- | ------------------------ |
| id            | int(11)                                      | Part of PRIMARY KEY (id) |
| org\_id       | int(11)                                      | Part of KEY (org\_id)    |
| acc\_id       | int(11)                                      | Part of KEY (acc\_id)    |
| key\_id       | int(11)                                      | Part of KEY (key\_id)    |
| value\_id     | int(11)                                      | Part of KEY (value\_id)  |
| file\_name    | varchar(100)                                 | Part of KEY (file\_name) |
| added\_on     | datetime                                     | None                     |
| last\_updated | datetime                                     | None                     |
| status        | enum('NONE','PROCESSING','FINISHED','ERROR') | None                     |

## Table: `org_meta_data`

| Column Name        | Data Type     | Index                      |
| ------------------ | ------------- | -------------------------- |
| id                 | int(11)       | Part of UNIQUE KEY (id)    |
| org\_id            | int(11)       | Part of KEY (org\_id)      |
| vertical\_id       | int(11)       | Part of KEY (vertical\_id) |
| finance\_id        | varchar(250)  | None                       |
| org\_category      | enum(         | None                       |
| cs\_category       | enum("A",     | None                       |
| brand\_type        | varchar(250)  | None                       |
| business\_unit     | enum("India", | None                       |
| enable\_products   | varchar(250)  | None                       |
| auto\_update\_time | timestamp     | None                       |

## Table: `product_config_key_values`

| Column Name | Data Type                                            | Index                    |
| ----------- | ---------------------------------------------------- | ------------------------ |
| id          | int(11)                                              | Part of PRIMARY KEY (id) |
| key\_id     | int(11)                                              | Part of KEY (key\_id)    |
| org\_id     | int(11)                                              | Part of KEY (org\_id)    |
| entity\_id  | int(11)                                              | Part of KEY (entity\_id) |
| scope       | enum('STORE','ZONE','ORG','TILL','STR\_SERVER','OU') | Part of KEY (scope)      |
| value       | mediumtext                                           | None                     |
| updated\_by | int(11)                                              | None                     |
| updated\_on | datetime                                             | None                     |
| is\_valid   | tinyint(1)                                           | Part of KEY (is\_valid)  |
| parent\_id  | int(11)                                              | Part of KEY (parent\_id) |

## Table: `shipping_address_type`

| Column Name        | Data Type    | Index                            |
| ------------------ | ------------ | -------------------------------- |
| id                 | int(11)      | Part of PRIMARY KEY (id)         |
| org\_id            | int(11)      | Part of KEY (org\_id)            |
| name               | varchar(100) | Part of KEY (name)               |
| description        | varchar(200) | None                             |
| auto\_update\_time | timestamp    | Part of KEY (auto\_update\_time) |

## Table: `extended_field_functions`

| Column Name | Data Type    | Index                    |
| ----------- | ------------ | ------------------------ |
| id          | int(11)      | Part of PRIMARY KEY (id) |
| name        | varchar(255) | None                     |
| label       | varchar(255) | None                     |
| type        | varchar(255) | None                     |
| Description | varchar(255) | None                     |

## Table: `extended_fields_possible_enum_values`

| Column Name        | Data Type    | Index                        |
| ------------------ | ------------ | ---------------------------- |
| id                 | int(11)      | Part of PRIMARY KEY (id)     |
| ef\_id             | int(11)      | Part of UNIQUE KEY (ef\_id)  |
| org\_id            | int(11)      | Part of UNIQUE KEY (org\_id) |
| value              | varchar(100) | Part of UNIQUE KEY (value)   |
| created\_by        | int(11)      | None                         |
| created\_on        | datetime     | None                         |
| modified\_by       | int(11)      | None                         |
| modified\_on       | datetime     | None                         |
| auto\_update\_time | timestamp    | None                         |

## Table: `comm_channel_type`

| Column Name | Data Type    | Index                     |
| ----------- | ------------ | ------------------------- |
| id          | int(2)       | Part of PRIMARY KEY (id)  |
| name        | varchar(100) | Part of UNIQUE KEY (name) |

## Table: `org_source_attribute_priority`

| Column Name     | Data Type                                            | Index                                |
| --------------- | ---------------------------------------------------- | ------------------------------------ |
| id              | int(11)                                              | Part of PRIMARY KEY (id)             |
| attribute\_type | enum('COMM\_CHANNEL','IDENTIFIER','EXTENDED\_FIELD') | Part of UNIQUE KEY (attribute\_type) |
| attribute\_id   | int(2)                                               | Part of UNIQUE KEY (attribute\_id)   |
| org\_source\_id | int(11)                                              | Part of UNIQUE KEY (org\_source\_id) |
| priority        | int(2)                                               | Part of UNIQUE KEY (priority)        |

## Table: `channel_config_key_values`

| Column Name        | Data Type  | Index                            |
| ------------------ | ---------- | -------------------------------- |
| id                 | int(11)    | Part of PRIMARY KEY (id)         |
| org\_id            | bigint(20) | Part of UNIQUE KEY (org\_id)     |
| key\_id            | int(11)    | Part of UNIQUE KEY (key\_id)     |
| value              | text       | None                             |
| account\_id        | int(11)    | Part of UNIQUE KEY (account\_id) |
| added\_by          | int(11)    | None                             |
| added\_on          | datetime   | None                             |
| updated\_by        | int(11)    | None                             |
| updated\_on        | datetime   | None                             |
| auto\_update\_time | timestamp  | None                             |

## Table: `org_shipment_types`

| Column Name        | Data Type    | Index                            |
| ------------------ | ------------ | -------------------------------- |
| id                 | int(11)      | Part of PRIMARY KEY (id)         |
| org\_id            | int(11)      | Part of UNIQUE KEY (org\_id)     |
| label              | varchar(100) | Part of UNIQUE KEY (label)       |
| deliveryHours      | double       | None                             |
| is\_active         | tinyint(1)   | None                             |
| description        | varchar(100) | None                             |
| created\_on        | datetime     | None                             |
| created\_by        | int(11)      | None                             |
| last\_updated\_by  | int(11)      | None                             |
| auto\_update\_time | timestamp    | Part of KEY (auto\_update\_time) |

## Table: `ota_bank_enum_values`

| Column Name        | Data Type   | Index                      |
| ------------------ | ----------- | -------------------------- |
| id                 | int(11)     | Part of UNIQUE KEY (id)    |
| value              | varchar(20) | Part of UNIQUE KEY (value) |
| auto\_update\_time | timestamp   | None                       |

## Table: `tinyurls`

| Column Name | Data Type    | Index                    |
| ----------- | ------------ | ------------------------ |
| id          | int(20)      | Part of PRIMARY KEY (id) |
| full\_url   | varchar(500) | None                     |
| valid\_till | date         | None                     |
| timestamp   | timestamp    | None                     |

## Table: `extended_field_functions_meta_fields`

| Column Name      | Data Type    | Index                    |
| ---------------- | ------------ | ------------------------ |
| id               | int(11)      | Part of PRIMARY KEY (id) |
| default\_value   | varchar(50)  | None                     |
| description      | varchar(50)  | None                     |
| field\_name      | varchar(50)  | None                     |
| field\_type      | varchar(50)  | None                     |
| function\_id     | int(11)      | None                     |
| is\_mandatory    | tinyint(1)   | None                     |
| label            | varchar(50)  | None                     |
| data\_type       | varchar(50)  | None                     |
| possible\_values | varchar(255) | None                     |

## Table: `product_config_keys`

| Column Name     | Data Type                                            | Index                   |
| --------------- | ---------------------------------------------------- | ----------------------- |
| id              | int(11)                                              | Part of KEY (id)        |
| name            | varchar(250)                                         | Part of KEY (name)      |
| label           | varchar(250)                                         | None                    |
| scopes          | varchar(250)                                         | None                    |
| value\_type     | enum('STRING','NUMERIC','BOOL','LIST','MAP','RANGE') | None                    |
| default\_value  | mediumtext                                           | None                    |
| security\_group | varchar(250)                                         | None                    |
| modules         | varchar(250)                                         | None                    |
| added\_by       | int(11)                                              | None                    |
| added\_on       | datetime                                             | None                    |
| is\_valid       | tinyint(1)                                           | Part of KEY (is\_valid) |
| parent\_id      | int(11)                                              | None                    |

## Table: `channels`

| Column Name | Data Type    | Index                     |
| ----------- | ------------ | ------------------------- |
| id          | int(11)      | Part of PRIMARY KEY (id)  |
| name        | varchar(255) | Part of UNIQUE KEY (name) |
| added\_by   | int(4)       | None                      |
| added\_on   | datetime     | None                      |

## Table: `vertical_to_org_mapping`

| Column Name             | Data Type  | Index                             |
| ----------------------- | ---------- | --------------------------------- |
| id                      | int(11)    | Part of PRIMARY KEY (id)          |
| org\_id                 | int(11)    | Part of KEY (org\_id)             |
| vertical\_id            | int(11)    | Part of UNIQUE KEY (vertical\_id) |
| is\_active              | tinyint(1) | None                              |
| created\_on             | datetime   | None                              |
| created\_by             | int(11)    | None                              |
| modified\_on            | datetime   | None                              |
| modified\_by            | int(11)    | None                              |
| auto\_update\_timestamp | timestamp  | None                              |

## Table: `org_delivery_modes`

| Column Name        | Data Type    | Index                            |
| ------------------ | ------------ | -------------------------------- |
| id                 | int(11)      | Part of PRIMARY KEY (id)         |
| org\_id            | int(11)      | Part of UNIQUE KEY (org\_id)     |
| label              | varchar(100) | Part of UNIQUE KEY (label)       |
| is\_active         | tinyint(1)   | None                             |
| description        | varchar(100) | None                             |
| created\_on        | datetime     | None                             |
| created\_by        | int(11)      | None                             |
| last\_updated\_by  | int(11)      | None                             |
| auto\_update\_time | timestamp    | Part of KEY (auto\_update\_time) |

## Table: `source_comm_channel_type`

| Column Name             | Data Type | Index                                        |
| ----------------------- | --------- | -------------------------------------------- |
| id                      | int(5)    | Part of PRIMARY KEY (id)                     |
| source\_type\_id        | int(2)    | Part of UNIQUE KEY (source\_type\_id)        |
| comm\_channel\_type\_id | int(2)    | Part of UNIQUE KEY (comm\_channel\_type\_id) |

## Table: `template_event_mappings`

| Column Name      | Data Type    | Index                             |
| ---------------- | ------------ | --------------------------------- |
| id               | bigint(20)   | Part of PRIMARY KEY (id)          |
| is\_enabled      | tinyint(1)   | None                              |
| event\_id        | bigint(20)   | Part of KEY (event\_id)           |
| language\_code   | varchar(255) | None                              |
| language\_policy | varchar(255) | None                              |
| namespace        | varchar(255) | None                              |
| template\_id     | varchar(255) | Part of UNIQUE KEY (template\_id) |
| whatsapp\_id     | bigint(20)   | Part of KEY (whatsapp\_id)        |

## Table: `communication_event_statuses`

| Column Name        | Data Type    | Index                    |
| ------------------ | ------------ | ------------------------ |
| id                 | bigint(20)   | Part of PRIMARY KEY (id) |
| api\_payload       | json         | None                     |
| api\_response      | json         | None                     |
| event\_id          | bigint(20)   | Part of KEY (event\_id)  |
| api\_name          | varchar(255) | None                     |
| mobile             | varchar(255) | None                     |
| org\_id            | bigint(20)   | Part of KEY (org\_id)    |
| request\_id        | varchar(255) | None                     |
| request\_method    | varchar(255) | None                     |
| webhook\_req\_id   | varchar(255) | None                     |
| auto\_update\_time | TIMESTAMP    | None                     |

## Table: `tags`

| Column Name              | Data Type    | Index                                  |
| ------------------------ | ------------ | -------------------------------------- |
| id                       | bigint(20)   | Part of PRIMARY KEY (id)               |
| template\_event\_map\_id | bigint(20)   | Part of KEY (template\_event\_map\_id) |
| name                     | varchar(255) | None                                   |
| json\_path               | varchar(255) | None                                   |
| type                     | varchar(255) | None                                   |

## Table: `org_config_keys`

| Column Name  | Data Type    | Index                    |
| ------------ | ------------ | ------------------------ |
| id           | bigint(20)   | Part of PRIMARY KEY (id) |
| config\_key  | varchar(255) | None                     |
| default\_val | varchar(255) | None                     |

## Table: `whatsapp_accounts`

| Column Name           | Data Type    | Index                    |
| --------------------- | ------------ | ------------------------ |
| id                    | bigint(20)   | Part of PRIMARY KEY (id) |
| is\_enabled           | tinyint(1)   | None                     |
| whatsapp\_intouch\_id | varchar(255) | None                     |
| org\_id               | bigint(20)   | Part of KEY (org\_id)    |
| uuid                  | varchar(255) | None                     |

## Table: `orgs`

| Column Name | Data Type    | Index                     |
| ----------- | ------------ | ------------------------- |
| id          | bigint(20)   | Part of PRIMARY KEY (id)  |
| is\_enabled | tinyint(1)   | None                      |
| name        | varchar(255) | None                      |
| till        | varchar(255) | Part of UNIQUE KEY (till) |

## Table: `communication_tags`

| Column Name | Data Type    | Index                    |
| ----------- | ------------ | ------------------------ |
| id          | bigint(20)   | Part of PRIMARY KEY (id) |
| name        | varchar(255) | None                     |
| json\_path  | varchar(255) | None                     |
| event\_id   | bigint(20)   | Part of KEY (event\_id)  |
| type        | varchar(255) | None                     |

## Table: `whatsapp_config_keys`

| Column Name  | Data Type    | Index                      |
| ------------ | ------------ | -------------------------- |
| id           | bigint(20)   | Part of PRIMARY KEY (id)   |
| config\_key  | varchar(255) | None                       |
| default\_val | varchar(255) | None                       |
| whatsapp\_id | bigint(20)   | Part of KEY (whatsapp\_id) |

## Table: `org_config_values`

| Column Name     | Data Type    | Index                         |
| --------------- | ------------ | ----------------------------- |
| id              | bigint(20)   | Part of PRIMARY KEY (id)      |
| config\_key\_id | bigint(20)   | Part of KEY (config\_key\_id) |
| org\_id         | bigint(20)   | Part of KEY (org\_id)         |
| value           | varchar(255) | None                          |

## Table: `templates`

| Column Name         | Data Type    | Index                    |
| ------------------- | ------------ | ------------------------ |
| id                  | bigint(20)   | Part of PRIMARY KEY (id) |
| communication\_type | varchar(255) | None                     |
| event\_id           | bigint(20)   | Part of KEY (event\_id)  |
| is\_default\_set    | tinyint(1)   | None                     |
| language            | varchar(255) | None                     |
| org\_id             | bigint(20)   | Part of KEY (org\_id)    |
| template            | varchar(255) | None                     |
| role                | varchar(255) | None                     |
| title               | varchar(255) | None                     |
| is\_enabled         | tinyint(1)   | None                     |

## Table: `whatsapp_config_values`

| Column Name     | Data Type    | Index                         |
| --------------- | ------------ | ----------------------------- |
| id              | bigint(20)   | Part of PRIMARY KEY (id)      |
| config\_key\_id | bigint(20)   | Part of KEY (config\_key\_id) |
| value           | varchar(255) | None                          |
| whatsapp\_id    | bigint(20)   | Part of KEY (whatsapp\_id)    |

## Table: `events`

| Column Name | Data Type    | Index                    |
| ----------- | ------------ | ------------------------ |
| id          | bigint(20)   | Part of PRIMARY KEY (id) |
| name        | varchar(255) | None                     |

## Table: `event_statuses`

| Column Name                     | Data Type    | Index                                  |
| ------------------------------- | ------------ | -------------------------------------- |
| id                              | bigint(20)   | Part of PRIMARY KEY (id)               |
| fetch\_customer\_req\_id        | varchar(255) | None                                   |
| customer\_subscription\_req\_id | varchar(255) | None                                   |
| template\_event\_map\_id        | bigint(20)   | Part of KEY (template\_event\_map\_id) |
| message\_id                     | varchar(255) | None                                   |
| mobile                          | varchar(255) | Part of KEY (mobile)                   |
| org\_id                         | bigint(20)   | Part of KEY (org\_id)                  |
| status                          | varchar(255) | None                                   |
| user\_id                        | varchar(255) | None                                   |
| webhook\_req\_id                | varchar(255) | None                                   |
| auto\_update\_time              | timestamp    | None                                   |

## Table: `rate_limit_criteria`

| Column Name | Data Type    | Index                    |
| ----------- | ------------ | ------------------------ |
| id          | int(11)      | Part of PRIMARY KEY (id) |
| limit\_id   | int(11)      | None                     |
| field       | varchar(255) | None                     |
| operator    | varchar(100) | None                     |
| value       | varchar(255) | None                     |
| is\_active  | tinyint(1)   | None                     |

## Table: `redirection`

| Column Name | Data Type    | Index                    |
| ----------- | ------------ | ------------------------ |
| id          | int(11)      | Part of PRIMARY KEY (id) |
| prefix      | varchar(255) | None                     |
| is\_active  | tinyint(1)   | None                     |
| added\_by   | varchar(100) | None                     |
| added\_on   | datetime     | None                     |
| deleted\_by | varchar(100) | None                     |
| deleted\_on | datetime     | None                     |

## Table: `default_rate_limit_criteria`

| Column Name        | Data Type    | Index                    |
| ------------------ | ------------ | ------------------------ |
| id                 | int(11)      | Part of PRIMARY KEY (id) |
| default\_limit\_id | int(11)      | None                     |
| field              | varchar(255) | None                     |
| operator           | varchar(100) | None                     |
| value              | varchar(255) | None                     |
| is\_active         | tinyint(1)   | None                     |

## Table: `limits`

| Column Name   | Data Type    | Index                    |
| ------------- | ------------ | ------------------------ |
| id            | int(11)      | Part of PRIMARY KEY (id) |
| entity\_id    | int(11)      | None                     |
| name          | varchar(200) | None                     |
| entity\_level | varchar(100) | None                     |
| limit         | int(11)      | None                     |
| limit\_level  | varchar(100) | None                     |
| window        | varchar(100) | None                     |
| is\_active    | tinyint(1)   | None                     |
| added\_by     | varchar(100) | None                     |
| added\_on     | datetime     | None                     |
| deleted\_by   | varchar(100) | None                     |
| deleted\_on   | datetime     | None                     |

## Table: `default_rate_limits`

| Column Name   | Data Type    | Index                    |
| ------------- | ------------ | ------------------------ |
| id            | int(11)      | Part of PRIMARY KEY (id) |
| entity\_id    | int(11)      | None                     |
| entity\_level | varchar(100) | None                     |
| limit         | int(11)      | None                     |
| limit\_level  | varchar(100) | None                     |
| window        | varchar(100) | None                     |
| is\_active    | tinyint(1)   | None                     |
| added\_by     | varchar(100) | None                     |
| added\_on     | datetime     | None                     |

## Table: `redirection_criteria`

| Column Name     | Data Type    | Index                    |
| --------------- | ------------ | ------------------------ |
| id              | int(11)      | Part of PRIMARY KEY (id) |
| redirection\_id | int(11)      | None                     |
| field           | varchar(255) | None                     |
| operator        | varchar(100) | None                     |
| value           | varchar(255) | None                     |
| is\_active      | tinyint(1)   | None                     |

## Table: `azn_ag_resource_perms`

| Column Name       | Data Type    | Index                                  |
| ----------------- | ------------ | -------------------------------------- |
| id                | int(11)      | Part of PRIMARY KEY (id)               |
| org\_id           | int(11)      | Part of UNIQUE KEY (org\_id)           |
| access\_group\_id | int(11)      | Part of UNIQUE KEY (access\_group\_id) |
| resource\_id      | int(11)      | Part of UNIQUE KEY (resource\_id)      |
| api\_type         | enum('DATA', | Part of UNIQUE KEY (api\_type)         |
| permission        | enum('NONE', | None                                   |
| is\_active        | tinyint(1)   | None                                   |
| updated\_by       | int(11)      | None                                   |
| last\_updated\_on | timestamp    | None                                   |

## Table: `group_permissions`

| Column Name       | Data Type  | Index                                |
| ----------------- | ---------- | ------------------------------------ |
| group\_id         | bigint(20) | Part of PRIMARY KEY (group\_id)      |
| permission\_id    | bigint(20) | Part of PRIMARY KEY (permission\_id) |
| created           | timestamp  | None                                 |
| is\_active        | tinyint(4) | None                                 |
| last\_updated\_by | int(11)    | None                                 |
| last\_updated\_on | datetime   | None                                 |

## Table: `azn_resources`

| Column Name         | Data Type    | Index                     |
| ------------------- | ------------ | ------------------------- |
| id                  | int(11)      | Part of PRIMARY KEY (id)  |
| name                | varchar(100) | Part of UNIQUE KEY (name) |
| is\_active          | tinyint(1)   | None                      |
| is\_active\_for\_ui | tinyint(1)   | None                      |
| last\_updated\_on   | timestamp    | None                      |

## Table: `user_app_features`

| Column Name           | Data Type   | Index                            |
| --------------------- | ----------- | -------------------------------- |
| id                    | int(11)     | Part of PRIMARY KEY (id)         |
| org\_id               | int(11)     | Part of UNIQUE KEY (org\_id)     |
| feature\_id           | int(11)     | Part of UNIQUE KEY (feature\_id) |
| security\_group\_json | varchar(50) | None                             |
| is\_active            | tinyint(4)  | None                             |
| entered\_by           | int(11)     | None                             |
| auto\_update\_time    | timestamp   | None                             |

## Table: `modules`

| Column Name           | Data Type    | Index                     |
| --------------------- | ------------ | ------------------------- |
| id                    | int(11)      | Part of PRIMARY KEY (id)  |
| name                  | varchar(50)  | None                      |
| code                  | varchar(20)  | Part of UNIQUE KEY (code) |
| is\_web\_client       | tinyint(1)   | None                      |
| version               | varchar(10)  | None                      |
| namespace             | varchar(100) | None                      |
| display\_order        | tinyint(4)   | None                      |
| visible\_to\_customer | tinyint(4)   | None                      |
| is\_free\_module      | tinyint(4)   | None                      |
| notes                 | mediumtext   | None                      |
| created               | timestamp    | None                      |

## Table: `resources`

| Column Name | Data Type    | Index                           |
| ----------- | ------------ | ------------------------------- |
| id          | bigint(20)   | Part of PRIMARY KEY (id)        |
| module\_id  | int(11)      | Part of UNIQUE KEY (module\_id) |
| name        | varchar(50)  | None                            |
| code        | varchar(255) | Part of UNIQUE KEY (code)       |
| description | text         | None                            |
| visibility  | tinyint(4)   | None                            |

## Table: `org_app_features`

| Column Name        | Data Type  | Index                            |
| ------------------ | ---------- | -------------------------------- |
| id                 | int(11)    | Part of PRIMARY KEY (id)         |
| org\_id            | int(11)    | Part of UNIQUE KEY (org\_id)     |
| feature\_id        | int(11)    | Part of UNIQUE KEY (feature\_id) |
| is\_active         | tinyint(4) | None                             |
| entered\_by        | int(11)    | None                             |
| auto\_update\_time | timestamp  | None                             |

## Table: `group_templates_permissions`

| Column Name    | Data Type | Index |
| -------------- | --------- | ----- |
| group\_id      | int(11)   | None  |
| permission\_id | int(11)   | None  |

## Table: `resources_mapping`

| Column Name          | Data Type | Index                                     |
| -------------------- | --------- | ----------------------------------------- |
| id                   | int(11)   | Part of PRIMARY KEY (id)                  |
| module\_id           | int(11)   | Part of UNIQUE KEY (module\_id)           |
| parent\_resource\_id | int(11)   | Part of UNIQUE KEY (parent\_resource\_id) |
| child\_resource\_id  | int(11)   | Part of UNIQUE KEY (child\_resource\_id)  |
| last\_updated\_by    | int(11)   | None                                      |
| last\_updated\_on    | datetime  | None                                      |

## Table: `permission_hierarchy`

| Column Name            | Data Type   | Index                                      |
| ---------------------- | ----------- | ------------------------------------------ |
| id                     | int(11)     | Part of PRIMARY KEY (id)                   |
| parent\_permission\_id | int(11)     | None                                       |
| child\_permission\_id  | int(11)     | Part of UNIQUE KEY (child\_permission\_id) |
| notes                  | varchar(40) | None                                       |

## Table: `approver_logs`

| Column Name      | Data Type  | Index                    |
| ---------------- | ---------- | ------------------------ |
| id               | int(11)    | Part of PRIMARY KEY (id) |
| approver\_id     | int(11)    | None                     |
| user\_id         | int(11)    | None                     |
| groups\_included | mediumtext | None                     |
| sent\_on         | datetime   | None                     |
| approved\_on     | datetime   | None                     |
| status           | tinyint(1) | None                     |

## Table: `membership_change_log`

| Column Name | Data Type            | Index                  |
| ----------- | -------------------- | ---------------------- |
| user\_id    | int(11)              | Part of KEY (user\_id) |
| org\_id     | int(11)              | None                   |
| group\_id   | int(11)              | None                   |
| changed\_by | int(11)              | None                   |
| time        | timestamp            | None                   |
| action      | enum('ADD','DELETE') | None                   |

## Table: `modules_help_url`

| Column Name       | Data Type  | Index                           |
| ----------------- | ---------- | ------------------------------- |
| id                | int(11)    | Part of PRIMARY KEY (id)        |
| module\_id        | int(11)    | Part of UNIQUE KEY (module\_id) |
| params            | mediumtext | None                            |
| updated\_by       | int(11)    | None                            |
| last\_updated\_on | timestamp  | None                            |
| locale\_id        | int(11)    | Part of UNIQUE KEY (locale\_id) |

## Table: `tab_based_actions`

| Column Name        | Data Type   | Index |
| ------------------ | ----------- | ----- |
| action\_id         | int(11)     | None  |
| parent\_action\_id | int(11)     | None  |
| module\_id         | int(11)     | None  |
| action\_type       | varchar(50) | None  |
| last\_updated\_by  | int(11)     | None  |
| last\_updated\_on  | datetime    | None  |

## Table: `workflow_hierarchy`

| Column Name                     | Data Type   | Index                    |
| ------------------------------- | ----------- | ------------------------ |
| id                              | bigint(20)  | Part of PRIMARY KEY (id) |
| permission\_id                  | bigint(20)  | None                     |
| parent\_workflow\_id            | bigint(20)  | None                     |
| parent\_workflow\_hierarchy\_id | bigint(20)  | None                     |
| type                            | varchar(20) | None                     |
| workflow\_id                    | bigint(20)  | None                     |
| org\_id                         | bigint(20)  | None                     |
| is\_active                      | tinyint(4)  | None                     |
| last\_updated\_by               | int(11)     | None                     |
| last\_updated\_on               | datetime    | None                     |

## Table: `groups`

| Column Name       | Data Type                 | Index                            |
| ----------------- | ------------------------- | -------------------------------- |
| org\_id           | bigint(20)                | Part of UNIQUE KEY (org\_id)     |
| group\_id         | int(11)                   | Part of PRIMARY KEY (group\_id)  |
| group\_name       | varchar(50)               | Part of UNIQUE KEY (group\_name) |
| notes             | text                      | None                             |
| type              | enum('STANDARD','CUSTOM') | None                             |
| version           | tinyint(1)                | None                             |
| visible\_on\_ui   | tinyint(1)                | None                             |
| created           | timestamp                 | None                             |
| last\_updated\_on | datetime                  | None                             |
| last\_updated\_by | int(11)                   | None                             |
| is\_active        | tinyint(4)                | None                             |

## Table: `group_templates`

| Column Name | Data Type | Index                        |
| ----------- | --------- | ---------------------------- |
| id          | int(11)   | Part of UNIQUE KEY (id)      |
| ref\_id     | int(11)   | Part of UNIQUE KEY (ref\_id) |

## Table: `user_proxy_orgs`

| Column Name    | Data Type  | Index                               |
| -------------- | ---------- | ----------------------------------- |
| user\_id       | bigint(20) | Part of UNIQUE KEY (user\_id)       |
| proxy\_org\_id | bigint(20) | Part of UNIQUE KEY (proxy\_org\_id) |
| active         | tinyint(4) | None                                |
| modified\_by   | bigint(20) | None                                |
| modified\_on   | datetime   | None                                |

## Table: `app_features`

| Column Name        | Data Type   | Index                    |
| ------------------ | ----------- | ------------------------ |
| id                 | int(11)     | Part of PRIMARY KEY (id) |
| name               | varchar(30) | None                     |
| type               | varchar(20) | None                     |
| tag                | varchar(30) | None                     |
| auto\_update\_time | timestamp   | None                     |

## Table: `features`

| Column Name   | Data Type                | Index                     |
| ------------- | ------------------------ | ------------------------- |
| id            | int(11)                  | Part of PRIMARY KEY (id)  |
| module\_id    | int(11)                  | None                      |
| name          | varchar(255)             | Part of UNIQUE KEY (name) |
| label         | varchar(255)             | None                      |
| is\_active    | tinyint(4)               | None                      |
| feature\_type | enum('BASIC','ADVANCED') | None                      |
| created\_by   | int(11)                  | None                      |
| created\_on   | datetime                 | None                      |
| updated\_by   | int(11)                  | None                      |
| updated\_on   | datetime                 | None                      |

## Table: `workflows`

| Column Name       | Data Type    | Index                    |
| ----------------- | ------------ | ------------------------ |
| id                | bigint(20)   | Part of PRIMARY KEY (id) |
| name              | varchar(100) | None                     |
| description       | varchar(200) | None                     |
| module\_id        | int(11)      | None                     |
| created           | timestamp    | None                     |
| last\_updated\_on | datetime     | None                     |
| last\_updated\_by | int(11)      | None                     |
| org\_id           | bigint(20)   | None                     |
| is\_active        | tinyint(4)   | None                     |

## Table: `actions`

| Column Name        | Data Type                        | Index                             |
| ------------------ | -------------------------------- | --------------------------------- |
| id                 | bigint(20)                       | Part of PRIMARY KEY (id)          |
| namespace          | varchar(100)                     | Part of UNIQUE KEY (namespace)    |
| resource\_id       | int(11)                          | Part of UNIQUE KEY (resource\_id) |
| module\_id         | int(11)                          | Part of UNIQUE KEY (module\_id)   |
| name               | varchar(50)                      | Part of UNIQUE KEY (name)         |
| code               | varchar(255)                     | Part of UNIQUE KEY (code)         |
| is\_active         | tinyint(4)                       | None                              |
| description        | text                             | None                              |
| permission\_id     | int(11)                          | None                              |
| visibility         | tinyint(4)                       | None                              |
| offline\_supported | tinyint(1)                       | None                              |
| is\_dump           | tinyint(4)                       | None                              |
| feature\_id        | int(11)                          | None                              |
| params             | mediumtext                       | None                              |
| offline\_source    | enum('SMS','MISSED\_CALL','ALL') | None                              |

## Table: `active_modules`

| Column Name   | Data Type  | Index                            |
| ------------- | ---------- | -------------------------------- |
| org\_id       | bigint(20) | Part of PRIMARY KEY (org\_id)    |
| module\_id    | int(11)    | Part of PRIMARY KEY (module\_id) |
| active        | tinyint(4) | None                             |
| created       | datetime   | None                             |
| last\_updated | timestamp  | None                             |

## Table: `azn_ag_assignments`

| Column Name       | Data Type                                                           | Index                           |
| ----------------- | ------------------------------------------------------------------- | ------------------------------- |
| id                | int(11)                                                             | Part of PRIMARY KEY (id)        |
| org\_id           | int(11)                                                             | Part of KEY (org\_id)           |
| access\_group\_id | int(11)                                                             | None                            |
| assignment\_level | enum('ORG\_ENTITY\_TYPE',                                           | Part of KEY (assignment\_level) |
| org\_entity\_type | enum('STORE','TILL','STR\_SERVER','ZONE','CONCEPT','OAUTH\_CLIENT') | None                            |
| org\_entity\_id   | int(11)                                                             | Part of KEY (org\_entity\_id)   |
| is\_active        | tinyint(1)                                                          | None                            |
| updated\_by       | int(11)                                                             | None                            |
| last\_updated\_on | timestamp                                                           | None                            |

## Table: `memberships`

| Column Name  | Data Type  | Index                          |
| ------------ | ---------- | ------------------------------ |
| user\_id     | bigint(20) | Part of PRIMARY KEY (user\_id) |
| group\_id    | int(11)    | Part of KEY (group\_id)        |
| joined       | timestamp  | None                           |
| is\_active   | tinyint(4) | None                           |
| is\_approved | tinyint(4) | None                           |
| org\_id      | bigint(20) | Part of PRIMARY KEY (org\_id)  |

## Table: `access_exceptions`

| Column Name    | Data Type    | Index                           |
| -------------- | ------------ | ------------------------------- |
| id             | bigint(20)   | Part of PRIMARY KEY (id)        |
| user\_id       | bigint(20)   | Part of KEY (user\_id)          |
| org\_id        | bigint(20)   | Part of UNIQUE KEY (org\_id)    |
| action\_id     | bigint(20)   | Part of UNIQUE KEY (action\_id) |
| validity\_date | datetime     | None                            |
| assigned\_by   | bigint(20)   | None                            |
| purpose        | varchar(500) | None                            |
| expired        | tinyint(4)   | None                            |

## Table: `permissions`

| Column Name     | Data Type   | Index                    |
| --------------- | ----------- | ------------------------ |
| id              | bigint(20)  | Part of PRIMARY KEY (id) |
| name            | varchar(50) | None                     |
| notes           | varchar(50) | None                     |
| assoc\_module   | int(11)     | None                     |
| created         | timestamp   | None                     |
| visible\_on\_ui | tinyint(4)  | None                     |
| type            | varchar(20) | None                     |
| org\_id         | bigint(20)  | None                     |
| is\_active      | tinyint(4)  | None                     |

## Table: `vulcan_action_permissions`

| Column Name        | Data Type  | Index                                   |
| ------------------ | ---------- | --------------------------------------- |
| id                 | int(11)    | Part of PRIMARY KEY (id)                |
| vulcan\_action\_id | int(11)    | Part of UNIQUE KEY (vulcan\_action\_id) |
| permission\_id     | int(11)    | Part of UNIQUE KEY (permission\_id)     |
| is\_active         | tinyint(4) | None                                    |
| last\_updated\_on  | datetime   | None                                    |
| last\_updated\_by  | int(11)    | None                                    |

## Table: `azn_resource_endpoints`

| Column Name       | Data Type                 | Index                        |
| ----------------- | ------------------------- | ---------------------------- |
| id                | int(11)                   | Part of PRIMARY KEY (id)     |
| resource\_id      | int(11)                   | Part of KEY (resource\_id)   |
| api\_type         | enum('DATA',              | None                         |
| pattern           | varchar(250)              | Part of UNIQUE KEY (pattern) |
| action            | enum('INCLUDE','EXCLUDE') | None                         |
| priority          | int(11)                   | None                         |
| is\_active        | tinyint(1)                | None                         |
| last\_updated\_on | timestamp                 | None                         |

## Table: `org_namespaces`

| Column Name           | Data Type        | Index                        |
| --------------------- | ---------------- | ---------------------------- |
| id                    | int(11)          | Part of PRIMARY KEY (id)     |
| name                  | varchar(255)     | Part of UNIQUE KEY (name)    |
| org\_id               | int(11)          | Part of UNIQUE KEY (org\_id) |
| parent\_namespace\_id | int(11)          | None                         |
| scope                 | ENUM('STANDARD', | None                         |
| is\_active            | tinyint(1)       | None                         |
| created\_by           | int(11)          | None                         |
| created\_on           | datetime         | None                         |
| updated\_by           | int(11)          | None                         |
| updated\_on           | datetime         | None                         |

## Table: `org_features`

| Column Name | Data Type  | Index                            |
| ----------- | ---------- | -------------------------------- |
| id          | int(11)    | Part of PRIMARY KEY (id)         |
| org\_id     | int(11)    | Part of UNIQUE KEY (org\_id)     |
| feature\_id | int(11)    | Part of UNIQUE KEY (feature\_id) |
| is\_active  | tinyint(4) | None                             |
| expires\_on | datetime   | None                             |
| created\_by | int(11)    | None                             |
| created\_on | datetime   | None                             |
| updated\_by | int(11)    | None                             |
| updated\_on | datetime   | None                             |

## Table: `access_logs`

| Column Name        | Data Type    | Index |
| ------------------ | ------------ | ----- |
| action\_id         | int(11)      | None  |
| params             | varchar(100) | None  |
| user\_id           | int(11)      | None  |
| org\_id            | int(11)      | None  |
| time               | datetime     | None  |
| apache\_thread\_id | varchar(60)  | None  |

## Table: `action_permissions`

| Column Name       | Data Type  | Index                               |
| ----------------- | ---------- | ----------------------------------- |
| id                | int(11)    | Part of PRIMARY KEY (id)            |
| action\_id        | int(11)    | Part of UNIQUE KEY (action\_id)     |
| permission\_id    | int(11)    | Part of UNIQUE KEY (permission\_id) |
| is\_active        | tinyint(4) | None                                |
| last\_updated\_on | datetime   | None                                |
| last\_updated\_by | int(11)    | None                                |

## Table: `azn_access_groups`

| Column Name         | Data Type    | Index                        |
| ------------------- | ------------ | ---------------------------- |
| id                  | int(11)      | Part of PRIMARY KEY (id)     |
| org\_id             | int(11)      | Part of UNIQUE KEY (org\_id) |
| name                | varchar(100) | Part of UNIQUE KEY (name)    |
| description         | varchar(500) | None                         |
| is\_active          | tinyint(1)   | None                         |
| is\_system\_managed | tinyint(1)   | None                         |
| created\_by         | int(11)      | None                         |
| created\_on         | timestamp    | None                         |
| updated\_by         | int(11)      | None                         |
| last\_updated\_on   | timestamp    | None                         |

## Table: `import_error_logs`

| Column Name | Data Type  | Index                    |
| ----------- | ---------- | ------------------------ |
| id          | int(11)    | Part of PRIMARY KEY (id) |
| file\_id    | int(11)    | Part of KEY (file\_id)   |
| record\_id  | int(11)    | None                     |
| error       | mediumtext | None                     |

## Table: `ftp_data_dump`

| Column Name       | Data Type                                                                                                                               | Index                    |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------- | ------------------------ |
| id                | int(11)                                                                                                                                 | Part of PRIMARY KEY (id) |
| org\_id           | int(11)                                                                                                                                 | Part of KEY (org\_id)    |
| dump\_call        | varchar(30)                                                                                                                             | Part of KEY (dump\_call) |
| dump\_file        | varchar(200)                                                                                                                            | None                     |
| status            | enum('INIT','STARTED','TEMP\_DUMP\_FILE\_INPROGRESS','TEMP\_DUMP\_FILE\_COMPLETE','FTP\_PUT\_INPROGRESS','FTP\_PUT\_COMPLETE','FAILED') | None                     |
| scheduler\_params | mediumtext                                                                                                                              | None                     |
| started\_on       | datetime                                                                                                                                | None                     |
| updated\_on       | timestamp                                                                                                                               | None                     |

## Table: `ftp_sources_templates_audit`

| Column Name       | Data Type | Index                    |
| ----------------- | --------- | ------------------------ |
| org\_id           | int(11)   | Part of KEY (org\_id)    |
| source\_id        | int(11)   | Part of KEY (source\_id) |
| source\_details   | text      | None                     |
| template\_mapping | text      | None                     |
| cron\_details     | text      | None                     |
| update\_time      | timestamp | None                     |
| updated\_by       | int(11)   | None                     |

## Table: `import_templates_mappings`

| Column Name             | Data Type                        | Index                              |
| ----------------------- | -------------------------------- | ---------------------------------- |
| template\_id            | int(11)                          | Part of PRIMARY KEY (template\_id) |
| org\_id                 | int(11)                          | None                               |
| field\_id               | int(11)                          | Part of PRIMARY KEY (field\_id)    |
| field\_name             | varchar(100)                     | None                               |
| ref\_type               | enum('BASE','CUSTOM')            | Part of PRIMARY KEY (ref\_type)    |
| field\_index            | int(11)                          | None                               |
| field\_not\_null        | int(1)                           | None                               |
| field\_transformer      | varchar(100)                     | None                               |
| transformer\_inputs     | mediumtext                       | None                               |
| field\_validation\_type | varchar(100)                     | None                               |
| field\_data\_type       | enum('VARCHAR','DATETIME','INT') | None                               |
| field\_length           | int(11)                          | None                               |

## Table: `import_running_status`

| Column Name    | Data Type    | Index                           |
| -------------- | ------------ | ------------------------------- |
| id             | int(11)      | Part of PRIMARY KEY (id)        |
| import\_id     | int(11)      | Part of UNIQUE KEY (import\_id) |
| org\_id        | int(11)      | Part of UNIQUE KEY (org\_id)    |
| type           | varchar(50)  | Part of UNIQUE KEY (type)       |
| count          | int(11)      | None                            |
| current\_state | varchar(200) | None                            |
| timestamp      | datetime     | None                            |
| notes          | mediumtext   | None                            |
| start\_time    | timestamp    | None                            |

## Table: `import_conf_keys`

| Column Name             | Data Type    | Index                     |
| ----------------------- | ------------ | ------------------------- |
| id                      | int(11)      | Part of PRIMARY KEY (id)  |
| profile\_id             | int(11)      | Part of KEY (profile\_id) |
| name                    | varchar(200) | None                      |
| label                   | varchar(200) | None                      |
| ui\_type                | varchar(100) | None                      |
| values                  | varchar(300) | None                      |
| default\_value          | varchar(200) | None                      |
| type                    | varchar(20)  | None                      |
| is\_mandatory           | tinyint(4)   | None                      |
| order\_id               | int(10)      | Part of KEY (order\_id)   |
| parent\_conf\_key\_name | varchar(100) | None                      |

## Table: `import_ftp_sources`

| Column Name         | Data Type    | Index                               |
| ------------------- | ------------ | ----------------------------------- |
| id                  | int(11)      | Part of PRIMARY KEY (id)            |
| org\_id             | int(11)      | Part of KEY (org\_id)               |
| name                | varchar(255) | None                                |
| server\_url         | varchar(99)  | None                                |
| username            | varchar(50)  | None                                |
| password            | varchar(50)  | None                                |
| base\_folder        | varchar(255) | None                                |
| processed\_folder   | varchar(255) | None                                |
| sftp\_enabled       | tinyint(1)   | None                                |
| is\_active          | tinyint(1)   | None                                |
| non\_stop           | tinyint(1)   | None                                |
| email               | text         | None                                |
| import\_file\_confs | varchar(255) | None                                |
| ref\_id             | int(11)      | Part of KEY (ref\_id)               |
| location\_hash      | varchar(50)  | Part of UNIQUE KEY (location\_hash) |
| auto\_update\_time  | timestamp    | None                                |
| updated\_by         | int(11)      | None                                |
| ftp\_port           | int(11)      | None                                |

## Table: `ftp_background_import`

| Column Name        | Data Type                                                                                                                                         | Index                        |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- |
| id                 | int(11)                                                                                                                                           | Part of PRIMARY KEY (id)     |
| file\_id           | int(11)                                                                                                                                           | Part of KEY (file\_id)       |
| org\_id            | int(10)                                                                                                                                           | None                         |
| tempdb\_status     | enum('TEMPDB\_OPEN','TEMPDB\_INPROGRESS','TEMPDB\_DONE','TEMPDB\_APPROVED','MAINDB\_INPROGRESS','MAINDB\_DONE','TEMPDB\_FAILED','MAINDB\_FAILED') | Part of KEY (tempdb\_status) |
| email              | varchar(200)                                                                                                                                      | None                         |
| added\_on          | datetime                                                                                                                                          | None                         |
| added\_by          | int(11)                                                                                                                                           | None                         |
| last\_picked\_up   | datetime                                                                                                                                          | None                         |
| tempdb\_done\_time | datetime                                                                                                                                          | None                         |
| maindb\_done\_time | datetime                                                                                                                                          | None                         |
| nsadmin\_id\_temp  | bigint(20)                                                                                                                                        | None                         |
| nsadmin\_id\_main  | bigint(20)                                                                                                                                        | None                         |
| priority           | int(5)                                                                                                                                            | None                         |
| profile            | int(1)                                                                                                                                            | None                         |
| source\_id         | int(11)                                                                                                                                           | None                         |

## Table: `import_point_engine_status`

| Column Name                    | Data Type              | Index                                  |
| ------------------------------ | ---------------------- | -------------------------------------- |
| id                             | int(11)                | Part of PRIMARY KEY (id)               |
| import\_id                     | int(11)                | Part of KEY (import\_id)               |
| point\_engine\_batch\_id       | int(10)                | Part of KEY (point\_engine\_batch\_id) |
| status                         | enum('SUCCESS','FAIL') | None                                   |
| temp\_table\_start\_id         | int(10)                | None                                   |
| temp\_table\_end\_id           | int(10)                | None                                   |
| point\_engine\_status\_details | mediumtext             | None                                   |
| last\_update\_on               | timestamp              | None                                   |

## Table: `import_additional_details`

| Column Name      | Data Type    | Index                  |
| ---------------- | ------------ | ---------------------- |
| file\_id         | int(11)      | Part of KEY (file\_id) |
| org\_id          | int(11)      | Part of KEY (org\_id)  |
| configs          | mediumtext   | None                   |
| field\_info      | mediumtext   | None                   |
| fs\_file\_handle | varchar(100) | None                   |
| additional\_info | mediumtext   | None                   |

## Table: `import_templates_mappings_bkp`

| Column Name             | Data Type                        | Index                              |
| ----------------------- | -------------------------------- | ---------------------------------- |
| template\_id            | int(11)                          | Part of PRIMARY KEY (template\_id) |
| org\_id                 | int(11)                          | None                               |
| field\_id               | int(11)                          | Part of PRIMARY KEY (field\_id)    |
| field\_name             | varchar(100)                     | None                               |
| ref\_type               | enum('BASE','CUSTOM')            | Part of PRIMARY KEY (ref\_type)    |
| field\_index            | int(11)                          | None                               |
| field\_not\_null        | int(1)                           | None                               |
| field\_transformer      | varchar(100)                     | None                               |
| transformer\_inputs     | mediumtext                       | None                               |
| field\_validation\_type | varchar(100)                     | None                               |
| field\_data\_type       | enum('VARCHAR','DATETIME','INT') | None                               |
| field\_length           | int(11)                          | None                               |

## Table: `import_subscriptions`

| Column Name      | Data Type  | Index                    |
| ---------------- | ---------- | ------------------------ |
| id               | int(10)    | Part of PRIMARY KEY (id) |
| org\_id          | int(10)    | Part of KEY (org\_id)    |
| subscribed\_from | date       | None                     |
| subscribed\_upto | date       | None                     |
| added\_by        | int(10)    | None                     |
| added\_on        | datetime   | None                     |
| unsubscribed\_on | datetime   | None                     |
| status           | tinyint(1) | None                     |

## Table: `import_logs`

| Column Name              | Data Type                                 | Index                    |
| ------------------------ | ----------------------------------------- | ------------------------ |
| id                       | int(11)                                   | Part of PRIMARY KEY (id) |
| org\_id                  | int(11)                                   | None                     |
| user\_id                 | int(11)                                   | None                     |
| import\_profile\_type    | enum('CUSTOMER','BILL','INVENTORY')       | None                     |
| db\_details              | mediumtext                                | None                     |
| status                   | enum('SUCCESS','FAIL','REJECT','PARTIAL') | None                     |
| records\_uploaded        | int(11)                                   | None                     |
| records\_updated\_to\_db | int(11)                                   | None                     |
| imported\_on             | datetime                                  | None                     |

## Table: `import_conf_keys_values`

| Column Name  | Data Type  | Index                             |
| ------------ | ---------- | --------------------------------- |
| id           | int(11)    | Part of PRIMARY KEY (id)          |
| key\_id      | int(11)    | Part of UNIQUE KEY (key\_id)      |
| template\_id | int(11)    | Part of UNIQUE KEY (template\_id) |
| value        | mediumtext | None                              |

## Table: `import_files_history`

| Column Name          | Data Type                                                                                                                                                             | Index                        |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- |
| id                   | int(10)                                                                                                                                                               | Part of PRIMARY KEY (id)     |
| org\_id              | int(10)                                                                                                                                                               | Part of KEY (org\_id)        |
| user\_id             | int(10)                                                                                                                                                               | Part of KEY (user\_id)       |
| filename             | varchar(200)                                                                                                                                                          | None                         |
| namespace            | varchar(500)                                                                                                                                                          | None                         |
| count                | int(10)                                                                                                                                                               | None                         |
| template\_id         | int(10)                                                                                                                                                               | None                         |
| profile\_id          | int(10)                                                                                                                                                               | None                         |
| is\_validated        | int(10)                                                                                                                                                               | None                         |
| temp\_table\_name    | varchar(200)                                                                                                                                                          | None                         |
| temp\_table\_count   | int(10)                                                                                                                                                               | None                         |
| csv\_properties      | mediumtext                                                                                                                                                            | None                         |
| start\_time          | datetime                                                                                                                                                              | Part of KEY (start\_time)    |
| end\_time            | datetime                                                                                                                                                              | Part of KEY (end\_time)      |
| time\_taken          | datetime                                                                                                                                                              | None                         |
| import\_status       | enum('SUCCESS','FAIL','INPROGRESS','PREVIEWED','TEMP\_DB\_COMPLETED','POINT\_ENGINE\_PENDING','POINT\_ENGINE\_INPROGRESS','POINT\_ENGINE\_FAIL','CANCELED','DELETED') | Part of KEY (import\_status) |
| memory\_consumed     | double                                                                                                                                                                | None                         |
| memory\_peak         | double                                                                                                                                                                | None                         |
| cpu\_usage           | double                                                                                                                                                                | None                         |
| task\_time\_breakup  | mediumtext                                                                                                                                                            | None                         |
| query\_time\_breakup | mediumtext                                                                                                                                                            | None                         |
| additional\_info     | mediumtext                                                                                                                                                            | None                         |

## Table: `import_templates`

| Column Name | Data Type    | Index                     |
| ----------- | ------------ | ------------------------- |
| id          | int(11)      | Part of PRIMARY KEY (id)  |
| name        | varchar(100) | None                      |
| org\_id     | int(11)      | None                      |
| profile\_id | int(11)      | Part of KEY (profile\_id) |
| create\_on  | datetime     | None                      |
| created\_by | int(11)      | None                      |
| is\_valid   | int(1)       | None                      |
| valid\_till | datetime     | None                      |

## Table: `import_profiles`

| Column Name       | Data Type    | Index                                  |
| ----------------- | ------------ | -------------------------------------- |
| id                | int(11)      | Part of PRIMARY KEY (id)               |
| name              | varchar(100) | Part of UNIQUE KEY (name)              |
| type              | varchar(20)  | None                                   |
| created\_on       | datetime     | None                                   |
| created\_by       | int(10)      | None                                   |
| is\_valid         | int(1)       | None                                   |
| valid\_till       | datetime     | None                                   |
| ftp\_enabled      | int(1)       | None                                   |
| ftp\_folder\_name | varchar(100) | Part of UNIQUE KEY (ftp\_folder\_name) |

## Table: `import_subscribed_profile_stages`

| Column Name          | Data Type                                                                                                  | Index                                     |
| -------------------- | ---------------------------------------------------------------------------------------------------------- | ----------------------------------------- |
| id                   | int(10)                                                                                                    | Part of PRIMARY KEY (id)                  |
| profile\_id          | int(10)                                                                                                    | Part of UNIQUE KEY (profile\_id)          |
| stage\_type          | enum('ALL','TEMP\_DB\_INSERT','VALIDATIONS','MAINDB\_COMPLETE','DAILY\_SUMMARY','PENDING\_NOTIFY','ERROR') | Part of UNIQUE KEY (stage\_type)          |
| group\_subscribe\_id | int(10)                                                                                                    | Part of UNIQUE KEY (group\_subscribe\_id) |

## Table: `ftp_template_mapping`

| Column Name        | Data Type  | Index                            |
| ------------------ | ---------- | -------------------------------- |
| id                 | int(11)    | Part of PRIMARY KEY (id)         |
| org\_id            | int(11)    | Part of UNIQUE KEY (org\_id)     |
| source\_id         | int(11)    | Part of UNIQUE KEY (source\_id)  |
| profile\_id        | int(11)    | Part of UNIQUE KEY (profile\_id) |
| template\_id       | int(11)    | None                             |
| is\_valid          | tinyint(1) | None                             |
| auto\_update\_time | timestamp  | None                             |

## Table: `import_points_engine_configs`

| Column Name          | Data Type  | Index                      |
| -------------------- | ---------- | -------------------------- |
| org\_id              | int(11)    | Part of KEY (org\_id)      |
| template\_id         | int(11)    | Part of KEY (template\_id) |
| pe\_program\_details | mediumtext | None                       |

## Table: `import_subscribed_emails`

| Column Name          | Data Type    | Index                              |
| -------------------- | ------------ | ---------------------------------- |
| id                   | int(10)      | Part of PRIMARY KEY (id)           |
| group\_subscribe\_id | int(10)      | Part of KEY (group\_subscribe\_id) |
| email                | varchar(100) | Part of KEY (email)                |
| status               | tinyint(1)   | Part of KEY (status)               |
| unsubscribed\_on     | datetime     | None                               |

## Table: `import_profiles_fields`

| Column Name             | Data Type                                                                                 | Index                             |
| ----------------------- | ----------------------------------------------------------------------------------------- | --------------------------------- |
| profile\_id             | int(11)                                                                                   | Part of PRIMARY KEY (profile\_id) |
| field\_id               | int(11)                                                                                   | Part of PRIMARY KEY (field\_id)   |
| field\_name             | varchar(100)                                                                              | None                              |
| field\_label            | varchar(50)                                                                               | None                              |
| field\_data\_type       | enum('INT','VARCHAR','DATETIME','TEXT','FLOAT','VARBINARY','DOUBLE','BIGINT','DECIMAL(15, | None                              |
| field\_length           | int(11)                                                                                   | None                              |
| field\_validation\_type | varchar(100)                                                                              | None                              |
| is\_mandatory           | tinyint(1)                                                                                | None                              |
| info\_text              | mediumtext                                                                                | None                              |
| possible\_values        | varchar(255)                                                                              | None                              |

## Table: `import_subscribed_mobiles`

| Column Name          | Data Type   | Index                              |
| -------------------- | ----------- | ---------------------------------- |
| id                   | int(10)     | Part of PRIMARY KEY (id)           |
| group\_subscribe\_id | int(10)     | Part of KEY (group\_subscribe\_id) |
| mobile               | varchar(13) | Part of KEY (mobile)               |
| status               | tinyint(1)  | Part of KEY (status)               |
| unsubscribed\_on     | datetime    | None                               |

## Table: `import_system_configs`

| Column Name        | Data Type    | Index                      |
| ------------------ | ------------ | -------------------------- |
| id                 | int(11)      | Part of KEY (id)           |
| label              | varchar(50)  | None                       |
| name               | varchar(50)  | Part of KEY (name)         |
| value              | varchar(255) | None                       |
| possible\_values   | varchar(200) | None                       |
| validation         | varchar(50)  | None                       |
| last\_updatded\_on | timestamp    | None                       |
| config\_type       | varchar(20)  | Part of KEY (config\_type) |
| is\_updatable      | tinyint(1)   | None                       |

## Table: `campaign_audience_downloads`

| Column Name   | Data Type                                | Index                    |
| ------------- | ---------------------------------------- | ------------------------ |
| id            | int(11)                                  | Part of PRIMARY KEY (id) |
| org\_id       | int(11)                                  | None                     |
| campaign\_id  | int(11)                                  | None                     |
| group\_id     | int(11)                                  | None                     |
| file\_path    | varchar(250)                             | None                     |
| file\_size    | int(11)                                  | None                     |
| status        | enum('PROCESSING','EXECUTED','ARCHIVED') | None                     |
| uploaded\_by  | int(11)                                  | None                     |
| last\_updated | timestamp                                | None                     |

## Table: `download`

| Column Name   | Data Type                                               | Index                       |
| ------------- | ------------------------------------------------------- | --------------------------- |
| id            | int(11)                                                 | Part of PRIMARY KEY (id)    |
| org\_id       | int(11)                                                 | None                        |
| status        | enum('OPEN','EXECUTED','PROCESSING','ERROR','ARCHIVED') | None                        |
| module        | varchar(50)                                             | None                        |
| action        | varchar(250)                                            | None                        |
| params        | mediumtext                                              | None                        |
| scheduled\_by | int(11)                                                 | Part of KEY (scheduled\_by) |
| last\_updated | timestamp                                               | None                        |
| expiry\_time  | datetime                                                | Part of KEY (expiry\_time)  |

## Table: `active_logins`

| Column Name          | Data Type    | Index                            |
| -------------------- | ------------ | -------------------------------- |
| id                   | int(11)      | Part of PRIMARY KEY (id)         |
| ref\_id              | int(11)      | Part of UNIQUE KEY (ref\_id)     |
| is\_valid            | tinyint(3)   | None                             |
| user\_agent          | varchar(200) | None                             |
| sso\_cookie          | varchar(40)  | Part of UNIQUE KEY (sso\_cookie) |
| user\_ip             | varchar(20)  | None                             |
| login\_attempted\_at | datetime     | None                             |
| last\_updated\_on    | datetime     | None                             |

## Table: `user_cookies`

| Column Name     | Data Type                                                | Index                      |
| --------------- | -------------------------------------------------------- | -------------------------- |
| id              | int(11)                                                  | Part of PRIMARY KEY (id)   |
| ref\_id         | int(11)                                                  | Part of KEY (ref\_id)      |
| is\_ip\_session | tinyint(4)                                               | None                       |
| user\_ip        | varchar(20)                                              | None                       |
| cookie\_hash    | varchar(100)                                             | Part of KEY (cookie\_hash) |
| is\_valid       | tinyint(1)                                               | None                       |
| valid\_days     | int(11)                                                  | None                       |
| created\_on     | datetime                                                 | None                       |
| expires\_on     | timestamp                                                | None                       |
| status          | enum('INVALID','TWO\_FACTOR\_PENDING','VALID','PENDING') | None                       |

## Table: `otp_history`

| Column Name        | Data Type                                                                                                                             | Index                    |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------ |
| id                 | bigint(20)                                                                                                                            | Part of PRIMARY KEY (id) |
| otp                | varchar(10)                                                                                                                           | None                     |
| ref\_type          | enum('LOGIN','RESET\_PASSWORD','FORGOT\_PASSWORD','OTP\_LOGIN','VALIDATE\_EMAIL','VALIDATE\_MOBILE','CHANGE\_MOBILE','CHANGE\_EMAIL') | None                     |
| ref\_id            | bigint(20)                                                                                                                            | None                     |
| loggable\_user\_id | bigint(20)                                                                                                                            | None                     |
| created\_on        | timestamp                                                                                                                             | None                     |
| expires\_on        | timestamp                                                                                                                             | None                     |
| status             | enum('VALIDATED','OPEN','EXPIRED')                                                                                                    | None                     |

## Table: `verification_log`

| Column Name                 | Data Type                         | Index                                  |
| --------------------------- | --------------------------------- | -------------------------------------- |
| id                          | int(11)                           | Part of PRIMARY KEY (id)               |
| ref\_id                     | int(11)                           | Part of KEY (ref\_id)                  |
| user\_ip                    | varchar(20)                       | None                                   |
| type                        | enum('MOBILE','EMAIL','USERNAME') | None                                   |
| identifier                  | varchar(100)                      | Part of UNIQUE KEY (identifier)        |
| verfication\_code           | varchar(100)                      | Part of UNIQUE KEY (verfication\_code) |
| number\_of\_times\_reminded | tinyint(4)                        | None                                   |
| is\_valid                   | tinyint(4)                        | None                                   |
| valid\_till                 | datetime                          | None                                   |
| last\_updated\_on           | datetime                          | None                                   |

## Table: `user_login_history_success_stories`

| Column Name     | Data Type | Index                        |
| --------------- | --------- | ---------------------------- |
| id              | int(11)   | Part of PRIMARY KEY (id)     |
| ref\_id         | int(11)   | Part of UNIQUE KEY (ref\_id) |
| last\_login\_on | datetime  | None                         |

## Table: `federated_sso_settings`

| Column Name                 | Data Type  | Index                        |
| --------------------------- | ---------- | ---------------------------- |
| id                          | bigint(20) | Part of PRIMARY KEY (id)     |
| org\_id                     | bigint(20) | Part of UNIQUE KEY (org\_id) |
| is\_org\_attribute\_enabled | tinyint(1) | None                         |
| is\_enabled                 | tinyint(1) | None                         |
| auto\_update\_time          | timestamp  | None                         |

## Table: `username_cart`

| Column Name    | Data Type                         | Index                        |
| -------------- | --------------------------------- | ---------------------------- |
| id             | int(11)                           | Part of PRIMARY KEY (id)     |
| reserverd\_for | int(11)                           | Part of KEY (reserverd\_for) |
| user\_ip       | int(11)                           | None                         |
| user\_cookie   | int(11)                           | None                         |
| type           | enum('USERNAME','EMAIL','MOBILE') | None                         |
| identifier     | varchar(100)                      | None                         |
| is\_valid      | tinyint(4)                        | None                         |
| reserved\_till | datetime                          | None                         |

## Table: `user_login_history`

| Column Name          | Data Type                 | Index                    |
| -------------------- | ------------------------- | ------------------------ |
| id                   | int(11)                   | Part of PRIMARY KEY (id) |
| ref\_id              | int(11)                   | Part of KEY (ref\_id)    |
| identifier           | varchar(255)              | None                     |
| login\_response      | enum('SUCCESS','FAILURE') | None                     |
| failed\_reason       | varchar(255)              | None                     |
| login\_attempted\_on | datetime                  | None                     |

## Table: `loggable_users`

| Column Name        | Data Type                                                   | Index                    |
| ------------------ | ----------------------------------------------------------- | ------------------------ |
| id                 | int(11)                                                     | Part of PRIMARY KEY (id) |
| org\_id            | int(11)                                                     | Part of KEY (org\_id)    |
| cluster\_region    | enum('APAC','APAC-MORE','US','EU')                          | None                     |
| type               | enum('TILL','ADMIN\_USER','STR\_SERVER','ASSOCIATE','USER') | None                     |
| ref\_id            | int(11)                                                     | Part of KEY (ref\_id)    |
| password\_salt     | varchar(100)                                                | None                     |
| password           | varchar(250)                                                | None                     |
| is\_active         | tinyint(1)                                                  | None                     |
| is\_deleted        | tinyint(4)                                                  | None                     |
| password\_validity | datetime                                                    | None                     |
| created\_by        | int(11)                                                     | None                     |
| last\_updated\_by  | int(11)                                                     | None                     |
| last\_updated\_on  | datetime                                                    | None                     |

## Table: `user_deleted_log`

| Column Name      | Data Type                          | Index                    |
| ---------------- | ---------------------------------- | ------------------------ |
| id               | int(11)                            | Part of PRIMARY KEY (id) |
| ref\_id          | int(11)                            | Part of KEY (ref\_id)    |
| cluster\_region  | enum('APAC','APAC-MORE','US','EU') | None                     |
| identifier\_type | enum('USERNAME','MOBILE','EMAIL')  | None                     |
| identifier       | varchar(255)                       | None                     |
| deleted\_by      | int(11)                            | None                     |
| deleted\_on      | datetime                           | None                     |

## Table: `password_history`

| Column Name       | Data Type    | Index                   |
| ----------------- | ------------ | ----------------------- |
| id                | int(11)      | Part of UNIQUE KEY (id) |
| ref\_id           | int(11)      | None                    |
| password\_salt    | varchar(100) | None                    |
| password          | varchar(250) | None                    |
| last\_updated\_by | int(11)      | None                    |
| last\_updated\_on | datetime     | None                    |

## Table: `user_activity_log`

| Column Name        | Data Type                               | Index                    |
| ------------------ | --------------------------------------- | ------------------------ |
| id                 | int(11)                                 | Part of PRIMARY KEY (id) |
| ref\_id            | int(11)                                 | Part of KEY (ref\_id)    |
| user\_ip           | varchar(20)                             | None                     |
| activity\_type     | enum('VIEW','CREATE','UPDATE','DELETE') | None                     |
| action\_type       | enum('SINGLE','BULK')                   | None                     |
| reference\_org\_id | int(11)                                 | None                     |
| user\_ids          | longtext                                | None                     |
| description        | longtext                                | None                     |
| activity\_date     | datetime                                | None                     |

## Table: `user_attributes`

| Column Name       | Data Type                          | Index                                 |
| ----------------- | ---------------------------------- | ------------------------------------- |
| id                | int(11)                            | Part of PRIMARY KEY (id)              |
| ref\_id           | int(11)                            | Part of KEY (ref\_id)                 |
| cluster\_region   | enum('APAC','APAC-MORE','US','EU') | Part of UNIQUE KEY (cluster\_region)  |
| identifier\_type  | enum('USERNAME','MOBILE','EMAIL')  | Part of UNIQUE KEY (identifier\_type) |
| identifier        | varchar(255)                       | Part of UNIQUE KEY (identifier)       |
| is\_verfiied      | tinyint(4)                         | None                                  |
| last\_updated\_on | datetime                           | None                                  |

## Table: `duo_factor_settings`

| Column Name                  | Data Type                                            | Index                        |
| ---------------------------- | ---------------------------------------------------- | ---------------------------- |
| id                           | int(11)                                              | Part of PRIMARY KEY (id)     |
| org\_id                      | int(11)                                              | Part of UNIQUE KEY (org\_id) |
| type                         | enum('TILL','ADMIN\_USER','STR\_SERVER','ASSOCIATE') | Part of UNIQUE KEY (type)    |
| is\_enabled                  | tinyint(4)                                           | None                         |
| otp\_validity\_in\_hours     | int(11)                                              | None                         |
| session\_validity            | int(11)                                              | None                         |
| module                       | varchar(20)                                          | Part of UNIQUE KEY (module)  |
| auto\_update\_time           | timestamp                                            | None                         |
| otp\_session\_validity       | int(11)                                              | None                         |
| two\_factor\_validity\_hours | int(11)                                              | None                         |

## Table: `verification_body_template`

| Column Name      | Data Type                                                                      | Index                          |
| ---------------- | ------------------------------------------------------------------------------ | ------------------------------ |
| id               | int(11)                                                                        | Part of PRIMARY KEY (id)       |
| org\_id          | bigint(20)                                                                     | Part of KEY (org\_id)          |
| identifier\_type | enum('USERNAME','MOBILE','EMAIL')                                              | Part of KEY (identifier\_type) |
| activity\_type   | enum('RESET\_PASSWORD','FORGOT\_PASSWORD','OTP\_LOGIN','VALIDATE\_IDENTIFIER') | None                           |
| body             | text                                                                           | None                           |

## Table: `visitors`

| Column Name                          | Data Type    | Index                                  |
| ------------------------------------ | ------------ | -------------------------------------- |
| User\_\_user\_id                     | int(20)      | Part of PRIMARY KEY (User\_\_user\_id) |
| org\_id                              | int(15)      | None                                   |
| User\_\_first\_name                  | varchar(30)  | None                                   |
| User\_\_last\_name                   | varchar(30)  | None                                   |
| User\_\_mobile                       | varchar(20)  | None                                   |
| User\_\_email                        | varchar(50)  | None                                   |
| Last\_purchased\_store\_\_store\_id  | int(20)      | None                                   |
| Last\_purchased\_store\_\_Till\_Id   | int(20)      | None                                   |
| Auto\_Update\_Time\_Cps              | int(20)      | None                                   |
| Auto\_Update\_Time\_Extnd            | int(20)      | None                                   |
| is\_registered                       | tinyint(1)   | Part of KEY (is\_registered)           |
| registration\_status                 | varchar(20)  | None                                   |
| imageQuality                         | varchar(40)  | None                                   |
| ReckoMsg                             | varchar(100) | None                                   |
| code                                 | int(10)      | None                                   |
| imageRegistered                      | int(10)      | None                                   |
| Date\_\_Date                         | date         | None                                   |
| Time\_\_Time                         | time         | None                                   |
| Last\_purchased\_store\_\_till\_name | varchar(50)  | None                                   |

## Table: `associates`

| Column Name          | Data Type    | Index                        |
| -------------------- | ------------ | ---------------------------- |
| id                   | int(20)      | Part of PRIMARY KEY (id)     |
| org\_id              | int(15)      | None                         |
| first\_name          | varchar(30)  | None                         |
| last\_name           | varchar(30)  | None                         |
| mobile               | varchar(20)  | None                         |
| email                | varchar(50)  | None                         |
| store\_id            | int(15)      | None                         |
| updated\_on          | datetime     | None                         |
| added\_on            | datetime     | None                         |
| added\_by            | int(15)      | None                         |
| is\_active           | tinyint(1)   | None                         |
| auto\_update\_time   | timestamp    | None                         |
| is\_registered       | tinyint(1)   | Part of KEY (is\_registered) |
| registration\_status | varchar(20)  | None                         |
| imageQuality         | varchar(40)  | None                         |
| ReckoMsg             | varchar(100) | None                         |
| code                 | int(10)      | None                         |
| imageRegistered      | int(10)      | None                         |
