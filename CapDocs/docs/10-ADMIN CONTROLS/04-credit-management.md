---
title: Credit management
excerpt: ''
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
### Manage Org SMS/Email Credits Introduction

Orgs are charged for communications (SMS, email, and X-Engage) sent to customers through Capillary products such as Loyalty+ or Engage+.  Capillary lets the org admins, finance teams, and Capillary Business teams manage org credits through Credits Management console. A user can add credits, remove credits, and monitor credit balance.

The following are the important points you need to know about credits.

* 1 Credit = 1 unit of currency of the org - It could be INR, USD, SGD, AED, and so on.

* Estimated Credits in Message Summary is calculated using the default values set for the org and the entire audience list.

* The actual credits redemption and ledger update happen when the message is executed (based on customer availability and customer’s country code in case of SMS).

* Transaction SMS and Emails (Loyalty and OTP) also consume credits based on the rate card but it will not block sending messages even if there is an insufficient credit balance.  In that case, the credit balance will become negative.

> 📘
>
> * Only org admins, and selected finance and Capillary Business teams can access the Credits Management module.
> * Before proceeding, ensure that Credit Management is enabled for the org.

### Access Credit Management Console

To access the Credit Management console of an org, follow these steps.

1. Log on to InTouch of your cluster and navigate to Profile > Organization Settings > Credits Management > CreditsManagement. This is available only for the Capillary Technologies org.

![daf6711 JQGf oJevjvxkSp3NGH  v8s8Lae I4fkA](https://files.readme.io/daf6711-JQGf_oJevjvxkSp3NGH-_v8s8Lae-I4fkA.png)

![6f51539 z1LmKJ3Exkewk4fnQEM10chMTq9N932u2w](https://files.readme.io/6f51539-z1LmKJ3Exkewk4fnQEM10chMTq9N932u2w.png)

2. In Search brands, search the org for which you want to configure or view credits and select the brand.

![10b315e hfcAMv ygfRShcRLVXwQ9YUykwxg60uzEw](https://files.readme.io/10b315e-hfcAMv_ygfRShcRLVXwQ9YUykwxg60uzEw.png)

You can see current balance, history of credits added/removed. the rate card, and credit-related settings.

### Manage Rate Cards - Setting cost of each credit for SMS, Email, and X-Engage

You can set credit value for SMS, email, and X-Engage separately. For Orgs with customers in different countries, you can set rate-card country-wise. The changes made in the rate card will reflect from the next day.

To add or update the rate card, follow these steps.

1. Sign in to InTouch with Capillary admin credentials, and on the Capillary Technologies org, navigate to Profile > Organization Settings > Credits Management > CreditsManagement.
2. Choose the org for which you want to update rate card.
3. On the Credit Management home page, click View rate card.

![6681880 b0PYmQDcqUklkSm e528e4xHy0Ph2U MAQ](https://files.readme.io/6681880-b0PYmQDcqUklkSm_e528e4xHy0Ph2U_MAQ.png)

4. Click **Edit rate card**.

![6b50126 RfDXRsiVq5pjiojzk kwgJ1MP yEV UZ g](https://files.readme.io/6b50126-RfDXRsiVq5pjiojzk-kwgJ1MP_yEV_UZ_g.png)

5. Enter the cost per SMS for each supported country and also enter the cost per email in Email. Even decimal values are supported.

![200d8d5 jkFwNklh0aqFyOKu0VFuWZaEMNeJRrZuww](https://files.readme.io/200d8d5-jkFwNklh0aqFyOKu0VFuWZaEMNeJRrZuww.png)

For example, if the credit cost per customer for X-Engage is set to 0.9 and the audience size of the campaign is 20000, then the total credits consumed are 200000 \* 0.9 = 18000.

> 📘
>
> * The option for SMS cost will be SMS-\{Country Name}.
> * As email charges are not country-based, you have a common setting for an email charge across countries.
> * You can also see the edit history of the Rate Card with View revision history.

5. Click Done to save the settings.

### Add Credits

You can add credits to an org account and can set expiry for those credits.

To add credits, follow these steps.

1. On Credits Management, click **Add Credits**.

![642db6d Uyvkcj1p9ssy GnpRGchhf7vuSnlbzdrTA](https://files.readme.io/642db6d-Uyvkcj1p9ssy-GnpRGchhf7vuSnlbzdrTA.png)

2. In **How many credits do you want to add**, enter the credits that you want to add.
3. In **When do these credits expire**, set the expiry for the credits - 1 month, 2 months, 3 months, 6 months, and 1 year. 4. If you do not want to expire credits, select Never.
4. In **Purchase order number**, enter the purchase order number of the credits (if available).
5. In **Comments**, enter any note for the current credits.
6. Click **Done** to save.

> 📘
>
> * The default time period for the credit validity is 6 months which can be modified.
> * You can see expired credits in the ledger report on Insights+.

### Remove Credits

To remove credits from an org account, follow these steps.

1. On Credits Management, click **Remove Credits**.

![da2bfa7 CWH2yqc5bEM KQ7hcXlQnBLwVfQe6ryW g](https://files.readme.io/da2bfa7-CWH2yqc5bEM-KQ7hcXlQnBLwVfQe6ryW-g.png)

2. In **How many credits do you want to enter**, specify the number of credits you want to remove.
3. In **Comments**, enter a short note on the removal of the current credits.
4. Click **Done** to proceed.

The default time period for the credit validity is 6 months which can be changed to 1M, 2M, 3M, 6M, 1Y or lifetime. The expired credits are available in the ledger report on EI.

### Credit Settings - Alerts when credits are low

This lets you configure notification when the available credit reaches a threshold value. For example, you can set org POCs to receive a low credit notification if the available balance is less than 100.

To set low credit alerts, follow these steps.

1. On the Credit Management home page, click **Credit Settings**.

![81f2fec O6lshghnpypYHzEZiqJuhc3CLolkE6tTlA](https://files.readme.io/81f2fec-O6lshghnpypYHzEZiqJuhc3CLolkE6tTlA.png)

2. In **Low credit alert**, set when to receive notification in terms of available credits.

![7815138 Gh4JEURlPcbdxRvDRCAktj7 TlvkqYDr5w](https://files.readme.io/7815138-Gh4JEURlPcbdxRvDRCAktj7_TlvkqYDr5w.png)

3. In **People who will receive the expiry/low credit alerts**, enter the email IDs that you want to notify. To enter multiple email IDs, separate each ID with a comma.
4. Click **Done** to save.