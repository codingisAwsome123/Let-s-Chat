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
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
console.log(firebase_message_id);
console.log(message_data);
message=message_data["message"];
username=message_data["name"];
like=message_data["like"];
name_with_tag="<h4>"+username+"<img class='user_tick' src='a.png'></h4>";
message_with_tag="<h4 class='message_h4'>"+message+"</h4>";
like_button="<button class='btn btn-warning' id="+firebase_message_id+"value="+like+"onclick='updateLike(this.id)'>";
span_with_tag="<span class='glyphicon glyphicon-thumbs-up'>like "+like+"</span></button><hr>";
row=name_width_tag+message_with_tag+like_button+span_with_tag;
document.getElementById("output").innerHTML+=row
    } });  }); }
getData();


function updateLike(message_id){
    console.log("Clicked on the Like Button"+message_id);
    button_id=message_id;
    likes=document.getElementById(button_id).value;
    updated_likes=Number(likes)+1;
    firebase.database().ref(room_name).child(message_id).update({
          like: updated_likes
    });
}
function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="kwitter.html";
}