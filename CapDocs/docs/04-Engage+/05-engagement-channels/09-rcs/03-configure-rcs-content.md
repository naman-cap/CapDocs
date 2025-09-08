---
title: Configure RCS Content
deprecated: false
hidden: false
metadata:
  robots: index
---
# Configure RCS content

To configure rcs content follow the given steps.

1. On Engage+, navigate to the \*\*Creatives \*\*tab.
2. Click **Create new**.

<Note title="Note">
If you want to duplicate an existing template instead of creating from scratch, navigate to \*\*Creatives \*\*> **RCS** tab > Navigate to the respective template > Click more options (...) > Click **Duplicate**.
</Note>

![a662d3de08dd71d7afc110bbd694d1fd243bb54a2b41bf91a4512d26bfe24f6d image](https://files.readme.io/a662d3de08dd71d7afc110bbd694d1fd243bb54a2b41bf91a4512d26bfe24f6d-image.png)

3. In **Creative name**, enter a name for the template.
4. In **Media**, choose the desired media type.
   * **None**: To create a plain text message.
   * **Image**: To create an image message and upload the image from your local system or Gallery.

<Note title="Note">
Image should be in JPEG, JPG, or PNG format, with dimensions up to 1440px × 720px and a maximum file size of 2MB.
</Note>

![e59459f54cc163998d9b8ca9bc0ded24f1ae793d6d2db8679d66d0b9161d8fe2 image](https://files.readme.io/e59459f54cc163998d9b8ca9bc0ded24f1ae793d6d2db8679d66d0b9161d8fe2-image.png)

5. In **Title**, enter the title of the message if needed (supports up to 200 characters). You will see the title preview on the right side as you type.
6. In **Text message**, enter the message content. Insert dynamic text in the message wherever required using **+Add labels**.  It supports up to 2000 characters. You can preview the message on the right-side as you type.
7. Check **Buttons** to add CTA option in the message. Set the **Button text** and **Button link** of the CTA accordingly. Currently, you can have only one CTA.
8. In **SMS message**, you can set the fallback message for customers who could not receive RCS message. Fallback message allows sending  an SMS to customers who could not receive RCS. It could be because Google Communication App is not installed in their device, or using Non-Android phones like iPhone.

   * Use dynamic text in the message wherever required using **+Add Labels**.

   * For DLT enabled brands, you will see an option to **Add SMS creative**.  Just choose an approved template. However, for this you need to log on to the \_Karix \_portal and upload the DLT template for your brand as currently Google does not support DLT Compliance configurations.

   * Click **Preview** to see how the SMS looks like and make necessary changes if required.

![d3f0c07f03f811f8ea3a0dfe49bcd28997cdae1ace732d228c357c18e27f29a8 image](https://files.readme.io/d3f0c07f03f811f8ea3a0dfe49bcd28997cdae1ace732d228c357c18e27f29a8-image.png)

9. Click **Done** to save.

<Note title="Note">
s
* To edit an existing template, on the \*\*Creatives \*\*> **RCS** tab, navigate to the respective template and click **Edit**.
* To delete an existing template, on the \*\*Creatives \*\*> **RCS** tab > Navigate to the respective template > Click more options (...) > Click **Delete**.
</Note>

## Configure an RCS campaign

The steps involved in creating an RCS campaign is very similar to other types of campaigns except in \_Content \_and \_Delivery \_settings.

1. Create a campaign as mentioned [Create a Campaign](doc:create-a-campaign).
2. In **Content**, select an RCS template that you wish to add.

![7f7546f8326438788f87b799efa4359bf2596873278947df444ff84611d1053f image](https://files.readme.io/7f7546f8326438788f87b799efa4359bf2596873278947df444ff84611d1053f-image.png)

3. In **Delivery settings**, you can change the sender ID for Fallback SMS. RCS sender ID is selected by default. By default, it will have the default SMS sender ID configured for the brand.

![e3e3ba3742807949b1fe293c7d602705ab7424a01dc9efb3d56d21e8aad438ee image](https://files.readme.io/e3e3ba3742807949b1fe293c7d602705ab7424a01dc9efb3d56d21e8aad438ee-image.png)