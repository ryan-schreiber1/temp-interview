# User Management Full Stack Application

## Overview
This is a simple full-stack user management application built with React (frontend) and FastAPI (backend). The application allows users to create, view, and delete user records.

## Project Structure
```
├── frontend/           # React application
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── Dockerfile
├── backend/            # FastAPI application  
│   ├── main.py
│   ├── requirements.txt
│   └── Dockerfile
├── .github/
│   └── workflows/
│       └── ci-cd.yml   # GitHub Actions CI/CD
└── docker-compose.yml
```

## Features
- Add new users with name and email
- View list of all users
- Delete existing users
- RESTful API backend
- Responsive web interface

## Tech Stack
- **Frontend**: React 18, Axios, CSS3
- **Backend**: FastAPI, SQLAlchemy, SQLite
- **Containerization**: Docker, Docker Compose
- **CI/CD**: GitHub Actions
- **Cloud**: Azure Container Registry

## Running Locally

### Prerequisites  
- Node.js 18+
- Python 3.9+
- Docker & Docker Compose

### Option 1: Docker Compose (Recommended)
```bash
docker-compose up --build
```

### Option 2: Run Services Separately

#### Backend
```bash
cd backend
pip install -r requirements.txt
python main.py
```

#### Frontend  
```bash
cd frontend
npm install
npm start
```

## API Endpoints
- `GET /` - API health check
- `GET /users` - Get all users
- `POST /users` - Create new user
- `DELETE /users/{user_id}` - Delete user

## Deployment
The application uses GitHub Actions to automatically build and push Docker images to Azure Container Registry on every push to main branch.

## Interview Notes
This codebase contains several areas for improvement that would be typical in a junior engineer's implementation. Use this as a basis for discussing best practices, security considerations, and production readiness during the code review session.