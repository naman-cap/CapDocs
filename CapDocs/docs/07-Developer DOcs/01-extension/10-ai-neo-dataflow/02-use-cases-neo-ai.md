---
title: Use Cases
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
# Use Case 1: Creating a Dataflow for Alias Validation Using FFN, First Name, and Last Name

**Requirement**:  Create a Dataflow for customer name Validation Using customer's Frequent Flying Nmber (FFN), First Name, and Last Name.\
**Solution**: To [create this dataflow using AI](https://docs.capillarytech.com/docs/create-a-dataflow-using-ai#/), navigate to the Neo Dataflow canvas and enter your prompt to begin building the flow.
**Prompt**:

```
Create a DAG with these steps:
1. Accept a mobile number as a query parameter
2. Validate the query parameters
3. Fetch customer details using the mobile number
4. Create a full name by combining first name and last name from the response
5. Return the full name in the response
```

![1dfb0024d20beaf8e7fa5de86802801cf6b5c4d9bd5b0edbb4523b301ef1fda1 Create AI](https://files.readme.io/1dfb0024d20beaf8e7fa5de86802801cf6b5c4d9bd5b0edbb4523b301ef1fda1-Create_AI.gif)

# Use Case 2: Updating a Dataflow

**Requirement**: Update the dataflow created under Use Case 1 to

1. Accept the mobile number from the body
2. Validate the body

**Solution**: Use the below prompt:

```
Modify the DAG with these steps:
1. Accept the mobile number from the body
2. Validate the body
```

# Use Case 3: Explain a Dataflow

**Requirement:** You want to understand about a Dataflow.\
**Solution:** Open the Dataflow and use the prompt `Explain this dataflow for me`.

![c77388d3b5f6f51a8fb4cb201e7330404b870d72abf5085c6de1bab8c3245921 Neo Ai dataflow explain](https://files.readme.io/c77388d3b5f6f51a8fb4cb201e7330404b870d72abf5085c6de1bab8c3245921-Neo_Ai_dataflow_explain.gif)

# Use Case 4: Understand Neo-Specific Features

You can open the dataflow and prompt your query about any Neo-specific features. The bot analyzes the Neo documentation and the codebase and provides you a detailed response.