    // main.js

    //Set collapsed state on mobile resolutions

    //var w = window,
    //d = document,
    //e = d.documentElement,
    //g = d.getElementsByTagName('body')[0],
    //x = w.innerWidth || e.clientWidth || g.clientWidth,
    //y = w.innerHeight|| e.clientHeight|| g.clientHeight;

    var toggleBtn = document.querySelector('.toggle-nav');
    var toggleNav = document.querySelector('.sub-nav-mobile');

    toggleBtn.onclick = function(){
        toggleNav.classList.toggle("open");
    }
