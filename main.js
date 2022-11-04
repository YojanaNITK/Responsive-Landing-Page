function validation(){
    var name=document.getElementById('exampleInput1').value;
    var number=document.getElementById('exampleInputnumber1').value;
    var email=document.getElementById('exampleInputEmail1').value;
    var password=document.getElementById('exampleInputPassword1').value;
    var cpassword=document.getElementById('exampleInputPassword2').value;

    var namecheck= /^[A-Za-z ]{3,}$/;
    var emailcheck= /^[A-Za-z0-9._]{3,}@[A-Za-z0-9]{3,}[.]{1}[A-Za-z]{2,6}$/;
    var numbercheck=/^[6789][0-9]{9}$/;
    var passwordcheck=/^[A-Za-z0-9_!@#$%^&*]{8,16}$/;

    if (namecheck.test(name)){
        document.getElementById('errorname').innerHTML='';
    }
    else{
        document.getElementById('errorname').innerHTML='Use only alphabets';
        return false;
    }
    if (emailcheck.test(email)){
        document.getElementById('error-email').innerHTML='';
    }
    else{
        document.getElementById('error-email').innerHTML='Use valid syntax. Eg:xyz@abc.com ';
        return false;
    }
    if (numbercheck.test(number)){
        document.getElementById('error-number').innerHTML='';
    }
    else{
        document.getElementById('error-number').innerHTML='Use 10 digit valid mobile number';
        return false;
    }
    if (passwordcheck.test(password)){
        document.getElementById('error-password').innerHTML='';
    }
    else{
        document.getElementById('error-password').innerHTML='Use alphabets,numbers,special characters. Min:8 Max:16';
        return false;
    }
    if (cpassword.match(password)){
        document.getElementById('error-cpassword').innerHTML='';
    }
    else{
        document.getElementById('error-cpassword').innerHTML="Password doesn't match";
        return false;
    }


    


}