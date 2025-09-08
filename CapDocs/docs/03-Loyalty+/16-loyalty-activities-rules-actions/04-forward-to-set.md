---
title: Forward to set
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
The general expressions that you define at the parent set level allow you to evaluate conditions at the transaction level. However, you need to use Forward to set to evaluate line-items, payment mode, or tracker values of the transaction. When you use Forward to set on a condition, it creates a subset where you can define rules on the transaction items.

You can either use line-item unrolling or payment method unrolling, or both of them in a single action. 

The following are the options available for the Forward to set action. 

![ad36405 LDaxbpQ7QHB2TRoU8NrcMjptr iDoj8IhA](https://files.readme.io/ad36405-LDaxbpQ7QHB2TRoU8NrcMjptr-iDoj8IhA.png)

## Evaluate rules at the line-item level (Enable line-item unrolling)

Enable the toggle button to evaluate rules on transaction line items. When enabled, L+ evaluates the defined rules for every line item of the transaction.

You will see the options shown in the following image.

![a93fb85 tog VIK2U16ig9kWjteXVTznONNU1ybgdA](https://files.readme.io/a93fb85-tog_VIK2U16ig9kWjteXVTznONNU1ybgdA.png)

* Use line item proportions: Enable this option when line item amounts may not add up to the transaction amount. Enable this when there is a bill-level discount that you want to distribute to the line items of the transaction.
* Maximise points allocation: Enable this option to maximize points for the eligible payment methods - payment methods marked as eligible under Advanced Settings. 

Points are allocated for the total eligible amount rather than on a prorated basis. Individual line item amounts are not considered when this option is enabled.

## Evaluate payment modes (Enable payment method unrolling)

This option lets you run rules on individual payment methods. When you on Enable payment method unrolling, the rules defined in the forwarded set would be evaluated multiple times - it repeats for every payment method in the transaction.

> 📘
>
> * Forward to set is also used for trackers.
>   * When Enable line item unrolling is enabled, the rules defined in the forwarded set would be evaluated multiple times (they will be repeated for every item in the transaction).
>   * When Enable payment method unrolling is enabled, the rules defined in the forwarded set would be evaluated multiple times (they will be repeated for every payment method in the transaction).
>   * When you choose Forward to set action, you can either use line item unrolling or payment method unrolling, or both of them. If you just need to evaluate more expressions, you can disable both and click Save to proceed to configure the new sub-set. In the following screenshot, Set3 is the new subset created.

![a2102d5 AOWvcueJ4CHnNiL5fMvup2sv 5DuCbPEYg](https://files.readme.io/a2102d5-AOWvcueJ4CHnNiL5fMvup2sv_5DuCbPEYg.png)

## Evaluate multiple conditions (at the event level)

If you just need to evaluate more expressions before executing an action: 

1. Disable both Enable line item unrolling and Enable payment method unrolling 
2. Click Save to proceed to configure the new subset. You will see a new sub-set.

![1a0581e fIx04qRUPZhpYHMzJLuKaejGeW MDtOXVg](https://files.readme.io/1a0581e-fIx04qRUPZhpYHMzJLuKaejGeW-MDtOXVg.png)
