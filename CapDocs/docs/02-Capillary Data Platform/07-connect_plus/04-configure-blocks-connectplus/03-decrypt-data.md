---
title: Decrypt Data
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
This block enables the descryption of an encrypted source file. It is an optional feature that can be enabled if the source file is encrypted. All the fields within this block become mandatory once you enable the Decrypt data action block. You can use the **Is Enabled** drop-down to control the activation of this block.

| Field name           | Description                                                                                                                                                                       |
| :------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Encryption Algorithm | The algorithm that was used to encrypt the file. At present, only files encrypted using the PGP algorithm can be decrypted. Hence, by default, PGP encryption is always selected. |
| Private Key File     | Private Key in the base64 encoded format.                                                                                                                                         |
| Private Passphrase   | The password that is required to unlock the private key.                                                                                                                          |
| Is Enabled           | Enable or disable the decrypt function.                                                                                                                                           |

![bfd7775 decrypt](https://files.readme.io/bfd7775-decrypt.jpg)

#
