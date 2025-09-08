---
title: Member Care Release Notes
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
## Introducing a new design to Member Care

We are happy to announce that we are putting some fresh paint on the Member Care product, starting with the most frequently used component - The Customer Single View (CSV) page. In the Phase1 release, the CSV page has been completely redesigned to offer a cleaner, better organized view of customer information and a more intuitive user experience.

### Background

The old UI is dated and as a result, has accumulated issues over the years. The feedback on the CSV, which is used by various personas including customer Support personnel, System Integrators, Marketing Managers, Pre-sales teams, and Incident managers, has specifically revolved around the issues. The following is the list at a broad level.

* Clutter - The CSV has a lot of information on a single, long page. This leads to cognitive overload for users.
* Aesthetics - The UI of CSV and Member Care itself is not on par with Capillary products and competing products in the market. While the UI of other products has been refreshed, Member Care has been left behind until now. 
* Unorganized - Customer information is not grouped together properly. Each source profile is a tab in the customer single view although nothing changes between each except for identifiers and subscription statuses.
* Navigation - Useful information such as transactions, vouchers, loyalty details and fraud/customer status are in different places and not easily accessible.
* Customization - With CSR and new vertical-specific use cases coming up, customization will become a requirement in the future. There is limited scope for customization in the old UI.

### Solution for Phase 1

With the new design, you can see the following changes to the CSV page -

![175cf07 Member Care Preview GIF](https://files.readme.io/175cf07-Member_Care_Preview_GIF.gif)

* UI that is consistent with other Capillary products.
* Reduced cognitive load as information is presented in an organized, and progressive manner.
* Designed with the view of enabling customization in the future.
* A persistent left side bar highlighting key aspects of a customer's profile such as sources, identifiers, loyalty slab information and recent events.
* New, easy to access pages for viewing loyalty information, customer events, incentives and interactions.
* Better visualization of points data using the recently launched [Ledger API](https://docs.google.com/document/d/1VyKPazJ-hzOWIxP-PA4bz0UrzRI5-LOaQcwfiwGIcbk/edit?usp=sharing)-driven points data.
* Useful additions including slab renewal, slab upgrade, cards and other widgets.

### Upcoming changes

In the current phase, you will see very limited components. You could expect more in upcoming releases. The following is the list of components you could expect in Member Care - 

* Actions - Identifier change, goodwill points/coupons issual, mobile reallocation, account merge, tag transactions, fraud status change, customer status change, subscription status change, test and control status change, card linking/delinking, target value change and card status change.
* In the More Information section of the current UI, the following will not be present in the current release - Leads, Audit Trails, B2B Loyalty, Points > Slab Change Log, Points > Expiry Schedule, Points > Historical Points Log 
* User Groups v1 and v2 information and events.
* Request management, Tickets management, coupons search and other items in Member Care that are not related to the CSV.\
  These items will be implemented through the AMJ’22 quarter and released sprint-wise. 

### Rollout plan

Instead of a single big-bang release, we aim to rollout these UI/UX improvements incrementally over the coming quarters. The rollout will happen in phases and on an on-demand basis initially. Brands that opt to use the new UI now will be able to familiarize themselves with the new layout by toggling between the current and new layout before we eventually phase out the current layout. 

For more details, see [Member Care V2](https://docs.capillarytech.com/docs/member-care-v2).
