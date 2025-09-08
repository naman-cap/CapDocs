---
title: Building Blocks of a Journey
excerpt: >-
  Building blocks in a journey are the components used to create the journey.
  After the entry trigger, the building blocks define the journey of a
  customer.  Each building block has a  specific purpose in the journey.
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
The building blocks available to create a journey is classified into 3 sections:

1. Engagements
2. Flow control
3. Actions

# Adding a building block to the journey canvas

To add any building block to the canvas, drag and drop the desired block to the journey canvas.

## A/B testing block

A/B testing, also known as split testing, is a method in customer Journeys that helps to compare different content and engagement methods for specific segments of customers over a defined period. This allows you to gather valuable insights about which configurations perform better with the audience. Based on the results obtained, you can make informed decisions about which configuration to adopt for the remainder of the customer journey.

For information on configuring the A/B testing block, refer to the [detailed documentation on the A/B testing block](https://docs.capillarytech.com/docs/ab-testing_overview).

<Note title="Note">
The A/B testing block is a replacement for the engagement block. If you are running an A/B test, you don’t need to include another engagement block.
</Note>

## Engagement building block

The engagement block contains different types of channels that can be used to engage with your customers. A marketer can add an engagement block (of a particular channel) and configure the content in that block (specific to that channel) to reach out to users.

The various engagement blocks available are:

1. SMS
2. Email
3. M-push
4. WhatsApp
5. Zalo
6. Line
7. Viber

### Use Case

A brand wants to include customers whose transactional value is greater than $10,000 in the Journey and communicate the discounts that can be availed by these customers via SMS.

### Adding engagement block

To add an engagement block,

1. Click on the engagement block.
2. In the **Engagement name** text box, enter a name for the engagement block.
3. Click **Add creative**.
4. Select an existing template or create a new template. For information on creating templates, see [SMS Template](https://docs.capillarytech.com/docs/create-sms-template), [Email Template](https://docs.capillarytech.com/docs/create-email-template), [M-Push Template](https://docs.capillarytech.com/docs/create-mobile-push-template), [WhatsApp template](https://docs.capillarytech.com/docs/create-whatsapp-template), [ZALO template](https://docs.capillarytech.com/docs/create-zalo-template), [ Line template](https://docs.capillarytech.com/docs/create-line-template), and [Viber template](https://docs.capillarytech.com/docs/create-viber-template). You can use the Channel Priority block to send the communication message based on the availability of the customer's communication channel. For more information, refer to the [documentation on Channel Priority in Journey](https://docs.capillarytech.com/docs/channel-priority).
5. Add the information as required.
6. Click **Done**.
7. To add incentives along with the engagement message, click **+Add incentives** and add desired incentives. Currently offers, points, cart promotions, gift vouchers and badges are the Incentives supported in Journeys. For more information on how to add incentives, see [Add incentives](https://docs.capillarytech.com/docs/building-blocks-of-a-journey#incentives-in-engagement-messagecreate).
8. To remove or change incentives, click the three dots adjacent to the offers/points and click **Remove/Change`<Incentive name>`.**
9. To preview or remove the template added, click the three dots inside the template and click **Preview/Remove.**
10. In the **Delivery settings**, enter the delivery settings details. See [Delivery settings](https://docs.capillarytech.com/docs/delivery-settings).

![8277f2e Configuring creatives](https://files.readme.io/8277f2e-Configuring_creatives.gif)

## Incentives in engagement message

You can add incentives such as offer, points and cart promotion details along with the engagement messages. To add, perform the following:

1. Click on the engagement block.
2. Click **Add incentives**.
3. Select the desired option.

![6200d43 Add incentives](https://files.readme.io/6200d43-Add_incentives.png)

4. Click **Select/Done/Claim**.

![da69176 Add Incentive](https://files.readme.io/da69176-Add_Incentive.jpg)

5. Click **Done**.

The selected incentive is added to the engagement message. For information on creating any type of incentive, see  [Incentive management ](https://docs.capillarytech.com/docs/incentive-management).

## Flow control building block

Flow control helps you control the flow of the journey by applying conditions to user events or user preferences.

Marketers can define different conditions in a customer journey to guide users through different flows based on specific criteria such as time or event-based preferences. These conditions serve as additional decision points that determine whether the user will continue on the same path or be directed to a different flow.

The various flow control blocks available are:

1. Time-based wait
2. Event-based wait
3. Join
4. Decision split

## Time-based wait

The time-based wait is used by brands to engage customers at a particular time/date or after a specified period. This is preferred after analyzing user behaviour and targeting users at a crucial time to improve engagement.

This feature allows brands to target their customers at the right time to increase engagement and can avoid spamming the customer. This can increase click-through rates and would motivate the target customer to perform a desired behaviour.

### Use Cases

* A brand has analyzed that their customers have high activity rates mostly on the weekends and they want to send out communication messages during that period.
* Certain countries have rules that engagements with customers should go out on particular days of the week/date of the month and rates for some days of the week are lower than the other. This would allow brands to comply with government rules and also save engagement costs

### Configuring time-based wait

1. Drag and drop the **Wait** block on the journey canvas.
2. On the journey canvas, click **Time based wait**.
3. In the **Block name**, enter a name for the wait block.
4. Define the wait duration. Note: At present only, Wait for a duration is supported.
   1. **Wait for** - Enter the wait time in hours/ day/week/month/year.
   2. Then proceed from this block Immediately - From the drop-down, select when the customer should proceed to the next block. The available options are:
      1. **Immediately**
      2. **On a specific time** - Select the desired time
      3. **On the nearest day** - Select the desired day and time
      4. **On the nearest date** - Select the desired date and time

![3ad34a9 small 3](https://files.readme.io/3ad34a9-small-3.png)

![59498a5 small 4](https://files.readme.io/59498a5-small-4.png)

5. Once the wait block is added to the canvas, click on the delete icon to remove the block or click on the setting icon to edit the block.

<Note title="Note">
If a customer's wait time in v1 is 2 days, and they are moved to v2, the wait time will not reset. It will continue from the remaining duration.
</Note>

## Event-based wait

This feature allows brands to configure user journeys based on the behaviour of the customer. Brands can configure separate paths for customers based on an event-based wait time. The wait can be configured in two ways - wait since event and wait till event.

This allows brands to personalize journeys for users who perform a desired action and for new users that are yet to act. This also reduces the redundancy of messages and eliminates sending irrelevant messages to users.

### Use Cases

* The brand wants to give the customers a 10% off coupon if they make a purchase of 5000 within 30 days and if they do not make a purchase, the brand wants to share an upcoming offer message.
* The brand wants to give customers a 10% off coupon after they have completed 90 days since the last purchase date.

### Configuring event-based wait block

1. Drag and drop the **Event based wait** to the Journey canvas.
2. Click **Event based wait** in the canvas.
3. In the **Block name** text box, enter a name for the block.
4. From **How you want to specify the wait time?**, select the desired option.

   1. **Until a event**
   2. **Since a past event**
   3. **Based on entry trigger event**
   4. **Wait for engagement event**

   | Type                         | Description                                                                                                   |
   | :--------------------------- | :------------------------------------------------------------------------------------------------------------ |
   | Until a event                | customers will wait until they perform an event before proceeding to the next block                           |
   | since a past event           | customers will wait for a specific duration after performing an event before proceeding to the next block     |
   | Based on entry trigger event | Customers wait based on the date specified in the entry trigger event through which they entered the journey. |
   | Wait for engagement event    | customers will wait until they perform an engagement event before proceeding to the next block.               |
5. Choose how to specify the wait time

   1. **Wait till event**
      1. From the drop-down, select the type of event and define conditions to define the customer group.  Click +Add condition to add conditions. You can click +Add condition to add further conditions and combine them with the AND operator. Click Add group to add conditions and combine them with the OR operator.\
         ![](https://files.readme.io/8fe9117-small-5.png)
      2. Choose a timeframe for the customer to perform the action mentioned in the conditions. Time frames can include hours, days, weeks, months or years. If the customer doesn’t perform the desired action, they will move on to the next block after the time frame is over.\
         ![](https://files.readme.io/c771020-small-6.png)

   2. **Wait since event** - Add a time frame since the user acted. Time frames can include hours, days, weeks, months or years. Include actions such as - Registration date, Last purchase date and First purchase date to proceed from the block. The KPIs are directly calculated based on the user action specified.

      ![](https://files.readme.io/c5b7c52-small-7.png)

   3. **Based on entry trigger event** - Here, the journey's wait duration is tied to the event that initiated the customer's entry into the journey (e.g., the promotion issuance date, enrollment, or another trigger event). You can configure the wait time based on:
      1. Exact Date: Waits until a specific date. This is determined based on the user entry trigger event type. For example, if the user's entry is triggered by a transaction, you can set the date to the transaction date.
      2. Specific Time Before the Date: Allows you to set a waiting period before a defined date. For example, if the user's entry is triggered by a transaction, you can configure it to wait for 2 days, hours, weeks, or years before the transaction date.
      3. Specific Time After the Date: Allows you to set a waiting period after a defined date. The method of defining the date is similar to the option `Specific Time Before the Date`.\
         **Example:** If the entry trigger event is "Promotion Issued on December 20, 2024", and you configure the block to wait 4 days before a defined date, the system calculates when to resume the journey based on the trigger event plus the specific wait setting.
         **How This Can Be Used:**
         You can configure this to send reminders or other messages before a key date, like a challenge start date. For example:
      * Promotion Issued: December 20, 2024.
      * Promotion (Challanege) Start Date: December 25, 2024.
      * Wait Configuration: Wait until 2 days before the promotion/challenge start date (December 23, 2024) before sending a reminder message about the event. The customer receives a message on December 23, 2024, reminding them about the upcoming challenge.

![9d22567c7b98b29dec09f2b7f92c0a7a99863462f58bdfaf2093091c2cc27ede User entry based event based wait](https://files.readme.io/9d22567c7b98b29dec09f2b7f92c0a7a99863462f58bdfaf2093091c2cc27ede-User_entry_based_event_based_wait.gif)

  iv. **Wait for engagement event**: The **Wait for engagement** event block allows you to control the customer journey flow based on how users interact with messages either by opening a message or clicking a link. This enables you to personalize the customer experience by guiding users through different paths depending on whether they open or click a message.

You can use this block to:

* Track message opens
* Track clicks on specific or partial URLs

### Configure wait for engagement event

1. Select the **Engagement Block**: From the drop-down, choose the engagement block (e.g., SMS, Email, M-push, WhatsApp, Zalo, Line, Viber) you want to track. The list will display only those engagement blocks that exist before the current wait block in the journey path.

![bf1322bdf94d885d1e756bb0afa43e7483f0d6d174d2f22127772450871dd7c9 Screenshot 2025 06 30 at 11](https://files.readme.io/bf1322bdf94d885d1e756bb0afa43e7483f0d6d174d2f22127772450871dd7c9-Screenshot_2025-06-30_at_11.50.56_AM.png)

2. Select the **Event Type**:Once you've selected the engagement block, choose the type of engagement event you want to wait for. The wait block supports the following standard events:

* **Open Event**\
  Wait until the customer opens the message sent from the selected engagement block. If a user clicks a link, it’s also counted as an open.

![0a70ffde99789756c71e2f45f6ebbfa6126dbc468082d8e428b3296d669d16dd Screenshot 2025 06 30 at 11](https://files.readme.io/0a70ffde99789756c71e2f45f6ebbfa6126dbc468082d8e428b3296d669d16dd-Screenshot_2025-06-30_at_11.56.16_AM.png)

<Note title="Note">
An open is treated as a weaker signal of engagement compared to a click.
</Note>

* **Click Event**\
  Tracks when a customer clicks a link in the message. You can select from the following options:

  * **Exact link**: Select specific links from the engagement block to track. You can also choose to track all links within the message. The links displayed in the drop-down are those included in the message template of the selected engagement block.

![3133d36eb0ecacfeace7ac02d41e7af898d45c3275cb95171f35d8feab8e222c Screenshot 2025 06 30 at 11](https://files.readme.io/3133d36eb0ecacfeace7ac02d41e7af898d45c3275cb95171f35d8feab8e222c-Screenshot_2025-06-30_at_11.58.22_AM.png)

* **Link contains**: Enter a partial segment of the URL, such as a hostname, to track any links that contain the specified text. For example, entering `offers.brand.com` will track clicks on any link that includes this hostname. This match is based on the hostname, not the full URL.

![86db373ac8563e0988367ab86efb5bee314d1c3ee6d15ac11572d96916bc0c98 Screenshot 2025 06 30 at 12](https://files.readme.io/86db373ac8563e0988367ab86efb5bee314d1c3ee6d15ac11572d96916bc0c98-Screenshot_2025-06-30_at_12.04.32_PM.png)

<Note title="Note">
A click is considered a stronger signal of engagement than an open.
</Note>

3. Choose a timeframe for the customer to perform the action . Time frames can include hours, days, weeks, months or years. If the customer doesn’t perform the desired action, they will move on to the next block after the time frame is over.

![606f0f92e8bbd2bb63ce572e1fcb926225e1d37106e20f3f6feecade75656b0d Screenshot 2025 06 30 at 12](https://files.readme.io/606f0f92e8bbd2bb63ce572e1fcb926225e1d37106e20f3f6feecade75656b0d-Screenshot_2025-06-30_at_12.06.33_PM.png)

4. You can set multiple paths based on the engagement block. For example, in one path, a user selects Push notification(Mpush) and chooses **specific link** as the event type. In another path, Viber is selected with **open** as the event type. It can then differentiate which user followed which engagement path and what event type was chosen.

![48b6a89610bf984de944aa9958e3105fa9b75aa262018ba65186976084714d01 Screenshot 2025 06 30 at 12](https://files.readme.io/48b6a89610bf984de944aa9958e3105fa9b75aa262018ba65186976084714d01-Screenshot_2025-06-30_at_12.09.31_PM.png)

5. Use the arrows to change their order if needed.

![57a5b24321a3ce8fde2f9aec804b17c6821393d04ef46efa01c3374f94ac88a0 Gif 9](https://files.readme.io/57a5b24321a3ce8fde2f9aec804b17c6821393d04ef46efa01c3374f94ac88a0-Gif_9.gif)

6. Click **Done**.

<Note title="Note">
s
1. You can preview the selected events in the journey flow by hovering over the icon. For links with more than one, it will show the user about additional links (e.g., "three more links along with this links").

![784a9b8a97df56e9b086679cba207accd7658df165667899bd059f18a1bc0a66 Gif 8](https://files.readme.io/784a9b8a97df56e9b086679cba207accd7658df165667899bd059f18a1bc0a66-Gif_8.gif)

2. If there's a join block configured that leads into the path, engagement channels from the joined path will also be available for selection. Join block will only be available if you [configure decision split](https://docs.capillarytech.com/docs/building-blocks-of-a-journey#/decision-split) block.

![974d59ca10fd82873f476e5099141f9b3b1c9d895bb3935aba08fd53b8dd32a8 Screenshot 2025 07 01 at 12](https://files.readme.io/974d59ca10fd82873f476e5099141f9b3b1c9d895bb3935aba08fd53b8dd32a8-Screenshot_2025-07-01_at_12.26.08_PM.png)

3. If an engagement block (e.g., a Viber block) does not contain any links, you will not be able to set a click event for it, and a clear message will be displayed.

![42cdb811ced1d53f3d042ed8650d7d8b27c6e6f43b03c1aad1be7cb38e47e3bf Screenshot 2025 06 30 at 3](https://files.readme.io/42cdb811ced1d53f3d042ed8650d7d8b27c6e6f43b03c1aad1be7cb38e47e3bf-Screenshot_2025-06-30_at_3.02.46_PM.png)

4. If a combination of block and event (e.g., Viber and open) is already configured for a path, you cannot use the same combination again for the same block.
</Note>

## Join

This feature is used to connect multiple paths within a journey onto a single common path. It reduces the time and effort of the brand to configure similar paths within a single journey. This feature saves the time of the marketer by disabling the hassle of creating multiple journeys/paths to send customers on a common path. It also maintains continuity and familiarity of engagements sent to customers

### Use Cases

Brands want to nudge their customers to purchase their seasonal collections. They share an SMS as well as a coupon code with the customer. They want to wait for 10 days for the user to act and if not performed, they want to re-send the message to customers.

### Configuring a join block

1. Drag and drop the **Join** block on the journey canvas. Whenever a user reaches this block, they will be redirected to a common path as configured.
2. Click on the **Join** block in the canvas.
3. In the **Block name** text box, enter a name for the block.
4. From the Join the end before drop-down, select the block the customer should join. A list of block names previously configured within the journey is displayed in the drop-down as either *engagement* or *flow control* depending on the components included. You can use the search button to search the block names.

![e17c5be small 8](https://files.readme.io/e17c5be-small-8.png)

5. Click  **Done** to finish configuring the block. Post configuration, you can view where the join block merges the journey.

![95a1ef7 small 9](https://files.readme.io/95a1ef7-small-9.png)

6. Once the wait block is added to the canvas, click on the delete icon to remove the block or click on the setting icon to edit the block

## Decision Split

This feature helps brands to define different paths for multiple kinds of users. Brands can define multiple criteria and the customers will move in a path as per the criteria they fit in. This enables brands to target customers based on their past purchases and behavioural patterns which leads to extremely personalized journeys for users. It allows brands to create multiple paths for customers matching various criteria and to send out relevant engagement messages and nudges

### Use Cases

1. Incentive customers based on their previous behaviour which will result in an increase in coupon redemption and increase transaction frequency. Brands will be able to send relevant messages to users based on their behavioural patterns and can increase personalisation.
2. Incentivise customers on special days such as birthdays/anniversaries to make them feel special and increase loyalty towards the brand.
3. Send customers wishes and offers based on the festivals celebrated in their respective regions. This will increase personalisation.

## Configuring a decision split block

1. Drag and drop the Decision Split block on the journey canvas. Whenever a user reaches this block, they will be directed on the path according to which condition they match

2. Click on the **Decision spli**t block in the canvas.

3. In the **Block name** text box, enter a name for the block.

4. Configure the loyalty status and add filter conditions.
   1. Within loyalty status, choose the category of customers you want to select.\
      ![](https://files.readme.io/449a7be-small-10.png)
   2. Click **+Add condition** to add conditions and further refine the customer group. You can click **+Add condition** to add further conditions and combine them with the AND operator. Click Add group to add conditions and combine them with the OR operator.\
      ![](https://files.readme.io/08cb5d0-small-11.png)
   3. Along with multiple conditions, brands can also define multiple paths within the same block.
   4. Once a filter is selected within a condition, further define which group of customers will be included in the condition. This is populated based on the filter chosen.\
      ![](https://files.readme.io/f638771-small-12.png)

5. Once the conditions have been configured, click **Done**. The journey will get divided into two paths- for customers who satisfy the condition within the decision split block and for customers who do not.

![](https://files.readme.io/2917670-small-13.png)

6. Further blocks can be added within the separate paths of the decision blocks. Once the wait block is added to the canvas, click on the **delete icon** to remove the block or click on the **setting icon** to edit the block.

# Action building block

## Jump

The jump functionality allows brands to connect multiple journeys. Some of the salient features of JUmp block are:

* Allows marketing team to simplify their journey-designing process
* Eliminates the redundancy of creating the same flows within multiple journeys by allowing users to jump from one journey to another if they meet certain conditions.
* Through personalized journeys, you can ensure customer retention and satisfaction.
* Avoids the complications of creating a complex journey in a single flow and thus simplifies creating hyper-personalized journeys.
* Avoids monotony creating similar flows within each journey separately and saves time.

### Use Cases

Assume that a brand wants to give customers who spend more than 1000 rs in their store 500 bonus points and certain other incentives. If a customer spends more than 5000$ in Journey A, they will jump to Journey B (elite customers) which includes customers that have a free membership + incentives. The brand can include a Jump activity within their journey A that caters to the value of a transaction.

### Configuring a jump block

1. Drag and drop the **Jump** block to end of the path on the journey canvas. Whenever a user reaches this block, they will be directed to a different journey as per the configuration in the Jump block.
2. Click on the **Jump** block in the canvas.
3. In the **Block name** text box, enter a name for the block.
4. From the drop-down, select the desired existing journey. You can also use the search box and search for a particular journey.  You can click on the info icon and  view the summary of the selected journey
5. Click **Done**

![d026eda small 14](https://files.readme.io/d026eda-small-14.png)

6. To view a summary of the added journey, click on the info icon below the Jump block. The summary block displays the entry trigger and duration of the journey.

![b7087bd small 15](https://files.readme.io/b7087bd-small-15.png)

7. Once the wait block is added to the canvas, click on the delete icon to remove the block or click on the setting icon to edit the block.

## Issue incentive without sending communication

> ❗️ Attention
>
> By deafult, this block is not available for all orgs. Contact your CSR for enabling this block.

The Incentives block allows you to reward customers during their journey without sending a communication. This can be used by brands which run multiple offers and incentives not to spam their customers with numerous notifications.

To issue incentives without sending a communication, perform the following while configuring the journey:

1. Drag and drop the Incentives block to the Journey.
2. Click on the Incentives block.
3. In the Incentive configuration page, enter a name for the Incentive.
4. Add the desired incentive and select **Done**. You can add only one incentive for an **Issue Incentives** block. An error message will be displayed if the attached incentive is already claimed. In addition, claims such as cart promotion are claimed after the Journey is approved and not while sent for approval.

You can edit or remove the configured incentive while editing the Journey. The configured incentives will be displayed when previewing the Journey.

![5af24c8 NoCommIncentives](https://files.readme.io/5af24c8-NoCommIncentives.gif)