---
title: Formspree Trial
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
You can use the URL `https://docs.capillarytech.com/changelog.rss`and add it to your RSS feeder to subscribe to our release notes. The below screenshot is from an RSS feeder `feeder.co` which is available as an extension on Chrome. You can find similar RSS feeders for Edge, Safari and other popular browsers.

<HTMLBlock>{`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    .subscribe-box {
      max-width: 300px;
      margin: 0 auto;
      padding: 20px;
      border: 2px solid #ccc;
      border-radius: 5px;
      text-align: center;
      font-family: Arial, sans-serif;
      background: linear-gradient(135deg, #f5f7fa, #c3cfe2);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .subscribe-box:hover {
      transform: scale(1.05);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    }

    .subscribe-box h2 {
      font-size: 18px;
      margin-bottom: 15px;
      color: #333;
    }

    .subscribe-box input,
    .subscribe-box button {
      width: 100%;
      padding: 10px;
      border-radius: 5px;
      font-size: 14px;
    }

    .subscribe-box input {
      margin-bottom: 15px;
      border: 1px solid #ccc;
    }

    .subscribe-box button {
      background-color: #4CAF50;
      color: #fff;
      border: none;
      cursor: pointer;
    }
  </style>
</head>
<body>
  <div class="subscribe-box">
    <h2>Subscribe to our release notes</h2>
    <form action="https://formspree.io/f/mgvwbeyd" method="POST">
      <label>
        <input type="email" name="email" required placeholder="Enter your email">
      </label>
      <button type="submit">Subscribe</button>
    </form>
  </div>
</body>
</html>
`}</HTMLBlock>

<br />

<br />

![58e56bb image](https://files.readme.io/58e56bb-image.png)
