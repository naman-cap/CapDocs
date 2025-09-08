---
title: External Partner Program Table
deprecated: false
hidden: false
metadata:
  robots: index
---
**Databricks Table Name:** external_partner_programs

| Column Name                 | Data Type | Description                                                                                                                   | Linked Table                                                                                                                   |
| :-------------------------- | :-------- | :---------------------------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------- |
| auto_update_time            | bigint    | Indicates the date and time when the record in the source program table was last updated. It is in the Unix timestamp format. | [time](https://docs.capillarytech.com/docs/dimension-tables#/time)                                                             |
| description                 | string    | Defines the description of the partner program.                                                                               | [partner_programs]([partner_programs](https://docs.capillarytech.com/docs/dimension-tables#partner-programs-partner_programs)) |
| partner_program_name        | string    | Indicates the designated name of the partner program.                                                                         | [partner_programs]([partner_programs](https://docs.capillarytech.com/docs/dimension-tables#partner-programs-partner_programs)) |
| is_tier_based               | boolean   | Indicates whether the partner program is  tier-based program.                                                                 | [partner_programs]([partner_programs](https://docs.capillarytech.com/docs/dimension-tables#partner-programs-partner_programs)) |
| points_exchange_ratio       | decimal   | Indicates the conversion ratio used for exchanging points between the main loyalty program and the partner program.           | [partner_programs]([partner_programs](https://docs.capillarytech.com/docs/dimension-tables#partner-programs-partner_programs)) |
| external_partner_program_id | string    | A unique identifier for the partner program, typically provided by the external brand or partner.                             | [partner_programs]([partner_programs](https://docs.capillarytech.com/docs/dimension-tables#partner-programs-partner_programs)) |
| partner_program_type        | string    | Indicates the classification or type of the partner program.                                                                  | [partner_programs]([partner_programs](https://docs.capillarytech.com/docs/dimension-tables#partner-programs-partner_programs)) |
| loyalty_program_id          | integer   | The unique identifier for the primary loyalty program to which the partner program is linked.                                 | [program](https://docs.capillarytech.com/docs/dimension-tables#program)                                                        |
| partner_program_identifier  | string    | A unique identifier for the partner program, typically assigned by the brand.                                                 | [partner_programs]([partner_programs](https://docs.capillarytech.com/docs/dimension-tables#partner-programs-partner_programs)) |
| is_active                   | boolean   | Indicates whether the partner program is currently active.                                                                    | partner_programs                                                                                                           |