import $ from 'jquery';

class TodoModel {
	static all() {
		let request =$.ajax({
			url: "https://super-crud.herokuapp.com/todos",
			method: 'GET'
		})
		return request
	}

	static create(todo){
		console.log('creating todo')
		let request = $.ajax({
			url: "https://super-crud.herokuapp.com/todos",
			method: 'POST',
			data: todo
		})
		return request
	}

	static delete(todo){
		console.log(todo);
		let request = $.ajax({
			url: "https://super-crud.herokuapp.com/todos/" + todo._id,
			method: 'DELETE'
		})
		return request
	}

	static update(todo){
		console.log(todo);
		let request = $.ajax({
			url: "https://super-crud.herokuapp.com/todos/" + todo._id,
			method: 'PUT'
		})
		return request
	}
	
}

export default TodoModel