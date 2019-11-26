const secondHand = document.querySelector(".second-hand");
const minutesHand = document.querySelector(".min-hand");
const hoursHand = document.querySelector(".hour-hand");

function setDate() {
  const now = new Date(); //do zmiennej now przypisuje aktualną date
  const seconds = now.getSeconds(); //do seconds przypisuje sekundy z aktualnej daty teraz
  const secondsDegrees = (seconds / 60) * 360 + 90; //zamienia sekundy na stopnie w kole
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`; //ruch wskazówki względem sekund

  const mins = now.getMinutes();
  const minutesDegrees = (mins / 60) * 360 + 90;
  minutesHand.style.transform = `rotate(${minutesDegrees}deg)`;

  const hours = now.getHours();
  const hoursDegrees = (hours / 12) * 360 + 90;
  hoursHand.style.transform = `rotate(${hoursDegrees}deg)`;
}
setInterval(setDate, 1000);
