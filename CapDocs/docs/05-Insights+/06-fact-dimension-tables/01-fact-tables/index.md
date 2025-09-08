---
title: Fact tables
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
Fact and dimension tables form the foundation for all reporting conducted within Insights+. 

Fact tables contain quantitative data, typically numerical values that represent the measurements or metrics of a business process. For instance, in a sales environment, a fact table might record each sale transaction, with columns representing details such as transaction ID, sale amount, product ID, and date of sale. Each row in the fact table corresponds to a unique event or transaction and often references multiple dimension tables, which provide context to the facts.

<Note title="Note">
By default, fact tables are not onboarded for all organisations. To enable them, raise a JIRA ticket with the Capillary Product Support team.
</Note>

**Below is the list of frequently used fact tables**

<HTMLBlock>{`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    .button-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }
    .button-container a {
      display: inline-block;
      width: 48%;
      padding: 10px;
      margin: 10px 0;
      border: 2px solid white;
      background-color: #2d5bcf;
      color: white;
      text-decoration: none;
      font-size: 18px;
      font-weight: bold;
      border-radius: 10px;
      box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
      transition: background-color 0.3s ease, color 0.3s ease, box-shadow 0.3s ease;
      text-align: center;
    }
    .button-container a:hover {
      background-color: #1341A9;
      color: white;
      box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.4);
    }
  </style>
</head>
<body>

<div class="button-container">
  <a href="https://docs.capillarytech.com/docs/badges-fact-table">Badges</a>
  <a href="https://docs.capillarytech.com/docs/bill-line-items-fact-table">Bill Line Items</a>
  <a href="https://docs.capillarytech.com/docs/call-task-customer-status-fact-table">Call Task Customer Status</a>
  <a href="https://docs.capillarytech.com/docs/communication-credits-log-fact-table">Communication Credits Log</a>
  <a href="https://docs.capillarytech.com/docs/contact-info-fact-table">Contact Info</a>
  <a href="https://docs.capillarytech.com/docs/coupons-fact-table">Coupons</a>
  <a href="https://docs.capillarytech.com/docs/custom-field-data-fact-table">Custom Field Data</a>
  <a href="https://docs.capillarytech.com/docs/customer-merge-log-fact-table">Customer Merge Log</a>
  <a href="https://docs.capillarytech.com/docs/customer-notes-fact-table">Customer Notes</a>
  <a href="https://docs.capillarytech.com/docs/customer-summary-members-fact-table">Customer Summary (members)</a>
  <a href="https://docs.capillarytech.com/docs/daily-till-summary-fact-table">Daily Till Summary</a>
  <a href="https://docs.capillarytech.com/docs/email-click-stats-fact-table">Email Click Stats</a>
  <a href="https://docs.capillarytech.com/docs/fact_milestones">Milestones</a>
  <a href="https://docs.capillarytech.com/docs/fact_registration-event">Registration Event</a>
  <a href="https://docs.capillarytech.com/docs/fact_streaks">Streaks</a>
  <a href="https://docs.capillarytech.com/docs/goodwill-requests-fact-table">Goodwill Requests</a>
  <a href="https://docs.capillarytech.com/docs/invitation-sent-fact-table">Invitation Sent</a>
  <a href="https://docs.capillarytech.com/docs/issue-tracker-fact-table">Issue Tracker</a>
  <a href="https://docs.capillarytech.com/docs/journeys-fact-table">Journeys</a>
  <a href="https://docs.capillarytech.com/docs/nsadmin-messages-fact-table">Nsadmin Messages</a>
  <a href="https://docs.capillarytech.com/docs/payment-details-fact">Payment Details</a>
  <a href="https://docs.capillarytech.com/docs/points-fact-table">Points</a>
  <a href="https://docs.capillarytech.com/docs/profile-users-fact-table">Profile Users</a>
  <a href="https://docs.capillarytech.com/docs/referrals-fact-table">Referrals</a>
  <a href="https://docs.capillarytech.com/docs/referrers-fact-table">Referrers</a>
  <a href="https://docs.capillarytech.com/docs/response-info-fact-table">Response Info</a>
  <a href="https://docs.capillarytech.com/docs/return-bill-line-item-fact-table">Return Bill Line Item</a>
  <a href="https://docs.capillarytech.com/docs/rewards-fact-table">Rewards</a>
  <a href="https://docs.capillarytech.com/docs/slab-change-log-fact-table">Slab Change Log</a>
</div>

</body>
</html>
`}</HTMLBlock>
