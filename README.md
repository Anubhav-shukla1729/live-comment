# Comments System

## pictures

![Screenshot from 2024-11-04 17-21-47](https://github.com/user-attachments/assets/11918745-fe77-4066-9fd8-c8ff9f740ee8)


![Screenshot from 2024-11-04 17-21-22](https://github.com/user-attachments/assets/3e19be11-b1e3-4bbd-8630-0fa7db6d7215)




## Overview

This project is a simple comments system built using Node.js, Express, and a MySQL database. It allows users to log in with a username, post comments, and view a list of all comments. Users can also delete all comments if needed.

## Technologies Used

- **Frontend**: React
- **Backend**: Node.js, Express
- **Database**: MySQL
- **WebSocket**: Socket.IO for real-time functionality
- **CSS**: Custom styling

## Features

- User authentication through a username.
- Ability to post comments.
- Display of all comments with usernames.
- Real-time updates of comments using Socket.IO.
- Option to delete all comments.

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MySQL or MariaDB
- npm (Node Package Manager)

### Installation Steps

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/Anubhav-shukla1729/live-comment.git
   cd live-comment
Install Backend Dependencies:

bash
Copy code
cd backend
npm install
Install Frontend Dependencies:

bash
Copy code
cd frontend
npm install
Set Up the Database:

Create a new database called comments_system.
Create a table named comments:
sql
Copy code
CREATE TABLE comments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    comment TEXT NOT NULL,
    sessionId VARCHAR(255),
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
Run the Backend Server:

bash
Copy code
cd backend
node index.js
Run the Frontend Application:

bash
Copy code
cd frontend
npm start
Open the Application:

Navigate to http://localhost:3000 in your web browser.
API Endpoints
POST /api/login

Request body: { "username": "your_username" }
Response: { "sessionId": "generated_session_id" }
GET /api/comments

Response: List of comments in JSON format.
POST /api/comments

Request body: { "username": "your_username", "comment": "your_comment" }
Response: Newly created comment object.
DELETE /api/comments

Response: Confirmation of comment deletion.
Database Structure
sql
Copy code
CREATE TABLE comments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    comment TEXT NOT NULL,
    sessionId VARCHAR(255),
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
