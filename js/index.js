const thongBao = document.getElementById("thong-bao");
const dongThongBao = document.getElementById("dong-thong-bao");
const canDangNhap = document.querySelectorAll(".can-dang-nhap");
function hienThongBao() {
    thongBao.style.display = "flex";
}
canDangNhap.forEach(function (element) {
    element.addEventListener("click", function (event) {
        event.preventDefault();
        hienThongBao();
    });
});

dongThongBao.addEventListener("click", function () {
    thongBao.style.display = "none";
});

thongBao.addEventListener("click", function (event) {
    if (event.target === thongBao) {
        thongBao.style.display = "none";
    }
});

const formTimKiem = document.getElementById("form-tim-kiem");
formTimKiem.addEventListener("submit", function (event) {
    event.preventDefault();
    hienThongBao();
});