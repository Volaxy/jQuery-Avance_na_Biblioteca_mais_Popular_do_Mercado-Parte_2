$("#toggle-phrase-button").click(randomPhrase);
$("#phrase-id-button").click(searchPhrase);

function randomPhrase() {
    $("#spinner").show();

    $.get("http://localhost:3000/frases", toggleRandomPhrase)
        .fail(function() {
            $("#error").show();
            
            setTimeout(function() {
                $("#error").toggle();
            }, 1500);
        })
        .always(function() {
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

function searchPhrase() {
    $("#spinner").show();
    
    const phraseId = $("#phrase-id").val();
    const data = { id: phraseId }; // The keys are the same of the attributes of the server object
    
    $.get("http://localhost:3000/frases", data, togglePhrase) // When the request back, the function in the 3º parameter is executed
        .fail(function() {
            $("#error").show();
            
            setTimeout(function() {
                $("#error").toggle();
            }, 1500);
        })
        .always(function() {
            $("#spinner").toggle();
        });
}

function togglePhrase(data) {
    const $phrase = $(".phrase");

    $phrase.text(data.texto);

    updatePhraseLength();
    updateInitialTime(data.tempo);
}