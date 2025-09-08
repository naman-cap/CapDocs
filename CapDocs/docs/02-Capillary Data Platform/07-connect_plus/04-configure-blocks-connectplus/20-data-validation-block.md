---
title: Data Validation Block
deprecated: false
hidden: false
metadata:
  robots: index
---
The Data Validation block uses a Databricks job specified by the Job ID to clean, transform, or validate data before passing it to the next block. You can write a Databricks job that reads the input file retrieved through the source block, converts it into a table, applies the necessary validations and transformations, and writes the result to an output table. The output table serves as the data source for field mapping in the subsequent blocks.

You can add this block to your [DIY template](https://docs.capillarytech.com/docs/diy-templates-connectplus), or use it in select pre-defined Connect+ templates.

# Use Case

## Requirement: Cleaning Customer Data Before Loyalty Points Allocation

A retail brand uses Capillary’s loyalty platform to allocate points by importing customer data from an external system. However, the incoming file often includes duplicate records and rows with missing mobile numbers, which impacts point allocation.

**Solution**
Use the **Validation** block in Capillary to clean the data before processing it. Configure a custom Databricks job that:

* Removes duplicate customer records based on email address or mobile number.
* Eliminates rows where the mobile number is missing.

Provide the Databricks job ID in the Validation block configuration. After validation and cleaning, Capillary forwards the processed data to the next blocks for loyalty points allocation.

# Configuring the Data Validation Block Interface

## Pre-Requisites

* Ensure you have access to the database for your organisation's group. For access, create a ticket to the Capillary Access team.
* Name of the target database.

![026542b3fe35d57f191ef212a8a9bc8ec0f83269a962cf029d7f17751fa04733 55aeeb75e200f33b751494ce11d6ec33a17eb5e1468333b79dc0873e1c4e3964 image](https://files.readme.io/026542b3fe35d57f191ef212a8a9bc8ec0f83269a962cf029d7f17751fa04733-55aeeb75e200f33b751494ce11d6ec33a17eb5e1468333b79dc0873e1c4e3964-image.png)

<Table align={["left","left"]}>
  <thead>
    <tr>
      <th>
        Field name
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        DataBricks JobId
      </td>

      <td>
        The [Databricks Job ID](https://docs.capillarytech.com/docs/data-validation-block#/creating-a-databricks-job-and-job-id) that defines the validation and transformation logic.
      </td>
    </tr>

    <tr>
      <td>
        Is Data Validation enabled?
      </td>

      <td>
        Indicates whether to perform data validation:

        * If unchecked, the block is skipped and the workflow runs as usual.
        * If checked, the configured Databricks job runs to validate the data.
      </td>
    </tr>
  </tbody>
</Table>

## Creating a Databricks Job and Job ID

1. Log in to the Databricks portal.
2. From the drop-down menu in the top right corner, select your workspace.
   Your workspace is named `notebook-cluster in which your organisation exists`.
   **Example**:` notebook-eucrm`, where `eurcrm` is the cluster in which the organisation exists.

![b8e742c7e9322ab645eefa8689be0f1bf39aa352106a03a5213fb5beb798e718 e16be40673fed0acdaf7a3375ea2a6e844327de14ac80ab4b63b42733275fc5f landing page databricks](https://files.readme.io/b8e742c7e9322ab645eefa8689be0f1bf39aa352106a03a5213fb5beb798e718-e16be40673fed0acdaf7a3375ea2a6e844327de14ac80ab4b63b42733275fc5f-landing_page_databricks.png)

3. From the left pane, click **Workspace** > **Create** > **Notebook**.
   Write a Databricks notebook for the required validation and transformation.
   **Note**: A complex Databricks job might slow down the workflow.

![c948c30690c25daa0e64b14fd6cebd8b56544079e7520e6c1924d998d3ada16f 74a2ce6b803a0a8f7b5c7fdfb0c84596e2652f4bf7aff0e4ee3bbb877452cf33 Notebook Instruction Steps](https://files.readme.io/c948c30690c25daa0e64b14fd6cebd8b56544079e7520e6c1924d998d3ada16f-74a2ce6b803a0a8f7b5c7fdfb0c84596e2652f4bf7aff0e4ee3bbb877452cf33-Notebook_Instruction_Steps.gif)

4. From the left pane, click **Workflows**> **Create job**.
   The job ID is created. Use the Job ID in the **DataBricks JobId** field of the Data Validation block.

![1903ae57c5e6e93545431f32976a05b65bbc862789a5678e38009051287becc8 faaa75ab41be9a1cf9dc4be2f7d8b7c52695574da980ba8161bc0856b1eb6085 JobId](https://files.readme.io/1903ae57c5e6e93545431f32976a05b65bbc862789a5678e38009051287becc8-faaa75ab41be9a1cf9dc4be2f7d8b7c52695574da980ba8161bc0856b1eb6085-JobId.png)

5. Create a job and add a task.
   **Note**: In the **Path** field, give the path of your Databricks Notebook.

![07f4b1408fe14c49559a66210d7fae51f4cf29e7c3afdabed526444a4e14cafa b11484cf586f28a388fec773104944fd92e2f5126ef8fbbba9dc4620167a41ce Interactive Guide Steps](https://files.readme.io/07f4b1408fe14c49559a66210d7fae51f4cf29e7c3afdabed526444a4e14cafa-b11484cf586f28a388fec773104944fd92e2f5126ef8fbbba9dc4620167a41ce-Interactive_Guide_Steps.gif)

## Creating the Databricks Notebook Script

You can create a Databricks script to transform and validate the data as per your requirements. The following code should be included in your script.

```json Mandatory code that cannot be modified
input_table = dbutils.widgets.get("inputTable")
output_table = dbutils.widgets.get("outputTable")
database_name = dbutils.widgets.get("database_name")

# Define full table names
input_table_name = f"{database_name}.{input_table}"
output_table_name = f"{database_name}.{output_table}"
```

Use the following line to write data to the output table. You can change the name of the DataFrame in your script, but the rest of the code must remain unchanged. Here, `renamed_df` is the Dataframe name.

```json Script to write into output table
renamed_df.write.mode("overwrite").format("delta").saveAsTable(output_table_name)
```

**Note**: Use the `delta` format to store data into the output table

The following is a sample Databricks notebook script. The script fetches all the rows from the input table where the value of `id` is less than or equal to 30.  These rows are written into the output table, and the columns  `id` and `name`  are renamed to `customer_id` and `customer_name`, respectively.

```python Sample Databricks Job
import json
from pyspark.sql import SparkSession

# Initialize Spark
spark = SparkSession.builder.appName("Databricks S3 to Table").getOrCreate()

# Step 1: Read Job Parameters from notebook_params
input_table = dbutils.widgets.get("inputTable")
output_table = dbutils.widgets.get("outputTable")
database_name = dbutils.widgets.get("database_name")

# Define full table names
input_table_name = f"{database_name}.{input_table}"
output_table_name = f"{database_name}.{output_table}"

# Read data from the input table - This query selects all rows from the table where the `id` column is less than or equal to 30.
df = spark.sql(f"SELECT * FROM {input_table_name} WHERE id <= 30")

#  Perform the required transformation - Here, rename columns to customer_id and customer_name
renamed_df = (
    df.withColumnRenamed("id", "customer_id")
      .withColumnRenamed("name", "customer_name")
)  # Add more columns as needed

# Write the transformed data to the output table. It is mandatory to write the transformed data into the output table. Here, the data is written to the output table in Delta format.
renamed_df.write.mode("overwrite").format("delta").saveAsTable(output_table_name)
```

# FAQs

1. Where should I create the Databricks job?

Answer: You must create the Databricks job in the notebook cluster where your organisation resides.

2. What kind of transformations can I perform using this block?

Answer: You can remove duplicates, drop empty rows/columns, standardise headers, or apply custom logic such as formatting phone numbers or merging columns.

3. What should the Databricks job contain?

Answer: The job should read the input table, apply transformation or validation logic, and write the results to the output table. Subsequent blocks then use the output table for field mapping.

4. Can I write a complex Databricks job to achieve my transformation?

Answer: You can write a complex Databricks job, but it can slow down the workflow.

5. How are spaces and hyphens in the header names handled?

Answer: The spaces ( ) and hyphens (-) in the header names are converted to underscores (_).
**Example**: If the header name is `Customer ID` it is converted into `Customer_ID`.
