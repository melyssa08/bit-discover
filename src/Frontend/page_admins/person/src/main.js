function delete_user(indetification) {
	$.ajax({
		url: '/api/candidates/' + indetification,
		type: 'DELETE',
		success: function (result) {
			document.getElementById('user-' + indetification).remove();
		},
	});
}

function create_user(indetification, name, date, idade, email) {
	document.getElementById('main-body').innerHTML += `
		<tr id="user-${indetification}">
			<td>
				<img src="https://source.boringavatars.com/beam/${name}" alt="" />
				<a href="#" class="user-link">${name}</a>
				<span class="user-subhead">${indetification}</span>
			</td>
			<td>${date}</td>
			<td class="text-center">
				<span class="label label-default">${idade}</span>
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
				<a href="#" class="table-link danger" onclick="delete_user(${indetification})">
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
	$.get('/api/candidates', function (data) {
		data.forEach(function (candidate) {
			create_user(candidate.id, candidate.name, candidate.created_at, candidate.age, candidate.email);
		});
	});
});
