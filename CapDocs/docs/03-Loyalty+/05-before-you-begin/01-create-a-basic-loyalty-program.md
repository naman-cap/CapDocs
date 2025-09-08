---
title: Basic Org Setup
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
(this is the flow for old UI of setting up loyalty program, not org setup)

When setting up your org, Admins will create a default loyalty program for the org. This article provides step-by-step instructions to admin users on how to create a default loyalty program for an org.

> 📘 * To enable the multi-loyalty programs (MLP) feature for an org,  you need to contact the Loyalty Team. The team will enable the feature from the back-end.
> * You can only create only org-level loyalty program using this process. To create brand-level programs, see [Configure a Loyalty Program](https://docs.capillarytech.com/docs/configure-loyalty-program).

To create the default loyalty program for an org, follow these steps.

1. log in to **InTouch** and choose the organization for which you want to create the loyalty program in the organization drop-down box.

2) Click the **Settings** icon and go to **Setup Wizard**.

The Organization Setup page appears where you can set up the organization. Proceed to step 7 after configuring other steps.\
3\. Navigate to step 7 Notifications and set up the default sender ids for SMS, email, and WeChat (if required) communications. If this is not configured, you cannot send emails, SMSs, or WeChat messages through the loyalty program.

![639d686 3](https://files.readme.io/639d686-3.png)

4. Navigate to **step 8 Engagement**. 

![445d4a5 4](https://files.readme.io/445d4a5-4.png)

5. On the **Setup Loyalty Tiers** field, follow the preceding steps.\
   a. In **Tier Name**, specify the name of the base tier. Example: Silver.\
   b. In **Issue Points on**, specify the points to be issued for the tier in terms of the percentage of the transaction amount. For example, if you set 10% of Bill Value, for a transaction amount of $200, the customer receives 20 loyalty points.\
   c. In **Description**, enter a meaningful description for the tier.\
   d. To create another tier, click the **+Add** and enter **Tier Name**, **Points issued on**, and **Description** as explained in the steps above.\
   e. In **Upgrade Tier on**, enter the lifetime purchases amount required to upgrade to the new tier.

![48ea43e 5](https://files.readme.io/48ea43e-5.png)

6. In **Issued points expire**, specify the validity of the points issued (in months). This is applicable for all tiers
7. In the **Customer must have** box, set the minimum threshold points a customer should earn to be eligible for redeeming points. For example, if you set 50, a customer can start redeeming points only after he/she earns at least 50 points.
8. Click **Create Loyalty Program**.
9. Once the loyalty program is created, you need to **Activate** the program on the Loyalty Programs page (**Settings > Gratification & Engagement > Points Bank Management > Loyalty Program**)

![7a4c5f2 6](https://files.readme.io/7a4c5f2-6.jpg)

> 📘 * Only one loyalty program can be created per organization. However, for multi-brand orgs, you can create one loyalty for each org unit if MLP (multi-loyalty program) is enabled for the org. 
> * To enable MLP for multi-brand orgs, contact the Loyalty Team. 
