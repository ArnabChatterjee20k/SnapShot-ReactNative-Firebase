import { initializeApp } from "firebase/app";

export const useFirebase = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyCqQnkZHUaJGoCx9_W9Rsv59bn4iZYB_tY",
    authDomain: "august-tract-360016.firebaseapp.com",
    projectId: "august-tract-360016",
    storageBucket: "august-tract-360016.appspot.com",
    messagingSenderId: "718239863574",
    appId: "1:718239863574:web:927083d8d6e879c5283637",
    measurementId: "G-MT73GGC816",
  };

  return initializeApp(firebaseConfig);
};
