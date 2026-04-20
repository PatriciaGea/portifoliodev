# Patricia Gea Portfolio

Personal portfolio built with Next.js App Router, TypeScript, and a custom UI layer focused on performance, clarity, and responsive behavior.

## Overview

This project presents professional profile, technical stack, selected projects, and contact channels in a single-page experience.

Core goals:

- Present background and capabilities with clear information hierarchy
- Keep the interface lightweight and responsive across desktop and mobile
- Maintain a clean component structure for ongoing updates
- Provide direct contact through an integrated form

## Features

- Hero section with animated rotating profile image
- Compact About section cards with education, interests, languages, and Instagram portfolio links
- Technology stack and concepts overview
- Project showcase with category labels
- Contact section with direct channels and form submission
- EmailJS integration for form delivery
- Dark/light theme support

## Tech Stack

- Framework: Next.js 14 (App Router)
- Language: TypeScript
- UI: React 18 + CSS (custom properties)
- Icons: Lucide React
- Theme handling: next-themes
- Animations: CSS keyframes + Framer Motion
- Form delivery: EmailJS Browser SDK

## Project Structure

```text
src/
  app/
    globals.css
    layout.tsx
    page.tsx
  components/
    layout/
      Navbar.tsx
      Footer.tsx
      ThemeProvider.tsx
    sections/
      Hero.tsx
      About.tsx
      TechStack.tsx
      Projects.tsx
      Contact.tsx
  lib/
    portfolio-data.ts
public/
  images/
```

## Getting Started

### Requirements

- Node.js 18+
- npm

### Install and Run

```bash
npm install
npm run dev
```

Open http://localhost:3000.

### Production

```bash
npm run build
npm start
```

## Environment Variables

Create a local environment file named `.env.local` in the project root.

Required variables for the contact form:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

Notes:

- Variables prefixed with `NEXT_PUBLIC_` are exposed to client-side code by design.
- Keep private credentials out of client-side environment variables.

## Customization Guide

- Profile, social links, highlights, stack, and projects: `src/lib/portfolio-data.ts`
- Global styles, theme tokens, and animations: `src/app/globals.css`
- Section content and layout: files in `src/components/sections/`

## Quality Checks

Run linting:

```bash
npm run lint
```

Build verification:

```bash
npm run build
```

## Deployment

This project can be deployed to any Node-compatible platform.

Recommended flow:

1. Push repository to GitHub.
2. Import the repository into your hosting platform.
3. Configure production environment variables.
4. Deploy using the default Next.js build/start commands.

## License

This repository is for personal portfolio use.
