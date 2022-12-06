//LINKS FIREBASE
const firebaseConfig = { apiKey: "AIzaSyBB7oAyaLnWsfD1kfVlKidHbNmTw99o_1c", authDomain: "vamosconversar-8e31c.firebaseapp.com", databaseURL: "https://vamosconversar-8e31c-default-rtdb.firebaseio.com", projectId: "vamosconversar-8e31c", storageBucket: "vamosconversar-8e31c.appspot.com", messagingSenderId: "1052728082647", appId: "1:1052728082647:web:4cef5987fba9372cc0f092" };

firebase.initializeApp(firebaseConfig);

function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").value = "";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
          window.location = "index.html";
      }

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebaseMessageId = childKey;
         messageData = childData;
//Início do código

      
//Fim do código
      } });  }); }
getData();
