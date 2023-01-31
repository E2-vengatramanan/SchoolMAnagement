<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<link rel="icon" type="image/x-icon" href="images/pheonixschoollogo.jpeg">
<title>Pheonix Ineternational School</title>
<link rel="stylesheet"	href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
    <script type="text/javascript" src="jquery/jquery-3.1.1.min.js"></script>
<link rel="stylesheet" 	href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
	
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>

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
            <h2 id="Page">ADMIN PAGE</h2>
			<form>
				<button id="homebutton1" type="button"  onclick="openAddStudentForm()">ADD STUDENT</button>
				<button id="homebutton2" type="button" onclick="openAddStaffForm()">ADD STAFF</button>
                <button id="homebutton2" type="button" onclick="viewStudentList()">VIEW STUDENT</button>
                <button id="homebutton2" type="button" onclick="viewStaffList()">VIEW STAFF</button>
                <button type="button" onclick="logout()">LOGOUT</button>
			</form>			
		</div></div>
        <div id="addstudentDiv"  style="display: none;text-align: center;">
            <form class= "addstudentform" id="addStudent" method="post">
                <h3 style="color: green;text-align: center;">Student Add Form</h3>
                    <div class="form-group">
                            <label id="lab">Student First Name</label>
                            <input type="text" name="studentFname" id="studentFname" value="" placeholder="Ex:venkat" autocomplete="off" required>
                          <br><br>
                            <label id="lab">Student Last Name</label>
                            <input type="text" name="studentLname" id="studentLname" value="" placeholder="Ex:Ramanan" autocomplete="off" required>
                        <br><br>
                            <label id="lab">Class Name</label>
                            <input type="text" name="className" placeholder="Ex:Computer Science" value="" id="className" autocomplete="off" required>
                           <br><br>
                            <label id="lab">MobileNumber</label>
                            <input type="text" name="studentMob" placeholder="Ex:9876543210" value="" id="studentMob" autocomplete="off" required>
                            <br><br>
                            <label id="lab">MailId</label>
                            <input type="text" name="studentMail" placeholder="Ex:ram123@gmail.com" value="" autocomplete="off" id="studentMail" required>
                           <br><br>
                            <label id="lab">Address</label>
                            <input type="text" name="studentAddress" id="studentAddress" value="" placeholder="Ex:Chennai">
                           <br><br>
                           <input class="btn btn-success" id="submitButton" type="submit" value="SAVE" onclick="saveStudent(event)"  style="margin-left: 0px;">
                            <button type="reset" style="margin-right: 16px"
                                class="btn btn-danger">Clear</button>
                            
                        </div>			
                </form>
            </div>
            <div id="editstudentDiv"  style="text-align: center;display:none;">
                <form class= "editstudentform" id="editStudent" method="post">
                    <h3 style="color: green;text-align: center;">Student Edit Form</h3>
                        <div class="form-group">
                            <label id="lab">Student First Name</label>
                            <input type="text" name="studentFname1" id="studentFname1" value="" placeholder="Ex:venkat" autocomplete="off" required>
                          <br><br>
                            <label id="lab">Student Last Name</label>
                            <input type="text" name="studentLname1" id="studentLname1" value="" placeholder="Ex:Ramanan" autocomplete="off" required>
                        <br><br>
                            <label id="lab">Class Name</label>
                            <input type="text" name="className1" placeholder="Ex:Computer Science" value="" id="className1" autocomplete="off" required>
                           <br><br>
                            <label id="lab">MobileNumber</label>
                            <input type="text" name="studentMob1" placeholder="Ex:9876543210" value="" id="studentMob1" autocomplete="off" required>
                            <br><br>
                            <label id="lab">MailId</label>
                            <input type="text" name="studentMail1" placeholder="Ex:ram123@gmail.com" value="" autocomplete="off" id="studentMail1" required>
                           <br><br>
                            <label id="lab">Address</label>
                            <input type="text" name="studentAddress1" id="studentAddress1" value="" placeholder="Ex:Chennai">
                           <br><br>
                           <input class="btn btn-success" id="submitButton" type="submit" value="SAVE" onclick="saveStudent(event)"  style="margin-left: 0px;">
                            <button type="reset" style="margin-right: 16px"
                                class="btn btn-danger">Clear</button>		
                            </div>	
                    </form>
                </div>       
	
    <div id="addstaffDiv"  style="text-align: center;display: none;">
        <h3 style="color: green;text-align: center;">Staff Add Form</h3>
        <form class= "addstaffform" id="addStaff" method="post">           
                <div class="form-group">
                        <label id="lab">Staff First Name</label>
                        <input type="text" name="staffFname" id="staffFname" value="" placeholder="Ex:Akshay" autocomplete="off" required>
                        <br><br>
                        <label id="lab">Staff Last Name</label>
                        <input type="text" name="staffLname" id="staffLname" value="" placeholder="Ex:Prasath" autocomplete="off" required>
                        <br><br>
                        <label id="lab"> Subject Name</label>
                        <input type="text" name="subject" placeholder="Ex:Maths" value="" id="subject" autocomplete="off" required>
                        <br><br>
                        <label id="lab">MobileNumber</label>
                        <input type="text" name="staffMob" placeholder="Ex:8520147960" value="" id="staffMob" autocomplete="off" required>
                        <br><br>
                        <label id="lab">MailId</label>
                        <input type="text" name="staffMail" placeholder="Ex:akshay123@gmail.com" value="" autocomplete="off" id="staffMail" required>
                        <br><br>
                        <label id="lab">Address</label>
                        <input type="text" name="staffAddress" id="staffAddress"value=""  placeholder="Ex:chennai" autocomplete="off" required>
                        <br><br>
    
                        <input class="btn btn-success" id="submitButton" type="submit" value="SAVE" onclick="saveStaff(event)"  style="margin-left: 0px;">
                        <button type="reset" style="margin-right: 16px"
                            class="btn btn-danger">Clear</button>
                        
                    </div>			
            </form>
        </div>
        <div id="editstaffDiv"  style="text-align: center;display: none;">
            <h3 style="color: green;text-align: center;">Staff Edit Form</h3>
            <form class="editstaffform"id="editStaff" method="post">               
                    <div class="form-group">				
                        <label id="lab">Staff First Name</label>
                        <input type="text" name="staffFname1" id="staffFname1" value="" placeholder="Ex:Akshay" autocomplete="off" required>
                        <br><br>
                        <label id="lab">Staff Last Name</label>
                        <input type="text" name="staffLname1" id="staffLname1" value="" placeholder="Ex:Prasath" autocomplete="off"required>
                        <br><br>
                        <label id="lab"> Subject Name</label>
                        <input type="text" name="subject1" placeholder="Ex:Maths" value="" id="subject1" autocomplete="off" required>
                        <br><br>
                        <label id="lab">MobileNumber</label>
                        <input type="text" name="staffMob1" placeholder="Ex:8520147960" value="" id="staffMob1" autocomplete="off" required>
                        <br><br>
                        <label id="lab">MailId</label>
                        <input type="text" name="staffMail1" placeholder="Ex:akshay123@gmail.com" value="" autocomplete="off" id="staffMail1" required>
                        <br><br>
                        <label id="lab">Address</label>
                        <input type="text" name="staffAddress1" id="staffAddress1" value="" placeholder="Ex:chennai" autocomplete="off" required>
                        <br><br>
    
                        <input class="btn btn-success" id="submitButton" type="submit" value="SAVE" onclick="saveStaff(event)"  style="margin-left: 0px;">
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
            <input type = "hidden" id="staffId" value=0 />
            <input type = "hidden" id="studentId" value=0 />
            <input type = "hidden" id="createdBy" value=0 />
            <input type = "hidden" id="createdDate" value=0 />
           
</body>
</html>