---
title: BackUP
excerpt: The member care page provides the complete details of a customer.
deprecated: false
hidden: true
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
# Introduction

The new Member Care UI displays the customer details in a better-organised way and provides a better user experience.

> 📘

# Switching from old UI to new UI

You can switch from the old UI to the new UI and vice-versa.

![b3aa174 Switch member care](https://files.readme.io/b3aa174-Switch_member_care.gif)

#### 1. Default Behavior when Member Care new UI is enabled for an org -

![dfe3269 1](https://files.readme.io/dfe3269-1.gif)

#### 2. Switching to old UI from new Customer Search page -

![f03ebf1 2](https://files.readme.io/f03ebf1-2.gif)

#### 3. Clicking on **Search** > **Customer** from the Old UI will take you back to new Customer Search page -

![](https://files.readme.io/7bf007a-3.gif "3.gif")

If you want to access the old **Search** > **Customer** page, you will have to go to the new **Customer Search** page and switch back. 

You can use this URL: \{host}/memberCare/search/Customer?oldFlow=true

*Example*: [https://eucrm.cc.capillarytech.com/search/Customer?oldFlow=true](https://eucrm.cc.capillarytech.com/search/Customer?oldFlow=true)

> 📘
>
> You have to use oldFlow=true parameter to directly land on the old UI search page. If you use the same URL without the oldFlow parameter, you will be redirected to the new Customer Search page.

#### 4. We have also implemented seamless switching at Customer Single View (CSV) as well. You can switch to old CSV by clicking on the switch icon on top right as shown below -

![](https://files.readme.io/6976170-4.gif "4.gif")

#### 5. You can switch back to new CSV from old CSV as well -

![ada5a00 5](https://files.readme.io/ada5a00-5.gif)

#### 6. If you want to share a profile link with someone and  want to point to the old UI, the oldFlow=true parameter has to be used again -

For example:

[https://eucrm.cc.capillarytech.com/memberCare/search/Customer?id=172076358](https://eucrm.cc.capillarytech.com/memberCare/search/Customer?id=172076358)

This is the URL for the old CSV of a BUKL\_T customer. When you open this, it will automatically take you to the new CSV even though the URL points to the old UI.

However, if you add oldFlow=true to the same URL, you will be taken to the old CSV directly:

[https://eucrm.cc.capillarytech.com/memberCare/search/Customer?id=172076358\&oldFlow=true](https://eucrm.cc.capillarytech.com/memberCare/search/Customer?id=172076358\&oldFlow=true)

#### 7. To access the new UI URL directly, just enter

\{host URL}/member-care/ui/

To see customer details, it would be \{host URL}/member-care/ui/\{userId}

Example: [https://eucrm.cc.capillarytech.com/member-care/ui/172076358](https://eucrm.cc.capillarytech.com/member-care/ui/172076358)

#### 8. This switching behavior is applicable only for Search > Customer and CSV pages. Once you switch to the old UI, everything else will work as is.
