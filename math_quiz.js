player1_Name = localStorage.getItem("Player_1");
player2_Name = localStorage.getItem("Player_2");

player1_Score = 0;
player2_Score = 0;

document.getElementById("player1_name").innerHTML = player1_Name + " : ";
document.getElementById("player2_name").innerHTML = player2_Name + " : ";

document.getElementById("player1_score").innerHTML = player1_Score;
document.getElementById("player2_score").innerHTML = player2_Score;

document.getElementById("player_question").innerHTML = " Question Turn - " + player1_Name;
document.getElementById("player_answer").innerHTML = " Answer Turn - " + player2_Name;

function send(){
    num1 = document.getElementById("number_1").value;
    num2 = document.getElementById("number_2").value;
    actual_answer = parseInt(num1)*parseInt(num2);

    question_word = "<h4>" + num1 + " x "+ num2 +"</h4>";
    input_box = "<br> Answer : <input type='text' id='check_box'> ";
    check_button = "<br> <br> <button class='btn btn-info' onclick='check()'> Check </button> <br>";
    row = question_word + input_box + check_button;

    document.getElementById("output").innerHTML = row;
    document.getElementById("number_1").value = "";
    document.getElementById("number_2").value = "";
}