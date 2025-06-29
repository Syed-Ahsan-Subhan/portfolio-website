# Deployment Guide

## GitHub Repository Setup

### 1. Create Repository on GitHub
1. Go to [GitHub](https://github.com)
2. Click the "+" icon in the top right corner
3. Select "New repository"
4. Name your repository (e.g., `portfolio-website` or `personal-portfolio`)
5. Add description: "Modern minimalist portfolio website built with React and TypeScript"
6. Choose Public or Private visibility
7. Don't initialize with README (we already have one)
8. Click "Create repository"

### 2. Push Your Code to GitHub
```bash
# Initialize git repository (if not already done)
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit: Amar.im-inspired portfolio website"

# Add your GitHub repository as remote origin
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git

# Push to GitHub
git push -u origin main
```

## Hosting Options

### Option 1: Vercel (Recommended for React apps)
1. Go to [vercel.com](https://vercel.com)
2. Sign up/login with your GitHub account
3. Click "New Project"
4. Import your GitHub repository
5. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `dist/public`
   - Install Command: `npm install`
6. Add environment variables if needed
7. Deploy!

### Option 2: Netlify
1. Go to [netlify.com](https://netlify.com)
2. Sign up/login with GitHub
3. Click "New site from Git"
4. Choose GitHub and select your repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist/public`
6. Deploy

### Option 3: Railway
1. Go to [railway.app](https://railway.app)
2. Sign up with GitHub
3. Click "Deploy from GitHub repo"
4. Select your repository
5. Railway will auto-detect and deploy

### Option 4: Render
1. Go to [render.com](https://render.com)
2. Connect your GitHub account
3. Create new "Web Service"
4. Connect your repository
5. Configure:
   - Build Command: `npm run build`
   - Start Command: `npm start`

## Environment Variables

For production deployment, you may need:
- `DATABASE_URL` (if using PostgreSQL)
- `NODE_ENV=production`

## Custom Domain Setup

Most hosting providers allow custom domain setup:
1. Purchase domain from registrar (GoDaddy, Namecheap, etc.)
2. Add domain in hosting provider settings
3. Update DNS records to point to hosting provider
4. Enable SSL certificate (usually automatic)

## Performance Optimization

Your site is already optimized with:
- Vite for fast builds and optimized bundles
- Code splitting and lazy loading
- Compressed assets
- Modern React practices

## Monitoring

Consider adding:
- Google Analytics for visitor tracking
- Sentry for error monitoring
- Lighthouse CI for performance monitoring