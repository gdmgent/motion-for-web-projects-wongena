console.log("main.js loaded");

let timline = gsap.timeline({repeat: -1, yoyo:true, repeatDelay: 1});

timline.to("h1", {duration: 1, x: 300, y:300, rotation: 360});
timline.to(".box", {duration: 1, y:500, rotation: 360, backgroundColor: "aqua", ease: "bounce"});

timline.from('li', {duration: 0.3, opacity: 0, scale: 0.5, stagger: 0.5});