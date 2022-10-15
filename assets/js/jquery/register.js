$(document).ready(function(){

    $(".success-modal").modal("show");


    const registerSetup = (userType)=>{
        if(userType == "Merchant"){
            $(".user-fname").addClass("d-none");
            $(".user-lname").addClass("d-none");
        }
        else{
            $(".user-merchant").addClass("d-none");
        }

        $(".user-selection-modal").modal('hide');
    }

    const validation = (userType)=>{
        let validate = true;
        if(userType == "Merchant"){
            if(validator.isEmpty($(".user-merchant").val())){
                validate = false;
                $(".user-merchant").addClass("is-invalid");
            }
            else{
                $(".user-merchant").removeClass("is-invalid");
            }
        }
        else{
            $(".input-validate").each(function(){
                if(validator.isEmpty($(this).val())){
                    validate = false;
                    $(this).addClass("is-invalid"); 
                }
                else{
                    $(this).removeClass("is-invalid")
                }
            })
        }

        if(! validator.isEmail($(".user-email").val())){
            validate = false;
            $(".user-email").addClass("is-invalid");
        }
        else{
            $(".user-email").removeClass("is-invalid");
        }

        if(validator.isEmpty($(".user-pass").val())){
            validate = false;
            $(".user-pass").addClass("is-invalid");
        }
        else{
            $(".user-pass").removeClass("is-invalid");
        }
        return validate;
    }

    const signupProcess = (userType)=>{

        let userData = {};
        
        if(userType == "Merchant"){
            userData = {
                fname: $(".user-merchant").val(), 
                lname: "",
                email: $(".user-email").val(), 
                pass: $(".user-pass").val(),
                userType: userType
            }
        }
        else{
            userData = {
                lname: $(".user-lname").val(),
                fname: $(".user-fname").val(), 
                email: $(".user-email").val(), 
                pass: $(".user-pass").val(),
                userType: userType
            }
        }


       $.post("/api/register", {
         userData,
       }, (res)=>{
            if(res.success){
                $(".success-modal").modal("show")
            }
            else{
                $(".error-message").text(res.message);
                $(".error-modal").modal("show")

            }
       })
    }






    let userSelected = ''; 

    $(".user-selection-modal").modal('show');
    $(".user-selection").click(function(){
        $(this)
            .addClass("border-primary")
            .siblings(".user-selection")
            .removeClass("border-primary");
        $(".user-select-btn")
            .removeClass("disabled");
        
        userSelected = $(this).children("p").text();
    })

    $(".rqrd").keyup(function(){
        $(this).removeClass("is-invalid");
    })



    $(".user-select-btn").click(function(){
        registerSetup(userSelected);
    })

    $(".signup").click(function(){
        let valid = validation(userSelected);
        if(valid){
            signupProcess(userSelected);
        }
    })
})
