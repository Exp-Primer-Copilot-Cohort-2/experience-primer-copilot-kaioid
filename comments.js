// Create web server
// Create a new express app
const express = require('express');
const app = express();
// Create a new express router
const router = express.Router();
// Create a new comments array
const comments = [
    { id: 1, user: 'user1', comment: 'comment 1' },
    { id: 2, user: 'user2', comment: 'comment 2' },
    { id: 3, user: 'user3', comment: 'comment 3' },
];
//