let shortestDuration = 0.05;
let shorterDuration = 0.1;
let shortDuration = 0.2;
let longDuration = 0.3;
let longestDuration = 0.5;
let longeeestDuration = 1;

let screenSquareDelay = longestDuration

let mainTimeline = gsap.timeline({delay: longestDuration});
let screenSquareTimeline = gsap.timeline({delay: longestDuration});
let startSquare = document.querySelector(".startSquare");
let blackSquare = document.querySelector(".blackSquare");

mainTimeline.to(startSquare, {duration: longestDuration, x: "47vw", rotation: 0, ease: Power2});
screenSquareDelay += longestDuration;
//Hop 1
mainTimeline.to(startSquare, {duration: shortestDuration, delay: longeeestDuration, y: "-100%", x: "46vw", rotate: -45});
mainTimeline.to(startSquare, {duration: shorterDuration, y:"0%" , x: "46.5vw", rotation: 0});
screenSquareDelay += shortestDuration + longeeestDuration + shorterDuration;
//Hop 2
mainTimeline.to(startSquare, {duration: shortestDuration, delay: shortDuration, y: "-50%", x: "47.5vw", rotate: 30});
mainTimeline.to(startSquare, {duration: shorterDuration, y:"0%" , x: "47vw", rotation: 0, transformOrigin: "50% 100%"});
screenSquareDelay += shortestDuration + shortDuration + shorterDuration;
//Wiggle
mainTimeline.to(startSquare, {delay: shortDuration});
for (let index = 0; index < 5; index++) {
    mainTimeline.to(startSquare, {duration: shortestDuration, rotate: 5});
    mainTimeline.to(startSquare, {duration: shortestDuration, rotate: -5});
    screenSquareDelay += shortestDuration * 2;
}
mainTimeline.to(startSquare, {duration: shortestDuration, rotate: 0});
screenSquareDelay += shortestDuration;
//Smartphone
mainTimeline.to(startSquare, {duration: shorterDuration, scaleX: 6, scaleY: 10, backgroundColor: "#ffa500", transformOrigin: 'bottom'});
screenSquareDelay += shorterDuration;
//Laptop
mainTimeline.to(startSquare, {duration: shorterDuration,delay:longestDuration , scaleX: 16, scaleY: 9, backgroundColor: "#800080"});
//PC1
mainTimeline.to(startSquare, {duration: shorterDuration,delay: longestDuration , scaleX: 16, scaleY: 11, backgroundColor: "#4242c3", y: "-50%"});
//PC2
mainTimeline.to(startSquare, {duration: shorterDuration,delay: longestDuration , scaleX: 18, scaleY: 9, backgroundColor: "#3e7b3e", y: "50%"});
//End for square
mainTimeline.to(startSquare, {duration: shorterDuration ,delay: longestDuration , scaleX: 0, scaleY: 0});

//Smartphone screen
screenSquareTimeline.to(blackSquare, {duration: shorterDuration, delay: screenSquareDelay + shorterDuration, scaleX: 5.5, scaleY: 9.5, transformOrigin: 'bottom', display: "block", y: "-20%"});
//Laptop screen
screenSquareTimeline.to(blackSquare, {duration: shorterDuration, delay: longestDuration , scaleX: 15.5, scaleY: 8.5, y: "-20%"});
//PC1 screen
screenSquareTimeline.to(blackSquare, {duration: shorterDuration,delay: longestDuration , scaleX: 15.5, scaleY: 10.5, y: "-80%"});
//PC2 screen
screenSquareTimeline.to(blackSquare, {duration: shorterDuration,delay: longestDuration , scaleX: 17.75, scaleY: 8.75, y: "35%"});
//End for screen square
screenSquareTimeline.to(blackSquare, {duration: shorterDuration ,delay: longestDuration , scaleX: 0, scaleY: 0, display: "none"});