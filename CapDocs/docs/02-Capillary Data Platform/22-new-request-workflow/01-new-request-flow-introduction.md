---
title: Introduction
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
# Request-workflow specific terms

* **Workflow:** A workflow is a defined sequence of steps or tasks that are carried out to complete a particular process. For example, tasks carried out to complete the customer identification change process.\
  Standard workflow: A standard request workflow is a workflow that is readily available to all brands by default and is created by the Capillary product/tech team as a generic workflow that can cater to the requirements of most brands.
* **Custom workflow:**  A tailored workflow designed specifically for a brand when the standard workflow does not meet its unique requirements. This custom workflow is developed with the assistance of the Capillary Solutions team to address the brand's specific needs.
* **Action:** An action refers to any operation or task performed by an Admin user to a Customer’s profile or on the Capillary platform. For example, tasks such as changing customer status, redeeming points, issuing goodwill points, earning badges, or other critical operations.
* **Marker:** A maker is a user role responsible for initiating and submitting a request or action. The maker creates and submits tasks such as changing customer status, redeeming points, or issuing goodwill points.
* **Checker:** A checker is a user role responsible for reviewing and approving or rejecting requests or actions initiated by the maker. The checker ensures that the submitted tasks, such as changing customer status, redeeming points, or issuing goodwill points, meet the necessary criteria.

# Overview

A brand can have different business operations, and depending on the nature of their business and loyalty program setup, you may need to restrict certain admin user actions on the Capillary platform. A typical way of gate-keeping user actions is maker-checker-based workflow - wherein certain Admin users with “maker” permissions can raise a request & others with “Checker” permissions are tasked with evaluating the requests & approving or rejecting them.

As of now, the Capillary platform supports Maker-checker workflows on Membercare for the following workflows:

* [Identifier Change - Mobile, Email, External ID](https://docs.capillarytech.com/docs/manage-id-change_requests)
* [Goodwill points ](https://docs.capillarytech.com/docs/issue-goodwill-points_coupons)
* [Goodwill coupons](https://docs.capillarytech.com/docs/issue-goodwill-points_coupons) 
* [PII Deletion](https://docs.capillarytech.com/reference/pii-deletion) 
* [Account Merge ](https://docs.capillarytech.com/docs/manage-id-change_requests#merge-accounts)
* [Retro-transaction claims](https://docs.capillarytech.com/docs/issue-goodwill-points_coupons)

With the new request workflow framework; brands can now incorporate different request workflows (maker-checker-based workflows) on the platform.

At present, the following requests are supported using the new request framework:

* [Earn badge](https://docs.capillarytech.com/docs/configuring-earn-badge-request-workflow)
* [Points redeem](https://docs.capillarytech.com/docs/configuring-points-redemption-request-workflow)
* [Customer status change](https://docs.capillarytech.com/docs/configuring-customer-status-change-request-workflow)
* [Goodwill points](https://docs.capillarytech.com/docs/configuring-goodwill-points-request-workflow)
* [Retro-transaction claims](https://docs.capillarytech.com/reference/retro-transaction-claim-transaction)
* [Issue Badge](https://docs.capillarytech.com/docs/configuring-issue-badges-request-workflow)

The new request workflow framework offers ready-to-use standard workflow to cater to the needs of the majority of the requirements of the brand. 

In case, the standard workflows don’t meet a brand’s requirements; you can contact the Capillary solutions team to create custom workflows tailored to meet your needs. A custom workflow supports complex use cases in a workflow such as multiple approval workflows and validation-based workflows. Extension-based validations can also be configured as a part of a workflow.

The audit logging of the requests can be performed using the request workflow APIs. A request ID is created for every request, allowing you to retrieve the associated details using this ID.

<Note title="Note">
s
* At present, there are two request workflows for Goodwill points & Retro-transaction claims.  In the future releases, all the existing Orgs from the older workflows will be migrated to the newer workflow.
* Reporting on the new requests is still not available on Insights and will be available in te future releases.
</Note>

You can configure the request workflows at **Member Care > Settings > Request workflows**.
