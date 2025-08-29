let coins = 100;
const balance = document.getElementById("available-blnc");
const callButtons = document.querySelectorAll(".call-btn");


callButtons.forEach(function(event) {
  event.addEventListener("click", function(e) {
    e.preventDefault
    if (coins >= 20) {
      coins -= 20;
      balance.textContent = coins;
      alert("calling national emergency service 999....");
      return
    } else {
      alert("You don’t have enough coins! Calling will cost 20 Coins");
      return
    }
  });
});
