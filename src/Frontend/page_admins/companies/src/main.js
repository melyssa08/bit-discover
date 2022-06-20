function create_user(fantasy_name, company_name, jobs_open, status, email, cnpj, date) {
	document.getElementById('main-body').innerHTML += `
		<tr>
			<td>
				<img src="https://source.boringavatars.com/beam/${fantasy_name}" alt="" />
				<a href="#" class="user-link">${fantasy_name}</a>
				<span class="user-subhead">${company_name}</span>
			</td>
			<td>
				<a href="#">${jobs_open}</a>
			</td>
			<td class="text-center">
				<span class="label label-default">${status}</span>
			</td>
			<td>
				<a href="#">${email}</a>
			</td>
			<td>
				<a href="#">${cnpj}</a>
			</td>
			<td>${date}</td>
			<td style="width: 20%">
				<a href="#" class="table-link">
					<span class="fa-stack">
						<i class="fa fa-square fa-stack-2x"></i>
						<i class="fa fa-search-plus fa-stack-1x fa-inverse"></i>
					</span>
				</a>
				<a href="#" class="table-link">
					<span class="fa-stack">
						<i class="fa fa-square fa-stack-2x"></i>
						<i class="fa fa-pencil fa-stack-1x fa-inverse"></i>
					</span>
				</a>
				<a href="#" class="table-link danger">
					<span class="fa-stack">
						<i class="fa fa-square fa-stack-2x"></i>
						<i class="fa fa-trash-o fa-stack-1x fa-inverse"></i>
					</span>
				</a>
			</td>
		</tr>
	`;
}

$(document).ready(function () {
	create_user('INTELI', 'Instituto de Tecnologia e Liderança', '10', 'Ativo', 'inteli.edu@sou.inteli.edu.br', '00.000.000/0001-00', '01/01/2018');
	create_user('INTELI', 'Instituto de Tecnologia e Liderança', '10', 'Ativo', 'inteli.edu@sou.inteli.edu.br', '00.000.000/0001-00', '01/01/2018');
	create_user('INTELI', 'Instituto de Tecnologia e Liderança', '10', 'Ativo', 'inteli.edu@sou.inteli.edu.br', '00.000.000/0001-00', '01/01/2018');
	create_user('INTELI', 'Instituto de Tecnologia e Liderança', '10', 'Ativo', 'inteli.edu@sou.inteli.edu.br', '00.000.000/0001-00', '01/01/2018');
	create_user('INTELI', 'Instituto de Tecnologia e Liderança', '10', 'Ativo', 'inteli.edu@sou.inteli.edu.br', '00.000.000/0001-00', '01/01/2018');
});
