---
title: Modifying a Dataflow Using Aira Coder
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
You can use Neo’s AI assistant (AIRA) not only to create new dataflows but also to **modify existing ones**. This includes:

* Adding or removing blocks
* Updating logic in script blocks
* Changing validation conditions
* Reconfiguring block properties

![475f099e7a93e161d36d148ce0f21e0f74e8c0786aff9d2337e8b03d478a33ea Modify](https://files.readme.io/475f099e7a93e161d36d148ce0f21e0f74e8c0786aff9d2337e8b03d478a33ea-Modify.gif)

## Example Use Case: Modify the `ValidateParameters` Block

**Prompt:**

```plaintext
Modify the ValidateParameters block of the dataflow to:
1. Add queryParams as an object
2. Include FFN, Fname, and lname inside the queryParams object

 
```

<br />

**Example Prompt:**

```
Modify the ValidateParameters block of the dataflow 
1. To add queryParams  an object
2. Add FFN, Fname, lname inside the queryParams object.
```

### Before the Update

```json ValidateParameters before the update query
import dao from "neo/dao";
import logger from "neo/logger";

const {
    getApiRequest
} = dao;

const script = {
    execute: () => {
        const queryParams = getApiRequest().queryParams;
        const ffn = queryParams.ffn;
        const fname = queryParams.fname;
        const lname = queryParams.lname;
        
        logger.info("Validating input parameters", { ffn, fname, lname });
        
        if (!ffn) {
            logger.error("Missing required parameter: ffn");
            return {
                isError: true,
                code: 400,
                message: "Missing required parameter: ffn",
                data: { error: "FFN is required" }
            };
        }
        
        if (!fname) {
            logger.error("Missing required parameter: fname");
            return {
                isError: true,
                code: 400,
                message: "Missing required parameter: fname",
                data: { error: "First name is required" }
            };
        }
        
        if (!lname) {
            logger.error("Missing required parameter: lname");
            return {
                isError: true,
                code: 400,
                message: "Missing required parameter: lname",
                data: { error: "Last name is required" }
            };
        }
        
        return {
            ffn: ffn,
            fname: fname,
            lname: lname,
            isValid: true
        };
    }
};

export {
    script as default
}


```

### After the Update

```json ValidateParameters after the update query
import dao from "neo/dao";
import logger from "neo/logger";

const {
    getApiRequest
} = dao;

const script = {
    execute: () => {
        const apiRequest = getApiRequest();
        
        // First check if queryParams exists and is an object
        if (!apiRequest || !apiRequest.queryParams || typeof apiRequest.queryParams !== 'object') {
            logger.error("Invalid query parameters: queryParams missing or not an object");
            return {
                isError: true,
                code: 400,
                message: "Invalid query parameters",
                data: { error: "Query parameters are missing or invalid" }
            };
        }
        
        const queryParams = apiRequest.queryParams;
        const ffn = queryParams.ffn;
        const fname = queryParams.fname;
        const lname = queryParams.lname;
        
        logger.info("Validating input parameters", { ffn, fname, lname });
        
        if (!ffn) {
            logger.error("Missing required parameter: ffn");
            return {
                isError: true,
                code: 400,
                message: "Missing required parameter: ffn",
                data: { error: "FFN is required" }
            };
        }
        
        if (!fname) {
            logger.error("Missing required parameter: fname");
            return {
                isError: true,
                code: 400,
                message: "Missing required parameter: fname",
                data: { error: "First name is required" }
            };
        }
        
        if (!lname) {
            logger.error("Missing required parameter: lname");
            return {
                isError: true,
                code: 400,
                message: "Missing required parameter: lname",
                data: { error: "Last name is required" }
            };
        }
        
        return {
            ffn: ffn,
            fname: fname,
            lname: lname,
            isValid: true
        };
    }
};

export {
    script as default
}
```
