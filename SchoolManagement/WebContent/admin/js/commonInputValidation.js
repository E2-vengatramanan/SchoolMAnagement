/**
 * Validation for all type of inputs
 */

//Validate for minimum characters

$(document).ready(function(){
    $('body').on('keydown','input,textarea',function(e){
        if(e.keyCode==13){
            return false;
        }
    });    
});

function checksession(){
    var userId=sessionStorage.getItem("userId");
    if (userId =="" || userId==null || userId==0){   
      location.replace(window.location.origin+"/services/admin/login/LogOut.admin")
    }
  }
function minimumCharacterValidation(obj, len, msg) {
    if (obj.value.length > 0) {
        if (obj.value.length < len) {
            addOrRemoveAlert("invalid", "valid", msg, obj);
            return false;
        }
    }
    if (obj.value.length == 0) {
        addOrRemoveAlert("", "valid", "", obj);
        addOrRemoveAlert("", "invalid", "", obj);
        return true;
    }
    addOrRemoveAlert("", "invalid", "", obj);
    return true;
}

//Validate for maximum characters
function maximumCharacterValidation(obj, len, msg) {
    if (obj.value.length > len) {
        addOrRemoveAlert("invalid", "valid", msg, obj);
        return false;
    }
    if (obj.value.length == 0) {
        addOrRemoveAlert("", "valid", "", obj);
        addOrRemoveAlert("", "invalid", "", obj);
        return true;
    }
    addOrRemoveAlert("", "invalid", "", obj);
    return true;
}

//Validation for empty String
function validateEmptyString(obj, msg) {
    if (obj.value.length == 0) {
        addOrRemoveAlertMandatory("invalid", "valid", msg, obj);
        return false;
    }
    addOrRemoveAlert("", "invalid", "", obj);
    return true;
}

//Vaidation for first character as space
function validateFirstCharacter(obj) {
    var inputval = obj.value;
    if (obj.value.length > 0) {
        var ch = inputval.charAt(0);
        if (ch == " ") {
            addOrRemoveAlert("invalid", "valid", "<span>First character should not be space!</span>", obj);
            return false;
        }else if (ch != "") {
            addOrRemoveAlert("", "invalid", "", obj);
            return true;
        }
    }
    if (obj.value.length == 0) {
        addOrRemoveAlert("", "valid", "", obj);
        addOrRemoveAlert("", "invalid", "", obj);
        return true;
    }
    addOrRemoveAlert("", "invalid", "", obj);
    return true;
}

//validate for certain special characters
function validateSpecialCharacter(obj) {
    //var regex = new RegExp("^[a-zA-Z0-9 !@#$%\&*-_\)\(]+$");

    var regex = /^[\w !@#$%*'_.-]+$/;

    if (obj.value.length > 0) {
        if (regex.test(obj.value)) {
            addOrRemoveAlert("", "invalid", "", obj);
            return true;
        } else {
            addOrRemoveAlert("invalid", "valid", "Only Alphanumeric and !@#$%*'_-. characters allowed.", obj);
            return false;
        }
    }
    addOrRemoveAlert("", "invalid", "", obj);
    return true;
}


//Validation for alphanumeric character
function validateAlphaNumeric(obj) {
    var regex = new RegExp("^[a-zA-Z0-9\\s]+$");
    var regex1=new RegExp("^[a-zA-Z\\s]+[0-9\\s]*$");
    if (obj.value.length > 0) {
        if(regex1.test(obj.value)){
        if (regex.test(obj.value)) {
            addOrRemoveAlert("", "invalid", "", obj);
            return true;
        } else {
            addOrRemoveAlert("invalid", "valid", "Only Alphanumeric characters allowed.", obj);
            return false;
        }
    }else{
        addOrRemoveAlert("invalid", "valid", "Starting Only A-Z or a-z values.", obj);
        return false;
    }
    }
    addOrRemoveAlert("", "invalid", "", obj);
    return true;
}

//Validation for numberic character only
function validateNumeric(obj) {
    var regex = new RegExp("^[0-9]+$");
    var name = obj.value;
    if (name.length > 0) {
        if (regex.test(obj.value)) {
            addOrRemoveAlert("", "invalid", "", obj);
            return true;
        } else {
            addOrRemoveAlert("invalid", "valid", "Only numeric characters allowed.", obj);
            return false;
        }
    }
    addOrRemoveAlert("", "invalid", "", obj);
    return true;
}

//Phone number validate 
function validatePhoneNumber(obj) {
    
    var regex = /^\d\d\d\d\d\d\d\d\d\d$/;
	var regex1 = /^[0-9-]*$/;
    var phonelen = obj.value;
    if (phonelen.length > 0) {
        if (obj.value.match(regex)) {
            addOrRemoveAlert("", "invalid", "", obj);
            return true;
        } else {
            if (obj.value.match(regex1)) {
                addOrRemoveAlert("invalid", "valid", "Enter Phone Number in requested format as xxxxxxxxxx(10digit).", obj);
                return false;
            } else {
                addOrRemoveAlert("invalid", "valid", "Only numeric characters allowed in xxxxxxxxxx(10digit) format.", obj);
                return false;
            }
        }
    }
    addOrRemoveAlert("", "invalid", "", obj);
    addOrRemoveAlert("", "valid", "", obj);
    return true;
}

//Validate password
function validatePassword(password, confirm_password) {
    var pwd = password.value;
    var cpwd = confirm_password.value;
    if (pwd.length > 0 && pwd != cpwd) {
        addOrRemoveAlert("invalid", "valid", "Passwords don't match", confirm_password);
        return false;
    }
    addOrRemoveAlert("", "invalid", "", confirm_password);
    return true;
}

//Validatre Email
function validateEmail(obj) {
    var mail = obj.value;
    if (mail.length <= 0) {
        addOrRemoveAlert("", "invalid", "", obj);
        addOrRemoveAlert("", "valid", "", obj);
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
                addOrRemoveAlert("invalid", "valid", "Please enter valid email id", obj);
                return false;
            }
            return true;
        } else {
            addOrRemoveAlert("invalid", "valid", "Please enter valid email id", obj);
            return false;
        }
    }
    addOrRemoveAlert("valid", "invalid", "", obj);
    return true;
}

//validation for muliple email address
function validateMultipleEmailAddress(mailval)
{
    var email = mailval.value;
    var lastChar = email[email.length - 1];

    if (lastChar == ",")
    {
        email = email.substring(0, email.length - 1);
        mailval.value = email;
    }

    var emailArray = email.split(",");
    for (var i = 0, l = emailArray.length; i < l; i++)
    {
        var mail = emailArray[i];
        var email = /^.+@.+\..{2,3}$/;
        if (!(email.test(mail)))
        {
            addOrRemoveAlert("invalid", "valid", "Please enter valid email id", mailval);
            //alert(msg);
            //mailval.focus();
            //mailval.select();
            return false;
        }
    }
    return true;
}

//Check for white spaces
function validateWhiteSpaces(obj) {
    var inputval = obj.value;
    for (var i = 0; i < inputval.length; i++) {
        var ch = inputval.charAt(i);
        if (i == 0 && (ch == " ")) {
            addOrRemoveAlert("invalid", "valid", "Whitespace not allowed.", obj);
            return false;
        }
        if (i != 0 && (ch == " ")) {
            addOrRemoveAlert("invalid", "valid", "Whitespace not allowed.", obj);
            return false;
        }
    }
    addOrRemoveAlert("", "invalid", "", obj);
    return true;
}

//print alert and hightlight the error field
function addOrRemoveAlert(add, remove, alertMsg, obj) {
    $(obj).removeClass(remove);
    if (obj.value.length > 0)
        $(obj).addClass(add);
    $('#' + obj.id + 'Alert').html(alertMsg);
}

function addOrRemoveAlertMandatory(add, remove, alertMsg, obj) {
    $(obj).removeClass(remove);
    $(obj).addClass(add);
    $('#' + obj.id + 'Alert').html(alertMsg);
}

//Check mandatory field has value
function checkFormMandatory(formName) {
    var isFormValid = true;
    // console.log( $("#" + formName + ">li>input.required"));
    // console.log($("#" + formName + ">li>textarea.required"));
    // console.log( $("#" + formName + ">li>select.required"));
    $("#" + formName + ">li>div>input.required").each(function () {
        var id = $(this)[0].id;
        if ($.trim($(this).val()).length === 0) {
            $(this).removeClass("valid");
            $(this).addClass("invalid");
            var labeltext = $("label[for='" + id + "']").text();
            var labelValue = labeltext.replace(/\*$/, '');
            $('#' + id + 'Alert').html(labelValue + " should not be empty!");
            isFormValid = false;
        }
    });
    $("#" + formName + ">li>div>textarea.required").each(function () {
        var id = $(this)[0].id;
        if ($.trim($(this).val()).length === 0) {
            $(this).removeClass("valid");
            $(this).addClass("invalid");
            var labeltext = $("label[for='" + id + "']").text();
            var labelValue = labeltext.replace(/\*$/, '');
            $('#' + id + 'Alert').html(""+labelValue + " should not be empty!");
            isFormValid = false;
        }
    });
    $("#" + formName + ">li>div>select.required").each(function () {
        var labeltext = '';
        var labelValue = '';
        if ($.trim($(this).val()).length === 0) {
            var id = $(this)[0].id;
            labeltext = $("label[for='" + id + "']").text();
            labelValue = labeltext.replace(/\*$/, '');
            $('#' + id + 'Alert').html("Please Select " + labelValue);
            $('#' + id).css('border', '2px solid red');
            isFormValid = false;
         } else if (this.id == "selectedOption") {
            if($(this).val().length > 20){
                $("#selectedOptionAlert").html("Maximum of 20 options can be selected");
                isFormValid = false;
            }               
        }else {
            var id = $(this)[0].id;
            labeltext = $("label[for='" + id + "']").text();
            labelValue = labeltext.replace(/\*$/, '');
            $('#' + id + 'Alert').html("");
            $('#' + id).css('border', '1px solid #ccc');
        }
    });

    if(formName==="resetPasswordForm"){
        $("#" + formName + ">ul>li>input.required").each(function () {
            var id = $(this)[0].id;
            if ($.trim($(this).val()).length === 0) {
                $(this).removeClass("valid");
                $(this).addClass("invalid");
                var labeltext = $("label[for='" + id + "']").text();
                var labelValue = labeltext.replace(/\*$/, '');
                $('#' + id + 'Alert').html(labelValue + " should not be empty!");
                isFormValid = false;
            }
        });
    }
    return isFormValid;
}

function checkFormMandatoryaddFamily(formName) {
    var isFormValid = true;
    $("#" + formName + ">li>div>input.required").each(function () {
        var id = $(this)[0].id;
        if ($.trim($(this).val()).length === 0) {
            $(this).removeClass("valid");
            $(this).addClass("invalid");
            var labeltext = $("label[for='" + id + "']").text();
            var labelValue = labeltext.replace(/\*$/, '');
            $('#' + id + 'Alert').html(labelValue + " should not be empty!");
            isFormValid = false;
        }
    });
    $("#" + formName + ">li>div>textarea.required").each(function () {
        var id = $(this)[0].id;
        if ($.trim($(this).val()).length === 0) {
            $(this).removeClass("valid");
            $(this).addClass("invalid");
            var labeltext = $("label[for='" + id + "']").text();
            var labelValue = labeltext.replace(/\*$/, '');
            $('#' + id + 'Alert').html(""+labelValue + " should not be empty!");
            isFormValid = false;
        }
    });
    $("#" + formName + ">li>div>select.required").each(function () {
        var labeltext = '';
        var labelValue = '';
        if ($.trim($(this).val()).length === 0) {
            var id = $(this)[0].id;
            labeltext = $("label[for='" + id + "']").text();
            labelValue = labeltext.replace(/\*$/, '');
            $('#' + id + 'Alert').html("Please Select " + labelValue);
            $('#' + id).css('border', '2px solid red');
            isFormValid = false;
         } else if (this.id == "selectedOption") {
            if($(this).val().length > 20){
                $("#selectedOptionAlert").html("Maximum of 20 options can be selected");
                isFormValid = false;
            }               
        }else {
            var id = $(this)[0].id;
            labeltext = $("label[for='" + id + "']").text();
            labelValue = labeltext.replace(/\*$/, '');
            $('#' + id + 'Alert').html("");
            $('#' + id).css('border', '1px solid #ccc');
        }
    });
    return isFormValid;
}

//Capitlalise first letter 
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}


function dateValidation(date) {
    var labeltext = $("label[for='" + date.id + "']").text();
     let Id = date.id;
    Id = Id.substring(0, Id.length - 1);//This line use for remove last character if it's 1 
    if (date.value == "") {
        addOrRemoveAlert("", "", "Please select " + date.id + ".", date);
        return false;
    }   
    addOrRemoveAlert("", "invalid", "", date);
    return true;
}
function dateCompareValidation(from, to, fromvalue, toValue) {
     var curDate = new Date();
    var fromDate = new Date(fromvalue);
    var toDate = new Date(toValue);
    /* if (curDate < fromDate) {
        addOrRemoveAlert("invalid", "valid", "From Date should not be greater than Current Date", from);
        return false;
    } */
   /*   if (fromDate < toDate) {
        addOrRemoveAlert("invalid", "valid", "To Date should not be greater than Current Date", to);
        return false;
    } */
    if (fromDate > toDate) {
        addOrRemoveAlert("", "", "To Date should not be less than From Date", to);
        return false;
    } else {
        addOrRemoveAlert("", "invalid", "", to);
        return true;
    }
 return true;
}

function maximumWordLengthValidation(maxSplitLen, obj) {
    var value = obj.value;
    var lineSplit = value.split("\n");
    for (var j = 0; j < lineSplit.length; j++) {
        var words = lineSplit[j].split(" ");
        for (var i = 0; i < words.length; i++)
        {
            if (maxSplitLen < words[i].length) {
                addOrRemoveAlert("invalid", "valid", "The value you entered is too long and without a space(max: " + maxSplitLen + "chars).\nPlease split into two words.", obj);
                return false;
            }
        }
    }
    return true;
}
function tabAlignment() {
    if (navigator.userAgent.indexOf('Mac') > 0) {
        $('.radio, .nestedTab').css({
            'top': '-26px'
        });
    } else {
        var isFirefox = typeof InstallTrigger !== 'undefined';
        if (isFirefox) {
            $('.radio, .nestedTab').css({
                'top': '-31px'
            });
        } else {
            $('.radio, .nestedTab').css({
                'top': '-29px'
            });
        }
    }

}







