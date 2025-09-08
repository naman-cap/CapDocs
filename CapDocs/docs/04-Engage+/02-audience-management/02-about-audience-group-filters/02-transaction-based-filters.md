---
title: Transaction Based Filters
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
## Transacted date & time

Fetches customers based on their total purchase time. For example, you can get customers who have shopped during the Christmas season (say 20-12-2021 to 30-12-2021). You can apply advanced filters to get a very specific list, say customers who made transactions done on a specific day, time, zone or store.

![8feb3de BE59Pb4N3YvyKqu mVzwmSkahwlkB6HySA](https://files.readme.io/8feb3de-BE59Pb4N3YvyKqu-mVzwmSkahwlkB6HySA.png)

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
        Duration\*
      </td>

      <td>
        This lets you filter customers who transacted in a specific period.

        You can select duration either by <Anchor label="relative days" target="_blank" href="https://docs.capillarytech.com/docs/common-filter-optionsin-filters#/relative-days">relative days</Anchor> or <Anchor label="specific days" target="_blank" href="https://docs.capillarytech.com/docs/common-filter-optionsin-filters#/specific-dates">specific days</Anchor>.

        For more details, see Date in [Common filter options (in filters)](https://docs.capillarytech.com/docs/common-filter-optionsin-filters#/).
      </td>
    </tr>

    <tr>
      <td>
        Day
      </td>

      <td>
        From the chosen duration, you can filter further to get customers who shopped on a specific day (Monday - Sunday).
      </td>
    </tr>

    <tr>
      <td>
        Hours
      </td>

      <td>
        From the chosen duration, you can get customers who purchased in a specific time range. For example, get customers who shopped between 1-12-2018 to 31-12-2018 between 17:00 - 20:00 (4 pm to 8 pm).
      </td>
    </tr>

    <tr>
      <td>
        Store/Zone
      </td>

      <td>
        You can get the customers who shopped in a specific store(s) or zone(s).

        You can select stores either by uploading store ids (upload list), fetching manually by entering values, or through store attributes such as external id, name, country, channel, billable and other attributes.

        For more details on how to select stores, see [Store hierarchy](https://docs.capillarytech.com/docs/common-filter-optionsin-filters#/store-hierarchy).

        * *Sample Scenario*\*:  Select customers who shopped in all billable stores in India during Jan 1, 2022 - May 31, 2022 (The values specified in the example might differ from org to org).
      </td>
    </tr>

    <tr>
      <td>
        Quantity
      </td>

      <td>
        You can get the customers whose transactions are in the selected range.\
        You can either include or exclude a given condition.

        You can select the quantity using the operators *Greater than equal*, *Less than equal*, *Equals*, and *In the range of* (this also considers the minimum and maximum points mentioned).

        For more details, see [points range](https://docs.capillarytech.com/docs/common-filter-optionsin-filters#/points).
      </td>
    </tr>

    <tr>
      <td>
        Delivery Date
      </td>

      <td>
        Filters customers whose order delivery date is either specific dates or relative days.
      </td>
    </tr>

    <tr>
      <td>
        Delivery Time
      </td>

      <td>
        Filters customers whose order delivery time is between 00 hours to 23 hours in a day. You can select the time range using the drop-down menu.
      </td>
    </tr>

    <tr>
      <td>
        Booking Type
      </td>

      <td>
        Filters customers with the order booking type that is mentioned in the list of options. You can select multiple booking types using the checkbox.
      </td>
    </tr>

    <tr>
      <td>
        Buyer Type
      </td>

      <td>
        Filters customers with buyer type options such as retail, wholesale, and others.
      </td>
    </tr>

    <tr>
      <td>
        Cashier Name
      </td>

      <td>
        Filters customers with the name of the cashier during the transaction.
      </td>
    </tr>

    <tr>
      <td>
        Membership Card Present
      </td>

      <td>
        Filters customers having and not having a membership card during transactions.
      </td>
    </tr>

    <tr>
      <td>
        Ordered Till
      </td>

      <td>
        Filters customers who purchased till selected order id (unique id for order identification).
      </td>
    </tr>

    <tr>
      <td>
        Order Channel
      </td>

      <td>
        Filters customers who purchased using the order channels such as app, store, web, store, and more
      </td>
    </tr>

    <tr>
      <td>
        Order Date
      </td>

      <td>
        Filters customers who purchased on a specific date. You can select multiple dates using the checkbox.
      </td>
    </tr>

    <tr>
      <td>
        Order Time
      </td>

      <td>
        Filters customers who purchased at a specific time. You can select multiple order times using the checkbox.
      </td>
    </tr>

    <tr>
      <td>
        Promotion Code
      </td>

      <td>
        Filters customers who purchased using specific promotion codes.  You can select multiple promotion codes using the checkbox.
      </td>
    </tr>

    <tr>
      <td>
        Ship Country
      </td>

      <td>
        Filters customers who purchased using the specific shipping countries. You can select multiple shipping countries using the checkbox.
      </td>
    </tr>

    <tr>
      <td>
        External Coupon Code
      </td>

      <td>
        Filters customers who purchased using external coupon code. You can select multiple coupon codes using the checkbox
      </td>
    </tr>

    <tr>
      <td>
        Source Type
      </td>

      <td>
        Filters customers who purchased using different information source types such as e-commerce, instore, newsletter, campaign, and more. You can select the source type option using the drop-down menu.
      </td>
    </tr>

    <tr>
      <td>
        Tax Code
      </td>

      <td>
        Filters customers who purchased using tax code present in the order details. You can select multiple tax codes using the checkbox.
      </td>
    </tr>
  </tbody>
</Table>

## Visit count

Fetches customers based on the visit count - the number of transactions on unique days.  You can further filter by purchased store and duration using advanced filters.

![b60fa5e UML0fyFqenrxuUIo9RUQCnlL4hYc kIepA](https://files.readme.io/b60fa5e-UML0fyFqenrxuUIo9RUQCnlL4hYc_kIepA.png)

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
        Visit Count\*
      </td>

      <td>
        You can get the customer's details based on the count of visits and the number of transactions in a specific period of time.

        You can select the range using the operators *Greater than equal*, *Less than equal*, *Equals*, and *In the range of* (this also considers the minimum and maximum visit count mentioned).
      </td>
    </tr>

    <tr>
      <td>
        Duration
      </td>

      <td>
        Considers the customers’ details based on the total transactions done in the specified period.

        You can choose duration either by [Specific dates](https://docs.capillarytech.com/docs/common-filter-optionsin-filters#/specific-dates) or [Relative days](https://docs.capillarytech.com/docs/common-filter-optionsin-filters#/relative-days).
      </td>
    </tr>

    <tr>
      <td>
        Hour
      </td>

      <td>
        For the chosen duration, you can get customers who visited in a specific time range. For example, get customers who visited between 1-12-2018 to 31-12-2018 between 17:00 - 20:00 (4 pm to 8 pm)
      </td>
    </tr>

    <tr>
      <td>
        Store Hierarchy
      </td>

      <td>
        This option lets you filter customers by store(s) at which the activity is done. You can also select stores by zones and concepts.

        You can select the registered customer by using the hierarchy as a store, zone, and concept.

        For details on how to configure, see [Store hierarchy](https://docs.capillarytech.com/docs/common-filter-optionsin-filters#/store-hierarchy)
      </td>
    </tr>
  </tbody>
</Table>

## No of transaction

Filters customers based on the number of transactions during a specific duration.

![9803626 Z0BAHctqv ZgziG yf4lShEqktI385QyWQ](https://files.readme.io/9803626-Z0BAHctqv-ZgziG-yf4lShEqktI385QyWQ.png)

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
        Transaction Count\*
      </td>

      <td>
        You can get the customer's details based on the number of transactions in a specific period of time.

        You can select the range using the operators *Greater than equal*, *Less than equal*, *Equals*, and *In the range of* (this also considers the minimum and maximum transaction count mentioned).
      </td>
    </tr>

    <tr>
      <td>
        Duration
      </td>

      <td>
        Let you filter customers based on the number of transactions during a defined period.

        You can choose duration either by [Specific dates](https://docs.capillarytech.com/docs/common-filter-optionsin-filters#/specific-dates) or [Relative days](https://docs.capillarytech.com/docs/common-filter-optionsin-filters#/relative-days).
      </td>
    </tr>

    <tr>
      <td>
        Hours
      </td>

      <td>
        Let you fetch customers based on the number of transactions during a specific time range.

        For example, you can get customers who made at least 10 transactions in the last one month only during the peak hours (say 15:00 - 20:00).
      </td>
    </tr>

    <tr>
      <td>
        Store Hierarchy
      </td>

      <td>
        This option lets you filter customers by store(s) at which the activity is done. You can also select stores by zones and concepts.\
        For details on how to configure, see [Store hierarchy](https://docs.capillarytech.com/docs/common-filter-optionsin-filters#/store-hierarchy)
      </td>
    </tr>

    <tr>
      <td>
        Quantity
      </td>

      <td>
        You can get the customer's details based on the quantity of the shopping.

        You can select the range using the operators *Greater than equal*, *Less than equal*, *Equals*, and *In the range of* (this also considers the minimum and maximum quantity mentioned).
      </td>
    </tr>

    <tr>
      <td>
        Delivery Date
      </td>

      <td>
        Filters customers whose order delivery date is either specific dates or relative days.
      </td>
    </tr>

    <tr>
      <td>
        Delivery Time
      </td>

      <td>
        Filters customers whose order delivery time is between 00 hours to 23 hours in a day. You can select the time range using the drop-down menu.
      </td>
    </tr>

    <tr>
      <td>
        Booking Type
      </td>

      <td>
        Filters customers with the order booking type that is mentioned in the list of options. You can select multiple booking types using the checkbox.
      </td>
    </tr>

    <tr>
      <td>
        Buyer Type
      </td>

      <td>
        Filters customers with buyer-type options such as retail, wholesale, and others.
      </td>
    </tr>

    <tr>
      <td>
        Cashier Name
      </td>

      <td>
        Filters customers with the name of the cashier during the transaction.
      </td>
    </tr>

    <tr>
      <td>
        Membership Card Present
      </td>

      <td>
        Filters customers having and not having a membership card during transactions.
      </td>
    </tr>

    <tr>
      <td>
        Ordered Till
      </td>

      <td>
        Filters customers who purchased till selected order id (unique id for order identification).
      </td>
    </tr>

    <tr>
      <td>
        Order Channel
      </td>

      <td>
        Filters customers who purchased using the order channels such as app, store, web, store, and more.
      </td>
    </tr>

    <tr>
      <td>
        Order Date
      </td>

      <td>
        Filters customers who purchased on a specific date. You can select multiple dates using the checkbox.
      </td>
    </tr>

    <tr>
      <td>
        Order Time
      </td>

      <td>
        Filters customers who purchased at a specific time. You can select multiple order times using the checkbox.
      </td>
    </tr>

    <tr>
      <td>
        Promotion Code
      </td>

      <td>
        Filters customers who purchased using specific promotion codes.  You can select multiple promotion codes using the checkbox.
      </td>
    </tr>

    <tr>
      <td>
        Ship Country
      </td>

      <td>
        Filters customers who purchased using the specific shipping countries. You can select multiple shipping countries using the checkbox.
      </td>
    </tr>

    <tr>
      <td>
        External Coupon Code
      </td>

      <td>
        Filters customers who purchased using external coupon code. You can select multiple coupon codes using the checkbox.
      </td>
    </tr>

    <tr>
      <td>
        Source Type
      </td>

      <td>
        Filters customers who purchased using different information source types such as e-commerce, instore, newsletter, campaign, and more. You can select the source type option using the drop-down menu.
      </td>
    </tr>

    <tr>
      <td>
        Tax Code
      </td>

      <td>
        Filters customers who purchased using tax code present in the order details. You can select multiple tax codes using the checkbox.
      </td>
    </tr>

    <tr>
      <td>
        Bill Amount
      </td>

      <td>
        You can get the customer's details based on the bill amount.

        You can select the range using the operators *Greater than equal*, *Less than equal*, *Equals*, and *In the range of* (this also considers the minimum and maximum amount mentioned).
      </td>
    </tr>
  </tbody>
</Table>

## Transacted stores/zones/concepts

Fetches customers who shopped in a specific store(s), zone(s). You can also choose stores by specific attributes in zone or concept.

![8e06a34 gdVzGNYG8uIRJqltfLyrxFEQ73wMnWt2LA](https://files.readme.io/8e06a34-gdVzGNYG8uIRJqltfLyrxFEQ73wMnWt2LA.jpg)

<Table align={["left","left"]}>
  <thead>
    <tr>
      <th>

      </th>

      <th>

      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>

      </td>

      <td>
        For details on how to configure, see [Store hierarchy](https://docs.capillarytech.com/docs/common-filter-optionsin-filters#/store-hierarchy)
      </td>
    </tr>

    <tr>
      <td>
        When shopped\*
      </td>

      <td>
        * **Last**: Fetches customers based on their recent shopping criteria.
        * **Ever**: Fetches customers based on their entire shopping criteria.
        * **First**: Fetches customers based on their first shopping criteria.
      </td>
    </tr>

    <tr>
      <td>
        Shopped from (store/zone/concept)\*
      </td>

      <td>
        You can get the customers who shopped at a specific store(s), zone(s), or concept(s).

        For details on how to configure, see [Store hierarchy](https://docs.capillarytech.com/docs/common-filter-optionsin-filters#/store-hierarchy).

        * *Example*\*: Customers who shopped in all billable stores in India during Dec 1, 2021 - Dec 31, 2021 (The values specified in the example might differ from org to org).

        Here is the config:

        Include customers whoever shopped from the store based on attributes with attribute \{select Is billable, and Store Country} > select Is billable > store country - India > Click +/- Fields and select specific dates  between 1-12-2018 and 31-12-2018.
      </td>
    </tr>

    <tr>
      <td>
        Date (Duration filter)
      </td>

      <td>
        You can further filter customers by transacted period.

        You can select duration either by [Specific dates](https://docs.capillarytech.com/docs/common-filter-optionsin-filters#/specific-dates) or [Relative days](https://docs.capillarytech.com/docs/common-filter-optionsin-filters#/relative-days).

        Click on the above links for more details.
      </td>
    </tr>

    <tr>
      <td>
        Day
      </td>

      <td>
        This lets you filter customers by shopped day.\
        You can choose one or more days of a week (Monday - Sunday).

        For example, you can get customers who shopped on Saturday or Sunday in April.
      </td>
    </tr>

    <tr>
      <td>
        Hours
      </td>

      <td>
        For the chosen duration, you can get customers who purchased in a specific time range. For example, get customers who shopped between Dec 1, 2022 to Dec 31, 2022 between 17:00 - 20:00 (4 pm to 8 pm).
      </td>
    </tr>
  </tbody>
</Table>

## Days not visited since

Fetches customers who have not visited stores in the last x days after the first, second or last visit.\
For example, you can get customers who have not visited in the last 30 days after their 1st visit.

![a6ba2e0 scAUzStnhomLXF a3TSlRJBQjQFulKX28Q](https://files.readme.io/a6ba2e0-scAUzStnhomLXF_a3TSlRJBQjQFulKX28Q.jpg)

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
        Not visited  in the last\*
      </td>

      <td>
        You can get customers who have not visited for more than x days from the first visit, second visit, or last visit.

        You can select the days range using the operators

        * *Equals*: Fetches customers who have not visited for a specific number of days from *Days after*. For example, fetch customers who have not visited for 90 days from the first visit date.
        * *Greater than Equals*: Fetches customers who have not visited for 30 days or more from the last visit date.
      </td>
    </tr>

    <tr>
      <td>
        Days after\*
      </td>

      <td>
        The start date consider for not visited since.

        * **First visit**: Fetches customers who have not visited in the specified duration excluding their first visit.
        * **Second**: Fetches customers who have not visited in the specified duration excluding their first and second visits.
        * **Last visit**: Fetches customers who have not visited in the specified duration after their recent visit.
      </td>
    </tr>
  </tbody>
</Table>

## Total transaction amount

Filters customers based on a specific transaction amount during a particular period.

![b34645b evNDp2COp7Q83crjtuJragRMNaD Z5VH A](https://files.readme.io/b34645b-evNDp2COp7Q83crjtuJragRMNaD_Z5VH_A.jpg)

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
        Transaction amount\*
      </td>

      <td>
        This lets you filter the customers based on their transaction amount.

        You can select the transaction amount range using the operators

        * **Greater than equal**: Filters customers whose transaction amount is greater than or equal to the value you specify.
        * **Less than equal**: Filters customers whose transaction amount is less than or equal to the value you specify.
        * **Equals**: Filters customers whose transaction amount is equal to the value you specify
        * **In range of**: Filters customers whose transaction amount is in between the values you specify.
      </td>
    </tr>

    <tr>
      <td>
        Duration\*
      </td>

      <td>
        Let you filter the transaction amount for a defined period.

        You can choose the duration either by [Specific dates](https://docs.capillarytech.com/docs/common-filter-optionsin-filters#/specific-dates) or [Relative days](https://docs.capillarytech.com/docs/common-filter-optionsin-filters#/relative-days).

        Click on the links to know more.
      </td>
    </tr>

    <tr>
      <td>
        Day
      </td>

      <td>
        From the chosen duration, you can filter further to get customers based on the purchase amount on a specific day (Monday - Sunday)
      </td>
    </tr>

    <tr>
      <td>
        Hours
      </td>

      <td>
        For the chosen duration, you can get customers based on the purchase amount in a specific time range.

        For example, get customers whose purchase amount between 1-12-2018 to 31-12-2018 between 17:00 - 20:00 (4 pm to 8 pm) is $300.
      </td>
    </tr>

    <tr>
      <td>
        Store/Zone
      </td>

      <td>
        You can get the customers with total transacted amount at a specific store(s), zone(s), or concept(s).

        * *Example*\*: Customers who shopped in all billable stores in India during Dec 1, 2021 - Dec 31, 2021 (The values specified in the example might differ from org to org).

        For details on how to choose stores, see [Store filter](https://docs.capillarytech.com/docs/common-filter-optionsin-filters#/store).
      </td>
    </tr>

    <tr>
      <td>
        Quantity
      </td>

      <td>
        You can get the customer's details based on the quantity of shopping.

        You can select the quantity using the operators

        * Greater than equal: Filters customers whose shopping quantity is greater than or equal to the value you specify.
        * Less than equal: Filters customers whose shopping quantity is less than or equal to the value you specify.
        * Equals: Filters customers whose shopping quantity is equal to the value you specify.
        * In range of: Filters customers whose shopping quantity is in between the values you specify.
      </td>
    </tr>

    <tr>
      <td>
        Delivery Date
      </td>

      <td>
        Filters customers whose order delivery date is either specific dates or relative days.
      </td>
    </tr>

    <tr>
      <td>
        Delivery Time
      </td>

      <td>
        Filters customers whose order delivery time is between 00 hours to 23 hours in a day. You can select the time range using the drop-down menu.
      </td>
    </tr>

    <tr>
      <td>
        Booking Type
      </td>

      <td>
        Filters customers with the item booking type that is mentioned in the list of options. You can select multiple booking types using the checkbox.
      </td>
    </tr>

    <tr>
      <td>
        Buyer Type
      </td>

      <td>
        Filters customers with buyer-type options such as retail, wholesale, and others.
      </td>
    </tr>

    <tr>
      <td>
        Cashier Name
      </td>

      <td>
        Filters customers with the name of the cashier during the transaction.
      </td>
    </tr>

    <tr>
      <td>
        Membership Card Present
      </td>

      <td>
        Filters customers having and not having a membership card during transactions.
      </td>
    </tr>

    <tr>
      <td>
        Ordered Till
      </td>

      <td>
        Filters customers who purchased till selected order id (unique id for order identification).
      </td>
    </tr>

    <tr>
      <td>
        Order Channel
      </td>

      <td>
        Filters customers who purchased using the order channels such as app, store, web, store, and more.
      </td>
    </tr>

    <tr>
      <td>
        Order Date
      </td>

      <td>
        Filters customers who purchased on a specific date. You can select multiple dates using the checkbox.
      </td>
    </tr>

    <tr>
      <td>
        Order Time
      </td>

      <td>
        Filters customers who purchased at a specific time. You can select multiple order times using the checkbox.
      </td>
    </tr>

    <tr>
      <td>
        Promotion Code
      </td>

      <td>
        Filters customers who purchased using specific promotion codes.  You can select multiple promotion codes using the checkbox.
      </td>
    </tr>

    <tr>
      <td>
        Ship Country
      </td>

      <td>
        Filters customers who purchased using the specific shipping countries. You can select multiple shipping countries using the checkbox.
      </td>
    </tr>

    <tr>
      <td>
        External Coupon Code
      </td>

      <td>
        Filters customers who purchased using external coupon code. You can select multiple coupon codes using the checkbox.
      </td>
    </tr>

    <tr>
      <td>
        Source Type
      </td>

      <td>
        Filters customers who purchased using different information source types such as e-commerce, instore, newsletter, campaign, and more. You can select the source type option using the drop-down menu.
      </td>
    </tr>

    <tr>
      <td>
        Tax Code
      </td>

      <td>
        Filters customers who purchased using tax code present in the order details. You can select multiple tax codes using the checkbox.
      </td>
    </tr>
  </tbody>
</Table>

## Returned bills

Fetches customers based on the number of transactions returned during a specific duration.

![90bbd74 download](https://files.readme.io/90bbd74-download.png)

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
        Return Amount/Count\*
      </td>

      <td>
        Filter customers by the sum of returned transaction amount or count.

        * Greater than equal: Filters customers whose return transaction amount/count is greater than or equal to the value you specify.
        * **Less than equal**: Filters customers whose return transaction amount/count is less than or equal to the value you specify.
        * **Equals**: Filters customers whose return transaction amount/count is equal to the value you specify.
        * **In range of**: Filters customers whose return transaction amount/count is in between the values you specify.
      </td>
    </tr>

    <tr>
      <td>
        Duration\*
      </td>

      <td>
        Let you filter return amount or return count for a specified period.

        You can choose duration either by [Specific dates](https://docs.capillarytech.com/docs/common-filter-optionsin-filters#/specific-dates) or [Relative days](https://docs.capillarytech.com/docs/common-filter-optionsin-filters#/relative-days).
      </td>
    </tr>
  </tbody>
</Table>

## Shopped for a product/category/attribute

This filters customers who bought items of selected categories or product attribute, a defined number of times.

Example: Filter users who have bought Yogurt more than 3 times distinctively in July.

The following table shows the number of Yogurt purchases by Zoha and Prem on different days.

<Table align={["left","left","left","left","left","left"]}>
  <thead>
    <tr>
      <th>
        Name
      </th>

      <th>
        Jul 7
      </th>

      <th>
        Jul 10
      </th>

      <th>
        Jul 11
      </th>

      <th>
        Jul 13
      </th>

      <th>
        Jul 25
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Zoha
      </td>

      <td>
        1
      </td>

      <td>
        3
      </td>

      <td>
        * <br />
      </td>

      <td>
        * <br />
      </td>

      <td>
        * <br />
      </td>
    </tr>

    <tr>
      <td>
        Prem
      </td>

      <td>
        * <br />
      </td>

      <td>
        1
      </td>

      <td>
        2
      </td>

      <td>
        3
      </td>

      <td>
        1
      </td>
    </tr>
  </tbody>
</Table>

In this, Prem will be selected as we want a user who has done more than 4 transactions distinctively that have a Yogurt item in the bill in the selected time range.

![1c336eb hI7dMImCE3ARU2B jmyNzPiVAzDAjg6BjA](https://files.readme.io/1c336eb-hI7dMImCE3ARU2B_jmyNzPiVAzDAjg6BjA.png)

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
        Product filter\*
      </td>

      <td>
        This lets you filter customers by products purchased.

        You can select products by *Parent Category*, *Category*, or *Item code*.  For details on each of these options, see [Product filters](https://docs.capillarytech.com/docs/common-filter-optionsin-filters#/product-filter).
      </td>
    </tr>

    <tr>
      <td>
        Quantity\*
      </td>

      <td>
        * Greater than equal: Filters customers whose shopping quantity is greater than or equal to the value you specify.
        * Less than equal: Filters customers whose shopping quantity is less than or equal to the value you specify.
        * Equals: Filters customers whose shopping quantity is equal to the value you specify.
        * In range of: Filters customers whose shopping quantity is in between the values you specify.
      </td>
    </tr>

    <tr>
      <td>
        Date
      </td>

      <td>
        Lets you filter customers based on the number of transactions during a defined period. You can choose duration either by specific dates or by relative days.

        You can choose either Lifetime, or a specific duration - [Relative days](https://docs.capillarytech.com/docs/common-filter-optionsin-filters#/relative-days), and [Specific days](https://docs.capillarytech.com/docs/common-filter-optionsin-filters#/specific-dates).
      </td>
    </tr>

    <tr>
      <td>
        Delivery Date
      </td>

      <td>
        Filters customers whose order was delivered in a specific duration. You can select the duration using specific dates or relative days.
      </td>
    </tr>

    <tr>
      <td>
        Delivery Time
      </td>

      <td>
        Filters customers whose orders were delivered during specific hours of the day. You can select the time range using the drop-down box.
      </td>
    </tr>

    <tr>
      <td>
        Buyer Type
      </td>

      <td>
        Filters customers with buyer type options such as free, subscription, paid and non-subscription.
      </td>
    </tr>

    <tr>
      <td>
        Membership Card Present
      </td>

      <td>
        Filters customers based on the availability of membership cards during transactions.
      </td>
    </tr>

    <tr>
      <td>
        Order Channel
      </td>

      <td>
        Filters customers based on the transacted channel. For example, app, store, web, store, and more.
      </td>
    </tr>

    <tr>
      <td>
        Ship Country
      </td>

      <td>
        Filters customers who used a specific shipping country for delivery. You can select multiple shipping countries using the checkbox.
      </td>
    </tr>

    <tr>
      <td>
        Source Type
      </td>

      <td>
        Filters customers based on the source they transacted with such as e-commerce, InStore, newsletter, campaign, and more. You can select the source type option using the drop-down box.
      </td>
    </tr>

    <tr>
      <td>
        Quantity
      </td>

      <td>
        * Greater than equal: Filters customers whose shopping quantity is greater than or equal to the value you specify.
        * Less than equal: Filters customers whose shopping quantity is less than or equal to the value you specify.
        * Equals: Filters customers whose shopping quantity is equal to the value you specify.
        * In range of: Filters customers whose shopping quantity is in between the values you specify.
      </td>
    </tr>

    <tr>
      <td>
        Line item type
      </td>

      <td>
        Filters out the customers on the basis of the line item such as combo parent, combo item, add on item, split.
      </td>
    </tr>

    <tr>
      <td>
        Special line item type
      </td>

      <td>
        Filters out the customers on the basis of the special line items (such as processing fee, free item) in those transactions.
      </td>
    </tr>

    <tr>
      <td>
        Line item cashier discount reason
      </td>

      <td>
        Filters out the customers on the basis of the reason entered for line item level discount at the cashier. Cashier discount could be due to damage, bulk customer, incorrect label, wrong scan, member discount, etc.
      </td>
    </tr>
  </tbody>
</Table>

## Payment modes

This filter lets you build a group with customers who paid a specific amount through a selected payment mode (cash, credit card, gift card, points or coupon redemption, and other options). You can use advanced filter options such as date, day, and hour for more specific results.

![978c821 TmkhQovLcsmXE4I4XpOfRbCgeNI8 jmguw](https://files.readme.io/978c821-TmkhQovLcsmXE4I4XpOfRbCgeNI8-jmguw.png)

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
        Payment amount\*
      </td>

      <td>
        This option lets you get customers who paid using selected payment modes such as cash, credit card, gift card, points, or coupon redemption (select manually from the list) for a specific amount.

        * Greater than equal: Lets you select an amount greater than or equal to a specific value. For example, you can get customers who paid $100 or more through cash.
        * Less than equal: Lets you select an amount less than or equal to a specific value. For example, you can get customers who paid $100 or less through the gift card.
        * Equal: Lets you select an amount equal to a specific value. For example, you can get customers who paid exactly $100 through a credit card.
        * In range of: Lets you select an amount between a specific value range. For example, you can get customers who paid an amount between $100-$200 ( in the range of $100 to $200) through cash.
      </td>
    </tr>

    <tr>
      <td>
        Date
      </td>

      <td>
        Let you filter transactions of a defined period.

        You can choose duration either by [Specific dates](https://docs.capillarytech.com/docs/common-filter-optionsin-filters#/specific-dates) or [Relative days](https://docs.capillarytech.com/docs/common-filter-optionsin-filters#/relative-days).
      </td>
    </tr>

    <tr>
      <td>
        Day
      </td>

      <td>
        This option lets you further filter transactions of a specific day(s) of a week (from Monday to Sunday).
      </td>
    </tr>

    <tr>
      <td>
        Hours
      </td>

      <td>
        This lets you further filter transactions by sopped time (from 00 to 23 hours). For example,  you can get customers who paid an amount greater than or equal to 100 through credit cards between 18:00 hours to 19:00 hours.
      </td>
    </tr>

    <tr>
      <td>
        Store Hierarchy
      </td>

      <td>
        This option lets you filter customers by store(s) at which the activity is done. You can also select stores by zones and concepts.

        You can select the registered customer by using the hierarchy as a store, zone, and concept. For details, see [Store hierarchy](https://docs.capillarytech.com/docs/common-filter-optionsin-filters#/store-hierarchy).
      </td>
    </tr>
  </tbody>
</Table>

## Shopped for distinct product/category/attribute

This filters customers who bought items of selected categories or product attributes for a defined number of times.

Example: Filter customers who have bought soaps more than 3 times distinctively in July. Consider

* Zoha purchased 1 soap in July 1, and 3 soaps on July 11 - total 2 times
* Jim purchased 1 soap on July 1, 3 on July 11, 1 on July 17, and 1 on July 25 - total 4 times

Jim will be selected as he has purchased more than 3 purchased soaps more than three times in July.

![bb7debb oMSyGinklb0aKN5BC EMgY4a 3m Nwmelw](https://files.readme.io/bb7debb-oMSyGinklb0aKN5BC_EMgY4a-3m-Nwmelw.png)

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
        Product\*
      </td>

      <td>
        Select products that you want to include. For example, customers who purchased products from the Electronics category.

        You can select products by Parent category, **Category**, or **Item code**  . For details on how to configure each option, see [Product filter](https://docs.capillarytech.com/docs/common-filter-optionsin-filters#/product-filter).
      </td>
    </tr>

    <tr>
      <td>
        Quantity\*
      </td>

      <td>
        This lets you filter out customers based on the quantity of items purchased. For example,  customers who purchased at least six products from the \_Electronics\_category.

        You can use the operators Greater than equal, less than equal, equal, and in range of.
      </td>
    </tr>

    <tr>
      <td>
        Date
      </td>

      <td>
        This lets you further filter customers by purchased date.

        You can either choose [lifetime ](https://docs.capillarytech.com/docs/common-filter-optionsin-filters#/lifetime)or specific duration - [Specific dates](https://docs.capillarytech.com/docs/common-filter-optionsin-filters#/specific-dates) or [Relative days](https://docs.capillarytech.com/docs/common-filter-optionsin-filters#/relative-days).

        Lifetime will consider transactions of the customer from the time of enrolling into the loyalty program.

        For other date filter options, see [Date filter](https://docs.capillarytech.com/docs/common-filter-optionsin-filters#/date-filter).
      </td>
    </tr>

    <tr>
      <td>
        Delivery Date
      </td>

      <td>
        This lets you consider transactions that were delivered in a specific duration. You can select the duration using specific dates or relative days.
      </td>
    </tr>

    <tr>
      <td>
        Delivery Time
      </td>

      <td>
        This lets you consider transactions that were delivered during specific hours of the day. You can select the time range using the drop-down box.
      </td>
    </tr>

    <tr>
      <td>
        Buyer Type
      </td>

      <td>
        Filters customers with buyer-type options such as free, subscription, paid, and non-subscription.
      </td>
    </tr>

    <tr>
      <td>
        Membership Card Present
      </td>

      <td>
        Filters customers based on the availability of membership cards during transactions.
      </td>
    </tr>

    <tr>
      <td>
        Order Channel
      </td>

      <td>
        Filters customers based on the transacted channel. For example, app, store, web, store, and more.
      </td>
    </tr>

    <tr>
      <td>
        Ship Country
      </td>

      <td>
        Filters customers who used a specific shipping country for delivery. You can select multiple shipping countries using the checkbox.
      </td>
    </tr>

    <tr>
      <td>
        Source Type
      </td>

      <td>
        Filters customers based on the source they transacted with such as e-commerce, InStore, newsletter, campaign, and more. You can select the source type option using the drop-down box.
      </td>
    </tr>

    <tr>
      <td>

      </td>

      <td>

      </td>
    </tr>

    <tr>
      <td>
        Line item type
      </td>

      <td>
        Filters out the customers on the basis of the line item type such as combo parent, combo item, add on item, and split.
      </td>
    </tr>

    <tr>
      <td>
        Special line item type
      </td>

      <td>
        Considers transactions of a specific special line-item type such as a free item. These are custom values and might differ from org to org.
      </td>
    </tr>

    <tr>
      <td>
        Line item cashier discount reason
      </td>

      <td>
        Considers transactions that have a specific reason entered for line item level discount at the cashier. Cashier discount could be due to damage, bulk customer, incorrect label, wrong scan, member discount, etc.
      </td>
    </tr>
  </tbody>
</Table>