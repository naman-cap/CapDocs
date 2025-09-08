---
title: Marvel Rewards
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
Rewards are incentives issued customers from a specific org. Rewards could be in the form of either points and coupons. Again, coupons are categorized into physical and digital vouchers.

* Vouchers: Digital coupons generated against redeeming customer points. For example, redeem 50 points for 10% off coupon.
* Physical voucher: Physical coupons generated against redeeming customer points. For example, redeem 150 points for flat 150 off coupon.
* Free voucher: Digital coupons generated without any points redemption.

Based on the source of issual, rewards are of the following types -

* InTouch only rewards: These are points or coupons created in Capillary and users Capillary APIs.
* Vendor only rewards: These are either points or coupons created at the vendor end. Capillary uses vendor specific APIs directly to identify and issue rewards.
* InTouch + Vendor rewards: These are vendor rewards Vendor rewards with reference created at the Capillary end.

<div class="callout">
  <strong>Info</strong>: The API details mentioned herein are only for your reference. These APIs are exposed by creating Wrapper APIs using our API gateway for an organization on need basis. Postman Collection for the APIs can be requested through Capillary Support during or after onboarding the org.
</div>

## Resource Information

| | |
| -- | --- |
host | APAC: [https://apac-apigateway.capillarytech.com/](https://apac-apigateway.capillarytech.com/)
Authentication | [Customer Authentication](https://docs.capillarytech.com/reference/customer-authentation).

## Status Codes

### Success Codes

Code | Description
------ | ------------
200 | User rewards fetched or issued successfully.

### Error Codes

Code | Description
------ | ------------
8000 | Unable to fetch user reward.
8003 | Unable to issue user reward.
8004 | Unable to issue user reward.
8005 | User reward is disabled for the brand.
8009 | Invalid page or size passed. Page or size should not be zero.
8010 | User reward is partially successful (in case of batch issual).