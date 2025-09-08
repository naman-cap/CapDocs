---
title: Authentication settings
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
Auth Engine is a platform that provides end-users authentication to an org's frontend mobile apps and websites. Orgs can also use Auth Engine to allow customers to access their data. To enable such access, there is a wrapper layer for Capillary APIs called mobile APIs. Orgs can use Auth Engine to enhance the experience of customers using mobile apps or web apps. For example, view transaction history, view rewards earned, play games, and exchange points with rewards.

Capillary supports two types of authentication - 

1. Password-based authentication and 
2. OTP-based authentication.

In addition to these, Auth Engine also supports 2-factor authentication. To use this feature, configs for Multi-factor authentication (MFA) need to be enabled for the org in Auth Engine. The auth engine also has provision to control the MFA at the mobile/web app API endpoint level.  The mobile/web app will be able to request a second-factor access token only by passing the initially acquired access token (generated during first-factor Authentication). Different MFA combinations supported in Auth Engine (1F - 2F):

1. OTP – OTP 
2. OTP – Password
3. Password - OTP
4. Password - Password

Eg: for an MFA combination can be:

1st Factor authentication: Mobile No. + OTP Validation

2nd-factor authentication: Email Id + Password Validation

> 📘
>
> Password-based login for an org needs to be enabled from the backend. To enable a password for an org, you need to create a ticket and assign it to the platforms team.

The following are the different processes of generating access tokens depending on the application type and password enabled/disabled 

#### Case 1. Steps to generate a token for mobile apps (OTP based authentication)

* Generate a token using the `token/generate` API. You will get `sessionId` (valid for 15 minutes).
* Using `sessionId`, generate an OTP.
* Validate the OTP using `sessionId`. You will get the actual `token` along with the non-expiry `key`.
* Use the `key` to regenerate the token whenever required.

#### Case 2. Steps to generate a token for web applications (OTP based authentication)

* Generate a session using the token generate API. You will get a VIEW token and `sessionId` (valid for 15 minutes).
* Using sessionId, generate an OTP.
* Validate the OTP using `sessionId`. You will get the actual token. The key is not generated for web applications.
* Use the `token` generated for validating the OTP to regenerate the token.

#### Case 3. Steps to generate a token for mobile apps (Password-based authentication)

**New users:**

* Generate a token using the steps mentioned in Case 1.

**Existing users:**

Generate a token using a token generate API. You will get a VIEW token and `sessionId` (valid for 15 minutes).\
Validate the password (password/validate) using the `sessionId` generated.

#### Case 4. Steps to generate a token for password-based authentication:

**New users:**

* Generate a session using the steps mentioned in Case 2.

**Existing users:**

* Generate a session using a token generate API. You will get a VIEW token and `sessionId` (valid for 15 minutes).
* Validate the password (password/validate) using the `sessionId` generated. 

## Configuring Customer Related APIs to Access through Auth Engine (both mobile and web)

To configure InTouch APIs that you want to access in Auth Engine, follow these steps.

1. Log on to the deployment server \<>
2. Navigate to **Mobile APIs** > **Create global config or Create local config** according to the scope of the config.

   * **Global config**: To configure an API that is common across orgs. The same API can be used for any org without any changes.
   * **Local config**: To configure an API that is specific to an org and other orgs cannot use it.
3. In **Select Cluster**, choose the cluster for which you want to configure an API.
4. In **Role**, enter the user type - USER (for end-user APIs) or DEA. 
5. In **API Description**, provide a brief description of the API.
6. In **Request Type**, choose the method of the API request - GET or POST. You will see the URL box.
7. In the **URL**, enter the endpoint of the API that you wish to have. For example, /customer/get.
8. Click **Add Action** to associate an API. 
9. Configure the API that you want to associate and click **Create**. 

<Table align={["left","left","left"]}>
  <thead>
    <tr>
      <th>
        Field
      </th>

      <th>
        Description
      </th>

      <th>
        Example
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        URL
      </td>

      <td>
        Enter the URL of the API.
      </td>

      <td>
        Considering V2 customers/get API.\
        htts\://eu.api.capillarytech.com/v2/customers
      </td>
    </tr>

    <tr>
      <td>
        Select request type
      </td>

      <td>
        Choose the HTTP method of the API. Currently, we support only GET and POST methods.
      </td>

      <td>
        *
      </td>
    </tr>

    <tr>
      <td>
        Body
      </td>

      <td>
        Paste the request body for the POST call. You need to use the $ followed by (parameter\_value) as mentioned in the example.
      </td>

      <td>
        \{\
        "mobile": "$\{mobile}",\
        "brand": "$\{cap\_brand}"\
        }
      </td>
    </tr>

    <tr>
      <td>
        InTouch API
      </td>

      <td>
        Check this box if the API is an InTouch API (V1.1 or V2). Leave it unchecked for external APIs.
      </td>

      <td>
        *
      </td>
    </tr>

    <tr>
      <td>
        Query Parameters
      </td>

      <td>
        Add each query parameter in key and value pairs.  For example, get customer details, ID, source, accountId.
      </td>

      <td>
        \{\
        "username": "nanofixit.demo.solution",\
        "skipValidation": "true"\
        }
      </td>
    </tr>

    <tr>
      <td>
        Request Headers
      </td>

      <td>
        Add request headers for the API in Key and Value.
      </td>

      <td>
        You can use the authorization headers and mandatory headers for the API.\
        \{\
        "Content-type": "application/json",\
        "Authorization": "Basic bXVzZXI6bXVzZXI=",\
        "Accept": "application/json"\
        }
      </td>
    </tr>

    <tr>
      <td>
        Get Response Data
      </td>

      <td>
        Click to see the response schema of the API.\
        You can also customize the response data in the box below Get Response Data in the following format.\
        \{"data1":"response.nodeX", "data2":"response.nodeY", ...}
      </td>

      <td>
        You can configure the data that you want to see  

        \{ "coupon": "response.coupon", "status": "response.status" }\
        The example says in the "coupon" node, show the coupon schema of the response.\
        Similarly, for customer/add API, if you just need status and customer details, you can set as shown in the following.\
        \{ "status": "response.status", "customers": "response.customers" }  

        It says, retrieve "status" and "customers" node.
      </td>
    </tr>
  </tbody>
</Table>

10. If you want to call multiple APIs sequentially, click **+Add Action** to append a new API and configure the API accordingly. 

For example, to redeem points, you can first add points in Redeemable API, followed by issue OTP, validate OTP, and then Redeem points.

## View or Modify Local or Global Configs

To view and modify local or global configs, follow these steps.

1. On the navigation pane, click **Mobile APIs** > **Local Configurations** or **Global Configurations**.
2. In **Select Cluster**, choose the cluster of the config that you want to see.
3. In **Select Brand**,  choose the brand for which you want to see configs. You will see all the configs of that org.
4. If the list is large, use the **Search** box to fetch a specific config.
5. To modify a config, click the respective **Edit** option, make the necessary changes, and click **Update** to save the changes. 

## Make API Calls

Once an API is added on the Local or Global Config page, you can make an API call as explained in the following.

Host and Gateway URLs

| Cluster | Auth Engine HOST (ae-host)                                                           | API Gateway URL                                                                                          |
| :------ | :----------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------- |
| APAC    | [https://apac-s3wrapper.capillarytech.com](https://apac-s3wrapper.capillarytech.com) | [https://apac-apigateway.capillarytech.com/mobile](https://apac-apigateway.capillarytech.com/mobile)     |
| APAC 2  | [https://apac2-auth-api.capillarytech.com](https://apac2-auth-api.capillarytech.com) | [https://apac2-api-gateway.capillarytech.com/mobile](https://apac2-api-gateway.capillarytech.com/mobile) |
| EU      | [https://eu-auth-api.capillarytech.com](https://eu-auth-api.capillarytech.com)       | -                                                                                                        |

#### Headers Required

| Header                 | Description                                                                                                                               |
| :--------------------- | :---------------------------------------------------------------------------------------------------------------------------------------- |
| cap\_authorization     | Valid authentication token of the customer.                                                                                               |
| cap\_brand             | Name of the org associated with the token.                                                                                                |
| cap\_device\_id        | Unique ID of the device associated with the token.                                                                                        |
| cap\_identifier\_type  | The identifier is used for authentication. Values: MOBILE, EMAIL, USERNAME.                                                               |
| cap\_identifier\_value | Value of the specified identifier\_type. If cap\_identifier\_type is MOBILE, then cap\_identifier\_value is the customer's mobile number. |

#### URL

\{ae-host}/mobile/v2/api/\{endpoint}

> 📘
>
> Here endpoint is the custom endpoint set on the Global config or Local Config page.
