---
title: Instore installation guide
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
To know the essential installation process and checklists involved, see the attached document.

This section provides the system requirements, FAQs for installing InStore along with the attached installation guide.

## System Requirements

Hardware\
The hardware specifications of your computer must be as follows.

<Table align={["left","left","left"]}>
  <thead>
    <tr>
      <th>
        Hardware
      </th>

      <th>
        Minimum
      </th>

      <th>
        Recommended
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Processor
      </td>

      <td>
        Intel Atom (1.67 GHz)
      </td>

      <td>
        Core 2 Duo (2.93 GHz)
      </td>
    </tr>

    <tr>
      <td>
        RAM
      </td>

      <td>
        1 GB
      </td>

      <td>
        2GB
      </td>
    </tr>

    <tr>
      <td>
        Hard Disk
      </td>

      <td>
        25GB
      </td>

      <td>
        100GB
      </td>
    </tr>
  </tbody>
</Table>

## Operating Systems

The InStore application can be hosted on any of the following 32-bit or 64-bit Windows operating systems:

* Windows 10, 8/8.1, 7, XP with SP3 or SP2
* Windows Embedded POSReady 2009

**Operating Systems and their Corresponding .Net Versions**\
The supported .NET versions change based on the Operating System. The following table lists all the supported Operating System with the corresponding .NET versions supported.

<Table align={["left","left"]}>
  <thead>
    <tr>
      <th>
        Operation System
      </th>

      <th>
        .Net Versions
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Windows 8 or above
      </td>

      <td>
        .Net 4.0
      </td>
    </tr>

    <tr>
      <td>
        Windows 7
      </td>

      <td>
        .Net 3.5 or 4.0
      </td>
    </tr>

    <tr>
      <td>
        Windows XP with SP3 or SP2
      </td>

      <td>
        .Net 3.5 or 4.0
      </td>
    </tr>
  </tbody>
</Table>

#### Other Software

You must install the following software on your computer:

* TextGRAB (A software for screen grabbing)
* Windows Installer (A Windows component for installing and uninstalling software)
* Setup3 (A file for supporting rules engine)

**Internet Connectivity**

* A minimum speed of 256 kbps (recommended: 1 Mbps).

#### Other Resources

The following Microsoft Web page discusses the system requirements for .Net Framework 3.5 in detail:

[http://msdn.microsoft.com/en-us/library/bb882520(v=vs.90).aspx](http://msdn.microsoft.com/en-us/library/bb882520\(v=vs.90\).aspx)

## Installation FAQs

**\
What database is used for InStore locally?**\
Store Center uses SQL Express 2008 R2 and MS SQLServer, 

**Do we have to open up ports to install InStore?**\
You do not have to open up ports for installation.

**What are the prerequisites for installing InStore?**\
You require Microsoft .Net 3.5 SP1 Framework and a custom setup built in-house.

**What registry entries are created while installing Store Center?**\
InStore Installer:

HKEY\_LOCAL\_MACHINE\SOFTWARE\Capillary Technologies\CapillaryService[HKEY_LOCAL_MACHINE\SOFTWARE\Capillary Technologies\CapillaryService]

HKEY\_LOCAL\_MACHINE\SOFTWARE\Capillary Technologies\InStorePrerequisite[HKEY_LOCAL_MACHINE\SOFTWARE\Capillary Technologies\InStorePrerequisite]

HKEY\_LOCAL\_MACHINE\SOFTWARE\Capillary Technologies\InStore[HKEY_LOCAL_MACHINE\SOFTWARE\Capillary Technologies\InStore]

Instore ClicOnce Installer:

HKEY\_CURRENT\_USER\SOFTWARE\Capillary\InTouch

**What service does InStore use?**\
Store Center currently uses the .Net 3.5 SP1 service

**How does the data flow to the cloud?**\
A store will have a local database that stores all the transactions happening in a store. During a specified interval, this data is synced to the Capillary Cloud through our InTouch APIs.

**What connectivity protocols does the InStore Center?**\
The InStore application communicates with the Capillary Cloud through HTTP, but it can be configured to communicate through HTTPS as well.

**Is there encryption done while transferring the data?**\
Currently, the data is transferred without any encryption.

**Should SQLite also be installed if MSSQL Express is already installed?**\
You do not have to install Sqlite for Instore. InStore installation by default contains Sqlite. 

**What version of SQLite is currently used?**\
The SQLite version currently used is 1.0.90.0
