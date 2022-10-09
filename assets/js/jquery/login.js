$(document).ready(function(){


    



    function submitLogin(){

        let user_name = $(".username").val(); 
        let pass = $(".password").val();
        $.post("/login/validate", {user_name, pass}, function(res){
            if(res){
                if(res.multi_user){
                    //modal 
                        $(".option1").text(res.options[0].toUpperCase())  
                        $(".option2").text(res.options[1].toUpperCase())
                        $(".name").text(res.name);
                        $(".login-selection").modal("show");
                                      
                }
                else{
                    location.replace(res.redirect); 
                }
            }
            else{
                // $(".error-selection").modal('show');   
                $(".username").addClass("is-invalid"); 
                $(".password").addClass("is-invalid");
            }
            


            $(".login-load").addClass("d-none");
            $(".login").removeClass("d-none");


        })
    }


    //show password
    function showpassword(){
        let show = $(".password").attr('type'); 
        if(show == "password"){
            $(".password").attr('type', "text");
        }
        else{
            $(".password").attr('type', "password");
        }
    }



    $(".login").click(function(){
        $(this).addClass("d-none");
        $(".login-load").removeClass("d-none");
        submitLogin(); 
    })


    $(".showPassword").click(function(){
        showpassword(); 
    })



    //This function remove the invalid trace
    $(".username").keyup(function(){
        $(this).removeClass("is-invalid"); 
    })

    $(".password").keyup(function(){
        $(this).removeClass("is-invalid");
    })
})