<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<link rel="icon" type="image/x-icon" href="images/pheonixschoollogo.jpeg">
<title>Pheonix Ineternational School</title>
 <link rel="stylesheet" href="css/home.css"> 
 <script>
function openadminpage(){
    localStorage.setItem("logintypeflag",1);
    localStorage.setItem("logintitle","ADMIN LOGIN PAGE");
    window.location.href="login.jsp";
}
function openstaffpage(){
    localStorage.setItem("logintypeflag",2);
    localStorage.setItem("logintitle","STAFF LOGIN PAGE");
    window.location.href="login.jsp";
}

function openstudentpage(){
    localStorage.setItem("logintypeflag",3);
    localStorage.setItem("logintitle","STUDENT LOGIN PAGE");
    window.location.href="login.jsp";
}


 </script>
</head>
<body id="homebody">
<div class="container">
    <img src="images/pheonixschoollogo.jpeg" id="logo">
<div><h1 id="headwel">WELCOME</h1>
</div>  
<h1 id="head">PHEONIX INTERNATIONAL SCHOOL</h1>
<h4 id="address1">TidelPark near,Thiruvanmiyur</h4>
<h2 id="address">Chennai
Tamil Nadu 620026
Phone: 076958 88801</h2></div>
<div id="pics">
   <table>
    <tr>
       <th><img src="images/admin.jpg" style="width:55%;cursor: pointer;" id="pic1" onclick="openadminpage()"><p>ADMIN</p></th>
     
       <th><img src="images/teacherlogo.png" style="width:55%;cursor:pointer;" id="pic2" onclick="openstaffpage()"><p>STAFF</p></th>
          
       <th><img src="images/student.jpeg" style="width:55%;cursor: pointer;" id="pic3" onclick="openstudentpage()"><p>STUDENT</p></th>
   </tr>
   </table>
</div>
</body>
</html>