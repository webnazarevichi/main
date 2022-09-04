$( document ).ready(function() {
	
    if ($(window).width() > 2500) {
 
        $('body').css("transform","scale(1.4)");
     
    } else {
     
        $('body').css("transform","scale(1)");
     
    }

    //Dropdown Menu
    $('.dropdown').on('click', function(){
        $('.header__dropdown_menu').toggleClass('active');
    });

	//Accordion Class Toggle
    $('.faq__item_title').click(function(event) {
        $('.faq__item_title').not($(this)).removeClass('active');
        $('.faq__item_text').not($(this).next()).slideUp(300);
        $(this).toggleClass('active').next().slideToggle(300);
    });

    //STICKY MAINMENU

    $(window).scroll(function(){
      var sticky = $('.header'),
          scroll = $(window).scrollTop();

      if (scroll > 0) sticky.addClass('fixed');
      else sticky.removeClass('fixed');
    });


});


//Contact Text Animated
    const text = document.querySelector('.contact__text h4');
    text.innerHTML = text.innerText.split("").map(
        (char, i) =>
        `<span style = "transform:rotate(${i*9}deg)">${char}</span> `
    ).join("");
