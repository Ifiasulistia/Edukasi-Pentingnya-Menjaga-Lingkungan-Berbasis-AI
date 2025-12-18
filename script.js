var firebaseConfig = {
  apiKey: "API_KEY_KAMU",
  authDomain: "PROJECT.firebaseapp.com",
};

<script src="https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/8.10.0/firebase-auth.js"></script>
<script src="script.js"></script>


function loginGoogle() {
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider)
  .then(() => window.location.href = "index.html");
}

function logout() {
  firebase.auth().signOut().then(() => {
    window.location.href = "login.html";
  });
}
