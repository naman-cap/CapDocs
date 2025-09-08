---
title: 'Add Customer '
api:
  file: Add_CustomerV2.yaml
  operationId: postV2customers
hidden: true
---
This API lets you register customers in the organization or register only their identifiers across sources such as in-store, Facebook, Webengage, WeChat, Martjack, TMall, Taobao, JD, e-commerce, Line, website, and mobile app. You can also add customer-level extended and custom field details. The API allows you to issue loyalty cards to customers.

## Example request

```json Example request
curl --request POST \
     --url https://eu.api.capillarytech.com/v2/customers \
     --header 'accept: application/json' \
     --header 'content-type: application/json' \
     --data '
{
  "profiles": [
    {
      "firstName": "Customer_add_23",
      "lastName": "Test123",
      "identifiers": [
        {
          "type": "mobile",
          "value": "919988221100"
        },
        {
          "type": "email",
          "value": "tom.sawyer@capillarytech.com"
        },
        {
          "type": "cardnumber",
          "value": "12345678",
          "seriesId": 73,
          "statusLabel": "ACTIVE",
          "extendedFields": {
            "custom_card_name": "Mystays"
          }
        }
      ],
      "commChannels": [
        {
          "type": "mobile",
          "value": "8795772141",
          "primary": "true",
          "verified": "true",
          "meta": {
            "residence": "true"
          }
        },
        {
          "type": "email",
          "value": "tom.sawyer@capillarytech.com",
          "primary": "true",
          "verified": "true",
          "meta": {
            "residence": "true"
          }
        }
      ],
      "fields": {
        "employee": "true",
        "dateofbirth": "22-10-2000"
      },
      "source": "INSTORE"
    }
  ],
  "extendedFields": {
    "acquisition_channel": "Facebook"
  },
  "referralCode": "",
  "statusLabel": "active-1"
}
'
```

## Pre-requisites

* Authentication: Basic or OAuth authentication details
* Access group resource: Write access to customer group resource.
* Different sources (FACEBOOK, WEB_ENGAGE, WECHAT, INSTORE, MARTJACK, TMALL, TAOBAO, JD, ECOMMERCE, WEBSITE, LINE) as supported by your organization.
* Account IDs in which you want to register customers (for sources with multiple accounts such as WeChat, Line and Facebook).
* [Set default customer status ](https://docs.capillarytech.com/docs/setup_customer#managing-customer-lifecycle-with-customer-status)label for your organization.

## Rate limit

<br />

<br />

## Header information

<br />

<br />

## Example response

```json Sample response
{
  "createdId": 84230120,
  "warnings": [],
  "sideEffects": [
    {
      "entityType": "USER",
      "rawAwardedPoints": 100,
      "awardedPoints": 100,
      "type": "points"
    }
  ]
}
```

## Response parameters

| Field            | Type | Description |
| :--------------- | :--- | :---------- |
| createdId        |      |             |
| warnings         |      |             |
| sideEffects      |      |             |
| entityType       |      |             |
| rawAwardedPoints |      |             |
| awardedPoints    |      |             |
| type             |      |             |

## Error codes

| Code | Description                                                                                                                                                                |
| :--- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 500  | All requests have failed due to errors. Invalid or unsupported inputs passed.                                                                                              |
| 1007 | Error in customer registration: No Valid Mobile Number or External ID or Email provided required for registration. No valid mobile number, external ID, or email provided. |

## Additional notes

The API functions as follows -

* If you try registering an identifier that exists in a different source, a new source account is added to the existing account. Details of each source account will be maintained separately.

* In a source account, identifiers should be unique - no two customers can have the same identifier.

* You cannot update existing customer details with this API. To update customer details, use the customer update API; to update identifiers, use the Update Identifier API.

**Notes:**

* Hovering over the profile picture on the Member Care home page shows the customer's account ID.

* The last part of the URL containing numbers represents the customer ID, or ID. The system generates this internal ID when it registers the customer. For example, the URL https://\{host}/member-care/ui/customer/177217505, 177217505 is the ID or the customer ID.

* The mandatory attributes for customer registration are determined by the configurations set in **Organization Settings** > **Miscellaneous **> **Registration Configuration**. Be sure to check your organization's configurations before using this API. For more details, refer to [Setup Customer](https://docs.capillarytech.com/docs/setup_customer).

* [Extended fields](https://docs.capillarytech.com/docs/data-entities#extended-fields-1) are mapped to vertical IDs, which are then mapped to organization IDs.
