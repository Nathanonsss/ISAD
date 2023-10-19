const button = document.getElementById('submit')
let e_bool = false
let p_bool = false

function validateEmail(email_input, email_p) {
    const email = email_input.value
    const email_req = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/

    if (email_req.test(email)) {
        email_input.style.border = ''
        email_p.innerHTML = ''
        e_bool = true
        button.disabled = !(e_bool && p_bool)
        console.log(e_bool, p_bool)
    } else if (email === '') {
        email_input.style.borderBottom = '2px solid red'
        email_p.innerHTML = 'กรุณากรอกอีเมล'
        e_bool = false
        button.disabled = !(e_bool && p_bool)
    } else {
        email_input.style.borderBottom = '2px solid red'
        email_p.innerHTML = 'อีเมล ต้องเป็นรูปแบบอีเมล'
        e_bool = false
        button.disabled = !(e_bool && p_bool)
    }
}

function validatePassword(pw_input, pw_p) {
    const pw = pw_input.value

    if (pw.length >= 8) {
        pw_input.style.border = ''
        pw_p.innerHTML = ''
        p_bool = true
        button.disabled = !(e_bool && p_bool)
    } else if (pw === '') {
        pw_input.style.borderBottom = '2px solid red'
        pw_p.innerHTML = 'กรุณากรอกรหัสผ่าน'
        p_bool = false
        button.disabled = !(e_bool && p_bool)
    } else {
        pw_input.style.borderBottom = '2px solid red'
        pw_p.innerHTML = 'รหัสผ่าน ต้องมีความยาวอย่างน้อย 8 ตัวอักษร'
        p_bool = false
        button.disabled = !(e_bool && p_bool)
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const email_input = document.getElementById('email')
    const email_p = document.getElementById('email_p')
    email_input.addEventListener('input', function () {
        validateEmail(email_input, email_p)
    });

    const pw_input = document.getElementById('password')
    const pw_p = document.getElementById('password_p')
    pw_input.addEventListener('input', function () {
        validatePassword(pw_input, pw_p)
    });
});

function togglePassword() {
    var passwordInput = document.getElementById("form2Example22");
    var eyeIcon = document.getElementById("changepasseye");
    var slashIcon = document.getElementById("changepassslash");

    if (passwordInput.type === "password") {
        passwordInput.type = "text"; 
        eyeIcon.style.display = "none";
        slashIcon.style.display = "inline";
    } else {
        passwordInput.type = "password"; 
        eyeIcon.style.display = "inline";
        slashIcon.style.display = "none";
    }
}