---
title: Troubleshooting guide
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
<Table align={["left","left","left"]}>
  <thead>
    <tr>
      <th style={{ textAlign: "left" }}>
        Issue
      </th>

      <th style={{ textAlign: "left" }}>
        Problem
      </th>

      <th style={{ textAlign: "left" }}>
        Reasons
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td style={{ textAlign: "left" }}>
        Application Vendor Error
      </td>

      <td style={{ textAlign: "left" }}>
        * Antivirus might be blocking InStore
        * Internet fluctuation
      </td>

      <td style={{ textAlign: "left" }}>
        * Exclude antivirus from blocking InStore. and also "Documents and Settings" or My Documents folder from scanning.\
          C:\Users\<your account>\My Documents (Windows 7 and later)\
          C:\Documents and Settings (Windows XP and Vista)
        * Ensure that your internet connection is stable.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Hot Key Error
      </td>

      <td style={{ textAlign: "left" }}>
        * Data Provider Reference Mismatch
        * Wrong usage of hot key (Ctrl+Alt+Z)
        * Antivirus blocking TextGrab software
      </td>

      <td style={{ textAlign: "left" }}>
        * Select the correct Data Provider File for the InStore
        * Press the Hot Key only from your PoS screen/Do not press the hot key multiple times
        * Check if your anti-virus is blocking TextGrab. Add TextGrab to exclusion list.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Configuration Issue
      </td>

      <td style={{ textAlign: "left" }}>
        * Binary issue
        * If any data imported on server
      </td>

      <td style={{ textAlign: "left" }}>
        * Update InStore version to 5.5.4.1.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Data Picking Issues
      </td>

      <td style={{ textAlign: "left" }}>
        * Data Provider Reference Mismatch / Data provider not set in Back-End / Data provider not downloaded in Front - End
        * Wrong usage of hot key (Ctrl+Alt+Z)
      </td>

      <td style={{ textAlign: "left" }}>
        * Select the correct Data Provider File for the InStore 
        * Press the Hot Key only from your PoS screen/Do not press the hot key multiple times
        * Check if your anti-virus is blocking TextGrab. Add TextGrab to exclusion list.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        InStore Hanging
      </td>

      <td style={{ textAlign: "left" }}>
        * CPU usage might be high
        * The free space in C drive is less than 30%
      </td>

      <td style={{ textAlign: "left" }}>
        * Clear unwanted files from your C drive and clear %temp% folder, prefetch folder, cookies, recent files and run the Cleanmgr.exe command.
        * Reinstall SQL and Setup3
        * Update InStore
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Login Failure
      </td>

      <td style={{ textAlign: "left" }}>
        * Internet Fluctuation
        * Internet Proxy is not set in InStore
        * If website access is blocked in the Client System
      </td>

      <td style={{ textAlign: "left" }}>
        * Internet connection should be stable with at least 512 Kbps speed. Contact the store IT person to increase the internet speed.

        * To check internet proxy go to **Start > Run > type inetcpl.cpl.**&#x49;nternet Options window appears. Click the Connections tab and navigate to LAN Setting, Note Address & Port no present under the Proxy Server and do the following:

        In InStore,go to Advance Configuration. Under Connection Settings, you will see Web Check Method as TCP\_CHECK. Paste the copied text in Proxy Host & Port no. Click Update, close all applications and restart InStore.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        No Internet Available
      </td>

      <td style={{ textAlign: "left" }}>
        * Proxy might not be configured in InStore
      </td>

      <td style={{ textAlign: "left" }}>
        * Refer API error code for details
        * Check the customer's status/ points
        * Check integration files availability in Integration folder and server back-end also
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Pop up error
      </td>

      <td style={{ textAlign: "left" }}>
        * Integration pop up file might not be running during start up
        * Application helper service might not have started
      </td>

      <td style={{ textAlign: "left" }}>
        * Application helper Service should start from Services.msc
        * Ensure that the Integration Log-watcher is running
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Country Flag not Reflecting
      </td>

      <td style={{ textAlign: "left" }}>
        Country code configs might not have downloaded
      </td>

      <td style={{ textAlign: "left" }}>
        Reconfigure the country code.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Points are not issued to customer
      </td>

      <td style={{ textAlign: "left" }}>
        Cashier might not have submitted the bill
      </td>

      <td style={{ textAlign: "left" }}>
        Make sure the you are logged in to InStore and the bill is submitted.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Sync Issue
      </td>

      <td style={{ textAlign: "left" }}>
        * Internet might not be working
        * Capillary sites might have blocked
      </td>

      <td style={{ textAlign: "left" }}>
        * Check your internet connection and make sure the connection is stable.
        * White-list all capillary URLs
        * Update your InStore to the latest version
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Unhandled Exception Error
      </td>

      <td style={{ textAlign: "left" }}>
        Back-end problem
      </td>

      <td style={{ textAlign: "left" }}>
        * Uninstall DotNet software and reinstall it
        * Uninstall InStore and re-install the latest version 
        * Check whether your country code is configured correctly in Capillary InTouch. For example, for India, the country code should be ""+91"" ."
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Bill Number Already Exists
      </td>

      <td style={{ textAlign: "left" }}>
        You might have submitted the same bill again.
      </td>

      <td style={{ textAlign: "left" }}>
        If the same bill no is submitted again it shows the Warning message "Bill Number Already Exists". To see whether the bill number already exists, go to InStore menu > click Report. You can see all bills submitted on that particular day. If the bill no already exists, InStore will not accept the same bill no again / 

        Check in Capillary InTouch whether the bill no option is set to BILL\_NUMBER\_UNIQUE\
        For an XML based integration, check the notification area in InStore to ensure that a single log watcher/patch is running. If you notice multiple log watchers, delete the rest.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        System Crash
      </td>

      <td style={{ textAlign: "left" }}>
        * Viruses in your system
        * Newly installed software might not be supported and may cause severe error
        * System might have crashed due to power fluctuation
      </td>

      <td style={{ textAlign: "left" }}>
        Restore your system using the process: Go to Start > Control Panel > Program > Accessories > System Tools >System Restore.\
        Select Restore my Computer To An Earlier Time > Next > Select the restore point when the system was in good working condition and click Next. The system will restart and will be restored.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        SQL Not Installed/Removed
      </td>

      <td style={{ textAlign: "left" }}>
        * Might be a problem with Windows XP
        * There might be a problem with SQL Server installed in your system
      </td>

      <td style={{ textAlign: "left" }}>
        * Go to Start > Run > type regsvr32.exe licdll.dll > it should report "DllRegisterServer in licdll.dll succeeded." > Reinstall Service Pack 2. If this does not work, install the Hotfix KB912354 to update the licdll.dll file. 

        * Go to Start > Run > type regedit.exe > delete all the SQL Keys. Locate HKEY\_LOCAL\_MACHINE\Software\Microsoft\Windows NT\CurrentVersion[HKEY_LOCAL_MACHINE\Software\Microsoft\Windows NT\CurrentVersion]and then restart the system and install SQL server again.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Loading IKVM.Open.JDK Core Failed
      </td>

      <td style={{ textAlign: "left" }}>
        * Setup3 might not be installed
      </td>

      <td style={{ textAlign: "left" }}>
        * Install Setup3.exe
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Mobile Number Invalid
      </td>

      <td style={{ textAlign: "left" }}>
        * Entered incorrect/uncompleted mobile number
        * Auto config is not completed
        * Country Code not set properly in Server-Config
        * Setup installation issue
      </td>

      <td style={{ textAlign: "left" }}>
        * Mobile Number should be of 10 digits 
        * Need to do Autoconfig properly and wait until it is completed  Open InStore, click Settings, then click Auto Config. After the configuration process is completed, log out from InStore and log in again.
        * Set country code in Server-Config. Ex. for India country code is +91.
        * Check the country code chosen for your organization in InTouch. If the country code is Others, ensure that you have entered the mobile number with country code.
        * If issue is not resolved yet, re-install the InStore binary
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Slow Performance
      </td>

      <td style={{ textAlign: "left" }}>
        * Increase of Temporary Files/Low disk space in C Drive  
        * Presence of Viruses
      </td>

      <td style={{ textAlign: "left" }}>
        * Delete content of Temps & Apps folder and see if the issue is resolved.
        * Uninstall .Net 3.5 SP1 and clean up .Net using cleanup\_tool.exe (needs to be installed). Once the clean up is completed, restart your system and install "MSXML3msms.exe" and "msxml3.msi". Then install .Net 3.5 SP1.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Assembly Windows Base Version
      </td>

      <td style={{ textAlign: "left" }}>
        Problem with Sql compact
      </td>

      <td style={{ textAlign: "left" }}>
        Re-install SQL compact sp2
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Hook Key Error
      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>
        Change search bar key in General settings option(advanced settings)
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Object Reference issue
      </td>

      <td style={{ textAlign: "left" }}>

      </td>

      <td style={{ textAlign: "left" }}>
        Check with Sync status / Check Capillary website is opening or not/Check with proxy
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Login Issue\_Store Register Login failed error.txt
      </td>

      <td style={{ textAlign: "left" }}>
        Registry might have corrupted
      </td>

      <td style={{ textAlign: "left" }}>
        Go to command prompt and run the command - lodctr /R
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Offline Issue
      </td>

      <td style={{ textAlign: "left" }}>
        ISP Issue
      </td>

      <td style={{ textAlign: "left" }}>
        Change ISP ( Internet Operator)
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Discount Does Not match with Capillary Discount
      </td>

      <td style={{ textAlign: "left" }}>
        * Multiple discounts might have applied
        * Applied discount code on carry bag or outlier items
      </td>

      <td style={{ textAlign: "left" }}>
        * Apply only single discount per transaction
        * Do not apply discounts on carry bags or outlier items
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Custom fields are not reflecting
      </td>

      <td style={{ textAlign: "left" }}>
        * Sync might not have completed
        * Internet fluctuating
        * Capillary URLs might have blocked
      </td>

      <td style={{ textAlign: "left" }}>
        * Wait until the sync is complete and do a manual sync
        * Check your internet connection is stable
        * Whitelist all the Capillary URLs from blocking
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Feedback CCMS tickets raising failed
      </td>

      <td style={{ textAlign: "left" }}>
        Subject might be existing already in your CCMS Tickets
      </td>

      <td style={{ textAlign: "left" }}>
        Subject field should be unique (Only for Raymond brand). Check if there is any other ticket with the same subject line.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Framework 015 Error while billing in Shopper
      </td>

      <td style={{ textAlign: "left" }}>
        Discount file might be present in shopper folder
      </td>

      <td style={{ textAlign: "left" }}>
        Delete Cap disc file from shopper located folder
      </td>
    </tr>
  </tbody>
</Table>
