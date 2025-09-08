---
title: Connect+
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
Connect+ is a UI-based, no-code integration framework that helps create reliable data integrations faster. Connect+ currently supports FTP-based integrations for data inflow to the Capillary system (Ingress) and data outflow from the Capillary system (Egress). It optimizes data processing and automates data ingestion.

## Use Cases

* **Dataflow from FTP to the Capillary system**: You can use Connect+ where CSV files uploaded on an FTP location need to be ingested using Capillary APIs and evaluate Loyalty or DVS events. For this, Loyalty or DVS needs to be enabled for the org. You cannot use Import Framework in such cases as it cannot invoke Loyalty or DVS evaluation. For example, Connect+ can be used to create a dataflow that can read transaction data from the input CSV file, transform the input file to API JSON format and send the data using transaction APIs as per a schedule.

In the future, it will support more use cases around dataflows from and to Capillary such as S3 to Capillary and Data Reconciliation.

* **Dataflow from Capillary to FTP**:  You can use Connect+ to join and transform the CSV files generated from the Capillary Data Export in the format required for the org. For example, to join multiple files generated using different data export templates, or to add additional columns to the files. Connect+ does not replace Data Export but extends it by addressing the last mile operations that cannot be achieved through Data Export. For example, Connect+ can be used to a create dataflow that can unzip and read 3 CSV files exported from Data Export (say from Member, Slab Change Log, and Profiles templates), join the files to create a single-member file, add new headers to the file, transform data in the file, and send it to an FTP location.

## Benefits of Connect+

The following are the benefits.

* Create integrations without any code.
* No infra management.
* Pre-built templates for integrations, which will continue to be added.
* Reliable (many monitoring and troubleshooting capabilities such as comprehensive error logs, dashboard, error alert to ensure a reliable data integration).

## Connect+ versus Data Import

You can use Connect+ where CSV files uploaded on an FTP location need to be ingested using Capillary APIs and evaluate Loyalty or DVS events.

However, you can use Import Framework to migrate historical data to Capillary or FTP integrations that do not require API calls. 

Connect+ does not replace Import Framework but complements it by addressing the integration use cases which require API calls that cannot be achieved through Data Import. 

## Key Concepts

Connect+ consists of workspaces and data flows. The following is an example of data flow with FTP integration.

![d98bd7d p08BiZYPgM2xMggEkP2huZtY4l3aMtOGNQ](https://files.readme.io/d98bd7d-p08BiZYPgM2xMggEkP2huZtY4l3aMtOGNQ.png)

* **Workspace**: A Workspace is an org level or multi-org level environment for data integration pipelines setup to ingest data from source to org level tables on the Capillary database. 
* **Dataflow**: A dataflow is similar to a pipeline. It enables the flow of data from a source to the Capillary system. Each workspace can have one or more Dataflows.
* **Templates**:  Templates are predefined formats with selected actions based on use cases. Templates help in creating dataflows easily. Creating a dataflow involves selecting the right template and then configuring it as per the requirement.
* **Actions**:  These are building blocks of a dataflow and help connect to a source such as FTP and destination such as API, transform or filter data, merge files, and so on.

The following table provides the reference links for further topics -

<Table align={["left","left"]}>
  <thead>
    <tr>
      <th>
        Entity
      </th>

      <th>
        Reference Link
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Manage Workflows
      </td>

      <td>
        [Manage Workflows](https://docs.capillarytech.com/docs/manage-workflows)
      </td>
    </tr>

    <tr>
      <td>
        Create dataflows
      </td>

      <td>
        [Create dataflows\
        ](https://docs.capillarytech.com/docs/create-dataflows)
      </td>
    </tr>

    <tr>
      <td>
        Step 1: Configure SFTP (SSH File Transfer Protocol) Server
      </td>

      <td>
        [Step 1: Configure SFTP (SSH File Transfer Protocol) Server\
        ](https://docs.capillarytech.com/docs/step-1-configure-sftp-ssh-file-transfer-protocol-server)
      </td>
    </tr>

    <tr>
      <td>
        Step 2: Configure Field Mapping & Data Transformation
      </td>

      <td>
        [Step 2: Configure Field Mapping & Data Transformation\
        ](https://docs.capillarytech.com/docs/step-2-configure-field-mapping-data-transformation)
      </td>
    </tr>

    <tr>
      <td>
        Step 3: Provide API Authentication Details (OAuth)
      </td>

      <td>
        [Step 3: Provide API Authentication Details (OAuth)\
        ](https://docs.capillarytech.com/docs/step-3-provide-api-authentication-details-oauth)
      </td>
    </tr>

    <tr>
      <td>
        Step 4: Configure Dataflow Execution Frequency
      </td>

      <td>
        [Step 4: Configure Dataflow Execution Frequency\
        ](https://docs.capillarytech.com/docs/step-4-configure-dataflow-execution-frequency)
      </td>
    </tr>
  </tbody>
</Table>
