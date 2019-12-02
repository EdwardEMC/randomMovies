$(document).ready(function(){

    var movieDisplay = $(".movieDetails");

    function displayMovie(){
        var APIKey = "f7358f9f";
        var movie = $("#search").val();
        var queryURL = "https://www.omdbapi.com/?t=" + movie + "&apikey=" + APIKey;

        $.ajax({
            url: queryURL,
            METHOD: "GET"
        }).then(function(response){
            console.log(response);

            var movieName = $("<h1>").text(response.Title);
            var rated = $("<h3>").text("Rated: "+response.Rated);
            var genre = $("<h4>").text("Genre: "+response.Genre);
            var description = $("<h4>").text("Plot: "+response.Plot);
            var poster = $("<img>").attr("src", response.Poster);
            var actors = $("<h4>").text("Actors: "+response.Actors);
            var runtime = $("<h4>").text(response.Runtime);
            var yearReleased = $("<h4>").text("Year released: "+response.Year);


            movieDisplay.append(movieName);
            movieDisplay.append(rated);
            movieDisplay.append(genre);
            movieDisplay.append(description);
            movieDisplay.append(poster);
            movieDisplay.append(actors);
            movieDisplay.append(runtime);
            movieDisplay.append(yearReleased);
        }) 
    }

    function random(){
        var choice = "tt" + Math.floor(Math.random()*3) + Math.random().toString().slice(2,8);
        console.log(choice);
        return choice;
    }

    function randomMovie(){
        var APIKey = "f7358f9f";
        var choice = random();
        var queryURL = "https://www.omdbapi.com/?i=" + choice + "&apikey=" + APIKey;

        $.ajax({
            url: queryURL,
            METHOD: "GET"
        }).then(function(response){
            console.log(response);

            var movieName = $("<h1>").text(response.Title);
            var rated = $("<h3>").text("Rated: "+response.Rated);
            var genre = $("<h4>").text("Genre: "+response.Genre);
            var description = $("<h4>").text("Plot: "+response.Plot);
            var poster = $("<img>").attr("src", response.Poster);
            var actors = $("<h4>").text("Actors: "+response.Actors);
            var runtime = $("<h4>").text(response.Runtime);
            var yearReleased = $("<h4>").text("Year released: "+response.Year);


            movieDisplay.append(movieName);
            movieDisplay.append(rated);
            movieDisplay.append(genre);
            movieDisplay.append(description);
            movieDisplay.append(poster);
            movieDisplay.append(actors);
            movieDisplay.append(runtime);
            movieDisplay.append(yearReleased);
        }) 
    }
    $("#random").on("click", function(){
        event.preventDefault();
        movieDisplay.empty();
        randomMovie();
    })

    $("#searchBtn").on("click", function(){
        event.preventDefault();
        movieDisplay.empty();
        displayMovie();
    })

})