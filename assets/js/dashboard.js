// ==========================
// CEK LOGIN
// ==========================

const userLogin = JSON.parse(
    localStorage.getItem("userLogin")
);

if (!userLogin) {

    window.location.href =
        "login.html";

}

// ==========================
// TAMPILKAN NAMA & ROLE
// ==========================

document.getElementById(
    "namaSiswa"
).textContent = userLogin.nama;

document.getElementById(
    "roleSiswa"
).textContent =
    userLogin.role.toUpperCase();

// ==========================
// JUMLAH SISWA
// ==========================

document.getElementById(
    "jumlahSiswa"
).textContent =

    Object.keys(users).length;

// ==========================
// JUMLAH PENGURUS
// ==========================

document.getElementById(
    "jumlahPengurus"
).textContent =

    Object.values(users)

    .filter(

        siswa =>

        siswa.role !== "siswa"

    ).length;

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
// TOTAL KAS
// ==========================

const dataKas = JSON.parse(
    localStorage.getItem("dataKas")
) || [];

const totalKas = dataKas.reduce(

    (total, item) =>

        total + item.jumlah,

    0

);

document.getElementById(
    "totalKasDashboard"
).textContent =

    "💰 Rp " +

    totalKas.toLocaleString(
        "id-ID"
    );

// ==========================
// DATA ABSENSI
// ==========================

const dataAbsen = JSON.parse(
    localStorage.getItem("dataAbsen")
) || {};

let hadir = 0;
let izin = 0;
let sakit = 0;
let alpha = 0;

Object.values(dataAbsen)

.forEach(status => {

    if(status === "Hadir"){

        hadir++;

    }

    else if(status === "Izin"){

        izin++;

    }

    else if(status === "Sakit"){

        sakit++;

    }

    else if(status === "Alpha"){

        alpha++;

    }

});

document.getElementById(
    "jumlahHadir"
).textContent = hadir;

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

jadwalContainer.innerHTML = "";

if(jadwal[hariSekarang]){

    jadwal[hariSekarang]

    .forEach(item => {

        jadwalContainer.innerHTML +=

        `

            <div>

                ${item}

            </div>

        `;

    });

}

else{

    jadwalContainer.innerHTML =

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

                "Kas"

            ],

            datasets: [

                {

                    label:
                    "Total Kas",

                    data: [

                        totalKas

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
// DONUT ABSENSI
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
                "Sakit",
                "Alpha"

            ],

            datasets: [

                {

                    data: [

                        hadir,
                        izin,
                        sakit,
                        alpha

                    ],

                    backgroundColor: [

                        "#28a745",
                        "#ffc107",
                        "#17a2b8",
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
