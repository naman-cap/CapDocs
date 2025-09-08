---
title: Configure Firebase
excerpt: >-
  This section helps you with information on configurations that you need to do
  on Firebase.
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
In the Google Firebase, perform the following:

1. Open [Google Firebase](https://console.firebase.google.com) and create the project. Refer to [Firebase documentation](https://firebase.google.com/docs/android/setup#create-firebase-project).
2. Set up cloud messaging. Refer to [Cloud messaging documentation](https://firebase.google.com/docs/cloud-messaging/android/client#java_1).

![7df9c02 Messaging](https://files.readme.io/7df9c02-Messaging.png)

3. Navigate to project settings and define a custom role with below permissions:
   * fcmdata.deliverydata.list
   * firebase.clients.get
   * firebase.clients.list
   * firebase.projects.get
   * firebasenotifications.messages.create
   * firebasenotifications.messages.delete
   * firebasenotifications.messages.get
   * firebasenotifications.messages.list
   * firebasenotifications.messages.update
   * iam.serviceAccounts.get
   * cloudmessaging.messages.create\ <br />\
     The role assigned to the service account determines the level of access and permissions it has within your Firebase project. Choosing the appropriate role ensures that the service account has the necessary privileges to perform required tasks. For information on how to create a custom role, refer to [Custom role documentation](https://firebase.google.com/docs/projects/iam/roles).

![43676c1 Permission](https://files.readme.io/43676c1-Permission.png)

4. Create a service account with the newly created custom role permission. For information on service account creation, refer to [Service account documentation](https://cloud.google.com/iam/docs/service-account-overview). It is recommended to use a service account name that helps to identify the purpose and its role in the project.

![c49a5a5 Service account](https://files.readme.io/c49a5a5-Service_account.png)

![c046c9f Service account created](https://files.readme.io/c046c9f-Service_account_created.png)

5. Generate a new service account private key. This enables you to authenticate and authorize requests made by your SaaS platform.

   It is recommended to use the key type as JSON.  This provides the key in a structured and easily readable key file in JSON format. For information on how to create the service account private key, refer to\
   [Service account key documentation](https://cloud.google.com/iam/docs/keys-create-delete).

![ef7882e Key](https://files.readme.io/ef7882e-Key.png)

## Gateway Configuration

To enable mAPP SDK Channel and the push notifications, the team setting up the Firebase account for the brand must raise a ticket with the gateways team with details requested by them.