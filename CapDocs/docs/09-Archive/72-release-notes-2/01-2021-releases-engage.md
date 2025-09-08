---
title: 2021 Releases | Engage+
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
### DLT compliant SMS Campaigns

**Overview**\
TRAI has formulated certain guidelines to enhance control, prevent any fraudulent practice and provide greater safety to the end customer. As per the guidelines, the companies who want to communicate with their customers will now have to register themselves with Telecom Operators for sending SMS. The system will be governed using Blockchain technology also known as Distributed Ledger Technology (DLT).

Though TRAI has provided different platforms (Vodafone, Airtel, Jio, BSNL, etc.) to organizations for registering SMS content templates, the process of sharing the content templates with Gateway operators is still very manual and error-prone. Any mistake such as wrong header, wrong template-id, header and template mismatch, length of variable portion, etc. in the campaign configuration can cause the campaign to fail. 

#### Problem Statement

A lot of effort and money will be wasted if unregistered or wrong message templates are sent to operators.

Since the slightest mismatch between content templates can cause message failure, Capillary also wanted to ensure minimum manual edits in the approved content templates. 

#### High-level Solution

**Support for DLT approved SMS templates**-

* Users can now upload the DLT approved content templates file and load the approved content templates in Engage+.
* The upload option is available in the Engage+ Creatives section through which users can upload the content templates file downloaded from DLT platforms. For details on how to upload a template, see here.
* It also pre-checks certain errors such as Header value, template approval status, and template ID to ensure wrong templates are not loaded.

#### Benefit:

* The file upload option eliminates the need for manual re-writing of approved templates which is error-prone

### SMS campaigns to support only approved templates

* While creating SMS content in a campaign, you can only select from the approved content templates available in Engage+
* You can modify only the variables of the template. Various checks such as variable length, using only registered header, and template-id. are in place.

#### Benefit

This ensures campaigns are successfully run and TRAI regulation-compliant messages are delivered to customers.

#### Use Case

The Marketing Manager wants to send DLT compliant messages to his customers. For that, she can create the content templates in the DLT portal and submit them. Once approved by DLT, she can upload a file with content templates in Engage+ creatives. This file will be checked for mandatory information such as sender id, template-id, approval status, etc. Once the file is successfully uploaded, DLT approved SMS templates will be available in Creatives. These approved templates can then be used in Campaign messages. 

To see how to upload a template and for DLT FAQs, click here.

### OU/MLP filter in campaign creation

This release allows orgs with OUs to filter campaigns of each respective OU on the campaigns listing screen and also allows an org to see the OU name on screen throughout the flow of campaign creation so that they have visibility for which OU they are creating the campaign. 

#### Problem Statement

Many orgs have multiple OUs and there are various issues when we show all the campaigns of all OUs together for such orgs:

It is difficult for users to have visibility on how many and which campaigns are running for each OU.\
When a user is creating a campaign, it is confusing for the users to know for which OU they are creating the campaign.

#### Solution

A campaign-level filter based on OUs is introduced on the campaign listing screen.\
OU name is displayed on screen throughout the campaign creation flow so that users understand which OU they are creating campaigns for.

### MLP support in Engage+

#### Problem Statement

For Orgs with multiple Loyalty Programs, it is very important to uniquely segment customers belonging to different programs and then interact with them through personalized communications. 

*For example:*

Orgs with many partners: Orgs could issue Partner-co-branded loyalty cards to its customers. Customers use these cards during purchases to avail points/ discounts and other benefits. A customer can be part of more than one Partner Loyalty program.\
Conglomerate with a presence in different verticals such as Hotels, Airlines, and Retail - The org unit or brand in these verticals have their own loyalty program. A customer can be part of more than one Loyalty Programs. 

#### Solution

It is required to uniquely identify customers according to the Loyalty Program they belong to and send messages/offers accordingly. Sometimes the org may also want to do some cross-vertical sales. 

For more details, click here. 

#### Enhancements made

1. Scope filter on the Message creation page: This helps you select the target audience belonging to a certain loyalty program only. The selected scope is valid throughout the Campaign Message and thus will get applied to Filters and Labels.

The scope set in Message is also considered when creating an Audience Group. The audience list will have customers of the selected loyalty program.\
The scope is automatically applied to transaction and loyalty filters. 

2. Audience filter scope according to the selected OU

If you set OU scope in a message, then the Audience Group will have customers of the selected Loyalty Program by default.

### Transaction and Loyalty Filters can now understand scope definition -

* **Transaction filter example**: If Loyalty Program/Card Series A is selected and we give the condition “Include customers whose transaction count is 0-5 during specific date range", then only customers of the card series A who have done less than 5 transactions appear in the list.\
   Since one customer can belong to more than one Loyalty Program, 5 transactions might have been done with a combination of Card Series A/B/C. Without passing scope the identification of the right customer is not possible.
* **Loyalty filter example**: If Loyalty Program/Card Series A is selected and we give the condition “Include customers whose active points are in the range of 0-500 then customers who have less than 500 active points with Card Series A will only appear in the list.

   Since one customer can belong to more than one Loyalty Program, less than 500 points might have been with a combination of Card Series A+B+C. Without passing scope the identification of the right customer is not possible.

3. Labels and tags specific to loyalty program

Now labels/tags related to the selected loyalty program will be applied by default when the respective scope is set for the campaign.

For example: If the selected Loyalty program is A and the tag used in creatives is \{\{total\_points\_to\_expire\_day(7)}} then the Card Series A points will be included in the message.

New labels for Card Series (Card Number, Card Issue Date, Card Series Name) have also been added. 

**What's upcoming**

* Multiple Loyalty Programs selection: Marketers will be able to select more than one Loyalty \* Program as scope. If Loyalty Program A, B is selected, then all the customers of both A and B can be targeted for a campaign.
* New filters for Card Series: Card status, card creation, card expiry date, max no. of cards per user, tender code, and tender description.
* Few more card-related labels will be added in OND.
* The following Card Series related filters will be available in the OND quarter: card status, card creation, card expiry, max number of cards per customer, tender code, and tender description.

## September Releases

### Revoke a promotion

This release allows an org to revoke certain promotions that have already been issued to customers.\
With this release, an org can now revoke a loyalty earning or reward promotion for a particular customer and also revoke an earn instance(s) of a particular promotion.

API

* To revoke a promotion(s) for a customer, pass the customerID and promotionID.
* To revoke an earn instance, pass the earnID along with customerID and promotionID.

### Limit the days for unlocking or earning a promotion

With this release, you can limit the days in which a customer can unlock a promotion. This will help to increase the customer's engagement with org more efficiently. You can configure the days in which the customer can unlock the promotion and this feature is available only for a single activity type of earning promotion. 

![](https://files.readme.io/ef1a3c6-promotons.png "promotons.png")

### Configure combo conditions in cart promotions

Earlier a customer could get incentivized even if they fulfilled only one condition out of three, as cart promotion supported ALL and OR based conditions and did check and validate expressions individually.

This feature allows an org to write a condition for combo offers. For example,

* Get chai and Samosa for 20
* Get iPhone and iWatch at 100K
* Buy 1 Shirt and 1 Jeans and get 50% off on Shoes.

![](https://files.readme.io/2230e43-shoes.png "shoes.png")

### Nested sorting logic in cart promotions

Brands were restricted to choose between expiry first or best discount strategy. Now they can decide the primary and secondary parameters for sorting among the two options available.

The promo engine allows brands to set the sorting logic used to decide which promotions to apply if there are multiple promotions applicable on products or carts. Brands could either sort them by Earliest expiry (a promotion that expires first) or Maximum discount, (promotion with the highest benefit).

![](https://files.readme.io/c2115ee-benefit.png "benefit.png")

### Multiple Language Support

**Problem Statement**\
Earlier, brands could display their content on the website and mobile app only in English, which was not understood by people from regions of the world. 

**Solution**\
We supported English as the base language for any configuration or meta around entities, but now we have extended the support to add multiple languages through this feature.

**Scope of the feature**

* **Cart promotions**: Standard or custom fields of offers created using Cart Promotions.
* **Store**: Store-related fields.

![](https://files.readme.io/f2d16da-fields.png "fields.png")

**Use Case**\
**Show promotion and store details in org's preferred language**: Orgs with an online presence (web/mobile app) in languages, other than English, can add translations for the required fields of cart promotion in their preferred language and show translated text on their website using APIs. 

**Before starting**

* You will need to enable the multi-lingual feature for the org.
* Have the support for different languages that you wanted to use. 
* Enable the fields (of cart promotion or stores) for which you need translations.\
  For this, you need to create a JIRA ticket and assign it to the support or project management team with the complete details of the requirement.

*It might take 24 to 48 working hours to enable multi-language/fields for tranlation for the org.*

**Adding translation content**

To navigate to this feature, in the Organization Settings, find an option titled Tools and click on Localize page where you will find the multi-lingual configuration. 

![](https://files.readme.io/e0d0ac6-heree.png "heree.png")

**APIs to fetch details in your preferred language**

*Get configs of a promotion* 

<Table align={["left","left"]}>
  <thead>
    <tr>
      <th>
        Request Type
      </th>

      <th>
        GET
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Headers
      </td>

      <td>
        Content-Type: application/json\
        X-CAP-API-AUTH-ORG-ID: \{\{orgId}}\
        Authorization: \{\{basic auth}}\
        Accept-Language: \{\{languagecode}}
      </td>
    </tr>
  </tbody>
</Table>

<HTMLBlock>{`
{host}/api_gateway/v1/promotions/config?promotionIds={promotionId}
`}</HTMLBlock>

<Table align={["left","left"]}>
  <thead>
    <tr>
      <th>
        Request Type
      </th>

      <th>
        GET
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Header
      </td>

      <td>
        Content-Type: application/json\
        X-CAP-API-AUTH-ORG-ID: \{\{orgId}}\
        Authorization: \{\{basic auth}}\
        Accept-Language: \{\{languagecode}}
      </td>
    </tr>
  </tbody>
</Table>

<HTMLBlock>{`
{host}/api_gateway/v1/promotions/till/{{tillID}}
`}</HTMLBlock>

#### FAQs

**How do we enable multilingual support for our organization?**\
Create a JIRA and assign it to the support or project management team. They will reach out to the respective team. It will take 24-48 working hours to enable this.  

**How to add a new language?**\
Create a JIRA and assign it to the support or project management team. They will reach out to the respective team. It will take 24-48 working hours to enable this.  

**What if I need it for another module apart from promotions and stores?**\
This will require effort from development and will go through the customer request or enhancement process.

### Offer Expiry Reminders

With this release, a notification is sent to a brand's or Capillary's POC before an offer expires. You can now change coupon expiry, issual, redemption settings based on the performance/ usage of coupons. For more details, click [here.](https://docs.capillarytech.com/docs/send-offer-expiry-reminders)

![](https://files.readme.io/2009d85-HERE.png "HERE.png")

### Message Delivery Status

**Problem Statement**\
When an org sends out a campaign message, the org used to receive a delivery report on whether the message was successfully sent or not after 12-24 hours. But customers needed an immediate response. This delay issue contributed to 30%-40% of the gateway issues.

**Solution**\
You can now see the time taken to update the delivery report on the Campaign's Message listing page. In case the delivery rate is not updated even after 12-24 hours, you can raise a ticket. For more details, click [here.](https://docs.capillarytech.com/docs/message-delivery-status)

![](https://files.readme.io/5a9f4da-HE.png "HE.png")

## June Releases

### Promo Engine - Enable cart & catalog promotions

Promo Engine is designed to change the way modern-day promotions are run & managed in-store.

As one of the newly introduced incentive mechanisms offered by Capillary. It brings together Capillary’s market-leading capabilities like event-driven rule-based engine, AI-powered personalization & propensity models, product and activity-based offers, cross-category upselling, and an array of benefits delivering instant gratification at the time of checkout.

**What challenges does it address?**

*Lack of personalization in POS promotions*\
Promotions so far have been a means of mass incentivizing customers on popular products. Modern-day POS’s offer it as a mainstream hook for in-store purchases rather than loyalty building. Customization at scale has become one of the key differentiators to gain customer loyalty and build relationships.

*Limitations imposed by technology at hand to optimize discounts*\
Configuring promotions based on real-time events and customer segments is a luxury few can afford. Even then it is nearly impossible to factor in all variables. 

**How does Promo Engine solve the problem?** 

<Table align={["left","left","left"]}>
  <thead>
    <tr>
      <th>

      </th>

      <th>
        Brand
      </th>

      <th>
        Customer
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Personalize Promotions
      </td>

      <td>
        * Tageted promotions  
        * Discount optimization  
        * Flexible program setup  
        * Diverse benefits 
      </td>

      <td>
        * Personalized experience  

        * Instant gratification  

        * Relevant offers & more visibility 
      </td>
    </tr>

    <tr>
      <td>
        Convenient setup & ease of usage
      </td>

      <td>
        * Manage all from one place  

        * Create & optimize on the go  

        * Advanced budgeting control 
      </td>

      <td>
        * No OTP or coupon code  
        * Faster checkout 
      </td>
    </tr>

    <tr>
      <td>
        Visibility & Control
      </td>

      <td>
        * Real-time monitoring  

        * Measure and optimize spends  

        * Multivariate testing 
      </td>

      <td>
        * Activate/deactivate  
        * Earn or exchange points for rewards 
      </td>
    </tr>
  </tbody>
</Table>

**Sample use cases**

Fashion retail brands can go beyond popular small ticket items and think more about driving experience to build loyalty

* **Know them better and engage more** - Customers increasingly recognize the value of their data. Offer rewards and better experience as motivation to share their data. For eg. Unlock 10% off Denim products up to $20 on date of birth update or email address update
* **Milestone based** - Get 10% off on the next 5 transactions(min cart amount of $100) once you complete $1000 in annual purchase
* **Experiential hooks** - Gift matching accessories or products to create that experiential hook and gratification. Shop for clothing products worth $200 and get a free Duffle Bag or anti-theft bag

Grocery or supermarket chains can incentivize frequent shoppers with seasonal promotions and upsell long-tail products or bundle them with their regular purchases. 

* **Day & Time-based** - Get an additional 5% off on your grocery purchases above $100 when you shop on Wednesdays between. 11 AM - 1 AM. Max discount of $50 in a single transaction and $200 annually
* **Restrictions** - Buy 3 milk packets and get 50% off on custard flavors. Can be availed twice in a single transaction, 5 times in a month, and max 10 times per customer on selected stores
* **Catalog/SKU** -  With every purchase of frozen products get 20% off on bacon. Offer applicable on category purchases above $100

One of the leading global fuel distributors uses Promo Engine to incentivize partners and individuals to purchase products beyond fuel products. It offers fleet owners rewards for when drivers make purchases while the drivers get promotions like free refreshments such as tea, coffee, biscuits, and other similar items on their regular fueling.

*Few of the live promotions,*

* **Segment-based** - 4 wheeler owners can get free filter coffee ($4/-) or mini cappuccino ($5/-) when customers fuel for $100. Avail once in 7 days and max 5 times
* **Quantity or Unit level** - Discount of $1/gallon when you purchase fuel above 2 gallons. Offer capped to 10 gallons/day and a maximum of 100 gallons in a month
* **The points in their wallet can mean much more** - Redeem 2000 points and get Main Grade fuel worth $50. Offer valid till 31 July on select stations on specific fuel categories

[Vertical specific long list of use cases](https://docs.google.com/presentation/d/15CD4gBtYcy_KHpLp5vlo_vxzoLy7PXal2M3ix7xhpVs/edit#slide=id.gddea5dd438_0_0)

#### Supported promotion types

* **Loyalty promotions**\
  Target promotions issued by broadcasting to loyalty customers For e.g. Get 20% off on Arrow shirts for customers who transacted in the last 90 days.

**\* Loyalty earning promotions**\
Issued in the locked state and on customers completing the activity or milestone For eg. Get 100 off on your purchase by updating your email address

* **POS promotions**\
  These are not issued to customers and apply to any loyalty customers who shop at the POS

* **Reward promotions**\
  These are created and linked to the Marvel rewards catalogue of the brand. Customers can get these promotions by simply redeeming their points. For eg. Redeem 1000 points and get a cold coffee free on your transaction worth $10 or more.

### Mobile design mode in email editor

Our "Drag & Drop" email editor empowers marketers to design emails that supports all devices. After introducing mobile design mode, now marketers can switch between Desktop and Mobile view during the email design and see the preview on mobile devices without going into the preview mode.

![](https://files.readme.io/7c9698a-mode.gif "mode.gif")

## May Releases

### Social Media CRM Ads - Facebook & Instagram

**Problem Statement**

* CRM marketers have been using direct channels such as SMS, Email, Mobile Push, etc to engage with their customers, whereas, users are increasingly using social media. Hence, it makes sense for CRM marketers to engage customers where they are.
* Telecom regulations are getting stricter and the cost of SMS is increasing. Hence, for brands, social media is a good alternative to SMS. 

**Solution**

* With this release, we support Social media CRM campaigns in Engage+.

**Features**

* Enables marketers to configure CRM campaigns on Facebook, Instagram, and Facebook partner networks directly from Engage+.
* Currently, Facebook & Instagram Image, Carousel, and Video ads are supported.

**Upcoming**

* Google Display Ads will be supported (Post 3 - 4 quarters).
* Performance reports will additionally reflect KPIs reported by the social channel itself  (Post 3 - 4 quarters).\
  For details, see [Create a Facebook Campaign](https://docs.capillarytech.com/docs/create-a-facebook-campaign#explore).

## March Releases

### Attach both offers and point strategy in a message

**Problem Statement**\
Many organizations prefer sending communication to customers with the following functionality. 

* Assign one or more offers to a message and share the offer details such as offer name and voucher code with customers.
* Show the customer's current points and points nearing to expire (in the next 30 days).\
  Earlier, after attaching an offer to a message, it was not possible to attach Points Strategy (Loyalty Program) to that message. 

Loyalty-related tags such as loyalty points, expiring points (in the next 30 days) were unavailable.

**Solution**\
Now, brands can attach both offers and point strategy to a message. 

To attach both offer and point strategy, follow the steps.

* In Content (Creative + Incentive), hover on Add Incentives to see the following options.
  * Add offers
  * Add points

![](https://files.readme.io/4252c4c-points.png "points.png")

> 📘
>
> To create a new offer, see create new offer section.\
> To know more about points strategy, see the points strategy.

* Select Add offers to include offers to the message and preview the added Offers.

![](https://files.readme.io/7b1351a-offers.png "offers.png")

* Select Add points to include points related information to the message. 
  * In Points Strategy, select the loyalty program to issue points to customers in different tiers.

![](https://files.readme.io/c4d24eb-tiers.png "tiers.png")

* Preview the added Points(loyalty program) and click **Continue**.

![](https://files.readme.io/67b17a5-continue.png "continue.png")

## February Releases

### Support of OU level sender IDs

#### Problem Statement

Many InTouch clients have different org units (OUs) or brands set up within the parent organization. Each of these org units has its own marketing strategy. Hence, clients who have multiple OUs expect Intouch to support OUs across Capillary products.  

As a part of this larger enhancement, Engage+ can now support different sender IDs for each OU to send messages. 

* Only the sender IDs that are tagged to the OU will be available in the message creation flow (refer to step 8). Therefore, an OU will not be able to use the sender IDs of other OUs.
* If no sender ID is tagged to an OU, then the default sender Id of the organization will be auto-populated in the message creation flow(delivery settings).

The following are steps to tag sender IDs to an OU. 

* Navigate to **Organization Settings > Communications & Gateway >  Domains > OU - Sender ID**s Tagging. 

![](https://files.readme.io/8838159-TAGG.png "TAGG.png")

* Navigate to the OU for which you want to configure sender IDs.
* Click Add Sender Domain.
* Choose the Sender Domain in the first dropdown list. 

![](https://files.readme.io/5e34141-LIST.png "LIST.png")

* In GSM sender IDs, select GSM sender IDs to tag to the sender domain. 
* In CDMA sender IDs, select CDMA sender IDs to tag to the sender domain.
* In Default Sender IDs, select the default sender ID for each network type - GSM and CDMA. While message creation, by default, these sender IDs are selected. 

![](https://files.readme.io/ed72496-SEL.png "SEL.png")

*You can tag the sender Ids that belong to another domain of the OU. For that, repeat steps 2 to 6.*

* Click Save.

Once configured, you can check the default sender IDs for each OU, on **Engage+ > New campaign > New message > Delivery settings.** 

![](https://files.readme.io/5f868c1-DEL.png "DEL.png")

*You can also select any of the other sender Ids that are tagged to the OU.*

## January Releases

### Partner broadcast messages

Partner broadcast message is an extension of the No communication - Incentive Only campaign. 

#### Problem Statement

Brands that already have a third-party system to communicate with customers and prefer using Capillary CRM to manage issue coupons and promotions.  

**Solution**\
We have introduced a new FTP channel as an endpoint to campaigns. With this

* a CSV with user IDs and associated tags will be saved to an FTP folder.
* incentives will be issued to customers but no communication will be sent.

To enable no communication:

* On the campaign Content page, enable \**No communication messages.* 

![](https://files.readme.io/bc97a1a-messages.png "messages.png")

You will see an option to **Add FTP location.**

* Set up the FTP location where the exported file needs to save.
* Click on Add column and select the labels to be exported.
* In Message content, enter the message to send.

Once the message is executed, the customer ID along with the selected labels are exported to the defined FTP location. The last column in the CSV file will have the message content after the labels are resolved for the respective user.

For a step-by-step guide to creating Partner Broadcast Messages, view our help doc

### Viber Channel Support

Viber is one of the most popular messaging apps in the Philippines and we have added this as a new channel in Engage+. This will help multinational companies such as Petron, Shell, Abbot, etc. to target customers wherever is popular.

**Subscription**\
Capillary will provide the brands with the subscription API (Update Subscriptions) to capture Viber consent. This API can be used to update consent that can be captured from the customer from different channels such as:

* Point of Sale where the cashier updates it on behalf of the customer.
* Missed call to a phone number.
* Microsite where customers can provide consent that can be distributed as a Campaign or through in-store QR Code scan.
* During the registration flow in a Website or App.

**Integration**\
Capillary has integrated with Infobip (gateway) who will be in charge of sending the actual Viber Messages. Viber enablement requires filling up a form with the below details and sharing the following details with Infobip.

* Brands details
* Description of business
* Status Message
* Images
* What type of messages the brands want to send - promotional or transactional or both, etc.

Infobip will create a verified business account on Viber, map it into their system and provide access to the APIs to Capillary for sending messages.

**Creatives**\
With the Business Account, a brand can send:

* Text Message - Limit is 1000 characters
* Text Message + Image\
  Image can be selected from the computer or gallery (Dimensions: 300px x 400px,Size: 10mb)
* Text Message + Image + Button\
  Button Text (20 Characters) & URL for redirection when clicked. URL needs to shart with https\://

![](https://files.readme.io/0bd0cb0-plo.png "plo.png")

**Reporting**

* Only delivery reports are available. 
* Reports on how many customers saw or opened the message are not available.

**Message Throughput**

* The default speed of a Viber instance is 100 msg/sec.

**Pricing**\
The below rates have been negotiated between Capillary and Infobip. The sales/ CS team should add a margin on the below and share with new/ existing customers.

*Country-wise Viber Pricing in Euros* 

| Countries   | Transactional Charge | Promotional Charges | Monthly fee |
| :---------- | :------------------- | :------------------ | :---------- |
| Philippines | 0.0008               | 0.0012              | 200         |
| Thailand    | 0.0048               | 0.0060              | 200         |
| Vietnam     | 0.0075               | 0.0090              | 200         |
| Malaysia    | 0.0070               | 0.0100              | 200         |

**Support Documentation**

* [Creating content for Viber](https://docs.capillarytech.com/docs/create-viber-content)
* [Creating creative or template for Viber](https://docs.capillarytech.com/docs/create-viber-template)

**Future Roadmap:**

* Allow Viber channel in Message Strategy - Personalisation, Channel Optimisation and X-engage
* Setting Viber Consumables in Credit Management
