---
title: Advanced Request Workflows
deprecated: false
hidden: false
metadata:
  robots: index
---
## Points redemption

```json Pending
{
  "eventName": "requestWorkflowEvent",
  "eventId": "c5315714-90b0-4aaf-9a5c-19be8190edf3",
  "orgId": 0,
  "refId": "0_2083b025-c1d5-11ee-9641-7277dba3c6a7",
  "apiRequestId": "953d1022f6a80fef82d7c6d9f9133d63",
  "createdAt": 1706883171069,
  "data": {
    "requestId": "2083b025-c1d5-11ee-9641-7277dba3c6a7",
    "requestType": "POINTS_REDEMPTION",
    "requesterId": 232134,
    "currentRequestState": "AdminTask",
    "updateTime": 1706883171068,
    "requestAttributes": {
      "queryParams": {
        "skip_validation": "true",
        "format": "json"
      },
      "body": {
        "root": {
          "redeem": {
            "points_redeemed": "100",
            "customer": {
              "mobile": "9877792149"
            },
            "redemption_time": "2020-04-15 23:01:46",
            "transaction_number": "numbr893421972122280",
            "notes": "Redemption by SMS",
            "external_reference_number": "ACR-58392150333121"
          }
        }
      }
    }
  },
  "loyaltyEventId": null
}
```
```json Failed
{
  "eventName": "requestWorkflowEvent",
  "eventId": "76a767ab-ba43-4ff8-b2bd-ce7c042430ed",
  "orgId": 0,
  "refId": "0_2c8e9324-c1d5-11ee-9641-7277dba3c6a7",
  "apiRequestId": "775cefae5c4efa9b4fa9561f24a8f3a1",
  "createdAt": 1706883639869,
  "data": {
    "requestId": "2c8e9324-c1d5-11ee-9641-7277dba3c6a7",
    "requestType": "POINTS_REDEMPTION",
    "requesterId": 232134,
    "checkerId": 233253,
    "currentRequestState": "failed",
    "previousRequestState": "AdminTask",
    "updateTime": 1706883639868,
    "comment": "approving the points redemption request",
    "requestAttributes": {
      "queryParams": {
        "skip_validation": "true",
        "format": "json"
      },
      "body": {
        "root": {
          "redeem": {
            "points_redeemed": "100",
            "customer": {
              "mobile": "9877792149"
            },
            "redemption_time": "2020-04-15 23:01:46",
            "transaction_number": "numbr893421972122280",
            "notes": "Redemption by SMS",
            "external_reference_number": "ACR-58392150333121"
          }
        }
      }
    }
  },
  "loyaltyEventId": null
}
```
```json Approved
{
  "eventName": "requestWorkflowEvent",
  "eventId": "d6a4ef60-ce52-43d7-b6dd-4b883874123f",
  "orgId": 0,
  "refId": "0_96b672f3-c1d8-11ee-9641-7277dba3c6a7",
  "apiRequestId": "1f0757ac485fc453f031e40a2f46f7a6",
  "createdAt": 1706884672170,
  "data": {
    "requestId": "96b672f3-c1d8-11ee-9641-7277dba3c6a7",
    "requestType": "POINTS_REDEMPTION",
    "requesterId": 232134,
    "checkerId": 233253,
    "currentRequestState": "approved",
    "previousRequestState": "AdminTask",
    "updateTime": 1706884672170,
    "comment": "approving the points redemption request",
    "requestAttributes": {
      "queryParams": {
        "skip_validation": "true",
        "format": "json"
      },
      "body": {
        "root": {
          "redeem": {
            "points_redeemed": "100",
            "customer": {
              "mobile": "9877792149"
            },
            "redemption_time": "2020-04-15 23:01:46",
            "transaction_number": "numbr893421972122280",
            "notes": "Redemption by SMS",
            "external_reference_number": "ACR-58392150333121wdewdwe"
          }
        }
      }
    }
  },
  "loyaltyEventId": null
}
```
```json Rejected
{
  "eventName": "requestWorkflowEvent",
  "eventId": "acb5d13c-d422-443d-982e-731b3e709f98",
  "orgId": 0,
  "refId": "0_d1f9ff8c-c1d9-11ee-9641-7277dba3c6a7",
  "apiRequestId": "78ddcc06934107da509e3d3ab1c05f3e",
  "createdAt": 1706885234777,
  "data": {
    "requestId": "d1f9ff8c-c1d9-11ee-9641-7277dba3c6a7",
    "requestType": "POINTS_REDEMPTION",
    "requesterId": 232134,
    "checkerId": 233253,
    "currentRequestState": "rejected",
    "previousRequestState": "AdminTask",
    "updateTime": 1706885234777,
    "comment": "rejecting the points redemption request",
    "requestAttributes": {
      "queryParams": {
        "skip_validation": "true",
        "format": "json"
      },
      "body": {
        "root": {
          "redeem": {
            "points_redeemed": "100",
            "customer": {
              "mobile": "9877792149"
            },
            "redemption_time": "2020-04-15 23:01:46",
            "transaction_number": "numbr893421972122280",
            "notes": "Redemption by SMS",
            "external_reference_number": "ACR-58392150333121"
          }
        }
      }
    }
  },
  "loyaltyEventId": null
}
```

## Customer Status change

```json Pending
{
  "eventName": "requestWorkflowEvent",
  "eventId": "0df1a81f-b716-4ec0-b456-7ab5242c5ec8",
  "orgId": 0,
  "refId": "0_22e9f5f7-c1df-11ee-9641-7277dba3c6a7",
  "apiRequestId": "05be0e1bdf206764081e384573ada0dd",
  "createdAt": 1706887460576,
  "data": {
    "requestId": "22e9f5f7-c1df-11ee-9641-7277dba3c6a7",
    "requestType": "CUSTOMER_STATUS_CHANGE",
    "requesterId": 232134,
    "currentRequestState": "AdminTask",
    "updateTime": 1706887460576,
    "reason": "testing",
    "requestAttributes": {
      "queryParams": {
        "source": "INSTORE",
        "accountId": "",
        "use_async": "false",
        "identifierName": "mobile",
        "identifierValue": "919591399244"
      },
      "body": {
        "reason": "testing",
        "label": "Suspended"
      }
    }
  },
  "loyaltyEventId": null
}
```
```json Failed
{
  "eventName": "requestWorkflowEvent",
  "eventId": "11fe28ab-5d4c-478a-906f-03fe7d7b25c6",
  "orgId": 0,
  "refId": "0_22e9f5f7-c1df-11ee-9641-7277dba3c6a7",
  "apiRequestId": "07acef640bdeb5534263cc0ddec1c9dd",
  "createdAt": 1706955529408,
  "data": {
    "requestId": "22e9f5f7-c1df-11ee-9641-7277dba3c6a7",
    "requestType": "CUSTOMER_STATUS_CHANGE",
    "requesterId": 232134,
    "currentRequestState": "failed",
    "previousRequestState": "AdminTask",
    "updateTime": 1706955529407,
    "comment": "approving the customer status request",
    "requestAttributes": {
      "queryParams": {
        "source": "INSTORE",
        "accountId": "",
        "use_async": "false",
        "identifierName": "mobile",
        "identifierValue": "919591399244"
      },
      "body": {
        "reason": "testing",
        "label": "Suspended"
      }
    }
  },
  "loyaltyEventId": null
}

```
```json Approved
{
  "eventName": "requestWorkflowEvent",
  "eventId": "468a8fa7-f03e-4b7b-86b7-91eda4420af6",
  "orgId": 0,
  "refId": "0_75cedb31-c27f-11ee-bc64-7667ffaf5419",
  "apiRequestId": "cfaf3850903f4f041fb4e5d12fdc6308",
  "createdAt": 1706956350430,
  "data": {
    "requestId": "75cedb31-c27f-11ee-bc64-7667ffaf5419",
    "requestType": "CUSTOMER_STATUS_CHANGE",
    "requesterId": 232134,
    "currentRequestState": "approved",
    "previousRequestState": "AdminTask",
    "updateTime": 1706956350430,
    "comment": "approving the customer status request",
    "requestAttributes": {
      "queryParams": {
        "source": "INSTORE",
        "accountId": "",
        "use_async": "false",
        "identifierName": "mobile",
        "identifierValue": "919591399244"
      },
      "body": {
        "reason": "testing",
        "label": "bb"
      }
    }
  },
  "loyaltyEventId": null
}

```

## Goodwill point request

```json Pending
{
  "eventName": "requestWorkflowEvent",
  "eventId": "bbc13325-7b79-4bb7-b57f-4791db6f3871",
  "orgId": 0,
  "refId": "0_f8a9bdd1-c280-11ee-bc64-7667ffaf5419",
  "apiRequestId": "e420fbacbe32b4d2db758282ebdeae4f",
  "createdAt": 1706956970545,
  "data": {
    "requestId": "f8a9bdd1-c280-11ee-bc64-7667ffaf5419",
    "requestType": "GOODWILL_POINTS",
    "requesterId": 232134,
    "currentRequestState": "AdminTask",
    "updateTime": 1706956970545,
    "requestAttributes": {
      "body": {
        "referenceId": "ref_id_12993141722",
        "reason": "reason",
        "baseType": "POINTS",
        "programId": 2739,
        "awardingTillId": 50682616,
        "earningEntityType": "CUSTOMER",
        "earningEntityId": 382332518,
        "points": 20,
        "source": "API"
      }
    }
  },
  "loyaltyEventId": null
}

```
```json Approved
{
  "eventName": "requestWorkflowEvent",
  "eventId": "d2540d72-f62c-400e-ad2a-422e8c00f187",
  "orgId": 0,
  "refId": "0_f8a9bdd1-c280-11ee-bc64-7667ffaf5419",
  "apiRequestId": "3e55d72e08aa213da99ec29fcf218298",
  "createdAt": 1706957216875,
  "data": {
    "requestId": "f8a9bdd1-c280-11ee-bc64-7667ffaf5419",
    "requestType": "GOODWILL_POINTS",
    "requesterId": 232134,
    "checkerId": 233253,
    "currentRequestState": "approved",
    "previousRequestState": "AdminTask",
    "updateTime": 1706957216875,
    "comment": "approving the goodwill points request",
    "requestAttributes": {
      "body": {
        "referenceId": "ref_id_12993141722",
        "reason": "reason",
        "baseType": "POINTS",
        "programId": 2739,
        "awardingTillId": 50682616,
        "earningEntityType": "CUSTOMER",
        "earningEntityId": 382332518,
        "points": 20,
        "source": "API"
      }
    }
  },
  "loyaltyEventId": null
}

```

## Earn badge (Issue badge to customer)

```json Pending
{
  "eventName": "requestWorkflowEvent",
  "eventId": "32274496-3f73-483f-9743-2ab03ed74ecf",
  "orgId": 0,
  "refId": "0_57934965-c295-11ee-9c77-3ae88acc3158",
  "apiRequestId": "0155afd1c3a2bd55f76edbe636a84a13",
  "createdAt": 1706965718307,
  "data": {
    "requestId": "57934965-c295-11ee-9c77-3ae88acc3158",
    "requestType": "EARN_BADGE",
    "requesterId": 232134,
    "currentRequestState": "AdminTask",
    "updateTime": 1706965718306,
    "requestAttributes": {
      "body": {
        "triggeredBy": {
          "ownerType": "Goodwill_Module",
          "referenceId": "123"
        },
        "customerId": 382477526,
        "requestId": "0f77333928-9878-441c-a78e-c1d2334q",
        "badgeMetaId": "65be200710126e55359f1969"
      }
    }
  },
  "loyaltyEventId": null
}
```
```json Failed
{
  "eventName": "requestWorkflowEvent",
  "eventId": "7597f468-ebfc-4151-8b7a-6e5b2c3ef974",
  "orgId": 0,
  "refId": "0_57934965-c295-11ee-9c77-3ae88acc3158",
  "apiRequestId": "1f5c11d9c793311c2ac79333f0f147e6",
  "createdAt": 1706965813316,
  "data": {
    "requestId": "57934965-c295-11ee-9c77-3ae88acc3158",
    "requestType": "EARN_BADGE",
    "requesterId": 232134,
    "checkerId": 233253,
    "currentRequestState": "failed",
    "previousRequestState": "AdminTask",
    "updateTime": 1706965813316,
    "comment": "approving the earn badge request",
    "requestAttributes": {
      "body": {
        "triggeredBy": {
          "ownerType": "Goodwill_Module",
          "referenceId": "123"
        },
        "customerId": 382477526,
        "requestId": "0f77333928-9878-441c-a78e-c1d2334q",
        "badgeMetaId": "65be200710126e55359f1969"
      }
    }
  },
  "loyaltyEventId": null
}
```

## Issue badge (Enrol customers to badge)

```json Pending
{
  "eventName": "requestWorkflowEvent",
  "eventId": "390a6575-cb60-4164-bd5d-2e06a421f3ba",
  "orgId": 0,
  "refId": "0_a24df7cd-c2bd-11ee-9cc2-bea6cdcb6ac2",
  "apiRequestId": "c6edd0830ecf4f9f80705b314f11043b",
  "createdAt": 1706983022684,
  "data": {
    "requestId": "a24df7cd-c2bd-11ee-9cc2-bea6cdcb6ac2",
    "requestType": "ISSUE_BADGE",
    "requesterId": 232134,
    "currentRequestState": "AdminTask",
    "updateTime": 1706983022684,
    "requestAttributes": {
      "body": {
        "triggeredBy": {
          "ownerType": "Goodwill_Module",
          "referenceId": "134"
        },
        "customers": [
          113460811
        ],
        "requestId": "e5811requestd62c5ec7d115a2859228cefd8ee8cgh",
        "badgeMetaId": "65be3c4d10126e55359f196a"
      }
    }
  },
  "loyaltyEventId": null
}

```
```json Failed
{
  "eventName": "requestWorkflowEvent",
  "eventId": "45bb68bc-29a4-4009-9337-72a7784fe189",
  "orgId": 0,
  "refId": "0_a24df7cd-c2bd-11ee-9cc2-bea6cdcb6ac2",
  "apiRequestId": "43e862ea6239afe41d8f1afbed35d32a",
  "createdAt": 1706983256871,
  "data": {
    "requestId": "a24df7cd-c2bd-11ee-9cc2-bea6cdcb6ac2",
    "requestType": "ISSUE_BADGE",
    "requesterId": 232134,
    "checkerId": 233253,
    "currentRequestState": "approved",
    "previousRequestState": "AdminTask",
    "updateTime": 1706983256871,
    "comment": "approving the issue badge request",
    "requestAttributes": {
      "body": {
        "triggeredBy": {
          "ownerType": "Goodwill_Module",
          "referenceId": "134"
        },
        "customers": [
          113460811
        ],
        "requestId": "e5811requestd62c5ec7d115a2859228cefd8ee8cgh",
        "badgeMetaId": "65be3c4d10126e55359f196a"
      }
    }
  },
  "loyaltyEventId": null
}
```