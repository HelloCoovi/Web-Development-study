import firebase from "firebase/compat/app";

// 사용할 파이어베이스 서비스 주석을 해제합니다
//import "firebase/compat/auth";
import "firebase/compat/database";
//import "firebase/compat/firestore";
//import "firebase/compat/functions";
import "firebase/compat/storage";

// Initialize Firebase
//파이어베이스 사이트에서 봤던 연결정보를 여기에 가져옵니다
const firebaseConfig = {
  apiKey: "AIzaSyCdiHDcVRqs6UtHNB8VXFWc6QW4w6fU7tk",
  authDomain: "sparta-myhoneytip-jang-c498a.firebaseapp.com",
  projectId: "sparta-myhoneytip-jang-c498a",
  databaseURL:
    "https://sparta-myhoneytip-jang-c498a-default-rtdb.asia-southeast1.firebasedatabase.app/",
  storageBucket: "sparta-myhoneytip-jang-c498a.appspot.com",
  messagingSenderId: "371774406637",
  appId: "1:371774406637:web:09b29e3a2434bf1b82b1e4",
  measurementId: "G-6BSNEH91JF",
};

//사용 방법입니다.
//파이어베이스 연결에 혹시 오류가 있을 경우를 대비한 코드로 알아두면 됩니다.
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const firebase_db = firebase.database();
