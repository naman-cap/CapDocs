---
title: Creating a Dataflow Using Aira Coder
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
With Neo Extensions, you can now generate dataflows using **natural language prompts** through the built-in AI assistant—**AIRA**. This simplifies the workflow creation process, reducing manual effort and speeding up development.

<br />

1. **Log in** to the [Neo Extensions UI](https://docs.capillarytech.com/docs/composing-a-neo_dataflow) and **create a new dataflow**.

2. Click on the default version (e.g., **v1**) in the top-left panel.

3. Launch the **AIRA Coder** by clicking the chat icon in the **bottom-right corner**.

   ![39b7156ef9d57bac7727d7a8a111934e818a3e76fdb8955ddba93ebd924d4e97 AI Create Dataflow](https://files.readme.io/39b7156ef9d57bac7727d7a8a111934e818a3e76fdb8955ddba93ebd924d4e97-AI_Create_Dataflow.gif)

4. **Enter your prompt** describing what you want to build.
   * Neo uses **Retrieval-Augmented Generation (RAG)** to enrich your prompt with context.
   * The LLM identifies required building blocks such as Schema, Script, or API blocks.

5. Click the **Send** icon to submit the prompt.

6. AIRA returns a **proposed dataflow** with a step-by-step explanation.

7. Review the result and click:

   * **Accept** – to render it on the canvas  
   * **Reject** – to discard and revise

   ![7094150d0a51ffb92dc5198fb30f212797b5fe3a799101403c1a4d3819ce808e image](https://files.readme.io/7094150d0a51ffb92dc5198fb30f212797b5fe3a799101403c1a4d3819ce808e-image.png)

# Testing and Executing the Dataflow

Before execution:

* Update the **API URL** in the **Trigger block**
* Save the dataflow

To test and monitor execution, refer to the [Execution & Monitoring guide](https://docs.capillarytech.com/docs/execution-monitoring).

# Prompting Best Practices

To get the best results from AIRA, follow these tips:

* Use **clear and specific** language
* Write in **full sentences** or **step-by-step instructions**
* Avoid vague prompts like `Hi` or `Help`

### **Example Prompt**

```plaintext
Create a dataflow to perform the following:
1. Take input: FFN, Fname, Lname
2. Validate the parameters
3. Fetch customer details
4. Extract names for alias check
5. Perform alias validation

 
```
