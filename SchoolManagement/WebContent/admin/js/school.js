
function validateLoginForm() {
    var userName = document.getElementById("username").value;
    var passWord = document.getElementById("password").value;
    var loginTypeFlag = localStorage.getItem("logintypeflag");
    var userId = localStorage.getItem("userId");
    if (loginTypeFlag != null && loginTypeFlag != "") {

        if ((userName == null || userName == "") && (passWord == null || passWord == "")) {
            alert("please Enter userName & Password");
        } else {
            if (userName == null || userName == "") {
                alert("Please Enter userName");
            } else {
                if (passWord == null || passWord == "") {
                    alert("Please Enter the password");
                } else {
                    var url = window.location.origin + '/school/login.do?userName=' + userName + "&passWord=" + passWord + "&loginTypeFlag=" + loginTypeFlag

                    $.ajax({
                        url: url,
                        type: "POST",
                        success: function (response) {
                            alert(response.data)
                            console.log(response.status);
                            if (response.status == "failure") {
                                return false;
                            } else {
                                localStorage.setItem("userId", userName);
                                localStorage.setItem("userloginId", response.userloginId)
                                if (loginTypeFlag == 1) {
                                    window.location.href = "admin.jsp";

                                }
                                else if (loginTypeFlag == 2) {
                                    window.location.href = "Staff.jsp";
                                }
                                else if (loginTypeFlag == 3) {
                                    window.location.href = "Student.jsp";
                                }
                            }

                        },
                        error: function (a) {
                            alert("Sorry somthing failed to login")
                            console.log(a)
                        }
                    });

                }
            }

        }
    }
    else {
        window.location.href = "schoolHome.jsp";
    }
}
function loginpagesession() {
    var logintypeflag = localStorage.getItem("logintypeflag");
    var logintitle = localStorage.getItem("logintitle");
    document.getElementById("logintitle").innerHTML = logintitle;
    if (logintypeflag == "" || logintypeflag == null || logintypeflag == 0) {
        window.location.href = "schoolHome.jsp";
    }
}
function sessionvalidate() {
    var userId = localStorage.getItem("userId");
    if (userId == "" || userId == null || userId == 0) {
        window.location.href = "schoolHome.jsp";
    }
}
function openAddStudentForm() {
    resetpageAdmin();
    document.getElementById("addstudentDiv").style.display = "block";
}
function openAddStaffForm() {
    resetpageAdmin();
    document.getElementById("addstaffDiv").style.display = "block";

}
function viewStaffList() {
    var loginTypeFlag = localStorage.getItem("logintypeflag");
    if (loginTypeFlag == 1) {
        resetpageAdmin();
    } else if (loginTypeFlag == 2) {
        resetpageStaff();
    }
    getAllStaff();
}
function viewStudentList() {
    var loginTypeFlag = localStorage.getItem("logintypeflag");
    if (loginTypeFlag == 1) {
        resetpageAdmin();
    } else if (loginTypeFlag == 2) {
        resetpageStaff();
    } else {

    }
    getAllStudent();
}
function logout() {
    localStorage.removeItem("logintypeflag");
    localStorage.removeItem("userId");
    localStorage.removeItem("userloginId");
    localStorage.removeItem("logintitle");
    window.location.href = "schoolHome.jsp";
}


function checkMandatoryFields(formName) {
    var isFormValid = true;
    $("#" + formName + ">div>input").each(function () {
        var id = $(this)[0].id;
        var str = id;

        if ($.trim($(this).val()).length === 0) {

            isFormValid = false;
        }
    });
    return isFormValid;
}

function phoneNumberValidationstudent() {

    var resultFlag = true;
    var phoneValue = document.getElementById("studentId") != null && document.getElementById("studentId").value != 0 ? "studentMob1" : "studentMob";
    if (document.getElementById(phoneValue).value.length != 0) {
        if (!validateFirstCharacter(document.getElementById(phoneValue))) {
            alert("First Value should not be space..")
            resultFlag = false;
        }
        else {
            if (!validatePhoneNumber(document.getElementById(phoneValue))){
                alert("Please Enter Correct Mobile Number format (10 digit numbers only)");
            resultFlag = false;
            }
        }

    }

    return resultFlag;

}
function emailIdValidationstudent() {
   
    var resultFlag = true;
    var emailIdValue = document.getElementById("studentId") != null && document.getElementById("studentId").value != 0 ? "studentMail1" : "studentMail";
    if (document.getElementById(emailIdValue).value.length != 0) {
        if (!validateFirstCharacter(document.getElementById(emailIdValue))) {
            alert("First Value should not be space..")
            resultFlag = false;
        }
        else {
            if (!validateEmail(document.getElementById(emailIdValue))) {
                alert("Please enter validemailId (Ex:ram123@gmail.com)")
                resultFlag = false;
            }
        }

    }
    return resultFlag;
}
function phoneNumberValidationstaff() {
 
    var resultFlag = true;
    var phoneValue = document.getElementById("staffId") != null && document.getElementById("staffId").value != 0 ? "staffMob1" : "staffMob";
    if (document.getElementById(phoneValue).value.length != 0) {
        if (!validateFirstCharacter(document.getElementById(phoneValue))) {
            alert("First Value should not be space..")
            resultFlag = false;
        }
        else {
            if (!validatePhoneNumber(document.getElementById(phoneValue))){
                alert("Please Enter Correct Mobile Number format (10 digit numbers only)");
            resultFlag = false;
            }
        }

    }

    return resultFlag;

}
function emailIdValidationstaff() {
 
    var resultFlag = true;
    var emailIdValue = document.getElementById("staffId") != null && document.getElementById("staffId").value != 0 ? "staffMail1" : "staffMail";
    if (document.getElementById(emailIdValue).value.length != 0) {
        if (!validateFirstCharacter(document.getElementById(emailIdValue))) {
            alert("First Value should not be space..")
            resultFlag = false;
        }
        else {
            if (!validateEmail(document.getElementById(emailIdValue))) {
                alert("Please enter validemailId (Ex:ram123@gmail.com)")
                resultFlag = false;
            }
        }

    }
    return resultFlag;
}

function saveStaff(event) {
    event.preventDefault();
    var loginTypeFlag = localStorage.getItem("logintypeflag");
    var validationFlag = true;
    var filedInputFlag=true;
    console.log("start"+filedInputFlag)
    var formNameValue = document.getElementById("staffId") != null && document.getElementById("staffId").value != 0 ? "editStaff" : "addStaff";
    if (!checkMandatoryFields(formNameValue)) {
        validationFlag = false;
    }else{
        if (!phoneNumberValidationstaff()) {
            filedInputFlag = false;
            console.log("phone"+filedInputFlag)
        }else{
            filedInputFlag=true;
            console.log("else"+filedInputFlag)
            if (!emailIdValidationstaff()) {
                filedInputFlag = false;
                console.log("mail"+filedInputFlag)
            }
           
        }

    }
    console.log("final"+filedInputFlag)
   

    var data = "";
    if (document.getElementById("staffId") != null && document.getElementById("staffId").value != 0) {
        data = {
            "subject": document.getElementById("subject1").value,
            "staffId": parseInt(document.getElementById("staffId").value),
            "firstName": document.getElementById("staffFname1").value,
            "lastName": document.getElementById("staffLname1").value,
            "address": document.getElementById("staffAddress1").value,
            "phone": document.getElementById("staffMob1").value,
            "emailId": document.getElementById("staffMail1").value,
            "deleteFlag": 0,
            "createdBy": document.getElementById("createdBy").value,
            "createdDate": document.getElementById("createdDate").value,
            "modifiedBy": localStorage.getItem("userloginId")
        }


    } else {
        data = {
            "subject": document.getElementById("subject").value,
            "firstName": document.getElementById("staffFname").value,
            "lastName": document.getElementById("staffLname").value,
            "address": document.getElementById("staffAddress").value,
            "phone": document.getElementById("staffMob").value,
            "emailId": document.getElementById("staffMail").value,
            "deleteFlag": 0,
            "createdBy": localStorage.getItem("userloginId")
        }

    }
    if (validationFlag) {
        if(filedInputFlag){
        var url = window.location.origin + '/school/staff.do'
        $.ajax({
            url: url,
            type: document.getElementById("staffId") != null && document.getElementById("staffId").value != 0 ? "PUT" : "POST",
            data: JSON.stringify(data),
            contentType: "application/json",
            success: function (response) {
                alert(response.data);
                if (loginTypeFlag == 1) {
                    resetpageAdmin();
                } else if (loginTypeFlag == 2) {
                    resetpageStaff();
                }
                getAllStaff();
            },
            error: function (a) {
                alert("error")
                console.log(a)
            }
        });
    }
    } else {
        alert("Input Fields Should not be empty!...")
    }
}
function saveStudent(event) {
    event.preventDefault();
    var loginTypeFlag = localStorage.getItem("logintypeflag");
    var validationFlag = true;
var filedInputFlag=true;
    var formNameValue = document.getElementById("studentId") != null && document.getElementById("studentId").value != 0 ? "editStudent" : "addStudent";
    if (!checkMandatoryFields(formNameValue)) {
        validationFlag = false;
    }else{
        if (!phoneNumberValidationstudent()) {
            filedInputFlag = false;
        }else{
            filedInputFlag=true;
            if (!emailIdValidationstudent()) {
                filedInputFlag = false;
            }
           
        }
    }
  
    

    var data = "";
    if (document.getElementById("studentId") != null && document.getElementById("studentId").value != 0) {
        data = {
            "studentId": parseInt(document.getElementById("studentId").value),
            "className": document.getElementById("className1").value,
            "firstName": document.getElementById("studentFname1").value,
            "lastName": document.getElementById("studentLname1").value,
            "address": document.getElementById("studentAddress1").value,
            "phone": document.getElementById("studentMob1").value,
            "emailId": document.getElementById("studentMail1").value,
            "deleteFlag": 0,
            "createdBy": document.getElementById("createdBy").value,
            "createdDate": document.getElementById("createdDate").value,
            "modifiedBy": localStorage.getItem("userloginId")
        }
    } else {
        data = {
            "className": document.getElementById("className").value,
            "firstName": document.getElementById("studentFname").value,
            "lastName": document.getElementById("studentLname").value,
            "address": document.getElementById("studentAddress").value,
            "phone": document.getElementById("studentMob").value,
            "emailId": document.getElementById("studentMail").value,
            "deleteFlag": 0,
            "createdBy": localStorage.getItem("userloginId")
        }
    }
    if (validationFlag) {
        if(filedInputFlag){
        var url = window.location.origin + '/school/student.do'
        $.ajax({
            url: url,
            type: document.getElementById("studentId") != null && document.getElementById("studentId").value != 0 ? "PUT" : "POST",
            data: JSON.stringify(data),
            contentType: "application/json",
            success: function (response) {
                alert(response.data);
                if (loginTypeFlag == 1) {
                    resetpageAdmin();
                } else if (loginTypeFlag == 2) {
                    resetpageStaff();
                }
                getAllStudent();
            },
            error: function (a) {
                alert("error")
                console.log(a)
            }
        });
    }
    } else {
        alert("Input Fields Should not be empty!...")
    }
}

var responseArray = [];
function getAllStaff() {
    var trHTML = '';
    trHTML += '<h1 id="viewTitle">STAFF LIST </h1>';
    trHTML += '<table id="result" class="stripe btable schooltable"  style="border-collapse:collapse;"><thead class="sthead"><tr>';
    trHTML += '<th align="center"  id="staffFName" class="bth" >StaffFirstName</th>';
    trHTML += '<th align="center"  id="staffFLame" class="bth">StaffLastName</th>';
    trHTML += '<th align="center"  id="Subject" class="bth">Subject</th>';
    trHTML += '<th align="center"  id="StaffPhone" class="bth">Phone</th>';
    trHTML += '<th align="center"  id="staffEmailId" class="bth">Email Id</th>';
    trHTML += '<th align="center"  id="staffaddress" class="bth">Address</th>';
    trHTML += '<th align="center"  id="staffEdit" class="bth">Edit</th>';
    trHTML += '<th align="center"  id="staffDelete" class="bth">Delete</th>';

    trHTML += '</tr></thead>';
    var url = window.location.origin + '/school/staff.do'
    $.ajax({
        url: url,
        type: "GET",
        success: function (response) {
            if (response.status == 'success') {
                responseArray = response.data;

                for (var i = 0; i < responseArray.length; i++) {
                    var jsonObj = responseArray[i];
                    trHTML += '<tr>';
                    trHTML += '<td align="left" class="btd"><div class="tableDate" >' + jsonObj.firstName + '</div></td>';
                    trHTML += '<td align="left" class="btd"><div class="tableDate">' + jsonObj.lastName + '</div></td>';
                    trHTML += '<td align="left" class="btd"><div class="tableDate">' + jsonObj.subject + '</div></td>';
                    trHTML += '<td align="left" class="btd"><div class="tableDate">' + jsonObj.phone + '</div></td>';
                    trHTML += '<td align="left" class="btd"><div class="tableDate">' + jsonObj.emailId + '</div></td>';
                    trHTML += '<td align="left" class="btd"><div class="tableDate">' + jsonObj.address + '</div></td>';
                    trHTML += '<td align="center" class="btd"><i  class=" fa fa-pencil" style="font-size:28px;color:green" onclick="staffEdit(' + i + ')"></i></td>';
                    trHTML += '<td align="center" class="btd"><i class="fa fa-remove" style="font-size:28px;color:red" onclick="confirmPopupStaff(' + jsonObj.staffId + ')"></i></td>';
                    trHTML += ' </tr>';
                }

                document.getElementById("viewStaffListDiv").style.display = 'block';
                document.getElementById("viewStaffListDiv").innerHTML = trHTML;

            } else {
                showSuccessAlert(response.data);
            }
        },
        error: function (a) {
            console.log(a)
        }
    });
}
var responseArray2 = [];
function getAllStudent() {
    var trHTML = '';
    trHTML += '<h1 id="viewTitle">STUDENT LIST </h1>';
    trHTML += '<table id="result" class="stripe btable schooltable"  style="border-collapse:collapse;"><thead class="sthead"><tr>';
    trHTML += '<th align="center"  id="staffFName" class="bth" >StudentFirstName</th>';
    trHTML += '<th align="center"  id="staffFLame" class="bth">StudentLastName</th>';
    trHTML += '<th align="center"  id="Subject" class="bth">ClassName</th>';
    trHTML += '<th align="center"  id="StaffPhone" class="bth">Phone</th>';
    trHTML += '<th align="center"  id="staffEmailId" class="bth">Email Id</th>';
    trHTML += '<th align="center"  id="staffaddress" class="bth">Address</th>';
    trHTML += '<th align="center"  id="staffEdit" class="bth">Edit</th>';
    trHTML += '<th align="center"  id="staffDelete" class="bth">Delete</th>';

    trHTML += '</tr></thead>';
    var url = window.location.origin + '/school/student.do'
    $.ajax({
        url: url,
        type: "GET",
        success: function (response) {
            if (response.status == 'success') {
                responseArray2 = response.data;

                for (var i = 0; i < responseArray2.length; i++) {

                    var jsonObj = responseArray2[i];

                    trHTML += '<tr>';
                    trHTML += '<td align="left" class="btd"><div class="tableDate" >' + jsonObj.firstName + '</div></td>';
                    trHTML += '<td align="left" class="btd"><div class="tableDate">' + jsonObj.lastName + '</div></td>';
                    trHTML += '<td align="left" class="btd"><div class="tableDate">' + jsonObj.className + '</div></td>';
                    trHTML += '<td align="left" class="btd"><div class="tableDate">' + jsonObj.phone + '</div></td>';
                    trHTML += '<td align="left" class="btd"><div class="tableDate">' + jsonObj.emailId + '</div></td>';
                    trHTML += '<td align="left" class="btd"><div class="tableDate">' + jsonObj.address + '</div></td>';
                    trHTML += '<td align="center" class="btd"><i  class="fa fa-pencil" style="font-size:28px;color:green" onclick="studentEdit(' + i + ')"></i></td>';
                    trHTML += '<td align="center" class="btd"><i class="fa fa-remove" style="font-size:28px;color:red" onclick="confirmPopupStudent(' + jsonObj.studentId + ')"></i></td>';
                    trHTML += ' </tr>';
                }

                document.getElementById("viewStudentListDiv").style.display = 'block';
                document.getElementById("viewStudentListDiv").innerHTML = trHTML;

            } else {
                showSuccessAlert(response.data);
            }
        },
        error: function (a) {
            console.log(a)
        }
    });
}

function staffEdit(index) {
    var loginTypeFlag = localStorage.getItem("logintypeflag");
    if (loginTypeFlag == 1) {
        document.getElementById("viewStaffListDiv").style.display = 'none';
        document.getElementById("editstaffDiv").style.display = 'block';
        document.getElementById("staffFname1").value = responseArray[index].firstName;
        document.getElementById("staffLname1").value = responseArray[index].lastName;
        document.getElementById("subject1").value = responseArray[index].subject;
        document.getElementById("staffMob1").value = responseArray[index].phone;
        document.getElementById("staffMail1").value = responseArray[index].emailId;
        document.getElementById("staffAddress1").value = responseArray[index].address;
        document.getElementById("staffId").value = responseArray[index].staffId;
        document.getElementById("createdBy").value = responseArray[index].createdBy;
        document.getElementById("createdDate").value = responseArray[index].createdDate;
    } else {
        alert("Sorry You Don't have privillage for Edit Process...");
        return false;
    }
}
function studentEdit(index) {
    var loginTypeFlag = localStorage.getItem("logintypeflag");
    if (loginTypeFlag == 1 || loginTypeFlag == 2) {
        document.getElementById("viewStudentListDiv").style.display = 'none';
        document.getElementById("editstudentDiv").style.display = 'block';
        document.getElementById("studentId").value = responseArray2[index].studentId;
        document.getElementById("className1").value = responseArray2[index].className;
        document.getElementById("studentFname1").value = responseArray2[index].firstName;
        document.getElementById("studentLname1").value = responseArray2[index].lastName;
        document.getElementById("studentAddress1").value = responseArray2[index].address;
        document.getElementById("studentMob1").value = responseArray2[index].phone;
        document.getElementById("studentMail1").value = responseArray2[index].emailId;
        document.getElementById("createdBy").value = responseArray2[index].createdBy;
        document.getElementById("createdDate").value = responseArray2[index].createdDate;
    } else {
        alert("Sorry You Don't have privillage for Edit Process...");
        return false;
    }
}
function resetpageAdmin() {
    document.getElementById("addStudent").reset();
    document.getElementById("editStudent").reset();
    document.getElementById("addStaff").reset();
    document.getElementById("editStaff").reset();
    document.getElementById("addstudentDiv").style.display = "none";
    document.getElementById("editstudentDiv").style.display = "none";
    document.getElementById("addstaffDiv").style.display = "none";
    document.getElementById("editstaffDiv").style.display = "none";
    document.getElementById("viewStaffListDiv").style.display = "none";
    document.getElementById("viewStudentListDiv").style.display = "none";
    document.getElementById("staffId").value = "";
    document.getElementById("createdBy").value = "";
    document.getElementById("createdDate").value = "";

}
function resetpageStaff() {
    document.getElementById("editStudent").reset();
    document.getElementById("editstudentDiv").style.display = "none";
    document.getElementById("viewStaffListDiv").style.display = "none";
    document.getElementById("viewStudentListDiv").style.display = "none";
    document.getElementById("studentId").value = "";
    document.getElementById("createdBy").value = "";
    document.getElementById("createdDate").value = "";

}

function confirmPopupStaff(staffId) {
    var loginTypeFlag = localStorage.getItem("logintypeflag");
    if (loginTypeFlag == 1) {
        var text = "Are you sure want to delete staff?";
        if (confirm(text) == true) {
            var url = window.location.origin + '/school/staff.do?staffId=' + staffId

            $.ajax({
                url: url,
                type: "DELETE",
                success: function (response) {
                    alert(response.data);
                    getAllStaff();
                },
                error: function (a) {
                    console.log(a)
                }
            });
        } else {
            text = "You canceled!";
        }
    } else {
        alert("Sorry You Don't have privillage for Delete Process...");
        return false;
    }
}

function confirmPopupStudent(studentId) {
    var loginTypeFlag = localStorage.getItem("logintypeflag");
    if (loginTypeFlag == 1 || loginTypeFlag == 2) {
        var text = "Are you sure want to delete student?";
        if (confirm(text) == true) {
            var url = window.location.origin + '/school/student.do?studentId=' + studentId

            $.ajax({
                url: url,
                type: "DELETE",
                success: function (response) {
                    alert(response.data);
                    getAllStudent();
                },
                error: function (a) {
                    console.log(a)
                }
            });
        } else {
            text = "You canceled!";
        }
    } else {
        alert("Sorry You Don't have privillage for Delete Process...");
        return false;
    }
}
function validateFirstCharacter(obj) {
       var inputval = obj.value;
    if (obj.value.length > 0) {
        var ch = inputval.charAt(0);
        if (ch == " ") {

            return false;
        } else if (ch != "") {

            return true;
        }
    }
    if (obj.value.length == 0) {

        return true;
    }

    return true;
}

function validatePhoneNumber(obj) {
    var regex = /^\d\d\d\d\d\d\d\d\d\d$/;
    var regex1 = /^[0-9-]*$/;
    var phonelen = obj.value;
    if (phonelen.length > 0) {
        if (obj.value.match(regex)) {

            return true;
        } else {
            if (obj.value.match(regex1)) {

                return false;
            } else {

                return false;
            }
        }
    }

    return true;
}
/* function validateEmail(obj) {
    var mail = obj.value;
    if (mail.length <= 0) {
        return true;
    } else {
        var email = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var countAtTheRateSymbol = 0;
        for (var i = 0; i < mail.length; i++) {
            if (mail[i] == "@") {
                countAtTheRateSymbol++;
            }
        }
        if (countAtTheRateSymbol <= 1) {
            if (!(email.test(mail))) {

                return false;
            }
            return true;
        } else {
            return false;
        }
    }

} */
function validateEmail(inputText)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(inputText.value.match(mailformat))
{
return true;
}
else
{
return false;
}
}