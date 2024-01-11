// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });

var loader = document.querySelector(".loader")
setTimeout(function () {
    loader.style.top = "-100%"
}, 4000)
var a = document.querySelector("#elem-container")
var b = document.querySelector("#fixed-img")
a.addEventListener("mouseenter", function () {
    b.style.display = "block"
})
a.addEventListener("mouseleave", function () {
    b.style.display = "none"
})

var elems = document.querySelectorAll(".elem")
elems.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
        var image = elem.getAttribute("data-img")
        b.style.backgroundImage = `url(${image})`
    })
})

var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    spaceBetween: 50,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
})


var line1 = document.querySelector(".line1")
var line2 = document.querySelector(".line2")
var line3 = document.querySelector(".line3")
var navbar = document.querySelector("nav")
var navImg = document.querySelector("nav img")
var dropMenu = document.querySelector("#drop-menu")
var menubtn = document.querySelector("#menu")
var flag = 0

menubtn.addEventListener("click", function () {
    if (flag == 0) {
        // dropMenu.style.display = "block"
        dropMenu.style.top = "0%"
        line1.style.rotate = "-45deg"
        line2.style.rotate = "90deg"
        line3.style.display = "none"
        navbar.style.backgroundColor = "white"
        navImg.style.opacity = "0"
        console.log("opration succefull")
        flag = 1
    }
    else {
        dropMenu.style.top = "-100%"
        line1.style.rotate = "0deg"
        line2.style.rotate = "0deg"
        line3.style.display = "block"
        navbar.style.backgroundColor = "inherit"
        navImg.style.opacity = "1"
        flag = 0
    }
})

var design = document.querySelector("#design")
var project = document.querySelector("#project")
var execution = document.querySelector("#execution")
var leftImage = document.querySelector(".p4-left")
var projectPara = project.getAttribute("data-projectpara")
var para2 = document.querySelector("#para2")
var para1 = document.querySelector("#para1")
var para3 = document.querySelector("#para3")



function designPara(){
design.addEventListener("click", function () {
    var image = design.getAttribute("data-designImg")
    leftImage.style.backgroundImage = `url(${image})`
    para2.style.opacity = "1"
    para1.style.opacity = "0"
    para3.style.opacity = "0"
    design.style.borderLeft = "3px solid red"

    project.style.borderLeft = "3px solid #3c3c3c"
    execution.style.borderLeft = "3px solid #3c3c3c"

})
}
designPara()

function projectTab(){
project.addEventListener("click", function () {
    var image = project.getAttribute("data-projectImg")
    para2.style.opacity = "0"
    para1.style.opacity = "1"
    para3.style.opacity = "0"
    leftImage.style.backgroundImage = `url(${image})`
    project.style.borderLeft = "3px solid red"
    design.style.borderLeft = "3px solid #3c3c3c"
    execution.style.borderLeft = "3px solid #3c3c3c"
})
}
projectTab()

function executionTab(){
execution.addEventListener("click", function () {
    var image = execution.getAttribute("data-executionImg")
    para2.style.opacity = "0"
    para1.style.opacity = "0"
    para3.style.opacity = "1"
    leftImage.style.backgroundImage = `url(${image})`
    execution.style.borderLeft = "3px solid red"
    design.style.borderLeft = "3px solid #3c3c3c"
    project.style.borderLeft = "3px solid #3c3c3c"

})
}
executionTab()
var cursor = document.querySelector(".cursor")
var myswiper = document.querySelector(".swiper")
myswiper.addEventListener("mousemove", function (dets) {
    gsap.to(cursor, {
        left: dets.clientX - 0,
        top: dets.clientY - 0,
    });
})

myswiper.addEventListener("mouseenter", function () {
    gsap.to(cursor, {
        scale: 1
    })
})

myswiper.addEventListener("mouseleave", function () {
    gsap.to(cursor, {
        scale: 0
    })
})

var eleme = document.querySelector("#eleme-video")
var elemimge = document.querySelector("#eleme-image")

elemimge.addEventListener("touchstart",function(){
    elemimge.style.display= "none"
    eleme.style.display="block"

})

elemimge.addEventListener("touchend",function(){
    elemimge.style.display= "block"
    eleme.style.display="none"

})


var centerLeft = document.querySelector(".left")
var centerRight = document.querySelector(".right")
var t1 = gsap.timeline()
t1.from(centerLeft, {
    x:100,
    opacity: 0,
    delay:4,
    duration: 1
})
t1.from(centerRight, {
    x: -100,
    opacity: 0,
    delay: 4,
    duration: 1.5
})



