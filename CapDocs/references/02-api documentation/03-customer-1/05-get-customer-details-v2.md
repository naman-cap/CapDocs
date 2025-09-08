---
title: Get Customer Details
excerpt: >-
  Retrieves the details of a customer from a specific source. Use `embed` to
  other parameters to fetch specific details required.
api:
  file: v2.json
  operationId: get-customer-details-
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
Retrieves details of a specific customer such as:

* Profile information – first name, last name, registered date, registered at TILL
* Recent profile updated – details of the recent update in profile information
* Registered identifiers, communication channels
* Loyalty information – loyalty status, registered date, purchases, etc.
* Multiple Loyalty Program details: Program wise details if the org has multiple loyalty programs support
* Customer image

To fetch customer details from a specific account of a source (source with multiple accounts), you need to provide the respective account id.

> 📘 If you attempt to retrieve data of any deleted customer after a successful PII deletion, you will receive the following response:
>
> ` "message": "Customer is deleted after PII delete request"`

# API endpoint

\{host}/v2//customers/\{customerId}/\{queryparameters}

# Query parameters

<Table>
  <thead>
    <tr>
      <th>
        Parameter




        (Parameters marked with 

        \*

         are mandatory)
      </th>

      <th>
        Type
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        source\*
      </td>

      <td>
        Enum INSTORE, MARTJACK, WECHAT, LINE, ALL
      </td>

      <td>
        Specifies the source of the customer details to be retrieved.
      </td>
    </tr>

    <tr>
      <td>
        accountId
      </td>

      <td>
        String
      </td>

      <td>
        Unique identifier for the account.
      </td>
    </tr>

    <tr>
      <td>
        embed
      </td>

      <td>
        Array of String
      </td>

      <td>
        Details to include in the response. Supported values: `points`, `subscriptions`, `mlp`, `userGroup`, `gapDetails`, `promotionalPoints`, `expirySchedules`, `expiredPoints`, `customerImage`, `returnedPoints`, `associatedImages`, `segments`.  

        * \*Note:\*\* The associated images parameter retrieves the barcode image details associated with the customer.
      </td>
    </tr>

    <tr>
      <td>
        includedAllUserGroup2
      </td>

      <td>
        Boolean (false)
      </td>

      <td>
        Pass `true` to see the customer details in all user groups.
      </td>
    </tr>

    <tr>
      <td>
        userGroup2Id
      </td>

      <td>
        Long
      </td>

      <td>
        Unique ID of the user group to fetch customer details from.
      </td>
    </tr>

    <tr>
      <td>
        includedUserGroup2LoyaltyDetails
      </td>

      <td>
        Boolean (false)
      </td>

      <td>
        Pass `true` to include loyalty details of user groups.
      </td>
    </tr>

    <tr>
      <td>
        includedFraudDetails
      </td>

      <td>
        Boolean (false)
      </td>

      <td>
        Pass `true` to include fraud details of the customer in the response.
      </td>
    </tr>

    <tr>
      <td>
        includedOnlyCurrentProfile
      </td>

      <td>
        Boolean (false)
      </td>

      <td>
        Pass `true` to fetch details of the current source and hide information from other sources.
      </td>
    </tr>

    <tr>
      <td>
        ug2JoinedStartDate
      </td>

      <td>
        DateTime
      </td>

      <td>
        Start date for filtering customers who joined user groups.
      </td>
    </tr>

    <tr>
      <td>
        ug2JoinedEndDate
      </td>

      <td>
        DateTime
      </td>

      <td>
        End date for filtering customers who joined user groups.
      </td>
    </tr>

    <tr>
      <td>
        ug2Offset
      </td>

      <td>
        Integer
      </td>

      <td>
        Specifies the offset for pagination of user group results.
      </td>
    </tr>

    <tr>
      <td>
        ug2Limit
      </td>

      <td>
        Integer
      </td>

      <td>
        Sets the maximum number of results to retrieve per page for user groups.
      </td>
    </tr>

    <tr>
      <td>
        ug2SortBy
      </td>

      <td>
        String (JoinedDate)
      </td>

      <td>
        Specifies the field by which the user group results should be sorted.
      </td>
    </tr>

    <tr>
      <td>
        ug2SortOrder
      </td>

      <td>
        Enum ASC, DESC \(DESC)
      </td>

      <td>
        Specifies the sorting order for the user group results.
      </td>
    </tr>

    <tr>
      <td>
        ug2PaginationDetails
      </td>

      <td>
        Boolean
      </td>

      <td>
        Pass `true` to include pagination details for user groups.
      </td>
    </tr>

    <tr>
      <td>
        gapToUpgrade
      </td>

      <td>
        Integer
      </td>

      <td>
        * \*Prerequisite:**Set`embed=MLP` to retrieve the details.\
          The `gapToUpgrade` parameter retrieves the details of the additional purchases, points, visits, or tracker value required for a customer to upgrade to the next tier. It calculates this based on a specified number of days from the current date.\&#xA;**&#x53;upported values:\*\*\
          0: Retrieves the gap for the current day.\
          1: Calculates the gap for the next day.\
          30: Projects the gap 30 days from the current day.\
            Negative values are not supported.
      </td>
    </tr>

    <tr>
      <td>
        gapToRenew
      </td>

      <td>
        Integer
      </td>

      <td>
        * \*Prerequisite:**Set`embed=mlp` to retrieve the details.\
          Thie `gapToRenew` parameter retrieves the additional purchases, visits, points, or tracker value required for a customer to renew their tier after a specified number of days from the current date. **&#x53;upported values:\*\*:\
            

        0: Retrieves the renewal value for the current day.\
        1: Calculates the renewal value for the next day.\
        30: Projects the renewal value 30 days from the current day.\
        Negative values are not supported.  

        * \*Note:\*\* If the customer is in the base slab, this block will not be displayed.
      </td>
    </tr>
  </tbody>
</Table>

# Response parameters

<Table>
  <thead>
    <tr>
      <th>
        Parameter
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        id
      </td>

      <td>
        Unique identifier for the customer.
      </td>
    </tr>

    <tr>
      <td>
        profiles
      </td>

      <td>
        List of customer profiles containing various details such as name, attribution, identifiers, communication channels, source, etc.
      </td>
    </tr>

    <tr>
      <td>
        loyaltyInfo
      </td>

      <td>
        Information related to the customer's loyalty, including loyalty type, attribution, and lifetime purchases.
      </td>
    </tr>

    <tr>
      <td>
        segments
      </td>

      <td>
        Object containing the segment and partition names.  

        * \*Example\*\*: "Activity segment": "Lapsed".  Here, the Segment name is Activity segment,  Partition value is Lapsed. Meaning: The customer is classified as "Lapsed" in the "Activity segment" category, indicating that they have not been active for a certain period.
      </td>
    </tr>

    <tr>
      <td>
        associatedWith
      </td>

      <td>
        Code identifying the association of the customer (e.g., till code).
      </td>
    </tr>

    <tr>
      <td>
        ug2Pagination
      </td>

      <td>
        Pagination details for user group results related to the customer.
      </td>
    </tr>

    <tr>
      <td>
        extendedFields
      </td>

      <td>
        Additional extended fields associated with the customer, such as city and gender.
      </td>
    </tr>

    <tr>
      <td>
        cardDetails
      </td>

      <td>
        Details of the card owned by the customer, including card ID, issued date, expiry date, series information, status, and more.
      </td>
    </tr>

    <tr>
      <td>
        warnings
      </td>

      <td>
        List of warnings related to the response.
      </td>
    </tr>

    <tr>
      <td>
        upgradeStrategies
      </td>

      <td>
        Provides the set of rules or conditions that defines how a customer progresses to a higher tier in a loyalty program.
      </td>
    </tr>

    <tr>
      <td>
        \-upgrade\_based\_on
      </td>

      <td>
        Parameter using which the [upgrade condition](https://docs.capillarytech.com/docs/tier-upgrade) is determined. **Example:** `CUMULATIVE_PURCHASES`; `TRACKER_VALUE_BASED`, `CURRENT_POINTS`
      </td>
    </tr>

    <tr>
      <td>
        \-upgradeThreshold
      </td>

      <td>
        Threshold value required for an upgrade. **Example:** `25000` points.
      </td>
    </tr>

    <tr>
      <td>
        \-customerUpgradeEntityValues
      </td>

      <td>
        Current values related to the customer’s upgrade.
      </td>
    </tr>

    <tr>
      <td>
        \--currentValue
      </td>

      <td>
        Current value attained by the customer. **Example:** `9786` points.
      </td>
    </tr>

    <tr>
      <td>
        \--gapToUpgrade
      </td>

      <td>
        Additional value required for the upgrade. **Example:** `15214` points (threshold value - current value)
      </td>
    </tr>

    <tr>
      <td>
        \--valueValidUpto
      </td>

      <td>
        Date untill which the value is valid, in YYYY-MM-DD format. **Example:** 2025-05-06.
      </td>
    </tr>

    <tr>
      <td>
        gapToRenewSummary
      </td>

      <td>
        Set of rules or conditions required for tier renewal for the customer in a loyalty program.  

        * \*Note:\*\* If the customer is in the base slab, this block will not be displayed.
      </td>
    </tr>

    <tr>
      <td>
        \-tierExpiryDate
      </td>

      <td>
        Expiry date of the current tier, in YYYY-MM-DD format. **Example:** 2024-12-31.
      </td>
    </tr>

    <tr>
      <td>
        \-renewConfirmed
      </td>

      <td>
        Indicates if the tier renewal is confirmed. **Values:** `true` or `false`.
      </td>
    </tr>

    <tr>
      <td>
        \-renewStrategies
      </td>

      <td>
        Array containing details of the rules or conditions for tier renewal.
      </td>
    </tr>

    <tr>
      <td>
        \--renewBasedOn
      </td>

      <td>
        Specifies the [renewal strategy](https://docs.capillarytech.com/docs/tier-downgrade-renewal). **Example:** `VISITS`, `PURCHASE`, `POINTS`, or `TRACKER`.
      </td>
    </tr>

    <tr>
      <td>
        \--trackerEntityIdentifiers
      </td>

      <td>
        Array containing details of the tracker. Visible in case of [tracker based renewal](https://docs.capillarytech.com/docs/tier-downgrade-renewal#4-trackers).  
      </td>
    </tr>

    <tr>
      <td>
        \---trackerName
      </td>

      <td>
        Name of the tracker. **Example:** `DowngradeTracker`
      </td>
    </tr>

    <tr>
      <td>
        \---trackerType
      </td>

      <td>
        Entity tracked, such as transaction amount, line-item count, or customer visits. **Example:** `LINEITEM_COUNT`
      </td>
    </tr>

    <tr>
      <td>
        \---trackerMode
      </td>

      <td>
        Method used to [evaluate tracker values over time](https://docs.capillarytech.com/docs/trackers#creating-trackers), **Example:** `MOVING_WINDOW`, `CYCLIC_WINDOW`, `CALENDAR_BASED_CYCLIC_WINDOW`, or `TIER_CHANGE_WINDOW`.
      </td>
    </tr>

    <tr>
      <td>
        \---trackerCaseName
      </td>

      <td>
        Name of the specific tracker case. **Example:** Case1.
      </td>
    </tr>

    <tr>
      <td>
        \---trackerCasePeriodType
      </td>

      <td>
        Specifies the duration type for evaluating the tracker case, such as days, months, or calendar cycles. **Example:** `DAYS`
      </td>
    </tr>

    <tr>
      <td>
        \---trackerCasePeriodValue
      </td>

      <td>
        Value of the tracker case period. **Example:** `5` days.
      </td>
    </tr>

    <tr>
      <td>
        \--renewThreshold
      </td>

      <td>
        Threshold value required by the customer to renew the tier. **Example:** `5.0` for store visits, `10` for purchases.
      </td>
    </tr>

    <tr>
      <td>
        \--customerRenewEntityValue
      </td>

      <td>
        Current value reached by the customer. **Example:** `1` store visit or `123` points
      </td>
    </tr>

    <tr>
      <td>
        \--customerGapToRenewValue
      </td>

      <td>
        Additional value required for the tier renewal. **Example:** `4` store visits, `10` purchases or `1877` points.
      </td>
    </tr>
  </tbody>
</Table>

<Note title="Note">
Retrieving Customers transaction data in bulk is NOT supported in this API.
</Note>

## API specific Error Code

| Error Code | Description                     | Reason                       |
| :--------- | :------------------------------ | :--------------------------- |
| 400        | Bad Request with Blank response | Not passed valid identifiers |