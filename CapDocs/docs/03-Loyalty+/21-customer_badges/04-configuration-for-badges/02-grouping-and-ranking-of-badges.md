---
title: Grouping and Ranking of Badges
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
You can define badge groups, the rank of the group and the rank of badges even without the group tagging. This enables sorting customers' badge collections and highlighting their achievements.

For example, in the below screenshot, Limited Edition badges have a higher priority followed by Monthly challenge badges, Workout badges, and Close your Rings badges. Within each defined group, badges are sorted based on their rank.

![b52ba24 image1](https://files.readme.io/b52ba24-image1.png)

# Example

Consider three badge groups, Group 1, Group 2 and Group 3 ranked 1, 2, and 3. While creating badges, Badge 1 is tagged with Group 1, Badge 2 is tagged with Group 2, and Badge 3 doesn't have any group tagged but has a badge rank of 1.

## Retrieving badges list

In the above scenario, when you retrieve the list of badges available for a customer, the system prioritizes based on the defined groups and badge ranks. Initially, the list is ordered as Badge 1, then Badge 2, and finally Badge 3 (due to the group tag of Badge 3 being null but having a rank).

## Impact on deleting a group

If a group is deleted the order of the badges also changes.  For example, if Group 1 is deleted, fetching the badge list will now prioritize Badge 2 first (as it belongs to Group 2), then Badge 3 (due to its rank), and finally Badge 1.

The sorting of the badges is performed using the sortOn parameter in the [Get customer badge API](https://docs.capillarytech.com/reference/get-badges-for-customer). 

# Sorting logic:

* Preference will be given to the groups as per their ranking
* Within the group, preference will be given to the badges for which badge rank is defined, the rest of the badges with no badge rank will be sorted in default descending order of expired date
* If badges with no group are defined, they will be sorted in order of badge rank (if defined), followed by default descending order of expired date

# Creating a Group and Assigning a Rank to It

## To create the group

Start by navigating to the badges UI settings.

1. Go to the badges UI settings.

![0ca9c592 a55c 483d 9cfd 6e620ed2f411](https://usercontent.clueso.io/64d06f10-2e0e-40ec-b636-a868315fe5a6/6e00250b-6ff6-4e0d-b913-0c4ba4df5226/09f6e102-a1c8-450f-896f-96f70c8e4e99/images/0ca9c592-a55c-483d-9cfd-6e620ed2f411.png)

2. Navigate to the group section and click on "New Group". Here, you'll create a new group.

![71096431 d3d7 4f1e b06f 354ba7b16e59](https://usercontent.clueso.io/64d06f10-2e0e-40ec-b636-a868315fe5a6/6e00250b-6ff6-4e0d-b913-0c4ba4df5226/09f6e102-a1c8-450f-896f-96f70c8e4e99/images/71096431-d3d7-4f1e-b06f-354ba7b16e59.png)

4. Name the group, for example, "Summer Group". Give your group a name.

![db7fc2b9 b986 41cf a753 fad3c304785e](https://usercontent.clueso.io/64d06f10-2e0e-40ec-b636-a868315fe5a6/6e00250b-6ff6-4e0d-b913-0c4ba4df5226/09f6e102-a1c8-450f-896f-96f70c8e4e99/images/db7fc2b9-b986-41cf-a753-fad3c304785e.png)

5. Assign a rank to the group, for example, "4". The rank indicates the group's priority.

![c6652648 f208 4bfe b4b2 6922d4277b60](https://usercontent.clueso.io/64d06f10-2e0e-40ec-b636-a868315fe5a6/6e00250b-6ff6-4e0d-b913-0c4ba4df5226/09f6e102-a1c8-450f-896f-96f70c8e4e99/images/c6652648-f208-4bfe-b4b2-6922d4277b60.png)

6. Click on "Save".

![054f58bf 966a 4354 b8f7 182877a1eb1c](https://usercontent.clueso.io/64d06f10-2e0e-40ec-b636-a868315fe5a6/6e00250b-6ff6-4e0d-b913-0c4ba4df5226/09f6e102-a1c8-450f-896f-96f70c8e4e99/images/054f58bf-966a-4354-b8f7-182877a1eb1c.png)

You'll see that the group is now created. You have options to edit or delete the group.

## To edit the group:

1. Click on "Edit Group".

![510d11e3 b624 4ad5 a1cf fa0477080ef1](https://usercontent.clueso.io/64d06f10-2e0e-40ec-b636-a868315fe5a6/6e00250b-6ff6-4e0d-b913-0c4ba4df5226/09f6e102-a1c8-450f-896f-96f70c8e4e99/images/510d11e3-b624-4ad5-a1cf-fa0477080ef1.png)

You can change the group's name and rank.

2. Change the group name, for example, to "Summer\_group\_12".

![619bf3bb 4221 4ac8 8060 018acf5b2f5d](https://usercontent.clueso.io/64d06f10-2e0e-40ec-b636-a868315fe5a6/6e00250b-6ff6-4e0d-b913-0c4ba4df5226/09f6e102-a1c8-450f-896f-96f70c8e4e99/images/619bf3bb-4221-4ac8-8060-018acf5b2f5d.png)

3. Change the group rank, for example, to "3". This will change the group's priority.

![91d535f6 85ad 4dfa 85ac 31a86946b881](https://usercontent.clueso.io/64d06f10-2e0e-40ec-b636-a868315fe5a6/6e00250b-6ff6-4e0d-b913-0c4ba4df5226/09f6e102-a1c8-450f-896f-96f70c8e4e99/images/91d535f6-85ad-4dfa-85ac-31a86946b881.png)

Click on "Save" and Save your changes to apply them.

![5c1a9d25 0638 4315 9416 31e693b3e4a3](https://usercontent.clueso.io/64d06f10-2e0e-40ec-b636-a868315fe5a6/6e00250b-6ff6-4e0d-b913-0c4ba4df5226/09f6e102-a1c8-450f-896f-96f70c8e4e99/images/5c1a9d25-0638-4315-9416-31e693b3e4a3.png)

## To verify the group's creation:

1. Click on "Create a Badge".

![8cde2f86 3a83 405e 9688 2e58e7c66395](https://usercontent.clueso.io/64d06f10-2e0e-40ec-b636-a868315fe5a6/6e00250b-6ff6-4e0d-b913-0c4ba4df5226/09f6e102-a1c8-450f-896f-96f70c8e4e99/images/8cde2f86-3a83-405e-9688-2e58e7c66395.png)

In the badge group section, you'll see the newly created group.

2. Check the badge group drop-down. Your new badge group, "Summer\_group\_12", appears in the drop-down. And you can now assign the badge to the group you created.

![800ea792 64f9 4a48 83ac 17847f69467e](https://usercontent.clueso.io/64d06f10-2e0e-40ec-b636-a868315fe5a6/6e00250b-6ff6-4e0d-b913-0c4ba4df5226/09f6e102-a1c8-450f-896f-96f70c8e4e99/images/800ea792-64f9-4a48-83ac-17847f69467e.png)

# Badge Group APIs

You can use the below APIs to Create, Edit, Update and Retrieve the Badge details.

[Create Group](https://docs.capillarytech.com/reference/create-badges-group)

[Update Group](https://docs.capillarytech.com/reference/update-badges-group)

[Get Group by ID](https://docs.capillarytech.com/reference/get-group-by-id)

[Get all Groups](https://docs.capillarytech.com/reference/get-all-groups)

[Create badges with Group and Badge Rank](https://docs.capillarytech.com/reference/create-badges-org)

[Update badges with Group and Badge Rank](https://docs.capillarytech.com/reference/update-badges)

# Notes

* Group name must be unique within the active groups in an org
* Group rank is mandatory but there is no uniqueness on group rank
* Badge rank is non-mandatory
* Groups can be disabled by making the isActive flag false
