---
title: Earned Promotions Fact Table
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
Earned promotions are promotions that customers receive after meeting specific criteria or completing certain activities defined by a brand, such as making a purchase, registering, updating their profile, or achieving a milestone. This fact table captures information related to earned promotions, such as the date and time the promotion was earned, the customer ID associated with it, etc.

**Databricks Table Name:** `earned_promotions_fact`

<br />

| Column Name                         | Data Type | Description                                                                                                              | <Glossary>Linked Table</Glossary>                                         | Availability for Export in the Standard Template |
| :---------------------------------- | :-------- | :----------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------ | :----------------------------------------------- |
| auto\_update\_time                  | bigint    | Date and time when the corresponding table available at the source was last updated. It is in the Unix timestamp format. | [time](https://docs.capillarytech.com/docs/dimension-tables#time)         | \_                                               |
| auto\_update\_time\_ce              | bigint    | Date and time when the customer enrollment data was last updated, in Unix timestamp format.                              | [time](https://docs.capillarytech.com/docs/dimension-tables#time)         | \_                                               |
| auto\_update\_time\_ip              | bigint    | Date and time when the promotion data related to the earned points was last updated, in Unix timestamp format.           | [time](https://docs.capillarytech.com/docs/dimension-tables#time)         | \_                                               |
| ce\_id                              | bigint    | Customer enrollment Id                                                                                                   | \_                                                                        | \_                                               |
| dim\_customer\_enrollment\_date\_id | bigint    | Date when the Customer was enrolled for the promotion.                                                                   | [date](https://docs.capillarytech.com/docs/dimension-tables#date)         | \_                                               |
| dim\_customer\_enrollment\_time\_id | bigint    | Time when the Customer was enrolled for the promotion.                                                                   | [time](https://docs.capillarytech.com/docs/dimension-tables#time)         | \_                                               |
| dim\_earned\_date\_id               | bigint    | Date when promotion was earned.                                                                                          | [date](https://docs.capillarytech.com/docs/dimension-tables#date)         | \_                                               |
| dim\_earned\_expiry\_date\_id       | bigint    | Indicates the date when the earned promotion expires.                                                                    | [date](https://docs.capillarytech.com/docs/dimension-tables#date)         | \_                                               |
| dim\_earned\_expiry\_time\_id       | bigint    | Indicates the time when the earned promotion expires.                                                                    | [time](https://docs.capillarytech.com/docs/dimension-tables#time)         | \_                                               |
| dim\_earned\_promotion\_active\_id  | bigint    | Identifier indicating whether the earned promotion is currently active.                                                  | \_                                                                        | \_                                               |
| dim\_earned\_time\_id               | bigint    | Identifier for the time when the promotion was earned.                                                                   | [time](https://docs.capillarytech.com/docs/dimension-tables#time)         | \_                                               |
| dim\_event\_user\_id                | bigint    | Identifier for the customer associated with the reward.                                                                  | [users](https://docs.capillarytech.com/docs/dimension-tables#users-users) | \_                                               |
| dim\_issued\_date\_id               | bigint    | Indicates the date when the promotion was issued to the customer.                                                        | [date](https://docs.capillarytech.com/docs/dimension-tables#date)         | \_                                               |
| dim\_issued\_time\_id               | bigint    | Indicates the time when the promotion was issued to the customer.                                                        | [time](https://docs.capillarytech.com/docs/dimension-tables#time)         | \_                                               |
| dim\_latest\_updated\_date\_id      | bigint    | Date when the data corresponding to this event/ row is changed in the source table. It is in the YYYY-MM-DD format.      | [date](https://docs.capillarytech.com/docs/dimension-tables#date)         | \_                                               |
| dim\_latest\_updated\_time\_id      | bigint    | Identifier for the time when the data corresponding to this event/ row is changed in the source table.                   | [time](https://docs.capillarytech.com/docs/dimension-tables#time)         | \_                                               |
| dim\_redeemed\_count                | bigint    | Count of how many times the promotion has been redeemed by the customer                                                  | \_                                                                        | \_                                               |
| event\_log\_id                      | bigint    | Identifier for the event log entry associated with this promotion.                                                       | \_                                                                        | \_                                               |
| id                                  | bigint    | Unique identifier for the table record. It is the primary key for the table.                                             | \_                                                                        | \_                                               |
| issual\_id                          | bigint    | Identifier for the specific issual of the promotion.                                                                     | \_                                                                        | \_                                               |
| year                                | int       | Year of the promotion earned.                                                                                            | \_                                                                        | \_                                               |