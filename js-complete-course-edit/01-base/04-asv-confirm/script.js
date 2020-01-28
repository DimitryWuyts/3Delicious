/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function repeat() {

    let q1;
        q1 = prompt("How old are you?");
        let q2;
        q2 = prompt("What is your gender?");
        let q3;
        q3 = prompt("Where are you from?");

let q4 = confirm("Is this correct? " + q1 + " " + q2 + " " + q3);

if (q4 === true) {
    alert("Thank you!\nSending info to The Big Zucc...");
}
else {
    repeat()
}

})();
