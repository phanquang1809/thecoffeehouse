document
    .getElementById("contact-form")
    .addEventListener("submit", function (e) {
        e.preventDefault();
        let isValid = true;
        let fullname = $("#name").val().trim();
        let email = $("#email").val().trim();
        let password = $("#password").val().trim();
        let rePassword = $("#re-password").val().trim();
        let phone = $("#phone-number").val().trim().replace(/\s+/g, '');
        if (fullname === "") {
            $("#nameError").text("Vui lòng nhập họ tên!");
            isValid = false;
        }
        else {
            $("#nameError").text(" ");
        }

        if (email === "") {
            $("#emailError").text("Vui lòng nhập email!");
            isValid = false;
        } else if (!validateEmail(email)) {
            $("#emailError").text("Email không hợp lệ!");
            isValid = false;
        }
        else {
            $("#emailError").text(" ");
        }

        if (password === "") {
            $('#passwordError').text('Vui lòng nhập mật khẩu!');
            isValid = false;

        }
        else if (password.length < 8) {
            $('#passwordError').text('Mật khẩu phải có ít nhất 8 kí tự!');
            isValid = false;
        } else if (!/[A-Z]/.test(password) || !/[a-z]/.test(password) || !/\d/.test(password)) {
            $('#passwordError').text('Mật khẩu phải có ít nhất 1 chữ hoa, 1 chữ thường và 1 chữ số!');
            isValid = false;
        } else if (!/[@$!%*?&]/.test(password)) {
            $('#passwordError').text('Mật khẩu phải chứa kí tự đặc biệt!');
            isValid = false;
        }
        else {
            $("#passwordError").text(" ");
        }

        if (password.length >= 8) {
            if (rePassword !== password) {
                $("#rePasswordError").text("Mật khẩu không khớp!");
                isValid = false;
            }
            else {
                $("#rePasswordError").text(" ");
            }
        }

        let phonePattern = /^\d{10,11}$/;

        if (phone === "") {
            $("#phoneError").text("Vui lòng nhập số điện thoại!");
            isValid = false;
        } else if (!phonePattern.test(phone)) {
            $("#phoneError").text(
                "Vui lòng nhập số điện thoại hợp lệ và tối thiểu 10 chữ số!"
            );
            isValid = false;
        }
        else {
            $("#phoneError").text(" ");
        }
        if (isValid) {
            window.location.href = "Home.html";
        }
    });
function validateEmail(email) {
    const emailRegex = new RegExp(
        /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/,
        "gm"
    );
    return emailRegex.test(email);
}
