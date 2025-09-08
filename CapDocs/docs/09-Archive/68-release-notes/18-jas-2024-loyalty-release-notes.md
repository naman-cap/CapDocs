---
title: JAS 2024 | Loyalty+ Release notes
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
# Leaderboards for Milestones

A new feature to gamify [milestones](https://docs.capillarytech.com/docs/milestones-new-flow). Leaderboards provide a high-score list where customers are ranked based on their progress towards a milestone. Brand can enable leaderboards for existing milestones or create new leaderboard-enabled milestones.

To enable leaderboards for a milestone refer to the [leaderboards documentation](https://docs.capillarytech.com/reference/leaderboards).

## APIs for leaderboards

1. **Get top ranked users:** Get a ranked list of users who have achieved a target within a timeframe.
2. **Get user rank across target groups**: Get a user’s rankings in all enrolled targets within a timeframe.

Refer to the documentation on the [get top ranked users](https://docs.capillarytech.com/reference/get-top-ranked-users) API and the [get user rank across target groups](https://docs.capillarytech.com/reference/get-user-ranks-across-target-groups) API.

# User Created Challenges

A new feature for [milestones](https://docs.capillarytech.com/docs/milestones-new-flow) that lets users create a challenge for themselves and earn rewards for completing them. Existing milestone APIs have been updated to support this feature.

To know more, refer to the documentation on [user created challenges](https://docs.capillarytech.com/reference/user-created-challenges).

# Connected Organisations Milestone APIs

Connected Organisations (Connected Orgs) represent an enhanced version of the Org Unit concept, designed with data segregation and security in consideration. In this model, each business unit is structured as a separate organisation, connected to one common organisation, which itself functions as an independent entity.

To know more about the Milestone APIs that supports connected orgs, refer to the documentation [here](https://docs.capillarytech.com/reference/connected-org-apis).

# Tier Enhancements

With the latest tier enhancements, brands now will be able to implement the following use cases in both tier upgrades & tier renewals. 

1. ANY (N-1)
2. ALL N
3. Custom conditions

To know more about this, refer [tier-upgrades](https://docs.capillarytech.com/docs/tier-upgrade#creating-upgrade-criteria) & [tier-renewals](https://docs.capillarytech.com/docs/tier-downgrade-renewal#creating-dynamic-renewal-criteria).

# Enhancements to Advanced Capping

Enhancements to the advanced settings for capping loyalty points. 

1. Configuration page for advanced capping is moved to the **Advanced settings** of the loyalty program.
2. Support for all types of [customer activities](https://docs.capillarytech.com/docs/activities).
3. Limit for individual customer limits increased to 50.
4. Choose the customer segment (audience) when creating a limit for individual customers.

To know more, refer to the documentation on [advanced capping](https://docs.capillarytech.com/docs/advanced-capping).

# Enhancements to Ledger Explode API

Enhancements to the get points ledger explode info API. 

1. Addition of two new query parameters: `eventName` and `eventReferenceIds`.
2. Support for behavioral events.

To know more, refer to the documentation on [Get Points Ledger Explode info](https://docs.capillarytech.com/reference/get-points-ledger-explode-info) API.
