---
title: Register customers
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
Orgs usually build microsites using Sharingan app and allows registering customers directly through microsites. In cases where a customer cannot access the microsite, the org staff or Capillary admins can register or update the profile information on a specific microsite through Member Care.

The following are the steps to register or update a customer.

Choose the microsite on which you want to register/update a customer through Member Care.\
Navigate to the respective page and register or update a customer.

## Prerequisites

* You need to have permission to register or update a customer on Member Care.  
* The microsite on which you want to register or update your profile should have the respective event configured. 

## Set the microsite on which you want to register/update customer

Before proceeding, you need to set the microsite on which you want to register/update a customer through Member Care. You will see form fields configured for the microsite that you set on the Action Settings page.

To set the microsite on which you want to register/update a customer, follow these steps.

1. On **Member Care**, navigate to **Settings** > **Action Settings**.

![22d6b7c 8BQpw34m0XaS1Vj3pZbXOya9apUvAm0gsw](https://files.readme.io/22d6b7c-8BQpw34m0XaS1Vj3pZbXOya9apUvAm0gsw.png)

2. In **New Customer**, select the microsite that you want to use to register a customer. For example, membercareReg.
3. In **Edit Customer**, select the microsite that you want to use to update customer information. For example, membercareEdit.
4. Click **Save**. 

<Note title="Note">
* In the preceding screenshot, the membercareReg and membercareEdit are the pages created using Sharingan App. Hence, the page design and form fields can differ for each microsite.
</Note>

## Register customer

Before registering, ensure that you have set the microsite on which you want to register.

To register a customer on a microsite through Member Care, follow these steps.

1. Navigate to the **New Customer Registration** page using any of the following processes.

* **Customer Registration page** **(directly)**: On **Member Care**, click  **Search** > **Customer Registration**. 

![9eba21d VSjPOEa34KX8CorFVQ7Nq Qu1YHE1MvV8w](https://files.readme.io/9eba21d-VSjPOEa34KX8CorFVQ7Nq-Qu1YHE1MvV8w.png)

* **From Customer Search page**: If you are already on the **Customer Search** page, click the ⋮ icon and **New Customer**. 

![9c37add TLgL0PmOHUBi1Hx uqqH70NnELYnpMNscg](https://files.readme.io/9c37add-TLgL0PmOHUBi1Hx_uqqH70NnELYnpMNscg.png)

* **From Customer Profile page**: If you are already on a customer's profile page, click the **Select Actions** drop-down and select **New Customer**.

![2156f4e QUkACD pXEcL5HW zob0XRetbwq6Ox8RQQ](https://files.readme.io/2156f4e-QUkACD_pXEcL5HW_zob0XRetbwq6Ox8RQQ.png)

2. In **New Customer Registration**, enter the customer details.\
   The following image shows a sample registration page of a microsite. The page design and form fields might differ for each microsite.

![55fddb2 gGDwSyOgxEG38RWPoNf9NWmndwU13Sv5IQ](https://files.readme.io/55fddb2-gGDwSyOgxEG38RWPoNf9NWmndwU13Sv5IQ.png)

* In **Name**, enter the name of the customer.
* In the **Email Address**, enter the email ID of the customer. For example, [username123@capillarytech.com](mailto:username123@capillarytech.com), where username123 is the username, capillarytech is the domain and com is the Top Level Domain (TLD).\
  **Username:** The username portion of the email address can consist of alphanumeric characters (letters and numbers) along with hyphens, underscores, plus signs, and dots.\
  **Domain:** The domain portion of the email address can consist of alphanumeric characters (letters and numbers) along with hyphens, underscores, and dots.\
   **TLD:** The TLD must consist only of alphabetic characters (letters).\
  When you enter an email id, the system changes the entered email id into the format `<alphanumeric along with hypen, underscore, plus, dot>@<alphanumeric along with hypen, underscore, dot>.<alphabetic>`and performs the email validation.
* In **External ID**, enter the supported external ID of the customer (if applicable for the org).
* In **Mobile Number**, enter the mobile number of the customer.
* In **Country**, select the country where the customer resides using drop-down options.
* Click **Save**. You will see the message - **Customer registered successfully**. Then, It redirects to the customer profile page. 

## Update customer profile

You can modify existing customer details other than the primary identifier. However, secondary identifiers can be modified if the relevant configuration is enabled on the **Registration Configuration** page. 

Before updating a customer, set the relevant microsite page on which you want to update profile details.

To modify customer details on a microsite through Member Care, follow these steps.

1. On **Member Care**, navigate to  **Search** > **Customer** > **Customer Search**.
2. Search and open a customer profile using customer details such as **name**, **mobile number**, **email ID**, and **external ID**.
3. In Select Actions, select **Edit Customer** using the drop-down option

![cfff408 HNkUH7j6reHPFV9BvgyH2J05DiWLHCL91Q](https://files.readme.io/cfff408-HNkUH7j6reHPFV9BvgyH2J05DiWLHCL91Q.png)

4. In **Update Profile**, modify the customer profile details.

![c229caf OvWpMoA3LVz1jsRs Wv uoX5PCcuHqSuAQ](https://files.readme.io/c229caf-OvWpMoA3LVz1jsRs-Wv_uoX5PCcuHqSuAQ.png)

5. Click **Save**. You will see the message - **Profile updated successfully**. Then, It redirects to the customer profile page.

<Note title="Note">
* The customer profile update will fail if the customer identifier’s value is the same as an existing customer identifier value.
</Note>
