---
title: Convert CSV to JSON
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
| **Field Name**    | **Description**                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Sort by           | Arranges rows based on a chosen column so that similar entries appear together. This is often a prerequisite for grouping to group the similar entries.                                                                                                                                                                                                                                                                                                   |
| Alphabetical sort | Arranges data in alphabetical or alphanumeric order based on a chosen column                                                                                                                                                                                                                                                                                                                                                                              |
| Group by          | Collects and organizes data entries that share the same value in a specified header. When you group by a field (e.g., "bill ID"), all rows with the same value are consolidated into a single JSON object, with the grouping key appearing once and the related fields organized as a sub-structure (like an array). Sorting by the grouping field often precedes this operation to ensure all related entries are grouped together.                      |
| Grouping limit    | The "grouping limit" parameter sets a threshold on the number of grouped entries to be included in a single output structure. This helps manage payload size when handling many related entries. For example, if grouping by "bill ID" with a limit of 10, each JSON object will contain information for up to 10 bills; if there are more than 10, multiple output structures will be generated. It effectively splits bulk data into manageable chunks. |

# Example

Consider a CSV file containing records for different bills. Each bill may have multiple identifiers (mobile or email) and associated items. The goal is to:

* **Sort** the data so that rows with the same **bill ID** are together.
* Apply an **alphabetical sort** to ensure a consistent order.
* **Group by** the **bill ID** to combine records for each bill.
* Apply a **grouping limit** so that each output structure contains data for a maximum of two unique bill IDs.

***

## Original CSV Data

```
bill ID,identifier name,identifier value,itemID
BILL002,email,anna.koskinen@example.fi,ITEM-A
BILL001,mobile,040-1234567,ITEM-X
BILL002,mobile,050-9876543,ITEM-B
BILL001,email,mikko.nieminen@example.fi,ITEM-Y
BILL003,mobile,044-5551234,ITEM-P
BILL001,mobile,044-1112233,ITEM-Z
BILL003,email,pekka.lehtonen@example.fi,ITEM-Q
BILL002,email,tiina.virtanen@example.fi,ITEM-C
```

***

## Step 1: Sorting and Alphabetical Sort

* **Purpose:**\
  Arrange rows based on the **bill ID** and alphabetically/alphanumerically so that records with the same bill are adjacent.
* **Configuration:**\
  Set **Sort header** value to **bill ID** and **Alphabetical Sort** to True.
* **Result:**\
  The data is reordered alphabetically (or alphanumerically) by **bill ID**.

### Sorted CSV Data

```
bill ID,identifier name,identifier value,itemID
BILL001,mobile,040-1234567,ITEM-X
BILL001,email,mikko.nieminen@example.fi,ITEM-Y
BILL001,mobile,044-1112233,ITEM-Z
BILL002,email,anna.koskinen@example.fi,ITEM-A
BILL002,mobile,050-9876543,ITEM-B
BILL002,email,tiina.virtanen@example.fi,ITEM-C
BILL003,mobile,044-5551234,ITEM-P
BILL003,email,pekka.lehtonen@example.fi,ITEM-Q
```

***

## Step 2: Group By

* **Purpose:**\
  Group all records with the same **bill ID** into a single JSON object.
* **Configuration:**\
  Set "group by" as **bill ID**.
* **JSON Structure (Before Applying Grouping Limit):**

```json
[
  {
    "bill ID": "BILL001",
    "identifiers": [
      { "identifier name": "mobile", "identifier value": "040-1234567" },
      { "identifier name": "email", "identifier value": "mikko.nieminen@example.fi" },
      { "identifier name": "mobile", "identifier value": "044-1112233" }
    ],
    "items": [
      { "itemID": "ITEM-X" },
      { "itemID": "ITEM-Y" },
      { "itemID": "ITEM-Z" }
    ]
  },
  {
    "bill ID": "BILL002",
    "identifiers": [
      { "identifier name": "email", "identifier value": "anna.koskinen@example.fi" },
      { "identifier name": "mobile", "identifier value": "050-9876543" },
      { "identifier name": "email", "identifier value": "tiina.virtanen@example.fi" }
    ],
    "items": [
      { "itemID": "ITEM-A" },
      { "itemID": "ITEM-B" },
      { "itemID": "ITEM-C" }
    ]
  },
  {
    "bill ID": "BILL003",
    "identifiers": [
      { "identifier name": "mobile", "identifier value": "044-5551234" },
      { "identifier name": "email", "identifier value": "pekka.lehtonen@example.fi" }
    ],
    "items": [
      { "itemID": "ITEM-P" },
      { "itemID": "ITEM-Q" }
    ]
  }
]
```

***

## Step 3: Grouping Limit

* **Purpose:**\
  Limit the number of grouped entries in each output structure to make payloads more manageable.
* **Configuration:**\
  Set a **grouping limit of 2**, meaning that each output structure will contain data for at most two unique **bill ID** groups. If the total number of unique **bill ID** values exceeds this limit, the output is split into multiple JSON structures. 

### **Result with Grouping Limit of 2:**

#### Output 1

```json
[
  {
    "bill ID": "BILL001",
    "identifiers": [
      { "identifier name": "mobile", "identifier value": "040-1234567" },
      { "identifier name": "email", "identifier value": "mikko.nieminen@example.fi" },
      { "identifier name": "mobile", "identifier value": "044-1112233" }
    ],
    "items": [
      { "itemID": "ITEM-X" },
      { "itemID": "ITEM-Y" },
      { "itemID": "ITEM-Z" }
    ]
  },
  {
    "bill ID": "BILL002",
    "identifiers": [
      { "identifier name": "email", "identifier value": "anna.koskinen@example.fi" },
      { "identifier name": "mobile", "identifier value": "050-9876543" },
      { "identifier name": "email", "identifier value": "tiina.virtanen@example.fi" }
    ],
    "items": [
      { "itemID": "ITEM-A" },
      { "itemID": "ITEM-B" },
      { "itemID": "ITEM-C" }
    ]
  }
]
```

#### Output 2

```json
[
  {
    "bill ID": "BILL003",
    "identifiers": [
      { "identifier name": "mobile", "identifier value": "044-5551234" },
      { "identifier name": "email", "identifier value": "pekka.lehtonen@example.fi" }
    ],
    "items": [
      { "itemID": "ITEM-P" },
      { "itemID": "ITEM-Q" }
    ]
  }
]
```

**Note:** In this example, there are three unique **bill ID** values. With a grouping limit of 2, the first output contains grouped data for **BILL001** and **BILL002**, while the second output contains grouped data for **BILL003**.

### Result with Grouping Limit of 3:

```json
[
  {
    "bill ID": "BILL001",
    "identifiers": [
      { "identifier name": "mobile", "identifier value": "123-456-7890" },
      { "identifier name": "email", "identifier value": "john.doe@example.com" },
      { "identifier name": "mobile", "identifier value": "111-222-3333" }
    ],
    "items": [
      { "itemID": "ITEM-X" },
      { "itemID": "ITEM-Y" },
      { "itemID": "ITEM-Z" }
    ]
  },
  {
    "bill ID": "BILL002",
    "identifiers": [
      { "identifier name": "email", "identifier value": "jane.smith@example.com" },
      { "identifier name": "mobile", "identifier value": "987-654-3210" },
      { "identifier name": "email", "identifier value": "another@example.com" }
    ],
    "items": [
      { "itemID": "ITEM-A" },
      { "itemID": "ITEM-B" },
      { "itemID": "ITEM-C" }
    ]
  },
  {
    "bill ID": "BILL003",
    "identifiers": [
      { "identifier name": "mobile", "identifier value": "555-123-4567" },
      { "identifier name": "email", "identifier value": "peter.jones@sample.org" }
    ],
    "items": [
      { "itemID": "ITEM-P" },
      { "itemID": "ITEM-Q" }
    ]
  }
]
```

### Result with No Grouping:

```json
[
  {
    "bill ID": "BILL002",
    "identifier name": "email",
    "identifier value": "jane.smith@example.com",
    "itemID": "ITEM-A"
  },
  {
    "bill ID": "BILL001",
    "identifier name": "mobile",
    "identifier value": "123-456-7890",
    "itemID": "ITEM-X"
  },
  {
    "bill ID": "BILL002",
    "identifier name": "mobile",
    "identifier value": "987-654-3210",
    "itemID": "ITEM-B"
  },
  {
    "bill ID": "BILL001",
    "identifier name": "email",
    "identifier value": "john.doe@example.com",
    "itemID": "ITEM-Y"
  },
  {
    "bill ID": "BILL003",
    "identifier name": "mobile",
    "identifier value": "555-123-4567",
    "itemID": "ITEM-P"
  },
  {
    "bill ID": "BILL001",
    "identifier name": "mobile",
    "identifier value": "111-222-3333",
    "itemID": "ITEM-Z"
  },
  {
    "bill ID": "BILL003",
    "identifier name": "email",
    "identifier value": "peter.jones@sample.org",
    "itemID": "ITEM-Q"
  },
  {
    "bill ID": "BILL002",
    "identifier name": "email",
    "identifier value": "another@example.com",
    "itemID": "ITEM-C"
  }
]
```
