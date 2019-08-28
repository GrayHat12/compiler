<?php 
$str = $_POST;
$params = array();
parse_str($str,$params)
$to = 'grayhathacks10@gmail.com'
$name = $params['form-field.contactName']
$email = 'From : '+$params['form-field.contactEmail']
$subject = $params['form-field.contactSubject']
$message = $params['form-field.contactMessage']
if(mail($to,$subject,$message,$email))
{
    echo('OK');
}
else
{
    echo("Internal Error");
}
?>