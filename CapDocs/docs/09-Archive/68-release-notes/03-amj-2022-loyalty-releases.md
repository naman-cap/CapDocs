---
title: AMJ 2022 | Loyalty+ Releases
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
## June Releases

### New and improved UI for Loyalty+ Promotions!

Loyalty+ Promotions are coming to you with a fresh coat of paint and some serious usability improvements across the board. Here's what you can look forward to:

* A calendar view to better visualize the schedule of your promotions and plan better 
* View all your promotions across all programs and various customer activities listed in a single view 
* See performance KPIs along with the promotions listing! 
* Create and edit promotions in a single streamlined flow 
* Performance improvements so that your promotions load fast even if you have hundreds of them

![77a7e1d Screenshot 2022 05 25 at 10](https://files.readme.io/77a7e1d-Screenshot_2022-05-25_at_10.46.38_AM.png)

#### North star for tracking: Promotions Dashboard

The Promotions Dashboard is hands down the strongest addition to your campaign tracking, reporting and implementation. While inaccessible before, we’re now making this live for you to track:

* **Campaign Performance** - through points issued and redeemed in the campaign
* **Status** - If a campaign is active or inactive
* **Timeframes** - Duration of when the promotions are/were live for easier reporting
* **Owners** - Who was responsible for implementation of each promotion
* **Campaign Tagging** - Which customer activity and program a promotion is tied to

![](https://files.readme.io/dbe2b0b-promotions.gif "promotions.gif")

#### Plan like a pro with the Promotions Calendar View

Get an insight into all promotions active in a time frame in a single snapshot view. The calendar view is created for pro marketers who want to plan in advance, avoid redundant overlaps and implement winning strategies.

![7e1e078 unnamed 2](https://files.readme.io/7e1e078-unnamed_2.gif)

* **One-click activation** - Want to activate a promotion? Click. Want to pause a promotion? Click. It’s honestly as simple as that.

![2308f0d unnamed 3](https://files.readme.io/2308f0d-unnamed_3.gif)

### Supplementary Memberships to manage expiry of the scheme/program

 Supplementary programs are micro programs run on top of the brand's core loyalty offerings. These offer customization at a segment level. However these programs can have limited life as they are promotional in nature or based on partner related benefits.

Currently we do not allow setting up the end of a particular supplementary program.

So, we have now enabled a feature supplementary program where brands can choose the exact date when they want the program to end.

While setting up the programs, we now have two additional toggle buttons :

* **Set Validity** - Brands can set/update the end date of a supplementary program (SP) while setting up the program. As soon as they toggle the button to yes, an option appears below (Validity till) where they can set/choose the date when you want to end the supplementary program. 
* **Move customers to another program on expiry** - Once the program gets expired or deactivated as per the validity set in the above option, brands can move their customers to a different supplementary program. As soon as they toggle the button to yes, a drop down appears below (Backup partner programs), where they can select the partner program they want their customer to move to.\
  Only those partner programs who have the validity/expiry greater than the current partner programs will appear in the drop down. 

![](https://files.readme.io/b3a20cc-LLM0AQHzUNaeY3pNCcaufCLLL0Z7NwE4Bw.png "LLM0AQHzUNaeY3pNCcaufCLLL0Z7NwE4Bw.png")

#### Improved integrations for Loyalty+ Promotions

* Currently apps show running active loyalty promotions (points as benefit) to the customers. However there is no getCustomerPromotions API since loyalty promotions are not issued to a customer. They are event triggered.
* The challenge is to remove these promotions once the customer achieves the condition and points have been allocated for the promotion. For cart promotions, they check the redemption counts available and then do. However points promotions are displayed as a hack via cart promotion API.
* So, in the getPromotionsMetadata API for loyalty promotions, we have added a parameter “includeRestrictions” .
* If the parameter is passed, api to return the following limits set along with the customer achieved values against those limits

1. Maximum Points to be Issued in a Single Event         
2. Restrict Number of Point Events for a Member
3. Maximum Points to be issued to a member
4. Maximum Points to be issued from the Promotion\
   Sample payload :\
     "limits": \{

   ```
                             “maxPointsperEvent”:100
   ```

"pointsPerCustomer": 1000,

```
                          "numberOfTimesPerCustomer": 2,

                          "totalPointsInPromotion": -1

        },

        "customerLimits": {
```

"currentPointsPerCustomer": 100,

```
                          "currentNumberOfTimesPerCustomer": 2,

        }
```

“promotionLimit”\{

```
                          "currentTotalPointsInPromotion": -1
```

}

#### OU updates

* Improvements on Org Units (combined with CDP)
* OUs now recognize Product Masters and each OU can have independent product Masters 
* OU added as a new element in “Scopes” for rule writing 
* Loyalty Rules Engine now also recognizes Product attributes based on the OU

#### Gift vouchers powered by Promotion Engine

Gift vouchers (Powered by Promotion Engine), enable brands to distribute or issue payment vouchers to their customers that act as currency. These are distributed via coalition or other marketing channels and can be physical or digital vouchers. 

The key features of gift vouchers are :

* These can be owned by both Loyal and Non-loyal customers. 
* They can specific to certain product category for eg. $10 Fuel voucher or $20 NFR voucher
* Depending on the subscription program(scheme), customers can get additional discounts
* Like cart promotions, gift vouchers can be configured as an incentive as a part of the Promotion Engine. 

![](https://files.readme.io/e3c104b-ihGLWckZAp5eG5kMbwP72C4sOtV4EwyFMg.png "ihGLWckZAp5eG5kMbwP72C4sOtV4EwyFMg.png")

Stay tuned for more details !! 

#### Stacking of promotions at a quantity, lineitem and cart level (product-based or promotion-based approach)

Currently the system works in the way that only one promotion can be applied to one product or lineitem i.e it is technically not possible for us to evaluate the point based promotions, coupons, cart promotions/ gift vouchers in a single call.\
So, now brands can enable stacking of promotions at a quantity, lineitem and cart level.\
Stacking means applying multiple promotions on a product or at cart value.\
Product promotions means the benefit is on SKU/products.\
Cart promotions means the benefit is on cart total after applying the product promotions.\
So in the settings for Cart Promotions, you will now see the options to enable multiple promotions for a single lineitem/product & for cart level.\
You can simply toggle these buttons and configure the setting accordingly :\
Exclude any product/SKU if you want to from stacking.\
Apply further conditions on the product and enable stacking depending on the quantity of the product.\
Define a limit on the number of promotions (multiple promotions) applying on the cart if you wish to.\
Set discount calculation on the cart at a gross or net amount.

![](https://files.readme.io/61cba08-3Vph4P-LK0k4xgqKCWYvK3KJeyjW4y5TpQ.png "3Vph4P-LK0k4xgqKCWYvK3KJeyjW4y5TpQ.png")

#### Tender-based cart promotions

Your brand might need to promote a specific payment mode or have tie ups with banks or payment providers. With the addition of tender based discount, you can now provide instant rebates to your consumers on the payment mode. You can completely customize it to any level.\
For example, you can issue a 10% discount to customers of Bangalore locations who shopped using ABC bank credit card.

![](https://files.readme.io/6af0c9e-hmPCN5_dLYk4D-4ScJVjO1wTAxHvrz0QVA.png "hmPCN5_dLYk4D-4ScJVjO1wTAxHvrz0QVA.png")

#### Marvel now supports third-party points as currency for the purchase of rewards

Marvel reward issual are tightly coupled to the Loyalty+ for the points redemption, but what if the source of reference of the loyalty points is different for a brand. The requirement here is having rewards (from marvel) allocated to users by validating and redeeming the points from a third party instead referring to the default approach of validating and redeeming directly from the Capillary Loyalty system.

![](https://files.readme.io/1bbaf5f-juWabpxdo_NYDJvn3FAjkUkoS3KA3gDzFg.png "juWabpxdo_NYDJvn3FAjkUkoS3KA3gDzFg.png")

So, we have made this enhancement in the product module (marvel), to extend the support of external points systems to validate and redeem points against the voucher and catalog selected by the User. 

***

## May Releases

### Data Import

Changes to promotion nomenclature and ID handling for customer promotion points through Import Framework

#### Summary

We have made some key enhancements for the benefit of brands and system integrators that display promotion names for imported points in a customer-facing app or website and/or leverage promotion IDs for reporting on import activities across time. 

The following are the changes made - 

1. The promotion name you specify during import is now retained as-is - no timestamp is appended to the name.
2. Files imported using a particular import template will have the same promotion identifier assigned.
3. Specify an external promotion identifier for a particular import template. This could be a new or existing identifier.
4. The following import profiles will have the changes mentioned.

* Customer Promotion
* Bill Points Promotion(Accrual)
* Line Item Points Promotion
* Transactions(Bills) Deduction 

> 📘
>
> For the Transactions (Bills) deduction profile, promotion expires all points and awards the remaining back as a single PABP entry for which the user specifies the name. Hence, it is part of this enhancement.

#### Problem

Import framework is preferred and used extensively by brands to add promotional points to a customer’s account for multiple reasons. For example, bulk goodwill, integration lapses, promotions executed through other 3rd party systems, etc. While using the import framework, there are some challenges that brands and system integrators force. 

1. Appending the date and time of processing the file automatically at the end of the promotion name. 

* For example, If you name the promotion in the template as Bonus Points, then it would show up as Bonus Points-20220503122236.
* This was done earlier to maintain uniqueness, prevent conflicts in the system, and enable easy debugging.\
  Other superior methods (i.e. event logging) have come up since then to address these problems, but the timestamp remained.
* This made it unsightly and unfriendly from a UX perspective when used in a customer-facing app or website

2. Each file imported would get a separate internal promotion identifier generated by the system

* This made it difficult to pivot across all the points given through a single template for the purpose of business reporting or analysis
* This was particularly a problem since the import framework has file size limits, and there would often be instances where a single intended import has to be split across multiple files, and each ended up with their own identifiers

3. Users could not specify the external promotion identifier against these imported points

* This limits the usability of the external identifier feature
* It also made it impossible to have an activity where part of it would be executed through the Loyalty events, and a part gets imported 

#### Solution

1. The system no longer adds the timestamp to the end of the promotion name, and instead retains the name the user specifies. When you create these point entries, names stored in the backend are directly impacted and not just restricted to displaying names while fetching.  

* For example, the name used to appear as “Bonus Points-20220503122236”, will now show up only as “Bonus Points”.

2. Multiple files imported using a particular saved import template will all have the same promotion identifier assigned to them

* This ID is retained as long as no changes are made to the template.
* When a new change is made in the template and saved, a new ID is generated.

3. Users can now input an external promotion identifier against a particular import template for those four mentioned templates

* This is optional.
* The user can provide a brand new identifier, in which case a new promotion is created with this identifier and name.
* The user can also provide an existing identifier, in which case points will be awarded under the existing promotion. 

> 📘
>
> The user must take care to provide the same name as the existing promotion’s name. If there is a mismatch, the system will throw an error.

For more details,  see Bill points promotion, Line item points promotion, Customer promotion, and Transaction deduction. 

#### Future Scope

The following additional enhancements are planned in the near future to further improve the usability of the above features and to address some of the unsolved problems.

1. Easy traceability of the import file details against a particular point entry.

* The import file ID for a particular point entry will be made available through Ledger Explode API.
* The same will also be used in Member Care so that the user can find the import file ID directly from the points ledger in Member Care’s new UI in a few clicks.

2. Ability to import points from multiple activities/promotions in a single file or scheduled import.

* We will allow the user to optionally specify the promotion names and details as part of the file rather than the template itself, so that they may include multiple promotions in a single file itself.
* This can be useful in flat/batch file-based integrations with other third-party systems.
