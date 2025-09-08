---
title: Generate Authentication Token
excerpt: Generate authentication for mobile application.
api:
  file: v1.json
  operationId: generate-authentication-token
deprecated: false
hidden: true
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
Generates authentication token using customer identifier and deviceId. To use password based authentication, the password option has to be enabled for the org. Contact Engineering team to get password enabled for your org.

Once the token is generated, you need to generate OTP and validate the OTP to complete the authentication process. For password enabled orgs, you need to verify the account for the first time.

When the token expires, you can regenerate it using `token/regenerate`.

1. Steps to generate token for mobile apps :

   Generate a token using the token/generate API. You will get sessionId (valid for 15 minutes).\
   Using sessionId, generate an OTP.\
   Validate the OTP using sessionId. You will get the actual token along with the non-expiry key.\
   Use the key to regenerate token whenever required.

2. Steps to generate token for Web application:

3. Generate a session using a token generate API. You will get VIEW token and sessionId (valid for 15 minutes).

4. Using sessionId, generate an OTP.

5. Validate the OTP using sessionId. You will get the actual token. The key is not generated for web applications.

6. Use the token generated for validating the OTP to regenerate the token.

7. Steps to generate token for password-based authentication:

For the first time user: \* Use the steps mentioned above according to the type of application - mobile app or web app .

From second time:

1. Generate a session using a token generate API. You will get VIEW token and sessionId (valid for 15 minutes).
2. Validate the password (password/validate) using the sessionId generated.