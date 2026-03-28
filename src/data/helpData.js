// Centralized mock content keeps page logic separate from layout components
// and makes the routed pages easy to extend or swap to API data later.
export const homeData = {
  title: "How can we assist you?",
  searchPlaceholder: "Search for answers...",
  categories: [
    { title: "Account & Login", slug: "account-login", icon: "user" },
    { title: "Privacy & Security", slug: "privacy-security", icon: "shield" },
    { title: "Posting & Interaction", slug: "posting-interaction", icon: "chat" },
    { title: "Safety & Reporting", slug: "safety-reporting", icon: "alert" },
    { title: "Profile Management", slug: "profile-management", icon: "heart" },
    { title: "Emotional Features", slug: "emotional-features", icon: "smile" },
    { title: "Troubleshooting", slug: "troubleshooting", icon: "tools" }
  ],
  popularQuestions: [
    { title: "How do I reset my password?", to: "/account-login" },
    { title: "Managing your privacy settings", to: "/privacy-security" },
    { title: "How to create a new post", to: "/posting-interaction" },
    { title: "Report a problem or issue", to: "/safety-reporting" }
  ],
  quickLinks: [
    { title: "My Account", to: "/account-login" },
    { title: "Safety Tips", to: "/safety-reporting" },
    { title: "Contact Support", to: "/contact-support" },
    { title: "Guides & Tutorials", to: "/guides-tutorials" }
  ],
  aiSuggest: {
    title: "Need help with account recovery?",
    description: "Learn how to get back into your account easily.",
    buttonLabel: "Get Started",
    to: "/account-login"
  }
};

export const categoryPages = [
  {
    slug: "account-login",
    title: "Account & Login",
    headingClassName: "gradient-title",
    description: "Learn how to recover access, update account details, and keep your sign-in experience smooth.",
    searchPlaceholder: "Search within Account & Login...",
    backTo: "/",
    cards: [
      { title: "Reset Your Password", description: "How to change or reset your password.", to: "/account-login", accent: "violet" },
      { title: "Trouble Logging In?", description: "Steps to take if you can't access your account.", to: "/account-login", accent: "amber" },
      { title: "Update Account Info", description: "How to edit your profile and account details.", to: "/profile-management", accent: "pink" },
      { title: "Two-Factor Authentication", description: "Setting up and managing 2FA for your account.", to: "/privacy-security", accent: "amber" }
    ],
    highlight: { text: "Looks like you're trying to recover your account", buttonLabel: "Get help instantly", to: "/contact-support" },
    support: {
      title: "Still need assistance?",
      description: "We're here for you. Contact our support team for further help.",
      buttonLabel: "Contact Support",
      to: "/contact-support"
    }
  },
  {
    slug: "privacy-security",
    title: "Privacy & Security",
    headingClassName: "gradient-title",
    description: "Learn how we protect your data, manage your privacy settings, and keep your account secure.",
    searchPlaceholder: "Search Privacy & Security articles...",
    // The source image uses a bespoke shield illustration. This route uses
    // a reusable vector-style icon block as the closest production-safe match.
    heroIcon: "shieldLarge",
    sectionTitle: "Browse Articles",
    cards: [
      { title: "Privacy Settings", description: "Control who can see your content and how your data is used.", to: "/privacy-security", accent: "violet" },
      { title: "Account Security", description: "Best practices to keep your account safe and secure.", to: "/privacy-security", accent: "pink" },
      { title: "Two-Factor Authentication", description: "Add an extra layer of protection to your account.", to: "/account-login", accent: "violet" },
      { title: "Your Data & Privacy", description: "Manage, download, or request deletion of your data.", to: "/privacy-security", accent: "amber" }
    ],
    supportPanel: {
      title: "Still have questions?",
      description: "Our support team is here to help you with any privacy or security concerns.",
      buttonLabel: "Contact Support",
      subText: "We typically reply within 24 hours",
      to: "/contact-support",
      visual: "orb"
    }
  },
  {
    slug: "posting-interaction",
    title: "Posting & Interaction",
    headingClassName: "gradient-title",
    description: "Learn the best tips for posting and engaging with others.",
    searchPlaceholder: "Search posting help...",
    cards: [
      { title: "How to create a post", description: "Step-by-step guide", to: "/posting-interaction", accent: "violet" },
      { title: "Why is my post not visible?", description: "Troubleshooting tips", to: "/troubleshooting", accent: "amber" },
      { title: "How to interact with others?", description: "Engagement strategies", to: "/posting-interaction", accent: "pink" },
      { title: "Managing comments & replies", description: "Control your conversations", to: "/posting-interaction", accent: "amber" }
    ],
    guideBanner: { icon: "spark", text: "Looks like you're trying to post something...", buttonLabel: "Guide me", to: "/posting-interaction" },
    footerHelp: { text: "Still need help? Reach out to us for further assistance." }
  },
  {
    slug: "safety-reporting",
    title: "Safety & Reporting",
    headingClassName: "gradient-title",
    description: "Learn how to protect yourself and report any issues.",
    searchPlaceholder: "Search safety help...",
    cards: [
      { title: "How to block or mute users", description: "Keep unwanted users away", to: "/safety-reporting", accent: "blue" },
      { title: "How to report abusive content", description: "Guidelines for reporting issues", to: "/safety-reporting", accent: "pink" },
      { title: "Avoiding scams & phishing", description: "Tips to stay safe from threats", to: "/privacy-security", accent: "blue" },
      { title: "Understanding privacy settings", description: "Learn to control your data", to: "/privacy-security", accent: "amber" }
    ],
    guideBanner: { icon: "warn", text: "Need to report an issue or user? Let us know immediately!", buttonLabel: "Report a Problem", to: "/contact-support" },
    footerHelp: { text: "Still need help? Reach out to us for further assistance." }
  },
  {
    slug: "profile-management",
    title: "Profile Management",
    headingClassName: "text-white",
    description: "Learn how to manage and personalize your account settings. Find out how to edit your profile, change preferences, and update privacy options.",
    searchPlaceholder: "Search profile help...",
    themeVariant: "dust",
    cards: [
      { title: "Edit Profile Information", description: "Change your name, bio, and profile picture.", to: "/profile-management", accent: "blue" },
      { title: "Change Username or Email", description: "Update your username and email address.", to: "/profile-management", accent: "pink" },
      { title: "Manage Privacy & Visibility", description: "Set who can view your profile and posts.", to: "/privacy-security", accent: "blue" },
      { title: "Notifications & Preferences", description: "Adjust your alert and notification settings.", to: "/profile-management", accent: "amber" },
      { title: "Deactivate Your Account", description: "How to deactivate or delete your account.", to: "/account-login", accent: "amber", wide: true }
    ],
    guideBanner: { text: "Looks like you want to update your profile.", subText: "Need help finding the right settings?", buttonLabel: "Guide me", to: "/profile-management" },
    supportPanel: { title: "We're here for you", description: "If you need further assistance, our support team is ready to help.", buttonLabel: "Contact Support", to: "/contact-support", visual: "supportAgent" }
  },
  {
    slug: "emotional-features",
    title: "Emotional Features",
    headingClassName: "gradient-script font-script",
    description: "Understand and manage your emotional interactions.",
    searchPlaceholder: "Search emotional help...",
    topBrand: true,
    cards: [
      { title: "Express your feelings", description: "Find ways to share your reactions and moods.", to: "/emotional-features", accent: "blue" },
      { title: "Understanding emotional insights", description: "Learn about your emotional patterns and insights.", to: "/emotional-features", accent: "amber" },
      { title: "Managing emotional visibility", description: "Control how your emotional reactions are seen by others.", to: "/privacy-security", accent: "pink" },
      { title: "Connecting with others emotionally", description: "Build better emotional connections with your friends and community.", to: "/emotional-features", accent: "violet" },
      { title: "Handling sensitive interactions", description: "Guidance for navigating delicate emotional situations.", to: "/safety-reporting", accent: "pink", wide: true }
    ],
    guideBanner: { visual: "avatar", text: "Looks like you want to express something.", subText: "Let's get you started with that.", buttonLabel: "Guide me", to: "/emotional-features" },
    bottomSupportIcons: [
      { label: "Call Us", to: "/contact-support", icon: "phone" },
      { label: "Help Center", to: "/", icon: "help" }
    ]
  },
  {
    slug: "troubleshooting",
    title: "Troubleshooting",
    headingClassName: "gradient-title",
    description: "Find solutions for technical issues and common problems.",
    searchPlaceholder: "Search troubleshooting help...",
    cards: [
      { title: "Connection Issues", description: "Fix network and connectivity problems.", to: "/troubleshooting", accent: "blue", icon: "wifi" },
      { title: "Login Problems", description: "Trouble signing in to your account?", to: "/account-login", accent: "amber", icon: "login" },
      { title: "Notifications Not Working", description: "Resolve missing or delayed alerts.", to: "/profile-management", accent: "blue", icon: "bell" },
      { title: "App Performance", description: "Fix slow loading or crashes.", to: "/troubleshooting", accent: "amber", icon: "grid" },
      { title: "Voice & Audio Issues", description: "Resolve problems with voice messages and calls.", to: "/troubleshooting", accent: "violet", icon: "mic" },
      { title: "Message & Media Errors", description: "Fix issues sending or viewing messages and files.", to: "/posting-interaction", accent: "amber", icon: "message" },
      { title: "Updates & Maintenance", description: "Stay informed about the latest updates and fixes.", to: "/troubleshooting", accent: "pink", icon: "refresh", wide: true }
    ],
    guideBanner: { visual: "avatar", text: "Looks like you're facing an issue.", subText: "Let me help you find the right solution.", buttonLabel: "Guide me", to: "/troubleshooting" },
    bottomSupportIcons: [
      { label: "Call Us", to: "/contact-support", icon: "phone" },
      { label: "Help Center", to: "/", icon: "help" }
    ]
  }
];

export const quickLinkPages = [
  {
    slug: "contact-support",
    title: "Contact Support",
    description: "Reach Miyraa support for guided help, emotional-first assistance, and issue resolution.",
    buttonLabel: "Back to Help Center",
    buttonTo: "/"
  },
  {
    slug: "guides-tutorials",
    title: "Guides & Tutorials",
    description: "Explore guided walkthroughs and practical support flows for the Miyraa product experience.",
    buttonLabel: "Open Help Center",
    buttonTo: "/"
  }
];
