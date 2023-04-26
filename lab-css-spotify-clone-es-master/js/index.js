let principalUbicacion = window.pageYOffset;
window.onscroll = function() {
    let despUbicacion = window.pageYOffset;
    if(principalUbicacion >= despUbicacion){
    document.getElementById ('fixed-nav').style.top = '0';
    }
    else{
        document.getElementById ('fixed-nav').style.top = '-100px';
    }
    principalUbicacion = despUbicacion;
}
