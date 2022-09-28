function Login_data(userName, password) {
  this.userNAme = userName;
  this.password = password;
}

let topgunSeats = [];
for (var i = 0; i < 36; i++) {
  topgunSeats[i] = false;
}
let anabelleSeats = [];
for (var i = 0; i < 36; i++) {
  anabelleSeats[i] = false;
}
let spidermanSeats = [];
for (var i = 0; i < 36; i++) {
  spidermanSeats[i] = false;
}
let godzillaSeats = [];
for (var i = 0; i < 36; i++) {
  godzillaSeats[i] = false;
}

function login_data() {
  var user = document.getElementById("login_username").value;
  var pword = document.getElementById("Password_username").value;

  if (user === "") {
    alert("Username Missing");
  }
  else {
    if (pword === "") {
      alert("Password Missing");
    }
    else {
      var data1 = new Login_data(user, pword);
      window.localStorage.setItem("userinfo", JSON.stringify(data1));
      window.open('cinema.html');
    }
  }
}

function home() {
  document.getElementById("topgun").style.display = "none";
  document.getElementById("annabelle").style.display = "none";
  document.getElementById("spiderman").style.display = "none";
  document.getElementById("godzilla").style.display = "none";
  document.getElementById("main_container").style.display = "block";
  document.getElementById("tgrecipt").style.display = "none";
  document.getElementById("abrecipt").style.display = "none";
  document.getElementById("srecipt").style.display = "none";
  document.getElementById("grecipt").style.display = "none";
}

function topgun() {
  document.getElementById("topgun").style.display = "block";
  document.getElementById("annabelle").style.display = "none";
  document.getElementById("spiderman").style.display = "none";
  document.getElementById("godzilla").style.display = "none";
  document.getElementById("main_container").style.display = "none";
}

function Annabelle() {
  document.getElementById("topgun").style.display = "none";
  document.getElementById("annabelle").style.display = "block";
  document.getElementById("spiderman").style.display = "none";
  document.getElementById("godzilla").style.display = "none";
  document.getElementById("main_container").style.display = "none";
}
function Spiderman() {
  document.getElementById("topgun").style.display = "none";
  document.getElementById("annabelle").style.display = "none";
  document.getElementById("spiderman").style.display = "block";
  document.getElementById("godzilla").style.display = "none";
  document.getElementById("main_container").style.display = "none";
}
function godzilla() {
  document.getElementById("topgun").style.display = "none";
  document.getElementById("annabelle").style.display = "none";
  document.getElementById("spiderman").style.display = "none";
  document.getElementById("godzilla").style.display = "block";
  document.getElementById("main_container").style.display = "none";
}

function tbookseat(seatId) {
  var topgun = seatId.slice(5)
  topgunSeats[topgun - 1] = true;
  document.getElementById(seatId).style.backgroundColor = "red"
}

function abookseat(seatId) {
  var annabelle = seatId.slice(5)
  anabelleSeats[annabelle - 1] = true;
  document.getElementById(seatId).style.backgroundColor = "red"
}

function sbookseat(seatId) {
  var spiderman = seatId.slice(5)
  spidermanSeats[spiderman - 1] = true;
  document.getElementById(seatId).style.backgroundColor = "red"
  console.log(spidermanSeats);
  console.log(spiderman);
}

function gbookseat(seatId) {
  var godzilla = seatId.slice(5)
  godzillaSeats[godzilla - 1] = true;
  document.getElementById(seatId).style.backgroundColor = "red"
}

function save_topgun_ticket() {
  document.getElementById("topgun").style.display = "none";
  document.getElementById("annabelle").style.display = "none";
  document.getElementById("spiderman").style.display = "none";
  document.getElementById("godzilla").style.display = "none";
  document.getElementById("main_container").style.display = "none";
  document.getElementById("tgrecipt").style.display = "block";
  document.getElementById("tgmname").innerText = "TOPGUN MAVERICK";
  var data = JSON.parse(window.localStorage.getItem("userinfo"));
  document.getElementById("tguname").innerText = "Username: " + data.userNAme;

  var sb = document.getElementById("tgsBook");
  sb.innerHTML = "";
  for (var i = 0; i < 36; i++) {
    if (topgunSeats[i] === true) {
      var div = document.createElement("div");
      sb.appendChild(div);
      div.innerText = "Seat No " + (i + 1);
    }
  }
}

function save_anabella_ticket() {
  document.getElementById("topgun").style.display = "none";
  document.getElementById("annabelle").style.display = "none";
  document.getElementById("spiderman").style.display = "none";
  document.getElementById("godzilla").style.display = "none";
  document.getElementById("main_container").style.display = "none";
  document.getElementById("abrecipt").style.display = "block";
  document.getElementById("abmname").innerText = "ANNABELLE COMES HOME";
  var data = JSON.parse(window.localStorage.getItem("userinfo"));
  document.getElementById("abuname").innerText = "Username: " + data.userNAme;

  var sb = document.getElementById("absBook");
  sb.innerHTML = "";
  for (var i = 0; i < 36; i++) {
    if (anabelleSeats[i] === true) {
      var div = document.createElement("div");
      sb.appendChild(div);
      div.innerText = "Seat No " + (i + 1);
    }
  }
}

function save_spiderman_ticket() {
  document.getElementById("topgun").style.display = "none";
  document.getElementById("annabelle").style.display = "none";
  document.getElementById("spiderman").style.display = "none";
  document.getElementById("godzilla").style.display = "none";
  document.getElementById("main_container").style.display = "none";
  document.getElementById("srecipt").style.display = "block";
  document.getElementById("smname").innerText = "SPIDERMAN NO WAY HOME"
  var data = JSON.parse(window.localStorage.getItem("userinfo"));

  document.getElementById("suname").innerText = "Username: " + data.userNAme;
  var sb = document.getElementById("ssBook");
  sb.innerHTML = "";
  for (var i = 0; i < 36; i++) {
    if (spidermanSeats[i] === true) {
      var div = document.createElement("div");
      sb.appendChild(div);
      div.innerText = "Seat No " + (i + 1);
    }
  }
}

function save_godzilla_ticket() {
  document.getElementById("topgun").style.display = "none";
  document.getElementById("annabelle").style.display = "none";
  document.getElementById("spiderman").style.display = "none";
  document.getElementById("godzilla").style.display = "none";
  document.getElementById("main_container").style.display = "none";
  document.getElementById("grecipt").style.display = "block";
  document.getElementById("gmname").innerText = "Godzilla King Of Monsters"
  var data = JSON.parse(window.localStorage.getItem("userinfo"));
  document.getElementById("guname").innerText = "Username: " + data.userNAme;

  var sb = document.getElementById("gsBook");
  sb.innerHTML = "";
  for (var i = 0; i < 36; i++) {
    if (godzillaSeats[i] === true) {
      var div = document.createElement("div");
      sb.appendChild(div);
      div.innerText = "Seat No " + (i + 1);
    }
  }
}
var counter = 1;
setInterval(function () {
  document.getElementById("radio" + counter).checked = true;
  counter++;
  if (counter > 4) {
    counter = 1;
  }
}, 2000);
