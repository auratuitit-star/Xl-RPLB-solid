document
.getElementById("logoutBtn")

.addEventListener(

    "click",

    function(e){

        e.preventDefault();

        if(

            confirm(
                "Yakin ingin logout?"
            )

        ){

            localStorage.removeItem(
                "currentUser"
            );

            window.location.href =
                "login.html";
        }

    }

);