// ======================
// DATA JADWAL XI RPL-B
// ======================

const jadwal = {

    senin: [

        {
            jam: "08:00 - 09:10",
            mulai: "08:00",
            selesai: "09:10",
            mapel: "Matematika",
            guru: "Ahmad Sayfudin, S.Pd., Gr."
        },

        {
            jam: "09:10 - 09:45",
            mulai: "09:10",
            selesai: "09:45",
            mapel: "Bahasa Jawa",
            guru: "Dwi Arayu P, S.Pd., Gr."
        },

        {
            jam: "09:45 - 14:40",
            mulai: "09:45",
            selesai: "14:40",
            mapel: "Dasar-Dasar Program Keahlian 1",
            guru: "Fradilla Octa Kusuma W, S.Kom., Gr."
        }

    ],

    selasa: [

        {
            jam: "07:20 - 08:40",
            mulai: "07:20",
            selesai: "08:40",
            mapel: "Sejarah",
            guru: "Liza Yulia Alviana, S.Pd., Gr."
        },

        {
            jam: "08:40 - 11:00",
            mulai: "08:40",
            selesai: "11:00",
            mapel: "Pendidikan Agama dan Budi Pekerti",
            guru: "Ita Miftahur Rohmah, S.Pd.I., M.Pd."
        },

        {
            jam: "11:00 - 13:55",
            mulai: "11:00",
            selesai: "13:55",
            mapel: "Dasar-Dasar Program Keahlian 2",
            guru: "Ilham Setyo Nugroho, S.Pd., Gr."
        },

        {
            jam: "13:55 - 15:15",
            mulai: "13:55",
            selesai: "15:15",
            mapel: "Bahasa Inggris",
            guru: "Lisa Juniesty A, S.Pd., Gr."
        }

    ],

    rabu: [

        {
            jam: "07:20 - 08:40",
            mulai: "07:20",
            selesai: "08:40",
            mapel: "Bahasa Inggris",
            guru: "Lisa Juniesty A, S.Pd., Gr."
        },

        {
            jam: "08:40 - 10:00",
            mulai: "08:40",
            selesai: "10:00",
            mapel: "Pendidikan Pancasila",
            guru: "Mei Wulandari, S.Pd., Gr."
        },

        {
            jam: "10:20 - 13:15",
            mulai: "10:20",
            selesai: "13:15",
            mapel: "Proyek Ilmu Pengetahuan Alam dan Sosial",
            guru: "Yayuk Sri Andayani, S.Pd."
        },

        {
            jam: "13:15 - 13:55",
            mulai: "13:15",
            selesai: "13:55",
            mapel: "Bimbingan Konseling",
            guru: "Dijah Ayu Pitaloka, S.Psi., Gr."
        },

        {
            jam: "13:55 - 15:15",
            mulai: "13:55",
            selesai: "15:15",
            mapel: "Matematika",
            guru: "Ahmad Sayfudin, S.Pd., Gr."
        }

    ],

    kamis: [

        {
            jam: "07:20 - 09:20",
            mulai: "07:20",
            selesai: "09:20",
            mapel: "PJOK",
            guru: "Hendri Trias Efendi, S.Pd., Gr."
        },

        {
            jam: "09:20 - 11:00",
            mulai: "09:20",
            selesai: "11:00",
            mapel: "Seni dan Budaya",
            guru: "Dwi Wahyu Wirawan, S.Pd., Gr."
        },

        {
            jam: "11:00 - 12:10",
            mulai: "11:00",
            selesai: "12:10",
            mapel: "Bahasa Indonesia",
            guru: "Liza Yulia Alviana, S.Pd., Gr."
        },

        {
            jam: "12:35 - 13:55",
            mulai: "12:35",
            selesai: "13:55",
            mapel: "Informatika",
            guru: "Setyo Prabowo As, S.Pd., Gr."
        },

        {
            jam: "13:55 - 15:15",
            mulai: "13:55",
            selesai: "15:15",
            mapel: "Koding dan Kecerdasan Artifisial",
            guru: "Setyo Prabowo As, S.Pd., Gr."
        }

    ],

    jumat: [

        {
            jam: "08:00 - 09:20",
            mulai: "08:00",
            selesai: "09:20",
            mapel: "Bahasa Indonesia",
            guru: "Liza Yulia Alviana, S.Pd., Gr."
        },

        {
            jam: "09:40 - 11:00",
            mulai: "09:40",
            selesai: "11:00",
            mapel: "Proyek Ilmu Pengetahuan Alam dan Sosial",
            guru: "Yayuk Sri Andayani, S.Pd."
        }

    ]

};

// ======================
// JAM BERJALAN
// ======================

function updateJam() {

    const sekarang = new Date();

    const jam =
        String(sekarang.getHours()).padStart(2, "0");

    const menit =
        String(sekarang.getMinutes()).padStart(2, "0");

    const detik =
        String(sekarang.getSeconds()).padStart(2, "0");

    document.getElementById("jam").textContent =
        `${jam}:${menit}:${detik} WIB`;

    const hari = [
        "Minggu",
        "Senin",
        "Selasa",
        "Rabu",
        "Kamis",
        "Jumat",
        "Sabtu"
    ];

    const bulan = [
        "Januari",
        "Februari",
        "Maret",
        "April",
        "Mei",
        "Juni",
        "Juli",
        "Agustus",
        "September",
        "Oktober",
        "November",
        "Desember"
    ];

    document.getElementById("tanggal").textContent =
        `${hari[sekarang.getDay()]}, ${sekarang.getDate()} ${bulan[sekarang.getMonth()]} ${sekarang.getFullYear()}`;

}

updateJam();

setInterval(updateJam, 1000);

// ======================
// TAMPILKAN JADWAL
// ======================

function tampilkanJadwal(hari) {

    const container =
        document.getElementById("jadwalList");

    container.innerHTML = "";

    jadwal[hari].forEach(item => {

        container.innerHTML += `

            <div class="card-jadwal">

                <div class="jam">

                    🕒 ${item.jam}

                </div>

                <div class="mapel">

                    ${item.mapel}

                </div>

                <div class="guru">

                    👨‍🏫 ${item.guru}

                </div>

            </div>

        `;

    });

}

// ======================
// CEK PELAJARAN SEKARANG
// ======================

function cekPelajaran() {

    const sekarang = new Date();

    const namaHari = [
        "minggu",
        "senin",
        "selasa",
        "rabu",
        "kamis",
        "jumat",
        "sabtu"
    ][sekarang.getDay()];

    if (!jadwal[namaHari]) return;

    const jamSekarang =
        String(sekarang.getHours()).padStart(2, "0")
        + ":"
        +
        String(sekarang.getMinutes()).padStart(2, "0");

    let ditemukan = false;

    for (let i = 0; i < jadwal[namaHari].length; i++) {

        const pelajaran =
            jadwal[namaHari][i];

        if (

            jamSekarang >= pelajaran.mulai &&

            jamSekarang < pelajaran.selesai

        ) {

            document.getElementById(
                "mapelSekarang"
            ).textContent =
                pelajaran.mapel;

            document.getElementById(
                "jamSekarang"
            ).textContent =
                pelajaran.jam;

            if (

                i + 1 < jadwal[namaHari].length

            ) {

                document.getElementById(
                    "mapelBerikut"
                ).textContent =
                    jadwal[namaHari][i + 1].mapel;

                document.getElementById(
                    "jamBerikut"
                ).textContent =
                    jadwal[namaHari][i + 1].jam;

            }

            ditemukan = true;

            break;

        }

    }

    if (!ditemukan) {

        document.getElementById(
            "mapelSekarang"
        ).textContent =
            "Tidak ada pelajaran";

        document.getElementById(
            "jamSekarang"
        ).textContent =
            "-";

    }

}

cekPelajaran();

setInterval(cekPelajaran, 60000);

// ======================
// TAMPILKAN HARI INI
// ======================

window.onload = function () {

    const hari = [
        "minggu",
        "senin",
        "selasa",
        "rabu",
        "kamis",
        "jumat",
        "sabtu"
    ];

    const hariIni =
        hari[new Date().getDay()];

    if (jadwal[hariIni]) {

        tampilkanJadwal(hariIni);

    }

    else {

        tampilkanJadwal("senin");

    }

};