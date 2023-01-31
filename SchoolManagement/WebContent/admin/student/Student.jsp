<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<link rel="icon" type="image/x-icon" href="../images/pheonixschoollogo.jpeg">
<title>Pheonix Ineternational School</title>
<link rel="stylesheet"
	href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
<link rel="stylesheet"
	href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
	
<script
	src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script
	src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
	<script type="text/javascript" src="js/school.js"></script>
	<link rel="stylesheet" href="css/home.css"> 
	<link rel="stylesheet" href="css/table.css"> 
</head>

<body id="adminbody">
    
	<div class="container">
		<div style="text-align:center" >
            <img src="../images/pheonixschoollogo.jpeg" id="logo">
			<h1 id="headwel">WELCOME</h1>
            <h2 id="Page">STUDENT PAGE</h2>

			<form>
				<!-- <button id="homebutton1" type="button"  onclick="openEditStudentForm()">EDIT STUDENT</button> -->
				<button id="homebutton2" type="button" onclick="viewStudentList()">VIEW STUDENT</button>               
                <button type="button" onclick="logout()">LOGOUT</button>
			</form>			
		</div></div>    
           <div id="viewStudentListDiv" style="margin-bottom: 10px;">
            </div>
</body>
</html>