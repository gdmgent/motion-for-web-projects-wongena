gsap.registerPlugin(ScrollTrigger);

const sections = document.querySelectorAll("section");

sections.forEach((section) => {
  const text = section.querySelector(".mainText");

  gsap.from(text, {
    x: "100%",
    duration: 1,
    opacity: 0,
    scrollTrigger: {
      scroller: "main",
      trigger: section,
      start: "top center",
      toggleActions:"play reverse play reverse"
    },
  });
});