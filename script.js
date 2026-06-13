const yoKaiList = [
{ name: "Noko", img: "noko.png" },
{ name: "Nénunoko", img: "florinoko.png" },
{ name: "Pandanoko", img: "pandanoko.png" },
{ name: "Anghihihille", img: "anjijila.png" },
{ name: "Méroubadour", img: "tenongrio.png" },
{ name: "Urnaconda", img: "urnaconda.png" },
{ name: "Murhaine", img: "pezqueroso.png" },
{ name: "Saumhonni", img: "pezgativo.png" },
{ name: "Vexturgeon", img: "pezquiciado.png" },
{ name: "Dracounet", img: "draqui.png" },
{ name: "Sire Dragon", img: "lord_dragon.png" },
{ name: "Drago", img: "dragon_azur.png" },
{ name: "Bababou", img: "ido.png" },
{ name: "Tourneboul", img: "turdido.png" },
{ name: "Croquin", img: "pelluron.png" },
{ name: "Inisquale", img: "pringuron.png" },
{ name: "Claquille", img: "boquirroto.png" },
{ name: "Cocpille", img: "yopago.png" },
{ name: "Jacquasseur", img: "charlaton.png" },
{ name: "Bananar", img: "tochaplatano.png" },
{ name: "Vipètesec", img: "mandicoro.png" },
{ name: "Vipérale", img: "ciniserpe.png" },
{ name: "Vipairflay", img: "arfidio.png" },
{ name: "Octorgone", img: "venocto.png" },
{ name: "Octorgombre", img: "venoctoscuro.png" },
   { name: "Crampaud", img: "Torticolis.png" },
    { name: "Maudieuse", img: "Malmet.png" },
    { name: "Jérémya", img: "Agorerana.png" },
    { name: "Yvantouse", img: "Desolvidador.png" },
    { name: "Ed Mémoire", img: "Memorio.png" },
    { name: "Scoltine", img: "Mosquereta.png" },
    { name: "Scolérique", img: "Bronquereta.png" },
    { name: "Sirénée", img: "Nereida.png" },
    { name: "Sirènité", img: "Sirenia.png" },
    { name: "Sireine-mère", img: "Oceanida.png" },
    { name: "Mlle Coucou", aliases: ["Mlle Coucou", "Mademoiselle Coucou"], img: "Cisnia.png" },
    { name: "Draconfus", img: "Vacilagon.png" },
    { name: "Carpitaine", img: "Bergantin_A.png" },
    { name: "Slurpent", img: "Octosierpe.png" },
    { name: "Robonoko", img: "Robonoko.png" },
    { name: "Robodracou", img: "Robodraqui.png" },
    { name: "Poulpatouch", img: "Minipulpobola.png" },
    { name: "Poulpater", img: "Pulpobola_Rey.png" },
  { "name": "Whisper", "img": "Whisper.png" },
  { "name": "Whispicrates", "img": "Whispocrates.png" },
  { "name": "Scintinoko", "img": "Estrenoko.png" },
  { name: "Thépacap", "img": "Saltetera.png" },
  { name: "Escarcool", "img": "Don_Despacito.png" },
  { name: "Outransss", "img": "Sierpesado.png" },
  { name: "Médisansss", "img": "Cobravil.png" },
  { name: "Ébobby", "img": "Aymadrilo.png" },
  { name: "Céfasslopode", "img": "Naqueperder.png" },
  { name: "Barbuzz", "img": "Borjamar.png" },
  { name: "Tyragédie", "img": "Bebesaurio.png" },
  { name: "Catastrosaure", "img": "Destrozasaurio.png" },
  { name: "Godichezilla", "img": "Torpesaurio.png" },
  { name: "Criquetif", "img": "Luigi_Longueras.png" },
  { name: "Poulpulaire", "img": "Pulpopular.png" },
  { name: "Poulpétard", "img": "Tentanfadado.png" },
  { name: "Chocobananar", "img": "Tochacolate.png" },
  { name: "Agraisseur", "img": "Sustoleo.png" },
  { name: "Diegoïste", "img": "Reptozudo.png" },
  { name: "Entraînette", "img": "Saporientador.png" },
  { "name": "Originyan", "img": "originyan.png" },
  { "name": "Josper", "img": "Whismodin.png" },
  { "name": "Ebisu", "img": "Ebisu.png" },
  { "name": "Whisper Kongming", "img": "Whisper_Kongming.png" },
  { "name": "Mégalopaul", "img": "Urbasierpe.png" },
  { "name": "Roi Pourkoidon", "img": "Pregundragon_Rey.png" },
  { "name": "Somnoracle", "img": "Rollaculo.png" },
  { "name": "Turboss", "img": "Pecificador.png" },
  { "name": "Indiana Jaws", "img": "tibu_Jones.gif" },
  { "name": "Cocassepied", "img": "mazado_de_la_Calzada.gif" },
    { name: "Omoutsubo", img: "Omoutsubo.png" },
    { name: "Naga Raja", img: "Naga_Raja.png" },
    { name: "Tribu Doyagari", aliases: ["Tribu Doyagari", "Doyagari-zoku"], img: "Tribu_Doyagari.png" },
    { name: "Doya Osa", img: "Doya_Osa.png" },
    { name: "Vascoda Gama", img: "Vascoda_Gama.png" },
    { name: "Indiana Jaws G", aliases: ["Indiana Jaws G", "Indy Jaws G"], img: "Tibu_Jones_G.png" },
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

    const title = document.createElement("h2");
    title.textContent = `Bravo ! Vous avez deviné tous les Yo-kai en ${tiempoTotal}`;
    title.style.marginTop = "40px";
    title.style.marginBottom = "30px";
    title.style.fontSize = "22px";

    // Texto Twitter
    const followText = document.createElement("p");
    followText.innerHTML = `
        Si cela vous a plu, pourquoi ne pas me suivre sur Twitter ?: 
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
