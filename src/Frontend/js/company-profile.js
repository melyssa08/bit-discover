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
