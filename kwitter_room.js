const firebaseConfig = {
    apiKey: "AIzaSyA4t6xgTgopidz5XxoEK64SLtpvAHueztk",
    authDomain: "kwitter-database-d0473.firebaseapp.com",
    databaseURL: "https://kwitter-database-d0473-default-rtdb.firebaseio.com",
    projectId: "kwitter-database-d0473",
    storageBucket: "kwitter-database-d0473.appspot.com",
    messagingSenderId: "716863417295",
    appId: "1:716863417295:web:fc0008b77b968e4b9e80ba",
    measurementId: "G-1Y3BGZY27Z"
  };
  firebase.initializeApp(firebaseConfig);
  user_name=localStorage.getItem("user_name");
  room_name=localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML="welcome"+user_name;
  
  function addRoom() {
        room_name=document.getElementById("room_name").value;
        firebase.database().ref("/").child(room_name).update({
              purpose:"adding room name"
        });
        localStorage.setItem("room_name",room_name);
        window.location="kwitter_room.html";
  }
  
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
console.log("room name" + Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;
    });});}
getData();

function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("room_name",name);
    window.location="kwitter_page.html";
}
function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="kwitter.html";
}

function send(){
    msg=document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name: user_name,
          message: msg,
          like: 0 
    });
    document.getElementById("msg").value="";
}