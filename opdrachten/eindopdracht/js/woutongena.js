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
        y: "+=10vh",
        x: "-=10vw",
        rotation: 60,
        duration: 0.5,
      })
      .to("#woutongena .ship", {
        scale: 0.3,
        x: "-=25vw",
        y: "+=5vh",
        rotation: 60,
        duration: 0.75,
      })
      .to("#woutongena .ship", {
        y: "+=5vh",
        x: "-=5vw",
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
        background: "url(./js/images/red-stars-repeat.png) no-repeat center center / cover",
        duration: 0,
      }, "exitPortal1")
      .to("#woutongena .iss-charon", {
        opacity: 1,
        duration: 0,
      }, "exitPortal1")

      .from("#woutongena .terran-empire .title-w-box", {
        x: "+=50vw",
        opacity: 0,
      })

      .to("#woutongena .ship", {
        y: "+=10vh",
        x: "+=10vw",
        rotation: -60,
        duration: 0.5,
      })
      .to("#woutongena .ship", {
        x: "+=60vw",
        y: "+=15vh",
        duration: 2,
      })
      .to("#woutongena .ship", {
        x: "+=5vw",
        y: "+=10vh",
        rotation: 0,
        duration: 0.5,
      })

      .add("enterPortal2")
      .to("#woutongena .ship", {
        rotateY: 90,
        scale: 0.2,
      } , "enterPortal2")
      .to("#woutongena .ship", {
        filter: "blur(20px)",
        filter: "drop-shadow(0px 0px 30px red) invert(100%)",
        duration: 0.25,
      } , "enterPortal2")
      .to("#woutongena .particle", {
        opacity: 1,
        duration: 0.25,
        filter: "invert(100%)",
      } , "enterPortal2")
      .to("#woutongena .box", {
        rotateZ: 360,
      } , "enterPortal2")

      .add("exitPortal2")
      .to("#woutongena .ship", {
        rotateY: 0,
        scale: 0.3,
        filter: "blur(0px)",
      } , "exitPortal2")
      .to("#woutongena .box", {
        rotateZ: 0,
      } , "exitPortal2")
      .to("#woutongena .particle", {
        filter: "invert(0%)",
        opacity: 0,
        duration: 0.25,
      } , "exitPortal2")
      .to("#woutongena .galactic-barrier", {
        opacity: 1,
        backgroundSize: "100% 100%",
        duration: 0,
      }, "exitPortal2")
      .to("#woutongena .spaceBG", {
        background: "url(./js/images/stars.jpg) no-repeat center center / cover",
        duration: 0,
      }, "exitPortal2")

      .add("returnToCenter")
      .to("#woutongena .ship", {
        scale: 1,
        x: "0vw",
        y: "0vh",
        duration: 2,
      }, "returnToCenter")
      .to("#woutongena .galactic-barrier", {
        backgroundSize: "105% 105%",
        duration: 2,
      }, "returnToCenter")
      .to("#woutongena .galactic-barrier .title-w-box", {
        opacity: 1,
        duration: 2,
      }, "returnToCenter")

      .to("#woutongena", {
        duration: 0.5,
      })

      .to("#woutongena .ship", {
        scale: 0.3,
        y: "-=5vh",
        x: "-=5vw",
        rotation: -90,
        rotateX: 40,
        duration: 0.5,
      })
      .to("#woutongena .ship", {
        scale: 0,
        y: "-=1vh",
        x: "+=5vw",
        rotation: -180,
        duration: 0.5,
      })

      .add("exitGalaxy")
      .to("#woutongena .galactic-barrier", {
        opacity: 0,
        duration: 0,
      }, "exitGalaxy")
      .to("#woutongena .spaceBG", {
        background: "url(./js/images/empty-space.png) no-repeat center center / cover",
        duration: 0,
      }, "exitGalaxy")

      .to("#woutongena .ship", {
        y: "0vh",
        x: "0vw",
        rotation: 0,
        rotateX: 0,
        duration: 0,
      })

      .to("#woutongena .ship", {
        scale: 0.5,
        y: "0vh",
        x: "0vw",
        rotation: 0,
        rotateX: 0,
        duration: 1,
      })

      .to("#woutongena .C-10-homeplanet", {
        opacity: 1,
        duration: 0,
      })
      .add("movePlanet")
      .to("#woutongena .C-10-homeplanet", {
        y: "-=160vh",
        duration: 3,
      }, "movePlanet")
      .to("#woutongena .C-10-homeplanet .title-w-box", {
        opacity: 1,
      }, "movePlanet")
        

      .to("#woutongena", {
        duration: 2,
      })

      .to("#woutongena .spaceBG", {
        opacity: 0,
        duration: 0.5,
      })

      .add("end")
      .to(
        "#woutongena .ship-piece",
        {
          opacity: 0,
          duration: 0.1
        },
        "end"
      )
      .to("#woutongena .ship", {
        scale: 1,
        y: "0vh",
        x: "0vw",
        rotation: 0,
        rotateX: 0,
        duration: 0.5,
      }, "end")
      .to(
        "#woutongena .box",
        {
          borderRadius: "0%",
          backgroundColor: "white",
          left: "40vw",
          top: "calc(60vh - 15vw)",
          width: "20vw",
          height: "20vw",
          duration: 0.25,
          opacity: 1,
        },
        "end"
      )
      .to("#woutongena .box", {
        background: "none",
        backgroundColor: "white",
        duration: 0,
      }, "end")
  }
}
