//--------Bat tat popup--------------------------------------
function open_popup() {
    document.getElementById("my-popup").style.display = "block";
}

function close_popup() {
    document.getElementById("my-popup").style.display = "none";
}
//--------Chon nha mang---------------------------------------
function mobiphone() {
    document.getElementById("cnm_img").src = "/img/Image 31.png";
    sessionStorage.setItem("path_img", "/img/Image 31.png")
}

function viettel() {
    document.getElementById("cnm_img").src = "/img/Image 32.png";
    sessionStorage.setItem("path_img", "/img/Image 32.png")
}

function vinaphone() {
    document.getElementById("cnm_img").src = "/img/Image 33.png";
    sessionStorage.setItem("path_img", "/img/Image 33.png")
}

function vietnammobile() {
    document.getElementById("cnm_img").src = "/img/Image 34.png";
    sessionStorage.setItem("path_img", "/img/Image 34.png")
}

function gmobile() {
    document.getElementById("cnm_img").src = "/img/gmobile.png";
    sessionStorage.setItem("path_img", "/img/gmobile.png")
}
//---------Nhap so dien thoai-------------------------------
function get_data() {
    let sdt = document.getElementById("numberphone").value;
    sessionStorage.setItem("numberphone", sdt);
}
//--------Nhap menh gia thanh toan--------------------------
function a1() {
    sessionStorage.setItem("currency", "10,000");
}

function a2() {
    sessionStorage.setItem("currency", "20,000");
}

function a3() {
    sessionStorage.setItem("currency", "30,000");
}

function a4() {
    sessionStorage.setItem("currency", "50,000");
}

function b1() {
    sessionStorage.setItem("currency", "100,000");
}

function b2() {
    sessionStorage.setItem("currency", "200,000");
}

function b3() {
    sessionStorage.setItem("currency", "300,000");
}

function b4() {
    sessionStorage.setItem("currency", "500,000");
}