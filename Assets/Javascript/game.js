var movie = [
    "godfather",
    "forrest gump",
    "the dark knight",
    "the shawshank redemption",
    "back to the future",
    "titanic",
];
var movie_pic = [
    "./Assets/Images/Moives/God_Father.jpeg",
    "./Assets/Images/Moives/Forrest_gump.jpg",
    "./Assets/Images/Moives/The_Dark_knight.jpg",
    "./Assets/Images/Moives/The_Shawshank_Redemption.jpg",
    "./Assets/Images/Moives/back_to_the_future.jpg",
    "./Assets/Images/Moives/titanic.jpg",
]

var sport = [
    "soccer",
    "cricket",
    "hockey",
    "tennis",
    "volleyball",
];
var sport_pic = [
    "./Assets/Images/Sport/soccer.jpg",
    "./Assets/Images/Sport/soccer.jpg",
    "./Assets/Images/Sport/hockey.jpg",
    "./Assets/Images/Sport/tennis.jpg",
    "./Assets/Images/Sport/volleyball.jpg"
]

var country = ["China", "Canada", "USA", "Russia"];
var country_pic = [];
var user_type = [""];
var user_error = [];
var intial_gen = [];
var random_number;
var user_win;
var user_lose;
var random_choose;
var user_choose_topic;
var check_if_word;

function main_game() {
    document.getElementById("first").addEventListener("click", function () {
        document.getElementById("topic").innerHTML = "Please enter answers,pictures are hits";
        console.log("T1");
        choose_word(1);
        setup_Game();
        core(1, random_number);
    }
    )
    document.getElementById("second").addEventListener("click", function () {
        document.getElementById("topic").innerHTML = "Please enter answers,pictures are hits";
        console.log("T2");
        choose_word(2);
        setup_Game();
    }
    )
    document.getElementById("third").addEventListener("click", function () {
        document.getElementById("topic").innerHTML = "Please enter answers,pictures are hits";
        console.log("T3");
        choose_word(3);
    }
    )

    function setup_Game() {
        document.getElementById("win").innerHTML = "Win:<span id='win_score'></span>";
        document.getElementById("lose").innerHTML = "Lose:<span id='lose_score'></span>";
        document.getElementById("score").innerHTML = "Current Life:<span id='life'></span>";
    }
}
function core(choosen, random1) {
    document.onkeyup = function (event) {
        if (choosen == 1) {
            var typed = event.key;
            console.log(user_type.length + " Before");
            for (var i = 0; i < user_type.length; i++) {
                console.log("B" + typed);
                console.log(user_type[i] + " stored");
                if (user_type[i] != typed) {
                    check_if_word = true;
                    console.log("TRUE");
                }
                else {
                    check_if_word = false;
                    console.log("False");
                }
            }

            console.log(check_if_word);
            if (check_if_word == true) {
                var word = movie[random1];
                console.log("word");
                for (var y = 0; y < word.length; y++) {
                    if (typed === word.charAt(y)) {
                        var char = word.charAt(y);
                        console.log("char " + char);
                        var position = y;
                        console.log(position + " position");
                        intial_gen[position] = char;
                        var div1 = "";
                        for (var z = 0; z < intial_gen.length; z++) {
                            div1 = div1 + intial_gen[z];
                            // var Div2= document.getElementById("second_container").innerHTML;
                            console.log(div1);
                            // document.getElementById("second_container").innerHTML =Div2+Div1
                        }
                        document.getElementById("second_container").innerHTML = div1;
                    }
                }
                if (user_type[0] == "") {
                    user_type.shift();
                }
                user_type.push(typed);
                console.log(user_type[0] + "in if");
            }
            else if (check_if_word === false) {
                console.log(user_type[i] + "Check");
                document.getElementById("already_typed").innerHTML = "This Letter " + typed + " has been typed";
            }

        }
        else if (choosen == 2) {
            var typed = event.key;
            console.log(user_type.length + " Before");
            for (var i = 0; i < user_type.length; i++) {
                console.log("B" + typed);
                console.log(user_type[i] + " stored");
                if (user_type[i] != typed) {
                    check_if_word = true;
                    console.log("TRUE");
                }
                else {
                    check_if_word = false;
                    console.log("False");
                }
            }

            console.log(check_if_word);
            if (check_if_word == true) {
                var word = movie[random1];
                console.log("word");
                for (var y = 0; y < word.length; y++) {
                    if (typed === word.charAt(y)) {
                        var char = word.charAt(y);
                        console.log("char " + char);
                        var position = y;
                        console.log(position + " position");
                        intial_gen[position] = char;
                        var div1 = "";
                        for (var z = 0; z < intial_gen.length; z++) {
                            div1 = div1 + intial_gen[z];
                            // var Div2= document.getElementById("second_container").innerHTML;
                            console.log(div1);
                            // document.getElementById("second_container").innerHTML =Div2+Div1
                        }
                        document.getElementById("second_container").innerHTML = div1;
                    }
                }
                if (user_type[0] == "") {
                    user_type.shift();
                }
                user_type.push(typed);
                console.log(user_type[0] + "in if");
            }
            else if (check_if_word === false) {
                console.log(user_type[i] + "Check");
                document.getElementById("already_typed").innerHTML = "This Letter " + typed + " has been typed";
            }

        }
    }
}

function choose_word(choose) {
    if (choose == 1) {
        random_number = Math.floor(Math.random() * (movie.length));
        random_choose = movie[random_number];
        document.getElementById("first").src = movie_pic[random_number];
        var l = random_choose.length;
        document.getElementById("second_container").innerHTML = "";
        console.log(l);
        for (var j = 0; j < l; j++) {
            if (random_choose.charAt(j) != " ") {
                console.log(j);
                console.log(random_choose.charAt(j));
                var Div1 = document.getElementById("second_container").innerHTML;
                console.log(Div1);
                document.getElementById("second_container").innerHTML = Div1 + "_ ";
                intial_gen.push("_ ");
            }
            else {
                var Div1 = document.getElementById("second_container").innerHTML;
                console.log(Div1);
                document.getElementById("second_container").innerHTML = Div1 + "-";
                intial_gen.push("-");

            }
        }
    }
    else if (choose == 2) {
        random_number = Math.floor(Math.random() * (sport.length));
        random_choose = sport[random_number];
        document.getElementById("first").src = sport_pic[random_number];
        document.getElementById("second_container").innerHTML = "";
        var l = random_choose.length;
        for (var j = 0; j < l; j++) {
            if (random_choose.charAt(j) != " ") {
                console.log(j);
                console.log(random_choose.charAt(j));
                var Div1 = document.getElementById("second_container").innerHTML;
                console.log(Div1);
                document.getElementById("second_container").innerHTML = Div1 + "_ ";
                intial_gen.push("_");
            }
            else {
                var Div1 = document.getElementById("second_container").innerHTML;
                console.log(Div1);
                document.getElementById("second_container").innerHTML = Div1 + "-";
                intial_gen.push(" ");
            }
        }
    }

    else if (choose == 3) {
        random_number = Math.floor(Math.random * (country.length - 1));
        random_choose = country[random_number];
    }
}


window.onload = main_game();