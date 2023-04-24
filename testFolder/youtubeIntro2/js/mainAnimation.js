let shortestDuration = 0.05;
let shorterDuration = 0.1;
let shortDuration = 0.2;
let longDuration = 0.3;
let longestDuration = 0.5;

let blackSquareDelay = longestDuration

let mainTimeline = gsap.timeline({delay: longestDuration});
let blackSquareTimeline = gsap.timeline({delay: longestDuration});
let startSquare = document.querySelector(".startSquare");
let blackSquare = document.querySelector(".blackSquare");

mainTimeline.to(startSquare, {duration: longestDuration, x: "47vw", rotation: 0, ease: Power2});
blackSquareDelay += longestDuration;
//Hop 1
mainTimeline.to(startSquare, {duration: shorterDuration, delay: 1, y: "-200%", x: "45vw", rotate: -45});
mainTimeline.to(startSquare, {duration: shortestDuration, y:"0%" , x: "46vw", rotation: 0});
blackSquareDelay += shorterDuration + shortestDuration;
//Hop 2
mainTimeline.to(startSquare, {duration: shorterDuration, y: "-100%", x: "48vw", rotate: 30});
mainTimeline.to(startSquare, {duration: shortestDuration, y:"0%" , x: "47vw", rotation: 0, transformOrigin: "50% 100%"});
blackSquareDelay += shorterDuration + shortestDuration;
//Wiggle
for (let index = 0; index < 5; index++) {
    mainTimeline.to(startSquare, {duration: shortestDuration, rotate: 5});
    mainTimeline.to(startSquare, {duration: shortestDuration, rotate: -5});
    blackSquareDelay += shortestDuration * 2;
}
mainTimeline.to(startSquare, {duration: shortestDuration, rotate: 0});
blackSquareDelay += shortestDuration;
//Smartphone
mainTimeline.to(startSquare, {duration: shorterDuration, scaleX: 6, scaleY: 9, backgroundColor: "#ffa500", transformOrigin: 'bottom'});
blackSquareDelay += shorterDuration;
//Laptop
mainTimeline.to(startSquare, {duration: shorterDuration,delay:longestDuration , scaleX: 16, scaleY: 9, backgroundColor: "#800080"});
//PC1
mainTimeline.to(startSquare, {duration: shorterDuration,delay: longestDuration , scaleX: 16, scaleY: 11, backgroundColor: "#4242c3", y: "-50%"});
//PC2
mainTimeline.to(startSquare, {duration: shorterDuration,delay: longestDuration , scaleX: 18, scaleY: 9, backgroundColor: "#3e7b3e", y: "50%"});
//End for square
mainTimeline.to(startSquare, {duration: shorterDuration ,delay: longestDuration , scaleX: 0, scaleY: 0});

//Smartphone screen
blackSquareTimeline.to(blackSquare, {duration: shorterDuration, delay: blackSquareDelay + longestDuration, scaleX: 5.5, scaleY: 8.5, transformOrigin: 'bottom', display: "block", y: "-20%"});
//Laptop screen
blackSquareTimeline.to(blackSquare, {duration: shorterDuration, delay: shortDuration , scaleX: 15.5, scaleY: 8.5, y: "-20%"});
//dissaapear screen
blackSquareTimeline.to(blackSquare, {duration: shorterDuration, delay: shortDuration , scaleX: 0, scaleY: 0});