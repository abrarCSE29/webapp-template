
//Necessary Modules
import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import userRouter from './routes/api/users.js';


const server = express();

server.get('/', (req, res) => {
    res.send('<h1>Hello, Express.js Server!</h1>');
});

// Include routes


// Usign routes
server.use('/users', userRouter);



const port = process.env.PORT || 3000; // You can use environment variables for port configuration
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
;
});
