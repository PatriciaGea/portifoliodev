# Patrícia Gea — Portfolio

A modern, responsive portfolio website built with **Next.js 14**, **TypeScript**, and **CSS custom properties**.

## ✨ Features

- 🌙 Dark / Light mode (default: dark)
- 🎨 Custom color palette: `#5170ff` (primary), `#ff66c4` (pink), `#791919` (red)
- 📱 Fully responsive design
- ⚡ Animated particle background on hero
- 🧭 Smooth scroll navigation
- 📊 Interactive skill bars with category tabs
- 🗂️ Filterable projects section
- 📅 Timeline for experience & education
- 📬 Contact form (ready to connect to Formspree / EmailJS)
- ♿ Accessibility best practices
- 🔤 Custom fonts: Syne (display) + DM Sans (body) + JetBrains Mono

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone or unzip the project
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css       # All CSS variables, themes, animations
│   ├── layout.tsx        # Root layout with fonts & ThemeProvider
│   └── page.tsx          # Main page assembling sections
└── components/
    ├── layout/
    │   ├── Navbar.tsx        # Sticky nav with mobile menu
    │   ├── Footer.tsx        # Footer with socials
    │   └── ThemeProvider.tsx # Dark/light mode wrapper
    └── sections/
        ├── Hero.tsx          # Animated hero with particles
        ├── About.tsx         # About me with highlights
        ├── TechStack.tsx     # Skills with bars & tabs
        ├── Projects.tsx      # Project cards with filters
        ├── Experience.tsx    # Timeline + education
        └── Contact.tsx       # Contact form + info
```

## 🎨 Customization

### Colors
Edit in `src/app/globals.css`:
```css
:root {
  --primary: #5170ff;
  --pink: #ff66c4;
  --red: #791919;
}
```

### Projects
Edit the `projects` array in `src/components/sections/Projects.tsx`

### Contact form
The form is ready to integrate. Add your endpoint to the `handleSubmit` function in `Contact.tsx`. Recommended services:
- [Formspree](https://formspree.io) — just update the fetch URL
- [EmailJS](https://emailjs.com) — add their SDK

### GitHub links
Replace all `https://github.com/PatriciaGea` references with your actual repo URLs.

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: CSS custom properties + Tailwind utilities
- **Animations**: CSS animations + canvas API
- **Icons**: Lucide React
- **Theme**: next-themes
- **Fonts**: Google Fonts (Syne, DM Sans, JetBrains Mono)

## 📦 Deployment

Works out of the box with:
- [Vercel](https://vercel.com) (recommended for Next.js)
- [Netlify](https://netlify.com)
- Any Node.js hosting

```bash
# Deploy to Vercel
npx vercel
```

### Vercel Production Setup

1. Push your repository to GitHub.
2. Import the project in Vercel.
3. Framework preset: Next.js (auto-detected).
4. Build command: `npm run build`
5. Output directory: `.next` (auto)
6. Install command: `npm install`
7. Deploy.

If you change your domain later, update `siteConfig.website` in `src/lib/portfolio-data.ts`.

## 🔎 SEO and Metadata

This project includes complete metadata and SEO routes for Next.js App Router:

- `src/app/layout.tsx`: Metadata (Open Graph, Twitter, robots, canonical)
- `src/app/sitemap.ts`: XML sitemap
- `src/app/robots.ts`: robots.txt
- `src/app/manifest.ts`: web app manifest
