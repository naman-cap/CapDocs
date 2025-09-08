---
title: Neo Transformer Block
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
The Neo Transformer block allows you to invoke a NEO dataflow for data transformation. Below is the screenshot showing the fields in the block.

![0926a1877c79431fb1281b644712c50ac3291886d2d628cdc62dd96e98301887 image](https://files.readme.io/0926a1877c79431fb1281b644712c50ac3291886d2d628cdc62dd96e98301887-image.png)

The table below describes the fields in the block.

<Table align={["left","left"]}>
  <thead>
    <tr>
      <th>
        Field Name
      </th>

      <th>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Enter url
      </td>

      <td>
        Select the [Neo Dataflow](https://docs.capillarytech.com/docs/dataflows) from the drop-down menu. The drop-down lists Dataflows with the `Connectplus` tag.
      </td>
    </tr>

    <tr>
      <td>
        Authorization
      </td>

      <td>
        Authorisation key for the API (if required).
      </td>
    </tr>

    <tr>
      <td>
        Split Response
      </td>

      <td>
        Splits the response when the API returns an array of objects.  

        * \*True \*\*- Separates each array element in the API response into individual responses  
        * \*False \*\*- Keeps the response as a single array without separation
      </td>
    </tr>
  </tbody>
</Table>
