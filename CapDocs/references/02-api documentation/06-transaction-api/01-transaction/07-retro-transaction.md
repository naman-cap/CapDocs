---
title: Retro Transaction
excerpt: ''
api:
  file: transaction-v1.json
  operationId: retro-transaction
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
Retro transaction means you can convert a not-interested transaction to a loyalty transaction (by tagging a not-interested transaction to the respective customer once registered).

To avail Retro Transaction, you need to enable **CONF\_RETRO\_TRANSACTION\_ENABLE** on InTouch > **Settings** > **Systems & Deployment** > **InTouch PoS Configuration** > **Billing page.**

On the Billing page, you will also see a configuration to set the maximum duration allowed convert a not-interested transaction regular.

* CONF\_CLIENT\_RETRO\_DELAY\_SINCE\_REGISTRATION\_HOURS
* CONF\_CLIENT\_RETRO\_MAX\_ALLOWED\_AGE\_DAYS

Additional Header Required for Retro Transaction

‘X-CAP-CLIENT-SIGNATURE’

To recognize which source has made the retro call, you need to pass the name of the source. It is recommended to use a single name for a source so that it would be easy to track retro transactions of each source.

Example ’“X-CAP-CLIENT-SIGNATURE”:“INTOUCH\_BLR”’

# Request URL

`https://{host}/v1.1/transaction/update?format={xml/json}`

# Request Body Parameters

| Parameter                      | Datatype | Description                                                            |
| ------------------------------ | -------- | ---------------------------------------------------------------------- |
| mobile/external\_id/email/id\* | string   | Pass any one of the customer identifiers.                              |
| new\_type\*                    | enum     | Specify "REGULAR" to convert to a regular transaction.                 |
| notes                          | string   | Provide any additional information about the conversion for reference. |
| id\*                           | int      | Unique ID of the transaction that you want to convert.                 |
| old\_type\*                    | enum     | Earlier type of transaction. Usually, it will be "NOT\_INTERESTED".    |

Note that parameters marked with an asterisk (\*) are mandatory.

```Text sample curl
curl --location 'https://eu.api.capillarytech.com/v1.1/transaction/update' \
--header 'Accept: application/json' \
--header 'Content-Type: application/json' \
--header 'accept: application/json' \
--header 'X-CAP-CLIENT-SIGNATURE: INTOUCH_BLR' \
--header 'Authorization: Basic bmVlcmFqLmRvYzpiDA5Y2IwMzZhNGNjZGMzMzQzMWVmOWFjOQ==' \
--header 'Cookie: _cfuvid=sDY0XTxoNWKvGGj2I7gSCFlk1ElG0Gs6vvl9YVoiAfY-1736158614229-0.0.1.1-604800000' \
--data-raw '{
  "root": {
    "transaction": [{
      "customer": {
        "mobile": "9944667722",
        
        "email": "johnhill@gmail.com"
      },
      "new_type": "REGULAR",
      "notes": "Retro Transaction",
      "id": "322926035",
      "old_type": "NOT_INTERESTED"
    }]
  }
}'
```