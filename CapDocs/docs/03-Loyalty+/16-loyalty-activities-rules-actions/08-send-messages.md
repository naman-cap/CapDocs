---
title: Send messages
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
You can notify customers when an action is executed successfully. Notifications can be sent through different channels such as SMS, email, WeChat, and Mobile Push. 

**Notification channels are of two types:**

* **Mandatory Channels**:, Channels that are mandatory for sending the notifications
* **Priority Channels**: Channels that needs to be triggered based on the priority and availability. For example, if SMS is set as priority 1, Mobile Push as priority 2 and email as priority 3, the system first checks whether SMS is configured and then checks if the mobile number is available for the customer. If any one fails, then it will try to send the notification through mobile push and so on.

Channels that are selected in Mandatory Channels will not appear in Priority Channels and vice versa.

**To configure notifications, follow these steps.**

1. Click the **Advanced Settings** of the campaign you want to make the changes.
2. Click on **Communication Channels** and you will see the following screen.

![d9f716d image 6](https://files.readme.io/d9f716d-image_6.png)

3. Select **Mandatory Channels** and **Priority Channels** for the notifications and click **Save**

![b7e11ee image 7](https://files.readme.io/b7e11ee-image_7.png)
