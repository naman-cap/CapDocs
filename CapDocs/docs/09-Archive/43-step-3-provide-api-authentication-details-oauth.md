---
title: 'Step 3: Provide API authentication details (OAuth)'
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
API authentication is org specific and is required to authenticate APIs to capture data from the FTP server and save it to the Capillary database.

To configure OAuth credentials, follow these steps.

1. On the data flow configuration page, navigate to the OAuth block.

![29a4fc4 FdrBG83Mk8pHNO3ZtWJUyquwZjJIHpT3KQ](https://files.readme.io/29a4fc4-FdrBG83Mk8pHNO3ZtWJUyquwZjJIHpT3KQ.png)

2. In **Client Key**, enter the client key of the org.
3. In **Client Secret**, enter the secret generated for the org.
4. In **API Endpoint**, altering the endpoint of the API is required. By default, it takes the endpoint according to the selected template.
5. In **API Base URL**, enter the host URL according to the org's cluster.
6. In **API Method**, select the HTTP method for the API. Supported values:  POST, PUT.
7. In **Response Key**, enter the response status key.
8. Click **Continue** to save and proceed to the final step to configure [Frequency of triggering the Dataflow](https://docs.capillarytech.com/docs/step-4-configure-dataflow-execution-frequency).
