import firebase from 'firebase';

// adicione SDK do Firebase
    const firebaseConfig = {
        apiKey: "AIzaSyCq0vMM4eBdu-L9pLxTvSlz42GxnR-nNPw",
        authDomain: "team-voting-app-5a1fd.firebaseapp.com",
        databaseURL: "https://team-voting-app-5a1fd-default-rtdb.firebaseio.com",
        projectId: "team-voting-app-5a1fd",
        storageBucket: "team-voting-app-5a1fd.appspot.com",
        messagingSenderId: "371736279433",
        appId: "1:371736279433:web:b7a027873d6ceeb7cb8958",
        measurementId: "G-KRJM1QW1Q2"
      };


// Initialice o Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();