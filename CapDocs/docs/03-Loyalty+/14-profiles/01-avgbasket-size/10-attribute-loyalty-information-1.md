---
title: Attributes - Other
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
## **isLoyal**

**Profile :** currentCustomer\
**Attribute :** isLoyal\
**Type :** Boolean\
**Meaning :** returns True, if the current customer is registered in the brand's loyalty program\
**Sub-Attribute:** NA\
**Syntax:** currentCustomer.isLoyal()\
**Example: currentCustomer.isLoyal==true**

<Table align={["left"]}>
  <thead>
    <tr>
      <th>
        Example: write a rule to check if the current customer isLoyal or not.
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Profile: Current Customer
        Attribute: isLoyal()
        Type: Boolean
        Rule: currentCustomer.isLoyal()
      </td>
    </tr>
  </tbody>
</Table>
