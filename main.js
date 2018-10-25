$(document).ready(function () {

    
    var topics = ["bulbasaur", "ivysaur", "venusaur", "charmander", "charmeleon", "charizard", "squirtle", "wartortle", "blastoise"];
    
    
    for (i = 0; i < topics.length; i++) {
        $("#buttons").append($("<button>", { id: "pokebuttons", class: "btn btn-dark" }).text(topics[i].toLowerCase()))
    }

    $("#searchGifs").click(function () {
        var input = $("#searchText").val().toLowerCase();
        console.log(input)
        if (input === ""){
            alert ("Please enter a Pokemon");
            return
        }

        if (topics.indexOf(input) !==-1){

            alert ("There's already a GIPHY button for " + input);
            return
        }

        console.log(input);
        topics.push(input);  // add the input to the topics array
        $("#buttons").append($("<button>", {class: "btn btn-dark" }).text(topics[topics.length - 1])); //create button for the topic searched in search bar
    });

    $("#searchText").keyup(function (event) { // enter key triggers click function above to add new box
        console.log(event);
        if (event.keyCode === 13){
            $("#searchGifs").click()
        }
    });



    $(document).on("click",".btn-dark", function(){
        $("#gifsDisplay").empty()
        console.log("hi");
        inputSearch = this.textContent;
        console.log(inputSearch);
        var apiKey = "Hv8i0h2SNO7gK9IEt8XYsVG9SWZj7Zdv";
        var xhr = "https://api.giphy.com/v1/gifs/search?q="+ inputSearch +"&api_key=" + apiKey + "&limit=12"
        $.ajax({
            url: xhr,
            method: "GET"
        }).then(function(response){
            console.log("is this getting called")
            
            var gifs = response.data

            for (i in gifs)
            {$("#gifsDisplay").append("<img src='" + gifs[i].images.original.url + "' style='height:250px; width: 250px;'>")
            }           
        });

    })
















}); //end of document ready