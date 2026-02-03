# Fitness900 - Placeholder Website

A minimal, professional placeholder website for the Fitness900 domain. Built with Next.js and optimized for performance and SEO.

## 🚀 Overview

This is a static placeholder website designed to maintain a professional presence for the Fitness900 brand while the full website is under development. The site features:

- **Modern Design**: Clean, minimalist design with responsive layout
- **High Performance**: Static site generation for optimal loading speeds
- **SEO Optimized**: Proper meta tags, structured data, and search engine friendly
- **Mobile First**: Fully responsive design that works on all devices
- **Future Ready**: Architecture designed for easy expansion

## 🛠 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: CSS Modules with modern CSS features
- **Deployment**: Vercel (optimized for Next.js)
- **Performance**: Static Site Generation (SSG)
- **SEO**: Built-in Next.js SEO optimizations

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with meta tags
│   ├── page.tsx            # Main landing page
│   ├── globals.css         # Global styles
│   └── favicon.ico         # Custom favicon
├── components/
│   ├── Hero.tsx            # Coming Soon hero section
│   ├── Navigation.tsx      # Minimal navigation bar
│   └── Footer.tsx          # Brand footer
└── public/
    ├── images/             # Logo, background images
    └── icons/              # Favicon variations
```

## 🚦 Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Muhammad-Anique/fitness900-placeholder.git
   cd fitness900-placeholder
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## 🚀 Deployment

This project is configured for deployment on Vercel:

1. **Connect to Vercel**
   - Import project from GitHub to Vercel
   - Vercel will auto-detect Next.js configuration

2. **Configure Custom Domain**
   - Add `fitness900.com` in Vercel dashboard
   - Update DNS records as instructed

3. **Deploy**
   - Automatic deployment on every push to main branch
   - Preview deployments for pull requests

## 📊 Performance Targets

- **Page Load Time**: < 1 second
- **First Contentful Paint**: < 1.2 seconds
- **Cumulative Layout Shift**: < 0.1
- **Core Web Vitals**: All green scores

## 🔒 Security Features

- Static site generation (no server-side vulnerabilities)
- HTTPS by default on Vercel
- Content Security Policy (CSP) headers
- No user input handling (eliminates XSS risks)

## 🎨 Design System

- **Colors**: Professional color palette suitable for fitness brand
- **Typography**: Modern, readable fonts optimized for web
- **Responsive Breakpoints**:
  - Mobile: 320px - 768px
  - Tablet: 768px - 1024px
  - Desktop: 1024px and above

## 🔮 Future Enhancements

When ready to expand beyond a placeholder:

- Contact forms with email integration
- Newsletter signup functionality
- Blog/content management
- User authentication and profiles
- Service booking system

## 📝 License

This project is proprietary and confidential. Unauthorized copying or distribution is prohibited.

## 🤝 Contributing

This is a private project. For any changes or improvements, please contact the project maintainer.

## 📞 Contact

For questions or support, please contact:
- **Project**: Fitness900 Placeholder Website
- **Repository**: [GitHub Repository](https://github.com/Muhammad-Anique/fitness900-placeholder)