---
title: Integrations
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
You can use the [Manual Tier Adjustment API](https://docs.capillarytech.com/reference/manual-tier-adjustment) to manually upgrade or downgrade a customers tier status. You can use fetch APIs, which can be used to get tier information of a customer. Also, light APIs are also used to get the most important/relevant part of the customer’s tier dynamics quickly. If the customer is in the base tier, no expiry date is required and if in the top tier, the next tier number is set to -1.

The system can calculate the gap to upgrade and the gap to renew parameters for customers, which are aimed to get the information on the gap or value of the tier upgrade parameter used, which is yet to be allocated to upgrade the customer’s current tier. But this is an add-on feature, so please raise a request to get this activated and only then can it be used for the org.

You can read about importing data for tiers/slabs [here](https://support.capillarytech.com/en/support/solutions/articles/https://support.capillarytech.com/en/support/solutions/articles/4000102775-points-slabs#Slab4000102775-points-slabs#Slab).
