---
title: Loyalty Use Cases
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
# Configuring a Loyalty Program with Streaks

## Example 1: **Exercise 30 Minutes a Day / 5 Times a Week / 3 Weeks a Month**

### Assumption:

* The brand sends a daily event with the number of minutes the user has exercised.

### **Implementation Steps**

#### **1. Behavioural Event Configuration:**

1. **Event Creation:**
   * **Event Name:** `Exercise`
   * **Attributes:**
     * `Customer ID`
     * `Minutes Exercised` (attribute name: `minutes`)
   * **Webhook Sharing:**
     1. Share the created webhook with the brand.
     2. Ensure the brand submits data in the correct format and schema.
     3. Optionally, include the `eventDateTime` attribute to allow overriding the default date (useful for retroactive or future events).
   * **Event Frequency:** Only one event per customer per day.

***

#### **2. Streak Configuration:**

1. **Create a Streak:**
   * **Metadata:**
     1. **Name:** Streak Name
     2. **Description:** Streak Description
     3. **Till Code:** Unique Code
   * **Date Settings:**
     1. **Start Date:** Enter Start Date
     2. **End Date:** Enter End Date
   * **Audience:**
     * Target **All customers** or a **Specific audience group**.

2. **Configure Target Levels:**
   * **Activity:** Behavioral Event
   * **Event:** `Exercise`
   * **KPI:** Count
   * **Target Value:** 5 (indicating 5 exercise events per week)
   * **Frequency:** Weekly
   * **Rule:** `currentEvent.minutes >= 30` (only counts days with at least 30 minutes of exercise)

3. **Configure Streak Levels:**
   * **Streak Level:** 3 (for 3 weeks)
   * **Additional Levels:** (e.g., 5 weeks, 7 weeks, 10 weeks as needed)
   * **Non-Continuous Option:** Enable/disable based on whether the streak must be continuous.
   * **Level Name:** Find the level name in the "info" icon at the end of each level row, necessary for writing loyalty promotion rules.

***

#### **3. Loyalty Promotion Configuration:**

1. **Create a Loyalty Promotion:**
   * **Metadata:**
     1. **Name:** Promotion Name
     2. **Description:** Promotion Description
     3. **Loyalty Program:** Link to the relevant loyalty program.

2. **Select Customer Activity:**
   * Choose **Milestone or Streak is updated**.

3. **Select Promotion Type:**
   * Choose **Available without issue** (or another suitable option).

4. **Set Duration:**
   * Align the promotion duration with the streak creation timeline.
   * Optionally, add buffer days to the end date.

5. **Set Condition:**
   * Add the following rule in the rule-box:\
     `currentEvent.streakName == "name" && currentEvent.streakExists("name") && currentEvent.isStreakAchievedEvent`
   * Replace `"name"` with the specific streak level name.

6. **Configure Actions:**
   * **Points:** Issue points (previously “target point allocation”).
   * **Alternate Currencies:** Use `Issue {{name_of_AC}}`.
   * **Coupons:** (if applicable).
   * **Badges:** (if applicable).

7. **Save & Publish:** Save and publish the promotion to make it live.

## Example 2: **Summing Exercise Time Across Multiple Sessions / 30 Minutes Total per Day / 5 Times a Week / 3 Weeks a Month**

### **Assumption**:

The brand sends multiple events per day, with Capillary summing the total exercise time. For example:

* Morning: 10 minutes
* Evening: 15 minutes
* Night: 20 minutes

Instead of sending a single event with a "minutes" attribute of 45, the brand sends three separate events, and Capillary aggregates the total.

***

### **Implementation Steps**

#### **1. Behavioral Event Configuration**:

1. **Event Creation:**
   * **Event Name:** `exercise`
   * **Attributes:**
     * `Customer ID`
     * `Minutes Exercised` (attribute name: `minutes`)

2. **Webhook Sharing:**
   * Share the webhook with the brand for event submissions.
   * Ensure the brand submits data in the correct format.

3. **Add`eventDateTime` Attribute:**
   * Include this attribute in the schema to override the current date (useful for retroactive or future entries).

***

#### **2. Target Configuration**:

1. **Create a Target:**
   * **Meta Details:**
     1. **Name:** Target Name
     2. **Description:** Target Description
     3. **Till Code:** Enter Till Code
     4. **Start & End Dates:** Cover the entire duration of the use case.

2. **Audience:**
   * Include all customers or a specific customer group.

3. **Cycles:**
   * Create **daily cycles** with a fixed window type.
   * Set the start and end dates to match the use case period.

4. **Target Activity Details:**
   * **Activity:** Behavioral event
   * **Event:** `exercise`
   * **KPI:** SUM
   * **Attribute:** `minutes`
   * **Target Value:** 30 (total minutes per day)
   * **Frequency:** Daily
   * **Rule:** Leave as `true`.

***

#### **3. Streak Configuration**:

1. **Create a Streak:**
   * **Metadata:**
     1. **Name:** Streak Name
     2. **Description:** Streak Description
     3. **Till Code:** Enter Till Code

2. **Date Settings:**
   * **Start Date:** Match with target creation start date.
   * **End Date:** Match with target creation end date.

3. **Audience:**
   * All customers or a specific audience group.

4. **Target Level Configurations:**
   * **Activity:** `target completed event`
   * **KPI:** COUNT
   * **Target Value:** 5 (times per week)
   * **Frequency:** Weekly

5. **Streak Level Configurations:**
   * **Streak Level:** 3 (indicating 3 weeks)
   * **Additional Levels:** (e.g., 5 weeks, 7 weeks, 10 weeks if needed)
   * **Non-Continuous Option:** Enable/disable depending on whether the streak must be continuous or allow breaks.
   * **Level Name:** This is found in the "info" icon at the end of each level row. It's important for rule writing in promotions.

***

#### **4. Loyalty Promotion Configuration**:

1. **Create a Loyalty Promotion:**
   * **Metadata:**
     1. **Name:** Promotion Name
     2. **Description:** Promotion Description
     3. **Loyalty Program:** Link with the relevant loyalty program.

2. **Customer Activity:**
   * Choose **Milestone or Streak is updated**.

3. **Promotion Type:**
   * Choose **Available without issue** (or another suitable option).

4. **Duration:**
   * Align the promotion duration with the streak.
   * Optionally add a few buffer days to the end date.

5. **Condition Setup:**
   * In the rule-box, use the rule:  
     ```
     currentEvent.streakName == "name" && currentEvent.streakExists("name") && currentEvent.isStreakAchievedEvent
     ```
     Replace `"name"` with the specific streak level name.

6. **Actions:**
   * **Points:** Use "Issue points" (previously "target point allocation").
   * **Alternate Currencies:** Use "Issue \{\{name\_of\_AC}}".
   * **Coupons:** (if applicable).
   * **Badges:** (if applicable).

7. **Save & Publish:**
   * Save and publish the promotion to make it live.

## Example 3: **Purchase $150 and Record 3 Basketball Sessions in a Week**

### **Assumption**:

Recording basketball sessions is considered a behavioral event.

***

### **Implementation Steps**

#### **1. Behavioral Event Configuration**

1. **Create a Behavioral Event:**
   * **Name:** `basketball_session`
   * **Attributes:** Include necessary attributes such as `customer ID`.

2. **Share Webhook:**
   * Provide the webhook to the brand for event submission.
   * Ensure the brand sends data in the correct format.

3. **Add`eventDateTime` Attribute:**
   * Include this attribute to override the current date as needed (useful for retroactive or future dates).

***

#### **2. Unified Target Creation**

1. **Create the Unified Target:**
   * **Meta Details:**
     1. **Name:** Enter Name
     2. **Description:** Enter Description
     3. **Till Code:** Enter Code
     4. **Start & End Date:** Cover the entire duration of the use case.

2. **Audience:**
   * All customers or a specific audience group.

3. **Cycles:**
   * Create weekly cycles starting from a specific date or from the customer’s first activity post-enrollment, depending on the use case.

4. **Target 1 Details:**
   * **Activity:** Transaction
   * **Entity:** Transaction
   * **KPI:** Gross sales
   * **Target Value:** 150
   * **Rule-box:** Leave as “true”.

5. **Target 2 Details:**
   * **Activity:** Behavioral event
   * **Event:** `basketball_session`
   * **KPI:** COUNT
   * **Target Value:** 3
   * **Rule-box:** Leave as “true”.

6. **Operator:**
   * Use **“ALL”** to require both targets to be met. Use **“ANY”** if meeting any one target is sufficient.

7. **Save & Continue**

***

#### **3. Loyalty Promotions Configuration**

1. **Create a Loyalty Promotion:**
   * **Metadata:**
     1. **Name:** Enter Name
     2. **Description:** Enter Description
     3. **Loyalty Program Linkage:** Link with relevant loyalty program

2. **Customer Activity:**
   * Select **“Milestone or Streak is updated”**.

3. **Promotion Type:**
   * Choose the appropriate option based on the use case, typically **“Available without issue”**.

4. **Duration:**
   * Match the duration to the unified target creation.
   * Optionally, add a few buffer days to the end date.

5. **Condition Setup:**
   * Add a condition such as:
     ```
     currentEvent.isUnifiedTargetAchievement
     ```
   * If rewards are given for individual targets as well as the unified achievement, add conditions for each target:
     ```
     currentEvent.isTargetAchieved && currentEvent.targetExists("name of the specific target")
     ```

6. **Actions:**
   * **Points:** Use Issue points (previously “target point allocation”). Select options based on whether rewarding is for the unified achievement or individual targets.
   * **Alternate Currencies:** Use Issue \{\{name\_of\_AC}}.
   * **Coupons:** Provide details if applicable.
   * **Badges:** Provide details if applicable.

7. **Save & Continue**
