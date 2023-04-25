let shortestDuration = 0.05;
let shorterDuration = 0.1;
let shortDuration = 0.2;
let longDuration = 0.3;
let longestDuration = 0.5;
let longeeestDuration = 1;

let screenSquareDelay = longestDuration
let keyboardDelay
let standDelay

let mainTimeline = gsap.timeline({delay: longestDuration});
let screenSquareTimeline = gsap.timeline({delay: longestDuration});
let cameraSquareTimeline = gsap.timeline({delay: longestDuration});
let keyboardTimeline = gsap.timeline({delay: longestDuration});
let standTimeline = gsap.timeline({delay: longestDuration});
let startSquare = document.querySelector(".startSquare");
let screenSquare = document.querySelector(".screenSquare");
let cameraSquare = document.querySelector(".cameraSquare");
let keyboardSquare = document.querySelector(".keyboardSquare");
let standSquare = document.querySelector(".standSquare");

//#region Main square
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
keyboardDelay = screenSquareDelay;
//Laptop
mainTimeline.to(startSquare, {duration: shorterDuration,delay:longestDuration , scaleX: 16, scaleY: 9, backgroundColor: "#800080"});
keyboardDelay += longestDuration;
standDelay = keyboardDelay;
//PC1
mainTimeline.to(startSquare, {duration: shorterDuration,delay: longestDuration , scaleX: 16, scaleY: 11, backgroundColor: "#4242c3", y: "-50%"});
standDelay += longestDuration;
//PC2
mainTimeline.to(startSquare, {duration: shorterDuration,delay: longestDuration , scaleX: 18, scaleY: 9, backgroundColor: "#3e7b3e", y: "50%"});
//End for square
mainTimeline.to(startSquare, {duration: shorterDuration ,delay: longestDuration , scaleX: 0, scaleY: 0});
//#endregion

//#region Screen square
//Smartphone screen
screenSquareTimeline.to(screenSquare, {duration: shorterDuration, delay: screenSquareDelay + shorterDuration, scaleX: 5.5, scaleY: 9.25, transformOrigin: 'bottom', display: "block", y: "-30%"});
//Laptop screen
screenSquareTimeline.to(screenSquare, {duration: shorterDuration, delay: longestDuration , scaleX: 15.5, scaleY: 8.5, y: "-20%"});
//PC1 screen
screenSquareTimeline.to(screenSquare, {duration: shorterDuration,delay: longestDuration , scaleX: 15.5, scaleY: 10.5, y: "-80%"});
//PC2 screen
screenSquareTimeline.to(screenSquare, {duration: shorterDuration,delay: longestDuration , scaleX: 17.75, scaleY: 8.75, y: "35%"});
//End for screen square
screenSquareTimeline.to(screenSquare, {duration: shorterDuration ,delay: longestDuration , scaleX: 0, scaleY: 0, display: "none"});
//#endregion

//#region Camera square
//Smartphone camera
cameraSquareTimeline.to(cameraSquare, {duration: shorterDuration, delay: screenSquareDelay + shorterDuration, scaleX: 0.25, scaleY: 0.25, transformOrigin: 'bottom', display: "block", y: "-965%"});
//Laptop camera
cameraSquareTimeline.to(cameraSquare, {duration: shorterDuration, delay: longestDuration , y: "-871%"});
//PC1 camera
cameraSquareTimeline.to(cameraSquare, {duration: shorterDuration,delay: longestDuration ,scaleX: 0.20 ,scaleY: 0.20 , y: "-1130%", borderRadius: "50%"});
//ebd for camera square
cameraSquareTimeline.to(cameraSquare, {duration: shorterDuration ,delay: longestDuration , scaleX: 0, scaleY: 0, display: "none", y: "-100%"});
//#endregion

//#region Keyboard square
//Laptop keyboard
keyboardTimeline.to(keyboardSquare, {duration: shorterDuration, delay: keyboardDelay + shortDuration, scaleX: 20, scaleY: 6, transformOrigin: 'bottom', display: "block", top: "74%", borderBottom: "20px solid #800080"});
//PC1 stand
keyboardTimeline.to(keyboardSquare, {duration: shorterDuration, delay: longestDuration , scaleX: 5, scaleY: 3, top: "75%", borderBottom: "20px solid #4242c3"});
//PC2 keyboard
keyboardTimeline.to(keyboardSquare, {duration: shorterDuration,delay: longestDuration , scaleX: 22, scaleY: 5, top: "80%", borderBottom: "20px solid #3e7b3e"});
//End for keyboard square
keyboardTimeline.to(keyboardSquare, {duration: shorterDuration ,delay: longestDuration , scaleX: 0, scaleY: 0, display: "none"});
//#endregion

//#region Stand square
//PC1 stand
standTimeline.to(standSquare, {duration: shorterDuration, delay: standDelay + longDuration, scaleX: 2, scaleY: 2.70, transformOrigin: 'bottom', display: "block", top: "70%", backgroundColor:"#4242c3"});
//PC2 stand
standTimeline.to(standSquare, {duration: shorterDuration,delay: longestDuration , scaleX: 1, scaleY: 1.5, top: "65%",background : "none" , borderBottom: "20px solid #3e7b3e", borderRight: "5px solid transparent", borderLeft: "5px solid transparent"});
//End for stand square
standTimeline.to(standSquare, {duration: shorterDuration ,delay: longestDuration , scaleX: 0, scaleY: 0, display: "none"});
//#endregion