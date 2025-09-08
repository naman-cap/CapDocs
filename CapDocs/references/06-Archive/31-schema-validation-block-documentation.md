---
title: Schema Validation Block
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

The Schema Validation Block in the Neo application validates incoming requests to ensure they meet the expected structure, including headers, parameters, and body content. It uses the [Ajv library](https://ajv.js.org/) to perform JSON schema validation, checking if the request contains the required elements as defined by schema rules. If validation fails, the block generates error messages to help diagnose and resolve the issue.

## Key features

The following are the key features of the Schema Validation block:

* **Validation with Ajv**: The Schema Validation Block use the Ajv library to validate schemas, supporting standard JSON schema features as well as custom keywords, formats, and error messages.\
  For more details on Ajv JSON schema validator and its features, see [Ajv JSON schema validator](https://ajv.js.org/)
* **Error Handling**: When schema validation fails, the block generates an error message with detailed information about the issue. This helps you quickly identify and resolve problems with the incoming request data.

# Standard Definitions

The Schema Validation Block offers several predefined standard definitions. These definitions include:

* `isNotEmpty`\
  **Keyword**: `isNotEmpty`\
  **Description**: Validates that a string contains non-whitespace characters, meaning it isn't blank or filled with spaces.\
  **Usage**:  The keyword `isNotEmpty `ensures that a string field contains data and is not left blank or filled with only spaces.
* `dateWithTz`\
  **Keyword**: `dateWithTz`\
  **Description**: Validates that a given date string follows a specific format, such as "YYYY-MM-DD," and ensures it includes time zone information.\
  **Usage**: The `dateWithTz `keyword ensures the date input is formatted in a specified format and includes the relevant time zone, converting it into a time zone-aware string for consistent handling across systems. This avoids discrepancies caused by time zone differences.
* `phoneValidation`\
  **Keyword**: `phoneValidation`\
  **Description**:  Validates and formats a phone number to a standard format.\
  **Usage**: The keyword `phoneValidation` ensures phone numbers are valid and follow a standardised format.
* `removeSpecialChar`\
  **Keyword**: `removeSpecialChar`\
  **Description**: Removes special characters from a string, leaving only alphanumeric characters and spaces.\
  **Usage**: The `removeSpecialChar `keyword ensures a string field includes only alphanumeric characters. It removes special characters from the string.

# Adding Custom Definitions

The Schema Validation Block supports custom definitions. This feature allows you to create specific validation rules beyond those provided by standard JSON schema keywords. You can add the custom definitions to the schema by including them in the `definitions `array within the schema object. These definitions are then integrated into the `Ajv `instance, enabling custom validation logic during request processing.

# Using Custom and Standard Definitions

You can combine custom and standard definitions in your schema to create validation rules suited to your application's needs. Predefined definitions allow you to apply common validation patterns, while custom definitions provide the flexibility to handle specific requirements.

Here’s an example of a schema with custom error messages:

This schema validates several attributes in the body of the incoming request, including type, minimum items, and maximum items. Each attribute is paired with a custom error message. For instance, if the body contains no items, the `"minItems": 1` condition fails, and the block returns an error message`"The payload must contain at least one item."`.

```json
const schema = {
  definitions : [],
  spec:{
    type : "object",
    "properties": {
      "body" :{
        "type": "array", "minItems": 1, "maxItems": 10,
        "errorMessage": {
          type: "The payload must be an array",
          minItems: "The payload must contain atleast one item",
          maxItems: "The payload cannot contain more than 10 items"
        },
        "items": {
          type: 'object',
          properties: {
            identifierType: {
              type: 'string',
              transform: 'toLowerCase',
              enum: 'externalid',
              errorMessage: {
                enum: "The identifierType property must be 'externalId'"
              }
            },
            identifierValue: {
              minLength: 1,
              "errorMessage": {
                minLength: "identifierValue must not be empty"
              }
            },
            source: {
              minLength: 1,
              "errorMessage": {
                minLength: "source must not be empty"
              }
            },
            type: {
              minLength: 1,
              "errorMessage": {
                minLength: "type must not be empty"
              }
            },
            billNumber: {
              minLength: 1,
              "errorMessage": {
                minLength: "billNumber must not be empty"
              }
            },
            billingDate: {
              minLength: 1,
              format: "date-time",
              "errorMessage": {
                minLength: "billingDate must not be empty",
                format: "billingDate must be in ISO 8601 format"
              }
            },
            billAmount: {
              minLength: 1,
              "errorMessage": {
                minLength: "billAmount must not be empty"
              }
            },
            extendedFields: {
              type: 'object',
              properties: {
                  booking_first_name: {
                    type: 'string',
                    minLength: 1,
                    "errorMessage": {
                      minLength: "booking_first_name must not be empty"
                    }
                  },
                  flight_status: {
                    type: 'string',
                    transform: 'trim', 'toLowerCase',
                    enum : 'flown',
                    "errorMessage": {
                      enum: "flight_status must be 'flown'"
                    }
                  },
                  pnr_status: {
                    type: 'string',
                    transform: 'trim', 'toLowerCase',
                    not : {
                      enum: 'utilized',
                    },
                    minLength: 1,
                    "errorMessage": {
                      not: "pnr_status cannot be 'utilized'",
                      minLength: "pnr_status must not be empty"
                    }
                  },
                  booking_last_name: {
                    type: 'string',
                    minLength: 1,
                    "errorMessage": {
                      minLength: "booking_last_name must not be empty"
                    }
                  },
                  boarding_status: {
                    type: 'string',
                    minLength: 1,
                    "errorMessage": {
                      minLength: "boarding_status must not be empty"
                    }
                  },
                  booking_date: {
                    type: 'string',
                    format: "date",
                    minLength: 1,
                    "errorMessage": {
                      minLength: "booking_date must not be empty",
                      format: "booking_date format must be yyyy-mm-dd"
                    }
                  },
                  pnr_number: {
                    type: 'string',
                    minLength: 1,
                    "errorMessage": {
                      minLength: "pnr_number must not be empty"
                    }
                  },
                  flight_number: {
                    type: 'string',
                    minLength: 1,
                    "errorMessage": {
                      minLength: "flight_number must not be empty"
                    }
                  },
                  departure_date: {
                    type: 'string',
                    format: "date",
                    minLength: 1,
                    "errorMessage": {
                      minLength: "departure_date must not be empty",
                      format: "departure_date format must be yyyy-mm-dd"
                    }
                  },
                  airline_code: {
                    type: 'string',
                    minLength: 1,
                    "errorMessage": {
                      minLength: "airline_code must not be empty"
                    }
                  }
              },required: 'booking_first_name', 'booking_last_name', 'flight_status', 'pnr_status', 'booking_date', 'pnr_number', 'boarding_status', 'flight_number', 'departure_date', 'airline_code',
              errorMessage: {
                required: {
                  booking_first_name: "booking_first_name extendedField is missing",
                  booking_last_name: "booking_last_name extendedField is missing",
                  flight_status: "flight_status extendedField is missing",
                  pnr_status: "pnr_status extendedField is missing",
                  booking_date: "booking_date extendedField is missing",
                  boarding_status: "boarding_status extendedField is missing",
                  pnr_number: "pnr_number extendedField is missing",
                  flight_number: "flight_number extendedField is missing",
                  departure_date: "departure_date extendedField is missing",
                  airline_code : "airline_code extendedField is missing"
                }
              }
            },
            customFields: {
              type: 'object',
              properties: {
                  origin: {
                    type: 'string',
                    minLength: 1,
                    "errorMessage": {
                      minLength: "origin must not be empty"
                    }
                  },
                  destination: {
                    type: 'string',
                    minLength: 1,
                    "errorMessage": {
                      minLength: "destination must not be empty"
                    }
                  }
              },required: 'origin', 'destination',
              errorMessage: {
                required: {
                  origin: "origin customField is missing",
                  destination: "destination customField is missing"
                }
              }
            },
            lineItemsV2: {
              type: 'array',
              minItems: 1,
              items: {
                type: 'object',
                properties: {
                  itemCode: {
                    type: 'string',
                    minLength: 1,
                    errorMessage: {
                      minLength: "itemCode must not be empty"
                    }
                  },
                  amount: {
                    type: 'number',
                    minLength: 1,
                    errorMessage: {
                      minLength: "amount must not be empty"
                    }
                  }
                },
                required: 'itemCode', 'amount',
                errorMessage: {
                  required: {
                    itemCode: "itemCode is missing",
                    amount: "amount is missing"
                  }
                }
              }
            }
          },
          required: 'identifierType', 'identifierValue', 'source', 'type', 'billNumber', 'billingDate', 'billAmount', 'extendedFields', 'customFields', 'lineItemsV2',
          errorMessage: {
            required: {
              identifierType: "identifierType is missing",
              identifierValue: "identifierValue is missing",
              source: "source is missing",
              type: "type is missing",
              billNumber: "billNumber is missing",
              billingDate: "billingDate is missing",
              billAmount: "billAmount is missing",
              extendedFields : "extendedFields are missing",
              customFields : "customFields are missing",
              lineItemsV2 : "lineItemsV2 are missing"
            }
          }
        }
      }
    }
  }
};

export {schema as default};
```

Here’s a sample response from the block when the identifier type is missing from the request body, resulting in schema validation failure:

```json
{
    "response": [
        {
            "result": {},
            "errors": [
                {
                    "status": false,
                    "code": 400,
                    "message": "identifierType is missing",
                    "path": "/body"
                }
            ],
            "warnings": []
        }
    ]
} 	
```
