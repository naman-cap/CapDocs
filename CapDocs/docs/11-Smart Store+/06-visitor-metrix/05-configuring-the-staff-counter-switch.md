---
title: Configuring the staff counter switch
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
The Staff Counter is a switch that lets you track store persons' in or out count. Our technicians will decide which way to track based on the feasibility and accessibility. The staff is required to press the switch before entering the capture area for in count tracking or after crossing the capture area for out count tracking. 

**Where to install the switch?**\
It is recommended to install the switch at the entrance just before the VisitorMetrix's capture area starts. 

**How does the switch work?**\
The store person needs to press the switch and cross the capture area immediately for a staff walk-in count or walk-out from the capture area and then press the switch for a staff walk-out count. For an instance, if a count is recorded in Staff Counter but not in VisitorMetrix then the count is ignored as a false count.

**How does VisitorMetrix eliminate duplicate entries?**\
In an instant, the number of counts of the Staff Counter should not be more than the count tracked by VisitorMetrix. For example, in an instance, if the switch is pressed 5 times, but only 2 counts are tracked by VisitorMetrix immediately, then the system automatically ignores the remaining 3 false counts and considers only 2 as staff count.

![472](https://files.readme.io/e256be6-cont.png "cont.png")

**Prerequisites**\
To configure the device, you need to have

* MAC address provided along with the device
* InStore installed on any of the POS machines

**Configuring the Device**

1. On InStore, click FFC. InStore automatically fetches the device and shows on the FFC screen.

![624](https://files.readme.io/6f0fac1-scrr.png "scrr.png")

You will see the list of devices available. 

2. If the Staff Counter switch is not detected automatically, click Add Device

![624](https://files.readme.io/d2e2340-deviceeee.png "deviceeee.png")

3. Click Staff Counter Setup

![624](https://files.readme.io/763805e-setupp.png "setupp.png")

4. Enter the admin password and click

![253](https://files.readme.io/99f94db-c.png "c.png")

5. Specify the MAC address of the switch in Enter Device Id to be paired with the FFC

![626](https://files.readme.io/a64707d-ffc.png "ffc.png")

6. Select In to allow the switch to capture walk-in count \[or] Out to capture walk-out count

![624](https://files.readme.io/5e48186-co.png "co.png")

7. Click **Save** 

![450](https://files.readme.io/03db909-savee.png "savee.png")
