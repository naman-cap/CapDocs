---
title: Overview
deprecated: false
hidden: false
metadata:
  robots: index
---
The Capillary–Adobe integration provides a **ready-to-use connection** between **Capillary’s Loyalty Platform** and **Adobe Experience Platform (AEP)**, including **Adobe Real-Time CDP**. This integration enables brands to synchronize customer profiles and event data, allowing for the creation of personalized marketing campaigns across various channels, including email, SMS, push notifications, and in-app messages.

This integration enables **near real-time, bidirectional data exchange**:

* Loyalty and customer data from Capillary flows into Adobe for advanced segmentation, journey orchestration, and analytics.

* Audience segments from Adobe flow back into Capillary to power targeted loyalty campaigns.

![1f82440768d9b9118a5f032a76980c933ac95efd609f9ff52219d8a2e3a0e198 AdobeCap Integraton](https://files.readme.io/1f82440768d9b9118a5f032a76980c933ac95efd609f9ff52219d8a2e3a0e198-AdobeCap_Integraton.png)

**Note:** At present, only data flow from Capillary to Adobe is supported.

## **Use cases**

* Build **personalized cross-channel campaigns** using loyalty data from Capillary inside Adobe.

* **Import Adobe segments** into Capillary to launch loyalty offers for refined customer groups.

* **Enhance journey orchestration** by combining loyalty and transactional data with Adobe Analytics.

* **Optimize engagement** with insights into loyalty program effectiveness and customer lifecycle behavior.

## **Features**

* **Ready-to-use integration**: Requires only one-time setup

* **Near real-time data exchange**: Supports **bidirectional sync** between Capillary Loyalty and Adobe [AEP](https://experienceleague.adobe.com/en/docs/experience-platform), [RTCDP](https://experienceleague.adobe.com/en/docs/real-time-customer-data-platform), and [Journey Optimizer](https://experienceleague.adobe.com/en/docs/journey-optimizer)

* **Historical data migration**: One-time export from Capillary via Insights+ to Adobe AEP

* **Event-driven synchronization**: Loyalty events (e.g., customer updates, transactions, tier changes) trigger flows to Adobe

* **Comprehensive data handling**: Supports the transfer of profile data and event data

* **Flexible schema mapping**: Uses **XDM-compatible schemas** (standard structure of the data to be ingested by Adobe)

* **Secure API integration**: Data pushed to Adobe via **authenticated Streaming Ingestion APIs** (client ID/secret + token)

* **Robust monitoring and logging**: Real-time dashboards for errors (auth, API limits, network failures)

* **High reliability and scalability**: Supports **100K+ transactions/day** with built-in resilience

## **Integration Components**

**Capillary**

* **Neo** - Processes streamed events, performing payload enrichment (loyalty metadata) and transformation before sending to Adobe.
* **Connect+**: Handles the initial setup process, data mapping, and enables the data ingestion to Adobe

**Adobe**

* **Source Connectors (Batch, Streaming):** Ingests bulk data and streamed events from Capillary. This includes a CDP component for storing loyalty data.
  * **Adobe Experience Platform (AEP) for Personalized Communications:** Utilizes Campaign, Audience, Journey, and Analytics functionalities to deliver personalized communications (Email, SMS, Push).
  * **Destination Catalog (Capillary Audience Destination):** Facilitates audience synchronization, sending segments generated in Adobe back to Capillary for targeted loyalty actions.

## **Data flow**

### **From Capillary to Adobe**

* **What flows**: Profiles, loyalty balances, rewards, transaction history.

* **How**: Event-driven triggers from Capillary → Neo Flow transformation → Adobe Streaming APIs.

* **Additional**: One-time historical migration of existing data via Insights+.

### **From Adobe to Capillary**

* **What flows**: Segments and customer attributes.

* **How**: Exported via SFTP/S3, ingested by Capillary.

* **Usage**: Enables refined targeting and loyalty promotions.

**Note:** This feature is not supported now and will be available in future updates

<br />

## **Supported event types**

The integration supports both profile changes and transaction events. Whenever a profile is updated or a customer performs an action, the relevant event is sent to Adobe.

Supported events include:

* `pointsIssued`

* `pointsRedeemed`

* `pointsExpired`

* `pointsExpiryReminder`

* `pointsExpiryChange`

* `tierUpgraded`

* `tierDowngraded`

* `tierRenewed`

* `tierDowngradeReminder`

* `customerAdded`

* `customerUpdated`

* `transactionAdded`

* `transactionUpdated`

* `promotionEarned`
