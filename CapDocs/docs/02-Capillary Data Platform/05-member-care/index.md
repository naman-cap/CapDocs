---
title: Member Care
excerpt: The Member Care page provides the complete details of a customer.
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

Member Care is an application that offers a 360 view of the customer and also acts as a request management portal for support needs. It enables teams to effortlessly access and oversee customer accounts. Member care can be used by both external and internal users.

**External users**:

* Customer support team: They can view customer details, handle service requests such as Identifier Change and Account Merge, and monitor real-time customer events for troubleshooting purposes.
* Marketing team: They can get a 360-degree view of customer data and plan campaigns.

**Internal users**:

* System integrators and Customer Success Managers (CSM): They use Member Care to verify the ingestion of customer-level event data. They can instantly check operations performed for a customer.
* Support team: The Capillary support team utilizes Member Care to troubleshoot and resolve customer tickets, addressing any issues the customer may encounter.

## Searching for a customer or group

You can search for a customer or a group by searching from  **Search** on the Member Care home page or by clicking on the **Search** icon on the details page.

![ed6d8d3 Search customer](https://files.readme.io/ed6d8d3-Search_customer.gif)

By default, if enabled, when you open Member Care, the application opens the new Member Care UI.

![dfe3269 1](https://files.readme.io/dfe3269-1.gif)

# Switching to the new UI

To switch to the new Member Care from the old UI <Glossary>CSV</Glossary> page, click **Open new Member Care**.

![e4c005a Switch to new UI](https://files.readme.io/e4c005a-Switch_to_new_UI.png)

Also, from the old UI, if you click **Customer Search** the customer search opens in the new UI.

![7bf007a 3](https://files.readme.io/7bf007a-3.gif)

## Sharing new profile link

To share the new Member Care UI, use url *\{host URL}/member-care/ui/*.

To share or view the customer page in the new UI, use url *\{host URL}/member-care/ui/\{userId}*.

For example,  [https://eucrm.cc.capillarytech.com/member-care/ui/172076358](https://eucrm.cc.capillarytech.com/member-care/ui/172076358).

# Switching to the old UI

From the **Customer Search** page, click **Open old Member Care** to switch to the old UI.

![6c42392 Switch to Old member care](https://files.readme.io/6c42392-Switch_to_Old_member_care.gif)

In addition, from the search result page, you can click on the switch icon and switch from the new UI to the old UI.

![](https://files.readme.io/4bad84a-Switch_to_Old_UI.png)

> 📘 Switching behavior is applicable only for **Search** > **Customer** and CSV pages. Once you switch to the old UI, everything else will work as is.

## Sharing old UI profile link

You can share the old UI customer profile link directly. To share, use the url *\{host}/memberCare/search/Customer?oldFlow=true*.

For example, [https://eucrm.cc.capillarytech.com/memberCare/search/Customer?id=172076358\&oldFlow=true](https://eucrm.cc.capillarytech.com/memberCare/search/Customer?id=172076358\&oldFlow=true)

> ❗️ You must use oldFlow=true parameter to directly navigate to the old UI search page. If you use the same URL without the oldFlow parameter, you will be redirected to the new Customer Search page.
