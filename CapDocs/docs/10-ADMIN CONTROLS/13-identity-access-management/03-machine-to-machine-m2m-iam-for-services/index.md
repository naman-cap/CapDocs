---
title: Machine-to-machine (M2M) IAM for services
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
Machine-to-machine (M2M) interactions include communication between servers. In Capillary, M2M interactions includes the following:

* POS Client-to-Server Integration – POS terminals are directly integrated with the Capillary server. API requests originate from the POS terminal and are sent directly to the Capillary server.    
* POS Server-to-Server Integration \- POS servers are directly integrated with the Capillary server. API requests are sent from the POS server to the Capillary server.    
* FTP Server-to-Server Integration \- Client systems are configured to push files to an FTP server, and Capillary retrieves and processes these files via Connect+ or an out-of-the-box (OOB) solution.    
* Server-to-Server Custom Integration-  The client server consumes Capillary APIs via a wrapper service. Development and maintenance depend on the specific business agreement.    
* Prebuilt Server-to-Server Integrations (Magento, Shopify, SFMC Connectors) \- Client systems utilize Capillary plugins to communicate with Capillary.    
* End-Customer App Integration \- Third-party applications interact with Capillary using Mobile APIs and Gateway APIs.    
* End-Customer IAM (CIAM) in Partner Apps \-  Enables clients of Capillary’s direct customers to access data within the Capillary Platform. Users authenticate using their existing login credentials, allowing third-party clients to access data on their behalf.

To secure these M2M interactions, Capillary ensures that only authorized machines can interact with its services through the following methods:

* **[OAuth2 Client Credentials Flow (Recommended)](https://docs.capillarytech.com/docs/oauth2-client-credentials-flow)** - Uses an access token to authenticate an API request.
* **[Basic Authentication](https://docs.capillarytech.com/docs/basic-authentication-api)** - Uses till ID and password (in MD5 format) for authentication.
