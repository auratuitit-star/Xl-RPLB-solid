// ==========================
// AMBIL DATA LOGIN
// ==========================

const userLogin = JSON.parse(
    localStorage.getItem("userLogin")
);

// ==========================
// TAMPILKAN NAMA & ROLE
// ==========================

if (userLogin) {

    document.getElementById(
        "namaSiswa"
    ).textContent = userLogin.nama;

    document.getElementById(
        "roleSiswa"
    ).textContent =
        userLogin.role.toUpperCase();

}

// ==========================
// HARI INI
// ==========================

const namaHari = [

    "Minggu",
    "Senin",
    "Selasa",
    "Rabu",
    "Kamis",
    "Jumat",
    "Sabtu"

];

const hariSekarang =
    namaHari[new Date().getDay()];

document.getElementById(
    "hariIni"
).textContent =
    "📅 " + hariSekarang;

// ==========================
// JADWAL HARI INI
// ==========================

const jadwal = {

    Senin: [

        "08:00 Matematika",

        "09:10 Bahasa Jawa",

        "09:45 Dasar-Dasar Program Keahlian"

    ],

    Selasa: [

        "07:20 Sejarah",

        "08:40 Pendidikan Agama",

        "11:00 Dasar-Dasar Program Keahlian",

        "13:55 Bahasa Inggris"

    ],

    Rabu: [

        "07:20 Bahasa Inggris",

        "08:40 Pendidikan Pancasila",

        "10:20 Proyek IPAS",

        "13:15 BK",

        "13:55 Matematika"

    ],

    Kamis: [

        "07:20 PJOK",

        "09:20 Seni Budaya",

        "11:00 Bahasa Indonesia",

        "12:35 Informatika",

        "13:55 Koding & AI"

    ],

    Jumat: [

        "08:00 Bahasa Indonesia",

        "09:40 Proyek IPAS"

    ]

};

const jadwalContainer =
    document.getElementById(
        "jadwalHariIni"
    );

if (jadwal[hariSekarang]) {

    jadwal[hariSekarang]

    .forEach(

        item => {

            jadwalContainer

            .innerHTML +=

            `

                <div>

                    ${item}

                </div>

            `;

        }

    );

}

else {

    jadwalContainer

    .innerHTML =

    `

        <div>

            Libur 🎉

        </div>

    `;

}

// ==========================
// GRAFIK KAS
// ==========================

new Chart(

    document.getElementById(
        "kasChart"
    ),

    {

        type: "bar",

        data: {

            labels: [

                "Jan",

                "Feb",

                "Mar",

                "Apr",

                "Mei",

                "Jun"

            ],

            datasets: [

                {

                    label:
                    "Kas Kelas",

                    data: [

                        300,

                        450,

                        400,

                        550,

                        500,

                        550

                    ],

                    backgroundColor:
                    "#696cff",

                    borderRadius:
                    10

                }

            ]

        },

        options: {

            responsive: true,

            plugins: {

                legend: {

                    display: false

                }

            }

        }

    }

);

// ==========================
// DONUT KEHADIRAN
// ==========================

new Chart(

    document.getElementById(
        "hadirChart"
    ),

    {

        type: "doughnut",

        data: {

            labels: [

                "Hadir",

                "Izin",

                "Sakit"

            ],

            datasets: [

                {

                    data: [

                        32,

                        2,

                        2

                    ],

                    backgroundColor: [

                        "#28a745",

                        "#ffc107",

                        "#dc3545"

                    ]

                }

            ]

        },

        options: {

            responsive: true

        }

    }

);