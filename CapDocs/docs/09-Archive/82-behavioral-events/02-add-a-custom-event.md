---
title: Add a Custom Event
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
Create custom events if you want to capture specific details that are not available in standard events. You can use both standard and custom attributes to create custom events.

The following are the steps involved in publishing a custom event.

![e815ee4 dUuQoXz5SWIRX23Mwh K5YPqrXm1EvmjLQ](https://files.readme.io/e815ee4-dUuQoXz5SWIRX23Mwh-K5YPqrXm1EvmjLQ.png)

To create a custom event, follow these steps.

1. Log on to InTouch
2. Go to (Profile Icon)> **Organization Settings**> **Master Data Management** > **Data Model** > **Behavioral Events**.
3. Click + **Add Events**.

![f32e749 F3kzye7qDfyG7dbMsu5i7gxqCaT2CRYZtQ](https://files.readme.io/f32e749-F3kzye7qDfyG7dbMsu5i7gxqCaT2CRYZtQ.png)

4. Click **Create New Event** and follow these steps

![8810f9e ortmCphv2j0CSeZQOjW53epOcfS5W80BRQ](https://files.readme.io/8810f9e-ortmCphv2j0CSeZQOjW53epOcfS5W80BRQ.png)

* In **Event Name**, specify a name for the event without any space or special characters. For example, DemoEvent
* In **Display Name**, specify a name that you want to see on the event.
* In **Description**, specify a short description of the event.

5. Click + **Add Attribute** to add event attributes and follow these steps.

![1bb86c2 DgOUG4twowY74  6cminjTtApQVVKmLiAA](https://files.readme.io/1bb86c2-DgOUG4twowY74-_6cminjTtApQVVKmLiAA.png)

* In **Name**, specify an appropriate name for the attribute. **Customer Identifier is a mandatory attribute for a custom event**.
* In **Data Type**, choose the type of the attribute.

<Table align={["left","left"]}>
  <thead>
    <tr>
      <th>
        TYPE
      </th>

      <th>
        DESCRIPTION
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        CUSTOMER IDENTIFIER\*

        (MANDATORY)
      </td>

      <td>
        This is a mandatory attribute for an event and is used to identify an existing customer and also to register a new customer if required. 

        You need to configure identifier type, source, and associated source account.

        * Customer Identifier: Choose the identifier type from the available options - Mobile number, email ID, external id, WeChat ID, Martjack ID.
        * **Source**: Choose the source from which you want to identify customers. Facebook, WebEngage, WeChat, Instore, Martjack, TMall, Taobao, JD, e-Commerce, Website, Line, and other sources.
        * **Source Account**: For sources with multiple accounts, such as WeChat or Facebook, choose the desired account to identify registered customers from that source account.
        * **Add customer if not available**: Enable this option to automatically register new customers (in loyalty program) that are captured through the event.

        For example, if you set customer identifier as email ID, and Source as InStore, 

        * when an email id that is already registered on InStore is identified, the data is tagged to the customer and saved in the Capillary system
        * when a new email id identified, the customer will be first registered **if Add customer id not already present** is enabled. The event details tagged to the customer before saving the data.
      </td>
    </tr>

    <tr>
      <td>
        Enum
      </td>

      <td>
        Choose this to capture the predefined values for the attribute. In POSSIBLE VALUES enter the supported values for the field separating each by a comma (do not leave space after a comma). For example, if Name is Hobby, you could have the values Music,Sports,Fishing,Archery,Gardening,Others.

        Enum is a data-type consisting of a set of predefined values.
      </td>
    </tr>

    <tr>
      <td>
        Till Code
      </td>

      <td>
        Choose this to capture Till codes.
      </td>
    </tr>

    <tr>
      <td>
        Coupon Code
      </td>

      <td>
        Choose this to capture coupon codes and configure the Regex (regular expression) for coupon codes accordingly.
      </td>
    </tr>

    <tr>
      <td>

      </td>

      <td>
        A customer identifier attribute is required for any custom event.

        Choose this to capture customer identifiers, associated sources, and source accounts from which the event is triggered.  

        * \*NOTE\*\*: Customer Identifier capturing is mandatory for custom events. You cannot save an event without this attribute.

        * \*CUSTOMER IDENTIFIER\*\*: Mobile number, email ID, external id, WeChat ID, Martjack ID.

        * \*SOURCE\*\*: Facebook, WebEngage, WeChat, Instore, Martjack, TMall, Taobao, JD, e-Commerce, Website, Line, and other sources.

        * \*SOURCE ACCOUNT\*\*: For sources with multiple accounts such as WeChat and Facebook, choose the account that you want to associate with the attribute.

        * \*ADD CUSTOMER IF NOT AVAILABLE\*\*: Enable this option to automatically register new customers (in loyalty program) that are captured through the event.
      </td>
    </tr>

    <tr>
      <td>
        Date
      </td>

      <td>
        Choose this to capture date values. The following are the different date formats supported.

        yyyy-MM-dd'T'HH:mm:ssXXX, yyyy-MM-dd'T'HH:mm:s.S, yyyy-MM-dd HH:mm:ss, yyyy-MM-dd, dd-MM-yyyy HH:mm:ss,\
        MM/dd/yyyy HH:mm:ss, yyyy/MM/dd HH:mm:ss, yyyy/MM/dd, dd-MM-yyyy, MM/dd/yyyy, yyyyMMdd HH:mm:ss, dd-MMM-yy, yyyy-MM-dd'T'HH:mm:ss, EEE MMM dd HH:mm:ss z yyyy, MMMM,dd,yyyy, MMMM,dd, and yyyy-dd-MM HH:mm:ss.
      </td>
    </tr>

    <tr>
      <td>
        Product SKU
      </td>

      <td>
        Choose this to capture product SKUs or item-codes.
      </td>
    </tr>

    <tr>
      <td>
        Product Brand
      </td>

      <td>
        Choose this to capture product brands.
      </td>
    </tr>

    <tr>
      <td>
        Product Category
      </td>

      <td>
        Choose this to capture product categories.
      </td>
    </tr>

    <tr>
      <td>
        String
      </td>

      <td>
        Choose this to capture free-flowing text that could contain alphabets, numbers, and spaces.
      </td>
    </tr>

    <tr>
      <td>
        Double
      </td>

      <td>
        Choose this to capture a double data type.

        *Double is a 64-bit floating value with precision up to 15 decimal places.* 
      </td>
    </tr>
  </tbody>
</Table>

* Enable Required if the attribute is a required field for the event.

![95fb042 FNrJ9W3 qnRxt15SxxLX0osZBZ6dFGtkXw](https://files.readme.io/95fb042-FNrJ9W3_qnRxt15SxxLX0osZBZ6dFGtkXw.png)

* Similarly, click + **Add Attribute** to create more attributes for the event.

6. Click **Next** to continue

![e238203 IZD0WCmx8ca gadqHgGrDRBjLaofQKBL8Q](https://files.readme.io/e238203-IZD0WCmx8ca_gadqHgGrDRBjLaofQKBL8Q.png)

7. Check **EMF Consumer** to show the event in Loyalty Manager, and Bounceback Campaign to reward points, coupons, or just send messages. By default, these events are consumed by Essential Insights.
8. Click **Done** to save the event.
9. Test the event to see whether data is flowing to the system as expected. For example, for the Add to Cart event, open the WebEngage portal, and try adding items to the cart. The system will automatically validate the data and completes the testing process. For detailed instructions, see [Test & Publish Event](https://docs.capillarytech.com/docs/test-publish-event).

![e92ad5a L1wuMKmWmGAyJiemMIOQFGPOKCKOkPeO2g](https://files.readme.io/e92ad5a-L1wuMKmWmGAyJiemMIOQFGPOKCKOkPeO2g.png)

> 📘 The Publish button will be active only once the page is refreshed after pushing the event's data to the system. You need to refresh the page manually.

10. Click Publish to publish the event.

![bebae76 MDHOu8rm4TKSYy1yN7HyDFqhYy0AsR3 2w](https://files.readme.io/bebae76-MDHOu8rm4TKSYy1yN7HyDFqhYy0AsR3-2w.png)

> 📘 * Once the event is published, you cannot edit or delete either standard or custom attributes.
> * After creating, testing, or publishing the custom event successfully you can map it with the source event. For details, refer to mapping custom event to source event.
