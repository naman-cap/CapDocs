---
title: Personalizing the Rewards Catalog
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
The Rewards Catalog Personalization feature enables you to display only the rewards that are applicable to a customer. This allows brands to manage rewards efficiently by allocating them to specific loyalty programs (MLPs), reducing clutter in the rewards catalog.

**Example:** If a customer holds five cards from different programs, you can configure the catalog to filter and display only the rewards associated with those specific programs, ensuring the customer sees rewards relevant to their memberships.

Personalization can be based on:

1. Loyalty program  
2. Tier  
3. Supplementary programs  
4. Segments and partitions  
5. Customer labels  
6. Card series  

**Configuration Guidelines**

* While configuring a reward, you can specify the list of program IDs along with the associated tiers, supplementary programs, or segments.
* Existing rewards can be updated to add or remove programs, tiers, supplementary programs, or segments.
* A single reward can be mapped to multiple loyalty programs.
* A single reward can also be mapped to multiple segments and partitions.
* If a reward is mapped only to a loyalty program and no tier or supplementary program is specified, it will be available to all customers in that program, regardless of their tier or supplementary program.
* Rewards can be mapped either to loyalty program criteria (tier and supplementary program) or to customer segments—but not both at the same time.
* Once a segment is linked to a reward, that reward will only be available to customers within that segment.

**API changes and validations**

1. Create reward API

[API doc for create reward](https://docs.capillarytech.com/reference/post-create-reward)

* supplementaryCriteria and segmentCriteria are optional fields.
* All the passed IDs are validated for the org

2. Update Reward API

[API doc for update reward](https://docs.capillarytech.com/reference/put-update-reward)

* supplementaryCriteria and segmentCriteria are optional fields.
* All the passed IDs are validated for the org
* The segments  and partition should be valid and active segment 
* If null is passed the existing mapping will not be affected
* If empty list is passed all the existing mappings will be removed

3. Issue rewards

[API doc for issue user reward](https://docs.capillarytech.com/reference/post-issue-user-reward-mobileold)\
[API doc for issue bulk reward](https://docs.capillarytech.com/reference/post-issue-user-reward-email-copy-1)

* Validation against customer’s programIDs and segmentIDs.
* If program IDs don’t match for a particular reward in the issueReward call, then that particular reward is not issued and an error message is thrown. Rest of the rewards are issued.

4. Get all rewards for the brand

[API doc for get brand rewards](https://docs.capillarytech.com/reference/get-brands-rewards)

* End point: user/reward/brand/\{brandName}
* A new parameter for accepting the customer identifier is added but this parameter is not mandatory.
  * If a customer identifier is present, it will only return the rewards which are mapped to the customer’s program IDs or segment IDs and general rewards where no programs are mapped.
* All Get reward APIs will be fetching the partner program details linked to the reward

**To get the loyalty program ID, navigate to the loyalty module and click on the program. The URL displays the program ID as shown below**

![16a6454 Screenshot 2023 08 17 at 12](https://files.readme.io/16a6454-Screenshot_2023-08-17_at_12.37.37_PM.png)

**To retrive the tier ID, you can use insights or PMA to fetch the IDs**

**To retrieve the subscription program ID, head to the loyalty module and click on the program. Under Program, click on subscription program and it will give you the ID for the subscription programs like below**

![be68a96 Screenshot 2023 08 17 at 12](https://files.readme.io/be68a96-Screenshot_2023-08-17_at_12.36.36_PM.png)

**Sample Request Payload**

```
"supplementaryCriteriaRO": [
    {
      "loyaltyProgramId": 750,
      "tierIds": [
        "219",
        "662"
      ],
      "partnerProgramIds": [
        "342",
        "833"
      ]
    }
  ]


```

```
"supplementaryCriteriaRO": [
    {
      "loyaltyProgramId": 750
    }
  ]
```

```
 "segment":[
    {
    "segmentId":"6134",
    "partitionId": "2669"
    },
    {
    "segmentId":"6136",
    "partitionId": "2675"
    }
  ]
```

<br />

**Success response**

```
{
    "status": {
        "success": true,
        "code": 6002,
        "message": "Reward created successfully"
    },
    "reward": {
        "id": 57220
    }
}
```

**Error response**

```
{
    "status": {
        "success": false,
        "code": 400,
        "message": "Passed loyalty programId is not exists"
    }
}
```

```
{
    "status": {
        "success": false,
        "code": 400,
        "message": "Passed entityId is not exists"
    }
}
```

**Response for Get user reward by ID**

```
{  
    "status": {  
        "success": true,  
        "code": 200,  
        "message": "User Reward fetched successfully"  
    },  
    "reward": {  
        "id": 57220,  
        "name": "testing36",  
        "description": "testing36",  
        "imageId": "bef4d522-2cf8-4fea-8087-376c449d5c85",  
        "imageUrl": "<https://eucrm-solutions.s3.amazonaws.com/rewards/86a1c214-a955-4b40-a2d7-d4dc279.jpeg">,  
        "thumbnailId": "c886f064-2b3f-4c19-9e86-7f7e5ab5ae04",  
        "thumbnailUrl": "<https://eucrm-solutions.s3.amazonaws.com/rewards/9e0dfad6-5b9d-4e2b-ac15-2870357.jpeg">,  
        "termAndConditionsId": "820a3d7f-2601-405b-9f56-4a3ba8e9df73",  
        "termAndConditionsUrl": "<https://eucrm-solutions.s3.amazonaws.com/rewards/06f0da4b-dd0b-48fe-b20d-1cadc76.html">,  
        "tier": null,  
        "label": null,  
        "priority": 1,   
        "group": null,  
        "startTime": "2023-05-17 20:00:00",  
        "endTime": "2023-10-31 11:59:30",  
        "expired": false,  
        "started": false,  
        "programId": null,  
        "categoryList": [  
            {  
                "id": 4,  
                "name": "clothing",  
                "enabled": true  
            }  
        ],  
        "customFields": {  
            "CF4": "This is a dummy customfield",  
            "CF2": "This is a dummy customfield",  
            "CF1": "This is a dummy customfield"  
        },  
        "loyaltyProgramCriteria": [  
            {  
                "loyaltyProgramId": 690,  
                "tierIds": null,  
                "partnerProgramIds": null  
            }  
        ],  
        "restrictions": {  
            "isValid": true,  
            "transactionLevel": [  
                {  
                    "id": 52,  
                    "isValid": true,  
                    "limit": 1,  
                    "kpi": "QUANTITY"  
                }  
            ],  
            "customerLevel": [  
                {  
                    "id": 56,  
                    "isValid": true,  
                    "repeatFrequencyType": "DAYS",  
                    "limit": 5,  
                    "interval": 10000,  
                    "kpi": "TRANSACTION_COUNT"  
                },  
                {  
                    "id": 57,  
                    "isValid": true,  
                    "repeatFrequencyType": "WEEKS",  
                    "limit": 30,  
                    "interval": 10000,  
                    "kpi": "TRANSACTION_COUNT"  
                },  
                {  
                    "id": 58,  
                    "isValid": true,  
                    "repeatFrequencyType": "MONTHS",  
                    "limit": 50,  
                    "interval": 10000,  
                    "kpi": "TRANSACTION_COUNT"  
                }  
            ],  
            "rewardLevel": [  
                {  
                    "id": 53,  
                    "isValid": true,  
                    "consumed": 0,  
                    "repeatFrequencyType": "DAYS",  
                    "limit": 500,  
                    "interval": 10000,  
                    "kpi": "TRANSACTION_COUNT"  
                },  
                {  
                    "id": 54,  
                    "isValid": true,  
                    "consumed": 0,  
                    "repeatFrequencyType": "WEEKS",  
                    "limit": 5000,  
                    "interval": 10000,  
                    "kpi": "TRANSACTION_COUNT"  
                },  
                {  
                    "id": 55,  
                    "isValid": true,  
                    "consumed": 0,  
                    "repeatFrequencyType": "MONTHS",  
                    "limit": 10000,  
                    "interval": 10000,  
                    "kpi": "TRANSACTION_COUNT"  
                }  
            ]  
        },  
        "appliedPromotions": \[]  
    }  
}
```

# Use cases

1. **Filtering Rewards for Multiple Loyalty Program Members:**  A customer may hold memberships in multiple loyalty programs. When they log into the rewards catalog, they should only see rewards relevant to the specific loyalty program associated with the card used for purchases. By filtering rewards based on program IDs, brands can ensure that customers are presented with rewards applicable to their current loyalty program membership, providing a more personalized and relevant experience.  
2. **Creating Targeted Rewards for Loyalty Program Members:** A brand can create a reward specifically for customers who hold a certain credit card and are members of a particular loyalty program. By mapping rewards to specific loyalty programs, brands ensure that the reward is visible only to customers who meet these criteria, enhancing the perceived value of the reward and fostering exclusivity.  
3. **Customized Redemption:** By mapping loyalty program IDs and tiers, brands can offer personalized rewards based on a customer’s loyalty status. Higher-tier customers may receive exclusive or premium rewards, while lower-tier customers are presented with rewards suited to their level.  
4. **Targeted Promotions:** Mapping loyalty program IDs and tiers enables brands to execute targeted promotions. Specific rewards can be offered to customers based on their loyalty program participation, driving engagement and encouraging higher-tier customers to maintain their loyalty.  
5. **Supplementary Program Integration:**  Mapping loyalty program IDs to the rewards catalog allows for integration with supplementary programs. For instance, if a brand partners with an airline, it can map the loyalty program IDs of customers who are also frequent flyers, offering rewards such as discounted or complimentary flights.  
6. **Personalized Rewards Based on Customer Groups:**  Sarah is a loyal customer who enjoys browsing her favorite brand's rewards catalog. She belongs to two special customer groups: "**Frequent Shoppers**" and **"Premium Members**."\
   Rewards Available:  

* Reward R1: Designed for customers in the "Frequent Shoppers" and "Summer Sale" groups.  
* Reward R2: For those in the "Frequent Shoppers" and "Premium Members" groups.  
* Reward R3: For the "Frequent Shoppers" and "Early Access" groups.  
* Reward R4: Available to all customers, without any specific group requirements.

When Sarah logs into the rewards catalog, she expects to see only the rewards that are relevant to her. Since she is in the "Premium Members" group, she sees:

* Rewards Shown: R2, R4  
* Rewards Hidden: R1, R3 (because she isn’t in the "Summer Sale" or "Early Access" groups)

This personalized experience makes Sarah feel valued and ensures she only sees rewards she can redeem.

7. **Reward Experience for a Non-Customer Group Member:** Emma has not joined any specific customer groups, but she is still an important customer to the brand.\
   Rewards Available:  

* Reward R1: For "Frequent Shoppers" and "Summer Sale" groups.  
* Reward R2: For "Frequent Shoppers" and "Premium Members" groups.  
* Reward R3: For "Frequent Shoppers" and "Early Access" groups.  
* Reward R4: Available to all customers.

Since Emma is not part of any specific groups, when she logs in, she sees:

* Reward Shown: R4  
* Rewards Hidden: R1, R2, R3 (because she doesn’t belong to those groups)

Even though she isn’t part of any special groups, Emma still feels appreciated with a reward she can redeem.
