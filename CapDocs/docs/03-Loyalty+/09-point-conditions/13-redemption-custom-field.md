---
title: Points Redemption Custom Fields
excerpt: QUERIES FOR POINTS REDEMPTION CUSTOM FIELD
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
**Table Name:** 

```
user_management__loyalty_redemptions
user_management__custom_fields_data
user_management__custom_fields
```

**Note** Coupon redemption custom fields are stored in the `user_management.custom_fields_data` table under the `VOUCHER_REDEMPTION` scope, with associatedId set to the corresponding `redemptionId`.

## **All Points redemption custom fields**

Exporting all points redemption custom fields data for Org ID and for a given time period.

To find all custom field data of points redemptions in a time period. \<**replace org\_id and date** according to the requirement in the where clause>

```sql
select lr.org_id, lr.user_id, lr.bill_number, from_unixtime(lr.`date`/1000,'yyyy-MM-dd') as redemption_date, cf.name as custom_field_name, cfd.value as custom_field_value from source_delta.user_management__loyalty_redemptions lr 
join source_delta.user_management__custom_fields_data cfd on lr.org_id=cfd.org_id and lr.id=cfd.assoc_id 
join source_delta.user_management__custom_fields cf on cfd.cf_id=cf.id and cfd.org_id=cf.org_id
where lr.org_id=313 and lr.`date` between to_unix_timestamp('2022-01-01', 'yyyy-MM-dd')*1000 and to_unix_timestamp('2022-12-31', 'yyyy-MM-dd')*1000
```

Please refer to the image below for your reference:

![9799ccb image 8](https://files.readme.io/9799ccb-image_8.png)

## **Particular points redemption custom field**

Exporting points redemption custom field data of a particular custom field for  Org ID and a given time period.

To find the value of a particular custom field data of points redemptions in a time period. \<**replace org\_id, custom\_field name, and date** according to the requirement in the where clause>

```sql
select lr.user_id, lr.bill_number, lr.points_redeemed, from_unixtime(lr.`date`/1000,'yyyy-MM-dd') as redemption_date, cf.name as custom_field_name, cfd.value as custom_field_value from source_delta.user_management__loyalty_redemptions lr 
join source_delta.user_management__custom_fields_data cfd on lr.org_id=cfd.org_id and lr.id=cfd.assoc_id 
join source_delta.user_management__custom_fields cf on cfd.cf_id=cf.id and cfd.org_id=cf.org_id
where lr.org_id=313 and cf.name='birthday' and lr.`date` between to_unix_timestamp('2022-01-01', 'yyyy-MM-dd')*1000 and to_unix_timestamp('2022-12-31', 'yyyy-MM-dd')*1000
```

Please refer to the image below for your reference

![5aa505f image 7](https://files.readme.io/5aa505f-image_7.png)
