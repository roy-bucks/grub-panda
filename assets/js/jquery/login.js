$(document).ready(function(){

    const validation = ()=>{

        let validate = true; 

        if(validator.isEmpty($(".user-pass").val())){
            validate = false;
            $(".user-pass").addClass("is-invalid");
        }
        else{
            $(".user-pass").removeClass("is-invalid");
        }

        if(! validator.isEmail($(".user-email").val())){
            validate = false;
            $(".user-email").addClass("is-invalid");
        }
        else{
            $(".user-email").removeClass("is-invalid");
        }

        return validate;
    }

    const login = () => {

        $.post("/api/login", {
            email: $(".user-email").val(), 
            pass: $(".user-pass").val()
        }, (res)=>{
            if(res.success){
                alert(res.data.message);
            }
            else{
                $(".error-modal").modal("show");
                $(".error-message").text(res.data.message);
            }
        })
    }

    $(".signin").click(function(){
        let isvalid = validation(); 
        if(isvalid) login();
    })


    $(".rqrd").keyup(function(){
        $(this).removeClass("is-invalid");
    })
})