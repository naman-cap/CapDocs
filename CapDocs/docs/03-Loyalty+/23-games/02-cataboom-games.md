---
title: CataBoom games
excerpt: This page provides you with information on configuring games on CataBoom.
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
CataBoom provides a powerful platform to create engaging, effective gamification experiences that help businesses achieve their goals.\
The below video gives you an overview of the Games feature and how it works.

<Embed url="http://www.youtube.com/watch?v=XVqVOMFpr-8" title="Games Demo" image="https://i.ytimg.com/vi/XVqVOMFpr-8/hqdefault.jpg" provider="youtube.com" href="http://www.youtube.com/watch?v=XVqVOMFpr-8" typeOfEmbed="youtube" html="%3Ciframe%20class%3D%22embedly-embed%22%20src%3D%22%2F%2Fcdn.embedly.com%2Fwidgets%2Fmedia.html%3Fsrc%3Dhttps%253A%252F%252Fwww.youtube.com%252Fembed%252FXVqVOMFpr-8%253Ffeature%253Doembed%26display_name%3DYouTube%26url%3Dhttps%253A%252F%252Fwww.youtube.com%252Fwatch%253Fv%253DXVqVOMFpr-8%26image%3Dhttps%253A%252F%252Fi.ytimg.com%252Fvi%252FXVqVOMFpr-8%252Fhqdefault.jpg%26key%3D02466f963b9b4bb8845a05b53d3235d7%26type%3Dtext%252Fhtml%26schema%3Dyoutube%22%20width%3D%22854%22%20height%3D%22480%22%20scrolling%3D%22no%22%20title%3D%22YouTube%20embed%22%20frameborder%3D%220%22%20allow%3D%22autoplay%3B%20fullscreen%3B%20encrypted-media%3B%20picture-in-picture%3B%22%20allowfullscreen%3D%22true%22%3E%3C%2Fiframe%3E" />

# Sample use cases:

1. Lifestyle & Fashion Retail - Provide experience-led loyalty
   1. Offer customers rewards for achieving different levels within a game. For example, customers who reach Level 5 in a game can receive a 10% discount on their next purchase.
   2. Create a game where customers spin a wheel for a chance to win rewards such as discounts, free products, or loyalty points.
   3. Offer customers a virtual scratch card game, where they reveal a hidden message or image that offers them a discount or reward such as free shipping or a percentage off on their next purchase.
2. Supermarkets  and Grocery Chains - Drive traffic & reward habits
   1. Offer customers a trivia game where they have to answer questions related to products available in the store. Correct answers can earn them bonus points or discounts on specific products.
   2. Offer customers QR code scavenger hunt, where they have to scan QR codes scattered throughout the store to earn points.
   3. Offer customers a puzzle challenge game, where they have to solve a puzzle related to the store, products or brands. Successful completion can earn them bonus points or discounts on specific products.
3. Fuel Retail - Cross-sell & increase wallet share
   1. Allow customers to earn rewards and discounts on fuel purchases by playing games in your loyalty program. For example, customers who play a certain game can earn a 10% discount on their next fuel purchase.
   2. Use games to encourage customers to participate in prize draws. For example, customers who complete a game can be entered into a draw for a free tank of gas.
   3. Allow customers to play games for the chance to win instant rewards, such as a free car wash or a discount on their next fuel purchase. This can be a great way to keep customers engaged and coming back to your fuel stations.

For more use cases and case studies refer to the [Cataboom Case Studies](https://docs.google.com/presentation/d/192-BFlGPcgnTZX8brqXnWqL_I4cwtmR3/edit#slide=id.p1) documentation.

# Creating games on CataBoom

Cataboom's easy-to-use platform allows you to create gamification experiences with a variety of games and challenges. You can choose from a wide range of games such as quizzes, surveys, polls, scratch-off, spin the wheel, trivia, and more. Each game or challenge can be customized to match your brand's look and feel, and you can also set goals and rewards for players.

![308d1b2 Screenshot 2023 08 14 at 4](https://files.readme.io/308d1b2-Screenshot_2023-08-14_at_4.35.06_PM.png)

For information on creating games on the CataBoom platform, refer to the [CataBoom Platform Training Guide](https://drive.google.com/file/d/1lN5J6TQzhUFtFxGTI-Eq191ouq4X0XwN/view).

# Analyzing player behaviour and performance

Cataboom offers valuable insights into player behaviour and performance. You can observe the number of participating players, the rewards they are earning, and how they are engaging with your gamification experiences. This information can be utilized to optimize your gamification experiences and enhance player engagement. 

To export the list of winners or any associated play data, navigate to the Activity tab, then click on the required CSV file. This action will download a report with all play data.

![0534335 image5](https://files.readme.io/0534335-image5.png)

For information on the games activity data report, you can refer to this [Sample Activity Data](https://docs.google.com/spreadsheets/d/1LPv_O1tX4zNhxIpr62xvOlAyhFK-xAVhm0rYufEUTLI/edit#gid=0) of a game on the Cataboom platform.

# Setting up rewards and incentives

On the Capillary loyalty platform, you can create a variety of rewards, such as points and coupons. These rewards are redeemable for real-world prizes or virtual items. Incentives can be set up to encourage players to participate and reach specific goals. This can be achieved using behavioural events in Loyalty.

Brands can set up the game and encourage customers to play it using any of the following methods:

* Scanning the QR code 
* Sending an email containing the game URL
* Playing the game within the app

To configure a game and reward the customer, follow these steps:

1. Set up the games on the Cataboom platform.
2. Configure behavioural event in Loyalty and link it to the eventname on Cataboom.  For information on configuring behavioural events, refer to the [Behavioural event documentation](https://docs.capillarytech.com/docs/behavioral-loyalty).
3. Configure a writeback URL in Cataboom to automatically trigger the configured behavioural event whenever a customer plays a game.
4. Record the relevant data generated during gameplay and use webhooks to transmit this data to the Capillary platform.
5. Set Up Rules and Targets in Loyalty Events. Perform the following:
   1. Navigate to Loyalty events.
   2. Locate the configured behavioural event.
   3. Set up rules and targets for specific customers
   4. Upon meeting the specified criteria, customers will automatically receive their rewards (points, coupons, gift vouchers, etc.) in the Loyalty program.

## Tracking the behavioural events:

You can see the history of Behavioral Events data of the customer on Membercare. For more information, refer to the [Member Care documentation](https://docs.capillarytech.com/docs/view-event_details#behavioral-events).

# Configuring games on CataBoom

Perform  the following to configure games on CataBoom:

1. Sign into the CataBoom account.

![afa1c38 image14](https://files.readme.io/afa1c38-image14.png)

2. Navigate to **Home Page > Manage Users and Campaigns**.
3. If required, click **Manage Users**and update the roles for the members in the account.

![5963d8c image8](https://files.readme.io/5963d8c-image8.png)

4. Click **Campaigns** to create new games.  You can also search for existing games.

![5b049e2 image1](https://files.readme.io/5b049e2-image1.png)

5. In the **Campaign Name** field, enter name for the Campaign. URL will be automatically added once you enter the name
6. From the **Game Category** drop-down, select the category of the game and the type of game.

![18c6ef9 image6](https://files.readme.io/18c6ef9-image6.png)

7. Click **Create**.\
   The campaign is created.
8. Configure the game as required.

![1771f22 image9](https://files.readme.io/1771f22-image9.png)

![bbad9db image13](https://files.readme.io/bbad9db-image13.png)

![c4f0551 image11](https://files.readme.io/c4f0551-image11.png)

![b6109cc image10](https://files.readme.io/b6109cc-image10.png)

![7b5c9db image12](https://files.readme.io/7b5c9db-image12.png)

Once you click on the game URL, the following screens will appear based on the configuration:\*\*

Optional screen:

![d5d0855 image2](https://files.readme.io/d5d0855-image2.png)

Game screens

![7e83b10 image15](https://files.readme.io/7e83b10-image15.png)

![9e34b6f image4](https://files.readme.io/9e34b6f-image4.png)

Fulfillment form to share the rewards

![26ea31a image7](https://files.readme.io/26ea31a-image7.png)

![2ba12a9 image16](https://files.readme.io/2ba12a9-image16.png)

# FAQ:

1. How to get access to the Cataboom platform?

Brands will get access to the platform once they sign up the contract with Capillary to integrate the games.

2. How does the pricing work?

For the license to access Cataboom platform and over 200 different games, Cataboom needs to understand the number of members and active members.  They would like to know the number of countries now and where the brand will be by the end of the year.  Also, how many game experiences per person the brand anticipates.  For example, Todd would only have one “campaign/game” to play at any given moment.\
Cataboom will be able to give the full pricing picture after that. Required information:

* Expected player base with certain growth projections
* Number of games the brand would want to implement

3. How does the integration take place and how much time it requires?

Webhook URL / behavioral events integration with middle layer. 3-4 mandays of effort. Coupon issual is at our end. So far, our integration supports lead capture (acquisition campaign) and customer retention activities and issue of coupons from our end.

4. How are the games integrated on the mobile app?

Cataboom \<-> App: web link URL, via iFrame for mobile app

5. What is the lead time to launch a game?

4-5 days, Majority of the time is spent on designing the artwork of games.

6. Who will create the gamification artwork for brands?

Brand itself or the CSMs

7. How will the customization of games happen?

For advanced game setups - Cataboom will map a dedicated POC and generally the SLA here will depend on the requirement

8. What are the reports generated from the data generated from game plays and where is the reporting available, on Cataboom platform or on Capillary platform?

* You can get some basic numbers - Number of Plays, Unique plays from Cataboom
* Points allocated for the corresponding promotion can be extracted from Insights+
* Brand gets all the promotion data from capillary as a part of daily feed.

9. What is the measurement of success for gamification?

Key KPI is engagement. This means the number of customers who played the game, how many times they played the game. If the game is tied to any objective such as acquisition, re-activation, cross-sell etc. the brand can see if the campaign impacted those KPIs.

10. How will the production  bugs be taken care of?

* These will be raised directly to [support@cataboom.com](mailto:support@cataboom.com)
* Cataboom will share the governance doc and escalation matrix

11. Can the marvel rewards be issued when a customer wins the game?

Brands can issue 100% off coupons and customers can use those coupons to get the free products.

12. Can games be issued to a particular segment of customers? For example, only top tier customers will see the game on the app and no other person will see the game.

Issuance of games to specific customers is not possible today, this will be an enhancement at Capillary’s end and will be available after 2 quarters.\
But, the brands can use the metadata related to their customers to match the metadata at cataboom’s end and show the games only to customers where this metadata matches.

13. Can one behavioral event be used for setting up multiple games if the attributes are same? 

At different times yes, not at the same time. But now you can set up multiple behavioral events and link them to the promotions.

13. Is middle layer setup required every time a new game is set up as the event\_name will be changed with each game or will it be the same in every game?

Now with the new enhancement in behavioral events, middle layer is not required.

# Sample Games

* Catch the shoes and win: [https://secure.cataboom.com/direct/test-burrow-game](https://secure.cataboom.com/direct/test-burrow-game)
* Scratch and win: [https://secure.cataboom.com/direct/test-scratchandwin](https://secure.cataboom.com/direct/test-scratchandwin) 
* Spin the wheel: [https://secure.cataboom.com/direct/test-spinthewheel](https://secure.cataboom.com/direct/test-spinthewheel) 
* Catch the planes Belavia Game: [https://secure.cataboom.com/direct/airline](https://secure.cataboom.com/direct/airline) 
* Quick play: [https://secure.cataboom.com/direct/test-quick-play](https://secure.cataboom.com/direct/test-quick-play)
