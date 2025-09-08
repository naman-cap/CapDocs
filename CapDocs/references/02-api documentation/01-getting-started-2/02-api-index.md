---
title: API reference index
excerpt: This page gives you a glance of Capillary API endpoints.
deprecated: false
hidden: true
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
<Table align={["left","left","left","left"]}>
  <thead>
    <tr>
      <th style={{ textAlign: "left" }}>
        Title
      </th>

      <th style={{ textAlign: "left" }}>
        Method
      </th>

      <th style={{ textAlign: "left" }}>
        API endpoint
      </th>

      <th style={{ textAlign: "left" }}>
        Access group resource
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td style={{ textAlign: "left" }}>
        **Badges**
      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Create badges org meta
      </td>

      <td style={{ textAlign: "left" }}>
        POST
      </td>

      <td style={{ textAlign: "left" }}>
        api\_gateway/v1/badges/orgMeta
      </td>

      <td style={{ textAlign: "left" }}>
        *
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Update badges org meta
      </td>

      <td style={{ textAlign: "left" }}>
        PUT
      </td>

      <td style={{ textAlign: "left" }}>
        api\_gateway/v1/badges/orgMeta
      </td>

      <td style={{ textAlign: "left" }}>
        *
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Get badges org meta
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        api\_gateway/v1/badges/orgMeta
      </td>

      <td style={{ textAlign: "left" }}>
        *
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Create badges
      </td>

      <td style={{ textAlign: "left" }}>
        POST
      </td>

      <td style={{ textAlign: "left" }}>
        api\_gateway/v1/badges/badgeMeta
      </td>

      <td style={{ textAlign: "left" }}>
        *
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Update badges
      </td>

      <td style={{ textAlign: "left" }}>
        PUT
      </td>

      <td style={{ textAlign: "left" }}>
        api\_gateway/v1/badges/badgeMeta
      </td>

      <td style={{ textAlign: "left" }}>
        *
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Get all badges
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        api\_gateway/v1/badges/badgeMeta
      </td>

      <td style={{ textAlign: "left" }}>
        *
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Get badge by ID
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        api\_gateway/v1/badges\
        /badgeMeta/\{\{badgeId}}
      </td>

      <td style={{ textAlign: "left" }}>
        *
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Claim badge
      </td>

      <td style={{ textAlign: "left" }}>
        POST
      </td>

      <td style={{ textAlign: "left" }}>
        api\_gateway/v1/badges/badgeMeta\
        /\{\{badegId}}/claim
      </td>

      <td style={{ textAlign: "left" }}>
        *
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Update the activation status of badge
      </td>

      <td style={{ textAlign: "left" }}>
        PUT
      </td>

      <td style={{ textAlign: "left" }}>
        api\_gateway/v1/badges/badgeMeta\
        /\{badgeId}/\{activationStatus}
      </td>

      <td style={{ textAlign: "left" }}>
        *
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Enroll customers in badges
      </td>

      <td style={{ textAlign: "left" }}>
        POST
      </td>

      <td style={{ textAlign: "left" }}>
        api\_gateway/v1/badges/badgeMeta\
        /customer/issueBulk
      </td>

      <td style={{ textAlign: "left" }}>
        *
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Issue badge to the customer
      </td>

      <td style={{ textAlign: "left" }}>
        POST
      </td>

      <td style={{ textAlign: "left" }}>
        api\_gateway/v1/badges/customer/earn
      </td>

      <td style={{ textAlign: "left" }}>
        *
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Revoke enrolment of a badge
      </td>

      <td style={{ textAlign: "left" }}>
        POST
      </td>

      <td style={{ textAlign: "left" }}>
        api\_gateway/v1/badges\
        /badgeMeta/customer/revokeIssue
      </td>

      <td style={{ textAlign: "left" }}>
        *
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Revoke issual of a badge
      </td>

      <td style={{ textAlign: "left" }}>
        POST
      </td>

      <td style={{ textAlign: "left" }}>
        api\_gateway/v1/badges\
        /customer/revokeEarn
      </td>

      <td style={{ textAlign: "left" }}>
        *
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Get badges for customer
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        api\_gateway/v1/badges\
        /customer/\{customerId}
      </td>

      <td style={{ textAlign: "left" }}>
        *
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        **Behavioural events**
      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Add Event (Custom)
      </td>

      <td style={{ textAlign: "left" }}>
        POST
      </td>

      <td style={{ textAlign: "left" }}>
        v2/events
      </td>

      <td style={{ textAlign: "left" }}>
        Behavioural events
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Behavioural events
      </td>

      <td style={{ textAlign: "left" }}>
        PUT
      </td>

      <td style={{ textAlign: "left" }}>
        v2/events
      </td>

      <td style={{ textAlign: "left" }}>
        Behavioural Events
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Get Event Details
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v2/events
      </td>

      <td style={{ textAlign: "left" }}>
        Behavioural Events
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Get Running Events Status
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v2/events/running\_status
      </td>

      <td style={{ textAlign: "left" }}>
        Behavioural Events
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Get Customer Events
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v2/events/event\_data/\{userId}
      </td>

      <td style={{ textAlign: "left" }}>
        Behavioural Events
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Add Webhook
      </td>

      <td style={{ textAlign: "left" }}>
        POST
      </td>

      <td style={{ textAlign: "left" }}>
        v2/events/webhook
      </td>

      <td style={{ textAlign: "left" }}>
        Behavioural Events
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Get Audit Logs
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v2/events/audit\_logs
      </td>

      <td style={{ textAlign: "left" }}>
        Behavioural Events
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Get Events Logs
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v2/events/logs
      </td>

      <td style={{ textAlign: "left" }}>
        Behavioural Events
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        **Card**
      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Develop Cards
      </td>

      <td style={{ textAlign: "left" }}>
        POST
      </td>

      <td style={{ textAlign: "left" }}>
        v2/card/generate
      </td>

      <td style={{ textAlign: "left" }}>
        Card
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Get Card Generation Log
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v2/card/card/generation/logs
      </td>

      <td style={{ textAlign: "left" }}>
        Card
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Add Card (Single)
      </td>

      <td style={{ textAlign: "left" }}>
        POST
      </td>

      <td style={{ textAlign: "left" }}>
        v2/card
      </td>

      <td style={{ textAlign: "left" }}>
        Card
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Update Card Details (Single)
      </td>

      <td style={{ textAlign: "left" }}>
        PUT
      </td>

      <td style={{ textAlign: "left" }}>
        v2/card
      </td>

      <td style={{ textAlign: "left" }}>
        Card
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Update Card Details (Bulk)
      </td>

      <td style={{ textAlign: "left" }}>
        PUT
      </td>

      <td style={{ textAlign: "left" }}>
        v2/card/bulk
      </td>

      <td style={{ textAlign: "left" }}>
        Card
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Get Card Details
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v2/card
      </td>

      <td style={{ textAlign: "left" }}>
        Card
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Get Status Log
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v2/card/statusLog
      </td>

      <td style={{ textAlign: "left" }}>
        Card
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Limit Active Cards per Customer
      </td>

      <td style={{ textAlign: "left" }}>
        POST
      </td>

      <td style={{ textAlign: "left" }}>
        v2/organization/configs
      </td>

      <td style={{ textAlign: "left" }}>
        Organization
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        **Communications**
      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Send email communications
      </td>

      <td style={{ textAlign: "left" }}>
        POST
      </td>

      <td style={{ textAlign: "left" }}>
        v2/communications/email
      </td>

      <td style={{ textAlign: "left" }}>
        Communications
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Send SMS
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v1.1/communications/sms
      </td>

      <td style={{ textAlign: "left" }}>
        Communications
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Get SMS
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v1.1/communications/sms
      </td>

      <td style={{ textAlign: "left" }}>
        Communications
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Send Email
      </td>

      <td style={{ textAlign: "left" }}>
        POST
      </td>

      <td style={{ textAlign: "left" }}>
        v1.1/communications/sms
      </td>

      <td style={{ textAlign: "left" }}>
        Communications
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Get Email
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v1.1/communications/sms
      </td>

      <td style={{ textAlign: "left" }}>
        Communications
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Send SMS
      </td>

      <td style={{ textAlign: "left" }}>
        POST
      </td>

      <td style={{ textAlign: "left" }}>
        v1/communications/sms
      </td>

      <td style={{ textAlign: "left" }}>
        *
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Get SMS
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v1/communications/sms
      </td>

      <td style={{ textAlign: "left" }}>
        *
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Send Email
      </td>

      <td style={{ textAlign: "left" }}>
        POST
      </td>

      <td style={{ textAlign: "left" }}>
        v1/communications/sms
      </td>

      <td style={{ textAlign: "left" }}>
        *
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Get Email
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v1/communications/sms
      </td>

      <td style={{ textAlign: "left" }}>
        *
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        **Company**
      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Add Company
      </td>

      <td style={{ textAlign: "left" }}>
        POST
      </td>

      <td style={{ textAlign: "left" }}>
        v2/companies
      </td>

      <td style={{ textAlign: "left" }}>
        Companies
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Update Company
      </td>

      <td style={{ textAlign: "left" }}>
        PUT
      </td>

      <td style={{ textAlign: "left" }}>
        v2/companies
      </td>

      <td style={{ textAlign: "left" }}>
        Companies
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Get Company Details
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v2/companies
      </td>

      <td style={{ textAlign: "left" }}>
        Companies
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Remove Company
      </td>

      <td style={{ textAlign: "left" }}>
        DELETE
      </td>

      <td style={{ textAlign: "left" }}>
        v2/companies
      </td>

      <td style={{ textAlign: "left" }}>
        Companies
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Get Org Companies
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v2/companies/all
      </td>

      <td style={{ textAlign: "left" }}>
        Companies
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Get Companies by\
        Extended Field Values
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v2/companies/\
        extendedFieldSearch
      </td>

      <td style={{ textAlign: "left" }}>
        Companies
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        **Coupon**
      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Create coupon series
      </td>

      <td style={{ textAlign: "left" }}>
        POST
      </td>

      <td style={{ textAlign: "left" }}>
        v2/coupon/series
      </td>

      <td style={{ textAlign: "left" }}>
        Coupon
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Update coupon series
      </td>

      <td style={{ textAlign: "left" }}>
        PUT
      </td>

      <td style={{ textAlign: "left" }}>
        v2/coupon/series/\{id}
      </td>

      <td style={{ textAlign: "left" }}>
        Coupon
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Get coupon series details
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v2/coupon/series
      </td>

      <td style={{ textAlign: "left" }}>
        Coupon
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Issue single coupon
      </td>

      <td style={{ textAlign: "left" }}>
        POST
      </td>

      <td style={{ textAlign: "left" }}>
        v2/coupon/issue
      </td>

      <td style={{ textAlign: "left" }}>
        Coupon
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Issue bulk coupons
      </td>

      <td style={{ textAlign: "left" }}>
        POST
      </td>

      <td style={{ textAlign: "left" }}>
        v2/coupon/bulk/issue
      </td>

      <td style={{ textAlign: "left" }}>
        Coupon
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Redeem single coupon
      </td>

      <td style={{ textAlign: "left" }}>
        POST
      </td>

      <td style={{ textAlign: "left" }}>
        v2/coupon/redeem
      </td>

      <td style={{ textAlign: "left" }}>
        Coupon
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Redeem bulk coupons
      </td>

      <td style={{ textAlign: "left" }}>
        POST
      </td>

      <td style={{ textAlign: "left" }}>
        v2/coupon/bulk/redeem
      </td>

      <td style={{ textAlign: "left" }}>
        Coupon
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Check if coupon is Redeemable
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v2/coupon/is\_redeemable
      </td>

      <td style={{ textAlign: "left" }}>
        Coupon
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Reactivate redeemed coupon
      </td>

      <td style={{ textAlign: "left" }}>
        POST
      </td>

      <td style={{ textAlign: "left" }}>
        v2/coupon/reactivate
      </td>

      <td style={{ textAlign: "left" }}>
        Coupon
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Get coupon details
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v2/coupon
      </td>

      <td style={{ textAlign: "left" }}>
        Coupon
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Issue Coupon
      </td>

      <td style={{ textAlign: "left" }}>
        POST
      </td>

      <td style={{ textAlign: "left" }}>
        v1.1/coupon/issue
      </td>

      <td style={{ textAlign: "left" }}>
        Coupon
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Resend Coupon
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v1.1/coupon/resend
      </td>

      <td style={{ textAlign: "left" }}>
        Coupon
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Redeem Coupon
      </td>

      <td style={{ textAlign: "left" }}>
        POST
      </td>

      <td style={{ textAlign: "left" }}>
        v1.1/coupon/redeem
      </td>

      <td style={{ textAlign: "left" }}>
        Coupon
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Get Coupon details
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v1.1/coupon/get
      </td>

      <td style={{ textAlign: "left" }}>
        Coupon
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Is Coupon Redeemable
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v1.1/coupon/isredeemable
      </td>

      <td style={{ textAlign: "left" }}>
        Coupon
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Get Coupon series details
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v1.1/coupon/series
      </td>

      <td style={{ textAlign: "left" }}>
        Coupon
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Issue Coupon
      </td>

      <td style={{ textAlign: "left" }}>
        POST
      </td>

      <td style={{ textAlign: "left" }}>
        v1/coupon/issue
      </td>

      <td style={{ textAlign: "left" }}>
        *
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Resend Coupon
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v1/coupon/resend
      </td>

      <td style={{ textAlign: "left" }}>
        *
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Redeem Coupon
      </td>

      <td style={{ textAlign: "left" }}>
        POST
      </td>

      <td style={{ textAlign: "left" }}>
        v1/coupon/redeem
      </td>

      <td style={{ textAlign: "left" }}>
        *
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Get Coupon details
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v1/coupon/get
      </td>

      <td style={{ textAlign: "left" }}>
        *
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Is Coupon Redeemable
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v1/coupon/isredeemable
      </td>

      <td style={{ textAlign: "left" }}>
        *
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Get Coupon series details
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v1/coupon/series
      </td>

      <td style={{ textAlign: "left" }}>
        *
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        **Coupon upload**
      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Get Status of Redeemed Coupons
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v2/upload/\
        getUploadRedeemedCouponStatus\
        /\{couponSeriesId}
      </td>

      <td style={{ textAlign: "left" }}>
        *
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Get Uploaded Coupons Status
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v1/upload/getUploadStatus/
      </td>

      <td style={{ textAlign: "left" }}>
        *
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Upload Redeemed Coupons
      </td>

      <td style={{ textAlign: "left" }}>
        POST
      </td>

      <td style={{ textAlign: "left" }}>
        v1/upload\
        /getUploadRedeemedCouponStatus
      </td>

      <td style={{ textAlign: "left" }}>
        *
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Upload Coupons (Batch)
      </td>

      <td style={{ textAlign: "left" }}>
        POST
      </td>

      <td style={{ textAlign: "left" }}>
        coupon/api/v1/upload/file\
        /\{couponSeriedId}
      </td>

      <td style={{ textAlign: "left" }}>
        *
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        **Customer**
      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Add Customer
      </td>

      <td style={{ textAlign: "left" }}>
        POST
      </td>

      <td style={{ textAlign: "left" }}>
        v2/customers
      </td>

      <td style={{ textAlign: "left" }}>
        Customer
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Get Customer ID
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v2/customers/lookup
      </td>

      <td style={{ textAlign: "left" }}>
        Customer
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Update Identifier/Issue Card
      </td>

      <td style={{ textAlign: "left" }}>
        PUT
      </td>

      <td style={{ textAlign: "left" }}>
        v2/\{userId}/changeIdentifier
      </td>

      <td style={{ textAlign: "left" }}>
        Customer
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Upsert Customer
      </td>

      <td style={{ textAlign: "left" }}>
        POST
      </td>

      <td style={{ textAlign: "left" }}>
        v2/integrations/customer\
        /upsert/bulk\
        ?skipChangeIdentifier=false
      </td>

      <td style={{ textAlign: "left" }}>
        Customer
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Associate Customer
      </td>

      <td style={{ textAlign: "left" }}>
        POST
      </td>

      <td style={{ textAlign: "left" }}>
        v2/bulk
      </td>

      <td style={{ textAlign: "left" }}>
        Customer
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Get Customer Details
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v2/customers/\{customerId}
      </td>

      <td style={{ textAlign: "left" }}>
        Customer
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Get customer hierarchy in a user group
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v2/customers/bulk
      </td>

      <td style={{ textAlign: "left" }}>
        Customer
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Update Customer Details
      </td>

      <td style={{ textAlign: "left" }}>
        PUT
      </td>

      <td style={{ textAlign: "left" }}>
        v2/customers/\{userId}
      </td>

      <td style={{ textAlign: "left" }}>
        Customer
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Update association details
      </td>

      <td style={{ textAlign: "left" }}>
        PUT
      </td>

      <td style={{ textAlign: "left" }}>
        v2/bulk
      </td>

      <td style={{ textAlign: "left" }}>
        Customer
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Search Customers
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v2/customers/search
      </td>

      <td style={{ textAlign: "left" }}>
        Customer
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Update Subscription Details
      </td>

      <td style={{ textAlign: "left" }}>
        PUT
      </td>

      <td style={{ textAlign: "left" }}>
        v2/customers/\{userId}/subscriptions
      </td>

      <td style={{ textAlign: "left" }}>
        Customer
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Get Subscription Details
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v2/customers/\{customerId}  

        /subscriptions
      </td>

      <td style={{ textAlign: "left" }}>
        Customer
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Get Points Expiry Schedule
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v2/customers/\{userId}\
        /pointsExpirySchedule
      </td>

      <td style={{ textAlign: "left" }}>
        Customer
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Get Points Expiry Schedule\
        (Light API)
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v2/customers/lookup/\
        pointsExpirySchedule
      </td>

      <td style={{ textAlign: "left" }}>
        Customer
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Get Loyalty Events
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v2/customers/\{userId}/loyaltyEvents
      </td>

      <td style={{ textAlign: "left" }}>
        Customer
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Get Loyalty Details
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v2/customers/\{customerId}\
        /loyaltyDetails
      </td>

      <td style={{ textAlign: "left" }}>
        Customer
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Get Points Transfer Summary
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v2/customers/\{userId}/pointsTransfers
      </td>

      <td style={{ textAlign: "left" }}>
        Customer
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Get Points Balance
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v2/customers/\{user id}/points/balance
      </td>

      <td style={{ textAlign: "left" }}>
        Customer
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Get Customer Tier
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v2/customers/\{userId|/tierDetails}
      </td>

      <td style={{ textAlign: "left" }}>
        Customer
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Get Points Conversion Schedule
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v2/customers/\{userId}\
        /promisedPointsSchedule
      </td>

      <td style={{ textAlign: "left" }}>
        User Groups
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Get Customer Coupons\
        (Detailed)
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v2/customers/\{customerId}/coupons
      </td>

      <td style={{ textAlign: "left" }}>
        Customer
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Get Retro Requests
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v2/customers/\{customerId}/\
        retroRequest
      </td>

      <td style={{ textAlign: "left" }}>
        Customer
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Get Identifier Change Requests
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v2/customers/\{customerId}/\
        changeRequest
      </td>

      <td style={{ textAlign: "left" }}>
        Customer
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Get Goodwill Requests
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v2/customers/\{customerId}/\
        goodwillRequest
      </td>

      <td style={{ textAlign: "left" }}>
        Customer
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Request Goodwill points (Group)
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v2/requests/
      </td>

      <td style={{ textAlign: "left" }}>
        Requests
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Add Customer Image
      </td>

      <td style={{ textAlign: "left" }}>
        POST
      </td>

      <td style={{ textAlign: "left" }}>
        v2/customers/\{customerId}/setImage
      </td>

      <td style={{ textAlign: "left" }}>
        Customer
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Delete Customer Image
      </td>

      <td style={{ textAlign: "left" }}>
        DELETE
      </td>

      <td style={{ textAlign: "left" }}>
        v2/customers/\{userId}/deleteImage
      </td>

      <td style={{ textAlign: "left" }}>
        Customer
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Get Customer Coupons (Basic)
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v2/customers/coupons
      </td>

      <td style={{ textAlign: "left" }}>
        Customer
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Link/Delink Card
      </td>

      <td style={{ textAlign: "left" }}>
        POST
      </td>

      <td style={{ textAlign: "left" }}>
        v2/customers/\{userId}/changeIdentifier
      </td>

      <td style={{ textAlign: "left" }}>
        Customer
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Add Referrals
      </td>

      <td style={{ textAlign: "left" }}>
        POST
      </td>

      <td style={{ textAlign: "left" }}>
        v2/customers/\{userId}/referrals
      </td>

      <td style={{ textAlign: "left" }}>
        Customer
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Get Referrals
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v2/customers/\{userId}/referrals
      </td>

      <td style={{ textAlign: "left" }}>
        Customer
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Get Customer Status Log
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v2/customers/\{userId}/statusLog
      </td>

      <td style={{ textAlign: "left" }}>
        Customer
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Get Customer Subscription Log
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v2/customers/\{userId}/\
        subscriptionStatusChangeLog
      </td>

      <td style={{ textAlign: "left" }}>
        Customer
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Get user group customer tracker\
        details
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v2/customers/userEntityTrackers
      </td>

      <td style={{ textAlign: "left" }}>
        Customer
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Get customer transactions
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v2/customers/\{id}/transactions
      </td>

      <td style={{ textAlign: "left" }}>
        *
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Add Customer
      </td>

      <td style={{ textAlign: "left" }}>
        POST
      </td>

      <td style={{ textAlign: "left" }}>
        v1.1/customer/add
      </td>

      <td style={{ textAlign: "left" }}>
        Customer
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Update Customer details
      </td>

      <td style={{ textAlign: "left" }}>
        POST
      </td>

      <td style={{ textAlign: "left" }}>
        v1.1/customer/update
      </td>

      <td style={{ textAlign: "left" }}>
        Customer
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Update Customer Identifier
      </td>

      <td style={{ textAlign: "left" }}>
        POST
      </td>

      <td style={{ textAlign: "left" }}>
        v1.1/customer/update\_identity
      </td>

      <td style={{ textAlign: "left" }}>
        Customer
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Get Customer Details
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v1.1/customer/get
      </td>

      <td style={{ textAlign: "left" }}>
        Customer
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Get Customer Transactions
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v1.1/customer/transactions
      </td>

      <td style={{ textAlign: "left" }}>
        Customer
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Get Customer Redemptions
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v1.1/customer/redemptions
      </td>

      <td style={{ textAlign: "left" }}>
        Customer
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Get Customer Coupons
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v1.1/customer/coupons
      </td>

      <td style={{ textAlign: "left" }}>
        Customer
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Add/Update Customer Notes
      </td>

      <td style={{ textAlign: "left" }}>
        POST
      </td>

      <td style={{ textAlign: "left" }}>
        v1.1/customer/notes
      </td>

      <td style={{ textAlign: "left" }}>
        Customer
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Get Customer Notes
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v1.1/customer/notes
      </td>

      <td style={{ textAlign: "left" }}>
        Customer
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Get Product Recommendations
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v1.1/customer/recommendations
      </td>

      <td style={{ textAlign: "left" }}>
        Customer
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Get Customer Interactions
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v1.1/customer/interaction
      </td>

      <td style={{ textAlign: "left" }}>
        Customer Communications
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Add Ticket
      </td>

      <td style={{ textAlign: "left" }}>
        POST
      </td>

      <td style={{ textAlign: "left" }}>
        v1.1/customer/tickets
      </td>

      <td style={{ textAlign: "left" }}>
        Customer
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Get Ticket Details
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v1.1/customer/tickets
      </td>

      <td style={{ textAlign: "left" }}>
        Customer
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Refer Customer
      </td>

      <td style={{ textAlign: "left" }}>
        POST
      </td>

      <td style={{ textAlign: "left" }}>
        v1.1/customer/referrals
      </td>

      <td style={{ textAlign: "left" }}>
        Customer
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Get Referral Details
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v1.1/customer/referrals
      </td>

      <td style={{ textAlign: "left" }}>
        Customer
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Add/Update Customer Preferences
      </td>

      <td style={{ textAlign: "left" }}>
        POST
      </td>

      <td style={{ textAlign: "left" }}>
        v1.1/customer/preferences
      </td>

      <td style={{ textAlign: "left" }}>
        Customer
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Get Customer Preferences
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v1.1/customer/preferences
      </td>

      <td style={{ textAlign: "left" }}>
        Customer
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Update Subscription Details
      </td>

      <td style={{ textAlign: "left" }}>
        POST
      </td>

      <td style={{ textAlign: "left" }}>
        v1.1/customer/subscriptions
      </td>

      <td style={{ textAlign: "left" }}>
        Customer
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Get Subscription Details
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v1.1/customer/subscriptions
      </td>

      <td style={{ textAlign: "left" }}>
        Customer
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        **Customer (Lookup)**
      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Get promotion data
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v2/customers/lookup/promotionData
      </td>

      <td style={{ textAlign: "left" }}>
        Customer
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Update Customer Details
      </td>

      <td style={{ textAlign: "left" }}>
        PUT
      </td>

      <td style={{ textAlign: "left" }}>
        v2/customers/lookup
      </td>

      <td style={{ textAlign: "left" }}>
        Customer
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Get Customer Details
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v2/customers/lookup/customerDetails
      </td>

      <td style={{ textAlign: "left" }}>
        *
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Update Customer Status
      </td>

      <td style={{ textAlign: "left" }}>
        PUT
      </td>

      <td style={{ textAlign: "left" }}>
        v2/customers/lookup/status
      </td>

      <td style={{ textAlign: "left" }}>
        *
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Get Subscription Details
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v2/customers/lookup/subscriptions
      </td>

      <td style={{ textAlign: "left" }}>
        *
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Get Customer Loyalty Details
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v2/customers/lookup/loyaltyDetails
      </td>

      <td style={{ textAlign: "left" }}>
        *
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Get Retro Requests
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v2/customers/lookup/retroRequest
      </td>

      <td style={{ textAlign: "left" }}>
        *
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Add Customer Image
      </td>

      <td style={{ textAlign: "left" }}>
        POST
      </td>

      <td style={{ textAlign: "left" }}>
        v2/customers/lookup/setImage
      </td>

      <td style={{ textAlign: "left" }}>
        *
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Get Referrals
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v2/customers/lookup/referrals
      </td>

      <td style={{ textAlign: "left" }}>
        *
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Get Customer\
        Recommendations
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v2/customers/lookup/recommendations
      </td>

      <td style={{ textAlign: "left" }}>
        *
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Get Points Balance
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v2/customers/lookup/points/balance
      </td>

      <td style={{ textAlign: "left" }}>
        *
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Get Customer Tier
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v2/customers/lookup/tierDetails
      </td>

      <td style={{ textAlign: "left" }}>
        *
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Get Points Conversion\
        Schedule
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v2/customers/lookup\
        /promisedPointsSchedule
      </td>

      <td style={{ textAlign: "left" }}>
        *
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        **Customer labels**
      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Add Labels
      </td>

      <td style={{ textAlign: "left" }}>
        POST
      </td>

      <td style={{ textAlign: "left" }}>
        v2/organization/label
      </td>

      <td style={{ textAlign: "left" }}>
        Organization
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Get Org Labels
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v2/organization/labels
      </td>

      <td style={{ textAlign: "left" }}>
        Organization
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Tag Customers (to Labels)
      </td>

      <td style={{ textAlign: "left" }}>
        POST
      </td>

      <td style={{ textAlign: "left" }}>
        v2/customers/\{userId}/changeLabels
      </td>

      <td style={{ textAlign: "left" }}>
        Customer
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Get Customer Labels
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v2/customers/\{userId}/labels
      </td>

      <td style={{ textAlign: "left" }}>
        Customer
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Search Customers by Label
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v2/customers/labels/\
        search?q=\{LabelName}
      </td>

      <td style={{ textAlign: "left" }}>
        Customer
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        **Event logs**
      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Get Event Log\
        (by Request ID)
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v3/webHooks/eventLog/requestId
      </td>

      <td style={{ textAlign: "left" }}>
        *
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Get Event Log\
        (by Reference ID)
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v3/webHooks/eventLog/refId
      </td>

      <td style={{ textAlign: "left" }}>
        *
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Get Event Log\
        (by Event ID)
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v3/webhooks/eventLog
      </td>

      <td style={{ textAlign: "left" }}>
        *
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        **Leads**
      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Add Lead
      </td>

      <td style={{ textAlign: "left" }}>
        PATCH
      </td>

      <td style={{ textAlign: "left" }}>
        v2/leads
      </td>

      <td style={{ textAlign: "left" }}>
        Leads
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Add Lead Substatus
      </td>

      <td style={{ textAlign: "left" }}>
        POST
      </td>

      <td style={{ textAlign: "left" }}>
        v2/leads/substatus
      </td>

      <td style={{ textAlign: "left" }}>
        Leads
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Update Lead Status
      </td>

      <td style={{ textAlign: "left" }}>
        PUT
      </td>

      <td style={{ textAlign: "left" }}>
        v2/leads/\{leadId}/status
      </td>

      <td style={{ textAlign: "left" }}>
        Leads
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Update Lead Followups
      </td>

      <td style={{ textAlign: "left" }}>
        POST
      </td>

      <td style={{ textAlign: "left" }}>
        v2/leads/\{leadId}/followup
      </td>

      <td style={{ textAlign: "left" }}>
        Leads
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Update Lead
      </td>

      <td style={{ textAlign: "left" }}>
        PUT
      </td>

      <td style={{ textAlign: "left" }}>
        v2/leads/\{leadId}
      </td>

      <td style={{ textAlign: "left" }}>
        Leads
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Configure lead reasons
      </td>

      <td style={{ textAlign: "left" }}>
        POST
      </td>

      <td style={{ textAlign: "left" }}>
        v2/leads/reasons
      </td>

      <td style={{ textAlign: "left" }}>
        Leads
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Get Lead Status Log
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v2/leads/\{leadId}/statusLog
      </td>

      <td style={{ textAlign: "left" }}>
        Leads
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Get Lead follow-ups
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v2/leads/\{leadId}/followups
      </td>

      <td style={{ textAlign: "left" }}>
        Leads
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Get Lead Reasons
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v2/leads/reasons
      </td>

      <td style={{ textAlign: "left" }}>
        Leads
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Get Lead Details
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v2/leads
      </td>

      <td style={{ textAlign: "left" }}>
        Leads
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Get Lead Substatus
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v2/leads/substatuses
      </td>

      <td style={{ textAlign: "left" }}>
        Leads
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Assign Lead
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v2/leads
      </td>

      <td style={{ textAlign: "left" }}>
        Leads
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Search lead
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v2/leads
      </td>

      <td style={{ textAlign: "left" }}>
        Leads
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        **Organization**
      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Get Custom Fields
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v2/organization/customFields
      </td>

      <td style={{ textAlign: "left" }}>
        Organization Data Field
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Get Config Key Values
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v2/organization/organization\
        /configkeyvalue
      </td>

      <td style={{ textAlign: "left" }}>
        Organization
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Get org till details
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v2/organization/till
      </td>

      <td style={{ textAlign: "left" }}>
        Organization
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Get Active Tills
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v2/organization/activeTill
      </td>

      <td style={{ textAlign: "left" }}>
        Organization
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Get Loyalty Programs
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v2/organization/programs
      </td>

      <td style={{ textAlign: "left" }}>
        Organization
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Add Store
      </td>

      <td style={{ textAlign: "left" }}>
        POST
      </td>

      <td style={{ textAlign: "left" }}>
        v2/orgEntity/store
      </td>

      <td style={{ textAlign: "left" }}>
        Organization
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Get Org Details
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v1.1/organization/get
      </td>

      <td style={{ textAlign: "left" }}>
        Organization
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Get Org Entities
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v1.1/organization/entities
      </td>

      <td style={{ textAlign: "left" }}>
        Organization
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Get Org Configurations
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v1.1/organization/configs
      </td>

      <td style={{ textAlign: "left" }}>
        Organization
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Get Org Statistics
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v1.1/organization/statistics
      </td>

      <td style={{ textAlign: "left" }}>
        *
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Get Top Selling Items
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v1.1/organization/topitems
      </td>

      <td style={{ textAlign: "left" }}>
        Organization Entity
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Get Org Custom Fields
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v1.1/organization/customfields
      </td>

      <td style={{ textAlign: "left" }}>
        Organization Data Fields
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Get Org Payment Modes
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v1.1/organization/tenders
      </td>

      <td style={{ textAlign: "left" }}>
        Organization
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Get Org Details
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v1/organization/get
      </td>

      <td style={{ textAlign: "left" }}>
        *
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Get Org Entities
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v1/organization/entities
      </td>

      <td style={{ textAlign: "left" }}>
        *
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Get Org Configurations
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v1/organization/configs
      </td>

      <td style={{ textAlign: "left" }}>
        *
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Get Org Statistics
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v1/organization/statistics
      </td>

      <td style={{ textAlign: "left" }}>
        *
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Get Top Selling Items
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v1/organization/topitems
      </td>

      <td style={{ textAlign: "left" }}>
        *
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Get Org Custom Fields
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v1/organization/customfields
      </td>

      <td style={{ textAlign: "left" }}>
        *
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Get Org Payment Modes
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v1/organization/tenders
      </td>

      <td style={{ textAlign: "left" }}>
        Organization
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        **OTP**
      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Generate OTP
      </td>

      <td style={{ textAlign: "left" }}>
        POST
      </td>

      <td style={{ textAlign: "left" }}>
        v2/otp/generate
      </td>

      <td style={{ textAlign: "left" }}>
        OTP
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Validate OTP
      </td>

      <td style={{ textAlign: "left" }}>
        POST
      </td>

      <td style={{ textAlign: "left" }}>
        v2/otp/validate
      </td>

      <td style={{ textAlign: "left" }}>
        OTP
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Get OTP
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v2/otp
      </td>

      <td style={{ textAlign: "left" }}>
        OTP
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        **Partner program**
      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Link Customer to Partner Program
      </td>

      <td style={{ textAlign: "left" }}>
        POST
      </td>

      <td style={{ textAlign: "left" }}>
        v2/partnerProgram/linkCustomer
      </td>

      <td style={{ textAlign: "left" }}>
        Partner Program
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Update Customer
      </td>

      <td style={{ textAlign: "left" }}>
        POST
      </td>

      <td style={{ textAlign: "left" }}>
        v2/partnerProgram/\
        customerPartnerProgramUpdate
      </td>

      <td style={{ textAlign: "left" }}>
        Partner Program
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Delink Customer
      </td>

      <td style={{ textAlign: "left" }}>
        POST
      </td>

      <td style={{ textAlign: "left" }}>
        v2/partnerProgram/\
        deLinkCustomer
      </td>

      <td style={{ textAlign: "left" }}>
        Partner Program
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Get Customer Activity
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v2/partnerProgram\
        /customerActivityHistory
      </td>

      <td style={{ textAlign: "left" }}>
        Partner Program
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        **PII deletion**
      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Add a PII deletion request
      </td>

      <td style={{ textAlign: "left" }}>
        POST
      </td>

      <td style={{ textAlign: "left" }}>
        v2/requests
      </td>

      <td style={{ textAlign: "left" }}>
        Requests
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Update PII deletion status
      </td>

      <td style={{ textAlign: "left" }}>
        PUT
      </td>

      <td style={{ textAlign: "left" }}>
        v2/requests
      </td>

      <td style={{ textAlign: "left" }}>
        Requests
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Retrieve request status\
        of PII deletion
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v2/requests/\{id}
      </td>

      <td style={{ textAlign: "left" }}>
        Requests
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Retrieve PII deletion\
        request details
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v2/requests
      </td>

      <td style={{ textAlign: "left" }}>
        Requests
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        **Points**
      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Customer Points Transferrable
      </td>

      <td style={{ textAlign: "left" }}>
        POST
      </td>

      <td style={{ textAlign: "left" }}>
        v2/points/isTransferrable
      </td>

      <td style={{ textAlign: "left" }}>
        Points
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Transfer Customer Points
      </td>

      <td style={{ textAlign: "left" }}>
        POST
      </td>

      <td style={{ textAlign: "left" }}>
        v2/points/transfer
      </td>

      <td style={{ textAlign: "left" }}>
        Points
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Get Points Transfer Details
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v2/points/transfer
      </td>

      <td style={{ textAlign: "left" }}>
        Points
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Reverse Redeemed Points
      </td>

      <td style={{ textAlign: "left" }}>
        POST
      </td>

      <td style={{ textAlign: "left" }}>
        v2/points/reverse
      </td>

      <td style={{ textAlign: "left" }}>
        Points
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Group Points Transferrable
      </td>

      <td style={{ textAlign: "left" }}>
        POST
      </td>

      <td style={{ textAlign: "left" }}>
        v2/points/userGroup2/\
        isTransferrable
      </td>

      <td style={{ textAlign: "left" }}>
        Points
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Transfer Group Points
      </td>

      <td style={{ textAlign: "left" }}>
        POST
      </td>

      <td style={{ textAlign: "left" }}>
        v2/points//transfer
      </td>

      <td style={{ textAlign: "left" }}>
        Points
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Points Unlock API
      </td>

      <td style={{ textAlign: "left" }}>
        POST
      </td>

      <td style={{ textAlign: "left" }}>
        v2/points//unlockPromisedPoints
      </td>

      <td style={{ textAlign: "left" }}>
        Points
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Check If Points Redeemable
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v1.1/points/isredeemable
      </td>

      <td style={{ textAlign: "left" }}>
        Points
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Issue Validation Code\
        (to redeem points)
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v1.1/points/validationcode
      </td>

      <td style={{ textAlign: "left" }}>
        Points
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Redeem Points
      </td>

      <td style={{ textAlign: "left" }}>
        POST
      </td>

      <td style={{ textAlign: "left" }}>
        v1.1/points/redeem
      </td>

      <td style={{ textAlign: "left" }}>
        Points
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Check If Points Redeemable
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v1/points/isredeemable
      </td>

      <td style={{ textAlign: "left" }}>
        *
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Issue Validation Code\
        (to redeem points)
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v1/points/validationcode
      </td>

      <td style={{ textAlign: "left" }}>
        *
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Redeem Points
      </td>

      <td style={{ textAlign: "left" }}>
        POST
      </td>

      <td style={{ textAlign: "left" }}>
        v1/points/redeem
      </td>

      <td style={{ textAlign: "left" }}>
        *
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        **Points ledger**
      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Get Customer Ledger Balance
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v2/pointsLedger\
        /getCustomerLedgerBalance
      </td>

      <td style={{ textAlign: "left" }}>
        Points
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Get Customer Ledger Information
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v2/pointsLedger\
        /getCustomerLedgerInfo?
      </td>

      <td style={{ textAlign: "left" }}>
        Points
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Get Points Ledger Explode info
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v2/pointsLedger\
        /getLedgerExplodeInfo
      </td>

      <td style={{ textAlign: "left" }}>
        Points
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        **Product**
      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Add Product
      </td>

      <td style={{ textAlign: "left" }}>
        POST
      </td>

      <td style={{ textAlign: "left" }}>
        v1.1/product/add
      </td>

      <td style={{ textAlign: "left" }}>
        Product
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Get Product Details
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v1.1/product/get
      </td>

      <td style={{ textAlign: "left" }}>
        Product
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Search Products
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v1.1/product/search
      </td>

      <td style={{ textAlign: "left" }}>
        Product
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Add Product Attributes
      </td>

      <td style={{ textAlign: "left" }}>
        POST
      </td>

      <td style={{ textAlign: "left" }}>
        v1.1/product/attributes
      </td>

      <td style={{ textAlign: "left" }}>
        Product
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Get Product Attributes
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v1.1/product/attributes
      </td>

      <td style={{ textAlign: "left" }}>
        Product
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Get Product Categories
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v1.1/product/categories
      </td>

      <td style={{ textAlign: "left" }}>
        Product
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Get Product Brands
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v1.1/product/brands
      </td>

      <td style={{ textAlign: "left" }}>
        Product
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Get Product Colors
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v1.1/product/colors
      </td>

      <td style={{ textAlign: "left" }}>
        Product
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Get Product Sizes
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v1.1/product/sizes
      </td>

      <td style={{ textAlign: "left" }}>
        Product
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Get Product Meta Sizes
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v1.1/product/meta\_sizes
      </td>

      <td style={{ textAlign: "left" }}>
        Product
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Add Product
      </td>

      <td style={{ textAlign: "left" }}>
        POST
      </td>

      <td style={{ textAlign: "left" }}>
        v1/product/add
      </td>

      <td style={{ textAlign: "left" }}>
        *
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Get Product Details
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v1/product/get
      </td>

      <td style={{ textAlign: "left" }}>
        *
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Search Products
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v1/product/search
      </td>

      <td style={{ textAlign: "left" }}>
        *
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Add Product Attributes
      </td>

      <td style={{ textAlign: "left" }}>
        POST
      </td>

      <td style={{ textAlign: "left" }}>
        v1/product/attributes
      </td>

      <td style={{ textAlign: "left" }}>
        *
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Get Product Attributes
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v1/product/attributes
      </td>

      <td style={{ textAlign: "left" }}>
        *
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Get Product Categories
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v1/product/categories
      </td>

      <td style={{ textAlign: "left" }}>
        *
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Get Product Brands
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v1/product/brands
      </td>

      <td style={{ textAlign: "left" }}>
        *
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Get Product Colors
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v1/product/colors
      </td>

      <td style={{ textAlign: "left" }}>
        *
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Get Product Sizes
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v1/product/sizes
      </td>

      <td style={{ textAlign: "left" }}>
        *
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Get Product Meta Sizes
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v1/product/meta\_sizes
      </td>

      <td style={{ textAlign: "left" }}>
        *
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Add transaction request
      </td>

      <td style={{ textAlign: "left" }}>
        POST
      </td>

      <td style={{ textAlign: "left" }}>
        v2/requests/
      </td>

      <td style={{ textAlign: "left" }}>
        Requests
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Update transaction request
      </td>

      <td style={{ textAlign: "left" }}>
        PUT
      </td>

      <td style={{ textAlign: "left" }}>
        v2/requests/
      </td>

      <td style={{ textAlign: "left" }}>
        Requests
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Retrieve transaction request\
        status
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v2/requests/\{id}
      </td>

      <td style={{ textAlign: "left" }}>
        Requests
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Retrieve transaction request\
        details
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v2/requests
      </td>

      <td style={{ textAlign: "left" }}>
        Requests
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Add Request
      </td>

      <td style={{ textAlign: "left" }}>
        POST
      </td>

      <td style={{ textAlign: "left" }}>
        v1.1/request/ad
      </td>

      <td style={{ textAlign: "left" }}>
        Requests
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Approve Requests
      </td>

      <td style={{ textAlign: "left" }}>
        POST
      </td>

      <td style={{ textAlign: "left" }}>
        v1.1/request/approve
      </td>

      <td style={{ textAlign: "left" }}>
        Requests
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Reject Requests
      </td>

      <td style={{ textAlign: "left" }}>
        POST
      </td>

      <td style={{ textAlign: "left" }}>
        v1.1/request/reject
      </td>

      <td style={{ textAlign: "left" }}>
        Requests
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Get Request Details
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v1.1/request/get
      </td>

      <td style={{ textAlign: "left" }}>
        Requests
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Get Request Logs
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v1.1/request/logs
      </td>

      <td style={{ textAlign: "left" }}>
        CustChangeReqs
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Send retro request
      </td>

      <td style={{ textAlign: "left" }}>
        POST
      </td>

      <td style={{ textAlign: "left" }}>
        v1.1/request/
      </td>

      <td style={{ textAlign: "left" }}>
        Requests
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Approval of the request
      </td>

      <td style={{ textAlign: "left" }}>
        POST
      </td>

      <td style={{ textAlign: "left" }}>
        v1.1/request/approve
      </td>

      <td style={{ textAlign: "left" }}>
        Requests
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Approve Requests
      </td>

      <td style={{ textAlign: "left" }}>
        POST
      </td>

      <td style={{ textAlign: "left" }}>
        v1/request/approve
      </td>

      <td style={{ textAlign: "left" }}>
        *
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Reject Requests
      </td>

      <td style={{ textAlign: "left" }}>
        POST
      </td>

      <td style={{ textAlign: "left" }}>
        v1/request/reject
      </td>

      <td style={{ textAlign: "left" }}>
        *
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Get Request Details
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v1/request/get
      </td>

      <td style={{ textAlign: "left" }}>
        *
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Get Request Logs
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v1/request/logs
      </td>

      <td style={{ textAlign: "left" }}>
        *
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Send retro request
      </td>

      <td style={{ textAlign: "left" }}>
        POST
      </td>

      <td style={{ textAlign: "left" }}>
        v1/request
      </td>

      <td style={{ textAlign: "left" }}>
        *
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Approval of request
      </td>

      <td style={{ textAlign: "left" }}>
        POST
      </td>

      <td style={{ textAlign: "left" }}>
        v1/request/approve
      </td>

      <td style={{ textAlign: "left" }}>
        *
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        **Referral**
      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Validate referral code
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v2/validate
      </td>

      <td style={{ textAlign: "left" }}>
        Customer
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        **Reward catalog**
      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Create Reward
      </td>

      <td style={{ textAlign: "left" }}>
        POST
      </td>

      <td style={{ textAlign: "left" }}>
        api\_gateway/rewards/core/\
        v1/reward/create
      </td>

      <td style={{ textAlign: "left" }}>

      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Update Reward
      </td>

      <td style={{ textAlign: "left" }}>
        PUT
      </td>

      <td style={{ textAlign: "left" }}>
        api\_gateway/rewards/core/\
        v1/reward\
        /\{reward ID}/brand/\{brand ID}
      </td>

      <td style={{ textAlign: "left" }}>

      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Create custom field
      </td>

      <td style={{ textAlign: "left" }}>
        POST
      </td>

      <td style={{ textAlign: "left" }}>
        api\_gateway/rewards/core/v1\
        /brand/customfield
      </td>

      <td style={{ textAlign: "left" }}>

      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Get custom field
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        api\_gateway/rewards/core/v1\
        /brand/customfield
      </td>

      <td style={{ textAlign: "left" }}>

      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Get user brand rewards
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        api\_gateway/rewards/core/v1\
        /user/reward/\{reward Id}\
        /brand/\{brand name}
      </td>

      <td style={{ textAlign: "left" }}>

      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Get Brands Rewards
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        api\_gateway/rewards/core/\
        v1/reward/brand/\{brand Id}
      </td>

      <td style={{ textAlign: "left" }}>

      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Get User Reward Details
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        api\_gateway/rewards/core/v1\
        /user/vouchers/brand\
        /\{brand name}?\
        mobile=\{mobile}\&username=\{store}
      </td>

      <td style={{ textAlign: "left" }}>

      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Get User Reward by ID
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        api\_gateway/rewards/core/v1\
        /user/reward/\{reward Id}\
        /vouchers/brand/\{brand name}\
        ?mobile=\{mobile}\&username=\{store}
      </td>

      <td style={{ textAlign: "left" }}>

      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Issue User Reward
      </td>

      <td style={{ textAlign: "left" }}>
        POST
      </td>

      <td style={{ textAlign: "left" }}>
        api\_gateway/rewards/core\
        /v1/user/reward\
        /\{reward Id}/issue\
        ?username=\{store}\&skip\_validation=true
      </td>

      <td style={{ textAlign: "left" }}>

      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Issue bulk reward
      </td>

      <td style={{ textAlign: "left" }}>
        POST
      </td>

      <td style={{ textAlign: "left" }}>
        api\_gateway/rewards/core/v1\
        /user/rewards/issue?\
        username=\{store}\
        \&skip\_validation=true
      </td>

      <td style={{ textAlign: "left" }}>

      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Create Catalog Promotion
      </td>

      <td style={{ textAlign: "left" }}>
        POST
      </td>

      <td style={{ textAlign: "left" }}>
        api\_gateway/rewards/core\
        /v1/promotion/create
      </td>

      <td style={{ textAlign: "left" }}>

      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
         Update Catalog Promotion
      </td>

      <td style={{ textAlign: "left" }}>
        PUT
      </td>

      <td style={{ textAlign: "left" }}>
        api\_gateway/rewards/core/\
        v1/promotion\
        /\{reward Id}/brand/\{brand Id}
      </td>

      <td style={{ textAlign: "left" }}>

      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Get Catalog Promotion Details
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        api\_gateway/rewards/core\
        /v1/promotion/\{promotion Id}\
        /brand/\{brand Id}
      </td>

      <td style={{ textAlign: "left" }}>

      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Get List of Promotions
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        api\_gateway/rewards/core\
        /v1/promotion/brand/\{brand Id}
      </td>

      <td style={{ textAlign: "left" }}>

      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Disable Promotion
      </td>

      <td style={{ textAlign: "left" }}>
        PUT
      </td>

      <td style={{ textAlign: "left" }}>
        api\_gateway/rewards/core\
        /v1/promotion/\{promotion Id}/status/false/brand/\{brand Id}
      </td>

      <td style={{ textAlign: "left" }}>

      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Get Rewards for User
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        api\_gateway/rewards/core\
        /v1/user/reward/brand\
        /\{BrandName}?userId=\{userID}
      </td>

      <td style={{ textAlign: "left" }}>

      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Get rewards for User (New API)
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        api\_gateway/rewards/core/v1/user\
        /userReward/brand/\{BrandName}
      </td>

      <td style={{ textAlign: "left" }}>

      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        **Staff**
      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Add Staff Account
      </td>

      <td style={{ textAlign: "left" }}>
        POST
      </td>

      <td style={{ textAlign: "left" }}>
        v2/staff
      </td>

      <td style={{ textAlign: "left" }}>
        Staff
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Get Access Token
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v2/staff/accessToken
      </td>

      <td style={{ textAlign: "left" }}>
        Staff
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Edit Staff Details
      </td>

      <td style={{ textAlign: "left" }}>
        POST
      </td>

      <td style={{ textAlign: "left" }}>
        v2/staff/edit
      </td>

      <td style={{ textAlign: "left" }}>
        Staff
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Get Staff Details
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v2/staff
      </td>

      <td style={{ textAlign: "left" }}>
        Staff
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Change Account Password
      </td>

      <td style={{ textAlign: "left" }}>
        POST
      </td>

      <td style={{ textAlign: "left" }}>
        v2/staff/changePassword
      </td>

      <td style={{ textAlign: "left" }}>
        Staff
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Send OTP
      </td>

      <td style={{ textAlign: "left" }}>
        POST
      </td>

      <td style={{ textAlign: "left" }}>
        v2/staff/sendOtp
      </td>

      <td style={{ textAlign: "left" }}>
        Staff
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Validate OTP
      </td>

      <td style={{ textAlign: "left" }}>
        POST
      </td>

      <td style={{ textAlign: "left" }}>
        v2/staff/validate
      </td>

      <td style={{ textAlign: "left" }}>
        Staff
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Change Identifier (Send OTP)
      </td>

      <td style={{ textAlign: "left" }}>
        POST
      </td>

      <td style={{ textAlign: "left" }}>
        v2/staff/changeidentifier/sendotp
      </td>

      <td style={{ textAlign: "left" }}>
        Staff
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Change Identifier (Validate OTP)
      </td>

      <td style={{ textAlign: "left" }}>
        POST
      </td>

      <td style={{ textAlign: "left" }}>
        v2/staff/changeidentifier
      </td>

      <td style={{ textAlign: "left" }}>
        Staff
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Transfer Staff User
      </td>

      <td style={{ textAlign: "left" }}>
        POST
      </td>

      <td style={{ textAlign: "left" }}>
        v2/staff/transfer
      </td>

      <td style={{ textAlign: "left" }}>
        Staff
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Get Staff of Store/Zone
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v2/staff/getUsersList
      </td>

      <td style={{ textAlign: "left" }}>
        Staff
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Logout Staff Account
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v2/staff/logout
      </td>

      <td style={{ textAlign: "left" }}>
        Staff
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Remove Staff Account
      </td>

      <td style={{ textAlign: "left" }}>
        POST
      </td>

      <td style={{ textAlign: "left" }}>
        v2/staff/delete
      </td>

      <td style={{ textAlign: "left" }}>
        Staff
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        **Store**
      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Get Store Details
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v1.1/store/get
      </td>

      <td style={{ textAlign: "left" }}>
        Store
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Get Store Staff Details
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v1.1/store/staff
      </td>

      <td style={{ textAlign: "left" }}>
        Store
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Get Store Tasks
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v1.1/store/tasks
      </td>

      <td style={{ textAlign: "left" }}>
        Store
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Verify Store Login Credentials
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v1.1/store/login
      </td>

      <td style={{ textAlign: "left" }}>
        Store
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Upload Store Logs
      </td>

      <td style={{ textAlign: "left" }}>
        POST
      </td>

      <td style={{ textAlign: "left" }}>
        v1.1/store/logs
      </td>

      <td style={{ textAlign: "left" }}>
        Store
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Upload Store Reports
      </td>

      <td style={{ textAlign: "left" }}>
        POST
      </td>

      <td style={{ textAlign: "left" }}>
        v1.1/store/reports
      </td>

      <td style={{ textAlign: "left" }}>
        Store
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Get Store Reports
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v1.1/store/reports
      </td>

      <td style={{ textAlign: "left" }}>
        Store
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Get Store Configurations
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v1.1/store/configurations
      </td>

      <td style={{ textAlign: "left" }}>
        Store
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Verify Login Credentials
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v1.1/store/login
      </td>

      <td style={{ textAlign: "left" }}>
        Store
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Get Store Details
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v1/store/get
      </td>

      <td style={{ textAlign: "left" }}>
        Store
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Get Store Staff Details
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v1/store/staff
      </td>

      <td style={{ textAlign: "left" }}>
        Store
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Get Store Tasks
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v1/store/tasks
      </td>

      <td style={{ textAlign: "left" }}>
        Store
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Verify Store Login Credentials
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v1/store/login
      </td>

      <td style={{ textAlign: "left" }}>
        Store
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Upload Store Logs
      </td>

      <td style={{ textAlign: "left" }}>
        POST
      </td>

      <td style={{ textAlign: "left" }}>
        v1/store/logs
      </td>

      <td style={{ textAlign: "left" }}>
        Store
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Upload Store Reports
      </td>

      <td style={{ textAlign: "left" }}>
        POST
      </td>

      <td style={{ textAlign: "left" }}>
        v1/store/reports
      </td>

      <td style={{ textAlign: "left" }}>
        Store
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Get Store Reports
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v1/store/reports
      </td>

      <td style={{ textAlign: "left" }}>
        Store
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Get Store Configurations
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v1/store/configurations
      </td>

      <td style={{ textAlign: "left" }}>
        Store
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Verify Login Credentials
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v1/store/login
      </td>

      <td style={{ textAlign: "left" }}>
        Store
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        **Target group**
      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Deactivate target
      </td>

      <td style={{ textAlign: "left" }}>
        DELETE
      </td>

      <td style={{ textAlign: "left" }}>
        v3/targetGroups/\{groupId}/targets/\{targetId}
      </td>

      <td style={{ textAlign: "left" }}>
        *
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Create target groups
      </td>

      <td style={{ textAlign: "left" }}>
        POST
      </td>

      <td style={{ textAlign: "left" }}>
        v3/targetGroups
      </td>

      <td style={{ textAlign: "left" }}>
        *
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Get target groups
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v3/targetGroups/\{targetGroupId}
      </td>

      <td style={{ textAlign: "left" }}>
        *
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Get target periods
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v3/targetGroups/\{targetGroupId}\
        /targetPeriods
      </td>

      <td style={{ textAlign: "left" }}>
        *
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Get targets details
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v3/targetGroups/\{targetGroupId}/targets
      </td>

      <td style={{ textAlign: "left" }}>
        *
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Get target communication\
        template
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v3/targetGroups/\{targetGroupId}\
        /targets/\{targetId}/communications
      </td>

      <td style={{ textAlign: "left" }}>
        *
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Upsert target communication
      </td>

      <td style={{ textAlign: "left" }}>
        POST
      </td>

      <td style={{ textAlign: "left" }}>
        v3/targetGroups/\{groupId}targets\
        /\{targetId}/communications/upsert
      </td>

      <td style={{ textAlign: "left" }}>
        *
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Get target channels
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v3/targetGroups/channels
      </td>

      <td style={{ textAlign: "left" }}>
        *
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Delete target group
      </td>

      <td style={{ textAlign: "left" }}>
        DELETE
      </td>

      <td style={{ textAlign: "left" }}>
        v3/targetGroups/\{groupId}
      </td>

      <td style={{ textAlign: "left" }}>
        *
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Create target period
      </td>

      <td style={{ textAlign: "left" }}>
        POST
      </td>

      <td style={{ textAlign: "left" }}>
        v3/targetGroups/\{groupId}  

        /targetPeriods
      </td>

      <td style={{ textAlign: "left" }}>
        *
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Update target period
      </td>

      <td style={{ textAlign: "left" }}>
        PUT
      </td>

      <td style={{ textAlign: "left" }}>
        v3/targetGroups/\{groupId}\
        /targetPeriods
      </td>

      <td style={{ textAlign: "left" }}>
        *
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Create targets
      </td>

      <td style={{ textAlign: "left" }}>
        POST
      </td>

      <td style={{ textAlign: "left" }}>
        v3/targetGroups/\{groupId}/targets
      </td>

      <td style={{ textAlign: "left" }}>
        *
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Modify targets
      </td>

      <td style={{ textAlign: "left" }}>
        PUT
      </td>

      <td style={{ textAlign: "left" }}>
        v3/targetGroups/\{groupId}\
        /targets/\{targetId}
      </td>

      <td style={{ textAlign: "left" }}>
        *
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        **Tasks**
      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Add Tasks
      </td>

      <td style={{ textAlign: "left" }}>
        POST
      </td>

      <td style={{ textAlign: "left" }}>
        v1.1/task/add
      </td>

      <td style={{ textAlign: "left" }}>
        Tasks
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Update Tasks
      </td>

      <td style={{ textAlign: "left" }}>
        POST
      </td>

      <td style={{ textAlign: "left" }}>
        v1.1/task/update
      </td>

      <td style={{ textAlign: "left" }}>
        Tasks
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Get Tasks Metadata
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v1.1/task/metadata
      </td>

      <td style={{ textAlign: "left" }}>
        Tasks
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Get Task Logs
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v1.1/task/log
      </td>

      <td style={{ textAlign: "left" }}>
        Tasks
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Update Status Mappings
      </td>

      <td style={{ textAlign: "left" }}>
        POST
      </td>

      <td style={{ textAlign: "left" }}>
        v1.1/task/statusmapping
      </td>

      <td style={{ textAlign: "left" }}>
        Tasks
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Get Status Mappings
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v1.1/task/statusmapping
      </td>

      <td style={{ textAlign: "left" }}>
        Tasks
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Get Task Reminders
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v1.1/task/reminder
      </td>

      <td style={{ textAlign: "left" }}>
        Tasks
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Create/Update Task Reminders
      </td>

      <td style={{ textAlign: "left" }}>
        POST
      </td>

      <td style={{ textAlign: "left" }}>
        v1.1/task/reminder
      </td>

      <td style={{ textAlign: "left" }}>
        Tasks
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Add Tasks
      </td>

      <td style={{ textAlign: "left" }}>
        POST
      </td>

      <td style={{ textAlign: "left" }}>
        v1/task/add
      </td>

      <td style={{ textAlign: "left" }}>
        Tasks
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Update Tasks
      </td>

      <td style={{ textAlign: "left" }}>
        POST
      </td>

      <td style={{ textAlign: "left" }}>
        v1/task/update
      </td>

      <td style={{ textAlign: "left" }}>
        Tasks
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Get Tasks Metadata
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v1/task/metadata
      </td>

      <td style={{ textAlign: "left" }}>
        Tasks
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Get Task Logs
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v1/task/log
      </td>

      <td style={{ textAlign: "left" }}>
        Tasks
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Update Status Mappings
      </td>

      <td style={{ textAlign: "left" }}>
        POST
      </td>

      <td style={{ textAlign: "left" }}>
        v1/task/statusmapping
      </td>

      <td style={{ textAlign: "left" }}>
        Tasks
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Get Status Mappings
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v1/task/statusmapping
      </td>

      <td style={{ textAlign: "left" }}>
        Tasks
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Get Task Reminders
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v1/task/reminder
      </td>

      <td style={{ textAlign: "left" }}>
        Tasks
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Create/Update Task Reminders
      </td>

      <td style={{ textAlign: "left" }}>
        POST
      </td>

      <td style={{ textAlign: "left" }}>
        v1/task/reminder
      </td>

      <td style={{ textAlign: "left" }}>
        Tasks
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        **Transaction**
      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Add/Return Transaction(bulk)
      </td>

      <td style={{ textAlign: "left" }}>
        POST
      </td>

      <td style={{ textAlign: "left" }}>
        v2/transactions/bulk
      </td>

      <td style={{ textAlign: "left" }}>
        Transaction
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Add/Return transaction (single)
      </td>

      <td style={{ textAlign: "left" }}>
        POST
      </td>

      <td style={{ textAlign: "left" }}>
        v2/transactions
      </td>

      <td style={{ textAlign: "left" }}>
        Transaction
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Update Transaction
      </td>

      <td style={{ textAlign: "left" }}>
        PUT
      </td>

      <td style={{ textAlign: "left" }}>
        v2/transactions
      </td>

      <td style={{ textAlign: "left" }}>
        Transaction
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Get Transaction Details
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v2/transactions/\{id}
      </td>

      <td style={{ textAlign: "left" }}>
        Transaction
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Get transaction details using bill number
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v2/transactions/getByBillNumber\
        /\{bill\_number}
      </td>

      <td style={{ textAlign: "left" }}>
        *
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Add Transaction
      </td>

      <td style={{ textAlign: "left" }}>
        POST
      </td>

      <td style={{ textAlign: "left" }}>
        v1.1/transaction/add
      </td>

      <td style={{ textAlign: "left" }}>
        Transaction
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Add Transaction with Local Currency
      </td>

      <td style={{ textAlign: "left" }}>
        POST
      </td>

      <td style={{ textAlign: "left" }}>
        v1.1/transaction/add\_with\_local\_currency
      </td>

      <td style={{ textAlign: "left" }}>
        Transaction
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Update Transaction Details
      </td>

      <td style={{ textAlign: "left" }}>
        POST
      </td>

      <td style={{ textAlign: "left" }}>
        v1.1/transaction/update
      </td>

      <td style={{ textAlign: "left" }}>
        Transaction
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Get Transaction Details
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v1.1/transaction/get
      </td>

      <td style={{ textAlign: "left" }}>
        Transaction
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Add Transaction
      </td>

      <td style={{ textAlign: "left" }}>
        POST
      </td>

      <td style={{ textAlign: "left" }}>
        v1/transaction/add
      </td>

      <td style={{ textAlign: "left" }}>
        *
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Add Transaction with Local Currency
      </td>

      <td style={{ textAlign: "left" }}>
        POST
      </td>

      <td style={{ textAlign: "left" }}>
        v1/transaction/add\_with\_local\_currency
      </td>

      <td style={{ textAlign: "left" }}>
        *
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Update Transaction Details
      </td>

      <td style={{ textAlign: "left" }}>
        POST
      </td>

      <td style={{ textAlign: "left" }}>
        v1/transaction/update
      </td>

      <td style={{ textAlign: "left" }}>
        *
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Get Transaction Details
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v1/transaction/get
      </td>

      <td style={{ textAlign: "left" }}>
        *
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        **Transaction rejection**
      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        getRejectedTransactions
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v2/organization/rejectedTransactions
      </td>

      <td style={{ textAlign: "left" }}>
        Transaction
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        getReTriggerStatus
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v2/organization/rejectedTransactions\
        /retriggerStatus/\{retriggerId}
      </td>

      <td style={{ textAlign: "left" }}>
        *
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        markFailed
      </td>

      <td style={{ textAlign: "left" }}>
        PUT
      </td>

      <td style={{ textAlign: "left" }}>
        v2/organization/\
        rejectedTransactions/markFailed
      </td>

      <td style={{ textAlign: "left" }}>
        *
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        retriggerTransactionAdd
      </td>

      <td style={{ textAlign: "left" }}>
        POST
      </td>

      <td style={{ textAlign: "left" }}>
        v2/organization/\
        rejectedTransactions/retrigger
      </td>

      <td style={{ textAlign: "left" }}>
        *
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        **User authentication**
      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Register User
      </td>

      <td style={{ textAlign: "left" }}>
        POST
      </td>

      <td style={{ textAlign: "left" }}>
        v2/user\_auth/register
      </td>

      <td style={{ textAlign: "left" }}>
        Customer
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Authorize User
      </td>

      <td style={{ textAlign: "left" }}>
        POST
      </td>

      <td style={{ textAlign: "left" }}>
        v2/user\_auth/authorize\_user
      </td>

      <td style={{ textAlign: "left" }}>
        Customer
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Update Password
      </td>

      <td style={{ textAlign: "left" }}>
        POST
      </td>

      <td style={{ textAlign: "left" }}>
        v2/user\_auth/update
      </td>

      <td style={{ textAlign: "left" }}>
        Customer
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        **User group**
      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Add Group
      </td>

      <td style={{ textAlign: "left" }}>
        POST
      </td>

      <td style={{ textAlign: "left" }}>
        v2/userGroup2
      </td>

      <td style={{ textAlign: "left" }}>
        User groups
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Update User Group
      </td>

      <td style={{ textAlign: "left" }}>
        PUT
      </td>

      <td style={{ textAlign: "left" }}>
        v2/userGroup2
      </td>

      <td style={{ textAlign: "left" }}>
        User groups
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Search user groups\
        by name, ID, and\
        mobile number
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v2/userGroup2/search
      </td>

      <td style={{ textAlign: "left" }}>
        User groups
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Delete User Group
      </td>

      <td style={{ textAlign: "left" }}>
        DELETE
      </td>

      <td style={{ textAlign: "left" }}>
        v2/userGroup2
      </td>

      <td style={{ textAlign: "left" }}>
        User groups
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Join Member to Group
      </td>

      <td style={{ textAlign: "left" }}>
        POST
      </td>

      <td style={{ textAlign: "left" }}>
        v2/userGroup2/join
      </td>

      <td style={{ textAlign: "left" }}>
        User groups
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Remove group member
      </td>

      <td style={{ textAlign: "left" }}>
        DELETE
      </td>

      <td style={{ textAlign: "left" }}>
        v2/userGroup2/\{groupId}/leave
      </td>

      <td style={{ textAlign: "left" }}>
        User groups
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Transfer Group Member
      </td>

      <td style={{ textAlign: "left" }}>
        POST
      </td>

      <td style={{ textAlign: "left" }}>
        v2/userGroup2/transfer
      </td>

      <td style={{ textAlign: "left" }}>
        Points
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Get group transactions
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v2/userGroup2/transactions
      </td>

      <td style={{ textAlign: "left" }}>
        User groups
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Retrieve user group members list
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v2/userGroup2
      </td>

      <td style={{ textAlign: "left" }}>
        User groups
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Retrieve user group members\
        list with cards & status details
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v2/userGroup2/members
      </td>

      <td style={{ textAlign: "left" }}>
        User groups
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Retrieve Primary &\
        Secondary Member Details
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v2/userGroup2
      </td>

      <td style={{ textAlign: "left" }}>
        User groups
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Retrieve group slab/tier log history
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v2/userGroup2/slabHistory
      </td>

      <td style={{ textAlign: "left" }}>
        User groups
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Retrieve group ledger information
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v2/pointsLedger  

        /getCustomerLedgerInfo
      </td>

      <td style={{ textAlign: "left" }}>
        Points
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Retrieve points expiry schedule of a group
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v2/userGroup2/pointsExpirySchedule
      </td>

      <td style={{ textAlign: "left" }}>
        User groups
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Retrieve points conversion schedule
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v2/userGroup2/\
        promisedPointsSchedule
      </td>

      <td style={{ textAlign: "left" }}>
        User groups
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        **Users**
      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>

      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Target group
      </td>

      <td style={{ textAlign: "left" }}>
        GET
      </td>

      <td style={{ textAlign: "left" }}>
        v3/users/\{userId}/targetGroups
      </td>

      <td style={{ textAlign: "left" }}>
        *
      </td>
    </tr>
  </tbody>
</Table>