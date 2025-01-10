// authSolution.js
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
// ... Your Firebase configuration
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

let authState = null; // Initial state

// Improved onAuthStateChanged with retry mechanism and state management
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    console.log('User is signed in:', uid);
    if(authState !== 'signedIn'){
        authState = 'signedIn';
        //Update UI here
    }
  } else {
    // User is signed out
    console.log('User is signed out');
    if(authState !== 'signedOut'){
        authState = 'signedOut';
        //Update UI here
    }
  }
}).catch((error) => {
  console.error('Error in onAuthStateChanged:', error);
  // Implement retry logic here if needed
});