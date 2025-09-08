---
title: AMJ 2023 | Platform releases
excerpt: >-
  This page lists the releases that occurred for Capillary platform during the
  second quarter of 2023 (April, May, June), along with a brief descriptions for
  each.
deprecated: false
hidden: true
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
# API security enhancements

## 1. Increasing oAuth token expiry to 30 days (43200 minutes)

OAuth max expiry limit is increased to 30 days (43200 minutes). For security reasons, this is not enabled by default for all orgs. A ticket needs to be raised to increase the token expiry limit. For more information, refer to Token expiry duration in [API client](https://docs.capillarytech.com/docs/api-client) documentation.

## 2. Changes to permission settings while creating API client

The permission settings configuration during the creation of an API client is replaced with an option to select the appropriate access group. For more information, refer to [API client](https://docs.capillarytech.com/docs/api-client).

## 3. Integration with Customer Identity and Access Management(CIAM) platforms

Until now, brands that built loyalty applications using our platform had to rely on our authentication engine for customer identity management. Although this worked well for most of the smaller brands on our platform, we are increasingly seeing scenarios where enterprise customers want to deploy CIAM solutions for handling customer identity as these solutions are industry standards-compliant and offer a plethora of enterprise-grade security features. For this to happen, the Capillary API gateway, which is tightly integrated with our own authentication engine, should be able to work with the CIAM that the brands deploy and provide access to resources accordingly.

As a first step towards enabling this, we have made enhancements to our API gateway to make it work with the NextReason CIAM platform. With this support, brands can deploy [NextReason](https://nextreason.com/) CIAM for identity management purposes on their loyalty applications.

 For more information refer to [Gateway integration with CIAM](https://docs.capillarytech.com/docs/api-gateway-integration-with-ciam-platforms).

***

# Membercare enhancements

## 1. Tracking session logs on Membercare

This feature empowers Membercare to log user sessions and also enforces a mandatory requirement for admin users to provide a reason whenever making changes. For more information, refer to [Session logs](https://docs.capillarytech.com/docs/session-logs#starting-and-ending-a-session).

## 2. Request management screens on new Membecare UI

As of now, brand users raising identifier change or Account merge requests on the new Membercare UI had to navigate to the Older UI to Approve/Reject a request.  As a part of the AMJ quarter, we have migrated these functionalities to the new UI. For more information, refer to [Manage change](https://docs.capillarytech.com/docs/manage-change-request#approve-identifier-change-requests).

## 3. Adding gross amount field to Events -> transactions in a single view and group view

Gross amount field is added to Member View and Group View on Membercare in the Events → Transaction screen. For more information, refer to [customer view](https://docs.capillarytech.com/docs/customer-overview) and [group view](https://docs.capillarytech.com/docs/group-view).

## 4. Masking OTPs on Membercare

A new configuration CONF\_MASK\_OTP is added. This feature allows the masking of OTPs during the GET OTP API calls and on Membercare. For more information, refer to [Mask OTPs](https://docs.capillarytech.com/docs/mask-otps).

## 5. Member and group search on the member view/group view

This enhancement enables you to search for a member or a group from the member view/group view page itself. For more information, refer to [ Searching for a customer or a group](https://docs.capillarytech.com/docs/member-care#searching-for-a-customer-or-group).

## 6. Supporting points expiry, conversion and trigger-based schedules in group view

This enhancement enables you to view points expiry and conversion in group view on the new Membercare UI. For more information, refer to [Incentives](https://docs.capillarytech.com/docs/group-view#incentives).

## 7. Group view completion - goodwill points issue

This enhancement enables you to issue Goodwill points from the new Membercare UI. This is part of group view completion in Membercare. For more information, refer to [Group view](https://docs.capillarytech.com/docs/group-view).

## 8. Group view completion - slab change log screen

This enhancement enables you to view the tier change log history from the new Membercare UI. The slab change log screen in the group view of Membercare is identical to the one in the customer view. This is part of group view completion in Membercare. For more information, refer to [Issue goodwill points](https://docs.capillarytech.com/docs/issue-goodwill-points-coupons#new-membercare-issue-goodwill-points).

## 9. Customer stats in Membercare fetched from Insights+ backend

The customer status widget in Membercare now displays the details fetched from the Insights+ backend. For more information, refer to [Behavioural stats](https://docs.capillarytech.com/docs/customer-overview#behavioural-stats).

***

# Extension

The platform extensions framework is an independent platform that will be utilized for building vertical-specific and even brand-specific features. For more information, refer to [Extension](https://docs.capillarytech.com/reference/introduction-extensions).

## Airmiles calculator on extension framework

We have been focused on building vertical-specific enhancements on our platform over the last year after we signed enterprise-grade clients from airlines, hospitality and other industries. Continuing this theme, we have released an airline loyalty-focused enhancement to compute miles travelled by a customer given an origin airport and destination airport. In airline loyalty, miles (or points) are awarded to customers depending on the distance travelled between an origin and destination. As a result, this becomes an essential feature for onboarding airline companies on our platform. Another important highlight here is that the air miles calculator feature has been built on our new Platform Extensions framework.

 For more information, refer to [Airlines miles extension](https://docs.capillarytech.com/docs/airline-miles-extension).

***

# Administration

## Localisation support

The localisation feature in the Capillary platform enables one to view the content of any of the Capillary products in the desired language and also helps to display the terminologies according to the industry. For more information, refer to [Localisation management](https://docs.capillarytech.com/docs/translation-management).

***

# API changes

## 1. Retrieving line item quantity in absolute value

The GET transaction V2 API is modified to support the retrieval of transaction information based on transaction numbers and to get details of each transaction's line item quantities in absolute value. For more information, refer to [GET Transaction details with transaction number API](https://docs.capillarytech.com/reference/retrieve-transaction-details-with-bill-number).

## 2. Transaction search

In airline loyalty programs, Customer Service Representatives (CSRs) often receive requests from loyalty customers to claim miles earned on a flight. Customers or frequent flyers would call with details such as flight number, origin and destination and mention that the booking (or transaction), which is of type non-loyalty, would need to be tagged to them so that they can earn miles for it. CSRs, upon receiving this request, would look at the booking on our platform using the booking attributes shared by the customer and then issue a claim request.

To enable this specific scenario, we have built a new search API that will allow CSRs to look at bookings using pre-defined search criteria - a combination of transaction standard, custom and extended fields - and process miles claim requests.

 For more information, refer to [Transaction search API](https://docs.capillarytech.com/reference/meta-search).

***

# Connect+ enhancements

## 1. Connect+ link to be added to Intouch side navigation bar

Connect+ can be accessed from the Intouch side navigation bar now. For more information, refer to [Connect+ introduction](https://docs.capillarytech.com/docs/introduction-7).

## 2. Template for changing test and control status of customer

A new template Test and Control is added to Connect+. For more information, refer to [Test and control template](https://docs.capillarytech.com/docs/test-and-control).

## 3. Enabling *.Ok* file ingestion part of existing templates

This enhancement enables to use .ok files for data ingestion similar to any other file format that Connect+ supports. The existing .ok file template is removed. For more information, refer to [Connect to source](https://docs.capillarytech.com/docs/connect-to-source).

## 4. Filters on more than one header

This enhancement enables Connect+ to support filter expressions for multiple headers. For more information, refer to [Transform data](https://docs.capillarytech.com/docs/transform-data).

***

# Mobile SDK

Capillary SDK for both iOS and Android is released. This enables brands to enhance their applications with seamless push notification functionality and event tracking capabilities. For more information, refer [iOS ](https://docs.capillarytech.com/reference/ios-sdk)and [Android ](https://docs.capillarytech.com/reference/android-sdk)SDK.
