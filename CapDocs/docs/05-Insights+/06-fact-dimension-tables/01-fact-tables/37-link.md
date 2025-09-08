---
title: ' Partner Program Linking Fact Table'
deprecated: false
hidden: false
metadata:
  robots: index
---
**Databricks Table Name:** partner_program_is_linked

| Column Name | Data Type | Description                                                                       | Linked Table(s)                                                                                              |
| :---------- | :-------- | :-------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------- |
| id          | bigint    | A unique identifier that serves as the primary key for a record within the table. | [`partner_programs`](https://docs.capillarytech.com/docs/dimension-tables#partner-programs-partner_programs) |
| value       | string    | Indicates whether if the partner program is linked.                               | `partner_programs`                                                                                       |
