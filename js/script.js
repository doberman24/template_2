document.getElementById("top-menu").addEventListener("mouseover", function a_top() {
    document.getElementById("sub-menu").style.cssText = "display: block; top: 65px;";
    document.getElementById("a-top").style.cssText = "color: #000; transition: 200ms;";
});
document.getElementById("top-menu").addEventListener("mouseout", function sub_menu() {
    document.getElementById("sub-menu").style.cssText = "display: none; top: 90px;";
    document.getElementById("a-top").style.cssText = "color: rgba(0, 0, 0, 0.7); transition: 200ms;";
});
document.getElementById("sub-menu").addEventListener("mouseover", function a_top () {
    let elem_sel = document.getElementById("a-top");
    if (document.getElementById("sub-menu").style.opacity) {
        elem_sel.style.color = "black";
    }
});

document.getElementById("fb").addEventListener("mouseover", red_fb);
document.getElementById("fb").addEventListener("mouseout", fb);

document.getElementById("twitter").addEventListener("mouseover", red_twitter);
document.getElementById("twitter").addEventListener("mouseout", twitter);

document.getElementById("insta").addEventListener("mouseover", red_insta);
document.getElementById("insta").addEventListener("mouseout", insta);

document.getElementById("dribble").addEventListener("mouseover", red_dribble);
document.getElementById("dribble").addEventListener("mouseout", dribble);

document.getElementById("in").addEventListener("mouseover", red_in);
document.getElementById("in").addEventListener("mouseout", in_f);

function red_fb(event) {
    let element = document.getElementById("pic_fb");
    element.src = "img/icons/fb_color.png";
}
function fb(event) {
    let element = document.getElementById("pic_fb");
    element.src = "img/icons/fb.png";
}

function red_twitter(event) {
    let element = document.getElementById("pic_twitter");
    element.src = "img/icons/twitter_color.png";
}
function twitter(event) {
    let element = document.getElementById("pic_twitter");
    element.src = "img/icons/twitter.png";
}

function red_insta(event) {
    let element = document.getElementById("pic_insta");
    element.src = "img/icons/Insta_color.png";
}
function insta(event) {
    let element = document.getElementById("pic_insta");
    element.src = "img/icons/Insta.png";
}

function red_dribble(event) {
    let element = document.getElementById("pic_dribble");
    element.src = "img/icons/dribble_color.png";
}
function dribble(event) {
    let element = document.getElementById("pic_dribble");
    element.src = "img/icons/dribble.png";
}

function red_in(event) {
    let element = document.getElementById("pic_in");
    element.src = "img/icons/in_color.png";
}
function in_f(event) {
    let element = document.getElementById("pic_in");
    element.src = "img/icons/in.png";
}

