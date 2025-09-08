---
title: Configuring Third Level Tracking Using Milestones Achieved"
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
This document provides information on configuring “third level tracking” use cases for Loyalty programs.

# Terminologies

- **Challenge**: Also referred to as Milestone. Challenges typically involve achieving a target within a specified period. Most challenges have only one cycle.
- **Mission**: Also referred to as Streak. Missions involve achieving a target value repeatedly over multiple cycles.

# Understanding Third-Level Tracking


Some use cases require tracking across different levels, which cannot be accomplished by milestones or streaks alone. Instead, a combined approach is necessary. For example, the below use cases cannot be achieved using Milestones or Streaks, and need a combined approach.

## Examples of Third-Level Tracking Use Cases

1. **Brushing**: Brush two times a day, six times a week, for four weeks.

In the above example, 

- two times a day, and six times a week could be a normal streak

- six times a day, and four weeks in a quarter could also be a normal streak

- two times a day could be a normal milestone

- six times a week could be a normal milestone

- four weeks in a quarter could be a normal milestone

2. **Walking**: Walk two kilometres a day, five days a week, for four weeks.  
   In the above example,

- two kilometres a day, and five days a week could be a normal streak

- five days a week, and four weeks in a quarter could be a normal streak

- two kilometres a day could be a normal milestone

- five days a week could be a normal milestone

- four weeks a quarter could be a normal milestone

These use cases where neither the streak nor milestone can track all three levels at once are called “third-level tracking” use cases.

# Types of Tracking

1. **Milestones (Challenges)**
   - Users must meet a target within a given timeframe.
   - Examples:
     - Walk 20 miles in a week.
     - Check in 3 times a month.

2. **Streaks (Missions)**
   - Users must achieve a target value repeatedly over a specified number of cycles.
   - Examples:
     - Walk 20 miles per week for 5 weeks.
     - Check-in 3 times a month for 10 months.

**Behavior**:

- Milestones track up to one level.
- Streaks track up to two levels.

However, some use cases require tracking across three levels, which cannot be achieved by milestones or streaks alone.

# Configuring 3rd Level Use Cases by Combining Milestones and Streaks


To address 3rd level tracking, you can use a combination of milestones and streaks:

1. **Create a Milestone**:
   - Track the daily target (e.g., brushing 2 times a day or walking 2 km a day).
   - Trigger a “targetCompletedEvent” when the milestone is met.

2. **Create a Streak**:

   - Track the milestone’s event over the weekly and overall duration (e.g., brushing 2 times a day for 6 times a week, for 4 weeks).
   - Use the "targetGroups" scope filter to specify which milestones' events are tracked by the streak.

   **Note**: The “targetGroups” filter is available for streaks with the “targetCompletedEvent” activity type and is similar to existing scope filters like store, zone, and concept.

## Configuration Steps

1. **Set Up the Milestone**:
   - Define the daily target (e.g., brushing 2 times a day or walking 2 km a day).
   - Configure it to trigger a “targetCompletedEvent”.

2. **Set Up the Streak**:
   - Track the milestone’s event over the weekly and overall duration (e.g., Brushing’s “targetCompletedEvent” for 6 times a week, and 4 weeks or Walking’s “targetCompletedEvent” for 5 times a week, and 4 weeks)

#### Simulation


Refer to the [provided simulation sheet](https://docs.google.com/spreadsheets/d/1OQzp7HAhcLpIxq2buMJLuNO6JNnskRF88rkH0_c13Dw/edit?gid=116685528#gid=116685528) for detailed examples of how these use cases work.

# Note


The “third-level tracking” technique currently applies only to behavioural events. Both milestones and streaks must be based on behavioural events for this technique to be effective. This approach does not apply to transactional cases due to the possibility of returns, which are not accounted for in this tracking method.

# Example 


## Task: Brush 3 times a day, 6 times a week, 11 weeks out of 12 weeks


|                      |                        |
| -------------------- | ---------------------- |
| **Target T1**        | Brushing 3 times a day |
| **Event**            | Behavioural Event (BE) |
| **KPI**              | Count                  |
| **Target Value**     | 3                      |
| **Frequency**        | Daily                  |
| **Number of Cycles** | 84                     |

<br  />

| **Target (T)** | **Cycle Start**          | **Cycle End**           | **Target Achieved?** |
| -------------- | ------------------------ | ----------------------- | -------------------- |
| **T1**         | Feb 2nd                  | Dec 31st                | No                   |
| **T2**         | Dec 20th (Previous Year) | Nov 20th                | No                   |
| **T3**         | Dec 20th (Previous Year) | Dec 10th (Current Year) | Yes                  |
| **T4**         | Dec 21st (Previous Year) | Dec 11th (Current Year) | Yes                  |

<br  />

### Week 1 Progress


| **Day** | **Events (BE)**  | **Target Completion** |
| ------- | ---------------- | --------------------- |
| Day 1   | BE_1, BE_2, BE_3 | Target Completed_1    |
| Day 2   | BE_1, BE_2, BE_3 | Target Completed_2    |
| Day 3   | BE_1, BE_2       | Target Completed_2    |
| Day 4   | BE_1, BE_2, BE_3 | Target Completed_3    |
| Day 5   | BE_1, BE_2, BE_3 | Target Completed_4    |
| Day 6   | BE_1, BE_2, BE_3 | Target Completed_5    |
| Day 7   | BE_1, BE_2, BE_3 | Target Completed_6    |

<br  />

### Streak Table with Cycles


| **Streak Name**  | Something XXX    |
| ---------------- | ---------------- |
| **Event**        | Target Completed |
| **KPI**          | Count            |
| **Streak Value** | 11               |
| **Target Value** | 6                |
| **Frequency**    | Weekly           |
| **Scope**        | T1               |
| **Cycle Start**  | Feb 2nd          |
| **Cycle End**    | Dec 31st         |
| **Streak Start** | Jan 1st          |

<br  />

<br  />

### Streak Progression with Cycle Data


| **Week** | **Cycle** | **Date Range** | **Daily Events & Achievements** | **Streak Counter** |
| --- | --- | --- | --- | --- |
| **Week 1** | T1 (Cycle 1) | May 20th - 27th | - Day 1, TC_1, user_achieved_value = 1, target_value = 6<br  />- Day 2, TC_1, user_achieved_value = 2, target_value = 6<br  />- Day 6, **Increase Streak** | **1** |
| **Week 2** | T1 (Cycle 2) | May 28th | - Day 8, TC_1, user_achieved_value = 1, target_value = 6<br  />- Day 14, TC_1, **Increase Streak** | **2** |
| **Week 3** | T3 (Cycle 3) | Dec 20th - Dec 10th curr year | Similar events as above | **2** |
| **Week 4** | T4 (Cycle 4) | Dec 21st - Dec 11th curr year | Similar events as above | **3** |
| **Week 5** | M1 (Milestone) | June 5th | Similar events as above | **4** |
| **Week 6** | M2 (Milestone) | May 10th | Similar events as above | **5** |
| **Week 7** | M3 (Milestone) | May 31st | Similar events as above | **6** |
| **Week 8** | M4 (Milestone) | May 10th | Similar events as above | **7** |
| **Week 9** |  | No data | No events reported | - |
| **Week 10** |  | No data | No events reported | - |
| **Week 11** |  | No data | No events reported | - |
| **Week 12** | Nov 20th |  | No events reported | - |
| **Streak End** |  |  |  | - |