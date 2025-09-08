---
title: Mode of Payment in Rewards Catalog
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
Brands can now expand their catalog to include rewards purchased with cash or a combination of points and cash, offering customers greater flexibility and incentive to engage with the loyalty program. With options including FREE, POINTS, CASH, and POINTS + CASH, brands gain enhanced flexibility and control over reward issuance.

This feature enables customers to receive a reward either by redeeming their points or by making a cash payment or both. Cash transactions or any other mode of payment occur outside the system and are not subject to validation within the system. 

![b7210c7 image3](https://files.readme.io/b7210c7-image3.png)

### The supported payment modes are:

1. FREE: This payment mode incurs zero cost, requiring neither points nor cash.
2. POINTS: Loyalty points are redeemed from the customer's wallet to issue the reward.
3. CASH: The reward is issued without redemption or validation, assuming the tender transaction occurred outside the system (upstream system). 
4. POINTS\_CASH: In this payment mode, the system issues rewards based on redeeming both cash and loyalty points from the customer's wallet. The assumption here is that the cash transaction has been completed successfully, and the reward is issued based solely on this external transaction.
5. CONV\_RATIO: The rewards system calculates the equivalent miles based on the points provided in the issue reward request basis the conversion ratio of the reward. For example:
   * If the conversion ratio value is 0.44 and the customer wants to burn 1500 points and the same points worth of miles need to be credited to his account, the rewards system calculates miles worth 1500 points based on the conversion ratio value i.e. 1500\*0.44 = 660 miles
   * If the conversion ratio value is 0.44 and the customer wants 1000 miles to be credited. The reward system calculates the points to be redeemed i.e. 1000/0.44= 2272 points will be deducted.

**During the issue call, the system records the payment mode used to issue the reward at the reward level.**

### Validations

1. If payment config is not set, type is not FREE\_VOUCHER and intouchPoints is 0, an exception will be thrown saying either define the points greater than 0 or type should be FREE\_VOUCHER
2. For MILES redemption type, Payment config is mandatory.
3. CONV\_RATIO mode is supported only for CHARITY, MILES and CASH\_WALLET type of redemption types.
4. If type is FREE\_VOUCHER and payment mode is set then, it will be FREE i.e. no points will be deducted.

## API documentation

1. [Create Reward with new payment configs](https://docs.capillarytech.com/reference/post-create-reward)
2. [Update Reward with new payment configs](https://docs.capillarytech.com/reference/put-update-reward)

### Conversion ratio (CONV\_RATIO)

```json
"paymentConfigs": [
       {
            "paymentMode": "CONV_RATIO",
            "conversionRatio":0.33
        }
    ]
```

### POINTS

```
"paymentConfigs": [
       {
            "paymentMode": "POINTS",
            "points":100
        }
    ]
```

### CASH

```
"paymentConfigs": [
       {
            "paymentMode": "CASH",
            "cash":200
        }
    ]
```

### Points and cash (POINTS\_CASH)

```
"paymentConfigs": [
       {
            "paymentMode": "POINTS_CASH",
            "cash":100,
            "points":150
        }
    ]
```

### FREE

```
"paymentConfigs": [
       {
            "paymentMode": "FREE"
        }
    ]
```

3. APIs to retrieve the payment mode details:
   1. [Get user specific reward by id](https://docs.capillarytech.com/reference/get-user-brand-specific-rewards)
   2. [Get reward details by id](https://docs.capillarytech.com/reference/get-brand-by-id)
   3. [Get issued reward details for a user](https://docs.capillarytech.com/reference/get-reward-issue-transaction-details) 
   4. [Get all available rewards for user](https://docs.capillarytech.com/reference/get-rewards-for-user) : Both payment config and tender details are returned.

## Usecase

 A brand, ABC, wants to allow customers to purchase rewards using combination of points and cash rather than allowing customers to purchase rewards using only points.\
To achieve this, you use this API with payment mode as `POINTS_CASH` and issue the reward.
