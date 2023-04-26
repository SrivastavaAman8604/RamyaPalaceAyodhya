$(window).scroll(function(){
    var sticky = $('.header'),
        scroll = $(window).scrollTop();
  
    if (scroll >= 100) sticky.addClass('animated fadeInDown fixed');
    else sticky.removeClass('animated fadeInDown fixed');
  });

  $(document).ready(function() {   
    
  /* contact us enquiry */
    $(document).on('click', '.contact-us-submit', function(){
        var name = $.trim($("#name").val());
        var email = $.trim($("#email").val());
        var phone = $.trim($("#phone").val());
        var msg = $.trim($("#message").val());
        
        //$("#loader-gif").show();
        var contactform ='contactform';
        var valid = true;
        
            if(name == ''){
                valid = false;
                $('#name').addClass('validate-form-input-field');   
            }else{
                $('#name').removeClass('validate-form-input-field');  
            } 

            if(IsEmail(email)==false)
            {
                valid = false;
                $('#email').addClass('validate-form-input-field'); 
            }
            else
            {
                $('#email').removeClass('validate-form-input-field'); 
            } 

            if(phone == '')
            {
                valid = false;
                $('#phone').addClass('validate-form-input-field'); 
            }
            else
            {
            $('#phone').removeClass('validate-form-input-field'); 
            } 

            if(msg == '')
            {
                valid = false;
                $('#message').addClass('validate-form-input-field'); 
            }
            else
            {
            $('#message').removeClass('validate-form-input-field'); 
            } 
        return valid;
    });
    function IsEmail(email)
    {
        var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if(!regex.test(email)){
           return false;
        }else{
           return true;
        }
    }
});

$(document).ready(function() {   
    
    /* contact us enquiry */
      $(document).on('click', '.book-now-submit', function(){
          var name = $.trim($("#name-book").val());
          var email = $.trim($("#email-book").val());
          var phone = $.trim($("#phone-book").val());
          var person = $.trim($("#person-book").val());
          
          //$("#loader-gif").show();
          var contactform ='contactform';
          var valid = true;
          
              if(name == ''){
                  valid = false;
                  $('#name-book').addClass('validate-form-input-field');   
              }else{
                  $('#name-book').removeClass('validate-form-input-field');  
              } 
  
              if(IsEmail(email)==false)
              {
                  valid = false;
                  $('#email-book').addClass('validate-form-input-field'); 
              }
              else
              {
                  $('#email-book').removeClass('validate-form-input-field'); 
              } 
  
              if(phone == '')
              {
                  valid = false;
                  $('#phone-book').addClass('validate-form-input-field'); 
              }
              else
              {
              $('#phone-book').removeClass('validate-form-input-field'); 
              } 
  
              if(person == '')
              {
                  valid = false;
                  $('#person-book').addClass('validate-form-input-field'); 
              }
              else
              {
              $('#person-book').removeClass('validate-form-input-field'); 
              } 

              
          return valid;
      });
      function IsEmail(email)
      {
          var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
          if(!regex.test(email)){
             return false;
          }else{
             return true;
          }
      }
  });

  $(document).on('click', '.navbar-nav .nav-item', function(){
    $(".navbar-collapse").removeClass("show");  
    
  });