---
title: Try it APIs
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
The new API documentation now lets you try out APIs by yourself. This article guides you how to run an API in the API documentation itself.

## Setup your environment

![53d7b66 API doc GIF3](https://files.readme.io/53d7b66-API_doc_GIF3.gif)

Before starting with API Try out, set your authentication and host URL. We have enabled Basic Auth for APIs that support Basic Auth.

Navigate to any API that you want to try out and scroll down to the **Authentication** section.\
Enter your TILL credentials - till ID and MD5 encoded password.

![389aecc Authentication](https://files.readme.io/389aecc-Authentication.png)

In URL, click on host and enter your host URL according to the cluster.

![7fa7fbe host](https://files.readme.io/7fa7fbe-host.png)

These details are saved as cookies as long as you close the browser or clear browser cache.

## Enter input values

Once you set your environment, you need to pass input values according to the API.

### Path & Query Parameters

If the API has path and parameters, you will see the table on the top. Path parameters are always mandatory and you will see the mandatory query parameters with the `required` tag. Provide inputs in the boxes right to it.

The URL keeps changing with the parameter values as you enter. See the updated URL in the `Try it` box on the right.

![a2b1bad Query Parameters](https://files.readme.io/a2b1bad-Query_Parameters.png)

### Headers

If the API supports any additional headers, you will see a Headers section. Enter the header values accordingly. See the preceding screenshot for better understanding.

### Body Parameter

Usually, the schema or payload is complex for POST, and PUT calls especially when it comes to customer or transaction. Hence, you will see a sample payload for each use case.

Just copy the payload from the examples and modify it using any of your JSON editor such as Notepad++

![348c5f4 Example](https://files.readme.io/348c5f4-Example.png)

![1d4c6b8 Example2](https://files.readme.io/1d4c6b8-Example2.png)

Now, paste the updated payload in the RAW\_BODY all the parameter descriptions in the body 

![721f393 RawBody](https://files.readme.io/721f393-RawBody.png)

You are almost done! Just verify your input values and click on **Try it!** 

![a4cfafb TryIt](https://files.readme.io/a4cfafb-TryIt.png)

That's it. Just scroll down a bit to see the response.

![292d7be Response](https://files.readme.io/292d7be-Response.png)

#### What else?

* **See Response Headers**: See all the headers of the response by clicking on **Headers** in the Response widget.
* **See Response Object**: You can also see the response object for each API under RESPONSES (center pane). Just scroll-down to the bottom of the respective page to access it.

> 📘 Currently, you can only see success objects.
