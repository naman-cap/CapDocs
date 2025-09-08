---
title: Authorisation
excerpt: This page provides information on authorisation controls in Capillary APIs.
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
Authorization is the process of regulating access to API resources among authenticated users. Authorization in Capillary APIs is achieved using the Access control feature. To create and restrict access permissions for APIs, refer [Access groups](https://docs.capillarytech.com/docs/access-group).

# API errors due to invalid authorisation

The application displays an error message if the store does not have access to the requested API and when the authorization status is not available.

1. **Error** :
   ```json
   HttpStatusCode=403
   errorMessage=Not authorized. Access is denied!
   errorCode=4000
   ```
   **Reason**: Not authorized to access the requested API.\
   **Solution**: Make sure that the endpoint is valid and appears under the selected <Glossary>Resource</Glossary> in the access group and that the assigned access group for the store has the appropriate permissions to perform the requested operation.
2. **Error**:
   ```json
   HttpStatusCode=503
   errorMessage=Authorization status unavailable!
   errorCode=4001
   ```
   **Reason**: Authorization status unavailable\
   **Solution**: Try again after some time.
