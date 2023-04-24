gsap.registerPlugin(ScrollTrigger);

let main = document.querySelector("main");
const sections = document.querySelectorAll("section");

sections.forEach((section) => {
  const text = section.querySelector(".mainText");

  gsap.from(text, {
    x: "100%",
    duration: 1,
    opacity: 0,
    scrollTrigger: {
      scroller: main,
      trigger: section,
      start: "top center",
      toggleActions:"play reset play reset"
    },
    ease: "back.out(0.7)"
    });
});

gsap.from(".links", {
  x: "-100%",
  duration: 0.7,
  opacity: 0,
  scrollTrigger: {
    scroller: main,
    trigger: ".links",
    start: "top center",
    toggleActions:"play none play reset"
  },
  ease: "ease"
});

gsap.from(".loadingBar", {
  height: 0,
  duration: 0.7,
  opacity: 0,
  scrollTrigger: {
    scroller: main,
    trigger: ".links",
    start: "top center",
    toggleActions:"play none play reset"
  },
  ease: "ease"
});

main.addEventListener('scroll', function() {
  const vhInPx = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
  var scrollPosition = main.scrollY;
  var progressBar = document.querySelector('.loadingBarProgress');
  var scrollPosition = (main.scrollTop + vhInPx) / main.scrollHeight;
  
  progressBar.style.height = scrollPosition * 100 + '%';
});