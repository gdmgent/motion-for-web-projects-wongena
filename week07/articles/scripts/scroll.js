let articles = gsap.utils.toArray('article');

articles.forEach(article => {
    gsap.from(article, { scrollTrigger:{trigger: article, toggleActions:"play reset play reset"}, duration: 0.5, x: -400, opacity: 0 })
});

