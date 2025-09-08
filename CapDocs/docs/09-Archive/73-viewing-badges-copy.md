---
title: Viewing Badges (With Benefits)
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

# Viewing badges list (Badge universe)


The badges home page lists all the badges configured for the brand along with their details such as badge name, owner of the badge, duration, status, benefits linked, issue expiry, badges issued, last updated on and last updated by.

<br />

![](https://files.readme.io/7cdfe2216c915badfcaeda843617cc599d43694629721aa52459a856672d33d0-image.png)

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
<p><strong>Owner</strong><span style={{fontWeight: 400}}> of the badge : The module for which the badge is created. It can be Loyalty, Loyalty Promotions, Milestones, Campaigns, Journeys. Defining an owner is mandatory</span></p>
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
</tbody>

![dab1404a941efecf250f64af506b65bae771f05c757e0cb3fb8047953f8d8d99 Documenting the Flow](https://files.readme.io/dab1404a941efecf250f64af506b65bae771f05c757e0cb3fb8047953f8d8d99-Documenting_the_Flow.gif)

You can filter badges based on the **Badge issue type**, **Owned by** and **Claimed by** by selecting the **Advanced filters**   icon.

![7436d8043690fea0cc47da8bb984f7efa8fe5ebf2138a84be9146fc1eaff0fbc image](https://files.readme.io/7436d8043690fea0cc47da8bb984f7efa8fe5ebf2138a84be9146fc1eaff0fbc-image.png)

<br />

<p><span style={{fontWeight: 400}}>To view the the owner and claim details for a particular badge,&nbsp; click&nbsp; on the </span><strong>i</strong><span style={{fontWeight: 400}}> icon against the badge owner</span></p>

<span style={{fontWeight: 400}}>For a badge to be claimed by a particular module, first the owner has to be defined and then that module can claim it.</span>
<span style={{fontWeight: 400}}>A badge can have multiple owners and claims</span>
<span style={{fontWeight: 400}}>Once an owner is defined, it can&rsquo;t be removed or replaced, but more owners can be added to the badge.</span>
<span style={{fontWeight: 400}}>Once a claim has been added for a badge, it can&rsquo;t be removed or replaced, but other modules can still claim it.</span>
<span style={{fontWeight: 400}}>The claim gives the information of exactly where the badge is being used/claimed. For example, in the below screenshot, the badge has been claimed in supermarket loyalty program : TransactionAdd and CustomerRegistration events</span>

![5d502f0b94b85388aebc21c50dfe4acb4f3916af40c1be47d6e84fd76e0c269f image](https://files.readme.io/5d502f0b94b85388aebc21c50dfe4acb4f3916af40c1be47d6e84fd76e0c269f-image.png)

<p><span style={{fontWeight: 400}}>If a badge owner is defined, but claims are not yet added then it will be shown as below : </span><strong>Not claimed</strong></p>

![e6a3af3f36be6b3900f752d0b4caf0e54e26f4890a38f41e64854fc21fe868b4 image](https://files.readme.io/e6a3af3f36be6b3900f752d0b4caf0e54e26f4890a38f41e64854fc21fe868b4-image.png)

* We can see the list of badges that were claimed from Audience Campaigns and Journeys using the tooltip and the 'View Badge' option.

![08ae7b57e32e66d55ba4fae20fcbd53c20bc33d855486079cf77dc38d560d233 image](https://files.readme.io/08ae7b57e32e66d55ba4fae20fcbd53c20bc33d855486079cf77dc38d560d233-image.png)

## Viewing badge detail


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
   3. Issue limit: You can set an individual or across all customer limit for issuing the badge within a fixed or moving window.

      1. Customer limit : Overall limit and rolling limits both are supported. Brands can define the restrictions in the combination of the below options.
         1. Fixed Window: With a fixed window, badges must be issued within a specific, predetermined time period.
         2. Moving Window: A moving window, on the other hand, offers more flexibility. It tracks performance over a rolling time frame, such as the last 30 days. This allows users to meet badge requirements continuously as long as they stay within the moving window.
      2. Across Customer Limit : Overall limit and rolling limits both are supported. Brands can define the restrictions in the permutation combination of all the below options.

         1. Fixed Window: With a fixed window, badges must be issued within a specific, predetermined time period.
         2. Moving Window: A moving window, on the other hand, offers more flexibility. It tracks performance over a rolling time frame, such as the last 30 days. This allows users to meet badge requirements continuously as long as they stay within the moving window.

![3c7d88e4aab244188c68abe163a3e2c2dc59a04f50da554c58a9b74bcffd42a3 image](https://files.readme.io/3c7d88e4aab244188c68abe163a3e2c2dc59a04f50da554c58a9b74bcffd42a3-image.png)

3. Benefits :  A badge might or might not have a benefit. Users can link a single benefit or multiple benefits against a badge. This is optional and max 10 benefits can be added against a badge.

* Coupon as a benefit

![532d6c2 image17](https://files.readme.io/532d6c2-image17.png)

* Points as a benefit

![aa3caee Screenshot 2023 12 29 at 1](https://files.readme.io/aa3caee-Screenshot_2023-12-29_at_1.05.58_AM.png)

* Cart Promotion and Gift Vouchers as a benefit

![3703a8ca9347e8be2e18be19e00ba11e1eb70478678fc3a926e92387dbdff1b5 Benefits Setup Steps 2](https://files.readme.io/3703a8ca9347e8be2e18be19e00ba11e1eb70478678fc3a926e92387dbdff1b5-Benefits_Setup_Steps_2.gif)

In the Information tab in view mode, you can find the Badge ID, creation date and creator of the badge. You can also copy the badge ID directly from here like below.

![c73321c image19](https://files.readme.io/c73321c-image19.png)