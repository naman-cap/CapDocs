---
title: FAQs
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
## Messages

**Q1: Can delivery status be tracked for bulk SMS?**

A: Delivery statuses for Promotional SMS (messages sent from Numeric Sender IDs) are not shared by Gateway Partners. Because of this, these statuses are not used to calculate any metrics in Message Performance. As a result the delivery Rate may appear lower than expected, or even show 0% for promotional messages or messages sent with numeric sender IDs. For more details, click [here](https://economictimes.indiatimes.com/industry/telecom/telecom-news/telcos-stop-issuing-delivery-reports-on-bulk-smses-companies-fret/articleshow/78680111.cms?from=mdr).

**Q2: Is it allowed to send messages to NDNC customers using a template that contains an opt-out tag?**

A: Reaching out to NDNC customers is directly handled by telecom operators such as Airtel, Vodafone, and Jio. Customers register for NDNC with these operators and may also set additional preferences, such as allowing communication only on specific days or during certain time periods. These details are not visible to Capillary, the gateway partner, or the brand. Therefore, adding or not adding an opt-out tag in the template is irrelevant for NDNC. The entire customer list can be shared with the operators, and they will filter out NDNC numbers based on customer preferences.

**Q3: How should spacing issues in`{#Var}` fields be handled when working with DLT templates in Excel with screen reader support enabled?**

A: Spacing issues in `{#Var}` fields cannot be controlled with static text. If an extra space appears within the `{#Var}` field, or immediately before or after it, the space will be counted as a character. To avoid such issues, it is recommended to upload the Excel file downloaded directly from the DLT portal into Engage+. Copy-pasting templates into Excel or manually creating the DLT template upload file is not advisable, as errors may occur not only in the template content but also in the template ID and other fields. The recommended approach of uploading the DLT-downloaded Excel is also supported with screen reader accessibility.

**Q4: How can NDNC users be targeted?**

A: NDNC targeting is managed through the operator and DLT process. For example, if Person1 is an NDNC customer, no brand can reach out to them because the DND status is registered with the operator. However, if Brand A has collected Person1’s explicit consent for service or promotional messages (via microsite signup, missed call, consent form, etc.), then Brand A can upload Person1’s details (name and phone number) into the “consent customer details” section on DLT. This consent record overrides the DND status for that specific brand and remains valid for six months, after which it must be refreshed. During this period, DLT will allow messages from Brand A only, while Person1 will continue to remain DND for all other brands. This process is fully compatible with screen reader support.

**Q5: If a customer has opted for DND and a single SMS campaign is sent to both DND and non-DND users, will the SMS still be triggered?**

A: Yes. The SMS will be triggered but will fail at delivery for customers who are registered under DND.

**Q6: Do SMS charges apply even if the message fails to deliver?**

A: Yes, we charge the same amount to Orgs (Gateway or operators have the same charge for delivered or non delivered).

**Q7: How to identify the number of customers who failed to receive an SMS?**

A: You will know the count from the delivery rate.

**Q8: How accurate are the delivery rates displayed on campaign pages?**

A: Delivery rates shown on campaigns are accurate. We are also doing product enhancement to tell reasons for non delivery -should be live in next 1 month. Delivery rates for Promotional messages (numeric sender id) will be unknown as these are not shared by gateway partners after DLT regulation.

**Q9: If a client does not want to target customers who have not opted in for SMS, is there a provision to exclude them? Are such customer details available from telecom operators?**

A: DND operates at the category/industry level, not at the brand level. For example, a customer may be on the NDNC list for the retail category, but not specifically for Brand X. Currently, DND status is identified through the delivery report (DLR), which indicates that a customer is DND only after an attempted message has failed. There is no proactive system or public data available that allows a Capillary brand to know in advance which customers are on the DND list. We are exploring a potential enhancement to create a reactive system that would update a customer’s profile with DND status once the DLR is received. However, even in this case, the first message attempt would still need to be triggered, and this enhancement is not yet confirmed it depends on the volume of related support requests.

**Q10: How can DND users opt out if no opt-out tag is sent to them? Could this result in complaints and impact customer service?**

A: Capillary cannot modify the template registered for the organization in DLT. However, if the marketer has created a template with a `#var` field where the opt-out text can be added, it can be included through the Creative Labels section, as done previously.

**Q11: Is it possible to directly sync templates from the DLT portal without uploading them to Engage+?**

A: The respective APIs are not provided by the DLT portals and hence you cannot access these templates from the portal directly as of now.

**Q12: Is there an expiry period associated with an approved template?**

A: Yes, an approved template remains valid for 3 years from the date of approval. However, both the DLT portal and Engage+ allow templates to be deleted before this period if required.

**Q13: Does a template get overridden based on its name?**

A: No, the template override is based on the template ID which is the unique ID. If the template name is same, you will be asked to change it to make the search easier.

**Q14: Why is the CSV file limited to 500 rows?**

A: The 500-row limit per CSV file is in place to ensure a real-time experience for the user and to reduce system load, as uploads are processed in real time. If more rows need to be uploaded, such as 1,000 rows, the user can simply split the data across multiple CSV files of 500 rows each. There is no restriction on the number of CSV files that can be uploaded.

**Q15: Will SMS delivery be affected if templates that were active at the time of upload are now inactive?**

A: Yes. If a template’s status is inactive, the operator won’t broadcast the SMS, even if it was active during upload. This will affect delivery.

**Q16: Is it possible to pause a recurring campaign for a specific period and resume it later?**

A: You can stop a recurring campaign and re-enable it by selecting the campaign message, editing it, and sending it for approval. This must be done within the campaign’s defined duration. For details, see  the <Anchor label=" recurring campaign" target="_blank" href="https://docs.capillarytech.com/docs/recurring-campaign#/managing-a-recurring-campaign"> recurring campaign</Anchor> documentation.

**Q17: Is it possible to delete an existing audience list?**

A: No. You can’t delete an audience list once it’s created because it may already be linked to an active or past campaign. This ensures campaign data remains consistent.

**Q18: What happens if a campaign fails due to an error? Can I roll it back to maintain data integrity?**

A: ﬁThe system doesn’t support rolling back campaigns. If a campaign error occurs, you’ll receive an email notification. In that case, contact your POC to set up a new campaign and ensure data integrity.

## Offer

Can we have more than one series per offer?\
Currently, our system supports only one series per offer. However, we have taken this as a feature request.

Does the system support 100 % as discount value?\
Currently, the system accepts only 2 digit values (supporting up to 99%). But considering some special cases we came across yesterday, we will get this to 100%.

Can I tag customers to auto-generated coupon codes?\
Yes, you can enable Issue to specific customers only in Coupons details and upload your customer list with any one of their identifiers (mobile no./email id, external id, user id). The auto-generated coupons are then tagged only to these customers.

Can I configure the WeChat template for resending the coupon templates through POS?\
Currently, we support only the SMS template.

How can I see no. of uploaded coupons?\
When you upload coupons, you will see the uploaded count. We will also make this available on the dashboard page.

Can we change the discount once created?\
Currently, you can change the discount value or discount type of an existing offer. However, we are still evaluating this feature.

How can I get the series id of a coupon through coupon/issue API?\
You can get the series id through an API call. You can use series id, and Point of Sale (POS) identifier to consume an offer through API call.

What happens if the expiry date of an offer is after the campaign expiry date?\
After the expiry date of a campaign, the offer is still valid but in campaign reporting, you will get details only till the campaign end date.

What if my coupon expiry is after my Offer expiry?\
The expiry of a specific offer coupon cannot go beyond the Offer expiry. Hence, irrespective of the expiry set for the coupons, the validity expires along with the associated offer.

Do we have test vs. control in Loyalty?\
No. We do not have a test vs. control check for the loyalty program.

Do we need to reconfigure the loyalty program if we make any change in the Offers tab of Loyalty?\
No, it is not required to reconfigure the loyalty program.

Will there be any change in the isRedeemable get call nodes?\
We will add an additional node - Max Discount. Rest everything will remain the same.

Can we have the same offer names?\
Yes, you can have duplicate offer names. But, it is highly recommended not to keep duplicate names, at least within a module.

## DLT

Does DLT templates stored in Capillary allow special characters and regional language text?

* Special Characters and Regional language are allowed even in Capillary templates. These need to be less than 30 characters if added in place of \{\{#var}} or it can be part of the static text approved from DLT. The 'Allow unicode characters' feature takes care of this. It is turned on by default. Screen reader support enabled.

How will a brand be onboarded for DLT compliance from an Engineering perspective?

For a detailed answer, click on this [link](https://capillarytech.atlassian.net/wiki/spaces/CAM/pages/3172040747/Brand+Onboarding+Notes).

Can we reach out to NDNC customers with a template with optout tag?

* Reaching out to NDNC customers is directly handled by Telecom Operators - Airtel, Vodafone, Jio etc. The customers directly apply for NDNC to these operators. There are some extra settings, for example, customer can apply for NDNC but can wish to be reached out on certain days or time period. All this will be unknown to Capillary Gateway Partner Brand. So adding optout tag or not adding is irrelevant for NDNC. We can send entire customer list to operators and they can filter NDNC by their own. Screen reader support enabled.

***In general, users copy and paste the templates from vendor portal to excel where space issues may occur. How to handle this?***

* We cannot handle space issues with static text. If space in coming in \{#Var} field or just before it or after, it will be taken as 1 character. It is advisable that the excel downloaded from DLT portal is uploaded directly to Engage+. Copy pasting templates in excel or manual creation of DLT template upload excel is not advisable as error can occur not only in the template content but also other properties like template ID.

How can we target NDNC users?

* NDNC targeting can happen in the following way now. Suppose, Person1 is an NDNC customer. No brands can reach out to Person1 and this will be handled directly by operators as Person1 would have applied for DND with operators. But Brand A collected Person1 consent against service explicit or promotional messages. Consent can be collected through microsite signup missed call or manual signing consent form etc. Then, Brand A will upload Person1's name and Phone number in 'consent customer details' to DLT. This list will overwrite the DND status DLT has for Person1 and is valid only for 6 months. Consent need to be refreshed after 6 months. DLT will then send messages from Brand A only (for rest brands it remain DND).

Is the order of column header names the same for all the DLT service providers?

* No, the header names and column order can differ with different DLT providers. However, Engage+ understands which header name means what and hence the order does not really matter. Even the header names can vary from portal to portal (say, Template ID can be Temp ID for some service providers), but all such the cases will be handled by the product itself.

I am not able to see sender IDs in the Delivery settings section even after sharing the sender IDs with the Gateway team?

* Capillary has enabled DLT compliance with three gateways namely Kaleyra, ICS, and Karix. If the Org is integrated with any other gateway the DLT feature will not work for that Org.

Does Capillary stored DLT templates allow special characters and Regional Language text?

* Special Characters and Regional language are allowed even in Capillary templates. These need to be less than 30 character if added in place of \{\{#var}} or it can be part of the static text approved from DLT. The 'Allow Unicode characters' feature takes care of this. It is turned on by default is on. Screen reader support enabled.

Is the optout tag mandatory for DLT messages?

* Optout tag is not mandatory. If a brand wants to add it they need to add a #var in the content while getting it registered in DLT portal.

## Cart Promotions

What is the locking duration if the system doesn't receive any transaction/add?

* Brands can set up the duration for lock expiry. Config is provided in the strategy API. API to release these locked promotions is also provided in case where the auto-lock fails or we don't get the txnAdd or cancel cart call. Please refer to the [documentation](https://capillarytech.atlassian.net/wiki/spaces/LOYAL/pages/3591962726/API+Details) for these APIs.

How payment promotion shall work if evaluation APIs are being consumed twice once during the cart promotion and another during the payment promotions for the same transaction?

* If a previous cart evaluationID is passed in the evaluate call then we release the previously locked promotions and re-evaluate this second cart with added payment modes. If the evaluationID is already cancelled or processed via txnAdd, then we throw an error.

Will it be compulsory for integration to call for a release of the lock?

* There are 3 scenarios here,

1. The customer checks out i.e makes the payment - The cart is converted to a transaction after payment. The temp redemptions are marked as permanent.
2. The cart is canceled - In that case, temp redemption is reversed i.e. release the lock on the promotions
3. For some reason above does not happen in that case, the promotion will either get released based on default unlock duration set in strategy or you can use the cancel cart api to release them.