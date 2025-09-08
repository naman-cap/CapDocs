---
title: Retro transaction request (COPY)
excerpt: >-
  Retro transaction refers to the facility of tagging not-interested
  transactions to loyalty program customers. That is, a not-interested
  transaction can be tagged to the respective customer when the customer
  registers into the loyalty program within the window period (allowed to
  convert not-interested transactions).
deprecated: false
hidden: true
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
# Configuring the window period for retro transaction

You can customize the retro transaction window period by adjusting the `CONF_CLIENT_RETRO_MAX_ALLOWED_AGE_DAYS` setting in **Organisation > Billing** configuration page.

Additionally, you have the option to incorporate a buffer time using the `CONF_CLIENT_RETRO_DELAY_SINCE_REGISTRATION_HOURS` configuration. For instance, if you set this value to 3 hours and a customer registers at 9:00 AM, they will be able to claim loyalty points for non-interested transactions with billing times later than 6:00 AM but not before 5:59 AM.

![d469cee Billing config](https://files.readme.io/d469cee-Billing_config.png)

# Handling retro transactions as per original transaction date.

Retroactive transactions, also known as retro transactions, refer to transactions that are applied to a loyalty program account after the transaction has taken place. This can occur for a variety of reasons, such as an error in the transaction process, a delay in the transaction being recorded, or a promotion being applied retroactively to a past purchase.

## Retro case in airlines

Retroactive flight rewards refer to the ability to redeem miles or points for flights that you have already taken. Many airline loyalty programs allow you to retroactively claim rewards for flights that you have taken in the past, as long as you were a member of the loyalty program at the time of travel and you have the necessary documentation (e.g., a copy of your boarding pass or ticket receipt).

To claim retroactive rewards, you will typically need to contact the airline's customer service department and provide them with your loyalty program account information and the details of your past flights. The process for claiming retroactive rewards can vary by airline.

It's worth noting that retroactive flight rewards may not be available for all flights or may be subject to certain restrictions, such as blackout dates or limited availability. It's always a good idea to check with the airline to see what your options are for claiming retroactive rewards.

**Let's understand with one example:**

Take for example, a customer made a flight journey on 20th March but not given loyalty details on that date. Instead, at some point in the future (say 20th april), wishes to avail the benefits of that journey, and so reaches out to customer service for the same. In this case, the processing date (20th April) is more than the transaction date (20th March). 

This might lead to a problem, because the customer might have upgraded/degraded from a tier in this time period. Say, the customer might be on the silver tier on 20th March and Gold tier on 20th April. If the journey is processed as per 20th April, benefits will be given as per the gold slab even though the customer is on the silver slab on the date of the transaction.

**Let's understand with one more example:**

A brand has the below strategy for tier upgrade. Take 5 international flights in a year and upgrade from silver to gold. Else the customer will be downgraded. 

Tier upgrade to silver - Jan 1, 23\
Tier downgrade/renewal date - Jan 1, 24

![86f04f3 Screenshot 2023 04 14 at 11](https://files.readme.io/86f04f3-Screenshot_2023-04-14_at_11.32.51_AM.png)

Now, let's take the above same scenario, however this time the claim happens in next year.

![f51f741 Screenshot 2023 04 14 at 11](https://files.readme.io/f51f741-Screenshot_2023-04-14_at_11.33.37_AM.png)

# Latest ability

Until now, we only have the ability to process these retro transactions based only on the processing date (20th April in above example) not the original transaction date (20th March) as per example-1.

With this enhancement, now brands will have the ability to choose what date to use for retro transactions as per their policies. It will be an org - program level setting, where the brand can enable this option. When this is enabled, retro transactions will be processed based on the actual transaction date, and when not enabled, these retro transactions will be processed as per the processing date.

*(As of now, this enablement is provided only through backend, so please reach out to the sustenance team to enable this for your org. Very soon, we will be provide an UI option to do the same)*

In membercare, a clear differentiation will be visible whether the retro transaction is processed as per the “transaction date”. 

**Following screenshots helps in:**

To identify, if a not-interested transaction is converted to regular transaction as per retro functionality, please go to additional details tabs as per the below picture. If that is a retro transaction, you can see the same text as the image otherwise no information.

![5cf6505 Screenshot 2023 04 18 at 5](https://files.readme.io/5cf6505-Screenshot_2023-04-18_at_5.40.50_PM.png)

To identify, how that retro transaction is handled (either as per original transaction date 'or' current), go to the points details -> Advanced view, and look at the top-right corner, you can find the information.

![f2c1133 Screenshot 2023 04 18 at 5](https://files.readme.io/f2c1133-Screenshot_2023-04-18_at_5.29.43_PM.png)

# Submit transaction tagging request

Transaction tagging request allows you to tag a not-interested transaction into a regular transaction. 

Perform the steps below to submit a transaction tagging request:

1. On the Member Care homepage, search for the user you want to submit a transaction tagging request.

![3d5f1e8 image](https://files.readme.io/3d5f1e8-image.png)

2. Click the three-dot menu.

![f0df43f image](https://files.readme.io/f0df43f-image.png)

3. Expand the **More actions** dropdown, and click **Transaction requests**.

![ab5f704 image](https://files.readme.io/ab5f704-image.png)

4. Enter the non-tagged transaction number and click **Search transaction**.\
   You can filter the transactions based on date and store.

![1921442 image](https://files.readme.io/1921442-image.png)

5. Click **Save**.

![2a7aac8 image](https://files.readme.io/2a7aac8-image.png)

Transaction linking request is raised successfully.

# Viewing transaction tagging request

To view the transaction tagging request, perform the following steps:

1. On the Member Care home page sidebar, navigate to **Member Care** > **Requests** > **Member requests**.
2. Click **Transaction claims**.

![f681c5e image](https://files.readme.io/f681c5e-image.png)

3. Click the **All** tab to view all requests. You can click the **Pending** tab to review a request, the **Approved** tab to view approved requests, and the **Rejected** tab to view requests that were rejected.

![4d92552 image](https://files.readme.io/4d92552-image.png)

4. You can select the desired date range and view the transaction tag request that was created within that specific duration.

![12a5bbe image](https://files.readme.io/12a5bbe-image.png)
