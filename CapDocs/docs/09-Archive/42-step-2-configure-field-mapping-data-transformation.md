---
title: 'Step 2: Configure field mapping & data transformation'
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
After configuring SFTP, you need to configure the customer or transaction block to map the headers of the CSV file with that of the Capillary system and automate data transformations.

According to the type of data of the selected template, you will see configuration options.

1. In InTouch org, select the org ID for which you want to configure data mapping/transformation.
2. In File Delimiter, enter the character used to separate each field in the CSV file - comma or tab. It is usually a comma (,).
3. To convert the date format of date entries of the CSV file, check Format Transaction Date and select your preferred date format in Transaction Date Format.

![c04f344 DWX9i1tsjYcdPQcI2ph7JVS8zmX8yg0Ebg](https://files.readme.io/c04f344-DWX9i1tsjYcdPQcI2ph7JVS8zmX8yg0Ebg.png)

4. Configure each tab for the respective field mappings and data transformations.

* **extendedFields**: Contains all transaction and line item level extended fields. Map each of the extended fields with the extended fields in the CSV file.
* **transaction**: Contains all transaction fields. Map each of the transaction fields with the names in the CSV file.
* **attribution**: Contains attribution headers.
* **lineitem**: Contains all transaction line-item fields. Map each of the transaction line item fields with the names in the CSV file.
* **filter**: Available for templates with Filters. For example,  Transaction Add V2 with filter.  
* **customFields**: Contains all transaction and line item level custom fields. Map each of the custom fields with the custom field names of the CSV file. 
* **Transformation**: This is a field that allows you to automate the process or transforming data of the respective field. For example, you can have a net transaction amount which is the gross amount\*quantity-discount. For any such automated computations for a field/entry, you can use the transformation column - To add or update transformation, click on the respective **Edit** icon.\
  To know more about header mapping, data transformation expressions, and filter expressions with examples, navigate to the respective section.

5. Click **Continue** to save and proceed to Step 3 to configure API authentication details. 

## Data Transformation using mapping & expressions

**Attribution Headers**\
File headers mapping to API store or till attribution headers\
**Example 1: Attribute using Till Code**

* Header: Till\_IUN 

* identifierType: const(TILL\_CODE) 

* identifierValue: Till IUN\
  **Example 2: Attribute using Store Code**

* Header: Store Code 
  * identifierType: const(STORE\_CODE) 
  * identifierValue: Store Code 

## Filter Expressions

**Example: Process dataflow only if a transaction is paid or refunded.**

* **Headers**: Financial Status 
* **Filter header mapping (header)**: Financial Status\
  **\* Filter expression: $\{header\_value:equals('paid')**:or($\{header\_value:equals('refunded')})} 

## Data Transformation

Header Mapping\
Mapping the API fields *billAmount* and *billNumber* with headers

1. **Header**: BILL AMOUNT;  **Value Mapped**: BILL AMOUNT 
2. **Header**: TRANSACTION ID; **Value Mapped**: TRANSACTION ID\
   Assign a constant value

<Table align={["left","left","left"]}>
  <thead>
    <tr>
      <th>
        Operator
      </th>

      <th>
        Expression Format
      </th>

      <th>
        Example
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        const
      </td>

      <td>
        const\{header name}
      </td>

      <td>
        1. Expression to set the source as INSTORE:\
           const\{INSTORE}
        2. Expression to set Transaction Type as Not Interested:\
           const\{NOT\_INTERESTED}
      </td>
    </tr>
  </tbody>
</Table>

Arithmetic expressions

<Table align={["left","left","left"]}>
  <thead>
    <tr>
      <th>
        Supported Operators
      </th>

      <th>
        Expression Format
      </th>

      <th>
        Example
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        * *
          * /
      </td>

      <td>
        exp\{hdr\{header 1} operator hdr\{header 2}}\
        Ensure the open or close bracket '\{' '}'\
        Note: Ensure that the braces are matched properly (opened and closing).
      </td>

      <td>
        Example 1: Compute Net Amount 

        Headers: LineItem\_Amount, LineItem\_Discount\
        Expression: exp\{hdr\{LineItem\_Amount} - hdr\{LineItem\_Discount}}
      </td>
    </tr>

    <tr>
      <td>

      </td>

      <td>

      </td>

      <td>
        Example 2: Compute net amount based on quantity\
        Headers: LineItem\_Amount, Quantity\
        Expression: exp\{hdr\{LineItem\_Amount} \* hdr\{Quantity}}
      </td>
    </tr>

    <tr>
      <td>

      </td>

      <td>

      </td>

      <td>
        Example 3: Currency Conversion: INR to DOLLAR

        Headers: LineItem\_Amount\
        Expression: exp\{hdr\{LineItem\_Amount} / 74}
      </td>
    </tr>
  </tbody>
</Table>

String operations

<Table align={["left","left","left"]}>
  <thead>
    <tr>
      <th>
        Supported Operators
      </th>

      <th>
        Expression Format
      </th>

      <th>
        Example
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        startsWith
        endsWith
        concat
        substring
      </td>

      <td>
        exp\{string expression1.concat(string expression2)}
      </td>

      <td>
        Example 1: Concat two or more headers for Description.\
        Headers: Item\_Name, Item\_Purpose\
        Expression: exp\{'hdr\{Item\_Name}'.concat('hdr\{Item\_Purpose}')}
      </td>
    </tr>

    <tr>
      <td>

      </td>

      <td>

      </td>

      <td>
        Example 2: Concat two or more headers with fixed info for Item Description.\
        Headers: Item\_Name, Item\_Purpose\
        Expression: exp\{'hdr\{Item\_Name}'.concat(' is used for ').concat('hdr\{Item\_Purpose}')}
      </td>
    </tr>

    <tr>
      <td>

      </td>

      <td>

      </td>

      <td>
        Example 3: Remove '+' from the mobile number if exists.\
        Headers: Mobile\_No\
        Expression: exp\{ ('hdr\{Mobile\_No}'.startsWith('+')) ? 'hdr\{Mobile\_No}'.substring(1) : 'hdr\{Mobile\_No}' }
      </td>
    </tr>
  </tbody>
</Table>

Conditional Operations

<Table align={["left","left","left"]}>
  <thead>
    <tr>
      <th>
        Operator
      </th>

      <th>
        Expression Format
      </th>

      <th>
        Example
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        ? :
      </td>

      <td>
        exp\{(conditional expression) ? expression1 : expression2}
      </td>

      <td>
        Example 1: Check if the length of MOBILE number is 10, add country code '+91' otherwise return the existing value.\
        Headers: Mobile\_No\
        Expression:  exp\{('hdr\{Mobile\_No}'.length() == 10) ? '+91'.concat('hdr\{Mobile\_No}') : 'hdr\{Mobile\_No}' }
      </td>
    </tr>

    <tr>
      <td>

      </td>

      <td>

      </td>

      <td>
        Example 2: Check if an item is returned: if yes, set transaction type value 'RETURN' else 'REGULAR'\
        Headers: Is\_Returned (Possible values 'true' / 'false')\
        Expression: exp\{ ('yes'.equalsIgnoreCase('hdr\{Is\_Returned}')) ? 'RETURN' : 'REGULAR' }
      </td>
    </tr>
  </tbody>
</Table>

Complex expressions

<Table align={["left","left","left"]}>
  <thead>
    <tr>
      <th>
        Operator
      </th>

      <th>
        Expression
      </th>

      <th>
        Example
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>

      </td>

      <td>

      </td>

      <td>
        Example 1: Compute Non-fraction Qualified quantity based on Product Category.
        if Product Category is any of FUEL, JEWEL, METAL then qualified quantity would be the difference of LineItem\_Amount and LineItem\_Discount divided by LineItem\_Rate else it would be LineItem\_Qty
        Headers: Product\_Category, LineItem\_Discount, LineItem\_Amount, LineItem\_Rate, LineItem\_Qty
        Expression: exp\{ (\{'FUEL','JEWEL','METAL'}.contains('hdr\{Product\_Category}') ) ? T(Math).floor( (hdr\{LineItem\_Amount} - hdr\{LineItem\_Discount}) / hdr\{LineItem\_Rate}) : T(Math).floor(hdr\{LineItem\_Qty}) }
      </td>
    </tr>
  </tbody>
</Table>
