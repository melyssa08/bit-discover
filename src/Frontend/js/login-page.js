let button = document.querySelector("#login-btn-entrar")

$('#candidate').change(function () {
    if ($(this).is(":checked")) {
        button.setAttribute("onclick", "loginCandidate()")
    }
})
$('#company').change(function () {
    if ($(this).is(":checked")) {
        button.setAttribute("onclick", "loginCompany()")
    }
})

function loginCompany() {
    var user = document.getElementById('login-input-email').value;
    var senha = document.getElementById('login-input-senha').value;

    $.ajax({
        url: "http://127.0.0.1:3000/api/companies/login",
        type: "POST",
        data: {
            email: user,
            password: senha
        },
        success: data => {
            console.log(data);
        localStorage.setItem("UserBITDiscover", JSON.stringify(data));
        window.location.href = 'http://127.0.0.1:3000/page_recruiter/my_jobs/index.html'
        }
    }).fail(function(err) {
        console.log(err);
        alert('Credenciais Incorretas');
    })
}

function loginCandidate() {
    var user = document.getElementById('login-input-email').value;
    var senha = document.getElementById('login-input-senha').value;

    $.ajax({
        url: "http://127.0.0.1:3000/api/candidates/login",
        type: "POST",
        data: {
            email: user,
            password: senha
        },
        success: data => {
            console.log(data);
        localStorage.setItem("UserBITDiscover", JSON.stringify(data));
        window.location.href = 'http://127.0.0.1:3000/page_candidates/jobs_visualization/index.html'
        }
    }).fail(function(err) {
        console.log(err);
        alert('Credenciais Incorretas');
    })
}