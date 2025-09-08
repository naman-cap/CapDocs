---
title: Mandatory and optional fields
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
<span style={{fontWeight: 400}}>Details of all fields:</span>

<span style={{fontWeight: 400}}>orgId : Every brand has an org ID mapped to the brand ID in databases.</span>
<span style={{fontWeight: 400}}>id : Unique id of the badge</span>
<span style={{fontWeight: 400}}>name : Name for the badge. This is a mandatory field.</span>
<span style={{fontWeight: 400}}>description : Detailed description of the badge. This is an optional field.</span>
<span style={{fontWeight: 400}}>startOn : start date of the badge. Once a badge is live, start date of the badge can&rsquo;t be changed. This is a mandatory field and has to be in the future only as per current date and time. Format : epoch time</span>
<span style={{fontWeight: 400}}>expiresOn : Expiry of the badge which defines by when can the badge be issued. This can be changed even when the badge is live. This is a mandatory field. Format : epoch time</span>
<span style={{fontWeight: 400}}>earnedBadgeExpiry : This is a mandatory field in both direct issue and enroll&amp;issue type of badges. Below are the 3 options in which earn expiry can be defined.</span>

<span style={{fontWeight: 400}}>expiryType : ABSOLUTE</span>

<span style={{fontWeight: 400}}>type : FIXED_DATE</span>

<span style={{fontWeight: 400}}>expiresOn : 1828754110 (epoch time)</span>

<span style={{fontWeight: 400}}>type : WITH_BADGE_META</span>

<span style={{fontWeight: 400}}>expireWithBadgeMeta : true</span>

<span style={{fontWeight: 400}}>expiryType : NEVER</span>
<span style={{fontWeight: 400}}>expiryType : RELATIVE</span>

<span style={{fontWeight: 400}}>relativeExpiryType : DAYS/WEEKS/MONTHS</span>
<span style={{fontWeight: 400}}>value : 3</span>

<span style={{fontWeight: 400}}>issuedBadgeExpiry : This is a mandatory field while creating the enroll&amp;issue type of badges. Below are the 3 options in which earn expiry can be defined.</span>

<span style={{fontWeight: 400}}>expiryType : ABSOLUTE</span>

<span style={{fontWeight: 400}}>type : FIXED_DATE</span>

<span style={{fontWeight: 400}}>expiresOn : 1828754110 (epoch time)</span>

<span style={{fontWeight: 400}}>type : WITH_BADGE_META</span>

<span style={{fontWeight: 400}}>expireWithBadgeMeta : true</span>

<span style={{fontWeight: 400}}>expiryType : NEVER</span>
<span style={{fontWeight: 400}}>expiryType : RELATIVE</span>

<span style={{fontWeight: 400}}>relativeExpiryType : DAYS/WEEKS/MONTHS</span>
<span style={{fontWeight: 400}}>value : 3</span>

<span style={{fontWeight: 400}}>active : This is an activation flag on top of status of badge and can be true or false.</span>
<span style={{fontWeight: 400}}>&nbsp;customerConstraints : Overall limit and rolling limits both are supported. Brands can define the restrictions in the permutation combination of all the below options. This is an optional field</span>

<span style={{fontWeight: 400}}>constraintType: CUSTOMER_BADGE_FIXED_VALUE</span>

<span style={{fontWeight: 400}}>maxEarnLimit : 100</span>

<span style={{fontWeight: 400}}>constraintType: CUSTOMER_BADGE_ROLLING_WINDOW</span>

<span style={{fontWeight: 400}}>maxEarnForDays : 1</span>
<span style={{fontWeight: 400}}>rollForDays : 1</span>
<span style={{fontWeight: 400}}>maxEarnForWeeks : 2</span>
<span style={{fontWeight: 400}}>&nbsp;rollForWeeks : 1</span>
<span style={{fontWeight: 400}}>maxEarnForMonths : 10</span>
<span style={{fontWeight: 400}}>rollForMonths : 1</span>

<span style={{fontWeight: 400}}>badgeConstraints : Overall limit and rolling limits both are supported. Brands can define the restrictions in the permutation combination of all the below options. This is an optional field</span>

<span style={{fontWeight: 400}}>constraintType : BADGE_FIXED_VALUE</span>

<span style={{fontWeight: 400}}>maxEarnLimit : 1000</span>

<span style={{fontWeight: 400}}>constraintType : BADGE_ROLLING_WINDOW</span>

<span style={{fontWeight: 400}}>rollType : DAYS/WEEKS/MONTHS</span>
<span style={{fontWeight: 400}}>rollValue : 1</span>
<span style={{fontWeight: 400}}>maxEarnLimit : 100</span>

<span style={{fontWeight: 400}}>images : This is an optional field</span>

<span style={{fontWeight: 400}}>name : This is an optional field</span>
<span style={{fontWeight: 400}}>fileSvcHandle</span>
<span style={{fontWeight: 400}}>url</span>
<span style={{fontWeight: 400}}>tag : UN_EARNED, EARNED, IN_PROGRESS. Users can use these tags to upload different kind of badges for the 3 states of the badges which are unearned (not yet earned by the user), in progress (partially earned, would be useful in case of milestone badges where customers have completed a certain part of the milestone), earned (when the customer has earned the badge after completing any activity)</span>

<span style={{fontWeight: 400}}>ownership</span>

<span style={{fontWeight: 400}}>restrictedToOwners : This is a mandatory field. Defining an owner for the badge is mandatory while creating the badge as in which module is going to claim the badge. Multiple owners can be added, but an existing owner can&rsquo;t be removed.</span>
<span style={{fontWeight: 400}}>Claims : Modules that have claimed the badge and the reference ID for the module. Once claimed, it can&rsquo;t be unclaimed but more claims can be added.</span>

<span style={{fontWeight: 400}}>benefits : A badge might or might not have a benefit. Users can link a single benefit or multiple benefits against a badge. This is optional and max 10 benefits can be added against a badge. There is no validation in the badge system to verify if the series id, program id, strategy ids passed are correct or not.</span>

<span style={{fontWeight: 400}}>If benefitType : COUPON, then below field is required</span>

<span style={{fontWeight: 400}}>seriesId : coupon series ID is required</span>

<span style={{fontWeight: 400}}>If benefitType : LOYALTY_POINTS, then below fields are required:</span>

<span style={{fontWeight: 400}}>programId</span>
<span style={{fontWeight: 400}}>promotionId</span>
<span style={{fontWeight: 400}}>allocationStrategyId</span>
<span style={{fontWeight: 400}}>expirationStrategyId</span>

<span style={{fontWeight: 400}}>tags : custom fields created for badges at an org level. This is an optional field</span>

<span style={{fontWeight: 400}}>name : name of custom field</span>
<span style={{fontWeight: 400}}>value : value of custom field</span>