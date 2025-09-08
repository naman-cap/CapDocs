---
title: Bulk Configuration
excerpt: ''
deprecated: true
hidden: true
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
> ❗️ This feature is deprecated an not in use

## Bulk Configuration tool and Renaming Sets in Loyalty Workflows

> 📘 Bulk Configuration is available for Mongo migrated orgs only and can be enabled only for orgs with Multi Loyalty Programs.

### Ability to Rename the Sets in Loyalty workflows

* In the Loyalty workflows, the default naming of the sets goes like, “Set 1” “Set 2” “Tracker Set” “Tracker\_evaluation\_123” and so on.
* These are system-driven names and don't even remain static. As soon as you add a set in between, all the numberings of the following sets change.
* This made communication difficult and if someone wants to refer to a configuration that was earlier sitting in Set 2 may have changed now due to the change in the set numbers.
* In order to get rid of this gap, we have enabled the Renaming of the Sets now. 

#### How ?

* Go to the Loyalty workflows section and you will find the by-default sets there.
* You will find a 3 dot menu with each set. **Refer to the below image**. 

![e9f5194 Screenshot 2022 11 11 161625](https://files.readme.io/e9f5194-Screenshot_2022-11-11_161625.png)

* Click on “**Rename Set**” , name the set as per your understanding and press Enter. Finally Save and continue.
* Also, now you can search the sets from their names. A lot of programs tend to have many sets, and now that you have renamed them, it's easier for you to understand them and also search them through the search bar above the sets. **Refer to the video below.** 

![f10a45b Rename sets](https://files.readme.io/f10a45b-Rename_sets.gif)

### Bulk Configuration

* In an ecosystem where there exist multiple Orgs, OUs or Loyalty Programs i.e a clear case of Multi Loyalty Programs, there might arise a situation where a set of condition-actions, promotions, etc. may be similar or common across all these environments and there needs to be an easy and straightforward way to configure that.
* Currently we don't have a way in which we can replicate the workflows configurations and rule sets from one environment/program to another, and have to manually configure rules in each and every program. This is very cumbersome and time consuming.
* So, we have brought in a Bulk Configuration method here, where Users will now be able to download a ruleset from any activity as a template as a file into their PC and upload the file wherever they require the same set of configurations.  

#### How ?

* Go to the Loyalty workflows and you will find the Sets there.
* You will find a 3 dot menu with each set. **Refer to the below image**.

![3285b60 Screenshot 2022 11 11 164509](https://files.readme.io/3285b60-Screenshot_2022-11-11_164509.png)

* Click on “**Download as template**” and a JSON file will get downloaded. For eg. Here we download the set which we named “Referral”.
* This downloaded file will include :
  * All the true and false conditions with their respective expressions
  * All actions inside the conditions with their configured attributes
  * The program ID of the set and the Customer activity it belongs to
  * Once you download the file, a new Tab will appear above called “**Bulk Configuration list**”. **Refer to the image below.** 

![c1b98cb Screenshot 2022 11 11 163820](https://files.readme.io/c1b98cb-Screenshot_2022-11-11_163820.png)

* Open the Bulk Configuration list page and you will be able to see any of the past activities/downloads you have done, along with its Publish status, the date it was drafted and published on and created by which user. **Refer the image below**. 

![ad2738d Screenshot 2022 11 11 164037](https://files.readme.io/ad2738d-Screenshot_2022-11-11_164037.png)

* Click on “**New Bulk configuration**” and name the configuration so that you can identify it. For eg. We downloaded the set names “Referral”, so we named the bulk configuration as “Referral copy”. Then click Next.
* **Upload the JSON file** you downloaded. Now, the following information will appear :
  * The source program from which the set belongs
  * Customer activity
  * Set type i.e. name of the original set

![416b613 Screenshot 2022 11 11 165143](https://files.readme.io/416b613-Screenshot_2022-11-11_165143.png)

* Once you continue, you cannot go back and change the JSON file.
* After continuing, you get to select the “Programs and Destinations”, where you want to upload the configuration file. You can select multiple programs at the same time.

**NOTE** - There are certain attributes of a loyalty program and in order to satisfy those, you need to select only those programs which have the same number of tiers as the source program. If this is not taken care of, the system can mess thighs up.

* After selecting the programs, you need to select the destination i.e. the Set where you want to upload the bulk configuration.

**NOTE** - It is compulsory to rename the Sets where you are uploading the bulk configuration, as the system will not accept the default set names( Set1, Tracker\_evaluation\_123 etc.). Only the names that you have defined will be considered as valid destinations.

* Enter the name of the sets in each program where the configuration needs to be uploaded under the option “**Different destination for all programs**”.
* In case there are too many programs where you want to upload the same configuration, you can give a similar name to all the sets where you want to upload the configurations in those programs. Once done, simply select the “**Same destination for all programs**” option and enter the name of the set. **Refer to the video below**. 

![23a673e Bulk config](https://files.readme.io/23a673e-Bulk_config.gif)

* Once done, click on “**Create draft for programs**”.
* It will create a draft of these configurations. You can then preview the draft which is created.
* If you don't want to publish the configurations right away, you can simply leave it as a draft and come back and publish the configuration.
* Or else, finally click on “**Publish Bulk Configuration**”.
* You can go and check the configurations in the respective programs. At these destination sets, you will see that rule set added through a forward set. So, in the destination rule set, it creates a new condition with a **Forward to set action** and all the new configuration that you have uploaded will show inside that set. **Refer to the video below**. 

![e7757dc Bulk config 2](https://files.readme.io/e7757dc-Bulk_config_2.gif)

## Current Limitations

* Bulk configuration works at an entire set level. So when a set is downloaded, all the conditions available in the set will be downloaded and get uploaded together. Incase you want to exclude a condition, try to remove it in the downloaded JSON file and then upload it. If you are not able to edit the JSON, reach out to the Loyalty+ product team. 
* Bulk configuration can give certain bugs if used for trackers. It will not work for Invalid Trackers. Invalid trackers are the ones in which there is no Forward set action.
