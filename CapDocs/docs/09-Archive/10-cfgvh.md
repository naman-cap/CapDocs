---
title: cfgvh
deprecated: false
hidden: true
metadata:
  robots: index
---
<HTMLBlock>{`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Flutter SDK Documentation</title>
    <style>
    body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell;
        line-height: 1.6;
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

    .section-title {
        font-size: 24px;
        font-weight: 600;
        margin-bottom: 0rem;
        color: #1d1d1f;
        text-shadow: 0 1px 2px rgba(0,
    0,
    0,
    0.05);
    }

    .nav-list {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    .nav-item {
        padding: 12px 16px;
        border-radius: 8px;
        margin: 8px 0;
        transition: all 0.2s ease;
        background-color: rgba(240,
    240,
    240,
    0.4);
         border: 1px solid rgba(60, 60, 60, 0.3); /* Adjusted opacity */
        backdrop-filter: blur(8px);
        -webkit-backdrop-filter: blur(8px);
        box-shadow: 0 2px 8px rgba(0,
    0,
    0,
    0.05);
        position: relative;
        transform: translateY(20px);
        opacity: 0;
        animation: slideInUp 0.4s ease-out forwards;
    }

    .nav-item:nth-child(1) { animation-delay: 0.2s; }
    .nav-item:nth-child(2) { animation-delay: 0.4s; }
    .nav-item:nth-child(3) { animation-delay: 0.6s; }
    .nav-item:nth-child(4) { animation-delay: 0.8s; }
    .nav-item:nth-child(5) { animation-delay: 1.0s; }
    .nav-item:nth-child(6) { animation-delay: 1.2s; }
    .nav-item:nth-child(7) { animation-delay: 1.4s; }
    .nav-item:nth-child(8) { animation-delay: 1.6s; }
    .nav-item:nth-child(9) { animation-delay: 1.8s; }
    .nav-item:nth-child(10) { animation-delay: 2.0s; }
    .nav-item:nth-child(11) { animation-delay: 2.2s; }
    .nav-item:nth-child(12) { animation-delay: 2.4s; }
    .nav-item:nth-child(13) { animation-delay: 2.6s; }
    .nav-item:nth-child(14) { animation-delay: 2.8s; }
    .nav-item:nth-child(15) { animation-delay: 3.0s; }

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

    .nav-item:hover {
        background-color: rgba(0, 66, 242, 0.1);
        transform: translateX(4px);
        border-color: rgba(0, 122, 255, 0.9);
    }

    .nav-link {
        text-decoration: none;
        color: #1d1d1f;
        display: block;
        font-size: 16px;
    }

    .nav-link:hover {
        color: #007AFF;
    }
    </style>
</head>
<body>
    <div class="doc-container">
        <ul class="nav-list">
            <!-- Replace # with actual URLs -->
            <li class="nav-item">
                <a href="https://docs.capillarytech.com/docs/introduction-engagement-channels#/" class="nav-link">Introduction</a>
            </li>
            <li class="nav-item">
                <a href="https://docs.capillarytech.com/docs/sms#/" class="nav-link">SMS</a>
            </li>
            <li class="nav-item">
                <a href="https://docs.capillarytech.com/docs/email#/" class="nav-link">Email</a>
            </li>
            <li class="nav-item">
                <a href="https://docs.capillarytech.com/docs/call-task#/" class="nav-link">Call Task</a>
            </li>
            <li class="nav-item">
                <a href="https://docs.capillarytech.com/docs/whatsapp#/" class="nav-link">WhatsApp</a>
            </li>
            <li class="nav-item">
                <a href="https://docs.capillarytech.com/docs/wechat#/" class="nav-link">Wechat</a>
            </li>
            <li class="nav-item">
                <a href="https://docs.capillarytech.com/docs/viber#/" class="nav-link">Viber</a>
            </li>
            <li class="nav-item">
                <a href="https://docs.capillarytech.com/docs/push-notifications#/" class="nav-link">Push Notifications</a>
            </li>
            <li class="nav-item">
                <a href="https://docs.capillarytech.com/docs/rcs#/" class="nav-link">RCS</a>
            </li>
            <li class="nav-item">
                <a href="https://docs.capillarytech.com/docs/zalo#/" class="nav-link">Zalo</a>
            </li>
            <li class="nav-item">
                <a href="https://docs.capillarytech.com/docs/in-app-message-#/" class="nav-link">In-app Message</a>
            </li>
            <li class="nav-item">
                <a href="https://docs.capillarytech.com/docs/line#/" class="nav-link">LINE</a>
            </li>
            <li class="nav-item">
                <a href="https://docs.capillarytech.com/docs/configure-communication-channel-settings#/" class="nav-link">Configure Engagement Channel Settings</a>
            </li>
            <li class="nav-item">
                <a href="https://docs.capillarytech.com/docs/channel-priority#/" class="nav-link">Channel priority</a>
            </li>
            <li class="nav-item">
                <a href="https://docs.capillarytech.com/docs/supported-labels-for-engagement-channels#/" class="nav-link">Supported Labels for Engagement Channels</a>
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

        document.querySelectorAll('.nav-item').forEach(item => {
            item.addEventListener('click', (e) => {
                const ripple = document.createElement('span');
                const rect = item.getBoundingClientRect();
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
                item.appendChild(ripple);
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