---
title: Use Cases on Data Export
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
# Export customers that received messages of a specific campaign (without bounced, Control, etc)

1. Select the **Contacted** template, a standard fact template
2. In **Filters**, do the following to get customers contacted for a specific campaign\
   Select **Campaign Group** > **Campaign** > Type the campaign name in the **Search** box > Select the campaign using the check-box > Click **Include**.

![ce65da0c285f0e4b351ccee7fe588570886a45c9eba5a4cd8695591d1351766c Audience filter for export usecase   Copy](https://files.readme.io/ce65da0c285f0e4b351ccee7fe588570886a45c9eba5a4cd8695591d1351766c-Audience_filter_for_export_usecase_-_Copy.gif)

3. Use **Campaign Delivery Status** and do the following to further customers who received the campaign message. You need to select Delivered status and all its applicable sub-statuses (Opened, Clicked, Marked Spam, Marked Unsubscribed) to get the desired list\
   Select the **Campaign Delivery Status** > **Nsadmin Delivery Status** > Select all possible statuses of delivered messages - **Delivered, Opened, Clicked, Marked Spam, Marked Unsubscribed** > Click **Include**.

![5800cd89412234b64275a9e9ef93be09d20ae3d93ef69c18d1444d94919be7b4 Audience group export GIF2](https://files.readme.io/5800cd89412234b64275a9e9ef93be09d20ae3d93ef69c18d1444d94919be7b4-Audience_group_export_GIF2.gif)
