---
title: PII Deletion
excerpt: >-
  This section provides you with information on how to enable PII deletion and
  about the PII data deletion workflow.
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
# Introduction

The Personally Identifiable Information (<Glossary>PII</Glossary>) data deletion feature allows customers to delete their personal data from the customer data platform. This provides customers greater control over their privacy and helps to protect their data or unauthorised access to their information.

# Prerequisites

1. Enable customer status. See [Enable customer status](https://docs.capillarytech.com/docs/customer-2#create-customer-status-labels).

![8f013a2 Enable customer status](https://files.readme.io/8f013a2-Enable_customer_status.png)

2. Make sure that a label is created for each customer status. For more information on customer status labels, see [Create customer status label](https://docs.capillarytech.com/docs/customer-2#create-customer-status-labels).
   <Callout icon="📘" theme="info">
     For Pending Deletion, the platform creates a deletion_pending status automatically and assigns it whenever a deletion request is raised. The platform does not use any label that you created against the Pending Deletion status.
   </Callout>
3. Configure PII deletion. See [Configuring PII deletion](https://docs.capillarytech.com/docs/pii-configuration#configuring-pii-deletion).
4. If required, select and mark the required extended field, custom field and payment mode attributes as PII data. See [Classifying custom field, extended field and payment attribute as PII data](https://docs.capillarytech.com/docs/pii-configuration#classifying-custom-field-extended-field-and-payment-attribute-data-as-pii-data).

# Data deletion workflow

![c669af0 PII](https://files.readme.io/c669af0-PII.jpg)

# Raising a deletion request

A PII deletion request can be performed from the Member Care, refer to .[the documentation on user deletion from Member Care](https://docs.capillarytech.com/docs/manage-id-change_requests#delete-member-account).
For more information on the PII deletion APIs, see [Add deletion request API documentation](https://docs.capillarytech.com/reference/add-a-pii-deletion-request).

# Configuring PII deletion

To enable and configure the PII deletion

1. From Organisation settings, navigate to **Organization Setup** -> **PII Configurations**.
2. To enable the PII deletion, select the **CONF_ENABLE_PII_DELETION** check box.

![5cc0ebb Enable delete PII](https://files.readme.io/5cc0ebb-Enable_delete_PII.png)

3. To set the number of days after which the data is deleted (deletion waiting period), enter the number in the **CONF_PII_DATA_DELETE_AFTER_DAYS** field. You can enter any value between 0-90.

   <Callout icon="📘" theme="info">
     Note

     If the waiting period is set to 0 days, the system deletes the data on the same day that you raised the requests and approves if approval workflow is involved. For example, if a customer raises a deletion request at 1400 hrs, the system processes deletion at midnight on the same day depending on the time zone of the cluster the org belongs to on the Capillary platform.
   </Callout>
4. Click **Submit**.

For information about the data deleted and retained, see [Understanding what data is deleted and retained](https://docs.capillarytech.com/docs/pii-configuration#understanding-what-data-is-deleted-and-retained).
To classify custom fields, extended fields, and payment attributes as PII data, see [Classifying custom fields, extended fields and payment attributes as PII data](https://docs.capillarytech.com/docs/pii-configuration#classifying-custom-field-extended-field-and-payment-attribute-data-as-pii-data).

# Understanding what data is deleted and retained

<Table align={["left","left"]}>
  <thead>
    <tr>
      <th>
        Deleted data
      </th>

      <th>
        Non-deletion data
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        First name and last name
      </td>

      <td>
        User ID
      </td>
    </tr>

    <tr>
      <td>
        Identifiers such as mobile, e-mail and external id
      </td>

      <td>
        Transactions (but transaction custom/extended fields can be configured to be deleted).  See 

        [Classifying custom field, extended field and payment attribute data as PII data](https://docs.capillarytech.com/docs/pii-configuration#classifying-custom-field-extended-field-and-payment-attribute-data-as-pii-data)

        .
      </td>
    </tr>

    <tr>
      <td>
        Customer custom and extended fields. This is configurable. See 

        [Classifying custom field, extended field and payment attribute data as PII data](https://docs.capillarytech.com/docs/pii-configuration#classifying-custom-field-extended-field-and-payment-attribute-data-as-pii-data)

        .
      </td>

      <td>
        Communications data
      </td>
    </tr>

    <tr>
      <td>
        Payment mode attributes against a transaction
      </td>

      <td>
        Payment mode (Card, UPI, BNPL) details used for the transaction. But the attributes can be deleted. See Configuring data that need not be deleted.
      </td>
    </tr>

    <tr>
      <td>
        V1 and V2 profile identifiers
      </td>

      <td>
        PII data in the promo engine or on the OTA (Over The Air) side
      </td>
    </tr>

    <tr>
      <td>
        V1 and V2 profile comm channels
      </td>

      <td>
        Coupons/promotions/gift vouchers and all benefits
      </td>
    </tr>

    <tr>
      <td>
        Identifiers/login details in the auth engine
      </td>

      <td>
        Behavioural events
      </td>
    </tr>

    <tr>
      <td>
        Card custom fields and card extended fields. See Configuring data that need not be deleted.
      </td>

      <td>
        Points data (will still be attributed to User ID)
      </td>
    </tr>

    <tr>
      <td>
        Search database (solr/ES)
      </td>

      <td>
        Supplementary and coalition memberships
      </td>
    </tr>

    <tr>
      <td>
        Identifier change logs
      </td>

      <td>
        Targets and Member care profiles -  If you have the profile URL, you can access the profile; however, the page displays a message indicating that the customer has been deleted.
      </td>
    </tr>

    <tr>
      <td>
        Identifiers that are kept in the change requests log are set to null
      </td>

      <td>
        User group dependencies and associations. Deleted customers remain part of groups/companies unless explicitly removed from groups (User ID remains)
      </td>
    </tr>

    <tr>
      <td>
        Customer data audit logs
      </td>

      <td>
        PII captured in leads data
      </td>
    </tr>

    <tr>
      <td>
        * <br />
      </td>

      <td>
        Any other details not mentioned under Deleted data.
      </td>
    </tr>
  </tbody>
</Table>

<Note title="Note">
In Databricks, deleted customers must be explicitly excluded in queries to ensure accurate reporting.
</Note>

# Classifying custom field, extended field and payment attribute data as PII data

By default when you enable PII deletion configuration, the mobile, e-mail and external ids from the customer entity data get deleted. For custom fields, extended fields and payment attributes, you have the option to include them as part of the PII data.

## Custom field and Extended fields

If you want to include custom fields and extended fields as part of PII data, perform the following:

1. From the Organisation settings, navigate to **Master Data Management** > **Data Model** > **Custom fields/Extended fields**.

![13613e9 Navigate to Custom field](https://files.readme.io/13613e9-Navigate_to_Custom_field.png)

2. Select the desired custom field/extended field that needs to be part of PII data.
3. Click **Edit**.
4. Select the **Is this pii data/Is it PII data** check box.

![043f915 PII data Custom field](https://files.readme.io/043f915-PII_data_Custom_field.png)

5. Click **Submit**.

## Payment attributes

If you want  to include payment attributes as part of the PII data, perform the following:

1. From the **Organisation settings**, navigate to **Organisation set up** > **Payment modes** > **Tenders**.

![6717c50 Payment mode](https://files.readme.io/6717c50-Payment_mode.png)

2. Select the desired tender and click the edit icon.
   ![](https://files.readme.io/4ee96f5-Edit_tender.png)
3. Select the desired attribute that needs to be part of the PII data and click the edit icon.

![cabd710 Edit attribute ](https://files.readme.io/cabd710-Edit_attribute_.png)

4. Click the attributes value icon.

![8c348d7 Click attribute icon](https://files.readme.io/8c348d7-Click_attribute_icon.png)

5. From the Selection drop-down, select the desired unit.

![e6faa1d Clear PII data ](https://files.readme.io/e6faa1d-Clear_PII_data_.png)

6. Select the **Is PII Data check** box.
7. Click **Save**.

# Submitting and approving requests through Membercare

For information on submitting and approving member account deletion requests from Membercare, refer to [Request management](https://docs.capillarytech.com/docs/manage-id-change_requests#delete-member-account) documentation.

# Deletion request status

| Action                                                       | Request status | Customer status and status label   |
| :----------------------------------------------------------- | :------------- | :--------------------------------- |
| Capillary receives a deletion request                        | PENDING        | No change to the customer status   |
| The brand rejects the deletion request                       | REJECTED       | No change to the customer status   |
| Capillary receives a deletion request                        | APPROVED       | Pending Deletion: Deletion_pending |
| The customer cancels the deletion request                    | CANCELED       | Previous customer status           |
| Capillary deletes the customer PII after the waiting period. | DELETED        | DELETED: Deleted                   |

# PII Deletion in Connected Orgs

PII deletion in connected organizations follows the configured deletion policy. There are two policy types:

1. **Localised PII Deletion Policy**
2. **Global PII Deletion Policy**

## Localised PII Deletion Policy

Under the localized policy, each organization, whether parent or child, can submit and update deletion requests independently. PII data is removed only from the requesting organization. The PII deletion configuration (for example, the number of days after which data is deleted) is also applied according to the respective organization.

## Global PII Deletion Policy

Under the global policy, only the parent organization can submit or update deletion requests. Once executed, the PII data is removed from the parent and all connected child organizations. If a parent-level request for deletion is raised for a customer under the global policy, no child can update that deletion request.

Also, under the global deletion policy, the parent organization's configurations for PII deletion take precedence and override the configurations set at the child level.

| PII Deletion Request Origin | Action               | Localised Policy       | Global Policy                     |
| --------------------------- | -------------------- | ---------------------- | --------------------------------- |
| **Child**                   | PII deletion request | Applies to that child  | Blocked                           |
| **Child**                   | PII deletion update  | Applies to that child  | Blocked                           |
| **Parent**                  | PII deletion request | Applies to parent only | Applies to parent and every child |
| **Parent**                  | PII deletion update  | Applies to parent only | Updated in parent and every child |

## Setting the PII Deletion Policy

The PII deletion policy can be configured through the config `PII_DELETION_POLICY`. To set the policy, create a JIRA ticket to the Capillary Product Support team.

<Note title="Note">
**
In connected orgs, it is recommended to set the PII deletion configuration the same for the parent and the respective child org.
</Note>

# FAQs

1. Can we raise bulk PII data deletion requests?
   For bulk PII deletion, use Connect+. See [PII data flow](https://docs.capillarytech.com/docs/pii-data-workflow).
2. Is the PII deletion request approved by default?
   This depends on the query parameter. PII deletions need to be approved.
3. Are custom fields and extended fields part of PII data?
   No. But, you can mark the desired custom fields and extended fields as PII data.
4. Will PII details in the Auth engine be deleted for the users who raised the request?
   Yes. After the PII deletion waiting period lapses.
5. Will event data (behavioural events, transaction events, etc.)be deleted?
   No. Data attributed to the user id is not deleted as the user id is not categorized as PII data.
6. What happens if the waiting period is set as 0 days?
   If the waiting period is set to 0 days, the system deletes the data on the same day.
7. My brand's transaction custom fields/extended fields also have PII data. Can those be marked for deletion?
   Yes. You can mark those data as PII data. See [Custom field and extended field PII data](https://docs.capillarytech.com/docs/pii-configuration#custom-field-and-extended-fields).
8. Can I view a deleted customer's events on Member Care?
   Yes.
9. Will the profile be visible if I go to the profile using user_id in the Member Care URL?
   No.
10. Are payment mode attributes deleted by default?
    No. But you can configure payment attributes as PII data. See [payment attributes](https://docs.capillarytech.com/docs/pii-configuration#payment-attributes).
11. My brand's payment mode attributes have sensitive PII data. Can I delete that?
    You can configure payment attributes as PII data. See [payment attributes](https://docs.capillarytech.com/docs/pii-configuration#payment-attributes).
12. I want to delete event data (transactions, behavioural events and so on) of customers. Is this possible?
    No.
13. Will communications sent to a customer be deleted?
    No.
14. What happens to active coupons that are not redeemed?
    You cannot redeem the active coupons associated with the deleted customer ID.
15. Will OTP messages get sent to customers?
    After the PII deletion, the customer will not get any message.
16. How can a customer track the status of a deletion request?
    Brands can use the GET APIs and the event notifications to update the status of the customers.
17. Is there a UI to view all deletion requests raised in an org?
    Yes.
18. How can a CSR raise a deletion request?
    CSR can raise deletion requests through member care.
19. Can any CSR raise a deletion request?
    This depends on access rights. If you have access, you can raise deletion requests on behalf of a customer.
20. How is PII deletion handled for connected orgs?
    In connected orgs, PII deletion is based on the PII deletion policy configuration.
