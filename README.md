# ⚡ Let's Connect — Soft Skills Training Programme

A magnificent, fully responsive business portfolio website for **LET'S CONNECT — Soft Skills Training Programme**, built with Vite + React, TailwindCSS, Framer Motion, and Recharts.

Designed first for a dark, premium aesthetic, it features scroll-triggered transitions, interactive tabs, count-up stats, customized data charts, and dynamic content cards.

---

## 🚀 Tech Stack

- **Framework**: [Vite](https://vite.dev/) + [React 18](https://react.dev/)
- **Styling**: [TailwindCSS v3](https://tailwindcss.com/) (fully configured via `tailwind.config.js`)
- **Animations**: [Framer Motion](https://www.framer.com/motion/) (scroll transitions, tab sliding highlights, floating elements)
- **Charts**: [Recharts](https://recharts.org/) (Custom Donut & linear-gradient Bar charts)
- **Routing**: [React Router v6](https://reactrouter.com/) (`BrowserRouter` layout support)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Notification**: [React Hot Toast](https://react-hot-toast.com/) (validation & success status toasts)
- **Fonts**: Google Fonts ("Inter" for body copy, "Sora" for headlines)

---

## 🎨 Design System

- **Primary Color**: `#6C3FEE` (deep violet-purple)
- **Accent Color**: `#F97316` (vibrant orange)
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

## ✨ Key Features

1. **Sticky Glassmorphism Navbar**: Responsive navigation bar that transitions from transparent to a glass-blur backdrop on scroll, with a custom mobile drawer.
2. **Floating Stat Pills**: Hero section with interactive, staggered floating stat pills showcasing training metrics.
3. **Animated Overview Video Modal**: An interactive video showcase player modal.
4. **Animated Stat Counters**: Count-up numbers triggered dynamically as they enter the viewport using `useInView` and `requestAnimationFrame`.
5. **Interactive 4-Year tabs (Curriculum)**: Smooth sliding tab selector powered by Framer Motion's `layoutId` that dynamically updates curriculum content blocks.
6. **Pedagogy Donut Chart**: An interactive Recharts PieChart demonstrating the 70/20/10 training philosophy with custom glass tooltips.
7. **Responsive Stepper timeline**: A horizontal timeline for desktop and a vertical stepper for mobile screens representing process flows.
8. **Workload Gradient BarChart**: A linear-gradient Recharts BarChart rendering training day allocations per academic year.
9. **Interactive Testimonials**: An auto-playing slider carousel with manual arrows, navigation dots, and hover-to-pause logic.
10. **Validated Contact Form**: Complete contact form with custom select dropdowns, form validation, loading states, and success toasts.
11. **Back to Top Button**: Floating quick-scroll-to-top button that fades in once scroll depth exceeds 300px.

---

## 📁 Project Structure

```bash
src/
├── components/
│   ├── About.jsx         # Metric counters & philosophical description
│   ├── Assessment.jsx    # Graduation criteria cards with border glow
│   ├── ContactForm.jsx   # Form validation, info cards, and react-hot-toast trigger
│   ├── Curriculum.jsx    # Interactive tabs for Year 1 to 4 courses
│   ├── Footer.jsx        # Tagline, site navigation, & custom social SVGs
│   ├── Hero.jsx          # Float animations, CTAs, and video popup modal
│   ├── HowItWorks.jsx    # 4-step responsive stepper timeline
│   ├── Navbar.jsx        # Sticky glassmorphism header & mobile menu drawer
│   ├── Pedagogy.jsx      # Recharts Donut chart displaying split ratios
│   ├── Stats.jsx         # Counter utility cards with viewports triggers
│   └── Workload.jsx      # Recharts Bar chart showing day allocations
├── data/
│   └── programData.js    # Clean structural arrays & objects (No JSX strings)
├── App.jsx               # Assembles page structure and Toaster elements
├── main.jsx              # Application bootstrapper and BrowserRouter wrapper
└── index.css             # Tailwind imports and global style declarations
```

---

## ⚙️ Getting Started

### 1. Clone & Install Dependencies
Ensure you have Node.js installed on your machine.
```bash
git clone https://github.com/rohith-1205/letsconnect.git
cd letsconnect
npm install
```

### 2. Launch Local Development Server
Start the development server for local preview.
```bash
npm run dev
```
Open **[http://localhost:5173](http://localhost:5173)** (or the port displayed in terminal) to view the live app.

### 3. Build for Production
Bundle and optimize all assets for deployment.
```bash
npm run build
```
Verify the production-ready build outputs in the `dist` folder.
