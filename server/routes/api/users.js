import express from 'express';
const userRouter = express.Router();

// Define a route
userRouter.get('/', (req, res) => {
    res.send('this is user route');// this gets executed when user visit http://localhost:3000/user
});

userRouter.get('/101', (req, res) => {
    res.send('this is user 101 route');// this gets executed when user visit http://localhost:3000/user/101
});

userRouter.get('/102', (req, res) => {
    res.send('this is user 102 route');// this gets executed when user visit http://localhost:3000/user/102
});

// export the router module so that server.js file can use it
export default(userRouter);