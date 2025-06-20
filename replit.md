# Interactive Portfolio - Cozy Bedroom

## Overview

This is an interactive portfolio website featuring a cozy bedroom scene with clickable hotspots. The application displays different sections of a portfolio (projects, certificates, about, skills, contact, etc.) through an immersive 3D-like experience using video backgrounds and interactive elements. Users can explore the bedroom environment and click on various hotspots to learn more about the developer's work and background.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **State Management**: Zustand for client-side state management
- **Component Library**: Radix UI primitives with custom styling
- **Build Tool**: Vite with custom configuration for GLSL shader support
- **3D Graphics**: React Three Fiber with additional helpers from @react-three/drei

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **Development**: Hot module replacement via Vite in development mode
- **API Structure**: RESTful endpoints with /api prefix
- **Error Handling**: Centralized error middleware

### Data Storage
- **Database**: PostgreSQL (configured for production deployment)
- **ORM**: Drizzle ORM with schema-first approach
- **Development Storage**: In-memory storage implementation for rapid development
- **Migrations**: Drizzle Kit for database schema management

## Key Components

### Portfolio Experience
- **BedroomScene**: Main interactive component displaying video background
- **Hotspot**: Clickable interactive elements positioned over the bedroom scene
- **Modal System**: Dynamic modal rendering for different portfolio sections
- **Theme System**: Dark/light mode toggle affecting the bedroom ambiance

### State Management Stores
- **usePortfolio**: Manages active modal state and navigation
- **useTheme**: Controls dark/light mode theming
- **useAudio**: Handles sound effects and background music (muted by default)
- **useGame**: Manages game-like interaction states

### UI Components
- Complete shadcn/ui component library implementation
- Custom styled components with Tailwind CSS
- Responsive design with mobile-first approach
- Accessibility features through Radix UI primitives

## Data Flow

1. **Initial Load**: Application loads the bedroom scene with video background
2. **User Interaction**: Users click on hotspots positioned throughout the scene
3. **Modal Display**: Clicking hotspots opens corresponding modals with portfolio content
4. **State Updates**: Zustand stores manage UI state changes and preferences
5. **Theme Switching**: Theme changes trigger video background updates (day/night modes)

## External Dependencies

### Core Framework Dependencies
- React ecosystem (React, ReactDOM, React Router)
- Vite build system with plugin ecosystem
- TypeScript for type safety

### UI and Styling
- Tailwind CSS for utility-first styling
- Radix UI for accessible component primitives
- Lucide React for icons
- Font Awesome (via CDN) for additional icons

### 3D and Graphics
- React Three Fiber for 3D scene management
- @react-three/drei for additional 3D utilities
- @react-three/postprocessing for visual effects
- GLSL shader support for advanced graphics

### Database and Backend
- Drizzle ORM with PostgreSQL driver
- Neon Database serverless PostgreSQL
- Express.js for API routing
- Session management capabilities

## Deployment Strategy

### Development Environment
- Replit-hosted development with hot reload
- Vite development server on port 5000
- Automatic dependency installation and management

### Production Deployment
- Target: Google Cloud Run
- Build process: Vite production build + esbuild for server bundling
- Static asset serving from dist/public directory
- Environment variable configuration for database connections

### Database Strategy
- Development: In-memory storage for rapid iteration
- Production: PostgreSQL via Neon Database
- Schema management via Drizzle migrations
- Environment-based configuration switching

## Changelog

```
Changelog:
- June 20, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```