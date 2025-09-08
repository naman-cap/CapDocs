---
title: Points & Slabs
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
# Bill Points Promotion (Accrual)

This profile lets you add promotion points for existing transactions and line-items. You also need to choose the points expiry strategy for the points issued through this profile in Configure Template.

**Note**: You cannot import transaction level promotion points through transaction profiles.

* Mobile/Email/External ID\*
* Loyalty Log ID
* TILL IUN or Store's External ID (Store Code)\*
* User ID
* Transaction Number\*
* Date of Transaction\*
* Points\*: Points to be issued
* Mobile/ Email/External id/ User id(Original User Identifier): Identifier of the actual customer who made the transaction. Required for group transaction.

**CSV Sample:\&#xA;**\
Mobile,Til IUN,Transaction Number,Date Of Transaction,Points\
9900111111,mal1,Trans122591,10/10/2015,100

**Template Configuration\&#xA;**&#x49;f you import multiple files using a specific template, all will have the same promotion identifier assigned to them.

The identifier is retained as long as no changes are made to the template.\
When you make a change in the template and save, a new identifier is generated.

![5dcf6aa ee94hFCkY7IdwUQsgiohRoNBacVkGxpDUA](https://files.readme.io/5dcf6aa-ee94hFCkY7IdwUQsgiohRoNBacVkGxpDUA.png)

<Table align={["left","left"]}>
  <thead>
    <tr>
      <th>
        OPTION
      </th>

      <th>
        DESCRIPTION
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Denote stores by external ids
      </td>

      <td>
        Check if stores are denoted by store external ids
      </td>
    </tr>

    <tr>
      <td>
        Replace invalid store names with
      </td>

      <td>
        Choose the store that you want to replace with in place of invalid stores identified in the import
      </td>
    </tr>

    <tr>
      <td>
        Append country code to the mobile number automatically
      </td>

      <td>
        Check this box to prefix the base country code of the org's base country wherever mobile numbers without country code are identified
      </td>
    </tr>

    <tr>
      <td>
        Identification of Bill(Transaction)
      </td>

      <td>
        Choose whether the transaction is identified from the loyalty log or standard fields
      </td>
    </tr>

    <tr>
      <td>
        Choose customers' unique identifier
      </td>

      <td>
        Choose the unique identifier of the customer used at the organization
      </td>
    </tr>

    <tr>
      <td>
        Do not add points if points already provided
      </td>

      <td>
        Check this box to avoid accruing points in case of multiple imports for the same bill. If unchecked, the points that are imported every time will keep adding to the existing bill
      </td>
    </tr>

    <tr>
      <td>
        Select the expiry strategy for points expiry
      </td>

      <td>
        Choose the desired points expiry strategy for the current template
      </td>
    </tr>

    <tr>
      <td>
        Promotion name
      </td>

      <td>
        Enter the name of the promotion.\
        Note: The name you specify will store in the backend directly. Hence, when you fetch details, the system no longer appends the timestamp to promotion name (as earlier), but retains the name that you specified.
      </td>
    </tr>

    <tr>
      <td>
        Points allocation strategies(only delayed accrual)
      </td>

      <td>
        Choose the delayed accrual strategy that you want to associate to the current points (only for delayed accrual points)
      </td>
    </tr>

    <tr>
      <td>
        Import on group primary customer
      </td>

      <td>
        Set this option to Yes for user group import and use the identifier of the primary member of the group to identify the group.
      </td>
    </tr>

    <tr>
      <td>
        Set user defined promotion identifier
      </td>

      <td>
        Check this if you want to use an external identifier for the promotion and enter the identifier in the text box that appears.  

        * When you provide a  new identifier, a new promotion is created with the given identifier and name.  

        * When you provide an existing identifier, points will be awarded under the existing promotion.  

        * \*NOTE\*\*:  Ensure you provide the same promotion name when using existing promotion identifier. If there is a mismatch, the system will throw an error.
      </td>
    </tr>
  </tbody>
</Table>

> 📘 More About Delayed Accrual
>
> * You can add points only for existing transaction line items.
>   * The issual date for the points will always be the current date.
>   * The points allocation date is the date on which the points are actually added to the current points. For example:\
>         *If a transaction with bill date A is sent to Loyalty EMF on date B, the awarded date will be date B.\&#xA;* If a transaction/add on date A gets replayed on date B, the awarded date will be date B.\
>           \* If bill points with bill date A are imported on date B, the awarded date will be date B.
>   * The 'delayed accrual points' will be added to the 'current points' on the next morning of the (event date  + number of days of delay) specified in the point allocation strategy
>   * if a transaction is added on 28th Sep and the number of days of delay is 1, the delayed accrual points will get added to current points on the morning of 30th Sep (morning after 28th Sep + 1 day). The awarded date will be 30th Sep.
>   * An event should have same type of points allocation strategies (either direct allocation or delayed accrual but not both).
>   * An event cannot have allocation strategies with different delay accrual period.

# Line Item Points Promotion

This profile lets you update line-item level promotion points for loyalty transactions. The transaction number, and transaction date are required to update promotion points. You can also use loyalty log id instead of transaction number and date.

Following are the supported fields for this import:

* Loyalty log Id \* (If you want to use LOYALTY\_LOG\_ID to identify the transaction )
* Email /Mobile/ External id/ User id\*
* Till IUN Or Store Ext Id(Store Code)
* Item id/ Item Code\*
* Transaction Number(Bill Number)\* (If Identification of Bill is chosen as STANDARD\_FIELD)
* Date Of Transactions(Bill Date)\* (If Identification of Bill is chosen as STANDARD\_FIELD)
* Points\*
* Mobile/ Email/External id/ User id(Original User Identifier): Identifier of the actual customer who made the transaction. Required for group transaction.

**Note**: You can get the loyalty\_log\_id in the user\_management.loyalty\_log table

**Template Configuration**\
If you import multiple files using a specific template, all will have the same promotion identifier assigned to them.

* The identifier is retained as long as no changes are made to the template.
* When you make a change in the template and save, a new identifier is generated. 

![93adf62 gkMhedXhuSoiGOCKPItQLHGxtvKL5ANv5w](https://files.readme.io/93adf62-gkMhedXhuSoiGOCKPItQLHGxtvKL5ANv5w.jpg)

<Table align={["left","left"]}>
  <thead>
    <tr>
      <th>
        OPTION
      </th>

      <th>
        DESCRIPTION
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Denote stores by external id
      </td>

      <td>
        Check this box if you are using (in the CSV file) store external ids to denote stores
      </td>
    </tr>

    <tr>
      <td>
        Replace invalid store names with
      </td>

      <td>
        Choose the store that you want to replace with in place of invalid stores identified in the import
      </td>
    </tr>

    <tr>
      <td>
        Append country code to the mobile number automatically
      </td>

      <td>
        Check this box to prefix the base country code of the org's base country if mobile numbers without country code are identified
      </td>
    </tr>

    <tr>
      <td>
        Identification of bill (Transaction)
      </td>

      <td>
        Choose the identifier used for transaction - standard fields or loyalty log id.\
        Standard fields include transaction number, and transaction date where as the loyalty log id is the unique id for the transaction created in the log. You can get the loyalty log id from user\_management.loyalty\_log table in the db
      </td>
    </tr>

    <tr>
      <td>
        Identification of line item (Transaction)
      </td>

      <td>
        Choose the identifier used for line-item (item id or item code)
      </td>
    </tr>

    <tr>
      <td>
        Choose customers' unique identifier
      </td>

      <td>
        Choose the unique identifier used for customer registration
      </td>
    </tr>

    <tr>
      <td>
        Do not add points if points are already provided
      </td>

      <td>
        Check this box to disable adding points if the points are already added for the line-item.  

        * \*When unchecked\*\*, if you have imported 5 points for a line-item of a loyalty transaction who already has 10 line-item promotion points, the customer will have 15 (10+5) promotion points for the line-item
      </td>
    </tr>

    <tr>
      <td>
        All programs of the org
      </td>

      <td>
        Choose the loyalty program from which you want to issue points.
      </td>
    </tr>

    <tr>
      <td>
        Select the strategy for points expiry
      </td>

      <td>
        Choose the expiry strategy for the points issued through the current import. You will see all expiry strategies associated with the chosen program
      </td>
    </tr>

    <tr>
      <td>
        Points allocation strategies(only delayed accrual)
      </td>

      <td>
        Choose the delayed accrual strategy that you want to associate to the current points (only for delayed accrual points)
      </td>
    </tr>

    <tr>
      <td>
        Promotion name
      </td>

      <td>
        Specify the name of the promotion to which you want to associate the current points. If the name is not identified, then points are issued under a new promotion name that you specify here.
      </td>
    </tr>

    <tr>
      <td>
        Import on group primary customer
      </td>

      <td>
        Set this option to Yes for user group import and use the identifier of the primary member of the group to identify the group.
      </td>
    </tr>

    <tr>
      <td>
        Set user-defined Promotion Identifier
      </td>

      <td>
        Check this if you want to use an external identifier for the promotion and enter the identifier in the text box that appears.  

        * When you provide a  new identifier, a new promotion is created with the given identifier and name.  
        * When you provide an existing identifier, points will be awarded under the existing promotion.  
        * \*NOTE\*\*:  Ensure you provide the same promotion name when using existing promotion identifier. If there is a mismatch, the system will throw an error.
      </td>
    </tr>
  </tbody>
</Table>

<Note title="Note">
* You cannot add a new transaction or line item through this import. You can just add or update promotion points of a transaction.
  * You can just add points to the existing transaction line-item but cannot override existing points.
</Note>

##

This profile lets you redeem points of loyalty to customers against transactions.   

This profile lets you redeem points of loyalty customers against transactions.   

* Mobile/Email/External ID\*
* Loyalty Log ID
* TILL IUN or Store's External ID (Store Code)
* User ID
* Transaction Number\*
* Date of Transaction
* Points (points to be redeemed)
* Notes

CSV Sample:

LoyaltyLogId,Mobile,Til IUN,Transaction Number,Points 

9900111111,mal1,Good122595,100

**Template Configuration** 

![66d2885 GkG4FsZlAWnRmIb3Y7hhGLFWR9Q B2oxVg](https://files.readme.io/66d2885-GkG4FsZlAWnRmIb3Y7hhGLFWR9Q_B2oxVg.png)

| OPTION                                                     | DESCRIPTION                                                                                                                          |
| :--------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------- |
| Denote stores by external ids                              | Denote stores by external ids                                                                                                        |
| Denote stores by external ids                              | Choose the store that you want to replace with in place of invalid stores identified in the import                                   |
| Append the country code to the mobile number automatically | Check this box to prefix the base country code of the org's base country wherever mobile numbers without country code are identified |
| Choose customers' unique identifier                        | Choose the unique identifier of the customer used at the organization                                                                |

# Slab (tier)

You can use this profile to update the loyalty tiers of customers or groups. You can also use this profile to update only the expiry date of the tiers.

To import the loyalty slabs of registered customers or groups, perform the following:

1. Create a CSV file with the following fields:

   1. Customer identifier (email/mobile number/external ID/user ID). The mobile number is mandatory.
   2. Group identifier (group external ID, primary user ID, group ID, email/mobile number/external ID of the primary user)
   3. Store's External ID/ Store Terminal User Name
   4. Slab Name - This is a mandatory field.
   5. Notes
   6. Last Slab Change Date
   7. Custom Slab Expiry Date - You can use this option to change the expiry dates of customer tiers in bulk. For example, during the onboarding of new brands or can also be used to update customers' tier expiry date in bulk whenever required.\
       This field becomes mandatory if the configuration `Set custom slab expiry date for the users` is selected.\
      **Notes:**
      * The expiry date should be a future date and not beyond the year 2100.
      * The date should be in the `YYYY-MM-DD HH:MM:SS` format. If the expiry date is added in the `YYYY-MM-DD` format, the system will consider it as `YYYY-MM-DD 00:00:00`.

   **Sample CSV file format:**\
   `user_id,store_code,slab_name,notes,last_slab_change_date,new_slab_expiry_date
   423771868,'124','GOLD','notes','2024-01-13 00:00:00','2028-01-13 08:06:00'`

   ![5e63892 Screenshot 2024 05 24 at 7](https://files.readme.io/5e63892-Screenshot_2024-05-24_at_7.10.15_PM.png)

## Template Configuration

![88385ee Screenshot 2024 05 24 at 7](https://files.readme.io/88385ee-Screenshot_2024-05-24_at_7.07.35_PM.png)

| OPTION                                                 | DESCRIPTION                                                                                                                                                                 |
| :----------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Denote stores by external ids                          | Check this box if the stores of the organization use store external ids as store codes                                                                                      |
| Replace invalid store names with                       | Choose the store that you want to replace within the place of invalid stores identified in the import                                                                       |
| Append country code to the mobile number automatically | Check this box to prefix the base country code of the org's base country wherever mobile numbers without country code are identified                                        |
| Choose customers' unique identifier                    | Choose the unique identifier of the customer used at the organization                                                                                                       |
| Do not downgrade the slabs for users                   | Check this option to not allow downgrading loyalty tiers that you want to import                                                                                            |
| Renew slabs for users                                  | Check this option to renew loyalty tiers that are downgraded based on the tier downgrade strategy configured for the org. For example, in membership-based loyalty programs |
| All programs for the org                               | Choose the loyalty program for which you want to update customer tiers.                                                                                                     |
| Store access group                                     | Displays the [access group ](https://docs.capillarytech.com/docs/access-group#access-group)of the store                                                                     |
| User Group2 Enabled                                    | Check this box if you want to update slabs of user groups.                                                                                                                  |
| Set custom slab expiry date for the users              | Select this option to set an expiry date for the tiers of the customers. The `Custom Slab Expiry Date` becomes mandatory if this option is selected.                        |
