<?php
 

  

 

 
   $userName = $_POST['name'];
   $userEmail = $_POST['email'];
   $userMsg = $_POST['message'];

   $to = "haywoodnick@sky.com";
   $subject = "Dj Nicky H app";
   $body = "";


   $body .= "From: ".$userName."\r\n";
   $body .= "email: ".$userEmail."\r\n";
   $body .= "message: ".$userMsg."\r\n";
  
   mail($to,$subject,$body);

?> 





<!DOCTYPE html>




<html>
 


<head>
  
      <title>Confirmation</title>
  
      <link href="sendH.css" type="text/css" rel="stylesheet"/>
  
   
  </head>
  
  <body>
  
<div id="content">    
          
<h1 id="message1">Thank you for your interest</h1>  

<h1 id="message2">We shall reply as soon as possible</h1>

</div>     

<button><a href="index.html">Home</a></button>
  
  </body>
  
  
  </html>