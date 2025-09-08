---
title: Configure WhatsApp Settings
deprecated: false
hidden: false
metadata:
  robots: index
---
![305fc97642932c1c835bdbe6a647ecf3fb725d75b0b06b48a404df573c155f12 image](https://files.readme.io/305fc97642932c1c835bdbe6a647ecf3fb725d75b0b06b48a404df573c155f12-image.png)

# Configure Sender Details

Configuring sender details involves providing specific identifiers and authentication credentials necessary for the client's WhatsApp account to send messages. These are primarily gathered during **Integration Enablement Ticket** and **Add the Connection IDs** of the WhatsApp client onboarding process.

1. **Parameters for Integration Enablement**When raising a ticket with the backend or sustenance team to enable the integration, you must provide them with the following three critical parameters:

* **WABA ID / Account SID**: This identifier needs to be requested from and shared by the BSP's (Tanla/Twilio/other) POC to the CSMs, typically via email.
* **Auth token / API Key**: This token is essential for authenticating API calls. For Karix/Tanla, follow these steps to retrieve it:

  * Visit the [Karix lounge](https://www.karix.solutions/lounge/sign_in.php).
  * Input the username, which is the Account name as received from the BSP's mail.
  * If you don't have a password, **click on Forgot Password**. Enter your Capillary mail and brand phone number to generate one.
  * Thereafter, generating the password login into the Karix Lounge and click on API Keys as shown below,

![da7544a6fe1b07bdfe42f3b8dbca7f7ea4c2ef8672334d55570c753c1acd845d image](https://files.readme.io/da7544a6fe1b07bdfe42f3b8dbca7f7ea4c2ef8672334d55570c753c1acd845d-image.png)

* The Alphanumeric value mentioned under **Keys** is your Auth Token / API Key.
* The **Key Name** associated with it should also be saved for later use (specifically for adding the DLT Endpoint).

![69819dab99d875c474ee695c6e6b1d3f673b4dbff75efd12bd5b237c7165ab33 image](https://files.readme.io/69819dab99d875c474ee695c6e6b1d3f673b4dbff75efd12bd5b237c7165ab33-image.png)

* **WhatsApp Sender ID / Messaging SID**:

  * This is the** client's official WhatsApp phone number**.
  * It is the same number that was shared with the BSP's (Tanla/Twilio/other) POC when filling in the onboarding details.

2. **Add the Connection IDs** To complete the account setup and fully configure the sender details, you must add specific connection IDs within the product UI:

* Navigate to **Org settings** ->** Channel configurations** -> **Search for Whatsapp**.
* Add the relevant Connection IDs as provided by the BSP. These include:
  * **Access token**
  * **Source Account ID**

## Configure Domain Gateway (Adding the DLT Endpoint in the Karix UI)

This involves setting up a Delivery Report (DLR) endpoint in the Karix UI, which acts as a gateway for delivery receipts, ensuring that status updates for sent messages are properly routed.

1. **Go to the Karix Portal**: Access the portal using the same login credentials as used for the Karix Lounge.
2. **Navigate to Webhook Configuration**: On the left-hand side, choose **WhatsApp Campaigns** > **Webhook Config** > **Delivery Rule** > **Create New**.
3. **Add the DLT Endpoint URL** : Click on "Create New" and input the DLT endpoint URL into the designated space. The URL to add is: " [https://dlrs.incrm.ccdelivery.capillarytech.com/karixwhatsappbulk](https://dlrs.incrm.ccdelivery.capillarytech.com/karixwhatsappbulk)"
4. **Add Header Details**:

* Under "Header," **add the Key retrieved from the Karix Lounge**.
* The **Value for this header would be your Auth Token / API Key**.

5. **Save Settings**: Choose the required settings and save them.

![253a82397942c98856f44754e98ce3e5466d52b94adfbbeb59f127a3a55aa601 image](https://files.readme.io/253a82397942c98856f44754e98ce3e5466d52b94adfbbeb59f127a3a55aa601-image.png)

<Note title="Note">
For a better understanding of WhatsApp, watch the easy-to-learn training on our [academy](https://academy.capillarytech.com/learn).
</Note>

## Configuring WhatsApp sender details

To configure WhatsApp sender details, from the WhatsApp sender number drop-down select the number from which you want to send the messages.

## WhatsApp Support for Multiple Numbers under One (WABA) Account

You can link multiple numbers under the same WhatsApp Business Account. This enables brands to maintain separate WhatsApp numbers for transactional/utility and promotional communication.

### Adding a new WhatsApp number to the source account

To add a new number under the source account, the CS/Gateway team needs to raise a request to the Tech/PST team, who can assist with the process.

Once the numbers are added, you can select the desired number in the Delivery Settings when configuring a campaign message. This allows you to choose the specific number from which you want to trigger the campaign message.

![7bac35a7bb12a135a80c3b619ce3819fb278a5c4ec9577b75e809180db5bb355 image](https://files.readme.io/7bac35a7bb12a135a80c3b619ce3819fb278a5c4ec9577b75e809180db5bb355-image.png)

### Multiple WhatsApp sender number use cases

* **To prevent users from blocking or archiving your chat on WhatsApp**:
  A common scenario where having different numbers for transactional and marketing communications is beneficial is when you aim to prevent users from blocking or archiving your chat on WhatsApp, thereby avoiding the loss of both promotional and useful information sent via the same number.
* **On the occasion of the suspension of a number**:
  Platforms like Meta have the authority to take them down if customers consistently block or report the chat in large numbers. Brands, therefore, opt not to rely on a single number for any communication to mitigate such risks.

# Gupshup integration for Whatsapp communication

You can use integrate and use Gupshup  <Glossary>Whatsapp BSP</Glossary> to send communications through Whatsapp from Capillary platform.

To integrate, perform the following:

## Onboarding

1. Enter the below details in the [onboarding details form](https://docs.google.com/spreadsheets/d/1roL9s_AZbv9PzgYa0sCNIL1Dd_QfNJ3b/edit#gid=216408141) .
   * Business name and FB manager ID
   * Country Details and Use cases
   * WhatsApp Phone numbers ( UAT and PROD )
   * WhatsApp Business profile setup - Display name, Type of company, Industry etc.
   * Callback URLs
   * Business Contact Details
2. If the Live Agent Dashboard feature is required, enter the following details in the [Live Agent Dashboard form](https://docs.google.com/spreadsheets/d/1roL9s_AZbv9PzgYa0sCNIL1Dd_QfNJ3b/edit#gid=432107749) :
   * Primary use cases and WhatsApp number
   * URL Preference
   * Email id of the admin
   * Whether the Gupshup bot is enabled on the clients number. If yes, API key and bot name should be mentioned
   * CRM used by the business
   <br />
3. If the Instant Bot Enablement feature is required, enter the required details in the [Keyword based Responses form](https://docs.google.com/spreadsheets/d/1roL9s_AZbv9PzgYa0sCNIL1Dd_QfNJ3b/edit#gid=1955821429) . This feature allows businesses to interact with their clients via WhatsApp 2-way messaging. This feature is intended to reduce the time for a business to configure a bot to interact with its customers.
