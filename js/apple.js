$(function(){
    $('.header .header-inner .nav .shousuo').on('click',function(e){
          e.preventDefault();
          $('.header .header-inner .nav li').not('.logo').addClass('xiaoshi');
          $('.zuo-you').addClass('quxiao');
          $('.header .header-inner .ssk').addClass('huilai');
          $('.text').addClass('hui');
          $('body').addClass('dady');
          $('.changlian').toggleClass('show');
          $('.zuo').addClass('zuo1');
        $('.you').addClass('yuo1');
        // $('.header').addClass("beijing")
    })
    $('.zuo-you').on('click',function(e){
        e.preventDefault();
        $('body').removeClass('dady');
        $('.header .header-inner .nav li').not('.logo').removeClass('xiaoshi');
        $('.zuo-you').removeClass('quxiao');
        $('.header .header-inner .ssk').removeClass('huilai');
        // $('.header .header-inner .ssk').css('opacity',0);
        // $('.header .header-inner .ssk').removeClass('huilai');
        $('.zuo').removeClass('zuo1')
        $('.you').removeClass('yuo1');
        $('.text').removeClass('hui');
        $('.changlian').removeClass('show');
    })

    $('.xian').on('click',function(e){
        e.preventDefault();
        $('.xian .shang').toggleClass('xiang');
        $('.xian .xia').toggleClass('jiao');
        $('.shu').toggleClass('gong');
        $('.chedao').toggleClass('diaoxia');
        $('.header').toggleClass('hei');
        $('body').toggleClass('dady');
    })

    //=================================================banner
    var slides=$('.banner-img .tu');
    var dots=$('.banner-dot .dot');
    var move=true;
    moveTo=function(el,dir){
        if(dir=='right'){
            if(move){
                move=false;
                $('.dot').removeClass('active').eq(el.index()).addClass('active');
                slides.filter('.active')
                    .removeClass('active')
                    .addClass('leave')
                    .delay(1000)
                    .queue(function () {
                        $(this).removeClass('leave').dequeue()
                        move=true;
                    });
                $(el).addClass('right');
                $(el).get(0).offsetWidth;
                $(el).removeClass('right')
                    .addClass('active');
            }}else if(dir=='left'){
            if(move){
                move=false;
                $('.dot').removeClass('active').eq(el.index()).addClass('active');
                slides.filter('.active')
                    .removeClass('active')
                    .addClass('right')
                    .delay(1000)
                    .queue(function () {
                        $(this).removeClass('right').dequeue()
                        move=true;
                    });
                $(el).addClass('enter');
                $(el).get(0).offsetWidth;
                $(el).removeClass('enter')
                    .addClass('active')
            }
        }

    }
    moveRight=function(){
        var c=slides.filter('.active');
        el=c.next().length?c.next():slides.eq(0);
        moveTo(el,'right')
    };
    moveLeft=function () {
        var c=slides.filter('.active');
        el=c.prev().length?c.prev():slides.eq(3);
        moveTo(el,'left')
    };
    $('.dot').on('click',function () {
        dots.removeClass('active');
        $(this).addClass('active');
        var c=slides.index(slides.filter('.active'));
        var n=$(this).index();
        if(c===n){return;}
        if(c>n){
            moveTo(slides.eq(n),"left")
        }else{
            moveTo(slides.eq(n),"right")
        }
    })
    var t=setInterval(moveRight,2000)
    $('.banner-box').hover(function () {
        clearInterval(t)
    },function () {
        t=setInterval(moveRight,2000)
    })

    $('.left-btn').on('click',function () {
        moveLeft();
    })
    $('.right-btn').on('click',function(){
        moveRight();
    })



  



//============================底部

$('.cedao ul').on('click',function(){
        $(this).find('li').slideToggle();
       $(this).find('.shi').toggleClass('cha');
    })

})