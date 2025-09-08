---
title: Add a Standard Event
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
A standard event is predefined event which has a defined set of attributes. The following illustration shows different steps involved in adding and publishing a standard event.  

![df753b3 3KOTWrUYkKLmY4uaRK0btEwVp3lefBsFNw](https://files.readme.io/df753b3-3KOTWrUYkKLmY4uaRK0btEwVp3lefBsFNw.png)

To configure and publish an event, follow these steps.

1. On the Behavioural Events home page, click **Add Event.** 

![849c366  8QDpYBHBWFu9SdhKLXbNzGXkthzyXkLGA](https://files.readme.io/849c366--8QDpYBHBWFu9SdhKLXbNzGXkthzyXkLGA.png)

2. Navigate to the event that you want to add, click the respective **Add** option, click **Next**, and click **Done**
3. Create attribute mapping if required. Attribute mapping is a way that lets our Capillary system understand the attributes that are created in an event. This is optional and is required only if the attribute names for the event are different in the third-party source account and Behavioural Events platform.

   1. To do attribute mapping, navigate to the event and click **Add Mapping**.

![85659ff MEI3BtoXwGzsUAq2Pqz G3meD xw0sdybw](https://files.readme.io/85659ff-MEI3BtoXwGzsUAq2Pqz_G3meD-xw0sdybw.png)

2. In **Source**, select the source of the event. For now, only WebEngage is supported.
3. In **Event Name,** specify your preferred name for the event.
4. In Attributes, enter the name of each attribute as in the Source(WebEngage). The attributes on the left refer to the names as in the Capillary system.

![9292d6a BB7SOAzn1WjqtK1vsaJ39DgfrKSgY ifNg](https://files.readme.io/9292d6a-BB7SOAzn1WjqtK1vsaJ39DgfrKSgY_ifNg.png)

4. Test the event to see whether data is flowing to the system or not. For example, for the Add to Cart event, open the WebEngage portal, and try adding items to cart. The system will automatically validate the data and completes the testing process.

![ca6aea7 OhTzT9B d4FF22EPlX9UG5L3v1OGNHzgdA](https://files.readme.io/ca6aea7-OhTzT9B-d4FF22EPlX9UG5L3v1OGNHzgdA.png)

> 📘 The Publish button will be active only once the page is refreshed after pushing the event's data to the system. You need to refresh the page manually.

5. Click **Publish** to publish the event

![cbd2252 xA5YytzgOciM5i kQBelfEasLcAj8UuDUg](https://files.readme.io/cbd2252-xA5YytzgOciM5i_kQBelfEasLcAj8UuDUg.png)
