---
title: AMJ 2022 | CDP Releases
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
### Introducing a new design to Member Care

We are happy to announce the new interface to Member Care with some fresh paint. In the current phase (phase 1), we rolled out the most frequently used component - The Customer Single View (CSV) page. You can now see a CSV page with a cleaner, better-organized view of customer information and a more intuitive user experience.

#### Background

The old UI is dated and, as a result, has accumulated issues over the years. The feedback on the CSV, which is used by various personas, including customer Support personnel, System Integrators, Marketing Managers, Pre-sales teams, and Incident managers, has specifically revolved around the issues. The following is the list at a broad level.

* Clutter - The CSV has a lot of information on a single, long page. This leads to cognitive overload for users.
* Aesthetics - The UI of CSV and Member Care is not on par with Capillary products and competing products in the market. While the UI of other products has been refreshed, Member Care has been left behind until now. 
* Unorganized - Customer information is not grouped together properly. Each source profile is a tab in the customer single view, although nothing changes between each except for identifiers and subscription statuses.
* Navigation - Useful information such as transactions, vouchers, loyalty details, and fraud/customer status are in different places and not easily accessible.
* Customization - With CSR and new vertical-specific use cases coming up, customization will become a requirement in the future. There is limited scope for customization in the old UI.

#### Solution (Phase 1)

With the new design, you can see the following changes to the CSV page -

* UI that is consistent with other Capillary products.
* Reduced cognitive load as information is presented in an organized and progressive manner.
* Designed with the view of enabling customization in the future.
* A persistent left sidebar highlighting key aspects of a customer's profile such as sources, identifiers, loyalty slab information, and recent events.
* New, easy-to-access pages for viewing loyalty information, customer events, incentives, and interactions.
* Better visualization of points data using the recently launched Ledger API-driven points data.
* Useful additions include slab renewal, slab upgrade, cards, and other widgets.

#### Upcoming changes

In the current phase, you will not see limited components. You can expect the following components in our upcoming releases.

* Actions - Identifier change, goodwill points/coupons issual, mobile reallocation, account merge, tag transactions, fraud status change, customer status change, subscription status change, test, and control status change, card linking/delinking, target value change, and card status change.
* From the More Information section in the current UI, the following will not be present in the first release of the new CSV UI - Leads, Audit Trails, B2B Loyalty, Points -> Slab Change Log, Points -> Expiry Schedule, Points -> Historical Points Log. 
* User Groups v1 and v2 information and events.
* Request management, Tickets management, coupon search, and other items in Member Care that are not related to the CSV.\
  These items will be implemented through the AMJ’22 quarter and released sprint-wise. 

#### Rollout plan

Instead of a single big-bang release, we aim to roll out these UI/UX improvements incrementally over the coming quarters. The rollout will happen in phases and on an on-demand basis initially. Brands that opt to use the new UI now will be able to familiarize themselves with the new layout by toggling between the current and new layout before we eventually phase out the current layout.

For more details, see [https://docs.capillarytech.com/docs/member-care-v2](https://docs.capillarytech.com/docs/member-care-v2) 

### New template in Connect+ - Data Reconciliation

We have introduced a new Connect+ template for data reconciliation - comparing data in the Capillary CDP and client-given source data to identify events that got missed during ingestion into our CDP. This will directly replace the Diff Tool that has been leveraged for identifying missing events (such as transactions) and the Intap tool for ingesting those missing events in the CDP. 

#### Background

There have been cases over the years where source-side events fail to get ingested into Capillary CDP for various reasons, including integration issues, system downtime, time-out errors, and others. Typically, the source side events that get missed are transactions. If transactions are missed consistently, brands that rely on Insights+ will have problems on the reporting front. More importantly, if these transactions are for loyalty customers, there is an expensive implication on downstream Loyalty+ events for those customers.

To ensure that transactions or events such as customer registrations, return transactions, and transaction line items that happen at the source side are not missed, Capillary system integrators have been using a service called Diff Tool for a long time now. To identify missing events in the Capillary CDP, Diff Tool compares data from the source side with the data exported from Capillary CDP (via Data Export Framework). The data are compared based on fields such as bill\_number or a combination of bill\_number and store\_code for transactions (for customer data, it will be a customer identifier) to uniquely identify events in both data sets and then mark the missing items on the source data. These marked items are then ingested to Capillary CDP through another service called Intap.

For the last year, we have seen several issues on the Diff Tool front, which is consuming considerable developer bandwidth to maintain. Also, with Connect+ becoming the one-stop tool for integrations, data ingress, and egress, we have considered moving Diff Tool functionality to Connect+.

#### Solution

With this release, Diff Tool functionality is now part of Connect+ as a new template. We will be moving away from calling it Diff Tool in Connect+ and calling it Data Reconciliation template as reconciling data on the source side and Capillary is the objective behind it. There is a change in the way how Connect+ handles data reconciliation vis-à-vis the Diff Tool. That is explained in the next section.

#### How is the Data Reconciliation Template different from the Diff Tool?

Diff Tool compares two files and marks the missing records in Capillary CDP. The two files are:

* **Source side data** - This is the data, in the form of a CSV file typically, given by the client and is the source of truth. Let’s say there are 100 events (transaction events, for example) on a specific date, say Jan 1st, 2022, that was supposed to be captured on Capillary CDP. But due to some issues/errors, Capillary CDP has only 90 events. 10 events have gone missing, and these need to be ingested back into the system. The source-side data will have all the records that were supposed to be ingested, including the 10 missing events. This is dumped in an FTP location directly by the client. 
* **Capillary CDP data** - This has the events data actually ingested in the Capillary CDP. This data can be exported from Data Export Framework on a daily basis. In our case, we will have Jan 1st, 2022 transaction data, in the form of a CSV file, exported into an FTP location using a recurring Data Export schedule typically. It will have only 90 events.\
  Now, what Diff Tool does is it compares these two files record by record depending on the comparison key (bill\_number, for example) setup. Then, it marks the missing records in the source data by adding a new column and writing one against missing events in the Capillary CDP. After this, the source file with the additional diff field (1 or 0 values) is placed into an FTP folder. Intap is then used to ingest the missing events.

In the Connect+ Data Reconciliation approach, the source data will not be compared to an exported file from the Data Export Framework. Instead, the source data will be compared directly with all the events (transactions in this scenario) present in the Insights+ backend. This way, the additional step of exporting data is removed. Overall, a system integrator needs to point to the FTP location where source data will be dumped and the type of event in the Connect+ approach. After that, the comparison will be made directly with the events in the Insights+ backend by the data reconciliation data flow to generate the missing events (marked by 1 in a new field). 

For details on setting up data reconciliation flow, see [Step 4: Configure Dataflow Execution Frequency](doc:step-4-configure-dataflow-execution-frequency) Setting up the Data Reconciliation Data Flow.
