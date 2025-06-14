# Learning Support Provider Directory

A React-based directory web application built for the **UI/UX Developer [React] Assignment** at **Habot Connect DMCC**.

This project is based on **Project Option 2: Data Simulation (API Integration)**. It simulates an API using local JSON data and displays a list of learning support providers with filtering and detail view functionality.
---
## Project Objective

> “Simulate an API integration using local data to build a responsive listing + detail view for learning support providers.”
---
## Features

- ✅ **Simulated API** using `setTimeout` + Promise
- ✅ **5+ Providers** stored in `providers.json`
- ✅ **Provider Listing Page** with:
  - Name
  - Specialization
  - Location
  - Rating
  - Short description
  - "View Details" button
- ✅ **Detail View Page** with:
  - Full profile
  - Long description
  - Email and phone
  - Back to list navigation
- ✅ **Search/Filter** by name or specialization
- ✅ **Error Handling** for invalid provider IDs
- ✅ **Responsive Design** (mobile/tablet/desktop)
- ✅ **React Router** for clean page navigation
- ✅ **Atomic Git commits** and clear file structure

---

## 🧱 Tech Stack

| Tech        | Description                            |
|-------------|----------------------------------------|
| React       | Frontend library (CRA setup)           |
| React Router| Routing between list/detail pages      |
| Plain CSS   | Grid layout, responsiveness, styling   |
| JSON        | Simulated backend (`providers.json`)   |

---

## Folder Structure

src/
├── api/ # Simulated API (fakeApi.js)
├── components/ # Navbar, ProviderCard
├── data/ # providers.json
├── pages/ # Home, Providers, ProviderDetail
├── App.jsx
└── index.js

---

## How to Run Locally

### 1. Clone the Repository

```bash
1. git clone https://github.com/kamblesukeshani/provider-simulation-app.git
cd provider-simulation-app
2. Install Dependencies
    :-npm install
3. Start the Development Server
 :-npm start
The app runs on http://localhost:3000
4. Build for Production
:- npm run build
This creates a production-ready version in the /build folder — ready to deploy to Netlify or Vercel.

*Live Demo
Netlify link:- https://provider-simulation-app.netlify.app/