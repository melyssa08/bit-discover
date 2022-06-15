function pencilbutton() {
    var inputs = document.querySelectorAll("input")
    var textarea = document.querySelectorAll("textarea")
    var buttons = document.querySelectorAll(".companyProfile-button-tag")
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].disabled = false
        inputs[i].classList.remove("companyProfile-disabled")
    }
    for (let g = 0; g < textarea.length; g++) {
        textarea[g].disabled = false
        textarea[g].classList.remove("companyProfile-disabled")
    }
    for (let h = 0; h < buttons.length; h++) {
        buttons[h].disabled = false
    }
}

$.ajax({
    url: "http://127.0.0.1:3000/api/companies/?id=1",
    type: "GET",
    success: function (data) {
        console.log(data);
        console.log(data[0]["name"]);
        $("#companyProfile-input-company-name").val(data[0]["name"]);
        $("#companyProfile-input-email").val(data[0]["email"]);
        $("#companyProfile-input-confirmemail").val(data[0]["email"]);
        $("#companyProfile-input-cnpj").val(data[0]["cnpj"]);
        $("#companyProfile-input-password").val(data[0]["password"]);
        $("#companyProfile-input-confirmpassword").val(data[0]["password"]);
        $("#companyProfile-input-cp").val(data[0]["postal_code"]);
        $("#companyProfile-input-link").val(data[0]["website"]);
        $("#companyProfile-textarea").val(data[0]["description"]);
    },
});

function update_profile() {
    if (!($("#companyProfile-input-email").val() == $("#companyProfile-input-confirmemail").val())) {
        return alert("Os emails não coincidem!")
    }
    if (!($("#companyProfile-input-password").val() == $("#companyProfile-input-confirmpassword").val())) {
        return alert("As senhas não coincidem!")
    }
    $.ajax({
        url: "http://127.0.0.1:3000/api/companies/0",
        type: "PUT",
        data: `name=${$(
            "#companyProfile-input-company-name"
        ).val()}&email=${$("#companyProfile-input-email").val()}&cnpj=${$(
            "#companyProfile-input-cnpj"
        ).val()}&password=${$(
            "#companyProfile-input-confirmpassword"
        ).val()}&postal_code=${$(
            "#companyProfile-input-cp"
        ).val()}&website=${$(
            "#companyProfile-input-link"
        ).val()}&description=${$("#companyProfile-textarea").val()}`,
    });
}
