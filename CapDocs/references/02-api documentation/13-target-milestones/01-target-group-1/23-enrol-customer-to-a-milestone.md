---
title: Enrol/Re-enrol a customer to a milestone/streak
excerpt: This API helps in enrolling users into a milestone/streak
api:
  file: v3.json
  operationId: enrol-customer-to-a-milestone
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
This API helps brands in enrolling/re-enrolling a user into a streak/milestone depending on the use case.

**Enroll:** The user is becoming part of the milestone/streak for the 1st time.

\*\*Re-enroll:\*\*The user has been part of the streak/milestone before but was unenrolled for some reason. The user wants to be part of the streak/milestone again, called re-enrolment.

### Case1: Milestones

**Sub-case1:** Assume there is a milestone ABC, that has 5 cycles in it c1, c2, c3, c4, c5

1. If the user gets enrolled into c1 from the beginning of c1's duration:
   1. The user will be enrolled into all the cycles from c1.
      1. Tip: If you want to enroll users into all cycles, simply enroll in the first cycle from the beginning.
2. If the user gets enrolled into c1 from the middle of c1's duration:

   1. Whatever activities happened between c1's start date & user's enrolment date will be considered or not considered for the c1 depending on the following config in the milestones setting.

   2. If this config is enabled, then the activities in between won't be considered. However, if this config is in disabled, then the in-between events will be considered given they are coming as retro events.

![ 70% ](https://files.readme.io/c0a0dc5-Screenshot_2024-07-23_at_1.11.21_PM.png)

**Sub-case2:** Assume there is a milestone ABC, that has 5 cycles in it c1, c2, c3, c4, c5

1. If the user gets enrolled during the very start of c3
   1. Then the user will get enrolled into all the cycles from c3
2. If the user gets enrolled during the middle of c3
   1. The behaviour mentioned in Sub-case1:Point2 still holds but this time with cycle c3.

**Sub-case3:** Assume there is a milestone ABC, that has 5 cycles in it c1, c2, c3, c4, c5

The target value that needs to be achieved for each cycle is say 1000 gross sales.

1. If a user is enrolled into any cycle (say c1) with an initial balance of 300,
   1. Then the target achieved value of the user will start from 300 instead of 0. This means that this particular user has to achieve just 700 in this cycle instead of 1000 to get the reward.
2. The user has un-enrolled during the cycle c4, and during the un-enrolment the target achieved value is 250. Now, the user is trying to re-enroll into the same cycle c4, and:
   1. If the initial balance is given as 0, the user's target value will be set to 0 & has to start from 0 in the cycle.
   2. If the initial balance is given as say 150, the user's target value will be set to 150 (the previously achieved value of 250 before the un-enrollment will be replaced.)
   3. If the initial balance is given as null, the user's target value will resume from whatever is achieved before in the cycle (aka 250).

**Sub-case4:** Assume there is a milestone ABC, that has 5 cycles in it c1, c2, c3, c4, c5

1. If the brand wants the user to enroll only into a SPECIFIC cycle (say c3), it is not possible.

**Sub-case5:** Assume there is a milestone ABC, that has 5 cycles in it c1, c2, c3, c4, c5. (*Soon coming)*

1. The brand wants to enroll a user into ABC today and wants to enroll into whatever cycle is currently happening & all the subsequent cycles. Assume the current date is 23rd July, and it is falling in c2.
   1. If no "period/cycle name" is provided, then the enrolment will happen in the current cycle & in all the subsequent cycles.
      1. If there is a current cycle (which in this example is c2), the user will enroll in all cycles from c2 to c5.
      2. If there is no current cycle, the user will enroll in the nearest upcoming cycle.
         1. If there is no nearest upcoming as well, will throw the error.

**Sub-case6:** Assume there is a streak ABC, and it has 4 levels (l1, l2, l3, l4) in it.

1. In the case of streaks:
   1. No need to mention the period/name. The user will be enrolled in all the cycles.
   2. The "initial balance" won't be applicable.
   3. Say the user has already achieved the levels (l1 & l2) & un-enrolled from the streaks.
      1. During the re-enrollment:
         1. If the resetStreakStatus is given as false, the user would be able to achieve l3 & l4 directly without having to start from scratch again.
         2. If the resetStreakStatus is given as true, all the achievements done by the user will be reset. So the user has to achieve the levels l1 & l2 again.
            1. Will be useful in the cases where the brands want to use the same streak again & again. They just have to unenroll & re-enroll with streakResetStatus as "true".

<br />

> 👍 Note
>
> * For detailed information about our APIs and for hands-on testing, refer documentation in [API overview](https://docs.capillarytech.com/reference/apioverview) and  step-by-step guide on making your first API call in [Make your first API call](https://docs.capillarytech.com/reference/make-your-first-api-call) .

# Prerequisites

*   Authentication: Basic or OAuth authentication
*   Default access group

# Resource information

|                        |                                                               |
| :--------------------- | :------------------------------------------------------------ |
| URI                    | /targetGroups`\{targetGroupId\}`/targets`\{targetId\}`/enroll |
| HTTP Method            | POST                                                          |
| Pagination             | No                                                            |
| Batch support          | No                                                            |
| Rate limit information | None                                                          |

# API endpoint example

`https://eucrm.cc.capillarytech.com/targetGroups\{targetGroupId\}/targets\{targetId\}/enroll`

# Example Request

```curl
curl --location 'https://eu.api.capillarytech.com/v3/targetGroups/2154/targets/2309/enroll' \
--header 'accept: application/json' \
--header 'content-type: application/json' \
--header 'Authorization: •••••' \
--data '[
  {       
       "customerId":564332013,  
       "periodName":"Cycle_1",
       "initialBalance":100,
  		"resetStreakStatus":false
  }
]'
```

# Request path parameters

| Parameter       | Data type | Description                                          |
| :-------------- | :-------- | :--------------------------------------------------- |
| targetGroupId\* | Integer   | The ID of the target group associated with the item. |
| targetId\*      | Integer   | The ID of the target.                                |

# Request body parameters

| Parameter           | Data Type | Description                                                                                                                                                                                                                                                                                                                                                                                                           |
| ------------------- | --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `customerId*`       | Integer   | The unique identifier of the customer.                                                                                                                                                                                                                                                                                                                                                                                |
| `periodName*`       | String    | The name of the period/cycle. This is used to identify to which period/cycle the customer should be enrolled/re-enrolled in the case of milestones. The periodName is the `refCode` of the period. **Note**: For Streaks, it's not mandatory to enter the period name as the period is not applicable for streaks.                                                                                                    |
| `initialBalance`    | Integer   | When a value is given to this field, the user will enroll/re-enroll into the cycle/period of a milestone with the initial balance being the target achieved value of the user. In the case of re-enroll, when this field is given as "NULL", the user's target achieved value will continue from the value at which the user has un-enrolled before. This field won't work for streaks and works only for milestones. |
| `resetStreakStatus` | boolean   | This field is only for streaks. If this is `false`, the user will continue from the streak value that was present before un-enrolling from the streak. If this is marked as `true` during re-enroll, then the streak value of the user will be reset, and it's like starting fresh.                                                                                                                                   |

# Response parameters

| Parameter | Data Type | Description                            |
| --------- | --------- | -------------------------------------- |
| data      | Integer   | The unique identifier of the customer. |
| errors    | Array     | Errors during the API call, if any.    |
| warnings  | Array     | Warnings during the API call, if any.  |

```json
{
    "data": 345651201,
    "errors": null,
    "warnings": null
}
```

# API-specific errors

| Error code | Description                                                                     |
| :--------- | :------------------------------------------------------------------------------ |
| 310119     | User already enrolled for the target.                                           |
| 310011     | Invalid userId. Check if the customerId is valid.                               |
| 310019     | Target period not found. Check the target period ID to troubleshoot this error. |