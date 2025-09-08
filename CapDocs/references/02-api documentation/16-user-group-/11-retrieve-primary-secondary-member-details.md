---
title: Retrieve Primary & Secondary Member Details
excerpt: >-
  This API allows you to retrieve details of primary and secondary members in
  the user group.
api:
  file: v2.json
  operationId: retrieve-primary-secondary-member-details
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
> ❗️ Make sure you have the appropriate access control configured. For more information, see [access group documentation](https://docs.capillarytech.com/docs/access-group).

# API endpoint

/v2/userGroup2/members

# Query parameters

| Query Parameter | Description                    |
| --------------- | ------------------------------ |
| externalId      | External ID of the group.      |
| identifierName  | The identifier of the group.   |
| identifierValue | The value of the identifier.   |
| source          | The origin of the information. |

# Response parameters

| Parameter         | Description                                           |
| ----------------- | ----------------------------------------------------- |
| fleetUserId       | The unique identifier for the user in the fleet.      |
| firstName         | The first name of the user.                           |
| lastName          | The last name of the user.                            |
| joinedOn          | The date on which the user joined.                    |
| permissions       | The permissions assigned to the user.                 |
| pointsContributed | The number of points contributed by the user.         |
| type              | The type of the identifier.                           |
| value             | The value of the identifier based on its type.        |
| email             | The email address of the user.                        |
| mobile            | The mobile number of the user.                        |
| role              | The role of the user in the fleet.                    |
| identifiers       | An array of different identifiers for the user.       |
| inActive          | A boolean indicating if the user is inactive.         |
| primaryMember     | A boolean indicating if the user is a primary member. |
| warnings          | An array to indicate any warnings.                    |
| errors            | An array to indicate any errors.                      |