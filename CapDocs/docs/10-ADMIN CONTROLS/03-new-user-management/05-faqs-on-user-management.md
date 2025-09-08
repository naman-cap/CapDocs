---
title: FAQs on User Management
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
### 1. Can I resend the password reset email?

**A:** No, at present, you cannot resend the email to reset the password.

### 2. Can we integrate CAP POC from the User Onboarding UI?

**A:** No, you need to contact the access team.

### 3. Can the new UI be used for multi-org user onboarding?

**A:** Users can be created and edited in the primary organization (Capillary Org) either via the UI or through bulk upload.  

* Once a user is created in Capillary Org, they automatically gain access to other associated organizations.  
* Permissions they receive in these organizations will match the permission set defined in the Capillary Org.  
* *Note:* Deletion/Deactivation flows will be available in future updates.

### 4. How are permissions managed for multi-org users in the new UI?

**A:** Permissions are replicated across organizations for multi-org users in the new UI. Separation of user roles by organization will be available in future updates.

### 5. Will users created in the new UI be able to access the old UI?

**A:** Yes, users will still have access to the old UI. However, their permissions in the new UI are based on the user type set during onboarding in the new UI.

### 6. What happens if a user created in the old UI flow is viewed in the new UI?

**A:** Users created in the old UI flow won’t have user type tags (Org Owner, Admin User, Standard User) in the new UI and will default to Standard User.  

* *To change their user type:* A bulk upload is required to update their roles.

### 7. Are there differences in permission sets between the old and new UIs?

**A:** Yes. In the old UI, permission sets may not be clearly defined for each user. In the new UI, permission sets are explicitly defined, and users are categorized as Org Owner, Admin User, or Standard User, allowing more effective permission management.

### 8. How long are sessions active?

**A:** Sessions remain active for 24 hours. After this period, users must log in again.

### 9. Can I deactivate a user from the new UI?

**A:** No, this feature will be available in future updates. Currently, you can only remove a user from the organization.

### 10. Is there a daily limit for the number of users I can create?

**A:** There is no daily limit. You can create up to:

* 200 users at once through bulk upload
* 10 users at once via email

### 11. What are the password requirements when setting a password?

**A:** The password must meet the following requirements:

* **Minimum length**: 9 characters
* **Complexity**: Must include at least one uppercase letter, one numeric digit, and one special character (e.g., !, @, #, $)
* **Restrictions**:
  * Cannot be the same as the user's username
  * Cannot match any of the user's last 4 previously used passwords

### 12. What is the maximum password age?

**A:** Passwords expire after 30 days. This is a fixed system-wide setting and cannot be configured per organization.

### 13. How many previous passwords are checked when creating a new password?

**A:** The system prevents the reuse of your last 4 passwords, ensuring a unique password is created each time.

### 14. What are the account lockout policies?

**A:** 

* Account locks automatically after 5 incorrect password attempts.
* Locked accounts automatically unlock after 30 minutes.
* The lockout counter resets after a successful login.

### 15. Can the minimum password length be customized?

**A:** No, the minimum password length of 9 characters is a fixed system requirement for all organizations.

### 16. What happens when a password expires?

**A:** When your password expires:

* You’ll be prompted to create a new password at your next login attempt.
* The new password must meet all standard password requirements.
* You cannot reuse any of your last 4 passwords.

### 17. What should I do if my account is locked?

**A:** If your account gets locked:

* Wait for 30 minutes for the account to automatically unlock.
* Contact your system administrator if you need immediate access.
* Ensure you have the correct password before trying again.

### 18. I am not able to log in using SSO. What should I do?

**A:**  If you encounter an error when trying to log in using SSO:

* Verify your login method. Capillary users can use Login with Gmail or by using a username and password. SSO is not applicable.
* Verify that SSO is enabled for your organisation. For details on enabling SSO, refer to the documentation [here](https://docs.capillarytech.com/docs/sso-integration#enabling-sso).
* Ensure that user attributes are correctly configured in Okta or the IAM in use.
* In Okta, check the **External Name** field in the profile to confirm that the SAML standard URL is valid. In some cases, entering the standard URL may not be necessary if it is not configured on the user's IdP (Identity Provider). Contact the Access team for more information.

### 19. Will the permissions from the older UI be carried over to users in the new UI?

**A:** Yes, existing users will retain the permissions they had in the older UI. They will be assigned a permission set called "AOM," which will contain their previous permissions.
