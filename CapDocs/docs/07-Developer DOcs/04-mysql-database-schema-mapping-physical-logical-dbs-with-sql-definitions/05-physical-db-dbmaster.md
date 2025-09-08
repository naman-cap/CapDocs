---
title: 'Physical DB: dbmaster'
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
| Logical DB             | Tables                                             | Path for query                                                          |
| :--------------------- | :------------------------------------------------- | :---------------------------------------------------------------------- |
| emf                    | event\_endpoint\_replay.sql                        | dbmaster.emf.event\_endpoint\_replay                                    |
| emf                    | survey\_message\_details.sql                       | dbmaster.emf.survey\_message\_details                                   |
| emf                    | rule\_action\_info.sql                             | dbmaster.emf.rule\_action\_info                                         |
| emf                    | complex\_property\_info.sql                        | dbmaster.emf.complex\_property\_info                                    |
| emf                    | rule\_case\_action\_list.sql                       | dbmaster.emf.rule\_case\_action\_list                                   |
| emf                    | filter\_info.sql                                   | dbmaster.emf.filter\_info                                               |
| emf                    | client\_rule\_info.sql                             | dbmaster.emf.client\_rule\_info                                         |
| emf                    | rule\_info.sql                                     | dbmaster.emf.rule\_info                                                 |
| emf                    | rule\_filter\_property\_info.sql                   | dbmaster.emf.rule\_filter\_property\_info                               |
| emf                    | sent\_messages\_log.sql                            | dbmaster.emf.sent\_messages\_log                                        |
| emf                    | bulk\_upload\_rule\_files\_log.sql                 | dbmaster.emf.bulk\_upload\_rule\_files\_log                             |
| emf                    | coupon\_message\_details.sql                       | dbmaster.emf.coupon\_message\_details                                   |
| emf                    | dvs\_stats\_voucher\_issued.sql                    | dbmaster.emf.dvs\_stats\_voucher\_issued                                |
| emf                    | stats\_voucher\_issued.sql                         | dbmaster.emf.stats\_voucher\_issued                                     |
| emf                    | simple\_property\_info.sql                         | dbmaster.emf.simple\_property\_info                                     |
| emf                    | org\_event\_ruleset\_mapping.sql                   | dbmaster.emf.org\_event\_ruleset\_mapping                               |
| emf                    | filter\_property\_info.sql                         | dbmaster.emf.filter\_property\_info                                     |
| emf                    | event\_replay.sql                                  | dbmaster.emf.event\_replay                                              |
| emf                    | stats\_rule\_execution.sql                         | dbmaster.emf.stats\_rule\_execution                                     |
| emf                    | filter\_property\_values\_info.sql                 | dbmaster.emf.filter\_property\_values\_info                             |
| emf                    | ruleset\_info.sql                                  | dbmaster.emf.ruleset\_info                                              |
| emf                    | skipped\_vouchers\_stats.sql                       | dbmaster.emf.skipped\_vouchers\_stats                                   |
| emf                    | capping\_info.sql                                  | dbmaster.emf.capping\_info                                              |
| emf                    | event\_types.sql                                   | dbmaster.emf.event\_types                                               |
| emf                    | rule\_filter\_info.sql                             | dbmaster.emf.rule\_filter\_info                                         |
| emf                    | rule\_filter\_property\_values\_info.sql           | dbmaster.emf.rule\_filter\_property\_values\_info                       |
| emf                    | bulk\_upload\_rule\_error.sql                      | dbmaster.emf.bulk\_upload\_rule\_error                                  |
| ndnc                   | ndnc.sql                                           | dbmaster.ndnc.ndnc                                                      |
| personalised\_campaign | message\_groups\_child\_mapping.sql                | dbmaster.personalised\_campaign.message\_groups\_child\_mapping         |
| personalised\_campaign | user\_list\_trained\_info.sql                      | dbmaster.personalised\_campaign.user\_list\_trained\_info               |
| personalised\_campaign | org\_personalise\_campaign\_mapping.sql            | dbmaster.personalised\_campaign.org\_personalise\_campaign\_mapping     |
| personalised\_campaign | message\_groups.sql                                | dbmaster.personalised\_campaign.message\_groups                         |
| personalised\_campaign | message\_variants.sql                              | dbmaster.personalised\_campaign.message\_variants                       |
| personalised\_campaign | message\_groups\_time\_mapping.sql                 | dbmaster.personalised\_campaign.message\_groups\_time\_mapping          |
| Temp                   | master\_test\_temp\_table.sql                      | dbmaster.Temp.master\_test\_temp\_table                                 |
| referral               | invitees.sql                                       | dbmaster.referral.invitees                                              |
| referral               | campaign\_meta.sql                                 | dbmaster.referral.campaign\_meta                                        |
| referral               | referrers.sql                                      | dbmaster.referral.referrers                                             |
| referral               | referees.sql                                       | dbmaster.referral.referees                                              |
| referral               | referral\_voucher\_details.sql                     | dbmaster.referral.referral\_voucher\_details                            |
| referral               | referral\_configuration.sql                        | dbmaster.referral.referral\_configuration                               |
| msging                 | message\_adset\_mapping.sql                        | dbmaster.msging.message\_adset\_mapping                                 |
| msging                 | user\_email\_stats\_archive.sql                    | dbmaster.msging.user\_email\_stats\_archive                             |
| msging                 | msg\_subject\_index.sql                            | dbmaster.msging.msg\_subject\_index                                     |
| msging                 | email\_link\_timeline\_id\_mapping.sql             | dbmaster.msging.email\_link\_timeline\_id\_mapping                      |
| msging                 | reminder\_message\_attributes.sql                  | dbmaster.msging.reminder\_message\_attributes                           |
| msging                 | precheck\_processing\_log.sql                      | dbmaster.msging.precheck\_processing\_log                               |
| msging                 | msg\_secondary\_templates.sql                      | dbmaster.msging.msg\_secondary\_templates                               |
| msging                 | outboxes.sql                                       | dbmaster.msging.outboxes                                                |
| msging                 | email\_links\_redirection\_stats.sql               | dbmaster.msging.email\_links\_redirection\_stats                        |
| msging                 | forward\_to\_friend\_log.sql                       | dbmaster.msging.forward\_to\_friend\_log                                |
| msging                 | app\_messages.sql                                  | dbmaster.msging.app\_messages                                           |
| msging                 | publishers.sql                                     | dbmaster.msging.publishers                                              |
| msging                 | publishersInfo.sql                                 | dbmaster.msging.publishersInfo                                          |
| msging                 | subscriptions.sql                                  | dbmaster.msging.subscriptions                                           |
| msging                 | email\_links.sql                                   | dbmaster.msging.email\_links                                            |
| msging                 | campaign\_message\_relations.sql                   | dbmaster.msging.campaign\_message\_relations                            |
| msging                 | email\_links\_redirection.sql                      | dbmaster.msging.email\_links\_redirection                               |
| msging                 | email\_link\_user\_stats.sql                       | dbmaster.msging.email\_link\_user\_stats                                |
| msging                 | email\_status\_tracker.sql                         | dbmaster.msging.email\_status\_tracker                                  |
| msging                 | bulksms\_campaign.sql                              | dbmaster.msging.bulksms\_campaign                                       |
| msging                 | email\_stats.sql                                   | dbmaster.msging.email\_stats                                            |
| msging                 | email\_open\_stats.sql                             | dbmaster.msging.email\_open\_stats                                      |
| msging                 | outbox\_inbox\_mapping.sql                         | dbmaster.msging.outbox\_inbox\_mapping                                  |
| msging                 | email\_open\_timeline\_id\_mapping.sql             | dbmaster.msging.email\_open\_timeline\_id\_mapping                      |
| msging                 | message\_queue.sql                                 | dbmaster.msging.message\_queue                                          |
| msging                 | groups\_change\_log.sql                            | dbmaster.msging.groups\_change\_log                                     |
| msging                 | user\_email\_stats.sql                             | dbmaster.msging.user\_email\_stats                                      |
| ffc\_notification      | notifications.sql                                  | dbmaster.ffc\_notification.notifications                                |
| ffc\_notification      | org\_configs.sql                                   | dbmaster.ffc\_notification.org\_configs                                 |
| ffc\_notification      | store\_details.sql                                 | dbmaster.ffc\_notification.store\_details                               |
| ffc\_notification      | notification\_configs.sql                          | dbmaster.ffc\_notification.notification\_configs                        |
| temp\_coupon           | master\_test\_temp\_table.sql                      | dbmaster.temp\_coupon.master\_test\_temp\_table                         |
| ecommerce              | wish\_list\_items.sql                              | dbmaster.ecommerce.wish\_list\_items                                    |
| ecommerce              | wish\_list.sql                                     | dbmaster.ecommerce.wish\_list                                           |
| ecommerce              | review\.sql                                        | dbmaster.ecommerce.review                                               |
| reon\_summary          | daily\_till\_summary.sql                           | dbmaster.reon\_summary.daily\_till\_summary                             |
| retail\_insights       | hierarchy.sql                                      | dbmaster.retail\_insights.hierarchy                                     |
| retail\_insights       | target.sql                                         | dbmaster.retail\_insights.target                                        |
| segmentation\_engine   | upload\_csv.sql                                    | dbmaster.segmentation\_engine.upload\_csv                               |
| segmentation\_engine   | filter\_segmenation\_mapping.sql                   | dbmaster.segmentation\_engine.filter\_segmenation\_mapping              |
| segmentation\_engine   | selection\_filter.sql                              | dbmaster.segmentation\_engine.selection\_filter                         |
| purchasable\_mgmt      | purchasable\_relations.sql                         | dbmaster.purchasable\_mgmt.purchasable\_relations                       |
| purchasable\_mgmt      | purchases.sql                                      | dbmaster.purchasable\_mgmt.purchases                                    |
| purchasable\_mgmt      | purchased\_features.sql                            | dbmaster.purchasable\_mgmt.purchased\_features                          |
| purchasable\_mgmt      | purchasable.sql                                    | dbmaster.purchasable\_mgmt.purchasable                                  |
| warehouse\_import      | verification\_log.sql                              | dbmaster.warehouse\_import.verification\_log                            |
| warehouse\_import      | migration\_points\_verification.sql                | dbmaster.warehouse\_import.migration\_points\_verification              |
| warehouse\_import      | migration\_log.sql                                 | dbmaster.warehouse\_import.migration\_log                               |
| warehouse\_import      | tracker\_data\_rollout\_log.sql                    | dbmaster.warehouse\_import.tracker\_data\_rollout\_log                  |
| warehouse\_import      | tracker\_migration\_data\_mismatches.sql           | dbmaster.warehouse\_import.tracker\_migration\_data\_mismatches         |
| warehouse\_import      | expiry\_strategies\_change\_log.sql                | dbmaster.warehouse\_import.expiry\_strategies\_change\_log              |
| warehouse\_import      | tracker\_rollout\_log.sql                          | dbmaster.warehouse\_import.tracker\_rollout\_log                        |
| warehouse\_import      | instructions\_mismatch\_summary.sql                | dbmaster.warehouse\_import.instructions\_mismatch\_summary              |
| warehouse\_import      | instructions\_verification\_log.sql                | dbmaster.warehouse\_import.instructions\_verification\_log              |
| target\_loyalty        | target\_achieved\_event\_log.sql                   | dbmaster.target\_loyalty.target\_achieved\_event\_log                   |
| target\_loyalty        | user\_streaks.sql                                  | dbmaster.target\_loyalty.user\_streaks                                  |
| target\_loyalty        | target\_milestone\_triggers.sql                    | dbmaster.target\_loyalty.target\_milestone\_triggers                    |
| target\_loyalty        | target\_to\_event\_mapping.sql                     | dbmaster.target\_loyalty.target\_to\_event\_mapping                     |
| target\_loyalty        | user\_target\_streak\_mapping\_log.sql             | dbmaster.target\_loyalty.user\_target\_streak\_mapping\_log             |
| target\_loyalty        | target\_rules.sql                                  | dbmaster.target\_loyalty.target\_rules                                  |
| target\_loyalty        | target\_communications.sql                         | dbmaster.target\_loyalty.target\_communications                         |
| target\_loyalty        | target\_groups.sql                                 | dbmaster.target\_loyalty.target\_groups                                 |
| target\_loyalty        | target\_milestone\_trigger\_communications.sql     | dbmaster.target\_loyalty.target\_milestone\_trigger\_communications     |
| target\_loyalty        | user\_target.sql                                   | dbmaster.target\_loyalty.user\_target                                   |
| target\_loyalty        | target\_communication\_config\_keys.sql            | dbmaster.target\_loyalty.target\_communication\_config\_keys            |
| target\_loyalty        | upload\_details\_meta.sql                          | dbmaster.target\_loyalty.upload\_details\_meta                          |
| target\_loyalty        | target\_period\_started\_batch\_meta.sql           | dbmaster.target\_loyalty.target\_period\_started\_batch\_meta           |
| target\_loyalty        | target\_audience\_filter\_meta.sql                 | dbmaster.target\_loyalty.target\_audience\_filter\_meta                 |
| target\_loyalty        | target\_periods.sql                                | dbmaster.target\_loyalty.target\_periods                                |
| target\_loyalty        | target\_channel\_comm\_channel\_mapping.sql        | dbmaster.target\_loyalty.target\_channel\_comm\_channel\_mapping        |
| target\_loyalty        | target\_clients.sql                                | dbmaster.target\_loyalty.target\_clients                                |
| target\_loyalty        | unified\_targets\_achieved\_log.sql                | dbmaster.target\_loyalty.unified\_targets\_achieved\_log                |
| target\_loyalty        | target\_achievement\_rules.sql                     | dbmaster.target\_loyalty.target\_achievement\_rules                     |
| target\_loyalty        | cyclic\_target\_periods.sql                        | dbmaster.target\_loyalty.cyclic\_target\_periods                        |
| target\_loyalty        | target\_period\_default\_values.sql                | dbmaster.target\_loyalty.target\_period\_default\_values                |
| target\_loyalty        | target\_channels.sql                               | dbmaster.target\_loyalty.target\_channels                               |
| target\_loyalty        | streaks.sql                                        | dbmaster.target\_loyalty.streaks                                        |
| target\_loyalty        | target\_audience\_filter\_batch.sql                | dbmaster.target\_loyalty.target\_audience\_filter\_batch                |
| target\_loyalty        | batch\_upload\_details\_meta.sql                   | dbmaster.target\_loyalty.batch\_upload\_details\_meta                   |
| target\_loyalty        | target\_milestone\_triggers\_execution\_status.sql | dbmaster.target\_loyalty.target\_milestone\_triggers\_execution\_status |
| target\_loyalty        | user\_target\_event\_log.sql                       | dbmaster.target\_loyalty.user\_target\_event\_log                       |
| target\_loyalty        | target\_communication\_config\_key\_values.sql     | dbmaster.target\_loyalty.target\_communication\_config\_key\_values     |
| package\_manager       | packages.sql                                       | dbmaster.package\_manager.packages                                      |
| package\_manager       | service\_app\_mapping.sql                          | dbmaster.package\_manager.service\_app\_mapping                         |
| package\_manager       | applications.sql                                   | dbmaster.package\_manager.applications                                  |
| package\_manager       | org\_packages.sql                                  | dbmaster.package\_manager.org\_packages                                 |
| package\_manager       | features.sql                                       | dbmaster.package\_manager.features                                      |
| package\_manager       | package\_lists.sql                                 | dbmaster.package\_manager.package\_lists                                |
| package\_manager       | custom\_field\_templates.sql                       | dbmaster.package\_manager.custom\_field\_templates                      |
| package\_manager       | services.sql                                       | dbmaster.package\_manager.services                                      |
| package\_manager       | org\_features.sql                                  | dbmaster.package\_manager.org\_features                                 |
| package\_manager       | service\_types.sql                                 | dbmaster.package\_manager.service\_types                                |
| async                  | async\_jobs.sql                                    | dbmaster.async.async\_jobs                                              |
| emf\_replay            | emf\_event\_logs.sql                               | dbmaster.emf\_replay.emf\_event\_logs                                   |
| emf\_replay            | emf\_event\_logs\_new\.sql                         | dbmaster.emf\_replay.emf\_event\_logs\_new                              |
| emf\_replay            | emf\_replay\_logs.sql                              | dbmaster.emf\_replay.emf\_replay\_logs                                  |
| luci                   | coupon\_upload\_file\_headers.sql                  | dbmaster.luci.coupon\_upload\_file\_headers                             |
| luci                   | coupon\_product\_meta\_data.sql                    | dbmaster.luci.coupon\_product\_meta\_data                               |
| luci                   | coupon\_reminders.sql                              | dbmaster.luci.coupon\_reminders                                         |
| luci                   | coupons\_created\_cleanup.sql                      | dbmaster.luci.coupons\_created\_cleanup                                 |
| luci                   | reminder\_messages\_sent.sql                       | dbmaster.luci.reminder\_messages\_sent                                  |
| luci                   | redemptions\_summary\_coupon\_user.sql             | dbmaster.luci.redemptions\_summary\_coupon\_user                        |
| luci                   | coupon\_revoke\_history.sql                        | dbmaster.luci.coupon\_revoke\_history                                   |
| luci                   | rolling\_table\_mapping.sql                        | dbmaster.luci.rolling\_table\_mapping                                   |
| luci                   | coupons\_expiry.sql                                | dbmaster.luci.coupons\_expiry                                           |
| luci                   | voucher\_series.sql                                | dbmaster.luci.voucher\_series                                           |
| luci                   | owner\_info.sql                                    | dbmaster.luci.owner\_info                                               |
| luci                   | org\_voucher\_expiry\_reminder\_message.sql        | dbmaster.luci.org\_voucher\_expiry\_reminder\_message                   |
| luci                   | coupons\_created.sql                               | dbmaster.luci.coupons\_created                                          |
| luci                   | create\_coupons\_job.sql                           | dbmaster.luci.create\_coupons\_job                                      |
| luci                   | audit\_trail.sql                                   | dbmaster.luci.audit\_trail                                              |
| luci                   | coupon\_download.sql                               | dbmaster.luci.coupon\_download                                          |
| luci                   | voucher\_reminder\_messages\_sent.sql              | dbmaster.luci.voucher\_reminder\_messages\_sent                         |
| luci                   | coupon\_series\_custom\_property\_key\_value.sql   | dbmaster.luci.coupon\_series\_custom\_property\_key\_value              |
| luci                   | coupon\_redemption\_upload\_file\_headers.sql      | dbmaster.luci.coupon\_redemption\_upload\_file\_headers                 |
| luci                   | coupon\_config\_keys.sql                           | dbmaster.luci.coupon\_config\_keys                                      |
| luci                   | coupon\_upload\_summary.sql                        | dbmaster.luci.coupon\_upload\_summary                                   |
| luci                   | task\_scheduler\_meta.sql                          | dbmaster.luci.task\_scheduler\_meta                                     |
| luci                   | partner\_issued\_coupons.sql                       | dbmaster.luci.partner\_issued\_coupons                                  |
| luci                   | merge\_user\_log.sql                               | dbmaster.luci.merge\_user\_log                                          |
| luci                   | coupon\_series\_audience\_group.sql                | dbmaster.luci.coupon\_series\_audience\_group                           |
| luci                   | coupon\_reminder\_messages.sql                     | dbmaster.luci.coupon\_reminder\_messages                                |
| luci                   | coupon\_product\_data\_values.sql                  | dbmaster.luci.coupon\_product\_data\_values                             |
| luci                   | coupon\_redemption\_upload\_summary.sql            | dbmaster.luci.coupon\_redemption\_upload\_summary                       |
| luci                   | coupon\_config\_key\_values.sql                    | dbmaster.luci.coupon\_config\_key\_values                               |
| luci                   | coupon\_upload.sql                                 | dbmaster.luci.coupon\_upload                                            |
| luci                   | coupon\_series\_custom\_property\_keys.sql         | dbmaster.luci.coupon\_series\_custom\_property\_keys                    |
| slave\_transactions    | transaction\_types.sql                             | dbmaster.slave\_transactions.transaction\_types                         |
| slave\_transactions    | slave\_trackers.sql                                | dbmaster.slave\_transactions.slave\_trackers                            |

| Logical DB            | Tables                                                   | Path for query                                                                   |
| :-------------------- | :------------------------------------------------------- | :------------------------------------------------------------------------------- |
| audit\_logs           | entity\_life\_cycle.sql                                  | dbmaster.audit\_logs.entity\_life\_cycle                                         |
| audit\_logs           | api\_audit.sql                                           | dbmaster.audit\_logs.api\_audit                                                  |
| audit\_logs           | cli\_scripts.sql                                         | dbmaster.audit\_logs.cli\_scripts                                                |
| audit\_logs           | audit\_trail.sql                                         | dbmaster.audit\_logs.audit\_trail                                                |
| audit\_logs           | campaign\_audit.sql                                      | dbmaster.audit\_logs.campaign\_audit                                             |
| store\_management     | check\_in\_feedback.sql                                  | dbmaster.store\_management.check\_in\_feedback                                   |
| store\_management     | client\_versions.sql                                     | dbmaster.store\_management.client\_versions                                      |
| store\_management     | permission\_hierarchy.sql                                | dbmaster.store\_management.permission\_hierarchy                                 |
| store\_management     | Incoming\_email\_ids.sql                                 | dbmaster.store\_management.Incoming\_email\_ids                                  |
| store\_management     | issue\_revision\_log.sql                                 | dbmaster.store\_management.issue\_revision\_log                                  |
| store\_management     | client\_version\_mapping.sql                             | dbmaster.store\_management.client\_version\_mapping                              |
| store\_management     | issue\_tracker\_log.sql                                  | dbmaster.store\_management.issue\_tracker\_log                                   |
| store\_management     | issue\_tracker\_escalation.sql                           | dbmaster.store\_management.issue\_tracker\_escalation                            |
| store\_management     | apt.sql                                                  | dbmaster.store\_management.apt                                                   |
| store\_management     | assigned\_to\_user.sql                                   | dbmaster.store\_management.assigned\_to\_user                                    |
| store\_management     | issue\_tracker.sql                                       | dbmaster.store\_management.issue\_tracker                                        |
| store\_management     | notification\_configs.sql                                | dbmaster.store\_management.notification\_configs                                 |
| nse\_metadata         | segment\_query\_log.sql                                  | dbmaster.nse\_metadata.segment\_query\_log                                       |
| nse\_metadata         | status.sql                                               | dbmaster.nse\_metadata.status                                                    |
| nse\_metadata         | segment\_run\_details.sql                                | dbmaster.nse\_metadata.segment\_run\_details                                     |
| nse\_metadata         | segment\_cron.sql                                        | dbmaster.nse\_metadata.segment\_cron                                             |
| nse\_metadata         | segment\_values.sql                                      | dbmaster.nse\_metadata.segment\_values                                           |
| nse\_metadata         | jobs.sql                                                 | dbmaster.nse\_metadata.jobs                                                      |
| nse\_metadata         | segments.sql                                             | dbmaster.nse\_metadata.segments                                                  |
| nse\_metadata         | segment\_error\_summary.sql                              | dbmaster.nse\_metadata.segment\_error\_summary                                   |
| nse\_metadata         | segment\_inactive\_details.sql                           | dbmaster.nse\_metadata.segment\_inactive\_details                                |
| nse\_metadata         | changelog.sql                                            | dbmaster.nse\_metadata.changelog                                                 |
| nse\_metadata         | segment\_ftp\_metadata.sql                               | dbmaster.nse\_metadata.segment\_ftp\_metadata                                    |
| nse\_metadata         | workflow\_status.sql                                     | dbmaster.nse\_metadata.workflow\_status                                          |
| nse\_metadata         | segment.sql                                              | dbmaster.nse\_metadata.segment                                                   |
| nse\_metadata         | segment\_upload\_metadata.sql                            | dbmaster.nse\_metadata.segment\_upload\_metadata                                 |
| nse\_metadata         | segment\_filter\_metadata.sql                            | dbmaster.nse\_metadata.segment\_filter\_metadata                                 |
| nse\_metadata         | segment\_job\_details.sql                                | dbmaster.nse\_metadata.segment\_job\_details                                     |
| nse\_metadata         | communications.sql                                       | dbmaster.nse\_metadata.communications                                            |
| nse\_metadata         | segment\_partitions.sql                                  | dbmaster.nse\_metadata.segment\_partitions                                       |
| nse\_metadata         | segment\_data\_location.sql                              | dbmaster.nse\_metadata.segment\_data\_location                                   |
| nse\_metadata         | events.sql                                               | dbmaster.nse\_metadata.events                                                    |
| nse\_metadata         | job\_data.sql                                            | dbmaster.nse\_metadata.job\_data                                                 |
| nse\_metadata         | data\_formats.sql                                        | dbmaster.nse\_metadata.data\_formats                                             |
| creative\_assets      | template\_channel\_mapping.sql                           | dbmaster.creative\_assets.template\_channel\_mapping                             |
| creative\_assets      | org\_templates.sql                                       | dbmaster.creative\_assets.org\_templates                                         |
| creative\_assets      | templates.sql                                            | dbmaster.creative\_assets.templates                                              |
| creative\_assets      | template\_types.sql                                      | dbmaster.creative\_assets.template\_types                                        |
| creative\_assets      | edm\_users.sql                                           | dbmaster.creative\_assets.edm\_users                                             |
| survey\_management    | survey\_fields\_data.sql                                 | dbmaster.survey\_management.survey\_fields\_data                                 |
| survey\_management    | supported\_themes.sql                                    | dbmaster.survey\_management.supported\_themes                                    |
| survey\_management    | org\_cc\_user\_mapping.sql                               | dbmaster.survey\_management.org\_cc\_user\_mapping                               |
| survey\_management    | survey\_details.sql                                      | dbmaster.survey\_management.survey\_details                                      |
| survey\_management    | org\_cc\_form\_mapping.sql                               | dbmaster.survey\_management.org\_cc\_form\_mapping                               |
| survey\_management    | survey\_tokens.sql                                       | dbmaster.survey\_management.survey\_tokens                                       |
| survey\_management    | survey\_fields.sql                                       | dbmaster.survey\_management.survey\_fields                                       |
| survey\_management    | customer\_satisfaction.sql                               | dbmaster.survey\_management.customer\_satisfaction                               |
| survey\_management    | survey\_forms.sql                                        | dbmaster.survey\_management.survey\_forms                                        |
| health\_dashboard     | receiver\_groups.sql                                     | dbmaster.health\_dashboard.receiver\_groups                                      |
| health\_dashboard     | notifications.sql                                        | dbmaster.health\_dashboard.notifications                                         |
| health\_dashboard     | notification\_sent\_logs.sql                             | dbmaster.health\_dashboard.notification\_sent\_logs                              |
| health\_dashboard     | trackable\_entities.sql                                  | dbmaster.health\_dashboard.trackable\_entities                                   |
| health\_dashboard     | tracked\_column.sql                                      | dbmaster.health\_dashboard.tracked\_column                                       |
| health\_dashboard     | hd\_metrics.sql                                          | dbmaster.health\_dashboard.hd\_metrics                                           |
| health\_dashboard     | property\_actions.sql                                    | dbmaster.health\_dashboard.property\_actions                                     |
| health\_dashboard     | entity\_properties.sql                                   | dbmaster.health\_dashboard.entity\_properties                                    |
| health\_dashboard     | receivers.sql                                            | dbmaster.health\_dashboard.receivers                                             |
| health\_dashboard     | rules.sql                                                | dbmaster.health\_dashboard.rules                                                 |
| health\_dashboard     | actions.sql                                              | dbmaster.health\_dashboard.actions                                               |
| health\_dashboard     | data\_quality.sql                                        | dbmaster.health\_dashboard.data\_quality                                         |
| health\_dashboard     | hd\_entities.sql                                         | dbmaster.health\_dashboard.hd\_entities                                          |
| health\_dashboard     | hd\_metric\_data.sql                                     | dbmaster.health\_dashboard.hd\_metric\_data                                      |
| health\_dashboard     | properties.sql                                           | dbmaster.health\_dashboard.properties                                            |
| health\_dashboard     | tracked\_values.sql                                      | dbmaster.health\_dashboard.tracked\_values                                       |
| health\_dashboard     | notification\_triggers.sql                               | dbmaster.health\_dashboard.notification\_triggers                                |
| health\_dashboard     | entities.sql                                             | dbmaster.health\_dashboard.entities                                              |
| member\_care          | customer\_requests.sql                                   | dbmaster.member\_care.customer\_requests                                         |
| member\_care          | merge\_requests.sql                                      | dbmaster.member\_care.merge\_requests                                            |
| member\_care          | rw\_goodwill\_requests.sql                               | dbmaster.member\_care.rw\_goodwill\_requests                                     |
| member\_care          | transaction\_add\_requests.sql                           | dbmaster.member\_care.transaction\_add\_requests                                 |
| member\_care          | customer\_delete\_handlers.sql                           | dbmaster.member\_care.customer\_delete\_handlers                                 |
| member\_care          | audit\_logs.sql                                          | dbmaster.member\_care.audit\_logs                                                |
| member\_care          | request\_setting\_values.sql                             | dbmaster.member\_care.request\_setting\_values                                   |
| member\_care          | merge\_process\_log.sql                                  | dbmaster.member\_care.merge\_process\_log                                        |
| member\_care          | retro\_requests.sql                                      | dbmaster.member\_care.retro\_requests                                            |
| member\_care          | merge\_request\_handlers.sql                             | dbmaster.member\_care.merge\_request\_handlers                                   |
| member\_care          | requests.sql                                             | dbmaster.member\_care.requests                                                   |
| member\_care          | customer\_delete\_process\_log.sql                       | dbmaster.member\_care.customer\_delete\_process\_log                             |
| member\_care          | goodwill\_requests.sql                                   | dbmaster.member\_care.goodwill\_requests                                         |
| member\_care          | retro\_status\_changelog.sql                             | dbmaster.member\_care.retro\_status\_changelog                                   |
| member\_care          | auditable\_actions.sql                                   | dbmaster.member\_care.auditable\_actions                                         |
| member\_care          | change\_identifier\_requests.sql                         | dbmaster.member\_care.change\_identifier\_requests                               |
| member\_care          | request\_setting\_changelog.sql                          | dbmaster.member\_care.request\_setting\_changelog                                |
| member\_care          | request\_settings.sql                                    | dbmaster.member\_care.request\_settings                                          |
| product\_management   | inventory\_item\_attributes.sql                          | dbmaster.product\_management.inventory\_item\_attributes                         |
| product\_management   | org\_colors.sql                                          | dbmaster.product\_management.org\_colors                                         |
| product\_management   | inventory\_masters.sql                                   | dbmaster.product\_management.inventory\_masters                                  |
| product\_management   | categories.sql                                           | dbmaster.product\_management.categories                                          |
| product\_management   | sizes.sql                                                | dbmaster.product\_management.sizes                                               |
| product\_management   | inventory\_returnable.sql                                | dbmaster.product\_management.inventory\_returnable                               |
| product\_management   | inventory\_items.sql                                     | dbmaster.product\_management.inventory\_items                                    |
| product\_management   | brands.sql                                               | dbmaster.product\_management.brands                                              |
| product\_management   | colors.sql                                               | dbmaster.product\_management.colors                                              |
| product\_management   | meta\_sizes.sql                                          | dbmaster.product\_management.meta\_sizes                                         |
| product\_management   | inventory\_item\_attribute\_values.sql                   | dbmaster.product\_management.inventory\_item\_attribute\_values                  |
| product\_management   | styles.sql                                               | dbmaster.product\_management.styles                                              |
| reon                  | test\_txn\_table.sql                                     | dbmaster.reon.test\_txn\_table                                                   |
| emigran               | versions.sql                                             | dbmaster.emigran.versions                                                        |
| test\_utf8            | test\_data.sql                                           | dbmaster.test\_utf8.test\_data                                                   |
| masters               | supported\_locales.sql                                   | dbmaster.masters.supported\_locales                                              |
| masters               | mobile\_trigger\_config\_keys.sql                        | dbmaster.masters.mobile\_trigger\_config\_keys                                   |
| masters               | attribution\_lookup.sql                                  | dbmaster.masters.attribution\_lookup                                             |
| masters               | tracker\_info.sql                                        | dbmaster.masters.tracker\_info                                                   |
| masters               | api\_error\_codes.sql                                    | dbmaster.masters.api\_error\_codes                                               |
| masters               | verification\_history.sql                                | dbmaster.masters.verification\_history                                           |
| masters               | currency\_conversion\_rates.sql                          | dbmaster.masters.currency\_conversion\_rates                                     |
| masters               | org\_payment\_mode\_attribute\_possible\_values.sql      | dbmaster.masters.org\_payment\_mode\_attribute\_possible\_values                 |
| masters               | area\_details.sql                                        | dbmaster.masters.area\_details                                                   |
| masters               | organizations.sql                                        | dbmaster.masters.organizations                                                   |
| masters               | fileupload\_ftp\_mapping.sql                             | dbmaster.masters.fileupload\_ftp\_mapping                                        |
| masters               | supported\_browsers.sql                                  | dbmaster.masters.supported\_browsers                                             |
| masters               | old\_new\_zones.sql                                      | dbmaster.masters.old\_new\_zones                                                 |
| masters               | sms\_mapping.sql                                         | dbmaster.masters.sms\_mapping                                                    |
| masters               | incoming\_interaction\_org\_prefix.sql                   | dbmaster.masters.incoming\_interaction\_org\_prefix                              |
| masters               | sms\_modules.sql                                         | dbmaster.masters.sms\_modules                                                    |
| masters               | language\_pack\_supported\_languages.sql                 | dbmaster.masters.language\_pack\_supported\_languages                            |
| masters               | supported\_platform\_list.sql                            | dbmaster.masters.supported\_platform\_list                                       |
| masters               | org\_timezones.sql                                       | dbmaster.masters.org\_timezones                                                  |
| masters               | admin\_users\_queue.sql                                  | dbmaster.masters.admin\_users\_queue                                             |
| masters               | client\_file\_mappings.sql                               | dbmaster.masters.client\_file\_mappings                                          |
| masters               | org\_details.sql                                         | dbmaster.masters.org\_details                                                    |
| masters               | state\_details.sql                                       | dbmaster.masters.state\_details                                                  |
| masters               | store\_tills.sql                                         | dbmaster.masters.store\_tills                                                    |
| masters               | possible\_file\_types.sql                                | dbmaster.masters.possible\_file\_types                                           |
| masters               | stores\_add\_ons.sql                                     | dbmaster.masters.stores\_add\_ons                                                |
| masters               | org\_payment\_modes.sql                                  | dbmaster.masters.org\_payment\_modes                                             |
| masters               | admin\_users\_verification\_log.sql                      | dbmaster.masters.admin\_users\_verification\_log                                 |
| masters               | org\_roles\_backup.sql                                   | dbmaster.masters.org\_roles\_backup                                              |
| masters               | org\_currency\_ratio\_inr.sql                            | dbmaster.masters.org\_currency\_ratio\_inr                                       |
| masters               | supported\_timezones.sql                                 | dbmaster.masters.supported\_timezones                                            |
| masters               | org\_roles.sql                                           | dbmaster.masters.org\_roles                                                      |
| masters               | org\_countries.sql                                       | dbmaster.masters.org\_countries                                                  |
| masters               | org\_gateways.sql                                        | dbmaster.masters.org\_gateways                                                   |
| masters               | payment\_mode\_attribute\_possible\_values.sql           | dbmaster.masters.payment\_mode\_attribute\_possible\_values                      |
| masters               | incoming\_interaction\_actions.sql                       | dbmaster.masters.incoming\_interaction\_actions                                  |
| campaigns             | filter\_change\_log.sql                                  | dbmaster.campaigns.filter\_change\_log                                           |
| campaigns             | objective\_mapping.sql                                   | dbmaster.campaigns.objective\_mapping                                            |
| campaigns             | incentive\_points\_properties.sql                        | dbmaster.campaigns.incentive\_points\_properties                                 |
| campaigns             | not\_issued\_offers.sql                                  | dbmaster.campaigns.not\_issued\_offers                                           |
| campaigns             | group\_template\_filters.sql                             | dbmaster.campaigns.group\_template\_filters                                      |
| campaigns             | campaigns\_base.sql                                      | dbmaster.campaigns.campaigns\_base                                               |
| campaigns             | rules\_family.sql                                        | dbmaster.campaigns.rules\_family                                                 |
| campaigns             | recommendation\_mapping.sql                              | dbmaster.campaigns.recommendation\_mapping                                       |
| campaigns             | filter\_user\_mapping.sql                                | dbmaster.campaigns.filter\_user\_mapping                                         |
| campaigns             | incentive\_meta\_details.sql                             | dbmaster.campaigns.incentive\_meta\_details                                      |
| campaigns             | campaign\_reminder\_strategies.sql                       | dbmaster.campaigns.campaign\_reminder\_strategies                                |
| campaigns             | ftp\_audience\_upload.sql                                | dbmaster.campaigns.ftp\_audience\_upload                                         |
| campaigns             | objective\_meta\_details.sql                             | dbmaster.campaigns.objective\_meta\_details                                      |
| campaigns             | group\_templates.sql                                     | dbmaster.campaigns.group\_templates                                              |
| campaigns             | upload\_files\_history.sql                               | dbmaster.campaigns.upload\_files\_history                                        |
| campaigns             | rule\_simulation\_stats.sql                              | dbmaster.campaigns.rule\_simulation\_stats                                       |
| campaigns             | campaign\_roi\_types.sql                                 | dbmaster.campaigns.campaign\_roi\_types                                          |
| campaigns             | rules.sql                                                | dbmaster.campaigns.rules                                                         |
| campaigns             | ftp\_settings.sql                                        | dbmaster.campaigns.ftp\_settings                                                 |
| campaigns             | campaign\_reminder\_filters.sql                          | dbmaster.campaigns.campaign\_reminder\_filters                                   |
| campaigns             | bulk\_sms\_campaign.sql                                  | dbmaster.campaigns.bulk\_sms\_campaign                                           |
| campaigns             | msging\_default\_values.sql                              | dbmaster.campaigns.msging\_default\_values                                       |
| campaigns             | coupon\_upload\_history.sql                              | dbmaster.campaigns.coupon\_upload\_history                                       |
| campaigns             | campaign\_referrals.sql                                  | dbmaster.campaigns.campaign\_referrals                                           |
| campaigns             | camp\_entity\_ou\_mapping.sql                            | dbmaster.campaigns.camp\_entity\_ou\_mapping                                     |
| campaigns             | survey\_mapping.sql                                      | dbmaster.campaigns.survey\_mapping                                               |
| campaigns             | voucher\_expiry\_reminders.sql                           | dbmaster.campaigns.voucher\_expiry\_reminders                                    |
| campaigns             | rule\_attributes.sql                                     | dbmaster.campaigns.rule\_attributes                                              |
| campaigns             | referral\_mapping.sql                                    | dbmaster.campaigns.referral\_mapping                                             |
| campaigns             | selection\_filter.sql                                    | dbmaster.campaigns.selection\_filter                                             |
| campaigns             | incentive\_generic\_meta\_details.sql                    | dbmaster.campaigns.incentive\_generic\_meta\_details                             |
| campaigns             | campaign\_tags.sql                                       | dbmaster.campaigns.campaign\_tags                                                |
| campaigns             | audience\_groups.sql                                     | dbmaster.campaigns.audience\_groups                                              |
| campaigns             | rule\_stats.sql                                          | dbmaster.campaigns.rule\_stats                                                   |
| campaigns             | incentive\_mapping.sql                                   | dbmaster.campaigns.incentive\_mapping                                            |
| user\_management      | loyalty.sql                                              | dbmaster.user\_management.loyalty                                                |
| user\_management      | clusters\_users\_assignment.sql                          | dbmaster.user\_management.clusters\_users\_assignment                            |
| user\_management      | microsite\_mapping.sql                                   | dbmaster.user\_management.microsite\_mapping                                     |
| user\_management      | reports\_by\_org.sql                                     | dbmaster.user\_management.reports\_by\_org                                       |
| user\_management      | lead\_reasons.sql                                        | dbmaster.user\_management.lead\_reasons                                          |
| user\_management      | stores\_zbk.sql                                          | dbmaster.user\_management.stores\_zbk                                            |
| user\_management      | users.sql                                                | dbmaster.user\_management.users                                                  |
| user\_management      | cards.sql                                                | dbmaster.user\_management.cards                                                  |
| user\_management      | tracker\_info.sql                                        | dbmaster.user\_management.tracker\_info                                          |
| user\_management      | mlm\_referrals.sql                                       | dbmaster.user\_management.mlm\_referrals                                         |
| user\_management      | clusters.sql                                             | dbmaster.user\_management.clusters                                               |
| user\_management      | validation\_pin.sql                                      | dbmaster.user\_management.validation\_pin                                        |
| user\_management      | fleet\_permission\_meta.sql                              | dbmaster.user\_management.fleet\_permission\_meta                                |
| user\_management      | reports\_base.sql                                        | dbmaster.user\_management.reports\_base                                          |
| user\_management      | leads.sql                                                | dbmaster.user\_management.leads                                                  |
| user\_management      | fleet\_group\_mapping.sql                                | dbmaster.user\_management.fleet\_group\_mapping                                  |
| user\_management      | client\_cron\_entries.sql                                | dbmaster.user\_management.client\_cron\_entries                                  |
| user\_management      | user\_group\_activity\_log.sql                           | dbmaster.user\_management.user\_group\_activity\_log                             |
| user\_management      | gc\_transaction\_log.sql                                 | dbmaster.user\_management.gc\_transaction\_log                                   |
| user\_management      | fleet\_hierarchy.sql                                     | dbmaster.user\_management.fleet\_hierarchy                                       |
| user\_management      | not\_interested\_return\_bills\_failed\_log.sql          | dbmaster.user\_management.not\_interested\_return\_bills\_failed\_log            |
| user\_management      | rules\_version.sql                                       | dbmaster.user\_management.rules\_version                                         |
| user\_management      | clusters\_values.sql                                     | dbmaster.user\_management.clusters\_values                                       |
| user\_management      | printer\_template\_file\_mapping.sql                     | dbmaster.user\_management.printer\_template\_file\_mapping                       |
| user\_management      | loyalty\_tracker.sql                                     | dbmaster.user\_management.loyalty\_tracker                                       |
| user\_management      | entity\_status\_label\_actions.sql                       | dbmaster.user\_management.entity\_status\_label\_actions                         |
| user\_management      | fileupload\_ftp\_mapping.sql                             | dbmaster.user\_management.fileupload\_ftp\_mapping                               |
| user\_management      | card\_generation\_config.sql                             | dbmaster.user\_management.card\_generation\_config                               |
| user\_management      | slab\_upgrade\_log.sql                                   | dbmaster.user\_management.slab\_upgrade\_log                                     |
| user\_management      | lead\_owner\_changelog.sql                               | dbmaster.user\_management.lead\_owner\_changelog                                 |
| user\_management      | task\_campaign\_mapping.sql                              | dbmaster.user\_management.task\_campaign\_mapping                                |
| user\_management      | base\_store\_change\_log.sql                             | dbmaster.user\_management.base\_store\_change\_log                               |
| user\_management      | reminder\_log.sql                                        | dbmaster.user\_management.reminder\_log                                          |
| user\_management      | mobile\_number\_change\_request\_log.sql                 | dbmaster.user\_management.mobile\_number\_change\_request\_log                   |
| user\_management      | returned\_bills\_lineitems.sql                           | dbmaster.user\_management.returned\_bills\_lineitems                             |
| user\_management      | client\_log\_file\_mapping.sql                           | dbmaster.user\_management.client\_log\_file\_mapping                             |
| user\_management      | client\_file\_mappings.sql                               | dbmaster.user\_management.client\_file\_mappings                                 |
| user\_management      | region\_holiday.sql                                      | dbmaster.user\_management.region\_holiday                                        |
| user\_management      | loyalty\_log\_outliers.sql                               | dbmaster.user\_management.loyalty\_log\_outliers                                 |
| user\_management      | error\_description.sql                                   | dbmaster.user\_management.error\_description                                     |
| user\_management      | users\_ndnc\_status.sql                                  | dbmaster.user\_management.users\_ndnc\_status                                    |
| user\_management      | entity\_status\_meta.sql                                 | dbmaster.user\_management.entity\_status\_meta                                   |
| user\_management      | credit\_notes.sql                                        | dbmaster.user\_management.credit\_notes                                          |
| user\_management      | points\_transfer\_validation\_code.sql                   | dbmaster.user\_management.points\_transfer\_validation\_code                     |
| user\_management      | fraud\_users.sql                                         | dbmaster.user\_management.fraud\_users                                           |
| user\_management      | tracker\_conditions.sql                                  | dbmaster.user\_management.tracker\_conditions                                    |
| user\_management      | mlm\_users.sql                                           | dbmaster.user\_management.mlm\_users                                             |
| user\_management      | custom\_fields.sql                                       | dbmaster.user\_management.custom\_fields                                         |
| user\_management      | lego\_properties\_file\_mapping.sql                      | dbmaster.user\_management.lego\_properties\_file\_mapping                        |
| user\_management      | clusters\_users\_history.sql                             | dbmaster.user\_management.clusters\_users\_history                               |
| user\_management      | fleet\_groups.sql                                        | dbmaster.user\_management.fleet\_groups                                          |
| user\_management      | awarded\_points\_log.sql                                 | dbmaster.user\_management.awarded\_points\_log                                   |
| user\_management      | combo\_details.sql                                       | dbmaster.user\_management.combo\_details                                         |
| user\_management      | store\_tasks\_entries.sql                                | dbmaster.user\_management.store\_tasks\_entries                                  |
| user\_management      | merge\_customers\_log.sql                                | dbmaster.user\_management.merge\_customers\_log                                  |
| user\_management      | customer\_base\_store\_log.sql                           | dbmaster.user\_management.customer\_base\_store\_log                             |
| user\_management      | bill\_dump\_import\_attributes.sql                       | dbmaster.user\_management.bill\_dump\_import\_attributes                         |
| user\_management      | comm\_channels.sql                                       | dbmaster.user\_management.comm\_channels                                         |
| user\_management      | external\_reference\_data.sql                            | dbmaster.user\_management.external\_reference\_data                              |
| user\_management      | task\_reminder.sql                                       | dbmaster.user\_management.task\_reminder                                         |
| user\_management      | task\_update\_log.sql                                    | dbmaster.user\_management.task\_update\_log                                      |
| user\_management      | payment\_mode\_details.sql                               | dbmaster.user\_management.payment\_mode\_details                                 |
| user\_management      | task\_status.sql                                         | dbmaster.user\_management.task\_status                                           |
| user\_management      | assoc\_activity.sql                                      | dbmaster.user\_management.assoc\_activity                                        |
| user\_management      | custom\_fields\_for\_reports.sql                         | dbmaster.user\_management.custom\_fields\_for\_reports                           |
| user\_management      | incoming\_interaction\_action\_log.sql                   | dbmaster.user\_management.incoming\_interaction\_action\_log                     |
| user\_management      | groups.sql                                               | dbmaster.user\_management.groups                                                 |
| user\_management      | task\_statuses.sql                                       | dbmaster.user\_management.task\_statuses                                         |
| user\_management      | sms\_in.sql                                              | dbmaster.user\_management.sms\_in                                                |
| user\_management      | transaction\_currency\_log.sql                           | dbmaster.user\_management.transaction\_currency\_log                             |
| user\_management      | seasonal\_slabs.sql                                      | dbmaster.user\_management.seasonal\_slabs                                        |
| user\_management      | lineitem\_currency\_log.sql                              | dbmaster.user\_management.lineitem\_currency\_log                                |
| user\_management      | transaction\_account\_mapping.sql                        | dbmaster.user\_management.transaction\_account\_mapping                          |
| user\_management      | fleet\_company.sql                                       | dbmaster.user\_management.fleet\_company                                         |
| user\_management      | entity\_status.sql                                       | dbmaster.user\_management.entity\_status                                         |
| user\_management      | scheduled\_tasks.sql                                     | dbmaster.user\_management.scheduled\_tasks                                       |
| user\_management      | mobile\_number\_change\_log.sql                          | dbmaster.user\_management.mobile\_number\_change\_log                            |
| user\_management      | countries\_bak.sql                                       | dbmaster.user\_management.countries\_bak                                         |
| user\_management      | entity\_status\_actions.sql                              | dbmaster.user\_management.entity\_status\_actions                                |
| user\_management      | transaction\_delivery\_status.sql                        | dbmaster.user\_management.transaction\_delivery\_status                          |
| user\_management      | user\_family\_mapping.sql                                | dbmaster.user\_management.user\_family\_mapping                                  |
| user\_management      | images.sql                                               | dbmaster.user\_management.images                                                 |
| user\_management      | card\_generation\_log.sql                                | dbmaster.user\_management.card\_generation\_log                                  |
| user\_management      | rejected\_transaction\_retrigger\_log.sql                | dbmaster.user\_management.rejected\_transaction\_retrigger\_log                  |
| user\_management      | change\_request\_history.sql                             | dbmaster.user\_management.change\_request\_history                               |
| user\_management      | entity\_status\_labels.sql                               | dbmaster.user\_management.entity\_status\_labels                                 |
| user\_management      | uploaded\_files.sql                                      | dbmaster.user\_management.uploaded\_files                                        |
| user\_management      | store\_tasks.sql                                         | dbmaster.user\_management.store\_tasks                                           |
| user\_management      | cashier\_targets.sql                                     | dbmaster.user\_management.cashier\_targets                                       |
| user\_management      | transaction\_org\_currency\_log.sql                      | dbmaster.user\_management.transaction\_org\_currency\_log                        |
| user\_management      | transfer\_points\_log.sql                                | dbmaster.user\_management.transfer\_points\_log                                  |
| user\_management      | loyalty\_promotional\_campaign\_bills.sql                | dbmaster.user\_management.loyalty\_promotional\_campaign\_bills                  |
| user\_management      | store\_perf\_metrics.sql                                 | dbmaster.user\_management.store\_perf\_metrics                                   |
| user\_management      | comm\_scopes.sql                                         | dbmaster.user\_management.comm\_scopes                                           |
| user\_management      | tracker\_blackout\_periods.sql                           | dbmaster.user\_management.tracker\_blackout\_periods                             |
| user\_management      | trans\_messages.sql                                      | dbmaster.user\_management.trans\_messages                                        |
| user\_management      | validation\_code.sql                                     | dbmaster.user\_management.validation\_code                                       |
| user\_management      | generic\_validation\_code.sql                            | dbmaster.user\_management.generic\_validation\_code                              |
| user\_management      | mlm\_bills\_processed.sql                                | dbmaster.user\_management.mlm\_bills\_processed                                  |
| user\_management      | card\_gen\_autoinr\_values.sql                           | dbmaster.user\_management.card\_gen\_autoinr\_values                             |
| user\_management      | returned\_bills\_failed\_log.sql                         | dbmaster.user\_management.returned\_bills\_failed\_log                           |
| user\_management      | transaction\_tax\_entity.sql                             | dbmaster.user\_management.transaction\_tax\_entity                               |
| user\_management      | user\_group\_summary.sql                                 | dbmaster.user\_management.user\_group\_summary                                   |
| user\_management      | fleet\_user\_group\_permission.sql                       | dbmaster.user\_management.fleet\_user\_group\_permission                         |
| user\_management      | customer\_notes.sql                                      | dbmaster.user\_management.customer\_notes                                        |
| user\_management      | user\_data.sql                                           | dbmaster.user\_management.user\_data                                             |
| user\_management      | clientlog\_meta.sql                                      | dbmaster.user\_management.clientlog\_meta                                        |
| user\_management      | cancelled\_bills.sql                                     | dbmaster.user\_management.cancelled\_bills                                       |
| user\_management      | org\_sms\_credits.sql                                    | dbmaster.user\_management.org\_sms\_credits                                      |
| user\_management      | loyalty\_rules.sql                                       | dbmaster.user\_management.loyalty\_rules                                         |
| user\_management      | users\_optin\_status.sql                                 | dbmaster.user\_management.users\_optin\_status                                   |
| user\_management      | org\_top\_items.sql                                      | dbmaster.user\_management.org\_top\_items                                        |
| user\_management      | loyalty\_redemptions.sql                                 | dbmaster.user\_management.loyalty\_redemptions                                   |
| user\_management      | listeners.sql                                            | dbmaster.user\_management.listeners                                              |
| user\_management      | points\_split\_history.sql                               | dbmaster.user\_management.points\_split\_history                                 |
| user\_management      | reminder.sql                                             | dbmaster.user\_management.reminder                                               |
| user\_management      | gc\_base.sql                                             | dbmaster.user\_management.gc\_base                                               |
| user\_management      | shipping\_history.sql                                    | dbmaster.user\_management.shipping\_history                                      |
| user\_management      | tracker\_data.sql                                        | dbmaster.user\_management.tracker\_data                                          |
| user\_management      | mlm\_awarded\_points.sql                                 | dbmaster.user\_management.mlm\_awarded\_points                                   |
| user\_management      | stores\_clusters.sql                                     | dbmaster.user\_management.stores\_clusters                                       |
| user\_management      | custom\_sender.sql                                       | dbmaster.user\_management.custom\_sender                                         |
| user\_management      | transaction\_delivery\_status\_changelog.sql             | dbmaster.user\_management.transaction\_delivery\_status\_changelog               |
| user\_management      | shipping.sql                                             | dbmaster.user\_management.shipping                                               |
| user\_management      | shipping\_item\_details.sql                              | dbmaster.user\_management.shipping\_item\_details                                |
| user\_management      | not\_interested\_return\_bill\_lineitems.sql             | dbmaster.user\_management.not\_interested\_return\_bill\_lineitems               |
| user\_management      | user\_group\_pending\_requests.sql                       | dbmaster.user\_management.user\_group\_pending\_requests                         |
| user\_management      | selected\_fields\_for\_reports.sql                       | dbmaster.user\_management.selected\_fields\_for\_reports                         |
| user\_management      | store\_error.sql                                         | dbmaster.user\_management.store\_error                                           |
| user\_management      | not\_interested\_return\_bills.sql                       | dbmaster.user\_management.not\_interested\_return\_bills                         |
| user\_management      | loyalty\_details.sql                                     | dbmaster.user\_management.loyalty\_details                                       |
| user\_management      | leads\_sub\_status.sql                                   | dbmaster.user\_management.leads\_sub\_status                                     |
| user\_management      | redundant\_entities.sql                                  | dbmaster.user\_management.redundant\_entities                                    |
| user\_management      | redeem\_points\_offline\_requests.sql                    | dbmaster.user\_management.redeem\_points\_offline\_requests                      |
| user\_management      | fleet\_hierarchy\_roles.sql                              | dbmaster.user\_management.fleet\_hierarchy\_roles                                |
| user\_management      | api\_keys.sql                                            | dbmaster.user\_management.api\_keys                                              |
| user\_management      | entity\_mapping.sql                                      | dbmaster.user\_management.entity\_mapping                                        |
| user\_management      | mobile\_operator\_mapping.sql                            | dbmaster.user\_management.mobile\_operator\_mapping                              |
| user\_management      | integration\_post\_output\_file\_mapping.sql             | dbmaster.user\_management.integration\_post\_output\_file\_mapping               |
| user\_management      | bill\_payment\_details.sql                               | dbmaster.user\_management.bill\_payment\_details                                 |
| user\_management      | lead\_follow\_up.sql                                     | dbmaster.user\_management.lead\_follow\_up                                       |
| user\_management      | fleet\_role\_permission.sql                              | dbmaster.user\_management.fleet\_role\_permission                                |
| user\_management      | transaction\_type\_update\_log.sql                       | dbmaster.user\_management.transaction\_type\_update\_log                         |
| user\_management      | ebill\_service.sql                                       | dbmaster.user\_management.ebill\_service                                         |
| user\_management      | payment\_types.sql                                       | dbmaster.user\_management.payment\_types                                         |
| user\_management      | credits\_log.sql                                         | dbmaster.user\_management.credits\_log                                           |
| user\_management      | task\_status\_customer.sql                               | dbmaster.user\_management.task\_status\_customer                                 |
| user\_management      | org\_data.sql                                            | dbmaster.user\_management.org\_data                                              |
| user\_management      | fleet\_users.sql                                         | dbmaster.user\_management.fleet\_users                                           |
| user\_management      | returned\_bills.sql                                      | dbmaster.user\_management.returned\_bills                                        |
| user\_management      | user\_group\_mapping.sql                                 | dbmaster.user\_management.user\_group\_mapping                                   |
| user\_management      | custom\_fields\_data.sql                                 | dbmaster.user\_management.custom\_fields\_data                                   |
| user\_management      | loyalty\_not\_interested\_bills.sql                      | dbmaster.user\_management.loyalty\_not\_interested\_bills                        |
| user\_management      | transaction\_promotion\_evaluation\_mapping.sql          | dbmaster.user\_management.transaction\_promotion\_evaluation\_mapping            |
| user\_management      | consent\_status.sql                                      | dbmaster.user\_management.consent\_status                                        |
| user\_management      | missed\_call\_numbers.sql                                | dbmaster.user\_management.missed\_call\_numbers                                  |
| user\_management      | custom\_fields\_data\_log.sql                            | dbmaster.user\_management.custom\_fields\_data\_log                              |
| user\_management      | tracker\_success\_signalled\_info.sql                    | dbmaster.user\_management.tracker\_success\_signalled\_info                      |
| user\_management      | card\_series.sql                                         | dbmaster.user\_management.card\_series                                           |
| user\_management      | lead\_status\_log.sql                                    | dbmaster.user\_management.lead\_status\_log                                      |
| user\_management      | reminder\_info.sql                                       | dbmaster.user\_management.reminder\_info                                         |
| user\_management      | loyalty\_audit\_log.sql                                  | dbmaster.user\_management.loyalty\_audit\_log                                    |
| user\_management      | stores\_clusters\_values.sql                             | dbmaster.user\_management.stores\_clusters\_values                               |
| user\_management      | expired\_loyalty\_info\_log.sql                          | dbmaster.user\_management.expired\_loyalty\_info\_log                            |
| user\_management      | redemption\_request\_log.sql                             | dbmaster.user\_management.redemption\_request\_log                               |
| user\_management      | transaction\_promotion\_redemption\_log.sql              | dbmaster.user\_management.transaction\_promotion\_redemption\_log                |
| user\_management      | contact.sql                                              | dbmaster.user\_management.contact                                                |
| user\_management      | task.sql                                                 | dbmaster.user\_management.task                                                   |
| user\_management      | payment\_mode\_attribute\_values.sql                     | dbmaster.user\_management.payment\_mode\_attribute\_values                       |
| user\_management      | data\_providers\_file\_mapping.sql                       | dbmaster.user\_management.data\_providers\_file\_mapping                         |
| user\_management      | loyalty\_not\_interested\_bill\_lineitems.sql            | dbmaster.user\_management.loyalty\_not\_interested\_bill\_lineitems              |
| emf\_verification     | emf\_dvs\_verification\_log.sql                          | dbmaster.emf\_verification.emf\_dvs\_verification\_log                           |
| emf\_verification     | emf\_dvs\_mismatch\_summary.sql                          | dbmaster.emf\_verification.emf\_dvs\_mismatch\_summary                           |
| warehouse             | card\_series\_program\_mapping.sql                       | dbmaster.warehouse.card\_series\_program\_mapping                                |
| warehouse             | system\_rules.sql                                        | dbmaster.warehouse.system\_rules                                                 |
| warehouse             | bulk\_activity\_summary.sql                              | dbmaster.warehouse.bulk\_activity\_summary                                       |
| warehouse             | merge\_customer\_summary.sql                             | dbmaster.warehouse.merge\_customer\_summary                                      |
| warehouse             | event\_sub\_types.sql                                    | dbmaster.warehouse.event\_sub\_types                                             |
| warehouse             | partner\_program\_slabs.sql                              | dbmaster.warehouse.partner\_program\_slabs                                       |
| warehouse             | global\_strategies\_to\_program\_mapping.sql             | dbmaster.warehouse.global\_strategies\_to\_program\_mapping                      |
| warehouse             | points\_awarded\_customer\_promotions.sql                | dbmaster.warehouse.points\_awarded\_customer\_promotions                         |
| warehouse             | system\_rules\_scopes\_property\_values.sql              | dbmaster.warehouse.system\_rules\_scopes\_property\_values                       |
| warehouse             | customer\_enrollment.sql                                 | dbmaster.warehouse.customer\_enrollment                                          |
| warehouse             | side\_effects\_tracking.sql                              | dbmaster.warehouse.side\_effects\_tracking                                       |
| warehouse             | action\_points\_details.sql                              | dbmaster.warehouse.action\_points\_details                                       |
| warehouse             | points\_transfer\_summary.sql                            | dbmaster.warehouse.points\_transfer\_summary                                     |
| warehouse             | customer\_transactions.sql                               | dbmaster.warehouse.customer\_transactions                                        |
| warehouse             | promotions.sql                                           | dbmaster.warehouse.promotions                                                    |
| warehouse             | alternate\_currencies\_to\_points\_category\_mapping.sql | dbmaster.warehouse.alternate\_currencies\_to\_points\_category\_mapping          |
| warehouse             | liability\_owners.sql                                    | dbmaster.warehouse.liability\_owners                                             |
| warehouse             | tender\_code\_attribute.sql                              | dbmaster.warehouse.tender\_code\_attribute                                       |
| warehouse             | supplementary\_partner\_program\_expiry\_reminder.sql    | dbmaster.warehouse.supplementary\_partner\_program\_expiry\_reminder             |
| warehouse             | program\_config\_key\_values.sql                         | dbmaster.warehouse.program\_config\_key\_values                                  |
| warehouse             | supplementary\_membership\_cycle\_details.sql            | dbmaster.warehouse.supplementary\_membership\_cycle\_details                     |
| warehouse             | points\_redemption\_summary.sql                          | dbmaster.warehouse.points\_redemption\_summary                                   |
| warehouse             | points\_awarded\_bill\_lineitem\_promotions.sql          | dbmaster.warehouse.points\_awarded\_bill\_lineitem\_promotions                   |
| warehouse             | customer\_benefit\_tracking.sql                          | dbmaster.warehouse.customer\_benefit\_tracking                                   |
| warehouse             | slab\_change\_details.sql                                | dbmaster.warehouse.slab\_change\_details                                         |
| warehouse             | expiry\_reminders\_sent\_stats.sql                       | dbmaster.warehouse.expiry\_reminders\_sent\_stats                                |
| warehouse             | tracker\_conditions.sql                                  | dbmaster.warehouse.tracker\_conditions                                           |
| warehouse             | custom\_fields.sql                                       | dbmaster.warehouse.custom\_fields                                                |
| warehouse             | voucher\_issual\_item\_code\_sms\_mapping.sql            | dbmaster.warehouse.voucher\_issual\_item\_code\_sms\_mapping                     |
| warehouse             | historical\_points.sql                                   | dbmaster.warehouse.historical\_points                                            |
| warehouse             | goodwill\_points\_log.sql                                | dbmaster.warehouse.goodwill\_points\_log                                         |
| warehouse             | program.sql                                              | dbmaster.warehouse.program                                                       |
| warehouse             | returned\_bill\_details.sql                              | dbmaster.warehouse.returned\_bill\_details                                       |
| warehouse             | customer\_slab\_upgrade\_history.sql                     | dbmaster.warehouse.customer\_slab\_upgrade\_history                              |
| warehouse             | manual\_points\_adjustment\_log.sql                      | dbmaster.warehouse.manual\_points\_adjustment\_log                               |
| warehouse             | strategy\_types.sql                                      | dbmaster.warehouse.strategy\_types                                               |
| warehouse             | event\_log\_metadata.sql                                 | dbmaster.warehouse.event\_log\_metadata                                          |
| warehouse             | partner\_program\_slab\_history.sql                      | dbmaster.warehouse.partner\_program\_slab\_history                               |
| warehouse             | points\_expiry\_update\_summary.sql                      | dbmaster.warehouse.points\_expiry\_update\_summary                               |
| performance\_logs     | store\_server\_till\_reports.sql                         | dbmaster.performance\_logs.store\_server\_till\_reports                          |
| performance\_logs     | store\_server\_bulk\_upload.sql                          | dbmaster.performance\_logs.store\_server\_bulk\_upload                           |
| performance\_logs     | async\_message\_api\_requests.sql                        | dbmaster.performance\_logs.async\_message\_api\_requests                         |
| performance\_logs     | api\_hit\_table.sql                                      | dbmaster.performance\_logs.api\_hit\_table                                       |
| performance\_logs     | store\_server\_wcf\_report.sql                           | dbmaster.performance\_logs.store\_server\_wcf\_report                            |
| performance\_logs     | store\_server\_health.sql                                | dbmaster.performance\_logs.store\_server\_health                                 |
| performance\_logs     | store\_server\_sync\_logs.sql                            | dbmaster.performance\_logs.store\_server\_sync\_logs                             |
| performance\_logs     | store\_server\_sql\_svr\_health.sql                      | dbmaster.performance\_logs.store\_server\_sql\_svr\_health                       |
| performance\_logs     | api\_summary\_table.sql                                  | dbmaster.performance\_logs.api\_summary\_table                                   |
| performance\_logs     | till\_error\_report.sql                                  | dbmaster.performance\_logs.till\_error\_report                                   |
| performance\_logs     | till\_diagnostics\_bulk\_upload.sql                      | dbmaster.performance\_logs.till\_diagnostics\_bulk\_upload                       |
| performance\_logs     | till\_diagnostics.sql                                    | dbmaster.performance\_logs.till\_diagnostics                                     |
| subscription\_service | unified\_subscription\_configuration\_change\_log.sql    | dbmaster.subscription\_service.unified\_subscription\_configuration\_change\_log |
| subscription\_service | subscription\_status.sql                                 | dbmaster.subscription\_service.subscription\_status                              |
| subscription\_service | communication\_categories.sql                            | dbmaster.subscription\_service.communication\_categories                         |
| subscription\_service | unified\_subscription\_configuration.sql                 | dbmaster.subscription\_service.unified\_subscription\_configuration              |
| subscription\_service | subscription\_configuration.sql                          | dbmaster.subscription\_service.subscription\_configuration                       |
| subscription\_service | subscription\_status\_changelog.sql                      | dbmaster.subscription\_service.subscription\_status\_changelog                   |
| subscription\_service | communication\_templates.sql                             | dbmaster.subscription\_service.communication\_templates                          |
| slave\_transactions   | transaction\_types.sql                                   | dbmaster.slave\_transactions.transaction\_types                                  |
| slave\_transactions   | slave\_trackers.sql                                      | dbmaster.slave\_transactions.slave\_trackers                                     |

<br  />

## Table: `event_endpoint_replay`


| Column Name         | Data Type                                                                             | Index                                  |
| ------------------- | ------------------------------------------------------------------------------------- | -------------------------------------- |
| id                  | bigint(20)                                                                            | Part of PRIMARY KEY (id)               |
| org\_id             | int(11)                                                                               | Part of UNIQUE KEY (org\_id)           |
| endpoint\_id        | tinyint(4)                                                                            | Part of UNIQUE KEY (endpoint\_id)      |
| event\_replay\_id   | bigint(20)                                                                            | Part of UNIQUE KEY (event\_replay\_id) |
| status              | enum('SUCCESS','FAIL','PERMANENT\_FAIL','EVALUATE\_FAIL','EVALUATE\_PERMANENT\_FAIL') | None                                   |
| replay\_time        | datetime                                                                              | None                                   |
| auto\_update\_time  | timestamp                                                                             | None                                   |
| external\_responses | text                                                                                  | None                                   |

## Table: `survey_message_details`


| Column Name             | Data Type    | Index                                 |
| ----------------------- | ------------ | ------------------------------------- |
| id                      | int(11)      | Part of PRIMARY KEY (id)              |
| org\_id                 | int(11)      | Part of KEY (org\_id)                 |
| customer\_id            | int(11)      | Part of KEY (customer\_id)            |
| transaction\_id         | bigint(20)   | None                                  |
| nsadmin\_id             | bigint(20)   | None                                  |
| sent\_messages\_log\_id | bigint(20)   | Part of KEY (sent\_messages\_log\_id) |
| dvs\_campaign\_id       | bigint(20)   | None                                  |
| survey\_campaign\_id    | bigint(20)   | None                                  |
| survey\_id              | int(11)      | None                                  |
| form\_id                | int(11)      | None                                  |
| type                    | varchar(100) | None                                  |
| code                    | varchar(100) | None                                  |
| token\_id               | int(11)      | None                                  |
| token                   | mediumtext   | None                                  |
| added\_on               | datetime     | None                                  |
| auto\_update\_time      | timestamp    | Part of KEY (auto\_update\_time)      |

## Table: `rule_action_info`


| Column Name            | Data Type  | Index                                |
| ---------------------- | ---------- | ------------------------------------ |
| id                     | int(11)    | Part of PRIMARY KEY (id)             |
| org\_id                | int(11)    | Part of KEY (org\_id)                |
| name                   | mediumtext | None                                 |
| class                  | mediumtext | None                                 |
| description            | mediumtext | None                                 |
| case\_action\_list\_id | int(11)    | Part of KEY (case\_action\_list\_id) |

## Table: `complex_property_info`


| Column Name     | Data Type  | Index                         |
| --------------- | ---------- | ----------------------------- |
| id              | int(11)    | Part of PRIMARY KEY (id)      |
| org\_id         | int(11)    | Part of PRIMARY KEY (org\_id) |
| property\_id    | int(11)    | None                          |
| property\_key   | mediumtext | None                          |
| property\_value | mediumtext | None                          |

## Table: `rule_case_action_list`


| Column Name | Data Type  | Index                    |
| ----------- | ---------- | ------------------------ |
| id          | int(11)    | Part of PRIMARY KEY (id) |
| org\_id     | int(11)    | Part of KEY (org\_id)    |
| rule\_id    | int(11)    | Part of KEY (rule\_id)   |
| case\_id    | int(11)    | None                     |
| value       | mediumtext | None                     |

## Table: `filter_info`


| Column Name   | Data Type                          | Index                     |
| ------------- | ---------------------------------- | ------------------------- |
| id            | int(11)                            | Part of PRIMARY KEY (id)  |
| org\_id       | int(11)                            | Part of KEY (org\_id)     |
| context\_id   | int(11)                            | Part of KEY (context\_id) |
| context\_type | enum('RULE','RULESET','ORGCONFIG') | None                      |
| name          | mediumtext                         | None                      |
| description   | mediumtext                         | None                      |
| class         | mediumtext                         | None                      |
| include       | tinyint(1)                         | None                      |

## Table: `client_rule_info`


| Column Name       | Data Type  | Index                         |
| ----------------- | ---------- | ----------------------------- |
| id                | int(11)    | Part of PRIMARY KEY (id)      |
| org\_id           | int(11)    | Part of UNIQUE KEY (org\_id)  |
| rule\_id          | int(11)    | Part of UNIQUE KEY (rule\_id) |
| file\_id          | int(11)    | Part of UNIQUE KEY (file\_id) |
| version           | int(11)    | Part of UNIQUE KEY (version)  |
| is\_valid         | tinyint(1) | None                          |
| last\_updated     | datetime   | None                          |
| last\_updated\_by | int(11)    | None                          |

## Table: `rule_info`


| Column Name        | Data Type               | Index                     |
| ------------------ | ----------------------- | ------------------------- |
| id                 | int(11)                 | Part of PRIMARY KEY (id)  |
| org\_id            | int(11)                 | Part of KEY (org\_id)     |
| ruleset\_id        | int(11)                 | Part of KEY (ruleset\_id) |
| name               | varchar(100)            | None                      |
| description        | mediumtext              | None                      |
| expression         | mediumtext              | None                      |
| expression\_json   | mediumtext              | None                      |
| sequence\_id       | int(11)                 | None                      |
| json\_type         | enum('JNODE','DVSNODE') | None                      |
| is\_active         | tinyint(1)              | None                      |
| priority           | smallint(6)             | None                      |
| rule\_scope        | enum('SERVER','CLIENT') | None                      |
| start\_date        | datetime                | None                      |
| end\_date          | datetime                | None                      |
| created\_by        | int(11)                 | None                      |
| created\_on        | datetime                | None                      |
| last\_modified     | datetime                | None                      |
| last\_modified\_by | int(11)                 | None                      |

## Table: `rule_filter_property_info`


| Column Name      | Data Type  | Index                          |
| ---------------- | ---------- | ------------------------------ |
| id               | int(11)    | Part of PRIMARY KEY (id)       |
| org\_id          | int(11)    | Part of KEY (org\_id)          |
| rule\_filter\_id | int(11)    | Part of KEY (rule\_filter\_id) |
| name             | mediumtext | None                           |

## Table: `sent_messages_log`


| Column Name        | Data Type                                 | Index                            |
| ------------------ | ----------------------------------------- | -------------------------------- |
| id                 | int(11)                                   | Part of PRIMARY KEY (id)         |
| org\_id            | int(11)                                   | Part of KEY (org\_id)            |
| customer\_id       | int(11)                                   | Part of KEY (customer\_id)       |
| transaction\_id    | bigint(20)                                | None                             |
| nsadmin\_id        | bigint(20)                                | Part of KEY (nsadmin\_id)        |
| type               | enum('SMS','EMAIL','WECHAT','MOBILEPUSH') | None                             |
| receiver           | varchar(200)                              | None                             |
| endpoint\_name     | varchar(200)                              | None                             |
| event\_type\_id    | int(3)                                    | None                             |
| ruleset\_id        | int(11)                                   | None                             |
| rule\_id           | int(11)                                   | None                             |
| rule\_case\_id     | int(11)                                   | None                             |
| till\_id           | int(11)                                   | None                             |
| sent\_on           | datetime                                  | None                             |
| auto\_update\_time | timestamp                                 | Part of KEY (auto\_update\_time) |
| event\_log\_id     | bigint(20)                                | Part of KEY (event\_log\_id)     |

## Table: `bulk_upload_rule_files_log`


| Column Name    | Data Type                             | Index                    |
| -------------- | ------------------------------------- | ------------------------ |
| id             | int(11)                               | Part of PRIMARY KEY (id) |
| org\_id        | int(11)                               | Part of KEY (org\_id)    |
| file\_name     | varchar(100)                          | None                     |
| rules\_added   | int(11)                               | None                     |
| rules\_failed  | int(11)                               | None                     |
| uploaded\_by   | int(11)                               | None                     |
| uploaded\_on   | datetime                              | None                     |
| time\_taken    | int(11)                               | None                     |
| status         | enum('INPROGRESS','SUCCESS','FAILED') | None                     |
| error\_message | mediumtext                            | None                     |

## Table: `coupon_message_details`


| Column Name             | Data Type  | Index                                 |
| ----------------------- | ---------- | ------------------------------------- |
| id                      | int(11)    | Part of PRIMARY KEY (id)              |
| org\_id                 | int(11)    | Part of KEY (org\_id)                 |
| customer\_id            | int(11)    | Part of KEY (customer\_id)            |
| transaction\_id         | bigint(20) | None                                  |
| nsadmin\_id             | bigint(20) | None                                  |
| sent\_messages\_log\_id | bigint(20) | Part of KEY (sent\_messages\_log\_id) |
| coupon\_series\_id      | int(11)    | None                                  |
| coupon\_id              | int(11)    | None                                  |
| campaign\_id            | int(11)    | None                                  |
| added\_on               | datetime   | None                                  |
| auto\_update\_time      | timestamp  | Part of KEY (auto\_update\_time)      |

## Table: `dvs_stats_voucher_issued`


| Column Name         | Data Type  | Index                             |
| ------------------- | ---------- | --------------------------------- |
| id                  | int(11)    | Part of PRIMARY KEY (id)          |
| org\_id             | int(11)    | Part of KEY (org\_id)             |
| customer\_id        | int(11)    | None                              |
| transaction\_id     | bigint(20) | None                              |
| voucher\_series\_id | int(11)    | Part of KEY (voucher\_series\_id) |
| voucher\_id         | int(11)    | None                              |
| added\_on           | datetime   | None                              |

## Table: `stats_voucher_issued`


| Column Name          | Data Type  | Index                            |
| -------------------- | ---------- | -------------------------------- |
| id                   | int(11)    | Part of PRIMARY KEY (id)         |
| org\_id              | int(11)    | Part of KEY (org\_id)            |
| customer\_id         | int(11)    | None                             |
| transaction\_id      | bigint(20) | None                             |
| ruleset\_id          | int(11)    | Part of KEY (ruleset\_id)        |
| rule\_id             | int(11)    | None                             |
| rule\_case\_info\_id | int(11)    | None                             |
| voucher\_series\_id  | int(11)    | None                             |
| voucher\_id          | int(11)    | None                             |
| added\_on            | datetime   | None                             |
| event\_log\_id       | bigint(20) | Part of KEY (event\_log\_id)     |
| auto\_update\_time   | timestamp  | Part of KEY (auto\_update\_time) |

## Table: `simple_property_info`


| Column Name        | Data Type  | Index                          |
| ------------------ | ---------- | ------------------------------ |
| id                 | int(11)    | Part of PRIMARY KEY (id)       |
| org\_id            | int(11)    | Part of KEY (org\_id)          |
| action\_info\_id   | int(11)    | Part of KEY (action\_info\_id) |
| property\_key      | mediumtext | None                           |
| property\_value    | mediumtext | None                           |
| initialized        | tinyint(1) | None                           |
| auto\_update\_time | timestamp  | None                           |

## Table: `org_event_ruleset_mapping`


| Column Name          | Data Type    | Index                         |
| -------------------- | ------------ | ----------------------------- |
| id                   | int(11)      | Part of PRIMARY KEY (id)      |
| org\_id              | int(11)      | Part of KEY (org\_id)         |
| event\_type\_id      | int(11)      | Part of KEY (event\_type\_id) |
| rule\_set\_info\_id  | int(11)      | None                          |
| last\_modified\_on   | datetime     | None                          |
| event\_sub\_type\_id | varchar(100) | None                          |

## Table: `filter_property_info`


| Column Name | Data Type  | Index                    |
| ----------- | ---------- | ------------------------ |
| id          | int(11)    | Part of PRIMARY KEY (id) |
| org\_id     | int(11)    | Part of KEY (org\_id)    |
| filter\_id  | int(11)    | Part of KEY (filter\_id) |
| name        | mediumtext | None                     |

## Table: `event_replay`


| Column Name        | Data Type                                                                  | Index                             |
| ------------------ | -------------------------------------------------------------------------- | --------------------------------- |
| id                 | bigint(20)                                                                 | Part of PRIMARY KEY (id)          |
| org\_id            | int(11)                                                                    | Part of UNIQUE KEY (org\_id)      |
| customer\_id       | int(11)                                                                    | Part of UNIQUE KEY (customer\_id) |
| unique\_id         | varchar(50)                                                                | Part of UNIQUE KEY (unique\_id)   |
| status             | enum('SUCCESS','FAIL','PERMANENT\_FAIL','IN\_PROGRESS','PARTIAL\_SUCCESS') | Part of KEY (status)              |
| event\_type\_id    | int(11)                                                                    | None                              |
| event\_time        | datetime                                                                   | None                              |
| auto\_update\_time | timestamp                                                                  | Part of KEY (auto\_update\_time)  |
| replay\_count      | tinyint(6)                                                                 | None                              |

## Table: `stats_rule_execution`


| Column Name            | Data Type                                                         | Index                     |
| ---------------------- | ----------------------------------------------------------------- | ------------------------- |
| id                     | int(11)                                                           | Part of PRIMARY KEY (id)  |
| org\_id                | int(11)                                                           | Part of KEY (org\_id)     |
| owner                  | enum('DVS\_ENDPOINT','POINTSENGINE\_ENDPOINT','SOCIAL\_ENDPOINT') | None                      |
| customer\_id           | int(11)                                                           | None                      |
| transaction\_id        | bigint(20)                                                        | None                      |
| ruleset\_id            | int(11)                                                           | Part of KEY (ruleset\_id) |
| rule\_id               | int(11)                                                           | None                      |
| rule\_case\_action\_id | int(11)                                                           | None                      |
| rule\_case             | varchar(255)                                                      | None                      |
| executed\_on           | datetime                                                          | None                      |

## Table: `filter_property_values_info`


| Column Name          | Data Type  | Index                              |
| -------------------- | ---------- | ---------------------------------- |
| id                   | int(11)    | Part of PRIMARY KEY (id)           |
| org\_id              | int(11)    | Part of KEY (org\_id)              |
| filter\_property\_id | int(11)    | Part of KEY (filter\_property\_id) |
| value                | mediumtext | None                               |

## Table: `ruleset_info`


| Column Name        | Data Type                                                                                                                                                            | Index                    |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------ |
| id                 | int(11)                                                                                                                                                              | Part of PRIMARY KEY (id) |
| org\_id            | int(11)                                                                                                                                                              | Part of KEY (org\_id)    |
| context\_id        | bigint(20)                                                                                                                                                           | None                     |
| context\_type      | varchar(50)                                                                                                                                                          | None                     |
| owner              | enum('DVS\_ENDPOINT','POINTSENGINE\_ENDPOINT','SOCIAL\_ENDPOINT','REFERRAL\_ENDPOINT','TIMELINE\_ENDPOINT','TARGETLOYALTY\_ENDPOINT','PROMOTION\_EARNING\_ENDPOINT') | None                     |
| name               | varchar(255)                                                                                                                                                         | Part of KEY (name)       |
| description        | mediumtext                                                                                                                                                           | None                     |
| package            | varchar(256)                                                                                                                                                         | None                     |
| evaluate           | tinyint(1)                                                                                                                                                           | None                     |
| start\_date        | datetime                                                                                                                                                             | None                     |
| end\_date          | datetime                                                                                                                                                             | None                     |
| is\_active         | tinyint(1)                                                                                                                                                           | None                     |
| rule\_scope        | enum('SERVER','CLIENT')                                                                                                                                              | None                     |
| created\_by        | int(11)                                                                                                                                                              | None                     |
| created\_on        | datetime                                                                                                                                                             | None                     |
| last\_modified     | datetime                                                                                                                                                             | None                     |
| last\_modified\_by | int(11)                                                                                                                                                              | None                     |

## Table: `skipped_vouchers_stats`


| Column Name         | Data Type  | Index                      |
| ------------------- | ---------- | -------------------------- |
| id                  | int(11)    | Part of PRIMARY KEY (id)   |
| org\_id             | int(11)    | Part of KEY (org\_id)      |
| customer\_id        | int(11)    | Part of KEY (customer\_id) |
| transaction\_id     | bigint(20) | None                       |
| voucher\_series\_id | int(11)    | None                       |
| skipped\_on         | datetime   | Part of KEY (skipped\_on)  |

## Table: `capping_info`


| Column Name          | Data Type                                                | Index                       |
| -------------------- | -------------------------------------------------------- | --------------------------- |
| id                   | int(11)                                                  | Part of PRIMARY KEY (id)    |
| org\_id              | int(11)                                                  | Part of KEY (org\_id)       |
| program\_id          | int(11)                                                  | Part of KEY (program\_id)   |
| context\_id          | int(11)                                                  | Part of KEY (context\_id)   |
| context\_type        | enum('RULE','RULESET','ORGCONFIG','EVENT','ALL\_EVENTS') | Part of KEY (context\_type) |
| name                 | mediumtext                                               | None                        |
| description          | mediumtext                                               | None                        |
| class\_name          | mediumtext                                               | None                        |
| is\_active           | tinyint(1)                                               | None                        |
| property\_values     | mediumtext                                               | None                        |
| event\_sub\_type\_id | varchar(100)                                             | None                        |

## Table: `event_types`


| Column Name        | Data Type    | Index                            |
| ------------------ | ------------ | -------------------------------- |
| id                 | int(11)      | Part of PRIMARY KEY (id)         |
| category           | varchar(255) | None                             |
| name               | varchar(255) | Part of UNIQUE KEY (name)        |
| type               | enum         | None                             |
| description        | mediumtext   | None                             |
| auto\_update\_time | timestamp    | Part of KEY (auto\_update\_time) |
| created\_on        | datetime     | None                             |

## Table: `rule_filter_info`


| Column Name | Data Type  | Index                    |
| ----------- | ---------- | ------------------------ |
| id          | int(11)    | Part of PRIMARY KEY (id) |
| org\_id     | int(11)    | Part of KEY (org\_id)    |
| rule\_id    | int(11)    | Part of KEY (rule\_id)   |
| name        | mediumtext | None                     |
| class       | mediumtext | None                     |
| include     | tinyint(1) | None                     |

## Table: `rule_filter_property_values_info`


| Column Name                | Data Type  | Index                                    |
| -------------------------- | ---------- | ---------------------------------------- |
| id                         | int(11)    | Part of PRIMARY KEY (id)                 |
| org\_id                    | int(11)    | Part of KEY (org\_id)                    |
| rule\_filter\_property\_id | int(11)    | Part of KEY (rule\_filter\_property\_id) |
| value                      | mediumtext | None                                     |

## Table: `bulk_upload_rule_error`


| Column Name                                | Data Type  | Index                    |
| ------------------------------------------ | ---------- | ------------------------ |
| id                                         | int(11)    | Part of PRIMARY KEY (id) |
| org\_id                                    | int(11)    | Part of KEY (org\_id)    |
| file\_id                                   | int(100)   | Part of KEY (file\_id)   |
| expression                                 | mediumtext | None                     |
| expression\_json                           | mediumtext | None                     |
| voucher\_series\_properties\_success\_json | mediumtext | None                     |
| voucher\_series\_properties\_failure\_json | mediumtext | None                     |
| failure\_reason                            | mediumtext | None                     |

## Table: `ndnc`


| Column Name | Data Type   | Index                        |
| ----------- | ----------- | ---------------------------- |
| mobile      | varchar(15) | Part of PRIMARY KEY (mobile) |
| ndnc        | tinyint(1)  | None                         |

## Table: `message_groups_child_mapping`


| Column Name        | Data Type                   | Index                    |
| ------------------ | --------------------------- | ------------------------ |
| id                 | int(11)                     | Part of PRIMARY KEY (id) |
| req\_id            | int(11)                     | Part of KEY (req\_id)    |
| child\_group\_id   | int(11)                     | None                     |
| message\_id        | int(11)                     | None                     |
| scheduled\_on      | datetime                    | None                     |
| type               | enum('NORMAL','EXPERIMENT') | None                     |
| status             | enum('OPEN','SENT')         | None                     |
| message\_queue\_id | int(11)                     | None                     |

## Table: `user_list_trained_info`


| Column Name       | Data Type  | Index                    |
| ----------------- | ---------- | ------------------------ |
| id                | int(11)    | Part of PRIMARY KEY (id) |
| org\_id           | int(11)    | Part of KEY (org\_id)    |
| last\_trained\_at | datetime   | None                     |
| email\_sent\_at   | datetime   | None                     |
| model\_id         | int(11)    | None                     |
| is\_trained       | tinyint(1) | None                     |
| is\_new\_model    | tinyint(1) | None                     |
| is\_warn\_user    | tinyint(1) | None                     |

## Table: `org_personalise_campaign_mapping`


| Column Name                 | Data Type  | Index                 |
| --------------------------- | ---------- | --------------------- |
| org\_id                     | int(11)    | Part of KEY (org\_id) |
| is\_personalised\_enable    | tinyint(1) | None                  |
| is\_brand\_category\_enable | tinyint(1) | None                  |
| last\_modified\_by          | int(11)    | None                  |
| last\_modified\_at          | timestamp  | None                  |

## Table: `message_groups`


| Column Name        | Data Type                                                                                                                                                                                                                    | Index                         |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------- |
| id                 | int(11)                                                                                                                                                                                                                      | Part of PRIMARY KEY (id)      |
| guid               | varchar(100)                                                                                                                                                                                                                 | None                          |
| type               | enum('EMAIL','SMS','SMS\_REMINDER','EMAIL\_REMINDER','CALL\_TASK','CALL\_TASK\_REMINDER','CUSTOMER\_TASK','SMS\_EXPIRY\_REMINDER','EMAIL\_EXPIRY\_REMINDER','WECHAT','WECHAT\_REMINDER','MOBILEPUSH','MOBILEPUSH\_REMINDER') | None                          |
| channel\_id        | int(11)                                                                                                                                                                                                                      | None                          |
| org\_id            | int(11)                                                                                                                                                                                                                      | Part of PRIMARY KEY (org\_id) |
| campaign\_id       | int(11)                                                                                                                                                                                                                      | None                          |
| parent\_group\_id  | int(11)                                                                                                                                                                                                                      | None                          |
| scheduled\_on      | datetime                                                                                                                                                                                                                     | None                          |
| scheduled\_by      | int(11)                                                                                                                                                                                                                      | None                          |
| last\_updated\_on  | datetime                                                                                                                                                                                                                     | None                          |
| last\_updated\_by  | int(11)                                                                                                                                                                                                                      | None                          |
| approved\_by       | int(11)                                                                                                                                                                                                                      | None                          |
| default\_arguments | longtext                                                                                                                                                                                                                     | None                          |
| status             | enum('OPEN','SENT','REJECTED')                                                                                                                                                                                               | None                          |
| scheduled\_type    | enum('IMMEDIATELY','SCHEDULED','PARTICULAR\_DATE')                                                                                                                                                                           | None                          |
| req\_id            | int(11)                                                                                                                                                                                                                      | None                          |
| approved           | tinyint(1)                                                                                                                                                                                                                   | None                          |

## Table: `message_variants`


| Column Name        | Data Type   | Index                            |
| ------------------ | ----------- | -------------------------------- |
| id                 | int(11)     | Part of PRIMARY KEY (id)         |
| message\_group\_id | int(11)     | Part of KEY (message\_group\_id) |
| content            | longtext    | None                             |
| default            | tinyint(1)  | None                             |
| message\_type\_id  | int(11)     | None                             |
| ref\_id            | longtext    | None                             |
| ref\_type          | varchar(20) | None                             |
| is\_deleted        | tinyint(1)  | None                             |

## Table: `message_groups_time_mapping`


| Column Name        | Data Type | Index                    |
| ------------------ | --------- | ------------------------ |
| id                 | int(11)   | Part of PRIMARY KEY (id) |
| message\_group\_id | int(11)   | None                     |
| start\_time        | datetime  | None                     |
| end\_time          | datetime  | None                     |

## Table: `master_test_temp_table`


| Column Name        | Data Type  | Index                    |
| ------------------ | ---------- | ------------------------ |
| id                 | bigint(20) | Part of PRIMARY KEY (id) |
| auto\_update\_time | timestamp  | None                     |

## Table: `invitees`


| Column Name        | Data Type                            | Index                            |
| ------------------ | ------------------------------------ | -------------------------------- |
| id                 | bigint(20)                           | Part of PRIMARY KEY (id)         |
| referrer\_id       | bigint(20)                           | None                             |
| org\_id            | bigint(20)                           | Part of KEY (org\_id)            |
| campaign\_id       | int(20)                              | Part of KEY (campaign\_id)       |
| identifier         | varchar(100)                         | None                             |
| name               | varchar(20)                          | None                             |
| type               | enum('MOBILE','EMAIL','SOCIAL')      | None                             |
| client\_code       | varchar(50)                          | None                             |
| till\_id           | int(20)                              | None                             |
| client\_type       | enum('CLIENT','MICRO\_SITE','OTHER') | None                             |
| invited\_on        | datetime                             | None                             |
| auto\_update\_time | timestamp                            | Part of KEY (auto\_update\_time) |

## Table: `campaign_meta`


| Column Name       | Data Type               | Index                             |
| ----------------- | ----------------------- | --------------------------------- |
| campaign\_id      | bigint(20)              | Part of UNIQUE KEY (campaign\_id) |
| org\_id           | bigint(20)              | Part of UNIQUE KEY (org\_id)      |
| incentivise\_type | enum('TRIGGER','FINAL') | None                              |
| referral\_type    | varchar(50)             | None                              |
| default\_at\_pos  | tinyint(1)              | None                              |
| invite\_loyalty   | tinyint(1)              | None                              |
| base\_url         | varchar(100)            | None                              |
| sms\_template     | mediumtext              | None                              |
| email\_subject    | mediumtext              | None                              |
| email\_template   | mediumtext              | None                              |
| token             | varchar(20)             | Part of KEY (token)               |

## Table: `referrers`


| Column Name        | Data Type   | Index                            |
| ------------------ | ----------- | -------------------------------- |
| id                 | bigint(20)  | Part of PRIMARY KEY (id)         |
| ref\_user\_id      | bigint(20)  | Part of KEY (ref\_user\_id)      |
| org\_id            | int(11)     | Part of KEY (org\_id)            |
| referral\_type     | varchar(20) | None                             |
| campaign\_id       | bigint(20)  | Part of KEY (campaign\_id)       |
| token              | varchar(50) | Part of KEY (token)              |
| created\_on        | datetime    | None                             |
| auto\_update\_time | timestamp   | Part of KEY (auto\_update\_time) |

## Table: `referees`


| Column Name        | Data Type                          | Index                            |
| ------------------ | ---------------------------------- | -------------------------------- |
| id                 | bigint(20)                         | Part of PRIMARY KEY (id)         |
| referrer\_id       | bigint(20)                         | Part of KEY (referrer\_id)       |
| referrer\_user\_id | int(20)                            | None                             |
| org\_id            | bigint(20)                         | Part of KEY (org\_id)            |
| campaign\_id       | int(20)                            | None                             |
| user\_id           | bigint(20)                         | Part of KEY (user\_id)           |
| till\_id           | int(20)                            | None                             |
| context\_id        | bigint(20)                         | None                             |
| event              | enum('TRANSACTION','REGISTRATION') | None                             |
| added\_on          | datetime                           | None                             |
| auto\_update\_time | timestamp                          | Part of KEY (auto\_update\_time) |

## Table: `referral_voucher_details`


| Column Name         | Data Type                  | Index                            |
| ------------------- | -------------------------- | -------------------------------- |
| voucher\_id         | bigint(20)                 | Part of KEY (voucher\_id)        |
| voucher\_code       | varchar(20)                | None                             |
| type                | enum('REFERRER','REFEREE') | None                             |
| identifier          | bigint(20)                 | None                             |
| org\_id             | bigint(20)                 | Part of KEY (org\_id)            |
| voucher\_series\_id | bigint(20)                 | None                             |
| event               | varchar(20)                | None                             |
| till\_id            | int(20)                    | None                             |
| added\_on           | datetime                   | None                             |
| auto\_update\_time  | timestamp                  | Part of KEY (auto\_update\_time) |

## Table: `referral_configuration`


| Column Name              | Data Type               | Index                    |
| ------------------------ | ----------------------- | ------------------------ |
| id                       | int(11)                 | Part of PRIMARY KEY (id) |
| org\_id                  | int(11)                 | Part of KEY (org\_id)    |
| referral\_config\_type   | enum('RANDOM','CUSTOM') | None                     |
| referral\_code\_settings | mediumtext              | None                     |
| is\_active               | tinyint(1)              | None                     |
| created\_on              | timestamp               | None                     |
| created\_by              | bigint(20)              | None                     |
| auto\_update\_time       | timestamp               | None                     |

## Table: `message_adset_mapping`


| Column Name        | Data Type  | Index                            |
| ------------------ | ---------- | -------------------------------- |
| id                 | int(11)    | Part of PRIMARY KEY (id)         |
| org\_id            | int(11)    | Part of KEY (org\_id)            |
| message\_queue\_id | int(11)    | Part of KEY (message\_queue\_id) |
| adset\_id          | mediumtext | None                             |
| adset\_name        | mediumtext | None                             |
| last\_updated\_on  | timestamp  | None                             |
| last\_updated\_by  | int(11)    | None                             |
| is\_active         | tinyint(1) | Part of KEY (is\_active)         |
| auto\_update\_time | timestamp  | Part of KEY (auto\_update\_time) |

## Table: `user_email_stats_archive`


| Column Name    | Data Type    | Index                         |
| -------------- | ------------ | ----------------------------- |
| id             | int(11)      | Part of PRIMARY KEY (id)      |
| campaign\_id   | int(11)      | None                          |
| group\_id      | int(11)      | None                          |
| msg\_id        | int(11)      | None                          |
| user\_id       | int(11)      | None                          |
| org\_id        | int(11)      | Part of PRIMARY KEY (org\_id) |
| browser        | varchar(50)  | None                          |
| platform       | varchar(30)  | None                          |
| mobile\_device | varchar(30)  | None                          |
| user\_agent    | varchar(150) | None                          |
| opened\_on     | datetime     | None                          |

## Table: `msg_subject_index`


| Column Name | Data Type  | Index                         |
| ----------- | ---------- | ----------------------------- |
| id          | int(11)    | Part of PRIMARY KEY (id)      |
| org\_id     | int(11)    | Part of PRIMARY KEY (org\_id) |
| subject     | mediumtext | None                          |

## Table: `email_link_timeline_id_mapping`


| Column Name   | Data Type  | Index                    |
| ------------- | ---------- | ------------------------ |
| id            | int(11)    | Part of PRIMARY KEY (id) |
| ref\_id       | int(11)    | Part of KEY (ref\_id)    |
| timeline\_id  | int(11)    | None                     |
| milestone\_id | int(11)    | None                     |
| rule\_case    | tinyint(1) | None                     |

## Table: `reminder_message_attributes`


| Column Name                    | Data Type    | Index                             |
| ------------------------------ | ------------ | --------------------------------- |
| id                             | int(11)      | Part of PRIMARY KEY (id)          |
| org\_id                        | int(11)      | Part of UNIQUE KEY (org\_id)      |
| campaign\_id                   | int(11)      | Part of UNIQUE KEY (campaign\_id) |
| message\_id                    | int(11)      | Part of UNIQUE KEY (message\_id)  |
| reminder\_strategy\_id         | int(11)      | None                              |
| contacted\_audience\_group\_id | varchar(255) | None                              |
| responder\_audience\_group\_id | varchar(255) | None                              |
| auto\_update\_time             | timestamp    | None                              |

## Table: `precheck_processing_log`


| Column Name        | Data Type                                                     | Index                         |
| ------------------ | ------------------------------------------------------------- | ----------------------------- |
| id                 | int(11)                                                       | Part of PRIMARY KEY (id)      |
| org\_id            | int(11)                                                       | Part of PRIMARY KEY (org\_id) |
| message\_id        | int(11)                                                       | None                          |
| campaign\_id       | int(11)                                                       | None                          |
| status             | enum('USER\_REFRESH','POSTPONED','PRECHECK','CLOSED','ERROR') | None                          |
| error              | varchar(512)                                                  | None                          |
| start\_date        | datetime                                                      | None                          |
| end\_date          | datetime                                                      | None                          |
| auto\_update\_time | timestamp                                                     | None                          |

## Table: `msg_secondary_templates`


| Column Name        | Data Type   | Index                    |
| ------------------ | ----------- | ------------------------ |
| id                 | int(11)     | Part of PRIMARY KEY (id) |
| org\_id            | int(11)     | Part of KEY (org\_id)    |
| module             | varchar(50) | None                     |
| ref\_id            | int(11)     | Part of KEY (ref\_id)    |
| msg\_type          | varchar(50) | None                     |
| msg\_body          | longtext    | None                     |
| lang\_id           | int(11)     | None                     |
| default\_params    | longtext    | None                     |
| is\_deleted        | tinyint(1)  | None                     |
| last\_updated\_by  | int(11)     | None                     |
| auto\_update\_time | timestamp   | None                     |

## Table: `outboxes`


| Column Name      | Data Type                                                                                              | Index                           |
| ---------------- | ------------------------------------------------------------------------------------------------------ | ------------------------------- |
| messageId        | int(11)                                                                                                | Part of PRIMARY KEY (messageId) |
| guid             | varchar(100)                                                                                           | Part of KEY (guid)              |
| type             | enum('EMAIL','SMS','STORE\_TASK','WECHAT','PUSH','ANDROID','IOS','FACEBOOK','GOOGLE','TWITTER','LINE') | None                            |
| publisherId      | int(11)                                                                                                | None                            |
| messageText      | longtext                                                                                               | None                            |
| body             | longtext                                                                                               | None                            |
| recepientType    | enum('subscriber','callback','listed','filtered','grouped','dummy','timeline','social')                | None                            |
| recepientList    | longtext                                                                                               | None                            |
| categoryIds      | mediumtext                                                                                             | None                            |
| sendTime         | datetime                                                                                               | None                            |
| sendTaskId       | int(11)                                                                                                | None                            |
| status           | enum('opened','processing','paused','closed')                                                          | Part of KEY (status)            |
| numDeliveries    | int(11)                                                                                                | None                            |
| defaultArguments | longtext                                                                                               | None                            |
| createdTime      | datetime                                                                                               | None                            |
| priority         | int(11)                                                                                                | None                            |

## Table: `email_links_redirection_stats`


| Column Name             | Data Type  | Index                                 |
| ----------------------- | ---------- | ------------------------------------- |
| id                      | bigint(20) | Part of PRIMARY KEY (id)              |
| org\_id                 | int(11)    | Part of KEY (org\_id)                 |
| ref\_id                 | int(11)    | Part of KEY (ref\_id)                 |
| user\_id                | int(11)    | Part of UNIQUE KEY (user\_id)         |
| clicks                  | int(11)    | None                                  |
| last\_updated\_on       | datetime   | None                                  |
| auto\_update\_timestamp | timestamp  | Part of KEY (auto\_update\_timestamp) |

## Table: `forward_to_friend_log`


| Column Name    | Data Type    | Index                            |
| -------------- | ------------ | -------------------------------- |
| id             | int(11)      | Part of PRIMARY KEY (id)         |
| user\_id       | bigint(20)   | Part of KEY (user\_id)           |
| outbox\_id     | int(11)      | Part of UNIQUE KEY (outbox\_id)  |
| org\_id        | bigint(20)   | Part of KEY (org\_id)            |
| campaign\_id   | int(11)      | Part of KEY (campaign\_id)       |
| nsadmin\_id    | int(11)      | Part of UNIQUE KEY (nsadmin\_id) |
| message        | mediumtext   | None                             |
| receiver       | varchar(100) | None                             |
| sender         | varchar(100) | None                             |
| receiver\_name | varchar(100) | None                             |
| token          | mediumtext   | None                             |
| sent\_time     | datetime     | None                             |

## Table: `app_messages`


| Column Name    | Data Type                              | Index                         |
| -------------- | -------------------------------------- | ----------------------------- |
| id             | int(11)                                | Part of PRIMARY KEY (id)      |
| org\_id        | int(11)                                | Part of PRIMARY KEY (org\_id) |
| user\_id       | int(11)                                | None                          |
| mobile         | varchar(15)                            | None                          |
| type           | enum('TEXT','IMAGE','HTML')            | None                          |
| body           | text                                   | None                          |
| status         | enum('UNREAD','SENT','READ','DELETED') | None                          |
| priority       | enum('HIGH','LOW')                     | None                          |
| received\_time | datetime                               | None                          |
| sent\_time     | datetime                               | None                          |
| update\_time   | datetime                               | None                          |

## Table: `publishers`


| Column Name  | Data Type    | Index                             |
| ------------ | ------------ | --------------------------------- |
| publisherId  | int(11)      | Part of UNIQUE KEY (publisherId)  |
| categoryId   | mediumint(9) | Part of UNIQUE KEY (categoryId)   |
| categoryCode | varchar(20)  | Part of UNIQUE KEY (categoryCode) |

## Table: `publishersInfo`


| Column Name    | Data Type    | Index                             |
| -------------- | ------------ | --------------------------------- |
| publisherId    | mediumint(9) | Part of PRIMARY KEY (publisherId) |
| name           | varchar(50)  | None                              |
| code           | varchar(20)  | Part of UNIQUE KEY (code)         |
| mobile\_number | varchar(12)  | None                              |

## Table: `subscriptions`


| Column Name    | Data Type   | Index                              |
| -------------- | ----------- | ---------------------------------- |
| publisherId    | bigint(20)  | Part of KEY (publisherId)          |
| subscriberId   | bigint(20)  | Part of PRIMARY KEY (subscriberId) |
| categoryId     | smallint(6) | Part of KEY (categoryId)           |
| subscriberName | varchar(30) | None                               |
| date           | timestamp   | None                               |

## Table: `email_links`


| Column Name    | Data Type  | Index                      |
| -------------- | ---------- | -------------------------- |
| id             | int(11)    | Part of PRIMARY KEY (id)   |
| messageId      | int(11)    | Part of KEY (messageId)    |
| url            | mediumtext | None                       |
| campaign\_id   | bigint(20) | Part of KEY (campaign\_id) |
| group\_id      | bigint(20) | Part of KEY (group\_id)    |
| org\_id        | bigint(20) | Part of KEY (org\_id)      |
| last\_read\_at | timestamp  | None                       |
| status         | int(11)    | None                       |

## Table: `campaign_message_relations`


| Column Name         | Data Type                  | Index                            |
| ------------------- | -------------------------- | -------------------------------- |
| id                  | int(11)                    | Part of PRIMARY KEY (id)         |
| org\_id             | int(11)                    | Part of KEY (org\_id)            |
| campaign\_id        | int(11)                    | Part of KEY (campaign\_id)       |
| parent\_message\_id | int(11)                    | None                             |
| child\_message\_id  | int(11)                    | Part of KEY (child\_message\_id) |
| relation\_type      | enum('CAMPAIGN\_REMINDER') | None                             |
| auto\_update\_time  | timestamp                  | None                             |

## Table: `email_links_redirection`


| Column Name             | Data Type   | Index                                 |
| ----------------------- | ----------- | ------------------------------------- |
| id                      | bigint(20)  | Part of PRIMARY KEY (id)              |
| org\_id                 | int(11)     | Part of PRIMARY KEY (org\_id)         |
| message\_id             | bigint(20)  | Part of KEY (message\_id)             |
| url                     | mediumtext  | None                                  |
| clicks                  | smallint(6) | None                                  |
| type                    | varchar(64) | None                                  |
| campaign\_id            | int(11)     | None                                  |
| auto\_update\_timestamp | timestamp   | Part of KEY (auto\_update\_timestamp) |

## Table: `email_link_user_stats`


| Column Name       | Data Type  | Index                           |
| ----------------- | ---------- | ------------------------------- |
| id                | bigint(20) | Part of PRIMARY KEY (id)        |
| org\_id           | int(11)    | Part of KEY (org\_id)           |
| user\_id          | int(11)    | Part of KEY (user\_id)          |
| ref\_id           | int(11)    | Part of KEY (ref\_id)           |
| browser\_id       | int(11)    | None                            |
| mobile\_id        | int(11)    | None                            |
| platform\_id      | int(11)    | None                            |
| last\_updated\_on | datetime   | Part of KEY (last\_updated\_on) |

## Table: `email_status_tracker`


| Column Name   | Data Type | Index                    |
| ------------- | --------- | ------------------------ |
| id            | int(11)   | Part of PRIMARY KEY (id) |
| last\_run\_on | datetime  | None                     |

## Table: `bulksms_campaign`


| Column Name  | Data Type  | Index                             |
| ------------ | ---------- | --------------------------------- |
| id           | bigint(20) | Part of PRIMARY KEY (id)          |
| campaign\_id | int(11)    | Part of UNIQUE KEY (campaign\_id) |
| msg\_id      | int(11)    | Part of KEY (msg\_id)             |
| group\_id    | int(11)    | Part of KEY (group\_id)           |
| sent\_date   | timestamp  | None                              |
| org\_id      | bigint(20) | Part of PRIMARY KEY (org\_id)     |
| queue\_id    | bigint(20) | None                              |

## Table: `email_stats`


| Column Name       | Data Type   | Index                          |
| ----------------- | ----------- | ------------------------------ |
| id                | int(11)     | Part of PRIMARY KEY (id)       |
| org\_id           | int(11)     | Part of PRIMARY KEY (org\_id)  |
| campaign\_id      | int(11)     | None                           |
| group\_id         | int(11)     | Part of UNIQUE KEY (group\_id) |
| msg\_id           | int(11)     | Part of UNIQUE KEY (msg\_id)   |
| read\_count       | int(11)     | None                           |
| last\_updated\_on | datetime    | None                           |
| type              | varchar(64) | None                           |

## Table: `email_open_stats`


| Column Name    | Data Type   | Index                        |
| -------------- | ----------- | ---------------------------- |
| id             | int(11)     | Part of PRIMARY KEY (id)     |
| messageId      | int(11)     | Part of KEY (messageId)      |
| opened\_by     | int(11)     | Part of KEY (opened\_by)     |
| campaign\_id   | bigint(20)  | None                         |
| group\_id      | bigint(20)  | None                         |
| org\_id        | bigint(20)  | Part of KEY (org\_id)        |
| last\_read\_at | timestamp   | Part of KEY (last\_read\_at) |
| type           | varchar(64) | None                         |

## Table: `outbox_inbox_mapping`


| Column Name           | Data Type    | Index                           |
| --------------------- | ------------ | ------------------------------- |
| id                    | int(11)      | Part of PRIMARY KEY (id)        |
| org\_id               | int(11)      | Part of PRIMARY KEY (org\_id)   |
| outbox\_id            | int(11)      | Part of UNIQUE KEY (outbox\_id) |
| database\_name        | varchar(100) | None                            |
| archived\_table\_name | varchar(100) | None                            |
| last\_updated\_on     | datetime     | None                            |

## Table: `email_open_timeline_id_mapping`


| Column Name   | Data Type  | Index                    |
| ------------- | ---------- | ------------------------ |
| id            | int(11)    | Part of PRIMARY KEY (id) |
| ref\_id       | int(11)    | Part of KEY (ref\_id)    |
| timeline\_id  | int(11)    | None                     |
| milestone\_id | int(11)    | None                     |
| rule\_case    | tinyint(1) | None                     |

## Table: `message_queue`


| Column Name        | Data Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Index                            |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- |
| id                 | int(11)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Part of PRIMARY KEY (id)         |
| guid               | varchar(100)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | None                             |
| type               | enum('EMAIL','SMS','SMS\_REMINDER','EMAIL\_REMINDER','CALL\_TASK','CALL\_TASK\_REMINDER','CUSTOMER\_TASK','SMS\_EXPIRY\_REMINDER','EMAIL\_EXPIRY\_REMINDER','WECHAT','WECHAT\_REMINDER','MOBILEPUSH','MOBILEPUSH\_REMINDER','FACEBOOK','GOOGLE','TWITTER','SMS\_CAMPAIGN\_REMINDER','EMAIL\_CAMPAIGN\_REMINDER','WECHAT\_CAMPAIGN\_REMINDER','MOBILEPUSH\_CAMPAIGN\_REMINDER','CALLTASK\_CAMPAIGN\_REMINDER','FACEBOOK\_CAMPAIGN\_REMINDER','GOOGLE\_CAMPAIGN\_REMINDER','TWITTER\_CAMPAIGN\_REMINDER','LINE','LINE\_REMINDER','LINE\_CAMPAIGN\_REMINDER', | None                             |
| org\_id            | int(11)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Part of KEY (org\_id)            |
| campaign\_id       | int(11)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Part of KEY (campaign\_id)       |
| group\_id          | int(11)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Part of KEY (group\_id)          |
| scheduled\_on      | datetime                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | None                             |
| scheduled\_by      | int(11)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | None                             |
| last\_updated\_on  | timestamp                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | None                             |
| approved\_by       | int(11)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | None                             |
| default\_arguments | longtext                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | None                             |
| status             | enum('OPEN','SENT','REJECTED','MIGRATED')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | None                             |
| scheduled\_type    | enum('IMMEDIATELY','SCHEDULED','PARTICULAR\_DATE',                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | None                             |
| params             | longtext                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | None                             |
| approved           | int(11)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | None                             |
| auto\_update\_time | timestamp                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Part of KEY (auto\_update\_time) |

## Table: `groups_change_log`


| Column Name | Data Type  | Index                    |
| ----------- | ---------- | ------------------------ |
| id          | int(11)    | Part of PRIMARY KEY (id) |
| group\_id   | bigint(20) | Part of KEY (group\_id)  |
| org\_id     | bigint(20) | Part of KEY (org\_id)    |
| reason      | mediumtext | None                     |
| updated\_on | date       | None                     |
| updated\_by | bigint(20) | None                     |

## Table: `user_email_stats`


| Column Name        | Data Type    | Index                            |
| ------------------ | ------------ | -------------------------------- |
| id                 | int(11)      | Part of PRIMARY KEY (id)         |
| campaign\_id       | int(11)      | Part of KEY (campaign\_id)       |
| group\_id          | int(11)      | Part of KEY (group\_id)          |
| msg\_id            | int(11)      | Part of KEY (msg\_id)            |
| clicks             | int(11)      | None                             |
| user\_id           | int(11)      | Part of UNIQUE KEY (user\_id)    |
| org\_id            | int(11)      | Part of KEY (org\_id)            |
| browser\_id        | int(11)      | None                             |
| platform\_id       | int(11)      | None                             |
| mobile\_device\_id | int(11)      | None                             |
| user\_agent        | varchar(150) | None                             |
| opened\_on         | datetime     | Part of KEY (opened\_on)         |
| type               | varchar(64)  | None                             |
| auto\_update\_time | timestamp    | Part of KEY (auto\_update\_time) |

## Table: `notifications`


| Column Name              | Data Type                                           | Index                    |
| ------------------------ | --------------------------------------------------- | ------------------------ |
| id                       | int(100)                                            | Part of PRIMARY KEY (id) |
| notification\_config\_id | int(100)                                            | None                     |
| type                     | enum('DATA-SANITY','UNDER-PERFORMANCE','MILESTONE') | None                     |
| kpis                     | enum('VISITOR','BILLS','CONVERSION','SALES')        | None                     |
| priority\_type           | enum('INFO','ERROR')                                | None                     |
| target                   | int(30)                                             | None                     |
| org\_id                  | int(20)                                             | None                     |
| user\_id                 | int(100)                                            | None                     |
| role                     | varchar(50)                                         | None                     |
| user\_type               | enum('USER',                                        | None                     |
| user\_enitity\_type      | enum('ZONE','CONCEPT','STORE','STR\_SERVER')        | None                     |
| sent\_time               | timestamp                                           | None                     |
| status                   | enum('SENT','FAILED','SUCCESSFUL')                  | None                     |
| readAt                   | timestamp                                           | None                     |
| title                    | varchar(100)                                        | None                     |
| header                   | varchar(50)                                         | None                     |
| message                  | varchar(300)                                        | None                     |
| defaulter\_entites       | varchar(700)                                        | None                     |
| channel                  | enum('PUSH','EMAIL')                                | None                     |
| createdBy                | int(50)                                             | None                     |
| createdOn                | timestamp                                           | None                     |

## Table: `org_configs`


| Column Name      | Data Type  | Index                    |
| ---------------- | ---------- | ------------------------ |
| id               | int(50)    | Part of PRIMARY KEY (id) |
| org\_id          | int(30)    | None                     |
| is\_ffc\_enabled | tinyint(1) | None                     |

## Table: `store_details`


| Column Name      | Data Type    | Index                    |
| ---------------- | ------------ | ------------------------ |
| id               | INT          | Part of PRIMARY KEY (id) |
| notification\_id | bigint(20)   | None                     |
| org\_id          | int(50)      | None                     |
| store\_id        | int(50)      | None                     |
| store\_name      | varchar(100) | None                     |
| till\_id         | int(50)      | None                     |
| till\_name       | varchar(100) | None                     |
| device\_id       | bigint(20)   | None                     |
| lasteEventTime   | datetime     | None                     |
| autoUpdatedAt    | timestamp    | None                     |

## Table: `notification_configs`


| Column Name        | Data Type                                                    | Index                    |
| ------------------ | ------------------------------------------------------------ | ------------------------ |
| id                 | int(100)                                                     | Part of PRIMARY KEY (id) |
| name               | varchar(100)                                                 | None                     |
| orgId              | int(50)                                                      | None                     |
| type               | enum('DATA-SANITY','UNDER-PERFORMANCE','MILESTONE-ACHIEVED') | None                     |
| kpi                | enum('VISITOR','BILLS','CONVERSION','SALES')                 | None                     |
| priority\_type     | enum('INFO','ERROR')                                         | None                     |
| target             | int(30)                                                      | None                     |
| selfRoles          | varchar(100)                                                 | None                     |
| parentRoles        | varchar(100)                                                 | None                     |
| user\_type         | enum('USER',                                                 | None                     |
| scheduledInterval  | int(50)                                                      | None                     |
| scheduledTime      | time                                                         | None                     |
| scheduler\_id      | int(200)                                                     | None                     |
| is\_email\_enabled | tinyint(4)                                                   | None                     |
| is\_push\_enabled  | tinyint(4)                                                   | None                     |
| time\_zone         | varchar(10)                                                  | None                     |
| is\_active         | tinyint(4)                                                   | None                     |
| email\_list        | text                                                         | None                     |

## Table: `master_test_temp_coupon_table`


| Column Name        | Data Type | Index                    |
| ------------------ | --------- | ------------------------ |
| id                 | int(11)   | Part of PRIMARY KEY (id) |
| auto\_update\_time | timestamp | None                     |

## Table: `wish_list_items`


| Column Name          | Data Type    | Index                             |
| -------------------- | ------------ | --------------------------------- |
| id                   | bigint(20)   | Part of UNIQUE KEY (id)           |
| org\_id              | int(11)      | Part of UNIQUE KEY (org\_id)      |
| wish\_list\_id       | bigint(20)   | Part of KEY (wish\_list\_id)      |
| product\_sku         | varchar(100) | Part of UNIQUE KEY (product\_sku) |
| rank                 | int(11)      | None                              |
| comments             | text         | None                              |
| is\_active           | tinyint(1)   | None                              |
| auto\_update\_time   | timestamp    | None                              |
| created\_date\_time  | datetime     | None                              |
| created\_by          | int(11)      | None                              |
| modified\_date\_time | datetime     | None                              |
| modified\_by         | int(11)      | None                              |

## Table: `wish_list`


| Column Name          | Data Type    | Index                         |
| -------------------- | ------------ | ----------------------------- |
| id                   | bigint(20)   | Part of PRIMARY KEY (id)      |
| org\_id              | int(11)      | Part of UNIQUE KEY (org\_id)  |
| user\_id             | int(11)      | Part of KEY (user\_id)        |
| org\_source\_id      | int(11)      | Part of KEY (org\_source\_id) |
| name                 | varchar(100) | None                          |
| created\_date\_time  | datetime     | None                          |
| privacy\_level       | varchar(100) | None                          |
| description          | text         | None                          |
| is\_active           | tinyint(1)   | None                          |
| modified\_date\_time | datetime     | None                          |
| auto\_update\_time   | timestamp    | None                          |
| created\_by          | int(11)      | None                          |
| modified\_by         | int(11)      | None                          |

## Table: `review`


| Column Name     | Data Type    | Index                       |
| --------------- | ------------ | --------------------------- |
| id              | bigint(20)   | Part of PRIMARY KEY (id)    |
| org\_id         | bigint(20)   | Part of KEY (org\_id)       |
| org\_source\_id | varchar(30)  | None                        |
| user\_id        | bigint(20)   | Part of KEY (user\_id)      |
| entity\_type    | varchar(50)  | Part of KEY (entity\_type)  |
| entity\_value   | varchar(50)  | Part of KEY (entity\_value) |
| subject         | varchar(200) | None                        |
| body            | varchar(500) | None                        |
| tags            | varchar(200) | None                        |
| created\_date   | datetime     | None                        |
| modified\_date  | timestamp    | None                        |
| rating          | varchar(5)   | None                        |
| is\_active      | tinyint(1)   | None                        |

## Table: `daily_till_summary`


| Column Name                               | Data Type  | Index                                    |
| ----------------------------------------- | ---------- | ---------------------------------------- |
| org\_id                                   | int(11)    | Part of KEY (org\_id)                    |
| event\_date                               | date       | None                                     |
| dim\_event\_zone\_till\_id                | bigint(20) | Part of KEY (dim\_event\_zone\_till\_id) |
| dim\_event\_date\_id                      | bigint(20) | None                                     |
| loyalty\_registrations                    | bigint(20) | None                                     |
| non\_loyalty\_registrations               | bigint(20) | None                                     |
| member\_returns                           | bigint(20) | None                                     |
| non\_member\_returns                      | bigint(20) | None                                     |
| number\_of\_loyalty\_bills                | bigint(20) | None                                     |
| number\_of\_non\_loyalty\_bills           | bigint(20) | None                                     |
| not\_interested\_bill\_count              | bigint(20) | None                                     |
| new\_non\_loyal\_transacted\_customers    | bigint(20) | None                                     |
| new\_loyal\_transacted\_customers         | bigint(20) | None                                     |
| number\_of\_loyal\_repeat\_customers      | bigint(20) | None                                     |
| number\_of\_non\_loyal\_repeat\_customers | bigint(20) | None                                     |
| points\_issued                            | bigint(20) | None                                     |
| points\_redeemed                          | bigint(20) | None                                     |
| coupons\_redeemed                         | bigint(20) | None                                     |

## Table: `hierarchy`


| Column Name        | Data Type              | Index                    |
| ------------------ | ---------------------- | ------------------------ |
| id                 | int(11)                | Part of PRIMARY KEY (id) |
| org\_id            | int(11)                | Part of KEY (org\_id)    |
| till\_id           | int(11)                | Part of KEY (till\_id)   |
| store\_id          | int(11)                | None                     |
| store\_name        | varchar(100)           | None                     |
| zone\_id           | int(11)                | None                     |
| zone\_name         | varchar(100)           | None                     |
| parent\_entity\_id | int(11)                | None                     |
| hierarchy\_type    | enum('ZONE','CONCEPT') | None                     |
| level              | int(11)                | None                     |
| is\_ffc\_enabled   | text                   | None                     |

## Table: `target`


| Column Name       | Data Type                                                                                                                                   | Index                    |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------ |
| id                | int(11)                                                                                                                                     | Part of PRIMARY KEY (id) |
| org\_id           | int(11)                                                                                                                                     | Part of KEY (org\_id)    |
| till\_id          | varchar(100)                                                                                                                                | None                     |
| target\_type      | enum('DAY','MONTH','YEAR')                                                                                                                  | None                     |
| target\_attribute | enum('SALES','TRANS','APP','ABS','ATV','DISCOUNT','CONVERSION','CUST\_SHOPPED','REPEAT\_SALES','REPEAT\_TRANS','REGISTRATIONS','RETENSION') | None                     |
| target\_value     | int(11)                                                                                                                                     | None                     |
| target\_format    | enum('PERC','ABS','CURRENCY')                                                                                                               | None                     |
| target\_period    | datetime                                                                                                                                    | None                     |
| created\_date     | timestamp                                                                                                                                   | None                     |
| is\_active        | tinyint(1)                                                                                                                                  | None                     |

## Table: `upload_csv`


| Column Name       | Data Type                                        | Index                             |
| ----------------- | ------------------------------------------------ | --------------------------------- |
| request\_id       | int(11)                                          | Part of PRIMARY KEY (request\_id) |
| org\_id           | int(11)                                          | None                              |
| job\_id           | int(11)                                          | None                              |
| key\_type         | enum('USER\_ID','EXTERNAL\_ID','MOBILE','EMAIL') | None                              |
| details           | mediumtext                                       | None                              |
| file\_handler     | varchar(200)                                     | None                              |
| session\_id       | text                                             | None                              |
| summary           | mediumtext                                       | None                              |
| invalid\_segments | mediumtext                                       | None                              |
| header            | tinyint(1)                                       | None                              |
| error             | mediumtext                                       | None                              |
| uploaded\_by      | int(11)                                          | None                              |
| uploaded\_on      | timestamp                                        | None                              |

## Table: `filter_segmenation_mapping`


| Column Name        | Data Type | Index                     |
| ------------------ | --------- | ------------------------- |
| id                 | int(11)   | Part of PRIMARY KEY (id)  |
| org\_id            | int(11)   | Part of KEY (org\_id)     |
| cluster\_id        | int(11)   | Part of KEY (cluster\_id) |
| cluster\_value\_id | int(11)   | None                      |
| reminder\_id       | int(11)   | None                      |
| last\_updated\_by  | int(11)   | None                      |
| last\_updated\_on  | datetime  | None                      |

## Table: `selection_filter`


| Column Name          | Data Type    | Index                    |
| -------------------- | ------------ | ------------------------ |
| id                   | int(11)      | Part of PRIMARY KEY (id) |
| org\_id              | int(11)      | Part of KEY (org\_id)    |
| filter\_id           | int(11)      | Part of KEY (filter\_id) |
| params               | longtext     | None                     |
| filter\_type         | varchar(100) | None                     |
| filter\_explaination | longtext     | None                     |
| no\_of\_customers    | int(11)      | None                     |
| custom\_ids          | varchar(200) | None                     |

## Table: `purchasable_relations`


| Column Name           | Data Type                                         | Index                                      |
| --------------------- | ------------------------------------------------- | ------------------------------------------ |
| id                    | int(11)                                           | Part of PRIMARY KEY (id)                   |
| purchasable\_from\_id | int(11)                                           | Part of UNIQUE KEY (purchasable\_from\_id) |
| purchasable\_to\_id   | int(11)                                           | Part of UNIQUE KEY (purchasable\_to\_id)   |
| type                  | enum('INCLUDED','OPTIONAL','REQUIRED','CONFLICT') | None                                       |
| qty                   | int(11)                                           | None                                       |
| params                | mediumtext                                        | None                                       |
| created\_by           | int(11)                                           | None                                       |
| created\_on           | datetime                                          | None                                       |
| modified\_by          | int(11)                                           | None                                       |
| modified\_on          | datetime                                          | None                                       |

## Table: `purchases`


| Column Name     | Data Type                           | Index                    |
| --------------- | ----------------------------------- | ------------------------ |
| id              | int(11)                             | Part of PRIMARY KEY (id) |
| org\_id         | int(11)                             | Part of KEY (org\_id)    |
| purchasable\_id | int(11)                             | None                     |
| status          | enum('ACTIVE','SUSPENDED','CLOSED') | Part of KEY (status)     |
| valid\_from     | datetime                            | None                     |
| valid\_till     | datetime                            | None                     |
| invoice\_id     | int(11)                             | None                     |
| notes           | mediumtext                          | None                     |
| qty             | int(11)                             | None                     |
| purchased\_by   | int(11)                             | None                     |
| purchased\_on   | datetime                            | None                     |

## Table: `purchased_features`


| Column Name   | Data Type    | Index                       |
| ------------- | ------------ | --------------------------- |
| org\_id       | int(11)      | Part of KEY (org\_id)       |
| purchase\_id  | int(11)      | None                        |
| feature\_id   | int(11)      | None                        |
| feature\_code | varchar(255) | Part of KEY (feature\_code) |
| populated\_on | datetime     | None                        |

## Table: `purchasable`


| Column Name  | Data Type                                               | Index                    |
| ------------ | ------------------------------------------------------- | ------------------------ |
| id           | int(11)                                                 | Part of PRIMARY KEY (id) |
| name         | varchar(255)                                            | None                     |
| description  | mediumtext                                              | None                     |
| code         | varchar(255)                                            | Part of KEY (code)       |
| type         | enum('FEATURE','CONSUMABLE','PACKAGE','PLAN','TOP\_UP') | Part of KEY (type)       |
| visible      | tinyint(1)                                              | None                     |
| params       | mediumtext                                              | None                     |
| valid\_from  | datetime                                                | None                     |
| valid\_till  | datetime                                                | None                     |
| created\_by  | int(11)                                                 | None                     |
| created\_on  | datetime                                                | None                     |
| modified\_by | int(11)                                                 | None                     |
| modified\_on | datetime                                                | None                     |

## Table: `verification_log`


| Column Name                      | Data Type                             | Index                         |
| -------------------------------- | ------------------------------------- | ----------------------------- |
| id                               | int(11)                               | Part of PRIMARY KEY (id)      |
| org\_id                          | int(11)                               | Part of PRIMARY KEY (org\_id) |
| last\_verified\_loyalty\_log\_id | int(11)                               | None                          |
| pa\_time                         | datetime                              | None                          |
| points\_mismatch\_summary        | varchar(200)                          | None                          |
| points\_mismatch\_details        | varchar(200)                          | None                          |
| verification\_type               | enum('SUMMARY\_ONLY','ALL')           | None                          |
| verification\_status             | enum('IN\_PROGRESS','SUCCESS','FAIL') | None                          |
| verified\_on                     | datetime                              | None                          |

## Table: `migration_points_verification`


| Column Name                | Data Type     | Index                                   |
| -------------------------- | ------------- | --------------------------------------- |
| id                         | int(11)       | Part of PRIMARY KEY (id)                |
| status                     | varchar(200)  | None                                    |
| migration\_log\_id         | int(11)       | Part of UNIQUE KEY (migration\_log\_id) |
| migration\_type            | enum('M','I') | Part of KEY (migration\_type)           |
| org\_id                    | int(11)       | Part of KEY (org\_id)                   |
| user\_id                   | int(11)       | Part of UNIQUE KEY (user\_id)           |
| cps\_loyalty\_points       | double(15,3)  | None                                    |
| cps\_lifetime\_points      | double(15,3)  | None                                    |
| cps\_expired\_points       | double(15,3)  | None                                    |
| cps\_redeemed\_points      | double(15,3)  | None                                    |
| awarded\_points            | double(15,3)  | None                                    |
| bill\_points               | double(15,3)  | None                                    |
| pe\_total\_awarded\_points | double(15,3)  | None                                    |
| redeemed\_points           | double(15,3)  | None                                    |
| pe\_redeemed\_points       | double(15,3)  | None                                    |
| expired\_points            | double(15,3)  | None                                    |
| pe\_expired\_points        | double(15,3)  | None                                    |
| return\_points             | double(15,3)  | None                                    |
| available\_points          | double(15,3)  | None                                    |
| pe\_available\_points      | double(15,3)  | None                                    |
| diff\_loyalty\_points      | double(15,3)  | None                                    |
| diff\_lifetime\_points     | double(15,3)  | None                                    |
| max\_pa\_id                | bigint(20)    | Part of UNIQUE KEY (max\_pa\_id)        |

## Table: `migration_log`


| Column Name    | Data Type                                               | Index                         |
| -------------- | ------------------------------------------------------- | ----------------------------- |
| id             | int(11)                                                 | Part of PRIMARY KEY (id)      |
| org\_id        | int(11)                                                 | Part of PRIMARY KEY (org\_id) |
| config\_file   | longtext                                                | None                          |
| type           | enum('SCHEDULED','MANUAL','IMPORT','EDIT')              | None                          |
| queued\_time   | datetime                                                | None                          |
| queued\_by     | varchar(100)                                            | None                          |
| start\_time    | datetime                                                | None                          |
| end\_time      | datetime                                                | None                          |
| time\_taken    | varchar(50)                                             | None                          |
| status         | enum('QUEUED','PICKED','IN\_PROGRESS','SUCCESS','FAIL') | None                          |
| error\_message | mediumtext                                              | None                          |

## Table: `tracker_data_rollout_log`


| Column Name           | Data Type | Index                           |
| --------------------- | --------- | ------------------------------- |
| id                    | int(11)   | Part of PRIMARY KEY (id)        |
| org\_id               | int(11)   | Part of KEY (org\_id)           |
| tracker\_info\_id     | int(11)   | Part of KEY (tracker\_info\_id) |
| tracker\_strategy\_id | int(11)   | None                            |
| td\_start\_id         | int(11)   | None                            |
| td\_end\_id           | int(11)   | None                            |
| migration\_time       | datetime  | None                            |
| auto\_update\_time    | timestamp | None                            |

## Table: `tracker_migration_data_mismatches`


| Column Name          | Data Type   | Index                              |
| -------------------- | ----------- | ---------------------------------- |
| id                   | int(11)     | Part of PRIMARY KEY (id)           |
| org\_id              | int(11)     | Part of KEY (org\_id)              |
| customer\_id         | int(11)     | Part of KEY (customer\_id)         |
| tracker\_id          | int(11)     | Part of KEY (tracker\_id)          |
| points\_category\_id | int(11)     | Part of KEY (points\_category\_id) |
| ref\_id              | bigint(20)  | None                               |
| ref\_type            | varchar(10) | None                               |
| execution\_date      | datetime    | None                               |
| tracker\_data\_id    | int(11)     | None                               |
| points\_data\_id     | int(11)     | None                               |
| tracked\_value       | bigint(10)  | None                               |
| tracked\_date        | datetime    | None                               |
| points\_value        | bigint(10)  | None                               |
| points\_date         | datetime    | None                               |
| mismatched\_fields   | varchar(50) | None                               |

## Table: `expiry_strategies_change_log`


| Column Name         | Data Type                                      | Index                         |
| ------------------- | ---------------------------------------------- | ----------------------------- |
| id                  | int(11)                                        | Part of PRIMARY KEY (id)      |
| program\_id         | int(11)                                        | None                          |
| point\_category\_id | int(11)                                        | None                          |
| org\_id             | int(11)                                        | Part of PRIMARY KEY (org\_id) |
| strategy\_id        | int(11)                                        | None                          |
| strategy\_json      | mediumtext                                     | None                          |
| queued\_time        | datetime                                       | None                          |
| queued\_by          | int(11)                                        | None                          |
| start\_time         | datetime                                       | None                          |
| end\_time           | datetime                                       | None                          |
| time\_taken         | float                                          | None                          |
| status              | enum('IN\_PROGRESS','QUEUED','SUCCESS','FAIL') | None                          |
| result              | mediumtext                                     | None                          |
| error\_message      | mediumtext                                     | None                          |

## Table: `tracker_rollout_log`


| Column Name             | Data Type                           | Index                                      |
| ----------------------- | ----------------------------------- | ------------------------------------------ |
| id                      | int(11)                             | Part of PRIMARY KEY (id)                   |
| org\_id                 | int(11)                             | Part of UNIQUE KEY (org\_id)               |
| program\_id             | int(11)                             | None                                       |
| tracker\_info\_id       | int(11)                             | Part of UNIQUE KEY (tracker\_info\_id)     |
| tracker\_strategy\_id   | int(11)                             | Part of UNIQUE KEY (tracker\_strategy\_id) |
| point\_category\_id     | int(11)                             | Part of UNIQUE KEY (point\_category\_id)   |
| listener\_id            | int(11)                             | None                                       |
| rule\_id                | int(11)                             | None                                       |
| migration\_date         | datetime                            | None                                       |
| migrated\_to            | enum('INACTIVE','PASSIVE','ACTIVE') | None                                       |
| is\_active              | tinyint(1)                          | None                                       |
| auto\_update\_time      | timestamp                           | None                                       |
| tracker\_data\_last\_id | int(11)                             | None                                       |

## Table: `instructions_mismatch_summary`


| Column Name                    | Data Type                                                         | Index                         |
| ------------------------------ | ----------------------------------------------------------------- | ----------------------------- |
| id                             | int(11)                                                           | Part of PRIMARY KEY (id)      |
| instructions\_verification\_id | int(11)                                                           | None                          |
| org\_id                        | int(11)                                                           | Part of PRIMARY KEY (org\_id) |
| unique\_id                     | varchar(50)                                                       | None                          |
| instruction\_type              | enum('AWARD','SLAB\_UPGRADE','MESSAGE','ISSUE\_VOUCHER','REDEEM') | None                          |
| details                        | mediumtext                                                        | None                          |
| created\_on                    | datetime                                                          | None                          |

## Table: `instructions_verification_log`


| Column Name                      | Data Type                             | Index                         |
| -------------------------------- | ------------------------------------- | ----------------------------- |
| id                               | int(11)                               | Part of PRIMARY KEY (id)      |
| org\_id                          | int(11)                               | Part of PRIMARY KEY (org\_id) |
| last\_verified\_dump\_id         | int(11)                               | None                          |
| last\_verified\_ep\_dump\_id     | int(11)                               | None                          |
| instructions\_mismatch\_summamry | mediumtext                            | None                          |
| verification\_status             | enum('IN\_PROGRESS','SUCCESS','FAIL') | None                          |
| verified\_on                     | datetime                              | None                          |

## Table: `target_achieved_event_log`


| Column Name            | Data Type          | Index                            |
| ---------------------- | ------------------ | -------------------------------- |
| id                     | bigint(20)         | Part of PRIMARY KEY (id)         |
| org\_id                | int(11)            | Part of KEY (org\_id)            |
| source\_id             | bigint(20)         | Part of KEY (source\_id)         |
| source\_type           | enum('USERTARGET', | None                             |
| parent\_event\_log\_id | bigint(20)         | None                             |
| return\_event\_log\_id | bigint(20)         | None                             |
| is\_active             | tinyint(1)         | None                             |
| created\_on            | datetime           | None                             |
| last\_updated\_on      | datetime           | None                             |
| auto\_update\_time     | timestamp          | Part of KEY (auto\_update\_time) |

## Table: `user_streaks`


| Column Name                          | Data Type                               | Index                            |
| ------------------------------------ | --------------------------------------- | -------------------------------- |
| id                                   | bigint(20)                              | Part of PRIMARY KEY (id)         |
| org\_id                              | bigint(20)                              | Part of KEY (org\_id)            |
| target\_group\_id                    | bigint(20)                              | Part of KEY (target\_group\_id)  |
| user\_id                             | bigint(20)                              | Part of KEY (user\_id)           |
| streak\_id                           | bigint(20)                              | None                             |
| achieved\_user\_target\_id           | bigint(20)                              | None                             |
| status                               | enum('INPROGRESS','ACHIEVED','DROPPED') | None                             |
| current\_count                       | int(11)                                 | None                             |
| is\_archived                         | tinyint(1)                              | None                             |
| is\_reset                            | tinyint(1)                              | None                             |
| created\_on                          | timestamp                               | None                             |
| created\_by                          | bigint(20)                              | None                             |
| last\_updated\_on                    | timestamp                               | None                             |
| last\_updated\_by                    | bigint(20)                              | None                             |
| auto\_update\_time                   | timestamp                               | Part of KEY (auto\_update\_time) |
| streak\_achieved\_emf\_message\_sent | tinyint(1)                              | None                             |

## Table: `target_milestone_triggers`


| Column Name          | Data Type                     | Index                            |
| -------------------- | ----------------------------- | -------------------------------- |
| id                   | bigint(20)                    | Part of PRIMARY KEY (id)         |
| org\_id              | bigint(20)                    | Part of KEY (org\_id)            |
| name                 | varchar(100)                  | Part of UNIQUE KEY (name)        |
| description          | varchar(255)                  | None                             |
| is\_active           | tinyint(1)                    | Part of KEY (is\_active)         |
| created\_on          | timestamp                     | None                             |
| created\_by          | bigint(20)                    | None                             |
| last\_updated\_on    | timestamp                     | None                             |
| last\_updated\_by    | bigint(20)                    | None                             |
| auto\_update\_time   | timestamp                     | Part of KEY (auto\_update\_time) |
| trigger\_type        | enum('CUSTOM\_TRIGGER',       | None                             |
| trigger\_value\_type | enum('ABSOLUTE','PERCENTAGE') | None                             |
| target\_rule\_id     | bigint(20)                    | Part of KEY (target\_rule\_id)   |
| trigger\_value       | decimal(18,3)                 | None                             |

## Table: `target_to_event_mapping`


| Column Name          | Data Type    | Index                                 |
| -------------------- | ------------ | ------------------------------------- |
| id                   | bigint(20)   | Part of PRIMARY KEY (id)              |
| org\_id              | bigint(20)   | Part of UNIQUE KEY (org\_id)          |
| target\_rule\_id     | bigint(20)   | Part of UNIQUE KEY (target\_rule\_id) |
| event\_type\_id      | int(11)      | Part of UNIQUE KEY (event\_type\_id)  |
| event\_sub\_type\_id | varchar(100) | None                                  |
| created\_on          | timestamp    | None                                  |
| created\_by          | bigint(20)   | None                                  |
| last\_updated\_on    | timestamp    | None                                  |
| last\_updated\_by    | bigint(20)   | None                                  |
| auto\_update\_time   | timestamp    | Part of KEY (auto\_update\_time)      |

## Table: `user_target_streak_mapping_log`


| Column Name        | Data Type  | Index                            |
| ------------------ | ---------- | -------------------------------- |
| id                 | bigint(20) | Part of PRIMARY KEY (id)         |
| org\_id            | bigint(20) | Part of KEY (org\_id)            |
| user\_streak\_id   | bigint(20) | Part of KEY (user\_streak\_id)   |
| user\_target\_id   | bigint(20) | Part of KEY (user\_target\_id)   |
| is\_archived       | tinyint(1) | None                             |
| created\_on        | timestamp  | None                             |
| created\_by        | bigint(20) | None                             |
| last\_updated\_on  | timestamp  | None                             |
| last\_updated\_by  | bigint(20) | None                             |
| auto\_update\_time | timestamp  | Part of KEY (auto\_update\_time) |

## Table: `target_rules`


| Column Name                | Data Type                                                                                                                                                                        | Index                            |
| -------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- |
| id                         | bigint(20)                                                                                                                                                                       | Part of PRIMARY KEY (id)         |
| org\_id                    | bigint(20)                                                                                                                                                                       | Part of UNIQUE KEY (org\_id)     |
| target\_group\_id          | bigint(20)                                                                                                                                                                       | Part of KEY (target\_group\_id)  |
| target\_type               | enum('QUANTITY','SALES','COUNT','VISIT','GROSS\_SALES','REGULAR\_POINTS','PROMOTIONAL\_POINTS','ALL\_POINTS','EXTENDED\_FIELD','EVENT\_ATTRIBUTE','REGULAR','PROMOTIONAL','ALL') | None                             |
| target\_entity             | enum('TRANSACTION','POINTS','LINEITEM','EVENT','ALTERNATE\_CURRENCIES')                                                                                                          | None                             |
| tracking\_type             | enum('DEFAULT','CAPPING','UNIFIED')                                                                                                                                              | None                             |
| emf\_ruleset\_id           | bigint(20)                                                                                                                                                                       | None                             |
| name                       | varchar(200)                                                                                                                                                                     | Part of UNIQUE KEY (name)        |
| created\_on                | timestamp                                                                                                                                                                        | None                             |
| created\_by                | bigint(20)                                                                                                                                                                       | None                             |
| last\_updated\_on          | timestamp                                                                                                                                                                        | None                             |
| last\_updated\_by          | bigint(20)                                                                                                                                                                       | None                             |
| auto\_update\_time         | timestamp                                                                                                                                                                        | Part of KEY (auto\_update\_time) |
| emf\_payload               | mediumtext                                                                                                                                                                       | None                             |
| description                | varchar(255)                                                                                                                                                                     | None                             |
| is\_active                 | tinyint(1)                                                                                                                                                                       | None                             |
| emf\_unrolled\_ruleset\_id | bigint(20)                                                                                                                                                                       | None                             |
| emf\_unrolled\_payload     | mediumtext                                                                                                                                                                       | None                             |
| expression                 | mediumtext                                                                                                                                                                       | None                             |
| expression\_json           | mediumtext                                                                                                                                                                       | None                             |
| filters\_json              | mediumtext                                                                                                                                                                       | None                             |
| enrolment\_method          | ENUM('TRANSACTION','IMPORT','AUDIENCE\_FILTER')                                                                                                                                  | None                             |
| property\_values           | mediumtext                                                                                                                                                                       | None                             |

## Table: `target_communications`


| Column Name            | Data Type                                  | Index                            |
| ---------------------- | ------------------------------------------ | -------------------------------- |
| id                     | bigint(20)                                 | Part of PRIMARY KEY (id)         |
| org\_id                | bigint(20)                                 | Part of KEY (org\_id)            |
| target\_id             | bigint(20)                                 | Part of KEY (target\_id)         |
| target\_group\_id      | bigint(20)                                 | Part of KEY (target\_group\_id)  |
| communication\_type    | enum('START','FINISH','CHANGE','REMINDER') | None                             |
| channel\_id            | int(11)                                    | None                             |
| reminder\_offset\_days | int(11)                                    | None                             |
| subject\_template      | text                                       | None                             |
| message\_template      | text                                       | None                             |
| sender                 | varchar(100)                               | None                             |
| created\_on            | timestamp                                  | None                             |
| created\_by            | bigint(20)                                 | None                             |
| last\_updated\_on      | timestamp                                  | None                             |
| last\_updated\_by      | bigint(20)                                 | None                             |
| is\_active             | tinyint(1)                                 | None                             |
| auto\_update\_time     | timestamp                                  | Part of KEY (auto\_update\_time) |

## Table: `target_groups`


| Column Name                | Data Type                                                                     | Index                            |
| -------------------------- | ----------------------------------------------------------------------------- | -------------------------------- |
| id                         | bigint(20)                                                                    | Part of PRIMARY KEY (id)         |
| org\_id                    | bigint(20)                                                                    | Part of UNIQUE KEY (org\_id)     |
| name                       | varchar(200)                                                                  | Part of UNIQUE KEY (name)        |
| is\_active                 | tinyint(1)                                                                    | None                             |
| created\_on                | timestamp                                                                     | None                             |
| created\_by                | bigint(20)                                                                    | None                             |
| last\_updated\_on          | timestamp                                                                     | None                             |
| last\_updated\_by          | bigint(20)                                                                    | None                             |
| preferred\_till\_id        | bigint(20)                                                                    | None                             |
| auto\_update\_time         | timestamp                                                                     | Part of KEY (auto\_update\_time) |
| description                | varchar(255)                                                                  | None                             |
| target\_evaluation\_type   | enum('FIXED\_CALENDAR\_WINDOW',                                               | None                             |
| recurring\_cycles          | int(11)                                                                       | None                             |
| frequency                  | int(11)                                                                       | None                             |
| target\_cycle\_start\_date | datetime                                                                      | None                             |
| target\_cycle\_end\_date   | datetime                                                                      | None                             |
| frequency\_type            | enum('MONTHLY','QUARTERLY','HALF\_YEARLY','YEARLY','CUSTOM','WEEKLY','DAILY') | None                             |
| tracking\_type             | enum('DEFAULT','CAPPING','UNIFIED','STREAKS','NON\_CONTINUOUS\_STREAKS')      | None                             |
| is\_leaderboard\_enabled   | tinyint(1)                                                                    | None                             |
| is\_user\_created          | tinyint(1)                                                                    | None                             |

## Table: `target_milestone_trigger_communications`


| Column Name                    | Data Type  | Index                                        |
| ------------------------------ | ---------- | -------------------------------------------- |
| id                             | bigint(20) | Part of PRIMARY KEY (id)                     |
| org\_id                        | bigint(20) | Part of KEY (org\_id)                        |
| client\_id                     | bigint(20) | Part of KEY (client\_id)                     |
| target\_milestone\_trigger\_id | bigint(20) | Part of KEY (target\_milestone\_trigger\_id) |
| user\_target\_id               | bigint(20) | Part of KEY (user\_target\_id)               |
| is\_archived                   | tinyint(1) | Part of KEY (is\_archived)                   |
| created\_on                    | timestamp  | None                                         |
| created\_by                    | bigint(20) | None                                         |
| auto\_update\_time             | timestamp  | Part of KEY (auto\_update\_time)             |

## Table: `user_target`


| Column Name                          | Data Type                                        | Index                                 |
| ------------------------------------ | ------------------------------------------------ | ------------------------------------- |
| id                                   | bigint(20)                                       | Part of PRIMARY KEY (id)              |
| org\_id                              | bigint(20)                                       | Part of KEY (org\_id)                 |
| user\_id                             | bigint(20)                                       | Part of KEY (user\_id)                |
| target\_group\_id                    | bigint(20)                                       | Part of KEY (target\_group\_id)       |
| target\_rule\_id                     | bigint(20)                                       | Part of UNIQUE KEY (target\_rule\_id) |
| period\_id                           | bigint(20)                                       | Part of UNIQUE KEY (period\_id)       |
| target\_value                        | decimal(18,3)                                    | None                                  |
| source                               | enum('SYSTEM','UPLOAD','AUDIENCE\_FILTER','API') | None                                  |
| created\_on                          | timestamp                                        | None                                  |
| created\_by                          | bigint(20)                                       | None                                  |
| is\_unenrolled                       | tinyint(1)                                       | None                                  |
| unenrolled\_on                       | timestamp                                        | None                                  |
| last\_updated\_on                    | timestamp                                        | None                                  |
| last\_updated\_by                    | bigint(20)                                       | None                                  |
| auto\_update\_time                   | timestamp                                        | Part of KEY (auto\_update\_time)      |
| achieved\_value                      | decimal(18,3)                                    | None                                  |
| emf\_message\_sent                   | tinyint(1)                                       | None                                  |
| promo\_engine\_message\_sent         | tinyint(1)                                       | None                                  |
| target\_achieved\_emf\_message\_sent | tinyint(1)                                       | None                                  |
| latest\_enrolled\_on                 | timestamp                                        | None                                  |

## Table: `target_communication_config_keys`


| Column Name        | Data Type    | Index                    |
| ------------------ | ------------ | ------------------------ |
| id                 | bigint(20)   | Part of PRIMARY KEY (id) |
| name               | varchar(100) | None                     |
| default\_value     | varchar(100) | None                     |
| auto\_update\_time | timestamp    | None                     |

## Table: `upload_details_meta`


| Column Name           | Data Type      | Index                             |
| --------------------- | -------------- | --------------------------------- |
| id                    | bigint(20)     | Part of PRIMARY KEY (id)          |
| org\_id               | bigint(20)     | Part of KEY (org\_id)             |
| input\_file\_name     | varchar(250)   | None                              |
| input\_file\_handle   | varchar(100)   | Part of KEY (input\_file\_handle) |
| success\_file\_handle | varchar(100)   | None                              |
| error\_file\_handle   | varchar(100)   | None                              |
| tmp\_table\_name      | varchar(100)   | None                              |
| entity\_type          | enum('TARGET') | Part of KEY (entity\_type)        |
| entity\_id            | bigint(20)     | Part of KEY (entity\_id)          |
| status                | enum('OPEN',   | Part of KEY (status)              |
| rows\_count           | int(11)        | None                              |
| created\_on           | timestamp      | None                              |
| created\_by           | bigint(20)     | None                              |
| last\_updated\_by     | bigint(20)     | None                              |
| auto\_update\_time    | timestamp      | Part of KEY (auto\_update\_time)  |

## Table: `target_period_started_batch_meta`


| Column Name                 | Data Type                 | Index                            |
| --------------------------- | ------------------------- | -------------------------------- |
| id                          | bigint(20)                | Part of PRIMARY KEY (id)         |
| org\_id                     | bigint(20)                | Part of KEY (org\_id)            |
| target\_group\_id           | bigint(20)                | None                             |
| target\_period\_id          | bigint(20)                | None                             |
| group\_evaluation\_criteria | varchar(200)              | None                             |
| status                      | enum('PENDING','SUCCESS', | Part of KEY (status)             |
| reason                      | varchar(200)              | None                             |
| created\_by                 | varchar(50)               | None                             |
| created\_on                 | timestamp                 | None                             |
| last\_updated\_by           | varchar(50)               | None                             |
| last\_updated\_on           | timestamp                 | None                             |
| auto\_update\_time          | timestamp                 | Part of KEY (auto\_update\_time) |

## Table: `target_audience_filter_meta`


| Column Name                  | Data Type    | Index                             |
| ---------------------------- | ------------ | --------------------------------- |
| id                           | bigint(20)   | Part of PRIMARY KEY (id)          |
| org\_id                      | bigint(20)   | Part of KEY (org\_id)             |
| target\_id                   | bigint(20)   | Part of KEY (target\_id)          |
| audience\_group\_id          | bigint(20)   | Part of KEY (audience\_group\_id) |
| version\_id                  | bigint(20)   | None                              |
| is\_active                   | tinyint(1)   | None                              |
| is\_subscribed\_for\_refresh | tinyint(1)   | None                              |
| total\_users\_count          | int(11)      | None                              |
| temp\_table                  | varchar(100) | None                              |
| created\_on                  | timestamp    | None                              |
| created\_by                  | bigint(20)   | None                              |
| updated\_by                  | bigint(20)   | None                              |
| auto\_update\_time           | timestamp    | Part of KEY (auto\_update\_time)  |

## Table: `target_periods`


| Column Name        | Data Type    | Index                                  |
| ------------------ | ------------ | -------------------------------------- |
| id                 | bigint(20)   | Part of PRIMARY KEY (id)               |
| org\_id            | bigint(20)   | Part of UNIQUE KEY (org\_id)           |
| target\_group\_id  | bigint(20)   | Part of KEY (target\_group\_id)        |
| period\_ref\_code  | varchar(100) | Part of UNIQUE KEY (period\_ref\_code) |
| start\_date        | timestamp    | None                                   |
| end\_date          | timestamp    | None                                   |
| created\_on        | timestamp    | None                                   |
| created\_by        | bigint(20)   | None                                   |
| last\_updated\_on  | timestamp    | None                                   |
| last\_updated\_by  | bigint(20)   | None                                   |
| auto\_update\_time | timestamp    | Part of KEY (auto\_update\_time)       |
| is\_active         | tinyint(1)   | None                                   |
| description        | varchar(255) | None                                   |

## Table: `target_channel_comm_channel_mapping`


| Column Name             | Data Type  | Index                    |
| ----------------------- | ---------- | ------------------------ |
| id                      | bigint(20) | Part of PRIMARY KEY (id) |
| target\_channel\_id     | bigint(20) | None                     |
| comm\_channel\_type\_id | bigint(20) | None                     |
| is\_valid               | tinyint(1) | None                     |

## Table: `target_clients`


| Column Name | Data Type    | Index                    |
| ----------- | ------------ | ------------------------ |
| id          | bigint(20)   | Part of PRIMARY KEY (id) |
| name        | varchar(100) | None                     |

## Table: `unified_targets_achieved_log`


| Column Name        | Data Type  | Index                            |
| ------------------ | ---------- | -------------------------------- |
| id                 | bigint(20) | Part of PRIMARY KEY (id)         |
| org\_id            | bigint(20) | Part of KEY (org\_id)            |
| user\_id           | bigint(20) | Part of KEY (user\_id)           |
| target\_group\_id  | bigint(20) | Part of KEY (target\_group\_id)  |
| period\_id         | bigint(20) | Part of KEY (period\_id)         |
| is\_active         | tinyint(1) | None                             |
| created\_on        | timestamp  | None                             |
| created\_by        | int(11)    | None                             |
| last\_updated\_by  | int(11)    | None                             |
| last\_updated\_on  | timestamp  | None                             |
| auto\_update\_time | timestamp  | Part of KEY (auto\_update\_time) |

## Table: `target_achievement_rules`


| Column Name        | Data Type   | Index                                  |
| ------------------ | ----------- | -------------------------------------- |
| id                 | bigint(20)  | Part of PRIMARY KEY (id)               |
| org\_id            | int(11)     | Part of UNIQUE KEY (org\_id)           |
| target\_group\_id  | bigint(11)  | Part of UNIQUE KEY (target\_group\_id) |
| combination\_type  | enum('ANY', | None                                   |
| rule\_expression   | mediumtext  | None                                   |
| created\_on        | timestamp   | None                                   |
| created\_by        | int(11)     | None                                   |
| last\_updated\_by  | int(11)     | None                                   |
| last\_updated\_on  | timestamp   | None                                   |
| auto\_update\_time | timestamp   | Part of KEY (auto\_update\_time)       |

## Table: `cyclic_target_periods`


| Column Name        | Data Type  | Index                                   |
| ------------------ | ---------- | --------------------------------------- |
| id                 | bigint(20) | Part of PRIMARY KEY (id)                |
| org\_id            | bigint(20) | Part of UNIQUE KEY (org\_id)            |
| target\_period\_id | bigint(20) | Part of UNIQUE KEY (target\_period\_id) |
| user\_id           | bigint(20) | Part of UNIQUE KEY (user\_id)           |
| start\_date        | datetime   | None                                    |
| end\_date          | datetime   | None                                    |
| created\_on        | datetime   | None                                    |
| is\_active         | tinyint(1) | None                                    |
| auto\_update\_time | timestamp  | Part of KEY (auto\_update\_time)        |

## Table: `target_channels`


| Column Name | Data Type    | Index                    |
| ----------- | ------------ | ------------------------ |
| id          | bigint(20)   | Part of PRIMARY KEY (id) |
| name        | varchar(100) | None                     |
| is\_valid   | tinyint(1)   | None                     |

## Table: `streaks`


| Column Name                 | Data Type    | Index                            |
| --------------------------- | ------------ | -------------------------------- |
| id                          | bigint(20)   | Part of PRIMARY KEY (id)         |
| org\_id                     | bigint(20)   | Part of KEY (org\_id)            |
| target\_group\_id           | bigint(20)   | Part of KEY (target\_group\_id)  |
| name                        | varchar(210) | Part of UNIQUE KEY (name)        |
| target\_count\_of\_sequence | int(11)      | None                             |
| created\_on                 | timestamp    | None                             |
| created\_by                 | bigint(20)   | None                             |
| last\_updated\_on           | timestamp    | None                             |
| last\_updated\_by           | bigint(20)   | None                             |
| auto\_update\_time          | timestamp    | Part of KEY (auto\_update\_time) |

## Table: `target_audience_filter_batch`


| Column Name                | Data Type    | Index                                    |
| -------------------------- | ------------ | ---------------------------------------- |
| id                         | bigint(20)   | Part of PRIMARY KEY (id)                 |
| org\_id                    | bigint(20)   | Part of KEY (org\_id)                    |
| audience\_filter\_meta\_id | bigint(20)   | Part of KEY (audience\_filter\_meta\_id) |
| batch\_status              | enum('OPEN', | None                                     |
| users\_count               | int(11)      | None                                     |
| start\_time                | timestamp    | Part of KEY (start\_time)                |
| end\_time                  | timestamp    | Part of KEY (end\_time)                  |
| created\_on                | timestamp    | None                                     |
| created\_by                | bigint(20)   | None                                     |
| updated\_by                | bigint(20)   | None                                     |
| auto\_update\_time         | timestamp    | Part of KEY (auto\_update\_time)         |

## Table: `batch_upload_details_meta`


| Column Name               | Data Type    | Index                                   |
| ------------------------- | ------------ | --------------------------------------- |
| id                        | bigint(20)   | Part of PRIMARY KEY (id)                |
| org\_id                   | bigint(20)   | Part of KEY (org\_id)                   |
| upload\_details\_meta\_id | bigint(20)   | Part of KEY (upload\_details\_meta\_id) |
| batch\_status             | enum('OPEN', | None                                    |
| rows\_count               | int(11)      | None                                    |
| validation\_fail\_count   | int(11)      | None                                    |
| start\_time               | timestamp    | Part of KEY (start\_time)               |
| end\_time                 | timestamp    | Part of KEY (end\_time)                 |
| created\_on               | timestamp    | None                                    |
| created\_by               | bigint(20)   | None                                    |
| last\_updated\_by         | bigint(20)   | None                                    |
| auto\_update\_time        | timestamp    | Part of KEY (auto\_update\_time)        |

## Table: `target_milestone_triggers_execution_status`


| Column Name                    | Data Type                                  | Index                                               |
| ------------------------------ | ------------------------------------------ | --------------------------------------------------- |
| id                             | bigint(20)                                 | Part of PRIMARY KEY (id)                            |
| org\_id                        | bigint(20)                                 | Part of KEY (org\_id)                               |
| target\_milestone\_trigger\_id | bigint(20)                                 | Part of UNIQUE KEY (target\_milestone\_trigger\_id) |
| last\_updated\_on              | timestamp                                  | None                                                |
| last\_updated\_by              | bigint(20)                                 | None                                                |
| status                         | enum('PENDING','RUNNING','SUCCESS','FAIL') | None                                                |
| auto\_update\_time             | timestamp                                  | Part of KEY (auto\_update\_time)                    |

## Table: `user_target_event_log`


| Column Name        | Data Type                                                               | Index                            |
| ------------------ | ----------------------------------------------------------------------- | -------------------------------- |
| id                 | bigint(20)                                                              | Part of PRIMARY KEY (id)         |
| org\_id            | bigint(20)                                                              | Part of KEY (org\_id)            |
| user\_id           | bigint(20)                                                              | Part of KEY (user\_id)           |
| user\_target\_id   | bigint(20)                                                              | Part of KEY (user\_target\_id)   |
| target\_entity     | enum('TRANSACTION','POINTS','LINEITEM','EVENT','ALTERNATE\_CURRENCIES') | None                             |
| target\_entity\_id | bigint(20)                                                              | None                             |
| target\_value      | decimal(18,3)                                                           | None                             |
| event\_date        | timestamp                                                               | None                             |
| auto\_update\_time | timestamp                                                               | Part of KEY (auto\_update\_time) |
| is\_active         | tinyint(1)                                                              | None                             |
| event\_type        | enum('ADD\_TRANSACTION','RETURN\_BILL','ENROL','UNENROL')               | None                             |
| event\_log\_id     | bigint(20)                                                              | None                             |

## Table: `target_communication_config_key_values`


| Column Name               | Data Type    | Index                         |
| ------------------------- | ------------ | ----------------------------- |
| id                        | bigint(20)   | Part of PRIMARY KEY (id)      |
| org\_id                   | bigint(20)   | Part of PRIMARY KEY (org\_id) |
| target\_communication\_id | bigint(20)   | None                          |
| key\_id                   | bigint(20)   | None                          |
| value                     | varchar(100) | None                          |
| is\_valid                 | tinyint(1)   | None                          |
| auto\_update\_time        | timestamp    | None                          |

## Table: `packages`


| Column Name | Data Type    | Index                    |
| ----------- | ------------ | ------------------------ |
| id          | int(11)      | Part of PRIMARY KEY (id) |
| name        | varchar(50)  | None                     |
| description | varchar(255) | None                     |
| created\_by | bigint(20)   | None                     |
| created\_on | datetime     | None                     |

## Table: `service_app_mapping`


| Column Name       | Data Type | Index                    |
| ----------------- | --------- | ------------------------ |
| id                | int(11)   | Part of PRIMARY KEY (id) |
| app\_id           | int(11)   | None                     |
| service\_id       | int(11)   | None                     |
| service\_type\_id | int(11)   | None                     |

## Table: `applications`


| Column Name | Data Type    | Index                    |
| ----------- | ------------ | ------------------------ |
| id          | int(11)      | Part of PRIMARY KEY (id) |
| pid         | int(11)      | None                     |
| name        | varchar(50)  | None                     |
| description | varchar(255) | None                     |
| created\_by | bigint(20)   | None                     |
| created\_on | datetime     | None                     |

## Table: `org_packages`


| Column Name       | Data Type             | Index                        |
| ----------------- | --------------------- | ---------------------------- |
| id                | int(11)               | Part of PRIMARY KEY (id)     |
| org\_id           | int(11)               | Part of UNIQUE KEY (org\_id) |
| ref\_id           | int(11)               | Part of UNIQUE KEY (ref\_id) |
| service\_type\_id | int(11)               | None                         |
| type              | enum('APP','PACKAGE') | Part of UNIQUE KEY (type)    |
| created\_date     | date                  | None                         |
| last\_updated\_by | bigint(20)            | None                         |
| last\_updated\_on | datetime              | None                         |

## Table: `features`


| Column Name | Data Type    | Index                     |
| ----------- | ------------ | ------------------------- |
| id          | int(11)      | Part of PRIMARY KEY (id)  |
| name        | varchar(255) | Part of UNIQUE KEY (name) |
| type        | varchar(30)  | None                      |
| added\_on   | datetime     | None                      |
| added\_by   | bigint(20)   | None                      |

## Table: `package_lists`


| Column Name       | Data Type | Index                    |
| ----------------- | --------- | ------------------------ |
| id                | int(11)   | Part of PRIMARY KEY (id) |
| app\_id           | int(11)   | None                     |
| service\_type\_id | int(11)   | None                     |

## Table: `custom_field_templates`


| Column Name | Data Type                                   | Index                    |
| ----------- | ------------------------------------------- | ------------------------ |
| id          | int(11)                                     | Part of PRIMARY KEY (id) |
| name        | varchar(250)                                | None                     |
| type        | enum('select','text','datepicker')          | None                     |
| datatype    | enum('Boolean','String','Integer','Double') | None                     |
| label       | mediumtext                                  | None                     |
| scope       | varchar(50)                                 | None                     |
| default     | text                                        | None                     |
| added\_by   | bigint(20)                                  | None                     |
| added\_on   | timestamp                                   | None                     |

## Table: `services`


| Column Name       | Data Type  | Index                    |
| ----------------- | ---------- | ------------------------ |
| id                | int(11)    | Part of PRIMARY KEY (id) |
| service\_code     | mediumtext | None                     |
| service\_type\_id | int(11)    | None                     |
| rule              | mediumtext | None                     |
| is\_hidden        | tinyint(1) | None                     |
| created\_by       | bigint(20) | None                     |
| created\_on       | datetime   | None                     |

## Table: `org_features`


| Column Name | Data Type   | Index                            |
| ----------- | ----------- | -------------------------------- |
| id          | int(11)     | Part of PRIMARY KEY (id)         |
| org\_id     | int(11)     | Part of UNIQUE KEY (org\_id)     |
| feature\_id | int(11)     | Part of UNIQUE KEY (feature\_id) |
| value       | varchar(30) | None                             |
| updated\_on | datetime    | None                             |
| updated\_by | bigint(20)  | None                             |

## Table: `service_types`


| Column Name | Data Type               | Index                    |
| ----------- | ----------------------- | ------------------------ |
| id          | int(11)                 | Part of PRIMARY KEY (id) |
| type        | enum('BASIC','ADVANCE') | None                     |
| created\_by | bigint(20)              | None                     |
| created\_on | datetime                | None                     |

## Table: `async_jobs`


| Column Name        | Data Type                             | Index                    |
| ------------------ | ------------------------------------- | ------------------------ |
| id                 | int(11)                               | Part of PRIMARY KEY (id) |
| submitted\_by      | varchar(20)                           | None                     |
| processed\_by      | varchar(20)                           | None                     |
| submission\_time   | datetime                              | None                     |
| picked\_time       | datetime                              | None                     |
| finished\_time     | datetime                              | None                     |
| context            | mediumtext                            | None                     |
| payload            | mediumtext                            | None                     |
| job\_id            | int(11)                               | None                     |
| status             | enum('DELETE','ARCHIVE','RESCHEDULE') | None                     |
| scheduled\_job\_id | int(11)                               | None                     |

## Table: `emf_event_logs`


| Column Name      | Data Type                                                          | Index                           |
| ---------------- | ------------------------------------------------------------------ | ------------------------------- |
| id               | bigint(11)                                                         | Part of PRIMARY KEY (id)        |
| org\_id          | int(11)                                                            | Part of KEY (org\_id)           |
| event\_name      | varchar(32)                                                        | None                            |
| till\_id         | int(11)                                                            | None                            |
| user\_id         | bigint(11)                                                         | Part of KEY (user\_id)          |
| transaction\_id  | bigint(11)                                                         | Part of KEY (transaction\_id)   |
| params           | mediumtext                                                         | None                            |
| unique\_id       | varchar(32)                                                        | Part of UNIQUE KEY (unique\_id) |
| status           | enum('IN\_PROGRESS','FAIL','SUCCESS','PERMANENT\_FAIL','MAX\_OUT') | Part of KEY (status)            |
| replay\_count    | tinyint(3)                                                         | None                            |
| event\_time      | timestamp                                                          | Part of KEY (event\_time)       |
| last\_update\_by | bigint(20)                                                         | None                            |
| last\_update\_on | timestamp                                                          | None                            |

## Table: `emf_event_logs_new`


| Column Name                        | Data Type                                                          | Index                                            |
| ---------------------------------- | ------------------------------------------------------------------ | ------------------------------------------------ |
| id                                 | bigint(11)                                                         | Part of PRIMARY KEY (id)                         |
| org\_id                            | int(11)                                                            | Part of KEY (org\_id)                            |
| event\_name                        | varchar(50)                                                        | None                                             |
| entity\_type                       | varchar(20)                                                        | Part of KEY (entity\_type)                       |
| entity\_value                      | varchar(50)                                                        | Part of KEY (entity\_value)                      |
| till\_id                           | int(11)                                                            | None                                             |
| user\_id                           | bigint(11)                                                         | Part of KEY (user\_id)                           |
| transaction\_id                    | bigint(11)                                                         | Part of KEY (transaction\_id)                    |
| unique\_id                         | varchar(32)                                                        | Part of UNIQUE KEY (unique\_id)                  |
| status                             | enum('IN\_PROGRESS','FAIL','SUCCESS','PERMANENT\_FAIL','MAX\_OUT') | Part of KEY (status)                             |
| replay\_count                      | tinyint(3)                                                         | None                                             |
| event\_time                        | timestamp                                                          | Part of KEY (event\_time)                        |
| created\_on                        | timestamp                                                          | None                                             |
| last\_update\_by                   | bigint(20)                                                         | None                                             |
| last\_update\_on                   | timestamp                                                          | None                                             |
| params                             | blob                                                               | None                                             |
| param\_types                       | blob                                                               | None                                             |
| json\_params                       | mediumtext                                                         | None                                             |
| fail\_status\_code                 | varchar(20)                                                        | None                                             |
| fail\_status\_message              | mediumtext                                                         | None                                             |
| last\_fail\_event\_id              | bigint(11)                                                         | Part of KEY (last\_fail\_event\_id)              |
| last\_fail\_event\_id\_for\_entity | bigint(11)                                                         | Part of KEY (last\_fail\_event\_id\_for\_entity) |

## Table: `emf_replay_logs`


| Column Name        | Data Type   | Index                           |
| ------------------ | ----------- | ------------------------------- |
| id                 | int(11)     | Part of PRIMARY KEY (id)        |
| unique\_id         | varchar(25) | Part of UNIQUE KEY (unique\_id) |
| user\_id           | bigint(20)  | None                            |
| start\_time        | timestamp   | None                            |
| processed          | int(11)     | None                            |
| failed             | int(11)     | None                            |
| auto\_update\_time | timestamp   | None                            |

## Table: `coupon_upload_file_headers`


| Column Name        | Data Type    | Index                            |
| ------------------ | ------------ | -------------------------------- |
| id                 | int(11)      | Part of PRIMARY KEY (id)         |
| org\_id            | int(11)      | Part of KEY (org\_id)            |
| coupon\_series\_id | int(11)      | Part of KEY (coupon\_series\_id) |
| coupon\_upload\_id | int(11)      | Part of KEY (coupon\_upload\_id) |
| column\_name       | varchar(200) | None                             |
| column\_number     | int(11)      | None                             |
| auto\_update\_time | TIMESTAMP    | Part of KEY (auto\_update\_time) |

## Table: `coupon_product_meta_data`


| Column Name   | Data Type    | Index                              |
| ------------- | ------------ | ---------------------------------- |
| id            | int(11)      | Part of PRIMARY KEY (id)           |
| product\_type | varchar(100) | Part of UNIQUE KEY (product\_type) |

## Table: `coupon_reminders`


| Column Name               | Data Type  | Index                             |
| ------------------------- | ---------- | --------------------------------- |
| id                        | int(11)    | Part of PRIMARY KEY (id)          |
| org\_id                   | int(11)    | Part of KEY (org\_id)             |
| coupon\_series\_id        | int(11)    | Part of KEY (coupon\_series\_id)  |
| num\_days\_before\_expiry | int(11)    | None                              |
| hour\_of\_day             | int(11)    | None                              |
| minute\_of\_hour          | int(11)    | None                              |
| cron\_task\_id            | int(11)    | None                              |
| created\_by               | bigint(20) | None                              |
| created\_on               | datetime   | None                              |
| next\_scheduled\_on       | datetime   | Part of KEY (next\_scheduled\_on) |
| is\_active                | tinyint(1) | None                              |
| is\_enabled               | tinyint(1) | None                              |
| auto\_update\_time        | timestamp  | Part of KEY (auto\_update\_time)  |

## Table: `coupons_created_cleanup`


| Column Name        | Data Type       | Index                                   |
| ------------------ | --------------- | --------------------------------------- |
| id                 | bigint(11)      | Part of PRIMARY KEY (id)                |
| org\_id            | int(11)         | Part of KEY (org\_id)                   |
| coupon\_series\_id | int(11)         | Part of UNIQUE KEY (coupon\_series\_id) |
| cleanup\_status    | enum('PENDING', | Part of KEY (cleanup\_status)           |
| created\_on        | datetime        | None                                    |
| last\_updated\_on  | timestamp       | None                                    |

## Table: `reminder_messages_sent`


| Column Name           | Data Type  | Index                               |
| --------------------- | ---------- | ----------------------------------- |
| id                    | bigint(20) | Part of PRIMARY KEY (id)            |
| org\_id               | int(11)    | Part of KEY (org\_id)               |
| coupon\_series\_id    | int(11)    | Part of KEY (coupon\_series\_id)    |
| reminder\_message\_id | int(11)    | Part of KEY (reminder\_message\_id) |
| customer\_id          | int(11)    | Part of KEY (customer\_id)          |
| message\_id           | bigint(20) | None                                |
| sent\_on              | datetime   | None                                |

## Table: `redemptions_summary_coupon_user`


| Column Name                    | Data Type                      | Index                                               |
| ------------------------------ | ------------------------------ | --------------------------------------------------- |
| id                             | int(11)                        | Part of PRIMARY KEY (id)                            |
| org\_id                        | int(11)                        | Part of UNIQUE KEY (org\_id)                        |
| coupon\_series\_id             | int(11)                        | Part of UNIQUE KEY (coupon\_series\_id)             |
| coupon\_issued\_id             | bigint(11)                     | Part of UNIQUE KEY (coupon\_issued\_id)             |
| redeemed\_user\_id             | bigint(20)                     | Part of UNIQUE KEY (redeemed\_user\_id)             |
| redemption\_config\_entity     | enum('SERIES','OU')            | Part of UNIQUE KEY (redemption\_config\_entity)     |
| redemption\_config\_entity\_id | int(11)                        | Part of UNIQUE KEY (redemption\_config\_entity\_id) |
| redeemed\_date                 | datetime                       | Part of UNIQUE KEY (redeemed\_date)                 |
| kpi                            | enum('REDEMPTIONS','DISCOUNT') | Part of UNIQUE KEY (kpi)                            |
| consumed                       | decimal(15,3)                  | None                                                |
| revoked                        | decimal(15,3)                  | None                                                |
| auto\_update\_time             | timestamp                      | None                                                |

## Table: `coupon_revoke_history`


| Column Name            | Data Type                                                                                                  | Index                            |
| ---------------------- | ---------------------------------------------------------------------------------------------------------- | -------------------------------- |
| id                     | int(11)                                                                                                    | Part of PRIMARY KEY (id)         |
| org\_id                | int(11)                                                                                                    | Part of KEY (org\_id)            |
| coupon\_series\_id     | int(11)                                                                                                    | Part of KEY (coupon\_series\_id) |
| status                 | enum('STARTED','ERRORRED','FINISHED')                                                                      | None                             |
| coupon\_revoke\_type   | enum('COUPON\_SERIES','ONLY\_UNISSUED','CUSTOMER\_ID','COUPON\_CODE','COUPON\_ID','CUSTOMER\_AND\_COUPON') | None                             |
| input\_table\_name     | varchar(50)                                                                                                | None                             |
| temp\_table\_name      | varchar(50)                                                                                                | None                             |
| input\_count           | int(11)                                                                                                    | None                             |
| invalid\_count         | int(11)                                                                                                    | None                             |
| unrevoked\_count       | int(11)                                                                                                    | None                             |
| revoked\_count         | int(11)                                                                                                    | None                             |
| uploaded\_file\_name   | varchar(1024)                                                                                              | None                             |
| uploaded\_file\_handle | varchar(1024)                                                                                              | None                             |
| error\_file\_handle    | varchar(1024)                                                                                              | None                             |
| success\_file\_handle  | varchar(1024)                                                                                              | None                             |
| created\_on            | datetime                                                                                                   | None                             |
| is\_valid              | tinyint(1)                                                                                                 | None                             |
| auto\_update\_time     | timestamp                                                                                                  | None                             |

## Table: `rolling_table_mapping`


| Column Name           | Data Type    | Index                               |
| --------------------- | ------------ | ----------------------------------- |
| id                    | int(11)      | Part of PRIMARY KEY (id)            |
| original\_table\_name | varchar(100) | Part of KEY (original\_table\_name) |
| rolling\_table\_name  | varchar(100) | None                                |
| start\_time           | datetime     | None                                |
| end\_time             | datetime     | None                                |
| is\_archived          | tinyint(1)   | None                                |
| auto\_update\_time    | timestamp    | Part of KEY (auto\_update\_time)    |

## Table: `coupons_expiry`


| Column Name               | Data Type  | Index                                   |
| ------------------------- | ---------- | --------------------------------------- |
| id                        | int(11)    | Part of PRIMARY KEY (id)                |
| org\_id                   | int(11)    | Part of KEY (org\_id)                   |
| coupon\_issued\_id        | int(11)    | Part of KEY (coupon\_issued\_id)        |
| expiry\_date              | bigint(20) | None                                    |
| is\_coupon\_expiry\_valid | tinyint(1) | Part of KEY (is\_coupon\_expiry\_valid) |
| auto\_update\_time        | timestamp  | None                                    |
| modified\_by              | bigint(20) | None                                    |

## Table: `voucher_series`


| Column Name                             | Data Type                                                                                                                                 | Index                                |
| --------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ |
| id                                      | int(11)                                                                                                                                   | Part of PRIMARY KEY (id)             |
| org\_id                                 | int(11)                                                                                                                                   | Part of KEY (org\_id)                |
| org\_unit\_id                           | int(11)                                                                                                                                   | Part of KEY (org\_unit\_id)          |
| description                             | varchar(255)                                                                                                                              | None                                 |
| series\_type                            | enum('CAMPAIGN','DVS','ALLIANCE','GOODWILL','LOYALTY','UNDEFINED','TIMELINE','REFERRAL',                                                  | None                                 |
| client\_handling\_type                  | enum('DISC\_CODE','RULE\_BASED','DISC\_GV','DISC\_PROMO','DISC\_CODE\_PIN','AMOUNT\_BASED','ARTICLE\_BASED','GENERIC','EXTERNAL\_ISSUAL', | Part of KEY (client\_handling\_type) |
| discount\_code                          | varchar(100)                                                                                                                              | None                                 |
| valid\_till\_date                       | date                                                                                                                                      | Part of KEY (valid\_till\_date)      |
| valid\_days\_from\_create               | int(11)                                                                                                                                   | None                                 |
| expiry\_strategy\_type                  | enum('DAYS','MONTHS','MONTHS\_END','SERIES\_EXPIRY')                                                                                      | None                                 |
| expiry\_strategy\_value                 | int(11)                                                                                                                                   | None                                 |
| max\_create                             | int(11)                                                                                                                                   | None                                 |
| max\_redeem                             | int(11)                                                                                                                                   | None                                 |
| transferrable                           | tinyint(1)                                                                                                                                | None                                 |
| any\_user                               | tinyint(1)                                                                                                                                | None                                 |
| same\_user\_multiple\_redeem            | tinyint(1)                                                                                                                                | None                                 |
| allow\_referral\_existing\_users        | tinyint(1)                                                                                                                                | None                                 |
| multiple\_use                           | tinyint(1)                                                                                                                                | None                                 |
| is\_validation\_required                | tinyint(1)                                                                                                                                | None                                 |
| valid\_with\_discounted\_item           | tinyint(1)                                                                                                                                | None                                 |
| created\_by                             | bigint(20)                                                                                                                                | None                                 |
| num\_issued                             | int(11)                                                                                                                                   | None                                 |
| num\_redeemed                           | int(11)                                                                                                                                   | None                                 |
| created                                 | datetime                                                                                                                                  | None                                 |
| last\_used                              | timestamp                                                                                                                                 | Part of KEY (last\_used)             |
| series\_code                            | varchar(20)                                                                                                                               | Part of KEY (series\_code)           |
| sms\_template                           | varchar(255)                                                                                                                              | None                                 |
| disable\_sms                            | tinyint(1)                                                                                                                                | None                                 |
| info                                    | text                                                                                                                                      | None                                 |
| allow\_multiple\_vouchers\_per\_user    | tinyint(1)                                                                                                                                | None                                 |
| do\_not\_resend\_existing\_voucher      | tinyint(1)                                                                                                                                | None                                 |
| mutual\_exclusive\_series\_ids          | mediumtext                                                                                                                                | None                                 |
| store\_ids\_json                        | mediumtext                                                                                                                                | None                                 |
| dvs\_enabled                            | tinyint(1)                                                                                                                                | None                                 |
| dvs\_expiry\_date                       | date                                                                                                                                      | None                                 |
| priority                                | int(11)                                                                                                                                   | None                                 |
| terms\_and\_condition                   | varchar(1000)                                                                                                                             | None                                 |
| signal\_redemption\_event               | tinyint(1)                                                                                                                                | None                                 |
| sync\_to\_client                        | tinyint(1)                                                                                                                                | None                                 |
| short\_sms\_template                    | text                                                                                                                                      | None                                 |
| max\_vouchers\_per\_user                | int(11)                                                                                                                                   | None                                 |
| min\_days\_between\_vouchers            | int(11)                                                                                                                                   | None                                 |
| max\_referrals\_per\_referee            | int(11)                                                                                                                                   | None                                 |
| show\_pin\_code                         | tinyint(1)                                                                                                                                | None                                 |
| discount\_on                            | enum('BILL','ITEM')                                                                                                                       | None                                 |
| discount\_type                          | enum('PERC','ABS')                                                                                                                        | None                                 |
| discount\_value                         | double                                                                                                                                    | None                                 |
| dvs\_items                              | text                                                                                                                                      | None                                 |
| redemption\_range                       | text                                                                                                                                      | None                                 |
| min\_bill\_amount                       | double                                                                                                                                    | None                                 |
| max\_bill\_amount                       | double                                                                                                                                    | None                                 |
| redeem\_at\_store                       | mediumtext                                                                                                                                | None                                 |
| campaign\_id                            | bigint(20)                                                                                                                                | Part of KEY (campaign\_id)           |
| tag                                     | varchar(200)                                                                                                                              | None                                 |
| max\_redemptions\_in\_series\_per\_user | int(11)                                                                                                                                   | None                                 |
| min\_days\_between\_redemption          | int(11)                                                                                                                                   | None                                 |
| redemption\_valid\_from                 | date                                                                                                                                      | None                                 |
| redeem\_store\_type                     | varchar(20)                                                                                                                               | None                                 |
| offline\_redeem\_type                   | tinyint(1)                                                                                                                                | None                                 |
| source\_org\_id                         | int(11)                                                                                                                                   | None                                 |
| issue\_to\_loyalty                      | tinyint(1)                                                                                                                                | None                                 |
| old\_flow\_enabled                      | tinyint(1)                                                                                                                                | None                                 |
| pre\_redeem\_event\_required            | tinyint(1)                                                                                                                                | None                                 |
| redemption\_valid\_after\_days          | int(3)                                                                                                                                    | None                                 |
| purpose                                 | varchar(255)                                                                                                                              | None                                 |
| metadata                                | text                                                                                                                                      | None                                 |
| redemption\_valid\_before\_expiry\_days | int(3)                                                                                                                                    | None                                 |

## Table: `owner_info`


| Column Name        | Data Type                                                                | Index                            |
| ------------------ | ------------------------------------------------------------------------ | -------------------------------- |
| id                 | bigint(11)                                                               | Part of PRIMARY KEY (id)         |
| org\_id            | int(11)                                                                  | Part of KEY (org\_id)            |
| coupon\_series\_id | int(11)                                                                  | Part of KEY (coupon\_series\_id) |
| owned\_by          | enum('NONE','LOYALTY','OUTBOUND','GOODWILL','DVS','TIMELINE','REFERRAL', | Part of KEY (owned\_by)          |
| owner\_id          | int(11)                                                                  | Part of KEY (owner\_id)          |
| expiry\_date       | datetime                                                                 | Part of KEY (expiry\_date)       |
| modified\_by       | bigint(20)                                                               | None                             |
| auto\_update\_time | timestamp                                                                | Part of KEY (auto\_update\_time) |
| owner\_uuid        | varchar(255)                                                             | None                             |

## Table: `org_voucher_expiry_reminder_message`


| Column Name        | Data Type                                                | Index                         |
| ------------------ | -------------------------------------------------------- | ----------------------------- |
| id                 | int(11)                                                  | Part of PRIMARY KEY (id)      |
| org\_id            | int(11)                                                  | Part of PRIMARY KEY (org\_id) |
| comm\_identifier   | varchar(20)                                              | None                          |
| template           | mediumtext                                               | None                          |
| updated\_by        | bigint(20)                                               | None                          |
| updated\_on        | datetime                                                 | None                          |
| active             | tinyint(1)                                               | None                          |
| auto\_update\_time | timestamp                                                | None                          |
| notification\_type | enum('SERIES\_EXPIRY\_REMINDER','COUPON\_LIMIT\_NOTIFY') | None                          |

## Table: `coupons_created`


| Column Name                      | Data Type   | Index                            |
| -------------------------------- | ----------- | -------------------------------- |
| id                               | bigint(11)  | Part of PRIMARY KEY (id)         |
| org\_id                          | int(11)     | Part of KEY (org\_id)            |
| coupon\_code                     | varchar(40) | Part of KEY (coupon\_code)       |
| coupon\_series\_id               | int(11)     | Part of KEY (coupon\_series\_id) |
| series\_expiry\_date             | datetime    | None                             |
| last\_updated\_on                | timestamp   | Part of KEY (last\_updated\_on)  |
| campaigns\_migrated\_voucher\_id | int(11)     | None                             |
| is\_valid                        | tinyint(1)  | None                             |
| is\_queued                       | tinyint(1)  | Part of KEY (is\_queued)         |

## Table: `create_coupons_job`


| Column Name              | Data Type    | Index                            |
| ------------------------ | ------------ | -------------------------------- |
| id                       | int(11)      | Part of PRIMARY KEY (id)         |
| org\_id                  | int(11)      | Part of KEY (org\_id)            |
| coupon\_series\_id       | int(11)      | Part of KEY (coupon\_series\_id) |
| total\_create\_coupons   | int(11)      | None                             |
| current\_create\_coupons | int(11)      | None                             |
| job\_status              | enum('OPEN', | None                             |
| error\_code              | int(11)      | None                             |
| error\_message           | varchar(128) | None                             |
| context\_id              | varchar(100) | Part of KEY (context\_id)        |
| push\_to\_queue          | int(1)       | None                             |
| persist\_for\_days       | int(11)      | None                             |
| created\_date            | datetime     | Part of KEY (created\_date)      |
| auto\_update\_time       | datetime     | None                             |

## Table: `audit_trail`


| Column Name    | Data Type    | Index                         |
| -------------- | ------------ | ----------------------------- |
| id             | int(11)      | Part of PRIMARY KEY (id)      |
| org\_id        | int(11)      | Part of PRIMARY KEY (org\_id) |
| user\_id       | int(11)      | None                          |
| updated\_on    | datetime     | None                          |
| tracked\_class | varchar(100) | None                          |
| tracked\_item  | int(11)      | None                          |
| details        | mediumtext   | None                          |

## Table: `coupon_download`


| Column Name            | Data Type                            | Index                            |
| ---------------------- | ------------------------------------ | -------------------------------- |
| id                     | int(11)                              | Part of PRIMARY KEY (id)         |
| org\_id                | int(11)                              | Part of KEY (org\_id)            |
| coupon\_series\_id     | int(11)                              | Part of KEY (coupon\_series\_id) |
| status                 | enum('STARTED','ERRORED','FINISHED') | None                             |
| s3\_file\_path         | tinytext                             | None                             |
| error\_code            | int(11)                              | None                             |
| error\_message         | text                                 | None                             |
| requested\_by          | int(11)                              | None                             |
| total\_download\_count | int(11)                              | None                             |
| is\_valid              | tinyint(1)                           | None                             |
| type                   | enum('ISSUED','REDEEMED')            | None                             |
| created\_on            | datetime                             | None                             |
| updated\_on            | datetime                             | None                             |
| auto\_update\_time     | timestamp                            | None                             |

## Table: `voucher_reminder_messages_sent`


| Column Name           | Data Type  | Index                            |
| --------------------- | ---------- | -------------------------------- |
| id                    | bigint(11) | Part of PRIMARY KEY (id)         |
| org\_id               | int(11)    | Part of KEY (org\_id)            |
| coupon\_series\_id    | int(11)    | Part of KEY (coupon\_series\_id) |
| reminder\_message\_id | bigint(11) | None                             |
| user\_id              | bigint(20) | None                             |
| message\_id           | bigint(20) | Part of KEY (message\_id)        |
| sent\_on              | timestamp  | None                             |

## Table: `coupon_series_custom_property_key_value`


| Column Name        | Data Type  | Index                            |
| ------------------ | ---------- | -------------------------------- |
| id                 | INT(11)    | Part of PRIMARY KEY (id)         |
| org\_id            | INT(11)    | Part of KEY (org\_id)            |
| coupon\_series\_id | INT(11)    | Part of KEY (coupon\_series\_id) |
| key\_id            | INT(11)    | Part of KEY (key\_id)            |
| value              | TEXT       | None                             |
| updated\_by        | INT(11)    | None                             |
| is\_valid          | TINYINT(1) | Part of KEY (is\_valid)          |
| auto\_update\_time | TIMESTAMP  | None                             |

## Table: `coupon_redemption_upload_file_headers`


| Column Name                    | Data Type    | Index                                        |
| ------------------------------ | ------------ | -------------------------------------------- |
| id                             | int(11)      | Part of PRIMARY KEY (id)                     |
| org\_id                        | int(11)      | Part of KEY (org\_id)                        |
| coupon\_series\_id             | int(11)      | Part of KEY (coupon\_series\_id)             |
| coupon\_redemption\_upload\_id | int(11)      | Part of KEY (coupon\_redemption\_upload\_id) |
| column\_name                   | varchar(200) | None                                         |
| column\_number                 | int(11)      | None                                         |
| auto\_update\_time             | TIMESTAMP    | Part of KEY (auto\_update\_time)             |

## Table: `coupon_config_keys`


| Column Name    | Data Type    | Index                    |
| -------------- | ------------ | ------------------------ |
| id             | int(11)      | Part of PRIMARY KEY (id) |
| name           | varchar(100) | None                     |
| default\_value | mediumtext   | None                     |
| added\_on      | timestamp    | None                     |

## Table: `coupon_upload_summary`


| Column Name        | Data Type                             | Index                            |
| ------------------ | ------------------------------------- | -------------------------------- |
| id                 | int(11)                               | Part of PRIMARY KEY (id)         |
| org\_id            | int(11)                               | Part of KEY (org\_id)            |
| coupon\_series\_id | int(11)                               | Part of KEY (coupon\_series\_id) |
| coupon\_upload\_id | int(11)                               | Part of KEY (coupon\_upload\_id) |
| start\_id          | int(11)                               | None                             |
| end\_id            | int(11)                               | None                             |
| batch\_number      | int(11)                               | None                             |
| batch\_size        | int(11)                               | None                             |
| status             | enum('SUCCESS','FAILED','PROCESSING') | Part of KEY (status)             |
| auto\_update\_time | TIMESTAMP                             | Part of KEY (auto\_update\_time) |

## Table: `task_scheduler_meta`


| Column Name        | Data Type    | Index                         |
| ------------------ | ------------ | ----------------------------- |
| id                 | bigint(11)   | Part of PRIMARY KEY (id)      |
| org\_id            | int(11)      | Part of KEY (org\_id)         |
| scheduler\_type    | varchar(128) | Part of KEY (scheduler\_type) |
| scheduler\_id      | int(11)      | None                          |
| active             | tinyint(1)   | None                          |
| bill\_id           | bigint(20)   | None                          |
| auto\_update\_time | timestamp    | None                          |

## Table: `partner_issued_coupons`


| Column Name        | Data Type   | Index                            |
| ------------------ | ----------- | -------------------------------- |
| id                 | bigint(11)  | Part of PRIMARY KEY (id)         |
| partner\_org\_id   | int(11)     | None                             |
| org\_id            | int(11)     | Part of KEY (org\_id)            |
| coupon\_code       | varchar(40) | Part of KEY (coupon\_code)       |
| coupon\_series\_id | int(11)     | Part of KEY (coupon\_series\_id) |
| issued\_by\_id     | bigint(20)  | None                             |
| requested\_by\_id  | bigint(20)  | None                             |
| issued\_on         | datetime    | None                             |
| notes              | varchar(20) | None                             |
| last\_updated\_on  | timestamp   | None                             |
| is\_valid          | tinyint(1)  | Part of KEY (is\_valid)          |
| coupon\_issued\_id | int(11)     | None                             |

## Table: `merge_user_log`


| Column Name    | Data Type              | Index                        |
| -------------- | ---------------------- | ---------------------------- |
| id             | int(11)                | Part of PRIMARY KEY (id)     |
| org\_id        | int(11)                | Part of KEY (org\_id)        |
| from\_user\_id | int(11)                | Part of KEY (from\_user\_id) |
| to\_user\_id   | int(11)                | Part of KEY (to\_user\_id)   |
| merged\_date   | datetime               | Part of KEY (merged\_date)   |
| till\_id       | int(11)                | None                         |
| request\_id    | varchar(100)           | Part of KEY (request\_id)    |
| status         | enum('SUCCESS','FAIL') | None                         |
| error\_message | text                   | None                         |
| notes          | text                   | None                         |

## Table: `coupon_series_audience_group`


| Column Name                  | Data Type  | Index                            |
| ---------------------------- | ---------- | -------------------------------- |
| id                           | bigint(11) | Part of PRIMARY KEY (id)         |
| org\_id                      | int(11)    | Part of KEY (org\_id)            |
| coupon\_series\_id           | int(11)    | Part of KEY (coupon\_series\_id) |
| audience\_group\_id          | int(11)    | None                             |
| audience\_group\_version\_id | int(11)    | None                             |
| updated\_by                  | bigint(20) | None                             |
| auto\_update\_time           | timestamp  | None                             |

## Table: `coupon_reminder_messages`


| Column Name          | Data Type                                   | Index                              |
| -------------------- | ------------------------------------------- | ---------------------------------- |
| id                   | int(11)                                     | Part of PRIMARY KEY (id)           |
| org\_id              | int(11)                                     | Part of KEY (org\_id)              |
| coupon\_series\_id   | int(11)                                     | Part of KEY (coupon\_series\_id)   |
| coupon\_reminder\_id | int(11)                                     | Part of KEY (coupon\_reminder\_id) |
| type                 | enum('SMS','EMAIL','WECHAT','MOBILE\_PUSH') | None                               |
| message\_json        | mediumtext                                  | None                               |
| created\_by          | bigint(20)                                  | None                               |
| created\_on          | datetime                                    | None                               |
| updated\_by          | bigint(20)                                  | None                               |
| updated\_on          | datetime                                    | None                               |
| is\_valid            | tinyint(1)                                  | None                               |
| auto\_update\_time   | timestamp                                   | Part of KEY (auto\_update\_time)   |

## Table: `coupon_product_data_values`


| Column Name                    | Data Type  | Index                                     |
| ------------------------------ | ---------- | ----------------------------------------- |
| id                             | int(11)    | Part of PRIMARY KEY (id)                  |
| voucher\_product\_id           | int(11)    | Part of UNIQUE KEY (voucher\_product\_id) |
| org\_id                        | int(11)    | Part of KEY (org\_id)                     |
| voucher\_series\_id            | int(11)    | Part of KEY (voucher\_series\_id)         |
| product\_id                    | int(11)    | Part of UNIQUE KEY (product\_id)          |
| is\_valid                      | tinyint(1) | Part of KEY (is\_valid)                   |
| redemption\_config\_entity     | enum('OU') | None                                      |
| redemption\_config\_entity\_id | int(11)    | None                                      |
| auto\_update\_time             | timestamp  | None                                      |

## Table: `coupon_redemption_upload_summary`


| Column Name                    | Data Type                             | Index                                        |
| ------------------------------ | ------------------------------------- | -------------------------------------------- |
| id                             | int(11)                               | Part of PRIMARY KEY (id)                     |
| org\_id                        | int(11)                               | Part of KEY (org\_id)                        |
| coupon\_series\_id             | int(11)                               | Part of KEY (coupon\_series\_id)             |
| coupon\_redemption\_upload\_id | int(11)                               | Part of KEY (coupon\_redemption\_upload\_id) |
| start\_id                      | int(11)                               | None                                         |
| end\_id                        | int(11)                               | None                                         |
| batch\_number                  | int(11)                               | None                                         |
| batch\_size                    | int(11)                               | None                                         |
| batch\_status                  | enum('SUCCESS','FAILED','PROCESSING') | Part of KEY (batch\_status)                  |
| auto\_update\_time             | TIMESTAMP                             | Part of KEY (auto\_update\_time)             |

## Table: `coupon_config_key_values`


| Column Name                      | Data Type  | Index                            |
| -------------------------------- | ---------- | -------------------------------- |
| id                               | int(11)    | Part of PRIMARY KEY (id)         |
| key\_id                          | int(11)    | Part of KEY (key\_id)            |
| org\_id                          | int(11)    | Part of KEY (org\_id)            |
| coupon\_series\_id               | int(11)    | Part of KEY (coupon\_series\_id) |
| value                            | mediumtext | None                             |
| updated\_by                      | int(11)    | None                             |
| updated\_on                      | datetime   | None                             |
| is\_valid                        | tinyint(1) | Part of KEY (is\_valid)          |
| auto\_update\_time               | timestamp  | Part of KEY (auto\_update\_time) |
| redemption\_config\_entity\_type | enum('OU') | None                             |
| redemption\_config\_entity\_id   | int(11)    | None                             |

## Table: `coupon_upload`


| Column Name                  | Data Type                                                                                                                                  | Index                            |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------- |
| id                           | int(11)                                                                                                                                    | Part of PRIMARY KEY (id)         |
| org\_id                      | int(11)                                                                                                                                    | Part of KEY (org\_id)            |
| coupon\_series\_id           | int(11)                                                                                                                                    | Part of KEY (coupon\_series\_id) |
| audience\_id                 | int(11)                                                                                                                                    | None                             |
| audience\_group\_version\_id | int(11)                                                                                                                                    | None                             |
| customer\_type               | enum('MOBILE','EMAIL','USER\_ID','EXTERNAL\_ID','NOT\_TAGGED')                                                                             | None                             |
| execution\_status            | enum('OPEN','PAUSE','RUNNING','COMPLETED','ERRED')                                                                                         | Part of KEY (execution\_status)  |
| status                       | enum('OPEN','AUDIENCE\_INITIALIZER','TABLE\_INITIALIZER','VALIDATION','PRE\_COMMIT\_PHASE','COMMIT\_PHASE','POST\_COMMIT\_PHASE','NOTIFY') | None                             |
| sub\_status                  | enum('NONE','START','DONE')                                                                                                                | None                             |
| total\_upload\_count         | int(11)                                                                                                                                    | None                             |
| error\_count                 | int(11)                                                                                                                                    | None                             |
| error\_code                  | int(11)                                                                                                                                    | None                             |
| error\_message               | varchar(100)                                                                                                                               | None                             |
| uploaded\_file\_url          | varchar(1024)                                                                                                                              | None                             |
| error\_file\_url             | varchar(1024)                                                                                                                              | None                             |
| success\_file\_url           | varchar(1024)                                                                                                                              | None                             |
| temp\_table\_name            | varchar(50)                                                                                                                                | None                             |
| is\_valid                    | tinyint(1)                                                                                                                                 | None                             |
| is\_commit\_enabled          | tinyint(1)                                                                                                                                 | None                             |
| current\_issued\_count       | int(11)                                                                                                                                    | None                             |
| issuable\_upload\_count      | int(11)                                                                                                                                    | None                             |
| upload\_issued\_count        | int(11)                                                                                                                                    | None                             |
| created\_on                  | datetime                                                                                                                                   | None                             |
| updated\_on                  | datetime                                                                                                                                   | None                             |
| uploaded\_by                 | bigint(20)                                                                                                                                 | None                             |
| auto\_update\_time           | timestamp                                                                                                                                  | Part of KEY (auto\_update\_time) |
| uploaded\_file\_name         | varchar(1024)                                                                                                                              | None                             |

## Table: `coupon_series_custom_property_keys`


| Column Name        | Data Type    | Index                   |
| ------------------ | ------------ | ----------------------- |
| id                 | INT(11)      | Part of KEY (id)        |
| org\_id            | INT(11)      | Part of KEY (org\_id)   |
| name               | VARCHAR(128) | Part of KEY (name)      |
| updated\_by        | INT(11)      | None                    |
| is\_valid          | TINYINT(1)   | Part of KEY (is\_valid) |
| auto\_update\_time | TIMESTAMP    | None                    |

## Table: `coupons_issued`


| Column Name        | Data Type                   | Index                                   |
| ------------------ | --------------------------- | --------------------------------------- |
| id                 | bigint(11)                  | Part of PRIMARY KEY (id)                |
| org\_id            | int(11)                     | Part of KEY (org\_id)                   |
| coupon\_code       | varchar(40)                 | Part of UNIQUE KEY (coupon\_code)       |
| pin\_code          | varchar(255)                | None                                    |
| issued\_to         | bigint(20)                  | Part of KEY (issued\_to)                |
| coupon\_series\_id | int(11)                     | Part of KEY (coupon\_series\_id)        |
| issued\_date       | datetime                    | Part of KEY (issued\_date)              |
| issued\_by         | bigint(20)                  | None                                    |
| issual\_type       | enum('SINGLE','BULK','NCA') | None                                    |
| criteria\_id       | bigint(20)                  | None                                    |
| active             | tinyint(1)                  | Part of UNIQUE KEY (active)             |
| bill\_id           | bigint(20)                  | None                                    |
| auto\_update\_time | timestamp                   | Part of KEY (auto\_update\_time)        |
| coupon\_uniqueness | bigint(20)                  | Part of UNIQUE KEY (coupon\_uniqueness) |

## Table: `default_properties`


| Column Name        | Data Type   | Index                            |
| ------------------ | ----------- | -------------------------------- |
| id                 | int(11)     | Part of PRIMARY KEY (id)         |
| org\_id            | int(11)     | Part of KEY (org\_id)            |
| property\_key      | varchar(30) | Part of KEY (property\_key)      |
| property\_value    | mediumtext  | None                             |
| is\_valid          | tinyint(1)  | Part of KEY (is\_valid)          |
| updated\_by        | bigint(20)  | None                             |
| updated\_on        | datetime    | None                             |
| auto\_update\_time | timestamp   | Part of KEY (auto\_update\_time) |

## Table: `coupon_sent_history`


| Column Name        | Data Type  | Index                            |
| ------------------ | ---------- | -------------------------------- |
| id                 | int(11)    | Part of PRIMARY KEY (id)         |
| org\_id            | int(11)    | Part of KEY (org\_id)            |
| coupon\_series\_id | int(11)    | Part of KEY (coupon\_series\_id) |
| coupon\_issued\_id | bigint(11) | Part of KEY (coupon\_issued\_id) |
| sent\_date         | datetime   | None                             |
| till\_id           | bigint(20) | None                             |
| notes              | tinytext   | None                             |
| auto\_update\_time | timestamp  | Part of KEY (auto\_update\_time) |

## Table: `coupon_reminder_execution_log`


| Column Name             | Data Type                                    | Index                              |
| ----------------------- | -------------------------------------------- | ---------------------------------- |
| id                      | int(11)                                      | Part of PRIMARY KEY (id)           |
| org\_id                 | int(11)                                      | Part of KEY (org\_id)              |
| coupon\_series\_id      | int(11)                                      | Part of KEY (coupon\_series\_id)   |
| coupon\_reminder\_id    | int(11)                                      | Part of KEY (coupon\_reminder\_id) |
| status                  | enum('QUEUED','RUNNING','COMPLETED','ERROR') | Part of KEY (status)               |
| execution\_started\_on  | datetime                                     | None                               |
| execution\_finished\_on | datetime                                     | None                               |
| notes                   | mediumtext                                   | None                               |
| auto\_update\_time      | timestamp                                    | Part of KEY (auto\_update\_time)   |

## Table: `coupon_redemptions`


| Column Name                    | Data Type                | Index                            |
| ------------------------------ | ------------------------ | -------------------------------- |
| id                             | int(11)                  | Part of PRIMARY KEY (id)         |
| org\_id                        | int(11)                  | Part of KEY (org\_id)            |
| coupon\_series\_id             | int(11)                  | Part of KEY (coupon\_series\_id) |
| coupon\_issued\_id             | bigint(11)               | Part of KEY (coupon\_issued\_id) |
| redeemed\_user\_id             | bigint(20)               | Part of KEY (redeemed\_user\_id) |
| redeemed\_date                 | datetime                 | Part of KEY (redeemed\_date)     |
| redeemed\_at\_store            | bigint(20)               | None                             |
| bill\_id                       | bigint(20)               | None                             |
| bill\_number                   | varchar(50)              | None                             |
| bill\_amount                   | decimal(15,3)            | None                             |
| discount                       | decimal(15,3)            | None                             |
| details                        | tinytext                 | None                             |
| entry\_type                    | enum('intouch','manual') | None                             |
| validation\_code\_used         | varchar(30)              | None                             |
| active                         | tinyint(1)               | Part of KEY (active)             |
| reversed\_on                   | datetime                 | None                             |
| redemption\_config\_entity     | enum('OU')               | None                             |
| redemption\_config\_entity\_id | int(11)                  | None                             |
| auto\_update\_time             | timestamp                | Part of KEY (auto\_update\_time) |

## Table: `coupon_redemption_upload`


| Column Name              | Data Type                                                                                          | Index                            |
| ------------------------ | -------------------------------------------------------------------------------------------------- | -------------------------------- |
| id                       | int(11)                                                                                            | Part of PRIMARY KEY (id)         |
| org\_id                  | int(11)                                                                                            | Part of KEY (org\_id)            |
| coupon\_series\_id       | int(11)                                                                                            | Part of KEY (coupon\_series\_id) |
| customer\_type           | enum('MOBILE','EMAIL','USER\_ID','EXTERNAL\_ID')                                                   | None                             |
| coupon\_identifier\_type | enum('COUPON\_ID','COUPON\_CODE')                                                                  | None                             |
| job\_status              | enum('QUEUED','PAUSED','RUNNING','COMPLETED','ERRORED')                                            | Part of KEY (job\_status)        |
| execution\_step          | enum('QUEUED','TABLE\_INITIALIZATION','VALIDATION','PRE\_COMMIT','COMMIT','POST\_COMMIT','NOTIFY') | None                             |
| execution\_step\_status  | enum('STARTED','COMPLETED','ERRORED')                                                              | None                             |
| total\_upload\_count     | int(11)                                                                                            | None                             |
| upload\_redeem\_count    | int(11)                                                                                            | None                             |
| error\_count             | int(11)                                                                                            | None                             |
| error\_code              | int(11)                                                                                            | None                             |
| error\_message           | varchar(100)                                                                                       | None                             |
| uploaded\_file\_url      | varchar(1024)                                                                                      | None                             |
| error\_file\_url         | varchar(1024)                                                                                      | None                             |
| success\_file\_url       | varchar(1024)                                                                                      | None                             |
| temp\_table\_name        | varchar(50)                                                                                        | None                             |
| is\_commit\_enabled      | tinyint(1)                                                                                         | None                             |
| created\_on              | datetime                                                                                           | None                             |
| uploaded\_by             | bigint(20)                                                                                         | None                             |
| auto\_update\_time       | timestamp                                                                                          | Part of KEY (auto\_update\_time) |

## Table: `coupon_config_redemptions_org_entities`


| Column Name                    | Data Type                             | Index                            |
| ------------------------------ | ------------------------------------- | -------------------------------- |
| id                             | int(11)                               | Part of PRIMARY KEY (id)         |
| org\_id                        | int(11)                               | Part of KEY (org\_id)            |
| coupon\_series\_id             | int(11)                               | Part of KEY (coupon\_series\_id) |
| org\_entity\_type              | enum('TILL','STORE','CONCEPT','ZONE') | Part of KEY (org\_entity\_type)  |
| org\_entity\_id                | int(11)                               | Part of KEY (org\_entity\_id)    |
| is\_valid                      | tinyint(1)                            | Part of KEY (is\_valid)          |
| redemption\_config\_entity     | enum('OU')                            | None                             |
| redemption\_config\_entity\_id | int(11)                               | None                             |
| updated\_by                    | int(11)                               | None                             |
| auto\_update\_time             | timestamp                             | Part of KEY (auto\_update\_time) |

## Table: `entity_life_cycle`


| Column Name             | Data Type   | Index                                 |
| ----------------------- | ----------- | ------------------------------------- |
| id                      | int(11)     | Part of PRIMARY KEY (id)              |
| org\_id                 | int(11)     | Part of KEY (org\_id)                 |
| entity\_type            | varchar(50) | Part of KEY (entity\_type)            |
| entity\_id              | int(11)     | Part of KEY (entity\_id)              |
| org\_source\_id         | int(11)     | None                                  |
| activity                | varchar(50) | None                                  |
| state                   | varchar(50) | None                                  |
| added\_by               | int(11)     | None                                  |
| added\_on               | datetime    | None                                  |
| reference\_id           | varchar(50) | None                                  |
| auto\_update\_timestamp | timestamp   | Part of KEY (auto\_update\_timestamp) |
| updated\_on             | datetime    | None                                  |

## Table: `api_audit`


| Column Name             | Data Type   | Index                                 |
| ----------------------- | ----------- | ------------------------------------- |
| id                      | int(11)     | Part of PRIMARY KEY (id)              |
| org\_id                 | int(11)     | Part of KEY (org\_id)                 |
| entity\_type            | varchar(50) | Part of KEY (entity\_type)            |
| entity\_id              | int(11)     | Part of KEY (entity\_id)              |
| operation               | text        | None                                  |
| module                  | varchar(50) | None                                  |
| reference\_id           | varchar(50) | None                                  |
| old\_data               | text        | None                                  |
| new\_data               | text        | None                                  |
| operation\_by           | int(11)     | None                                  |
| auto\_update\_timestamp | timestamp   | Part of KEY (auto\_update\_timestamp) |
| params                  | text        | None                                  |

## Table: `cli_scripts`


| Column Name | Data Type    | Index                           |
| ----------- | ------------ | ------------------------------- |
| id          | int(11)      | Part of PRIMARY KEY (id)        |
| url         | varchar(250) | None                            |
| unique\_id  | varchar(250) | Part of UNIQUE KEY (unique\_id) |
| ran\_on     | datetime     | Part of KEY (ran\_on)           |

## Table: `audit_trail`


| Column Name        | Data Type    | Index                         |
| ------------------ | ------------ | ----------------------------- |
| id                 | int(11)      | Part of PRIMARY KEY (id)      |
| org\_id            | int(11)      | Part of PRIMARY KEY (org\_id) |
| user\_id           | int(11)      | None                          |
| updated\_on        | datetime     | None                          |
| tracked\_class     | varchar(100) | None                          |
| tracked\_item      | int(11)      | None                          |
| details            | mediumtext   | None                          |
| auto\_update\_time | timestamp    | None                          |

## Table: `campaign_audit`


| Column Name    | Data Type    | Index                         |
| -------------- | ------------ | ----------------------------- |
| id             | int(11)      | Part of PRIMARY KEY (id)      |
| org\_id        | int(11)      | Part of PRIMARY KEY (org\_id) |
| user\_id       | int(11)      | None                          |
| updated\_on    | datetime     | None                          |
| tracked\_class | varchar(100) | None                          |
| tracked\_item  | varchar(64)  | None                          |
| details        | mediumtext   | None                          |

## Table: `check_in_feedback`


| Column Name       | Data Type  | Index                         |
| ----------------- | ---------- | ----------------------------- |
| id                | bigint(20) | Part of PRIMARY KEY (id)      |
| org\_id           | int(11)    | Part of PRIMARY KEY (org\_id) |
| user\_id          | bigint(21) | None                          |
| store\_id         | int(11)    | None                          |
| last\_updated\_on | datetime   | None                          |

## Table: `client_versions`


| Column Name        | Data Type                       | Index                    |
| ------------------ | ------------------------------- | ------------------------ |
| id                 | int(11)                         | Part of PRIMARY KEY (id) |
| client\_type       | enum('INTOUCH','STORE\_CENTER') | None                     |
| version            | varchar(255)                    | None                     |
| framework\_version | varchar(50)                     | None                     |
| change\_log        | mediumtext                      | None                     |
| created\_on        | datetime                        | None                     |
| version\_added\_by | int(11)                         | None                     |
| is\_active         | tinyint(4)                      | None                     |

## Table: `permission_hierarchy`


| Column Name            | Data Type   | Index                                      |
| ---------------------- | ----------- | ------------------------------------------ |
| id                     | int(11)     | Part of PRIMARY KEY (id)                   |
| parent\_permission\_id | int(11)     | None                                       |
| child\_permission\_id  | int(11)     | Part of UNIQUE KEY (child\_permission\_id) |
| notes                  | varchar(40) | None                                       |

## Table: `Incoming_email_ids`


| Column Name   | Data Type   | Index                        |
| ------------- | ----------- | ---------------------------- |
| id            | int(11)     | Part of PRIMARY KEY (id)     |
| org\_id       | int(11)     | Part of UNIQUE KEY (org\_id) |
| name          | varchar(50) | None                         |
| email         | varchar(50) | Part of UNIQUE KEY (email)   |
| last\_updated | timestamp   | None                         |

## Table: `issue_revision_log`


| Column Name       | Data Type  | Index                               |
| ----------------- | ---------- | ----------------------------------- |
| id                | int(11)    | Part of PRIMARY KEY (id)            |
| org\_id           | int(11)    | Part of UNIQUE KEY (org\_id)        |
| issue\_id         | int(11)    | Part of UNIQUE KEY (issue\_id)      |
| issue\_log\_id    | int(11)    | Part of UNIQUE KEY (issue\_log\_id) |
| revision\_params  | mediumtext | None                                |
| last\_updated\_on | datetime   | None                                |
| last\_updated\_by | int(11)    | None                                |

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

## Table: `issue_tracker_log`


| Column Name   | Data Type                                         | Index                     |
| ------------- | ------------------------------------------------- | ------------------------- |
| id            | int(11)                                           | Part of PRIMARY KEY (id)  |
| tracker\_id   | bigint(20)                                        | Part of KEY (tracker\_id) |
| org\_id       | int(11)                                           | Part of KEY (org\_id)     |
| status        | varchar(50)                                       | None                      |
| priority      | varchar(50)                                       | None                      |
| department    | varchar(50)                                       | None                      |
| assigned\_to  | bigint(20)                                        | None                      |
| issue\_code   | varchar(50)                                       | None                      |
| issue\_name   | varchar(500)                                      | None                      |
| customer\_id  | bigint(20)                                        | None                      |
| ticket\_code  | varchar(50)                                       | None                      |
| assigned\_by  | bigint(20)                                        | None                      |
| due\_date     | datetime                                          | None                      |
| reported\_by  | enum('INTOUCH','CALLCENTER','CLIENT','MICROSITE') | None                      |
| resolved\_by  | bigint(20)                                        | None                      |
| last\_updated | timestamp                                         | None                      |

## Table: `issue_tracker_escalation`


| Column Name        | Data Type  | Index                            |
| ------------------ | ---------- | -------------------------------- |
| id                 | int(11)    | Part of PRIMARY KEY (id)         |
| org\_id            | int(11)    | Part of KEY (org\_id)            |
| ticket\_id         | int(11)    | Part of KEY (ticket\_id)         |
| user\_id           | int(11)    | None                             |
| store\_id          | int(11)    | None                             |
| escalated\_email   | mediumtext | None                             |
| last\_updated\_on  | datetime   | None                             |
| auto\_update\_time | timestamp  | Part of KEY (auto\_update\_time) |

## Table: `apt`


| Column Name    | Data Type | Index |
| -------------- | --------- | ----- |
| id             | longtext  | None  |
| action\_id     | longtext  | None  |
| permission\_id | longtext  | None  |

## Table: `assigned_to_user`


| Column Name | Data Type | Index                         |
| ----------- | --------- | ----------------------------- |
| id          | int(11)   | Part of PRIMARY KEY (id)      |
| org\_id     | int(11)   | Part of UNIQUE KEY (org\_id)  |
| user\_id    | int(11)   | Part of UNIQUE KEY (user\_id) |

## Table: `issue_tracker`


| Column Name        | Data Type                                                 | Index                             |
| ------------------ | --------------------------------------------------------- | --------------------------------- |
| id                 | int(11)                                                   | Part of PRIMARY KEY (id)          |
| org\_id            | int(11)                                                   | Part of KEY (org\_id)             |
| status             | varchar(50)                                               | None                              |
| priority           | varchar(50)                                               | None                              |
| department         | varchar(50)                                               | None                              |
| assigned\_to       | bigint(20)                                                | None                              |
| issue\_code        | varchar(50)                                               | None                              |
| issue\_name        | varchar(5000)                                             | None                              |
| customer\_id       | varchar(13)                                               | Part of KEY (customer\_id)        |
| ticket\_code       | varchar(50)                                               | Part of UNIQUE KEY (ticket\_code) |
| assigned\_by       | bigint(20)                                                | Part of KEY (assigned\_by)        |
| due\_date          | date                                                      | None                              |
| created\_date      | datetime                                                  | None                              |
| mark\_critical\_on | datetime                                                  | None                              |
| reported\_by       | enum('EMAIL','INTOUCH','CALLCENTER','CLIENT','MICROSITE') | None                              |
| type               | enum('STORE','CUSTOMER')                                  | None                              |
| resolved\_by       | bigint(20)                                                | None                              |
| last\_updated      | timestamp                                                 | None                              |
| is\_active         | tinyint(1)                                                | None                              |
| created\_by        | int(11)                                                   | None                              |
| auto\_update\_time | timestamp                                                 | Part of KEY (auto\_update\_time)  |

## Table: `notification_configs`


| Column Name | Data Type        | Index                            |
| ----------- | ---------------- | -------------------------------- |
| action\_id  | int(11)          | Part of PRIMARY KEY (action\_id) |
| report\_to  | varchar(200)     | None                             |
| send\_sms   | enum('YES','NO') | None                             |
| send\_email | enum('YES','NO') | None                             |
| org\_id     | int(11)          | Part of PRIMARY KEY (org\_id)    |

## Table: `segment_query_log`


| Column Name          | Data Type                 | Index                           |
| -------------------- | ------------------------- | ------------------------------- |
| id                   | bigint(20)                | Part of KEY (id)                |
| org\_id              | int(11)                   | Part of KEY (org\_id)           |
| request              | text                      | None                            |
| request\_type\_id    | int(11)                   | Part of KEY (request\_type\_id) |
| client\_id           | int(11)                   | Part of KEY (client\_id)        |
| request\_start\_time | datetime                  | None                            |
| request\_end\_time   | datetime                  | None                            |
| query\_status        | enum('SUCCESS','FAILURE') | None                            |
| failure\_code        | int(11)                   | None                            |

## Table: `status`


| Column Name | Data Type | Index                    |
| ----------- | --------- | ------------------------ |
| id          | int(11)   | Part of PRIMARY KEY (id) |
| code        | int(11)   | None                     |
| description | text      | None                     |

## Table: `segment_run_details`


| Column Name       | Data Type                                                                                                                       | Index                     |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------- |
| id                | int(11)                                                                                                                         | Part of UNIQUE KEY (id)   |
| org\_id           | bigint(20)                                                                                                                      | Part of KEY (org\_id)     |
| segment\_id       | bigint(20)                                                                                                                      | Part of KEY (segment\_id) |
| metadata\_id      | bigint(20)                                                                                                                      | None                      |
| status            | enum('VALIDATING','AWAITING\_ACTION','VALIDATION\_FAILED','DISCARDED','SYNC\_INPROGRESS','SYNC\_DONE','SYNC\_FAILED','SKIPPED') | None                      |
| success\_source   | text                                                                                                                            | None                      |
| error\_source     | text                                                                                                                            | None                      |
| stats\_params     | text                                                                                                                            | None                      |
| last\_updated\_by | bigint(20)                                                                                                                      | None                      |
| last\_updated\_on | timestamp                                                                                                                       | None                      |

## Table: `segment_cron`


| Column Name       | Data Type    | Index                            |
| ----------------- | ------------ | -------------------------------- |
| id                | bigint(20)   | Part of PRIMARY KEY (id)         |
| org\_id           | int(11)      | Part of KEY (org\_id)            |
| segment\_id       | bigint(20)   | Part of UNIQUE KEY (segment\_id) |
| pattern           | varchar(100) | None                             |
| start\_validity   | DATE         | None                             |
| end\_validity     | DATE         | None                             |
| last\_run\_date   | datetime     | None                             |
| is\_valid         | tinyint(1)   | None                             |
| recipients        | TEXT         | None                             |
| last\_updated\_on | timestamp    | None                             |

## Table: `segment_values`


| Column Name | Data Type    | Index                     |
| ----------- | ------------ | ------------------------- |
| id          | bigint(20)   | Part of PRIMARY KEY (id)  |
| org\_id     | varchar(45)  | Part of KEY (org\_id)     |
| segment\_id | bigint(20)   | Part of KEY (segment\_id) |
| count       | bigint(20)   | None                      |
| is\_valid   | tinyint(4)   | None                      |
| name        | varchar(100) | Part of UNIQUE KEY (name) |
| description | text         | None                      |

## Table: `jobs`


| Column Name       | Data Type                                                        | Index                            |
| ----------------- | ---------------------------------------------------------------- | -------------------------------- |
| id                | bigint(20)                                                       | Part of UNIQUE KEY (id)          |
| org\_id           | bigint(20)                                                       | Part of PRIMARY KEY (org\_id)    |
| segment\_id       | bigint(20)                                                       | Part of UNIQUE KEY (segment\_id) |
| type              | enum('UPLOAD\_SEGMENT','PERSIST\_SEGMENT')                       | None                             |
| status            | enum('OPEN','IN\_PROGRESS','SUCCESS','ERROR','ACCEPT','DISCARD') | None                             |
| last\_updated\_on | timestamp                                                        | None                             |

## Table: `segments`


| Column Name       | Data Type                  | Index                     |
| ----------------- | -------------------------- | ------------------------- |
| id                | bigint(20)                 | Part of PRIMARY KEY (id)  |
| org\_id           | int(11)                    | Part of KEY (org\_id)     |
| name              | varchar(100)               | Part of UNIQUE KEY (name) |
| description       | text                       | None                      |
| type              | enum('UPLOAD','RULEBASED') | None                      |
| is\_active        | tinyint(1)                 | None                      |
| is\_refreshable   | tinyint(1)                 | None                      |
| is\_scd           | tinyint(1)                 | None                      |
| total\_count      | bigint(20)                 | None                      |
| success\_count    | bigint(20)                 | None                      |
| created\_by       | bigint(20)                 | None                      |
| created\_on       | datetime                   | None                      |
| last\_updated\_by | bigint(20)                 | None                      |
| last\_updated\_on | timestamp                  | None                      |

## Table: `segment_error_summary`


| Column Name        | Data Type    | Index                         |
| ------------------ | ------------ | ----------------------------- |
| id                 | bigint(20)   | Part of PRIMARY KEY (id)      |
| org\_id            | bigint(20)   | Part of PRIMARY KEY (org\_id) |
| segment\_id        | bigint(20)   | None                          |
| job\_id            | bigint(20)   | None                          |
| error\_type        | varchar(100) | None                          |
| error\_description | text         | None                          |
| count              | bigint(20)   | None                          |

## Table: `segment_inactive_details`


| Column Name               | Data Type                             | Index                            |
| ------------------------- | ------------------------------------- | -------------------------------- |
| id                        | bigint(20)                            | Part of UNIQUE KEY (id)          |
| org\_id                   | int(11)                               | Part of PRIMARY KEY (org\_id)    |
| segment\_id               | bigint(20)                            | Part of UNIQUE KEY (segment\_id) |
| elastic\_delete\_status   | enum('PENDING','IN\_PROGRESS','DONE') | None                             |
| elastic\_delete\_task\_id | text                                  | None                             |
| last\_updated\_on         | timestamp                             | None                             |

## Table: `changelog`


| Column Name       | Data Type  | Index                         |
| ----------------- | ---------- | ----------------------------- |
| id                | bigint(20) | Part of PRIMARY KEY (id)      |
| org\_id           | bigint(20) | Part of PRIMARY KEY (org\_id) |
| segment\_id       | bigint(20) | None                          |
| job\_id           | bigint(20) | None                          |
| description       | text       | None                          |
| last\_updated\_by | bigint(20) | None                          |
| last\_updated\_on | timestamp  | None                          |

## Table: `segment_ftp_metadata`


| Column Name       | Data Type    | Index                            |
| ----------------- | ------------ | -------------------------------- |
| id                | bigint(20)   | Part of PRIMARY KEY (id)         |
| org\_id           | int(11)      | Part of KEY (org\_id)            |
| segment\_id       | bigint(20)   | Part of UNIQUE KEY (segment\_id) |
| ftp\_tag          | varchar(100) | None                             |
| ftp\_folder       | text         | None                             |
| last\_updated\_on | timestamp    | None                             |

## Table: `workflow_status`


| Column Name       | Data Type    | Index                        |
| ----------------- | ------------ | ---------------------------- |
| id                | bigint(20)   | Part of PRIMARY KEY (id)     |
| org\_id           | bigint(20)   | Part of UNIQUE KEY (org\_id) |
| uuid              | varchar(120) | Part of UNIQUE KEY (uuid)    |
| trigger\_id       | bigint(20)   | None                         |
| workflow\_type    | varchar(255) | None                         |
| status            | varchar(255) | None                         |
| last\_updated\_on | timestamp    | None                         |

## Table: `segment`


| Column Name       | Data Type               | Index                     |
| ----------------- | ----------------------- | ------------------------- |
| id                | bigint(20)              | Part of PRIMARY KEY (id)  |
| org\_id           | int(11)                 | Part of KEY (org\_id)     |
| ou\_id            | bigint(20)              | Part of KEY (ou\_id)      |
| name              | varchar(100)            | Part of UNIQUE KEY (name) |
| description       | text                    | None                      |
| type              | enum('UPLOAD','FILTER') | None                      |
| is\_active        | tinyint(1)              | None                      |
| is\_scd           | tinyint(1)              | None                      |
| created\_by       | bigint(20)              | None                      |
| created\_on       | datetime                | None                      |
| last\_updated\_by | bigint(20)              | None                      |
| last\_updated\_on | timestamp               | None                      |

## Table: `segment_upload_metadata`


| Column Name        | Data Type                                                                 | Index                            |
| ------------------ | ------------------------------------------------------------------------- | -------------------------------- |
| id                 | int(11)                                                                   | Part of UNIQUE KEY (id)          |
| org\_id            | bigint(20)                                                                | Part of PRIMARY KEY (org\_id)    |
| segment\_id        | bigint(20)                                                                | Part of UNIQUE KEY (segment\_id) |
| external\_source   | text                                                                      | None                             |
| upload\_identifier | enum('user\_id','mobile','email','external\_id','customer\_external\_id') | None                             |
| source\_file       | TEXT                                                                      | None                             |
| valid\_on          | datetime                                                                  | None                             |
| last\_updated\_on  | timestamp                                                                 | None                             |

## Table: `segment_filter_metadata`


| Column Name       | Data Type  | Index                            |
| ----------------- | ---------- | -------------------------------- |
| id                | int(11)    | Part of UNIQUE KEY (id)          |
| org\_id           | bigint(20) | Part of PRIMARY KEY (org\_id)    |
| segment\_id       | bigint(20) | Part of UNIQUE KEY (segment\_id) |
| rule              | text       | None                             |
| valid\_on         | datetime   | None                             |
| last\_updated\_on | timestamp  | None                             |

## Table: `segment_job_details`


| Column Name       | Data Type                             | Index                            |
| ----------------- | ------------------------------------- | -------------------------------- |
| id                | int(11)                               | Part of PRIMARY KEY (id)         |
| org\_id           | bigint(20)                            | Part of UNIQUE KEY (org\_id)     |
| segment\_id       | bigint(20)                            | Part of UNIQUE KEY (segment\_id) |
| source\_params    | text                                  | None                             |
| stats\_params     | text                                  | None                             |
| status            | enum('PROCESSING','SUCCESS','FAILED') | None                             |
| last\_updated\_by | bigint(20)                            | None                             |
| last\_updated\_on | timestamp                             | None                             |

## Table: `communications`


| Column Name       | Data Type               | Index                         |
| ----------------- | ----------------------- | ----------------------------- |
| id                | bigint(20)              | Part of PRIMARY KEY (id)      |
| org\_id           | bigint(20)              | Part of PRIMARY KEY (org\_id) |
| segment\_id       | bigint(20)              | None                          |
| job\_id           | bigint(20)              | None                          |
| nsadmin\_id       | bigint(20)              | None                          |
| type              | enum('EMAIL','SMS')     | None                          |
| receiver\_info    | text                    | None                          |
| description       | text                    | None                          |
| status            | enum('SUCCESS','ERROR') | None                          |
| last\_updated\_on | timestamp               | None                          |

## Table: `segment_partitions`


| Column Name | Data Type    | Index                     |
| ----------- | ------------ | ------------------------- |
| id          | bigint(20)   | Part of PRIMARY KEY (id)  |
| org\_id     | varchar(45)  | Part of KEY (org\_id)     |
| segment\_id | bigint(20)   | Part of KEY (segment\_id) |
| name        | varchar(100) | Part of UNIQUE KEY (name) |
| description | text         | None                      |

## Table: `segment_data_location`


| Column Name       | Data Type  | Index                            |
| ----------------- | ---------- | -------------------------------- |
| id                | bigint(20) | Part of PRIMARY KEY (id)         |
| org\_id           | bigint(20) | Part of UNIQUE KEY (org\_id)     |
| segment\_id       | bigint(20) | Part of UNIQUE KEY (segment\_id) |
| job\_id           | bigint(20) | Part of UNIQUE KEY (job\_id)     |
| external\_source  | text       | None                             |
| success\_source   | text       | None                             |
| error\_source     | text       | None                             |
| valid\_on         | datetime   | None                             |
| last\_updated\_on | timestamp  | None                             |
| parent\_id        | bigint(20) | None                             |

## Table: `events`


| Column Name        | Data Type                                                                                     | Index                         |
| ------------------ | --------------------------------------------------------------------------------------------- | ----------------------------- |
| org\_id            | bigint(20)                                                                                    | Part of PRIMARY KEY (org\_id) |
| id                 | bigint(20)                                                                                    | Part of PRIMARY KEY (id)      |
| job\_id            | bigint(20)                                                                                    | None                          |
| type               | enum('VALIDATE\_LOYALTY','VALIDATE\_SEG\_VAL','COMMUNICATION','OLTP\_CACHING','DIM\_TRIGGER') | None                          |
| status             | enum('OPEN','IN\_PROGRESS','SUCCESS','ERROR')                                                 | None                          |
| error\_code        | int(11)                                                                                       | None                          |
| error\_description | text                                                                                          | None                          |
| last\_updated\_on  | timestamp                                                                                     | None                          |

## Table: `job_data`


| Column Name       | Data Type    | Index                         |
| ----------------- | ------------ | ----------------------------- |
| id                | bigint(20)   | Part of PRIMARY KEY (id)      |
| org\_id           | bigint(20)   | Part of PRIMARY KEY (org\_id) |
| job\_id           | bigint(20)   | None                          |
| data\_type        | varchar(255) | None                          |
| params            | text         | None                          |
| last\_updated\_on | timestamp    | None                          |

## Table: `data_formats`


| Column Name        | Data Type | Index                    |
| ------------------ | --------- | ------------------------ |
| id                 | int(11)   | Part of PRIMARY KEY (id) |
| format\_properties | text      | None                     |

## Table: `template_channel_mapping`


| Column Name        | Data Type | Index                                   |
| ------------------ | --------- | --------------------------------------- |
| id                 | int(11)   | Part of PRIMARY KEY (id)                |
| template\_id       | int(11)   | Part of UNIQUE KEY (template\_id)       |
| template\_type\_id | int(11)   | Part of UNIQUE KEY (template\_type\_id) |
| org\_id            | int(11)   | Part of UNIQUE KEY (org\_id)            |
| ref\_id            | int(11)   | Part of UNIQUE KEY (ref\_id)            |
| channel\_id        | int(11)   | Part of UNIQUE KEY (channel\_id)        |
| last\_updated\_by  | int(11)   | None                                    |
| last\_updated\_on  | timestamp | None                                    |

## Table: `org_templates`


| Column Name  | Data Type    | Index                      |
| ------------ | ------------ | -------------------------- |
| id           | int(11)      | Part of PRIMARY KEY (id)   |
| org\_id      | int(11)      | Part of KEY (org\_id)      |
| template\_id | int(11)      | Part of KEY (template\_id) |
| ref\_id      | varchar(100) | Part of KEY (ref\_id)      |
| lang\_id     | int(11)      | None                       |

## Table: `templates`


| Column Name                | Data Type    | Index                            |
| -------------------------- | ------------ | -------------------------------- |
| id                         | int(11)      | Part of PRIMARY KEY (id)         |
| template\_name             | varchar(255) | Part of KEY (template\_name)     |
| template\_type\_id         | int(11)      | Part of KEY (template\_type\_id) |
| scope                      | varchar(255) | Part of KEY (scope)              |
| tag                        | varchar(255) | None                             |
| file\_service\_params      | longtext     | None                             |
| is\_default                | tinyint(1)   | None                             |
| is\_preview\_generated     | tinyint(1)   | None                             |
| is\_email\_client\_enabled | tinyint(1)   | None                             |
| is\_deleted                | tinyint(1)   | None                             |
| last\_updated\_by          | int(11)      | None                             |
| last\_updated\_on          | timestamp    | None                             |
| is\_favourite              | tinyint(1)   | None                             |
| parent\_id                 | int(11)      | None                             |

## Table: `template_types`


| Column Name | Data Type    | Index                    |
| ----------- | ------------ | ------------------------ |
| id          | int(11)      | Part of PRIMARY KEY (id) |
| name        | varchar(50)  | None                     |
| description | varchar(255) | None                     |

## Table: `edm_users`


| Column Name         | Data Type   | Index                       |
| ------------------- | ----------- | --------------------------- |
| id                  | int(11)     | Part of PRIMARY KEY (id)    |
| org\_id             | bigint(20)  | Part of KEY (org\_id)       |
| edm\_user\_id       | varchar(50) | Part of KEY (edm\_user\_id) |
| is\_active          | tinyint(1)  | None                        |
| user\_level\_access | tinyint(1)  | None                        |
| modified            | timestamp   | None                        |

## Table: `survey_fields_data`


| Column Name       | Data Type    | Index                           |
| ----------------- | ------------ | ------------------------------- |
| id                | int(11)      | Part of PRIMARY KEY (id)        |
| org\_id           | int(11)      | Part of PRIMARY KEY (org\_id)   |
| survey\_id        | int(11)      | None                            |
| form\_id          | int(11)      | None                            |
| survey\_field\_id | int(11)      | Part of KEY (survey\_field\_id) |
| user\_id          | int(11)      | Part of KEY (user\_id)          |
| token\_id         | int(11)      | None                            |
| field\_value      | longtext     | None                            |
| last\_updated\_on | timestamp    | None                            |
| entityType        | varchar(100) | None                            |
| entityId          | int(11)      | None                            |
| responseChannel   | varchar(100) | None                            |

## Table: `supported_themes`


| Column Name       | Data Type   | Index                    |
| ----------------- | ----------- | ------------------------ |
| id                | int(11)     | Part of PRIMARY KEY (id) |
| theme\_name       | varchar(15) | None                     |
| last\_updated\_on | timestamp   | None                     |

## Table: `org_cc_user_mapping`


| Column Name        | Data Type    | Index                               |
| ------------------ | ------------ | ----------------------------------- |
| id                 | int(11)      | Part of PRIMARY KEY (id)            |
| org\_id            | int(11)      | Part of KEY (org\_id)               |
| cc\_user\_name     | varchar(50)  | Part of UNIQUE KEY (cc\_user\_name) |
| cc\_password       | varchar(250) | None                                |
| added\_by          | int(11)      | None                                |
| is\_active         | tinyint(1)   | None                                |
| auto\_update\_time | timestamp    | None                                |

## Table: `survey_details`


| Column Name            | Data Type    | Index                           |
| ---------------------- | ------------ | ------------------------------- |
| id                     | int(11)      | Part of PRIMARY KEY (id)        |
| org\_id                | int(11)      | Part of PRIMARY KEY (org\_id)   |
| campaign\_id           | int(11)      | None                            |
| number\_of\_forms      | int(11)      | None                            |
| number\_of\_responses  | int(11)      | None                            |
| number\_of\_promotors  | int(11)      | None                            |
| number\_of\_detractors | int(11)      | None                            |
| survey\_key            | varchar(50)  | None                            |
| survey\_type           | varchar(20)  | None                            |
| brand\_logo            | varchar(255) | None                            |
| brand\_website         | varchar(255) | None                            |
| last\_updated\_on      | timestamp    | None                            |
| source                 | varchar(50)  | None                            |
| title                  | varchar(100) | None                            |
| external\_ref\_id      | varchar(100) | Part of KEY (external\_ref\_id) |

## Table: `org_cc_form_mapping`


| Column Name        | Data Type   | Index                     |
| ------------------ | ----------- | ------------------------- |
| id                 | int(11)     | Part of PRIMARY KEY (id)  |
| org\_id            | int(11)     | Part of KEY (org\_id)     |
| account\_id        | int(11)     | Part of KEY (account\_id) |
| survey\_form\_id   | int(11)     | None                      |
| survey\_id         | int(11)     | None                      |
| location           | varchar(50) | None                      |
| added\_by          | int(11)     | None                      |
| is\_active         | tinyint(1)  | None                      |
| auto\_update\_time | timestamp   | None                      |

## Table: `survey_tokens`


| Column Name           | Data Type    | Index                          |
| --------------------- | ------------ | ------------------------------ |
| id                    | int(11)      | Part of PRIMARY KEY (id)       |
| org\_id               | int(11)      | Part of PRIMARY KEY (org\_id)  |
| user\_id              | int(11)      | None                           |
| survey\_id            | int(11)      | None                           |
| survey\_form\_id      | int(11)      | Part of KEY (survey\_form\_id) |
| token\_code           | varchar(100) | None                           |
| is\_used              | tinyint(1)   | None                           |
| created\_on           | date         | None                           |
| issued\_type          | varchar(20)  | None                           |
| bill\_id              | int(11)      | None                           |
| issued\_by            | int(11)      | None                           |
| last\_updated\_on     | timestamp    | None                           |
| communication\_id     | int(11)      | None                           |
| message\_source\_type | varchar(100) | None                           |

## Table: `survey_fields`


| Column Name        | Data Type    | Index                     |
| ------------------ | ------------ | ------------------------- |
| id                 | int(11)      | Part of PRIMARY KEY (id)  |
| org\_id            | int(11)      | Part of KEY (org\_id)     |
| form\_id           | int(11)      | Part of KEY (form\_id)    |
| survey\_id         | int(11)      | Part of KEY (survey\_id)  |
| parent\_id         | int(11)      | None                      |
| is\_active         | tinyint(1)   | None                      |
| is\_nps\_question  | tinyint(1)   | None                      |
| field\_name        | varchar(100) | Part of KEY (field\_name) |
| field\_type        | varchar(100) | None                      |
| field\_options     | mediumtext   | None                      |
| field\_label       | mediumtext   | None                      |
| default\_value     | varchar(100) | None                      |
| field\_placeholder | varchar(255) | None                      |
| params             | longtext     | None                      |
| is\_token\_field   | tinyint(1)   | None                      |
| field\_help\_text  | mediumtext   | None                      |
| is\_compulsory     | tinyint(1)   | None                      |
| order\_number      | int(11)      | None                      |
| last\_updated\_on  | timestamp    | None                      |
| tag                | varchar(100) | None                      |

## Table: `customer_satisfaction`


| Column Name        | Data Type | Index                         |
| ------------------ | --------- | ----------------------------- |
| id                 | int(11)   | Part of PRIMARY KEY (id)      |
| org\_id            | int(11)   | Part of UNIQUE KEY (org\_id)  |
| user\_id           | int(11)   | Part of UNIQUE KEY (user\_id) |
| survey\_form\_id   | int(11)   | None                          |
| first\_nps\_score  | int(11)   | None                          |
| recent\_nps\_score | int(11)   | None                          |
| mean\_nps\_score   | int(11)   | None                          |
| last\_updated\_on  | timestamp | None                          |

## Table: `survey_forms`


| Column Name            | Data Type    | Index                                   |
| ---------------------- | ------------ | --------------------------------------- |
| id                     | int(11)      | Part of PRIMARY KEY (id)                |
| org\_id                | int(11)      | Part of PRIMARY KEY (org\_id)           |
| survey\_id             | int(11)      | Part of UNIQUE KEY (survey\_id)         |
| survey\_form\_code     | int(10)      | Part of UNIQUE KEY (survey\_form\_code) |
| form\_name             | varchar(100) | None                                    |
| form\_title            | varchar(255) | None                                    |
| form\_theme\_id        | varchar(255) | None                                    |
| is\_default\_form      | tinyint(1)   | None                                    |
| is\_published          | tinyint(1)   | None                                    |
| fs\_link               | longtext     | None                                    |
| number\_of\_responses  | int(11)      | None                                    |
| number\_of\_promotors  | int(11)      | None                                    |
| number\_of\_detractors | int(11)      | None                                    |
| confirmation\_message  | mediumtext   | None                                    |
| brand\_logo            | varchar(255) | None                                    |
| brand\_website         | varchar(255) | None                                    |
| last\_updated\_on      | timestamp    | None                                    |

## Table: `receiver_groups`


| Column Name        | Data Type                     | Index                                |
| ------------------ | ----------------------------- | ------------------------------------ |
| id                 | int(11)                       | Part of PRIMARY KEY (id)             |
| org\_id            | int(11)                       | Part of UNIQUE KEY (org\_id)         |
| module\_id         | int(11)                       | Part of UNIQUE KEY (module\_id)      |
| context\_id        | int(11)                       | Part of UNIQUE KEY (context\_id)     |
| channel            | enum('SMS','EMAIL')           | Part of UNIQUE KEY (channel)         |
| recipient\_type    | enum('CAP\_POC','BRAND\_POC') | Part of UNIQUE KEY (recipient\_type) |
| is\_active         | tinyint(1)                    | None                                 |
| created\_by        | int(11)                       | None                                 |
| created\_time      | datetime                      | None                                 |
| updated\_by        | int(11)                       | None                                 |
| auto\_update\_time | timestamp                     | None                                 |

## Table: `notifications`


| Column Name         | Data Type          | Index                    |
| ------------------- | ------------------ | ------------------------ |
| id                  | bigint(20)         | Part of PRIMARY KEY (id) |
| org\_id             | int(11)            | Part of KEY (org\_id)    |
| entity\_id          | bigint(20)         | None                     |
| message             | mediumtext         | None                     |
| cause               | mediumtext         | None                     |
| notification\_level | enum('HIGH','LOW') | None                     |
| ref\_id             | bigint(20)         | None                     |
| added\_on           | datetime           | Part of KEY (added\_on)  |

## Table: `notification_sent_logs`


| Column Name         | Data Type    | Index                    |
| ------------------- | ------------ | ------------------------ |
| id                  | int(11)      | Part of PRIMARY KEY (id) |
| org\_id             | int(11)      | Part of KEY (org\_id)    |
| receiver\_group\_id | int(11)      | None                     |
| user\_id            | int(11)      | Part of KEY (user\_id)   |
| action\_ids         | varchar(250) | None                     |
| ref\_id             | int(11)      | Part of KEY (ref\_id)    |
| nsadmin\_id         | bigint(20)   | None                     |
| sent\_date          | datetime     | Part of KEY (sent\_date) |
| auto\_update\_time  | timestamp    | None                     |

## Table: `trackable_entities`


| Column Name         | Data Type                                                             | Index                                    |
| ------------------- | --------------------------------------------------------------------- | ---------------------------------------- |
| id                  | bigint(20)                                                            | Part of PRIMARY KEY (id)                 |
| tracked\_column\_id | bigint(20)                                                            | Part of UNIQUE KEY (tracked\_column\_id) |
| entity\_type        | enum('ZONE','STORE','ORG','CONF\_KEY','TILL','CONCEPT','ADMIN\_USER') | Part of UNIQUE KEY (entity\_type)        |
| updated\_on         | datetime                                                              | None                                     |
| updated\_by         | bigint(20)                                                            | None                                     |

## Table: `tracked_column`


| Column Name | Data Type   | Index                     |
| ----------- | ----------- | ------------------------- |
| id          | bigint(20)  | Part of PRIMARY KEY (id)  |
| name        | varchar(50) | Part of UNIQUE KEY (name) |
| updated\_on | datetime    | None                      |
| updated\_by | bigint(20)  | None                      |

## Table: `hd_metrics`


| Column Name | Data Type   | Index                    |
| ----------- | ----------- | ------------------------ |
| id          | bigint(20)  | Part of PRIMARY KEY (id) |
| name        | varchar(20) | None                     |
| scope       | varchar(20) | None                     |
| value\_type | varchar(20) | None                     |
| description | mediumtext  | None                     |
| added\_on   | datetime    | None                     |

## Table: `property_actions`


| Column Name  | Data Type    | Index                    |
| ------------ | ------------ | ------------------------ |
| id           | bigint(20)   | Part of PRIMARY KEY (id) |
| property\_id | bigint(20)   | None                     |
| action\_id   | int(20)      | None                     |
| args         | varchar(100) | None                     |

## Table: `entity_properties`


| Column Name  | Data Type | Index                    |
| ------------ | --------- | ------------------------ |
| id           | int(20)   | Part of PRIMARY KEY (id) |
| entity\_id   | int(20)   | None                     |
| property\_id | int(20)   | None                     |
| track        | int(1)    | None                     |

## Table: `receivers`


| Column Name         | Data Type  | Index                                    |
| ------------------- | ---------- | ---------------------------------------- |
| id                  | int(11)    | Part of PRIMARY KEY (id)                 |
| receiver\_group\_id | int(11)    | Part of UNIQUE KEY (receiver\_group\_id) |
| user\_id            | int(11)    | Part of UNIQUE KEY (user\_id)            |
| is\_active          | tinyint(1) | None                                     |
| added\_on           | datetime   | None                                     |
| auto\_update\_time  | timestamp  | None                                     |

## Table: `rules`


| Column Name | Data Type  | Index                    |
| ----------- | ---------- | ------------------------ |
| id          | bigint(20) | Part of PRIMARY KEY (id) |
| action\_id  | bigint(20) | None                     |
| rule        | mediumtext | None                     |

## Table: `actions`


| Column Name        | Data Type                | Index                    |
| ------------------ | ------------------------ | ------------------------ |
| id                 | int(20)                  | Part of PRIMARY KEY (id) |
| name               | varchar(50)              | None                     |
| type               | enum('column','concept') | None                     |
| parent\_action\_id | int(20)                  | None                     |

## Table: `data_quality`


| Column Name    | Data Type                                                  | Index                        |
| -------------- | ---------------------------------------------------------- | ---------------------------- |
| id             | int(20)                                                    | Part of PRIMARY KEY (id)     |
| org\_id        | int(11)                                                    | Part of KEY (org\_id)        |
| store\_id      | int(20)                                                    | None                         |
| type           | enum('LOGGED\_IN','SIGNUP','TRANS\_SUMMARY','TRANS\_DATA') | Part of KEY (type)           |
| json\_values   | mediumtext                                                 | None                         |
| calculated\_on | date                                                       | Part of KEY (calculated\_on) |

## Table: `hd_entities`


| Column Name  | Data Type   | Index                         |
| ------------ | ----------- | ----------------------------- |
| id           | int(20)     | Part of KEY (id)              |
| org\_id      | int(11)     | Part of PRIMARY KEY (org\_id) |
| entity\_type | varchar(20) | None                          |
| entity\_id   | varchar(50) | None                          |
| added\_on    | datetime    | Part of KEY (added\_on)       |

## Table: `hd_metric_data`


| Column Name      | Data Type  | Index                    |
| ---------------- | ---------- | ------------------------ |
| id               | int(20)    | Part of PRIMARY KEY (id) |
| hd\_entities\_id | int(20)    | None                     |
| metric\_id       | int(20)    | Part of KEY (metric\_id) |
| value            | mediumtext | None                     |
| window           | int(10)    | None                     |
| added\_on        | datetime   | None                     |

## Table: `properties`


| Column Name | Data Type                | Index                    |
| ----------- | ------------------------ | ------------------------ |
| id          | int(20)                  | Part of PRIMARY KEY (id) |
| name        | varchar(100)             | None                     |
| type        | enum('column','concept') | None                     |

## Table: `tracked_values`


| Column Name           | Data Type    | Index |
| --------------------- | ------------ | ----- |
| trackable\_entity\_id | bigint(20)   | None  |
| value                 | varchar(100) | None  |
| org\_id               | int(11)      | None  |
| entity\_ref\_id       | bigint(20)   | None  |
| updated\_on           | datetime     | None  |
| updated\_by           | bigint(20)   | None  |
| is\_valid             | int(1)       | None  |

## Table: `notification_triggers`


| Column Name    | Data Type    | Index                               |
| -------------- | ------------ | ----------------------------------- |
| id             | int(11)      | Part of PRIMARY KEY (id)            |
| org\_id        | int(11)      | Part of UNIQUE KEY (org\_id)        |
| event\_name    | varchar(255) | Part of UNIQUE KEY (event\_name)    |
| notifier\_name | varchar(255) | Part of UNIQUE KEY (notifier\_name) |
| params         | mediumtext   | None                                |
| users\_json    | mediumtext   | None                                |
| type           | varchar(10)  | Part of UNIQUE KEY (type)           |
| is\_active     | tinyint(1)   | None                                |
| updated\_by    | int(11)      | None                                |
| updated\_on    | timestamp    | None                                |

## Table: `entities`


| Column Name       | Data Type   | Index            |
| ----------------- | ----------- | ---------------- |
| id                | bigint(20)  | Part of KEY (id) |
| entity            | varchar(20) | None             |
| is\_settings      | tinyint(4)  | None             |
| valid\_till\_days | tinyint(4)  | None             |

## Table: `customer_requests`


| Column Name        | Data Type                                                                                                         | Index                            |
| ------------------ | ----------------------------------------------------------------------------------------------------------------- | -------------------------------- |
| id                 | bigint(11)                                                                                                        | Part of PRIMARY KEY (id)         |
| org\_id            | bigint(11)                                                                                                        | Part of KEY (org\_id)            |
| type               | enum('DELETE')                                                                                                    | None                             |
| request\_id        | bigint(11)                                                                                                        | Part of KEY (request\_id)        |
| user\_id           | bigint(11)                                                                                                        | Part of KEY (user\_id)           |
| requested\_on      | timestamp                                                                                                         | None                             |
| scheduled\_on      | timestamp                                                                                                         | Part of KEY (scheduled\_on)      |
| status             | enum('PENDING\_DELETION','PROCESSING','PARTIAL\_DELETED','DELETED','FAILED','CANCELLED','TIMED\_OUT','DUPLICATE') | None                             |
| comments           | varchar(150)                                                                                                      | None                             |
| auto\_update\_time | timestamp                                                                                                         | Part of KEY (auto\_update\_time) |

## Table: `merge_requests`


| Column Name        | Data Type                                                                         | Index                            |
| ------------------ | --------------------------------------------------------------------------------- | -------------------------------- |
| id                 | int(11)                                                                           | Part of PRIMARY KEY (id)         |
| ref\_id            | int(11)                                                                           | None                             |
| session\_id        | varchar(100)                                                                      | None                             |
| org\_id            | int(11)                                                                           | Part of KEY (org\_id)            |
| victim\_user\_id   | int(11)                                                                           | Part of KEY (victim\_user\_id)   |
| survivor\_user\_id | int(11)                                                                           | Part of KEY (survivor\_user\_id) |
| requested\_on      | timestamp                                                                         | None                             |
| status             | enum('PROCESSING','PARTIAL\_SUCCESS','SUCCESS','FAILED','TIMED\_OUT','DUPLICATE') | None                             |
| auto\_update\_time | timestamp                                                                         | None                             |

## Table: `rw_goodwill_requests`


| Column Name           | Data Type                      | Index                         |
| --------------------- | ------------------------------ | ----------------------------- |
| id                    | int(11)                        | Part of PRIMARY KEY (id)      |
| reference\_id         | varchar(50)                    | None                          |
| org\_id               | int(11)                        | Part of PRIMARY KEY (org\_id) |
| type                  | enum('COUPON','POINTS','TIER') | None                          |
| earning\_entity\_type | enum('USERGROUP2','CUSTOMER')  | None                          |
| earning\_entity\_id   | int(11)                        | None                          |
| reason                | varchar(50)                    | None                          |
| value                 | varchar(50)                    | None                          |
| program\_id           | int(11)                        | None                          |
| created\_by           | int(11)                        | None                          |
| created\_on           | timestamp                      | None                          |
| auto\_update\_time    | timestamp                      | None                          |

## Table: `transaction_add_requests`


| Column Name                | Data Type                 | Index                            |
| -------------------------- | ------------------------- | -------------------------------- |
| id                         | int(11)                   | Part of PRIMARY KEY (id)         |
| org\_id                    | bigint(20)                | Part of KEY (org\_id)            |
| request\_id                | bigint(20)                | Part of KEY (request\_id)        |
| base\_type                 | enum('REGULAR\_TXN\_ADD') | Part of KEY (base\_type)         |
| user\_id                   | bigint(20)                | Part of KEY (user\_id)           |
| bill\_number               | varchar(50)               | Part of KEY (bill\_number)       |
| transaction\_id            | bigint(20)                | None                             |
| transaction\_json\_payload | mediumtext                | None                             |
| comments                   | varchar(150)              | None                             |
| auto\_update\_time         | timestamp                 | Part of KEY (auto\_update\_time) |

## Table: `customer_delete_handlers`


| Column Name | Data Type    | Index                        |
| ----------- | ------------ | ---------------------------- |
| id          | tinyint(3)   | Part of PRIMARY KEY (id)     |
| priority    | tinyint(3)   | None                         |
| handler     | varchar(100) | Part of UNIQUE KEY (handler) |

## Table: `audit_logs`


| Column Name        | Data Type                          | Index                     |
| ------------------ | ---------------------------------- | ------------------------- |
| id                 | int(11)                            | Part of PRIMARY KEY (id)  |
| action\_id         | int(11)                            | None                      |
| status             | enum('PENDING','SUCCESS','FAILED') | None                      |
| org\_id            | int(11)                            | Part of KEY (org\_id)     |
| user\_id           | int(11)                            | Part of KEY (user\_id)    |
| assoc\_id          | int(11)                            | Part of KEY (assoc\_id)   |
| api\_http\_method  | enum('GET','POST')                 | None                      |
| api\_resource      | varchar(50)                        | None                      |
| api\_method        | varchar(50)                        | None                      |
| api\_status        | int(11)                            | None                      |
| api\_item\_status  | int(11)                            | None                      |
| api\_request\_id   | varchar(50)                        | None                      |
| apache\_thread\_id | varchar(50)                        | None                      |
| created\_by        | int(11)                            | Part of KEY (created\_by) |
| created\_on        | timestamp                          | None                      |
| source\_ip         | varchar(20)                        | None                      |
| useragent          | varchar(100)                       | None                      |
| auto\_update\_time | timestamp                          | None                      |

## Table: `request_setting_values`


| Column Name | Data Type  | Index                        |
| ----------- | ---------- | ---------------------------- |
| id          | int(11)    | Part of PRIMARY KEY (id)     |
| key\_id     | int(11)    | Part of UNIQUE KEY (key\_id) |
| org\_id     | int(11)    | Part of UNIQUE KEY (org\_id) |
| value       | mediumtext | None                         |
| created\_on | timestamp  | None                         |
| created\_by | int(11)    | None                         |
| updated\_on | timestamp  | None                         |
| updated\_by | int(11)    | None                         |

## Table: `merge_process_log`


| Column Name             | Data Type                                                            | Index                     |
| ----------------------- | -------------------------------------------------------------------- | ------------------------- |
| id                      | int(11)                                                              | Part of PRIMARY KEY (id)  |
| org\_id                 | int(11)                                                              | Part of KEY (org\_id)     |
| ref\_id                 | int(11)                                                              | None                      |
| request\_id             | int(11)                                                              | Part of KEY (request\_id) |
| handler\_id             | tinyint(3)                                                           | None                      |
| handler\_name           | varchar(100)                                                         | None                      |
| status                  | enum('START','PROCESSING','ROLLEDBACK','SUCCESS','FAILED','SKIPPED') | None                      |
| error\_details          | longtext                                                             | None                      |
| filehandle              | varchar(100)                                                         | None                      |
| executed\_time          | timestamp                                                            | None                      |
| time\_taken\_in\_millis | int(11)                                                              | None                      |
| is\_file\_valid         | tinyint(2)                                                           | None                      |

## Table: `retro_requests`


| Column Name        | Data Type     | Index                         |
| ------------------ | ------------- | ----------------------------- |
| id                 | int(11)       | Part of PRIMARY KEY (id)      |
| ref\_id            | int(11)       | Part of KEY (ref\_id)         |
| org\_id            | bigint(20)    | Part of KEY (org\_id)         |
| base\_type         | enum('RETRO') | None                          |
| user\_id           | bigint(20)    | None                          |
| transaction\_id    | bigint(20)    | Part of KEY (transaction\_id) |
| loyalty\_log\_id   | bigint(20)    | None                          |
| reason             | varchar(50)   | None                          |
| comments           | varchar(150)  | None                          |
| auto\_update\_time | timestamp     | None                          |

## Table: `merge_request_handlers`


| Column Name | Data Type            | Index                        |
| ----------- | -------------------- | ---------------------------- |
| id          | tinyint(3)           | Part of PRIMARY KEY (id)     |
| priority    | tinyint(3)           | None                         |
| handler     | varchar(100)         | Part of UNIQUE KEY (handler) |
| type        | enum('DB','SERVICE') | None                         |

## Table: `requests`


| Column Name           | Data Type                                                                                                               | Index                            |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------- | -------------------------------- |
| id                    | int(11)                                                                                                                 | Part of PRIMARY KEY (id)         |
| status                | enum('PENDING','APPROVED','REJECTED','CANCELLED','CUSTOM','SUCCESS','FAILURE','REPLAYABLE\_FAILURE','REPLAY\_MAX\_OUT') | Part of KEY (status)             |
| user\_id              | int(11)                                                                                                                 | Part of KEY (user\_id)           |
| org\_id               | int(11)                                                                                                                 | Part of KEY (org\_id)            |
| created\_by           | int(11)                                                                                                                 | None                             |
| created\_on           | timestamp                                                                                                               | Part of KEY (created\_on)        |
| updated\_by           | int(11)                                                                                                                 | None                             |
| updated\_on           | timestamp                                                                                                               | None                             |
| type                  | enum('CHANGE\_IDENTIFIER','GOODWILL','TRANSACTION\_UPDATE','TRANSACTION','CUSTOMER')                                    | Part of KEY (type)               |
| params                | mediumtext                                                                                                              | None                             |
| is\_one\_step\_change | tinyint(1)                                                                                                              | None                             |
| entity\_type          | enum('CUSTOMER','USER\_GROUP\_2')                                                                                       | None                             |
| auto\_update\_time    | timestamp                                                                                                               | Part of KEY (auto\_update\_time) |

## Table: `customer_delete_process_log`


| Column Name             | Data Type                                                                        | Index                      |
| ----------------------- | -------------------------------------------------------------------------------- | -------------------------- |
| id                      | bigint(20)                                                                       | Part of PRIMARY KEY (id)   |
| org\_id                 | bigint(20)                                                                       | Part of KEY (org\_id)      |
| ref\_id                 | bigint(20)                                                                       | None                       |
| request\_id             | bigint(20)                                                                       | Part of KEY (request\_id)  |
| user\_id                | bigint(20)                                                                       | Part of KEY (user\_id)     |
| handler\_id             | int(11)                                                                          | None                       |
| handler\_name           | varchar(100)                                                                     | None                       |
| status                  | enum('START','PROCESSING','ROLLEDBACK','PARTIAL\_ROLLEDBACK','SUCCESS','FAILED') | None                       |
| error\_details          | longtext                                                                         | None                       |
| time\_taken\_in\_millis | bigint(20)                                                                       | None                       |
| executed\_on            | timestamp                                                                        | Part of KEY (executed\_on) |

## Table: `goodwill_requests`


| Column Name        | Data Type                      | Index                            |
| ------------------ | ------------------------------ | -------------------------------- |
| id                 | int(11)                        | Part of PRIMARY KEY (id)         |
| request\_id        | int(11)                        | Part of UNIQUE KEY (request\_id) |
| org\_id            | int(11)                        | Part of UNIQUE KEY (org\_id)     |
| type               | enum('COUPON','POINTS','TIER') | Part of KEY (type)               |
| status             | varchar(20)                    | None                             |
| reason             | varchar(50)                    | None                             |
| comments           | mediumtext                     | None                             |
| assoc\_id          | int(11)                        | Part of KEY (assoc\_id)          |
| approved\_value    | varchar(50)                    | None                             |
| updated\_comments  | varchar(150)                   | None                             |
| program\_id        | int(11)                        | None                             |
| auto\_update\_time | timestamp                      | Part of KEY (auto\_update\_time) |

## Table: `retro_status_changelog`


| Column Name        | Data Type                                      | Index                            |
| ------------------ | ---------------------------------------------- | -------------------------------- |
| id                 | int(11)                                        | Part of PRIMARY KEY (id)         |
| retro\_request\_id | int(11)                                        | Part of KEY (retro\_request\_id) |
| status             | enum('PENDING','APPROVED','REJECTED','CUSTOM') | None                             |
| reason             | varchar(50)                                    | None                             |
| comments           | varchar(150)                                   | None                             |
| updated\_by        | int(11)                                        | None                             |
| updated\_on        | timestamp                                      | None                             |

## Table: `auditable_actions`


| Column Name | Data Type            | Index                    |
| ----------- | -------------------- | ------------------------ |
| id          | int(11)              | Part of PRIMARY KEY (id) |
| action      | varchar(50)          | Part of KEY (action)     |
| operation   | enum('READ','WRITE') | None                     |
| type        | varchar(50)          | None                     |

## Table: `change_identifier_requests`


| Column Name         | Data Type                                                                 | Index                            |
| ------------------- | ------------------------------------------------------------------------- | -------------------------------- |
| id                  | int(11)                                                                   | Part of PRIMARY KEY (id)         |
| request\_id         | int(11)                                                                   | Part of KEY (request\_id)        |
| org\_id             | int(11)                                                                   | Part of KEY (org\_id)            |
| old\_value          | varchar(100)                                                              | Part of KEY (old\_value)         |
| new\_value          | varchar(100)                                                              | Part of KEY (new\_value)         |
| entity              | varchar(100)                                                              | None                             |
| sec\_user\_id       | int(11)                                                                   | None                             |
| auto\_approve\_type | enum('QUERY\_PARAM','CONFIG','DISABLED','QUERY\_DISABLED')                | None                             |
| type                | enum('EMAIL','MOBILE','EXTERNAL\_ID','MERGE','ADDRESS','MOBILE\_REALLOC') | Part of KEY (type)               |
| status              | enum('PROCESSING','SUCCESS','FAILED','REJECTED')                          | None                             |
| updated\_comments   | varchar(250)                                                              | None                             |
| auto\_update\_time  | timestamp                                                                 | Part of KEY (auto\_update\_time) |

## Table: `request_setting_changelog`


| Column Name | Data Type  | Index                         |
| ----------- | ---------- | ----------------------------- |
| id          | int(11)    | Part of PRIMARY KEY (id)      |
| key\_id     | int(11)    | None                          |
| org\_id     | int(11)    | Part of PRIMARY KEY (org\_id) |
| old\_value  | mediumtext | None                          |
| new\_value  | mediumtext | None                          |
| updated\_by | int(11)    | None                          |
| updated\_on | timestamp  | None                          |

## Table: `request_settings`


| Column Name    | Data Type                                                            | Index                     |
| -------------- | -------------------------------------------------------------------- | ------------------------- |
| id             | int(11)                                                              | Part of PRIMARY KEY (id)  |
| type           | enum('CHANGE\_IDENTIFIER','GOODWILL','TRANSACTION\_UPDATE','OTHERS') | None                      |
| base\_type     | varchar(50)                                                          | None                      |
| name           | varchar(150)                                                         | Part of UNIQUE KEY (name) |
| default\_value | mediumtext                                                           | None                      |

## Table: `inventory_item_attributes`


| Column Name                   | Data Type                               | Index                                 |
| ----------------------------- | --------------------------------------- | ------------------------------------- |
| id                            | bigint(20)                              | Part of PRIMARY KEY (id)              |
| org\_id                       | bigint(20)                              | Part of KEY (org\_id)                 |
| ou\_id                        | bigint(20)                              | Part of UNIQUE KEY (ou\_id)           |
| name                          | varchar(30)                             | Part of KEY (name)                    |
| label                         | varchar(50)                             | None                                  |
| is\_enum                      | tinyint(1)                              | None                                  |
| extraction\_rule\_type        | enum('UPLOAD','POS','REGEX','USERDEF')  | None                                  |
| extraction\_rule\_data        | longtext                                | None                                  |
| type                          | enum('String','Int','Boolean','Double') | None                                  |
| is\_soft\_enum                | int(1)                                  | None                                  |
| use\_in\_dump                 | int(1)                                  | None                                  |
| default\_attribute\_value\_id | int(11)                                 | None                                  |
| added\_by                     | bigint(20)                              | None                                  |
| added\_on                     | timestamp                               | None                                  |
| auto\_update\_timestamp       | timestamp                               | Part of KEY (auto\_update\_timestamp) |

## Table: `org_colors`


| Column Name             | Data Type   | Index                                 |
| ----------------------- | ----------- | ------------------------------------- |
| id                      | int(11)     | Part of PRIMARY KEY (id)              |
| org\_id                 | int(11)     | Part of KEY (org\_id)                 |
| ou\_id                  | bigint(20)  | Part of UNIQUE KEY (ou\_id)           |
| hexpallette             | varchar(50) | Part of KEY (hexpallette)             |
| pallette                | int(11)     | Part of KEY (pallette)                |
| is\_active              | tinyint(1)  | None                                  |
| name                    | varchar(32) | None                                  |
| auto\_update\_timestamp | timestamp   | Part of KEY (auto\_update\_timestamp) |
| created\_on             | timestamp   | None                                  |

## Table: `inventory_masters`


| Column Name       | Data Type    | Index                         |
| ----------------- | ------------ | ----------------------------- |
| id                | bigint(20)   | Part of PRIMARY KEY (id)      |
| org\_id           | bigint(20)   | Part of KEY (org\_id)         |
| ou\_id            | bigint(20)   | Part of UNIQUE KEY (ou\_id)   |
| item\_sku         | varchar(100) | Part of KEY (item\_sku)       |
| item\_ean         | varchar(100) | Part of KEY (item\_ean)       |
| price             | float        | None                          |
| description       | mediumtext   | None                          |
| long\_description | mediumtext   | None                          |
| added\_on         | timestamp    | Part of KEY (added\_on)       |
| img\_url          | varchar(255) | None                          |
| is\_valid         | tinyint(1)   | None                          |
| brand\_id         | int(11)      | Part of KEY (brand\_id)       |
| size\_id          | int(11)      | Part of KEY (size\_id)        |
| color\_pallette   | int(11)      | Part of KEY (color\_pallette) |
| style\_id         | int(11)      | Part of KEY (style\_id)       |
| category\_id      | int(11)      | Part of KEY (category\_id)    |
| base\_sku\_id     | int(11)      | None                          |

## Table: `categories`


| Column Name             | Data Type   | Index                                 |
| ----------------------- | ----------- | ------------------------------------- |
| id                      | int(11)     | Part of PRIMARY KEY (id)              |
| org\_id                 | bigint(20)  | Part of KEY (org\_id)                 |
| ou\_id                  | bigint(20)  | Part of UNIQUE KEY (ou\_id)           |
| code                    | varchar(50) | Part of KEY (code)                    |
| name                    | varchar(50) | None                                  |
| description             | mediumtext  | None                                  |
| parent\_id              | int(11)     | Part of KEY (parent\_id)              |
| added\_by               | bigint(20)  | None                                  |
| added\_on               | timestamp   | None                                  |
| is\_valid               | tinyint(1)  | None                                  |
| auto\_update\_timestamp | timestamp   | Part of KEY (auto\_update\_timestamp) |

## Table: `sizes`


| Column Name             | Data Type    | Index                    |
| ----------------------- | ------------ | ------------------------ |
| id                      | int(11)      | Part of PRIMARY KEY (id) |
| org\_id                 | bigint(20)   | Part of KEY (org\_id)    |
| code                    | varchar(50)  | Part of KEY (code)       |
| name                    | varchar(100) | None                     |
| meta\_size\_id          | int(11)      | None                     |
| added\_by               | bigint(20)   | None                     |
| added\_on               | timestamp    | None                     |
| is\_valid               | tinyint(1)   | None                     |
| auto\_update\_timestamp | timestamp    | None                     |

## Table: `inventory_returnable`


| Column Name        | Data Type  | Index                       |
| ------------------ | ---------- | --------------------------- |
| id                 | bigint(20) | Part of PRIMARY KEY (id)    |
| org\_id            | bigint(20) | Part of KEY (org\_id)       |
| ou\_id             | bigint(20) | Part of UNIQUE KEY (ou\_id) |
| item\_id           | bigint(20) | Part of KEY (item\_id)      |
| returnable         | tinyint(1) | None                        |
| returnable\_days   | int(11)    | None                        |
| auto\_update\_time | timestamp  | None                        |

## Table: `inventory_items`


| Column Name             | Data Type    | Index                                 |
| ----------------------- | ------------ | ------------------------------------- |
| id                      | bigint(20)   | Part of PRIMARY KEY (id)              |
| org\_id                 | bigint(20)   | Part of KEY (org\_id)                 |
| ou\_id                  | bigint(20)   | None                                  |
| item\_id                | bigint(20)   | Part of UNIQUE KEY (item\_id)         |
| attribute\_id           | bigint(20)   | Part of KEY (attribute\_id)           |
| attribute\_value\_id    | bigint(20)   | Part of KEY (attribute\_value\_id)    |
| value                   | varchar(255) | Part of KEY (value)                   |
| auto\_update\_timestamp | timestamp    | Part of KEY (auto\_update\_timestamp) |

## Table: `brands`


| Column Name             | Data Type    | Index                                 |
| ----------------------- | ------------ | ------------------------------------- |
| id                      | int(11)      | Part of PRIMARY KEY (id)              |
| org\_id                 | bigint(20)   | Part of KEY (org\_id)                 |
| ou\_id                  | bigint(20)   | Part of UNIQUE KEY (ou\_id)           |
| code                    | varchar(50)  | Part of KEY (code)                    |
| name                    | varchar(100) | None                                  |
| description             | mediumtext   | None                                  |
| parent\_id              | int(11)      | None                                  |
| added\_by               | bigint(20)   | None                                  |
| added\_on               | timestamp    | None                                  |
| is\_valid               | tinyint(1)   | None                                  |
| auto\_update\_timestamp | timestamp    | Part of KEY (auto\_update\_timestamp) |

## Table: `colors`


| Column Name             | Data Type   | Index                         |
| ----------------------- | ----------- | ----------------------------- |
| id                      | int(11)     | Part of PRIMARY KEY (id)      |
| pallette                | int(11)     | Part of UNIQUE KEY (pallette) |
| name                    | varchar(32) | None                          |
| auto\_update\_timestamp | timestamp   | None                          |

## Table: `meta_sizes`


| Column Name             | Data Type    | Index                             |
| ----------------------- | ------------ | --------------------------------- |
| id                      | int(11)      | Part of PRIMARY KEY (id)          |
| code                    | varchar(50)  | Part of UNIQUE KEY (code)         |
| name                    | varchar(100) | None                              |
| description             | varchar(100) | None                              |
| size\_family            | varchar(50)  | Part of UNIQUE KEY (size\_family) |
| type                    | varchar(50)  | Part of UNIQUE KEY (type)         |
| parent\_id              | int(11)      | None                              |
| auto\_update\_timestamp | timestamp    | None                              |

## Table: `inventory_item_attribute_values`


| Column Name             | Data Type    | Index                                 |
| ----------------------- | ------------ | ------------------------------------- |
| id                      | bigint(20)   | Part of PRIMARY KEY (id)              |
| org\_id                 | bigint(20)   | Part of KEY (org\_id)                 |
| ou\_id                  | bigint(20)   | None                                  |
| attribute\_id           | bigint(20)   | Part of KEY (attribute\_id)           |
| value\_name             | varchar(255) | Part of KEY (value\_name)             |
| value\_code             | varchar(255) | None                                  |
| added\_by               | bigint(20)   | None                                  |
| added\_on               | timestamp    | None                                  |
| auto\_update\_timestamp | timestamp    | Part of KEY (auto\_update\_timestamp) |

## Table: `styles`


| Column Name             | Data Type    | Index                        |
| ----------------------- | ------------ | ---------------------------- |
| id                      | int(11)      | Part of PRIMARY KEY (id)     |
| org\_id                 | bigint(20)   | Part of UNIQUE KEY (org\_id) |
| code                    | varchar(50)  | Part of UNIQUE KEY (code)    |
| name                    | varchar(100) | None                         |
| description             | mediumtext   | None                         |
| added\_by               | bigint(20)   | None                         |
| added\_on               | timestamp    | None                         |
| is\_valid               | tinyint(1)   | None                         |
| auto\_update\_timestamp | timestamp    | None                         |

## Table: `test_txn_table`


| Column Name        | Data Type   | Index                            |
| ------------------ | ----------- | -------------------------------- |
| id                 | bigint(20)  | Part of PRIMARY KEY (id)         |
| bill\_id           | bigint(20)  | None                             |
| org\_id            | bigint(20)  | Part of PRIMARY KEY (org\_id)    |
| user\_id           | bigint(20)  | None                             |
| bill\_number       | varchar(10) | None                             |
| points             | int(11)     | None                             |
| date               | datetime    | None                             |
| bill\_amount       | double      | None                             |
| auto\_update\_time | timestamp   | Part of KEY (auto\_update\_time) |

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

## Table: `supported_locales`


| Column Name        | Data Type    | Index                    |
| ------------------ | ------------ | ------------------------ |
| id                 | int(11)      | Part of PRIMARY KEY (id) |
| locale             | varchar(15)  | None                     |
| description        | varchar(255) | None                     |
| is\_active         | tinyint(1)   | None                     |
| auto\_update\_time | timestamp    | None                     |
| locize\_locale     | varchar(25)  | None                     |

## Table: `mobile_trigger_config_keys`


| Column Name      | Data Type                                        | Index                           |
| ---------------- | ------------------------------------------------ | ------------------------------- |
| id               | bigint(20)                                       | Part of PRIMARY KEY (id)        |
| name             | varchar(100)                                     | Part of UNIQUE KEY (name)       |
| action\_id       | bigint(20)                                       | Part of UNIQUE KEY (action\_id) |
| default\_value   | varchar(255)                                     | None                            |
| type             | enum('string','integer','boolean','text','enum') | None                            |
| label            | varchar(100)                                     | None                            |
| possible\_values | varchar(512)                                     | None                            |

## Table: `attribution_lookup`


| Column Name        | Data Type                        | Index                             |
| ------------------ | -------------------------------- | --------------------------------- |
| id                 | int(11)                          | Part of PRIMARY KEY (id)          |
| org\_id            | int(11)                          | Part of UNIQUE KEY (org\_id)      |
| org\_entity\_id    | int(11)                          | None                              |
| lookup             | varchar(150)                     | Part of UNIQUE KEY (lookup)       |
| lookup\_type       | enum('WECHAT','MOBILE\_TRIGGER') | Part of UNIQUE KEY (lookup\_type) |
| is\_active         | tinyint(1)                       | None                              |
| created\_on        | datetime                         | None                              |
| last\_modified\_on | datetime                         | None                              |
| last\_modified\_by | int(11)                          | None                              |
| auto\_update\_time | timestamp                        | None                              |
| qrcode\_url        | varchar(225)                     | None                              |

## Table: `tracker_info`


| Column Name                     | Data Type    | Index                    |
| ------------------------------- | ------------ | ------------------------ |
| id                              | bigint(20)   | Part of PRIMARY KEY (id) |
| org\_id                         | bigint(20)   | Part of KEY (org\_id)    |
| entity                          | varchar(30)  | None                     |
| tracker\_name                   | mediumtext   | None                     |
| max\_success\_signal            | int(11)      | None                     |
| no\_of\_success\_signalled      | int(11)      | None                     |
| params\_json                    | mediumtext   | None                     |
| custom\_name                    | varchar(255) | None                     |
| expires\_on                     | date         | None                     |
| send\_milestone\_info           | tinyint(1)   | None                     |
| milestone\_not\_found\_template | varchar(255) | None                     |

## Table: `api_error_codes`


| Column Name             | Data Type    | Index                            |
| ----------------------- | ------------ | -------------------------------- |
| error\_code             | int(11)      | Part of UNIQUE KEY (error\_code) |
| description             | varchar(255) | None                             |
| resource                | varchar(20)  | Part of UNIQUE KEY (resource)    |
| success                 | tinyint(1)   | None                             |
| auto\_update\_timestamp | timestamp    | None                             |

## Table: `verification_history`


| Column Name        | Data Type              | Index                                 |
| ------------------ | ---------------------- | ------------------------------------- |
| id                 | int(11)                | Part of PRIMARY KEY (id)              |
| org\_id            | int(11)                | Part of UNIQUE KEY (org\_id)          |
| type               | enum('MOBILE','EMAIL') | Part of UNIQUE KEY (type)             |
| requested\_value   | varchar(200)           | Part of UNIQUE KEY (requested\_value) |
| verification\_code | mediumtext             | None                                  |
| is\_valid          | tinyint(1)             | None                                  |
| requested\_time    | datetime               | None                                  |
| last\_updated\_on  | datetime               | None                                  |
| entered\_by        | int(11)                | None                                  |

## Table: `currency_conversion_rates`


| Column Name        | Data Type  | Index                            |
| ------------------ | ---------- | -------------------------------- |
| id                 | int(11)    | Part of PRIMARY KEY (id)         |
| org\_id            | int(11)    | Part of KEY (org\_id)            |
| from\_currency\_id | int(11)    | Part of KEY (from\_currency\_id) |
| to\_currency\_id   | int(11)    | Part of KEY (to\_currency\_id)   |
| conversion\_rate   | float      | None                             |
| last\_updated\_by  | int(11)    | Part of KEY (last\_updated\_by)  |
| last\_updated\_on  | datetime   | None                             |
| valid\_till        | datetime   | None                             |
| is\_active         | tinyint(1) | None                             |
| parent\_id         | int(11)    | None                             |

## Table: `org_payment_mode_attribute_possible_values`


| Column Name                                   | Data Type    | Index                                                  |
| --------------------------------------------- | ------------ | ------------------------------------------------------ |
| id                                            | int(11)      | Part of PRIMARY KEY (id)                               |
| org\_id                                       | int(11)      | Part of KEY (org\_id)                                  |
| org\_payment\_mode\_id                        | int(11)      | Part of KEY (org\_payment\_mode\_id)                   |
| org\_payment\_mode\_attribute\_id             | int(11)      | Part of UNIQUE KEY (org\_payment\_mode\_attribute\_id) |
| payment\_mode\_attribute\_possible\_value\_id | bigint(11)   | None                                                   |
| is\_valid                                     | tinyint(1)   | None                                                   |
| value                                         | varchar(200) | Part of UNIQUE KEY (value)                             |
| added\_on                                     | timestamp    | None                                                   |
| added\_by                                     | bigint(20)   | None                                                   |
| auto\_update\_time                            | timestamp    | Part of KEY (auto\_update\_time)                       |

## Table: `area_details`


| Column Name        | Data Type    | Index                            |
| ------------------ | ------------ | -------------------------------- |
| id                 | int(11)      | Part of PRIMARY KEY (id)         |
| country\_id        | int(11)      | Part of UNIQUE KEY (country\_id) |
| state\_id          | int(11)      | Part of UNIQUE KEY (state\_id)   |
| city\_id           | int(11)      | Part of UNIQUE KEY (city\_id)    |
| area\_name         | varchar(250) | Part of UNIQUE KEY (area\_name)  |
| auto\_update\_time | timestamp    | Part of KEY (auto\_update\_time) |

## Table: `organizations`


| Column Name             | Data Type                                       | Index                                 |
| ----------------------- | ----------------------------------------------- | ------------------------------------- |
| id                      | int(11)                                         | Part of PRIMARY KEY (id)              |
| name                    | varchar(255)                                    | None                                  |
| address                 | text                                            | None                                  |
| fiscal\_year\_start     | varchar(250)                                    | None                                  |
| phone                   | varchar(15)                                     | None                                  |
| is\_active              | int(1)                                          | None                                  |
| base\_language\_id      | int(11)                                         | Part of KEY (base\_language\_id)      |
| base\_currency\_id      | int(11)                                         | Part of KEY (base\_currency\_id)      |
| parent\_id              | int(11)                                         | Part of KEY (parent\_id)              |
| default\_time\_zone\_id | int(11)                                         | Part of KEY (default\_time\_zone\_id) |
| min\_sms\_hour          | int(11)                                         | None                                  |
| max\_sms\_hour          | int(11)                                         | None                                  |
| is\_ndnc                | tinyint(1)                                      | None                                  |
| optin\_active           | tinyint(1)                                      | None                                  |
| time\_zone              | varchar(10)                                     | None                                  |
| reporting\_email        | text                                            | None                                  |
| is\_migrated            | int(1)                                          | None                                  |
| org\_type               | enum('SUPER\_ORG','CHILD\_ORG','STANDARD\_ORG') | None                                  |

## Table: `fileupload_ftp_mapping`


| Column Name                    | Data Type    | Index                    |
| ------------------------------ | ------------ | ------------------------ |
| id                             | bigint(20)   | Part of PRIMARY KEY (id) |
| org\_id                        | bigint(20)   | Part of KEY (org\_id)    |
| file\_id                       | bigint(20)   | Part of KEY (file\_id)   |
| remote\_folder\_absolute\_path | varchar(150) | None                     |
| remote\_folder\_path           | varchar(150) | None                     |
| url                            | varchar(150) | None                     |
| uploaded\_on                   | datetime     | None                     |
| uploaded\_by                   | bigint(20)   | None                     |

## Table: `supported_browsers`


| Column Name         | Data Type    | Index                                    |
| ------------------- | ------------ | ---------------------------------------- |
| id                  | int(11)      | Part of PRIMARY KEY (id)                 |
| browser\_mime\_name | varchar(250) | Part of UNIQUE KEY (browser\_mime\_name) |
| browser\_name       | varchar(250) | None                                     |
| last\_updated\_by   | int(11)      | None                                     |
| last\_updated\_on   | datetime     | None                                     |

## Table: `old_new_zones`


| Column Name | Data Type | Index                        |
| ----------- | --------- | ---------------------------- |
| old\_id     | int(11)   | Part of UNIQUE KEY (old\_id) |
| new\_id     | int(11)   | None                         |
| org\_id     | int(11)   | Part of UNIQUE KEY (org\_id) |

## Table: `sms_mapping`


| Column Name     | Data Type                         | Index                                |
| --------------- | --------------------------------- | ------------------------------------ |
| id              | bigint(20)                        | Part of PRIMARY KEY (id)             |
| type            | enum('SMS','MISSED\_CALL','BOTH') | None                                 |
| shortcode       | varchar(13)                       | Part of UNIQUE KEY (shortcode)       |
| command         | varchar(30)                       | Part of UNIQUE KEY (command)         |
| org\_prefix\_id | int(11)                           | Part of UNIQUE KEY (org\_prefix\_id) |
| org\_id         | bigint(20)                        | Part of KEY (org\_id)                |
| action\_id      | bigint(20)                        | Part of UNIQUE KEY (action\_id)      |
| notes           | mediumtext                        | None                                 |
| whoami          | varchar(255)                      | None                                 |
| last\_updated   | timestamp                         | None                                 |
| params          | mediumtext                        | None                                 |
| till\_id        | int(11)                           | None                                 |
| is\_active      | tinyint(4)                        | None                                 |

## Table: `incoming_interaction_org_prefix`


| Column Name | Data Type   | Index                        |
| ----------- | ----------- | ---------------------------- |
| id          | int(11)     | Part of PRIMARY KEY (id)     |
| org\_id     | int(11)     | Part of UNIQUE KEY (org\_id) |
| prefix      | varchar(20) | Part of UNIQUE KEY (prefix)  |

## Table: `sms_modules`


| Column Name | Data Type   | Index                    |
| ----------- | ----------- | ------------------------ |
| client\_id  | int(11)     | Part of KEY (client\_id) |
| module      | varchar(50) | Part of KEY (module)     |

## Table: `language_pack_supported_languages`


| Column Name    | Data Type   | Index                        |
| -------------- | ----------- | ---------------------------- |
| id             | int(11)     | Part of PRIMARY KEY (id)     |
| language\_code | varchar(50) | Part of KEY (language\_code) |

## Table: `supported_platform_list`


| Column Name       | Data Type    | Index                               |
| ----------------- | ------------ | ----------------------------------- |
| id                | int(11)      | Part of PRIMARY KEY (id)            |
| platform\_type    | varchar(250) | Part of UNIQUE KEY (platform\_type) |
| last\_updated\_by | int(11)      | None                                |
| last\_updated\_on | datetime     | None                                |

## Table: `org_timezones`


| Column Name    | Data Type | Index                               |
| -------------- | --------- | ----------------------------------- |
| org\_id        | int(11)   | Part of UNIQUE KEY (org\_id)        |
| time\_zone\_id | int(11)   | Part of UNIQUE KEY (time\_zone\_id) |

## Table: `admin_users_queue`


| Column Name       | Data Type                                                           | Index                    |
| ----------------- | ------------------------------------------------------------------- | ------------------------ |
| id                | int(11)                                                             | Part of PRIMARY KEY (id) |
| role\_id          | int(11)                                                             | None                     |
| org\_id           | int(11)                                                             | Part of KEY (org\_id)    |
| reports\_to       | int(11)                                                             | None                     |
| title             | enum('Mr.','Mrs.','Miss.')                                          | None                     |
| first\_name       | varchar(250)                                                        | None                     |
| middle\_name      | varchar(250)                                                        | None                     |
| last\_name        | varchar(250)                                                        | None                     |
| mobile            | varchar(15)                                                         | Part of KEY (mobile)     |
| email             | varchar(50)                                                         | Part of KEY (email)      |
| entities\_managed | text                                                                | None                     |
| created\_by       | int(11)                                                             | None                     |
| created\_on       | datetime                                                            | None                     |
| status\_id        | int(2)                                                              | None                     |
| is\_valid         | tinyint(1)                                                          | None                     |
| is\_deleted       | tinyint(1)                                                          | None                     |
| last\_updated\_by | int(11)                                                             | None                     |
| last\_updated\_on | timestamp                                                           | None                     |
| user\_type        | enum('BRAND\_USER','BRAND\_USERS\_REPORT\_ONLY','BRAND\_USER\_POC') | None                     |
| ref\_id           | int(11)                                                             | None                     |
| locale\_id        | tinyint(1)                                                          | None                     |

## Table: `client_file_mappings`


| Column Name   | Data Type                                                                                                                                                                                                                                                               | Index                       |
| ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------- |
| id            | int(11)                                                                                                                                                                                                                                                                 | Part of PRIMARY KEY (id)    |
| org\_id       | int(11)                                                                                                                                                                                                                                                                 | Part of KEY (org\_id)       |
| mapping\_type | enum('data\_providers\_file\_mapping','printer\_template\_file\_mapping','integration\_output\_template\_file\_mapping','integration\_post\_output\_file\_mapping','client\_log\_file\_mapping','lego\_properties\_file\_mapping','client\_log\_config\_file\_mapping') | Part of KEY (mapping\_type) |
| file\_type    | varchar(255)                                                                                                                                                                                                                                                            | None                        |
| file\_id      | int(11)                                                                                                                                                                                                                                                                 | None                        |
| store\_id     | int(11)                                                                                                                                                                                                                                                                 | Part of KEY (store\_id)     |
| created\_time | datetime                                                                                                                                                                                                                                                                | None                        |
| created\_by   | int(11)                                                                                                                                                                                                                                                                 | None                        |

## Table: `org_details`


| Column Name                    | Data Type    | Index                         |
| ------------------------------ | ------------ | ----------------------------- |
| org\_id                        | int(11)      | Part of PRIMARY KEY (org\_id) |
| org\_logo                      | varchar(255) | None                          |
| org\_website                   | varchar(255) | None                          |
| unsubscribe\_link              | varchar(255) | None                          |
| social\_platforms              | longtext     | None                          |
| daily\_avg\_store\_transaction | int(11)      | None                          |
| avg\_transaction\_amt          | int(11)      | None                          |
| avg\_items\_per\_transaction   | int(11)      | None                          |
| domain\_id                     | int(11)      | None                          |
| country\_id                    | int(11)      | None                          |
| state\_id                      | int(11)      | None                          |
| city\_id                       | int(11)      | None                          |
| locality                       | varchar(255) | None                          |
| pincode                        | varchar(20)  | None                          |
| updated\_by                    | bigint(20)   | None                          |
| updated\_on                    | datetime     | None                          |
| finance\_code                  | varchar(255) | None                          |
| org\_category                  | varchar(11)  | None                          |

## Table: `state_details`


| Column Name | Data Type    | Index                            |
| ----------- | ------------ | -------------------------------- |
| id          | int(11)      | Part of PRIMARY KEY (id)         |
| country\_id | int(11)      | Part of KEY (country\_id)        |
| state\_name | varchar(250) | Part of UNIQUE KEY (state\_name) |

## Table: `store_tills`


| Column Name            | Data Type            | Index                             |
| ---------------------- | -------------------- | --------------------------------- |
| entity\_id             | int(11)              | Part of KEY (entity\_id)          |
| org\_id                | int(11)              | Part of KEY (org\_id)             |
| type                   | enum('STORE','TILL') | Part of KEY (type)                |
| is\_active             | tinyint(3)           | Part of KEY (is\_active)          |
| till\_id               | int(11)              | Part of KEY (till\_id)            |
| till\_name             | varchar(100)         | None                              |
| till\_code             | varchar(50)          | Part of KEY (till\_code)          |
| till\_username         | varchar(100)         | Part of KEY (till\_username)      |
| store\_id              | int(11)              | Part of KEY (store\_id)           |
| store\_name            | varchar(100)         | None                              |
| store\_code            | varchar(50)          | Part of KEY (store\_code)         |
| store\_external\_id    | varchar(50)          | Part of KEY (store\_external\_id) |
| store\_external\_id\_1 | varchar(50)          | None                              |
| store\_external\_id\_2 | varchar(50)          | None                              |
| zone\_id               | int(11)              | Part of KEY (zone\_id)            |
| zone\_name             | varchar(100)         | None                              |
| zone\_code             | varchar(50)          | Part of KEY (zone\_code)          |
| concept\_id            | int(11)              | Part of KEY (concept\_id)         |
| concept\_name          | varchar(100)         | None                              |
| concept\_code          | varchar(50)          | Part of KEY (concept\_code)       |

## Table: `possible_file_types`


| Column Name       | Data Type    | Index                    |
| ----------------- | ------------ | ------------------------ |
| id                | int(11)      | Part of PRIMARY KEY (id) |
| file\_type        | varchar(255) | None                     |
| mapping\_type\_id | int(11)      | None                     |

## Table: `stores_add_ons`


| Column Name  | Data Type  | Index                          |
| ------------ | ---------- | ------------------------------ |
| id           | int(11)    | Part of PRIMARY KEY (id)       |
| org\_id      | int(11)    | Part of UNIQUE KEY (org\_id)   |
| store\_id    | int(11)    | Part of UNIQUE KEY (store\_id) |
| vm           | tinyint(1) | None                           |
| demographics | tinyint(1) | None                           |
| heatmap      | tinyint(1) | None                           |
| speech       | tinyint(1) | None                           |
| updated\_on  | datetime   | None                           |
| updated\_by  | int(11)    | None                           |

## Table: `org_payment_modes`


| Column Name        | Data Type   | Index                                  |
| ------------------ | ----------- | -------------------------------------- |
| id                 | int(11)     | Part of PRIMARY KEY (id)               |
| org\_id            | int(11)     | Part of UNIQUE KEY (org\_id)           |
| payment\_mode\_id  | int(11)     | Part of UNIQUE KEY (payment\_mode\_id) |
| label              | varchar(50) | None                                   |
| is\_valid          | tinyint(1)  | None                                   |
| last\_updated\_by  | int(11)     | None                                   |
| last\_updated\_on  | datetime    | None                                   |
| auto\_update\_time | timestamp   | None                                   |

## Table: `admin_users_verification_log`


| Column Name            | Data Type                                          | Index                                |
| ---------------------- | -------------------------------------------------- | ------------------------------------ |
| id                     | int(11)                                            | Part of PRIMARY KEY (id)             |
| org\_id                | int(11)                                            | Part of KEY (org\_id)                |
| admin\_user\_queue\_id | int(11)                                            | Part of KEY (admin\_user\_queue\_id) |
| status\_id             | int(2)                                             | Part of KEY (status\_id)             |
| job\_id                | int(11)                                            | None                                 |
| whitelisted\_status    | enum('NOT\_PROCESSED','VALID','INVALID','UNKNOWN') | None                                 |
| is\_valid              | tinyint(1)                                         | None                                 |
| updated\_by            | int(11)                                            | None                                 |
| entered\_on            | timestamp                                          | None                                 |

## Table: `org_roles_backup`


| Column Name       | Data Type                                                 | Index                           |
| ----------------- | --------------------------------------------------------- | ------------------------------- |
| id                | int(11)                                                   | Part of PRIMARY KEY (id)        |
| org\_id           | int(11)                                                   | Part of KEY (org\_id)           |
| role\_name        | varchar(100)                                              | None                            |
| role\_type        | enum('ORG','ZONE','CONCEPT','STORE','TILL','STR\_SERVER') | None                            |
| parent\_role\_id  | int(11)                                                   | Part of KEY (parent\_role\_id)  |
| created\_by       | int(11)                                                   | Part of KEY (created\_by)       |
| approver          | int(11)                                                   | None                            |
| created\_on       | datetime                                                  | None                            |
| last\_updated\_by | int(11)                                                   | Part of KEY (last\_updated\_by) |
| last\_updated\_on | datetime                                                  | None                            |

## Table: `org_currency_ratio_inr`


| Column Name        | Data Type  | Index                      |
| ------------------ | ---------- | -------------------------- |
| id                 | int(11)    | Part of PRIMARY KEY (id)   |
| org\_id            | int(11)    | Part of KEY (org\_id)      |
| currency\_id       | int(11)    | Part of KEY (currency\_id) |
| ratio              | double     | None                       |
| is\_active         | tinyint(1) | None                       |
| auto\_update\_time | timestamp  | None                       |
| created\_on        | datetime   | None                       |

## Table: `supported_timezones`


| Column Name        | Data Type    | Index                            |
| ------------------ | ------------ | -------------------------------- |
| id                 | int(11)      | Part of PRIMARY KEY (id)         |
| country\_id        | int(11)      | None                             |
| coordinates        | varchar(250) | None                             |
| timezone           | varchar(250) | None                             |
| comments           | varchar(250) | None                             |
| std\_offset        | varchar(250) | None                             |
| summer\_offset     | varchar(250) | None                             |
| auto\_update\_time | timestamp    | Part of KEY (auto\_update\_time) |
| timezone\_offset   | varchar(10)  | None                             |

## Table: `org_roles`


| Column Name       | Data Type                                                 | Index                           |
| ----------------- | --------------------------------------------------------- | ------------------------------- |
| id                | int(11)                                                   | Part of PRIMARY KEY (id)        |
| org\_id           | int(11)                                                   | Part of KEY (org\_id)           |
| role\_name        | varchar(100)                                              | None                            |
| role\_type        | enum('ORG','ZONE','CONCEPT','STORE','TILL','STR\_SERVER') | None                            |
| parent\_role\_id  | int(11)                                                   | Part of KEY (parent\_role\_id)  |
| created\_by       | int(11)                                                   | Part of KEY (created\_by)       |
| approver          | int(11)                                                   | None                            |
| created\_on       | datetime                                                  | None                            |
| last\_updated\_by | int(11)                                                   | Part of KEY (last\_updated\_by) |
| last\_updated\_on | datetime                                                  | None                            |

## Table: `org_countries`


| Column Name | Data Type | Index                         |
| ----------- | --------- | ----------------------------- |
| id          | int(11)   | Part of PRIMARY KEY (id)      |
| org\_id     | int(11)   | Part of PRIMARY KEY (org\_id) |
| country\_id | int(11)   | None                          |

## Table: `org_gateways`


| Column Name | Data Type   | Index                             |
| ----------- | ----------- | --------------------------------- |
| org\_id     | int(11)     | Part of PRIMARY KEY (org\_id)     |
| gateway\_id | int(11)     | Part of PRIMARY KEY (gateway\_id) |
| sender\_id  | varchar(30) | None                              |
| contact     | varchar(30) | None                              |
| priority    | int(3)      | None                              |
| credits     | int(11)     | None                              |

## Table: `payment_mode_attribute_possible_values`


| Column Name                  | Data Type    | Index                                             |
| ---------------------------- | ------------ | ------------------------------------------------- |
| id                           | int(11)      | Part of PRIMARY KEY (id)                          |
| payment\_mode\_id            | int(11)      | Part of KEY (payment\_mode\_id)                   |
| payment\_mode\_attribute\_id | int(11)      | Part of UNIQUE KEY (payment\_mode\_attribute\_id) |
| is\_valid                    | tinyint(1)   | None                                              |
| value                        | varchar(200) | Part of UNIQUE KEY (value)                        |
| added\_on                    | timestamp    | None                                              |
| added\_by                    | bigint(20)   | None                                              |
| auto\_update\_time           | timestamp    | Part of KEY (auto\_update\_time)                  |

## Table: `city_details`


| Column Name        | Data Type    | Index                            |
| ------------------ | ------------ | -------------------------------- |
| id                 | int(11)      | Part of PRIMARY KEY (id)         |
| country\_id        | int(11)      | Part of UNIQUE KEY (country\_id) |
| state\_id          | int(11)      | Part of UNIQUE KEY (state\_id)   |
| city\_name         | varchar(250) | Part of UNIQUE KEY (city\_name)  |
| time\_zone\_id     | int(11)      | None                             |
| auto\_update\_time | timestamp    | Part of KEY (auto\_update\_time) |

## Table: `seasonal_slabs`


| Column Name       | Data Type  | Index                    |
| ----------------- | ---------- | ------------------------ |
| id                | int(11)    | Part of PRIMARY KEY (id) |
| org\_id           | int(11)    | Part of KEY (org\_id)    |
| period\_from      | date       | None                     |
| period\_to        | date       | None                     |
| for\_stores\_json | mediumtext | None                     |
| in\_zones         | mediumtext | None                     |
| params            | mediumtext | None                     |
| added\_by         | bigint(20) | None                     |
| last\_modified    | datetime   | None                     |

## Table: `org_payment_mode_attributes`


| Column Name                  | Data Type                                          | Index                                             |
| ---------------------------- | -------------------------------------------------- | ------------------------------------------------- |
| id                           | int(11)                                            | Part of PRIMARY KEY (id)                          |
| org\_id                      | int(11)                                            | Part of KEY (org\_id)                             |
| payment\_mode\_attribute\_id | int(11)                                            | Part of UNIQUE KEY (payment\_mode\_attribute\_id) |
| org\_payment\_mode\_id       | int(11)                                            | Part of KEY (org\_payment\_mode\_id)              |
| label                        | varchar(50)                                        | None                                              |
| is\_valid                    | tinyint(1)                                         | None                                              |
| last\_updated\_by            | int(11)                                            | None                                              |
| last\_updated\_on            | datetime                                           | None                                              |
| auto\_update\_time           | timestamp                                          | None                                              |
| data\_type                   | enum('STRING','INT','FLOAT','BOOL','DATE','TYPED') | None                                              |
| regex                        | varchar(100)                                       | None                                              |
| default\_value               | varchar(100)                                       | None                                              |
| error\_msg                   | text                                               | None                                              |
| is\_pii\_data                | tinyint(1)                                         | None                                              |

## Table: `org_locales`


| Column Name        | Data Type | Index                           |
| ------------------ | --------- | ------------------------------- |
| id                 | int(11)   | Part of PRIMARY KEY (id)        |
| locale\_id         | int(11)   | Part of UNIQUE KEY (locale\_id) |
| org\_id            | int(11)   | Part of UNIQUE KEY (org\_id)    |
| auto\_update\_time | timestamp | None                            |

## Table: `org_currencies`


| Column Name  | Data Type | Index                      |
| ------------ | --------- | -------------------------- |
| id           | int(11)   | Part of PRIMARY KEY (id)   |
| org\_id      | int(11)   | Part of KEY (org\_id)      |
| currency\_id | int(11)   | Part of KEY (currency\_id) |

## Table: `otp_template`


| Column Name         | Data Type              | Index                             |
| ------------------- | ---------------------- | --------------------------------- |
| id                  | bigint(20)             | Part of PRIMARY KEY (id)          |
| org\_id             | int(11)                | Part of KEY (org\_id)             |
| name                | varchar(50)            | Part of UNIQUE KEY (name)         |
| action              | varchar(50)            | Part of KEY (action)              |
| ou\_id              | bigint(20)             | Part of KEY (ou\_id)              |
| short\_message      | mediumtext             | None                              |
| long\_message       | longtext               | None                              |
| comm\_channel\_type | enum('MOBILE','EMAIL') | Part of KEY (comm\_channel\_type) |
| is\_active          | tinyint(1)             | Part of KEY (is\_active)          |
| notes               | varchar(250)           | None                              |
| added\_by           | int(11)                | None                              |
| added\_on           | datetime               | None                              |
| updated\_by         | int(11)                | None                              |
| updated\_on         | datetime               | None                              |
| auto\_update\_time  | timestamp              | Part of KEY (auto\_update\_time)  |

## Table: `supported_social_platforms`


| Column Name | Data Type    | Index                    |
| ----------- | ------------ | ------------------------ |
| id          | int(11)      | Part of PRIMARY KEY (id) |
| platform    | varchar(50)  | None                     |
| logo\_url   | varchar(100) | None                     |

## Table: `supported_currencies`


| Column Name        | Data Type    | Index                            |
| ------------------ | ------------ | -------------------------------- |
| id                 | int(11)      | Part of PRIMARY KEY (id)         |
| name               | varchar(255) | None                             |
| symbol             | varchar(255) | None                             |
| auto\_update\_time | timestamp    | Part of KEY (auto\_update\_time) |
| iso\_code          | varchar(3)   | None                             |
| iso\_code\_numeric | int(11)      | None                             |

## Table: `payment_mode_attributes`


| Column Name        | Data Type                                          | Index                           |
| ------------------ | -------------------------------------------------- | ------------------------------- |
| id                 | int(11)                                            | Part of PRIMARY KEY (id)        |
| payment\_mode\_id  | int(11)                                            | Part of KEY (payment\_mode\_id) |
| name               | varchar(50)                                        | None                            |
| is\_valid          | tinyint(1)                                         | None                            |
| last\_updated\_by  | int(11)                                            | None                            |
| last\_updated\_on  | datetime                                           | None                            |
| auto\_update\_time | timestamp                                          | None                            |
| data\_type         | enum('STRING','INT','FLOAT','BOOL','DATE','TYPED') | None                            |
| regex              | varchar(100)                                       | None                            |
| default\_value     | varchar(100)                                       | None                            |
| error\_msg         | text                                               | None                            |

## Table: `countries`


| Column Name           | Data Type    | Index                     |
| --------------------- | ------------ | ------------------------- |
| id                    | int(11)      | Part of PRIMARY KEY (id)  |
| name                  | varchar(100) | Part of UNIQUE KEY (name) |
| capital               | varchar(100) | None                      |
| code                  | varchar(2)   | None                      |
| short\_name           | varchar(3)   | None                      |
| numeric\_code         | int(11)      | None                      |
| iso\_name             | varchar(100) | None                      |
| mobile\_country\_code | varchar(5)   | None                      |
| mobile\_regex         | varchar(250) | None                      |
| mobile\_length\_csv   | varchar(255) | None                      |
| last\_updated\_by     | int(11)      | None                      |
| last\_updated         | datetime     | None                      |

## Table: `uploaded_files`


| Column Name                    | Data Type                            | Index                    |
| ------------------------------ | ------------------------------------ | ------------------------ |
| id                             | bigint(20)                           | Part of PRIMARY KEY (id) |
| org\_id                        | bigint(20)                           | Part of KEY (org\_id)    |
| file\_tag                      | varchar(50)                          | None                     |
| file\_contents                 | longblob                             | None                     |
| file\_name                     | varchar(255)                         | None                     |
| extension                      | varchar(20)                          | None                     |
| mime\_type                     | varchar(50)                          | None                     |
| created\_time                  | datetime                             | None                     |
| created\_by                    | bigint(20)                           | None                     |
| client\_file\_name             | varchar(255)                         | None                     |
| client\_file\_monitoring\_type | enum('FILE\_CHECK','PROCESS\_CHECK') | None                     |
| file\_handle                   | varchar(50)                          | None                     |
| md5\_checksum                  | varchar(100)                         | None                     |
| auto\_update\_time             | timestamp                            | None                     |

## Table: `admin_users_verification_status`


| Column Name | Data Type                                                                                                                                                                          | Index                    |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------ |
| id          | int(11)                                                                                                                                                                            | Part of PRIMARY KEY (id) |
| status      | enum('WHITELISTING','REJECTED\_BY\_WHITELISTING','WHITELISTED','CAP\_POC\_AUTHORIZED','CAP\_POC\_REJECTED','BRAND\_POC\_AUTHORIZED','BRAND\_POC\_REJECTED','ACTIVE','DEACTIVATED') | None                     |
| description | varchar(1000)                                                                                                                                                                      | None                     |

## Table: `supported_mobile_list`


| Column Name       | Data Type    | Index                             |
| ----------------- | ------------ | --------------------------------- |
| id                | int(11)      | Part of PRIMARY KEY (id)          |
| mobile\_type      | varchar(250) | Part of UNIQUE KEY (mobile\_type) |
| last\_updated\_by | int(11)      | None                              |
| last\_updated\_on | datetime     | None                              |

## Table: `new_roles`


| Column Name        | Data Type   | Index                           |
| ------------------ | ----------- | ------------------------------- |
| org\_id            | int(3)      | Part of UNIQUE KEY (org\_id)    |
| org\_name          | varchar(52) | None                            |
| role\_name         | varchar(23) | Part of UNIQUE KEY (role\_name) |
| parent\_role\_name | varchar(19) | None                            |
| approver\_email    | varchar(30) | None                            |

## Table: `incoming_interaction_action_params`


| Column Name   | Data Type    | Index                           |
| ------------- | ------------ | ------------------------------- |
| id            | int(11)      | Part of PRIMARY KEY (id)        |
| action\_id    | int(11)      | Part of UNIQUE KEY (action\_id) |
| code          | varchar(255) | Part of UNIQUE KEY (code)       |
| label         | varchar(255) | None                            |
| is\_mandatory | tinyint(1)   | None                            |
| is\_valid     | tinyint(1)   | None                            |

## Table: `incoming_interaction_actions`


| Column Name | Data Type                        | Index                    |
| ----------- | -------------------------------- | ------------------------ |
| id          | int(11)                          | Part of PRIMARY KEY (id) |
| code        | varchar(255)                     | None                     |
| label       | varchar(255)                     | None                     |
| type        | enum('SMS','MISSED\_CALL','ALL') | None                     |
| is\_valid   | tinyint(1)                       | None                     |

## Table: `org_languages`


| Column Name  | Data Type | Index                             |
| ------------ | --------- | --------------------------------- |
| id           | int(11)   | None                              |
| org\_id      | int(11)   | Part of UNIQUE KEY (org\_id)      |
| language\_id | int(11)   | Part of UNIQUE KEY (language\_id) |

## Table: `domains`


| Column Name | Data Type    | Index                     |
| ----------- | ------------ | ------------------------- |
| id          | int(11)      | Part of PRIMARY KEY (id)  |
| name        | varchar(255) | Part of UNIQUE KEY (name) |
| description | mediumtext   | None                      |
| created\_on | timestamp    | None                      |

## Table: `admin_user_roles`


| Column Name       | Data Type                                                 | Index                         |
| ----------------- | --------------------------------------------------------- | ----------------------------- |
| id                | int(11)                                                   | Part of PRIMARY KEY (id)      |
| org\_id           | int(11)                                                   | Part of KEY (org\_id)         |
| admin\_user\_id   | int(11)                                                   | Part of KEY (admin\_user\_id) |
| ref\_id           | int(11)                                                   | Part of KEY (ref\_id)         |
| type              | enum('ORG','ZONE','CONCEPT','STORE','TILL','STR\_SERVER') | Part of KEY (type)            |
| is\_active        | tinyint(4)                                                | None                          |
| last\_updated\_by | int(11)                                                   | None                          |
| last\_updated\_on | datetime                                                  | None                          |
| role\_id          | int(11)                                                   | Part of KEY (role\_id)        |

## Table: `connected_org_relations`


| Column Name        | Data Type                                         | Index                                   |
| ------------------ | ------------------------------------------------- | --------------------------------------- |
| id                 | int(11)                                           | Part of PRIMARY KEY (id)                |
| org\_id            | int(11)                                           | Part of KEY (org\_id)                   |
| connected\_org\_id | int(11)                                           | Part of UNIQUE KEY (connected\_org\_id) |
| is\_valid          | tinyint(1)                                        | None                                    |
| relationship\_type | enum('PARENT\_CHILD','REPORTING\_ORG','UAT\_ORG') | None                                    |
| auto\_update\_time | timestamp                                         | None                                    |

## Table: `concepts`


| Column Name       | Data Type    | Index                    |
| ----------------- | ------------ | ------------------------ |
| id                | int(11)      | Part of PRIMARY KEY (id) |
| level             | varchar(250) | None                     |
| last\_updated\_by | int(11)      | None                     |
| last\_updated\_on | datetime     | None                     |

## Table: `zones`


| Column Name       | Data Type    | Index                         |
| ----------------- | ------------ | ----------------------------- |
| id                | int(11)      | Part of PRIMARY KEY (id)      |
| level             | varchar(250) | None                          |
| last\_updated\_by | int(11)      | None                          |
| last\_updated\_on | datetime     | None                          |
| reporting\_email  | mediumtext   | None                          |
| reporting\_mobile | text         | None                          |
| org\_id           | int(11)      | Part of PRIMARY KEY (org\_id) |

## Table: `org_sms_credits`


| Column Name         | Data Type  | Index                         |
| ------------------- | ---------- | ----------------------------- |
| org\_id             | bigint(20) | Part of PRIMARY KEY (org\_id) |
| value\_sms\_credits | int(11)    | None                          |
| bulk\_sms\_credits  | int(11)    | None                          |
| user\_credits       | int(11)    | None                          |
| created\_by         | bigint(20) | None                          |
| last\_updated\_by   | bigint(20) | None                          |
| last\_updated       | timestamp  | None                          |

## Table: `stores`


| Column Name        | Data Type                                                                                                                                                     | Index                            |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- |
| id                 | int(11)                                                                                                                                                       | Part of KEY (id)                 |
| org\_id            | int(11)                                                                                                                                                       | Part of KEY (org\_id)            |
| city\_id           | int(11)                                                                                                                                                       | Part of KEY (city\_id)           |
| area\_id           | int(11)                                                                                                                                                       | None                             |
| mobile             | varchar(15)                                                                                                                                                   | None                             |
| land\_line         | varchar(255)                                                                                                                                                  | None                             |
| email              | varchar(50)                                                                                                                                                   | None                             |
| is\_active         | tinyint(1)                                                                                                                                                    | None                             |
| lat                | varchar(50)                                                                                                                                                   | None                             |
| long               | varchar(50)                                                                                                                                                   | None                             |
| external\_id       | varchar(50)                                                                                                                                                   | Part of KEY (external\_id)       |
| external\_id\_1    | varchar(50)                                                                                                                                                   | None                             |
| external\_id\_2    | varchar(50)                                                                                                                                                   | None                             |
| last\_updated\_by  | int(11)                                                                                                                                                       | None                             |
| last\_updated\_on  | datetime                                                                                                                                                      | None                             |
| time\_zone\_offset | varchar(10)                                                                                                                                                   | None                             |
| auto\_update\_time | timestamp                                                                                                                                                     | Part of KEY (auto\_update\_time) |
| channels           | enum('instore','e-comm','newsletter','campaigns','NCA','WECHAT','MARTJACK','WEB\_ENGAGE','FACEBOOK','TMALL','OTHERS','kiosk','aggregator','MAPP\_SDK','ZALO') | None                             |

## Table: `config_key_values`


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

## Table: `stores_clusters`


| Column Name | Data Type | Index                        |
| ----------- | --------- | ---------------------------- |
| id          | int(11)   | Part of PRIMARY KEY (id)     |
| org\_id     | int(11)   | Part of UNIQUE KEY (org\_id) |
| store\_id   | int(11)   | Part of KEY (store\_id)      |
| value\_id   | int(11)   | Part of KEY (value\_id)      |
| added\_on   | datetime  | None                         |

## Table: `language_pack`


| Column Name      | Data Type    | Index                          |
| ---------------- | ------------ | ------------------------------ |
| id               | int(11)      | Part of PRIMARY KEY (id)       |
| language\_code   | varchar(50)  | Part of KEY (language\_code)   |
| text             | varchar(500) | None                           |
| entity\_data\_id | int(11)      | Part of KEY (entity\_data\_id) |
| is\_approved     | tinyint(11)  | None                           |

## Table: `custom_sender`


| Column Name     | Data Type   | Index                         |
| --------------- | ----------- | ----------------------------- |
| org\_id         | bigint(20)  | Part of PRIMARY KEY (org\_id) |
| sender\_gsm     | varchar(20) | None                          |
| sender\_cdma    | varchar(20) | None                          |
| sender\_label   | varchar(50) | None                          |
| replyto\_email  | varchar(50) | None                          |
| last\_updated   | timestamp   | None                          |
| date\_activated | datetime    | None                          |

## Table: `store_templates`


| Column Name       | Data Type     | Index                           |
| ----------------- | ------------- | ------------------------------- |
| store\_id         | int(11)       | Part of PRIMARY KEY (store\_id) |
| org\_id           | int(11)       | None                            |
| s\_name           | varchar(50)   | None                            |
| s\_email          | varchar(50)   | None                            |
| s\_mobile         | varchar(15)   | None                            |
| e\_name           | varchar(50)   | None                            |
| e\_mobile         | varchar(15)   | None                            |
| e\_email          | varchar(50)   | None                            |
| e\_land\_line     | varchar(255)  | None                            |
| s\_land\_line     | varchar(255)  | None                            |
| s\_add            | varchar(500)  | None                            |
| e\_add            | varchar(1000) | None                            |
| s\_extra          | mediumtext    | None                            |
| e\_extra          | mediumtext    | None                            |
| last\_updated\_by | int(11)       | None                            |
| last\_updated\_on | datetime      | None                            |

## Table: `associates`


| Column Name        | Data Type    | Index                                |
| ------------------ | ------------ | ------------------------------------ |
| id                 | int(11)      | Part of PRIMARY KEY (id)             |
| org\_id            | int(11)      | Part of KEY (org\_id)                |
| associate\_code    | varchar(100) | Part of UNIQUE KEY (associate\_code) |
| firstname          | varchar(100) | None                                 |
| lastname           | varchar(100) | None                                 |
| mobile             | varchar(15)  | None                                 |
| email              | varchar(50)  | None                                 |
| store\_id          | int(11)      | Part of UNIQUE KEY (store\_id)       |
| store\_code        | varchar(50)  | Part of UNIQUE KEY (store\_code)     |
| updated\_by        | int(11)      | None                                 |
| updated\_on        | datetime     | None                                 |
| added\_on          | datetime     | None                                 |
| added\_by          | int(11)      | None                                 |
| is\_active         | tinyint(1)   | None                                 |
| auto\_update\_time | timestamp    | Part of KEY (auto\_update\_time)     |

## Table: `org_entities`


| Column Name        | Data Type                                                                     | Index                            |
| ------------------ | ----------------------------------------------------------------------------- | -------------------------------- |
| id                 | int(11)                                                                       | Part of PRIMARY KEY (id)         |
| org\_id            | int(11)                                                                       | Part of KEY (org\_id)            |
| type               | enum('ZONE','CONCEPT','STORE','TILL','STR\_SERVER','ADMIN\_USER','ASSOCIATE') | Part of UNIQUE KEY (type)        |
| is\_active         | tinyint(4)                                                                    | None                             |
| is\_ou\_enabled    | tinyint(1)                                                                    | None                             |
| is\_default        | tinyint(1)                                                                    | None                             |
| reference\_id      | int(11)                                                                       | None                             |
| admin\_type        | enum('ADMIN','GENERAL')                                                       | None                             |
| code               | varchar(50)                                                                   | Part of UNIQUE KEY (code)        |
| name               | varchar(100)                                                                  | None                             |
| description        | varchar(250)                                                                  | None                             |
| time\_zone\_id     | int(11)                                                                       | Part of KEY (time\_zone\_id)     |
| currency\_id       | int(11)                                                                       | Part of KEY (currency\_id)       |
| language\_id       | int(11)                                                                       | Part of KEY (language\_id)       |
| last\_updated\_by  | int(11)                                                                       | None                             |
| last\_updated\_on  | datetime                                                                      | None                             |
| auto\_update\_time | timestamp                                                                     | Part of KEY (auto\_update\_time) |

## Table: `entity_custom_sender`


| Column Name        | Data Type             | Index                      |
| ------------------ | --------------------- | -------------------------- |
| org\_id            | int(11)               | Part of KEY (org\_id)      |
| entity\_id         | int(11)               | Part of KEY (entity\_id)   |
| entity\_type       | enum('CONCEPT','ORG') | Part of KEY (entity\_type) |
| sender\_gsm        | varchar(20)           | None                       |
| sender\_cdma       | varchar(20)           | None                       |
| sender\_label      | varchar(50)           | None                       |
| replyto\_email     | varchar(50)           | None                       |
| sender\_email      | varchar(50)           | None                       |
| last\_updated\_by  | int(11)               | None                       |
| auto\_update\_time | timestamp             | None                       |

## Table: `staff_change_identifiers`


| Column Name        | Data Type                            | Index                    |
| ------------------ | ------------------------------------ | ------------------------ |
| id                 | int(11)                              | Part of PRIMARY KEY (id) |
| org\_id            | int(11)                              | Part of KEY (org\_id)    |
| old\_value         | varchar(100)                         | None                     |
| new\_value         | varchar(100)                         | None                     |
| type               | enum('EMAIL','MOBILE')               | Part of KEY (type)       |
| refId              | int(11)                              | Part of KEY (refId)      |
| status             | enum('SEND\_OTP','SUCCESS','FAILED') | None                     |
| notes              | varchar(250)                         | None                     |
| auto\_update\_time | timestamp                            | None                     |

## Table: `user_transfer_log`


| Column Name        | Data Type  | Index                              |
| ------------------ | ---------- | ---------------------------------- |
| id                 | int(11)    | Part of PRIMARY KEY (id)           |
| org\_id            | int(11)    | Part of KEY (org\_id)              |
| from\_ref\_id      | bigint(20) | Part of UNIQUE KEY (from\_ref\_id) |
| user\_id           | bigint(20) | None                               |
| to\_ref\_id        | int(11)    | None                               |
| updated\_by        | bigint(20) | None                               |
| updated\_on        | datetime   | None                               |
| auto\_update\_time | timestamp  | Part of KEY (auto\_update\_time)   |

## Table: `partners`


| Column Name        | Data Type    | Index                            |
| ------------------ | ------------ | -------------------------------- |
| id                 | int(11)      | Part of PRIMARY KEY (id)         |
| org\_id            | bigint(20)   | Part of KEY (org\_id)            |
| name               | varchar(100) | Part of KEY (name)               |
| description        | varchar(255) | None                             |
| website\_url       | varchar(255) | None                             |
| is\_active         | tinyint(1)   | None                             |
| added\_by          | int(11)      | None                             |
| added\_on          | datetime     | None                             |
| updated\_by        | int(11)      | None                             |
| updated\_on        | datetime     | None                             |
| auto\_update\_time | timestamp    | Part of KEY (auto\_update\_time) |

## Table: `admin_users`


| Column Name        | Data Type                  | Index                            |
| ------------------ | -------------------------- | -------------------------------- |
| id                 | int(11)                    | Part of PRIMARY KEY (id)         |
| role\_id           | int(11)                    | None                             |
| org\_id            | int(11)                    | Part of KEY (org\_id)            |
| reports\_to        | int(11)                    | Part of KEY (reports\_to)        |
| title              | enum('Mr.','Mrs.','Miss.') | None                             |
| first\_name        | varchar(250)               | None                             |
| middle\_name       | varchar(250)               | None                             |
| last\_name         | varchar(250)               | None                             |
| mobile             | varchar(15)                | Part of KEY (mobile)             |
| mobile\_validated  | tinyint(1)                 | None                             |
| email              | varchar(50)                | Part of KEY (email)              |
| email\_validated   | tinyint(1)                 | None                             |
| is\_active         | tinyint(1)                 | None                             |
| is\_deleted        | tinyint(1)                 | None                             |
| last\_login        | datetime                   | None                             |
| created\_on        | datetime                   | None                             |
| last\_updated\_by  | int(11)                    | None                             |
| last\_updated\_on  | datetime                   | None                             |
| auto\_update\_time | timestamp                  | Part of KEY (auto\_update\_time) |
| preferred\_org\_id | int(11)                    | None                             |
| preferred\_module  | int(11)                    | None                             |

## Table: `org_entity_relations`


| Column Name          | Data Type                                                       | Index                                     |
| -------------------- | --------------------------------------------------------------- | ----------------------------------------- |
| id                   | int(11)                                                         | Part of PRIMARY KEY (id)                  |
| org\_id              | int(11)                                                         | Part of KEY (org\_id)                     |
| parent\_entity\_id   | int(11)                                                         | Part of UNIQUE KEY (parent\_entity\_id)   |
| parent\_entity\_type | enum('ZONE','CONCEPT','STORE','STR\_SERVER')                    | Part of UNIQUE KEY (parent\_entity\_type) |
| child\_entity\_id    | int(11)                                                         | Part of KEY (child\_entity\_id)           |
| child\_entity\_type  | enum('ZONE','CONCEPT','STORE','STR\_SERVER','TILL','ASSOCIATE') | None                                      |
| code                 | varchar(200)                                                    | Part of KEY (code)                        |
| auto\_update\_time   | timestamp                                                       | Part of KEY (auto\_update\_time)          |

## Table: `mobile_trigger_config_key_values`


| Column Name | Data Type    | Index                     |
| ----------- | ------------ | ------------------------- |
| id          | bigint(20)   | Part of PRIMARY KEY (id)  |
| key\_id     | bigint(20)   | Part of KEY (key\_id)     |
| trigger\_id | bigint(20)   | Part of KEY (trigger\_id) |
| value       | varchar(255) | None                      |
| added\_on   | datetime     | None                      |
| added\_by   | bigint(20)   | None                      |
| org\_id     | bigint(20)   | Part of KEY (org\_id)     |
| is\_valid   | tinyint(4)   | None                      |

## Table: `validated_email`


| Column Name       | Data Type   | Index                      |
| ----------------- | ----------- | -------------------------- |
| id                | int(11)     | Part of UNIQUE KEY (id)    |
| email             | varchar(50) | Part of UNIQUE KEY (email) |
| is\_valid         | tinyint(1)  | None                       |
| last\_updated\_on | datetime    | None                       |
| entered\_by       | int(11)     | None                       |

## Table: `org_labels`


| Column Name        | Data Type    | Index                        |
| ------------------ | ------------ | ---------------------------- |
| Id                 | bigint(11)   | Part of PRIMARY KEY (Id)     |
| Org\_id            | bigint(11)   | Part of UNIQUE KEY (Org\_id) |
| last\_updated\_by  | int(11)      | None                         |
| is\_active         | tinyint(1)   | None                         |
| name               | varchar(100) | Part of UNIQUE KEY (name)    |
| description        | varchar(250) | None                         |
| auto\_update\_time | timestamp    | None                         |

## Table: `communication_templates`


| Column Name       | Data Type           | Index                    |
| ----------------- | ------------------- | ------------------------ |
| id                | int(11)             | Part of PRIMARY KEY (id) |
| org\_id           | int(11)             | Part of KEY (org\_id)    |
| store\_id         | int(11)             | None                     |
| title             | varchar(250)        | None                     |
| type              | enum('SMS','EMAIL') | Part of KEY (type)       |
| subject           | varchar(250)        | None                     |
| body              | mediumtext          | None                     |
| last\_updated\_by | int(11)             | None                     |
| last\_updated\_on | datetime            | None                     |
| is\_editable      | tinyint(1)          | None                     |

## Table: `admin_user_locale`


| Column Name        | Data Type | Index                         |
| ------------------ | --------- | ----------------------------- |
| id                 | int(11)   | Part of PRIMARY KEY (id)      |
| user\_id           | int(11)   | Part of UNIQUE KEY (user\_id) |
| locale\_id         | int(11)   | None                          |
| org\_id            | int(11)   | Part of UNIQUE KEY (org\_id)  |
| auto\_update\_time | timestamp | None                          |

## Table: `language_pack_entity_data`


| Column Name        | Data Type    | Index                                   |
| ------------------ | ------------ | --------------------------------------- |
| id                 | int(11)      | Part of PRIMARY KEY (id)                |
| data               | varchar(500) | None                                    |
| entity\_name       | varchar(500) | None                                    |
| unique\_identifier | varchar(11)  | Part of UNIQUE KEY (unique\_identifier) |

## Table: `pincode_mapping`


| Column Name    | Data Type    | Index                         |
| -------------- | ------------ | ----------------------------- |
| id             | int(11)      | Part of PRIMARY KEY (id)      |
| org\_id        | int(11)      | Part of PRIMARY KEY (org\_id) |
| pincode        | varchar(7)   | None                          |
| address        | varchar(120) | None                          |
| mobile\_number | varchar(39)  | None                          |

## Table: `config_keys`


| Column Name       | Data Type                                            | Index                     |
| ----------------- | ---------------------------------------------------- | ------------------------- |
| id                | int(11)                                              | Part of KEY (id)          |
| name              | varchar(250)                                         | Part of UNIQUE KEY (name) |
| scopes            | varchar(250)                                         | None                      |
| value\_type       | enum('STRING','NUMERIC','BOOL','LIST','MAP','RANGE') | None                      |
| default\_value    | mediumtext                                           | None                      |
| label             | varchar(250)                                         | None                      |
| security\_group   | varchar(250)                                         | None                      |
| modules           | varchar(250)                                         | None                      |
| assoc\_keys       | mediumtext                                           | None                      |
| regex             | varchar(250)                                         | None                      |
| custom\_check     | varchar(250)                                         | None                      |
| added\_by         | int(11)                                              | None                      |
| added\_on         | datetime                                             | None                      |
| is\_valid         | tinyint(1)                                           | Part of KEY (is\_valid)   |
| parent\_id        | int(11)                                              | None                      |
| resource          | varchar(50)                                          | Part of KEY (resource)    |
| used\_in\_loyalty | tinyint(1)                                           | None                      |

## Table: `credits_log`


| Column Name         | Data Type  | Index                         |
| ------------------- | ---------- | ----------------------------- |
| id                  | int(11)    | Part of PRIMARY KEY (id)      |
| org\_id             | bigint(20) | Part of PRIMARY KEY (org\_id) |
| value\_sms\_credits | int(11)    | None                          |
| bulk\_sms\_credits  | int(11)    | None                          |
| user\_credits       | int(11)    | None                          |
| created\_by         | bigint(20) | None                          |
| added               | datetime   | None                          |

## Table: `staff_users`


| Column Name        | Data Type    | Index                            |
| ------------------ | ------------ | -------------------------------- |
| id                 | int(11)      | Part of PRIMARY KEY (id)         |
| org\_id            | int(11)      | Part of KEY (org\_id)            |
| ref\_id            | int(11)      | None                             |
| username           | varchar(250) | Part of KEY (username)           |
| first\_name        | varchar(250) | None                             |
| middle\_name       | varchar(250) | None                             |
| last\_name         | varchar(250) | None                             |
| mobile             | varchar(15)  | Part of KEY (mobile)             |
| mobile\_validated  | tinyint(1)   | None                             |
| email              | varchar(50)  | Part of KEY (email)              |
| email\_validated   | tinyint(1)   | None                             |
| is\_active         | tinyint(1)   | None                             |
| is\_deleted        | tinyint(1)   | None                             |
| created\_on        | datetime     | None                             |
| last\_updated\_by  | int(11)      | None                             |
| last\_updated\_on  | datetime     | None                             |
| auto\_update\_time | timestamp    | Part of KEY (auto\_update\_time) |
| title              | varchar(250) | None                             |

## Table: `possible_mapping_types`


| Column Name   | Data Type                                                                                                                                                                                                                          | Index                    |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------ |
| id            | int(11)                                                                                                                                                                                                                            | Part of PRIMARY KEY (id) |
| mapping\_type | enum('data\_providers\_file\_mapping','printer\_template\_file\_mapping','integration\_output\_template\_file\_mapping','integration\_post\_output\_file\_mapping','client\_log\_file\_mapping','lego\_properties\_file\_mapping') | None                     |

## Table: `user_labels`


| Column Name        | Data Type  | Index                         |
| ------------------ | ---------- | ----------------------------- |
| id                 | bigint(11) | Part of PRIMARY KEY (id)      |
| org\_id            | bigint(11) | Part of KEY (org\_id)         |
| user\_Id           | bigint(11) | Part of UNIQUE KEY (user\_Id) |
| label\_Id          | bigint(11) | Part of KEY (label\_Id)       |
| added\_by          | int(11)    | None                          |
| is\_deleted        | tinyint(1) | None                          |
| auto\_update\_time | timestamp  | None                          |

## Table: `org_data`


| Column Name | Data Type    | Index                        |
| ----------- | ------------ | ---------------------------- |
| id          | bigint(20)   | Part of PRIMARY KEY (id)     |
| org\_id     | bigint(20)   | Part of UNIQUE KEY (org\_id) |
| key         | varchar(100) | Part of UNIQUE KEY (key)     |
| type\_tag   | varchar(10)  | None                         |
| value       | mediumtext   | None                         |
| persistent  | int(11)      | None                         |
| added       | datetime     | None                         |
| updated     | timestamp    | None                         |

## Table: `cached_files`


| Column Name     | Data Type    | Index                       |
| --------------- | ------------ | --------------------------- |
| id              | int(11)      | Part of PRIMARY KEY (id)    |
| module          | varchar(100) | Part of KEY (module)        |
| action          | varchar(100) | Part of KEY (action)        |
| org\_id         | int(11)      | Part of KEY (org\_id)       |
| file\_hash      | varchar(255) | None                        |
| file\_key       | varchar(255) | None                        |
| file\_extension | varchar(20)  | None                        |
| created\_time   | datetime     | Part of KEY (created\_time) |
| created\_by     | int(11)      | None                        |
| host            | varchar(100) | None                        |
| is\_locked      | tinyint(1)   | None                        |
| is\_valid       | tinyint(1)   | None                        |
| is\_hive\_file  | tinyint(1)   | None                        |
| store\_id       | int(11)      | Part of KEY (store\_id)     |
| fs\_handle      | varchar(50)  | None                        |
| file\_size      | int(11)      | None                        |

## Table: `supported_languages`


| Column Name        | Data Type    | Index                            |
| ------------------ | ------------ | -------------------------------- |
| id                 | int(11)      | Part of PRIMARY KEY (id)         |
| country\_id        | int(11)      | None                             |
| language           | varchar(250) | None                             |
| auto\_update\_time | timestamp    | Part of KEY (auto\_update\_time) |
| iso\_code          | varchar(3)   | None                             |

## Table: `payment_mode`


| Column Name        | Data Type   | Index                    |
| ------------------ | ----------- | ------------------------ |
| id                 | int(11)     | Part of PRIMARY KEY (id) |
| type               | varchar(50) | None                     |
| description        | mediumtext  | None                     |
| is\_valid          | tinyint(1)  | None                     |
| added\_on          | datetime    | None                     |
| added\_by          | int(11)     | None                     |
| auto\_update\_time | timestamp   | None                     |

## Table: `stores_clusters_values`


| Column Name | Data Type    | Index                            |
| ----------- | ------------ | -------------------------------- |
| id          | int(11)      | Part of PRIMARY KEY (id)         |
| org\_id     | int(11)      | Part of UNIQUE KEY (org\_id)     |
| group\_name | varchar(255) | Part of UNIQUE KEY (group\_name) |
| key         | mediumtext   | None                             |
| value       | mediumtext   | None                             |

## Table: `wechat_account_configuration`


| Column Name           | Data Type    | Index                             |
| --------------------- | ------------ | --------------------------------- |
| id                    | int(11)      | Part of PRIMARY KEY (id)          |
| account\_name         | varchar(100) | None                              |
| org\_id               | int(11)      | Part of PRIMARY KEY (org\_id)     |
| app\_id               | varchar(50)  | Part of UNIQUE KEY (app\_id)      |
| app\_secret           | varchar(100) | None                              |
| wechat\_app\_id       | varchar(50)  | None                              |
| wechat\_app\_secret   | varchar(100) | None                              |
| original\_id          | varchar(100) | Part of UNIQUE KEY (original\_id) |
| service\_account\_url | varchar(200) | None                              |
| brand\_id             | varchar(100) | None                              |
| is\_active            | tinyint(1)   | None                              |
| created\_by           | int(11)      | None                              |
| created\_on           | datetime     | None                              |
| last\_updated\_by     | int(11)      | None                              |
| last\_updated\_on     | datetime     | None                              |

## Table: `store_units`


| Column Name               | Data Type                  | Index                            |
| ------------------------- | -------------------------- | -------------------------------- |
| id                        | int(11)                    | Part of PRIMARY KEY (id)         |
| org\_id                   | int(11)                    | Part of KEY (org\_id)            |
| store\_id                 | int(11)                    | Part of KEY (store\_id)          |
| parent\_id                | int(11)                    | Part of KEY (parent\_id)         |
| client\_type              | enum('TILL','STR\_SERVER') | None                             |
| is\_active                | tinyint(1)                 | None                             |
| client\_version\_num      | varchar(100)               | None                             |
| compile\_time             | varchar(255)               | None                             |
| svn\_revision             | varchar(255)               | None                             |
| established\_on           | date                       | None                             |
| mac\_addr                 | varchar(17)                | None                             |
| store\_server\_prefix     | varchar(10)                | None                             |
| disable\_mac\_addr\_check | tinyint(1)                 | None                             |
| is\_weblogin\_enabled     | tinyint(1)                 | None                             |
| last\_login               | datetime                   | None                             |
| last\_updated\_by         | int(11)                    | None                             |
| last\_updated\_on         | datetime                   | None                             |
| zone\_id                  | int(11)                    | None                             |
| auto\_update\_time        | timestamp                  | Part of KEY (auto\_update\_time) |
| is\_billable              | tinyint(1)                 | None                             |

## Table: `filter_change_log`


| Column Name         | Data Type | Index                         |
| ------------------- | --------- | ----------------------------- |
| id                  | int(11)   | Part of PRIMARY KEY (id)      |
| time                | datetime  | None                          |
| audience\_group\_id | int(11)   | None                          |
| campaign\_id        | int(11)   | None                          |
| org\_id             | int(11)   | Part of PRIMARY KEY (org\_id) |
| status              | int(1)    | None                          |

## Table: `objective_mapping`


| Column Name         | Data Type  | Index                                    |
| ------------------- | ---------- | ---------------------------------------- |
| id                  | int(11)    | Part of PRIMARY KEY (id)                 |
| org\_id             | int(11)    | Part of UNIQUE KEY (org\_id)             |
| objective\_type\_id | int(11)    | Part of UNIQUE KEY (objective\_type\_id) |
| campaign\_id        | int(11)    | Part of UNIQUE KEY (campaign\_id)        |
| updated\_by         | int(11)    | None                                     |
| is\_active          | tinyint(1) | None                                     |
| created\_date       | datetime   | None                                     |
| auto\_update\_time  | timestamp  | None                                     |

## Table: `incentive_points_properties`


| Column Name              | Data Type | Index                         |
| ------------------------ | --------- | ----------------------------- |
| id                       | int(11)   | Part of PRIMARY KEY (id)      |
| org\_id                  | int(11)   | Part of PRIMARY KEY (org\_id) |
| allocation\_strategy\_id | int(11)   | None                          |
| expiry\_strategy\_id     | int(11)   | None                          |
| program\_id              | int(11)   | None                          |
| last\_updated            | datetime  | None                          |
| auto\_update\_time       | timestamp | None                          |

## Table: `not_issued_offers`


| Column Name     | Data Type    | Index                         |
| --------------- | ------------ | ----------------------------- |
| id              | int(11)      | Part of PRIMARY KEY (id)      |
| org\_id         | int(11)      | Part of PRIMARY KEY (org\_id) |
| vch\_series\_id | int(11)      | None                          |
| user\_id        | bigint(20)   | None                          |
| bill\_number    | varchar(20)  | None                          |
| rule\_map       | varchar(255) | None                          |
| last\_updated   | timestamp    | None                          |

## Table: `group_template_filters`


| Column Name          | Data Type   | Index                             |
| -------------------- | ----------- | --------------------------------- |
| id                   | int(11)     | Part of PRIMARY KEY (id)          |
| group\_template\_id  | int(11)     | Part of KEY (group\_template\_id) |
| org\_id              | int(11)     | Part of KEY (org\_id)             |
| params               | mediumtext  | None                              |
| filter\_type         | varchar(20) | None                              |
| filter\_explaination | mediumtext  | None                              |
| custom\_ids          | int(11)     | None                              |

## Table: `campaigns_base`


| Column Name                | Data Type                   | Index                             |
| -------------------------- | --------------------------- | --------------------------------- |
| id                         | int(11)                     | Part of PRIMARY KEY (id)          |
| name                       | varchar(50)                 | None                              |
| ga\_name                   | varchar(255)                | None                              |
| ga\_source\_name           | varchar(255)                | None                              |
| roi\_report\_type          | varchar(255)                | None                              |
| campaign\_roi\_type\_id    | int(11)                     | None                              |
| description                | varchar(255)                | None                              |
| org\_id                    | bigint(20)                  | Part of KEY (org\_id)             |
| type                       | varchar(20)                 | None                              |
| start\_date                | datetime                    | None                              |
| end\_date                  | datetime                    | None                              |
| issue\_vouchers            | tinyint(1)                  | None                              |
| voucher\_series\_id        | varchar(600)                | Part of KEY (voucher\_series\_id) |
| points\_properties\_id     | int(11)                     | None                              |
| created\_by                | bigint(20)                  | None                              |
| active                     | tinyint(4)                  | None                              |
| is\_ga\_enabled            | tinyint(1)                  | None                              |
| is\_test\_control\_enabled | tinyint(1)                  | None                              |
| created                    | datetime                    | None                              |
| modified                   | timestamp                   | Part of KEY (modified)            |
| test\_control              | enum('ORG','CUSTOM','SKIP') | None                              |
| test\_percentage           | int(11)                     | None                              |
| additional\_properties     | mediumtext                  | None                              |
| is\_migrated               | tinyint(1)                  | None                              |

## Table: `rules_family`


| Column Name   | Data Type    | Index                         |
| ------------- | ------------ | ----------------------------- |
| id            | int(11)      | Part of PRIMARY KEY (id)      |
| name          | varchar(20)  | None                          |
| org\_id       | bigint(20)   | Part of PRIMARY KEY (org\_id) |
| created\_time | datetime     | None                          |
| created\_by   | int(11)      | None                          |
| is\_valid     | tinyint(1)   | None                          |
| expiry\_date  | datetime     | None                          |
| description   | varchar(255) | None                          |

## Table: `recommendation_mapping`


| Column Name              | Data Type  | Index |
| ------------------------ | ---------- | ----- |
| org\_id                  | bigint(20) | None  |
| campaign\_id             | bigint(20) | None  |
| recommendation\_plan\_id | bigint(20) | None  |
| num\_of\_recommendations | tinyint(3) | None  |
| num\_of\_attributes      | tinyint(3) | None  |

## Table: `filter_user_mapping`


| Column Name   | Data Type    | Index                             |
| ------------- | ------------ | --------------------------------- |
| id            | int(20)      | Part of PRIMARY KEY (id)          |
| org\_id       | int(11)      | Part of KEY (org\_id)             |
| user\_id      | int(20)      | Part of KEY (user\_id)            |
| filter\_type  | varchar(100) | Part of UNIQUE KEY (filter\_type) |
| is\_favorite  | tinyint(1)   | Part of KEY (is\_favorite)        |
| last\_updated | timestamp    | None                              |

## Table: `incentive_meta_details`


| Column Name        | Data Type                         | Index                                |
| ------------------ | --------------------------------- | ------------------------------------ |
| id                 | int(11)                           | Part of PRIMARY KEY (id)             |
| incentive\_type    | enum('POINTS','COUPON','GENERIC') | Part of UNIQUE KEY (incentive\_type) |
| last\_updated      | datetime                          | None                                 |
| auto\_update\_time | timestamp                         | None                                 |
| label              | varchar(100)                      | None                                 |

## Table: `campaign_reminder_strategies`


| Column Name           | Data Type    | Index                    |
| --------------------- | ------------ | ------------------------ |
| id                    | int(11)      | Part of PRIMARY KEY (id) |
| name                  | varchar(100) | None                     |
| contacted\_filter\_id | int(11)      | None                     |
| responder\_filter\_id | int(11)      | None                     |
| description           | varchar(500) | None                     |
| is\_deleted           | bit(1)       | None                     |
| auto\_update\_time    | timestamp    | None                     |

## Table: `ftp_audience_upload`


| Column Name         | Data Type                                                       | Index                         |
| ------------------- | --------------------------------------------------------------- | ----------------------------- |
| id                  | int(11)                                                         | Part of PRIMARY KEY (id)      |
| org\_id             | int(11)                                                         | Part of PRIMARY KEY (org\_id) |
| campaign\_id        | int(11)                                                         | None                          |
| group\_name         | varchar(300)                                                    | None                          |
| folder              | varchar(300)                                                    | None                          |
| file                | varchar(300)                                                    | None                          |
| custom\_tags        | varchar(300)                                                    | None                          |
| status              | enum('OPEN','COPYING','COPIED','PROCESSING','EXECUTED','ERROR') | Part of KEY (status)          |
| confirm             | tinyint(4)                                                      | None                          |
| last\_updated\_by   | int(11)                                                         | None                          |
| last\_updated\_time | timestamp                                                       | None                          |
| custom\_tag\_count  | int(11)                                                         | None                          |
| import\_type        | enum('mobile','email','userid')                                 | None                          |

## Table: `objective_meta_details`


| Column Name           | Data Type    | Index                    |
| --------------------- | ------------ | ------------------------ |
| id                    | int(11)      | Part of PRIMARY KEY (id) |
| objective\_type       | varchar(100) | None                     |
| objective\_parent\_id | int(11)      | None                     |
| help\_text            | text         | None                     |
| input\_type           | varchar(20)  | None                     |
| is\_active            | tinyint(4)   | None                     |

## Table: `group_templates`


| Column Name | Data Type   | Index                        |
| ----------- | ----------- | ---------------------------- |
| id          | int(11)     | Part of PRIMARY KEY (id)     |
| org\_id     | int(11)     | Part of UNIQUE KEY (org\_id) |
| name        | varchar(25) | Part of UNIQUE KEY (name)    |

## Table: `upload_files_history`


| Column Name       | Data Type                                             | Index                         |
| ----------------- | ----------------------------------------------------- | ----------------------------- |
| id                | int(11)                                               | Part of PRIMARY KEY (id)      |
| params            | mediumtext                                            | None                          |
| org\_id           | int(11)                                               | Part of PRIMARY KEY (org\_id) |
| campaign\_id      | int(10)                                               | None                          |
| token             | varchar(20)                                           | Part of KEY (token)           |
| group\_id         | int(10)                                               | None                          |
| group\_name       | varchar(255)                                          | None                          |
| upload\_type      | enum('sticky\_group','campaign\_users','test\_group') | None                          |
| import\_type      | enum('mobile','email','userid','externalid')          | None                          |
| temp\_table\_name | varchar(100)                                          | None                          |
| added\_on         | timestamp                                             | None                          |

## Table: `rule_simulation_stats`


| Column Name    | Data Type  | Index                         |
| -------------- | ---------- | ----------------------------- |
| id             | int(11)    | Part of PRIMARY KEY (id)      |
| date           | date       | None                          |
| org\_id        | int(11)    | Part of PRIMARY KEY (org\_id) |
| start\_date    | date       | None                          |
| end\_date      | date       | None                          |
| file\_id       | int(11)    | None                          |
| user\_id       | int(11)    | None                          |
| response\_time | double     | None                          |
| success        | tinyint(1) | None                          |
| error\_msg     | mediumtext | None                          |

## Table: `campaign_roi_types`


| Column Name        | Data Type    | Index                            |
| ------------------ | ------------ | -------------------------------- |
| id                 | int(11)      | Part of PRIMARY KEY (id)         |
| name               | varchar(50)  | None                             |
| desc               | varchar(255) | None                             |
| is\_recurring      | tinyint(1)   | None                             |
| auto\_update\_time | timestamp    | Part of KEY (auto\_update\_time) |

## Table: `rules`


| Column Name       | Data Type    | Index                    |
| ----------------- | ------------ | ------------------------ |
| id                | int(11)      | Part of PRIMARY KEY (id) |
| rule\_text        | mediumtext   | None                     |
| parent            | varchar(255) | None                     |
| created\_time     | datetime     | None                     |
| created\_by       | int(11)      | None                     |
| is\_valid         | tinyint(1)   | None                     |
| expiry\_date      | datetime     | None                     |
| rules\_family\_id | int(11)      | None                     |
| weight            | float        | None                     |

## Table: `ftp_settings`


| Column Name         | Data Type    | Index                        |
| ------------------- | ------------ | ---------------------------- |
| id                  | int(11)      | Part of PRIMARY KEY (id)     |
| org\_id             | int(11)      | Part of UNIQUE KEY (org\_id) |
| server\_name        | varchar(300) | None                         |
| port                | int(11)      | None                         |
| user\_name          | varchar(300) | None                         |
| password            | varchar(300) | None                         |
| last\_updated\_by   | int(11)      | None                         |
| last\_updated\_time | timestamp    | None                         |

## Table: `campaign_reminder_filters`


| Column Name        | Data Type    | Index                    |
| ------------------ | ------------ | ------------------------ |
| id                 | int(11)      | Part of PRIMARY KEY (id) |
| type               | varchar(100) | None                     |
| params             | longtext     | None                     |
| params\_spark      | longtext     | None                     |
| auto\_update\_time | timestamp    | None                     |

## Table: `bulk_sms_campaign`


| Column Name       | Data Type  | Index                              |
| ----------------- | ---------- | ---------------------------------- |
| campaign\_id      | bigint(20) | Part of PRIMARY KEY (campaign\_id) |
| message\_template | text       | None                               |

## Table: `msging_default_values`


| Column Name  | Data Type   | Index                            |
| ------------ | ----------- | -------------------------------- |
| org\_id      | int(11)     | Part of UNIQUE KEY (org\_id)     |
| field\_name  | varchar(30) | Part of UNIQUE KEY (field\_name) |
| field\_value | varchar(30) | None                             |

## Table: `coupon_upload_history`


| Column Name       | Data Type               | Index                         |
| ----------------- | ----------------------- | ----------------------------- |
| id                | int(11)                 | Part of PRIMARY KEY (id)      |
| params            | mediumtext              | None                          |
| campaign\_id      | int(10)                 | None                          |
| vsid              | int(10)                 | None                          |
| import\_type      | enum('mobile','userid') | None                          |
| temp\_table\_name | varchar(100)            | None                          |
| org\_id           | int(20)                 | Part of PRIMARY KEY (org\_id) |
| uploaded\_by      | int(20)                 | None                          |
| added\_on         | timestamp               | None                          |

## Table: `campaign_referrals`


| Column Name             | Data Type    | Index                             |
| ----------------------- | ------------ | --------------------------------- |
| id                      | bigint(20)   | Part of PRIMARY KEY (id)          |
| org\_id                 | bigint(20)   | Part of KEY (org\_id)             |
| store\_id               | bigint(20)   | None                              |
| voucher\_series\_id     | bigint(20)   | Part of KEY (voucher\_series\_id) |
| referrer\_id            | bigint(20)   | Part of KEY (referrer\_id)        |
| voucher\_id             | bigint(20)   | None                              |
| referee\_name           | varchar(100) | None                              |
| referee\_mobile         | varchar(13)  | None                              |
| referee\_email          | varchar(50)  | None                              |
| voucher\_redemption\_id | int(11)      | None                              |
| created\_on             | datetime     | None                              |
| last\_modified          | datetime     | None                              |
| num\_reminders          | smallint(6)  | None                              |
| referee\_id             | bigint(20)   | None                              |
| last\_reminded          | datetime     | None                              |

## Table: `camp_entity_ou_mapping`


| Column Name        | Data Type   | Index                             |
| ------------------ | ----------- | --------------------------------- |
| id                 | int(11)     | Part of PRIMARY KEY (id)          |
| org\_id            | int(11)     | Part of UNIQUE KEY (org\_id)      |
| type               | varchar(45) | Part of UNIQUE KEY (type)         |
| ref\_id            | int(11)     | Part of UNIQUE KEY (ref\_id)      |
| entity\_type       | varchar(45) | Part of UNIQUE KEY (entity\_type) |
| entity\_ids        | text        | None                              |
| entered\_by        | int(11)     | None                              |
| auto\_update\_time | timestamp   | Part of KEY (auto\_update\_time)  |

## Table: `survey_mapping`


| Column Name       | Data Type  | Index |
| ----------------- | ---------- | ----- |
| org\_id           | bigint(20) | None  |
| campaign\_id      | bigint(20) | None  |
| ref\_campaign\_id | bigint(20) | None  |

## Table: `voucher_expiry_reminders`


| Column Name                | Data Type    | Index                             |
| -------------------------- | ------------ | --------------------------------- |
| id                         | int(11)      | Part of PRIMARY KEY (id)          |
| org\_id                    | int(11)      | Part of KEY (org\_id)             |
| voucher\_series\_id        | int(11)      | Part of KEY (voucher\_series\_id) |
| campaign\_id               | int(11)      | None                              |
| is\_reminder\_set          | tinyint(1)   | None                              |
| alert\_day\_before\_expiry | int(5)       | None                              |
| group\_id                  | int(11)      | None                              |
| reminder\_sms              | mediumtext   | None                              |
| reminder\_email            | longtext     | None                              |
| message\_id                | varchar(100) | None                              |
| params                     | mediumtext   | None                              |

## Table: `rule_attributes`


| Column Name       | Data Type               | Index                    |
| ----------------- | ----------------------- | ------------------------ |
| id                | int(11)                 | Part of PRIMARY KEY (id) |
| class             | varchar(255)            | None                     |
| description       | varchar(255)            | None                     |
| valid\_specifiers | varchar(255)            | None                     |
| attribute\_type   | enum('STRING','NUMBER') | None                     |
| attribute         | varchar(255)            | None                     |
| is\_valid         | tinyint(1)              | None                     |

## Table: `referral_mapping`


| Column Name       | Data Type  | Index |
| ----------------- | ---------- | ----- |
| org\_id           | bigint(20) | None  |
| campaign\_id      | bigint(20) | None  |
| ref\_campaign\_id | bigint(20) | None  |

## Table: `selection_filter`


| Column Name          | Data Type    | Index                             |
| -------------------- | ------------ | --------------------------------- |
| id                   | int(11)      | Part of PRIMARY KEY (id)          |
| audience\_group\_id  | int(11)      | Part of KEY (audience\_group\_id) |
| org\_id              | bigint(20)   | Part of PRIMARY KEY (org\_id)     |
| params               | longtext     | None                              |
| filter\_type         | varchar(100) | None                              |
| filter\_explaination | longtext     | None                              |
| no\_of\_customers    | int(11)      | None                              |
| custom\_ids          | varchar(200) | None                              |

## Table: `incentive_generic_meta_details`


| Column Name              | Data Type    | Index                    |
| ------------------------ | ------------ | ------------------------ |
| id                       | int(11)      | Part of PRIMARY KEY (id) |
| generic\_objective\_type | varchar(100) | None                     |
| help\_text               | text         | None                     |
| is\_active               | tinyint(4)   | None                     |

## Table: `campaign_tags`


| Column Name        | Data Type | Index                         |
| ------------------ | --------- | ----------------------------- |
| id                 | int(11)   | Part of PRIMARY KEY (id)      |
| org\_id            | int(11)   | Part of PRIMARY KEY (org\_id) |
| campaign\_id       | int(11)   | None                          |
| updated\_by        | int(11)   | None                          |
| tags               | text      | None                          |
| created\_date      | datetime  | None                          |
| auto\_update\_time | timestamp | None                          |

## Table: `audience_groups`


| Column Name        | Data Type                            | Index                            |
| ------------------ | ------------------------------------ | -------------------------------- |
| id                 | int(11)                              | Part of PRIMARY KEY (id)         |
| campaign\_id       | int(11)                              | Part of KEY (campaign\_id)       |
| org\_id            | int(11)                              | Part of KEY (org\_id)            |
| audience\_provider | varchar(255)                         | Part of KEY (audience\_provider) |
| params             | longtext                             | None                             |
| type               | enum('LOYALTY','NON\_LOYALTY','ALL') | Part of KEY (type)               |

## Table: `rule_stats`


| Column Name         | Data Type    | Index                         |
| ------------------- | ------------ | ----------------------------- |
| id                  | int(11)      | Part of PRIMARY KEY (id)      |
| rule\_id            | int(11)      | None                          |
| voucher\_series\_id | int(11)      | None                          |
| org\_id             | int(11)      | Part of PRIMARY KEY (org\_id) |
| store\_id           | int(11)      | None                          |
| user\_id            | int(11)      | None                          |
| issued              | tinyint(1)   | None                          |
| created\_time       | datetime     | None                          |
| bill\_number        | varchar(100) | None                          |

## Table: `incentive_mapping`


| Column Name               | Data Type | Index                         |
| ------------------------- | --------- | ----------------------------- |
| id                        | int(11)   | Part of PRIMARY KEY (id)      |
| org\_id                   | int(11)   | Part of PRIMARY KEY (org\_id) |
| incentive\_type\_id       | int(11)   | None                          |
| incentive\_properties\_id | int(11)   | None                          |
| campaign\_id              | int(11)   | None                          |
| created\_date             | datetime  | None                          |
| last\_updated             | datetime  | None                          |
| auto\_update\_time        | timestamp | None                          |
| message\_queue\_id        | int(11)   | None                          |

## Table: `loyalty`


| Column Name           | Data Type                                                                                                                                                                                                                                 | Index                             |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------- |
| id                    | bigint(20)                                                                                                                                                                                                                                | Part of PRIMARY KEY (id)          |
| publisher\_id         | bigint(20)                                                                                                                                                                                                                                | Part of KEY (publisher\_id)       |
| user\_id              | bigint(20)                                                                                                                                                                                                                                | Part of UNIQUE KEY (user\_id)     |
| loyalty\_points       | mediumint(9)                                                                                                                                                                                                                              | None                              |
| slab\_number          | int(11)                                                                                                                                                                                                                                   | None                              |
| slab\_name            | varchar(20)                                                                                                                                                                                                                               | None                              |
| lifetime\_points      | bigint(20)                                                                                                                                                                                                                                | None                              |
| lifetime\_purchases   | decimal(20,3)                                                                                                                                                                                                                             | None                              |
| external\_id          | varchar(250)                                                                                                                                                                                                                              | Part of UNIQUE KEY (external\_id) |
| joined                | datetime                                                                                                                                                                                                                                  | Part of KEY (joined)              |
| registered\_by        | bigint(20)                                                                                                                                                                                                                                | Part of KEY (registered\_by)      |
| last\_updated\_by     | bigint(20)                                                                                                                                                                                                                                | None                              |
| last\_updated         | datetime                                                                                                                                                                                                                                  | None                              |
| last\_statement\_sent | datetime                                                                                                                                                                                                                                  | None                              |
| counter\_id           | bigint(20)                                                                                                                                                                                                                                | None                              |
| base\_store           | int(11)                                                                                                                                                                                                                                   | None                              |
| auto\_update\_time    | timestamp                                                                                                                                                                                                                                 | Part of KEY (auto\_update\_time)  |
| loyalty\_status       | enum('NORMAL','INTERNAL','FRAUD','TEST','OTHER','OTHER2','OTHER3')                                                                                                                                                                        | None                              |
| type                  | enum('loyalty','non\_loyalty')                                                                                                                                                                                                            | None                              |
| source                | enum('instore','e-comm','newsletter','campaigns','NCA','WECHAT','MARTJACK','WEB\_ENGAGE','FACEBOOK','TMALL','OTHERS','WEBSITE','TAOBAO','JD','ECOMMERCE','KAOLA','PINDUODUO','SUNING','GLOBAL\_SCANNER','XIAOHONGSHU','MAPP\_SDK','ZALO') | None                              |
| conversion\_date      | datetime                                                                                                                                                                                                                                  | None                              |

## Table: `clusters_users_assignment`


| Column Name        | Data Type  | Index                            |
| ------------------ | ---------- | -------------------------------- |
| id                 | bigint(20) | Part of PRIMARY KEY (id)         |
| org\_id            | int(11)    | Part of KEY (org\_id)            |
| user\_id           | bigint(20) | Part of UNIQUE KEY (user\_id)    |
| cluster\_id        | int(11)    | Part of KEY (cluster\_id)        |
| cluster\_value\_id | bigint(20) | Part of KEY (cluster\_value\_id) |
| added\_by          | bigint(20) | None                             |
| added\_on          | datetime   | Part of KEY (added\_on)          |
| last\_updated      | timestamp  | Part of KEY (last\_updated)      |

## Table: `microsite_mapping`


| Column Name   | Data Type  | Index                              |
| ------------- | ---------- | ---------------------------------- |
| org\_id       | bigint(20) | Part of PRIMARY KEY (org\_id)      |
| microsite\_id | bigint(20) | Part of UNIQUE KEY (microsite\_id) |
| created\_by   | bigint(20) | None                               |
| created\_time | timestamp  | None                               |

## Table: `reports_by_org`


| Column Name     | Data Type | Index                            |
| --------------- | --------- | -------------------------------- |
| org\_id         | int(11)   | Part of PRIMARY KEY (org\_id)    |
| report\_id      | int(11)   | Part of PRIMARY KEY (report\_id) |
| print\_enabled  | int(1)    | None                             |
| export\_enabled | int(1)    | None                             |

## Table: `lead_reasons`


| Column Name        | Data Type   | Index                            |
| ------------------ | ----------- | -------------------------------- |
| id                 | int(11)     | Part of PRIMARY KEY (id)         |
| org\_id            | bigint(20)  | Part of PRIMARY KEY (org\_id)    |
| reason             | varchar(64) | None                             |
| auto\_update\_time | timestamp   | Part of KEY (auto\_update\_time) |

## Table: `stores_zbk`


| Column Name           | Data Type    | Index                           |
| --------------------- | ------------ | ------------------------------- |
| store\_id             | int(11)      | Part of PRIMARY KEY (store\_id) |
| tag                   | varchar(5)   | Part of KEY (tag)               |
| username              | varchar(50)  | Part of KEY (username)          |
| firstname             | varchar(100) | None                            |
| lastname              | varchar(100) | None                            |
| passwordhash          | varchar(255) | None                            |
| secretq               | varchar(255) | None                            |
| secreta               | varchar(100) | None                            |
| email                 | varchar(50)  | None                            |
| mobile                | varchar(13)  | None                            |
| last\_login           | datetime     | None                            |
| org\_id               | bigint(20)   | Part of KEY (org\_id)           |
| is\_inactive          | tinyint(1)   | None                            |
| password\_validity    | timestamp    | None                            |
| replace\_inactive\_by | int(11)      | None                            |

## Table: `users`


| Column Name        | Data Type                                                                                                                                                                                                                                 | Index                            |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- |
| id                 | int(11)                                                                                                                                                                                                                                   | Part of PRIMARY KEY (id)         |
| tag                | varchar(5)                                                                                                                                                                                                                                | Part of KEY (tag)                |
| username           | varchar(250)                                                                                                                                                                                                                              | Part of KEY (username)           |
| firstname          | varchar(100)                                                                                                                                                                                                                              | None                             |
| lastname           | varchar(100)                                                                                                                                                                                                                              | None                             |
| passwordhash       | varchar(255)                                                                                                                                                                                                                              | None                             |
| secretq            | varchar(255)                                                                                                                                                                                                                              | None                             |
| secreta            | varchar(100)                                                                                                                                                                                                                              | None                             |
| email              | varchar(255)                                                                                                                                                                                                                              | Part of UNIQUE KEY (email)       |
| mobile             | varchar(255)                                                                                                                                                                                                                              | Part of UNIQUE KEY (mobile)      |
| last\_login        | datetime                                                                                                                                                                                                                                  | None                             |
| org\_id            | bigint(20)                                                                                                                                                                                                                                | Part of KEY (org\_id)            |
| is\_inactive       | tinyint(1)                                                                                                                                                                                                                                | None                             |
| auto\_update\_time | timestamp                                                                                                                                                                                                                                 | Part of KEY (auto\_update\_time) |
| source             | enum('instore','e-comm','newsletter','campaigns','NCA','WECHAT','MARTJACK','WEB\_ENGAGE','FACEBOOK','TMALL','OTHERS','WEBSITE','TAOBAO','JD','ECOMMERCE','KAOLA','PINDUODUO','SUNING','GLOBAL\_SCANNER','XIAOHONGSHU','MAPP\_SDK','ZALO') | None                             |

## Table: `cards`


| Column Name        | Data Type    | Index                            |
| ------------------ | ------------ | -------------------------------- |
| id                 | int(11)      | Part of PRIMARY KEY (id)         |
| org\_id            | int(11)      | Part of KEY (org\_id)            |
| number             | varchar(150) | Part of UNIQUE KEY (number)      |
| external\_id       | varchar(150) | Part of KEY (external\_id)       |
| series\_id         | int(11)      | None                             |
| is\_active         | tinyint(1)   | None                             |
| is\_generated      | tinyint(1)   | None                             |
| auto\_update\_time | timestamp    | Part of KEY (auto\_update\_time) |
| last\_updated\_by  | int(11)      | None                             |
| created\_on        | datetime     | None                             |
| last\_updated\_on  | datetime     | None                             |
| user\_id           | int(11)      | Part of KEY (user\_id)           |
| created\_by        | int(11)      | None                             |
| issued\_date       | datetime     | None                             |
| expiry\_date       | datetime     | None                             |

## Table: `tracker_info`


| Column Name                     | Data Type                               | Index                    |
| ------------------------------- | --------------------------------------- | ------------------------ |
| id                              | bigint(20)                              | Part of PRIMARY KEY (id) |
| org\_id                         | bigint(20)                              | Part of KEY (org\_id)    |
| entity                          | varchar(30)                             | None                     |
| mode                            | enum('MOVING\_WINDOW','CYCLIC\_WINDOW') | None                     |
| tracker\_name                   | mediumtext                              | None                     |
| max\_success\_signal            | int(11)                                 | None                     |
| no\_of\_success\_signalled      | int(11)                                 | None                     |
| params\_json                    | mediumtext                              | None                     |
| custom\_name                    | varchar(255)                            | None                     |
| expires\_on                     | date                                    | None                     |
| send\_milestone\_info           | tinyint(1)                              | None                     |
| milestone\_not\_found\_template | varchar(255)                            | None                     |

## Table: `mlm_referrals`


| Column Name         | Data Type   | Index                         |
| ------------------- | ----------- | ----------------------------- |
| id                  | bigint(20)  | Part of PRIMARY KEY (id)      |
| org\_id             | bigint(20)  | Part of KEY (org\_id)         |
| referrer\_id        | bigint(20)  | Part of KEY (referrer\_id)    |
| referee\_mobile     | varchar(15) | Part of KEY (referee\_mobile) |
| referee\_email      | varchar(55) | None                          |
| referral\_date      | datetime    | None                          |
| num\_reminders      | int(11)     | None                          |
| joined\_date        | datetime    | None                          |
| referred\_at\_store | bigint(20)  | None                          |
| referee\_id\_joined | bigint(20)  | None                          |
| last\_reminded      | datetime    | None                          |

## Table: `clusters`


| Column Name           | Data Type                                   | Index                        |
| --------------------- | ------------------------------------------- | ---------------------------- |
| id                    | int(11)                                     | Part of PRIMARY KEY (id)     |
| org\_id               | int(11)                                     | Part of UNIQUE KEY (org\_id) |
| name                  | varchar(255)                                | Part of UNIQUE KEY (name)    |
| type                  | longtext                                    | None                         |
| value\_type           | mediumtext                                  | None                         |
| datatype\_for\_client | enum('String','Integer','Boolean','Double') | None                         |
| sync\_to\_client      | tinyint(1)                                  | None                         |
| params\_json          | longtext                                    | None                         |
| created\_on           | datetime                                    | None                         |

## Table: `validation_pin`


| Column Name   | Data Type   | Index                         |
| ------------- | ----------- | ----------------------------- |
| id            | int(11)     | Part of PRIMARY KEY (id)      |
| org\_id       | int(11)     | Part of PRIMARY KEY (org\_id) |
| store\_id     | int(11)     | None                          |
| mobile        | varchar(15) | None                          |
| email         | varchar(50) | None                          |
| pin           | varchar(20) | None                          |
| created\_time | datetime    | None                          |
| validity      | smallint(6) | None                          |
| is\_valid     | tinyint(1)  | None                          |

## Table: `fleet_permission_meta`


| Column Name        | Data Type    | Index                    |
| ------------------ | ------------ | ------------------------ |
| id                 | int(11)      | Part of PRIMARY KEY (id) |
| name               | varchar(100) | Part of KEY (name)       |
| label              | varchar(100) | None                     |
| modules            | varchar(250) | None                     |
| default\_value     | tinyint(1)   | None                     |
| is\_active         | tinyint(1)   | None                     |
| created\_on        | timestamp    | None                     |
| created\_by        | int(11)      | None                     |
| updated\_by        | int(11)      | None                     |
| auto\_update\_time | timestamp    | None                     |

## Table: `reports_base`


| Column Name         | Data Type   | Index                    |
| ------------------- | ----------- | ------------------------ |
| id                  | int(11)     | Part of PRIMARY KEY (id) |
| report\_name        | varchar(30) | None                     |
| report\_description | mediumtext  | None                     |
| report\_code        | varchar(30) | None                     |

## Table: `leads`


| Column Name        | Data Type                                      | Index                            |
| ------------------ | ---------------------------------------------- | -------------------------------- |
| id                 | int(11)                                        | Part of PRIMARY KEY (id)         |
| org\_id            | bigint(20)                                     | Part of KEY (org\_id)            |
| user\_id           | bigint(20)                                     | Part of KEY (user\_id)           |
| type               | enum('SKU','CATEGORY','BRAND','CUSTOM')        | None                             |
| lead\_for          | mediumtext                                     | None                             |
| created\_date      | timestamp                                      | None                             |
| created\_by        | bigint(20)                                     | None                             |
| updated\_date      | timestamp                                      | None                             |
| updated\_by        | bigint(20)                                     | None                             |
| status             | enum('OPEN','WON','LOST','ON\_HOLD','DELETED') | Part of KEY (status)             |
| sub\_status\_id    | int(11)                                        | None                             |
| last\_follow\_up   | timestamp                                      | None                             |
| next\_follow\_up   | timestamp                                      | None                             |
| owner              | varchar(250)                                   | Part of KEY (owner)              |
| auto\_update\_time | timestamp                                      | Part of KEY (auto\_update\_time) |
| org\_source\_id    | int(11)                                        | None                             |

## Table: `fleet_group_mapping`


| Column Name         | Data Type  | Index                          |
| ------------------- | ---------- | ------------------------------ |
| id                  | bigint(20) | Part of PRIMARY KEY (id)       |
| org\_id             | int(11)    | Part of KEY (org\_id)          |
| fleet\_user\_id     | bigint(20) | Part of KEY (fleet\_user\_id)  |
| is\_primary\_member | int(1)     | None                           |
| fleet\_group\_id    | int(11)    | Part of KEY (fleet\_group\_id) |
| is\_active          | int(1)     | None                           |
| is\_default         | int(1)     | None                           |
| created\_on         | timestamp  | None                           |
| created\_by         | int(11)    | None                           |
| auto\_update\_time  | timestamp  | None                           |

## Table: `client_cron_entries`


| Column Name               | Data Type              | Index                    |
| ------------------------- | ---------------------- | ------------------------ |
| id                        | int(11)                | Part of PRIMARY KEY (id) |
| org\_id                   | int(11)                | Part of KEY (org\_id)    |
| start\_date               | date                   | None                     |
| end\_date                 | date                   | None                     |
| name                      | varchar(255)           | None                     |
| cron\_pattern             | text                   | None                     |
| cron\_type                | enum('SYNC','EXECUTE') | None                     |
| cron\_params              | mediumtext             | None                     |
| enabled\_at\_stores\_json | mediumtext             | None                     |
| created\_by               | bigint(20)             | None                     |
| created\_on               | datetime               | None                     |
| last\_updated\_by         | bigint(20)             | None                     |
| last\_updated\_on         | datetime               | None                     |

## Table: `user_group_activity_log`


| Column Name        | Data Type                | Index                            |
| ------------------ | ------------------------ | -------------------------------- |
| id                 | bigint(20)               | Part of PRIMARY KEY (id)         |
| org\_id            | bigint(20)               | Part of KEY (org\_id)            |
| group\_id          | varchar(50)              | Part of KEY (group\_id)          |
| user\_id           | bigint(20)               | Part of KEY (user\_id)           |
| entity\_type       | enum('REGULAR','RETURN') | Part of KEY (entity\_type)       |
| entity\_id         | bigint(20)               | Part of KEY (entity\_id)         |
| activity\_time     | timestamp                | Part of KEY (activity\_time)     |
| auto\_update\_time | timestamp                | Part of KEY (auto\_update\_time) |
| is\_valid          | int(11)                  | None                             |

## Table: `gc_transaction_log`


| Column Name        | Data Type              | Index                          |
| ------------------ | ---------------------- | ------------------------------ |
| id                 | int(11)                | Part of PRIMARY KEY (id)       |
| card\_id           | int(11)                | Part of KEY (card\_id)         |
| org\_id            | int(11)                | Part of KEY (org\_id)          |
| type               | enum('DEBIT','CREDIT') | Part of UNIQUE KEY (type)      |
| amount             | double                 | Part of UNIQUE KEY (amount)    |
| added\_on          | datetime               | Part of UNIQUE KEY (added\_on) |
| store\_id          | int(11)                | Part of UNIQUE KEY (store\_id) |
| user\_id           | int(11)                | Part of KEY (user\_id)         |
| prev\_value        | double                 | None                           |
| bill\_no           | varchar(20)            | None                           |
| transaction\_id    | int(11)                | None                           |
| is\_valid          | tinyint(1)             | Part of UNIQUE KEY (is\_valid) |
| auto\_update\_time | timestamp              | None                           |

## Table: `not_interested_return_bills_failed_log`


| Column Name                                | Data Type    | Index                                            |
| ------------------------------------------ | ------------ | ------------------------------------------------ |
| id                                         | bigint(20)   | Part of PRIMARY KEY (id)                         |
| org\_id                                    | bigint(20)   | Part of KEY (org\_id)                            |
| loyalty\_not\_interested\_bill\_id         | bigint(20)   | Part of KEY (loyalty\_not\_interested\_bill\_id) |
| parent\_loyalty\_not\_interested\_bill\_id | bigint(20)   | None                                             |
| reason                                     | varchar(200) | None                                             |
| bill\_number                               | varchar(50)  | None                                             |
| amount                                     | float        | None                                             |
| date                                       | datetime     | None                                             |
| type                                       | varchar(20)  | None                                             |
| previous\_till\_id                         | int(11)      | None                                             |
| previous\_bill\_date                       | datetime     | None                                             |
| lineitem\_info                             | longtext     | None                                             |
| entered\_by                                | int(11)      | None                                             |
| added\_on                                  | timestamp    | Part of KEY (added\_on)                          |

## Table: `rules_version`


| Column Name | Data Type   | Index                         |
| ----------- | ----------- | ----------------------------- |
| id          | bigint(20)  | Part of PRIMARY KEY (id)      |
| org\_id     | bigint(20)  | Part of PRIMARY KEY (org\_id) |
| file\_tag   | varchar(30) | None                          |
| version     | int(11)     | None                          |
| file\_id    | bigint(20)  | None                          |

## Table: `clusters_values`


| Column Name | Data Type  | Index                            |
| ----------- | ---------- | -------------------------------- |
| id          | bigint(20) | Part of PRIMARY KEY (id)         |
| org\_id     | int(11)    | Part of UNIQUE KEY (org\_id)     |
| cluster\_id | int(11)    | Part of UNIQUE KEY (cluster\_id) |
| value       | longtext   | None                             |

## Table: `printer_template_file_mapping`


| Column Name   | Data Type                                                  | Index                            |
| ------------- | ---------------------------------------------------------- | -------------------------------- |
| org\_id       | int(11)                                                    | Part of PRIMARY KEY (org\_id)    |
| store\_id     | int(11)                                                    | Part of PRIMARY KEY (store\_id)  |
| file\_id      | int(11)                                                    | None                             |
| created\_by   | int(11)                                                    | None                             |
| file\_type    | enum('bill','dvs\_voucher','campaign\_voucher','customer') | Part of PRIMARY KEY (file\_type) |
| created\_time | timestamp                                                  | None                             |

## Table: `loyalty_tracker`


| Column Name                            | Data Type  | Index                              |
| -------------------------------------- | ---------- | ---------------------------------- |
| id                                     | bigint(20) | Part of PRIMARY KEY (id)           |
| org\_id                                | bigint(20) | Part of UNIQUE KEY (org\_id)       |
| store\_id                              | bigint(20) | Part of UNIQUE KEY (store\_id)     |
| num\_bills                             | int(11)    | None                               |
| tracker\_date                          | date       | Part of UNIQUE KEY (tracker\_date) |
| sales                                  | float      | None                               |
| footfall\_count                        | int(11)    | None                               |
| captured\_regular\_bills               | int(11)    | None                               |
| captured\_not\_interested\_bills       | int(11)    | None                               |
| captured\_enter\_later\_bills          | int(11)    | None                               |
| captured\_pending\_enter\_later\_bills | int(11)    | None                               |

## Table: `entity_status_label_actions`


| Column Name   | Data Type   | Index                    |
| ------------- | ----------- | ------------------------ |
| id            | int(11)     | Part of PRIMARY KEY (id) |
| org\_id       | int(11)     | Part of KEY (org\_id)    |
| action\_code  | varchar(50) | None                     |
| action\_value | tinyint(1)  | None                     |
| label\_id     | int(11)     | Part of KEY (label\_id)  |
| is\_active    | tinyint(1)  | Part of KEY (is\_active) |
| created\_on   | datetime    | None                     |
| updated\_on   | timestamp   | None                     |

## Table: `fileupload_ftp_mapping`


| Column Name                    | Data Type    | Index                    |
| ------------------------------ | ------------ | ------------------------ |
| id                             | bigint(20)   | Part of PRIMARY KEY (id) |
| org\_id                        | bigint(20)   | Part of KEY (org\_id)    |
| file\_id                       | bigint(20)   | Part of KEY (file\_id)   |
| remote\_folder\_absolute\_path | varchar(150) | None                     |
| remote\_folder\_path           | varchar(150) | None                     |
| url                            | varchar(150) | None                     |
| uploaded\_on                   | datetime     | None                     |
| uploaded\_by                   | bigint(20)   | None                     |

## Table: `card_generation_config`


| Column Name        | Data Type                  | Index                    |
| ------------------ | -------------------------- | ------------------------ |
| id                 | int(11)                    | Part of PRIMARY KEY (id) |
| org\_id            | int(11)                    | Part of KEY (org\_id)    |
| series\_id         | int(11)                    | Part of KEY (series\_id) |
| prefix             | varchar(50)                | Part of KEY (prefix)     |
| suffix             | varchar(50)                | Part of KEY (suffix)     |
| offset             | varchar(150)               | None                     |
| length             | int(5)                     | Part of KEY (length)     |
| is\_active         | tinyint(1)                 | None                     |
| auto\_update\_time | timestamp                  | None                     |
| last\_updated\_by  | int(11)                    | None                     |
| last\_updated\_on  | datetime                   | None                     |
| type               | enum('DEFAULT','LUHNAlGO') | None                     |

## Table: `slab_upgrade_log`


| Column Name            | Data Type   | Index                            |
| ---------------------- | ----------- | -------------------------------- |
| id                     | bigint(20)  | Part of PRIMARY KEY (id)         |
| user\_id               | bigint(20)  | Part of KEY (user\_id)           |
| org\_id                | bigint(20)  | Part of KEY (org\_id)            |
| loyalty\_id            | bigint(20)  | Part of KEY (loyalty\_id)        |
| from\_slab\_name       | varchar(50) | None                             |
| to\_slab\_name         | varchar(50) | None                             |
| upgrade\_bonus\_points | int(11)     | None                             |
| ref\_bill\_number      | varchar(50) | None                             |
| upgraded\_by           | bigint(20)  | None                             |
| upgrade\_time          | datetime    | None                             |
| notes                  | varchar(55) | None                             |
| auto\_update\_time     | timestamp   | Part of KEY (auto\_update\_time) |

## Table: `lead_owner_changelog`


| Column Name        | Data Type    | Index                            |
| ------------------ | ------------ | -------------------------------- |
| id                 | bigint(20)   | Part of PRIMARY KEY (id)         |
| org\_id            | bigint(20)   | Part of KEY (org\_id)            |
| lead\_id           | bigint(20)   | Part of KEY (lead\_id)           |
| user\_id           | bigint(20)   | Part of KEY (user\_id)           |
| assigned\_to       | varchar(250) | None                             |
| reassigned\_to     | varchar(250) | None                             |
| created\_on        | datetime     | None                             |
| created\_by        | bigint(20)   | None                             |
| auto\_update\_time | timestamp    | Part of KEY (auto\_update\_time) |

## Table: `task_campaign_mapping`


| Column Name        | Data Type | Index                            |
| ------------------ | --------- | -------------------------------- |
| id                 | int(11)   | Part of PRIMARY KEY (id)         |
| org\_id            | int(11)   | Part of KEY (org\_id)            |
| task\_id           | int(11)   | Part of KEY (task\_id)           |
| msg\_id            | int(11)   | Part of KEY (msg\_id)            |
| campaign\_id       | int(11)   | None                             |
| auto\_update\_time | timestamp | Part of KEY (auto\_update\_time) |

## Table: `base_store_change_log`


| Column Name       | Data Type | Index                     |
| ----------------- | --------- | ------------------------- |
| id                | int(11)   | Part of PRIMARY KEY (id)  |
| loyalty\_id       | int(11)   | Part of KEY (loyalty\_id) |
| org\_id           | int(11)   | Part of KEY (org\_id)     |
| registered\_at    | int(11)   | None                      |
| prev\_base\_store | int(11)   | None                      |
| curr\_base\_store | int(11)   | None                      |
| rule\_applied     | int(11)   | None                      |
| date              | date      | Part of KEY (date)        |
| last\_updated\_by | int(11)   | None                      |
| last\_updated     | timestamp | None                      |

## Table: `reminder_log`


| Column Name   | Data Type | Index                         |
| ------------- | --------- | ----------------------------- |
| id            | int(11)   | Part of PRIMARY KEY (id)      |
| reminder\_id  | int(11)   | None                          |
| org\_id       | int(11)   | Part of PRIMARY KEY (org\_id) |
| group\_id     | int(11)   | None                          |
| executed\_by  | int(11)   | None                          |
| last\_updated | timestamp | None                          |

## Table: `mobile_number_change_request_log`


| Column Name       | Data Type                             | Index                            |
| ----------------- | ------------------------------------- | -------------------------------- |
| id                | int(11)                               | Part of PRIMARY KEY (id)         |
| org\_id           | int(11)                               | Part of UNIQUE KEY (org\_id)     |
| user\_id          | bigint(20)                            | Part of UNIQUE KEY (user\_id)    |
| old\_mobile       | varchar(20)                           | Part of UNIQUE KEY (old\_mobile) |
| new\_mobile       | varchar(20)                           | None                             |
| requested\_by     | bigint(20)                            | None                             |
| request\_time     | datetime                              | None                             |
| changed           | int(11)                               | None                             |
| type              | enum('MOBILE','EXTERNAL\_ID','EMAIL') | None                             |
| last\_changed\_on | datetime                              | None                             |
| notes             | text                                  | None                             |

## Table: `returned_bills_lineitems`


| Column Name        | Data Type    | Index                            |
| ------------------ | ------------ | -------------------------------- |
| id                 | bigint(20)   | Part of PRIMARY KEY (id)         |
| return\_bill\_id   | bigint(20)   | Part of KEY (return\_bill\_id)   |
| user\_id           | bigint(20)   | Part of KEY (user\_id)           |
| org\_id            | bigint(20)   | Part of KEY (org\_id)            |
| serial             | int(11)      | None                             |
| item\_code         | varchar(100) | None                             |
| rate               | double       | None                             |
| qty                | double       | None                             |
| value              | double       | None                             |
| discount\_value    | double       | None                             |
| amount             | double       | None                             |
| lbl\_id            | bigint(20)   | None                             |
| loyalty\_log\_id   | bigint(20)   | None                             |
| points             | int(11)      | None                             |
| auto\_update\_time | timestamp    | Part of KEY (auto\_update\_time) |

## Table: `client_log_file_mapping`


| Column Name   | Data Type | Index                         |
| ------------- | --------- | ----------------------------- |
| org\_id       | int(11)   | Part of KEY (org\_id)         |
| store\_id     | int(11)   | Part of KEY (store\_id)       |
| file\_id      | int(11)   | Part of UNIQUE KEY (file\_id) |
| created\_time | timestamp | Part of KEY (created\_time)   |

## Table: `client_file_mappings`


| Column Name   | Data Type                                                                                                                                                                                                                                                               | Index                       |
| ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------- |
| id            | int(11)                                                                                                                                                                                                                                                                 | Part of PRIMARY KEY (id)    |
| org\_id       | int(11)                                                                                                                                                                                                                                                                 | Part of KEY (org\_id)       |
| mapping\_type | enum('data\_providers\_file\_mapping','printer\_template\_file\_mapping','integration\_output\_template\_file\_mapping','integration\_post\_output\_file\_mapping','client\_log\_file\_mapping','lego\_properties\_file\_mapping','client\_log\_config\_file\_mapping') | Part of KEY (mapping\_type) |
| file\_type    | varchar(255)                                                                                                                                                                                                                                                            | None                        |
| file\_id      | int(11)                                                                                                                                                                                                                                                                 | None                        |
| store\_id     | int(11)                                                                                                                                                                                                                                                                 | Part of KEY (store\_id)     |
| created\_time | datetime                                                                                                                                                                                                                                                                | None                        |
| created\_by   | int(11)                                                                                                                                                                                                                                                                 | None                        |

## Table: `region_holiday`


| Column Name | Data Type    | Index                       |
| ----------- | ------------ | --------------------------- |
| date        | date         | Part of UNIQUE KEY (date)   |
| region      | varchar(255) | Part of UNIQUE KEY (region) |

## Table: `loyalty_log_outliers`


| Column Name     | Data Type                    | Index                      |
| --------------- | ---------------------------- | -------------------------- |
| id              | bigint(20)                   | Part of PRIMARY KEY (id)   |
| loyalty\_id     | bigint(20)                   | Part of KEY (loyalty\_id)  |
| org\_id         | bigint(20)                   | Part of KEY (org\_id)      |
| user\_id        | bigint(20)                   | Part of KEY (user\_id)     |
| bill\_number    | varchar(50)                  | Part of KEY (bill\_number) |
| points          | int(11)                      | None                       |
| date            | datetime                     | Part of KEY (date)         |
| notes           | mediumtext                   | None                       |
| bill\_amount    | float                        | None                       |
| entered\_by     | bigint(20)                   | Part of KEY (entered\_by)  |
| outlier\_status | enum('MARK\_DONE','OUTLIER') | None                       |
| xml             | mediumtext                   | None                       |

## Table: `error_description`


| Column Name   | Data Type     | Index                    |
| ------------- | ------------- | ------------------------ |
| id            | int(11)       | Part of PRIMARY KEY (id) |
| info          | varchar(255)  | None                     |
| description   | varchar(2000) | None                     |
| version       | varchar(255)  | None                     |
| compile\_time | timestamp     | None                     |
| svn\_revision | varchar(30)   | None                     |

## Table: `users_ndnc_status`


| Column Name        | Data Type                              | Index                            |
| ------------------ | -------------------------------------- | -------------------------------- |
| id                 | bigint(20)                             | Part of PRIMARY KEY (id)         |
| user\_id           | bigint(20)                             | Part of KEY (user\_id)           |
| org\_id            | int(11)                                | Part of KEY (org\_id)            |
| mobile             | varchar(15)                            | Part of UNIQUE KEY (mobile)      |
| status             | enum('NDNC','INVALID','DND','UNKNOWN') | Part of KEY (status)             |
| added\_on          | datetime                               | None                             |
| updated\_on        | datetime                               | None                             |
| auto\_update\_time | timestamp                              | Part of KEY (auto\_update\_time) |

## Table: `entity_status_meta`


| Column Name | Data Type   | Index                    |
| ----------- | ----------- | ------------------------ |
| id          | int(11)     | Part of PRIMARY KEY (id) |
| type        | varchar(20) | Part of KEY (type)       |
| status      | varchar(20) | None                     |
| description | text        | None                     |

## Table: `credit_notes`


| Column Name        | Data Type                       | Index                            |
| ------------------ | ------------------------------- | -------------------------------- |
| id                 | int(11)                         | Part of PRIMARY KEY (id)         |
| org\_id            | int(11)                         | Part of KEY (org\_id)            |
| user\_id           | int(11)                         | Part of KEY (user\_id)           |
| number             | varchar(50)                     | None                             |
| reference\_type    | enum('RETURNED','LOYALTY\_LOG') | Part of KEY (reference\_type)    |
| reference\_id      | bigint(20)                      | Part of KEY (reference\_id)      |
| amount             | double                          | None                             |
| notes              | longtext                        | None                             |
| validity           | timestamp                       | None                             |
| added\_on          | timestamp                       | Part of KEY (added\_on)          |
| entered\_by        | int(11)                         | Part of KEY (entered\_by)        |
| auto\_update\_time | timestamp                       | Part of KEY (auto\_update\_time) |

## Table: `points_transfer_validation_code`


| Column Name    | Data Type   | Index                        |
| -------------- | ----------- | ---------------------------- |
| id             | int(10)     | Part of PRIMARY KEY (id)     |
| org\_id        | int(11)     | Part of KEY (org\_id)        |
| from\_user\_id | int(11)     | Part of KEY (from\_user\_id) |
| to\_user\_id   | int(11)     | Part of KEY (to\_user\_id)   |
| code           | varchar(50) | Part of UNIQUE KEY (code)    |
| valid\_upto    | datetime    | Part of KEY (valid\_upto)    |
| reference      | varchar(50) | None                         |
| scope          | varchar(50) | Part of KEY (scope)          |
| is\_valid      | tinyint(1)  | Part of KEY (is\_valid)      |
| added\_by      | int(11)     | None                         |
| added\_on      | datetime    | None                         |
| updated\_on    | timestamp   | None                         |

## Table: `fraud_users`


| Column Name        | Data Type                                                        | Index                            |
| ------------------ | ---------------------------------------------------------------- | -------------------------------- |
| id                 | bigint(20)                                                       | Part of PRIMARY KEY (id)         |
| org\_id            | int(11)                                                          | Part of KEY (org\_id)            |
| user\_id           | bigint(20)                                                       | Part of UNIQUE KEY (user\_id)    |
| status             | enum('MARKED','CONFIRMED','RECONFIRMED','NOT\_FRAUD','INTERNAL') | Part of KEY (status)             |
| reason             | mediumtext                                                       | None                             |
| entered\_by        | bigint(20)                                                       | None                             |
| modified           | datetime                                                         | None                             |
| auto\_update\_time | timestamp                                                        | Part of KEY (auto\_update\_time) |

## Table: `tracker_conditions`


| Column Name                | Data Type    | Index                     |
| -------------------------- | ------------ | ------------------------- |
| id                         | int(11)      | Part of PRIMARY KEY (id)  |
| org\_id                    | bigint(20)   | Part of KEY (org\_id)     |
| tracker\_id                | int(11)      | Part of KEY (tracker\_id) |
| params                     | mediumtext   | None                      |
| listener\_id               | int(11)      | None                      |
| rank                       | int(11)      | None                      |
| milestone\_found\_template | varchar(255) | None                      |
| event\_manager\_ruleset    | varchar(255) | None                      |

## Table: `mlm_users`


| Column Name    | Data Type   | Index                          |
| -------------- | ----------- | ------------------------------ |
| org\_id        | bigint(11)  | Part of UNIQUE KEY (org\_id)   |
| user\_id       | bigint(11)  | Part of PRIMARY KEY (user\_id) |
| parent\_id     | bigint(11)  | None                           |
| mlm\_code      | varchar(15) | Part of UNIQUE KEY (mlm\_code) |
| path\_to\_node | mediumtext  | None                           |
| subtree\_size  | int(11)     | None                           |
| num\_referred  | int(11)     | None                           |
| joined         | datetime    | None                           |
| added\_by      | bigint(20)  | None                           |

## Table: `custom_fields`


| Column Name          | Data Type    | Index                        |
| -------------------- | ------------ | ---------------------------- |
| id                   | int(11)      | Part of PRIMARY KEY (id)     |
| org\_id              | int(11)      | Part of UNIQUE KEY (org\_id) |
| name                 | varchar(20)  | Part of UNIQUE KEY (name)    |
| type                 | varchar(20)  | None                         |
| datatype             | varchar(20)  | None                         |
| label                | longtext     | None                         |
| scope                | varchar(30)  | None                         |
| default              | mediumtext   | None                         |
| phase                | int(11)      | None                         |
| position             | int(11)      | None                         |
| rule                 | longtext     | None                         |
| server\_rule         | varchar(255) | None                         |
| regex                | mediumtext   | None                         |
| helptext             | varchar(250) | None                         |
| error                | mediumtext   | None                         |
| attrs                | longtext     | None                         |
| is\_disabled         | tinyint(1)   | None                         |
| is\_compulsory       | tinyint(1)   | None                         |
| is\_updatable        | tinyint(1)   | None                         |
| modified\_by         | bigint(20)   | None                         |
| last\_modified       | datetime     | Part of KEY (last\_modified) |
| disable\_at\_server  | tinyint(1)   | None                         |
| ef\_id               | int(11)      | None                         |
| enable\_audit\_trail | tinyint(1)   | None                         |
| is\_pii\_data        | tinyint(1)   | None                         |
| is\_psi\_data        | tinyint(1)   | None                         |

## Table: `lego_properties_file_mapping`


| Column Name   | Data Type  | Index                           |
| ------------- | ---------- | ------------------------------- |
| org\_id       | bigint(20) | Part of PRIMARY KEY (org\_id)   |
| store\_id     | bigint(20) | Part of PRIMARY KEY (store\_id) |
| file\_id      | bigint(20) | None                            |
| created\_by   | bigint(20) | None                            |
| created\_time | datetime   | None                            |

## Table: `clusters_users_history`


| Column Name              | Data Type  | Index                     |
| ------------------------ | ---------- | ------------------------- |
| id                       | bigint(20) | Part of PRIMARY KEY (id)  |
| org\_id                  | int(11)    | Part of KEY (org\_id)     |
| user\_id                 | bigint(20) | Part of KEY (user\_id)    |
| cluster\_id              | int(11)    | Part of KEY (cluster\_id) |
| cluster\_value\_id\_from | bigint(20) | None                      |
| cluster\_value\_id\_to   | bigint(20) | None                      |
| added\_by                | bigint(20) | None                      |
| added\_on                | datetime   | Part of KEY (added\_on)   |

## Table: `fleet_groups`


| Column Name        | Data Type      | Index                       |
| ------------------ | -------------- | --------------------------- |
| id                 | int(11)        | Part of PRIMARY KEY (id)    |
| name               | varchar(50)    | None                        |
| org\_id            | int(11)        | Part of KEY (org\_id)       |
| external\_id       | varchar(50)    | Part of KEY (external\_id)  |
| status             | enum('ACTIVE', | None                        |
| hierarchy\_id      | int(11)        | Part of KEY (hierarchy\_id) |
| created\_on        | timestamp      | None                        |
| created\_by        | int(11)        | None                        |
| auto\_update\_time | timestamp      | None                        |

## Table: `awarded_points_log`


| Column Name        | Data Type    | Index                            |
| ------------------ | ------------ | -------------------------------- |
| id                 | bigint(20)   | Part of PRIMARY KEY (id)         |
| org\_id            | bigint(20)   | Part of KEY (org\_id)            |
| user\_id           | bigint(20)   | Part of KEY (user\_id)           |
| donated\_by        | int(11)      | None                             |
| family\_id         | int(11)      | None                             |
| loyalty\_id        | bigint(20)   | None                             |
| awarded\_points    | int(11)      | None                             |
| redeemed\_points   | int(11)      | None                             |
| expired\_points    | int(11)      | None                             |
| ref\_bill\_number  | varchar(55)  | None                             |
| notes              | varchar(255) | None                             |
| awarded\_by        | bigint(20)   | None                             |
| awarded\_time      | datetime     | None                             |
| auto\_update\_time | timestamp    | Part of KEY (auto\_update\_time) |

## Table: `combo_details`


| Column Name          | Data Type    | Index                              |
| -------------------- | ------------ | ---------------------------------- |
| id                   | bigint(20)   | Part of PRIMARY KEY (id)           |
| org\_id              | bigint(20)   | Part of KEY (org\_id)              |
| lineitem\_id         | bigint(20)   | Part of UNIQUE KEY (lineitem\_id)  |
| type                 | varchar(100) | None                               |
| parent\_lineitem\_id | bigint(20)   | Part of KEY (parent\_lineitem\_id) |
| parent\_sku\_code    | varchar(100) | None                               |
| txn\_type            | varchar(100) | Part of KEY (txn\_type)            |
| txn\_id              | bigint(20)   | None                               |
| auto\_update\_time   | timestamp    | Part of KEY (auto\_update\_time)   |

## Table: `store_tasks_entries`


| Column Name                 | Data Type    | Index                                   |
| --------------------------- | ------------ | --------------------------------------- |
| id                          | bigint(20)   | Part of PRIMARY KEY (id)                |
| org\_id                     | int(11)      | Part of KEY (org\_id)                   |
| task\_id                    | int(11)      | Part of KEY (task\_id)                  |
| store\_id                   | int(11)      | Part of KEY (store\_id)                 |
| customer\_id                | int(11)      | None                                    |
| task\_created\_on           | datetime     | None                                    |
| task\_created\_by           | int(11)      | None                                    |
| display\_title              | mediumtext   | None                                    |
| display\_text               | mediumtext   | None                                    |
| task\_status                | varchar(255) | None                                    |
| task\_status\_updated\_on   | datetime     | Part of KEY (task\_status\_updated\_on) |
| task\_status\_update\_notes | mediumtext   | None                                    |
| is\_completed               | tinyint(1)   | None                                    |

## Table: `merge_customers_log`


| Column Name              | Data Type   | Index                               |
| ------------------------ | ----------- | ----------------------------------- |
| id                       | int(11)     | Part of PRIMARY KEY (id)            |
| org\_id                  | int(11)     | Part of KEY (org\_id)               |
| from\_user\_id           | bigint(20)  | Part of UNIQUE KEY (from\_user\_id) |
| to\_user\_id             | int(11)     | None                                |
| from\_user\_mobile       | varchar(20) | None                                |
| from\_user\_external\_id | varchar(50) | None                                |
| reason                   | mediumtext  | None                                |
| merged\_by               | bigint(20)  | None                                |
| merged\_on               | datetime    | None                                |
| details                  | mediumblob  | None                                |
| auto\_update\_time       | timestamp   | Part of KEY (auto\_update\_time)    |

## Table: `customer_base_store_log`


| Column Name             | Data Type    | Index                    |
| ----------------------- | ------------ | ------------------------ |
| id                      | bigint(20)   | Part of PRIMARY KEY (id) |
| org\_id                 | int(11)      | Part of KEY (org\_id)    |
| user\_id                | bigint(20)   | Part of KEY (user\_id)   |
| base\_store             | bigint(20)   | None                     |
| updated\_by             | bigint(20)   | None                     |
| updated\_on             | datetime     | None                     |
| auto\_update\_timestamp | timestamp    | None                     |
| source                  | varchar(200) | None                     |

## Table: `bill_dump_import_attributes`


| Column Name        | Data Type                               | Index                        |
| ------------------ | --------------------------------------- | ---------------------------- |
| id                 | int(11)                                 | Part of PRIMARY KEY (id)     |
| org\_id            | int(11)                                 | Part of UNIQUE KEY (org\_id) |
| name               | varchar(50)                             | Part of UNIQUE KEY (name)    |
| extraction\_type   | enum('UPLOAD','POS','REGEX','USERDEF')  | None                         |
| extraction\_params | mediumtext                              | None                         |
| data\_type         | enum('String','Int','Boolean','Double') | None                         |

## Table: `comm_channels`


| Column Name | Data Type    | Index                    |
| ----------- | ------------ | ------------------------ |
| id          | int(11)      | Part of PRIMARY KEY (id) |
| type        | varchar(255) | None                     |
| description | varchar(255) | None                     |
| is\_valid   | tinyint(1)   | None                     |

## Table: `external_reference_data`


| Column Name                 | Data Type    | Index                                     |
| --------------------------- | ------------ | ----------------------------------------- |
| id                          | bigint(20)   | Part of PRIMARY KEY (id)                  |
| org\_id                     | bigint(11)   | Part of KEY (org\_id)                     |
| external\_reference\_number | varchar(130) | Part of KEY (external\_reference\_number) |
| user\_id                    | int(11)      | Part of KEY (user\_id)                    |
| is\_active                  | tinyint(1)   | None                                      |
| auto\_update\_time          | timestamp    | None                                      |

## Table: `task_reminder`


| Column Name  | Data Type  | Index                    |
| ------------ | ---------- | ------------------------ |
| id           | bigint(20) | Part of PRIMARY KEY (id) |
| task\_id     | bigint(20) | None                     |
| org\_id      | bigint(20) | Part of KEY (org\_id)    |
| created\_by  | int(11)    | None                     |
| remindee\_id | int(11)    | None                     |
| time         | datetime   | Part of KEY (time)       |
| template     | mediumtext | None                     |
| store\_id    | int(11)    | None                     |

## Table: `task_update_log`


| Column Name        | Data Type  | Index                            |
| ------------------ | ---------- | -------------------------------- |
| id                 | bigint(20) | Part of PRIMARY KEY (id)         |
| org\_id            | int(11)    | Part of KEY (org\_id)            |
| store\_id          | int(11)    | None                             |
| task\_id           | int(11)    | Part of KEY (task\_id)           |
| task\_entry\_id    | int(11)    | Part of KEY (task\_entry\_id)    |
| customer\_id       | int(11)    | None                             |
| updated\_by        | int(11)    | None                             |
| updated\_status    | int(11)    | None                             |
| updated\_time      | datetime   | None                             |
| auto\_update\_time | timestamp  | Part of KEY (auto\_update\_time) |

## Table: `payment_mode_details`


| Column Name            | Data Type                         | Index                                |
| ---------------------- | --------------------------------- | ------------------------------------ |
| id                     | bigint(20)                        | Part of PRIMARY KEY (id)             |
| org\_id                | int(11)                           | Part of KEY (org\_id)                |
| ref\_id                | bigint(20)                        | Part of KEY (ref\_id)                |
| ref\_type              | enum('REGULAR','NOT\_INTERESTED') | Part of KEY (ref\_type)              |
| org\_payment\_mode\_id | int(11)                           | Part of KEY (org\_payment\_mode\_id) |
| payment\_mode\_id      | int(11)                           | None                                 |
| amount                 | double                            | None                                 |
| notes                  | varchar(250)                      | None                                 |
| added\_by              | int(11)                           | None                                 |
| added\_on              | datetime                          | None                                 |
| auto\_update\_time     | timestamp                         | Part of KEY (auto\_update\_time)     |

## Table: `task_status`


| Column Name           | Data Type  | Index                    |
| --------------------- | ---------- | ------------------------ |
| id                    | bigint(20) | Part of PRIMARY KEY (id) |
| task\_id              | bigint(20) | Part of KEY (task\_id)   |
| org\_id               | bigint(20) | Part of KEY (org\_id)    |
| store\_id             | int(11)    | Part of KEY (store\_id)  |
| executer\_id          | int(11)    | None                     |
| updated\_by\_till\_id | int(11)    | None                     |
| updated\_on           | datetime   | None                     |
| status                | int(11)    | None                     |
| created\_on           | datetime   | None                     |

## Table: `assoc_activity`


| Column Name | Data Type                                                                                                                 | Index                         |
| ----------- | ------------------------------------------------------------------------------------------------------------------------- | ----------------------------- |
| id          | int(11)                                                                                                                   | Part of PRIMARY KEY (id)      |
| org\_id     | int(11)                                                                                                                   | Part of PRIMARY KEY (org\_id) |
| assoc\_id   | bigint(20)                                                                                                                | None                          |
| type        | enum('REG\_TRANSACTION','REGISTRATION','CUSTOMER\_UPDATE','RET\_TRANSACTION','NI\_TRANSACTION','NI\_RETURN\_TRANSACTION') | None                          |
| store\_id   | int(11)                                                                                                                   | None                          |
| till\_id    | int(11)                                                                                                                   | None                          |
| added\_on   | datetime                                                                                                                  | None                          |
| description | varchar(255)                                                                                                              | None                          |
| ref\_id     | bigint(20)                                                                                                                | None                          |

## Table: `custom_fields_for_reports`


| Column Name | Data Type   | Index                            |
| ----------- | ----------- | -------------------------------- |
| report\_id  | int(11)     | Part of PRIMARY KEY (report\_id) |
| cf\_id      | int(11)     | Part of PRIMARY KEY (cf\_id)     |
| field\_name | varchar(30) | None                             |
| org\_id     | int(11)     | Part of PRIMARY KEY (org\_id)    |

## Table: `incoming_interaction_action_log`


| Column Name        | Data Type    | Index                         |
| ------------------ | ------------ | ----------------------------- |
| id                 | bigint(20)   | Part of PRIMARY KEY (id)      |
| org\_id            | bigint(20)   | Part of KEY (org\_id)         |
| interaction\_id    | bigint(20)   | Part of KEY (interaction\_id) |
| mapping\_id        | bigint(20)   | Part of KEY (mapping\_id)     |
| action\_id         | bigint(20)   | Part of KEY (action\_id)      |
| api\_success       | tinyint(4)   | None                          |
| api\_item\_success | tinyint(4)   | None                          |
| api\_item\_code    | varchar(255) | None                          |
| api\_item\_message | mediumtext   | None                          |
| added\_on          | datetime     | None                          |
| added\_by          | bigint(20)   | None                          |

## Table: `groups`


| Column Name        | Data Type   | Index                                   |
| ------------------ | ----------- | --------------------------------------- |
| id                 | bigint(20)  | Part of PRIMARY KEY (id)                |
| org\_id            | bigint(20)  | Part of KEY (org\_id)                   |
| name               | varchar(50) | Part of KEY (name)                      |
| primary\_user\_id  | bigint(20)  | Part of PRIMARY KEY (primary\_user\_id) |
| created\_on        | timestamp   | None                                    |
| created\_by        | bigint(20)  | None                                    |
| updated\_on        | timestamp   | None                                    |
| updated\_by        | bigint(20)  | None                                    |
| auto\_update\_time | timestamp   | Part of KEY (auto\_update\_time)        |
| is\_valid          | TINYINT     | None                                    |

## Table: `task_statuses`


| Column Name        | Data Type                                          | Index                          |
| ------------------ | -------------------------------------------------- | ------------------------------ |
| id                 | int(11)                                            | Part of PRIMARY KEY (id)       |
| org\_id            | bigint(20)                                         | Part of KEY (org\_id)          |
| internal\_status   | enum('OPEN','COMPLETE','NONE','ARCHIVE','DISCARD') | Part of KEY (internal\_status) |
| status             | varchar(15)                                        | None                           |
| auto\_update\_time | timestamp                                          | None                           |

## Table: `sms_in`


| Column Name         | Data Type    | Index                    |
| ------------------- | ------------ | ------------------------ |
| id                  | bigint(20)   | Part of PRIMARY KEY (id) |
| from                | varchar(15)  | Part of KEY (from)       |
| msg                 | varchar(200) | None                     |
| host                | varchar(60)  | None                     |
| reply               | varchar(400) | None                     |
| ref\_no             | bigint(20)   | None                     |
| time                | timestamp    | Part of KEY (time)       |
| is\_used            | tinyint(1)   | Part of KEY (is\_used)   |
| triggered\_mappings | varchar(256) | None                     |
| org\_id             | bigint(20)   | Part of KEY (org\_id)    |

## Table: `transaction_currency_log`


| Column Name               | Data Type                                                            | Index                                 |
| ------------------------- | -------------------------------------------------------------------- | ------------------------------------- |
| id                        | int(11)                                                              | Part of PRIMARY KEY (id)              |
| org\_id                   | bigint(20)                                                           | Part of UNIQUE KEY (org\_id)          |
| ref\_id                   | bigint(20)                                                           | Part of UNIQUE KEY (ref\_id)          |
| base\_currency\_id        | int(10)                                                              | None                                  |
| transaction\_currency\_id | int(10)                                                              | None                                  |
| ref\_type                 | enum('REGULAR','RETURN','NOT\_INTERESTED','NOT\_INTERESTED\_RETURN') | Part of UNIQUE KEY (ref\_type)        |
| local\_value              | float(10,3)                                                          | None                                  |
| local\_discount           | float(10,3)                                                          | None                                  |
| local\_gross\_amount      | float(10,3)                                                          | None                                  |
| value                     | double                                                               | None                                  |
| ratio                     | double                                                               | None                                  |
| added\_on                 | timestamp                                                            | None                                  |
| added\_by                 | bigint(20)                                                           | None                                  |
| auto\_update\_timestamp   | timestamp                                                            | Part of KEY (auto\_update\_timestamp) |

## Table: `seasonal_slabs`


| Column Name       | Data Type  | Index                    |
| ----------------- | ---------- | ------------------------ |
| id                | int(11)    | Part of PRIMARY KEY (id) |
| org\_id           | int(11)    | Part of KEY (org\_id)    |
| period\_from      | date       | None                     |
| period\_to        | date       | None                     |
| for\_stores\_json | mediumtext | None                     |
| in\_zones         | mediumtext | None                     |
| params            | mediumtext | None                     |
| added\_by         | bigint(20) | None                     |
| last\_modified    | datetime   | None                     |

## Table: `lineitem_currency_log`


| Column Name               | Data Type                                                            | Index                                 |
| ------------------------- | -------------------------------------------------------------------- | ------------------------------------- |
| id                        | int(11)                                                              | Part of PRIMARY KEY (id)              |
| org\_id                   | bigint(20)                                                           | Part of UNIQUE KEY (org\_id)          |
| ref\_id                   | bigint(20)                                                           | Part of UNIQUE KEY (ref\_id)          |
| ref\_type                 | enum('REGULAR','RETURN','NOT\_INTERESTED','NOT\_INTERESTED\_RETURN') | Part of UNIQUE KEY (ref\_type)        |
| base\_currency\_id        | int(10)                                                              | None                                  |
| transaction\_currency\_id | int(10)                                                              | None                                  |
| local\_rate               | float(10,3)                                                          | None                                  |
| local\_discount           | float(10,3)                                                          | None                                  |
| local\_value              | float(10,3)                                                          | None                                  |
| local\_amount             | float(10,3)                                                          | None                                  |
| ratio                     | float(12,3)                                                          | None                                  |
| added\_on                 | timestamp                                                            | None                                  |
| added\_by                 | bigint(20)                                                           | None                                  |
| auto\_update\_timestamp   | timestamp                                                            | Part of KEY (auto\_update\_timestamp) |

## Table: `transaction_account_mapping`


| Column Name        | Data Type    | Index                            |
| ------------------ | ------------ | -------------------------------- |
| id                 | bigint(20)   | Part of PRIMARY KEY (id)         |
| org\_id            | bigint(20)   | Part of KEY (org\_id)            |
| transaction\_id    | bigint(20)   | Part of KEY (transaction\_id)    |
| transaction\_type  | varchar(100) | Part of KEY (transaction\_type)  |
| account\_type      | varchar(50)  | None                             |
| account\_id        | bigint(20)   | Part of KEY (account\_id)        |
| is\_active         | tinyint(1)   | None                             |
| auto\_update\_time | timestamp    | Part of KEY (auto\_update\_time) |

## Table: `fleet_company`


| Column Name          | Data Type   | Index                      |
| -------------------- | ----------- | -------------------------- |
| id                   | int(11)     | Part of PRIMARY KEY (id)   |
| org\_id              | int(11)     | Part of KEY (org\_id)      |
| name                 | mediumtext  | None                       |
| external\_id         | varchar(50) | Part of KEY (external\_id) |
| is\_active           | tinyint(1)  | None                       |
| fleet\_hierarchy\_id | int(11)     | None                       |
| created\_by          | int(11)     | None                       |
| updated\_by          | int(11)     | None                       |
| created\_on          | timestamp   | None                       |
| auto\_update\_time   | timestamp   | None                       |
| parent\_id           | int(11)     | Part of KEY (parent\_id)   |

## Table: `entity_status`


| Column Name        | Data Type   | Index                            |
| ------------------ | ----------- | -------------------------------- |
| id                 | int(11)     | Part of PRIMARY KEY (id)         |
| org\_id            | int(11)     | Part of KEY (org\_id)            |
| entity\_id         | bigint(20)  | Part of KEY (entity\_id)         |
| label\_id          | int(11)     | None                             |
| prev\_label\_id    | int(11)     | None                             |
| is\_active         | tinyint(1)  | Part of KEY (is\_active)         |
| created\_on        | datetime    | None                             |
| auto\_update\_time | timestamp   | Part of KEY (auto\_update\_time) |
| created\_by        | int(11)     | None                             |
| reason             | varchar(50) | None                             |

## Table: `scheduled_tasks`


| Column Name         | Data Type   | Index                         |
| ------------------- | ----------- | ----------------------------- |
| id                  | bigint(20)  | Part of PRIMARY KEY (id)      |
| org\_id             | bigint(20)  | Part of PRIMARY KEY (org\_id) |
| filter\_type        | varchar(20) | None                          |
| filter\_data        | text        | None                          |
| filter\_args        | mediumtext  | None                          |
| frequency           | varchar(40) | None                          |
| listeners           | text        | None                          |
| scheduler\_task\_id | bigint(20)  | None                          |
| enabled             | tinyint(1)  | None                          |
| modified            | timestamp   | None                          |

## Table: `mobile_number_change_log`


| Column Name      | Data Type   | Index                            |
| ---------------- | ----------- | -------------------------------- |
| id               | int(11)     | Part of PRIMARY KEY (id)         |
| org\_id          | bigint(20)  | Part of PRIMARY KEY (org\_id)    |
| user\_id         | bigint(20)  | Part of UNIQUE KEY (user\_id)    |
| old\_mobile      | varchar(15) | Part of UNIQUE KEY (old\_mobile) |
| new\_mobile      | varchar(15) | None                             |
| reported\_by     | bigint(20)  | None                             |
| reporting\_time  | datetime    | None                             |
| validated\_by    | bigint(20)  | None                             |
| validation\_time | datetime    | None                             |

## Table: `countries_bak`


| Column Name           | Data Type    | Index                     |
| --------------------- | ------------ | ------------------------- |
| id                    | int(11)      | Part of PRIMARY KEY (id)  |
| name                  | varchar(50)  | Part of UNIQUE KEY (name) |
| short\_name           | varchar(10)  | None                      |
| mobile\_country\_code | varchar(5)   | None                      |
| mobile\_regex         | varchar(30)  | None                      |
| mobile\_length\_csv   | varchar(255) | None                      |
| last\_updated         | datetime     | None                      |

## Table: `entity_status_actions`


| Column Name        | Data Type    | Index                                    |
| ------------------ | ------------ | ---------------------------------------- |
| entity\_status\_id | int(11)      | Part of PRIMARY KEY (entity\_status\_id) |
| description        | varchar(100) | None                                     |
| action\_code       | varchar(50)  | Part of PRIMARY KEY (action\_code)       |
| default\_value     | tinyint(1)   | None                                     |
| is\_updatable      | tinyint(1)   | None                                     |
| is\_valid          | tinyint(1)   | None                                     |

## Table: `transaction_delivery_status`


| Column Name       | Data Type                                                            | Index                                  |
| ----------------- | -------------------------------------------------------------------- | -------------------------------------- |
| id                | int(11)                                                              | Part of PRIMARY KEY (id)               |
| transaction\_id   | bigint(20)                                                           | Part of UNIQUE KEY (transaction\_id)   |
| transaction\_type | enum('REGULAR','RETURN','NOT\_INTERESTED','NOT\_INTERESTED\_RETURN') | Part of UNIQUE KEY (transaction\_type) |
| delivery\_status  | enum('PLACED','PROCESSED','SHIPPED','DELIVERED','RETURNED')          | None                                   |
| updated\_by       | int(11)                                                              | None                                   |

## Table: `user_family_mapping`


| Column Name | Data Type  | Index                         |
| ----------- | ---------- | ----------------------------- |
| id          | int(11)    | Part of PRIMARY KEY (id)      |
| org\_id     | int(11)    | Part of PRIMARY KEY (org\_id) |
| family\_id  | int(11)    | None                          |
| user\_id    | int(11)    | None                          |
| added\_by   | int(11)    | None                          |
| added\_on   | datetime   | None                          |
| is\_member  | tinyint(1) | None                          |

## Table: `images`


| Column Name        | Data Type                                                             | Index                            |
| ------------------ | --------------------------------------------------------------------- | -------------------------------- |
| id                 | bigint(20)                                                            | Part of PRIMARY KEY (id)         |
| org\_id            | bigint(20)                                                            | Part of KEY (org\_id)            |
| entity\_type       | enum('REQUEST','CUSTOMER','REGULAR\_TRANSACTION','CUSTOMER\_BARCODE') | Part of KEY (entity\_type)       |
| entity\_id         | bigint(20)                                                            | Part of KEY (entity\_id)         |
| provider           | enum('FILESERVICE','DIRECT\_URL')                                     | None                             |
| serial             | int(11)                                                               | None                             |
| image\_reference   | text                                                                  | None                             |
| file\_name         | varchar(250)                                                          | Part of KEY (file\_name)         |
| namespace          | varchar(100)                                                          | Part of KEY (namespace)          |
| is\_active         | tinyint(1)                                                            | None                             |
| created\_on        | datetime                                                              | None                             |
| created\_by        | bigint(20)                                                            | None                             |
| updated\_on        | datetime                                                              | None                             |
| updated\_by        | bigint(20)                                                            | None                             |
| auto\_update\_time | timestamp                                                             | Part of KEY (auto\_update\_time) |

## Table: `card_generation_log`


| Column Name  | Data Type    | Index                    |
| ------------ | ------------ | ------------------------ |
| id           | int(11)      | Part of PRIMARY KEY (id) |
| org\_id      | bigint(20)   | Part of KEY (org\_id)    |
| series\_id   | int(11)      | Part of KEY (series\_id) |
| file\_handle | varchar(255) | None                     |
| created\_by  | bigint(20)   | None                     |
| count        | int(5)       | None                     |
| date         | timestamp    | None                     |
| description  | text         | None                     |

## Table: `rejected_transaction_retrigger_log`


| Column Name                  | Data Type  | Index                            |
| ---------------------------- | ---------- | -------------------------------- |
| id                           | int(11)    | Part of PRIMARY KEY (id)         |
| org\_id                      | bigint(20) | Part of KEY (org\_id)            |
| user\_id                     | bigint(20) | Part of KEY (user\_id)           |
| bill\_numbers                | text       | None                             |
| error\_codes                 | text       | None                             |
| retriggered\_by              | bigint(20) | None                             |
| rejected\_transaction\_count | text       | None                             |
| added\_on                    | datetime   | None                             |
| auto\_update\_time           | timestamp  | Part of KEY (auto\_update\_time) |

## Table: `change_request_history`


| Column Name       | Data Type                             | Index                                 |
| ----------------- | ------------------------------------- | ------------------------------------- |
| id                | int(11)                               | Part of PRIMARY KEY (id)              |
| org\_id           | int(11)                               | Part of KEY (org\_id)                 |
| user\_id          | bigint(20)                            | Part of KEY (user\_id)                |
| current\_value    | varchar(50)                           | Part of UNIQUE KEY (current\_value)   |
| requested\_value  | varchar(50)                           | Part of UNIQUE KEY (requested\_value) |
| request\_source   | enum('INTOUCH','CLIENT','SOCIAL')     | Part of KEY (request\_source)         |
| request\_type     | enum('MOBILE','EXTERNAL\_ID','EMAIL') | Part of KEY (request\_type)           |
| request\_status   | enum('APPROVED','PENDING')            | Part of KEY (request\_status)         |
| requested\_by     | bigint(20)                            | None                                  |
| request\_time     | datetime                              | None                                  |
| approved\_by      | bigint(20)                            | None                                  |
| last\_changed\_on | datetime                              | None                                  |

## Table: `entity_status_labels`


| Column Name        | Data Type                 | Index                            |
| ------------------ | ------------------------- | -------------------------------- |
| id                 | int(11)                   | Part of PRIMARY KEY (id)         |
| org\_id            | int(11)                   | Part of KEY (org\_id)            |
| entity\_status\_id | int(11)                   | Part of KEY (entity\_status\_id) |
| label              | varchar(50)               | None                             |
| is\_active         | tinyint(1)                | Part of KEY (is\_active)         |
| is\_default        | tinyint(1)                | Part of KEY (is\_default)        |
| created\_on        | datetime                  | None                             |
| updated\_on        | timestamp                 | None                             |
| description        | text                      | None                             |
| usage\_type        | enum('NORMAL','INTERNAL') | None                             |

## Table: `uploaded_files`


| Column Name                    | Data Type                            | Index                    |
| ------------------------------ | ------------------------------------ | ------------------------ |
| id                             | bigint(20)                           | Part of PRIMARY KEY (id) |
| org\_id                        | bigint(20)                           | Part of KEY (org\_id)    |
| file\_tag                      | varchar(50)                          | None                     |
| file\_contents                 | longblob                             | None                     |
| file\_name                     | varchar(55)                          | None                     |
| extension                      | varchar(20)                          | None                     |
| mime\_type                     | varchar(50)                          | None                     |
| created\_time                  | datetime                             | None                     |
| created\_by                    | bigint(20)                           | None                     |
| client\_file\_name             | varchar(255)                         | None                     |
| client\_file\_monitoring\_type | enum('FILE\_CHECK','PROCESS\_CHECK') | None                     |

## Table: `store_tasks`


| Column Name                     | Data Type                                    | Index                            |
| ------------------------------- | -------------------------------------------- | -------------------------------- |
| id                              | int(11)                                      | Part of PRIMARY KEY (id)         |
| org\_id                         | int(11)                                      | Part of KEY (org\_id)            |
| campaign\_id                    | int(11)                                      | None                             |
| msg\_queue\_id                  | int(11)                                      | None                             |
| task\_name                      | varchar(255)                                 | None                             |
| task\_target\_type              | enum('CUSTOMER','CASHIER')                   | None                             |
| task\_action\_type              | enum('CALL','PROMOTE','INTERNAL','REMINDER') | None                             |
| task\_start\_date               | datetime                                     | None                             |
| task\_completion\_in\_days      | int(11)                                      | None                             |
| task\_display\_title            | mediumtext                                   | None                             |
| task\_display\_text             | mediumtext                                   | None                             |
| task\_priority                  | int(11)                                      | None                             |
| task\_status\_options           | mediumtext                                   | None                             |
| task\_status\_default\_option   | varchar(255)                                 | None                             |
| task\_status\_completed\_option | varchar(255)                                 | None                             |
| params                          | mediumtext                                   | None                             |
| is\_enabled                     | tinyint(1)                                   | None                             |
| tasks\_entries\_created\_by     | int(11)                                      | None                             |
| tasks\_entries\_created\_on     | datetime                                     | None                             |
| created\_on                     | datetime                                     | None                             |
| created\_by                     | int(11)                                      | None                             |
| modified\_on                    | datetime                                     | None                             |
| modified\_by                    | int(11)                                      | None                             |
| auto\_update\_time              | timestamp                                    | Part of KEY (auto\_update\_time) |

## Table: `cashier_targets`


| Column Name      | Data Type    | Index                     |
| ---------------- | ------------ | ------------------------- |
| id               | int(11)      | Part of PRIMARY KEY (id)  |
| org\_id          | int(11)      | Part of KEY (org\_id)     |
| cashier\_id      | int(11)      | Part of KEY (cashier\_id) |
| start\_date      | date         | None                      |
| end\_date        | date         | None                      |
| target           | int(11)      | None                      |
| target\_achieved | tinyint(1)   | None                      |
| achieved\_time   | datetime     | None                      |
| cashier\_code    | varchar(250) | None                      |

## Table: `transaction_org_currency_log`


| Column Name                      | Data Type                                  | Index                                 |
| -------------------------------- | ------------------------------------------ | ------------------------------------- |
| id                               | int(11)                                    | Part of PRIMARY KEY (id)              |
| org\_id                          | bigint(20)                                 | Part of UNIQUE KEY (org\_id)          |
| ref\_id                          | bigint(20)                                 | Part of UNIQUE KEY (ref\_id)          |
| base\_currency\_ratio\_id        | int(10)                                    | None                                  |
| transaction\_currency\_ratio\_id | int(10)                                    | None                                  |
| ref\_type                        | enum('REGULAR','RETURN','NOT\_INTERESTED') | Part of UNIQUE KEY (ref\_type)        |
| auto\_update\_timestamp          | timestamp                                  | Part of KEY (auto\_update\_timestamp) |

## Table: `transfer_points_log`


| Column Name   | Data Type                              | Index                         |
| ------------- | -------------------------------------- | ----------------------------- |
| id            | int(11)                                | Part of PRIMARY KEY (id)      |
| org\_id       | int(11)                                | Part of PRIMARY KEY (org\_id) |
| user\_id      | int(11)                                | None                          |
| recepient     | varchar(15)                            | None                          |
| points        | int(11)                                | None                          |
| added\_on     | datetime                               | None                          |
| added\_by     | int(11)                                | None                          |
| processed\_by | int(11)                                | None                          |
| processed\_on | datetime                               | None                          |
| status        | enum('PROCESSING','CLOSED','REJECTED') | None                          |
| notes         | varchar(100)                           | None                          |

## Table: `loyalty_promotional_campaign_bills`


| Column Name      | Data Type  | Index                    |
| ---------------- | ---------- | ------------------------ |
| id               | bigint(20) | Part of PRIMARY KEY (id) |
| org\_id          | bigint(20) | Part of KEY (org\_id)    |
| user\_id         | bigint(20) | Part of KEY (user\_id)   |
| loyalty\_log\_id | bigint(20) | None                     |
| series\_id       | bigint(20) | None                     |
| details          | text       | None                     |

## Table: `store_perf_metrics`


| Column Name              | Data Type  | Index                           |
| ------------------------ | ---------- | ------------------------------- |
| org\_id                  | bigint(20) | Part of PRIMARY KEY (org\_id)   |
| store\_id                | bigint(20) | Part of PRIMARY KEY (store\_id) |
| bills\_per\_day\_weekday | float      | None                            |
| bills\_per\_day\_weekend | float      | None                            |
| last\_updated            | datetime   | None                            |

## Table: `comm_scopes`


| Column Name | Data Type    | Index                    |
| ----------- | ------------ | ------------------------ |
| id          | int(11)      | Part of PRIMARY KEY (id) |
| scope       | varchar(255) | None                     |
| description | varchar(255) | None                     |
| is\_valid   | tinyint(1)   | None                     |

## Table: `tracker_blackout_periods`


| Column Name   | Data Type | Index                     |
| ------------- | --------- | ------------------------- |
| id            | int(11)   | Part of PRIMARY KEY (id)  |
| org\_id       | int(11)   | Part of KEY (org\_id)     |
| tracker\_id   | int(11)   | Part of KEY (tracker\_id) |
| period\_start | date      | None                      |
| period\_end   | date      | None                      |

## Table: `trans_messages`


| Column Name   | Data Type                                                                    | Index                       |
| ------------- | ---------------------------------------------------------------------------- | --------------------------- |
| id            | int(11)                                                                      | Part of PRIMARY KEY (id)    |
| org\_id       | int(11)                                                                      | Part of KEY (org\_id)       |
| message\_id   | bigint(20)                                                                   | Part of KEY (message\_id)   |
| user\_id      | bigint(11)                                                                   | Part of KEY (user\_id)      |
| receiver      | varchar(255)                                                                 | Part of KEY (receiver)      |
| type          | enum('EMAIL','SMS')                                                          | None                        |
| priority      | enum('HIGH','DEFAULT')                                                       | None                        |
| context\_type | enum('REGISTRATION','TRANSACTION','POINTS','VOUCHER','VALIDATION','GENERAL') | Part of KEY (context\_type) |
| context\_id   | int(11)                                                                      | None                        |
| sent\_by      | int(11)                                                                      | None                        |
| sent\_on      | datetime                                                                     | Part of KEY (sent\_on)      |
| updated\_on   | datetime                                                                     | None                        |
| client\_id    | int(11)                                                                      | None                        |
| status        | enum('SUBMITTED','SENT','DELIVERED','FAILED')                                | Part of KEY (status)        |
| reason        | varchar(255)                                                                 | None                        |

## Table: `validation_code`


| Column Name | Data Type                            | Index                     |
| ----------- | ------------------------------------ | ------------------------- |
| id          | int(10)                              | Part of PRIMARY KEY (id)  |
| org\_id     | int(11)                              | Part of KEY (org\_id)     |
| user\_id    | int(11)                              | Part of KEY (user\_id)    |
| code        | varchar(50)                          | Part of UNIQUE KEY (code) |
| valid\_upto | datetime                             | Part of KEY (valid\_upto) |
| reference   | varchar(50)                          | None                      |
| scope       | enum('COUPON','POINTS','GIFT\_CARD') | Part of KEY (scope)       |
| is\_valid   | tinyint(1)                           | Part of KEY (is\_valid)   |
| added\_by   | int(11)                              | None                      |
| added\_on   | datetime                             | None                      |
| updated\_on | timestamp                            | None                      |

## Table: `generic_validation_code`


| Column Name   | Data Type    | Index                       |
| ------------- | ------------ | --------------------------- |
| id            | int(10)      | Part of PRIMARY KEY (id)    |
| org\_id       | int(11)      | Part of KEY (org\_id)       |
| action        | varchar(50)  | None                        |
| code          | varchar(50)  | None                        |
| valid\_upto   | datetime     | None                        |
| is\_valid     | tinyint(1)   | Part of KEY (is\_valid)     |
| entity\_type  | varchar(100) | Part of KEY (entity\_type)  |
| entity\_value | varchar(100) | Part of KEY (entity\_value) |
| added\_by     | int(11)      | None                        |
| added\_on     | datetime     | None                        |
| updated\_on   | timestamp    | None                        |

## Table: `mlm_bills_processed`


| Column Name            | Data Type   | Index                                  |
| ---------------------- | ----------- | -------------------------------------- |
| org\_id                | bigint(20)  | Part of PRIMARY KEY (org\_id)          |
| loyalty\_log\_id       | bigint(20)  | Part of PRIMARY KEY (loyalty\_log\_id) |
| bill\_number           | varchar(55) | None                                   |
| processed\_time        | datetime    | None                                   |
| awarded\_ids           | text        | None                                   |
| awarded\_names         | mediumtext  | None                                   |
| total\_points\_awarded | float       | None                                   |

## Table: `card_gen_autoinr_values`


| Column Name        | Data Type  | Index                    |
| ------------------ | ---------- | ------------------------ |
| id                 | int(11)    | Part of PRIMARY KEY (id) |
| org\_id            | int(11)    | Part of KEY (org\_id)    |
| series\_id         | int(11)    | Part of KEY (series\_id) |
| value              | int(11)    | None                     |
| is\_active         | tinyint(1) | None                     |
| auto\_update\_time | timestamp  | None                     |
| last\_updated\_by  | int(11)    | None                     |

## Table: `returned_bills_failed_log`


| Column Name              | Data Type    | Index                    |
| ------------------------ | ------------ | ------------------------ |
| id                       | int(11)      | Part of PRIMARY KEY (id) |
| org\_id                  | int(11)      | Part of KEY (org\_id)    |
| user\_id                 | bigint(20)   | Part of KEY (user\_id)   |
| loyalty\_log\_id         | bigint(20)   | None                     |
| parent\_loyalty\_log\_id | bigint(20)   | None                     |
| reason                   | varchar(200) | None                     |
| bill\_number             | varchar(50)  | None                     |
| date                     | timestamp    | None                     |
| type                     | varchar(20)  | None                     |
| lineitem\_info           | longtext     | None                     |
| entered\_by              | int(11)      | None                     |
| added\_on                | timestamp    | Part of KEY (added\_on)  |

## Table: `transaction_tax_entity`


| Column Name             | Data Type                      | Index                            |
| ----------------------- | ------------------------------ | -------------------------------- |
| id                      | bigint(20)                     | Part of PRIMARY KEY (id)         |
| org\_id                 | bigint(20)                     | Part of KEY (org\_id)            |
| user\_id                | int(11)                        | Part of KEY (user\_id)           |
| transaction\_id         | bigint(20)                     | Part of KEY (transaction\_id)    |
| line\_item\_id          | bigint(20)                     | None                             |
| promotion\_id           | varchar(50)                    | None                             |
| promotion\_identifier   | varchar(100)                   | None                             |
| tax\_applied\_on        | enum('TRANSACTION','LINEITEM') | Part of KEY (tax\_applied\_on)   |
| tax\_external\_id       | varchar(50)                    | None                             |
| tax\_name               | varchar(50)                    | None                             |
| tax\_amount             | decimal(15,                    | None                             |
| tax\_additional\_amount | decimal(15,                    | None                             |
| tax\_rate               | decimal(15,                    | None                             |
| notes                   | varchar(50)                    | None                             |
| created\_by             | int(11)                        | None                             |
| created\_on             | timestamp                      | None                             |
| auto\_update\_time      | timestamp                      | Part of KEY (auto\_update\_time) |

## Table: `user_group_summary`


| Column Name                         | Data Type     | Index                            |
| ----------------------------------- | ------------- | -------------------------------- |
| id                                  | bigint(20)    | Part of PRIMARY KEY (id)         |
| org\_id                             | bigint(20)    | Part of KEY (org\_id)            |
| group\_id                           | varchar(50)   | Part of KEY (group\_id)          |
| member\_count                       | bigint(20)    | None                             |
| visits                              | bigint(20)    | None                             |
| lifetime\_purchases                 | decimal(20,3) | None                             |
| transactions\_total                 | bigint(20)    | None                             |
| transactions\_today                 | bigint(20)    | None                             |
| total\_quantity                     | bigint(20)    | None                             |
| last\_transaction\_on               | timestamp     | None                             |
| updated\_by                         | bigint(20)    | None                             |
| auto\_update\_time                  | timestamp     | Part of KEY (auto\_update\_time) |
| primary\_total\_purchases           | decimal(20,3) | None                             |
| primary\_total\_visits              | bigint(20)    | None                             |
| primary\_purchase\_contribution     | decimal(20,3) | None                             |
| primary\_total\_transactions        | bigint(20)    | None                             |
| primary\_group\_transactions        | bigint(20)    | None                             |
| primary\_total\_quantity            | bigint(20)    | None                             |
| primary\_group\_quantity            | bigint(20)    | None                             |
| primary\_group\_visits              | bigint(20)    | None                             |
| secondary\_group\_visits            | bigint(20)    | None                             |
| primary\_transactions\_today        | bigint(20)    | None                             |
| primary\_group\_transactions\_today | bigint(20)    | None                             |
| primary\_last\_transaction\_on      | timestamp     | None                             |
| secondary\_last\_transaction\_on    | timestamp     | None                             |
| last\_regular\_transaction\_on      | timestamp     | None                             |

## Table: `fleet_user_group_permission`


| Column Name        | Data Type    | Index                            |
| ------------------ | ------------ | -------------------------------- |
| id                 | bigint(20)   | Part of PRIMARY KEY (id)         |
| org\_id            | bigint(20)   | Part of KEY (org\_id)            |
| fleet\_user\_id    | bigint(20)   | Part of KEY (fleet\_user\_id)    |
| group\_id          | bigint(11)   | Part of KEY (group\_id)          |
| permission         | varchar(100) | None                             |
| is\_active         | tinyint(1)   | None                             |
| created\_on        | timestamp    | None                             |
| created\_by        | int(11)      | None                             |
| updated\_by        | int(11)      | None                             |
| auto\_update\_time | timestamp    | Part of KEY (auto\_update\_time) |

## Table: `customer_notes`


| Column Name | Data Type | Index                    |
| ----------- | --------- | ------------------------ |
| id          | int(11)   | Part of PRIMARY KEY (id) |
| org\_id     | int(20)   | Part of KEY (org\_id)    |
| user\_id    | int(11)   | Part of KEY (user\_id)   |
| assoc\_id   | int(20)   | None                     |
| description | text      | None                     |
| added\_by   | int(20)   | None                     |
| added\_on   | datetime  | None                     |

## Table: `user_data`


| Column Name | Data Type    | Index                         |
| ----------- | ------------ | ----------------------------- |
| id          | int(11)      | Part of PRIMARY KEY (id)      |
| user\_id    | int(11)      | Part of UNIQUE KEY (user\_id) |
| key         | varchar(255) | Part of UNIQUE KEY (key)      |
| type\_tag   | varchar(10)  | None                          |
| value       | mediumtext   | None                          |
| added       | datetime     | None                          |
| persistent  | tinyint(1)   | None                          |
| updated     | timestamp    | None                          |

## Table: `clientlog_meta`


| Column Name     | Data Type    | Index                      |
| --------------- | ------------ | -------------------------- |
| id              | int(11)      | Part of PRIMARY KEY (id)   |
| file\_handle    | varchar(50)  | None                       |
| org\_id         | bigint(20)   | Part of KEY (org\_id)      |
| entity\_id      | int(11)      | Part of KEY (entity\_id)   |
| logged\_time    | datetime     | Part of KEY (logged\_time) |
| uploaded\_time  | datetime     | None                       |
| file\_name      | varchar(255) | None                       |
| file\_signature | char(40)     | None                       |
| file\_size      | int(10)      | None                       |
| client\_ip      | bigint(20)   | None                       |
| file\_type      | varchar(15)  | None                       |

## Table: `cancelled_bills`


| Column Name   | Data Type   | Index                             |
| ------------- | ----------- | --------------------------------- |
| id            | bigint(20)  | Part of PRIMARY KEY (id)          |
| org\_id       | bigint(20)  | Part of KEY (org\_id)             |
| user\_id      | bigint(20)  | Part of KEY (user\_id)            |
| loyalty\_id   | bigint(20)  | Part of UNIQUE KEY (loyalty\_id)  |
| bill\_number  | varchar(55) | Part of UNIQUE KEY (bill\_number) |
| entered\_by   | int(11)     | None                              |
| entered\_time | datetime    | Part of KEY (entered\_time)       |

## Table: `org_sms_credits`


| Column Name         | Data Type  | Index                         |
| ------------------- | ---------- | ----------------------------- |
| org\_id             | bigint(20) | Part of PRIMARY KEY (org\_id) |
| value\_sms\_credits | int(11)    | None                          |
| bulk\_sms\_credits  | int(11)    | None                          |
| user\_credits       | int(11)    | None                          |
| created\_by         | bigint(20) | None                          |
| last\_updated\_by   | bigint(20) | None                          |
| last\_updated       | timestamp  | None                          |

## Table: `loyalty_rules`


| Column Name        | Data Type   | Index                         |
| ------------------ | ----------- | ----------------------------- |
| id                 | bigint(20)  | Part of PRIMARY KEY (id)      |
| org\_id            | bigint(20)  | Part of PRIMARY KEY (org\_id) |
| type               | varchar(15) | None                          |
| params             | mediumtext  | None                          |
| effect\_value      | float       | None                          |
| effect\_percentage | tinyint(1)  | None                          |
| effect\_increment  | tinyint(1)  | None                          |
| order              | int(11)     | None                          |
| created\_by        | bigint(20)  | None                          |
| modified           | timestamp   | None                          |

## Table: `users_optin_status`


| Column Name        | Data Type   | Index                                 |
| ------------------ | ----------- | ------------------------------------- |
| id                 | bigint(20)  | Part of PRIMARY KEY (id)              |
| ndnc\_status\_id   | bigint(20)  | Part of UNIQUE KEY (ndnc\_status\_id) |
| user\_id           | bigint(20)  | Part of KEY (user\_id)                |
| org\_id            | int(11)     | Part of KEY (org\_id)                 |
| mobile             | varchar(15) | Part of UNIQUE KEY (mobile)           |
| added\_on          | datetime    | None                                  |
| last\_updated      | date        | Part of KEY (last\_updated)           |
| is\_active         | tinyint(1)  | None                                  |
| auto\_update\_time | timestamp   | Part of KEY (auto\_update\_time)      |

## Table: `org_top_items`


| Column Name | Data Type  | Index                    |
| ----------- | ---------- | ------------------------ |
| id          | int(11)    | Part of PRIMARY KEY (id) |
| org\_id     | int(11)    | Part of KEY (org\_id)    |
| item\_id    | int(11)    | Part of KEY (item\_id)   |
| priority    | int(10)    | None                     |
| added\_by   | int(11)    | None                     |
| added\_on   | datetime   | None                     |
| is\_valid   | tinyint(1) | None                     |

## Table: `loyalty_redemptions`


| Column Name        | Data Type   | Index                            |
| ------------------ | ----------- | -------------------------------- |
| id                 | bigint(20)  | Part of PRIMARY KEY (id)         |
| loyalty\_id        | bigint(20)  | Part of KEY (loyalty\_id)        |
| org\_id            | bigint(20)  | Part of KEY (org\_id)            |
| user\_id           | bigint(20)  | Part of KEY (user\_id)           |
| points\_redeemed   | double      | None                             |
| voucher\_code      | varchar(20) | None                             |
| bill\_number       | varchar(50) | None                             |
| notes              | text        | None                             |
| entered\_by        | bigint(20)  | Part of KEY (entered\_by)        |
| date               | datetime    | None                             |
| counter\_id        | bigint(20)  | None                             |
| auto\_update\_time | timestamp   | Part of KEY (auto\_update\_time) |

## Table: `listeners`


| Column Name            | Data Type                   | Index                    |
| ---------------------- | --------------------------- | ------------------------ |
| id                     | bigint(20)                  | Part of PRIMARY KEY (id) |
| org\_id                | bigint(20)                  | Part of KEY (org\_id)    |
| event\_name            | varchar(255)                | None                     |
| event\_reference\_id   | bigint(20)                  | None                     |
| listener\_name         | varchar(255)                | None                     |
| listener\_condition    | longtext                    | None                     |
| listener\_params       | longtext                    | None                     |
| execution\_order       | int(11)                     | None                     |
| created\_by            | bigint(20)                  | None                     |
| created                | timestamp                   | None                     |
| exec\_in\_zone         | longtext                    | None                     |
| exec\_in\_stores\_json | longtext                    | None                     |
| event\_type            | enum('LISTENER','REMINDER') | None                     |
| start\_time            | datetime                    | None                     |
| end\_time              | datetime                    | None                     |

## Table: `points_split_history`


| Column Name             | Data Type                                                      | Index                       |
| ----------------------- | -------------------------------------------------------------- | --------------------------- |
| id                      | int(11)                                                        | Part of PRIMARY KEY (id)    |
| org\_id                 | int(11)                                                        | Part of KEY (org\_id)       |
| loyalty\_id             | int(11)                                                        | Part of KEY (loyalty\_id)   |
| reference\_id           | int(11)                                                        | Part of KEY (reference\_id) |
| loyalty\_redemption\_id | int(11)                                                        | None                        |
| debited\_at             | int(11)                                                        | Part of KEY (debited\_at)   |
| redeemed\_at            | int(11)                                                        | None                        |
| points\_debited         | int(11)                                                        | None                        |
| debited\_date           | datetime                                                       | None                        |
| type                    | enum('bill','awarded','bill\_expiry','awarded\_point\_expiry') | None                        |
| last\_updated           | timestamp                                                      | None                        |

## Table: `reminder`


| Column Name          | Data Type                                                                                                                                                                                                                                                                                                             | Index                         |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------- |
| id                   | int(11)                                                                                                                                                                                                                                                                                                               | Part of PRIMARY KEY (id)      |
| name                 | varchar(255)                                                                                                                                                                                                                                                                                                          | None                          |
| event\_name          | varchar(255)                                                                                                                                                                                                                                                                                                          | None                          |
| refrence\_id         | int(11)                                                                                                                                                                                                                                                                                                               | None                          |
| org\_id              | int(11)                                                                                                                                                                                                                                                                                                               | Part of PRIMARY KEY (org\_id) |
| group\_id            | int(11)                                                                                                                                                                                                                                                                                                               | None                          |
| audience\_group\_ids | varchar(255)                                                                                                                                                                                                                                                                                                          | None                          |
| pending\_groups      | varchar(255)                                                                                                                                                                                                                                                                                                          | None                          |
| state                | enum('RUNNING','PAUSE','STOP','REMINDING','OPEN','REMINDED')                                                                                                                                                                                                                                                          | None                          |
| reminder\_type       | enum('CAMPAIGN','REPORTS','REFERRAL','FEEDBACK','FTP\_IMPORT','OPTIN\_REMINDER','HEALTH','EMF','POINTS\_ENGINE','APILOGUPDATE','FTP\_DUMP','ARCHIVAL','EXPORT\_SCHEDULE\_TASK','CREATIVE\_ASSETS','EBILL\_SERVICE','EMAIL\_STATUS\_TASK','SCA\_NOTIFICATION','TIMELINE','VOUCHER\_REMINDER','PERSONALISED\_CAMPAIGN') | None                          |
| frequency            | varchar(255)                                                                                                                                                                                                                                                                                                          | None                          |
| limits               | varchar(255)                                                                                                                                                                                                                                                                                                          | None                          |
| scheduled\_by        | int(11)                                                                                                                                                                                                                                                                                                               | None                          |
| scheduler\_task\_id  | int(11)                                                                                                                                                                                                                                                                                                               | None                          |
| created\_date        | date                                                                                                                                                                                                                                                                                                                  | None                          |
| last\_updated        | timestamp                                                                                                                                                                                                                                                                                                             | None                          |

## Table: `gc_base`


| Column Name        | Data Type   | Index                           |
| ------------------ | ----------- | ------------------------------- |
| id                 | int(11)     | Part of PRIMARY KEY (id)        |
| card\_no           | varchar(20) | None                            |
| org\_id            | int(11)     | Part of KEY (org\_id)           |
| added\_on          | datetime    | None                            |
| added\_by          | int(11)     | None                            |
| issued\_to         | int(11)     | None                            |
| current\_user      | int(11)     | None                            |
| issued\_on         | datetime    | None                            |
| issued\_at         | int(11)     | None                            |
| current\_value     | double      | Part of KEY (current\_value)    |
| lifetime\_value    | double      | Part of KEY (lifetime\_value)   |
| encoded\_card\_no  | varchar(50) | Part of KEY (encoded\_card\_no) |
| auto\_update\_time | timestamp   | None                            |

## Table: `shipping_history`


| Column Name        | Data Type    | Index                            |
| ------------------ | ------------ | -------------------------------- |
| id                 | int(11)      | Part of PRIMARY KEY (id)         |
| org\_id            | int(11)      | Part of KEY (org\_id)            |
| shipping\_id       | int(11)      | Part of KEY (shipping\_id)       |
| comments           | varchar(100) | None                             |
| status             | varchar(100) | None                             |
| created\_on        | datetime     | None                             |
| created\_by        | int(11)      | None                             |
| auto\_update\_time | timestamp    | Part of KEY (auto\_update\_time) |

## Table: `tracker_data`


| Column Name   | Data Type  | Index                     |
| ------------- | ---------- | ------------------------- |
| id            | bigint(20) | Part of PRIMARY KEY (id)  |
| org\_id       | bigint(20) | Part of KEY (org\_id)     |
| tracker\_id   | bigint(20) | Part of KEY (tracker\_id) |
| user\_id      | bigint(20) | Part of KEY (user\_id)    |
| store\_id     | bigint(20) | None                      |
| value         | bigint(10) | None                      |
| date          | datetime   | None                      |
| reference\_id | bigint(20) | None                      |

## Table: `mlm_awarded_points`


| Column Name          | Data Type   | Index                                  |
| -------------------- | ----------- | -------------------------------------- |
| org\_id              | bigint(20)  | Part of PRIMARY KEY (org\_id)          |
| user\_id             | bigint(20)  | Part of PRIMARY KEY (user\_id)         |
| loyalty\_log\_id     | bigint(20)  | Part of PRIMARY KEY (loyalty\_log\_id) |
| awarded\_points      | int(11)     | None                                   |
| awarded\_time        | datetime    | None                                   |
| user\_slab           | varchar(30) | None                                   |
| distance\_from\_bill | int(11)     | None                                   |
| processed\_time      | datetime    | None                                   |

## Table: `stores_clusters`


| Column Name | Data Type  | Index                          |
| ----------- | ---------- | ------------------------------ |
| id          | int(11)    | Part of PRIMARY KEY (id)       |
| org\_id     | int(11)    | Part of UNIQUE KEY (org\_id)   |
| store\_id   | bigint(20) | Part of UNIQUE KEY (store\_id) |
| value\_id   | int(11)    | None                           |
| added\_on   | datetime   | None                           |

## Table: `custom_sender`


| Column Name     | Data Type   | Index                         |
| --------------- | ----------- | ----------------------------- |
| org\_id         | bigint(20)  | Part of PRIMARY KEY (org\_id) |
| sender\_gsm     | varchar(20) | None                          |
| sender\_cdma    | varchar(20) | None                          |
| sender\_label   | varchar(50) | None                          |
| replyto\_email  | varchar(50) | None                          |
| sender\_email   | varchar(50) | None                          |
| last\_updated   | timestamp   | None                          |
| date\_activated | datetime    | None                          |

## Table: `transaction_delivery_status_changelog`


| Column Name       | Data Type                                                            | Index                    |
| ----------------- | -------------------------------------------------------------------- | ------------------------ |
| id                | int(11)                                                              | Part of PRIMARY KEY (id) |
| transaction\_id   | bigint(20)                                                           | None                     |
| transaction\_type | enum('REGULAR','RETURN','NOT\_INTERESTED','NOT\_INTERESTED\_RETURN') | None                     |
| delivery\_status  | enum('PLACED','PROCESSED','SHIPPED','DELIVERED','RETURNED')          | None                     |
| updated\_by       | int(11)                                                              | None                     |
| updated\_on       | timestamp                                                            | None                     |

## Table: `shipping`


| Column Name              | Data Type                      | Index                                       |
| ------------------------ | ------------------------------ | ------------------------------------------- |
| id                       | bigint(20)                     | Part of PRIMARY KEY (id)                    |
| org\_id                  | int(11)                        | Part of KEY (org\_id)                       |
| bill\_id                 | bigint(20)                     | Part of KEY (bill\_id)                      |
| shipping\_external\_id   | varchar(200)                   | Part of UNIQUE KEY (shipping\_external\_id) |
| courier\_name            | varchar(100)                   | None                                        |
| tracking\_number         | varchar(100)                   | None                                        |
| invoice\_number          | varchar(100)                   | None                                        |
| shipping\_cost           | double                         | None                                        |
| shipment\_type\_id       | int(11)                        | None                                        |
| source\_location\_id     | int(11)                        | None                                        |
| shipping\_contact\_id    | int(11)                        | None                                        |
| verification\_method     | varchar(100)                   | None                                        |
| comments                 | varchar(100)                   | None                                        |
| amount\_to\_collect      | double                         | None                                        |
| pickup\_by               | varchar(100)                   | None                                        |
| pickup\_time             | datetime                       | None                                        |
| expected\_delivery\_date | datetime                       | None                                        |
| delivery\_mode\_id       | int(11)                        | None                                        |
| created\_on              | datetime                       | None                                        |
| last\_updated\_on        | datetime                       | None                                        |
| expected\_delivery\_time | datetime                       | None                                        |
| last\_updated\_by        | int(11)                        | None                                        |
| created\_by              | int(11)                        | None                                        |
| auto\_update\_time       | timestamp                      | Part of KEY (auto\_update\_time)            |
| bill\_type               | enum('loyalty','non\_loyalty') | None                                        |

## Table: `shipping_item_details`


| Column Name          | Data Type  | Index                            |
| -------------------- | ---------- | -------------------------------- |
| id                   | int(11)    | Part of PRIMARY KEY (id)         |
| org\_id              | int(11)    | Part of KEY (org\_id)            |
| bill\_line\_item\_id | bigint(20) | None                             |
| quantity             | double     | None                             |
| shipping\_id         | int(11)    | Part of KEY (shipping\_id)       |
| auto\_update\_time   | timestamp  | Part of KEY (auto\_update\_time) |

## Table: `not_interested_return_bill_lineitems`


| Column Name                       | Data Type   | Index                                           |
| --------------------------------- | ----------- | ----------------------------------------------- |
| id                                | bigint(20)  | Part of PRIMARY KEY (id)                        |
| org\_id                           | bigint(20)  | Part of KEY (org\_id)                           |
| not\_interested\_return\_bill\_id | bigint(20)  | Part of KEY (not\_interested\_return\_bill\_id) |
| serial                            | int(11)     | None                                            |
| item\_code                        | varchar(20) | None                                            |
| description                       | tinytext    | None                                            |
| rate                              | double      | None                                            |
| qty                               | double      | None                                            |
| value                             | double      | None                                            |
| discount\_value                   | double      | None                                            |
| amount                            | double      | None                                            |
| lineitem\_id                      | int(11)     | None                                            |
| added\_on                         | datetime    | None                                            |
| auto\_update\_time                | timestamp   | Part of KEY (auto\_update\_time)                |

## Table: `user_group_pending_requests`


| Column Name        | Data Type                          | Index                            |
| ------------------ | ---------------------------------- | -------------------------------- |
| id                 | bigint(20)                         | Part of PRIMARY KEY (id)         |
| org\_id            | bigint(20)                         | Part of KEY (org\_id)            |
| group\_id          | varchar(50)                        | Part of KEY (group\_id)          |
| user\_id           | bigint(20)                         | Part of KEY (user\_id)           |
| status             | enum('OPEN','ACCEPTED','REJECTED') | Part of KEY (status)             |
| requested\_on      | timestamp                          | None                             |
| requested\_by      | bigint(20)                         | None                             |
| auto\_update\_time | timestamp                          | Part of KEY (auto\_update\_time) |

## Table: `selected_fields_for_reports`


| Column Name | Data Type   | Index |
| ----------- | ----------- | ----- |
| report\_id  | int(11)     | None  |
| field\_name | varchar(30) | None  |
| org\_id     | int(11)     | None  |

## Table: `store_error`


| Column Name   | Data Type | Index                   |
| ------------- | --------- | ----------------------- |
| org\_id       | int(11)   | Part of KEY (org\_id)   |
| store\_id     | int(11)   | Part of KEY (store\_id) |
| error\_id     | int(11)   | Part of KEY (error\_id) |
| last\_updated | timestamp | None                    |

## Table: `not_interested_return_bills`


| Column Name                                | Data Type                                                                             | Index                                                    |
| ------------------------------------------ | ------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| id                                         | bigint(20)                                                                            | Part of PRIMARY KEY (id)                                 |
| org\_id                                    | bigint(20)                                                                            | Part of KEY (org\_id)                                    |
| bill\_number                               | varchar(255)                                                                          | Part of KEY (bill\_number)                               |
| amount                                     | double                                                                                | None                                                     |
| gross\_amount                              | double                                                                                | None                                                     |
| entered\_by                                | int(11)                                                                               | None                                                     |
| returned\_on                               | datetime                                                                              | Part of KEY (returned\_on)                               |
| loyalty\_not\_interested\_bill\_id         | bigint(20)                                                                            | Part of KEY (loyalty\_not\_interested\_bill\_id)         |
| parent\_loyalty\_not\_interested\_bill\_id | bigint(20)                                                                            | Part of KEY (parent\_loyalty\_not\_interested\_bill\_id) |
| previous\_till\_id                         | int(11)                                                                               | None                                                     |
| previous\_bill\_date                       | datetime                                                                              | None                                                     |
| type                                       | enum('FULL','LINE\_ITEM','AMOUNT')                                                    | None                                                     |
| notes                                      | varchar(255)                                                                          | None                                                     |
| outlier\_status                            | enum('NORMAL','INTERNAL','FRAUD','OUTLIER','TEST','FAILED','OTHER','RETRO','DELETED') | None                                                     |
| added\_on                                  | datetime                                                                              | None                                                     |
| auto\_update\_time                         | timestamp                                                                             | Part of KEY (auto\_update\_time)                         |
| parent\_bill\_number                       | varchar(255)                                                                          | None                                                     |

## Table: `loyalty_details`


| Column Name                | Data Type    | Index                             |
| -------------------------- | ------------ | --------------------------------- |
| loyalty\_id                | int(11)      | Part of PRIMARY KEY (loyalty\_id) |
| org\_id                    | int(11)      | None                              |
| registered\_at             | int(11)      | None                              |
| first\_bill\_store         | int(11)      | None                              |
| last\_bill\_store          | int(11)      | None                              |
| count\_last\_bill\_store   | int(11)      | None                              |
| majority\_store            | int(11)      | None                              |
| count\_of\_majority\_store | int(11)      | None                              |
| total\_bills               | int(11)      | None                              |
| json\_fields               | varchar(500) | None                              |
| last\_updated\_by          | int(11)      | None                              |
| last\_updated              | timestamp    | None                              |

## Table: `leads_sub_status`


| Column Name        | Data Type                                      | Index                            |
| ------------------ | ---------------------------------------------- | -------------------------------- |
| id                 | int(11)                                        | Part of PRIMARY KEY (id)         |
| org\_id            | bigint(20)                                     | Part of KEY (org\_id)            |
| status             | enum('OPEN','WON','LOST','ON\_HOLD','DELETED') | Part of KEY (status)             |
| sub\_status        | varchar(200)                                   | None                             |
| created\_date      | timestamp                                      | None                             |
| created\_by        | bigint(20)                                     | None                             |
| updated\_by        | bigint(20)                                     | None                             |
| auto\_update\_time | timestamp                                      | Part of KEY (auto\_update\_time) |

## Table: `redundant_entities`


| Column Name        | Data Type             | Index                                  |
| ------------------ | --------------------- | -------------------------------------- |
| id                 | bigint(20)            | Part of PRIMARY KEY (id)               |
| org\_id            | bigint(20)            | Part of KEY (org\_id)                  |
| identifier\_type   | varchar(100)          | Part of UNIQUE KEY (identifier\_type)  |
| identifier\_value  | varchar(100)          | Part of UNIQUE KEY (identifier\_value) |
| source             | enum('pii\_deletion') | None                                   |
| entity\_id         | bigint(20)            | Part of KEY (entity\_id)               |
| added\_on          | timestamp             | None                                   |
| auto\_update\_time | timestamp             | Part of KEY (auto\_update\_time)       |

## Table: `redeem_points_offline_requests`


| Column Name              | Data Type    | Index                    |
| ------------------------ | ------------ | ------------------------ |
| id                       | int(11)      | Part of PRIMARY KEY (id) |
| org\_id                  | int(11)      | Part of KEY (org\_id)    |
| user\_id                 | bigint(20)   | Part of KEY (user\_id)   |
| bill\_number             | varchar(255) | None                     |
| points\_to\_be\_redeemed | int(11)      | None                     |
| requested\_by            | bigint(20)   | None                     |
| requested\_on            | datetime     | None                     |
| done                     | int(1)       | None                     |
| modified\_on             | datetime     | None                     |
| modified\_by             | bigint(20)   | None                     |
| error\_msg               | mediumtext   | None                     |

## Table: `api_keys`


| Column Name | Data Type   | Index                         |
| ----------- | ----------- | ----------------------------- |
| org\_id     | bigint(20)  | Part of PRIMARY KEY (org\_id) |
| api\_key    | varchar(50) | None                          |
| created     | timestamp   | None                          |

## Table: `entity_mapping`


| Column Name           | Data Type   | Index                               |
| --------------------- | ----------- | ----------------------------------- |
| id                    | int(11)     | Part of PRIMARY KEY (id)            |
| org\_id               | int(11)     | Part of KEY (org\_id)               |
| entity\_type          | varchar(50) | Part of KEY (entity\_type)          |
| entity\_value         | bigint(20)  | Part of KEY (entity\_value)         |
| mapped\_entity\_type  | varchar(50) | Part of KEY (mapped\_entity\_type)  |
| mapped\_entity\_value | bigint(20)  | Part of KEY (mapped\_entity\_value) |
| is\_active            | tinyint(1)  | None                                |
| auto\_update\_time    | timestamp   | Part of KEY (auto\_update\_time)    |
| created\_by           | int(11)     | None                                |
| created\_on           | datetime    | None                                |
| last\_updated\_on     | datetime    | None                                |
| last\_updated\_by     | int(11)     | None                                |

## Table: `mobile_operator_mapping`


| Column Name      | Data Type    | Index                     |
| ---------------- | ------------ | ------------------------- |
| code             | int(11)      | Part of UNIQUE KEY (code) |
| operator\_circle | varchar(255) | None                      |
| operator         | varchar(255) | None                      |

## Table: `integration_post_output_file_mapping`


| Column Name   | Data Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Index                    |
| ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------ |
| org\_id       | int(11)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Part of KEY (org\_id)    |
| store\_id     | int(11)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Part of KEY (store\_id)  |
| file\_id      | int(11)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | None                     |
| created\_by   | int(11)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | None                     |
| file\_type    | enum('integration\_post\_output\_points\_redemption','integration\_post\_output\_voucher\_redemption','integration\_post\_output\_voucher\_issue','integration\_post\_output\_customer\_register','integration\_post\_output\_customer\_update','integration\_post\_output\_bill\_submit','integration\_post\_output\_auto\_configure','integration\_post\_output\_nightly\_sync','integration\_post\_output\_eod\_sync','integration\_post\_output\_pre\_auto\_configure','integration\_post\_output\_pre\_nightly\_sync','integration\_post\_output\_pre\_eod\_sync') | Part of KEY (file\_type) |
| created\_time | timestamp                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | None                     |

## Table: `bill_payment_details`


| Column Name      | Data Type    | Index                         |
| ---------------- | ------------ | ----------------------------- |
| id               | int(11)      | Part of PRIMARY KEY (id)      |
| org\_id          | int(11)      | Part of PRIMARY KEY (org\_id) |
| loyalty\_log\_id | int(11)      | None                          |
| type             | int(11)      | None                          |
| submitted\_type  | varchar(20)  | None                          |
| amount           | float        | None                          |
| notes            | varchar(100) | None                          |

## Table: `lead_follow_up`


| Column Name           | Data Type  | Index                            |
| --------------------- | ---------- | -------------------------------- |
| id                    | int(11)    | Part of PRIMARY KEY (id)         |
| org\_id               | bigint(20) | Part of KEY (org\_id)            |
| user\_id              | bigint(20) | Part of KEY (user\_id)           |
| lead\_id              | bigint(20) | Part of KEY (lead\_id)           |
| scheduled\_follow\_up | timestamp  | None                             |
| followed\_up\_on      | timestamp  | None                             |
| followed\_up\_by      | bigint(20) | None                             |
| next\_follow\_up      | timestamp  | None                             |
| created\_date         | timestamp  | None                             |
| created\_by           | bigint(20) | None                             |
| notes                 | text       | None                             |
| auto\_update\_time    | timestamp  | Part of KEY (auto\_update\_time) |

## Table: `fleet_role_permission`


| Column Name        | Data Type  | Index                    |
| ------------------ | ---------- | ------------------------ |
| id                 | bigint(20) | Part of PRIMARY KEY (id) |
| org\_id            | bigint(20) | Part of KEY (org\_id)    |
| role\_id           | int(11)    | Part of KEY (role\_id)   |
| permission\_id     | int(11)    | None                     |
| permission\_value  | tinyint(1) | None                     |
| is\_active         | TINYINT    | None                     |
| created\_on        | timestamp  | None                     |
| created\_by        | int(11)    | None                     |
| updated\_on        | timestamp  | None                     |
| updated\_by        | int(11)    | None                     |
| auto\_update\_time | timestamp  | None                     |

## Table: `transaction_type_update_log`


| Column Name             | Data Type     | Index                      |
| ----------------------- | ------------- | -------------------------- |
| id                      | bigint(20)    | Part of PRIMARY KEY (id)   |
| org\_id                 | int(11)       | Part of KEY (org\_id)      |
| till\_id                | bigint(20)    | Part of KEY (till\_id)     |
| user\_id                | bigint(20)    | Part of KEY (user\_id)     |
| client\_ip              | int(11)       | None                       |
| change\_type            | enum('RETRO') | Part of KEY (change\_type) |
| old\_id                 | bigint(20)    | Part of KEY (old\_id)      |
| new\_id                 | bigint(20)    | Part of KEY (new\_id)      |
| request\_time           | timestamp     | None                       |
| client\_signature       | longtext      | None                       |
| auto\_update\_timestamp | timestamp     | None                       |

## Table: `ebill_service`


| Column Name       | Data Type                                     | Index                         |
| ----------------- | --------------------------------------------- | ----------------------------- |
| id                | int(11)                                       | Part of PRIMARY KEY (id)      |
| org\_id           | int(11)                                       | Part of PRIMARY KEY (org\_id) |
| template\_id      | varchar(50)                                   | None                          |
| params            | mediumblob                                    | None                          |
| status            | enum('OPEN','PROCESSING','COMPLETED','ERROR') | None                          |
| updated\_by       | int(11)                                       | None                          |
| last\_updated\_on | datetime                                      | None                          |

## Table: `payment_types`


| Column Name | Data Type    | Index                    |
| ----------- | ------------ | ------------------------ |
| id          | int(11)      | Part of PRIMARY KEY (id) |
| type        | varchar(40)  | None                     |
| description | varchar(100) | None                     |
| added\_on   | datetime     | None                     |
| added\_by   | int(11)      | None                     |

## Table: `credits_log`


| Column Name         | Data Type  | Index                         |
| ------------------- | ---------- | ----------------------------- |
| id                  | int(11)    | Part of PRIMARY KEY (id)      |
| org\_id             | bigint(20) | Part of PRIMARY KEY (org\_id) |
| value\_sms\_credits | int(11)    | None                          |
| bulk\_sms\_credits  | int(11)    | None                          |
| user\_credits       | int(11)    | None                          |
| created\_by         | bigint(20) | None                          |
| added               | datetime   | None                          |

## Table: `task_status_customer`


| Column Name           | Data Type    | Index                             |
| --------------------- | ------------ | --------------------------------- |
| id                    | bigint(20)   | Part of PRIMARY KEY (id)          |
| task\_id              | bigint(20)   | Part of KEY (task\_id)            |
| org\_id               | bigint(20)   | Part of KEY (org\_id)             |
| store\_id             | int(11)      | Part of KEY (store\_id)           |
| customer\_id          | int(11)      | Part of UNIQUE KEY (customer\_id) |
| title                 | varchar(255) | None                              |
| body                  | mediumtext   | None                              |
| updated\_by\_till\_id | int(11)      | None                              |
| updated\_by           | int(11)      | None                              |
| created\_on           | datetime     | None                              |
| updated\_on           | datetime     | None                              |
| status                | int(11)      | None                              |
| auto\_update\_time    | timestamp    | Part of KEY (auto\_update\_time)  |

## Table: `org_data`


| Column Name | Data Type    | Index                        |
| ----------- | ------------ | ---------------------------- |
| id          | bigint(20)   | Part of PRIMARY KEY (id)     |
| org\_id     | bigint(20)   | Part of UNIQUE KEY (org\_id) |
| key         | varchar(100) | Part of UNIQUE KEY (key)     |
| type\_tag   | varchar(10)  | None                         |
| value       | mediumtext   | None                         |
| persistent  | int(11)      | None                         |
| added       | datetime     | None                         |
| updated     | timestamp    | None                         |

## Table: `fleet_users`


| Column Name              | Data Type  | Index                          |
| ------------------------ | ---------- | ------------------------------ |
| id                       | bigint(20) | Part of PRIMARY KEY (id)       |
| org\_id                  | int(11)    | Part of KEY (org\_id)          |
| role\_id                 | int(11)    | Part of KEY (role\_id)         |
| parent\_user\_id         | int(11)    | Part of KEY (parent\_user\_id) |
| user\_id                 | int(11)    | Part of KEY (user\_id)         |
| company\_id              | int(11)    | None                           |
| is\_active               | tinyint(1) | None                           |
| created\_on              | timestamp  | None                           |
| created\_by              | int(11)    | None                           |
| default\_child\_user\_id | int(11)    | None                           |
| auto\_update\_time       | timestamp  | None                           |

## Table: `returned_bills`


| Column Name              | Data Type                                                                     | Index                                  |
| ------------------------ | ----------------------------------------------------------------------------- | -------------------------------------- |
| id                       | int(11)                                                                       | Part of PRIMARY KEY (id)               |
| org\_id                  | int(11)                                                                       | Part of KEY (org\_id)                  |
| user\_id                 | bigint(20)                                                                    | Part of KEY (user\_id)                 |
| bill\_number             | varchar(255)                                                                  | Part of KEY (bill\_number)             |
| credit\_note             | varchar(255)                                                                  | None                                   |
| amount                   | double                                                                        | None                                   |
| gross\_amount            | double                                                                        | None                                   |
| points                   | int(11)                                                                       | None                                   |
| store\_id                | int(11)                                                                       | None                                   |
| returned\_on             | datetime                                                                      | Part of KEY (returned\_on)             |
| loyalty\_log\_id         | bigint(20)                                                                    | Part of KEY (loyalty\_log\_id)         |
| parent\_loyalty\_log\_id | bigint(20)                                                                    | Part of KEY (parent\_loyalty\_log\_id) |
| type                     | enum('FULL','LINE\_ITEM','AMOUNT','CANCELLED')                                | None                                   |
| notes                    | varchar(255)                                                                  | None                                   |
| added\_on                | datetime                                                                      | None                                   |
| auto\_update\_time       | timestamp                                                                     | Part of KEY (auto\_update\_time)       |
| parent\_bill\_number     | varchar(255)                                                                  | Part of KEY (parent\_bill\_number)     |
| returned\_bill\_date     | datetime                                                                      | None                                   |
| outlier\_status          | enum('NORMAL','INTERNAL','FRAUD','OUTLIER','TEST','FAILED','OTHER','DELETED') | None                                   |

## Table: `user_group_mapping`


| Column Name        | Data Type                            | Index                            |
| ------------------ | ------------------------------------ | -------------------------------- |
| id                 | bigint(20)                           | Part of PRIMARY KEY (id)         |
| org\_id            | bigint(20)                           | Part of KEY (org\_id)            |
| group\_id          | varchar(50)                          | Part of KEY (group\_id)          |
| user\_id           | bigint(20)                           | Part of KEY (user\_id)           |
| role               | enum('PRIMARY','SECONDARY','EXITED') | None                             |
| joined\_on         | timestamp                            | None                             |
| left\_on           | timestamp                            | None                             |
| added\_by          | bigint(20)                           | None                             |
| auto\_update\_time | timestamp                            | Part of KEY (auto\_update\_time) |
| join\_source       | varchar(50)                          | None                             |
| exit\_source       | varchar(50)                          | None                             |
| join\_account\_id  | varchar(50)                          | None                             |
| exit\_account\_id  | varchar(50)                          | None                             |

## Table: `custom_fields_data`


| Column Name | Data Type  | Index                          |
| ----------- | ---------- | ------------------------------ |
| id          | bigint(20) | Part of PRIMARY KEY (id)       |
| org\_id     | int(11)    | Part of KEY (org\_id)          |
| cf\_id      | int(11)    | Part of KEY (cf\_id)           |
| assoc\_id   | bigint(20) | Part of UNIQUE KEY (assoc\_id) |
| value       | longtext   | None                           |
| entered\_by | bigint(20) | None                           |
| modified    | timestamp  | Part of KEY (modified)         |

## Table: `loyalty_not_interested_bills`


| Column Name         | Data Type                                                                             | Index                            |
| ------------------- | ------------------------------------------------------------------------------------- | -------------------------------- |
| id                  | bigint(20)                                                                            | Part of PRIMARY KEY (id)         |
| org\_id             | bigint(20)                                                                            | Part of KEY (org\_id)            |
| bill\_number        | varchar(55)                                                                           | Part of KEY (bill\_number)       |
| bill\_amount        | double                                                                                | None                             |
| bill\_gross\_amount | double                                                                                | None                             |
| bill\_discount      | double                                                                                | None                             |
| reason              | varchar(255)                                                                          | None                             |
| billing\_time       | datetime                                                                              | Part of KEY (billing\_time)      |
| entered\_by         | bigint(20)                                                                            | Part of KEY (entered\_by)        |
| auto\_update\_time  | timestamp                                                                             | Part of KEY (auto\_update\_time) |
| outlier\_status     | enum('NORMAL','INTERNAL','FRAUD','OUTLIER','TEST','FAILED','OTHER','RETRO','DELETED') | None                             |

## Table: `transaction_promotion_evaluation_mapping`


| Column Name          | Data Type   | Index                              |
| -------------------- | ----------- | ---------------------------------- |
| id                   | int(11)     | Part of PRIMARY KEY (id)           |
| transaction\_id      | int(11)     | Part of KEY (transaction\_id)      |
| org\_id              | int(11)     | Part of KEY (org\_id)              |
| cart\_evaluation\_id | varchar(50) | Part of KEY (cart\_evaluation\_id) |
| auto\_update\_time   | timestamp   | Part of KEY (auto\_update\_time)   |

## Table: `consent_status`


| Column Name           | Data Type   | Index                       |
| --------------------- | ----------- | --------------------------- |
| id                    | int(11)     | Part of PRIMARY KEY (id)    |
| org\_id               | bigint(20)  | Part of KEY (org\_id)       |
| mobile                | varchar(25) | Part of UNIQUE KEY (mobile) |
| consent\_status       | tinyint(1)  | None                        |
| is\_consent\_required | tinyint(1)  | None                        |
| added\_on             | timestamp   | None                        |
| updated\_on           | timestamp   | None                        |

## Table: `missed_call_numbers`


| Column Name    | Data Type   | Index                               |
| -------------- | ----------- | ----------------------------------- |
| id             | int(11)     | Part of PRIMARY KEY (id)            |
| org\_id        | int(11)     | Part of UNIQUE KEY (org\_id)        |
| mobile\_number | varchar(20) | Part of UNIQUE KEY (mobile\_number) |
| user\_id       | bigint(20)  | None                                |
| called\_on     | datetime    | None                                |

## Table: `custom_fields_data_log`


| Column Name | Data Type  | Index                           |
| ----------- | ---------- | ------------------------------- |
| id          | bigint(20) | Part of PRIMARY KEY (id)        |
| update\_id  | bigint(20) | Part of UNIQUE KEY (update\_id) |
| org\_id     | int(11)    | Part of KEY (org\_id)           |
| cf\_id      | int(11)    | Part of KEY (cf\_id)            |
| assoc\_id   | bigint(20) | Part of KEY (assoc\_id)         |
| value       | mediumtext | None                            |
| entered\_by | bigint(20) | None                            |
| modified    | timestamp  | None                            |

## Table: `tracker_success_signalled_info`


| Column Name            | Data Type  | Index                                |
| ---------------------- | ---------- | ------------------------------------ |
| id                     | bigint(20) | Part of PRIMARY KEY (id)             |
| org\_id                | bigint(20) | Part of KEY (org\_id)                |
| tracker\_id            | int(11)    | Part of KEY (tracker\_id)            |
| tracker\_condition\_id | int(11)    | Part of KEY (tracker\_condition\_id) |
| user\_id               | bigint(20) | Part of KEY (user\_id)               |
| store\_id              | bigint(20) | None                                 |
| signalled\_on          | datetime   | None                                 |
| assoc\_id              | int(11)    | None                                 |

## Table: `card_series`


| Column Name                  | Data Type                                  | Index                        |
| ---------------------------- | ------------------------------------------ | ---------------------------- |
| id                           | int(11)                                    | Part of PRIMARY KEY (id)     |
| org\_id                      | int(11)                                    | Part of UNIQUE KEY (org\_id) |
| code                         | varchar(50)                                | Part of UNIQUE KEY (code)    |
| is\_active                   | tinyint(1)                                 | None                         |
| type                         | varchar(50)                                | None                         |
| description                  | text                                       | None                         |
| card\_generation\_enabled    | tinyint(1)                                 | None                         |
| card\_generation\_config\_id | int(11)                                    | None                         |
| auto\_update\_time           | timestamp                                  | None                         |
| created\_on                  | datetime                                   | None                         |
| created\_by                  | int(11)                                    | None                         |
| last\_updated\_by            | int(11)                                    | None                         |
| expiry\_days                 | int(5)                                     | None                         |
| max\_active\_cards           | int(5)                                     | None                         |
| trigger\_type                | enum('SERIES\_ID','OU\_ID','REGISTRATION') | None                         |
| org\_unit\_id                | int(11)                                    | None                         |

## Table: `lead_status_log`


| Column Name        | Data Type                                      | Index                            |
| ------------------ | ---------------------------------------------- | -------------------------------- |
| id                 | int(11)                                        | Part of PRIMARY KEY (id)         |
| org\_id            | bigint(20)                                     | Part of KEY (org\_id)            |
| user\_id           | bigint(20)                                     | Part of KEY (user\_id)           |
| lead\_id           | bigint(20)                                     | Part of KEY (lead\_id)           |
| status             | enum('OPEN','WON','LOST','ON\_HOLD','DELETED') | Part of KEY (status)             |
| sub\_status\_id    | int(11)                                        | None                             |
| created\_date      | timestamp                                      | None                             |
| created\_by        | bigint(20)                                     | None                             |
| reason\_id         | int(11)                                        | None                             |
| auto\_update\_time | timestamp                                      | Part of KEY (auto\_update\_time) |

## Table: `reminder_info`


| Column Name       | Data Type | Index                         |
| ----------------- | --------- | ----------------------------- |
| id                | int(11)   | Part of PRIMARY KEY (id)      |
| user\_id          | int(11)   | None                          |
| org\_id           | int(11)   | Part of PRIMARY KEY (org\_id) |
| reminder\_id      | int(11)   | None                          |
| voucher\_id       | int(11)   | None                          |
| reminder\_log\_id | int(11)   | None                          |
| last\_updated     | timestamp | None                          |

## Table: `loyalty_audit_log`


| Column Name | Data Type                                       | Index                         |
| ----------- | ----------------------------------------------- | ----------------------------- |
| id          | bigint(20)                                      | Part of PRIMARY KEY (id)      |
| user\_id    | bigint(20)                                      | None                          |
| event\_type | enum('conversion','non\_loyalty\_registration') | None                          |
| date        | timestamp                                       | None                          |
| org\_id     | bigint(20)                                      | Part of PRIMARY KEY (org\_id) |
| meta\_data  | text                                            | None                          |

## Table: `stores_clusters_values`


| Column Name | Data Type    | Index                            |
| ----------- | ------------ | -------------------------------- |
| id          | int(11)      | Part of PRIMARY KEY (id)         |
| org\_id     | int(11)      | Part of UNIQUE KEY (org\_id)     |
| group\_name | varchar(255) | Part of UNIQUE KEY (group\_name) |
| key         | mediumtext   | None                             |
| value       | mediumtext   | None                             |

## Table: `expired_loyalty_info_log`


| Column Name              | Data Type  | Index                             |
| ------------------------ | ---------- | --------------------------------- |
| id                       | bigint(20) | Part of PRIMARY KEY (id)          |
| org\_id                  | int(11)    | Part of KEY (org\_id)             |
| user\_id                 | bigint(20) | Part of KEY (user\_id)            |
| loyalty\_current\_points | float      | None                              |
| points\_expired          | int(11)    | None                              |
| last\_updated\_by        | bigint(20) | None                              |
| last\_updated\_on        | datetime   | None                              |
| entered\_by              | bigint(20) | None                              |
| expiry\_checked\_on      | datetime   | Part of KEY (expiry\_checked\_on) |

## Table: `redemption_request_log`


| Column Name             | Data Type                                          | Index                    |
| ----------------------- | -------------------------------------------------- | ------------------------ |
| id                      | bigint(20)                                         | Part of PRIMARY KEY (id) |
| org\_id                 | int(11)                                            | Part of KEY (org\_id)    |
| till\_id                | bigint(20)                                         | Part of KEY (till\_id)   |
| user\_id                | bigint(20)                                         | Part of KEY (user\_id)   |
| client\_ip              | int(11)                                            | None                     |
| request\_scope          | enum('POINTS','COUPONS','POINTS\_USING\_CURRENCY') | None                     |
| request\_type           | enum('REDEEM','ISREDEEMABLE')                      | None                     |
| request\_time           | timestamp                                          | None                     |
| client\_signature       | longtext                                           | None                     |
| redeemed\_item          | varbinary(100)                                     | None                     |
| skip\_validation        | tinyint(1)                                         | None                     |
| auto\_update\_timestamp | timestamp                                          | None                     |
| issue\_otp              | tinyint(1)                                         | None                     |

## Table: `transaction_promotion_redemption_log`


| Column Name             | Data Type   | Index                                 |
| ----------------------- | ----------- | ------------------------------------- |
| id                      | int(11)     | Part of PRIMARY KEY (id)              |
| transaction\_id         | int(11)     | None                                  |
| org\_id                 | int(11)     | Part of KEY (org\_id)                 |
| transaction\_identifier | varchar(50) | Part of KEY (transaction\_identifier) |
| redemption\_identifier  | varchar(50) | Part of KEY (redemption\_identifier)  |
| type                    | enum        | None                                  |
| auto\_update\_time      | timestamp   | Part of KEY (auto\_update\_time)      |

## Table: `contact`


| Column Name           | Data Type    | Index                               |
| --------------------- | ------------ | ----------------------------------- |
| id                    | int(11)      | Part of PRIMARY KEY (id)            |
| org\_id               | int(11)      | Part of KEY (org\_id)               |
| contact\_external\_id | varchar(100) | Part of KEY (contact\_external\_id) |
| address               | varchar(300) | None                                |
| address\_type\_id     | int(11)      | None                                |
| city                  | varchar(100) | None                                |
| country               | varchar(100) | None                                |
| email                 | varchar(100) | None                                |
| email2                | varchar(100) | None                                |
| entity\_id            | int(11)      | None                                |
| entity\_type          | varchar(100) | None                                |
| phone1                | varchar(100) | None                                |
| phone2                | varchar(100) | None                                |
| longitude             | varchar(100) | None                                |
| latitude              | varchar(100) | None                                |
| label                 | varchar(100) | None                                |
| google\_place\_id     | varchar(100) | None                                |
| notes                 | varchar(100) | None                                |
| source                | varchar(100) | None                                |
| state                 | varchar(100) | None                                |
| zipcode               | varchar(40)  | None                                |
| created\_on           | datetime     | None                                |
| created\_by           | int(11)      | None                                |
| last\_updated\_by     | int(11)      | None                                |
| is\_active            | tinyint(1)   | Part of KEY (is\_active)            |
| auto\_update\_time    | timestamp    | Part of KEY (auto\_update\_time)    |

## Table: `task`


| Column Name               | Data Type                               | Index                    |
| ------------------------- | --------------------------------------- | ------------------------ |
| id                        | bigint(20)                              | Part of PRIMARY KEY (id) |
| org\_id                   | bigint(20)                              | Part of KEY (org\_id)    |
| description               | mediumtext                              | None                     |
| title                     | varchar(255)                            | None                     |
| body                      | mediumtext                              | None                     |
| start\_date               | date                                    | None                     |
| end\_date                 | date                                    | None                     |
| expiry\_date              | date                                    | None                     |
| valid\_days\_from\_create | int(11)                                 | None                     |
| is\_memo                  | tinyint(1)                              | None                     |
| statuses                  | varchar(255)                            | None                     |
| tags                      | varchar(255)                            | None                     |
| status                    | int(11)                                 | None                     |
| updated\_by               | int(11)                                 | None                     |
| updated\_on               | datetime                                | None                     |
| action\_type              | enum('sms','email','call','none',       | None                     |
| action\_template          | mediumtext                              | None                     |
| created\_by\_type         | enum('manager','cashier','admin\_user') | None                     |
| created\_by\_id           | int(11)                                 | None                     |
| executable\_by\_type      | enum('store','cashier')                 | None                     |
| executable\_by\_ids       | mediumtext                              | None                     |
| execute\_by\_all          | tinyint(1)                              | None                     |
| customer\_target          | tinyint(1)                              | None                     |
| comment                   | varchar(256)                            | None                     |

## Table: `payment_mode_attribute_values`


| Column Name                                         | Data Type   | Index                                                             |
| --------------------------------------------------- | ----------- | ----------------------------------------------------------------- |
| id                                                  | bigint(20)  | Part of PRIMARY KEY (id)                                          |
| org\_id                                             | int(11)     | Part of KEY (org\_id)                                             |
| org\_payment\_mode\_attribute\_id                   | int(11)     | Part of KEY (org\_payment\_mode\_attribute\_id)                   |
| org\_payment\_mode\_id                              | int(11)     | None                                                              |
| payment\_mode\_id                                   | int(11)     | Part of KEY (payment\_mode\_id)                                   |
| payment\_mode\_attribute\_id                        | int(11)     | Part of KEY (payment\_mode\_attribute\_id)                        |
| payment\_mode\_details\_id                          | bigint(20)  | Part of KEY (payment\_mode\_details\_id)                          |
| payment\_mode\_attribute\_possible\_values\_id      | int(11)     | Part of KEY (payment\_mode\_attribute\_possible\_values\_id)      |
| org\_payment\_mode\_attribute\_possible\_values\_id | int(11)     | Part of KEY (org\_payment\_mode\_attribute\_possible\_values\_id) |
| value                                               | varchar(50) | None                                                              |
| added\_by                                           | int(11)     | None                                                              |
| added\_on                                           | datetime    | None                                                              |
| auto\_update\_time                                  | timestamp   | Part of KEY (auto\_update\_time)                                  |

## Table: `data_providers_file_mapping`


| Column Name   | Data Type  | Index                          |
| ------------- | ---------- | ------------------------------ |
| org\_id       | bigint(20) | Part of PRIMARY KEY (org\_id)  |
| user\_id      | bigint(20) | Part of PRIMARY KEY (user\_id) |
| file\_id      | bigint(20) | None                           |
| created\_by   | bigint(20) | None                           |
| created\_time | datetime   | None                           |

## Table: `loyalty_not_interested_bill_lineitems`


| Column Name               | Data Type                                                       | Index                                   |
| ------------------------- | --------------------------------------------------------------- | --------------------------------------- |
| id                        | bigint(20)                                                      | Part of PRIMARY KEY (id)                |
| org\_id                   | bigint(20)                                                      | Part of KEY (org\_id)                   |
| not\_interested\_bill\_id | bigint(20)                                                      | Part of KEY (not\_interested\_bill\_id) |
| serial                    | int(11)                                                         | None                                    |
| item\_code                | varchar(100)                                                    | None                                    |
| description               | mediumtext                                                      | None                                    |
| rate                      | double                                                          | None                                    |
| qty                       | double                                                          | None                                    |
| value                     | double                                                          | None                                    |
| discount\_value           | double                                                          | None                                    |
| amount                    | double                                                          | None                                    |
| store\_id                 | bigint(20)                                                      | None                                    |
| inventory\_item\_id       | bigint(20)                                                      | Part of KEY (inventory\_item\_id)       |
| auto\_update\_time        | timestamp                                                       | Part of KEY (auto\_update\_time)        |
| outlier\_status           | enum('INTERNAL','NORMAL','INVALID','OUTLIER','FAILED','OTHERS') | None                                    |

## Table: `emf_dvs_verification_log`


| Column Name          | Data Type                             | Index                         |
| -------------------- | ------------------------------------- | ----------------------------- |
| id                   | int(11)                               | Part of PRIMARY KEY (id)      |
| org\_id              | int(11)                               | Part of PRIMARY KEY (org\_id) |
| last\_verified\_id   | int(11)                               | None                          |
| verification\_status | enum('IN\_PROGRESS','SUCCESS','FAIL') | None                          |
| exception            | mediumtext                            | None                          |
| verified\_on         | datetime                              | None                          |

## Table: `emf_dvs_mismatch_summary`


| Column Name                   | Data Type  | Index                                |
| ----------------------------- | ---------- | ------------------------------------ |
| id                            | int(11)    | Part of PRIMARY KEY (id)             |
| verification\_log\_id         | int(11)    | None                                 |
| org\_id                       | int(11)    | Part of UNIQUE KEY (org\_id)         |
| customer\_id                  | int(11)    | Part of UNIQUE KEY (customer\_id)    |
| transaction\_id               | int(11)    | Part of UNIQUE KEY (transaction\_id) |
| dvs\_no\_of\_vouchers         | int(11)    | None                                 |
| emf\_no\_of\_vouchers         | int(11)    | None                                 |
| dvs\_voucher\_series\_id\_csv | mediumtext | None                                 |
| emf\_voucher\_series\_id\_csv | mediumtext | None                                 |

## Table: `card_series_program_mapping`


| Column Name          | Data Type | Index                                 |
| -------------------- | --------- | ------------------------------------- |
| id                   | int(11)   | Part of PRIMARY KEY (id)              |
| org\_id              | int(11)   | Part of KEY (org\_id)                 |
| loyalty\_program\_id | int(11)   | None                                  |
| card\_series\_id     | int(11)   | Part of UNIQUE KEY (card\_series\_id) |
| created\_on          | datetime  | None                                  |
| auto\_update\_time   | timestamp | Part of KEY (auto\_update\_time)      |

## Table: `system_rules`


| Column Name            | Data Type    | Index                            |
| ---------------------- | ------------ | -------------------------------- |
| id                     | int(11)      | Part of PRIMARY KEY (id)         |
| program\_id            | int(11)      | Part of UNIQUE KEY (program\_id) |
| org\_id                | int(11)      | Part of PRIMARY KEY (org\_id)    |
| name                   | varchar(255) | None                             |
| description            | longtext     | None                             |
| scopes\_templates\_xml | longtext     | None                             |
| action\_templates\_xml | longtext     | None                             |
| rulesets\_xml          | mediumtext   | None                             |
| created\_on            | datetime     | None                             |

## Table: `bulk_activity_summary`


| Column Name          | Data Type                                                                                                                                                                                                                                                                                                                    | Index                                     |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------- |
| id                   | int(11)                                                                                                                                                                                                                                                                                                                      | Part of PRIMARY KEY (id)                  |
| activity\_unique\_id | varchar(50)                                                                                                                                                                                                                                                                                                                  | Part of UNIQUE KEY (activity\_unique\_id) |
| org\_id              | int(11)                                                                                                                                                                                                                                                                                                                      | Part of KEY (org\_id)                     |
| program\_id          | int(11)                                                                                                                                                                                                                                                                                                                      | None                                      |
| program\_name        | varchar(255)                                                                                                                                                                                                                                                                                                                 | None                                      |
| activity\_name       | enum('POINTS\_EXPIRY\_REMINDER','POINTS\_EXPIRY','TIER\_DOWNGRADE','TIER\_DOWNGRADE\_REMINDER','TRACK\_CUSTOMER\_KPI','RECALCULATE\_EXPIRED\_KPI','DELAYED\_ACCRUAL\_TO\_REDEEMABLE','TIER\_DOWNGRADE\_ON\_RETURN','PROMOTION\_POINTS\_EXPIRY\_ADJUSTMENT','PARTNER\_PROGRAM\_EXPIRY\_REMINDER','POINTS\_LEDGER\_BULK\_JOB', | None                                      |
| num\_customers       | int(11)                                                                                                                                                                                                                                                                                                                      | None                                      |
| custom\_data         | mediumtext                                                                                                                                                                                                                                                                                                                   | None                                      |
| added\_on            | datetime                                                                                                                                                                                                                                                                                                                     | None                                      |
| status               | enum('INPROGRESS','FAILED','SUCCESS',                                                                                                                                                                                                                                                                                        | None                                      |
| error\_message       | mediumtext                                                                                                                                                                                                                                                                                                                   | None                                      |
| event\_log\_id       | bigint(20)                                                                                                                                                                                                                                                                                                                   | Part of KEY (event\_log\_id)              |
| auto\_update\_time   | timestamp                                                                                                                                                                                                                                                                                                                    | Part of KEY (auto\_update\_time)          |
| event\_unique\_id    | varchar(50)                                                                                                                                                                                                                                                                                                                  | None                                      |

## Table: `merge_customer_summary`


| Column Name        | Data Type              | Index                            |
| ------------------ | ---------------------- | -------------------------------- |
| id                 | int(11)                | Part of PRIMARY KEY (id)         |
| org\_id            | int(11)                | Part of KEY (org\_id)            |
| program\_id        | int(11)                | Part of KEY (program\_id)        |
| from\_customer\_id | int(11)                | Part of KEY (from\_customer\_id) |
| to\_customer\_id   | int(11)                | Part of KEY (to\_customer\_id)   |
| merged\_date       | datetime               | None                             |
| till\_id           | int(11)                | None                             |
| request\_id        | varchar(100)           | Part of KEY (request\_id)        |
| status             | enum('SUCCESS','FAIL') | None                             |
| error\_message     | mediumtext             | None                             |
| notes              | mediumtext             | None                             |
| auto\_update\_time | timestamp              | Part of KEY (auto\_update\_time) |
| event\_log\_id     | bigint(20)             | None                             |

## Table: `event_sub_types`


| Column Name | Data Type    | Index                     |
| ----------- | ------------ | ------------------------- |
| id          | int(11)      | Part of PRIMARY KEY (id)  |
| name        | varchar(255) | Part of UNIQUE KEY (name) |
| description | mediumtext   | None                      |
| created\_on | datetime     | None                      |

## Table: `partner_program_slabs`


| Column Name          | Data Type   | Index                                     |
| -------------------- | ----------- | ----------------------------------------- |
| id                   | int(11)     | Part of PRIMARY KEY (id)                  |
| org\_id              | int(11)     | Part of UNIQUE KEY (org\_id)              |
| loyalty\_program\_id | int(11)     | Part of UNIQUE KEY (loyalty\_program\_id) |
| partner\_program\_id | int(11)     | Part of UNIQUE KEY (partner\_program\_id) |
| serial\_number       | smallint(6) | Part of UNIQUE KEY (serial\_number)       |
| name                 | varchar(64) | Part of UNIQUE KEY (name)                 |
| created\_on          | datetime    | None                                      |
| auto\_update\_time   | timestamp   | Part of KEY (auto\_update\_time)          |

## Table: `global_strategies_to_program_mapping`


| Column Name        | Data Type  | Index                            |
| ------------------ | ---------- | -------------------------------- |
| id                 | int(11)    | Part of PRIMARY KEY (id)         |
| org\_id            | int(11)    | Part of KEY (org\_id)            |
| strategy\_id       | int(11)    | Part of KEY (strategy\_id)       |
| program\_id        | int(11)    | Part of KEY (program\_id)        |
| is\_active         | tinyint(1) | None                             |
| created\_on        | datetime   | None                             |
| updated\_on        | datetime   | None                             |
| last\_created\_by  | BIGINT(20) | None                             |
| last\_updated\_by  | BIGINT(20) | None                             |
| auto\_update\_time | timestamp  | Part of KEY (auto\_update\_time) |

## Table: `points_awarded_customer_promotions`


| Column Name              | Data Type                                                                                                          | Index                                |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------ |
| id                       | bigint(20)                                                                                                         | Part of PRIMARY KEY (id)             |
| program\_id              | int(11)                                                                                                            | Part of KEY (program\_id)            |
| org\_id                  | int(11)                                                                                                            | Part of KEY (org\_id)                |
| customer\_id             | int(11)                                                                                                            | Part of KEY (customer\_id)           |
| original\_customer\_id   | int(11)                                                                                                            | Part of KEY (original\_customer\_id) |
| cps\_id                  | bigint(20)                                                                                                         | Part of KEY (cps\_id)                |
| promotion\_id            | int(11)                                                                                                            | Part of KEY (promotion\_id)          |
| point\_awarded\_id       | bigint(20)                                                                                                         | None                                 |
| point\_category\_id      | int(11)                                                                                                            | Part of KEY (point\_category\_id)    |
| status                   | enum('AVAILABLE','REDEEMED','EXPIRED','CONSUMED','RETURNED','POINT\_CATEGORY\_CHANGED','CONSUMED\_BY\_CONVERSION') | Part of KEY (status)                 |
| allocation\_strategy\_id | int(11)                                                                                                            | None                                 |
| points\_value            | decimal(15,3)                                                                                                      | None                                 |
| redeemed\_value          | decimal(15,3)                                                                                                      | None                                 |
| expired\_value           | decimal(15,3)                                                                                                      | None                                 |
| returned\_value          | decimal(15,3)                                                                                                      | None                                 |
| original\_points         | decimal(15,3)                                                                                                      | None                                 |
| awarded\_date            | datetime                                                                                                           | Part of KEY (awarded\_date)          |
| till\_id                 | int(11)                                                                                                            | None                                 |
| expiry\_strategy\_id     | int(11)                                                                                                            | None                                 |
| expiry\_date             | datetime                                                                                                           | Part of KEY (expiry\_date)           |
| auto\_update\_time       | timestamp                                                                                                          | Part of KEY (auto\_update\_time)     |
| event\_log\_id           | bigint(20)                                                                                                         | Part of KEY (event\_log\_id)         |

## Table: `system_rules_scopes_property_values`


| Column Name         | Data Type  | Index                             |
| ------------------- | ---------- | --------------------------------- |
| id                  | int(11)    | Part of PRIMARY KEY (id)          |
| org\_id             | int(11)    | Part of PRIMARY KEY (org\_id)     |
| program\_id         | int(11)    | Part of KEY (program\_id)         |
| system\_rule\_id    | int(11)    | Part of KEY (system\_rule\_id)    |
| scope\_id           | int(11)    | Part of KEY (scope\_id)           |
| scope\_property\_id | int(11)    | Part of KEY (scope\_property\_id) |
| value               | mediumtext | None                              |

## Table: `customer_enrollment`


| Column Name              | Data Type                | Index                             |
| ------------------------ | ------------------------ | --------------------------------- |
| id                       | bigint(20)               | Part of PRIMARY KEY (id)          |
| org\_id                  | int(11)                  | Part of KEY (org\_id)             |
| program\_id              | int(11)                  | Part of KEY (program\_id)         |
| customer\_id             | int(11)                  | Part of KEY (customer\_id)        |
| entity\_type             | enum('CUSTOMER','FLEET') | Part of UNIQUE KEY (entity\_type) |
| is\_active               | tinyint(1)               | None                              |
| current\_slab\_id        | int(11)                  | None                              |
| lifetime\_purchases      | decimal(15,3)            | None                              |
| visits                   | int(11)                  | None                              |
| enrollment\_date         | datetime                 | None                              |
| termination\_date        | datetime                 | None                              |
| last\_slab\_change\_date | datetime                 | None                              |
| slab\_expiry\_date       | datetime                 | Part of KEY (slab\_expiry\_date)  |
| auto\_update\_time       | timestamp                | Part of KEY (auto\_update\_time)  |
| event\_log\_id           | bigint(20)               | Part of KEY (event\_log\_id)      |

## Table: `side_effects_tracking`


| Column Name        | Data Type                                                                         | Index                               |
| ------------------ | --------------------------------------------------------------------------------- | ----------------------------------- |
| id                 | bigint(20)                                                                        | Part of PRIMARY KEY (id)            |
| org\_id            | int(11)                                                                           | Part of PRIMARY KEY (org\_id)       |
| customer\_id       | bigint(20)                                                                        | Part of UNIQUE KEY (customer\_id)   |
| event\_log\_id     | bigint(20)                                                                        | Part of UNIQUE KEY (event\_log\_id) |
| type               | enum('NORMAL','RETURN')                                                           | Part of UNIQUE KEY (type)           |
| tracking\_type     | enum('POINTS','LINEITEM','TRANSACTION','CAPPING\_POINTS','ALTERNATE\_CURRENCIES', | Part of UNIQUE KEY (tracking\_type) |
| side\_effects      | mediumtext                                                                        | None                                |
| created\_on        | datetime                                                                          | None                                |
| auto\_update\_time | timestamp                                                                         | None                                |

## Table: `action_points_details`


| Column Name               | Data Type                                                                                                                                                       | Index                                   |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------- |
| id                        | bigint(20)                                                                                                                                                      | Part of PRIMARY KEY (id)                |
| org\_id                   | int(11)                                                                                                                                                         | Part of PRIMARY KEY (org\_id)           |
| action\_source\_value\_id | bigint(20)                                                                                                                                                      | Part of KEY (action\_source\_value\_id) |
| points\_allocated         | DECIMAL(18,3)                                                                                                                                                   | None                                    |
| pa\_id                    | bigint(20)                                                                                                                                                      | Part of KEY (pa\_id)                    |
| pa\_type                  | enum('POINT\_AWARDED','POINT\_AWARDED\_BILL\_PROMOTION','POINT\_AWARDED\_LINEITEM','POINT\_AWARDED\_LINEITEM\_PROMOTION','POINT\_AWARDED\_CUSTOMER\_PROMOTION') | Part of KEY (pa\_type)                  |
| auto\_update\_time        | timestamp                                                                                                                                                       | Part of KEY (auto\_update\_time)        |

## Table: `points_transfer_summary`


| Column Name           | Data Type                                                                                                                                                       | Index                            |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- |
| id                    | bigint(20)                                                                                                                                                      | Part of PRIMARY KEY (id)         |
| org\_id               | int(11)                                                                                                                                                         | Part of KEY (org\_id)            |
| program\_id           | int(11)                                                                                                                                                         | Part of KEY (program\_id)        |
| point\_category\_id   | int(11)                                                                                                                                                         | None                             |
| points\_credited      | decimal(15,3)                                                                                                                                                   | None                             |
| points\_deducted      | decimal(15,3)                                                                                                                                                   | None                             |
| transfer\_type        | enum('TRANSFER','GROUP\_TRANSFER','TRANSFER\_BY\_CONTRIBUTION\_TO\_GROUP')                                                                                      | None                             |
| from\_customer\_id    | bigint(20)                                                                                                                                                      | Part of KEY (from\_customer\_id) |
| to\_customer\_id      | bigint(20)                                                                                                                                                      | Part of KEY (to\_customer\_id)   |
| from\_customer\_group | int(11)                                                                                                                                                         | None                             |
| to\_customer\_group   | int(11)                                                                                                                                                         | None                             |
| till\_id              | bigint(20)                                                                                                                                                      | None                             |
| transfer\_notes       | varchar(255)                                                                                                                                                    | None                             |
| transferred\_on       | datetime                                                                                                                                                        | Part of KEY (transferred\_on)    |
| auto\_update\_time    | timestamp                                                                                                                                                       | None                             |
| pa\_id                | bigint(20)                                                                                                                                                      | None                             |
| pa\_type              | enum('POINT\_AWARDED','POINT\_AWARDED\_BILL\_PROMOTION','POINT\_AWARDED\_LINEITEM','POINT\_AWARDED\_LINEITEM\_PROMOTION','POINT\_AWARDED\_CUSTOMER\_PROMOTION') | None                             |
| created\_on           | datetime                                                                                                                                                        | None                             |
| event\_log\_id        | bigint(20)                                                                                                                                                      | None                             |

## Table: `customer_transactions`


| Column Name        | Data Type                                                                                | Index                            |
| ------------------ | ---------------------------------------------------------------------------------------- | -------------------------------- |
| id                 | bigint(20)                                                                               | Part of PRIMARY KEY (id)         |
| org\_id            | int(11)                                                                                  | Part of KEY (org\_id)            |
| program\_id        | int(11)                                                                                  | Part of KEY (program\_id)        |
| customer\_id       | int(11)                                                                                  | Part of KEY (customer\_id)       |
| bill\_id           | bigint(20)                                                                               | Part of UNIQUE KEY (bill\_id)    |
| bill\_amount       | decimal(15,3)                                                                            | None                             |
| num\_lineitems     | int(11)                                                                                  | None                             |
| return\_amount     | decimal(15,3)                                                                            | None                             |
| status             | enum('NORMAL','INTERNAL','FRAUD','OUTLIER','TEST','FAILED','OTHER','DELETED','RETURNED') | Part of KEY (status)             |
| billing\_time      | datetime                                                                                 | Part of KEY (billing\_time)      |
| till\_id           | int(11)                                                                                  | None                             |
| auto\_update\_time | timestamp                                                                                | Part of KEY (auto\_update\_time) |

## Table: `promotions`


| Column Name                   | Data Type                                                                                                                                                                           | Index                             |
| ----------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------- |
| id                            | int(11)                                                                                                                                                                             | Part of KEY (id)                  |
| name                          | varchar(255)                                                                                                                                                                        | Part of KEY (name)                |
| identifier                    | varchar(255)                                                                                                                                                                        | Part of UNIQUE KEY (identifier)   |
| description                   | mediumtext                                                                                                                                                                          | None                              |
| program\_id                   | int(11)                                                                                                                                                                             | Part of KEY (program\_id)         |
| org\_id                       | int(11)                                                                                                                                                                             | Part of KEY (org\_id)             |
| event\_type\_id               | int(11)                                                                                                                                                                             | Part of KEY (event\_type\_id)     |
| is\_active                    | tinyint(1)                                                                                                                                                                          | None                              |
| is\_exclusive                 | tinyint(1)                                                                                                                                                                          | None                              |
| is\_system\_generated         | tinyint(1)                                                                                                                                                                          | None                              |
| use\_proportions              | tinyint(1)                                                                                                                                                                          | None                              |
| type                          | enum('BILL','LINEITEM','CUSTOMER','RETURN')                                                                                                                                         | None                              |
| behaviour\_type               | enum('SIMPLE','RANGE','KEYWORD','DEFAULT')                                                                                                                                          | None                              |
| promotion\_evaluation\_type   | enum('BEFORE\_EVENT','AFTER\_EVENT')                                                                                                                                                | None                              |
| source\_type                  | enum('UI','IMPORT','GOODWILL','CAMPAIGN','POINTS\_TRANSFER','IMPORT\_API','PROMOTION\_API','POINTS\_CONTRIBUTION\_TO\_GROUP','MANUAL\_POINTS\_ADJUSTMENT','BADGES','USER\_CREATED') | None                              |
| source\_id                    | int(11)                                                                                                                                                                             | None                              |
| start\_date                   | datetime                                                                                                                                                                            | None                              |
| end\_date                     | datetime                                                                                                                                                                            | None                              |
| start\_rule\_identifier       | varchar(255)                                                                                                                                                                        | None                              |
| created\_on                   | datetime                                                                                                                                                                            | None                              |
| auto\_update\_time            | timestamp                                                                                                                                                                           | Part of KEY (auto\_update\_time)  |
| event\_sub\_type\_id          | varchar(100)                                                                                                                                                                        | None                              |
| points\_per\_promotion\_limit | int(11)                                                                                                                                                                             | None                              |
| events\_per\_member\_limit    | int(11)                                                                                                                                                                             | None                              |
| points\_per\_member\_limit    | int(11)                                                                                                                                                                             | None                              |
| points\_per\_event\_limit     | int(11)                                                                                                                                                                             | None                              |
| last\_updated\_by             | BIGINT(20)                                                                                                                                                                          | None                              |
| loyalty\_config\_metadata     | json                                                                                                                                                                                | None                              |
| promotion\_type               | enum('GENERIC',                                                                                                                                                                     | None                              |
| entity\_version\_id           | bigint(20)                                                                                                                                                                          | Part of KEY (entity\_version\_id) |

## Table: `alternate_currencies_to_points_category_mapping`


| Column Name                       | Data Type                                             | Index                                                  |
| --------------------------------- | ----------------------------------------------------- | ------------------------------------------------------ |
| id                                | bigint                                                | Part of PRIMARY KEY (id)                               |
| org\_id                           | int                                                   | Part of UNIQUE KEY (org\_id)                           |
| alternate\_currencies\_identifier | varchar(6)                                            | Part of UNIQUE KEY (alternate\_currencies\_identifier) |
| point\_category\_id               | int                                                   | Part of UNIQUE KEY (point\_category\_id)               |
| category\_type                    | enum('REGULAR','PROMISED','EXTERNAL\_TRIGGER\_BASED') | Part of UNIQUE KEY (category\_type)                    |
| created\_on                       | timestamp                                             | None                                                   |
| created\_by                       | bigint                                                | None                                                   |
| last\_updated\_on                 | timestamp                                             | None                                                   |
| last\_updated\_by                 | bigint                                                | None                                                   |
| auto\_update\_time                | timestamp                                             | Part of KEY (auto\_update\_time)                       |

## Table: `liability_owners`


| Column Name        | Data Type                 | Index                            |
| ------------------ | ------------------------- | -------------------------------- |
| id                 | int(11)                   | Part of PRIMARY KEY (id)         |
| org\_id            | int(11)                   | Part of KEY (org\_id)            |
| owner\_id          | int(11)                   | Part of UNIQUE KEY (owner\_id)   |
| owner\_type        | enum('PROGRAM','PARTNER') | Part of UNIQUE KEY (owner\_type) |
| created\_by        | BIGINT(20)                | None                             |
| created\_on        | datetime                  | None                             |
| auto\_update\_time | timestamp                 | Part of KEY (auto\_update\_time) |

## Table: `tender_code_attribute`


| Column Name                | Data Type | Index                            |
| -------------------------- | --------- | -------------------------------- |
| id                         | int(11)   | Part of PRIMARY KEY (id)         |
| org\_id                    | int(11)   | Part of KEY (org\_id)            |
| program\_id                | int(11)   | None                             |
| tender\_code\_id           | int(11)   | None                             |
| org\_tender\_attribute\_id | int(11)   | None                             |
| org\_tender\_value\_id     | int(11)   | None                             |
| auto\_update\_time         | timestamp | Part of KEY (auto\_update\_time) |

## Table: `program_config_key_values`


| Column Name | Data Type  | Index                     |
| ----------- | ---------- | ------------------------- |
| id          | int(11)    | Part of PRIMARY KEY (id)  |
| key\_id     | int(11)    | Part of KEY (key\_id)     |
| org\_id     | int(11)    | Part of KEY (org\_id)     |
| program\_id | int(11)    | Part of KEY (program\_id) |
| value       | mediumtext | None                      |
| updated\_by | int(11)    | None                      |
| updated\_on | datetime   | None                      |
| is\_valid   | tinyint(1) | Part of KEY (is\_valid)   |

## Table: `points_redemption_summary`


| Column Name                 | Data Type                                                                | Index                                     |
| --------------------------- | ------------------------------------------------------------------------ | ----------------------------------------- |
| id                          | int(11)                                                                  | Part of PRIMARY KEY (id)                  |
| program\_id                 | int(1)                                                                   | Part of KEY (program\_id)                 |
| org\_id                     | int(11)                                                                  | Part of KEY (org\_id)                     |
| customer\_id                | int(11)                                                                  | Part of KEY (customer\_id)                |
| point\_category\_id         | int(11)                                                                  | None                                      |
| points\_redeemed            | decimal(15,3)                                                            | None                                      |
| redemption\_type            | enum('REDEMPTION','REVERSAL','GROUP\_REDEMPTION','REVERSAL\_ON\_RETURN') | Part of UNIQUE KEY (redemption\_type)     |
| source\_type                | enum('API','IMPORT')                                                     | None                                      |
| reference\_id               | int(11)                                                                  | None                                      |
| redemption\_id              | varchar(6)                                                               | Part of UNIQUE KEY (redemption\_id)       |
| external\_reference\_number | varchar(128)                                                             | Part of KEY (external\_reference\_number) |
| validation\_code            | varchar(20)                                                              | None                                      |
| bill\_id                    | bigint(20)                                                               | None                                      |
| bill\_number                | varchar(50)                                                              | None                                      |
| notes                       | text                                                                     | None                                      |
| purpose                     | text                                                                     | None                                      |
| redemption\_time            | datetime                                                                 | Part of UNIQUE KEY (redemption\_time)     |
| points\_redemption\_time    | datetime                                                                 | None                                      |
| till\_id                    | bigint(20)                                                               | Part of UNIQUE KEY (till\_id)             |
| request\_id                 | varchar(50)                                                              | None                                      |
| event\_log\_id              | bigint(20)                                                               | Part of KEY (event\_log\_id)              |
| auto\_update\_time          | timestamp                                                                | Part of KEY (auto\_update\_time)          |

## Table: `points_awarded_bill_lineitem_promotions`


| Column Name                  | Data Type                                                                                                          | Index                                   |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------ | --------------------------------------- |
| id                           | bigint(20)                                                                                                         | Part of PRIMARY KEY (id)                |
| program\_id                  | int(11)                                                                                                            | Part of KEY (program\_id)               |
| org\_id                      | int(11)                                                                                                            | Part of KEY (org\_id)                   |
| customer\_id                 | int(11)                                                                                                            | Part of KEY (customer\_id)              |
| original\_customer\_id       | int(11)                                                                                                            | Part of KEY (original\_customer\_id)    |
| cps\_id                      | bigint(20)                                                                                                         | Part of KEY (cps\_id)                   |
| promotion\_id                | int(11)                                                                                                            | Part of KEY (promotion\_id)             |
| bill\_id                     | bigint(11)                                                                                                         | None                                    |
| bill\_lineitem\_id           | bigint(20)                                                                                                         | Part of UNIQUE KEY (bill\_lineitem\_id) |
| point\_awarded\_id           | bigint(20)                                                                                                         | None                                    |
| point\_awarded\_lineitem\_id | bigint(20)                                                                                                         | None                                    |
| point\_category\_id          | int(11)                                                                                                            | Part of KEY (point\_category\_id)       |
| status                       | enum('AVAILABLE','REDEEMED','EXPIRED','CONSUMED','RETURNED','POINT\_CATEGORY\_CHANGED','CONSUMED\_BY\_CONVERSION') | Part of KEY (status)                    |
| allocation\_strategy\_id     | int(11)                                                                                                            | None                                    |
| points\_value                | decimal(15,3)                                                                                                      | None                                    |
| redeemed\_value              | decimal(15,3)                                                                                                      | None                                    |
| expired\_value               | decimal(15,3)                                                                                                      | None                                    |
| returned\_value              | decimal(15,3)                                                                                                      | None                                    |
| awarded\_date                | datetime                                                                                                           | Part of KEY (awarded\_date)             |
| till\_id                     | int(11)                                                                                                            | None                                    |
| expiry\_strategy\_id         | int(11)                                                                                                            | None                                    |
| expiry\_date                 | datetime                                                                                                           | Part of KEY (expiry\_date)              |
| auto\_update\_time           | timestamp                                                                                                          | Part of KEY (auto\_update\_time)        |
| event\_log\_id               | bigint(20)                                                                                                         | Part of KEY (event\_log\_id)            |

## Table: `customer_benefit_tracking`


| Column Name          | Data Type  | Index                                     |
| -------------------- | ---------- | ----------------------------------------- |
| id                   | bigint(20) | Part of PRIMARY KEY (id)                  |
| org\_id              | int(11)    | Part of KEY (org\_id)                     |
| loyalty\_program\_id | int(11)    | Part of UNIQUE KEY (loyalty\_program\_id) |
| customer\_id         | int(11)    | Part of UNIQUE KEY (customer\_id)         |
| benefit\_id          | int(11)    | Part of UNIQUE KEY (benefit\_id)          |
| cycle\_start\_time   | datetime   | Part of UNIQUE KEY (cycle\_start\_time)   |
| cycle\_end\_time     | datetime   | None                                      |
| additional\_value    | bigint(20) | None                                      |
| tracked\_value       | bigint(20) | None                                      |
| previous\_cycle\_id  | bigint(20) | None                                      |
| created\_on          | datetime   | None                                      |
| auto\_update\_time   | timestamp  | Part of KEY (auto\_update\_time)          |

## Table: `slab_change_details`


| Column Name                          | Data Type                                                                                      | Index                            |
| ------------------------------------ | ---------------------------------------------------------------------------------------------- | -------------------------------- |
| id                                   | int(11)                                                                                        | Part of PRIMARY KEY (id)         |
| org\_id                              | int(11)                                                                                        | Part of KEY (org\_id)            |
| program\_id                          | int(11)                                                                                        | Part of KEY (program\_id)        |
| customer\_id                         | int(11)                                                                                        | Part of KEY (customer\_id)       |
| slab\_change\_source                 | enum('STRATEGY','RULE','MERGE','IMPORT','GROUP\_SYNC','GROUP\_LEAVE','PARTNER\_PROGRAM',       | None                             |
| slab\_change\_source\_id             | int(11)                                                                                        | None                             |
| customer\_slab\_upgrade\_history\_id | int(11)                                                                                        | None                             |
| slab\_change\_action                 | enum('UPGRADE','DOWNGRADE','RENEWAL','TIER\_SYNC\_BENEFIT','PARTNER\_PROGRAM\_EXPIRY\_CHANGE') | None                             |
| previous\_slab\_change\_date         | datetime                                                                                       | None                             |
| previous\_slab\_expiry\_date         | datetime                                                                                       | None                             |
| auto\_update\_time                   | timestamp                                                                                      | Part of KEY (auto\_update\_time) |

## Table: `expiry_reminders_sent_stats`


| Column Name     | Data Type  | Index                    |
| --------------- | ---------- | ------------------------ |
| id              | int(11)    | Part of PRIMARY KEY (id) |
| org\_id         | int(11)    | Part of KEY (org\_id)    |
| program\_id     | int(11)    | None                     |
| reminders\_sent | int(11)    | None                     |
| sms\_template   | mediumtext | None                     |
| sent\_on        | datetime   | None                     |
| event\_log\_id  | bigint(20) | None                     |

## Table: `tracker_conditions`


| Column Name                   | Data Type             | Index                      |
| ----------------------------- | --------------------- | -------------------------- |
| id                            | int(11)               | Part of PRIMARY KEY (id)   |
| strategy\_id                  | int(11)               | Part of KEY (strategy\_id) |
| name                          | varchar(255)          | None                       |
| org\_id                       | int(11)               | Part of KEY (org\_id)      |
| program\_id                   | int(11)               | Part of KEY (program\_id)  |
| priority                      | int(11)               | None                       |
| max\_number\_success\_signals | int(11)               | None                       |
| tracking\_period              | int(11)               | None                       |
| expression                    | varchar(255)          | None                       |
| ruleset\_id                   | int(11)               | None                       |
| point\_category\_id           | int(11)               | None                       |
| last\_modified\_by            | int(11)               | None                       |
| last\_modified\_on            | datetime              | None                       |
| auto\_update\_time            | timestamp             | None                       |
| tracking\_period\_type        | enum('DAYS','MONTHS') | None                       |

## Table: `custom_fields`


| Column Name        | Data Type                                                  | Index                            |
| ------------------ | ---------------------------------------------------------- | -------------------------------- |
| id                 | int(11)                                                    | Part of PRIMARY KEY (id)         |
| org\_id            | int(11)                                                    | Part of KEY (org\_id)            |
| field\_name        | varchar(100)                                               | Part of KEY (field\_name)        |
| field\_type        | enum('PROMOTION','REDEMPTION\_PURPOSE')                    | Part of KEY (field\_type)        |
| value\_type        | enum('DOUBLE','STRING','STRING\_LIST','DATE\_TIME','ENUM') | None                             |
| created\_on        | datetime                                                   | None                             |
| created\_by        | int(11)                                                    | None                             |
| auto\_update\_time | timestamp                                                  | Part of KEY (auto\_update\_time) |
| is\_active         | tinyint(1)                                                 | None                             |

## Table: `voucher_issual_item_code_sms_mapping`


| Column Name                     | Data Type    | Index                                                |
| ------------------------------- | ------------ | ---------------------------------------------------- |
| id                              | int(11)      | Part of PRIMARY KEY (id)                             |
| voucher\_issual\_item\_code\_id | int(11)      | Part of UNIQUE KEY (voucher\_issual\_item\_code\_id) |
| item\_code                      | varchar(255) | Part of UNIQUE KEY (item\_code)                      |
| sms\_text                       | mediumtext   | None                                                 |

## Table: `historical_points`


| Column Name                       | Data Type              | Index                           |
| --------------------------------- | ---------------------- | ------------------------------- |
| id                                | int(11)                | Part of PRIMARY KEY (id)        |
| org\_id                           | bigint(11)             | Part of KEY (org\_id)           |
| customer\_id                      | bigint(11)             | Part of KEY (customer\_id)      |
| bill\_number                      | varchar(100)           | Part of KEY (bill\_number)      |
| transaction\_type                 | enum('DEBIT','CREDIT') | Part of KEY (transaction\_type) |
| points                            | DECIMAL(20,5)          | None                            |
| points\_activity                  | varchar(100)           | None                            |
| loyalty\_program\_name            | varchar(100)           | None                            |
| custom\_fields                    | mediumtext             | None                            |
| event\_date                       | datetime               | Part of KEY (event\_date)       |
| external\_unique\_id\`varchar(36) | NOT                    | None                            |
| created\_by                       | varchar(100)           | None                            |
| created\_on                       | datetime               | None                            |
| event\_log\_id                    | bigint(11)             | None                            |
| auto\_update\_time                | timestamp              | None                            |

## Table: `goodwill_points_log`


| Column Name                               | Data Type                | Index                            |
| ----------------------------------------- | ------------------------ | -------------------------------- |
| id                                        | int(11)                  | Part of PRIMARY KEY (id)         |
| org\_id                                   | int(11)                  | Part of KEY (org\_id)            |
| program\_id                               | int(11)                  | None                             |
| point\_category\_id                       | int(11)                  | None                             |
| customer\_id                              | int(11)                  | None                             |
| points\_value                             | decimal(15,3)            | None                             |
| notes                                     | longtext                 | None                             |
| points\_awarded\_customer\_promotions\_id | int(11)                  | None                             |
| goodwill\_reference\_id                   | int(11)                  | None                             |
| till\_id                                  | int(11)                  | None                             |
| request\_id                               | varchar(50)              | None                             |
| status                                    | tinyint(1)               | None                             |
| request\_time                             | datetime                 | None                             |
| event\_log\_id                            | bigint(20)               | Part of KEY (event\_log\_id)     |
| entity\_type                              | enum('CUSTOMER','FLEET') | None                             |
| reference\_id                             | varchar(50)              | Part of KEY (reference\_id)      |
| source                                    | varchar(50)              | Part of KEY (source)             |
| auto\_update\_time                        | timestamp                | Part of KEY (auto\_update\_time) |

## Table: `program`


| Column Name                        | Data Type                      | Index                            |
| ---------------------------------- | ------------------------------ | -------------------------------- |
| id                                 | int(11)                        | Part of PRIMARY KEY (id)         |
| org\_id                            | int(11)                        | Part of KEY (org\_id)            |
| name                               | varchar(255)                   | None                             |
| description                        | mediumtext                     | None                             |
| is\_active                         | tinyint(1)                     | None                             |
| is\_default                        | tinyint(1)                     | None                             |
| last\_activated                    | datetime                       | Part of KEY (last\_activated)    |
| slab\_upgrade\_point\_category\_id | int(11)                        | None                             |
| slab\_upgrade\_stategy\_id         | int(11)                        | None                             |
| slab\_upgrade\_mode                | enum('EAGER','DYNAMIC','LAZY') | None                             |
| slab\_upgrade\_rule\_identifier    | varchar(255)                   | None                             |
| redeemable\_point\_category\_id    | int(11)                        | None                             |
| points\_currency\_ratio            | decimal(20,10)                 | None                             |
| reminder\_sms\_template            | mediumtext                     | None                             |
| reminder\_mail\_subject            | mediumtext                     | None                             |
| reminder\_mail\_body               | mediumtext                     | None                             |
| reminder\_before\_days\_csv        | mediumtext                     | None                             |
| reminder\_min\_expirypoints        | int(11)                        | None                             |
| contact\_info                      | mediumtext                     | None                             |
| auto\_update\_time                 | timestamp                      | Part of KEY (auto\_update\_time) |
| round\_decimals                    | int(11)                        | None                             |

## Table: `returned_bill_details`


| Column Name        | Data Type  | Index                                   |
| ------------------ | ---------- | --------------------------------------- |
| id                 | bigint(20) | Part of PRIMARY KEY (id)                |
| org\_id            | int(11)    | Part of UNIQUE KEY (org\_id)            |
| original\_bill\_id | bigint(20) | Part of UNIQUE KEY (original\_bill\_id) |
| return\_bill\_id   | int(11)    | Part of UNIQUE KEY (return\_bill\_id)   |
| event\_log\_id     | bigint(20) | Part of UNIQUE KEY (event\_log\_id)     |
| created\_on        | datetime   | None                                    |
| auto\_update\_time | timestamp  | Part of KEY (auto\_update\_time)        |

## Table: `customer_slab_upgrade_history`


| Column Name                          | Data Type    | Index                               |
| ------------------------------------ | ------------ | ----------------------------------- |
| id                                   | int(11)      | Part of PRIMARY KEY (id)            |
| program\_id                          | int(11)      | Part of UNIQUE KEY (program\_id)    |
| org\_id                              | int(11)      | Part of KEY (org\_id)               |
| customer\_id                         | int(11)      | Part of UNIQUE KEY (customer\_id)   |
| event\_type\_id                      | int(11)      | None                                |
| source\_type\_id                     | int(11)      | None                                |
| source\_id                           | bigint(20)   | None                                |
| from\_slab\_id                       | int(11)      | Part of UNIQUE KEY (from\_slab\_id) |
| to\_slab\_id                         | int(11)      | Part of UNIQUE KEY (to\_slab\_id)   |
| slab\_upgrade\_strategy\_id          | int(11)      | None                                |
| slab\_upgrade\_start\_rule           | varchar(255) | None                                |
| tier\_assessment\_on\_next\_activity | BOOLEAN      | None                                |
| till\_id                             | int(11)      | None                                |
| upgraded\_on                         | datetime     | Part of KEY (upgraded\_on)          |
| notes                                | mediumtext   | None                                |
| auto\_update\_time                   | timestamp    | Part of KEY (auto\_update\_time)    |
| event\_log\_id                       | bigint(20)   | Part of KEY (event\_log\_id)        |
| enrollment\_id                       | bigint(20)   | None                                |

## Table: `manual_points_adjustment_log`


| Column Name        | Data Type     | Index                            |
| ------------------ | ------------- | -------------------------------- |
| id                 | int(11)       | Part of PRIMARY KEY (id)         |
| org\_id            | int(11)       | Part of KEY (org\_id)            |
| customer\_id       | bigint(20)    | Part of KEY (customer\_id)       |
| event\_log\_id     | bigint(20)    | Part of KEY (event\_log\_id)     |
| points\_value      | decimal(18,3) | None                             |
| reason             | text          | None                             |
| created\_on        | datetime      | None                             |
| auto\_update\_time | timestamp     | Part of KEY (auto\_update\_time) |

## Table: `strategy_types`


| Column Name        | Data Type                                                                                                                                                                          | Index                     |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------- |
| id                 | int(11)                                                                                                                                                                            | Part of PRIMARY KEY (id)  |
| type               | enum('POINT\_ALLOCATION','POINT\_EXPIRY','POINT\_REDEMPTION\_THRESHOLD','SLAB\_UPGRADE','SLAB\_DOWNGRADE','POINT\_RETURN','EXPIRY\_REMINDER','TRACKER','POINT\_EXPIRY\_EXTENSION') | Part of UNIQUE KEY (type) |
| description        | mediumtext                                                                                                                                                                         | None                      |
| class\_name        | mediumtext                                                                                                                                                                         | None                      |
| property\_template | mediumtext                                                                                                                                                                         | None                      |

## Table: `event_log_metadata`


| Column Name         | Data Type   | Index                               |
| ------------------- | ----------- | ----------------------------------- |
| id                  | bigint(20)  | Part of PRIMARY KEY (id)            |
| org\_id             | int(11)     | Part of KEY (org\_id)               |
| event\_log\_id      | bigint(20)  | Part of UNIQUE KEY (event\_log\_id) |
| source\_program\_id | int(11)     | None                                |
| entity\_metadata    | json        | None                                |
| config\_metadata    | json        | None                                |
| server\_req\_id     | varchar(50) | Part of KEY (server\_req\_id)       |
| created\_on         | datetime    | None                                |
| auto\_update\_time  | timestamp   | Part of KEY (auto\_update\_time)    |

## Table: `partner_program_slab_history`


| Column Name          | Data Type                                                                                                                   | Index                              |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------- | ---------------------------------- |
| id                   | bigint(20)                                                                                                                  | Part of PRIMARY KEY (id)           |
| org\_id              | int(11)                                                                                                                     | Part of KEY (org\_id)              |
| loyalty\_program\_id | int(11)                                                                                                                     | Part of KEY (loyalty\_program\_id) |
| partner\_program\_id | int(11)                                                                                                                     | Part of KEY (partner\_program\_id) |
| customer\_id         | bigint(20)                                                                                                                  | Part of KEY (customer\_id)         |
| last\_slab\_action   | enum('ENROLLMENT','UPGRADE','RENEW','DOWNGRADE','IMPORT\_ENROLLMENT','IMPORT\_UPGRADE','IMPORT\_RENEW','IMPORT\_DOWNGRADE') | None                               |
| slab\_id             | int(11)                                                                                                                     | None                               |
| slab\_name           | varchar(64)                                                                                                                 | None                               |
| slab\_expiry\_date   | datetime                                                                                                                    | None                               |
| till\_id             | int(11)                                                                                                                     | None                               |
| event\_log\_id       | bigint(20)                                                                                                                  | None                               |
| auto\_update\_time   | timestamp                                                                                                                   | Part of KEY (auto\_update\_time)   |

## Table: `points_expiry_update_summary`


| Column Name                  | Data Type             | Index                            |
| ---------------------------- | --------------------- | -------------------------------- |
| id                           | bigint(20)            | Part of PRIMARY KEY (id)         |
| org\_id                      | int(11)               | Part of KEY (org\_id)            |
| event\_log\_id               | bigint(20)            | Part of KEY (event\_log\_id)     |
| expiry\_update\_reason\_type | enum('EARLY\_EXPIRY', | None                             |
| expiry\_update\_reason\_note | VARCHAR(255)          | None                             |
| auto\_update\_time           | timestamp             | Part of KEY (auto\_update\_time) |

## Table: `benefits`


| Column Name           | Data Type                 | Index                            |
| --------------------- | ------------------------- | -------------------------------- |
| id                    | int(11)                   | Part of PRIMARY KEY (id)         |
| org\_id               | int(11)                   | Part of KEY (org\_id)            |
| name                  | varchar(50)               | Part of UNIQUE KEY (name)        |
| benefit\_type         | enum('POINTS','VOUCHER')  | None                             |
| linked\_program\_type | enum('PARTNER','LOYALTY') | None                             |
| program\_id           | int(11)                   | Part of KEY (program\_id)        |
| promotion\_id         | int(11)                   | Part of KEY (promotion\_id)      |
| description           | mediumtext                | None                             |
| max\_value            | bigint(20)                | None                             |
| is\_active            | tinyint(1)                | None                             |
| created\_by           | int(11)                   | None                             |
| created\_on           | datetime                  | None                             |
| auto\_update\_time    | timestamp                 | Part of KEY (auto\_update\_time) |

## Table: `strategies`


| Column Name        | Data Type                  | Index                                   |
| ------------------ | -------------------------- | --------------------------------------- |
| id                 | int(11)                    | Part of PRIMARY KEY (id)                |
| org\_id            | int(11)                    | Part of UNIQUE KEY (org\_id)            |
| program\_id        | int(11)                    | Part of UNIQUE KEY (program\_id)        |
| name               | varchar(255)               | Part of UNIQUE KEY (name)               |
| description        | mediumtext                 | None                                    |
| strategy\_type\_id | int(11)                    | Part of UNIQUE KEY (strategy\_type\_id) |
| property\_values   | mediumtext                 | None                                    |
| created\_on        | datetime                   | None                                    |
| owner              | enum('LOYALTY','CAMPAIGN') | None                                    |

## Table: `customers_downgrade_eligibility`


| Column Name              | Data Type                                                    | Index                            |
| ------------------------ | ------------------------------------------------------------ | -------------------------------- |
| id                       | int(11)                                                      | Part of PRIMARY KEY (id)         |
| org\_id                  | int(11)                                                      | Part of KEY (org\_id)            |
| program\_id              | int(11)                                                      | Part of KEY (program\_id)        |
| customer\_id             | int(11)                                                      | Part of KEY (customer\_id)       |
| current\_slab\_id        | int(11)                                                      | None                             |
| bill\_id                 | bigint(20)                                                   | None                             |
| downgrade\_status        | enum('OPEN','IN\_PROGRESS','DOWNGRADED','RETAINED','FAILED') | None                             |
| notes                    | text                                                         | None                             |
| return\_date             | datetime                                                     | None                             |
| scheduled\_on            | datetime                                                     | Part of KEY (scheduled\_on)      |
| auto\_update\_time       | timestamp                                                    | Part of KEY (auto\_update\_time) |
| parent\_loyalty\_log\_id | bigint(20)                                                   | None                             |

## Table: `tender_code`


| Column Name        | Data Type   | Index                            |
| ------------------ | ----------- | -------------------------------- |
| id                 | int(11)     | Part of PRIMARY KEY (id)         |
| org\_tender\_id    | int(11)     | None                             |
| org\_id            | int(11)     | Part of KEY (org\_id)            |
| code               | varchar(60) | None                             |
| description        | mediumtext  | None                             |
| is\_earning        | tinyint(1)  | None                             |
| added\_by          | int(11)     | None                             |
| added\_on          | datetime    | None                             |
| auto\_update\_time | timestamp   | Part of KEY (auto\_update\_time) |
| priority           | int(11)     | None                             |
| active             | tinyint(1)  | None                             |
| program\_id        | int(11)     | None                             |

## Table: `global_promotions_to_program_mapping`


| Column Name        | Data Type  | Index                            |
| ------------------ | ---------- | -------------------------------- |
| id                 | int(11)    | Part of PRIMARY KEY (id)         |
| org\_id            | int(11)    | Part of KEY (org\_id)            |
| promotion\_id      | int(11)    | Part of KEY (promotion\_id)      |
| program\_id        | int(11)    | Part of KEY (program\_id)        |
| is\_active         | tinyint(1) | None                             |
| created\_on        | datetime   | None                             |
| updated\_on        | datetime   | None                             |
| last\_created\_by  | BIGINT(20) | None                             |
| last\_updated\_by  | BIGINT(20) | None                             |
| auto\_update\_time | timestamp  | Part of KEY (auto\_update\_time) |

## Table: `points_ledger_9`


| Column Name        | Data Type                                 | Index                            |
| ------------------ | ----------------------------------------- | -------------------------------- |
| id                 | bigint(20)                                | Part of PRIMARY KEY (id)         |
| org\_id            | int(11)                                   | Part of KEY (org\_id)            |
| cps\_id            | bigint(20)                                | Part of KEY (cps\_id)            |
| points             | decimal(15,3)                             | None                             |
| entry\_type        | enum('CREDIT','DEBIT','OPENING\_BALANCE') | Part of KEY (entry\_type)        |
| is\_active         | tinyint(1)                                | Part of KEY (is\_active)         |
| event\_log\_id     | bigint(20)                                | Part of KEY (event\_log\_id)     |
| created\_on        | datetime                                  | Part of KEY (created\_on)        |
| auto\_update\_time | timestamp                                 | Part of KEY (auto\_update\_time) |

## Table: `promotions_metadata`


| Column Name        | Data Type    | Index                            |
| ------------------ | ------------ | -------------------------------- |
| id                 | int(11)      | Part of PRIMARY KEY (id)         |
| org\_id            | int(11)      | Part of KEY (org\_id)            |
| program\_id        | int(11)      | Part of KEY (program\_id)        |
| promotion\_id      | int(11)      | None                             |
| metadata           | mediumtext   | None                             |
| field\_name        | varchar(100) | None                             |
| field\_id          | int(11)      | None                             |
| auto\_update\_time | timestamp    | Part of KEY (auto\_update\_time) |

## Table: `program_slabs`


| Column Name        | Data Type    | Index                               |
| ------------------ | ------------ | ----------------------------------- |
| id                 | int(11)      | Part of PRIMARY KEY (id)            |
| org\_id            | int(11)      | Part of KEY (org\_id)               |
| program\_id        | int(11)      | Part of UNIQUE KEY (program\_id)    |
| serial\_number     | int(11)      | Part of UNIQUE KEY (serial\_number) |
| name               | varchar(255) | None                                |
| description        | mediumtext   | None                                |
| created\_on        | datetime     | None                                |
| auto\_update\_time | timestamp    | Part of KEY (auto\_update\_time)    |
| metadata           | varchar(30)  | None                                |

## Table: `IF`


| Column Name             | Data Type    | Index                        |
| ----------------------- | ------------ | ---------------------------- |
| id                      | bigint(20)   | Part of PRIMARY KEY (id)     |
| org\_id                 | int(11)      | Part of KEY (org\_id)        |
| customer\_id            | bigint(20)   | None                         |
| redeemed\_voucher\_code | varchar(255) | None                         |
| voucher\_series\_id     | bigint(20)   | None                         |
| voucher\_issued\_id     | bigint(20)   | None                         |
| redeem\_date            | datetime     | None                         |
| created\_on             | datetime     | None                         |
| created\_by             | int(11)      | None                         |
| auto\_update\_time      | timestamp    | None                         |
| event\_log\_id          | bigint(20)   | Part of KEY (event\_log\_id) |

## Table: `redemption_reversal_mapping`


| Column Name        | Data Type     | Index                               |
| ------------------ | ------------- | ----------------------------------- |
| id                 | bigint(20)    | Part of PRIMARY KEY (id)            |
| org\_id            | int(11)       | Part of KEY (org\_id)               |
| points\_reversed   | decimal(15,3) | None                                |
| reversal\_id       | int(11)       | Part of UNIQUE KEY (reversal\_id)   |
| redemption\_id     | int(11)       | Part of UNIQUE KEY (redemption\_id) |
| created\_on        | timestamp     | None                                |
| auto\_update\_time | timestamp     | Part of KEY (auto\_update\_time)    |

## Table: `custom_fields_enum_mapping`


| Column Name        | Data Type   | Index                            |
| ------------------ | ----------- | -------------------------------- |
| id                 | int(11)     | Part of PRIMARY KEY (id)         |
| org\_id            | int(11)     | Part of KEY (org\_id)            |
| enum\_values       | varchar(50) | Part of KEY (enum\_values)       |
| created\_on        | datetime    | None                             |
| created\_by        | int(11)     | None                             |
| auto\_update\_time | timestamp   | Part of KEY (auto\_update\_time) |
| custom\_field\_id  | int(11)     | Part of KEY (custom\_field\_id)  |
| is\_active         | tinyint(1)  | None                             |

## Table: `supplementary_partner_program_enrollment`


| Column Name             | Data Type   | Index                              |
| ----------------------- | ----------- | ---------------------------------- |
| id                      | bigint(20)  | Part of PRIMARY KEY (id)           |
| org\_id                 | int(11)     | Part of KEY (org\_id)              |
| loyalty\_program\_id    | int(11)     | Part of KEY (loyalty\_program\_id) |
| partner\_program\_id    | int(11)     | Part of KEY (partner\_program\_id) |
| customer\_id            | int(11)     | Part of KEY (customer\_id)         |
| is\_linked              | tinyint(1)  | None                               |
| is\_active              | tinyint(1)  | None                               |
| event\_log\_id          | bigint(20)  | None                               |
| membership\_start\_date | datetime    | None                               |
| membership\_end\_date   | datetime    | None                               |
| created\_on             | datetime    | None                               |
| created\_by             | varchar(36) | None                               |
| auto\_update\_time      | timestamp   | Part of KEY (auto\_update\_time)   |

## Table: `event_log`


| Column Name          | Data Type                                                | Index                              |
| -------------------- | -------------------------------------------------------- | ---------------------------------- |
| id                   | bigint(20)                                               | Part of PRIMARY KEY (id)           |
| org\_id              | int(11)                                                  | Part of KEY (org\_id)              |
| customer\_id         | bigint(20)                                               | Part of KEY (customer\_id)         |
| event\_type\_id      | smallint(6)                                              | Part of KEY (event\_type\_id)      |
| event\_sub\_type\_id | int(11)                                                  | Part of KEY (event\_sub\_type\_id) |
| event\_subject\_id   | bigint(20)                                               | Part of KEY (event\_subject\_id)   |
| unique\_id           | varchar(50)                                              | Part of UNIQUE KEY (unique\_id)    |
| event\_generated\_at | enum('EMF','PEB','IMPORT')                               | None                               |
| status               | enum('IN\_PROGRESS','SUCCESS','PARTIAL\_SUCCESS','FAIL') | None                               |
| till\_id             | int(11)                                                  | None                               |
| property\_values     | varchar(100)                                             | None                               |
| event\_time          | timestamp                                                | Part of KEY (event\_time)          |
| auto\_update\_time   | timestamp                                                | Part of KEY (auto\_update\_time)   |
| processing\_time     | timestamp                                                | Part of KEY (processing\_time)     |

## Table: `badges_earned_stats`


| Column Name            | Data Type                   | Index                            |
| ---------------------- | --------------------------- | -------------------------------- |
| id                     | bigint(20)                  | Part of PRIMARY KEY (id)         |
| org\_id                | int(11)                     | Part of KEY (org\_id)            |
| customer\_id           | bigint(20)                  | Part of KEY (customer\_id)       |
| event\_log\_id         | bigint(20)                  | Part of KEY (event\_log\_id)     |
| return\_event\_log\_id | bigint(20)                  | None                             |
| earned\_badge\_id      | varchar(50)                 | None                             |
| badge\_meta\_id        | varchar(50)                 | None                             |
| source\_type           | enum('ACTION')              | None                             |
| source\_identifier     | varchar(50)                 | None                             |
| context\_type          | enum('PROGRAM','PROMOTION') | None                             |
| context\_identifier    | int(11)                     | None                             |
| is\_active             | boolean                     | None                             |
| created\_on            | timestamp                   | None                             |
| created\_by            | bigint(20)                  | None                             |
| last\_updated\_on      | timestamp                   | None                             |
| last\_updated\_by      | bigint(20)                  | None                             |
| auto\_update\_time     | timestamp                   | Part of KEY (auto\_update\_time) |

## Table: `calculate_kpi_job`


| Column Name            | Data Type                                                             | Index                            |
| ---------------------- | --------------------------------------------------------------------- | -------------------------------- |
| id                     | int(11)                                                               | Part of PRIMARY KEY (id)         |
| org\_id                | int(11)                                                               | Part of KEY (org\_id)            |
| program\_id            | int(11)                                                               | Part of KEY (program\_id)        |
| kpi\_version           | int(11)                                                               | None                             |
| gap\_calculation\_mode | enum('GAP\_TO\_UPGRADE','GAP\_TO\_RENEW')                             | None                             |
| status                 | enum('TO\_BE\_PROCESSED','PROCESSING','SUCCESS','FAILED','CANCELLED') | None                             |
| processed\_upto\_id    | int(11)                                                               | None                             |
| ending\_id             | int(11)                                                               | None                             |
| job\_creation\_date    | datetime                                                              | None                             |
| job\_start\_date       | datetime                                                              | None                             |
| job\_scheduled\_date   | datetime                                                              | None                             |
| auto\_update\_time     | timestamp                                                             | Part of KEY (auto\_update\_time) |

## Table: `points_ledger_8`


| Column Name        | Data Type                                 | Index                            |
| ------------------ | ----------------------------------------- | -------------------------------- |
| id                 | bigint(20)                                | Part of PRIMARY KEY (id)         |
| org\_id            | int(11)                                   | Part of KEY (org\_id)            |
| cps\_id            | bigint(20)                                | Part of KEY (cps\_id)            |
| points             | decimal(15,3)                             | None                             |
| entry\_type        | enum('CREDIT','DEBIT','OPENING\_BALANCE') | Part of KEY (entry\_type)        |
| is\_active         | tinyint(1)                                | Part of KEY (is\_active)         |
| event\_log\_id     | bigint(20)                                | Part of KEY (event\_log\_id)     |
| created\_on        | datetime                                  | Part of KEY (created\_on)        |
| auto\_update\_time | timestamp                                 | Part of KEY (auto\_update\_time) |

## Table: `points_ledger_5`


| Column Name        | Data Type                                 | Index                            |
| ------------------ | ----------------------------------------- | -------------------------------- |
| id                 | bigint(20)                                | Part of PRIMARY KEY (id)         |
| org\_id            | int(11)                                   | Part of KEY (org\_id)            |
| cps\_id            | bigint(20)                                | Part of KEY (cps\_id)            |
| points             | decimal(15,3)                             | None                             |
| entry\_type        | enum('CREDIT','DEBIT','OPENING\_BALANCE') | Part of KEY (entry\_type)        |
| is\_active         | tinyint(1)                                | Part of KEY (is\_active)         |
| event\_log\_id     | bigint(20)                                | Part of KEY (event\_log\_id)     |
| created\_on        | datetime                                  | Part of KEY (created\_on)        |
| auto\_update\_time | timestamp                                 | Part of KEY (auto\_update\_time) |

## Table: `supplementary_membership_history`


| Column Name               | Data Type                                                                                                                                                                                                            | Index                              |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------- |
| id                        | int(11)                                                                                                                                                                                                              | Part of PRIMARY KEY (id)           |
| org\_id                   | int(11)                                                                                                                                                                                                              | Part of KEY (org\_id)              |
| loyalty\_program\_id      | int(11)                                                                                                                                                                                                              | Part of KEY (loyalty\_program\_id) |
| partner\_program\_id      | int(11)                                                                                                                                                                                                              | Part of KEY (partner\_program\_id) |
| customer\_id              | int(11)                                                                                                                                                                                                              | Part of KEY (customer\_id)         |
| source                    | enum('LINKING','AUTO\_DELINKING','DELINKING','UPDATE','MEMBERSHIP\_ACTION',                                                                                                                                          | None                               |
| action                    | enum('SUPPLEMENTARY\_MEMBERSHIP\_STARTED','SUPPLEMENTARY\_MEMBERSHIP\_RENEWAL\_INITIATED','SUPPLEMENTARY\_MEMBERSHIP\_RENEWED','SUPPLEMENTARY\_MEMBERSHIP\_EXPIRED','SUPPLEMENTARY\_MEMBERSHIP\_REVOKED\_BY\_MERGE', | None                               |
| additional\_action        | enum('LOYALTY\_SLAB\_UPGRADE','LOYALTY\_SLAB\_RENEWAL','NO\_ACTION')                                                                                                                                                 | None                               |
| additional\_action\_value | varchar(50)                                                                                                                                                                                                          | None                               |
| event\_log\_id            | bigint(20)                                                                                                                                                                                                           | None                               |
| event\_date               | datetime                                                                                                                                                                                                             | Part of KEY (event\_date)          |
| evaluation\_date          | datetime                                                                                                                                                                                                             | None                               |
| auto\_update\_time        | timestamp                                                                                                                                                                                                            | Part of KEY (auto\_update\_time)   |

## Table: `points_source_types`


| Column Name | Data Type    | Index                     |
| ----------- | ------------ | ------------------------- |
| id          | int(11)      | Part of PRIMARY KEY (id)  |
| type        | varchar(255) | Part of UNIQUE KEY (type) |

## Table: `expiry_reminder_skip_info`


| Column Name          | Data Type  | Index                                     |
| -------------------- | ---------- | ----------------------------------------- |
| id                   | int(11)    | Part of PRIMARY KEY (id)                  |
| org\_id              | int(11)    | Part of PRIMARY KEY (org\_id)             |
| program\_id          | int(11)    | Part of UNIQUE KEY (program\_id)          |
| skip\_reminder\_date | date       | Part of UNIQUE KEY (skip\_reminder\_date) |
| created\_on          | datetime   | None                                      |
| created\_by          | int(11)    | None                                      |
| reason               | mediumtext | None                                      |
| is\_skipped          | tinyint(1) | None                                      |

## Table: `customer_benefit_tracking_log`


| Column Name                     | Data Type              | Index                              |
| ------------------------------- | ---------------------- | ---------------------------------- |
| id                              | bigint(20)             | Part of PRIMARY KEY (id)           |
| org\_id                         | int(11)                | Part of KEY (org\_id)              |
| loyalty\_program\_id            | int(11)                | Part of KEY (loyalty\_program\_id) |
| customer\_id                    | int(11)                | Part of KEY (customer\_id)         |
| benefit\_id                     | int(11)                | Part of KEY (benefit\_id)          |
| customer\_benefit\_tracking\_id | bigint(20)             | None                               |
| type                            | enum('CREDIT','DEBIT') | None                               |
| tracked\_value                  | bigint(20)             | None                               |
| event\_log\_id                  | bigint(20)             | None                               |
| entity\_type                    | enum('BILL')           | None                               |
| entity\_id                      | bigint(20)             | None                               |
| created\_on                     | datetime               | Part of KEY (created\_on)          |
| auto\_update\_time              | timestamp              | Part of KEY (auto\_update\_time)   |

## Table: `issued_promotions`


| Column Name        | Data Type    | Index                            |
| ------------------ | ------------ | -------------------------------- |
| id                 | bigint(20)   | Part of PRIMARY KEY (id)         |
| org\_id            | int(11)      | Part of KEY (org\_id)            |
| ce\_id             | bigint(20)   | Part of KEY (ce\_id)             |
| promotion\_id      | int(11)      | Part of KEY (promotion\_id)      |
| ref\_id            | varchar(255) | None                             |
| is\_active         | boolean      | None                             |
| expires\_on        | datetime     | None                             |
| created\_on        | datetime     | None                             |
| event\_log\_id     | bigint(20)   | Part of KEY (event\_log\_id)     |
| auto\_update\_time | timestamp    | Part of KEY (auto\_update\_time) |

## Table: `points_awarded_bill_promotions`


| Column Name              | Data Type                                                                                                          | Index                                |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------ |
| id                       | bigint(20)                                                                                                         | Part of PRIMARY KEY (id)             |
| program\_id              | int(11)                                                                                                            | Part of KEY (program\_id)            |
| org\_id                  | int(11)                                                                                                            | Part of KEY (org\_id)                |
| customer\_id             | int(11)                                                                                                            | Part of KEY (customer\_id)           |
| original\_customer\_id   | int(11)                                                                                                            | Part of KEY (original\_customer\_id) |
| cps\_id                  | bigint(20)                                                                                                         | Part of KEY (cps\_id)                |
| promotion\_id            | int(11)                                                                                                            | Part of KEY (promotion\_id)          |
| bill\_id                 | bigint(20)                                                                                                         | Part of UNIQUE KEY (bill\_id)        |
| point\_awarded\_id       | bigint(20)                                                                                                         | None                                 |
| point\_category\_id      | int(11)                                                                                                            | Part of KEY (point\_category\_id)    |
| status                   | enum('AVAILABLE','REDEEMED','EXPIRED','CONSUMED','RETURNED','POINT\_CATEGORY\_CHANGED','CONSUMED\_BY\_CONVERSION') | Part of KEY (status)                 |
| allocation\_strategy\_id | int(11)                                                                                                            | None                                 |
| points\_value            | decimal(15,3)                                                                                                      | None                                 |
| redeemed\_value          | decimal(15,3)                                                                                                      | None                                 |
| expired\_value           | decimal(15,3)                                                                                                      | None                                 |
| returned\_value          | decimal(15,3)                                                                                                      | None                                 |
| original\_points         | decimal(15,3)                                                                                                      | None                                 |
| awarded\_date            | datetime                                                                                                           | Part of KEY (awarded\_date)          |
| till\_id                 | int(11)                                                                                                            | None                                 |
| expiry\_strategy\_id     | int(11)                                                                                                            | None                                 |
| expiry\_date             | datetime                                                                                                           | Part of KEY (expiry\_date)           |
| auto\_update\_time       | timestamp                                                                                                          | Part of KEY (auto\_update\_time)     |
| event\_log\_id           | bigint(20)                                                                                                         | Part of KEY (event\_log\_id)         |

## Table: `points_ledger_4`


| Column Name        | Data Type                                 | Index                            |
| ------------------ | ----------------------------------------- | -------------------------------- |
| id                 | bigint(20)                                | Part of PRIMARY KEY (id)         |
| org\_id            | int(11)                                   | Part of KEY (org\_id)            |
| cps\_id            | bigint(20)                                | Part of KEY (cps\_id)            |
| points             | decimal(15,3)                             | None                             |
| entry\_type        | enum('CREDIT','DEBIT','OPENING\_BALANCE') | Part of KEY (entry\_type)        |
| is\_active         | tinyint(1)                                | Part of KEY (is\_active)         |
| event\_log\_id     | bigint(20)                                | Part of KEY (event\_log\_id)     |
| created\_on        | datetime                                  | Part of KEY (created\_on)        |
| auto\_update\_time | timestamp                                 | Part of KEY (auto\_update\_time) |

## Table: `points_ledger_6`


| Column Name        | Data Type                                 | Index                            |
| ------------------ | ----------------------------------------- | -------------------------------- |
| id                 | bigint(20)                                | Part of PRIMARY KEY (id)         |
| org\_id            | int(11)                                   | Part of KEY (org\_id)            |
| cps\_id            | bigint(20)                                | Part of KEY (cps\_id)            |
| points             | decimal(15,3)                             | None                             |
| entry\_type        | enum('CREDIT','DEBIT','OPENING\_BALANCE') | Part of KEY (entry\_type)        |
| is\_active         | tinyint(1)                                | Part of KEY (is\_active)         |
| event\_log\_id     | bigint(20)                                | Part of KEY (event\_log\_id)     |
| created\_on        | datetime                                  | Part of KEY (created\_on)        |
| auto\_update\_time | timestamp                                 | Part of KEY (auto\_update\_time) |

## Table: `customer_points_summary`


| Column Name             | Data Type     | Index                              |
| ----------------------- | ------------- | ---------------------------------- |
| id                      | bigint(20)    | Part of PRIMARY KEY (id)           |
| org\_id                 | int(11)       | Part of KEY (org\_id)              |
| program\_id             | int(11)       | Part of UNIQUE KEY (program\_id)   |
| enrollment\_id          | bigint(20)    | Part of KEY (enrollment\_id)       |
| customer\_id            | int(11)       | Part of UNIQUE KEY (customer\_id)  |
| points\_category\_id    | int(11)       | Part of KEY (points\_category\_id) |
| current\_points         | decimal(15,3) | None                               |
| cumulative\_points      | decimal(15,3) | None                               |
| cumulative\_purchases   | decimal(15,3) | None                               |
| points\_redeemed        | decimal(15,3) | None                               |
| points\_expired         | decimal(15,3) | None                               |
| points\_returned        | decimal(15,3) | None                               |
| backlog\_points         | decimal(15,3) | None                               |
| reissued\_points        | decimal(15,3) | None                               |
| last\_awarded\_on       | datetime      | None                               |
| last\_updated\_on       | datetime      | None                               |
| last\_updated\_by\_till | int(11)       | None                               |
| event\_log\_id          | bigint(20)    | Part of KEY (event\_log\_id)       |
| auto\_update\_time      | timestamp     | Part of KEY (auto\_update\_time)   |

## Table: `expiry_extension_log`


| Column Name            | Data Type  | Index                                |
| ---------------------- | ---------- | ------------------------------------ |
| id                     | bigint(20) | Part of PRIMARY KEY (id)             |
| org\_id                | int(11)    | Part of KEY (org\_id)                |
| customer\_id           | bigint(20) | Part of KEY (customer\_id)           |
| event\_log\_id         | bigint(20) | Part of KEY (event\_log\_id)         |
| extended\_expiry\_time | datetime   | Part of KEY (extended\_expiry\_time) |
| is\_return             | tinyint(1) | Part of KEY (is\_return)             |
| auto\_update\_time     | timestamp  | Part of KEY (auto\_update\_time)     |

## Table: `capping_config`


| Column Name          | Data Type                                          | Index                            |
| -------------------- | -------------------------------------------------- | -------------------------------- |
| id                   | bigint(20)                                         | Part of PRIMARY KEY (id)         |
| program\_id          | int(11)                                            | None                             |
| org\_id              | int(11)                                            | Part of PRIMARY KEY (org\_id)    |
| name                 | varchar(200)                                       | None                             |
| scope                | enum('INDIVIDUAL\_EVENT','INDIVIDUAL\_CUSTOMER')   | None                             |
| capped\_entity\_type | enum('ALL\_EVENTS','PROMOTION','TRANSACTION\_ADD') | None                             |
| is\_active           | tinyint(1)                                         | None                             |
| target\_group\_id    | bigint(20)                                         | None                             |
| target\_rule\_id     | bigint(20)                                         | None                             |
| entity               | enum('POINTS','ALTERNATE\_CURRENCIES')             | None                             |
| entity\_identifier   | varchar(20)                                        | None                             |
| property\_values     | mediumtext                                         | None                             |
| target\_start\_date  | datetime                                           | None                             |
| target\_end\_date    | datetime                                           | None                             |
| created\_on          | timestamp                                          | None                             |
| created\_by          | bigint(20)                                         | None                             |
| last\_updated\_on    | timestamp                                          | None                             |
| last\_updated\_by    | bigint(20)                                         | None                             |
| auto\_update\_time   | timestamp                                          | Part of KEY (auto\_update\_time) |

## Table: `program_event_mapping`


| Column Name             | Data Type    | Index                                |
| ----------------------- | ------------ | ------------------------------------ |
| id                      | int(11)      | Part of PRIMARY KEY (id)             |
| org\_id                 | int(11)      | Part of PRIMARY KEY (org\_id)        |
| program\_id             | int(11)      | Part of UNIQUE KEY (program\_id)     |
| event\_type\_id         | int(11)      | Part of UNIQUE KEY (event\_type\_id) |
| start\_rule\_identifier | varchar(255) | None                                 |
| last\_modified\_on      | datetime     | None                                 |

## Table: `points_awarded`


| Column Name                | Data Type                                                                                                                     | Index                                         |
| -------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------- |
| id                         | bigint(20)                                                                                                                    | Part of PRIMARY KEY (id)                      |
| program\_id                | int(11)                                                                                                                       | Part of KEY (program\_id)                     |
| org\_id                    | int(11)                                                                                                                       | Part of KEY (org\_id)                         |
| customer\_id               | int(11)                                                                                                                       | Part of KEY (customer\_id)                    |
| original\_customer\_id     | int(11)                                                                                                                       | Part of KEY (original\_customer\_id)          |
| cps\_id                    | bigint(20)                                                                                                                    | Part of KEY (cps\_id)                         |
| event\_type\_id            | int(11)                                                                                                                       | None                                          |
| points\_source\_type\_id   | int(11)                                                                                                                       | Part of UNIQUE KEY (points\_source\_type\_id) |
| points\_source\_id         | bigint(20)                                                                                                                    | Part of UNIQUE KEY (points\_source\_id)       |
| point\_category\_id        | int(11)                                                                                                                       | Part of KEY (point\_category\_id)             |
| status                     | enum('AVAILABLE','REDEEMED','EXPIRED','CONSUMED','RETURNED','POINT\_CATEGORY\_CHANGED','CONSUMED\_BY\_CONVERSION','INACTIVE') | Part of KEY (status)                          |
| allocation\_strategy\_id   | int(11)                                                                                                                       | None                                          |
| points\_value              | decimal(15,3)                                                                                                                 | None                                          |
| points\_exclusive          | decimal(15,3)                                                                                                                 | None                                          |
| redeemed\_value            | decimal(15,3)                                                                                                                 | None                                          |
| redeemed\_exclusive\_value | decimal(15,3)                                                                                                                 | None                                          |
| expired\_value             | decimal(15,3)                                                                                                                 | None                                          |
| expired\_exclusive\_value  | decimal(15,3)                                                                                                                 | None                                          |
| returned\_value            | decimal(15,3)                                                                                                                 | None                                          |
| returned\_exclusive\_value | decimal(15,3)                                                                                                                 | None                                          |
| original\_points           | decimal(15,3)                                                                                                                 | None                                          |
| awarded\_date              | datetime                                                                                                                      | Part of KEY (awarded\_date)                   |
| till\_id                   | int(11)                                                                                                                       | None                                          |
| expiry\_strategy\_id       | int(11)                                                                                                                       | None                                          |
| expiry\_date               | datetime                                                                                                                      | Part of KEY (expiry\_date)                    |
| auto\_update\_time         | timestamp                                                                                                                     | Part of KEY (auto\_update\_time)              |
| event\_log\_id             | bigint(20)                                                                                                                    | Part of KEY (event\_log\_id)                  |

## Table: `partner_programs`


| Column Name                  | Data Type                        | Index                            |
| ---------------------------- | -------------------------------- | -------------------------------- |
| id                           | int(11)                          | Part of PRIMARY KEY (id)         |
| org\_id                      | int(11)                          | Part of KEY (org\_id)            |
| loyalty\_program\_id         | int(11)                          | None                             |
| partner\_program\_identifier | varchar(127)                     | None                             |
| name                         | varchar(50)                      | Part of UNIQUE KEY (name)        |
| type                         | enum('EXTERNAL','SUPPLEMENTARY') | None                             |
| description                  | mediumtext                       | None                             |
| is\_active                   | tinyint(1)                       | None                             |
| is\_tier\_based              | tinyint(1)                       | None                             |
| points\_exchange\_ratio      | decimal(15,3)                    | None                             |
| expiry\_date                 | datetime                         | None                             |
| backup\_partner\_program\_id | int(11)                          | None                             |
| created\_on                  | datetime                         | None                             |
| auto\_update\_time           | timestamp                        | Part of KEY (auto\_update\_time) |

## Table: `points_ledger_7`


| Column Name        | Data Type                                 | Index                            |
| ------------------ | ----------------------------------------- | -------------------------------- |
| id                 | bigint(20)                                | Part of PRIMARY KEY (id)         |
| org\_id            | int(11)                                   | Part of KEY (org\_id)            |
| cps\_id            | bigint(20)                                | Part of KEY (cps\_id)            |
| points             | decimal(15,3)                             | None                             |
| entry\_type        | enum('CREDIT','DEBIT','OPENING\_BALANCE') | Part of KEY (entry\_type)        |
| is\_active         | tinyint(1)                                | Part of KEY (is\_active)         |
| event\_log\_id     | bigint(20)                                | Part of KEY (event\_log\_id)     |
| created\_on        | datetime                                  | Part of KEY (created\_on)        |
| auto\_update\_time | timestamp                                 | Part of KEY (auto\_update\_time) |

## Table: `points_expiry_extension_customers`


| Column Name        | Data Type                                 | Index                      |
| ------------------ | ----------------------------------------- | -------------------------- |
| id                 | int(11)                                   | Part of PRIMARY KEY (id)   |
| org\_id            | int(11)                                   | Part of KEY (org\_id)      |
| customer\_id       | int(11)                                   | Part of KEY (customer\_id) |
| status             | enum('IN\_PROGRESS','FAILED','COMPLETED') | Part of KEY (status)       |
| added\_on          | datetime                                  | None                       |
| auto\_update\_time | timestamp                                 | None                       |

## Table: `points_ledger_3`


| Column Name        | Data Type                                 | Index                            |
| ------------------ | ----------------------------------------- | -------------------------------- |
| id                 | bigint(20)                                | Part of PRIMARY KEY (id)         |
| org\_id            | int(11)                                   | Part of KEY (org\_id)            |
| cps\_id            | bigint(20)                                | Part of KEY (cps\_id)            |
| points             | decimal(15,3)                             | None                             |
| entry\_type        | enum('CREDIT','DEBIT','OPENING\_BALANCE') | Part of KEY (entry\_type)        |
| is\_active         | tinyint(1)                                | Part of KEY (is\_active)         |
| event\_log\_id     | bigint(20)                                | Part of KEY (event\_log\_id)     |
| created\_on        | datetime                                  | Part of KEY (created\_on)        |
| auto\_update\_time | timestamp                                 | Part of KEY (auto\_update\_time) |

## Table: `customer_tracked_kpi`


| Column Name        | Data Type                                                                                                                          | Index                            |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- |
| id                 | int(11)                                                                                                                            | Part of PRIMARY KEY (id)         |
| org\_id            | int(11)                                                                                                                            | Part of KEY (org\_id)            |
| program\_id        | int(11)                                                                                                                            | Part of KEY (program\_id)        |
| customer\_id       | int(11)                                                                                                                            | Part of KEY (customer\_id)       |
| type               | enum('TRACKER','CURRENT\_POINTS','LIFETIME\_POINTS','LIFETIME\_PURCHASE','DOWNGRADE\_WINDOW\_PURCHASE','DOWNGRADE\_WINDOW\_VISIT') | None                             |
| ref\_id            | int(11)                                                                                                                            | None                             |
| ref\_sub\_id       | int(11)                                                                                                                            | None                             |
| name               | varchar(250)                                                                                                                       | None                             |
| value              | decimal(15,3)                                                                                                                      | None                             |
| valid\_till        | datetime                                                                                                                           | None                             |
| active             | tinyint(1)                                                                                                                         | None                             |
| auto\_update\_time | timestamp                                                                                                                          | Part of KEY (auto\_update\_time) |

## Table: `deduction_reversal_mapping`


| Column Name            | Data Type  | Index                                |
| ---------------------- | ---------- | ------------------------------------ |
| id                     | bigint(20) | Part of PRIMARY KEY (id)             |
| org\_id                | int(11)    | Part of KEY (org\_id)                |
| reverse\_deduction\_id | bigint(20) | Part of KEY (reverse\_deduction\_id) |
| deduction\_id          | bigint(20) | Part of UNIQUE KEY (deduction\_id)   |
| auto\_update\_time     | timestamp  | Part of KEY (auto\_update\_time)     |

## Table: `skipped_vouchers_stats`


| Column Name         | Data Type  | Index                      |
| ------------------- | ---------- | -------------------------- |
| id                  | int(11)    | Part of PRIMARY KEY (id)   |
| org\_id             | int(11)    | Part of KEY (org\_id)      |
| customer\_id        | int(11)    | Part of KEY (customer\_id) |
| transaction\_id     | bigint(20) | None                       |
| voucher\_series\_id | int(11)    | None                       |
| skipped\_on         | datetime   | Part of KEY (skipped\_on)  |

## Table: `system_rules_scopes_properties`


| Column Name      | Data Type    | Index                                 |
| ---------------- | ------------ | ------------------------------------- |
| id               | int(11)      | Part of PRIMARY KEY (id)              |
| org\_id          | int(11)      | Part of PRIMARY KEY (org\_id)         |
| program\_id      | int(11)      | Part of UNIQUE KEY (program\_id)      |
| system\_rule\_id | int(11)      | Part of UNIQUE KEY (system\_rule\_id) |
| scope\_id        | int(11)      | Part of UNIQUE KEY (scope\_id)        |
| name             | varchar(255) | Part of UNIQUE KEY (name)             |

## Table: `program_config_keys`


| Column Name    | Data Type                                            | Index                    |
| -------------- | ---------------------------------------------------- | ------------------------ |
| id             | int(11)                                              | Part of PRIMARY KEY (id) |
| name           | varchar(100)                                         | Part of KEY (name)       |
| value\_type    | enum('STRING','NUMERIC','BOOL','LIST','MAP','RANGE') | None                     |
| default\_value | mediumtext                                           | None                     |
| label          | varchar(250)                                         | None                     |
| added\_by      | int(11)                                              | None                     |
| added\_on      | datetime                                             | None                     |
| is\_valid      | tinyint(1)                                           | None                     |

## Table: `benefits_awarded_stats`


| Column Name              | Data Type                   | Index                             |
| ------------------------ | --------------------------- | --------------------------------- |
| id                       | bigint(20)                  | Part of PRIMARY KEY (id)          |
| org\_id                  | int(11)                     | Part of KEY (org\_id)             |
| customer\_id             | bigint(20)                  | Part of KEY (customer\_id)        |
| benefit\_type            | enum('REWARDS')             | None                              |
| benefit\_id              | varchar(50)                 | None                              |
| benefit\_transaction\_id | varchar(50)                 | None                              |
| event\_log\_id           | bigint(20)                  | Part of KEY (event\_log\_id)      |
| return\_event\_log\_id   | bigint(20)                  | None                              |
| source\_type             | enum('ACTION')              | None                              |
| source\_identifier       | varchar(50)                 | None                              |
| context\_type            | enum('PROGRAM','PROMOTION') | Part of KEY (context\_type)       |
| context\_identifier      | varchar(50)                 | Part of KEY (context\_identifier) |
| is\_active               | boolean                     | None                              |
| created\_on              | timestamp                   | None                              |
| created\_by              | bigint(20)                  | None                              |
| last\_updated\_on        | timestamp                   | None                              |
| last\_updated\_by        | bigint(20)                  | None                              |
| auto\_update\_time       | timestamp                   | Part of KEY (auto\_update\_time)  |

## Table: `event_types`


| Column Name | Data Type    | Index                     |
| ----------- | ------------ | ------------------------- |
| id          | int(11)      | Part of PRIMARY KEY (id)  |
| category    | varchar(255) | None                      |
| name        | varchar(255) | Part of UNIQUE KEY (name) |
| description | mediumtext   | None                      |
| created\_on | datetime     | None                      |

## Table: `points_ledger_2`


| Column Name        | Data Type                                 | Index                            |
| ------------------ | ----------------------------------------- | -------------------------------- |
| id                 | bigint(20)                                | Part of PRIMARY KEY (id)         |
| org\_id            | int(11)                                   | Part of KEY (org\_id)            |
| cps\_id            | bigint(20)                                | Part of KEY (cps\_id)            |
| points             | decimal(15,3)                             | None                             |
| entry\_type        | enum('CREDIT','DEBIT','OPENING\_BALANCE') | Part of KEY (entry\_type)        |
| is\_active         | tinyint(1)                                | Part of KEY (is\_active)         |
| event\_log\_id     | bigint(20)                                | Part of KEY (event\_log\_id)     |
| created\_on        | datetime                                  | Part of KEY (created\_on)        |
| auto\_update\_time | timestamp                                 | Part of KEY (auto\_update\_time) |

## Table: `points_ledger_0`


| Column Name        | Data Type                                 | Index                            |
| ------------------ | ----------------------------------------- | -------------------------------- |
| id                 | bigint(20)                                | Part of PRIMARY KEY (id)         |
| org\_id            | int(11)                                   | Part of KEY (org\_id)            |
| cps\_id            | bigint(20)                                | Part of KEY (cps\_id)            |
| points             | decimal(15,3)                             | None                             |
| entry\_type        | enum('CREDIT','DEBIT','OPENING\_BALANCE') | Part of KEY (entry\_type)        |
| is\_active         | tinyint(1)                                | Part of KEY (is\_active)         |
| event\_log\_id     | bigint(20)                                | Part of KEY (event\_log\_id)     |
| created\_on        | datetime                                  | Part of KEY (created\_on)        |
| auto\_update\_time | timestamp                                 | Part of KEY (auto\_update\_time) |

## Table: `gap_kpi_info`


| Column Name        | Data Type                                 | Index                             |
| ------------------ | ----------------------------------------- | --------------------------------- |
| id                 | int(11)                                   | Part of PRIMARY KEY (id)          |
| org\_id            | int(11)                                   | Part of KEY (org\_id)             |
| program\_id        | int(11)                                   | Part of KEY (program\_id)         |
| kpi\_type          | enum('GAP\_TO\_UPGRADE','GAP\_TO\_RENEW') | Part of UNIQUE KEY (kpi\_type)    |
| kpi\_version       | int(11)                                   | Part of UNIQUE KEY (kpi\_version) |
| status             | enum('IN\_PROGRESS','VALID','INVALID')    | None                              |
| auto\_update\_time | timestamp                                 | Part of KEY (auto\_update\_time)  |

## Table: `action_source_value_details`


| Column Name                  | Data Type     | Index                                      |
| ---------------------------- | ------------- | ------------------------------------------ |
| id                           | bigint(20)    | Part of PRIMARY KEY (id)                   |
| org\_id                      | int(11)       | Part of PRIMARY KEY (org\_id)              |
| action\_id                   | int(11)       | Part of UNIQUE KEY (action\_id)            |
| source\_value\_type          | enum('BILL',  | Part of KEY (source\_value\_type)          |
| unroll\_type                 | enum('NONE',  | None                                       |
| source\_value\_identifier\_1 | bigint(20)    | Part of KEY (source\_value\_identifier\_1) |
| identifier\_key              | varchar(150)  | Part of UNIQUE KEY (identifier\_key)       |
| source\_value\_for\_points   | DECIMAL(18,3) | None                                       |
| auto\_update\_time           | timestamp     | Part of KEY (auto\_update\_time)           |

## Table: `expiry_reminder_sent_stats_customer_level`


| Column Name           | Data Type           | Index                            |
| --------------------- | ------------------- | -------------------------------- |
| id                    | int(11)             | Part of PRIMARY KEY (id)         |
| program\_id           | int(11)             | Part of KEY (program\_id)        |
| org\_id               | int(11)             | Part of KEY (org\_id)            |
| customer\_id          | int(11)             | Part of KEY (customer\_id)       |
| message\_id           | bigint(20)          | None                             |
| event\_log\_id        | bigint(20)          | Part of KEY (event\_log\_id)     |
| points\_expiring      | double              | None                             |
| expiry\_date          | datetime            | None                             |
| num\_of\_days\_before | int(11)             | None                             |
| type                  | enum('SMS','EMAIL') | None                             |
| created\_on           | datetime            | None                             |
| auto\_update\_time    | timestamp           | Part of KEY (auto\_update\_time) |

## Table: `points_awarded_lineitems`


| Column Name                | Data Type                                                                                                                     | Index                                   |
| -------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | --------------------------------------- |
| id                         | bigint(20)                                                                                                                    | Part of PRIMARY KEY (id)                |
| program\_id                | int(11)                                                                                                                       | Part of KEY (program\_id)               |
| org\_id                    | int(11)                                                                                                                       | Part of KEY (org\_id)                   |
| customer\_id               | int(11)                                                                                                                       | Part of KEY (customer\_id)              |
| original\_customer\_id     | int(11)                                                                                                                       | Part of KEY (original\_customer\_id)    |
| cps\_id                    | bigint(20)                                                                                                                    | Part of KEY (cps\_id)                   |
| bill\_id                   | bigint(20)                                                                                                                    | None                                    |
| bill\_lineitem\_id         | bigint(20)                                                                                                                    | Part of UNIQUE KEY (bill\_lineitem\_id) |
| point\_awarded\_id         | bigint(20)                                                                                                                    | None                                    |
| point\_category\_id        | int(11)                                                                                                                       | Part of KEY (point\_category\_id)       |
| status                     | enum('AVAILABLE','REDEEMED','EXPIRED','CONSUMED','RETURNED','POINT\_CATEGORY\_CHANGED','CONSUMED\_BY\_CONVERSION','INACTIVE') | Part of KEY (status)                    |
| allocation\_strategy\_id   | int(11)                                                                                                                       | None                                    |
| points\_value              | decimal(15,3)                                                                                                                 | None                                    |
| points\_exclusive          | decimal(15,3)                                                                                                                 | None                                    |
| redeemed\_value            | decimal(15,3)                                                                                                                 | None                                    |
| redeemed\_exclusive\_value | decimal(15,3)                                                                                                                 | None                                    |
| expired\_value             | decimal(15,3)                                                                                                                 | None                                    |
| expired\_exclusive\_value  | decimal(15,3)                                                                                                                 | None                                    |
| returned\_value            | decimal(15,3)                                                                                                                 | None                                    |
| returned\_exclusive\_value | decimal(15,3)                                                                                                                 | None                                    |
| awarded\_date              | datetime                                                                                                                      | Part of KEY (awarded\_date)             |
| till\_id                   | int(11)                                                                                                                       | None                                    |
| expiry\_strategy\_id       | int(11)                                                                                                                       | None                                    |
| expiry\_date               | datetime                                                                                                                      | Part of KEY (expiry\_date)              |
| auto\_update\_time         | timestamp                                                                                                                     | Part of KEY (auto\_update\_time)        |
| event\_log\_id             | bigint(20)                                                                                                                    | Part of KEY (event\_log\_id)            |

## Table: `capping_filter_mapping`


| Column Name          | Data Type                 | Index                              |
| -------------------- | ------------------------- | ---------------------------------- |
| id                   | bigint(20)                | Part of PRIMARY KEY (id)           |
| capping\_config\_id  | bigint(20)                | Part of KEY (capping\_config\_id)  |
| org\_id              | int(11)                   | Part of PRIMARY KEY (org\_id)      |
| filter\_entity\_id   | int(11)                   | Part of KEY (filter\_entity\_id)   |
| filter\_entity\_type | enum('EVENT','PROMOTION') | Part of KEY (filter\_entity\_type) |
| event\_sub\_type\_id | bigint(20)                | None                               |
| is\_active           | tinyint(1)                | None                               |
| promotion\_filter    | enum('INCLUDE','EXCLUDE') | None                               |
| created\_on          | timestamp                 | None                               |
| created\_by          | bigint(20)                | None                               |
| last\_updated\_on    | timestamp                 | None                               |
| last\_updated\_by    | bigint(20)                | None                               |
| auto\_update\_time   | timestamp                 | Part of KEY (auto\_update\_time)   |

## Table: `points_ledger_1`


| Column Name        | Data Type                                 | Index                            |
| ------------------ | ----------------------------------------- | -------------------------------- |
| id                 | bigint(20)                                | Part of PRIMARY KEY (id)         |
| org\_id            | int(11)                                   | Part of KEY (org\_id)            |
| cps\_id            | bigint(20)                                | Part of KEY (cps\_id)            |
| points             | decimal(15,3)                             | None                             |
| entry\_type        | enum('CREDIT','DEBIT','OPENING\_BALANCE') | Part of KEY (entry\_type)        |
| is\_active         | tinyint(1)                                | Part of KEY (is\_active)         |
| event\_log\_id     | bigint(20)                                | Part of KEY (event\_log\_id)     |
| created\_on        | datetime                                  | Part of KEY (created\_on)        |
| auto\_update\_time | timestamp                                 | Part of KEY (auto\_update\_time) |

## Table: `earned_promotions`


| Column Name        | Data Type  | Index                            |
| ------------------ | ---------- | -------------------------------- |
| id                 | bigint(20) | Part of PRIMARY KEY (id)         |
| org\_id            | int(11)    | Part of KEY (org\_id)            |
| issual\_id         | bigint(20) | Part of KEY (issual\_id)         |
| redeemed\_count    | int(11)    | None                             |
| is\_active         | boolean    | None                             |
| expires\_on        | datetime   | None                             |
| created\_on        | datetime   | None                             |
| event\_log\_id     | bigint(20) | Part of KEY (event\_log\_id)     |
| auto\_update\_time | timestamp  | Part of KEY (auto\_update\_time) |

## Table: `voucher_issual_item_code`


| Column Name       | Data Type    | Index                          |
| ----------------- | ------------ | ------------------------------ |
| id                | int(11)      | Part of PRIMARY KEY (id)       |
| org\_id           | int(11)      | Part of PRIMARY KEY (org\_id)  |
| name              | varchar(255) | None                           |
| description       | mediumtext   | None                           |
| program\_id       | int(11)      | None                           |
| system\_rule\_id  | int(11)      | Part of KEY (system\_rule\_id) |
| last\_updated\_on | datetime     | None                           |

## Table: `system_rules_scope_types`


| Column Name | Data Type    | Index                     |
| ----------- | ------------ | ------------------------- |
| id          | int(11)      | Part of PRIMARY KEY (id)  |
| name        | varchar(255) | Part of UNIQUE KEY (name) |
| description | mediumtext   | None                      |

## Table: `org_participation`


| Column Name  | Data Type | Index                        |
| ------------ | --------- | ---------------------------- |
| id           | int(11)   | Part of PRIMARY KEY (id)     |
| program\_id  | int(11)   | Part of KEY (program\_id)    |
| org\_id      | int(11)   | Part of UNIQUE KEY (org\_id) |
| joined\_date | datetime  | Part of KEY (joined\_date)   |

## Table: `partner_program_enrollment`


| Column Name                      | Data Type    | Index                                     |
| -------------------------------- | ------------ | ----------------------------------------- |
| id                               | bigint(20)   | Part of PRIMARY KEY (id)                  |
| org\_id                          | int(11)      | Part of KEY (org\_id)                     |
| loyalty\_program\_id             | int(11)      | Part of KEY (loyalty\_program\_id)        |
| partner\_program\_id             | int(11)      | Part of KEY (partner\_program\_id)        |
| customer\_id                     | int(11)      | Part of KEY (customer\_id)                |
| is\_linked                       | tinyint(1)   | Part of KEY (is\_linked)                  |
| is\_active                       | tinyint(1)   | None                                      |
| current\_slab\_id                | int(11)      | Part of KEY (current\_slab\_id)           |
| current\_slab\_expiry\_date      | datetime     | Part of KEY (current\_slab\_expiry\_date) |
| last\_slab\_change\_date         | datetime     | None                                      |
| enrolled\_on                     | datetime     | None                                      |
| partner\_program\_membership\_id | varchar(255) | None                                      |
| created\_on                      | datetime     | None                                      |
| event\_log\_id                   | bigint(20)   | None                                      |
| auto\_update\_time               | timestamp    | Part of KEY (auto\_update\_time)          |

## Table: `points_awarded_tender`


| Column Name         | Data Type                                                                                                                                                       | Index                            |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- |
| id                  | int(11)                                                                                                                                                         | Part of PRIMARY KEY (id)         |
| org\_id             | int(11)                                                                                                                                                         | Part of KEY (org\_id)            |
| program\_id         | int(11)                                                                                                                                                         | None                             |
| point\_category\_id | int(11)                                                                                                                                                         | None                             |
| customer\_id        | int(11)                                                                                                                                                         | None                             |
| bill\_id            | bigint(20)                                                                                                                                                      | None                             |
| ref\_type           | enum('POINT\_AWARDED','POINT\_AWARDED\_BILL\_PROMOTION','POINT\_AWARDED\_LINEITEM','POINT\_AWARDED\_LINEITEM\_PROMOTION','POINT\_AWARDED\_CUSTOMER\_PROMOTION') | None                             |
| ref\_id             | bigint(20)                                                                                                                                                      | None                             |
| points              | decimal(15,3)                                                                                                                                                   | None                             |
| tender\_code\_id    | int(11)                                                                                                                                                         | None                             |
| awarded\_date       | datetime                                                                                                                                                        | None                             |
| awarded\_by         | int(11)                                                                                                                                                         | None                             |
| expiry\_date        | datetime                                                                                                                                                        | None                             |
| auto\_update\_time  | timestamp                                                                                                                                                       | Part of KEY (auto\_update\_time) |

## Table: `vouchers_issued`


| Column Name         | Data Type  | Index                        |
| ------------------- | ---------- | ---------------------------- |
| id                  | int(11)    | Part of PRIMARY KEY (id)     |
| program\_id         | int(11)    | Part of KEY (program\_id)    |
| org\_id             | int(11)    | Part of KEY (org\_id)        |
| customer\_id        | int(11)    | Part of KEY (customer\_id)   |
| event\_type\_id     | int(11)    | None                         |
| source\_type\_id    | int(11)    | None                         |
| source\_id          | bigint(20) | None                         |
| promotion\_id       | int(11)    | None                         |
| voucher\_series\_id | int(11)    | None                         |
| voucher\_id         | int(11)    | None                         |
| issued\_date        | datetime   | None                         |
| till\_id            | int(11)    | None                         |
| auto\_update\_time  | timestamp  | None                         |
| event\_log\_id      | bigint(20) | Part of KEY (event\_log\_id) |

## Table: `system_rules_scopes`


| Column Name        | Data Type    | Index                          |
| ------------------ | ------------ | ------------------------------ |
| id                 | int(11)      | Part of PRIMARY KEY (id)       |
| org\_id            | int(11)      | Part of PRIMARY KEY (org\_id)  |
| program\_id        | int(11)      | Part of KEY (program\_id)      |
| system\_rule\_id   | int(11)      | Part of KEY (system\_rule\_id) |
| scope\_type\_id    | int(11)      | None                           |
| name               | varchar(255) | None                           |
| description        | mediumtext   | None                           |
| created\_by        | int(11)      | None                           |
| created\_on        | datetime     | None                           |
| last\_modified\_by | int(11)      | None                           |
| last\_modified\_on | datetime     | None                           |

## Table: `points_deductions`


| Column Name                   | Data Type                                                                                                                                                                                                                                                                                       | Index                                   |
| ----------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------- |
| id                            | bigint(20)                                                                                                                                                                                                                                                                                      | Part of PRIMARY KEY (id)                |
| program\_id                   | int(11)                                                                                                                                                                                                                                                                                         | Part of KEY (program\_id)               |
| org\_id                       | int(11)                                                                                                                                                                                                                                                                                         | Part of KEY (org\_id)                   |
| customer\_id                  | int(11)                                                                                                                                                                                                                                                                                         | Part of KEY (customer\_id)              |
| cps\_id                       | bigint(20)                                                                                                                                                                                                                                                                                      | Part of KEY (cps\_id)                   |
| point\_awarded\_ref\_type     | enum('POINT\_AWARDED','POINT\_AWARDED\_BILL\_PROMOTION','POINT\_AWARDED\_LINEITEM','POINT\_AWARDED\_LINEITEM\_PROMOTION','POINT\_AWARDED\_CUSTOMER\_PROMOTION')                                                                                                                                 | Part of KEY (point\_awarded\_ref\_type) |
| point\_awarded\_ref\_id       | bigint(20)                                                                                                                                                                                                                                                                                      | Part of KEY (point\_awarded\_ref\_id)   |
| deduction\_type               | enum('REDEEMED','EXPIRED','CANCELLED','MIGRATION','RETURN','REDEEMED\_BY\_TRANSFER','REDEMPTION\_REVERSAL','EXPIRY\_REVERTED','REDEMPTION\_REVERTED','REDEEMED\_BY\_TRANSFER\_REVERTED','REDEEMED\_BY\_CONVERSION','RETURN\_HISTORICAL','MANUAL\_ADJUSTMENT','EXPIRED\_DUE\_TO\_POINTS\_LIMIT') | Part of KEY (deduction\_type)           |
| deduction\_summary\_id        | int(11)                                                                                                                                                                                                                                                                                         | Part of KEY (deduction\_summary\_id)    |
| source\_type\_id              | int(11)                                                                                                                                                                                                                                                                                         | None                                    |
| source\_id                    | bigint(20)                                                                                                                                                                                                                                                                                      | None                                    |
| source\_indentification\_info | mediumtext                                                                                                                                                                                                                                                                                      | None                                    |
| points\_deducted              | decimal(15,3)                                                                                                                                                                                                                                                                                   | None                                    |
| deduction\_currency\_value    | decimal(15,3)                                                                                                                                                                                                                                                                                   | None                                    |
| deducted\_on                  | datetime                                                                                                                                                                                                                                                                                        | Part of KEY (deducted\_on)              |
| till\_id                      | int(11)                                                                                                                                                                                                                                                                                         | None                                    |
| awarded\_till\_id             | int(11)                                                                                                                                                                                                                                                                                         | None                                    |
| awarded\_till\_date           | datetime                                                                                                                                                                                                                                                                                        | None                                    |
| auto\_update\_time            | timestamp                                                                                                                                                                                                                                                                                       | Part of KEY (auto\_update\_time)        |
| event\_log\_id                | bigint(20)                                                                                                                                                                                                                                                                                      | Part of KEY (event\_log\_id)            |

## Table: `alternate_currencies`


| Column Name        | Data Type                       | Index                            |
| ------------------ | ------------------------------- | -------------------------------- |
| id                 | bigint                          | Part of PRIMARY KEY (id)         |
| identifier         | varchar(6)                      | Part of KEY (identifier)         |
| name               | varchar(255)                    | Part of KEY (name)               |
| org\_id            | int                             | Part of KEY (org\_id)            |
| program\_id        | int                             | Part of KEY (program\_id)        |
| metadata           | json                            | None                             |
| start\_date        | datetime                        | None                             |
| end\_date          | datetime                        | None                             |
| is\_active         | tinyint                         | None                             |
| status             | enum('LIVE','DRAFT','SNAPSHOT') | Part of KEY (status)             |
| created\_on        | timestamp                       | None                             |
| created\_by        | bigint                          | None                             |
| last\_updated\_on  | timestamp                       | None                             |
| last\_updated\_by  | bigint                          | None                             |
| published\_on      | datetime                        | None                             |
| published\_by      | bigint                          | None                             |
| auto\_update\_time | timestamp                       | Part of KEY (auto\_update\_time) |

## Table: `points_ledger`


| Column Name        | Data Type                                 | Index                            |
| ------------------ | ----------------------------------------- | -------------------------------- |
| id                 | bigint(20)                                | Part of PRIMARY KEY (id)         |
| org\_id            | int(11)                                   | Part of KEY (org\_id)            |
| cps\_id            | bigint(20)                                | Part of KEY (cps\_id)            |
| points             | decimal(15,3)                             | None                             |
| entry\_type        | enum('CREDIT','DEBIT','OPENING\_BALANCE') | Part of KEY (entry\_type)        |
| is\_active         | tinyint(1)                                | Part of KEY (is\_active)         |
| event\_log\_id     | bigint(20)                                | Part of KEY (event\_log\_id)     |
| created\_on        | datetime                                  | Part of KEY (created\_on)        |
| auto\_update\_time | timestamp                                 | Part of KEY (auto\_update\_time) |

## Table: `entity_version`


| Column Name        | Data Type                       | Index                            |
| ------------------ | ------------------------------- | -------------------------------- |
| id                 | bigint(20)                      | Part of KEY (id)                 |
| org\_id            | bigint(20)                      | Part of KEY (org\_id)            |
| status             | enum('DRAFT','LIVE','SNAPSHOT') | Part of KEY (status)             |
| parent\_version    | int(11)                         | None                             |
| version            | int(11)                         | None                             |
| entity\_type       | ENUM('PROMOTION')               | None                             |
| entity\_id         | int(11)                         | Part of KEY (entity\_id)         |
| property\_json     | mediumtext                      | None                             |
| created\_on        | timestamp                       | None                             |
| created\_by        | bigint(20)                      | None                             |
| last\_updated\_on  | timestamp                       | None                             |
| last\_updated\_by  | bigint(20)                      | None                             |
| auto\_update\_time | timestamp                       | Part of KEY (auto\_update\_time) |
| is\_archive        | TINYINT(1)                      | None                             |

## Table: `customer_custom_job`


| Column Name        | Data Type                                      | Index                            |
| ------------------ | ---------------------------------------------- | -------------------------------- |
| id                 | bigint(20)                                     | Part of PRIMARY KEY (id)         |
| org\_id            | int(11)                                        | Part of KEY (org\_id)            |
| customer\_id       | bigint(20)                                     | Part of KEY (customer\_id)       |
| type               | enum('POINTS\_EXPIRY\_EXTENSION')              | Part of KEY (type)               |
| status             | enum('OPEN','IN\_PROGRESS','SUCCESS','FAILED') | Part of KEY (status)             |
| custom\_data       | mediumtext                                     | None                             |
| auto\_update\_time | timestamp                                      | Part of KEY (auto\_update\_time) |

## Table: `expiry_extension_configuration`


| Column Name     | Data Type             | Index                   |
| --------------- | --------------------- | ----------------------- |
| id              | int(20)               | Part of KEY (id)        |
| org\_id         | int(11)               | Part of KEY (org\_id)   |
| period\_value   | int(11)               | None                    |
| period\_type    | enum('DAYS','MONTHS') | None                    |
| strategy\_id    | int(11)               | None                    |
| enabled\_events | mediumtext            | None                    |
| added\_by       | int(11)               | None                    |
| is\_valid       | tinyint(1)            | Part of KEY (is\_valid) |
| created\_on     | datetime              | None                    |

## Table: `redeem_earned_promotion_activity_log`


| Column Name           | Data Type        | Index                               |
| --------------------- | ---------------- | ----------------------------------- |
| id                    | bigint(20)       | Part of PRIMARY KEY (id)            |
| org\_id               | int(11)          | Part of KEY (org\_id)               |
| earned\_promotion\_id | bigint(20)       | Part of KEY (earned\_promotion\_id) |
| event\_log\_id        | bigint(20)       | Part of KEY (event\_log\_id)        |
| status                | enum('REDEEMED', | None                                |
| created\_on           | datetime         | None                                |
| updated\_on           | datetime         | None                                |
| created\_by           | bigint(20)       | None                                |
| updated\_by           | bigint(20)       | None                                |
| auto\_update\_time    | timestamp        | Part of KEY (auto\_update\_time)    |

## Table: `liability_split_ratio`


| Column Name          | Data Type                   | Index                              |
| -------------------- | --------------------------- | ---------------------------------- |
| id                   | int(11)                     | Part of PRIMARY KEY (id)           |
| org\_id              | int(11)                     | Part of KEY (org\_id)              |
| component\_id        | int(11)                     | Part of KEY (component\_id)        |
| component\_type      | enum('PROGRAM','PROMOTION') | Part of KEY (component\_type)      |
| is\_active           | tinyint(1)                  | Part of KEY (is\_active)           |
| liability\_owner\_id | int(11)                     | Part of KEY (liability\_owner\_id) |
| split\_ratio         | decimal(6,3)                | None                               |
| start\_date          | datetime                    | None                               |
| end\_date            | datetime                    | None                               |
| created\_by          | BIGINT(20)                  | None                               |
| created\_on          | datetime                    | None                               |
| auto\_update\_time   | timestamp                   | Part of KEY (auto\_update\_time)   |

## Table: `points_categories`


| Column Name           | Data Type                                                                                                        | Index                            |
| --------------------- | ---------------------------------------------------------------------------------------------------------------- | -------------------------------- |
| id                    | int(11)                                                                                                          | Part of PRIMARY KEY (id)         |
| org\_id               | int(11)                                                                                                          | Part of UNIQUE KEY (org\_id)     |
| name                  | varchar(255)                                                                                                     | Part of UNIQUE KEY (name)        |
| description           | mediumtext                                                                                                       | None                             |
| program\_id           | int(11)                                                                                                          | Part of UNIQUE KEY (program\_id) |
| is\_redeemable        | tinyint(1)                                                                                                       | None                             |
| category\_type        | enum('REGULAR\_POINTS','TRACKERS','PROMISED\_POINTS','EXTERNAL\_TRIGGER\_BASED\_POINTS','ALTERNATE\_CURRENCIES') | None                             |
| is\_system\_generated | tinyint(1)                                                                                                       | None                             |
| created\_on           | datetime                                                                                                         | Part of KEY (created\_on)        |
| auto\_update\_time    | timestamp                                                                                                        | Part of KEY (auto\_update\_time) |

## Table: `points_expiry_update_log`


| Column Name                         | Data Type                                                                                                                                                       | Index                            |
| ----------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- |
| id                                  | bigint(20)                                                                                                                                                      | Part of PRIMARY KEY (id)         |
| org\_id                             | int(11)                                                                                                                                                         | Part of KEY (org\_id)            |
| pa\_type                            | enum('POINT\_AWARDED','POINT\_AWARDED\_BILL\_PROMOTION','POINT\_AWARDED\_LINEITEM','POINT\_AWARDED\_LINEITEM\_PROMOTION','POINT\_AWARDED\_CUSTOMER\_PROMOTION') | Part of KEY (pa\_type)           |
| pa\_id                              | bigint(20)                                                                                                                                                      | Part of KEY (pa\_id)             |
| points\_expiry\_update\_summary\_id | bigint(20)                                                                                                                                                      | None                             |
| old\_expiry\_date                   | datetime                                                                                                                                                        | None                             |
| new\_expiry\_date                   | datetime                                                                                                                                                        | None                             |
| auto\_update\_time                  | timestamp                                                                                                                                                       | Part of KEY (auto\_update\_time) |

## Table: `store_server_till_reports`


| Column Name                 | Data Type   | Index                           |
| --------------------------- | ----------- | ------------------------------- |
| id                          | int(10)     | Part of PRIMARY KEY (id)        |
| username                    | varchar(50) | None                            |
| till\_id                    | int(11)     | Part of KEY (till\_id)          |
| last\_request               | datetime    | None                            |
| requests\_sent              | int(11)     | None                            |
| responses\_received         | int(11)     | None                            |
| avg\_time\_taken\_per\_call | double      | None                            |
| last\_updated\_at           | datetime    | Part of KEY (last\_updated\_at) |
| ss\_health\_fkey            | int(11)     | Part of KEY (ss\_health\_fkey)  |
| org\_id                     | int(11)     | Part of PRIMARY KEY (org\_id)   |

## Table: `store_server_bulk_upload`


| Column Name      | Data Type   | Index                          |
| ---------------- | ----------- | ------------------------------ |
| id               | int(10)     | Part of PRIMARY KEY (id)       |
| upload\_type     | varchar(20) | None                           |
| status           | varchar(20) | None                           |
| sync\_time       | datetime    | None                           |
| inserted\_at     | timestamp   | None                           |
| ss\_health\_fkey | int(11)     | Part of KEY (ss\_health\_fkey) |
| org\_id          | int(11)     | Part of PRIMARY KEY (org\_id)  |

## Table: `async_message_api_requests`


| Column Name        | Data Type                                                | Index                            |
| ------------------ | -------------------------------------------------------- | -------------------------------- |
| id                 | bigint(20)                                               | Part of PRIMARY KEY (id)         |
| org\_id            | bigint(20)                                               | Part of KEY (org\_id)            |
| request\_id        | varchar(50)                                              | Part of KEY (request\_id)        |
| request\_time      | datetime                                                 | Part of KEY (request\_time)      |
| status             | enum('QUEUED','RUNNING','CANCELLED','FINISHED','FAILED') | None                             |
| request\_body      | mediumtext                                               | None                             |
| request\_headers   | mediumtext                                               | None                             |
| response\_status   | mediumtext                                               | None                             |
| response\_body     | mediumtext                                               | None                             |
| response\_headers  | mediumtext                                               | None                             |
| request\_path      | varchar(255)                                             | None                             |
| request\_method    | varchar(255)                                             | None                             |
| auto\_update\_time | timestamp                                                | Part of KEY (auto\_update\_time) |

## Table: `api_hit_table`


| Column Name     | Data Type          | Index                         |
| --------------- | ------------------ | ----------------------------- |
| id              | int(11)            | Part of PRIMARY KEY (id)      |
| request\_id     | varchar(50)        | Part of KEY (request\_id)     |
| apache\_req\_id | varchar(50)        | Part of KEY (apache\_req\_id) |
| resource        | varchar(20)        | None                          |
| method          | varchar(20)        | None                          |
| org\_id         | bigint(20)         | Part of KEY (org\_id)         |
| user\_id        | int(11)            | Part of KEY (user\_id)        |
| hit\_time       | datetime           | Part of KEY (hit\_time)       |
| client\_ip      | bigint(20)         | None                          |
| response\_time  | float              | None                          |
| success\_count  | int(11)            | None                          |
| failure\_count  | int(11)            | None                          |
| api\_version    | varchar(10)        | None                          |
| query\_params   | longtext           | None                          |
| http\_method    | enum('GET','POST') | None                          |
| user\_agent\_id | int(11)            | None                          |
| status\_codes   | mediumtext         | None                          |
| server\_name    | varchar(20)        | None                          |

## Table: `store_server_wcf_report`


| Column Name        | Data Type   | Index                          |
| ------------------ | ----------- | ------------------------------ |
| id                 | int(10)     | Part of PRIMARY KEY (id)       |
| requests\_sent     | int(11)     | None                           |
| last\_request      | datetime    | None                           |
| requests\_received | int(11)     | None                           |
| inserted\_at       | datetime    | Part of KEY (inserted\_at)     |
| version            | varchar(15) | None                           |
| ss\_health\_fkey   | int(11)     | Part of KEY (ss\_health\_fkey) |
| org\_id            | int(11)     | Part of PRIMARY KEY (org\_id)  |

## Table: `till_diagnostics_system_info`


| Column Name             | Data Type    | Index                                 |
| ----------------------- | ------------ | ------------------------------------- |
| id                      | int(10)      | Part of PRIMARY KEY (id)              |
| till\_diagnostics\_fkey | int(11)      | Part of KEY (till\_diagnostics\_fkey) |
| os                      | varchar(255) | None                                  |
| os\_platform            | varchar(50)  | None                                  |
| processor               | int(11)      | None                                  |
| processor\_family       | varchar(16)  | None                                  |
| system\_ram             | int(11)      | None                                  |
| db\_size                | float        | None                                  |
| sqlite\_version         | varchar(20)  | None                                  |
| framework\_version      | varchar(30)  | None                                  |
| heartbeat\_success      | int(11)      | None                                  |
| heartbeat\_failure      | int(11)      | None                                  |
| till\_time              | datetime     | None                                  |
| server\_time            | datetime     | None                                  |
| timezone                | varchar(10)  | None                                  |
| proxy\_enabled          | int(11)      | None                                  |
| inserted\_at            | timestamp    | None                                  |
| org\_id                 | int(11)      | Part of PRIMARY KEY (org\_id)         |

## Table: `till_diagnostics_sync_report`


| Column Name             | Data Type                                                                                                                                                                                                                                                                                     | Index                                 |
| ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------- |
| id                      | int(10)                                                                                                                                                                                                                                                                                       | Part of PRIMARY KEY (id)              |
| till\_diagnostics\_fkey | int(11)                                                                                                                                                                                                                                                                                       | Part of KEY (till\_diagnostics\_fkey) |
| sync\_type              | enum('CUSTOMERS','CUSTOM\_FIELDS\_DATA','VOUCHER\_SERIES','VOUCHERS','INVENTORY\_MASTER','CUSTOMER\_ATTRIBUTES','STORE\_ATTRIBUTES','LOYALTY\_TRACKER','FRAUD\_USERS\_LIST','STORE\_TASKS','STORE\_TASKS\_ENTRY','TASK\_METADATA','TASKS','ASSOCIATES','REMINDERS','COMM\_TEMPLATE','STORES') | None                                  |
| sync\_status            | enum('DOWNLOADING','DOWNLOAD\_FAILED','DOWNLOAD\_COMPLETE','DATA\_POPULATION','INDEXING','COMPLETED','NONE')                                                                                                                                                                                  | None                                  |
| last\_sync\_time        | datetime                                                                                                                                                                                                                                                                                      | None                                  |
| last\_delta\_sync\_time | datetime                                                                                                                                                                                                                                                                                      | None                                  |
| read\_time              | int(11)                                                                                                                                                                                                                                                                                       | None                                  |
| file\_size              | float                                                                                                                                                                                                                                                                                         | None                                  |
| unzipping\_time         | int(11)                                                                                                                                                                                                                                                                                       | None                                  |
| indexing\_time          | int(11)                                                                                                                                                                                                                                                                                       | None                                  |
| request\_id             | varchar(20)                                                                                                                                                                                                                                                                                   | None                                  |
| is\_full\_sync          | tinyint(1)                                                                                                                                                                                                                                                                                    | None                                  |
| avg\_mem\_usage         | float                                                                                                                                                                                                                                                                                         | None                                  |
| peak\_mem\_usage        | float                                                                                                                                                                                                                                                                                         | None                                  |
| avg\_cpu\_usage         | float                                                                                                                                                                                                                                                                                         | None                                  |
| peak\_cpu\_usage        | float                                                                                                                                                                                                                                                                                         | None                                  |
| inserted\_at            | timestamp                                                                                                                                                                                                                                                                                     | None                                  |
| org\_id                 | int(11)                                                                                                                                                                                                                                                                                       | Part of PRIMARY KEY (org\_id)         |

## Table: `store_server_health`


| Column Name                | Data Type    | Index                           |
| -------------------------- | ------------ | ------------------------------- |
| id                         | int(10)      | Part of PRIMARY KEY (id)        |
| store\_id                  | int(11)      | Part of KEY (store\_id)         |
| org\_id                    | int(11)      | Part of KEY (org\_id)           |
| up\_time                   | int(11)      | None                            |
| requests\_processed        | int(11)      | None                            |
| os                         | varchar(255) | None                            |
| os\_platform               | varchar(50)  | None                            |
| processor                  | int(11)      | None                            |
| system\_ram                | int(11)      | None                            |
| db\_size                   | int(11)      | None                            |
| lan\_speed                 | int(11)      | None                            |
| last\_transaction\_time    | datetime     | None                            |
| avg\_mem\_usage            | float        | None                            |
| peak\_mem\_usage           | float        | None                            |
| avg\_cpu\_usage            | float        | None                            |
| peak\_cpu\_usage           | float        | None                            |
| last\_updated\_at          | datetime     | Part of KEY (last\_updated\_at) |
| wcf\_version               | varchar(15)  | None                            |
| last\_txn\_to\_svr         | datetime     | None                            |
| last\_regn\_to\_svr        | datetime     | None                            |
| report\_generation\_time   | datetime     | None                            |
| last\_login                | datetime     | None                            |
| last\_fullsync             | datetime     | None                            |
| current\_binary\_version   | varchar(20)  | None                            |
| available\_binary\_version | varchar(20)  | None                            |

## Table: `store_server_sync_logs`


| Column Name             | Data Type                                                                                                                                                                                                                                                | Index                           |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------- |
| id                      | int(10)                                                                                                                                                                                                                                                  | Part of PRIMARY KEY (id)        |
| log\_sync\_type         | enum('CUSTOMERS','CUSTOM\_FIELDS\_DATA','VOUCHER\_SERIES','VOUCHERS','INVENTORY\_MASTER','CUSTOMER\_ATTRIBUTES','STORE\_ATTRIBUTES','LOYALTY\_TRACKER','FRAUD\_USERS\_LIST','TASK\_METADATA','TASKS','ASSOCIATES','REMINDERS','COMM\_TEMPLATE','STORES') | None                            |
| sync\_status            | enum('DOWNLOADING','DOWNLOAD\_FAILED','DOWNLOAD\_COMPLETE','DATA\_POPULATION','INDEXING','COMPLETED','NONE')                                                                                                                                             | None                            |
| last\_full\_sync\_time  | datetime                                                                                                                                                                                                                                                 | None                            |
| read\_time              | int(11)                                                                                                                                                                                                                                                  | None                            |
| file\_size              | float                                                                                                                                                                                                                                                    | None                            |
| unzipping\_time         | int(11)                                                                                                                                                                                                                                                  | None                            |
| indexing\_time          | int(11)                                                                                                                                                                                                                                                  | None                            |
| request\_id             | varchar(20)                                                                                                                                                                                                                                              | None                            |
| is\_full\_sync          | tinyint(1)                                                                                                                                                                                                                                               | None                            |
| avg\_mem\_usage         | float                                                                                                                                                                                                                                                    | None                            |
| peak\_mem\_usage        | float                                                                                                                                                                                                                                                    | None                            |
| avg\_cpu\_usage         | float                                                                                                                                                                                                                                                    | None                            |
| peak\_cpu\_usage        | float                                                                                                                                                                                                                                                    | None                            |
| last\_updated\_at       | datetime                                                                                                                                                                                                                                                 | Part of KEY (last\_updated\_at) |
| last\_delta\_sync\_time | datetime                                                                                                                                                                                                                                                 | None                            |
| ss\_health\_fkey        | int(11)                                                                                                                                                                                                                                                  | Part of KEY (ss\_health\_fkey)  |
| org\_id                 | int(11)                                                                                                                                                                                                                                                  | Part of PRIMARY KEY (org\_id)   |

## Table: `store_server_sql_svr_health`


| Column Name               | Data Type    | Index                           |
| ------------------------- | ------------ | ------------------------------- |
| id                        | int(10)      | Part of PRIMARY KEY (id)        |
| is\_alive                 | tinyint(4)   | None                            |
| last\_query\_exec\_time   | datetime     | None                            |
| average\_cpu\_time        | float        | None                            |
| active\_connection\_count | int(11)      | None                            |
| avg\_disk\_io             | float        | None                            |
| total\_db\_size           | int(11)      | None                            |
| intouch\_db\_size         | int(11)      | None                            |
| os                        | varchar(255) | None                            |
| os\_platform              | varchar(50)  | None                            |
| processor                 | int(11)      | None                            |
| system\_ram               | int(11)      | None                            |
| last\_updated\_at         | datetime     | Part of KEY (last\_updated\_at) |
| ss\_health\_fkey          | int(11)      | Part of KEY (ss\_health\_fkey)  |
| org\_id                   | int(11)      | Part of PRIMARY KEY (org\_id)   |

## Table: `api_summary_table`


| Column Name           | Data Type   | Index                         |
| --------------------- | ----------- | ----------------------------- |
| id                    | int(11)     | Part of PRIMARY KEY (id)      |
| org\_id               | bigint(20)  | Part of PRIMARY KEY (org\_id) |
| user\_id              | int(11)     | None                          |
| resource              | varchar(20) | None                          |
| method                | varchar(20) | None                          |
| api\_version          | varchar(10) | None                          |
| total\_hit\_count     | int(10)     | None                          |
| total\_response\_time | double      | None                          |
| total\_success\_count | int(11)     | None                          |
| total\_failure\_count | int(11)     | None                          |
| summary\_date         | datetime    | None                          |
| gen\_time             | datetime    | None                          |

## Table: `till_error_report`


| Column Name      | Data Type    | Index                    |
| ---------------- | ------------ | ------------------------ |
| id               | int(10)      | Part of PRIMARY KEY (id) |
| till\_id         | int(11)      | Part of KEY (till\_id)   |
| org\_id          | int(11)      | Part of KEY (org\_id)    |
| code             | varchar(20)  | None                     |
| count            | int(11)      | None                     |
| description      | varchar(200) | None                     |
| last\_occurrence | datetime     | None                     |
| inserted\_at     | datetime     | None                     |

## Table: `till_diagnostics_bulk_upload`


| Column Name             | Data Type   | Index                                 |
| ----------------------- | ----------- | ------------------------------------- |
| id                      | int(10)     | Part of PRIMARY KEY (id)              |
| till\_diagnostics\_fkey | int(11)     | Part of KEY (till\_diagnostics\_fkey) |
| upload\_type            | varchar(20) | None                                  |
| status                  | varchar(20) | None                                  |
| sync\_time              | datetime    | None                                  |
| inserted\_at            | timestamp   | None                                  |
| org\_id                 | int(11)     | Part of PRIMARY KEY (org\_id)         |

## Table: `till_diagnostics`


| Column Name                | Data Type   | Index                    |
| -------------------------- | ----------- | ------------------------ |
| id                         | int(10)     | Part of PRIMARY KEY (id) |
| till\_id                   | int(11)     | Part of KEY (till\_id)   |
| org\_id                    | int(11)     | Part of KEY (org\_id)    |
| from\_                     | datetime    | None                     |
| to\_                       | datetime    | None                     |
| last\_login                | datetime    | None                     |
| last\_fullsync             | datetime    | None                     |
| integration\_mode          | varchar(30) | None                     |
| current\_binary\_version   | varchar(20) | None                     |
| available\_binary\_version | varchar(20) | None                     |
| update\_skip\_count        | int(11)     | None                     |
| last\_binary\_update       | datetime    | None                     |
| avg\_mem\_usage            | float       | None                     |
| peak\_mem\_usage           | float       | None                     |
| avg\_cpu\_usage            | float       | None                     |
| peak\_cpu\_usage           | float       | None                     |
| inserted\_at               | timestamp   | None                     |

## Table: `extended_properties`


| Column Name    | Data Type   | Index                    |
| -------------- | ----------- | ------------------------ |
| id             | int(11)     | Part of PRIMARY KEY (id) |
| name           | varchar(20) | None                     |
| type           | varchar(20) | None                     |
| label          | longtext    | None                     |
| default        | mediumtext  | None                     |
| is\_disabled   | tinyint(1)  | None                     |
| last\_modified | datetime    | None                     |

## Table: `api_user_agents`


| Column Name | Data Type    | Index                            |
| ----------- | ------------ | -------------------------------- |
| id          | int(11)      | Part of PRIMARY KEY (id)         |
| user\_agent | varchar(200) | Part of UNIQUE KEY (user\_agent) |

## Table: `unified_subscription_configuration_change_log`


| Column Name        | Data Type                         | Index                            |
| ------------------ | --------------------------------- | -------------------------------- |
| id                 | bigint(20)                        | Part of PRIMARY KEY (id)         |
| org\_id            | bigint(20)                        | Part of KEY (org\_id)            |
| org\_unit\_id      | bigint(20)                        | Part of KEY (org\_unit\_id)      |
| priority           | enum('TRANS','BULK')              | None                             |
| comm\_channel\_id  | bigint(20)                        | Part of KEY (comm\_channel\_id)  |
| strategy           | enum('RECENT','LIBERAL','STRICT') | None                             |
| created\_by        | bigint(20)                        | None                             |
| created\_on        | datetime                          | None                             |
| auto\_update\_time | timestamp                         | Part of KEY (auto\_update\_time) |

## Table: `subscription_status`


| Column Name                 | Data Type              | Index                                  |
| --------------------------- | ---------------------- | -------------------------------------- |
| id                          | bigint(20)             | Part of PRIMARY KEY (id)               |
| org\_id                     | bigint(20)             | Part of KEY (org\_id)                  |
| org\_unit\_id               | bigint(20)             | Part of KEY (org\_unit\_id)            |
| org\_source\_id             | bigint(20)             | Part of UNIQUE KEY (org\_source\_id)   |
| comm\_channel\_id           | bigint(20)             | Part of UNIQUE KEY (comm\_channel\_id) |
| priority                    | enum('TRANS','BULK')   | Part of UNIQUE KEY (priority)          |
| communication\_category\_id | bigint(20)             | None                                   |
| user\_id                    | bigint(20)             | Part of KEY (user\_id)                 |
| status                      | enum('OPTIN','OPTOUT') | None                                   |
| added\_by                   | bigint(20)             | None                                   |
| added\_on                   | datetime               | None                                   |
| auto\_update\_time          | timestamp              | Part of KEY (auto\_update\_time)       |

## Table: `communication_categories`


| Column Name   | Data Type   | Index                         |
| ------------- | ----------- | ----------------------------- |
| id            | bigint(20)  | Part of PRIMARY KEY (id)      |
| org\_id       | bigint(20)  | Part of PRIMARY KEY (org\_id) |
| org\_unit\_id | bigint(20)  | None                          |
| name          | varchar(50) | None                          |

## Table: `unified_subscription_configuration`


| Column Name        | Data Type                         | Index                            |
| ------------------ | --------------------------------- | -------------------------------- |
| id                 | bigint(20)                        | Part of PRIMARY KEY (id)         |
| org\_id            | bigint(20)                        | Part of KEY (org\_id)            |
| org\_unit\_id      | bigint(20)                        | Part of KEY (org\_unit\_id)      |
| priority           | enum('TRANS','BULK')              | None                             |
| comm\_channel\_id  | bigint(20)                        | Part of KEY (comm\_channel\_id)  |
| strategy           | enum('RECENT','LIBERAL','STRICT') | None                             |
| created\_by        | bigint(20)                        | None                             |
| created\_on        | datetime                          | None                             |
| updated\_by        | bigint(20)                        | None                             |
| updated\_on        | datetime                          | None                             |
| auto\_update\_time | timestamp                         | Part of KEY (auto\_update\_time) |

## Table: `subscription_configuration`


| Column Name                    | Data Type               | Index                                  |
| ------------------------------ | ----------------------- | -------------------------------------- |
| id                             | bigint(20)              | Part of PRIMARY KEY (id)               |
| org\_id                        | bigint(20)              | Part of UNIQUE KEY (org\_id)           |
| org\_unit\_id                  | bigint(20)              | Part of UNIQUE KEY (org\_unit\_id)     |
| org\_source\_id                | bigint(20)              | Part of UNIQUE KEY (org\_source\_id)   |
| comm\_channel\_id              | bigint(20)              | Part of UNIQUE KEY (comm\_channel\_id) |
| optin\_strategy                | enum('DOUBLE','SINGLE') | None                                   |
| send\_optin\_success\_message  | tinyint(4)              | None                                   |
| default\_status                | enum('OPTIN','OPTOUT')  | None                                   |
| added\_by                      | bigint(20)              | None                                   |
| added\_on                      | datetime                | None                                   |
| updated\_by                    | bigint(11)              | None                                   |
| updated\_on                    | datetime                | None                                   |
| auto\_update\_time             | timestamp               | None                                   |
| send\_optout\_success\_message | tinyint(4)              | None                                   |

## Table: `subscription_status_changelog`


| Column Name                 | Data Type              | Index                            |
| --------------------------- | ---------------------- | -------------------------------- |
| id                          | bigint(20)             | Part of PRIMARY KEY (id)         |
| org\_id                     | bigint(20)             | Part of KEY (org\_id)            |
| org\_unit\_id               | bigint(20)             | Part of KEY (org\_unit\_id)      |
| org\_source\_id             | bigint(20)             | None                             |
| comm\_channel\_id           | bigint(20)             | None                             |
| priority                    | enum('TRANS','BULK')   | None                             |
| communication\_category\_id | bigint(20)             | None                             |
| user\_id                    | bigint(20)             | Part of KEY (user\_id)           |
| status                      | enum('OPTIN','OPTOUT') | None                             |
| reason                      | varchar(50)            | None                             |
| added\_by                   | bigint(20)             | None                             |
| added\_on                   | datetime               | None                             |
| auto\_update\_time          | timestamp              | Part of KEY (auto\_update\_time) |

## Table: `communication_templates`


| Column Name        | Data Type                                                                                                                                | Index                                  |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------- |
| id                 | bigint(20)                                                                                                                               | Part of PRIMARY KEY (id)               |
| org\_id            | bigint(20)                                                                                                                               | Part of UNIQUE KEY (org\_id)           |
| configuration\_id  | bigint(20)                                                                                                                               | Part of UNIQUE KEY (configuration\_id) |
| type               | enum('OPTIN\_TEXT','OPTOUT\_TEXT','OPTIN\_SUCCESS','OPTOUT\_SUCCESS','CONFIRMATION\_REQUEST','TRANS\_OPTIN\_TEXT','TRANS\_OPTOUT\_TEXT') | Part of UNIQUE KEY (type)              |
| subject\_template  | varchar(150)                                                                                                                             | None                                   |
| message\_template  | text                                                                                                                                     | None                                   |
| sender             | varchar(100)                                                                                                                             | None                                   |
| added\_by          | bigint(20)                                                                                                                               | None                                   |
| added\_on          | datetime                                                                                                                                 | None                                   |
| updated\_by        | bigint(20)                                                                                                                               | None                                   |
| updated\_on        | datetime                                                                                                                                 | None                                   |
| auto\_update\_time | timestamp                                                                                                                                | None                                   |

## Table: `transaction_types`


| Column Name       | Data Type    | Index                    |
| ----------------- | ------------ | ------------------------ |
| id                | int(11)      | Part of PRIMARY KEY (id) |
| transaction\_type | varchar(255) | None                     |

## Table: `slave_trackers`


| Column Name       | Data Type    | Index                         |
| ----------------- | ------------ | ----------------------------- |
| id                | int(11)      | Part of PRIMARY KEY (id)      |
| org\_id           | int(11)      | Part of PRIMARY KEY (org\_id) |
| ref\_id           | int(11)      | Part of UNIQUE KEY (ref\_id)  |
| type\_id          | int(11)      | Part of UNIQUE KEY (type\_id) |
| client\_id        | int(11)      | None                          |
| description       | varchar(255) | None                          |
| last\_updated\_on | timestamp    | None                          |

<HTMLBlock>{`
<style>
  .content-toc {
    max-height: 100vh; 
    overflow-y: auto;
  }
  
  .content-toc::-webkit-scrollbar {
    width: 8px;
  }

  .content-toc::-webkit-scrollbar-thumb {
    background: #ccc;
    border-radius: 4px;
  }
</style>
`}</HTMLBlock>