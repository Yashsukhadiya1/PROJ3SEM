<?php
$insert = false;
if (isset($_POST['name'])){
    //SET CONNECTION VARIABLE
    
  $server = "localhost";
  $username= "root";
  $password= "";
//CREATE A DATABSE CONNECTION
$con = mysqli_connect($server,$username,$password);
//CHECK FOR CONNECTION SUCCESS
if(!$con){
    die("connect to databse" .
    mysqli_connect_error());
}
//echo"succesfull connected to db";

//COLLECT POST VARIABLE
$name = $_POST['name'];
$gender = $_POST['gender'];
$age = $_POST['age'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$desc = $_POST['desc'];

$sql=" INSERT INTO `trip`.`trip` (`name`, `age`, `gender`, `email`, `phone`, `others`, `dt`) VALUES ('$name', '$age', '$gender', '$email', '$phone', '$desc', current_timestamp());
";
//echo $sql;
//EXECUTE THE QUERY
if($con->query($sql)==true) {
     //echo "successfully insterreed";
     $insert = true;
}
else {
    echo "error: $sql <br> $con->error";

}
$con->close();
}
?>



<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login Page</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="MAIN.CSS">

</head>
<body>
   
    <div class="container">
        <h1> Welcome to Our Grocery Store</h1>
        <p><b>Enter your details here.</b></p>
        <?php 
        if($insert == true){
        echo"<p><h1>THANKS FOR SUBMITTING YOUR DETAILS, CLICK NEXT TO OPEN THE WEBSITE<h1></p>";
        }
        ?>
        <form action="loginpage.php" method="post">
            <input type="text" name="name" id="name" required placeholder="Enter Your Name">
            <input type="text" name="age" id="age" placeholder="Enter Your Age">
            <input type="text" name="gender" id="gender" placeholder="Enter Your Gender">
            <input type="email" name="email" id="email" required placeholder="Enter Your email">
            <input type="phone" name="phone" id="phone" required placeholder="Enter Your phone no.">
            <textarea name="desc" id="desc" cols="30" rows="10"required placeholder="Enter Your Address!"></textarea>
            <button class="btn"> Submit </button><button class="btn"> <a href="index.html">NEXT</a> </button>


    </div>
    <script src="JS.JS"></script>
</body>
</html>

