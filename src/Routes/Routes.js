import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AddTask from "../Pages/AddTask/AddTask";
import CompleteTask from "../Pages/CompleteTask/CompleteTask";
import Home from "../Pages/HomePage/Home";
import Login from "../Pages/Login/Login";
import MyTask from "../Pages/MyTask/MyTask";
import Register from "../Pages/Register/Register";
import ErrorPage from "../Pages/SharedPages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/addtask',
                element: <AddTask></AddTask>
            },
            {
                path: '/mytask',
                element: <MyTask></MyTask>
            },
            {
                path: '/completedtask',
                element: <CompleteTask></CompleteTask>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }
])
export default router; 