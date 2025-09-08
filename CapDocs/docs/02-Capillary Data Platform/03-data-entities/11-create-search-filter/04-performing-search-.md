---
title: Perform Search
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
You can perform searches using two endpoints, depending on the type of results you need. Both support the same search filters—the difference lies in the metadata they return.

* Use [/api\_gateway/cortex/v1/search](https://docs.capillarytech.com/reference/search-api-cortex-api#/) if you only need matching customer or transaction IDs.
* Use [/v2/search/entity](https://docs.capillarytech.com/reference/perform-search#/) if you want enriched results, including standard, custom, and extended fields. You can use the **copy cURL feature** to use this API.

It is recommended to use the `/v2/search/entity` endpoint for most brand use cases.

## Using the copy cURL feature

After creating a search filter, you can use the Copy cURL feature in the Search Filter UI to copy the Search API cURL, import it into an API testing tool, and run it. The Copy cURL option appears when the search criteria is validated and active.

![350c6a962af0744d570fa8efb9982c8cbae155800d43bb4e022612b532ab901a Copy cURL](https://files.readme.io/350c6a962af0744d570fa8efb9982c8cbae155800d43bb4e022612b532ab901a-Copy_cURL.png)

The following is a sample cURL copied using the Copy Search cURL option for a search filter created for the customer entity with the criteria: firstName or lastName:

```
curl --location 'https://eu.intouch.capillarytech.com/v2/search/entity' \
          --header 'Content-Type: application/json' \
          --header 'X-CAP-API-OAUTH-TOKEN: {{TOKEN}}' \
          --header 'Cookie: _cfuvid={{CFUID}}' \
          --data '{"entityType":"CUSTOMER","searchConditions":[{"fieldId":"firstName","operator":"STARTS_WITH","values":["firstName"]}],"enrichmentFields":{"enrichedFields":["*"],"customFields":["*"],"extendedFields":["*"]}}'

```