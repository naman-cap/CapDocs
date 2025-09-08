---
title: Dataflow Versioning System
excerpt: ''
deprecated: false
hidden: true
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
# Introduction

The Dataflow Versioning System helps manage different versions of dataflows for an API. It provides a reliable way to move smoothly between draft, pending approval, approved, and live states. The sections below explain the system's purpose, workflow, and features.

# System Overview

## States of a dataflow

A dataflow can have one of four states, also called statuses: 

* DRAFT
* WAITING\_FOR\_APPROVAL
* APPROVED
* REJECTED

The flow works as follows:

1. A dataflow initially starts in the `DRAFT `state.
2. When the dataflow is sent for approval, its state changes to `WAITING_FOR_APPROVAL`.
3. If approved, the state changes to `APPROVED`, making it non-editable.
4. If rejected, the state becomes `REJECTED`, which is also non-editable. Editing a `REJECTED `dataflow changes it back to `DRAFT`.
5. After approval, the system creates a new `DRAFT `state where you can restore configurations and dataflow graphs from the last approved version.

The flowchart represents the movement of the dataflow from one state to another.

![b025ecc89aca94dcc8080ab0f46a0ac5b60fb88f0d0bef16332db1a61fe0fab1 Blank diagram](https://files.readme.io/b025ecc89aca94dcc8080ab0f46a0ac5b60fb88f0d0bef16332db1a61fe0fab1-Blank_diagram.png)

> 🚧 Note
>
> * Dataflow can be in DRAFT, WAITING\_FOR\_APPROVAL, or REJECTED states at a given time, as these states are mutually exclusive. 
> * There can be multiple APPROVED versions of a dataflow, but only one can be Live.
> * Each dataflow can be marked as Active or Inactive. If marked Inactive, a rule does not apply even if it is Live.

### Rule identifiers

Rule Identifiers uniquely define each rule and do not require approval or versioning.

The identifier represents:

* **refId**: The `refId` is a unique identifier (UUID) assigned to each rule. This ID is system-generated and ensures that each rule is distinctly identifiable.
* **Name**:The `name `identifies the rule and does not require versioning. Admins can edit this name.
* **Namespace**: The `namespace `represents the organisation or entity associated with the rule and is identified by an `orgId`.

### Rule entry trigger and DAG-related data

The Rule Entry Trigger and DAG-related data contain components that require approval and versioning. These elements control how dataflows operate and execute.

The key elements are:

* **Method**: Defines the HTTP method such as GET or POST which triggers the rule.
* **URL**: Specifies the endpoint URL for triggering or interacting with the rule.
* **Blocks**: Represents the individual processing blocks in the dataflow, each performing a specific function within the workflow.
* **Relations**: Describes the connections between blocks to guide the execution flow.

## Collection schema and structure

Neo includes three main collections: 

* Rules
* RuleVersions
* RuleAuditLogs

 Each collection serves a unique purpose in managing and tracking rule data.

### Rules

The `Rules` stores information about each rule, including identifiers, states, and versioning details. Here is the schema for a Rule,

```json

{
    refId: String, // Unique identifier
    name: String,
    namespace: Number, // orgId
    active: Boolean,
    liveVersion: String, // Refers variantId of RuleVersions collection. There will be a default value 'NO_LIVE' to indicate that no version is live currently

    createdAt: timestamp, createdBy: Number

    updatedAt: timestamp, updatedBy: Number
}
```

**Indexes**

The Neo system indexes fields to optimise search and retrieval. It creates a unique index on the combination of `refId`, `namespace`, and `liveVersion`. This index ensures each rule has a unique identifier within a specific organisation and live version context.

**Displaying rule data**

 The Method and URL of the live version are displayed in the listing table.

### Ruleversions schema

The `RuleVersions `schema defines the structure and details for each version of a rule. It tracks the states, configurations, and actions associated with each rule version.

Here’s a breakdown of each field in the schema,

```json
{
    variantId: String, // Unique identifier for RuleVersions collection,
    versionId: Number, //Starts from 1
    refId: String, // Refers refId of Rule collection
    namespace: Number, //orgId
    status: String, // DRAFT, WAITING_FOR_APPROVAL, APPROVED, REJECTED
    blocks: Array, // Array of blocks
    method: String, // GET, POST, PUT, DELETE
    url: String, // URL of the API
    createdBy: Number, // userId
    createdAt: Date,
    updatedBy: Number, // userId
    updatedAt: Date,
}
```

**Indexes**

The `RuleVersions `collection uses indexes to uniquely identify each rule version and optimize search operations:

* `refId + variantId (unique)`: Ensures that each combination of `refId `and `variantId `is unique, enabling the system to locate a specific rule version by its `variantId`.
* `refId + versionId (unique)`: Ensures each combination of `refId `and `versionId `is unique, keeping version numbers sequential without duplication for each rule.
* `namespace + url + method + versionId (unique)`: Ensures that each combination of `namespace`, `url`, `method`, and `versionId `is unique, preventing duplicate configurations for rule versions within the same organization and ensuring version-specific uniqueness across these attributes.

### RuleAuditLogs schema

The `RuleAuditLogs `schema tracks and logs changes to rules and their versions. This collection maintains an audit trail by recording what is updated, who makes the change, and when it occurs. 

Here’s a breakdown of each field,

```json
{
    refId: String, // Unique identifier of Rules collection
    variantId: String, // Unique identifier of RuleVersions collection. Optional
    updatedBy: Number, // userId
    updatedAt: Date,
    changedFields: [
        {
            fieldName: String, // Name of the field that was changed
            toValue: Any, comment: String //comment is optional
        }
    ]
}
```

This process is non-atomic, meaning that when an API call initiates changes, the system writes the change to `RuleAuditLogs `first, followed by `RuleVersions`, and then `Rules`. This sequence ensures an audit log entry is created before any updates occur in the `RuleVersions `or `Rules `collections.

## ApiSignature and Implementation details

The following sections explain the structure of the API endpoints and outline the steps involved in their implementation.

### POST /v1/xto6x/rule/:refId/version/:variantId/:action

The `POST /v1/xto6x/rule/:refId/version/:variantId/:action` endpoint lets you perform actions such as updating, submitting for approval, approving, rejecting, editing, or restoring a rule version. Specify the desired action in the path parameter to execute it on the rule version.

**Supported actions**

* **update**: Updates a `DRAFT `version of a rule.
* **send-for-approval**: Changes the state of a `DRAFT `rule to `WAITING_FOR_APPROVAL`.
* **edit**: Reverts a `REJECTED `rule to `DRAFT`.
* **reject**: Changes a `DRAFT `rule to `REJECTED`.
* **approve**: Approves a `WAITING_FOR_APPROVAL` rule and sets it to `APPROVED`.
* **restore**: Restores the `URL`, `method`, and `blocks `fields to match the last approved version of the rule.

  **Rule version status transitions examples**

#### Update

The `update `endpoint allows you to update a rule currently in the `DRAFT `state. When successful, the rule remains in the `DRAFT `state but reflects the latest changes.

 **Endpoint**: `POST /v1/xto6x/rule/:refId/version/:variantId/update`

  **Description**: Update a `DRAFT `version of a rule.

**Request payload**

```json
{
    "blocks": [],
    "method": "GET",
    "url": "getAccountSummary"
}
```

**Successful response**

Status: 200

```json
{
    "variantId": "uuid",
    "refId": "uuid",
    "versionId": 1,
    "method": "GET",
    "url": "getAccountSummary",
    "blocks": [],
    "status": "DRAFT",
    "createdBy": 123,
    "createdAt": "timestamp",
    "updatedBy": 123,
    "updatedAt": "timestamp when updated"
}
```

**Error responses**

* If the rule is not in the `DRAFT `state
  ```json
  {
      "success": false,
      "status": 400,
      "error": "A rule which is not in DRAFT state cannot be updated"
  }
  ```
* If another rule in the same namespace uses the same `URL `and `method`
  ```json
  {
      "success": false,
      "status": 400,
      "error": "Url, Method combination is used in another rule version for current namespace"
  }
  ```
* If `refId `or `variantId `is invalid

  ```json

  {
      "success": false,
      "status": 400,
      "error": "Provided refId or variantId is not valid"
  }
  ```
* Server error

  ```json
  {
      "success": false,
      "status": 500,
      "error": "Some error occurred or any appropriate message"
  }
  ```

  **Implementation details**

1. **Parameters**
   * Request uses `refId `and `variantId `as path parameters.
   * Retrieves `orgId `from the request headers.
2. **Validation**
   * Checks if the `refId + variantId + orgId` combination exists in the `RuleVersions `collection. If not, it returns an error.
   * Ensures each rule version in the `namespace ` or`orgId` has a unique `URL `and `method `combination. If another rule version uses the same `URL `and `method`, it returns an error.
3. **State check and update**
   * Verifies that the rule is in the `DRAFT `state.
   * Prepares the updated `blocks`, `url`, and `method `and logs the change.
   * Writes the update first to `RuleAuditLogs`, then to `RuleVersions`.

#### Send for approval

The` Send for Approval` endpoint `(POST /v1/xto6x/rule/:refId/version/:variantId/send-for-approval)` changes a rule version’s state from `DRAFT `to `WAITING_FOR_APPROVAL`. This action signals that the rule is ready for review, preventing further edits until approval or rejection.

**Request payload**\
This action does not require a payload.

**Successful response**\
Status: 200

On success, the response confirms that the state has changed to `WAITING_FOR_APPROVAL` and includes details about the rule version:

```json
{
    "variantId": "uuid",
    "refId": "uuid",
    "versionId": 1,
    "method": "GET",
    "url": "getAccountSummary",
    "blocks": [],
    "status": "WAITING_FOR_APPROVAL",
    "createdBy": 123,
    "createdAt": "timestamp",
    "updatedBy": 123,
    "updatedAt": "timestamp when sent for approval"
}
```

**Error responses**

* Rule is not in `DRAFT` state

  ```json

  {
      "success": false,
      "status": 400,
      "error": "A rule which is not in DRAFT state cannot be sent for approval"
  }
  ```
* Invalid `refId` or `variantId`
  ```json
  {
      "success": false,
      "status": 400,
      "error": "Provided refId or variantId is not valid"
  }
  ```
* Server Error

  ```json

      "success": false,
      "status": 500,
      "error": "Some error occurred or any appropriate message"
  }
  ```

**Implementation details**

1. **Parameters**
   * Endpoint requires `refId `and `variantId` in the path.
   * Retrieves the `orgId `from request headers
2. **Validation**
   * Confirms if a valid` refId + variantId + orgId` combination is available in the `RuleVersions `collection.
   * Verifies that the rule is in a `DRAFT` state; otherwise, it returns an error.
3. **State update**
   * Changes rule state from `DRAFT `to `WAITING_FOR_APPROVAL`.
   * Writes the change to `RuleAuditLogs `first, then updates `RuleVersions`.

#### Edit

The **Edit** endpoint reopens a previously rejected rule version, changing its state from `REJECTED `to `DRAFT`. This action allows you to revise and prepare the rule version for resubmission.

**Endpoint**: `POST /v1/xto6x/rule/:refId/version/:variantId/edit`

**Description**: Updates a rule version from `REJECTED` back to `DRAFT`.

**Request payload**:This action does not require a payload.

**Successful response**

A successful response confirms the state change to `DRAFT `and provides details about the rule version, including the method, URL, blocks, and timestamps: The status for a successful response is 200 and the success payload is below.

```json
{
    "variantId": "uuid",
    "refId": "uuid",
    "versionId": 1,
    "method": "GET",
    "url": "getAccountSummary",
    "blocks": [],
    "status": "DRAFT",
    "createdBy": 123,
    "createdAt": "timestamp",
    "updatedBy": 123,
    "updatedAt": "timestamp when made to draft"
}
```

**Error responses**

Below are the different error responses

* If rule is not in `REJECTED `state
  ```json
  {
      "success": false,
      "status": 400,
      "error": "A rule which is not in REJECTED state cannot be changed to DRAFT state"
  }
  ```
* If `refId `or `variantId `is invalid

  ```json

  {
      "success": false,
      "status": 400,
      "error": "Provided refId or variantId is not valid"
  }
  ```
* Server error
  ```json
  {
      "success": false,
      "status": 500,
      "error": "Some error occurred or any appropriate message"
  }
  ```

**Implementation details**

1. **Parameters**
   * Request uses `refId `and `variantId `as path parameters.
   * Retrieves the `orgId `from request headers.
2. **Validation**
   * Confirms if a valid `refId + variantId + orgId` combination is available in the `RuleVersions `collection.
   * Verifies that the rule is in a `REJECTED `state; otherwise, it returns an error.
3. **State update**
   * Update the rule’s status to `DRAFT`.
   * Writes the change to `RuleAuditLogs `first, then updates `RuleVersions`.

#### Reject

The **Reject** action changes a rule version’s status from `WAITING_FOR_APPROVAL `to `REJECTED`.

**Endpoint**: `POST /v1/xto6x/rule/:refId/version/:variantId/reject`

**Description**: Changes the status of a rule version from `WAITING_FOR_APPROVAL `to `REJECTED`.

**Request payload**: The request payload must include a reason for rejection.

Sample request

```json
{
  "reason": "Rejected this since configuration for api does not seem to be correct",
}
```

**Successful response**

The response confirms the status change to `REJECTED `and includes details of the updated rule version:

```json
{
    "variantId": "uuid",
    "refId": "uuid",
    "versionId": 1,
    "method": "GET",
    "url": "getAccountSummary",
    "blocks": [],
    "status": "REJECTED",
    "createdBy": 123,
    "createdAt": "timestamp",
    "updatedBy": 123,
    "updatedAt": "timestamp when rejected"
}
```

**Error responses**

The different error responses are as follows:

* If the rule is not in the  `WAITING_FOR_APPROVAL` state

  ```json

  {
      "success": false,
      "status": 400,
      "error": "A rule which is not in WAITING_FOR_APPROVAL state cannot be REJECTED"
  }
  ```
* If `refId `or `variantId `is invalid
  ```json
  {
      "success": false,
      "status": 400,
      "error": "Provided refId or variantId is not valid"
  }
  ```
* Server error
  ```json
  {
      "success": false,
      "status": 500,
      "error": "Some error occurred or any appropriate message"
  }
  ```

**Implementation details**

1. **Parameters**
   * Request uses `refId `and `variantId `as path parameters.
   * Retrieves the `orgId `from request headers.
2. **Validation**
   * Validate that the combination of `refId`, `variantId`, and `orgId `exists in the `RuleVersions `collection. If not, return an error.
   * Verify that the rule’s current state is `WAITING_FOR_APPROVAL`.
3. **State update**
   * Update the rule’s status to `DRAFT`.
   * Writes the change to `RuleAuditLogs `first, then updates `RuleVersions`.

#### Approve

The **Approve** operation changes a rule version’s status from `WAITING_FOR_APPROVAL `to `APPROVED`.

**Endpoint**: `POST /v1/xto6x/rule/:refId/version/:variantId/approve`

**Description**: This endpoint marks a rule version as `APPROVED`, indicating it is finalised and no longer editable.

**Request payload**: The request requires a reason for approval.

Sample request

```json
{
  "reason": "Approving this since config looks good"
}
```

**Successful response**

When the request succeeds, the API confirms the rule version’s approval status with the following response:

```json

{
    "variantId": "uuid",
    "refId": "uuid",
    "versionId": 1,
    "method": "GET",
    "url": "getAccountSummary",
    "blocks": [],
    "status": "APPROVED",
    "createdBy": 123,
    "createdAt": "timestamp",
    "updatedBy": 123,
    "updatedAt": "timestamp when approved"
}
```

**Error response**

The different error responses are as follows:

* If the rule is not in the `WAITING_FOR_APPROVAL `state

  ```json

  {
      "success": false,
      "status": 400,
      "error": "A rule which is not in WAITING_FOR_APPROVAL state cannot be APPROVED"
  }
  ```
* If `refId `or `variantId `is invalid
  ```json
  {
      "success": false,
      "status": 400,
      "error": "Provided refId or variantId is not valid"
  }
  ```
* Server error

  ```json

  {
      "success": false,
      "status": 500,
      "error": "Some error occurred or any appropriate message"
  }
  ```

**Implementation details**

1. **Parameters**
   * Request uses `refId `and `variantId `as path parameters.
   * Retrieves the `orgId `from request headers.
2. **Validation**
   * Validate that the combination of `refId`, `variantId`, and `orgId` exists in the `RuleVersions `collection. If not, return an error.
   * Verify that the rule’s current state is `WAITING_FOR_APPROVAL`.
3. **Approval process**
   * Changes the rule status from `WAITING_FOR_APPROVAL` to `APPROVED`.
   * Writes the approval details and reason to the audit logs and updates the `RuleVersions `collection with the new status.
4. **Prepare new draft**
   * After approval, a new `DRAFT `version of the rule is automatically created in `RuleVersions `for future modifications if needed, while keeping the current version as `APPROVED`.

#### Restore

The **Restore** operation resets the `blocks`, `url`, and `method `fields in a `DRAFT` rule version to match those in the latest approved version. This allows you to revert easily to a verified configuration.

**Endpoint**: `POST /v1/xto6x/rule/:refId/version/:variantId/restore/?variantId`

**Description**: Resets the `blocks, url`, and `method `fields in a `DRAFT `version to the configuration of the latest approved version. If a `variantId `for a specific approved version is provided in the query parameter, the system restores from that version instead.

**Request and query parameters**: No request payload is required. The optional `variantId `query parameter allows you to specify an approved version to restore from; if not provided, the system defaults to the latest approved version.

**Successful response**

A successful response confirms the fields in the `DRAFT `version have been reset to match the approved version’s values.

```json
{
    "variantId": "uuid",
    "refId": "uuid",
    "versionId": 1,
    "method": "GET", //This field is same as present in last appr. ver.
    "url": "getAccountSummary", //same as above
    "blocks": [], //same as above 
    "status": "DRAFT",
    "createdBy": 123,
    "createdAt": "timestamp",
    "updatedBy": 123,
    "updatedAt": "timestamp when updated"
}
```

**Error response**

The different error responses are as follows:

* If the rule is not in the `APPROVED `state
  ```json
  {
      "success": false,
      "status": 400,
      "error": "You can only restore from the approved version."
  }
  ```
* If there are no rules in the `APPROVED `version to restore from
  ```json
  {
      "success": false,
      "status": 400,
      "error": "There is no approved version to restore from"
  }
  ```
* If `refId `or `variantId `is invalid

  ```json

  {
      "success": false,
      "status": 400,
      "error": "Provided refId or variantId is not valid"
  }
  ```
* Server error
  ```json
  {
      "success": false,
      "status": 500,
      "error": "Some error occurred or any appropriate message"
  }
  ```

**Implementation details**

1. **Parameters**
   * Extract `refId `and `variantId `from the path and get `orgId `from request headers.
2. **Validation**
   * Check that the `refId`, `variantId`, and `orgId `combination exists in the `RuleVersions` collection.
   * Ensure the rule version is in `DRAFT `status.
3. **Restore process**
   * If `variantId `is not provided, retrieve the latest approved version based on the most recent timestamp. If provided, validate that the `variantId `represents an approved version.
   * If a valid approved version is found, retrieve its values for `blocks`, `url`, and `method`.
4. **Update logs and ruleVersions**
   * Log the restore action, then update the current `DRAFT `rule version with the values from the approved version for `blocks`, `url`, and `method`.

### POST /v1/xto6x/rule/:refId/:action

The `POST /v1/xto6x/rule/:refId/:action` endpoint allows you to set the rule as active or inactive, mark a version as live, and update the rule name.

**Supported actions**

* active:  Activates a rule
* inactive: Inactivates a rule
* live: Makes a specified version Live
* name: Update the name of the rule globally

#### Active

The `POST /v1/xto6x/rule/:refId/active` endpoint activates a specified rule by setting its status to `active`.

**Endpoint**:  `POST /v1/xto6x/rule/:refId/active`

**Request payload:** This action does not require a payload. The `refId` is specified as a path parameter.

**Successful response**

On success, returns information about the activated rule.

Sample response

```json
{

    "refId": "uuid",

    "name": "Placeholder 3 Post",

    "namespace": 1231,

    “active”: true,

    “liveVersion”: "uuid",

    “createdAt”: timestamp,

    “createdBy”: Number,

    “updatedAt”: timestamp,

    “updatedBy”: Number,

}
```

**Error responses**

The different error responses are as follows:

* If the rule is already in `active `state
  ```json
  {
      "success": false,
      "status": 400,
      "error": "Rule is already in active state"
  }
  ```
* If `refId` is invalid
  ```json
  {
      "success": false,
      "status": 400,
      "error": "Provided refId is not valid"
  }
  ```
* Server error
  ```json
  {
      "success": false,
      "status": 500,
      "error": "Some error occurred or any appropriate message"
  }
  ```

**Implementation details**

1. **Validation**
   * Verify a rule with the specified `refId `and the `orgId `exists in the rules collection.
   * Return a 400 error if the rule does not exist or if it is already `active` state.
2. **Activation and Logging**
   * Set the rule’s `active` status to `true`.
   * Log the activation event.
   * Update the rule’s record in the rules collection with the new status.

#### Inactive

The `POST /v1/xto6x/rule/:refId/inactive` endpoint deactivates a specific rule by setting its status to `inactive`.

**Endpoint**: `POST /v1/xto6x/rule/:refId/inactive`

**Request payload**: This endpoint does not require any request payload. The `refId `in the path parameter, which identifies the rule to deactivate.

**Successful response**: The response contains information about the rule, with the active status set to false, indicating the rule is now inactive.

The sample response is as follows:

```json
{

    "refId": "uuid",

    "name": "Placeholder 3 Post",

    "namespace": 1231,

    “active”: false,

    “liveVersion”: "uuid",

    “createdAt”: timestamp,

    “createdBy”: Number,

    “updatedAt”: timestamp,

    “updatedBy”: Number,

}
```

**Error response**

The different error responses are as follows:

* If the rule is already in the `inactive` state

  ```json

  {
      "success": false,
      "status": 400,
      "error": "Rule is already in inactive state"
  }
  ```
* If `refId `is invalid
  ```json
  {
      "success": false,
      "status": 400,
      "error": "Provided refId is not valid"
  }
  ```
* Server error
  ```json
  {
      "success": false,
      "status": 500,
      "error": "Some error occurred or any appropriate message"
  }
  ```

**Implementation details**

1. **Parameter validation**

* Verify a rule with the specified `refId` and the `orgId` exists in the rules collection.
* Return a 400 error if the rule does not exist or is already in `inactive` state. 

2. **Activation and Logging**
   * Set the rule’s `active` status to `false`.
   * Log the activation event.
   * Update the rule’s record in the rules collection with the new status.

#### Live

This endpoint sets a given rule version as `live `by updating its `liveVersion` field with the specified version. 

**Endpoint**: `POST /v1/xto6x/rule/:refId/live`

**Request payload**: No payload is required. The request requires the `variantId` query parameter, which specifies the version of the rule to make `live`.

**Successful response**: The response indicates the successful update of the rule, with the following details:

```json
{

    "refId": "uuid",

    "name": "Placeholder 3 Post",

    "namespace": 1231,

    “active”: true,

    “liveVersion”: "uuid",

    “createdAt”: timestamp,

    “createdBy”: Number,

    “updatedAt”: timestamp,

    “updatedBy”: Number,

}
```

**Error response**

The different error responses are as follows:

* If the rule is not in the `approved` state
  ```json
  {
      "success": false,
      "status": 400,
      "error": "A rule version which is not in APPROVED state cannot be made live"
  }
  ```
* If `refId` or `variantId` is invalid
  ```json
  {
      "success": false,
      "status": 400,
      "error": "Provided refId or variantId is not valid"
  }
  ```
* Server error
  ```json
  {
      "success": false,
      "status": 500,
      "error": "Some error occurred or any appropriate message"
  }
  ```

**Implementation details**

1. **Parameters**
   * Check that the `refId`, `variantId`, and `orgId` combination exists in the `RuleVersions` collection.
2. **State check**
   * Verifies that the specified rule version is in the `APPROVED` state. 
   * If not, it returns an error.
3. **Update the rule**
   * If the version is approved, the system updates the `liveVersion` field of the rule with the specified `variantId`.
4. **Log and update**
   * Logs the change and updates the rules collection with the new `liveVersion`.

#### Name

This endpoint updates the rule's name to the new value given in the request payload.

**Endpoint**: `POST /v1/xto6x/rule/:refId/name`

**Request payload**: The request payload requires a `name` field to specify the new name for the rule.

```json
{"name": "new rule name"}
```

**Successful response**: The response returns a JSON object with updated rule details, confirming the name change.

```json
{

    "refId": "uuid",

    "name": "new rule name",

    "namespace": 1231,

    “active”: true,

    “liveVersion”: "uuid",

    “createdAt”: timestamp,

    “createdBy”: Number,

    “updatedAt”: timestamp,

    “updatedBy”: Number,

}
```

**Error response**

The different error responses are as follows:

* If `variantId` is not provided

  ```json

  {
      "success": false,
      "status": 400,
      "error": "Variant Id is not provided"
  }
  ```
* If `refId` or `variantId` is invalid

  ```json

  {
      "success": false,
      "status": 400,
      "error": "Provided refId or variantId is not valid"
  }
  ```
* Server error

  ```json

  {
      "success": false,
      "status": 500,
      "error": "Some error occurred or any appropriate message"
  }
  ```

**Implementation details**

1. **Parameter**
   * Retrieve `refId`, `variantId`  from the request path parameters, and `orgId` from the request headers.
2. **Validation**
   * Verify a rule with the specified `refId`, `variantId` and the `orgId` exists in the rules collection.
   * Return a 400 error if the rule does not exist.
3. **Update rule name**
   * Update the `name` field of the rule with the new name provided in the request body.
4. **Logging and update**
   * Log the change and update the rules collection with the new name.

### GET /v1/xto6x/rule/list?limit=10\&pageNumber=0\&name=""

The `GET /v1/xto6x/rule/list` endpoint returns a paginated list of rules. You can filter by the rule name using the `name` query parameter and control the number of results per page with the `limit` and `pageNumber` parameters.

**Endpoint**: `GET v1/xto6x/rule/list?limit=10&pageNumber=0&name=""`\
**Request payload**: No payload required. The query parameters are `name`, `limit` and `pageNumber`. 

**Successful response**: The response indicates the GET call was successful.

* For a `Live` version

```json
[
    {
        "active": true,
        "name": "Placeholder 3",
        "refId": "16323bc7-caab-4e47-a3c3-e63a6b163af3",

        "createdAt": timestamp,

        "createdBy": Number,

        "updatedAt": timestamp,

        "updatedBy": Number,
        "liveVersionDetails": {
          "method": "GET",
          "url": "testApi",
          "variantId": "c5422f57-f247-4caf-8062-02cdc5dfdb19",
          "versionId": 1
        }
    }
]
```

* For a version that is not `Live`

  ```json
  [
      {
          "active": true,
          "name": "Placeholder 3",
          "refId": "16323bc7-caab-4e47-a3c3-e63a6b163af3",

          "createdAt": timestamp,

          "createdBy": Number,

          "updatedAt": timestamp,

          "updatedBy": Number,
          "liveVersionDetails": {
            "method": "-",
            "url": "-",
            "variantId": "NO_LIVE",
            "versionId": null,
          }

      }
  ]
  ```

**Error response**

The error responses are as follows:

* Server error

```json
{
    "success": false,
    "status": 500,
    "error": "Some error occurred or any appropriate message"
}
```

**Implementation details**

1. Retrieve rule documents from the `rules` collection based on the `orgId` and apply pagination using the `limit` and `pageNumber` values.
2. For rules with live versions, retrieve additional details on the `method`, `url`, and `versionId` from the `RuleVersions` collection using `refId` and `variantId`.
3. Format and return the response according to the API signature.

### GET v1/xto6x/rule/:refId/versions

The `GET /v1/xto6x/rule/:refId/versions` endpoint provides a list of all versions for a specific rule identified by `refId`. The response includes the rule's name, active status, the live version ID or NO\_LIVE if no version is live, and creation and update timestamps and user IDs.

**Endpoint**: `GET /v1/xto6x/rule/:refId/versions`

**Request payload**: No payload required. `refID` is passed as a path parameter.

**Successful response**: The sample response below indicates the GET call was successful.

```json
{
  "refId": "uuid",
  "name": "Placeholder 3 Post",
  "active": true,
  "liveVersion": "uuid", // NO_LIVE if no version is live

   “createdAt”: timestamp,

   “createdBy”: Number,

   “updatedAt”: timestamp,

   “updatedBy”: Number,
  "versions": [
    {
      "variantId": "uuid",
      "refId": "uuid",
      "versionId": 1,
      "url": "getAccountSummary",
      "method": "GET",
      "createdAt": "2021-07-01T10:00:00Z",
      "createdBy": 123,
      "updatedAt": "2021-07-01T10:00:00Z",
      "updatedBy": 123,
      "status": "DRAFT",
    },
    {
      "variantId": "uuid",
      "refId": "uuid",
      "versionId": 2,
      "url": "getAccountSummary",
      "method": "GET",
      "createdAt": "2021-07-01T10:00:00Z",
      "createdBy": 123,
      "updatedAt": "2021-07-01T10:00:00Z",
      "updatedBy": 123,
      "status": "APPROVED"
    }
  ]
}
```

**Error response**

The error response is as follows:

* Server error
  ```json
  {
      "success": false,
      "status": 500,
      "error": "Some error occurred or any appropriate message"
  }
  ```

**Implementation details**

1. Retrieve the rule's data based on the provided `refId` and `orgID`.
2. Fetch all versions of the rule using the same `refId` and `orgID`.
3. Compile the response by merging the rule’s primary data with details for each version.

This endpoint is not paginated.

###
