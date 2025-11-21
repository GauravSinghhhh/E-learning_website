# E-Learning Platform – Modern React + Tailwind Web App

A modern, responsive E-Learning Platform built with React, Vite, TailwindCSS, and Framer Motion.
This project mimics real-world learning platforms with courses, dashboards, lesson lists, reviews, and more.

## Features
🎓 Student Experience

Beautiful, animated Home Page

Explore courses with:

Course categories

Course cards with hover animations

Pricing, duration, instructor, level badges

Detailed Course Page including:

Course description

Author & duration

Lessons list

Rating & review system (localStorage-powered)

Write Review Modal

Average rating calculation

Smooth UI animations (Framer Motion)

Confetti animation on course enrollment

## Student Dashboard

Displays enrolled courses

Shows progress (static/UI only)

Modern card-based layout

Responsive grid design

## Ratings & Reviews

Fully integrated frontend-only review system

Stored in localStorage

Users can:

Add reviews

See average rating

View all reviews

Custom star rating component

Minimalistic modal UI

## Tech Stack

| Technology          | Usage                       |
| ------------------- | --------------------------- |
| **React + Vite**    | Core frontend framework     |
| **TailwindCSS**     | Styling & responsive design |
| **Framer Motion**   | Animations                  |
| **Canvas-Confetti** | Enrollment animation        |
| **localStorage**    | Review storage              |
| **React Router v6** | Routing                     |
| **Hero Icons**      | Icons                       |

## Project Structure
```bash
src/
 ├─ components/
 │   ├─ CategorySection.jsx
 │   ├─ CourseCard.jsx
 │   ├─ Footer.jsx
 │   ├─ Hero.jsx
 │   ├─ Navbar.jsx
 │   ├─ RatingStars.jsx
 │   ├─ WriteReview.jsx
 ├─ data/
 │   └─ courses.js
 ├─ pages/
 │   ├─ Home.jsx
 │   ├─ Courses.jsx
 │   ├─ CoursePage.jsx
 │   └─ StudentDashboard.jsx
 ├─ App.jsx
 ├─ main.jsx
 └─ index.css
```

## Installation & Setup

### Clone the repository
```
git clone https://github.com/YOUR_USERNAME/e-learning-website.git
cd e-learning-website
```

### Install dependencies
```
npm install
```

### Run the development server
```
npm run dev
```

### Build for Production
```
npm run build
```






