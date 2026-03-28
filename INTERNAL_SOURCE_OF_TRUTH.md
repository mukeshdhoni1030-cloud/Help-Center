# Miyraa Help Center: Internal Source of Truth

## Product Vision
Miyraa Help is not a generic support portal. It is an emotional-first guidance system that helps users solve issues within seconds, while preserving clarity, calmness, and intelligence in every interaction.

Core principles:
- Help must be found within 2 to 3 clicks.
- Language must feel human, warm, and guided.
- Visual design must feel premium, global, and future-ready.
- Navigation must remove confusion instead of shifting effort to the user.

## Information Architecture
### Primary hierarchy
1. Help Center Homepage
2. Category Views
3. Article Pages
4. Support Escalation

### Homepage structure
- Global search bar with intent-aware placeholder language
- AI-style suggested help recommendations
- Category grid
- Popular questions
- Quick access links

### Mandatory categories
- Account & Login
- Profile Management
- Posting & Interaction
- Emotional Features
- Privacy & Security
- Safety & Reporting
- Troubleshooting

### Article page structure
- Category tag
- Reading-time indicator
- Title
- Clear explanation
- Step-by-step solution
- Related articles
- "Was this helpful?" interaction
- "Still stuck?" support escalation

### Navigation flow
1. User lands on homepage.
2. User searches, selects an intent chip, or enters through a category.
3. System suggests the best article match.
4. User reads a focused article with minimal distraction.
5. User either resolves the issue, explores related content, or escalates to support.

## Design System
### Color system
Dark mode:
- Background base: `#0A0A14`
- Elevated dark surface: `#15162D`
- Highlight lavender: `#B8A9FF`
- Highlight coral: `#FF907A`
- Highlight amber: `#FFCB7A`
- Glow treatment: soft neon edge and ambient blur fields

Bright mode:
- Background base: `#FFFFFF`
- Soft background tone: `#FFF9F5`
- Mist tone: `#F7F2FF`
- Shared accents: lavender, coral, amber
- Shadow treatment: light, soft, premium

Gradient direction:
- Dark: violet-led atmospheric gradients with coral edge warmth
- Bright: lavender to coral to amber for emotionally calm premium surfaces

### Typography system
- Display font: `Cormorant Garamond`
- Body/UI font: `Manrope`

Hierarchy:
- H1: emotional, spacious, premium headline
- H2: section-level orientation
- H3: component or card title
- Body large: onboarding, explanations, hero messaging
- Body standard: article guidance and system text
- Label/caps: navigation signposts, tags, and metadata

### Spacing system
- Outer section rhythm: 48px to 64px
- Card padding: 20px to 24px
- Internal element spacing: 12px to 20px
- Corner radius strategy: large rounded containers for calmness and softness

## Component Library
### Buttons
- Primary gradient CTA
- Secondary glass button
- Quiet chip button
- Feedback pill buttons

### Cards
- Category card
- Popular question card
- Related article card
- Recommendation card
- Support escalation card

### Inputs
- Global search input with intent-aware placeholder
- Suggestions dropdown

### Layouts
- Hero split layout
- Category grid
- Two-column article layout
- Responsive stacked mobile layout

## Interaction Patterns
### Search
- Real-time intent-based suggestion filtering
- Enter key and button click both trigger direct article routing
- Empty-result state gives simplified search guidance

### Motion
- Smooth scrolling
- Soft reveal animation on load
- Hover lift on cards and buttons
- Ambient floating and glow effects in hero background

### Feedback
- "Was this helpful?" updates with empathetic language
- Support CTA carries article context into the support summary

## Reference Mapping
Instagram Help Center reference influenced:
- broad help-center structure
- category-style organization
- production-style article grouping

WhatsApp Help Center reference influenced:
- concise step-by-step language
- minimal friction interaction model
- straightforward support logic

## Miyraa Gita Alignment
Tone and philosophy alignment:
- calm before clever
- emotional clarity over feature overload
- guidance over instruction dumping
- premium softness instead of mechanical utility

Every screen should communicate:
- clarity
- calmness
- intelligence
- emotional reassurance

## Unified Design Language Across Parts
This implementation keeps a single design language across homepage, discovery modules, and article surfaces through:
- consistent gradients
- shared typography
- repeated surface treatments
- identical spacing logic
- common interaction states

## Team Alignment Notes
Before execution, the team should align on the following:
- Miyraa is an emotional-first platform, not a traditional social product.
- Generic support-center patterns must be adapted to Miyraa identity before use.
- Reusable components should be built first.
- Frontend structure must remain ready for future backend and API integration.

## Technical Direction
Current implementation stack:
- HTML for structure
- Tailwind CSS for styling and consistency
- JavaScript for search logic, article rendering, feedback, and support interactions

## Future Integration Readiness
- Article content is stored in a structured JavaScript object model and can later be replaced by API responses.
- Search logic is currently local and can be upgraded to backend search or intent ranking.
- Support actions currently simulate escalation and can later connect to real chat or ticket systems.
