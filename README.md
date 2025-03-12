# Library Management System

## Overview

The **Library Management System** is a full-stack web application designed to manage books, handle borrowing and returning processes, and allow admin users to manage the book inventory. The system leverages modern technologies like React for the frontend, Firebase for user authentication, and MongoDB for backend data storage.


## Assignment Category: 08


## **Live Site**
- Visit Live Site: [ Library Management System ](https://library-management-e1c29.web.app/)
- Visit github Repo Link Client Site:[ Client Site Github repo.](https://github.com/Mehedihasan-99/library-management)
- Visit github Repo Link Server Site:[ Server Site Github repo.](https://github.com/Mehedihasan-99/library-management-server )

---

## Features
- **User Authentication**: 
  - Sign up and log in using email/password or social login (Google).
  
- **Book Viewing**: 
  - Browse books in various categories, each with detailed information.
  
- **Borrow Books**: 
  - Users can borrow books, with available quantity management. When a user borrows a book, the quantity decreases.

- **Borrowed Books Tracking**: 
  - View all borrowed books with details such as borrow date, return date, and status.
  
- **Responsive UI**: 
  - The app is fully responsive for mobile, tablet, and desktop users.

- **Add New Books**: 
  - Admin users can add new books with details such as title, author, category, description, and rating.

- **Update and Delete Books**: 
  - Admin users can update book details or remove books from the inventory.

- **Manage Book Inventory**: 
  - Admin users can manage book quantities and ensure accurate book availability.

### Additional Features
- **Error Handling**: 
  - Custom 404 pages for unmatched routes and loading spinners for asynchronous actions.

- **Dynamic Titles**: 
  - The page title changes dynamically based on the route to enhance SEO.

- **Private Routes**: 
  - Certain pages are protected and require authentication to access (e.g., adding, updating, or borrowing books).

## Technologies

- **Frontend**: React, TailwindCSS, DaisyUI, React Router, React Rating Stars, React Hook Form
- **Backend**: MongoDB, Express.js (for server-side functionality)
- **Authentication**: Firebase (email/password and social logins like Google )
- **State Management**: React Context API for managing user authentication state
- **API Communication**: Axios & fetch for handling HTTP requests
- **Database**: MongoDB for storing books and user data
- **Hosting**: Frontend on firebase, Backend on vercel


## Deployment
- **Frontend**: Deploy the React app to FireBase Hosting.
- **Backend**: Deploy the Node.js server to Vercel

## Installation & Setup

### Prerequisites
Make sure you have the following tools installed:
- Node.js (LTS version)
- npm (Node Package Manager)


