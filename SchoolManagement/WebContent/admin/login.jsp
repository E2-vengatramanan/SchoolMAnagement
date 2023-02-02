<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<link rel="icon" type="image/x-icon" href="images/pheonixschoollogo.jpeg">
<title>Pheonix Ineternational School</title>
<link rel="stylesheet"href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
<script type="text/javascript" src="jquery/jquery-3.1.1.min.js"></script>
<link rel="stylesheet"href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
<script type="text/javascript" src="js/school.js"></script>
<link rel="stylesheet" href="css/home.css"> 
 <script>
    function returnhome(){
    window.location.href="schoolHome.jsp";
    localStorage.removeItem("logintypeflag");
    }
</script>
</head>
<body id="loginbody">
<div id="login" style="text-align: center;">
<h1 id="logintitle" style="color: blue; font-size: x-large;"></h1>
<label for="userName">userName</label>
<input type="text" value="" placeholder="Enter userName" id="username"></input>
<br><br>
<label for="userName">passWord</label>
<input type="password" value="" placeholder="Enter userName" id="password">
</input>

<br><br>

<!-- <input type="hidden" id="errormessage">{$errormessage}</input> -->
&nbsp;&nbsp;<button id="loginButton" onclick="validateLoginForm()"  type="submit">Login</button>&nbsp;&nbsp;
<button id="homeButton" onclick="returnhome()"  type="submit">Home</button>
</div>
<script type="text/javascript">
    loginpagesession();
    </script>
</body>
</html>