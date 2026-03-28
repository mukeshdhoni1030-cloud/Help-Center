export default function Icon({ name, className = "" }) {
  const common = `h-7 w-7 ${className}`;

  switch (name) {
    case "user":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common}>
          <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" fill="currentColor" />
          <path d="M4 20a8 8 0 0 1 16 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case "shield":
    case "shieldLarge":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common}>
          <path d="M12 3 5 6v5c0 5 3.4 8.9 7 10 3.6-1.1 7-5 7-10V6l-7-3Z" stroke="currentColor" strokeWidth="2" />
          <path d="m9.5 12 1.7 1.7 3.3-3.7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "chat":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common}>
          <path d="M5 6h14v9H8l-3 3V6Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
          <path d="M8 10h8M8 13h5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case "alert":
    case "warn":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common}>
          <path d="M12 4 3 20h18L12 4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
          <path d="M12 9v5M12 17h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case "heart":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common}>
          <path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 5.5-7 10-7 10Z" fill="currentColor" />
        </svg>
      );
    case "smile":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common}>
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
          <path d="M8.5 14.5c1 1.3 2.2 2 3.5 2 1.3 0 2.5-.7 3.5-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <circle cx="9" cy="10" r="1" fill="currentColor" />
          <circle cx="15" cy="10" r="1" fill="currentColor" />
        </svg>
      );
    case "tools":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common}>
          <path d="m14 7 3-3 3 3-3 3-3-3ZM4 20l7-7M9 9l6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case "spark":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common}>
          <path d="m12 3 1.7 5.3L19 10l-5.3 1.7L12 17l-1.7-5.3L5 10l5.3-1.7L12 3Z" fill="currentColor" />
        </svg>
      );
    case "phone":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common}>
          <path d="M7 4h3l1 4-2 1a14 14 0 0 0 6 6l1-2 4 1v3a2 2 0 0 1-2 2C10.3 19 5 13.7 5 7a2 2 0 0 1 2-2Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        </svg>
      );
    case "help":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common}>
          <path d="M9.1 9a3 3 0 1 1 5.8 1c-.5 1.1-1.8 1.7-2.4 2.2-.6.5-.7.9-.7 1.8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <circle cx="12" cy="18" r="1" fill="currentColor" />
          <path d="M12 22c5.5 0 10-4.5 10-10S17.5 2 12 2 2 6.5 2 12s4.5 10 10 10Z" stroke="currentColor" strokeWidth="2" />
        </svg>
      );
    case "wifi":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common}>
          <path d="M4.5 9.5a12 12 0 0 1 15 0M7.5 12.5a8 8 0 0 1 9 0M10.5 15.5a4 4 0 0 1 3 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <circle cx="12" cy="19" r="1.5" fill="currentColor" />
        </svg>
      );
    case "login":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common}>
          <path d="M10 17 15 12 10 7M15 12H4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M20 4v16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case "bell":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common}>
          <path d="M6 17h12l-1.5-2.5V10a4.5 4.5 0 1 0-9 0v4.5L6 17Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
          <path d="M10 20a2 2 0 0 0 4 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case "grid":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common}>
          <rect x="4" y="4" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="2" />
          <rect x="14" y="4" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="2" />
          <rect x="4" y="14" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="2" />
          <rect x="14" y="14" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="2" />
        </svg>
      );
    case "mic":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common}>
          <rect x="9" y="3" width="6" height="11" rx="3" stroke="currentColor" strokeWidth="2" />
          <path d="M6 11a6 6 0 0 0 12 0M12 17v4M9 21h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case "message":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common}>
          <path d="M4 5h16v11H8l-4 3V5Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
          <circle cx="9" cy="10.5" r="1" fill="currentColor" />
          <circle cx="12" cy="10.5" r="1" fill="currentColor" />
          <circle cx="15" cy="10.5" r="1" fill="currentColor" />
        </svg>
      );
    case "refresh":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common}>
          <path d="M20 5v5h-5M4 19v-5h5M6.5 9A7 7 0 0 1 18 7M17.5 15A7 7 0 0 1 6 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    default:
      return null;
  }
}
