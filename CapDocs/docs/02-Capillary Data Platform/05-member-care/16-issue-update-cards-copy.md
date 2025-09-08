---
title: Issue & update cards (COPY)
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
Member Care lets you issue cards from an active card series to a customer. You need to assign a source for issuing cards. To ensure security, we have also enabled OTP authentication for card issual.

***

## Card Issual Settings

### Assign source for card issual

To set a source for issuing cards:

1. On **Member Care**, navigate to **Settings** > **Card Issual Settings**.
2. In **Select source & account for card issual**, choose the source account that you want to tag for issuing cards.

![fab2894 sft0EoNFxDQEiSLS 9pIGxG8x7 fGvCmGQ](https://files.readme.io/fab2894-sft0EoNFxDQEiSLS_9pIGxG8x7_fGvCmGQ.png)

### Enable OTP for card issual

1. Navigate to the **Card Issual/Linking OTP settings** option.
2. Enable **Card Issual/Linking OTP settings** if you want to validate card issual and linking through OTP and choose the channel to send the OTP.

* **SMS**: OTP is sent to the customer's registered mobile number.
* **Email**: OTP is sent to the customer's registered email ID.
* **Both**: OTP is sent via both channels 

![ecdb4a2 Aa6Y3DzqpUnnkOqGYFQQJI jjK9z0DvDzA](https://files.readme.io/ecdb4a2-Aa6Y3DzqpUnnkOqGYFQQJI_jjK9z0DvDzA.png)

3. Click **Save**.

***

## Issue card to customer

On **Member Care**, search for the customer to whom you want to issue a card.

1. In **Select Actions**, click **Issue New Card**.

![3bc0b75 tXALEpfW96jlN3h4Mc7R1S2Rg0qZGYqrkw](https://files.readme.io/3bc0b75-tXALEpfW96jlN3h4Mc7R1S2Rg0qZGYqrkw.png)

### Issue manually generated card number

1. Select **Link card number to customer** and enter the card number to issue.

![902d10d Ox41XGRnfkgJynzWwhLGlMtutuaXkOvb8g](https://files.readme.io/902d10d-Ox41XGRnfkgJynzWwhLGlMtutuaXkOvb8g.png)

2. Enter the card number and click **Check availability**.

![2fc6814  61zyH MIYLC6M99lcyQP7ior2REE6nFew](https://files.readme.io/2fc6814--61zyH_MIYLC6M99lcyQP7ior2REE6nFew.png)

3. In **Select Card Label**, choose the desired card status.
4. Click **Send OTP** to send an OTP to the customer via the configured channel (SMS/ Email ID) and in OTP, enter the OTP received by the customer. This field appears only if Card Issual/Linking OTP settings is enabled.

![0d73248 837OdbUV0d4ybaBHYnEycIfpepaZ0yx6sw](https://files.readme.io/0d73248-837OdbUV0d4ybaBHYnEycIfpepaZ0yx6sw.png)

5. Click **Submit**.

### Issue card from an auto-generated card series

1. Select **Generate and link card number**.

![ba63366 T i0L2meGANAjuD6Xle3RH0Wy dduEY Ug](https://files.readme.io/ba63366-T-i0L2meGANAjuD6Xle3RH0Wy-dduEY-Ug.png)

2. In **Select Card Series**, choose the series from which you want to issue the card.
3. In **Select Card Label**, choose the status label that you want to associate with the card.
4. Click **Send OTP** to send an OTP to the customer via the configured channel (SMS/ Email ID) and enter the OTP received by the customer. This field appears only if Card Issual/Linking OTP settings is enabled. 
5. Click **Submit**. An auto-generated card is issued to the customer displaying the card number.

> 📘 * You cannot issue cards from a series beyond the allowed limit - this includes overall cards and active cards per customer.
