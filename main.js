$(document).ready(function () {

    
    var topics = ["Bulbasaur", "Ivysaur", "Venusaur", "Charmander", "Charmeleon", "Charizard", "Squirtle", "Wartortle", "Blastoise",
        "Caterpie", "Metapod", "Butterfree", "Weedle", "Kakuna", "Beedrill", "Pidgey", "Pidgeotto", "Pidgeot", "Rattata", "Raticate"];

    for (i = 0; i < topics.length; i++) {
        $("#buttons").append($("<button>", { id: "pokebuttons", class: "btn btn-info" }).text(topics[i]))
    }

    $(".btn-info").click(function(){
        console.log("hi");
        inputSearch = this.textContent;
        console.log(inputSearch);
        var apiKey = "Hv8i0h2SNO7gK9IEt8XYsVG9SWZj7Zdv";
        var xhr = "https://api.giphy.com/v1/gifs/search?q="+ inputSearch +"&api_key=" + apiKey + "&limit=10"
        $.ajax({
            url: xhr,
            method: "GET"
        }).then(function(response){
            console.log(response);
        })

    })


    $("#searchGifs").click(function () {
        var input = $("#searchText").val();
        console.log(input);
        topics.push(input);  // add the input to the topics array
        $("#buttons").append($("<button>", { id: "pokebuttons", class: "btn btn-info" }).text(topics[topics.length - 1])); //create button for the topic searched in search bar



    });














}); //end of document ready