# Portfolio Website - Replit Development Guide

## Overview

This is a modern full-stack portfolio website built with React, TypeScript, Express.js, and PostgreSQL. The application showcases a professional developer portfolio with smooth animations, contact functionality, and a responsive design. It uses the shadcn/ui component library for a polished user interface.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui components
- **Animations**: Framer Motion for smooth transitions and interactions
- **State Management**: TanStack React Query for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Form Handling**: React Hook Form with Zod validation
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **API**: RESTful API endpoints for contact form and file downloads
- **Session Management**: Basic session handling with connect-pg-simple
- **Development**: Hot reload with Vite middleware integration

## Key Components

### Frontend Components
- **Navigation**: Sticky navigation with scroll spy functionality
- **Hero Section**: Animated landing area with call-to-action buttons
- **About Section**: Personal information and statistics
- **Skills Section**: Animated progress bars for technical skills
- **Experience Section**: Professional work history with timeline
- **Education Section**: Academic background and certifications
- **Projects Section**: Portfolio showcase with project cards
- **Contact Form**: Validated contact form with email submission
- **Footer**: Social links and site information

### Backend Components
- **Contact API**: Handles form submissions and stores messages
- **File Download**: CV/resume download endpoint
- **Storage Layer**: Abstracted storage interface with in-memory implementation
- **Database Schema**: Users and contact messages tables

### UI Component Library
- Complete shadcn/ui implementation with Radix UI primitives
- Consistent design system with CSS variables
- Accessible components following ARIA standards
- Dark/light mode support (configured but not actively used)

## Data Flow

1. **Contact Form Submission**:
   - User fills out contact form
   - Frontend validates data using Zod schema
   - Form data sent to `/api/contact` endpoint
   - Backend validates and stores in database
   - Success/error response returned to frontend
   - Toast notification displayed to user

2. **CV Download**:
   - User clicks download CV button
   - Request sent to `/api/download-cv` endpoint
   - Backend processes request and returns download URL
   - Frontend initiates file download

3. **Page Navigation**:
   - Single-page application with smooth scrolling
   - Navigation uses scroll spy to highlight active section
   - Mobile-responsive hamburger menu

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL connection
- **drizzle-orm**: Type-safe ORM for database operations
- **@tanstack/react-query**: Server state management
- **framer-motion**: Animation library
- **react-hook-form**: Form handling
- **@hookform/resolvers**: Form validation resolvers
- **zod**: Schema validation
- **tailwindcss**: Utility-first CSS framework

### UI Dependencies
- **@radix-ui/***: Accessible UI primitives
- **class-variance-authority**: CSS class management
- **clsx**: Conditional class names
- **tailwind-merge**: Tailwind class merging utility

### Development Dependencies
- **vite**: Build tool and dev server
- **typescript**: Type checking
- **@vitejs/plugin-react**: React support for Vite
- **@replit/vite-plugin-runtime-error-modal**: Error handling for Replit

## Deployment Strategy

### Development Environment
- Uses Vite dev server with HMR (Hot Module Replacement)
- Express server runs with tsx for TypeScript execution
- Database migrations handled via Drizzle Kit
- Environment variables managed through `.env` files

### Production Build
1. Frontend built with Vite to `dist/public`
2. Backend bundled with esbuild to `dist/index.js`
3. Static assets served by Express server
4. Database schema pushed using `npm run db:push`

### Environment Configuration
- **DATABASE_URL**: PostgreSQL connection string (required)
- **NODE_ENV**: Environment mode (development/production)
- **REPL_ID**: Replit-specific identifier for development features

### Scripts
- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm start`: Run production server
- `npm run db:push`: Push database schema changes

## Changelog
- June 29, 2025. Initial setup with portfolio website
- June 29, 2025. Redesigned with Amar.im inspiration - minimalist hero, technical expertise visualization, detailed career highlights

## Recent Changes

### Amar.im-Inspired Redesign (June 29, 2025)
- **Hero Section**: Minimalist design with bold typography, floating technical keywords, clean tagline approach
- **Technical Expertise**: Organized skills into categorized sections (Frontend, Backend, DevOps) with interactive hover effects
- **Experience Section**: Enhanced with detailed achievement bullet points similar to Amar's professional storytelling
- **Typography**: Improved font hierarchy and spacing for better readability
- **Animation**: Subtle entrance animations and floating elements
- **Color Scheme**: Cleaner, more professional palette with better contrast

### Key Inspirations from Amar.im
- Clean, minimalist hero with compelling tagline format
- Interactive technical expertise visualization with organized categories
- Professional storytelling approach in experience section
- Modern typography and sophisticated spacing
- Unique personal branding elements

## User Preferences

Preferred communication style: Simple, everyday language.
Design inspiration: Amar.im's clean, professional, minimalist approach.