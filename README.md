# 🏨 StaySpot

StaySpot is a full-stack accommodation booking web application inspired by Airbnb. It allows users to browse, create, edit, review, and manage property listings with secure authentication and image uploads.

## 🚀 Features

* 🔐 User Authentication (Sign Up, Login & Logout)
* 🏡 Create, Edit and Delete Listings
* 📸 Image Uploads using Cloudinary & Multer
* ⭐ Add and Delete Reviews
* 🛡️ Authorization (Only owners can edit/delete their listings)
* 📍 Interactive Maps with Mapbox
* 🔎 Search Listings
* 🗂️ Category-based Filtering
* ⚡ Flash Messages for User Feedback
* 📱 Responsive UI using Bootstrap 5
* ✅ Server-side Validation using Joi

---

## 🛠️ Tech Stack

### Frontend

* HTML5
* CSS3
* Bootstrap 5
* EJS
* JavaScript

### Backend

* Node.js
* Express.js

### Database

* MongoDB
* Mongoose

### Authentication

* Passport.js
* passport-local
* passport-local-mongoose
* express-session
* connect-flash

### File Storage

* Cloudinary
* Multer
* Multer Storage Cloudinary

### Maps

* Mapbox GL JS

### Validation

* Joi

---

## 📂 Project Structure

```
StaySpot/
│
├── controllers/
├── models/
├── routes/
├── views/
├── public/
├── utils/
├── middleware.js
├── cloudConfig.js
├── app.js
└── package.json
```

---

## ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/your-username/StaySpot.git
```

Move into the project folder:

```bash
cd StaySpot
```

Install dependencies:

```bash
npm install
```

Create a `.env` file and add:

```env
ATLASDB_URL=your_mongodb_connection_string

CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret

MAP_TOKEN=your_mapbox_access_token

SECRET=your_session_secret
```

Start the server:

```bash
npm start
```

or

```bash
nodemon app.js
```

Open:

```
http://localhost:8080/listings
```

---

## ✨ Key Functionalities

* Secure user authentication
* CRUD operations for listings
* Image uploads to Cloudinary
* Interactive location maps
* Review and rating system
* Category filtering
* Search functionality
* Authorization middleware
* Flash notifications
* Responsive design

---

## 📦 NPM Packages Used

* express
* mongoose
* ejs
* ejs-mate
* dotenv
* joi
* method-override
* multer
* cloudinary
* multer-storage-cloudinary
* passport
* passport-local
* passport-local-mongoose
* express-session
* connect-flash
* connect-mongo
* mapbox-sdk

---

## 📸 Screenshots

Add screenshots of:

* Home Page
* Listing Details
* Create Listing
* Edit Listing
* Login Page
* Map View

---

## 👨‍💻 Author

**Nitin Jaiswal**

Computer Engineering Student passionate about Full-Stack Web Development and building real-world applications.

---

## 📄 License

This project is developed for learning purposes and portfolio demonstration.
