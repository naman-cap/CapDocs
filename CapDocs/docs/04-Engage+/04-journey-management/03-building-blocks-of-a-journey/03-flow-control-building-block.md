---
title: Flow Control Building Block
deprecated: false
hidden: false
metadata:
  robots: index
---
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

| Type                         | Description                                                                                       |
| :--------------------------- | :------------------------------------------------------------------------------------------------ |
| Until an event               | Wait until users perform a specific event before moving to the next block.                        |
| Since a past event           | Wait for a defined duration after users perform a specific event before moving to the next block. |
| Based on entry trigger event | Wait until the date specified in the entry trigger event through which users entered the journey. |
| Wait for engagement event    | Wait until users interact with a message (e.g., open or click) before moving to the next block.   |

<br />

### Until a event

1. From the **Who have performed the event** drop-down, select the type of event (Transactional/Behavioural) and define conditions to define the customer group.  Click +Add condition to add conditions. You can click +Add condition to add further conditions and combine them with the AND operator. Click Add group to add conditions and combine them with the OR operator.\
   ![](https://files.readme.io/8fe9117-small-5.png)
2. Choose a timeframe for the customer to perform the action mentioned in the conditions. Time frames can include hours, days, weeks, months or years. If the customer doesn’t perform the desired action, they will move on to the next block after the time frame is over.\
   ![](https://files.readme.io/c771020-small-6.png)

### Since a past event

Add a time frame since the user acted. Time frames can include hours, days, weeks, months or years. Include actions such as - Registration date, Last purchase date and First purchase date to proceed from the block. The KPIs are directly calculated based on the user action specified.

![c5b7c52 small 7](https://files.readme.io/c5b7c52-small-7.png)

### Based on entry trigger event

Here, the journey's wait duration is tied to the event that initiated the customer's entry into the journey (e.g., the promotion issuance date, enrollment, or another trigger event). You can configure the wait time based on:

1. **Exact Date:** Waits until a specific date. This is determined based on the user entry trigger event type. For example, if the user's entry is triggered by a transaction, you can set the date to the transaction date.
2. **Specific Time Before the Date:** Allows you to set a waiting period before a defined date. For example, if the user's entry is triggered by a transaction, you can configure it to wait for 2 days, hours, weeks, or years before the transaction date.
3. \*\*Specific Time After the Date: \*\*Allows you to set a waiting period after a defined date. The method of defining the date is similar to the option `Specific Time Before the Date`.\
   **Example:** If the entry trigger event is "Promotion Issued on December 20, 2024", and you configure the block to wait 4 days before a defined date, the system calculates when to resume the journey based on the trigger event plus the specific wait setting.
   **How This Can Be Used:**
   You can configure this to send reminders or other messages before a key date, like a challenge start date. For example:

* **Promotion Issued:** December 20, 2024.
* **Promotion (Challenge) Start Date:** December 25, 2024.
* **Wait Configuration:** Wait until 2 days before the promotion/challenge start date (December 23, 2024) before sending a reminder message about the event. The customer receives a message on December 23, 2024, reminding them about the upcoming challenge.

![9d22567c7b98b29dec09f2b7f92c0a7a99863462f58bdfaf2093091c2cc27ede User entry based event based wait](https://files.readme.io/9d22567c7b98b29dec09f2b7f92c0a7a99863462f58bdfaf2093091c2cc27ede-User_entry_based_event_based_wait.gif)

### Wait for engagement event

The **Wait for engagement** event block allows you to control the customer journey flow based on how users interact with messages either by opening a message or clicking a link. This enables you to personalize the customer experience by guiding users through different paths depending on whether they open or click a message.

You can use this block to:

* Track when a user opens a message
* Track when a user clicks on specific or partial URLs. A partial URL refers to a portion of a full URL, rather than the complete address. Ex: */products/electronics*.

#### Configure *wait for engagement* event

1. From the **Select Engagement Block** drop-down, choose the engagement block (e.g., SMS, Email, M-push, WhatsApp, Zalo, Line, Viber) you want to track. The list will display only those engagement blocks that exist before the current wait block in the journey path. For example, if you configured an SMS and Email block before this wait block, SMS and Email engagement channels appears in the drop-down.

![bf1322bdf94d885d1e756bb0afa43e7483f0d6d174d2f22127772450871dd7c9 Screenshot 2025 06 30 at 11](https://files.readme.io/bf1322bdf94d885d1e756bb0afa43e7483f0d6d174d2f22127772450871dd7c9-Screenshot_2025-06-30_at_11.50.56_AM.png)

2. From **Select engagement event** drop-down, select the event:
   1. **Open Event** - Wait until the customer opens the message sent from the selected engagement block. If a user clicks a link, it’s also counted as an open.

      ![0a70ffde99789756c71e2f45f6ebbfa6126dbc468082d8e428b3296d669d16dd Screenshot 2025 06 30 at 11](https://files.readme.io/0a70ffde99789756c71e2f45f6ebbfa6126dbc468082d8e428b3296d669d16dd-Screenshot_2025-06-30_at_11.56.16_AM.png)

      <br />
   2. **Click Event** - Tracks when a customer clicks a link in the message. You can select from the following options:
      1. **Exact link**: Select specific links from the engagement block to track. You can also choose to track all links within the message. The links displayed in the drop-down are those included in the message template of the selected engagement block.

         ![3133d36eb0ecacfeace7ac02d41e7af898d45c3275cb95171f35d8feab8e222c Screenshot 2025 06 30 at 11](https://files.readme.io/3133d36eb0ecacfeace7ac02d41e7af898d45c3275cb95171f35d8feab8e222c-Screenshot_2025-06-30_at_11.58.22_AM.png)

         <br />
      2. **Link contains**: Enter a partial segment of the URL, such as a hostname, to track any links that contain the specified text. For example, entering `offers.brand.com` will track clicks on any link that includes this hostname. This match is based on the hostname, not the full URL.

![86db373ac8563e0988367ab86efb5bee314d1c3ee6d15ac11572d96916bc0c98 Screenshot 2025 06 30 at 12](https://files.readme.io/86db373ac8563e0988367ab86efb5bee314d1c3ee6d15ac11572d96916bc0c98-Screenshot_2025-06-30_at_12.04.32_PM.png)

<Note title="Note">
A \_click \_event is considered a stronger signal of engagement than an *open* event.
</Note>

3. Choose a timeframe for the customer to perform the action . Time frames can include hours, days, weeks, months or years. If the customer doesn’t perform the desired action, they will move on to the next block after the time frame is over.

![606f0f92e8bbd2bb63ce572e1fcb926225e1d37106e20f3f6feecade75656b0d Screenshot 2025 06 30 at 12](https://files.readme.io/606f0f92e8bbd2bb63ce572e1fcb926225e1d37106e20f3f6feecade75656b0d-Screenshot_2025-06-30_at_12.06.33_PM.png)

4. You can set multiple paths based on the engagement block.

   For example:

   * Path 1: M-Push + **specific link** click
   * Path 2: Viber + **open**

It can then differentiate which user followed which engagement path and what event type was chosen. Use the arrows to change their order if needed.

![57a5b24321a3ce8fde2f9aec804b17c6821393d04ef46efa01c3374f94ac88a0 Gif 9](https://files.readme.io/57a5b24321a3ce8fde2f9aec804b17c6821393d04ef46efa01c3374f94ac88a0-Gif_9.gif)

6. Click **Done**.

<Note title="Note">
s
* You can preview the selected events in the journey flow by hovering over the icon. For links with more than one, it will show the user about additional links (e.g., "three more links along with this links").

![784a9b8a97df56e9b086679cba207accd7658df165667899bd059f18a1bc0a66 Gif 8](https://files.readme.io/784a9b8a97df56e9b086679cba207accd7658df165667899bd059f18a1bc0a66-Gif_8.gif)

* If a [Decision Split block](https://docs.capillarytech.com/docs/building-blocks-of-a-journey#/decision-split) is used to configure a join block, engagement channels from the joined path will also be available for selection.

![974d59ca10fd82873f476e5099141f9b3b1c9d895bb3935aba08fd53b8dd32a8 Screenshot 2025 07 01 at 12](https://files.readme.io/974d59ca10fd82873f476e5099141f9b3b1c9d895bb3935aba08fd53b8dd32a8-Screenshot_2025-07-01_at_12.26.08_PM.png)

* If the selected engagement block (e.g., a Viber message) does not contain any links, the click event option will not be available, and a message will inform you accordingly.

![42cdb811ced1d53f3d042ed8650d7d8b27c6e6f43b03c1aad1be7cb38e47e3bf Screenshot 2025 06 30 at 3](https://files.readme.io/42cdb811ced1d53f3d042ed8650d7d8b27c6e6f43b03c1aad1be7cb38e47e3bf-Screenshot_2025-06-30_at_3.02.46_PM.png)

* If a particular combination of engagement block and event (e.g., Viber + open) is already used in a path, it cannot be selected again for the same block within the same journey.
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