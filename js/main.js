
$(window).load( function() {	
    
        //PRELOADER
    var loader = $(".loader");
    var wHeight = $(window).height();
    var wWidth = $(window).width();
    var o = 0;

    loader.css({
        top: wHeight / 2 - 2.5,
        left: wWidth / 2 - 200
    })

    do {
        loader.animate({
            width: o
        }, 10)
        o += 3;
    } while (o <= 400)
    if (o === 402) {
        loader.animate({
            left: 0,
            width: '100%'
        })
        loader.animate({
            top: '0',
            height: '100vh'
        })
    }

    setTimeout(function() {
        $(".loader-wrapper").fadeOut('fast');
        (loader).fadeOut('fast');
    }, 3500);

    
    // WOW JS
    new WOW({ mobile: false }).init();
    

    
           // PORTFOLIO ISOTOPE
        if ($('.isotope_items').length) {

             var $container = $('.isotope_items');
             $container.isotope();

            $('.portfolio_filter ul li').on("click", function(){
                $(".portfolio_filter ul li").removeClass("select-cat");
                $(this).addClass("select-cat");				 
                var selector = $(this).attr('data-filter');
                $(".isotope_items").isotope({
                    filter: selector,
                    animationOptions: {
                        duration: 750,
                        easing: 'linear',
                        queue: false,
                    }
            });
                return false;
            });  
        }
    

}); // window load end 

$(document).ready( function() {

    $("#con_submit").on("click",function(){

        var nb = 0;
        var require = $(".contact-form .require");
        var message = $(".message");
        message.addClass("alert");

        require.each(function(){
            if($.trim($(this).val())==""){
                $(this).addClass("error");
                nb++;
            }
            else{
                $(this).removeClass("error");
            }
        });

        if(nb==0){
            var email = $("#con_email");
            var content = $("#con_message");
            var nom = $("#con_name");

            var serverURI = 'https://e-cine.xyz/laviesurmars_backend/API/pierre/index.php';

            const sendmail = fetch(serverURI,
                {
                    method: 'POST',
                    body: JSON.stringify({
                    data: {"email": $.trim(email.val()), "content": $.trim(content.val()), "nom": $.trim(nom.val())}
                })
            })
            .then(response => response.json())
            .then(res => {
                var data = res.data;
                if(!data.error) {
                    if(data.return == "Le format de votre email est incorrect"){
                        email.addClass("error");
                        message.addClass("alert-danger");
                        message.removeClass("alert-warning");
                        message.removeClass("alert-success");
                    }
                    else{
                        email.removeClass("error");
                        message.removeClass("alert-danger");
                        message.removeClass("alert-warning");
                        message.addClass("alert-success");
                        require.val("");
                    }
                    message.html(data.return);
                    
                }
                else{
                    message.addClass("alert-warning");
                    message.removeClass("alert-danger");
                    message.removeClass("alert-success");
                    message.html("Une erreur est survenue, veuillez réessayer plus tard");
                }
            })
            .catch(error => {
                console.log(error)
            })
        }
        else{
            message.addClass("alert-danger");
            message.removeClass("alert-warning");
            message.removeClass("alert-success");
            message.html("Veuillez remplir tous les champs");
        }
        
    });

    
    

    // HOME PAGE HEIGHT
     function homeh() {
        var hometext = $('.home, .portfolio-main')

        hometext.css({
            "height": $(window).height() + "px"
        });
    }
    homeh();
    $(window).resize(homeh);
    
   // HOME TYPED JS
    if ($('.element').length) {
        $('.element').each(function () {
            $(this).typed({
                strings: [$(this).data('text1'), $(this).data('text2')],
                loop: $(this).data('loop') ? $(this).data('loop') : false ,
                backDelay: $(this).data('backdelay') ? $(this).data('backdelay') : 2000 ,                
                typeSpeed: 10,
            });
        });
    }
    
    // PORTFOLIO PERSPECTIVE
    $('.js-tilt').tilt();
    
     // RESPONSIVE MENU
    $('.responsive').on('click', function (e) {
            $('nav').slideToggle();
        });


    
    // MAGNIFIC POPUP FOR PORTFOLIO PAGE
    $('.link').magnificPopup({
        type:'image',
        gallery:{enabled:true},
        zoom:{enabled: true, duration: 300}
    });

    // LIGHTBOX VIDEO
    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
	});
    
        //NAVBAR SHOW - HIDE
    $(window).scroll(function() {				
    var scroll = $(window).scrollTop();
    var homeheight = $(".home").height() -86;			

    if (scroll > homeheight ) {												
        $("header").slideDown(100);
        } else {
        $("header").slideUp(100);
        }
     }); 
    
      //SMOOTH SCROLL
    $(document).on("scroll", onScroll);
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $('a').each(function () {
            $(this).removeClass('active');
             if ($(window).width() < 768) {
                 $('nav').slideUp();
             }
        });
            
        $(this).addClass('active');
      
        var target = this.hash,
        menu = target;
        target = $(target);
        $('html, body').stop().animate({
            'scrollTop': target.offset().top
            
        }, 500, 'swing', function () {
            window.location.hash = target.selector;
            $(document).on("scroll", onScroll);
        });
    });
    
        
        function onScroll(event){
          if ($('#home').length) {     
        var scrollPos = $(document).scrollTop();
        $('nav ul li a.link').each(function () {
            var currLink = $(this);
            var refElement = $(currLink.attr("href"));
            if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                $('nav ul li a').removeClass("active");
                currLink.addClass("active");
            }
        });
       }              
    }
    
    
    // DOWN ICON EFFECT
    $('.down-icon').mouseleave(function(e){
             TweenMax.to(this, 0.3, {scale: 1});
             TweenMax.to('.icon-circle, .icon', 0.3,{scale:1, x: 0, y: 0});              
        });
        
        $('.down-icon').mouseenter(function(e){
             TweenMax.to(this, 0.3, {transformOrigin: '0 0', scale: 1});
             TweenMax.to('.icon-circle', 0.3,{scale: 1.2});
        });
        
        $('.down-icon').mousemove(function(e){   
          callParallax(e);
        });
        
        function callParallax(e){
          parallaxIt(e, '.icon-circle', 60);
          parallaxIt(e, '.icon', 40);
        }
        
        function parallaxIt(e, target, movement){
          var $this = $('.down-icon');
          var boundingRect = $this[0].getBoundingClientRect();
          var relX = e.pageX - boundingRect.left;
          var relY = e.pageY - boundingRect.top;
          var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
          TweenMax.to(target, 0.3, {
            x: (relX - boundingRect.width/2) / boundingRect.width * movement,
            y: (relY - boundingRect.height/2 - scrollTop) / boundingRect.width * movement,
            ease: Power2.easeOut
          });
        }
    
    
 
}); // document read end 


