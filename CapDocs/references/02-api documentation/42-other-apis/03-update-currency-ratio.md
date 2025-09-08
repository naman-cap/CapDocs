---
title: Update Currency Ratio
excerpt: Lets you add or update currency ratios with respect to Indian Rupee (INR).
api:
  file: v2.json
  operationId: update-currency-ratio
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
To add a new supported currency for an org, follow these steps
*   Navigate to Intouch > Org settings > Org Setup > Org Profile > Click on the Edit button on the top right > Click on Org Profile > Set Org Currency tab > Select the currency which you wan to add from the list on the left and then add it to the right list > Click on submit.
*   Once a new supported currency have been added to an org from the Intouch UI, it takes a **maximum of 1 hour** for that currency's ratio to be updated using the Update Currency Ratio API.
</Note>

## Body Parameters

| Field        | Type   | Required | Description                                           |
| ------------ | ------ | -------- | ----------------------------------------------------- |
| currencyCode | string | Yes      | ISO code of the currency                              |
| ratioInr     | number | Yes      | Ratio of the currency to INR (must be greater than 0) |

```
{
    "ratioInr":65,
    "currencyCode":"SGD"
}
```

## Response Parameters

| Parameter Name  | Type    | Description                             |
| :-------------- | :------ | :-------------------------------------- |
| entity          | Object  | Contains currency conversion details    |
| \- ratioInr     | Float   | Conversion rate to INR                  |
| \- currencyCode | String  | Original currency code (ISO Format)     |
| warnings        | Array   | List of non-critical warnings (if any)  |
| errors          | Array   | List of error messages (if any)         |
| success         | Boolean | Indicates if the request was successful |

```
{
    "entity": {
        "ratioInr": 65.0,
        "currencyCode": "SGD"
    },
    "warnings": [],
    "errors": [],
    "success": true
}
```

<Note title="Note">
To retrieve all updated currency ratios for an organization, use the same endpoint as the Update Currency Ratio API but:

* Change the method from POST → GET
* Set the body type to `none`(GET calls require no request body)
</Note>