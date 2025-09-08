---
title: Attributes - User Segment (EI)
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
**Clusters(Customer Segmentation)**: Itis a logical grouping of audiences based on shared characteristics. Segments are used to tailor the marketing efforts of brands effectively. Segmentation is usually done based on demographics or customer behavior. A segment consists of different values called partitions. For example, we can have a segment name Transaction Value whose partitions could be High, Medium, and Low.\
Let's say you want to group the customers based on adventure sports they like or not:\
Cluster Name: Adventure SportsCluster Value: Mountaineering, Trekking, Rock Climbing, Sport Climbing

Clusters or Customer Segments are created in Insights+ Module, To know more about customer segment creation : [click here](https://docs.capillarytech.com/docs/introduction-to-customer-segmentation#different-ways-of-segment-creation)

## **Cluster Value Includes**

**Profile:** Current Customer (currentCustomer)\
**return data type**: Boolean\
**Attribute Label**: clusterValueIncludes\
**Meaning** : To check if a customer belongs to a particular cluster (segment).\
**Sub-Attributes**: cluster Name and cluster sub segments\
**Syntax**: currentCustomer.clusterValueIncludes("cluster name","cluster sub components") 

<Table align={["left"]}>
  <thead>
    <tr>
      <th>
        Example: A marketing Manager of a corporate gifting company wanted to select the customers from selected companies to send the communication of the latest festival offers.
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        **Cluster name: corporate**  

        * *Cluster sub-segments name:\*\* KPMG, Magnus India, Polaris, Time of India, RENAISSANCE, Epicenter Technology, Capillary, "NESS TECHNOLOGIES".
          Out of all the values, they want to send communication to the customer belonging to the following sub-segments KPMG, CAPILLARY, TOI
              \- *&#x4F;R :\*\* \|\|
          Rule: \*\*currentCustomer.clusterValueIncludes(“corporate”,”KPMG”)||currentCustomer.clusterValueIncludes(“corporate”,”TOI”)||currentCustomer.clusterValueIncludes(“corporate”,”capillary”)\*\*
      </td>
    </tr>
  </tbody>
</Table>

<Table align={["left"]}>
  <thead>
    <tr>
      <th>
        Example: Write a rule, to check if the customer belongs to the cluster name “lastest_4june” and the customer preferred language is English and currentTxn value is greater than and equal to 250. Condition1 && condition 2 && condition 3
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        **Condition 1:**
        Profile: current Customer
        Attribute: cluster Value Includes
        Sub Attribute: latest\_4june (cluster user segment name), customer (sub segment)
        Condition1: currentCustomer.clusterValueIncludes("latest\_4june","customer")  

        **Condition 2:**
        Profile: current Customer
        Attribute: custom Field Value Includes
        Sub Attribute: custom field name and custom field Value
        Condition2: currentCustomer.customFieldValueIncludes("preferredlanguage","English")  

        **Condition3:**
        Profile: current Transaction
        Attribute: Value
        Condition3: currentTxn.value >= 25
        **Rule:currentCustomer.clusterValueIncludes("latest\_4june","customer")&¤currentCustomer.customFieldValueIncludes("preferredlanguage","English")&¤currentTxns.value>=250**
      </td>
    </tr>
  </tbody>
</Table>

## **Cluster Value Excludes**

**Profile:** Current Customer (currentCustomer)\
**return data type** :Boolean\
**Attribute Label** :clusterValueExcludes\
**Meaning** : To check if a customer does not belong to a particular cluster (segment) or returns False if the customer belongs to a particular cluster.\
**Sub-Attributes**: cluster Name and cluster sub segments\
**Syntax:** currentCustomer.clusterValueExcludes("cluster name","cluster sub components") \*\*

**Example** -> currentCustomer.clusterValueExcludes("Behavioral Segment","Adventure-seeker")

| Example 1: Write a condition to return false if a customer belongs to the sept2014 cluster, male segment OR if the current transaction value is between 2999 and 6000. |
| :--------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Rule: currentCustomer.clusterValueExcludes("Sep2014",”Male")\|\|currentTxns.value>2999&&(currentTxns.value\<6000)                                                      |

| Example 2: Write a rule, which returns False if the customer is an employee(cluster name) of KPMG (sub-cluster). |
| :--------------------------------------------------------------------------------------------------------------- |
| Rule: currentCustomer.clusterValueExcludes(“employee”,”KPMG”)                                                    |
