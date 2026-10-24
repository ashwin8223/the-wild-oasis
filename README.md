# 🏕️ The Wild Oasis

**The Wild Oasis** is a full-featured, internal management application designed for boutique cabin hotels and luxury resorts. It provides a highly interactive, data-driven dashboard for hospitality staff to streamline day-to-day business operations—including guest management, check-in/check-out execution, booking lifecycles, and remote inventory administration.

🔗 **Live Demo:** https://the-wild-oasis-one.netlify.app

---

## 🚀 Key Features

### 📊 Operations Dashboard & Analytics

- **Real-Time KPIs:** Tracks critical operational metrics including total stay duration, recent sales revenue, check-in activity, and overall cabin occupancy rates.
- **Trend Analysis:** Visualises recent sales metrics and historical stay durations over configurable 7, 30, or 90-day analytics intervals.
- **Daily Activity Feed:** Aggregates and displays actionable item alerts for scheduled guest arrivals and departures on the current calendar day.

### 📅 Advanced Booking Engine

- **Full Booking Lifecycle:** Provides front-desk managers control over standard check-ins, departures, and cancellations.
- **Dynamic Add-Ons:** Enables staff to apply cabin features (like breakfast packages) and update transactional invoice statuses dynamically during check-in.
- **Data Presentation:** Leverages multi-layered server-side filtering, multi-column sorting, and asynchronous pagination grids.

### 🪵 Cabin & Inventory Administration

- **Granular Inventory Control:** Supports full CRUD workflows to instantly deploy, view, modify, or decommission cabin listings.
- **Cloud Asset Pipeline:** Connects directly with remote storage engines to upload, store, and refresh high-resolution marketing assets instantly.
- **Duplication Engine:** Features one-click template replication rules to generate clone entries of existing cabin configurations.

### ⚙️ System Settings & Enterprise Security

- **Global Variable Control:** Enables instant runtime overrides for hotel-wide policies (e.g., dynamic breakfast pricing, global minimum/maximum booking caps).
- **Identity Management:** Restricts dashboard access behind secure multi-user credentials, complete with individual profile customization (avatars and account password rotations).
- **Adaptive Interface:** Implemented a localized dark and light visual layout theme state that saves seamlessly across browser instances.

---

## 🛠️ Technical Architecture & Stack

This production-ready control system is built utilizing enterprise frontend engineering standards and decoupled cloud workflows:

- **Core UI Architecture:** React framework powered by Vite for optimised developer tooling and fast deployment bundles.
- **Style Delivery:** Structured entirely via Styled Components to maintain modular, fully encapsulated layout layers.
- **Asynchronous State Management:** Utilizes TanStack Query (React Query) to orchestrate data-fetching operations, smart server-side caching, aggressive request pre-fetching, and optimistic interface updates.
- **Navigation Engine:** Routed via declarative, declarative single-page application paths protected by strict authentication wrappers.
- **Database & Cloud Storage Infrastructure:** Built upon a scalable Supabase (PostgreSQL) backend, securing relational table definitions, distinct bucket policies, and encrypted JWT user schemas.
- **Form Schemas:** Managed via React Hook Form to provide robust, non-intrusive runtime client-side data validation.
- **Data Graphic Rendering:** Implemented Recharts to transform backend analytical collections into responsive SVGs.

---

## 💻 Local Setup & Development

### Prerequisites

Ensure that Node.js (LTS version recommended) is available on your local operating system environment.

### Steps to Deploy Locally

1. **Clone the master source directory:**

   ```bash
   git clone https://github.com
   cd the-wild-oasis
   ```

2. **Provision local node modules:**

   ```bash
   npm install
   ```

3. **Configure Environment Secrets:**
   Establish a root `.env` config file containing your dedicated database API endpoints:

   ```env
   VITE_SUPABASE_URL=your_production_supabase_endpoint_url
   VITE_SUPABASE_ANON_KEY=your_production_supabase_public_anon_key
   ```

4. **Boot up the local runtime server:**
   ```bash
   npm run dev
   ```
   Open your target browser instance and navigate to `http://localhost:5173` to explore the administration panel locally.
