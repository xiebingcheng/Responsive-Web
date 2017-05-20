$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        items:1,  //设置轮播一屏幕显示的页面数
        loop:true, //设置到最后还回回到第一个,就是循环轮播
        autoplay:true, //设置自动播放
        autoplayTimeout:1000, //轮播时间
        autoplayHoverPause:true //鼠标悬停
    });
});