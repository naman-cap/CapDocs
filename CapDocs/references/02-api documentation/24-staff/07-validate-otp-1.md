---
title: Validate OTP
excerpt: >-
  Lets admin users validate OTP sent to the staff’s registered mobile number or
  email id through the `staff/sendOtp` API.
api:
  file: v2.json
  operationId: validate-otp-1
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
<Note title="Note">
You need to pass either `email` or `mobile` on which the customer received the OTP.
</Note>