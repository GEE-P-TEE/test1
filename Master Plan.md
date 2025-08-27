# Gwapo Mango Tours - Master Plan

## Project Overview
Gwapo Mango Tours is a premium mango farm tour booking platform designed to showcase the beauty and flavors of Guimaras Island, Philippines. The platform enables tourists to discover, book, and experience authentic mango farm tours while supporting sustainable local tourism.

## Mission Statement
To provide unforgettable mango farm experiences that connect visitors with Guimaras' rich agricultural heritage while promoting sustainable tourism and supporting local communities.

## Target Audience
- **Filipino tourists** from other provinces visiting Guimaras
- **International tourists** exploring the Philippines
- **Day-trippers** from nearby Iloilo City
- **Food enthusiasts** and mango lovers seeking authentic experiences

## Core Features & Functionality

### Primary Features
- **Interactive Tour Booking System** with real-time availability
- **Secure Payment Processing** (GCash & Credit Cards via PayMongo)
- **Comprehensive Tour Information** with detailed itineraries
- **Mobile-First Responsive Design** optimized for on-the-go bookings
- **Multi-language Support** (English and Filipino)

### Tour Experience Details
- **Full Day Experience**: 7:00 AM - 5:00 PM
- **Maximum Capacity**: 12 guests per tour
- **Price Point**: ₱3,500 per person
- **Four Key Stops**:
  1. Oro Verde Mango Plantation (premium tasting)
  2. National Mango Research & Development Center (educational)
  3. Guimaras Wonder's Farm (hands-on picking)
  4. Guimaras Bee Center (mango honey tasting)

## Technical Stack Recommendations

### Frontend
- **Next.js 14** - React framework for optimal performance
- **Tailwind CSS** - Utility-first styling
- **shadcn/UI** - Modern component library

### Backend & Database
- **Supabase** - Backend-as-a-Service for booking management
- **PostgreSQL** - Relational database via Supabase

### Payment & Integration
- **PayMongo** - Philippine payment gateway (GCash + Credit Cards)
- **Notion API** - Content management system
- **React Big Calendar** - Availability management

### Authentication
- **Email/Password** authentication via Supabase Auth

## Data Model Concepts

### Core Entities
- **Tours** (date, capacity, price, status)
- **Bookings** (customer info, guest count, payment status)
- **Customers** (contact details, booking history)
- **Content** (tour descriptions, blog posts, testimonials)

## User Interface Design Principles

### Visual Identity
- **Primary Color**: #FF8C42 (Mango Orange)
- **Accent Color**: #2ECC71 (Tropical Green)
- **Typography**: Inter font family
- **Style**: Tropical modern with clean layouts

### Design Philosophy
- Mobile-first responsive design
- Card-based layout with generous whitespace
- High-quality imagery showcasing mango farms
- Intuitive booking flow with clear CTAs

## Security Considerations
- **PCI DSS Compliance** through PayMongo integration
- **Data Privacy** compliance with Philippine Data Privacy Act
- **Secure Authentication** with Supabase Auth
- **Input Validation** for all booking forms
- **HTTPS Encryption** for all data transmission

## Development Phases

### Phase 1: MVP (4-6 weeks)
- Core booking system
- Payment integration
- Basic tour information pages
- Mobile-responsive design

### Phase 2: Enhanced Features (2-3 weeks)
- Admin dashboard
- Email notifications
- Customer testimonials
- Photo gallery

### Phase 3: Growth Features (2-4 weeks)
- Blog section
- WhatsApp integration
- SEO optimization
- Multi-language support

## Potential Challenges & Solutions

### Challenge: Peak Season Demand
**Solution**: Implement waitlist functionality and dynamic pricing

### Challenge: Weather Dependencies
**Solution**: Integrate weather API for tour planning and customer notifications

### Challenge: Payment Processing in Philippines
**Solution**: PayMongo provides reliable local payment solutions

### Challenge: Mobile Internet Connectivity
**Solution**: Optimize for slow connections with image compression and caching

## Future Expansion Possibilities
- **Additional Tour Packages** (half-day, sunset tours)
- **Corporate Group Bookings** with custom pricing
- **Partner Integration** with hotels and travel agencies
- **Mobile App Development** for enhanced user experience
- **Loyalty Program** for repeat customers
- **Virtual Tour Previews** using 360° photography
