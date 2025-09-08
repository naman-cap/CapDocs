---
title: OND 2022 | Loyalty+ Releases
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
### Support for Hex Code in Loyalty tiers

**Problem Statement :**

Earlier the users could choose the color of the tier in the tier settings, by dragging the mouse on the color palette. But this allowed only limited colors to be selected for the tiers.

**Use Case:**

As a Loyalty program manager, I would like to use silver color for my silver tier, golden color for my gold tier, green color for my highest tier etc. but the color drag palette does not support these customized colors. 

**Feature Description:**

The tier color settings have been enhanced now. As you know each color is associated with a HEX code, so now you can edit this Hex code in the tier settings.If a color is not available in the color palette, simply type-in the HEX code of the required color, and the tier will acquire that color. The color cannot be changed for the default tier.

![](https://files.readme.io/be61e02-unnamed.png)

### Bulk Configuration tool for Workflows

**Problem Statement :**

* Through marvel rewards, brands setup catalogs with products, coupons, cart promotions, vendor reward etc. The currency for all these rewards are points owned by the customer.
* Currently we support static currencies i.e for the entire reward period the currency stays the same for the reward unless manually updated.
* If a brand wants to run promotions on their reward catalog i.e give discounts in the point value for a certain time and show additional promotions metadata for those items, it is not supported dynamically and needs to be changed manually at every instance.

**Feature Description:**

* Users will now be able to download a ruleset from any activity as a template as a file into their PC.
* This downloaded file will include both the true and false conditions with their respective expressions along with the actions configured within them.
* Users will be able to see which program this template was from, along with the customer activity, ruleset type (in case of Transaction Add it will be one of the 4 root types, it doesn’t matter for all other events) and the labels of the source rulesets (if available)
* Now, the users will be simply able to upload this downloaded file wherever they require the same set of configurations. But they will have to ensure that they replicate the sets in the same customer activity ( download rule sets from Transaction Add customer activity and upload them in any program, but in Transaction Add customer activity).
