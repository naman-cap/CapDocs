---
title: Create a Search Filter
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
### 1. Navigate to the Search Filter Configuration Page

* Navigate to **Organization Settings** > **Master Data Management** > **Search Filters**.

![ 55% ](https://files.readme.io/0b4d996b93755118145d751f4edf510981cc5029f1a281606a63e083420ea602-Search_UI.png)

* Or, open it directly via URL:\
  `\{host\}/search-criteria/ui`
  Example for the Europe cluster:
  `https://eu.intouch.capillarytech.com/search-criteria/ui`

### 2. Start Creating a New Filter

* Click **New Search Filter**.

![ ](https://files.readme.io/d8ac0b4764f631e30e53b6269dff82ef6e5c8403d3674f1b98989d54d4a1e3c4-image.png)

***

### 3. Configure Basic Filter Details

* **Entity**: Select either **Customer** or **Transaction**.

* **Name**: Enter a name for the filter.

![ 55% ](https://files.readme.io/9b297323c5c2a19b97fd6ac848446546fd50fdd4288cc4261e8be849ee6f89d6-image.png)

* **Search Condition**: Choose **AND** or **OR**.

  | **Entity**  | **Search Condition Options** | **Usage**                                                                                                                                             |
  | ----------- | ---------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
  | Transaction | AND only                     | Combine fields (e.g., bill number **AND** bill date). You can mark fields as mandatory.                                                               |
  | Customer    | AND OR                       | **AND**: Combination searches like first name **AND** last name. <br />**OR**: Partial searches like the first few letters of a name or phone number. |

### 4. Set Search Duration

* Applicable only for **AND** condition.

* Maximum: **365 days**

* For **Customer** filters using **OR**, the duration is fixed at **10 years**.

* This defines the rolling window for searchable data.

![ 55% ](https://files.readme.io/27505fed9bba6bcd18294e1e9fe005f705f4a9f66de2915b558b040995043752-image.png)

> Duration is based on when the event was ingested:\
> – **Customer**: Registration date
> – **Transaction**: Billing date

### 5. Choose Searchable Fields

Field options vary based on the entity and condition:

|                       | **Transaction (AND)**                                                                         | **Customer (AND)**                 | **Customer (OR)**                                                    |
| --------------------- | --------------------------------------------------------------------------------------------- | ---------------------------------- | -------------------------------------------------------------------- |
| **Standard Fields**   | `outlierStatus`, `billDate`, `billNumber`, `transactionType` (only one date/datetime allowed) | `firstName<code>, </code>lastName` | `firstName`, `lastName`, `mobile`, `externalId`, `fullName`, `email` |
| **Additional Fields** | `storecode`                                                                                   | –                                  | –                                                                    |
| **Custom Fields**     | Supported                                                                                     | Supported                          | Not supported                                                        |
| **Extended Fields**   | Supported                                                                                     | Supported                          | Not supported                                                        |

### 6. Mark Mandatory Fields (Only for AND)

* **AND filters**:\
  – At least one field must be indexed
  – Max 6 **mandatory** and 5 **non-mandatory** fields
* **OR filters**: No mandatory fields required

### 7. Validate the Filter

* Click the **Validate** button.

![ 85% ](https://files.readme.io/84e8a455b1d7125fe0f58347a403fd79a467b31ce2f67ef0230f2a8de2657c07-Validate_.gif)

* On the **Confirm Filter Creation** dialog, click **Yes, Sure**.

* Validation takes **15–20 minutes**.

* Filters with [high cardinality](https://docs.capillarytech.com/docs/overview-search-filter#understanding-cardinality) have a better chance of passing.

### 8. Activate the Filter

* Once validation is successful:

  * Open the meatball menu for the filter.

  * Select **Activate**, then click **Create**.

![ 85% ](https://files.readme.io/6e8b1ba671a6c6382e7b1aec6d64338c2f2e180756935c06d62ebcf4ca124567-Activate.gif)

* Status changes from **Activation in progress** to **Active**.

### 9. Deactivating a Filter

* From the list page, select **Deactivate** from the filter's menu.

  > Note: Deactivated filters cannot be reactivated. You’ll need to create a new one if needed.

![ ](https://files.readme.io/289f7f06c65f17d699ad406dfe0407a3c5c7dcadde8368a84003600783d153fc-image.png)