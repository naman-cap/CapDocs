---
title: Loyalty Based Filters
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
## Active points

This filter lets you build audience group with customers with specific number of active points in their account.  Active points are points that are available for redemption.

<Table align={["left","left"]}>
  <thead>
    <tr>
      <th>
        Filter
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Points range\*
      </td>

      <td>
        You can get customers having current points in a specific range.

        You can either include or exclude a given condition.

        You can select the points range using the operators *Greater than equal*, *Less than equal*, *Equals*, and *In the range of* (this also considers the minimum and maximum points mentioned).
      </td>
    </tr>
  </tbody>
</Table>

## Expired points

This filter lets you build audience group based on the number of points expired from their account.

<Note title="Note">
To use optional parameters, click **+/- Fields**.
</Note>

<Table align={["left","left"]}>
  <thead>
    <tr>
      <th>
        Filter
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Points range\*
      </td>

      <td>
        You can get the customers having expired points in a specific range.
        You can either include or exclude a given condition.
        You can select the points range from (minimum to maximum promotions) using the operators Greater than equal, Less than equal, Greater than Equals, and in the range of.
      </td>
    </tr>

    <tr>
      <td>
        Duration
      </td>

      <td>
        You can further filter by points expired in a specific period. For example, get customers whose points (at least 50) were expired in the previous month.

        You can choose duration either by [Specific dates](https://docs.capillarytech.com/docs/common-filter-optionsin-filters#/specific-dates) or [Relative days](https://docs.capillarytech.com/docs/common-filter-optionsin-filters#/relative-days).
      </td>
    </tr>

    <tr>
      <td>
        Promotion name
      </td>

      <td>
        You can further filter the specified range of expired points of a specific promotion. You can also choose multiple promotions to get customers based on the expired points of selected promotions.

        Click **+/- Fields** > **Check Promotion Name** > You will see the promotion name drop-down box. Select desired promotions from the available list.
      </td>
    </tr>
  </tbody>
</Table>

## Lifetime points

This lets you build audience group based on the total points earned in their lifetime.

![f90bfb9 POvEcs0pn3vXIxU 3ZRaD2Gta8i INY3cw](https://files.readme.io/f90bfb9-POvEcs0pn3vXIxU-3ZRaD2Gta8i_INY3cw.jpg)

<Table align={["left","left"]}>
  <thead>
    <tr>
      <th>
        Filter
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Points range\*
      </td>

      <td>
        You can get the customers having lifetime points in a specific range.
        You can either include or exclude a given condition.
        You can select the points range from (minimum to maximum promotions) using the operators Greater than equal, Less than equal, Greater than Equals, and in the range of.
      </td>
    </tr>
  </tbody>
</Table>

## Registered store

Include or exclude customers who have registered at a specific store(s), zone(s) or concept(s) in a given duration.

You can select zones or concepts in the available drop-down box directly.

![4da3500 download](https://files.readme.io/4da3500-download.png)

<Table align={["left","left"]}>
  <thead>
    <tr>
      <th>
        Filter
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Registered at\* (store/zone/concept)
      </td>

      <td>
        You can get customers who registered in specific stores, zones, or concepts.

        You can select stores either by
        uploading store ids (upload list),
        fetching manually by entering values, or
        through store attributes such as external id, name, country, channel, billable and more (based on attribute)

        * Sample Scenario\*: Select customers of all billable stores in India (The values specified in the example might differ from org to org)

        Include Customers who registered at store based on attributes with attribute \{select Is billable, Store Country} and select Is billable billable and store country India.

        For more details on how to select stores, see [Store filter](https://docs.capillarytech.com/docs/common-filter-optionsin-filters#/store).
      </td>
    </tr>

    <tr>
      <td>
        Date
      </td>

      <td>
        This lets you filter customers who registered in a specific period.

        You can select duration either by relative days or specific days.

        For more details, see \[Date] in [Common filter options (in filters)](https://docs.capillarytech.com/docs/common-filter-optionsin-filters#/).
      </td>
    </tr>
  </tbody>
</Table>

## Registration date

Lets you build audience group with customers who registered in a specific period.

![628cafe download 1](https://files.readme.io/628cafe-download_1.png)

<Table align={["left","left"]}>
  <thead>
    <tr>
      <th>
        Filter
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Date\*
      </td>

      <td>
        This lets you filter customers who registered in a specific period.

        You can select duration either by relative days or specific days.

        For more details, see Date in [Common filter options (in filters)](https://docs.capillarytech.com/docs/common-filter-optionsin-filters#/).
      </td>
    </tr>
  </tbody>
</Table>

## Current tier

Lets you build audience group with customers who are in a specific tier (current tier). You can include or exclude customers for a given condition.

![eaf9c90 yRhktvZkFVaOcMmHGm05fP5V3bRsVJjUew](https://files.readme.io/eaf9c90-yRhktvZkFVaOcMmHGm05fP5V3bRsVJjUew.png)

<Table align={["left","left"]}>
  <thead>
    <tr>
      <th>
        Filter
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Current Tier Name
      </td>

      <td>
        Specify tier names by which you want to create audience group.

        * Sample scenario\*: Fetch customers who are in the Gold tier (The tier names are configured as per the org preference and the names would vary)

        Include customers whose \_current\_tier is \{Select Gold}
      </td>
    </tr>

    <tr>
      <td>
        Date
      </td>

      <td>
        This lets you filter customers in a specific slab during a specific period.

        You can select duration either by relative days, specific days, or lifetime.

        For more details, see Date in [Common filter options (in filters)](https://docs.capillarytech.com/docs/common-filter-optionsin-filters#/).
      </td>
    </tr>
  </tbody>
</Table>

## Redeemed points

Fetches customers based on the number of points redeemed during a specific duration. You can either include or exclude a given condition.

![adbcfd4 84WdUlIys0MUT249q79OBcwq e1ngYPEJw](https://files.readme.io/adbcfd4-84WdUlIys0MUT249q79OBcwq-e1ngYPEJw.png)

<Table align={["left","left"]}>
  <thead>
    <tr>
      <th>
        Filter
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Points Range\*
      </td>

      <td>
        You can get customers who have redeemed a specific number of points (range).

        You can select the points range using the operators *Greater than equal*, *Less than equal*, *Equals*, and *In the range of* (this also considers the minimum and maximum points mentioned).

        For more details, see [points range](https://docs.capillarytech.com/docs/common-filter-optionsin-filters#/points).
      </td>
    </tr>

    <tr>
      <td>
        Date
      </td>

      <td>
        This lets you filter customers who redeemed points in a specific period.\
        You can select duration either by relative days, specific days, or lifetime.
        For more details, see Date in [Common filter options (in filters)](https://docs.capillarytech.com/docs/common-filter-optionsin-filters#/).
      </td>
    </tr>

    <tr>
      <td>
        Promotion Name
      </td>

      <td>
        Filter customers who redeemed points of a specific promotion name such as bill promotion, and slab upgrade bill promotion.
      </td>
    </tr>

    <tr>
      <td>
        Promotion Type
      </td>

      <td>
        Filter customers who redeemed specific points by promotion scope/type such as bill, customer, return, and line item.
      </td>
    </tr>

    <tr>
      <td>
        Points Awarded Type
      </td>

      <td>
        Filter customers based on the type of points redeemed, such as the points awarded, points awarded through bill promotion, points awarded line item, points awarded through line item promotion, and points awarded through customer promotion.
      </td>
    </tr>
  </tbody>
</Table>

## Slab migration

Lets you build audience group with customers whose loyalty slabs were upgraded or downgraded in a specified period.

![20451b3 mvj357VWrx HK4aAiJtoLXiy0BWlqZAliQ](https://files.readme.io/20451b3-mvj357VWrx_HK4aAiJtoLXiy0BWlqZAliQ.jpg)

<Table align={["left","left"]}>
  <thead>
    <tr>
      <th>
        Filter
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Tier Change (From & To)\*
      </td>

      <td>
        This lets you choose the tier migration - from tier and to tier.

        Select the slab migration from x slab to y slab. You can either get customers based on tier upgrade or downgrade based on the slabs you in from and to fields. You can also select multiple slabs at a time.

        For example,  you can get customers whose loyalty slabs were upgraded from Silver, Gold to Diamond. Similarly, you can get customers in Silver tier upgraded to Gold, Platinum.
      </td>
    </tr>

    <tr>
      <td>
        Date\*
      </td>

      <td>
        This lets you further filter by the date of migration (duration).

        You can select duration either by relative days or specific days.

        For more details, see Date in [Common filter options (in filters)](https://docs.capillarytech.com/docs/common-filter-optionsin-filters#/).
      </td>
    </tr>
  </tbody>
</Table>

## About to expire points

Fetches customers based on the number of expiring points in a specific duration.

![d6df86b download 2](https://files.readme.io/d6df86b-download_2.png)

<Table align={["left","left"]}>
  <thead>
    <tr>
      <th>
        Filter
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Points Range\*
      </td>

      <td>
        You can get the customers whose specific points are going to expire in the selected range.
        You can either include or exclude a given condition.

        You can select the points range using the operators *Greater than equal*, *Less than equal*, *Equals*, and *In the range of* (this also considers the minimum and maximum points mentioned).

        For more details, see [points range](https://docs.capillarytech.com/docs/common-filter-optionsin-filters#/points).
      </td>
    </tr>

    <tr>
      <td>
        Date\*
      </td>

      <td>
        This lets you filter customers whose points are going to expire in a specific period.

        You can select duration either by relative days or specific days.

        For more details, see Date in [Common filter options (in filters)](https://docs.capillarytech.com/docs/common-filter-optionsin-filters#/).
      </td>
    </tr>
  </tbody>
</Table>