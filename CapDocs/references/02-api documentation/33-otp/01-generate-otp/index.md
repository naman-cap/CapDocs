---
title: Generate OTP
excerpt: This page provides you with information on generating OTP.
api:
  file: v2.json
  operationId: generate-otp
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
<Callout icon="👍" theme="okay">
  For detailed information about our APIs and for hands-on testing, refer documentation in [API overview](https://docs.capillarytech.com/reference/apioverview) and  step-by-step guide on making your first API call in [Make your first API call](https://docs.capillarytech.com/reference/make-your-first-api-call) .
</Callout>

> 🚧 Warning
>
> Make sure that the OTP template does not have multiple placeholders for the OTP. This can lead to displaying OTP in all placeholders.

This API enables the issuing of validation code (OTP) to the defined communication channel for redeeming points/coupons, and registration.

# Prerequisites

*   Basic or OAuth credentials
*   OTP access group resource with WRITE access
*   Make sure that the template contains a placeholder for OTP and that the appropriate templates are approved.
*   Make sure that you have configured appropriate OTP configurations as required. For more information, refer to the [OTP configuration documentation](https://docs.capillarytech.com/docs/setup-otp-verification-rules).
*   Make sure that the channel gateway configuration is completed. For the configuration, create a JIRA ticket for the gateway team.
*   Make sure that the appropriate OTP template is configured and approved. For more information on the OTP template, refer to the [OTP template documentation](https://docs.capillarytech.com/reference/otp-template-guidelines).

# Resource information

|               |                           |
| :------------ | :------------------------ |
| URI           | /v2/otp/generate          |
| HTTP method   | POST                      |
| Rate limit    | 500 OTP per user in a day |
| Batch support | No                        |
|               |                           |

# OTP template selection hierarchy

First preference - OTP template defined in the API body

Second preference - The default template

Third preference - If no template is configured and the template field is left blank, the system uses the inbuilt Capillary template.

# Request body parameters

<Note title="Note">
s
* If the email template is not specified, the OTP will be sent in the default email template format specified below: `“emailTemplate”:{ “subject”:“Validation Code”, “body”:“Dear Customer, The validation code for your request is: {{ validation_code }}. You will also receive the validation code by SMS on your registered mobile number shortly.” },`
* If SMS template is not specified, the OTP will be sent in the SMS format `"Hi user.Your otp for validation is {{ validation_code }}."`
</Note>

<HTMLBlock>{`
<table style="width: 100%; border-collapse: collapse;">
<thead>
<tr>
  <th style="border: 1px solid #ddd; padding: 8px;">Parameter</th>
  <th style="border: 1px solid #ddd; padding: 8px;">Type</th>
  <th style="border: 1px solid #ddd; padding: 8px;">Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>entityType</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>enum</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Specify MOBILE to identify customer by mobile number or EMAIL to identify customer by email id.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>entityValue</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>String</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Value of the entity</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>action</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>String</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Action performed. COUPON (for coupon redemption), POINTS (for points redemption), REGISTRATION, USERGROUP, SUBSCRIPTION, GENERIC (for other purposes), POINTSTRANSFER, CUSTOMER_STATUS_UPDATE, CUSTOMER_IDENTIFIER_CHANGE, CUSTOMER_ISSUE_LINK_CARD.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>template</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>String</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Defines the message template for sending OTP via SMS. Example: &quot;Hi user. Your OTP for validation is {{ validation_code }}.Enjoy&quot;.<br><strong>Notes:</strong>  </p>
<ul>
<li>Leave the template name blank if you want to use the pre-defined SMS template.<br> If you leave the template name and do not have any pre-defined template, the system will use the default hardcoded template.  </li>
<li>Templates are defined at action-level. Each action can have one template.</li>
</ul>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>whatsappTemplateName</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>String</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Approved WhatsApp template name. This is applicable only to WhatsApp communication.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>zaloTemplateIdentifier</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>String</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>ZALO template identifier</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>emailTemplate</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Object</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Defines the message template for sending OTP via Email.<br><strong>Notes:</strong>  </p>
<ul>
<li>Leave the template details blank if you want to use the pre-defined  Email template.  </li>
<li>If you do not add any template name and do not have any pre-defined template, the system will use the default hardcoded template.</li>
</ul>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>-- subject</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>String</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Email subject (e.g., Validation Code)</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>-- body</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>String</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Email body template (e.g., Dear Customer, The validation code for your request is: {{ validation_code }}. You will also receive the validation code by SMS on your registered mobile number shortly.)</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>channels</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Array</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Array of communication channels</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>--- type</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>String</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Type of channel. The supported channels are EMAIL, SMS, MOBILE or PHONE (phone call), ZALO, and WHATSAPP. The OTPs are sent to the defined channels simultaneously. For example, if you have defined SMS and Email, OTP will be sent to both Email and SMS channel simultaneously.<br><strong>Note:</strong> The channel selected here should match with the channel selected in the (<a href="https://docs.capillarytech.com/docs/setup-otp-verification-rules">OTP configuration</a>).</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>--- value</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>String</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Value for the channel</p>
</td>
</tr>
</tbody>
</table>
`}</HTMLBlock>

```json EMAIL
{
   "entityType":"email",
   "entityValue":"tomsawyer@gmail.com",
   "action":"REGISTRATION",
   "template":"Hi user.Your OTP for validation is {{ validation_code }}.Enjoy",
   "emailTemplate":{
      "subject":"Validation Code",
      "body":"Dear Customer, The validation code for your request is: {{ validation_code }}. You will also receive the validation code by SMS on your registered mobile number shortly."
   },
   "channels":[
      {
         "type":"SMS",
         "value":"9955882233"
      },
      {
         "type":"EMAIL",
         "value":"tomsawyer@gmail.com"
      },
      {
         "type":"PHONE",
         "value":"9955882233"
      }
   ]
}

```
```json WHATSAPP

{
  "entityType": "mobile",
  "entityValue": "919986000581",
  "action": "POINTS",
   "whatsappTemplateName": "test_temp2",
  "channels": [
    {
      "type": "whatsapp",
      "value": "919986000586"
    }
    
  ]
}

```
```json SMS
{
   "entityType":"MOBILE",
   "entityValue":"911234567896",
   "action":"POINTSTRANSFER",
   "template":"Hi user.Your OTP for validation is {{ validation_code }}.Enjoy",
   "channels":[
      {
         "type":"SMS",
         "value":"911234567896"
      },
      {
         "type":"PHONE",
         "value":"911234567896"
      }
```

# Response

| Parameter | Type | Description                                  |
| :-------- | :--- | :------------------------------------------- |
| createdId | long | Unique ID generated for the current request. |

```json
{
    "createdId": 10,
    "warnings": []
}
```

<Note title="Note">
If the OTPs are regenerated within the OTP expiry limit, the same OTP is generated again, and the createdId value appears as 1.
</Note>

# Error codes

<HTMLBlock>{`
<table style="width: 100%; border-collapse: collapse;">
<thead>
<tr>
  <th style="border: 1px solid #ddd; padding: 8px;">Error code</th>
  <th style="border: 1px solid #ddd; padding: 8px;">Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>607 Mandatory template name not passed for<br> whatsapp type channel</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>If whatsapp as a channel is provided in payload, make sure that whatsappTemplateName parameter is added</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>621 Zalo template identifier cannot be empty</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>If zalo as a channel is provided in payload, make sure that parameter zaloTemplateIdentifier is added</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>8056 Invalid mobile</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Enter valid mobile number</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>608 Something went wrong while fetching otp template</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Make sure that OTP templates are configured and approved</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>Gateway error</p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>The Gateway configuration is not completed. Contact the Gateway team for the configuration.</p>
</td>
</tr>
</tbody>
</table>
`}</HTMLBlock>