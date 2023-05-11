$(window).scroll(function(){
    var sticky = $('.header'),
        scroll = $(window).scrollTop();
  
    if (scroll >= 100) sticky.addClass('animated fadeInDown fixed');
    else sticky.removeClass('animated fadeInDown fixed');
  });

  $(document).ready(function() {   
    
  /* contact us enquiry */
    /*$(document).on('click', '.contact-us-submit', function(){
        var name = $.trim($("#name").val());
        var email = $.trim($("#email").val());
        var phone = $.trim($("#phone").val());
        var msg = $.trim($("#message").val());
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
    });*/
    $(document).on('click', '.contact-us-submit', function(){
        var name = $.trim($("#name").val());
        var email = $.trim($("#email").val());
        var phone = $.trim($("#phone").val());
        var msg = $.trim($("#message").val());
        var contactform ='contactform';
        
        var valid = true;
        if(name == '' || email == '' || IsEmail(email)==false || phone == '')
        {
            
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
        }
        else
        {
            $('#phone').removeClass('validate-form-input-field'); 
            $('#message').removeClass('validate-form-input-field'); 
            $('#email').removeClass('validate-form-input-field'); 
            $('#name').removeClass('validate-form-input-field');  
            $("#ajax-loder").show();
            $(".response-message").empty();
            $('.response-message').css('display','block');
            $.ajax({
                url:"https://ramaypalace.com/php/mail.php",
                type: 'POST',
                data:{name:name,email:email,phone:phone,msg:msg,action:contactform},
                dataType: "text",
                    success: function(data) {
                       
                    if(data==1){ 
                        $("#ajax-loder").hide();
                        $('#contactUsForm').trigger("reset");
			            $(".response-message").prepend("<p class='text-danger'>Thanks for your Enquiry. Will be in touch with you in 24-48 Hours.</p>");
                        setTimeout(function() {$(".response-message").hide(); }, 5000);
                        
                       
                    }
                    else{
			            $(".response-message").prepend("<p class='text-danger'>Mail has been not sent.  Please Try again.</p>");
                        $("#ajax-loder").hide();
                        $('#contactUsForm').trigger("reset");
                        setTimeout(function() {$(".response-message").hide(); }, 5000);

                        
                    }
		        },
            });
        }
	    return valid;
        
    });

    $(document).on('click', '.book-now-submit', function(){
        var booking_name = $.trim($("#booking_name").val());
        var booking_email = $.trim($("#booking_email").val());
        var booking_phone = $.trim($("#booking_phone").val());
        var booking_person = $.trim($("#booking_person").val());
        var booking_checkin = $.trim($("#booking_checkin").val());
        var booking_checkout = $.trim($("#booking_checkout").val());
        var booking_form ='booking_form';
        
        var valid = true;
        if(booking_name == '' || booking_email == '' || IsEmail(booking_email)==false || booking_phone == '' || booking_person =='' || booking_checkin == ''|| booking_checkout == '')
        {
            
            if(booking_name == ''){
                valid = false;
                $('#booking_name').addClass('validate-form-input-field');   
            }else{
                $('#booking_name').removeClass('validate-form-input-field');  
            } 

            if(IsEmail(booking_email)==false)
            {
                valid = false;
                $('#booking_email').addClass('validate-form-input-field'); 
            }
            else
            {
                $('#booking_email').removeClass('validate-form-input-field'); 
            } 

            if(booking_phone == '')
            {
                valid = false;
                $('#booking_phone').addClass('validate-form-input-field'); 
            }
            else
            {
            $('#booking_phone').removeClass('validate-form-input-field'); 
            } 

            if(booking_person == '')
            {
                valid = false;
                $('#booking_person').addClass('validate-form-input-field'); 
            }
            else
            {
            $('#booking_person').removeClass('validate-form-input-field'); 
            } 

            if(booking_checkin == '')
            {
                valid = false;
                $('#booking_checkin').addClass('validate-form-input-field'); 
            }
            else
            {
            $('#booking_checkin').removeClass('validate-form-input-field'); 
            } 

            if(booking_checkout == '')
            {
                valid = false;
                $('#booking_checkout').addClass('validate-form-input-field'); 
            }
            else
            {
            $('#booking_checkout').removeClass('validate-form-input-field'); 
            } 
        }
        else
        {
            $('#booking_name').removeClass('validate-form-input-field'); 
            $('#booking_email').removeClass('validate-form-input-field'); 
            $('#booking_phone').removeClass('validate-form-input-field'); 
            $('#booking_person').removeClass('validate-form-input-field');  
            $('#booking_checkin').removeClass('validate-form-input-field');  
            $('#booking_checkout').removeClass('validate-form-input-field');  
            $("#ajax-loder").show();
            $(".booking-message").empty();
            $('.booking-message').css('display','block');
            $.ajax({
                url:"https://ramaypalace.com/php/mail.php",
                type: 'POST',
                data:{booking_name:booking_name,booking_email:booking_email,booking_phone:booking_phone,booking_person:booking_person, booking_checkin:booking_checkin,booking_checkout:booking_checkout,action:booking_form},
                dataType: "text",
                    success: function(data) {
                       
                    if(data==1){ 
                        $("#ajax-loder").hide();
                        $('#bookingform').trigger("reset");
			            $(".booking-message").prepend("<p class='text-danger'>Thanks for your Enquiry. Will be in touch with you in 24-48 Hours.</p>");
                        setTimeout(function() {$(".booking-message").hide(); }, 5000);
                        
                       
                    }
                    else{
			            $(".booking-message").prepend("<p class='text-danger'>Mail has been not sent.  Please Try again.</p>");
                        $("#ajax-loder").hide();
                        $('#bookingform').trigger("reset");
                        setTimeout(function() {$(".booking-message").hide(); }, 5000);

                        
                    }
		        },
            });
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