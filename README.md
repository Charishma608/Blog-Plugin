# Blog-Plugin Setup Instructions

Follow these steps to set up and run the **Blog-Plugin** project.

## Prerequisites

- **Node.js** (v14+)
- **npm** (v6+)
- **MongoDB** (Installed and running)

## Setup Instructions

### Frontend Setup

1. Clone the repository:
   ```bash
   [git clone https://github.com/Charishma608/blog-plugin.git](https://github.com/Charishma608/Blog-Plugin.git)
   cd blog-plugin
   ```
2. Navigate to the frontend folder:
   ```bash
   cd blog-frontend
   ```
3. Install frontend dependencies:
  ```bash
  npm install
  ```
4. Start the frontend development server:
  ```bash
  npm start
  ```

### Backend Setup

1. Open a new terminal and navigate to the backend folder:
  ```bash
  cd blog-plugin/blog-backend
  ```

2. Initialize the backend:
  ```bash
  npm init -y
  ```

3. Install required dependencies:
  ```bash
  npm install express mongoose cors body-parser
  ```

4. Ensure MongoDB is running locally or set up a MongoDB connection string.

5. Start the backend server:
  ```bash
  node Server.js
  ```

### Access the Application
Frontend: Open http://localhost:3000 in your browser.
Backend: The server will run on http://localhost:5000.




  

