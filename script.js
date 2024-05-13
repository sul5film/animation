
$(function(){

    $('.about_txt').click(function(){
    $('.about').css({display:'block'});
    $('.edu').hide();
    $('.works').hide();
    $('.career').hide();
    $('.active').hide();
    $('.skills').hide();
    })

    $('.edu_txt').click(function(){
    $('.edu').show();
    $('.career').hide();
    $('.active').hide();
    $('.skills').hide();
     })

    $('.career_txt').click(function(){
    $('.career').show();
    $('.active').hide();
    $('.edu').hide();
    $('.skills').hide();
    })

    $('.active_txt').click(function(){
    $('.active').show();
    $('.career').hide();
    $('.edu').hide();
    $('.skills').hide();
    })

    $('.skills_txt').click(function(){
    $('.skills').show();
    $('.career').hide();
    $('.edu').hide();
    $('.active').hide();
    })

    $('.name').click(function(){
    $('.about').hide();
    $('.works').hide();
    })

    $('.works_txt').click(function(){
    $('.works').css({display:'block'})
    $('.about').css({display:'none'})
    $('.film_works').hide();
    $('.web_works').hide();
    $('.work1').hide();
    $('.work2').hide();
    $('.work3').hide();
    $('.work4').hide();
    $('.work5').hide();
    $('.work6').hide();
    $('.work7').hide();
    $('.work8').hide();
    })

    $('.film_txt').click(function(){
    $('.film_works').show();
    $('.web_works').hide();
    $('.work1').hide();
    $('.work2').hide();
    $('.work3').hide();
    $('.work4').hide();
    $('.work5').hide();
    $('.work6').hide();
    $('.work7').hide();
    $('.work8').hide();  
     })

    $('.work1_click').click(function(){
        $('.work1').show();
        $('.work2').hide();
        $('.work3').hide();
        $('.work4').hide();
        $('.work5').hide();
        $('.work6').hide();
        $('.work7').hide();
        $('.work8').hide();  
    })

    $('.work2_click').click(function(){
        $('.work2').show();
        $('.work1').hide();
        $('.work3').hide();
        $('.work4').hide();
        $('.work5').hide();
        $('.work6').hide();
        $('.work7').hide();
        $('.work8').hide();  
    })

    $('.work3_click').click(function(){
        $('.work3').show();
        $('.work1').hide();
        $('.work2').hide();
        $('.work4').hide();
        $('.work5').hide();
        $('.work6').hide();
        $('.work7').hide();
        $('.work8').hide();  
    })
    
    $('.work4_click').click(function(){
        $('.work4').show();
        $('.work1').hide();
        $('.work2').hide();
        $('.work3').hide();
        $('.work5').hide();
        $('.work6').hide();
        $('.work7').hide();
        $('.work8').hide();  
    })
    
    $('.work5_click').click(function(){
        $('.work5').show();
        $('.work1').hide();
        $('.work2').hide();
        $('.work4').hide();
        $('.work3').hide();
        $('.work6').hide();
        $('.work7').hide();
        $('.work8').hide();  
    })
    
    $('.work6_click').click(function(){
        $('.work6').show();
        $('.work1').hide();
        $('.work2').hide();
        $('.work4').hide();
        $('.work5').hide();
        $('.work3').hide();
        $('.work7').hide();
        $('.work8').hide();  
    })

    $('.work7_click').click(function(){
        $('.work7').show();
        $('.work1').hide();
        $('.work2').hide();
        $('.work4').hide();
        $('.work5').hide();
        $('.work3').hide();
        $('.work6').hide();
        $('.work8').hide();  
    })

    $('.work8_click').click(function(){
        $('.work8').show();
        $('.work1').hide();
        $('.work2').hide();
        $('.work4').hide();
        $('.work5').hide();
        $('.work3').hide();
        $('.work7').hide();
        $('.work6').hide();  
    })

    $('.web_txt').click(function(){
        $('.web_works').show();
        $('.film_works').hide();
    })
})