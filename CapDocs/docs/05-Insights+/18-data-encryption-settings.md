---
title: Data Encryption Settings
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
# Data encryption settings for export

<Note title="Note">
By default, this feature is not enabled for all the orgs. To enable, contact your CSM.
</Note>

If necessary, you can encrypt your export data to safeguard sensitive information. The export data is encrypted using a process that involves public-private key encryption. Users configure public keys for encryption within the Insights platform. These public keys are then used to encrypt the export data. When setting up an export, users have the option to choose the security type for encryption. They can select encryption and specify the public key to be used for encrypting the data. Once the export configuration is finalized and initiated, the export framework extracts the data and encrypts it using the selected public key. Only authorized parties with access to the corresponding private key can decrypt and access the original data.

To set the public keys, perform the following:

1. Navigate to **Settings > Public keys > Add new public key**. 

   ![d7d4c06 Add new public key](https://files.readme.io/d7d4c06-Add_new_public_key.png)
2. Enter the following:
   1. **Key name**: Enter a name for the key. A "key name" is a unique identifier to provide some indication of its purpose or origin. It helps users easily identify and manage different public keys within a system.
   2. **Public username** : Enter a unique username. A "public user name" for a key is a designation associated with the owner or entity to whom the public key belongs. It serves as a reference point for identifying the user or entity associated with the key, helping to organize and manage keys effectively, especially in scenarios where multiple users or entities may have their own keys
   3. **Public key**: The public key can be generated using any PGP key generator.
3. Click **Done**. A maximum of five keys can be added.

   ![9c7ffa4 Add key](https://files.readme.io/9c7ffa4-Add_key.png)

<Note title="Note">
You can only edit a key and cannot delete a key.
</Note>

# Editing a key

You can edit a public key. To edit, navigate to the list of public keys >  select edit option > make the necessary changes and click **Done**.

**Note:** Editing a key will impact all the future exports of files encrypted using this public key.

![56476ad Edit key](https://files.readme.io/56476ad-Edit_key.png)
