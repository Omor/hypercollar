#!/bin/bash

echo "🚀 Setting up Hypercollar repository..."

mkdir -p src/{app,components,lib,styles,types}
mkdir -p public/{images,fonts}
mkdir -p content/{research,projects,newsletter}
mkdir -p prisma docs
mkdir -p src/app/{api,research,projects,ask,pro,dashboard}
mkdir -p src/app/api/{auth,chat,research,projects}
mkdir -p src/components/{ui,layout,features,shared}
mkdir -p src/lib/{utils,api,db,auth}

cat > README.md << 'EOF'
# Hypercollar

The official repository for **Collar** - AI-powered intelligence platform for the Hyperliquid ecosystem.

![Collar Logo](public/images/collar-logo.svg)

## 🚀 Overview

Collar provides comprehensive research, real-time data, and AI-powered insights for traders and builders in the Hyperliquid ecosystem.

### Features
- 🤖 **Ask Collar** - AI assistant specialized in Hyperliquid
- 📊 **Project Research** - Deep dives and analysis
- 📈 **Real-time Intelligence** - Market data and alerts
- 🚀 **Pro Features** - Advanced analytics for power users

## 🛠 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **AI Integration:** Claude API / Perplexity API
- **Database:** PostgreSQL with Prisma
- **Authentication:** NextAuth.js with Web3
- **Deployment:** Vercel

## 📦 Installation

```bash
git clone https://github.com/[your-username]/hypercollar.git
cd hypercollar
npm install
cp .env.example .env.local
npm run dev
```

## 🔧 Environment Variables

Create a `.env.local` file with the variables from `.env.example`

## 📁 Project Structure

```
hypercollar/
├── src/
│   ├── app/
│   ├── components/
│   ├── lib/
│   └── styles/
├── public/
├── content/
└── prisma/
```

## 🚀 Deployment

```bash
vercel --prod
```

## 📝 License

MIT License

## 🤝 Contributing

Contributions are welcome! Please read our [Contributing Guidelines](CONTRIBUTING.md) first.

## 📞 Contact

- Website: [hypercollar.com](https://hypercollar.com)
- Twitter: [@hypercollar](https://twitter.com/hypercollar)
- Discord: [Join our server](https://discord.gg/hypercollar)
EOF

cat > .gitignore << 'EOF'
node_modules/
.pnp
.pnp.js
coverage/
.nyc_output
.next/
out/
build/
dist/
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
lerna-debug.log*
.pnpm-debug.log*
.env
.env.local
.env.development.local
.env.test.local
.env.production.local
.vercel
*.tsbuildinfo
next-env.d.ts
.DS_Store
Thumbs.db
.vscode/
.idea/
*.swp
*.swo
*~
prisma/migrations/dev/
*.db
*.db-journal
logs/
.cache/
.parcel-cache/
tmp/
temp/
EOF

cat > package.json << 'EOF'
{
  "name": "hypercollar",
  "version": "1.0.0",
  "description": "Collar - AI-powered intelligence platform for Hyperliquid",
  "author": "Hypercollar Labs",
  "license": "MIT",
  "homepage": "https://hypercollar.com",
  "repository": {
    "type": "git",
    "url": "git+https://github.com/[your-username]/hypercollar.git"
  },
  "bugs": {
    "url": "https://github.com/[your-username]/hypercollar/issues"
  },
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "lint:fix": "next lint --fix",
    "type-check": "tsc --noEmit",
    "format": "prettier --write \"**/*.{js,jsx,ts,tsx,json,md}\"",
    "test": "jest",
    "test:watch": "jest --watch",
    "db:push": "prisma db push",
    "db:migrate": "prisma migrate dev",
    "db:studio": "prisma studio",
    "postinstall": "prisma generate"
  },
  "dependencies": {
    "next": "14.0.4",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "typescript": "^5.3.3",
    "@types/node": "^20.10.5",
    "@types/react": "^18.2.45",
    "@types/react-dom": "^18.2.18",
    "tailwindcss": "^3.4.0",
    "autoprefixer": "^10.4.16",
    "postcss": "^8.4.32",
    "@prisma/client": "^5.7.1",
    "prisma": "^5.7.1",
    "next-auth": "^4.24.5",
    "ethers": "^6.9.0",
    "axios": "^1.6.2",
    "react-query": "^3.39.3",
    "zustand": "^4.4.7",
    "react-hook-form": "^7.48.2",
    "zod": "^3.22.4",
    "@hookform/resolvers": "^3.3.2",
    "date-fns": "^3.0.6",
    "clsx": "^2.0.0",
    "react-hot-toast": "^2.4.1",
    "lucide-react": "^0.294.0"
  },
  "devDependencies": {
    "eslint": "^8.56.0",
    "eslint-config-next": "14.0.4",
    "prettier": "^3.1.1",
    "@testing-library/react": "^14.1.2",
    "@testing-library/jest-dom": "^6.1.5",
    "jest": "^29.7.0",
    "jest-environment-jsdom": "^29.7.0"
  },
  "engines": {
    "node": ">=18.17.0"
  }
}
EOF

cat > tsconfig.json << 'EOF'
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./src/*"],
      "@/components/*": ["./src/components/*"],
      "@/lib/*": ["./src/lib/*"],
      "@/styles/*": ["./src/styles/*"],
      "@/types/*": ["./src/types/*"],
      "@/content/*": ["./content/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
EOF

cat > next.config.js << 'EOF'
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['hypercollar.com'],
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          }
        ]
      }
    ]
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: '/api/:path*'
      }
    ]
  }
}

module.exports = nextConfig
EOF

cat > tailwind.config.ts << 'EOF'
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'collar-black': '#0A0A0A',
        'collar-gray': {
          100: '#F5F5F5',
          200: '#E5E5E5',
          300: '#D4D4D4',
          400: '#A3A3A3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        },
        'collar-green': '#14F195',
        'collar-red': '#FF3B3B',
        'collar-blue': '#0066FF',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

export default config
EOF

cat > .env.example << 'EOF'
NEXT_PUBLIC_SITE_NAME="Collar"
NEXT_PUBLIC_DOMAIN="hypercollar.com"
NEXT_PUBLIC_BRAND_NAME="Collar"
NEXT_PUBLIC_TAGLINE="Hyperliquid Intelligence"

ANTHROPIC_API_KEY=your_anthropic_api_key_here
PERPLEXITY_API_KEY=your_perplexity_api_key_here
DEEPSEEK_API_KEY=your_deepseek_api_key_here

DATABASE_URL="postgresql://user:password@localhost:5432/hypercollar"

NEXTAUTH_SECRET=your_nextauth_secret_here
NEXTAUTH_URL=http://localhost:3000

NEXT_PUBLIC_HYPERLIQUID_CHAIN_ID=998
NEXT_PUBLIC_HYPERLIQUID_RPC=https://api.hyperliquid.xyz/evm

EMAIL_SERVER_HOST=smtp.sendgrid.net
EMAIL_SERVER_PORT=587
EMAIL_SERVER_USER=apikey
EMAIL_SERVER_PASSWORD=your_sendgrid_api_key
EMAIL_FROM=noreply@hypercollar.com

NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_POSTHOG_KEY=your_posthog_key

NEXT_PUBLIC_ENABLE_AI_CHAT=true
NEXT_PUBLIC_ENABLE_WALLET_CONNECT=false
NEXT_PUBLIC_MAINTENANCE_MODE=false
EOF

cat > prisma/schema.prisma << 'EOF'
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model User {
  id              String    @id @default(cuid())
  wallet          String    @unique
  email           String?   @unique
  tier            UserTier  @default(FREE)
  
  questionsToday  Int      @default(0)
  lastResetDate   DateTime @default(now())
  totalQuestions  Int      @default(0)
  
  createdAt       DateTime @default(now())
  updatedAt       DateTime @updatedAt
  
  sessions        Session[]
  subscriptions   Subscription[]
  questions       Question[]
}

model Session {
  id           String   @id @default(cuid())
  sessionToken String   @unique
  userId       String
  expires      DateTime
  user         User     @relation(fields: [userId], references: [id], onDelete: Cascade)
}

model Subscription {
  id        String   @id @default(cuid())
  userId    String
  user      User     @relation(fields: [userId], references: [id])
  
  status    SubscriptionStatus
  tier      SubscriptionTier
  
  startDate DateTime @default(now())
  endDate   DateTime?
  
  stripeCustomerId       String?
  stripeSubscriptionId   String?
  
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

model Question {
  id        String   @id @default(cuid())
  userId    String
  user      User     @relation(fields: [userId], references: [id])
  
  question  String
  answer    String
  tokens    Int
  cost      Float
  
  cached    Boolean  @default(false)
  
  createdAt DateTime @default(now())
}

model Project {
  id          String   @id @default(cuid())
  slug        String   @unique
  name        String
  category    String
  status      ProjectStatus
  
  description String
  website     String?
  twitter     String?
  discord     String?
  github      String?
  
  tvl         Float?
  users       Int?
  volume24h   Float?
  
  collarScore Float?
  
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
  
  research    Research[]
}

model Research {
  id          String   @id @default(cuid())
  slug        String   @unique
  title       String
  summary     String
  content     String   @db.Text
  
  type        ResearchType
  projectId   String?
  project     Project? @relation(fields: [projectId], references: [id])
  
  published   Boolean  @default(false)
  premium     Boolean  @default(false)
  
  readTime    Int
  views       Int      @default(0)
  
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
  publishedAt DateTime?
}

enum UserTier {
  FREE
  PRO
  PRO_PLUS
}

enum SubscriptionStatus {
  ACTIVE
  CANCELLED
  EXPIRED
  TRIALING
}

enum SubscriptionTier {
  PRO
  PRO_PLUS
}

enum ProjectStatus {
  ACTIVE
  BETA
  DEVELOPMENT
  DEPRECATED
}

enum ResearchType {
  DEEP_DIVE
  QUICK_TAKE
  RISK_ALERT
  WEEKLY_REPORT
}
EOF

cat > docs/CONTRIBUTING.md << 'EOF'
# Contributing to Hypercollar

We love your input! We want to make contributing to Hypercollar as easy and transparent as possible.

## Development Process

1. Fork the repo and create your branch from `main`
2. Run `npm install` to install dependencies
3. Make your changes
4. Run `npm run lint` and `npm run type-check`
5. Run `npm test` to ensure tests pass
6. Create a Pull Request

## Code Style

- Use TypeScript for all new code
- Follow the existing code style
- Use meaningful variable names
- Add comments for complex logic
- Write tests for new features

## Commit Messages

Use conventional commits:
- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation changes
- `style:` Code style changes
- `refactor:` Code refactoring
- `test:` Test updates
- `chore:` Build process updates

Example: `feat: add AI chat rate limiting`

## Pull Request Process

1. Update the README.md with details of changes if needed
2. Update the docs/ if you're changing APIs
3. The PR will be merged once you have approval from maintainers

## License

By contributing, you agree that your contributions will be licensed under the MIT License.
EOF

touch docs/deployment.md
touch docs/api.md

cat > postcss.config.js << 'EOF'
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
EOF

touch src/app/layout.tsx
touch src/app/page.tsx
touch src/app/globals.css
touch src/lib/utils.ts

echo "✅ Hypercollar repository structure created successfully!"
echo ""
echo "📝 Next steps:"
echo "1. Run: npm install"
echo "2. Copy .env.example to .env.local and add your API keys"
echo "3. Run: npm run dev"
echo ""
echo "🚀 Don't forget to:"
echo "- Replace [your-username] in package.json and README.md"
echo "- Add your actual API keys to .env.local"
echo "- Create a logo file at public/images/collar-logo.svg"
