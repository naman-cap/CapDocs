---
title: Retro transaction request new
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
# Introduction

Retroactive transactions or Retro transactions are those transactions that are applied to a loyalty program account after the transaction has taken place. This can occur due to a number of factors such as an error in the transaction process, a delay in the transaction being recorded, or a promotion being applied retroactively to a past purchase. Retro transaction allows brands to choose the date to be followed for retro transactions as per their policies. 

> 📘 To enable retro transactions for your org, contact the Capillary sustenance team.

# Handling retro transactions

Capillary handles retro transactions based on the date of the transaction as well as the date of processing. A not-interested transaction can be tagged to the respective customer when the customer registers into the loyalty program within the window period.

For instance, if a customer took a flight on March 20th but did not provide loyalty details on that date and later reached out to the airline’s customer care to obtain loyalty points, the transaction date is March 20th, and the date on which the loyalty points are processed becomes the date of processing.

To avail of the airline rewards, the customer can provide flight and loyalty program account information to the airline. The airline then tags the transaction and awards the reward to the customer based on the date of transaction or date of processing.

# Configuring the window period for retro transaction

To customize the retro transaction window, perform the following:

1. Navigate to **Organisation settings**.
2. Navigate to **Systems & Deployment** > **Intouch POS Configuration** >  **Billing** .

![4be7138 image](https://files.readme.io/4be7138-image.png)

3. On the **Billing configuration** page, enter the  value in the  `CONF_CLIENT_RETRO_MAX_ALLOWED_AGE_DAYS` textbox to configure the maximum allowed window for a retro transaction.

![d77ad59 image](https://files.readme.io/d77ad59-image.png)

4. To configure buffer time, in the `CONF_CLIENT_RETRO_DELAY_SINCE_REGISTRATION_HOURS` set the value of your choice.

For instance, if the value is set to 3, the customer registering at 9:00 AM will be able to claim loyalty points for a non-interested transaction with billing times later than 6:00 AM but not before 5:59 AM. 

![d469cee Billing config](https://files.readme.io/d469cee-Billing_config.png)

# Submiting transaction tagging request

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

You can view retro transaction information within the transaction details on Member Care. For more information, refer to the

When retro transaction is enabled, brands can process transactions based on the actual transaction date and process transactions based on the processing date when disabled.

You can also view the transaction details, to check the status of retro transactions. The notes in the transaction provide information about whether:

* The transaction is processed according to the transaction date.
* The transaction is converted into a regular transaction based on retro functionality.

1. On the Member Care customer single view page, Click **Events**.

![242717e image](https://files.readme.io/242717e-image.png)

2. Click on the transaction to check if the transaction has been converted from not-interested to regular.

![5cf6505 Screenshot 2023 04 18 at 5](https://files.readme.io/5cf6505-Screenshot_2023-04-18_at_5.40.50_PM.png)

To check how the retro transaction is handled, perform the following:

1. On the Member Care customer single view page, Click **Events**.

![242717e image](https://files.readme.io/242717e-image.png)

2. Click on a retro transaction, and click **Advanced points view** to view the information.

![f2c1133 Screenshot 2023 04 18 at 5](https://files.readme.io/f2c1133-Screenshot_2023-04-18_at_5.29.43_PM.png)
