// Carrega a NavBar e a SideBar 
window.addEventListener('load', function () {
    $("#likesCandidates-header").load("/page_candidates/side_and_navbar/index.html", function (response, status) {
        if (status == "error") {
            console.log("Deu errado")
        } else {
            console.log("funcionou")
        }
    })
})

// Converte strings em arrays
function convertStringInArray (likesDoUser) {
  return likesDoUser.split(',').map((i) => {return parseInt(i)})
}

// Itera sobre os jobs do usuario e compara com ids
function iterateJobsAndCompare (ids) {
  $.ajax({
    url: `http://127.0.0.1:3000/api/jobs/`,
    type: 'get',
    dataType: 'json',
    async: false,
    success: function(data) {
        result = data.map((jobsToUser) => {
          for (j == 0; j < ids.length; j++) {
            if (jobsToUser.id == ids[j]) {
              return jobsToUser
            }
          }
        })
    }})
    return result
}

// Funcao que seta os cards que o usuário deu like no localStorage e também atualiza o banco
function addLikesLocalStorageAndDataBase (idCard) {

}

// Carrega os cards com likes
function loadCard () {

    iterateJobsAndCompare(convertStringInArray(JSON.parse(localStorage.UserBITDiscover).likes)).map((resul) => {

    $('#likesCandidates-main').append(
      `<!--Inicio Card-->
      <div class="col-4">
        <div class="card container d-flex justify-content-between align-items-center text-black likesCandidates-fix-center col-12">
          <div class="row">
          <div class="mt-3 text-center col-12">
            <!--Imagem Card-->
            <div class="user text-center">

            </div>
            <!--Conteúdo Card-->
            <h4 class="mb-0">` +
        resul.company.name +
        `</h4>
            <span class="text-muted d-block mb-2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="purple" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
              <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
            </svg> ` +
        resul.postal_code +
        `</span></div>
            <div class="col-12">
              <div class="col-12" likesCandidates-style"><p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-briefcase-fill" viewBox="0 0 16 16">
                <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5z"/>
                <path d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85v5.65z"/>
              </svg>&nbsp; ` +
        resul.name +
        `</p></div>
              <div class="col-12 likesCandidates-style"><p id = "likesCandidates-style-education"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trophy-fill" viewBox="0 0 16 16"><path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5c0 .538-.012 1.05-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33.076 33.076 0 0 1 2.5.5zm.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935zm10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935z"/>
              </svg>&nbsp; ` +
        resul.scholarship +
        `</p></div>
              <div class="col-12 likesCandidates-style"><p><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-clock-fill" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
              </svg>&nbsp; ` +
        resul.workload +
        ` Horas diárias</p></div>
              <div class="col-12 likesCandidates-style""><p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cash-stack" viewBox="0 0 16 16">
                <path d="M1 3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1H1zm7 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/>
                <path d="M0 5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V5zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V7a2 2 0 0 1-2-2H3z"/>
              </svg><b>&nbsp; ` +
        resul.type +
        `:</b> R$` +
        resul.salary_min +
        ` - R$` +
        resul.salary_max +
        `</p></div>
        </div>
        <!--Botão Card-->
        <div class="col-12">&nbsp;</div>
          <div id='likesCandidates-space-like'>
            <button class="btn btn-primary btn-sm follow" id="likesCandidates-follow" data-bs-toggle="modal" data-bs-target="#modalid` +
        resul.id +
        `">SAIBA MAIS</button>
            <svg xmlns="http://www.w3.org/2000/svg" value="`+ resul.id +`" width="35" height="30" id="likesCandidates-icon-like" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
            </svg>
          </div>
<br>
          </div>
              <!---->
              <div class="modal fade" id="modalid` +
        resul.id +
        `" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="likesCandidates-example-modal-label">Vaga de Empresa <b>` +
        resul.company.name +
        `</b></h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body row likesCandidates-style">
                      <h6><b>Atividades</b></h6>
                      <ul  class ="likesCandidates-activities-required"><ul><li>` + resul.description +
        `</li></ul><br>
        <h6><b>Modalidade</b></h6>
        <ul  class ="likesCandidates-activities-required">
          <li>`+ resul.modality + `</li>
                      </ul><br>
          <h6><b>Periodo</b></h6>
          <ul class ="likesCandidates-activities-required"> 
          <li>` + resul.shift + `</li></ul><br>
                      <h6><b>Requisitos</b></h6><hr>
          <h7 class="hsmall"><b>Softkills</b><h7><ul>
                      <ul class="likesCandidates-activities-required">
                        <li>` +
          [
          ...resul.requireds_softskill.map(function (resul) {
            return resul.name;
          }),
          ].join(', ') + `</li></ul></ul><h7 class="hsmall"><b>Hardskills</b><h7><ul><ul><li>` +
          [
          ...resul.requireds_hardskill.map(function (resul) {
            return resul.name;
          }),].join(', ') +
        `</li>
                      </ul></ul><hr>
          <h6><b>Vantagens</b></h6>
          <ul id="likesCandidates-list"><li id = likesCandidates-company-description>` +
          [
          ...resul.bonus.map(function (resul) {
            console.log(resul)
            return resul.name;
          }),
          ].join(', ') + `
          </li></ul><br>
                      <h6><b>Sobre a empresa</b></h6>
                      <ul id="likesCandidates-list"><li id = likesCandidates-company-description>` 
          + resul.company.description + `</li></ul><br>
          <div class="modal-footer modal-footer-fix">
            <button id="likesCandidates-confirm-modal" onclick="contacts` + resul.id + `()">Entrar em Contato</button>
              </div>
          <div id="contacts` + resul.id + `"> </div>
                    </div>
                  </div>
                </div>
              </div>
          </div>
  </div>
    <br>
    <script> function contacts` + resul.id + `() {
      $('#contacts` + resul.id + `').html("<br><b>Contato:<br> Email: `+ resul.job_contacts.email +` Telefone: `+ resul.job_contacts.number +`<br>Website: `+ resul.company.website + `</b>")}`
    )
  })

  addFuncionalityLike()
}

// Adiciona funcionalidade ao icone de like, propriedades de estilo
function addFuncionalityLike () {

let itens = document.querySelectorAll('[id^=likesCandidates-icon-like]');
		for (let i = 0; i < itens.length; i++) {
			let iconLike = itens[i];
			iconLike.style.alignSelf = 'flex-end';
			iconLike.style.cursor = 'pointer';
			iconLike.style.color = 'rgb(243, 196, 46)';
			function changeColorLike() {
				var stateIconLike = false;
				iconLike.addEventListener('click', function () {
					console.log('Funciona');
					if (stateIconLike == false) {
						stateIconLike = true;
						iconLike.style.color = 'rgb(83, 00, 132)';
            iconLike.value = `${iconLike.value}true`  
					} else {
						iconLike.style.color = 'rgb(243, 196, 46)';
						stateIconLike = false;
					}
				});
			}
			changeColorLike();
		}
}

loadCard()