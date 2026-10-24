# 🏕️ The Wild Oasis

**The Wild Oasis** is a comprehensive internal management application built for a boutique cabin hotel. It allows hotel employees to manage cabins, bookings, guests, and overall resort settings through a highly interactive, data-driven dashboard.

This project was built as the capstone application in Jonas Schmedtmann's [Ultimate React Course on Udemy](https://udemy.com). It demonstrates advanced React patterns, professional state management, real-time data integration, and complex UI design.

🔗 **Live Demo:** [Insert your Netlify URL here]

---

## 🚀 Features

### 📊 Dashboard & Analytics

- **Daily Statistics:** Tracks stay duration, check-ins, sales, and overall occupancy rate.
- **Dynamic Graphs:** Displays visual analytics for recent sales and stay durations over 7, 30, or 90 days.
- **Activity Tracker:** Real-time visibility into today's expected check-ins and check-outs.

### 📅 Booking Management

- **Complete Booking Lifecycle:** Full control over guest check-in, check-out, and booking cancellation.
- **Optional Add-ons:** Ability to add breakfast options or track payment status at the time of check-in.
- **Advanced Tables:** Features multi-layered server-side sorting, filtering, and seamless pagination.

### 🪵 Cabin Administration

- **Full CRUD Operations:** Seamlessly create, read, update, and delete cabin entries.
- **Media Uploads:** Directly uploads and replaces cabin images in remote cloud storage.
- **Duplicate Feature:** Quick one-click duplication of existing cabins for faster management.

### ⚙️ System Settings & Authentication

- **Global Rules:** Dynamic adjustment of hotel-wide variables (e.g., breakfast price, minimum/maximum nights).
- **Secure Access:** Built-in user signups, multi-user authentication, and profile updates (avatars/passwords).
- **Theme Customization:** A fully integrated dark/light mode toggle stored seamlessly in local state.

---

## 🛠️ Tech Stack

- **Frontend Framework:** React (via Vite)
- **Styling & UI:** Styled Components
- **State Management & Data Fetching:** React Query (TanStack Query)
- **Routing:** React Router
- **Backend & Database:** Supabase (PostgreSQL database, Authentication, and Object Storage)
- **Form Handling:** React Hook Form
- **Charts & Visuals:** Recharts
- **Helper Libraries:** React Icons, Date-fns, Hot Toast

---

## 💻 Getting Started

### Prerequisites

Make sure you have Node.js installed on your machine.

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com
   cd the-wild-oasis
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up Environment Variables:**
   Create a `.env` file in the root directory of your project and populate it with your Supabase credentials:

   ```env
   VITE_SUPABASE_URL=your_supabase_project_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:5173` to view the application.

---

## 🏗️ Architecture & Core Concepts

This application serves as a portfolio piece showcasing advanced frontend engineering patterns:

- **Declarative Routing:** Structured using protected routes to guarantee data privacy and role safety.
- **Remote State Integration:** Leverages React Query for seamless caching, optimistic UI updates, and effortless pre-fetching.
- **Compound Component Pattern:** Implemented across complex UI modules like Modals, Tables, Context Menus, and Window Overlays for maximum code reusability.
- **Database Optimization:** Built around highly organized relational schemas, foreign-key connections, and custom storage bucket API rules in Supabase.

---

## 📄 License

This project was built for educational purposes as part of the Ultimate React Course. Feel free to use the code to study or build your personal portfolio.
