// Konfigurasi Firebase project: skpkonstruksi-91ac5
// File ini di-import sebagai module di setiap halaman yang butuh Firebase.

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyC8yk19nVY2EZwP_7Qb4SnSqP32KYKha6g",
  authDomain: "skpkonstruksi-91ac5.firebaseapp.com",
  projectId: "skpkonstruksi-91ac5",
  storageBucket: "skpkonstruksi-91ac5.firebasestorage.app",
  messagingSenderId: "355716303379",
  appId: "1:355716303379:web:be56b0ff0f477b1f52cde6",
  measurementId: "G-0REQTQE1PN"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// Nama collection Firestore tempat data paket disimpan.
export const COLLECTION_NAME = "paket_konstruksi";
