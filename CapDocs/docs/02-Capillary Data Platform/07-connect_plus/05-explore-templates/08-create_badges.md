---
title: Create or update Badges
excerpt: This template enables you to create and update Badges.
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
# Creating/Updating Badges in Bulk

Badges are a type of visual recognition used in loyalty programs to reward customers for their progress, specific actions or achievements. These serve as a form of gamification and a sense of pride and accomplishment within the user, reinforcing the targeted behaviours and boosting engagement. For more information on Badges, refer to the Badges user documentation.

The badges Connect+ template enables you to create and update Badges in bulk. 

To configure the Badges template, perform the below steps/actions:

1. In the **Connect-to-source** <Glossary>Block</Glossary>, enter the source server details where the source\
   data is present and the location for saving the processed file. See [Connect to source](https://docs.capillarytech.com/docs/configure-actions#connect-to-source). You can also create a badge with a past date. Refer to the section [Creating a Historical Badge](https://docs.capillarytech.com/docs/create_badges#creating-a-historical-badge-badge-with-a-past-date) for more information.

2. In the **Decrypt data** block, if the files are encrypted, enter the details to decrypt the data. See [Decrypt data](https://docs.capillarytech.com/docs/configure-actions#decrypt-data).

3. In the **Transform Data** block, map the API fields with the source file. For information on how to map the fields, see [Transform data](https://docs.capillarytech.com/docs/configure-actions#transform-data).\
   For details on the API fields, refer to [Create badge API documentation](https://docs.capillarytech.com/reference/create-badges-org) for creating badges and refer to [Update badge API documentation](https://docs.capillarytech.com/reference/update-badges) for updating badges.
   ```Text Sample csv
   name,description,isActive,startOn,expiresOn,earnType,EarnexpiryType,EarnexpiryWithBadgeMeta,EarnBadgestype,restrictedToOwners,ConstraintType1 for Cx,ConstraintType2 for Cx,maxEarnLimit for Cx,rollForDays for Cx,maxEarnForDays for Cx,rollForWeeks for Cx,maxEarnForWeeks for Cx,rollForMonths for Cx,maxEarnForMonths for Cx,maxEarnLimit for badge,badge constraintType1,badge constraintType2,badge constraintType3,badge constraintType4,badge rolltype1,badge rollvalue1,badge max earn limit1,badge rolltype2,badge rollvalue2,badge max earn limit2,badge rolltype3,badge rollvalue3,badge max earn limit3,badge max earn limit4,earnType,benefitType1,benefitType2,benefitType3,points1,program ID1 for points,promotion ID1 for points,allocationStrategyId1 for points,expirationStrategyId1 for points,couponseriesId2,couponseriesId1,tag name 1,tag value 1,tag name 2,tag value 2,tag name 3,badgeRank,badgeGroupId,tag value 3
   test34567,Purchase 5 pet products in 3 months and get a pet grooming voucher,TRUE,1757777926,1799632870,EARN,ABSOLUTE,TRUE,WITH_BADGE_META,"Loyalty,Milestones",CUSTOMER_BADGE_FIXED_VALUE,CUSTOMER_BADGE_ROLLING_WINDOW,100,1,1,1,2,1,10,100000,BADGE_ROLLING_WINDOW,BADGE_FIXED_VALUE,BADGE_ROLLING_WINDOW,BADGE_ROLLING_WINDOW,DAYS,1,100,WEEKS,1,2000,MONTHS,1,5000,10000,EARN,COUPON,LOYALTY_POINTS,COUPON,100,626,80332,1489,3843,234,136,Type1,Birthday,Type2,name,Type3,3,456,mnp
   ```

4. In the **Connect-to-destination** block, enter the API endpoint details. See [Connect to destination](https://docs.capillarytech.com/docs/configure-actions#connect-to-destination).\
   For this template, the API used is `api_gateway/v1/badges/badgeMeta`.

5. In the **Trigger section** block, enter the details to schedule the trigger. Refer to the documentation on scheduling[Trigger](https://docs.capillarytech.com/docs/configure-actions#schedule-trigger).

# Creating a Historical Badge (Badge with a past date)

To create a badge with a past date, use the`"X-CAP-BADGES-MIGRATION":"migration"` in the **Addtional Headers** field. This allows you to migrate customers from other platforms who have expired badges or badges that were assigned in the past but are still active.

**Example 1:** If a brand is migrating expired badges from Platform A, they can use this header to recreate 20 badges that were active in 2023.\
**Example 2**: If a brand is migrating in September 2024 with 50 active badges that originally started on January 1st, 2024, they can use this header to ensure these badges are created in the Capillary system with their correct start date, preserving their ongoing status.

![16e7da9 image](https://files.readme.io/16e7da9-image.png)
