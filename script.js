var crsr = document.querySelector("#cursor")
var bluur = document.querySelector("#cursor-blur")

document.addEventListener("mousemove", function (dets) {
    crsr.style.left = dets.x + "px"
    crsr.style.top = dets.y + "px"

    bluur.style.left = dets.x - 200 + "px"
    bluur.style.top = dets.y - 200 + "px"
})

gsap.to("#nav", {
    backgroundColor: "#000",
    height: "128px",
    duration: 1,
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",

        start: "top -10%",
        end: "top -11%",
        scrub: 1
    }
})


gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        start: "top -30%",
        end: "top -80%",
        scrub: 2
    }
})