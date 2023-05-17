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
        y: "-=30vh",
        scale: 0.4,
      })
      .to("#woutongena", {
        duration: 2,
      })
      .to("#woutongena .ship", {
        y: "+=5vh",
        x: "-=5vw",
        rotation: 60,
        duration: 0.5,
      })
      .to("#woutongena .ship", {
        scale: 0.3,
        x: "-=30vw",
        y: "+=5vh",
        rotation: 60,
        duration: 1,
      })
      .to("#woutongena .ship", {
        y: "+=5vh",
        rotation: 0,
        duration: 0.5,
      })

      .add("enterPortal1")
      .to("#woutongena .ship", {
        rotateY: 90,
        scale: 0.2,
      } , "enterPortal1")
      .to("#woutongena .ship", {
        filter: "blur(20px)",
        filter: "drop-shadow(0px 0px 30px red) invert(100%)",
        duration: 0.25,
      } , "enterPortal1")
      .to("#woutongena .particle", {
        opacity: 1,
        duration: 0.25,
      } , "enterPortal1")
      .to("#woutongena .box", {
        rotateZ: 360,
      } , "enterPortal1")

      .add("exitPortal1")
      .to("#woutongena .ship", {
        rotateY: 0,
        scale: 0.3,
        filter: "blur(0px)",
      } , "exitPortal1")
      .to("#woutongena .box", {
        rotateZ: 0,
      } , "exitPortal1")
      .to("#woutongena .particle", {
        filter: "invert(0%)",
        opacity: 0,
        duration: 0.25,
      } , "exitPortal1")
      .to("#woutongena .spaceBG", {
        background: "url(./js/images/purple-stars.jpg) no-repeat center center / cover",
        duration: 0,
      }, "exitPortal1")

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
          opacity: 1,
        },
        "end"
      );
  }
}
