function teste() {
    console.log('teste')
// Consumo de api por jQuery com o método get
    $.get("http://localhost:3000/jobs", function(resultado){
        console.log(resultado)
        var count = 0
        console.log(resultado.length)
        // Veio como array o resultado então usa o map para fazer a modificação em cada item do array
        resultado.map((resul) => {
           // Está colocando os cards no html por meio do jQuery
        $("#cards").append();
        // Template de string que mostra a criação dos cards como se fosse um html só que dentro de um arquivo javascript
        $("#cards").append(`<!--Inicio Card-->
        <div class="card container d-flex justify-content-between align-items-center text-black jobsVisualization-col-4">
          <div class="row">
           <div class="mt-3 text-center col-12">
             <!--Imagem Card-->
            <div class="user text-center">

            </div>
            <!--Conteúdo Card-->
             <h4 class="mb-0">` + resul.company_name + `</h4>
             <span class="text-muted d-block mb-2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="purple" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
              <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
            </svg>` + resul.company_local + `</span></div>
             <div class="col-12">
              <div class="col-12" jobsVisualization-style"><p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-briefcase-fill" viewBox="0 0 16 16">
                <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5z"/>
                <path d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85v5.65z"/>
              </svg>&nbsp; ` + resul.name + `</p></div>
              <div class="col-12 jobsVisualization-style"><p id = "jobsVisualization-style-education"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trophy-fill" viewBox="0 0 16 16"><path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5c0 .538-.012 1.05-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33.076 33.076 0 0 1 2.5.5zm.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935zm10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935z"/>   
              </svg>&nbsp;` + resul.education_level + `</p></div>
              <div class="col-12 jobsVisualization-style"><p><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-clock-fill" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
              </svg>&nbsp;` + resul.job_time + ` Horas semanais</p></div>
              <div class="col-12 jobsVisualization-style""><p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cash-stack" viewBox="0 0 16 16">
                <path d="M1 3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1H1zm7 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/>
                <path d="M0 5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V5zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V7a2 2 0 0 1-2-2H3z"/>
              </svg><b>&nbsp; ` + resul.type + `:</b> R$` + resul.salary_min + ` - R$` + resul.salary_max + `</p></div>
        </div>
        <!--Botão Card-->
        <div class="col-12">&nbsp;</div>
             <button class="btn btn-primary btn-sm follow" id="jobsVisualization-follow" data-bs-toggle="modal" data-bs-target="#modalid` + resul.id + `">Saber Mais</button>
             
           </div>
              <!---->
                             <div class="modal fade" id="modalid` + resul.id + `" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="jobsVisualization-example-modal-label">Vaga de Empresa <b>` + resul.company_name + `</b></h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body row jobsVisualization-style">
                      <h6>Atividades</h6>
                      <ul  class ="jobsVisualization-activities-required">
                        <li>` + resul.activities + `</li>
                      </ul>
                      <h6>Requisitos</h6>
                      <ul class="jobsVisualization-activities-required">
                        <li>` + resul.required + `</li>
                      </ul>
                      <h6>Sobre a empresa</h6>
                      <ul id="jobsVisualization-list"><li id = jobsVisualization-company-description>` + resul.company_description + `</li></ul>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Recusar</button>
                      <button type="button" class="btn btn-primary" id ="jobsVisualization-contact">Contactar</button>
                    </div>
                  </div>
                </div>
              </div>
              </div>`)
    })
        
    }); 
}