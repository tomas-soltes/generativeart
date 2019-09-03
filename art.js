/* Variables */

const firstItem = document.querySelector('#artwork1');
const secondItem = document.querySelector('#artwork2');
const thirdItem = document.querySelector('#artwork3');
const forthItem = document.querySelector('#artwork4');
const fifthItem = document.querySelector('#artwork5');
const sixthItem = document.querySelector('#artwork6');
const seventhItem = document.querySelector('#artwork7');
const eighthItem = document.querySelector('#artwork8');
const ninthItem = document.querySelector('#artwork9');

forthItem.style.transform = "translate(-30%,-30%)";

let i = 0;

/* First item */
let firstItemHeight = 100;

for (i = 0; i < 10; i++) {
    const newBox = document.createElement("div");
    newBox.className = 'box';
    if (i == 0) {
        newBox.style.height = firstItemHeight + "px";
        newBox.style.width = firstItemHeight + "px";
    } else {
        newBox.style.height = firstItemHeight + 20 * i + "px";
        newBox.style.width = firstItemHeight + 20 * i + "px";
    }
    document.querySelector('#artwork1').appendChild(newBox);
}

/* Second item */
for (i = 0; i < 90; i++) {
    const newBox = document.createElement("div");
    newBox.className = 'box';
    newBox.style.height = firstItemHeight + "px";
    newBox.style.width = firstItemHeight + "px";
    newBox.style.transform = "rotate(" + i * 10 + "deg" + ")";

    document.querySelector('#artwork2').appendChild(newBox);
}

/* Third item */
let thirdItemHeight = 5;
for (i = 0; i < 15; i++) {
    const newBox = document.createElement("div");
    newBox.className = 'circle';
    if (i == 0) {
        newBox.style.height = thirdItemHeight + "px";
        newBox.style.width = thirdItemHeight + "px";
    } else {
        newBox.style.height = thirdItemHeight + 20 * i + "px";
        newBox.style.width = thirdItemHeight + 20 * i + "px";
    }
    document.querySelector('#artwork3').appendChild(newBox);
}

/* Forth item */
let forthItemTransform = 0;

for (i = 0; i < 10; i++) {
    const newBox = document.createElement("div");
    newBox.className = 'box';
    newBox.style.height = firstItemHeight + "px";
    newBox.style.width = firstItemHeight + "px";
    forthItemTransform = 20 * i + "px";
    newBox.style.transform = "translate(" + forthItemTransform + "," + forthItemTransform + ")";


    document.querySelector('#artwork4').appendChild(newBox);
}

/* Fifth item */
let counter = 0;

for (i = 0; i < 5; i++) {
    const newBox = document.createElement("div");
    newBox.className = 'circle';
    counter = counter + i * 20;
    console.log(counter);

    if (i == 0) {
        newBox.style.height = thirdItemHeight + "px";
        newBox.style.width = thirdItemHeight + "px";
    } else {
        newBox.style.height = thirdItemHeight + counter + "px";
        newBox.style.width = thirdItemHeight + counter + "px";
    }
    document.querySelector('#artwork5').appendChild(newBox);
}

/* Sixth item */

counterPx = -5;
counterPy = 14;

for (i = 0; i < 10; i++) {
    const newBox = document.createElement("div");
    counterDeg = 20 * i;
    newBox.className = 'circle';
    console.log(counter);
    newBox.style.transform = "translate(" + counterPx + "px," + counterPy + "px) rotate(" + counterDeg + "deg)";
    counterPx = counterPx + 1;

    if (i < 7) {
        counterPy = counterPy - 2;
    } else {
        counterPy = counterPy + 2;
    }

    sixthItem.style.transform = "translateX(-20%) rotate(-37deg)";

    document.querySelector('#artwork6').appendChild(newBox);
}

/* Seventh item */

for (i = 0; i < 10; i++) {
    const newBox = document.createElement("div");
    counter = 5 * i + "px";
    newBox.className = 'circle';
    if (i == 0) {
        newBox.style.height = thirdItemHeight + "px";
        newBox.style.width = thirdItemHeight + "px";
    } else {
        newBox.style.height = thirdItemHeight + 20 * i + "px";
        newBox.style.width = thirdItemHeight + 20 * i + "px";
    }
    newBox.style.transform = "translate(100%,-50%)";
    seventhItem.style.transform = "translate(-30%,30%)";

    document.querySelector('#artwork7').appendChild(newBox);
}


/* Eighth item */

for (i = 0; i < 10; i++) {
    const newBox = document.createElement("div");
    counter = 15 * i;
    newBox.className = 'box';
    newBox.style.height = 50 + (10 * i) + "px";
    newBox.style.width = 50 + (10 * i) + "px";
    newBox.style.transform = "translateX(50%) rotate(" + counter + "deg)";

    document.querySelector('#artwork8').appendChild(newBox);
}

/* Ninth item */


for (i = 0; i < 5; i++) {
    const newBox = document.createElement("div");
    const newCircle = document.createElement("div");
    newBox.className = 'box';
    newCircle.className = 'circle';
    if (i == 0) {
        newBox.style.height = firstItemHeight + "px";
        newBox.style.width = firstItemHeight + "px";
        newCircle.style.height = firstItemHeight + "px";
        newCircle.style.width = firstItemHeight + "px";
    } else {
        newBox.style.height = firstItemHeight + 30 * i + "px";
        newBox.style.width = firstItemHeight + 30 * i + "px";
        newCircle.style.height = firstItemHeight + 30 * i + "px";
        newCircle.style.width = firstItemHeight + 30 * i + "px";
    }
    document.querySelector('#artwork9').appendChild(newBox);
    document.querySelector('#artwork9').appendChild(newCircle);
}