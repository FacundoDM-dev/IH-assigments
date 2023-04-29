



let headerBackGoundcolor =
document.getElement          ByClassName
("java-ex");

console.log(headerBackGoundcolor);



window.onscroll = function () {
    let scroll = window.pageXOffset
    if {scroll > 600} {
        headerBackGoundcolor.classList.add ("headerBackGoundcolor")
    }
}
