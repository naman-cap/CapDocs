---
title: Transaction Return Handling - Points
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
fixed points or points at bill level are returned in ratio of return amount to bill amount for AMOUNT return

Whereas they are not returned in case of partial LINE\_ITEM based returns. If all lineitems are returned then only fixed points or points at bill level are also returned.

AMOUNT return - points are deducted from PAL and PALP on basis of return ratio of bill amount.

LINE\_ITEM return - points are deducted from PAL and PALP on basis of return ratio of lineitem amount.
