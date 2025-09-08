---
title: Release notes | JFM'24
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
# Enabling encryption capabilities in Exports

In recent quarters, we've focused on enhancing Customer Data Security by identifying vulnerabilities and implementing crucial security measures. Some of those enhancements being, placing limitations on downloads from Databricks & enabling masking of PII information in Analytics tables.

During our evaluation of data exports, we recognized a potential security risk with SFTP-based transfers if data were compromised. To address this, we've introduced an update enabling users to export encrypted files to their SFTP locations. Users can now set up PGP keys within the Insights Settings screen to configure exports securely. Currently, our Insights Export feature supports PGP algorithm-based encryptions.

Please note that this feature won’t affect the already scheduled exports but encryption can be enabled as per the brand’s requirement by editing the schedule.

Currently, we have released this feature for around 70% of the brands and we will be releasing it for the rest of them in a phased manner by the end of this quarter.

For more information, please refer to the documentation here:

[https://docs.capillarytech.com/docs/settings#data-encryption-settings-for-export](https://docs.capillarytech.com/docs/settings#data-encryption-settings-for-export)

# Audience Filter based reporting - Enhancement

Until recently, brands faced a challenge when attempting to compare audience behavior before and after campaigns. This was because Insights restricted access to audience data, providing only the audience list version at the report end date. Consequently, for pre-campaign analysis, when the audience didn't yet exist, brands were unable to conduct thorough assessments.

In this release, we've addressed this issue with a minor enhancement to the report generation logic. Now, if no audience existed at the report end date, we utilize the first version of the Audience, enabling brands to conduct comprehensive analyses across campaign timelines.

For more information, please refer to the documentation here: [https://docs.capillarytech.com/docs/add-audience-group](https://docs.capillarytech.com/docs/add-audience-group)
