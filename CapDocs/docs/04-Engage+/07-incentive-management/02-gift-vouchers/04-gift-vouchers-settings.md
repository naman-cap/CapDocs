---
title: Gift Vouchers Settings
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
This section lets you configure some key org level gift voucher settings.

To configure gift voucher settings, on Engage+, navigate to **Settings** > **Gift Voucher**. Click on the section that you want to configure.

* **Prioritize voucher redemption by**
* **Voucher rounding logic**
* **Manager custom fields**

![7b3c5a4 image17](https://files.readme.io/7b3c5a4-image17.png)

# Prioritize voucher redemption by

![a8fe21c image8](https://files.readme.io/a8fe21c-image8.png)

1. **Voucher type**

Under this section, you will see a toggle button for voucher type. It is non movable and will always remain at the top priority. So, while redemption, the first priority will always be given to the type of voucher to be redeemed if this is enabled. When there are multiple promotions in the org, you can enable the toggle button and the drop down shows 3 kinds of promotions:

* **Loyalty vouchers** - Drag this up to prioritize normal promotion programs such as Loyalty, Loyalty earning and POS promotions.
* **Reward linked** - Drag this up to apply all promotions purchased from the rewards catalog (Marvel rewards) irrespective of any other settings. If the org has multiple promotions per lineitem disabled,  the setting is bypassed and multiple rewards will apply. Rewards are essentially considered as pre-bought gift items.
* **Code linked** - Drag this up to prioritize code linked promotions configured in the cart and catalog promotions.

2. **Maximum value & expiry first**

In case of multiple vouchers, we can define the ranking for the vouchers, that which will get redeemed first. The vouchers are based on either maximum discount or earliest expiry.

* **Maximum value** - Drag this up to associate the voucher with maximum discount value compared to other vouchers that are applicable.So, the vouchers with more discount values will apply first. However, if there is more than one voucher with the same maximum discount value, among these vouchers, the one that expires earlier is considered.
* **Expiry first** - Drag this up to associate the voucher that has the earliest expiry date compared to other vouchers that are applicable.

For example, assume the following vouchers are applicable.

1. Riders -VCHR 9% expiring in 3 days
2. Riders - VCHR 5% expiring in 7 days
3. Riders - VCHR 8% expiring in 1 day

So, the vouchers will get sorted by expiry date and are applied as follows :

1. Riders - VCHR 8% expiring in 1 day
2. Riders -VCHR 9% expiring in 3 days
3. Riders - VCHR 5% expiring in 7 days

If two vouchers have same expiry dates, then the voucher created first would be applied first. 

**NOTE - If the conflict still persists, then the system would choose a promotion randomly.**

## Voucher rounding logic

![0597c8f image19](https://files.readme.io/0597c8f-image19.png)

Select the rounding mode and the decimal precision required as per your billings.

## Custom fields

![0464048 image3](https://files.readme.io/0464048-image3.png)

You can add voucher level custom fields (meta-information) that are required for your gift vouchers. For example, you can include Terms & Conditions, Disclaimer and so on.

To add voucher custom fields :

1. Click on Create custom field under the Manager custom fields. 

![95517bb image12](https://files.readme.io/95517bb-image12.png)

2. In Name, enter the name of the custom field.
3. In Datatype, choose the input value supported for the custom field - Date (for date fields), Number (to input numeric values), String (to input alpha-numeric values).
4. If the field is required to create a promotion, enable the toggle is Mandatory from No to Yes.
5. Click Save.

You can see the fields you added here on the same page below the Manage custom fields with the name, datatype and mandatory option. You can edit the custom field by clicking on the pen option against each row.