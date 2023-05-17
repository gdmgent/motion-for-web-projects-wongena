function woutongena(fase) {
  console.log("woutongena.js: fase = " + fase);
  let section = document.querySelector("#woutongena");

  const makeDiscoveryLenght = 0.5;

  if (!section.init) {
    section.init = true;
    console.log("woutongena.js: init");
    section.tl
      .to("#woutongena .box", {
        borderRadius: "50%",
        backgroundColor: "#4E453C",
      })
      .add("makeDiscovery")
      .to(
        "#woutongena .box",
        {
          background:
            "url(./js/images/Bow.png) no-repeat center center / contain",
          width: "10vw",
          height: "10vw",
          left: "calc(50vw - 5vw)",
          top: "65vh",
          duration: makeDiscoveryLenght,
        },
        "makeDiscovery"
      )
      .to(
        "#woutongena .tail",
        {
          scale: 1,
          opacity: 1,
          duration: makeDiscoveryLenght,
        },
        "makeDiscovery"
      )
      .to("#woutongena .engine-1", {
        scale: 1,
        opacity: 1,
        duration: makeDiscoveryLenght,
      }, "makeDiscovery")
      .to("#woutongena .engine-2", {
        scale: 1,
        opacity: 1,
        duration: makeDiscoveryLenght,
      }, "makeDiscovery")
      .to("#woutongena .ship", {
        scale: 0.75,
      })
      .to("#woutongena .ship", {
        y: "-=10vh",
        scale: 0.4,
      })
      .to("#woutongena", {
        duration: 2,
      })
      .add("end")
      .to(
        "#woutongena .ship-piece",
        {
          opacity: 0,
          duration: 0.25,
        },
        "end"
      )
      .to(
        "#woutongena .box",
        {
          borderRadius: "0%",
          backgroundColor: "white",
          left: "40vw",
          top: "calc(60vh - 10vw)",
          width: "20vw",
          height: "20vw",
          duration: 0.25,
        },
        "end"
      );
  }
}
