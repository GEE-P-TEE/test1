# Promptables Generated Content

Generated on: 2025-08-30 19:04:48

```markdown
# Design Guidelines for Gwapo Mango Tours

## 1. General Design Overview
**Purpose:** A tourism landing page that helps Filipino and international tourists experience Guimaras' world-famous mangoes through guided farm tours, featuring a seamless booking system with real-time availability.
**Tone & Personality:** Tropical, vibrant, friendly, inviting, and trustworthy.
**User Goals:** Easily discover tour information, understand the itinerary, check availability, and complete booking with confidence.

### 1.1 Core Design Principles
- Clarity: Information must be immediately understandable and scannable
- Vibrant Engagement: Design should evoke the tropical, joyful experience of the tour
- Trust & Reliability: UI must communicate professionalism and security, especially for payments
- Mobile-First Simplicity: Optimized for mobile users with minimal friction

## 2. Color Scheme
**Primary:** Mango Orange (#FF8C00) - Used for primary CTAs, key highlights, and interactive elements
**Secondary:** Tropical Green (#228B22) - Used for secondary buttons, success states, and natural elements
**Accent:** Soft Yellow (#FFF9C4) - Used for backgrounds, highlights, and creating warm, sunny atmosphere
**Neutral:** Clean White (#FFFFFF) - Primary background for content areas and cards

## 3. Typography
### 3.1 Font Family
**Primary:** Poppins (Google Fonts)
**Secondary:** Poppins (for consistency, using different weights)

### 3.2 Font Weights & Hierarchy
- **H1:** 2.5rem, 700 - Hero sections and main page titles
- **H2:** 2rem, 600 - Section headers and important subtitles
- **H3:** 1.5rem, 500 - Card titles and smaller headers
- **Body:** 1rem, 400 - Main content and descriptions
- **Buttons/CTA:** 1.1rem, 600 - Clear and prominent action buttons

## 4. UI Components by Page
### Homepage
- **Layout:** Hero section full-width, followed by card grid for features, then booking widget, footer
- **Interactive Elements:** Booking CTA, date selector, navigation menu, interactive cards
- **Color & Behavior:** Orange primary buttons with hover states, green secondary elements, smooth scroll to sections
- **Mobile-First Notes:** Stack cards vertically, hamburger menu, full-width hero image with overlay text

### About Us Page
- **Layout:** Single column with hero image, story section, team grid with bios
- **Interactive Elements:** Team member cards with hover effects, contact links
- **Color & Behavior:** Warm yellow backgrounds, green accents for natural feel
- **Mobile-First Notes:** Stack team members vertically, responsive images

### Tour Details & Itinerary Page
- **Layout:** Vertical timeline with cards for each stop, fixed sidebar with key info
- **Interactive Elements:** Expandable timeline items, interactive map preview
- **Color & Behavior:** Color-coded timeline, smooth scrolling between sections
- **Mobile-First Notes:** Collapse timeline to accordion, sticky booking CTA at bottom

### Booking System
- **Layout:** Multi-step modal/form with progress indicator
- **Interactive Elements:** Date calendar, form validation, payment method selection
- **Color & Behavior:** Clear error states (red), success states (green), disabled dates (gray)
- **Mobile-First Notes:** Full-screen modal, large touch targets, simplified date picker

### Contact Page
- **Layout:** Two-column (form + map/info) on desktop, stacked on mobile
- **Interactive Elements:** Contact form, interactive map, click-to-call/email
- **Color & Behavior:** Subtle animations on form focus, instant validation
- **Mobile-First Notes:** Stack form above map, large touch targets for contact methods

## 5. Mobile UX & Accessibility
- **Navigation:** Hamburger menu with clear hierarchy, sticky bottom navigation on mobile
- **Tap Targets:** Minimum 44px touch targets for all interactive elements
- **Contrast:** AA compliance with primary colors (4.5:1 ratio minimum)
- **Feedback:** Visual feedback on all interactions (button states, form validation, loading states)

## 6. Icons & Visual Style
- **Icon Set:** Rounded, friendly line icons with tropical theme (mango, sun, farm, transportation)
- **Visual Guidelines:** High-quality, bright tropical photography; authentic local images; avoid stock photos; use natural, organic shapes in graphics

## 7. Microinteractions & Animations
- **Transitions:** Smooth fade and slide transitions between pages and states
- **States:** Clear hover, active, and focus states with color shifts and slight elevation
- **Animations:** Subtle loading animations, confirmation animations for bookings, smooth scrolling

## 8. Performance Considerations
- **Optimization:** WebP images with lazy loading, critical CSS inlining, code splitting
- **Offline:** Basic service worker for caching core assets and pages

## 9. Security & Privacy Design
- **Auth Experience:** No traditional auth; clear communication of booking confirmation process
- **Data Safety:** Visual indicators for secure payment (lock icons, SSL badges), clear privacy policy links

### Conclusion
The design must balance vibrant tropical appeal with professional trustworthiness. Mobile experience is paramount with large touch targets and simplified flows. The color scheme should evoke the joyful mango experience while maintaining accessibility standards. The booking process must feel secure and straightforward to maximize conversions.
```

```markdown
# Master Plan: Gwapo Mango Tours

## App Overview & Objectives
- **Purpose:** To provide an effortless booking experience for Guimaras mango farm tours, connecting tourists with authentic local experiences while ensuring reliable operations through a robust booking system.
- **Target Audience:** Filipino domestic tourists, international visitors to the Philippines, day-trippers from Iloilo, and food enthusiasts seeking authentic agricultural experiences.

## Core Features & Functionality
- Interactive tour booking with real-time availability checking
- Multi-step booking form with integrated payment processing
- Automated confirmation and reminder system
- Responsive design optimized for mobile users
- Content management for tour details and team information

## High-Level Technical Stack
- **Frontend:** Next.js 14 (App Router), Tailwind CSS, shadcn/UI components
- **Backend & Database:** Supabase (PostgreSQL database, serverless functions)
- **Authentication:** Guest booking system (no traditional auth required)
- **Payment Processing:** Stripe API with manual GCash/PayMaya options

## Conceptual Data Model
- Tours: Tour details, pricing, capacity
- Bookings: Customer info, dates, payment status, special requests
- Availability: Daily slots with guest count tracking
- Team: Guide profiles and bios

## User Interface Principles
- Mobile-first responsive design with tropical, vibrant aesthetic
- Minimal friction in booking flow with clear progress indicators
- Trust-building elements throughout the user journey

## Security Considerations
- PCI compliance for Stripe payments
- Secure handling of customer PII data
- Protection against overbooking and double bookings

## Development Phases
- **MVP:** Functional booking system with Stripe integration, basic pages
- **V1:** Enhanced UI/UX, GCash/PayMaya integration, email/SMS confirmations
- **V2:** Multi-language support, advanced analytics, referral system

## Potential Challenges & Solutions
- **Payment integration complexity:** Start with Stripe, then add local payment methods
- **Real-time availability management:** Use Supabase real-time subscriptions for accurate counts
- **Mobile performance:** Optimize images and implement lazy loading
```

```markdown
# Implementation Plan

## Phase 1: MVP (2-3 weeks)
1.  Set up Next.js project with Tailwind CSS and shadcn/UI configuration
2.  Configure Supabase project with bookings, availability, and tours tables
3.  Implement basic page structure (Home, About, Tour Details, Contact)
4.  Build booking widget with date selection and basic form
5.  Integrate Stripe payment processing
6.  Implement basic email confirmation system

## Phase 2: V1 Launch (2 weeks)
1.  Enhance UI with complete design system and animations
2.  Add GCash and PayMaya payment options
3.  Implement SMS confirmation system
4.  Add real-time availability checking with Supabase subscriptions
5.  Optimize mobile experience and performance
6.  Implement comprehensive form validation and error handling

## Phase 3: Post-Launch (Ongoing)
1.  Add analytics and booking tracking
2.  Implement multi-language support
3.  Build admin dashboard for booking management
4.  Add customer review system
5.  Implement referral and discount system

## Team & Tools Recommendations
- **Frontend Developer:** Next.js/Tailwind expertise
- **Backend Developer:** Supabase/PostgreSQL experience
- **Designer:** UI/UX focus on mobile and conversion optimization
- **Key Tools:** Vercel for hosting, Stripe for payments, Twilio for SMS, Resend for email
```

```markdown
# Design Guidelines

## Visual Style
- **Primary Font:** Poppins (Google Fonts)
- **Color Palette:**
  - Primary: `#FF8C00` (Mango Orange)
  - Secondary: `#228B22` (Tropical Green)
  - Accent: `#FFF9C4` (Soft Yellow)
  - Background: `#FFFFFF` (White)
- **Layout Approach:** Mobile-first, card-based components with generous spacing

## Accessibility
- **Target Compliance:** WCAG AA
- **Tap Target Size:** Minimum 44px for all interactive elements
- **Color Contrast:** Minimum 4.5:1 for text and interactive elements
- **Screen Reader Support:** Semantic HTML and proper ARIA labels throughout
- **Focus Indicators:** Clear visible focus states for keyboard navigation

## Component Guidelines
- **Buttons:** Rounded corners, clear hierarchy with primary/secondary styles
- **Cards:** Subtle shadows, rounded corners, consistent padding
- **Forms:** Clear labels, helpful error messages, progressive disclosure
- **Navigation:** Consistent across pages, sticky on mobile

## Image & Content Standards
- **Images:** High-quality, authentic local photography preferred
- **Icons:** Consistent line icon style with rounded corners
- **Content:** Friendly, welcoming tone with clear, concise information
```

```markdown
# App Flow: Pages & User Roles

## User Roles
- **Guest User:** Can browse tours, check availability, make bookings, view confirmation
- **Admin:** Can manage bookings, update availability, view reports (future phase)

## Page Definitions
- **Homepage:** Hero section, key features, booking widget, social proof
- **About Us:** Company story, team profiles, mission statement
- **Tour Details:** Full itinerary, inclusions, pricing, FAQs
- **Booking Flow:** Multi-step process (Date → Details → Payment → Confirmation)
- **Contact:** Contact form, map, phone/email links, business hours

## User Journeys
- **Prospective Tourist:**
  1. Lands on homepage from search/social media
  2. Browses tour details and itinerary
  3. Checks availability via booking widget
  4. Completes multi-step booking form
  5. Receives confirmation email/SMS
  6. Views booking details via unique link

- **Returning Visitor:**
  1. Accesses booking via confirmation link
  2. Views tour details and preparation information
  3. Contacts support if needed via provided channels

## Booking Flow Details
1. **Date Selection:** Interactive calendar showing available dates (grayed out when full)
2. **Guest Details:** Name, email, phone, dietary restrictions, special requests
3. **Payment Method:** Stripe (credit card), GCash, or PayMaya options
4. **Confirmation:** Success page with summary, plus email/SMS with details and unique link
5. **Post-Booking:** Reminder messages 24h before tour, follow-up for reviews

## Error States & Edge Cases
- **Date Unavailable:** Clear message with next available dates
- **Payment Failure:** Guided retry process with support contact
- **Form Validation:** Real-time validation with helpful error messages
- **Network Issues:** Offline capability for browsing, graceful degradation
```

---
*Generated by Promptables Platform*
