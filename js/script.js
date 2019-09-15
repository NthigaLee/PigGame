var player1 = [];
var player1Acc = [];
var player2 = [];
var player2Acc = [];


function player2turn() {
    $("#oneCss").css("background-color", "#357CBA");
    $("#twoCss").css("background-color","#BA3535")
    $("#roll-1").attr("disabled", true);
    $("#hold-1").attr("disabled", true);
    $("#roll-2").attr("disabled", false);
    $("#hold-2").attr("disabled", false);
}
function player1turn() {
    $("#roll-2").attr("disabled", true);
    $("#hold-2").attr("disabled", true);
    $("#roll-1").attr("disabled", false);
    $("#hold-1").attr("disabled", false);
}




$(document).ready(function () {

    $("#instructions").click(function () {
        $("#instruShow").fadeToggle(1000);
    });

    $("#roll-1").click(function () {
        var diceNum = _.random(1, 6);

        $("#entries1").text(diceNum);
        totol = 0;
        player1.push(diceNum);
        console.log(player1);
        player1.forEach(function (play1) {
            if (play1 === 1) {
                
                totol = 0;
                player2turn();
                return (totol);
            }
            else {
                totol += play1;
                return (totol);
            }
        });
        console.log(totol);
        $("#acc1").text(totol);
    });
    $("#hold-1").click(function() {
        
        $("#acc1").text(0);
       player1Acc.push(totol);
       console.log(player1Acc);
    var accumu = 0;
       player1Acc.forEach(function(accpl1){
       accumu +=accpl1;
       return (accumu);
       });
       
       $(".overallScore1").text(accumu);
       player2turn();
    });

//player 2 click functions:

    $("#roll-2").click(function () {
        var diceNum = _.random(1, 6);
        total = 0;
        $("#entries2").text(diceNum);
        
        player2.push(diceNum);
        console.log(player2);
        
        player2.forEach(function (play2) {
            
            if (play2 === 1) {
                
                total = 0;
                player1turn();
                return (total);
            }
            else {
                total += play2;
                return (total);
            }
        });
        console.log(total);
        $("#acc2").text(total);
    });
    $("#hold-2").click(function() {
        $("#acc2").text(0);
       player2Acc.push(total);
       
    var accumu1 = 0;
       player1Acc.forEach(function(accpl2){
       accumu1 +=accpl2;
       return (accumu1);
       });
       
       $(".overallScore2").text(accumu1);
       player1turn();
    });

    if (accumu >=100 || accumu1 >= 100){

        $(".row").fadeOut(2000);
        if (accumu >= 100){
            $(".winner").text("Player 1 Wins!");
        }
        else{
            $(".winner").text("Plaer 2 Wins!!")
        }

        $(".ending").fadeIn(1000);

    }


});