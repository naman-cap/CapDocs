---
title: Getting Started with Rewards Catalog
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
**Note : Rewards catalog is based on API first architecture, so brands can directly use the APIs to create, update and view the rewards.**

# Prerequisite

* Marvel Rewards should be enabled for the org
  * To enable, create a JIRA request to the Capillary Product Support Team with the following info:
    * Org ID
    * Till ID. Onboarding can be performed for only one Till in an org. The till code is necessary for onboarding organizations in Marvel because it enables the Gamification application to make an InTouch API call. This call validates the customer by retrieving their details and ensuring they are valid. Without the till code, the Gamification application cannot perform this validation during the onboarding process.

# Create Rewards

To create rewards on the Marvel UI, perform the following:

1. Go to the old UI of Capillary and type Marvel in the search bar.

![25357e9 image7](https://files.readme.io/25357e9-image7.png)

2. Click on Marvel Rewards. You will be redirected to the below page for your org

![b29bae0 image10](https://files.readme.io/b29bae0-image10.png)

3. To create a new reward, click on the + icon on the top right corner. Enter all the fields mentioned below:

![adf406c image12](https://files.readme.io/adf406c-image12.png)

> ❗️ Note:
>
> Ensure that an external points system (e.g., Bonus Link) is configured when enabling external points redemption at the organization level. If external points APIs are not configured, the "Create Reward" option in the UI will remain disabled.
>
> ![7a735b2da4eb31239e7bf74d9981dcc4b20ecd6ee3997b4c3bffa39e433d824c image](https://files.readme.io/7a735b2da4eb31239e7bf74d9981dcc4b20ecd6ee3997b4c3bffa39e433d824c-image.png)

a. Type - Select the type of reward you want to create (e.g., points, free voucher). This is just a metadata.

1. Physical voucher: Physical coupons generated against redeeming customer points. For example, redeem 150 points for a flat 150 off coupon.
2. Free voucher: Digital coupons generated without any points redemption.

b. Priority - Set the priority level for the reward (e.g., high, medium, low or 1, 2, 3, 4 and so on). This is a metadata for the reward.

c. Category - Select the category for the reward (e.g., fashion, electronics, groceries). You can create the categories in the category section in Marvel. This is a metadata for the reward.

![c914bfd image9](https://files.readme.io/c914bfd-image9.png)

d. Subscription - This is not working and to be ignored while creating a reward.

![916cba9 image5](https://files.readme.io/916cba9-image5.png)

e. Advanced Filtering - Use filters such as tier, group, or label to specify the target audience for the reward. This is a metadata for the reward. The character limit for tiers, groups, and labels is 255 characters each.

f. Redemption type - Define the redemption type if it is intouch reward or vendor reward or cart promotion.

1. InTouch only rewards: These are points or coupons created in Capillary and uses Capillary APIs.

Here, the system will use the vendor specific API to issue vendor coupons and after receiving a successful response from the API, the system will use the [capillary issue coupon](https://docs.capillarytech.com/reference/issue-coupon-1) API to issue coupons and retrieve the coupon codes. This redemption type helps to track the number of coupons issued to customers through the vendor system.

2. Cart Promotion rewards: These are promotions created in Capillary.

g. Vendor and vendor redemption 

![9d133c0 image4](https://files.readme.io/9d133c0-image4.png)

In Vendor redemption, you can configure rewards linked to a particular vendor. You can also configure multiple actions in a single vendor redemption, for example, one to check if the customer has points and another to issue the reward.

> ❗️ Note:
>
> Ensure that an external points system (e.g., Bonus Link) is configured when enabling external points redemption at the organization level. If external points APIs are not configured, the "Create Reward" option in the UI will remain disabled.

**Begin by creating the reward partners. Navigate to the rewards vendor section**

![df3b3f3 image6](https://files.readme.io/df3b3f3-image6.png)

1. Click on the plus icon and assign a name to your reward partner, such as "target". Assign key-value pairs to the target. These will be used in all vendor redemptions created in subsequent steps. You can add frequently used fields as key-value pairs here. Then, click on save and create the vendor.

![7542727 image2](https://files.readme.io/7542727-image2.gif)

2. With the vendor created, select "target" and create vendor redemptions. Vendor redemption under vendor means specific APIs for the target will be called, created as a partner reward, and later linked to the catalog item.

![9b46d36 image5](https://files.readme.io/9b46d36-image5.gif)

3. Click on the plus icon and assign a name to your vendor redemption. Choose the type of reward, such as miles, cash wallet, cashback card, discount, charity games, vouchers, sweepstakes, auction, etc.

![77c56b3 image4](https://files.readme.io/77c56b3-image4.gif)

4. Actions are the APIs that will be called to issue this particular reward. Assign an execution order to the actions.

![14da9bc image11](https://files.readme.io/14da9bc-image11.gif)

5. Provide the API URL for the vendor and specify the API type.

![475abc8 image12](https://files.readme.io/475abc8-image12.gif)

6. Add the request body. Specify the redemption value and mobile number as variables here which will be passed in the request to issue a reward call. You can also include custom fields, fulfilment status and reward transaction ID in the API body. The fulfilment status and the reward transaction ID are variables resolved in the backend according to the associated transaction. 
   * **Custom Field**: Enables brands to add additional data in the API request. Use the format *customfield\_customFieldName*. For example, a custom field named "Address: Bangalore" should be written as customfield\_Address then it will replace the value of custom field with Bangalore. **Note:** Only custom field created with`ISSUE REWARD`scope is supported.
   * **Fulfillment Status:** Enables to update the fulfilment status. Use the parameter fulfillmentStatus, formatted in camelCase.
   * **Reward Transaction ID**: Enables to add the reward transaction ID. This helps the vendor to identify the transaction associated with the issued reward.  Use the parameter rewardTransactionId, formatted in camelCase.\
     **NOTE:**
     * The API body supports other parameters that can be included based on the brand's specific requirements or integration needs.
     * Internal Capillary APIs can also be used.
       ```Text sample api payload with custom field, transaction id and fulfilment status
       ,
           "apiBody" : "{\"transactionId_property\": \"${rewardTransactionId}\",\"customFields_property\": {\"customField_1_property\": \"${customfield_CF1}\"}, \"fulfillmentStatus_property\": \"${fulfillmentStatus}\"}",
          
       ```
       <br />

![64254c3 image8](https://files.readme.io/64254c3-image8.gif)

7. API headers contain authentication details and content-type. Enter the authorization in the API headers and save them by clicking on the + icon. Add more API headers as needed and save them.

![b9a21e1 image7](https://files.readme.io/b9a21e1-image7.gif)

![44e2fde image3](https://files.readme.io/44e2fde-image3.png)

8. Context keys contain the response of the vendor. Specify the fields to return in the response. Enter "voucher" as a mandatory param if storing any code or unique id. Provide the path of the response as value for that particular field.

![237d1c2 image9](https://files.readme.io/237d1c2-image9.gif)

9. Select the response value needed in the issue reward response block and click on save to save the vendor redemption.

![e6f04c4 image13](https://files.readme.io/e6f04c4-image13.gif)

10. Create as many vendor redemptions as needed under a particular reward vendor. 

![310e9ce image10](https://files.readme.io/310e9ce-image10.png)

11. Once the vendor redemptions are created, return to the reward creation and create a new reward and select the vendor and vendor redemption to be linked to this reward.

![55ce942 image1](https://files.readme.io/55ce942-image1.gif)

> 👍 Note
>
> There is no limit on the number of rewards you can create.

**Example 1 for vendor redemptions**

![87de328 Screenshot 2024 07 23 at 2](https://files.readme.io/87de328-Screenshot_2024-07-23_at_2.42.29_PM.png)

![03097c6 Screenshot 2024 07 23 at 2](https://files.readme.io/03097c6-Screenshot_2024-07-23_at_2.42.38_PM.png)

![9ac1530 Screenshot 2024 07 23 at 2](https://files.readme.io/9ac1530-Screenshot_2024-07-23_at_2.42.48_PM.png)

**Example 2 for vendor redemptions**

![4c9412c Screenshot 2024 07 23 at 3](https://files.readme.io/4c9412c-Screenshot_2024-07-23_at_3.06.43_PM.png)

![5f3bb1d Screenshot 2024 07 23 at 3](https://files.readme.io/5f3bb1d-Screenshot_2024-07-23_at_3.06.55_PM.png)

![1d88885 Screenshot 2024 07 23 at 3](https://files.readme.io/1d88885-Screenshot_2024-07-23_at_3.07.04_PM.png)

h. start and end date of the redemption period. While creating the reward, start date must be in the future.

i. Geographies - Select the country where the reward is applicable. This is a metadata for the reward. You can define these in the Geography section in Marvel.

![b705974 image8](https://files.readme.io/b705974-image8.png)

j. Name - Enter a unique name for the reward.

k. Description - Provide a brief description of the reward and its benefits.

l. Reward Image - Upload an image that represents the reward. Only one reward image can be linked to a reward in a single language.

m. Thumbnail Image - Upload a thumbnail image for the reward. Only one thumbnail image can be linked to a reward in a single language.

n. Terms and Conditions - Provide the terms and conditions associated with the reward.

4. You can also define the name, description, reward image, thumbnail image, terms and conditions in multiple languages for a particular reward. Create the languages in the languages section of Marvel and use them while creating a reward.

![8014249 image3](https://files.readme.io/8014249-image3.png)

5. Points Vendor: Brands can either use Capillary as the points vendor or use their own loyalty platform or partnered platform and do the configuration here in the Points vendor section of Marvel. This allows brands to use rewards catalog even if they don’t use Capillary as their loyalty product.

![e5fc649 image2](https://files.readme.io/e5fc649-image2.png)

6. Enable this option to define third party vendors for points redemption in the Points vendor section of Marvel.

![6b818c6 image11](https://files.readme.io/6b818c6-image11.png)

7. Once you have filled in all the required fields, click on the Save button to create the reward.

## Use cases

1. Intouch Rewards - Coupons & Cart Promotions

* Get a 20% discount upto 100 on your next transactions.
* Redeem 500 points and get this offer

2. External or Vendor based rewards

* Get 10 AirCap miles for every 10000 points you redeems
* Get a recharge of 100 for 500 points

## Reward Field Editability by State

| Field                                                                | Upcoming | Live | Ended |
| -------------------------------------------------------------------- | :------: | :--: | :---: |
| Start date                                                           |     ✓    |   ✗  |   ✗   |
| End date                                                             |     ✓    |   ✓  |   ✓   |
| Reward enable/disable (yes/no)                                       |     ✓    |   ✓  |   ✓   |
| Reward type                                                          |     ✓    |   ✗  |   ✗   |
| Payment config                                                       |     ✓    |   ✓  |   ✓   |
| Vendor redemption ID                                                 |     ✓    |   ✓  |   ✓   |
| InTouch series ID                                                    |     ✓    |   ✓  |   ✓   |
| Supplementary criteria (loyalty program, tier, subscription program) |     ✓    |   ✓  |   ✓   |
| Labels                                                               |     ✓    |   ✓  |   ✓   |
| Cards                                                                |     ✓    |   ✓  |   ✓   |
| Segments                                                             |     ✓    |   ✓  |   ✓   |
| Groups and rank within group                                         |     ✓    |   ✓  |   ✓   |
| Reward rank                                                          |     ✓    |   ✓  |   ✓   |
| All restrictions/limits/inventory                                    |     ✓    |   ✓  |   ✗   |
| Name                                                                 |     ✓    |   ✓  |   ✓   |
| Description                                                          |     ✓    |   ✓  |   ✓   |
| Terms and conditions                                                 |     ✓    |   ✓  |   ✓   |
| Custom fields                                                        |     ✓    |   ✓  |   ✓   |
| Rich text fields                                                     |     ✓    |   ✓  |   ✓   |
| Reward image                                                         |     ✓    |   ✓  |   ✓   |
| Thumbnail image                                                      |     ✓    |   ✓  |   ✓   |
| New images (name, alt text, URL)                                     |     ✓    |   ✓  |   ✓   |
| Videos (name, alt text, URL)                                         |     ✓    |   ✓  |   ✓   |
| Language enabled (yes/no)                                            |     ✓    |   ✓  |   ✓   |
| Tier                                                                 |     ✓    |   ✓  |   ✓   |
| Group                                                                |     ✓    |   ✓  |   ✓   |
| Label                                                                |     ✓    |   ✓  |   ✓   |
| Categories                                                           |     ✓    |   ✓  |   ✓   |
| Geography                                                            |     ✓    |   ✓  |   ✓   |

## Points to Note

1. If a reward is enabled, then it will be returned in the get call. To filter out the rewards which are enabled but start date is in future, app layer can control this.
2. In case of vendor rewards, vendors should support the reversal of rewards issued.
3. Subscription section is present in Marvel UI but it is not functional.

## API documentation for Rewards Catalog

You can find the API documentation [here](https://docs.capillarytech.com/reference/rewards-catalog-1)
