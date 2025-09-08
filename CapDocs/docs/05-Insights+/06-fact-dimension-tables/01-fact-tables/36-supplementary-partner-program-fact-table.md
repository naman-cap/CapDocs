---
title: Supplementary Partner Program Fact Table
deprecated: false
hidden: false
metadata:
  robots: index
---
**Databricks Table Name:** supplementary_partner_programs

| Column Name                          | Data Type  | Description                                                                            | Linked Table(s)                                                                                                                |
| :----------------------------------- | :--------- | :------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------- |
| **is_tier_based**                    | boolean    | Indicates whether the program is tier-based.                                           | [partner_programs](https://docs.capillarytech.com/docs/dimension-tables#partner-programs-partner_programs)                     |
| **partner_program_name**             | string     | The name of the partner program.                                                       | [partner_programs]([partner_programs](https://docs.capillarytech.com/docs/dimension-tables#partner-programs-partner_programs)) |
| **supplementary_partner_program_id** | integer    | A unique identifier for a supplementary partner program.                               | -                                                                                                                              |
| **points_exchange_ratio**            | bigdecimal | The ratio used to exchange points between the loyalty program and the partner program. | [partner_programs]([partner_programs](https://docs.capillarytech.com/docs/dimension-tables#partner-programs-partner_programs)) |
| **description**                      | string     | A description of the program.                                                          | [partner_programs]([partner_programs](https://docs.capillarytech.com/docs/dimension-tables#partner-programs-partner_programs)) |
| **partner_program_type**             | enum       | The type of the partner program.                                                       | [partner_programs]([partner_programs](https://docs.capillarytech.com/docs/dimension-tables#partner-programs-partner_programs)) |
| **is_active**                        | boolean    | Indicates whether the program is currently active.                                     | [partner_programs]([partner_programs](https://docs.capillarytech.com/docs/dimension-tables#partner-programs-partner_programs)) |
| **auto_update_time**                 | bigint     | The Unix timestamp of the last update to the record in the source table.               | [time](https://docs.capillarytech.com/docs/dimension-tables#/time)                                                             |
| **loyalty_program_id**               | int        | The ID of the loyalty program to which the partner program is linked.                  | [partner_programs]([partner_programs](https://docs.capillarytech.com/docs/dimension-tables#partner-programs-partner_programs)) |
| **partner_program_identifier**       | string     | A unique identifier for the partner program, set by the brand.                         | [partner_programs]([partner_programs](https://docs.capillarytech.com/docs/dimension-tables#partner-programs-partner_programs)) |

<br />