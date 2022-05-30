function create_user(type, name, date, status, email) {
	return `
		<tr>
			<td>
				<img src="https://source.boringavatars.com/beam/${name}" alt="" />
				<a href="#" class="user-link">${name}</a>
				<span class="user-subhead">${type}</span>
			</td>
			<td>${date}</td>
			<td class="text-center">
				<span class="label label-default">${status}</span>
			</td>
			<td>
				<a href="#">${email}</a>
			</td>
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
	document.getElementById('main-body').innerHTML += create_user('Admin', 'Valentina', '10/10/2018', 'Ativa', 'valentina.email@gmail.com');
	document.getElementById('main-body').innerHTML += create_user('Usuário', 'Mihaell', '08/04/2016', 'Inativa', 'mihaell.email@gmail.com');
	document.getElementById('main-body').innerHTML += create_user('Empresa', 'Melyssa', '28/07/2022', 'Banida', 'melyssa.email@gmail.com');
	document.getElementById('main-body').innerHTML += create_user('Usuário', 'João Pedro', '16/12/2021', 'Confirmando', 'joaopedro.email@gmail.com');
	document.getElementById('main-body').innerHTML += create_user('Empresa', 'Gabriel', '16/12/2021', 'Ativa', 'gabriel.email@gmail.com');
	document.getElementById('main-body').innerHTML += create_user('Usuário', 'Alberto', '16/12/2021', 'Ativa', 'alberto.email@gmail.com');
});
