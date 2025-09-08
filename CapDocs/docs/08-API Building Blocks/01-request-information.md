---
title: Request Information
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
A host is the server to which the API calls are made, usually the API cluster URL. 

The host URLs are same for both  v1.1, v2 and v3 APIs. However, the v1 APIs mentioned in the documentation have different URLs for each entity. You can see those URLs under the respective section.  

## Host URLs for v1.1, v2 and v3 APIs

| Cluster   | Host URL                                                                                                                                                |
| :-------- | :------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **India** | [https://apac.api.capillarytech.com](https://apac.api.capillarytech.com)                                                                                |
| **APAC2** | [https://apac2.api.capillarytech.com](https://apac2.api.capillarytech.com)                                                                              |
| **EU**    | [https://eu.api.capillarytech.com](https://eu.api.capillarytech.com)                                                                                    |
| **US**    | [https://us.api.capillarytech.com](https://us.api.capillarytech.com)                                                                                    |
| **China** | [https://cdn-api.capillarytech.cn.com](https://cdn-api.capillarytech.cn.com) \[or] [https://api.capillarytech.cn.com](https://api.capillarytech.cn.com) |

## Request Headers

<Table align={["left","left","left"]}>
  <thead>
    <tr>
      <th>
        Header
      </th>

      <th>
        Description
      </th>

      <th>
        Value
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Accept
      </td>

      <td>
        Request format from the server side
      </td>

      <td>
        `application/json` for JSON format  

        application/xml for XML format
      </td>
    </tr>

    <tr>
      <td>
        Content-Type
      </td>

      <td>
        Representation of data at the client side.
      </td>

      <td>
        `application/json` for JSON format  

        `application/xml` for XML format
      </td>
    </tr>

    <tr>
      <td>
        User-Agent
      </td>

      <td>
        A characteristic string that lets servers and network peers identify the application, operating system, vendor, and/or version of the requesting user agent.
      </td>

      <td>
        Format \{product} / \{product-version} \{comment}  

        Example: User-Agent: Mozilla/\{version} (\{system-information}) \{platform} (\{platform-details})\
        \{extensions}
      </td>
    </tr>

    <tr>
      <td>
        CAP-API-ACCESS-TOKEN
      </td>

      <td>
        Unique access token generated with the Key and Secret combination. Applicable for OAuth based authentication.
      </td>

      <td>
        Generated `token` value.
      </td>
    </tr>

    <tr>
      <td>
        X-CAP-API-ATTRIBUTION-ENTITY-TYPE
      </td>

      <td>
        Till or store from which you want to post the data.
      </td>

      <td>
        `TILL`, `STORE_CODE`, `STORE_NAME`, `STORE_EXTERNAL_ID`, `STORE_EXTERNAL_ID_1`, `STORE_EXTERNAL_ID_2`.  

        The default value is `TILL`.
      </td>
    </tr>

    <tr>
      <td>
        X-CAP-API-ATTRIBUTION-ENTITY-CODE
      </td>

      <td>
        Value of the specified entity type.
      </td>

      <td>
        Example:  If `X-CAP-API-ATTRIBUTION-ENTITY-TYPE` is `STORE_CODE`, then `X-CAP-API-ATTRIBUTION-ENTITY-CODE` is the store code that you want to tag to POST data.  

        By default, it considers the Till associated with the client key and secret.
      </td>
    </tr>

    <tr>
      <td>
        X-CAP-API-ATTRIBUTION-LOOKUP-TYPE:\{name}  

        X-CAP-API-ATTRIBUTION-LOOKUP:\{value}
      </td>

      <td>
        * \*Supported only for v2 APIs\*\*:  

        Lets you submit requests on behalf of other TILLs (active TILLs). In db the combination of attribution\_lookup and lookup\_code are mapped to TILL ids and org ids. When a new POST request is placed with the combination of a lookup name and lookup code, the data will be inserted in the db on behalf of the TILL that is mapped to the specified combination.
      </td>

      <td>

      </td>
    </tr>
  </tbody>
</Table>

## Rate Limit

It is the limit configured in the backend to cap the number of API calls per minute. This reduces the load on servers and stop certain fraud activities. 

We have different rate limit for each API and it varies based on the region. You can see the rate the rate limit for an API in the respective section.
