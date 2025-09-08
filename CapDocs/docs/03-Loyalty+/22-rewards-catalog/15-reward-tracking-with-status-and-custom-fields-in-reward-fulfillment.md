---
title: Reward Tracking with Status and Custom Fields in Reward Fulfillment
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
You can utilize the standard field "Status" and add custom fields in the issueReward API to include additional metadata related to reward issuance for tracking purposes. This is especially useful for tracking rewards fulfilled outside the Capillary system.

<p><strong><span style={{fontSize: "11pt"}}>Key Features:</span></strong></p>

    
        <p><span style={{fontSize: "11pt"}}>Standard Field - STATUS:</span></p>
        
            
                <p><span style={{fontSize: "11pt"}}>A new ENUM field called STATUS is now available in the issueReward call to track the current status of reward fulfillment (e.g., received, in-progress, pending, denied, completed).</span></p>
            
            
                <p><span style={{fontSize: "11pt"}}>This field is optional and validated against predefined values.</span></p>
            
        
    
    
        <p><span style={{fontSize: "11pt"}}>Custom Fields:</span></p>
        
            
                <p><span style={{fontSize: "11pt"}}>Issue Reward call now supports custom fields with data types such as String, Integer, Date, and Boolean.</span></p>
            
            
                <p><span style={{fontSize: "11pt"}}>Custom fields are unique at the organization level, with options for default values and case sensitivity.</span></p>
            
            
                <p><span style={{fontSize: "11pt"}}>A max of 10 custom fields can be passed in the issue Reward call</span></p>
            
        
    
    
        <p><span style={{fontSize: "11pt"}}>Integration with Other APIs:</span></p>
        
            
                <p><span style={{fontSize: "11pt"}}>The newly introduced fields are supported by the getPurchasedRewards API and membercare API, ensuring consistent data representation across platforms.</span></p>
            
        
    

<p><strong><span style={{fontSize: "11pt"}}>Benefits:</span></strong></p>

    
        <p><span style={{fontSize: "11pt"}}>Enhanced Metadata Handling : Improved tracking of reward fulfillment statuses and additional metadata to streamline operations.</span></p>
    
    
        <p><span style={{fontSize: "11pt"}}>Improved Customer Interactions :Real-time updates and detailed information available on partner portals and mobile apps, enhancing customer satisfaction.</span></p>
    

<p><strong><span style={{fontSize: "11pt"}}>Steps to follow for fulfillment status:</span></strong></p>

    
        <p><span style={{fontSize: "11pt"}}>Define the predefined values for fulfillment statuses using this API:</span><span style={{fontSize: "11pt"}}>&nbsp;</span><span style={{color: "#1155cc", fontSize: "11pt"}}>Create Fulfillment Status</span><span style={{fontSize: "11pt"}}>.</span></p>
    
    
        <p><span style={{fontSize: "11pt"}}>Update the predefined values for fulfillment statuses using this API:</span><span style={{color: "#1155cc", fontSize: "11pt"}}>&nbsp;Update Fulfillment Status</span><span style={{fontSize: "11pt"}}>.</span></p>
    
    
        <p><span style={{fontSize: "11pt"}}>Retrieve the predefined values for fulfillment statuses using this API:</span><span style={{color: "#1155cc", fontSize: "11pt"}}>&nbsp;Get Fulfillment Status</span><span style={{fontSize: "11pt"}}>.</span></p>
    
    
        <p><span style={{fontSize: "11pt"}}>Issue Reward Call:</span></p>
        
            
                <p><span style={{fontSize: "11pt"}}>Use these fulfillment statuses in the issueReward call (single or bulk). Here, it will be validated against predefined values.</span></p>
            
            
                <p><span style={{color: "#1155cc", fontSize: "11pt"}}>Issue Reward (Single)</span></p>
            
            
                <p><span style={{color: "#1155cc", fontSize: "11pt"}}>Issue Reward (Bulk)</span></p>
            
        
    
    
        <p><span style={{fontSize: "11pt"}}>Update the fulfillment status using the update txn API:&nbsp;</span><span style={{color: "#1155cc", fontSize: "11pt"}}>Update txn API</span></p>
    
    
        <p><span style={{fontSize: "11pt"}}>Retrieve Fulfillment Status:</span></p>
        
            
                <p><span style={{fontSize: "11pt"}}>Call the purchased rewards for user API or txn level API to see the value of the fulfillment status of the reward.</span></p>
            
            
                <p><span style={{color: "#1155cc", fontSize: "11pt"}}>Get Purchased Rewards for User</span></p>
            
            
                <p><span style={{color: "#1155cc", fontSize: "11pt"}}>Get Txn Level Details for User</span></p>
            
        
    

<p><strong><span style={{fontSize: "11pt"}}>Steps to follow for txn custom fields:</span></strong></p>

    
        <p><span style={{fontSize: "11pt"}}>Create custom fields with scope as ISSUE_REWARD using this API:&nbsp;</span><span style={{color: "#1155cc", fontSize: "11pt"}}>Create custom field</span></p>
    
    
        <p><span style={{fontSize: "11pt"}}>Update custom fields with scope as ISSUE_REWARD using this API:&nbsp;</span><span style={{color: "#1155cc", fontSize: "11pt"}}>Update custom field</span></p>
    
    
        <p><span style={{fontSize: "11pt"}}>Retrieve custom fields with scope as ISSUE_REWARD using this API:&nbsp;</span><span style={{color: "#1155cc", fontSize: "11pt"}}>Get custom field</span></p>
    
    
        <p><span style={{fontSize: "11pt"}}>Issue Reward Call:</span></p>
        
            
                <p><span style={{fontSize: "11pt"}}>Use these custom fields in the issueReward call (single or bulk)</span></p>
            
            
                <p><span style={{color: "#1155cc", fontSize: "11pt"}}>Issue Reward (Single)</span></p>
            
            
                <p><span style={{color: "#1155cc", fontSize: "11pt"}}>Issue Reward (Bulk)</span></p>
            
        
    
    
        <p><span style={{fontSize: "11pt"}}>Update the custom fields using the update txn API:&nbsp;</span><span style={{color: "#1155cc", fontSize: "11pt"}}>Update txn API</span></p>
    
    
        <p><span style={{fontSize: "11pt"}}>Retrieve txn custom fields:</span></p>
        
            
                <p><span style={{fontSize: "11pt"}}>Call the purchased rewards for user API or txn level API to see the value of the txn custom fields of the reward.</span></p>
            
            
                <p><span style={{color: "#1155cc", fontSize: "11pt"}}>Get Purchased Rewards for User</span></p>
            
            
                <p><span style={{color: "#1155cc", fontSize: "11pt"}}>Get Txn Level Details for User</span></p>
            
        
    

<p><strong><span style={{fontSize: "11pt"}}>Using the IssueReward API to pass fulfillment status and txn custom fields:</span></strong></p>

    
        <p><span style={{fontSize: "11pt"}}>Passing STATUS and Custom Fields:</span></p>
        
            
                <p><span style={{fontSize: "11pt"}}>Include the STATUS field and any txn custom fields in the issueReward call.</span></p>
            
        
    
    
        <p><span style={{fontSize: "11pt"}}>Bulk Issue:</span></p>
        
            
                <p><span style={{fontSize: "11pt"}}>STATUS and custom fields can also be passed in bulk issue calls.</span></p>
            
            
                <p><span style={{fontSize: "11pt"}}>Ensure that the STATUS and custom fields are included for each reward in the bulk call.</span></p>
            
        
    
    
        <p><span style={{fontSize: "11pt"}}>Issue reward APIs</span></p>
        
            
                <p><span style={{color: "#1155cc", fontSize: "11pt"}}>Issue Reward (Single)</span></p>
            
            
             <p><span style={{color: "#1155cc", fontSize: "11pt"}}>Issue Reward (Bulk)</span></p>
            
        
    

<p><strong><span style={{fontSize: "11pt"}}>Example Use Case:</span></strong></p>

    
        <p><span style={{fontSize: "11pt"}}>Fulfillment Process:</span></p>
        
            
                <p><span style={{fontSize: "11pt"}}>A reward partner logs into the partner portal and sees a list of rewards with a pending STATUS.</span></p>
            
            
                <p><span style={{fontSize: "11pt"}}>Upon receiving a fulfillment request, the partner updates the STATUS to confirmed.</span></p>
            
            
                <p><span style={{fontSize: "11pt"}}>Additional metadata such as ticket number or order ID can be entered.</span></p>
            
            
                <p><span style={{fontSize: "11pt"}}>Once fulfillment is complete, the STATUS is updated to completed.</span></p>
            
        
    
    
        <p><span style={{fontSize: "11pt"}}>Customer View:</span></p>
        
            
                <p><span style={{fontSize: "11pt"}}>End customers can view the STATUS of their rewards and any additional information on their mobile app, providing transparency and enhancing their experience.</span></p>
            
        
    

<p><span style={{fontSize: "11pt"}}>By following these steps, reward partners and brands can effectively use the new STATUS and custom fields to manage reward fulfillment and provide a better experience for end customers.</span></p>