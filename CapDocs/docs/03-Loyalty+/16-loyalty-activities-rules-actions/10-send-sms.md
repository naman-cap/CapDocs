---
title: Send SMS
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
You can send an SMS to your customers when they satisfy a certain condition. It could be regarding the rewards they earned or just a general notification. You can create an SMS from the scratch or use an existing template from the creatives library.

> 📘 The message configuration varies for customers in India. You can use only DLT complaint message templates.

To configure the Send SMS action, follow these steps.

1. Select **Send SMS** and click **Save**.

![3cdbca7 SMS1](https://files.readme.io/3cdbca7-SMS1.PNG)

2. Click on **Add creative** to configure the SMS.

![fa657b5 SMS2](https://files.readme.io/fa657b5-SMS2.PNG)

3. To create the message from scratch, click **Create new**.\
   To use an existing template, hover on the desired template and click **Select**.

![b3890f4 SMS3](https://files.readme.io/b3890f4-SMS3.png)

4. Configure SMS text, and click **Done**. You can **preview** the SMS before saving it to see how the SMS renders on a mobile phone.\
   i. Select **+ Add Label** to use the dynamic tags to personalize the text for the customer-rich experience.\
   ii. Select **Allow Unicode characters** to allow the support of a much wider character set, and includes pretty much every character in the world, including Indian languages, some of the stranger European characters (like í), all the Cyrillic alphabet (e.g. Arabic, Russia, Punjabi, and Greek), all the Asian ones (Chinese, Japanese, etc), and also some of the emoticons out there!

![dc0093c SMS5](https://files.readme.io/dc0093c-SMS5.PNG)

5. Configure **Sender information**. By default, the default sender ID will be selected. If you wish to send from a different sender ID:\
   i. Click on the more options icon and select **Edit**.\
   ii. Uncheck **Use default sender ID**. You will see options to choose a sender ID.

![d4db426 SMS6](https://files.readme.io/d4db426-SMS6.PNG)

6. Select **Shorten all URLs** to shorten links used in SMS, 

![9bce0eb Capture7](https://files.readme.io/9bce0eb-Capture7.PNG)

> 📘 * As an SMS has a character limit, it is usual that the links that you use in SMS could occupy lot of characters. Hence, we highly recommended using shorten links or tiny URLs in such instances.

7. You can also set the delay in sending SMS from the event time. For example, you want to communicate something to the customer two days post a transaction.\
   i. Click on **Add delay while sending**.\
   ii. Choose your preferred period in the drop-down - Sec, Mins, Hours, or Days.\
   iii. In **Delay by** entering the duration.

8. Click **Save** to continue.

> 📘 Delay time should be greater than 120 seconds or 2 minutes.

![cd07040 SMS4](https://files.readme.io/cd07040-SMS4.PNG)
