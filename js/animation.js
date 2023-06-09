document.getElementById("nav_menu").style.cssText = "opacity: 100%; transition: 1s;";

document.getElementById("landscape_face").style.cssText = "opacity: 100%; transition: 1s;";

document.getElementById("slide_but").style.cssText = "opacity: 100%; right: 0; transition: 1s;";

for (let i = 0; i < document.getElementsByClassName("start").length; i++) {
    document.getElementsByClassName("start")[i].style.cssText = "opacity: 100%; top: 0; transition: 1s;";
}

document.getElementById("start_1").style.cssText = "opacity: 100%; top: 0; transition: 1s; transition-delay: 0.2s;";

document.getElementById("start_2").style.cssText = "opacity: 100%; top: 0; transition: 1s; transition-delay: 0.4s;";

let tmp = 0;
let delay = 5000;
function slide_loop() {
    if (tmp > 1377) {
        tmp = 0;
    }
    let slide = document.getElementsByClassName("face_head");
    for (let i = 0; i < slide.length; i++) {
        slide[i].style.right = tmp + "px";
        if (tmp != 0) {
            slide[i].style.transition = "1s";
        } else {
            slide[i].style.transition = "none";
        }
    }
    tmp += 459;
    if (tmp == 0 || tmp == 1836) {
        delay = 2500;
        setTimeout(slide_loop, delay);
    } else {
        delay = 5000;
    }
}
setInterval(slide_loop, delay);

elem = document.getElementsByClassName("hidden");
for (let i = 0; i < elem.length; i++) {
    elem[i].style.opacity = "0";
}

window.addEventListener("scroll", visible);

function visible() {
    for (let i = 0; i < elem.length; i++) {
        if (scrollY > 350) {
            elem[i].style.cssText = "opacity: 100%; transition: 1s;";
        }
    }
}