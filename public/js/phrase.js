$("#toggle-phrase-button").click(randomPhrase);

function randomPhrase() {
    $("#spinner").show();

    $.get("http://localhost:3000/frases", toggleRandomPhrase)
        .fail(function() {
            $("#error").show();
            
            setTimeout(function() {
                $("#error").toggle();
            }, 1500);
        })
        .always(function() { // The function always will be executed
            $("#spinner").hide();
        });
}

function toggleRandomPhrase(data) {
    const $phrase = $(".phrase");
    const randomNumber = Math.floor(Math.random() * data.length);

    $phrase.text(data[randomNumber].texto);

    updatePhraseLength();
    updateInitialTime(data[randomNumber].tempo);
}