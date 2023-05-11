<?php
header('Access-Control-Allow-Origin: *');

    if($_REQUEST['action']){
	$act = $_REQUEST['action'];  
    }else{
	$act = $_POST['action'];
    }
    switch ($act) {
	case'contactform':
	    $name = $_POST['name'];
	    $email = $_POST['email'];
	    $phone = $_POST['phone'];
	    $message = $_POST['msg'];
	    $contact_us_enquiry_msg = '
	    <div style="margin: 0; padding: 0 !important;  color: rgba(0,0,0,.4); line-height: 1.8; font-family: "Playfair Display", serif;  font-weight: 400; font-size: 15px;">
		<center style="width: 100%; background-color: #f1f1f1;">
		    <div style="max-width: 600px; margin: 0 auto;" class="email-container">
			<table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin: auto;">
			    <tr>
				<td style="background: #ffffff; padding: 0em 2.5em; text-align: center; background-color: #0e1029;">
				    <img src="../img/logo/archana-new-logo.png" style="width: 20%; padding-top: 15px;">
				</td>
			    </tr>
			    <tr>
				<td style="text-align:center; background-color: #0d1122; color: #ffffff;">
				    <h2 style="color: #ffffff; font-size: 20px; margin-top: -5px; font-family: oswald,sans-serif;">
					Hotel Ramay Palace Contact Us Enquiry
				    </h2>
				</td>
			    </tr>
			    <tr>
				<td style="padding: 20px; width: 100%; background:  #ffffff; text-align: left; color: #557e00;">
				    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
					<tr>
					    <th style="width: 30%;"> Name</th>
					    <td style="width: 70%;">'.$name.'</td>
					</tr>
					<tr>
					    <th>Email :</th>
					    <td>'. $email.'</td>
					</tr>
					<tr>
					    <th>phone :</th>
					    <td>'.$phone.'</td>
					</tr>
					<tr>
					    <th>Message :</th>
					    <td>'.$message.'</td>
					</tr>
				    </table>
				</td>
			    </tr>
			</table>
			<table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin: auto;">
			    <tr>
				<td valign="middle" style="background-color: #0e1029; color: #fff; padding: 1.1em;">
				    <table>
					<tr>
					    <td valign="top" width="33.333%" style="padding-top: 20px;">
						<table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
						    <tr>
							<td style="text-align: center; padding-right: 10px; font-family: oswald,sans-serif;">
							    <p><strong style="font-size:20px; color: #fff; line-height: 30px;">Contact Details </strong></p>
							    Email : 
							    <a style="color:#557e00; text-decoration: none;" href="mailto:info@ramaypalace.com" target="_blank" rel="noreferrer">info@ramaypalace.com</a>
							    <br>
							    Contact : +91 9651000333 </p>
							</td>
						    </tr>
						</table>
					    </td>
					</tr>
				    </table>
				</td>
			    </tr>
			</table>
		    </div>
		</center>
	    </div>';
	    $subject = "Hotel Ramay Palace  - ".$name;
	    $to = "info@ramaypalace.com";
	    $headers[] = 'MIME-Version: 1.0';
	    $headers[] = 'Content-type: text/html; charset=iso-8859-1';
	    $headers[] = 'To: info@ramaypalace.com';
	    $headers[] = 'From: Hotel Ramay Palace <info@ramaypalace.com>';
	   
	    //$header .= "Content-type: text/html\r\n";
	    $mail = mail ($to,$subject,$contact_us_enquiry_msg,implode("\r\n", $headers));
	    $mail_to_akshat = mail ('akshat.gd@gmail.com',$subject,$contact_us_enquiry_msg,implode("\r\n", $headers));
	    if($mail==1){
		$response=1;
			echo json_encode($response);   
	    }else{
		$response=0;
			echo json_encode($response);   
	    }
	    break;


	    case'booking_form':
			
		$name= $_POST['booking_name'];
		$email = $_POST['booking_email'];
		$phone = $_POST['booking_phone'];
		$person= $_POST['booking_person'];
		$checkin = $_POST['booking_checkin'];
		$checkout= $_POST['booking_checkout'];
		$message_content = '
		<div style="margin: 0; padding: 0 !important;  color: rgba(0,0,0,.4); line-height: 1.8; font-family: "Playfair Display", serif;  font-weight: 400; font-size: 15px;">
		    <center style="width: 100%; background-color: #f1f1f1;">
			<div style="max-width: 600px; margin: 0 auto;" class="email-container">
			    <table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin: auto;">
				<tr>
				    <td style="background: #ffffff; padding: 0em 2.5em; text-align: center; background-color: #0e1029;">
					<img src="../img/logo/archana-new-logo.png" style="width: 20%; padding-top: 15px;">
				    </td>
				</tr>
				<tr>
				    <td style="text-align:center; background-color: #0d1122; color: #ffffff;">
					<h2 style="color: #ffffff; font-size: 20px; margin-top: -5px; font-family: oswald,sans-serif;">
					    Hotel Ramay Palace Book from  '.$checkin.' to '.$checkout.';
					</h2>
				    </td>
				</tr>
				<tr>
				    <td style="padding: 20px; width: 100%; background:  #ffffff; text-align: left; color: #557e00;">
					<table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
					    <tr>
						<th style="width: 30%;"> Name :</th>
						<td style="width: 70%;">'.$name.'</td>
					    </tr>
					    <tr>
						<th>Email :</th>
						<td>'. $email.'</td>
					    </tr>
					    <tr>
						<th>Phone :</th>
						<td>'.$phone.'</td>
					    </tr>
						<tr>
						<th>Person :</th>
						<td>'.$person.'</td>
					    </tr>
						<tr>
						<th>Check In :</th>
						<td>'.$checkin.'</td>
					    </tr>
					    <tr>
						<th>Check Out :</th>
						<td>'.$checkout.'</td>
					    </tr>
					</table>
				    </td>
				</tr>
			    </table>
			    <table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin: auto;">
				<tr>
				    <td valign="middle" style="background-color: #0e1029; color: #fff; padding: 1.1em;">
					<table>
					    <tr>
						<td valign="top" width="33.333%" style="padding-top: 20px;">
						    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
							<tr>
							    <td style="text-align: center; padding-right: 10px; font-family: oswald,sans-serif;">
								<p><strong style="font-size:20px; color: #fff; line-height: 30px;">Contact Details </strong></p>
								Email : 
								<a style="color:#557e00; text-decoration: none;" href="mailto:info@ramaypalace.com" target="_blank" rel="noreferrer">info@ramaypalace.com</a>
								<br>
								Contact : +91 9651000333 </p>
							    </td>
							</tr>
						    </table>
						</td>
					    </tr>
					</table>
				    </td>
				</tr>
			    </table>
			</div>
		    </center>
		</div>';
	    $subject = "Hotel Ramay Palace  - ".$name;
	    $to = "info@ramaypalace.com";
	    $headers[] = 'MIME-Version: 1.0';
	    $headers[] = 'Content-type: text/html; charset=iso-8859-1';
	    $headers[] = 'To: info@ramaypalace.com';
	    $headers[] = 'From: Hotel Ramay Palace <info@ramaypalace.com>';
	  
	    $mail = mail ($to,$subject,$message_content,implode("\r\n", $headers));
	    $mail_to_akshat = mail ('akshat.gd@gmail.com',$subject,$message_content,implode("\r\n", $headers));
	    if($mail==1){
		$response=1;
		echo json_encode($response);   
	    }else{
		$response=0;
		echo json_encode($response);   
	    }
	    break;
	    
	default:
        $msg = "Something went wrong !";
        $setUrl = "../?info=$msg";
        break;
    }
?>