import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getAuth , GoogleAuthProvider , signInWithPopup } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
  const firebaseConfig = {
    apiKey: "AIzaSyBB8TR_HqWZxdpuOtGaeOiPWPH9zRa3b4A",
    authDomain: "trail-login-page.firebaseapp.com",
    databaseURL: "https://trail-login-page-default-rtdb.firebaseio.com",
    projectId: "trail-login-page",
    storageBucket: "trail-login-page.appspot.com",
    messagingSenderId: "178967961548",
    appId: "1:178967961548:web:61b6636c7a5f321f218769",
    measurementId: "G-3ZWEPB8YLX"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const user = auth.currenrUser;

function updateUserProfile(user) {
  const userName = user.displayName;
  const userEmail = user.email;
  const userProfilePicture = user.photoURL;
  
  document.getElementById("userName").textContent = userName;
  document.getElementById("userEmail").textContent = userEmail;
  document.getElementById("userProfilePicture").src = userProfilePicture;
}
// updateUserProfile();

onAuthStateChanged(auth, (user) => {
  if (user) {
    updateUserProfile(user);
    const uid = user.uid;
    return uid;
    
  } else {
    alert ("Create Account & Login");
    // window.location.href = "/index.html"
  }
});

