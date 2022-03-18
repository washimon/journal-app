import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getFirestore } from 'firebase/firestore'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyAA9pUQ5PTu5elX5yG_WkflXv-mhcVgjeo',
  authDomain: 'journal-app-e86a9.firebaseapp.com',
  projectId: 'journal-app-e86a9',
  storageBucket: 'journal-app-e86a9.appspot.com',
  messagingSenderId: '397950733162',
  appId: '1:397950733162:web:f80da9a3eb1e54a6a77313',
  measurementId: 'G-804VG4XNBX',
}

const app = initializeApp(firebaseConfig)
getAnalytics(app)

const db = getFirestore(app)
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
console.log('Firebase config llamado...')

export { db, auth, provider }
