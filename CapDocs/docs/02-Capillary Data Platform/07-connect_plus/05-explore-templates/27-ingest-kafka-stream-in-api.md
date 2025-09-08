---
title: Ingest Kafka Stream in API
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
This template imports data from the Kafka queue into the Capillary system and then transforms it for further processing.

# Use case

## Scenario

An airline brand uses a Passenger Service System (PSS) to send post-flight passenger data to the Capillary platform. The data includes details like passenger information, flight completion status, and other relevant metadata. This data is sent in bulk every hour, reaching up to 1,000 requests per minute. Due to the high volume and frequency, the PSS streams this data into a Kafka queue.

The system needs a reliable and scalable way to:

Continuously consume data from the Kafka queue

Transform it into a format that Capillary’s platform can process

Forward the processed data for downstream use, such as awarding loyalty points or updating customer profiles

## Solution

Use the "Ingest from Kafka Stream" template in Connect+ to build a Kafka consumer that retrieves and processes data efficiently.

This setup will:

Connect to the specified Kafka topic using OAuth-based credentials

Consume messages in real time as they arrive in the Kafka queue

Transform the incoming payloads using a JavaScript-based transformer to match Capillary's expected schema

Forward the transformed data to the appropriate platform APIs for processing (e.g., behavioral event ingestion, customer updates)

# Prerequisites

The following are the prerequisites for using the Ingest Kafka Stream in API:

* Name of the Kafka server
* Kafka topic
* Consumer group ID
* Username and password to access the Kafka server.

# Configuring Ingest Kafka stream in API

Below is a screenshot of the template, showing the various blocks.

![b65df94e8ab74b962237e1989c2a98564ea914a414e60fae0dab4cbbb4f922a2 image](https://files.readme.io/b65df94e8ab74b962237e1989c2a98564ea914a414e60fae0dab4cbbb4f922a2-image.png)

To configure **Ingest Kafka stream in API** template, the following are the steps:

1. In the **Connect-to-source-kafka** block, enter the Kafka details including the server address, kafka topic, username and password from where the events are imported. For the information on configuring this block, refer to [Connect-to-source-kafka](https://docs.capillarytech.com/docs/ingest-kafka-stream-in-api#connect-to-source-kafka).
2. In the **neo-Transformer** block, enter the URL of the Neo dataflow created to transform the data required as per your requirement. For the information on configuring this block, refer to [neo-Transformer](https://docs.capillarytech.com/docs/ingest-kafka-stream-in-api#neo-transformer).
3. In the **Connect-to-destination** enter the details of the API endpoint. For the information on configuring this block, refer to **[Connect to destination](https://docs.capillarytech.com/docs/configure-actions#connect-to-destination)**.

# Connect-to-source-kafka

This block enables you to define the Kafka server details. Below is the screenshot showing the fields in the block.

![b478905a418889e9d3e265c5c1c599512c0d551e68bf8311e8f8a8c8d8e59aef image](https://files.readme.io/b478905a418889e9d3e265c5c1c599512c0d551e68bf8311e8f8a8c8d8e59aef-image.png)

The table below describes the fields in the block:

<Table align={["left","left"]}>
  <thead>
    <tr>
      <th>
        Field Name
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        kafka brokers
      </td>

      <td>
        Kafka server URL. The URL is a combination of the server address and the port number.  

        * \*Example\*\*: `kafka-connectplus:9092`
      </td>
    </tr>

    <tr>
      <td>
        kafka topics
      </td>

      <td>
        Predefined topic name from which you consume messages. These topics must already exist in your Kafka system. You can list multiple topics separated by commas.
      </td>
    </tr>

    <tr>
      <td>
        Consumer Group Id
      </td>

      <td>
        Specifies the predefined consumer group ID used for access control.
      </td>
    </tr>

    <tr>
      <td>
        Security Protocol
      </td>

      <td>
        Specify the security protocol you want to use to exchange data between the Kafka client and server. The supported protocols are:  

        * **PLAINTEXT**:  No data encryption or authentication.
        * **SSL**: Uses the SSL protocol for data encryption but no SASL authentication.
        * **SASL\_PLAINTEXT**: Uses SASL protocol for authentication but does not encrypt data.
        * **SASL\_SSL**: Uses the SASL protocol for authentication and SSL for encryption.
      </td>
    </tr>

    <tr>
      <td>
        SASL Mechanism
      </td>

      <td>
        Specify the authentication method used to connect to Kafka. The supported mechanisms are:  

        * GSSAPI
        * PLAIN
        * SCRAM-SHA-256
      </td>
    </tr>

    <tr>
      <td>
        Username and Password
      </td>

      <td>
        Username and password to access the Kafka server.
      </td>
    </tr>

    <tr>
      <td>
        Headers as Attribute
      </td>

      <td>
        Headers from the Kafka message contain metadata like user-id, priority, and source-system. These headers are extracted as data attributes and are available for all the steps in Connect+. The headers are required for the following:  

        * Routing:  Direct the messages based on headers
        * Filtering: Process only the relevant messages
        * Tracking: Use for obervability and tracking
        * Simplified Logic: Apply  business logic without needing to parse the main message.
      </td>
    </tr>
  </tbody>
</Table>

# neo-Transformer

The Neo Transformer block allows you to call a NEO dataflow for data transformation. Below is the screenshot showing the fields in the block.

![0926a1877c79431fb1281b644712c50ac3291886d2d628cdc62dd96e98301887 image](https://files.readme.io/0926a1877c79431fb1281b644712c50ac3291886d2d628cdc62dd96e98301887-image.png)

The table below describes the fields in the block.

<Table align={["left","left"]}>
  <thead>
    <tr>
      <th>
        Field Name
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Enter url
      </td>

      <td>
        Select the [Neo Dataflow](https://docs.capillarytech.com/docs/dataflows) from the drop-down menu. The drop-down lists Dataflows with the `Connectplus` tag.
      </td>
    </tr>

    <tr>
      <td>
        Authorization
      </td>

      <td>
        Authorisation key for the API (if required).
      </td>
    </tr>

    <tr>
      <td>
        Split Response
      </td>

      <td>
        Splits the response when the API returns an array of objects.  

        * \*True \*\*- Separates each array element in the API response into individual responses  
        * \*False \*\*- Keeps the response as a single array without separation
      </td>
    </tr>
  </tbody>
</Table>