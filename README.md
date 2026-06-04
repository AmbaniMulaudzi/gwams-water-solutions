# GWAMS Vhalaudzi Water Solutions — Website

A professional, production-ready website for **GWAMS Vhalaudzi Water Solutions** built with Next.js 14, Sanity CMS, Tailwind CSS, and TypeScript.

---

## 🚀 Tech Stack

| Technology | Purpose |
|---|---|
| **Next.js 14** (App Router) | Framework & SSR/SSG |
| **Sanity CMS** | Headless content management |
| **Tailwind CSS** | Styling & design system |
| **TypeScript** | Type safety |
| **react-hot-toast** | Toast notifications |
| **Vercel** | Deployment |

---

## 📁 Project Structure

```
gwams-water-solutions/
├── app/
│   ├── layout.tsx              # Root layout with Navbar, Footer, Toaster
│   ├── page.tsx                # Home page
│   ├── globals.css             # Global styles & Tailwind directives
│   ├── sitemap.ts              # Auto-generated sitemap
│   ├── robots.ts               # Robots.txt
│   ├── not-found.tsx           # 404 page
│   ├── about/page.tsx          # About page
│   ├── services/page.tsx       # Services page
│   ├── gallery/page.tsx        # Gallery with filter & lightbox
│   ├── blog/
│   │   ├── page.tsx            # Blog listing
│   │   └── [slug]/page.tsx     # Blog post detail
│   ├── contact/page.tsx        # Contact page
│   ├── studio/[[...tool]]/     # Sanity Studio (embedded)
│   └── api/
│       ├── contact/route.ts    # Contact form API (saves to Sanity)
│       └── revalidate/route.ts # ISR revalidation webhook
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx          # Sticky navbar with dark mode toggle
│   │   └── Footer.tsx          # Full footer with links
│   ├── sections/
│   │   ├── HeroSection.tsx     # Animated hero with stats
│   │   ├── ServicesSection.tsx # 4-service cards grid
│   │   ├── WhyChooseUs.tsx     # Features grid
│   │   ├── TestimonialsSection.tsx  # Testimonials carousel
│   │   ├── GalleryPreview.tsx  # 6-item gallery preview
│   │   ├── FAQSection.tsx      # Accordion FAQ
│   │   └── CTABanner.tsx       # Call-to-action banner
│   ├── forms/
│   │   └── ContactForm.tsx     # Validated contact form
│   └── ui/
│       ├── ThemeProvider.tsx   # Dark mode context
│       └── WhatsAppButton.tsx  # Floating WhatsApp button
│
├── sanity/
│   ├── lib/
│   │   ├── client.ts           # Sanity client config
│   │   ├── image.ts            # Image URL builder
│   │   ├── queries.ts          # GROQ queries
│   │   └── fetch.ts            # Data fetching utilities
│   └── schemas/
│       ├── siteSettings.ts     # Site-wide settings
│       ├── service.ts          # Service schema
│       └── index.ts            # All other schemas
│
├── types/index.ts              # TypeScript interfaces
├── sanity.config.ts            # Sanity Studio config
├── tailwind.config.ts          # Tailwind with custom design tokens
├── next.config.js              # Next.js config
└── .env.example                # Environment variables template
```

---

## ⚙️ Installation

### 1. Clone / Download the Project

```bash
git clone https://github.com/your-username/gwams-water-solutions.git
cd gwams-water-solutions
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. Set Up Environment Variables

```bash
cp .env.example .env.local
```

Edit `.env.local` with your values:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
SANITY_API_TOKEN=your_api_token
NEXT_PUBLIC_SITE_URL=https://gwamswhatersolutions.co.za
NEXT_PUBLIC_WHATSAPP_NUMBER=27663644104
SANITY_REVALIDATE_SECRET=your_random_secret
```

---

## 🎨 Sanity CMS Setup

### 1. Create a Sanity Project

```bash
# Install Sanity CLI globally
npm install -g @sanity/cli

# Create a new project (or use existing)
sanity init
```

Copy the **Project ID** to your `.env.local`.

### 2. Generate an API Token

1. Go to [sanity.io/manage](https://sanity.io/manage)
2. Select your project → **API** → **Tokens**
3. Create a token with **Editor** permissions
4. Copy it to `SANITY_API_TOKEN` in `.env.local`

### 3. Access the Studio

The Sanity Studio is embedded in the Next.js app at:

```
http://localhost:3000/studio
```

### 4. Populate Initial Content

In the Studio, create the following documents:

**Site Settings** (`siteSettings`):
- Title: GWAMS Vhalaudzi Water Solutions
- Phone: 066 364 4104
- WhatsApp: 066 364 4104
- Location: Tshituni Tsha Fhasi, Nzhelele
- Contact Person: Ambani Mulaudzi

**Services** (create 4 documents):
1. Borehole Pump Installation (order: 1, featured: true)
2. Pressure Pump Installation (order: 2, featured: true)
3. Water Tank Installation (order: 3, featured: true)
4. Borehole Pump Repair (order: 4, featured: true)

**Gallery Items**: Upload your actual project photos with categories.

**Testimonials**: Add real customer reviews.

---

## 🖥️ Development

```bash
npm run dev
```

Visit `http://localhost:3000`

The Sanity Studio is at `http://localhost:3000/studio`

---

## 🌐 Deployment to Vercel

### 1. Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/your-username/gwams-water-solutions.git
git push -u origin main
```

### 2. Deploy on Vercel

1. Go to [vercel.com](https://vercel.com) → **New Project**
2. Import your GitHub repository
3. Add all environment variables from `.env.local`
4. Click **Deploy**

### 3. Set Up CORS in Sanity

1. Go to [sanity.io/manage](https://sanity.io/manage) → Your project → **API** → **CORS Origins**
2. Add your production URL: `https://gwamswhatersolutions.co.za`
3. Add `http://localhost:3000` for development

### 4. Set Up Revalidation Webhook (Optional)

In Sanity → **API** → **Webhooks**, create a webhook:
- URL: `https://your-domain.co.za/api/revalidate?secret=YOUR_REVALIDATE_SECRET`
- Trigger on: all mutations

---

## 🌙 Features

- ✅ **Dark Mode** — System preference detection + manual toggle
- ✅ **WhatsApp Button** — Floating with pulse animation
- ✅ **Contact Form** — Saves submissions to Sanity CMS
- ✅ **Gallery Filter** — Client-side category filtering with lightbox
- ✅ **Testimonials Carousel** — Auto/manual navigation
- ✅ **FAQ Accordion** — Smooth open/close
- ✅ **SEO Optimized** — Metadata, sitemap, robots.txt
- ✅ **Responsive** — Mobile-first design
- ✅ **Sanity Studio** — Embedded at `/studio`
- ✅ **Toast Notifications** — Contact form feedback

---

## 📞 Business Contact

**GWAMS Vhalaudzi Water Solutions**
- 📞 066 364 4104
- 💬 WhatsApp: 066 364 4104
- 📍 Tshituni Tsha Fhasi, Nzhelele, Limpopo
- 👤 Contact: Ambani Mulaudzi

---

## 📝 License

Private project. All rights reserved © GWAMS Vhalaudzi Water Solutions.
