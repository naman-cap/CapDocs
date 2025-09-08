---
title: Map Custom Event to Source Event
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
There are some instances where events that come to Capillary's system are not in a format supported by Capillary. For example, the Capillary does not support an event name with a blank space. Suppose an event named Promotion Viewed is coming from WebEngage (source). You need to create a custom event - promotionViewed (custom event name) and map it to Promotion Viewed (source event name) using the event mapping process. 

Behavioral Events lets you map a custom event to a source event.  You can do it at any phase - after creating, testing, or publishing a custom event. You can map the source event name and attributes to a custom event name and attributes stored in Capillary's system.

The following are the different stages of event publishing when you can map a custom event to a source event.

![3ac2475 xDXBrdCdRsMaw2ODtItl072Fdvhn1QPtDw 1](https://files.readme.io/3ac2475-xDXBrdCdRsMaw2ODtItl072Fdvhn1QPtDw_1.png)

## TOPICS ON THIS PAGE

#### [Create custom event](https://docs.capillarytech.com/docs/map-custom-event-to-source-event#create-custom-event-1)

#### [Mapping custom event and their attributes ](https://docs.capillarytech.com/docs/map-custom-event-to-source-event#mapping-custom-event-and-their-attributes-1)

#### [View and modify custom event](https://docs.capillarytech.com/docs/map-custom-event-to-source-event#view-and-modify-custom-event-1)

## Create custom event

To create a custom event, follow these steps. 

1. Navigate to **Organization Settings** > **Master Data Management** > **Data Model** > **Behavioral Events.**
2. In the **All Events** tab, click + Add Event

![6214d0a Cs5Yv6qFG2vvDbGHBSqpoKfFZMnliqdnAA](https://files.readme.io/6214d0a-Cs5Yv6qFG2vvDbGHBSqpoKfFZMnliqdnAA.png)

3. On **Add Events** page, click + *Create New Event* to [create](https://docs.capillarytech.com/docs/add-a-custom-event), [test and publish a custom event with attributes](https://docs.capillarytech.com/docs/add-a-custom-event).

![2088714 ZvMBMRJq11kdmFMRQWy Mz0T1rrU9QNO5Q](https://files.readme.io/2088714-ZvMBMRJq11kdmFMRQWy-Mz0T1rrU9QNO5Q.png)

## Mapping custom event and their attributes

To map a custom event to a source event, follow these steps. 

1. Navigate to **Organization Settings** > **Master Data Management** > **Data Model** > **Behavioral Events.**
2. In the **All Events** tab, search the existing or newly created custom event using the event name.

![e790453  c5Qnu4P5DA5p10SJlfEoh4Yg760hpLU7g](https://files.readme.io/e790453--c5Qnu4P5DA5p10SJlfEoh4Yg760hpLU7g.png)

3. Click +**Add Mapping** to map the custom event with the source event. 
4. On the **Add Mapping** page, choose the source (For example, WebEngage or Custom). Once you save mapping details, you cannot change the source.
5. In **Event Name**, enter the event name of the source to map to the custom event name.
6. Enter the source's event attribute to map the custom event and the source event attributes.

![8febf63 NTDFqPjZMgfwAYmR1LS0scPAx1KSpUZ6IA](https://files.readme.io/8febf63-NTDFqPjZMgfwAYmR1LS0scPAx1KSpUZ6IA.png)

7. Click **Save**.

## View and modify custom event

To view and edit mapping, follow these steps. 

1. Navigate to **Organization Settings** > **Master Data Management** > **Data Model** > **Behavioral Events.**
2. In the **All Events** tab, search your preferred custom event using the event name.
3. Click on the mapped custom event and navigate to the **Mappings** tab to view the event mapping.
4. Navigate to the **Mappings** tab, click the **Edit** icon.
5. Modify the mapping as You can modify the event name and event attributes - the event name and source attributes. The system does not allow to change the source.

![ef948a6 qNKvc4gte2KA6WY53hbI79813oew5bn1Aw](https://files.readme.io/ef948a6-qNKvc4gte2KA6WY53hbI79813oew5bn1Aw.png)

6. Click **Save**.
