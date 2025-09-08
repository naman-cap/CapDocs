---
title: View details of a model
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
## View Details of a Model

There are two ways by which you can search for a model (as depicted in the following screenshot).

1. **Search models by model name:** Use the Search box to search for your preferred model. You will start seeing the models as you type.
2. **Filter models by status:** By default the table shows the list of all models. You can filter models by a specific status. For example, see only Live models. Use the available drop-down box and select your preferred status to view.

![1225](https://files.readme.io/f535d37--pK6z8ZajEKs7dDs09jGnXaWrqoDOzvExQ.png "-pK6z8ZajEKs7dDs09jGnXaWrqoDOzvExQ.png")

To work on an already initiated model, click on the model to view.

![1214](https://files.readme.io/94af097-CXtqJ5MpM4Q9tlCuTxPSPGlLhKBxxg6xLw.png "CXtqJ5MpM4Q9tlCuTxPSPGlLhKBxxg6xLw.png")

The details of the model are available in the Overview tab. 

![509](https://files.readme.io/86b28c5-emWPe8cT2HBqjeskzLe6KFxVBD4CLVJebw.png "emWPe8cT2HBqjeskzLe6KFxVBD4CLVJebw.png")

* **Model name:** Shows details of the model. 
* **Status and sub-status:**  The significance of status and sub-status of a model are described in the following table. 

<Table align={["left","left","left"]}>
  <thead>
    <tr>
      <th>
        Overall Status
      </th>

      <th>
        Sub
      </th>

      <th>

      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        In Progress
      </td>

      <td>
        Validating
      </td>

      <td>
        Data required for the model is currently under validation. As soon as the Validate button is clicked, it will go into this status/sub-status.
      </td>
    </tr>

    <tr>
      <td>
        In Progress
      </td>

      <td>
        Training
      </td>

      <td>
        Model is currently under training after training has been initiated by a user.
      </td>
    </tr>

    <tr>
      <td>
        User Action Required
      </td>

      <td>
        Data Quality: Needs Attention
      </td>

      <td>
        Data validation has been completed and the data required for moving to the model training phase has issues. Fixes need to be made in the data before attempting data validation again.
      </td>
    </tr>

    <tr>
      <td>
        User Action Required
      </td>

      <td>
        Ready for Training
      </td>

      <td>
        Data validation is successful. User has to manually trigger the model training step.
      </td>
    </tr>

    <tr>
      <td>
        Live
      </td>

      <td>
        Monitoring Accuracy
      </td>

      <td>
        Model training has been completed successfully and it is now Live, predicting propensity scores. Accuracy metrics are currently being monitored for the model.
      </td>
    </tr>

    <tr>
      <td>
        Not Initiated
      </td>

      <td>
        Disabled
      </td>

      <td>
        The model has been selected but not yet initiated.
      </td>
    </tr>
  </tbody>
</Table>

**Last status update:** Displays the date on which the model status was updated. 

**About:** Shows information about the model, explaining what the model predicts and the type of results it generates. The About section is followed by the status of each stage of the model, and a brief information about what is achieved in each stage. The status of each stage is highlighted by 4 symbols. The purpose of the symbols is described in the following table.

| Symbol | Description |
| :----- | :---------- |
|        |             |

* **Last attempted on:** This shows the date on which the model was last trained.
* **Avg training time:** This field displays the time (in seconds) that was taken to complete the training phase.
* **Total training runs:** This field displays the number of times the model has been trained successfully.
* **Previous Training Runs:** This displays the history of training runs in a tabular format. The table has the columns labeled Training Attempt No, Status, Completed time and Time taken. 

## View accuracy status

The Accuracy tab displays the fields as described in the following section 

<Table align={["left","left"]}>
  <thead>
    <tr>
      <th>
        Field
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Accuracy Status
      </td>

      <td>
        Success is shown when all the stages have been completed successfully and the model is actively performing its predictions.
      </td>
    </tr>

    <tr>
      <td>
        Last updated at
      </td>

      <td>
        The date on which the accuracy status of the model was last updated.
      </td>
    </tr>

    <tr>
      <td>
        Recall
      </td>

      <td>
        It tells us what portion of actual positives was identified correctly.
      </td>
    </tr>

    <tr>
      <td>
        Precision
      </td>

      <td>
        Tell us what proportions of positive identifications were actually correct.
      </td>
    </tr>

    <tr>
      <td>
        F1 score
      </td>

      <td>
        Harmonic Mean of precision and recall.
      </td>
    </tr>
  </tbody>
</Table>
