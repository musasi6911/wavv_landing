import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js'
import { connectFirestoreEmulator, getFirestore, collection, addDoc } from 'https://www.gstatic.com/firebasejs/9.8.1/firebase-firestore.js'

const firebaseConfig = {
    projectId: "wavvapp-web"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// connectFirestoreEmulator(db, 'localhost', 8080);

export function writeUserData(name, email, pref) {
  addDoc(collection(db, "beta_signups"), {
    name: name,
    email: email,
    preference: pref
  })
}
