---
title: Action Building Block
deprecated: false
hidden: false
metadata:
  robots: index
---
# Jump

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