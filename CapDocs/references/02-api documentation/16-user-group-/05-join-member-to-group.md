---
title: Join Member to Group
excerpt: This API allows you to add a member to a group.
api:
  file: v2.json
  operationId: join-member-to-group
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
> 📘
>
> Pass at least one among the path parameters. - id, externalId, primaryUserId.

> ❗️ Make sure you have the appropriate access control configured. For more information, see [access group documentation](https://docs.capillarytech.com/docs/access-group).

# API endpoint

`{host}.api.capillarytech.com/v2/userGroup2/join?id=`{`id/externalId/primaryUserId`}

# Path parameter

<br />

| Parameter     | Description                                 |    |
| :------------ | :------------------------------------------ | :- |
| id            | Unique ID of the user group.                |    |
| externalId    | External ID of the user group.              |    |
| primaryUserId | User ID of the primary member of the group. |    |

# Body parameters

<HTMLBlock>{`
<table style="width: 100%; border-collapse: collapse;">
<thead>
<tr>
  <th style="border: 1px solid #ddd; padding: 8px;">Parameter</th>
  <th style="border: 1px solid #ddd; padding: 8px;">Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p><code>userId</code></p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>The unique identifier for the user.</p>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p><code>primaryMember</code></p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>A boolean value indicating whether the user is a primary member or not.  </p>
<p><strong>Notes:</strong>  </p>
<ul>
<li>The primary member acts as the group owner and the primary member&#39;s identifier serves as the group&#39;s unique identifier.</li>
<li>Once a primary member is added, you cannot change the primary member of the group.</li>
<li>Only one primary member is allowed per group.</li>
<li>If the primary member leaves the group, the group becomes defunct. If you want the group to remain active after the primary member leaves the group, raise a ticket to the Product Support team and enable the config <code>CONF_DISABLE_GROUP_DEACTIVATION_ON_PRIMARY_MEMBER_EXIT</code>.</li>
</ul>
</td>
</tr>
<tr>
  <td style="border: 1px solid #ddd; padding: 8px;"><p><code>permissions</code></p>
</td>
  <td style="border: 1px solid #ddd; padding: 8px;"><p>An array of strings that represent the permissions assigned to the user.</p>
</td>
</tr>
</tbody>
</table>
`}</HTMLBlock>

# Response parameters

| Parameter                          | Description                                                                       |
| ---------------------------------- | --------------------------------------------------------------------------------- |
| response                           | Array containing details of the response entity and the result.                   |
| response\[].entityId               | Contains information about the entity's identification and associated properties. |
| response\[].entityId.userId        | Unique identifier of the user associated with the entity.                         |
| response\[].entityId.groupId       | Unique identifier of the group associated with the entity.                        |
| response\[].entityId.permissions   | Array of permissions granted to the entity.                                       |
| response\[].entityId.defaultGroup  | Boolean indicating whether the entity belongs to a default group or not.          |
| response\[].entityId.active        | Boolean indicating if the entity is active.                                       |
| response\[].entityId.primaryMember | Boolean indicating if the entity is a primary member or not.                      |
| response\[].result                 | Contains the resultant details after processing the request.                      |
| response\[].result.userId          | Unique identifier of the user associated with the result.                         |
| response\[].result.groupId         | Unique identifier of the group associated with the result.                        |
| response\[].result.permissions     | Array of permissions granted to the result.                                       |
| response\[].result.defaultGroup    | Boolean indicating whether the result belongs to a default group or not.          |
| response\[].result.active          | Boolean indicating if the result is active.                                       |
| response\[].result.primaryMember   | Boolean indicating if the result is a primary member or not.                      |
| response\[].warnings               | Array containing any warnings related to the response.                            |
| totalCount                         | The total number of entities in the response.                                     |
| failureCount                       | The total number of failures during the processing.                               |