import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";


const firebaseConfig = {
    apiKey: " enter API here ",
    authDomain: "smart-plant-monitor-3c171.firebaseapp.com",
    databaseURL: "https://smart-plant-monitor-3c171-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "smart-plant-monitor-3c171",
    storageBucket: "smart-plant-monitor-3c171.firebasestorage.app",
    messagingSenderId: "849155838832",
    appId: "1:849155838832:web:32675f94bce345cd62b5b5",
    measurementId: "G-XZWX6P0WXX"
};

// Firebase'i başlat
const app = initializeApp(firebaseConfig);

// Sadece Veritabanını dışarı aktar (Analytics'i kaldırdık, hata riski bitti)

export const database = getDatabase(app);
