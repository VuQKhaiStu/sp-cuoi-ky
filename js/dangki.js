const formdki = document.getElementById("form-dang-ki");
const nameAccountInput = document.getElementById("name-account");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirm-password");
const thongBaoDangKi = document.getElementById("thong-bao-dang-ki");
const thongBaoThieuThongTin = document.getElementById("thieu-thong-tin");
const btnDongThongBao = document.querySelectorAll(".btn-dong-thong-bao");
formdki.addEventListener("submit", function (event) {
    event.preventDefault();

    const tenDangNhap = nameAccountInput.value;
    const email = emailInput.value;
    const matKhau = passwordInput.value;
    const xacNhanMk = confirmPasswordInput.value;

    if (tenDangNhap === "" || email === "" || matKhau === "" || xacNhanMk === "") {
        thongBaoThieuThongTin.style.display = "flex";
        return;
    }
    
    if (matKhau.length < 8){
        // thông báo mật khẩu ngắn 
        return;
    }

    if (matKhau !== xacNhanMk) {
        // thông báo mật khẩu không khớp
        return;
    }

    const duLieuTk = localStorage.getItem("dsTk");

    let dsTk = [];

    if (duLieuTk) {
        dsTk = JSON.parse(duLieuTk);
    }
    for (let i = 0; i < dsTk.length; i++) {
        if (dsTk[i].tenDangNhap === tenDangNhap) {
            // thông báo tên đăng nhập đã tồn tại
            return;
        }
        if (dsTk[i].email === email) {
            // thông báo email đã được sử dụng
            return;
        }

    }
    const tkMoi = {
        tenDangNhap: tenDangNhap,
        email: email,
        matKhau: matKhau
    };

    dsTk.push(tkMoi);
    localStorage.setItem("dsTk", JSON.stringify(dsTk));
    thongBaoDangKi.style.display = "flex";
});
btnDongThongBao.addEventListener("click", function () {
    thongBaoThieuThongTin.style.display = "none";
});