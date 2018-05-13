
$(document).ready(function () {
    var randomNum = Math.floor(Math.random() * 25 + 120)
    $('#guessNumber').text(randomNum);

    var userNum = 0;
    var totalWins = 0;
    var totalLoss = 0;
    var crystalNum1 = Math.floor(Math.random() * 12 + 1);
    var crystalNum2 = Math.floor(Math.random() * 12 + 1);
    var crystalNum3 = Math.floor(Math.random() * 12 + 1);
    var crystalNum4 = Math.floor(Math.random() * 12 + 1);

    $('#numWins').text(totalWins);
    $('#numLoss').text(totalLoss);
    $('#userScore').text(userNum);


    function reset() {
        randomNum = Math.floor(Math.random() * 25 + 120);
        $('#guessNumber').text(randomNum);
        crystalNum1 = Math.floor(Math.random() * 12 + 1);
        crystalNum2 = Math.floor(Math.random() * 12 + 1);
        crystalNum3 = Math.floor(Math.random() * 12 + 1);
        crystalNum4 = Math.floor(Math.random() * 12 + 1);
        userNum = 0;
        $('#userScore').text(userNum);
    }

    function checkWin(){
        totalWins++;
        $('#numWins').text(totalWins)
        reset();
    }

    function checkLoss(){
        totalLoss++;
        $('#numLoss').text(totalLoss)
        reset();
    }


    $('#crystal1').on('click', function () {
        userNum = userNum + crystalNum1;
        $('#userScore').text(userNum);
        if (userNum === randomNum) {
            checkWin();
        }
        else if (userNum > randomNum) {
            checkLoss();
        }
    

    })


    $('#crystal2').on('click', function () {
        userNum = userNum + crystalNum2;
        $('#userScore').text(userNum);
        if (userNum === randomNum) {
            checkWin();

        }
        else if (userNum > randomNum) {
            checkLoss();

        }

    })


    $('#crystal3').on('click', function () {
        userNum = userNum + crystalNum3;
        $('#userScore').text(userNum);
        if (userNum === randomNum) {
            checkWin();

        }
        else if (userNum > randomNum) {
            checkLoss();

        }

    })


    $('#crystal4').on('click', function () {
        userNum = userNum + crystalNum4;
        $('#userScore').text(userNum);
        if (userNum === randomNum) {
            checkWin();
        }
        else if (userNum > randomNum) {
            checkLoss();
        }

    })

});




