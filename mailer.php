<?php
  $url = 'https://www.google.com/recaptcha/api/siteverify';
  $privatekey = '6LdJgSUTAAAAAE653nqK7Ro307MVWjxx2JNbhWTP';

  $response = file_get_contents($url.'?secret='.$privatekey."&response=".$_POST['g-recaptcha-response']."&remoteip=".$_SERVER['REMOTE_ADDR']);
  $data = json_decode($response);

  if(isset($data->success) AND $data->success==true) {
    // Only process POST reqeusts.
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
      // Get the form fields and remove whitespace.
      $name = strip_tags(trim($_POST["name"]));
      $phone = trim($_POST["tel"]);
      $time = trim($_POST["time"]);
      $method = trim($_POST["method"]);
      $name = str_replace(array("\r","\n"),array(" "," "),$name);
      $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
      $message = trim($_POST["message"]);

      // Check that data was sent to the mailer.
      if ( empty($name) OR empty($message) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        // Set a 400 (bad request) response code and exit.
        http_response_code(400);
        echo "Oops! There was a problem with your submission. Please complete the form and try again.";
        exit;
      }

      // Set the recipient email address.
      // FIXME: Update this to your desired email address.
      $recipient = "WebInquiry@ThePPCGroup.Com";

      // Set the email subject.
      $subject = "New contact from $name";
      $msg = "Thank you for contacting ThePPCGroup.\nSomeone will contact you shortly. Please let us know the best time to reach you, and if phone or email is better.\nThePPCGroup\n855-539-4742\nWebInquiry@ThePPCGroup.Com\nWWW.ThePPCGroup.Com";
      $headers = 'From: WebInquiry@ThePPCGroup.Com' . "\r\n" .
      'Reply-To: WebInquiry@ThePPCGroup.Com' . "\r\n" .
      'X-Mailer: PHP/' . phpversion();
      // Build the email content.
      $email_content = "Name: $name\n";
      $email_content .= "Email: $email\n\n";
      $email_content .= "Phone: $phone\n\n";
      $email_content .= "Prefered Time: $time\n\n";
      $email_content .= "Prefered Method: $method\n\n";
      $email_content .= "Message:\n$message\n";

      // Build the email headers.
      $email_headers = "From: $name <$email>";

      // Send the email.
      if (mail($recipient, $subject, $email_content, $email_headers)) {
        // Set a 200 (okay) response code.
        http_response_code(200);
        mail($email, "Thank You!", $msg, $headers);
      } 
    }

  } else {
        // Not a POST request, set a 403 (forbidden) response code.
        http_response_code(403);
        echo "There was a problem with your submission, please try again.";
    }

?>
