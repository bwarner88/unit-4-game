
$(document).ready(() => {
    const randomNum = Math.floor(Math.random() * 25 + 120)
    $('#guessNumber').text(randomNum);

    const userNum = 0;
    const totalWins = 0;
    const totalLoss = 0;
    const crystalNum1 = Math.floor(Math.random() * 12 + 1);
    const crystalNum2 = Math.floor(Math.random() * 12 + 1);
    const crystalNum3 = Math.floor(Math.random() * 12 + 1);
    const crystalNum4 = Math.floor(Math.random() * 12 + 1);

    $('#numWins').text(totalWins);
    $('#numLoss').text(totalLoss);
    $('#userScore').text(userNum);


    const reset = () => {
        randomNum = Math.floor(Math.random() * 25 + 120);
        $('#guessNumber').text(randomNum);
        crystalNum1 = Math.floor(Math.random() * 12 + 1);
        crystalNum2 = Math.floor(Math.random() * 12 + 1);
        crystalNum3 = Math.floor(Math.random() * 12 + 1);
        crystalNum4 = Math.floor(Math.random() * 12 + 1);
        userNum = 0;
        $('#userScore').text(userNum);
    }

    const checkWin = () => {
        totalWins++;
        $('#numWins').text(totalWins)
        reset();
    }

    const checkLoss = () => {
        totalLoss++;
        $('#numLoss').text(totalLoss)
        reset();
    }


    $('#crystal1').on('click', () => {
        userNum = userNum + crystalNum1;
        $('#userScore').text(userNum);
        if (userNum === randomNum) {
            checkWin();
        }
        else if (userNum > randomNum) {
            checkLoss();
        }


    })


    $('#crystal2').on('click', () => {
        userNum = userNum + crystalNum2;
        $('#userScore').text(userNum);
        if (userNum === randomNum) {
            checkWin();
        }
        else if (userNum > randomNum) {
            checkLoss();

        }

    })


    $('#crystal3').on('click', () => {
        userNum = userNum + crystalNum3;
        $('#userScore').text(userNum);
        if (userNum === randomNum) {
            checkWin();

        }
        else if (userNum > randomNum) {
            checkLoss();

        }

    })


    $('#crystal4').on('click', () => {
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




