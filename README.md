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
- 📬 Contact section
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

## 🔎 SEO and Metadata

This project includes complete metadata and SEO routes for Next.js App Router:

- `src/app/layout.tsx`: Metadata (Open Graph, Twitter, robots, canonical)
- `src/app/manifest.ts`: web app manifest
