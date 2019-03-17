

        var wins = 0;
        var losses = 0;
        var guessesLeft = 5;
        var lettersGuessed = [];

        function resetLetters() { // a function that empties the lettersGuessed array
            lettersGuessed = [];
        }

        function resetGuess() { //a function that resets guessesLeft to 5
            guessesLeft = 5;
        }

        function newSecret() { //a function that selects a new secret letter to choose
            secretLetter = possibleLetters[Math.floor(Math.random() * possibleLetters.length)];
        }


        var possibleLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
        var secretLetter = possibleLetters[Math.floor(Math.random() * possibleLetters.length)]; //selects a secret letter between a and z

        var winsElement = document.getElementById("wins");
        winsElement.textContent = wins.toString(); //display wins
        var lossesElement = document.getElementById("losses");
        lossesElement.textContent = losses.toString(); //display losses
        var guessesLeftElement = document.getElementById("guesses-left");
        guessesLeftElement.textContent = guessesLeft.toString(); //display guesses left
        var lettersGuessedElement = document.getElementById("letters-guessed");
        lettersGuessedElement.textContent = lettersGuessed.toString(); //display letters guessed

        document.onkeyup = function (event) {//set a user input on key event (userChoice)
            var userChoice = event.key;
            if (!lettersGuessed.includes(userChoice)) {//if userChoice hasn't already been chosen
            if (window.secretLetter === userChoice) { //if the userChoice === the secretLetter
                alert("You have chosen wisely."); //alert the user they won
                wins++; //add one to wins column
                winsElement.textContent = wins.toString(); //revises win element
                resetLetters(); //calls resetLetters function
                lettersGuessedElement.textContent = lettersGuessed.toString(); //updates lettersGuessedElement
                resetGuess(); //calls resetGuessesLeft function
                guessesLeftElement.textContent = guessesLeft.toString(); //updates guessesLeftElement
                newSecret(); //sets a new secret by calling newSecret function

            } else {
                guessesLeft--; //guesses minus 1
                guessesLeftElement.textContent = guessesLeft.toString(); //updates guessesLeft element
                lettersGuessed.push(userChoice); //pushes the wrong choice to the lettersGuessed array
                lettersGuessedElement.textContent = lettersGuessed.join(' ').toString(); //removes comma and joins array as a string, updates lettersGuessed element
            }

            if (guessesLeft < 1) { //if the user runs out of guesses
                alert("You have chosen poorly! Play again."); //alert them they lost
                losses++; //losses column +1
                lossesElement.textContent = losses.toString(); //updates losses element
                resetLetters(); //calls function to empty the array of guesses
                lettersGuessedElement.textContent = lettersGuessed.toString(); //updates letters guessed w/ reset value
                resetGuess(); //calls function to reset #of guesses
                guessesLeftElement.textContent = guessesLeft.toString(); //updates guessesLeft element.
                newSecret(); //function picks a new secret word.
            }
        }
       }


 