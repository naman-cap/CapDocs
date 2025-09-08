---
title: Organization Management
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
# Manage user preference

Use the user profile settings to customize how the InTouch portal appears when you sign in. You can choose your display language, set a default organization if you have access to more than one, and select the module that opens by default.

## Change user profile preferences

To chnage your preferences,

1. Log in to the Capillary InTouch portal.

2. Click the **profile icon** in the top-right corner.\
   The profile menu appears.

   ![3df03698565020f68a5c6ff4972c5c9adb6ff5d0334cfd07680a40398e83e3a3 Edit preferance](https://files.readme.io/3df03698565020f68a5c6ff4972c5c9adb6ff5d0334cfd07680a40398e83e3a3-Edit_preferance.png)

3. Select your username to open the user profile.

   ![09fe2dbd31c7e539c259d24c55caefd0f948797e369d2889c46053553de44410 john doe profile page](https://files.readme.io/09fe2dbd31c7e539c259d24c55caefd0f948797e369d2889c46053553de44410-john_doe_profile_page.png)

4. Click **Edit**.\
   The profile opens.

   ![e5dd8621f5838e55b085ef7119aa6c795f6498ec2fcb6ed01b59cbaf69f13420 Screenshot 2025 08 13 at 3](https://files.readme.io/e5dd8621f5838e55b085ef7119aa6c795f6498ec2fcb6ed01b59cbaf69f13420-Screenshot_2025-08-13_at_3.53.47_PM.png)

5. In the **Language** dropdown, select your preferred language for the current organisation.

   **Note:** You can set a different language for each organisation.

6. If you have access to multiple organizations, in the **Preferred Organization** drop-down, select the default organization that appears after you sign in.

7. In the **Preferred Module** drop-down list, select the module you want to open by default when signing in.\
   **Note:** This setting applies across all organizations you have access to..

8. Click **Save Changes**.

9. Log out and log back in for the changes to take effect.

# Create or modify organization profile information

Capillary admin users set up your organization in the Capillary InTouch platform and create admin users for your organization. These admin users can modify the organization's information such as profile details, time zone, currency, language, country, and much more. This section helps you to create/modify your organization's information based on valid data.

## Access organization profile page

To access the organization profile page, follow these steps.

1. Log on to InTouch of your cluster (India/US/EU/APAC2)
2. Click the **Profile** icon and then click **Organization Settings**.

   ![7f22db8e9a47d67d8da959fd27e989c3a66cd76448d836d9a0d86d588a4d4421 Edit preferance](https://files.readme.io/7f22db8e9a47d67d8da959fd27e989c3a66cd76448d836d9a0d86d588a4d4421-Edit_preferance.png)

The category expands as shown below.

3. Click **Organization Profile**. You will see the following page.

![d41d8a7 w2VWKUsHKYwzLR oOLKm8m5bjj6dn4ySdg](https://files.readme.io/d41d8a7-w2VWKUsHKYwzLR_oOLKm8m5bjj6dn4ySdg.jpg)

4. Click the **Edit** button to modify the profile information. You will see the following page.

## Organization Profile tab

In this tab, you can edit or select the profile information of an organization. Configure all the information with valid data such as address, starting month of the fiscal year, website URL, logo URL, and location of the organization.

<Note title="Note">
Organization Name is selected by default. To change org name, contact the access team.
</Note>

![8e5a95a JCu6pfiPP OT qWWymnEWGtb16si6debNA](https://files.readme.io/8e5a95a-JCu6pfiPP-OT_qWWymnEWGtb16si6debNA.jpg)

To create/modify the organization’s profile information, follow these steps.

1. In **Address**, enter the geographical address of the organization. This is usually the address of the headquarter or the home branch of an organization.
2. In **Fiscal Year Start**, select the starting month of the fiscal year using the drop-down list. A fiscal year can start from April or January depending on organization terms and conditions.
3. In **Org Website**, enter the valid web address of the organization.
4. In **Org Logo**, enter the valid URL of the organization’s logo.
5. In **Org Locale**, select the user interface language for InTouch and other Capillary products using the drop-down list. You can configure the user interface language of Capillary applications InTouch by selecting the option, en\_US (US English), or zh\_CH (Chinese).
6. Click **Submit**.

## Set Org TimeZone tab

This tab lets you set the organization’s default and supported time zones.

<Callout icon="📘" theme="info">
  The base time zone is the time zone of the headquarter or the home branch of the organization. All reporting and data are saved in the Capillary system with the base time zone.
</Callout>

![5a6ea53 es4GdBRyHTUf iwCG0ATJnm8XlWPaIwr8g](https://files.readme.io/5a6ea53-es4GdBRyHTUf-iwCG0ATJnm8XlWPaIwr8g.jpg)

To **create/modify** the organization’s time zone, follow these steps.

1. In **Time Zone**, select each time zone that the organization supports and click add. To remove a selected time zone,  select the time zone from the \{right box} and click remove.
2. In **Base Time Zone**, select the base time zone from the drop-down list.
3. Click **Submit**.

## Org Currency tab

In this tab, you can configure the currency information of an organization using a currency data list.

<Callout icon="📘" theme="info">
  All the transactional information gets converted into the base currency. Capillary shows reporting (where the currency is involved) in the base currency of an organization.
</Callout>

![6e28dc4 tlERkJrGIU98OWw075ydRyBGW6I8yU9SRg](https://files.readme.io/6e28dc4-tlERkJrGIU98OWw075ydRyBGW6I8yU9SRg.jpg)

To create/modify supported currencies of the organization, follow these steps.

1. In **Currency Available**, select each supported currency from the list, and click add. To remove a selected currency, select the currency from the right box, and click remove.
2. In **Base Currency**, select the base currency from the drop-down list.

<Callout icon="📘" theme="info">
  Steps to enable currency conversion for an organization:

  1. Enable currency conversion with CONF\_CURRENCY\_CONVERSION\_ENABLE on the Billing Configuration page.
  2. Add all base currency and supported currencies for the org as mentioned here (Set Org Currency Tab).
  3. Add base currencies to stores as mentioned in Setup Organization Hierarchy.
  4. Update currency conversion ratio for the base currency and supported currencies either through the /v2/currencyratio API or Org Currency Ratio profile (Import Framework).
</Callout>

3. In **Decimal Places for Base Currency** (CONF\_DECIMAL\_PLACES\_FOR\_BASE\_CURRENCY), set the appropriate decimal places for the currency using the drop-down list. This configuration determines the number of decimal places allowed for the base currency. You can set it to a maximum of 3 decimal places. For example, if you configure it to 2 decimal places and a transaction value is 100.567, the system will round it to 100.57 and store it in the database. If set to 0 decimal places, the value will be rounded to 101.\
   *Note: Currencies like Kuwaiti Dinar and Jordanian Dinar support up to 3 decimals; many currencies like the US dollar and European Pound support up to 2 decimal places; whereas, Ariary (Currency of Madagascar) does not support any decimal.*
   **Note:** This is also applicable for line-item level transactional values.
4. Click **Submit**.

## Organization Languages/Countries tab

In this tab, you can configure the language, base language, country, base country, and other country information of the organization. You can use languages to create custom fields and store their values in your preferred language if required.

<Callout icon="📘" theme="info">
  * The language that is used by the headquarter or the home branch of an organization is considered as a base language.
  * The base country is usually where the home branch of the organization is located and supported countries are those in which the organization operates its business. When registering a customer, the mobile number of a customer is validated first with the base country and then with the supported countries.
</Callout>

![70ce673 IpUKx1NYMilh 0fbRg3RLthycda3Xv5bkQ](https://files.readme.io/70ce673-IpUKx1NYMilh-0fbRg3RLthycda3Xv5bkQ.jpg)

To create/modify supported languages and countries of the organization, follow these steps.

1. In **Language Available**, select each supported language from the list, and click add. To remove a selected language,  select the language from the right box, and click remove.
2. In **Base Language**, select the base language using the drop-down list.
3. In **Countries Available**, select each supported country from the list and click add.

Supported countries are those in which the organization is operating its business or supports customers to enroll in the loyalty program. When registering a customer in the organization, our system validates whether the mobile number provided matches with the Regex (regular expression) of any of the supported countries or the base country. To remove a selected country,  select the country from the right box, and click **remove**.

4. In **Base Country**, select the base country using the drop-down list. By default, the base country is considered for registering customers.
5. Check **Include other Country** to support registering customers from any country irrespective of base or available countries set on this page.
6. Click **Submit**.

## Parent Organization Setup tab

In this tab, you can set the parent organization for a child organization. Leave the option to default for a parent organization.

![883ffab upFbuaHGvamHMQsrBt390fls1aBT F nYA](https://files.readme.io/883ffab-upFbuaHGvamHMQsrBt390fls1aBT_F-nYA.jpg)

To create/modify the parent organization for the profile, follow these steps.

1. In **Select Parent Organization**, select the organization name from the drop-down list.
2. Click **Submit**.

## Organization Point of Contact tab

In this tab, you can select Capillary’s point of contact(s) for the organization. These POCs can monitor and manage the organizational account and associated products.

![f029981 upFbuaHGvamHMQsrBt390fls1aBT F nYA](https://files.readme.io/f029981-upFbuaHGvamHMQsrBt390fls1aBT_F-nYA.jpg)

To create/modify the point of contact, follow these steps.

1. In **Capillary POC**, select the contacts from the list that you want to add, and click add. To remove a selected contact,  select the contact from the \{right box} and click remove.
2. Click **Submit**.

## Social tab

In this tab, you can edit the social media platform URLs of the organization.

![](https://files.readme.io/487fd97-zksSdK2G2wG8-FExF6ED3JJylT29DK2nvg.jpg "zksSdK2G2wG8-FExF6ED3JJylT29DK2nvg.jpg")

To create/modify social media URLs, follow these steps.

1. For **Twitter, Facebook, Google +, LinkedIn, RSS, Foursquare, Yelp!, Flickr**, enter the valid URLs of the social media platforms required.
2. Click **Submit**.

To create/modify social media URLs, follow these steps.  For Twitter, Facebook, Google +, LinkedIn, RSS, Foursquare, Yelp!, Flickr, enter the valid URLs of the social media platforms required. Click Submit.

This topic provides information to admin users on how to modify their profile information and change the language for their InTouch account.

Even though there is a language setting option at an organization level, admin users are provided with a privilege to see the Capillary applications of their account in the language they prefer.

For example, if your organization's language is set to Chinese and for your account, as an admin user), the language is set to English, then you will see the applications of your account in English irrespective of your organization's language. However, only admin users have this privilege.

To modify your profile information and language:

1. Log on to InTouch of your cluster (India/US/EU/APAC2)
2. Click the **Settings** icon and then click **Organization Setup**. The category expands showing the available options.

![](https://files.readme.io/35dcca9-Org_Setup1.png "Org Setup1.png")

3. Click **Administrative Users**. You will see the Admin Users page as shown below

![](https://files.readme.io/f84aa2e-Admin_Users1.png "Admin Users1.png")

4. Scroll down to your account and click the respective Edit  option. You will see the profile information.

![](https://files.readme.io/ecaf0c9-Admin_Users2.png "Admin Users2.png")

5. Modify the fields as required and click Create. The purpose for each option is provided in the following table.

| OPTION      | PURPOSE                                                                         |
| :---------- | :------------------------------------------------------------------------------ |
| Title       | Addressing the user (Mr./Mrs./Miss.)                                            |
| First Name  | First name of the user                                                          |
| Middle Name | Middle name of the user                                                         |
| Last Name   | Last name of the user                                                           |
| Mobile      | Mobile number of the user                                                       |
| Email       | Email id of the user                                                            |
| User Role   | Designation/Access level of the user                                            |
| User Locale | Default Language of all the UI elements of Capillary applications for the user. |