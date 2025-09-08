---
title: Marvel games
excerpt: This page provides you with information on configuring games on marvel.
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
On Marvel, you can set up games for customers to play and earn rewards. Marvel games allow configuration for up to three different games as follows:

1. **Spin the wheel**

![058f781 Screenshot 2023 08 14 at 7](https://files.readme.io/058f781-Screenshot_2023-08-14_at_7.03.00_PM.png)

2. **Scratch and win**

![44538c9 Screenshot 2023 08 14 at 7](https://files.readme.io/44538c9-Screenshot_2023-08-14_at_7.03.11_PM.png)

3. **Pick and Win**

![b1ce7f9 Screenshot 2023 08 14 at 7](https://files.readme.io/b1ce7f9-Screenshot_2023-08-14_at_7.12.09_PM.png)

To configure games on Marvel, perform the following:

1. Go to the old UI of Capillary and type Marvel in the search bar. Once you click on Games, you will be redirected to the below page for your org.

<Image alt="Landing page of Marvel Games" align="center" src="https://files.readme.io/137077d-Screenshot_2023-08-14_at_2.06.36_PM.png">
  Landing page of Marvel Games
</Image>

2. Enter the game details.

* GameType : This is a custom metadata. The type of game doesn’t matter to the backend, this is for Ui purposes.

1. SPIN\_THE\_WHEEL
2. SCRATCH\_AND\_WIN
3. PICK\_AND\_WIN

* User Play Limit : This is used to define how many times a customer can play the game.
* Start Date and End Date for the game
* Availability for all : This is a custom metadata. In this case, there is no need to allocate the game, by default, it is available to everyone.
  * When this option is true, the downstream system will show the game to everyone.
  * When this option is false, then the system expects that this game is allocated to a certain audience via APIs.
* Name : name for the game
* Description : description for the game
* Game Image : Data is stored in AWS S3.
* Terms and conditions : Data is stored in AWS S3.

![4caaac3 Screenshot 2023 08 14 at 2](https://files.readme.io/4caaac3-Screenshot_2023-08-14_at_2.08.50_PM.png)

**Game Items:**

Let’s say you are running a game : Spin the wheel. In this game, you can have 3 options or 5 options and so on. All these options are configured and are called as game items. At least 2 game items need to be defined.

Each option has to have a probability in a particular game.

* Then each option will have its limit/capping, like option 1 can be used only 100 times, option 2 can be used 150 times and once option 1 is consumed, this option will not be given to the user
* Then there will be customer level capping, like a customer can play the game only 200 times and post that user will not be allowed to play.
* There can be game level capping too, like a game can be played in total for only 50,000 times
* Each option is linked to a reward

1. Name : Name for the game item, ex : 20% off on cart.
2. Description : Description for the game item.
3. Reward/Redemption : Can be 10% off, free product, etc. APIs have to be called to issue these rewards to the customers.
4. Maximum Availability : If the game can be played 1000 times, what is the availability for this game item. Ex: a 20% off coupon can be issued only 100 times if the max availability is 100, post that it will not be issued.
5. Winning Probability : Ex: If the game can be played 1000 times, then 25% winning probability indicates that 250 people can win this option. 
6. Advanced settings
   1. Upload Image : custom metadata
   2. Color code : custom metadata

* This is defined at the game level and not the player level. Either maximum availability or winning probability is defined.
* You can add as many game items as you want.

![a817f59 Screenshot 2023 08 14 at 2](https://files.readme.io/a817f59-Screenshot_2023-08-14_at_2.10.01_PM.png)

![91c9fc5 Screenshot 2023 08 14 at 2](https://files.readme.io/91c9fc5-Screenshot_2023-08-14_at_2.10.36_PM.png)

**Redemption:**

* Before you set up a game, redemptions have to be defined. Here, you can set up the API configurations.
* Gamification supports third party APIs as well.

![2f25721 Screenshot 2023 08 14 at 2](https://files.readme.io/2f25721-Screenshot_2023-08-14_at_2.12.34_PM.png)

Basic details:

1. Name
2. Description
3. Reward/Redemption Type (Custom metadata)
   1. VOUCHER
   2. POINTS
   3. PHYSICAL\_VOUCHER

API:

1. apiUrl
2. apiType
3. apiResponseExtractKey
4. apiBody
5. apiHeaders
6. apiQueryParameters

![9999dbe Screenshot 2023 08 14 at 2](https://files.readme.io/9999dbe-Screenshot_2023-08-14_at_2.13.36_PM.png)

**Language**

You can add languages at org level and these languages can be added for all games set up for the org.

![7405e98 Screenshot 2023 08 14 at 2](https://files.readme.io/7405e98-Screenshot_2023-08-14_at_2.14.42_PM.png)

**APIs:**

There are 2 user facing APIs:

1. API to allocate games : Games need to be issued for the customer to play it
2. API to play the game

**DB:**

1. For each game, there will be a different gameID
2. Allowed\_play vs max\_play\_allowed : max\_play\_allowed is how many times a customer can play the game. Each allocation allows the user to play the game only once.\
   Allowed play is how many times a game is allocated to the customer.

**FAQs:**

1. Game is still running, but the rewards have been exhausted. What will happen in that case?

There can be multiple approaches here:

* You can remove the game item if it is consumed completely OR
* Disable the game and it will no longer be available to play OR
* Change the reward linked to the particular game item

2. Can you edit a game once it is live?

Yes, the game can be edited post it is live

3. Can the sum of winning probability be >100% as the UI allows to create it?

Yes, it can be more than 100%. Let's say there are 2 line items, with 50% and 70% winning probability. Gamification makes a big number out of it(Eg: 50\_500(25000), 70\_500(35000)) and get a random number between 1 and 60000(25000+35000=60000).\
For 1-25000, this is for Item1\
For 25001-60000, this for Item2

So there is no harm to keep winning probability more than 100%

4. Can you edit an expired game?

No, expired games can't be edited
