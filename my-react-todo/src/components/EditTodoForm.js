import React, {Component} from 'react';

class EditTodoForm extends Component {

	constructor(){
		super()
		this.state = {
			updatedTodoBody: ''
		}
	}

	onInputChange(event){
		console.log('changing a todo')
		this.setState({
			updatedTodoBody: event.target.value
		})
	}

	onFormSubmit(event){
		console.log('edit todo form submitted')
		event.preventDefault()
		let updatedTodo = this.state.todo
		this.props.onUpdateTodo(this.state.updatedTodoBody)
		this.setState({
			updatedTodoBody: ""
		})
	}

	render(){
		return(
			<div className='EditTodoForm'>
				<form onSubmit={event => this.onFormSubmit(event)}>
					<input
						onChange={event => this.onInputChange(event)}
						placeholder='update todo here...'
						type='text'
						value={this.state.updatedToBody} />
					<button type='submit'>update todo</button>
				</form>
			</div>
		)
	}
}

export default EditTodoForm
