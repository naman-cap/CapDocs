---
title: Retro transactions
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
Retro transaction refers to the facility of tagging not-interested transactions to loyalty program customers. That is, a not-interested transaction can be tagged to the respective customer when the customer registers into the loyalty program within the window period (allowed to convert not-interested transactions). 

# Configuring the window period for retro transaction

You can customize the retro transaction window period by adjusting the `CONF_CLIENT_RETRO_MAX_ALLOWED_AGE_DAYS` setting in **Organisation > Billing** configuration page.

Additionally, you have the option to incorporate a buffer time using the `CONF_CLIENT_RETRO_DELAY_SINCE_REGISTRATION_HOURS` configuration. For instance, if you set this value to 3 hours and a customer registers at 9:00 AM, they will be able to claim loyalty points for non-interested transactions with billing times later than 6:00 AM but not before 5:59 AM.

![d469cee Billing config](https://files.readme.io/d469cee-Billing_config.png)

## One-Step Tagging of a Not-interested Transaction (Retro Transaction)

In Member Care, org admins can create new retro requests and approve requests submitted through InStore or APIs.

To tag a not-interested transaction to a registered customer on Member Care, follow these steps.

1. On Member Care, navigate to **Transaction Requests** > **Transaction Link**.
2. Click **One Step Change**.

![638c493  Hhb8hKGcQAXPEihkpc00MF5i5LNQqHeJA](https://files.readme.io/638c493-_Hhb8hKGcQAXPEihkpc00MF5i5LNQqHeJA.png)

3. In the Search box, enter the mobile number, email ID, or external ID of the customer to which you want to tag a transaction and select the customer from the auto-suggestions drop-down.
4. In Select Transaction, enter the not-interested **Transaction Number**, and **Transaction Date**. If you have more than one transaction with the same transaction number, use **Store** to get transactions of a specific store. 

![3f62a80 QMC55daTQsIVu7lzTcKvxp6frx8FlMfQqQ](https://files.readme.io/3f62a80-QMC55daTQsIVu7lzTcKvxp6frx8FlMfQqQ.png)

5. Click **Search**.

![aa4290f U6oZpgLg6vMf40nz1RcRR8zL eromU wCw](https://files.readme.io/aa4290f-U6oZpgLg6vMf40nz1RcRR8zL-eromU_wCw.png)

Select the transaction if there is more than one transaction (else it is selected by default) and click Tag.

> 📘
>
> * You can tag a transaction only if it is within the window period allowed. To know or update the window period for a retro transaction, see CONF\_CLIENT\_RETRO\_MAX\_ALLOWED\_AGE\_DAYS on the Billing Configuration page.
> * You will see the error message, Transaction is too old to mark as retro.

## Approve Retro Transaction Requests

To approve a retro transaction request submitted through InStore or API, do the following.

> 📘
>
> * You can tag a transaction only if it is within the window period allowed. To know or update the window period for a retro transaction, see CONF\_CLIENT\_RETRO\_MAX\_ALLOWED\_AGE\_DAYS on the Billing Configuration page.
> * You will see the error message, **Transaction is too old to mark as retro**.

1. On the left navigation pane, click **Transaction Requests** > **Transaction Link**. You will see the list of retro transaction requests with details, requested by, account to be merged with, store at which the request is made, and time of the request.
2. In the **Pending** tab, navigate to the desired request and click the respective **Approve** button.

> 📘
>
> To decline a request, click **Decline**. In the **Decline Coupon Request** box, provide the reason for declining this request and click Proceed.\
> The approved and declined requests will move to the Approved and Declined tabs respectively.

## Download Retro Transaction Requests

To download retro transaction request history as a CSV file, do the following:

![fe4f42e ablAtIflpN4weGAfxkD1saL49aDP3ppirw](https://files.readme.io/fe4f42e-ablAtIflpN4weGAfxkD1saL49aDP3ppirw.png)

1. On the **Transaction Link** page, click the **Download** drop-down that appears on the top-right
2. Set the duration of the requests that you want to download in **Start Date** and **End Date**. 
3. In **Download**, select the statuses that you want to download - Pending, Approved, and Declined
4. Click **Proceed**.

The list gets downloaded to your computer as a CSV file.

## Notification Settings for Retro Transactions

Through this setting, selected org admins can receive notifications whenever a new retro request is created and also configure SMS and email notification template for the customer when a transaction is tagged to him/her.

![d53e44c 5gL18DHEaUbl72ZMaRAK h1VbKYUZ4aIog](https://files.readme.io/d53e44c-5gL18DHEaUbl72ZMaRAK_h1VbKYUZ4aIog.png)

1. Click **Settings**, expand **ID Change Request Settings**, and click **Retro Transaction**.
2. In **Alerting the supervisor**, configure the following.

i. In **Email these on arrival of request**, select the org users to be notified through email whenever a new retro request is created and select any of the following.

* **Never**: Select to disable notifications to the org admins.
* **Always**: Select to always notify the selected recipients on new retro requests.
* **Only when**: Select to notify the selected recipients only when the transaction amount is less than a specific value and set the value in **Transaction value** \<.

ii. In Communicating change to a customer, set SMS/email template.

* To configure SMS notification, click the **Configure** button next to Configure SMS and create the message. Use predefined tags wherever required.
* To configure email, click the **Configure button** next to Configure Email.\
   a. In **Subject**, enter the subject of the email.\
   b. In the message body, set up the message body with content and insert images. You can add predefined tags in the message wherever required. To add tags, just click the tag from the list on the left.\
   c. Click **Save Changes**.

3. Click **Save**. 

![aa274af PvoKu3 l4CRjsVrnVSORPbKF8ZAyRC6oDw](https://files.readme.io/aa274af-PvoKu3_l4CRjsVrnVSORPbKF8ZAyRC6oDw.png)

## Handling retro transactions as per original transaction date.

Retroactive transactions, also known as retro transactions, refer to transactions that are applied to a loyalty program account after the transaction has taken place. This can occur for a variety of reasons, such as an error in the transaction process, a delay in the transaction being recorded, or a promotion being applied retroactively to a past purchase.

### Retro case in airlines

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
