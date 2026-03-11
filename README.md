# Syntrix

AI Agency + Digital Marketing + Software Tools — Building the future with intelligent solutions.

**Live:** [syntrixagency.vercel.app](https://syntrixagency.vercel.app)

## About

Syntrix is a full-service agency offering AI solutions, digital marketing, and custom software development. Founded in 2021, we've delivered 150+ projects across 10+ countries.

### Services

- **AI Agency** — Custom AI models, NLP, computer vision, chatbots, predictive analytics
- **Digital Marketing** — Social media, SEO, paid ads, email automation, brand strategy
- **Software Tools** — Web apps, SaaS products, APIs, developer tools, cloud infrastructure

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **Animations:** Motion (Framer Motion)
- **Forms:** React Hook Form + Zod
- **Content:** MDX blog system
- **Deployment:** Vercel

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
git clone https://github.com/your-org/syntrix.git
cd syntrix
npm install
```

### Environment Variables

Copy the example env file and fill in your values:

```bash
cp .env.example .env.local
```

Required variables:

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_WEB3FORMS_KEY` | [Web3Forms](https://web3forms.com/) access key for the contact form |

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/            # Next.js App Router pages
├── components/
│   ├── layout/     # Navbar, Footer, Logo, PageHeader
│   ├── ui/         # Buttons, Cards, Inputs
│   ├── sections/   # Page sections (Hero, Features, etc.)
│   ├── animations/ # Animation wrappers
│   └── backgrounds/# Background effects
├── data/           # Services, projects, team, navigation
├── lib/            # Utils, constants, fonts, validations
├── types/          # TypeScript interfaces
└── hooks/          # Custom React hooks
content/
└── blog/           # MDX blog posts
public/
└── assets/         # Images, logos, team photos
```

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — hero, services overview, featured projects |
| `/about` | Company story, mission, values, team, timeline |
| `/services` | All services with detailed breakdowns |
| `/services/[slug]` | Individual service detail pages |
| `/portfolio` | Project showcase with category filtering |
| `/portfolio/[slug]` | Project case studies |
| `/blog` | Blog listing with tags and reading time |
| `/blog/[slug]` | Individual blog posts (MDX) |
| `/contact` | Contact form with Web3Forms integration |

## Team

- **Vedanth** — Co-Founder & CEO
- **Mithun Gowda B** — Founder & COO

## Contact

- **Email:** syntrixagency01@gmail.com
- **Instagram:** [@syntrixagency](https://www.instagram.com/syntrixagency)
- **Website:** [syntrixagency.vercel.app](https://syntrixagency.vercel.app)

## License

Proprietary. All rights reserved. See [LICENSE](LICENSE) for details.
