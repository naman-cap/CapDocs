---
title: oAuth2 Authorization Code Flow and SSO for Partner Apps - Using Ory Hydra
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
OAuth 2.0 Authorization Code Flow using Ory Hydra as the authentication provider enables customers to authenticate once and seamlessly access partner applications. This Single Sign-On (SSO) setup allows users to log in via the brand’s customer-facing app and access authorised partner apps without re-entering credentials.

This flow is used to provide an SSO experience in partner apps.

**Example:**

Urban Trend, a popular fashion retailer with an online platform, brick-and-mortar stores, and a loyalty program called Trendy Rewards, partners with:

1. ShopEase, a multi-brand e-commerce aggregator that sells various lifestyle products, including Urban Trend’s apparel.  
2. FashionBoard, a popular style and fashion discussion community that curates trends, style tips, and exclusive brand deals.

Urban Trend wants to provide a frictionless and secure user experience, and opts for a Single-sign on (SSO) experience as follows:

### **User Journey**

* A customer, Alice, has a Trendy Rewards account with Urban Trend.She has never used FashionBoard or ShopEase before, but both apps are partnered with Urban Trend.  
* Alice visits FashionBoard’s website to see the latest style tips. She notices an option: “Sign in with Urban Trend.” On clicking, she’s redirected to Urban Trend’s Login Page (e.g., `auth.urbantrend.com`).  
* Alice enters her Urban Trend mobile \+ OTP.  
* Alice sees a prompt asking to allow FashionBoard to view her Trendy Rewards status.  
* After successful login, Alice is redirected back to FashionBoard. She is now logged in on FashionBoard.  
* Later, Alice visits ShopEase to browse for deals. Again, there’s a “Sign in with Urban Trend” button.  
* When she clicks, ShopEase redirects her to the same Login Page (`auth.urbantrend.com`).  
* Because Alice already has an active session at Urban Trend (from the FashionBoard login), she may not need to re-enter credentials. She’s instantly recognized by Urban Trend’s SSO session.  
* She sees a consent screen (“Allow ShopEase to retrieve and redeem your loyalty points?”).  
* Alice is then redirected back to ShopEase, fully logged in, with her loyalty data available.

This way, Urban Trend is able to provide a unified experience

1. On FashionBoard, Alice sees her profile with a “Trendy Rewards VIP” badge.  
2. On ShopEase, she sees a personalized recommendation feed and her loyalty points balance that she could redeem for exclusive discounts on Urban Trend merchandise.  
3. No separate account creation was required for either FashionBoard or ShopEase; both leveraged Urban Trend as the central Identity Provider.

### **What’s Happening Technically?**

3. Urban Trend acts as the Identity Provider (IdP) or Authorization Server, created using Capillary CIAM.  
4. ShopEase is the Service Provider (SP) or Relying Party, relying on Urban Trend for authentication.  
5. SSO Flow:  
   1. OAuth 2.0 Authorization Code: ShopEase redirects Alice to Urban Trend’s Authorization Server.  
   2. OIDC for Identity: Urban Trend issues an ID token alongside the access token, confirming Alice’s identity.  
   3. Consent): Urban Trend prompts Alice to grant permission so ShopEase can access certain profile or loyalty data.  
   4. ShopEase receives tokens and recognizes Alice’s session as “logged in.”

# Configuring oAuth2 Authorization Code Flow

To configure OAuth2 Authorization Code Flow, raise a JIRA ticket to the Capillary Product Solutions team.
