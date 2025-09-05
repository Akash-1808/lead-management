Create a lead management

# Leads Management Project

## Folder Structure

### Backend (`backend/`)
- `routes/` - Express route handlers
- `src/` - Main backend source code
	- `api/controllers/` - Controllers for API endpoints
	- `api/routes/` - API route definitions
	- `db/` - Database connection and schema
	- `services/` - Service logic (e.g., validation)
- `package.json` - Backend dependencies and scripts


## Backend API Routes

All backend routes are prefixed with `/api/leads`:

- `POST /api/leads/create` - Create a new lead
- `GET /api/leads/` - Get all leads
- `GET /api/leads/search` - Get leads by filter

### Frontend (`lead-task-fullstack-enhanced/`)
- `src/` - Main frontend source code
	- `components/` - React components
	- `pages/` - Main app pages
	- `types/` - TypeScript types
- `index.html` - Main HTML file
- `package.json` - Frontend dependencies and scripts

