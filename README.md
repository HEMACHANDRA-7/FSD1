# FSD1 – Full Stack Development Lab

A comprehensive collection of practical experiments and microservices developed as part of the Full Stack Development Lab.

[![Vercel](https://img.shields.io/badge/Deploy-Vercel-black?style=flat&logo=vercel)](https://vercel.com)
[![Render](https://img.shields.io/badge/Deploy-Render-46E3B7?style=flat&logo=render)](https://render.com)
[![Node.js](https://img.shields.io/badge/Node.js-18+-green?style=flat&logo=node.js)](https://nodejs.org)
[![React](https://img.shields.io/badge/React-18-blue?style=flat&logo=react)](https://react.dev)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?style=flat&logo=mongodb)](https://www.mongodb.com)

---

## 📑 Table of Contents

1. [⚡ Quick Deployment Overview](#-quick-deployment-overview)
2. [🚀 Deploying Frontend Applications to Vercel](#-deploying-frontend-applications-to-vercel)
   - [Method 1: Automated Script (Fastest - All 10 Apps at Once)](#method-1-automated-script-fastest---all-10-apps-at-once)
   - [Method 2: 1-Click Deploy Buttons](#method-2-1-click-deploy-buttons)
   - [Method 3: Manual Deployment via Vercel Dashboard](#method-3-manual-deployment-via-vercel-dashboard)
3. [🌐 Deploying Backend Services to Render](#-deploying-backend-services-to-render)
   - [Method 1: 1-Click Blueprint Deploy via `render.yaml` (Recommended)](#method-1-1-click-blueprint-deploy-via-renderyaml-recommended)
   - [Method 2: Manual Web Service Deployment on Render](#method-2-manual-web-service-deployment-on-render)
4. [🔗 Connecting MERN Frontend to Render Backend](#-connecting-mern-frontend-to-render-backend)
5. [🧪 Testing Backend APIs (cURL Commands)](#-testing-backend-apis-curl-commands)
6. [💻 Running Applications Locally](#-running-applications-locally)
7. [📂 Project Structure & Experiment Catalog](#-project-structure--experiment-catalog)
8. [👤 Author & Repository](#-author--repository)

---

## ⚡ Quick Deployment Overview

This repository contains **10 React Frontend Applications** and **8 Backend Express / MongoDB Services**.

| Layer | Platform | Config / Automation | Deploy Time |
|---|---|---|---|
| **Frontend (10 React Apps)** | **Vercel** | `npm run deploy:vercel` or Vercel Dashboard | ~2 minutes |
| **Backend (8 Microservices)** | **Render** | Blueprint via `render.yaml` or Render Dashboard | ~3 minutes |

---

## 🚀 Deploying Frontend Applications to Vercel

### Method 1: Automated Script (Fastest - All 10 Apps at Once)

You can automatically deploy all 10 React applications to your Vercel account in one single command using the included script.

#### Prerequisites:
- [Node.js](https://nodejs.org/) (version 18 or higher) installed on your computer.
- A free [Vercel](https://vercel.com/signup) account (sign up using your GitHub account).

#### Step-by-Step Instructions:

1. **Open your terminal inside the repository:**
   ```bash
   cd c:\Users\boyap\Downloads\FSD1
   ```

2. **Log into Vercel CLI:**
   ```bash
   npm run login:vercel
   ```
   * Choose **Continue with GitHub** (or Email) and approve the login in your browser.
   * Verify it says `Success! You are now logged in to Vercel`.

3. **Deploy all 10 React apps automatically:**
   ```bash
   npm run deploy:vercel
   ```
   * The script will build and deploy each application to your personal Vercel account.
   * It displays the live production URL for every project in your terminal.
   * It automatically updates your local `README.md` with your personal live URLs.

4. **List all your active live projects anytime:**
   ```bash
   npx vercel project ls
   ```

---

### Method 2: 1-Click Deploy Buttons

Click any **Deploy** button below to deploy an individual application directly into your Vercel account from GitHub:

#### React Frontend Applications

| No. | Experiment Name | Live Demo | 1-Click Deploy to Vercel | Framework |
|---:|---|---|:---:|:---:|
| 1 | React Conditional Rendering | [Live Demo](https://fsd-react-conditional-rendering-six.vercel.app) | [![Deploy](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FHEMACHANDRA-7%2FFSD1&project-name=fsd-react-conditional-rendering&root-directory=react-conditional-rendering-app%2Freact-conditional-rendering-app-main) | Vite / React |
| 2 | React Form Events | [Live Demo](https://fsd-react-form-events-mu.vercel.app) | [![Deploy](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FHEMACHANDRA-7%2FFSD1&project-name=fsd-react-form-events&root-directory=react-form-events-app%2Freact-form-events-app-main) | Vite / React |
| 3 | React Frontend CRUD | [Live Demo](https://fsd-react-frontend-crud-xi.vercel.app) | [![Deploy](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FHEMACHANDRA-7%2FFSD1&project-name=fsd-react-frontend-crud&root-directory=react-frontend-crud-app%2Freact-frontend-crud-app-main) | Vite / React |
| 4 | React HTML Render | [Live Demo](https://fsd-react-html-render-ruddy.vercel.app) | [![Deploy](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FHEMACHANDRA-7%2FFSD1&project-name=fsd-react-html-render&root-directory=react_html_render_app%2Freact_html_render_app) | Vite / React |
| 5 | React JSX Render | [Live Demo](https://fsd-react-jsx-render-eight.vercel.app) | [![Deploy](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FHEMACHANDRA-7%2FFSD1&project-name=fsd-react-jsx-render&root-directory=react_jsx_render_app%2Freact_jsx_render_app) | Vite / React |
| 6 | React Multiple Components | [Live Demo](https://fsd-react-multiple-components-vert.vercel.app) | [![Deploy](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FHEMACHANDRA-7%2FFSD1&project-name=fsd-react-multiple-components&root-directory=react_multiple_components%2Freact_multiple_components) | Vite / React |
| 7 | React Rendering Lists | [Live Demo](https://fsd-react-rendering-lists-sable.vercel.app) | [![Deploy](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FHEMACHANDRA-7%2FFSD1&project-name=fsd-react-rendering-lists&root-directory=react-rendering-lists-app%2Freact-rendering-lists-app-main) | Vite / React |
| 8 | React State Events | [Live Demo](https://fsd-react-state-events-one.vercel.app) | [![Deploy](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FHEMACHANDRA-7%2FFSD1&project-name=fsd-react-state-events&root-directory=react-state-events-app%2Freact-state-events-app-main) | Vite / React |
| 9 | React Router | [Live Demo](https://fsd-react-router-black.vercel.app) | [![Deploy](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FHEMACHANDRA-7%2FFSD1&project-name=fsd-react-router&root-directory=react-router-app%2Freact-router-app-main) | Vite / React |
| 10 | MERN CRUD Frontend | [Live Demo](https://fsd-mern-frontend-zeta.vercel.app) | [![Deploy](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FHEMACHANDRA-7%2FFSD1&project-name=fsd-mern-frontend&root-directory=mern-crud-app%2Fmern-crud-app-main%2Ffrontend) | Vite / React |

---

### Method 3: Manual Deployment via Vercel Dashboard

If you prefer to deploy an individual application through the web interface:

1. Open [vercel.com/new](https://vercel.com/new) and log in.
2. Under **Import Git Repository**, select **`HEMACHANDRA-7/FSD1`**.
3. In the project configuration screen:
   - **Project Name:** Enter a custom name (e.g., `react-router-app`).
   - **Framework Preset:** Select **`Vite`**.
   - **Root Directory:** Click **Edit** and select the subfolder for the app (e.g., `react-router-app/react-router-app-main`).
   - Leave **Build Command** (`npm run build`) and **Output Directory** (`dist`) as default.
4. Click **Deploy**. Vercel will build the project and output your live `.vercel.app` domain.

#### Root Directory Reference Table for Vercel:

| App Name | Root Directory to Set on Vercel |
|---|---|
| React Conditional Rendering | `react-conditional-rendering-app/react-conditional-rendering-app-main` |
| React Form Events | `react-form-events-app/react-form-events-app-main` |
| React Frontend CRUD | `react-frontend-crud-app/react-frontend-crud-app-main` |
| React HTML Render | `react_html_render_app/react_html_render_app` |
| React JSX Render | `react_jsx_render_app/react_jsx_render_app` |
| React Nested Components | `react_multiple_components/react_multiple_components` |
| React Rendering Lists | `react-rendering-lists-app/react-rendering-lists-app-main` |
| React State Events | `react-state-events-app/react-state-events-app-main` |
| React Router | `react-router-app/react-router-app-main` |
| MERN CRUD Frontend | `mern-crud-app/mern-crud-app-main/frontend` |

---

## 🌐 Deploying Backend Services to Render

### Method 1: 1-Click Blueprint Deploy via `render.yaml` (Recommended)

This repository includes a pre-configured `render.yaml` Blueprint file that deploys all backend microservices simultaneously.

#### Prerequisites:
- A free account on [Render.com](https://render.com) (sign in with your GitHub account).

#### Step-by-Step Instructions:

1. Open the [Render Dashboard](https://dashboard.render.com).
2. Click the **New +** button in the top navigation bar and select **Blueprint**.
3. Connect your GitHub account and choose repository: **`HEMACHANDRA-7/FSD1`** (or click the button below):

   [![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy?repo=https://github.com/HEMACHANDRA-7/FSD1)

4. Render will automatically parse `render.yaml` and show the 9 web services ready to deploy:
   - `fsd-file-persistent-app` (Products File Persistence API)
   - `fsd-non-persistent-app` (Non-Persistent API)
   - `fsd-express-middleware-api` (Middleware Logger API)
   - `fsd-mongodb-express-app` (Books MongoDB Express API)
   - `fsd-mongoose-express-app` (Movies Mongoose API)
   - `fsd-mvc-auth-app` (User Auth MVC API)
   - `fsd-mvc-express-app` (Movies MVC API)
   - `fsd-template-engine-ejs-app` (EJS Product Catalog)
   - `fsd-mern-backend` (Posts API for MERN Frontend)

5. Click **Apply**.
6. Render will build and deploy all services concurrently.

#### 📌 Where to Find Your Live Render URLs:
1. In your **[Render Dashboard](https://dashboard.render.com)**, open your **`FSD1`** Blueprint group.
2. Each service displays its own live URL directly under its name (e.g. `https://file-persistent-app-xxxx.onrender.com`).
3. Click on any service to see its build logs, metrics, or test its endpoints.

---

### Method 2: Manual Web Service Deployment on Render

If you want to deploy a single backend service manually:

1. In the [Render Dashboard](https://dashboard.render.com), click **New +** → **Web Service**.
2. Select your repository: `HEMACHANDRA-7/FSD1`.
3. Configure the service using the parameters from the reference table below:

| Service | Root Directory | Build Command | Start Command | Required Environment Variables |
|---|---|---|---|---|
| **File Persistent App** | `File-persistent-app` | `npm install` | `node server.js` | `PORT=10000` |
| **Non-Persistent App** | `Non-persistent-app` | `npm install` | `node server.js` | `PORT=10000` |
| **MongoDB Express App** | `mongodb-express-app` | `npm install` | `node server.js` | `PORT=10000`<br>`MONGO_URL=mongodb+srv://...`<br>`DB_NAME=booksDB` |
| **Mongoose Movies App** | `mongoose_express_app` | `npm install` | `node server.js` | `PORT=10000`<br>`MONGO_URL=mongodb+srv://...`<br>`DB_NAME=movieDB` |
| **MVC Auth App** | `mvc_auth_app` | `npm install` | `node server.js` | `PORT=10000`<br>`MONGO_URL=mongodb+srv://...`<br>`DB_NAME=authDB`<br>`JWT_SECRET=default_jwt_secret_dev_key_12345` |
| **MVC Express App** | `mvc_express_app` | `npm install` | `node server.js` | `PORT=10000`<br>`MONGO_URL=mongodb+srv://...`<br>`DB_NAME=movieDB` |
| **Template Engine EJS** | `template-engine-ejs-app` | `npm install` | `node server.js` | `PORT=10000`<br>`MONGO_URI=mongodb+srv://...`<br>`DB_NAME=productsDB` |
| **Express Middleware API** | `express_middleware_api` | `npm install` | `node server.js` | `PORT=10000` |
| **MERN CRUD Backend** | `mern-crud-app/mern-crud-app-main/backend` | `npm install` | `node server.js` | `PORT=10000`<br>`MONGO_URI=mongodb+srv://...`<br>`DB_NAME=mernDB` |

4. Select the **Free** instance type.
5. Click **Create Web Service**.

---

## 🔗 Connecting MERN Frontend to Render Backend

When you deploy both the frontend (`mern-crud-frontend`) on Vercel and the backend (`mern-crud-backend`) on Render, link them together:

1. Copy your live backend domain from Render (e.g. `https://mern-crud-backend-xxxx.onrender.com`).
2. Go to your **Vercel Dashboard** → select the `mern-crud-frontend` project.
3. Navigate to **Settings** → **Environment Variables**.
4. Add the following variable:
   - **Key:** `VITE_API_URL`
   - **Value:** `https://mern-crud-backend-xxxx.onrender.com` *(your Render backend URL)*
5. Go to the **Deployments** tab and click **Redeploy** to apply the environment variable.
6. Your MERN Frontend is now fully connected to your live Render database backend!

---

## 🧪 Testing Backend APIs (cURL Commands)

Replace `<YOUR-BACKEND-URL>` with your live `.onrender.com` domain:

### 1. Faculty File Persistence API (`/api/v1/faculty`)

* **Create Faculty (POST):**
  ```bash
  curl -X POST https://<YOUR-BACKEND-URL>/api/v1/faculty \
    -H "Content-Type: application/json" \
    -d '{"id":3,"name":"Dr. Kumar","department":"CSE","subject":"Java"}'
  ```

* **Read All Faculty (GET):**
  ```bash
  curl -X GET https://<YOUR-BACKEND-URL>/api/v1/faculty
  ```

* **Read Faculty by ID (GET):**
  ```bash
  curl -X GET https://<YOUR-BACKEND-URL>/api/v1/faculty/3
  ```

* **Update Faculty Details (PUT):**
  ```bash
  curl -X PUT https://<YOUR-BACKEND-URL>/api/v1/faculty/3 \
    -H "Content-Type: application/json" \
    -d '{"name":"Dr. Kumar","department":"AI & DS","subject":"Python"}'
  ```

* **Delete Faculty (DELETE):**
  ```bash
  curl -X DELETE https://<YOUR-BACKEND-URL>/api/v1/faculty/3
  ```

---

### 2. MongoDB Books API (`/api/v1/books`)

* **Get All Books:**
  ```bash
  curl -X GET https://<YOUR-BACKEND-URL>/api/v1/books
  ```

* **Add New Book:**
  ```bash
  curl -X POST https://<YOUR-BACKEND-URL>/api/v1/books \
    -H "Content-Type: application/json" \
    -d '{"title":"Clean Code","author":"Robert C. Martin","year":2008}'
  ```

---

### 3. User Authentication API (`/api/v1/auth`)

* **Register New User:**
  ```bash
  curl -X POST https://<YOUR-BACKEND-URL>/api/v1/auth/register \
    -H "Content-Type: application/json" \
    -d '{"username":"student1","email":"student1@test.com","password":"password123"}'
  ```

* **Login User:**
  ```bash
  curl -X POST https://<YOUR-BACKEND-URL>/api/v1/auth/login \
    -H "Content-Type: application/json" \
    -d '{"email":"student1@test.com","password":"password123"}'
  ```

---

## 💻 Running Applications Locally

### Frontend React Apps:
1. Open terminal and navigate into the app folder:
   ```bash
   cd react-router-app/react-router-app-main
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start Vite dev server:
   ```bash
   npm run dev
   ```
4. Open the displayed local URL in your browser (`http://localhost:5173`).

### Backend Node/Express Apps:
1. Navigate into the backend folder:
   ```bash
   cd File-persistent-app
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   npm start
   ```
4. The service will be live at `http://localhost:5000` (or the port defined in your `.env`).

---

## 📂 Project Structure & Experiment Catalog

```
FSD1/
├── render.yaml                          # Render Blueprint infrastructure specification
├── deploy-vercel.js                     # Automated script for 1-shot Vercel deployment
├── package.json                         # Root project scripts (deploy:vercel, login:vercel)
│
├── react-conditional-rendering-app/     # Conditional rendering in React
├── react-form-events-app/               # Form handling and synthetic events
├── react-frontend-crud-app/             # Client-side CRUD with React state
├── react_html_render_app/               # HTML element rendering in React
├── react_jsx_render_app/                # JSX syntax and rendering
├── react_multiple_components/           # Component hierarchy and nested components
├── react-rendering-lists-app/           # Dynamic list rendering using map() & keys
├── react-state-events-app/              # useState hook and event handlers
├── react-router-app/                    # Client-side routing with React Router DOM
│
├── File-persistent-app/                 # Node.js file system CRUD (fs module)
├── Non-persistent-app/                  # In-memory data store API
├── express_middleware_api/              # Custom logging and error-handling middleware
├── mongodb-express-app/                 # Native MongoDB driver with Express.js
├── mongoose_express_app/                # Schema-based modeling with Mongoose
├── mvc_express_app/                     # MVC architecture (Models, Views, Controllers)
├── mvc_auth_app/                        # JWT authentication and password hashing (bcrypt)
├── template-engine-ejs-app/             # Server-side rendering with EJS templates
└── mern-crud-app/                       # Full-stack MERN application (React + Express + MongoDB)
```

---

## 👤 Author & Repository

* **Repository:** [https://github.com/HEMACHANDRA-7/FSD1](https://github.com/HEMACHANDRA-7/FSD1)
* **Author / Maintainer:** Hemachandra ([@HEMACHANDRA-7](https://github.com/HEMACHANDRA-7))

⭐ **If you found this guide helpful, please star the repository!**
