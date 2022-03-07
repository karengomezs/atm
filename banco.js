class Paper {
  constructor(value, count) {
    this.value = value;
    this.count = count;
    this.image = new Image();
    this.image.src = `images/${value}.png`;
  }
}

var ATM = [];
ATM.push(new Paper(50, 3));
ATM.push(new Paper(20, 2));
ATM.push(new Paper(10, 2));

var div = 0;
var papers = 0;
var total = 210;
var result = document.getElementById("result");
var getAmountButton = document.getElementById("amount-button");
getAmountButton.addEventListener("click", giveCash);
var enterUser = document.getElementById("user");
enterUser.addEventListener("keydown", logKey);

function logKey(e) {
  if (e.keyCode === 13) {
    giveCash();
  }
}

function giveCash() {
  var userValue = enterUser.value;
  var give = [];

  if (userValue === "") {
    return alert("write a count than you want to get");
  }

  for (var p of ATM) {
    if (userValue > 0) {
      div = Math.floor(userValue / p.value);
      if (div > p.count) {
        papers = p.count;
      } else {
        papers = div;
      }
      give.push(new Paper(p.value, papers));
      userValue = userValue - p.value * papers;
    }
  }

  if (userValue > 0) {
    return (result.innerHTML = "no tengo esa cantidad");
  }

  // clears the container before adding the papers money.
  result.innerHTML = "";

  for (var p of give) {
    if (p.count > 0) {
      // result.appendChild(p.image);
      result.innerHTML += `
        <figure class="images_principal_container">
          <img class="image" src="${p.image.src}" alt="">
          <figcaption class="anounce" >${p.count} $${p.value} money papers </figcaption>
        </figure>
      `;
      //`${p.count} $${p.value} money papers <br/>`;
      // p.count + " billetes de $" + p.value + "<br/>";
    }
  }
}
