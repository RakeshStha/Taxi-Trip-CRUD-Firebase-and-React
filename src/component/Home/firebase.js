import firebase from 'firebase';
// import "firebase/auth";

const config ={

    apiKey: "AIzaSyAErwT7OXdYjCiSe1L1HZIiuf1RtM3_bcM",
    authDomain: "taxi-booking-84982.firebaseapp.com",
    databaseURL: "https://taxi-booking-84982-default-rtdb.firebaseio.com",
    projectId: "taxi-booking-84982",
    storageBucket: "taxi-booking-84982.appspot.com",
    messagingSenderId: "528074023882",
    appId: "1:528074023882:web:ded75edac9f8d84d05e533"

    // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    // databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
    // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    // appId: process.env.REACT_APP_FIREBASE_APP_ID  
}

firebase.initializeApp(config);
// const database = firebase.database();

// export { database };

export default firebase;
