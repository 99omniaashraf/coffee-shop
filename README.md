# Coffee Shop Application

## Structure

```
coffee-shop/
├── backend/               # Backend code (Node.js, Express, MongoDB)
├── frontend/              # Frontend code (React, Tailwind CSS, Vite)
├── node_modules/          # Automatically generated after installing dependencies
├── .gitignore             # File to prevent specific files from being pushed to Git
├── package.json           # Contains project settings and installed libraries
├── README.md              # Contains project information
```

## Technologies Used

### Frontend
- **React**: To build interactive user interfaces.
- **Tailwind CSS**: For easy and flexible UI styling.
- **Vite**: A build and development tool for faster React applications.
- **JavaScript**: For adding interactivity to the frontend.

### Backend
- **Node.js**: For building the server.
- **Express**: To manage requests and API endpoints.
- **MongoDB**: A NoSQL database for storing application data.

### Deployment
- **Vercel**: For deploying the frontend.

## Features
- Display the menu (Menu section).
- "About Us" page.
- "Contact Us" form.
- Navigation between different sections.
- Manage product data using MongoDB.

## Setup Instructions

### Prerequisites
- Node.js installed on your system.
- MongoDB installed and running.

### Steps
1. **Clone the repository:**
   ```bash
   git clone https://github.com/99omniaashraf/coffee-shop.git
   cd coffee-shop
   ```

2. **Install dependencies for both backend and frontend:**
   ```bash
   cd backend
   npm install
   cd ../frontend
   npm install
   ```

3. **Set up environment variables:**
   - Create a `.env` file in the `backend` folder and add MongoDB connection details and other required keys.

4. **Run the backend server:**
   ```bash
   cd backend
   npm start
   ```

5. **Run the frontend server using Vite:**
   ```bash
   cd frontend
   npm run dev
   ```

6. **Access the application:**
   Open your browser and navigate to `http://localhost:3000`.

## Deployment
- **Frontend**: Deployed on Vercel.
- **Backend**: Can be deployed on any Node.js-supported platform like Heroku or Render.

## Folder Structure

### Frontend
```
frontend/
├── public/                # Public files
├── src/
│   ├── components/       # Reusable components
│   │   ├── Navbar.js
│   │   ├── Footer.js
│   │   └── ProductCard.js
│   ├── pages/            # Website pages
│   │   ├── HomePage.js
│   │   ├── ProductPage.js
│   │   └── CartPage.js
│   ├── App.jsx           # Main entry point for the frontend
│   ├── main.jsx          # React application entry point with Vite
│   └── styles/           # Styling files using Tailwind CSS
├── package.json           # Contains frontend libraries
```

### Backend
```
backend/
├── models/                # Database models
├── routes/                # API routes
├── controllers/           # Request handling
├── app.js                 # Main entry point for the server
├── package.json           # Contains backend libraries
```

## License
This project is licensed under the MIT License.

