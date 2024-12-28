import { loacalurl } from "./urlpath.js";

let form = document.getElementById("loginform");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    let email = form.email.value;
    let password = form.password.value;

    console.log(email, password);

    if (email == "admin@empher.com" && password == "empher@123") {
        alert("Logged in as Admin")
        window.location.href = "admin.html";
        fetch(`${loacalurl}`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(`Email:${email},Password:${password}`),
        }).then(() => {
            alert("Admin Login Successfull")
        }).catch((err)=>{
            alert("Something Went Wrong")
        })
    }
    else if (email == "user@empher.com" && password == "user@123") {
        alert("Logged in as User")
        window.location.href = "books.html";
        fetch(`${loacalurl}`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(`Email:${email},Password:${password}`),
        }).then(() => {
            alert("User Login Successfull")
        }).catch((err)=>{
            alert("Something Went Wrong")
        })
    }
    else {
        alert("Invalid Email or Password")
    }
})