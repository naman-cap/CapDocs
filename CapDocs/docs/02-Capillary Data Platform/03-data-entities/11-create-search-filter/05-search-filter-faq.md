---
title: FAQs
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
1. **How are null values handled in the search?**\
   If a search is created using a field that has no value associated with it, you won’t receive any matching records when you perform the search. For example, if an indexed field called age has no assigned value, the system will not include those records in the search results.
2. **What is the default order for the search results?**\
   The search results are returned in descending order based on the registration date. This is the time when the customer data was initially entered into the collection—not the auto-update time. Even if a record is later updated, the ordering remains based on the original registration timestamp.
3. **What happens to deleted customers (PII deletion) in search results? Are changes to customer identifiers reflected in search?**\
   Deleted customers (due to PII deletion) are removed from search results. When a customer identifier is changed, these changes are also reflected in the search functionality.
4. **How can I perform a search?**\
   You can use or integrate the [Search API ](https://docs.capillarytech.com/reference/perform-search)to search.
