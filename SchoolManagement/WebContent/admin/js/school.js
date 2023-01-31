function validateLoginForm() {
    var userName = document.getElementById("username").value;
    var passWord = document.getElementById("password").value;
    if ((userName == null || userName == "") && (passWord == null || passWord == "")) {
        alert("please Enter userName & Password");
    } else {
        if (userName == null || userName == "") {
            alert("Please Enter userName");
        } else {
            if (passWord == null || passWord == "") {
                alert("Please Enter the password");
            } else {
                var url = window.location.origin + '/school/login.do?userName=' + userName + "&passWord=" + passWord

                $.ajax({
                    url: url,
                    type: "POST",

                    success: function (response) {
                        alert(response.data);
                        window.location.href = "admin.jsp";
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

function openAddStudentForm() {
    resetpage();
    document.getElementById("addstudentDiv").style.display = "block";
}
function openAddStaffForm() {
    resetpage();
    document.getElementById("addstaffDiv").style.display = "block";

}
function viewStaffList() {
    resetpage();    
    getAllStaff();
}
function viewStudentList() {
    resetpage();
    getAllStudent();    
}
function logout() {
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
function saveStaff(event) {
    event.preventDefault();

    var validationFlag = true;

    var formNameValue = document.getElementById("staffId") != null && document.getElementById("staffId").value != 0 ? "editStaff" : "addStaff";
    if (!checkMandatoryFields(formNameValue)) {

        validationFlag = false;
    }

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
            "modifiedBy": 2
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
            "createdBy": 1
        }

    }
    if (validationFlag) {
        var url = window.location.origin + '/school/staff.do'
        $.ajax({
            url: url,
            type: document.getElementById("staffId") != null && document.getElementById("staffId").value != 0 ? "PUT" : "POST",
            data: JSON.stringify(data),
            contentType: "application/json",
            success: function (response) {
                alert(response.data);
                resetpage();

            },
            error: function (a) {
                alert("error")
                console.log(a)
            }
        });
    } else {
        alert("Input Fields Should not be empty!...")
    }
}
function saveStudent(event) {
    event.preventDefault();
    var validationFlag = true;

    var formNameValue = document.getElementById("studentId") != null && document.getElementById("studentId").value != 0 ? "editStudent" : "addStudent";
    if (!checkMandatoryFields(formNameValue)) {

        validationFlag = false;
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
            "modifiedBy": 2
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
            "createdBy": 1
        }
    }
    if (validationFlag) {
        var url = window.location.origin + '/school/student.do'
        $.ajax({
            url: url,
            type: document.getElementById("studentId") != null && document.getElementById("studentId").value != 0 ? "PUT" : "POST",
            data: JSON.stringify(data),
            contentType: "application/json",
            success: function (response) {
                alert(response.data);
                resetpage();

            },
            error: function (a) {
                alert("error")
                console.log(a)
            }
        });
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
                    trHTML += '<td align="center" class="btd"><i class="fa fa-remove" style="font-size:28px;color:red" onclick="confirmPopup(' + jsonObj.staffId + ')"></i></td>';
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
                    trHTML += '<td align="center" class="btd"><i class="fa fa-remove" style="font-size:28px;color:red" onclick="confirmPopup(' + jsonObj.studentId + ')"></i></td>';
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
}
function studentEdit(index) {
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
}
function resetpage() {
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