---
title: Milestone user group APIs
excerpt: User Controller APIs of v3
deprecated: false
hidden: true
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
These group of APIs are called "user controller" APIs. These are used to perform various activities (GET, POST) on target groups with respective to users.

**Each API might contain:** 

1. Query params
2. Body params (only for POST APIs)
3. Headers
4. Path params (variables present in the path of the URL of the API)

**Status of the APIs will be as follows:**

| Status code | Interpretation of the code                    |
| :---------- | :-------------------------------------------- |
| 200         | OK, meaning API is success                    |
| 401         | Unauthorised, meaning no permission to access |
| 403         | Forbidden                                     |
| 404         | Not found                                     |
| 201         | Created, for POST operations                  |

P.S: When using POST APIs, don't forgot that they "need mandatory request body".  :-)
