---
title: Provider Services
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
Provider services in our application manage connections and interactions with external systems like databases, caching layers, and APIs. These services are designed for reusability, maintainability, and efficiency. They establish connections once and share them across the application to reduce overhead and boost performance.

## Key features of provider services

* **Connection Management**: Provider services establish, maintain, and terminate connections with external systems.
* **Singleton Pattern**: Services typically follow a singleton pattern, using a single instance throughout the application.
* **Error Handling**: Services include robust error-handling mechanisms to manage connection failures, retries, and fallbacks.
* **Scalability**: Provider services scale with the application, handling increasing loads and resources as needed.

# Mongo Provider

The Mongo provider manages connections to MongoDB databases. It establishes and maintains the database connection, ensuring it is accessible throughout the application.

## Key responsibilities

* **Connection Establishment**: The Mongo provider connects to MongoDB using predefined connection strings and configuration settings.
* **Multiple Database Handling**: For each organization, two databases are managed:
  * **Live Database**: Used for production data.
  * **Test Database**: Used for testing and draft data.
* **Database Routing**: The provider directs API calls to the appropriate database:\
  For the `indigo_uat` organization:
  * NeoDb\_2248 - Live
  * NeoDb\_2248\_uat - Test\
    For the production organization `(indigo_prod)`:
  * `NeoDb_${indigo_prod_org_id}` - Live
  * `NeoDb_${indigo_prod_org_id}_uat` - Test

The provider routes the API call to the correct database based on whether it’s for live or draft data.

* **Connection Pooling**: To improve performance, the Mongo provider uses connection pooling, allowing multiple operations to share the same pool and reducing the overhead of creating new connections.
* **Service Lifecycle Management**: The Mongo provider integrates with the application's lifecycle, ensuring proper closure of connections when the application shuts down.
