---
title: Airmiles Calculator Extension
excerpt: >-
  This extension allows to calculate mile points according to the origin and
  destination.
deprecated: false
hidden: true
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
This extension allows brands from the Airline vertical to perform the following:

* Calculate miles for various origins and destinations based on multiple algorithms and add to the `ticketed_points_mileage` parameter during a transaction addition. The supported mileage calculation algorithms include the Haversine formula and Vincenty’s formula.\
  **NOTE:** Capillary maintains an up-to-date airport code list based on the Global Airport List, which includes precise latitude and longitude details for each origin and destination. When you input an origin and destination, the system validates and calculates the mile points accurately by utilizing the longitude and latitude data. You can raise a JIRA ticket if any of the origin/destinations are not available.
* City-pair-based air miles - This feature enables airlines exceptions for air miles in specific routes. At present, the system considers only the origin and destination and excludes layovers and transits.
* Set minimum miles value - If the miles calculated for an origin-destination is less than this value, the minimum miles value set is provided to the customer.

![2942758 Overview](https://files.readme.io/2942758-Overview.jpeg)

# Configure airmiles calculator extension

To enable and configure the airmiles calculator extension, perform the following:

1. From Intouch, navigate to the **Extensions** page.
2. On the **Extensions** page, search and open the **Airmiles calculator** extension.

![dcf79b5 Airmiles](https://files.readme.io/dcf79b5-Airmiles.png)

3. Click **Enable**.

![d1f30cc Enable airmile calc](https://files.readme.io/d1f30cc-Enable_airmile_calc.png)

4. Click the **Configure** tab.

![c5ad3d2 Configure](https://files.readme.io/c5ad3d2-Configure.png)

5. Select the desired miles computation algorithm.
6. If required, set the minimum miles. If the miles calculated for an origin-destination is less than this value, the minimum miles value set is provided to the customer.
7. Set the city-pair-based airmiles. To update, click **Sample file**, download and enter the details and upload the .csv file. You have the option to add to the existing pair or clear the existing city-pair and upload fresh data.

![530f6af City pair](https://files.readme.io/530f6af-City-pair.gif)

8. Click **Save**.\
   During the next transaction API call, miles are calculated based on the origin and destination and captured in the `ticketed_points_mileage` field and displayed in the transaction details.

![a9df344 Airmile](https://files.readme.io/a9df344-Airmile.png)

8. To view the configurations, click the **Overview** tab.

![7ced4b7 Overview](https://files.readme.io/7ced4b7-Overview.png)

9. To disable, click **Disable**.\
   As a result of the next transaction ADD API call, the system will skip miles calculation, and the data will not be captured in the `ticketed_points_mileage `parameter or displayed in the transaction details on the UI. The origin, destination and other extension fields including `ticketed_points_mileage` are permanent and do not change.
