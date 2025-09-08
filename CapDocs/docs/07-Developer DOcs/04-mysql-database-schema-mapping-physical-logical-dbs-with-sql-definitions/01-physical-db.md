---
title: 'Physical DB: airflow'
excerpt: ''
deprecated: false
hidden: true
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
# Physical DB: `airflow`

| **Logical DB** | **Tables**       | **Table Name** |
| -------------- | ---------------- | -------------- |
| `airflow`      | `temp_table.sql` | `temp_table`   |
| `emigran`      | `versions.sql`   | `versions`     |

## Table: `temp_table`

| Column Name | Data Type | Index |
| ----------- | --------- | ----- |
| col1        | INT       | None  |
| col3        | INT       | None  |

## Table: `temp_table`

| Column Name | Data Type    | Index                             |
| ----------- | ------------ | --------------------------------- |
| id          | INT          | Part of UNIQUE KEY (`country_id`) |
| uuId        | VARCHAR(250) | Part of UNIQUE KEY (`country_id`) |
| is\_active  | INT          | None                              |
