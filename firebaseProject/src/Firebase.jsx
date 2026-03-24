import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDExrrN7z5iCC40OoNmRZYH4IbWNVu6vmo",
    authDomain: "fir-project-bc92a.firebaseapp.com",
    projectId: "fir-project-bc92a",
    storageBucket: "fir-project-bc92a.firebasestorage.app",
    messagingSenderId: "195900923732",
    appId: "1:195900923732:web:d4a6781801016fc158b2c1",
    measurementId: "G-W4YH7T10SJ"
};
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
