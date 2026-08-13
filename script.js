const fechaEvento = new Date("2026-11-06T21:30:00").getTime();

setInterval(() => {
  const ahora = new Date().getTime();
  const distancia = fechaEvento - ahora;

  const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

  document.getElementById("dias").textContent = dias;
  document.getElementById("horas").textContent = horas;
  document.getElementById("minutos").textContent = minutos;
  document.getElementById("segundos").textContent = segundos;
}, 1000);

function entrarInvitacion() {
  document.querySelector(".cuenta-regresiva").scrollIntoView({
    behavior: "smooth"
  });
}

function copiarAlias() {
  const alias = document.getElementById("alias").textContent;
  navigator.clipboard.writeText(alias);
  alert("Alias copiado: " + alias);
}

const musica = document.getElementById("musica-fondo");
const btnMusica = document.getElementById("btn-musica");
let sonando = false;

btnMusica.addEventListener("click", () => {
  if (sonando) {
    musica.pause();
    btnMusica.textContent = "🔇";
  } else {
    musica.play();
    btnMusica.textContent = "🔊";
  }
  sonando = !sonando;
});