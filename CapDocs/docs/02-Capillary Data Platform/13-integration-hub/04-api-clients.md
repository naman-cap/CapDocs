---
title: Create API keys
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
## API Authentication Configuration

InTouch lets you enable or disable Basic Authentication and create API clients for OAuth-based authentications.

### Enable or Disable Basic Authentication for an org

To enable or disable basic authentication for an org, follow these steps. By default, Basic Authentication is enabled for the org. As only Till ID and password are required for Basic Auth, you do not see additional configuration options. For details on how to create till credentials, see set up org hierarchy, and for basic authentication process see authentication.

1. Log on to InTouch of your cluster.
2. Navigate to the **Profile** icon > **Organization Settings** > **Tools** > **Authentication**.
3. Click **Modify** to create a new client (token key and secret) for the org.

![1151d84 9SAETehHh8lFdxwNgBXlPL3a8dEr89TtKQ](https://files.readme.io/1151d84-9SAETehHh8lFdxwNgBXlPL3a8dEr89TtKQ.png)

4. To enable basic auth, set the **Enable Basic Authentication** to Yes.

![c98d987 9iPEkQiQukmxj1hAEp0LreoWqwKrnOA1jA](https://files.readme.io/c98d987-9iPEkQiQukmxj1hAEp0LreoWqwKrnOA1jA.png)

### Create API Clients

When you create client accounts, you will get the client key and client secret which can be used for OAuth. You can also generate access tokens with the generated client key and secret pair for more secured integrations.

1. On the API Client page, click **Register**. 

![960d86c 1gDsZjJPEVL5pBwzywOSBLfTePFJj9FhUw](https://files.readme.io/960d86c-1gDsZjJPEVL5pBwzywOSBLfTePFJj9FhUw.png)

2. In the **Client name**, enter a name for the client.

![652fe04 tHD5e3RFKYvxrW5CbSQZq8cuIPCSo79h7A](https://files.readme.io/652fe04-tHD5e3RFKYvxrW5CbSQZq8cuIPCSo79h7A.png)

3. In **Description**, enter a short description of the client.
4. In **Token expiry duration**, set the default expiry (in minutes) for the tokens created for the client. To modify, drag the pointer to the required position on the line.
5. In **Access Permission**, select the desired access that you want to provide for the current client - **Target Groups**: Related to target loyalty APIs; **Transaction**: Related to transaction API; **All**: For all other APIs.

* **None**: To restrict both read and write access to the respective APIs. This is the default value.
* **View only**: Select this to provide only read access to the respective APIs.
* **Modify**: Select this to provide both read and write access (add/update) to the respective APIs.

6. In **Select your organization till**, choose the Till that you want to associate to all the POST API calls.
7. Click **Next**. You will see the Client key and Client secret generated for the client.

![fc6cce3 Ie ZcK2K8MJxugzEnwuYd JgVpMfOWcplQ](https://files.readme.io/fc6cce3-Ie-ZcK2K8MJxugzEnwuYd_JgVpMfOWcplQ.png)

8. Copy the **Client key** and **client secret** and use them for authentication (OAuth). Using these details, you can also generate an access token through API as mentioned in the next section (Step 2: Generate Access Token).

![d8f4494 5XoN7AEjqsU8FMCxnHOtGmbt73GXbcUdmA](https://files.readme.io/d8f4494-5XoN7AEjqsU8FMCxnHOtGmbt73GXbcUdmA.png)

9. Click **Done** to close the screen.
10. To create more API client accounts, use **New API Client**.

![a7cb0f6 mQsULTKnvxwWPxExRTxa90 DyEIXVmb0pQ](https://files.readme.io/a7cb0f6-mQsULTKnvxwWPxExRTxa90-DyEIXVmb0pQ.png)

> 📘 After the client key and secret are generated, if you exit the API Credentials page, you cannot access the client secret again for that client.
