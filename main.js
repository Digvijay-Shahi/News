const firebaseApp = firebase.initializeApp({ 
    apiKey: "AIzaSyCfpMH3sMfflfrZef7vFvVcTLuAKIK4hbM",
  authDomain: "auth-form-6a477.firebaseapp.com",
  projectId: "auth-form-6a477",
  storageBucket: "auth-form-6a477.appspot.com",
  messagingSenderId: "957080950159",
  appId: "1:957080950159:web:f008c47e43ce3fae88a7fa"
 });
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

// Sign up function
const signUp = () => {
    const email = document.getElementById("email").value;

    const password = document.getElementById("password").value;

   

    console.log(email, password)
    // firebase code
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((result) => {
            // Signed in 
            alert("You are Signed Up")
            console.log(result)
            // ...
        })
        .catch((error) => {
        //    alert(error.code);
            alert(error.message);
            // ..
        });
}
const platform = () => {
    return location.href = 'http://localhost:3000/';
  };

// Sign In function
const signIn = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    // firebase code
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((result) => {
            // fetch('homee.html')
            // .then(response => response.text())
            // .then(html => {
            //   // Get the element where you want to insert the HTML content
            //   var targetElement = document.getElementById('targetElementId');
          
            //   // Insert the HTML content into the target element
            //   targetElement.innerHTML = hello;
            // })
            document.write("   ")
            platform();

            console.log(result)
        })
        .catch((error) => {
            // alert(error.code);
            alert(error.message);
            
        });
}