$(function() {
    var url = location.href
      
    $('#content').hide();
  
    $('.mssage').css({opacity: 0});
                  
    if (url == "https://pitapat219.tistory.com/"){
          
          
  
      $(window).on('load',function(){
              
      $('.loader').addClass('loading');
  
      // HTMLが読み込まれたら1.2秒後にdongdongisland実行
      setTimeout(function(){
        $('.mssage')
        .each(function(i){
            $(this).delay(300 * i).animate({opacity:1}, 100);
        });
      }, 1500);
              
        setTimeout(function(){
          $('.loader').addClass('slide_up');
          $('#content').fadeIn();
        }, 2800);

      });
          
    } else {
        $('.loader').hide();
        $('#content').show();
    }
  
      // URLに/entry"が含まれていたら実行
      if(document.URL.match("/entry")) {
        $('.loader').hide();
        $('#content').show();
              $('.music').hide();
              $('.main-wrap').addClass('bg-change');
              $('.paging').addClass('padding');
      }  
  
  });



// $(function() {
//   var url = location.href
    
//   $('#content').hide();

//   $('.mssage').css({opacity: 0});
    
                
//   if (url == "https://pitapat219.tistory.com/"){
          
//     $('#content').hide();
//     $('.loader').addClass('loading');

//     // HTMLが読み込まれたら1.2秒後にdongdongisland実行
//     setTimeout(function(){
//       $('.mssage')
//       .each(function(i){
//           $(this).delay(300 * i).animate({opacity:1}, 100);
//       });
//     }, 5000);
            
//       setTimeout(function(){
//         $('.loader').addClass('slide_up');
//         $('#content').fadeIn();
//       }, 6000);
        
//   } else {
//       $('.loader').hide();
//       $('#content').show();
//   }

//     // URLに/entry"が含まれていたら実行
//     if(document.URL.match("/entry")) {
//       $('.loader').hide();
//       $('#content').show();
//             $('.music').hide();
//             $('.main-wrap').addClass('bg-change');
//             $('.paging').addClass('padding');
//     }  

// });


      
$(function () {
  $('.ham').on('click', function () {
    $('nav, .nav-mask, .ham span').toggleClass('open');
    $('.category_list li, .notice').css({opacity: 0});
    $('.category_list li, .notice')
        .each(function(i){
            $(this).delay(300 * i).animate({opacity:1}, 300);
        });
  })
})


var bar = new ProgressBar.Line(timeBar, {
  strokeWidth: 4,
  easing: 'linear',
  duration: 139000,
  color: '#6F5353',
  trailColor: '#6F5353',
  trailWidth: 1,
  svgStyle: {width: '100%', height: '100%'}
});

bar.animate(1.0); 