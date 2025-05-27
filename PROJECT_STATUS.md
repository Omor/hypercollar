# Hypercollar Project Status Documentation

## Project Overview
- **Project Name**: Hypercollar (Technical) / Collar (Brand)
- **Domain**: hypercollar.com
- **Purpose**: AI-powered intelligence platform for the Hyperliquid ecosystem
- **Current Stage**: MVP Development - Newsletter Landing Page Complete

## Current Status (December 2024)

### ✅ Completed
1. **Repository Setup**
   - GitHub repo: github.com/omor/hypercollar
   - Next.js 14 with TypeScript
   - Tailwind CSS configured
   - Project structure created

2. **Homepage**
   - Brand: "Collar" with green dot accent (#14F195)
   - Hero section with tagline
   - 3 feature cards (Ask Collar, Research, Pack Benefits)
   - Newsletter signup section with clear value proposition

3. **Newsletter System**
   - Frontend form component working
   - Saves emails to `subscribers.json` file
   - API endpoint at `/api/newsletter`
   - Success/error messaging
   - Styled with Tailwind

4. **Navigation**
   - Navbar component created
   - Links to Home, Research, About (pages not built yet)
   - Logo hidden on homepage to avoid duplication

5. **Styling**
   - Black background (#000000)
   - Green accent (#14F195)
   - Gray cards with hover effects
   - Responsive design

### 🚧 In Progress / Next Steps

1. **Email Integration**
   - Need to integrate ConvertKit/Mailchimp for actual email sending
   - Currently just saves to JSON file
   - No confirmation emails yet

2. **Missing Pages**
   - `/research` - Not created
   - `/about` - Not created
   - `/ask` (AI Chat) - Not created
   - `/pack` (Hyperdog benefits) - Not created

3. **Database**
   - Prisma schema created but not connected
   - Using JSON file storage temporarily
   - Need PostgreSQL setup

4. **AI Integration**
   - No AI chat implemented yet
   - API keys in .env.example but not used

5. **Deployment**
   - Not deployed yet
   - Ready for Vercel deployment

## Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: Prisma (PostgreSQL) - not connected yet
- **AI**: Claude/Perplexity APIs - not implemented yet

## File Structure
```
hypercollar/
├── src/
│   ├── app/
│   │   ├── page.tsx (Homepage)
│   │   ├── layout.tsx (Root layout with navbar)
│   │   ├── globals.css (Tailwind imports)
│   │   └── api/
│   │       └── newsletter/
│   │           └── route.ts (Newsletter API)
│   ├── components/
│   │   ├── ui/
│   │   │   └── newsletter-form.tsx
│   │   └── layout/
│   │       └── navbar.tsx
│   └── lib/
│       └── db.ts (Prisma client - not used yet)
├── prisma/
│   └── schema.prisma (Database schema)
├── subscribers.json (Email storage)
└── [config files]
```

## Current Features
1. **Newsletter Signup**
   - Collects emails
   - Shows "Every Friday" delivery
   - Value props: Project analysis, actionable data, ecosystem trends, research previews
   - 500+ subscribers claim

2. **Homepage Sections**
   - Hero with "Get Weekly Intelligence" CTA
   - Three feature cards (coming soon)
   - Newsletter section with benefits list

## Environment Variables Needed
```env
# In .env.local
DATABASE_URL="postgresql://..."
ANTHROPIC_API_KEY="..."
PERPLEXITY_API_KEY="..."
CONVERTKIT_API_KEY="..." (for email)
CONVERTKIT_FORM_ID="..." (for email)
```

## Commands to Run Project
```bash
cd ~/Downloads/hypercollar
npm install --legacy-peer-deps
npm run dev
# Visit http://localhost:3000
```

## Immediate Next Actions
1. **Create About page** - Company info, team, mission
2. **Create Research page** - Blog/content section
3. **Set up ConvertKit** - For actual email delivery
4. **Deploy to Vercel** - Get it live
5. **Create newsletter template** - HTML email design

## Design Decisions Made
- Black background with green accent (#14F195)
- "Collar" as brand name (not "Ask Collar")
- Newsletter focused MVP (not AI chat first)
- Hyperdog NFT benefits planned but not implemented
- Clean, minimal design with no wasted space

## Problems Solved
- npm permission issues (fixed with sudo chown)
- Dependency conflicts (used --legacy-peer-deps)
- 'use client' directive placement
- Removed duplicate logos
- Fixed excessive white space

## Newsletter Copy
- **Title**: "The Hyperliquid Intelligence Report"
- **Frequency**: Every Friday
- **Benefits**: New projects, actionable data, ecosystem trends, research previews
- **Social Proof**: "500+ traders and builders"

## Notes for Next Session
- User wants clean design, no wasted space
- Newsletter is priority before AI features
- Plans to add Hyperdog NFT benefits later
- Needs email platform integration
- Ready for deployment after a few more pages

## GitHub Status
- Repo created and pushed
- All files uploaded
- Used personal access token for auth
- Main branch is default
