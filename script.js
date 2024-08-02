var crsr = document.querySelector("#cursor")
var bluur = document.querySelector("#cursor-blur")

document.addEventListener("mousemove", function (dets) {
    crsr.style.left = dets.x + "px"
    crsr.style.top = dets.y + "px"

    bluur.style.left = dets.x - 200 + "px"
    bluur.style.top = dets.y - 200 + "px"
})

var h4 = document.querySelectorAll("#nav h4")
h4.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
        crsr.style.scale = 2
        crsr.style.border = "1px solid #fff"
        crsr.style.backgroundColor = "transparent"
    })
    elem.addEventListener("mouseleave", function () {
        crsr.style.scale = 1
        crsr.style.border = "0px solid #95C11E"
        crsr.style.backgroundColor = "#95C11E"
    })
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

gsap.from("#about-us img,#about-us-in", {
    y: 90,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: "#about-us",
        scroller: "body",
        start: "top 60%",
        end: "top 57%",
        scrub: 2
    }
})

gsap.from(".card", {
    scale: 0.2,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".card",
        scroller: "body",
        start: "top 50%",
        end: "top 78%",
        scrub: 2
    }
})

gsap.from("#colon1", {
    y: -50,
    x: -50,
    duration: 2,
    scrollTrigger: {
        trigger: "#colon1",
        scroller: "body",
        start: "top 70%",
        end: "top 65%",
        scrub: 3
    }
})

gsap.from("#colon2", {
    y: 20,
    x: 20,
    duration: 1,
    scrollTrigger: {
        trigger: "#colon2",
        scroller: "body",
        start: "top 80%",
        // end:"top 65%",
        scrub: 3
    }
})

gsap.from("#page4 h1", {
    y: 30,
    scrollTrigger: {
        trigger: "#page4 h1",
        scroller: "body",
        start: "top 75%",
        end:"top 70%",
        scrub: 3
    }
})