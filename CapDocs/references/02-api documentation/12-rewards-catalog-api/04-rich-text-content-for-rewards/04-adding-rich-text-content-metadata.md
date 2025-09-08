---
title: Adding Rich Text Content field for Reward
excerpt: ''
api:
  file: organization.json
  operationId: adding-rich-text-content-metadata
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
You can use the languageSpecificInfo object in “Create Reward API”  to include rich text content metadata in a reward. The `content` field can contain HTML-formatted text, and the `isEnabled` field indicates whether the rich text content is active.

# Prerequisites

*   Create Rich Text Content Metadata using [Create Rich Text Content Meta Data Against Reward](https://docs.capillarytech.com/reference/create-rich-content-meta)
*   Ensure that the rich text content is active by setting the isEnabled field to true. If it is not set, you can update it through [Update Rich Text Content Metadata Against Reward.](https://docs.capillarytech.com/reference/update-rich-content)

## Use Case

### Requirement

Suppose a brand wants to include reward-related terms and conditions within the reward itself and these details should support plain HTML, enabling the use of headings, lists, line breaks, and other basic tags to ensure the content is well-structured, readable, and visually consistent across platforms.

### Solution

To achieve this you can create terms and condition rich text using [Create Rich Text](https://docs.capillarytech.com/reference/create-rich-content-meta) and link the same during the [Creation of Reward](https://docs.capillarytech.com/reference/post-create-reward).

### **Adding Rich Text Content to Reward**

Use the `languageSpecificInfo` section of the [reward creation API](https://docs.capillarytech.com/reference/post-create-reward) to map rich text content to specific languages.

```Text With single Language Block
{
    "name": "Golden2",
    "description": "testreward1",
    "startTime": "2025-09-26T20:00:00Z",
    "endTime": "2026-10-31T11:59:30Z",
    "type": "VOUCHER",
    "brandId": "61",
    "enabled": true,
    "intouchPoints": 500,
    "categories": 229,
    "redemptionType": "INTOUCH_REWARD",
    "intouchSeriesId": "301233",
    "geography": [],
    "languageSpecificInfo": [
        {
            "languageCode": "en",
            "name": "jogoldnamechange check",
            "description": "testreward1",
            "enabled": true,
            "cardSeries": 123,
            "richContentRO": {
                "terms&conditions": {
                    "content": "RC2_desc",
                    "isEnabled": true
                }
            }
        }
    ],
    "isactive": true
}{
    "name": "Golden3",
    "description": "testreward1",
    "startTime": "2025-09-26T20:00:00Z",
    "endTime": "2026-10-31T11:59:30Z",
    "type": "VOUCHER",
    "brandId": "61",
    "enabled": true,
    "intouchPoints": 500,
    "categories": 229,
    "redemptionType": "INTOUCH_REWARD",
    "intouchSeriesId": "301233",
    "geography": [],
    "languageSpecificInfo": [
        {
            "languageCode": "en",
            "name": "jogoldnamechange check",
            "description": "testreward1",
            "enabled": true,
            "cardSeries": 123,
            "richContentRO": {
                "terms&conditions-2": {
                    "content": "RC2_desc",
                    "isEnabled": true
                }
            }
        }
    ],
    "isactive": true
}
```
```json With Multiple Language Block
{
    "name": "rewardname",
    "description": "testreward1",
    "startTime": "2025-09-26T20:00:00Z",
    "endTime": "2026-10-31T11:59:30Z",
    "type": "VOUCHER",
    "brandId": "61",
    "enabled": true,
    "intouchPoints": 500,
    "categories": 229,
    "redemptionType": "INTOUCH_REWARD",
    "intouchSeriesId": "301233",
    "geography": [],
    "languageSpecificInfo": [
        {
            "languageCode": "en",
            "name": "rewardname",
            "description": "testreward1",
            "enabled": true,
            "cardSeries": 123,
            "richContentRO": {
                "termsAndConditionsenglish": {
                    "content": "<h1>Terms and Conditions</h1><p>These are the terms and conditions...</p>",
                    "isEnabled": true
                }
            }
        },
        {
            "languageCode": "fr",
            "name": "rewardname",
            "description": "testreward1",
            "enabled": true,
            "cardSeries": 123,
            "richContentRO": {
                "termsAndConditionsfrench": {
                    "content": "<h1>Conditions Générales</h1><p>Voici les conditions générales...</p>",
                    "isEnabled": true
                }
            }
        }
    ]
}
```

# Request Body Parameters

<Table align={["left","left","left"]}>
  <thead>
    <tr>
      <th>
        Parameter Name
      </th>

      <th>
        Data Type
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        `languageSpecificInfo.richContentRO`\*
      </td>

      <td>
        Object
      </td>

      <td>
        The rich content object for the reward.
      </td>
    </tr>

    <tr>
      <td>
        `richContentRO.content`\*
      </td>

      <td>
        String
      </td>

      <td>
        The HTML-formatted rich text content.
      </td>
    </tr>

    <tr>
      <td>
        `richContentRO.isEnabled`\*
      </td>

      <td>
        Boolean
      </td>

      <td>
        Indicates whether the rich text content is enabled for the specific reward. Supported Values: `true` or `false`
      </td>
    </tr>

    <tr>
      <td>
        `defaultValue`
      </td>

      <td>
        String
      </td>

      <td>
        The default value is shown when rich text content is unavailable for a specific reward.  

        * **Required**: Only if `isMandatory` is set to `true`.
        * **Optional**: If `isMandatory` is false.
        * **Max Length**: 50,000 characters.
      </td>
    </tr>
  </tbody>
</Table>

<br />

## Error Handling

| HTTP Status Code                                           | Resolution                                                                   |
| ---------------------------------------------------------- | ---------------------------------------------------------------------------- |
| 400 - Invalid request parameters.                          | Ensure all required parameters are included in the request body.             |
| 400 - value is not one of declared Enum                    | Ensure provided Enum field matches one of the supported values.              |
| 400 - `defaultValue` is required when isMandatory is true. | Ensure `defaultValue` is not set to null, when `isMandatory` is set to true. |
| 500 - Internal server error.                               | Retry the request after a short delay. The issue may be temporary.           |
