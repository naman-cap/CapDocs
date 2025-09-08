---
title: Event Notification Block
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
The Event Notification Block (ENB) is a block that helps to retrieve events from Kafka from specific topics, even before it hits the webhook of consumers. This helps to process the events within Connect+ before it reaches Capillary’s event notification.

# About Kafka

Kafka is a software framework where data is published and stored. In Kafka, event data are grouped into specified topics called Kafka topics. A Kafka topic is a channel where specific event data is stored and streamed. Each Kafka topic has a unique name.

| Fields                       | Description                                                                                                                                                                                                                                                                                       |
| :--------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Kafka Topics comma separated | A dropdown field where you can select one or more Kafka topics. Each topic has a checkbox—by checking the ones you need, the event will be added. This field specifies the event names (which correspond to Kafka topics in the event notification system) that you want to retrieve events from. |

<br />

![685e9f574f4a390c801ca0d5b94a450efd8b503df61dd8a7d98efee2c19bc5c3 Screenshot 2025 03 20 160516](https://files.readme.io/685e9f574f4a390c801ca0d5b94a450efd8b503df61dd8a7d98efee2c19bc5c3-Screenshot_2025-03-20_160516.png)

![1d327c17cef79f7fd0b4214230fee77d7f2048e78b9a67e47cba9050971b6818 Screenshot 2025 03 20 160551](https://files.readme.io/1d327c17cef79f7fd0b4214230fee77d7f2048e78b9a67e47cba9050971b6818-Screenshot_2025-03-20_160551.png)
