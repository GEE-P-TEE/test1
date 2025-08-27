# Gwapo Mango Tours - App Flow, Pages & User Roles

## User Roles & Access Rights

### 1. **Visitor** (Unauthenticated)
- **Access**: All public pages
- **Capabilities**: Browse tours, view details, make bookings
- **Restrictions**: Cannot access admin features or booking history

### 2. **Customer** (Authenticated)
- **Access**: All visitor access + customer account
- **Capabilities**: View booking history, manage personal information
- **Authentication**: Email/password via Supabase Auth

### 3. **Admin** (Super User)
- **Access**: All pages + admin dashboard
- **Capabilities**: Manage bookings, update availability, view analytics
- **Authentication**: Admin-level email/password with elevated permissions

## Core Pages Structure

### **1. Homepage** (`/`)
**Purpose**: Primary landing page and booking entry point
**Key Elements**:
- Hero section with stunning mango farm imagery
- "Book Your Mango Adventure" primary CTA
- Tour highlights showcase (Full Day • Max 12 Guests • ₱3,500)
- Quick overview of 4 tour stops with photos
- Customer testimonials and social proof
- Mobile-optimized booking widget
- Footer with contact information

**User Actions**:
- Click "Book Now" → Navigate to booking flow
- View tour highlights → Navigate to tour details
- Read testimonials → Build trust and confidence

---

### **2. Tour Details Page** (`/tour-details`)
**Purpose**: Comprehensive tour information and itinerary
**Key Elements**:
- Complete day itinerary with timeline:
  - 7:00 AM: Pickup at Jordan Port
  - 9:00 AM: Oro Verde Mango Plantation
  - 11:00 AM: National Mango Research Center
  - 12:00 PM: Traditional Filipino lunch
  - 2:00 PM: Guimaras Wonder's Farm
  - 4:00 PM: Guimaras Bee Center
  - 5:00 PM: Drop-off at Jordan Port
- Tour inclusions (transportation, lunch, guided tours, tastings)
- What to bring checklist
- Tour guidelines and safety protocols
- Photo gallery from previous tours
- "Book This Tour" CTA button

**User Actions**:
- Review complete itinerary → Make informed booking decision
- View photo gallery → Visualize experience
- Click "Book This Tour" → Navigate to booking system

---

### **3. Booking System** (`/book`)
**Purpose**: Complete tour reservation and payment process
**Key Elements**:

#### Step 1: Date & Guests Selection
- Interactive calendar showing available dates
- Guest count selector (1-12 people with validation)
- Real-time price calculation display
- Unavailable dates clearly marked

#### Step 2: Customer Information
- Contact form (name, email, phone, special requests)
- Terms and conditions acceptance
- Newsletter signup option

#### Step 3: Payment Processing
- Payment method selection (GCash or Credit Card)
- PayMongo secure payment integration
- Order summary with breakdown
- Final total confirmation

#### Step 4: Confirmation
- Booking confirmation with unique reference number
- Email receipt generation
- Tour details and pickup instructions
- Add to calendar functionality

**User Actions**:
- Select date and guest count → Calculate total price
- Fill contact information → Proceed to payment
- Complete payment → Receive confirmation
- Download receipt → Save booking details

---

### **4. About Us Page** (`/about`)
**Purpose**: Build trust and showcase company story
**Key Elements**:
- Gwapo Mango Tours origin story and mission
- Meet the team section with photos and bios
- Local guides introduction and expertise
- Commitment to sustainable tourism practices
- Safety protocols and certifications
- Awards or recognition received
- Contact information and location

**User Actions**:
- Learn about company values → Build trust
- Meet the team → Personal connection
- View certifications → Confidence in safety

---

### **5. Blog Section** (`/blog`)
**Purpose**: SEO content and visitor engagement
**Key Elements**:
- Articles about Guimaras attractions
- Mango facts and seasonal information
- Travel tips for visiting Guimaras
- Customer experience stories
- Local culture and history content
- Search functionality
- Category filtering

**User Actions**:
- Read travel tips → Plan visit better
- Learn about mangoes → Increase interest
- Share articles → Social media engagement

---

### **6. Photo Gallery** (`/gallery`)
**Purpose**: Visual showcase of tour experiences
**Key Elements**:
- High-quality photos organized by tour stops
- Customer photos from previous tours
- Mango farm landscapes and fruit close-ups
- Group photos and candid moments
- Lightbox viewing experience
- Social sharing capabilities

**User Actions**:
- Browse photos → Visualize experience
- Share favorite images → Social media promotion
- View customer photos → Social proof

---

### **7. Contact Page** (`/contact`)
**Purpose**: Customer support and inquiries
**Key Elements**:
- Contact form for general inquiries
- WhatsApp integration for instant messaging
- Phone number and email address
- Business hours and response times
- Location map and directions to pickup point
- FAQ section for common questions

**User Actions**:
- Send inquiry → Get information
- Start WhatsApp chat → Immediate support
- View location → Plan transportation

---

## Admin Dashboard Pages

### **8. Admin Login** (`/admin/login`)
**Purpose**: Secure admin authentication
**Key Elements**:
- Email/password login form
- "Remember me" option
- Password reset functionality
- Secure session management

---

### **9. Admin Dashboard** (`/admin/dashboard`)
**Purpose**: Overview of bookings and business metrics
**Key Elements**:
- Today's bookings summary
- Weekly/monthly booking trends
- Revenue analytics
- Upcoming tours overview
- Recent customer inquiries
- Quick action buttons

---

### **10. Booking Management** (`/admin/bookings`)
**Purpose**: Manage all tour reservations
**Key Elements**:
- Booking list with filters (date, status, payment)
- Individual booking details view
- Payment status updates
- Customer contact information
- Booking modification capabilities
- Export functionality for reports

---

### **11. Calendar Management** (`/admin/calendar`)
**Purpose**: Control tour availability
**Key Elements**:
- Monthly calendar view
- Add/remove available tour dates
- Set capacity limits per date
- Mark dates as unavailable (weather, maintenance)
- Bulk date management tools

---

## User Flow Diagrams

### **Primary Booking Flow**
1. **Homepage** → View tour highlights
2. **Tour Details** → Learn about itinerary
3. **Booking System** → Select date and guests
4. **Payment** → Complete transaction
5. **Confirmation** → Receive booking details

### **Information Seeking Flow**
1. **Homepage** → Initial interest
2. **About Us** → Learn about company
3. **Blog/Gallery** → Explore content
4. **Contact** → Ask specific questions
5. **Booking System** → Make reservation

### **Admin Management Flow**
1. **Admin Login** → Authenticate
2. **Dashboard** → Overview of business
3. **Booking Management** → Handle reservations
4. **Calendar Management** → Update availability
5. **Customer Communication** → Respond to inquiries

## Navigation Structure

### **Main Navigation** (All Users)
- Home
- Tour Details
- Gallery
- Blog
- About Us
- Contact
- Book Now (CTA Button)

### **Footer Navigation**
- Quick Links (Tour Details, Booking, Contact)
- Social Media Links
- Privacy Policy
- Terms of Service
- Sitemap

### **Admin Navigation** (Admin Only)
- Dashboard
- Bookings
- Calendar
- Customers
- Content Management
- Settings
- Logout

## Mobile Navigation Considerations

### **Mobile Menu Structure**
- Hamburger menu with slide-out drawer
- Prominent "Book Now" button always visible
- Simplified navigation with essential pages only
- Contact information easily accessible
- Social media links in mobile footer

### **Mobile-Specific Features**
- One-tap phone calling
- WhatsApp direct messaging
- GPS navigation to pickup point
- Mobile-optimized booking flow
- Touch-friendly calendar interface

## Page Loading & Performance

### **Critical Pages** (Fast Loading Priority)
1. Homepage - First impression
2. Booking System - Revenue critical
3. Tour Details - Decision making
4. Payment Processing - Transaction completion

### **Secondary Pages** (Standard Loading)
- About Us, Blog, Gallery, Contact
- Admin dashboard pages

## SEO & URL Structure

### **URL Patterns**
- Homepage: `/`
- Tour Details: `/tour-details`
- Booking: `/book`
- About: `/about`
- Blog: `/blog` and `/blog/[slug]`
- Gallery: `/gallery`
- Contact: `/contact`
- Admin: `/admin/[page]`

### **Meta Information**
Each page includes optimized title tags, meta descriptions, and Open Graph tags for social media sharing.

This comprehensive page structure ensures smooth user navigation while supporting business goals of tour bookings and customer engagement.
