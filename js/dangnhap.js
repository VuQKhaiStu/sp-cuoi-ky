const formDangNhap = document.getElementById("form-dang-nhap");
const accountInput = document.getElementById("account");
const passwordInput = document.getElementById("password");
formDangNhap.addEventListener("submit", function (event) {
    event.preventDefault();

    const thongTinAccount = accountInput.value;
    const matKhau = passwordInput.value;
    if (thongTinAccount === "" || matKhau === "") {
        alert("Bạn phải nhập đủ thông tin để đăng nhập!!!")
        return;
    }
    const duLieuTk = localStorage.getItem("dsTk");
    let dsTk = [];
    if (duLieuTk) {
        dsTk = JSON.parse(duLieuTk);
    }
    let taiKhoanTimDuoc = null;
    for (let i = 0; i < dsTk.length; i++) {
        if (dsTk[i].tenDangNhap === thongTinAccount || dsTk[i].email === thongTinAccount) {
            taiKhoanTimDuoc = dsTk[i];
            break;
        }


    }
    if (taiKhoanTimDuoc === null) {
        alert("Không tìm thấy tài khoản!!!")
        return;
    }
    if (matKhau !== taiKhoanTimDuoc.matKhau) {
        alert("Mật khẩu vừa nhập không chính xác!!!")
        return;

    }
    localStorage.setItem("taiKhoanDangNhap", JSON.stringify(taiKhoanTimDuoc));
    window.location.href = "../trangchu.html";

});