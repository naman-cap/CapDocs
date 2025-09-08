---
title: Get Loyalty Programs
excerpt: Retrieves all the active loyalty programs of the org.
api:
  file: v2.json
  operationId: get-loyalty-programs
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
# Response Parameters

| Parameter             | Datatype | Description                                                                            |
| --------------------- | -------- | -------------------------------------------------------------------------------------- |
| programId             | long     | Unique ID of the loyalty program.                                                      |
| programName           | string   | Name of the partner program.                                                           |
| pointsToCurrencyRatio | double   | Points to currency conversion ratio of the default program configured for the program. |
| programDescription    | string   | Description of the program.                                                            |
| pointsExchangeRate    | double   | Points to currency conversion ratio configured for the external program.               |
| partnerProgramType    | enum     | Type of the program - external, supplementary, or default.                             |
| membershipPeriodValue | int      | Membership validity of the program.                                                    |
| tierBased             | boolean  | Whether the program is tier based (true) or membership based (false).                  |