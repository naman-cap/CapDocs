---
title: Member Care New UI
excerpt: The member care page provides the complete details of a customer.
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
# Introduction

The new Member Care UI displays the customer details in a better-organised way and provides a better user experience.

By default, the new member care is enabled for all the orgs.

![dfe3269 1](https://files.readme.io/dfe3269-1.gif)

# Switching to the new UI

To switch to the new member care from the old UI <Glossary>CSV</Glossary> page, click **Open new Member Care**.

![e4c005a Switch to new UI](https://files.readme.io/e4c005a-Switch_to_new_UI.png)

Also, from the old UI, if you click **Customer Search** the customer search opens in the new UI.

![7bf007a 3](https://files.readme.io/7bf007a-3.gif)

## Sharing new profile link

To share the new member care UI, use url *\{host URL}/member-care/ui/*.

To share or view the customer page in the new UI, use url *\{host URL}/member-care/ui/\{userId}*.

For example,  [https://eucrm.cc.capillarytech.com/member-care/ui/172076358](https://eucrm.cc.capillarytech.com/member-care/ui/172076358).

# Switching to the old UI

From the **Customer Search** page, click **Open old Member Care** to switch to the old UI.

![6c42392 Switch to Old member care](https://files.readme.io/6c42392-Switch_to_Old_member_care.gif)

In addition, from the search result page, you can click on the switch icon and switch from the new UI to the old UI.

![](https://files.readme.io/4bad84a-Switch_to_Old_UI.png)

> 👍 Note
>
> *   Switching behavior is applicable only for **Search** > **Customer** and CSV pages. Once you switch to the old UI, everything else will work as it is.
> *   You can enable the config `CONF_MCARE_ENABLE_ORG_TZ_CHANGES` to ensure the details appear on the New Member Care UI according to the organization's time zone. To enable this config, create a ticket to the Capillary Product Support Team. This configuration is not applicable for the Old Member Care UI.

## Sharing old UI profile link

You can share the old UI customer profile link directly. To share, use the url *\{host}/memberCare/search/Customer?oldFlow=true*.

For example, [https://eucrm.cc.capillarytech.com/memberCare/search/Customer?id=172076358\&oldFlow=true](https://eucrm.cc.capillarytech.com/memberCare/search/Customer?id=172076358\&oldFlow=true)

> ❗️ You must use oldFlow=true parameter to directly navigate to the old UI search page. If you use the same URL without the oldFlow parameter, you will be redirected to the new Customer Search page.
