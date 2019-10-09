'use strict';
var mark = 0;
var name = prompt('What is your name ?');
alert('hello ' + name)

function askQuestion(question, positive, negative) {
    var response = prompt(question)
    response = response.toUpperCase();
    if (response == 'YES' || response == 'Y') {
        alert(positive);
        mark = mark + 1;
    } else {
        if (response == 'NO' || response == 'N') {
            alert(negative);
        }
    }
}
askQuestion('do you like sweet?', 'yes very much ', 'what is wrong with you ')
askQuestion('Do you feel relax when you listening to music ?', 'Ohh nice :)', 'it is fine ')
askQuestion('Do you playing any sport ? ', "It's good for your healthy :)", "i think it's going to be good if you try to play ")
askQuestion('Do you have all your meals each day ?breakfast , dinner , and lunch ?s', ' Good for you  :)', "Please try to have it all it's good for your health  ")
askQuestion('Have you ever been inlove ?', 'love is life<3 ', "i wish you will oneday ")


/*var year = prompt('Can you guess in which year i was born ?');
if (year == 1994) {
   alert('Good , you get it :)');
   mark = mark + 1 ; 
}
else { */
function loop(year) {
    var correct = false;
    for (let i = 0; i < 4; i++) {
        var year = prompt('Can you guess in which year i was born ?');
        if (year > 1994) {
            alert('Too low');
           // year = prompt('Can you guess in which year i was born ?');
        }
        else if (year < 1994) {
            alert('Too high');
            //year = prompt('Can you guess in which year i was born ?');
        } else if (year == 1994) {
            alert('Good , you get it :)');
            correct = true;
            i = 4;
            mark = mark + 1;
        } 
        //  if (correct) {
        //         alert(' the  correct is 1994 ');
        //         return year;
        //     }
        }
        if(!correct){
            alert(' the  correct is 1994 ');
        }
        return year ; 
    }

loop () ;




var favMonth = ['february', 'october', 'december', 'january', 'july', 'april'];
function guessing(userguessing) {
    


    var userguessing = prompt('What do you think my fav months are ?');
    for (var i = 0; i < favMonth.length; i++) {

        switch (userguessing) {
            case 'february':
            case 'october':
            case 'december':
            case 'january':
            case 'july':
            case 'april':
                alert('Good job ');
                mark++;
                userguessing = prompt('What do you think my fav months are ?');
                break;
            default:
                alert('wrong answer');
                userguessing = prompt('What do you think my fav months are ?');

        }
    }
    return userguessing ;
}
guessing();
    alert(' my fav months is ' + favMonth);
    alert('your point is ' + mark);

