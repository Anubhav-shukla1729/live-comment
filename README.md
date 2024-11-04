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
   ```
2. **Install Backend Dependencies:**
   ```bash
   cd comments-backend
   npm install
   ```
3.**Install Frontend Dependencies:**
   ```bash
   cd ../frontend
   npm install
```
4.**Set Up the Database:**

Create a new database called comments_system.
Create a table named comments:
```bash
 Sql
 CREATE TABLE comments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    comment TEXT NOT NULL,
    sessionId VARCHAR(255),
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

5.**Run backend server :**
```bash
   cd ../comments-backend
   node index.js
```
6.**Run the frontend**
   ```bash
   cd ../frontend
   npm start
   ```
7.**Open the Application:

Navigate to http://localhost:3000 in your web browser.**


