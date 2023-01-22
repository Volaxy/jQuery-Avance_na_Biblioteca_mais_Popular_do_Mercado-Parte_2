$("#toggle-phrase-button").click(randomPhrase);

function randomPhrase() {
    $.get("http://localhost:3000/frases", toggleRandomPhrase);
}

function toggleRandomPhrase(data) {
    const $phrase = $(".phrase");
    const randomNumber = Math.floor(Math.random() * data.length);

    $phrase.text(data[randomNumber].texto);

    updatePhraseLength();
    updateInitialTime(data[randomNumber].tempo);
}