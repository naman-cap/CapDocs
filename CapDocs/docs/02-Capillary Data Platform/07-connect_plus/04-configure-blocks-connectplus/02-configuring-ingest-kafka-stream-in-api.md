---
title: Connect to Source - Kafka
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
        Specify the authentication method used to connect to Kafka. The supported mechanisms are `GSSAPI`, `PLAIN`, `SCRAM-SHA-256`
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
        Choose the headers to be used as attributes.\
        Kafka message headers can contain metadata such as `user ID`, `priority`, and `source system`. Connect+ extracts these headers as data attributes and makes them available to all steps in the flow. You can use these attributes for:  

        * **Routing**: Direct messages based on header values
        * **Filtering**: Process only relevant messages
        * **Tracking**: Enable observability and trace message flow
        * **Simplified Logic**: Apply business rules without parsing the main message.
      </td>
    </tr>
  </tbody>
</Table>
