---
title: Get customer details
excerpt: >-
  Retrieve details of a specific loyalty customer such as loyalty information,
  subscription status, 10 recent transactions, active coupons, recent store
  interactions, custom fields, extended fields, and customer’s unique id.
api:
  file: customer-v11.json
  operationId: get-customer-details-v1
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
> ❗️ Make sure you have the appropriate access control configured. For more information, see [access group documentation](https://docs.capillarytech.com/docs/access-group).

Retrieve details of a specific loyalty customer such as loyalty information, subscription status, 10 recent transactions, active coupons, recent store interactions, custom fields, extended fields, and customer’s unique ID. To fetch the details for customers in bulk, add the identification details separated by a comma.

<Note title="Note">
Use [V2 Get Customer Details (lookup) API](https://docs.capillarytech.com/reference/get-customer-details) to retrieve:

* Customer details across all the groups of the customer.
* Details of a specific user group.
* Account ID for sources with multiple accounts.
* Customer status details.
* Alternate currency details.
</Note>

# API endpoint

```Text For multiple customers at a time
curl --location 'https://eu.api.capillarytech.com.capillarytech.com/v1.1/customer/get?format=json&email=sai.ishina9%40gmail.com%2Csai.ishina95%40gmail.com%2C9478341389%40pixar.com' \
--header 'X-CAP-CLIENT-COUNTRYCODE: 1' \
--header 'Authorization: Basic cHVuLjAxOjIwMNiOTYyYWM1OTA3NWI5NjRiMDcxNTJkMjM0Yjcw'
```
```curl Single customer
curl --location 'https://eu.api.capillarytech.com/v1.1/customer/get?format=json&id=387020208%2C3879773' \
--header 'X-CAP-CLIENT-COUNTRYCODE: 1' \
--header 'Authorization: Basic cHVjAxOjIwMmNiOTYyYWM1OTA3NWI5NjRiMDcxNTJkMjM0Yjcw'
```

<br />

# Request Query Parameters

Any of the identifiers are mandatory.

<Table align={["left","left","left"]}>
  <thead>
    <tr>
      <th>
        Parameter
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
        id
      </td>

      <td>
        int
      </td>

      <td>
        Unique user ID of the customer whose details you want to fetch.
      </td>
    </tr>

    <tr>
      <td>
        email
      </td>

      <td>
        string
      </td>

      <td>
        Email ID of the customer.
      </td>
    </tr>

    <tr>
      <td>
        external\_id
      </td>

      <td>
        string
      </td>

      <td>
        External ID of the customer.
      </td>
    </tr>

    <tr>
      <td>
        card\_external\_id
      </td>

      <td>
        string
      </td>

      <td>
        External ID of the card associated with the customer.
      </td>
    </tr>

    <tr>
      <td>
        number
      </td>

      <td>
        int
      </td>

      <td>
        Unique transaction number that want to fetch.
      </td>
    </tr>

    <tr>
      <td>
        store\_code
      </td>

      <td>
        string
      </td>

      <td>
        Fetch the transactions of a specific store. Pass the store code.
      </td>
    </tr>

    <tr>
      <td>
        till\_code
      </td>

      <td>
        string
      </td>

      <td>
        Fetch the transactions of a specific TILL. Pass the respective TILL code.
      </td>
    </tr>

    <tr>
      <td>
        amount
      </td>

      <td>
        long
      </td>

      <td>
        Filter transactions of a specific amount.
      </td>
    </tr>

    <tr>
      <td>
        date
      </td>

      <td>
        date
      </td>

      <td>
        Filter transactions of a specific date. Pass the date in `YYYY-MM-DD` format.
      </td>
    </tr>

    <tr>
      <td>
        type
      </td>

      <td>
        string
      </td>

      <td>
        Filter transactions of a specific type. Values: `REGULAR`, `NOT_INTERESTED`, `RETURN`, `NOT_INTERESTED_RETURN`, `MIXED`, `NI_MIXED`, `ALL`. By default, shows regular transaction details.
      </td>
    </tr>

    <tr>
      <td>
        tenders
      </td>

      <td>
        boolean
      </td>

      <td>
        Pass `true` to retrieve transaction details.
      </td>
    </tr>

    <tr>
      <td>
        credit\_notes
      </td>

      <td>
        boolean
      </td>

      <td>
        Pass `true` to retrieve credit notes.
      </td>
    </tr>

    <tr>
      <td>
        user\_id
      </td>

      <td>
        boolean
      </td>

      <td>
        Pass `true` to retrieve unique ID of the customer in response.
      </td>
    </tr>

    <tr>
      <td>
        coupon\_limit
      </td>

      <td>
        int
      </td>

      <td>
        Limits the number of coupon interactions (issued, redeemed, and expired).
      </td>
    </tr>

    <tr>
      <td>
        coupon\_offset
      </td>

      <td>
        int
      </td>

      <td>
        Retrieves the next set of coupons according to the issuance sequence.
      </td>
    </tr>

    <tr>
      <td>
        coupon\_order\_by
      </td>

      <td>
        enum
      </td>

      <td>
        Determines the basis for ordering the coupon history. Possible values: `created_date` (default), `created_by`, `valid_till`.
      </td>
    </tr>

    <tr>
      <td>
        coupon\_sort\_order
      </td>

      <td>
        enum
      </td>

      <td>
        Orders coupons based on `coupon_order_by`. Values: `asc`, `desc` (default).
      </td>
    </tr>

    <tr>
      <td>
        next\_slab
      </td>

      <td>
        * <br />
      </td>

      <td>
        Returns details of the customer's next loyalty tier.
      </td>
    </tr>

    <tr>
      <td>
        slab\_history
      </td>

      <td>
        boolean
      </td>

      <td>
        Prerequisite: Set `mlp=true`. Returns loyalty tier change history.
      </td>
    </tr>

    <tr>
      <td>
        registered\_store
      </td>

      <td>
        * <br />
      </td>

      <td>
        Returns the store where the customer registered. Returned by default.
      </td>
    </tr>

    <tr>
      <td>
        registered\_till
      </td>

      <td>
        * <br />
      </td>

      <td>
        Returns the specific store-TILL where the customer registered. Returned by default.
      </td>
    </tr>

    <tr>
      <td>
        fraud\_details
      </td>

      <td>
        * <br />
      </td>

      <td>
        Returns the customer's fraud details. Returned by default.
      </td>
    </tr>

    <tr>
      <td>
        ndnc\_status
      </td>

      <td>
        * <br />
      </td>

      <td>
        Returns the NDNC/DND status of the customer’s mobile number.
      </td>
    </tr>

    <tr>
      <td>
        optin\_status
      </td>

      <td>
        * <br />
      </td>

      <td>
        Returns the services (SMS/email) the customer has opted in or out of.
      </td>
    </tr>

    <tr>
      <td>
        expiry\_schedule
      </td>

      <td>
        * <br />
      </td>

      <td>
        Returns summary of points expiry details.
      </td>
    </tr>

    <tr>
      <td>
        expired\_points
      </td>

      <td>
        * <br />
      </td>

      <td>
        Returns details of expired points.
      </td>
    </tr>

    <tr>
      <td>
        points\_summary
      </td>

      <td>
        * <br />
      </td>

      <td>
        Returns issuance and redemption history.
      </td>
    </tr>

    <tr>
      <td>
        promotion\_points
      </td>

      <td>
        * <br />
      </td>

      <td>
        Returns promotional points history. Max 1000 results.
      </td>
    </tr>

    <tr>
      <td>
        membership\_retention\_criteria
      </td>

      <td>
        * <br />
      </td>

      <td>
        Returns criteria set for membership or tier retention.
      </td>
    </tr>

    <tr>
      <td>
        tier\_upgrade\_criteria
      </td>

      <td>
        * <br />
      </td>

      <td>
        Returns tier upgrade criteria if applicable.
      </td>
    </tr>

    <tr>
      <td>
        mlp
      </td>

      <td>
        boolean
      </td>

      <td>
        Retrieves loyalty info for brands with multiple loyalty programs (MLP).
      </td>
    </tr>

    <tr>
      <td>
        gap\_to\_upgrade\_for
      </td>

      <td>
        int
      </td>

      <td>
        Prerequisite: `mlp=true`. Indicates what is needed to upgrade after N days.
      </td>
    </tr>

    <tr>
      <td>
        gap\_to\_renew\_for
      </td>

      <td>
        int
      </td>

      <td>
        Prerequisite: `mlp=true`. Indicates what is needed to renew after N days.
      </td>
    </tr>

    <tr>
      <td>
        user\_group
      </td>

      <td>
        * <br />
      </td>

      <td>
        Retrieves user group details if available.
      </td>
    </tr>

    <tr>
      <td>
        customer\_image
      </td>

      <td>
        * <br />
      </td>

      <td>
        Retrieves the customer’s profile image.
      </td>
    </tr>

    <tr>
      <td>
        transactions
      </td>

      <td>
        * <br />
      </td>

      <td>
        Retrieves transaction details.
      </td>
    </tr>

    <tr>
      <td>
        subscriptions
      </td>

      <td>
        * <br />
      </td>

      <td>
        Retrieves subscription details.
      </td>
    </tr>

    <tr>
      <td>
        segments
      </td>

      <td>
        * <br />
      </td>

      <td>
        Retrieves customer’s segment details.
      </td>
    </tr>

    <tr>
      <td>
        member\_care\_access
      </td>

      <td>
        * <br />
      </td>

      <td>
        For admin users, shows active customers near them.
      </td>
    </tr>

    <tr>
      <td>
        card\_details
      </td>

      <td>
        * <br />
      </td>

      <td>
        Retrieves all card details.
      </td>
    </tr>

    <tr>
      <td>
        delayed\_accrual
      </td>

      <td>
        * <br />
      </td>

      <td>

      </td>
    </tr>

    <tr>
      <td>
        coupon\_active
      </td>

      <td>
        * <br />
      </td>

      <td>

      </td>
    </tr>

    <tr>
      <td>
        basic
      </td>

      <td>
        * <br />
      </td>

      <td>

      </td>
    </tr>

    <tr>
      <td>
        program\_id
      </td>

      <td>
        int
      </td>

      <td>

      </td>
    </tr>

    <tr>
      <td>
        coupon\_offer
      </td>

      <td>
        int
      </td>

      <td>
        Default value is 0.
      </td>
    </tr>

    <tr>
      <td>
        coupon\_org\_entity\_type
      </td>

      <td>
        string
      </td>

      <td>

      </td>
    </tr>

    <tr>
      <td>
        coupon\_org\_entity\_value
      </td>

      <td>
        string
      </td>

      <td>

      </td>
    </tr>

    <tr>
      <td>
        coupon\_status
      </td>

      <td>
        string
      </td>

      <td>

      </td>
    </tr>

    <tr>
      <td>
        program\_summary
      </td>

      <td>
        boolean
      </td>

      <td>
        If enabled, retrieves the programs the customer is part of.
      </td>
    </tr>
  </tbody>
</Table>

Note: You can retrieve details of a customer using customer ID, email or external\_id.

> 📘
>
> If you attempt to retrieve data of any deleted customer after a successful PII deletion, you will receive the following response:
>
> ` "message": "Customer is deleted after PII delete request"`

# Additional Header

| Parameter | Description                                                                                                                                                                                        |
| :-------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| language  | Specify the ISO language code to get transaction level extended field details in your preferred language (other than English). For example, `zh` for Chinese, `id` for Indonesian, `ar` for Arabic |

# Response parameter

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
        status.success
      </td>

      <td>
        Indicates the success of the operation
      </td>
    </tr>

    <tr>
      <td>
        status.code
      </td>

      <td>
        The code representing the status of the operation
      </td>
    </tr>

    <tr>
      <td>
        status.message
      </td>

      <td>
        The message describing the status of the operation
      </td>
    </tr>

    <tr>
      <td>
        status.total
      </td>

      <td>
        The total count in the response
      </td>
    </tr>

    <tr>
      <td>
        status.success\_count
      </td>

      <td>
        The count of successful operations
      </td>
    </tr>

    <tr>
      <td>
        customer.firstname
      </td>

      <td>
        The first name of the customer
      </td>
    </tr>

    <tr>
      <td>
        customer.lastname
      </td>

      <td>
        The last name of the customer
      </td>
    </tr>

    <tr>
      <td>
        customer.mobile
      </td>

      <td>
        The mobile number of the customer
      </td>
    </tr>

    <tr>
      <td>
        customer.email
      </td>

      <td>
        The email address of the customer
      </td>
    </tr>

    <tr>
      <td>
        customer.external\_id
      </td>

      <td>
        An external identifier for the customer
      </td>
    </tr>

    <tr>
      <td>
        customer.lifetime\_points
      </td>

      <td>
        The total lifetime points accumulated by the customer
      </td>
    </tr>

    <tr>
      <td>
        customer.lifetime\_purchases
      </td>

      <td>
        The total lifetime purchases made by the customer
      </td>
    </tr>

    <tr>
      <td>
        customer.loyalty\_points
      </td>

      <td>
        The current loyalty points of the customer
      </td>
    </tr>

    <tr>
      <td>
        customer.current\_slab
      </td>

      <td>
        The current slab of the customer in the loyalty program
      </td>
    </tr>

    <tr>
      <td>
        customer.registered\_on
      </td>

      <td>
        The date and time when the customer registered
      </td>
    </tr>

    <tr>
      <td>
        customer.updated\_on
      </td>

      <td>
        The date and time when the customer's information was last updated
      </td>
    </tr>

    <tr>
      <td>
        customer.type
      </td>

      <td>
        The type of customer
      </td>
    </tr>

    <tr>
      <td>
        customer.source
      </td>

      <td>
        The source through which the customer was acquired
      </td>
    </tr>

    <tr>
      <td>
        customer.registered\_by
      </td>

      <td>
        The individual who registered the customer
      </td>
    </tr>

    <tr>
      <td>
        registered\_store.code
      </td>

      <td>
        The code of the store where the customer was registered
      </td>
    </tr>

    <tr>
      <td>
        registered\_store.name
      </td>

      <td>
        The name of the store where the customer was registered
      </td>
    </tr>

    <tr>
      <td>
        registered\_till.code
      </td>

      <td>
        The code of the till used to register the customer
      </td>
    </tr>

    <tr>
      <td>
        registered\_till.name
      </td>

      <td>
        The name of the till used to register the customer
      </td>
    </tr>

    <tr>
      <td>
        fraud\_details.status
      </td>

      <td>
        The fraud status of the customer
      </td>
    </tr>

    <tr>
      <td>
        extended\_fields.field (gender)
      </td>

      <td>
        The gender of the customer
      </td>
    </tr>

    <tr>
      <td>
        extended\_fields.field (city)
      </td>

      <td>
        The city where the customer resides
      </td>
    </tr>

    <tr>
      <td>
        extended\_fields.field (dob)
      </td>

      <td>
        The date of birth of the customer
      </td>
    </tr>

    <tr>
      <td>
        item\_status.success
      </td>

      <td>
        Indicates the success of the customer item operation
      </td>
    </tr>

    <tr>
      <td>
        item\_status.code
      </td>

      <td>
        The code representing the status of the customer item operation
      </td>
    </tr>

    <tr>
      <td>
        item\_status.message
      </td>

      <td>
        The message describing the status of the customer item operation
      </td>
    </tr>

    <tr>
      <td>
        programs\_list
      </td>

      <td>
        Includes the list of programs the customer is associated with. This will be available only if `program_summary` is set to `true`.
      </td>
    </tr>

    <tr>
      <td>
        program
      </td>

      <td>
        Includes the details of the program such as program ID, program name, program description and more.
      </td>
    </tr>

    <tr>
      <td>
        slab\_history
      </td>

      <td>
        Includes details of tier/slab change events. Each object in the array represents a single instance of a slab (tier) upgrade or change, with the most recent change typically listed first.
      </td>
    </tr>

    <tr>
      <td>
        -to
      </td>

      <td>
        The slab to which the user got upgraded or downgraded.
      </td>
    </tr>

    <tr>
      <td>
        -from
      </td>

      <td>
        The slab from which the user got upgraded or downgraded.
      </td>
    </tr>

    <tr>
      <td>
        -store
      </td>

      <td>
        Associated store details.
      </td>
    </tr>

    <tr>
      <td>
        * type
      </td>

      <td>
        Type of slab change. Downgrade or Upgrade.
      </td>
    </tr>

    <tr>
      <td>
        -to\_tier\_expiry\_date
      </td>

      <td>
        Expiry date of the tier to which the customer has moved, in `YYYY-MM-DD HH:MM:SS` format.
      </td>
    </tr>

    <tr>
      <td>
        -from\_tier\_expiry\_date
      </td>

      <td>
        Expiry date of the customer's previous tier, before the tier change occurred, in `YYYY-MM-DD HH:MM:SS` format.
      </td>
    </tr>

    <tr>
      <td>
        -changed\_on
      </td>

      <td>
        The date on which slab was changed, in `YYYY-MM-DD HH:MM:SS` format.
      </td>
    </tr>

    <tr>
      <td>
        -notes
      </td>

      <td>
        Additional notes, if any.
      </td>
    </tr>

    <tr>
      <td>
        -program\_id
      </td>

      <td>
        Associated loyalty program ID.
      </td>
    </tr>

    <tr>
      <td>
        points\_summaries
      </td>

      <td>
        Array containing the details of the loyalty points.
      </td>
    </tr>

    <tr>
      <td>
        -points\_summary
      </td>

      <td>
        A list of individual points summaries.
      </td>
    </tr>

    <tr>
      <td>
        \--programId
      </td>

      <td>
        Unique ID of the loyalty program associated with the points summary.
      </td>
    </tr>

    <tr>
      <td>
        \--redeemed
      </td>

      <td>
        Number of points redeemed by the customer in the program.
      </td>
    </tr>

    <tr>
      <td>
        \--expired
      </td>

      <td>
        Number of points that have expired in the program.
      </td>
    </tr>

    <tr>
      <td>
        \--returned
      </td>

      <td>
        Number of points that were initially issued but later reversed or returned to the customer’s account due to specific actions, such as product returns.
      </td>
    </tr>

    <tr>
      <td>
        \--adjusted
      </td>

      <td>
        Points that are either credited to or debited from the customer account in adjustments. The value will be negative if debited points are more than credited, and positive if credited points are more than debited.
      </td>
    </tr>

    <tr>
      <td>
        \--lifetimePoints
      </td>

      <td>
        Total loyalty points earned by the customer to date.
      </td>
    </tr>

    <tr>
      <td>
        \--loyaltyPoints
      </td>

      <td>
        Current loyalty points available for use.
      </td>
    </tr>

    <tr>
      <td>
        \--cumulativePurchases
      </td>

      <td>
        Total purchase amount of the customer, associated with the current loyalty program.
      </td>
    </tr>

    <tr>
      <td>
        \--currentSlab
      </td>

      <td>
        Current tier of the customer in the loyalty program.
      </td>
    </tr>

    <tr>
      <td>
        \--currentSlabDescription
      </td>

      <td>
        Description of the current tier as saved in the loyalty program.
      </td>
    </tr>

    <tr>
      <td>
        \--nextSlab
      </td>

      <td>
        Next slab or tier to which the customer can upgrade to.
      </td>
    </tr>

    <tr>
      <td>
        \--nextSlabSerialNumber
      </td>

      <td>
        Serial number of the next tier. The lowest tier will have 1, succeeding tier will have 2 and so on.
      </td>
    </tr>

    <tr>
      <td>
        \--nextSlabDescription
      </td>

      <td>
        Description of the next tier as saved in the loyalty program.
      </td>
    </tr>

    <tr>
      <td>
        \--slabSNo
      </td>

      <td>
        Serial number of the current tier of the customer. The lowest tier will have 1, succeeding tier will have 2 and so on.
      </td>
    </tr>

    <tr>
      <td>
        \--slabExpiryDate
      </td>

      <td>
        Expiry date of the current loyalty tier of the customer in ISO `YYYY-MM-DD HH:MM:SS` format.
      </td>
    </tr>

    <tr>
      <td>
        \--totalPoints
      </td>

      <td>
        Total points earned by the customer in a loyalty program.
      </td>
    </tr>

    <tr>
      <td>
        \--delayed\_points
      </td>

      <td>
        Points issued to customers at a later date from issual. For more information on delayed points, refer to the [Points Delayed Accrual](https://docs.capillarytech.com/docs/points#configure-points-delayed-accrual) documentation.
      </td>
    </tr>

    <tr>
      <td>
        \--delayed\_returned\_points
      </td>

      <td>
        Delayed points that were reversed or returned to the customer’s account due to specific actions, such as product returns.
      </td>
    </tr>

    <tr>
      <td>
        \--total\_available\_points
      </td>

      <td>
        Total points available for redemption.
      </td>
    </tr>

    <tr>
      <td>
        \--total\_returned\_points
      </td>

      <td>
        Total points that were initially issued but later reversed or returned to the customer’s account due to specific actions, such as product returns.
      </td>
    </tr>

    <tr>
      <td>
        \--program\_title
      </td>

      <td>
        Title of the loyalty program.
      </td>
    </tr>

    <tr>
      <td>
        \--program\_description
      </td>

      <td>
        Description of the loyalty program.
      </td>
    </tr>

    <tr>
      <td>
        \--program\_points\_to\_currency\_ratio
      </td>

      <td>
        Ratio of points to currency. It indicates how many points are equivalent to one unit of currency.
      </td>
    </tr>

    <tr>
      <td>
        \--linked\_partner\_programs
      </td>

      <td>
        Details of linked [partner programs](https://docs.capillarytech.com/reference/partner-program).
      </td>
    </tr>

    <tr>
      <td>
        \---linked\_partner\_program
      </td>

      <td>
        A list of linked partner programs, if any.
      </td>
    </tr>

    <tr>
      <td>
        \--gap\_to\_upgrade
      </td>

      <td>
        Gap to upgrade to the next slab. It is the additional purchases, points, visits, or tracker value required for a customer to upgrade to the next tier.
      </td>
    </tr>

    <tr>
      <td>
        \---custom\_expression
      </td>

      <td>
        Logical condition that defines the criteria for upgrade. **Example:** `((A AND B) OR C)`\
        A and B must both be true, OR C alone must be true for the condition to be satisfied.
        Example usage: If A = Total Purchases > 5000, B = Visits > 3, and C = Points Earned > 2000, the customer qualifies for an upgrade if they either:
        Made purchases > 5000 and visit more than 3 times, or
        Earned more than 2000 points.
        Visible only if custom expression is set.
        For more information on custom conditions, refer to the [Tier Upgrade](https://docs.capillarytech.com/docs/tier-upgrade#3-custom-condition) documentation.
      </td>
    </tr>

    <tr>
      <td>
        \---expression\_relation
      </td>

      <td>
        Structured representation of the conditions in the custom\_expression. **Example:** `[[1, 2], 3]`\
        Visible only if custom expression is set.
      </td>
    </tr>

    <tr>
      <td>
        \---upgrade\_strategy
      </td>

      <td>
        Provides the set of rules or conditions that defines how a customer progresses to a higher tier in a loyalty program.
      </td>
    </tr>

    <tr>
      <td>
        \----upgrade\_based\_on
      </td>

      <td>
        Parameter using which the [upgrade condition](https://docs.capillarytech.com/docs/tier-upgrade) is determined. **Example:** `CUMULATIVE_PURCHASES`; `TRACKER_VALUE_BASED`, `CURRENT_POINTS`
      </td>
    </tr>

    <tr>
      <td>
        \----upgrade\_entity\_identifers
      </td>

      <td>
        Array containing details of the tracker, if any. Visible in case of [tracker based upgrade](https://docs.capillarytech.com/docs/tier-upgrade#4-trackers).
      </td>
    </tr>

    <tr>
      <td>
        \-----tracker\_name
      </td>

      <td>
        Name of the tracker. **Example:** `amountTracker`
      </td>
    </tr>

    <tr>
      <td>
        \-----tracker\_type
      </td>

      <td>
        Entity tracked, such as transaction amount, line-item count, or customer visits. **Example:** `BILL_AMOUNT`
      </td>
    </tr>

    <tr>
      <td>
        \-----tracker\_mode
      </td>

      <td>
        Method used to evaluate tracker values over time, **Example:** `MOVING_WINDOW`, `CYCLIC_WINDOW`, `CALENDAR_BASED_CYCLIC_WINDOW`, or `TIER_CHANGE_WINDOW`.
      </td>
    </tr>

    <tr>
      <td>
        \-----tracker\_case\_name
      </td>

      <td>
        Name of the specific tracker case. **Example:** `amtTrack`.
      </td>
    </tr>

    <tr>
      <td>
        \-----tracker\_case\_period\_type
      </td>

      <td>
        Specifies the duration type for evaluating the tracker case, such as days, months, or calendar cycles. **Example:** `DAYS`
      </td>
    </tr>

    <tr>
      <td>
        \-----tracker\_case\_period\_value
      </td>

      <td>
        Value of the tracker case period. **Example:** `30`
      </td>
    </tr>

    <tr>
      <td>
        \----upgrade\_threshold
      </td>

      <td>
        Threshold value required for an upgrade. **Example:** `10000` points.
      </td>
    </tr>

    <tr>
      <td>
        \----customer\_upgrade\_entity\_values
      </td>

      <td>
        Array containing the current values related to the customer’s upgrade.
      </td>
    </tr>

    <tr>
      <td>
        \-----current\_value
      </td>

      <td>
        Current value attained by the customer. **Example:** `9786` points.
      </td>
    </tr>

    <tr>
      <td>
        \-----gap\_to\_upgrade
      </td>

      <td>
        Additional value required for the upgrade. **Example:** `15214` points (threshold value minus current value)
      </td>
    </tr>

    <tr>
      <td>
        \-----value\_valid\_upto
      </td>

      <td>
        Date until which the value is valid, in `YYYY-MM-DD` format. **Example:** `2025-05-06`.
      </td>
    </tr>

    <tr>
      <td>
        \--gap\_to\_renew
      </td>

      <td>
        Set of rules or conditions required for tier renewal for the customer in a loyalty program.
      </td>
    </tr>

    <tr>
      <td>
        \---tier\_expiry\_date
      </td>

      <td>
        Expiry date of the customer’s current tier, in `YYYY-MM-DD` format. **Example:** `2024-12-31`.
      </td>
    </tr>

    <tr>
      <td>
        \---renew\_confirmed
      </td>

      <td>
        Indicates if the tier renewal is confirmed. **Values:** `true` or `false`.
      </td>
    </tr>

    <tr>
      <td>
        \---custom\_expression
      </td>

      <td>
        Logical condition that defines the criteria for renewal. **Example:** `((A AND B) OR C)`\
        A and B must both be true, OR C alone must be true for the condition to be satisfied.
        Example usage: If A = Total Purchases > 5000, B = Visits > 3, and C = Points Earned > 2000, the customer qualifies for an upgrade if they either:
        Made purchases > 5000 and visited more than 3 times, or
        Earned more than 2000 points.
        Visible only if custom expression is set.
        For more information on custom conditions, refer to the [Tier Renewal](https://docs.capillarytech.com/docs/tier-downgrade-renewal) documentation.
      </td>
    </tr>

    <tr>
      <td>
        \---expression\_relation
      </td>

      <td>
        Structured representation of the conditions in the custom\_expression. **Example:** `[[1, 2], 3]`\
        Visible only if custom expression is set.
      </td>
    </tr>

    <tr>
      <td>
        \---renew\_strategy
      </td>

      <td>
        Array containing details of the rules or conditions for tier renewal.
      </td>
    </tr>

    <tr>
      <td>
        \----renew\_based\_on
      </td>

      <td>
        Specifies the [renewal strategy](https://docs.capillarytech.com/docs/tier-downgrade-renewal). **Example:** `VISITS`, `PURCHASE`, `POINTS`, or `TRACKER`.
      </td>
    </tr>

    <tr>
      <td>
        \----renew\_entity\_identifiers
      </td>

      <td>
        Array containing details of the tracker. Visible in case of [tracker based renewal](https://docs.capillarytech.com/docs/tier-downgrade-renewal#4-trackers).
      </td>
    </tr>

    <tr>
      <td>
        \----renew\_threshold
      </td>

      <td>
        Threshold value required by the customer to renew the tier. **Example:** `5.0` for store visits, `10` for purchases.
      </td>
    </tr>

    <tr>
      <td>
        \----customer\_renew\_entity\_value
      </td>

      <td>
        Current value reached by the customer. **Example:** `1` store visit or `123` points
      </td>
    </tr>

    <tr>
      <td>
        \----customer\_gap\_to\_renew\_value
      </td>

      <td>
        Additional value required for the tier renewal. **Example:** `4` store visits, `10` purchases or `1877` points.
      </td>
    </tr>
  </tbody>
</Table>