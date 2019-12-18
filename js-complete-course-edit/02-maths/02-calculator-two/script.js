
/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

function calc(shithead) {
    // to get the value of an input: document.getElementById("element-id").value
var number1 = +document.getElementById("op-one").value;
var number2 = +document.getElementById("op-two").value;

    switch (shithead) {
        case 'addition':
            var addition = number1 + number2;
            alert(addition);
            break;

        case 'subtraction':
            var sub = number1 - number2;
            alert(sub);
            break;

        case 'multiplication':
            var mult = number1 * number2;
            alert(mult);
            break;

        case 'division':
            var divide = number1 / number2;
            alert(divide);
            break;

    }

}

