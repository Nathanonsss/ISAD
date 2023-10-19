const button = document.getElementById('submit')
let e_bool = false
let p_bool = false
let fn_bool = false
let ln_bool = false

function validateEmail(email_input, email_p) {
    const email = email_input.value
    const email_req = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/

    if (email_req.test(email)) {
        email_input.style.border = ''
        email_p.innerHTML = ''
        e_bool = true
        button.disabled = !(e_bool && p_bool && fn_bool && ln_bool)
    } else if (email === '') {
        email_input.style.border = '2px solid red'
        email_p.innerHTML = 'กรุณากรอกอีเมล'
        e_bool = false
        button.disabled = !(e_bool && p_bool && fn_bool && ln_bool)
    } else {
        email_input.style.border = '2px solid red'
        email_p.innerHTML = 'อีเมล ต้องเป็นรูปแบบอีเมล'
        e_bool = false
        button.disabled = !(e_bool && p_bool && fn_bool && ln_bool)
    }
}

function validatePassword(pw_input, pw_p) {
    const pw = pw_input.value

    if (pw.length >= 8) {
        pw_input.style.border = ''
        pw_p.innerHTML = ''
        p_bool = true
        button.disabled = !(e_bool && p_bool && fn_bool && ln_bool)
    } else if (pw === '') {
        pw_input.style.border = '2px solid red'
        pw_p.innerHTML = 'กรุณากรอกรหัสผ่าน'
        p_bool = false
        button.disabled = !(e_bool && p_bool && fn_bool && ln_bool)
    } else {
        pw_input.style.border = '2px solid red'
        pw_p.innerHTML = 'รหัสผ่าน ต้องมีความยาวอย่างน้อย 8 ตัวอักษร'
        p_bool = false
        button.disabled = !(e_bool && p_bool && fn_bool && ln_bool)
    }
}

function validateFname(fname_input, fname_p) {
    const fname = fname_input.value

    if (fname === '') {
        fname_input.style.border = '2px solid red'
        fname_p.innerHTML = 'กรุณากรอกชื่อ'
        fn_bool = false
        button.disabled = !(e_bool && p_bool && fn_bool && ln_bool)
    } else {
        fname_input.style.border = ''
        fname_p.innerHTML = ''
        fn_bool = true
        button.disabled = !(e_bool && p_bool && fn_bool && ln_bool)
    }
}

function validateLname(lname_input, lname_p) {
    const lname = lname_input.value

    if (lname === '') {
        lname_input.style.border = '2px solid red'
        lname_p.innerHTML = 'กรุณากรอกนามสกุล'
        ln_bool = false
        button.disabled = !(e_bool && p_bool && fn_bool && ln_bool)
    } else {
        lname_input.style.border = ''
        lname_p.innerHTML = ''
        ln_bool = true
        button.disabled = !(e_bool && p_bool && fn_bool && ln_bool)
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

    const fname_input = document.getElementById('firstname')
    const fname_p = document.getElementById('firstname_p')
    fname_input.addEventListener('input', function () {
        validateFname(fname_input, fname_p)
    });

    const lname_input = document.getElementById('lastname')
    const lname_p = document.getElementById('lastname_p')
    lname_input.addEventListener('input', function () {
        validateLname(lname_input, lname_p)
    });
});
