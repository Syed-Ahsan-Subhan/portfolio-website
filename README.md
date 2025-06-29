# Personal Portfolio Website

A modern, minimalist personal portfolio website inspired by Amar.im's clean design philosophy. Built with React, TypeScript, and Express.js.

## 🚀 Features

- **Minimalist Design**: Clean, professional layout with sophisticated typography
- **Responsive**: Fully responsive design that works on all devices
- **Interactive**: Smooth animations and hover effects using Framer Motion
- **Contact Form**: Functional contact form with validation and email handling
- **Modern Tech Stack**: Built with React 18, TypeScript, Tailwind CSS, and shadcn/ui

## 🛠️ Tech Stack

### Frontend
- React 18 with TypeScript
- Tailwind CSS + shadcn/ui components
- Framer Motion for animations
- TanStack React Query for state management
- React Hook Form with Zod validation
- Wouter for routing

### Backend
- Express.js with TypeScript
- PostgreSQL with Drizzle ORM
- In-memory storage for development
- RESTful API endpoints

### Development
- Vite for fast development and builds
- Hot Module Replacement (HMR)
- TypeScript for type safety

## 🏃‍♂️ Quick Start

1. **Clone the repository**
   ```bash
   git clone [your-repo-url]
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5000`

## 📁 Project Structure

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Page components
│   │   ├── hooks/          # Custom React hooks
│   │   └── lib/            # Utility functions
├── server/                 # Backend Express application
│   ├── index.ts           # Server entry point
│   ├── routes.ts          # API routes
│   └── storage.ts         # Data storage layer
├── shared/                 # Shared types and schemas
└── components.json         # shadcn/ui configuration
```

## 🎨 Design Philosophy

This portfolio follows a minimalist approach inspired by Amar.im:

- **Clean Typography**: Bold, readable fonts with proper hierarchy
- **Organized Content**: Technical skills categorized into Frontend, Backend, and DevOps
- **Professional Storytelling**: Detailed achievement bullet points in experience section
- **Subtle Animations**: Smooth transitions that enhance user experience
- **Modern Color Palette**: Sophisticated colors with excellent contrast

## 🚀 Deployment

### Production Build
```bash
npm run build
npm start
```

### Environment Variables
- `DATABASE_URL`: PostgreSQL connection string (optional for development)
- `NODE_ENV`: Environment mode (development/production)

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Run production server
- `npm run db:push` - Push database schema changes

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 🤝 Contributing

Feel free to submit issues and pull requests to improve this portfolio template.

---

Built with ❤️ using modern web technologies