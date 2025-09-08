---
title: Issue coupon
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
Coupons are used for sales promotions and are redeemable against an item purchased at the stores of a specific brand. The coupons are sent through the communication channel(s) configured.

To configure the Issue Coupon action, follow these steps.

1. Select **Issue Coupon** and click **Save**.

![00f143b Capture3](https://files.readme.io/00f143b-Capture3.PNG)

2.
3. Choose an option from the drop-down menu that defines the criteria for accepting points back.

![9b96bc4 Capture 4](https://files.readme.io/9b96bc4-Capture_4.png)

3. Enable **Set Communication** to green to set up the type of communication. It is important to communicate the offer to the customers, once you set the criteria for accepting points back.

![408874e Capture5](https://files.readme.io/408874e-Capture5.PNG)

Loyalty+ supports two different configurations for communications.

## Mandatory channels

From here, you can choose the communication channels that will invariably be used and through which the communication will definitely be sent out.

## Priority channels

According to priority and availability, you can specify how to send the communication. For example, if you set the priority in the order of SMS, email, and mobile push, the system will first check if the customer's cell phone number is available,

* If available, it will send an SMS communication and ignore the rest.
* If not available, it will check whether the customer has an email ID
* If an email ID is available, it sends out an email notification to the customer.
* If not, it will check if the customer is active through mobile push and process the message accordingly.  

For more information on communication channels, see here.

# Partial coupon payment

Partial coupon payment refers to the scenario where a coupon or gift card with a fixed value is used for multiple transactions, but the entire amount is not utilized in a single transaction. For example, if a $100 coupon is used for three transactions, with $30 used in the first, $50 in the second, and $20 in the third, this constitutes partial coupon payment.

Currently, the system does not support partial payments using coupons or gift cards. However, there are potential workarounds to address this limitation. 

**For registered users:** 

* Create a loyalty wallet system where points are converted into a currency value, allowing users to draw down the balance for transactions. 
* Another option, suitable for registered users, is to utilize the Promo Engine to issue promotions with a cap on the total discount, simulating partial coupon payments. 

**For unregistered users** : For unregistered users where the above solutions are not feasible, integrating with a gift card vendor and integrating it may be the most viable solution.

It's essential to consider the specific requirements and limitations of each workaround before implementing them to ensure the best fit for the system and user experience.
