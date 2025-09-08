---
title: Create WhatsApp Template
deprecated: false
hidden: false
metadata:
  robots: index
---
To create Whatsapp template follow the given steps

1. On the **Creatives** page, navigate to the WhatsApp tab. If multiple gateway accounts are configured, a list of available gateway options will be displayed.

![995395d8720a765dfd68443e8d63510a3c12af44187435b85aa59c1a2f83353d image](https://files.readme.io/995395d8720a765dfd68443e8d63510a3c12af44187435b85aa59c1a2f83353d-image.png)

<Note title="Note">
To configure multiple channels on WhatsApp, you have to raise a Jira ticket to Gateway team.
</Note>

2. Once a gateway account is selected, all templates associated with that gateway will be displayed, along with existing options like **Create**, **Filter,** and **Search**.

![e5d4e7a208499f199b8d55590f3a163cdeb966d4031d6d9630fd02572733f578 image](https://files.readme.io/e5d4e7a208499f199b8d55590f3a163cdeb966d4031d6d9630fd02572733f578-image.png)

3. Click on Create new.

![286acd29791273f511c7f8b3e811f7e7cdb56e42a6b169a92f5527f3cf5e0445 image](https://files.readme.io/286acd29791273f511c7f8b3e811f7e7cdb56e42a6b169a92f5527f3cf5e0445-image.png)

4. In the Template name box, enter a unique name and it can only contain lowercase alphanumeric characters and underscores (_).

> 📘 Tip
>
> Use a name that helps WhatsApp’s reviewer understand the purpose of your message, for example "order_delivery" rather than "template_1"

5. In the **Message language**, select the desired language.
6. In Template category, select the template category from the options available. Your WhatsApp message templates need to be aligned with one of the following categories. Templates that do not align clearly with the specified template type are more likely to be rejected by WhatsApp during the template approval process.

* **Utility:** Share account updates, order updates, alerts and more to share important information.
* **Marketing:** Send promotional offers, product announcements, and more to increase engagement and awareness. If you want to add multiple images, you can choose **Carousel** as the media type, and add multiple images to your template. Start by adding the first image along with the body text and other required details, then save it. Once saved, you'll be able to add additional images to the carousel.

![8db23282a2b75b17ab35809744944fd70c4cbbb0f121e801fa0d9abac05128ee image](https://files.readme.io/8db23282a2b75b17ab35809744944fd70c4cbbb0f121e801fa0d9abac05128ee-image.png)

![72151e932b760afbe7239b71310fde1ac01453b732ff7360f3d20f2f235d79c2 image](https://files.readme.io/72151e932b760afbe7239b71310fde1ac01453b732ff7360f3d20f2f235d79c2-image.png)

![ba5fd598701d81a7c6656025efe71d1054cf82a6fb6860497e804aef3cdbaadd image](https://files.readme.io/ba5fd598701d81a7c6656025efe71d1054cf82a6fb6860497e804aef3cdbaadd-image.png)

* **Authentication**: This communication includes personal authentication information such as receiving OTPs from brands.<br />

5. In Message, type a relevant message that you want to send. The message content should be as per the template category.

* Custom tags in message: WhatsApp does not support custom tags. If you want to use custom tags in the template, replace tag names with numeric values in a sequential order. Once the template is approved, you can replace numeric values with the actual tags before sending.
  For example, If your message is: Hi \{`\{firstname}}`, here is your voucher \{\{voucher_code}} for our EOSS.
  You need to send it as: Hi \{\{1}}, here is your voucher \{\{2}} for our EOSS.
* Support for Special Characters: WhatsApp supports special characters in message templates. This ensures that messages are displayed correctly across all devices, improving readability and preventing formatting issues in customer communications.
  For example: Hi \{\{1}}, your payment of ₹1,250 has been received successfully.
  Dear \{\{1}}, your transaction ID \{\{2}} for ₹500 on 12 March 2025 was successful.
* Add links in your template: You may send URLs in a template. For example, “Thanks for registering with Demo Business. To continue, click on \<[https://app.example.com”](https://app.example.com”)>. For recipients to see the preview of the link in the message, you need to have an Official WhatsApp Business Account.
* Header and footer in messages: You can use the header and footer message option to keep the conversation engaging. For example, if you set the header "Hi `{{firstname}}`" and footer "Get well soon", the message appears as shown in the below figure:

![b8dbd4dc9424b81566f92ed2c9d479c0842804af99cbd1500cde1f0292990dff image](https://files.readme.io/b8dbd4dc9424b81566f92ed2c9d479c0842804af99cbd1500cde1f0292990dff-image.png)

<Note title="Note">
As per the Meta policy, you can add a maximum of one variable for the header. For the footer there is no variable option.
</Note>

* **Quick reply** in messages - You can add quick reply to send pre-defined responses or actions with a single tap. This helps to get more number of responses and saves time for the user.

![bfa8f6ab49424636d83ff5c0b0fa4ed1889334006942352776822fd407d1fc0a image](https://files.readme.io/bfa8f6ab49424636d83ff5c0b0fa4ed1889334006942352776822fd407d1fc0a-image.png)

<Note title="Note">
s
* You can select the content language provided by WhatsApp.
* You can upload a image with a size limit of up to 5MB. Supported formats: JPEG, JPG, PNG.
* You can upload a video with a file size limit of up to 16MB. Supported Format: MP4.
* You can upload a document with a size limit up to 16MB. Supported Format: PDF.
</Note>

6. Click on Send for approval.
   Capillary then sends the template to WhatsApp for approval. You can check the status of the template:

* Awaiting Approval: The template is under review and yet to be approved by WhatsApp as per their norms. (Orange dot)
* Approved: The template has been approved successfully. You can start using approved templates.  (Green dot)
* Rejected: The template is not approved. Check if the template is as per the WhatsApp guidelines. Modify the template accordingly and send it for approval again. (Red dot)

![2150025a16b75e26b2704856fdfa14ab3a49cb138ee76b3b033a72807bec2caf image](https://files.readme.io/2150025a16b75e26b2704856fdfa14ab3a49cb138ee76b3b033a72807bec2caf-image.png)

## Message template approval criteria

Your template text should make it clear to the end-user why they received your message.

### Tips and guidelines

Here are some guidelines for increasing the odds of getting your template approved:

* Placeholders must have double curly braces, such as `{{1}}`; single curly braces will not work.
* Templates must have a specific, self-evident purpose.
  For example: “\{\{1}} \{\{2}}” would be rejected because it could be abused to spam users. You need to surround the parameters with information so that it’s clear what type of information will be inserted.
* Templates should be concise and convey only the necessary information that aligns with the template category. We suggest getting feedback from others to ensure that the template text is clear.
* Templates must not have any grammatical or spelling mistakes. Templates that include even minor spelling or grammatical mistakes are likely to be rejected by WhatsApp.
* Templates should be tagged with the appropriate category and language.
* Once the template is approved, it is available in the WhatsApp tab and has a green dot next to it indicating that the template has been approved. You can then use it to broadcast messages to your customer base. You can also change the dynamic tags after the template has been approved accordingly.

<Note title="Note">
Once you submit a template, it cannot be edited.
</Note>

### Probable reasons for template rejection

* The message template(s) contain content that violates WhatsApp’s Commerce Policy.
* The message template(s) contain content that violates WhatsApp’s Business Policy
* Do not request sensitive identifiers from users. For example, do not ask people to share full length individual payment card numbers, financial account numbers, National Identification numbers, or other sensitive identifiers. This also includes not requesting documents from users that might contain sensitive identifiers.
* A survey after an experience is fine, but do not submit a survey or poll to collect unrelated data from users.
  Example: “Hi, we're interested in knowing how you feel about certain food groups. Do you mind participating in a survey?”
* The message template(s) contain potentially abusive or threatening content

### Examples of approved and rejected message templates

**Approved message templates**

* Welcome \{\{1}}. What company do you work for?
* Your \{\{1}} appointment is coming up on \{\{2}}.
* Your \{\{1}} appointment is coming up on \{\{2}}. Reply with \{\{3}} or \{\{4}}
* Unfortunately your pending booking did not go through.
* No charges were made to your bank account.
* You can try to rebook the hotel again.
* We sincerely apologize for the inconvenience.
* Rejected message templates

The following templates don’t provide sufficient detail on how they will be used

Reminder: \{\{1}}

\{\{1}} was added

\{\{1}}, \{\{2}}!

* Spam message templates

  The following templates are considered spam, as they do not make it clear to the user why they are receiving this message.

  I am Jenn, the virtual assistant.

### Guidelines for using WhatsApp for business

* You should not spam your customers all at one, instead you should start slow so that customers who are not interested can unsubscribe instead of blocking permanently.
* Your message should be in sync with the notification category otherwise the chances of not getting it approved increases.
* WhatsApp limitation only allows 120 msgs/sec (rate-limit) and Capillary suggests to send up to 25-60 msgs/sec.
* You can increase this throughput by having multiple phone numbers but this is not suggested as it makes it difficult to improve ratings for businesses.

For information on Generate OTP APIs, refer to the [API documentation](https://docs.capillarytech.com/reference/otp) .
