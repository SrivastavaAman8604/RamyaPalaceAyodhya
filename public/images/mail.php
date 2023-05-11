<?php
echo 'dcsc';
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
					Divine Soul Resonance Contact Us Enquiry
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
							    <a style="color:#557e00; text-decoration: none;" href="mailto:info@divinesoulresonance.com" target="_blank" rel="noreferrer">info@littleleaf.com</a>
							    <br>
							    Contact : +91 (000) 0000000 </p>
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
	    $subject = "Divine Soul Resonance  Contact Us Enquiry  - ".$name;
	    $to = "info@dsr.one";
	    $headers[] = 'MIME-Version: 1.0';
	    $headers[] = 'Content-type: text/html; charset=iso-8859-1';
	    $headers[] = 'To: info@littleleaf.one';
	    $headers[] = 'From: Divine Soul Resonance <info@dsr.com>';
	    $headers[] = "Bcc: 'rahulkumarmaurya464@gmail.com'\r\n";
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
	    case'sessionmodalform':
		$session_name = $_POST['session_name'];
		$session_enq_name = $_POST['session_enq_name'];
		$session_enq_email = $_POST['session_enq_email'];
		$session_enq_mobile = $_POST['session_enq_mobile'];
		$session_enq_msg = $_POST['session_enq_msg'];
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
					    Divine Soul Resonance Book One Time  '.$session_name.';
					</h2>
				    </td>
				</tr>
				<tr>
				    <td style="padding: 20px; width: 100%; background:  #ffffff; text-align: left; color: #557e00;">
					<table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
					    <tr>
						<th style="width: 30%;">Session Name</th>
						<td style="width: 70%;">'.$session_name.'</td>
					    </tr>
					    <tr>
						<th>Name :</th>
						<td>'. $session_enq_name.'</td>
					    </tr>
					    <tr>
						<th>Email :</th>
						<td>'. $session_enq_email.'</td>
					    </tr>
					    <tr>
						<th>Subject :</th>
						<td>'.$session_enq_mobile.'</td>
					    </tr>
					    <tr>
						<th>Message :</th>
						<td>'.$session_enq_msg.'</td>
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
								<a style="color:#557e00; text-decoration: none;" href="mailto:info@divinesoulresonance.com" target="_blank" rel="noreferrer">info@littleleaf.com</a>
								<br>
								Contact : +91 (000) 0000000 </p>
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
	    $subject = "Divine Soul Resonance Book One Time  - ".$session_name;
	    $to = "info@dsr.one";
	    $headers[] = 'MIME-Version: 1.0';
	    $headers[] = 'Content-type: text/html; charset=iso-8859-1';
	    $headers[] = 'To: info@dsr.one';
	    $headers[] = 'From: Divine Soul Resonance <info@dsr.one>';
	    $$headers[] = "Bcc: 'rahulkumarmaurya464@gmail.com'\r\n";
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
	    case 'discoverycallmodalform':
		$discovery_call_name = $_POST['discovery_call_name'];
		$discovery_call_enq_name = $_POST['discovery_call_enq_name'];
		$discovery_call_enq_email = $_POST['discovery_call_enq_email'];
		$discovery_call_enq_mobile_no = $_POST['discovery_call_enq_mobile_no'];
		$discovery_call_enq_message = $_POST['discovery_call_enq_message'];
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
					    Divine Soul Resonance Discovery Call  '.$discovery_call_name.';
					</h2>
				    </td>
				</tr>
				<tr>
				    <td style="padding: 20px; width: 100%; background:  #ffffff; text-align: left; color: #557e00;">
					<table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
					    <tr>
						<th style="width: 30%;">Discovery Call Name</th>
						<td style="width: 70%;">'.$discovery_call_name.'</td>
					    </tr>
					    <tr>
						<th>Name :</th>
						<td>'. $discovery_call_enq_name.'</td>
					    </tr>
					    <tr>
						<th>Email :</th>
						<td>'. $discovery_call_enq_email.'</td>
					    </tr>
					    <tr>
						<th>Subject :</th>
						<td>'.$discovery_call_enq_mobile_no.'</td>
					    </tr>
					    <tr>
						<th>Message :</th>
						<td>'.$discovery_call_enq_message.'</td>
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
								<a style="color:#557e00; text-decoration: none;" href="mailto:info@divinesoulresonance.com" target="_blank" rel="noreferrer">info@littleleaf.com</a>
								<br>
								Contact : +91 (000) 0000000 </p>
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
	    $subject = "Divine Soul Resonance Book One Time Discovery Call  - ".$discovery_call_name;
	    $to = "info@dsr.one";
	    $headers[] = 'MIME-Version: 1.0';
	    $headers[] = 'Content-type: text/html; charset=iso-8859-1';
	    $headers[] = 'To: info@dsr.one';
	    $headers[] = 'From: Divine Soul Resonance <info@dsr.one>';
	    $headers[] = "Bcc: 'rahulkumarmaurya464@gmail.com'\r\n";
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