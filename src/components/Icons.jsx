function Svg({ className = "h-6 w-6", children, ...props }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

export function CalendarIcon(props) {
  return (
    <Svg {...props}>
      <rect x="3" y="4.5" width="18" height="16" rx="2.5" />
      <path d="M3 9.5h18" />
      <path d="M8 2.5v4M16 2.5v4" />
    </Svg>
  );
}

export function LightbulbIcon(props) {
  return (
    <Svg {...props}>
      <path d="M9 18h6" />
      <path d="M10 21h4" />
      <path d="M12 3a6 6 0 0 0-3.5 10.9c.6.44 1 1.16 1 1.94V16h5v-.16c0-.78.4-1.5 1-1.94A6 6 0 0 0 12 3Z" />
    </Svg>
  );
}

export function TrendingUpIcon(props) {
  return (
    <Svg {...props}>
      <path d="m3 17 6-6 4 4 8-8" />
      <path d="M15 7h6v6" />
    </Svg>
  );
}

export function SparklesIcon(props) {
  return (
    <Svg {...props}>
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4" />
      <path d="m6 6 2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18" />
    </Svg>
  );
}

export function BuildingIcon(props) {
  return (
    <Svg {...props}>
      <rect x="4" y="3" width="16" height="18" rx="1.5" />
      <path d="M9 8h1M14 8h1M9 12h1M14 12h1M9 16h1M14 16h1" />
      <path d="M10 21v-4h4v4" />
    </Svg>
  );
}

export function GamepadIcon(props) {
  return (
    <Svg {...props}>
      <rect x="2.5" y="7.5" width="19" height="10" rx="4" />
      <path d="M7 10v4M5 12h4" />
      <path d="M16 11h.01M18.5 13h.01" />
    </Svg>
  );
}

export function HandshakeIcon(props) {
  return (
    <Svg {...props}>
      <path d="m2 12 4.5-4.5a2 2 0 0 1 2.83 0L11 9" />
      <path d="m22 12-4.5-4.5a2 2 0 0 0-2.83 0L13 9l-2 2 2.5 2.5a1.5 1.5 0 0 0 2.12-2.12" />
      <path d="m9 13 2 2a1.5 1.5 0 0 0 2.12-2.12" />
      <path d="M2 12v6M22 12v6" />
    </Svg>
  );
}

export function ChatIcon(props) {
  return (
    <Svg {...props}>
      <path d="M21 12a7.5 7.5 0 0 1-7.5 7.5c-1.1 0-2.15-.23-3.1-.66L4 20l1.3-4.02A7.4 7.4 0 0 1 4.5 12 7.5 7.5 0 0 1 12 4.5 7.5 7.5 0 0 1 21 12Z" />
    </Svg>
  );
}

export function CheckIcon(props) {
  return (
    <Svg {...props}>
      <path d="M20 6 9 17l-5-5" />
    </Svg>
  );
}

export function CheckCircleIcon(props) {
  return (
    <Svg {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="m8.5 12.5 2.5 2.5 4.5-5" />
    </Svg>
  );
}

export function InstagramIcon(props) {
  return (
    <Svg {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <path d="M17.5 6.5h.01" />
    </Svg>
  );
}

export function TikTokIcon(props) {
  return (
    <Svg {...props}>
      <path d="M14 3v10.5a3 3 0 1 1-3-3" />
      <path d="M14 3a5 5 0 0 0 5 5" />
    </Svg>
  );
}

export function LinkedInIcon(props) {
  return (
    <Svg {...props}>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M7.5 10.5v6M7.5 7.5h.01" />
      <path d="M11.5 16.5v-4a2 2 0 0 1 4 0v4M11.5 12.5v4" />
    </Svg>
  );
}

export function MailIcon(props) {
  return (
    <Svg {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="m4 7 8 6 8-6" />
    </Svg>
  );
}

export function WhatsAppIcon(props) {
  return (
    <Svg {...props}>
      <path d="M12 21a9 9 0 1 0-7.8-4.5L3 21l4.6-1.2A9 9 0 0 0 12 21Z" />
      <path d="M8.5 9.5c0 3.5 2.5 6 6 6 .8 0 .8-1.5.3-2s-1.3-.8-1.7-.4l-.4.4c-.9-.3-2.2-1.6-2.5-2.5l.4-.4c.4-.4.1-1.2-.4-1.7s-2-.5-2 .3Z" />
    </Svg>
  );
}
