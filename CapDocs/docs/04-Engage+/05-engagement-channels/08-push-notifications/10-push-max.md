---
title: 'Push Max: Enhancing Push Notification Deliverabilty (On hold now)'
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
Push Max enhances Android push notifications by ensuring they reach users effectively. It tracks failed notifications and automatically resends them at a time when the user is more likely to be active, increasing the chances of successful delivery. Normally, notifications are sent from the Engage+ dashboard to Firebase Cloud Messaging (FCM) and then to user devices. However, some Android manufacturers like Xiaomi, OPPO, and Vivo use strict battery optimizations that can block or delay notifications when the app is not in use. Additionally, OS-level notification policies can further limit delivery.

To solve this, Push Max includes a fallback mechanism. When a user opens the app, it fetches any missed notifications from the server, ensuring they appear in the notification center or inbox even if they were initially blocked. This helps maximize delivery rates and ensures important messages reach users.
