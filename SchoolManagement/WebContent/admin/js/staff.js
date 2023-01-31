var webSocket;
// var acc = document.getElementsByClassName("accordion");
//             var i;

//             for (i = 0; i < acc.length; i++) {
//             acc[i].addEventListener("click", function() {
//                 this.classList.toggle("active");
//                 var panel = this.nextElementSibling;
//                 if (panel.style.display === "block") {
//                 panel.style.display = "none";
//                 } else {
//                 panel.style.display = "block";
//                 }
//             });
//             }
$(function () {
    // $( "#accordion" ).accordion();
    clientid = localStorage.getItem('bt');
    // webSocket = new WebSocket("wss://10.10.1.35/webnotification/webnotifier/"+clientid+'/notification');
    retry_connecting("ws://"+window.location.host+"/webnotification/webnotifier/"+clientid+'/notification');
    function retry_connecting(domain) {
        console.log(domain)
        webSocket = new WebSocket(domain);
        webSocket.onerror = function() {
            console.log('webSocket Error! Retrying...');
            setTimeout(function() {
                retry_connecting(domain);
            }, 100);
        };
        webSocket.onopen= function(){
            console.log("Connection Opened");
        }
    };
    webSocket.onmessage= function(msg){
        console.log(msg);
    }
    $("#code").keyup(function(){
        $("#code").val(this.value.match(/[0-9]*/));
    });
    
    if (document.getElementById('fromdate')) {
        $("#fromdate").datepicker();
        $('#fromdate').change(function () {
            $('#fromdateAlert').html("");
            $('#fromdate').removeClass("invalid");
        });
    }
    if (document.getElementById('todate')) {
        $("#todate").datepicker();
        $('#todate').change(function () {
            var fromDate = new Date($('#fromdate'));
            var toDate = new Date($('#todate'));
            if (fromDate > toDate) {
                $('#todateAlert').html("To date should not be less than From date");
                $('#todate').removeClass("valid");
                $('#todate').addClass("invalid");
                return false;
            } else {
                $('#todateAlert').html("");
                $('#todate').removeClass("invalid");
            }
        });
    }
    
    
});
function showAddStaffForm(){
    document.getElementById("emptycheck").style.display='none';
    document.getElementById('addStaffDiv').style.display='block';
    document.getElementById("viewStaffList").style.display='none';
    document.getElementById("addStaffButtonView").style.display='none';
}
function showListBackFromAdd(){
    fetAllStaff();
    removeSelectMandatory("addStaff");
    removeInputMandatory("addStaff");
    document.getElementById("addStaff").reset();
    document.getElementById("viewStaffList").style.display='block';
    document.getElementById("addStaffDiv").style.display='none';
    document.getElementById("addStaffButtonView").style.display='flex';
    document.getElementById("errorMessage").innerHTML=""
}
function removeSelectMandatory(formName){
     $("#" + formName + ">ul>li>select.required").each(function () {
        var id = $(this)[0].id;
        $(this).removeClass("invalid");
        $(this).removeClass("valid");
        $('#' + id).css('border', '');
        $('#' + id + 'Alert').html("");
    });
}
function removeInputMandatory(formName){
     $("#" + formName + ">ul>li>input.required").each(function () {
        var id = $(this)[0].id;
        $(this).removeClass("invalid");
        $(this).removeClass("valid");
        $('#' + id + 'Alert').html("");
    });
}
function checkMandatoryFields(formName){    
    var isFormValid = true;
     $("#" + formName + ">ul>li>input.required").each(function () {
        var id = $(this)[0].id;
        var str =id;
        var res = str.charAt(str.length-1);
        if ($.trim($(this).val()).length === 0) {
            $(this).removeClass("valid");
            $(this).addClass("invalid");
            var labeltext = $("label[for='" + id + "']").text();
            var labelValue = labeltext.replace(/\*$/, '');
            if(res==1){
                id=id.substring(0,id.length-1);                
                $('#' + id + '1Alert').html(id + " should not be empty!");
            }else{
                $('#' + id + 'Alert').html(id + " should not be empty!");
            }
           
            isFormValid = false;
        }else{
            $(this).removeClass("invalid");
            $(this).removeClass("valid");
             $('#' + id + 'Alert').html("");
        }
    });
     return isFormValid;
}
function checkFieldInputs(){
    var fieldInputFlag = true;
    
    var departmentIdValue = document.getElementById("staffId")!=null && document.getElementById("staffId").value!=0?"department1":"department";
    if(document.getElementById(departmentIdValue).value.length!=0){
        if(!validateFirstCharacter(document.getElementById(departmentIdValue)))
            fieldInputFlag = false;
        else{
            if(!validateAlphaNumeric(document.getElementById(departmentIdValue)))
                fieldInputFlag = false;
        }
        
    }
    var jobtitleIdValue = document.getElementById("staffId")!=null && document.getElementById("staffId").value!=0?"jobtitle1":"jobtitle";
    if(document.getElementById(jobtitleIdValue).value.length!=0){
        if(!validateFirstCharacter(document.getElementById(jobtitleIdValue)))
            fieldInputFlag = false;
        else{
            if(!validateAlphaNumeric(document.getElementById(jobtitleIdValue)))
             fieldInputFlag = false;
        }
        
    }
    var firstnameIdValue = document.getElementById("staffId")!=null && document.getElementById("staffId").value!=0?"firstname1":"firstname";
    if(document.getElementById(firstnameIdValue).value.length!=0){
        if(!validateFirstCharacter(document.getElementById(firstnameIdValue)))
            fieldInputFlag = false;
        else{
            if(!validateAlphaNumeric(document.getElementById(firstnameIdValue)))
            fieldInputFlag = false;
        }
          
    }
    var lastnameIdValue = document.getElementById("staffId")!=null && document.getElementById("staffId").value!=0?"lastname1":"lastname";
    if(document.getElementById(lastnameIdValue).value.length!=0){
        if(!validateFirstCharacter(document.getElementById(lastnameIdValue)))
            fieldInputFlag = false;
        else{
            if(!validateAlphaNumeric(document.getElementById(lastnameIdValue)))
            fieldInputFlag = false;
        }
        
    }
    // var addressIdValue = document.getElementById("staffId")!=null && document.getElementById("staffId").value!=0?"address1":"address";
    // if(document.getElementById(addressIdValue).value.length!=0){
    //     if(!validateFirstCharacter(document.getElementById(addressIdValue)))
    //         fieldInputFlag = false;
    //     else{
    //         if(!validateAlphaNumeric(document.getElementById(addressIdValue)))
    //         fieldInputFlag = false;
    //     }
        
    // }
    var phoneIdValue = document.getElementById("staffId")!=null && document.getElementById("staffId").value!=0?"phone1":"phone";
    if (document.getElementById(phoneIdValue).value != "" && document.getElementById(phoneIdValue).value.length != 0) {
        if (!validateFirstCharacter(document.getElementById(phoneIdValue)))
            fieldInputFlag = false;
        else {
            if (!validatePhoneNumber(document.getElementById(phoneIdValue))) {
                fieldInputFlag = false;
            }

        }
        
       
    }
    var emailIdValue = document.getElementById("staffId")!=null && document.getElementById("staffId").value!=0?"email1":"email";
    if(document.getElementById(emailIdValue).value.length!=0){
        if(!validateFirstCharacter(document.getElementById(emailIdValue)))
            fieldInputFlag = false;
        else{
            if(!validateEmail(document.getElementById(emailIdValue)))
             fieldInputFlag = false;
        }
        
    }

    //var staffCodeIdValue=document.getElementById("staffId")!=null && document.getElementById("staffId").value!=0?"code1":"code";
    var staffCodeIdValue=document.getElementById("code");
    if(staffCodeIdValue.value.length!=0){
        if(!staffCodeCheck(staffCodeIdValue))
            fieldInputFlag = false;        
    }
    return fieldInputFlag;
}
function saveStaff(event){
    
    $( "#firstname" ).trigger( "click" );
   var validationFlag = true;
   var code=true;
   var staffcode=document.getElementById("code1").value;
   var formNameValue = document.getElementById("staffId")!=null && document.getElementById("staffId").value!=0 ? "editStaffForm":"addStaff";
    if(!checkMandatoryFields(formNameValue)){        
        validationFlag = false;
    }
    if(!checkFieldInputs()){
        validationFlag =  false;
    }
 
    if(!validationFlag){
         $('#errorMessage').html("Please correct the input marked in red as per suggestions");
        $('#errorMessage').fadeIn(500, function () {
            $(this).fadeOut(3000);
        });
        return false;
    }
   
    event.preventDefault();
     var data = "";
    if(document.getElementById("staffId")!=null && document.getElementById("staffId").value!=0){
        console.log("1st loop")
         data = {
             "staffCode": document.getElementById("code1").value,
             "staffId": parseInt(document.getElementById("staffId").value),
             "department": document.getElementById("department1").value,
             "jobTitle": document.getElementById("jobtitle1").value,
             "firstName": document.getElementById("firstname1").value,
             "lastName": document.getElementById("lastname1").value,
             // "address" : document.getElementById("address1").value,
             "phone": document.getElementById("phone1").value,
             "emailId": document.getElementById("email1").value,
             "deleteFlag": 0,
             "createdBy": document.getElementById("createdBy").value,
             "createdDate": document.getElementById("createdDate").value,
             "modifiedBy": sessionStorage.getItem("userId")
         }
    }else{
        console.log("2 nd else");
         data = {
        "staffCode" : document.getElementById("code").value,
        "department" : document.getElementById("department").value,
        "jobTitle" : document.getElementById("jobtitle").value,
        "firstName" : document.getElementById("firstname").value,
        "lastName" : document.getElementById("lastname").value,
        // "address" : document.getElementById("address").value,
        "phone" : document.getElementById("phone").value,
        "emailId" : document.getElementById("email").value,
        "deleteFlag" : 0,
        "createdBy":sessionStorage.getItem("userId")
    }
}
   
    var url = window.location.origin+'/services/staff.do'
    // var url ="https://10.10.1.36/services/staff.do";
     $.ajax({
            url: url,
            type: document.getElementById("staffId")!=null && document.getElementById("staffId").value!=0 ?"PUT" : "POST",                
            data: JSON.stringify(data),
            contentType: "application/json",
            success:function(response) {    
                showSuccessAlert(response.data);
                if(document.getElementById("staffId")!=null){
                    document.getElementById("viewStaffList").style.display='block';
                    fetAllStaff();
                    document.getElementById("staffId").value=0;
                   
                }
            },
            error: function (a) {
                console.log(a)
            }
          });
}

var responseArray = [];
function fetAllStaff(){
    console.log("fetall")
    var allstaffview=document.getElementById("tab_01");
    console.log(newMessage.checked)
     var trHTML = '';
    trHTML += '<table id="report" class="stripe btable bridgeTreeTable" style="border-collapse:collapse;"><thead class="bthead"><tr>';
    trHTML += '<th align="center"  id="staffName" class="bth" >Name</th>';
    trHTML += '<th align="center"  id="staffCode" class="bth">Code</th>';
    trHTML += '<th align="center"  id="staffTitle" class="bth">Job Title</th>';
    trHTML += '<th align="center"  id="staffDepartment" class="bth">Department</th>';
    
    trHTML += '<th align="center"  id="staffPhone" class="bth">Phone</th>';
    trHTML += '<th align="center"  id="staffEmailId" class="bth">Email Id</th>';
    trHTML += '<th align="center"  id="staffEdit" class="bth">Edit</th>';
    trHTML += '<th align="center"  id="staffDelete" class="bth">Delete</th>';
   
    trHTML += '</tr></thead>';
    var url = window.location.origin+'/services/staff.do'
    // var url = 'https://10.10.1.36/services/staff.do';
     $.ajax({
            url: url,
            type: "GET",                
            success:function(response) {    
               if(response.status == 'success'){
                        responseArray = response.data;
                        console.log(responseArray.length+"length")
                        if(responseArray.length==0){              
                             
                            document.getElementById("emptycheck").style.display='block';
                       
                         }else{
                            document.getElementById("emptycheck").style.display='none';
                         }
                        console.log(responseArray)
                    for(var i=0; i<responseArray.length;i++){
                        
                        var jsonObj = responseArray[i];
                        var name = jsonObj.firstName + (jsonObj.lastName!=null && jsonObj.lastName!=""?", "+jsonObj.lastName:"")
                        trHTML += '<tr>';
                        trHTML += '<td align="left" class="btd"><div class="tableDate" >'+name+'</div></td>';
                        trHTML += '<td align="left" class="btd"><div class="tableDate">'+(jsonObj.staffCode!=null?jsonObj.staffCode:"")+'</div></td>';
                        trHTML += '<td align="left" class="btd"><div class="tableDate">'+jsonObj.jobTitle+'</div></td>';
                        trHTML += '<td align="left" class="btd"><div class="tableDate">'+jsonObj.department+'</div></td>';                       
                        trHTML += '<td align="left" class="btd"><div class="tableDate">'+jsonObj.phone+'</div></td>';
                        trHTML += '<td align="left" class="btd"><div class="tableDate">'+jsonObj.emailId+'</div></td>';
                        trHTML += '<td align="center" class="btd"><i  class="fa fa-book fa-lg" onclick="staffEdit(' + i + ')"></i></td>';
                        trHTML += '<td align="center" class="btd"><i class="fa fa-trash fa-lg" onclick="confirmPopup(' + jsonObj.staffId+","+jsonObj.staffProjActiveFlag +')"></i></td>';
                        trHTML += ' </tr>';
                    }
                    document.getElementById("editStaff").style.display='none';
                    document.getElementById("viewStaffList").style.display='block';
                    document.getElementById("addStaffButtonView").style.display='flex';                    
                    document.getElementById("viewStaffList").innerHTML = trHTML;                    
                    document.getElementById("editStaffForm").reset();
                    removeSelectMandatory("editStaffForm");
                    removeInputMandatory("editStaffForm")

               }else{
                showSuccessAlert(response.data);
               }
            },
            error: function (a) {
                console.log(a)
            }
      });
}


var responseArray2 = [];
function fetAssignedStaff(){
  
     var trHTML = '';
    trHTML += '<table id="report" class="stripe btable bridgeTreeTable" style="border-collapse:collapse;"><thead class="bthead"><tr>';
    trHTML += '<th align="center"  id="staffName" class="bth" >Name</th>';
    trHTML += '<th align="center"  id="staffCode" class="bth">Code</th>';
    trHTML += '<th align="center"  id="staffTitle" class="bth">Job Title</th>';
    trHTML += '<th align="center"  id="staffDepartment" class="bth">Department</th>';
    
    trHTML += '<th align="center"  id="staffPhone" class="bth">Phone</th>';
    trHTML += '<th align="center"  id="staffEmailId" class="bth">Email Id</th>';
 /*    trHTML += '<th align="center"  id="staffEdit" class="bth">Edit</th>'; */
    trHTML += '<th align="center"  id="staffDelete" class="bth">Delete</th>';
   
    trHTML += '</tr></thead>';
    var url = window.location.origin+'/services/staff.do'
    // var url = 'https://10.10.1.36/services/staff.do';
     $.ajax({
            url: url,
            type: "GET",                
            success:function(response) {    
               if(response.status == 'success'){
                        responseArray2 = response.data;
                        console.log(responseArray2.length+"length")
                        if(responseArray2.length==0){              
                             
                            document.getElementById("emptycheck").style.display='block';
                       
                         }else{
                            document.getElementById("emptycheck").style.display='none';
                         }
                        console.log(responseArray2)
                    for(var i=0; i<responseArray2.length;i++){
                       
                        var jsonObj = responseArray2[i];
                        var name = jsonObj.firstName + (jsonObj.lastName!=null && jsonObj.lastName!=""?", "+jsonObj.lastName:"")
                        if(jsonObj.staffProjActiveFlag==1){
                        trHTML += '<tr>';
                        trHTML += '<td align="left" class="btd"><div class="tableDate" >'+name+'</div></td>';
                        trHTML += '<td align="left" class="btd"><div class="tableDate">'+(jsonObj.staffCode!=null?jsonObj.staffCode:"")+'</div></td>';
                        trHTML += '<td align="left" class="btd"><div class="tableDate">'+jsonObj.jobTitle+'</div></td>';
                        trHTML += '<td align="left" class="btd"><div class="tableDate">'+jsonObj.department+'</div></td>';                       
                        trHTML += '<td align="left" class="btd"><div class="tableDate">'+jsonObj.phone+'</div></td>';
                        trHTML += '<td align="left" class="btd"><div class="tableDate">'+jsonObj.emailId+'</div></td>';
                      /*   trHTML += '<td align="center" class="btd"><i  class="fa fa-book fa-lg" onclick="staffEdit(' + i + ')"></i></td>'; */
                        trHTML += '<td align="center" class="btd"><i class="fa fa-trash fa-lg" onclick="confirmPopup(' + jsonObj.staffId+","+jsonObj.staffProjActiveFlag +')"></i></td>';
                        trHTML += ' </tr>';
                    }
                  
                    document.getElementById("viewStaffList").style.display='block';
                    document.getElementById("viewStaffList").innerHTML = trHTML;                    
                  
                }

               }else{
                showSuccessAlert(response.data);
               }
            },
            error: function (a) {
                console.log(a)
            }
      });
}

var view = 'viewAll';
var viewMessageList=[];
function staffEdit(index){
  
    document.getElementById("viewStaffList").style.display='none';
    document.getElementById("code1").value = responseArray[index].staffCode;
    document.getElementById("department1").value = responseArray[index].department;
    document.getElementById("jobtitle1").value = responseArray[index].jobTitle;
    document.getElementById("firstname1").value = responseArray[index].firstName;
    document.getElementById("lastname1").value = responseArray[index].lastName;
    // document.getElementById("address1").value = responseArray[index].address;
    document.getElementById("phone1").value = responseArray[index].phone;
    document.getElementById("email1").value = responseArray[index].emailId;
    document.getElementById("editStaff").style.display='block';
    document.getElementById("staffId").value = responseArray[index].staffId;
    document.getElementById("createdBy").value=responseArray[index].createdBy;
    document.getElementById("createdDate").value=responseArray[index].createdDate;
    document.getElementById("addStaffButtonView").style.display='none';
}
// function saveCustomer(event){
//     event.preventDefault();
//     var data = {
//         "businessName" : document.getElementById("businessName").value,
//         "businessAddress" : document.getElementById("businessAddress").value,
//         "businessPhone" : document.getElementById("phone").value,
//         "businessEmailId" : document.getElementById("emailId").value,
//         "websiteUrl" : document.getElementById("websiteurl").value,
//         "firstName" : document.getElementById("primaryFirstname").value,
//         "lastName" : document.getElementById("primaryLastname").value,
//         "primaryPhone" : document.getElementById("primaryPhone").value,
//         "primaryEmailId" : document.getElementById("primaryEmailId").value,
//         "billingFirstName" :document.getElementById("billingFirstName").value,
//         "billingLastName" : document.getElementById("billingLastName").value,
//         "billingPhone" : document.getElementById("billingPhone").value,
//         "billingEmailId" : document.getElementById("billingEmailId").value,
//         "displayFlag" : 1
//  }
//     // var url = window.location.origin+'/services/customer.do'
//     var url ="https://10.10.1.36/services/customer.do";
//      $.ajax({
//             url: url,
//             type: "POST",                
//             data: JSON.stringify(data),
//             contentType: "application/json",
//             success:function(response) {    
//                 showSuccessAlert(response.data);
//             },
//             error: function (a) {
//                 console.log(a)
//             }
//           });
// }

function staffCodeCheck(obj){

    for (var i = 0; i < responseArray.length; i++) {
        var jsonObj = responseArray[i];
        if (obj.value == jsonObj.staffCode) {
            addOrRemoveAlert("invalid", "valid", "Please staff code is must be unique not same to others.", obj);
            return false;
        } else {
            continue;
        }

    }
    addOrRemoveAlert("", "invalid", "", obj);
    return true;
}


function showFields(input){
    if(input == '1'){
        var x = document.getElementById("business");
        if (window.getComputedStyle(x).display === "none") {
            document.getElementById("business").style.display='block';
          }else
            document.getElementById("business").style.display='none';
    }else if(input == '2'){
        var x = document.getElementById("personal");
        if (window.getComputedStyle(x).display === "none") {
            document.getElementById("personal").style.display='block';
          }else
            document.getElementById("personal").style.display='none';
    }else{
        var x = document.getElementById("billing");
        if (window.getComputedStyle(x).display === "none") {
            document.getElementById("billing").style.display='block';
          }else
            document.getElementById("billing").style.display='none';
    }
}

function fetchClientDetailsSuccess(response) {
    if (response.data.length === 0) {
        document.getElementById("submitButton").disabled = true;
        $('#errorMessage').html("No Clients Available");
        return false;
    } else {
        var clientList = document.getElementById('clientList');
        clientList.innerHTML = "";
        if(!clientList.hasAttribute('multiple')){
            clientList.innerHTML += '<option value="" id="All" selected>All Clients</option>';
        }
        for (var i = 0; i < response.data.length; i++) {
            clientList.innerHTML += '<option value="' + response.data[i].id + '" id="' + response.data[i].id + '">' + response.data[i].name + '</option>';
        }
    }
}




function deleteStaff(staffId){
     var data = {
        "staffId" : staffId,
 }
    var url = window.location.origin+'/services/staff.do'
    // var url ="https://10.10.1.36/services/staff.do";
     $.ajax({
            url: url,
            type: "DELETE",                
            data: JSON.stringify(data),
            contentType: "application/json",
            success:function(response) {    
                showSuccessAlert(response.data);
                fetAllStaff();
            },
            error: function (a) {
                console.log(a)
            }
          });
}

function failureMethod(response) {
    document.getElementById('errorMessage').innerHTML = response.msg;
    $('#errorMessage').fadeIn(500, function () {
        $(this).fadeOut(3500);
    });
}



function showSuccessAlert(message) {
    document.getElementById('confirmPopup').innerHTML="";
    document.getElementById('confirmPopup').style.visibility = 'visible';
    document.getElementById('confirmPopup').style.opacity = '1';
    var successAlert = '';
    successAlert += '<div class="alertPopupBox flexAlignCenterJustifySpaceAround flexDirectionColumn">';
    successAlert += '<div class="alertMessage flexAlignCenterJustifyCenter SuccessMessage">' + message + '</div>';
    successAlert += '<div class="alertPopupAction flexAlignCenterJustifySpaceAround">';
    successAlert += '<div class="alertOkButton" onclick="closeAlertPopUp();" id="alertAccept">OK</div>';
    successAlert += '</div>';
    successAlert += '</div>';
   if(document.getElementById("addStaff")!=null){
        document.getElementById("addStaff").reset();
         removeSelectMandatory("addStaff");
        removeInputMandatory("addStaff");
        fetAllStaff();
        showListBackFromAdd();
    }      
    if(document.getElementById("editStaff")!=null){
         document.getElementById("editStaff").style.display='none';
        document.getElementById("editStaffForm").reset();
        removeSelectMandatory("editStaffForm");
        removeInputMandatory("editStaffForm")
    }
    document.getElementById('confirmPopup').innerHTML = successAlert;
}
function closeAlertPopUp() {
    document.getElementById('confirmPopup').style.visibility = 'hidden';
    document.getElementById('confirmPopup').style.opacity = '0';
}

function closeDeletePopup() {
    document.getElementById('confirmPopup').style.visibility = 'hidden';
    document.getElementById('confirmPopup').style.opacity = '0';
}
function confirmPopup(itemId,staffProjMapFlag) {    
  
    document.getElementById('confirmPopup').style.visibility = 'visible';
document.getElementById('confirmPopup').style.opacity = '1';
var fmHTML = '';
fmHTML += '<div id="confirmDelete">';
if(staffProjMapFlag ==1){
fmHTML += '<div class="popup" style="font-size:0.9em ; margin:0px auto 100px auto;">';
fmHTML += '<h2 style="font-size:0.9em bold;color:red;">Warning !</h2>';
fmHTML += '<a class="close" href="#" onclick="closeDeletePopup();"><i class="fa fa-times fa-lg"></i></a>';
fmHTML += '<div class="popupText flexAlignCenterJustifyCenter">Staff assigned to the project(s) will be removed</div>';
fmHTML += '<div class="popupButtons flexAlignCenterJustifySpaceAround" style="width:50%;margin:auto;">';
}else{
    fmHTML += '<div class="popup" style="font-size:0.9em;margin:0px auto 100px auto;">';
    fmHTML += '<h2>Confirm</h2>';
    fmHTML += '<a class="close" href="#" onclick="closeDeletePopup();"><i class="fa fa-times fa-lg"></i></a>';
    fmHTML += '<div class="popupText flexAlignCenterJustifyCenter">Are you sure you want to delete?</div>';
    fmHTML += '<div class="popupButtons flexAlignCenterJustifySpaceAround" style="width:50%;margin:auto;">';
}
fmHTML += '<button type="submit" class="yesButton" value="Yes" onclick="deleteStaff(' + itemId + ');">Yes</button>';
fmHTML += '<button type="reset" class="noButton" value="No" onclick="closeDeletePopup();">No</button>';
fmHTML += '</div>';
fmHTML += '</div>';
fmHTML += '</div>';
document.getElementById('confirmPopup').innerHTML = fmHTML;
}

function validate() {
    var fromdate = document.getElementById('fromdate');
    var todate = document.getElementById('todate');
    var fromValue = $("#fromdate").val();
    var toValue = $("#todate").val();
    if (dateValidation(fromdate))
        if (dateValidation(todate))
            if (dateCompareValidation(fromdate, todate, fromValue, toValue)) {
                return true;
            } else {
                return false;
            }

}