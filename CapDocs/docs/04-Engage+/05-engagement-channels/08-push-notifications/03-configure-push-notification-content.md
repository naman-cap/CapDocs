---
title: Configure Push Notification Content
deprecated: false
hidden: false
metadata:
  robots: index
---
A push notification template allows you to design and organize reusable notifications.
With pre-made templates, you can quickly deploy consistent and effective push notifications across various campaigns and journeys.

To configure push notification content, follow these steps:

1. In the **Content** section of the campaign creation workflow, select **Add creative**
2. In the **Creative templates** section, select **Push notification**.

   ![016273b220d09b459b48eaf146034af039b904291950e98667629ae56de78f59 image](https://files.readme.io/016273b220d09b459b48eaf146034af039b904291950e98667629ae56de78f59-image.png)
3. Choose the **Mobilepush Account** to send the content.
4. Select **Create new** to begin creating a new push notification creative or select an exisiting template.

   ![cd24451f974bf27e6b53b1e9224e18e1c0bf0120bff9af630d0569c987357aa0 image](https://files.readme.io/cd24451f974bf27e6b53b1e9224e18e1c0bf0120bff9af630d0569c987357aa0-image.png)
5. Enter the following information for the push notification. The fields are as follows:

   | Field         | Description                                                                                                                                                                                                                                           |
   | :------------ | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
   | Creative name | Relevant name for the push notification creative template. To add a label, select + Add labels and choose a label from the drop-down list. Refer to the documentation for more information on [labels](https://docs.capillarytech.com/docs/labels#/). |
   | Title         | Title (heading) for the push notification                                                                                                                                                                                                             |
   | Message       | Content for the push notification. To add a label, select + Add labels and choose a label from the drop-down list. Refer to the documentation for more information on [labels](https://docs.capillarytech.com/docs/labels#/).                         |

   <br />

   ![77cd8b3f5398141f8684114e8cab02d0b384de2278b17fba7033e32ec29671f2 image](https://files.readme.io/77cd8b3f5398141f8684114e8cab02d0b384de2278b17fba7033e32ec29671f2-image.png)
6. From the Media type dropdown list, select the type of media to include in the push notification. The following options are available:

   <Table align={["left","left","left"]}>
     <thead>
       <tr>
         <th style={{ textAlign: "left" }}>
           Media type
         </th>

         <th style={{ textAlign: "left" }}>
           Description
         </th>

         <th style={{ textAlign: "left" }}>
           Format and size information
         </th>
       </tr>
     </thead>

     <tbody>
       <tr>
         <td style={{ textAlign: "left" }}>
           Image
         </td>

         <td style={{ textAlign: "left" }}>
           Include a static image in the push notification message.
         </td>

         <td style={{ textAlign: "left" }}>
           Dimensions: Up to 2048 x 2048 pixels
           Formats: JPEG, JPG, PNG.
           GIF is unsupported.
         </td>
       </tr>

       <tr>
         <td style={{ textAlign: "left" }}>
           Video
         </td>

         <td style={{ textAlign: "left" }}>
           Include a video in the push notification message.
         </td>

         <td style={{ textAlign: "left" }}>
           Formats: 3GP, MP4, MOV, M4V
           Duration: Up to 600 seconds.
           File size: Up to 200 MB.
         </td>
       </tr>

       <tr>
         <td style={{ textAlign: "left" }}>
           Carousel
         </td>

         <td style={{ textAlign: "left" }}>
           Include multiple static images in the push notification message. Carousel videos and actions for each carousel are unsupported.
         </td>

         <td style={{ textAlign: "left" }}>
           Dimensions: Up to 2048 x 2048 pixels
           Formats: JPEG, JPG, PNG
           Count: Up to 10 individual images.
         </td>
       </tr>
     </tbody>
   </Table>

   <br />

   ![cf5e7ec7ef6270941bdce433786314ac75e4a3de0a86cd66d9df688ae5ee3fd0 image](https://files.readme.io/cf5e7ec7ef6270941bdce433786314ac75e4a3de0a86cd66d9df688ae5ee3fd0-image.png)
7. To add a link that opens when a user selects the notification body, select **Action on click of notification body**. It is recommended to either add an action on click or a call to action button.

   1. Select the link type.
   2. For a <Glossary>deep link</Glossary>, select it from the dropdown list and provide the URL keys if required.
   3. For an External Link, enter the URL.

      ![f78c959f55aa8a956f2f9df3f77168b6e3a9eb317c17b0b38522110d3027d35e image](https://files.readme.io/f78c959f55aa8a956f2f9df3f77168b6e3a9eb317c17b0b38522110d3027d35e-image.png)
8. Select **+ Add primary button** to add a call-to-action (CTA) button to the push notification message. You can add one primary CTA button per template. It is recommended to either add an action on click or a call to action button.

   1. In the **Primary button text** box, enter a title for the button.
   2. Select the link type.
   3. For a <Glossary>deep Link</Glossary>, select it from the dropdown list and provide the <Glossary>URL key</Glossary> if required.
   4. For an External Link, enter the entire URL.
   5. Select **Save** to add the button or **Delete** to discard your changes.

      ![23a244167eb04bc9fbb8d7e7a0f694486a68eade05a3d8001671aaf617ab6548 image](https://files.readme.io/23a244167eb04bc9fbb8d7e7a0f694486a68eade05a3d8001671aaf617ab6548-image.png)
9. Preview the push notification on the right-hand side.

   ![2579f04f03641e4041a429e64f0edc7d2eed71fecbc0da7addd641d02ec67c54 Screenshot 2025 08 22 at 3](https://files.readme.io/2579f04f03641e4041a429e64f0edc7d2eed71fecbc0da7addd641d02ec67c54-Screenshot_2025-08-22_at_3.04.55_PM.png)
10. Select **Save Template** to save the changes.
    > 👍 Tips
    >
    > * Select **Same content for both platforms** to synchronise changes between iOS and Android templates.
    > * There is no character limit for push notifications. However, ensure the content is added appropriately and displays correctly. For more information on title guidelines for push notifications, refer to the [material design documentation](https://m1.material.io/patterns/notifications.html#) for Android and the [Apple developer documentation](https://developer.apple.com/design/human-interface-guidelines/notifications) for iOS.
    > * Make sure that all tags contain data. Inconsistency in the tags will result in a validation error.
    >
    >   ![aa11e868f7d8a5dc5898aba974d6132968c19f54076573c5f926b36e522ec871 image](https://files.readme.io/aa11e868f7d8a5dc5898aba974d6132968c19f54076573c5f926b36e522ec871-image.png)

## Supported formats and restrictions for push notification media content

The table below describes the supported formats, dimensions, duration and file size for various types of push notification media content

| Media Type   | Formats Supported  | Dimensions               | Duration          | File Size    |
| ------------ | ------------------ | ------------------------ | ----------------- | ------------ |
| **Image**    | JPEG, JPG, PNG     | Up to 2048 x 2048 pixels | -                 | -            |
| **Video**    | 3GP, MP4, MOV, M4V | -                        | Up to 600 seconds | Up to 200 MB |
| **Carousel** | JPEG, JPG, PNG     | Up to 2048 x 2048 pixels | -                 | -            |
