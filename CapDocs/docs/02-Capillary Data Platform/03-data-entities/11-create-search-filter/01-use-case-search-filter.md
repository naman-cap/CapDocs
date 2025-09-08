---
title: Use Cases
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
# Use Case 1: Partial Match with OR Conditions

You want to search for a customer using one of several identifiers—**mobile number**, **email ID**, or **external ID**. You're okay with partial input. For instance, typing just part of the mobile number or a fragment of the email ID should still return relevant results.

## Solution

You can create a search filter with `mobile OR email OR external ID` condition. This is useful when you don’t have the full details but still want to pull up the right customer profile using whatever you’ve got.

# Use Case 2: Exact Match with AND Conditions

You want to search for a customer using a combination of details—**first name**, **date of birth**, and **city**. In this case, you're doing a full search. You’ll enter the complete first name (e.g., *Frodo*), the full date of birth, and the full city name (e.g., *Mount Doom*). No partials.

## Solution

You can create a search filter with `first name AND date of birth AND city` (requires exact match). This approach is ideal when you want to narrow down the results to an exact individual based on multiple known fields.

# Use Case 3: Exact Match with Optional Filter

You want to search for a customer using **first name**, **date of birth**, and **city**. These are your primary fields and require an exact match. Additionally, you want to refine the search further using the **zip code**—but this field is optional. If provided, it’ll narrow down the results even more.

**Search Criteria:**\
`first name AND date of birth AND city`  

* `zip code` (optional)

This is helpful when you have most of the key information but want to add another layer to reduce ambiguity in search results.

# Use Case 4: Primary ID with Optional Filters

You’re looking for a specific transaction using the **transaction (bill) number**. To help limit the result set—especially if multiple systems or hotels use similar formats—you can add **check-out date** and **hotel name** as optional filters.

**Search Criteria:**\
`transaction number`  

* `check-out date` (optional)  
* `hotel name` (optional)

Use this when the transaction ID is the main identifier, but extra filters can help isolate the right record more quickly.
