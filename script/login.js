import {navbar} from "../components/navbar.js"
document.querySelector("#navbar").innerHTML=navbar()

import{footer} from "../components/footer.js"
document.getElementById("footer").innerHTML=footer()

let user = JSON.parse(localStorage.getItem("userData"))
    document.querySelector("#submit").addEventListener("click", mySignIn);



    function mySignIn(event) {
        event.preventDefault();
        let data = {
            user_email: document.querySelector("#user_Email").value,
            user_Password: document.querySelector("#user_Password").value
        };


        function checkLogin(user_email, user_Password) {
            let filter = user.filter(function (elem) {
                return elem.email == user_email && elem.password == user_Password
            });


            if (filter.length > 0) {
                return filter;
            } else {
                return false;
            }
        }

        let current_user = checkLogin(data.user_email, data.user_Password);


        if (current_user == false) {
            alert("invalid Credentials");
        } else {
            localStorage.setItem("loginData", JSON.stringify(current_user));
            alert("Login Success....!")
            window.location.href = "./index.html";
        }


    }

document.querySelector("#new_costomer_reg").addEventListener("click",Register)
    function Register(){
        window.location.href="./registration.html"
    }

