const formDangKi = document.getElementById("form-dang-ki");
const nameAccountInput = document.getElementById("name-account");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirm-password");
formDangKi.addEventListener("submit", function (event) {
    event.preventDefault();

    const tenDangNhap = nameAccountInput.value;
    const email = emailInput.value;
    const matKhau = passwordInput.value;
    const xacNhanMk = confirmPasswordInput.value;

    if (tenDangNhap === "" || email === "" || matKhau === "" || xacNhanMk === "") {
        thongBaoThieuThongTin.style.display = "flex";
        return;
    }

    if (matKhau !== xacNhanMk) {
        alert("Mật khẩu xác nhận không khớp!!!")
        return;
    }

    const duLieuTk = localStorage.getItem("dsTk");

    let dsTk = [];

    if (duLieuTk) {
        dsTk = JSON.parse(duLieuTk);
    }
    for (let i = 0; i < dsTk.length; i++) {
        if (dsTk[i].tenDangNhap === tenDangNhap) {
            alert("Tên đăng nhập đã tồn tại!!!")
            return;
        }
        if (dsTk[i].email === email) {
            alert("Email đã được sử dụng!!!")
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