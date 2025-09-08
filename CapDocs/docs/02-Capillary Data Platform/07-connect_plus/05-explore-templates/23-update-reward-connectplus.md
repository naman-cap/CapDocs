---
title: Update Rewards Template
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
This template allows you to update rewards in bulk. 

> ❗️ Note
>
> Do not update rewards created using Intouch points and payment configuration at the same time. Attempting to update rewards with both configurations in a single operation will cause reward update to fail. To avoid this, use separate CSV files and data flows for each configuration. For instance, one CSV file should contain only rewards created with Intouch points, while a separate CSV and data flow should be used to update rewards with the payment configuration.

# Configuring Update Rewards Template

Perform the below steps/actions:

1. From the dataflow templates, select **Update Rewards**.

   ![eb377e867109ab96a872a8693558becb5869dfa9705ff775168775de68ccb0f2 image](https://files.readme.io/eb377e867109ab96a872a8693558becb5869dfa9705ff775168775de68ccb0f2-image.png)
2. In the **Connect-to-source section** <Glossary>Block</Glossary> enter the source server details where the source\
   data is present and the location for saving the processed file. For the information on configuring this block, refer to [Connect to source](https://docs.capillarytech.com/docs/configure-actions#connect-to-source) documentation
3. In the **Decrypt data** block, if the files are encrypted, enter the details to decrypt the data. For the information on configuring this block, refer to [Decrypt data](https://docs.capillarytech.com/docs/configure-actions#decrypt-data) documentation.
4. In the **Transform Data** block, map the API fields with the source file. For information on how to map the fields, see [Transform data](https://docs.capillarytech.com/docs/configure-actions#transform-data).   For information on the API fields, refer to the[ Update Rewards API documentation](https://docs.capillarytech.com/reference/put-update-reward).

   Reward ID and Brand ID are mandatory to update the rewards.

![1412f99416ce9cbeb44bcf844ef5266fb93195b4c4df501381e93a708730a3d8 Rewards Fields Mapping](https://files.readme.io/1412f99416ce9cbeb44bcf844ef5266fb93195b4c4df501381e93a708730a3d8-Rewards_Fields_Mapping.gif)

<br />

4. In the **Connect-to-destination** block, enter the API endpoint details. For the information on configuring this block, refer to [Connect to destination](https://docs.capillarytech.com/docs/configure-actions#connect-to-destination) documentation.
5. In the **Trigger** block, enter the details to schedule the trigger. See [Trigger](https://docs.capillarytech.com/docs/configure-actions#schedule-trigger).

For troubleshooting information, refer to the [troubleshooting section](https://docs.capillarytech.com/docs/troubleshooting-guide-connectplus) of the documentation.

# Sample CSV File

```Text Copy the content to a notepad and save as csv file
rewardId,brandId,type,startDate,endDate,enabled,priority,intouchPoints,paymentConfigs.paymentMode,paymentConfigs.points,paymentConfigs.cash,paymentConfigs.conversionRatio,redemptionType,categories,intouchSeriesId,vendorId,vendorRedemption,tier,group,tillId,programId,label,languageCode1,name1,description1,termNConditionsId1,enabled1,imageId1,thumbnailId1,images_name1,images_id1,images_name2,images_id2,videos_name1,videos_id1,videos_url1,videos_isExternal1,videos_name2,videos_id2,videos_url2,videos_isExternal2,customField1 key,customField2 key,customField3 key,customField4 key,customField5 key,customField6 key,customField7 key,customField8 key,customField9 key,customField10 key,customField11 key,customField12 key,customField13 key,customField14 key,customField15 key,languageCode2,name2,description2,termNConditionsId2,enabled2,imageId2,thumbnailId2,images,videos,customFields,owners.ownerType,owners.ownerId,loyaltyProgramId1,tierIds1,partnerProgramIds1,loyaltyProgramId2,tierIds2,partnerProgramIds2,loyaltyProgramId3,tierIds3,partnerProgramIds3,groupName,rewardRank,customerLevel.kpi1,customerLevel.limit1,customerLevel.repeatFrequencyType1,customerLevel.interval1,customerLevel.kpi2,customerLevel.limit2,customerLevel.repeatFrequencyType2,rewardLevel.kpi1,rewardLevel.limit1,rewardLevel.repeatFrequencyType1,rewardLevel.interval1,rewardLevel.kpi2,rewardLevel.limit2,rewardLevel.repeatFrequencyType2
262832,3,VOUCHER,,2030-11-09T12:00:00Z,true,,,CONV_RATIO,,,1,MILES,,,18,13247,,,,,,en,Reward 1 done,Reward 1 description,,true,,,,,,,,,,,,,,,test CF1,test CF2,test CF3,,,,,,,,,,,,,fr,Reward 1,Reward 1 description,,true,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
262830,3,VOUCHER,,2030-11-09T12:00:00Z,true,,,POINTS_CASH,1009,101,,CHARITY,,,19,16288,,,,,,en,Reward 2 test,Reward 2 description,,true,,,,,,,,,,,,,,,test CF1,test CF2,test CF3,,,,,,,,,,,,,fr,Reward 2,Reward 2 description,,true,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
262831,3,VOUCHER,,2030-11-09T12:00:00Z,true,,,CASH,,99,,INTOUCH_REWARD,,16745,,,,,,,,en,Reward 3 test,Reward 3 description,,true,,,,,,,,,,,,,,,test CF1,test CF2,test CF3,,,,,,,,,,,,,fr,Reward 3,Reward 3 description,,false,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
262833,3,VOUCHER,,2030-11-09T12:00:00Z,false,,,POINTS,23,,,INTOUCH_REWARD,,16745,,,,,,,,en,Reward 4 hello,Reward 4 description,,true,,,,,,,,,,,,,,,test CF1,test CF2,test CF3,,,,,,,,,,,,,fr,Reward 4,Reward 4 description,,true,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
262829,3,VOUCHER,,2030-11-09T12:00:00Z,true,,,CONV_RATIO,,,0.5,MILES,,,18,13247,,,,,,en,Reward 5 updated,Reward 4 description,,true,,,,,,,,,,,,,,,test CF1,test CF2,test CF3,,,,,,,,,,,,,fr,Reward 4,Reward 4 description,,true,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
```
