---
title: Authentication Scenarios and Recommendations
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
| Scenario                                                                   | Description                                                                                                                        | IAM Category             | Recommended Authentication                                           |
| :------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------- | :----------------------- | :------------------------------------------------------------------- |
| POS client-to-server integration                                           | POS terminals are directly integrated with Capillary Server. API requests come directly from POS terminal to the Capillary Server. | Machine to Machine (M2M) | Basic authentication using till username and password                |
| POS server-to-server integration                                           | POS servers are directly integrated with Capillary Server. API requests come directly from POS server to the Capillary Server.     | Machine to Machine (M2M) | OAuth2 Client Credentials Flow using API key and secret              |
| FTP server-to-server integration                                           | Client systems push files to FTP; Capillary accesses and processes these files via Connect+ or OOB solution.                       | Machine to Machine (M2M) | OAuth2 Client Credentials Flow using API key and secret              |
| Server-to-server custom integration                                        | Client servers consume Capillary APIs via a wrapper service. Development and maintenance depend on the agreement.                  | Machine to Machine (M2M) | OAuth2 Client Credentials Flow using API key and secret              |
| Prebuilt server-to-server integrations (Magento, Shopify, SFMC connectors) | Client systems use Capillary plugins to connect with Capillary.                                                                    | Machine to Machine (M2M) | OAuth2 Client Credentials Flow using API key and secret              |
| Integration via Connect+ dataflow                                          | Dataflows are configured and triggered within Connect+ for integrations.                                                           | Machine to Machine (M2M) | OAuth2 Client Credentials Flow using API key and secret              |
| First-party mobile/web app with basic OTP-based login                      | Customer-facing mobile or web app with simple OTP or password login.                                                               | Customer IAM             | Capillary Auth Engine (OTP / password-based auth)                    |
| Third-party apps integrating with Capillary                                | Mobile and Gateway APIs consumed by third-party apps for customer access.                                                          | Customer IAM             | Mobile APIs Auth Service (OTP/password/till login); Non-OAuth2-based |
| SSO for partner app login                                                  | Users log in once and access multiple partner apps without re-entering credentials.                                                | Customer IAM             | OAuth2 Authorization Code Flow with Ory Hydra (SSO)                  |
| Customised login with multiple options                                     | Customer-facing apps with custom login flows or third-party IdPs.                                                                  | Customer IAM             | Bring Your Own CIAM                                                  |
| Advanced security (e.g. adaptive 2FA)                                      | Applications requiring enhanced security controls.                                                                                 | Customer IAM             | Bring Your Own CIAM                                                  |
| Integration with external Identity Providers (IdP)                         | Customers use their existing IdP setup to authenticate users.                                                                      | Customer IAM             | Bring Your Own CIAM                                                  |
