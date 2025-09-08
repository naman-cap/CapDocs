---
title: Overview
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
The Search filter feature lets you define how you want to look up Customer or Transaction data.  After creating a search filter, you can use the [Copy cURL](https://docs.capillarytech.com/docs/performing-search-#/using-the-copy-curl-feature) feature to import it into the API tool and run it.

![f581149c5c788c345491795f1594a5a1d70eebcc530789cb17a6d169d185157e Search](https://files.readme.io/f581149c5c788c345491795f1594a5a1d70eebcc530789cb17a6d169d185157e-Search.png)

# Core Concepts

## What is a Search Filter?

A **search filter** is a set of one or more indexed fields used to quickly look up data. You define which fields to search on—this setup is called the **search filter** .

There are two types of filters:

* **AND filter** – Returns results only when *all* the conditions are met
* **OR filter** – Returns results when *any* of the conditions are met (available only for the **Customer** entity)

Once the filter is set, the system knows how to query the database efficiently. You can then use the [Search API](https://docs.capillarytech.com/reference/perform-search) to fetch the results.

# Key Features

* Define the fields to search on—including custom and extended fields
* Set the time range for the data you want to query
* Supports **partial search** (starts with) for customer records
* Works across multiple languages
* Compatible with the **Vulcan** UI framework (but not limited to it)
* Choose which fields appear in the search results; use **[Neo](https://docs.capillarytech.com/docs/extension)** for advanced customization

## Understanding Cardinality

When creating a search filter, the system first checks the **cardinality** of the fields you've selected. Filters with **high cardinality** are more likely to pass validation and be activated.

* **High Cardinality** means the field (or combination of fields) has a large number of unique values. This makes it a strong candidate for indexing and searching.\
  *Example:* `Bill number`—each value is likely unique.

* **Low Cardinality** means the field has only a few unique values. These fields aren’t ideal for filtering on their own.\
  *Example:* `Gender`—only a handful of values like Male, Female, Other. A filter with only this field will likely fail validation.

👉 **Note:** Cardinality is calculated based on all **mandatory fields** in your filter.\
The filter must pass the **cardinality check** before it can be activated.

# Search Filter Capabilities

| **Entity**  | **Filter Type** | **Filter Limit** | **Mandatory Fields Limit** | **Non-mandatory Fields Limit** | **Search Operators**                         | **Historical Data**                   |
| ----------- | --------------- | ---------------- | -------------------------- | ------------------------------ | -------------------------------------------- | ------------------------------------- |
| Customer    | OR              | 2                | –                          | –                              | `STARTS_WITH` (partial search)               | 10 years (based on registration date) |
| Customer    | AND             | 5                | 5                          | 6                              | `EQUALS`, `RANGE` (for date/datetime fields) | 10 years (based on registration date) |
| Transaction | AND             | 5                | 5                          | 6                              | `EQUALS`, `RANGE` (for date/datetime fields) | 365 days (based on billing date)      |

# Example Flow

**Step 1:** Define Filter

* Customer entity
* Fields: `mobile OR email OR external ID`
* Filter type: **OR**

**Step 2:** Call Search API

* Endpoint: `v2/search/entity`
* Returns customer records that match any of the fields