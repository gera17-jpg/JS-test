document.addEventListener("DOMContentLoaded", function(){
    let tries = 3;

    function emailChecker(){
        let emailPattern = /^[a-zA-Z0-9._%$#!&^+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        let email = document.getElementById("emailId").value;
        if (emailPattern.test(email)){
            alert("Valid email. Welcome!");
        }else{
            tries --;
            alert(`Invalid email.You have ${tries} left.`);
            failed();
        }
    }
    
    function failed(){
        if (tries === 0){
            document.querySelector(".emailC").style.display = "none";
            alert("Email submission failed.Try again after reloading the page.");
        }
    }

    
    let emailBtn = document.querySelector(".emailBtn");
    emailBtn.addEventListener("click", emailChecker);
})
