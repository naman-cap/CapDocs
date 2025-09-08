---
title: AIRA data models
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
## AIRA data models

The AIRA dashboard uses machine learning (ML) and artificial intelligence (AI) algorithms in the background. The AIRA dashboard models are named as per their functionality, for instance, if a model predicts when a customer is likely to make a transaction, it is titled ‘Transaction prediction’.

The propensity models of AIRA dashboard are described in the following table -

<Table align={["left","left","left"]}>
  <thead>
    <tr>
      <th>

      </th>

      <th>

      </th>

      <th>

      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Transaction prediction
      </td>

      <td>
        The Transaction prediction predicts customers who all are likely to purchase in the future time period - 30 days.
      </td>

      <td>
        The Transaction prediction model uses a binary classifier composing a primary ensemble of Light Gradient Boosting Machine (LightGBM), and Random Forest.
      </td>
    </tr>

    <tr>
      <td>
        Customer Churn Prediction
      </td>

      <td>
        The Customer Churn Prediction predicts customers who have a high chance of churning.
      </td>

      <td>
        The Customer Churn Prediction model uses a binary classifier composing a primary ensemble of Light Gradient Boosting Machine (LightGBM), and Random Forest.
      </td>
    </tr>

    <tr>
      <td>
        Campaign Response Prediction
      </td>

      <td>
        The Campaign Response Prediction is very specific to a certain campaign period and given a campaign who would respond. This also takes the previous response rate of the person into account.
      </td>

      <td>
        The Campaign Response Prediction model uses a binary classifier composing a primary ensemble of Light Gradient Boosting Machine (LightGBM), and Random Forest.
      </td>
    </tr>

    <tr>
      <td>
        CLTV Prediction
      </td>

      <td>
        The CLTV Prediction predicts the customer lifetime value for a year and then extrapolates for the next 3 years.
      </td>

      <td>
        The CLTV Prediction model uses a combination of regression and bucketing based classification algorithms.
      </td>
    </tr>

    <tr>
      <td>
        Product Affinity
      </td>

      <td>
        The Product Affinity ranks the product in the order of choice of the customer.
      </td>

      <td>
        The Product Affinity model uses the Proximity Model and FIR score Model.
      </td>
    </tr>
  </tbody>
</Table>
