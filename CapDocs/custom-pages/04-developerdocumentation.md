---
title: Developer Documentation
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
    <title>Documentation Hub</title>
    <style>
    body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell;
    }

    body::before {
        content: '';
        position: absolute;
        top: -20px;
        left: -20px;
        right: -20px;
        bottom: -20px;
        background: url('https://source.unsplash.com/random/1600x900/?code,technology') center/cover;
        filter: blur(20px);
        opacity: 0.15;
        z-index: -1;
    }

    .grid-container {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        max-width: 800px;
        width: 100%;
      margin-top: 10vh; /* Pushes the whole grid down */
    }

    .button-row {
        display: flex;
        gap: 1.5rem;
        justify-content: center;
    }

    .doc-button {
        flex: 1;
        min-width: 300px;
        padding: 1.5rem;
        border-radius: 12px;
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
        background: rgba(255, 255, 255, 0.7);
        border: 1px solid rgba(0, 0, 0, 0.1);
        transition: all 0.3s ease;
        cursor: pointer;
        text-decoration: none;
        color: #1d1d1f;
        display: flex;
        align-items: center;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
    }

    .doc-button:hover {
        transform: translateY(-4px);
        background: rgba(255, 255, 255, 0.85);
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        border-color: rgba(0, 122, 255, 0.3);
    }

    .button-icon {
    width: 25px;
    height: 25px;
    object-fit: contain;
    margin-right: 5rem; /* Add this line to create space after the icon */
}

    .button-text {
    font-size: 1.4rem;
    font-weight: 400;
    flex-grow: 1;
    padding: 1rem
}
</style>
</head>
<body>
    <div class="grid-container">
        <div class="button-row">
            <a href="https://docs.capillarytech.com/docs/extension" class="doc-button">
                <img src="https://cdn-icons-png.flaticon.com/128/7026/7026694.png" class="button-icon" alt="Extension">
                <span class="button-text">Extension</span>
            </a>
            <a href="https://docs.capillarytech.com/docs/dev-console" class="doc-button">
                <img src="https://cdn-icons-png.flaticon.com/128/7838/7838138.png" class="button-icon" alt="Dev Console">
                <span class="button-text">Dev Console</span>
            </a>
        </div>
        <div class="button-row">
            <a href="https://docs.capillarytech.com/docs/vulcan" class="doc-button">
                <img src="https://cdn-icons-png.flaticon.com/128/1146/1146747.png" class="button-icon" alt="Vulcan">
                <span class="button-text">Vulcan</span>
            </a>
            <a href="https://docs.capillarytech.com/docs/sdks" class="doc-button">
                <img src="https://cdn-icons-png.flaticon.com/128/16627/16627455.png" class="button-icon" alt="SDKs">
                <span class="button-text">SDKs</span>
            </a>
        </div>
    </div>
</body>
</html>
`}</HTMLBlock>
