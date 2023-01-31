<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<link rel="icon" type="image/x-icon" href="images/pheonixschoollogo.jpeg">
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
<style>
    div {
            margin-bottom: 10px;
          }
         label {
            display: inline-block;
            width: 150px;
            text-align: right;
          }
          </style>
</head>

<body id="adminbody">
    
	<div class="container">
		<div style="text-align:center" >
            <img src="images/pheonixschoollogo.jpeg" id="logo">
			<h1 id="headwel">WELCOME</h1>
            <h2 id="page">STAFF PAGE</h2>
			<form>
				<button id="homebutton2" type="button" onclick="viewStudentList()">VIEW STUDENT</button>
                <button id="homebutton2" type="button" onclick="viewStaffList()">VIEW STAFF</button>
                <button type="button" onclick="logout()">LOGOUT</button>
			</form>			
		</div></div>        
            <div id="editstudentDiv"  style="text-align: center;display:none;">
                <form class="editstudentform" id="editStudent" method="post">
                    <h3 style="color: green;text-align: center;">Student Edit Form</h3>
                        <div class="form-group">
                            <label id="lab">Student First Name</label>
                            <input type="text" name="studentFname1" id="studentFname1" placeholder="Ex:venkat" autocomplete="off">
                          <br><br>
                            <label id="lab">Student Last Name</label>
                            <input type="text" name="studentLname1" id="studentLname1" placeholder="Ex:Ramanan" autocomplete="off">
                        <br><br>
                            <label id="lab">Class Name</label>
                            <input type="text" name="className1" placeholder="Ex:Computer Science" id="className1" autocomplete="off">
                           <br><br>
                            <label id="lab">MobileNumber</label>
                            <input type="text" name="studentMob1" placeholder="Ex:9876543210" id="studentMob1" autocomplete="off">
                            <br><br>
                            <label id="lab">MailId</label>
                            <input type="text" name="studentMail1" placeholder="Ex:ram123@gmail.com" autocomplete="off" id="studentMail1">
                           <br><br>
                            <label id="lab">Address</label>
                            <input type="text" name="studentAddress1" id="studentAddress1" placeholder="Ex:Chennai">
                           <br><br>
                             <button type="submit" style="margin-right: 16px"
                            class="btn btn-success" onclick="savestudent(event)">Submit</button>
                            <button type="reset" style="margin-right: 16px"
                                class="btn btn-danger">Clear</button>							
                            </div>	
                    </form>
                </div>     
                <div id="viewStaffListDiv" style="margin-bottom: 10px;display: none;max-width: 50%;margin-left: 22%;">
                    <h1 style="color:green;font-size:2%;">STAFF LIST </h1>
                </div>
                <div id="viewStudentListDiv" style="margin-bottom: 10px;display: none;max-width: 50%;margin-left: 22%;">
                </div>
            <input type = "hidden" id="studentId" value=0 />
            <input type = "hidden" id="createdBy" value=0 />
            <input type = "hidden" id="createdDate" value=0 />
            <script type="text/javascript">
                sessionvalidate();
                </script>
</body>
</html>