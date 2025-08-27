## `design-guidelines.md`

```markdown
# Gwapo Mango Tours - Design Guidelines

## Visual Identity

### Color Palette
- **Primary**: #FF8C42 (Mango Orange) - CTAs, highlights, active states
- **Accent**: #2ECC71 (Tropical Green) - success states, nature elements
- **Background**: #FFFFFF (Pure White) - main background
- **Secondary Background**: #FFF8F0 (Soft Cream) - card backgrounds
- **Text Primary**: #2C3E50 (Dark Blue-Gray) - main text
- **Text Secondary**: #7F8C8D (Medium Gray) - supporting text

### Typography
- **Primary Font**: Inter (Google Fonts)
- **Headings**: Inter Bold (700)
- **Body Text**: Inter Regular (400)
- **Accent Text**: Inter Medium (500)

### Font Scales
- **H1**: 2.5rem (40px) mobile, 3rem (48px) desktop
- **H2**: 2rem (32px) mobile, 2.5rem (40px) desktop
- **H3**: 1.5rem (24px)
- **Body**: 1rem (16px)
- **Small**: 0.875rem (14px)

## Layout Principles

### Grid System
- **Mobile**: Single column with 16px padding
- **Tablet**: 2-column grid with 24px gaps
- **Desktop**: 3-column grid with 32px gaps
- **Max Width**: 1200px container with auto margins

### Spacing Scale
- **XS**: 4px
- **SM**: 8px
- **MD**: 16px
- **LG**: 24px
- **XL**: 32px
- **XXL**: 48px

### Card Design
- **Border Radius**: 12px for cards, 8px for buttons
- **Shadow**: 0 4px 6px rgba(0, 0, 0, 0.1)
- **Padding**: 24px desktop, 16px mobile
- **Background**: Soft cream (#FFF8F0) with white content areas

## Component Guidelines

### Buttons
- **Primary Button**: Mango orange background, white text, 12px padding
- **Secondary Button**: White background, mango orange border and text
- **Button States**: Hover darkens by 10%, active state scales 0.98

### Form Elements
- **Input Fields**: White background, light gray border, focus state with mango orange border
- **Labels**: Medium gray, positioned above inputs
- **Error States**: Red border with error message below

### Navigation
- **Mobile**: Hamburger menu with slide-out drawer
- **Desktop**: Horizontal navigation with hover effects
- **Active State**: Mango orange underline or background

## Page Layout Specifications

### Homepage
- **Hero Section**: Full-width background image with overlay text
- **Tour Highlights**: 3-card layout showcasing key features
- **Booking Widget**: Sticky on mobile, sidebar on desktop
- **Testimonials**: Carousel on mobile, grid on desktop

### Tour Details Page
- **Itinerary**: Timeline layout with icons for each stop
- **Inclusions**: Icon-based list with tropical themed icons
- **Image Gallery**: Masonry layout on desktop, single column on mobile

### Booking Flow
- **Step Indicator**: Progress bar showing current step
- **Form Layout**: Single column with clear section breaks
- **Summary Card**: Sticky summary with price calculation

## Mobile-First Design

### Breakpoints
- **Mobile**: 0-767px
- **Tablet**: 768-1023px
- **Desktop**: 1024px+

### Mobile Optimizations
- **Touch Targets**: Minimum 44px height for interactive elements
- **Thumb Navigation**: Important actions within thumb reach
- **Simplified Navigation**: Collapsible menu with clear hierarchy
- **Optimized Images**: WebP format with responsive sizing

## Accessibility Guidelines

### WCAG 2.1 AA Compliance
- **Color Contrast**: Minimum 4.5:1 ratio for text
- **Keyboard Navigation**: All interactive elements accessible via keyboard
- **Screen Reader**: Proper ARIA labels and semantic HTML
- **Focus Indicators**: Clear visual focus states

### Inclusive Design
- **Font Size**: Minimum 16px for body text
- **Language**: Clear, simple language avoiding jargon
- **Error Messages**: Descriptive and helpful error guidance

## Icons & Visual Elements

### Icon Style
- **Type**: Outline style icons (Heroicons or Lucide)
- **Size**: 24px standard, 32px for featured elements
- **Color**: Inherit text color or mango orange for highlights

### Tropical Theme Icons
- 🥭 Mango fruit
- 🌴 Palm trees
- 🚤 Boats
- 📍 Location pins
- ⭐ Star ratings
- 📅 Calendar
- 👥 Group size

### Photography Guidelines
- **Style**: Bright, natural lighting showcasing vibrant colors
- **Composition**: Rule of thirds with focus on mangoes and landscapes
- **People**: Authentic, candid shots of tourists enjoying experiences
- **Quality**: High resolution, optimized for web (WebP format)

## Interactive Elements

### Hover Effects
- **Buttons**: Subtle scale (1.05) and color darkening
- **Cards**: Lift effect with increased shadow
- **Images**: Slight zoom (1.1) with overflow hidden

### Loading States
- **Skeleton Screens**: Gray placeholders matching content layout
- **Spinners**: Mango orange circular progress indicators
- **Button Loading**: Disabled state with spinner inside button

### Animations
- **Page Transitions**: Smooth fade-in effects (300ms)
- **Form Validation**: Shake animation for errors
- **Success States**: Gentle bounce effect for confirmations

## Performance Considerations

### Image Optimization
- **Format**: WebP with JPEG fallback
- **Lazy Loading**: Implement for images below fold
- **Responsive Images**: Multiple sizes for different screen densities

### CSS Optimization
- **Critical CSS**: Inline critical styles for above-fold content
- **Unused CSS**: Remove unused Tailwind classes in production
- **Minification**: Compress CSS and JavaScript files

## Brand Voice & Tone

### Personality
- **Friendly**: Warm, welcoming, approachable
- **Authentic**: Genuine local experience focus
- **Professional**: Reliable and trustworthy service
- **Enthusiastic**: Passionate about mangoes and Guimaras

### Writing Style
- **Conversational**: Natural, easy-to-read language
- **Informative**: Clear details about tours and logistics
- **Encouraging**: Motivating visitors to book and explore
- **Cultural**: Respectful integration of Filipino culture

## Conclusion
These design guidelines ensure Gwapo Mango Tours maintains a consistent, accessible, and engaging user experience that reflects the tropical beauty and authentic culture of Guimaras Island while driving successful tour bookings.