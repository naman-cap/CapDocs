---
title: Define Cart Evaluation & Cart Promotion Benefits
excerpt: ''
deprecated: false
hidden: true
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
## Define promotion availing condition and promotion benefit

> 📘
>
> * Applicable to all promotion types.

You can define the cart evaluation condition for customers to qualify for the promotion and the actual benefit the customers could get with the promotion. 

1. In the new promotion configuration, navigate to the **Availing conditions and benefits** section.
2. Click **Add Conditions/benefits** to first define the qualifying cart condition.

* The condition can be based on the entire cart items, cart amount, or items of specific product brands, categories, or attributes. 

![e5ac304 42wrUVsOmxT944M3p7JG0yzXqqqNfVEfag](https://files.readme.io/e5ac304-42wrUVsOmxT944M3p7JG0yzXqqqNfVEfag.gif)

### To add conditions/benefits, do the following.

1. In **Define qualifying conditions**, set the cart evaluation condition

![eb442fe iYkl7cII19uZqGYl0WVEBFC3ma sX97c3A](https://files.readme.io/eb442fe-iYkl7cII19uZqGYl0WVEBFC3ma_sX97c3A.png)

2. In **Select cart property**, select any of the following options to base the earning condition on.

![df5d69a HoSko5ot3ydzQHRnvA9KqDQpM9JhznWQxA](https://files.readme.io/df5d69a-HoSko5ot3ydzQHRnvA9KqDQpM9JhznWQxA.gif)

<Table align={["left","left"]}>
  <thead>
    <tr>
      <th>
        Option
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Cart amount
      </td>

      <td>
        To define the qualifying condition on the entire cart amount.\
        For example, avail the promotion only for customers whose cart value is >= $100.
      </td>
    </tr>

    <tr>
      <td>
        Count of items in the cart
      </td>

      <td>
        To define the qualifying condition on the count of items added to the cart.\
        For example, avail the promotion only for customers whose cart count > 5.
      </td>
    </tr>

    <tr>
      <td>
        Sum of line item amount for the selected product
      </td>

      <td>
        To define the qualifying condition on the price of line items of specific products, categories, brands, or attributes in the cart.\
        Use **Select product** to add your preferred products, attributes, or categories.\
        For example, avail promotion only if the sum of the price of cart items of only shirts (product category) exceeds $200.
      </td>
    </tr>

    <tr>
      <td>
        Sum of line item quantity for the selected product
      </td>

      <td>
        To define the qualifying condition on the count of line items of specific products, categories, or attributes in the cart.\
        Use Select product to add your preferred products, attributes, brands, or categories.\
        For example, avail promotion only if the count of specific cart items (shirts - product category) exceeds 3.
      </td>
    </tr>

    <tr>
      <td>
        Cart includes one or more selected products
      </td>

      <td>
        To avail promotion only if the cart contains products, categories, or attributes.\
        Use **Select product** to add your preferred products, attributes, brands, or categories.\
        For example, avail promotion only if the cart contains the product with SKU123.
      </td>
    </tr>
  </tbody>
</Table>

**Supported operators**:  equal to(=), greater than(>), or greater than equal to(>=)

3. In **Select benefit**, click **Define benefits** to set the benefit the customer gets after fulfilling the configured condition.

![651a9ed 1jU8hU992RNF 5hkEugncrXs uSBlTLhIA](https://files.readme.io/651a9ed-1jU8hU992RNF_5hkEugncrXs_uSBlTLhIA.png)

4. In the **Discount applied on**, select your preferred option.

* Select **Complete cart** to apply the promotion discount on the entire cart.
* Select **Select products in cart** to make the promotion discount applicable to specific products in the cart. You can either upload SKUs manually using **List of SKU codes**, or **Include** or **Exclude** products of a specific brand(s), category(es), or attribute(s). 

![0c29a39 qoE700dbfG66I3IhAto7TYvt20hIJufAPQ](https://files.readme.io/0c29a39-qoE700dbfG66I3IhAto7TYvt20hIJufAPQ.png)

5. In the **Benefit type**, select your preferred discount type.

* **Fixed amount**: To provide a flat amount discount. For example, get $10 off on the purchase of an electronic gadget.
* **Percentage based**: To provide a percentage discount on the transaction amount. For example, get 20% off on t-shirts (product category).
* **Free product**: To run buy one get one offer. You also need to specify the **Applicable quantity**. This is applicable only for Discounts applied on Select products in Cart.
* **Fixed target amount**: To provide a fixed price for items (bundle). For example, get 3 cokes for 50, or get a (chips packet + Coke) for 40. This is applicable only for Discount applied on Select products in Cart.

6. Click **Done**.
7. Click **Continue**.

## Limit scope of the promotion by store entity and day

To drive sales at particular stores/days, you can use the scope filter.

1. Add Scope
2. Add restrictions

![b3cd7a1 UGLVxRgfe eh4mammou8hf DA37XpmzWKw](https://files.readme.io/b3cd7a1-UGLVxRgfe-eh4mammou8hf-DA37XpmzWKw.png)

### Add store/date level scope

To add scope and restrictions, do the following.

1. In **Define Scope**, click **Add scope/restrictions**.

* **Store entity scope**: To limit the promotion to specific stores, in **Limit to specific store entities**, click **Customize** and select whether to limit by store, concept, or zone.

![e3c28a8 yCF75LOexcWUTD5CCG7wcU06GzEZ9ZodFg](https://files.readme.io/e3c28a8-yCF75LOexcWUTD5CCG7wcU06GzEZ9ZodFg.png)

* **Day scope**: To limit the promotion to specific dates or days, in **Limit to specific day/time scope**, click **Customize**.\
  a. In **Days/month scope**, select your preferred scope

<Table align={["left","left"]}>
  <thead>
    <tr>
      <th>
        Option
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Days
      </td>

      <td>
        Select to limit the promotion for selected days of a month.\
        You will see the month dates (1-31).  

        1. In the **Dates of the month** select the dates on when customers can avail of promotion.  
        2. You will see the **Start time** and **Duration in hours** options. Select the time period for which customers can avail of the promotion.\
           For example, on the 1st of every month, at 4:00 PM for two hours.
      </td>
    </tr>

    <tr>
      <td>
        Weeks
      </td>

      <td>
        Select to limit the promotion for selected weeks (Monday - Sunday).  

        1. In **Days of the week** select all weekdays or a specific weekday on which customers can avail promotions.\
           You will see the **Start time** and **Duration in hours** options. Select the time period for which customers can avail the promotion.\
           For example, on Thursday, Saturday, and Sunday for three hours.
      </td>
    </tr>

    <tr>
      <td>
        Does not repeat
      </td>

      <td>
        The promotion is valid only once.
      </td>
    </tr>
  </tbody>
</Table>

b. On **Days of the week**, select the days on which the promotion is valid.

> 📘
>
> * This field is visible only when Week is selected in the Days/month scope.

![e7005e3 Pd9k7h2tQTbI 0KUKChH9qaqm0LMAyGxjA](https://files.readme.io/e7005e3-Pd9k7h2tQTbI_0KUKChH9qaqm0LMAyGxjA.png)

c. In **Start time**, set the time on which the promotion starts.

![55fab0e vSGgDRay88M9ebrQ7J91U3FbgpzovangMQ](https://files.readme.io/55fab0e-vSGgDRay88M9ebrQ7J91U3FbgpzovangMQ.png)

d. In **Duration in hours**, enter the validity duration of the promotion.\
e. Click **Done**.\
f. Click **Continue**.

* **Limit to specific customers**: To limit the promotions to specific customers, 

  1. In the **Limit to specific customers**, click **Customize**.

  2. In the **Customers who are eligible for this promotion**, select the desired type of customers.

  3. In the **Who belongs to loyalty type**, select the loyalty type. Select **Supplementary program** to limit the promotions to customers who are part of certain supplementary programs. Select **Tier**, to limit the customers to those who are part of a certain Tier.

  4. Click **Done**.

### Add cart level restrictions

In Add restrictions, configure the following options.

<Table align={["left","left"]}>
  <thead>
    <tr>
      <th>
        Option
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Number of times the promotion could be redeemed in a single cart
      </td>

      <td>
        Enter the number of times a promotion can be redeemed in a single cart.
      </td>
    </tr>

    <tr>
      <td>
        Enable limit on the discount due to the promotion in a single cart
      </td>

      <td>
        Enable this option to limit the discount amount in a single cart and enter the respective value in the field provided.
      </td>
    </tr>

    <tr>
      <td>
        Enable limit on the number of times a customer could avail the promotion
      </td>

      <td>
        Enable this option to limit the number of times a customer can avail the promotion and enter the respective value in the field provided.
      </td>
    </tr>

    <tr>
      <td>
        Enable limit on the number of transactions a customer could avail the promotion
      </td>

      <td>
        Enable this option to limit the number of transactions a promotion is applicable for and enter the respective value in the field provided.
      </td>
    </tr>

    <tr>
      <td>
        Enable limit on total discount a customer could avail across redemptions
      </td>

      <td>
        Enable this option to limit the total discount amount a customer can avail of throughout the promotion this enters the respective value in the field provided.
      </td>
    </tr>

    <tr>
      <td>
        Enable limit on the number of times customers could avail the promotion
      </td>

      <td>
        Enable this option to limit the number of times a customer can avail the promotion and enter the respective value in the field provided.
      </td>
    </tr>

    <tr>
      <td>
        Enable limit on the number of transactions in which customers could avail the promotion
      </td>

      <td>
        Enable this option to limit the number of transactions on which the promotion is applicable. For example, by a customer to avail the promotion and enter the respective value in the field provided.
      </td>
    </tr>

    <tr>
      <td>
        Enable limit on total discount customers could avail across redemptions
      </td>

      <td>
        Enable this option to limit the total discount a customer can receive through promotion and enter the respective value in the field provided.
      </td>
    </tr>

    <tr>
      <td>
        Refresh the limit after a specified period
      </td>

      <td>
        To choose when the limit is reset.  

        1. **Never**: The limit does not get reset.  
        2. **Days**: Select the number of days after which the limit is reset.  
        3. **Weeks**: Select the number of days after which the limit is reset.  

        * \*NOTE\*\*: This option appears after you enable various limitations. 
      </td>
    </tr>
  </tbody>
</Table>