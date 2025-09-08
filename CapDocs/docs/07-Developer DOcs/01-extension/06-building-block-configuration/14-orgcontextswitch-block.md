---
title: OrgContextSwitch Block
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
This block is used in a [connected organization](https://docs.capillarytech.com/docs/organization-management#connected-organizations-connected-orgs) context where a parent-child relationship exists. A parent organization can have one or multiple child organizations under it. Using this block, you can change the execution context from the parent organization to a specific child organization, ensuring that all subsequent blocks execute within the child’s context.

The request originates from the parent organization, and once the context is switched to a child organization, it cannot be reverted to the parent. However, you can execute certain blocks within the parent organization's context by selecting the execution context during block configuration.

# Example scenario

**Requirement**

A parent organization manages four child organizations, each requiring 10 unique APIs to perform organization-specific operations. This leads to a total of 40 APIs - 10 per child organization. This setup caused redundancy, higher maintenance efforts, and increased complexity.

**Solution**

To simplify this, use the OrgContextSwitch block. Create the 10 APIs at the parent organization level. Each API has the following workflow:

1. Execute parent-level operations.

2. Use **OrgContextSwitch** to dynamically switch to the child organization making the request.

3. Complete child-specific operations.

This approach removes 30 redundant APIs.

Refer to this example [dataflow](https://nightly.intouch.capillarytech.com/extensions/neo/ui/rule/759ad9dc-8817-4578-967a-5909373a0142/version/41017cb8-7190-4f47-9b33-5c2c46601200?ruleType=org) to understand how it is configured for the use case.\
Make sure you have access to ParentOrgNew org (51956) and  [access to Neo](https://docs.capillarytech.com/docs/access-management-neo#enabling-neo-extension-access--user-roles).

# Configuring the OrgContextSwtich block

To configure the OrgContextSwtich block,

1. From the dataflow canvas, click on the node and select the **OrgContextSwitch** block.
2. In the **Block Name**, enter the name of the block.\
   Note: Block names cannot contain spaces or special characters, except for underscores (\_). Use camelCase or snake\_case formatting.
3. In the **Authorization** field, enter the basic authorization to access the child organization.
4. In the **X-CAP-API-AUTH-ORG-ID** field, enter the orgID of the child organization.
5. In the **X-CAP-API-AUTH-KEY** field, enter the authorization key of the child organization.
6. In the **X-CAP-API-AUTH-ENTITY-ID** field\*\*,\*\* enter the entity ID of the child organization.
7. If authenticating using the OAuth token, in the **X-CAP-API-OAUTH-TOKEN** field, enter the OAuth token required to access the child organization.\
   **Note**:  You can create the OAuth Token using the [OAuth block](https://docs.capillarytech.com/docs/capillarys-oauth-block).
8. In the **Block Context Execution Strategy** field, choose the execution context. The execution contexts available are CHILD and PARENT.

   * If the execution strategy is set to **CHILD**, all blocks following the **OrgContextSwitch** block will execute within the child organization’s context.
   * If the execution strategy is set to **PARENT**, the MongoDB, Redis Evict, and Kafka blocks will operate within the context of the parent organization, while other blocks will function within the context of the child organization.
9. Configure the [input execution logic](https://docs.capillarytech.com/docs/configuring-conditions), [cachable feature](https://docs.capillarytech.com/docs/configuring-caching), and [define the execution path](https://docs.capillarytech.com/docs/configuring-relations) as per the requirement.
10. Click **Done**.

![Configuring OrgContextSwitch block](https://files.readme.io/ecd6a7ac10887449bc0d8af2f53fdfd69bed30a424535a29e95568125143c8ee-19.02.2025_17.16.46_REC_configuring_orgcontextswitch.gif)