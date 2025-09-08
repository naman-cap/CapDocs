---
title: Kafka Block
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
The Kafka block in the Neo application sends events to Kafka topics dynamically based on user input.

Kafka topics are categories used to organise messages. Each topic has a unique name within the Kafka cluster and messages are sent to and read from these topics.

You can specify each event's topic name, message key, message value, and headers. This allows for detailed control over how data is sent and organised in Kafka.

## Key fields and usage

* **Topic Name**\
  The topic name specifies the Kafka destination where Neo sends the event. Following are the details:
  * The Kafka topic must be a `string `.
  * Neo updates the topic name in the specified format.\
    For flow in Draft or Approved version: Draft or approved version - `neo_${orgId}_${topic}_uat`\
    For Live version - `neo_${orgId}_${topic}`
  * Kafka automatically creates the topic if it does not exist.
* **Message Key**\
  The message key is a unique identifier of an event within a Kafka topic and supports event partitioning. The message key ensures that all events related to a particular key are sent to the same partition. A partition is a storage unit that divides a topic into multiple segments. Following are the details:
  * It is a mandatory field.
  * It must be a `string`.
* **Message Value**\
  The message value is the event’s payload sent to Kafka.  Following are the details:
  * It is a mandatory field.
  * It must be a `string`. 
* **Headers**\
  Headers are optional; you can add custom headers to the event. If you don’t provide headers, Neo adds default headers to help track the event's source and origin details.\
  The default headers include:\
  `const headerList = [ 'x-cap-neo-test-variant-id', 
  'x-cap-request-id', 'x-cap-api-attribution-entity-type', 
  'x-cap-api-attribution-entity-code', 'x-cap-api-auth-org-id'];`\
  Neo automatically includes these headers if available and skips any that are missing.

After you execute the block, the event is sent to the specified Kafka topic using the producer instance. Ensure that the Kafka instance is properly configured in the provider.

## Example scenario

Consider a scenario where post-flight bookings are processed every hour, with up to 1,000 booking requests per minute. The processing involves calling the Add Transaction API and performing pre-validation to verify the first and last names. Given the high volume of requests, the processing must be managed asynchronously. 

An asynchronous (async) process is a method where tasks don’t block or stop other operations while waiting for a result. Instead, it allows multiple tasks to run in parallel or queues them to be processed as they arrive.

**Solution**

Use the Neo framework to create a data flow that pushes data to Kafka. Then, read the data from Kafka and process it.

This example illustrates configuring the Kafka producer block to send data to a Kafka topic, allowing detailed specifications for each event.

* **Block name**: `PostflownSourceQueue`
* **Topic Name**: `PostflownBookings`
* **Message Key**:`${getBody("PostFlownMessageForward")?.body?.key}`
* **Message Value**: `${getBody("PostFlownMessageForward")?.body?.value}`

The Kafka producer sends the event to the `PostflownBookings` topic, with the key and value obtained from the body as defined in the script block of `PostflownBookings`.

Below is a screenshot of the Kafka block.

![93d020a06554f34e9a976fe0ea389b58745253e238b0814a4e914c349ec2441b image](https://files.readme.io/93d020a06554f34e9a976fe0ea389b58745253e238b0814a4e914c349ec2441b-image.png)

For detailed information on creating a dataflow with a Kafka block, refer to [Kafka Implementation in Neo](https://docs.capillarytech.com/reference/kafka-implementation-in-neo).

# Error Handling

The block logs an error with relevant details if any input, such as the topic, key, or value, is invalid or if Kafka is unreachable.
