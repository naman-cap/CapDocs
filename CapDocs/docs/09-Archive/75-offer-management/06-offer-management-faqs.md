---
title: Offer Management FAQs
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
### Can we have more than one series per offer?

Currently, our system supports only one series per offer. However, we have taken this as a feature request.

### Does the system support 100 % as discount value?

Currently, the system accepts only 2 digit values (supporting up to 99%). But considering some special cases we came across yesterday, we will get this to 100%.

### Can I tag customers to auto-generated coupon codes?

Yes, you can enable Issue to specific customers only in Coupons details and upload your customer list with any one of their identifiers (mobile no./email id, external id, user id). The auto-generated coupons are then tagged only to these customers.

### Can I configure the WeChat template for resending the coupon templates through POS?

Currently, we support only the SMS template.

### How can I see no. of uploaded coupons?

When you upload coupons, you will see the uploaded count. We will also make this available on the dashboard page.

### Can we change the discount once created?

Currently, you can change the discount value or discount type of an existing offer. However, we are still evaluating this feature.

### How can I get the series id of a coupon through coupon/issue API?

You can get the series id through an API call. You can use series id, and Point of Sale (POS) identifier to consume an offer through API call.

### What happens if the expiry date of an offer is after the campaign expiry date?

After the expiry date of a campaign, the offer is still valid but in campaign reporting, you will get details only till the campaign end date.

### What if my coupon expiry is after my Offer expiry?

If expiry of series is 31st aug and coupon code expiry is set as 3 days from issual. Now someone got the coupon on 31st aug, then they can use it till 3rd sept.

### Do we have test vs. control in Loyalty?

No. We do not have a test vs. control check for the loyalty program.

### Do we need to reconfigure the loyalty program if we make any change in the Offers tab of Loyalty?

No, it is not required to reconfigure the loyalty program.

### Will there be any change in the isRedeemable get call nodes?

We will add an additional node - Max Discount. Rest everything will remain the same.

### Can we have the same offer names?

Yes, you can have duplicate offer names. But, it is highly recommended not to keep duplicate names, at least within a module.
