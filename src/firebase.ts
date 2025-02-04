import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyClleb3MaIy3t6Dn3pj480Z6augWj3ec4M",
  authDomain: "zer0p01nt-nwitter.firebaseapp.com",
  projectId: "zer0p01nt-nwitter",
  storageBucket: "zer0p01nt-nwitter.firebasestorage.app",
  messagingSenderId: "92720049500",
  appId: "1:92720049500:web:fa23e337e6afa98005a599",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
