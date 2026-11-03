// Must stay in the repo ROOT next to index.html
importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js");

// Same values as FIREBASE_CONFIG in index.html
firebase.initializeApp({
  apiKey: "AIzaSyC7tylN7VmPo5MntIwsoNQw5NhmGf-Sas",
  authDomain: "chat-68d6a.firebaseapp.com",
  projectId: "chat-68d6a",
  storageBucket: "chat-68d6a.firebasestorage.app",
  messagingSenderId: "828067301108",
  appId: "1:828067301108:web:242921194c21f6ffdc00a1"
});
// Messages carry a "notification" payload, so the browser shows them automatically in the background.
firebase.messaging();