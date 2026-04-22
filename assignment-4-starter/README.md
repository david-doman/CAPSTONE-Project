# Anime Tracker SPA

## Overview
This is a React Single Page Application (SPA) that allows users to manage an anime collection. Users can add, edit, delete, and view anime entries. The application demonstrates routing, state management using Context API, form validation, and persistent storage using localStorage.

---

## Features
- Add new anime
- Edit existing anime
- Delete anime
- View anime details
- Search and filter anime
- Form validation (required fields, numeric validation, range checks)
- Persistent storage using localStorage
- Responsive Bootstrap UI

---

## Tech Stack
- React (Functional Components)
- React Router v6 (HashRouter)
- Context API
- Bootstrap 5
- localStorage

---

## Routing Structure

/ → Home page  
/list → Anime list  
/item/:id → Anime details  
/new → Add anime  
/edit/:id → Edit anime  
* → 404 page  

---

## Data Model

Each anime contains:

- id (string)
- title (string)
- category (string)
- rating (number 0–5)
- episodes (number)
- description (string)

---

## Storage Key
Data is stored in browser localStorage using the key: anime_app_data

## Run
```bash
npm install
npm run dev
```
