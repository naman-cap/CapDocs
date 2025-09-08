---
title: Redis Block
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
# Introduction

Redis blocks enable key Redis functionalities within the Neo UI during dataflow creation. The functionalities include caching and eviction. These blocks allow the system to directly `get` or `put` data from the UI and perform eviction tasks, making the process more efficient. It currently supports two main functionalities:

- **Caching** - This involves adding specific options within the **Script** or **ApiRequest** block. The options are:
  - `cachable` - A boolean option to determine whether the key is cacheable.
  - `key` - The key is derived from the block input or a parent block's input. You define the key in the parent block and use it to cache or fetch data from Redis.
- **Eviction** - This functionality is handled through a separate block designed to perform Redis key eviction. It allows you to evict or delete specific keys from Redis.

## Caching

Caching involves two Redis operations: `get` and `put`. The **Script** or **ApiRequest** block first checks whether the key is cacheable. For cacheable keys, the block attempts to retrieve the value from Redis using the `get` operation. When Redis finds the key, it returns the cached value. If the key is not present, the block executes its function and subsequently uses the `put` operation to store the key and its value in Redis.

Below are the details for Redis caching:

- Connection pool - The connection pool is a background feature that manages database connections. Unlike user-selectable features, where you choose and manage specific options, the connection pool functions as a shared resource. You don't need to select or manage individual pools for tasks like caching and data eviction. The connection pool handles these operations.
- Cachable - The cachable feature allows you to determine if a key is eligible for caching. You can access this option within the **Script** or **ApiRequest** block.
- Key - The key is a unique identifier stored in the format `${org_id}_${state}_key`, where `org_id` is the organization ID, `state` is either `live` or `notLive`, and `key` refers to the specific action or data. This format ensures consistency and easy access to keys across various workflows within the organisation.

  Consider the following

  |                 |                             |
  | :-------------- | :-------------------------- |
  | organisation ID | 123                         |
  | state           | live                        |
  | key             | getCustomerDetails          |
  | Resulting key   | 123_live_getCustomerDetails |

  You can use this key pattern in the **Script** or **ApiRequest** block or pass it from previous script blocks in the body, like the headers or query parameters.
- TTL - You can set a Time-To-Live (TTL) value for keys, determining how long a key will be stored in the cache before it expires and is automatically removed. TTL is measured in seconds and is available within the **Script** or **ApiRequest** block.

## Eviction

The eviction block operates independently and is created to delete keys from the Redis database. It takes input from the eviction block or the parent block and delivers the result to the subsequent block after executing the operation.

Below are the fields for the Redis Evict block.

- Connection pool - The connection pool is a background feature that manages database connections. Unlike user-selectable features, where you choose and manage specific options, the connection pool functions as a shared resource. You don't need to select or manage individual pools for tasks like caching and data eviction. The connection pool handles these operations.
- Key (mandatory field) - The 'Key' field lets you input a specific key or a pattern. This allows the eviction block to target and remove the exact key provided or any keys that match the specified pattern.