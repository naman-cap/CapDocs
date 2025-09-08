---
title: Setup OTP Verification Rules
excerpt: This page provides you with information on OTP configurations.
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
To configure rules for OTP, perform the following:

1. Navigate to **Organisation settings > Organisation setup > OTP configurations**.

2. Select the **Time Hashed random OTP code generation** checkbox to enable time-hashed random OTP generation.

3. In the **Set OTP code length** textbox, enter the required OTP length. The maximum length allowed is 50 characters.

4. In the **OTP Code validity period** text box, enter the OTP code validity in minutes. 

5. Select the **Set OTP code expiration time in minutes** checkbox to enable the system to check for only recently generated OTP codes. Otherwise, it checks for any of the unexpired OTP codes.

6. Select the  **Mask the otp, access based** checkbox to mask the OTPs. For more information, refer to the section [Masking OTPs](https://docs.capillarytech.com/docs/setup-otp-verification-rules#masking-otps).

7. From the **OTP Code type**	 drop-down, select the OTP code type. The available options are numeric and Alphanumeric.

8. Select the **Authorize redemptions with missed call** to enable authorization of the OTP through a missed call from the number on which the OTP was received.

9. From the **Communicate OTP via** drop-down, select the channel through which the OTP needs to be sent.\
   The platform permits the sending of OTPs based on the channels selected. For instance, if an attempt is made to send an OTP via the Zalo channel while the configuration specifies only "SMS," the OTP will not be sent.\
   The available options are:
   1. Email
   2. SMS
   3. Whatsapp
   4. ZALO
   5. Both Email and SMS
   6. Both Email and WHATSAPP
   7. Both Email and ZALO
   8. Both SMS and WHATSAPP
   9. Both SMS and ZALO
   10. Email if available, else SMS
   11. Email if available, else WHATSAPP
   12. Email, WHATSAPP, and SMS
   13. Email, WHATSAPP, and ZALO

10. Click **Submit**.

# Masking OTPS

When enabled, OTPs will be hidden in the following GET API calls:

* [v1.1/customer/interactions](https://docs.capillarytech.com/reference/get-customer-interactions)
* v2/customers/interactions

![feaf34a SMS](https://files.readme.io/feaf34a-SMS.png)

Simultaneously, you can configure it to allow users with specific access privileges to access and view the OTPs. In such cases, the system uses an internal API, `v2/internal/customers/interactions`.
