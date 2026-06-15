window.addEventListener(
"DOMContentLoaded",

function(){

    const navItems =
    document.querySelectorAll(
    ".nav-item"
    );

    const indicator =
    document.querySelector(
    ".indicator"
    );

    navItems.forEach(
    (item,index)=>{

        item.addEventListener(
        "click",

        function(){

            navItems.forEach(
            nav=>{

                nav.classList.remove(
                "active"
                );

            });

            item.classList.add(
            "active"
            );

            indicator.style.left =
            `${index*20}%`;

        });

    });

});