const formDangNhap = document.getElementById("form-dang-nhap");
const accountInput = document.getElementById("account");
const passwordInput = document.getElementById("password");
const btnDongThongBao = document.querySelectorAll(".btn-dong-thong-bao");
const thongBaoThieuThongTin = document.getElementById("thieu-thong-tin");
formDangNhap.addEventListener("submit", function (event) {
    event.preventDefault();

    const thongTinAccount = accountInput.value;
    const matKhau = passwordInput.value;
    if (thongTinAccount === "" || matKhau === ""){
        // thong báo phải nhập đủ thông tin
        return;
    }
    const duLieuTk = localStorage.getItem("dsTk");
    let dsTk = [];
    if (duLieuTk){
        dsTk = JSON.parse(duLieuTk);
    }
    let taiKhoanTimDuoc = null;
    for (let i = 0; i < dsTk.length; i++){
        if (dsTk[i].tenDangNhap === accountInput || dsTk[i].email === tenDangNhap){
            taiKhoanTimDuoc = dsTk[i];
            break;
        }
        if (taiKhoanTimDuoc === null){
            // thông báo tài khoản không tồn tại
            return;
        }
        if (matKhau !== taiKhoanTimDuoc.matKhau){
            // thông báo mật khẩu không đúng
            return;

        }
        
    }
    localStorage.setItem("taiKhoanDangNhap", JSON.stringify(taiKhoanTimDuoc));
    window.location.href = "../trangchu.html";

});
btnDongThongBao.addEventListener("click", function () {
    thongBaoThieuThongTin.style.display = "none";
});