alert("kas.js terbaru terbaca");


window.onload = function(){

    // =====================
    // CEK LOGIN
    // =====================

    const user = JSON.parse(
        localStorage.getItem("userLogin")
    );

    if(!user){

        window.location.href =
            "index.html";

        return;
    }

    // =====================
    // CEK ROLE
    // =====================

    const formKas =
        document.getElementById(
            "formKas"
        );

    if(

        user.role !== "ketua" &&

        user.role !== "bendahara"

    ){

        formKas.style.display =
            "none";
    }

    // =====================
    // AMBIL DATA KAS
    // =====================

    let dataKas = JSON.parse(

        localStorage.getItem(
            "dataKas"
        )

    ) || [];

    tampilkanKas();

    // =====================
    // TAMBAH KAS
    // =====================

    document.getElementById(
        "tambahKas"
    )

    .addEventListener(

        "click",

        function(){

            const nama =

                document.getElementById(
                    "namaSiswa"
                ).value;

            const jumlah =

                parseInt(

                    document.getElementById(
                        "jumlahKas"
                    ).value

                );

            if(

                !nama ||

                !jumlah

            ){

                alert(

                    "Isi semua data!"

                );

                return;
            }

            dataKas.push({

                nama,

                jumlah

            });

            localStorage.setItem(

                "dataKas",

                JSON.stringify(
                    dataKas
                )

            );

            tampilkanKas();

            document.getElementById(
                "namaSiswa"
            ).value = "";

            document.getElementById(
                "jumlahKas"
            ).value = "";

        }

    );

    // =====================
    // TAMPILKAN KAS
    // =====================

    function tampilkanKas(){

        const list =

            document.getElementById(
                "listKas"
            );

        list.innerHTML = "";

        let total = 0;

        dataKas.forEach(

            item=>{

                total += item.jumlah;

                list.innerHTML +=

                `

                    <li>

                        ${item.nama}

                        -

                        Rp ${item.jumlah.toLocaleString('id-ID')}

                    </li>

                `;

            }

        );

        document.getElementById(
            "totalKas"
        )

        .textContent =

            "Rp " +

            total.toLocaleString(
                "id-ID"
            );

    }

};