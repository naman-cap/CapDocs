---
title: Return after redemption scenarios
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
# Awarded and Deduction example entries

* We maintain all the points awarded in PA tables(warehouse.points\_awarded, warehouse.points\_awarded\_lineitems) and all deductions in warehouse.points\_deductions table. When any award happens entries go to PA tables. When any deductions(expiry, redemption, return) happens entries go to the PD table and we update the PA tables. PD tables entries will reference PA tables. Lets understand this with an example:
* Award 100 points on 2 lineItems. Entries will go to points\_awarded\_lineitems table. There are other columns but we are ignoring those columns for now.

| id   | org\_id | program\_id | points\_value | redeemed\_value | returned\_value | expired\_value | expiry\_date | line\_item\_id | event\_log\_id |
| ---- | ------- | ----------- | ------------- | --------------- | --------------- | -------------- | ------------ | -------------- | -------------- |
| PAL1 | 100     | 101         | 40.000        | 0               | 0               | 0              |              | L1             |                |
| PAL2 | 100     | 101         | 60.000        | 0               | 0               | 0              |              | L2             |                |

* Any deduction will make an entry in the PD table. Let's assume we do a redemption for 30 points and those 50 points and those 50 points come from PAL1(40 points) and PAL2(10 points). So the table will look like this.\
  deduction\_summary\_id -> warehouse.points\_redemption\_summary (this value can be -1 in case of expiry and returns)

| id  | org\_id | program\_id | points\_deducted | deduction\_type | deduction\_summary\_id | PA\_ref\_id | PA\_ref\_type | deducted\_on | event\_log\_id |
| --- | ------- | ----------- | ---------------- | --------------- | ---------------------- | ----------- | ------------- | ------------ | -------------- |
| PD1 | 100     | 101         | 40.000           | REDEEMED        | PRS1                   | PA1         | PAL           |              |                |
| PD2 | 100     | 101         | 10.000           | REDEEMED        | PRS1                   | PA2         | PAL           |              |                |

| id   | org\_id | program\_id | points\_value | redeemed\_value | returned\_value | expired\_value | expiry\_date | line\_item\_id | event\_log\_id |
| ---- | ------- | ----------- | ------------- | --------------- | --------------- | -------------- | ------------ | -------------- | -------------- |
| PAL1 | 100     | 101         | 40.000        | 40.000          | 0               | 0              |              | L1             |                |
| PAL2 | 100     | 101         | 60.000        | 10.000          | 0               | 0              |              | L2             |                |

* Now PAL2 have 50 points remaining on it and expiry runs expiry will make one more entry in PD table

| id  | org\_id | program\_id | points\_deducted | deduction\_type | deduction\_summary\_id | PA\_ref\_id | PA\_ref\_type | deducted\_on | event\_log\_id |
| --- | ------- | ----------- | ---------------- | --------------- | ---------------------- | ----------- | ------------- | ------------ | -------------- |
| PD1 | 100     | 101         | 40.000           | REDEEMED        | PRS1                   | PA1         | PAL           |              |                |
| PD2 | 100     | 101         | 10.000           | REDEEMED        | PRS1                   | PA2         | PAL           |              |                |
| PD3 | 100     | 101         | 50.000           | EXPIRED         | PRS1                   | PA2         | PAL           |              |                |

| id   | org\_id | program\_id | points\_value | redeemed\_value | returned\_value | expired\_value | expiry\_date | line\_item\_id | event\_log\_id |
| ---- | ------- | ----------- | ------------- | --------------- | --------------- | -------------- | ------------ | -------------- | -------------- |
| PAL1 | 100     | 101         | 40.000        | 40.000          | 0               | 0              |              | L1             |                |
| PAL2 | 100     | 101         | 60.000        | 10.000          | 0               | 50.00          |              | L2             |                |

Do note that the effective value of any PA entry never goes negative. Because we don't deduct more points than what is available there.

# Return After Redemption scenario:

Effective Value on a PA entry = points\_value - redeemed\_value - expired\_value - returned\_value

### Move points when other PA entry has some available points

When we redeem points, the effective value on any PA entry decreases. When we make a return we are decreasing the effective points in that case as well. In that scenario, effective value might go negative. In those scenarios we try to move redeemed\_value from one PA entry to another PA entry. Moving redeemed value here means that we un-redeem from one PA entry and redeem from another PA entry.

Example:\
For simplicity, let's assume that we are earning points on the bill (warehouse.points\_awarded table).

1. A customer makes first Transaction T1 and earns 100 points (balance is 100 points)
2. Customer makes T2 and he gets 150 points (balance is 250 points)

| id  | org\_id | program\_id | points\_value | redeemed\_value | returned\_value | expired\_value | expiry\_date | bill\_id | event\_log\_id |
| --- | ------- | ----------- | ------------- | --------------- | --------------- | -------------- | ------------ | -------- | -------------- |
| PA1 | 100     | 101         | 100.000       | 0               | 0               | 0              |              | BILL-1   |                |
| PA2 | 100     | 101         | 150.000       | 0               | 0               | 0              |              | BILL-2   |                |

3. Customer redeems 110 points, let's assume that PA1(100 points)  + PA2(10 points) are consumed, entries will look like this. Points balance is 250-110 = 140

| id(PA) | org\_id | program\_id | points\_value | redeemed\_value | returned\_value | expired\_value | expiry\_date | bill\_id | event\_log\_id |
| ------ | ------- | ----------- | ------------- | --------------- | --------------- | -------------- | ------------ | -------- | -------------- |
| PA1    | 100     | 101         | 100.000       | 100.00          | 0               | 0              |              | BILL-1   |                |
| PA2    | 100     | 101         | 150.000       | 10.00           | 0               | 0              |              | BILL-2   |                |

| id(PD) | org\_id | program\_id | points\_deducted | deduction\_type | deduction\_summary\_id | PA\_ref\_id | PA\_ref\_type | deducted\_on | event\_log\_id |
| ------ | ------- | ----------- | ---------------- | --------------- | ---------------------- | ----------- | ------------- | ------------ | -------------- |
| PD1    | 100     | 101         | 100.000          | REDEEMED        | PRS1                   | PA1         | PA            |              |                |
| PD2    | 100     | 101         | 10.000           | REDEEMED        | PRS1                   | PA2         | PA            |              |                |

4. Now the customer returns Bill-1, this is the scenario of return after redemption. As you can see here, we have to move some points from PA1 to PA2. The reason is that PA1 is getting returned here fully. After return effective points become -100 on PA1. So to make effective points 0, we have to move redeemed\_value from PA1 to some other place. As points are available on PA2, we move those points to PA2. We created PD4 and PD5 in this scenario. PD4 is a REDEEM\_REVERTED entry. This entry is opposite to PD1. PD1 and PD4 suggest that PA1 effective redeemed\_value is zero. PD3 is the RETURN deduction type and suggests that we have returned values as 100. PA1 effective values is ZERO as we have REDEEMED and REDEEM\_REVERTED entry and one return entry for this. Balance is 140-100 = 40 points

| id(PA) | org\_id | program\_id | points\_value | redeemed\_value | returned\_value | expired\_value | expiry\_date | bill\_id | event\_log\_id |
| ------ | ------- | ----------- | ------------- | --------------- | --------------- | -------------- | ------------ | -------- | -------------- |
| PA1    | 100     | 101         | 100.000       | 0.00            | 100.00          | 0              |              | BILL-1   |                |
| PA2    | 100     | 101         | 150.000       | 110.00          | 0               | 0              |              | BILL-2   |                |

| id(PD) | org\_id | program\_id | points\_deducted | deduction\_type  | deduction\_summary\_id | PA\_ref\_id | PA\_ref\_type | deducted\_on | event\_log\_id |
| ------ | ------- | ----------- | ---------------- | ---------------- | ---------------------- | ----------- | ------------- | ------------ | -------------- |
| PD1    | 100     | 101         | 100.000          | REDEEMED         | PRS1                   | PA1         | PA            |              |                |
| PD2    | 100     | 101         | 10.000           | REDEEMED         | PRS1                   | PA2         | PA            |              |                |
| PD3    | 100     | 101         | 100.00           | RETURN           | -1                     | PA1         | PA            |              |                |
| PD4    | 100     | 101         | 100.00           | REDEEM\_REVERTED | PRS1                   | PA1         | PA            |              |                |
| PD5    | 100     | 101         | 100.00           | REDEEMED         | PRS1                   | PA2         | PA            |              |                |

### PABP negative scenario because of return after redemption

* We will continue with the same example, As we can see here PA1 is fully consumed after return. PA2 has 40 points available. Balance is 40 points. Now let's assume the customer returns Bill-2 as well. So we will have to return 150 points from the customer balance. Balance becomes 40-150 = 110 points. This is clearly saying that the customer never earned points because he returned all the bills he made but he redeemed 110 points.

* PA2 effective points are becoming -110 here. This means that we have to move the redeemed points from PA2 entry as well. But we don't have any other entry available where we can move these points. This is where the PABP negative entry will come into picture. We will un-redeem points from PA2. We will create an entry is points\_awarded\_bill\_promotions (PABP) entry. It's points value is 0 but there will be redeemed\_value on this entry. This PABP entry's effective value is negative, which we never allow to happen for the original entries in our system. But PABP negative entry is kind of exception and keep our tree balanced. The tables will look like this.

| id(PA) | org\_id | program\_id | points\_value | redeemed\_value | returned\_value | expired\_value | expiry\_date | bill\_id | event\_log\_id |
| ------ | ------- | ----------- | ------------- | --------------- | --------------- | -------------- | ------------ | -------- | -------------- |
| PA1    | 100     | 101         | 100.000       | 0.00            | 100.00          | 0              |              | BILL-1   |                |
| PA2    | 100     | 101         | 150.000       | 0.00            | 150             | 0              |              | BILL-2   |                |

| id(PABP) | org\_id | program\_id | points\_value | redeemed\_value | returned\_value | expired\_value | expiry\_date | bill\_id | promotion\_id                     |
| -------- | ------- | ----------- | ------------- | --------------- | --------------- | -------------- | ------------ | -------- | --------------------------------- |
| PABP1    | 100     | 101         | 0.00          | 110.00          | 0               | 0              |              | BILL-1   | return\_promotion<br />(internal) |

| id(PD) | org\_id | program\_id | points\_deducted | deduction\_type  | deduction\_summary\_id | PA\_ref\_id | PA\_ref\_type | deducted\_on | event\_log\_id |
| ------ | ------- | ----------- | ---------------- | ---------------- | ---------------------- | ----------- | ------------- | ------------ | -------------- |
| PD1    | 100     | 101         | 100.000          | REDEEMED         | PRS1                   | PA1         | PA            |              |                |
| PD2    | 100     | 101         | 10.000           | REDEEMED         | PRS1                   | PA2         | PA            |              |                |
| PD3    | 100     | 101         | 100.00           | RETURN           | -1                     | PA1         | PA            |              |                |
| PD4    | 100     | 101         | 100.00           | REDEEM\_REVERTED | PRS1                   | PA1         | PA            |              |                |
| PD5    | 100     | 101         | 100.00           | REDEEMED         | PRS1                   | PA2         | PA            |              |                |
| PD6    | 100     | 101         | 150              | RETURN           | -1                     | PA2         | PA            |              |                |
| PD7    | 100     | 101         | 110              | REDEEM\_REVERTED | PRS1                   | PA2         | PA            |              |                |
| PD8    | 100     | 101         | 110              | REDEEM           | PRS1                   | PABP(-ve)   | PABP          |              |                |

### PABP negative adjustment after PABP negative is created

* Now we have understood the concept of PABP negative. But what happens to this entry in the future. Now, As we have balance is -100. If the customer does not earn any points in the future. This remains the state. But if the customer earns more points. Customer's balance will become positive.
* For example if the customer earns 500 more points then balance becomes -110 + 500 = 390. So PA entry will look like this

| id(PA) | org\_id | program\_id | points\_value | redeemed\_value | returned\_value | expired\_value | expiry\_date | bill\_id | event\_log\_id |
| ------ | ------- | ----------- | ------------- | --------------- | --------------- | -------------- | ------------ | -------- | -------------- |
| PA1    | 100     | 101         | 100.000       | 0.00            | 100.00          | 0              |              | BILL-1   |                |
| PA2    | 100     | 101         | 150.000       | 0.00            | 150             | 0              |              | BILL-2   |                |
| PA3    | 100     | 101         | 500           | 0.00            | 0.00            | 0              |              | BILL-3   |                |

| id(PABP) | org\_id | program\_id | points\_value | redeemed\_value | returned\_value | expired\_value | expiry\_date | bill\_id | promotion\_id                     |
| -------- | ------- | ----------- | ------------- | --------------- | --------------- | -------------- | ------------ | -------- | --------------------------------- |
| PABP1    | 100     | 101         | 0.00          | 0               | 0               | 0              |              | BILL-1   | return\_promotion<br />(internal) |

Now PABP1's effective value is zero and it's not an exceptional entry any more. PD will look like this.

| id(PD) | org\_id | program\_id | points\_deducted | deduction\_type  | deduction\_summary\_id | PA\_ref\_id | PA\_ref\_type | deducted\_on | event\_log\_id |
| ------ | ------- | ----------- | ---------------- | ---------------- | ---------------------- | ----------- | ------------- | ------------ | -------------- |
| PD1    | 100     | 101         | 100.000          | REDEEMED         | PRS1                   | PA1         | PA            |              |                |
| PD2    | 100     | 101         | 10.000           | REDEEMED         | PRS1                   | PA2         | PA            |              |                |
| PD3    | 100     | 101         | 100.00           | RETURN           | -1                     | PA1         | PA            |              |                |
| PD4    | 100     | 101         | 100.00           | REDEEM\_REVERTED | PRS1                   | PA1         | PA            |              |                |
| PD5    | 100     | 101         | 100.00           | REDEEMED         | PRS1                   | PA2         | PA            |              |                |
| PD6    | 100     | 101         | 150.00           | RETURN           | -1                     | PA2         | PA            |              |                |
| PD7    | 100     | 101         | 110.00           | REDEEM\_REVERTED | PRS1                   | PA2         | PA            |              |                |
| PD8    | 100     | 101         | 110.00           | REDEEM           | PRS1                   | PABP(-ve)   | PABP          |              |                |
| PD9    | 100     | 101         | 110.00           | REDEEM\_REVERTED | PRS1                   | PABP(-ve)   | PABP          |              |                |
| PD10   | 100     | 101         | 110.00           | REDEEM           | PRS1                   | PABP(-ve)   | PABP          |              |                |

When this adjustment is done in the flow:

* As of now this adjustment of points happens when the points expire, in points enquiry we check if any PABP negative entry is present or not.
* If there is any PABP negative entry present, we adjust it first and remaining points are expires. It's quite possible points to expire are less than or equal to PABP negative entry redeemed value, in that case we make the adjustment but we don't expire anything.
* If points to expire are more, we adjust all PABP negative entries and remaining points are expired. There can be more than one PABP negative present for a customer.

**Note**:\
This adjustment can be done when the customer is earning points. For example we have our balance as -110. So at this moment we know that PABP negative entry is present for sure. If a customer earns some points at this moment, then we know that we can make adjustments. As of now in the code flow we are not doing it. We are making adjustments only at the time of points expiry. But that's one more way to handle it, why to wait for points to expire to make the adjustments. This might change in future, we might start making PABP negative adjustments at the time of PA3 earning, when the customer's balance was negative and customer balance increased by some value.

**Important terms:**\
PA - Points Awarded
PAL - Points Awarded Line Items
PALP-Points Awarded Line Item Promotion
PABP -Points Awarded Bill Promotion
PD -Points Deducted