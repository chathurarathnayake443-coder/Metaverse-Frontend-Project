# MetaVerse Frontend

Web client for **MetaVerse**, a tech hiring platform where companies post task-based vacancies and manage their profile and officers.

**Live site:** metaverse-frontend-project.vercel.app
**Backend repo:** https://github.com/chathurarathnayake443-coder/Metaverse-Backend-Project.git

## Features

- Login and registration with automatic token refresh
- Company dashboard with profile, description, and vacancy overview
- Vacancy cards with deadline, creation date, and applicant count
- Edit company details, profile picture, and description
- Responsive layout for mobile and desktop

## Tech Stack

- **Framework:** React with TypeScript
- **Build tool:** Vite
- **Styling:** Tailwind CSS and daisyUI
- **Routing:** React Router
- **HTTP client:** Axios (with request and refresh-token interceptors)
- **Icons:** Lucide React
- **Hosting:** Vercel

## Getting Started

### Prerequisites

- Node.js 18 or newer
- The [MetaVerse backend] https://github.com/chathurarathnayake443-coder/Metaverse-Backend-Project.git running locally, or the deployed API

### Installation

```bash
git clone <your-frontend-repo-url>
cd MetaVerse-frontend
npm install
```

### Environment Variables

Create a `.env` file in the project root:

```env
VITE_API_URL=http://localhost:3000/api/v1
```

For production, set `VITE_API_URL` to your deployed API:

```
https://metaverse-backend-project.vercel.app/api/v1
```

Vite reads this at build time, so redeploy after changing it. Never commit `.env`.

### Run Locally

```bash
npm run dev
```

The app runs at `http://localhost:5173`.

### Build

```bash
npm run build
npm run preview
```

## Project Structure

```
MetaVerse-frontend/
├── public/             # Static files served from the root
├── src/
│   ├── assets/         # Images imported in components
│   ├── components/     # NavBar, Footer, VacancyCard, ...
│   ├── pages/          # CompanyDashboard, CompanyDetailsEditPage, ...
│   ├── service/        # API calls (axios instance, auth, vacancy, company)
│   ├── types/          # TypeScript types
│   ├── App.tsx
│   └── main.tsx
├── vercel.json
└── package.json
```

Adjust folder names to match your project.

## Authentication

Access and refresh tokens are stored in `localStorage`. An Axios request interceptor attaches the access token to protected requests, and a response interceptor refreshes it automatically when the API returns `401`.

## Deployment (Vercel)

1. Push the repository to GitHub.
2. Import it in Vercel with the **Vite** framework preset.
3. Add `VITE_API_URL` under **Environment Variables**.
4. Deploy.

A `vercel.json` in the project root keeps React Router routes working on page refresh:

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

The backend must allow this site's URL in its CORS configuration.

## Author

**Chathura**
GitHub: https://github.com/chathurarathnayake443-coder