---
title: Karix
deprecated: false
hidden: true
metadata:
  robots: index
---
# Configure Karix in capillary

To enable WhatsApp messaging through Capillary, you must connect your official WhatsApp Business Account (WABA) with the platform. This requires specific identifiers and authentication credentials that are shared during onboarding by your Business Solution Provider (BSP) such as Karix, Tanla or Twilio.

## Prerequisites

* All required documents, including KYC forms, pricing details, and checklists, must be provided by the client and shared with the Business Solution Provider (BSP).
* A WhatsApp Business Account (WABA) must be set up and verified in Meta Business Manager.
* The official WhatsApp Business number is verified through OTP.
* An Integration Enablement Ticket is created with the back-end or sustenance team, including all required account details.

| Parameters                       | Description                                         | Provided by                                                                                                                                 |
| :------------------------------- | :-------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------ |
| WABA / Account SID               | Unique identifier for the Whatsapp Business Account | BSP (Tanla/Twilio/Karix) shares it via email                                                                                                |
| Auth Token / API key             | Authentication key for API calls                    | [Generated from Karix/Tanla portal](https://docs.capillarytech.com/docs/whatsapp-integration#/retrieve-api-key-from-karix-or-other-portal). |
| Whatsapp Sender ID/ Messaging ID | Official Whatsapp number registered for messaging   | Client, shared with BSP during onboarding                                                                                                   |

## Retrieve API key from karix or other portal

To retrieve the api key from Karix or other portal follow these steps:

1. Visit the [Karix lounge](https://www.karix.solutions/lounge/sign_in.php).
2. Enter the username, which is the Account name as received from the BSP's mail.
3. If you don't have a password, **click on Forgot Password**. Enter your Capillary mail and brand phone number to generate one.
4. Thereafter, generating the password login into the Karix Lounge and click on API Keys as shown below.

![da7544a6fe1b07bdfe42f3b8dbca7f7ea4c2ef8672334d55570c753c1acd845d image](https://files.readme.io/da7544a6fe1b07bdfe42f3b8dbca7f7ea4c2ef8672334d55570c753c1acd845d-image.png)

The Alphanumeric value mentioned under **Keys** is your Auth Token / API Key. The **Key Name** associated with it should also be saved for later use (specifically for adding the DLT Endpoint).

## Add connection Ids in capillary

To complete the account setup you must add specific connection IDs within the UI. Perform the following steps:

1. Navigate to **Organization Settings** > **Channel Configurations**> **WhatsApp**.
2. Enter the following details as provided by the BSP:
   * **Access Token**
   * **Source Account ID**

## Configure Delivery Report (DLR) endpoint in Karix

This involves setting up a Delivery Report (DLR) endpoint in the Karix portal. The endpoint ensures that delivery receipts are passed back to Capillary so message status updates (such as delivered, failed, or read) are accurately tracked.

To configure the delivery report endpoint in Karix, follow the steps below:

1. Log in to the Karix Portal using the credentials for the Karix Lounge.
2. Navigate to **Webhook Configuration** section. On the left-hand side, select **WhatsApp Campaigns** > **Webhook Config** > **Delivery Rule** > **Create New**.
3. Add the DLT Endpoint URL into the designated space.
   The URL to add is:[https://dlrs.incrm.ccdelivery.capillarytech.com/karixwhatsappbulk](https://dlrs.incrm.ccdelivery.capillarytech.com/karixwhatsappbulk)"
4. Add Header Details. Enter the following values in the Header section:
   * **Key**: The key retrieved from the Karix Lounge.
   * **Value**: Your Auth Token / API Key
5. Choose the required settings and click **Save settings**.

![253a82397942c98856f44754e98ce3e5466d52b94adfbbeb59f127a3a55aa601 image](https://files.readme.io/253a82397942c98856f44754e98ce3e5466d52b94adfbbeb59f127a3a55aa601-image.png)

<Note title="Note">
For a better understanding of WhatsApp, watch the easy-to-learn training on our [academy](https://academy.capillarytech.com/learn).
</Note>
