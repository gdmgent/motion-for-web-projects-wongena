function woutongena(fase) {
  console.log("woutongena.js: fase = " + fase);
  let section = document.querySelector("#woutongena");

  if (!section.init) {
    section.init = true;
    console.log("woutongena.js: init");
    section.tl
      .to("#woutongena .box", {
        borderRadius: "50%"
      })
      .add("makeDiscovery")
      .to("#woutongena .box", {
        background: "var(--discovery-color)",
        width: "5vw",
        height: "5vw",
        left: "calc(50vw - 2.5vw)",
        top: "60vh",
        duration: 0.5,
      }, "makeDiscovery")
      .to("#woutongena .outer-rim", {
        borderRadius: "50%",
        border: "3vw solid var(--discovery-color)",
        width: "12vw",
        height: "12vw",
        left: "calc(50vw - 6vw)",
        top: "calc(60vh - 6vw + 2.5vw)",
        duration: 0.5,
      }, "makeDiscovery")
      .to("#woutongena .tail", {
        opacity: 1,
        width: "15vw",
        height: "15vw",
        duration: 0.5,
      }, "makeDiscovery")
      .to("#woutongena .engine-1", {
        borderRadius: "20%",
        width: "1vw",
        height: "20vw",
        backgroundColor: "var(--discovery-color)",
        left: "calc(50vw - 7vw)",
        top: "calc(60vh - 28vw)",
        duration: 0.5,
      }, "makeDiscovery")
      .to("#woutongena .engine-2", {
        borderRadius: "20%",
        width: "1vw",
        height: "20vw",
        backgroundColor: "var(--discovery-color)",
        left: "calc(50vw + 7vw)",
        top: "calc(60vh - 28vw)",
        duration: 0.5,
      }, "makeDiscovery")
      .to("#woutongena .outer-rim", {
        duration: 1
      })
      .add("end")
      .to("#woutongena .ship-piece", {
        opacity: 0,
        duration: 0.5,
      }, "end")
      .to("#woutongena .box", {
        borderRadius: "0%",
        backgroundColor: "white",
        left: "40vw",
        top: "calc(60vh - 10vw)",
        width: "20vw",
        height: "20vw",
        duration: 1,
      }, "end");
  }
}
