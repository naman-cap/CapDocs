---
title: Terminologies used in Behavioural Events
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
## Webhook

Enables syncing and relaying data between third party applications and the Capillary Server facilitating automated calls and real-time updates.

## WebEngage

Multi-channel user engagement platform that lets you automate communications.

## Transformer

Used to convert the payload sent by the third-party app to a payload understood by Capillary. In simple terms, it is a field mapping.

## Webhook Adapter

Used to track real-time events data that consists of payload understandable by the Capillary system.

## Integration

Automates pushing an event data from a third party app or website to the Capillary system. There are two types of integrations - 1. WebEngage to integrate Capillary Behavioural Events platform with WebEngage. 2. Custom integration to integrate Capillary Behavioural Events platform to any other third party apps.

## Source Account

Source in which a customer is registered. Example: Facebook, WebEngage, WeChat, InStore, Martjack, TMall, Taobao, JD, Ecommerce, Website, and Line.

## Event and Attribute

Event is customer activity such as log out, add items to cart and so on. Where as, attributes are entries of an event that needs to be captured by our system. For example, for the event product review, you could have attributes as title and review message body.

## Standard Event

A predefined event with defined set of attributes, usually standard attributes.

## Custom Event

A  user defined event that lets you define your own attributes that you want to capture. You can have both standard and custom attributes in custom event.

## Standard Attributes

Predefined attributes with defied data types and values such as customer id, Till code, coupon code, product SKU, product brand, and product category.

## Custom Attributes

User defined attributes for each event that can be defined using standard data types such as enum, date, string, and double.

## Mapping

Also called attribute mapping that lets you map attributes of a behavioural event with the attributes of a third party application.

## Publish Event

By default, an event that is created will be in draft mode. Once the event is tested successfully to see if the data is flowing as desired, you need to manually publish the event to make it live.
