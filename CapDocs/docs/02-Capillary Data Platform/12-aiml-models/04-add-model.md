---
title: Add model
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
## Add Model

AIRA dashboard offers several models related to retail and you can leverage them for analysis. There are five models available currently on AIRA. You need to add models manually to your org according to the business requirement.

There are four steps involved for an org to use a model.

TABLE OF CONTENT

* [Initiate model](https://docs.capillarytech.com/docs/add-model#1-initiate-model)
* [Validate data](https://docs.capillarytech.com/docs/add-model#2-validate-data)
* [Train model](https://docs.capillarytech.com/docs/add-model#train-model)
* Check data accuracy \([https://docs.capillarytech.com/docs/add-model#check-data-accuracy](https://docs.capillarytech.com/docs/add-model#check-data-accuracy) 

## Initiate model

You can either select a new model offered by Capillary or work on [pending](https://docs.capillarytech.com/docs/view-details-of-a-model) models that have been initiated.

To select a new model, use the following steps.

1. On the AIRA Dashboard page, click New model. 
2. Choose a relevant model and click on Initiate. The model is initiated and its status/sub-status changes to Not Initiated/Disabled.

![1218](https://files.readme.io/bb5048a-BV3Vxp_nk50IZJoQxYDgShTN23pJckVSkA.png "BV3Vxp_nk50IZJoQxYDgShTN23pJckVSkA.png")

Proceed to  Step 2: Validate Data.

![1067](https://files.readme.io/cc9a23c-0qpXyqzhX1eB5f0LVO5HqjNl9bAJHLp1EQ.png "0qpXyqzhX1eB5f0LVO5HqjNl9bAJHLp1EQ.png")

## Validate data

Once you initiate a model, you need to validate the data to ensure the data is proper without any errors.

To validate the data, 

* Navigate to the Validate tab, click Validate. You will see this only if the the validation is pending for the model. 

![942](https://files.readme.io/ddea97a-cPRm2trMZyUXo5Xg6pwF6hBr-0HYJ5si6Q.png "cPRm2trMZyUXo5Xg6pwF6hBr-0HYJ5si6Q.png")

Data validation triggers and the status/sub-status of the model changes to **In Progress/Validating**. 

When the validation is completed, the status changes to **User Action Required/Ready for Training**. You can proceed to Step 3: Train Model.

![1066](https://files.readme.io/2628575-qD4rgP1WM8TOeVDbhzHmCUxVLLjdxgT__Q.png "qD4rgP1WM8TOeVDbhzHmCUxVLLjdxgT__Q.png")

* User Action Required/ Data Quality: Needs Attention: The status or sub-status of the model when the data validation has failed. You can see the reason why the data validation has failed along with the recommended solution. 

![1070](https://files.readme.io/f6350d1-F_S5pUPOL3uYT1yjxB--ZEwi4p7F3sJcQA.png "F_S5pUPOL3uYT1yjxB--ZEwi4p7F3sJcQA.png")

#### Fields in Data Validation tab

![966](https://files.readme.io/ce39a97-H3a-IC8IFSxOEOxe_m9O4R_o7pP4G_FxdQ.png "H3a-IC8IFSxOEOxe_m9O4R_o7pP4G_FxdQ.png")

<Table align={["left","left"]}>
  <thead>
    <tr>
      <th>
        Option
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Validation Status
      </td>

      <td>
        * **Disabled:** The data validation for the model is not yet initiated. You will see an option to validate data.
        * **In\_progress:**&#x54;he data validation for the model is in progress (dataset is being ingested in the Customer Data Platform).
        * **Success:**&#x56;alidation is complete and the model is ready for training.
        * **Failure:** The validation is failed due to  insufficient data for other reasons 
      </td>
    </tr>

    <tr>
      <td>
        Observations
      </td>

      <td>
        This shows the reason identified for validation failures. This shows N/A for successfully completed validations.
      </td>
    </tr>

    <tr>
      <td>
        Last Attempt
      </td>

      <td>
        Shows the recent date of data validation.
      </td>
    </tr>
  </tbody>
</Table>

* To download data validation report, click **Download report**. The report downloads in a HTML format. 

![606](https://files.readme.io/ac73082-RLoZ8xoWkb9QPqvYRDcUNNY8o3bH7gOQbg.png "RLoZ8xoWkb9QPqvYRDcUNNY8o3bH7gOQbg.png")

* Successful validation report: When the data is validated successfully, you will see the summary of the data quality as shown here. 

![880](https://files.readme.io/1dd4dbd-NrGpiOyoXBFB5u1udG4UBK9jB2WlRcAGzg.png "NrGpiOyoXBFB5u1udG4UBK9jB2WlRcAGzg.png")

* When the data validation is not successful, you will see an exhaustive report that helps identify root causes of failure such as scarcity of historical data or insufficient number of campaigns. 

## Train model

You need to train the model after the dataset validation is successful. The training process usually takes less than a day.

* To train a model, navigate to the **Training** tab and click **Train**. The status/sub-status of your model changes to In **Progress/Training**. 

![1064](https://files.readme.io/01c7d2d-LdQupwBowIsYyojoG_5mWkrRNqk108ntYQ.png "LdQupwBowIsYyojoG_5mWkrRNqk108ntYQ.png")

If validation has failed for the model, you will see a note to fix validation issued (as shown in the screenshot)

![568](https://files.readme.io/96bb81f-0fAo-hqqdp5IjKixEjfa95IzKM9dKDlZzQ.png "0fAo-hqqdp5IjKixEjfa95IzKM9dKDlZzQ.png")

When the model training has been successfully completed, you will see a screen in your Training tab similar to the below screenshot.

![1064](https://files.readme.io/43c3258-_LQLCkgOhrZLNSF5XJ1SK_VmkhAVhWmOTA.png "_LQLCkgOhrZLNSF5XJ1SK_VmkhAVhWmOTA.png")

You can view the descriptions of the fields of Training tab [here](https://support.capillarytech.com/en/support/solutions/articles/4000177794).

## Check data accuracy

A model’s performance decays with time (with the availability of new data) and if the accuracy metrics downgrade, you must re-train the model.

![444](https://files.readme.io/5038b92-cv4-kryBrXo5NIBfH_prNjaUEmxKV5goaA.png "cv4-kryBrXo5NIBfH_prNjaUEmxKV5goaA.png")

If the model has not completed all the previous stages, then the Accuracy tab shows a message conveying that no data is available for accuracy.

When all the phases have been completed successfully, the model goes live! The status/sub-status of the model changes to Live/Monitoring Accuracy.

You can view the descriptions of the fields of Accuracy tab [here](https://support.capillarytech.com/en/support/solutions/articles/4000177794).
