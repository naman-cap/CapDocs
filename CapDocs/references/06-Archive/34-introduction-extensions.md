---
title: Introduction
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
Capillary Extension Platforms are a family of **No/Low Code Tools** and **Frameworks** that enable developers to extend core product capabilities. Extensions let you incorporate your business logic into an API or UI, enhancing the capabilities of existing Capillary APIs and UI components. This customization helps meet brand-specific requirements. There are different types of Extensions, which cater to varying types of use cases. 

# Types of Extensions

Capillary has two types of extensions:

<HTMLBlock>{`
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<style>
  .grid {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
  }

  .tile {
    flex: 1;
    min-width: 200px; /* Adjusted for better text fitting */
    background-color: #f0f0f0;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    transition: background-color 0.3s ease, transform 0.3s ease;
    box-sizing: border-box; /* Ensures padding does not affect box width */
    position: relative; /* Ensure position for relative positioning of text */
    border: 1px solid #ccc; /* Add border to the tile */
    overflow: hidden; /* Ensure the background color covers the content */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Subtle drop shadow */
  }

  .tile a {
    display: block;
    text-decoration: none !important; /* Force removal of underline */
    color: inherit; /* Text color inherits from its parent */
    height: 100%;
    width: 100%;
    position: relative; /* Ensure the link covers the entire tile */
    z-index: 1; /* Ensure the link is below the text */
  }

  .tile:hover {
    background-color: #f0f0f0; /* Default background color for non-hover state */
    transform: scale(1.05);
  }

  /* Specific hover background colors for each tile */
  .tile[data-tile="api-extensions"]:hover {
    background-color: rgba(100, 149, 237, 0.4);
  }

  .tile[data-tile="ui-extensions"]:hover {
    background-color: rgba(255, 153, 102, 0.4);
  }

  .tile p {
    margin: 0; /* Removes default margin for paragraphs */
    line-height: 1.4; /* Improves readability */
    z-index: 2; /* Ensure text is above the link */
    position: relative; /* Ensure text is above the link */
    text-align: left; /* Left-align paragraph text */
  }

  .tile span {
    display: block;
    font-weight: bold;
    font-size: 1.3em; /* Adjust font size here */
    text-align: left;
    margin-bottom: 10px;
  }
</style>
</head>
<body>

<div class="grid -col-2">
  <div class="tile" data-tile="api-extensions">
    <a href="https://docs.capillarytech.com/reference/api-extension-doc">
      <span>API Extensions</span>
      <p>Enhances and chains existing APIs to develop applications that meet brand-specific requirements.</p>
    </a>
  </div>
  <div class="tile" data-tile="ui-extensions">
    <a href="https://docs.capillarytech.com/reference/ui-extension">
      <span>UI Extensions</span>
      <p>Enhances the capabilities of existing UIs, such as Member Care to meet brand-specific requirements.</p>
    </a>
  </div>
</div>

</body>
</html>
`}</HTMLBlock>
