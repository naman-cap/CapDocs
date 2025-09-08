---
title: Release Notes
fullscreen: false
hidden: false
metadata:
  title: ''
  description: ''
---
<HTMLBlock>{`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Release Notes</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
      background-color: #ffffff; /* White background */
      color: #000000; /* Default light mode text color */
    }
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 10px;
    }

    h1 {
      font-size: 32px;
      font-weight: bold;
      margin-bottom: 10px;
    }

    p {
      font-size: 16px;
      color: #666 !important;
      margin-bottom: 30px;
    }

    .timeline {
      display: grid;
      grid-template-columns: repeat(2, 1fr); /* Two columns */
      gap: 40px; /* Space between year boxes */
    }

    .year {
      border: 1px solid hsl(0, 0%, 87%);
      border-radius: 40px;
      padding: 20px;
      background-color: #fff !important;
      box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
    }

    .year h2 {
      font-size: 24px;
      font-weight: bold;
      color: #1341A9 !important;
      margin-bottom: 15px;
    }

    .year .grid-container {
      display: grid;
      grid-template-columns: 1fr 1fr; /* Two equal columns */
      gap: 50px; /* Space between columns */
    }

    .grid-item {
      border-left: 3px solid #1341A9 !important; /* Thin sky blue line 00b3b3 */
      padding-left: 10px;
    }
    .period {
      font-size: 18px;
      font-weight: bold;
      margin-bottom: 5px;
    }

    .period a {
      color: #1341A9 !important;
      text-decoration: none;
    }

    .period a:hover {
      text-decoration: underline;
    }

    .subheadings {
      margin-left: 15px;
      font-size: 16px;
      color: #1341A9 !important;
    }

    .subheadings a {
      display: block;
      margin-top: 5px;
      color: #1341A9 !important;
      text-decoration: none;
    }

    .subheadings a:hover {
      text-decoration: underline;
    }

    .subscribe-box {
      max-width: 400px;
      max-height:fit-content;
      padding: 50px;
      border: 2px solid #ccc !important;
      border-radius: 35px;
      text-align: center;
      font-family: Arial, sans-serif;
      background: linear-gradient(135deg, #f5f7fa, #c3cfe2) !important;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      position: relative;
      left: 50%;
      transform: translateX(-50%);
      bottom: -40px;
    }

    .subscribe-box h2 {
      font-size: 18px;
      margin-bottom: 15px;
      color: #333 !important;
    }

    .subscribe-box input,
    .subscribe-box button {
      width: 100%;
      padding: 10px;
      border-radius: 5px;
      font-size: 14px;
    }

    .subscribe-box input {
      margin-bottom: 25px;
      border: 1px solid #ccc !important;
    }

    .subscribe-box button {
      background-color: #1341A9 !important;
      color: #fff !important;
      border: none;
      cursor: pointer;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="timeline">
      <div class="year">
  <h2>2025</h2>
  <div class="grid-container">
    <div class="grid-item">
      <div class="period"><a href="https://docs.capillarytech.com/docs/january-february-march-2025" style="text-decoration:none">Jan-Feb-Mar</a></div>
      <div class="subheadings">
        <a href="https://docs.capillarytech.com/docs/january-february-march-2025#engage" style="text-decoration:none">Engage+</a>
        <a href="https://docs.capillarytech.com/docs/january-february-march-2025#loyalty" style="text-decoration:none">Loyalty+</a>
        <a href="https://docs.capillarytech.com/docs/january-february-march-2025#incentives" style="text-decoration:none">Incentives</a>
        <a href="https://docs.capillarytech.com/docs/january-february-march-2025#insights" style="text-decoration:none; ">Insights+</a>
        <a href="#" style="text-decoration:none; color: #808080 !important; opacity: 0.4;">CDP</a>
      </div>
    </div>
    <div class="grid-item">
      <div class="period"><a href="https://docs.capillarytech.com/docs/april-may-june-2025" style="text-decoration:none">Apr-May-June</a></div>
      <div class="subheadings">
        <a href="#" style="text-decoration:none; color: #808080 !important; opacity: 0.4;">Loyalty+</a>
        <a href="https://docs.capillarytech.com/docs/april-may-june-2025#incentives" style="text-decoration:none">Incentives</a>
        <a href="https://docs.capillarytech.com/docs/april-may-june-2025#engage" style="text-decoration:none">Engage+</a>
        <a href="#" style="text-decoration:none; color: #808080 !important; opacity: 0.4;">Insights+</a>
        <a href="https://docs.capillarytech.com/docs/april-may-june-2025#capillary-data-platform" style="text-decoration:none;">CDP</a>
        <a href="https://docs.capillarytech.com/docs/april-may-june-2025#/neo-extension" style="text-decoration:none; ">NEO Extension</a>
      </div>
    </div>
    <div class="grid-item">
      <div class="period"><a href="#" style="text-decoration:none; color: #808080 !important; opacity: 0.4;">Jul-Aug-Sept</a></div>
      <div class="subheadings">
        <a href="#" style="text-decoration:none; color: #808080 !important; opacity: 0.4;">Loyalty+</a>
        <a href="#" style="text-decoration:none; color: #808080 !important; opacity: 0.4;">Incentives</a>
        <a href="#" style="text-decoration:none; color: #808080 !important; opacity: 0.4;">Engage+</a>
        <a href="#" style="text-decoration:none; color: #808080 !important; opacity: 0.4;">Rewards+</a>
        <a href="#" style="text-decoration:none; color: #808080 !important; opacity: 0.4;">CDP</a>
      </div>
    </div>
    <div class="grid-item">
      <div class="period"><a href="#" style="text-decoration:none; color: #808080 !important; opacity: 0.4;">Oct-Nov-Dec</a></div>
      <div class="subheadings">
        <a href="#" style="text-decoration:none; color: #808080 !important; opacity: 0.4;">Loyalty+</a>
        <a href="#" style="text-decoration:none; color: #808080 !important; opacity: 0.4;">Incentives</a>
        <a href="#" style="text-decoration:none; color: #808080 !important; opacity: 0.4;">Engage+</a>
        <a href="#" style="text-decoration:none; color: #808080 !important; opacity: 0.4;">Insights+</a>
        <a href="#" style="text-decoration:none; color: #808080 !important; opacity: 0.4;">CDP</a>
      </div>
    </div>
  </div>
</div>
      <div class="year">
        <h2>2024</h2>
        <div class="grid-container">
          <div class="grid-item">
            <div class="period"><a href="https://docs.capillarytech.com/docs/january-february-march24" style="text-decoration:none">Jan-Feb-Mar</a></div>
            <div class="subheadings">
                <a href="https://docs.capillarytech.com/docs/january-february-march24#loyalty" style="text-decoration:none">Loyalty+</a>
                <a href="https://docs.capillarytech.com/docs/january-february-march24#incentives" style="text-decoration:none">Incentives</a>
                <a href="https://docs.capillarytech.com/docs/january-february-march24#engage" style="text-decoration:none">Engage+</a>
                <a href="https://docs.capillarytech.com/docs/january-february-march24#insights" style="text-decoration:none">Insights+</a>
                <a href="https://docs.capillarytech.com/docs/january-february-march24#capillary-data-platform" style="text-decoration:none">CDP</a>
            </div>
          </div>
          <div class="grid-item">
            <div class="period"><a href="https://docs.capillarytech.com/docs/april-may-june24" style="text-decoration:none">Apr-May-June</a></div>
            <div class="subheadings">
                <a href="https://docs.capillarytech.com/docs/april-may-june24#loyalty" style="text-decoration:none">Loyalty+</a>
                <a href="https://docs.capillarytech.com/docs/april-may-june24#incentives" style="text-decoration:none">Incentives</a>
                <a href="https://docs.capillarytech.com/docs/april-may-june24#engage" style="text-decoration:none">Engage+</a>
                <a href="https://docs.capillarytech.com/docs/april-may-june24#insights" style="text-decoration:none">Insights+</a>
                <a href="https://docs.capillarytech.com/docs/april-may-june24#capillary-data-platform-cdp" style="text-decoration:none">CDP</a>
            </div>
          </div>
          <div class="grid-item">
            <div class="period"><a href="https://docs.capillarytech.com/docs/july-august-september24" style="text-decoration:none">Jul-Aug-Sept</a></div>
            <div class="subheadings">
                <a href="https://docs.capillarytech.com/docs/july-august-september24#loyalty" style="text-decoration:none">Loyalty+</a>
                <a href="https://docs.capillarytech.com/docs/july-august-september24#incentives" style="text-decoration:none">Incentives</a>
                <a href="https://docs.capillarytech.com/docs/july-august-september24#engage" style="text-decoration:none">Engage+</a>
                <a href="https://docs.capillarytech.com/docs/july-august-september24#rewards" style="text-decoration:none">Rewards+</a>
                </div>
          </div>
          <div class="grid-item">
            <div class="period"><a href="https://docs.capillarytech.com/docs/october-november-december24" style="text-decoration:none">Oct-Nov-Dec</a></div>
            <div class="subheadings">
                <a href="https://docs.capillarytech.com/docs/october-november-december24#loyalty" style="text-decoration:none">Loyalty+</a>
                <a href="https://docs.capillarytech.com/docs/october-november-december24#incentives" style="text-decoration:none">Incentives</a>
                <a href="https://docs.capillarytech.com/docs/october-november-december24#engage" style="text-decoration:none">Engage+</a>
                <a href="https://docs.capillarytech.com/docs/october-november-december24#insights" style="text-decoration:none">Insights+</a>
                <a href="#" style="text-decoration:none; color: #808080 !important; opacity: 0.4;">CDP</a>
                </div>
          </div>
        </div>
      </div>
      <div class="year">
        <h2>2023</h2>
        <div class="grid-container">
          <div class="grid-item">
            <div class="period"><a href="https://docs.capillarytech.com/docs/january-february-march23" style="text-decoration:none">Jan-Feb-Mar</a></div>
            <div class="subheadings">
                <a href="https://docs.capillarytech.com/docs/january-february-march23#loyalty" style="text-decoration:none">Loyalty+</a>
                <a href="https://docs.capillarytech.com/docs/january-february-march23#incentives" style="text-decoration:none">Incentives</a>
                <a href="https://docs.capillarytech.com/docs/january-february-march23#engage" style="text-decoration:none">Engage+</a>
                <a href="https://docs.capillarytech.com/docs/january-february-march23#insights" style="text-decoration:none">Insights+</a>
                <a href="https://docs.capillarytech.com/docs/january-february-march23#capillary-data-platform" style="text-decoration:none">CDP</a>
            </div>
          </div>
          <div class="grid-item">
            <div class="period"><a href="https://docs.capillarytech.com/docs/april-may-june23" style="text-decoration:none">Apr-May-June</a></div>
            <div class="subheadings">
                <a href="https://docs.capillarytech.com/docs/april-may-june23#loyalty" style="text-decoration:none">Loyalty+</a>
                <a href="https://docs.capillarytech.com/docs/april-may-june23#incentives" style="text-decoration:none">Incentives</a>
                <a href="https://docs.capillarytech.com/docs/april-may-june23#engage" style="text-decoration:none">Engage+</a>
                <a href="https://docs.capillarytech.com/docs/april-may-june23#insights" style="text-decoration:none">Insights+</a>
                <a href="https://docs.capillarytech.com/docs/april-may-june23#capillary-data-platform" style="text-decoration:none">CDP</a>
            </div>
          </div>
          <div class="grid-item">
            <div class="period"><a href="https://docs.capillarytech.com/docs/july-august-september23" style="text-decoration:none">Jul-Aug-Sept</a></div>
            <div class="subheadings">
                <a href="https://docs.capillarytech.com/docs/july-august-september23#loyalty" style="text-decoration:none">Loyalty+</a>
                <a href="https://docs.capillarytech.com/docs/july-august-september23#incentives" style="text-decoration:none">Incentives</a>
                <a href="https://docs.capillarytech.com/docs/july-august-september23#engage" style="text-decoration:none">Engage+</a>
                <a href="https://docs.capillarytech.com/docs/july-august-september23#insights" style="text-decoration:none">Insights+</a>
                <a href="https://docs.capillarytech.com/docs/july-august-september23#capillary-data-platform" style="text-decoration:none">CDP</a>
            </div>
          </div>
          <div class="grid-item">
            <div class="period"><a href="https://docs.capillarytech.com/docs/october-november-december23" style="text-decoration:none">Oct-Nov-Dec</a></div>
            <div class="subheadings">
                <a href="https://docs.capillarytech.com/docs/october-november-december23#loyalty" style="text-decoration:none">Loyalty+</a>
                <a href="https://docs.capillarytech.com/docs/october-november-december23#incentives" style="text-decoration:none">Incentives</a>
                <a href="https://docs.capillarytech.com/docs/october-november-december23#engage" style="text-decoration:none">Engage+</a>
                <a href="https://docs.capillarytech.com/docs/october-november-december23#insights" style="text-decoration:none">Insights+</a>
                <a href="https://docs.capillarytech.com/docs/october-november-december23#capillary-data-platform" style="text-decoration:none">CDP</a>
            </div>
          </div>
        </div>
      </div>
      <div class="year">
        <h2>2022</h2>
        <div class="grid-container">
            <div class="grid-item">
              <div class="period"><a href="https://docs.capillarytech.com/docs/january-february-march22" style="text-decoration:none">Jan-Feb-Mar</a></div>
              <div class="subheadings">
                <a href="https://docs.capillarytech.com/docs/january-february-march22#loyalty" style="text-decoration:none">Loyalty+</a>
                <a href="https://docs.capillarytech.com/docs/january-february-march22#engage" style="text-decoration:none">Engage+</a>
                <a href="https://docs.capillarytech.com/docs/january-february-march22#insights" style="text-decoration:none">Insights+</a>
                <a href="https://docs.capillarytech.com/docs/january-february-march22#capillary-data-platform" style="text-decoration:none">CDP</a>
              </div>
            </div>
            <div class="grid-item">
              <div class="period"><a href="https://docs.capillarytech.com/docs/april-may-june22" style="text-decoration:none">Apr-May-June</a></div>
              <div class="subheadings">
                <a href="https://docs.capillarytech.com/docs/april-may-june22#loyalty" style="text-decoration:none">Loyalty+</a>
                <a href="https://docs.capillarytech.com/docs/april-may-june22#engage" style="text-decoration:none">Engage+</a>
                <a href="https://docs.capillarytech.com/docs/april-may-june22#insights" style="text-decoration:none">Insights+</a>
                <a href="https://docs.capillarytech.com/docs/april-may-june22#capillary-data-platform" style="text-decoration:none">CDP</a>
              </div>
            </div>
            <div class="grid-item">
              <div class="period"><a href="https://docs.capillarytech.com/docs/july-august-september22" style="text-decoration:none">Jul-Aug-Sept</a></div>
              <div class="subheadings">
                <a href="https://docs.capillarytech.com/docs/july-august-september22#loyalty" style="text-decoration:none">Loyalty+</a>
                <a href="https://docs.capillarytech.com/docs/july-august-september22#engage" style="text-decoration:none">Engage+</a>
                <a href="https://docs.capillarytech.com/docs/july-august-september22#insights" style="text-decoration:none">Insights+</a>
                <a href="https://docs.capillarytech.com/docs/july-august-september22#capillary-data-platform" style="text-decoration:none">CDP</a>
              </div>
            </div>
            <div class="grid-item">
              <div class="period"><a href="https://docs.capillarytech.com/docs/october-november-december22" style="text-decoration:none">Oct-Nov-Dec</a></div>
              <div class="subheadings">
                <a href="https://docs.capillarytech.com/docs/october-november-december22#loyalty" style="text-decoration:none">Loyalty+</a>
                <a href="https://docs.capillarytech.com/docs/october-november-december22#engage" style="text-decoration:none">Engage+</a>
                <a href="https://docs.capillarytech.com/docs/october-november-december22#insights" style="text-decoration:none">Insights+</a>
                <a href="https://docs.capillarytech.com/docs/october-november-december22#capillary-data-platform" style="text-decoration:none">CDP</a>
              </div>
            </div>
        </div>
      </div>
      <div class="year">
        <h2>2021</h2>
        <div class="grid-container">
            <div class="grid-item">
              <div class="period"><a href="https://docs.capillarytech.com/docs/january-february-march21" style="text-decoration:none">Jan-Feb-Mar</a></div>
              <div class="subheadings">
                <a href="https://docs.capillarytech.com/docs/january-february-march21#insights" style="text-decoration:none">Insights+</a>
                <a href="https://docs.capillarytech.com/docs/january-february-march21#engage" style="text-decoration:none">Engage+</a>
                <a href="https://docs.capillarytech.com/docs/january-february-march21#capillary-data-platform" style="text-decoration:none">CDP</a>
              </div>
            </div>
            <div class="grid-item">
              <div class="period"><a href="https://docs.capillarytech.com/docs/april-may-june21" style="text-decoration:none">Apr-May-June</a></div>
              <div class="subheadings">
                <a href="https://docs.capillarytech.com/docs/april-may-june21#insights" style="text-decoration:none">Insights+</a>
                <a href="https://docs.capillarytech.com/docs/april-may-june21#engage" style="text-decoration:none">Engage+</a>
                <a href="https://docs.capillarytech.com/docs/april-may-june21#capillary-data-platform" style="text-decoration:none">CDP</a>
              </div>
            </div>
            <div class="grid-item">
              <div class="period"><a href="https://docs.capillarytech.com/docs/july-august-september21" style="text-decoration:none">Jul-Aug-Sept</a></div>
              <div class="subheadings">
                <a href="https://docs.capillarytech.com/docs/july-august-september21#insights" style="text-decoration:none">Insights+</a>
                <a href="https://docs.capillarytech.com/docs/july-august-september21#engage" style="text-decoration:none">Engage+</a>
                <a href="https://docs.capillarytech.com/docs/july-august-september21#capillary-data-platform" style="text-decoration:none">CDP</a>
              </div>
            </div>
            <div class="grid-item">
              <div class="period"><a href="https://docs.capillarytech.com/docs/october-november-december21" style="text-decoration:none">Oct-Nov-Dec</a></div>
              <div class="subheadings">
                <a href="https://docs.capillarytech.com/docs/october-november-december21#loyalty" style="text-decoration:none">Loyalty+</a>
                <a href="https://docs.capillarytech.com/docs/october-november-december21#engage" style="text-decoration:none">Engage+</a>
                <a href="https://docs.capillarytech.com/docs/october-november-december21#capillary-data-platform" style="text-decoration:none">CDP</a>
              </div>
            </div>
        </div>
      </div>
      <div class="subscribe-box">
        <h2>Get the Latest Updates on Our Releases!</h2>
        <form action="https://formspree.io/f/mgvwbeyd" method="POST">
          <label>
            <input type="email" name="email" required placeholder="Enter your email">
          </label>
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </div>
  </div>
</body>
</html>
`}</HTMLBlock>