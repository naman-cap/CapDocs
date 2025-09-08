---
title: Shopify plugin
excerpt: >-
  You can integrate Capillary with Shopify and activate a loyalty program for
  your website.
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
Navigate to [Capillary Shopify integration](https://apps.shopify.com/capillary-crm-integration) to integrate Capillary plugin into Shopify.

To integrate, perform the following:

1. 1. ```
         introduction – Project Overview
      ```
         1.1              Purpose of this Document\
      The purpose of this document is to give a detailed overview on all the Shopify user flows and how to navigate in the application.\
      1.2              Scope of this Document\
      The scope of this document is to cover the Shopify user flows relating to Ph 1.1 scope.

2. ```
   Plugin Installation steps
   ```
   To install shopify app as publicly we need to publish apps in shopify app marketplace. Second way is to install app in various stores. We can install app from the shopify partner account but the store should be available in the shopify partner account as a development store and the app should also be created in the partner account.

Kindly find below step to create public app in shopify partner:\
Login to Shopify Partner\
Go to apps from left sidebar and click on Create App

Choose Public App from Create App and add App Name, App URL and Allowed Redirection URL. App url will be of server which with domain will pointed, and allowed redirection URL will be app\_url/authenticate

After app created, you will get API key and API secret key that need to be add in  .env file of laravel

Kindly find below step to install app in shopify store from shopify partner account.

Go to apps from left side bar.\
Select app which will created\
Click on Select Store button

You will find list of all development store which will be available in partner account

Click on store in which you need to install app.\
By following all above step you can create public app in install in any development store.

1. SHOPIFY USER FLOWS\
   1.1 Authentication\
   Click on Apps -> Capillary CRM Integration

Click on General Authenticate\
Provide basic Authentication\
Client ID: \***\*\*\*\*\***\*\*\*\*\***\*\*\*\*\***\
Client Secret Key: \***\*\*\*\*\***\*\*\***\*\*\*\*\***\
Base URL of the API: Please contact to the Capillary Team\
Submit CONFIG

View Online store on the front-end:\
Click on the Online stores\
Click on the View your store

1.2 Steps to Configure Themes\
1.2.1 Turn on the App embeds\
Click on the Online Store >> Customize\
Select “Theme settings” and click on “App embeds”.\
Turn on the toggle buttons “Capillary - Setting” and “Capillary - Includes ”. If you are not using Jquery in your code then please turn on the "Capillary - Jquery Files".

1.2.2 To Create Capillary CRM integration CART page With blocks, please follow the below steps:\
Click on the Online Store >> Customize\
For Using capillary Coupon and Redeem Points, it is required to add our App block and also our checkout button.\
Search for Cart in search box.\
Click on “Add block” and you can configure the blocks you need in your Cart Page.

1.2.3 To Create Capillary CRM integration CART page Without blocks, please follow the below steps:\
For Redeem point feature: To add the redeem point feature please add the following div in your CART page “\< div id='cap-cart-point'>\< /div>”.\
For Coupon feature: To add the coupon feature please add the following div in your CART page “ \< div id='cap-cart-coupon'>\< /div> ”.\
For showing the Redeem points discount block feature: To add the Redeem points discount block feature add the following div in your CART page “ \< div id='cap-redeem-point-discount-value'>\< /div> ”.\
For showing coupon discount feature: To add the coupon discount block feature add the following div in your CART page “\< div id='cap-coupon-discount'>\< /div>”.\
For Checkout Button: To add the our checkout button please add the following div in your cart page "\< div id="cap-check-out-btn">\< /div>"\
Note:-\
For using the Redeem Points features and Capillary coupons features you need to use our checkout button\
And above setting will only work in Cart page\
1.2.4 To add email and mobile OTP field in the Registration page, please follow the below steps:\
Go to App >> CRM Capillary integration >> Config Capillary Settings\
Mobile OTP:\
Navigate to OTP verification subtab, wherein we need enable the “Mobile OTP Enable”.\
Enter Phone No. input field ID name in Phone otp Attribute field for fetching the phone number.\
Click on Save\
Add the “Send Otp” button for mobile, we need to add this class name "send-mobile-otp-btn" in your html anchor where you want to add the button in the registration page.\
For “adding enter otp” field and “send verify otp” button please add this class name "mobile-otp-box" in your html tag where you want to show these block in the registration page.\
Email OTP:\
Navigate to OTP verification subtab, wherein we need to enable the “Email OTP Enabled”.\
Enter Email input field ID name in Email otp Attribute field for feteching the email.\
Click on Save\
Add the “Send Otp” button for mobile, we need to add this class name "send-email-otp-btn" in your html anchor where you want to add the button in the registration page.\
For “adding enter otp” field and “send verify otp” button please add this class name "email-otp-box" in your html tag where you want to show these block in the registration page.\
1.2.5 Show “Point History” block\
To show the point history block we need to add “\< div id="point-history-div">\< /div>” in any pages where you would like to show the point history slab.\
1.2.6 Show “Coupon History” block\
To show the coupon history block we need to add “\< div id="cap-coupon-div">\< /div>” in any pages where you would like to show the point history slab.\
1.2.7 Show “Transaction History” block\
To show the Transaction history block we need to add “\< div id="cap-trans">\< /div>” in any pages where you would like to show the transaction history slab.\
1.2.8 Show “Available Points” block\
To show the Available points block we need to add "\< div id="cap-point-id">\< /div>" in any pages where you would like to show the Available Points slab.\
1.2.9 Show “Slab Name” block\
To show the Slab name block we need to add “\< div id="cap-tier-id">\< /div>” in any pages where you would like to show the Slab name.\
1.3 Mapping of fields to custom or extended fields\
1.3.1 Creation of Attributes from Shopify side\
This configuration allows the admin to create a custom attribute for the existing fields from the shopify panel.\
Follow the below configuration\
User should be navigated to Apps >> Capillary CRM Integration >>\
Click on Capillary Tech→ Assign Attributes

Click on Assign Attribute: Attribute type for Extended field

Status: Enabled (drop down)\
Attribute type (drop down) : Consists of values custom field and extended field\
Attribute Code: Give any attribute code. Ex: Middle Name\
Capillary Attribute Code: Give any attribute code. Ex: state\
"state" attribute should be added on the capillary end as well.\
SAVE\
Attribute type for Custom field:

Register a user on the front end.\
Give a last name and first name and save the user\
Go to capillary dashboard for the same user and check if the gender and state are updated

1.4 Customer Creation configuration\
1.4.1 Enabled Customer Creation\
When user registers to the site, User info should be updated on capillary system\
Follow the below configuration\
User should be navigated to Apps >> Capillary CRM Integration >> Config Capillary settings >> Customer\
Enabled Customer Creation: YES (dropdown)\
Submit CONFIG\
Create a user on store front end

Creating customer from store front-end:

The created user will be reflected on the Shopify -> All customers

The created user will be reflected on the Capillary Byrne Dev dashboard (search for the created user [xxx@domain.com](mailto:xxx@domain.com))\
1.4.2 Disable Customer Creation\
When user is registered to the site, User info should not be updated on capillary system\
Follow the below configuration\
User should be navigated to Apps >> Capillary CRM Integration >> Config Capillary settings >> Customer\
Enabled Customer Creation: NO (dropdown)\
SAVE CONFIG

Create an user on front end site\
The created user will be reflected on the Shopify -> All customers\
The created user will not be reflected on the Capillary Byrne Dev dashboard (search for the created user [john@gmail.com](mailto:john@gmail.com))

1.5 Customer Updation\
1.5.1 Enabled Customer Updation\
When a user updates the name from the Shopify admin, the name should be updated on the capillary system. Customer edit is available from Shopify admin only\
Follow the below configuration\
User should be navigated to Apps >> Capillary CRM Integration >>Config Capillary settings >> Customer\
Enabled Customer Updation: YES (dropdown)\
Submit CONFIG\
Navigate to Customers -> Click on the customer, wants to edit\
Edit Customer from Shopify admin:\
On updation the customer Details is updated in the Capillary system

1.5.2 Disable Customer Updation\
When a user updates the name from the shopify admin, the name should not be updated on the capillary system.\
Follow the below configuration\
User should be navigated to Apps >> Capillary CRM Integration >>Config Capillary settings >> Customer\
Enabled Customer Updation: NO (dropdown)\
SAVE CONFIG\
Navigate to Customers -> click on customer→ Edit Contact Information\
Change the name field (first name and last name) and save\
The name would be updated on the front end, shopify whereas it won't be updated on the Capillary dashboard

1.6 Loyalty Points and Slab\
1.6.1 Enable Loyalty Points and Slab\
When this configuration is enabled, User should be able to view the loyalty points and slab name information on the site.\
Follow the below configuration\
User should be navigated to stores >> configuration >> Capillary tech >> CMI Integration\
Scroll down to Customer\
Enabled Customer Fetch: YES (dropdown)\
SAVE CONFIG\
Now go to Online Store >> Actions >> Edit Code\
Please add this div in any page where you want to show the Loyalty Points "\< div id="cap-point-id">\< /div>"\
Please add this div in any page where you want to show the Slab Name "\< div id="cap-tier-id">\< /div>"\
Login to front end site, and navigate to your page where you added the above div\
User should be able to view the Loyalty points and Slab Name

1.6.2 Disable Loyalty Points and Slab\
When this configuration is disabled User should not be able to view the loyalty points and slab name information on the site.\
Follow the below configuration\
User should be navigated to stores >> configuration >> Capillary tech >> CMI Integration\
Scroll down to Customer\
Enabled Customer Fetch: No (dropdown)\
SAVE CONFIG\
Now go to Online Store >> Actions >> Edit Code\
For Loyalty Points Please add this div in any page where you want to show "\< div id="cap-point-id">\< /div>"\
For Slab Name Please add this div in any page where you want to show "\< div id="cap-tier-id">\< /div>"\
Login to front end site, and navigate to your page where you added the div for Slab Name & Loyalty Points\
User should not be able to view the Loyalty points and Slab Name

1.7 Success Transaction\
1.7.1 Enable Success transaction\
When the admin enables this configuration, if the user places any order or does the transactions capillary system should be notified.\
Follow the below configuration\
User should be navigated to Apps >> Capillary CRM Integration >>Config Capillary settings >> Customer\
Click on Capillary Tech→ CRM Integration\
Scroll down to Transactions\
Enabled Add Transactions : YES (dropdown)\
Enable Customer grouping: Yes (dropdown)\
SAVE CONFIG\
Please add this div in any page where you want to show the Transaction History "\< div id="cap-trans">\< /div>"\
Transaction History table would look like the below image\
Place an order from the frontend and navigate to your page where you added the div for Transaction History\
User should be able to view the Transaction History table\
For Group User success transaction\
On the capillary dashboard under group purchases of primary user, should be able to see the success transaction for the Group User\
On frontend primary user should be able to view Group User’s transactions

1.7.2 Disable Success transaction\
When the admin disables this configuration, if the user places any order or does the transactions capillary system should not be notified.\
Follow the below configuration\
User should be navigated to Apps >> Capillary CRM Integration >>Config Capillary settings >> Customer\
Click on Capillary Tech→ CRM Integration\
Scroll down to Transactions\
Enabled Add Transactions : No (dropdown)\
SAVE CONFIG\
Place an order from the frontend and navigate to your page where you added the div for Transaction History\
User should not be able to view the transaction history after disabling the "Add Transactions"

1.8 Cancel Transaction (Full)\
1.8.1 Enable Cancel transaction\
When the admin enables this configuration, if user cancels any transaction or order, Capillary system should be notified. (Order cancellation tested from Shopify admin).\
Follow the below configuration\
User should be navigated to Apps >> Capillary CRM Integration >>Config Capillary settings >> Customer\
Click on Capillary Tech→ CRM Integration\
Scroll down to Transactions\
Enabled Cancel Transactions: YES (dropdown)\
SAVE CONFIG\
Enable Customer grouping: Yes (dropdown)\
Place an order from the frontend\
Got to Sales >> orders >> View particular order id >> click on cancel\
User should be able to view the 2 orders with amount on the frontend\
One with success transaction and another with cancel transaction under transaction history\
For Group User Cancel transaction\
On the capillary dashboard under group purchases of primary user, should be able to see the cancel transaction for the Group User\
On frontend primary user should be able to view Group User’s transactions

1.8.2 Disable Cancel transaction\
When the admin disables this configuration, if the user cancels any transaction or order, Capillary system should not be notified. (Order cancellation tested from Shopify admin).\
Follow the below configuration\
User should be navigated to Apps >> Capillary CRM Integration >>Config Capillary settings >> Customer\
Click on Capillary Tech→ CRM Integration\
Scroll down to Transactions\
Enabled Cancel Transactions: No (dropdown)\
SAVE CONFIG\
Place an order from the frontend\
Got to Sales >> orders >> View particular order id >> click on cancel\
User should be able to view the 1 orders with amount on the frontend\
One with transaction under transaction history and but no cancel transaction will show

1.9 Mapping of Transaction fields to custom or extended fields\
1.9.1 Creating a Transaction Attributes on Shopify admin\
Admin will be able to create transaction attributes to map with custom/extended attributes of capillary\
Follow the below configuration\
Click on Capillary Tech→ Assign Transaction Attributes

Click on Assign Transaction Attributes button

Status: Enabled (drop down)\
Attribute type (drop down) : Consists of values custom field and extended field\
Attribute Code: Give any transaction attribute code. Ex: total\_line\_items\_price\_set,shop\_money,amount\
Capillary Attribute Code: Give any Capillary Transaction attribute code. Ex: cashier\_name\
SAVE

Attribute Code: Give any transaction attribute code. Ex: customer,default\_address,country\_name\
Capillary Attribute Code: Give any Capillary Transaction attribute code. Ex: bill\_status

Once attributes are mapped, place an order from Shopify front end.\
The transaction data will reflect in the Capillary Member Care section - View the transaction of the respective user.

Below are the configuration details to find out the capillary custom/extended fields\
Click on Profile icon>> Organization settings\
Master Data Management>> Data Model\
Custom Fields >> View custom fields for loyalty transactions OR

Extended Fields

1.10 Tracker API\
When a user is part of a group, tracker data will be displayed and if the user is not part of the group “Tracker Data” will be displayed as “False” in the API response.\
Follow the below configuration for Progress Tracker Data\
User should be navigated to Apps >> Capillary CRM Integration >>Config Capillary settings >> Customer\
Click on Capillary Tech→ CRM Integration\
Scroll down to Progress Tracker Data\
Fill the following fields\
Minimum value of the progress Bar\
Maximum value of the progress Bar\
Total Number of Tier\
Tiers of Data >> Enter the data in the json or array format, as this will be returned in API response (\{1,0,100,FreeTier},\{2,101,300,Bronze},\{3,301,700,Silver},\{4,701,100,Gold})\
Save the config

1.11 OTP Validation during Registration\
1.11.1 Enable OTP Validation\
When the admin enables this configuration the OTP field should be displayed on the registration form ( for Mobile number and Email) based on the attributes given in the admin\
Follow the below configuration\
User should be navigated to Apps >> Capillary CRM Integration >>Config Capillary settings >> Customer\
Click on Capillary Tech→ CRM Integration\
Scroll down to OTP verification\
Mobile OTP Enabled: YES (dropdown)\
Country Code Enabled(if you are using country code selection in registration page): YES (dropdown)\
Email OTP Enabled: YES (dropdown)\
Mobile OTP Attribute: your Phone input field id\
Email OTP Attribute: your Email input field id\
Country Code Attribute: your country code input/selection field id\
SAVE CONFIG\
The user should be able to view mobile number and OTP field with Generate and Validate buttons\
The user should be able to view email and OTP field with Generate and Validate buttons\
Enter mobile number on the mobile field\
Enter email on the email field\
Click on generate OTP then OTP to be checked on capillary dashboard -> workbench -> Communication logs -> Search Messages By mobile.\
On entering valid OTP click on Validate button user should be able to register\
On entering invalid OTP and click on Validate button error message to be displayed

Mobile Field

Mobile field Invalid OTP

Mobile field Valid OTP

Email Field\
Email field Invalid OTP

Email field Valid OTP

1.11.2 Disable OTP Validation\
When the admin disables this configuration the OTP field should not be displayed on the registration form ( for Mobile number and Email) based on the attributes given in the admin\
Follow the below configuration\
User should be navigated to stores >> configuration >> Capillary tech\
Click on Capillary Tech→ CRM Integration\
Scroll down to OTP verification\
Mobile OTP Enabled: NO (dropdown)\
Email OTP Enabled: NO (dropdown)\
Mobile OTP Attribute: your Phone input field id\
Email OTP Attribute: your email input field id\
SAVE CONFIG\
User should not be displayed with OTP field, and they can register without mobile number and OTP

1.12 Group Coupon Redemption\
1.12.1 Enable group Coupon redemption\
When the admin enables this configuration the Group User should be able to use the coupon of the Primary user and coupon history should be displayed based on the group on the frontend.(i.e Primary user and Group User should be able to see the same data on the coupon history page)\
Follow the below configuration\
User should be navigated to stores >> Apps >> Capillary CRM Integration\
Click on Config Capillary Settings\
Scroll down to Coupon\
Group Redemption enabled : YES (dropdown)\
SAVE CONFIG\
On the frontend Login with your credentials\
Check the coupon history of the primary user\
Now Login with Group User\
Check the coupon history\
On the checkout page the coupon of the primary user should be applied successfully by the Group User.\
Primary User (For Example:- Marry)

Group User (For Example:- Abi)

Capillary Dashboard Screenshot

1.12.2 Disable group Coupon redemption\
When the admin disables this configuration, the Group User should not be able to use the coupon of the Primary user and coupon history should not be displayed based on the group on the frontend. (i.e Primary user and Group User should not be able to see the same data on the coupon history page).\
Follow the below configuration\
User should be navigated to stores >> Apps >> Capillary CRM Integration\
Click on Config Capillary Settings\
Scroll down to Coupon\
Group Redemption enabled : No (dropdown)\
SAVE CONFIG\
On the frontend Login with your login credentials\
Check the coupon history of the primary user\
Now Login with Group User login credentials\
Check the coupon history\
On the checkout page the coupon of the primary user should be applied successfully by the Group User.

Primary user

Group User

1.13 Redeem the coupons at SKU Level\
When the user places an order for the SKU, a coupon will be issued to the user and the user will be able to redeem the coupon for the respective SKU.\
Follow the below steps\
Login as user\
Place order for test2\
Check the coupon in the coupon history\
Add test2 product to the cart\
Apply the coupon and place order\
User should be able to apply coupon successfully\
If a user adds other SKU product to cart and try to apply coupon error should be displayed.

1.14 Pilot Program\
1.14.1 Enable Pilot program\
When the admin enables this configuration, if the pilot program attribute value is set to “yes” then that user will be able to view all the Coupon history, Transaction history, Point history, slab information, and the user should be able to redeem coupons and points successfully.\
Follow the below configuration\
User should be navigated to stores >> Capillary CRM Integration\
Click on Configure capillary\
Scroll down to Pilot program\
Enabled : YES (dropdown)\
Custom Field in Capillary: pilot\
Custom Field Value in Capillary: yes\
SAVE CONFIG\
User with pilot : yes field will be able to view all the details and apply coupon successfully\
User with pilot : no field will not be able to view all the details

Pilot value: ”yes”\
User: Marry

Coupon Redemption

Pilot value: ”No”\
User: Abi

1.14.2 Disable Pilot program\
When the admin disables this configuration, both the users will not be able to view all the Coupon history,Transaction history, Point history, slab information, and the user should not be able to redeem coupons and points.\
Follow the below configuration\
o User should be navigated to stores >> configuration >> Capillary tech\
Click on Stores→ Capillary CRM Integration\
Click on Configure capillary\
Scroll down to Pilot program\
Enabled : No (dropdown)\
Custom Field in Capillary: pilot\
Custom Field Value in Capillary: no\
SAVE CONFIG\
User with pilot : yes field will be able to view all the details and apply coupon successfully\
User with pilot : no field will not be able to view all the details

1.15 Points Redemption\
1.15.1 Enable Points redemption\
When the admin enables this configuration the Points field should be displayed on the cart\
Follow the below configuration\
User should be navigated to stores >> Capillary CRM Integration\
Click on Configure capillary\
Scroll down to Point\
Enabled : YES (dropdown)\
Set Minimum redeemable points\
set Maximum redeemable\
Set Multiples of Redeemable Points can be claimed\
SAVE CONFIG

Place an order in the front end, add a product to cart and navigate to cart

1.15.2 Disable Points redemption\
Follow the below configuration\
User should be navigated to stores >> Capillary CRM Integration\
Click on Configure capillary\
Scroll down to Point\
Enabled : No (dropdown)\
SAVE CONFIG

Go to Front End, add an order to the cart and navigate to the cart

End of document\
Home\
General Authenticate\
Config Capillary Settings\
Capillary Tech\
Success! Configured!\
Faild! Something went wrong!

1. SHOPIFY USER FLOWS\
   1.1 Authentication\
   Click on Apps -> Capillary CRM Integration

Click on General Authenticate\
Provide basic Authentication\
Client ID: \***\*\*\*\*\***\*\*\*\*\***\*\*\*\*\***\
Client Secret Key: \***\*\*\*\*\***\*\*\***\*\*\*\*\***\
Base URL of the API: Please contact to the Capillary Team\
Submit CONFIG

View Online store on the front-end:\
Click on the Online stores\
Click on the View your store

1.2 Steps to Configure Themes\
1.2.1 Turn on the App embeds\
Click on the Online Store >> Customize\
Select “Theme settings” and click on “App embeds”.\
Turn on the toggle buttons “Capillary - Setting” and “Capillary - Includes ”. If you are not using Jquery in your code then please turn on the "Capillary - Jquery Files".

1.2.2 To Create Capillary CRM integration CART page With blocks, please follow the below steps:\
Click on the Online Store >> Customize\
For Using capillary Coupon and Redeem Points, it is required to add our App block and also our checkout button.\
Search for Cart in search box.\
Click on “Add block” and you can configure the blocks you need in your Cart Page.

1.2.3 To Create Capillary CRM integration CART page Without blocks, please follow the below steps:\
For Redeem point feature: To add the redeem point feature please add the following div in your CART page “\< div id='cap-cart-point'>\< /div>”.\
For Coupon feature: To add the coupon feature please add the following div in your CART page “ \< div id='cap-cart-coupon'>\< /div> ”.\
For showing the Redeem points discount block feature: To add the Redeem points discount block feature add the following div in your CART page “ \< div id='cap-redeem-point-discount-value'>\< /div> ”.\
For showing coupon discount feature: To add the coupon discount block feature add the following div in your CART page “\< div id='cap-coupon-discount'>\< /div>”.\
For Checkout Button: To add the our checkout button please add the following div in your cart page "\< div id="cap-check-out-btn">\< /div>"\
Note:-\
For using the Redeem Points features and Capillary coupons features you need to use our checkout button\
And above setting will only work in Cart page\
1.2.4 To add email and mobile OTP field in the Registration page, please follow the below steps:\
Go to App >> CRM Capillary integration >> Config Capillary Settings\
Mobile OTP:\
Navigate to OTP verification subtab, wherein we need enable the “Mobile OTP Enable”.\
Enter Phone No. input field ID name in Phone otp Attribute field for fetching the phone number.\
Click on Save\
Add the “Send Otp” button for mobile, we need to add this class name "send-mobile-otp-btn" in your html anchor where you want to add the button in the registration page.\
For “adding enter otp” field and “send verify otp” button please add this class name "mobile-otp-box" in your html tag where you want to show these block in the registration page.\
Email OTP:\
Navigate to OTP verification subtab, wherein we need to enable the “Email OTP Enabled”.\
Enter Email input field ID name in Email otp Attribute field for feteching the email.\
Click on Save\
Add the “Send Otp” button for mobile, we need to add this class name "send-email-otp-btn" in your html anchor where you want to add the button in the registration page.\
For “adding enter otp” field and “send verify otp” button please add this class name "email-otp-box" in your html tag where you want to show these block in the registration page.\
1.2.5 Show “Point History” block\
To show the point history block we need to add “\< div id="point-history-div">\< /div>” in any pages where you would like to show the point history slab.\
1.2.6 Show “Coupon History” block\
To show the coupon history block we need to add “\< div id="cap-coupon-div">\< /div>” in any pages where you would like to show the point history slab.\
1.2.7 Show “Transaction History” block\
To show the Transaction history block we need to add “\< div id="cap-trans">\< /div>” in any pages where you would like to show the transaction history slab.\
1.2.8 Show “Available Points” block\
To show the Available points block we need to add "\< div id="cap-point-id">\< /div>" in any pages where you would like to show the Available Points slab.\
1.2.9 Show “Slab Name” block\
To show the Slab name block we need to add “\< div id="cap-tier-id">\< /div>” in any pages where you would like to show the Slab name.\
1.3 Mapping of fields to custom or extended fields\
1.3.1 Creation of Attributes from Shopify side\
This configuration allows the admin to create a custom attribute for the existing fields from the shopify panel.\
Follow the below configuration\
User should be navigated to Apps >> Capillary CRM Integration >>\
Click on Capillary Tech→ Assign Attributes

Click on Assign Attribute: Attribute type for Extended field

Status: Enabled (drop down)\
Attribute type (drop down) : Consists of values custom field and extended field\
Attribute Code: Give any attribute code. Ex: Middle Name\
Capillary Attribute Code: Give any attribute code. Ex: state\
"state" attribute should be added on the capillary end as well.\
SAVE\
Attribute type for Custom field:

Register a user on the front end.\
Give a last name and first name and save the user\
Go to capillary dashboard for the same user and check if the gender and state are updated

1.4 Customer Creation configuration\
1.4.1 Enabled Customer Creation\
When user registers to the site, User info should be updated on capillary system\
Follow the below configuration\
User should be navigated to Apps >> Capillary CRM Integration >> Config Capillary settings >> Customer\
Enabled Customer Creation: YES (dropdown)\
Submit CONFIG\
Create a user on store front end

Creating customer from store front-end:

The created user will be reflected on the Shopify -> All customers

The created user will be reflected on the Capillary Byrne Dev dashboard (search for the created user [xxx@domain.com](mailto:xxx@domain.com))\
1.4.2 Disable Customer Creation\
When user is registered to the site, User info should not be updated on capillary system\
Follow the below configuration\
User should be navigated to Apps >> Capillary CRM Integration >> Config Capillary settings >> Customer\
Enabled Customer Creation: NO (dropdown)\
SAVE CONFIG

Create an user on front end site\
The created user will be reflected on the Shopify -> All customers\
The created user will not be reflected on the Capillary Byrne Dev dashboard (search for the created user [john@gmail.com](mailto:john@gmail.com))

1.5 Customer Updation\
1.5.1 Enabled Customer Updation\
When a user updates the name from the Shopify admin, the name should be updated on the capillary system. Customer edit is available from Shopify admin only\
Follow the below configuration\
User should be navigated to Apps >> Capillary CRM Integration >>Config Capillary settings >> Customer\
Enabled Customer Updation: YES (dropdown)\
Submit CONFIG\
Navigate to Customers -> Click on the customer, wants to edit\
Edit Customer from Shopify admin:\
On updation the customer Details is updated in the Capillary system

1.5.2 Disable Customer Updation\
When a user updates the name from the shopify admin, the name should not be updated on the capillary system.\
Follow the below configuration\
User should be navigated to Apps >> Capillary CRM Integration >>Config Capillary settings >> Customer\
Enabled Customer Updation: NO (dropdown)\
SAVE CONFIG\
Navigate to Customers -> click on customer→ Edit Contact Information\
Change the name field (first name and last name) and save\
The name would be updated on the front end, shopify whereas it won't be updated on the Capillary dashboard

1.6 Loyalty Points and Slab\
1.6.1 Enable Loyalty Points and Slab\
When this configuration is enabled, User should be able to view the loyalty points and slab name information on the site.\
Follow the below configuration\
User should be navigated to stores >> configuration >> Capillary tech >> CMI Integration\
Scroll down to Customer\
Enabled Customer Fetch: YES (dropdown)\
SAVE CONFIG\
Now go to Online Store >> Actions >> Edit Code\
Please add this div in any page where you want to show the Loyalty Points "\< div id="cap-point-id">\< /div>"\
Please add this div in any page where you want to show the Slab Name "\< div id="cap-tier-id">\< /div>"\
Login to front end site, and navigate to your page where you added the above div\
User should be able to view the Loyalty points and Slab Name

1.6.2 Disable Loyalty Points and Slab\
When this configuration is disabled User should not be able to view the loyalty points and slab name information on the site.\
Follow the below configuration\
User should be navigated to stores >> configuration >> Capillary tech >> CMI Integration\
Scroll down to Customer\
Enabled Customer Fetch: No (dropdown)\
SAVE CONFIG\
Now go to Online Store >> Actions >> Edit Code\
For Loyalty Points Please add this div in any page where you want to show "\< div id="cap-point-id">\< /div>"\
For Slab Name Please add this div in any page where you want to show "\< div id="cap-tier-id">\< /div>"\
Login to front end site, and navigate to your page where you added the div for Slab Name & Loyalty Points\
User should not be able to view the Loyalty points and Slab Name

1.7 Success Transaction\
1.7.1 Enable Success transaction\
When the admin enables this configuration, if the user places any order or does the transactions capillary system should be notified.\
Follow the below configuration\
User should be navigated to Apps >> Capillary CRM Integration >>Config Capillary settings >> Customer\
Click on Capillary Tech→ CRM Integration\
Scroll down to Transactions\
Enabled Add Transactions : YES (dropdown)\
Enable Customer grouping: Yes (dropdown)\
SAVE CONFIG\
Please add this div in any page where you want to show the Transaction History "\< div id="cap-trans">\< /div>"\
Transaction History table would look like the below image\
Place an order from the frontend and navigate to your page where you added the div for Transaction History\
User should be able to view the Transaction History table\
For Group User success transaction\
On the capillary dashboard under group purchases of primary user, should be able to see the success transaction for the Group User\
On frontend primary user should be able to view Group User’s transactions

1.7.2 Disable Success transaction\
When the admin disables this configuration, if the user places any order or does the transactions capillary system should not be notified.\
Follow the below configuration\
User should be navigated to Apps >> Capillary CRM Integration >>Config Capillary settings >> Customer\
Click on Capillary Tech→ CRM Integration\
Scroll down to Transactions\
Enabled Add Transactions : No (dropdown)\
SAVE CONFIG\
Place an order from the frontend and navigate to your page where you added the div for Transaction History\
User should not be able to view the transaction history after disabling the "Add Transactions"

1.8 Cancel Transaction (Full)\
1.8.1 Enable Cancel transaction\
When the admin enables this configuration, if user cancels any transaction or order, Capillary system should be notified. (Order cancellation tested from Shopify admin).\
Follow the below configuration\
User should be navigated to Apps >> Capillary CRM Integration >>Config Capillary settings >> Customer\
Click on Capillary Tech→ CRM Integration\
Scroll down to Transactions\
Enabled Cancel Transactions: YES (dropdown)\
SAVE CONFIG\
Enable Customer grouping: Yes (dropdown)\
Place an order from the frontend\
Got to Sales >> orders >> View particular order id >> click on cancel\
User should be able to view the 2 orders with amount on the frontend\
One with success transaction and another with cancel transaction under transaction history\
For Group User Cancel transaction\
On the capillary dashboard under group purchases of primary user, should be able to see the cancel transaction for the Group User\
On frontend primary user should be able to view Group User’s transactions

1.8.2 Disable Cancel transaction\
When the admin disables this configuration, if the user cancels any transaction or order, Capillary system should not be notified. (Order cancellation tested from Shopify admin).\
Follow the below configuration\
User should be navigated to Apps >> Capillary CRM Integration >>Config Capillary settings >> Customer\
Click on Capillary Tech→ CRM Integration\
Scroll down to Transactions\
Enabled Cancel Transactions: No (dropdown)\
SAVE CONFIG\
Place an order from the frontend\
Got to Sales >> orders >> View particular order id >> click on cancel\
User should be able to view the 1 orders with amount on the frontend\
One with transaction under transaction history and but no cancel transaction will show

1.9 Mapping of Transaction fields to custom or extended fields\
1.9.1 Creating a Transaction Attributes on Shopify admin\
Admin will be able to create transaction attributes to map with custom/extended attributes of capillary\
Follow the below configuration\
Click on Capillary Tech→ Assign Transaction Attributes

Click on Assign Transaction Attributes button

Status: Enabled (drop down)\
Attribute type (drop down) : Consists of values custom field and extended field\
Attribute Code: Give any transaction attribute code. Ex: total\_line\_items\_price\_set,shop\_money,amount\
Capillary Attribute Code: Give any Capillary Transaction attribute code. Ex: cashier\_name\
SAVE

Attribute Code: Give any transaction attribute code. Ex: customer,default\_address,country\_name\
Capillary Attribute Code: Give any Capillary Transaction attribute code. Ex: bill\_status

Once attributes are mapped, place an order from Shopify front end.\
The transaction data will reflect in the Capillary Member Care section - View the transaction of the respective user.

Below are the configuration details to find out the capillary custom/extended fields\
Click on Profile icon>> Organization settings\
Master Data Management>> Data Model\
Custom Fields >> View custom fields for loyalty transactions OR

Extended Fields

1.10 Tracker API\
When a user is part of a group, tracker data will be displayed and if the user is not part of the group “Tracker Data” will be displayed as “False” in the API response.\
Follow the below configuration for Progress Tracker Data\
User should be navigated to Apps >> Capillary CRM Integration >>Config Capillary settings >> Customer\
Click on Capillary Tech→ CRM Integration\
Scroll down to Progress Tracker Data\
Fill the following fields\
Minimum value of the progress Bar\
Maximum value of the progress Bar\
Total Number of Tier\
Tiers of Data >> Enter the data in the json or array format, as this will be returned in API response (\{1,0,100,FreeTier},\{2,101,300,Bronze},\{3,301,700,Silver},\{4,701,100,Gold})\
Save the config

1.11 OTP Validation during Registration\
1.11.1 Enable OTP Validation\
When the admin enables this configuration the OTP field should be displayed on the registration form ( for Mobile number and Email) based on the attributes given in the admin\
Follow the below configuration\
User should be navigated to Apps >> Capillary CRM Integration >>Config Capillary settings >> Customer\
Click on Capillary Tech→ CRM Integration\
Scroll down to OTP verification\
Mobile OTP Enabled: YES (dropdown)\
Country Code Enabled(if you are using country code selection in registration page): YES (dropdown)\
Email OTP Enabled: YES (dropdown)\
Mobile OTP Attribute: your Phone input field id\
Email OTP Attribute: your Email input field id\
Country Code Attribute: your country code input/selection field id\
SAVE CONFIG\
The user should be able to view mobile number and OTP field with Generate and Validate buttons\
The user should be able to view email and OTP field with Generate and Validate buttons\
Enter mobile number on the mobile field\
Enter email on the email field\
Click on generate OTP then OTP to be checked on capillary dashboard -> workbench -> Communication logs -> Search Messages By mobile.\
On entering valid OTP click on Validate button user should be able to register\
On entering invalid OTP and click on Validate button error message to be displayed

Mobile Field

Mobile field Invalid OTP

Mobile field Valid OTP

Email Field\
Email field Invalid OTP

Email field Valid OTP

1.11.2 Disable OTP Validation\
When the admin disables this configuration the OTP field should not be displayed on the registration form ( for Mobile number and Email) based on the attributes given in the admin\
Follow the below configuration\
User should be navigated to stores >> configuration >> Capillary tech\
Click on Capillary Tech→ CRM Integration\
Scroll down to OTP verification\
Mobile OTP Enabled: NO (dropdown)\
Email OTP Enabled: NO (dropdown)\
Mobile OTP Attribute: your Phone input field id\
Email OTP Attribute: your email input field id\
SAVE CONFIG\
User should not be displayed with OTP field, and they can register without mobile number and OTP

1.12 Group Coupon Redemption\
1.12.1 Enable group Coupon redemption\
When the admin enables this configuration the Group User should be able to use the coupon of the Primary user and coupon history should be displayed based on the group on the frontend.(i.e Primary user and Group User should be able to see the same data on the coupon history page)\
Follow the below configuration\
User should be navigated to stores >> Apps >> Capillary CRM Integration\
Click on Config Capillary Settings\
Scroll down to Coupon\
Group Redemption enabled : YES (dropdown)\
SAVE CONFIG\
On the frontend Login with your credentials\
Check the coupon history of the primary user\
Now Login with Group User\
Check the coupon history\
On the checkout page the coupon of the primary user should be applied successfully by the Group User.\
Primary User (For Example:- Marry)

Group User (For Example:- Abi)

Capillary Dashboard Screenshot

1.12.2 Disable group Coupon redemption\
When the admin disables this configuration, the Group User should not be able to use the coupon of the Primary user and coupon history should not be displayed based on the group on the frontend. (i.e Primary user and Group User should not be able to see the same data on the coupon history page).\
Follow the below configuration\
User should be navigated to stores >> Apps >> Capillary CRM Integration\
Click on Config Capillary Settings\
Scroll down to Coupon\
Group Redemption enabled : No (dropdown)\
SAVE CONFIG\
On the frontend Login with your login credentials\
Check the coupon history of the primary user\
Now Login with Group User login credentials\
Check the coupon history\
On the checkout page the coupon of the primary user should be applied successfully by the Group User.

Primary user

Group User

1.13 Redeem the coupons at SKU Level\
When the user places an order for the SKU, a coupon will be issued to the user and the user will be able to redeem the coupon for the respective SKU.\
Follow the below steps\
Login as user\
Place order for test2\
Check the coupon in the coupon history\
Add test2 product to the cart\
Apply the coupon and place order\
User should be able to apply coupon successfully\
If a user adds other SKU product to cart and try to apply coupon error should be displayed.

1.14 Pilot Program\
1.14.1 Enable Pilot program\
When the admin enables this configuration, if the pilot program attribute value is set to “yes” then that user will be able to view all the Coupon history, Transaction history, Point history, slab information, and the user should be able to redeem coupons and points successfully.\
Follow the below configuration\
User should be navigated to stores >> Capillary CRM Integration\
Click on Configure capillary\
Scroll down to Pilot program\
Enabled : YES (dropdown)\
Custom Field in Capillary: pilot\
Custom Field Value in Capillary: yes\
SAVE CONFIG\
User with pilot : yes field will be able to view all the details and apply coupon successfully\
User with pilot : no field will not be able to view all the details

Pilot value: ”yes”\
User: Marry

Coupon Redemption

Pilot value: ”No”\
User: Abi

1.14.2 Disable Pilot program\
When the admin disables this configuration, both the users will not be able to view all the Coupon history,Transaction history, Point history, slab information, and the user should not be able to redeem coupons and points.\
Follow the below configuration\
o User should be navigated to stores >> configuration >> Capillary tech\
Click on Stores→ Capillary CRM Integration\
Click on Configure capillary\
Scroll down to Pilot program\
Enabled : No (dropdown)\
Custom Field in Capillary: pilot\
Custom Field Value in Capillary: no\
SAVE CONFIG\
User with pilot : yes field will be able to view all the details and apply coupon successfully\
User with pilot : no field will not be able to view all the details

1.15 Points Redemption\
1.15.1 Enable Points redemption\
When the admin enables this configuration the Points field should be displayed on the cart\
Follow the below configuration\
User should be navigated to stores >> Capillary CRM Integration\
Click on Configure capillary\
Scroll down to Point\
Enabled : YES (dropdown)\
Set Minimum redeemable points\
set Maximum redeemable\
Set Multiples of Redeemable Points can be claimed\
SAVE CONFIG

Place an order in the front end, add a product to cart and navigate to cart

1.15.2 Disable Points redemption\
Follow the below configuration\
User should be navigated to stores >> Capillary CRM Integration\
Click on Configure capillary\
Scroll down to Point\
Enabled : No (dropdown)\
SAVE CONFIG

Go to Front End, add an order to the cart and navigate to the cart

End of docume
