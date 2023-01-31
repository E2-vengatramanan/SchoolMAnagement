<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
    <%@page import="java.util.Date"%>
<%@page import="java.text.SimpleDateFormat"%>
<%@ page language="java"  contentType="text/html; charset=windows-1252" pageEncoding="windows-1252" %>
<%@  taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>  
<!DOCTYPE html>
<html>
<head>
<link rel="icon" type="image/x-icon" href="images/pheonixschoollogo.jpeg">
<title>Pheonix Ineternational School</title>
<link rel="stylesheet"
	href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
    <script type="text/javascript" src="jquery/jquery-3.1.1.min.js"></script>
<link rel="stylesheet" 	href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
	
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>

<script type="text/javascript" src="js/school.js"></script>
<link rel="stylesheet" href="css/home.css"> 
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

<body onload="viewstudentList()">
             <div id="viewStudentListDiv" style="margin-bottom: 10px;display: none;">
                <table width="100%" border="0" cellspacing="0" cellpadding="0" id="tableId" ><thead class="bthead"><tr>
                    <th align="center"  id="stafffName" class="bth" >STAFFFIRSTNAME</th>
                    <th align="center"  id="stafflName" class="bth" >STAFFLASTNAME</th>
                    <th align="center"  id="subject" class="bth" >SUBJECT</th>
                    <th align="center"  id="mob" class="bth" >PHONE</th>
                    <th align="center"  id="address" class="bth" >ADDRESS</th>
                </tr>
                </thead>
            <tr>
        	
       <!--   <td align="left" class="btd"><div class="tableDate" >${theStaff.staffId}</div></td> -->
	    
                
            </tr>
            </table>

                <!-- <c:forEach items="${calendarList}" var="eventGroup" >
		<option value="${obj.stafffId}">${eventGroup.calendarName}</option>
	</c:forEach> -->
            </div>            
            <input type = "hidden" id="studentId" value=0 />
</body>
</html>