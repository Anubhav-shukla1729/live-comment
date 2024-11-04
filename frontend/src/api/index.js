// src/api/index.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Replace with your backend URL

// Function to log in a user
export const loginUser = async (username) => {
    try {
        const response = await axios.post(`${API_URL}/login`, { username });
        return response.data; // Returns the session ID and username
    } catch (error) {
        console.error('Error logging in:', error);
        throw error;
    }
};

// Function to fetch comments from the database
export const fetchComments = async () => {
    try {
        const response = await axios.get(`${API_URL}/comments`);
        return response.data; // Returns the list of comments
    } catch (error) {
        console.error('Error fetching comments:', error);
        throw error;
    }
};

// Function to post a new comment
export const postComment = async (username, comment) => {
    try {
        const response = await axios.post(`${API_URL}/comments`, { username, comment });
        return response.data; // Returns the newly created comment
    } catch (error) {
        console.error('Error posting comment:', error);
        throw error;
    }
};
