$(function() {
    $(window).scroll(function() {
        if ($(window).scrollTop() > $('nav').outerHeight()) {
            $('nav').addClass('fixed');
        } else {
            $('nav').removeClass('fixed');
        }
    });

    $('.hamburger').click(function() {
        $('.colapse').slideToggle('slow', function() {
        });
    });

    $(window).resize(function() {
        if ($(window).width() >930) {
            $('.colapse').show();
        };
    });

    $('li a').click(function(){
        if ($(window).width() < 930) {
            $('.colapse').slideToggle('slow');
        };

        $('li a').each(function () {
            $(this).removeClass('active');
        });

        $(this).addClass('active');

        if (this.hash !== "") {
            // event.preventDefault();
      
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
        }
    });

    $(window).scroll(function() {
        var scrollPosition = $(window).scrollTop();
        $('li a').each(function() {
            var currentLink = $(this);
            var hrefLink = $(currentLink.attr('href'));
            if (hrefLink.position().top <= scrollPosition && hrefLink.position().top + hrefLink.height() > scrollPosition) {
                $('li a').removeClass('active');
               
                // $('li a').each(function () {
                //     $(this).removeClass('active');
                // });
                currentLink.addClass('active');
            } else {
                currentLink.removeClass('active');
            }
        });

        
        		// Show/hide menu on scroll
		//if (scrollDistance >= 850) {
		//		$('nav').fadeIn("fast");
		//} else {
		//		$('nav').fadeOut("fast");
		//}
	
        // Assign active class to nav links while scolling
        

        // $('nav ul').each(function(i) {
        //     if ($(this).position().top (function(scrollDistance) {
        //         $('li a').removeClass('active');
		// 		$('li a').eq(i).addClass('active');
        //     }))
        //     return
        // })
    });
})

// $(function() {
//     $('.hamburger').click(function() {
//         $('.colapse').slideToggle('slow', function() {
//         });
//     });

//     $('a').click(function(){
//         if($(window).width() < 930) {
//             $('.colapse').slideToggle('slow');
//         };

//         $('html').animate({
//             scrollTop: $( $(this).attr('href') ).offset().top
//         }, 500);
//         return false;  
//     });

//     $(window).resize(function() {
//         if($(window).width() >930) {
//             $('.colapse').show();
//         };
//     });

// })