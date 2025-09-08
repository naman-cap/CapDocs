---
title: Overview
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
Neo supports AI-powered dataflow generation and editing using Aira Coder. This allows you to build workflows simply by describing your use case in natural language. Whether you're creating a new dataflow or updating an existing one, the AI interprets your intent and generates the necessary dataflow automatically. You can perform the following using Aira Coder:

* Create and modify dataflow (Draft dataflow)
* Describe dataflow - Applicable for both draft and approved dataflows
* Ask documentation-related queries/help on Neo

The feature is available by default along with Neo. 

# How It Works: AI Processing Flow

1. **Prompt Enrichment (RAG):**\
   The system enhances your natural language prompt with additional context and examples using Retrieval-Augmented Generation (RAG).

2. **AI-Generated Draft:**\
   The LLM (Large Language Model) translates your prompt into a draft dataflow with all necessary blocks.

3. **Validation Layer:**\
   A system-level validator checks for:
   * Missing or misconfigured blocks  
   * Empty or incomplete nodes  
   * Syntax issues in script blocks  

4. **Auto-Explanation + Preview:**\
   Once validated, the draft dataflow appears in the UI along with a clear, step-by-step explanation of what each block does.

5. **Interactive Refinement:**\
   You can:
   * Accept and render the dataflow  
   * Request changes via a new prompt  
   * Discard and regenerate  

# What You’ll See on the UI

* **Block-by-block Explanation:**\
  Each block includes a short summary of its role in the dataflow.

* **Preview of Generated Dataflow:**\
  Instantly view the structure of the proposed dataflow before deploying.

* **Default Error Handling:**\
  AI automatically includes a fallback error-handling block to ensure graceful execution.

* **Prompt Revisions:**\
  Easily update or refine your prompt to adjust the logic.
