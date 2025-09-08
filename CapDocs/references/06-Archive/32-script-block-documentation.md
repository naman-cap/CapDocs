---
title: Script Block
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

The Script Block in the Neo application enables you to execute JavaScript code within the workflows. It runs custom scripts to interact with data sources, perform calculations, or manipulate data as required. This block offers a flexible solution for integrating custom logic into workflows.

# Usage

Here is a list of how the Script Block is used.

* **Execution Context**: The Script Block runs JavaScript code within a secure, controlled environment. You can access various data sources, including DAOs (Data Access Objects), to perform complex operations.
* **Code Structure**: You can write JavaScript code, which the Script Block compiles and executes.
* **Integration with DAOs and Services**: The Script Block connects with Neo's DAOs and services, allowing you to use these resources within the scripts to retrieve, update, or store data.
* **Custom Functions**: You can create and run custom functions within the Script Block, enabling personalised processing logic. The block supports executing both simple statements and complex scripts.
* **Caching**: The Script Block features caching mechanisms that enhance performance, especially for scripts that run frequently. This reduces the overhead of repeatedly compiling and executing the same code.
* **Error Handling**: The Script Block offers basic error handling by logging issues encountered during execution, allowing you to effectively troubleshoot and refine the scripts.
* **Logging**: You can import the logger and use its methods to log information at various levels:
  * `logger.info(message, data)`: Logs informational messages
  * `logger.error(message, error)`: Logs errors
  * `logger.warn(message, data)`: Logs warnings
  * `logger.debug(message, data)`: Logs debug information
* **Log Structure**: Each log entry includes,
  * **Timestamp**: Automatically added to show when the log was recorded.
  * **Log Level**: Indicates the severity or type of the log (INFO, ERROR, WARN, DEBUG).
  * **Message**: Contains the details provided to the logger methods.
  * **Context** (optional): Provides additional metadata or contextual information for deeper insight into the log entry.\
    Here is an example of how log entries look:\
    `Wed Aug 14 2024 14:51:35 GMT+0530 (India Standard Time)[ms:787] neo-extensions info: pId:30 84260275bc413347f89ed438395688dd 49.43.161.56 api - Message: Dummy log for NEO`

Below is an example code for the Script block

```json
import dao from "neo/dao";
import logger from "neo/logger";

const {
  getIn,
  getBody
} = dao;

const script = {

  execute: () => {
    logger.info('Starting script execution');

    return {
      "isError": true,
      "data": getBody().data,
      "developerMessage": "No search values provided.",
      "userMessage": "Invalid member or card search criteria provided.",
      "moreInfo": null,
      "responseCode": 400,
      "httpStatusCode": 400,
      "errors": null,
      "requestId": "e500c342-7032-4f48-adf9-d3a01bb6b5eb"
    };

  }
}

export {
  script as default
  }
```
