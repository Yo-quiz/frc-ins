const yoKaiList = [
{ name: "Noko", img: "noko.png" },
{ name: "Florinoko", img: "florinoko.png" },
{ name: "Pandanoko", img: "pandanoko.png" },
{ name: "Anjijila", img: "anjijila.png" },
{ name: "Tenongrio", img: "tenongrio.png" },
{ name: "Urnaconda", img: "urnaconda.png" },
{ name: "Pezqueroso", img: "pezqueroso.png" },
{ name: "Pezgativo", img: "pezgativo.png" },
{ name: "Pezquiciado", img: "pezquiciado.png" },
{ name: "Draqui", img: "draqui.png" },
{ name: "Lord Dragón", img: "lord_dragon.png" },
{ name: "Dragón Azur", img: "dragon_azur.png" },
{ name: "Ido", img: "ido.png" },
{ name: "Turdido", img: "turdido.png" },
{ name: "Pellurón", img: "pelluron.png" },
{ name: "Pringurón", img: "pringuron.png" },
{ name: "Boquirroto", img: "boquirroto.png" },
{ name: "Yopago", img: "yopago.png" },
{ name: "Charlatón", img: "charlaton.png" },
{ name: "Tochaplátano", img: "tochaplatano.png" },
{ name: "Mandícoro", img: "mandicoro.png" },
{ name: "Cinisierpe", img: "ciniserpe.png" },
{ name: "Arfidio", img: "arfidio.png" },
{ name: "Venocto", img: "venocto.png" },
{ name: "Venoctoscuro", img: "venoctoscuro.png" },
    { name: "Tortícolis", img: "Torticolis.png" },
    { name: "Malmet", img: "Malmet.png" },
    { name: "Agorerana", img: "Agorerana.png" },
    { name: "Desolvidador", img: "Desolvidador.png" },
    { name: "Memorio", img: "Memorio.png" },
    { name: "Mosquereta", img: "Mosquereta.png" },
    { name: "Bronquereta", img: "Bronquereta.png" },
    { name: "Nereida", img: "Nereida.png" },
    { name: "Sirenia", img: "Sirenia.png" },
    { name: "Oceánida", img: "Oceanida.png" },
    { name: "Cisnia", img: "Cisnia.png" },
    { name: "Vacilagón", img: "Vacilagon.png" },
    { name: "Bergantín", img: "Bergantin_A.png" },
    { name: "Octosierpe", img: "Octosierpe.png" },
    { name: "Robonoko", img: "Robonoko.png" },
    { name: "Robodraqui", img: "Robodraqui.png" },
    { name: "Minipulpobola", img: "Minipulpobola.png" },
    { name: "Pulpobola Rey", img: "Pulpobola_Rey.png" },
  { "name": "Whisper", "img": "Whisper.png" },
  { "name": "Whispócrates", aliases: ["Whispócrates", "Soldado Whispócrates"], "img": "Whispocrates.png" },
  { "name": "Estrenoko", "img": "Estrenoko.png" },
  { "name": "Saltetera", "img": "Saltetera.png" },
  { "name": "Don Despacito", "img": "Don_Despacito.png" },
  { "name": "Sierpesado", "img": "Sierpesado.png" },
  { "name": "Cobravil", "img": "Cobravil.png" },
  { "name": "Aymadrilo", "img": "Aymadrilo.png" },
  { "name": "Naqueperder", "img": "Naqueperder.png" },
  { "name": "Borjamar", "img": "Borjamar.png" },
  { "name": "Bebesaurio", "img": "Bebesaurio.png" },
  { "name": "Destrozasaurio", "img": "Destrozasaurio.png" },
  { "name": "Torpesaurio", "img": "Torpesaurio.png" },
  { "name": "Luigi Longueras", "img": "Luigi_Longueras.png" },
  { "name": "Pulpopular", "img": "Pulpopular.png" },
  { "name": "Tentanfadado", "img": "Tentanfadado.png" },
  { "name": "Tochacolate", "img": "Tochacolate.png" },
  { "name": "Sustóleo", "img": "Sustoleo.png" },
  { "name": "Reptozudo", "img": "Reptozudo.png" },
  { "name": "Saporientador", "img": "Saporientador.png" },
  { "name": "Originyan", "img": "originyan.png" },
  { "name": "Whismodín", "img": "Whismodin.png" },
  { "name": "Ebisu", "img": "Ebisu.png" },
  { "name": "Whisper Kongming", "img": "Whisper_Kongming.png" },
  { "name": "Urbasierpe", "img": "Urbasierpe.png" },
  { "name": "Pregundragón Rey", "img": "Pregundragon_Rey.png" },
  { "name": "Rolláculo", "img": "Rollaculo.png" },
  { "name": "Pecificador", "img": "Pecificador.png" },
  { "name": "Tibu Jones", "img": "tibu_Jones.gif" },
  { "name": "Mazado de la Calzada", "img": "mazado_de_la_Calzada.gif" },
    { name: "Omoutsubo", img: "Omoutsubo.png" },
    { name: "Naga Raja", img: "Naga_Raja.png" },
    { name: "Tribu Doyagari", aliases: ["Tribu Doyagari", "Doyagari-zoku"], img: "Tribu_Doyagari.png" },
    { name: "Doya Osa", img: "Doya_Osa.png" },
    { name: "Vascoda Gama", img: "Vascoda_Gama.png" },
    { name: "Tibu Jones G", aliases: ["Tibu Jones G", "Indy Jaws G"], img: "Tibu_Jones_G.png" },
    { name: "Cindy Jaws", img: "Cindy_Jaws.png" },
    { name: "Spatto", img: "Spatto.png" },
];

let score = 0; 
let gameEnded = false; // Evita cambios una vez terminado el juego
const unlockedYoKai = new Set(); // Registro de Yo-kai desbloqueados por índice

// Normalizar la entrada del usuario (sin tildes y en minúsculas)
function normalizeString(str) {
    return str.normalize("NFD").replace(/[̀-\u036f]/g, "").toLowerCase();
}

// Crear el objeto de audio una sola vez
let getSound = new Audio("get.mp3");

// Reproducir sonido cuando se desbloquea un Yo-kai (sin solapamiento)
function playGetSound() {
    if (!getSound.paused) {
        getSound.pause(); // Detener el sonido actual si ya está reproduciéndose
        getSound.currentTime = 0; // Reiniciar el sonido al principio
    }
    getSound.play(); // Reproducir el sonido
}

// Actualizar la puntuación en formato (adivinados / totales)
function updateScoreDisplay() {
    const scoreDisplay = document.getElementById("score");
    scoreDisplay.textContent = `${score}/${yoKaiList.length}`;
}

// Verificar la respuesta del usuario
function checkAnswer() {
    if (gameEnded) return; // Si el juego ha terminado, no hacer nada

    const userAnswer = normalizeString(document.getElementById("answer-input").value.trim());

    let correctGuess = false; // Bandera para reproducir el sonido solo si hay aciertos

    yoKaiList.forEach((yoKai, index) => {
        // Normaliza todos los nombres asociados al Yo-kai
        const normalizedNames = [yoKai.name, ...(yoKai.aliases || [])].map(name => normalizeString(name));

        // Si la respuesta coincide con alguno de los nombres y no ha sido desbloqueado
        if (normalizedNames.includes(userAnswer) && !unlockedYoKai.has(index)) {
            const yoKaiImg = document.getElementById(`yo-kai${index + 1}`);
            if (yoKaiImg && yoKaiImg.src.includes("no-kai.png")) {
                yoKaiImg.src = yoKai.img; // Actualiza la imagen

                // Añadir clase para animación
                yoKaiImg.classList.add("yokai-unlocked");
                yoKaiImg.addEventListener("animationend", () => {
                    yoKaiImg.classList.remove("yokai-unlocked"); // Quitar clase tras animación
                });

                unlockedYoKai.add(index); // Marcar el Yo-kai como desbloqueado
                score++;
                correctGuess = true; // Se encontró un acierto
            }
        }
    });

    if (correctGuess) {
        playGetSound(); // Reproducir sonido solo si hubo un acierto
        updateScoreDisplay(); // Actualizar puntuación
        document.getElementById("answer-input").value = ""; // Borra la respuesta después de un acierto
    }

    checkGameEnd(); // Verifica si el juego ha terminado
}

// Verificar si el juego ha terminado (cuando se han adivinado todos los Yo-kai)
function checkGameEnd() {
    if (score === yoKaiList.length) {
        gameEnded = true;
        stopTimer(); // Detener el temporizador
        showCongratsImage(); // Mostrar imagen de "¡Felicidades!"
    }
}

function showCongratsImage() {

    // Detener temporizador
    stopTimer();

    // Obtener tiempo final mostrado
    const tiempoTotal = document.getElementById("time").textContent;

    // Sonido de victoria
    const victorySound = new Audio("congrats.mp3");
    victorySound.volume = 0.8;
    victorySound.play().catch(() => {});

    // Panel lateral
    const finalPanel = document.createElement("div");
    finalPanel.style.position = "fixed";
    finalPanel.style.top = "0";
    finalPanel.style.right = "-350px";
    finalPanel.style.width = "320px";
    finalPanel.style.height = "100%";
    finalPanel.style.backgroundColor = "#15868c";
    finalPanel.style.color = "white";
    finalPanel.style.padding = "20px";
    finalPanel.style.boxSizing = "border-box";
    finalPanel.style.zIndex = "1000";
    finalPanel.style.fontFamily = "Arial, sans-serif";
    finalPanel.style.display = "flex";
    finalPanel.style.flexDirection = "column";
    finalPanel.style.transition = "right 0.6s ease";

    // Botón cerrar
    const closeBtn = document.createElement("div");
    closeBtn.textContent = "✖";
    closeBtn.style.position = "absolute";
    closeBtn.style.top = "15px";
    closeBtn.style.right = "15px";
    closeBtn.style.cursor = "pointer";
    closeBtn.style.fontSize = "18px";

    closeBtn.addEventListener("click", () => {
        finalPanel.style.right = "-350px";
        setTimeout(() => finalPanel.remove(), 600);
    });

    // Título
    const title = document.createElement("h2");
    title.textContent = `¡Enhorabuena! Has adivinado todos los Yo-kai en ${tiempoTotal}`;
    title.style.marginTop = "40px";
    title.style.marginBottom = "30px";
    title.style.fontSize = "22px";

    // Texto Twitter
    const followText = document.createElement("p");
    followText.innerHTML = `
        Si te ha gustado, ¿por qué no seguirme en twitter?: 
        <a href="https://x.com/salty_baconV2" target="_blank" style="color:#4fc3ff; text-decoration:none;">
        @Salty_BaconV2
        </a>
    `;
    followText.style.fontSize = "16px";
    followText.style.marginTop = "auto";

    // Montaje
    finalPanel.appendChild(closeBtn);
    finalPanel.appendChild(title);
    finalPanel.appendChild(followText);
    document.body.appendChild(finalPanel);

    // Animación de entrada
    setTimeout(() => {
        finalPanel.style.right = "0";
    }, 50);
}

// Temporizador
let startTime;
let timerInterval;

function startTimer() {
    startTime = Date.now();
    timerInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
    const currentTime = Date.now();
    const elapsedTime = currentTime - startTime;

    const hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);

    const formattedTime = `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    document.getElementById("time").textContent = formattedTime;
}

function stopTimer() {
    clearInterval(timerInterval);
}

// Manejador de evento: validación automática con "input"
document.getElementById("answer-input").addEventListener("input", checkAnswer);

// Inicializar el marcador y temporizador al cargar la página
updateScoreDisplay(); // Inicializa la puntuación en 0/total
startTimer();

window.addEventListener("beforeunload", (event) => {
    if (score > 0) { // Mostrar advertencia solo si hay progreso
        event.preventDefault();
        event.returnValue = "¿Estás seguro de que quieres salir? Se perderá todo el progreso.";
    }
});
