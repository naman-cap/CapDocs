---
title: Recipes
fullscreen: false
hidden: true
metadata:
  title: ''
  description: ''
---
This section guides on configuring various loyalty programs by utilizing different loyalty features.

<HTMLBlock>{`
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>App Engagement Strategies</title>
    <style>
        /* Reset default margin/padding and set box-sizing globally */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        /* Custom CSS */
        body {
            background-color: #f3f4f6;
            font-family: Arial, sans-serif;
        }

        /* Flex container to ensure cards don't overflow */
        .flex-container {
            max-width: 100%;
            margin: 32px auto;
            padding: 0 16px;
            display: flex;
            justify-content: center;
            gap: 24px;
            align-items: stretch;
        }

        .card {
            background-color: white;
            border-radius: 8px;
            box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
            overflow: hidden;
            width: 30%;
            min-width: 250px;
            transition: background-color 0.3s;
            text-decoration: none; /* Ensure no underline for card */
        }

        /* Remove underline for the anchor links inside cards */
        .card, .card:link, .card:visited {
            text-decoration: none;
            color: inherit;
        }

        /* Ensure no underline on hover and active state */
        .card:hover, .card:active {
            text-decoration: none;
            color: inherit;
        }

        .card-header {
            padding: 16px;
            position: relative;
            height: auto;
            display: flex;
            align-items: flex-end;
            border-bottom: 1px solid #e5e7eb;
        }

        .card-yellow {
            background-color: #FFE082;
        }

        .card-blue {
            background-color: #BBDEFB;
        }

        .card-green {
            background-color: #C8E6C9;
        }

        .card-header h2 {
            font-size: 1.1rem;
            font-weight: bold;
            color: #0A2647;
            margin: 0;
        }

        .card-content {
            padding: 16px;
        }

        .card-content p {
            color: #4B5563;
            font-size: 0.85rem;
            line-height: 1.4;
            margin: 0;
        }

        .badge {
            display: inline-block;
            background-color: #FFECB3;
            border-radius: 9999px;
            padding: 4px 10px;
            font-size: 0.75rem;
            font-weight: 600;
            color: #F59E0B;
            margin-top: 12px;
        }

        .badge-green {
            background-color: #A5D6A7;
            color: #2E7D32;
        }

        .card:hover {
            background-color: #e0e0e0;
        }

    </style>
</head>

<body>
    <div class="flex-container">
        <!-- Card 1 -->
        <a href="https://docs.capillarytech.com/docs/loyalty_use_cases#example-1-exercise-30-minutes-a-day--5-times-a-week--3-weeks-a-month" style="text-decoration:none;" target="_blank" class="card">
            <div class="card-header card-yellow">
                <h2>Streaks Use Case: Exercise Consistency Challenge (30 Minutes a Day, 5 Days a Week, 3 Weeks a Month)</h2>
            </div>
            <div class="card-content">
                <p>This use case outlines tracking exercise streaks where the brand sends one event per day, indicating if a user has exercised for 30 minutes or more. The goal is to achieve a set number of streaks for weekly and monthly rewards based on continuous activity.</p>
                <div class="badge">Loyalty</div>
            </div>
        </a>

        <!-- Card 2 -->
        <a href="https://docs.capillarytech.com/docs/loyalty_use_cases#example-2-summing-exercise-time-across-multiple-sessions--30-minutes-total-per-day--5-times-a-week--3-weeks-a-month" style="text-decoration:none;" target="_blank" class="card">
            <div class="card-header card-blue">
                <h2>Streaks Use Case: Summing Exercise Time Across Multiple Sessions (30 Minutes Total per Day, 5 Days a Week, 3 Weeks a Month)</h2>
            </div>
            <div class="card-content">
                <p>This use case demonstrates tracking exercise streaks by summing multiple daily events to meet a target of 30 minutes per day. It details how brands can send multiple exercise events, and Capillary aggregates the total time to manage streak-based rewards.</p>
                <div class="badge">Loyalty</div>
            </div>
        </a>

        <!-- Card 3 -->
        <a href="https://docs.capillarytech.com/docs/loyalty_use_cases#example-3-purchase-150-and-record-3-basketball-sessions-in-a-week" style="text-decoration:none;" target="_blank" class="card">
            <div class="card-header card-green">
                <h2>Streaks Use Case: Purchase and Basketball Activity Combo: $150 Purchase + 3 Basketball Sessions</h2>
            </div>
            <div class="card-content">
                <p>This use case tracks a combination of transactional and behavioral goals, where customers need to spend $150 and complete three basketball sessions in a week to unlock rewards. It demonstrates how to unify multiple targets into a single customer activity promotion.</p>
                <div class="badge badge-green">Loyalty</div>
            </div>
        </a>
    </div>
</body>

</html>
`}</HTMLBlock>
