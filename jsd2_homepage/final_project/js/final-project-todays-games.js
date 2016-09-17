

// SETUP //
var button = document.querySelector("button");
var todaysGames = document.querySelector("todaysGames");
var url = "https://api.fantasydata.net/mlb/v2/JSON/BoxScores/2016-SEP-10&Ocp-Apim-Subscription-Key=5e2a5ce1853e470a81bd6355e3321b4c";
var game

// events //

button.addEventListener('click',getTodaysGames);


function getTodaysGames(e){
	e.preventDefault();
	
	$.ajax({
        type: "GET",
        url: "https://api.fantasydata.net/mlb/v2/JSON/BoxScores/2016-SEP-01",
        beforeSend: function(xhrObj){
                // Request header
                xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key","5e2a5ce1853e470a81bd6355e3321b4c");        
            
        },
        success: function (game){
					var source = $(gamesTemplate).html();
					var gameTemplate = Handlebars.compile(source);
					var newHTML = gameTemplate(game);

					//grabbing the games container div and then appending the new HTML to it
					$("#todaysGamesContainer").append(newHTML);

				},
				error: function(){
					alert("Error");
				},
    });
}

