---
title: FAQs - store center and InStore
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
**What databases are used for In-Store and Store Center locally?**\
Store Center uses SQL Express 2008 R2 and MS SQL Server, while InStore uses SQLite.

**Do we have to open up ports before installing Store Center or InStore?**\
You do not have to open up ports for installation. However, we run the Storecenter WCF (Windows Communication Foundation) service on port 8736, and Store Center listens on port number 6969. If these ports are used by some other programs, we may have to handle the configuration accordingly.

**What are the prerequisites for installing Store Center and InStore?**\
You require Microsoft .Net 3.5 SP1 Framework and a custom setup built in-house.

**What registry entries are created while installing Store Center and InStore?**\
*Storecenter Installer:*

HKEY\_LOCAL\_MACHINE\SOFTWARE\Capillary Technologies\CapillaryService[HKEY_LOCAL_MACHINE\SOFTWARE\Capillary Technologies\CapillaryService]

HKEY\_LOCAL\_MACHINE\SOFTWARE\Capillary Technologies\InStorePrerequisite[HKEY_LOCAL_MACHINE\SOFTWARE\Capillary Technologies\InStorePrerequisite]

HKEY\_LOCAL\_MACHINE\SOFTWARE\Capillary Technologies\StoreCenter[HKEY_LOCAL_MACHINE\SOFTWARE\Capillary Technologies\StoreCenter]

*Instore Installer:*

HKEY\_LOCAL\_MACHINE\SOFTWARE\Capillary Technologies\CapillaryService[HKEY_LOCAL_MACHINE\SOFTWARE\Capillary Technologies\CapillaryService]

HKEY\_LOCAL\_MACHINE\SOFTWARE\Capillary Technologies\InStorePrerequisite[HKEY_LOCAL_MACHINE\SOFTWARE\Capillary Technologies\InStorePrerequisite]

HKEY\_LOCAL\_MACHINE\SOFTWARE\Capillary Technologies\InStore[HKEY_LOCAL_MACHINE\SOFTWARE\Capillary Technologies\InStore]

Instore and StoreCenter ClicOnce Installer:

HKEY\_CURRENT\_USER\SOFTWARE\Capillary\InTouch

**What service does Store Center and InStore use?**\
Store Center and InStore currently use the .Net 3.5 SP1 service

**How does the data flow to cloud?**\
Store Center and InStore have a local database that store all the transactions happening on the POS. During a specified interval, this data is synced to the Capillary Cloud through our InTouch APIs.

**What connectivity protocols are used by Store Center and InStore?**\
Store Center communicates with the InStore application through TCP/IP, while it communicates with the Capillary Cloud through HTTP.\
The InStore application communicates with the Capillary Cloud through HTTP, but it can be configured to communicate through HTTPS as well.

**Is there an encryption done while transferring the data?**\
Currently the data is transferred without any encryption.

**Should SQLite also be installed if MSSQL Express is already installed?**\
You do not have to install Sqlite for Instore. InStore installation by default contains Sqlite. For Store Center, if the database is already installed, you must point the Store Center to that database server.

**How do the older and newer Store Center Installers differ?**\
While installing Store Center using the older Installer (ClicOnce), you must first install SQLExpress. If there is no SQL Express installed prior to running the new installer, it installs SQLExpress 2008 R2 automatically.

**What version of SQLite is currently used?**\
The SQLite version currently used is 1.0.90.0

**Which features are still available when InStore is offline?**\
The following table lists which features are still accessible when InStore is offline.

<Table align={["left","left","left"]}>
  <thead>
    <tr>
      <th>
        Features
      </th>

      <th>
        Available Offline
      </th>

      <th>
        Notes
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Customer Registration/Update
      </td>

      <td>
        Yes
      </td>

      <td>

      </td>
    </tr>

    <tr>
      <td>
        Capture Transaction
      </td>

      <td>
        Yes
      </td>

      <td>

      </td>
    </tr>

    <tr>
      <td>
        Capture Return Transaction
      </td>

      <td>
        No
      </td>

      <td>

      </td>
    </tr>

    <tr>
      <td>
        Customer Search
      </td>

      <td>
        Yes
      </td>

      <td>

      </td>
    </tr>

    <tr>
      <td>
        Transaction Search
      </td>

      <td>
        No
      </td>

      <td>

      </td>
    </tr>

    <tr>
      <td>
        Online Search
      </td>

      <td>
        No
      </td>

      <td>

      </td>
    </tr>

    <tr>
      <td>
        Advanced Customer Search
      </td>

      <td>
        No
      </td>

      <td>

      </td>
    </tr>

    <tr>
      <td>
        Customer Summary
      </td>

      <td>
        Yes
      </td>

      <td>
        Limited, depending on the Clienteling and Non Clienteling versions.
      </td>
    </tr>

    <tr>
      <td>
        Point Redemption
      </td>

      <td>
        No
      </td>

      <td>

      </td>
    </tr>

    <tr>
      <td>
        Coupon Redemption
      </td>

      <td>
        No
      </td>

      <td>

      </td>
    </tr>

    <tr>
      <td>
        View Call Tasks
      </td>

      <td>
        Yes
      </td>

      <td>
        Call tasks are synced on a nightly basis. On syncing, call tasks can be viewed offline too.
      </td>
    </tr>

    <tr>
      <td>
        Close/Change Call Task Status
      </td>

      <td>
        No
      </td>

      <td>

      </td>
    </tr>

    <tr>
      <td>
        View/Edit Customer Notes
      </td>

      <td>
        No
      </td>

      <td>

      </td>
    </tr>

    <tr>
      <td>
        View/Edit Customer Preferences
      </td>

      <td>
        No
      </td>

      <td>

      </td>
    </tr>

    <tr>
      <td>
        View Transaction History Screen
      </td>

      <td>
        No
      </td>

      <td>

      </td>
    </tr>

    <tr>
      <td>
        View Interaction History
      </td>

      <td>
        No
      </td>

      <td>

      </td>
    </tr>

    <tr>
      <td>
        Intelligent Notifications
      </td>

      <td>
        Yes
      </td>

      <td>
        Limited Capability. Some notifications are available only when Instore is online, while some are available when InStore is offline.
      </td>
    </tr>

    <tr>
      <td>
        Customer Feedback
      </td>

      <td>
        No
      </td>

      <td>

      </td>
    </tr>

    <tr>
      <td>
        View Store Terminal Report
      </td>

      <td>
        No
      </td>

      <td>

      </td>
    </tr>

    <tr>
      <td>
        View Points Balance
      </td>

      <td>
        Yes\*
      </td>

      <td>
        * The points balance is based on last sync completion. Points data might be outdated.
      </td>
    </tr>

    <tr>
      <td>
        View Customer Active Coupons
      </td>

      <td>
        Yes\*
      </td>

      <td>
        * The active coupons list is based on last sync completion. The active coupons list might be outdated.
      </td>
    </tr>

    <tr>
      <td>
        Customer Profile - Refresh
      </td>

      <td>
        No
      </td>

      <td>

      </td>
    </tr>

    <tr>
      <td>
        Product Search
      </td>

      <td>
        No
      </td>

      <td>
        This is a Clienteling feature.
      </td>
    </tr>

    <tr>
      <td>
        Reminder Notification
      </td>

      <td>
        Yes
      </td>

      <td>

      </td>
    </tr>

    <tr>
      <td>
        Gift Cards (Redeem/Recharge)
      </td>

      <td>
        No
      </td>

      <td>

      </td>
    </tr>

    <tr>
      <td>
        Mobile Change Request
      </td>

      <td>
        Yes
      </td>

      <td>

      </td>
    </tr>

    <tr>
      <td>
        Email Change Request
      </td>

      <td>
        Yes
      </td>

      <td>

      </td>
    </tr>

    <tr>
      <td>
        Subscription
      </td>

      <td>
        No
      </td>

      <td>

      </td>
    </tr>

    <tr>
      <td>
        Referral
      </td>

      <td>
        No
      </td>

      <td>

      </td>
    </tr>
  </tbody>
</Table>
