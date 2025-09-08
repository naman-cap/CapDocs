---
title: Getting started
deprecated: false
hidden: true
metadata:
  robots: index
---
## Step 1: Locate Aira

* Log into your Capillary platform.
* Look for the Aira icon (typically in the bottom-right corner or top navigation).
* Click the icon to open the chat interface.

## Step 2: Choose Your Task

**Learning something new? → Ask the Product Support Agent**

* `How do tier upgrades work in Capillary?`
* `What's the difference between points and cashback rewards?`
* `Explain how customer segmentation works in campaigns.`
* `How do I set up behavioral event tracking?`
* `What are milestones and how do they differ from promotions?`

**Setting up a promotion? → Talk to the Configuration Agent**

* `Create a 2X points promotion for Gold tier members on weekends.`
* `Set up a buy 2 get 1 free promotion for coffee products.`
* `Create a milestone to reward customers who spend $500 in 3 months.`
* `Configure a birthday month promotion with 20% discount.`
* `Set up a referral campaign where both parties get 100 points.`

**Checking performance? → Query the Analytics Bot**

* `Show me last month's sales by store location.`
* `What's the redemption rate for our loyalty points?`
* `Compare this quarter's performance with last quarter.`
* `Which products have the highest repeat purchase rate?`
* `Show customer lifetime value by acquisition channel.`

**Testing before launch? → Use the QA Agent**

* `Test my promotion ID 12345 with 5 positive and 3 negative cases.`
* `Create test cases for a minimum purchase amount promotion.`
* `Test if my tier upgrade rules are working correctly.`
* `Validate that my weekend promotion only triggers on Saturday and Sunday.`
* `Test promotion stacking behavior when multiple offers are active.`

## Example: Creating a promotion with Aira

Let's walk through creating your first promotion with Aira.

**Example Query:**

"Create a promotion that gives 100 bonus points to customers who spend more than $50"

**What Happens Next:**

* Aira identifies this as a configuration request and activates the Configuration Agent.
* Aira generates the complete promotion setup as Python code.
* You receive the code, ready to be reviewed and deployed.
* The Response You'll Get:

<br />

```Text Response
## Creating promotion for 100 bonus points on $50+ spend

promotion = create_promotion(
promotion_name="Bonus_100_Points_50_Dollar_Spend",
promotion_description="Earn 100 bonus points on purchases over $50",
promotion_start_date=create_my_date(2025, 9, 4),
promotion_end_date=create_my_date(2025, 10, 3),
root_workflow_step=create_workflow_step(
step_name="ruleset_1",
condition_to_actions=[
create_condition_to_actions(
name="condition_min_spend_50",
condition=create_rule_expression("transaction value more than 50"),
true_actions=[
create_points_reward(
allocation_strategy=create_allocation_strategy(
name="fixed_100_points",
allocation_type="FIXED",
value=100
),
expiry_strategy=create_relative_expiry_strategy(
name="expire_90_days",
duration=90,
unit="DAYS"
)
)
]
)
]
)
```

## Understanding Aira's responses

**Explanatory Comments:** Lines starting with ## explain what's being configured

* Create a weekend promotion for premium customers
* This gives 3X points on purchases above $100
* Valid only on Saturdays and Sundays

**Configuration Code:**  The actual implementation that can be copied and used directly

```python
create_promotion(
    promotion_name="Weekend Premium Rewards",
    promotion_description="3X points for premium customers on weekends",
    promotion_start_date=create_my_date(2025, 2, 1),
    promotion_end_date=create_my_date(2025, 3, 31),
    root_workflow_step=weekend_rules,
    is_active=False
)
```

**Customizable Elements** Dates, amounts, and conditions that you can adjust for example:

* if the minimum_purchase = 100, you can change from $100 to any amount.
* if the points_multiplier = 3, you can change from 3X to 2X, 5X, etc.
* if the start_month = 2, you can change from February to any month.
* if the tier_name = "Gold", you can change from Gold to Silver, Platinum, etc.
* if the validity_days = 30, you can change from 30 day to 28 days.

# Meet the Aira agents

Aira is comprised of specialized agents that work together, using the global context to perform their tasks.

| Agent                 | Primary function                            | Best for                           | Example use                              |
| :-------------------- | :------------------------------------------ | :--------------------------------- | :--------------------------------------- |
| Product Support Agent | Answers platform questions                  | Learning features, troubleshooting | "How do I create a customer segment?"    |
| Analytics Bot         | Provides data insights via natural language | Performance analysis, reporting    | "Show top spending customers last month" |
| Configuration Agent   | Creates campaigns, promotions, milestones   | Campaign setup, loyalty rules      | "Create 2X points weekend promotion"     |
| QA Agent              | Tests promotions and configurations         | Pre-launch validation              | "Test promotion 12345 with 5 test cases" |

**Product Support Agent:** Your 24/7 help desk that provides instant answers to product usage questions by drawing from pre-indexed documentation.

**Analytics Bot:** Your data analyst that provides instant insights through natural language queries, enabling self-service analytics.

**Configuration Agent:** Your campaign builder that automates the setup of promotions, audience segments, and personalized content.

**Quality Assurance (QA) Agent:** Your testing automation tool that streamlines validation for promotions and configurations.
