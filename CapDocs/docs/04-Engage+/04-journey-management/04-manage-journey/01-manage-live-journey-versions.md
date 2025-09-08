---
title: Manage Live Journey Version
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
# Edit a Live Journey

## Use Cases

Marketer has spotted a mistake in a live journey or a change of strategy has occurred, and brand would want to change some configurations within a live journey. 

Initially, for brands to make such a change they would have to create a new journey from scratch and Stop the existing one. This calls for a tedious process from the marketer’s side while also creating a possible overlap of audience with them receiving the incentive or communication more than the intended number of times.

With the help of Edit feature, brands can easily edit a live journey without the hassle of creating a new one from scratch.

### Editing a live journey

1. User will be able to modify the contents/configuration of any blocks however you cannot change the structure of the block(add/move/delete any flow control blocks). The following are the editable items within each block in the journey canvas

<Table align={["left","left"]}>
  <thead>
    <tr>
      <th>
        Component
      </th>

      <th>
        Editable items
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Entry trigger (User event)
      </td>

      <td>
        **If the selection is User Event**  

        1. Only values within conditions can be edited

        2. Paths, conditions or groups cannot be added or edited**If the selection is Audience List**

        3. A new audience group can be added

        4. Previously added audience list cannot be edited or removed

        5. Exclude audience list can be added
      </td>
    </tr>

    <tr>
      <td>
        Engagement blocks (SMS, Email, M-push)
      </td>

      <td>
        Interchangeable with another engagement block. For example, if you have selected an SMS block, you can replace it with an Email block.  

        1. Within any engagement block,
        2. Name and content can be edited and changed
        3. Incentives can be added and/or removed while editing
        4. Delivery Settings of the engagement can also be changed
      </td>
    </tr>

    <tr>
      <td>
        Time based wait
      </td>

      <td>
        1. Block name is editable
        2. Time duration is editable
        3. Implementation condition is editable
      </td>
    </tr>

    <tr>
      <td>
        Event based wait
      </td>

      <td>
        1. Block name can be edited
        2. Paths, conditions or groups cannot be added or edited
        3. Value within any condition is editable
        4. Time duration is editable
      </td>
    </tr>

    <tr>
      <td>
        Decision Split  
      </td>

      <td>
        Cannot be edited
      </td>
    </tr>

    <tr>
      <td>
        Join
      </td>

      <td>
        Cannot be edited
      </td>
    </tr>

    <tr>
      <td>
        Jump
      </td>

      <td>
        1. Block name is editable
        2. Destination journey can be changed to **nowhere**or a different journey, meaning if you want to remove the Jump to another journey you should select the option “JUMP to nowhere”
      </td>
    </tr>

    <tr>
      <td>
        Message Schedule
      </td>

      <td>
        Cannot be edited
      </td>
    </tr>

    <tr>
      <td>
        Exit Trigger
      </td>

      <td>
        1. Only values within conditions can be edited
        2. Paths, conditions or groups cannot be added or edited
      </td>
    </tr>
  </tbody>
</Table>

## To edit a live journey, perform the following:

1. Go to the live journey, click on Edit. Once you click on Edit (on Top right hand side), a new version of the existing journey will be created. Click on Yes to confirm.

![](https://files.readme.io/5a019d4-image1.png)

2. Make changes(as described in the Scope section) and click on **Save and Exit**

![1396a99 image1](https://files.readme.io/1396a99-image1.png)

3. Once you edit a journey and click on Save and Send for approval, the journey will again be sent for approval and another version of the journey will be created. Let’s call the original version v0 and new version v1.
4. After this, please refer to the next section to know how to approve an edited journey and what happens to the previous version.

## Approving an edited journey

As soon as the approver approves this new version (v1), they will be prompted with an option to select **What should be the previous version behavior? Sunset, Stop or Pause**

1. **Move customers to new version**-  Existing customers who have joined journey v0 will be moved to journey v1 and will remain in the same block they were in. 
2. **Sunset**- Customers who have entered v0 journey will continue to the journey v0 and new customers after v1 is made live, will now enter the journey v1.
3. **Stop**- v0 will be stopped for all customers. Customers who had entered the journey v0 will be exited from the journey. New customers will enter the journey v1.

If the marketer rejects the new version (v1), the original version (v0) will continue to be in a live state.

**Note**: \_At any point in time, only one version of a particular journey can be in a live state. Rest all versions can be either in Stop / Sunset / Draft / Awaiting approval / Rejected state but cannot be in Live state.

![64ef806877c69598c4800c2aba01db7b9930b2b35557e9510a838f2d8a9019eb Screenshot 2025 04 07 at 12](https://files.readme.io/64ef806877c69598c4800c2aba01db7b9930b2b35557e9510a838f2d8a9019eb-Screenshot_2025-04-07_at_12.38.03_PM.png)

## Pausing/Stopping/Sunsetting a Live Journey

In addition to editing a journey, users now also have an option to Pause a journey, sunset a journey or stop a journey. Please see below for more details on the behavior of the journey when either of these three options are selected:

**Pause Journey:** If a user pauses a current journey, it will be paused for all the customers currently in the journey. All the customers will continue to be in the journey however the next block of the journey will be executed only when the user “Resumes” the journey back.

In a paused journey state, no new customers will be allowed to enter a journey. 

**Resume a Journey:** This option is only enabled when a journey has previously been paused. If a user resumes a paused journey, the current paused journey will get unpaused. The customers already in the journey will resume back from the stage where they were when the journey was paused and subsequent blocks of the journey will execute for them till the journey state is not changed again.\
New customers can now start entering this journey. 

**Stop a Journey:** If a user selects the **Stop** option, the journey will be stopped and it will end for all the customers present in the journey. No new customers can enter this journey. 

Please note this action cannot be reversed again. A journey once stopped cannot be made live again. 

**Sunset a Journey:** If a user selects **Sunset** option, the journey will be stopped for all new customers. Meaning the customers who were already present in a journey only those will continue to be in that journey and it will continue for them as it is till the journey comes to an end for them. However, no new customers will be allowed in this journey anymore.

### Filtering the journeys by version status

1. On Journeys listing page, users will see an option to filter the journeys by **Latest version status**. As each journey now could have multiple versions, the filter works on what is the current status (Live/Draft/Sunset/Stop, etc. ) of the latest version of the journey (most recent version).

![](https://files.readme.io/f961db8-image4.png)

2. On the listing page of Journeys, under the Version count column, user will see following additional fields against each Journey -
   1. **Total number of versions**
   2. **Latest version number** (If total versions are 5, they are identified as v0, v1, v2, v3 and v4)
   3. **Current status of the latest version**- Here the latest version means the last created version

![](https://files.readme.io/2187368-image6.png)

3. After the user clicks on any journey, if a journey has multiple versions, a list with all the versions for that particular journey will be displayed. You can select any version to navigate to the canvas of that version.

![1571b73 Demoday](https://files.readme.io/1571b73-Demoday.png)