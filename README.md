# ⚡ Let's Connect — Dual-Engine Business Portal

A premium, fully responsive business portfolio platform for **LET'S CONNECT**, built with React 19, Vite 8, TailwindCSS v3, Framer Motion, and Recharts. 

The application is structured into two core service verticals under one brand, coupled with a dedicated free social initiative.

---

## 🏛️ Brand Architecture & Portals

### 1. Unified Landing Page (`/`)
- A high-impact landing portal with "The Gap" thesis introducing the split-engine brand setup.
- Features an interactive **Service Selector (`ServiceToggle.jsx`)** routing users to their target portal.

### 2. Financial Services & Tax Consultation (`/business`)
- **Focus**: Led by **Vishal** (Founder & Business Tax Consultant), specializing in commercial auditing, taxation, GST setup, corporate compliance, and loan support.
- **Key Sections**: Custom comparative criteria table (`SealOfTrust.jsx`), structured pricing tiers, and client onboarding roadmap.
- **Tax Literacy Platform (Subsection)**: A free, public-awareness educational initiative integrated as a scrollable subsection (`#tax-literacy`). Features its own milestones timeline, marketing content previews, taglines, and live Webinar registration forms.

### 3. Training & Development (`/training`)
- **Focus**: Led by **Padmaja L** (Co-Founder & HR Tech Consultant), restoring the original student soft-skills career readiness program.
- **Key Sections**: Progressive 4-year curriculum tabs, interactive training split visualizations, workload distributions, assessments, candidate testimonials, and college enquiry forms.

---

## 🚀 Tech Stack & Dependencies

- **Framework**: [Vite 8](https://vite.dev/) + [React 19](https://react.dev/)
- **Styling**: [TailwindCSS v3](https://tailwindcss.com/)
- **Animations**: [Framer Motion 12](https://www.framer.com/motion/) (smooth transitions, tab layout transformations, drawers)
- **Charts**: [Recharts 3](https://recharts.org/) (Interactive Custom Donut & linear-gradient Bar charts)
- **Routing**: [React Router 7](https://reactrouter.com/) (Declarative client-side routing & auto-scroll viewport handlers)
- **Notification**: [React Hot Toast](https://react-hot-toast.com/) (Custom validated toast banners)
- **Hosting Config**: SPA fallback routing configured in `vercel.json` to prevent server-side `404: NOT_FOUND` errors on direct paths or page refreshes.

---

## 🎨 Design System

- **Primary Color**: `#6C3FEE` (deep violet-purple)
- **Accent Color**: `#F97316` (vibrant orange)
- **Secondary Accent**: `#14B8A6` (teal - designated for the free Tax Literacy Platform)
- **Dark BG**: `#0F0A1E` (near-black indigo)
- **Surface BG**: `#1A1035`
- **Card BG**: `#221548`
- **Text Primary**: `#F5F3FF`
- **Text Muted**: `#A89FC8`
- **Hero Gradient**: `from-[#6C3FEE] via-[#9B59F5] to-[#F97316]`
- **Typography**:
  - Headings (`h1`, `h2`, `h3`, etc.): `'Sora', sans-serif`
  - Body Copy (`body`, `p`, inputs): `'Inter', sans-serif`

---

## ✨ Key Interactive Features

1. **Vercel Routing Fallback**: Customized `vercel.json` redirecting all routes (`/(.*)`) to `index.html` allowing React Router to handle page reloads client-side.
2. **Contextual Navigation Bar**: `Navbar.jsx` dynamically updates its links, active portal badges, and call-to-actions depending on which page is active.
3. **Optimized Footer Links**: Built with React Router `<Link>` components to support fast, client-side route transitions and anchor targets without page reloads.
4. **Auto-Scroll Anchoring**: Handles URL hashes (e.g. `/business#tax-literacy`) on load and page transitions to smoothly scroll down to the targeted element.
5. **Interactive 4-Year Tabs**: Curriculum components utilizing Framer Motion's `layoutId` for smooth active border highlights.
6. **Animated Counter Pills**: Viewport-triggered statistics cards with count-up animations using requestAnimationFrame.
7. **Recharts Dashboards**: Includes custom tooltips and gradient fills for training distribution and workload allocations.

---

## 📁 Project Structure

```bash
src/
├── components/
│   ├── business/          # Financial Services components
│   │   ├── About.jsx              # Vishal's firm overview
│   │   ├── ContactBusiness.jsx    # Consultation form
│   │   ├── DualEngineHero.jsx     # Commercial hero section
│   │   ├── FinancialServices.jsx  # Main tax/audit services list
│   │   ├── HowItWorks.jsx         # Onboarding roadmap stepper
│   │   ├── SealOfTrust.jsx        # Comparative checklist table
│   │   ├── ServicePackages.jsx    # Firm service pricing levels
│   │   └── TrainingServices.jsx   # Corporate training modules
│   ├── home/              # Shared landing page components
│   │   ├── HeroCommon.jsx         # Master landing header with visual chips
│   │   ├── TheGap.jsx             # Corporate/student problem statement
│   │   └── TwoEngines.jsx         # Summary of dual business verticals
│   ├── taxlit/            # Free Tax Literacy Platform components
│   │   ├── ContactTax.jsx         # Webinar booking form
│   │   ├── Goals.jsx              # Strategic milestones timeline
│   │   ├── MarketingStrategy.jsx  # Content formats preview cards
│   │   ├── RevenueModel.jsx       # Non-profit funding mechanism info
│   │   ├── Taglines.jsx           # Core messaging highlight block
│   │   ├── TaxHero.jsx            # Initiative hero section
│   │   ├── USP.jsx                # Key differentiator metrics
│   │   └── VisionMission.jsx      # Vision/Mission details
│   ├── Footer.jsx         # Global footer with router links
│   ├── Navbar.jsx         # Dynamic sticky glassmorphic navigation header
│   └── ServiceToggle.jsx  # Landing split path selector
├── data/                  # Decoupled static data files
│   ├── businessData.js    # Data lists for compliance & consultancy
│   ├── programData.js     # Data lists for soft skills curriculum
│   └── taxlitData.js      # Data lists for tax literacy initiative
├── pages/                 # Route containers
│   ├── BusinessSite.jsx   # /business page (Vishal's services + Tax Literacy subsection)
│   ├── Home.jsx           # / landing portal page
│   ├── TaxLitSite.jsx     # Standalone Tax Literacy preview page
│   └── TrainingSite.jsx   # /training page (Padmaja's soft skills program)
├── App.css                # Custom site styles
├── App.jsx                # Router setup and global back-to-top handler
├── index.css              # Custom styling definitions & Tailwind utilities
└── main.jsx               # App entry point
```

---

## ⚙️ Getting Started

### 1. Clone & Install Dependencies
```bash
git clone https://github.com/rohith-1205/letsconnect.git
cd letsconnect
npm install
```

### 2. Launch Local Development Server
```bash
npm run dev
```
Open **[http://localhost:5173](http://localhost:5173)** in your browser.

### 3. Build & Verify
```bash
npm run build
npm run lint
```
Build files are compiled into `dist/`. The project contains fully compliant ESLint rules and builds warnings-free.
