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

        if (users[username]) {

            if (users[username].password === password) {

                localStorage.setItem(
                    "userLogin",
                    JSON.stringify(users[username])
                );

                alert("Login berhasil!");

                window.location.href =
                    "dashboard.html";

            } else {

                alert("Password salah!");

            }

        } else {

            alert("Username tidak ditemukan!");

        }

    });

};
