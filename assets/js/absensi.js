window.onload = function(){

    const currentUser = JSON.parse(
        localStorage.getItem("currentUser")
    );

    if(!currentUser){

        window.location.href =
            "login.html";

        return;
    }

    let dataAbsen = JSON.parse(
        localStorage.getItem("dataAbsen")
    ) || {};

    const container =
        document.getElementById(
            "daftarSiswa"
        );

    Object.values(users).forEach(

        siswa=>{

            if (!dataAbsen[siswa.nama]) {

    dataAbsen[siswa.nama] = "Hadir";

}

const status = dataAbsen[siswa.nama];

            const editable =

                currentUser.role === "ketua" ||

                currentUser.role === "sekretaris";

            container.innerHTML += `

                <div class="siswa">

                    <span>
                        ${siswa.absen}.
                        ${siswa.nama}
                    </span>

                    <select
                        data-nama="${siswa.nama}"
                        ${editable ? "" : "disabled"}>

                        <option
                        ${status==="Hadir"?"selected":""}>
                        Hadir
                        </option>

                        <option
                        ${status==="Izin"?"selected":""}>
                        Izin
                        </option>

                        <option
                        ${status==="Sakit"?"selected":""}>
                        Sakit
                        </option>

                        <option
                        ${status==="Alpha"?"selected":""}>
                        Alpha
                        </option>

                    </select>

                </div>

            `;

        }

    );

    document.querySelectorAll("select")

    .forEach(select=>{

        select.addEventListener(

            "change",

            function(){

                dataAbsen[
                    this.dataset.nama
                ] = this.value;

                localStorage.setItem(

                    "dataAbsen",

                    JSON.stringify(
                        dataAbsen
                    )

                );

                hitungRekap();

            }

        );

    });

    function hitungRekap(){

        let hadir=0;
        let izin=0;
        let sakit=0;
        let alpha=0;

        Object.values(
            dataAbsen
        )

        .forEach(status=>{

            if(status==="Hadir")
                hadir++;

            else if(status==="Izin")
                izin++;

            else if(status==="Sakit")
                sakit++;

            else if(status==="Alpha")
                alpha++;

        });

        document.getElementById(
            "hadirCount"
        ).textContent = hadir;

        document.getElementById(
            "izinCount"
        ).textContent = izin;

        document.getElementById(
            "sakitCount"
        ).textContent = sakit;

        document.getElementById(
            "alphaCount"
        ).textContent = alpha;
    }

    hitungRekap();

};