const formdki = document.getElementById("form-dang-ki");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirm-password");
formdki.addEventListener("submit", function (event){
    event.preventDefault();
    const hoTen = nameInput.value;
    const email = emailInput.value;
    const matKhau = passwordInput.value;
    const xacNhanMk = confirmPasswordInput.value;
    if (hoTen === "" || email === "" || matKhau === "" || xacNhanMk === ""){
        alert("Vui lòng nhập đủ thông tin!");
        return;
    }
    if (matKhau !== xacNhanMk){
        alert("Mật khẩu không đúng!");
        return;
    }
});