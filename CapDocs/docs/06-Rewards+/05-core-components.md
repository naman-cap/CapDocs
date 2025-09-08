---
title: Core Components
deprecated: false
hidden: false
metadata:
  robots: index
---
![1abed2b6d7f2810702500222d1fe6fa7b37b2a346d8a998f86293f28b61f285f Connected Orgs](https://files.readme.io/1abed2b6d7f2810702500222d1fe6fa7b37b2a346d8a998f86293f28b61f285f-Connected_Orgs.jpg)

## 1. Progressive Web App (PWA)

Rewards+ utilises a Progressive Web App (PWA) for its UI, delivering a unified, app-like experience across web and mobile without maintaining separate codebases. The Rewards+ PWA can be embedded into client applications—such as their web portals, mobile apps (Android/iOS), or even banners—via iframe.

![443fa5d1ea04a8ef0951b86173331aedf7680479139b81cb628598ae4197c5bf Screenshot 2025 06 23 at 2](https://files.readme.io/443fa5d1ea04a8ef0951b86173331aedf7680479139b81cb628598ae4197c5bf-Screenshot_2025-06-23_at_2.15.15_PM.png)

The PWA enables you to:

* **Maintain one codebase**: No need to manage different code for Web, Android and iOS applications. This reduces development effort and ensures consistency.
* **Streamlined Releases**: Deploying a service updates the UI across all applications using the PWA, removing concerns about version compatibility across different devices.
* **Flexible Integration**: It supports diverse integration requirements, such as Single Sign-On (SSO), linking to web applications, Android, iOS, or banners, making it adaptable to client ecosystems across multiple platforms.
* **Consistent Experience**: The PWA provides the same user experience regardless of the device.
* **Configurability and integration with translation services such as Locize:** This enables managing unique experiences for different clients without maintaining distinct UI codebases. Approximately 80% of the UI components can be changed/translated via these configuration tools.

## 2. Content Management System (CMS)

The CMS is an in-house developed Content Management System designed for creating, managing, and publishing exclusive offers within the Rewards+ program. It serves two primary functions:

* Enables the Rewards+ Product Support team to self-source and configure external offers
* Allows partner brands (clients) to independently create, manage, and publish their own offers

![22366220421cd7299575e00fa8b8c0809306d0ff078bef1afa450086c7d40425 Claim Now 2](https://files.readme.io/22366220421cd7299575e00fa8b8c0809306d0ff078bef1afa450086c7d40425-Claim_Now_2.png)

The main users of the CMS are the content operations team either from Capillary or from the brand itself, depending on whether the client prefers to manage offer creation in-house. The CMS is built to empower both internal and client teams to manage the entire content lifecycle without dependency on other teams.

**Offer Configuration**

CMS supports a variety of offer types, including coupons, cashback deals, event tickets, gamified offers (like instant win and prize draws), and editorial content such as articles and newsletters.

When creating a new offer, users can configure:

* Provider and merchant details
* Offer title and metadata
* Images and categories
* Terms & conditions
* Call-to-action (CTA) buttons
* Claim details (e.g., claiming process, coupon codes, offer validity)
* Customer targeting (specific segments)

Offers can be sourced directly by brands or through vendor partnerships. For example, a retail partner like ABC can create a store-specific offer such as "25% off summer collections," which would then be visible exclusively to users of their Rewards+ app.

**Operational Aspects:**\
A separate instance of CMS is created for each new client and can be accessed by the content creation team members with appropriate access to the CMS.

## 3. Offer integrations

Integrations are of three types, Affiliate Integration, Event Integration and Cinema Integrations.

### Affiliate Integration

Affiliate Integration is a key part of Rewards+ for sourcing offers and forming partnerships. It involves working with affiliate marketers from different regions. The Content and Partnership Team, along with Rewards+ product owners, evaluate and onboard partners based on the type and quality of content they offer.

**Offer types**\
Affiliate partners provide various offer types, including coupons and cashbacks.

**Process**\
Affiliates maintain a bulk catalog of offers, which Rewards+ ingests into its system. Filters and conditions are applied during this ingestion process to ensure relevance and compliance.

Rewards+ also supports offer exclusivity. For example, offers from competing brands or specific categories can be excluded during integration.

Tenant-specific conditions can be applied as well. For instance:

* A may exclude alcohol-related offers.
* Client B may restrict adult content.
* Client C may block offers from brands like XYZ.

### Customer Journey & Benefits:

Offers sourced via affiliates enable various customer journeys. For example, claiming an offer on the Rewards+ UI may provide an affiliate link. When customers purchase through that link, they may receive cashback.

For coupon-type offers, customers receive a unique coupon code upon activation. They can apply this code in-store or online to get a discount.

For merchant-funded offers sourced through affiliates, the partner shares transaction details for eligible cashback, which may require approval. Rewards+ supports transaction statuses such as Confirmed, Approved, and Declined to determine cashback eligibility.

### Event & Cinema Integration

Rewards+ has partnerships with event providers to offer tickets for concerts, sports events, live shows, and similar experiences. It also has partnerships with cinema providers and theatre chains. The process, customer journey, and benefits are similar to those of an affiliate integration.

## 4. Rules - Tenant/client rule, cashback rules, membership

Rules within the Rewards+ platform are primarily configurations managed in the backend through configuration files. The rules are defined according to a brand’s specific requirements. These rules cover various aspects, including overall brand-level settings, cashback logic, membership/user group rules and terms and conditions.

**Overall Brand Rule Configuration:**\
Each brand has their own unique requirements for certain rules. Any configuration specific to a brand is added to the tenant rule configuration file. When a new brand is onboarded, their desired rules are gathered through requirement documents or workshops and these requirements are then translated into user stories for tenant setup tasks. A new tenant ID is generated for each client and supplied across various services, allowing those services to pull rules from the appropriate tenant rule system.

**Example:** An example of tenant-level rules includes how members are ingested into the system (e.g., through file injections, manual injection, or SSO). These tenant-level configurations are typically a one-time setup activity configured by developers.

**Cashback Rules:**\
Similar to the tenant rule, Cashback rules are managed in a separate configuration file. Each brand can have different cashback rules, and these rules define various processing conditions, such as whether cash back should be processed based on amounts below or more than a certain threshold. There can be any number of rules governing cashback processing. The cash back engines use these rules and logics to determine when cash back is rewarded.

**Membership Rules:**\
Membership rules are also managed in a separate configuration file. These rules define parameters related to user groups, mostly relevant for family or friend groups.
**Example:** Examples include limiting the number of members in a user group or capping the number of transactions allowed for a user group.
**Note:** Membership rules can sometimes override cash back rules. An example given is limiting a user group to a specific number of cashbacks per year with an amount cap.

## 5. Communication service

The Communication service in Rewards+ is a core component that enables customer engagement through multiple channels. Currently, Rewards+ supports Email and SMS communication services. This service handles the following tasks:

* Creating audiences
* Creating email templates and uploading templates
* Sending emails via AWS Pinpoint, with support for audience segmentation, merge tags, and deep links to personalise and enhance customer engagement
* Sending transactional (e.g., OTP, username change, payment updates) and campaign messages via Email and SMS

![22b7121c159782d952ed3cc12651b304bd07d88eda9d1fcef00cc770eff185cd Claim Now 5](https://files.readme.io/22b7121c159782d952ed3cc12651b304bd07d88eda9d1fcef00cc770eff185cd-Claim_Now_5.png)

**Audience Creation and Segmentation:**\
Rewards+ has its own audience creation job. This is primarily done using AWS Lambda jobs, which support querying the database. The Lambda jobs query the member database (which holds the latest customer data) using the tenant ID (client ID) and specific conditions to pull the required audience. Further, the queried data (eg: name, email) is transformed into a file and supplied to the AWS communication service. Separate lambda jobs are written and scheduled per tenant and campaign, or required schedule. For more information, refer to the AWS documentation on Audience Segmentation.

**Note:** At present, the basic segmentation such as segmentation based on attributes like gender, pin code, year of registration, and broad statuses. More complex behavioural segmentation (e.g., based on transaction counts within a period) is not supported.

**Email Template Creation and Sending Process:**\
For template creation, Rewards+ uses a tool called Stripo. After creating the templates, they are created and uploaded directly to the AWS communication service, which is used for sending out emails. The templates are created and finalised after discussion with the brand to ensure that it meet the brand’s design guidelines.

**SMS Creation and Sending Process:**\
SMS communication in Rewards+ is currently available on request and is not enabled by default. At present, this service is enabled for certain brands and supported to specific Service Request types through the Agent Support Tool (AST).  Creating an SR triggers a backend task and workflow that pulls the necessary metadata from various services and sends it to the Rewards+ AWS communication service. The SMS is then delivered via the configured SMS vendor.

## 6. Payment service

Rewards+ payment service supports two main scenarios: "pay in" and "pay out".

**Pay In (Customer Purchases):**\
This capability allows customers to make purchases for certain items available on the Rewards+ platform. For example, cinema tickets, event tickets, or certain products.

![a15500d187db1a4a9d2c1c2b4b7c2c67f401b65347310e55bdb1e04cace9ee20 Screenshot 2025 06 23 at 2](https://files.readme.io/a15500d187db1a4a9d2c1c2b4b7c2c67f401b65347310e55bdb1e04cace9ee20-Screenshot_2025-06-23_at_2.34.27_PM.png)

**Note:** Rewards+ are made using cash transactions. Rewards+ currently does not have the capability for customers to use reward points earned from external programs (like those from a bank's credit card) for purchases within the Rewards+ platform.

**Pay Out (Cashback Distribution):**\
The payment service also supports a "pay out" use case, primarily for distributing cashback in actual transaction currency. If a transaction is eligible for cashback, the customer can receive the cashback either on the card they used for the transaction or in the bank account registered with the service, depending on the client's (tenant's) configuration.
The backend for both the "pay in" and "pay out" processes is the same. The backend captures the request payload and sends it to the payment gateway and the gateway processes the payment.  It supports transactions initiated through both the Rewards UI and the Agent Support Tool (AST).

## 7. Personalisation - Content recommendations

Personalisation in Rewards+ enables content recommendations to customers and is achieved using its personalisation engine. The personalisation engine requires two main types of input data:

* **Customers' behavioural data:** This includes customer interest captured during registration, customer clicks, customer favourites, customer activations, customers' purchase history, and customer analytical data from sources like Matomo or Google Analytics, as well as application-level events. These attributes are ingested to define customer behaviour/persona.
* **Offer/Content metadata**: This includes details such as offer type, genre, location, date, artist, venue, product name, terms and conditions, country, and brand name. This metadata is exposed to the personalisation engine and can be used to define content persona and rank the offers.

The personalisation engine processes both the customer behavioural data and the content metadata and uses this data to determine which set of customers will likely choose which set of offers. Based on this analysis, the engine creates a sequence of recommendations for each customer.

**Note**: At present, you cannot use the personalisation in Campaigns.

## 8. Analytics

The Rewards + platform supports analytics for various purposes, including understanding customer behaviour, customer navigation & preferences, troubleshooting and generating reports.\
Rewards+ supports two main types of analytics: UI click-based analysis and application-level analytics.

* **UI Click-Based Analytics:**\
  This analysis tracks customer interactions on the user interface (UI), such as page views, clicks on Call-to-Action (CTA) buttons, and views of specific components on the UI. Rewards+ uses Matomo for this type of analysis. A list of variables that should be captured is defined, and these variables can vary based on the offer or journey type or triggers. Matomo helps with this tracking and allows viewing the customer journey as a funnel and allows us to extract granular data as per the predefined variables.
  **Notes:**
  -The data captured through Matomo is very in-depth and minute.
  -This data is maintained within Matomo DB
* **Application Level Analytics:**\
  Rewards+ captures analytics at the application level by defining specific events, such as Customer Add event or Add to Cart event on certain customer actions and provides data focused only on these defined events. When a customer performs a defined action, it generates an event which is then sent to the backend. This event data is stored in the Rewards+ database. Besides being used for reporting and analysis, this event data can also be utilised to trigger certain actions or call different services based on the event name.

### UI Analytics vs Application Level Analytics

<Table align={["left","left","left"]}>
  <thead>
    <tr>
      <th>
        Feature
      </th>

      <th>
        UI Click Based Analytics
      </th>

      <th>
        Application Level Analytics
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        **Tool/Mechanism**
      </td>

      <td>
        Primarily uses Matomo.
      </td>

      <td>
        Captures defined events on customer actions.
      </td>
    </tr>

    <tr>
      <td>
        **What is Tracked**
      </td>

      <td>
        Tracks customer interactions specifically on the UI. This includes:
      </td>

      <td>
        Tracks specific, defined events that occur at the application backend level.
      </td>
    </tr>

    <tr>
      <td>
        **Data Detail**
      </td>

      <td>
        Provides very in-depth and very minute data.
      </td>

      <td>
        Provides data focused only on the defined events
      </td>
    </tr>

    <tr>
      <td>
        **Data Location**
      </td>

      <td>
        The entire dataset is maintained within the Matomo database.
      </td>

      <td>
        Stored in the Rewards+ database.
      </td>
    </tr>

    <tr>
      <td>
        **Data Accessibility**
      </td>

      <td>
        Ingress and output from Matomo.
      </td>

      <td>
        Data is available in the database and is exposed to Tableau for reporting.
      </td>
    </tr>

    <tr>
      <td>
        **Primary Use Cases**
      </td>

      <td>
        * Understanding detailed UI interactions.
      </td>

      <td>
        * **Reporting and analysis**.
      </td>
    </tr>

    <tr>
      <td>

      </td>

      <td>
        * Viewing customer journey as a funnel.
      </td>

      <td>
        * Utilized for **triggering certain actions** or calling different services based on the event name.
      </td>
    </tr>

    <tr>
      <td>

      </td>

      <td>
        * Serves as a key input for the **personalization engine** (customer clicks, visits).
      </td>

      <td>
        * Serves as input for the **personalization engine** (application level events).
      </td>
    </tr>
  </tbody>
</Table>

## 9. Reporting and dashboards:

Rewards+ supports reporting and dashboarding capabilities through Tableau as the reporting tool.\
The reporting framework pulls data from multiple sources, including:

* The claim table for voucher and cashback transactions
* A dedicated cashback table for cashback-specific data
* The application event database, which captures event-level data exposed to Tableau

Summarised data is published to Tableau dashboards and can be shared with brands as needed. Rewards+ provides 10–12 standard reports covering key metrics such as:

* Page views
* Unique logins
* Registrations
* Campaign statuses

It also supports custom reports as per the requirements. AWS jobs can be configured to generate periodic extracts for scheduled access to reporting data.

### Tableau dashboard

Rewards+ uses Tableau to create easy-to-read dashboards that show how customers interact with the Rewards+ program. These visual reports take complex data about transactions, rewards redemptions and customer behavior and present it in simple charts and graphs. This helps to quickly see what's working, spot trends, and make decisions to improve program's performance.

**Key Dashboards**

* Visits Dashboard- Tracks customer engagement metrics, from customer onboarding to number of visits and average visit time for the selected date range.
* Communications Dashboard - Monitors email communication and provides a summary of event communication metrics, including the number of communications sent, delivered, opened, clicked, hard bounced, and rendered with errors.
* Campaigns Dashboard- This dashboard shows the performance of marketing campaigns over time, showing the number of emails sent, delivered, opened, and clicked, as well as the delivery rate, open rate, and click rate for each campaign.
* Interests Dashboard- Provides insights into customer preferences by comparing initial onboarding selections with current active interests.
* Preferences Dashboard- Tracks customer opt-in and opt-out trends for communications (SMS, email, etc.). It highlights active vs. canceled preferences, helping ensure compliance and improve engagement strategies.
* Offers Dashboard- Measures offer performance by tracking views, saves, claims, and conversion rates. Additional metrics like gross sales and commission help assess profitability and customer response to promotions.

For more information, refer to the [Rewards+ Reporting document.](https://docs.capillarytech.com/docs/rewardsplus_dashboard#/)