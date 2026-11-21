let register = document.getElementById("register");

register.addEventListener("submit", function(event){
    event.preventDefault();

    let fname = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let dob = document.getElementById("message").value.trim();
    let tel = document.getElementById("phone").value.trim();
    // let password = document.getElementById("password").value.trim();
    // let cpassword = document.getElementById("cpassword").value.trim();

     let message = "";

     let messagebox = document.getElementById("message");

    if(name == ""){
        message = "Full name can not be empty!";
        messagebox.style.color = "red";
        messagebox.innerHTML = message;
        return;
    }

    if(email == ""){
        message = "Email can not be empty";
        messagebox.style.color = "red";
        messagebox.innerHTML = message;
        return;
    }

    if(message == ""){
        message = "message can not be empty!";
        messagebox.style.color = "red";
        messagebox.innerHTML = message;
        return;
    }

    // if(2026 - new Date(dob).getFullYear() < 18){
    //     message = "You must be 18 and above";
    //     messagebox.style.color = "red";
    //     messagebox.innerHTML = message;
    //     return;
    // }

    if(tel== ""){
        message = "Telephone number can not be empty!";
        messagebox.style.color = "red";
        messagebox.innerHTML = message;
        return;
    }

    // if(password == ""){
    //     message = "Password can not be empty!";
    //     messagebox.style.color = "red";
    //     messagebox.innerHTML = message;
    //     return;
    // }

    // if(password.length < 8){
    //     message = "Password must be 8 characters or above";
    //     messagebox.style.color = "red";
    //     messagebox.innerHTML = message;
    //     return;
    // }

    // if(cpassword == ""){
    //     message = "Confirm password can not be empty!";
    //     messagebox.style.color = "red";
    //     messagebox.innerHTML = message;
    //     return;
    // }

    // if (password != cpassword){
    //     message = "Password does not match";
    //     messagebox.style.color = "red";
    //     messagebox.innerHTML = message;
    //     return;
    // }

    message = "Registration Successful!";
    messagebox.style.color = "green";
    messagebox.innerHTML = message;
    return;

});