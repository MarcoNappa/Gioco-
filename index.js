document.addEventListener("DOMContentLoaded", function () {

  const livelli = [
    { testo: "DIO CANE" },
    { testo: "DIO POVERO" },
    { testo: "MADONNA LADRA" },
    { testo: "MANNAGGIA CRISTO" },
    { testo: "DIO BESTIO" },
    { testo: "PORCA MADONNA" },
    { testo: "DIO SERPENTE" },
    { testo: "DIO SOLFITO" },
    { testo: "SANDALI DI CRISTO" },
    { testo: "MANNAGGIA LA BIBBIA" },
  ];

  let livelloCorrente = 0;

  const suono = document.getElementById("suono");

  const contenitore = document.getElementById("contenitore");

  const cambiaLivello = document.getElementById("bottoneLV");

  const paragrafo = document.createElement("p");

  paragrafo.textContent = "SEI ALL' INIZIO DEL NUOVO BESTEMMIATOR 9000 PLUS";

  contenitore.appendChild(paragrafo);

  cambiaLivello.addEventListener("click", function cambiaLv() {
    if (livelloCorrente < livelli.length) {
      const paragrafoSucc = document.createElement("p");
      paragrafoSucc.textContent = livelli[livelloCorrente].testo;
      contenitore.appendChild(paragrafoSucc);
      livelloCorrente++;
      document.getElementById("suono").play();
    } else {
      const fine = document.createElement("p");
      fine.textContent = "E PORCODDDDDIOOOOOOOOO BASTA MADONNA SCALZA , CAZZO TI BESTEMMI MERDA UMANA... DIO CANE MADONNA !!!!!"
      contenitore.appendChild(fine);
      cambiaLivello.style.display = "none";
      const restart = document.createElement("button");
      restart.classList.add("restart");
      restart.textContent = "!!! REDIMITI !!!";
      contenitore.appendChild(restart);
      restart.addEventListener('click', function restartGame() {
        window.location.reload();
        document.getElementById("suonoFine").play();

      })
    };
  });
});







