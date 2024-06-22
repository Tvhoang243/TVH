

  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
  import { getAuth,GoogleAuthProvider,signInWithPopup } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";

  const firebaseConfig = {
    apiKey: "AIzaSyAArgo_GTMUCxQH8zQid0Y9JGn7Ykbl-LY",
    authDomain: "login-85324.firebaseapp.com",
    projectId: "login-85324",
    storageBucket: "login-85324.appspot.com",
    messagingSenderId: "77066882589",
    appId: "1:77066882589:web:bc0eac8a1702761a3580f4",
    measurementId: "G-N3B0J4YF4Y"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
//   const analytics = getAnalytics(app);
//khởi tạo hàm auth
const auth = getAuth(app)
auth.languegeCode ="en"
// cung cấp thông tin đăng nhạp = gôgle
  const provider= new GoogleAuthProvider()


  const loginGG = document.getElementById("google");
  loginGG.addEventListener('click',function(){
    signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    window.location.href = "/Sanpham/home.html" 
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    
  });
  })