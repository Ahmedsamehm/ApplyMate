# 🧭 Apply Mate  

A web application that helps users **track and manage their job applications** from multiple platforms — all in one place.  
<img width="1579" height="3048" alt="localhost_3000_" src="https://github.com/user-attachments/assets/a8d369b3-c839-4bc7-9fb0-feb13bbfebad" />

---

## 🚀 Overview  

**Apply Mate** allows users to organize every job they’ve applied for, view their current status, track progress, and even apply directly through integrated job platforms like **LinkedIn**, **Indeed**, and **Glassdoor**.  

If a company posts a job on multiple websites, Apply Mate gathers all links in one dashboard, letting the user pick their preferred platform to apply.  

Users can also manually add jobs they applied for before, track their current status, and view a complete summary of all their applications.  

---

## 💡 Problem & Solution  

### The Problem  
Job seekers often apply for multiple positions across various platforms. Tracking all applications, statuses, and timelines quickly becomes confusing.  

### The Solution  
Apply Mate centralizes the entire process.  
- One dashboard for all job applications.  
- Syncs jobs from multiple platforms via API.  
- Lets users manually add old applications.  
- Tracks and updates statuses easily.  
- Displays real-time insights (total applied, pending, accepted, rejected).  

This system helps users **stay organized**, **save time**, and **improve their job search efficiency**.  

---

## 🧩 Features  

- 🔑 **Clerk Authentication** – Secure login with Google or Email.  
- 📊 **Statistics Dashboard** – Shows all application counts and statuses.  
- 🧾 **Manual Job Add** – Add and track jobs applied outside the platform.  
- 🌐 **Multi-Platform Integration** – Apply directly via LinkedIn, Indeed, or Glassdoor.  
- 🔒 **Supabase Database** – Safe and efficient data storage with row-level security.  
- 🧠 **React Query** – Smart caching and API request optimization.  
- 🎨 **Tailwind CSS + ShadCN** – Fast and consistent UI styling.  
- ⚙️ **Context API** – Simplified state management.  
- 🧱 **Next.js** – SEO optimization, server components, and metadata support.  
- 🛡️ **Middleware Protection** – Secure routes for authenticated users.  
- 🌍 **Environment Variables** – API keys and sensitive data stored securely.  

---

## 🧠 Tech Stack  

| Category | Technologies |
|-----------|--------------|
| Framework | **Next.js 14** |
| Styling | **Tailwind CSS**, **ShadCN/UI** |
| State Management | **React Context API** |
| Data Fetching | **React Query** |
| Authentication | **Clerk** |
| Database | **Supabase** |
| Design | **Figma Community Template** |
| Hosting | **Vercel** |

---

## ⚙️ Architecture  

- **Server Components** handle secure data fetching and API communication.  
- **Client Components** manage UI rendering and user interactions.  
- **API Routes** bridge client and database securely, preventing key leaks.  
- **Middleware** ensures only authenticated users access protected routes.  

---

## 🔍 SEO & Performance  

- Metadata added for better **SEO visibility**.  
- Server-side rendering for **faster load times**.  
- Optimized structure using **Next.js best practices**.  

---

## 🧪 Challenges & Solutions  

### Challenge 1 – Secure API Calls  
I needed to fetch jobs and manage database operations securely without exposing API keys.  
**Solution:** Used Next.js **API Routes** to handle all Supabase calls on the server.  

### Challenge 2 – Authentication Integration  
Merging **Clerk** authentication with **Supabase** while keeping user data consistent.  
**Solution:** Connected Clerk’s user IDs with Supabase records and used middleware to manage access.  

### Challenge 3 – Data Tracking & State Sync  
The user needed live updates when changing job status or adding new jobs.  
**Solution:** Implemented **React Query** for caching and syncing state automatically after updates.  

### Challenge 4 – Scalable UI  
Maintaining a clean UI with multiple features.  
**Solution:** Used **Tailwind CSS** with **ShadCN** components and designed layouts inspired by Figma templates.  

---

## 🧰 Installation  

```bash
# Clone the repository
git clone https://github.com/yourusername/apply-mate.git

# Navigate to the project directory
cd apply-mate

# Install dependencies
npm install

# Add your environment variables in .env file
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_key
SUPABASE_URL=your_url
SUPABASE_SERVICE_ROLE_KEY=your_key

# Run the project
npm run dev
```
ذذ
