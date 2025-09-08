---
title: hdghs
deprecated: false
hidden: true
metadata:
  robots: index
---
<HTMLBlock>{`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Flutter SDK Documentation</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      min-height: 100vh;
      padding: 2rem;
      position: relative;
      overflow-x: hidden;
    }

    body::before {
      content: '';
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
                  radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%);
      animation: pulse 4s ease-in-out infinite alternate;
      pointer-events: none;
      z-index: -1;
    }

    @keyframes pulse {
      0% { opacity: 0.3; transform: scale(1); }
      100% { opacity: 0.6; transform: scale(1.1); }
    }

    .doc-container {
      width: 100%;
      max-width: none;
    }

    .nav-list {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    }

    .nav-item {
      position: relative;
      transform: translateY(20px);
      opacity: 0;
      animation: slideInUp 0.8s ease-out forwards;
      width: 100%;
      max-width: 500px; /* Controlled box width */
    }

    .nav-item:nth-child(1) { animation-delay: 0.2s; }
    .nav-item:nth-child(2) { animation-delay: 0.4s; }
    .nav-item:nth-child(3) { animation-delay: 0.6s; }

    .nav-link {
      display: flex;
      align-items: center;
      padding: 12px 16px;
      text-decoration: none;
      font-size: 16px;
      font-weight: 500;
      color: #1d1d1f !important;
      background-color: rgba(255, 255, 255, 0.9);
      border: 1px solid rgba(60, 60, 60, 0.2);
      border-radius: 8px;
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
      transition: all 0.25s ease;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
      width: 100%;
    }

    .nav-link:hover {
      background-color: rgba(0, 66, 242, 0.1);
      transform: translateX(4px);
      border-color: rgba(0, 122, 255, 0.9);
      color: #007aff !important;
    }

    .nav-icon {
      width: 20px;
      height: 20px;
      margin-right: 10px;
      stroke: currentColor;
      opacity: 0.8;
      transition: all 0.3s ease;
    }

    .nav-link:hover .nav-icon {
      opacity: 1;
      transform: scale(1.05);
    }

    .nav-title {
      font-size: 16px;
      font-weight: 500;
    }

    @keyframes slideInUp {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @media (max-width: 768px) {
      .nav-item {
        max-width: 100%;
      }

      .nav-link {
        font-size: 15px;
        padding: 12px 14px;
      }
    }
  </style>
</head>
<body>
  <div class="doc-container">
    <ul class="nav-list">
      <li class="nav-item">
        <a href="https://docs.capillarytech.com/docs/labels#/" class="nav-link">
          <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/>
            <line x1="7" y1="7" x2="7.01" y2="7"/>
          </svg>
          <span class="nav-title">Labels</span>
        </a>
      </li>

      <li class="nav-item">
        <a href="https://docs.capillarytech.com/docs/add-dynamic-content-using-liquid#/" class="nav-link">
          <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 2L2 7v10c0 5.55 3.84 10 9 11 5.16-1 9-5.45 9-11V7l-10-5z"/>
            <path d="M8 12l2 2 4-4"/>
          </svg>
          <span class="nav-title">Dynamic Content with Liquid</span>
        </a>
      </li>

      <li class="nav-item">
        <a href="https://docs.capillarytech.com/docs/add-dynamic-content-using-custom-fields#/" class="nav-link">
          <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="3"/>
            <path d="M12 1v6m0 6v6m11-7h-6m-6 0H1"/>
          </svg>
          <span class="nav-title">Custom Fields Integration</span>
        </a>
      </li>
    </ul>
  </div>

  <script>
    document.addEventListener('mousemove', (e) => {
      const cursor = document.createElement('div');
      cursor.style.position = 'fixed';
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
      cursor.style.width = '4px';
      cursor.style.height = '4px';
      cursor.style.background = 'rgba(255, 255, 255, 0.4)';
      cursor.style.borderRadius = '50%';
      cursor.style.pointerEvents = 'none';
      cursor.style.zIndex = '9999';
      cursor.style.animation = 'fadeOut 1s ease-out forwards';
      document.body.appendChild(cursor);
      setTimeout(() => cursor.remove(), 1000);
    });

    const style = document.createElement('style');
    style.textContent = \`
      @keyframes fadeOut {
        0% { opacity: 1; transform: scale(1); }
        100% { opacity: 0; transform: scale(0); }
      }
    \`;
    document.head.appendChild(style);

    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', (e) => {
        const ripple = document.createElement('span');
        const rect = link.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        ripple.style.position = 'absolute';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.style.width = size + 'px';
        ripple.style.height = size + 'px';
        ripple.style.background = 'rgba(255, 255, 255, 0.3)';
        ripple.style.borderRadius = '50%';
        ripple.style.transform = 'scale(0)';
        ripple.style.animation = 'ripple 0.6s ease-out';
        ripple.style.pointerEvents = 'none';
        link.appendChild(ripple);
        setTimeout(() => ripple.remove(), 600);
      });
    });

    const rippleStyle = document.createElement('style');
    rippleStyle.textContent = \`
      @keyframes ripple {
        0% { transform: scale(0); opacity: 1; }
        100% { transform: scale(2); opacity: 0; }
      }
    \`;
    document.head.appendChild(rippleStyle);
  </script>
</body>
</html>
`}</HTMLBlock>