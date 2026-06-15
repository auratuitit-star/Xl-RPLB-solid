window.onload = function () {

    const container = document.getElementById("daftarSiswa");

    // Hitung jumlah pengurus
    const pengurus = Object.values(users).filter(
        siswa => siswa.role !== "siswa"
    ).length;

    document.getElementById("jumlahPengurus").textContent = pengurus;

    // Tampilkan semua siswa saat pertama kali dibuka
    tampilkanSiswa(Object.values(users));

    // Fitur pencarian
    document.getElementById("search").addEventListener(
        "input",
        function () {

            const keyword = this.value.toLowerCase();

            const hasil = Object.values(users).filter(
                siswa =>
                    siswa.nama.toLowerCase().includes(keyword)
            );

            tampilkanSiswa(hasil);
        }
    );

    // Fungsi menampilkan siswa
    function tampilkanSiswa(data) {

        container.innerHTML = "";

        data.forEach(siswa => {

            let icon = "🎓";
            let roleClass = "siswa";

            if (siswa.role === "ketua") {
                icon = "👑";
                roleClass = "ketua";
            }

            else if (siswa.role === "bendahara") {
                icon = "💰";
                roleClass = "bendahara";
            }

            else if (siswa.role === "sekretaris") {
                icon = "📝";
                roleClass = "sekretaris";
            }

            container.innerHTML += `

                <div class="card-siswa"

                    onclick="alert(
                    'Nama: ${siswa.nama}\\n' +
                    'Absen: ${siswa.absen}\\n' +
                    'Role: ${siswa.role}'
                    )">

                    <div>

                        <div class="nama">

                            ${icon} ${siswa.nama}

                        </div>

                        <div class="absen">

                            Absen : ${siswa.absen}

                        </div>

                    </div>

                    <div class="role ${roleClass}">

                        ${siswa.role}

                    </div>

                </div>

            `;
        });

    }

};