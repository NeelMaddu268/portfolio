# Neel Maddu Portfolio

Personal portfolio website built with Next.js (Pages Router), showcasing AI and iOS engineering projects, technical experience, and resume.

Live site: https://neel-ai-portfolio.vercel.app/

## Stack

- Next.js 15 (Pages Router)
- React 19
- Framer Motion
- Lucide React

## Local Development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm run start` - Run production build locally
- `npm run lint` - Run Next.js lint checks

## Project Structure

- `pages/index.js` - Main landing page (hero, projects, experience, skills, resume)
- `pages/projects/*.js` - Individual project deep-dive pages
- `components/ProjectCard.js` - Reusable project card component
- `components/ExperienceItem.js` - Reusable experience card component
- `styles/globals.css` - Global design system and responsive styles
- `public/` - Static assets (headshot, resume PDF, favicon)

## Deployment

The site is deployed on Vercel with automatic deployments from GitHub.
