window.onload = function () {

    document.getElementById("loginForm")
    .addEventListener("submit", function (e) {

        e.preventDefault();

        const username = document
            .getElementById("username")
            .value
            .trim()
            .toLowerCase();

        const password = document
            .getElementById("password")
            .value
            .trim();

        console.log("Username:", username);
        console.log("Password input:", password);
        console.log("Data user:", users[username]);

        if (users[username]) {

            console.log("Password users.js:", users[username].password);
            console.log(
                "Hasil perbandingan:",
                users[username].password === password
            );

            if (users[username].password === password) {

                alert("Login berhasil!");

                localStorage.setItem(
                    "currentUser",
                    JSON.stringify(users[username])
                );
                localStorage.setItem(

    "userLogin",

    JSON.stringify(user)

);

                window.location.href = "dashboard.html";

            } else {

                alert("Password tidak cocok!");

            }

        } else {

            alert("Username tidak ditemukan!");

        }

    });

};