// ✅ Navbar scroll effect
window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// ✅ Copy contract address
function copyAddress() {
  const address = document.getElementById("contract-address").innerText;
  navigator.clipboard.writeText(address).then(() => {
    alert("Contract address copied!");
  });
}

// ✅ Falling money animation
const moneyContainer = document.getElementById("falling-money");

function createMoney() {
  const money = document.createElement("div");
  money.classList.add("money");
  money.innerHTML = "💵";
  money.style.left = Math.random() * 100 + "vw";
  money.style.animationDuration = 3 + Math.random() * 2 + "s";
  moneyContainer.appendChild(money);

  setTimeout(() => {
    money.remove();
  }, 5000);
}

setInterval(createMoney, 500);
