<p align="center">
  <img width="1899" height="861" alt="image" src="https://github.com/user-attachments/assets/4ab115e4-9fac-46a0-a081-f69e1df5b3ff" />
</p>

<div align="center">

# 🐝 SpaceHive

### Modern Space Rental Marketplace Platform

Discover, book, and manage premium coworking spaces, meeting rooms, creative studios, event venues, and more through a secure and seamless booking experience.

<br/>

<img src="https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js" />
<img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react" />
<img src="https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript" />
<img src="https://img.shields.io/badge/TailwindCSS-v4-38BDF8?style=for-the-badge&logo=tailwindcss" />
<img src="https://img.shields.io/badge/DaisyUI-v5-FF69B4?style=for-the-badge" />
<img src="https://img.shields.io/badge/MongoDB-7-green?style=for-the-badge&logo=mongodb" />
<img src="https://img.shields.io/badge/BetterAuth-Authentication-orange?style=for-the-badge" />
<img src="https://img.shields.io/badge/Stripe-Payment-635BFF?style=for-the-badge&logo=stripe" />

</div>

---

# 🌐 Live Demo

## 🚀 Frontend

https://spacehive.vercel.app/

---

## ⚙️ Backend API

https://spacehive-server.vercel.app/

---

# 📖 About SpaceHive

SpaceHive is a modern **full-stack space rental marketplace** built with **Next.js**, **Express.js**, **MongoDB**, **Better Auth**, and **Stripe**.

The platform allows users to discover and reserve premium workspaces with a smooth booking experience while providing administrators with powerful management tools for spaces, users, bookings, and analytics.

SpaceHive focuses on delivering a modern UI, secure authentication, responsive design, and a scalable architecture suitable for real-world applications.

---

# ✨ Key Features

## 🔐 Authentication

- Better Auth Authentication
- Email & Password Login
- Google Sign In
- Protected Routes
- Session Management
- Role-Based Authorization
- Persistent Login

---

## 🏢 Space Marketplace

- Browse Available Spaces
- Featured Spaces
- Space Details Page
- Related Spaces
- Modern Card Layout
- Responsive Grid

---

## 🔍 Smart Search & Filter

- Search by Space Name
- Filter by Category
- Filter by Location
- Filter by Rating
- Sort by Price
- Sort by Rating
- Pagination Support

---

## 📅 Booking System

- Book Premium Spaces
- Guest Selection
- Booking Summary
- Booking Details
- Booking History
- Cancel Booking
- Delete Cancelled Booking

---

## 💳 Stripe Payment

- Secure Checkout
- Online Card Payment
- Payment Confirmation
- Booking Confirmation
- Download Booking Invoice

---

## 📊 Dashboard Analytics

- Total Users
- Total Spaces
- Total Bookings
- Total Revenue
- Monthly Revenue Chart
- Recent Payments
- Booking Statistics

---

## 🎨 User Experience

- Fully Responsive
- Modern Dashboard
- Skeleton Loading
- Global Loading UI
- Beautiful Empty States
- Toast Notifications
- Custom 404 Page
- Interactive Charts
- Clean Animations

---

# 👥 Dashboard

SpaceHive provides dedicated dashboards for both Users and Administrators.

---

# 👤 User Dashboard

Users can manage their bookings and personal activities.

### Features

- 📊 Personal Dashboard
- 📅 My Bookings
- 📄 Booking Details
- ❌ Cancel Booking
- 🗑 Delete Cancelled Booking
- 💳 Download Invoice
- 📈 Booking Statistics

---

# 👑 Admin Dashboard

Administrators have complete control over the marketplace.

### Features

- 📊 Dashboard Overview
- 👥 Manage Users
- ➕ Add New Space
- 🏢 Manage Spaces
- 💰 Revenue Analytics
- 📈 Booking Analytics
- 📊 Monthly Statistics
- 💳 Recent Payments

---

# 🔐 Role-Based Permissions

| Feature | Guest | User | Admin |
|----------|:----:|:----:|:-----:|
| Browse Spaces | ✅ | ✅ | ✅ |
| View Space Details | ✅ | ✅ | ✅ |
| Search & Filter | ✅ | ✅ | ✅ |
| Book Space | ❌ | ✅ | ❌ |
| My Bookings | ❌ | ✅ | ❌ |
| Cancel Booking | ❌ | ✅ | ❌ |
| Download Invoice | ❌ | ✅ | ❌ |
| Dashboard | ❌ | ✅ | ✅ |
| Add Space | ❌ | ❌ | ✅ |
| Manage Users | ❌ | ❌ | ✅ |
| Dashboard Analytics | ❌ | ❌ | ✅ |
| Revenue Reports | ❌ | ❌ | ✅ |

---

# 💳 Stripe Payment Flow

SpaceHive integrates **Stripe Checkout** to provide a fast, secure, and reliable online payment experience.

### Payment Workflow

```text
Browse Spaces
      │
      ▼
View Space Details
      │
      ▼
Book Space
      │
      ▼
Create Booking
      │
      ▼
Stripe Checkout
      │
      ▼
Successful Payment
      │
      ▼
Stripe Webhook
      │
      ▼
Booking Confirmed
      │
      ▼
Invoice Available
```

### Features

- 🔒 Secure Stripe Checkout
- 💳 Card Payments
- ⚡ Instant Payment Verification
- 🔄 Stripe Webhook Integration
- 📄 Invoice Download
- ✅ Automatic Booking Confirmation

---

# 🏗 Application Architecture

```text
                Next.js Frontend
                       │
             TanStack Query + Axios
                       │
                       ▼
              Express.js REST API
                       │
        ┌──────────────┼──────────────┐
        │              │              │
        ▼              ▼              ▼
 Better Auth      MongoDB       Stripe API
 Authentication   Database        Payments
        │              │              │
        └──────────────┼──────────────┘
                       ▼
                 User Dashboard
```

---

# 🛠 Tech Stack

## 🎨 Frontend

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS v4
- DaisyUI v5
- TanStack Query
- Axios
- React Hook Form
- Zod
- Recharts
- Sonner
- Lucide React
- date-fns

---

## ⚙ Backend

- Node.js
- Express.js
- TypeScript
- MongoDB
- Stripe SDK
- Better Auth
- CORS
- dotenv

---

## 🗄 Database

- MongoDB Atlas

### Collections

- users
- spaces
- bookings

---

## 🔐 Authentication

- Better Auth
- Google Login
- Email & Password Login
- Protected Routes
- Session Authentication
- Role-Based Authorization

---

## 💳 Payment

- Stripe Checkout
- Stripe Webhooks
- Payment Confirmation
- Invoice Generation

---

# 📦 NPM Packages

## Frontend

```txt
next
react
typescript
tailwindcss
daisyui
@tanstack/react-query
axios
better-auth
react-hook-form
zod
recharts
sonner
lucide-react
date-fns
```

---

## Backend

```txt
express
mongodb
stripe
better-auth
cors
dotenv
tsx
typescript
```

---

# 🗂 Project Structure

## Frontend

```text
src
│
├── app
│   ├── (auth)
│   ├── dashboard
│   ├── spaces
│   ├── booking
│   ├── not-found.tsx
│   └── loading.tsx
│
├── components
│   ├── cards
│   ├── dashboard
│   ├── layout
│   ├── sections
│   └── ui
│
├── hooks
│
├── services
│
├── lib
│
├── providers
│
├── types
│
├── utils
│
└── constants
```

---

## Backend

```text
src
│
├── controllers
│
├── lib
│
├── middleware
│
├── routes
│
├── types
│
└── server.ts
```

---

# 📊 Database Schema

## 👤 Users

- Name
- Email
- Image
- Role
- Status
- Created At

---

## 🏢 Spaces

- Title
- Description
- Category
- Location
- Price
- Rating
- Images
- Capacity
- Amenities

---

## 📅 Bookings

- User
- Space
- Booking Date
- Guests
- Total Price
- Payment Status
- Booking Status
- Stripe Session ID
- Payment Intent ID

---

# 📈 Dashboard Analytics

## User Dashboard

- Total Bookings
- Confirmed Bookings
- Cancelled Bookings
- Total Spending
- Monthly Booking Statistics

---

## Admin Dashboard

- Total Users
- Total Spaces
- Total Bookings
- Total Revenue
- Monthly Revenue Chart
- Recent Payments
- Platform Statistics

---

# 🚀 Performance Features

- ⚡ Server Components
- ⚡ Client Components
- ⚡ Optimized Images
- ⚡ Lazy Loading
- ⚡ Skeleton Loading
- ⚡ Global Loading UI
- ⚡ Efficient API Caching
- ⚡ Responsive Layout

---

# 🚀 Installation Guide

Follow these steps to run **SpaceHive** on your local machine.

---

## 1️⃣ Clone the Frontend Repository

```bash
git clone https://github.com/shakil218/spacehive.git
```

Move into the project

```bash
cd spacehive
```

Install dependencies

```bash
npm install
```

---

## 2️⃣ Clone the Backend Repository

```bash
git clone https://github.com/shakil218/spacehive-server.git
```

Move into the project

```bash
cd spacehive-server
```

Install dependencies

```bash
npm install
```

---

# ⚙️ Environment Variables

## 🖥 Frontend (.env.local)

Create a file named

```text
.env.local
```

Add the following variables

```env
NEXT_PUBLIC_API_URL=http://localhost:5000

NEXT_PUBLIC_BETTER_AUTH_URL=http://localhost:3000

NEXT_PUBLIC_IMGBB_API_KEY=YOUR_IMGBB_API_KEY
```

---

## ⚙ Backend (.env)

Create a file named

```text
.env
```

Add the following variables

```env
PORT=5000

MONGO_URI=YOUR_MONGODB_URI

DB_NAME=spacehive

CLIENT_URL=http://localhost:3000

STRIPE_SECRET_KEY=YOUR_STRIPE_SECRET_KEY

STRIPE_WEBHOOK_SECRET=YOUR_STRIPE_WEBHOOK_SECRET
```

---

# ▶ Running the Application

## Frontend

```bash
npm run dev
```

Runs on

```
http://localhost:3000
```

---

## Backend

```bash
npm run dev
```

Runs on

```
http://localhost:5000
```

---

# 🔄 Stripe Local Webhook

While testing payments locally, start the Stripe webhook listener.

```bash
stripe listen --forward-to localhost:5000/api/stripe/webhook
```

After running the command, copy the generated webhook secret and paste it into

```env
STRIPE_WEBHOOK_SECRET=
```

---

# 📡 API Endpoints

## 👤 Users

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/api/users` | Get all users |
| PATCH | `/api/users/:id/role` | Update user role |
| PATCH | `/api/users/:id/status` | Update user status |

---

## 🏢 Spaces

| Method | Endpoint |
|---------|----------|
| GET | `/api/spaces` |
| GET | `/api/spaces/featured` |
| GET | `/api/spaces/:id` |
| GET | `/api/spaces/related/:id` |
| POST | `/api/spaces` |

---

## 📅 Bookings

| Method | Endpoint |
|---------|----------|
| GET | `/api/bookings/user/:userId` |
| GET | `/api/bookings/:id` |
| POST | `/api/bookings` |
| PATCH | `/api/bookings/:id/cancel` |
| DELETE | `/api/bookings/:id` |

---

## 💳 Payments

| Method | Endpoint |
|---------|----------|
| POST | `/api/create-checkout-session` |
| POST | `/api/stripe/webhook` |

---

## 📊 Statistics

| Method | Endpoint |
|---------|----------|
| GET | `/api/admin/dashboard` |
| GET | `/api/stats` |
| GET | `/api/user/bookings/statistics/:userId` |

---

# ☁ Deployment

## Frontend

- ▲ Vercel

Live

```
https://spacehive.vercel.app
```

---

## Backend

- ▲ Vercel

Live

```
https://spacehive-server.vercel.app
```

---

## Database

- MongoDB Atlas

---

## Payment Gateway

- Stripe

---

# 📱 Responsive Design

SpaceHive is fully responsive and optimized for every screen size.

✅ Mobile

✅ Tablet

✅ Laptop

✅ Desktop

---

# 🔒 Security

- Better Auth Authentication

- Role-based Authorization

- Protected Routes

- Secure Stripe Checkout

- Webhook Signature Verification

- MongoDB Validation

- Server-side API Protection

- Secure Environment Variables

---

# 🗺 Future Improvements

Although SpaceHive is fully functional, there are several exciting features planned for future development.

### 🚀 Planned Features

- ⭐ Space Reviews & Ratings
- ❤️ Wishlist / Favorite Spaces
- 🔔 Email Notifications
- 📱 Progressive Web App (PWA)
- 📍 Google Maps Integration
- 🏷 Discount & Coupon System
- 💬 Real-time Chat
- 📅 Availability Calendar
- 📸 Multiple Image Uploads
- 🎥 Virtual Space Tour
- 📊 Advanced Analytics Dashboard
- 📈 Revenue Reports
- 📱 Push Notifications
- 🌍 Multi-language Support
- 📄 PDF Booking Receipts
- 🔍 AI-powered Search
- 🧾 Booking History Export
- 🔐 Two-Factor Authentication
- 👤 User Profile Management
- 📱 Mobile Application

---

# 🤝 Contributing

Contributions, suggestions, and feedback are always welcome!

If you'd like to improve the project:

### 1. Fork the repository

```bash
git fork
```

### 2. Create a new branch

```bash
git checkout -b feature-name
```

### 3. Commit your changes

```bash
git commit -m "Add amazing feature"
```

### 4. Push to GitHub

```bash
git push origin feature-name
```

### 5. Open a Pull Request

---

# 📌 Project Notice

> **SpaceHive** is a **personal practice and portfolio project** created to demonstrate modern full-stack web development skills using the MERN ecosystem and contemporary frontend technologies.

This repository was built for:

- Learning
- Portfolio showcase
- Skill improvement
- Experimenting with modern technologies

It is **not intended for commercial production use**.

If you find the project useful, feel free to explore the code, learn from it, or use it as inspiration for your own projects.

---

# 👨‍💻 Developer

## Md Shakil Islam

### 🚀 Full Stack Web Developer

Passionate about building modern, scalable, and user-friendly web applications using the MERN Stack and Next.js ecosystem.

---

### 🌐 Portfolio

https://md-shakil-islam-dev.vercel.app/

---

### 💼 LinkedIn

https://www.linkedin.com/in/md-shakil-islam-sagor/

---

### 🐙 GitHub

https://github.com/shakil218

---

### 📧 Email

dev.shakilislam@gmail.com

---

# 🌟 Why SpaceHive?

SpaceHive demonstrates real-world implementation of modern web development concepts including:

- ✅ Full Stack Architecture
- ✅ REST API Design
- ✅ Authentication & Authorization
- ✅ Stripe Payment Integration
- ✅ MongoDB Database Design
- ✅ Dashboard Analytics
- ✅ Responsive UI
- ✅ Clean Component Architecture
- ✅ Reusable Hooks
- ✅ Server & Client Components
- ✅ Modern React Patterns
- ✅ Type Safety
- ✅ Production Deployment

---

# 💖 Acknowledgements

Special thanks to the amazing open-source community and the creators of:

- Next.js
- React
- TypeScript
- Tailwind CSS
- DaisyUI
- Better Auth
- MongoDB
- Stripe
- TanStack Query
- Lucide React
- Vercel

Without these incredible tools, building SpaceHive would not have been possible.

---

# ⭐ Support

If you like this project, please consider giving it a ⭐ on GitHub.

Your support helps motivate future improvements and allows more developers to discover this project.

---

<div align="center">

# 🐝 SpaceHive

### Discover • Book • Manage • Grow

<br/>

**Built with ❤️ using**

**Next.js • React • TypeScript • Tailwind CSS • DaisyUI • Express.js • MongoDB • Better Auth • Stripe**

<br/>

### Thanks for visiting the project! 🚀

⭐ **Don't forget to star the repository if you found it helpful!**

</div>
