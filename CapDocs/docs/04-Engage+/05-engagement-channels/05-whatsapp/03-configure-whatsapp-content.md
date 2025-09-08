---
title: Configure WhatsApp Content
deprecated: false
hidden: false
metadata:
  robots: index
---
To create WhatsApp content follow these steps -

1. On the **Creatives** page, navigate to the WhatsApp tab. If multiple gateway accounts are configured, a list of available gateway options will be displayed.

![098076a31128548b5638c2f05292ca5eb0e0a4a0a99dea094195694526756bc1 image](https://files.readme.io/098076a31128548b5638c2f05292ca5eb0e0a4a0a99dea094195694526756bc1-image.png)

<Note title="Note">
To configure multiple channels on WhatsApp, you have to raise a Jira ticket to Gateway team.
</Note>

2. Once a gateway account is selected, all templates associated with that gateway will be displayed, along with existing options like **Create**, **Filter,** and **Search**.

![72261b0e52b7911215a5ad8e1a9bcaedecc8630fb68ea808b6ed29c06bcd2424 image](https://files.readme.io/72261b0e52b7911215a5ad8e1a9bcaedecc8630fb68ea808b6ed29c06bcd2424-image.png)

3. Click on Create new.
4. In the Content section, click **Add creative**.
5. Navigate to the **Whatsapp** tab and click **Create New**

![5d786f42f8724ff7cb9bd4e2302cfec389f8d215ccdbb4693c2e51d2a6b32deb image](https://files.readme.io/5d786f42f8724ff7cb9bd4e2302cfec389f8d215ccdbb4693c2e51d2a6b32deb-image.png)

6. In the **Template name** box, enter a unique name and it can only contain lowercase alphanumeric characters and underscores (\_).

<Note title="Note">
Use a name that helps WhatsApp’s reviewer understand the purpose of your message, for example "order\_delivery" rather than "template\_1"
</Note>

**Examples**

* Creating a welcome message where the message template name is welcome and the message is\
  "Welcome \{\{1}}. We look forward to serving you on WhatsApp."
* Creating an order confirmation message where the message template name is Payment\_confirmation and the message is\
  " We have received a payment of \{\{1}}} for your order no. \{\{1}}.”

7. In the **Template category**, select the template category from the options available. Your WhatsApp message templates need to be aligned with one of the following categories. Templates that do not align clearly with the specified template type are more likely to be rejected by WhatsApp during the template approval process.

* **Transactional:** Share account updates, order updates, alerts and more to share important information.
* **Marketing:** Send promotional offers, product announcements, and more to increase engagement and awareness
* **OTP** : It allows you to alert your customers about various updates like shipping, ticket and transportation, reservation, etc.

8. In the **Message language**, select the desired language.
9. In the **Media**, select the type of media. The template supports text, images, video and documents

* For sending a message, select **Text**, and type a relevant message that you want to send. The message content should be as per the template category.

10. Header and footer in messages: You can use the header and footer message option to keep the conversation engaging. For example, if you set the header "Hi `{{firstname}}`" and footer "Get well soon", the message appears as shown in the below figure:

![174ce0ff314feec2ed560b82dc6cbb691513aebcaf98c041234e110c9290ff67 image](https://files.readme.io/174ce0ff314feec2ed560b82dc6cbb691513aebcaf98c041234e110c9290ff67-image.png)

<Note title="Note">
As per the Meta policy, you can add a maximum of one variable for the header. For the footer there is no variable option.
</Note>

11. Buttons(optional): Clickable buttons that will appear below your message.

* **None** - You can select None if you don’t want to display any buttons below your message.
* **Call to action** - Choose the type of action you want the button to perform.

![965992403ed3729ba97dd8124377523a5e58958aa0a2abcf3038029faf45773d Screenshot 2025 06 24 at 5](https://files.readme.io/965992403ed3729ba97dd8124377523a5e58958aa0a2abcf3038029faf45773d-Screenshot_2025-06-24_at_5.52.35_PM.png)

<Note title="Note">
You can now use tags in the Website URL of WhatsApp CTA buttons by selecting the Dynamic option. This allows you to personalize URLs for each customer, such as including a customer ID or offer code in the link.

![60359e0c29206603cba09b6bbe51cd9853b5a12d91f3213aa88a5fc025e4f641 Screenshot 2025 06 24 at 5](https://files.readme.io/60359e0c29206603cba09b6bbe51cd9853b5a12d91f3213aa88a5fc025e4f641-Screenshot_2025-06-24_at_5.58.57_PM.png)
</Note>

* **Quick reply** in messages - You can add quick reply to send pre-defined responses or actions with a single tap. This helps to get more number of responses and saves time for the user.

![798521677a323d96760732f6939fe53f4b1bcb97f864e56f6bd5b4cbad55950c image](https://files.readme.io/798521677a323d96760732f6939fe53f4b1bcb97f864e56f6bd5b4cbad55950c-image.png)

* Custom tags in messages: Whatsapp does not support custom tags. If you want to use custom tags in the template, replace tag names with numeric values in sequential order. Once the template is approved, you can replace numeric values with the actual tags before sending.\
  For example, If your message is: Hi `\{\{firstname}}`, here is your voucher \{\{voucher\_code}} for our EOSS.
  You need to send it as: Hi \{\{1}}, here is your voucher \{\{2}} for our EOSS.
* Add links in your template: You may send URLs in a template. For example, “Thanks for registering with Demo Business. To continue, click on` https://app.example.com`. For recipients to see the preview of the link in the message, you need to have an Official WhatsApp Business Account.
* For sending images, videos or documents, select the desired option and upload the file. You can also drag and drop the file.

![c4141fdfb57c52c0180f9e1b42aa42345fa5031dd80391a2891629374a6d23a2 image](https://files.readme.io/c4141fdfb57c52c0180f9e1b42aa42345fa5031dd80391a2891629374a6d23a2-image.png)

6. Click on **Send for approval**.\
   Capillary then sends the template to WhatsApp for approval. You can check the status of the template:
   * Awaiting Approval: The template is under review and yet to be approved by WhatsApp as per their norms. (Orange dot)
   * Approved: The template has been approved successfully. You can start using approved templates.  (Green dot)
   * Rejected: The template is not approved. Check if the template is as per the WhatsApp guidelines. Modify the template accordingly and send it for approval again. (Red dot)

![a0766752598e307a516f49b93d1397e7f2cdbb09dea95220b218cfccf3afc615 image](https://files.readme.io/a0766752598e307a516f49b93d1397e7f2cdbb09dea95220b218cfccf3afc615-image.png)