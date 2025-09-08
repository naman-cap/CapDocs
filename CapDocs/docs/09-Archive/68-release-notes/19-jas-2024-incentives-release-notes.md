---
title: JAS 2024 | Incentives Release Notes
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
# Coupons


## Issue Multiple Coupons to a Customer in a Single API Call


**What’s New:**  
Introducing a new API that allows issuing multiple coupons from the same series to a single customer in one API call.

**Problem Solved:**  
Brands previously faced limitations when issuing multiple coupons to a single customer for tier changes or event-based activities, requiring repetitive API calls.

**How It Helps:**

* Efficient Coupon Distribution: Streamlines the process of issuing multiple coupons, reducing manual effort and improving response times.
* Flexible Campaigns: Supports use cases like issuing 10 coupons on tier upgrades (e.g., Silver to Gold) or rewarding customers with 5 coupons from the same series for completing a milestone.

**Refer to the documentation[here](https://docs.capillarytech.com/reference/issue-bulk-coupon-with-count-from-series).**

## Custom Expiry Date Changes for Coupons


**What’s New:**  
You can now extend or shorten the expiry dates of active or expired coupon codes, providing enhanced flexibility to meet unique customer needs.

**Problem Solved:**

* Lack of Flexibility: Previously, customers could not extend or modify the expiry dates of active or expired coupons, limiting their ability to redeem offers when needed.
* Inability to Accommodate Special Circumstances: Brands struggled to adjust coupon expiry dates to address special requests or unforeseen delays, impacting customer satisfaction and loyalty.

**Use Cases:**

* Frequent Flyer: Imagine a frequent flyer who receives a special coupon for her next flight. Due to unforeseen delays, she can't book in time. With the new feature, her request to extend the coupon's expiry is promptly handled by customer support, ensuring a seamless experience.
* Hotel Guest: A hotel guest can now use an active coupon even if it originally expired during their stay, thanks to the ability to extend the expiry date. This flexibility enhances the guest's experience and ensures they benefit from the offer.

This feature ensures the coupons remain relevant and useful, helping to boost customer satisfaction and brand loyalty.

**Refer to the documentation[here](https://docs.capillarytech.com/reference/update-coupon-code-expiry-date).**

## API for Revoking Active Issued Coupons


<p><strong><span style={{fontSize: "11pt", fontFamily: "Arial,sans-serif"}}>What&rsquo;s New:</span></strong></p>

    
        <p><span style={{fontSize: "11pt", fontFamily: "Arial,sans-serif"}}>Revoke active issued coupons for a particular customer for a coupon series</span></p>
    
    
        <p><span style={{fontSize: "11pt", fontFamily: "Arial,sans-serif"}}>Revoke specific active issued coupons for a particular coupon series&nbsp;</span></p>
    

<p><strong><span style={{fontSize: "11pt", fontFamily: "Arial,sans-serif"}}>Problems Solved:</span></strong></p>

    
        <p><span style={{fontSize: "11pt", fontFamily: "Arial,sans-serif"}}>Lack of synchronous API to revoke coupons for individual customers or specific coupon codes.</span></p>
    

<p><strong><span style={{fontSize: "11pt", fontFamily: "Arial,sans-serif"}}>Use case:</span></strong></p>

    
        <p><span style={{fontSize: "11pt", fontFamily: "Arial,sans-serif"}}>When a customer&apos;s tier is upgraded, this API helps revoke all active issued coupons tied to their previous tier, ensuring they receive fresh, relevant coupons aligned with their new tier status. This streamlines tier-based rewards management and enhances customer experience.</span></p>
    
    
        <p><span style={{fontSize: "11pt", fontFamily: "Arial,sans-serif"}}>In cases of suspected customer fraud or business-driven decisions to deactivate certain coupon codes, this API allows users to revoke specific active issued coupon codes which are not redeemed, either individually or in bulk. This ensures control over coupon misuse and enables flexible management of coupons.</span></p>
    

<p><strong><span style={{fontSize: "11pt", fontFamily: "Arial,sans-serif"}}>For detailed API documentation, refer&nbsp;</span></strong><strong><span style={{color: "#1155cc", fontSize: "11pt", fontFamily: "Arial,sans-serif"}}>this</span></strong><strong><span style={{fontSize: "11pt", fontFamily: "Arial,sans-serif"}}>.</span></strong></p>
<p><br  /></p>

## Support for Coupon Code Formatting in Get Calls


What’s New:

Users can now retrieve coupon codes in their preferred format—uppercase, lowercase, or as originally entered—offering greater flexibility in how codes are displayed and managed.

​​Problem Solved:

Previously, coupon codes were returned solely in uppercase, even when created with mixed or lowercase characters. This led to redemption issues in case-sensitive third-party systems. With this update, exact-case retrieval and flexible formatting options ensure smooth compatibility and accurate coupon usage across systems.

Key Details:

* Formatting Options: Choose from three formats when retrieving coupon codes:
  * LOWER: Converts codes to lowercase.
  * UPPER: Converts codes to uppercase (default setting).
  * AS\_IT\_IS: Keeps the code in its original format as entered (e.g., "abAB123" remains "abAB123").

Refer to the API documentation below:

1. [Get customer coupons](https://docs.capillarytech.com/reference/get-customer-coupons-basic)
2. [Get coupon details v2](https://docs.capillarytech.com/reference/get-coupon-details)
3. [Get coupon details v1](https://docs.capillarytech.com/reference/get-coupon-detail)

# Badges


## Badge API Updates: Group Data and Filtering Added


Customer badge APIs now pass group name, group rank, and badge rank, with added support for group ID filtering.

**Read the API documentation[here](https://docs.capillarytech.com/reference/badges).**

## Historical Badge Import and Earned Badge Management


**What’s New:**

* **Historical Badge Import:** Introducing a new feature to support the creation of badges in bulk with historical start dates using the Connect+ template.
  * By using the "X-CAP-BADGES-MIGRATION":"migration" header in the Additional Headers field, you can now seamlessly migrate both expired and ongoing badges from other platforms into the Capillary system.
  * This ensures that badges, whether expired or still active but started in the past, are accurately reflected in the system, maintaining continuity in your loyalty programs.
  * **Read[here](https://docs.capillarytech.com/docs/create_badges#creating-a-historical-badge-badge-with-a-past-date).**
* **Customer Earned Badges Import:** Introducing a template to manage the migration of earned badges for customers. 
  * This template allows brands to transfer historical badges, including those that have expired or are still active but were awarded in the past. 
  * Ideal for bulk migration and offline activities, this feature ensures a seamless transition to Capillary’s loyalty platform without losing any customer achievements. 
  * **Read[here](https://docs.capillarytech.com/docs/import-earned-badges-of-customer-template).**

## Fixed Window Tracking for Badge Issual Restrictions


<p><br  /></p>
<p><strong><span style={{fontSize: "11pt", fontFamily: "Arial,sans-serif"}}>What&rsquo;s New:</span></strong></p>
<p><br  /></p>

    
        <p><span style={{fontSize: "11pt", fontFamily: "Arial,sans-serif"}}>Added support for fixed window tracking in badge issual restrictions, allowing brands to set time-based limits (daily, weekly, or monthly) for badge issuals.</span></p>
    

<p><br  /></p>
<p><strong><span style={{fontSize: "11pt", fontFamily: "Arial,sans-serif"}}>Problem Solved:</span></strong></p>
<p><br  /></p>

    
        <p><span style={{fontSize: "11pt", fontFamily: "Arial,sans-serif"}}>Brands with retroactive workflows needed more flexible time-based limits for badge issuals. The current moving window approach didn&apos;t fully support retro activities.</span></p>
    

<p><br  /></p>
<p><strong><span style={{fontSize: "11pt", fontFamily: "Arial,sans-serif"}}>Use Cases:</span></strong></p>
<p><br  /></p>

    
        <p><span style={{fontSize: "11pt", fontFamily: "Arial,sans-serif"}}>Brands can now set fixed time-based limits when badges are issued within a specific period.</span></p>
    
    
        <p><span style={{fontSize: "11pt", fontFamily: "Arial,sans-serif"}}>Supports retroactive flows where the system evaluates badge limits based on fixed window defined instead of moving window.</span></p>
    
    
        <p><span style={{fontSize: "11pt", fontFamily: "Arial,sans-serif"}}>Users can choose daily, weekly, or calendar-monthly windows for badges and configure them with specific refresh rates.</span></p>
    

<p><br  /></p>
<p><strong><span style={{fontSize: "11pt", fontFamily: "Arial,sans-serif"}}><span style={{border: "none"}}></span></span></strong></p>
<p><br  /></p>
<p><strong><span style={{fontSize: "11pt", fontFamily: "Arial,sans-serif"}}>For more details, refer to&nbsp;</span></strong><strong><span style={{color: "#1155cc", fontSize: "11pt", fontFamily: "Arial,sans-serif"}}>this</span></strong><strong><span style={{fontSize: "11pt", fontFamily: "Arial,sans-serif"}}>&nbsp;documentation.</span></strong></p>

<br  />

## Now add Cart Promotions and Gift Vouchers as a benefit to Badges


<p><br  /></p>
<p><strong><span style={{fontSize: "11pt", fontFamily: "Arial,sans-serif"}}>What&rsquo;s New:</span></strong></p>
<p><br  /></p>
<p><span style={{fontSize: "11pt", fontFamily: "Arial,sans-serif"}}>Introducing the ability to add cart promotions and gift vouchers as benefits to badges, in addition to existing options like points and coupons.</span></p>
<p><br  /></p>
<p><strong><span style={{fontSize: "11pt", fontFamily: "Arial,sans-serif"}}><span style={{border: "none"}}></span></span></strong></p>
<p><br  /></p>
<p><strong><span style={{fontSize: "11pt", fontFamily: "Arial,sans-serif"}}>For more details, refer to&nbsp;</span></strong><strong><span style={{color: "#1155cc", fontSize: "11pt", fontFamily: "Arial,sans-serif"}}>this</span></strong><strong><span style={{fontSize: "11pt", fontFamily: "Arial,sans-serif"}}>&nbsp;documentation</span></strong></p>

<br  />

## UI for Managing Custom Fields and Placement Metadata in Badges


<p><strong><span style={{fontSize: "11pt", fontFamily: "Arial,sans-serif"}}>What&rsquo;s New:</span></strong><span style={{fontSize: "11pt", fontFamily: "Arial,sans-serif"}}>&nbsp;</span></p>
<p><span style={{fontSize: "11pt", fontFamily: "Arial,sans-serif"}}>UI to manage custom fields for badges as well as organize group and rank placement metadata is now available.</span></p>
<p><strong><span style={{fontSize: "11pt", fontFamily: "Arial,sans-serif"}}>Key Features:</span></strong></p>

    
        <p><strong><span style={{fontSize: "11pt", fontFamily: "Arial,sans-serif"}}>Custom Fields Management:</span></strong><span style={{fontSize: "11pt", fontFamily: "Arial,sans-serif"}}>&nbsp;Easily create, update, and manage custom fields for badges through the UI, offering more flexibility and control.</span></p>
    

<p><span style={{fontSize: "11pt", fontFamily: "Arial,sans-serif"}}><span style={{border: "none"}}></span></span></p>

    
        <p><strong><span style={{fontSize: "11pt", fontFamily: "Arial,sans-serif"}}>Groups &amp; Rank Placement Metadata:</span></strong><span style={{fontSize: "11pt", fontFamily: "Arial,sans-serif"}}>&nbsp;Organize badges with group and rank placement metadata to enhance sorting and display, all within a user-friendly interface.</span></p>
    

<p><span style={{fontSize: "11pt", fontFamily: "Arial,sans-serif"}}><span style={{border: "none"}}></span></span></p>
<p><strong><span style={{fontSize: "11pt", fontFamily: "Arial,sans-serif"}}>Refer to the documentation&nbsp;</span></strong><strong><span style={{color: "#1155cc", fontSize: "11pt", fontFamily: "Arial,sans-serif"}}>here</span></strong><strong><span style={{fontSize: "11pt", fontFamily: "Arial,sans-serif"}}>.</span></strong></p>

<br  />

## Track and Export Badge Metrics


<p><br  /></p>
<p><span style={{fontSize: "11pt", fontFamily: "Arial,sans-serif"}}>Now, effortlessly track badge performance with our robust reporting feature. Export badges issued and earned, and dive deep into key metrics like badge issuance, and earning based on badge type.</span></p>
<p><br  /></p>
<p><strong><span style={{fontSize: "11pt", fontFamily: "Arial,sans-serif"}}>Key Features:</span></strong></p>
<p><br  /></p>

    
        <p><span style={{fontSize: "11pt", fontFamily: "Arial,sans-serif"}}>Standard insights report</span></p>
    
    
        <p><span style={{fontSize: "11pt", fontFamily: "Arial,sans-serif"}}>Export Badges: Seamlessly export all badges in which customers are enrolled and all badges which are issued to the customers for in-depth analysis.</span></p>
    
    
        <p><span style={{fontSize: "11pt", fontFamily: "Arial,sans-serif"}}>Track Performance KPIs: Monitor metrics such as number of badges created, issued, and earned, along with distribution by status and key criteria.</span></p>
    

<p><br  /></p>
<p><span style={{fontSize: "11pt", fontFamily: "Arial,sans-serif"}}><span style={{border: "none"}}></span></span></p>
<p><br  /></p>
<p><br  /></p>
<p><strong><span style={{fontSize: "11pt", fontFamily: "Arial,sans-serif"}}>Read the documentation&nbsp;</span></strong><strong><span style={{color: "#1155cc", fontSize: "11pt", fontFamily: "Arial,sans-serif"}}>here</span></strong></p>

<br  />

## Enhanced Badge Ownership and Claim Information


<p><strong><span style={{fontSize: "11pt", fontFamily: "Arial,sans-serif"}}>What&rsquo;s New:</span></strong><strong><span style={{fontSize: "11pt", fontFamily: "Arial,sans-serif"}}><br  /><br  /></span></strong></p>
<p><span style={{fontSize: "11pt", fontFamily: "Arial,sans-serif"}}>We&rsquo;ve introduced a clear distinction between badge ownership in Loyalty Promotions and Loyalty Workflows to improve auditing and reporting.</span></p>
<p><strong><span style={{fontSize: "11pt", fontFamily: "Arial,sans-serif"}}>Key Changes:</span></strong></p>

    
        <p><strong><span style={{fontSize: "11pt", fontFamily: "Arial,sans-serif"}}>New Ownership Categories:</span></strong><span style={{fontSize: "11pt", fontFamily: "Arial,sans-serif"}}>&nbsp;Badges now have distinct owners: &quot;Loyalty&quot; for loyalty workflows and &quot;Loyalty Promotions&quot; for loyalty promotions.</span></p>
    
    
        <p><strong><span style={{fontSize: "11pt", fontFamily: "Arial,sans-serif"}}>Badge Visibility:</span></strong></p>
        
            
                <p><span style={{fontSize: "11pt", fontFamily: "Arial,sans-serif"}}>Badges tagged as &quot;Loyalty Promotions&quot; will appear in Loyalty Promotions.</span></p>
            
            
                <p><span style={{fontSize: "11pt", fontFamily: "Arial,sans-serif"}}>Badges tagged as &quot;Loyalty&quot; will be listed in Loyalty Workflows under Programs.</span></p>
            
            
                <p><span style={{fontSize: "11pt", fontFamily: "Arial,sans-serif"}}>If a badge is tagged as both &quot;Loyalty Promotions&quot; and &quot;Loyalty&quot;, it will be visible in both sections.</span></p>
            
        
    

<p><span style={{fontSize: "11pt", fontFamily: "Arial,sans-serif"}}><span style={{border: "none"}}></span></span></p>
<p><strong><span style={{fontSize: "11pt", fontFamily: "Arial,sans-serif"}}>Refer to the documentation&nbsp;</span></strong><strong><span style={{color: "#1155cc", fontSize: "11pt", fontFamily: "Arial,sans-serif"}}>here</span></strong><strong><span style={{fontSize: "11pt", fontFamily: "Arial,sans-serif"}}>.</span></strong></p>

## View Customer Badges in Membercare


We've enhanced the Membercare experience by enabling users to access and view customer badges directly within the Membercare interface. This provides clearer visibility into customer achievements and improves support insights. Users can now view customer badges within Membercare, with clear categorization for easier navigation—showing badges that are Available to Enrol, Available to Issue, Issued, and Expired. 

<Image align="center" src="https://files.readme.io/73802dbbe9197713b05748a7cad02e1d02e0916c4d6c2fe698194f882ca111ed-Membercare_view_of_badges.gif" ></Image>

Refer to the documentation [here](https://docs.capillarytech.com/docs/badges-in-membercare)

# Rewards Catalog


## Save Time and Increase Efficiency by Creating/Updating Rewards in Bulk using Connect+ Template


Say goodbye to the days of creating rewards one by one. Introducing the power of bulk reward creation through CSV file upload which will save your time and increase efficiency. 

Let's dive into the details, [create rewards](https://docs.capillarytech.com/docs/create-rewards_connectplus-template) and [update rewards](https://docs.capillarytech.com/docs/update-reward-connectplus).

## Enhanced Reward Data Tracking in Facts and Dimensions


All issued reward transaction data is now stored in facts and dimensions, offering a unified, detailed view for seamless reporting and tracking.

Check out the detailed documentation for the tables [here](https://docs.capillarytech.com/docs/rewards-fact-table).

## Event notification when a reward expires


What’s New:

Now you can create event notifications to alert users when a reward expires.

Key Benefits:

* User Engagement: Notify users via push, email, or SMS when rewards expire, improving re-engagement. Helps prevent users from missing the opportunity to redeem rewards.
* Automation: Automatically trigger the databricks notebook to finalize sweepstake winners, ensuring timely and transparent winner selection.
* Flexibility: Allows configuration of notification triggers at both the reward end date and pre-defined intervals. Ex: on the day of reward expiry or 7 days before reward expiry.

Read the documentation [here](https://docs.capillarytech.com/docs/rewards-event-notification).

## Enhancements in APIs:


Key Changes:

* Status Field: A new status field has been added to track rewards with values LIVE, UPCOMING, and ENDED based on their start and end date.
* Filtering: Enhanced filters for date range, reward status, vendor, and reward type.
* Response Improvements: New response fields include vendor info, reward status, last updated timestamps etc.
* Custom Fields Filtering: Introduced a scope parameter to filter the list of custom fields for rewards, issue reward and catalog promotions.
* Vendor Redemptions: A new API to fetch all vendor redemptions for the org with support for filters, pagination, and sorting.

Check the API documentation [here](https://docs.capillarytech.com/reference/rewards-catalog-api).