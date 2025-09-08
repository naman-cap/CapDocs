---
title: Get started with AIRA dashboard
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
## Get Started with AIRA dashboard

To access the AIRA dashboard:

1. Log on to InTouch of your cluster ([APAC](https://sgcrm.cc.capillarytech.com/auth/login/?flash=\&from=/auth/logout), [Europe](https://eucrm.cc.capillarytech.com/auth/login/?flash=\&from=/auth/logout), and [India](https://incrm.cc.capillarytech.com/auth/login/?flash=\&from=/auth/logout)) and navigate to Menu > AIRA Dashboard.
2. Select your organization (only for users who have access to multiple orgs). Else, the org is selected by default.

![1000](https://files.readme.io/eb90b68-vOHSrVlbW5uWhf9GbKM_HJDAWYSfeI5bzQ.png "vOHSrVlbW5uWhf9GbKM_HJDAWYSfeI5bzQ.png")

3. AI Models Dashboard\
   This shows the snapshot of status of all models of the org.

![552](https://files.readme.io/14859db-jZ3dARh6OB9EhouSxXZNgwqwrlX3weCoiQ.png "jZ3dARh6OB9EhouSxXZNgwqwrlX3weCoiQ.png")

When new models are available for the organization, a note is displayed with the number of models available as highlighted in the preceding screenshot.

The significance of each model status is as described in the following table.

<Table align={["left","left"]}>
  <thead>
    <tr>
      <th>
        Status
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Live
      </td>

      <td>
        The model is active and running currently. Live models are ready to use by the organization.
      </td>
    </tr>

    <tr>
      <td>
        In Progress
      </td>

      <td>
        This indicates two possibilities - when the source data is under validation or the model is under training.
      </td>
    </tr>

    <tr>
      <td>
        Action Needed
      </td>

      <td>
        This indicates two possibilities for models post data validation

        * the data validation is incomplete and need to be fixed or
        * the data validation is complete and awaiting training.
      </td>
    </tr>

    <tr>
      <td>
        Not Initiated
      </td>

      <td>
        It indicates that the model has been selected for the org but not initiated.
      </td>
    </tr>
  </tbody>
</Table>
