const openNav = () => {
    document.getElementById("sidebar").style.width = "275px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.3)";
};

const closeNav = () => {
    document.getElementById("sidebar").style.width = "0";
    document.body.style.backgroundColor = "white";
};
