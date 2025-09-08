---
title: android sdk info
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
To configure FCM as a gateway for push notifications, you need to raise a ticket to Capillary’s gateway team. Include the below details:

1. FCM server account private key\
   From the Firebase console, navigate to **Service accounts > Keys** and create a service account private key. This enables you to authenticate and authorize requests made by your SaaS platform.\
   It is recommended to use the key type as JSON.  This provides the key in a structured and easily readable key file in JSON format. For information on how to create and download the service account private key, see [Service account key documentation](https://cloud.google.com/iam/docs/keys-create-delete).

![d6f6205 Create Key](https://files.readme.io/d6f6205-Create_Key.png)

2. Project information\
   This should include the following:
   1. Brand name
   2. Org cluster
   3. Org id
