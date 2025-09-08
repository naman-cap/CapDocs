---
title: 'Profile: Current User Group'
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
User Groups in Capillary represent collections of users (customers or contributors) grouped together for participating in group-based loyalty programs or business engagements, particularly useful for B2B and B2C loyalty scenarios.

This profile allows you to write conditions based on the properties of the user group that is currently involved in the activity.

## Attributes - Group Identity

*The below grouping of attributes is based on user group identity information.*

| Attributes  | Definition                            | Link                                                                                                 |
| :---------- | :------------------------------------ | :--------------------------------------------------------------------------------------------------- |
| name        | User Group's Name.                    | [Learn More](https://docs.capillarytech.com/docs/attributes-group-identity#name)                     |
| externalId  | User Group's External ID.             | [Learn More](https://docs.capillarytech.com/docs/attributes-group-identity#external-id-externalid)   |
| createdDate | Date when the user group was created. | [Learn More](https://docs.capillarytech.com/docs/attributes-group-identity#created-date-createddate) |

## Attributes - Group Membership

*The below grouping of attributes is based on user group membership information.*

| Attributes  | Definition                                 | Link                                                                                      |
| :---------- | :----------------------------------------- | :---------------------------------------------------------------------------------------- |
| memberCount | Total number of members in the user group. | [Learn More](https://docs.capillarytech.com/docs/group-membership-attributes#membercount) |

## Attributes - KPI based on Points

*The below grouping of attributes is based on the Key Performance Indicators on user group's points.*

| Attributes                  | Definition                                                                  | Link                                                                                              |
| :-------------------------- | :-------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------ |
| currentPoints               | User Group's current redeemable points.                                     | [Learn More](https://docs.capillarytech.com/docs/kpi-based-on-points#currentpoints)               |
| initialCurrentPoints        | User Group's current redeemable points before evaluating the event.         | [Learn More](https://docs.capillarytech.com/docs/kpi-based-on-points#initialcurrentpoints)        |
| currentAllPoints            | The sum of all Points, redeemable as well as Promised Points for the group. | [Learn More](https://docs.capillarytech.com/docs/kpi-based-on-points#currentallpoints)            |
| initialCurrentAllPoints     | The sum of all Points before evaluating the event.                          | [Learn More](https://docs.capillarytech.com/docs/kpi-based-on-points#initialcurrentallpoints)     |
| currentNonRedeemablePoints  | User Group's current non-redeemable points.                                 | [Learn More](https://docs.capillarytech.com/docs/kpi-based-on-points#currentnonredeemablepoints)  |
| lifetimePoints              | Total points earned by the user group from the date of creation.            | [Learn More](https://docs.capillarytech.com/docs/kpi-based-on-points#lifetimepoints)              |
| lifetimeAllPoints           | The sum of lifetimePoints and lifetimeNonRedeemablePoints for the group.    | [Learn More](https://docs.capillarytech.com/docs/kpi-based-on-points#lifetimeallpoints)           |
| lifetimeNonRedeemablePoints | Total non-redeemable points earned by the user group from date of creation. | [Learn More](https://docs.capillarytech.com/docs/kpi-based-on-points#lifetimenonredeemablepoints) |
| initialLifetimePoints       | User Group's lifetime redeemable points before the current event.           | [Learn More](https://docs.capillarytech.com/docs/kpi-based-on-points#initiallifetimepoints)       |

## Attributes - KPI based on transaction data

*The below grouping is done based on the Key Performance Indicators on the user group's transaction data.*

| Attributes              | Definition                                                                      | Link                                                                                                              |
| :---------------------- | :------------------------------------------------------------------------------ | :---------------------------------------------------------------------------------------------------------------- |
| numberOfTxns            | Number of transactions since the creation date of the user group.               | [Learn More](https://docs.capillarytech.com/docs/attributes-kpis-user-group-transactions#numberoftxns)            |
| numberOfTxnsToday       | Number of transactions made by the user group on the current day.               | [Learn More](https://docs.capillarytech.com/docs/attributes-kpis-user-group-transactions#numberoftxnstoday)       |
| numberOfVisits          | Number of unique days when the user group made transactions.                    | [Learn More](https://docs.capillarytech.com/docs/attributes-kpis-user-group-transactions#numberofvisits)          |
| lifetimePurchase        | User Group's purchases since creation including current transaction's purchase. | [Learn More](https://docs.capillarytech.com/docs/attributes-kpis-user-group-transactions#lifetimepurchase)        |
| initialLifetimePurchase | User Group's purchase since creation before current transaction's purchase.     | [Learn More](https://docs.capillarytech.com/docs/attributes-kpis-user-group-transactions#initiallifetimepurchase) |

## Attributes - Slab Information

*This grouping of attributes is done on the basis of Tier/Slab Information associated with the user group's loyalty.*

| Attributes        | Definition                                                        | Link                                                                                                   |
| :---------------- | :---------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------- |
| initialSlabName   | Initial slab name of the User Group before evaluating an event.   | [Learn More](https://docs.capillarytech.com/docs/attributes-kpi-user-group-slabtier#initialslabname)   |
| initialSlabNumber | Initial slab number of the User Group before evaluating an event. | [Learn More](https://docs.capillarytech.com/docs/attributes-kpi-user-group-slabtier#initialslabnumber) |
| slabName          | User Group's current tier name.                                   | [Learn More](https://docs.capillarytech.com/docs/attributes-kpi-user-group-slabtier#slabname)          |
| slabNumber        | Current User Group slab number (e.g., 10, 1, 3, etc.).            | [Learn More](https://docs.capillarytech.com/docs/attributes-kpi-user-group-slabtier#slabnumber)        |
| slabChangeDate    | Date when the user group's slab was last changed.                 | [Learn More](https://docs.capillarytech.com/docs/attributes-kpi-user-group-slabtier#slabchangedate)    |
| slabExpiryDate    | Date when the user group's current slab will expire.              | [Learn More](https://docs.capillarytech.com/docs/attributes-kpi-user-group-slabtier#slabexpirydate)    |

## Attributes - Extended Fields

*The below grouping of attributes is based on extended fields configured at the organization level for user groups.*

| Attributes                 | Definition                                                                                                                                                                                                           |
| :------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| extField*ug*`extfieldname` | Access extended field values for the user group. Replace "extfieldname" with the actual extended field name configured for your organization (e.g., extField\_ug\_primary\_user, extField\_ug\_registration\_date"). |