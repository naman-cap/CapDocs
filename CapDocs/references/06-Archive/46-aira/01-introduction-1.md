---
title: Introduction
deprecated: false
hidden: true
metadata:
  robots: index
---
Aira is Capillary's AI-powered conversational assistant designed to accelerate your marketing operations through natural language interactions. It serves as an intelligent platform that combines specialized agents to help with various tasks, transforming complex operations into simple conversations. Whether you're setting up promotions, analyzing customer data, creating campaigns, or testing configurations, Aira streamlines operations, reduces manual effort, and accelerates decision-making.

# Key capabilities and benefits

Aira is designed to assist both technical and non-technical users.

**Key Capabilities:**

* Natural Language Processing: Communicate in plain English without needing technical jargon.
* Context-Aware Responses: Aira understands your intent and provides relevant solutions.
* Code Generation: Automatically creates configuration code for promotions and campaigns.
* Instant Documentation Access: Get 24/7 access to platform knowledge.
* Smart Testing: Generate comprehensive positive and negative test cases for quality assurance.
  Benefits:

**Benefits**

* Speed: Reduce campaign setup time from hours to minutes.
* Accuracy: Minimize configuration errors with AI-validated setups.
* Accessibility: No coding knowledge is required for complex configurations.
* Efficiency: Reduce dependency on engineering and support teams with self-service capabilities.
* Scalability: Handle multiple campaigns and configurations simultaneously.

# Accessing Aira

Aira can be accessed through multiple points within the Capillary platform:

* **Chat Interface:** Look for the Aira chat icon, typically in the bottom-right corner of your Capillary platform.
* **Direct Integration:** Aira is available within specific modules like Neo Extensions, Engage+, and Loyalty+.

# Global configuration: Context and authentication

Before using Aira's advanced features, it's essential to perform a one-time setup. To function correctly and provide accurate, organization-specific responses, Aira's agents rely on a shared configuration for context and authentication. These settings are configured once and used by all relevant agents.

## Context management

Context is a core feature that acts as Aira's pre-configured knowledge base. When you set up a context, you give Aira specific instructions, data schemas, and business rules to follow. This is how you teach Aira the specifics of your projects to ensure it provides accurate responses.

**Context can store information such as:**

* Brand-specific information and business logic.
* Customer Requirement Document (CRD): Used by the QA Agent as the source of truth.
* Data Schemas: Used by the Analytics Bot to understand your tables and columns.
* API Headers & Activity Payloads: Used for testing and configuration.
* Default Customers: Used for running test cases.

### To set up a new context:

* Navigate to Settings and select the Context tab.
* Select the Add Context button.
* Provide a descriptive Name.
* In the editor, enter the content (e.g., a URL to a CRD, a JSON object with schema info).
* Select Create Context to save it.

## Authentication key management

AIRA requires authentication to communicate securely with various platform services. The authentication system ensures secure access to all Capillary APIs while providing flexibility for different integration scenarios.

### Setting Up Authentication

Follow the steps below to set up your authentication configuration.

1. Navigate to **Settings > Authentication Keys**.
2. On this page, you can add or edit authentication configurations, including:
   * **Base URL**: The endpoint for API requests (e.g., `https://eu.intouch.capillarytech.com`).
   * **Authentication Type**: Choose from Static Value, Basic Auth, or OAuth.
   * **Headers/Credentials**: The specific authentication details required for the selected type.

### Authentication Types

### 1. Static Value Authentication

* **What it is**: Uses a fixed API key or token that does not change.
* **Format**: `Authorization: Bearer fixed_api_token_123456`

### 2. Basic Auth

* **What it is**: Uses a username and password encoded in md5 hash format.
* **Format**: `Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=`

### 3. OAuth

* **What it is**: A token-based authentication framework that supports token expiration and refresh capabilities.
* **Format**: `Authorization: Bearer dynamic_oauth_token_xyz`

## How AIRA Uses Authentication

The agent automatically selects the correct authentication key based on the **Base URL** of the service it needs to call for a given task.

### Common AIRA Operations by Auth Type

* **Static Authentication (Most Common)**:
  * Creating and managing promotions, milestones, and campaigns.
  * Running test suites and validations.
  * Fetching customer data for testing purposes.
  * Handling all internal API-to-API communications.
  * Performing all configuration management tasks.

* **Basic Authentication (Limited Use)**:
  * Integrating with legacy systems.
  * Authenticating simple incoming webhooks.
  * Running quick testing scenarios with external systems.

* **OAuth Authentication (Advanced Scenarios)**:
  * Executing user-specific operations and generating reports.
  * Integrating with third-party platforms (e.g., connecting to a data provider).
  * Managing multi-tenant scenarios.
  * Performing operations that require user-level permissions.

<Note title="Note">
After AIRA executes your test suite, it automatically sends a detailed test report to your email. This email delivery depends on your authentication and notification configurations being set up correctly.
</Note>

<br />
