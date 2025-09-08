---
title: Badges (archived)
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

# Introduction


Badges are a type of visual recognition used in loyalty programs to reward customers for their progress, specific actions or achievements. These serve as a form of gamification and a sense of pride and accomplishment within the user, reinforcing the targeted behaviours and boosting engagement.

Customers want to build deeper relationships with brands beyond transaction and that’s where emotional loyalty comes into play. Customers are recognized and appreciated for the effort that they put in, the money they spend, and their loyalty towards the same brand. Hence, Badges tap into the emotional side of the customers making them hooked to your brand, giving a more fulfilling experience, moving beyond the realm of mere transactions and discounts.

# Use cases


## Travel and Hospitality Vertical


![46bd37c image3](https://files.readme.io/46bd37c-image3.png)

## Fuel Vertical


![d34f890 image16](https://files.readme.io/d34f890-image16.png)

## Fashion and Retail Vertical


![cd34342 image36](https://files.readme.io/cd34342-image36.png)

## CPG Vertical


![fd39108 image39](https://files.readme.io/fd39108-image39.png)

# Sample End Customer (Cx) Journeys


## New member/welcome badges


<span style={{fontWeight: 400}}>Cx registers in brand&rsquo;s loyalty program</span>
<span style={{fontWeight: 400}}>Upon successful registration, Cx is automatically awarded the &ldquo;New Member&rdquo; badge</span>
<span style={{fontWeight: 400}}>Cx receive the associated benefits with the badge.</span>
<span style={{fontWeight: 400}}>Cx receives a notification about earning the badge and associated benefits</span>
<span style={{fontWeight: 400}}>A badge is displayed in Cx&rsquo;s loyalty program account</span>
<span style={{fontWeight: 400}}>Cx feels proud and accomplished after receiving the badge on registering and continues to engage with the brand to receive more badges</span>

## Activity based badges


<span style={{fontWeight: 400}}>Cx completes specific actions such as making a purchase, writing a review, or referring friends.</span>
<span style={{fontWeight: 400}}>Each completed action unlocks a new badge, such as "First Purchase," "Reviewer," or "Referral Champion."</span>
<span style={{fontWeight: 400}}>Cx is notified of their earned badges and can view them in their loyalty program account.</span>

# Customer views for Badges


<p><span style={{fontWeight: 400}}>Customers can see the available and earned badges in their mobile app. Clicking on a particular badge also gives information about what the customer has to do to earn the badge, the benefits associated with the badge, the earning period and other details.&nbsp;</span></p>

![deb5b6b Screenshot 2023 11 09 at 3](https://files.readme.io/deb5b6b-Screenshot_2023-11-09_at_3.18.19_PM.png)

![e1015c3 Screenshot 2023 11 09 at 3](https://files.readme.io/e1015c3-Screenshot_2023-11-09_at_3.18.30_PM.png)

<p><span style={{fontWeight: 400}}>Customers can proudly share their badges on social media and become advocates for your brands. They feel happy to be recognized by the brands which makes them feel connected to the brand.</span></p>

![07693db image22](https://files.readme.io/07693db-image22.jpg)

# Getting started


<p><span style={{fontWeight: 400}}>To access the badges UI, add /badges/ui after the cluster URL. For example, </span><span style={{fontWeight: 400}}>https://eucrm.cc.capillarytech.com/badges/ui/</span></p>

<p><span style={{fontWeight: 400}}>By default, badges are not enabled for the organizations. To enable this, contact your CSM.</span></p>

## Creating a Badge


<p><span style={{fontWeight: 400}}>Badges can be created and updated via APIs.</span></p>

For information on Badges APIs,  refer to the [Badges API documentation](https://docs.capillarytech.com/reference/badges). You can use Connect+ for creating and updating badges in bulk. For more information, refer to the Connect+ [Badges template documentation](https://docs.capillarytech.com/docs/create_badges).

## Badge Universe


<p><span style={{fontWeight: 400}}>This page lists all the badges configured for the brand along with their details such as badge name, owner of the badge, duration, status, benefits linked, issue expiry, badges issued, last updated on and last updated by.</span></p>

![baf1458 image9](https://files.readme.io/baf1458-image9.png)

<p><span style={{fontWeight: 400}}>Below is the description of all the fields on the above screen:</span></p>

<tbody>
<tr>
<td>
<p><strong>Column No</strong></p>
</td>
<td>
<p><strong>Description</strong></p>
</td>
</tr>
<tr>
<td>
<p><span style={{fontWeight: 400}}>1</span></p>
</td>
<td>
<p><strong>Name</strong><span style={{fontWeight: 400}}> of the badge</span></p>
<p><strong>Owner</strong><span style={{fontWeight: 400}}> of the badge : The module for which the badge is created. It can be Loyalty, Milestones, Campaigns, Journeys. Defining an owner is mandatory</span></p>
</td>
</tr>
<tr>
<td>
<p><span style={{fontWeight: 400}}>2</span></p>
</td>
<td>
<p><strong>Duration</strong><span style={{fontWeight: 400}}> : Start date and end date of the badge</span></p>
<p><strong>Status</strong><span style={{fontWeight: 400}}> : Status of the badge based on the duration of the badge, it can be upcoming, live and ended</span></p>
</td>
</tr>
<tr>
<td>
<p><span style={{fontWeight: 400}}>3</span></p>
</td>
<td>
<p><strong>Benefits linked </strong><span style={{fontWeight: 400}}>: Points and Coupons can be linked as benefits and max 10 benefits can be linked to a badge. Linking a benefit is optional</span></p>
</td>
</tr>
<tr>
<td>
<p><span style={{fontWeight: 400}}>4</span></p>
</td>
<td>
<p><strong>Issue expiry </strong><span style={{fontWeight: 400}}>: This is the expiry of the badge once the badge is issued to the customer. This expiry is specific to the customer based on the type of issue expiry (fixed date/along with badge end date/relative/never expires)</span></p>
</td>
</tr>
<tr>
<td>
<p><span style={{fontWeight: 400}}>5</span></p>
</td>
<td>
<p><strong>Badges issued :</strong><span style={{fontWeight: 400}}> No of badges issued from the badge series. This data is synced every 2 hours.</span></p>
</td>
</tr>
<tr>
<td>
<p><span style={{fontWeight: 400}}>6</span></p>
</td>
<td>
<p><strong>Last updated on :</strong><span style={{fontWeight: 400}}> The date on which badge was last updated</span></p>
<p><strong>Last updated by :</strong><span style={{fontWeight: 400}}> User by which badge was last updated</span></p>
</td>
</tr>
</tbody>

<p><span style={{fontWeight: 400}}>Badges on the listing page can be filtered by the below parameters:&nbsp;</span></p>

<tbody>
<tr>
<td>
<p><strong>Filter</strong></p>
</td>
<td>
<p><strong>Description</strong></p>
</td>
</tr>
<tr>
<td>
<p><span style={{fontWeight: 400}}>Status</span></p>
</td>
<td>
<p><span style={{fontWeight: 400}}>Status of the badge based on the duration of the badge, it can be upcoming, live and ended</span></p>
</td>
</tr>
<tr>
<td>
<p><span style={{fontWeight: 400}}>Activation Status</span></p>
</td>
<td>
<p><span style={{fontWeight: 400}}>This is the activation status of the badge on top of the status of the badge. A badge can be active or inactive. Live, upcoming, ended badges can be active but only live and upcoming badges can be inactive.</span></p>
</td>
</tr>
<tr>
<td>
<p><span style={{fontWeight: 400}}>Owned by</span></p>
</td>
<td>
<p><span style={{fontWeight: 400}}>The module(s) for which the badge has been created</span></p>
</td>
</tr>
<tr>
<td>
<p><span style={{fontWeight: 400}}>Claimed by</span></p>
</td>
<td>
<p><span style={{fontWeight: 400}}>The module(s) from where the badges will be issued</span></p>
</td>
</tr>
</tbody>

![3c90c02 image8](https://files.readme.io/3c90c02-image8.png)

<p><span style={{fontWeight: 400}}>To view the the owner and claim details for a particular badge,&nbsp; click&nbsp; on the </span><strong>i</strong><span style={{fontWeight: 400}}> icon against the badge owner</span></p>

<span style={{fontWeight: 400}}>For a badge to be claimed by a particular module, first the owner has to be defined and then that module can claim it.</span>
<span style={{fontWeight: 400}}>A badge can have multiple owners and claims</span>
<span style={{fontWeight: 400}}>Once an owner is defined, it can&rsquo;t be removed or replaced, but more owners can be added to the badge.</span>
<span style={{fontWeight: 400}}>Once a claim has been added for a badge, it can&rsquo;t be removed or replaced, but other modules can still claim it.</span>
<span style={{fontWeight: 400}}>The claim gives the information of exactly where the badge is being used/claimed. For example, in the below screenshot, the badge has been claimed in supermarket loyalty program : TransactionAdd and CustomerRegistration events</span>

![7636788 image18](https://files.readme.io/7636788-image18.png)

<p><span style={{fontWeight: 400}}>If a badge owner is defined, but claims are not yet added then it will be shown as below : </span><strong>Not claimed</strong></p>

![61e5981 image10](https://files.readme.io/61e5981-image10.png)

## Viewing badges


<p><span style={{fontWeight: 400}}>You can click on a badge to view all the details of the particular badge.&nbsp;</span></p>

<p><span style={{fontWeight: 400}}>In the Configuration tab, there are three sections:</span></p>

1. Basic details
   1. Images : Unissued, In progress and Issued
   2. Name : Name for the badge. This is a mandatory field.
   3. Description : Detailed description of the badge. This is an optional field.
   4. Duration
      1. start date of the badge. Once a badge is live, start date of the badge can’t be changed. This is a mandatory field and has to be in the future only as per current date and time.
      2. expiresOn : Expiry of the badge which defines by when can the badge be issued. This can be changed even when the badge is live. This is a mandatory field.
   5. Badge issue type
      1. Enrol & Issue : Selected customers are enrolled for these badges, which are then issued once they fulfil the issual condition
      2. Directly issued without enrolment : Badges are not restricted to any specific audience. They can be issued directly to anyone who fulfils the issuance criteria
   6. Enrolment expiry : This is the duration within which a customer must complete the activity for the badge
   7. Owner and Claimed by :
      1. Owner : The module(s) for which the badge has been created
      2. Claimed by : Module(s) which have claimed/used the badge

![546c99a image14](https://files.readme.io/546c99a-image14.png)

2. Issue badges
   1. Issue expiry : The is the duration until which the customer will have the badge once issued to them
   2. Badges Issued : No of badges issued to the customers from the badge series
   3. Issue limit
      1. Customer limit : Overall limit and rolling limits both are supported. Brands can define the restrictions in the permutation combination of all the below options.
         1. Specific duration
            1. Days/weeks/months
         2. Overall limit
      2. Badge limit : Overall limit and rolling limits both are supported. Brands can define the restrictions in the permutation combination of all the below options.
         1. Specific duration
            1. Days/weeks/months
         2. Overall limit

![a4751ab Screenshot 2023 12 29 at 1](https://files.readme.io/a4751ab-Screenshot_2023-12-29_at_1.04.49_AM.png)

3. Benefits :  A badge might or might not have a benefit. Users can link a single benefit or multiple benefits against a badge. This is optional and max 10 benefits can be added against a badge.
   1. Coupon : On hovering over the info icon, you can see more details about the coupon series linked like coupon name, coupon ID, expiry date
   2. Points : On hovering over the info icon, you can see more details about the points linked like the earn condition and expiry condition.

Coupon as a benefit

![532d6c2 image17](https://files.readme.io/532d6c2-image17.png)

Points as a benefit

![aa3caee Screenshot 2023 12 29 at 1](https://files.readme.io/aa3caee-Screenshot_2023-12-29_at_1.05.58_AM.png)

In the Information tab in view mode, you can find the Badge ID, creation date and creator of the badge. You can also copy the badge ID directly from here like below.

![c73321c image19](https://files.readme.io/c73321c-image19.png)

## Badge Images


The listing page also displays the images tagged to the badge. Three images can be uploaded for each badge status: one for the unissued status, one for the in-progress status, and one for the issued status.

1. To view the three images that can be added, hover over the image icons of a specific badge.

![4f9cc14 image15](https://files.readme.io/4f9cc14-image15.png)

If no image is added, an Upload image option appears.

![26ef118 image20](https://files.readme.io/26ef118-image20.png)

2. To upload the images, click Upload image. You can also over on the rightmost section of the card and click on the upload images icon.

![6d3cd68 image30](https://files.readme.io/6d3cd68-image30.png)

The Upload Image page appears, allowing you to add/replace images and provide names for each image.

* Image tags : Users can choose to add any of the below or all images against a badge.
  * Unissued : This tag represents badges that have not yet issued to the customers
  * In progress : This tag represents badges where customer has partially completed the issual activity but not yet issued
  * Issued : This tag represents badges that have been successfully issued to the customers
* Maximum size of each image can be 2 MB
* Aspect ratio should be 1:1
* Image formats supported are JPEG, JPG, PNG and SVG.
* Adding images against a badge is optional, brands can also use their own CMS to display the badge icons to their end customers.

![b438b64 image31](https://files.readme.io/b438b64-image31.png)

![f915158 image26](https://files.readme.io/f915158-image26.png)

![356d01d image4](https://files.readme.io/356d01d-image4.png)

![eac3559 image13](https://files.readme.io/eac3559-image13.png)

3. Click Done. If the image size, aspect ratio, or format is not supported, an error message will be displayed as shown in the image below.

![6a9011d image2](https://files.readme.io/6a9011d-image2.png)

4. If the user attempts to exit without saving changes, a dialog box will appear asking if they want to exit or continue editing. Click Exit to exit without saving the changes.

![0eca4ff image5](https://files.readme.io/0eca4ff-image5.png)

## Deactivating and activating badges


Badges can be deactivated and activated from the quick actions as shown below.

![3494887 image7](https://files.readme.io/3494887-image7.png)

Confirmation Screen

![f1a1342 image24](https://files.readme.io/f1a1342-image24.png)

Once the badge has been deactivated, it will neither be issued to new customers nor it will be claimed by any module.

![e78ec00 image29](https://files.readme.io/e78ec00-image29.png)

Once the badges have been deactivated, they can be activated again from the quick actions as shown below. Click Activate to reactivate the badge.

![92dab63 image38](https://files.readme.io/92dab63-image38.png)

Once reactivated, badges will be issued to customers and can be claimed as well by other modules.

![ece9312 image32](https://files.readme.io/ece9312-image32.png)

## Issuing badges and revoking via loyalty workflows and promotions


You can issue badges from loyalty workflows and loyalty promotions. The implementation of badges in transactional and non-transactional activities can enhance customer behavior and contribute to increased engagement with the brand.  
Issue badge action has been added in the below events in loyalty workflows and loyalty promotions:

1. VoucherRedemption
2. TransactionAdd
3. ReturnBill
4. PointsRedemption
5. DelayedAccrual
6. CustomerUpdate
7. CustomerRegistration
8. Behavioral events
9. Target Period Elapses

Get started,

1. In the workflows, after writing the qualifying conditions, click Add action >  Issue badge and click Save.  
   All the badges which are live, activated and the owner is Loyalty is displayed.

![fc63af1 image34](https://files.readme.io/fc63af1-image34.png)

2. Hover over the info tooltip to view information related to the badges such asImages, Issual Duration, Status, Benefits Linked, Issual Expiry.
3. Click view badge for configuration  to view more details related to the badge.

![932d77c image23](https://files.readme.io/932d77c-image23.png)

4. You can also setup communication as shown below:

![3578a8b image21](https://files.readme.io/3578a8b-image21.png)

You can add badges tags as below for the badges expiry date

![73de350 Screenshot 2024 01 25 at 10](https://files.readme.io/73de350-Screenshot_2024-01-25_at_10.23.09_PM.png)

Once added, it will look like below

![6e60fbf Screenshot 2024 01 25 at 10](https://files.readme.io/6e60fbf-Screenshot_2024-01-25_at_10.24.26_PM.png)

![25d87ad Screenshot 2024 01 25 at 10](https://files.readme.io/25d87ad-Screenshot_2024-01-25_at_10.25.49_PM.png)

5. Once the badge is selected, click Claim. A confirmation dialogue box appears.
6. Click  Yes, claim  for the confirmation for claiming the badge. Once a badge has been claimed by any module, it cannot be unclaimed but other modules can still claim it.

![2d5d7d6 image37](https://files.readme.io/2d5d7d6-image37.png)

The badge will be claimed and added to the workflows.

![921a350 image6](https://files.readme.io/921a350-image6.png)

7. Once the badge has been added in the workflows, you can see the badge added in a particular set as shown in the below image. Click Save & Continue to save the changes and publish the program.

![437d65c image25](https://files.readme.io/437d65c-image25.png)

<Note title="Note">
Note : If the brand has enabled the below configuration from UI (EMFConfiguration page), then the badges will be revoked on returnBil and ReturnTargetCompletedEvent but make sure that the program is reconfigured after enabling this option to make changes in return events.
</Note>

* Badges will be revoked on return and target completed events, the return event could be returnLineItem or returnAmount.
* In return bill, badges will be revoked on whole bill return and not on partial return.

<Image align="center" className="border" width="500px" border={true} src="https://files.readme.io/c2b8896-image28.png" /
>

## Placement of badges for customer views


You can define badge groups, rank of the group and rank of badges within the group. This enables sorting customers' badge collections and highlighting their achievements.

For example, in the below screenshot, Limited Edition badges have a higher priority followed by Monthly challenge badges, Workout badges, and Close your rings badges. Within each defined group, badges are sorted based on their rank.

![b52ba24 image1](https://files.readme.io/b52ba24-image1.png)

### Example


Consider three badge groups, Group 1, Group 2 and Group 3 ranked 1, 2, and 3. While creating badges, Badge 1 is tagged with Group 1, Badge 2 is tagged with Group 2, and Badge 3 doesn't have any group tagged but has a badge rank of 1.  
**Retrieving badges list**  
In the above scenario, when you retrieve the list of badges available for a customer, the system prioritizes based on the defined groups and badge ranks. Initially, the list is ordered as Badge 1, then Badge 2, and finally Badge 3 (due to the group tag of Badge 3 being null but having a rank).  
**Impact on deleting a group**  
If a group is deleted the order of the badges also changes.  For example, if Group 1 is deleted, fetching the badge list will now prioritize Badge 2 first (as it belongs to Group 2), then Badge 3 (due to its rank), and finally Badge 1.

The sorting of the badges is performed usng the sortOn parameter in teh Get customer badge API. For more information, refer to the 

### Sorting logic:

* Preference will be given to the groups as per their ranking
* Within the group, preference will be given to the badges for which badge rank is defined, the rest of the badges with no badge rank will be sorted in default descending order of expired date
* If badges with no group are defined, they will be sorted in order of badge rank (if defined), followed by default descending order of expired date

### Points to Note:

* Group name must be unique within the active groups in an org
* Group rank is mandatory but there is no uniqueness on group rank
* Badge rank is non-mandatory
* Groups can be disabled by making the isActive flag false

### Refer to the API documentation below:


[Create Group](https://docs.capillarytech.com/reference/create-badges-group)

[Update Group](https://docs.capillarytech.com/reference/update-badges-group)

[Get Group by ID](https://docs.capillarytech.com/reference/get-group-by-id)

[Get all Groups](https://docs.capillarytech.com/reference/get-all-groups)

[Create badges with Group and Badge Rank](https://docs.capillarytech.com/reference/create-badges-org)

[Update badges with Group and Badge Rank](https://docs.capillarytech.com/reference/update-badges)

## Historical data migration of badges


If you’re a brand already running badges in your loyalty programs and want to migrate to our platform. The system supports historical data migration of badges and customers’ earned badges which will allow the brands to migrate seamlessly.

### Points to note:

* Benefits cannot be associated with historically migrated customer badges, while badgeMeta may have benefits associated with it.
* Event notification will not be generated for historical imported customer badges.

### Refer to the API documentation below:


[Importing historical badges](https://docs.capillarytech.com/reference/create-badges-org)

[Importing customer earned badges](https://docs.capillarytech.com/reference/import-earned-badges-of-customer)

# Retro enrolment and issue of badges


## Overview:


The Retroactive Badge Issuance enables organizations to acknowledge and reward customers for their past transactions or actions and allows the issuing of expired badges.  
Example:  
Suppose a brand introduces a new loyalty badge called "Gold Shopper." The badge is awarded to customers who have made a total purchase of $500 between Oct 1 - Oct 30th.

Without Retroactive Badge Issuance, a customer who reached the $500 threshold before the badge was introduced would not receive the "Gold Shopper" badge.

With Retroactive Badge Issuance, the Retroactive Badge Issuance feature allows the platform to identify customers who met the $500 threshold even before the badge was introduced.  
Customers who made qualifying purchases in the past say six months ago, would retroactively receive the "Gold Shopper" badge, acknowledging their loyalty.

## Key concepts:

* Event Date vs. Issual Date - Retroactive badges are based on the event date (when the customer action happened), ensuring accurate recognition. The issuance date (when the badge is awarded) triggers additional rewards or perks triggered by awarding the badge.
* Issuance expiry: Badges expire based on the current date/processing date, not the event date.
* Timezone: Retroactive badge issuances consider the timezone configured at the organisational level.
* Restrictions:
  * Fixed Windows badge constraint - If selected, restrictions will be checked based on the event date if fixed Windows restrictions are chosen for the badge.
  * Rolling windows badge constraint  - Restrictions based on rolling windows are not handled in retro enrolment.

## Handling upcoming, live and expired badges


<div align="left">
    
        <tbody>
            <tr>
                <td style={{border: "solid #000000 0.9375pt"}}>
                    <p style={{textAlign: "center"}}><strong><span style={{fontSize: "9.5pt"}}>Badge Scenario</span></strong></p>
                </td>
                <td style={{border: "solid #000000 0.9375pt"}}>
                    <p style={{textAlign: "center"}}><strong><span style={{fontSize: "9.5pt"}}>Badge type</span></strong></p>
                </td>
                <td style={{border: "solid #000000 0.9375pt"}}>
                    <p style={{textAlign: "center"}}><strong><span style={{fontSize: "9.5pt"}}>Handling Approach</span></strong></p>
                </td>
                <td style={{border: "solid #000000 0.9375pt"}}>
                    <p style={{textAlign: "center"}}><strong><span style={{fontSize: "9.5pt"}}>Additional API Considerations</span></strong></p>
                </td>
            </tr>
            <tr>
                <td style={{border: "solid #000000 0.9375pt"}}>
                    <p><span style={{fontSize: "9.5pt"}}>Upcoming Badges</span></p>
                </td>
                <td style={{border: "solid #000000 0.9375pt"}}>
                    <p><span style={{fontSize: "9.5pt"}}>-</span></p>
                </td>
                <td style={{border: "solid #000000 0.9375pt"}}>
                    <p><span style={{fontSize: "9.5pt"}}>Retroactive Handling: Not Applicable</span></p>
                </td>
                <td style={{border: "solid #000000 0.9375pt"}}>
                    <p><span style={{fontSize: "9.5pt"}}>-</span></p>
                </td>
            </tr>
            <tr>
                <td style={{border: "solid #000000 0.9375pt"}}>
                    <p><span style={{fontSize: "9.5pt"}}>Active Badge Scenarios</span></p>
                </td>
                <td style={{border: "solid #000000 0.9375pt"}}>
                    <p><span style={{fontSize: "9.5pt"}}>Enrol &amp; Issue&nbsp;</span></p>
                </td>
                <td style={{border: "solid #000000 0.9375pt"}}>
                    <p><span style={{fontSize: "9.5pt"}}>- Expired Enrolment: No retroactive handling. &nbsp;Requires re-enrolment before issuance for the badge issue. The badge issue date will be calculated based on the current processing date.</span></p>
                </td>
                <td style={{border: "solid #000000 0.9375pt"}}>
                    <p><span style={{fontSize: "9.5pt"}}>- Enrol API: The event date must align with the badge&apos;s active period.</span></p>
                </td>
            </tr>
            <tr>
                <td style={{border: "solid #000000 0.9375pt"}}>
                    <p><span style={{fontSize: "9.5pt"}}>Active Badge Scenarios</span></p>
                </td>
                <td style={{border: "solid #000000 0.9375pt"}}>
                    <p><span style={{fontSize: "9.5pt"}}>Direct enrolment and issue</span></p>
                </td>
                <td style={{border: "solid #000000 0.9375pt"}}>
                    <p><span style={{fontSize: "9.5pt"}}>Directly issue the badge.</span></p>
                </td>
                <td style={{border: "solid #000000 0.9375pt"}}>
                    <p><span style={{fontSize: "9.5pt"}}>-</span></p>
                </td>
            </tr>
            <tr>
                <td style={{border: "solid #000000 0.9375pt"}}>
                    <p><span style={{fontSize: "9.5pt"}}>Expired Badges</span></p>
                </td>
                <td style={{border: "solid #000000 0.9375pt"}}>
                    <p><span style={{fontSize: "9.5pt"}}>Enrol &amp; Issue Type</span></p>
                </td>
                <td style={{border: "solid #000000 0.9375pt"}}>
                    <p><span style={{fontSize: "9.5pt"}}>- Valid Enrolment: Directly issue the badge.&nbsp;</span></p>
                    <p><span style={{fontSize: "9.5pt"}}>- Expired Enrolment: Enrol first, then issue.&nbsp;</span></p>
                    <p><span style={{fontSize: "9.5pt"}}>No Enrolment: Enrol first, then issue.</span></p>
                </td>
                <td rowspan="2" style={{border: "solid #000000 0.9375pt"}}>
                    <p><span style={{fontSize: "9.5pt"}}>- Enrol API: The event date must align with the badge&apos;s active period. &nbsp;- Issue API: The event date must fall between the enrolled event date and the enrolment expiry.</span></p>
                </td>
            </tr>
            <tr>
                <td style={{border: "solid #000000 0.9375pt"}}><br /></td>
                <td style={{border: "solid #000000 0.9375pt"}}>
                    <p><span style={{fontSize: "9.5pt"}}>Direct enrolment &amp; issue</span></p>
                </td>
                <td style={{border: "solid #000000 0.9375pt"}}>
                    <p><span style={{fontSize: "9.5pt"}}>Directly issue the badge.</span></p>
                </td>
            </tr>
        </tbody>
    
</div>

## Configuring retroactive badge issuance window


<p><span style={{fontSize: "11pt"}}>You can define the period that needs to be considered for the customer&apos;s past actions.&nbsp;</span></p>
<p><span style={{fontSize: "11pt"}}>To define, perform the following</span></p>

    
        <p><span style={{fontSize: "11pt"}}>Navigate to&nbsp;</span><strong><span style={{fontSize: "11pt"}}>Intouch &gt; Organisation settings&gt;Billing</span></strong><span style={{fontSize: "11pt"}}>.</span></p>
    
    
        <p><span style={{fontSize: "11pt"}}>Define the below configurations</span></p>
        
            
                <p><span style={{fontSize: "11pt"}}>CONF_CLIENT_RETRO_MAX_ALLOWED_AGE_DAYS - This parameter determines the maximum allowed age (in days) for retroactive transactions. For example, if the value is set to 30 days, customers can claim badges for transactions that occurred within the last 30 days from the registration date.</span></p>
            
            
                <p><span style={{fontSize: "11pt"}}>CONF_CLIENT_RETRO_DELAY_SINCE_REGISTRATION_HOURS - This parameter introduces a buffer time or delay (in hours) since customer registration before they can claim retroactive badges.</span></p>
            
        
    

<p><span style={{fontSize: "11pt"}}>For more information on Retro transactions, refer to the&nbsp;</span><span style={{color: "#1155cc", fontSize: "11pt"}}>Retro transaction documentation</span><span style={{fontSize: "11pt"}}>.</span></p>
<p><strong><span style={{fontSize: "11pt"}}>Note</span></strong><span style={{fontSize: "11pt"}}>: If the badge meta such as the end date of the badge changes, accordingly, the time until which the badge can be issued retroactively will also change based on the retro configs defined at an org level. For example, if the configured retro days are 30 and the badge expiry date is extended for 10 days, the retroactive days will be calculated from this new expiry date.</span></p>
<p><span style={{fontSize: "11pt"}}><span style={{border: "none"}}></span></span></p>

## Example


<p><span style={{fontSize: "11pt"}}>Consider a badge with the following characteristics:</span></p>

    
        <p><span style={{fontSize: "11pt"}}>Active period: October 1st to 15th</span></p>
    
    
        <p><span style={{fontSize: "11pt"}}>Type: Enrol&amp;Issue (requires both enrolment and issuance)</span></p>
    
    
        <p><span style={{fontSize: "11pt"}}>Enrolment expiry: 2 days after enrolment</span></p>
    
    
        <p><span style={{fontSize: "11pt"}}>Badge issuance expiry: 2 days after issuance</span></p>
    
    
        <p><span style={{fontSize: "11pt"}}>Current date: October 20th</span></p>
    
    
        <p><span style={{fontSize: "11pt"}}>enrolEventDate: October 10th</span></p>
    
    
        <p><span style={{fontSize: "11pt"}}>Retro days configured to 30 days</span></p>
    

<div align="left">
    
        <tbody>
            <tr>
                <td style={{border: "solid #000000 0.9375pt"}}>
                    <p style={{textAlign: "center"}}><strong><span style={{fontSize: "9.5pt"}}>Scenario</span></strong></p>
                </td>
                <td style={{border: "solid #000000 0.9375pt"}}>
                    <p style={{textAlign: "center"}}><strong><span style={{fontSize: "9.5pt"}}>Description</span></strong></p>
                </td>
            </tr>
            <tr>
                <td style={{border: "solid #000000 0.9375pt"}}>
                    <p><span style={{fontSize: "9.5pt"}}>Enrolment status</span></p>
                </td>
                <td style={{border: "solid #000000 0.9375pt"}}>
                    <p><span style={{fontSize: "9.5pt"}}>The enrol instance succeeds as t</span><span style={{color: "#1f1f1f", fontSize: "11pt"}}>he enrol event date is between the badge start date and end date and will&nbsp;</span><span style={{fontSize: "9.5pt"}}>expire on October 12th.</span></p>
                </td>
            </tr>
            <tr>
                <td style={{border: "solid #000000 0.9375pt"}}>
                    <p><span style={{fontSize: "9.5pt"}}>issueEventDate: &nbsp;October 14th &nbsp;</span></p>
                </td>
                <td style={{border: "solid #000000 0.9375pt"}}>
                    <p><span style={{fontSize: "9.5pt"}}>As the enrolment expires on October 12th and hence, this will result in an invalid issue event of the badge.&nbsp;</span></p>
                </td>
            </tr>
            <tr>
                <td style={{border: "solid #000000 0.9375pt"}}>
                    <p><span style={{fontSize: "9.5pt"}}>Issue event date: October 11th.&nbsp;</span><span style={{fontSize: "9.5pt"}}><br /></span><span style={{fontSize: "9.5pt"}}>Fixed Restriction (a customer can be issued a maximum of two badges &nbsp;every three days)</span></p>
                </td>
                <td style={{border: "solid #000000 0.9375pt"}}>
                    
                        
                            <p><span style={{fontSize: "9.5pt"}}>If a single badge was issued between the 10th to 12th Oct, the customer will receive an additional badge on October 11th.</span></p>
                        
                        
                            <p><span style={{fontSize: "9.5pt"}}>If two badges were issued between the 10th to 12th Oct, the customer is ineligible for any further badges.</span></p>
                        
                        
                            <p><span style={{fontSize: "9.5pt"}}>If no badge was issued between the 10th to 12th Oct, the customer will receive a badge on October 11th.</span></p>
                        
                    
                </td>
            </tr>
            <tr>
                <td style={{border: "solid #000000 0.9375pt"}}>
                    <p><span style={{fontSize: "9.5pt"}}>Issue event date: October 20th.&nbsp;</span></p>
                    
                        
                            <p><span style={{fontSize: "9.5pt"}}>&nbsp;customer reports badge not issued complaint irrespective of his/her eligibility</span></p>
                        
                        
                            <p><span style={{fontSize: "9.5pt"}}>Restriction:: Rolling window (Customer can get the badge twice in last 2 days)</span></p>
                        
                    
                </td>
                <td style={{border: "solid #000000 0.9375pt"}}><br />
                    
                        
                            <p><span style={{fontSize: "9.5pt"}}>Issue instances on the current date will be checked, if two badges were issued in the previous two days, &nbsp;the badge will not be issued to the customer</span></p>
                        
                        
                            <p><span style={{fontSize: "9.5pt"}}>On 20th Oct, if only one badge was issued to the customer for the last two days, the customer will be issued one more badge</span></p>
                        
                        
                            <p><span style={{fontSize: "9.5pt"}}>If on 20th Oct no badge was issued for the last 2 days, the customer will be issued one badge</span></p>
                        
                        
                            <p><strong><span style={{fontSize: "9.5pt"}}>Expiry -&nbsp;</span></strong><span style={{fontSize: "9.5pt"}}>The expiry of the badge is calculated from the current date, hence this issue will expire on 22nd Oct</span></p>
                        
                    <br />
                </td>
            </tr>
            <tr>
                <td style={{border: "solid #000000 0.9375pt"}}>
                    <p><span style={{fontSize: "9.5pt"}}>Issue event date Oct 20th</span></p>
                    <p><span style={{fontSize: "9.5pt"}}>[Customer registers on Oct 20th for loyalty/customer reports badge not issued irrespective of his/her eligibility</span></p>
                </td>
                <td style={{border: "solid #000000 0.9375pt"}}><br /></td>
            </tr>
        </tbody>
    
</div>

**Glossary**

    
        <p><span style={{fontSize: "11pt"}}>enrolEventDate - Refers to the specific date when the actual event occurred for enrolling a customer in the badge program. This date marks the occurrence of the event that initiates the customer&apos;s enrollment in the badge system.</span></p>
    
    
        <p><span style={{fontSize: "11pt"}}>IssueEventDate - Refers to the specific date on which the customer performed an activity or took an action to qualify for and receive a badge. This date marks the occurrence of the relevant activity that triggers the issuance of the badge</span></p>
    

**Refer to the APIs below:**

[Enroll customers in badges](https://docs.capillarytech.com/reference/enroll-customers-in-badges)

[Issue badge to the customer](https://docs.capillarytech.com/reference/issue-badge-to-the-customer)

# Enrich customer views for badges with the newly introduced custom fields


**Background**

In order to create a flexible badges platform, it is important to give brands the ability to include additional, custom information when creating badges. This custom data can be used for various purposes such as displaying personalized information within the app or website, and for accounting or reporting purposes.  
Additionally, this custom data can also help brands to track and analyze the performance of their badges, and make data-driven decisions to improve their badges strategy. Furthermore, the ability to include custom data can also help brands to comply with legal and regulatory requirements, and to report on the performance of the badges to stakeholders.

**Scenario:**

A retail brand wants to create a badges platform to reward loyal customers and encourage engagement with their mobile app. They want to personalize the badge experience by displaying custom information related to each badge earned by the user.  
To achieve this, create a custom field with the name terms\&conditions and keep the datatype of the field as STRING. Create a badge and tag this custom field terms\&conditions and add the value of this custom field, then when customer earns the badge, the badge will be displayed along with this terms\&conditions field so that user will know the relevant information related to this badge.  
Examples of custom field include terms and conditions, How to redeem the benefit, Short description, LegalText, IsExclusive, Purpose, etc.

**Points to note:**

1. Custom fields can be created, updated, or disabled.
2. There can be only one active custom field with the same name. If the existing custom field is disabled, then a new custom field with the same name can be created.
3. It is mandatory to define the default value for a custom field which is mandatory for the badge. In case a badge doesn't define a mandatory custom field with it, the default value will be considered.
4. Data types supported in custom fields: boolean, integer, string, and date.
5. Once the custom field is disabled, it can't be enabled again.
6. Only active custom fields will be returned in all the getcalls.
7. Only below fields can be updated while updating the custom field:
   1. Name : can be updated
   2. Isactive : can be updated from true to false but false to true is not allowed
   3. Default value can be updated
   4. Ismandatory can be updated from true to false or false to true
   5. Data type can’t be updated
8. There is no limit on the number of custom fields that can be defined at an org level for badges.

![6a22100 image1](https://files.readme.io/6a22100-image1.png)

*UI for creating custom fields will come soon, until then you can use APIs to create/update custom fields.*

**For more information on the APIs which include custom fields, check the below links:**

1. [Create custom field](https://docs.capillarytech.com/reference/create-custom-field)
2. [Update custom field](https://docs.capillarytech.com/reference/update-custom-field-badge)
3. [Get custom field by id](https://docs.capillarytech.com/reference/get-custom-field-by-id)
4. [Get all custom fields](https://docs.capillarytech.com/reference/get-all-custom-fields)
5. [Add custom field while creating badges](https://docs.capillarytech.com/reference/create-badges-org)
6. [Add custom field while updating badges](https://docs.capillarytech.com/reference/update-badges)
7. [Get badge by id](https://docs.capillarytech.com/reference/get-badge-by-id)
8. [Get all badges](https://docs.capillarytech.com/reference/get-all-badges)
9. [Get customer badges](https://docs.capillarytech.com/reference/get-badges-for-customer)