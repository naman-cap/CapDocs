---
title: Upload Redeemed Coupons
excerpt: >-
  Lets you upload coupons that are redeemed for a coupon series in bulk. 


  You can also import coupons (Capillary CRM) that are redeemed externally using
  an endpoint.
api:
  file: v1.json
  operationId: upload-redeemed-coupons
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
### Request Body Parameters

### Request Body Parameters

<Table align={["left","left","left"]}>
  <thead>
    <tr>
      <th style={{ textAlign: "left" }}>
        Parameter
      </th>

      <th style={{ textAlign: "left" }}>
        Datatype
      </th>

      <th style={{ textAlign: "left" }}>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td style={{ textAlign: "left" }}>
        customerIdentifier\*
      </td>

      <td style={{ textAlign: "left" }}>
        enum
      </td>

      <td style={{ textAlign: "left" }}>
        Unique identifier of the customer to update redeemed coupons. Values: MOBILE, EXTERNAL\_ID, EMAIL, USER\_ID.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        couponIdentifier\*
      </td>

      <td style={{ textAlign: "left" }}>
        enum
      </td>

      <td style={{ textAlign: "left" }}>
        Coupon identifier used. Value: COUPON\_ID, COUPON\_CODE.
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        file\*
      </td>

      <td style={{ textAlign: "left" }}>
        file
      </td>

      <td style={{ textAlign: "left" }}>
        The CSV file that contains information of redeemed coupons. Each row in CSV file can contain following fields(columns marked with \* are mandatory).

        * Customer identifier\* : Field used to identify the customer, it can be userId, mobile, email or externalId. (userId will have more preference over the other customer identifiers, in case of multiple values)
        * Coupon identifier\* : Field used to identify the redeemed coupon, It can be couponId, couponCode. (couponId has more preference over couponCode in case of multiple values)
        * Redeemed date in milliseconds\* : Coupon redeemed time in Epoch
        * Redeemed at\* : Coupon redeemed till’s Id
        * Bill Id : Transaction Id
        * Bill Number : Transaction Number Details.

        Sample file content:

        * File content sample 1:
          redeemed date in millis, redeemed at, user id, coupon id, bill id, bill number, details 1603128622000,50015497,23599838,23456,1603128596000
          luci\_auto\_15039.

        File content sample 2:
        redeemed date in millis, redeemed at, mobile, coupon code ,bill id, bill number, details 1603128622000,50015497,9988776655,ABCDEF1,1603128596000
        luci\_auto\_15039
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        uploadHeaders\*
      </td>

      <td style={{ textAlign: "left" }}>
        int
      </td>

      <td style={{ textAlign: "left" }}>
        The sequence (starts from 0) of the columns in the attached csv file. This field accepts stringified JSON.<br /><br />Key name for the columns are as follows:<br />**Customer identifier**\* : Key name for this field varies according to the customerIdentifier param.<br />MOBILE : mobile<br />EXTERNAL\_ID: externalId<br />EMAIL: email<br />USER\_ID: userId<br />**Coupon identifier**\* :  Key name for this field varies according to the couponIdentifier param.<br />COUPON\_ID: couponId<br />COUPON\_CODE: couponCode<br />**Redeemed date in milliseconds**\* : redeemedDateInMillis<br />**Redeemed at**\* : redeemedAt<br />**Bill Id** : billId<br />**Bill Number** : billNumber<br />**Details** : details<br /><br />For the above file samples, the uploadHeaders will be:<br />*Sample 1* - `{"redeemedDateInMillis": 0, "redeemedAt": 1, "billNumber": 5, "couponId": 3, "userId": 2, "billId": 4, "details": 6}`<br />*Sample 2* - `{"redeemedDateInMillis": 0, "redeemedAt": 1, "billNumber": 5, "couponCode": 3, "mobile": 2, "billId": 4, "details": 6}`
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Details
      </td>

      <td style={{ textAlign: "left" }}>
        string
      </td>

      <td style={{ textAlign: "left" }}>
        Any additional details or notes to capture for redeemed coupon upload.
      </td>
    </tr>
  </tbody>
</Table>

All parameters marked with \* are mandatory.