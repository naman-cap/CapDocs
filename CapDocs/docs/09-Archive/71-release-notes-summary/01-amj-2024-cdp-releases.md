---
title: AMJ 2024 | CDP Releases
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
# Behavioural Events Lookup API

We have introduced a new API to look up behavioural events and filter using one or more query parameters including event name, customer identifiers, group identifiers (if the event is a user group behavioural event), date range and even the value of attributes of events. For more details on this powerful API, please go [here](https://docs.capillarytech.com/reference/search-events).

# Till Custom Fields

We have introduced custom field support for the till entity. In case you want to capture additional information against a till, you can use custom fields for that purpose. However, please remember that you cannot act on data in custom fields on any of our downstream products. Please go [here](https://docs.capillarytech.com/reference/add-till-with-new-custom-fields) for more details on how to add custom fields against a till.

# Bulk Transaction Update API

You can now update transaction-level custom fields and extended fields and also line-level extended fields (there are no custom fields supported at the line level for now) in bulk using a new [transaction update bulk](https://docs.capillarytech.com/reference/update-transaction-bulk) API. Please read the FAQ section in the document to understand what the API can and cannot do. 

# Update Permissions of Members in a User Group

Another update API - Permissions related to what a member of a user group (v2) can do can now be updated using our new [permissions update API](https://docs.capillarytech.com/reference/update-user-group-permission).

# UI extensions on the Capillary platform (Vulcan Framework)

A brief about Vulcan Framework

Vulcan is a react-based UI framework using which you can create customized UI screens & embed them on Capillary platform. As of now, you can use it to create any react-based UI application behind intouch authentication and embed it on Membercare. Long-term vision is that you would be able to create any UI application & embed it in any intouch module apart from creating external applications.

Overall, we seek to replace our Sharingan framework which was based on PHP tech-stack with this new framework. However, it’s not just the tech-stack upgrade that we get as a part of Vulcan; it is more secure & integrates seamlessly with our Intouch UI. From these UI extension applications, you can access any Capillary API (Intouch APIs, Node APIs, API Extensions based APIs) and UI design elements out of the box.

To know more on how you can create a new application, host it on the Capillary platform & embed it in Intouch UI, check out the documentation on UI extensions [here](https://docs.capillarytech.com/reference/ui-extension).

**Member care Customizations using Vulcan**

Over the past few quarters, we have been receiving a number of customization requests on Membercare. These customizations range from very basic ones like removing a widget from a screen to very complex ones like changing the search functionality/ redoing the layout of Membercare.

To cater to these requests, we have created a Vulcan replica of our existing Member Care product (yes, Vulcan is that powerful!) & are making it available on the platform.\
For now, we are suggesting that if a brand has a huge list of customization requests - you can download the Vulcan replica of Membercare & edit it to suit the brand’s requirements.

However, if there are very few customization requirements - as of now, we would refrain from using the Vulcan replica of Membercare - owing to a few ongoing internal decisions.

Check out how you can completely customize a [brand’s Membercare experience here](https://docs.capillarytech.com/reference/customizing-the-member-care-ui).
