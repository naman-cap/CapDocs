---
title: Frequently Asked Questions
deprecated: false
hidden: false
metadata:
  robots: index
---
1. ### What happens if the data transformation fails during [Audience Synchronization](https://docs.capillarytech.com/docs/line-overview#terms-and-abbreviations)?
   A failed transformation can delay audience updates on InTouch. Monitor the process promptly to ensure timely synchronization.
2. ### Are there any rate limits on the LINE Message API, and how should limits be managed?
   Yes, the API has rate limits. Exceeding them can block requests. For more information, check the [rate limit guidelines](https://developers.line.biz/en/docs/messaging-api/development-guidelines/) on the LINE developer platform.
3. ### What should be done if LINE user registration fails on InTouch?
   Check logs for errors, verify details, and review webhook and integration settings. Reconfigure if necessary.
4. ### What are the best practices for configuring Gateway Weight, and how can it be adjusted?
   Set the Gateway Weight based on target your audience and volume. You can adjust it dynamically based on campaign performance.
5. ### How are message templates managed in Capillary, and can they be reused?
   Templates are managed within the Capillary Intouch portal under the [Creatives section ](https://docs.capillarytech.com/docs/create-line-template)and can be reused across multiple campaigns.
6. ### Can multiple LINE source accounts be configured on InTouch? If so, how are they managed?
   Yes, you can configure multiple LINE accounts in InTouch. Manage them individually under Channel Configurations. Refer to the [Setting Up a LINE Source Account](https://docs.capillarytech.com/docs/line-configuration#setting-up-a-line-source-account-on-intouch) section for more details.
7. ### What steps should be taken if the integration fails due to incorrect Channel ID or Secret Keys
   Verify and re-enter the correct Channel ID and Secret Keys from the LINE Developer Platform in InTouch.