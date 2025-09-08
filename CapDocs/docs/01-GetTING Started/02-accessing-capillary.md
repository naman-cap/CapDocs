---
title: Accessing Capillary
excerpt: This article provides the different ways of accessing InTouch.
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
InTouch is deployed in different clusters. Before accessing InTouch, you need to know the cluster of your org and login credentials provided by Capillary.

The following are the links to different clusters of InTouch:

* **EU**: [https://eu.intouch.capillarytech.com](https://eu.intouch.capillarytech.com)
* **India**: [https://intouch.capillary.co.in](https://intouch.capillary.co.in)
* **APAC2**: [https://apac2.intouch.capillarytech.com/](https://apac2.intouch.capillarytech.com/)
* **SG**: [https://sgcrm.cc.capillarytech.com/](https://sgcrm.cc.capillarytech.com/)
* **CN**: [http://intouch.capillarytech.cn.com/](http://intouch.capillarytech.cn.com/)
* **US**: [https://north-america.intouch.capillarytech.com](https://north-america.intouch.capillarytech.com)

You can access InTouch in three different ways:

* Using Capillary InTouch email Id and Password
* Using Capillary's Official Google account credentials
* Using SSO

You can also enable two-factor authentication (MFA) for your org. To enable this, raise a JIRA ticket with the Capillary Product Support team. If SSO is enabled, Two-factor authentication will not be considered.

## Login with Capillary Credentials

Get Started with Capillary InTouch! InTouch is a cloud-based platform that contains the entire product modules, including Organization settings and Workbench. InTouch can be accessed by all authorized users and brands. There are several user roles on InTouch and access is managed at the page level. Not everyone will have write access or access to all modules. Super Admins will provide access to users based on their role and scope.

Enter the credentials provided by Capillary in Email Id and Password then click on Sign in.

![cbba100  kxszggvWKsXxYFPfK6kP3YRTjdVmbUa3g](https://files.readme.io/cbba100--kxszggvWKsXxYFPfK6kP3YRTjdVmbUa3g.png)

## Login with Capillary Google account

You can now sign in to InTouch using your Capillary Google Workspace account.\
That means:

* No need to remember your Intouch password anymore
* No more Intouch password reset every month
* Convenience and security

### Prerequisite

You should have a Capillary Google Workspace account (e-mail address with domain capillarytech.com)

### Login with Google Credentials

1. In a browser, open the URL of your cluster.

* EU Cluster - [https://eu.intouch.capillarytech.com/auth/login](https://eu.intouch.capillarytech.com/auth/login)
* SG Cluster - [https://apac2.intouch.capillarytech.com/auth/login](https://apac2.intouch.capillarytech.com/auth/login)
* India Cluster - [https://intouch.capillary.co.in/auth/login](https://intouch.capillary.co.in/auth/login)

2. Click on **Sign in with Google** as shown below.

![0e375a7 GoogleSignIn](https://files.readme.io/0e375a7-GoogleSignIn.png)

3. Enter the email ID your Capillary Google Workspace account and click **Next**.
4. Enter your password and click **Next**.

![b1f07d4 Password](https://files.readme.io/b1f07d4-Password.png)

You will see Intouch Workbench. If you have already signed in to your Capillary Google Workspace account, you will directly see the Workbech page.

![303472d Workbench](https://files.readme.io/303472d-Workbench.png)

## Login with SSO

Sign in with a single set of credentials used for multiple applications provided by third party like Microsoft ADFS, G Suite SAML. It allows brand users to login to Capillary Intouch using their Identity Provider (IdP).

Setup SSO with Okta\
We have partnered with Okta for the integration. SSO setup requires configuring a connection for Capillary in Org’s IdP and setting up Org’s Identity in Okta Admin Console.

To set up SSO with Okta, follow these steps.

**Step 1 - Set up a connection for Capillary in Org’s IdP**

1. Capillary PoC has to send an email to the Capillary access team with a request to set up SSO for the organization providing the following information.

* Organization name and ID

* Email domain of the organization. For example, the domain is org.com if the Email Id is [abc@org.com](mailto:abc@org.com)

2. Capillary Access team will share the following information, which should be shared with the org PoC

* Assertion Consumer Service (ACS) URL.

* Service Provider (SP) Entity ID or Audience URL or Entity ID.

* User profile attributes need to be passed as SAML assertion - email, first name, and last name. Email ID mandatory.

* \[Optional] Attribute that defines if the user has access to Capillary. For example, group, organization. This is required if the org wants to define which employees have access to Capillary.

3. Org PoC will use the above information to create a connection for Capillary in their IdP and respond with the following information.

* Identity Provider SSO URL.

* Identity Provider Entity ID.

* Identity Provider Certificate signature.

To know about the SAML terminologies, read How SAML works?

**Step 2 - Setting up Identity Provider in Capillary**

1. Capillary or Org PoC will share the information provided in step 1.3 (above) with the Capillary Access team.

2. Capillary Access team will add an Identity Provider in Okta Admin Console and respond with setup confirmation.

![4611040 YcZE7z1u94dsCfdrLsaNl3MHQv3dLLoLXw](https://files.readme.io/4611040-YcZE7z1u94dsCfdrLsaNl3MHQv3dLLoLXw.png)

**Step 3 - Provide Capillary application’s access to Org users**\
Use Data Import to add Org users to the Capillary application with the appropriate access level.

* When you add users on InTouch, a verification email is sent along with the password setup link. The required change to disable the step is in progress and will be released soon. Until then, only Data Import to add Org users.

**Step 4 - Authenticate with Single Sign-on**

Once setup is completed, the org users can authenticate using SSO as explained in the following steps.

1. On the new sign-in page, click Sign in with SSO.

![](https://files.readme.io/04214ed-FSyNzHUAPJ5SY3uvldwDimwB-z1re6BNbw.png "FSyNzHUAPJ5SY3uvldwDimwB-z1re6BNbw.png")

2. In **Username**, enter a valid email address and click **Next**.\
   You are redirected to the Identity provider’s page to complete authentication.

![fc06d3a JbFVF8IG9WAPHdhx0jG6 7ZWTVzYp65YmQ](https://files.readme.io/fc06d3a-JbFVF8IG9WAPHdhx0jG6_7ZWTVzYp65YmQ.png)

3. On the Identity Provider’s page, enter your registered email address, password, and click **Sign in**.

![58636b9 Dkn 2OjHNw Om0sRCt LIOk6jdl9UctSSQ](https://files.readme.io/58636b9-Dkn_2OjHNw_Om0sRCt_LIOk6jdl9UctSSQ.png)

When the login is successful, you will see the InTouch home page.

## Configuring two-factor authentication (MFA)

To enable two-factor authentication, raise a JIRA ticket with the Capillary Product Support team. If SSO is enabled, two-factor authentication will not be required.

To configure the two-factor authentication settings, follow these steps:

1. Navigate to **Intouch > Organization Setup > Authentication Configurations**.

   ![7cc238d2d617d4e97b6a06a6fed7e8daf820902fdde7553a3505c1f6ac155b56 MFA config](https://files.readme.io/7cc238d2d617d4e97b6a06a6fed7e8daf820902fdde7553a3505c1f6ac155b56-MFA_config.png)
2. In the **Validity Period For 2 Factor Authentication (in days)**  field, define how long a user's 2FA authentication remains valid before they need to re-authenticate using 2FA. Example: If set to 1 day, a user who logs in with 2FA today won't need to go through 2FA again for the next 24 hours. The maximum number of days that you can set is 90.
3. In the **Validity Period For OTP Expiration (in minutes)** field, define how long a One-Time Password (OTP) remains valid before it expires. Example: If set to 15 minutes, an OTP sent to a user's email or phone will expire after 15 minutes if not used. The maximum allowed time is 15 minutes.
4. In the **Validity Period For Login Session (in hours)** field, define how long a user's login session remains active before they are automatically logged out due to inactivity. Example: If set to 24 hours, a user who logs in will remain logged in for 24 hours unless they manually log out or the session expires due to inactivity. The maximum allowed time is 24 hours.