---
title: Schedule Message
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
Set a message delivery schedule. The message will be delivered based on the selected schedule.\
The schedule is a message delivery time frame. The schedule also includes repetitive and periodic delivery of campaign messages.

> ❗️ Notes
>
> * You can schedule a message only within the campaign period.
> * Messages will not deliver between 9:00 pm to 9:00 am. Any message scheduled within this period will be sent post 9:00 am.

# Message scheduling options

So, to schedule any message we have three options-

1. Immediately after approval
2. On a specific date
3. Repeats periodically

## Immediately after approval

The message will be immediately delivered after its approval.

![ba764eb7930c4f6e045eac57fdd2ff2d3f6cd926753122b5682a94acac1dcae6 Screenshot 2025 05 23 at 7](https://files.readme.io/ba764eb7930c4f6e045eac57fdd2ff2d3f6cd926753122b5682a94acac1dcae6-Screenshot_2025-05-23_at_7.40.08_PM.png)

<Note title="Note">
For campaigns scheduled Immediately After Approval or On a Specific Date, the system uses the current audience list at the time of scheduling. To ensure the most updated audience, manually refresh the list in Audience Manager before finalizing the message.
</Note>

## On a specific date

The message will be delivered only on the selected date and time.Select a specific date and time, and then click Done.

![1b7a8b648707865d84df0003554d9e9846b36fadb84682e49186169ed3f639b4 Screenshot 2025 05 23 at 7](https://files.readme.io/1b7a8b648707865d84df0003554d9e9846b36fadb84682e49186169ed3f639b4-Screenshot_2025-05-23_at_7.48.38_PM.png)

![080d7c5316b52e4d44ab354944f374206430412a4d529afbc3444f45b47c87ce Screenshot 2025 05 23 at 7](https://files.readme.io/080d7c5316b52e4d44ab354944f374206430412a4d529afbc3444f45b47c87ce-Screenshot_2025-05-23_at_7.47.16_PM.png)

Let's say there is a set of customers who prefers to respond in the evening and based on that we can create various time slots and can send communication to them according to that time slot.

So by implementing **Time personalization** in our campaign we can target our customers in the time slots when they are most likely to respond.

### Steps to use time personalization

1. After selecting a specific date, **toggle on** the Time Personalization option. Messages will be delivered when each customer is most likely to engage.

![9bfce287aee5cd0328d349c8424241408b8d59eb4f31cae582ac0af428a7ef18 Screenshot 2025 05 23 at 7](https://files.readme.io/9bfce287aee5cd0328d349c8424241408b8d59eb4f31cae582ac0af428a7ef18-Screenshot_2025-05-23_at_7.54.51_PM.png)

2. You can set the no. of days up to 7 from that message's approval date.
3. After setting this, send it for approval.

<Note title="Note">
For campaigns scheduled Immediately After Approval or On a Specific Date, the system uses the current audience list at the time of scheduling. To ensure the most updated audience, manually refresh the list in Audience Manager before finalizing the message.
</Note>

## Repeats periodically

The message will be delivered at a repeated frequency within the campaign duration. Select a repeat frequency from the available options, enable audience sync confirmation if required and then click Done.

![22e4195069b5eb62fe0b4bc0ac6abb6b7fc22cd3abbe675b1d59ff01c3e4ad46 Screenshot 2025 05 23 at 8](https://files.readme.io/22e4195069b5eb62fe0b4bc0ac6abb6b7fc22cd3abbe675b1d59ff01c3e4ad46-Screenshot_2025-05-23_at_8.00.17_PM.png)

<Note title="Note">
Currently, for the recurring campaigns, the audience list (filter-based) attached will be refreshed at the time of campaign execution.
</Note>

* **Every day**: Select a message delivery time. The message will be delivered every day at the same time within the campaign duration. You can also set the repeat frequency calendar timeline. Select a start date and an end date for it.

![28e0c7c 6gVHdyWjAnSeieP jWuxzgifyTIRfRU37g](https://files.readme.io/28e0c7c-6gVHdyWjAnSeieP-jWuxzgifyTIRfRU37g.png)

* **Every week**: Select a day of the week and time for message delivery. The message will be delivered on a particular day of the weekday and at a particular time within the campaign duration. You can also set the repeat frequency calendar timeline. Select a start date and an end date for it.

![c19ab0c MUDeR3AbNcxn8QXpQyNctuHNkGIJHXYbGA](https://files.readme.io/c19ab0c-MUDeR3AbNcxn8QXpQyNctuHNkGIJHXYbGA.png)

* **Every month**: Select a date and time for message delivery. The message will be delivered on a particular date of the month and at a particular time within the campaign duration. You can also set the repeat frequency calendar timeline. Select a start date and an end date for it.

![ae80680 PlMTGyCMKzmWH5rFeprfIL1z6 n71bR64A](https://files.readme.io/ae80680-PlMTGyCMKzmWH5rFeprfIL1z6-n71bR64A.png)

* **Custom:** Select a date and time for message delivery. The message will be delivered on a specific date of the month and at a particular time within the campaign duration. You can also set the repeat frequency calendar timeline. Select a start date and an end date for it.

![d775f9d gzexGe6LvUJD9UKJzORTdRD eNoVieJp Q](https://files.readme.io/d775f9d-gzexGe6LvUJD9UKJzORTdRD_eNoVieJp-Q.png)

## Message throttle settings

The message throttle settings allow you to control the rate at which messages are sent to a large audience. For example, if the audience size is 4,000 members, you can send the emails first to 2,500 people, and then send the rest later.

Key features:

* Helps avoid delivery overloads and improves message performance.
* Controls the delivery timing and specifies the number of messages to be sent within a defined time period.

This setting is applicable only

* When the selected audience size is at least 3,000 customers.
* When the campaign is immediate or scheduled one-time campaigns. The settings is not available for recurring campaigns (e.g., repeat periodically).

To configure message throttle settings, follow these steps:

1. **[Create a campaign](https://docs.capillarytech.com/docs/create-campaign#/)** or open an existing one and navigate to the **[Message Configuration](https://docs.capillarytech.com/docs/create-message#/)** step.

![94a0702e0b62ea113092b0bbedd0f67eb17a4827d74d133af7653bd69ac66dfc Screenshot 2025 07 21 at 4](https://files.readme.io/94a0702e0b62ea113092b0bbedd0f67eb17a4827d74d133af7653bd69ac66dfc-Screenshot_2025-07-21_at_4.00.49_PM.png)

2. Select the [Audience](https://docs.capillarytech.com/docs/create-audience-group#/). Choose a segment with at least 3,000 customers.

![865fdf6bd535d131eca742e6d942d0c0aa9459939e074c49327d7eef56f86076 Screenshot 2025 07 21 at 4](https://files.readme.io/865fdf6bd535d131eca742e6d942d0c0aa9459939e074c49327d7eef56f86076-Screenshot_2025-07-21_at_4.51.17_PM.png)

3. Click **Add Creative** and select the [engagement channel](https://docs.capillarytech.com/docs/engagement-channels#/).

![8674a45155caa73612ff6cf24e9a993dabf5ba7e9860c323b0fb7ef61171b9ed Screenshot 2025 07 21 at 4](https://files.readme.io/8674a45155caa73612ff6cf24e9a993dabf5ba7e9860c323b0fb7ef61171b9ed-Screenshot_2025-07-21_at_4.53.13_PM.png)

4. Set the Schedule as either **[Immediate after approval](https://docs.capillarytech.com/docs/schedule-message#/immediately-after-approval)** or **[On a specific date](https://docs.capillarytech.com/docs/schedule-message#/on-a-specific-date)**.

![a85004610d79cab8bd5e988b130c9b2a5e3ea28ea314e8bc8879145bde163501 Screenshot 2025 07 21 at 4](https://files.readme.io/a85004610d79cab8bd5e988b130c9b2a5e3ea28ea314e8bc8879145bde163501-Screenshot_2025-07-21_at_4.54.40_PM.png)

5. In the **Message Throttle Settings** section, click **Hourly Message Limit** and enter a value between 3,000–30,000. If you enter a value below 3,000, a validation message appears.

![fd2427701c960ccb1132b9ccf6bdba5f5499213c9a3a731e8a585bb83305ea2a Screenshot 2025 07 21 at 4](https://files.readme.io/fd2427701c960ccb1132b9ccf6bdba5f5499213c9a3a731e8a585bb83305ea2a-Screenshot_2025-07-21_at_4.57.04_PM.png)

6. Set the **Start Time** and **End Time** for message delivery.

![5b2a0863fa008fc44ec40fd0bdc4246ffb5c8dc48e9697123df6b3cbacdfcf9c Screenshot 2025 07 21 at 4](https://files.readme.io/5b2a0863fa008fc44ec40fd0bdc4246ffb5c8dc48e9697123df6b3cbacdfcf9c-Screenshot_2025-07-21_at_4.58.29_PM.png)

7. Configure the [Sender Details](https://docs.capillarytech.com/docs/engagement-channels#/) based on the selected channel.

![bbe0a74c0fbd0c14c2ad58d8f0e236bd7be45355fe347e2aafde3faa66155964 Screenshot 2025 07 21 at 4](https://files.readme.io/bbe0a74c0fbd0c14c2ad58d8f0e236bd7be45355fe347e2aafde3faa66155964-Screenshot_2025-07-21_at_4.59.44_PM.png)

8. Click **Send for Approval**.
9. On the Summary page, review the hourly limit and delivery window.

![e16c656444f98a01a408159e0bbf5c429bf8cda8b7e592b1ef8ac3159d5237b6 Screenshot 2025 07 15 at 12](https://files.readme.io/e16c656444f98a01a408159e0bbf5c429bf8cda8b7e592b1ef8ac3159d5237b6-Screenshot_2025-07-15_at_12.32.53_AM.png)

<Note title="Note">
If throttling is applied, it may take multiple days to deliver all messages.
</Note>

### Tracking throttled delivery progress

After the campaign message approval,

* The summary page displays a progress bar showing the number of messages sent, in progress, and pending.
* It also shows the scheduled time for the next batch and, once throttling completes, the start and end dates of the throttling period.

![ab20d1b7c8df9d9ae25c96c9e2b3c1f110bc14b5f4926c242984285a1abf8547 Screenshot 2025 07 15 at 12](https://files.readme.io/ab20d1b7c8df9d9ae25c96c9e2b3c1f110bc14b5f4926c242984285a1abf8547-Screenshot_2025-07-15_at_12.30.34_AM.png)

For [Push Notifications (MPush)](https://docs.capillarytech.com/docs/push-notifications#/),  Messages to Android and iOS users are sent in separate batches. For example, with an hourly limit of 3,000, the system sends 3,000 messages to Android users first, then 3,000 to iOS users.

***

### Scheduling messages post audience sync confirmation

You can enable "**Execute message only after audience sync completion**" in the campaign message delivery setting and ensure that the campaign proceeds only after confirming the EI sync completion and verifying the audience refresh's up-to-date status.

By enabling this option, the system avoids disruptions caused by technical challenges that delay the EI sync and audience refresh.

To enable, perform the following:

1. After you define and schedule the recurring period (repeats periodically) for the campaign messages, select the check box **Execute message only after audience sync completion**.
2. If required, select the check box **Wait for Sync completion until** and define the time until which the system should wait for the audience sync. If the audience sync is not completed by this time, the recurring messages are sent without waiting for the audience sync. For instance, if you set this time as 9 pm, the system will wait until 9 pm for the sync to complete. If the sync is not completed by 9 pm, the campaign will execute regardless.\
   The recurring messages are not sent if you do not define a sync cut-off time and the audience sync is not completed.

![a8267b2 Scheduling message post sync](https://files.readme.io/a8267b2-Scheduling_message_post_sync.png)

## Setting an alert for recurring messages

You can set alerts for recurring messages in the campaign settings. For information, refer to the [Recurring message expiry alert](https://docs.capillarytech.com/docs/campaign-settings#recurring-message-expiry-alert).

For information on configuring a recurring campaign, refer to the [Recurring Campaign ](https://docs.capillarytech.com/docs/recurring-campaign)documentation.

## Blackout time window

The **blackout time window** means in that window no communication will be sent to the brand’s users. And that specified is known as blackout time.

![9e8d58e686d54e13bbab8401f77ea0d26203ff1eceda04bb36b2b3f1b665cb3f Screenshot 2025 05 23 at 8](https://files.readme.io/9e8d58e686d54e13bbab8401f77ea0d26203ff1eceda04bb36b2b3f1b665cb3f-Screenshot_2025-05-23_at_8.25.19_PM.png)

To use this window click<Anchor label=" here" target="_blank" href="https://apac.intouch.capillarytech.com/orgadmin/administer/{{ORGID}}"> here</Anchor>