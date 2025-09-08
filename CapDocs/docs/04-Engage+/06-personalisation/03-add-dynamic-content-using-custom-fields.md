---
title: Add Dynamic Content Using Custom Fields
excerpt: ''
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
You can use organization-level custom field tags in your email and create dynamic content based on the organization.

**Note:** This is available only for the orgs that has enabled the Liquid feature

# Use Case

WellCo, a company focused on employee wellness, operates across 100+ organizations (child orgs). Employees are grouped under their respective child organizations and access the WellCo mobile application.

WellCo organizes company-wide challenges and missions to encourage healthy habits among employees. Communications for these activities—such as emails—are primarily sent from the parent organization. However, each employer organization has its own unique branding requirements, including specific logos, colors, headers, and footers, which must be reflected in the communications sent to their employees.

For example:

* **WellCo-Branded Communication**: Emails sent under WellCo’s branding display its corporate logo, colors, and header/footer design.
* **Employer-Specific Communication**: Emails sent to employees of specific organizations (e.g., Company Alpha) display their unique branding, such as a distinct logo, color scheme, and header/footer elements.

To address this, organization-level custom fields can be created and used in the email templates to dynamically personalize the content.

## Creating Dynamic Content

To create dynamic headers, footers, or other personalized content in your emails, follow these steps:

1. **[Create the required custom fields using API](https://docs.capillarytech.com/reference/create-a-custom-field)**:\
   These custom fields hold organization-specific information, such as logo, branding color, or company name. Since these APIs are internal, you must contact the Capillary Product Support team to configure and create these fields.

2. **Configure the email template**:\
   While setting up the email template, navigate to the *Labels* section and select **Organization Custom Fields**. Choose the relevant fields to include dynamic content in your email.
   * For example:
     * To display the employer’s brand name in the header, select the custom field for *Brand Name*.
     * To apply organization-specific branding colors, use the respective custom field for *Brand Color*.

When the communication is sent, the platform automatically adjusts the email content—such as headers, footers, and other elements—based on the organization’s branding.

![3a9f571c956779ad1d90725f3e47d25635924caa1db7533b2479b92dab93d944 Organisation custom field](https://files.readme.io/3a9f571c956779ad1d90725f3e47d25635924caa1db7533b2479b92dab93d944-Organisation_custom_field.png)

> 🚧 Note
>
> Make sure that there are no error in the custom field created, else the tags can cause error in the email.
>
> ![](https://files.readme.io/aa11e868f7d8a5dc5898aba974d6132968c19f54076573c5f926b36e522ec871-image.png)