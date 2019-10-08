'use strict';
var mark =0 ;
var name = prompt('What is your name ?');
alert('hello '+ name )
var music = prompt('Do you feel relax when you listening to music ?')
music = music.toUpperCase();
if (music == 'YES' || music == 'Y') {
    alert('Ohh nice :)');
    mark = mark + 1 ;
} else {
    if (music == 'NO' || music == 'N') {
        alert('it is fine ');
    }
}
//console.log('music', music )
var sport = prompt('Do you playing any sport ? ')
sport = sport.toUpperCase();
if (sport == 'YES' || sport == 'Y') {
    alert("It's good for your healthy :)");
    mark = mark + 1 ;  
} else {
    if (sport == 'NO' || sport == 'N') {
        alert("i think it's going to be good if you try to play ");
    }
}
//console.log('sport', sport )
var food = prompt('Do you have all your meals each day ?breakfast , dinner , and lunch ?s')
food = food.toUpperCase();
if (food == 'YES' || food == 'Y') {
    alert(' Good for you  :)' );
    mark = mark + 1  ; 
} else {
    if (food == 'NO' || food == 'N') {
        alert("Please try to have it all it's good for your health  ");
    }
}
//console.log( 'food '+food )
var love = prompt('Have you ever been inlove ?')
love = love.toUpperCase();
if (love == 'YES' || love == 'Y') {
    alert('love is life  <3') ;
    mark = mark + 1 ; 
} else {
    if (love == 'NO' || love == 'N') {
        alert('Wish that you will oneday :) ');
    }
}
//console.log('love', love ) ;
var kid = prompt('Do you like kids?')
kid = kid.toUpperCase();
if (kid == 'YES' || kid == 'Y') {
    alert("They're cute  :D ");
     mark = mark + 1 ; 


} else {
    if (kid == 'NO' || kid == 'N') {
        alert(' Oh come on  :) ');
        mark = mark + 1 ; 
    }
}
//console.log('kid', kid ) ; 



var year = prompt('Can you guess in which year i was born ?');
if (year == 1994) {
   alert('Good , you get it :)');
   mark = mark + 1 ; 
}
else {

   var correct = false;
   for (let i = 0; i < 4; i++) {
       if (year > 1994) {
           alert('Too low');
           year = prompt('Can you guess in which year i was born ?');
       }
       else if (year < 1994) {
           alert('Too high');
           year = prompt('Can you guess in which year i was born ?');
       } else if (year == 1994) {
           alert('Good , you get it :)');
           correct = true;
           i = 4;
           mark = mark + 1 ; 
       } else {
           alert(' the  correct is 1994 ');
       }
   }

   if (correct == false) {
       alert(' the  correct is 1994 ');   
   }


   
}

var favMonth = ['february', 'october', 'december', 'january', 'july', 'april'];

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
alert(' my fav months is ' + favMonth);
alert('your point is ' + mark);
