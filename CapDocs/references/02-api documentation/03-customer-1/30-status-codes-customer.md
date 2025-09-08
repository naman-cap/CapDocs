---
title: Status codes
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
This section provides the list of success codes, error codes, and warning codes of the `customers` resource.

### Success Codes


| Code | Description |
| --- | --- |
| 1000 | Customer registered successfully.  
Customer retrieved successfully.  
Subscription updated successfully.  
Subscription retrieved successfully.  
Customer updated successfully.  
Coupons retrieved successfully.  
Customer notes added/updated successfully.  
Customer notes retrieved successfully.  
Customer preferences retrieved successfully.  
Customer preferences updated successfully.  
Referral statistics retrieved successfully. |
| 1040 | Customer id change request has submitted successfully.  
Referrals are invited successfully. |
| 1061 | Customer recommendations fetched successfully. |
| 1050 | Customer recommendations fetched successfully. |
| 1052 | Transactions fetched successfully. |
| 1300 | Ticket retrieved successfully.  
Ticket added successfully. |

### Error Codes


| Code  | Description                                                                                                                                                                                                                                                              |
| ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 400   | Input is invalid. Please check request parameters or input xml/json; No identifier provided to get loyalty users.                                                                                                                                                        |
| 500   | All requests failed due to errors. For mobile wrapper API `mobile/v2/api/change/email<code>, during GET calls customers who have special characters in their email ID do not work properly if the config </code>CONF_SECURITY_CHECK_ENABLED` is not enabled for the respective org. |
| 618   | Not allowed - customer is marked as fraud.                                                                                                                                                                                                                               |
| 816   | Customer not found for organization.                                                                                                                                                                                                                                     |
| 1001  | Unable to register. Invalid mobile number.                                                                                                                                                                                                                               |
| 1002  | Unable to register. Invalid email id.                                                                                                                                                                                                                                    |
| 1003  | Unable to register. Invalid external id.                                                                                                                                                                                                                                 |
| 1004  | Failed to populate store.                                                                                                                                                                                                                                                |
| 1006  | Unable to register. Mobile number is required.                                                                                                                                                                                                                           |
| 1007  | Unable to register customer. No valid primary identifier mobile number, email ID, or external ID passed.                                                                                                                                                                 |
| 1008  | Unable to register with external id.                                                                                                                                                                                                                                     |
| 1009  | Unable to add registered customer to MLM.                                                                                                                                                                                                                                |
| 1010  | Unable to update loyalty points of the customer.                                                                                                                                                                                                                         |
| 1011  | Cannot find customer for provided identifier.                                                                                                                                                                                                                            |
| 1012  | Cannot find customer with the provided mobile number/external ID/e-mail ID.                                                                                                                                                                                              |
| 1013  | Customer is not registered for the loyalty Program.                                                                                                                                                                                                                      |
| 1014  | Customer is registered already.                                                                                                                                                                                                                                          |
| 1015  | No identifier provided to get loyalty users.                                                                                                                                                                                                                             |
| 1016  | Unable to register. Email provided already exists for some other user.                                                                                                                                                                                                   |
| 1017  | Provided Custom Field is invalid.                                                                                                                                                                                                                                        |
| 1018  | Unable to update custom field.                                                                                                                                                                                                                                           |
| 1019  | Mobile number or external id is required along with the email Id to register.                                                                                                                                                                                            |
| 1020  | The customer is not registered for loyalty program.                                                                                                                                                                                                                      |
| 1021  | Invalid validation code.                                                                                                                                                                                                                                                 |
| 1023  | Unable to register customer to loyalty program.                                                                                                                                                                                                                          |
| 1024  | Unable to update customer profile.                                                                                                                                                                                                                                       |
| 1025  | Mandatory fields are not matching for customer identity update.                                                                                                                                                                                                          |
| 1026  | Count of optional fields match is less than required.                                                                                                                                                                                                                    |
| 1027  | Field name provided for verification is invalid.                                                                                                                                                                                                                         |
| 1028  | No customer notes are available.                                                                                                                                                                                                                                         |
| 1029  | Unable to retrieve customer preferences.                                                                                                                                                                                                                                 |
| 1030  | Unable to update customer preferences.                                                                                                                                                                                                                                   |
| 1031  | No preferences set for this customer.                                                                                                                                                                                                                                    |
| 1032  | A customer already exists with the same mobile number.                                                                                                                                                                                                                   |
| 1033  | A customer already exists with the same external id.                                                                                                                                                                                                                     |
| 1034  | Unable to register. Registration date is not within the allowed past or future date limit.                                                                                                                                                                               |
| 1035  | Unable to update few customer preferences.                                                                                                                                                                                                                               |
| 1036  | One or more notes could not be added/updated for customer.                                                                                                                                                                                                               |
| 1037  | Unable to add/update customer notes.                                                                                                                                                                                                                                     |
| 1039  | Unable to register. Email ID is required.                                                                                                                                                                                                                                |
| 1041  | Customer id change request failed.                                                                                                                                                                                                                                       |
| 1042  | Invalid mobile no/email id/external id.                                                                                                                                                                                                                                  |
| 1043  | Unable to register. Customer’s external id is required.                                                                                                                                                                                                                  |
| 1044  | You do not have sufficient permission to view the customer details.                                                                                                                                                                                                      |
| 1045  | No valid identifier (mobile/email) passed for non-loyalty customer.                                                                                                                                                                                                      |
| 1046  | Conversion of loyalty customer to non-loyalty is not allowed.                                                                                                                                                                                                            |
| 1047  | Customer's primary identifier not matching with other identifiers.                                                                                                                                                                                                       |
| 1048  | Customer’s email id is required to convert to loyalty customer.                                                                                                                                                                                                          |
| 1049  | Customer’s external id is required to convert to loyalty customer.                                                                                                                                                                                                       |
| 1051  | No transactions or recommendations found for the customer.                                                                                                                                                                                                               |
| 1059  | Error in customer registration. Email or Mobile is required.                                                                                                                                                                                                             |
| 1060  | Batch limit exceeded.                                                                                                                                                                                                                                                    |
| 1062  | Invalid Test & Control status.                                                                                                                                                                                                                                           |
| 1088  | Unable to issue points. Please report to capillary support.                                                                                                                                                                                                              |
| 1099  | Unable to fetch tracker data for the customer.                                                                                                                                                                                                                           |
| 1101  | Invalid channel type.                                                                                                                                                                                                                                                    |
| 1102  | Invalid priority type.                                                                                                                                                                                                                                                   |
| 1103  | Invalid scope.                                                                                                                                                                                                                                                           |
| 1104  | Invalid identifier or no identifier passed.                                                                                                                                                                                                                              |
| 1105  | Multiple scopes are not allowed.                                                                                                                                                                                                                                         |
| 1106  | Invalid subscription status passed.                                                                                                                                                                                                                                      |
| 1107  | Invalid campaign id passed.                                                                                                                                                                                                                                              |
| 1108  | Invalid outbox id passed.                                                                                                                                                                                                                                                |
| 1109  | Unable to add, update or fetch subscription details.                                                                                                                                                                                                                     |
| 1150  | Invalid store ID passed.                                                                                                                                                                                                                                                 |
| 1110  | Unable to update subscription details.                                                                                                                                                                                                                                   |
| 1222  | Internal error occurred with the referral system.                                                                                                                                                                                                                        |
| 1202  | Invalid campaign token.                                                                                                                                                                                                                                                  |
| 1203  | Invalid campaign configured.                                                                                                                                                                                                                                             |
| 1204  | The customer may not be eligible for the referral program.                                                                                                                                                                                                               |
| 1205  | Unable to find the referrer in the specific campaign.                                                                                                                                                                                                                    |
| 1206  | Failed to add referral. Referral type is not supported.                                                                                                                                                                                                                  |
| 1212  | Invalid entity type passed.                                                                                                                                                                                                                                              |
| 1213  | Invalid programId passed in request.                                                                                                                                                                                                                                     |
| 1214  | startDate is after endDate.                                                                                                                                                                                                                                              |
| 1215  | `\{x\}` cannot be a past date.                                                                                                                                                                                                                                               |
| 1216  | The date format used for `\{x\}` is not supported. Enter the the date in (YYYY-MM-DD) format.                                                                                                                                                                                |
| 1217  | Date mentioned is a far future date. `\{x\}` cannot be after 100 years from now.                                                                                                                                                                                             |
| 1222  | Internal error occurred with the referral system.                                                                                                                                                                                                                        |
| 1301  | A ticket already exists with the same subject.                                                                                                                                                                                                                           |
| 1302  | Ticket registration failed.                                                                                                                                                                                                                                              |
| 1303  | Ticket subject should not be empty.                                                                                                                                                                                                                                      |
| 8011  | Invalid source account passed.                                                                                                                                                                                                                                           |
| 8013  | Customer identifier is invalid. Also check if the parameter identifierName is passed correctly.                                                                                                                                                                          |
| 8015  | No customer found with the given identifier.                                                                                                                                                                                                                             |
| 8045  | Account id is not passed.                                                                                                                                                                                                                                                |
| 8065  | No customer found in the given source with the given identifier.                                                                                                                                                                                                         |
| 8089  | Customer not registered for the Loyalty Program.                                                                                                                                                                                                                         |
| 10001 | Failed to add customer.                                                                                                                                                                                                                                                  |
| 10002 | Failed to update customer details.                                                                                                                                                                                                                                       |
| 91009 | Retrieved survivor account for the requested merge victim.                                                                                                                                                                                                               |
| 91010 | Downgrade strategy is not configured.                                                                                                                                                                                                                                    |
| 91020 | Invalid TILL passed for registration.                                                                                                                                                                                                                                    |
| 91021 | Invalid attribution TILL passed.                                                                                                                                                                                                                                         |
| 91022 | Failed to update subscription for `\{x\}` channel and priority `\{y\}`.                                                                                                                                                                                                          |

|      |                                                                                                                              |
| ---- | ---------------------------------------------------------------------------------------------------------------------------- |
| 8001 | Lookup failed, No source passed                                                                                              |
| 8002 | Lookup failed, No identifiers passed                                                                                         |
| 8003 | Invalid source passed                                                                                                        |
| 8004 | Add failed, No source passed                                                                                                 |
| 8005 | Add failed, No valid identifiers passed                                                                                      |
| 8006 | Add failed, Customer already exists with id `\{0\}` for same source                                                              |
| 8007 | Update failed, Customer already exists for same source                                                                       |
| 8008 | Update failed, Same source different profile found for given identifiers                                                     |
| 8009 | Update failed, Customer not found                                                                                            |
| 8010 | Invalid communication channel passed                                                                                         |
| 8011 | Look up, Invalid source passed                                                                                               |
| 8012 | Get, Invalid source passed                                                                                                   |
| 8013 | Lookup, Invalid identifier passed                                                                                            |
| 8014 | Error in customer registration: Invalid Primary Id - `\{0\}`                                                                     |
| 8015 | Customer not found for the given identifiers                                                                                 |
| 8016 | GET failed, No source passed                                                                                                 |
| 8091 | GET failed, No account id passed                                                                                             |
| 8092 | GET failed, No identifier type passed                                                                                        |
| 8093 | GET failed, No identifier value passed                                                                                       |
| 8017 | Error in customer registration: Invalid registration date                                                                    |
| 8018 | Update customer, Conversion from loyalty to non-loyalty not allowed                                                          |
| 8019 | Inference attribute-type must be specified                                                                                   |
| 8020 | Inference attribute-type is invalid                                                                                          |
| 8021 | Inference attribute-key is required when attribute-type specified                                                            |
| 8022 | Inference attribute-key is invalid                                                                                           |
| 8023 | No best-fitting profile found matching `\{0\}`.`\{1\}`                                                                               |
| 8024 | No profile information available to infer from                                                                               |
| 8025 | Inferring profile failed                                                                                                     |
| 8026 | Same customer was deleted for PII feature, could not add                                                                     |
| 8027 | Customer add for parent without child context not allowed                                                                    |
| 8028 | Customer seems is already registered                                                                                         |
| 8065 | User not found for given source                                                                                              |
| 8066 | Combine not possible, User id already used in same source                                                                    |
| 8067 | Same Customer found in other sources, Merge already done with userId `\{0\}`                                                     |
| 8084 | Customer details not sent                                                                                                    |
| 8085 | Invalid org entity passed                                                                                                    |
| 8086 | Status label passed is not valid                                                                                             |
| 8087 | Card is `\{0\}`, not allowed to do any further actions                                                                           |
| 8088 | Customer status get failed                                                                                                   |
| 8089 | Customer not registered for the Loyalty Program                                                                              |
| 8090 | Unable to create profile as instore profile doesn't exist                                                                    |
| 8100 | Offset cannot have value less than 0                                                                                         |
| 8101 | Limit should be greater than 0                                                                                               |
| 8102 | Limit cannot be greater than 100                                                                                             |
| 8103 | Invalid source type, please select values from (UI, API, CAMPAIGN)                                                           |
| 8104 | Invalid input combination, programs and promotionIdentifier both cannot be passed in single request                          |
| 8105 | Error fetching promotion data. Verify programs/promotionIdentifier passed.                                                   |
| 8106 | Communication channel type not passed                                                                                        |
| 8107 | Default customer status label not set                                                                                        |
| 8108 | Config read failed for CONF_CUSTOMER_DEFAULT_STATUS_ENABLED                                                                  |
| 8110 | Error fetching promotion data. Verify the passed promotion Type `\{0\}`                                                          |
| 8111 | Error fetching promotion data. Verify the passed scope `\{0\}`                                                                   |
| 8112 | Invalid startDate. Should be in 'yyyy-MM-dd' format                                                                          |
| 8113 | Invalid endDate. Should be in 'yyyy-MM-dd' format                                                                            |
| 8114 | Both startDate and endDate should be provided                                                                                |
| 8115 | startDate should not be after endDate                                                                                        |
| 8117 | Invalid sortOn value, should be one of CREATED_DATE, END_DATE, START_DATE, EXPIRY_ON, ISSUAL_DATE                            |
| 8118 | Invalid sortBy value, should be one of ASC/DESC                                                                              |
| 8119 | Empty or Null customerIds                                                                                                    |
| 8120 | Maximum 100 customerIds can be updated                                                                                       |
| 8121 | Customer type is non-loyalty                                                                                                 |
| 8122 | Required Identifier missing for barcode generation                                                                           |
| 8123 | Barcode generation failed for customer identifier                                                                            |
| 8124 | Invalid conf value for CONF_BARCODE_VALUE_IDENTIFIER                                                                         |
| 8125 | Invalid promotionStatusForCustomer. It should be one of: AVAILABLE_TO_ENROL, AVAILABLE_TO_EARN, AVAILABLE_TO_REDEEM, EXPIRED |
| 8126 | Request passed without child org context                                                                                     |
| 8127 | Invalid source or accountId passed                                                                                           |

### Warning Codes


| Warning Code | Description                                                                |
| ------------ | -------------------------------------------------------------------------- |
| 8050         | Same Customer found in other sources, Combining                            |
| 8051         | Same Customer found in other sources, Merging with userId `\{0\}`              |
| 8052         | Add customer, Conflicting Customers found                                  |
| 8053         | Update customer, Conflicting Customers found                               |
| 8054         | Account id not passed                                                      |
| 8055         | Invalid email id                                                           |
| 8056         | Invalid mobile                                                             |
| 8057         | Invalid email id in comm channel                                           |
| 8058         | Invalid mobile in comm channel                                             |
| 8059         | Pushing customer to Solr failed                                            |
| 8060         | Pushing customer to subscription queue failed                              |
| 8061         | Nps details get failed                                                     |
| 8062         | Points details fetch failed                                                |
| 8063         | Segmentation details fetch failed                                          |
| 8064         | External id validation failed                                              |
| 8066         | Same Customer found in other sources, Merge already done with userId `\{0\}`   |
| 8068         | Customer is campaign user                                                  |
| 8069         | Merged customer found                                                      |
| 8070         | No valid change identifiers detected                                       |
| 8071         | Mobile already attached with this user                                     |
| 8072         | Email already attached with this user                                      |
| 8073         | External id already attached with this user                                |
| 8074         | Change Failed, Identifier found in multiple sources and userIds            |
| 8075         | Primary identifier not matching with other identifiers                     |
| 8076         | Gap details missing                                                        |
| 8077         | Invalid associatedWith passed, attribution not updated                     |
| 8078         | No Image passed to be deleted                                              |
| 8079         | Error in uploading Image                                                   |
| 8080         | Error in deleting image                                                    |
| 8081         | No Image Passed                                                            |
| 8082         | Max image per user is 5                                                    |
| 8083         | Image size is too small                                                    |
| 521          | Multiple actions running for the same customer, Please try after some time |
| 8088         | Customer status get failed                                                 |
| 8090         | Unable to create profile as instore profile doesn't exist                  |
| 400          | Admin user auth not supported for `\{0\}`                                      |

|       |                                                                 |
| ----- | --------------------------------------------------------------- |
| 1053  | Preferred store specified is not found.                         |
| 91001 | Failed to get point details.                                    |
| 91002 | Failed to get subscription details.                             |
| 91003 | Failed to validate.                                             |
| 91004 | Failed to get segmentation details.                             |
| 91005 | `\{x\}` is primary identifier and cannot be updated.                |
| 91006 | `\{x\}` update is not allowed.                                      |
| 91007 | Failed to register. `\{x\}` already exists for some other user.     |
| 91011 | Customer is already in the lowest slab.                         |
| 91012 | Customer is already in the highest slab.                        |
| 91013 | Call to Points Engine for tier upgrade criteria has failed `\{x\}`. |
| 91014 | Call to Points Engine for tier renewal criteria has failed `\{x\}`. |
| 91015 | Failed to update extended fields; or field `\{x\}` length too long. |
| 91016 | WECHAT profile is not available for the customer.               |
| 91017 | WEB_ENGAGE profile is not available for the customer.           |
| 91018 | Unable to load WeChat notifications.                            |
| 91019 | Unable to load Web Engage notifications.                        |