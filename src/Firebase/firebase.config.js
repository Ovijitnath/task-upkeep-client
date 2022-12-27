// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAi6oKRL9zgU6_i0q1O_itAui_op3a4QzQ",
    authDomain: "task-upkeep.firebaseapp.com",
    projectId: "task-upkeep",
    storageBucket: "task-upkeep.appspot.com",
    messagingSenderId: "109145414019",
    appId: "1:109145414019:web:92462fa10ba1e51898beb6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;