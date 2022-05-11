// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.8.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAaoClRbuR6f9BOOuKU3hCJnjWJ5M6ADY4",
  authDomain: "greenfarm-dc560.firebaseapp.com",
  projectId: "greenfarm-dc560",
  storageBucket: "greenfarm-dc560.appspot.com",
  messagingSenderId: "1058261486227",
  appId: "1:1058261486227:web:8048d8eb0ff6c85db69b66",
  measurementId: "G-H3YYQ5S11M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
import { collection, getDocs, getFirestore, serverTimestamp, updateDoc, doc} from "https://www.gstatic.com/firebasejs/9.8.0/firebase-firestore.js";

let str = serverTimestamp()
console.log(str);

const db = getFirestore(app);

const querySnapshot = await getDocs(collection(db, "users"));

// const docRef = doc(db, 'users', 'BOuwFU2fqHFUK4ZJ1wXf');

// // Update the timestamp field with the value from the server
// const updateTimestamp = await updateDoc(docRef, {
//     timestamp: serverTimestamp()
// });

var humidity = new Array();
var temperature = new Array();
var soilmoisture = new Array();
var light = new Array();
var ppm = new Array();

let Temp;
var Time = new Array();

querySnapshot.forEach((doc) => {

  Temp = doc.data();

  humidity.push(Temp.humidity);

  temperature.push(Temp.temp);

  soilmoisture.push(Temp.soilMoisture);

  light.push(Temp.light);

  ppm.push(Temp.ppm);

  // console.log(humidity);
  // Time.push(Temp.time);

});



for(let i = 0; i < humidity.length; i++)
{
  Time.push(i);
}

const tempo = document.getElementById("temp");
const humi = document.getElementById("humi");
const lig = document.getElementById("lig");
const pm = document.getElementById("ppm");
const mois = document.getElementById("mois");

function Tomato(){
  console.log("im in");
  let y = 35;
  if (y < 40 && y > 30 ) {
    tempo.classList.add("sucess");
    tempo.classList.remove("danger");
  }
  else if (y < 30 || y > 40) {
    tempo.classList.remove("sucess");
    tempo.classList.add("danger");
  }
  
  if (y < 40 && y > 30 ) {
    humi.classList.remove("sucess");
    humi.classList.add("danger");
  }
  else if (y < 30 || y > 40) {
    humi.classList.remove("sucess");
    humi.classList.add("danger");
  }

  if (y < 40 && y > 30 ) {
    lig.classList.remove("sucess");
    lig.classList.add("danger");
  }
  else if (y < 30 || y > 40) {
    lig.classList.remove("sucess");
    lig.classList.add("danger");
  }

  if (y < 40 && y > 30 ) {
    pm.classList.remove("sucess");
    pm.classList.add("danger");
  }
  else if (y < 30 || y > 40) {
    pm.classList.remove("sucess");
    pm.classList.add("danger");
  }

  if (y < 40 && y > 30 ) {
    mois.classList.remove("sucess");
    mois.classList.add("danger");
  }
  else if (y < 30 || y > 40) {
    mois.classList.remove("sucess");
    mois.classList.add("danger");
  }
}

function Potato(){
  let y = 0;
  if (y < 40 && y > 30 ) {
    tempo.classList.add("sucess");
    tempo.classList.remove("danger");
  }
  else if (y < 30 || y > 40) {
    tempo.classList.remove("sucess");
    tempo.classList.add("danger");
  }
  
  if (y < 40 && y > 30 ) {
    humi.classList.remove("sucess");
    humi.classList.add("danger");
  }
  else if (y < 30 || y > 40) {
    humi.classList.remove("sucess");
    humi.classList.add("danger");
  }

  if (y < 40 && y > 30 ) {
    lig.classList.remove("sucess");
    lig.classList.add("danger");
  }
  else if (y < 30 || y > 40) {
    lig.classList.remove("sucess");
    lig.classList.add("danger");
  }

  if (y < 40 && y > 30 ) {
    pm.classList.remove("sucess");
    pm.classList.add("danger");
  }
  else if (y < 30 || y > 40) {
    pm.classList.remove("sucess");
    pm.classList.add("danger");
  }

  if (y < 40 && y > 30 ) {
    mois.classList.remove("sucess");
    mois.classList.add("danger");
  }
  else if (y < 30 || y > 40) {
    mois.classList.remove("sucess");
    mois.classList.add("danger");
  }
}


const selected = document.getElementById("selected");
const optionsContainer = document.querySelector(".options-container");
const tomato = document.getElementById("tomato");
const potato = document.getElementById("potato");

tomato.addEventListener("click", ()=> {
  Tomato();
})

potato.addEventListener("click", ()=> {
  Potato();
})

const optionsList = document.querySelectorAll(".option");

selected.addEventListener("click", () => {
  optionsContainer.classList.toggle("option-active");
})

optionsList.forEach(o => {
  o.addEventListener("click", () =>{
    selected.innerHTML =o.querySelector("label").innerHTML;
    optionsContainer.classList.remove("option-active");
  })
})




export { temperature , Time , humidity , soilmoisture , light , ppm }

